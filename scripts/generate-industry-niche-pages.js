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

const niches = [
  {
    name: "shop quần áo",
    slug: "bien-shop-quan-ao-ha-noi",
    title: "Biển shop quần áo Hà Nội",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intent: "shop thời trang, cửa hàng quần áo, boutique, showroom nhỏ",
    problem: "cần tên shop dễ nhớ, màu thương hiệu rõ, nhìn đẹp trên ảnh check-in và nổi bật khi khách đi ngang",
    recommended: ["Alu chữ nổi", "Hộp đèn mica", "Biển vẫy nhỏ", "Chữ nổi có LED", "Backdrop logo trong shop"],
    keywords: ["biển shop quần áo", "bảng hiệu shop thời trang", "biển cửa hàng quần áo"]
  },
  {
    name: "quán cafe",
    slug: "bien-quan-cafe-ha-noi",
    title: "Biển quán cafe Hà Nội",
    image: "du-an-bien-tien-coffee.jpg",
    intent: "quán cafe, coffee takeaway, quán đồ uống, cafe nhỏ trong phố",
    problem: "cần biển có phong cách riêng, dễ đọc buổi tối và hợp không gian mặt tiền",
    recommended: ["Chữ nổi hắt sáng", "Hộp đèn LED", "Biển vẫy", "Neon sign decor", "Backdrop logo quầy order"],
    keywords: ["biển quán cafe", "bảng hiệu cafe", "biển coffee"]
  },
  {
    name: "quán ăn uống",
    slug: "bien-quan-an-uong-ha-noi",
    title: "Biển quán ăn uống Hà Nội",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    intent: "quán ăn, hàng ăn, quán bún phở, đồ nướng, quán cơm, nhà hàng nhỏ",
    problem: "cần khách nhìn nhanh tên quán, món chính, ánh sáng rõ và dễ gọi món từ mặt đường",
    recommended: ["Hộp đèn Hiflex", "Alu chữ nổi", "Biển bạt Hiflex", "Menu hộp đèn", "Biển vẫy LED"],
    keywords: ["biển quán ăn", "biển hàng ăn uống", "bảng hiệu quán ăn"]
  },
  {
    name: "trà sữa",
    slug: "bien-tra-sua-ha-noi",
    title: "Biển trà sữa Hà Nội",
    image: "mau-bien-quan-do-uong-linh-dam-ha-noi.jpg",
    intent: "quán trà sữa, đồ uống take away, nước ép, cửa hàng đồ uống",
    problem: "cần màu sắc trẻ, sáng đều, dễ lên ảnh và nổi bật trong khu nhiều hàng quán",
    recommended: ["Hộp đèn mica", "Alu chữ nổi LED", "Biển vẫy", "Menu mica/hộp đèn", "Neon sign trong quán"],
    keywords: ["biển trà sữa", "bảng hiệu trà sữa", "biển quán nước"]
  },
  {
    name: "nail, mi, spa nhỏ",
    slug: "bien-nail-mi-spa-ha-noi",
    title: "Biển nail mi spa Hà Nội",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intent: "tiệm nail, nối mi, spa nhỏ, beauty studio, chăm sóc da",
    problem: "cần biển sạch, sáng, tạo cảm giác tin cậy và không bị rối ở mặt tiền nhỏ",
    recommended: ["Chữ nổi mica LED", "Alu chữ nổi", "Hộp đèn mica", "Biển vẫy nhỏ", "Backdrop logo lễ tân"],
    keywords: ["biển nail", "biển nối mi", "biển spa nhỏ"]
  },
  {
    name: "salon tóc, barber",
    slug: "bien-salon-toc-barber-ha-noi",
    title: "Biển salon tóc barber Hà Nội",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    intent: "salon tóc, barber shop, hair studio, tiệm cắt tóc",
    problem: "cần biển cá tính, dễ nhận diện buổi tối và có điểm nhìn từ hai chiều đường",
    recommended: ["Alu chữ nổi", "Hộp đèn LED", "Biển vẫy barber", "Chữ nổi hắt sáng", "Neon sign decor"],
    keywords: ["biển salon tóc", "biển barber", "bảng hiệu tiệm tóc"]
  },
  {
    name: "nhà thuốc",
    slug: "bien-nha-thuoc-ha-noi",
    title: "Biển nhà thuốc Hà Nội",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    intent: "nhà thuốc, quầy thuốc, phòng khám nhỏ, cơ sở chăm sóc sức khỏe",
    problem: "cần biển rõ, sáng, dễ đọc, tạo cảm giác tin cậy và đúng nhận diện ngành",
    recommended: ["Hộp đèn LED", "Alu chữ nổi", "Biển chữ nổi mica", "Biển vẫy", "Bảng giờ mở cửa"],
    keywords: ["biển nhà thuốc", "bảng hiệu nhà thuốc", "biển quầy thuốc"]
  },
  {
    name: "gara ô tô, xe máy",
    slug: "bien-gara-o-to-xe-may-ha-noi",
    title: "Biển gara ô tô xe máy Hà Nội",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    intent: "gara ô tô, sửa xe máy, showroom xe, phụ kiện xe, rửa xe",
    problem: "cần biển lớn, bền ngoài trời, đọc được từ xa và chịu được môi trường bụi/nắng/mưa",
    recommended: ["Alu chữ nổi", "Tôn lam mặt dựng", "Hộp đèn LED", "Pano lớn", "Biển chỉ dẫn"],
    keywords: ["biển gara ô tô", "biển sửa xe", "biển showroom xe"]
  },
  {
    name: "trung tâm dạy học",
    slug: "bien-trung-tam-day-hoc-ha-noi",
    title: "Biển trung tâm dạy học Hà Nội",
    image: "du-an-brendon-chu-noi-mai-nha.jpg",
    intent: "trung tâm ngoại ngữ, lớp học, trường mầm non, trung tâm kỹ năng",
    problem: "cần biển rõ tên, ngành học, dễ nhìn cho phụ huynh và học viên, bền ngoài trời",
    recommended: ["Chữ nổi kích thước lớn", "Alu chữ nổi", "Pano mặt tiền", "Biển chỉ dẫn tầng", "Backdrop quầy lễ tân"],
    keywords: ["biển trung tâm dạy học", "biển trung tâm tiếng Anh", "biển trường mầm non"]
  },
  {
    name: "văn phòng công ty",
    slug: "bien-van-phong-cong-ty-ha-noi",
    title: "Biển văn phòng công ty Hà Nội",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    intent: "văn phòng, công ty, agency, showroom, quầy lễ tân, phòng họp",
    problem: "cần logo và tên công ty gọn, chuyên nghiệp, đúng màu nhận diện và phù hợp không gian nội thất",
    recommended: ["Backdrop logo chữ nổi", "Chữ nổi mica/inox", "Logo LED hắt sáng", "Biển phòng ban", "Biển công ty ngoài cửa"],
    keywords: ["biển văn phòng công ty", "backdrop logo công ty", "biển công ty"]
  }
];

const extraIndustryLinks = [
  {
    slug: "bien-phong-kham-nha-khoa-ha-noi",
    title: "Biển phòng khám nha khoa Hà Nội",
    intent: "phòng khám nha khoa, clinic, phòng khám chuyên khoa, trung tâm chăm sóc sức khỏe"
  },
  {
    slug: "bien-sieu-thi-mini-me-va-be-ha-noi",
    title: "Biển siêu thị mini, cửa hàng mẹ và bé Hà Nội",
    intent: "siêu thị mini, cửa hàng mẹ và bé, cửa hàng tiện ích, bán lẻ theo chuỗi"
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderFaq(niche) {
  const faqs = [
    [`${niche.title} nên chọn vật liệu gì?`, `Tùy mặt tiền và ngân sách. Nhóm phổ biến gồm ${niche.recommended.slice(0, 4).join(", ")}. Nếu cần sáng buổi tối nên ưu tiên LED hoặc hộp đèn.`],
    [`Muốn báo giá ${niche.name} cần gửi gì?`, "Cần gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ lắp đặt, mẫu biển thích hoặc file thiết kế nếu có."],
    [`Có làm biển gấp cho ${niche.name} không?`, "Có thể xử lý nhanh nếu thiết kế chốt sớm, vật tư sẵn và mặt bằng không quá phức tạp. Hạng mục lớn cần khảo sát trước."],
    [`Có sửa hoặc nâng cấp biển cũ cho ${niche.name} không?`, "Có. Có thể thay mặt biển, thay LED, thay chữ nổi, sửa hộp đèn hoặc làm lại bố cục để nhìn chuyên nghiệp hơn."]
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

function renderNichePage(niche) {
  const pageUrl = `${baseUrl}/${niche.slug}/`;
  const { faqs, html: faqHtml } = renderFaq(niche);
  const recommendedHtml = niche.recommended.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
  const keywordHtml = niche.keywords.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");

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
        name: niche.title,
        description: `Thiết kế, sản xuất, thi công ${niche.title.toLowerCase()} cho ${niche.intent} tại Hà Nội.`,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: "Hà Nội",
        serviceType: "Làm biển quảng cáo theo ngành"
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
    <title>${escapeHtml(niche.title)} | Làm bảng hiệu theo ngành</title>
    <meta name="description" content="${escapeHtml(niche.title)}: tư vấn alu chữ nổi, hộp đèn LED, Hiflex, chữ nổi, sửa biển cũ. Gửi ảnh qua Zalo 0989 521 881 để báo giá.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/${niche.image}" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(niche.title)}">
    <meta property="og:description" content="Tư vấn thiết kế, sản xuất và thi công bảng hiệu theo ngành tại Hà Nội.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${niche.image}">
    <meta property="og:image:alt" content="${escapeHtml(niche.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(niche.title)}">
    <meta name="twitter:description" content="Gửi ảnh mặt tiền qua Zalo để nhận tư vấn bảng hiệu theo ngành.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/${niche.image}">
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
        <nav class="site-nav" data-site-nav aria-label="Điều hướng chính">
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
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
              <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
              <span>/</span>
              <span>${escapeHtml(niche.name)}</span>
            </nav>
            <p class="section-kicker">Biển quảng cáo theo ngành hàng</p>
            <h1>${escapeHtml(niche.title)}</h1>
            <p>Bông Sen Trắng nhận tư vấn, sản xuất và thi công ${escapeHtml(niche.title.toLowerCase())} cho ${escapeHtml(niche.intent)} tại Hà Nội. Với nhóm này, biển hiệu ${escapeHtml(niche.problem)}.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${niche.image}" alt="${escapeHtml(niche.title)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Chọn biển theo đúng hành vi khách của ngành</h2>
              <p>Mỗi ngành cần biển khác nhau. Shop cần màu và tên dễ nhớ, cafe cần cảm giác và ánh sáng, quán ăn cần đọc nhanh món chính, spa/nail cần sạch và tin cậy, văn phòng cần logo gọn và chuyên nghiệp.</p>
            </section>

            <section class="content-block">
              <h2>Phương án vật liệu nên cân nhắc</h2>
              <ul class="area-list material-list">
                ${recommendedHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Cụm tìm kiếm khách hay dùng</h2>
              <ul class="check-list">
                ${keywordHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Quy trình báo giá</h2>
              <ol class="step-list">
                <li>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo.</li>
                <li>Gửi logo, màu thương hiệu hoặc mẫu biển thích nếu có.</li>
                <li>Tư vấn vật liệu phù hợp ngành, độ sáng, độ bền và ngân sách.</li>
                <li>Báo giá sơ bộ, khảo sát khi biển lớn hoặc vị trí thi công phức tạp.</li>
              </ol>
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
              <h2>Báo giá ${escapeHtml(niche.name)}</h2>
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ và mẫu biển mong muốn. Có ảnh rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../bien-quang-cao-theo-nganh-ha-noi/">Biển theo ngành</a>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển thực tế</a>
              <a href="../lam-bien-quang-cao-ha-noi/">Làm biển quảng cáo Hà Nội</a>
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
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. ${business.address}. <a href="tel:${business.phoneHref}">${business.phone}</a></p>
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

function renderHub() {
  const slug = "bien-quang-cao-theo-nganh-ha-noi";
  const pageUrl = `${baseUrl}/${slug}/`;
  const cards = [...niches, ...extraIndustryLinks]
    .map((item) => `
                <a href="../${item.slug}/">
                  <strong>${escapeHtml(item.title)}</strong>
                  <span>${escapeHtml(item.intent)}</span>
                </a>`)
    .join("\n");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Biển quảng cáo theo ngành hàng tại Hà Nội",
    description: "Danh sách dịch vụ làm biển quảng cáo theo ngành: shop quần áo, cafe, quán ăn, trà sữa, nail, salon, nhà thuốc, phòng khám nha khoa, siêu thị mini, mẹ và bé, gara, trung tâm dạy học, văn phòng công ty.",
    url: pageUrl
  };

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Biển quảng cáo theo ngành hàng tại Hà Nội</title>
    <meta name="description" content="Làm biển quảng cáo theo ngành tại Hà Nội: shop quần áo, cafe, quán ăn, trà sữa, nail spa, salon tóc, nhà thuốc, phòng khám nha khoa, siêu thị mini, mẹ và bé.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/hero-bien-quang-cao-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Biển quảng cáo theo ngành hàng tại Hà Nội">
    <meta property="og:description" content="Chọn ngành hàng để xem tư vấn vật liệu, mẫu biển và cách báo giá phù hợp.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Biển quảng cáo theo ngành hàng tại Hà Nội">
    <meta name="twitter:description" content="Shop quần áo, cafe, quán ăn, trà sữa, nail spa, salon tóc, nhà thuốc, phòng khám nha khoa, siêu thị mini, mẹ và bé.">
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body>
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Theo ngành hàng</span>
            </nav>
            <p class="section-kicker">SEO theo ngách ngành hàng</p>
            <h1>Biển quảng cáo theo ngành hàng tại Hà Nội</h1>
            <p>Mỗi ngành có cách làm biển khác nhau. Chọn đúng ngành giúp tư vấn vật liệu, ánh sáng, kích thước chữ và ngân sách sát hơn, đồng thời giúp khách tìm kiếm đúng nhu cầu hơn.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Biển quảng cáo theo ngành hàng tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>
      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block">
            <h2>Chọn ngành hàng</h2>
            <div class="sitemap-grid local-grid">
${cards}
            </div>
          </section>
          <section class="content-block price-note">
            <h2>Không làm một kiểu biển cho mọi ngành</h2>
            <p>Biển cho shop quần áo khác biển quán ăn, cafe khác nhà thuốc, phòng khám nha khoa khác siêu thị mini và cửa hàng mẹ bé. Trang theo ngành giúp khách tìm đúng ngách và tăng khả năng liên hệ khi nhu cầu rõ.</p>
          </section>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. ${business.address}. <a href="tel:${business.phoneHref}">${business.phone}</a></p>
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

for (const niche of niches) {
  fs.mkdirSync(path.join(root, niche.slug), { recursive: true });
  fs.writeFileSync(path.join(root, niche.slug, "index.html"), renderNichePage(niche), "utf8");
}

const hubSlug = "bien-quang-cao-theo-nganh-ha-noi";
fs.mkdirSync(path.join(root, hubSlug), { recursive: true });
fs.writeFileSync(path.join(root, hubSlug, "index.html"), renderHub(), "utf8");

console.log(`Generated ${niches.length} industry niche pages and industry hub`);
