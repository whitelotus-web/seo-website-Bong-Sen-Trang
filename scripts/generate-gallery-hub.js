const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "hinh-anh-bien-quang-cao-thuc-te-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const categories = [
  {
    title: "Mẫu biển nhà hàng, quán ăn, cafe",
    intro: "Nhóm biển cần nhìn rõ từ xa, sáng tốt buổi tối và giữ đúng màu thương hiệu trên mặt tiền.",
    links: [
      ["Biển nhà hàng", "../bien-quang-cao-nha-hang-ha-noi/"],
      ["Biển quán ăn", "../bien-quang-cao-quan-an-ha-noi/"],
      ["Biển cafe, trà sữa", "../bien-quang-cao-cafe-tra-sua-ha-noi/"]
    ],
    images: [
      ["du-an-bien-bep-ba-son-hoi-an.jpg", "Dự án biển nhà hàng Bếp Bà Sơn Hội An với chữ nổi phát sáng"],
      ["du-an-bep-ba-son-hoi-an-ban-ngay.jpg", "Dự án biển nhà hàng Bếp Bà Sơn Hội An chụp ban ngày, bố cục chữ rõ"],
      ["du-an-bien-tien-coffee.jpg", "Biển cafe tông sáng, chữ lớn, hợp cửa hàng cần mặt tiền gọn và dễ nhìn"]
    ]
  },
  {
    title: "Mẫu biển shop, showroom, cửa hàng",
    intro: "Biển cho bán lẻ nên ưu tiên tên thương hiệu lớn, màu nhận diện rõ, có thể kết hợp biển dọc hoặc hộp đèn để tăng điểm nhìn.",
    links: [
      ["Biển shop thời trang", "../bien-shop-thoi-trang-ha-noi/"],
      ["Biển showroom, văn phòng", "../bien-quang-cao-showroom-van-phong-ha-noi/"],
      ["Làm bảng hiệu cửa hàng", "../lam-bang-hieu-cua-hang-ha-noi/"]
    ],
    images: [
      ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền cửa hàng tông đỏ nổi bật, chữ lớn dễ nhận diện trên phố"],
      ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển showroom có chữ phát sáng, phù hợp cửa hàng cần nhìn rõ buổi tối"],
      ["du-an-wet-brush-bien-mat-tien.jpg", "Biển mặt tiền cửa hàng kết hợp chữ nổi và hình ảnh sản phẩm"]
    ]
  },
  {
    title: "Mẫu biển spa, salon, clinic",
    intro: "Nhóm ngành làm đẹp và phòng khám cần biển sáng sạch, chữ gọn, ánh sáng đều và cảm giác tin cậy.",
    links: [
      ["Biển spa, salon", "../bien-quang-cao-spa-salon-ha-noi/"],
      ["Biển phòng khám, nhà thuốc", "../bien-phong-kham-nha-thuoc-ha-noi/"],
      ["Chữ nổi mica, inox", "../chu-noi-mica-inox-ha-noi/"]
    ],
    images: [
      ["du-an-may-skin-bien-chu-noi-sang.jpg", "Biển chữ nổi phát sáng cho spa, salon hoặc clinic"],
      ["du-an-sct-clinic-chu-noi-led.jpg", "Biển clinic chữ nổi LED, bố cục sáng và dễ đọc"],
      ["du-an-sqt-clinic-backdrop-le-tan.jpg", "Backdrop lễ tân cho clinic, logo chữ nổi trong nhà"]
    ]
  },
  {
    title: "Mẫu chữ nổi, backdrop, logo văn phòng",
    intro: "Phù hợp công ty, văn phòng, lễ tân, trường học hoặc đơn vị cần nhận diện gọn và bền.",
    links: [
      ["Chữ nổi mica, inox", "../chu-noi-mica-inox-ha-noi/"],
      ["Biển công ty", "../bien-cong-ty-ha-noi/"],
      ["Năng lực thi công", "../nang-luc-thi-cong-bien-quang-cao-ha-noi/"]
    ],
    images: [
      ["du-an-sb-invest-backdrop-le-tan.jpg", "Backdrop lễ tân chữ nổi, phù hợp văn phòng cần hình ảnh chuyên nghiệp"],
      ["du-an-logo-m-led-noi-that.jpg", "Logo chữ nổi có LED cho không gian nội thất"],
      ["du-an-chu-noi-khoa-kinh-te.jpg", "Chữ nổi kích thước lớn cho khu vực trường học hoặc tổ chức"]
    ]
  },
  {
    title: "Mẫu biển hộp đèn, LED, mặt dựng",
    intro: "Dành cho vị trí cần sáng mạnh, dễ nhìn ban đêm, mặt tiền rộng hoặc tuyến phố đông người qua lại.",
    links: [
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
      ["Báo giá hộp đèn LED", "../bao-gia-bien-hop-den-led-ha-noi/"],
      ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    images: [
      ["du-an-hisuhi-wet-brush-mat-dung-led.jpg", "Biển mặt dựng lớn kết hợp hộp đèn và LED cho mặt tiền nổi bật"],
      ["du-an-bien-kong-billiards.jpg", "Biển hộp đèn và chữ sáng cho mô hình giải trí, nhìn tốt vào buổi tối"],
      ["du-an-bien-the-fox-fitness.jpg", "Biển mặt tiền phòng tập với chữ lớn và ánh sáng rõ"]
    ]
  }
];

const faqs = [
  ["Xem mẫu biển rồi có báo giá ngay được không?", "Có thể báo giá sơ bộ nếu có ảnh mặt tiền và kích thước dự kiến. Giá chốt cần kiểm tra thêm vật liệu, độ cao lắp đặt, hệ khung, LED và điều kiện thi công thực tế."],
  ["Nên chọn biển alu chữ nổi hay hộp đèn LED?", "Nếu cần mặt tiền bền và nhìn chuyên nghiệp, thường ưu tiên alu chữ nổi. Nếu cần sáng mạnh buổi tối hoặc biển vẫy, hộp đèn LED phù hợp hơn. Có thể kết hợp cả hai nếu mặt tiền cần nổi bật."],
  ["Tôi chỉ có ảnh mẫu trên mạng, có làm theo được không?", "Có. Anh/chị gửi ảnh mẫu, ảnh mặt tiền và kích thước dự kiến qua Zalo. Bông Sen Trắng sẽ tư vấn lại phương án phù hợp mặt bằng, ngân sách và quy định thi công."],
  ["Biển đẹp có nhất thiết phải làm rất đắt không?", "Không nhất thiết. Biển hiệu quả là biển dễ đọc, đúng màu thương hiệu, bền với vị trí lắp đặt và đủ nổi bật so với xung quanh. Có thể tối ưu chi phí bằng cách chọn đúng vật liệu và giảm chi tiết không cần thiết."]
];

const allImages = categories.flatMap((category) =>
  category.images.map(([file, alt]) => ({ file, alt, category: category.title }))
);

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
        name: "Hà Nội"
      }
    },
    {
      "@type": "CollectionPage",
      name: "Mẫu biển quảng cáo đẹp tại Hà Nội theo từng ngành",
      description: "Hình ảnh biển quảng cáo thực tế theo ngành: nhà hàng, cafe, shop, showroom, spa, clinic, chữ nổi, backdrop, hộp đèn LED.",
      url: pageUrl,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: {
        "@type": "Service",
        name: "Thi công biển quảng cáo tại Hà Nội",
        provider: { "@id": `${baseUrl}/#localbusiness` }
      }
    },
    {
      "@type": "ItemList",
      name: "Danh sách mẫu biển quảng cáo thực tế",
      itemListElement: allImages.map((image, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: image.alt,
        item: {
          "@type": "ImageObject",
          contentUrl: `${baseUrl}/assets/images/${image.file}`,
          caption: image.alt
        }
      }))
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

function linksHtml(links) {
  return links
    .map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`)
    .join("\n                    ");
}

function categoryHtml(category) {
  return `
            <section class="content-block gallery-category">
              <div class="gallery-category-head">
                <div>
                  <h2>${escapeHtml(category.title)}</h2>
                  <p>${escapeHtml(category.intro)}</p>
                </div>
                <div class="gallery-link-row">
                  ${linksHtml(category.links)}
                </div>
              </div>
              <div class="case-gallery gallery-hub-grid">
                ${category.images
                  .map(
                    ([file, alt]) => `
                <figure>
                  <img src="../assets/images/${file}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="900" height="675">
                  <figcaption>${escapeHtml(alt)}</figcaption>
                </figure>`
                  )
                  .join("\n                ")}
              </div>
            </section>`;
}

const categoriesHtml = categories.map(categoryHtml).join("\n");
const faqHtml = faqs
  .map(
    ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
  )
  .join("\n");

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mẫu biển quảng cáo thực tế tại Hà Nội | Bông Sen Trắng</title>
    <meta name="description" content="Xem ảnh thi công biển quảng cáo thực tế: nhà hàng, cafe, shop, showroom, spa, clinic, chữ nổi, backdrop, hộp đèn LED. Gửi ảnh mặt tiền qua Zalo 0989 521 881.">
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
    <meta property="og:title" content="Mẫu biển quảng cáo thực tế tại Hà Nội">
    <meta property="og:description" content="Xem ảnh thi công thật cho nhà hàng, cafe, shop, showroom, spa, clinic, chữ nổi, backdrop và hộp đèn LED.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <meta property="og:image:alt" content="Biển mặt tiền cửa hàng thi công thực tế">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mẫu biển quảng cáo thực tế tại Hà Nội">
    <meta name="twitter:description" content="Xem ảnh biển thực tế và gửi mẫu qua Zalo để nhận báo giá thi công.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
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
          <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực</a>
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
              <span>Mẫu biển quảng cáo</span>
            </nav>
            <p class="section-kicker">Hình ảnh thi công thực tế</p>
            <h1>Mẫu biển quảng cáo thực tế theo từng ngành tại Hà Nội</h1>
            <p>Xem nhanh các hạng mục Bông Sen Trắng đã thực hiện và nhóm ý tưởng phù hợp cho nhà hàng, cafe, shop, showroom, spa, clinic, văn phòng, hộp đèn LED. Nếu thấy mẫu gần giống nhu cầu, chụp lại và gửi qua Zalo để nhận tư vấn vật liệu, kích thước và báo giá.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi mẫu qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" alt="Biển mặt tiền cửa hàng thi công thực tế" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Ảnh thật giúp chọn đúng phương án, không chỉ chọn mẫu đẹp</h2>
              <p>Đừng chỉ chọn mẫu vì đẹp trên ảnh. Biển cần hợp vị trí nhìn, chiều ngang mặt tiền, khoảng cách người đi đường, ánh sáng buổi tối, vật liệu nền và ngân sách. Bông Sen Trắng ưu tiên phương án dễ đọc, đúng nhận diện và thi công bền theo mặt bằng thực tế.</p>
            </section>

            <section class="content-block">
              <h2>Cách xem ảnh thi công trong trang này</h2>
              <p>Ảnh là hạng mục thực tế Bông Sen Trắng đã thi công, được sắp theo nhóm nhu cầu thay vì chỉ theo tên khách hàng. Một số ảnh có thể là dự án ngoài Hà Nội; chúng được dùng để thể hiện kiểu biển, vật liệu và cách hoàn thiện, không dùng để khẳng định địa chỉ công trình tại Hà Nội.</p>
              <ul class="check-list">
                <li>Nhìn bố cục tên thương hiệu, ngành hàng và số điện thoại từ khoảng cách xa.</li>
                <li>So sánh cách dùng nền alu, chữ nổi, hộp đèn hoặc biển vẫy với mặt tiền của mình.</li>
                <li>Xem ảnh ban đêm nếu cửa hàng có giờ hoạt động tối hoặc nằm trên phố nhiều ánh sáng.</li>
                <li>Gửi ảnh mẫu kèm ảnh mặt tiền để nhận tư vấn theo kích thước và ngân sách thực tế.</li>
              </ul>
            </section>

${categoriesHtml}

            <section class="content-block">
              <h2>Muốn báo giá nhanh, gửi 4 thông tin này</h2>
              <ol class="step-list">
                <li>Ảnh mặt tiền chụp thẳng và chụp toàn cảnh khu vực lắp biển.</li>
                <li>Kích thước ngang x cao dự kiến, hoặc kích thước biển cũ nếu thay mới.</li>
                <li>Mẫu biển thích trong trang này hoặc ảnh tham khảo khác.</li>
                <li>Địa chỉ lắp đặt tại Hà Nội và thời gian cần hoàn thiện.</li>
              </ol>
              <p>Xem thêm <a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">cách chụp ảnh mặt tiền và mẫu tin nhắn Zalo để báo giá</a> nếu anh/chị chưa biết cần gửi thông tin nào trước.</p>
            </section>

            <section class="content-block">
              <h2>Xem tiếp theo nhu cầu</h2>
              <div class="price-link-grid compact">
                <a href="../bao-gia-bien-quang-cao-ha-noi/">
                  <strong>Bảng giá biển quảng cáo 2026</strong>
                  <span>Xem khung giá tham khảo cho Hiflex, alu chữ nổi, hộp đèn, biển vẫy và backdrop.</span>
                </a>
                <a href="../thi-cong-bien-quang-cao-ha-noi/">
                  <strong>Thi công biển quảng cáo Hà Nội</strong>
                  <span>Trang dịch vụ chính cho khách cần sản xuất, lắp đặt biển mới.</span>
                </a>
                <a href="../lam-bien-quang-cao-nhanh-ha-noi/">
                  <strong>Làm biển quảng cáo nhanh</strong>
                  <span>Phù hợp cửa hàng cần kịp khai trương hoặc thay biển gấp.</span>
                </a>
                <a href="../sua-chua-bien-quang-cao-ha-noi/">
                  <strong>Sửa chữa, thay mặt biển cũ</strong>
                  <span>Kiểm tra biển xuống màu, hỏng LED, bong mặt hoặc cần thay nội dung.</span>
                </a>
              </div>
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
              <h2>Gửi mẫu để báo giá</h2>
              <p>Chụp mẫu biển anh/chị thích, gửi kèm ảnh mặt tiền và kích thước dự kiến qua Zalo. Tôi sẽ tư vấn kiểu biển, vật liệu và ngân sách phù hợp.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực thi công</a>
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
              <a href="../lam-bien-quang-cao-dong-da/">Làm biển quảng cáo Đống Đa</a>
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
            <a href="${business.facebookUrl}" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
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
</html>
`;

fs.mkdirSync(path.join(root, slug), { recursive: true });
fs.writeFileSync(path.join(root, slug, "index.html"), html, "utf8");

console.log(`Generated gallery hub: ${slug}`);
