const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "cap-nhat-dich-vu-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;
const lastmod = new Date().toISOString().slice(0, 10);

const updates = [
  ["Làm biển quảng cáo mất bao lâu tại Hà Nội", "lam-bien-quang-cao-mat-bao-lau-ha-noi", "Mốc thời gian theo loại biển, vật liệu, mặt bằng và cách chuẩn bị để kịp ngày khai trương."],
  ["Kích thước biển quảng cáo mặt tiền tại Hà Nội", "kich-thuoc-bien-quang-cao-mat-tien-ha-noi", "Gợi ý chọn cỡ biển theo chiều ngang, chiều cao, tầng lắp, khoảng cách nhìn và loại hình cửa hàng."],
  ["Chọn chất liệu biển quảng cáo tại Hà Nội", "chon-chat-lieu-bien-quang-cao-ha-noi", "So sánh Hiflex, alu, mica, inox, hộp đèn LED theo ngân sách, độ bền và nhu cầu phát sáng."],
  ["Cách tiết kiệm chi phí làm biển quảng cáo tại Hà Nội", "cach-tiet-kiem-chi-phi-lam-bien-quang-cao-ha-noi", "Cách ưu tiên hạng mục chính, tận dụng khung cũ nếu còn tốt và tránh phát sinh khi làm biển."],
  ["Biển quảng cáo ngoài trời bền bao lâu tại Hà Nội", "bien-quang-cao-ngoai-troi-ben-bao-lau-ha-noi", "Các yếu tố ảnh hưởng độ bền của biển ngoài trời: vật liệu, khung, LED, nguồn điện và chống nước."],
  ["Báo giá biển quảng cáo theo m2 Hà Nội", "bao-gia-lam-bien-quang-cao-theo-m2-ha-noi", "Ước lượng chi phí theo diện tích, vật liệu nền, chữ nổi, LED và điều kiện lắp đặt thực tế."],
  ["Biển quảng cáo 1m2 giá bao nhiêu tại Hà Nội", "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi", "Giải thích vì sao giá theo m2 chỉ là giá nền, cần tính thêm khung, chữ, LED và vị trí thi công."],
  ["Chi phí làm biển cửa hàng mới tại Hà Nội", "chi-phi-lam-bien-cua-hang-moi-ha-noi", "Gợi ý cách phân bổ ngân sách cho biển chính, biển vẫy, decal kính và hạng mục khai trương."],
  ["Gửi ảnh báo giá biển quảng cáo Hà Nội", "gui-anh-bao-gia-bien-quang-cao-ha-noi", "Hướng dẫn khách gửi ảnh mặt tiền, kích thước, địa chỉ và mẫu mong muốn để báo giá sát hơn."],
  ["Khảo sát làm biển quảng cáo Hà Nội", "khao-sat-lam-bien-quang-cao-ha-noi", "Phù hợp biển lớn, biển cao, mặt tiền khó đo hoặc trường hợp muốn tận dụng khung cũ."],
  ["Sửa chữa biển quảng cáo Hà Nội", "sua-chua-bien-quang-cao-ha-noi", "Thay LED, thay mặt bạt, sửa hộp đèn, gia cố khung và tư vấn sửa hay làm mới biển cũ."],
  ["Làm biển quảng cáo cần gấp Hà Nội", "lam-bien-quang-cao-can-gap-ha-noi", "Phương án cho cửa hàng sắp khai trương, cần thay biển nhanh hoặc cần hoàn thiện mặt tiền trong thời gian ngắn."],
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
  ["Báo giá biển quảng cáo Hà Nội 2026", "bao-gia-bien-quang-cao-ha-noi", "Trang giá chính để khách xem khung giá, gửi ảnh mặt tiền, kích thước và nhận tư vấn chi phí."],
  ["Làm biển quảng cáo gần đây Hà Nội", "lam-bien-quang-cao-gan-day-ha-noi", "Trang local intent cho khách tìm đơn vị làm biển gần khu vực lắp đặt."],
  ["Tất cả dịch vụ biển quảng cáo Hà Nội", "tat-ca-dich-vu-bien-quang-cao-ha-noi", "Danh mục đầy đủ dịch vụ, khu vực, ngành hàng và bài tư vấn trên website."]
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
  name: "Dịch vụ làm biển quảng cáo được hỏi nhiều tại Hà Nội",
  description: "Danh sách các dịch vụ, nhóm báo giá và nhu cầu phổ biến của khách cần làm biển quảng cáo tại Hà Nội.",
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

const title = "Dịch vụ làm biển quảng cáo được hỏi nhiều tại Hà Nội | Bông Sen Trắng";
const description = "Các nhu cầu phổ biến khi làm biển quảng cáo tại Hà Nội: báo giá, gửi ảnh mặt tiền, khảo sát, sửa biển cũ, biển vẫy LED, hộp đèn, backdrop, decal kính, menu quán ăn.";

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
    <meta property="og:image:alt" content="Dịch vụ làm biển quảng cáo được hỏi nhiều tại Hà Nội">
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
              <span>Dịch vụ được hỏi nhiều</span>
            </nav>
            <p class="section-kicker">Nhu cầu phổ biến</p>
            <h1>Dịch vụ làm biển quảng cáo được hỏi nhiều tại Hà Nội</h1>
            <p>Chọn nhanh đúng nhu cầu: xem báo giá, gửi ảnh mặt tiền, khảo sát, sửa biển cũ, làm biển gấp hoặc chọn theo hạng mục. Nếu anh/chị đang cần làm biển, hãy gửi ảnh mặt tiền qua Zalo để được tư vấn phương án sát hơn.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:0989521881">Gọi 0989 521 881</a>
              <a class="btn btn-secondary" href="https://zalo.me/0989521881" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Dịch vụ làm biển quảng cáo được hỏi nhiều tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block sitemap-group">
            <h2>Nhu cầu khách thường hỏi trước khi làm biển</h2>
            <p>Nhóm này tập trung vào các tình huống dễ phát sinh liên hệ: hỏi giá, gửi ảnh để báo giá, cần khảo sát, sửa biển cũ, làm gấp, làm biển phát sáng hoặc chọn biển theo ngành hàng.</p>
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
