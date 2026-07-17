const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";

const business = {
  name: "Cong ty TNHH Truyen thong Bong Sen Trang",
  displayName: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const pages = [
  {
    slug: "lam-bien-vay-led-ha-noi",
    title: "Làm biển vẫy LED Hà Nội",
    kicker: "Biển vẫy dễ nhìn từ hai chiều đường",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    intro:
      "Biển vẫy LED phù hợp cửa hàng nằm trên tuyến phố nhiều xe qua lại, mặt tiền hẹp hoặc cần khách nhìn thấy từ hai chiều đường. Bông Sen Trắng nhận tư vấn kích thước, kiểu treo, ánh sáng và thi công biển vẫy LED tại Hà Nội.",
    benefits: [
      "Phù hợp shop, cafe, trà sữa, nhà thuốc, salon, cửa hàng nhỏ",
      "Có thể làm biển vẫy hộp đèn, biển tròn, biển mica hoặc biển khung sắt",
      "Tư vấn vị trí treo để không che tầm nhìn và không vướng lối đi",
      "Có phương án sửa, thay mặt biển hoặc thay LED cho biển vẫy cũ"
    ],
    priceNote:
      "Giá biển vẫy phụ thuộc kích thước, độ dày khung, loại mặt mica/bạt, số mặt phát sáng, LED và vị trí lắp. Gửi ảnh mặt tiền để báo giá sát hơn.",
    related: [
      ["Biển vẫy cửa hàng Hà Nội", "bien-vay-cua-hang-ha-noi"],
      ["Sửa biển vẫy cửa hàng", "sua-bien-vay-cua-hang-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-hop-den-hai-mat-ha-noi",
    title: "Làm biển hộp đèn hai mặt Hà Nội",
    kicker: "Hộp đèn treo vẫy, nhìn rõ buổi tối",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    intro:
      "Biển hộp đèn hai mặt giúp cửa hàng nổi bật khi khách đi từ hai hướng. Hạng mục này thường dùng cho nhà thuốc, quán ăn, cafe, spa, tiệm tóc và cửa hàng trên phố đông.",
    benefits: [
      "Tư vấn khung hộp đèn, mặt mica/bạt và ánh sáng bên trong",
      "Làm mới hoặc thay mặt hộp đèn cũ đã bạc màu",
      "Kiểm tra điểm treo, khung chịu lực và đường điện trước khi lắp",
      "Phù hợp cửa hàng cần nhận diện tốt sau 18h"
    ],
    priceNote:
      "Cần biết kích thước ngang x cao, làm một mặt hay hai mặt, treo tường hay treo khung riêng, có cần thay nguồn/LED không.",
    related: [
      ["Biển hộp đèn LED Hà Nội", "bien-hop-den-led-ha-noi"],
      ["Sửa biển hộp đèn LED", "sua-bien-hop-den-led-ha-noi"],
      ["Lắp đèn LED biển quảng cáo", "lap-den-led-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-led-ma-tran-ha-noi",
    title: "Làm biển LED ma trận Hà Nội",
    kicker: "Biển LED chạy chữ, cập nhật nội dung linh hoạt",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    intro:
      "Biển LED ma trận phù hợp cửa hàng muốn hiển thị thông báo, chương trình khuyến mại, giờ mở cửa hoặc nội dung thay đổi thường xuyên. Có thể kết hợp cùng biển mặt tiền chính để tăng khả năng chú ý.",
    benefits: [
      "Tư vấn kích thước LED theo khoảng cách nhìn thực tế",
      "Phù hợp cửa hàng điện thoại, nhà thuốc, siêu thị mini, quán ăn, trung tâm dịch vụ",
      "Có thể đặt dưới biển chính, trong tủ kính hoặc vị trí gần lối vào",
      "Kiểm tra nguồn điện, độ sáng và cách vận hành trước khi bàn giao"
    ],
    priceNote:
      "Giá phụ thuộc kích thước bảng LED, màu hiển thị, độ sáng, bộ điều khiển và vị trí lắp đặt.",
    related: [
      ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"],
      ["Biển hộp đèn LED Hà Nội", "bien-hop-den-led-ha-noi"],
      ["Sửa biển quảng cáo cháy đèn", "sua-bien-quang-cao-chay-den-ha-noi"]
    ]
  },
  {
    slug: "lam-decal-kinh-cua-hang-ha-noi",
    title: "Làm decal kính cửa hàng Hà Nội",
    kicker: "Decal kính nhận diện, che mờ và trang trí mặt tiền",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    intro:
      "Decal kính giúp cửa hàng, spa, văn phòng, phòng khám và showroom đồng bộ nhận diện mà không cần thay đổi kết cấu mặt tiền. Có thể dùng decal mờ, decal logo, decal cắt chữ hoặc decal in màu.",
    benefits: [
      "Phù hợp cửa kính văn phòng, spa, clinic, showroom và shop",
      "Có thể che mờ một phần để tăng riêng tư mà vẫn giữ ánh sáng",
      "Kết hợp cùng chữ nổi, bảng tên hoặc backdrop trong nhà",
      "Thi công nhanh, gọn, ít ảnh hưởng hoạt động của cửa hàng"
    ],
    priceNote:
      "Cần gửi kích thước kính, ảnh thực tế, nội dung cần dán và kiểu decal mong muốn để báo giá.",
    related: [
      ["Biển showroom văn phòng Hà Nội", "bien-quang-cao-showroom-van-phong-ha-noi"],
      ["Biển văn phòng công ty", "bien-van-phong-cong-ty-ha-noi"],
      ["Tư vấn thiết kế biển quảng cáo", "tu-van-thiet-ke-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-backdrop-logo-le-tan-ha-noi",
    title: "Làm backdrop logo lễ tân Hà Nội",
    kicker: "Logo chữ nổi, nền backdrop cho văn phòng và showroom",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    intro:
      "Backdrop logo lễ tân phù hợp công ty, văn phòng, clinic, spa, showroom và trung tâm dịch vụ cần hình ảnh chuyên nghiệp ngay từ khu vực tiếp khách.",
    benefits: [
      "Tư vấn nền backdrop, chữ nổi mica/inox/formex và ánh sáng hắt",
      "Phù hợp quầy lễ tân, phòng họp, khu check-in và khu thương hiệu",
      "Có thể làm theo file logo sẵn hoặc tư vấn lại bố cục cho dễ nhìn",
      "Thi công sạch, gọn, phù hợp không gian đang hoạt động"
    ],
    priceNote:
      "Giá phụ thuộc kích thước nền, vật liệu chữ nổi, có LED hay không và yêu cầu hoàn thiện bề mặt.",
    related: [
      ["Biển văn phòng công ty Hà Nội", "bien-van-phong-cong-ty-ha-noi"],
      ["Chữ nổi mica inox Hà Nội", "chu-noi-mica-inox-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-menu-quan-an-ha-noi",
    title: "Làm biển menu quán ăn Hà Nội",
    kicker: "Bảng menu, bảng giá và biển món cho quán ăn",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển nhà hàng, quán ăn có đèn LED vào buổi tối",
    intro:
      "Biển menu giúp khách nhìn nhanh món chính, giá, combo và chương trình bán hàng. Hạng mục này phù hợp quán ăn, quán phở, bún, cafe, trà sữa, đồ uống take away và cửa hàng đồ ăn nhanh.",
    benefits: [
      "Làm bảng menu treo tường, menu hộp đèn, bảng mica hoặc bạt in",
      "Tư vấn bố cục chữ lớn, dễ đọc, hạn chế nhồi quá nhiều món",
      "Có thể đồng bộ với biển mặt tiền và biển vẫy",
      "Phù hợp quán mới khai trương hoặc quán cần làm lại nhận diện"
    ],
    priceNote:
      "Cần gửi kích thước khu treo menu, danh sách món, ảnh mặt bằng và mẫu phong cách mong muốn.",
    related: [
      ["Biển quảng cáo quán ăn Hà Nội", "bien-quang-cao-quan-an-ha-noi"],
      ["Báo giá bảng hiệu quán ăn", "bao-gia-bang-hieu-quan-an-ha-noi"],
      ["Biển quán phở bún Đống Đa", "bien-quan-pho-bun-dong-da-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-khai-truong-gap-ha-noi",
    title: "Làm biển quảng cáo khai trương gấp Hà Nội",
    kicker: "Ưu tiên phương án nhanh, đủ đẹp, kịp ngày mở bán",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro:
      "Cửa hàng sắp khai trương thường cần chốt biển nhanh nhưng vẫn phải rõ tên, ngành hàng và đủ nổi bật. Bông Sen Trắng tư vấn phương án thi công nhanh theo mặt bằng và ngân sách thực tế.",
    benefits: [
      "Ưu tiên vật liệu và cấu tạo có thể sản xuất nhanh",
      "Tư vấn phần nào cần làm ngay, phần nào có thể nâng cấp sau",
      "Phù hợp shop mới mở, quán ăn, cafe, spa, salon, siêu thị mini",
      "Gửi ảnh mặt tiền qua Zalo để kiểm tra phương án trước"
    ],
    priceNote:
      "Thời gian gấp cần có ảnh mặt tiền, kích thước, file logo/nội dung và ngày cần hoàn thiện để kiểm tra khả năng nhận việc.",
    related: [
      ["Làm biển quảng cáo nhanh Hà Nội", "lam-bien-quang-cao-nhanh-ha-noi"],
      ["Biển khai trương Hà Nội", "bien-khai-truong-ha-noi"],
      ["Làm biển cho cửa hàng mới mở", "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-buoi-toi-ha-noi",
    title: "Làm biển quảng cáo sáng buổi tối Hà Nội",
    kicker: "Tăng nhận diện cho cửa hàng mở sau 18h",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intro:
      "Cửa hàng mở buổi tối cần biển có ánh sáng đủ rõ: hộp đèn LED, chữ nổi sáng mặt, chữ hắt sáng hoặc đèn rọi. Mục tiêu là khách nhìn được tên và ngành hàng khi đi ngang.",
    benefits: [
      "Tư vấn kiểu sáng theo mặt tiền và khoảng cách nhìn",
      "Phù hợp quán ăn, cafe, spa, salon, shop thời trang, phòng gym",
      "Có thể nâng cấp LED cho biển cũ nếu nền và khung còn tốt",
      "Kiểm tra độ sáng, nguồn điện và hướng hắt sáng trước bàn giao"
    ],
    priceNote:
      "Giá phụ thuộc kiểu sáng, kích thước chữ/biển, số lượng LED, nguồn và điều kiện lắp đặt.",
    related: [
      ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"],
      ["Biển hộp đèn LED Hà Nội", "bien-hop-den-led-ha-noi"],
      ["Lắp đèn LED biển quảng cáo", "lap-den-led-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-shop-my-pham-ha-noi",
    title: "Làm biển shop mỹ phẩm Hà Nội",
    kicker: "Biển sạch, sáng, tạo cảm giác tin cậy",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    intro:
      "Shop mỹ phẩm cần biển sạch, dễ đọc, màu sắc tinh gọn và ánh sáng tốt để tạo cảm giác tin cậy. Có thể kết hợp biển mặt tiền, biển vẫy, decal kính và logo trong shop.",
    benefits: [
      "Tư vấn biển alu chữ nổi, mica LED, hộp đèn hoặc biển vẫy",
      "Ưu tiên bố cục rõ tên shop, nhóm sản phẩm và màu nhận diện",
      "Có thể làm decal kính, bảng tên quầy và logo trong shop",
      "Phù hợp shop mỹ phẩm, skincare, spa mini và cửa hàng làm đẹp"
    ],
    priceNote:
      "Gửi ảnh mặt tiền, tên thương hiệu, màu chủ đạo và kích thước mong muốn để tư vấn phương án phù hợp.",
    related: [
      ["Biển quảng cáo spa salon Hà Nội", "bien-quang-cao-spa-salon-ha-noi"],
      ["Biển shop thời trang Hà Nội", "bien-shop-thoi-trang-ha-noi"],
      ["Báo giá bảng hiệu spa salon", "bao-gia-bang-hieu-spa-salon-ha-noi"]
    ]
  },
  {
    slug: "lam-bien-quan-nhau-bia-hoi-ha-noi",
    title: "Làm biển quán nhậu bia hơi Hà Nội",
    kicker: "Biển quán ăn uống rõ tên, sáng và dễ gọi khách",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    intro:
      "Quán nhậu, bia hơi, lẩu nướng và hàng ăn tối cần biển rõ tên, sáng mạnh, dễ nhìn từ xa và dễ nhận ra khi khách tìm địa chỉ. Bông Sen Trắng tư vấn biển mặt tiền, biển vẫy và hộp đèn theo mặt bằng thực tế.",
    benefits: [
      "Biển bạt Hiflex, alu chữ nổi, hộp đèn LED hoặc mặt dựng đơn giản",
      "Ưu tiên chữ lớn, tương phản tốt, nhìn rõ buổi tối",
      "Có thể làm biển menu, bảng giá, biển chỉ dẫn và biển vẫy",
      "Phù hợp quán mới mở hoặc quán cần thay biển cũ đã bạc màu"
    ],
    priceNote:
      "Gửi ảnh mặt tiền, kích thước, nội dung chính và thời gian cần xong để báo giá nhanh.",
    related: [
      ["Biển quảng cáo quán ăn Hà Nội", "bien-quang-cao-quan-an-ha-noi"],
      ["Biển nhà hàng Hà Nội", "bien-quang-cao-nha-hang-ha-noi"],
      ["Báo giá bảng hiệu quán ăn", "bao-gia-bang-hieu-quan-an-ha-noi"]
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

function renderFaq(page) {
  const faqs = [
    [
      `Muốn báo giá ${page.title.toLowerCase()} cần gửi gì?`,
      "Gửi ảnh mặt tiền hoặc vị trí lắp, kích thước dự kiến, địa chỉ tại Hà Nội, nội dung cần làm và thời gian mong muốn hoàn thiện."
    ],
    [
      "Có tư vấn phương án tiết kiệm không?",
      "Có. Nếu mặt bằng hoặc khung cũ còn tận dụng được, có thể ưu tiên thay mặt biển, thay LED hoặc làm hạng mục chính trước."
    ],
    [
      "Có nhận khảo sát tại Hà Nội không?",
      "Có. Với biển lớn, biển treo cao, biển cần đấu điện hoặc mặt bằng khó, nên khảo sát trước khi chốt phương án thi công."
    ],
    [
      "Có làm gấp cho cửa hàng sắp khai trương không?",
      "Có thể nhận nếu vật liệu, thiết kế và mặt bằng phù hợp. Nên gửi thông tin sớm để kiểm tra tiến độ thực tế."
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
  const imageAlt = page.imageAlt || page.title;
  const description = `${page.title}: tư vấn vật liệu, kích thước, báo giá và thi công tại Hà Nội. Gửi ảnh qua Zalo 0989 521 881 để được báo giá nhanh.`;
  const { faqs, html: faqHtml } = renderFaq(page);
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
        description,
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
    <title>${escapeHtml(page.title)} | Bông Sen Trắng</title>
    <meta name="description" content="${escapeHtml(description)}">
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
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}">
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
          <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
          <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
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
              <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Dịch vụ</a>
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
          <img src="../assets/images/${page.image}" alt="${escapeHtml(imageAlt)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>Hạng mục nên chốt trước khi làm</h2>
              <ul class="area-list">
                ${listItems(page.benefits)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Báo giá theo ảnh mặt bằng thực tế</h2>
              <p>${escapeHtml(page.priceNote)}</p>
              <p>Thông tin càng rõ thì báo giá càng sát: ảnh mặt tiền, kích thước, vị trí lắp, nội dung cần làm và thời gian cần hoàn thiện.</p>
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
              <h2>Gửi ảnh để báo giá</h2>
              <p>Chụp mặt tiền hoặc vị trí cần lắp, gửi qua Zalo để tư vấn vật liệu và chi phí.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
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
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} high-intent SEO pages`);
