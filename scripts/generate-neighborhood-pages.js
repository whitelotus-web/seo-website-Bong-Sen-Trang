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
    slug: "lam-bien-quang-cao-linh-dam-ha-noi",
    title: "Làm biển quảng cáo Linh Đàm Hà Nội | Biển cửa hàng Hoàng Mai",
    description: "Làm biển quảng cáo Linh Đàm, Hoàng Mai: biển cafe, nhà hàng, shop, nhà thuốc, phòng khám, hộp đèn LED, alu chữ nổi. Zalo 0989 521 881.",
    kicker: "Linh Đàm, Hoàng Mai",
    h1: "Làm biển quảng cáo Linh Đàm, Hoàng Mai",
    lead: "Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa biển quảng cáo cho cửa hàng, cafe, nhà hàng, nhà thuốc, phòng khám và điểm kinh doanh quanh Linh Đàm.",
    image: "mau-bien-quan-cafe-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển quảng cáo quán cafe khu Linh Đàm Hà Nội",
    area: "Linh Đàm, Hoàng Mai, Hà Nội",
    streets: ["Linh Đàm", "Bán đảo Linh Đàm", "Nguyễn Hữu Thọ", "Giải Phóng", "Kim Đồng", "Định Công", "Tân Mai", "Khu đô thị Linh Đàm", "Hoàng Liệt", "Đại Kim"],
    needs: [
      "Biển mặt tiền cho cafe, trà sữa, đồ uống take away, nhà hàng và quán ăn.",
      "Biển nhà thuốc, phòng khám, nha khoa cần sáng rõ, sạch và tạo cảm giác tin cậy.",
      "Biển shop thời trang, cửa hàng bán lẻ cần tên thương hiệu dễ đọc và nổi bật khi khách đi ngang.",
      "Sửa biển cũ: thay LED, thay mặt mica/bạt, đổi nội dung, gia cố khung hoặc làm mới khi biển đã xuống cấp."
    ],
    gallery: [
      {
        image: "mau-bien-quan-cafe-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển quán cafe tại Linh Đàm Hà Nội",
        caption: "Mẫu biển cafe khu Linh Đàm: cần ánh sáng rõ, nhận diện tốt buổi tối và bố cục dễ nhìn từ mặt đường."
      },
      {
        image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà hàng tại Linh Đàm Hà Nội",
        caption: "Nhà hàng, quán ăn nên ưu tiên tên quán lớn, món chính rõ và ánh sáng đủ nổi bật vào giờ cao điểm."
      },
      {
        image: "mau-bien-quan-do-uong-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển quán đồ uống tại Linh Đàm Hà Nội",
        caption: "Quán đồ uống, trà sữa, nước ép thường hợp hộp đèn, chữ nổi LED và màu sắc trẻ, dễ nhận diện."
      },
      {
        image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà thuốc tại Linh Đàm Hà Nội",
        caption: "Nhà thuốc cần biển sáng đều, chữ dễ đọc, có thể kết hợp hộp đèn và chữ nổi để tăng độ tin cậy."
      },
      {
        image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển phòng khám nha khoa tại Linh Đàm Hà Nội",
        caption: "Phòng khám, nha khoa cần bố cục sạch, thông tin dịch vụ rõ và màu sắc chuyên nghiệp."
      },
      {
        image: "mau-bien-shop-quan-ao-ha-noi.jpg",
        alt: "Mẫu biển shop quần áo tại Hà Nội",
        caption: "Shop quần áo nên chọn biển dễ lên ảnh, tên thương hiệu rõ và có điểm nhìn nổi bật từ xa."
      }
    ],
    links: [
      ["Làm biển quảng cáo Hoàng Mai", "../lam-bien-quang-cao-hoang-mai/"],
      ["Biển quán cafe Hà Nội", "../bien-quan-cafe-ha-noi/"],
      ["Biển quán ăn uống Hà Nội", "../bien-quan-an-uong-ha-noi/"],
      ["Biển nhà thuốc Hà Nội", "../bien-nha-thuoc-ha-noi/"],
      ["Biển shop quần áo Hà Nội", "../bien-shop-quan-ao-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
      ["Sửa chữa biển quảng cáo Hà Nội", "../sua-chua-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển quảng cáo tại Linh Đàm không?", "Có. Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa biển quảng cáo quanh Linh Đàm, Hoàng Mai và các khu vực lân cận tại Hà Nội."],
      ["Linh Đàm nên làm loại biển nào cho cửa hàng?", "Tùy mặt tiền và ngành hàng. Cafe, đồ uống thường hợp hộp đèn, chữ nổi LED, biển vẫy. Nhà thuốc, phòng khám cần biển sáng đều, chữ rõ. Shop thời trang nên ưu tiên biển đẹp, dễ lên ảnh và đúng màu thương hiệu."],
      ["Muốn báo giá biển tại Linh Đàm cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, nội dung/logo và thời gian cần hoàn thiện. Có ảnh rõ thì tư vấn vật liệu và báo giá sát hơn."],
      ["Có sửa biển cũ khu Linh Đàm không?", "Có. Có thể thay LED, thay nguồn, thay mặt bạt/mica, đổi nội dung, gia cố khung hoặc làm mới nếu biển đã xuống cấp."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-duy-tan-cau-giay-ha-noi",
    title: "Làm biển quảng cáo Duy Tân Cầu Giấy | Biển văn phòng, showroom",
    description: "Làm biển quảng cáo Duy Tân, Cầu Giấy: biển văn phòng, showroom, cafe, nhà hàng, hộp đèn LED, alu chữ nổi. Zalo 0989 521 881.",
    kicker: "Duy Tân, Cầu Giấy",
    h1: "Làm biển quảng cáo Duy Tân, Cầu Giấy",
    lead: "Khu Duy Tân - Cầu Giấy tập trung nhiều văn phòng, showroom, quán cafe, nhà hàng và dịch vụ. Bông Sen Trắng nhận tư vấn biển mặt tiền, biển công ty, chữ nổi, hộp đèn và sửa biển cũ.",
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    imageAlt: "Biển văn phòng và backdrop logo khu Duy Tân Cầu Giấy",
    area: "Duy Tân, Cầu Giấy, Hà Nội",
    streets: ["Duy Tân", "Trần Thái Tông", "Thành Thái", "Tôn Thất Thuyết", "Cầu Giấy", "Xuân Thủy", "Trung Kính", "Yên Hòa", "Nguyễn Phong Sắc", "Hoàng Quốc Việt"],
    needs: [
      "Biển công ty, bảng tên văn phòng, backdrop logo lễ tân cho tòa nhà văn phòng.",
      "Biển showroom, cửa hàng công nghệ, cửa hàng dịch vụ cần mặt tiền gọn và chuyên nghiệp.",
      "Biển cafe, quán ăn văn phòng cần dễ nhìn buổi trưa/tối và có điểm nhận diện rõ.",
      "Sửa biển cũ: thay chữ, thay LED, đổi nhận diện, gia cố khung hoặc làm lại mặt biển."
    ],
    gallery: [
      {
        image: "du-an-sb-invest-backdrop-le-tan.jpg",
        alt: "Backdrop logo văn phòng tại Hà Nội",
        caption: "Văn phòng, công ty tại khu Duy Tân thường cần logo lễ tân, bảng tên và biển nhận diện đồng bộ."
      },
      {
        image: "du-an-logo-van-phong-fxce.jpg",
        alt: "Biển logo văn phòng công ty tại Hà Nội",
        caption: "Biển công ty nên gọn, đúng màu nhận diện và đọc rõ ở khoảng cách gần trong tòa nhà."
      },
      {
        image: "du-an-bien-tien-coffee.jpg",
        alt: "Biển quán cafe khu văn phòng tại Hà Nội",
        caption: "Cafe, đồ uống khu văn phòng cần biển sáng, dễ nhận diện và hợp phong cách mặt tiền."
      }
    ],
    links: [
      ["Làm biển quảng cáo Cầu Giấy", "../lam-bien-quang-cao-cau-giay/"],
      ["Biển văn phòng công ty", "../bien-van-phong-cong-ty-ha-noi/"],
      ["Biển showroom, văn phòng", "../bien-quang-cao-showroom-van-phong-ha-noi/"],
      ["Biển quán cafe Hà Nội", "../bien-quan-cafe-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển quảng cáo tại Duy Tân không?", "Có. Bông Sen Trắng nhận tư vấn, sản xuất, lắp đặt và sửa biển quảng cáo quanh Duy Tân, Trần Thái Tông, Thành Thái, Tôn Thất Thuyết và khu Cầu Giấy."],
      ["Khu văn phòng Duy Tân nên làm loại biển nào?", "Tùy vị trí. Văn phòng thường dùng bảng tên, logo chữ nổi, backdrop lễ tân; showroom/cửa hàng có thể dùng alu chữ nổi, hộp đèn LED hoặc biển vẫy."],
      ["Có làm biển trong tòa nhà văn phòng không?", "Có. Có thể làm bảng tên công ty, biển phòng ban, logo lễ tân, biển chỉ dẫn và decal kính."],
      ["Muốn báo giá nhanh cần gửi gì?", "Cần ảnh vị trí lắp, kích thước, địa chỉ tòa nhà, file logo và yêu cầu vật liệu hoặc mẫu tham khảo."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-my-dinh-nam-tu-liem-ha-noi",
    title: "Làm biển quảng cáo Mỹ Đình Nam Từ Liêm | Biển showroom, cửa hàng",
    description: "Làm biển quảng cáo Mỹ Đình, Nam Từ Liêm: biển showroom, cửa hàng, văn phòng, nhà hàng, hộp đèn LED, chữ nổi. Zalo 0989 521 881.",
    kicker: "Mỹ Đình, Nam Từ Liêm",
    h1: "Làm biển quảng cáo Mỹ Đình, Nam Từ Liêm",
    lead: "Bông Sen Trắng nhận thi công biển quảng cáo cho showroom, cửa hàng, văn phòng, nhà hàng, phòng tập và điểm kinh doanh quanh Mỹ Đình - Nam Từ Liêm.",
    image: "du-an-bien-the-fox-fitness.jpg",
    imageAlt: "Biển phát sáng showroom phòng tập khu Mỹ Đình Nam Từ Liêm",
    area: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
    streets: ["Mỹ Đình", "Lê Đức Thọ", "Hàm Nghi", "Mễ Trì", "Đỗ Đức Dục", "Nguyễn Hoàng", "Phạm Hùng", "Trần Hữu Dực", "Đại lộ Thăng Long", "Tố Hữu"],
    needs: [
      "Biển showroom, phòng tập, đại lý, cửa hàng tiện ích cần sáng rõ từ trục đường lớn.",
      "Biển nhà hàng, cafe, quán ăn cần nổi bật vào buổi tối và dễ đọc khi khách đi xe.",
      "Biển văn phòng, công ty cần logo gọn, chuyên nghiệp, đúng nhận diện.",
      "Biển lớn cần kiểm tra khung, vị trí treo, nguồn điện và phương án bảo trì."
    ],
    gallery: [
      {
        image: "du-an-bien-the-fox-fitness.jpg",
        alt: "Biển phát sáng phòng tập showroom tại Hà Nội",
        caption: "Mặt tiền phòng tập, showroom nên ưu tiên chữ sáng rõ và bố cục dễ nhận diện từ xa."
      },
      {
        image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
        alt: "Biển showroom xe điện phát sáng tại Hà Nội",
        caption: "Showroom, đại lý cần biển bền ngoài trời, khung chắc và ánh sáng đủ mạnh buổi tối."
      },
      {
        image: "du-an-bien-kong-billiards.jpg",
        alt: "Biển giải trí dịch vụ buổi tối tại Hà Nội",
        caption: "Các điểm dịch vụ mở buổi tối nên chú trọng độ sáng, độ tương phản và vị trí đọc từ đường."
      }
    ],
    links: [
      ["Làm biển quảng cáo Nam Từ Liêm", "../lam-bien-quang-cao-nam-tu-liem/"],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
      ["Biển showroom, văn phòng", "../bien-quang-cao-showroom-van-phong-ha-noi/"],
      ["Biển gara ô tô xe máy", "../bien-gara-o-to-xe-may-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển quảng cáo tại Mỹ Đình không?", "Có. Nhận làm biển quanh Mỹ Đình, Lê Đức Thọ, Hàm Nghi, Mễ Trì, Phạm Hùng và khu Nam Từ Liêm."],
      ["Biển showroom ở Mỹ Đình nên dùng vật liệu gì?", "Thường dùng alu chữ nổi, hộp đèn LED, tôn lam mặt dựng, chữ nổi mica/inox hoặc kết hợp đèn hắt tùy mặt tiền."],
      ["Có thi công biển lớn ngoài trời không?", "Có, nhưng cần kiểm tra kích thước, khung, vị trí bắt, nguồn điện và điều kiện thi công trước khi báo giá chính xác."],
      ["Cần gửi gì để báo giá?", "Gửi ảnh mặt tiền, kích thước ngang x cao, địa chỉ lắp đặt, logo/nội dung và mẫu biển mong muốn."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-trung-hoa-nhan-chinh-ha-noi",
    title: "Làm biển quảng cáo Trung Hòa Nhân Chính | Biển spa, văn phòng",
    description: "Làm biển quảng cáo Trung Hòa Nhân Chính: biển spa, văn phòng, cafe, nhà hàng, phòng khám, chữ nổi, hộp đèn LED. Zalo 0989 521 881.",
    kicker: "Trung Hòa, Nhân Chính",
    h1: "Làm biển quảng cáo Trung Hòa, Nhân Chính",
    lead: "Khu Trung Hòa - Nhân Chính có nhiều văn phòng, spa, phòng khám, cafe, nhà hàng và cửa hàng dịch vụ. Bông Sen Trắng tư vấn biển theo mặt tiền thực tế và ngân sách.",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    imageAlt: "Biển spa clinic khu Trung Hòa Nhân Chính Hà Nội",
    area: "Trung Hòa, Nhân Chính, Hà Nội",
    streets: ["Trung Hòa", "Nhân Chính", "Hoàng Đạo Thúy", "Lê Văn Lương", "Nguyễn Thị Định", "Nguyễn Tuân", "Vũ Trọng Phụng", "Trần Duy Hưng", "Khuất Duy Tiến", "Nguyễn Ngọc Vũ"],
    needs: [
      "Biển spa, clinic, phòng khám cần sạch, sáng, tin cậy và không rối thông tin.",
      "Biển văn phòng, công ty cần logo đúng nhận diện, thi công gọn trong tòa nhà.",
      "Biển cafe, nhà hàng cần màu sắc và ánh sáng phù hợp khung giờ tối.",
      "Biển cửa hàng dịch vụ cần dễ nhìn từ hai chiều đường và không che khuất mặt tiền."
    ],
    gallery: [
      {
        image: "du-an-may-skin-bien-chu-noi-sang.jpg",
        alt: "Biển spa clinic chữ nổi phát sáng tại Hà Nội",
        caption: "Spa, clinic nên dùng biển sáng sạch, chữ gọn và màu sắc tạo cảm giác tin cậy."
      },
      {
        image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
        alt: "Backdrop clinic khu lễ tân tại Hà Nội",
        caption: "Khu lễ tân có thể dùng logo chữ nổi/backdrop để đồng bộ với biển ngoài mặt tiền."
      },
      {
        image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
        alt: "Chữ nổi hắt sáng phong cách cao cấp tại Hà Nội",
        caption: "Các cửa hàng dịch vụ cao cấp nên ưu tiên chữ nổi, ánh sáng vừa và nền sạch."
      }
    ],
    links: [
      ["Làm biển quảng cáo Thanh Xuân", "../lam-bien-quang-cao-thanh-xuan/"],
      ["Biển nail mi spa Hà Nội", "../bien-nail-mi-spa-ha-noi/"],
      ["Biển phòng khám nha khoa", "../bien-phong-kham-nha-khoa-ha-noi/"],
      ["Biển văn phòng công ty", "../bien-van-phong-cong-ty-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển tại Trung Hòa Nhân Chính không?", "Có. Nhận tư vấn và thi công quanh Hoàng Đạo Thúy, Lê Văn Lương, Nguyễn Thị Định, Nguyễn Tuân, Trần Duy Hưng và khu lân cận."],
      ["Spa/clinic nên làm biển gì?", "Có thể dùng alu chữ nổi, chữ nổi mica LED, hộp đèn mica, biển vẫy nhỏ, decal kính và backdrop logo lễ tân."],
      ["Có làm biển văn phòng trong tòa nhà không?", "Có. Cần gửi quy định tòa nhà nếu có, ảnh vị trí lắp, kích thước và file logo."],
      ["Có sửa biển cũ không?", "Có. Có thể thay LED, thay mặt biển, đổi nội dung hoặc gia cố khung tùy tình trạng."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-van-quan-ha-dong-ha-noi",
    title: "Làm biển quảng cáo Văn Quán Hà Đông | Biển cửa hàng, nhà thuốc",
    description: "Làm biển quảng cáo Văn Quán, Hà Đông: biển cửa hàng, nhà thuốc, cafe, quán ăn, shop, hộp đèn, alu chữ nổi. Zalo 0989 521 881.",
    kicker: "Văn Quán, Hà Đông",
    h1: "Làm biển quảng cáo Văn Quán, Hà Đông",
    lead: "Nhận làm biển quảng cáo cho cửa hàng, nhà thuốc, cafe, quán ăn, shop và văn phòng quanh Văn Quán - Hà Đông, tư vấn theo ảnh mặt tiền và ngân sách.",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Biển cửa hàng mặt tiền khu Văn Quán Hà Đông",
    area: "Văn Quán, Hà Đông, Hà Nội",
    streets: ["Văn Quán", "Nguyễn Trãi", "Trần Phú", "Quang Trung", "Mỗ Lao", "Vạn Phúc", "Ngô Thì Nhậm", "Phùng Hưng", "Tố Hữu", "Lê Trọng Tấn"],
    needs: [
      "Biển cửa hàng bán lẻ, shop, đại lý cần màu rõ và dễ nhìn từ đường.",
      "Biển nhà thuốc, phòng khám cần chữ lớn, sáng đều và thông tin dễ đọc.",
      "Biển cafe, quán ăn cần nổi bật buổi tối và có điểm nhận diện riêng.",
      "Cửa hàng mở mới cần tối ưu chi phí khai trương nhưng vẫn giữ mặt tiền gọn."
    ],
    gallery: [
      {
        image: "du-an-oppo-samsung.jpg",
        alt: "Biển cửa hàng bán lẻ tại Hà Nội",
        caption: "Cửa hàng bán lẻ cần biển dễ nhận diện ngành hàng và màu thương hiệu rõ."
      },
      {
        image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
        alt: "Mẫu biển nhà thuốc sáng rõ tại Hà Nội",
        caption: "Nhà thuốc, phòng khám nên ưu tiên chữ lớn, sáng đều và bố cục sạch."
      },
      {
        image: "mau-bien-sieu-thi-mini-ha-noi.jpg",
        alt: "Mẫu biển siêu thị mini cửa hàng tiện ích tại Hà Nội",
        caption: "Cửa hàng tiện ích, siêu thị mini cần biển lớn, sáng và dễ nhận ra từ xa."
      }
    ],
    links: [
      ["Làm biển quảng cáo Hà Đông", "../lam-bien-quang-cao-ha-dong/"],
      ["Biển nhà thuốc Hà Nội", "../bien-nha-thuoc-ha-noi/"],
      ["Biển siêu thị mini, mẹ và bé", "../bien-sieu-thi-mini-me-va-be-ha-noi/"],
      ["Biển shop quần áo Hà Nội", "../bien-shop-quan-ao-ha-noi/"],
      ["Sửa chữa biển quảng cáo", "../sua-chua-bien-quang-cao-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển tại Văn Quán Hà Đông không?", "Có. Nhận tư vấn, sản xuất, lắp đặt và sửa biển quanh Văn Quán, Nguyễn Trãi, Trần Phú, Mỗ Lao, Quang Trung và khu Hà Đông."],
      ["Cửa hàng nhỏ nên chọn biển gì để tiết kiệm?", "Có thể dùng biển bạt Hiflex, hộp đèn nhỏ hoặc alu chữ nổi tùy ngân sách và thời gian sử dụng."],
      ["Có làm biển nhà thuốc/phòng khám không?", "Có. Cần ưu tiên chữ dễ đọc, ánh sáng đều, bố cục sạch và thông tin liên hệ rõ."],
      ["Có khảo sát trước khi thi công không?", "Có thể khảo sát nếu biển lớn, vị trí cao, cần kiểm tra khung cũ hoặc nguồn điện."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-ho-tay-tay-ho-ha-noi",
    title: "Làm biển quảng cáo Hồ Tây Tây Hồ | Biển cafe, nhà hàng, spa",
    description: "Làm biển quảng cáo Hồ Tây, Tây Hồ: biển cafe, nhà hàng, spa, boutique, khách sạn nhỏ, chữ nổi, hộp đèn LED. Zalo 0989 521 881.",
    kicker: "Hồ Tây, Tây Hồ",
    h1: "Làm biển quảng cáo Hồ Tây, Tây Hồ",
    lead: "Khu Hồ Tây - Tây Hồ có nhiều cafe, nhà hàng, spa, boutique và dịch vụ cao cấp. Bông Sen Trắng tư vấn biển sạch, đẹp, sáng vừa đủ và hợp phong cách thương hiệu.",
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    imageAlt: "Biển chữ nổi hắt sáng phong cách cao cấp khu Hồ Tây Tây Hồ",
    area: "Hồ Tây, Tây Hồ, Hà Nội",
    streets: ["Hồ Tây", "Xuân Diệu", "Tô Ngọc Vân", "Đặng Thai Mai", "Âu Cơ", "Nghi Tàm", "Yên Phụ", "Lạc Long Quân", "Thụy Khuê", "Trích Sài"],
    needs: [
      "Biển cafe, nhà hàng cần phong cách riêng, ánh sáng vừa và dễ nhận diện buổi tối.",
      "Biển spa, boutique, dịch vụ cao cấp cần vật liệu sạch, chữ gọn và hoàn thiện kỹ.",
      "Biển khách sạn nhỏ, homestay, villa cần nhận diện trang nhã, không rối mặt tiền.",
      "Các tuyến phố quanh Hồ Tây nên cân bằng giữa nổi bật và thẩm mỹ tổng thể."
    ],
    gallery: [
      {
        image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
        alt: "Biển chữ nổi hắt sáng phong cách cao cấp tại Hà Nội",
        caption: "Chữ nổi hắt sáng phù hợp cafe, wine bar, boutique và dịch vụ cần cảm giác cao cấp."
      },
      {
        image: "du-an-bien-bep-ba-son-hoi-an.jpg",
        alt: "Biển nhà hàng chữ nổi phát sáng tại Hà Nội",
        caption: "Nhà hàng mở buổi tối cần ánh sáng rõ, logo dễ nhớ và mặt tiền đủ ấm."
      },
      {
        image: "bien-vay-tron-cua-hang-o-hui-ha-noi.jpg",
        alt: "Biển vẫy tròn cửa hàng dịch vụ tại Hà Nội",
        caption: "Biển vẫy tròn giúp khách nhìn thấy từ hai chiều đường, phù hợp mặt tiền nhỏ."
      }
    ],
    links: [
      ["Làm biển quảng cáo Tây Hồ", "../lam-bien-quang-cao-tay-ho/"],
      ["Biển quán cafe Hà Nội", "../bien-quan-cafe-ha-noi/"],
      ["Biển quán ăn uống Hà Nội", "../bien-quan-an-uong-ha-noi/"],
      ["Biển nail mi spa Hà Nội", "../bien-nail-mi-spa-ha-noi/"],
      ["Biển vẫy cửa hàng", "../bien-vay-cua-hang-ha-noi/"]
    ],
    faqs: [
      ["Có nhận làm biển quảng cáo quanh Hồ Tây không?", "Có. Nhận làm biển quanh Xuân Diệu, Tô Ngọc Vân, Đặng Thai Mai, Âu Cơ, Nghi Tàm, Yên Phụ, Lạc Long Quân và khu Tây Hồ."],
      ["Cafe/nhà hàng khu Hồ Tây nên làm biển gì?", "Có thể dùng chữ nổi hắt sáng, hộp đèn LED, biển vẫy, neon decor hoặc bảng menu tùy phong cách quán."],
      ["Spa/boutique nên chọn màu và ánh sáng thế nào?", "Nên chọn màu sạch, ánh sáng vừa đủ, chữ dễ đọc và tránh quá nhiều thông tin trên mặt tiền."],
      ["Có sửa biển cũ hoặc đổi nhận diện không?", "Có. Có thể thay chữ, đổi mặt biển, thay LED, sửa hộp đèn hoặc làm lại bố cục theo nhận diện mới."]
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

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const imageUrl = `${baseUrl}/assets/images/${page.image}`;
  const needsHtml = page.needs.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
  const streetsHtml = page.streets.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n                ");
  const galleryHtml = page.gallery.map((item) => `
                <figure>
                  <img src="../assets/images/${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>`).join("\n");
  const linksHtml = page.links.map(([label, href]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>Xem thêm dịch vụ liên quan</span>
                </a>`).join("\n");
  const faqHtml = page.faqs.map(([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`).join("\n");

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
          "@type": "Place",
          name: page.area
        }
      },
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        provider: { "@id": `${baseUrl}/#localbusiness` },
        areaServed: page.area,
        serviceType: "Làm biển quảng cáo"
      },
      {
        "@type": "ImageGallery",
        name: `Mẫu biển quảng cáo khu ${page.area}`,
        image: page.gallery.map((item) => `${baseUrl}/assets/images/${item.image}`)
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
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

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)}</title>
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
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
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
          <a href="../#dich-vu">Dịch vụ</a>
          <a href="../#du-an">Dự án</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../lam-bien-quang-cao-ha-noi/">Khu vực Hà Nội</a>
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
              <a href="../lam-bien-quang-cao-ha-noi/">Hà Nội</a>
              <span>/</span>
              <span>${escapeHtml(page.area)}</span>
            </nav>
            <span class="eyebrow">${escapeHtml(page.kicker)}</span>
            <h1>${escapeHtml(page.h1)}</h1>
            <p>${escapeHtml(page.lead)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(page.imageAlt)}" loading="eager" fetchpriority="high" decoding="async" width="1200" height="800">
        </div>
      </section>

      <section class="page-content">
        <div class="container content-layout">
          <article>
            <section class="content-block">
              <h2>Nhu cầu làm biển quanh ${escapeHtml(page.kicker)}</h2>
              <p>${escapeHtml(page.overview || `Khu vực ${page.area} có nhiều cửa hàng mặt phố, văn phòng, quán ăn uống, cafe, nhà thuốc, phòng khám và dịch vụ bán lẻ. Khi làm biển, cần ưu tiên khả năng nhìn từ xa, độ sáng buổi tối và bố cục đủ rõ để khách đi ngang nhận ra nhanh.`)}</p>
              <ul>
                ${needsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Khu vực phục vụ</h2>
              <p>Nhận tư vấn và báo giá theo ảnh mặt tiền quanh các tuyến/khu vực sau:</p>
              <ul>
                ${streetsHtml}
              </ul>
            </section>

            <section class="content-block">
              <h2>Mẫu biển tham khảo theo ngành</h2>
              <p>Các ảnh dưới đây dùng để tham khảo kiểu mặt tiền, ánh sáng và bố cục. Khi báo giá thực tế cần chốt kích thước, vật liệu, vị trí lắp và điều kiện thi công.</p>
              <div class="gallery-grid">
${galleryHtml}
              </div>
            </section>

            <section class="content-block">
              <h2>Liên kết dịch vụ liên quan</h2>
              <div class="link-grid">
${linksHtml}
              </div>
            </section>

            <section class="content-block faq-block">
              <h2>Câu hỏi thường gặp</h2>
${faqHtml}
            </section>
          </article>

          <aside class="content-sidebar">
            <div class="quote-card">
              <h2>Báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ tại ${escapeHtml(page.kicker)} và mẫu biển muốn làm qua Zalo để được tư vấn phương án.</p>
              <a class="btn btn-primary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo ${business.phone}</a>
            </div>
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
          <p>${business.address}</p>
          <p><a href="tel:${business.phoneHref}">${business.phone}</a></p>
          <p><a href="${business.facebookUrl}" target="_blank" rel="noopener">Facebook Bông Sen Trắng</a></p>
        </div>
      </div>
    </footer>
    <script src="../assets/js/main.js" defer></script>
  </body>
</html>`;
}

pages.forEach((page) => {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
});

console.log(`Generated ${pages.length} neighborhood SEO pages`);
