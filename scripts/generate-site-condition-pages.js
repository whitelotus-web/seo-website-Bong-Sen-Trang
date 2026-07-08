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

const hub = {
  slug: "lam-bien-quang-cao-theo-mat-bang-ha-noi",
  title: "Làm biển quảng cáo theo mặt bằng tại Hà Nội",
  description:
    "Chọn phương án làm biển quảng cáo theo mặt bằng thực tế tại Hà Nội: mặt tiền hẹp, trong ngõ, tầng 2, mặt tiền rộng, nhà lô góc, đổi thương hiệu."
};

const pages = [
  {
    slug: "lam-bien-quang-cao-mat-tien-hep-ha-noi",
    title: "Làm biển quảng cáo mặt tiền hẹp Hà Nội",
    kicker: "Biển cho mặt tiền hẹp",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    description:
      "Làm biển quảng cáo mặt tiền hẹp tại Hà Nội: tư vấn chữ lớn, biển vẫy, hộp đèn, decal kính để khách dễ nhận ra cửa hàng.",
    lead:
      "Mặt tiền hẹp cần biển gọn nhưng phải rõ tên, rõ ngành hàng và có điểm nhìn từ xa. Với nhóm này, biển vẫy, chữ nổi lớn, hộp đèn nhỏ hoặc decal kính thường hiệu quả hơn việc nhồi nhiều nội dung lên một mặt biển.",
    fit: [
      "Shop nhỏ nằm xen giữa nhiều cửa hàng trên cùng tuyến phố.",
      "Mặt tiền ngang dưới 3m, bảng hiệu không có nhiều diện tích.",
      "Cửa hàng cần khách nhìn thấy từ hai chiều đường.",
      "Quán dịch vụ cần nhận diện rõ buổi tối nhưng không muốn làm mặt dựng lớn."
    ],
    suggestions: [
      "Ưu tiên tên thương hiệu, ngành hàng chính và số điện thoại nếu thật cần.",
      "Dùng tương phản màu rõ, chữ ít nét mảnh, không quá nhiều dòng phụ.",
      "Bổ sung biển vẫy LED hoặc hộp đèn nhỏ để kéo tầm nhìn ngang.",
      "Nếu có cửa kính, dùng decal logo hoặc thông tin ngắn để tăng nhận diện."
    ],
    avoid:
      "Không nên đưa quá nhiều dịch vụ, quá nhiều số điện thoại hoặc chữ nhỏ. Biển hẹp mà quá nhiều nội dung thường khó đọc khi khách đi xe qua.",
    related: [
      ["Biển vẫy LED Hà Nội", "lam-bien-vay-led-ha-noi"],
      ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"],
      ["Báo giá biển vẫy LED", "bao-gia-bien-vay-led-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-trong-ngo-ha-noi",
    title: "Làm biển quảng cáo trong ngõ Hà Nội",
    kicker: "Biển cho cửa hàng trong ngõ",
    image: "bien-vay-tron-cua-hang-o-hui-ha-noi.jpg",
    description:
      "Làm biển quảng cáo trong ngõ tại Hà Nội: tư vấn biển chỉ dẫn, biển vẫy, hộp đèn, decal và phương án giúp khách tìm đúng địa chỉ.",
    lead:
      "Cửa hàng trong ngõ thường không cần biển quá lớn ở mặt tiền, nhưng cần khách tìm đường nhanh. Biển chỉ dẫn đầu ngõ, biển vẫy ở điểm rẽ, ánh sáng buổi tối và thông tin địa chỉ rõ sẽ quan trọng hơn phần trang trí cầu kỳ.",
    fit: [
      "Spa, salon, phòng khám, studio, lớp học hoặc cửa hàng dịch vụ trong ngõ.",
      "Nhà mặt ngõ nhưng khách phải rẽ nhiều điểm mới tới nơi.",
      "Cửa hàng nhận khách qua Google Maps, Zalo, Facebook nhưng cần nhận diện khi tới gần.",
      "Mặt tiền nhỏ, không đủ không gian làm biển lớn."
    ],
    suggestions: [
      "Làm biển vẫy nhỏ hoặc hộp đèn ở vị trí khách dễ nhìn khi tới gần.",
      "Dùng biển chỉ dẫn ngắn tại điểm rẽ nếu mặt bằng cho phép.",
      "Ghi rõ tên thương hiệu, tầng/phòng/số nhà thay vì nhồi mô tả dài.",
      "Kiểm tra ánh sáng buổi tối để khách không đi qua mà không nhận ra."
    ],
    avoid:
      "Không nên chỉ làm một biển nhỏ sát cửa nếu khách phải tìm từ đầu ngõ. Điểm nhận diện trước khi tới cửa thường quan trọng hơn.",
    related: [
      ["Làm biển quảng cáo gần đây Hà Nội", "lam-bien-quang-cao-gan-day-ha-noi"],
      ["Biển vẫy cửa hàng Hà Nội", "bien-vay-cua-hang-ha-noi"],
      ["Làm biển quảng cáo nhanh", "lam-bien-quang-cao-nhanh-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-tang-2-ha-noi",
    title: "Làm biển quảng cáo tầng 2 Hà Nội",
    kicker: "Biển cho vị trí tầng 2",
    image: "du-an-brendon-chu-noi-mai-nha.jpg",
    description:
      "Làm biển quảng cáo tầng 2 tại Hà Nội: tư vấn kích thước chữ, khung treo, đèn LED, điểm nhìn và an toàn thi công.",
    lead:
      "Biển tầng 2 cần đọc được từ xa và từ dưới đường nhìn lên. Vấn đề chính là tỷ lệ chữ, độ cao treo, điểm bắt khung, ánh sáng và an toàn khi thi công, không chỉ là chọn vật liệu đẹp.",
    fit: [
      "Văn phòng, trung tâm học, clinic, showroom hoặc shop nằm trên tầng 2.",
      "Mặt tiền tầng 1 bị che bởi cây, mái hiên hoặc biển của đơn vị khác.",
      "Cần chữ lớn, ít nội dung, đọc rõ từ phía đối diện đường.",
      "Cần thi công trên cao, có thể phải khảo sát điểm bắt và phương án an toàn."
    ],
    suggestions: [
      "Tăng chiều cao chữ, giảm số dòng, ưu tiên tên thương hiệu và ngành hàng chính.",
      "Dùng chữ nổi có LED, hộp đèn hoặc đèn rọi nếu mở buổi tối.",
      "Kiểm tra khung chịu lực, vị trí bắt vít và hướng gió.",
      "Chụp ảnh từ dưới đường lên để ước lượng cỡ chữ trước khi sản xuất."
    ],
    avoid:
      "Không nên dùng chữ quá nhỏ hoặc nhiều thông tin phụ. Biển tầng 2 đẹp ở gần nhưng không đọc được từ đường thì hiệu quả thấp.",
    related: [
      ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"],
      ["Gia cố khung biển quảng cáo", "gia-co-khung-bien-quang-cao-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-mat-tien-rong-ha-noi",
    title: "Làm biển quảng cáo mặt tiền rộng Hà Nội",
    kicker: "Biển cho mặt tiền rộng",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    description:
      "Làm biển quảng cáo mặt tiền rộng tại Hà Nội: tư vấn bố cục, chữ nổi, hộp đèn, mặt dựng, điểm nhấn và chi phí theo diện tích.",
    lead:
      "Mặt tiền rộng có lợi thế nhận diện lớn nhưng dễ tốn chi phí nếu làm dàn trải. Phương án tốt thường là chia rõ vùng chính, vùng phụ, điểm nhấn ánh sáng và khu thông tin cần khách đọc nhanh.",
    fit: [
      "Showroom, siêu thị mini, nhà hàng, gara, cửa hàng nội thất hoặc cửa hàng lớn.",
      "Mặt tiền ngang rộng cần chia bố cục để không bị loãng.",
      "Cần kết hợp chữ nổi, nền alu/lam tôn, hộp đèn hoặc hình ảnh sản phẩm.",
      "Cần khách nhìn rõ từ xa nhưng vẫn kiểm soát ngân sách."
    ],
    suggestions: [
      "Chọn một vùng nhận diện chính thay vì phủ kín toàn bộ bằng chữ nhỏ.",
      "Dùng chữ nổi lớn ở trung tâm, phần phụ dùng hình ảnh hoặc thông tin ngắn.",
      "Tính trước vị trí đèn, nguồn điện, khung xương và phương án bảo trì.",
      "Có thể chia làm 2 giai đoạn nếu cần tối ưu ngân sách ban đầu."
    ],
    avoid:
      "Không nên làm toàn bộ mặt tiền bằng cùng một kiểu chữ và cùng một cỡ. Mặt tiền rộng cần nhịp bố cục để khách biết nhìn vào đâu trước.",
    related: [
      ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"],
      ["Biển showroom văn phòng", "bien-quang-cao-showroom-van-phong-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-nha-lo-goc-ha-noi",
    title: "Làm biển quảng cáo nhà lô góc Hà Nội",
    kicker: "Biển cho nhà hai mặt tiền",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    description:
      "Làm biển quảng cáo nhà lô góc, hai mặt tiền tại Hà Nội: tư vấn bố cục hai hướng nhìn, biển vẫy, chữ nổi và ánh sáng.",
    lead:
      "Nhà lô góc có lợi thế nhìn từ nhiều hướng, nhưng cần thiết kế biển sao cho không bị rối. Nên xác định hướng khách đi qua nhiều nhất, hướng nào cần tên lớn, hướng nào cần biển phụ hoặc biển vẫy.",
    fit: [
      "Cửa hàng nằm ở góc phố, ngã ba, ngã tư hoặc mặt tiền giao đường.",
      "Nhà hàng, cafe, shop, salon, phòng khám, showroom có hai mặt nhìn.",
      "Cần tận dụng cả mặt ngang và mặt dọc để khách nhận ra từ xa.",
      "Cần ánh sáng buổi tối nhưng không muốn biển quá chói hoặc rối."
    ],
    suggestions: [
      "Xác định mặt chính theo hướng khách nhìn nhiều nhất.",
      "Dùng một nhận diện thống nhất cho hai mặt biển để không bị lệch thương hiệu.",
      "Kết hợp biển vẫy hoặc biển dọc để bắt tầm nhìn từ góc rẽ.",
      "Kiểm tra quy định mặt bằng, điểm bắt khung và hướng gió ở góc nhà."
    ],
    avoid:
      "Không nên làm hai mặt biển như hai thiết kế khác nhau. Nhà lô góc cần đồng bộ để khách nhận ra cùng một thương hiệu.",
    related: [
      ["Biển vẫy cửa hàng Hà Nội", "bien-vay-cua-hang-ha-noi"],
      ["Làm biển quảng cáo buổi tối", "lam-bien-quang-cao-buoi-toi-ha-noi"],
      ["Báo giá biển hộp đèn hai mặt", "bao-gia-bien-hop-den-hai-mat-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-doi-thuong-hieu-ha-noi",
    title: "Làm biển quảng cáo đổi thương hiệu Hà Nội",
    kicker: "Thay biển khi đổi nhận diện",
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    description:
      "Làm biển quảng cáo khi đổi thương hiệu tại Hà Nội: tư vấn tận dụng khung cũ, thay mặt biển, chữ nổi, LED, decal và biển phụ.",
    lead:
      "Khi đổi thương hiệu, không phải lúc nào cũng cần tháo bỏ toàn bộ biển cũ. Nên kiểm tra khung, mặt nền, hệ LED và vị trí treo để quyết định phần nào tận dụng, phần nào phải làm mới.",
    fit: [
      "Cửa hàng đổi tên, đổi logo, đổi màu nhận diện hoặc sang ngành hàng mới.",
      "Biển cũ còn khung tốt nhưng nội dung, màu sắc hoặc ánh sáng đã lỗi thời.",
      "Cần thay nhanh để kịp khai trương lại hoặc mở chiến dịch mới.",
      "Muốn đồng bộ biển mặt tiền, biển vẫy, decal kính và biển trong nhà."
    ],
    suggestions: [
      "Chụp hiện trạng biển cũ, khung, mặt hông và vị trí nguồn điện.",
      "Kiểm tra phần nào có thể giữ lại để tiết kiệm chi phí.",
      "Ưu tiên cập nhật mặt tiền chính trước, các hạng mục phụ làm theo giai đoạn.",
      "Đồng bộ màu, font, logo giữa biển ngoài trời và nhận diện trong cửa hàng."
    ],
    avoid:
      "Không nên chỉ thay logo trên nền cũ nếu màu nền, ánh sáng hoặc tỷ lệ chữ không còn hợp nhận diện mới.",
    related: [
      ["Sửa chữa biển quảng cáo Hà Nội", "sua-chua-bien-quang-cao-ha-noi"],
      ["Thay mặt bạt biển quảng cáo", "thay-mat-bat-bien-quang-cao-ha-noi"],
      ["Làm biển quảng cáo khai trương gấp", "lam-bien-quang-cao-khai-truong-gap-ha-noi"]
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

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
}

function relatedLinks(links) {
  return links.map(([label, slug]) => `<a href="../${slug}/">${escapeHtml(label)}</a>`).join("\n              ");
}

function renderHeader(activeLabel = "Mặt bằng") {
  return `<header class="site-header" data-header>
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
          <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Hạng mục</a>
          <a href="../${hub.slug}/">${escapeHtml(activeLabel)}</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  return `<footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="../assets/images/logo-whitelotus.png" alt="Bông Sen Trắng Communication" width="220" height="53">
          <p>${business.displayName} sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội.</p>
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
    </div>`;
}

function renderHub() {
  const pageUrl = `${baseUrl}/${hub.slug}/`;
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.title,
    description: hub.description,
    url: pageUrl,
    itemListElement: pages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: `${baseUrl}/${page.slug}/`
    }))
  };

  const cards = pages
    .map(
      (page) => `
                <a href="../${page.slug}/">
                  <strong>${escapeHtml(page.title)}</strong>
                  <span>${escapeHtml(page.lead)}</span>
                </a>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(hub.title)} | Bông Sen Trắng</title>
    <meta name="description" content="${escapeHtml(hub.description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(hub.title)}">
    <meta property="og:description" content="${escapeHtml(hub.description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <meta property="og:image:alt" content="${escapeHtml(hub.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(hub.title)}">
    <meta name="twitter:description" content="${escapeHtml(hub.description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <script type="application/ld+json">
${JSON.stringify(itemListJson, null, 2)}
    </script>
  </head>
  <body>
    <a class="skip-link" href="#noi-dung">Chuyển tới nội dung</a>
    ${renderHeader()}
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Theo mặt bằng</span>
            </nav>
            <p class="section-kicker">Làm biển theo mặt bằng thực tế</p>
            <h1>${escapeHtml(hub.title)}</h1>
            <p>Mỗi mặt bằng cần cách làm biển khác nhau. Mặt tiền hẹp cần gọn và rõ, tầng 2 cần chữ lớn, trong ngõ cần chỉ dẫn, nhà lô góc cần xử lý hai hướng nhìn. Chọn đúng tình huống để có phương án tiết kiệm và dễ ra khách hơn.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" alt="${escapeHtml(hub.title)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>
      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block sitemap-group">
            <h2>Chọn tình huống mặt bằng</h2>
            <div class="sitemap-grid">
${cards}
            </div>
          </section>
        </div>
      </section>
    </main>
    ${renderFooter()}
    <script src="../assets/js/main.js"></script>
  </body>
</html>`;
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const faqs = [
    [
      `Báo giá ${page.title.toLowerCase()} cần gửi gì?`,
      "Cần gửi ảnh mặt tiền hoặc vị trí lắp, kích thước dự kiến, địa chỉ tại Hà Nội, logo/nội dung cần làm và thời gian mong muốn hoàn thiện."
    ],
    [
      "Có cần khảo sát trước khi thi công không?",
      "Với biển treo cao, mặt bằng khó, cần kiểm tra khung cũ, nguồn điện hoặc điểm bắt, nên khảo sát trước để tránh sai kích thước và phát sinh."
    ],
    [
      "Có phương án tiết kiệm chi phí không?",
      "Có. Nếu khung cũ, mặt nền hoặc nguồn điện còn dùng được, có thể tận dụng một phần và ưu tiên làm hạng mục tạo nhận diện tốt nhất trước."
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
        areaServed: "Hà Nội"
      },
      {
        "@type": "Service",
        name: page.title,
        description: page.description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: "Hà Nội",
        serviceType: "Làm biển quảng cáo theo mặt bằng"
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
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(page.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/${page.image}">
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body>
    <a class="skip-link" href="#noi-dung">Chuyển tới nội dung</a>
    ${renderHeader()}
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <a href="../${hub.slug}/">Theo mặt bằng</a>
              <span>/</span>
              <span>${escapeHtml(page.title)}</span>
            </nav>
            <p class="section-kicker">${escapeHtml(page.kicker)}</p>
            <h1>${escapeHtml(page.title)}</h1>
            <p>${escapeHtml(page.lead)}</p>
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
              <h2>Mặt bằng này thường gặp khi nào?</h2>
              <ul class="area-list">
                ${listItems(page.fit)}
              </ul>
            </section>
            <section class="content-block">
              <h2>Phương án nên ưu tiên</h2>
              <ul class="check-list">
                ${listItems(page.suggestions)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Điểm cần tránh</h2>
              <p>${escapeHtml(page.avoid)}</p>
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
              <h2>Gửi ảnh mặt bằng</h2>
              <p>Chụp mặt tiền hoặc vị trí cần lắp, gửi qua Zalo để tư vấn bố cục, vật liệu và chi phí.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../${hub.slug}/">Biển theo mặt bằng</a>
              ${relatedLinks(page.related)}
            </div>
            <address class="sidebar-card">
              <strong>${business.displayName}</strong>
              <span>${business.address}</span>
            </address>
          </aside>
        </div>
      </section>
    </main>
    ${renderFooter()}
    <script src="../assets/js/main.js"></script>
  </body>
</html>`;
}

fs.mkdirSync(path.join(root, hub.slug), { recursive: true });
fs.writeFileSync(path.join(root, hub.slug, "index.html"), renderHub(), "utf8");

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} site-condition SEO pages and hub`);
