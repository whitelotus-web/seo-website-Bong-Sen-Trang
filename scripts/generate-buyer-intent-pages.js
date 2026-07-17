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
    slug: "xuong-lam-bien-quang-cao-ha-noi",
    title: "Xưởng làm biển quảng cáo Hà Nội",
    kicker: "Sản xuất và thi công biển quảng cáo",
    image: "san-xuat-khung-bien-vay-led-ha-noi.jpg",
    intro: "Cần làm biển quảng cáo mới, thay biển cũ hoặc hoàn thiện biển cho cửa hàng sắp khai trương, Bông Sen Trắng nhận tư vấn phương án theo mặt tiền thực tế tại Hà Nội.",
    items: ["Tư vấn vật liệu theo ngân sách", "Sản xuất biển alu, hộp đèn, Hiflex, chữ nổi", "Thi công lắp đặt và kiểm tra ánh sáng", "Hỗ trợ sửa chữa, thay LED, thay mặt biển sau thi công"],
    related: [["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"], ["Năng lực thi công", "nang-luc-thi-cong-bien-quang-cao-ha-noi"], ["Hình ảnh mẫu biển", "hinh-anh-bien-quang-cao-thuc-te-ha-noi"]]
  },
  {
    slug: "don-vi-lam-bien-quang-cao-uy-tin-ha-noi",
    title: "Đơn vị làm biển quảng cáo uy tín Hà Nội",
    kicker: "Tư vấn rõ phương án trước khi làm",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    intro: "Một đơn vị làm biển tốt cần tư vấn đúng vật liệu, dự toán chi phí rõ và thi công theo điều kiện mặt bằng thực tế, không chỉ báo giá theo mét vuông.",
    items: ["Khảo sát khi mặt bằng phức tạp", "Chốt kích thước và vật liệu trước khi sản xuất", "Ưu tiên chữ rõ, ánh sáng đều, bố cục dễ đọc", "Có phương án sửa hoặc nâng cấp nếu biển cũ còn tận dụng được"],
    related: [["Quy trình thi công", "thi-cong-bien-quang-cao-ha-noi"], ["Báo giá 2026", "bao-gia-bien-quang-cao-ha-noi"], ["Sửa biển cũ", "sua-chua-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "thi-cong-bang-hieu-quang-cao-tron-goi-ha-noi",
    title: "Thi công bảng hiệu quảng cáo trọn gói Hà Nội",
    kicker: "Từ tư vấn đến lắp đặt hoàn thiện",
    image: "du-an-bien-gia-long.jpg",
    intro: "Dịch vụ trọn gói phù hợp khách muốn có một đầu mối xử lý từ tư vấn, vật liệu, sản xuất đến lắp đặt biển tại Hà Nội.",
    items: ["Nhận thông tin mặt tiền và mục tiêu sử dụng", "Tư vấn kiểu biển phù hợp: alu, hộp đèn, chữ nổi, bạt Hiflex", "Sản xuất theo kích thước chốt", "Lắp đặt, kiểm tra hoàn thiện và bàn giao"],
    related: [["Làm bảng hiệu cửa hàng", "lam-bang-hieu-cua-hang-ha-noi"], ["Thi công biển quảng cáo", "thi-cong-bien-quang-cao-ha-noi"], ["Biển alu chữ nổi", "bien-alu-chu-noi-ha-noi"]]
  },
  {
    slug: "lam-bang-hieu-quang-cao-ha-noi",
    title: "Làm bảng hiệu quảng cáo Hà Nội",
    kicker: "Bảng hiệu cửa hàng, công ty, showroom",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    intro: "Bảng hiệu cần nhìn rõ tên, ngành hàng và điểm nhận diện chính. Với mặt tiền nhỏ, bố cục gọn và ánh sáng đúng quan trọng hơn việc nhồi nhiều thông tin.",
    items: ["Bảng hiệu shop, cafe, quán ăn, spa", "Bảng hiệu công ty, văn phòng, showroom", "Bảng hiệu alu chữ nổi, hộp đèn, bạt Hiflex", "Tư vấn sửa bảng hiệu cũ nếu còn tận dụng được"],
    related: [["Biển shop quần áo", "bien-shop-quan-ao-ha-noi"], ["Biển cafe", "bien-quan-cafe-ha-noi"], ["Biển văn phòng", "bien-van-phong-cong-ty-ha-noi"]]
  },
  {
    slug: "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi",
    title: "Làm biển quảng cáo cho cửa hàng mới mở Hà Nội",
    kicker: "Kịp khai trương, dễ nhận diện",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Cửa hàng mới mở cần biển rõ ngành hàng, dễ tìm địa chỉ và đủ nổi bật trong tuần khai trương. Nên chốt phương án sớm để tránh làm gấp sát ngày.",
    items: ["Tư vấn biển chính mặt tiền", "Biển vẫy hoặc hộp đèn phụ", "Menu/bảng phụ nếu là quán ăn, đồ uống", "Ưu tiên phương án thi công nhanh khi cần khai trương"],
    related: [["Làm biển nhanh", "lam-bien-quang-cao-nhanh-ha-noi"], ["Biển khai trương", "bien-khai-truong-ha-noi"], ["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "sua-bien-hop-den-led-ha-noi",
    title: "Sửa biển hộp đèn LED Hà Nội",
    kicker: "Thay LED, nguồn, mặt hộp đèn",
    image: "du-an-dr-kinaki-hop-den-vay.jpg",
    intro: "Biển hộp đèn bị tối, chập chờn, cháy nguồn hoặc bạc mặt bạt sẽ làm cửa hàng khó nhìn vào buổi tối. Có thể sửa từng phần nếu khung còn tốt.",
    items: ["Kiểm tra LED, nguồn và dây điện", "Thay mặt bạt/mica khi đã bạc màu", "Gia cố khung nếu bị cong, rỉ", "Tư vấn khi nào nên sửa và khi nào nên làm mới"],
    related: [["Sửa chữa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Biển hộp đèn LED", "bien-hop-den-led-ha-noi"], ["Dấu hiệu cần thay biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"]]
  },
  {
    slug: "thay-mat-bat-bien-quang-cao-ha-noi",
    title: "Thay mặt bạt biển quảng cáo Hà Nội",
    kicker: "Làm mới mặt biển tiết kiệm chi phí",
    image: "bien-tam-lon-ha-noi.jpg",
    intro: "Nếu khung biển còn chắc, thay mặt bạt mới có thể giúp biển sáng và rõ hơn với chi phí thấp hơn làm lại toàn bộ.",
    items: ["Thay bạt Hiflex cho biển cũ", "Căng lại mặt biển bị nhăn, rách, bạc màu", "Kiểm tra khung và ánh sáng bên trong", "Thi công nhanh cho cửa hàng đang hoạt động"],
    related: [["Biển bạt Hiflex", "bien-bat-hiflex-ha-noi"], ["Sửa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Báo giá biển bạt", "bao-gia-bien-bat-hiflex-ha-noi"]]
  },
  {
    slug: "lap-den-led-bien-quang-cao-ha-noi",
    title: "Lắp đèn LED biển quảng cáo Hà Nội",
    kicker: "Tăng độ sáng cho biển buổi tối",
    image: "du-an-bien-the-fox-fitness.jpg",
    intro: "Biển đẹp nhưng thiếu sáng sẽ khó phát huy tác dụng vào buổi tối. Có thể bổ sung LED hắt sáng, LED âm, LED trong hộp đèn hoặc thay hệ đèn cũ.",
    items: ["Tư vấn kiểu sáng phù hợp mặt biển", "Thay nguồn, thay LED cũ bị cháy", "Lắp LED cho chữ nổi hoặc hộp đèn", "Kiểm tra an toàn điện trước khi bàn giao"],
    related: [["Biển hộp đèn LED", "bien-hop-den-led-ha-noi"], ["Chữ nổi mica inox", "chu-noi-mica-inox-ha-noi"], ["Sửa biển hộp đèn", "sua-bien-hop-den-led-ha-noi"]]
  },
  {
    slug: "bao-tri-bien-quang-cao-ha-noi",
    title: "Bảo trì biển quảng cáo Hà Nội",
    kicker: "Giữ biển sáng, chắc và sạch",
    image: "du-an-hisuhi-wet-brush-mat-dung-led.jpg",
    intro: "Biển ngoài trời sau thời gian sử dụng có thể bạc màu, yếu đèn, lỏng khung hoặc bám bẩn. Bảo trì định kỳ giúp giảm rủi ro hỏng nặng.",
    items: ["Kiểm tra khung, mặt biển và điểm treo", "Vệ sinh mặt biển, kiểm tra chữ nổi", "Thay LED/nguồn khi ánh sáng yếu", "Tư vấn nâng cấp nếu biển cũ không còn hiệu quả"],
    related: [["Sửa chữa biển quảng cáo", "sua-chua-bien-quang-cao-ha-noi"], ["Thay mặt bạt", "thay-mat-bat-bien-quang-cao-ha-noi"], ["Dấu hiệu cần sửa biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"]]
  },
  {
    slug: "tu-van-thiet-ke-bien-quang-cao-ha-noi",
    title: "Tư vấn thiết kế biển quảng cáo Hà Nội",
    kicker: "Chọn bố cục dễ đọc trước khi sản xuất",
    image: "du-an-sqt-clinic-backdrop-le-tan.jpg",
    intro: "Biển quảng cáo hiệu quả cần rõ tên, ngành hàng, màu nhận diện và ánh sáng. Bố cục càng gọn, khách càng dễ nhớ khi đi ngang.",
    items: ["Tư vấn bố cục chữ và logo", "Chọn màu, vật liệu, kiểu sáng", "Ước lượng kích thước theo mặt tiền", "Gợi ý phương án tiết kiệm chi phí"],
    related: [["Cần chuẩn bị gì để báo giá", "can-chuan-bi-gi-de-bao-gia-bien-quang-cao"], ["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"], ["Mẫu biển thực tế", "hinh-anh-bien-quang-cao-thuc-te-ha-noi"]]
  },
  {
    slug: "bien-hieu-cua-hang-ha-noi",
    title: "Biển hiệu cửa hàng Hà Nội",
    kicker: "Biển mặt tiền cho shop, quán và showroom",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    intro: "Cửa hàng cần một biển hiệu rõ tên, rõ ngành hàng và dễ nhận ra từ phía đường. Bông Sen Trắng nhận tư vấn, sản xuất và lắp đặt biển hiệu cửa hàng tại Hà Nội theo mặt tiền thực tế.",
    items: ["Biển hiệu alu chữ nổi cho cửa hàng", "Biển hộp đèn LED cho mặt tiền cần sáng buổi tối", "Biển bạt Hiflex khi cần tiết kiệm chi phí", "Biển vẫy phù hợp tuyến phố đông người qua lại"],
    related: [["Làm bảng hiệu cửa hàng", "lam-bang-hieu-cua-hang-ha-noi"], ["Báo giá biển quảng cáo", "bao-gia-bien-quang-cao-ha-noi"], ["Biển vẫy cửa hàng", "bien-vay-cua-hang-ha-noi"]]
  },
  {
    slug: "lam-bien-mat-tien-cua-hang-ha-noi",
    title: "Làm biển mặt tiền cửa hàng Hà Nội",
    kicker: "Tư vấn theo kích thước mặt tiền thực tế",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Biển mặt tiền quyết định khách có nhìn thấy cửa hàng hay không. Khi làm biển, cần chọn kích thước, chữ, màu, đèn và vật liệu theo đúng mặt bằng, không chỉ theo mẫu có sẵn.",
    items: ["Khảo sát mặt tiền hoặc tư vấn qua ảnh Zalo", "Chọn phương án alu chữ nổi, hộp đèn, bạt Hiflex hoặc chữ mica/inox", "Tính độ sáng cho cửa hàng mở buổi tối", "Thi công gọn, hạn chế ảnh hưởng kinh doanh"],
    related: [["Biển hiệu cửa hàng", "bien-hieu-cua-hang-ha-noi"], ["Làm biển nhanh", "lam-bien-quang-cao-nhanh-ha-noi"], ["Năng lực thi công", "nang-luc-thi-cong-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bao-gia-lam-bang-hieu-cua-hang-ha-noi",
    title: "Báo giá làm bảng hiệu cửa hàng Hà Nội",
    kicker: "Dự toán chi phí theo vật liệu và mặt bằng",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intro: "Giá làm bảng hiệu cửa hàng phụ thuộc vào kích thước, chất liệu, kiểu chữ, đèn LED, vị trí lắp đặt và việc có tận dụng được khung cũ hay không.",
    items: ["Gửi ảnh mặt tiền để ước lượng kích thước", "Chọn vật liệu theo ngân sách: Hiflex, alu, chữ nổi, hộp đèn", "Tách riêng chi phí sản xuất và lắp đặt khi cần", "Tư vấn phương án tiết kiệm nếu cửa hàng mới mở"],
    related: [["Báo giá biển quảng cáo 2026", "bao-gia-bien-quang-cao-ha-noi"], ["Làm bảng hiệu quảng cáo", "lam-bang-hieu-quang-cao-ha-noi"], ["Cần chuẩn bị gì để báo giá", "can-chuan-bi-gi-de-bao-gia-bien-quang-cao"]]
  },
  {
    slug: "lam-bien-quang-cao-co-den-led-ha-noi",
    title: "Làm biển quảng cáo có đèn LED Hà Nội",
    kicker: "Biển sáng buổi tối cho cửa hàng",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intro: "Biển có đèn LED phù hợp shop, spa, cafe, quán ăn, nhà thuốc và showroom cần nổi bật sau 18h. Có thể làm hộp đèn, chữ nổi sáng mặt, chữ hắt sáng hoặc kết hợp biển vẫy LED.",
    items: ["Tư vấn độ sáng phù hợp với tuyến phố", "Chọn LED, nguồn và vật liệu mặt biển", "Tính bố cục chữ để dễ đọc buổi tối", "Hỗ trợ sửa hoặc thay LED cho biển cũ"],
    related: [["Biển hộp đèn LED", "bien-hop-den-led-ha-noi"], ["Lắp đèn LED biển quảng cáo", "lap-den-led-bien-quang-cao-ha-noi"], ["Sửa biển cháy đèn", "sua-bien-quang-cao-chay-den-ha-noi"]]
  },
  {
    slug: "lam-bien-quang-cao-theo-yeu-cau-ha-noi",
    title: "Làm biển quảng cáo theo yêu cầu Hà Nội",
    kicker: "Tư vấn theo ngành hàng, mặt tiền và ngân sách",
    image: "hero-bien-quang-cao-ha-noi.jpg",
    intro: "Mỗi cửa hàng có mặt tiền, ngân sách và nhóm khách khác nhau. Bông Sen Trắng nhận làm biển quảng cáo theo yêu cầu cho cửa hàng, văn phòng, quán ăn, cafe, spa và showroom tại Hà Nội.",
    items: ["Tư vấn vật liệu theo mục tiêu sử dụng", "Sản xuất theo kích thước và bố cục đã chốt", "Lắp đặt tại Hà Nội", "Bảo hành theo hạng mục và chất liệu"],
    related: [["Thi công trọn gói", "thi-cong-bang-hieu-quang-cao-tron-goi-ha-noi"], ["Tư vấn thiết kế biển", "tu-van-thiet-ke-bien-quang-cao-ha-noi"], ["Theo ngành hàng", "bien-quang-cao-theo-nganh-ha-noi"]]
  }
];

pages.push(
  {
    slug: "bang-hieu-cua-hang-dong-da-ha-noi",
    title: "Bảng hiệu cửa hàng Đống Đa Hà Nội",
    kicker: "Bảng hiệu mặt tiền cho cửa hàng tại Đống Đa",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    intro: "Đống Đa có nhiều tuyến phố kinh doanh dày như Ô Chợ Dừa, Xã Đàn, Chùa Bộc, Thái Hà, Tây Sơn. Bông Sen Trắng nhận tư vấn và thi công bảng hiệu cửa hàng tại Đống Đa theo mặt tiền thực tế, ưu tiên chữ rõ, biển sáng và chi phí phù hợp.",
    items: ["Bảng hiệu alu chữ nổi cho shop, quán ăn, spa", "Biển hộp đèn LED cho cửa hàng mở buổi tối", "Biển bạt Hiflex khi cần tiết kiệm chi phí", "Sửa, thay mặt biển hoặc nâng cấp đèn cho biển cũ"],
    related: [["Làm biển quảng cáo Đống Đa", "lam-bien-quang-cao-dong-da"], ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"], ["Báo giá bảng hiệu cửa hàng", "bao-gia-lam-bang-hieu-cua-hang-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-cau-giay-ha-noi",
    title: "Bảng hiệu cửa hàng Cầu Giấy Hà Nội",
    kicker: "Biển cửa hàng cho khu văn phòng, shop và quán dịch vụ",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    intro: "Cầu Giấy có nhiều cửa hàng trên Duy Tân, Trần Thái Tông, Trung Kính, Xuân Thủy, Cầu Giấy. Với khu vực đông văn phòng và sinh viên, bảng hiệu cần dễ nhận diện từ xa, đủ sáng buổi tối và gọn thông tin.",
    items: ["Tư vấn bảng hiệu mặt tiền theo tuyến phố", "Biển alu chữ nổi, mica, inox, hộp đèn LED", "Biển vẫy phụ giúp khách nhìn từ hai chiều đường", "Báo giá theo ảnh mặt tiền gửi qua Zalo"],
    related: [["Làm biển quảng cáo Cầu Giấy", "lam-bien-quang-cao-cau-giay"], ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-thanh-xuan-ha-noi",
    title: "Bảng hiệu cửa hàng Thanh Xuân Hà Nội",
    kicker: "Biển mặt tiền cho shop, quán ăn, salon tại Thanh Xuân",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Thanh Xuân có nhiều mặt bằng kinh doanh trên Nguyễn Trãi, Khuất Duy Tiến, Nguyễn Tuân, Lê Văn Lương. Bảng hiệu cửa hàng tại khu vực này nên rõ tên, rõ ngành hàng và có phương án chiếu sáng tốt nếu bán buổi tối.",
    items: ["Thi công biển chính mặt tiền cửa hàng", "Bảng hiệu chữ nổi, hộp đèn, bạt Hiflex", "Tư vấn màu sắc theo ngành hàng", "Hỗ trợ sửa biển cũ khi còn tận dụng được khung"],
    related: [["Làm biển quảng cáo Thanh Xuân", "lam-bien-quang-cao-thanh-xuan"], ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"], ["Làm biển quảng cáo theo yêu cầu", "lam-bien-quang-cao-theo-yeu-cau-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-ha-dong-ha-noi",
    title: "Bảng hiệu cửa hàng Hà Đông Hà Nội",
    kicker: "Biển cửa hàng cho phố kinh doanh và khu dân cư Hà Đông",
    image: "du-an-bien-gia-long.jpg",
    intro: "Hà Đông có nhiều shop, quán ăn, spa và cửa hàng dịch vụ trên Nguyễn Trãi, Quang Trung, Tố Hữu, Văn Quán. Bông Sen Trắng nhận làm bảng hiệu cửa hàng Hà Đông với phương án phù hợp ngân sách và mặt tiền.",
    items: ["Bảng hiệu alu chữ nổi cho cửa hàng", "Biển hộp đèn LED, biển vẫy, biển bạt", "Tư vấn bố cục dễ đọc từ đường chính", "Thi công mới hoặc thay mặt biển cũ"],
    related: [["Làm biển quảng cáo Hà Đông", "lam-bien-quang-cao-ha-dong"], ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"], ["Thay mặt bạt biển quảng cáo", "thay-mat-bat-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-hoang-mai-ha-noi",
    title: "Bảng hiệu cửa hàng Hoàng Mai Hà Nội",
    kicker: "Bảng hiệu cho cửa hàng, quán ăn, siêu thị mini Hoàng Mai",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    intro: "Hoàng Mai có nhiều cửa hàng trong khu dân cư, mặt phố và các trục như Giải Phóng, Tam Trinh, Linh Đàm. Bảng hiệu nên ưu tiên độ rõ, độ bền ngoài trời và mức chi phí hợp lý cho cửa hàng đang vận hành.",
    items: ["Biển mặt tiền cho cửa hàng mới mở", "Biển bạt, alu chữ nổi, hộp đèn LED", "Sửa biển bạc màu, tối đèn, xuống cấp", "Báo giá theo ảnh mặt tiền và kích thước"],
    related: [["Làm biển quảng cáo Hoàng Mai", "lam-bien-quang-cao-hoang-mai"], ["Cửa hàng mới mở", "lam-bien-quang-cao-cua-hang-moi-mo-ha-noi"], ["Sửa biển hộp đèn LED", "sua-bien-hop-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-ba-dinh-ha-noi",
    title: "Bảng hiệu cửa hàng Ba Đình Hà Nội",
    kicker: "Biển cửa hàng gọn, rõ và phù hợp mặt phố Ba Đình",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    intro: "Ba Đình có nhiều cửa hàng, văn phòng, showroom trên Kim Mã, Đội Cấn, Giảng Võ, Liễu Giai. Bảng hiệu tại khu vực này cần nhìn chuyên nghiệp, vừa đủ nổi bật nhưng không rối thông tin.",
    items: ["Bảng hiệu shop, showroom, văn phòng", "Chữ nổi mica, inox, alu và hộp đèn", "Tư vấn kích thước theo mặt tiền thực tế", "Thi công gọn, hạn chế ảnh hưởng kinh doanh"],
    related: [["Làm biển quảng cáo Ba Đình", "lam-bien-quang-cao-ba-dinh"], ["Biển văn phòng công ty", "bien-van-phong-cong-ty-ha-noi"], ["Tư vấn thiết kế biển quảng cáo", "tu-van-thiet-ke-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-tay-ho-ha-noi",
    title: "Bảng hiệu cửa hàng Tây Hồ Hà Nội",
    kicker: "Biển cửa hàng cho cafe, nhà hàng, spa khu Tây Hồ",
    image: "du-an-bien-tien-coffee.jpg",
    intro: "Tây Hồ có nhiều quán cafe, nhà hàng, spa và cửa hàng dịch vụ trên Xuân Diệu, Tô Ngọc Vân, Lạc Long Quân. Bảng hiệu cần có thẩm mỹ tốt, ánh sáng đẹp và dễ nhận diện vào buổi tối.",
    items: ["Biển cafe, nhà hàng, spa, salon", "Chữ nổi sáng mặt, hắt sáng, hộp đèn LED", "Biển vẫy phụ cho mặt tiền khuất góc nhìn", "Tư vấn chất liệu theo phong cách thương hiệu"],
    related: [["Làm biển quảng cáo Tây Hồ", "lam-bien-quang-cao-tay-ho"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"], ["Biển nhà hàng Hà Nội", "bien-quang-cao-nha-hang-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-nam-tu-liem-ha-noi",
    title: "Bảng hiệu cửa hàng Nam Từ Liêm Hà Nội",
    kicker: "Biển mặt tiền cho shop, văn phòng, showroom Nam Từ Liêm",
    image: "du-an-logo-van-phong-fxce.jpg",
    intro: "Nam Từ Liêm có nhiều cửa hàng và văn phòng tại Mỹ Đình, Phạm Hùng, Mễ Trì, Tố Hữu. Với nhóm mặt bằng hiện đại, bảng hiệu cần gọn, dễ đọc và đồng bộ với nhận diện thương hiệu.",
    items: ["Bảng hiệu cửa hàng, showroom, văn phòng", "Alu chữ nổi, mica, inox, LED hắt sáng", "Tư vấn phương án theo ngân sách", "Thi công mới hoặc nâng cấp biển cũ"],
    related: [["Làm biển quảng cáo Nam Từ Liêm", "lam-bien-quang-cao-nam-tu-liem"], ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"], ["Làm biển quảng cáo theo yêu cầu", "lam-bien-quang-cao-theo-yeu-cau-ha-noi"]]
  }
);

pages.push(
  {
    slug: "bang-hieu-cua-hang-o-cho-dua-ha-noi",
    title: "Bảng hiệu cửa hàng Ô Chợ Dừa Hà Nội",
    kicker: "Biển cửa hàng gần 92E Ô Chợ Dừa",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    intro: "Ô Chợ Dừa là tuyến phố nhiều cửa hàng, quán ăn và dịch vụ tại Đống Đa. Bông Sen Trắng nhận làm bảng hiệu cửa hàng Ô Chợ Dừa với lợi thế ở gần khu vực, thuận tiện tư vấn nhanh theo ảnh mặt tiền hoặc khảo sát khi cần.",
    items: ["Bảng hiệu alu chữ nổi cho cửa hàng mặt phố", "Biển hộp đèn LED cho cửa hàng mở buổi tối", "Biển vẫy phụ để khách nhìn từ hai chiều đường", "Sửa hoặc thay mặt biển cũ quanh Ô Chợ Dừa"],
    related: [["Làm biển quảng cáo Ô Chợ Dừa", "lam-bien-quang-cao-o-cho-dua"], ["Bảng hiệu cửa hàng Đống Đa", "bang-hieu-cua-hang-dong-da-ha-noi"], ["Báo giá bảng hiệu cửa hàng", "bao-gia-lam-bang-hieu-cua-hang-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-xa-dan-ha-noi",
    title: "Bảng hiệu cửa hàng Xã Đàn Hà Nội",
    kicker: "Biển mặt tiền cho shop, quán ăn, spa trên Xã Đàn",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Xã Đàn có mật độ cửa hàng cao, nhiều mặt tiền cần biển rõ chữ, sáng đều và dễ nhận diện khi khách đi xe qua. Bông Sen Trắng tư vấn bảng hiệu cửa hàng Xã Đàn theo kích thước, ngân sách và ngành hàng.",
    items: ["Biển chính mặt tiền cho cửa hàng mới mở", "Chữ nổi mica/inox, alu, hộp đèn LED", "Tư vấn bố cục ít rối, đọc nhanh từ xa", "Thay mặt bạt, thay LED cho biển cũ"],
    related: [["Làm biển quảng cáo Xã Đàn", "lam-bien-quang-cao-xa-dan"], ["Bảng hiệu cửa hàng Đống Đa", "bang-hieu-cua-hang-dong-da-ha-noi"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-thai-ha-ha-noi",
    title: "Bảng hiệu cửa hàng Thái Hà Hà Nội",
    kicker: "Biển cửa hàng nổi bật cho tuyến phố kinh doanh Thái Hà",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    intro: "Thái Hà có nhiều shop thời trang, spa, đồ uống, showroom và cửa hàng dịch vụ. Bảng hiệu trên tuyến này cần nổi bật nhưng không rối, có ánh sáng tốt nếu cửa hàng bán sau giờ hành chính.",
    items: ["Bảng hiệu alu chữ nổi, mica, inox", "Hộp đèn LED và chữ nổi phát sáng", "Biển vẫy phụ cho mặt tiền dễ bị khuất", "Báo giá nhanh khi có ảnh mặt tiền"],
    related: [["Làm biển quảng cáo Thái Hà", "lam-bien-quang-cao-thai-ha"], ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi"], ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-chua-boc-ha-noi",
    title: "Bảng hiệu cửa hàng Chùa Bộc Hà Nội",
    kicker: "Biển shop, quán và cửa hàng dịch vụ khu Chùa Bộc",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intro: "Chùa Bộc có nhiều shop quần áo, giày dép, đồ ăn nhanh và dịch vụ phục vụ sinh viên. Bảng hiệu cửa hàng Chùa Bộc nên rõ tên, đúng ngành hàng và có điểm nhận diện đủ mạnh giữa dãy mặt tiền đông biển.",
    items: ["Biển shop thời trang, đồ uống, quán ăn", "Biển alu chữ nổi, bạt Hiflex, hộp đèn", "Tư vấn màu sắc dễ nhận ra trên phố đông", "Thi công mới hoặc sửa biển cũ"],
    related: [["Làm biển quảng cáo Chùa Bộc", "lam-bien-quang-cao-chua-boc"], ["Biển shop quần áo Hà Nội", "bien-shop-quan-ao-ha-noi"], ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-nguyen-trai-ha-noi",
    title: "Bảng hiệu cửa hàng Nguyễn Trãi Hà Nội",
    kicker: "Bảng hiệu mặt tiền cho tuyến Nguyễn Trãi",
    image: "du-an-bien-gia-long.jpg",
    intro: "Nguyễn Trãi là tuyến dài qua Thanh Xuân và Hà Đông, nhiều cửa hàng cần biển đủ lớn, rõ chữ và bền ngoài trời. Bông Sen Trắng nhận làm bảng hiệu cửa hàng Nguyễn Trãi theo từng mặt bằng thực tế.",
    items: ["Biển cửa hàng mặt phố và trong khu dân cư", "Alu chữ nổi, hộp đèn LED, bạt Hiflex", "Tư vấn phương án tiết kiệm khi có khung cũ", "Gửi ảnh qua Zalo để báo giá sơ bộ"],
    related: [["Làm biển quảng cáo Nguyễn Trãi", "lam-bien-quang-cao-nguyen-trai"], ["Bảng hiệu cửa hàng Thanh Xuân", "bang-hieu-cua-hang-thanh-xuan-ha-noi"], ["Bảng hiệu cửa hàng Hà Đông", "bang-hieu-cua-hang-ha-dong-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-duy-tan-ha-noi",
    title: "Bảng hiệu cửa hàng Duy Tân Hà Nội",
    kicker: "Biển cửa hàng, văn phòng, showroom khu Duy Tân",
    image: "du-an-logo-van-phong-fxce.jpg",
    intro: "Duy Tân là khu văn phòng và dịch vụ đông khách tại Cầu Giấy. Bảng hiệu cửa hàng Duy Tân cần gọn, chuyên nghiệp, dễ đọc và đồng bộ với nhận diện thương hiệu.",
    items: ["Bảng hiệu showroom, văn phòng, cửa hàng dịch vụ", "Chữ nổi mica/inox, alu, LED hắt sáng", "Biển chỉ dẫn phụ nếu mặt bằng trong tòa nhà", "Báo giá theo kích thước và vị trí lắp đặt"],
    related: [["Làm biển quảng cáo Duy Tân", "lam-bien-quang-cao-duy-tan"], ["Bảng hiệu cửa hàng Cầu Giấy", "bang-hieu-cua-hang-cau-giay-ha-noi"], ["Biển văn phòng công ty", "bien-van-phong-cong-ty-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-tran-thai-tong-ha-noi",
    title: "Bảng hiệu cửa hàng Trần Thái Tông Hà Nội",
    kicker: "Biển cửa hàng khu văn phòng, cafe, dịch vụ Cầu Giấy",
    image: "du-an-bien-tien-coffee.jpg",
    intro: "Trần Thái Tông có nhiều quán cafe, nhà hàng, spa, văn phòng và cửa hàng dịch vụ. Bảng hiệu cần nhìn rõ từ mặt đường, đủ sáng buổi tối và phù hợp nhóm khách văn phòng.",
    items: ["Biển cafe, nhà hàng, cửa hàng dịch vụ", "Chữ nổi sáng mặt, hắt sáng, hộp đèn LED", "Biển vẫy phụ để tăng nhận diện từ hai chiều", "Tư vấn phương án theo ngân sách"],
    related: [["Làm biển quảng cáo Trần Thái Tông", "lam-bien-quang-cao-tran-thai-tong"], ["Bảng hiệu cửa hàng Cầu Giấy", "bang-hieu-cua-hang-cau-giay-ha-noi"], ["Biển quán cafe Hà Nội", "bien-quan-cafe-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-kim-ma-ha-noi",
    title: "Bảng hiệu cửa hàng Kim Mã Hà Nội",
    kicker: "Biển cửa hàng, showroom, văn phòng khu Kim Mã",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    intro: "Kim Mã có nhiều showroom, văn phòng và cửa hàng dịch vụ cần biển hiệu gọn, sáng và chuyên nghiệp. Bông Sen Trắng nhận làm bảng hiệu cửa hàng Kim Mã theo phong cách thương hiệu và mặt tiền thực tế.",
    items: ["Bảng hiệu cửa hàng, showroom, văn phòng", "Chữ nổi mica, inox, alu và LED", "Tư vấn bố cục sang, dễ đọc, không rối", "Thi công mới hoặc nâng cấp biển cũ"],
    related: [["Làm biển quảng cáo Kim Mã", "lam-bien-quang-cao-kim-ma"], ["Bảng hiệu cửa hàng Ba Đình", "bang-hieu-cua-hang-ba-dinh-ha-noi"], ["Tư vấn thiết kế biển quảng cáo", "tu-van-thiet-ke-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-xuan-dieu-ha-noi",
    title: "Bảng hiệu cửa hàng Xuân Diệu Hà Nội",
    kicker: "Biển cafe, nhà hàng, spa khu Xuân Diệu Tây Hồ",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intro: "Xuân Diệu có nhiều cafe, nhà hàng, spa và cửa hàng phong cách cao cấp. Bảng hiệu cửa hàng Xuân Diệu nên chú trọng thẩm mỹ, ánh sáng và chất liệu để hợp không gian kinh doanh.",
    items: ["Biển cafe, nhà hàng, spa, salon", "Chữ nổi sáng mặt, hắt sáng, hộp đèn LED", "Tư vấn chất liệu theo phong cách thương hiệu", "Báo giá khi có ảnh mặt tiền và kích thước"],
    related: [["Làm biển quảng cáo Xuân Diệu", "lam-bien-quang-cao-xuan-dieu"], ["Bảng hiệu cửa hàng Tây Hồ", "bang-hieu-cua-hang-tay-ho-ha-noi"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-cua-hang-quang-trung-ha-dong-ha-noi",
    title: "Bảng hiệu cửa hàng Quang Trung Hà Đông",
    kicker: "Biển mặt tiền cho cửa hàng tuyến Quang Trung",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    intro: "Quang Trung Hà Đông là tuyến phố kinh doanh đông cửa hàng, cần biển hiệu dễ nhìn từ xa và bền ngoài trời. Bông Sen Trắng nhận tư vấn bảng hiệu cửa hàng Quang Trung theo ngành hàng và ngân sách.",
    items: ["Biển cửa hàng, quán ăn, shop, siêu thị mini", "Alu chữ nổi, hộp đèn LED, bạt Hiflex", "Sửa biển bạc màu, tối đèn hoặc xuống cấp", "Tư vấn báo giá qua ảnh Zalo"],
    related: [["Làm biển quảng cáo Quang Trung Hà Đông", "lam-bien-quang-cao-quang-trung-ha-dong"], ["Bảng hiệu cửa hàng Hà Đông", "bang-hieu-cua-hang-ha-dong-ha-noi"], ["Sửa biển hộp đèn LED", "sua-bien-hop-den-led-ha-noi"]]
  }
);

pages.push(
  {
    slug: "bang-hieu-quan-an-dong-da-ha-noi",
    title: "Bảng hiệu quán ăn Đống Đa Hà Nội",
    kicker: "Biển quán ăn rõ món, sáng buổi tối tại Đống Đa",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển nhà hàng, quán ăn có đèn LED vào buổi tối",
    intro: "Quán ăn tại Đống Đa thường cần biển đọc nhanh, rõ món chính và đủ sáng vào giờ tối. Bông Sen Trắng nhận tư vấn bảng hiệu quán ăn Đống Đa cho mặt phố, ngõ đông dân cư, cửa hàng mới mở hoặc quán cần thay biển cũ.",
    items: ["Biển mặt tiền cho phở, bún, cơm, đồ ăn nhanh", "Biển hộp đèn LED, bạt Hiflex, alu chữ nổi", "Bảng menu phụ, biển vẫy và biển chỉ dẫn", "Tư vấn bố cục dễ đọc khi khách đi xe qua"],
    related: [["Biển quán ăn uống Hà Nội", "bien-quan-an-uong-ha-noi"], ["Bảng hiệu cửa hàng Đống Đa", "bang-hieu-cua-hang-dong-da-ha-noi"], ["Làm biển quảng cáo Ô Chợ Dừa", "lam-bien-quang-cao-o-cho-dua"]]
  },
  {
    slug: "bang-hieu-quan-cafe-cau-giay-ha-noi",
    title: "Bảng hiệu quán cafe Cầu Giấy Hà Nội",
    kicker: "Biển cafe, đồ uống, trà sữa khu Cầu Giấy",
    image: "du-an-bien-tien-coffee.jpg",
    intro: "Quán cafe tại Cầu Giấy cần biển có gu, nhìn rõ từ xa và đẹp khi lên đèn. Bông Sen Trắng tư vấn bảng hiệu quán cafe Cầu Giấy cho mặt tiền nhỏ, quán trong khu văn phòng, cửa hàng đồ uống và mô hình take away.",
    items: ["Biển chữ nổi, hộp đèn LED, biển vẫy tròn", "Tư vấn ánh sáng phù hợp buổi tối", "Biển menu và bảng phụ trước cửa", "Báo giá theo ảnh mặt tiền và phong cách thương hiệu"],
    related: [["Biển quán cafe Cầu Giấy", "bien-quan-cafe-cau-giay-ha-noi"], ["Bảng hiệu cửa hàng Cầu Giấy", "bang-hieu-cua-hang-cau-giay-ha-noi"], ["Bảng hiệu cửa hàng Trần Thái Tông", "bang-hieu-cua-hang-tran-thai-tong-ha-noi"]]
  },
  {
    slug: "bang-hieu-spa-cau-giay-ha-noi",
    title: "Bảng hiệu spa Cầu Giấy Hà Nội",
    kicker: "Biển spa, salon, thẩm mỹ viện khu Cầu Giấy",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intro: "Spa và salon tại Cầu Giấy cần bảng hiệu sạch, sáng, tạo cảm giác tin cậy ngay từ mặt tiền. Bông Sen Trắng nhận làm bảng hiệu spa Cầu Giấy với chữ nổi, LED hắt sáng, hộp đèn hoặc phối vật liệu theo nhận diện thương hiệu.",
    items: ["Biển spa, nail, salon tóc, thẩm mỹ viện", "Chữ nổi mica, inox, LED hắt sáng", "Biển vẫy phụ cho mặt tiền khuất góc", "Tư vấn màu sắc mềm, sáng và dễ nhận diện"],
    related: [["Biển spa salon Cầu Giấy", "bien-spa-salon-cau-giay-ha-noi"], ["Bảng hiệu cửa hàng Cầu Giấy", "bang-hieu-cua-hang-cau-giay-ha-noi"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-nha-thuoc-dong-da-ha-noi",
    title: "Bảng hiệu nhà thuốc Đống Đa Hà Nội",
    kicker: "Biển nhà thuốc rõ thông tin, sáng và tin cậy",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    intro: "Nhà thuốc tại Đống Đa cần biển rõ tên, dễ đọc, sáng đều và tạo cảm giác uy tín. Bông Sen Trắng nhận làm bảng hiệu nhà thuốc Đống Đa, gồm biển hộp đèn, alu chữ nổi, chữ mica và biển phụ theo mặt tiền thực tế.",
    items: ["Biển nhà thuốc, phòng khám, quầy dược", "Hộp đèn LED và chữ nổi sáng mặt", "Bố cục rõ tên, ngành hàng, thông tin liên hệ", "Sửa biển cũ bạc màu hoặc tối đèn"],
    related: [["Biển nhà thuốc Đống Đa", "bien-nha-thuoc-dong-da-ha-noi"], ["Bảng hiệu cửa hàng Đống Đa", "bang-hieu-cua-hang-dong-da-ha-noi"], ["Sửa biển hộp đèn LED", "sua-bien-hop-den-led-ha-noi"]]
  },
  {
    slug: "bang-hieu-shop-quan-ao-chua-boc-ha-noi",
    title: "Bảng hiệu shop quần áo Chùa Bộc Hà Nội",
    kicker: "Biển shop thời trang nổi bật trên phố đông cửa hàng",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intro: "Shop quần áo trên Chùa Bộc cần bảng hiệu dễ nhớ, rõ tên thương hiệu và đủ nổi bật giữa nhiều mặt tiền cạnh tranh. Bông Sen Trắng nhận làm bảng hiệu shop quần áo Chùa Bộc theo phong cách trẻ, gọn và sáng.",
    items: ["Biển shop thời trang, giày dép, phụ kiện", "Alu chữ nổi, mica, inox, LED hắt sáng", "Tư vấn màu sắc theo nhận diện thương hiệu", "Biển chính, biển vẫy và decal phụ nếu cần"],
    related: [["Biển shop quần áo Hà Nội", "bien-shop-quan-ao-ha-noi"], ["Bảng hiệu cửa hàng Chùa Bộc", "bang-hieu-cua-hang-chua-boc-ha-noi"], ["Làm biển quảng cáo Chùa Bộc", "lam-bien-quang-cao-chua-boc"]]
  },
  {
    slug: "bang-hieu-tra-sua-ha-dong-ha-noi",
    title: "Bảng hiệu trà sữa Hà Đông Hà Nội",
    kicker: "Biển trà sữa, đồ uống, take away tại Hà Đông",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Quán trà sữa và đồ uống tại Hà Đông cần biển màu sắc trẻ, dễ lên ảnh và đủ sáng buổi tối. Bông Sen Trắng tư vấn bảng hiệu trà sữa Hà Đông cho cửa hàng mới mở, quán cần thay nhận diện hoặc nâng cấp biển cũ.",
    items: ["Biển mặt tiền trà sữa, nước ép, đồ uống", "Hộp đèn LED, chữ nổi và biển vẫy", "Bảng menu phụ và biển khai trương", "Tư vấn phương án tiết kiệm cho cửa hàng mới"],
    related: [["Biển trà sữa Hà Đông", "bien-tra-sua-ha-dong-ha-noi"], ["Bảng hiệu cửa hàng Hà Đông", "bang-hieu-cua-hang-ha-dong-ha-noi"], ["Bảng hiệu cửa hàng Quang Trung Hà Đông", "bang-hieu-cua-hang-quang-trung-ha-dong-ha-noi"]]
  },
  {
    slug: "bang-hieu-salon-toc-ba-dinh-ha-noi",
    title: "Bảng hiệu salon tóc Ba Đình Hà Nội",
    kicker: "Biển salon, barber, làm đẹp khu Ba Đình",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    intro: "Salon tóc và barber tại Ba Đình cần bảng hiệu gọn, sáng, thể hiện phong cách dịch vụ. Bông Sen Trắng nhận làm bảng hiệu salon tóc Ba Đình bằng chữ nổi, alu, mica, inox, LED hoặc hộp đèn tùy mặt tiền.",
    items: ["Biển salon tóc, barber, nail, spa", "Chữ nổi sáng mặt hoặc hắt sáng", "Biển vẫy phụ để khách dễ tìm", "Sửa hoặc thay mới biển cũ xuống cấp"],
    related: [["Biển salon tóc Ba Đình", "bien-salon-toc-ba-dinh-ha-noi"], ["Bảng hiệu cửa hàng Ba Đình", "bang-hieu-cua-hang-ba-dinh-ha-noi"], ["Làm biển quảng cáo Kim Mã", "lam-bien-quang-cao-kim-ma"]]
  },
  {
    slug: "bang-hieu-showroom-noi-that-nam-tu-liem-ha-noi",
    title: "Bảng hiệu showroom nội thất Nam Từ Liêm Hà Nội",
    kicker: "Biển showroom, văn phòng, cửa hàng nội thất",
    image: "du-an-logo-van-phong-fxce.jpg",
    intro: "Showroom nội thất tại Nam Từ Liêm cần bảng hiệu sang, rõ tên thương hiệu và đồng bộ với không gian trưng bày. Bông Sen Trắng nhận làm bảng hiệu showroom nội thất Nam Từ Liêm theo kích thước mặt tiền và phong cách nhận diện.",
    items: ["Biển showroom nội thất, vật liệu, thiết bị", "Alu chữ nổi, mica, inox, LED hắt sáng", "Biển chỉ dẫn phụ cho showroom trong tòa nhà", "Tư vấn bố cục sang và dễ đọc từ xa"],
    related: [["Biển showroom nội thất Hà Nội", "bien-showroom-noi-that-ha-noi"], ["Bảng hiệu cửa hàng Nam Từ Liêm", "bang-hieu-cua-hang-nam-tu-liem-ha-noi"], ["Biển văn phòng Nam Từ Liêm", "bien-van-phong-nam-tu-liem-ha-noi"]]
  },
  {
    slug: "bang-hieu-sieu-thi-mini-hoang-mai-ha-noi",
    title: "Bảng hiệu siêu thị mini Hoàng Mai Hà Nội",
    kicker: "Biển siêu thị mini, cửa hàng mẹ và bé, tạp hóa",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    intro: "Siêu thị mini và cửa hàng tạp hóa tại Hoàng Mai cần bảng hiệu rõ ngành hàng, dễ nhìn từ xa và bền khi đặt ngoài trời. Bông Sen Trắng nhận làm bảng hiệu siêu thị mini Hoàng Mai với phương án chi phí phù hợp.",
    items: ["Biển siêu thị mini, tạp hóa, mẹ và bé", "Biển bạt Hiflex, alu chữ nổi, hộp đèn", "Tư vấn bố cục nhiều thông tin nhưng vẫn dễ đọc", "Thay mặt biển hoặc làm mới toàn bộ"],
    related: [["Biển siêu thị mini mẹ và bé", "bien-sieu-thi-mini-me-va-be-ha-noi"], ["Bảng hiệu cửa hàng Hoàng Mai", "bang-hieu-cua-hang-hoang-mai-ha-noi"], ["Làm biển quảng cáo Hoàng Mai", "lam-bien-quang-cao-hoang-mai"]]
  },
  {
    slug: "bang-hieu-phong-kham-thanh-xuan-ha-noi",
    title: "Bảng hiệu phòng khám Thanh Xuân Hà Nội",
    kicker: "Biển phòng khám, nha khoa, cơ sở y tế tại Thanh Xuân",
    image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
    intro: "Phòng khám tại Thanh Xuân cần bảng hiệu rõ thông tin, chuyên nghiệp và dễ nhận diện. Bông Sen Trắng nhận làm bảng hiệu phòng khám Thanh Xuân với chữ nổi, hộp đèn, mica, alu và bố cục phù hợp ngành y tế.",
    items: ["Biển phòng khám, nha khoa, nhà thuốc", "Hộp đèn LED, chữ nổi mica/inox", "Bố cục rõ tên cơ sở, chuyên khoa, thông tin liên hệ", "Tư vấn vật liệu bền và dễ vệ sinh"],
    related: [["Biển phòng khám Thanh Xuân", "bien-phong-kham-thanh-xuan-ha-noi"], ["Bảng hiệu cửa hàng Thanh Xuân", "bang-hieu-cua-hang-thanh-xuan-ha-noi"], ["Biển phòng khám nhà thuốc Hà Nội", "bien-phong-kham-nha-thuoc-ha-noi"]]
  }
);

pages.push(
  {
    slug: "bao-gia-bang-hieu-quan-an-ha-noi",
    title: "Báo giá bảng hiệu quán ăn Hà Nội",
    kicker: "Dự toán biển quán ăn theo mặt tiền và món chính",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    imageAlt: "Mẫu biển nhà hàng, quán ăn có đèn LED vào buổi tối",
    intro: "Giá làm bảng hiệu quán ăn phụ thuộc kích thước mặt tiền, loại biển, đèn LED, bảng menu phụ và vị trí lắp đặt. Bông Sen Trắng nhận tư vấn báo giá bảng hiệu quán ăn Hà Nội theo ảnh thực tế để hạn chế phát sinh.",
    items: ["Biển bạt Hiflex tiết kiệm cho quán mới mở", "Biển hộp đèn LED cho quán bán buổi tối", "Alu chữ nổi khi cần mặt tiền bền và nổi bật", "Bảng menu phụ, biển vẫy, biển chỉ dẫn nếu cần"],
    related: [["Bảng hiệu quán ăn Đống Đa", "bang-hieu-quan-an-dong-da-ha-noi"], ["Biển quán ăn uống Hà Nội", "bien-quan-an-uong-ha-noi"], ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-quan-cafe-ha-noi",
    title: "Báo giá bảng hiệu quán cafe Hà Nội",
    kicker: "Báo giá biển cafe, trà sữa, đồ uống",
    image: "du-an-bien-tien-coffee.jpg",
    intro: "Bảng hiệu quán cafe cần vừa đẹp hình ảnh vừa dễ nhận diện buổi tối. Chi phí phụ thuộc phong cách biển, chữ nổi, đèn LED, biển vẫy và bảng menu. Gửi ảnh mặt tiền qua Zalo để Bông Sen Trắng tư vấn phương án sát hơn.",
    items: ["Biển chữ nổi mica/inox cho cafe mặt phố", "Hộp đèn LED và biển vẫy tròn cho quán dễ tìm", "Bảng menu phụ, bảng đứng trước cửa", "Tư vấn ánh sáng để biển đẹp khi chụp ảnh"],
    related: [["Bảng hiệu quán cafe Cầu Giấy", "bang-hieu-quan-cafe-cau-giay-ha-noi"], ["Biển quán cafe Hà Nội", "bien-quan-cafe-ha-noi"], ["Biển cafe trà sữa Hà Nội", "bien-quang-cao-cafe-tra-sua-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-spa-salon-ha-noi",
    title: "Báo giá bảng hiệu spa salon Hà Nội",
    kicker: "Bảng hiệu spa, nail, salon, thẩm mỹ viện",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    intro: "Bảng hiệu spa salon thường cần chất liệu sạch, sáng và tạo cảm giác tin cậy. Giá phụ thuộc kiểu chữ nổi, nền alu, mica, inox, LED hắt sáng và mức hoàn thiện mặt tiền. Bông Sen Trắng tư vấn theo phong cách thương hiệu và ngân sách.",
    items: ["Biển spa chữ nổi mica hoặc inox", "LED hắt sáng, sáng mặt hoặc hộp đèn", "Biển vẫy phụ cho mặt tiền nhỏ", "Tư vấn màu sắc mềm, sang và dễ đọc"],
    related: [["Bảng hiệu spa Cầu Giấy", "bang-hieu-spa-cau-giay-ha-noi"], ["Biển quảng cáo spa salon Hà Nội", "bien-quang-cao-spa-salon-ha-noi"], ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-nha-thuoc-ha-noi",
    title: "Báo giá bảng hiệu nhà thuốc Hà Nội",
    kicker: "Bảng hiệu nhà thuốc, quầy dược, phòng khám",
    image: "mau-bien-nha-thuoc-linh-dam-ha-noi.jpg",
    intro: "Nhà thuốc cần bảng hiệu rõ, sáng đều, dễ đọc và tạo cảm giác uy tín. Báo giá phụ thuộc kích thước biển, hộp đèn, chữ nổi, vật liệu nền và điều kiện lắp đặt. Có thể gửi ảnh mặt tiền để nhận tư vấn nhanh.",
    items: ["Biển hộp đèn LED cho nhà thuốc", "Alu chữ nổi hoặc mica sáng mặt", "Biển phụ, bảng giờ mở cửa, decal kính nếu cần", "Sửa biển nhà thuốc cũ bị bạc màu hoặc tối đèn"],
    related: [["Bảng hiệu nhà thuốc Đống Đa", "bang-hieu-nha-thuoc-dong-da-ha-noi"], ["Biển nhà thuốc Hà Nội", "bien-nha-thuoc-ha-noi"], ["Biển phòng khám nhà thuốc Hà Nội", "bien-phong-kham-nha-thuoc-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-shop-quan-ao-ha-noi",
    title: "Báo giá bảng hiệu shop quần áo Hà Nội",
    kicker: "Biển shop thời trang, phụ kiện, giày dép",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    intro: "Shop quần áo cần bảng hiệu dễ nhớ, hợp phong cách và nổi bật giữa nhiều cửa hàng. Giá làm biển shop phụ thuộc chất liệu nền, chữ nổi, đèn LED, biển vẫy và mức hoàn thiện nhận diện thương hiệu.",
    items: ["Biển alu chữ nổi cho shop thời trang", "Chữ mica, inox, LED hắt sáng", "Biển vẫy, decal kính, bảng sale phụ", "Tư vấn phương án phù hợp shop mới mở"],
    related: [["Bảng hiệu shop quần áo Chùa Bộc", "bang-hieu-shop-quan-ao-chua-boc-ha-noi"], ["Biển shop quần áo Hà Nội", "bien-shop-quan-ao-ha-noi"], ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-tra-sua-ha-noi",
    title: "Báo giá bảng hiệu trà sữa Hà Nội",
    kicker: "Biển trà sữa, nước ép, đồ uống take away",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    intro: "Quán trà sữa cần biển màu sắc trẻ, đủ sáng buổi tối và dễ lên ảnh. Chi phí làm bảng hiệu trà sữa phụ thuộc kích thước, chữ nổi, hộp đèn, biển vẫy, menu phụ và mức hoàn thiện theo nhận diện thương hiệu.",
    items: ["Biển mặt tiền trà sữa, nước ép, đồ uống", "Hộp đèn LED, chữ nổi, biển vẫy", "Bảng menu, bảng khai trương, bảng đứng", "Tư vấn tiết kiệm cho cửa hàng mới mở"],
    related: [["Bảng hiệu trà sữa Hà Đông", "bang-hieu-tra-sua-ha-dong-ha-noi"], ["Biển trà sữa Hà Nội", "bien-tra-sua-ha-noi"], ["Biển cafe trà sữa Hà Nội", "bien-quang-cao-cafe-tra-sua-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-phong-kham-ha-noi",
    title: "Báo giá bảng hiệu phòng khám Hà Nội",
    kicker: "Biển phòng khám, nha khoa, cơ sở y tế",
    image: "mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg",
    intro: "Phòng khám và nha khoa cần bảng hiệu chuyên nghiệp, dễ đọc, đủ sáng và rõ thông tin chuyên khoa. Bông Sen Trắng báo giá theo kích thước, kiểu chữ, vật liệu, đèn LED và yêu cầu lắp đặt thực tế.",
    items: ["Biển phòng khám, nha khoa, cơ sở y tế", "Chữ nổi mica/inox, hộp đèn LED", "Bố cục rõ tên, chuyên khoa, thông tin liên hệ", "Tư vấn vật liệu bền, dễ vệ sinh"],
    related: [["Bảng hiệu phòng khám Thanh Xuân", "bang-hieu-phong-kham-thanh-xuan-ha-noi"], ["Biển phòng khám nha khoa Hà Nội", "bien-phong-kham-nha-khoa-ha-noi"], ["Biển phòng khám nhà thuốc Hà Nội", "bien-phong-kham-nha-thuoc-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-sieu-thi-mini-ha-noi",
    title: "Báo giá bảng hiệu siêu thị mini Hà Nội",
    kicker: "Biển siêu thị mini, tạp hóa, mẹ và bé",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    intro: "Siêu thị mini thường cần bảng hiệu rõ ngành hàng, nhiều thông tin nhưng vẫn dễ đọc. Giá làm biển phụ thuộc vật liệu, kích thước, đèn LED, biển phụ và việc có tận dụng khung cũ hay không.",
    items: ["Biển bạt Hiflex tiết kiệm chi phí", "Alu chữ nổi hoặc hộp đèn LED", "Bố cục rõ sản phẩm chính, tên cửa hàng, hotline", "Thay mặt biển cũ hoặc làm mới toàn bộ"],
    related: [["Bảng hiệu siêu thị mini Hoàng Mai", "bang-hieu-sieu-thi-mini-hoang-mai-ha-noi"], ["Biển siêu thị mini mẹ và bé", "bien-sieu-thi-mini-me-va-be-ha-noi"], ["Bảng hiệu cửa hàng Hoàng Mai", "bang-hieu-cua-hang-hoang-mai-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-showroom-ha-noi",
    title: "Báo giá bảng hiệu showroom Hà Nội",
    kicker: "Biển showroom, văn phòng, cửa hàng cao cấp",
    image: "du-an-logo-van-phong-fxce.jpg",
    intro: "Showroom cần bảng hiệu sang, rõ thương hiệu và đồng bộ với không gian trưng bày. Giá phụ thuộc vật liệu nền, chữ nổi, LED, kích thước mặt tiền và tiêu chuẩn hoàn thiện.",
    items: ["Biển showroom nội thất, thiết bị, xe, vật liệu", "Alu chữ nổi, mica, inox, LED hắt sáng", "Biển chỉ dẫn phụ, backdrop, bảng logo", "Tư vấn bố cục gọn và chuyên nghiệp"],
    related: [["Bảng hiệu showroom nội thất Nam Từ Liêm", "bang-hieu-showroom-noi-that-nam-tu-liem-ha-noi"], ["Biển showroom nội thất Hà Nội", "bien-showroom-noi-that-ha-noi"], ["Biển văn phòng công ty Hà Nội", "bien-van-phong-cong-ty-ha-noi"]]
  },
  {
    slug: "bao-gia-bang-hieu-salon-toc-ha-noi",
    title: "Báo giá bảng hiệu salon tóc Hà Nội",
    kicker: "Biển salon tóc, barber, nail, làm đẹp",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    intro: "Salon tóc và barber cần bảng hiệu thể hiện phong cách, dễ tìm và nổi bật buổi tối. Bông Sen Trắng báo giá theo kiểu chữ nổi, nền biển, đèn LED, biển vẫy và yêu cầu thi công thực tế.",
    items: ["Biển salon tóc, barber, nail, spa", "Chữ nổi sáng mặt hoặc hắt sáng", "Biển vẫy phụ và bảng dịch vụ", "Sửa hoặc thay mới biển cũ xuống cấp"],
    related: [["Bảng hiệu salon tóc Ba Đình", "bang-hieu-salon-toc-ba-dinh-ha-noi"], ["Biển salon tóc barber Hà Nội", "bien-salon-toc-barber-ha-noi"], ["Biển nail mi spa Hà Nội", "bien-nail-mi-spa-ha-noi"]]
  }
);

const localPriceAreas = [
  {
    name: "Đống Đa",
    slug: "bao-gia-bien-quang-cao-dong-da",
    localSlug: "lam-bien-quang-cao-dong-da",
    storefrontSlug: "bang-hieu-cua-hang-dong-da-ha-noi",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    routes: "Ô Chợ Dừa, Xã Đàn, Chùa Bộc, Thái Hà, Tây Sơn",
    fit: "phù hợp shop, quán ăn, nhà thuốc, spa và cửa hàng mặt phố cần khảo sát nhanh gần 92E Ô Chợ Dừa"
  },
  {
    name: "Cầu Giấy",
    slug: "bao-gia-bien-quang-cao-cau-giay",
    localSlug: "lam-bien-quang-cao-cau-giay",
    storefrontSlug: "bang-hieu-cua-hang-cau-giay-ha-noi",
    image: "mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg",
    routes: "Duy Tân, Trần Thái Tông, Trung Kính, Cầu Giấy, Xuân Thủy",
    fit: "phù hợp văn phòng, showroom, cafe, shop và cửa hàng dịch vụ cần biển sáng rõ buổi tối"
  },
  {
    name: "Thanh Xuân",
    slug: "bao-gia-bien-quang-cao-thanh-xuan",
    localSlug: "lam-bien-quang-cao-thanh-xuan",
    storefrontSlug: "bang-hieu-cua-hang-thanh-xuan-ha-noi",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    routes: "Nguyễn Trãi, Khuất Duy Tiến, Nguyễn Tuân, Lê Văn Lương",
    fit: "phù hợp cửa hàng mới mở, quán ăn, salon, phòng khám và shop cần tối ưu chi phí"
  },
  {
    name: "Hà Đông",
    slug: "bao-gia-bien-quang-cao-ha-dong",
    localSlug: "lam-bien-quang-cao-ha-dong",
    storefrontSlug: "bang-hieu-cua-hang-ha-dong-ha-noi",
    image: "du-an-bien-gia-long.jpg",
    routes: "Quang Trung, Nguyễn Trãi, Tố Hữu, Văn Quán, Mỗ Lao",
    fit: "phù hợp shop, spa, quán ăn, siêu thị mini và cửa hàng trong khu dân cư"
  },
  {
    name: "Hoàng Mai",
    slug: "bao-gia-bien-quang-cao-hoang-mai",
    localSlug: "lam-bien-quang-cao-hoang-mai",
    storefrontSlug: "bang-hieu-cua-hang-hoang-mai-ha-noi",
    image: "mau-bien-cua-hang-me-va-be-ha-noi.jpg",
    routes: "Giải Phóng, Tam Trinh, Linh Đàm, Tân Mai, Lĩnh Nam",
    fit: "phù hợp cửa hàng bán lẻ, quán ăn, nhà thuốc, siêu thị mini và sửa/thay biển cũ"
  },
  {
    name: "Ba Đình",
    slug: "bao-gia-bien-quang-cao-ba-dinh",
    localSlug: "lam-bien-quang-cao-ba-dinh",
    storefrontSlug: "bang-hieu-cua-hang-ba-dinh-ha-noi",
    image: "du-an-bien-chu-noi-mo-nguyen.jpg",
    routes: "Kim Mã, Đội Cấn, Giảng Võ, Liễu Giai, Nguyễn Thái Học",
    fit: "phù hợp showroom, văn phòng, shop, spa và cửa hàng cần biển gọn, chuyên nghiệp"
  },
  {
    name: "Tây Hồ",
    slug: "bao-gia-bien-quang-cao-tay-ho",
    localSlug: "lam-bien-quang-cao-tay-ho",
    storefrontSlug: "bang-hieu-cua-hang-tay-ho-ha-noi",
    image: "du-an-bien-tien-coffee.jpg",
    routes: "Xuân Diệu, Tô Ngọc Vân, Lạc Long Quân, Âu Cơ",
    fit: "phù hợp cafe, nhà hàng, spa, salon và cửa hàng dịch vụ cần biển có thẩm mỹ tốt"
  },
  {
    name: "Nam Từ Liêm",
    slug: "bao-gia-bien-quang-cao-nam-tu-liem",
    localSlug: "lam-bien-quang-cao-nam-tu-liem",
    storefrontSlug: "bang-hieu-cua-hang-nam-tu-liem-ha-noi",
    image: "du-an-logo-van-phong-fxce.jpg",
    routes: "Mỹ Đình, Phạm Hùng, Mễ Trì, Tố Hữu, Lê Đức Thọ",
    fit: "phù hợp showroom, văn phòng, cửa hàng dịch vụ, phòng tập và mặt bằng khu đô thị"
  },
  {
    name: "Long Biên",
    slug: "bao-gia-bien-quang-cao-long-bien",
    localSlug: "lam-bien-quang-cao-long-bien",
    storefrontSlug: "bien-hieu-cua-hang-ha-noi",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    routes: "Nguyễn Văn Cừ, Cổ Linh, Ngọc Lâm, Việt Hưng, Sài Đồng",
    fit: "phù hợp gara, showroom, cửa hàng điện máy, quán ăn và biển mặt tiền kích thước lớn"
  },
  {
    name: "Hai Bà Trưng",
    slug: "bao-gia-bien-quang-cao-hai-ba-trung",
    localSlug: "lam-bien-quang-cao-hai-ba-trung",
    storefrontSlug: "bien-hieu-cua-hang-ha-noi",
    image: "du-an-oppo-samsung.jpg",
    routes: "Phố Huế, Bạch Mai, Minh Khai, Trương Định, Đại Cồ Việt",
    fit: "phù hợp shop, nhà hàng, cafe, phòng khám, đại lý và cửa hàng điện thoại"
  }
];

pages.push(
  ...localPriceAreas.map((area) => ({
    slug: area.slug,
    title: `Báo giá biển quảng cáo ${area.name} Hà Nội`,
    kicker: `Báo giá theo mặt bằng tại ${area.name}`,
    image: area.image,
    intro: `Khách tìm "báo giá biển quảng cáo ${area.name}" thường cần ước lượng nhanh trước khi quyết định khảo sát hoặc gửi ảnh mặt tiền. Bông Sen Trắng nhận tư vấn biển alu chữ nổi, hộp đèn LED, bạt Hiflex, chữ nổi mica/inox, biển vẫy và sửa biển cũ tại ${area.name}, Hà Nội. Khu vực này có các tuyến như ${area.routes}, ${area.fit}.`,
    items: [
      "Gửi ảnh mặt tiền, kích thước ngang x cao và địa chỉ lắp đặt để báo giá sát hơn",
      "Tư vấn vật liệu theo ngân sách: Hiflex, alu chữ nổi, hộp đèn LED, mica, inox",
      "Tách rõ chi phí sản xuất, vật tư phụ, vận chuyển và lắp đặt khi cần",
      "Có phương án tiết kiệm nếu khung cũ còn dùng được hoặc chỉ cần thay mặt biển",
      "Ưu tiên phương án thi công nhanh cho cửa hàng cần khai trương hoặc thay biển gấp"
    ],
    related: [
      [`Làm biển quảng cáo ${area.name}`, area.localSlug],
      [`Bảng hiệu cửa hàng ${area.name}`, area.storefrontSlug],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  }))
);

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

function renderCommercialCluster(currentSlug) {
  const links = [
    ["Báo giá biển quảng cáo Đống Đa", "bao-gia-bien-quang-cao-dong-da", "Ước lượng chi phí cho mặt tiền quanh Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc."],
    ["Báo giá biển quảng cáo Cầu Giấy", "bao-gia-bien-quang-cao-cau-giay", "Báo giá biển shop, cafe, showroom và văn phòng quanh Duy Tân, Trần Thái Tông, Trung Kính."],
    ["Báo giá biển quảng cáo Thanh Xuân", "bao-gia-bien-quang-cao-thanh-xuan", "Tư vấn biển cửa hàng quanh Nguyễn Trãi, Khuất Duy Tiến, Nguyễn Tuân, Lê Văn Lương."],
    ["Báo giá biển quảng cáo Hà Đông", "bao-gia-bien-quang-cao-ha-dong", "Dự toán biển mặt tiền tại Quang Trung, Nguyễn Trãi, Tố Hữu, Văn Quán."],
    ["Báo giá làm biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi", "Xem khung giá theo vật liệu, kích thước, đèn LED và điều kiện lắp đặt."],
    ["Biển hiệu cửa hàng Hà Nội", "bien-hieu-cua-hang-ha-noi", "Phương án biển cho shop, quán ăn, cafe, spa, nhà thuốc và showroom."],
    ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi", "Chọn bố cục, vật liệu và ánh sáng theo mặt tiền thực tế."],
    ["Làm biển quảng cáo có đèn LED", "lam-bien-quang-cao-co-den-led-ha-noi", "Hộp đèn, chữ nổi sáng mặt, chữ hắt sáng và biển vẫy LED."],
    ["Làm biển quảng cáo Đống Đa", "lam-bien-quang-cao-dong-da", "Khảo sát quanh Ô Chợ Dừa, Xã Đàn, Thái Hà, Chùa Bộc, Tây Sơn."],
    ["Làm biển quảng cáo Ô Chợ Dừa", "lam-bien-quang-cao-o-cho-dua", "Phù hợp cửa hàng gần 92E Ô Chợ Dừa và các tuyến phố lân cận."]
  ].filter(([, slug]) => slug !== currentSlug);

  return links
    .slice(0, 4)
    .map(
      ([label, slug, text]) => `
                <a href="../${slug}/">
                  <strong>${escapeHtml(label)}</strong>
                  <span>${escapeHtml(text)}</span>
                </a>`
    )
    .join("\n");
}

function renderFaq(page) {
  const faqs = [
    [`Muốn báo giá ${page.title.toLowerCase()} cần gửi gì?`, "Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt, thời gian cần hoàn thiện và mẫu biển thích nếu có."],
    [`Có cần khảo sát trước khi làm không?`, "Với biển lớn, biển cao, biển cần đấu điện hoặc sửa khung cũ, nên khảo sát để báo giá sát và hạn chế phát sinh."],
    [`Có nhận làm gấp tại Hà Nội không?`, "Có thể xử lý nhanh nếu vật liệu sẵn, thiết kế chốt sớm và mặt bằng không quá phức tạp."],
    [`Có tư vấn phương án tiết kiệm không?`, "Có. Nếu khung cũ còn tốt có thể thay mặt biển, thay LED hoặc chỉnh lại bố cục thay vì làm mới toàn bộ."]
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
  const imageAlt = page.imageAlt || page.title;
  const description = `${page.title}: tư vấn phương án, vật liệu, chi phí và thi công tại Hà Nội. Gửi ảnh qua Zalo 0989 521 881 để báo giá nhanh.`;
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
              <a href="../thi-cong-bien-quang-cao-ha-noi/">Dịch vụ</a>
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
              <h2>Hạng mục cần chốt trước khi báo giá</h2>
              <ul class="area-list">
                ${renderList(page.items)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Gửi ảnh để báo giá sát hơn</h2>
              <p>Ảnh mặt tiền, kích thước ngang x cao, địa chỉ lắp đặt và thời gian cần hoàn thiện là các thông tin quan trọng nhất. Nếu có mẫu biển thích hoặc file logo, gửi kèm để tư vấn vật liệu và bố cục nhanh hơn.</p>
            </section>
            <section class="content-block">
              <h2>Nhu cầu liên quan thường gặp</h2>
              <div class="price-link-grid compact">
${renderCommercialCluster(page.slug)}
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
              <h2>Báo giá nhanh</h2>
              <p>Gửi ảnh mặt tiền qua Zalo để nhận tư vấn phương án phù hợp.</p>
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
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} buyer-intent SEO pages`);
