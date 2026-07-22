# SEO Action - 2026-07-22 - Day 8

## Mục tiêu

Tăng tín hiệu local và khả năng chuyển đổi trên các trang có ý định liên hệ cao: báo giá biển quảng cáo và nhóm trang hướng dẫn khách gửi ảnh mặt tiền tại Hà Nội.

## Đã triển khai

- Bổ sung `GeoCoordinates`, `hasMap` và `ContactPoint` vào schema `LocalBusiness` của trang báo giá Hà Nội.
- Bổ sung cùng tín hiệu cho 8 trang nhu cầu chuyển đổi do `generate-hanoi-conversion-pages.js` sinh ra.
- Hiển thị địa chỉ doanh nghiệp và link Google Maps tại khu vực liên hệ của các trang này.
- Trang báo giá có thêm thông tin rõ ràng về địa chỉ 92E Ô Chợ Dừa để củng cố NAP và giúp khách xác nhận vị trí trước khi gửi địa chỉ thi công.
- Không thay đổi khung giá tham khảo, không thêm review giả, điểm sao hoặc dự án không có bằng chứng.

## Audit trước khi sửa

- `robots.txt`: HTTP 200.
- `sitemap.xml`: HTTP 200, 296 URL.
- `sitemap-google.xml`: HTTP 200, 296 URL.
- `sitemap-priority.xml`: HTTP 200, 12 URL.
- HTTP chuyển sang HTTPS bằng 301.
- Canonical trang báo giá và trang nhu cầu đều trỏ đúng domain `lambienquangcaohanoi.io.vn`.

## Kiểm tra sau build

- `npm run build`: đạt.
- `npm run check:seo`: `SEO OK: 296 pages checked, 0 warnings`.
- `npm run check:jsonld`: `JSON-LD OK: 297 blocks in 296 pages`.
- `git diff --check`: đạt; cảnh báo LF/CRLF chỉ là quy đổi dòng của Git trên Windows.

## Đánh giá

Đây là cải thiện nền tảng cho hiểu local entity và trải nghiệm liên hệ, không phải cam kết có click ngay. Cần theo dõi GSC sau khi Google thu thập lại, ưu tiên các truy vấn chứa “báo giá”, “gửi ảnh”, “làm biển quảng cáo Hà Nội” và lọc quốc gia Việt Nam.

## Việc tiếp theo

- Đối chiếu impressions, CTR và truy vấn của các URL báo giá/chuyển đổi trong GSC.
- Cải thiện title/meta theo dữ liệu thực tế thay vì tiếp tục mở rộng URL.
- Bổ sung ảnh công trình thật mới nếu có, kèm alt mô tả đúng ngành và đúng bối cảnh.
