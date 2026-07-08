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
    slug: "nhu-cau-lam-bien-quang-cao-ha-noi",
    title: "Nhu cầu làm biển quảng cáo tại Hà Nội",
    kicker: "Chọn đúng tình huống cần làm biển",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    intro:
      "Khách ở Hà Nội thường không chỉ tìm theo loại biển, mà tìm theo tình huống: cần báo giá nhanh, cần khảo sát mặt tiền, cần thay biển cũ, cần làm gấp trước khai trương hoặc cần phương án cho mặt tiền nhỏ.",
    items: [
      "Gửi ảnh mặt tiền để được tư vấn phương án và khoảng giá sát hơn",
      "Khảo sát khi biển cao, mặt bằng khó, cần đấu điện hoặc tận dụng khung cũ",
      "Chọn biển theo mặt phố, mặt tiền nhỏ, trong ngõ hoặc cửa hàng mới mở",
      "Ưu tiên phương án làm nhanh khi gần ngày khai trương"
    ],
    cta: "Chọn nhu cầu gần nhất với mặt bằng của anh/chị, hoặc gửi ảnh qua Zalo để được tư vấn nhanh.",
    related: [
      ["Gửi ảnh báo giá biển quảng cáo", "gui-anh-bao-gia-bien-quang-cao-ha-noi"],
      ["Khảo sát làm biển quảng cáo", "khao-sat-lam-bien-quang-cao-ha-noi"],
      ["Làm biển quảng cáo cần gấp", "lam-bien-quang-cao-can-gap-ha-noi"]
    ],
    faq: [
      ["Không biết nên chọn loại biển nào thì bắt đầu từ đâu?", "Gửi ảnh mặt tiền, kích thước dự kiến và ngân sách mong muốn. Từ đó có thể chọn giữa Hiflex, alu chữ nổi, hộp đèn LED, biển vẫy hoặc phương án sửa biển cũ."],
      ["Có cần khảo sát tận nơi không?", "Nếu biển lớn, vị trí cao, cần xử lý điện, khung cũ hoặc mặt bằng khó thi công thì nên khảo sát để báo giá sát và giảm phát sinh."]
    ]
  },
  {
    slug: "gui-anh-bao-gia-bien-quang-cao-ha-noi",
    title: "Gửi ảnh báo giá biển quảng cáo Hà Nội",
    kicker: "Báo giá nhanh qua ảnh mặt tiền",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    intro:
      "Nếu anh/chị chưa rõ kích thước, vật liệu hoặc kiểu biển nên làm, cách nhanh nhất là chụp ảnh mặt tiền gửi qua Zalo. Bông Sen Trắng sẽ xem vị trí lắp đặt, gợi ý phương án và báo khoảng giá phù hợp tại Hà Nội.",
    items: [
      "Chụp thẳng mặt tiền, lấy đủ chiều ngang và chiều cao khu vực định lắp biển",
      "Gửi thêm ảnh gần vị trí khung cũ, nguồn điện, mái che hoặc điểm treo biển vẫy",
      "Cho biết địa chỉ lắp đặt, thời gian cần xong và ngân sách dự kiến nếu có",
      "Gửi logo, tên cửa hàng, màu nhận diện hoặc mẫu biển thích để tư vấn sát hơn"
    ],
    cta: "Có ảnh rõ mặt tiền thì báo giá nhanh hơn, hạn chế hỏi đi hỏi lại và giảm rủi ro phát sinh khi thi công.",
    related: [
      ["Cần chuẩn bị gì để báo giá biển quảng cáo", "can-chuan-bi-gi-de-bao-gia-bien-quang-cao"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"],
      ["Tư vấn thiết kế biển quảng cáo", "tu-van-thiet-ke-bien-quang-cao-ha-noi"]
    ],
    faq: [
      ["Chỉ có ảnh mặt tiền, chưa có kích thước, có báo giá được không?", "Có thể báo khoảng giá và hướng làm trước. Nếu cần chốt chính xác, nên đo ngang x cao hoặc khảo sát thực tế."],
      ["Gửi ảnh qua Zalo có mất phí không?", "Không. Anh/chị có thể gửi ảnh để được tư vấn phương án ban đầu và khoảng giá tham khảo."]
    ]
  },
  {
    slug: "khao-sat-lam-bien-quang-cao-ha-noi",
    title: "Khảo sát làm biển quảng cáo Hà Nội",
    kicker: "Kiểm tra mặt tiền trước khi sản xuất",
    image: "san-xuat-khung-bien-vay-led-ha-noi.jpg",
    intro:
      "Khảo sát giúp kiểm tra kích thước thật, khung cũ, vị trí treo, đường điện và điều kiện thi công. Việc này đặc biệt cần với biển lớn, biển cao, hộp đèn LED, chữ nổi hoặc mặt bằng đang kinh doanh.",
    items: [
      "Đo lại kích thước ngang, cao và độ sâu mặt dựng",
      "Kiểm tra khung cũ có tận dụng được hay phải gia cố",
      "Xem vị trí nguồn điện, hướng nhìn, mái che và điểm treo biển vẫy",
      "Tư vấn phương án thi công gọn để hạn chế ảnh hưởng hoạt động cửa hàng"
    ],
    cta: "Với công trình nhỏ có ảnh rõ có thể báo giá trước. Với mặt bằng phức tạp, khảo sát giúp báo giá sát và thi công chắc hơn.",
    related: [
      ["Làm biển quảng cáo mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"],
      ["Thi công biển quảng cáo Hà Nội", "thi-cong-bien-quang-cao-ha-noi"],
      ["Năng lực thi công biển quảng cáo", "nang-luc-thi-cong-bien-quang-cao-ha-noi"]
    ],
    faq: [
      ["Khi nào bắt buộc nên khảo sát?", "Nên khảo sát khi biển cao, biển lớn, cần đấu điện, cần tận dụng khung cũ hoặc mặt bằng có mái che, dây điện, cây xanh che khuất."],
      ["Khảo sát xong có chốt được vật liệu luôn không?", "Có. Sau khi thấy mặt bằng thực tế, có thể chọn vật liệu, kiểu sáng, kích thước và phương án thi công rõ hơn."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-mat-pho-ha-noi",
    title: "Làm biển quảng cáo mặt phố Hà Nội",
    kicker: "Biển dễ nhìn trên tuyến phố đông",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro:
      "Cửa hàng mặt phố cần biển rõ tên, rõ ngành hàng và nhìn được khi khách đi ngang. Với phố đông xe, chữ phải đủ lớn, màu tương phản tốt và ánh sáng buổi tối cần tính ngay từ đầu.",
    items: [
      "Ưu tiên tên thương hiệu và ngành hàng chính, hạn chế nhồi quá nhiều thông tin",
      "Chọn vật liệu theo độ bền, ngân sách và thời gian sử dụng dự kiến",
      "Tính thêm biển vẫy nếu mặt tiền bị khuất góc nhìn",
      "Kiểm tra ánh sáng buổi tối nếu cửa hàng bán sau 18h"
    ],
    cta: "Gửi ảnh mặt phố và vị trí cửa hàng để được tư vấn bố cục dễ nhìn từ xa.",
    related: [
      ["Làm biển mặt tiền cửa hàng Hà Nội", "lam-bien-mat-tien-cua-hang-ha-noi"],
      ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"],
      ["Biển vẫy cửa hàng Hà Nội", "bien-vay-cua-hang-ha-noi"]
    ],
    faq: [
      ["Biển mặt phố nên làm loại nào?", "Tùy ngân sách và mặt tiền. Phổ biến là alu chữ nổi, hộp đèn LED, bạt Hiflex, chữ mica/inox hoặc kết hợp biển vẫy."],
      ["Có nên làm thêm biển vẫy không?", "Nên cân nhắc nếu khách đi từ hai chiều đường hoặc mặt tiền bị khuất bởi cây, cột, mái hiên hoặc xe đỗ."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-mat-tien-nho-ha-noi",
    title: "Làm biển quảng cáo mặt tiền nhỏ Hà Nội",
    kicker: "Biển gọn, rõ, không rối thông tin",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intro:
      "Mặt tiền nhỏ cần biển thật gọn: ít chữ, tương phản tốt, tên dễ nhớ và có điểm nhận diện chính. Nếu cố đưa quá nhiều thông tin, biển sẽ khó đọc và giảm hiệu quả khi khách đi ngang.",
    items: [
      "Rút gọn nội dung còn tên, ngành hàng và điểm nhận diện chính",
      "Dùng chữ đủ lớn thay vì chia quá nhiều dòng nhỏ",
      "Cân nhắc biển vẫy hoặc decal kính nếu mặt tiền hẹp",
      "Chọn màu nền và màu chữ có độ tương phản tốt"
    ],
    cta: "Với mặt tiền nhỏ, ảnh chụp chính diện rất quan trọng để tư vấn bố cục không bị chật.",
    related: [
      ["Làm biển quảng cáo trong ngõ Hà Nội", "lam-bien-quang-cao-trong-ngo-ha-noi"],
      ["Làm biển quảng cáo mặt tiền hẹp Hà Nội", "lam-bien-quang-cao-mat-tien-hep-ha-noi"],
      ["Biển shop thời trang Hà Nội", "bien-shop-thoi-trang-ha-noi"]
    ],
    faq: [
      ["Mặt tiền nhỏ có nên làm chữ nổi không?", "Có thể, nếu bố cục gọn và kích thước chữ đủ đọc. Trường hợp ngân sách thấp có thể dùng bạt Hiflex hoặc hộp đèn nhỏ."],
      ["Làm sao để biển nhỏ vẫn nổi bật?", "Giảm nội dung, tăng độ tương phản, chọn đúng ánh sáng và dùng thêm biển vẫy nếu cần."]
    ]
  },
  {
    slug: "thay-bien-cu-cua-hang-ha-noi",
    title: "Thay biển cũ cửa hàng Hà Nội",
    kicker: "Làm mới nhận diện từ biển đang xuống cấp",
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    intro:
      "Biển cũ bị bạc màu, tối đèn, bong mặt, cong khung hoặc không còn hợp thương hiệu sẽ làm cửa hàng kém chuyên nghiệp. Có thể thay toàn bộ hoặc tận dụng phần khung còn tốt để tiết kiệm chi phí.",
    items: [
      "Kiểm tra khung cũ, mặt biển, chữ nổi, LED và nguồn điện",
      "Tư vấn phần nào nên giữ, phần nào nên thay mới",
      "Thay mặt bạt, thay chữ, thay LED hoặc làm lại toàn bộ nếu cần",
      "Thi công gọn để cửa hàng vẫn có thể kinh doanh trong thời gian xử lý"
    ],
    cta: "Chụp ảnh biển cũ và vị trí lắp đặt gửi qua Zalo để kiểm tra có tận dụng được khung không.",
    related: [
      ["Sửa chữa biển quảng cáo Hà Nội", "sua-chua-bien-quang-cao-ha-noi"],
      ["Thay mặt bạt biển quảng cáo Hà Nội", "thay-mat-bat-bien-quang-cao-ha-noi"],
      ["Dấu hiệu cần sửa hoặc thay biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"]
    ],
    faq: [
      ["Biển cũ có cần tháo hết không?", "Không phải lúc nào cũng cần. Nếu khung còn chắc, có thể thay mặt biển, thay LED hoặc chỉnh lại chữ để tiết kiệm."],
      ["Thay biển cũ có nhanh hơn làm mới không?", "Thường nhanh hơn nếu khung và vị trí điện còn dùng được. Nếu khung yếu hoặc sai kích thước, cần làm lại chắc hơn."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-shop-moi-mo-ha-noi",
    title: "Làm biển quảng cáo shop mới mở Hà Nội",
    kicker: "Chốt biển trước ngày khai trương",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    intro:
      "Shop mới mở cần biển dễ nhớ, đúng phong cách và kịp tiến độ khai trương. Nên chốt sớm tên, logo, màu chủ đạo, kích thước mặt tiền và ngân sách để chọn phương án phù hợp ngay từ đầu.",
    items: [
      "Tư vấn biển chính mặt tiền, biển vẫy và decal kính nếu cần",
      "Chọn kiểu chữ, màu nền, ánh sáng theo phong cách shop",
      "Ưu tiên phương án thi công nhanh khi sát ngày khai trương",
      "Có thể chia giai đoạn: làm biển chính trước, hạng mục phụ sau"
    ],
    cta: "Gửi ảnh mặt tiền shop và ngày cần khai trương để kiểm tra phương án thi công phù hợp.",
    related: [
      ["Làm biển cho cửa hàng mới mở Hà Nội", "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi"],
      ["Biển shop quần áo Hà Nội", "bien-shop-quan-ao-ha-noi"],
      ["Báo giá bảng hiệu shop quần áo", "bao-gia-bang-hieu-shop-quan-ao-ha-noi"]
    ],
    faq: [
      ["Shop mới mở nên làm biển loại nào để tiết kiệm?", "Có thể chọn bạt Hiflex, alu chữ nổi đơn giản hoặc hộp đèn tùy mặt tiền và thời gian sử dụng. Nếu cần đẹp lâu dài, nên đầu tư phần biển chính tốt hơn."],
      ["Sát ngày khai trương có nhận làm không?", "Có thể nhận nếu vật liệu, thiết kế và mặt bằng phù hợp. Cần gửi thông tin càng sớm càng tốt để kiểm tra tiến độ."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-can-gap-ha-noi",
    title: "Làm biển quảng cáo cần gấp Hà Nội",
    kicker: "Ưu tiên việc có thể chốt nhanh",
    image: "bien-tam-lon-ha-noi.jpg",
    intro:
      "Khi cần biển gấp, mục tiêu là chọn phương án đủ đẹp, đủ rõ và kịp tiến độ thay vì kéo dài thiết kế quá nhiều vòng. Bông Sen Trắng tư vấn theo mức độ gấp, vật liệu sẵn và điều kiện lắp đặt thực tế tại Hà Nội.",
    items: [
      "Chốt nội dung chính: tên, ngành hàng, số điện thoại hoặc thông tin bắt buộc",
      "Ưu tiên vật liệu và cấu tạo sản xuất nhanh",
      "Kiểm tra xem mặt bằng có cần khảo sát hay có thể báo giá qua ảnh",
      "Nếu cần, chia hạng mục chính làm trước, hạng mục trang trí làm sau"
    ],
    cta: "Gửi ảnh mặt tiền, ngày cần xong và nội dung biển qua Zalo để kiểm tra khả năng nhận việc.",
    related: [
      ["Làm biển quảng cáo nhanh Hà Nội", "lam-bien-quang-cao-nhanh-ha-noi"],
      ["Làm biển quảng cáo khai trương gấp Hà Nội", "lam-bien-quang-cao-khai-truong-gap-ha-noi"],
      ["Biển khai trương Hà Nội", "bien-khai-truong-ha-noi"]
    ],
    faq: [
      ["Có làm biển trong ngày không?", "Tùy kích thước, vật liệu và mặt bằng. Một số hạng mục đơn giản có thể xử lý rất nhanh, nhưng biển lớn hoặc có LED thường cần thêm thời gian để đảm bảo chắc chắn."],
      ["Làm gấp có bị đội chi phí không?", "Có thể phát sinh nếu cần làm ngoài giờ, vận chuyển gấp hoặc chọn vật liệu khó. Nên gửi đủ thông tin để kiểm tra trước."]
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

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
}

function renderRelated(links) {
  return links
    .map(([label, slug]) => `<a href="../${slug}/">${escapeHtml(label)}</a>`)
    .join("\n              ");
}

function renderClusterCards(currentSlug) {
  return pages
    .filter((page) => page.slug !== currentSlug)
    .slice(0, 6)
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
    ...page.faq,
    ["Muốn báo giá nhanh cần gửi gì?", "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, nội dung biển, thời gian cần xong và mẫu biển thích nếu có."],
    ["Bông Sen Trắng phục vụ khu vực nào?", "Bông Sen Trắng nhận tư vấn, sản xuất và thi công biển quảng cáo tại Hà Nội, ưu tiên các khu vực nội thành và lân cận Đống Đa."]
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
  const description = `${page.title}: tư vấn phương án, vật liệu, khảo sát và báo giá nhanh tại Hà Nội. Gọi/Zalo ${business.phone}.`;
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
        areaServed: {
          "@type": "City",
          name: "Hà Nội",
          addressCountry: "VN"
        }
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Nhu cầu làm biển", item: `${baseUrl}/nhu-cau-lam-bien-quang-cao-ha-noi/` },
          { "@type": "ListItem", position: 3, name: page.title, item: pageUrl }
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
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="${escapeHtml(page.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
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
          <a href="../nhu-cau-lam-bien-quang-cao-ha-noi/">Nhu cầu</a>
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
              <a href="../nhu-cau-lam-bien-quang-cao-ha-noi/">Nhu cầu</a>
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
              <h2>Cần chuẩn bị gì?</h2>
              <ul class="area-list">
                ${renderList(page.items)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Cách xử lý nhanh</h2>
              <p>${escapeHtml(page.cta)}</p>
            </section>
            <section class="content-block">
              <h2>Nhu cầu liên quan tại Hà Nội</h2>
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
              <h2>Báo giá qua Zalo</h2>
              <p>Gửi ảnh mặt tiền, kích thước và địa chỉ lắp đặt để nhận tư vấn phương án phù hợp.</p>
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

console.log(`Generated ${pages.length} Hanoi conversion-intent SEO pages`);
