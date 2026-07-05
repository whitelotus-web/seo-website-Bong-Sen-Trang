const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.netlify.app";
const slug = "cap-nhat-dich-vu-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;
const lastmod = new Date().toISOString().slice(0, 10);

const updates = [
  ["Làm biển quảng cáo theo mặt bằng Hà Nội", "lam-bien-quang-cao-theo-mat-bang-ha-noi", "Hub chọn phương án theo mặt bằng: mặt tiền hẹp, trong ngõ, tầng 2, mặt tiền rộng, nhà lô góc và đổi thương hiệu."],
  ["Làm biển quảng cáo mặt tiền hẹp Hà Nội", "lam-bien-quang-cao-mat-tien-hep-ha-noi", "Phương án biển gọn, rõ tên, dễ nhìn từ hai chiều đường cho shop nhỏ và cửa hàng mặt tiền hẹp."],
  ["Làm biển quảng cáo trong ngõ Hà Nội", "lam-bien-quang-cao-trong-ngo-ha-noi", "Biển chỉ dẫn, biển vẫy, hộp đèn nhỏ giúp khách tìm đúng địa chỉ trong ngõ."],
  ["Làm biển quảng cáo tầng 2 Hà Nội", "lam-bien-quang-cao-tang-2-ha-noi", "Tư vấn cỡ chữ, điểm nhìn, khung treo, LED và an toàn thi công cho biển tầng 2."],
  ["Làm biển vẫy LED Đống Đa Hà Nội", "lam-bien-vay-led-dong-da-ha-noi", "Biển vẫy LED cho Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc, shop nhỏ và quán dịch vụ."],
  ["Làm biển vẫy LED Cầu Giấy Hà Nội", "lam-bien-vay-led-cau-giay-ha-noi", "Biển vẫy cho cafe, trà sữa, salon, nhà thuốc và cửa hàng trên phố đông."],
  ["Làm biển hộp đèn LED Hà Đông Hà Nội", "lam-bien-hop-den-led-ha-dong-ha-noi", "Hộp đèn LED cho Quang Trung, Văn Quán, Mỗ Lao, Tố Hữu và cửa hàng mở buổi tối."],
  ["Làm biển hộp đèn LED Thanh Xuân Hà Nội", "lam-bien-hop-den-led-thanh-xuan-ha-noi", "Hộp đèn cho Nguyễn Trãi, Khuất Duy Tiến, Nguyễn Tuân, phòng khám, nhà thuốc, shop."],
  ["Backdrop logo văn phòng Nam Từ Liêm Hà Nội", "lam-backdrop-logo-van-phong-nam-tu-liem-ha-noi", "Logo lễ tân, backdrop văn phòng, showroom, tòa nhà tại Mỹ Đình, Phạm Hùng, Mễ Trì."],
  ["Decal kính showroom Cầu Giấy Hà Nội", "lam-decal-kinh-showroom-cau-giay-ha-noi", "Decal kính cho showroom, văn phòng, spa, clinic, cửa hàng dịch vụ."],
  ["Biển menu quán ăn Đống Đa Hà Nội", "lam-bien-menu-quan-an-dong-da-ha-noi", "Bảng menu, bảng món, bảng giá cho quán ăn quanh Ô Chợ Dừa, Xã Đàn, Khâm Thiên."],
  ["Biển quán nhậu Hoàng Mai Hà Nội", "lam-bien-quan-nhau-hoang-mai-ha-noi", "Biển sáng, chữ lớn, dễ nhìn cho quán ăn tối, lẩu nướng, bia hơi tại Hoàng Mai."],
  ["Biển quảng cáo theo hạng mục tại Hà Nội", "bien-quang-cao-theo-hang-muc-ha-noi", "Hub chọn hạng mục: biển vẫy LED, hộp đèn, LED ma trận, backdrop, decal kính, menu quán ăn."],
  ["Báo giá biển quảng cáo Hà Nội 2026", "bao-gia-bien-quang-cao-ha-noi", "Trang giá chính để khách gửi ảnh mặt tiền, kích thước và nhận tư vấn chi phí."],
  ["Làm biển quảng cáo gần đây Hà Nội", "lam-bien-quang-cao-gan-day-ha-noi", "Trang local intent cho khách tìm đơn vị làm biển gần khu vực lắp đặt."],
  ["Tất cả dịch vụ biển quảng cáo Hà Nội", "tat-ca-dich-vu-bien-quang-cao-ha-noi", "Sơ đồ toàn bộ dịch vụ, khu vực, ngành hàng và bài tư vấn trên website."]
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const itemListJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cập nhật dịch vụ biển quảng cáo Hà Nội",
  description: "Danh sách các trang dịch vụ mới và trang ưu tiên của Bông Sen Trắng cho nhu cầu làm biển quảng cáo tại Hà Nội.",
  url: pageUrl,
  dateModified: lastmod,
  itemListElement: updates.map(([name, itemSlug], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    url: `${baseUrl}/${itemSlug}/`
  }))
};

const cards = updates
  .map(
    ([name, itemSlug, text]) => `
                <a href="../${itemSlug}/">
                  <strong>${escapeHtml(name)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
  )
  .join("\n");

const title = "Cập nhật dịch vụ biển quảng cáo Hà Nội | Bông Sen Trắng";
const description = "Các trang dịch vụ mới và trang ưu tiên về làm biển quảng cáo tại Hà Nội: biển vẫy LED, hộp đèn, backdrop, decal kính, menu quán ăn, báo giá.";

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
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta property="og:image:alt" content="Cập nhật dịch vụ biển quảng cáo Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
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
          <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Theo hạng mục</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
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
              <span>Cập nhật dịch vụ</span>
            </nav>
            <p class="section-kicker">Cập nhật ${escapeHtml(lastmod)}</p>
            <h1>Cập nhật dịch vụ biển quảng cáo tại Hà Nội</h1>
            <p>Danh sách các trang mới và trang ưu tiên cần Google đọc thường xuyên hơn. Nếu anh/chị đang cần làm biển, hãy chọn đúng hạng mục hoặc khu vực rồi gửi ảnh mặt tiền qua Zalo để được báo giá nhanh.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:0989521881">Gọi 0989 521 881</a>
              <a class="btn btn-secondary" href="https://zalo.me/0989521881" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Cập nhật dịch vụ làm biển quảng cáo Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block sitemap-group">
            <h2>Trang mới và trang cần ưu tiên</h2>
            <p>Nhóm này tập trung vào truy vấn có khả năng ra khách: báo giá, làm biển gần khu vực, biển vẫy LED, hộp đèn, backdrop, decal kính và biển menu.</p>
            <div class="sitemap-grid">
${cards}
            </div>
          </section>
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
</html>`;

fs.mkdirSync(path.join(root, slug), { recursive: true });
fs.writeFileSync(path.join(root, slug, "index.html"), html, "utf8");

console.log(`Generated updates hub: ${slug}`);
