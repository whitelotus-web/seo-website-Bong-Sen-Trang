const fs = require("fs");
const path = require("path");

const root = process.cwd();
const ignoredDirs = new Set([
  ".git",
  ".wrangler",
  "assets",
  "dist",
  "node_modules",
  "scripts",
  "facebook-schedule-pack",
  "social-assets",
  "video-assets"
]);

const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name === "index.html") {
      files.push(full);
    }
  }
}

function addSignals(html) {
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)">/i);
  if (!canonicalMatch) return html;

  const canonical = canonicalMatch[1];
  const lines = [];

  if (!html.includes('hreflang="vi-VN"')) {
    lines.push(`    <link rel="alternate" hreflang="vi-VN" href="${canonical}">`);
  }

  if (!html.includes('hreflang="x-default"')) {
    lines.push(`    <link rel="alternate" hreflang="x-default" href="${canonical}">`);
  }

  if (!html.includes('http-equiv="content-language"')) {
    lines.push('    <meta http-equiv="content-language" content="vi-VN">');
  }

  if (!html.includes('name="geo.region"')) {
    lines.push('    <meta name="geo.region" content="VN-HN">');
  }

  if (!html.includes('name="geo.placename"')) {
    lines.push('    <meta name="geo.placename" content="Hà Nội">');
  }

  if (!html.includes('name="geo.position"')) {
    lines.push('    <meta name="geo.position" content="21.0219;105.8257">');
  }

  if (!html.includes('name="ICBM"')) {
    lines.push('    <meta name="ICBM" content="21.0219, 105.8257">');
  }

  if (!lines.length) return html;

  return html.replace(
    /(<link\s+rel="canonical"\s+href="[^"]+">\r?\n)/i,
    `$1${lines.join("\n")}\n`
  );
}

function prefixToRoot(file) {
  const relative = path.relative(path.dirname(file), root).replace(/\\/g, "/");
  if (!relative || relative === ".") return "";
  return `${relative}/`;
}

function addFooterContactLink(html, file) {
  const prefix = prefixToRoot(file);
  const contactHref = `${prefix}lien-he-lam-bien-quang-cao-ha-noi/`;
  const nearbyHref = `${prefix}lam-bien-quang-cao-gan-day-ha-noi/`;
  const links = [
    [nearbyHref, "Làm biển quảng cáo gần đây"],
    [contactHref, "Liên hệ làm biển quảng cáo"]
  ].filter(([href]) => !html.includes(href));

  if (!links.length) return html;

  const linkHtml = links
    .map(([href, label]) => `<br>\n            <a href="${href}">${label}</a>`)
    .join("");

  return html.replace(
    /(<a href="https:\/\/www\.facebook\.com\/whitelotus\.vn\/?"[^>]*>[^<]*Fanpage[^<]*<\/a>)/,
    `$1${linkHtml}`
  );
}

walk(root);

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = addFooterContactLink(addSignals(before), file);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed += 1;
  }
}

console.log(`Added local SEO signals to ${changed} pages`);
