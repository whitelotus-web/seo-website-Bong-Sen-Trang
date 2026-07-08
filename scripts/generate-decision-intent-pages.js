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
    slug: "lam-bien-quang-cao-mat-bao-lau-ha-noi",
    title: "Làm biển quảng cáo mất bao lâu tại Hà Nội",
    kicker: "Tiến độ thi công",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    description: "Làm biển quảng cáo mất bao lâu tại Hà Nội: mốc thời gian theo loại biển, mặt bằng, vật liệu và cách chuẩn bị để kịp khai trương.",
    intro:
      "Thời gian làm biển quảng cáo phụ thuộc vào thiết kế, vật liệu, kích thước, khung cũ và điều kiện lắp đặt. Với cửa hàng cần khai trương, nên gửi ảnh mặt tiền, kích thước và ngày cần hoàn thiện ngay từ đầu để chọn phương án kịp tiến độ.",
    sections: [
      {
        heading: "Thời gian thường gặp theo hạng mục",
        items: [
          ["Bạt Hiflex, biển tạm khai trương", "Thường nhanh nhất nếu nội dung đã rõ và mặt bằng dễ lắp."],
          ["Alu chữ nổi, chữ mica/inox", "Cần thêm thời gian gia công chữ, căn tỉ lệ và hoàn thiện mặt biển."],
          ["Hộp đèn LED, biển vẫy hai mặt", "Cần kiểm tra nguồn điện, độ sâu hộp, khung treo và chống nước."],
          ["Biển lớn, biển treo cao", "Nên khảo sát trước để tính an toàn, điểm bắt và phương án thi công."]
        ]
      },
      {
        heading: "Muốn làm nhanh cần chuẩn bị gì",
        items: [
          ["Ảnh mặt tiền rõ", "Chụp chính diện, chụp thêm hai bên và vị trí nguồn điện nếu có."],
          ["Kích thước dự kiến", "Chỉ cần ngang x cao ước lượng ban đầu cũng giúp báo phương án nhanh hơn."],
          ["Logo, nội dung, màu chủ đạo", "Nội dung càng rõ thì càng giảm thời gian sửa thiết kế."],
          ["Ngày cần hoàn thiện", "Giúp chọn vật liệu và cấu tạo phù hợp tiến độ thực tế."]
        ]
      }
    ],
    note: "Nếu cần gấp, nên ưu tiên phương án đủ rõ, dễ thi công và có thể nâng cấp sau. Không nên chọn cấu tạo quá phức tạp khi thời gian khai trương đã sát.",
    related: [
      ["Làm biển quảng cáo cần gấp Hà Nội", "lam-bien-quang-cao-can-gap-ha-noi"],
      ["Làm biển khai trương gấp Hà Nội", "lam-bien-quang-cao-khai-truong-gap-ha-noi"],
      ["Gửi ảnh báo giá biển quảng cáo", "gui-anh-bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "kich-thuoc-bien-quang-cao-mat-tien-ha-noi",
    title: "Kích thước biển quảng cáo mặt tiền tại Hà Nội",
    kicker: "Chọn cỡ biển dễ nhìn",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    description: "Tư vấn kích thước biển quảng cáo mặt tiền tại Hà Nội theo chiều ngang, chiều cao, khoảng cách nhìn, tầng lắp và loại hình cửa hàng.",
    intro:
      "Kích thước biển mặt tiền không chỉ là đo ngang x cao rồi nhân đơn giá. Biển cần vừa mặt bằng, dễ đọc từ khoảng cách khách đi qua, không che chi tiết quan trọng và phù hợp quy mô cửa hàng.",
    sections: [
      {
        heading: "Cách chọn kích thước ban đầu",
        items: [
          ["Mặt tiền hẹp", "Ưu tiên chữ lớn, ít nội dung, có thể thêm biển vẫy để nhìn từ hai chiều."],
          ["Mặt tiền rộng", "Cần chia tỉ lệ logo, tên thương hiệu và ngành hàng để không bị loãng."],
          ["Biển tầng 2 hoặc treo cao", "Chữ phải lớn hơn vì khoảng cách nhìn xa và góc nhìn thấp."],
          ["Biển trong ngõ", "Cần rõ địa chỉ, hướng nhìn và có thể dùng biển chỉ dẫn phụ."]
        ]
      },
      {
        heading: "Thông tin nên gửi để tư vấn cỡ biển",
        items: [
          ["Chiều ngang mặt tiền", "Có thể đo bằng thước hoặc ước lượng theo cửa/cuốn/cột."],
          ["Chiều cao vùng muốn lắp", "Giúp xác định tỉ lệ nền, chữ và khoảng hở an toàn."],
          ["Ảnh chụp từ bên kia đường", "Cho biết khách sẽ nhìn biển từ khoảng cách nào."],
          ["Ngành hàng kinh doanh", "Shop, cafe, nhà thuốc, spa hay showroom sẽ cần tỉ lệ chữ khác nhau."]
        ]
      }
    ],
    note: "Biển đẹp không phải lúc nào cũng là biển to nhất. Biển tốt là biển đọc nhanh, đúng nhận diện và phù hợp mặt bằng thực tế.",
    related: [
      ["Báo giá biển theo kích thước Hà Nội", "bao-gia-bien-theo-kich-thuoc-ha-noi"],
      ["Dự toán chi phí biển mặt tiền", "du-toan-chi-phi-bien-mat-tien-ha-noi"],
      ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-ngoai-troi-ben-bao-lau-ha-noi",
    title: "Biển quảng cáo ngoài trời bền bao lâu tại Hà Nội",
    kicker: "Độ bền và bảo hành",
    image: "bien-tam-lon-ha-noi.jpg",
    description: "Biển quảng cáo ngoài trời bền bao lâu tại Hà Nội: yếu tố ảnh hưởng độ bền, vật liệu, LED, khung, chống nước và bảo trì.",
    intro:
      "Độ bền của biển ngoài trời phụ thuộc vào vật liệu, khung, hướng nắng mưa, hệ LED, nguồn điện và cách thi công chống nước. Cùng một loại biển nhưng vị trí lắp khác nhau có thể cho tuổi thọ khác nhau.",
    sections: [
      {
        heading: "Yếu tố quyết định độ bền",
        items: [
          ["Nền và mặt biển", "Bạt, alu, mica, inox hoặc tôn có độ bền và cách lão hóa khác nhau."],
          ["Khung xương", "Khung yếu hoặc hoen gỉ làm biển nhanh xuống cấp, đặc biệt ở vị trí gió mạnh."],
          ["LED và nguồn điện", "Cần đi dây gọn, chống nước tốt và dùng nguồn phù hợp tải."],
          ["Hướng nắng mưa", "Mặt tiền nắng trực diện hoặc hắt mưa nhiều cần chọn vật liệu kỹ hơn."]
        ]
      },
      {
        heading: "Khi nào nên bảo trì hoặc thay mới",
        items: [
          ["Mặt biển bạc màu", "Ảnh hưởng khả năng nhận diện và cảm giác chuyên nghiệp của cửa hàng."],
          ["LED chập chờn", "Nên kiểm tra nguồn, dây, module LED trước khi hỏng lan rộng."],
          ["Khung rung, võng", "Cần gia cố sớm để đảm bảo an toàn."],
          ["Đổi nhận diện thương hiệu", "Có thể tận dụng khung cũ nếu kết cấu còn tốt."]
        ]
      }
    ],
    note: "Muốn biển dùng lâu, không nên cắt giảm phần khung, điện và chống nước. Đây là các phần ít thấy nhưng ảnh hưởng trực tiếp tới tuổi thọ biển.",
    related: [
      ["Sửa chữa biển quảng cáo Hà Nội", "sua-chua-bien-quang-cao-ha-noi"],
      ["Dấu hiệu cần sửa hoặc thay biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"],
      ["Bảo trì biển quảng cáo Hà Nội", "bao-tri-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "chon-chat-lieu-bien-quang-cao-ha-noi",
    title: "Chọn chất liệu biển quảng cáo tại Hà Nội",
    kicker: "Vật liệu phù hợp ngân sách",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    description: "Cách chọn chất liệu biển quảng cáo tại Hà Nội: bạt Hiflex, alu, mica, inox, hộp đèn LED theo ngân sách và mặt bằng.",
    intro:
      "Chọn chất liệu biển quảng cáo nên dựa trên thời gian sử dụng, ngân sách, vị trí lắp, ngành hàng và nhu cầu phát sáng. Không có vật liệu tốt nhất cho mọi cửa hàng, chỉ có phương án phù hợp nhất với mặt bằng.",
    sections: [
      {
        heading: "Gợi ý theo nhu cầu",
        items: [
          ["Cần tiết kiệm, làm nhanh", "Bạt Hiflex hoặc phương án nền đơn giản phù hợp biển tạm, khai trương."],
          ["Cần mặt tiền chỉn chu", "Alu kết hợp chữ nổi mica/inox phù hợp shop, spa, showroom, văn phòng."],
          ["Cần sáng buổi tối", "Hộp đèn LED, chữ nổi sáng mặt hoặc hắt sáng giúp nhìn rõ sau 18h."],
          ["Cần nhận diện cao cấp", "Chữ inox, mica dày, nền sạch và ánh sáng gọn tạo cảm giác chuyên nghiệp hơn."]
        ]
      },
      {
        heading: "Sai lầm thường gặp khi chọn vật liệu",
        items: [
          ["Chỉ chọn theo giá rẻ nhất", "Có thể phát sinh sửa chữa hoặc thay sớm nếu không hợp vị trí ngoài trời."],
          ["Nhồi quá nhiều nội dung", "Biển khó đọc dù vật liệu tốt."],
          ["Không tính ánh sáng", "Cửa hàng bán buổi tối cần tính LED ngay từ đầu."],
          ["Không kiểm tra khung cũ", "Tận dụng khung cũ chỉ nên làm khi khung còn đủ chắc."]
        ]
      }
    ],
    note: "Nếu chưa chắc nên chọn vật liệu nào, gửi ảnh mặt tiền và ngân sách dự kiến. Có thể tư vấn 2-3 phương án để so sánh trước khi chốt.",
    related: [
      ["Nên chọn alu chữ nổi hay bạt Hiflex", "nen-chon-bien-alu-chu-noi-hay-bien-bat-hiflex"],
      ["Bảng giá Hiflex, alu, hộp đèn", "bang-gia-hiflex-alu-hop-den-ha-noi"],
      ["Tư vấn thiết kế biển quảng cáo", "tu-van-thiet-ke-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "cach-tiet-kiem-chi-phi-lam-bien-quang-cao-ha-noi",
    title: "Cách tiết kiệm chi phí làm biển quảng cáo tại Hà Nội",
    kicker: "Tối ưu ngân sách",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    description: "Cách tiết kiệm chi phí làm biển quảng cáo tại Hà Nội: chọn hạng mục ưu tiên, tận dụng khung cũ, chọn vật liệu và tránh phát sinh.",
    intro:
      "Tiết kiệm chi phí làm biển không có nghĩa là chọn phương án rẻ nhất. Cách đúng là ưu tiên phần tạo nhận diện, tránh phát sinh do thiếu thông tin và chọn cấu tạo phù hợp thời gian sử dụng.",
    sections: [
      {
        heading: "Cách giảm chi phí nhưng vẫn hiệu quả",
        items: [
          ["Ưu tiên biển chính", "Làm rõ tên thương hiệu và ngành hàng trước, hạng mục phụ có thể bổ sung sau."],
          ["Tận dụng khung cũ nếu còn tốt", "Giảm chi phí khung nhưng vẫn cần kiểm tra độ chắc, gỉ sét và điểm bắt."],
          ["Chọn vật liệu theo thời gian dùng", "Biển dùng ngắn hạn không cần cấu tạo quá đắt; biển dùng lâu cần bền hơn."],
          ["Gửi đủ ảnh và kích thước", "Giúp báo giá sát, giảm sửa đi sửa lại và hạn chế phát sinh."]
        ]
      },
      {
        heading: "Không nên cắt giảm phần nào",
        items: [
          ["Khung chịu lực", "Ảnh hưởng an toàn và độ bền ngoài trời."],
          ["Chống nước cho LED", "Cắt giảm phần này dễ làm biển nhanh hỏng sau mưa."],
          ["Độ dễ đọc của chữ", "Biển rẻ nhưng khó đọc thì không giúp kéo khách."],
          ["Thi công đúng mặt bằng", "Lắp tạm hoặc sai điểm bắt có thể phải sửa lại tốn hơn."]
        ]
      }
    ],
    note: "Nếu ngân sách hạn chế, nên nói rõ mức dự kiến. Bông Sen Trắng có thể gợi ý phương án đủ dùng trước, sau đó nâng cấp khi cửa hàng ổn định hơn.",
    related: [
      ["Chi phí làm biển cửa hàng mới", "chi-phi-lam-bien-cua-hang-moi-ha-noi"],
      ["Biển quảng cáo 1m2 giá bao nhiêu", "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
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

function renderItems(items) {
  return items
    .map(
      ([name, text]) => `
                <li>
                  <strong>${escapeHtml(name)}</strong>
                  <span>${escapeHtml(text)}</span>
                </li>`
    )
    .join("\n");
}

function renderSections(sections) {
  return sections
    .map(
      (section) => `
            <section class="content-block">
              <h2>${escapeHtml(section.heading)}</h2>
              <ul class="area-list decision-list">
${renderItems(section.items)}
              </ul>
            </section>`
    )
    .join("\n");
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
    [
      `${page.title} có cần khảo sát trực tiếp không?`,
      "Không phải trường hợp nào cũng cần khảo sát. Nếu có ảnh mặt tiền, kích thước và yêu cầu rõ, có thể tư vấn phương án ban đầu qua Zalo; biển lớn, biển cao hoặc mặt bằng khó nên khảo sát trước."
    ],
    [
      "Gửi ảnh qua Zalo có báo giá được không?",
      "Có. Ảnh mặt tiền giúp xác định vị trí lắp, khung cũ, hướng nhìn, kích thước ước lượng và phương án vật liệu phù hợp hơn so với chỉ mô tả bằng lời."
    ],
    [
      "Có tư vấn phương án tiết kiệm không?",
      "Có. Có thể ưu tiên hạng mục chính, tận dụng khung cũ nếu còn tốt, chọn vật liệu phù hợp thời gian sử dụng và tách phần có thể nâng cấp sau."
    ],
    [
      "Bông Sen Trắng nhận thi công khu vực nào?",
      "Bông Sen Trắng nhận tư vấn, sản xuất và thi công biển quảng cáo tại Hà Nội, ưu tiên các khu vực nội thành và lân cận Đống Đa."
    ]
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
        serviceType: "Tư vấn làm biển quảng cáo"
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
          <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
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
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tư vấn</a>
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
${renderSections(page.sections)}
            <section class="content-block price-note">
              <h2>Gợi ý thực tế</h2>
              <p>${escapeHtml(page.note)}</p>
            </section>
            <section class="content-block">
              <h2>Chủ đề tư vấn liên quan</h2>
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
          <aside class="content-sidebar" aria-label="Liên hệ tư vấn">
            <div class="sidebar-card">
              <h2>Gửi ảnh để tư vấn nhanh</h2>
              <p>Chụp ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt rồi gửi qua Zalo để nhận phương án phù hợp hơn.</p>
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

console.log(`Generated ${pages.length} decision-intent SEO pages`);
