const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const slug = "sua-chua-bien-quang-cao-ha-noi";
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

const repairRows = [
  ["Thay mặt bạt Hiflex biển cũ", "Liên hệ theo kích thước", "Phù hợp biển bạc màu, rách bạt, sai nội dung hoặc cần đổi thương hiệu."],
  ["Thay LED, thay nguồn hộp đèn", "Liên hệ theo hiện trạng", "Cần kiểm tra loại LED, nguồn, dây điện, độ thấm nước và vị trí treo."],
  ["Sửa biển hộp đèn không sáng đều", "Liên hệ sau khi xem ảnh", "Thường do chết LED, yếu nguồn, hở nước hoặc mặt biển xuống cấp."],
  ["Gia cố khung, bắt lại biển lung lay", "Liên hệ theo độ cao", "Ưu tiên xử lý sớm với biển ngoài trời, mặt phố, vị trí có gió mạnh."],
  ["Thay chữ nổi mica/inox hỏng", "Liên hệ theo mẫu chữ", "Tính theo chiều cao chữ, vật liệu, LED hắt sáng và độ phức tạp logo."],
  ["Vệ sinh, chỉnh sáng, bảo trì biển", "Liên hệ theo hạng mục", "Phù hợp biển còn dùng tốt nhưng bị bẩn, sáng yếu hoặc xuống màu nhẹ."]
];

const signs = [
  "Biển sáng chập chờn, lúc sáng lúc tắt hoặc chỉ sáng một phần.",
  "Mặt bạt bạc màu, rách, bong mép, nội dung cũ không còn đúng.",
  "Chữ nổi bị nứt, rơi, hở keo, LED hắt sáng yếu hoặc mất nét.",
  "Hộp đèn bị nước vào, loang sáng, mặt mica/bạt bị ố.",
  "Khung biển rung, han gỉ, vít bắt yếu hoặc có nguy cơ rơi khi mưa gió.",
  "Biển cũ làm giảm cảm giác chuyên nghiệp của cửa hàng dù vị trí kinh doanh vẫn tốt."
];

const gallery = [
  ["du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", "Biển mặt tiền có LED cần kiểm tra độ sáng, nguồn và chống nước định kỳ"],
  ["du-an-hisuhi-wet-brush-mat-dung-led.jpg", "Mặt dựng lớn có hộp đèn và LED cần thi công chắc, dễ bảo trì sau này"],
  ["du-an-bien-kong-billiards.jpg", "Biển sáng buổi tối, phù hợp kiểm tra khi có dấu hiệu chết LED hoặc sáng không đều"],
  ["du-an-gao-viet-bien-mat-tien-do.jpg", "Biển mặt tiền cửa hàng cần thay mới nội dung hoặc nâng cấp khi xuống màu"],
  ["du-an-wet-brush-bien-mat-tien.jpg", "Biển cửa hàng có hình ảnh sản phẩm, chữ nổi và mảng nhận diện lớn"],
  ["du-an-bien-bep-ba-son-hoi-an.jpg", "Biển nhà hàng chữ nổi phát sáng, cần giữ ánh sáng đều để dễ nhận diện ban đêm"]
];

const faqs = [
  ["Sửa biển quảng cáo cũ có rẻ hơn làm mới không?", "Thường rẻ hơn nếu khung còn chắc, kích thước phù hợp và hệ điện chưa hỏng nặng. Nếu khung han gỉ, thấm nước nhiều hoặc bố cục cũ không còn phù hợp, nên cân nhắc làm mới để tránh sửa đi sửa lại."],
  ["Cần gửi gì để báo giá sửa biển nhanh?", "Anh/chị gửi ảnh toàn cảnh biển, ảnh cận phần hỏng, kích thước ước lượng, địa chỉ lắp đặt và mô tả lỗi: không sáng, rách bạt, bong chữ, hỏng nguồn, rung khung hoặc cần thay nội dung."],
  ["Có nhận sửa biển gấp tại Hà Nội không?", "Có thể nhận hạng mục gấp nếu lỗi rõ, vật tư sẵn và vị trí thi công không quá phức tạp. Với biển cao, biển lớn hoặc cần tháo lắp nhiều, nên khảo sát trước để đảm bảo an toàn."],
  ["Khi nào không nên sửa mà nên làm biển mới?", "Nên làm mới khi khung yếu, mặt biển quá cũ, hệ LED hỏng nhiều điểm, thương hiệu đã đổi nhận diện hoặc chi phí sửa gần bằng chi phí làm mới một phương án bền hơn."]
];

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
      "@type": "Service",
      name: "Sửa chữa biển quảng cáo tại Hà Nội",
      description: "Sửa chữa, thay LED, thay mặt bạt, thay nguồn, gia cố khung, thay chữ nổi và bảo trì biển quảng cáo tại Hà Nội.",
      provider: { "@id": `${baseUrl}/#localbusiness` },
      areaServed: "Hà Nội",
      serviceType: "Sửa chữa biển quảng cáo"
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

const priceRowsHtml = repairRows
  .map(
    ([name, price, note]) => `
                    <tr>
                      <td>${escapeHtml(name)}</td>
                      <td><strong>${escapeHtml(price)}</strong></td>
                      <td>${escapeHtml(note)}</td>
                    </tr>`
  )
  .join("");

const signsHtml = signs.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");

const galleryHtml = gallery
  .map(
    ([file, alt]) => `
                <figure>
                  <img src="../assets/images/${file}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="900" height="675">
                  <figcaption>${escapeHtml(alt)}</figcaption>
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

const html = `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sửa chữa biển quảng cáo Hà Nội | Thay LED, sửa hộp đèn</title>
    <meta name="description" content="Sửa chữa biển quảng cáo Hà Nội: thay LED, nguồn, mặt bạt, sửa hộp đèn, gia cố khung. Gửi ảnh hiện trạng qua Zalo 0989 521 881 để báo nhanh.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Sửa chữa biển quảng cáo Hà Nội | Thay LED, sửa hộp đèn">
    <meta property="og:description" content="Thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn và gia cố khung biển quảng cáo tại Hà Nội.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg">
    <meta property="og:image:alt" content="Biển mặt tiền LED Xe điện Việt Thanh, ảnh công trình tham khảo">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Sửa chữa biển quảng cáo Hà Nội">
    <meta name="twitter:description" content="Gửi ảnh biển cũ qua Zalo để nhận tư vấn sửa hoặc thay mới.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg">
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
              <span>Sửa chữa biển quảng cáo</span>
            </nav>
            <p class="section-kicker">Sửa biển cũ, thay LED, thay mặt biển</p>
            <h1>Sửa chữa biển quảng cáo tại Hà Nội</h1>
            <p>Biển cũ xuống màu, hỏng LED, mất sáng, bong chữ, rách bạt hoặc khung bị yếu nên xử lý sớm. Bông Sen Trắng nhận kiểm tra ảnh hiện trạng, tư vấn nên sửa hay thay mới và báo phương án phù hợp ngân sách cho cửa hàng tại Hà Nội.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh biển qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg" alt="Biển mặt tiền LED Xe điện Việt Thanh, ảnh công trình tham khảo" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <aside class="quick-answer">
              <h2>Tóm tắt nhanh</h2>
              <ul>
                <li>Sửa thường rẻ hơn làm mới khi khung còn chắc, kích thước phù hợp và hệ điện chưa hỏng nặng.</li>
                <li>Cần ảnh toàn cảnh, ảnh cận chỗ hỏng, kích thước ước lượng và địa chỉ để xác định đúng hạng mục.</li>
                <li>Gửi ảnh qua Zalo 0989 521 881 để được xem hiện trạng và đề xuất phương án trước khi chốt.</li>
              </ul>
            </aside>

            <section class="content-block">
              <h2>Chẩn đoán nhanh theo triệu chứng</h2>
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Triệu chứng</th>
                      <th>Nguyên nhân thường gặp</th>
                      <th>Hướng xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Sáng chập chờn, lúc sáng lúc tắt</strong></td>
                      <td>Nguồn yếu, điểm nối lỏng hoặc một dây LED đã chết</td>
                      <td>Kiểm tra nguồn và mối nối trước, thay dây LED hỏng</td>
                    </tr>
                    <tr>
                      <td><strong>Chỉ sáng một phần mặt biển</strong></td>
                      <td>Chết một nhánh LED hoặc hỏng một bộ nguồn</td>
                      <td>Thay đúng nhánh hoặc bộ nguồn, không cần thay cả biển</td>
                    </tr>
                    <tr>
                      <td><strong>Hộp đèn loang sáng, có vệt nước</strong></td>
                      <td>Mép hở, keo lão hoá, nước vào mặt biển</td>
                      <td>Xử lý chống nước và thay phần mặt bị ố</td>
                    </tr>
                    <tr>
                      <td><strong>Mặt bạt bạc màu, rách mép</strong></td>
                      <td>Bạt lão hoá sau thời gian ngoài trời</td>
                      <td>Thay mặt bạt, kiểm tra khung khi tháo</td>
                    </tr>
                    <tr>
                      <td><strong>Chữ nổi bong, nứt hoặc rơi</strong></td>
                      <td>Keo và vít bắt lão hoá theo thời gian</td>
                      <td>Thay chữ hỏng và kiểm tra độ bám của các chữ còn lại</td>
                    </tr>
                    <tr>
                      <td><strong>Khung rung, nghiêng, han gỉ</strong></td>
                      <td>Vít bắt yếu, chân cột hoặc thanh khung gỉ</td>
                      <td>Gia cố hoặc thay khung, kiểm tra toàn bộ điểm bắt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><small>Bảng chỉ mang tính định hướng. Cần ảnh và kiểm tra thực tế để xác định đúng hạng mục và chi phí.</small></p>
            </section>

            <section class="content-block price-note">
              <h2>Gửi ảnh trước để biết nên sửa hay thay mới</h2>
              <p>Không phải biển cũ nào cũng nên làm lại từ đầu. Nếu khung còn chắc, bố cục còn dùng được và chỉ hỏng mặt bạt, LED hoặc nguồn, sửa đúng hạng mục có thể tiết kiệm hơn. Bông Sen Trắng tư vấn dựa trên hiện trạng; ảnh chỉ giúp đánh giá sơ bộ, không thay thế kiểm tra kết cấu và hệ điện tại vị trí lắp đặt.</p>
              <p>Trường hợp biển cũ sai kích thước hoặc thiếu nội dung bắt buộc, nên đối chiếu <a href="../quy-dinh-bien-hieu-ha-noi/">quy định biển hiệu tại Hà Nội</a> trước khi sửa để tránh phải làm lại lần hai.</p>
            </section>

            <section class="content-block">
              <h2>Gửi yêu cầu báo giá sửa biển</h2>
              <p>Gửi các thông tin dưới đây qua Zalo để trao đổi đúng hạng mục, hạn chế phải hỏi lại nhiều lần:</p>
              <ul class="check-list">
                <li>Ảnh toàn cảnh mặt tiền và ảnh cận phần hỏng, chụp từ vị trí an toàn.</li>
                <li>Địa chỉ lắp đặt, chiều ngang và chiều cao ước lượng của biển.</li>
                <li>Lỗi đang gặp: mất sáng toàn bộ, sáng từng phần, rách mặt bạt, bong chữ hoặc khung rung.</li>
                <li>Độ cao lắp đặt, lối tiếp cận và thời gian cửa hàng có thể bố trí thi công.</li>
                <li>Mong muốn giữ nguyên biển, đổi nội dung hay so sánh với phương án làm mới.</li>
              </ul>
              <p><strong>Mẫu tin nhắn:</strong> Tôi cần sửa biển tại [địa chỉ]. Biển khoảng [ngang × cao], lắp ở độ cao [ước lượng], đang bị [mô tả lỗi]. Tôi gửi kèm ảnh và muốn được tư vấn phương án, vật tư thay thế và chi phí.</p>
              <a class="btn btn-primary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi hiện trạng để tư vấn sửa biển</a>
            </section>

            <section class="content-block">
              <h2>Biển chập điện hoặc có nguy cơ rơi: ưu tiên an toàn</h2>
              <p>Nếu biển có mùi khét, tia lửa, dây điện hở hoặc khung rung mạnh, tránh đứng bên dưới và không tự trèo lên tháo biển. Ngừng sử dụng biển; chỉ ngắt nguồn khi có thể thao tác an toàn. Nhờ người có chuyên môn kiểm tra trước khi cấp điện lại hoặc thi công.</p>
              <p>Khi thống nhất báo giá, cần làm rõ phần vật tư thay, công tháo lắp, thiết bị tiếp cận trên cao, xử lý khung và điều kiện bảo hành áp dụng cho từng hạng mục. Không có một mức giá cố định phù hợp mọi biển cũ.</p>
            </section>

            <section class="content-block">
              <h2>Hạng mục sửa chữa biển quảng cáo thường gặp</h2>
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Hạng mục</th>
                      <th>Báo giá</th>
                      <th>Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
${priceRowsHtml}
                  </tbody>
                </table>
              </div>
            </section>

            <section class="content-block">
              <h2>Dấu hiệu nên sửa biển ngay</h2>
              <ul class="check-list">
                ${signsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Quy trình xử lý nhanh</h2>
              <ol class="step-list">
                <li>Khách gửi ảnh toàn cảnh biển, ảnh cận lỗi và vị trí lắp đặt qua Zalo.</li>
                <li>Bông Sen Trắng kiểm tra sơ bộ: lỗi điện, lỗi mặt biển, lỗi chữ nổi hay lỗi kết cấu.</li>
                <li>Tư vấn phương án sửa tiết kiệm hoặc thay mới nếu sửa không còn hợp lý.</li>
                <li>Chốt vật tư, thời gian thi công và phương án an toàn nếu biển cao hoặc mặt phố đông.</li>
                <li>Thi công, kiểm tra ánh sáng/kết cấu và bàn giao sau khi hoàn thiện.</li>
              </ol>
            </section>

            <section class="content-block">
              <h2>Khi nào nên sửa, khi nào nên làm mới?</h2>
              <div class="price-link-grid compact">
                <a href="../sua-bien-hop-den-led-ha-noi/">
                  <strong>Sửa hộp đèn hoặc LED</strong>
                  <span>Xem phương án kiểm tra LED, nguồn và mặt biển khi hộp đèn không sáng hoặc sáng không đều.</span>
                </a>
                <a href="../thay-mat-bat-bien-quang-cao-ha-noi/">
                  <strong>Thay mặt bạt biển cũ</strong>
                  <span>Tìm hiểu phương án thay mặt bạt khi biển bạc màu hoặc nội dung cần cập nhật, sau khi kiểm tra khung.</span>
                </a>
                <a href="../bien-alu-chu-noi-ha-noi/">
                  <strong>Làm mới biển alu chữ nổi</strong>
                  <span>Tham khảo biển mặt tiền kết hợp chữ mica, inox hoặc chữ LED khi cần thay đổi nhận diện.</span>
                </a>
                <a href="../lam-bien-quang-cao-co-den-led-ha-noi/">
                  <strong>Làm mới biển LED</strong>
                  <span>Chọn phương án chữ sáng mặt, chữ hắt chân hoặc hộp đèn theo mặt bằng và nhu cầu.</span>
                </a>
              </div>
            </section>

            <section class="content-block">
              <h2>Ảnh tham khảo biển có LED, mặt tiền, hộp đèn</h2>
              <p>Đây là ảnh công trình biển quảng cáo để tham khảo cấu tạo và hình thức hoàn thiện, không phải ảnh trước và sau sửa chữa. Phương án sửa biển của anh/chị được đánh giá theo ảnh hiện trạng và kiểm tra thực tế khi cần.</p>
              <div class="case-gallery">
${galleryHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Khu vực nhận sửa biển tại Hà Nội</h2>
              <p>Ưu tiên nội thành và các khu vực lân cận: Đống Đa, Ba Đình, Hoàn Kiếm, Hai Bà Trưng, Cầu Giấy, Thanh Xuân, Tây Hồ, Hoàng Mai, Long Biên, Nam Từ Liêm, Bắc Từ Liêm, Hà Đông. Với hạng mục gấp, gửi ảnh trước để kiểm tra khả năng xử lý trong ngày.</p>
              <p>Xem thêm thông tin <a href="../sua-bien-quang-cao-dong-da/">sửa biển tại Đống Đa</a>, <a href="../sua-bien-quang-cao-ba-dinh/">sửa biển tại Ba Đình</a> và <a href="../sua-bien-quang-cao-cau-giay/">sửa biển tại Cầu Giấy</a>. Bông Sen Trắng tiếp khách tại 92E Ô Chợ Dừa; việc khảo sát, thi công tại địa chỉ của khách được trao đổi theo từng hạng mục.</p>
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
              <h2>Báo lỗi biển qua Zalo</h2>
              <p>Gửi ảnh toàn cảnh, ảnh cận lỗi, kích thước ước lượng và địa chỉ lắp đặt. Có ảnh rõ thì tư vấn nhanh hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../lam-bien-quang-cao-nhanh-ha-noi/">Làm biển quảng cáo nhanh</a>
              <a href="../bien-hop-den-led-ha-noi/">Biển hộp đèn LED</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển thực tế</a>
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

console.log(`Generated repair page: ${slug}`);
