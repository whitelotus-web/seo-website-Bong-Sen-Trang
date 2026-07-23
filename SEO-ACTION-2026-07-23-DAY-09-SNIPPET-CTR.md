# SEO action - 2026-07-23 - Day 09

## Mục tiêu

Tăng khả năng nhận nhấp từ kết quả Google cho các trang có ý định liên hệ cao tại Hà Nội bằng cách làm rõ dịch vụ, lợi ích và hành động tiếp theo trong title/meta description.

## Đã làm

- Tối ưu snippet trang sửa chữa biển:
  - `/sua-chua-bien-quang-cao-ha-noi/`
  - Title mới: `Sửa chữa biển quảng cáo Hà Nội | Thay LED, sửa hộp đèn`
  - Meta description mới tập trung vào LED, nguồn, mặt bạt, hộp đèn, gia cố khung và gửi ảnh hiện trạng qua Zalo.
- Tối ưu snippet trang làm gấp:
  - `/lam-bien-quang-cao-can-gap-ha-noi/`
  - Title mới: `Làm biển quảng cáo cần gấp Hà Nội | Kiểm tra tiến độ`
  - Meta description mới hướng khách gửi ảnh, ngày cần xong và nội dung biển để kiểm tra phương án.
- Tối ưu snippet trang mặt tiền cửa hàng:
  - `/lam-bien-mat-tien-cua-hang-ha-noi/`
  - Title mới: `Làm biển mặt tiền cửa hàng Hà Nội | Báo giá nhanh`
  - Meta description mới nêu các vật liệu chính và lời mời gửi ảnh để báo giá.
- Giữ nguyên URL, canonical, H1 và cấu trúc liên kết hiện có; không tạo URL hàng loạt.

## Kiểm tra

- Build: thành công, 296 trang.
- `npm run check:seo`: `SEO OK: 296 pages checked, 0 warnings`.
- `npm run check:jsonld`: `JSON-LD OK: 297 blocks in 296 pages`.
- Kiểm tra liên kết nội bộ: 296 trang, 0 trang mồ côi, 0 liên kết hỏng.
- Domain chính: cả 3 URL trả HTTP 200, canonical đúng `https://lambienquangcaohanoi.io.vn/`.
- `/robots.txt`, `/sitemap.xml`, `/image-sitemap.xml`: HTTP 200.

## Triển khai

- Cloudflare Pages preview: https://b3eb60c9.lam-bien-quang-cao-bong-sen-trang.pages.dev
- Domain chính: https://lambienquangcaohanoi.io.vn/

## Theo dõi

Không kết luận tăng click ngay sau khi đổi snippet. Theo dõi GSC trong 7-14 ngày với các truy vấn có ý định mua như `sửa chữa biển quảng cáo Hà Nội`, `làm biển mặt tiền cửa hàng Hà Nội` và `làm biển quảng cáo cần gấp Hà Nội`; so sánh impressions, CTR và vị trí trước/sau khi Google crawl lại.
