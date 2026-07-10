const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");
const defaultBaseUrl = "https://lambienquangcaohanoi.io.vn";
const baseUrl = process.env.SITE_URL || defaultBaseUrl;

const ignoredDirs = new Set([".git", ".wrangler", "assets", "dist", "node_modules", "scripts"]);

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });

copyDir(path.join(root, "assets"), path.join(dist, "assets"));
copyFile(path.join(root, "sitemap.xml"), path.join(dist, "sitemap.xml"));
copyFile(path.join(root, "sitemap-google.xml"), path.join(dist, "sitemap-google.xml"));
copyFile(path.join(root, "sitemap.txt"), path.join(dist, "sitemap.txt"));
copyFile(path.join(root, "image-sitemap.xml"), path.join(dist, "image-sitemap.xml"));
copyFile(path.join(root, "_headers"), path.join(dist, "_headers"));
if (fs.existsSync(path.join(root, "_redirects"))) {
  copyFile(path.join(root, "_redirects"), path.join(dist, "_redirects"));
}
for (const iconFile of [
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "site.webmanifest"
]) {
  if (fs.existsSync(path.join(root, iconFile))) {
    copyFile(path.join(root, iconFile), path.join(dist, iconFile));
  }
}
fs.writeFileSync(path.join(dist, ".nojekyll"), "", "utf8");

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-priority.xml
Sitemap: ${baseUrl}/sitemap-google.xml
Sitemap: ${baseUrl}/image-sitemap.xml
`;
fs.writeFileSync(path.join(dist, "robots.txt"), robots, "utf8");

const priorityCandidateSlugs = [
  "",
  "bao-gia-bien-quang-cao-ha-noi",
  "bao-gia-bien-alu-chu-noi-ha-noi",
  "lien-he-lam-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-theo-nhu-cau-khach-hang-ha-noi",
  "bien-quang-cao-cho-cua-hang-sap-khai-truong-ha-noi",
  "bien-quang-cao-cho-cua-hang-mat-tien-nho-ha-noi",
  "bien-quang-cao-cho-cua-hang-trong-ngo-ha-noi",
  "bien-quang-cao-cho-quan-an-ban-toi-ha-noi",
  "bien-quang-cao-cho-spa-salon-can-sang-trong-ha-noi",
  "bien-quang-cao-cho-shop-can-nhan-dien-thuong-hieu-ha-noi",
  "bien-quang-cao-cho-cua-hang-can-tiet-kiem-chi-phi-ha-noi",
  "bien-quang-cao-cho-cua-hang-can-sua-bien-cu-ha-noi",
  "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi",
  "bao-gia-lam-bien-quang-cao-theo-m2-ha-noi",
  "chi-phi-lam-bien-cua-hang-moi-ha-noi",
  "bang-gia-hiflex-alu-hop-den-ha-noi",
  "bao-gia-bien-theo-kich-thuoc-ha-noi",
  "du-toan-chi-phi-bien-mat-tien-ha-noi",
  "lam-bien-quang-cao-mat-bao-lau-ha-noi",
  "kich-thuoc-bien-quang-cao-mat-tien-ha-noi",
  "chon-chat-lieu-bien-quang-cao-ha-noi",
  "cach-tiet-kiem-chi-phi-lam-bien-quang-cao-ha-noi",
  "bien-quang-cao-ngoai-troi-ben-bao-lau-ha-noi",
  "bao-gia-bien-vay-led-ha-noi",
  "bao-gia-bien-hop-den-hai-mat-ha-noi",
  "bao-gia-bien-led-ma-tran-ha-noi",
  "bao-gia-backdrop-logo-le-tan-ha-noi",
  "bao-gia-decal-kinh-cua-hang-ha-noi",
  "bao-gia-bien-menu-quan-an-ha-noi",
  "bao-gia-bien-quang-cao-dong-da",
  "bao-gia-bien-quang-cao-cau-giay",
  "bao-gia-bien-quang-cao-thanh-xuan",
  "bao-gia-bien-quang-cao-ha-dong",
  "bao-gia-bien-quang-cao-hoang-mai",
  "bao-gia-bien-quang-cao-ba-dinh",
  "bao-gia-bien-quang-cao-tay-ho",
  "bao-gia-bien-quang-cao-nam-tu-liem",
  "bao-gia-bien-quang-cao-long-bien",
  "bao-gia-bien-quang-cao-hai-ba-trung",
  "bao-gia-bang-hieu-quan-an-ha-noi",
  "bao-gia-bang-hieu-quan-cafe-ha-noi",
  "bao-gia-bang-hieu-spa-salon-ha-noi",
  "bao-gia-bang-hieu-nha-thuoc-ha-noi",
  "bao-gia-bang-hieu-shop-quan-ao-ha-noi",
  "bao-gia-bang-hieu-phong-kham-ha-noi",
  "bien-quang-cao-theo-nganh-va-quan-ha-noi",
  "bien-quan-cafe-dong-da-ha-noi",
  "bien-quan-an-cau-giay-ha-noi",
  "bien-spa-dong-da-ha-noi",
  "bien-nha-thuoc-thanh-xuan-ha-noi",
  "bien-phong-kham-cau-giay-ha-noi",
  "bien-shop-quan-ao-cau-giay-ha-noi",
  "thi-cong-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-ha-noi",
  "nhu-cau-lam-bien-quang-cao-ha-noi",
  "gui-anh-bao-gia-bien-quang-cao-ha-noi",
  "khao-sat-lam-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-mat-pho-ha-noi",
  "lam-bien-quang-cao-mat-tien-nho-ha-noi",
  "thay-bien-cu-cua-hang-ha-noi",
  "sua-chua-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-shop-moi-mo-ha-noi",
  "lam-bien-quang-cao-can-gap-ha-noi",
  "lam-bien-quang-cao-theo-mat-bang-ha-noi",
  "lam-bien-quang-cao-mat-tien-hep-ha-noi",
  "lam-bien-quang-cao-trong-ngo-ha-noi",
  "lam-bien-quang-cao-tang-2-ha-noi",
  "lam-bien-quang-cao-mat-tien-rong-ha-noi",
  "lam-bien-quang-cao-nha-lo-goc-ha-noi",
  "lam-bien-quang-cao-doi-thuong-hieu-ha-noi",
  "cap-nhat-dich-vu-bien-quang-cao-ha-noi",
  "tat-ca-dich-vu-bien-quang-cao-ha-noi",
  "bien-quang-cao-theo-hang-muc-ha-noi",
  "bien-hieu-cua-hang-ha-noi",
  "lam-bien-mat-tien-cua-hang-ha-noi",
  "bao-gia-lam-bang-hieu-cua-hang-ha-noi",
  "lam-bien-quang-cao-co-den-led-ha-noi",
  "lam-bien-vay-led-ha-noi",
  "lam-bien-hop-den-hai-mat-ha-noi",
  "lam-bien-led-ma-tran-ha-noi",
  "lam-bien-quang-cao-buoi-toi-ha-noi",
  "lam-bien-quang-cao-khai-truong-gap-ha-noi",
  "lam-backdrop-logo-le-tan-ha-noi",
  "lam-decal-kinh-cua-hang-ha-noi",
  "lam-bien-menu-quan-an-ha-noi",
  "lam-bien-quan-nhau-bia-hoi-ha-noi",
  "lam-bien-shop-my-pham-ha-noi",
  "lam-bien-vay-led-dong-da-ha-noi",
  "lam-bien-vay-led-cau-giay-ha-noi",
  "lam-bien-hop-den-led-ha-dong-ha-noi",
  "lam-bien-hop-den-led-thanh-xuan-ha-noi",
  "lam-backdrop-logo-van-phong-nam-tu-liem-ha-noi",
  "lam-decal-kinh-showroom-cau-giay-ha-noi",
  "lam-bien-menu-quan-an-dong-da-ha-noi",
  "lam-bien-quan-nhau-hoang-mai-ha-noi",
  "lam-bang-hieu-cua-hang-ha-noi",
  "bang-hieu-cua-hang-dong-da-ha-noi",
  "bang-hieu-quan-an-dong-da-ha-noi",
  "bang-hieu-quan-cafe-cau-giay-ha-noi",
  "bang-hieu-spa-cau-giay-ha-noi",
  "bang-hieu-nha-thuoc-dong-da-ha-noi",
  "bang-hieu-shop-quan-ao-chua-boc-ha-noi",
  "bang-hieu-phong-kham-thanh-xuan-ha-noi",
  "lam-bien-quang-cao-dong-da",
  "lam-bien-quang-cao-o-cho-dua",
  "lam-bien-quang-cao-xa-dan",
  "lam-bien-quang-cao-thai-ha",
  "lam-bien-quang-cao-chua-boc",
  "lam-bien-quang-cao-truong-chinh",
  "lam-bien-quang-cao-minh-khai",
  "lam-bien-quang-cao-xuan-thuy",
  "lam-bien-quang-cao-duong-cau-giay",
  "lam-bien-quang-cao-nguyen-chi-thanh",
  "lam-bien-quang-cao-giang-vo",
  "lam-bien-quang-cao-lieu-giai",
  "lam-bien-quang-cao-ba-trieu",
  "lam-bien-quang-cao-lac-long-quan",
  "lam-bien-quang-cao-le-duc-tho",
  "lam-bien-quang-cao-gan-day-ha-noi"
];

const prioritySlugs = [
  "",
  "lam-bien-quang-cao-ha-noi",
  "thi-cong-bien-quang-cao-ha-noi",
  "bao-gia-bien-quang-cao-ha-noi",
  "lien-he-lam-bien-quang-cao-ha-noi",
  "gui-anh-bao-gia-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-gan-day-ha-noi",
  "sua-chua-bien-quang-cao-ha-noi",
  "lam-bien-quang-cao-can-gap-ha-noi",
  "lam-bien-mat-tien-cua-hang-ha-noi",
  "lam-bien-quang-cao-dong-da",
  "bao-gia-bien-alu-chu-noi-ha-noi"
];

for (const slug of prioritySlugs) {
  if (!priorityCandidateSlugs.includes(slug)) {
    throw new Error(`Priority slug is missing from the candidate map: ${slug || "/"}`);
  }
}
const prioritySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prioritySlugs
  .map((slug, index) => {
    const loc = slug ? `${baseUrl}/${slug}/` : `${baseUrl}/`;
    const priority = index === 0 ? "1.0" : index <= 3 ? "0.9" : "0.8";
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap-priority.xml"), prioritySitemap, "utf8");
fs.writeFileSync(path.join(root, "sitemap-priority.xml"), prioritySitemap, "utf8");

const testSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap-test.xml"), testSitemap, "utf8");
fs.writeFileSync(path.join(dist, "sitemap-test.txt"), `${baseUrl}/\n`, "utf8");

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && /^google[a-z0-9]+\.html$/i.test(entry.name)) {
    copyFile(path.join(root, entry.name), path.join(dist, entry.name));
  }

  if (entry.isFile() && /^[a-z0-9-]{8,128}\.txt$/i.test(entry.name) && !["robots.txt", "sitemap.txt"].includes(entry.name)) {
    copyFile(path.join(root, entry.name), path.join(dist, entry.name));
  }
}

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
  if (entry.isDirectory()) {
    const src = path.join(root, entry.name, "index.html");
    if (fs.existsSync(src)) copyFile(src, path.join(dist, entry.name, "index.html"));
  }
}

copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));

function rewriteBaseUrl(dir) {
  if (baseUrl === defaultBaseUrl) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      rewriteBaseUrl(filePath);
      continue;
    }

    if (!/\.(html|xml|txt|json|js|css)$/i.test(entry.name)) continue;

    const text = fs.readFileSync(filePath, "utf8");
    if (!text.includes(defaultBaseUrl)) continue;
    fs.writeFileSync(filePath, text.replaceAll(defaultBaseUrl, baseUrl), "utf8");
  }
}

rewriteBaseUrl(dist);

console.log(`Built deploy output: ${dist}`);
