const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.netlify.app";
const lastmod = new Date().toISOString().slice(0, 10);

const ignoredDirs = new Set([
  ".git",
  ".wrangler",
  "assets",
  "dist",
  "node_modules",
  "scripts",
  "facebook-schedule-pack",
  "google-business-upload",
  "social-assets",
  "video-assets"
]);

const pageDirs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .filter((entry) => !ignoredDirs.has(entry.name))
  .filter((entry) => fs.existsSync(path.join(root, entry.name, "index.html")))
  .map((entry) => entry.name);

const pages = ["", ...pageDirs];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pageUrl(slug) {
  return slug ? `${baseUrl}/${slug}/` : `${baseUrl}/`;
}

function imageUrl(src, slug) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const normalized = src.replace(/^\.\.\//, "").replace(/^\.\//, "").replace(/^\//, "");
  if (normalized.startsWith("assets/")) return `${baseUrl}/${normalized}`;
  return slug ? `${baseUrl}/${slug}/${normalized}` : `${baseUrl}/${normalized}`;
}

const urlEntries = [];

for (const slug of pages) {
  const htmlPath = slug ? path.join(root, slug, "index.html") : path.join(root, "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");
  const images = [];
  const seen = new Set();

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1];
    if (!src || src.startsWith("data:")) continue;

    const loc = imageUrl(src, slug);
    if (!loc.includes("/assets/images/")) continue;
    if (seen.has(loc)) continue;
    seen.add(loc);

    const title = tag.match(/\salt="([^"]*)"/i)?.[1]?.trim() || "";
    images.push({ loc, title });
  }

  if (!images.length) continue;
  urlEntries.push({ loc: pageUrl(slug), images });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries
  .map((entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
${entry.images
  .map((image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>${image.title ? `
      <image:title>${escapeXml(image.title)}</image:title>` : ""}
    </image:image>`)
  .join("\n")}
  </url>`)
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "image-sitemap.xml"), xml, "utf8");
console.log(`Generated image sitemap: ${urlEntries.length} pages with images`);
