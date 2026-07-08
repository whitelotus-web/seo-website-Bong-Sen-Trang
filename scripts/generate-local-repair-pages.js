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
    district: "Đống Đa",
    slug: "sua-bien-quang-cao-dong-da",
    areaSlug: "lam-bien-quang-cao-dong-da",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    streets: ["Ô Chợ Dừa", "Xã Đàn", "Thái Hà", "Chùa Bộc", "Tây Sơn", "Tôn Đức Thắng"],
    note: "gần địa chỉ 92E Ô Chợ Dừa, thuận tiện kiểm tra biển hỏng và khảo sát nhanh"
  },
  {
    district: "Cầu Giấy",
    slug: "sua-bien-quang-cao-cau-giay",
    areaSlug: "lam-bien-quang-cao-cau-giay",
    image: "du-an-bien-tien-coffee.jpg",
    streets: ["Duy Tân", "Trần Thái Tông", "Trung Kính", "Xuân Thủy", "Cầu Giấy", "Yên Hòa"],
    note: "phù hợp văn phòng, showroom, cafe, nhà hàng và cửa hàng dịch vụ cần sửa biển nhanh"
  },
  {
    district: "Thanh Xuân",
    slug: "sua-bien-quang-cao-thanh-xuan",
    areaSlug: "lam-bien-quang-cao-thanh-xuan",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    streets: ["Nguyễn Trãi", "Lê Văn Lương", "Nguyễn Tuân", "Khuất Duy Tiến", "Trường Chinh", "Vũ Trọng Phụng"],
    note: "nhiều mặt tiền cửa hàng và dịch vụ cần thay LED, thay mặt bạt, sửa chữ nổi"
  },
  {
    district: "Hà Đông",
    slug: "sua-bien-quang-cao-ha-dong",
    areaSlug: "lam-bien-quang-cao-ha-dong",
    image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
    streets: ["Văn Quán", "Quang Trung", "Trần Phú", "Mỗ Lao", "Tố Hữu", "Vạn Phúc"],
    note: "phù hợp cửa hàng bán lẻ, nhà thuốc, quán ăn, cafe và siêu thị mini cần bảo trì biển"
  },
  {
    district: "Hoàng Mai",
    slug: "sua-bien-quang-cao-hoang-mai",
    areaSlug: "lam-bien-quang-cao-hoang-mai",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    streets: ["Linh Đàm", "Giải Phóng", "Tân Mai", "Kim Đồng", "Tam Trinh", "Định Công"],
    note: "thường gặp nhu cầu thay mặt bạt, sửa hộp đèn, xử lý biển quán ăn và cửa hàng mặt phố"
  },
  {
    district: "Ba Đình",
    slug: "sua-bien-quang-cao-ba-dinh",
    areaSlug: "lam-bien-quang-cao-ba-dinh",
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    streets: ["Kim Mã", "Đội Cấn", "Liễu Giai", "Giảng Võ", "Ngọc Khánh", "Hoàng Hoa Thám"],
    note: "phù hợp cửa hàng, showroom, nhà hàng và văn phòng cần biển gọn, sáng, chỉn chu"
  },
  {
    district: "Hai Bà Trưng",
    slug: "sua-bien-quang-cao-hai-ba-trung",
    areaSlug: "lam-bien-quang-cao-hai-ba-trung",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    streets: ["Bạch Mai", "Phố Huế", "Minh Khai", "Đại Cồ Việt", "Lò Đúc", "Kim Ngưu"],
    note: "nhiều biển cửa hàng, quán ăn, nhà thuốc và dịch vụ cần sửa khi xuống màu hoặc mất sáng"
  },
  {
    district: "Tây Hồ",
    slug: "sua-bien-quang-cao-tay-ho",
    areaSlug: "lam-bien-quang-cao-tay-ho",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    streets: ["Xuân Diệu", "Tô Ngọc Vân", "Đặng Thai Mai", "Âu Cơ", "Nghi Tàm", "Yên Phụ"],
    note: "phù hợp cafe, nhà hàng, boutique, spa cần sửa biển vẫy, chữ nổi và ánh sáng"
  },
  {
    district: "Nam Từ Liêm",
    slug: "sua-bien-quang-cao-nam-tu-liem",
    areaSlug: "lam-bien-quang-cao-nam-tu-liem",
    image: "du-an-bien-kong-billiards.jpg",
    streets: ["Mỹ Đình", "Lê Đức Thọ", "Phạm Hùng", "Mễ Trì", "Hàm Nghi", "Đỗ Đức Dục"],
    note: "nhiều showroom, phòng tập, nhà hàng, văn phòng cần bảo trì biển mặt tiền và chữ nổi"
  },
  {
    district: "Long Biên",
    slug: "sua-bien-quang-cao-long-bien",
    areaSlug: "lam-bien-quang-cao-long-bien",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    streets: ["Nguyễn Văn Cừ", "Ngô Gia Tự", "Cổ Linh", "Sài Đồng", "Bồ Đề", "Đức Giang"],
    note: "phù hợp showroom, gara, cửa hàng xe, nhà hàng và biển mặt tiền lớn cần gia cố hoặc thay LED"
  }
];

const repairLinks = [
  ["Sửa biển cháy đèn", "sua-bien-quang-cao-chay-den-ha-noi"],
  ["Thay nguồn LED", "thay-nguon-led-bien-quang-cao-ha-noi"],
  ["Sửa chữ nổi mica/inox", "sua-chu-noi-mica-inox-ha-noi"],
  ["Gia cố khung biển", "gia-co-khung-bien-quang-cao-ha-noi"],
  ["Thay mặt bạt biển", "thay-mat-bat-bien-quang-cao-ha-noi"],
  ["Sửa biển vẫy cửa hàng", "sua-bien-vay-cua-hang-ha-noi"]
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

function serviceCards() {
  return repairLinks
    .map(([label, slug]) => `
                <a href="../${slug}/">
                  <strong>${escapeHtml(label)}</strong>
                  <span>Kiểm tra tình trạng biển, tư vấn sửa hoặc thay mới phần hỏng.</span>
                </a>`)
    .join("\n");
}

function renderFaq(page) {
  const faqs = [
    [`Có nhận sửa biển quảng cáo tại ${page.district} không?`, `Có. Bông Sen Trắng nhận kiểm tra, sửa chữa, thay LED, thay mặt biển và gia cố khung tại khu vực ${page.district}, Hà Nội.`],
    ["Gửi ảnh biển hỏng có báo giá được không?", "Có. Gửi ảnh toàn cảnh mặt biển, ảnh cận phần hỏng, kích thước ước lượng và địa chỉ lắp đặt qua Zalo."],
    ["Có sửa nhanh trong ngày không?", "Một số lỗi đơn giản như thay nguồn, thay LED, sửa biển vẫy nhỏ có thể xử lý nhanh tùy vị trí và vật tư sẵn."],
    ["Nên sửa hay thay mới biển?", "Nếu khung còn chắc và lỗi nằm ở LED, nguồn, mặt biển hoặc chữ nổi thì nên sửa. Nếu khung yếu hoặc biển quá cũ thì nên làm mới để an toàn hơn."]
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
  const title = `Sửa biển quảng cáo ${page.district} Hà Nội`;
  const description = `${title}: thay LED, thay nguồn, thay mặt bạt, sửa chữ nổi, gia cố khung. Gửi ảnh qua Zalo 0989 521 881 để báo giá.`;
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
        areaServed: `${page.district}, Hà Nội`
      },
      {
        "@type": "Service",
        name: title,
        description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${page.district}, Hà Nội`,
        serviceType: "Sửa chữa biển quảng cáo"
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
    <title>${escapeHtml(title)} | Bông Sen Trắng</title>
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
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
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
          <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa biển</a>
          <a href="../${page.areaSlug}/">${escapeHtml(page.district)}</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
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
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa</a>
              <span>/</span>
              <a href="../${page.areaSlug}/">${escapeHtml(page.district)}</a>
            </nav>
            <p class="section-kicker">Sửa biển quảng cáo tại ${escapeHtml(page.district)}</p>
            <h1>${escapeHtml(title)}</h1>
            <p>Bông Sen Trắng nhận sửa biển quảng cáo tại ${escapeHtml(page.district)}: thay LED, thay nguồn, thay mặt bạt, sửa chữ nổi, sửa biển vẫy và gia cố khung. Khu vực này ${escapeHtml(page.note)}.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(title)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>Hạng mục sửa biển thường gặp tại ${escapeHtml(page.district)}</h2>
              <div class="price-link-grid compact">
${serviceCards()}
              </div>
            </section>
            <section class="content-block">
              <h2>Tuyến/khu vực nhận kiểm tra</h2>
              <ul class="area-list material-list">
                ${listItems(page.streets)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Gửi ảnh biển hỏng trước khi hẹn</h2>
              <p>Chụp toàn cảnh mặt biển, phần đèn/chữ/mặt bạt bị hỏng và vị trí lắp đặt. Có ảnh rõ thì Bông Sen Trắng tư vấn nhanh hơn: nên sửa từng phần hay làm mới toàn bộ.</p>
            </section>
            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
${faqHtml}
              </div>
            </section>
          </article>
          <aside class="content-sidebar" aria-label="Liên hệ sửa biển">
            <div class="sidebar-card">
              <h2>Sửa biển tại ${escapeHtml(page.district)}</h2>
              <p>Gửi ảnh mặt biển hỏng qua Zalo để kiểm tra sơ bộ và báo hướng xử lý.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
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

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} local repair SEO pages`);
