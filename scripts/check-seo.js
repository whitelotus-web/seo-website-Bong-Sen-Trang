const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
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

const prioritySitemapPath = path.join(root, "sitemap-priority.xml");
const prioritySitemap = fs.existsSync(prioritySitemapPath)
  ? fs.readFileSync(prioritySitemapPath, "utf8")
  : "";
if (!prioritySitemap) {
  errors.push("Missing sitemap-priority.xml");
} else {
  const priorityUrls = [...prioritySitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (priorityUrls.length !== 12) {
    errors.push(`sitemap-priority.xml should contain 12 focus URLs, found ${priorityUrls.length}`);
  }
  if (new Set(priorityUrls).size !== priorityUrls.length) {
    errors.push("sitemap-priority.xml contains duplicate URLs");
  }
  for (const loc of priorityUrls) {
    if (!loc.startsWith(`${baseUrl}/`)) {
      errors.push(`priority sitemap URL outside expected domain: ${loc}`);
    }
  }
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

const knownPages = new Map(files.map((file) => [pageLabel(file), file]));
const inboundLinks = new Map([...knownPages.keys()].map((url) => [url, 0]));

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const sourceUrl = `${baseUrl}${pageLabel(file)}`;

  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
    const href = match[1].trim();
    if (!href || href.startsWith("#")) continue;

    let target;
    try {
      target = new URL(href, sourceUrl);
    } catch {
      pushError(file, `invalid internal link: ${href}`);
      continue;
    }

    if (target.origin !== baseUrl) continue;

    let targetPath = decodeURIComponent(target.pathname);
    if (!targetPath.endsWith("/") && !path.posix.extname(targetPath)) {
      targetPath += "/";
    }

    if (knownPages.has(targetPath)) {
      inboundLinks.set(targetPath, inboundLinks.get(targetPath) + 1);
      continue;
    }

    if (!path.posix.extname(targetPath)) {
      pushError(file, `broken internal link: ${href} -> ${targetPath}`);
    }
  }
}

for (const [url, count] of inboundLinks) {
  if (url !== "/" && count === 0) {
    errors.push(`${url} has no internal links pointing to it`);
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
  if (!/<html\s+lang="vi"/i.test(html)) pushError(file, "html lang should be vi");
  if (!html.includes('hreflang="vi-VN"')) pushError(file, "missing hreflang vi-VN");
  if (!html.includes('hreflang="x-default"')) pushError(file, "missing hreflang x-default");
  if (!html.includes('name="geo.region" content="VN-HN"')) pushError(file, "missing geo.region VN-HN");

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
