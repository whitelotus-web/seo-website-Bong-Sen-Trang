const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "bao-gia-bien-quang-cao-ha-noi";
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

const priceRows = [
  ["Biển bạt Hiflex khung sắt", "180.000 - 350.000đ/m2", "Phù hợp bảng hiệu tạm, khai trương, biển diện tích lớn cần tối ưu chi phí."],
  ["Biển bạt Hiflex có lót tôn", "300.000 - 450.000đ/m2", "Cứng cáp hơn bạt thường, dùng tốt cho mặt tiền ngoài trời."],
  ["Nền Alu/Alcorest chữ nổi", "480.000đ/m2 trở lên", "Giá thay đổi theo độ dày alu, khung xương, loại chữ nổi và độ cao thi công."],
  ["Biển lam tôn C75/C84", "500.000đ/m2 trở lên", "Mặt dựng chắc, hợp showroom, cửa hàng cần mặt tiền hiện đại."],
  ["Nền PVC/Formex", "460.000đ/m2 trở lên", "Phù hợp biển trong nhà, backdrop, bảng thông tin, hạng mục nhẹ."],
  ["Biển hộp đèn mica/bạt xuyên sáng", "Liên hệ theo kích thước", "Phụ thuộc độ dày hộp, hệ LED, vật liệu mặt biển và vị trí treo."],
  ["Biển vẫy LED 40x40cm", "950.000đ/bộ trở lên", "Khung sắt, nền alu/mica, dùng cho shop nhỏ, cafe, salon, nhà thuốc."],
  ["Biển vẫy LED 50x70cm", "1.500.000đ/bộ trở lên", "Kích thước phổ biến, dễ nhìn từ xa trên tuyến phố đông."],
  ["Biển vẫy LED 60x80cm", "1.800.000đ/bộ trở lên", "Phù hợp mặt tiền rộng hơn hoặc vị trí cần nổi bật buổi tối."],
  ["Biển vẫy LED 80x120cm", "3.350.000đ/bộ trở lên", "Cỡ lớn, cần kiểm tra điểm bắt và tải trọng trước khi thi công."],
  ["LED gắn biển dưới 1000 bóng", "1.500đ/bóng trở lên", "Áp dụng tùy mật độ bóng, màu LED, bộ nguồn và yêu cầu hiệu ứng."],
  ["LED gắn biển 1000 - 2500 bóng", "1.300 - 1.450đ/bóng", "Đơn giá thường giảm khi số lượng bóng tăng, cần xem layout thực tế."],
  ["Chữ nổi mica/inox/formex", "Liên hệ theo mẫu", "Tính theo chiều cao chữ, vật liệu, độ dày, đèn hắt sáng hoặc không đèn."],
  ["Logo/backdrop lễ tân", "Liên hệ theo thiết kế", "Phụ thuộc nền backdrop, chữ nổi, LED hắt, vật liệu và yêu cầu hoàn thiện."]
];

const gallery = [
  ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền cửa hàng tông đỏ nổi bật"],
  ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển mặt tiền showroom có chữ phát sáng buổi tối"],
  ["du-an-may-skin-bien-chu-noi-sang.jpg", "Biển chữ nổi phát sáng cho spa, salon, clinic"],
  ["du-an-hisuhi-wet-brush-mat-dung-led.jpg", "Biển mặt dựng lớn kết hợp LED và hộp đèn"],
  ["du-an-sb-invest-backdrop-le-tan.jpg", "Backdrop lễ tân chữ nổi trong nhà"],
  ["du-an-bien-bep-ba-son-hoi-an.jpg", "Mẫu biển nhà hàng chữ nổi phát sáng"]
];

const faq = [
  ["Báo giá trên có phải giá chốt không?", "Không. Đây là khung giá tham khảo để khách hàng dự trù ngân sách. Giá chốt cần ảnh mặt tiền, kích thước, vật liệu, độ cao lắp đặt và yêu cầu hoàn thiện."],
  ["Cần gửi gì để báo giá nhanh?", "Cần gửi ảnh mặt tiền, kích thước ngang cao dự kiến, địa chỉ lắp đặt, mẫu thiết kế nếu có, loại biển mong muốn và thời gian cần hoàn thiện."],
  ["Có nhận làm biển quảng cáo gấp tại Hà Nội không?", "Có thể nhận hạng mục gấp nếu vật liệu sẵn và thiết kế được chốt nhanh. Với biển phức tạp cần khảo sát trước để tránh sai kích thước hoặc lỗi kết cấu."],
  ["Có bảo hành sau thi công không?", "Có. Phạm vi bảo hành phụ thuộc vật liệu, hệ LED, nguồn điện, vị trí ngoài trời và điều kiện sử dụng thực tế."]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
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
      "@type": "Service",
      name: "Báo giá thi công làm biển quảng cáo tại Hà Nội 2026",
      provider: { "@id": `${baseUrl}/#localbusiness` },
      areaServed: "Hà Nội",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "VND",
        lowPrice: "180000",
        highPrice: "3350000",
        offerCount: priceRows.length
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(([question, answer]) => ({
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
    <title>Báo giá thi công làm biển quảng cáo tại Hà Nội 2026 | Bông Sen Trắng</title>
    <meta name="description" content="Bảng giá tham khảo thi công biển quảng cáo tại Hà Nội 2026: biển bạt Hiflex, alu chữ nổi, hộp đèn LED, biển vẫy, chữ nổi mica inox. Gọi/Zalo 0989 521 881.">
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
    <meta property="og:title" content="Báo giá thi công làm biển quảng cáo tại Hà Nội 2026">
    <meta property="og:description" content="Khung giá tham khảo cho biển Hiflex, alu chữ nổi, hộp đèn LED, biển vẫy, chữ nổi và backdrop.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-gao-viet-bien-mat-tien-do.jpg">
    <meta property="og:image:alt" content="Biển quảng cáo mặt tiền cửa hàng tại Hà Nội">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Báo giá thi công làm biển quảng cáo tại Hà Nội 2026">
    <meta name="twitter:description" content="Khung giá tham khảo và cách nhận báo giá nhanh qua Zalo 0989 521 881.">
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
          <a href="../#quy-trinh">Quy trình</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
        </nav>
      </div>
    </header>

    <main id="noi-dung">
      <section class="page-hero price-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Báo giá biển quảng cáo</span>
            </nav>
            <p class="section-kicker">Bảng giá tham khảo 2026</p>
            <h1>Báo giá thi công làm biển quảng cáo tại Hà Nội 2026</h1>
            <p>Bông Sen Trắng nhận sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội: biển bạt Hiflex, alu chữ nổi, hộp đèn LED, biển vẫy, chữ nổi mica inox và backdrop. Gửi ảnh mặt tiền qua Zalo để nhận báo giá sát thực tế.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo báo giá</a>
            </div>
          </div>
          <img src="../assets/images/du-an-gao-viet-bien-mat-tien-do.jpg" alt="Biển quảng cáo mặt tiền cửa hàng tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Bảng giá dưới đây dùng để dự trù ngân sách</h2>
              <p>Giá biển quảng cáo thay đổi theo kích thước, vật liệu, độ cao thi công, hệ khung, đèn LED, mặt bằng lắp đặt và mức độ hoàn thiện theo thiết kế. Bảng này giúp anh/chị ước lượng nhanh trước khi gửi thông tin để báo giá chi tiết.</p>
            </section>

            <section class="content-block">
              <h2>Xem báo giá chi tiết theo từng loại biển</h2>
              <div class="price-link-grid compact">
                <a href="../bao-gia-bien-alu-chu-noi-ha-noi/">
                  <strong>Biển alu chữ nổi</strong>
                  <span>Nền alu, chữ mica/inox, LED hắt sáng, khung xương và lắp đặt.</span>
                </a>
                <a href="../bao-gia-bien-hop-den-led-ha-noi/">
                  <strong>Biển hộp đèn LED</strong>
                  <span>Hộp đèn Hiflex, mica, 3M, biển vẫy LED và thay LED biển cũ.</span>
                </a>
                <a href="../bao-gia-bien-bat-hiflex-ha-noi/">
                  <strong>Biển bạt Hiflex</strong>
                  <span>Biển bạt khung sắt, bạt lót tôn, biển khai trương và thay mặt bạt.</span>
                </a>
                <a href="../lam-bien-quang-cao-gia-re-ha-noi/">
                  <strong>Biển quảng cáo giá rẻ</strong>
                  <span>Phương án tiết kiệm đúng cách theo ngân sách và hiện trạng mặt tiền.</span>
                </a>
                <a href="../bao-gia-bien-vay-led-ha-noi/">
                  <strong>Biển vẫy LED</strong>
                  <span>Giá tham khảo theo cỡ 40x40, 50x70, 60x80, 80x120 và vị trí treo.</span>
                </a>
                <a href="../bao-gia-bien-hop-den-hai-mat-ha-noi/">
                  <strong>Hộp đèn hai mặt</strong>
                  <span>Tư vấn hộp đèn treo vẫy, mặt mica/bạt xuyên sáng, LED và khung treo.</span>
                </a>
                <a href="../bao-gia-bien-led-ma-tran-ha-noi/">
                  <strong>LED ma trận</strong>
                  <span>Khung giá cho bảng LED chạy chữ, thông báo, khuyến mại và nội dung thay đổi.</span>
                </a>
                <a href="../bao-gia-backdrop-logo-le-tan-ha-noi/">
                  <strong>Backdrop logo lễ tân</strong>
                  <span>Logo chữ nổi, mica, inox, formex, LED hắt và nền backdrop văn phòng.</span>
                </a>
                <a href="../bao-gia-decal-kinh-cua-hang-ha-noi/">
                  <strong>Decal kính cửa hàng</strong>
                  <span>Decal mờ, decal logo, decal in màu cho shop, showroom, spa và văn phòng.</span>
                </a>
                <a href="../bao-gia-bien-menu-quan-an-ha-noi/">
                  <strong>Biển menu quán ăn</strong>
                  <span>Bảng menu treo tường, menu hộp đèn, mica, bạt in và bảng món phụ.</span>
                </a>
              </div>
            </section>

            <section class="content-block">
              <h2>Chưa chắc nên chọn loại biển nào?</h2>
              <p>Nếu anh/chị chưa biết nên chọn Hiflex, alu chữ nổi, hộp đèn hay biển vẫy, hãy chọn theo tình huống mặt bằng trước. Cách này thường giúp báo giá sát hơn so với chỉ hỏi đơn giá theo m2.</p>
              <div class="price-link-grid compact">
                <a href="../lam-bien-quang-cao-theo-nhu-cau-khach-hang-ha-noi/">
                  <strong>Làm biển theo nhu cầu khách hàng</strong>
                  <span>Hub chọn nhanh theo tình huống: khai trương, mặt tiền nhỏ, trong ngõ, bán tối, tiết kiệm hoặc sửa biển cũ.</span>
                </a>
                <a href="../bien-quang-cao-cho-cua-hang-sap-khai-truong-ha-noi/">
                  <strong>Cửa hàng sắp khai trương</strong>
                  <span>Ưu tiên phương án làm nhanh, đủ rõ thương hiệu và hạn chế thay đổi sát ngày lắp.</span>
                </a>
                <a href="../bien-quang-cao-cho-cua-hang-mat-tien-nho-ha-noi/">
                  <strong>Cửa hàng mặt tiền nhỏ</strong>
                  <span>Chọn bố cục ít chữ, biển vẫy, hộp đèn hoặc decal kính để tăng nhận diện.</span>
                </a>
                <a href="../bien-quang-cao-cho-quan-an-ban-toi-ha-noi/">
                  <strong>Quán ăn bán tối</strong>
                  <span>Ưu tiên biển sáng, rõ món chính, hộp đèn LED, biển vẫy và bảng menu ngoài cửa.</span>
                </a>
                <a href="../bien-quang-cao-cho-cua-hang-can-tiet-kiem-chi-phi-ha-noi/">
                  <strong>Cần tiết kiệm chi phí</strong>
                  <span>Tập trung phần biển chính, tận dụng phần cũ nếu còn tốt và tách hạng mục phụ sang sau.</span>
                </a>
                <a href="../bien-quang-cao-cho-cua-hang-can-sua-bien-cu-ha-noi/">
                  <strong>Cần sửa biển cũ</strong>
                  <span>Kiểm tra LED, mặt biển, chữ nổi, khung xương trước khi quyết định sửa hay thay mới.</span>
                </a>
              </div>
            </section>

            <section class="content-block">
              <h2>Bảng giá thi công biển quảng cáo tham khảo 2026</h2>
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Hạng mục</th>
                      <th>Giá tham khảo</th>
                      <th>Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${priceRows.map(([name, price, note]) => `
                    <tr>
                      <td>${escapeHtml(name)}</td>
                      <td><strong>${escapeHtml(price)}</strong></td>
                      <td>${escapeHtml(note)}</td>
                    </tr>`).join("")}
                  </tbody>
                </table>
              </div>
            </section>

            <section class="content-block">
              <h2>Vì sao cùng một loại biển nhưng giá khác nhau?</h2>
              <ul class="check-list">
                <li>Kích thước mặt tiền và diện tích thực tế cần thi công.</li>
                <li>Chất liệu nền: bạt Hiflex, alu, lam tôn, mica, PVC, inox hoặc vật liệu kết hợp.</li>
                <li>Loại chữ: formex, mica, inox, đồng, chữ có LED hắt sáng hoặc không đèn.</li>
                <li>Độ cao, vị trí treo, yêu cầu giàn giáo, xe nâng hoặc thi công ngoài giờ.</li>
                <li>Hệ điện, bộ nguồn LED, chống nước, bảo trì và bảo hành sau lắp đặt.</li>
                <li>Mức độ hoàn thiện theo thiết kế: càng nhiều chi tiết, càng cần gia công kỹ.</li>
              </ul>
            </section>

            <section class="content-block">
              <h2>Cần gửi gì để nhận báo giá nhanh?</h2>
              <ol class="step-list">
                <li>Ảnh mặt tiền chụp thẳng và chụp toàn cảnh vị trí lắp đặt.</li>
                <li>Kích thước ngang x cao dự kiến, hoặc kích thước biển cũ nếu thay mới.</li>
                <li>Địa chỉ lắp đặt tại Hà Nội để tính điều kiện vận chuyển và thi công.</li>
                <li>Mẫu thiết kế, logo, màu thương hiệu nếu đã có.</li>
                <li>Loại biển mong muốn: alu chữ nổi, hộp đèn, bạt Hiflex, biển vẫy, LED.</li>
              </ol>
              <p>Gửi qua Zalo <a href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">${business.phone}</a>, Bông Sen Trắng sẽ tư vấn phương án phù hợp ngân sách trước khi chốt thi công.</p>
            </section>

            <section class="content-block">
              <h2>Một số hình ảnh biển đã thi công</h2>
              <div class="case-gallery">
                ${gallery.map(([image, alt]) => `
                <figure>
                  <img src="../assets/images/${image}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(alt)}</figcaption>
                </figure>`).join("")}
              </div>
            </section>

            <section class="content-block">
              <h2>Câu hỏi thường gặp về báo giá biển quảng cáo</h2>
              <div class="faq-list compact">
                ${faq.map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`).join("")}
              </div>
            </section>
          </article>

          <aside class="content-sidebar" aria-label="Thông tin báo giá">
            <div class="sidebar-card">
              <h2>Nhận báo giá trong ngày</h2>
              <p>Gửi ảnh mặt tiền, kích thước và địa chỉ lắp đặt. Có thông tin càng rõ thì báo giá càng sát.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Xem thêm</h2>
              <a href="../thi-cong-bien-quang-cao-ha-noi/">Thi công biển quảng cáo Hà Nội</a>
              <a href="../bien-alu-chu-noi-ha-noi/">Biển alu chữ nổi Hà Nội</a>
              <a href="../bien-hop-den-led-ha-noi/">Biển hộp đèn LED Hà Nội</a>
              <a href="../sua-chua-bien-quang-cao-ha-noi/">Sửa chữa biển quảng cáo Hà Nội</a>
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
          <p>${business.name} sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội.</p>
        </div>
        <div>
          <h2>Liên hệ</h2>
          <address>
            ${business.address}<br>
            <a href="tel:${business.phoneHref}">${business.phone}</a><br>
            <a href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Zalo ${business.phone}</a><br>
            <a href="${business.facebookUrl}" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực thi công</a><br>
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

console.log("Generated 2026 price page");
