# SEO action 2026-07-08: cụm trang theo nhu cầu khách hàng

Mục tiêu: mở rộng nhóm truy vấn có ý định mua cao cho domain chính `https://lambienquangcaohanoi.io.vn/`.

Đã triển khai:

- Thêm hub `/lam-bien-quang-cao-theo-nhu-cau-khach-hang-ha-noi/`.
- Thêm 8 trang theo tình huống thực tế của khách hàng:
  - `/bien-quang-cao-cho-cua-hang-sap-khai-truong-ha-noi/`
  - `/bien-quang-cao-cho-cua-hang-mat-tien-nho-ha-noi/`
  - `/bien-quang-cao-cho-cua-hang-trong-ngo-ha-noi/`
  - `/bien-quang-cao-cho-quan-an-ban-toi-ha-noi/`
  - `/bien-quang-cao-cho-spa-salon-can-sang-trong-ha-noi/`
  - `/bien-quang-cao-cho-shop-can-nhan-dien-thuong-hieu-ha-noi/`
  - `/bien-quang-cao-cho-cua-hang-can-tiet-kiem-chi-phi-ha-noi/`
  - `/bien-quang-cao-cho-cua-hang-can-sua-bien-cu-ha-noi/`
- Mỗi trang có canonical domain mới, hreflang vi-VN/x-default, tín hiệu geo Hà Nội, Service schema, FAQ schema, ảnh thực tế và CTA gọi/Zalo.
- Trang `/tat-ca-dich-vu-bien-quang-cao-ha-noi/` tự nhận thêm nhóm link nội bộ mới.
- Sitemap XML, sitemap text và image sitemap đã cập nhật.
- Bổ sung link nội bộ từ trang chủ tới hub và các trang chuyển đổi cao: khai trương, quán ăn bán tối, sửa biển cũ.
- Bổ sung block điều hướng từ trang báo giá sang nhóm trang theo tình huống để khách chọn đúng nhu cầu trước khi xem giá.

Kiểm tra:

- `npm run build`: đạt.
- `npm run check:seo`: 295 trang, 0 warning.
- `npm run check:jsonld`: 296 JSON-LD block hợp lệ.
- Đã deploy Cloudflare Pages production.
- Đã deploy bản cập nhật internal links từ trang chủ và trang báo giá.

Việc nên làm tiếp:

- Gửi lại `/sitemap.xml` trong Google Search Console nếu GSC chưa tự đọc lại.
- Nếu còn quota lập chỉ mục, ưu tiên hub mới và 2 trang chuyển đổi cao: khai trương, quán ăn bán tối.
