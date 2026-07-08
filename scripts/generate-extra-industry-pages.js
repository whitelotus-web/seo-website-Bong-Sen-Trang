const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const pages = [
  {
    slug: "bien-phong-kham-nha-khoa-ha-noi",
    title: "Biển phòng khám nha khoa Hà Nội | Bảng hiệu phòng khám chuyên nghiệp",
    description: "Làm biển phòng khám nha khoa tại Hà Nội: bảng hiệu mặt tiền, hộp đèn LED, chữ nổi mica, biển chỉ dẫn, logo lễ tân. Zalo 0989 521 881.",
    kicker: "Phòng khám, nha khoa",
    h1: "Làm biển phòng khám nha khoa tại Hà Nội",
    lead: "Biển phòng khám, nha khoa cần sạch, sáng, dễ đọc và tạo cảm giác tin cậy ngay từ mặt tiền. Bông Sen Trắng tư vấn vật liệu, ánh sáng và bố cục theo nhận diện của từng cơ sở.",
    image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển phòng khám nha khoa tại Hà Nội",
    intent: "phòng khám nha khoa, phòng khám chuyên khoa, clinic, trung tâm chăm sóc sức khỏe",
    sections: [
      ["Biển phòng khám cần khác biển cửa hàng thường", [
        "Khách nhìn biển phòng khám không chỉ cần biết tên, mà còn cần thấy chuyên khoa, độ tin cậy và cách liên hệ rõ ràng.",
        "Màu sắc nên sạch, chữ đủ lớn, ánh sáng đều và không gây chói. Với phòng khám trong ngõ hoặc tầng trên, nên kết hợp biển chỉ dẫn, biển vẫy hoặc hộp đèn nhỏ."
      ]],
      ["Hạng mục thường làm cho nha khoa, phòng khám", [
        "Biển alu chữ nổi, hộp đèn LED, chữ nổi mica/inox, bảng tên phòng khám, biển chỉ dẫn tầng, decal kính và backdrop logo lễ tân.",
        "Nếu phòng khám mở buổi tối, cần tính ánh sáng mặt tiền và khả năng đọc từ hai chiều đường."
      ]],
      ["Thông tin cần gửi để báo giá", [
        "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ, logo, màu nhận diện và các thông tin bắt buộc cần đưa lên biển.",
        "Nếu đã có thiết kế, gửi file để kiểm tra khả năng sản xuất, vật liệu và độ bền khi lắp ngoài trời."
      ]]
    ],
    gallery: [
      {
        image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nha khoa mặt tiền tại Hà Nội",
        caption: "Mẫu tham khảo cho phòng khám/nha khoa: bố cục rộng, thông tin chuyên khoa rõ và màu sắc dễ nhận diện."
      },
      {
        image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà thuốc phòng khám sáng rõ tại Hà Nội",
        caption: "Nhóm y tế, nhà thuốc, phòng khám nên ưu tiên biển sáng đều, chữ lớn và thông tin dễ đọc."
      },
      {
        image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
        alt: "Backdrop logo clinic khu lễ tân",
        caption: "Khu lễ tân có thể dùng logo chữ nổi/backdrop để nhận diện thương hiệu đồng bộ với biển ngoài mặt tiền."
      }
    ],
    related: [
      ["Biển phòng khám, nhà thuốc", "../bien-phong-kham-nha-thuoc-ha-noi/"],
      ["Biển nhà thuốc Hà Nội", "../bien-nha-thuoc-ha-noi/"],
      ["Biển nail mi spa Hà Nội", "../bien-nail-mi-spa-ha-noi/"],
      ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Biển phòng khám nha khoa nên dùng vật liệu gì?", "Thường dùng alu chữ nổi, chữ nổi mica/inox, hộp đèn LED hoặc kết hợp decal kính. Lựa chọn phụ thuộc mặt tiền, ngân sách và yêu cầu nhận diện thương hiệu."],
      ["Có làm biển chỉ dẫn tầng/phòng cho phòng khám không?", "Có. Có thể làm bảng tên phòng, biển chỉ dẫn tầng, biển lễ tân, decal kính và backdrop logo trong nhà."],
      ["Muốn báo giá biển nha khoa cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước, địa chỉ lắp đặt, logo, màu nhận diện, danh sách nội dung cần đưa lên biển và thời gian cần hoàn thiện."],
      ["Có sửa biển phòng khám cũ không?", "Có. Có thể thay LED, thay mặt biển, đổi nội dung, thay chữ nổi hoặc gia cố khung nếu biển đã xuống cấp."]
    ]
  },
  {
    slug: "bien-sieu-thi-mini-me-va-be-ha-noi",
    title: "Biển siêu thị mini, cửa hàng mẹ và bé Hà Nội | Bảng hiệu bán lẻ",
    description: "Làm biển siêu thị mini, cửa hàng mẹ và bé tại Hà Nội: biển mặt tiền, alu chữ nổi, hộp đèn LED, biển vẫy, bảng hiệu chuỗi. Zalo 0989 521 881.",
    kicker: "Siêu thị mini, mẹ và bé",
    h1: "Làm biển siêu thị mini, cửa hàng mẹ và bé tại Hà Nội",
    lead: "Cửa hàng mẹ và bé, siêu thị mini, cửa hàng tiện ích cần biển sáng, dễ đọc, màu thương hiệu rõ và đủ nổi bật trên tuyến phố đông người qua lại.",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    imageAlt: "Mẫu biển cửa hàng mẹ và bé tại Hà Nội",
    intent: "siêu thị mini, cửa hàng mẹ và bé, cửa hàng tiện ích, cửa hàng bán lẻ theo chuỗi",
    sections: [
      ["Biển bán lẻ cần nhận diện nhanh", [
        "Khách đi ngang thường chỉ có vài giây để nhận ra ngành hàng. Tên cửa hàng, nhóm sản phẩm và màu thương hiệu cần đặt rõ, không để biển quá rối.",
        "Với cửa hàng mẹ và bé hoặc siêu thị mini, nên ưu tiên mặt tiền sáng, chữ lớn, màu thân thiện và thông tin liên hệ gọn."
      ]],
      ["Hạng mục thường thi công", [
        "Biển alu chữ nổi, hộp đèn LED, biển bạt Hiflex diện tích lớn, biển vẫy hai mặt, bảng danh mục sản phẩm, decal kính và biển chỉ dẫn khu vực.",
        "Nếu có nhiều chi nhánh, nên chuẩn hóa kích thước chữ, màu sắc, vật liệu và vị trí logo để các điểm bán nhìn đồng bộ."
      ]],
      ["Tối ưu chi phí khi mở cửa hàng", [
        "Cửa hàng mới có thể làm trước biển chính, biển vẫy và decal kính. Các hạng mục phụ như bảng danh mục, standee, biển chỉ dẫn có thể bổ sung sau.",
        "Gửi ảnh mặt tiền và ngân sách dự kiến để chọn phương án vừa đủ nổi bật mà không vượt chi phí khai trương."
      ]]
    ],
    gallery: [
      {
        image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
        alt: "Mẫu biển cửa hàng mẹ và bé tại Hà Nội",
        caption: "Mẫu tham khảo cho cửa hàng mẹ và bé: màu sắc rõ, tên thương hiệu lớn và thông tin nhận diện ngành hàng dễ đọc."
      },
      {
        image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
        alt: "Mẫu biển siêu thị mini tại Hà Nội",
        caption: "Siêu thị mini, cửa hàng tiện ích cần biển lớn, sáng và dễ nhận diện từ xa."
      },
      {
        image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
        alt: "Mẫu biển alu chữ nổi cho cửa hàng bán lẻ",
        caption: "Alu chữ nổi phù hợp cửa hàng bán lẻ cần mặt tiền sạch và chuyên nghiệp hơn biển bạt thông thường."
      },
      {
        image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
        alt: "Mẫu biển shop bán lẻ mặt tiền Hà Nội",
        caption: "Cửa hàng bán lẻ cần cân bằng giữa độ nổi bật, màu thương hiệu và khả năng đọc nhanh khi khách đi ngang."
      }
    ],
    related: [
      ["Biển shop quần áo Hà Nội", "../bien-shop-quan-ao-ha-noi/"],
      ["Làm bảng hiệu cửa hàng", "../lam-bang-hieu-cua-hang-ha-noi/"],
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
      ["Biển vẫy cửa hàng", "../bien-vay-cua-hang-ha-noi/"],
      ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Cửa hàng mẹ và bé nên làm biển gì?", "Thường dùng alu chữ nổi, hộp đèn LED, biển bạt Hiflex lớn, biển vẫy và decal kính. Nếu muốn hình ảnh cao cấp hơn, nên ưu tiên alu chữ nổi hoặc hộp đèn mặt sáng đều."],
      ["Siêu thị mini có nên làm biển bạt Hiflex không?", "Có thể nếu cần tối ưu chi phí hoặc diện tích biển lớn. Nếu muốn bền và đẹp hơn, có thể kết hợp alu, chữ nổi và hộp đèn."],
      ["Có làm biển đồng bộ cho nhiều chi nhánh không?", "Có. Cần có logo, màu nhận diện, quy chuẩn kích thước hoặc ảnh các điểm bán để tư vấn phương án đồng bộ."],
      ["Muốn báo giá nhanh cần gửi gì?", "Cần ảnh mặt tiền, kích thước ngang x cao, địa chỉ lắp đặt, nội dung biển, logo và thời gian cần hoàn thiện."]
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

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const imageUrl = `${baseUrl}/assets/images/${page.image}`;
  const sectionsHtml = page.sections.map(([heading, paragraphs]) => `
            <section class="content-block">
              <h2>${escapeHtml(heading)}</h2>
              ${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("\n              ")}
            </section>`).join("\n");
  const galleryHtml = page.gallery.map((item) => `
                <figure>
                  <img src="../assets/images/${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>`).join("\n");
  const relatedHtml = page.related.map(([label, href]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>Xem thêm dịch vụ liên quan</span>
                </a>`).join("\n");
  const faqHtml = page.faqs.map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`).join("\n");

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
        areaServed: "Hà Nội"
      },
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: "Hà Nội",
        serviceType: "Làm biển quảng cáo"
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
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

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/${page.image}" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="${imageUrl}">
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
          <a href="../#du-an">Dự án</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
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
              <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
              <span>/</span>
              <span>${escapeHtml(page.kicker)}</span>
            </nav>
            <span class="eyebrow">${escapeHtml(page.kicker)}</span>
            <h1>${escapeHtml(page.h1)}</h1>
            <p>${escapeHtml(page.lead)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(page.imageAlt)}" loading="eager" fetchpriority="high" decoding="async" width="1200" height="800">
        </div>
      </section>

      <section class="page-content">
        <div class="container content-layout">
          <article>
${sectionsHtml}
            <section class="content-block">
              <h2>Mẫu biển tham khảo</h2>
              <p>Các ảnh dưới đây dùng để tham khảo kiểu mặt tiền, ánh sáng và bố cục. Khi báo giá thực tế cần chốt kích thước, vật liệu, vị trí lắp và điều kiện thi công.</p>
              <div class="gallery-grid">
${galleryHtml}
              </div>
            </section>
            <section class="content-block">
              <h2>Dịch vụ liên quan</h2>
              <div class="link-grid">
${relatedHtml}
              </div>
            </section>
            <section class="content-block faq-block">
              <h2>Câu hỏi thường gặp</h2>
${faqHtml}
            </section>
          </article>
          <aside class="content-sidebar">
            <div class="quote-card">
              <h2>Báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ và mẫu biển mong muốn qua Zalo để được tư vấn vật liệu và chi phí.</p>
              <a class="btn btn-primary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo ${business.phone}</a>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="../assets/images/logo-whitelotus.png" alt="Bông Sen Trắng Communication" width="220" height="53">
          <p>${business.name} sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội.</p>
        </div>
        <div>
          <h2>Liên hệ</h2>
          <p>${business.address}</p>
          <p><a href="tel:${business.phoneHref}">${business.phone}</a></p>
          <p><a href="${business.facebookUrl}" target="_blank" rel="noopener">Facebook Bông Sen Trắng</a></p>
        </div>
      </div>
    </footer>
    <script src="../assets/js/main.js" defer></script>
  </body>
</html>`;
}

pages.forEach((page) => {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
});

console.log(`Generated ${pages.length} extra industry pages`);
