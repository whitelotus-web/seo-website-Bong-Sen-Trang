const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.pages.dev";

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const pages = [
  {
    slug: "xuong-lam-bien-quang-cao-ha-noi",
    title: "Xưởng làm biển quảng cáo Hà Nội",
    kicker: "Sản xuất và thi công biển quảng cáo",
    image: "san-xuat-khung-bien-vay-led-ha-noi.jpg",
    intro: "Cần làm biển quảng cáo mới, thay biển cũ hoặc hoàn thiện biển cho cửa hàng sắp khai trương, Bông Sen Trắng nhận tư vấn phương án theo mặt tiền thực tế tại Hà Nội.",
    items: ["Tư vấn vật liệu theo ngân sách", "Sản xuất biển alu, hộp đèn, Hiflex, chữ nổi", "Thi công lắp đặt và kiểm tra ánh sáng", "Hỗ trợ sửa chữa, thay LED, thay mặt biển sau thi công"],
    related: [["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"], ["Năng lực thi công", "nang-luc-thi-cong-bien-quang-cao-ha-noi"], ["Hình ảnh mẫu biển", "hinh-anh-bien-quang-cao-thuc-te-ha-noi"]]
  },
  {
    slug: "don-vi-lam-bien-quang-cao-uy-tin-ha-noi",
    title: "Đơn vị làm biển quảng cáo uy tín Hà Nội",
    kicker: "Tư vấn rõ phương án trước khi làm",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    intro: "Một đơn vị làm biển tốt cần tư vấn đúng vật liệu, dự toán chi phí rõ và thi công theo điều kiện mặt bằng thực tế, không chỉ báo giá theo mét vuông.",
    items: ["Khảo sát khi mặt bằng phức tạp", "Chốt kích thước và vật liệu trước khi sản xuất", "Ưu tiên chữ rõ, ánh sáng đều, bố cục dễ đọc", "Có phương án sửa hoặc nâng cấp nếu biển cũ còn tận dụng được"],
    related: [["Quy trình thi công", "thi-cong-bien-quang-cao-ha-noi"], ["Báo giá 2026", "bao-gia-bien-quang-cao-ha-noi"], ["Sửa biển cũ", "sua-chua-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "thi-cong-bang-hieu-quang-cao-tron-goi-ha-noi",
    title: "Thi công bảng hiệu quảng cáo trọn gói Hà Nội",
    kicker: "Từ tư vấn đến lắp đặt hoàn thiện",
    image: "du-an-bien-gia-long.jpg",
    intro: "Dịch vụ trọn gói phù hợp khách muốn có một đầu mối xử lý từ tư vấn, vật liệu, sản xuất đến lắp đặt biển tại Hà Nội.",
    items: ["Nhận thông tin mặt tiền và mục tiêu sử dụng", "Tư vấn kiểu biển phù hợp: alu, hộp đèn, chữ nổi, bạt Hiflex", "Sản xuất theo kích thước chốt", "Lắp đặt, kiểm tra hoàn thiện và bàn giao"],
    related: [["Làm bảng hiệu cửa hàng", "lam-bang-hieu-cua-hang-ha-noi"], ["Thi công biển quảng cáo", "thi-cong-bien-quang-cao-ha-noi"], ["Biển alu chữ nổi", "bien-alu-chu-noi-ha-noi"]]
  },
  {
    slug: "lam-bang-hieu-quang-cao-ha-noi",
    title: "Làm bảng hiệu quảng cáo Hà Nội",
    kicker: "Bảng hiệu cửa hàng, công ty, showroom",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    intro: "Bảng hiệu cần nhìn rõ tên, ngành hàng và điểm nhận diện chính. Với mặt tiền nhỏ, bố cục gọn và ánh sáng đúng quan trọng hơn việc nhồi nhiều thông tin.",
    items: ["Bảng hiệu shop, cafe, quán ăn, spa", "Bảng hiệu công ty, văn phòng, showroom", "Bảng hiệu alu chữ nổi, hộp đèn, bạt Hiflex", "Tư vấn sửa bảng hiệu cũ nếu còn tận dụng được"],
    related: [["Biển shop quần áo", "bien-shop-quan-ao-ha-noi"], ["Biển cafe", "bien-quan-cafe-ha-noi"], ["Biển văn phòng", "bien-van-phong-cong-ty-ha-noi"]]
  },
  {
    slug: "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi",
    title: "Làm biển quảng cáo cho cửa hàng mới mở Hà Nội",
    kicker: "Kịp khai trương, dễ nhận diện",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Cửa hàng mới mở cần biển rõ ngành hàng, dễ tìm địa chỉ và đủ nổi bật trong tuần khai trương. Nên chốt phương án sớm để tránh làm gấp sát ngày.",
    items: ["Tư vấn biển chính mặt tiền", "Biển vẫy hoặc hộp đèn phụ", "Menu/bảng phụ nếu là quán ăn, đồ uống", "Ưu tiên phương án thi công nhanh khi cần khai trương"],
    related: [["Làm biển nhanh", "lam-bien-quang-cao-nhanh-ha-noi"], ["Biển khai trương", "bien-khai-truong-ha-noi"], ["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "sua-bien-hop-den-led-ha-noi",
    title: "Sửa biển hộp đèn LED Hà Nội",
    kicker: "Thay LED, nguồn, mặt hộp đèn",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    intro: "Biển hộp đèn bị tối, chập chờn, cháy nguồn hoặc bạc mặt bạt sẽ làm cửa hàng khó nhìn vào buổi tối. Có thể sửa từng phần nếu khung còn tốt.",
    items: ["Kiểm tra LED, nguồn và dây điện", "Thay mặt bạt/mica khi đã bạc màu", "Gia cố khung nếu bị cong, rỉ", "Tư vấn khi nào nên sửa và khi nào nên làm mới"],
    related: [["Sửa chữa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Biển hộp đèn LED", "bien-hop-den-led-ha-noi"], ["Dấu hiệu cần thay biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"]]
  },
  {
    slug: "thay-mat-bat-bien-quang-cao-ha-noi",
    title: "Thay mặt bạt biển quảng cáo Hà Nội",
    kicker: "Làm mới mặt biển tiết kiệm chi phí",
    image: "bien-tam-lon-ha-noi.jpg",
    intro: "Nếu khung biển còn chắc, thay mặt bạt mới có thể giúp biển sáng và rõ hơn với chi phí thấp hơn làm lại toàn bộ.",
    items: ["Thay bạt Hiflex cho biển cũ", "Căng lại mặt biển bị nhăn, rách, bạc màu", "Kiểm tra khung và ánh sáng bên trong", "Thi công nhanh cho cửa hàng đang hoạt động"],
    related: [["Biển bạt Hiflex", "bien-bat-hiflex-ha-noi"], ["Sửa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Báo giá biển bạt", "bao-gia-bien-bat-hiflex-ha-noi"]]
  },
  {
    slug: "lap-den-led-bien-quang-cao-ha-noi",
    title: "Lắp đèn LED biển quảng cáo Hà Nội",
    kicker: "Tăng độ sáng cho biển buổi tối",
    image: "du-an-bien-the-fox-fitness.jpg",
    intro: "Biển đẹp nhưng thiếu sáng sẽ khó phát huy tác dụng vào buổi tối. Có thể bổ sung LED hắt sáng, LED âm, LED trong hộp đèn hoặc thay hệ đèn cũ.",
    items: ["Tư vấn kiểu sáng phù hợp mặt biển", "Thay nguồn, thay LED cũ bị cháy", "Lắp LED cho chữ nổi hoặc hộp đèn", "Kiểm tra an toàn điện trước khi bàn giao"],
    related: [["Biển hộp đèn LED", "bien-hop-den-led-ha-noi"], ["Chữ nổi mica inox", "chu-noi-mica-inox-ha-noi"], ["Sửa biển hộp đèn", "sua-bien-hop-den-led-ha-noi"]]
  },
  {
    slug: "bao-tri-bien-quang-cao-ha-noi",
    title: "Bảo trì biển quảng cáo Hà Nội",
    kicker: "Giữ biển sáng, chắc và sạch",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    intro: "Biển ngoài trời sau thời gian sử dụng có thể bạc màu, yếu đèn, lỏng khung hoặc bám bẩn. Bảo trì định kỳ giúp giảm rủi ro hỏng nặng.",
    items: ["Kiểm tra khung, mặt biển và điểm treo", "Vệ sinh mặt biển, kiểm tra chữ nổi", "Thay LED/nguồn khi ánh sáng yếu", "Tư vấn nâng cấp nếu biển cũ không còn hiệu quả"],
    related: [["Sửa chữa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Thay mặt bạt", "thay-mat-bat-bien-quang-cao-ha-noi"], ["Dấu hiệu cần sửa biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"]]
  },
  {
    slug: "tu-van-thiet-ke-bien-quang-cao-ha-noi",
    title: "Tư vấn thiết kế biển quảng cáo Hà Nội",
    kicker: "Chọn bố cục dễ đọc trước khi sản xuất",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    intro: "Biển quảng cáo hiệu quả cần rõ tên, ngành hàng, màu nhận diện và ánh sáng. Bố cục càng gọn, khách càng dễ nhớ khi đi ngang.",
    items: ["Tư vấn bố cục chữ và logo", "Chọn màu, vật liệu, kiểu sáng", "Ước lượng kích thước theo mặt tiền", "Gợi ý phương án tiết kiệm chi phí"],
    related: [["Cần chuẩn bị gì để báo giá", "can-chuan-bi-gi-de-bao-gia-bien-quang-cao"], ["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"], ["Mẫu biển thực tế", "hinh-anh-bien-quang-cao-thuc-te-ha-noi"]]
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
}

function renderRelated(links) {
  return links
    .map(([label, slug]) => `<a href="../${slug}/">${escapeHtml(label)}</a>`)
    .join("\n              ");
}

function renderFaq(page) {
  const faqs = [
    [`Muốn báo giá ${page.title.toLowerCase()} cần gửi gì?`, "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, thời gian cần hoàn thiện và mẫu biển thích nếu có."],
    [`Có cần khảo sát trước khi làm không?`, "Với biển lớn, biển cao, biển cần đấu điện hoặc sửa khung cũ, nên khảo sát để báo giá sát và hạn chế phát sinh."],
    [`Có nhận làm gấp tại Hà Nội không?`, "Có thể xử lý nhanh nếu vật liệu sẵn, thiết kế chốt sớm và mặt bằng không quá phức tạp."],
    [`Có tư vấn phương án tiết kiệm không?`, "Có. Nếu khung cũ còn tốt có thể thay mặt biển, thay LED hoặc chỉnh lại bố cục thay vì làm mới toàn bộ."]
  ];

  return {
    faqs,
    html: faqs
      .map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`)
      .join("\n")
  };
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const description = `${page.title}: tư vấn phương án, vật liệu, chi phí và thi công tại Hà Nội. Gửi ảnh qua Zalo 0989 521 881 để báo giá nhanh.`;
  const { faqs, html: faqHtml } = renderFaq(page);
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
        sameAs: [business.facebookUrl],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Số 92E Ô Chợ Dừa",
          addressLocality: "Đống Đa",
          addressRegion: "Hà Nội",
          addressCountry: "VN"
        },
        areaServed: "Hà Nội"
      },
      {
        "@type": "Service",
        name: page.title,
        description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: "Hà Nội",
        serviceType: "Làm biển quảng cáo"
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

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)} | Bông Sen Trắng</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/${page.image}" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(page.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/${page.image}">
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
          <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
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
              <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
              <span>/</span>
              <span>${escapeHtml(page.title)}</span>
            </nav>
            <p class="section-kicker">${escapeHtml(page.kicker)}</p>
            <h1>${escapeHtml(page.title)}</h1>
            <p>${escapeHtml(page.intro)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(page.title)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>Hạng mục cần chốt trước khi báo giá</h2>
              <ul class="area-list">
                ${renderList(page.items)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Gửi ảnh để báo giá sát hơn</h2>
              <p>Ảnh mặt tiền, kích thước ngang x cao, địa chỉ lắp đặt và thời gian cần hoàn thiện là các thông tin quan trọng nhất. Nếu có mẫu biển thích hoặc file logo, gửi kèm để tư vấn vật liệu và bố cục nhanh hơn.</p>
            </section>
            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
${faqHtml}
              </div>
            </section>
          </article>
          <aside class="content-sidebar" aria-label="Liên hệ báo giá">
            <div class="sidebar-card">
              <h2>Báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền qua Zalo để nhận tư vấn phương án phù hợp.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              ${renderRelated(page.related)}
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
            <a href="${business.facebookUrl}" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a>
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
</html>`;
}

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} buyer-intent SEO pages`);
