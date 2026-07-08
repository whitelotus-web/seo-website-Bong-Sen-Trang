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
    slug: "bien-quan-cafe-cau-giay-ha-noi",
    title: "Biển quán cafe Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "quán cafe",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-quan-cafe-ha-noi",
    image: "du-an-bien-tien-coffee.jpg",
    streets: ["Duy Tân", "Trần Thái Tông", "Trung Kính", "Xuân Thủy", "Cầu Giấy", "Yên Hòa"],
    needs: ["biển hộp đèn dễ nhìn buổi tối", "chữ nổi có ánh sáng hắt", "biển vẫy nhỏ cho mặt tiền hẹp", "neon sign decor trong quán"],
    note: "Cafe tại Cầu Giấy thường cần mặt tiền sáng, gọn và có điểm nhớ vì mật độ quán cao."
  },
  {
    slug: "bien-nha-hang-tay-ho-ha-noi",
    title: "Biển nhà hàng Tây Hồ Hà Nội",
    district: "Tây Hồ",
    industry: "nhà hàng",
    parentArea: "lam-bien-quang-cao-tay-ho",
    parentIndustry: "bien-quang-cao-nha-hang-ha-noi",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    streets: ["Xuân Diệu", "Tô Ngọc Vân", "Đặng Thai Mai", "Âu Cơ", "Nghi Tàm", "Yên Phụ"],
    needs: ["biển alu chữ nổi sang hơn mặt bạt thường", "hộp đèn mặt tiền đọc rõ từ xa", "biển vẫy hút khách đi bộ", "menu/biển chỉ dẫn trong nhà hàng"],
    note: "Nhà hàng quanh Tây Hồ cần biển có thẩm mỹ, ánh sáng vừa đủ và đúng phong cách thương hiệu."
  },
  {
    slug: "bien-shop-quan-ao-dong-da-ha-noi",
    title: "Biển shop quần áo Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "shop quần áo",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-shop-quan-ao-ha-noi",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    streets: ["Ô Chợ Dừa", "Thái Hà", "Chùa Bộc", "Xã Đàn", "Phạm Ngọc Thạch", "Tây Sơn"],
    needs: ["logo và tên shop dễ nhớ", "chữ nổi mica hoặc inox", "biển vẫy cho khách đi hai chiều", "backdrop logo trong shop"],
    note: "Shop thời trang tại Đống Đa cần biển gọn, đúng màu nhận diện và lên ảnh đẹp khi khách check-in."
  },
  {
    slug: "bien-spa-salon-cau-giay-ha-noi",
    title: "Biển spa salon Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "spa, salon, thẩm mỹ",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-quang-cao-spa-salon-ha-noi",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    streets: ["Trần Thái Tông", "Duy Tân", "Nguyễn Phong Sắc", "Hoàng Quốc Việt", "Trung Kính", "Quan Hoa"],
    needs: ["biển sạch, sáng và tin cậy", "chữ nổi mica LED", "hộp đèn nhỏ cho mặt tiền hẹp", "backdrop logo quầy lễ tân"],
    note: "Spa và salon cần biển có cảm giác chuyên nghiệp, không rối, dễ đọc vào buổi tối."
  },
  {
    slug: "bien-nha-thuoc-dong-da-ha-noi",
    title: "Biển nhà thuốc Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "nhà thuốc",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-nha-thuoc-ha-noi",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    streets: ["Ô Chợ Dừa", "Tôn Đức Thắng", "Nguyễn Lương Bằng", "Khâm Thiên", "Xã Đàn", "Phạm Ngọc Thạch"],
    needs: ["màu nhận diện rõ", "hộp đèn LED sáng đều", "biển vẫy cho khách tìm nhanh", "bảng giờ mở cửa và thông tin liên hệ"],
    note: "Nhà thuốc cần biển sáng, rõ chữ và tạo cảm giác tin cậy ngay từ mặt tiền."
  },
  {
    slug: "bien-phong-kham-thanh-xuan-ha-noi",
    title: "Biển phòng khám Thanh Xuân Hà Nội",
    district: "Thanh Xuân",
    industry: "phòng khám",
    parentArea: "lam-bien-quang-cao-thanh-xuan",
    parentIndustry: "bien-phong-kham-nha-khoa-ha-noi",
    image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
    streets: ["Nguyễn Trãi", "Lê Văn Lương", "Nguyễn Tuân", "Khuất Duy Tiến", "Trường Chinh", "Vũ Trọng Phụng"],
    needs: ["biển mặt tiền rõ chuyên khoa", "chữ nổi hoặc hộp đèn dễ đọc", "biển chỉ dẫn tầng/phòng", "backdrop logo quầy tiếp đón"],
    note: "Phòng khám tại Thanh Xuân cần biển rõ thông tin, sạch và đúng cảm giác y tế chuyên nghiệp."
  },
  {
    slug: "bien-tra-sua-ha-dong-ha-noi",
    title: "Biển trà sữa Hà Đông Hà Nội",
    district: "Hà Đông",
    industry: "trà sữa, đồ uống",
    parentArea: "lam-bien-quang-cao-ha-dong",
    parentIndustry: "bien-tra-sua-ha-noi",
    image: "mau-bien-quan-do-uong-linh-dam-ha-noi.jpg",
    streets: ["Văn Quán", "Nguyễn Trãi", "Trần Phú", "Quang Trung", "Mỗ Lao", "Tố Hữu"],
    needs: ["màu sắc trẻ và nổi bật", "hộp đèn hoặc chữ nổi LED", "menu sáng rõ", "biển vẫy thu hút khách đi ngang"],
    note: "Quán trà sữa cần biển sáng, trẻ và dễ lên ảnh trong khu nhiều cửa hàng đồ uống."
  },
  {
    slug: "bien-gara-o-to-long-bien-ha-noi",
    title: "Biển gara ô tô Long Biên Hà Nội",
    district: "Long Biên",
    industry: "gara ô tô, xe máy",
    parentArea: "lam-bien-quang-cao-long-bien",
    parentIndustry: "bien-gara-o-to-xe-may-ha-noi",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    streets: ["Nguyễn Văn Cừ", "Ngô Gia Tự", "Cổ Linh", "Sài Đồng", "Đức Giang", "Bồ Đề"],
    needs: ["biển lớn đọc được từ xa", "khung chắc ngoài trời", "alu chữ nổi hoặc tôn nền", "biển chỉ dẫn khu dịch vụ"],
    note: "Gara và showroom xe cần biển bền, rõ ngành nghề, nhìn tốt từ khoảng cách xa."
  },
  {
    slug: "bien-van-phong-nam-tu-liem-ha-noi",
    title: "Biển văn phòng công ty Nam Từ Liêm Hà Nội",
    district: "Nam Từ Liêm",
    industry: "văn phòng công ty",
    parentArea: "lam-bien-quang-cao-nam-tu-liem",
    parentIndustry: "bien-van-phong-cong-ty-ha-noi",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    streets: ["Mỹ Đình", "Lê Đức Thọ", "Phạm Hùng", "Mễ Trì", "Đỗ Đức Dục", "Hàm Nghi"],
    needs: ["backdrop logo lễ tân", "chữ nổi mica/inox", "biển công ty ngoài cửa", "biển chỉ dẫn phòng ban"],
    note: "Văn phòng tại Nam Từ Liêm thường cần biển nhận diện gọn, chuyên nghiệp và đúng màu thương hiệu."
  },
  {
    slug: "bien-sieu-thi-mini-ha-dong-ha-noi",
    title: "Biển siêu thị mini Hà Đông Hà Nội",
    district: "Hà Đông",
    industry: "siêu thị mini, cửa hàng mẹ và bé",
    parentArea: "lam-bien-quang-cao-ha-dong",
    parentIndustry: "bien-sieu-thi-mini-me-va-be-ha-noi",
    image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
    streets: ["Văn Quán", "Mỗ Lao", "Vạn Phúc", "Quang Trung", "Tố Hữu", "Lê Trọng Tấn"],
    needs: ["biển mặt tiền nhiều thông tin nhưng dễ đọc", "hộp đèn sáng đều", "biển vẫy nhận diện từ hai chiều", "biển phụ cho nhóm hàng"],
    note: "Cửa hàng bán lẻ cần biển rõ tên, ngành hàng và ánh sáng ổn định để khách nhận diện nhanh."
  },
  {
    slug: "bien-salon-toc-ba-dinh-ha-noi",
    title: "Biển salon tóc Ba Đình Hà Nội",
    district: "Ba Đình",
    industry: "salon tóc, barber",
    parentArea: "lam-bien-quang-cao-ba-dinh",
    parentIndustry: "bien-salon-toc-barber-ha-noi",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    streets: ["Kim Mã", "Đội Cấn", "Liễu Giai", "Giảng Võ", "Ngọc Khánh", "Hoàng Hoa Thám"],
    needs: ["biển có cá tính riêng", "chữ nổi hoặc hộp đèn", "biển vẫy barber/salon", "neon sign trang trí"],
    note: "Salon tóc cần biển dễ nhận diện, có điểm nhìn buổi tối và phù hợp phong cách tiệm."
  },
  {
    slug: "bien-quan-an-hoang-mai-ha-noi",
    title: "Biển quán ăn Hoàng Mai Hà Nội",
    district: "Hoàng Mai",
    industry: "quán ăn, hàng ăn",
    parentArea: "lam-bien-quang-cao-hoang-mai",
    parentIndustry: "bien-quan-an-uong-ha-noi",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    streets: ["Linh Đàm", "Giải Phóng", "Tân Mai", "Kim Đồng", "Nguyễn Hữu Thọ", "Định Công"],
    needs: ["biển đọc nhanh món chính", "hộp đèn sáng buổi tối", "menu ngoài cửa", "biển vẫy cho khách đi đường"],
    note: "Quán ăn tại Hoàng Mai cần biển dễ đọc, rõ món bán chính và chi phí thi công hợp lý."
  },
  {
    slug: "bien-quan-pho-bun-dong-da-ha-noi",
    title: "Biển quán phở, bún Đống Đa Hà Nội",
    district: "Đống Đa",
    industry: "quán phở, bún, đồ ăn sáng",
    parentArea: "lam-bien-quang-cao-dong-da",
    parentIndustry: "bien-quan-an-uong-ha-noi",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    streets: ["Ô Chợ Dừa", "Xã Đàn", "Khâm Thiên", "Tôn Đức Thắng", "Nguyễn Lương Bằng", "Chùa Bộc"],
    needs: ["tên quán và món chính đọc nhanh", "hộp đèn sáng sớm và buổi tối", "biển vẫy cho khách đi đường", "menu/biển phụ ngoài cửa"],
    note: "Quán phở, bún cần biển rõ món bán chính, dễ nhìn khi khách đi ngang và chi phí thi công hợp lý."
  },
  {
    slug: "bien-tiem-banh-cafe-cau-giay-ha-noi",
    title: "Biển tiệm bánh cafe Cầu Giấy Hà Nội",
    district: "Cầu Giấy",
    industry: "tiệm bánh, cafe, đồ uống",
    parentArea: "lam-bien-quang-cao-cau-giay",
    parentIndustry: "bien-quan-cafe-ha-noi",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    streets: ["Trần Thái Tông", "Duy Tân", "Trung Kính", "Xuân Thủy", "Nguyễn Phong Sắc", "Yên Hòa"],
    needs: ["biển nhẹ, sáng và sạch", "chữ nổi mica hoặc hộp đèn", "biển vẫy tròn/oval", "neon sign trong quán"],
    note: "Tiệm bánh và cafe cần biển tạo cảm giác sạch, dễ thương hiệu hóa và lên ảnh tốt."
  },
  {
    slug: "bien-cua-hang-dien-thoai-ha-noi",
    title: "Biển cửa hàng điện thoại Hà Nội",
    district: "Hà Nội",
    industry: "cửa hàng điện thoại, phụ kiện, sửa chữa",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "thi-cong-bien-quang-cao-ha-noi",
    image: "du-an-oppo-samsung.jpg",
    streets: ["Cầu Giấy", "Chùa Bộc", "Xã Đàn", "Nguyễn Trãi", "Kim Mã", "Quang Trung"],
    needs: ["logo thương hiệu rõ", "hộp đèn hoặc alu chữ nổi", "biển phụ dịch vụ sửa chữa", "ánh sáng dễ nhận diện buổi tối"],
    note: "Cửa hàng điện thoại cần biển sáng, rõ thương hiệu và dễ phân biệt với các cửa hàng cạnh tranh."
  },
  {
    slug: "bien-showroom-noi-that-ha-noi",
    title: "Biển showroom nội thất Hà Nội",
    district: "Hà Nội",
    industry: "showroom nội thất, vật liệu, trưng bày",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "bien-van-phong-cong-ty-ha-noi",
    image: "du-an-logo-m-led-noi-that.jpg",
    streets: ["Nguyễn Trãi", "Cổ Linh", "Phạm Hùng", "Lê Văn Lương", "Võ Chí Công", "Long Biên"],
    needs: ["biển mặt tiền lớn", "logo chữ nổi hoặc LED hắt sáng", "biển chỉ dẫn khu trưng bày", "vật liệu bền ngoài trời"],
    note: "Showroom nội thất cần biển sang, rõ nhận diện và phù hợp mặt tiền rộng."
  },
  {
    slug: "bien-phong-gym-fitness-ha-noi",
    title: "Biển phòng gym fitness Hà Nội",
    district: "Hà Nội",
    industry: "phòng gym, fitness, yoga",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "bien-quang-cao-theo-nganh-ha-noi",
    image: "du-an-bien-the-fox-fitness.jpg",
    streets: ["Tây Sơn", "Mỹ Đình", "Cầu Giấy", "Lê Văn Lương", "Hoàng Mai", "Hà Đông"],
    needs: ["biển lớn tạo lực nhận diện", "chữ nổi có ánh sáng", "biển chỉ dẫn tầng/phòng tập", "backdrop logo quầy check-in"],
    note: "Phòng gym và fitness cần biển mạnh, dễ nhìn từ xa và có cảm giác năng động."
  },
  {
    slug: "bien-khach-san-nha-nghi-ha-noi",
    title: "Biển khách sạn, nhà nghỉ Hà Nội",
    district: "Hà Nội",
    industry: "khách sạn, nhà nghỉ, căn hộ dịch vụ",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "thi-cong-bien-quang-cao-ha-noi",
    image: "bien-pano-ha-noi.jpg",
    streets: ["Hoàn Kiếm", "Tây Hồ", "Ba Đình", "Cầu Giấy", "Mỹ Đình", "Hà Đông"],
    needs: ["biển đứng hoặc biển dọc dễ thấy", "chữ nổi LED", "hộp đèn sáng đều", "biển chỉ dẫn lễ tân và phòng"],
    note: "Khách sạn, nhà nghỉ cần biển rõ vào ban đêm, nhìn được từ xa và đúng phong cách dịch vụ."
  },
  {
    slug: "bien-cua-hang-me-va-be-ha-noi",
    title: "Biển cửa hàng mẹ và bé Hà Nội",
    district: "Hà Nội",
    industry: "cửa hàng mẹ và bé",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "bien-sieu-thi-mini-me-va-be-ha-noi",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    streets: ["Văn Quán", "Hà Đông", "Cầu Giấy", "Hoàng Mai", "Long Biên", "Nam Từ Liêm"],
    needs: ["màu sắc thân thiện", "hộp đèn hoặc alu chữ nổi", "biển vẫy cho khách nhận diện", "biển phụ nhóm hàng"],
    note: "Cửa hàng mẹ và bé cần biển sáng, dễ thương hiệu hóa và tạo cảm giác tin cậy."
  },
  {
    slug: "bien-cua-hang-vat-lieu-xay-dung-ha-noi",
    title: "Biển cửa hàng vật liệu xây dựng Hà Nội",
    district: "Hà Nội",
    industry: "vật liệu xây dựng, sơn, thiết bị",
    parentArea: "lam-bien-quang-cao-ha-noi",
    parentIndustry: "thi-cong-bien-quang-cao-ha-noi",
    image: "du-an-jotun.jpg",
    streets: ["Long Biên", "Hà Đông", "Hoàng Mai", "Gia Lâm", "Cầu Giấy", "Thanh Xuân"],
    needs: ["biển lớn đọc từ xa", "khung chắc ngoài trời", "bạt Hiflex hoặc alu", "logo hãng và thông tin đại lý rõ"],
    note: "Cửa hàng vật liệu xây dựng cần biển bền, chữ lớn và bố cục rõ để khách nhận diện nhanh."
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

function renderFaq(page) {
  const faqs = [
    [`Muốn báo giá ${page.title.toLowerCase()} cần gửi gì?`, `Gửi ảnh mặt tiền, kích thước ngang x cao dự kiến, địa chỉ tại ${page.district}, mẫu biển thích hoặc file thiết kế nếu có. Có ảnh rõ thì báo giá nhanh và sát hơn.`],
    [`${page.title} nên chọn chất liệu nào?`, `Tùy mặt tiền và ngân sách. Nhóm thường dùng gồm ${page.needs.slice(0, 3).join(", ")}. Nếu cần nổi bật buổi tối nên ưu tiên LED hoặc hộp đèn.`],
    [`Có nhận khảo sát tại ${page.district} không?`, `Có. Với biển lớn, biển cao, mặt bằng khó hoặc cần kiểm tra khung/điện, nên khảo sát trước khi chốt phương án.`],
    [`Có sửa biển cũ cho ${page.industry} tại ${page.district} không?`, "Có. Nhận thay mặt biển, thay LED, thay chữ nổi, sửa hộp đèn, gia cố khung và tư vấn khi nào nên làm mới."]
  ];

  return {
    faqs,
    html: faqs
      .map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`)
      .join("\n")
  };
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const { faqs, html: faqHtml } = renderFaq(page);
  const description = `${page.title}: tư vấn biển alu chữ nổi, hộp đèn LED, biển vẫy, sửa biển cũ. Gửi ảnh qua Zalo 0989 521 881 để báo giá.`;
  const streetsHtml = listItems(page.streets);
  const needsHtml = listItems(page.needs);

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
        areaServed: `${page.district}, Hà Nội`
      },
      {
        "@type": "Service",
        name: page.title,
        description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: `${page.district}, Hà Nội`,
        serviceType: `Làm biển quảng cáo cho ${page.industry}`
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
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(page.title)}">
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
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
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
              <a href="../${page.parentArea}/">${escapeHtml(page.district)}</a>
              <span>/</span>
              <a href="../${page.parentIndustry}/">${escapeHtml(page.industry)}</a>
            </nav>
            <p class="section-kicker">Biển quảng cáo ${escapeHtml(page.industry)} tại ${escapeHtml(page.district)}</p>
            <h1>${escapeHtml(page.title)}</h1>
            <p>${escapeHtml(page.note)} Bông Sen Trắng nhận tư vấn phương án, sản xuất và thi công theo mặt tiền thực tế tại Hà Nội.</p>
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
              <h2>Hạng mục nên ưu tiên cho ${escapeHtml(page.industry)} tại ${escapeHtml(page.district)}</h2>
              <ul class="area-list">
                ${needsHtml}
              </ul>
            </section>

            <section class="content-block price-note">
              <h2>Cách báo giá sát hơn</h2>
              <p>Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt và mẫu biển mong muốn. Với biển lớn, biển cao hoặc cần đi dây LED, nên khảo sát trước để hạn chế phát sinh.</p>
            </section>

            <section class="content-block">
              <h2>Khu vực nhận khảo sát gần ${escapeHtml(page.district)}</h2>
              <p>Nhận tư vấn quanh các tuyến/khu vực:</p>
              <ul class="area-list material-list">
                ${streetsHtml}
              </ul>
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
              <h2>Báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền và kích thước qua Zalo. Có ảnh rõ thì báo giá sát hơn.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              <a href="../${page.parentArea}/">Làm biển quảng cáo ${escapeHtml(page.district)}</a>
              <a href="../${page.parentIndustry}/">Biển ${escapeHtml(page.industry)} Hà Nội</a>
              <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá biển quảng cáo</a>
              <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Hình ảnh mẫu biển</a>
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
</html>
`;
}

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} area-industry SEO pages`);
