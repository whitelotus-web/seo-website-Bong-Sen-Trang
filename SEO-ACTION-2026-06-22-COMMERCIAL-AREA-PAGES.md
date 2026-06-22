# SEO action 2026-06-22 - Cum khu vuc thuong mai Ha Noi

Muc tieu: mo rong SEO local theo cac cum khu vuc co nhieu nhu cau lam bien quang cao, thay vi tao qua nhieu trang mong theo tung duong.

Da trien khai 5 trang moi:

- `/lam-bien-quang-cao-duy-tan-cau-giay-ha-noi/`
- `/lam-bien-quang-cao-my-dinh-nam-tu-liem-ha-noi/`
- `/lam-bien-quang-cao-trung-hoa-nhan-chinh-ha-noi/`
- `/lam-bien-quang-cao-van-quan-ha-dong-ha-noi/`
- `/lam-bien-quang-cao-ho-tay-tay-ho-ha-noi/`

Noi dung moi:

- Moi trang co title, meta description, H1, FAQ, gallery, link noi bo va schema rieng.
- Giai quyet cac intent:
  - Duy Tan/Cau Giay: van phong, showroom, cafe, nha hang.
  - My Dinh/Nam Tu Liem: showroom, cua hang, van phong, nha hang, phong tap.
  - Trung Hoa/Nhan Chinh: spa, phong kham, van phong, cafe, nha hang.
  - Van Quan/Ha Dong: cua hang, nha thuoc, cafe, shop, ban le.
  - Ho Tay/Tay Ho: cafe, nha hang, spa, boutique, dich vu cao cap.
- Them link tu hub Ha Noi.
- Service index tu dong cap nhat 86 link noi bo.
- Sitemap/image sitemap cap nhat 88 trang.

Kiem tra:

- `npm run build`: OK, 88 pages with images.
- `node scripts/check-seo.js`: SEO OK, 88 pages checked, 0 warnings.
- `node scripts/check-jsonld.js`: JSON-LD OK, 89 blocks in 88 pages.
- Live 200 cho 5 trang moi.
- `npm run submit:indexnow`: IndexNow submitted 88 URLs, HTTP 200.

Ghi chu:

- Day la nhom local landing page co kha nang bat query dai nhu `lam bien quang cao Duy Tan`, `lam bien quang cao My Dinh`, `bien quang cao Ho Tay`, `lam bien quang cao Van Quan`.
- Theo doi Search Console trong 1-3 tuan de xem query nao bat dau co impression.
