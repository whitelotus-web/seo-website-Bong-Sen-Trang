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
    slug: "sua-bien-quang-cao-chay-den-ha-noi",
    title: "Sửa biển quảng cáo cháy đèn Hà Nội",
    kicker: "Xử lý biển tối, chập chờn, mất sáng",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    intro: "Biển quảng cáo bị cháy đèn làm cửa hàng khó nhận diện vào buổi tối. Bông Sen Trắng nhận kiểm tra LED, nguồn, dây điện và tư vấn sửa hoặc thay mới phần hỏng.",
    symptoms: ["Biển sáng không đều, có vùng tối", "Đèn nhấp nháy hoặc lúc sáng lúc tắt", "Nguồn nóng, có tiếng rè hoặc mùi khét", "Chữ nổi, hộp đèn, biển vẫy bị mất sáng"],
    fixes: ["Kiểm tra nguồn và đường điện", "Thay LED hỏng theo cụm", "Thay nguồn nếu đã yếu hoặc quá tải", "Vệ sinh và kiểm tra lại mặt biển sau sửa"]
  },
  {
    slug: "sua-bien-quang-cao-bi-mo-bac-mau-ha-noi",
    title: "Sửa biển quảng cáo bị mờ, bạc màu Hà Nội",
    kicker: "Làm mới mặt biển cũ tiết kiệm chi phí",
    image: "bien-tam-lon-ha-noi.jpg",
    intro: "Biển bị bạc màu, chữ mờ hoặc mặt bạt cũ khiến cửa hàng trông kém chuyên nghiệp. Nếu khung còn tốt, có thể thay mặt biển hoặc làm mới phần nhận diện.",
    symptoms: ["Mặt bạt phai màu, chữ khó đọc", "Mica hoặc decal bị ố, bong, nứt", "Biển cũ không còn đúng màu thương hiệu", "Khung vẫn chắc nhưng mặt biển đã xuống cấp"],
    fixes: ["Thay mặt bạt Hiflex hoặc mica", "Làm lại chữ, logo, decal theo bố cục mới", "Kiểm tra khung trước khi tận dụng lại", "Tư vấn nâng cấp ánh sáng nếu biển tối"]
  },
  {
    slug: "thay-nguon-led-bien-quang-cao-ha-noi",
    title: "Thay nguồn LED biển quảng cáo Hà Nội",
    kicker: "Khắc phục biển chập chờn, mất sáng",
    image: "du-an-bien-the-fox-fitness.jpg",
    intro: "Nguồn LED yếu hoặc hỏng có thể làm biển chập chờn, sáng yếu, tắt từng vùng. Cần kiểm tra đúng tải để thay nguồn phù hợp và hạn chế hỏng lặp lại.",
    symptoms: ["Đèn LED sáng yếu hoặc chập chờn", "Một phần biển tắt dù LED chưa cháy hết", "Nguồn nóng bất thường", "Biển tắt sau một thời gian bật"],
    fixes: ["Kiểm tra tải LED thực tế", "Thay nguồn đúng công suất", "Kiểm tra điểm nối dây và chống ẩm", "Chạy thử sau khi thay nguồn"]
  },
  {
    slug: "sua-chu-noi-mica-inox-ha-noi",
    title: "Sửa chữ nổi mica inox Hà Nội",
    kicker: "Thay chữ, sửa LED, gia cố chữ nổi",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    intro: "Chữ nổi bị bong, lệch, tắt LED hoặc xuống màu làm biển mất thẩm mỹ. Có thể sửa từng chữ, thay LED hoặc làm lại chữ mới theo thiết kế hiện có.",
    symptoms: ["Chữ nổi bị bong, lệch hoặc rơi", "Chữ mica bị nứt, ố, xước", "LED hắt sáng phía sau chữ bị tắt", "Chữ inox bám bẩn hoặc mất độ sáng"],
    fixes: ["Gia cố chân chữ và keo dán", "Thay LED cho chữ hắt sáng", "Làm lại chữ hỏng theo kích thước cũ", "Vệ sinh hoặc thay mặt chữ khi cần"]
  },
  {
    slug: "gia-co-khung-bien-quang-cao-ha-noi",
    title: "Gia cố khung biển quảng cáo Hà Nội",
    kicker: "Xử lý khung yếu, cong, rỉ ngoài trời",
    image: "san-xuat-khung-bien-vay-led-ha-noi.jpg",
    intro: "Khung biển yếu, cong, rỉ hoặc lỏng điểm treo là rủi ro lớn khi mưa gió. Nên kiểm tra và gia cố trước khi thay mặt biển hoặc lắp thêm LED.",
    symptoms: ["Khung biển rung, lắc khi có gió", "Sắt hộp bị rỉ, mục hoặc cong", "Điểm bắt tường lỏng", "Biển lớn nhưng kết cấu cũ không còn chắc"],
    fixes: ["Kiểm tra khung và điểm treo", "Gia cố sắt hộp, bắn vít, hàn bổ sung", "Thay phần khung mục/rỉ", "Tư vấn làm lại khung nếu không còn an toàn"]
  },
  {
    slug: "ve-sinh-bien-quang-cao-ha-noi",
    title: "Vệ sinh biển quảng cáo Hà Nội",
    kicker: "Làm sạch mặt biển, chữ nổi, hộp đèn",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    intro: "Biển bám bụi, ố mặt mica hoặc chữ nổi bẩn làm hình ảnh cửa hàng giảm chuyên nghiệp. Vệ sinh kết hợp kiểm tra ánh sáng giúp phát hiện sớm lỗi hỏng.",
    symptoms: ["Mặt biển bám bụi, ố nước mưa", "Chữ nổi mất độ bóng", "Mặt hộp đèn mờ, ánh sáng yếu", "Biển còn dùng tốt nhưng nhìn cũ"],
    fixes: ["Vệ sinh mặt biển và chữ nổi", "Kiểm tra LED, nguồn, điểm nối điện", "Tư vấn thay mặt nếu đã bạc màu", "Đề xuất lịch bảo trì nếu biển ngoài trời"]
  },
  {
    slug: "sua-bien-vay-cua-hang-ha-noi",
    title: "Sửa biển vẫy cửa hàng Hà Nội",
    kicker: "Sửa biển vẫy tròn, hộp đèn, LED",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    intro: "Biển vẫy là điểm nhìn từ hai chiều đường, nhưng dễ hỏng LED, mặt mica hoặc chân treo nếu dùng lâu ngoài trời. Có thể sửa hoặc thay mặt theo kích thước cũ.",
    symptoms: ["Biển vẫy không sáng hoặc sáng yếu", "Mặt mica nứt, ố, bong decal", "Chân treo lỏng hoặc rỉ", "Biển vẫy cũ không còn đúng nhận diện"],
    fixes: ["Thay LED, nguồn cho biển vẫy", "Thay mặt mica/decal", "Gia cố chân treo", "Tư vấn làm biển vẫy mới nếu khung quá cũ"]
  },
  {
    slug: "sua-bien-alu-chu-noi-ha-noi",
    title: "Sửa biển alu chữ nổi Hà Nội",
    kicker: "Sửa nền alu, chữ nổi và hệ đèn",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    intro: "Biển alu chữ nổi có thể xuống cấp ở phần nền, chữ, LED hoặc khung. Tùy tình trạng, có thể sửa từng hạng mục thay vì làm mới toàn bộ.",
    symptoms: ["Nền alu xước, phồng, cong hoặc bạc màu", "Chữ nổi bong, lệch hoặc mất sáng", "LED hắt sáng không đều", "Khung và mặt dựng có dấu hiệu xuống cấp"],
    fixes: ["Thay tấm alu hỏng", "Sửa hoặc thay chữ nổi", "Kiểm tra LED và nguồn", "Gia cố khung trước khi hoàn thiện lại mặt biển"]
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

function renderFaq(page) {
  const faqs = [
    [`${page.title} có cần khảo sát không?`, "Nếu biển cao, biển lớn, có điện LED hoặc khung cũ không chắc, nên khảo sát để kiểm tra an toàn và báo giá sát hơn."],
    ["Gửi ảnh có báo giá sơ bộ được không?", "Có. Gửi ảnh toàn cảnh mặt biển, ảnh cận phần hỏng, kích thước ước lượng và địa chỉ lắp đặt qua Zalo."],
    ["Nên sửa hay làm mới biển?", "Nếu khung còn chắc và lỗi nằm ở LED, nguồn, mặt bạt hoặc chữ nổi thì có thể sửa. Nếu khung yếu, mặt biển quá cũ hoặc bố cục không còn phù hợp thì nên làm mới."],
    ["Có sửa nhanh trong ngày không?", "Một số lỗi như thay nguồn, thay LED đơn giản, sửa biển vẫy nhỏ có thể xử lý nhanh tùy vị trí và vật tư sẵn."]
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
  const description = `${page.title}: kiểm tra sự cố, sửa LED, nguồn, mặt biển, chữ nổi, khung biển. Gửi ảnh qua Zalo 0989 521 881 để báo giá.`;
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
          <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa biển</a>
          <a href="../bao-tri-bien-quang-cao-ha-noi/">Bảo trì</a>
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
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo</a>
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
              <h2>Dấu hiệu cần xử lý</h2>
              <ul class="area-list">
                ${listItems(page.symptoms)}
              </ul>
            </section>
            <section class="content-block">
              <h2>Hướng sửa thường gặp</h2>
              <ul class="area-list material-list">
                ${listItems(page.fixes)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Gửi ảnh để kiểm tra trước</h2>
              <p>Chụp toàn cảnh mặt biển, ảnh cận phần hỏng, vị trí cấp điện và kích thước ước lượng. Có ảnh rõ thì Bông Sen Trắng tư vấn nhanh hơn và hạn chế báo giá sai.</p>
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
              <h2>Gửi ảnh biển hỏng</h2>
              <p>Gửi ảnh qua Zalo để kiểm tra sơ bộ lỗi và tư vấn sửa hoặc thay mới.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo</a>
              <a href="../sua-bien-hop-den-led-ha-noi/">Sửa biển hộp đèn LED</a>
              <a href="../thay-mat-bat-bien-quang-cao-ha-noi/">Thay mặt bạt biển</a>
              <a href="../bao-tri-bien-quang-cao-ha-noi/">Bảo trì biển quảng cáo</a>
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
        <p>© <span data-year></span> Bông Sen Trắng. Sửa chữa biển quảng cáo tại Hà Nội.</p>
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

console.log(`Generated ${pages.length} repair-intent SEO pages`);
