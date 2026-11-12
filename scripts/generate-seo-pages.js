const fs = require("fs");
const path = require("path");
const { renderReferenceGallery } = require("./reference-gallery");

const baseUrl = "https://lambienquangcaohanoi.io.vn";
const mapUrl = "https://www.google.com/maps?cid=12475291796553539106";

const business = {
  name: "Công ty TNHH Truyền thông Bông Sen Trắng",
  phone: "0989 521 881",
  phoneHref: "0989521881",
  address: "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội",
  streetAddress: "Số 92E Ô Chợ Dừa",
  addressLocality: "Đống Đa",
  addressRegion: "Hà Nội",
  addressCountry: "VN",
  facebookUrl: "https://www.facebook.com/whitelotus.vn/"
};

const relatedDefault = [
  ["Quy định biển hiệu Hà Nội", "../quy-dinh-bien-hieu-ha-noi/"],
  ["Thi công biển quảng cáo Hà Nội", "../thi-cong-bien-quang-cao-ha-noi/"],
  ["Biển alu chữ nổi Hà Nội", "../bien-alu-chu-noi-ha-noi/"],
  ["Biển hộp đèn LED Hà Nội", "../bien-hop-den-led-ha-noi/"],
  ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
  ["Sửa chữa biển quảng cáo Hà Nội", "../sua-chua-bien-quang-cao-ha-noi/"],
  ["Làm biển quảng cáo Đống Đa", "../lam-bien-quang-cao-dong-da/"],
  ["Làm biển quảng cáo Cầu Giấy", "../lam-bien-quang-cao-cau-giay/"],
  ["Làm biển quảng cáo Thanh Xuân", "../lam-bien-quang-cao-thanh-xuan/"],
  ["Biển quảng cáo nhà hàng Hà Nội", "../bien-quang-cao-nha-hang-ha-noi/"],
  ["Biển quán ăn Hà Nội", "../bien-quang-cao-quan-an-ha-noi/"],
  ["Biển cafe trà sữa Hà Nội", "../bien-quang-cao-cafe-tra-sua-ha-noi/"],
  ["Biển shop thời trang Hà Nội", "../bien-shop-thoi-trang-ha-noi/"],
  ["Làm biển quảng cáo nhanh Hà Nội", "../lam-bien-quang-cao-nhanh-ha-noi/"],
  ["Biển phòng khám nhà thuốc Hà Nội", "../bien-phong-kham-nha-thuoc-ha-noi/"],
  ["Neon sign LED decor Hà Nội", "../neon-sign-led-decor-ha-noi/"],
  ["Mẫu biển nhà hàng chữ nổi", "../du-an-bien-bep-ba-son-hoi-an/"],
  ["Biển quảng cáo spa salon Hà Nội", "../bien-quang-cao-spa-salon-ha-noi/"]
];

const realProjectGallery = [
  {
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    alt: "Biển chữ nổi phát sáng cho mặt tiền cửa hàng làm đẹp",
    caption: "Biển chữ nổi phát sáng nền sáng, phù hợp spa, salon, clinic và cửa hàng cần mặt tiền gọn, sang."
  },
  {
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    alt: "Biển mặt tiền màu đỏ kết hợp chữ nổi cho cửa hàng bán lẻ",
    caption: "Mặt tiền màu thương hiệu nổi bật, chữ nổi lớn và biển dọc hai bên giúp khách dễ nhận ra từ xa."
  },
  {
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    alt: "Biển mặt tiền showroom chữ nổi phát sáng buổi tối",
    caption: "Biển showroom tông tối, chữ phát sáng mạnh, phù hợp cửa hàng cần nhận diện rõ vào buổi tối."
  },
  {
    image: "du-an-brendon-chu-noi-mai-nha.jpg",
    alt: "Chữ nổi kích thước lớn lắp trên mặt dựng cao",
    caption: "Chữ nổi kích thước lớn trên mặt dựng cao, cần căn chỉnh tỉ lệ và điểm bắt chắc khi thi công."
  },
  {
    image: "du-an-sb-invest-backdrop-le-tan.jpg",
    alt: "Backdrop lễ tân văn phòng logo chữ nổi có đèn hắt",
    caption: "Logo và chữ nổi khu lễ tân, kết hợp đèn hắt nền để không gian văn phòng nhìn chuyên nghiệp hơn."
  },
  {
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    alt: "Biển mặt dựng LED và hộp đèn cho cửa hàng trên phố lớn",
    caption: "Mặt dựng lớn kết hợp chữ sáng, bảng LED và hộp đèn, phù hợp vị trí có mật độ người qua lại cao."
  },
  {
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    alt: "Biển mặt tiền cửa hàng với chữ nổi và hình ảnh sản phẩm",
    caption: "Biển mặt tiền có chữ nổi và mảng hình ảnh sản phẩm, giúp thương hiệu bán lẻ dễ gây chú ý."
  },
  {
    image: "du-an-olive-vino-chu-noi-hat-sang.jpg",
    alt: "Biển chữ nổi hắt sáng phong cách tối giản cho cửa hàng",
    caption: "Chữ nổi hắt sáng phong cách tối giản, hợp cửa hàng, cafe, wine bar hoặc không gian cần cảm giác nhẹ."
  },
  {
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    alt: "Biển cửa hàng trái cây hoa tươi màu đỏ nổi bật",
    caption: "Biển mặt tiền tông đỏ, chữ trắng dễ đọc và biển phụ phát sáng cho cửa hàng bán lẻ."
  },
  {
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    alt: "Logo chữ nổi trong khu vực lễ tân clinic",
    caption: "Chữ nổi logo trong khu lễ tân, phù hợp clinic, spa, thẩm mỹ viện và văn phòng cần nhận diện trong nhà."
  },
  {
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    alt: "Hộp đèn vẫy gắn tường cho cửa phòng dịch vụ",
    caption: "Hộp đèn vẫy nhỏ gọn, có viền sáng và chữ nổi, phù hợp lối vào dịch vụ hoặc tầng văn phòng."
  },
  {
    image: "du-an-bien-dung-56-bil.jpg",
    alt: "Biển đứng chữ sáng cho lối vào tòa nhà",
    caption: "Biển đứng màu đen, chữ sáng rõ, dùng tốt cho lối vào tòa nhà, showroom hoặc điểm check-in."
  },
  {
    image: "du-an-sct-clinic-chu-noi-led.jpg",
    alt: "Mẫu chữ nổi LED cho biển clinic trước khi lắp đặt",
    caption: "Cụm chữ nổi LED được kiểm tra ánh sáng trước khi hoàn thiện, giúp hạn chế lỗi sáng không đều."
  },
  {
    image: "du-an-logo-m-led-noi-that.jpg",
    alt: "Logo LED gắn tường nội thất",
    caption: "Logo LED gắn tường nội thất, phù hợp backdrop quầy lễ tân, phòng họp hoặc khu nhận diện thương hiệu."
  }
];

const pages = [
  {
    slug: "quy-dinh-bien-hieu-ha-noi",
    title: "Quy định biển hiệu Hà Nội 2026: kích thước, nội dung, mức phạt",
    description: "Tổng hợp quy định biển hiệu tại Hà Nội: chiều cao tối đa 2m với biển ngang, 4m với biển dọc, nội dung bắt buộc, trường hợp phải xin phép và mức phạt.",
    kicker: "Căn cứ pháp lý và checklist",
    h1: "Quy định biển hiệu tại Hà Nội",
    lead: "Biển hiệu của cửa hàng, công ty tại Hà Nội phải tuân theo Điều 34 Luật Quảng cáo 2012 (sửa đổi, bổ sung 2018): biển ngang cao tối đa 2 m và không dài quá chiều ngang mặt tiền; biển dọc rộng tối đa 1 m, cao tối đa 4 m và không vượt chiều cao tầng nhà nơi đặt biển. Biển phải có tên cơ sở kinh doanh đúng giấy chứng nhận đăng ký kinh doanh, địa chỉ và số điện thoại, không che lối thoát hiểm và không lấn ra vỉa hè, lòng đường.",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    imageAlt: "Biển hiệu cửa hàng lắp tại mặt tiền phố Hà Nội",
    serviceName: "Tư vấn thiết kế biển hiệu đúng quy định",
    sections: [
      ["Kích thước biển hiệu tối đa theo luật", [
        "Điều 34 Luật Quảng cáo 2012, được sửa đổi bổ sung năm 2018, quy định hai dạng biển hiệu với giới hạn khác nhau. Biển hiệu ngang có chiều cao tối đa 2 m, chiều dài không vượt quá chiều ngang mặt tiền nhà. Biển hiệu dọc có chiều ngang tối đa 1 m, chiều cao tối đa 4 m nhưng không được vượt quá chiều cao của tầng nhà nơi đặt biển hiệu.",
        "Điểm dễ sai nhất trên thực tế là chiều dài biển ngang. Mặt tiền 4 m thì biển không nên dài quá 4 m, kể cả phần khung nhô ra hai bên. Với biển dọc gắn trên tầng 2, giới hạn 4 m thường ít vướng, nhưng giới hạn theo chiều cao tầng nhà mới là điều kiện quyết định.",
        "Ngoài kích thước, biển hiệu không được che chắn không gian thoát hiểm, cứu hoả và không được lấn ra vỉa hè, lòng đường gây ảnh hưởng giao thông. Đây là hai lỗi bị xử lý thường xuyên khi kiểm tra trật tự đô thị tại các tuyến phố trung tâm."
      ]],
      ["Nội dung bắt buộc phải có trên biển hiệu", [
        "Khoản 1 Điều 34 quy định biển hiệu phải thể hiện tên cơ quan chủ quản trực tiếp nếu có, tên cơ sở sản xuất kinh doanh đúng với giấy chứng nhận đăng ký kinh doanh, cùng địa chỉ và số điện thoại. Tên trên biển hiệu nên khớp từng chữ với giấy phép, kể cả loại hình doanh nghiệp như Công ty TNHH hay Công ty cổ phần.",
        "Rất nhiều cửa hàng chỉ ghi tên thương hiệu rút gọn mà bỏ phần loại hình doanh nghiệp và địa chỉ. Cách làm này tiện cho thiết kế nhưng không đúng nội dung biển hiệu theo luật. Nếu muốn giữ bố cục gọn, có thể đặt tên đầy đủ ở dòng chính cỡ lớn vừa phải, địa chỉ và điện thoại ở dòng nhỏ bên dưới.",
        "Với hộ kinh doanh, tên trên biển nên lấy theo giấy chứng nhận đăng ký hộ kinh doanh. Với chi nhánh hoặc địa điểm kinh doanh, cần ghi rõ tên đơn vị và địa chỉ của điểm đó để tránh trùng lặp khi có nhiều điểm bán."
      ]],
      ["Chữ viết, tên nước ngoài và logo", [
        "Điều 18 Luật Quảng cáo yêu cầu chữ viết trên sản phẩm quảng cáo phải thể hiện bằng tiếng Việt, trừ trường hợp nhãn hiệu, khẩu hiệu, thương hiệu hoặc tên riêng bằng tiếng nước ngoài đã được quốc tế hoá và không thể thay thế. Khi muốn thể hiện tên viết tắt, tên giao dịch quốc tế hoặc tên nước ngoài, phần đó phải ghi ở phía dưới và có kích thước nhỏ hơn chữ tiếng Việt.",
        "Nghị định 103/2009/NĐ-CP cụ thể hoá tỉ lệ này: chữ nước ngoài không quá 3/4 khổ chữ tiếng Việt và phải đặt bên dưới. Vì vậy bố cục hai dòng — tiếng Việt lớn phía trên, tên tiếng Anh nhỏ phía dưới — vừa đúng luật vừa dễ đọc.",
        "Logo được phép thể hiện nếu đã đăng ký với cơ quan có thẩm quyền, diện tích logo không quá 20% diện tích biển hiệu và không kèm thông tin quảng cáo cho hàng hoá, dịch vụ khác. Đây là lý do các biển có thêm khuyến mãi hoặc danh sách sản phẩm thường bị nhắc nhở."
      ]],
      ["Số lượng và vị trí được phép treo", [
        "Theo Nghị định 103/2009/NĐ-CP, mỗi cơ quan, tổ chức chỉ được đặt một biển hiệu tại cổng; tại trụ sở hoặc nơi kinh doanh chỉ được một biển ngang và không quá hai biển dọc. Biển phải đặt sát cổng hoặc mặt trước của trụ sở, nơi kinh doanh và phải độc lập với tổ chức, cá nhân khác.",
        "Quy định này ảnh hưởng trực tiếp đến các cửa hàng trong ngõ hoặc nhà chia nhiều tầng cho thuê. Nếu mặt tiền đã dùng hết một biển ngang, có thể bổ sung tối đa hai biển dọc để khách nhìn từ hướng đi ngang, thay vì gắn thêm biển ngang thứ hai.",
        "Với biển vẫy gắn hông nhà, cần kiểm tra thêm quy định trật tự xây dựng và ý kiến của phường, vì phần nhô ra ngoài chỉ giới xây dựng thường bị xem là lấn chiếm không gian công cộng."
      ]],
      ["Trường hợp nào phải xin phép", [
        "Điểm b khoản 2 Điều 31 Luật Quảng cáo 2012 nêu rõ: biển hiệu không phải xin phép, trừ trường hợp biển hiệu có diện tích một mặt trên 20 m² và kết cấu khung kim loại hoặc vật liệu xây dựng tương tự gắn vào công trình xây dựng có sẵn. Với đa số cửa hàng, biển dưới ngưỡng này chỉ cần tuân thủ kích thước và nội dung.",
        "Biển quảng cáo ngoài trời không phải biển hiệu — như pano, billboard, màn hình LED quảng cáo — chịu quy định khác về quy hoạch quảng cáo ngoài trời do UBND cấp tỉnh phê duyệt, và thường phải thực hiện thủ tục thông báo hoặc xin phép tuỳ vị trí.",
        "Khi thuê mặt bằng, nên hỏi chủ nhà xem tuyến phố có yêu cầu thống nhất mẫu biển trong đợt chỉnh trang hay không. Nhiều tuyến phố tại Hà Nội áp dụng mẫu biển chung về màu sắc và kích thước, làm biển xong mới biết phải thay là tình huống phổ biến."
      ]],
      ["Mức xử phạt khi làm sai", [
        "Nghị định 38/2021/NĐ-CP quy định xử phạt trong lĩnh vực văn hoá và quảng cáo. Khoản 1 Điều 48 quy định phạt tiền từ 5 đến 10 triệu đồng khi biển hiệu không thể hiện đầy đủ nội dung theo quy định hoặc sai kích thước. Khoản 2 Điều 48 quy định phạt từ 10 đến 15 triệu đồng khi ghi không đúng hoặc không đầy đủ tên trên biển hiệu, hoặc chiều cao biển hiệu dọc vượt quá chiều cao tầng nhà nơi đặt biển.",
        "Nghị định 122/2021/NĐ-CP có mức phạt riêng với việc không treo biển tên doanh nghiệp tại trụ sở, chi nhánh, văn phòng đại diện và địa điểm kinh doanh — mức từ 30 đến 50 triệu đồng. Đây là lý do doanh nghiệp mới thành lập nên làm biển tên sớm thay vì chờ ổn định.",
        "Hành vi treo, đặt, dán, vẽ sản phẩm quảng cáo trên cột điện, trụ điện, cột tín hiệu giao thông và cây xanh nơi công cộng bị cấm theo khoản 16 Điều 8 Luật Quảng cáo. Mức phạt tham khảo từ 1 đến 2 triệu đồng với người treo và 5 đến 10 triệu đồng với người có sản phẩm, hàng hoá được quảng cáo.",
        "Các mức phạt trên có thể được sửa đổi, bổ sung theo văn bản mới. Trước khi triển khai công trình lớn hoặc biển có kết cấu đặc biệt, nên tra cứu văn bản hiện hành và hỏi trực tiếp bộ phận tiếp nhận của phường hoặc quận."
      ]]
    ],
    choiceHeading: "Giới hạn cần nhớ theo từng loại biển",
    choiceIntro: "Bảng tóm tắt các giới hạn thường gặp. Căn cứ chi tiết nêu ở phần trên và cần đối chiếu văn bản hiện hành khi triển khai.",
    choiceRows: [
      ["Biển hiệu ngang", "Cao tối đa 2 m, dài không quá chiều ngang mặt tiền", "Mỗi điểm kinh doanh chỉ một biển ngang"],
      ["Biển hiệu dọc", "Ngang tối đa 1 m, cao tối đa 4 m", "Không vượt chiều cao tầng nhà nơi đặt biển; tối đa hai biển"],
      ["Nội dung trên biển", "Tên đúng giấy đăng ký kinh doanh, địa chỉ, điện thoại", "Chữ nước ngoài ở dưới, không quá 3/4 chữ tiếng Việt"],
      ["Logo", "Chỉ dùng logo đã đăng ký", "Diện tích không quá 20% diện tích biển"],
      ["Biển một mặt trên 20 m²", "Khung kim loại gắn vào công trình có sẵn", "Thuộc trường hợp phải xin phép"],
      ["Treo trên cột điện, cây xanh", "Không được phép", "Bị xử phạt theo quy định về quảng cáo"]
    ],
    stepsHeading: "Checklist trước khi đặt biển",
    steps: [
      "Đo chiều ngang mặt tiền thực tế và trừ phần khung nhô ra hai bên trước khi chốt chiều dài biển.",
      "Đối chiếu tên trên biển với giấy chứng nhận đăng ký kinh doanh, gồm cả loại hình doanh nghiệp.",
      "Kiểm tra vị trí biển có che lối thoát hiểm, cửa cuốn, hộp kỹ thuật hoặc lấn vỉa hè hay không.",
      "Xác định biển có diện tích một mặt trên 20 m² và gắn vào công trình có sẵn hay không để biết có phải xin phép.",
      "Hỏi phường hoặc chủ nhà về mẫu biển chung của tuyến phố nếu đang trong đợt chỉnh trang.",
      "Lưu lại ảnh biển sau khi lắp và hồ sơ thiết kế để đối chiếu khi cơ quan chức năng kiểm tra."
    ],
    focusHeading: "Bước tiếp theo cho cửa hàng của bạn",
    focusLinks: [
      ["Xem khung giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/", "Đối chiếu chi phí theo từng hạng mục trước khi chọn vật liệu."],
      ["Báo giá biển alu chữ nổi", "../bao-gia-bien-alu-chu-noi-ha-noi/", "Phương án phổ biến cho mặt tiền cần nhận diện dài hạn."],
      ["Báo giá biển bạt theo kích thước", "../bao-gia-bien-bat-hiflex-ha-noi/", "Phương án tiết kiệm, phù hợp khai trương và thay nội dung."],
      ["Gửi ảnh mặt tiền để báo giá", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/", "Bốn thông tin nên gửi để được tư vấn nhanh."],
      ["Sửa chữa biển quảng cáo", "../sua-chua-bien-quang-cao-ha-noi/", "Xử lý biển sai kích thước, bong tróc hoặc mất sáng."],
      ["Chính sách bảo hành", "../chinh-sach-bao-hanh-bien-quang-cao-ha-noi/", "Phạm vi bảo hành theo từng hạng mục."]
    ],
    gallery: realProjectGallery.slice(0, 3),
    galleryHeading: "Biển hiệu đã thi công tại Hà Nội",
    related: [
      ["Làm biển quảng cáo tại Hà Nội", "../lam-bien-quang-cao-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
      ["Làm biển mặt tiền cửa hàng", "../lam-bien-mat-tien-cua-hang-ha-noi/"],
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
      ["Sửa chữa biển quảng cáo", "../sua-chua-bien-quang-cao-ha-noi/"]
    ],
    faq: [
      ["Biển hiệu ngang được cao tối đa bao nhiêu mét?", "Theo khoản 3 Điều 34 Luật Quảng cáo 2012, biển hiệu ngang có chiều cao tối đa 2 m và chiều dài không vượt quá chiều ngang mặt tiền nhà."],
      ["Một cửa hàng được treo mấy biển hiệu?", "Theo Nghị định 103/2009/NĐ-CP, mỗi điểm kinh doanh được một biển ngang và không quá hai biển dọc, đặt sát cổng hoặc mặt trước nơi kinh doanh."],
      ["Treo biển hiệu có phải xin phép không?", "Không phải xin phép, trừ trường hợp biển có diện tích một mặt trên 20 m² và kết cấu khung kim loại gắn vào công trình xây dựng có sẵn."],
      ["Có được ghi tên tiếng Anh trên biển không?", "Được, nhưng phải đặt bên dưới chữ tiếng Việt và có kích thước không quá 3/4 khổ chữ tiếng Việt, trừ tên riêng hoặc nhãn hiệu đã được quốc tế hoá."],
      ["Làm biển sai kích thước bị phạt bao nhiêu?", "Theo Nghị định 38/2021/NĐ-CP, mức phạt tham khảo 5 đến 10 triệu đồng nếu biển không đủ nội dung hoặc sai kích thước; 10 đến 15 triệu đồng nếu tên không đúng hoặc chiều cao biển dọc vượt chiều cao tầng nhà."]
    ]
  },
  {
    slug: "thi-cong-bien-quang-cao-ha-noi",
    title: "Thi công biển quảng cáo Hà Nội | Lắp đặt trọn gói",
    description: "Thi công biển quảng cáo Hà Nội: mặt dựng alu, chữ nổi LED, hộp đèn cho cửa hàng, showroom và công trình. Gửi ảnh, kích thước để tư vấn báo giá.",
    kicker: "Khảo sát, sản xuất và lắp đặt",
    h1: "Thi công biển quảng cáo Hà Nội",
    lead: "Bông Sen Trắng tư vấn, sản xuất và lắp đặt biển quảng cáo mới tại Hà Nội cho cửa hàng, nhà hàng, showroom và văn phòng. Với mặt dựng lớn hoặc vị trí lắp đặt trên cao, phương án được trao đổi theo kích thước, kết cấu, điều kiện tiếp cận và ngân sách thực tế.",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    imageAlt: "Thi công biển quảng cáo chữ nổi tại Hà Nội",
    serviceName: "Thi công biển quảng cáo Hà Nội",
    sections: [
      ["Thi công theo đúng nhu cầu của mặt bằng", [
        "Biển mặt phố cần dễ đọc khi khách di chuyển, cửa hàng bán tối cần ánh sáng rõ, mặt tiền trong ngõ thường cần thêm biển vẫy, còn showroom và văn phòng chú trọng tỉ lệ logo cùng độ hoàn thiện. Vì vậy cùng một kích thước nhưng phương án vật liệu và kết cấu có thể khác nhau.",
        "Bông Sen Trắng tiếp nhận ảnh mặt tiền, địa chỉ và mẫu nhận diện trước; trường hợp biển lớn, vị trí cao, cần tận dụng khung cũ hoặc khó đo kích thước sẽ được đề xuất khảo sát trực tiếp tại Hà Nội."
      ]],
      ["Hạng mục có thể triển khai", [
        "Các hạng mục làm mới gồm mặt dựng alu, chữ nổi mica hoặc inox, chữ phát sáng LED, hộp đèn, biển vẫy, biển công ty, logo và backdrop lễ tân. Với công trình nhiều hạng mục, cần thống nhất bản vẽ, vật liệu, khung, hệ điện và phạm vi lắp đặt trước khi sản xuất.",
        "Với cửa hàng mới, nên xác định đồng thời biển chính, biển vẫy, decal kính và vị trí cấp điện để tránh làm từng phần thiếu đồng bộ. Với biển cũ, cần kiểm tra kết cấu trước khi quyết định tận dụng hay thay mới."
      ]],
      ["Một báo giá thi công cần làm rõ những gì?", [
        "Báo giá nên thể hiện kích thước, vật liệu nền, chất liệu và độ dày chữ, loại LED hoặc nguồn sáng, hệ khung, số lượng hạng mục và phần lắp đặt. Độ cao, đường vận chuyển, nguồn điện và thời gian thi công cũng có thể ảnh hưởng chi phí.",
        "Nếu mới có ảnh mà chưa có kích thước, anh/chị vẫn có thể gửi Zalo để nhận hướng tư vấn ban đầu. Khoảng giá chỉ chính xác hơn sau khi đã chốt kích thước, cấu tạo và điều kiện mặt bằng."
      ]],
      ["So sánh hai báo giá thi công trên cùng một cấu hình", [
        "Trước khi so tổng tiền, hãy đối chiếu chiều ngang và chiều cao biển, diện tích mặt dựng, số lượng chữ hoặc logo, chất liệu mặt biển và cấu tạo khung. Hai biển cùng diện tích nhưng khác số chữ, cách chiếu sáng hoặc phần khung cần thay sẽ có phạm vi công việc khác nhau.",
        "Yêu cầu làm rõ các khoản tháo biển cũ, vận chuyển, lắp đặt trên cao, cấp điện, vệ sinh và thuế đã nằm trong giá chưa. Với phần chưa thể xác định qua ảnh, nên ghi điều kiện cần khảo sát trước khi chốt; không nên coi khoảng giá ban đầu là tổng chi phí cuối cùng."
      ]],
      ["Những thông tin cần chốt trước khi đưa biển vào sản xuất", [
        "Kiểm tra bản thiết kế cuối cùng: tên cửa hàng, dấu tiếng Việt, số điện thoại, logo, kích thước, màu sắc và vị trí lắp đặt. Người đặt biển nên xác nhận cùng một phiên bản thiết kế với bên thi công để tránh sản xuất theo bản cũ.",
        "Nếu thay nội dung, vật liệu hoặc kích thước sau khi đã chốt, cần xác nhận lại phần việc đã thực hiện, chi phí thay đổi và lịch bàn giao. Với cửa hàng đang hoạt động, thống nhất thêm thời gian tiếp cận mặt bằng và cách bố trí lối ra vào trong lúc lắp đặt."
      ]],
      ["Kiểm tra trước khi bàn giao", [
        "Sau lắp đặt cần kiểm tra độ chắc của khung và điểm bắt, độ thẳng của mặt biển, khoảng cách chữ, màu sắc nhận diện, độ sáng và tình trạng nguồn điện. Các phần có thể quan sát nên được đối chiếu với phương án đã chốt trước khi bàn giao.",
        "Phạm vi bảo hành phụ thuộc hạng mục và vật liệu sử dụng. Nội dung này được trao đổi cùng báo giá để khách biết phần nào được bảo hành và cách liên hệ khi cần kiểm tra."
      ]]
    ],
    choiceHeading: "Chọn phương án theo vị trí và cách cửa hàng hoạt động",
    choiceIntro: "Bảng dưới đây là hướng chọn ban đầu. Vật liệu cuối cùng vẫn cần đối chiếu với kích thước, nhận diện và điều kiện lắp đặt.",
    choiceRows: [
      ["Mặt phố, cần nhận diện bền", "Mặt alu kết hợp chữ nổi mica hoặc inox", "Mặt nền phẳng, chữ rõ và có thể bổ sung sáng mặt hoặc hắt chân"],
      ["Quán ăn, cafe bán buổi tối", "Hộp đèn, chữ nổi LED hoặc biển vẫy", "Tăng khả năng nhìn thấy tên quán khi trời tối và từ hướng đi ngang"],
      ["Khai trương, ngân sách cần kiểm soát", "Biển bạt Hiflex hoặc cấu hình tối giản", "Thi công gọn và dễ thay nội dung khi nhận diện còn thay đổi"],
      ["Showroom, văn phòng, quầy lễ tân", "Chữ nổi, logo và backdrop", "Ưu tiên tỉ lệ, màu nhận diện và bề mặt hoàn thiện"],
      ["Biển cũ xuống màu hoặc mất sáng", "Kiểm tra khung, mặt biển, LED và nguồn", "Chỉ thay phần hỏng khi kết cấu cũ vẫn phù hợp và an toàn"]
    ],
    stepsHeading: "Quy trình thi công từ ảnh mặt tiền đến bàn giao",
    steps: [
      "Tiếp nhận ảnh mặt tiền, địa chỉ, kích thước dự kiến, mẫu thiết kế và thời điểm cần hoàn thành.",
      "Tư vấn cấu tạo, vật liệu, cách chiếu sáng và các hạng mục cần làm theo mục tiêu sử dụng.",
      "Báo giá sơ bộ; khảo sát trực tiếp khi vị trí cao, biển lớn, cần đo chính xác hoặc kiểm tra khung cũ.",
      "Chốt thiết kế, kích thước, vật liệu, màu sắc, phạm vi lắp đặt và nội dung bảo hành.",
      "Sản xuất, thử sáng hoặc kiểm tra cấu kiện trước khi đưa tới công trình.",
      "Lắp đặt, vệ sinh, kiểm tra hoàn thiện và bàn giao theo phương án đã thống nhất."
    ],
    focusHeading: "Đi tiếp theo đúng tình huống của anh/chị",
    focusLinks: [
      ["Xem khung giá tham khảo", "../bao-gia-bien-quang-cao-ha-noi/", "So sánh các hạng mục phổ biến và những yếu tố làm thay đổi giá."],
      ["Gửi ảnh mặt tiền để báo giá", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/", "Xem bốn thông tin nên gửi qua Zalo để được tư vấn nhanh hơn."],
      ["Làm biển mặt tiền cửa hàng", "../lam-bien-mat-tien-cua-hang-ha-noi/", "Chọn bố cục, vật liệu và ánh sáng theo mặt tiền thực tế."],
      ["Cần hoàn thiện gấp", "../lam-bien-quang-cao-can-gap-ha-noi/", "Kiểm tra khả năng đáp ứng theo thiết kế, vật liệu và ngày khai trương."],
      ["Kiểm tra bảo hành và bàn giao", "../chinh-sach-bao-hanh-bien-quang-cao-ha-noi/", "Đối chiếu phạm vi bảo hành và thông tin cần giữ lại sau lắp đặt."],
      ["Xem hạng mục đã thực hiện", "../nang-luc-thi-cong-bien-quang-cao-ha-noi/", "Tham khảo hình ảnh sản xuất, lắp đặt và các hạng mục của Bông Sen Trắng."]
    ],
    gallery: realProjectGallery.slice(0, 6),
    galleryHeading: "Hình ảnh hạng mục Bông Sen Trắng đã thực hiện",
    related: [
      ["Làm biển quảng cáo tại Hà Nội", "../lam-bien-quang-cao-ha-noi/"],
      ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
      ["Gửi ảnh báo giá qua Zalo", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/"],
      ["Làm biển mặt tiền cửa hàng", "../lam-bien-mat-tien-cua-hang-ha-noi/"],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/"],
      ["Làm biển quảng cáo Đống Đa", "../lam-bien-quang-cao-dong-da/"],
      ["Báo giá biển alu chữ nổi", "../bao-gia-bien-alu-chu-noi-ha-noi/"],
      ["Xem hình ảnh biển thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/"]
    ],
    faq: [
      ["Thi công biển quảng cáo tại Hà Nội mất bao lâu?", "Thời gian phụ thuộc thiết kế, kích thước, vật liệu, số lượng hạng mục và điều kiện lắp đặt. Tiến độ chỉ nên chốt sau khi đã thống nhất đầy đủ cấu tạo và mặt bằng."],
      ["Chưa có kích thước thì có báo giá được không?", "Có thể gửi ảnh mặt tiền để được tư vấn cấu hình và khoảng giá ban đầu. Báo giá chính xác hơn cần kích thước và điều kiện thi công cụ thể."],
      ["Có nhận sửa và tận dụng biển cũ không?", "Có. Cần kiểm tra khung, mặt biển, chữ, LED và nguồn trước; phần còn phù hợp có thể được đề xuất giữ lại để tránh thay mới không cần thiết."],
      ["Có nhận hạng mục cần hoàn thiện gấp không?", "Có thể kiểm tra khả năng đáp ứng theo ngày cần hoàn thành, nhưng còn phụ thuộc thiết kế đã chốt, vật liệu có sẵn và độ khó của vị trí lắp đặt."],
      ["Biển sau lắp đặt có bảo hành không?", "Có bảo hành theo từng hạng mục và vật liệu sử dụng. Phạm vi và thời gian bảo hành được trao đổi rõ trong quá trình báo giá."]
    ]
  },
  {
    slug: "bien-alu-chu-noi-ha-noi",
    title: "Làm biển alu chữ nổi Hà Nội | Thi công & báo giá",
    description: "Làm biển alu chữ nổi tại Hà Nội: chữ mica, inox, chữ LED cho cửa hàng, showroom và mặt dựng. Gửi ảnh, kích thước để tư vấn báo giá.",
    kicker: "Biển mặt tiền và mặt dựng alu",
    h1: "Làm biển alu chữ nổi tại Hà Nội",
    lead: "Bông Sen Trắng tư vấn, sản xuất và lắp đặt biển nền alu kết hợp chữ mica, inox hoặc chữ nổi LED cho cửa hàng, showroom và công trình tại Hà Nội. Gửi ảnh mặt tiền và nhu cầu sử dụng để trao đổi cấu tạo và báo giá.",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Biển alu chữ nổi cho mặt tiền cửa hàng",
    serviceName: "Biển alu chữ nổi Hà Nội",
    serviceDescription: "Tư vấn, sản xuất và lắp đặt biển nền alu kết hợp chữ nổi mica, inox hoặc chữ LED cho cửa hàng, showroom và công trình tại Hà Nội.",
    sections: [
      ["Biển alu chữ nổi gồm những phần nào?", [
        "Một bộ biển thường có mặt nền alu, hệ khung và điểm liên kết, chữ hoặc logo nổi; nếu cần sáng sẽ có thêm LED, nguồn điện và dây dẫn. Từng phần cần được chọn theo kích thước, vị trí lắp đặt và cách thể hiện thương hiệu.",
        "Biển alu phù hợp khi muốn thể hiện tên cửa hàng hoặc nhận diện doanh nghiệp trên một mặt nền riêng. Với mặt dựng lớn, cần trao đổi cả phương án chia tấm, vị trí mối nối, kết cấu và điều kiện tiếp cận để lắp đặt."
      ]],
      ["Chọn chữ mica, inox hay chữ nổi LED?", [
        "Chữ mica có nhiều lựa chọn màu sắc và có thể kết hợp LED sáng mặt. Chữ inox tạo bề mặt kim loại; có thể cân nhắc phương án không đèn hoặc hắt sáng theo thiết kế. Chọn loại nào còn phụ thuộc khoảng cách nhìn, mặt bằng, ngân sách và điều kiện ngoài trời.",
        "Với chữ LED sáng mặt, khách nhìn thấy phần mặt chữ phát sáng. Với chữ hắt chân, ánh sáng tạo quầng phía sau chữ. Hai cách tạo hiệu ứng khác nhau, nên thống nhất mẫu, màu sáng và cách đi điện trước khi gia công."
      ]],
      ["Giá biển alu chữ nổi được tính theo những hạng mục nào?", [
        "Đơn giá mặt nền theo diện tích không đồng nghĩa với giá hoàn thiện cả biển. Chữ, logo, LED, nguồn, khung, vận chuyển và lắp đặt có thể được tính riêng; kích thước, chất liệu, độ cao và hiện trạng mặt bằng cũng ảnh hưởng báo giá.",
        "Để so sánh hai phương án, hãy yêu cầu ghi rõ diện tích nền, vật liệu và kích thước chữ, kiểu chiếu sáng, hệ khung, phạm vi điện, công lắp đặt và bảo hành. Khi chưa đủ thông tin, mức dự tính ban đầu cần được xác nhận lại sau khảo sát."
      ]],
      ["Mặt dựng lớn và biển đồng bộ nhiều điểm bán", [
        "Với công trình lớn hoặc nhiều cửa hàng, gửi danh sách địa chỉ, ảnh toàn cảnh, kích thước dự kiến và số lượng từng hạng mục. Nếu có bộ nhận diện hoặc bản vẽ sẵn, gửi kèm file để trao đổi cách đồng bộ màu sắc, chữ và ánh sáng.",
        "Mỗi mặt bằng có thể khác về độ cao, khả năng chịu tải, điểm bắt, đường vận chuyển và nguồn điện. Phương án khảo sát, thiết kế, sản xuất và tiến độ cần được thống nhất theo từng vị trí."
      ]],
      ["Cần gửi gì để nhận tư vấn báo giá?", [
        "Chụp thẳng mặt tiền và thêm một ảnh rộng thấy lối tiếp cận; ghi chiều ngang × chiều cao dự kiến, địa chỉ và loại chữ muốn làm. Nếu cần đèn, cho biết muốn sáng mặt hay hắt chân, có nguồn điện gần vị trí lắp hay không.",
        "Kèm mẫu logo, số lượng điểm bán và thời gian mong muốn nếu có. Chưa có kích thước vẫn có thể gửi ảnh để trao đổi ban đầu, sau đó xác nhận lại kích thước và điều kiện thi công trước khi chốt."
      ]]
    ],
    choiceHeading: "Chọn cấu hình theo nhu cầu mặt tiền",
    choiceIntro: "Các phương án dưới đây giúp bắt đầu trao đổi. Cấu tạo thực tế cần được thống nhất sau khi xem mặt bằng và thiết kế.",
    choiceRows: [
      ["Cần nhận diện rõ ban ngày", "Nền alu kết hợp chữ mica hoặc inox không đèn", "Tập trung vào độ tương phản, kích thước chữ và bố cục mặt biển."],
      ["Cửa hàng hoạt động buổi tối", "Nền alu kết hợp chữ nổi LED sáng mặt hoặc hắt chân", "Chọn kiểu sáng, vị trí nguồn và phương án đi dây theo mặt bằng."],
      ["Mặt dựng rộng hoặc nhiều điểm bán", "Mặt alu, logo và chữ theo bộ nhận diện", "Cần đối chiếu kích thước, kết cấu và lịch lắp đặt cho từng địa điểm."]
    ],
    focusHeading: "Xem mẫu và báo giá theo hạng mục",
    focusLinks: [
      ["Báo giá biển alu chữ nổi", "../bao-gia-bien-alu-chu-noi-ha-noi/", "Xem các phần nền, chữ, LED và khung cần đối chiếu khi báo giá."],
      ["Chữ nổi mica, inox và LED", "../chu-noi-mica-inox-ha-noi/", "Chọn vật liệu và cách chiếu sáng cho chữ hoặc logo."],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/", "Xem phương án mặt biển phát sáng và biển vẫy."],
      ["Thi công biển quảng cáo", "../thi-cong-bien-quang-cao-ha-noi/", "Tìm hiểu quy trình khảo sát, sản xuất và lắp đặt."]
    ],
    galleryHeading: "Hình ảnh tham khảo mặt biển và chữ phát sáng",
    gallery: [
      { image: "du-an-may-skin-bien-chu-noi-sang.jpg", alt: "Chữ May Skin hắt sáng trên mặt tiền cửa hàng", caption: "Chữ hắt sáng trên mặt tiền cửa hàng." },
      { image: "du-an-bien-chu-noi-mo-nguyen.jpg", alt: "Chữ nổi Mơ Nguyễn có ánh sáng trên mặt biển", caption: "Chữ nổi kết hợp ánh sáng trên mặt biển." },
      { image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg", alt: "Mặt tiền cửa hàng có chữ và logo phát sáng", caption: "Mặt dựng với chữ và logo phát sáng để tham khảo cách bố trí." }
    ],
    faq: [
      ["Biển alu chữ nổi có dùng ngoài trời được không?", "Có. Cần chọn vật liệu, khung và cách chống nước phù hợp vị trí lắp đặt."],
      ["Biển alu chữ nổi LED sáng mặt và hắt chân khác nhau thế nào?", "Sáng mặt làm phần mặt chữ phát sáng; hắt chân tạo quầng sáng phía sau chữ. Phương án phù hợp tùy mẫu chữ, nền và vị trí lắp đặt."],
      ["Giá nền alu đã gồm chữ nổi và lắp đặt chưa?", "Không nên mặc định đã bao gồm. Hãy đối chiếu từng hạng mục nền, chữ, khung, LED, vận chuyển và lắp đặt trong báo giá cụ thể."],
      ["Có nhận làm theo mẫu thiết kế sẵn không?", "Có. Có thể gia công theo file thiết kế đã duyệt hoặc hỗ trợ căn chỉnh lại cho đúng kích thước thi công."],
      ["Làm biển cho nhiều cửa hàng cần chuẩn bị gì?", "Nên gửi danh sách địa chỉ, số lượng, ảnh mặt tiền, kích thước dự kiến, logo và thời gian cần bàn giao để thống nhất phương án cho từng điểm."]
    ]
  },
  {
    slug: "bien-hop-den-led-ha-noi",
    title: "Làm biển hộp đèn LED Hà Nội | Tư vấn, thi công",
    description: "Làm biển hộp đèn LED tại Hà Nội cho cửa hàng, showroom và chuỗi điểm bán. Gửi ảnh mặt tiền, kích thước và số lượng để tư vấn báo giá.",
    kicker: "Tư vấn và thi công biển có đèn",
    h1: "Làm biển hộp đèn LED tại Hà Nội",
    lead: "Bông Sen Trắng nhận tư vấn, sản xuất và lắp đặt biển hộp đèn LED cho cửa hàng, showroom và điểm bán tại Hà Nội. Với mặt tiền lớn hoặc nhiều điểm lắp đặt, hãy gửi số lượng, ảnh và kích thước từng vị trí để trao đổi phương án phù hợp.",
    image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
    imageAlt: "Biển vẫy hộp đèn tròn có chữ Coffee trước cửa hàng",
    serviceName: "Biển hộp đèn LED Hà Nội",
    serviceDescription: "Tư vấn, sản xuất và lắp đặt biển hộp đèn LED cho cửa hàng, showroom và điểm bán tại Hà Nội theo kích thước và vị trí thực tế.",
    sections: [
      ["Nên chọn hộp đèn mặt tiền hay biển vẫy?", [
        "Hộp đèn mặt tiền giúp khách nhìn tên và nội dung chính khi đi đối diện cửa hàng. Biển vẫy nhô vuông góc mặt tiền hỗ trợ nhận diện từ hai hướng dọc tuyến phố. Nhiều mặt bằng có thể kết hợp cả hai nếu vị trí và kết cấu cho phép.",
        "Mặt hộp có thể dùng mica hoặc bạt xuyên sáng tùy kích thước, thiết kế và yêu cầu sử dụng. Nếu cần chữ nổi phát sáng thay vì toàn bộ mặt biển sáng, hãy trao đổi thêm phương án chữ mica hoặc inox kết hợp LED."
      ]],
      ["Báo giá hộp đèn LED phụ thuộc vào những gì?", [
        "Chi phí phụ thuộc kích thước, số mặt phát sáng, vật liệu mặt và khung, cấu hình LED, bộ nguồn và vị trí lắp đặt. Cùng một diện tích nhưng hộp hai mặt hoặc vị trí cao, khó tiếp cận có thể cần cấu tạo và phương án thi công khác.",
        "Trước khi so sánh báo giá, nên hỏi rõ giá gồm thiết kế, khung, mặt biển, LED, nguồn, dây điện, vận chuyển và lắp đặt hay chưa. Nếu cần tháo biển cũ, dùng xe nâng hoặc cấp điện thêm, hãy trao đổi phạm vi riêng sau khi xem mặt bằng."
      ]],
      ["Biển ngoài trời và vị trí lắp đặt trên cao", [
        "Với biển ngoài trời, cần khảo sát điểm liên kết, hướng gió, đường đi dây, vị trí nguồn điện và khả năng tiếp cận bảo trì. Kết cấu, phương án điện và chống nước cần được lựa chọn theo công trình thực tế; không nên chốt phương án an toàn chỉ từ một tấm ảnh.",
        "Khi nghiệm thu, hãy kiểm tra độ chắc của điểm treo, khả năng đọc ban ngày và độ sáng đồng đều khi bật đèn; hỏi rõ vị trí bộ nguồn và nội dung bảo hành của từng hạng mục."
      ]],
      ["Làm nhiều hộp đèn cho chuỗi cửa hàng", [
        "Với nhiều điểm bán, nên gửi bảng số lượng, địa chỉ, ảnh mặt tiền và kích thước dự kiến của từng điểm. Có thể dùng chung nhận diện, màu sắc và mẫu thiết kế, nhưng mỗi vị trí vẫn cần xem lại chiều cao, điểm bắt, nguồn điện và khả năng vận chuyển.",
        "Nếu có hạn bàn giao theo từng cửa hàng, hãy gửi lịch dự kiến cùng bộ logo và quy chuẩn thương hiệu. Phạm vi sản xuất, khảo sát, lắp đặt và tiến độ sẽ được trao đổi theo từng đợt."
      ]],
      ["Cần gửi gì để được tư vấn?", [
        "Gửi qua Zalo ảnh chụp chính diện và ảnh rộng thấy đường vào, kích thước ngang × cao dự kiến, địa chỉ, số lượng và thời điểm cần lắp đặt. Kèm file logo hoặc mẫu tham khảo nếu có; chưa biết kích thước vẫn có thể gửi ảnh để trao đổi ban đầu.",
        "Nếu đã có biển cũ, cho biết có cần tháo dỡ hay tận dụng khung không. Phương án và báo giá cụ thể cần xác nhận sau khi đã thống nhất cấu hình và điều kiện mặt bằng."
      ]]
    ],
    choiceHeading: "Chọn loại biển có đèn theo vị trí",
    choiceIntro: "Đây là các phương án để bắt đầu trao đổi; vật liệu và cấu tạo cuối cùng cần phù hợp với thiết kế và mặt bằng.",
    choiceRows: [
      ["Cửa hàng nằm dọc tuyến phố", "Biển vẫy hộp đèn một hoặc hai mặt", "Hỗ trợ nhận biết từ hướng đi ngang; cần kiểm tra điểm treo và khoảng không."],
      ["Mặt tiền cần hiển thị tên, logo", "Hộp đèn mặt tiền hoặc chữ nổi LED", "Chọn theo nội dung cần sáng, khoảng cách nhìn và bố cục mặt dựng."],
      ["Showroom hoặc nhiều điểm bán", "Hộp đèn, chữ sáng theo bộ nhận diện", "Thống nhất thiết kế và vật liệu, đồng thời kiểm tra điều kiện mỗi vị trí."]
    ],
    focusHeading: "Xem thêm phương án và báo giá",
    focusLinks: [
      ["Báo giá biển hộp đèn LED", "../bao-gia-bien-hop-den-led-ha-noi/", "Tìm hiểu các hạng mục và yếu tố ảnh hưởng đến chi phí."],
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/", "So sánh mặt dựng alu kết hợp chữ không đèn hoặc chữ phát sáng."],
      ["Thi công biển quảng cáo", "../thi-cong-bien-quang-cao-ha-noi/", "Xem quy trình khảo sát, sản xuất và lắp đặt nhiều hạng mục."],
      ["Gửi thông tin để báo giá", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/", "Chuẩn bị ảnh, kích thước và địa chỉ lắp đặt."]
    ],
    galleryHeading: "Hình ảnh tham khảo biển có đèn",
    gallery: [
      { image: "san-xuat-khung-bien-vay-led-ha-noi.jpg", alt: "Khung biển vẫy tròn và các bóng LED bên trong", caption: "Khung biển vẫy tròn với hệ LED trước khi lắp mặt biển." },
      { image: "du-an-sct-clinic-chu-noi-led.jpg", alt: "Logo và chữ nổi hắt sáng trên mặt biển", caption: "Chữ nổi hắt sáng là một phương án khác với hộp đèn sáng toàn mặt." },
      { image: "du-an-bien-the-fox-fitness.jpg", alt: "Biển chữ và logo phát sáng trên mặt tiền tòa nhà", caption: "Biển chữ và logo phát sáng trên mặt tiền, để tham khảo cách nhận diện buổi tối." }
    ],
    related: [
      ["Báo giá biển hộp đèn LED", "../bao-gia-bien-hop-den-led-ha-noi/"],
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
      ["Báo giá biển alu chữ nổi", "../bao-gia-bien-alu-chu-noi-ha-noi/"],
      ["Thi công biển quảng cáo Hà Nội", "../thi-cong-bien-quang-cao-ha-noi/"],
      ["Hình ảnh biển quảng cáo", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/"]
    ],
    faq: [
      ["Biển hộp đèn LED có tốn điện không?", "Mức điện phụ thuộc kích thước, số lượng LED và thời gian bật. Có thể tư vấn phương án tiết kiệm hơn khi biết kích thước biển."],
      ["Làm hộp đèn LED giá bao nhiêu?", "Giá phụ thuộc kích thước, vật liệu, số mặt sáng, cấu hình LED và điều kiện lắp đặt. Gửi ảnh mặt bằng cùng số lượng và kích thước dự kiến để được tư vấn báo giá."],
      ["Có thể đặt nhiều hộp đèn cùng thiết kế không?", "Có thể trao đổi phương án chung theo số lượng và quy chuẩn nhận diện. Mỗi điểm lắp đặt cần được kiểm tra riêng về kích thước, điểm treo và nguồn điện."],
      ["Hộp đèn ngoài trời cần lưu ý gì?", "Cần kiểm tra kết cấu, điểm treo, nguồn điện, chống nước và khả năng bảo trì theo vị trí thực tế trước khi chốt phương án."],
      ["Có sửa hộp đèn cũ không sáng không?", "Có. Có thể kiểm tra nguồn, LED, dây điện và mặt biển để đề xuất sửa hoặc thay mới."]
    ]
  },
  {
    slug: "lam-bang-hieu-cua-hang-ha-noi",
    title: "Làm bảng hiệu cửa hàng Hà Nội | Báo giá, thi công",
    description: "Làm bảng hiệu cửa hàng tại Hà Nội: tư vấn alu chữ nổi, hộp đèn LED, biển vẫy, Hiflex theo mặt tiền thực tế. Gửi ảnh qua Zalo 0989 521 881.",
    kicker: "Bảng hiệu cửa hàng",
    h1: "Làm bảng hiệu cửa hàng tại Hà Nội",
    lead: "Bông Sen Trắng nhận tư vấn, sản xuất và lắp đặt bảng hiệu cửa hàng tại Hà Nội: biển alu chữ nổi, chữ LED và hộp đèn theo mặt bằng. Gửi ảnh và địa chỉ để trao đổi phương án cho một hoặc nhiều điểm bán.",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    imageAlt: "Biển chữ nổi Mơ Nguyễn có ánh sáng trên mặt tiền, ảnh tham khảo",
    serviceName: "Làm bảng hiệu cửa hàng Hà Nội",
    serviceDescription: "Tư vấn, sản xuất và thi công bảng hiệu cửa hàng tại Hà Nội theo mặt tiền thực tế: alu chữ nổi, hộp đèn LED, biển vẫy và Hiflex.",
    sections: [
      ["Vật liệu bảng hiệu cửa hàng thường dùng", [
        "Biển alu chữ nổi phù hợp khi cần mặt tiền gọn, bền và thể hiện tên thương hiệu rõ ràng. Biển hộp đèn LED hợp với cửa hàng cần nổi bật vào buổi tối; biển vẫy hữu ích với mặt tiền nhỏ hoặc cần chỉ hướng từ hai chiều đường.",
        "Không có một vật liệu tốt nhất cho mọi cửa hàng. Ảnh mặt tiền, kích thước dự kiến và vị trí lắp đặt sẽ giúp chọn đúng loại biển, tránh phát sinh và báo giá sát hơn."
      ]],
      ["Gửi gì để nhận báo giá bảng hiệu sát hơn?", [
        "Chỉ cần gửi qua Zalo: ảnh chụp thẳng mặt tiền, chiều rộng x chiều cao dự kiến, địa chỉ lắp đặt tại Hà Nội và yêu cầu về việc có đèn hay không.",
        "Nếu đã có logo hoặc mẫu tham khảo thì gửi kèm để việc tư vấn nhanh hơn. Với hạng mục cần kiểm tra độ cao, khung cũ hoặc nguồn điện, đội thi công sẽ trao đổi lịch khảo sát phù hợp."
      ]],
      ["Làm biển cho showroom, mặt tiền lớn hoặc nhiều cửa hàng", [
        "Nếu cần đồng bộ nhận diện, gửi logo, màu sắc, số lượng và danh sách địa điểm cùng ảnh từng mặt tiền. Kích thước có thể khác giữa các cửa hàng; cần đối chiếu phần nền, chữ, ánh sáng và vị trí lắp trước khi sản xuất.",
        "Với biển lớn hoặc trên cao, ảnh chỉ hỗ trợ trao đổi ban đầu. Phương án khung, điểm bắt, nguồn điện, vận chuyển và thời gian lắp cần được xem xét theo hiện trạng từng công trình."
      ]],
      ["Làm mới hay sửa bảng hiệu cũ?", [
        "Nếu biển chỉ hỏng một phần đèn, nguồn hoặc mặt biển, bạn có thể gửi ảnh toàn cảnh và ảnh cận chỗ hỏng để trao đổi phương án sửa. Việc tận dụng khung cũ phụ thuộc kết quả kiểm tra thực tế.",
        "Khi cần đổi nhận diện hoặc làm thêm biển cho cửa hàng mới, hãy gửi mẫu logo và kích thước dự kiến để so sánh phương án làm mới. Chi phí và phạm vi công việc cần được xác nhận trước khi thi công."
      ]]
    ],
    choiceHeading: "Chọn bảng hiệu theo đúng mặt bằng cửa hàng",
    choiceIntro: "Làm bảng hiệu cửa hàng không chỉ là chọn một mẫu đẹp. Mặt tiền rộng hay hẹp, khách đi bộ hay đi xe, biển có cần sáng buổi tối hay không đều ảnh hưởng trực tiếp tới phương án và chi phí.",
    choiceRows: [
      ["Cửa hàng mặt tiền hẹp, nằm trong dãy phố", "Chữ lớn, nền tương phản và thêm biển vẫy khi cần nhận diện từ hai chiều.", "Đọc được nhanh khi khách đi qua, không nhồi quá nhiều thông tin."],
      ["Quán mở buổi tối hoặc cần nhận diện ban đêm", "Hộp đèn LED, chữ nổi phát sáng hoặc đèn hắt theo vị trí lắp đặt.", "Ánh sáng đều, chống nước và đi điện an toàn."],
      ["Cửa hàng mới, cần tối ưu ngân sách", "Ưu tiên biển mặt tiền chính trước, hạng mục phụ có thể làm sau.", "Không cắt giảm phần khung, kết cấu và điện của biển chính."]
    ],
    focusHeading: "Xem phương án phù hợp với nhu cầu",
    focusLinks: [
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/", "Mặt tiền gọn, bền và rõ thương hiệu."],
      ["Chữ nổi mica, inox và LED", "../chu-noi-mica-inox-ha-noi/", "Chọn chữ không đèn, sáng mặt hoặc hắt chân theo nhận diện."],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/", "Nhận diện tốt khi cửa hàng hoạt động buổi tối."],
      ["Biển vẫy cửa hàng", "../bien-vay-cua-hang-ha-noi/", "Hỗ trợ khách nhìn thấy từ hai chiều đường."],
      ["Sửa biển quảng cáo", "../sua-chua-bien-quang-cao-ha-noi/", "Gửi ảnh biển cũ để trao đổi sửa đèn, mặt biển hoặc khung."],
      ["Làm biển khu vực nội thành", "../lam-bien-quang-cao-gan-day-ha-noi/", "Xem địa chỉ tiếp khách và các khu vực nhận thi công."],
      ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/", "Tìm hiểu các yếu tố quyết định chi phí làm biển."]
    ],
    galleryHeading: "Hình ảnh biển mặt tiền tham khảo",
    gallery: [
      { image: "du-an-gao-viet-bien-mat-tien-do.jpg", alt: "Biển mặt tiền màu đỏ cho cửa hàng tại Hà Nội", caption: "Biển mặt tiền dùng mảng màu rõ, phù hợp nhận diện từ xa." },
      { image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", alt: "Biển Xe điện Việt Thanh với chữ phát sáng trên mặt tiền", caption: "Mẫu chữ phát sáng trên mặt tiền để tham khảo bố cục." },
      { image: "du-an-bien-vay-gia-long.jpg", alt: "Biển vẫy Gia Long Luxury có mặt sáng", caption: "Mẫu biển vẫy để tham khảo khi chọn biển phụ." }
    ],
    faq: [
      ["Bảng hiệu cửa hàng nhỏ có làm được không?", "Có. Có thể chọn bạt, mica, alu hoặc hộp đèn nhỏ tùy ngân sách và mặt tiền."],
      ["Có làm bảng hiệu khai trương gấp không?", "Có thể hỗ trợ hạng mục gấp nếu thiết kế, kích thước và vật liệu được chốt sớm."],
      ["Tôi chưa có thiết kế thì sao?", "Có thể tư vấn bố cục cơ bản hoặc làm theo nhận diện sẵn của cửa hàng."],
      ["Làm bảng hiệu cửa hàng mất bao lâu?", "Thời gian phụ thuộc vào kích thước, vật liệu và điều kiện lắp đặt. Khi có ảnh mặt tiền và kích thước dự kiến, Bông Sen Trắng sẽ tư vấn tiến độ phù hợp cho từng hạng mục."],
      ["Có nhận làm bảng hiệu cho nhiều điểm bán không?", "Có thể trao đổi phương án theo số lượng và danh sách địa điểm. Gửi logo, ảnh từng mặt tiền, kích thước dự kiến và thời gian mong muốn để xác định phạm vi khảo sát."],
      ["Có sửa bảng hiệu cửa hàng đang sử dụng không?", "Có. Hãy gửi ảnh toàn cảnh, ảnh cận phần hỏng và địa chỉ lắp đặt để trao đổi về LED, mặt biển hoặc khung. Phương án cụ thể phụ thuộc hiện trạng."],
      ["Nên chọn alu chữ nổi hay hộp đèn LED?", "Alu chữ nổi phù hợp khi cần mặt tiền gọn, bền và rõ thương hiệu. Hộp đèn LED phù hợp khi cần nhận diện tốt vào buổi tối. Phương án phù hợp còn tùy chiều rộng mặt tiền, ngân sách và vị trí cửa hàng."]
    ],
    related: [
      ["Báo giá bảng hiệu cửa hàng", "../bao-gia-lam-bang-hieu-cua-hang-ha-noi/"],
      ["Biển alu chữ nổi Hà Nội", "../bien-alu-chu-noi-ha-noi/"],
      ["Biển hộp đèn LED Hà Nội", "../bien-hop-den-led-ha-noi/"],
      ["Biển vẫy cửa hàng", "../bien-vay-cua-hang-ha-noi/"],
      ["Làm biển quảng cáo Đống Đa", "../lam-bien-quang-cao-dong-da/"],
      ["Hình ảnh biển quảng cáo thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/"]
    ]
  },
  {
    slug: "lam-bien-quang-cao-dong-da",
    title: "Làm biển quảng cáo Đống Đa | Bông Sen Trắng 92E Ô Chợ Dừa",
    description: "Bông Sen Trắng tại 92E Ô Chợ Dừa nhận làm biển quảng cáo Đống Đa, Hà Nội: khảo sát, sản xuất, thi công, bảo hành.",
    kicker: "Khu vực Đống Đa",
    h1: "Làm biển quảng cáo tại Đống Đa",
    lead: "Văn phòng tại 92E Ô Chợ Dừa giúp Bông Sen Trắng thuận tiện khảo sát, tư vấn và thi công biển quảng cáo cho khách hàng khu vực Đống Đa.",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    imageAlt: "Làm biển quảng cáo khu vực Đống Đa Hà Nội",
    serviceName: "Làm biển quảng cáo Đống Đa",
    sections: [
      ["Phục vụ gần Ô Chợ Dừa", [
        "Nhận làm biển cho cửa hàng, văn phòng, đại lý và mặt bằng kinh doanh quanh Ô Chợ Dừa, Xã Đàn, Tôn Đức Thắng, Tây Sơn, Thái Hà, Láng Hạ.",
        "Khu vực gần giúp khảo sát nhanh hơn và xử lý bảo hành thuận tiện hơn."
      ]],
      ["Dịch vụ phù hợp khu phố", [
        "Biển alu chữ nổi, hộp đèn LED, bảng hiệu cửa hàng, biển vẫy, chữ nổi mica inox và thay mới biển cũ.",
        "Tư vấn kích thước, độ sáng và bố cục để biển dễ nhìn trên tuyến phố đông."
      ]],
      ["Cách nhận báo giá", [
        "Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo 0989 521 881.",
        "Nếu cần đo thực tế, đội thi công sẽ trao đổi lịch khảo sát phù hợp."
      ]]
    ],
    faq: [
      ["Có khảo sát tại Đống Đa không?", "Có. Khu vực Đống Đa là khu vực ưu tiên vì gần địa chỉ của Bông Sen Trắng."],
      ["Có làm biển cho cửa hàng nhỏ không?", "Có. Có phương án tiết kiệm như bạt Hiflex, mica, alu hoặc hộp đèn nhỏ."],
      ["Có sửa biển cũ tại Đống Đa không?", "Có thể kiểm tra, thay mặt biển, thay LED hoặc gia cố lại khung nếu còn sử dụng được."]
    ]
  },
  {
    slug: "bao-gia-bien-quang-cao-ha-noi",
    title: "Báo giá biển quảng cáo Hà Nội | Bông Sen Trắng",
    description: "Nhận báo giá biển quảng cáo tại Hà Nội theo kích thước, vật liệu và mặt bằng thi công. Gửi ảnh mặt tiền qua Zalo 0989 521 881.",
    kicker: "Tư vấn chi phí",
    h1: "Báo giá biển quảng cáo tại Hà Nội",
    lead: "Giá biển quảng cáo phụ thuộc vào kích thước, vật liệu, kết cấu khung, LED, độ cao lắp đặt và điều kiện thi công thực tế.",
    image: "bien-pano-ha-noi.jpg",
    imageAlt: "Tư vấn báo giá biển quảng cáo tại Hà Nội",
    serviceName: "Báo giá biển quảng cáo Hà Nội",
    sections: [
      ["Vì sao cần báo giá theo mặt bằng?", [
        "Hai biển có cùng kích thước vẫn có thể khác giá nếu khác vật liệu, độ cao lắp đặt, kết cấu khung hoặc vị trí thi công.",
        "Ảnh mặt tiền giúp xác định phương án thi công, vị trí bắt khung, nguồn điện cho LED và mức độ an toàn khi lắp đặt."
      ]],
      ["Thông tin cần gửi để báo giá nhanh", [
        "Ảnh mặt tiền chụp thẳng, kích thước dự kiến, địa chỉ lắp đặt, loại biển mong muốn và file thiết kế nếu đã có.",
        "Nếu chưa có thiết kế, có thể gửi logo, tên cửa hàng, ngành hàng và phong cách mong muốn để được tư vấn bố cục."
      ]],
      ["Các yếu tố ảnh hưởng chi phí", [
        "Vật liệu thường gặp gồm bạt Hiflex, alu chữ nổi, mica, inox, hộp đèn LED, pano tấm lớn và hệ khung sắt.",
        "Chi phí cũng thay đổi theo yêu cầu tháo biển cũ, gia cố khung, thi công ban đêm hoặc làm gấp."
      ]]
    ],
    faq: [
      ["Có báo giá qua Zalo được không?", "Có. Gửi ảnh mặt tiền, kích thước và địa chỉ lắp đặt qua Zalo 0989 521 881 để nhận tư vấn nhanh."],
      ["Có bảng giá cố định không?", "Không nên dùng một bảng giá cố định cho mọi công trình vì vật liệu, khung và mặt bằng thi công ảnh hưởng nhiều đến chi phí."],
      ["Có khảo sát trước khi báo giá không?", "Với công trình lớn hoặc mặt bằng phức tạp, khảo sát thực tế giúp báo giá sát và giảm rủi ro khi thi công."]
    ]
  },
  {
    slug: "sua-chua-bien-quang-cao-ha-noi",
    title: "Sửa chữa biển quảng cáo Hà Nội | Thay LED, sửa hộp đèn",
    description: "Sửa chữa biển quảng cáo Hà Nội: thay LED, nguồn, mặt bạt, sửa hộp đèn, gia cố khung. Gửi ảnh hiện trạng qua Zalo 0989 521 881 để báo nhanh.",
    kicker: "Sửa chữa và làm mới",
    h1: "Sửa chữa biển quảng cáo tại Hà Nội",
    lead: "Biển cũ xuống màu, hỏng LED, bong mặt, lệch khung hoặc đổi nhận diện có thể sửa chữa, thay mới từng phần để tiết kiệm chi phí.",
    image: "du-an-jotun.jpg",
    imageAlt: "Sửa chữa và thay mới biển quảng cáo tại Hà Nội",
    serviceName: "Sửa chữa biển quảng cáo Hà Nội",
    sections: [
      ["Khi nào nên sửa biển cũ?", [
        "Biển bị cháy LED, bạt rách, mica nứt, chữ bong, khung gỉ hoặc nội dung cũ không còn đúng với hoạt động kinh doanh.",
        "Nếu khung còn chắc, có thể chỉ cần thay mặt biển, thay LED hoặc làm mới phần chữ để giảm chi phí."
      ]],
      ["Hạng mục có thể xử lý", [
        "Thay bóng/nguồn LED, thay mặt bạt Hiflex, thay mica, làm lại chữ nổi, vệ sinh biển, gia cố khung và căn chỉnh lại biển bị lệch.",
        "Với biển quá cũ hoặc kết cấu không an toàn, nên làm mới toàn bộ để tránh rủi ro khi sử dụng ngoài trời."
      ]],
      ["Cách gửi yêu cầu sửa biển", [
        "Chụp ảnh tổng thể biển, ảnh cận lỗi hỏng, địa chỉ lắp đặt và mô tả tình trạng hiện tại.",
        "Đội thi công sẽ tư vấn phương án sửa hoặc thay mới phù hợp mức ngân sách."
      ]]
    ],
    faq: [
      ["Có sửa biển hộp đèn không sáng không?", "Có. Có thể kiểm tra nguồn điện, LED, dây dẫn và mặt hộp đèn để xác định phần cần thay."],
      ["Sửa biển cũ có bảo hành không?", "Có bảo hành theo hạng mục thay thế và vật liệu sử dụng."],
      ["Có tháo dỡ biển cũ không?", "Có thể hỗ trợ tháo dỡ, thay mới hoặc gia cố lại nếu mặt bằng cho phép thi công an toàn."]
    ]
  },
  {
    slug: "chu-noi-mica-inox-ha-noi",
    title: "Làm chữ nổi mica, inox, LED Hà Nội | Báo giá",
    description: "Gia công chữ nổi mica, inox, chữ LED tại Hà Nội cho mặt tiền, showroom, cửa hàng và văn phòng. Gửi logo, kích thước để tư vấn báo giá.",
    kicker: "Gia công chữ và logo nhận diện",
    h1: "Làm chữ nổi mica, inox và chữ LED tại Hà Nội",
    lead: "Bông Sen Trắng nhận gia công, lắp đặt chữ nổi và logo cho biển mặt tiền, showroom, cửa hàng, văn phòng tại Hà Nội. Có thể trao đổi chữ không đèn, chữ LED sáng mặt hoặc hắt chân theo thiết kế và vị trí lắp đặt.",
    image: "du-an-chu-noi-khoa-kinh-te.jpg",
    imageAlt: "Logo và chữ nổi Khoa Kinh tế Học viện Ngân hàng trên tường",
    serviceName: "Gia công chữ nổi mica, inox và chữ LED tại Hà Nội",
    serviceDescription: "Gia công và lắp đặt chữ nổi mica, inox, chữ LED và logo theo thiết kế cho mặt tiền, cửa hàng, showroom và văn phòng tại Hà Nội.",
    sections: [
      ["Chữ nổi phù hợp những vị trí nào?", [
        "Chữ và logo có thể gắn trên mặt dựng alu, nền tường, quầy lễ tân hoặc mảng nhận diện trong showroom và văn phòng. Tại mặt tiền, cần cân nhắc kích thước chữ, độ tương phản và khoảng cách nhìn; trong nhà nên chú ý vật liệu và bề mặt gắn.",
        "Nếu chỉ đặt gia công chữ theo thiết kế có sẵn, hãy gửi file logo và kích thước. Nếu làm cả biển mặt tiền, cần trao đổi thêm về nền, khung, điện và lắp đặt."
      ]],
      ["Chữ mica, chữ inox và chữ nổi LED khác nhau thế nào?", [
        "Chữ mica có nhiều màu sắc và có thể làm mặt phát sáng. Chữ inox tạo bề mặt kim loại, có thể kết hợp các vật liệu khác hoặc chọn cách chiếu sáng phù hợp. Chữ nổi LED là cách gọi chữ có hệ đèn, không phải một loại vật liệu duy nhất.",
        "Chữ sáng mặt cho ánh sáng đi qua mặt chữ; chữ hắt chân tạo quầng sáng lên nền phía sau. Lựa chọn phụ thuộc mẫu nhận diện, bề mặt gắn, vị trí nguồn điện và hiệu ứng mong muốn."
      ]],
      ["Những yếu tố ảnh hưởng báo giá chữ nổi", [
        "Báo giá phụ thuộc chiều cao và số lượng chữ, kiểu chữ và chi tiết logo, vật liệu mặt và thành chữ, yêu cầu có đèn hay không, số lượng bộ và công lắp đặt. Chữ nhỏ, nét mảnh hoặc logo nhiều chi tiết cần kiểm tra khả năng gia công theo kích thước thực tế.",
        "Với chữ LED, nên đối chiếu thêm đèn, bộ nguồn, dây điện và vị trí tiếp cận khi bảo trì. Nếu giá chỉ tính riêng bộ chữ thì cần hỏi phần nền, vận chuyển, lắp đặt và cấp điện đã bao gồm chưa."
      ]],
      ["Làm chữ LED ngoài trời cần lưu ý gì?", [
        "Vị trí ngoài trời cần khảo sát điểm liên kết, điều kiện nắng mưa, phương án chống nước và đi dây. Cách gắn, vật liệu, nguồn và thiết bị thi công cần chọn theo công trình thay vì mặc định dùng chung một cấu hình.",
        "Trước khi bàn giao nên kiểm tra nội dung, dấu tiếng Việt, tỉ lệ logo, độ chắc, ánh sáng và phạm vi bảo hành đã thống nhất. Với công trình trên cao, cần khảo sát điều kiện tiếp cận và phương án thi công phù hợp."
      ]],
      ["Gửi thông tin để gia công hoặc làm nhiều bộ", [
        "Gửi file logo hoặc chữ dạng vector nếu có, chiều cao chữ dự kiến, số lượng bộ, màu sắc, yêu cầu đèn và ảnh vị trí gắn qua Zalo. Nếu chưa có file chuẩn, có thể gửi ảnh hiện có để kiểm tra khả năng dựng lại.",
        "Với chuỗi điểm bán, nên gửi danh sách địa chỉ và lịch lắp đặt từng nơi. Có thể thống nhất một mẫu nhận diện chung, sau đó kiểm tra kích thước và điều kiện lắp thực tế của từng mặt bằng."
      ]]
    ],
    choiceHeading: "Chọn kiểu chữ theo vị trí và hiệu ứng",
    choiceIntro: "Chất liệu và kiểu sáng cần được đối chiếu với thiết kế, vị trí gắn và ngân sách của từng hạng mục.",
    choiceRows: [
      ["Logo lễ tân, văn phòng", "Chữ mica hoặc inox không đèn", "Kiểm tra màu sắc, kích thước và bề mặt gắn trong nhà."],
      ["Mặt tiền cần nhìn rõ buổi tối", "Chữ mica LED sáng mặt", "Trao đổi màu sáng, nguồn điện và khả năng bảo trì."],
      ["Thương hiệu cần hiệu ứng quầng sáng", "Chữ nổi LED hắt chân", "Cần bố trí khoảng cách chữ với nền theo phương án thiết kế."],
      ["Nhiều cửa hàng cùng nhận diện", "Chữ và logo theo mẫu thống nhất", "Kiểm tra riêng kích thước và điều kiện lắp của từng điểm."]
    ],
    focusHeading: "Xem thêm phương án cho biển mặt tiền",
    focusLinks: [
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/", "Kết hợp nền alu, chữ hoặc logo theo thiết kế."],
      ["Báo giá biển alu chữ nổi", "../bao-gia-bien-alu-chu-noi-ha-noi/", "Đối chiếu chi phí nền, chữ, khung và lắp đặt."],
      ["Biển hộp đèn LED", "../bien-hop-den-led-ha-noi/", "So sánh phương án chữ phát sáng với hộp đèn."],
      ["Gửi ảnh để nhận báo giá", "../gui-anh-bao-gia-bien-quang-cao-ha-noi/", "Chuẩn bị file chữ, ảnh vị trí lắp và số lượng."]
    ],
    galleryHeading: "Hình ảnh tham khảo chữ nổi và chữ có đèn",
    gallery: [
      { image: "du-an-may-skin-bien-chu-noi-sang.jpg", alt: "Chữ May Skin hắt sáng trên mặt tiền cửa hàng", caption: "Chữ hắt sáng trên mặt tiền cửa hàng." },
      { image: "du-an-sct-clinic-chu-noi-led.jpg", alt: "Logo và chữ SCT Clinic nổi có ánh sáng phía sau", caption: "Logo và chữ nổi kết hợp ánh sáng." },
      { image: "du-an-chu-noi-khoa-kinh-te.jpg", alt: "Chữ và logo Khoa Kinh tế Học viện Ngân hàng gắn tường", caption: "Chữ và logo nổi gắn trên tường trong nhà." }
    ],
    faq: [
      ["Chữ nổi mica inox có dùng ngoài trời được không?", "Có, nhưng cần chọn độ dày, keo, khung và phương án chống nước phù hợp."],
      ["Có làm chữ nổi LED sáng mặt hoặc hắt chân không?", "Có thể trao đổi hai phương án theo mẫu chữ, nền và vị trí lắp đặt. Cấu tạo và nguồn điện cần được thống nhất trước khi sản xuất."],
      ["Giá gia công chữ nổi được tính thế nào?", "Chi phí phụ thuộc kích thước, số lượng chữ, vật liệu, độ phức tạp, yêu cầu LED và phạm vi lắp đặt. Gửi logo, kích thước và số lượng để được tư vấn báo giá."],
      ["Có thể làm nhiều bộ chữ cho chuỗi cửa hàng không?", "Có thể trao đổi mẫu nhận diện chung theo số lượng. Mỗi cửa hàng cần được đối chiếu kích thước, vị trí gắn và điều kiện lắp đặt."],
      ["Có lắp chữ nổi trong văn phòng không?", "Có. Chữ nổi trong nhà thường dùng cho lễ tân, phòng họp, showroom và mảng nhận diện thương hiệu."]
    ]
  },
  {
    slug: "bien-bat-hiflex-ha-noi",
    title: "Biển bạt Hiflex Hà Nội | Làm biển quảng cáo tiết kiệm",
    description: "Làm biển bạt Hiflex tại Hà Nội cho cửa hàng, khai trương, bảng hiệu tạm, pano và thay mặt biển cũ. Thi công nhanh, chi phí tiết kiệm.",
    kicker: "Giải pháp tiết kiệm",
    h1: "Làm biển bạt Hiflex tại Hà Nội",
    lead: "Biển bạt Hiflex phù hợp khi cần làm nhanh, chi phí dễ kiểm soát, thay nội dung linh hoạt cho cửa hàng, bảng hiệu tạm hoặc chương trình khai trương.",
    image: "bien-tam-lon-ha-noi.jpg",
    imageAlt: "Biển bạt Hiflex quảng cáo tại Hà Nội",
    serviceName: "Biển bạt Hiflex Hà Nội",
    sections: [
      ["Khi nào nên chọn bạt Hiflex?", [
        "Khi cần biển khai trương, biển tạm, bảng hiệu chi phí thấp, thay nội dung thường xuyên hoặc làm mặt biển lớn trong ngân sách tiết kiệm.",
        "Bạt Hiflex cũng phù hợp để thay mặt biển cũ khi khung còn sử dụng được."
      ]],
      ["Ưu điểm và giới hạn", [
        "Ưu điểm là thi công nhanh, chi phí hợp lý, in được nhiều màu và dễ thay mới.",
        "So với alu chữ nổi hoặc inox, bạt Hiflex kém sang hơn và cần chọn chất lượng in phù hợp để hạn chế phai màu ngoài trời."
      ]],
      ["Cần chuẩn bị gì?", [
        "Kích thước biển, nội dung cần in, file thiết kế hoặc logo, địa chỉ lắp đặt và ảnh khung hiện trạng nếu có.",
        "Nếu làm biển có đèn, cần kiểm tra hệ khung, nguồn sáng và khả năng xuyên sáng của bạt."
      ]]
    ],
    faq: [
      ["Biển bạt Hiflex có bền không?", "Độ bền phụ thuộc chất lượng bạt, mực in, vị trí nắng mưa và cách căng bạt khi thi công."],
      ["Có thay bạt trên khung cũ không?", "Có. Nếu khung còn chắc, có thể thay bạt mới để tiết kiệm chi phí."],
      ["Có làm biển bạt gấp không?", "Có thể hỗ trợ hạng mục gấp nếu kích thước, nội dung và file thiết kế được chốt sớm."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-cau-giay",
    title: "Làm biển quảng cáo Cầu Giấy | Bông Sen Trắng Hà Nội",
    description: "Nhận làm biển quảng cáo tại Cầu Giấy: biển alu chữ nổi, hộp đèn LED, bảng hiệu cửa hàng, chữ nổi mica inox. Gọi/Zalo 0989 521 881.",
    kicker: "Khu vực Cầu Giấy",
    h1: "Làm biển quảng cáo tại Cầu Giấy",
    lead: "Bông Sen Trắng nhận tư vấn, sản xuất và thi công biển quảng cáo cho cửa hàng, văn phòng, showroom và điểm bán tại khu vực Cầu Giấy.",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Biển quảng cáo cửa hàng tại khu vực Cầu Giấy",
    serviceName: "Làm biển quảng cáo Cầu Giấy",
    sections: [
      ["Phù hợp tuyến phố kinh doanh đông", [
        "Cầu Giấy có nhiều cửa hàng, văn phòng, trung tâm đào tạo và showroom nên biển cần dễ đọc, nổi bật nhưng không rối thông tin.",
        "Các tuyến như Xuân Thủy, Cầu Giấy, Duy Tân, Trung Kính, Trần Thái Tông thường cần bảng hiệu rõ ngành hàng và dễ nhận diện từ xa."
      ]],
      ["Hạng mục thường thi công", [
        "Biển alu chữ nổi, hộp đèn LED, bảng hiệu mặt tiền, biển vẫy, chữ nổi mica inox và thay mặt biển cũ.",
        "Có thể tư vấn phương án tiết kiệm cho cửa hàng nhỏ hoặc phương án hoàn thiện kỹ hơn cho showroom, văn phòng và điểm bán thương hiệu."
      ]],
      ["Gửi thông tin để báo giá nhanh", [
        "Chụp ảnh mặt tiền, ghi kích thước dự kiến, địa chỉ lắp đặt tại Cầu Giấy và gửi file thiết kế nếu đã có.",
        "Nếu chưa rõ nên chọn vật liệu nào, Bông Sen Trắng sẽ tư vấn theo độ bền, ngân sách và thời gian cần bàn giao."
      ]]
    ],
    faq: [
      ["Có khảo sát tại Cầu Giấy không?", "Có. Với công trình cần đo thực tế hoặc kiểm tra khung cũ, có thể trao đổi lịch khảo sát phù hợp."],
      ["Cửa hàng nhỏ tại Cầu Giấy có làm được không?", "Có. Có thể chọn bạt Hiflex, mica, alu hoặc hộp đèn nhỏ tùy mặt tiền và ngân sách."],
      ["Có làm biển gấp cho khai trương không?", "Có thể hỗ trợ nếu nội dung, kích thước và vật liệu được chốt sớm."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-thanh-xuan",
    title: "Làm biển quảng cáo Thanh Xuân | Thi công bảng hiệu Hà Nội",
    description: "Bông Sen Trắng nhận làm biển quảng cáo Thanh Xuân: biển mặt tiền, bảng hiệu cửa hàng, hộp đèn LED, biển alu chữ nổi, sửa biển cũ.",
    kicker: "Khu vực Thanh Xuân",
    h1: "Làm biển quảng cáo tại Thanh Xuân",
    lead: "Nhận sản xuất và lắp đặt biển quảng cáo cho cửa hàng, nhà hàng, spa, văn phòng và điểm bán tại Thanh Xuân, Hà Nội.",
    image: "du-an-jotun.jpg",
    imageAlt: "Bảng hiệu mặt tiền cửa hàng tại Thanh Xuân",
    serviceName: "Làm biển quảng cáo Thanh Xuân",
    sections: [
      ["Biển cần rõ trên tuyến phố đông", [
        "Khu vực Nguyễn Trãi, Khuất Duy Tiến, Trường Chinh, Lê Trọng Tấn, Vũ Trọng Phụng có lưu lượng lớn nên biển cần chữ rõ, màu tương phản và bố cục gọn.",
        "Bông Sen Trắng tư vấn kích thước, chất liệu và độ sáng phù hợp để bảng hiệu dễ nhìn cả ban ngày lẫn buổi tối."
      ]],
      ["Dịch vụ nhận làm", [
        "Thi công biển alu chữ nổi, hộp đèn LED, biển bạt Hiflex, bảng hiệu cửa hàng, chữ nổi mica inox và pano tấm lớn.",
        "Có thể làm mới, thay nội dung, thay LED, gia cố khung hoặc sửa biển đã xuống cấp."
      ]],
      ["Cách nhận tư vấn", [
        "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ tại Thanh Xuân và yêu cầu vật liệu qua Zalo 0989 521 881.",
        "Nếu cần làm gấp cho khai trương, nên chốt nội dung và kích thước sớm để chủ động sản xuất."
      ]]
    ],
    faq: [
      ["Có sửa biển cũ tại Thanh Xuân không?", "Có. Có thể kiểm tra khung, LED, mặt biển và đề xuất sửa hoặc thay mới từng phần."],
      ["Có nhận biển hộp đèn cho cửa hàng không?", "Có. Hộp đèn LED phù hợp cửa hàng mở buổi tối hoặc cần nhận diện từ xa."],
      ["Có bảo hành sau thi công không?", "Có bảo hành theo hạng mục và vật liệu sử dụng."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-ba-dinh",
    title: "Làm biển quảng cáo Ba Đình | Bảng hiệu cửa hàng Hà Nội",
    description: "Nhận làm biển quảng cáo tại Ba Đình, Hà Nội: bảng hiệu cửa hàng, biển công ty, biển alu chữ nổi, chữ nổi mica inox, hộp đèn LED.",
    kicker: "Khu vực Ba Đình",
    h1: "Làm biển quảng cáo tại Ba Đình",
    lead: "Bông Sen Trắng thi công biển quảng cáo cho văn phòng, cửa hàng, showroom, nhà hàng và đơn vị dịch vụ tại Ba Đình.",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    imageAlt: "Thi công chữ nổi và bảng hiệu khu vực Ba Đình",
    serviceName: "Làm biển quảng cáo Ba Đình",
    sections: [
      ["Ưu tiên sự gọn, rõ, đúng nhận diện", [
        "Ba Đình có nhiều văn phòng, cửa hàng dịch vụ và mặt bằng nhỏ, vì vậy bảng hiệu cần chuyên nghiệp, dễ đọc và không quá nhiều chi tiết.",
        "Với biển công ty, chữ nổi mica inox hoặc alu chữ nổi thường tạo cảm giác chắc chắn và phù hợp nhận diện lâu dài."
      ]],
      ["Hạng mục phù hợp", [
        "Bảng tên công ty, biển mặt tiền cửa hàng, chữ nổi lễ tân, hộp đèn nhỏ, biển vẫy và thay mới biển cũ.",
        "Có thể tư vấn màu sắc, kích thước chữ và vị trí đặt số điện thoại để khách đi đường dễ nhận ra."
      ]],
      ["Báo giá theo hiện trạng", [
        "Ảnh mặt tiền giúp xác định có cần tháo biển cũ, gia cố khung, đi dây LED hoặc thi công trên cao hay không.",
        "Gửi thông tin qua Zalo để nhận tư vấn trước khi khảo sát thực tế nếu cần."
      ]]
    ],
    faq: [
      ["Có làm biển công ty tại Ba Đình không?", "Có. Nhận làm bảng tên công ty, chữ nổi, logo văn phòng và biển mặt tiền."],
      ["Có làm biển nhỏ cho mặt tiền hẹp không?", "Có. Có thể tối ưu bố cục để tên thương hiệu và ngành hàng vẫn rõ."],
      ["Có nhận tháo dỡ biển cũ không?", "Có thể hỗ trợ tháo dỡ hoặc thay mới nếu điều kiện thi công an toàn."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-hoan-kiem",
    title: "Làm biển quảng cáo Hoàn Kiếm | Bảng hiệu cửa hàng trung tâm",
    description: "Thi công biển quảng cáo Hoàn Kiếm cho cửa hàng, nhà hàng, showroom, văn phòng: biển alu, hộp đèn LED, bảng hiệu mặt tiền, chữ nổi.",
    kicker: "Khu vực Hoàn Kiếm",
    h1: "Làm biển quảng cáo tại Hoàn Kiếm",
    lead: "Nhận làm biển quảng cáo cho mặt tiền cửa hàng, nhà hàng, showroom và văn phòng tại khu vực Hoàn Kiếm, Hà Nội.",
    image: "bien-pano-ha-noi.jpg",
    imageAlt: "Biển quảng cáo mặt tiền khu vực Hoàn Kiếm Hà Nội",
    serviceName: "Làm biển quảng cáo Hoàn Kiếm",
    sections: [
      ["Mặt tiền trung tâm cần tinh gọn", [
        "Hoàn Kiếm có nhiều tuyến phố kinh doanh dày đặc, biển quảng cáo cần phân cấp thông tin tốt để khách nhận ra thương hiệu nhanh.",
        "Nên ưu tiên chữ dễ đọc, màu tương phản và vật liệu phù hợp phong cách cửa hàng, đặc biệt với nhà hàng, cafe, spa và showroom."
      ]],
      ["Loại biển thường dùng", [
        "Biển alu chữ nổi, chữ nổi mica inox, hộp đèn LED, biển vẫy, bảng hiệu cửa hàng và thay mặt biển bạt khi cần làm nhanh.",
        "Với mặt tiền nhỏ, có thể kết hợp biển chính và biển phụ để giữ bố cục dễ nhìn."
      ]],
      ["Thông tin cần chuẩn bị", [
        "Ảnh chụp mặt tiền, kích thước dự kiến, yêu cầu nhận diện, thời gian cần hoàn thành và địa chỉ lắp đặt.",
        "Nếu đã có thiết kế, gửi file để kiểm tra khả năng sản xuất đúng tỉ lệ và vật liệu."
      ]]
    ],
    faq: [
      ["Có làm biển cho nhà hàng, cafe tại Hoàn Kiếm không?", "Có. Có thể tư vấn biển mặt tiền, hộp đèn, biển vẫy và chữ nổi theo phong cách thương hiệu."],
      ["Có hỗ trợ làm biển theo thiết kế có sẵn không?", "Có. Cần kiểm tra file, kích thước và vật liệu trước khi sản xuất."],
      ["Có nhận làm biển vào thời gian gấp không?", "Có thể hỗ trợ tùy hạng mục, vật liệu và điều kiện thi công."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-hai-ba-trung",
    title: "Làm biển quảng cáo Hai Bà Trưng | Bông Sen Trắng",
    description: "Nhận làm biển quảng cáo Hai Bà Trưng: bảng hiệu cửa hàng, biển alu chữ nổi, hộp đèn LED, biển bạt Hiflex, sửa chữa biển cũ.",
    kicker: "Khu vực Hai Bà Trưng",
    h1: "Làm biển quảng cáo tại Hai Bà Trưng",
    lead: "Bông Sen Trắng nhận sản xuất và thi công biển quảng cáo cho cửa hàng, spa, salon, nhà hàng, văn phòng và đại lý tại Hai Bà Trưng.",
    image: "bien-tam-lon-ha-noi.jpg",
    imageAlt: "Làm biển hộp đèn và bảng hiệu tại Hai Bà Trưng",
    serviceName: "Làm biển quảng cáo Hai Bà Trưng",
    sections: [
      ["Nhu cầu đa dạng theo ngành hàng", [
        "Khu vực Hai Bà Trưng có nhiều cửa hàng bán lẻ, dịch vụ làm đẹp, nhà hàng và văn phòng nên mỗi biển cần chọn vật liệu theo cách khách nhìn thấy thực tế.",
        "Biển hộp đèn phù hợp điểm bán buổi tối, còn alu chữ nổi hoặc mica inox phù hợp thương hiệu cần mặt tiền bền và gọn."
      ]],
      ["Nhận làm mới và sửa cũ", [
        "Có thể làm bảng hiệu mới, thay mặt bạt, thay LED, làm lại chữ nổi, đổi thông tin thương hiệu hoặc gia cố khung.",
        "Với biển cũ còn khung tốt, thay mặt biển hoặc thay LED có thể tiết kiệm chi phí hơn làm mới toàn bộ."
      ]],
      ["Báo giá nhanh qua Zalo", [
        "Gửi ảnh mặt tiền, ảnh lỗi hỏng nếu sửa biển, kích thước và địa chỉ tại Hai Bà Trưng qua Zalo 0989 521 881.",
        "Đội thi công sẽ tư vấn hướng xử lý phù hợp ngân sách và thời gian cần hoàn thành."
      ]]
    ],
    faq: [
      ["Có làm biển cho spa, salon tại Hai Bà Trưng không?", "Có. Có thể làm hộp đèn LED, chữ nổi mica, alu chữ nổi hoặc biển vẫy."],
      ["Có thay LED biển cũ không?", "Có. Cần kiểm tra nguồn, module LED, dây dẫn và mặt biển trước khi báo giá."],
      ["Có làm biển khai trương nhanh không?", "Có thể hỗ trợ nếu nội dung và kích thước được chốt sớm."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-hoang-mai",
    title: "Làm biển quảng cáo Hoàng Mai | Thi công bảng hiệu Hà Nội",
    description: "Nhận làm biển quảng cáo Hoàng Mai: biển cửa hàng, bảng hiệu công ty, biển bạt Hiflex, alu chữ nổi, hộp đèn LED, pano tấm lớn.",
    kicker: "Khu vực Hoàng Mai",
    h1: "Làm biển quảng cáo tại Hoàng Mai",
    lead: "Nhận tư vấn, sản xuất và lắp đặt biển quảng cáo cho cửa hàng, kho xưởng, văn phòng, đại lý và mặt bằng kinh doanh tại Hoàng Mai.",
    image: "du-an-wonderfarm.jpg",
    imageAlt: "Biển quảng cáo đại lý và cửa hàng tại Hoàng Mai",
    serviceName: "Làm biển quảng cáo Hoàng Mai",
    sections: [
      ["Phù hợp cửa hàng và mặt bằng rộng", [
        "Hoàng Mai có nhiều tuyến đường lớn, khu dân cư và mặt bằng kinh doanh cần biển rõ từ xa, khung chắc và vật liệu chịu ngoài trời tốt.",
        "Với biển kích thước lớn, cần tính kỹ kết cấu khung, điểm bắt, độ cao lắp đặt và phương án an toàn khi thi công."
      ]],
      ["Dịch vụ nhận thi công", [
        "Biển bạt Hiflex, pano tấm lớn, biển alu chữ nổi, hộp đèn LED, bảng hiệu công ty, biển cửa hàng và sửa chữa biển cũ.",
        "Có thể chọn phương án tiết kiệm hoặc phương án bền đẹp hơn tùy ngân sách và thời gian sử dụng."
      ]],
      ["Cần gửi gì để báo giá?", [
        "Ảnh mặt tiền hoặc vị trí lắp đặt, kích thước dự kiến, địa chỉ tại Hoàng Mai, yêu cầu vật liệu và thời gian mong muốn.",
        "Nếu là biển lớn hoặc trên cao, nên khảo sát để đánh giá khung và điều kiện thi công trước khi chốt giá."
      ]]
    ],
    faq: [
      ["Có làm pano tấm lớn tại Hoàng Mai không?", "Có. Cần thông tin kích thước, vị trí lắp đặt và kết cấu khung dự kiến."],
      ["Có làm biển bạt tiết kiệm không?", "Có. Biển bạt Hiflex phù hợp khi cần chi phí thấp, làm nhanh hoặc thay nội dung linh hoạt."],
      ["Có nhận bảo trì biển cũ không?", "Có thể kiểm tra, thay mặt biển, thay LED hoặc gia cố khung nếu còn sử dụng an toàn."]
    ]
  },
  {
    slug: "bien-quang-cao-nha-hang-ha-noi",
    title: "Làm biển nhà hàng tại Hà Nội | Mặt tiền, hộp đèn LED",
    description: "Làm biển nhà hàng tại Hà Nội: biển mặt tiền, alu chữ nổi, hộp đèn LED, biển vẫy và bảng menu cho nhà hàng, quán ăn, cafe. Zalo 0989 521 881.",
    kicker: "Nhà hàng, quán ăn, cafe",
    h1: "Làm biển nhà hàng tại Hà Nội",
    lead: "Biển nhà hàng cần dễ nhận ra từ xa, rõ phong cách món ăn và đủ nổi bật vào buổi tối để kéo khách đi đường.",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    imageAlt: "Biển chữ nổi phát sáng cho mặt tiền nhà hàng tại Hà Nội",
    serviceName: "Làm biển nhà hàng Hà Nội",
    sections: [
      ["Biển phải kéo được khách đi đường", [
        "Với nhà hàng, quán ăn, cafe và trà sữa, biển nên làm rõ tên thương hiệu, món/chủ đề chính và ánh sáng buổi tối.",
        "Mặt tiền đông biển xung quanh cần bố cục ít chữ, màu tương phản tốt và điểm nhấn đủ mạnh để khách nhớ tên quán."
      ]],
      ["Hạng mục phù hợp", [
        "Biển mặt tiền alu chữ nổi, hộp đèn LED, biển vẫy, bảng menu ngoài cửa, bạt Hiflex khai trương và chữ nổi trong không gian quán.",
        "Nếu mặt bằng nhỏ, có thể kết hợp biển chính với biển vẫy hoặc hộp đèn nhỏ để tăng khả năng nhận diện từ hai chiều đường."
      ]],
      ["Ảnh công trình thực tế để tham khảo", [
        "Mẫu công trình trong ảnh dùng chữ nổi phát sáng, logo tròn, biển phụ và hệ trang trí đồng bộ để tạo mặt tiền ấm, dễ nhớ.",
        "Với nhà hàng mở buổi tối, nên kiểm tra cả ảnh ban ngày và ban đêm để cân độ sáng, màu chữ và độ nổi bật của biển trước khi sản xuất."
      ]],
      ["Cần gửi gì để tư vấn?", [
        "Gửi ảnh mặt tiền, kích thước dự kiến, phong cách quán, thời gian mở cửa buổi tối và ngân sách mong muốn.",
        "Nếu đã có logo/menu, gửi kèm file để tư vấn vật liệu và độ sáng phù hợp."
      ]]
    ],
    faq: [
      ["Nhà hàng nên dùng biển hộp đèn hay chữ nổi?", "Nếu cần nổi bật buổi tối, hộp đèn hoặc chữ nổi có LED sẽ phù hợp. Nếu cần mặt tiền sang và bền, alu chữ nổi là lựa chọn phổ biến."],
      ["Có làm biển khai trương quán ăn nhanh không?", "Có thể hỗ trợ bạt Hiflex, standee, bảng menu và biển mặt tiền nếu nội dung được chốt sớm."],
      ["Có làm biển vẫy cho nhà hàng không?", "Có. Biển vẫy giúp khách nhìn thấy quán từ hai chiều đường, nhất là mặt tiền hẹp."]
    ]
  },
  {
    slug: "bien-quang-cao-spa-salon-ha-noi",
    title: "Biển quảng cáo spa salon Hà Nội | Biển hộp đèn, chữ nổi",
    description: "Làm biển quảng cáo spa, salon, thẩm mỹ viện tại Hà Nội: biển mặt tiền, chữ nổi mica inox, hộp đèn LED, biển vẫy, decal kính.",
    kicker: "Spa, salon, thẩm mỹ",
    h1: "Làm biển quảng cáo spa salon tại Hà Nội",
    lead: "Biển spa, salon và thẩm mỹ viện cần sạch, sáng, dễ đọc và tạo cảm giác tin cậy ngay từ mặt tiền.",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    imageAlt: "Biển spa thẩm mỹ chữ nổi phát sáng tại Hà Nội",
    serviceName: "Biển quảng cáo spa salon Hà Nội",
    sections: [
      ["Cảm giác thương hiệu rất quan trọng", [
        "Khách của spa/salon thường chú ý đến sự chỉn chu. Biển nên dùng màu sắc nhẹ, chữ rõ và ánh sáng đều để mặt tiền nhìn sạch hơn.",
        "Nếu cần cảm giác cao cấp, có thể dùng chữ nổi mica inox, nền alu, LED hắt sáng hoặc decal kính phối đồng bộ."
      ]],
      ["Các hạng mục thường làm", [
        "Biển mặt tiền, hộp đèn LED, chữ nổi logo, bảng giá dịch vụ, decal kính, biển vẫy và bảng chỉ dẫn trong nhà.",
        "Có thể làm mới toàn bộ hoặc chỉ thay mặt biển, thay LED, làm lại chữ nổi khi đổi nhận diện."
      ]],
      ["Báo giá theo phong cách và vật liệu", [
        "Giá phụ thuộc kích thước, vật liệu chữ nổi, hệ LED, nền alu/mica, decal kính và độ khó thi công.",
        "Gửi ảnh mặt tiền, logo, tông màu thương hiệu và địa chỉ lắp đặt để nhận tư vấn nhanh."
      ]]
    ],
    faq: [
      ["Spa nên chọn biển màu gì?", "Nên chọn màu theo nhận diện, nhưng cần đủ tương phản để đọc rõ từ xa và không bị chìm vào mặt tiền."],
      ["Có làm chữ nổi logo trong phòng lễ tân không?", "Có. Chữ nổi mica inox hoặc mica có LED rất phù hợp khu vực lễ tân, quầy đón khách và backdrop."],
      ["Có sửa biển spa cũ không?", "Có thể thay LED, thay mặt biển, làm lại chữ nổi hoặc đổi bố cục theo nhận diện mới."]
    ]
  },
  {
    slug: "bien-quang-cao-showroom-van-phong-ha-noi",
    title: "Biển quảng cáo showroom văn phòng Hà Nội | Bảng hiệu công ty",
    description: "Thi công biển quảng cáo showroom, văn phòng, công ty tại Hà Nội: chữ nổi logo, bảng hiệu mặt tiền, backdrop lễ tân, decal kính.",
    kicker: "Showroom, văn phòng",
    h1: "Làm biển showroom, văn phòng tại Hà Nội",
    lead: "Biển showroom và văn phòng cần đúng nhận diện, hoàn thiện gọn và tạo cảm giác chuyên nghiệp khi khách tới giao dịch.",
    image: "du-an-logo-van-phong-fxce.jpg",
    imageAlt: "Logo văn phòng và biển nhận diện trong nhà tại Hà Nội",
    serviceName: "Biển showroom văn phòng Hà Nội",
    sections: [
      ["Đúng nhận diện và đúng tỉ lệ", [
        "Với showroom, văn phòng và công ty, logo và tên thương hiệu cần được căn tỉ lệ chuẩn theo mặt dựng, quầy lễ tân hoặc cửa kính.",
        "Màu sắc, khoảng cách chữ và độ dày vật liệu ảnh hưởng trực tiếp đến cảm giác chuyên nghiệp."
      ]],
      ["Hạng mục nhận thi công", [
        "Chữ nổi logo, bảng tên công ty, biển mặt tiền, backdrop lễ tân, decal kính, biển chỉ dẫn tầng/phòng và hộp đèn thương hiệu.",
        "Có thể thi công trong nhà hoặc ngoài trời tùy vị trí lắp đặt và yêu cầu nhận diện."
      ]],
      ["Dữ liệu cần chuẩn bị", [
        "File logo/vector, kích thước khu vực lắp, ảnh mặt bằng, yêu cầu vật liệu và thời gian cần bàn giao.",
        "Nếu chỉ có ảnh logo, có thể kiểm tra khả năng dựng lại file trước khi sản xuất."
      ]]
    ],
    faq: [
      ["Có làm backdrop lễ tân không?", "Có. Có thể dùng chữ nổi mica, inox, formex, nền alu hoặc decal theo không gian văn phòng."],
      ["Có làm bảng tên công ty nhỏ không?", "Có. Nhận làm bảng tên công ty, biển phòng, biển chỉ dẫn và logo gắn tường."],
      ["Có thi công ngoài giờ hành chính không?", "Có thể trao đổi lịch phù hợp nếu văn phòng cần hạn chế ảnh hưởng giờ làm việc."]
    ]
  },
  {
    slug: "bien-cong-ty-ha-noi",
    title: "Làm biển công ty Hà Nội | Bảng tên công ty, chữ nổi logo",
    description: "Nhận làm biển công ty tại Hà Nội: bảng tên công ty, biển phòng, chữ nổi logo, biển mica inox, biển alu, backdrop lễ tân.",
    kicker: "Biển công ty",
    h1: "Làm biển công ty tại Hà Nội",
    lead: "Biển công ty cần rõ tên pháp lý, đúng nhận diện và phù hợp vị trí gắn tại mặt tiền, cửa văn phòng hoặc khu lễ tân.",
    image: "du-an-chu-noi-khoa-kinh-te.jpg",
    imageAlt: "Làm biển công ty và chữ nổi logo tại Hà Nội",
    serviceName: "Biển công ty Hà Nội",
    sections: [
      ["Các loại biển công ty phổ biến", [
        "Bảng tên công ty mica, inox, alu, biển phòng ban, chữ nổi logo, backdrop lễ tân và biển chỉ dẫn trong tòa nhà.",
        "Tùy vị trí lắp đặt có thể chọn biển nhỏ gọn, biển sang trọng hoặc hệ nhận diện đồng bộ cho văn phòng."
      ]],
      ["Yêu cầu khi sản xuất", [
        "Tên công ty, mã số thuế nếu cần, địa chỉ, logo và màu sắc cần được kiểm tra kỹ trước khi in/gia công.",
        "Với chữ nổi hoặc logo gắn tường, cần đo đúng kích thước khu vực lắp để tránh bị nhỏ quá hoặc quá dày đặc."
      ]],
      ["Báo giá nhanh", [
        "Gửi file logo, kích thước dự kiến, ảnh vị trí lắp và vật liệu mong muốn qua Zalo 0989 521 881.",
        "Nếu chưa rõ chọn mica, inox hay alu, Bông Sen Trắng sẽ tư vấn theo ngân sách và độ bền mong muốn."
      ]]
    ],
    faq: [
      ["Biển công ty nhỏ có làm được không?", "Có. Có thể làm bảng tên mica, inox, alu hoặc decal gắn kính tùy quy định tòa nhà."],
      ["Có làm biển theo đúng tên pháp lý không?", "Có. Nội dung sẽ được kiểm tra theo thông tin khách hàng cung cấp trước khi sản xuất."],
      ["Có lắp đặt tận nơi không?", "Có thể thi công lắp đặt tại Hà Nội theo lịch đã thống nhất."]
    ]
  },
  {
    slug: "bien-khai-truong-ha-noi",
    title: "Làm biển khai trương Hà Nội | Biển bạt, bảng hiệu cửa hàng nhanh",
    description: "Nhận làm biển khai trương tại Hà Nội: biển bạt Hiflex, bảng hiệu tạm, banner, hộp đèn, biển mặt tiền cửa hàng làm nhanh.",
    kicker: "Khai trương, làm gấp",
    h1: "Làm biển khai trương tại Hà Nội",
    lead: "Khi gần ngày khai trương, biển cần làm nhanh nhưng vẫn phải đủ rõ tên cửa hàng, ngành hàng và thông tin liên hệ.",
    image: "bien-tam-lon-ha-noi.jpg",
    imageAlt: "Làm biển khai trương và biển bạt Hiflex tại Hà Nội",
    serviceName: "Biển khai trương Hà Nội",
    sections: [
      ["Ưu tiên tốc độ và nội dung rõ", [
        "Biển khai trương thường cần chốt nhanh kích thước, nội dung, vật liệu và thời gian lắp để kịp ngày mở cửa.",
        "Nên ưu tiên tên thương hiệu, ngành hàng, số điện thoại và thông điệp khuyến mại nếu có."
      ]],
      ["Hạng mục phù hợp", [
        "Biển bạt Hiflex, banner khai trương, bảng hiệu tạm, standee, biển mặt tiền đơn giản và thay mặt biển cũ.",
        "Nếu muốn dùng lâu dài, có thể làm alu chữ nổi hoặc hộp đèn LED ngay từ đầu thay vì chỉ dùng bạt tạm."
      ]],
      ["Thông tin cần gửi ngay", [
        "Kích thước mặt tiền, ảnh vị trí lắp, ngày cần hoàn thành, nội dung biển, logo và ngân sách dự kiến.",
        "Càng chốt sớm nội dung và file thiết kế, thời gian sản xuất càng chủ động."
      ]]
    ],
    faq: [
      ["Có làm biển khai trương gấp không?", "Có thể hỗ trợ tùy kích thước, vật liệu và thời điểm chốt file."],
      ["Biển khai trương nên dùng bạt hay alu?", "Bạt Hiflex phù hợp làm nhanh và tiết kiệm. Alu chữ nổi phù hợp nếu muốn dùng lâu dài và mặt tiền đẹp hơn."],
      ["Có thay mặt biển cũ trước ngày khai trương không?", "Có thể hỗ trợ nếu khung cũ còn chắc và điều kiện thi công an toàn."]
    ]
  },
  {
    slug: "lam-bien-quang-cao-nhanh-ha-noi",
    title: "Làm biển quảng cáo nhanh Hà Nội | Tư vấn, sản xuất, lắp đặt",
    description: "Nhận làm biển quảng cáo nhanh tại Hà Nội cho cửa hàng cần khai trương, thay biển cũ, làm bảng hiệu mặt tiền. Gửi ảnh qua Zalo 0989 521 881.",
    kicker: "Cần làm nhanh",
    h1: "Làm biển quảng cáo nhanh tại Hà Nội",
    lead: "Khi cửa hàng sắp khai trương, biển cũ hỏng hoặc cần thay nhận diện gấp, Bông Sen Trắng ưu tiên phương án rõ nội dung, thi công gọn và phù hợp ngân sách.",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    imageAlt: "Làm biển quảng cáo nhanh cho mặt tiền cửa hàng tại Hà Nội",
    serviceName: "Làm biển quảng cáo nhanh Hà Nội",
    sections: [
      ["Trường hợp nên xử lý nhanh", [
        "Cửa hàng sắp khai trương, biển cũ xuống cấp, đổi tên thương hiệu, đổi mặt bằng hoặc cần bổ sung biển vẫy, hộp đèn, bảng menu.",
        "Với hạng mục đơn giản, khách hàng có thể gửi ảnh mặt tiền và kích thước dự kiến qua Zalo để được tư vấn phương án trước khi khảo sát."
      ]],
      ["Phương án thường dùng khi cần tiến độ", [
        "Biển bạt Hiflex, thay mặt biển cũ, biển alu chữ nổi đơn giản, hộp đèn mặt tiền, biển vẫy cửa hàng và bảng hiệu tạm cho ngày khai trương.",
        "Nếu cần dùng lâu dài, vẫn nên chọn vật liệu đủ bền thay vì chỉ tối ưu tốc độ ban đầu."
      ]],
      ["Thông tin cần gửi để chốt nhanh", [
        "Ảnh chụp thẳng mặt tiền, chiều ngang/chiều cao dự kiến, địa chỉ lắp đặt, ngày cần hoàn thành, logo hoặc nội dung chữ cần lên biển.",
        "Nếu đã có thiết kế, gửi thêm file thiết kế để kiểm tra kích thước, màu sắc, vật liệu và khả năng thi công đúng tiến độ."
      ]]
    ],
    faq: [
      ["Có nhận làm biển quảng cáo gấp trong Hà Nội không?", "Có thể hỗ trợ tùy loại biển, kích thước, vật liệu và thời điểm chốt nội dung. Nên gửi thông tin sớm để kiểm tra tiến độ thực tế."],
      ["Làm nhanh có đảm bảo chất lượng không?", "Cần chọn phương án phù hợp thời gian. Bông Sen Trắng ưu tiên vật liệu và kết cấu đủ an toàn, không khuyến nghị rút ngắn các bước ảnh hưởng độ bền."],
      ["Muốn báo giá nhanh cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, nội dung biển, logo nếu có và ngày cần hoàn thiện."]
    ]
  },
  {
    slug: "bien-vay-cua-hang-ha-noi",
    title: "Làm biển vẫy cửa hàng Hà Nội | Hộp đèn vẫy, biển hai mặt",
    description: "Nhận làm biển vẫy cửa hàng tại Hà Nội: hộp đèn vẫy, biển mica hai mặt, biển LED, biển tròn, biển treo mặt tiền.",
    kicker: "Biển vẫy, biển hai mặt",
    h1: "Làm biển vẫy cửa hàng tại Hà Nội",
    lead: "Biển vẫy giúp cửa hàng dễ được nhìn thấy từ hai chiều đường, đặc biệt với mặt tiền nhỏ hoặc nằm trong tuyến phố nhiều biển.",
    image: "bien-vay-tron-cua-hang-o-hui-ha-noi.jpg",
    imageAlt: "Biển vẫy tròn hộp đèn hai mặt cho cửa hàng tại Hà Nội",
    gallery: [
      {
        image: "bien-vay-cafe-hop-den-tron-ha-noi.jpg",
        alt: "Biển vẫy hộp đèn tròn cho quán cafe tại Hà Nội",
        caption: "Biển vẫy tròn có đèn giúp quán cafe dễ được nhìn thấy từ hai chiều đường."
      },
      {
        image: "bien-vay-shop-quan-ao-mon-ha-noi.jpg",
        alt: "Biển vẫy tròn cho shop quần áo tại Hà Nội",
        caption: "Biển vẫy cho shop thời trang cần màu sắc rõ, logo ngắn và vị trí treo dễ nhìn."
      },
      {
        image: "du-an-bien-vay-gia-long.jpg",
        alt: "Biển vẫy hộp đèn cửa hàng Gia Long",
        caption: "Mẫu biển vẫy hộp đèn phù hợp cửa hàng nhỏ, spa, cafe và điểm bán trên phố."
      },
      {
        image: "san-xuat-khung-bien-vay-led-ha-noi.jpg",
        alt: "Khung và LED biển vẫy trước khi hoàn thiện",
        caption: "Phần khung, LED và điện cần làm chắc để biển vẫy bền hơn khi dùng ngoài trời."
      }
    ],
    serviceName: "Biển vẫy cửa hàng Hà Nội",
    sections: [
      ["Khi nào nên làm biển vẫy?", [
        "Khi mặt tiền hẹp, cửa hàng nằm trong dãy phố đông biển, hoặc khách thường đi ngang theo hai chiều đường.",
        "Biển vẫy nên có logo/tên ngắn, màu rõ và kích thước vừa đủ để không gây vướng khi lắp đặt."
      ]],
      ["Các kiểu biển vẫy phổ biến", [
        "Hộp đèn mica hai mặt, biển tròn, biển vuông, biển LED, biển treo khung sắt và biển vẫy bạt.",
        "Có thể làm có đèn hoặc không đèn tùy thời gian hoạt động và ngân sách."
      ]],
      ["Lưu ý lắp đặt", [
        "Cần kiểm tra vị trí bắt khung, chiều cao, độ vươn ra ngoài và khả năng chịu gió.",
        "Gửi ảnh mặt tiền và kích thước mong muốn để được tư vấn phương án an toàn, gọn và dễ nhìn."
      ]]
    ],
    faq: [
      ["Biển vẫy có làm đèn được không?", "Có. Hộp đèn vẫy hai mặt là lựa chọn phổ biến cho cửa hàng mở buổi tối."],
      ["Biển vẫy nên làm kích thước bao nhiêu?", "Tùy mặt tiền, độ cao và quy định khu vực. Nên gửi ảnh vị trí lắp để tư vấn phù hợp."],
      ["Có sửa biển vẫy cũ không?", "Có thể thay mặt mica/bạt, thay LED, gia cố khung hoặc làm mới nếu biển đã xuống cấp."]
    ]
  },
  {
    slug: "bien-quang-cao-quan-an-ha-noi",
    title: "Làm biển quảng cáo quán ăn Hà Nội | Biển nhà hàng, quán ăn",
    description: "Nhận làm biển quảng cáo quán ăn tại Hà Nội: biển mặt tiền, hộp đèn, chữ nổi, biển vẫy, bảng menu. Tư vấn nhanh qua Zalo 0989 521 881.",
    kicker: "Biển quán ăn, nhà hàng",
    h1: "Làm biển quảng cáo quán ăn tại Hà Nội",
    lead: "Quán ăn cần biển dễ nhận ra từ đường phố, đủ sáng vào buổi tối và thể hiện rõ món chính để khách quyết định ghé nhanh.",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    imageAlt: "Biển quảng cáo quán ăn chữ nổi phát sáng tại Hà Nội",
    serviceName: "Biển quảng cáo quán ăn Hà Nội",
    sections: [
      ["Biển quán ăn cần rõ món và tên quán", [
        "Khách đi ngang thường chỉ có vài giây để nhìn biển, vì vậy tên quán, món chính và điểm nhận diện cần được đặt ở vùng dễ đọc nhất.",
        "Nếu quán mở buổi tối, nên cân nhắc chữ nổi phát sáng, hộp đèn hoặc biển vẫy có đèn để tăng khả năng nhận diện."
      ]],
      ["Hạng mục thường làm cho quán ăn", [
        "Biển mặt tiền alu chữ nổi, hộp đèn LED, biển bạt Hiflex, biển vẫy hai mặt, bảng menu ngoài cửa và decal kính.",
        "Có thể làm mới toàn bộ hoặc thay mặt biển cũ khi đổi tên quán, đổi món, chuyển địa điểm hoặc khai trương lại."
      ]],
      ["Cách báo giá nhanh", [
        "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, tên quán, món chính và phong cách mong muốn qua Zalo.",
        "Nếu đã có logo hoặc thiết kế, gửi thêm file để tư vấn vật liệu và phương án thi công sát hơn."
      ]]
    ],
    faq: [
      ["Biển quán ăn nên dùng chữ nổi hay hộp đèn?", "Nếu cần nổi bật buổi tối, có thể kết hợp chữ nổi phát sáng với hộp đèn hoặc biển vẫy hai mặt."],
      ["Có làm bảng menu ngoài cửa không?", "Có. Có thể làm bảng menu, biển phụ món ăn, decal kính và biển chỉ dẫn đồng bộ với biển chính."],
      ["Có hỗ trợ làm nhanh trước ngày khai trương không?", "Có thể hỗ trợ tùy kích thước, vật liệu và thời điểm chốt file thiết kế."]
    ],
    gallery: [
      {
        image: "du-an-bep-ba-son-hoi-an-ban-ngay.jpg",
        alt: "Biển quán ăn ban ngày với chữ nổi và logo",
        caption: "Mặt tiền quán ăn cần tên quán và logo rõ ở vùng nhìn chính."
      },
      {
        image: "du-an-bep-ba-son-hoi-an-bien-menu.jpg",
        alt: "Biển phụ và bảng menu cho quán ăn",
        caption: "Biển phụ, bảng menu hoặc chi tiết lối vào giúp khách hiểu nhanh món chính."
      },
      {
        image: "thi-cong-bien-bep-ba-son-hoi-an.jpg",
        alt: "Thi công biển mặt tiền quán ăn",
        caption: "Ảnh thi công giúp đánh giá kết cấu, vị trí bắt khung và tỉ lệ chữ."
      }
    ]
  },
  {
    slug: "bien-quang-cao-cafe-tra-sua-ha-noi",
    title: "Làm biển quảng cáo cafe, trà sữa Hà Nội | Chữ nổi, LED, hộp đèn",
    description: "Thi công biển quảng cáo cafe, trà sữa tại Hà Nội: chữ nổi phát sáng, hộp đèn, biển vẫy, bảng menu, nhận diện mặt tiền đẹp.",
    kicker: "Biển cafe, trà sữa",
    h1: "Làm biển quảng cáo cafe, trà sữa tại Hà Nội",
    lead: "Cafe và trà sữa cần mặt tiền có cảm giác dễ nhớ, hợp phong cách quán và đủ nổi bật cả ban ngày lẫn buổi tối.",
    image: "du-an-bien-tien-coffee.jpg",
    imageAlt: "Biển cafe chữ nổi phát sáng tại Hà Nội",
    serviceName: "Biển quảng cáo cafe trà sữa Hà Nội",
    sections: [
      ["Tạo điểm nhớ cho mặt tiền quán", [
        "Tên quán, logo và màu nhận diện nên được ưu tiên hơn các dòng chữ nhỏ để khách dễ nhớ khi nhìn từ xa.",
        "Ánh sáng vàng, trắng hoặc LED hắt chân chữ có thể tạo cảm giác ấm, hiện đại hoặc nổi bật tùy phong cách quán."
      ]],
      ["Các hạng mục phù hợp", [
        "Chữ nổi mica/inox có LED, hộp đèn, biển vẫy tròn, bảng menu ngoài cửa, decal kính và bảng chỉ dẫn khu vực order.",
        "Với mặt tiền nhỏ, biển vẫy và chữ nổi gọn thường giúp khách nhìn thấy quán từ hai chiều đường."
      ]],
      ["Thông tin cần gửi", [
        "Ảnh mặt tiền ban ngày, ảnh buổi tối nếu có, kích thước biển, logo, màu thương hiệu và thời gian cần hoàn thành.",
        "Bông Sen Trắng có thể tư vấn phương án tiết kiệm hoặc phương án đẹp hơn để chủ quán chọn theo ngân sách."
      ]]
    ],
    faq: [
      ["Biển cafe nên dùng ánh sáng màu gì?", "Ánh sáng vàng tạo cảm giác ấm, ánh sáng trắng rõ và hiện đại hơn. Nên chọn theo phong cách quán."],
      ["Có làm biển vẫy cho quán cafe không?", "Có. Biển vẫy hai mặt hoặc biển tròn rất phù hợp với quán nằm trên tuyến phố đông."],
      ["Chưa có thiết kế biển thì có tư vấn được không?", "Có thể tư vấn bố cục cơ bản khi có logo, tên quán, ảnh mặt tiền và phong cách mong muốn."]
    ]
  },
  {
    slug: "bien-shop-thoi-trang-ha-noi",
    title: "Làm biển shop thời trang Hà Nội | Biển boutique, cửa hàng quần áo",
    description: "Nhận làm biển shop thời trang tại Hà Nội: chữ nổi, hộp đèn, biển vẫy, bảng hiệu boutique, showroom quần áo, mỹ phẩm.",
    kicker: "Biển shop, boutique",
    h1: "Làm biển shop thời trang tại Hà Nội",
    lead: "Shop thời trang cần biển gọn, sang và dễ chụp hình, giúp tên thương hiệu nổi bật mà không làm mặt tiền bị rối.",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    imageAlt: "Biển shop thời trang chữ nổi phát sáng tại Hà Nội",
    serviceName: "Biển shop thời trang Hà Nội",
    sections: [
      ["Ưu tiên cảm giác thương hiệu", [
        "Biển shop nên có chữ rõ, màu nền sạch và ánh sáng vừa đủ để mặt tiền nhìn chỉn chu khi khách ghé hoặc chụp ảnh.",
        "Chữ nổi mica, inox hoặc LED hắt chân chữ phù hợp với boutique, shop quần áo, mỹ phẩm và showroom nhỏ."
      ]],
      ["Hạng mục thường dùng", [
        "Biển alu chữ nổi, chữ nổi mica/inox, hộp đèn mỏng, biển vẫy nhỏ, logo gắn tường và decal kính.",
        "Có thể làm đồng bộ biển mặt tiền, biển trong nhà và bảng chỉ dẫn để nhận diện thương hiệu nhất quán."
      ]],
      ["Cần chuẩn bị gì?", [
        "Gửi logo, màu thương hiệu, ảnh mặt tiền, kích thước dự kiến và hình mẫu phong cách nếu có.",
        "Nếu shop sắp khai trương, cần chốt thời gian bàn giao để chọn vật liệu và quy trình sản xuất phù hợp."
      ]]
    ],
    faq: [
      ["Biển shop nhỏ nên làm loại nào?", "Có thể dùng chữ nổi mica, alu chữ nổi hoặc hộp đèn mỏng tùy ngân sách và phong cách shop."],
      ["Có làm biển gắn tường trong shop không?", "Có. Có thể làm logo chữ nổi, backdrop quầy thu ngân hoặc bảng tên khu vực."],
      ["Có làm theo mẫu tham khảo không?", "Có. Gửi ảnh mẫu, logo và mặt tiền để kiểm tra khả năng áp dụng vào kích thước thực tế."]
    ]
  },
  {
    slug: "bien-phong-kham-nha-thuoc-ha-noi",
    title: "Làm biển phòng khám, nhà thuốc Hà Nội | Biển rõ, chuyên nghiệp",
    description: "Thi công biển phòng khám, nhà thuốc tại Hà Nội: biển mặt tiền, hộp đèn, chữ nổi, bảng tên, biển chỉ dẫn rõ thông tin.",
    kicker: "Biển phòng khám, nhà thuốc",
    h1: "Làm biển phòng khám, nhà thuốc tại Hà Nội",
    lead: "Phòng khám và nhà thuốc cần biển rõ thông tin, dễ đọc, chuyên nghiệp và phù hợp quy định nhận diện tại mặt tiền.",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    imageAlt: "Biển nhà thuốc và phòng khám rõ thông tin tại Hà Nội",
    serviceName: "Biển phòng khám nhà thuốc Hà Nội",
    sections: [
      ["Thông tin phải dễ đọc", [
        "Tên cơ sở, chuyên khoa hoặc ngành hàng, số điện thoại, giờ làm việc và địa chỉ cần phân cấp rõ để khách dễ tìm.",
        "Biển nhiều thông tin nên tránh chữ quá nhỏ; màu nền và màu chữ cần đủ tương phản khi nhìn từ đường phố."
      ]],
      ["Hạng mục phù hợp", [
        "Biển hộp đèn, biển alu, chữ nổi, bảng tên mica/inox, biển chỉ dẫn phòng ban, decal kính và biển vẫy hai mặt.",
        "Có thể làm mới hoặc thay mặt biển cũ khi đổi tên, đổi bác sĩ phụ trách, đổi nhận diện hoặc mở thêm dịch vụ."
      ]],
      ["Lưu ý khi thi công", [
        "Cần kiểm tra mặt tiền, vị trí dây điện, độ cao lắp đặt và độ bền vật liệu ngoài trời.",
        "Gửi ảnh mặt tiền và nội dung cần hiển thị để được tư vấn bố cục rõ, gọn và phù hợp ngân sách."
      ]]
    ],
    faq: [
      ["Biển nhà thuốc nên dùng hộp đèn không?", "Hộp đèn phù hợp nếu cần nhìn rõ buổi tối. Có thể kết hợp chữ nổi hoặc mặt bạt xuyên sáng."],
      ["Có làm bảng tên phòng khám trong nhà không?", "Có. Có thể làm bảng tên mica, inox, chữ nổi và biển chỉ dẫn khu vực."],
      ["Có sửa biển cũ không?", "Có thể thay LED, thay mặt biển, làm mới nội dung hoặc gia cố khung nếu còn sử dụng được."]
    ]
  },
  {
    slug: "neon-sign-led-decor-ha-noi",
    title: "Làm neon sign, LED decor Hà Nội | Đèn chữ trang trí quán, shop",
    description: "Nhận làm neon sign, LED decor tại Hà Nội cho quán cafe, nhà hàng, shop, studio, spa: chữ phát sáng, logo LED, bảng check-in.",
    kicker: "Neon sign, LED decor",
    h1: "Làm neon sign, LED decor tại Hà Nội",
    lead: "Neon sign và LED decor giúp không gian quán, shop hoặc studio có điểm check-in, tăng nhận diện và nổi bật trên ảnh khách hàng đăng lên mạng xã hội.",
    image: "du-an-bien-the-fox-fitness.jpg",
    imageAlt: "Chữ và logo LED phát sáng ngoài trời tại Hà Nội",
    serviceName: "Neon sign LED decor Hà Nội",
    sections: [
      ["Dùng cho quán, shop và studio", [
        "Neon sign phù hợp tường check-in, khu quầy order, mặt tiền nhỏ, phòng livestream, spa, salon, cafe và studio chụp ảnh.",
        "Có thể làm chữ slogan, logo thương hiệu, icon đơn giản hoặc cụm chữ phát sáng theo màu nhận diện."
      ]],
      ["Cần chú ý gì khi đặt làm?", [
        "Nên chốt kích thước mảng tường, màu ánh sáng, vị trí cấp điện, kiểu chữ và cách gắn để sản phẩm nhìn cân đối.",
        "Nếu lắp ngoài trời, cần chọn phương án chống nước và bảo vệ nguồn điện phù hợp."
      ]],
      ["Thông tin gửi để báo giá", [
        "Gửi chữ/logo cần làm, kích thước mong muốn, vị trí lắp, ảnh tường hoặc mặt tiền và màu ánh sáng.",
        "Bông Sen Trắng sẽ tư vấn chất liệu, cách đi dây và phương án hoàn thiện phù hợp không gian."
      ]]
    ],
    faq: [
      ["Neon sign có làm theo logo được không?", "Có thể làm theo logo nếu chi tiết phù hợp với kỹ thuật uốn/dựng LED và kích thước mong muốn."],
      ["Có lắp ngoài trời được không?", "Có thể, nhưng cần chọn phương án chống nước, nguồn điện và cách lắp phù hợp môi trường ngoài trời."],
      ["Neon sign có phù hợp làm điểm check-in không?", "Có. Đây là hạng mục phù hợp cho quán cafe, studio, shop và spa muốn có góc chụp ảnh nhận diện."]
    ]
  },
  {
    slug: "du-an-bien-bep-ba-son-hoi-an",
    title: "Mẫu biển nhà hàng chữ nổi phát sáng | Làm biển quảng cáo Hà Nội",
    description: "Tham khảo mẫu biển nhà hàng chữ nổi phát sáng tại Hà Nội: logo, chữ nổi, biển phụ, mặt tiền nổi bật và cách gửi thông tin để báo giá.",
    kicker: "Mẫu biển nhà hàng",
    h1: "Mẫu biển nhà hàng chữ nổi phát sáng",
    lead: "Ảnh công trình thực tế giúp chủ quán tham khảo cách làm biển mặt tiền nhà hàng: chữ nổi phát sáng, logo nhận diện, biển phụ và bố cục dễ nhìn từ đường phố.",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    imageAlt: "Mẫu biển nhà hàng chữ nổi phát sáng tại Hà Nội",
    type: "case",
    sections: [
      ["Hạng mục biển phù hợp cho nhà hàng", [
        "Mặt tiền có thể kết hợp chữ nổi phát sáng, logo hộp đèn, biển phụ món ăn, bảng menu và biển chỉ dẫn bên cửa.",
        "Tổng thể nên ưu tiên ánh sáng ấm, vật liệu phù hợp phong cách quán và bố cục dễ đọc khi khách đi qua tuyến phố đông biển."
      ]],
      ["Vì sao kiểu biển này hợp quán ăn, cafe", [
        "Tên quán và logo nên đặt ở vùng cao, dễ nhìn từ xa; hệ đèn giúp biển nổi bật buổi tối nhưng vẫn giữ cảm giác ấm của không gian ăn uống.",
        "Các biển phụ như menu, biển vẫy và bảng chỉ dẫn giúp khách nhận ra món chính trước khi bước vào quán."
      ]],
      ["Cách nhận tư vấn và báo giá", [
        "Biển nhà hàng nên có một điểm nhận diện chính thật rõ, sau đó mới thêm thông tin món, hotline hoặc bảng menu để tránh mặt tiền bị rối.",
        "Gửi ảnh mặt tiền ban ngày, ảnh buổi tối nếu có, kích thước dự kiến, logo và phong cách nội thất qua Zalo 0989 521 881 để được tư vấn vật liệu hợp tông."
      ]]
    ],
    faq: [
      ["Biển nhà hàng nên làm chữ nổi hay hộp đèn?", "Nếu cần vừa sang vừa nổi bật buổi tối, chữ nổi có LED kết hợp logo hộp đèn là phương án rất phù hợp."],
      ["Có làm biển phụ và bảng menu ngoài cửa không?", "Có. Có thể làm biển vẫy, bảng menu, biển chỉ dẫn món và các hạng mục trang trí đồng bộ với biển chính."],
      ["Muốn báo giá nhanh cần gửi gì?", "Cần gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, logo hoặc mẫu thiết kế nếu có, và thời gian cần hoàn thành."]
    ],
    gallery: [
      {
        image: "du-an-bep-ba-son-hoi-an-ban-ngay.jpg",
        alt: "Mẫu biển nhà hàng chữ nổi ban ngày",
        caption: "Mặt tiền ban ngày với chữ nổi, logo và biển phụ đồng bộ."
      },
      {
        image: "du-an-bep-ba-son-hoi-an-bien-menu.jpg",
        alt: "Biển phụ và xe menu cho nhà hàng",
        caption: "Biển phụ, xe menu và chi tiết trang trí ở lối vào."
      },
      {
        image: "thi-cong-bien-bep-ba-son-hoi-an.jpg",
        alt: "Quá trình thi công biển mặt tiền nhà hàng",
        caption: "Ảnh thi công thực tế trước khi hoàn thiện chữ nổi và mặt dựng."
      }
    ]
  },
  {
    slug: "du-an-bien-chu-noi-mo-nguyen",
    title: "Dự án biển chữ nổi mặt tiền | Bông Sen Trắng",
    description: "Ảnh thi công thực tế biển chữ nổi phát sáng cho mặt tiền cửa hàng. Tham khảo cách làm biển nổi bật buổi tối tại Hà Nội.",
    kicker: "Ảnh thi công thực tế",
    h1: "Biển chữ nổi mặt tiền phát sáng",
    lead: "Biển chữ nổi có đèn hắt sáng giúp mặt tiền nổi bật hơn vào buổi tối, phù hợp cửa hàng, boutique, showroom và điểm bán cần cảm giác chỉn chu.",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    imageAlt: "Biển chữ nổi mặt tiền phát sáng tại Hà Nội",
    type: "case",
    sections: [
      ["Điểm nổi bật của hạng mục", [
        "Chữ nổi được làm rõ hình khối, có ánh sáng hắt tạo chiều sâu và giúp tên thương hiệu dễ nhận diện khi đi qua mặt tiền.",
        "Nền biển sáng, đường viền gọn và bố cục ít chữ giúp tổng thể nhìn sang hơn, không bị rối khi quan sát từ dưới đường."
      ]],
      ["Gợi ý cho cửa hàng tương tự", [
        "Với cửa hàng thời trang, mỹ phẩm, showroom hoặc thương hiệu cá nhân, nên ưu tiên chữ nổi, ánh sáng ấm và vật liệu hoàn thiện kỹ.",
        "Khi báo giá cần có ảnh mặt tiền, kích thước biển, tông màu thương hiệu và yêu cầu có đèn hay không đèn."
      ]]
    ],
    faq: [
      ["Biển chữ nổi có đèn phù hợp cửa hàng nào?", "Phù hợp cửa hàng, showroom, spa, boutique, văn phòng đại diện và thương hiệu cần mặt tiền nổi bật vào buổi tối."],
      ["Có thể làm chữ nổi theo logo sẵn không?", "Có. Cần file logo hoặc ảnh logo đủ rõ để kiểm tra tỉ lệ, vật liệu và phương án gia công."]
    ]
  },
  {
    slug: "du-an-bien-the-fox-fitness",
    title: "Dự án biển phát sáng ngoài trời | Bông Sen Trắng",
    description: "Ảnh thi công thực tế biển phát sáng ngoài trời cho thương hiệu fitness. Tham khảo biển logo chữ nổi dễ nhận diện buổi tối.",
    kicker: "Ảnh thi công thực tế",
    h1: "Biển phát sáng ngoài trời",
    lead: "Biển logo phát sáng ngoài trời giúp thương hiệu nổi bật từ xa, đặc biệt với mặt dựng tối màu hoặc công trình hoạt động buổi tối.",
    image: "du-an-bien-the-fox-fitness.jpg",
    imageAlt: "Biển phát sáng ngoài trời The Fox Fitness",
    type: "case",
    sections: [
      ["Yêu cầu khi làm biển phát sáng", [
        "Logo và chữ cần sáng đều, đủ rõ từ xa nhưng không chói quá mức khiến mất chi tiết nhận diện.",
        "Với biển ngoài trời, cần chú ý chống nước, nguồn điện, vị trí bắt khung và khả năng bảo trì sau lắp đặt."
      ]],
      ["Phù hợp với ngành nào?", [
        "Fitness, spa, nhà hàng, cafe, showroom, trung tâm đào tạo và cửa hàng mở buổi tối đều có thể dùng biển phát sáng để tăng nhận diện.",
        "Ảnh mặt dựng và thời gian hoạt động trong ngày sẽ giúp chọn độ sáng, kích thước chữ và vật liệu phù hợp."
      ]]
    ],
    faq: [
      ["Biển phát sáng ngoài trời có cần chống nước không?", "Có. Hệ LED, nguồn và đường dây cần được xử lý phù hợp môi trường ngoài trời."],
      ["Có thể sửa biển phát sáng bị tối không?", "Có thể kiểm tra LED, nguồn, dây điện và mặt biển để thay thế hoặc làm mới từng phần."]
    ]
  },
  {
    slug: "du-an-bien-kong-billiards",
    title: "Dự án biển hộp đèn mặt tiền | Bông Sen Trắng",
    description: "Ảnh thi công thực tế biển hộp đèn và chữ nổi mặt tiền cho điểm kinh doanh. Tham khảo biển lớn, sáng rõ tại Hà Nội.",
    kicker: "Ảnh thi công thực tế",
    h1: "Biển hộp đèn mặt tiền lớn",
    lead: "Biển mặt tiền lớn cần chữ rõ, ánh sáng đều và bố cục mạnh để khách dễ nhận ra thương hiệu từ khoảng cách xa.",
    image: "du-an-bien-kong-billiards.jpg",
    imageAlt: "Biển hộp đèn mặt tiền Kong Billiards Club",
    type: "case",
    sections: [
      ["Biển lớn cần kết cấu chắc", [
        "Khi kích thước biển lớn, phần khung, điểm bắt và độ cao thi công ảnh hưởng trực tiếp đến độ an toàn và độ bền.",
        "Chữ sáng rõ giúp biển dễ nhìn buổi tối, còn nền tối tạo độ tương phản mạnh cho mặt tiền."
      ]],
      ["Gợi ý cho điểm kinh doanh giải trí", [
        "Billiards, karaoke, hotel, nhà hàng, cafe hoặc showroom có thể dùng biển lớn kết hợp chữ nổi và đèn để tạo dấu hiệu nhận diện mạnh.",
        "Cần gửi ảnh mặt tiền và kích thước dự kiến để tư vấn khung, vật liệu và phương án ánh sáng."
      ]]
    ],
    faq: [
      ["Biển hộp đèn lớn có bền không?", "Độ bền phụ thuộc vật liệu, khung, nguồn LED và cách xử lý chống nước khi thi công."],
      ["Có làm biển lớn theo mặt tiền sẵn có không?", "Có. Cần khảo sát hoặc có ảnh/kích thước mặt tiền để tính tỉ lệ và kết cấu."]
    ]
  },
  {
    slug: "du-an-chu-noi-khoa-kinh-te",
    title: "Dự án chữ nổi logo trong nhà | Bông Sen Trắng",
    description: "Ảnh thi công thực tế chữ nổi logo gắn tường trong nhà cho văn phòng, trường học và khu lễ tân. Tham khảo chất liệu chữ nổi.",
    kicker: "Ảnh thi công thực tế",
    h1: "Chữ nổi logo gắn tường trong nhà",
    lead: "Chữ nổi gắn tường giúp khu vực văn phòng, lễ tân hoặc phòng ban có nhận diện rõ ràng và chuyên nghiệp hơn.",
    image: "du-an-chu-noi-khoa-kinh-te.jpg",
    imageAlt: "Chữ nổi logo Khoa Kinh tế Học viện Ngân hàng",
    type: "case",
    sections: [
      ["Hoàn thiện gọn trong không gian nội thất", [
        "Chữ nổi trong nhà cần bề mặt sắc nét, khoảng cách chữ đều và màu sắc hài hòa với nền tường.",
        "Với logo có nhiều lớp màu, cần kiểm tra tỉ lệ từng chi tiết để khi gia công không bị mất nét."
      ]],
      ["Ứng dụng phù hợp", [
        "Văn phòng, trường học, showroom, phòng họp, quầy lễ tân và khu trưng bày thương hiệu đều phù hợp làm chữ nổi.",
        "Nên gửi file logo/vector, ảnh vị trí gắn và kích thước mảng tường để tính tỉ lệ chữ đúng."
      ]]
    ],
    faq: [
      ["Chữ nổi trong nhà nên dùng mica hay inox?", "Mica phù hợp màu sắc đa dạng; inox phù hợp cảm giác chắc, sang và bền. Có thể phối vật liệu theo logo."],
      ["Có lắp chữ nổi trên tường sơn không?", "Có, nhưng cần kiểm tra bề mặt tường và phương án gắn để đảm bảo chắc, phẳng và đúng tỉ lệ."]
    ]
  },
  {
    slug: "du-an-bien-tien-coffee",
    title: "Dự án biển cafe phát sáng | Bông Sen Trắng",
    description: "Ảnh thi công thực tế biển chữ nổi phát sáng cho quán cafe. Tham khảo giải pháp biển mặt tiền nổi bật buổi tối tại Hà Nội.",
    kicker: "Ảnh thi công thực tế",
    h1: "Biển cafe chữ nổi phát sáng",
    lead: "Biển cafe cần tạo cảm giác dễ nhớ, đủ sáng vào buổi tối và phù hợp phong cách không gian quán.",
    image: "du-an-bien-tien-coffee.jpg",
    imageAlt: "Biển chữ nổi Tiên Coffee phát sáng buổi tối",
    type: "case",
    sections: [
      ["Ánh sáng là điểm nhấn chính", [
        "Chữ nổi phát sáng kết hợp nền tối giúp tên quán rõ hơn vào buổi tối và tạo cảm giác ấm cho mặt tiền.",
        "Với quán cafe, nên cân bằng giữa độ sáng, màu chữ và chất liệu nền để biển không bị gắt hoặc khó đọc."
      ]],
      ["Gợi ý cho quán cafe, nhà hàng", [
        "Có thể dùng chữ nổi LED, hộp đèn, biển vẫy hoặc bảng menu ngoài cửa tùy mặt tiền và thời gian hoạt động.",
        "Gửi ảnh mặt tiền ban ngày và buổi tối nếu có để tư vấn phương án chiếu sáng phù hợp."
      ]]
    ],
    faq: [
      ["Biển cafe nên dùng ánh sáng vàng hay trắng?", "Ánh sáng vàng tạo cảm giác ấm; ánh sáng trắng rõ và hiện đại hơn. Nên chọn theo phong cách quán."],
      ["Có làm biển cafe mặt tiền nhỏ không?", "Có. Có thể tối ưu bằng chữ nổi, biển vẫy hoặc hộp đèn nhỏ để dễ nhận diện."]
    ]
  },
  {
    slug: "du-an-bien-gia-long",
    title: "Dự án biển hộp đèn cửa hàng | Bông Sen Trắng",
    description: "Ảnh thi công thực tế biển hộp đèn cửa hàng và biển vẫy phát sáng. Tham khảo cách làm biển rõ thông tin buổi tối.",
    kicker: "Ảnh thi công thực tế",
    h1: "Biển hộp đèn cửa hàng phát sáng",
    lead: "Biển hộp đèn giúp thông tin cửa hàng sáng rõ vào buổi tối, phù hợp mặt tiền cần khách nhìn thấy nhanh khi đi đường.",
    image: "du-an-bien-gia-long.jpg",
    imageAlt: "Biển hộp đèn Gia Long Luxury tại Hà Nội",
    type: "case",
    sections: [
      ["Rõ thông tin, dễ nhìn từ xa", [
        "Biển hộp đèn phù hợp khi cần làm nổi bật tên cửa hàng, dòng sản phẩm và thông tin liên hệ trong điều kiện thiếu sáng.",
        "Cần bố trí chữ đủ lớn, tránh quá nhiều nội dung nhỏ làm khách khó đọc khi di chuyển."
      ]],
      ["Kết hợp biển chính và biển vẫy", [
        "Nếu mặt tiền nằm trên tuyến phố đông, biển vẫy hoặc hộp đèn hai mặt giúp tăng khả năng nhìn thấy từ hai chiều đường.",
        "Khi thi công cần kiểm tra điểm treo, độ vươn, dây điện và khả năng bảo trì sau này."
      ]]
    ],
    faq: [
      ["Biển hộp đèn cửa hàng có làm hai mặt không?", "Có. Biển vẫy/hộp đèn hai mặt phù hợp mặt tiền nhỏ hoặc cần khách nhìn từ hai chiều."],
      ["Có thay mặt biển hộp đèn cũ không?", "Có thể thay mặt mica/bạt, thay LED hoặc làm mới toàn bộ tùy tình trạng khung cũ."]
    ]
  },
  {
    slug: "du-an-chu-noi-hoc-vien-khoa-hoc-quan-su",
    title: "Chữ nổi mặt dựng Học viện Khoa học Quân sự | Bông Sen Trắng",
    description: "Tham khảo công trình lắp chữ nổi trên mặt dựng Học viện Khoa học Quân sự. Xem ảnh thực tế và gửi kích thước vị trí để Bông Sen Trắng tư vấn hạng mục tương tự.",
    kicker: "Hồ sơ công trình",
    h1: "Chữ nổi mặt dựng Học viện Khoa học Quân sự",
    lead: "Ảnh ghi lại hạng mục chữ nổi sáng màu đang được lắp trên mặt dựng tối của Học viện Khoa học Quân sự. Tương phản màu giúp tên công trình dễ đọc trên nền kiến trúc.",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    imageAlt: "Chữ nổi sáng màu đang được lắp trên mặt dựng Học viện Khoa học Quân sự",
    type: "case",
    sections: [
      ["Hạng mục trong ảnh", [
        "Hồ sơ ảnh thể hiện chữ nổi sáng màu gắn trên mặt dựng tối của Học viện Khoa học Quân sự, cùng công đoạn lắp đặt tại công trình. Đây là hạng mục chữ nhận diện ngoài trời."
      ]],
      ["Điều cần tính khi làm chữ nổi mặt dựng", [
        "Đo diện tích mặt dựng và xác định khoảng cách người xem thường đứng.",
        "Chọn màu chữ có độ tương phản rõ với nền phía sau.",
        "Cân đối chiều cao chữ, khoảng cách giữa các ký tự và chiều dài tổng thể.",
        "Kiểm tra vị trí lắp đặt, cách tiếp cận và phương án an toàn trước khi thi công trên cao.",
        "Muốn được tư vấn hạng mục tương tự, gửi ảnh mặt dựng, kích thước dự kiến, địa chỉ và khoảng cách nhìn chính qua Zalo."
      ]]
    ],
    related: [
      ["Thi công biển quảng cáo Hà Nội", "../thi-cong-bien-quang-cao-ha-noi/"],
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/"],
      ["Chữ nổi mica, inox", "../chu-noi-mica-inox-ha-noi/"],
      ["Báo giá biển quảng cáo", "../bao-gia-bien-quang-cao-ha-noi/"],
      ["Hình ảnh biển quảng cáo thực tế", "../hinh-anh-bien-quang-cao-thuc-te-ha-noi/"],
      ["Liên hệ tư vấn công trình", "../lien-he-lam-bien-quang-cao-ha-noi/"]
    ],
    faq: [
      ["Chữ nổi ngoài trời làm bằng vật liệu gì?", "Có thể dùng inox, mica, đồng, formex hoặc vật liệu khác tùy thiết kế và ngân sách."],
      ["Có thể gắn đèn cho chữ nổi không?", "Có thể dùng LED hắt chân chữ hoặc hộp chữ phát sáng tùy mặt dựng và yêu cầu nhận diện."]
    ]
  },
  {
    slug: "du-an-bien-oppo-samsung",
    title: "Dự án biển cửa hàng OPPO Samsung | Bông Sen Trắng",
    description: "Ảnh công trình biển quảng cáo cửa hàng điện thoại OPPO Samsung trong hồ sơ Bông Sen Trắng. Tham khảo bảng hiệu mặt tiền.",
    kicker: "Dự án tham khảo",
    h1: "Biển cửa hàng OPPO Samsung",
    lead: "Bảng hiệu cửa hàng điện thoại cần màu sắc nhận diện mạnh, chữ dễ đọc và bố cục rõ giữa nhiều thương hiệu trên cùng mặt tiền.",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Biển quảng cáo cửa hàng OPPO Samsung",
    type: "case",
    sections: [
      ["Điểm cần chú ý", [
        "Mặt tiền cửa hàng có nhiều thông tin nên cần chia tầng nội dung rõ: thương hiệu chính, ngành hàng, tên cửa hàng và thông tin liên hệ.",
        "Màu sắc cần đúng nhận diện để khách hàng nhận ra thương hiệu từ xa."
      ]],
      ["Gợi ý cho cửa hàng tương tự", [
        "Nên chốt kích thước biển theo thực tế mặt tiền, kiểm tra khung cũ nếu có, và cân nhắc ánh sáng nếu hoạt động buổi tối.",
        "Ảnh công trình cũ là tư liệu tham khảo, phương án mới sẽ được tư vấn theo mặt bằng hiện tại."
      ]]
    ],
    faq: [
      ["Có làm biển cho đại lý thương hiệu không?", "Có. Có thể thi công theo bộ nhận diện và quy chuẩn thương hiệu đã có."],
      ["Có thay mới biển cửa hàng cũ không?", "Có. Có thể tháo dỡ, gia cố khung, thay mặt biển hoặc làm mới toàn bộ."]
    ]
  },
  {
    slug: "du-an-bien-wonderfarm",
    title: "Dự án biển đại lý Wonderfarm | Bông Sen Trắng",
    description: "Ảnh công trình biển quảng cáo Wonderfarm trong hồ sơ Bông Sen Trắng. Tham khảo cách thi công bảng hiệu đại lý, điểm bán và cửa hàng.",
    kicker: "Dự án tham khảo",
    h1: "Biển đại lý Wonderfarm",
    lead: "Biển đại lý và điểm bán cần nhận diện thương hiệu rõ, bố cục gọn, màu sắc đúng và thông tin liên hệ dễ đọc trên mặt tiền thực tế.",
    image: "du-an-wonderfarm.jpg",
    imageAlt: "Biển quảng cáo Wonderfarm cho đại lý bán lẻ",
    type: "case",
    sections: [
      ["Nhận diện thương hiệu tại điểm bán", [
        "Biển đại lý thường cần thể hiện logo, ngành hàng, thông tin điểm bán và số điện thoại mà vẫn giữ tổng thể dễ đọc.",
        "Với các thương hiệu có màu nhận diện mạnh, phần sản xuất cần bám đúng tông màu và tỉ lệ để biển nhìn chuyên nghiệp hơn."
      ]],
      ["Gợi ý cho cửa hàng tương tự", [
        "Cửa hàng tạp hóa, đại lý phân phối, điểm bán đồ uống, vật liệu hoặc điện thoại có thể dùng bố cục rõ thương hiệu chính và thông tin bán hàng.",
        "Khi cần làm biển tương tự, nên gửi ảnh mặt tiền, kích thước dự kiến và yêu cầu nhận diện để được tư vấn vật liệu phù hợp."
      ]]
    ],
    faq: [
      ["Có làm biển đại lý theo nhận diện thương hiệu không?", "Có. Nếu có file nhận diện, đội sản xuất sẽ bám theo logo, màu sắc và bố cục đã duyệt."],
      ["Biển đại lý nên làm bằng vật liệu gì?", "Tùy ngân sách và thời gian sử dụng, có thể chọn alu, bạt Hiflex, mica, hộp đèn hoặc kết hợp nhiều vật liệu."]
    ]
  },
  {
    slug: "du-an-bien-jotun",
    title: "Dự án biển đại lý sơn Jotun | Bông Sen Trắng",
    description: "Ảnh công trình biển đại lý sơn Jotun trong hồ sơ Bông Sen Trắng. Tham khảo bảng hiệu mặt tiền nhiều tầng thông tin.",
    kicker: "Dự án tham khảo",
    h1: "Biển đại lý sơn Jotun",
    lead: "Bảng hiệu đại lý cần hiển thị rõ thương hiệu, tên điểm bán, ngành hàng và thông tin liên hệ mà vẫn giữ bố cục dễ nhìn.",
    image: "du-an-jotun.jpg",
    imageAlt: "Biển quảng cáo đại lý sơn Jotun",
    type: "case",
    sections: [
      ["Bố cục nhiều thông tin", [
        "Biển đại lý thường có thương hiệu chính, tên cửa hàng, ngành hàng và số điện thoại. Cần phân cấp rõ để không bị rối.",
        "Vị trí chữ, kích thước logo và tương phản màu ảnh hưởng trực tiếp đến khả năng đọc từ đường phố."
      ]],
      ["Ứng dụng cho cửa hàng tại Hà Nội", [
        "Các cửa hàng sơn, vật liệu xây dựng, điện thoại, spa, nhà hàng và đại lý bán lẻ đều có thể áp dụng cách phân tầng thông tin tương tự.",
        "Khi có ảnh mặt tiền, Bông Sen Trắng sẽ tư vấn phương án phù hợp thực tế."
      ]]
    ],
    faq: [
      ["Biển đại lý nên dùng chất liệu gì?", "Tùy ngân sách và yêu cầu thương hiệu, có thể dùng alu, bạt, mica, hộp đèn hoặc kết hợp nhiều vật liệu."],
      ["Có làm theo quy chuẩn nhận diện của hãng không?", "Có. Nếu khách hàng có file nhận diện, đội sản xuất sẽ bám theo màu sắc, logo và bố cục đã duyệt."]
    ]
  }
];

const expandedAreaPages = [
  {
    district: "Nam Từ Liêm",
    slug: "lam-bien-quang-cao-nam-tu-liem",
    streets: "Mỹ Đình, Mễ Trì, Phú Đô, Cầu Diễn, Trung Văn, Đại lộ Thăng Long và khu vực sân vận động Mỹ Đình",
    businessTypes: "showroom, cửa hàng bán lẻ, văn phòng, nhà hàng, quán cafe, trung tâm đào tạo và điểm bán trong khu đô thị",
    image: "du-an-bien-the-fox-fitness.jpg",
    priority: "ưu tiên phương án sáng rõ buổi tối, bền ngoài trời và dễ nhận diện từ trục đường lớn"
  },
  {
    district: "Bắc Từ Liêm",
    slug: "lam-bien-quang-cao-bac-tu-liem",
    streets: "Cổ Nhuế, Xuân Đỉnh, Phạm Văn Đồng, Đông Ngạc, Đức Thắng và các khu dân cư mới",
    businessTypes: "cửa hàng dịch vụ, đại lý, spa, phòng khám, quán ăn, văn phòng và điểm kinh doanh mặt phố",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    priority: "tối ưu chi phí nhưng vẫn đảm bảo khung chắc, mặt biển gọn và chữ dễ đọc"
  },
  {
    district: "Long Biên",
    slug: "lam-bien-quang-cao-long-bien",
    streets: "Nguyễn Văn Cừ, Ngô Gia Tự, Gia Thụy, Việt Hưng, Sài Đồng, Bồ Đề và khu đô thị Vinhomes Riverside",
    businessTypes: "nhà hàng, showroom, cửa hàng nội thất, quán cafe, đại lý, văn phòng và cửa hàng khai trương",
    image: "du-an-bien-kong-billiards.jpg",
    priority: "chú trọng tỉ lệ mặt tiền, ánh sáng LED và độ bền khi biển nằm ở vị trí thoáng gió"
  },
  {
    district: "Tây Hồ",
    slug: "lam-bien-quang-cao-tay-ho",
    streets: "Xuân Diệu, Tô Ngọc Vân, Lạc Long Quân, Âu Cơ, Võ Chí Công, Thụy Khuê và khu vực Hồ Tây",
    businessTypes: "nhà hàng, cafe, spa, salon, khách sạn nhỏ, boutique, văn phòng dịch vụ và cửa hàng cao cấp",
    image: "du-an-bien-bep-ba-son-hoi-an.jpg",
    priority: "ưu tiên thiết kế tinh gọn, vật liệu sạch đẹp và ánh sáng vừa đủ để giữ cảm giác chuyên nghiệp"
  },
  {
    district: "Hà Đông",
    slug: "lam-bien-quang-cao-ha-dong",
    streets: "Quang Trung, Văn Quán, Mỗ Lao, Nguyễn Trãi, Kiến Hưng, La Khê, Dương Nội và các khu đô thị mới",
    businessTypes: "cửa hàng bán lẻ, phòng khám, nhà thuốc, quán ăn, trung tâm giáo dục, showroom và văn phòng",
    image: "du-an-oppo-samsung.jpg",
    priority: "cân bằng giữa chi phí, độ nổi bật mặt tiền và khả năng bảo trì sau lắp đặt"
  },
  {
    district: "Gia Lâm",
    slug: "lam-bien-quang-cao-gia-lam",
    streets: "Trâu Quỳ, Đặng Xá, Yên Viên, Kiêu Kỵ, Cổ Bi, Phú Thị và các khu đô thị phía Đông Hà Nội",
    businessTypes: "xưởng, đại lý, cửa hàng vật liệu, quán ăn, cafe, showroom, điểm bán và văn phòng mới mở",
    image: "du-an-wonderfarm.jpg",
    priority: "tư vấn kết cấu chắc, thi công gọn và vật liệu phù hợp mặt bằng rộng hoặc mặt phố mới"
  }
];

for (const area of expandedAreaPages) {
  relatedDefault.push([`Làm biển quảng cáo ${area.district}`, `../${area.slug}/`]);

  pages.push({
    slug: area.slug,
    title: `Làm biển quảng cáo ${area.district}, Hà Nội | Bông Sen Trắng`,
    description: `Nhận làm biển quảng cáo tại ${area.district}, Hà Nội: khảo sát, sản xuất, thi công biển alu chữ nổi, hộp đèn LED, bảng hiệu cửa hàng. Gọi/Zalo 0989 521 881.`,
    kicker: `Khu vực ${area.district}`,
    h1: `Làm biển quảng cáo tại ${area.district}`,
    lead: `Bông Sen Trắng nhận tư vấn, sản xuất và thi công biển quảng cáo cho ${area.businessTypes} tại ${area.district}, Hà Nội.`,
    image: area.image,
    imageAlt: `Làm biển quảng cáo khu vực ${area.district} Hà Nội`,
    serviceName: `Làm biển quảng cáo ${area.district}`,
    sections: [
      [`Phục vụ khu vực ${area.district}`, [
        `Nhận khảo sát và thi công biển quảng cáo quanh ${area.streets}.`,
        `Các hạng mục thường gặp gồm biển alu chữ nổi, hộp đèn LED, bảng hiệu cửa hàng, biển vẫy, chữ nổi mica inox, biển bạt Hiflex và thay mới biển cũ.`
      ]],
      ["Tư vấn theo mặt tiền thực tế", [
        `Mỗi mặt bằng có độ cao, hướng nhìn, khoảng cách quan sát và ngân sách khác nhau, vì vậy Bông Sen Trắng ${area.priority}.`,
        "Khách hàng có thể gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt và mẫu thiết kế nếu có để được tư vấn vật liệu phù hợp."
      ]],
      ["Báo giá nhanh qua Zalo", [
        "Để báo giá sát hơn, hãy gửi ảnh chụp thẳng mặt tiền, chiều ngang/chiều cao dự kiến, yêu cầu có đèn hay không và thời gian cần hoàn thiện.",
        "Nếu công trình cần đo đạc hoặc kiểm tra khung cũ, đội thi công sẽ trao đổi lịch khảo sát phù hợp trong khu vực Hà Nội."
      ]]
    ],
    faq: [
      [`Có nhận khảo sát tại ${area.district} không?`, `Có. Bông Sen Trắng nhận khảo sát và thi công tại ${area.district} cùng các khu vực lân cận khi khách hàng cần đo thực tế trước khi sản xuất.`],
      ["Tôi chưa có thiết kế biển thì có làm được không?", "Có. Bạn có thể gửi logo, tên cửa hàng, ngành nghề, màu thương hiệu và ảnh mặt tiền để được tư vấn bố cục biển dễ đọc, phù hợp ngân sách."],
      ["Có sửa hoặc thay mới biển cũ không?", "Có. Có thể kiểm tra khung cũ, thay mặt biển, thay LED, gia cố lại khung hoặc làm mới toàn bộ tùy tình trạng thực tế."]
    ]
  });
}

const guidePages = [
  {
    slug: "can-chuan-bi-gi-de-bao-gia-bien-quang-cao",
    title: "Cần chuẩn bị gì để báo giá biển quảng cáo nhanh? | Bông Sen Trắng",
    description: "Hướng dẫn chuẩn bị ảnh mặt tiền, kích thước, địa chỉ lắp đặt và yêu cầu vật liệu để nhận báo giá biển quảng cáo tại Hà Nội nhanh và sát hơn.",
    kicker: "Tư vấn báo giá",
    h1: "Cần chuẩn bị gì để báo giá biển quảng cáo nhanh?",
    lead: "Báo giá biển quảng cáo sẽ sát hơn khi có đủ thông tin về mặt tiền, kích thước, vật liệu mong muốn và điều kiện thi công thực tế.",
    image: "bien-pano-ha-noi.jpg",
    imageAlt: "Tư vấn báo giá biển quảng cáo theo ảnh mặt tiền và kích thước",
    type: "guide",
    articleSection: "Tư vấn báo giá biển quảng cáo",
    sections: [
      ["1. Ảnh mặt tiền chụp rõ vị trí lắp đặt", [
        "Nên chụp thẳng mặt tiền từ phía đối diện, đủ cả phần tường, khung cũ, cửa ra vào và khoảng không gian xung quanh.",
        "Nếu có biển cũ cần tháo hoặc tận dụng khung, hãy chụp thêm ảnh cận cảnh khung, mặt biển, vị trí điện và các điểm hỏng."
      ]],
      ["2. Kích thước dự kiến và loại biển mong muốn", [
        "Thông tin chiều ngang, chiều cao dự kiến giúp ước lượng vật liệu, kết cấu khung, số lượng chữ nổi hoặc diện tích mặt bạt.",
        "Nếu chưa biết nên dùng loại biển nào, chỉ cần nói rõ mong muốn: tiết kiệm, đẹp bền, sáng buổi tối, làm nhanh để khai trương hoặc cần thay mới biển cũ."
      ]],
      ["3. Địa chỉ và thời gian cần hoàn thiện", [
        "Địa chỉ lắp đặt giúp đánh giá khoảng cách khảo sát, điều kiện thi công, độ cao và khả năng vận chuyển vật tư.",
        "Nếu cần làm gấp, hãy báo trước thời gian mong muốn để đội sản xuất tư vấn phương án vật liệu phù hợp tiến độ."
      ]],
      ["4. Logo, hướng nhìn và điều kiện tiếp cận", [
        "Ngoài ảnh chính diện, chụp từ hai hướng khách đi tới để trao đổi cỡ chữ, vị trí biển chính và khả năng đặt biển vẫy. Gửi tên thương hiệu có dấu, logo, màu chủ đạo và mẫu biển yêu thích nếu đã có.",
        "Với tòa nhà hoặc mặt tiền dùng chung, cho biết tầng lắp đặt và thời gian có thể tiếp cận. Nếu cần tháo biển cũ, chụp điểm hỏng, khung và nguồn điện từ vị trí an toàn; không tự trèo lên kiểm tra."
      ]],
      ["5. Đơn hàng cho nhiều cửa hàng", [
        "Gửi danh sách địa điểm, ảnh từng mặt tiền, kích thước ước lượng, số lượng biển và thời gian mong muốn. Nếu có bộ nhận diện, gửi file để trao đổi cách thống nhất màu, chữ và ánh sáng giữa các điểm bán.",
        "Kích thước, kết cấu và điều kiện tiếp cận mỗi nơi có thể khác nhau. Với biển lớn, treo cao hoặc khung cũ, cần xác nhận hiện trạng trước khi chốt phạm vi và giá."
      ]],
      ["Mẫu nội dung gửi qua Zalo", [
        "Tôi cần làm biển cho [loại cửa hàng] tại [địa chỉ]. Mặt tiền dự kiến ngang [ ] m, cao [ ] m. Tôi muốn [loại biển hoặc mục tiêu], cần hoàn thiện trước [ngày]. Tôi gửi kèm ảnh và logo; nhờ tư vấn các phương án và phần việc đã hoặc chưa gồm trong báo giá.",
        "Khi so phương án, hỏi rõ nền, chữ, LED và nguồn, khung, vận chuyển, tháo lắp biển cũ, thuế và phạm vi bảo hành. Nội dung tin nhắn là mẫu tham khảo, không phải báo giá."
      ]]
    ],
    faq: [
      ["Có cần file thiết kế mới báo giá được không?", "Không bắt buộc. Nếu chưa có file thiết kế, bạn có thể gửi logo, tên cửa hàng, ngành nghề và ảnh mặt tiền để được tư vấn bố cục cơ bản."],
      ["Gửi ảnh qua Zalo có báo giá được không?", "Có. Với hạng mục đơn giản, ảnh mặt tiền và kích thước dự kiến thường đủ để tư vấn khoảng chi phí ban đầu."],
      ["Khi nào cần khảo sát trực tiếp?", "Khi biển lớn, vị trí cao, cần kiểm tra khung cũ, nguồn điện LED hoặc mặt bằng thi công phức tạp."]
    ]
  },
  {
    slug: "nen-chon-bien-alu-chu-noi-hay-bien-bat-hiflex",
    title: "Nên chọn biển alu chữ nổi hay biển bạt Hiflex? | Bông Sen Trắng",
    description: "So sánh biển alu chữ nổi và biển bạt Hiflex cho cửa hàng tại Hà Nội: chi phí, độ bền, thẩm mỹ, thời gian thi công và trường hợp nên chọn.",
    kicker: "Tư vấn vật liệu",
    h1: "Nên chọn biển alu chữ nổi hay biển bạt Hiflex?",
    lead: "Alu chữ nổi và bạt Hiflex đều phổ biến, nhưng phù hợp với nhu cầu khác nhau về ngân sách, độ bền, thẩm mỹ và thời gian sử dụng.",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Mặt tiền cửa hàng điện thoại với biển nhận diện OPPO và Samsung, ảnh tham khảo",
    type: "guide",
    articleSection: "Tư vấn vật liệu biển quảng cáo",
    sections: [
      ["Biển alu chữ nổi phù hợp khi cần mặt tiền bền đẹp", [
        "Biển alu chữ nổi thường phù hợp với cửa hàng, showroom, văn phòng hoặc thương hiệu cần mặt tiền chuyên nghiệp và dùng lâu dài.",
        "Có thể kết hợp chữ mica, inox, đồng, LED hắt chân hoặc LED âm chữ để tăng độ nổi bật buổi tối."
      ]],
      ["Biển bạt Hiflex phù hợp khi cần tiết kiệm hoặc làm nhanh", [
        "Biển bạt Hiflex có ưu điểm chi phí mềm, thay nội dung nhanh, phù hợp biển khai trương, biển tạm, bảng thông tin hoặc mặt tiền cần tối ưu ngân sách.",
        "Nếu dùng lâu ngoài trời, cần chú ý khung, độ căng bạt, hướng nắng mưa và chất lượng in."
      ]],
      ["Cách chọn nhanh", [
        "Nếu ưu tiên bền, sang, đúng nhận diện và dùng lâu: nên cân nhắc alu chữ nổi.",
        "Nếu ưu tiên chi phí thấp, cần làm nhanh hoặc thay nội dung thường xuyên: bạt Hiflex là lựa chọn thực tế hơn."
      ]],
      ["So báo giá theo cùng một cấu hình", [
        "Biển alu chữ nổi thường gồm khung, tấm nền và chữ hoặc logo riêng; nếu cần sáng có thêm LED và nguồn. Biển Hiflex có mặt bạt in căng trên khung, có thể kết hợp chiếu sáng hoặc vật liệu xuyên sáng theo cấu tạo.",
        "Để so đúng, gửi cùng kích thước, địa chỉ và yêu cầu lắp cho cả hai phương án. Đề nghị ghi rõ khung mới hay dùng lại, chữ, đèn, vận chuyển, tháo biển cũ và bảo hành; giá nền alu không mặc định là giá hoàn thiện cả biển."
      ]]
    ],
    choiceHeading: "Chọn theo nhu cầu của cửa hàng",
    choiceIntro: "Đây là các phương án để trao đổi, không phải bảng giá; cấu hình cuối cùng phụ thuộc mặt bằng và ngân sách.",
    choiceRows: [
      ["Cần nhận diện đồng bộ lâu dài", "Nền alu kết hợp chữ nổi", "Chọn vật liệu chữ, màu, hệ khung và phương án chiếu sáng theo thiết kế."],
      ["Cần thay nội dung in", "Mặt bạt Hiflex trên khung phù hợp", "Làm rõ in bạt riêng hay gồm khung, căng bạt và lắp đặt."],
      ["Hoạt động buổi tối", "Cân nhắc chữ LED, hộp đèn hoặc đèn rọi", "Thống nhất điểm cấp điện và cách bảo trì theo cấu tạo thực tế."]
    ],
    focusHeading: "Xem thêm theo hạng mục",
    focusLinks: [
      ["Biển alu chữ nổi", "../bien-alu-chu-noi-ha-noi/", "Xem cấu tạo nền, chữ và các lựa chọn ánh sáng."],
      ["Biển bạt Hiflex", "../bien-bat-hiflex-ha-noi/", "Tìm hiểu mặt bạt in, khung và điều kiện lắp đặt."],
      ["Gửi thông tin để báo giá", "../can-chuan-bi-gi-de-bao-gia-bien-quang-cao/", "Chuẩn bị cùng thông tin để so phương án."]
    ],
    faq: [
      ["Biển alu chữ nổi có đắt hơn bạt Hiflex không?", "Thường cao hơn vì có mặt dựng, chữ nổi, khung và công hoàn thiện nhiều hơn, nhưng đổi lại mặt tiền nhìn bền và chuyên nghiệp hơn."],
      ["Biển bạt Hiflex có dùng cho cửa hàng chính được không?", "Có, nhất là khi cần tối ưu chi phí. Tuy nhiên nếu muốn mặt tiền cao cấp hơn, có thể cân nhắc alu chữ nổi hoặc hộp đèn."],
      ["Có thể kết hợp alu và bạt không?", "Có thể, tùy thiết kế và ngân sách. Một số mặt tiền dùng alu cho phần chính và bạt/hộp đèn cho phần thông tin phụ."]
    ]
  },
  {
    slug: "bien-hop-den-led-co-phu-hop-cua-hang-khong",
    title: "Biển hộp đèn LED có phù hợp cửa hàng của bạn không? | Bông Sen Trắng",
    description: "Tư vấn khi nào nên làm biển hộp đèn LED cho cửa hàng tại Hà Nội, các loại hộp đèn phổ biến, lưu ý độ sáng, chống nước và bảo trì.",
    kicker: "Tư vấn biển phát sáng",
    h1: "Biển hộp đèn LED có phù hợp cửa hàng của bạn không?",
    lead: "Hộp đèn LED đáng cân nhắc khi cửa hàng cần nhận diện vào buổi tối hoặc muốn một mặt biển phát sáng. Nếu chỉ hoạt động ban ngày hoặc ưu tiên chữ nổi không đèn, cần so với các phương án khác theo mặt tiền thực tế.",
    image: "du-an-bien-the-fox-fitness.jpg",
    imageAlt: "Biển chữ và logo The Fox Fitness phát sáng trên mặt tiền, ảnh tham khảo",
    type: "guide",
    articleSection: "Tư vấn biển hộp đèn LED",
    sections: [
      ["Khi nào nên chọn hộp đèn LED?", [
        "Nếu cửa hàng mở buổi tối, nằm ở tuyến phố đông biển hiệu hoặc cần nhận diện rõ từ xa, hộp đèn LED là lựa chọn đáng cân nhắc.",
        "Hộp đèn cũng phù hợp với quán ăn, cafe, spa, nhà thuốc, cửa hàng tiện ích và các điểm bán cần sáng đều."
      ]],
      ["Các loại hộp đèn thường gặp", [
        "Có thể làm hộp đèn mica, bạt xuyên sáng, hộp đèn alu, hộp đèn vẫy hai mặt hoặc chữ nổi phát sáng tùy mặt tiền.",
        "Màu ánh sáng nên bám theo nhận diện thương hiệu nhưng vẫn đảm bảo đọc rõ chữ và không gây chói."
      ]],
      ["Lưu ý để biển bền hơn", [
        "Cần chú ý nguồn LED, cách đi dây, chống nước, thoát nhiệt và vị trí bảo trì sau lắp đặt.",
        "Biển sáng đều, ít hỏng vặt phụ thuộc nhiều vào chất lượng LED và cách thi công, không chỉ riêng phần mặt biển."
      ]],
      ["Ước tính điện năng sử dụng", [
        "Điện năng ước tính mỗi tháng bằng công suất thực tế (W) nhân số giờ bật mỗi ngày và số ngày, sau đó chia 1.000 để ra kWh. Chi phí còn phụ thuộc đơn giá điện áp dụng và mức tiêu thụ thực tế.",
        "Ví dụ giả định: một hệ đèn dùng 100 W, bật 8 giờ mỗi ngày trong 30 ngày tiêu thụ khoảng 24 kWh. Đây là phép tính minh họa, không phải công suất hay chi phí của một mẫu biển cụ thể."
      ]]
    ],
    choiceHeading: "So sánh các phương án có đèn",
    choiceIntro: "Hộp đèn và chữ nổi LED là các cấu tạo khác nhau. Cần đối chiếu thiết kế, vị trí lắp và khả năng bảo trì trước khi chọn.",
    choiceRows: [
      ["Mặt biển phẳng, thể hiện logo và nội dung", "Hộp đèn mặt mica", "Kiểm tra cách ghép mặt, độ sâu hộp và điểm mở để bảo trì."],
      ["Mặt biển rộng, cần thay nội dung in", "Hộp đèn bạt xuyên sáng", "Trao đổi độ căng bạt, khung và cách bố trí ánh sáng."],
      ["Nhìn từ hướng đi dọc phố", "Biển vẫy có đèn", "Xác định vị trí được lắp, điểm treo và tải trọng."],
      ["Muốn làm nổi từng chữ hoặc logo", "Chữ nổi LED trên nền biển", "Chọn kiểu sáng mặt hoặc hắt chân và vị trí nguồn điện."]
    ],
    focusHeading: "Tư vấn làm mới hoặc sửa biển có đèn",
    focusLinks: [
      ["Làm biển hộp đèn LED", "../bien-hop-den-led-ha-noi/", "Xem phương án cho mặt tiền và nhiều điểm bán."],
      ["Làm biển chữ LED", "../lam-bien-quang-cao-co-den-led-ha-noi/", "So sánh chữ nổi sáng mặt, hắt chân và hộp đèn."],
      ["Sửa biển hộp đèn LED", "../sua-bien-hop-den-led-ha-noi/", "Gửi ảnh hiện trạng để trao đổi khi biển không sáng hoặc sáng không đều."]
    ],
    faq: [
      ["Biển hộp đèn LED có tốn điện không?", "Mức điện phụ thuộc kích thước biển, số lượng LED và thời gian bật. Có thể tư vấn phương án tiết kiệm khi biết kích thước cụ thể."],
      ["Hộp đèn có dùng ngoài trời được không?", "Có, nhưng cần xử lý khung, mặt biển, dây điện, chống nước và thoát nhiệt đúng cách."],
      ["Cửa hàng nhỏ có nên dùng biển vẫy hộp đèn không?", "Có thể. Biển vẫy hai mặt giúp khách nhìn thấy từ hai chiều đường, rất hữu ích với mặt tiền nhỏ."]
    ]
  },
  {
    slug: "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao",
    title: "Dấu hiệu cần sửa chữa hoặc thay mới biển quảng cáo | Bông Sen Trắng",
    description: "Những dấu hiệu cho thấy biển quảng cáo cần sửa chữa hoặc thay mới: xuống màu, hỏng LED, bong mặt biển, khung yếu, sai nhận diện thương hiệu.",
    kicker: "Tư vấn sửa biển cũ",
    h1: "Dấu hiệu cần sửa chữa hoặc thay mới biển quảng cáo",
    lead: "Biển quảng cáo xuống cấp làm mặt tiền kém chuyên nghiệp và có thể gây rủi ro an toàn nếu khung, điện hoặc mặt biển đã yếu.",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    imageAlt: "Sửa chữa và thay mới biển quảng cáo cũ tại Hà Nội",
    type: "guide",
    articleSection: "Tư vấn sửa chữa biển quảng cáo",
    sections: [
      ["Biển xuống màu, chữ khó đọc", [
        "Khi mặt biển bạc màu, chữ mờ hoặc bố cục cũ không còn phù hợp nhận diện mới, nên cân nhắc thay mặt biển hoặc làm mới toàn bộ.",
        "Với cửa hàng mặt phố, biển khó đọc sẽ làm giảm khả năng khách nhận ra thương hiệu từ xa."
      ]],
      ["LED chập chờn hoặc không sáng đều", [
        "LED hỏng từng cụm, sáng yếu hoặc chập chờn có thể do nguồn, dây điện, module LED hoặc nước vào trong hộp đèn.",
        "Nên kiểm tra sớm để tránh hỏng lan rộng và đảm bảo an toàn điện."
      ]],
      ["Khung yếu, mặt biển bong hoặc rung lắc", [
        "Nếu khung sắt rỉ, biển rung khi gió mạnh hoặc mặt biển bong khỏi khung, cần kiểm tra kết cấu trước khi chỉ thay phần trang trí.",
        "Trong một số trường hợp, tận dụng khung cũ vẫn được; nhưng cần đánh giá thực tế để không tiết kiệm sai chỗ."
      ]]
    ],
    faq: [
      ["Có sửa biển cũ mà không làm mới toàn bộ không?", "Có. Nếu khung còn chắc, có thể thay mặt biển, thay LED, sơn sửa hoặc gia cố lại tùy tình trạng."],
      ["Khi nào nên thay mới hoàn toàn?", "Khi khung yếu, nhận diện thay đổi nhiều, mặt biển hỏng nặng hoặc chi phí sửa gần bằng làm mới."],
      ["Cần gửi gì để kiểm tra biển cũ?", "Hãy gửi ảnh tổng thể mặt tiền, ảnh cận khung/mặt biển/LED hỏng và địa chỉ lắp đặt qua Zalo để được tư vấn."]
    ]
  }
];

for (const guide of guidePages) {
  relatedDefault.push([guide.h1, `../${guide.slug}/`]);
  pages.push(guide);
}

const realProjectsPage = {
  slug: "hinh-anh-bien-quang-cao-thuc-te-ha-noi",
  title: "Hình ảnh biển quảng cáo thực tế | Làm biển quảng cáo Hà Nội",
  description: "Tổng hợp ảnh biển quảng cáo thực tế trong hồ sơ thi công: biển chữ nổi, hộp đèn LED, bảng hiệu cửa hàng, mặt dựng và backdrop lễ tân.",
  kicker: "Hồ sơ ảnh thi công",
  h1: "Hình ảnh biển quảng cáo thực tế",
  lead: "Khách hàng có thể xem các mẫu biển trong hồ sơ thi công để tham khảo vật liệu, ánh sáng, tỉ lệ chữ và cách hoàn thiện trước khi đặt làm biển quảng cáo tại Hà Nội.",
  image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
  imageAlt: "Hình ảnh biển quảng cáo thực tế với mặt dựng và đèn LED",
  type: "case",
  articleSection: "Hình ảnh biển quảng cáo thực tế",
  sections: [
    ["Ảnh thật giúp chọn biển sát nhu cầu hơn", [
      "Khi nhìn ảnh mặt tiền thực tế, chủ cửa hàng dễ hình dung biển của mình nên dùng chữ nổi, hộp đèn, bạt, alu hay phối nhiều hạng mục.",
      "Ảnh cũng giúp đánh giá độ sáng buổi tối, độ rõ của chữ từ xa, cách xử lý mặt dựng và mức độ nổi bật so với các biển xung quanh."
    ]],
    ["Các kiểu biển có trong bộ ảnh", [
      "Bộ ảnh gồm biển chữ nổi phát sáng, mặt dựng LED, biển hộp đèn, biển đứng, biển vẫy, logo gắn tường và backdrop lễ tân.",
      "Các mẫu phù hợp để tham khảo cho spa, clinic, showroom, cửa hàng bán lẻ, quán cafe, nhà hàng, văn phòng và điểm kinh doanh mặt phố."
    ]],
    ["Cách dùng ảnh tham khảo để nhận báo giá", [
      "Có thể chụp màn hình mẫu biển gần với nhu cầu của mình rồi gửi kèm ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo 0989 521 881.",
      "Bông Sen Trắng sẽ tư vấn lại vật liệu, phương án ánh sáng và cách thi công phù hợp với mặt bằng thực tế, không bê nguyên mẫu nếu mặt tiền khác nhau."
    ]]
  ],
  faq: [
    ["Có thể đặt làm biển giống một mẫu trong ảnh không?", "Có thể lấy mẫu trong ảnh làm hướng tham khảo, sau đó cần điều chỉnh kích thước, màu sắc, vật liệu và bố cục theo mặt tiền thực tế."],
    ["Chỉ có ảnh mặt tiền thì có báo giá được không?", "Có thể tư vấn sơ bộ nếu ảnh rõ vị trí lắp đặt. Để báo giá sát hơn nên gửi thêm kích thước dự kiến, địa chỉ lắp đặt và yêu cầu có đèn hay không."],
    ["Nên chọn biển có đèn hay không đèn?", "Nếu cửa hàng hoạt động buổi tối hoặc nằm ở tuyến phố nhiều biển, nên ưu tiên chữ nổi/hộp đèn/LED để tăng khả năng nhận diện."]
  ],
  galleryHeading: "Bộ ảnh biển quảng cáo thực tế",
  gallery: realProjectGallery
};

relatedDefault.push([realProjectsPage.h1, `../${realProjectsPage.slug}/`]);
pages.push(realProjectsPage);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(page) {
  const businessSchema = {
    "@type": "LocalBusiness",
    "name": business.name,
    "image": `${baseUrl}/assets/images/logo-whitelotus.png`,
    "url": `${baseUrl}/`,
    "telephone": "+84989521881",
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.0203158,
      "longitude": 105.8272295
    },
    "hasMap": mapUrl,
    "sameAs": [business.facebookUrl],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.streetAddress,
      "addressLocality": business.addressLocality,
      "addressRegion": business.addressRegion,
      "addressCountry": business.addressCountry
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Hà Nội"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84989521881",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": ["vi"]
    }
  };

  const organizationSchema = {
    "@type": "Organization",
    "name": business.name,
    "url": `${baseUrl}/`,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/images/logo-whitelotus.png`
    },
    "sameAs": [business.facebookUrl]
  };

  const graph = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": `${baseUrl}/` },
        { "@type": "ListItem", "position": 2, "name": page.h1, "item": `${baseUrl}/${page.slug}/` }
      ]
    }
  ];

  if (page.type === "case" || page.type === "guide") {
    graph.push({
      "@type": "Article",
      "headline": page.h1,
      "description": page.description,
      "image": `${baseUrl}/assets/images/${page.image}`,
      "author": organizationSchema,
      "publisher": organizationSchema,
      "mainEntityOfPage": `${baseUrl}/${page.slug}/`,
      "articleSection": page.articleSection || "Dự án biển quảng cáo"
    });
  } else {
    graph.push({
      "@type": "Service",
      "name": page.serviceName,
      ...(page.serviceDescription ? { "description": page.serviceDescription } : {}),
      "areaServed": businessSchema.areaServed,
      "provider": businessSchema
    });
  }

  if (Array.isArray(page.faq) && page.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": page.faq.map(([question, answer]) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const imageUrl = `${baseUrl}/assets/images/${page.image}`;
  const sectionHtml = page.sections
    .map(([heading, paragraphs], index) => `
            <section class="content-block">
              <h2>${escapeHtml(heading)}</h2>
              ${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("\n              ")}
            </section>${index === 0 && !page.gallery ? renderReferenceGallery(page.image) : ""}`)
    .join("\n");

  const choiceHtml = Array.isArray(page.choiceRows) ? `
            <section class="content-block">
              <h2>${escapeHtml(page.choiceHeading)}</h2>
              ${page.choiceIntro ? `<p>${escapeHtml(page.choiceIntro)}</p>` : ""}
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Nhu cầu thực tế</th>
                      <th>Phương án nên cân nhắc</th>
                      <th>Lý do</th>
                    </tr>
                  </thead>
                  <tbody>
${page.choiceRows.map(([need, option, reason]) => `
                    <tr>
                      <td><strong>${escapeHtml(need)}</strong></td>
                      <td>${escapeHtml(option)}</td>
                      <td>${escapeHtml(reason)}</td>
                    </tr>`).join("\n")}
                  </tbody>
                </table>
              </div>
            </section>` : "";

  const stepsHtml = Array.isArray(page.steps) ? `
            <section class="content-block">
              <h2>${escapeHtml(page.stepsHeading)}</h2>
              <ol class="step-list">
                ${page.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("\n                ")}
              </ol>
            </section>` : "";

  const focusLinksHtml = Array.isArray(page.focusLinks) ? `
            <section class="content-block">
              <h2>${escapeHtml(page.focusHeading)}</h2>
              <div class="price-link-grid compact">
${page.focusLinks.map(([label, href, text]) => `
                <a href="${href}">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`).join("\n")}
              </div>
            </section>` : "";

  const galleryHtml = !page.gallery ? "" : page.slug === "thi-cong-bien-quang-cao-ha-noi" || page.slug === "lam-bang-hieu-cua-hang-ha-noi" ? `
            <section class="content-block">
              <h2>${escapeHtml(page.galleryHeading || "Thêm hình ảnh công trình")}</h2>
              <div class="case-gallery">
${page.gallery.map((item) => `                <figure>
                  <img src="../assets/images/${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>`).join("\n")}
              </div>
            </section>` : `
            <section class="content-block">
              <h2>${escapeHtml(page.galleryHeading || "Thêm hình ảnh công trình")}</h2>
              <div class="case-gallery">
                ${page.gallery.map((item) => `
                <figure>
                  <img src="../assets/images/${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>`).join("\n                ")}
              </div>
            </section>`;

  const faqHtml = page.faq
    .map(([question, answer]) => `
              <details>
                <summary>${escapeHtml(question)}</summary>
                <p>${escapeHtml(answer)}</p>
              </details>`)
    .join("\n");

  const relatedHtml = (page.related || relatedDefault)
    .filter(([, href]) => href.replace(/^\.\.\//, "").replace(/\/$/, "") !== page.slug)
    .map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`)
    .join("\n              ");

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
    <meta property="og:site_name" content="Bong Sen Trang">
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
${jsonLd(page)}
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
          <a class="nav-call" href="tel:0989521881">Gọi ${business.phone}</a>
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
              <span>${escapeHtml(page.h1)}</span>
            </nav>
            <p class="section-kicker">${escapeHtml(page.kicker)}</p>
            <h1>${escapeHtml(page.h1)}</h1>
            <p>${escapeHtml(page.lead)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(page.imageAlt)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
${sectionHtml}
${choiceHtml}${stepsHtml}${focusLinksHtml}${galleryHtml}
            <section class="content-block">
              <h2>Câu hỏi thường gặp</h2>
              <div class="faq-list compact">
${faqHtml}
              </div>
            </section>
          </article>

          <aside class="content-sidebar" aria-label="Thông tin liên hệ">
            <div class="sidebar-card">
              <h2>Nhận báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền, kích thước dự kiến và địa chỉ lắp đặt qua Zalo để được tư vấn phương án phù hợp.</p>
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              ${relatedHtml}
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
            <a href="${business.facebookUrl}" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a>
            <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực thi công</a>
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
}

function writeFileIfChanged(filePath, content) {
  const current = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;
  if (current !== content) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, "utf8");
  }
}

for (const page of pages) {
  writeFileIfChanged(path.join(process.cwd(), page.slug, "index.html"), renderPage(page));
}

const sitemapUrls = [
  { loc: `${baseUrl}/` },
  ...pages.map((page) => ({ loc: `${baseUrl}/${page.slug}/` }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map((url) => `  <url>
    <loc>${url.loc}</loc>
  </url>`)
  .join("\n")}
</urlset>
`;

writeFileIfChanged(path.join(process.cwd(), "sitemap.xml"), sitemap);
writeFileIfChanged(path.join(process.cwd(), "sitemap-google.xml"), sitemap);

const sitemapText = `${sitemapUrls.map((url) => url.loc).join("\n")}\n`;
writeFileIfChanged(path.join(process.cwd(), "sitemap.txt"), sitemapText);

console.log(`Generated ${pages.length} SEO pages and sitemaps`);
