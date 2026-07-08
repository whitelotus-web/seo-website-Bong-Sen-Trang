const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const clientId = "54d11594-84e4-41aa-b438-e81b8fa78ee7";
const redirectUri = "http://localhost:8976/oauth/callback";
const authUrl = "https://dash.cloudflare.com/oauth2/auth";
const tokenUrl = "https://dash.cloudflare.com/oauth2/token";
const stateFile = path.join(process.cwd(), ".cloudflare-oauth-state.json");
const scopes = [
  "account:read",
  "user:read",
  "workers:write",
  "workers_kv:write",
  "workers_routes:write",
  "workers_scripts:write",
  "workers_tail:read",
  "d1:write",
  "pages:write",
  "zone:read",
  "ssl_certs:write",
  "ai:write",
  "ai-search:write",
  "ai-search:run",
  "websearch.run",
  "agent-memory:write",
  "queues:write",
  "pipelines:write",
  "secrets_store:write",
  "artifacts:write",
  "flagship:write",
  "containers:write",
  "cloudchamber:write",
  "connectivity:admin",
  "email_routing:write",
  "email_sending:write",
  "browser:write",
  "offline_access"
];

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function randomString(length = 96) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const bytes = crypto.randomBytes(length);
  let out = "";
  for (const byte of bytes) out += charset[byte % charset.length];
  return out;
}

function wranglerConfigPath() {
  const appData = process.env.APPDATA || path.join(process.env.USERPROFILE, "AppData", "Roaming");
  return path.join(appData, "xdg.config", ".wrangler", "config", "default.toml");
}

function tomlString(value) {
  return JSON.stringify(value);
}

function writeWranglerAuth(json) {
  const configPath = wranglerConfigPath();
  const scopesValue = (json.scope || "").split(" ").filter(Boolean);
  const expiration = new Date(Date.now() + Number(json.expires_in || 0) * 1000).toISOString();
  const toml = [
    `oauth_token = ${tomlString(json.access_token)}`,
    `refresh_token = ${tomlString(json.refresh_token || "")}`,
    `expiration_time = ${tomlString(expiration)}`,
    `scopes = [${scopesValue.map(tomlString).join(", ")}]`,
    ""
  ].join("\n");

  fs.mkdirSync(path.dirname(configPath), { recursive: true });
  fs.writeFileSync(configPath, toml, { encoding: "utf8", mode: 0o600 });
  try {
    fs.chmodSync(configPath, 0o600);
  } catch {
    // Windows may ignore chmod semantics.
  }
  return configPath;
}

async function start() {
  const codeVerifier = randomString(96);
  const codeChallenge = base64url(crypto.createHash("sha256").update(codeVerifier).digest());
  const state = randomString(32);

  fs.writeFileSync(stateFile, JSON.stringify({ codeVerifier, state }, null, 2), { encoding: "utf8", mode: 0o600 });

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256"
  });

  console.log(`${authUrl}?${params.toString()}`);
}

async function finish(callbackUrl) {
  if (!callbackUrl) {
    throw new Error("Missing callback URL.");
  }
  if (!fs.existsSync(stateFile)) {
    throw new Error("Missing OAuth state. Run: npm run cf:oauth:start");
  }

  const saved = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  const url = new URL(callbackUrl);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code) throw new Error("Callback URL does not contain code.");
  if (state !== saved.state) throw new Error("Callback state does not match current OAuth flow.");

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: saved.codeVerifier
  });

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Cloudflare returned non-JSON response: ${res.status}`);
  }

  if (!res.ok || json.error) {
    throw new Error(`OAuth exchange failed: ${json.error || res.status}`);
  }

  const configPath = writeWranglerAuth(json);
  fs.rmSync(stateFile, { force: true });
  console.log(`Wrangler OAuth saved: ${configPath}`);
}

const [command, ...rest] = process.argv.slice(2);

if (command === "start") {
  start().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
} else if (command === "finish") {
  finish(rest.join(" ")).catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
} else {
  console.error("Usage: node scripts/cloudflare-oauth.js start|finish <callback-url>");
  process.exit(1);
}
