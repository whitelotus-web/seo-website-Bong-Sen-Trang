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
const targetPages = new Set([
  "bien-quang-cao-theo-nganh-ha-noi",
  "bien-quang-cao-theo-nganh-va-quan-ha-noi",
  "lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi"
]);

function prefixToRoot(file) {
  const relative = path.relative(path.dirname(file), root).replace(/\\/g, "/");
  if (!relative || relative === ".") return "";
  return `${relative}/`;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    else if (entry.name === "index.html") files.push(fullPath);
  }
  return files;
}

function addCoreNavigation(html, file) {
  if (!targetPages.has(path.basename(path.dirname(file)))) return html;
  const prefix = prefixToRoot(file);
  const coreLinks = [
    [`${prefix}lam-bien-quang-cao-ha-noi/`, "Dịch vụ làm biển quảng cáo"],
    [`${prefix}bao-gia-bien-quang-cao-ha-noi/`, "Báo giá"],
    [`${prefix}hinh-anh-bien-quang-cao-thuc-te-ha-noi/`, "Mẫu biển thực tế"],
    [`${prefix}lien-he-lam-bien-quang-cao-ha-noi/`, "Liên hệ"],
  ];

  const missingLinks = coreLinks.filter(([href]) => !html.includes(`href="${href}"`));
  if (!missingLinks.length) return html;
  const links = missingLinks
    .map(([href, label]) => `        <a href="${href}">${label}</a>`)
    .join("\n");
  const nav = `\n      <nav class="footer-seo-links" aria-label="Liên kết dịch vụ chính">\n${links}\n      </nav>\n`;
  return html.replace(/\s*<\/footer>/i, `${nav}    </footer>`);
}

let changed = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, "utf8");
  const after = addCoreNavigation(before, file);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed += 1;
  }
}

console.log(`Core navigation: added to ${changed} pages`);
