# SEO action - 2026-07-28 - Day 11

## Mục tiêu

Rà lại hiệu năng phân phối nội dung tĩnh và giảm việc HTML phải xác thực lại ở mỗi lần khách Hà Nội mở trang.

## Audit

- Ảnh trong `assets/images` đã được kiểm tra: ảnh lớn nhất khoảng 0,56 MB, chưa thấy file ảnh quá nặng gây rủi ro rõ ràng cho LCP.
- Trang chủ, hub Hà Nội, trang báo giá, robots và sitemap đều trả HTTP 200.
- Trước thay đổi, HTML domain chính trả `Cache-Control: public, max-age=0, must-revalidate` và Cloudflare báo `DYNAMIC`.

## Đã làm

- Thêm `CDN-Cache-Control: public, max-age=300, stale-while-revalidate=86400` cho HTML trong `_headers`.
- Giữ nguyên cache ảnh `public, max-age=31536000, immutable`.
- Giữ sitemap/XML ở chế độ revalidate để Google luôn đọc được bản mới.

## Kiểm tra sau deploy

- Domain chính: `https://lambienquangcaohanoi.io.vn/` trả HTTP 200.
- HTML domain chính hiện trả `Cache-Control: public, max-age=300, stale-while-revalidate=86400`.
- Ảnh vẫn trả cache dài hạn; sitemap vẫn giữ cache ngắn/revalidate.
- Build và các kiểm tra trước deploy vẫn đạt: 296 trang, 0 cảnh báo SEO, 320 JSON-LD blocks.

## Triển khai

- Preview: https://088fb88b.lam-bien-quang-cao-bong-sen-trang.pages.dev
- Domain chính: https://lambienquangcaohanoi.io.vn/

## Theo dõi

Đây là tối ưu phân phối giúp trải nghiệm và khả năng tải ổn định hơn, không phải cam kết tăng click tức thì. Theo dõi GSC và dữ liệu liên hệ sau khi Google crawl tiếp; không cần gửi lại toàn bộ sitemap vì URL không đổi.
