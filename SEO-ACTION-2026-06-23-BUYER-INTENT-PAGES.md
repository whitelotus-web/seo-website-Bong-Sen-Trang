# SEO action 2026-06-23: Buyer-intent pages

## Mục tiêu

Bổ sung nhóm trang có ý định mua cao, phục vụ khách đã gần quyết định gọi báo giá:

- tìm xưởng/đơn vị làm biển quảng cáo
- tìm dịch vụ trọn gói
- sửa biển hộp đèn, thay mặt bạt, lắp LED
- bảo trì/nâng cấp biển cũ
- tư vấn thiết kế trước khi sản xuất

## Trang đã thêm

- `/xuong-lam-bien-quang-cao-ha-noi/`
- `/don-vi-lam-bien-quang-cao-uy-tin-ha-noi/`
- `/thi-cong-bang-hieu-quang-cao-tron-goi-ha-noi/`
- `/lam-bang-hieu-quang-cao-ha-noi/`
- `/lam-bien-quang-cao-cua-hang-moi-mo-ha-noi/`
- `/sua-bien-hop-den-led-ha-noi/`
- `/thay-mat-bat-bien-quang-cao-ha-noi/`
- `/lap-den-led-bien-quang-cao-ha-noi/`
- `/bao-tri-bien-quang-cao-ha-noi/`
- `/tu-van-thiet-ke-bien-quang-cao-ha-noi/`

## Kỹ thuật

- Thêm `scripts/generate-buyer-intent-pages.js`.
- Gắn generator vào `npm run build`.
- Mỗi trang có canonical, meta description, Open Graph, ảnh, Service JSON-LD, FAQ JSON-LD và liên kết nội bộ tới trang liên quan.
- Service index tự gom thêm các URL mới.

## Kiểm tra

- `npm run build`: OK.
- `npm run check:seo`: 138 pages checked, 0 warnings.
- `npm run check:jsonld`: 139 blocks in 138 pages.
- Image sitemap: 138 pages with images.
