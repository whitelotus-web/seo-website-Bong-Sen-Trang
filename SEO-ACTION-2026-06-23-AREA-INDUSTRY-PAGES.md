# SEO action 2026-06-23: Area + industry pages

## Mục tiêu

Tăng độ phủ truy vấn có ý định mua cao tại Hà Nội theo công thức:

- biển + ngành hàng + quận/khu vực
- làm biển quảng cáo + ngành hàng + Hà Nội
- báo giá/sửa/làm mới biển cho từng nhóm cửa hàng

## Trang đã thêm

- `/bien-quan-cafe-cau-giay-ha-noi/`
- `/bien-nha-hang-tay-ho-ha-noi/`
- `/bien-shop-quan-ao-dong-da-ha-noi/`
- `/bien-spa-salon-cau-giay-ha-noi/`
- `/bien-nha-thuoc-dong-da-ha-noi/`
- `/bien-phong-kham-thanh-xuan-ha-noi/`
- `/bien-tra-sua-ha-dong-ha-noi/`
- `/bien-gara-o-to-long-bien-ha-noi/`
- `/bien-van-phong-nam-tu-liem-ha-noi/`
- `/bien-sieu-thi-mini-ha-dong-ha-noi/`
- `/bien-salon-toc-ba-dinh-ha-noi/`
- `/bien-quan-an-hoang-mai-ha-noi/`

## Kỹ thuật

- Thêm `scripts/generate-area-industry-pages.js`.
- Gắn generator vào `npm run build`.
- Mỗi trang có canonical, meta description, Open Graph, ảnh, FAQ JSON-LD, Service JSON-LD và liên kết nội bộ tới trang quận/ngành/báo giá.
- Service index tự gom thêm 12 URL mới.
- Sitemap tăng lên 100 trang có ảnh.

## Kiểm tra

- `npm run build`: OK.
- `npm run check:seo`: 100 pages checked, 0 warnings.
- `npm run check:jsonld`: 101 blocks in 100 pages.

## Ghi chú

Các trang này không thay thế trang dịch vụ chính. Chúng dùng để bắt truy vấn dài, sát nhu cầu như "biển quán cafe Cầu Giấy", "biển nhà thuốc Đống Đa", "biển spa Cầu Giấy".
