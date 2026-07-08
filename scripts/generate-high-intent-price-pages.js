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

const pages = [
  {
    slug: "bao-gia-bien-vay-led-ha-noi",
    title: "Báo giá biển vẫy LED Hà Nội",
    kicker: "Bảng giá biển vẫy LED",
    serviceType: "Báo giá biển vẫy LED",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    description:
      "Báo giá biển vẫy LED Hà Nội theo kích thước 40x40, 50x70, 60x80, 80x120; tư vấn khung, LED và lắp đặt. Gọi/Zalo 0989 521 881.",
    lead:
      "Biển vẫy LED phù hợp cửa hàng cần khách nhìn thấy từ hai chiều đường: cafe, trà sữa, salon, nhà thuốc, shop nhỏ và cửa hàng dịch vụ. Giá phụ thuộc kích thước, số mặt phát sáng, khung, mica/bạt, LED và vị trí treo.",
    priceRows: [
      ["Biển vẫy LED 40x40cm", "950.000đ/bộ trở lên", "Cỡ nhỏ, hợp mặt tiền hẹp, lối vào shop hoặc quán nhỏ."],
      ["Biển vẫy LED 50x70cm", "1.500.000đ/bộ trở lên", "Kích thước phổ biến, nhìn rõ hơn trên tuyến phố đông người qua lại."],
      ["Biển vẫy LED 60x80cm", "1.800.000đ/bộ trở lên", "Phù hợp cửa hàng cần nhận diện tốt hơn vào buổi tối."],
      ["Biển vẫy LED 80x120cm", "3.350.000đ/bộ trở lên", "Cỡ lớn, cần kiểm tra điểm bắt, khung treo và tải trọng trước khi làm."],
      ["Thay mặt biển vẫy cũ", "Liên hệ theo hiện trạng", "Áp dụng khi khung còn tận dụng được, cần thay mặt mica/bạt hoặc làm lại nội dung."]
    ],
    factors: [
      "Làm một mặt hay hai mặt phát sáng.",
      "Khung sắt, khung inox, hộp mica hay hộp bạt xuyên sáng.",
      "Mật độ LED, bộ nguồn, chống nước và vị trí đi dây.",
      "Treo tường, treo khung riêng hay cần gia cố điểm bắt.",
      "Có tận dụng được biển cũ hay phải làm mới toàn bộ."
    ],
    related: [
      ["Làm biển vẫy LED Hà Nội", "lam-bien-vay-led-ha-noi"],
      ["Biển vẫy cửa hàng Hà Nội", "bien-vay-cua-hang-ha-noi"],
      ["Sửa biển vẫy cửa hàng", "sua-bien-vay-cua-hang-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ],
    lowPrice: "950000",
    highPrice: "3350000"
  },
  {
    slug: "bao-gia-bien-hop-den-hai-mat-ha-noi",
    title: "Báo giá biển hộp đèn hai mặt Hà Nội",
    kicker: "Bảng giá hộp đèn treo vẫy",
    serviceType: "Báo giá biển hộp đèn hai mặt",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    description:
      "Báo giá biển hộp đèn hai mặt Hà Nội cho cửa hàng, nhà thuốc, quán ăn, cafe, spa; tư vấn mica, bạt xuyên sáng và LED.",
    lead:
      "Biển hộp đèn hai mặt giúp cửa hàng nổi bật khi khách đi từ hai hướng. Hạng mục này thường dùng cho nhà thuốc, quán ăn, cafe, spa, tiệm tóc và cửa hàng trên tuyến phố đông.",
    priceRows: [
      ["Hộp đèn hai mặt mica nhỏ", "Liên hệ theo kích thước", "Phù hợp cửa hàng cần biển vẫy gọn, bền và dễ nhìn buổi tối."],
      ["Hộp đèn hai mặt bạt xuyên sáng", "Liên hệ theo kích thước", "Phù hợp kích thước lớn hơn, dễ thay mặt bạt khi cần đổi nội dung."],
      ["Hộp đèn tròn/hộp đèn tạo hình", "Liên hệ theo thiết kế", "Giá phụ thuộc dáng hộp, độ khó gia công và số mặt phát sáng."],
      ["Thay LED hoặc nguồn hộp đèn", "Liên hệ theo hiện trạng", "Áp dụng khi hộp còn tốt nhưng đèn yếu, chập chờn hoặc không sáng đều."],
      ["Thay mặt hộp đèn cũ", "Liên hệ theo vật liệu", "Cần đo kích thước và kiểm tra khung trước khi báo giá."]
    ],
    factors: [
      "Kích thước ngang x cao và độ dày hộp.",
      "Mặt mica, mặt bạt xuyên sáng hoặc vật liệu đặc biệt.",
      "Một mặt hay hai mặt phát sáng.",
      "Hệ LED, bộ nguồn, chống nước và đường điện.",
      "Điểm treo, độ cao lắp đặt và việc có cần gia cố khung không."
    ],
    related: [
      ["Làm biển hộp đèn hai mặt", "lam-bien-hop-den-hai-mat-ha-noi"],
      ["Biển hộp đèn LED Hà Nội", "bien-hop-den-led-ha-noi"],
      ["Sửa biển hộp đèn LED", "sua-bien-hop-den-led-ha-noi"],
      ["Lắp đèn LED biển quảng cáo", "lap-den-led-bien-quang-cao-ha-noi"]
    ],
    lowPrice: "1200000",
    highPrice: "6500000"
  },
  {
    slug: "bao-gia-bien-led-ma-tran-ha-noi",
    title: "Báo giá biển LED ma trận Hà Nội",
    kicker: "Bảng giá LED chạy chữ",
    serviceType: "Báo giá biển LED ma trận",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    description:
      "Báo giá biển LED ma trận Hà Nội cho cửa hàng cần chạy chữ, thông báo, khuyến mại; tư vấn kích thước, màu LED và điều khiển.",
    lead:
      "Biển LED ma trận phù hợp cửa hàng muốn hiển thị thông báo, khuyến mại, giờ mở cửa hoặc nội dung thay đổi thường xuyên. Giá cần tính theo kích thước, màu LED, độ sáng, bộ điều khiển và vị trí lắp.",
    priceRows: [
      ["LED ma trận một màu", "Liên hệ theo kích thước", "Phù hợp thông báo ngắn, chạy chữ đơn giản, dễ đọc."],
      ["LED ma trận nhiều màu", "Liên hệ theo cấu hình", "Phù hợp nội dung cần nổi bật hơn hoặc vị trí cạnh tranh nhiều ánh sáng."],
      ["Khung treo và hộp bảo vệ", "Liên hệ theo mặt bằng", "Cần kiểm tra vị trí lắp ngoài trời, trong nhà hoặc trong tủ kính."],
      ["Cài đặt nội dung ban đầu", "Tính theo yêu cầu", "Hỗ trợ thiết lập nội dung, tốc độ chạy chữ và cách vận hành cơ bản."],
      ["Sửa nguồn/bo điều khiển LED", "Liên hệ theo lỗi", "Cần kiểm tra trực tiếp để xác định thay nguồn, module hay bo điều khiển."]
    ],
    factors: [
      "Kích thước bảng LED và khoảng cách nhìn thực tế.",
      "Một màu, nhiều màu, độ sáng và loại module.",
      "Bộ điều khiển, cách cập nhật nội dung và yêu cầu vận hành.",
      "Lắp trong nhà, ngoài trời, trong hộp kính hay treo độc lập.",
      "Có cần làm khung bảo vệ, chống nước và đi dây mới không."
    ],
    related: [
      ["Làm biển LED ma trận Hà Nội", "lam-bien-led-ma-tran-ha-noi"],
      ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"],
      ["Biển hộp đèn LED Hà Nội", "bien-hop-den-led-ha-noi"],
      ["Sửa biển quảng cáo cháy đèn", "sua-bien-quang-cao-chay-den-ha-noi"]
    ],
    lowPrice: "1500000",
    highPrice: "12000000"
  },
  {
    slug: "bao-gia-backdrop-logo-le-tan-ha-noi",
    title: "Báo giá backdrop logo lễ tân Hà Nội",
    kicker: "Bảng giá logo văn phòng",
    serviceType: "Báo giá backdrop logo lễ tân",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    description:
      "Báo giá backdrop logo lễ tân Hà Nội cho văn phòng, showroom, spa, clinic; tư vấn nền backdrop, chữ nổi, mica, inox và LED hắt.",
    lead:
      "Backdrop logo lễ tân giúp khu tiếp khách nhìn chuyên nghiệp và đồng bộ thương hiệu. Giá phụ thuộc kích thước nền, chất liệu chữ nổi, độ dày, màu sơn, LED hắt sáng và yêu cầu hoàn thiện bề mặt.",
    priceRows: [
      ["Logo/chữ nổi formex", "Liên hệ theo kích thước", "Phù hợp ngân sách tiết kiệm, không yêu cầu phát sáng."],
      ["Logo/chữ nổi mica", "Liên hệ theo file thiết kế", "Bề mặt đẹp, hợp lễ tân, showroom, spa, clinic."],
      ["Chữ nổi inox", "Liên hệ theo vật liệu", "Phù hợp văn phòng cần hình ảnh chắc, sang và bền."],
      ["Chữ nổi có LED hắt", "Liên hệ theo cấu hình LED", "Giá phụ thuộc độ dày chữ, LED, nguồn và cách đi dây."],
      ["Nền backdrop hoàn thiện", "Liên hệ theo diện tích", "Có thể dùng gỗ, alu, PVC, sơn hiệu ứng hoặc vật liệu theo thiết kế."]
    ],
    factors: [
      "Kích thước khu lễ tân và diện tích nền.",
      "Chất liệu chữ: formex, mica, inox, đồng hoặc kết hợp.",
      "Có LED hắt sáng hay không.",
      "Độ khó của logo, số lượng chi tiết nhỏ và màu sắc.",
      "Thi công trong giờ hành chính hay cần làm ngoài giờ."
    ],
    related: [
      ["Làm backdrop logo lễ tân", "lam-backdrop-logo-le-tan-ha-noi"],
      ["Biển văn phòng công ty Hà Nội", "bien-van-phong-cong-ty-ha-noi"],
      ["Chữ nổi mica inox Hà Nội", "chu-noi-mica-inox-ha-noi"],
      ["Sửa chữ nổi mica inox", "sua-chu-noi-mica-inox-ha-noi"]
    ],
    lowPrice: "1500000",
    highPrice: "15000000"
  },
  {
    slug: "bao-gia-decal-kinh-cua-hang-ha-noi",
    title: "Báo giá decal kính cửa hàng Hà Nội",
    kicker: "Bảng giá decal kính",
    serviceType: "Báo giá decal kính cửa hàng",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    description:
      "Báo giá decal kính cửa hàng Hà Nội cho shop, spa, văn phòng, showroom; tư vấn decal mờ, decal logo, decal in màu.",
    lead:
      "Decal kính giúp cửa hàng, văn phòng, spa, clinic và showroom có nhận diện rõ hơn trên mặt kính mà vẫn giữ không gian sáng. Giá phụ thuộc diện tích, loại decal, độ khó cắt chữ và thời gian thi công.",
    priceRows: [
      ["Decal mờ kính", "Liên hệ theo m2", "Phù hợp văn phòng, spa, clinic cần che mờ một phần."],
      ["Decal logo cắt chữ", "Liên hệ theo file thiết kế", "Giá phụ thuộc kích thước, màu decal và độ chi tiết của logo."],
      ["Decal in màu dán kính", "Liên hệ theo diện tích", "Phù hợp cửa hàng cần hình ảnh, khuyến mại hoặc nhận diện nổi bật."],
      ["Bóc decal cũ và dán mới", "Liên hệ theo hiện trạng", "Cần kiểm tra lớp keo cũ, diện tích kính và thời gian xử lý."],
      ["Thi công ngoài giờ", "Tính theo lịch thi công", "Phù hợp cửa hàng vẫn hoạt động ban ngày, cần thi công nhanh gọn."]
    ],
    factors: [
      "Diện tích kính và số lượng mặt cần dán.",
      "Decal mờ, decal màu, decal in hay decal cắt chữ.",
      "Có phải bóc decal cũ, vệ sinh keo cũ không.",
      "Mặt kính cao, khó tiếp cận hoặc cần thang/giàn giáo.",
      "File thiết kế đã sẵn sàng hay cần chỉnh lại bố cục."
    ],
    related: [
      ["Làm decal kính cửa hàng", "lam-decal-kinh-cua-hang-ha-noi"],
      ["Làm decal kính showroom Cầu Giấy", "lam-decal-kinh-showroom-cau-giay-ha-noi"],
      ["Biển showroom văn phòng", "bien-quang-cao-showroom-van-phong-ha-noi"],
      ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"]
    ],
    lowPrice: "300000",
    highPrice: "5000000"
  },
  {
    slug: "bao-gia-bien-menu-quan-an-ha-noi",
    title: "Báo giá biển menu quán ăn Hà Nội",
    kicker: "Bảng giá bảng menu",
    serviceType: "Báo giá biển menu quán ăn",
    image: "du-an-bep-ba-son-hoi-an-bien-menu.jpg",
    description:
      "Báo giá biển menu quán ăn Hà Nội: bảng menu treo tường, menu hộp đèn, bạt in, mica, bảng món và bảng giá cho quán ăn.",
    lead:
      "Biển menu giúp khách nhìn nhanh món chính, giá, combo và thông tin bán hàng. Hạng mục này phù hợp quán ăn, quán phở, bún, cafe, trà sữa, đồ uống take away và cửa hàng đồ ăn nhanh.",
    priceRows: [
      ["Menu bạt in treo tường", "Liên hệ theo kích thước", "Tối ưu chi phí, hợp quán cần đổi menu theo mùa."],
      ["Menu mica/PVC", "Liên hệ theo vật liệu", "Nhìn gọn, sạch, hợp quầy order và khu trong nhà."],
      ["Menu hộp đèn", "Liên hệ theo kích thước", "Phù hợp quán cần bảng menu sáng rõ vào buổi tối."],
      ["Bảng món phụ/bảng chỉ dẫn", "Liên hệ theo số lượng", "Dùng cho khu order, tầng 2, khu vệ sinh, quầy thanh toán."],
      ["Thiết kế lại bố cục menu", "Liên hệ theo nội dung", "Áp dụng khi danh sách món nhiều, cần sắp xếp lại cho dễ đọc."]
    ],
    factors: [
      "Số lượng món, nhóm món và mức độ cần trình bày hình ảnh.",
      "Kích thước khu treo menu và khoảng cách khách đứng đọc.",
      "Vật liệu: bạt, mica, PVC, hộp đèn hoặc alu.",
      "Có cần đèn chiếu, hộp đèn hoặc thay đổi nội dung sau này không.",
      "Thi công trong giờ bán hàng hay ngoài giờ."
    ],
    related: [
      ["Làm biển menu quán ăn", "lam-bien-menu-quan-an-ha-noi"],
      ["Biển quảng cáo quán ăn Hà Nội", "bien-quang-cao-quan-an-ha-noi"],
      ["Báo giá bảng hiệu quán ăn", "bao-gia-bang-hieu-quan-an-ha-noi"],
      ["Biển nhà hàng Hà Nội", "bien-quang-cao-nha-hang-ha-noi"]
    ],
    lowPrice: "500000",
    highPrice: "8000000"
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

function priceRows(rows) {
  return rows
    .map(
      ([name, price, note]) => `
                    <tr>
                      <td>${escapeHtml(name)}</td>
                      <td><strong>${escapeHtml(price)}</strong></td>
                      <td>${escapeHtml(note)}</td>
                    </tr>`
    )
    .join("");
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const faqs = [
    [
      `Báo giá ${page.serviceType.toLowerCase()} có phải giá chốt không?`,
      "Chưa. Đây là khung giá tham khảo để dự trù ngân sách. Giá chốt cần ảnh mặt bằng, kích thước, vật liệu, vị trí lắp và yêu cầu hoàn thiện thực tế."
    ],
    [
      "Cần gửi gì để báo giá nhanh qua Zalo?",
      "Gửi ảnh mặt tiền hoặc vị trí lắp, kích thước ngang x cao dự kiến, địa chỉ tại Hà Nội, logo/nội dung cần làm và thời gian mong muốn hoàn thiện."
    ],
    [
      "Có nhận làm nhanh cho cửa hàng sắp khai trương không?",
      "Có thể nhận nếu vật liệu, thiết kế và mặt bằng phù hợp. Nên gửi thông tin sớm để kiểm tra tiến độ sản xuất, lắp đặt và phương án tiết kiệm thời gian."
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
        serviceType: page.serviceType,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "VND",
          lowPrice: page.lowPrice,
          highPrice: page.highPrice,
          offerCount: page.priceRows.length
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Báo giá",
            item: `${baseUrl}/bao-gia-bien-quang-cao-ha-noi/`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: pageUrl
          }
        ]
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
          <a href="../bien-quang-cao-theo-hang-muc-ha-noi/">Theo hạng mục</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
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
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
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
            <section class="content-block price-note">
              <h2>Giá tham khảo, cần ảnh thực tế để chốt</h2>
              <p>Bảng dưới đây giúp anh/chị dự trù ngân sách trước khi làm biển. Với mỗi mặt bằng, giá thực tế có thể thay đổi theo kích thước, vật liệu, khung xương, hệ LED, độ cao lắp đặt và việc có tận dụng được biển cũ hay không.</p>
            </section>

            <section class="content-block">
              <h2>Bảng giá tham khảo</h2>
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Hạng mục</th>
                      <th>Giá tham khảo</th>
                      <th>Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>${priceRows(page.priceRows)}
                  </tbody>
                </table>
              </div>
            </section>

            <section class="content-block">
              <h2>Yếu tố làm giá thay đổi</h2>
              <ul class="check-list">
                ${listItems(page.factors)}
              </ul>
            </section>

            <section class="content-block">
              <h2>Cách nhận báo giá sát hơn</h2>
              <ol class="step-list">
                <li>Chụp ảnh mặt tiền hoặc vị trí cần lắp biển.</li>
                <li>Gửi kích thước ngang x cao dự kiến, hoặc kích thước biển cũ nếu thay mới.</li>
                <li>Gửi địa chỉ lắp đặt tại Hà Nội để kiểm tra điều kiện thi công.</li>
                <li>Gửi logo, nội dung, màu thương hiệu hoặc mẫu tham khảo nếu đã có.</li>
                <li>Nói rõ thời gian cần hoàn thiện nếu cửa hàng sắp khai trương.</li>
              </ol>
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
              <h2>Gửi ảnh để báo giá</h2>
              <p>Gửi ảnh mặt tiền, kích thước và địa chỉ qua Zalo. Có ảnh rõ thì báo giá nhanh và sát hơn.</p>
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

console.log(`Generated ${pages.length} high-intent price SEO pages`);
