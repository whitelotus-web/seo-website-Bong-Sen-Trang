const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "nang-luc-thi-cong-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;
const phone = "0989 521 881";
const phoneHref = "0989521881";
const address = "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const proofPoints = [
  ["Tư vấn theo mặt bằng thật", "Không chốt vật liệu chỉ theo tên gọi. Cần xem ảnh mặt tiền, kích thước, hướng nắng mưa, độ cao và vị trí lắp đặt."],
  ["Ưu tiên chữ dễ đọc", "Biển quảng cáo phải giúp khách nhận ra thương hiệu từ xa. Bố cục rõ thường hiệu quả hơn nhồi quá nhiều thông tin."],
  ["Kiểm tra khung, LED, nguồn", "Với biển có đèn, cần chú ý nguồn, dây, chống nước và độ đều sáng để giảm lỗi sau khi bàn giao."],
  ["Có phương án tiết kiệm", "Nếu ngân sách hạn chế, có thể chọn Hiflex, tận dụng khung cũ hoặc giảm chi tiết phụ thay vì cắt giảm phần kết cấu quan trọng."],
  ["Bám sát thiết kế đã duyệt", "Sản xuất theo kích thước, màu sắc và vật liệu đã trao đổi; trường hợp cần thay đổi sẽ báo lại trước khi thi công."],
  ["Hỗ trợ bảo hành", "Phạm vi bảo hành phụ thuộc vật liệu, hệ LED, vị trí ngoài trời và điều kiện sử dụng thực tế."]
];

const gallery = [
  ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền cửa hàng tông đỏ nổi bật"],
  ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển showroom có chữ sáng buổi tối"],
  ["du-an-hisuhi-wet-brush-mat-dung-led.jpg", "Mặt dựng lớn kết hợp LED và hộp đèn"],
  ["du-an-may-skin-bien-chu-noi-sang.jpg", "Biển chữ nổi phát sáng cho spa, salon, clinic"],
  ["du-an-sb-invest-backdrop-le-tan.jpg", "Backdrop lễ tân chữ nổi trong nhà"],
  ["du-an-brendon-chu-noi-mai-nha.jpg", "Chữ nổi kích thước lớn lắp trên mặt dựng cao"]
];

const projectLinks = [
  ["Biển chữ nổi mặt tiền", "du-an-bien-chu-noi-mo-nguyen", "Tham khảo hạng mục chữ nổi, ánh sáng và bố cục thương hiệu."],
  ["Biển showroom, mặt dựng", "du-an-bien-the-fox-fitness", "Tham khảo kiểu biển cần quan sát ban ngày lẫn buổi tối."],
  ["Backdrop logo lễ tân", "du-an-chu-noi-khoa-kinh-te", "Tham khảo hạng mục logo, chữ nổi và điểm nhận diện trong nhà."],
  ["Biển hộp đèn, biển vẫy", "du-an-bien-gia-long", "Tham khảo phần khung, cách treo và độ sáng của biển phụ."]
];

const faqs = [
  ["Năng lực thi công biển quảng cáo được thể hiện qua những gì?", "Khách có thể xem ảnh hạng mục thực tế, quy trình tiếp nhận thông tin, cách tư vấn vật liệu, phần cần kiểm tra trước khi lắp và thông tin liên hệ doanh nghiệp. Mỗi công trình vẫn cần đánh giá theo đúng mặt bằng và yêu cầu riêng."],
  ["Có thể tư vấn qua ảnh mặt tiền trước không?", "Có. Gửi ảnh chụp thẳng mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, logo hoặc nội dung cần làm qua Zalo để được gợi ý phương án ban đầu. Hạng mục treo cao, biển lớn hoặc tận dụng khung cũ có thể cần khảo sát thêm."],
  ["Bảo hành biển quảng cáo được trao đổi như thế nào?", "Phạm vi bảo hành phụ thuộc vật liệu, hệ LED, nguồn điện, vị trí ngoài trời và điều kiện sử dụng. Nội dung phù hợp sẽ được trao đổi cùng phương án báo giá trước khi thi công."],
  ["Bông Sen Trắng ở đâu?", "Thông tin liên hệ của Công ty TNHH Truyền thông Bông Sen Trắng là số 92E Ô Chợ Dừa, Đống Đa, Hà Nội; điện thoại và Zalo 0989 521 881."]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      areaServed: "Hà Nội",
      sameAs: ["https://www.facebook.com/whitelotus.vn/"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84989521881",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["vi"]
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Năng lực thi công biển quảng cáo Hà Nội",
      description: "Thông tin năng lực, quy trình, hạng mục thi công và hình ảnh thực tế của Bông Sen Trắng khi làm biển quảng cáo tại Hà Nội.",
      url: pageUrl,
      about: { "@id": `${baseUrl}/#localbusiness` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        contentUrl: `${baseUrl}/assets/images/du-an-hisuhi-wet-brush-mat-dung-led.jpg`,
        caption: "Mặt dựng lớn kết hợp LED và hộp đèn"
      },
      mainEntity: {
        "@type": "Service",
        name: "Thi công biển quảng cáo tại Hà Nội",
        provider: {
          "@id": `${baseUrl}/#localbusiness`
        },
        areaServed: "Hà Nội"
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Năng lực thi công", item: pageUrl }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ]
};

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Năng lực thi công biển quảng cáo Hà Nội | Ảnh thực tế</title>
    <meta name="description" content="Năng lực thi công biển quảng cáo Hà Nội: quy trình tư vấn, vật liệu, lắp đặt, bảo hành và ảnh hạng mục thực tế của Bông Sen Trắng tại 92E Ô Chợ Dừa.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-hisuhi-wet-brush-mat-dung-led.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Năng lực thi công biển quảng cáo Hà Nội | Ảnh thực tế">
    <meta property="og:description" content="Quy trình tư vấn, sản xuất, lắp đặt, bảo hành và ảnh hạng mục thực tế của Bông Sen Trắng.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-hisuhi-wet-brush-mat-dung-led.jpg">
    <meta property="og:image:alt" content="Mặt dựng lớn kết hợp LED và hộp đèn">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Năng lực thi công biển quảng cáo Hà Nội | Ảnh thực tế">
    <meta name="twitter:description" content="Quy trình tư vấn, sản xuất, lắp đặt và hình ảnh công trình thực tế.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-hisuhi-wet-brush-mat-dung-led.jpg">
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
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực</a>
          <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${phoneHref}">Gọi ${phone}</a>
        </nav>
      </div>
    </header>

    <main id="noi-dung">
      <section class="page-hero capability-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Năng lực thi công</span>
            </nav>
            <p class="section-kicker">Năng lực và quy trình</p>
            <h1>Năng lực thi công biển quảng cáo tại Hà Nội</h1>
            <p>Bông Sen Trắng nhận tư vấn, sản xuất và thi công các hạng mục biển quảng cáo theo điều kiện mặt bằng thực tế. Khách có thể gửi ảnh qua Zalo trước để trao đổi vật liệu, kích thước, ánh sáng, vị trí lắp và phương án phù hợp ngân sách.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${phoneHref}">Gọi ${phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-hisuhi-wet-brush-mat-dung-led.jpg" alt="Mặt dựng lớn kết hợp LED và hộp đèn" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>Hạng mục nhận thi công</h2>
              <div class="capability-grid">
                ${proofPoints.map(([title, text]) => `
                <article>
                  <h3>${escapeHtml(title)}</h3>
                  <p>${escapeHtml(text)}</p>
                </article>`).join("")}
              </div>
            </section>

            <section class="content-block">
              <h2>Thông tin công ty và cách gửi yêu cầu</h2>
              <p>Để khách kiểm tra và liên hệ thuận tiện, Bông Sen Trắng công khai thông tin nhất quán trên website: <strong>Công ty TNHH Truyền thông Bông Sen Trắng</strong>, địa chỉ <strong>${address}</strong>, điện thoại và Zalo <a href="tel:${phoneHref}">${phone}</a>.</p>
              <ul class="check-list">
                <li>Gửi ảnh chụp thẳng mặt tiền và một ảnh chụp rộng cả khu vực lắp biển.</li>
                <li>Cho biết kích thước ngang x cao dự kiến, biển cũ còn dùng được hay không và thời điểm cần hoàn thiện.</li>
                <li>Gửi logo, tên thương hiệu, ngành hàng hoặc mẫu tham khảo nếu đã có.</li>
                <li>Với biển lớn, vị trí treo cao hoặc cần kiểm tra khung, trao đổi phương án khảo sát trước khi chốt.</li>
              </ul>
              <p><a href="../lien-he-lam-bien-quang-cao-ha-noi/">Xem đầy đủ thông tin liên hệ</a> hoặc <a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">xem cách chụp ảnh mặt tiền để báo giá nhanh</a>.</p>
            </section>

            <section class="content-block">
              <h2>Quy trình kiểm soát trước khi thi công</h2>
              <ol class="step-list">
                <li>Tiếp nhận ảnh mặt tiền, kích thước dự kiến, logo/thiết kế và địa chỉ lắp đặt.</li>
                <li>Tư vấn vật liệu phù hợp: bạt Hiflex, alu chữ nổi, hộp đèn LED, chữ mica/inox, backdrop.</li>
                <li>Đối chiếu kích thước, vị trí bắt khung, nguồn điện, hướng nắng mưa và điều kiện thi công.</li>
                <li>Báo giá theo phương án đã chọn, nêu rõ phạm vi hạng mục và bảo hành.</li>
                <li>Sản xuất, kiểm tra trước khi lắp, thi công và bàn giao tại công trình.</li>
              </ol>
            </section>

            <section class="content-block">
              <h2>Ảnh hạng mục thi công thực tế</h2>
              <p>Ảnh được dùng để thể hiện hạng mục, vật liệu và cách hoàn thiện. Không nên suy ra địa điểm lắp đặt của từng ảnh nếu trang không ghi rõ tên dự án hoặc địa điểm.</p>
              <div class="case-gallery">
                ${gallery.map(([image, alt]) => `
                <figure>
                  <img src="../assets/images/${image}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(alt)}</figcaption>
                </figure>`).join("").trim()}
              </div>
            </section>

            <section class="content-block">
              <h2>Xem thêm hạng mục đã thực hiện</h2>
              <div class="sitemap-grid">
                ${projectLinks.map(([title, link, text]) => `
                <a href="../${link}/">
                  <strong>${escapeHtml(title)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`).join("").trim()}
              </div>
            </section>

            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
                ${faqs.map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`).join("").trim()}
              </div>
            </section>
          </article>

          <aside class="content-sidebar" aria-label="Liên hệ tư vấn">
            <div class="sidebar-card">
              <h2>Gửi mặt tiền để tư vấn</h2>
              <p>Gửi ảnh mặt tiền, kích thước và ngân sách dự kiến để được đề xuất phương án biển phù hợp.</p>
              <a class="btn btn-primary" href="tel:${phoneHref}">Gọi ${phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../thi-cong-bien-quang-cao-ha-noi/">Thi công biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Hình ảnh công trình</a>
              <a href="../lien-he-lam-bien-quang-cao-ha-noi/">Thông tin liên hệ</a>
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
            </div>
            <address class="sidebar-card">
              <strong>Công ty TNHH Truyền thông Bông Sen Trắng</strong>
              <span>${address}</span>
            </address>
          </aside>
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
            ${address}<br>
            <a href="tel:${phoneHref}">${phone}</a><br>
            <a href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Zalo ${phone}</a><br>
            <a href="https://www.facebook.com/whitelotus.vn/" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          </address>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. Làm biển quảng cáo tại Hà Nội.</p>
      </div>
    </footer>
    <div class="mobile-cta" aria-label="Liên hệ nhanh trên di động">
      <a href="tel:${phoneHref}">Gọi</a>
      <a href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Zalo</a>
    </div>
    <script src="../assets/js/main.js"></script>
  </body>
</html>
`;

fs.mkdirSync(path.join(root, slug), { recursive: true });
fs.writeFileSync(path.join(root, slug, "index.html"), html, "utf8");

console.log("Generated capability page");
