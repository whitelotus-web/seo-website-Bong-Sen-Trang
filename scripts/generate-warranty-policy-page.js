const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "chinh-sach-bao-hanh-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;
const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const faqs = [
  [
    "Bảo hành biển quảng cáo được ghi ở đâu?",
    "Phạm vi bảo hành phù hợp với từng hạng mục cần được ghi hoặc trao đổi rõ trong báo giá và khi bàn giao. Nội dung có thể khác nhau theo vật liệu, hệ đèn, nguồn điện, vị trí lắp và điều kiện sử dụng thực tế."
  ],
  [
    "Báo giá biển quảng cáo cần có những hạng mục nào?",
    "Khách nên kiểm tra vật liệu nền, chữ và logo, đèn hoặc nguồn điện nếu có, hệ khung, vị trí lắp, công tháo dỡ biển cũ nếu có và phạm vi bảo hành. Khi chưa đủ thông tin mặt bằng, báo giá chỉ nên xem là dự trù ban đầu."
  ],
  [
    "Khi nào nên khảo sát trước khi thi công?",
    "Nên khảo sát khi biển treo cao, mặt dựng lớn, cần gia cố khung, tận dụng kết cấu cũ, có điều kiện điện phức tạp hoặc vị trí lắp khó quan sát qua ảnh."
  ],
  [
    "Cần gửi gì để được tư vấn đúng?",
    "Gửi ảnh chụp thẳng mặt tiền, ảnh chụp rộng vị trí lắp, kích thước ngang cao dự kiến, địa chỉ tại Hà Nội, nhu cầu ánh sáng và mẫu logo hoặc thiết kế nếu đã có."
  ]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: business.name,
      url: `${baseUrl}/`,
      image: `${baseUrl}/assets/images/logo-whitelotus.png`,
      telephone: `+84${business.phoneHref.slice(1)}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Số 92E Ô Chợ Dừa",
        addressLocality: "Đống Đa",
        addressRegion: "Hà Nội",
        addressCountry: "VN"
      },
      areaServed: { "@type": "City", name: "Hà Nội", addressCountry: "VN" },
      sameAs: [business.facebookUrl],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+84${business.phoneHref.slice(1)}`,
        contactType: "customer service",
        areaServed: "Hà Nội",
        availableLanguage: ["vi"]
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Chính sách khảo sát, báo giá và bảo hành biển quảng cáo Hà Nội",
      description: "Thông tin về khảo sát, báo giá, nghiệm thu và bảo hành biển quảng cáo tại Hà Nội của Bông Sen Trắng.",
      url: pageUrl,
      dateModified: "2026-08-21",
      about: { "@id": `${baseUrl}/#localbusiness` }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Chính sách khảo sát, báo giá và bảo hành", item: pageUrl }
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
    <title>Chính sách bảo hành biển quảng cáo Hà Nội | Bông Sen Trắng</title>
    <meta name="description" content="Thông tin khảo sát, báo giá, nghiệm thu và bảo hành biển quảng cáo tại Hà Nội. Gửi ảnh mặt tiền để Bông Sen Trắng tư vấn đúng hạng mục.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-sb-invest-backdrop-le-tan.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Chính sách khảo sát, báo giá và bảo hành biển quảng cáo Hà Nội">
    <meta property="og:description" content="Các thông tin cần thống nhất trước khi sản xuất, lắp đặt và bàn giao biển quảng cáo.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-sb-invest-backdrop-le-tan.jpg">
    <meta property="og:image:alt" content="Backdrop lễ tân chữ nổi hoàn thiện tại công trình">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Chính sách bảo hành biển quảng cáo Hà Nội">
    <meta name="twitter:description" content="Thông tin khảo sát, báo giá, nghiệm thu và bảo hành tại Bông Sen Trắng.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-sb-invest-backdrop-le-tan.jpg">
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
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" data-site-nav aria-label="Điều hướng chính">
          <a href="../#dich-vu">Dịch vụ</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực</a>
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
              <a href="../">Trang chủ</a><span>/</span><span>Chính sách khảo sát, báo giá và bảo hành</span>
            </nav>
            <p class="section-kicker">Thông tin trước khi thi công</p>
            <h1>Chính sách khảo sát, báo giá và bảo hành biển quảng cáo tại Hà Nội</h1>
            <p>Thông tin rõ ngay từ đầu giúp khách so sánh đúng hạng mục và giúp đơn vị thi công triển khai sát với mặt bằng. Bông Sen Trắng trao đổi theo ảnh, kích thước và điều kiện lắp đặt thực tế trước khi chốt phương án.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-sb-invest-backdrop-le-tan.jpg" alt="Backdrop lễ tân chữ nổi hoàn thiện tại công trình" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>1. Khảo sát và tư vấn theo mặt bằng</h2>
              <p>Khách có thể gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt và mẫu logo qua Zalo trước. Với công trình treo cao, biển lớn, khung cũ, mặt dựng phức tạp hoặc hệ điện cần kiểm tra, phương án khảo sát sẽ được trao đổi trước khi sản xuất.</p>
              <ul class="check-list">
                <li>Ảnh chụp thẳng mặt tiền và ảnh chụp rộng cả vị trí lắp biển.</li>
                <li>Kích thước ngang x cao dự kiến hoặc kích thước biển cũ.</li>
                <li>Thông tin về tầng lắp, vị trí treo, khung cũ và nhu cầu sáng buổi tối.</li>
                <li>Logo, tên cửa hàng, ngành hàng và mẫu tham khảo nếu đã có.</li>
              </ul>
              <p><a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">Xem hướng dẫn chụp ảnh mặt tiền để báo giá</a>.</p>
            </section>

            <section class="content-block">
              <h2>2. Báo giá cần thể hiện đúng phạm vi công việc</h2>
              <p>Giá biển có thể thay đổi theo vật liệu, kích thước, hệ khung, chữ/logo, LED, nguồn điện, độ cao, thời gian thi công và điều kiện tháo dỡ. Vì vậy, khi đối chiếu báo giá cần xem từng hạng mục thay vì chỉ so sánh một con số tổng.</p>
              <div class="price-table-wrap trust-table-wrap">
                <table class="price-table trust-table">
                  <thead><tr><th>Nhóm hạng mục</th><th>Thông tin cần thống nhất</th></tr></thead>
                  <tbody>
                    <tr><td>Nền biển và khung</td><td>Loại vật liệu, độ dày, kết cấu mới hay tận dụng khung hiện có.</td></tr>
                    <tr><td>Chữ, logo và hoàn thiện</td><td>Vật liệu chữ, kích thước, màu sắc, bề mặt và có LED hắt sáng hay không.</td></tr>
                    <tr><td>Điện và ánh sáng</td><td>Loại LED, nguồn, đi dây, chống nước và cách kiểm tra khi bàn giao.</td></tr>
                    <tr><td>Thi công</td><td>Độ cao, vận chuyển, tháo biển cũ, giàn giáo hoặc thiết bị hỗ trợ nếu cần.</td></tr>
                    <tr><td>Bảo hành</td><td>Phạm vi theo vật liệu, hệ điện và điều kiện sử dụng được nêu trong phương án chốt.</td></tr>
                  </tbody>
                </table>
              </div>
              <p><a href="../bao-gia-bien-quang-cao-ha-noi/">Xem bảng giá tham khảo và công cụ ước tính phần nền biển</a>.</p>
            </section>

            <section class="content-block">
              <h2>3. Kiểm tra trước khi nghiệm thu</h2>
              <ol class="step-list">
                <li>Đối chiếu đúng nội dung, logo, bố cục và màu sắc đã chốt.</li>
                <li>Kiểm tra bề mặt, mép chữ, khung treo, vị trí bắt cố định và độ sạch sau thi công.</li>
                <li>Với biển có đèn: kiểm tra độ sáng, nguồn, dây điện và vận hành tại thời điểm bàn giao.</li>
                <li>Trao đổi rõ hạng mục cần bảo hành, cách liên hệ và điều kiện sử dụng ngoài trời.</li>
              </ol>
            </section>

            <section class="content-block">
              <h2>4. Bảo hành theo hạng mục thực tế</h2>
              <p>Bảo hành không nên ghi chung chung cho mọi loại biển. Vật liệu nền, chữ nổi, đèn LED, bộ nguồn, khung treo và vị trí lắp ngoài trời có điều kiện sử dụng khác nhau. Phạm vi phù hợp cần được ghi rõ trong báo giá hoặc khi bàn giao để hai bên cùng kiểm tra.</p>
              <p>Nếu biển cũ gặp lỗi như mờ bạt, hỏng LED, nước vào hộp đèn hoặc khung xuống cấp, hãy gửi ảnh hiện trạng để xác định nên sửa phần nào hay thay mới.</p>
              <p><a href="../sua-chua-bien-quang-cao-ha-noi/">Xem hạng mục sửa chữa biển quảng cáo tại Hà Nội</a>.</p>
            </section>

            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
${faqs.map(([question, answer]) => `                <details><summary>${question}</summary><p>${answer}</p></details>`).join("\n")}
              </div>
            </section>
          </article>

          <aside class="content-sidebar" aria-label="Liên hệ tư vấn">
            <div class="sidebar-card">
              <h2>Nhận tư vấn theo mặt bằng</h2>
              <p>Gửi ảnh mặt tiền, kích thước và địa chỉ lắp đặt để trao đổi đúng hạng mục.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực thi công</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Hình ảnh thực tế</a>
              <a href="../lien-he-lam-bien-quang-cao-ha-noi/">Thông tin liên hệ</a>
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
          <p>Công ty TNHH Truyền thông Bông Sen Trắng sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội.</p>
        </div>
        <div>
          <h2>Liên hệ</h2>
          <address>
            ${business.address}<br>
            <a href="tel:${business.phoneHref}">${business.phone}</a><br>
            <a href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Zalo ${business.phone}</a><br>
            <a href="https://www.facebook.com/whitelotus.vn/" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          </address>
        </div>
      </div>
      <div class="container footer-bottom"><p>© <span data-year></span> Bông Sen Trắng. Làm biển quảng cáo tại Hà Nội.</p></div>
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

console.log("Generated warranty and handover policy page");
