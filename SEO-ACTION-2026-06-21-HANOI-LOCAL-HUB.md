# SEO action 2026-06-21: tang tin hieu local Ha Noi

## Muc tieu

- Tang ro tin hieu SEO target Ha Noi, khong de do luong Cloudflare bot gay hieu nham.
- Tao trang hub trung tam cho keyword `lam bien quang cao Ha Noi`.
- Gom cac trang quan/hang muc/dich vu vao mot diem noi bo manh hon.

## Da lam

- Them script `scripts/generate-hanoi-hub.js`.
- Them script nay vao pipeline build trong `package.json`.
- Tao trang moi:
  - `/lam-bien-quang-cao-ha-noi/`
- Noi dung trang moi gom:
  - H1 `Lam bien quang cao tai Ha Noi`.
  - NAP: `So 92E O Cho Dua, Dong Da, Ha Noi`, SDT `0989 521 881`.
  - Dich vu uu tien: thi cong, bao gia, sua chua, lam nhanh, mau bien, nang luc.
  - Danh sach khu vuc Ha Noi: Dong Da, Ba Dinh, Cau Giay, Hoan Kiem, Hai Ba Trung, Thanh Xuan, Hoang Mai, Ha Dong, Tay Ho, Long Bien, Nam Tu Liem, Bac Tu Liem, Gia Lam.
  - Loai bien/nganh hang: alu chu noi, hop den LED, Hiflex, chu noi, nha hang, cafe, spa, shop, showroom.
  - Quy trinh bao gia qua anh mat tien va Zalo.
  - FAQ.
- Them JSON-LD:
  - `LocalBusiness`
  - `Service`
  - `ItemList`
  - `FAQPage`
- Them link tu section khu vuc tren trang chu ve hub Ha Noi.
- Them CSS `local-grid`, `material-list`.

## Kiem tra

- `npm run build`: OK.
- `node scripts/check-seo.js`: `SEO OK: 57 pages checked, 0 warnings`.
- `node scripts/check-jsonld.js`: `JSON-LD OK: 58 blocks in 57 pages`.
- Live page OK:
  - Co `Lam bien quang cao tai Ha Noi`.
  - Co `Khu vuc nhan lam bien quang cao tai Ha Noi`.
  - Co `Dong Da, Ha Noi`.
  - Co CTA `Bao gia bien tai Ha Noi`.
  - Co `FAQPage`.
- Trang chu live co link ve `/lam-bien-quang-cao-ha-noi/`.
- Sitemap live co 57 URL va co trang hub Ha Noi.
- IndexNow:
  - Submitted 57 URLs.
  - HTTP 200.

## URL

- https://lambienquangcaohanoi.io.vn/lam-bien-quang-cao-ha-noi/
- https://lambienquangcaohanoi.io.vn/sitemap.xml
