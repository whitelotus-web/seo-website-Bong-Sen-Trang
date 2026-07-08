const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "lam-bien-quang-cao-dong-da";
const pageUrl = `${baseUrl}/${slug}/`;

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const streets = [
  "Ô Chợ Dừa",
  "Xã Đàn",
  "Nguyễn Lương Bằng",
  "Tây Sơn",
  "Chùa Bộc",
  "Thái Hà",
  "Láng Hạ",
  "Tôn Đức Thắng",
  "Khâm Thiên",
  "Nguyễn Chí Thanh",
  "Phạm Ngọc Thạch",
  "Giảng Võ"
];

const serviceCards = [
  ["Biển alu chữ nổi Đống Đa", "../bien-alu-chu-noi-ha-noi/", "Phù hợp cửa hàng, showroom, văn phòng cần mặt tiền bền, sạch, dễ nhận diện."],
  ["Biển hộp đèn LED Đống Đa", "../bien-hop-den-led-ha-noi/", "Dễ nhìn buổi tối, hợp cửa hàng mặt phố, quán ăn, spa, salon, nhà thuốc."],
  ["Biển bạt Hiflex, biển khai trương", "../bien-bat-hiflex-ha-noi/", "Tối ưu chi phí cho cửa hàng mới mở hoặc cần thay nội dung nhanh."],
  ["Sửa chữa biển quảng cáo Đống Đa", "../sua-chua-bien-quang-cao-ha-noi/", "Thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn, gia cố khung biển cũ."],
  ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/", "Xem khung giá tham khảo trước khi gửi ảnh mặt tiền để báo giá sát."],
  ["Mẫu biển thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/", "Xem ảnh công trình theo ngành để chọn kiểu biển phù hợp mặt tiền."]
];

const gallery = [
  ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền cửa hàng nổi bật, phù hợp tuyến phố đông tại Đống Đa"],
  ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển showroom có chữ sáng, dễ nhìn buổi tối"],
  ["du-an-may-skin-bien-chu-noi-sang.jpg", "Biển spa, clinic chữ nổi LED phong cách gọn và sáng"],
  ["du-an-bien-tien-coffee.jpg", "Biển cafe, đồ uống, cửa hàng nhỏ cần nhận diện rõ"],
  ["du-an-sb-invest-backdrop-le-tan.jpg", "Backdrop, logo chữ nổi cho văn phòng tại Hà Nội"],
  ["du-an-hisuhi-wet-brush-mat-dung-led.jpg", "Mặt dựng lớn kết hợp LED và hộp đèn cho cửa hàng cần nổi bật"]
];

const faqs = [
  ["Bông Sen Trắng có ở Đống Đa không?", "Có. Thông tin doanh nghiệp ghi nhận tại số 92E Ô Chợ Dừa, Đống Đa, Hà Nội. Đây là lợi thế khi tư vấn, khảo sát và xử lý các hạng mục nội thành."],
  ["Làm biển quảng cáo Đống Đa mất bao lâu?", "Tùy kích thước, vật liệu và độ phức tạp. Biển bạt, thay mặt biển hoặc hạng mục đơn giản có thể xử lý nhanh hơn; biển alu chữ nổi, hộp đèn, mặt dựng lớn cần chốt thiết kế và vật tư trước."],
  ["Có nhận sửa biển cũ quanh Ô Chợ Dừa, Xã Đàn, Thái Hà không?", "Có. Gửi ảnh toàn cảnh biển, ảnh cận lỗi và địa chỉ lắp đặt qua Zalo để kiểm tra: hỏng LED, hỏng nguồn, rách bạt, bong chữ, khung yếu hoặc cần thay nội dung."],
  ["Muốn báo giá chính xác cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ lắp đặt, mẫu biển mong muốn và thời gian cần hoàn thiện. Nếu biển lớn hoặc vị trí cao, nên khảo sát trước khi chốt giá."]
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const streetHtml = streets.map((street) => `<li>${escapeHtml(street)}</li>`).join("\n                ");

const serviceHtml = serviceCards
  .map(
    ([label, href, text]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
  )
  .join("\n");

const galleryHtml = gallery
  .map(
    ([file, alt]) => `
                <figure>
                  <img src="../assets/images/${file}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="900" height="675">
                  <figcaption>${escapeHtml(alt)}</figcaption>
                </figure>`
  )
  .join("\n");

const faqHtml = faqs
  .map(
    ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
  )
  .join("\n");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: business.name,
      url: `${baseUrl}/`,
      image: `${baseUrl}/assets/images/logo-whitelotus.png`,
      telephone: "+84989521881",
      priceRange: "$$",
      sameAs: [business.facebookUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Số 92E Ô Chợ Dừa",
        addressLocality: "Đống Đa",
        addressRegion: "Hà Nội",
        addressCountry: "VN"
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Đống Đa, Hà Nội"
      }
    },
    {
      "@type": "Service",
      name: "Làm biển quảng cáo Đống Đa",
      description: "Sản xuất, thi công, lắp đặt, sửa chữa biển quảng cáo tại Đống Đa, Hà Nội.",
      provider: { "@id": `${baseUrl}/#localbusiness` },
      areaServed: "Đống Đa, Hà Nội",
      serviceType: "Làm biển quảng cáo"
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    }
  ]
};

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Làm biển quảng cáo Đống Đa | 92E Ô Chợ Dừa, Hà Nội</title>
    <meta name="description" content="Làm biển quảng cáo Đống Đa: alu chữ nổi, hộp đèn LED, Hiflex, sửa biển cũ quanh Ô Chợ Dừa, Xã Đàn, Thái Hà. Zalo 0989 521 881.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo Đống Đa">
    <meta property="og:description" content="Bông Sen Trắng tại 92E Ô Chợ Dừa nhận làm biển quảng cáo, sửa biển cũ, thay LED, thay mặt biển tại Đống Đa.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <meta property="og:image:alt" content="Làm biển quảng cáo Đống Đa Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo Đống Đa">
    <meta name="twitter:description" content="Thi công bảng hiệu, biển alu, hộp đèn LED, Hiflex, sửa biển cũ tại Đống Đa.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
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
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực</a>
          <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
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
              <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
              <span>/</span>
              <span>Đống Đa</span>
            </nav>
            <p class="section-kicker">Local SEO Đống Đa</p>
            <h1>Làm biển quảng cáo tại Đống Đa</h1>
            <p>Bông Sen Trắng có địa chỉ tại <strong>${business.address}</strong>, nhận làm biển quảng cáo, bảng hiệu cửa hàng, biển alu chữ nổi, hộp đèn LED, biển bạt Hiflex, chữ nổi mica/inox và sửa biển cũ quanh khu vực Đống Đa. Gửi ảnh mặt tiền qua Zalo để được tư vấn nhanh theo đúng vị trí lắp đặt.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" alt="Làm biển quảng cáo mặt tiền cửa hàng tại Đống Đa" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Ưu tiên khu vực gần Ô Chợ Dừa</h2>
              <p>Với khách ở Đống Đa, thông tin mặt bằng thường quyết định nhiều hơn mẫu biển: biển nằm ở tầng 1 hay tầng cao, phố đông hay ngõ nhỏ, có cần sáng buổi tối không, có sẵn khung cũ hay phải làm mới toàn bộ. Vì ở ngay Ô Chợ Dừa, Bông Sen Trắng có lợi thế tư vấn nhanh cho khu vực nội thành.</p>
            </section>

            <section class="content-block">
              <h2>Tuyến phố Đống Đa thường có nhu cầu làm biển</h2>
              <ul class="area-list material-list" aria-label="Tuyến phố Đống Đa">
                ${streetHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Dịch vụ biển quảng cáo phù hợp tại Đống Đa</h2>
              <div class="price-link-grid compact">
${serviceHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Quy trình nhận báo giá tại Đống Đa</h2>
              <ol class="step-list">
                <li>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ cụ thể qua Zalo.</li>
                <li>Xác định loại biển: làm mới, thay mặt biển, sửa LED, làm hộp đèn, alu chữ nổi hoặc biển khai trương.</li>
                <li>Tư vấn vật liệu và phương án thi công theo vị trí thực tế: mặt phố, trong ngõ, tầng cao, có khung cũ hay chưa.</li>
                <li>Báo giá sơ bộ, khảo sát khi cần, chốt thiết kế và triển khai sản xuất.</li>
                <li>Lắp đặt, kiểm tra hoàn thiện, bàn giao và hỗ trợ bảo hành theo hạng mục.</li>
              </ol>
            </section>

            <section class="content-block">
              <h2>Ảnh biển quảng cáo tham khảo</h2>
              <div class="case-gallery">
${galleryHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
${faqHtml}
              </div>
            </section>
          </article>

          <aside class="content-sidebar" aria-label="Thông tin liên hệ">
            <div class="sidebar-card">
              <h2>Báo giá biển Đống Đa</h2>
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ lắp đặt và mẫu biển mong muốn. Có ảnh rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../lam-bien-quang-cao-ha-noi/">Làm biển quảng cáo Hà Nội</a>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển thực tế</a>
            </div>
            <address class="sidebar-card">
              <strong>${business.name}</strong>
              <span>${business.address}</span>
            </address>
          </aside>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="../assets/images/logo-whitelotus.png" alt="Bông Sen Trắng Communication" width="220" height="53">
          <p>Công ty TNHH Truyền thông Bông Sen Trắng sản xuất, thi công, sửa chữa và bảo trì biển quảng cáo tại Hà Nội.</p>
        </div>
        <div>
          <h2>Liên hệ</h2>
          <address>
            ${business.address}<br>
            <a href="tel:${business.phoneHref}">${business.phone}</a><br>
            <a href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Zalo ${business.phone}</a><br>
            <a href="${business.facebookUrl}" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          </address>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. Làm biển quảng cáo tại Hà Nội.</p>
      </div>
    </footer>
    <div class="mobile-cta" aria-label="Liên hệ nhanh trên di động">
      <a href="tel:${business.phoneHref}">Gọi</a>
      <a href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Zalo</a>
    </div>
    <script src="../assets/js/main.js"></script>
  </body>
</html>
`;

fs.mkdirSync(path.join(root, slug), { recursive: true });
fs.writeFileSync(path.join(root, slug, "index.html"), html, "utf8");

console.log(`Generated Dong Da local page: ${slug}`);
