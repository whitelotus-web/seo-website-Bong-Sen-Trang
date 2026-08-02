# SEO action - 2026-08-02 - Day 12

## Mục tiêu

Bổ sung tín hiệu cấu trúc cho các trang nội dung đã có breadcrumb hiển thị, giúp công cụ tìm kiếm hiểu mối quan hệ giữa trang chủ và trang hiện tại.

## Audit trước thay đổi

- Website có 296 trang HTML.
- 49 trang đã có `BreadcrumbList` trong JSON-LD.
- 247 trang chưa có `BreadcrumbList`; trang chủ không cần breadcrumb.
- `npm run check:seo`: 296 trang, 0 cảnh báo.
- `npm run check:jsonld`: 320 block JSON-LD trước thay đổi.

## Đã làm

- Thêm `scripts/add-breadcrumb-schema.js` vào pipeline build.
- Với trang chưa có breadcrumb, script đọc URL canonical và breadcrumb đang hiển thị để tạo schema `Trang chủ -> trang hiện tại`.
- Không tạo trang mới, không đổi URL, canonical, title, nội dung hay sitemap.
- Không ghi đè các trang đã có `BreadcrumbList`.

## Kiểm tra sau thay đổi

- Build thành công.
- Đã thêm 246 breadcrumb schema; giữ nguyên 49 trang đã có.
- 295/296 trang có breadcrumb schema; trang chủ được giữ nguyên.
- `npm run check:seo`: 296 trang, 0 cảnh báo.
- `npm run check:jsonld`: 566 block JSON-LD trong 296 trang.

## Theo dõi

Đây là tín hiệu hỗ trợ crawl và hiểu cấu trúc, không phải cam kết tăng click ngay lập tức. Sau khi deploy, theo dõi GSC theo quốc gia Việt Nam và nhóm truy vấn làm biển quảng cáo, bảng hiệu, báo giá tại Hà Nội.
