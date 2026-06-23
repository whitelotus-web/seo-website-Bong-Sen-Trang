const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.pages.dev";
const slug = "tat-ca-dich-vu-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;
const lastmod = "2026-06-22";

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
  "video-assets",
  slug
]);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readPageInfo(dirName) {
  const file = path.join(root, dirName, "index.html");
  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || dirName;
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1]?.trim() || "";
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "")?.trim() || title;
  return { slug: dirName, title, description, h1 };
}

function categoryFor(page) {
  if (page.slug.startsWith("lam-bien-quang-cao-")) return "Khu vực Hà Nội";
  if (page.slug.startsWith("du-an-") || page.slug.startsWith("hinh-anh-")) return "Hình ảnh và công trình thực tế";
  if (
    page.slug.startsWith("can-chuan-bi-") ||
    page.slug.startsWith("nen-chon-") ||
    page.slug.startsWith("dau-hieu-") ||
    page.slug.includes("co-phu-hop")
  ) {
    return "Tư vấn trước khi làm biển";
  }
  return "Dịch vụ chính";
}

function groupIntro(name) {
  return {
    "Dịch vụ chính": "Các trang dịch vụ có nhu cầu tìm kiếm trực tiếp, phù hợp khách đang cần làm biển hoặc báo giá.",
    "Khu vực Hà Nội": "Các trang theo quận/huyện giúp khách hàng chọn đúng khu vực cần khảo sát và thi công tại Hà Nội.",
    "Tư vấn trước khi làm biển": "Các bài hướng dẫn giúp khách chuẩn bị thông tin báo giá, chọn vật liệu và quyết định sửa hay thay biển.",
    "Hình ảnh và công trình thực tế": "Các trang hình ảnh, mẫu biển và dự án tham khảo để khách xem chất liệu, ánh sáng và cách hoàn thiện."
  }[name];
}

const pages = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !ignoredDirs.has(entry.name))
  .filter((entry) => fs.existsSync(path.join(root, entry.name, "index.html")))
  .map((entry) => readPageInfo(entry.name))
  .sort((a, b) => a.h1.localeCompare(b.h1, "vi"));

const groupOrder = [
  "Dịch vụ chính",
  "Khu vực Hà Nội",
  "Tư vấn trước khi làm biển",
  "Hình ảnh và công trình thực tế"
];

const grouped = groupOrder
  .map((name) => ({ name, items: pages.filter((page) => categoryFor(page) === name) }))
  .filter((group) => group.items.length);

const title = "Tất cả dịch vụ làm biển quảng cáo Hà Nội | Bông Sen Trắng";
const description = "Danh sách đầy đủ dịch vụ, khu vực phục vụ, bài tư vấn và hình ảnh công trình biển quảng cáo của Bông Sen Trắng tại Hà Nội.";
const heroImage = `${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg`;

const itemListJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tất cả dịch vụ làm biển quảng cáo Hà Nội",
  description,
  url: pageUrl,
  itemListElement: pages.map((page, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: page.h1,
    url: `${baseUrl}/${page.slug}/`
  }))
};

const groupsHtml = grouped
  .map(
    (group) => `
            <section class="content-block sitemap-group">
              <h2>${escapeHtml(group.name)}</h2>
              <p>${escapeHtml(groupIntro(group.name))}</p>
              <div class="sitemap-grid">
                ${group.items
                  .map(
                    (page) => `
                <a href="../${page.slug}/">
                  <strong>${escapeHtml(page.h1)}</strong>
                  <span>${escapeHtml(page.description)}</span>
                </a>`
                  )
                  .join("\n                ")}
              </div>
            </section>`
  )
  .join("\n");

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/hero-bien-quang-cao-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bong Sen Trang">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${heroImage}">
    <meta property="og:image:alt" content="Tất cả dịch vụ làm biển quảng cáo tại Hà Nội của Bông Sen Trắng">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${heroImage}">
    <script type="application/ld+json">
${JSON.stringify(itemListJson, null, 2)}
    </script>
  </head>
  <body>
    <a class="skip-link" href="#noi-dung">Chuyển tới nội dung</a>
    <header class="site-header" data-header>
      <div class="container nav-wrap">
        <a class="brand" href="../" aria-label="Bông Sen Trắng">
          <img src="../assets/images/logo-whitelotus.png" alt="Bông Sen Trắng Communication" width="250" height="60">
        </a>
        <button class="menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false" data-menu-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" data-site-nav aria-label="Điều hướng chính">
          <a href="../#dich-vu">Dịch vụ</a>
          <a href="../#du-an">Dự án</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../#quy-trinh">Quy trình</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a href="../#faq">FAQ</a>
          <a class="nav-call" href="tel:0989521881">Gọi 0989 521 881</a>
        </nav>
      </div>
    </header>

    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Tất cả dịch vụ</span>
            </nav>
            <p class="section-kicker">Sơ đồ dịch vụ</p>
            <h1>Tất cả dịch vụ làm biển quảng cáo tại Hà Nội</h1>
            <p>Chọn nhanh dịch vụ, khu vực phục vụ, bài tư vấn hoặc hình ảnh công trình phù hợp với nhu cầu làm biển quảng cáo của anh/chị.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:0989521881">Gọi 0989 521 881</a>
              <a class="btn btn-secondary" href="https://zalo.me/0989521881" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Tất cả dịch vụ làm biển quảng cáo tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-main sitemap-main">
${groupsHtml}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="../assets/images/logo-whitelotus.png" alt="Bông Sen Trắng Communication" width="220" height="53">
          <p>Công ty TNHH Truyền thông Bông Sen Trắng sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội.</p>
        </div>
        <div>
          <h2>Liên hệ</h2>
          <address>
            Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội<br>
            <a href="tel:0989521881">0989 521 881</a><br>
            <a href="https://zalo.me/0989521881" target="_blank" rel="noopener">Zalo 0989 521 881</a><br>
            <a href="https://www.facebook.com/whitelotus.vn/" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a>
          </address>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. Làm biển quảng cáo tại Hà Nội.</p>
      </div>
    </footer>

    <div class="mobile-cta" aria-label="Liên hệ nhanh trên di động">
      <a href="tel:0989521881">Gọi</a>
      <a href="https://zalo.me/0989521881" target="_blank" rel="noopener">Zalo</a>
    </div>

    <script src="../assets/js/main.js"></script>
  </body>
</html>
`;

fs.mkdirSync(path.join(root, slug), { recursive: true });
fs.writeFileSync(path.join(root, slug, "index.html"), html, "utf8");

function linkServiceIndexFromFooter(filePath, relativeHref) {
  let pageHtml = fs.readFileSync(filePath, "utf8");
  if (pageHtml.includes(`${relativeHref}${slug}/`)) return;

  pageHtml = pageHtml.replace(
    /(<a href="https:\/\/www\.facebook\.com\/whitelotus\.vn\/?"[^>]*>[^<]*Fanpage[^<]*<\/a>)/,
    `$1<br>\n            <a href="${relativeHref}${slug}/">Tất cả dịch vụ</a>`
  );
  fs.writeFileSync(filePath, pageHtml, "utf8");
}

linkServiceIndexFromFooter(path.join(root, "index.html"), "");
for (const page of pages) {
  linkServiceIndexFromFooter(path.join(root, page.slug, "index.html"), "../");
}

const sitemapUrls = [
  { loc: `${baseUrl}/`, priority: "1.0" },
  { loc: pageUrl, priority: "0.9" },
  ...pages.map((page) => ({
    loc: `${baseUrl}/${page.slug}/`,
    priority: page.slug.startsWith("du-an-") || page.slug.startsWith("hinh-anh-") ? "0.7" : "0.8"
  }))
];

const uniqueSitemapUrls = [...new Map(sitemapUrls.map((url) => [url.loc, url])).values()];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueSitemapUrls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(root, "sitemap-google.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(root, "sitemap.txt"), `${uniqueSitemapUrls.map((url) => url.loc).join("\n")}\n`, "utf8");

console.log(`Generated service index page with ${pages.length} internal links`);
