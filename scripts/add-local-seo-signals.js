const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=92E%20%C3%94%20Ch%E1%BB%A3%20D%E1%BB%ABa%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  url: `${baseUrl}/`,
  image: `${baseUrl}/assets/images/logo-whitelotus.png`,
  telephone: "+84989521881",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 92E Ô Chợ Dừa",
    addressLocality: "Đống Đa",
    addressRegion: "Hà Nội",
    addressCountry: "VN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.0219,
    longitude: 105.8257
  },
  hasMap: mapUrl,
  areaServed: {
    "@type": "City",
    name: "Hà Nội",
    addressCountry: "VN"
  },
  sameAs: ["https://www.facebook.com/whitelotus.vn/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84989521881",
    contactType: "customer service",
    areaServed: "VN",
    availableLanguage: ["vi"]
  }
};
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

  const withMetaSignals = lines.length
    ? html.replace(
        /(<link\s+rel="canonical"\s+href="[^"]+">\r?\n)/i,
        `$1${lines.join("\n")}\n`
      )
    : html;

  if (/("@type"\s*:\s*"LocalBusiness")/i.test(withMetaSignals)) {
    return withMetaSignals;
  }

  const schemaBlock = `    <script type="application/ld+json">\n${JSON.stringify(localBusinessSchema, null, 2)}\n    </script>\n`;
  return withMetaSignals.replace(/(\s*<\/head>)/i, `\n${schemaBlock}$1`);
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
