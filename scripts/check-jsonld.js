const fs = require("fs");
const path = require("path");

const root = process.cwd();
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "dist" || entry.name === ".wrangler") continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name === "index.html") {
      files.push(full);
    }
  }
}

walk(root);

let blocks = 0;
let homepageBusiness;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  for (const script of scripts) {
    const json = JSON.parse(script);
    if (path.relative(root, file) === "index.html" && json["@type"] === "LocalBusiness") {
      homepageBusiness = json;
    }
    blocks += 1;
  }
}

const expectedServiceUrls = [
  "https://lambienquangcaohanoi.io.vn/thi-cong-bien-quang-cao-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/bien-alu-chu-noi-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/bien-hop-den-led-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/lam-bien-vay-led-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/lam-decal-kinh-cua-hang-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/lam-backdrop-logo-le-tan-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/lam-bien-menu-quan-an-ha-noi/",
  "https://lambienquangcaohanoi.io.vn/sua-chua-bien-quang-cao-ha-noi/"
];

if (!homepageBusiness?.hasOfferCatalog?.itemListElement) {
  throw new Error("Homepage LocalBusiness must include a service OfferCatalog");
}

const serviceUrls = homepageBusiness.hasOfferCatalog.itemListElement
  .map((offer) => offer?.itemOffered?.url)
  .filter(Boolean);

for (const serviceUrl of expectedServiceUrls) {
  if (!serviceUrls.includes(serviceUrl)) {
    throw new Error(`Homepage OfferCatalog is missing ${serviceUrl}`);
  }
}

console.log(`JSON-LD OK: ${blocks} blocks in ${files.length} pages`);
