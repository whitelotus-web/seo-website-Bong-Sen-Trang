const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.pages.dev";
const hubSlug = "bien-quang-cao-theo-nganh-va-quan-ha-noi";

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const pages = [
  {
    slug: "bien-quan-cafe-dong-da-ha-noi",
    title: "Biển quán cafe Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "quán cafe",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-quan-cafe-ha-noi",
    image: "du-an-bien-tien-coffee.jpg",
    streets: ["Ô Chợ Dừa", "Thái Hà", "Xã Đàn", "Nguyễn Lương Bằng", "Tây Sơn", "Phạm Ngọc Thạch"],
    materials: ["Chữ nổi hắt sáng", "Hộp đèn LED", "Biển vẫy cafe", "Neon sign trong quán"],
    angle: "Cafe ở Đống Đa thường nằm trong tuyến phố đông cửa hàng, vì vậy biển cần gọn, đủ sáng buổi tối và có điểm nhận diện riêng."
  },
  {
    slug: "bien-quan-an-cau-giay-ha-noi",
    title: "Biển quán ăn Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "quán ăn",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-quan-an-uong-ha-noi",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    streets: ["Duy Tân", "Trần Thái Tông", "Trung Kính", "Xuân Thủy", "Nguyễn Phong Sắc", "Yên Hòa"],
    materials: ["Hộp đèn Hiflex", "Alu chữ nổi", "Biển menu ngoài cửa", "Biển vẫy hai mặt"],
    angle: "Quán ăn tại Cầu Giấy cần biển đọc nhanh tên quán và món chính, nhất là khu văn phòng có khách đi ăn trưa và tối."
  },
  {
    slug: "bien-spa-dong-da-ha-noi",
    title: "Biển spa Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "spa, thẩm mỹ",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-quang-cao-spa-salon-ha-noi",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    streets: ["Thái Hà", "Chùa Bộc", "Xã Đàn", "Phạm Ngọc Thạch", "Láng Hạ", "Ô Chợ Dừa"],
    materials: ["Alu chữ nổi", "Chữ nổi mica LED", "Hộp đèn mica", "Backdrop logo lễ tân"],
    angle: "Spa ở Đống Đa cần biển sạch, sáng và tin cậy, tránh quá nhiều chữ làm mặt tiền bị rối."
  },
  {
    slug: "bien-nha-thuoc-thanh-xuan-ha-noi",
    title: "Biển nhà thuốc Thanh Xuân Hà Nội",
    district: "Thanh Xuân",
    industry: "nhà thuốc",
    parentArea: "lam-bien-quang-cao-thanh-xuan",
    parentIndustry: "bien-nha-thuoc-ha-noi",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    streets: ["Nguyễn Trãi", "Khuất Duy Tiến", "Nguyễn Tuân", "Vũ Trọng Phụng", "Trường Chinh", "Lê Văn Lương"],
    materials: ["Hộp đèn LED", "Alu chữ nổi", "Biển vẫy nhà thuốc", "Decal kính"],
    angle: "Nhà thuốc cần biển sáng đều, chữ rõ và thông tin nhận diện ngành y tế dễ nhìn từ xa."
  },
  {
    slug: "bien-phong-kham-cau-giay-ha-noi",
    title: "Biển phòng khám Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "phòng khám",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-phong-kham-nha-khoa-ha-noi",
    image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
    streets: ["Trần Thái Tông", "Duy Tân", "Hoàng Quốc Việt", "Xuân Thủy", "Trung Kính", "Quan Hoa"],
    materials: ["Chữ nổi mica", "Hộp đèn LED", "Biển chỉ dẫn tầng", "Backdrop logo tiếp đón"],
    angle: "Phòng khám tại Cầu Giấy cần biển chuyên nghiệp, rõ chuyên khoa và đủ sáng để khách tìm địa chỉ nhanh."
  },
  {
    slug: "bien-shop-quan-ao-cau-giay-ha-noi",
    title: "Biển shop quần áo Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "shop quần áo",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-shop-quan-ao-ha-noi",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    streets: ["Cầu Giấy", "Xuân Thủy", "Trần Thái Tông", "Duy Tân", "Trung Kính", "Yên Hòa"],
    materials: ["Alu chữ nổi", "Chữ nổi mica", "Biển vẫy shop", "Backdrop logo trong cửa hàng"],
    angle: "Shop quần áo cần tên dễ nhớ, màu nhận diện rõ và mặt tiền lên ảnh tốt khi khách check-in."
  },
  {
    slug: "bien-quan-an-ha-dong-ha-noi",
    title: "Biển quán ăn Hà Đông Hà Nội",
    district: "Hà Đông",
    industry: "quán ăn",
    parentArea: "lam-bien-quang-cao-ha-dong",
    parentIndustry: "bien-quan-an-uong-ha-noi",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    streets: ["Quang Trung", "Nguyễn Trãi", "Văn Quán", "Mỗ Lao", "Tố Hữu", "Vạn Phúc"],
    materials: ["Biển bạt Hiflex", "Hộp đèn LED", "Alu chữ nổi", "Biển menu"],
    angle: "Quán ăn ở Hà Đông thường cần phương án chi phí hợp lý, dễ đọc món chính và đủ sáng vào giờ bán tối."
  },
  {
    slug: "bien-cafe-ha-dong-ha-noi",
    title: "Biển cafe Hà Đông Hà Nội",
    district: "Hà Đông",
    industry: "cafe, đồ uống",
    parentArea: "lam-bien-quang-cao-ha-dong",
    parentIndustry: "bien-quan-cafe-ha-noi",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    streets: ["Văn Quán", "Mỗ Lao", "Quang Trung", "Tố Hữu", "Trần Phú", "Nguyễn Trãi"],
    materials: ["Chữ nổi hắt sáng", "Hộp đèn mica", "Biển vẫy tròn", "Neon sign decor"],
    angle: "Cafe tại Hà Đông nên có biển sáng, có điểm nhớ và không quá rối vì nhiều cửa hàng nằm cạnh nhau trong khu dân cư."
  },
  {
    slug: "bien-spa-ha-dong-ha-noi",
    title: "Biển spa Hà Đông Hà Nội",
    district: "Hà Đông",
    industry: "spa, salon",
    parentArea: "lam-bien-quang-cao-ha-dong",
    parentIndustry: "bien-quang-cao-spa-salon-ha-noi",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    streets: ["Tố Hữu", "Văn Quán", "Mỗ Lao", "Quang Trung", "Vạn Phúc", "La Khê"],
    materials: ["Alu chữ nổi", "Chữ nổi LED", "Hộp đèn mica", "Backdrop logo"],
    angle: "Spa ở Hà Đông cần biển tạo cảm giác sạch, sáng và đáng tin, phù hợp mặt tiền khu đô thị và chung cư."
  },
  {
    slug: "bien-nha-hang-ba-dinh-ha-noi",
    title: "Biển nhà hàng Ba Đình Hà Nội",
    district: "Ba Đình",
    industry: "nhà hàng",
    parentArea: "lam-bien-quang-cao-ba-dinh",
    parentIndustry: "bien-quang-cao-nha-hang-ha-noi",
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    streets: ["Kim Mã", "Đội Cấn", "Liễu Giai", "Giảng Võ", "Ngọc Khánh", "Vạn Phúc"],
    materials: ["Chữ nổi inox", "Chữ hắt sáng", "Hộp đèn cao cấp", "Biển vẫy nhà hàng"],
    angle: "Nhà hàng ở Ba Đình nên ưu tiên biển có thẩm mỹ, chất liệu bền và ánh sáng vừa đủ sang."
  },
  {
    slug: "bien-shop-quan-ao-ba-dinh-ha-noi",
    title: "Biển shop quần áo Ba Đình Hà Nội",
    district: "Ba Đình",
    industry: "shop quần áo",
    parentArea: "lam-bien-quang-cao-ba-dinh",
    parentIndustry: "bien-shop-quan-ao-ha-noi",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    streets: ["Kim Mã", "Đội Cấn", "Giảng Võ", "Liễu Giai", "Ngọc Khánh", "Hoàng Hoa Thám"],
    materials: ["Alu chữ nổi", "Chữ nổi mica", "Biển vẫy", "Logo trong shop"],
    angle: "Shop thời trang tại Ba Đình cần biển gọn, rõ thương hiệu và hợp phong cách mặt tiền."
  },
  {
    slug: "bien-salon-toc-dong-da-ha-noi",
    title: "Biển salon tóc Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "salon tóc, barber",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-salon-toc-barber-ha-noi",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    streets: ["Chùa Bộc", "Thái Hà", "Tây Sơn", "Xã Đàn", "Láng Hạ", "Ô Chợ Dừa"],
    materials: ["Chữ nổi mica", "Hộp đèn LED", "Biển vẫy barber", "Neon sign trang trí"],
    angle: "Salon tóc cần biển có cá tính, dễ nhận ra buổi tối và có điểm nhìn từ hai chiều đường."
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

function pageFaqs(page) {
  return [
    [
      `Muốn báo giá ${page.title.toLowerCase()} cần gửi gì?`,
      `Gửi ảnh mặt tiền, kích thước ngang x cao, địa chỉ tại ${page.district}, thời gian cần hoàn thiện và mẫu biển thích nếu có.`
    ],
    [
      `${page.title} nên chọn loại biển nào?`,
      `Nên chọn theo mặt tiền và ngân sách. Các phương án hay dùng gồm ${page.materials.slice(0, 3).join(", ")}.`
    ],
    [
      `Có nhận khảo sát tại ${page.district} không?`,
      "Có. Với biển lớn, vị trí cao, cần đấu điện hoặc tận dụng khung cũ, nên khảo sát để báo giá sát hơn."
    ],
    [
      `Có sửa biển cũ cho ${page.industry} không?`,
      "Có. Có thể thay mặt biển, thay LED, thay chữ nổi, sửa hộp đèn hoặc gia cố khung nếu còn dùng được."
    ]
  ];
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const description = `${page.title}: tư vấn alu chữ nổi, hộp đèn LED, biển vẫy, sửa biển cũ. Gửi ảnh qua Zalo 0989 521 881 để báo giá nhanh.`;
  const faqs = pageFaqs(page);
  const faqHtml = faqs
    .map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`)
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
        areaServed: `${page.district}, Hà Nội`
      },
      {
        "@type": "Service",
        name: page.title,
        description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${page.district}, Hà Nội`,
        serviceType: `Làm biển quảng cáo cho ${page.industry}`
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
          <a href="../${hubSlug}/">Ngành + quận</a>
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
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
              <a href="../${hubSlug}/">Ngành + quận</a>
              <span>/</span>
              <span>${escapeHtml(page.district)}</span>
            </nav>
            <p class="section-kicker">${escapeHtml(page.industry)} tại ${escapeHtml(page.district)}</p>
            <h1>${escapeHtml(page.title)}</h1>
            <p>${escapeHtml(page.angle)} Bông Sen Trắng nhận tư vấn, sản xuất, thi công và sửa biển cũ theo mặt tiền thực tế.</p>
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
              <h2>Phương án biển nên cân nhắc</h2>
              <ul class="area-list">
                ${listItems(page.materials)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Báo giá theo mặt bằng thực tế</h2>
              <p>Chi phí phụ thuộc kích thước, vật liệu, độ cao lắp đặt, hệ khung, đèn LED và việc có tận dụng được biển cũ hay không. Gửi ảnh mặt tiền qua Zalo sẽ giúp báo giá sát hơn so với chỉ mô tả bằng lời.</p>
            </section>
            <section class="content-block">
              <h2>Khu vực nhận tư vấn tại ${escapeHtml(page.district)}</h2>
              <ul class="area-list material-list">
                ${listItems(page.streets)}
              </ul>
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
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ và mẫu biển mong muốn qua Zalo.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../${page.parentArea}/">Làm biển quảng cáo ${escapeHtml(page.district)}</a>
              <a href="../${page.parentIndustry}/">Biển ${escapeHtml(page.industry)} Hà Nội</a>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Hình ảnh biển thực tế</a>
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
  const pageUrl = `${baseUrl}/${hubSlug}/`;
  const description = "Tổng hợp các trang biển quảng cáo theo ngành và quận tại Hà Nội: cafe, quán ăn, spa, nhà thuốc, phòng khám, shop quần áo.";
  const cards = pages
    .map((page) => `
                <a href="../${page.slug}/">
                  <strong>${escapeHtml(page.title)}</strong>
                  <span>${escapeHtml(page.industry)} quanh ${escapeHtml(page.streets.slice(0, 4).join(", "))}</span>
                </a>`)
    .join("\n");

  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Biển quảng cáo theo ngành và quận tại Hà Nội",
    description,
    url: pageUrl
  };

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Biển quảng cáo theo ngành và quận Hà Nội</title>
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
    <meta property="og:title" content="Biển quảng cáo theo ngành và quận Hà Nội">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Biển quảng cáo theo ngành và quận Hà Nội">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <script type="application/ld+json">
${JSON.stringify(itemListJson, null, 2)}
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
              <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
              <span>/</span>
              <span>Ngành + quận</span>
            </nav>
            <p class="section-kicker">Ngách nhỏ dễ đúng nhu cầu hơn</p>
            <h1>Biển quảng cáo theo ngành và quận tại Hà Nội</h1>
            <p>Khách thường tìm rất cụ thể như biển quán cafe Đống Đa, biển spa Cầu Giấy, biển nhà thuốc Thanh Xuân. Cụm trang này gom các nhu cầu theo ngành và khu vực để tư vấn sát hơn.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Biển quảng cáo theo ngành và quận tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>
      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block">
            <h2>Chọn đúng ngành và khu vực</h2>
            <div class="sitemap-grid local-grid">
${cards}
            </div>
          </section>
          <section class="content-block price-note">
            <h2>Gửi ảnh mặt tiền để báo giá nhanh</h2>
            <p>Mỗi ngành và mỗi tuyến phố có yêu cầu khác nhau về ánh sáng, vật liệu, kích thước chữ và vị trí treo. Gửi ảnh mặt tiền, kích thước và địa chỉ qua Zalo để được tư vấn phương án sát thực tế.</p>
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

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

fs.mkdirSync(path.join(root, hubSlug), { recursive: true });
fs.writeFileSync(path.join(root, hubSlug, "index.html"), renderHub(), "utf8");

console.log(`Generated ${pages.length} district-industry pages and hub`);
