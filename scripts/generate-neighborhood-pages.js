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
    slug: "lam-bien-quang-cao-linh-dam-ha-noi",
    title: "Làm biển quảng cáo Linh Đàm Hà Nội | Biển cửa hàng Hoàng Mai",
    description: "Làm biển quảng cáo Linh Đàm, Hoàng Mai: biển cafe, nhà hàng, shop, nhà thuốc, phòng khám, hộp đèn LED, alu chữ nổi. Zalo 0989 521 881.",
    kicker: "Linh Đàm, Hoàng Mai",
    h1: "Làm biển quảng cáo Linh Đàm, Hoàng Mai",
    lead: "Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa biển quảng cáo cho cửa hàng, cafe, nhà hàng, nhà thuốc, phòng khám và điểm kinh doanh quanh Linh Đàm.",
    image: "mau-bien-quan-cafe-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển quảng cáo quán cafe khu Linh Đàm Hà Nội",
    area: "Linh Đàm, Hoàng Mai, Hà Nội",
    streets: ["Linh Đàm", "Bán đảo Linh Đàm", "Nguyễn Hữu Thọ", "Giải Phóng", "Kim Đồng", "Định Công", "Tân Mai", "Khu đô thị Linh Đàm", "Hoàng Liệt", "Đại Kim"],
    needs: [
      "Biển mặt tiền cho cafe, trà sữa, đồ uống take away, nhà hàng và quán ăn.",
      "Biển nhà thuốc, phòng khám, nha khoa cần sáng rõ, sạch và tạo cảm giác tin cậy.",
      "Biển shop thời trang, cửa hàng bán lẻ cần tên thương hiệu dễ đọc và nổi bật khi khách đi ngang.",
      "Sửa biển cũ: thay LED, thay mặt mica/bạt, đổi nội dung, gia cố khung hoặc làm mới khi biển đã xuống cấp."
    ],
    gallery: [
      {
        image: "mau-bien-quan-cafe-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển quán cafe tại Linh Đàm Hà Nội",
        caption: "Mẫu biển cafe khu Linh Đàm: cần ánh sáng rõ, nhận diện tốt buổi tối và bố cục dễ nhìn từ mặt đường."
      },
      {
        image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà hàng tại Linh Đàm Hà Nội",
        caption: "Nhà hàng, quán ăn nên ưu tiên tên quán lớn, món chính rõ và ánh sáng đủ nổi bật vào giờ cao điểm."
      },
      {
        image: "mau-bien-quan-do-uong-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển quán đồ uống tại Linh Đàm Hà Nội",
        caption: "Quán đồ uống, trà sữa, nước ép thường hợp hộp đèn, chữ nổi LED và màu sắc trẻ, dễ nhận diện."
      },
      {
        image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà thuốc tại Linh Đàm Hà Nội",
        caption: "Nhà thuốc cần biển sáng đều, chữ dễ đọc, có thể kết hợp hộp đèn và chữ nổi để tăng độ tin cậy."
      },
      {
        image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển phòng khám nha khoa tại Linh Đàm Hà Nội",
        caption: "Phòng khám, nha khoa cần bố cục sạch, thông tin dịch vụ rõ và màu sắc chuyên nghiệp."
      },
      {
        image: "mau-bien-shop-quan-ao-ha-noi.jpg",
        alt: "Mẫu biển shop quần áo tại Hà Nội",
        caption: "Shop quần áo nên chọn biển dễ lên ảnh, tên thương hiệu rõ và có điểm nhìn nổi bật từ xa."
      }
    ],
    links: [
      ["Làm biển quảng cáo Hoàng Mai", "../lam-bien-quang-cao-hoang-mai/"],
      ["Biển quán cafe Hà Nội", "../bien-quan-cafe-ha-noi/"],
      ["Biển quán ăn uống Hà Nội", "../bien-quan-an-uong-ha-noi/"],
      ["Biển nhà thuốc Hà Nội", "../bien-nha-thuoc-ha-noi/"],
      ["Biển shop quần áo Hà Nội", "../bien-shop-quan-ao-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
      ["Sửa chữa biển quảng cáo Hà Nội", "../sua-chua-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển quảng cáo tại Linh Đàm không?", "Có. Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa biển quảng cáo quanh Linh Đàm, Hoàng Mai và các khu vực lân cận tại Hà Nội."],
      ["Linh Đàm nên làm loại biển nào cho cửa hàng?", "Tùy mặt tiền và ngành hàng. Cafe, đồ uống thường hợp hộp đèn, chữ nổi LED, biển vẫy. Nhà thuốc, phòng khám cần biển sáng đều, chữ rõ. Shop thời trang nên ưu tiên biển đẹp, dễ lên ảnh và đúng màu thương hiệu."],
      ["Muốn báo giá biển tại Linh Đàm cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, nội dung/logo và thời gian cần hoàn thiện. Có ảnh rõ thì tư vấn vật liệu và báo giá sát hơn."],
      ["Có sửa biển cũ khu Linh Đàm không?", "Có. Có thể thay LED, thay nguồn, thay mặt bạt/mica, đổi nội dung, gia cố khung hoặc làm mới nếu biển đã xuống cấp."]
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
  const needsHtml = page.needs.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
  const streetsHtml = page.streets.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
  const galleryHtml = page.gallery.map((item) => `
                <figure>
                  <img src="../assets/images/${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>`).join("\n");
  const linksHtml = page.links.map(([label, href]) => `
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
        areaServed: {
          "@type": "Place",
          name: page.area
        }
      },
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: page.area,
        serviceType: "Làm biển quảng cáo"
      },
      {
        "@type": "ImageGallery",
        name: `Mẫu biển quảng cáo khu ${page.area}`,
        image: page.gallery.map((item) => `${baseUrl}/assets/images/${item.image}`)
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
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
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
          <a href="../lam-bien-quang-cao-ha-noi/">Khu vực Hà Nội</a>
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
              <span>${escapeHtml(page.area)}</span>
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
            <section class="content-block">
              <h2>Nhu cầu làm biển quanh Linh Đàm</h2>
              <p>Khu Linh Đàm có nhiều cửa hàng mặt phố, quán ăn uống, cafe, nhà thuốc, phòng khám và dịch vụ bán lẻ. Khi làm biển, cần ưu tiên khả năng nhìn từ xa, độ sáng buổi tối và bố cục đủ rõ để khách đi ngang nhận ra nhanh.</p>
              <ul>
                ${needsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Khu vực phục vụ</h2>
              <p>Nhận tư vấn và báo giá theo ảnh mặt tiền quanh các tuyến/khu vực sau:</p>
              <ul>
                ${streetsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Mẫu biển tham khảo theo ngành</h2>
              <p>Các ảnh dưới đây dùng để tham khảo kiểu mặt tiền, ánh sáng và bố cục. Khi báo giá thực tế cần chốt kích thước, vật liệu, vị trí lắp và điều kiện thi công.</p>
              <div class="gallery-grid">
${galleryHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Liên kết dịch vụ liên quan</h2>
              <div class="link-grid">
${linksHtml}
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
              <p>Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ tại Linh Đàm và mẫu biển muốn làm qua Zalo để được tư vấn phương án.</p>
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

console.log(`Generated ${pages.length} neighborhood SEO pages`);
