const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "lam-bien-quang-cao-ha-noi";
const pageUrl = `${baseUrl}/${slug}/`;

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const districts = [
  ["Đống Đa", "../lam-bien-quang-cao-dong-da/", "Gần địa chỉ 92E Ô Chợ Dừa, thuận tiện khảo sát mặt bằng nội thành."],
  ["Ba Đình", "../lam-bien-quang-cao-ba-dinh/", "Phù hợp cửa hàng, văn phòng, showroom trên các tuyến phố trung tâm."],
  ["Cầu Giấy", "../lam-bien-quang-cao-cau-giay/", "Nhu cầu biển shop, spa, showroom, văn phòng và biển hộp đèn khá cao."],
  ["Hoàn Kiếm", "../lam-bien-quang-cao-hoan-kiem/", "Ưu tiên biển dễ đọc, gọn, đúng nhận diện cho mặt phố đông người."],
  ["Hai Bà Trưng", "../lam-bien-quang-cao-hai-ba-trung/", "Nhận tư vấn biển cửa hàng, nhà hàng, clinic, salon, công ty."],
  ["Thanh Xuân", "../lam-bien-quang-cao-thanh-xuan/", "Hợp nhóm cửa hàng mặt phố, đại lý, showroom và biển sửa/thay mới."],
  ["Hoàng Mai", "../lam-bien-quang-cao-hoang-mai/", "Nhận làm biển quảng cáo mới, sửa biển cũ, thay mặt bạt, thay LED."],
  ["Hà Đông", "../lam-bien-quang-cao-ha-dong/", "Tư vấn phương án tiết kiệm cho cửa hàng, spa, nhà hàng, showroom."],
  ["Tây Hồ", "../lam-bien-quang-cao-tay-ho/", "Phù hợp nhà hàng, cafe, dịch vụ, showroom cần biển có thẩm mỹ."],
  ["Long Biên", "../lam-bien-quang-cao-long-bien/", "Nhận hạng mục biển mặt tiền, hộp đèn, alu chữ nổi, biển công ty."],
  ["Nam Từ Liêm", "../lam-bien-quang-cao-nam-tu-liem/", "Phục vụ showroom, văn phòng, shop, biển công ty và khu dịch vụ."],
  ["Bắc Từ Liêm", "../lam-bien-quang-cao-bac-tu-liem/", "Nhận khảo sát, sản xuất, lắp đặt biển theo mặt bằng thực tế."],
  ["Gia Lâm", "../lam-bien-quang-cao-gia-lam/", "Nhận làm biển mặt tiền, biển khai trương, biển hộp đèn, biển alu."]
];

const serviceLinks = [
  ["Thi công biển quảng cáo", "../thi-cong-bien-quang-cao-ha-noi/", "Dịch vụ chính cho khách cần làm biển mới tại Hà Nội."],
  ["Báo giá biển quảng cáo 2026", "../bao-gia-bien-quang-cao-ha-noi/", "Khung giá tham khảo theo vật liệu và hạng mục thi công."],
  ["Gửi ảnh mặt tiền để báo giá", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/", "Bốn thông tin nên gửi qua Zalo để được tư vấn sát nhu cầu hơn."],
  ["Làm biển mặt tiền cửa hàng", "../lam-bien-mat-tien-cua-hang-ha-noi/", "Chọn bố cục, vật liệu và ánh sáng theo vị trí lắp đặt thực tế."],
  ["Làm biển quảng cáo cần gấp", "../lam-bien-quang-cao-can-gap-ha-noi/", "Kiểm tra khả năng đáp ứng theo ngày khai trương và độ khó công trình."],
  ["Sửa chữa biển quảng cáo", "../sua-chua-bien-quang-cao-ha-noi/", "Thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn, gia cố khung."],
  ["Làm biển quảng cáo gần đây", "../lam-bien-quang-cao-gan-day-ha-noi/", "Tìm khu vực phục vụ gần địa chỉ lắp đặt tại Hà Nội."],
  ["Biển theo ngành hàng", "../bien-quang-cao-theo-nganh-ha-noi/", "Shop quần áo, cafe, quán ăn, trà sữa, nail spa, salon tóc, nhà thuốc, gara."],
  ["Theo tuyến đường, phường", "../lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi/", "Các tuyến và phường như Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc, Tây Sơn."],
  ["Mẫu biển thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/", "Xem ảnh công trình theo ngành trước khi chọn vật liệu và báo giá."],
  ["Năng lực thi công", "../nang-luc-thi-cong-bien-quang-cao-ha-noi/", "Quy trình, vật liệu, ảnh thực tế và cách Bông Sen Trắng triển khai."]
];

const projectImages = [
  ["du-an-may-skin-bien-chu-noi-sang.jpg", "Biển chữ nổi phát sáng cho mặt tiền cửa hàng làm đẹp", "Chữ nổi phát sáng trên nền sáng, phù hợp cửa hàng cần mặt tiền gọn và dễ nhận diện."],
  ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền màu đỏ kết hợp chữ nổi", "Biển chính kết hợp biển dọc giúp khách nhìn thương hiệu từ nhiều hướng tiếp cận."],
  ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển showroom chữ nổi phát sáng buổi tối", "Chữ phát sáng rõ trên nền tối, phù hợp showroom và cửa hàng hoạt động buổi tối."],
  ["du-an-sb-invest-backdrop-le-tan.jpg", "Logo chữ nổi và backdrop khu lễ tân", "Hạng mục nhận diện trong nhà cần đúng tỉ lệ, màu sắc và bề mặt hoàn thiện."]
];

const materialLinks = [
  ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
  ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
  ["Biển bạt Hiflex", "../bien-bat-hiflex-ha-noi/"],
  ["Chữ nổi mica/inox", "../chu-noi-mica-inox-ha-noi/"],
  ["Biển nhà hàng", "../bien-quang-cao-nha-hang-ha-noi/"],
  ["Biển cafe, trà sữa", "../bien-quang-cao-cafe-tra-sua-ha-noi/"],
  ["Biển spa, salon", "../bien-quang-cao-spa-salon-ha-noi/"],
  ["Biển shop thời trang", "../bien-shop-thoi-trang-ha-noi/"],
  ["Biển showroom, văn phòng", "../bien-quang-cao-showroom-van-phong-ha-noi/"]
];

const faqs = [
  ["Bông Sen Trắng nhận làm biển quảng cáo ở khu vực nào tại Hà Nội?", "Ưu tiên nội thành và các khu vực lân cận như Đống Đa, Ba Đình, Cầu Giấy, Hoàn Kiếm, Hai Bà Trưng, Thanh Xuân, Hoàng Mai, Hà Đông, Tây Hồ, Long Biên, Nam Từ Liêm, Bắc Từ Liêm, Gia Lâm."],
  ["Muốn báo giá làm biển quảng cáo Hà Nội cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ lắp đặt, mẫu biển thích hoặc file thiết kế nếu có. Có ảnh rõ thì báo giá nhanh và sát hơn."],
  ["Có khảo sát trực tiếp trước khi thi công không?", "Với biển lớn, biển cao, mặt bằng khó hoặc cần kiểm tra khung/điện, nên khảo sát trực tiếp trước khi chốt phương án để hạn chế sai kích thước và rủi ro thi công."],
  ["Có nhận sửa biển cũ tại Hà Nội không?", "Có. Nhận thay mặt bạt, thay LED, thay nguồn, sửa hộp đèn, thay chữ nổi, gia cố khung và tư vấn khi nào nên sửa hoặc làm mới."]
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardGrid(items) {
  return items
    .map(
      ([label, href, text]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
    )
    .join("\n");
}

const districtHtml = districts
  .map(
    ([name, href, text]) => `
                <a href="${href}">
                  <strong>${escapeHtml(name)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
  )
  .join("\n");

const materialHtml = materialLinks
  .map(([label, href]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`)
  .join("\n                ");

const projectHtml = projectImages
  .map(
    ([image, alt, caption]) => `
                <figure>
                  <img src="../assets/images/${image}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(caption)}</figcaption>
                </figure>`
  )
  .join("\n");

const faqHtml = faqs
  .map(
    ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
  )
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
      areaServed: districts.map(([name]) => ({
        "@type": "AdministrativeArea",
        name: `${name}, Hà Nội`
      }))
    },
    {
      "@type": "Service",
      name: "Làm biển quảng cáo tại Hà Nội",
      description: "Sản xuất, thi công, lắp đặt, sửa chữa biển quảng cáo tại Hà Nội cho cửa hàng, nhà hàng, cafe, spa, showroom, văn phòng.",
      provider: { "@id": `${baseUrl}/#localbusiness` },
      areaServed: "Hà Nội",
      serviceType: "Làm biển quảng cáo"
    },
    {
      "@type": "ItemList",
      name: "Khu vực làm biển quảng cáo tại Hà Nội",
      itemListElement: districts.map(([name, href], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Làm biển quảng cáo ${name}`,
        url: `${baseUrl}/${href.replace("../", "").replace("/", "")}/`
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

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Làm biển quảng cáo Hà Nội | Thi công, sửa chữa</title>
    <meta name="description" content="Làm biển quảng cáo Hà Nội: alu chữ nổi, hộp đèn LED, Hiflex, sửa biển cũ. Bông Sen Trắng tại 92E Ô Chợ Dừa. Gửi ảnh qua Zalo 0989 521 881.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/hero-bien-quang-cao-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo Hà Nội | Bông Sen Trắng">
    <meta property="og:description" content="Thi công, sửa chữa biển quảng cáo tại Hà Nội. Xem phương án theo mặt bằng và gửi ảnh qua Zalo để nhận tư vấn.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta property="og:image:alt" content="Làm biển quảng cáo tại Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo Hà Nội | Bông Sen Trắng">
    <meta name="twitter:description" content="Thi công bảng hiệu, alu chữ nổi, hộp đèn LED, Hiflex và sửa biển cũ tại Hà Nội.">
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
              <span>Làm biển quảng cáo Hà Nội</span>
            </nav>
            <p class="section-kicker">Dịch vụ local Hà Nội</p>
            <h1>Làm biển quảng cáo tại Hà Nội</h1>
            <p>Bông Sen Trắng nhận sản xuất, thi công, lắp đặt và sửa chữa biển quảng cáo tại Hà Nội: biển alu chữ nổi, biển hộp đèn LED, biển bạt Hiflex, chữ nổi mica/inox, biển nhà hàng, cafe, spa, showroom, văn phòng. Gửi ảnh mặt tiền qua Zalo để nhận tư vấn phương án và báo giá sát thực tế.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Làm biển quảng cáo tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Địa chỉ rõ tại Đống Đa, phục vụ khách hàng Hà Nội</h2>
              <p>Bông Sen Trắng có thông tin doanh nghiệp tại <strong>${business.address}</strong>. Khi báo giá biển quảng cáo, yếu tố địa phương rất quan trọng: vị trí mặt tiền, chiều cao lắp đặt, tuyến phố, quy mô biển, điện cấp cho LED và điều kiện vận chuyển/thi công.</p>
            </section>

            <section class="content-block">
              <h2>Chọn biển theo mặt bằng và thời điểm khách nhìn thấy</h2>
              <p>Không có một cấu hình phù hợp cho mọi cửa hàng. Biển nên được chọn theo khoảng cách nhìn, giờ hoạt động, diện tích mặt tiền, màu nhận diện và thời gian dự kiến sử dụng.</p>
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Tình huống</th>
                      <th>Phương án nên cân nhắc</th>
                      <th>Điểm cần kiểm tra</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cửa hàng mặt phố</strong></td>
                      <td>Alu kết hợp chữ nổi mica hoặc inox</td>
                      <td>Tỉ lệ chữ, độ tương phản và hướng khách tiếp cận</td>
                    </tr>
                    <tr>
                      <td><strong>Quán ăn, cafe bán tối</strong></td>
                      <td>Hộp đèn, chữ nổi LED hoặc biển vẫy</td>
                      <td>Độ sáng, khả năng đọc khi đi ngang và vị trí cấp điện</td>
                    </tr>
                    <tr>
                      <td><strong>Cửa hàng trong ngõ</strong></td>
                      <td>Biển vẫy hoặc hộp đèn hai mặt kết hợp biển chính</td>
                      <td>Góc nhìn từ đầu ngõ và khoảng nhô ra an toàn</td>
                    </tr>
                    <tr>
                      <td><strong>Showroom, văn phòng</strong></td>
                      <td>Chữ nổi, logo và backdrop nhận diện</td>
                      <td>Màu thương hiệu, kích thước logo và bề mặt hoàn thiện</td>
                    </tr>
                    <tr>
                      <td><strong>Biển cũ xuống màu, mất sáng</strong></td>
                      <td>Kiểm tra trước khi sửa hoặc thay mới</td>
                      <td>Khung, mặt biển, chữ, LED, nguồn và đường điện</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="content-block">
              <h2>Chọn đúng nhu cầu làm biển quảng cáo tại Hà Nội</h2>
              <p>Các trang dưới đây đi thẳng vào những việc khách thường cần: làm mới, hỏi giá, gửi ảnh mặt tiền, sửa biển cũ hoặc cần hoàn thiện trước ngày khai trương.</p>
              <div class="price-link-grid compact">
${cardGrid(serviceLinks)}
              </div>
            </section>

            <section class="content-block">
              <h2>Khu vực nhận làm biển quảng cáo tại Hà Nội</h2>
              <p>Danh sách dưới đây giúp anh/chị chọn đúng khu vực cần khảo sát, tư vấn vật liệu và báo giá sát hơn theo mặt bằng thực tế.</p>
              <div class="sitemap-grid local-grid">
${districtHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Loại biển và ngành hàng thường làm tại Hà Nội</h2>
              <ul class="area-list material-list" aria-label="Loại biển quảng cáo tại Hà Nội">
                ${materialHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Ảnh hạng mục Bông Sen Trắng đã thực hiện</h2>
              <p>Ảnh thực tế giúp đối chiếu cách dùng chữ nổi, ánh sáng, biển dọc và logo trong nhà trước khi chọn phương án cho mặt bằng mới.</p>
              <div class="case-gallery">
${projectHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Gửi gì để nhận báo giá sát hơn?</h2>
              <p>Chỉ cần bắt đầu bằng bốn thông tin: ảnh chụp thẳng mặt tiền, kích thước ngang x cao nếu đã có, địa chỉ lắp đặt và mẫu biển mong muốn. Nếu có ngày khai trương, hãy gửi kèm để kiểm tra tiến độ trước khi chốt.</p>
              <p>Báo giá cuối cùng nên làm rõ vật liệu nền, chữ hoặc logo, hệ khung, LED và nguồn, phần tháo dỡ nếu có, chi phí lắp đặt và phạm vi bảo hành. <a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">Xem hướng dẫn gửi ảnh báo giá</a> hoặc <a href="../bao-gia-bien-quang-cao-ha-noi/">xem khung giá tham khảo</a>.</p>
            </section>

            <section class="content-block">
              <h2>Quy trình báo giá nhanh tại Hà Nội</h2>
              <ol class="step-list">
                <li>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo.</li>
                <li>Xác định nhu cầu: làm mới, sửa biển cũ, thay mặt bạt, thay LED, làm biển khai trương hay nâng cấp nhận diện.</li>
                <li>Tư vấn vật liệu phù hợp: Hiflex, alu, mica, inox, hộp đèn, LED, chữ nổi.</li>
                <li>Báo giá sơ bộ, sau đó khảo sát nếu biển lớn, biển cao hoặc mặt bằng phức tạp.</li>
                <li>Sản xuất, lắp đặt, kiểm tra hoàn thiện và hỗ trợ bảo hành theo hạng mục.</li>
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
              <h2>Báo giá biển tại Hà Nội</h2>
              <p>Gửi ảnh mặt tiền, kích thước, địa chỉ lắp đặt và mẫu biển mong muốn. Có thông tin rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang quan trọng</h2>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển thực tế</a>
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
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

console.log(`Generated Hanoi local hub: ${slug}`);
