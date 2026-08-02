const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function getPageFiles() {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "assets" && entry.name !== "dist" && entry.name !== "node_modules" && entry.name !== "scripts")
    .map((entry) => path.join(root, entry.name, "index.html"))
    .filter((filePath) => fs.existsSync(filePath));
}

function getCanonical(html) {
  const match = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  return match ? match[1] : null;
}

function getTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? stripTags(match[1]) : "";
}

function getVisibleBreadcrumbLabel(html) {
  const navMatch = html.match(/<nav\b[^>]*class="[^"]*\bbreadcrumb\b[^"]*"[^>]*>([\s\S]*?)<\/nav>/i);
  if (!navMatch) return "";

  const labels = [];
  const tokenPattern = /<a\b[^>]*>([\s\S]*?)<\/a>|<span\b[^>]*>([\s\S]*?)<\/span>/gi;
  for (const match of navMatch[1].matchAll(tokenPattern)) {
    const label = stripTags(match[1] || match[2] || "");
    if (label && label !== "/") labels.push(label);
  }

  return labels.at(-1) || "";
}

function createBreadcrumb(canonical, name) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: canonical
      }
    ]
  };
}

let added = 0;
let skipped = 0;

for (const filePath of getPageFiles()) {
  const html = fs.readFileSync(filePath, "utf8");
  if (/"@type"\s*:\s*"BreadcrumbList"/.test(html)) {
    skipped += 1;
    continue;
  }

  const canonical = getCanonical(html);
  if (!canonical || canonical === `${baseUrl}/`) {
    skipped += 1;
    continue;
  }

  const name = getVisibleBreadcrumbLabel(html) || getTitle(html);
  if (!name) {
    skipped += 1;
    continue;
  }

  const script = `    <script type="application/ld+json">\n${JSON.stringify(createBreadcrumb(canonical, name), null, 2)}\n    </script>\n`;
  const updated = html.replace(/<\/head>/i, `${script}  </head>`);
  if (updated === html) {
    skipped += 1;
    continue;
  }

  fs.writeFileSync(filePath, updated, "utf8");
  added += 1;
}

console.log(`Breadcrumb schema: added ${added}, skipped ${skipped}`);
