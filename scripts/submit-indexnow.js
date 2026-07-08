const fs = require("fs");
const https = require("https");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const host = new URL(baseUrl).host;

const keyFile = fs
  .readdirSync(root)
  .find((file) => /^[a-z0-9-]{8,128}\.txt$/i.test(file) && !["sitemap.txt", "robots.txt"].includes(file));

if (!keyFile) {
  throw new Error("Missing IndexNow key file in project root.");
}

const key = path.basename(keyFile, ".txt");
const keyValue = fs.readFileSync(path.join(root, keyFile), "utf8").trim();

if (key !== keyValue) {
  throw new Error(`IndexNow key file content must match file name: ${keyFile}`);
}

const sitemapTextPath = path.join(root, "sitemap.txt");
const sitemapXmlPath = path.join(root, "sitemap.xml");

let urls = [];
if (fs.existsSync(sitemapTextPath)) {
  urls = fs
    .readFileSync(sitemapTextPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
} else {
  const sitemap = fs.readFileSync(sitemapXmlPath, "utf8");
  urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

urls = urls.filter((url) => {
  try {
    return new URL(url).host === host;
  } catch {
    return false;
  }
});

if (!urls.length) {
  throw new Error("No valid URLs found for IndexNow submission.");
}

const payload = JSON.stringify({
  host,
  key,
  keyLocation: `${baseUrl}/${keyFile}`,
  urlList: urls
});

const request = https.request(
  "https://api.indexnow.org/indexnow",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload)
    }
  },
  (response) => {
    let body = "";
    response.setEncoding("utf8");
    response.on("data", (chunk) => {
      body += chunk;
    });
    response.on("end", () => {
      if (response.statusCode === 200 || response.statusCode === 202) {
        console.log(`IndexNow submitted ${urls.length} URLs: HTTP ${response.statusCode}`);
        return;
      }

      console.error(`IndexNow failed: HTTP ${response.statusCode}`);
      if (body.trim()) console.error(body.trim());
      process.exit(1);
    });
  }
);

request.on("error", (error) => {
  console.error(`IndexNow request error: ${error.message}`);
  process.exit(1);
});

request.write(payload);
request.end();
