const fs = require("fs");
const path = require("path");

const root = process.cwd();
const baseUrl = "https://lambienquangcaohanoi.io.vn";
const phone = "0989 521 881";
const phoneHref = "0989521881";
const address = "Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const commonLinks = [
  ["Báo giá biển quảng cáo Hà Nội", "../bao-gia-bien-quang-cao-ha-noi/"],
  ["Thi công biển quảng cáo Hà Nội", "../thi-cong-bien-quang-cao-ha-noi/"],
  ["Biển alu chữ nổi Hà Nội", "../bien-alu-chu-noi-ha-noi/"],
  ["Biển hộp đèn LED Hà Nội", "../bien-hop-den-led-ha-noi/"],
  ["Biển bạt Hiflex Hà Nội", "../bien-bat-hiflex-ha-noi/"],
  ["Báo giá biển bạt theo kích thước", "../bao-gia-bien-bat-hiflex-ha-noi/"],
  ["Làm biển mặt tiền cửa hàng", "../lam-bien-mat-tien-cua-hang-ha-noi/"],
  ["Làm biển quảng cáo cần gấp", "../lam-bien-quang-cao-can-gap-ha-noi/"],
  ["Tất cả dịch vụ", "../tat-ca-dich-vu-bien-quang-cao-ha-noi/"]
];

const pages = [
  {
    slug: "bao-gia-bien-alu-chu-noi-ha-noi",
    title: "Báo giá biển alu chữ nổi Hà Nội 2026 | Bông Sen Trắng",
    description: "Giá biển alu chữ nổi Hà Nội 2026: nền alu tham khảo 450.000–750.000đ/m²; chữ, LED, khung và lắp đặt tính theo cấu hình. Gửi ảnh để nhận tư vấn.",
    h1: "Báo giá biển alu chữ nổi tại Hà Nội 2026",
    kicker: "Bảng giá alu chữ nổi",
    image: "du-an-oppo-samsung.jpg",
    imageAlt: "Biển alu chữ nổi mặt tiền cửa hàng tại Hà Nội",
    rows: [
      ["Tấm nền alu ngoài trời (chưa gồm chữ nổi)", "450.000 - 750.000đ/m2", "Phụ thuộc độ dày alu, thương hiệu vật liệu và hệ khung."],
      ["Chữ nổi mica không đèn", "Liên hệ theo chiều cao chữ", "Tính theo kích thước chữ, độ dày mica và độ phức tạp logo."],
      ["Chữ nổi mica có LED", "Liên hệ theo mẫu", "Thêm chi phí LED, nguồn, dây điện và chống nước."],
      ["Chữ inox vàng/trắng gương", "Liên hệ theo mẫu", "Giá phụ thuộc inox 201/304, chiều cao chữ và kiểu hoàn thiện."],
      ["Khung xương, gia cố", "150.000 - 300.000đ/m2", "Tùy mặt bằng, độ cao, vị trí bắt vít và tải trọng biển."]
    ],
    sections: [
      ["Khi nào nên chọn alu chữ nổi?", [
        "Biển alu chữ nổi phù hợp cửa hàng, showroom, văn phòng, đại lý và mặt tiền cần nhận diện bền, sạch, dễ nhìn.",
        "Nếu cần nổi bật buổi tối, có thể kết hợp chữ mica hút nổi, LED âm chữ hoặc LED hắt chân chữ."
      ]],
      ["Một bộ biển alu chữ nổi thường gồm những gì?", [
        "Phần nền gồm tấm alu và hệ khung xương phía sau. Trên nền là chữ hoặc logo bằng mica, inox, formex hay vật liệu kết hợp; phương án phát sáng có thêm LED, bộ nguồn và đường dây điện.",
        "Báo giá cần tách rõ nền, chữ, hệ sáng, khung gia cố, tháo dỡ biển cũ và lắp đặt. Nếu chỉ so đơn giá m2 của nền alu, anh/chị chưa thể biết tổng chi phí hoàn thiện."
      ]],
      ["Chọn chữ mica hay chữ inox trên nền alu?", [
        "Chữ mica phù hợp khi cần màu sắc linh hoạt và có thể làm mặt phát sáng. Chữ inox tạo bề mặt kim loại chắc, gọn, hợp cửa hàng hoặc văn phòng cần cảm giác bền và trang trọng.",
        "Kiểu chữ, độ cao chữ và khoảng cách nhìn quan trọng hơn việc cố thêm nhiều nội dung. Với mặt tiền nhỏ, nên ưu tiên tên thương hiệu và ngành hàng chính để khách đi đường đọc nhanh."
      ]],
      ["Thông tin cần gửi để báo giá sát", [
        "Gửi ảnh mặt tiền, kích thước ngang x cao, file logo, yêu cầu có đèn hay không, địa chỉ lắp đặt và thời gian mong muốn.",
        "Với biển cao hoặc mặt dựng cũ, nên khảo sát trước để kiểm tra điểm bắt, khung xương và phương án chống nước."
      ]],
      ["Nghiệm thu và bảo hành nên ghi rõ", [
        "Trước khi bàn giao nên kiểm tra độ phẳng của nền, mép alu, độ chắc của chữ, ánh sáng LED, bộ nguồn và đường dây. Ban đêm cần nhìn lại độ đều sáng và khả năng đọc từ hướng khách thường đi tới.",
        "Phạm vi bảo hành phụ thuộc vật liệu, hệ LED, nguồn điện và điều kiện ngoài trời. Nội dung này nên được ghi trong báo giá thay vì chỉ trao đổi miệng."
      ]]
    ],
    gallery: [
      ["du-an-oppo-samsung.jpg", "Biển nền alu kết hợp chữ nổi cho cửa hàng điện thoại"],
      ["mau-bien-alu-chu-noi-shop-ha-noi.jpg", "Mẫu biển alu chữ nổi cho mặt tiền shop tại Hà Nội"],
      ["du-an-may-skin-bien-chu-noi-sang.jpg", "Chữ nổi phát sáng trên nền mặt dựng cửa hàng"],
      ["du-an-olive-vino-chu-noi-hat-sang.jpg", "Biển chữ nổi hắt sáng quan sát vào buổi tối"]
    ]
  },
  {
    slug: "bao-gia-bien-hop-den-led-ha-noi",
    title: "Báo giá biển hộp đèn LED Hà Nội 2026 | Bông Sen Trắng",
    description: "Bảng giá tham khảo biển hộp đèn LED tại Hà Nội 2026: hộp đèn Hiflex, mica, 3M, biển vẫy LED và hộp đèn mặt tiền.",
    h1: "Báo giá biển hộp đèn LED tại Hà Nội 2026",
    kicker: "Bảng giá hộp đèn",
    image: "du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
    imageAlt: "Biển hộp đèn và chữ sáng mặt tiền cửa hàng tại Hà Nội",
    rows: [
      ["Hộp đèn Hiflex khung sắt", "450.000 - 750.000đ/m2", "Phù hợp cửa hàng nhỏ, quán ăn, điểm bán cần sáng buổi tối."],
      ["Hộp đèn mica", "1.500.000 - 2.800.000đ/m2", "Thẩm mỹ hơn, phù hợp spa, showroom, clinic, shop cao cấp."],
      ["Hộp đèn 3M", "2.000.000 - 3.800.000đ/m2", "Màu đẹp, độ bền cao, phù hợp chuỗi cửa hàng hoặc vị trí cần nhận diện mạnh."],
      ["Biển vẫy LED nhỏ", "950.000đ/bộ trở lên", "Tùy kích thước, vật liệu mặt và loại LED sử dụng."],
      ["Thay LED/nguồn hộp đèn cũ", "Liên hệ theo hiện trạng", "Cần kiểm tra nguồn, dây, mặt biển và mức độ thấm nước."]
    ],
    sections: [
      ["Hộp đèn LED phù hợp trường hợp nào?", [
        "Hộp đèn LED phù hợp mặt tiền cần nhìn rõ vào buổi tối, tuyến phố đông người qua lại, quán ăn, cafe, salon, nhà thuốc và cửa hàng bán lẻ.",
        "Chất lượng biển phụ thuộc nhiều vào độ đều sáng, chống nước, tản nhiệt và cách đi nguồn LED."
      ]],
      ["Cách chọn loại hộp đèn", [
        "Nếu cần tiết kiệm, hộp đèn Hiflex là lựa chọn thực tế. Nếu cần thẩm mỹ hơn, chọn mica hoặc 3M tùy ngân sách.",
        "Không nên chỉ chọn theo giá thấp nhất; biển sáng không đều hoặc nước vào nguồn sẽ làm chi phí sửa về sau cao hơn."
      ]]
    ]
  },
  {
    slug: "bao-gia-bien-bat-hiflex-ha-noi",
    title: "Báo giá biển bạt khung sắt Hà Nội 2026 | Bông Sen Trắng",
    description: "Báo giá biển bạt khung sắt Hà Nội từ 180.000đ/m², kèm bảng giá theo kích thước 2×1, 3×2, 4×3 và giá in Hiflex riêng. Gửi ảnh mặt tiền qua Zalo 0989 521 881.",
    h1: "Báo giá biển bạt khung sắt Hà Nội 2026",
    kicker: "Bảng giá Hiflex",
    image: "bien-tam-lon-ha-noi.jpg",
    imageAlt: "Biển bạt Hiflex mặt tiền tại Hà Nội",
    rows: [
      ["In bạt Hiflex riêng", "40.000 - 90.000đ/m2", "Tùy số lượng, độ dày bạt, chất lượng in và thời gian lấy hàng."],
      ["Biển bạt khung sắt", "180.000 - 350.000đ/m2", "Gồm khung, căng bạt, lắp đặt cơ bản tùy mặt bằng."],
      ["Biển bạt lót tôn", "300.000 - 450.000đ/m2", "Bền và phẳng hơn bạt căng thường, phù hợp mặt tiền ngoài trời."],
      ["Biển bạt khai trương", "Liên hệ theo kích thước", "Phù hợp cần làm nhanh, chi phí thấp, dùng ngắn hạn hoặc thay nội dung."],
      ["Thay mặt bạt trên khung cũ", "Liên hệ theo hiện trạng", "Cần kiểm tra khung còn chắc, han gỉ và kích thước thực tế."]
    ],
    sizeTable: {
      heading: "Giá biển bạt theo kích thước phổ biến",
      note: "Tính bằng đơn giá tham khảo ở bảng trên, nhân với diện tích. Chưa gồm phí khảo sát, tháo dỡ biển cũ hoặc phát sinh tại mặt bằng; đơn hàng nhỏ có thể áp mức tối thiểu. Báo giá chính xác sau khi xem ảnh và kích thước thực tế.",
      head: ["Kích thước", "Diện tích", "In bạt riêng", "Biển hoàn thiện (khung + bạt + lắp cơ bản)"],
      rows: [
        ["2 × 1 m", "2 m²", "80.000 – 180.000đ", "360.000 – 700.000đ"],
        ["3 × 1,5 m", "4,5 m²", "180.000 – 400.000đ", "810.000 – 1.570.000đ"],
        ["4 × 2 m", "8 m²", "320.000 – 720.000đ", "1.440.000 – 2.800.000đ"],
        ["5 × 2,5 m", "12,5 m²", "500.000 – 1.100.000đ", "2.250.000 – 4.370.000đ"],
        ["6 × 3 m", "18 m²", "720.000 – 1.600.000đ", "3.240.000 – 6.300.000đ"]
      ]
    },
    faq: [
      ["Bảng giá trên đã gồm khung và lắp đặt chưa?",
        "Chưa. Bảng giá tách riêng in bạt Hiflex, biển bạt khung sắt, bạt lót tôn và thay mặt bạt trên khung cũ. Dòng “biển bạt khung sắt” mới là mức gồm khung, căng bạt và lắp đặt cơ bản."],
      ["Biển bạt 3 × 2 m khoảng bao nhiêu tiền?",
        "Theo đơn giá tham khảo đang công khai, biển 3 × 2 m (6 m²) rơi vào khoảng 240.000 – 540.000đ nếu chỉ in bạt, và khoảng 1.080.000 – 2.100.000đ nếu làm trọn bộ khung, bạt và lắp đặt cơ bản. Mức thực tế thay đổi theo mặt bằng và hiện trạng khung."],
      ["Có tận dụng khung cũ để chỉ thay mặt bạt không?",
        "Có, nếu khung còn chắc, chân cột không lung lay và kích thước đúng nhu cầu. Cần ảnh khung hiện tại để kiểm tra mức han gỉ trước khi chốt phương án."],
      ["Cần gửi những gì để nhận báo giá sát?",
        "Ảnh mặt tiền, kích thước ngang × cao, địa chỉ lắp đặt, thời gian mong muốn và cho biết có tận dụng khung cũ hay không."],
      ["Biển bạt có phù hợp dùng lâu dài không?",
        "Biển bạt phù hợp khi cần nhanh, tiết kiệm hoặc thay nội dung định kỳ. Nếu đây là nhận diện chính dùng nhiều năm ở mặt phố đông người, nên cân nhắc alu chữ nổi hoặc hộp đèn LED."]
    ],
    galleryHeading: "Ảnh biển bạt và mặt tiền đã thi công",
    gallery: [
      ["bien-tam-lon-ha-noi.jpg", "Biển bạt Hiflex mặt tiền tại Hà Nội"],
      ["du-an-pink-fruit-flower-bien-mat-tien.jpg", "Mặt tiền cửa hàng Thanh Xuân Hà Nội"],
      ["thi-cong-mat-tien-cua-hang-ha-noi.jpg", "Thi công hoàn thiện mặt tiền cửa hàng tại Hà Nội"]
    ],
    sections: [
      ["Giá biển bạt khung sắt được tính thế nào?", [
        "Giá in bạt Hiflex riêng và giá biển hoàn thiện có khung là hai hạng mục khác nhau. Bảng trên tách riêng in bạt, biển khung sắt, biển lót tôn và thay bạt trên khung cũ để anh/chị dễ so sánh.",
        "Các mức giá đang công khai là giá tham khảo. Báo giá cụ thể phụ thuộc kích thước, hiện trạng khung và điều kiện lắp đặt tại mặt bằng. Khi gửi yêu cầu, hãy kèm ảnh mặt tiền, kích thước ngang × cao, địa chỉ thi công và cho biết có tận dụng khung cũ không."
      ]],
      ["Ưu điểm của biển bạt Hiflex", [
        "Biển bạt Hiflex có chi phí thấp, làm nhanh, dễ thay nội dung, phù hợp cửa hàng mới mở, khai trương hoặc mặt tiền lớn.",
        "Nhược điểm là độ sang và độ bền không bằng alu chữ nổi hoặc hộp đèn cao cấp."
      ]],
      ["Khi nào nên nâng cấp khỏi Hiflex?", [
        "Nếu biển là nhận diện chính dài hạn, vị trí mặt phố đông hoặc thương hiệu cần nhìn chuyên nghiệp, nên cân nhắc alu chữ nổi hoặc hộp đèn.",
        "Có thể dùng Hiflex giai đoạn đầu để tiết kiệm, sau đó nâng cấp khi đã ổn định kinh doanh."
      ]],
      ["Chọn kích thước biển bạt theo bề rộng mặt tiền", [
        "Đo phần mặt tiền trống thực tế rồi chừa mỗi bên 10–20 cm để biển không chạm góc tường, mái hiên hoặc ống thoát nước. Với mặt tiền 4 m, bề ngang biển thường chọn 3,5–4 m; mặt tiền 6–8 m có thể tách thành biển chính và biển phụ.",
        "Tỉ lệ dễ đọc từ lòng đường thường rơi vào khoảng 3:1 đến 4:1 giữa chiều ngang và chiều cao. Chiều cao dưới 0,8 m khó đọc khi khách đi xe, nên ưu tiên tên thương hiệu và ngành hàng chính thay vì đưa nhiều dòng chữ nhỏ."
      ]],
      ["Khi nào chỉ cần thay bạt, khi nào nên làm mới cả khung", [
        "Nếu khung còn chắc, chân cột không lung lay và kích thước vẫn đúng nhu cầu, thay mặt bạt thường tiết kiệm hơn làm mới toàn bộ. Cần ảnh khung hiện tại để kiểm tra mức han gỉ trước khi chốt.",
        "Khung han gỉ nặng, chân cột yếu hoặc mặt bằng vừa đổi kích thước là lúc nên tính lại cả hệ khung, để tránh phải tháo làm lần hai."
      ]]
    ]
  },
  {
    slug: "lam-bien-quang-cao-gia-re-ha-noi",
    title: "Biển quảng cáo giá rẻ Hà Nội | Từ 180.000đ/m2",
    description: "Làm biển quảng cáo giá rẻ tại Hà Nội: biển bạt khung sắt tham khảo từ 180.000đ/m2, thay mặt bạt, tận dụng khung cũ và alu cơ bản. Zalo 0989 521 881.",
    h1: "Làm biển quảng cáo giá rẻ tại Hà Nội",
    kicker: "Phương án tiết kiệm",
    image: "du-an-gao-viet-bien-mat-tien-do.jpg",
    imageAlt: "Biển quảng cáo cửa hàng tối ưu chi phí tại Hà Nội",
    rows: [
      ["In bạt Hiflex riêng", "40.000 - 90.000đ/m2", "Tùy độ dày bạt, chất lượng in, số lượng và thời gian lấy hàng."],
      ["Biển bạt khung sắt", "180.000 - 350.000đ/m2", "Khoảng giá tham khảo cho khung, căng bạt và lắp đặt cơ bản tùy mặt bằng."],
      ["Biển bạt lót tôn", "300.000 - 450.000đ/m2", "Phẳng và bền hơn bạt căng thông thường, phù hợp mặt tiền ngoài trời."],
      ["Thay mặt bạt trên khung cũ", "Báo giá theo hiện trạng", "Tiết kiệm hơn làm mới toàn bộ nếu khung còn chắc và đúng kích thước."],
      ["Alu cơ bản + chữ nổi", "Báo giá theo kích thước", "Chi phí cao hơn Hiflex nhưng bền và chuyên nghiệp hơn cho biển dùng dài hạn."]
    ],
    sections: [
      ["Cách chọn phương án tiết kiệm đúng nhu cầu", [
        "Cửa hàng mới mở hoặc cần thay nội dung nhanh có thể chọn Hiflex. Mặt tiền dùng lâu nên cân nhắc alu cơ bản kết hợp chữ nổi để giảm chi phí sửa và thay lại về sau.",
        "Nếu biển cũ còn khung chắc, thay mặt bạt, thay chữ hoặc thay LED thường tiết kiệm hơn làm mới toàn bộ. Cần xem ảnh và kiểm tra hiện trạng trước khi chốt phương án."
      ]],
      ["Giá rẻ nhưng không nên rẻ bằng mọi giá", [
        "Biển quá rẻ thường cắt giảm khung, LED, chống nước hoặc chất lượng in. Rủi ro là nhanh xuống màu, sáng không đều, phải sửa sớm.",
        "Cách tiết kiệm hợp lý là chọn đúng vật liệu theo thời gian sử dụng, vị trí lắp đặt và mục tiêu kinh doanh."
      ]],
      ["Bông Sen Trắng tư vấn theo ngân sách", [
        "Anh/chị có thể gửi ngân sách dự kiến, ảnh mặt tiền và kích thước. Bông Sen Trắng sẽ đề xuất phương án vừa đủ dùng, tránh làm thừa hạng mục không cần thiết.",
        "Mục tiêu là biển rõ, bền trong điều kiện sử dụng thực tế và không vượt ngân sách."
      ]]
    ]
  }
];

function priceTable(rows) {
  return `
              <div class="price-table-wrap">
                <table class="price-table">
                  <thead>
                    <tr>
                      <th>Hạng mục</th>
                      <th>Giá/phương án</th>
                      <th>Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map(([a, b, c]) => `
                    <tr>
                      <td>${escapeHtml(a)}</td>
                      <td><strong>${escapeHtml(b)}</strong></td>
                      <td>${escapeHtml(c)}</td>
                    </tr>`).join("")}
                  </tbody>
                </table>
              </div>`;
}

function sizeTable({ heading, note, head, rows }) {
  return `
              <section class="content-block">
                <h2>${escapeHtml(heading)}</h2>
                <div class="price-table-wrap">
                  <table class="price-table">
                    <thead>
                      <tr>
                        ${head.map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map((row) => `
                      <tr>
                        <td>${escapeHtml(row[0])}</td>
                        <td>${escapeHtml(row[1])}</td>
                        <td><strong>${escapeHtml(row[2])}</strong></td>
                        <td><strong>${escapeHtml(row[3])}</strong></td>
                      </tr>`).join("")}
                    </tbody>
                  </table>
                </div>
                <p><small>${escapeHtml(note)}</small></p>
              </section>`;
}

function faqBlock(faq) {
  return `
              <section class="content-block">
                <h2>Câu hỏi thường gặp về báo giá biển bạt</h2>
                <div class="faq-list">
                  ${faq.map(([q, a]) => `<details>
                    <summary>${escapeHtml(q)}</summary>
                    <p>${escapeHtml(a)}</p>
                  </details>`).join("\n                  ")}
                </div>
                <p>Còn thắc mắc khác, gọi <a href="tel:${phoneHref}">${phone}</a> hoặc nhắn Zalo để được xem ảnh và tư vấn trực tiếp.</p>
              </section>`;
}

function renderPage(page) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "Công ty TNHH Truyền thông Bông Sen Trắng",
        url: `${baseUrl}/`,
        image: `${baseUrl}/assets/images/logo-whitelotus.png`,
        telephone: "+84989521881",
        priceRange: "$$",
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
        name: page.h1,
        description: page.description,
        areaServed: "Hà Nội",
        provider: { "@id": `${baseUrl}/#localbusiness` }
      }
    ]
  };

  if (page.faq) {
    jsonLd["@graph"].push({
      "@type": "FAQPage",
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    });
  }

  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#1d8dcc">
    <link rel="canonical" href="${baseUrl}/${page.slug}/">
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
    <meta property="og:url" content="${baseUrl}/${page.slug}/">
    <meta property="og:image" content="${baseUrl}/assets/images/${page.image}">
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}">
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
          <a href="../#dich-vu">Dịch vụ</a>
          <a href="../#du-an">Dự án</a>
          <a href="../hinh-anh-bien-quang-cao-thuc-te-ha-noi/">Mẫu biển</a>
          <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực</a>
          <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          <a href="../#quy-trinh">Quy trình</a>
          <a href="../bao-gia-bien-quang-cao-ha-noi/">Báo giá</a>
          <a class="nav-call" href="tel:${phoneHref}">Gọi ${phone}</a>
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
            <p>${escapeHtml(page.description)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:${phoneHref}">Gọi ${phone}</a>
              <a class="btn btn-secondary" href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Nhắn Zalo báo giá</a>
            </div>
          </div>
          <img src="../assets/images/${page.image}" alt="${escapeHtml(page.imageAlt)}" loading="eager" fetchpriority="high" decoding="async" width="960" height="720">
        </div>
      </section>

      <section class="section page-content">
        <div class="container content-layout">
          <article class="content-main">
            <section class="content-block">
              <h2>Bảng tham khảo</h2>
${priceTable(page.rows)}
            </section>
${page.sizeTable ? sizeTable(page.sizeTable) : ""}
            ${page.sections.map(([heading, paragraphs]) => `
            <section class="content-block">
              <h2>${escapeHtml(heading)}</h2>
              ${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("\n              ")}
            </section>`).join("\n")}
 ${page.faq ? faqBlock(page.faq) : ""}
 ${page.gallery ? `
             <section class="content-block">
               <h2>${escapeHtml(page.galleryHeading || "Ảnh biển alu và chữ nổi đã thực hiện")}</h2>
              <div class="case-gallery">
                ${page.gallery.map(([image, alt]) => `<figure>
                  <img src="../assets/images/${image}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" width="1200" height="900">
                  <figcaption>${escapeHtml(alt)}</figcaption>
                </figure>`).join("\n                ")}
              </div>
            </section>` : ""}
            <section class="content-block">
              <h2>Nhận báo giá sát theo mặt tiền</h2>
              <p>Gửi ảnh mặt tiền, kích thước dự kiến, địa chỉ lắp đặt và mẫu thiết kế nếu có qua Zalo ${phone}. Xem thêm <a href="../gui-anh-bao-gia-bien-quang-cao-ha-noi/">mẫu thông tin cần gửi để báo giá</a>. Bông Sen Trắng sẽ tư vấn phương án phù hợp ngân sách trước khi chốt thi công.</p>
            </section>
          </article>
          <aside class="content-sidebar" aria-label="Thông tin liên hệ">
            <div class="sidebar-card">
              <h2>Gửi ảnh để báo giá</h2>
              <p>Thông tin càng rõ thì báo giá càng sát: ảnh mặt tiền, kích thước, địa chỉ, loại biển mong muốn.</p>
              <a class="btn btn-primary" href="tel:${phoneHref}">Gọi ${phone}</a>
              <a class="btn btn-light" href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Nhắn Zalo</a>
            </div>
            <div class="sidebar-card related-card">
              <h2>Trang liên quan</h2>
              ${commonLinks.filter(([, href]) => !href.includes(page.slug)).map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join("\n              ")}
            </div>
            <address class="sidebar-card">
              <strong>Công ty TNHH Truyền thông Bông Sen Trắng</strong>
              <span>${address}</span>
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
            ${address}<br>
            <a href="tel:${phoneHref}">${phone}</a><br>
            <a href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Zalo ${phone}</a><br>
            <a href="https://www.facebook.com/whitelotus.vn/" target="_blank" rel="noopener">Fanpage Bông Sen Trắng</a><br>
            <a href="../nang-luc-thi-cong-bien-quang-cao-ha-noi/">Năng lực thi công</a><br>
            <a href="../tat-ca-dich-vu-bien-quang-cao-ha-noi/">Tất cả dịch vụ</a>
          </address>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© <span data-year></span> Bông Sen Trắng. Làm biển quảng cáo tại Hà Nội.</p>
      </div>
    </footer>
    <div class="mobile-cta" aria-label="Liên hệ nhanh trên di động">
      <a href="tel:${phoneHref}">Gọi</a>
      <a href="https://zalo.me/${phoneHref}" target="_blank" rel="noopener">Zalo</a>
    </div>
    <script src="../assets/js/main.js"></script>
  </body>
</html>
`;
}

for (const page of pages) {
  fs.mkdirSync(path.join(root, page.slug), { recursive: true });
  fs.writeFileSync(path.join(root, page.slug, "index.html"), renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} competitor price pages`);
