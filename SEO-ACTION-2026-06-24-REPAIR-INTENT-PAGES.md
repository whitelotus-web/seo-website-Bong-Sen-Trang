# SEO action 2026-06-24: Repair intent pages

## Mục tiêu

Bắt nhóm truy vấn có nhu cầu gọi nhanh khi biển đang hỏng hoặc xuống cấp:

- sửa biển cháy đèn
- thay nguồn LED
- sửa chữ nổi mica/inox
- gia cố khung biển
- vệ sinh, bảo trì, sửa biển vẫy

## Trang đã thêm

- `/sua-bien-quang-cao-chay-den-ha-noi/`
- `/sua-bien-quang-cao-bi-mo-bac-mau-ha-noi/`
- `/thay-nguon-led-bien-quang-cao-ha-noi/`
- `/sua-chu-noi-mica-inox-ha-noi/`
- `/gia-co-khung-bien-quang-cao-ha-noi/`
- `/ve-sinh-bien-quang-cao-ha-noi/`
- `/sua-bien-vay-cua-hang-ha-noi/`
- `/sua-bien-alu-chu-noi-ha-noi/`

## Kỹ thuật

- Thêm `scripts/generate-repair-intent-pages.js`.
- Gắn generator vào `npm run build`.
- Mỗi trang có canonical, meta description, Open Graph, ảnh, Service JSON-LD, FAQ JSON-LD và liên kết nội bộ tới nhóm sửa chữa/bảo trì.

## Kiểm tra

- `npm run build`: OK.
- `npm run check:seo`: 146 pages checked, 0 warnings.
- `npm run check:jsonld`: 147 blocks in 146 pages.
- Không còn cụm nội dung nội bộ như "SEO theo", "giúp Google", "Khách tìm".
