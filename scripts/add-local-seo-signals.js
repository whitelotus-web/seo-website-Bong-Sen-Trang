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

walk(root);

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = addSignals(before);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed += 1;
  }
}

console.log(`Added local SEO signals to ${changed} pages`);
