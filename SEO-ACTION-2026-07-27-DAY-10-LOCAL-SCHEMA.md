# SEO action - 2026-07-27 - Day 10

## Mục tiêu

Làm cho toàn bộ cụm nội dung của Bông Sen Trắng được Google nhận diện nhất quán là nội dung của một doanh nghiệp làm biển quảng cáo tại Hà Nội, thay vì chỉ các trang dịch vụ chính có thông tin doanh nghiệp.

## Đã làm

- Bổ sung LocalBusiness JSON-LD dùng chung cho các trang còn thiếu qua `scripts/add-local-seo-signals.js`.
- Thực thể dùng cùng thông tin đã xác minh:
  - Công ty TNHH Truyền thông Bông Sen Trắng
  - Số 92E Ô Chợ Dừa, Đống Đa, Hà Nội
  - Điện thoại/Zalo 0989 521 881
  - Tọa độ Hà Nội và liên kết Google Maps
  - Fanpage chính thức
- Không tạo URL mới, không thay đổi URL/canonical.
- Cập nhật `scripts/check-seo.js` để báo lỗi nếu một trang trong tương lai mất LocalBusiness JSON-LD.

## Kiểm tra

- 296/296 trang có LocalBusiness JSON-LD.
- Build thành công.
- `npm run check:seo`: `SEO OK: 296 pages checked, 0 warnings`.
- `npm run check:jsonld`: `JSON-LD OK: 320 blocks in 296 pages`.
- Sitemap vẫn giữ 296 URL canonical.

## Triển khai

- Domain chính: https://lambienquangcaohanoi.io.vn/
- Cloudflare Pages preview: https://797ee434.lam-bien-quang-cao-bong-sen-trang.pages.dev

## Theo dõi

Đây là tín hiệu giúp Google hiểu thực thể và khu vực phục vụ, không tạo ra lượt nhấp ngay lập tức. Theo dõi GSC sau 7-14 ngày, ưu tiên quốc gia Việt Nam và các trang dịch vụ Hà Nội; không gửi yêu cầu lập chỉ mục hàng loạt nếu tài khoản đang hết hạn ngạch.
