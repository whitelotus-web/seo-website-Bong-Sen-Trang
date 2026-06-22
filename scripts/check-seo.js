const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.pages.dev";
const ignoredDirs = new Set([
  ".git",
  ".wrangler",
  "dist",
  "node_modules",
  "scripts",
  "facebook-schedule-pack",
  "social-assets",
  "video-assets"
]);

const files = [];
const errors = [];
const warnings = [];

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

function pageLabel(file) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "/")}`;
}

function textMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : "";
}

function pushError(file, message) {
  errors.push(`${pageLabel(file)} ${message}`);
}

function pushWarning(file, message) {
  warnings.push(`${pageLabel(file)} ${message}`);
}

walk(root);

const sitemapPath = path.join(root, "sitemap.xml");
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
if (!sitemap) {
  errors.push("Missing sitemap.xml");
}

const imageSitemapPath = path.join(root, "image-sitemap.xml");
const imageSitemap = fs.existsSync(imageSitemapPath) ? fs.readFileSync(imageSitemapPath, "utf8") : "";
if (!imageSitemap) {
  errors.push("Missing image-sitemap.xml");
} else {
  if (!imageSitemap.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')) {
    errors.push("image-sitemap.xml missing image namespace");
  }

  if (!imageSitemap.includes("<image:image>")) {
    errors.push("image-sitemap.xml has no image entries");
  }

  for (const match of imageSitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) {
    const loc = match[1];
    if (!loc.startsWith(`${baseUrl}/assets/images/`)) {
      errors.push(`image sitemap URL outside expected image path: ${loc}`);
      continue;
    }

    const imageName = loc.replace(`${baseUrl}/assets/images/`, "");
    const imagePath = path.join(root, "assets", "images", imageName);
    if (!fs.existsSync(imagePath)) {
      errors.push(`image sitemap file missing: ${imageName}`);
    }
  }
}

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const title = textMatch(html, /<title>([\s\S]*?)<\/title>/i);
  const description = textMatch(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = textMatch(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const robots = textMatch(html, /<meta\s+name="robots"\s+content="([^"]+)"/i).toLowerCase();
  const ogImage = textMatch(html, /<meta\s+property="og:image"\s+content="([^"]+)"/i);
  const twitterCard = textMatch(html, /<meta\s+name="twitter:card"\s+content="([^"]+)"/i);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  if (!title) pushError(file, "missing <title>");
  if (!description) pushError(file, "missing meta description");
  if (!canonical) pushError(file, "missing canonical URL");
  if (!robots.includes("index")) pushError(file, "robots meta should allow index");
  if (robots.includes("noindex")) pushError(file, "robots meta contains noindex");
  if (h1Count !== 1) pushError(file, `has ${h1Count} h1 tags`);
  if (!ogImage) pushError(file, "missing og:image");
  if (!twitterCard) pushWarning(file, "missing twitter:card");
  if (!jsonBlocks.length) pushError(file, "missing JSON-LD");

  if (canonical && !canonical.startsWith(baseUrl)) {
    pushError(file, `canonical is outside expected domain: ${canonical}`);
  }

  if (canonical && sitemap && !sitemap.includes(`<loc>${canonical}</loc>`)) {
    pushError(file, `canonical is not in sitemap: ${canonical}`);
  }

  if (title.length > 70) {
    pushWarning(file, `title is long (${title.length} chars)`);
  }

  if (description.length > 170) {
    pushWarning(file, `description is long (${description.length} chars)`);
  }

  if (ogImage && ogImage.startsWith(`${baseUrl}/assets/images/`)) {
    const imageName = ogImage.replace(`${baseUrl}/assets/images/`, "");
    const imagePath = path.join(root, "assets", "images", imageName);
    if (!fs.existsSync(imagePath)) {
      pushError(file, `og:image file missing: ${imageName}`);
    }
  }

  for (const block of jsonBlocks) {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      pushError(file, `invalid JSON-LD: ${error.message}`);
    }
  }
}

for (const warning of warnings) {
  console.warn(`SEO warning: ${warning}`);
}

if (errors.length) {
  for (const error of errors) {
    console.error(`SEO error: ${error}`);
  }
  process.exit(1);
}

console.log(`SEO OK: ${files.length} pages checked, ${warnings.length} warnings`);
