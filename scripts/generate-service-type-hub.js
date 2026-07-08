const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "bien-quang-cao-theo-hang-muc-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;

const groups = [
  {
    title: "Biển phát sáng, biển nhìn rõ buổi tối",
    intro: "Phù hợp cửa hàng mở sau 18h, tuyến phố đông xe và mặt tiền cần khách nhìn thấy từ xa.",
    links: [
      ["Làm biển vẫy LED Hà Nội", "lam-bien-vay-led-ha-noi", "Biển treo vẫy, nhìn được từ hai chiều đường."],
      ["Làm biển hộp đèn hai mặt Hà Nội", "lam-bien-hop-den-hai-mat-ha-noi", "Hộp đèn treo tường, sáng hai mặt, hợp shop nhỏ và quán dịch vụ."],
      ["Làm biển quảng cáo sáng buổi tối Hà Nội", "lam-bien-quang-cao-buoi-toi-ha-noi", "Chữ nổi sáng mặt, chữ hắt sáng, hộp đèn hoặc đèn rọi."],
      ["Làm biển LED ma trận Hà Nội", "lam-bien-led-ma-tran-ha-noi", "Bảng LED chạy chữ cho thông báo, khuyến mại, giờ mở cửa."]
    ]
  },
  {
    title: "Biển trong nhà, văn phòng, showroom",
    intro: "Nhóm hạng mục giúp đồng bộ nhận diện thương hiệu tại khu lễ tân, cửa kính và không gian tiếp khách.",
    links: [
      ["Làm backdrop logo lễ tân Hà Nội", "lam-backdrop-logo-le-tan-ha-noi", "Logo chữ nổi, nền backdrop, LED hắt cho văn phòng và showroom."],
      ["Làm decal kính cửa hàng Hà Nội", "lam-decal-kinh-cua-hang-ha-noi", "Decal kính mờ, logo, chữ cắt hoặc decal in màu cho cửa kính."],
      ["Biển văn phòng công ty Hà Nội", "bien-van-phong-cong-ty-ha-noi", "Bảng tên công ty, logo chữ nổi, biển chỉ dẫn, backdrop."],
      ["Biển showroom, văn phòng Hà Nội", "bien-quang-cao-showroom-van-phong-ha-noi", "Biển mặt tiền, chữ nổi, decal kính và hệ nhận diện đồng bộ."]
    ]
  },
  {
    title: "Biển cho quán ăn, đồ uống, cửa hàng bán lẻ",
    intro: "Nhóm khách cần biển dễ gọi khách, nhìn nhanh món chính, dễ nhớ tên và phù hợp khai trương.",
    links: [
      ["Làm biển menu quán ăn Hà Nội", "lam-bien-menu-quan-an-ha-noi", "Bảng menu, bảng giá, biển món, menu hộp đèn cho quán ăn."],
      ["Làm biển quán nhậu bia hơi Hà Nội", "lam-bien-quan-nhau-bia-hoi-ha-noi", "Biển quán ăn uống cần sáng, rõ tên, dễ nhìn buổi tối."],
      ["Làm biển shop mỹ phẩm Hà Nội", "lam-bien-shop-my-pham-ha-noi", "Biển sạch, sáng, hợp shop mỹ phẩm, skincare, cửa hàng làm đẹp."],
      ["Làm biển quảng cáo khai trương gấp Hà Nội", "lam-bien-quang-cao-khai-truong-gap-ha-noi", "Phương án nhanh cho cửa hàng cần kịp ngày mở bán."]
    ]
  },
  {
    title: "Hạng mục theo khu vực có nhu cầu cao",
    intro: "Các trang này ghép đúng hạng mục với quận/khu vực thường có nhu cầu thực tế, giúp khách đi thẳng tới phương án gần mặt bằng của họ.",
    links: [
      ["Làm biển vẫy LED Đống Đa", "lam-bien-vay-led-dong-da-ha-noi", "Biển vẫy LED cho Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc."],
      ["Làm biển vẫy LED Cầu Giấy", "lam-bien-vay-led-cau-giay-ha-noi", "Biển vẫy cho shop, cafe, salon, nhà thuốc tại Cầu Giấy."],
      ["Làm hộp đèn LED Hà Đông", "lam-bien-hop-den-led-ha-dong-ha-noi", "Hộp đèn LED cho Quang Trung, Văn Quán, Mỗ Lao, Tố Hữu."],
      ["Làm hộp đèn LED Thanh Xuân", "lam-bien-hop-den-led-thanh-xuan-ha-noi", "Hộp đèn cho Nguyễn Trãi, Khuất Duy Tiến, Nguyễn Tuân."],
      ["Backdrop logo văn phòng Nam Từ Liêm", "lam-backdrop-logo-van-phong-nam-tu-liem-ha-noi", "Logo lễ tân cho văn phòng, showroom, tòa nhà tại Mỹ Đình."],
      ["Decal kính showroom Cầu Giấy", "lam-decal-kinh-showroom-cau-giay-ha-noi", "Decal kính cho showroom, văn phòng, spa, clinic tại Cầu Giấy."],
      ["Biển menu quán ăn Đống Đa", "lam-bien-menu-quan-an-dong-da-ha-noi", "Bảng menu, bảng món, bảng giá cho quán ăn tại Đống Đa."],
      ["Biển quán nhậu Hoàng Mai", "lam-bien-quan-nhau-hoang-mai-ha-noi", "Biển sáng, chữ lớn, dễ nhìn cho quán ăn tối tại Hoàng Mai."]
    ]
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const itemList = groups.flatMap((group) => group.links);
const itemListJson = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Biển quảng cáo theo hạng mục tại Hà Nội",
  description: "Tổng hợp hạng mục biển quảng cáo có nhu cầu tìm kiếm rõ: biển vẫy LED, hộp đèn hai mặt, LED ma trận, backdrop, decal kính, biển menu, biển khai trương.",
  url: pageUrl,
  itemListElement: itemList.map(([label, itemSlug], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: label,
    url: `${baseUrl}/${itemSlug}/`
  }))
};

const groupsHtml = groups
  .map(
    (group) => `
            <section class="content-block sitemap-group">
              <h2>${escapeHtml(group.title)}</h2>
              <p>${escapeHtml(group.intro)}</p>
              <div class="sitemap-grid">
                ${group.links
                  .map(
                    ([label, itemSlug, text]) => `
                <a href="../${itemSlug}/">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
                  )
                  .join("\n                ")}
              </div>
            </section>`
  )
  .join("\n");

const title = "Biển quảng cáo theo hạng mục tại Hà Nội | Bông Sen Trắng";
const description = "Chọn hạng mục biển quảng cáo cần làm tại Hà Nội: biển vẫy LED, hộp đèn hai mặt, LED ma trận, backdrop, decal kính, biển menu, biển khai trương.";
const heroImage = `${baseUrl}/assets/images/bien-vay-cafe-hop-den-tron-ha-noi.jpg`;

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
    <link rel="preload" as="image" href="../assets/images/bien-vay-cafe-hop-den-tron-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${heroImage}">
    <meta property="og:image:alt" content="Biển quảng cáo theo hạng mục tại Hà Nội">
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
          <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
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
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
              <span>/</span>
              <span>Hạng mục biển</span>
            </nav>
            <p class="section-kicker">Biển quảng cáo theo hạng mục</p>
            <h1>Biển quảng cáo theo hạng mục tại Hà Nội</h1>
            <p>Chọn đúng hạng mục cần làm để xem phương án vật liệu, ánh sáng, cách lắp và thông tin cần gửi khi báo giá. Các nhóm dưới đây tập trung vào nhu cầu có khả năng ra khách cao: biển phát sáng, biển vẫy, menu quán ăn, backdrop, decal kính và biển khai trương.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:0989521881">Gọi 0989 521 881</a>
              <a class="btn btn-secondary" href="https://zalo.me/0989521881" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/bien-vay-cafe-hop-den-tron-ha-noi.jpg" alt="Biển vẫy LED và hộp đèn theo hạng mục tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-main sitemap-main">
${groupsHtml}
          <section class="content-block price-note">
            <h2>Muốn báo giá nhanh cần gửi gì?</h2>
            <p>Gửi ảnh mặt tiền hoặc vị trí cần lắp, kích thước dự kiến, địa chỉ tại Hà Nội, nội dung/logo cần làm và thời gian mong muốn hoàn thiện. Nếu có mẫu tham khảo, gửi kèm để tư vấn vật liệu và chi phí sát hơn.</p>
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

console.log(`Generated service type hub: ${slug}`);
