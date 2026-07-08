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

const hub = {
  slug: "lam-bien-quang-cao-theo-nhu-cau-khach-hang-ha-noi",
  title: "Làm biển quảng cáo theo nhu cầu khách hàng tại Hà Nội",
  description:
    "Chọn phương án làm biển quảng cáo theo đúng tình huống: cửa hàng sắp khai trương, mặt tiền nhỏ, trong ngõ, bán buổi tối, cần tiết kiệm hoặc cần sửa biển cũ."
};

const pages = [
  {
    slug: "bien-quang-cao-cho-cua-hang-sap-khai-truong-ha-noi",
    title: "Biển quảng cáo cho cửa hàng sắp khai trương tại Hà Nội",
    seoTitle: "Biển khai trương cửa hàng Hà Nội",
    kicker: "Cần kịp ngày mở bán",
    image: "du-an-pink-fruit-flower-bien-mat-tien.jpg",
    description:
      "Tư vấn biển quảng cáo cho cửa hàng sắp khai trương tại Hà Nội: chọn vật liệu nhanh, đủ đẹp, dễ thi công và hạn chế phát sinh.",
    lead:
      "Khi sát ngày khai trương, mục tiêu không phải làm phương án phức tạp nhất mà là chốt một biển đủ rõ, đúng nhận diện và thi công kịp tiến độ. Bông Sen Trắng ưu tiên kiểm tra ảnh mặt tiền, kích thước, nội dung và thời hạn bàn giao để chọn cấu tạo phù hợp.",
    audience: [
      "Shop, quán ăn, cafe, spa, salon hoặc cửa hàng mới cần mở bán đúng ngày.",
      "Chủ cửa hàng đã có tên thương hiệu nhưng chưa chốt vật liệu biển.",
      "Mặt bằng vừa nhận bàn giao, cần làm biển nhanh để kịp khai trương.",
      "Cần phương án làm trước phần chính, hạng mục phụ có thể bổ sung sau."
    ],
    solution: [
      "Ưu tiên biển chính rõ tên thương hiệu, ngành hàng và ánh sáng nếu bán buổi tối.",
      "Chọn vật liệu sản xuất nhanh như bạt Hiflex, alu chữ nổi đơn giản hoặc hộp đèn cấu tạo gọn.",
      "Rút gọn nội dung phụ để giảm thời gian thiết kế, gia công và lắp đặt.",
      "Chốt sớm kích thước, màu chủ đạo, file logo và ngày cần hoàn thiện."
    ],
    avoid:
      "Không nên thay đổi nội dung nhiều lần sát ngày lắp. Mỗi lần đổi logo, màu hoặc bố cục có thể làm chậm tiến độ sản xuất.",
    related: [
      ["Làm biển khai trương gấp", "lam-bien-quang-cao-khai-truong-gap-ha-noi"],
      ["Làm biển quảng cáo nhanh", "lam-bien-quang-cao-nhanh-ha-noi"],
      ["Báo giá biển quảng cáo Hà Nội", "bao-gia-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-cua-hang-mat-tien-nho-ha-noi",
    title: "Biển quảng cáo cho cửa hàng mặt tiền nhỏ tại Hà Nội",
    seoTitle: "Biển cửa hàng mặt tiền nhỏ Hà Nội",
    kicker: "Mặt tiền hẹp cần biển dễ đọc",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    description:
      "Tư vấn biển quảng cáo cho cửa hàng mặt tiền nhỏ tại Hà Nội: bố cục ít chữ, biển vẫy, hộp đèn, chữ nổi và decal kính.",
    lead:
      "Mặt tiền nhỏ không có nhiều diện tích để trình bày, vì vậy biển cần ít chữ, tương phản rõ và có điểm nhìn từ hai chiều đường. Thay vì nhồi đủ mọi dịch vụ, nên ưu tiên tên thương hiệu, ngành hàng chính và một tín hiệu nhận diện thật dễ nhớ.",
    audience: [
      "Cửa hàng ngang hẹp, nằm xen giữa nhiều biển hiệu khác.",
      "Shop nhỏ trong phố, quán cafe takeaway, tiệm nail, nhà thuốc hoặc cửa hàng dịch vụ.",
      "Chủ cửa hàng muốn biển gọn nhưng vẫn nhìn rõ khi khách đi ngang.",
      "Mặt tiền có cửa kính, cột, mái che hoặc không gian treo biển hạn chế."
    ],
    solution: [
      "Dùng chữ lớn, ít dòng, màu nền và màu chữ tương phản mạnh.",
      "Bổ sung biển vẫy LED hoặc hộp đèn nhỏ để khách nhìn thấy từ hai hướng.",
      "Tận dụng decal kính để thêm thông tin phụ thay vì dồn hết lên biển chính.",
      "Nếu bán tối, nên tính LED hoặc đèn rọi ngay từ lúc thiết kế."
    ],
    avoid:
      "Không nên dùng quá nhiều font, quá nhiều số điện thoại hoặc danh sách dịch vụ dài. Biển nhỏ càng nhiều chữ càng khó đọc.",
    related: [
      ["Làm biển mặt tiền nhỏ", "lam-bien-quang-cao-mat-tien-nho-ha-noi"],
      ["Làm biển vẫy LED", "lam-bien-vay-led-ha-noi"],
      ["Làm decal kính cửa hàng", "lam-decal-kinh-cua-hang-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-cua-hang-trong-ngo-ha-noi",
    title: "Biển quảng cáo cho cửa hàng trong ngõ tại Hà Nội",
    seoTitle: "Biển cửa hàng trong ngõ Hà Nội",
    kicker: "Giúp khách tìm đúng địa chỉ",
    image: "bien-vay-tron-cua-hang-o-hui-ha-noi.jpg",
    description:
      "Tư vấn biển quảng cáo cho cửa hàng trong ngõ tại Hà Nội: biển vẫy, biển chỉ dẫn, hộp đèn nhỏ và nhận diện tại điểm rẽ.",
    lead:
      "Cửa hàng trong ngõ thường nhận khách từ Google Maps, Zalo hoặc Facebook, nhưng khi khách tới gần vẫn cần điểm nhận diện rõ. Biển không nhất thiết phải quá lớn, nhưng phải đặt đúng hướng nhìn, dễ đọc và đủ sáng nếu hoạt động buổi tối.",
    audience: [
      "Spa, salon, studio, phòng khám, lớp học hoặc cửa hàng dịch vụ trong ngõ.",
      "Địa chỉ khó tìm, có nhiều điểm rẽ hoặc không nằm ngay mặt phố.",
      "Cửa hàng cần nhận diện tại cửa và tại hướng khách đi vào.",
      "Mặt tiền nhỏ, chỉ đủ đặt biển vẫy hoặc hộp đèn gọn."
    ],
    solution: [
      "Làm biển vẫy nhỏ tại cửa để khách nhận ra từ xa hơn.",
      "Dùng biển chỉ dẫn ngắn nếu vị trí đầu ngõ hoặc điểm rẽ cho phép.",
      "Ghi rõ tên thương hiệu, số nhà, tầng/phòng nếu khách dễ nhầm địa chỉ.",
      "Kiểm tra ánh sáng buổi tối trước khi quyết định dùng biển không đèn."
    ],
    avoid:
      "Không nên chỉ đặt một tấm biển nhỏ sát cửa nếu khách phải tìm từ đầu ngõ. Cần tính hành trình khách đi tới cửa hàng.",
    related: [
      ["Làm biển trong ngõ", "lam-bien-quang-cao-trong-ngo-ha-noi"],
      ["Biển vẫy cửa hàng", "bien-vay-cua-hang-ha-noi"],
      ["Khảo sát làm biển Hà Nội", "khao-sat-lam-bien-quang-cao-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-quan-an-ban-toi-ha-noi",
    title: "Biển quảng cáo cho quán ăn bán tối tại Hà Nội",
    seoTitle: "Biển quán ăn bán tối Hà Nội",
    kicker: "Biển sáng, rõ món chính",
    image: "mau-bien-nha-hang-linh-dam-ha-noi.jpg",
    description:
      "Tư vấn biển quảng cáo cho quán ăn bán tối tại Hà Nội: hộp đèn LED, biển vẫy, biển menu và cách làm biển dễ nhìn sau 18h.",
    lead:
      "Quán ăn bán tối cần khách nhìn nhanh tên quán, món chính và vị trí lối vào. Ánh sáng biển là yếu tố quan trọng vì nhiều khách quyết định ghé quán khi đi ngang, đặc biệt ở tuyến phố đông hàng ăn.",
    audience: [
      "Quán phở, bún, cơm, lẩu nướng, bia hơi, đồ ăn nhanh hoặc nhà hàng nhỏ.",
      "Quán mở chủ yếu buổi chiều tối, cần biển rõ sau 18h.",
      "Mặt tiền có nhiều biển cạnh tranh, cần tăng độ nổi bật.",
      "Quán cần thêm bảng menu, bảng giá hoặc biển chỉ dẫn món."
    ],
    solution: [
      "Ưu tiên hộp đèn LED, chữ nổi sáng mặt hoặc đèn rọi biển chính.",
      "Tên quán và món chính phải lớn hơn thông tin phụ.",
      "Kết hợp biển vẫy hai mặt nếu khách đi từ hai chiều đường.",
      "Có thể làm thêm biển menu ngoài cửa để khách quyết định nhanh hơn."
    ],
    avoid:
      "Không nên dùng biển tối màu nhưng thiếu đèn. Ban ngày có thể đẹp, nhưng buổi tối khách sẽ khó đọc tên quán.",
    related: [
      ["Biển quán ăn Hà Nội", "bien-quang-cao-quan-an-ha-noi"],
      ["Làm biển buổi tối", "lam-bien-quang-cao-buoi-toi-ha-noi"],
      ["Làm biển menu quán ăn", "lam-bien-menu-quan-an-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-spa-salon-can-sang-trong-ha-noi",
    title: "Biển quảng cáo cho spa salon cần sang trọng tại Hà Nội",
    seoTitle: "Biển spa salon sang trọng Hà Nội",
    kicker: "Sạch, sáng, tạo tin cậy",
    image: "du-an-may-skin-bien-chu-noi-sang.jpg",
    description:
      "Tư vấn biển quảng cáo cho spa salon cần sang trọng tại Hà Nội: alu chữ nổi, mica LED, hộp đèn, backdrop logo và decal kính.",
    lead:
      "Spa, salon, thẩm mỹ và beauty studio cần biển tạo cảm giác sạch, sáng và đáng tin ngay từ mặt tiền. Với nhóm này, biển không nên quá nhiều chữ; cần tập trung vào logo, tên thương hiệu, ánh sáng và chất liệu hoàn thiện.",
    audience: [
      "Spa, salon tóc, nail, nối mi, clinic, beauty studio hoặc shop mỹ phẩm.",
      "Cửa hàng cần nâng hình ảnh chuyên nghiệp hơn để khách tin tưởng.",
      "Mặt tiền nhỏ nhưng muốn nhìn gọn và cao cấp.",
      "Cần đồng bộ biển ngoài trời, decal kính và backdrop bên trong."
    ],
    solution: [
      "Dùng alu chữ nổi, mica LED, inox hoặc chữ hắt sáng tùy ngân sách.",
      "Giữ bố cục thoáng, hạn chế liệt kê quá nhiều dịch vụ nhỏ.",
      "Kết hợp decal kính mờ hoặc logo kính để tăng cảm giác riêng tư.",
      "Nếu có lễ tân, nên làm backdrop logo để đồng bộ trải nghiệm khách."
    ],
    avoid:
      "Không nên dùng quá nhiều màu mạnh hoặc chữ dày đặc. Ngành làm đẹp cần biển gọn, sạch và tạo cảm giác tin cậy.",
    related: [
      ["Biển spa salon Hà Nội", "bien-quang-cao-spa-salon-ha-noi"],
      ["Làm biển shop mỹ phẩm", "lam-bien-shop-my-pham-ha-noi"],
      ["Backdrop logo lễ tân", "lam-backdrop-logo-le-tan-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-shop-can-nhan-dien-thuong-hieu-ha-noi",
    title: "Biển quảng cáo cho shop cần nhận diện thương hiệu tại Hà Nội",
    seoTitle: "Biển nhận diện thương hiệu cho shop",
    kicker: "Đồng bộ tên, màu, logo",
    image: "mau-bien-shop-quan-ao-ha-noi.jpg",
    description:
      "Tư vấn biển quảng cáo cho shop cần nhận diện thương hiệu tại Hà Nội: biển mặt tiền, biển vẫy, decal kính và logo trong cửa hàng.",
    lead:
      "Với shop thời trang, mỹ phẩm, phụ kiện hoặc cửa hàng bán lẻ, biển hiệu không chỉ để ghi tên mà còn tạo ấn tượng thương hiệu. Một mặt tiền đồng bộ màu, logo và ánh sáng sẽ giúp khách nhớ shop tốt hơn.",
    audience: [
      "Shop quần áo, mỹ phẩm, phụ kiện, giày dép, cửa hàng mẹ và bé hoặc showroom nhỏ.",
      "Cửa hàng có logo/màu thương hiệu nhưng chưa biết triển khai lên biển.",
      "Shop cần mặt tiền đẹp để chụp ảnh, check-in và đăng mạng xã hội.",
      "Chủ shop muốn làm đồng bộ biển ngoài, biển vẫy, decal kính và logo trong shop."
    ],
    solution: [
      "Chọn một màu chủ đạo và một màu phụ, tránh pha quá nhiều màu trên biển.",
      "Dùng chữ nổi hoặc hộp đèn nếu cần nổi bật buổi tối.",
      "Đặt logo và tên shop ở vị trí nhìn nhanh nhất từ đường.",
      "Dùng decal kính hoặc bảng phụ để đưa thông tin khuyến mại, tránh làm rối biển chính."
    ],
    avoid:
      "Không nên thay đổi font, màu và bố cục giữa biển ngoài trời, ảnh fanpage và không gian trong shop. Nhận diện lệch làm khách khó nhớ thương hiệu.",
    related: [
      ["Biển shop quần áo Hà Nội", "bien-shop-quan-ao-ha-noi"],
      ["Biển shop thời trang", "bien-shop-thoi-trang-ha-noi"],
      ["Làm biển mặt tiền cửa hàng", "lam-bien-mat-tien-cua-hang-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-cua-hang-can-tiet-kiem-chi-phi-ha-noi",
    title: "Biển quảng cáo cho cửa hàng cần tiết kiệm chi phí tại Hà Nội",
    seoTitle: "Biển cửa hàng tiết kiệm chi phí",
    kicker: "Làm đúng phần tạo hiệu quả",
    image: "mau-bien-alu-chu-noi-shop-ha-noi.jpg",
    description:
      "Tư vấn biển quảng cáo cho cửa hàng cần tiết kiệm chi phí tại Hà Nội: ưu tiên hạng mục chính, tận dụng khung cũ và chọn vật liệu phù hợp.",
    lead:
      "Tiết kiệm chi phí không có nghĩa là chọn phương án rẻ nhất. Cách đúng là xác định hạng mục nào tạo nhận diện và kéo khách tốt nhất, phần nào có thể làm sau, phần nào không nên cắt giảm vì ảnh hưởng độ bền và an toàn.",
    audience: [
      "Cửa hàng mới mở, ngân sách ban đầu còn hạn chế.",
      "Chủ shop muốn có biển đủ rõ trước, sau đó nâng cấp khi ổn định hơn.",
      "Mặt bằng có khung cũ, nền cũ hoặc biển cũ có thể tận dụng một phần.",
      "Cần so sánh nhiều phương án vật liệu trước khi chốt."
    ],
    solution: [
      "Ưu tiên biển chính dễ đọc, đúng tên thương hiệu và ngành hàng.",
      "Tận dụng khung cũ nếu còn chắc, nhưng cần kiểm tra gỉ sét và điểm bắt.",
      "Chọn vật liệu theo thời gian sử dụng dự kiến, không chỉ theo giá thấp nhất.",
      "Tách hạng mục phụ như decal, biển chỉ dẫn, biển menu sang giai đoạn sau nếu cần."
    ],
    avoid:
      "Không nên cắt giảm phần khung, chống nước LED hoặc độ dễ đọc của chữ. Đây là các phần ảnh hưởng trực tiếp tới an toàn và hiệu quả biển.",
    related: [
      ["Cách tiết kiệm chi phí làm biển", "cach-tiet-kiem-chi-phi-lam-bien-quang-cao-ha-noi"],
      ["Biển 1m2 giá bao nhiêu", "bien-quang-cao-1m2-gia-bao-nhieu-ha-noi"],
      ["Báo giá theo m2", "bao-gia-lam-bien-quang-cao-theo-m2-ha-noi"]
    ]
  },
  {
    slug: "bien-quang-cao-cho-cua-hang-can-sua-bien-cu-ha-noi",
    title: "Biển quảng cáo cho cửa hàng cần sửa biển cũ tại Hà Nội",
    seoTitle: "Sửa biển cũ cho cửa hàng Hà Nội",
    kicker: "Sửa đúng phần hỏng, thay khi cần",
    image: "du-an-wet-brush-bien-mat-tien.jpg",
    description:
      "Tư vấn biển quảng cáo cho cửa hàng cần sửa biển cũ tại Hà Nội: thay LED, thay mặt biển, sửa chữ nổi, gia cố khung hoặc làm mới.",
    lead:
      "Biển cũ xuống màu, cháy đèn, bong chữ hoặc rung khung không phải lúc nào cũng cần thay toàn bộ. Cần kiểm tra mặt biển, chữ nổi, khung xương, nguồn điện và nhận diện hiện tại để quyết định sửa, thay một phần hay làm mới.",
    audience: [
      "Cửa hàng có biển bạc màu, chữ bong, LED chập chờn hoặc hộp đèn tối.",
      "Chủ cửa hàng muốn đổi tên, đổi logo nhưng chưa biết có tận dụng được khung cũ không.",
      "Biển cũ vẫn còn vị trí tốt nhưng hình ảnh không còn chuyên nghiệp.",
      "Cần sửa nhanh để không ảnh hưởng hoạt động kinh doanh."
    ],
    solution: [
      "Chụp ảnh toàn cảnh biển cũ, cận cảnh phần hỏng và vị trí nguồn điện.",
      "Kiểm tra khung xương trước khi quyết định thay mặt hoặc thay chữ.",
      "Nếu LED hỏng, cần kiểm tra cả nguồn và dây, không chỉ thay điểm sáng lỗi.",
      "Nếu đổi thương hiệu, nên xem lại toàn bộ màu nền, tỉ lệ chữ và ánh sáng."
    ],
    avoid:
      "Không nên chỉ vá tạm phần nhìn thấy nếu khung hoặc điện đã xuống cấp. Sửa sai phần gốc có thể khiến biển hỏng lại nhanh.",
    related: [
      ["Sửa chữa biển quảng cáo Hà Nội", "sua-chua-bien-quang-cao-ha-noi"],
      ["Dấu hiệu cần sửa hoặc thay biển", "dau-hieu-can-sua-chua-thay-moi-bien-quang-cao"],
      ["Thay mặt bạt biển quảng cáo", "thay-mat-bat-bien-quang-cao-ha-noi"]
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

function renderHeader() {
  return `<header class="site-header" data-header>
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
          <a href="../${hub.slug}/">Theo nhu cầu</a>
          <a href="../bien-quang-cao-theo-nganh-ha-noi/">Theo ngành</a>
          <a href="../lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi/">Hà Nội</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  return `<footer class="site-footer">
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
    </div>`;
}

function renderHub() {
  const pageUrl = `${baseUrl}/${hub.slug}/`;
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: hub.title,
    description: hub.description,
    url: pageUrl,
    itemListElement: pages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: `${baseUrl}/${page.slug}/`
    }))
  };

  const cards = pages
    .map(
      (page) => `
                <a href="../${page.slug}/">
                  <strong>${escapeHtml(page.title)}</strong>
                  <span>${escapeHtml(page.lead)}</span>
                </a>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(hub.title)} | Bông Sen Trắng</title>
    <meta name="description" content="${escapeHtml(hub.description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${pageUrl}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="../assets/images/du-an-pink-fruit-flower-bien-mat-tien.jpg" fetchpriority="high">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:site_name" content="Bông Sen Trắng">
    <meta property="og:title" content="${escapeHtml(hub.title)}">
    <meta property="og:description" content="${escapeHtml(hub.description)}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${baseUrl}/assets/images/du-an-pink-fruit-flower-bien-mat-tien.jpg">
    <meta property="og:image:alt" content="${escapeHtml(hub.title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(hub.title)}">
    <meta name="twitter:description" content="${escapeHtml(hub.description)}">
    <meta name="twitter:image" content="${baseUrl}/assets/images/du-an-pink-fruit-flower-bien-mat-tien.jpg">
    <script type="application/ld+json">
${JSON.stringify(itemListJson, null, 2)}
    </script>
  </head>
  <body>
    <a class="skip-link" href="#noi-dung">Chuyển tới nội dung</a>
    ${renderHeader()}
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <span>Theo nhu cầu</span>
            </nav>
            <p class="section-kicker">Chọn theo tình huống thực tế</p>
            <h1>${escapeHtml(hub.title)}</h1>
            <p>Cùng là làm biển quảng cáo nhưng mỗi khách cần một hướng khác nhau: có người cần kịp khai trương, có người cần biển sáng buổi tối, có người chỉ cần sửa lại biển cũ. Chọn đúng nhu cầu giúp báo giá nhanh và tránh làm thừa.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${business.phoneHref}">Gọi ${business.phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${business.phoneHref}" target="_blank" rel="noopener">Gửi ảnh qua Zalo</a>
            </div>
          </div>
          <img src="../assets/images/du-an-pink-fruit-flower-bien-mat-tien.jpg" alt="${escapeHtml(hub.title)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>
      <section class="section page-content">
        <div class="container content-main sitemap-main">
          <section class="content-block sitemap-group">
            <h2>Chọn tình huống gần nhất</h2>
            <div class="sitemap-grid">
${cards}
            </div>
          </section>
        </div>
      </section>
    </main>
    ${renderFooter()}
    <script src="../assets/js/main.js"></script>
  </body>
</html>`;
}

function renderFaq(page) {
  return [
    [
      `Báo giá ${page.title.toLowerCase()} cần gửi gì?`,
      "Cần gửi ảnh mặt tiền hoặc vị trí lắp, kích thước dự kiến, địa chỉ tại Hà Nội, logo/nội dung cần làm và thời gian mong muốn hoàn thiện."
    ],
    [
      "Có thể tư vấn trước qua Zalo không?",
      "Có. Ảnh mặt tiền giúp tư vấn vật liệu, kiểu biển, kích thước và hướng thi công ban đầu trước khi khảo sát."
    ],
    [
      "Có nhận khảo sát tại Hà Nội không?",
      "Có. Với biển lớn, vị trí treo cao, cần đấu điện hoặc tận dụng khung cũ, nên khảo sát để báo giá sát hơn."
    ],
    [
      "Có phương án tiết kiệm chi phí không?",
      "Có. Có thể ưu tiên hạng mục chính, tận dụng phần cũ nếu còn tốt và tách phần phụ sang giai đoạn sau."
    ]
  ];
}

function renderPage(page) {
  const pageUrl = `${baseUrl}/${page.slug}/`;
  const seoTitle = page.seoTitle || page.title;
  const faqs = renderFaq(page);
  const faqHtml = faqs
    .map(
      ([question, answer]) => `
                <details>
                  <summary>${escapeHtml(question)}</summary>
                  <p>${escapeHtml(answer)}</p>
                </details>`
    )
    .join("\n");

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
        serviceType: "Tư vấn làm biển quảng cáo theo nhu cầu khách hàng"
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
    <title>${escapeHtml(seoTitle)} | Bông Sen Trắng</title>
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
    ${renderHeader()}
    <main id="noi-dung">
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="../">Trang chủ</a>
              <span>/</span>
              <a href="../${hub.slug}/">Theo nhu cầu</a>
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
            <section class="content-block">
              <h2>Phù hợp với khách nào?</h2>
              <ul class="area-list">
                ${listItems(page.audience)}
              </ul>
            </section>
            <section class="content-block">
              <h2>Phương án nên ưu tiên</h2>
              <ul class="check-list">
                ${listItems(page.solution)}
              </ul>
            </section>
            <section class="content-block price-note">
              <h2>Điểm cần tránh</h2>
              <p>${escapeHtml(page.avoid)}</p>
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
              <p>Chụp mặt tiền hoặc vị trí cần lắp, gửi qua Zalo để tư vấn phương án và chi phí.</p>
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
    ${renderFooter()}
    <script src="../assets/js/main.js"></script>
  </body>
</html>`;
}

const hubDir = path.join(root, hub.slug);
fs.mkdirSync(hubDir, { recursive: true });
fs.writeFileSync(path.join(hubDir, "index.html"), renderHub(), "utf8");

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated customer-intent SEO hub and ${pages.length} pages`);
