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

const locations = [
  {
    name: "Ô Chợ Dừa",
    slug: "lam-bien-quang-cao-o-cho-dua",
    area: "Đống Đa",
    wardTerms: ["Ô Chợ Dừa", "Trung Liệt", "Nam Đồng", "Hàng Bột"],
    nearby: ["Xã Đàn", "Nguyễn Lương Bằng", "Tây Sơn", "Tôn Đức Thắng"],
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    note: "gần địa chỉ doanh nghiệp, phù hợp khách cần khảo sát mặt bằng nhanh"
  },
  {
    name: "Xã Đàn",
    slug: "lam-bien-quang-cao-xa-dan",
    area: "Đống Đa",
    wardTerms: ["Nam Đồng", "Phương Liên", "Kim Liên", "Ô Chợ Dừa"],
    nearby: ["Ô Chợ Dừa", "Phạm Ngọc Thạch", "Đại Cồ Việt", "Nguyễn Lương Bằng"],
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    note: "tuyến phố nhiều cửa hàng, showroom, dịch vụ cần biển dễ nhìn buổi tối"
  },
  {
    name: "Thái Hà",
    slug: "lam-bien-quang-cao-thai-ha",
    area: "Đống Đa",
    wardTerms: ["Trung Liệt", "Láng Hạ", "Thịnh Quang"],
    nearby: ["Chùa Bộc", "Tây Sơn", "Láng Hạ", "Hoàng Cầu"],
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    note: "phù hợp spa, salon, shop, văn phòng và biển hộp đèn mặt phố"
  },
  {
    name: "Chùa Bộc",
    slug: "lam-bien-quang-cao-chua-boc",
    area: "Đống Đa",
    wardTerms: ["Quang Trung", "Trung Tự", "Khương Thượng"],
    nearby: ["Thái Hà", "Tây Sơn", "Phạm Ngọc Thạch", "Đông Tác"],
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    note: "khu mua sắm, thời trang, cửa hàng bán lẻ cần biển nổi bật"
  },
  {
    name: "Tây Sơn",
    slug: "lam-bien-quang-cao-tay-son",
    area: "Đống Đa",
    wardTerms: ["Ngã Tư Sở", "Quang Trung", "Trung Liệt", "Khương Thượng"],
    nearby: ["Chùa Bộc", "Thái Hà", "Nguyễn Lương Bằng", "Trường Chinh"],
    image: "du-an-bien-the-fox-fitness.jpg",
    note: "tuyến lớn, hợp biển mặt tiền rộng, hộp đèn LED, alu chữ nổi"
  },
  {
    name: "Nguyễn Lương Bằng",
    slug: "lam-bien-quang-cao-nguyen-luong-bang",
    area: "Đống Đa",
    wardTerms: ["Quang Trung", "Nam Đồng", "Ô Chợ Dừa"],
    nearby: ["Ô Chợ Dừa", "Tây Sơn", "Xã Đàn", "Tôn Đức Thắng"],
    image: "du-an-bien-tien-coffee.jpg",
    note: "phù hợp quán ăn, cafe, cửa hàng nhỏ, biển khai trương và sửa biển cũ"
  },
  {
    name: "Láng Hạ",
    slug: "lam-bien-quang-cao-lang-ha",
    area: "Đống Đa",
    wardTerms: ["Láng Hạ", "Thành Công", "Trung Liệt"],
    nearby: ["Thái Hà", "Huỳnh Thúc Kháng", "Nguyễn Chí Thanh", "Giảng Võ"],
    image: "du-an-logo-van-phong-fxce.jpg",
    note: "phù hợp văn phòng, showroom, biển công ty và backdrop lễ tân"
  },
  {
    name: "Tôn Đức Thắng",
    slug: "lam-bien-quang-cao-ton-duc-thang",
    area: "Đống Đa",
    wardTerms: ["Hàng Bột", "Văn Chương", "Cát Linh"],
    nearby: ["Ô Chợ Dừa", "Nguyễn Lương Bằng", "Văn Miếu", "Khâm Thiên"],
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    note: "tuyến phố trung tâm, cần biển rõ, bền và không quá rối"
  },
  {
    name: "Khâm Thiên",
    slug: "lam-bien-quang-cao-kham-thien",
    area: "Đống Đa",
    wardTerms: ["Thổ Quan", "Văn Chương", "Trung Phụng"],
    nearby: ["Lê Duẩn", "Xã Đàn", "Tôn Đức Thắng", "Nguyễn Lương Bằng"],
    image: "bien-tam-lon-ha-noi.jpg",
    note: "phù hợp biển bạt, biển hộp đèn, thay mặt biển và sửa biển cũ"
  },
  {
    name: "Phạm Ngọc Thạch",
    slug: "lam-bien-quang-cao-pham-ngoc-thach",
    area: "Đống Đa",
    wardTerms: ["Kim Liên", "Trung Tự", "Phương Liên"],
    nearby: ["Xã Đàn", "Chùa Bộc", "Đào Duy Anh", "Đông Tác"],
    image: "du-an-sct-clinic-chu-noi-led.jpg",
    note: "phù hợp clinic, spa, salon, cửa hàng dịch vụ và biển chữ nổi LED"
  },
  {
    name: "Duy Tân",
    slug: "lam-bien-quang-cao-duy-tan",
    area: "Cầu Giấy",
    wardTerms: ["Dịch Vọng Hậu", "Yên Hòa", "Cầu Giấy"],
    nearby: ["Trần Thái Tông", "Tôn Thất Thuyết", "Thành Thái", "Trung Kính"],
    image: "du-an-logo-van-phong-fxce.jpg",
    note: "tập trung văn phòng, showroom, cafe và dịch vụ cần biển công ty gọn, sáng, chuyên nghiệp"
  },
  {
    name: "Trần Thái Tông",
    slug: "lam-bien-quang-cao-tran-thai-tong",
    area: "Cầu Giấy",
    wardTerms: ["Dịch Vọng", "Dịch Vọng Hậu", "Yên Hòa"],
    nearby: ["Duy Tân", "Cầu Giấy", "Xuân Thủy", "Nguyễn Phong Sắc"],
    image: "du-an-bien-tien-coffee.jpg",
    note: "nhiều nhà hàng, cafe, văn phòng và cửa hàng cần biển dễ nhìn từ mặt phố"
  },
  {
    name: "Trung Kính",
    slug: "lam-bien-quang-cao-trung-kinh",
    area: "Cầu Giấy",
    wardTerms: ["Yên Hòa", "Trung Hòa", "Cầu Giấy"],
    nearby: ["Mạc Thái Tổ", "Trần Duy Hưng", "Vũ Phạm Hàm", "Dương Đình Nghệ"],
    image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
    note: "phù hợp cửa hàng bán lẻ, quán ăn, văn phòng và biển hộp đèn mặt tiền"
  },
  {
    name: "Kim Mã",
    slug: "lam-bien-quang-cao-kim-ma",
    area: "Ba Đình",
    wardTerms: ["Kim Mã", "Ngọc Khánh", "Đội Cấn"],
    nearby: ["Liễu Giai", "Giảng Võ", "Nguyễn Thái Học", "Vạn Phúc"],
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    note: "tuyến phố trung tâm, hợp biển nhà hàng, cafe, showroom và cửa hàng dịch vụ"
  },
  {
    name: "Đội Cấn",
    slug: "lam-bien-quang-cao-doi-can",
    area: "Ba Đình",
    wardTerms: ["Đội Cấn", "Liễu Giai", "Cống Vị"],
    nearby: ["Kim Mã", "Hoàng Hoa Thám", "Vạn Bảo", "Ngọc Hà"],
    image: "bien-vay-tron-cua-hang-o-hui-ha-noi.jpg",
    note: "nhiều cửa hàng nhỏ và dịch vụ cần biển vẫy, hộp đèn và sửa biển cũ"
  },
  {
    name: "Nguyễn Trãi",
    slug: "lam-bien-quang-cao-nguyen-trai",
    area: "Thanh Xuân - Hà Đông",
    wardTerms: ["Thượng Đình", "Thanh Xuân Trung", "Mỗ Lao", "Văn Quán"],
    nearby: ["Ngã Tư Sở", "Khuất Duy Tiến", "Trần Phú", "Vũ Trọng Phụng"],
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    note: "tuyến lớn nhiều shop, showroom, siêu thị mini và cửa hàng cần biển nổi bật"
  },
  {
    name: "Lê Văn Lương",
    slug: "lam-bien-quang-cao-le-van-luong",
    area: "Thanh Xuân - Cầu Giấy",
    wardTerms: ["Nhân Chính", "Trung Hòa", "Thanh Xuân"],
    nearby: ["Hoàng Đạo Thúy", "Nguyễn Tuân", "Tố Hữu", "Khuất Duy Tiến"],
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    note: "phù hợp văn phòng, spa, phòng khám, showroom và biển nhận diện công ty"
  },
  {
    name: "Nguyễn Tuân",
    slug: "lam-bien-quang-cao-nguyen-tuan",
    area: "Thanh Xuân",
    wardTerms: ["Thanh Xuân Trung", "Nhân Chính", "Thượng Đình"],
    nearby: ["Vũ Trọng Phụng", "Nguyễn Trãi", "Lê Văn Lương", "Khuất Duy Tiến"],
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    note: "phù hợp spa, clinic, văn phòng, cửa hàng và biển chữ nổi có ánh sáng"
  },
  {
    name: "Bạch Mai",
    slug: "lam-bien-quang-cao-bach-mai",
    area: "Hai Bà Trưng",
    wardTerms: ["Bạch Mai", "Trương Định", "Quỳnh Mai"],
    nearby: ["Đại Cồ Việt", "Minh Khai", "Phố Huế", "Lê Thanh Nghị"],
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    note: "nhiều quán ăn, cửa hàng, nhà thuốc và dịch vụ cần biển rõ, bền, dễ đọc"
  },
  {
    name: "Phố Huế",
    slug: "lam-bien-quang-cao-pho-hue",
    area: "Hai Bà Trưng",
    wardTerms: ["Phố Huế", "Ngô Thì Nhậm", "Bùi Thị Xuân"],
    nearby: ["Bà Triệu", "Mai Hắc Đế", "Hàng Bài", "Trần Xuân Soạn"],
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    note: "tuyến mua sắm trung tâm, hợp biển shop thời trang, showroom và cửa hàng dịch vụ"
  },
  {
    name: "Quang Trung Hà Đông",
    slug: "lam-bien-quang-cao-quang-trung-ha-dong",
    area: "Hà Đông",
    wardTerms: ["Quang Trung", "La Khê", "Yết Kiêu"],
    nearby: ["Trần Phú", "Văn Quán", "Mỗ Lao", "Ngô Thì Nhậm"],
    image: "mau-bien-quan-do-uong-linh-dam-ha-noi.jpg",
    note: "phù hợp shop, quán ăn, trà sữa, siêu thị mini và biển hộp đèn mặt tiền"
  },
  {
    name: "Tố Hữu",
    slug: "lam-bien-quang-cao-to-huu",
    area: "Hà Đông - Nam Từ Liêm",
    wardTerms: ["Vạn Phúc", "La Khê", "Trung Văn", "Mỗ Lao"],
    nearby: ["Lê Văn Lương", "Văn Khê", "Mễ Trì", "Nguyễn Thanh Bình"],
    image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
    note: "khu chung cư và dịch vụ mới, hợp biển cửa hàng, cafe, spa, trung tâm học"
  },
  {
    name: "Mỹ Đình",
    slug: "lam-bien-quang-cao-my-dinh",
    area: "Nam Từ Liêm",
    wardTerms: ["Mỹ Đình 1", "Mỹ Đình 2", "Mễ Trì"],
    nearby: ["Lê Đức Thọ", "Hàm Nghi", "Nguyễn Hoàng", "Phạm Hùng"],
    image: "du-an-bien-kong-billiards.jpg",
    note: "nhiều nhà hàng, quán cafe, phòng tập, showroom và văn phòng cần biển nổi bật"
  },
  {
    name: "Phạm Hùng",
    slug: "lam-bien-quang-cao-pham-hung",
    area: "Nam Từ Liêm - Cầu Giấy",
    wardTerms: ["Mễ Trì", "Mỹ Đình", "Dịch Vọng Hậu"],
    nearby: ["Dương Đình Nghệ", "Tôn Thất Thuyết", "Đỗ Đức Dục", "Trần Duy Hưng"],
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    note: "phù hợp biển công ty, showroom, văn phòng, tòa nhà và backdrop lễ tân"
  },
  {
    name: "Xuân Diệu",
    slug: "lam-bien-quang-cao-xuan-dieu",
    area: "Tây Hồ",
    wardTerms: ["Quảng An", "Tứ Liên", "Tây Hồ"],
    nearby: ["Tô Ngọc Vân", "Đặng Thai Mai", "Nghi Tàm", "Âu Cơ"],
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    note: "phù hợp nhà hàng, cafe, boutique và dịch vụ cần biển thẩm mỹ cao"
  },
  {
    name: "Tô Ngọc Vân",
    slug: "lam-bien-quang-cao-to-ngoc-van",
    area: "Tây Hồ",
    wardTerms: ["Quảng An", "Tây Hồ", "Nhật Tân"],
    nearby: ["Xuân Diệu", "Đặng Thai Mai", "Quảng Khánh", "Nghi Tàm"],
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    note: "hợp quán cafe, nhà hàng, spa, studio và biển vẫy phong cách"
  },
  {
    name: "Nguyễn Văn Cừ",
    slug: "lam-bien-quang-cao-nguyen-van-cu",
    area: "Long Biên",
    wardTerms: ["Ngọc Lâm", "Bồ Đề", "Gia Thụy"],
    nearby: ["Ngô Gia Tự", "Ái Mộ", "Ngọc Thụy", "Cầu Chương Dương"],
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    note: "tuyến lớn, hợp biển showroom, gara, cửa hàng xe và biển mặt tiền rộng"
  },
  {
    name: "Cổ Linh",
    slug: "lam-bien-quang-cao-co-linh",
    area: "Long Biên",
    wardTerms: ["Long Biên", "Thạch Bàn", "Bồ Đề"],
    nearby: ["Aeon Mall Long Biên", "Sài Đồng", "Nguyễn Văn Cừ", "Đàm Quang Trung"],
    image: "bien-pano-ha-noi.jpg",
    note: "phù hợp showroom, nhà hàng, gara, kho xưởng và biển tấm lớn"
  },
  {
    name: "Giải Phóng",
    slug: "lam-bien-quang-cao-giai-phong",
    area: "Hoàng Mai - Đống Đa",
    wardTerms: ["Phương Liệt", "Định Công", "Giáp Bát", "Tương Mai"],
    nearby: ["Trường Chinh", "Kim Đồng", "Linh Đàm", "Đại Cồ Việt"],
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    note: "tuyến đông phương tiện, cần biển rõ từ xa, ánh sáng ổn và bố cục dễ đọc"
  },
  {
    name: "Tam Trinh",
    slug: "lam-bien-quang-cao-tam-trinh",
    area: "Hoàng Mai",
    wardTerms: ["Mai Động", "Hoàng Văn Thụ", "Yên Sở"],
    nearby: ["Minh Khai", "Lĩnh Nam", "Vĩnh Hưng", "Đền Lừ"],
    image: "bien-tam-lon-ha-noi.jpg",
    note: "phù hợp biển kho xưởng, cửa hàng, showroom, gara và dịch vụ sửa biển"
  }
];

const services = [
  ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
  ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
  ["Biển bạt Hiflex", "../bien-bat-hiflex-ha-noi/"],
  ["Sửa biển cũ", "../sua-chua-bien-quang-cao-ha-noi/"],
  ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/"],
  ["Mẫu biển thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/"]
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

function serviceLinks() {
  return services
    .map(([label, href]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>Phù hợp khách cần tư vấn vật liệu, chi phí và phương án thi công theo mặt tiền thực tế.</span>
                </a>`)
    .join("\n");
}

function faqsFor(location) {
  return [
    [`Có nhận làm biển quảng cáo ${location.name} không?`, `Có. Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa chữa biển quảng cáo khu vực ${location.name}, ${location.area}, Hà Nội.`],
    [`Khách ở phường/khu vực quanh ${location.name} cần gửi gì để báo giá?`, "Cần gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ lắp đặt, mẫu biển mong muốn và thời gian cần hoàn thiện."],
    [`Có sửa biển cũ quanh ${location.name} không?`, "Có. Nhận thay LED, thay nguồn, thay mặt bạt, sửa hộp đèn, thay chữ nổi, gia cố khung và tư vấn khi nào nên làm mới."],
    [`Biển nào phù hợp tuyến ${location.name}?`, "Tùy mặt bằng. Cửa hàng cần nổi bật buổi tối thường dùng hộp đèn LED hoặc alu chữ nổi có sáng; khai trương hoặc ngân sách thấp có thể dùng Hiflex."]
  ];
}

function renderLocationPage(location) {
  const pageUrl = `${baseUrl}/${location.slug}/`;
  const faqs = faqsFor(location);
  const faqHtml = faqs
    .map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`)
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
        address: {
          "@type": "PostalAddress",
          streetAddress: "Số 92E Ô Chợ Dừa",
          addressLocality: "Đống Đa",
          addressRegion: "Hà Nội",
          addressCountry: "VN"
        },
        areaServed: `${location.name}, ${location.area}, Hà Nội`
      },
      {
        "@type": "Service",
        name: `Làm biển quảng cáo ${location.name}`,
        description: `Làm biển quảng cáo, bảng hiệu cửa hàng, hộp đèn LED, alu chữ nổi và sửa biển cũ quanh ${location.name}, ${location.area}.`,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${location.name}, ${location.area}, Hà Nội`,
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
    <title>Làm biển quảng cáo ${escapeHtml(location.name)} | ${escapeHtml(location.area)}, Hà Nội</title>
    <meta name="description" content="Làm biển quảng cáo ${escapeHtml(location.name)} ${escapeHtml(location.area)}: alu chữ nổi, hộp đèn LED, Hiflex, sửa biển cũ. Gửi ảnh qua Zalo 0989 521 881.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/${location.image}" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo ${escapeHtml(location.name)}">
    <meta property="og:description" content="Thi công bảng hiệu, biển alu, hộp đèn LED, Hiflex và sửa biển cũ quanh ${escapeHtml(location.name)}, ${escapeHtml(location.area)}.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/${location.image}">
    <meta property="og:image:alt" content="Làm biển quảng cáo ${escapeHtml(location.name)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo ${escapeHtml(location.name)}">
    <meta name="twitter:description" content="Gửi ảnh mặt tiền qua Zalo để báo giá biển quảng cáo ${escapeHtml(location.name)}.">
    <meta name="twitter:image" content="${baseUrl}/assets/images/${location.image}">
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
        <nav class="site-nav" data-site-nav aria-label="Điều hướng chính">
          <a href="../lam-bien-quang-cao-dong-da/">Đống Đa</a>
          <a href="../lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi/">Tuyến/phường</a>
          <a href="../lam-bien-quang-cao-gan-day-ha-noi/">Gần đây</a>
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
              <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
              <span>/</span>
              <span>${escapeHtml(location.name)}</span>
            </nav>
            <p class="section-kicker">Khảo sát và thi công tại khu vực của bạn</p>
            <h1>Làm biển quảng cáo ${escapeHtml(location.name)}</h1>
            <p>Bông Sen Trắng nhận làm biển quảng cáo quanh ${escapeHtml(location.name)}, ${escapeHtml(location.area)}, Hà Nội: biển alu chữ nổi, hộp đèn LED, bạt Hiflex, chữ nổi mica/inox và sửa biển cũ. Khu vực này ${escapeHtml(location.note)}. Gửi ảnh mặt tiền qua Zalo để tư vấn nhanh.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${location.image}" alt="Làm biển quảng cáo ${escapeHtml(location.name)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block price-note">
              <h2>Báo giá theo đúng mặt bằng trên tuyến ${escapeHtml(location.name)}</h2>
              <p>Mỗi mặt bằng có điều kiện khác nhau: biển trong ngõ hay mặt phố, tầng 1 hay tầng cao, có cần sáng buổi tối không, có khung cũ hay phải làm mới toàn bộ. Gửi ảnh rõ mặt tiền để Bông Sen Trắng tư vấn phương án và báo giá sát hơn.</p>
            </section>
            <section class="content-block">
              <h2>Phường/khu vực và tuyến gần ${escapeHtml(location.name)}</h2>
              <div class="capability-grid">
                <article>
                  <h3>Phường/khu vực thường gọi</h3>
                  <ul class="check-list">
                    ${listItems(location.wardTerms)}
                  </ul>
                </article>
                <article>
                  <h3>Tuyến đường lân cận</h3>
                  <ul class="check-list">
                    ${listItems(location.nearby)}
                  </ul>
                </article>
              </div>
            </section>
            <section class="content-block">
              <h2>Dịch vụ phù hợp</h2>
              <div class="price-link-grid compact">
${serviceLinks()}
              </div>
            </section>
            <section class="content-block">
              <h2>Quy trình báo giá nhanh</h2>
              <ol class="step-list">
                <li>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo.</li>
                <li>Xác định nhu cầu: làm mới, sửa biển cũ, thay LED, thay mặt bạt, hộp đèn hay alu chữ nổi.</li>
                <li>Tư vấn vật liệu, thời gian thi công và phương án phù hợp ngân sách.</li>
                <li>Báo giá sơ bộ, khảo sát nếu biển lớn, biển cao hoặc kết cấu phức tạp.</li>
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
              <h2>Báo giá quanh ${escapeHtml(location.name)}</h2>
              <p>Gửi ảnh mặt tiền, kích thước và địa chỉ. Có thông tin rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
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
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. ${business.address}. <a href="tel:${business.phoneHref}">${business.phone}</a></p>
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

function renderHubPage() {
  const slug = "lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi";
  const pageUrl = `${baseUrl}/${slug}/`;
  const cards = locations
    .map((location) => `
                <a href="../${location.slug}/">
                  <strong>${escapeHtml(location.name)}</strong>
                  <span>${escapeHtml([...location.wardTerms.slice(0, 3), ...location.nearby.slice(0, 2)].join(", "))}</span>
                </a>`)
    .join("\n");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Làm biển quảng cáo theo tuyến đường và phường tại Hà Nội",
    description: "Danh sách tuyến đường, phường/khu vực tại Hà Nội cho dịch vụ làm biển quảng cáo.",
    url: pageUrl
  };

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Làm biển quảng cáo theo tuyến đường, phường tại Hà Nội</title>
    <meta name="description" content="Tìm làm biển quảng cáo theo tên đường, phường tại Hà Nội: Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc, Tây Sơn, Láng Hạ. Zalo 0989 521 881.">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" type="image/png" href="../assets/images/logo-mark.png">
    <link rel="preload" as="image" href="../assets/images/hero-bien-quang-cao-ha-noi.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="Làm biển quảng cáo theo tuyến đường, phường tại Hà Nội">
    <meta property="og:description" content="Chọn tuyến đường/phường gần vị trí lắp biển để nhận tư vấn và báo giá nhanh.">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/hero-bien-quang-cao-ha-noi.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Làm biển quảng cáo theo tuyến đường, phường tại Hà Nội">
    <meta name="twitter:description" content="Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc, Tây Sơn, Láng Hạ và các khu vực lân cận.">
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body>
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
              <span>/</span>
              <span>Khu vực lắp đặt</span>
            </nav>
            <p class="section-kicker">Khảo sát mặt tiền tại Hà Nội</p>
            <h1>Làm biển quảng cáo theo khu vực tại Hà Nội</h1>
            <p>Chọn khu vực gần vị trí lắp đặt để xem phương án phù hợp cho mặt tiền cửa hàng, quán ăn, cafe, spa, văn phòng hoặc showroom. Nếu không thấy đúng tuyến đường của mình, anh/chị gửi địa chỉ qua Zalo để được tư vấn nhanh.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/hero-bien-quang-cao-ha-noi.jpg" alt="Làm biển quảng cáo theo tuyến đường, phường tại Hà Nội" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>
      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block">
            <h2>Chọn khu vực gần vị trí lắp biển</h2>
            <div class="sitemap-grid local-grid">
${cards}
            </div>
          </section>
          <section class="content-block price-note">
            <h2>Tư vấn theo mặt bằng thực tế</h2>
            <p>Mỗi tuyến phố có mặt tiền, khoảng nhìn và điều kiện treo lắp khác nhau. Gửi ảnh vị trí lắp biển, kích thước dự kiến và thời gian cần hoàn thiện để Bông Sen Trắng tư vấn vật liệu, ánh sáng và chi phí phù hợp.</p>
          </section>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. ${business.address}. <a href="tel:${business.phoneHref}">${business.phone}</a></p>
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

for (const location of locations) {
  fs.mkdirSync(path.join(root, location.slug), { recursive: true });
  fs.writeFileSync(path.join(root, location.slug, "index.html"), renderLocationPage(location), "utf8");
}

const hubSlug = "lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi";
fs.mkdirSync(path.join(root, hubSlug), { recursive: true });
fs.writeFileSync(path.join(root, hubSlug, "index.html"), renderHubPage(), "utf8");

console.log(`Generated ${locations.length} street/ward pages and street hub`);
