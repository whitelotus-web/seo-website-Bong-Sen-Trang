# SEO Action - 2026-07-19 - Day 7

## Mục tiêu

Tăng độ nhất quán của tín hiệu doanh nghiệp địa phương cho Google khi đánh giá dịch vụ làm biển quảng cáo tại Hà Nội, đặc biệt quanh địa chỉ 92E Ô Chợ Dừa, Đống Đa.

## Đã triển khai

- Bổ sung `GeoCoordinates`, `hasMap` và `ContactPoint` vào schema `LocalBusiness` của cụm trang dịch vụ được sinh từ nguồn chính.
- Bổ sung cùng tín hiệu cho hub `/lam-bien-quang-cao-ha-noi/` và trang local `/lam-bien-quang-cao-dong-da/`.
- Thêm liên kết hiển thị tới vị trí Google Maps trên hub Hà Nội và trang Đống Đa để người dùng có thể mở đường đi hoặc xác nhận khu vực liên hệ.
- Giữ nguyên NAP thật:
  - Công ty TNHH Truyền thông Bông Sen Trắng
  - Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội
  - 0989 521 881
- Không thêm review, điểm sao, dự án hoặc địa điểm không có bằng chứng.

## Kiểm tra cục bộ

- `npm run build`: đạt; build 296 trang và image sitemap.
- `npm run check:seo`: `SEO OK: 296 pages checked, 0 warnings`.
- `npm run check:jsonld`: `JSON-LD OK: 297 blocks in 296 pages`.
- `git diff --check`: đạt; các cảnh báo còn lại chỉ là quy đổi LF/CRLF của Git trên Windows.

## Đánh giá

Đây là tín hiệu hỗ trợ hiểu doanh nghiệp và vị trí, không phải cam kết tăng hạng hoặc có click ngay lập tức. Sau khi deploy cần chờ Google thu thập lại; khi xem Search Console nên lọc quốc gia Việt Nam và theo dõi riêng các trang `/lam-bien-quang-cao-ha-noi/`, `/lam-bien-quang-cao-dong-da/`, trang thi công và báo giá.

## Việc tiếp theo

- Theo dõi impressions, truy vấn và CTR trong Search Console sau khi dữ liệu mới cập nhật.
- Khi có ảnh công trình thật mới, bổ sung vào đúng cụm dịch vụ/ngành hàng với tên file và alt mô tả chính xác.
- Không tiếp tục tạo URL hàng loạt nếu chưa có dữ liệu truy vấn hoặc nội dung riêng đủ hữu ích.
