# SEO action 2026-07-09: trang liên hệ local trust

Mục tiêu: tăng tín hiệu local/NAP và tăng tỷ lệ chuyển đổi cho khách tìm dịch vụ làm biển quảng cáo tại Hà Nội.

Đã triển khai:

- Thêm trang `/lien-he-lam-bien-quang-cao-ha-noi/`.
- Trang có NAP rõ ràng:
  - Công ty TNHH Truyền thông Bông Sen Trắng
  - Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội
  - 0989 521 881
- Thêm CTA gọi/Zalo, link Google Maps, fanpage và hướng dẫn gửi ảnh để báo giá.
- Thêm JSON-LD: LocalBusiness, ContactPage, BreadcrumbList, FAQPage.
- Thêm link từ trang chủ tới trang liên hệ.
- Đưa trang liên hệ vào sitemap thường, image sitemap và sitemap priority.

Kiểm tra:

- `npm run build`: đạt.
- `npm run check:seo`: 296 trang, 0 warning.
- `npm run check:jsonld`: 297 block hợp lệ.
- Live URL trả 200: `https://lambienquangcaohanoi.io.vn/lien-he-lam-bien-quang-cao-ha-noi/`.
- `/sitemap-priority.xml` live có 118 URL và đã có trang liên hệ.

Việc nên làm tiếp:

- Gửi lại `/sitemap-priority.xml` trong Google Search Console nếu tiện.
- Cập nhật Google Business/Facebook để website/contact đều dùng domain mới.
