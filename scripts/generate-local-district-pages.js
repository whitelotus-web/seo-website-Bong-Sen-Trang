const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lam-bien-quang-cao-bong-sen-trang.netlify.app";

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const districts = [
  {
    name: "Ba Đình",
    slug: "lam-bien-quang-cao-ba-dinh",
    streets: ["Kim Mã", "Đội Cấn", "Liễu Giai", "Ngọc Khánh", "Giảng Võ", "Hoàng Hoa Thám", "Nguyễn Thái Học", "Phan Đình Phùng", "Quán Thánh", "Vạn Phúc"],
    image: "du-an-logo-van-phong-fxce.jpg",
    angle: "văn phòng, showroom, cửa hàng dịch vụ và mặt phố trung tâm"
  },
  {
    name: "Cầu Giấy",
    slug: "lam-bien-quang-cao-cau-giay",
    streets: ["Cầu Giấy", "Xuân Thủy", "Trần Thái Tông", "Duy Tân", "Trung Kính", "Nguyễn Phong Sắc", "Hoàng Quốc Việt", "Quan Hoa", "Tô Hiệu", "Yên Hòa"],
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    angle: "shop, showroom, spa, văn phòng, trung tâm đào tạo và cửa hàng công nghệ"
  },
  {
    name: "Hoàn Kiếm",
    slug: "lam-bien-quang-cao-hoan-kiem",
    streets: ["Hàng Bài", "Hai Bà Trưng", "Lý Thường Kiệt", "Tràng Tiền", "Bà Triệu", "Phan Chu Trinh", "Lò Sũ", "Hàng Gai", "Hàng Bông", "Đinh Tiên Hoàng"],
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    angle: "nhà hàng, cafe, shop và biển nhận diện mặt phố đông khách"
  },
  {
    name: "Hai Bà Trưng",
    slug: "lam-bien-quang-cao-hai-ba-trung",
    streets: ["Bạch Mai", "Minh Khai", "Đại Cồ Việt", "Trần Đại Nghĩa", "Phố Huế", "Lò Đúc", "Kim Ngưu", "Thanh Nhàn", "Mai Hắc Đế", "Võ Thị Sáu"],
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    angle: "cửa hàng mặt phố, quán ăn, salon, nhà thuốc và biển khai trương"
  },
  {
    name: "Thanh Xuân",
    slug: "lam-bien-quang-cao-thanh-xuan",
    streets: ["Nguyễn Trãi", "Khuất Duy Tiến", "Lê Văn Lương", "Vũ Trọng Phụng", "Nguyễn Tuân", "Quan Nhân", "Khương Đình", "Nguyễn Xiển", "Trường Chinh", "Hạ Đình"],
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    angle: "showroom, đại lý, cửa hàng bán lẻ và biển mặt tiền lớn"
  },
  {
    name: "Hoàng Mai",
    slug: "lam-bien-quang-cao-hoang-mai",
    streets: ["Linh Đàm", "Bán đảo Linh Đàm", "Giải Phóng", "Tân Mai", "Kim Đồng", "Lĩnh Nam", "Nguyễn Hữu Thọ", "Định Công", "Trương Định", "Tam Trinh", "Hoàng Mai", "Vĩnh Hưng"],
    image: "bien-tam-lon-ha-noi.jpg",
    angle: "biển cửa hàng, biển bạt, hộp đèn và sửa biển cũ"
  },
  {
    name: "Hà Đông",
    slug: "lam-bien-quang-cao-ha-dong",
    streets: ["Quang Trung", "Tố Hữu", "Trần Phú", "Nguyễn Trãi", "Vạn Phúc", "Mỗ Lao", "Lê Trọng Tấn", "Yên Nghĩa", "Phùng Hưng", "Ngô Thì Nhậm"],
    image: "du-an-bien-kong-billiards.jpg",
    angle: "shop, nhà hàng, showroom, spa và biển hộp đèn nhìn tốt buổi tối"
  },
  {
    name: "Tây Hồ",
    slug: "lam-bien-quang-cao-tay-ho",
    streets: ["Xuân Diệu", "Âu Cơ", "Lạc Long Quân", "Thụy Khuê", "Võ Chí Công", "Nghi Tàm", "Đặng Thai Mai", "Tô Ngọc Vân", "Yên Phụ", "Trích Sài"],
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    angle: "nhà hàng, cafe, dịch vụ cao cấp, showroom và biển thẩm mỹ"
  },
  {
    name: "Long Biên",
    slug: "lam-bien-quang-cao-long-bien",
    streets: ["Nguyễn Văn Cừ", "Ngô Gia Tự", "Cổ Linh", "Sài Đồng", "Ái Mộ", "Nguyễn Sơn", "Đức Giang", "Long Biên", "Thạch Bàn", "Bồ Đề"],
    image: "du-an-bien-the-fox-fitness.jpg",
    angle: "showroom, đại lý, phòng tập, nhà hàng và biển mặt tiền rộng"
  },
  {
    name: "Nam Từ Liêm",
    slug: "lam-bien-quang-cao-nam-tu-liem",
    streets: ["Mỹ Đình", "Lê Đức Thọ", "Hàm Nghi", "Mễ Trì", "Đỗ Đức Dục", "Nguyễn Hoàng", "Tố Hữu", "Đại lộ Thăng Long", "Phạm Hùng", "Trần Hữu Dực"],
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    angle: "văn phòng, showroom, cửa hàng dịch vụ, backdrop và biển công ty"
  },
  {
    name: "Bắc Từ Liêm",
    slug: "lam-bien-quang-cao-bac-tu-liem",
    streets: ["Phạm Văn Đồng", "Cổ Nhuế", "Xuân Đỉnh", "Đức Thắng", "Hoàng Quốc Việt", "Kiều Mai", "Văn Tiến Dũng", "Tây Tựu", "Thụy Phương", "Liên Mạc"],
    image: "du-an-oppo-samsung.jpg",
    angle: "cửa hàng, đại lý, showroom và biển khai trương chi phí hợp lý"
  },
  {
    name: "Gia Lâm",
    slug: "lam-bien-quang-cao-gia-lam",
    streets: ["Trâu Quỳ", "Ngô Xuân Quảng", "Đặng Phúc Thông", "Dương Xá", "Kiêu Kỵ", "Yên Viên", "Ninh Hiệp", "Đa Tốn", "Đông Dư", "Cổ Bi"],
    image: "du-an-bien-dung-56-bil.jpg",
    angle: "biển cửa hàng, biển công ty, biển hộp đèn và biển mặt tiền mới"
  }
];

const serviceCards = [
  ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/", "Mặt tiền bền, sạch, hợp cửa hàng, showroom, văn phòng."],
  ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/", "Dễ nhìn buổi tối, phù hợp mặt phố và khu đông người qua lại."],
  ["Biển bạt Hiflex", "../bien-bat-hiflex-ha-noi/", "Tối ưu chi phí cho khai trương, thay nội dung hoặc biển diện tích lớn."],
  ["Sửa chữa biển cũ", "../sua-chua-bien-quang-cao-ha-noi/", "Thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn, gia cố khung."],
  ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/", "Xem khung giá trước khi gửi ảnh mặt tiền để báo giá sát."],
  ["Mẫu biển thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/", "Xem ảnh công trình theo ngành để chọn kiểu biển phù hợp."]
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function serviceHtml() {
  return serviceCards
    .map(([label, href, text]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`)
    .join("\n");
}

function faqFor(district) {
  return [
    [`Có nhận làm biển quảng cáo gần đây tại ${district.name} không?`, `Có. Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa chữa biển quảng cáo tại ${district.name}, Hà Nội. Khách gửi ảnh mặt tiền qua Zalo để kiểm tra phương án trước.`],
    [`Khu vực nào tại ${district.name} thường cần làm biển?`, `Các tuyến như ${district.streets.slice(0, 6).join(", ")} thường có nhu cầu biển cửa hàng, biển hộp đèn, alu chữ nổi, biển bạt Hiflex và sửa biển cũ.`],
    [`Muốn báo giá biển tại ${district.name} cần gửi gì?`, "Cần gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ lắp đặt, mẫu biển mong muốn và thời gian cần hoàn thiện."],
    [`Có sửa biển cũ tại ${district.name} không?`, "Có. Nhận thay mặt bạt, thay LED, thay nguồn, sửa hộp đèn, thay chữ nổi, gia cố khung và tư vấn khi nào nên làm mới."]
  ];
}

function renderDistrictPage(district) {
  const pageUrl = `${baseUrl}/${district.slug}/`;
  const faqs = faqFor(district);
  const streetsHtml = district.streets.map((street) => `<li>${escapeHtml(street)}</li>`).join("\n                ");
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
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${district.name}, Hà Nội`
        }
      },
      {
        "@type": "Service",
        name: `Làm biển quảng cáo ${district.name}`,
        description: `Sản xuất, thi công, lắp đặt và sửa chữa biển quảng cáo tại ${district.name}, Hà Nội.`,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${district.name}, Hà Nội`,
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

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Làm biển quảng cáo ${escapeHtml(district.name)} | Gần đây tại Hà Nội</title>
    <meta name="description" content="Làm biển quảng cáo ${escapeHtml(district.name)} gần đây: alu chữ nổi, hộp đèn LED, Hiflex, sửa biển cũ. Gửi ảnh qua Zalo 0989 521 881 để báo giá.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/${district.image}" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo ${escapeHtml(district.name)}">
    <meta property="og:description" content="Thi công bảng hiệu, biển alu, hộp đèn LED, Hiflex và sửa biển cũ tại ${escapeHtml(district.name)}, Hà Nội.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${district.image}">
    <meta property="og:image:alt" content="Làm biển quảng cáo ${escapeHtml(district.name)} Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo ${escapeHtml(district.name)}">
    <meta name="twitter:description" content="Gửi ảnh mặt tiền qua Zalo để báo giá biển quảng cáo tại ${escapeHtml(district.name)}.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/${district.image}">
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
          <a href="../lam-bien-quang-cao-gan-day-ha-noi/">Gần đây</a>
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
              <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
              <span>/</span>
              <span>${escapeHtml(district.name)}</span>
            </nav>
            <p class="section-kicker">Làm biển quảng cáo gần đây tại ${escapeHtml(district.name)}</p>
            <h1>Làm biển quảng cáo tại ${escapeHtml(district.name)}</h1>
            <p>Bông Sen Trắng nhận làm biển quảng cáo, bảng hiệu cửa hàng, hộp đèn LED, alu chữ nổi, Hiflex và sửa biển cũ tại ${escapeHtml(district.name)}, Hà Nội. Phù hợp ${escapeHtml(district.angle)}. Gửi ảnh mặt tiền qua Zalo để được tư vấn phương án và báo giá nhanh.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${district.image}" alt="Làm biển quảng cáo tại ${escapeHtml(district.name)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Tư vấn theo mặt bằng thực tế tại ${escapeHtml(district.name)}</h2>
              <p>Khi khách tìm “làm biển quảng cáo gần đây”, điều quan trọng là đơn vị thi công hiểu mặt bằng Hà Nội: tuyến phố đông hay trong ngõ, biển tầng 1 hay tầng cao, có cần sáng buổi tối không, có khung cũ hay phải làm mới toàn bộ. Bông Sen Trắng tư vấn theo ảnh mặt tiền trước để tránh làm sai vật liệu hoặc vượt ngân sách.</p>
            </section>

            <section class="content-block">
              <h2>Tuyến đường tại ${escapeHtml(district.name)} thường có nhu cầu làm biển</h2>
              <ul class="area-list material-list" aria-label="Tuyến đường ${escapeHtml(district.name)}">
                ${streetsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Dịch vụ biển quảng cáo phù hợp tại ${escapeHtml(district.name)}</h2>
              <div class="price-link-grid compact">
${serviceHtml()}
              </div>
            </section>

            <section class="content-block">
              <h2>Quy trình báo giá nhanh</h2>
              <ol class="step-list">
                <li>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo.</li>
                <li>Xác định nhu cầu: làm mới, sửa biển cũ, thay LED, thay mặt bạt, làm hộp đèn hay alu chữ nổi.</li>
                <li>Tư vấn vật liệu phù hợp với mặt bằng, thời gian sử dụng và ngân sách.</li>
                <li>Báo giá sơ bộ, khảo sát khi biển lớn, biển cao hoặc kết cấu phức tạp.</li>
                <li>Sản xuất, lắp đặt, kiểm tra hoàn thiện và hỗ trợ bảo hành.</li>
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
              <h2>Báo giá tại ${escapeHtml(district.name)}</h2>
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ và mẫu biển mong muốn. Có ảnh rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../lam-bien-quang-cao-ha-noi/">Làm biển quảng cáo Hà Nội</a>
              <a href="../lam-bien-quang-cao-gan-day-ha-noi/">Làm biển quảng cáo gần đây</a>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo</a>
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

function renderNearbyPage() {
  const slug = "lam-bien-quang-cao-gan-day-ha-noi";
  const pageUrl = `${baseUrl}/${slug}/`;
  const faqs = [
    ["Tìm làm biển quảng cáo gần đây thì Bông Sen Trắng phục vụ khu nào?", "Bông Sen Trắng ở Đống Đa và nhận tư vấn, thi công, sửa chữa biển quảng cáo tại nhiều quận Hà Nội. Gửi vị trí lắp đặt qua Zalo để kiểm tra khả năng xử lý nhanh."],
    ["Có cần đến tận nơi để báo giá không?", "Với hạng mục nhỏ có thể báo giá sơ bộ qua ảnh. Với biển lớn, biển cao hoặc cần kiểm tra khung/điện, nên khảo sát trước khi chốt giá."],
    ["Làm biển gần đây có nhanh hơn không?", "Nếu vị trí thuận tiện, vật tư sẵn và thiết kế chốt nhanh, thời gian xử lý có thể nhanh hơn. Hạng mục gấp cần gửi ảnh và yêu cầu cụ thể trước."],
    ["Có sửa biển quảng cáo gần đây không?", "Có. Nhận thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn, thay chữ nổi và gia cố khung biển cũ."]
  ];
  const districtCards = districts
    .map((district) => `
                <a href="../${district.slug}/">
                  <strong>${escapeHtml(district.name)}</strong>
                  <span>${escapeHtml(district.streets.slice(0, 5).join(", "))}</span>
                </a>`)
    .join("\n");
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
        name: "Làm biển quảng cáo gần đây tại Hà Nội",
        description: "Tư vấn, thi công, sửa chữa biển quảng cáo gần đây tại Hà Nội theo ảnh mặt tiền và vị trí lắp đặt.",
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
    <title>Làm biển quảng cáo gần đây tại Hà Nội | Gọi/Zalo 0989 521 881</title>
    <meta name="description" content="Tìm làm biển quảng cáo gần đây tại Hà Nội? Gửi ảnh mặt tiền qua Zalo 0989 521 881 để báo giá biển alu, hộp đèn LED, Hiflex, sửa biển cũ.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/hero-bien-quang-cao-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo gần đây tại Hà Nội">
    <meta property="og:description" content="Gửi ảnh mặt tiền qua Zalo để nhận tư vấn làm biển quảng cáo gần đây tại Hà Nội.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta property="og:image:alt" content="Làm biển quảng cáo gần đây tại Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo gần đây tại Hà Nội">
    <meta name="twitter:description" content="Gửi ảnh mặt tiền qua Zalo để báo giá biển quảng cáo gần đây.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
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
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
          <a href="../#dich-vu">Dịch vụ</a>
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
              <span>Gần đây</span>
            </nav>
            <p class="section-kicker">Tìm đơn vị làm biển quảng cáo gần đây</p>
            <h1>Làm biển quảng cáo gần đây tại Hà Nội</h1>
            <p>Nếu anh/chị đang tìm “làm biển quảng cáo gần đây”, hãy gửi ảnh mặt tiền, địa chỉ lắp đặt và kích thước dự kiến qua Zalo. Bông Sen Trắng ở Đống Đa, nhận tư vấn thi công biển alu chữ nổi, hộp đèn LED, Hiflex, chữ nổi, sửa biển cũ và thay LED tại nhiều quận Hà Nội.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Làm biển quảng cáo gần đây tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block price-note">
            <h2>Cách báo giá nhanh khi tìm gần đây</h2>
            <p>Ảnh mặt tiền và vị trí lắp đặt quan trọng hơn việc hỏi giá chung. Một biển cùng kích thước nhưng khác độ cao, khung cũ, hệ điện LED, hướng nắng mưa và vật liệu sẽ có chi phí khác nhau.</p>
          </section>
          <section class="content-block">
            <h2>Chọn khu vực gần bạn</h2>
            <div class="sitemap-grid local-grid">
${districtCards}
            </div>
          </section>
          <section class="content-block">
            <h2>Dịch vụ thường cần xử lý nhanh</h2>
            <div class="price-link-grid compact">
${serviceHtml()}
            </div>
          </section>
          <section class="content-block">
            <h2>Câu hỏi thường gặp</h2>
            <div class="faq-list compact">
${faqHtml}
            </div>
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

for (const district of districts) {
  fs.mkdirSync(path.join(root, district.slug), { recursive: true });
  fs.writeFileSync(path.join(root, district.slug, "index.html"), renderDistrictPage(district), "utf8");
}

const nearbySlug = "lam-bien-quang-cao-gan-day-ha-noi";
fs.mkdirSync(path.join(root, nearbySlug), { recursive: true });
fs.writeFileSync(path.join(root, nearbySlug, "index.html"), renderNearbyPage(), "utf8");

console.log(`Generated ${districts.length} local district pages and nearby page`);
