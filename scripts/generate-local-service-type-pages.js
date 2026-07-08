const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";

const business = {
  displayName: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const pages = [
  {
    slug: "lam-bien-vay-led-dong-da-ha-noi",
    title: "Làm biển vẫy LED Đống Đa Hà Nội",
    district: "Đống Đa",
    type: "biển vẫy LED",
    parentType: "lam-bien-vay-led-ha-noi",
    parentArea: "lam-bien-quang-cao-dong-da",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    streets: ["Ô Chợ Dừa", "Xã Đàn", "Thái Hà", "Chùa Bộc", "Tây Sơn", "Phạm Ngọc Thạch"],
    note:
      "Đống Đa có nhiều mặt tiền hẹp, ngõ giao phố và tuyến kinh doanh đông người qua lại, nên biển vẫy LED giúp khách nhận ra cửa hàng từ hai chiều đường."
  },
  {
    slug: "lam-bien-vay-led-cau-giay-ha-noi",
    title: "Làm biển vẫy LED Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    type: "biển vẫy LED",
    parentType: "lam-bien-vay-led-ha-noi",
    parentArea: "lam-bien-quang-cao-cau-giay",
    image: "bien-vay-shop-quan-ao-mon-ha-noi.jpg",
    streets: ["Duy Tân", "Trần Thái Tông", "Trung Kính", "Xuân Thủy", "Cầu Giấy", "Nguyễn Phong Sắc"],
    note:
      "Cầu Giấy phù hợp biển vẫy LED cho cafe, trà sữa, shop, nhà thuốc, salon và cửa hàng dịch vụ nằm trong dãy phố nhiều biển cạnh tranh."
  },
  {
    slug: "lam-bien-hop-den-led-ha-dong-ha-noi",
    title: "Làm biển hộp đèn LED Hà Đông Hà Nội",
    district: "Hà Đông",
    type: "biển hộp đèn LED",
    parentType: "bien-hop-den-led-ha-noi",
    parentArea: "lam-bien-quang-cao-ha-dong",
    image: "du-an-bien-vay-gia-long.jpg",
    streets: ["Quang Trung", "Nguyễn Trãi", "Văn Quán", "Mỗ Lao", "Tố Hữu", "Vạn Phúc"],
    note:
      "Hà Đông có nhiều cửa hàng mở tối, mặt tiền khu dân cư và tuyến phố dài; hộp đèn LED giúp biển rõ hơn khi khách đi xe qua."
  },
  {
    slug: "lam-bien-hop-den-led-thanh-xuan-ha-noi",
    title: "Làm biển hộp đèn LED Thanh Xuân Hà Nội",
    district: "Thanh Xuân",
    type: "biển hộp đèn LED",
    parentType: "bien-hop-den-led-ha-noi",
    parentArea: "lam-bien-quang-cao-thanh-xuan",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    streets: ["Nguyễn Trãi", "Khuất Duy Tiến", "Nguyễn Tuân", "Lê Văn Lương", "Trường Chinh", "Vũ Trọng Phụng"],
    note:
      "Thanh Xuân phù hợp hộp đèn LED cho phòng khám, nhà thuốc, cửa hàng dịch vụ, quán ăn và shop cần nhìn rõ tên vào buổi tối."
  },
  {
    slug: "lam-backdrop-logo-van-phong-nam-tu-liem-ha-noi",
    title: "Làm backdrop logo văn phòng Nam Từ Liêm Hà Nội",
    district: "Nam Từ Liêm",
    type: "backdrop logo văn phòng",
    parentType: "lam-backdrop-logo-le-tan-ha-noi",
    parentArea: "lam-bien-quang-cao-nam-tu-liem",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    streets: ["Mỹ Đình", "Phạm Hùng", "Mễ Trì", "Lê Đức Thọ", "Hàm Nghi", "Đỗ Đức Dục"],
    note:
      "Nam Từ Liêm có nhiều văn phòng, showroom và tòa nhà dịch vụ; backdrop logo lễ tân giúp không gian tiếp khách chuyên nghiệp và đồng bộ thương hiệu."
  },
  {
    slug: "lam-decal-kinh-showroom-cau-giay-ha-noi",
    title: "Làm decal kính showroom Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    type: "decal kính showroom",
    parentType: "lam-decal-kinh-cua-hang-ha-noi",
    parentArea: "lam-bien-quang-cao-cau-giay",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    streets: ["Duy Tân", "Trần Thái Tông", "Trung Kính", "Xuân Thủy", "Yên Hòa", "Hoàng Quốc Việt"],
    note:
      "Decal kính phù hợp showroom, văn phòng, spa, clinic và cửa hàng dịch vụ tại Cầu Giấy khi cần nhận diện trên cửa kính nhưng vẫn giữ không gian sáng."
  },
  {
    slug: "lam-bien-menu-quan-an-dong-da-ha-noi",
    title: "Làm biển menu quán ăn Đống Đa Hà Nội",
    district: "Đống Đa",
    type: "biển menu quán ăn",
    parentType: "lam-bien-menu-quan-an-ha-noi",
    parentArea: "lam-bien-quang-cao-dong-da",
    image: "du-an-bep-ba-son-hoi-an-bien-menu.jpg",
    streets: ["Ô Chợ Dừa", "Xã Đàn", "Tôn Đức Thắng", "Khâm Thiên", "Chùa Bộc", "Nguyễn Lương Bằng"],
    note:
      "Quán ăn tại Đống Đa thường cần bảng menu, bảng món, biển giá và biển phụ dễ đọc nhanh để khách quyết định khi đi ngang."
  },
  {
    slug: "lam-bien-quan-nhau-hoang-mai-ha-noi",
    title: "Làm biển quán nhậu Hoàng Mai Hà Nội",
    district: "Hoàng Mai",
    type: "biển quán nhậu",
    parentType: "lam-bien-quan-nhau-bia-hoi-ha-noi",
    parentArea: "lam-bien-quang-cao-hoang-mai",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    streets: ["Linh Đàm", "Giải Phóng", "Tam Trinh", "Tân Mai", "Kim Đồng", "Định Công"],
    note:
      "Hoàng Mai có nhiều quán ăn tối, quán nhậu, lẩu nướng và mặt bằng khu dân cư; biển cần sáng, chữ lớn, dễ nhận ra từ xa."
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const description = `${page.title}: tư vấn vật liệu, kích thước, vị trí lắp và báo giá theo mặt bằng thực tế. Gửi ảnh qua Zalo 0989 521 881.`;
  const faqs = [
    [
      `Báo giá ${page.type} tại ${page.district} cần gửi gì?`,
      "Gửi ảnh mặt tiền hoặc vị trí lắp, kích thước dự kiến, địa chỉ cụ thể, nội dung/logo cần làm và thời gian mong muốn hoàn thiện."
    ],
    [
      `Có khảo sát tại ${page.district} không?`,
      `Có. Với biển treo cao, cần đấu điện, cần kiểm tra khung hoặc mặt bằng khó, nên khảo sát tại ${page.district} trước khi chốt phương án.`
    ],
    [
      "Có làm nhanh cho cửa hàng sắp khai trương không?",
      "Có thể nhận nếu vật liệu, thiết kế và mặt bằng phù hợp. Nên gửi ảnh sớm để kiểm tra tiến độ thực tế."
    ]
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: business.displayName,
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
        areaServed: `${page.district}, Hà Nội`
      },
      {
        "@type": "Service",
        name: page.title,
        description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${page.district}, Hà Nội`,
        serviceType: page.type
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
          <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Theo hạng mục</a>
          <a href="../${page.parentArea}/">${escapeHtml(page.district)}</a>
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
              <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Theo hạng mục</a>
              <span>/</span>
              <a href="../${page.parentArea}/">${escapeHtml(page.district)}</a>
            </nav>
            <p class="section-kicker">${escapeHtml(page.type)} tại ${escapeHtml(page.district)}</p>
            <h1>${escapeHtml(page.title)}</h1>
            <p>Bông Sen Trắng nhận tư vấn, sản xuất và thi công ${escapeHtml(page.type)} tại ${escapeHtml(page.district)}, Hà Nội. ${escapeHtml(page.note)} Gửi ảnh mặt tiền hoặc vị trí lắp qua Zalo để được tư vấn nhanh.</p>
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
              <h2>Khu vực thường cần ${escapeHtml(page.type)}</h2>
              <ul class="area-list">
                ${listItems(page.streets)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Báo giá theo mặt bằng thực tế tại ${escapeHtml(page.district)}</h2>
              <p>Chi phí phụ thuộc kích thước, vật liệu, ánh sáng, vị trí lắp, độ cao thi công và việc có tận dụng được khung cũ hay không. Ảnh mặt tiền rõ sẽ giúp báo giá nhanh và sát hơn.</p>
            </section>
            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
                ${faqs
                  .map(
                    ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
                  )
                  .join("\n")}
              </div>
            </section>
          </article>
          <aside class="content-sidebar" aria-label="Liên hệ báo giá">
            <div class="sidebar-card">
              <h2>Gửi ảnh để báo giá</h2>
              <p>Chụp mặt tiền, kích thước dự kiến và địa chỉ tại ${escapeHtml(page.district)} rồi gửi qua Zalo.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../${page.parentType}/">${escapeHtml(page.type)} Hà Nội</a>
              <a href="../${page.parentArea}/">Làm biển quảng cáo ${escapeHtml(page.district)}</a>
              <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Biển theo hạng mục</a>
            </div>
            <address class="sidebar-card">
              <strong>${business.displayName}</strong>
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

console.log(`Generated ${pages.length} local service-type SEO pages`);
