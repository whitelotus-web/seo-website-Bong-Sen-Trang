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

const pages = [
  {
    slug: "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi",
    title: "Biển quảng cáo 1m2 giá bao nhiêu Hà Nội",
    kicker: "Giá theo m2 chỉ là giá nền",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    description: "Biển quảng cáo 1m2 giá bao nhiêu tại Hà Nội: xem khoảng giá theo vật liệu, khung, chữ nổi, LED và chi phí lắp đặt.",
    intro:
      "Khi hỏi biển quảng cáo 1m2 giá bao nhiêu, cần hiểu giá m2 thường mới phản ánh phần nền hoặc mặt biển. Tổng chi phí thực tế còn phụ thuộc khung xương, chữ nổi, LED, độ cao thi công, vị trí lắp và có tận dụng được biển cũ hay không.",
    rows: [
      ["Biển bạt Hiflex khung sắt", "180.000 - 350.000đ/m2", "Phù hợp biển tạm, khai trương, mặt tiền lớn cần tiết kiệm."],
      ["Biển bạt có lót tôn", "300.000 - 450.000đ/m2", "Mặt biển phẳng và chắc hơn bạt căng thường."],
      ["Nền alu, alu chữ nổi cơ bản", "480.000đ/m2 trở lên", "Chưa tính toàn bộ chữ nổi, LED, nguồn và hạng mục phụ nếu có."],
      ["Hộp đèn Hiflex", "450.000 - 750.000đ/m2", "Phù hợp cửa hàng cần sáng buổi tối với ngân sách vừa phải."]
    ],
    notes: [
      "Giá 1m2 không nên dùng để chốt ngay nếu chưa biết chiều cao, khung cũ và kiểu chữ.",
      "Cùng một diện tích nhưng biển có LED, chữ nổi mica/inox hoặc lắp trên cao sẽ khác giá.",
      "Gửi ảnh mặt tiền giúp báo giá sát hơn so với chỉ hỏi đơn giá m2."
    ],
    related: [
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"],
      ["Báo giá biển quảng cáo theo m2", "bao-gia-lam-bien-quang-cao-theo-m2-ha-noi"],
      ["Gửi ảnh báo giá biển quảng cáo", "gui-anh-bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "bao-gia-lam-bien-quang-cao-theo-m2-ha-noi",
    title: "Báo giá biển quảng cáo theo m2 Hà Nội",
    kicker: "Tính giá theo diện tích và cấu tạo",
    image: "bien-tam-lon-ha-noi.jpg",
    description: "Báo giá làm biển quảng cáo theo m2 tại Hà Nội: Hiflex, alu, hộp đèn LED, chữ nổi và các yếu tố làm giá thay đổi.",
    intro:
      "Báo giá theo m2 phù hợp để ước lượng nhanh ngân sách, nhưng khi thi công biển quảng cáo tại Hà Nội cần tính thêm kết cấu, vật liệu chữ, hệ LED, vận chuyển và điều kiện lắp đặt thực tế.",
    rows: [
      ["Phần nền/mặt biển", "Tính theo m2", "Gồm bạt, alu, mica, tôn, PVC hoặc vật liệu nền khác."],
      ["Chữ nổi/logo", "Tính theo mẫu", "Phụ thuộc kích thước chữ, vật liệu mica/inox/formex và có LED hay không."],
      ["Khung xương/gia cố", "Tùy mặt bằng", "Biển lớn, biển cao hoặc biển tận dụng khung cũ cần kiểm tra riêng."],
      ["Lắp đặt và điện LED", "Tùy vị trí", "Độ cao, nguồn điện, đi dây, chống nước và thời gian thi công ảnh hưởng giá."]
    ],
    notes: [
      "Nếu cần giá nhanh, hãy gửi chiều ngang x chiều cao và ảnh mặt tiền.",
      "Nếu chưa đo được, ảnh chụp chính diện vẫn đủ để tư vấn khoảng giá ban đầu.",
      "Không nên so sánh mỗi đơn giá m2 khi cấu tạo biển khác nhau."
    ],
    related: [
      ["Biển quảng cáo 1m2 giá bao nhiêu", "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi"],
      ["Báo giá biển theo kích thước", "bao-gia-bien-theo-kich-thuoc-ha-noi"],
      ["Khảo sát làm biển quảng cáo", "khao-sat-lam-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "chi-phi-lam-bien-cua-hang-moi-ha-noi",
    title: "Chi phí làm biển cửa hàng mới Hà Nội",
    kicker: "Dự toán trước ngày khai trương",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    description: "Chi phí làm biển cửa hàng mới tại Hà Nội: biển chính, biển vẫy, decal kính, menu phụ và cách tối ưu ngân sách khai trương.",
    intro:
      "Cửa hàng mới mở thường cần kiểm soát chi phí nhưng vẫn phải có mặt tiền đủ rõ để khách nhận ra. Cách thực tế là ưu tiên biển chính trước, sau đó bổ sung biển vẫy, decal kính, menu hoặc bảng phụ nếu ngân sách cho phép.",
    rows: [
      ["Biển chính mặt tiền", "Ưu tiên số 1", "Tên cửa hàng, ngành hàng và nhận diện chính phải rõ nhất."],
      ["Biển vẫy/hộp đèn phụ", "Làm nếu mặt tiền khuất", "Giúp khách nhìn từ hai chiều đường hoặc trong ngõ."],
      ["Decal kính/bảng phụ", "Có thể làm sau", "Tăng nhận diện nhưng không nên vượt ngân sách giai đoạn đầu."],
      ["Sửa/tận dụng khung cũ", "Giảm chi phí nếu còn tốt", "Cần kiểm tra độ chắc, kích thước và hệ điện cũ."]
    ],
    notes: [
      "Nếu ngân sách mỏng, nên làm biển chính rõ và bền trước.",
      "Nếu bán buổi tối, cần tính ánh sáng ngay từ đầu thay vì sửa sau.",
      "Gửi ngày khai trương để kiểm tra phương án có kịp tiến độ không."
    ],
    related: [
      ["Làm biển shop mới mở Hà Nội", "lam-bien-quang-cao-shop-moi-mo-ha-noi"],
      ["Làm biển cửa hàng mới mở Hà Nội", "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi"],
      ["Làm biển quảng cáo cần gấp", "lam-bien-quang-cao-can-gap-ha-noi"]
    ]
  },
  {
    slug: "bang-gia-hiflex-alu-hop-den-ha-noi",
    title: "Bảng giá Hiflex, alu, hộp đèn Hà Nội",
    kicker: "So sánh vật liệu phổ biến",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    description: "Bảng giá tham khảo Hiflex, alu chữ nổi và hộp đèn LED tại Hà Nội; chọn vật liệu theo ngân sách và mặt tiền.",
    intro:
      "Hiflex, alu chữ nổi và hộp đèn LED là ba nhóm biển phổ biến nhất cho cửa hàng tại Hà Nội. Mỗi nhóm có mức giá, độ bền, thẩm mỹ và thời gian thi công khác nhau.",
    rows: [
      ["Hiflex", "Thấp nhất", "Làm nhanh, hợp khai trương, biển tạm, mặt tiền lớn cần tiết kiệm."],
      ["Alu chữ nổi", "Trung bình đến cao", "Mặt tiền chuyên nghiệp hơn, hợp shop, spa, showroom, văn phòng."],
      ["Hộp đèn LED", "Trung bình đến cao", "Phù hợp cửa hàng cần sáng rõ buổi tối."],
      ["Kết hợp alu + chữ LED", "Cao hơn", "Đẹp và bền hơn, hợp thương hiệu dùng lâu dài."]
    ],
    notes: [
      "Không có vật liệu tốt nhất cho mọi trường hợp; phải chọn theo mặt tiền và mục tiêu sử dụng.",
      "Biển dùng lâu nên ưu tiên độ bền và bảo trì, không chỉ nhìn giá ban đầu.",
      "Nếu muốn tiết kiệm, có thể làm biển chính tốt và giảm hạng mục phụ."
    ],
    related: [
      ["Nên chọn alu chữ nổi hay Hiflex", "nen-chon-bien-alu-chu-noi-hay-bien-bat-hiflex"],
      ["Báo giá biển alu chữ nổi", "bao-gia-bien-alu-chu-noi-ha-noi"],
      ["Báo giá biển hộp đèn LED", "bao-gia-bien-hop-den-led-ha-noi"]
    ]
  },
  {
    slug: "bao-gia-bien-theo-kich-thuoc-ha-noi",
    title: "Báo giá biển theo kích thước Hà Nội",
    kicker: "Chiều ngang, chiều cao và độ sâu đều ảnh hưởng giá",
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    description: "Báo giá biển quảng cáo theo kích thước tại Hà Nội: cách tính diện tích, khung, chữ nổi, LED và lắp đặt.",
    intro:
      "Kích thước biển không chỉ là ngang x cao. Với hộp đèn, chữ nổi hoặc mặt dựng alu, độ sâu, khung xương, vị trí bắt vít, nguồn điện và khoảng cách nhìn cũng ảnh hưởng trực tiếp tới chi phí.",
    rows: [
      ["Biển nhỏ dưới 2m2", "Thường tính theo hạng mục", "Chi phí tối thiểu có thể cao hơn nếu cấu tạo phức tạp."],
      ["Biển 3-6m2", "Dễ ước lượng theo m2", "Phù hợp nhiều cửa hàng mặt phố, shop nhỏ, quán ăn."],
      ["Biển lớn trên 8m2", "Cần kiểm tra khung", "Phải tính gió, độ cao, vận chuyển và an toàn thi công."],
      ["Biển có chữ nổi/LED", "Tính thêm theo mẫu", "Không nên chỉ nhân diện tích với đơn giá nền."]
    ],
    notes: [
      "Nên gửi ảnh mặt tiền kèm kích thước ước lượng để tư vấn nhanh.",
      "Nếu biển nằm trên tầng cao, chi phí lắp đặt có thể khác mặt tiền tầng 1.",
      "Nếu có khung cũ, cần kiểm tra trước khi quyết định tận dụng."
    ],
    related: [
      ["Gửi ảnh báo giá biển quảng cáo", "gui-anh-bao-gia-bien-quang-cao-ha-noi"],
      ["Khảo sát làm biển quảng cáo", "khao-sat-lam-bien-quang-cao-ha-noi"],
      ["Dự toán chi phí biển mặt tiền", "du-toan-chi-phi-bien-mat-tien-ha-noi"]
    ]
  },
  {
    slug: "du-toan-chi-phi-bien-mat-tien-ha-noi",
    title: "Dự toán chi phí biển mặt tiền Hà Nội",
    kicker: "Ước lượng ngân sách trước khi làm",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    description: "Dự toán chi phí làm biển mặt tiền tại Hà Nội: vật liệu, diện tích, chữ nổi, LED, khung cũ và điều kiện lắp đặt.",
    intro:
      "Dự toán chi phí biển mặt tiền giúp cửa hàng biết nên chuẩn bị ngân sách ở mức nào trước khi chốt thiết kế. Cách tính đúng là tách phần nền, chữ/logo, ánh sáng, khung và lắp đặt.",
    rows: [
      ["Nền biển", "Theo diện tích", "Hiflex, alu, tôn, mica, PVC hoặc vật liệu khác."],
      ["Chữ/logo", "Theo mẫu", "Chữ càng dày, có LED hoặc inox thì chi phí càng khác biệt."],
      ["Ánh sáng", "Theo kiểu LED", "Hộp đèn, chữ sáng mặt, hắt sáng hoặc đèn rọi ngoài."],
      ["Thi công", "Theo mặt bằng", "Độ cao, vị trí, thời gian thi công và khung cũ ảnh hưởng giá."]
    ],
    notes: [
      "Nếu cần báo giá nhanh, gửi ảnh mặt tiền và kích thước dự kiến qua Zalo.",
      "Nếu muốn tối ưu chi phí, nên chốt rõ hạng mục bắt buộc và hạng mục có thể làm sau.",
      "Không nên cắt giảm phần khung, điện và chống nước nếu biển dùng ngoài trời lâu dài."
    ],
    related: [
      ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"],
      ["Báo giá biển theo kích thước", "bao-gia-bien-theo-kich-thuoc-ha-noi"],
      ["Thay biển cũ cửa hàng", "thay-bien-cu-cua-hang-ha-noi"]
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

function renderRows(rows) {
  return rows
    .map(
      ([name, price, note]) => `
                <tr>
                  <th scope="row">${escapeHtml(name)}</th>
                  <td>${escapeHtml(price)}</td>
                  <td>${escapeHtml(note)}</td>
                </tr>`
    )
    .join("\n");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
}

function renderRelated(links) {
  return links.map(([label, slug]) => `<a href="../${slug}/">${escapeHtml(label)}</a>`).join("\n              ");
}

function renderClusterCards(currentSlug) {
  return pages
    .filter((page) => page.slug !== currentSlug)
    .map(
      (page) => `
                <a href="../${page.slug}/">
                  <strong>${escapeHtml(page.title)}</strong>
                  <span>${escapeHtml(page.kicker)}</span>
                </a>`
    )
    .join("\n");
}

function renderFaq(page) {
  const faqs = [
    [`${page.title} có chốt giá qua điện thoại được không?`, "Có thể tư vấn khoảng giá ban đầu, nhưng để chốt sát hơn cần ảnh mặt tiền, kích thước dự kiến, vật liệu mong muốn và địa chỉ lắp đặt."],
    ["Vì sao cùng m2 nhưng mỗi biển lại khác giá?", "Vì ngoài diện tích còn có khung xương, chữ nổi, LED, nguồn điện, độ cao thi công, vị trí treo và việc có tận dụng được khung cũ hay không."],
    ["Gửi ảnh qua Zalo có giúp báo giá nhanh hơn không?", "Có. Ảnh mặt tiền giúp xác định mặt bằng, hướng nhìn, khung cũ và vị trí lắp để tư vấn phương án sát hơn."],
    ["Có phương án tiết kiệm cho cửa hàng mới mở không?", "Có. Có thể ưu tiên biển chính, tận dụng khung cũ nếu còn tốt, chọn Hiflex hoặc cấu tạo alu đơn giản tùy ngân sách."]
  ];

  return {
    faqs,
    html: faqs
      .map(
        ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
      )
      .join("\n")
  };
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const imageUrl = `${baseUrl}/assets/images/${page.image}`;
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
        name: page.title,
        description: page.description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: "Hà Nội",
        serviceType: "Báo giá làm biển quảng cáo"
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
    <meta property="og:image:alt" content="${escapeHtml(page.title)}">
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
          <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">Gửi ảnh báo giá</a>
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
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
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
              <h2>Bảng giá tham khảo</h2>
              <div class="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Hạng mục</th>
                      <th scope="col">Khoảng giá</th>
                      <th scope="col">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
${renderRows(page.rows)}
                  </tbody>
                </table>
              </div>
            </section>
            <section class="content-block">
              <h2>Cần lưu ý trước khi so giá</h2>
              <ul class="area-list">
                ${renderList(page.notes)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Muốn báo giá sát hơn</h2>
              <p>Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt và thời gian cần hoàn thiện qua Zalo. Với biển cũ, chụp thêm phần khung, mặt biển và khu vực nguồn điện để kiểm tra khả năng tận dụng.</p>
            </section>
            <section class="content-block">
              <h2>Chủ đề giá liên quan</h2>
              <div class="price-link-grid compact">
${renderClusterCards(page.slug)}
              </div>
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
              <p>Gửi ảnh mặt tiền qua Zalo để nhận tư vấn vật liệu, kích thước và khoảng giá phù hợp.</p>
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
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page).replace(/^[ \t]+$/gm, ""), "utf8");
}

console.log(`Generated ${pages.length} price-intent SEO pages`);
