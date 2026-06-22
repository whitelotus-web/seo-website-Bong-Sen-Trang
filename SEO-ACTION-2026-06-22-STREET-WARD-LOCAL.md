# SEO action 2026-06-22: mo rong theo ten duong, phuong

## Muc tieu

- Bat cac truy van dang: `lam bien quang cao + ten duong`, `lam bien quang cao + phuong/khu vuc`.
- Uu tien cac tuyen duong gan dia chi that tai Dong Da truoc de tranh tao doorway page mong.

## Da lam

- Them script `scripts/generate-street-ward-pages.js`.
- Them script vao pipeline build trong `package.json`.
- Tao 10 trang local theo tuyen duong/khu vuc:
  - `/lam-bien-quang-cao-o-cho-dua/`
  - `/lam-bien-quang-cao-xa-dan/`
  - `/lam-bien-quang-cao-thai-ha/`
  - `/lam-bien-quang-cao-chua-boc/`
  - `/lam-bien-quang-cao-tay-son/`
  - `/lam-bien-quang-cao-nguyen-luong-bang/`
  - `/lam-bien-quang-cao-lang-ha/`
  - `/lam-bien-quang-cao-ton-duc-thang/`
  - `/lam-bien-quang-cao-kham-thien/`
  - `/lam-bien-quang-cao-pham-ngoc-thach/`
- Tao 1 hub:
  - `/lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi/`
- Da co them trang:
  - `/lam-bien-quang-cao-gan-day-ha-noi/`
- Moi trang duong/phuong co:
  - Title/meta rieng.
  - H1 theo ten duong.
  - Phuong/khu vuc thuong goi.
  - Tuyen duong lan can.
  - Dich vu phu hop: alu chu noi, hop den LED, Hiflex, sua bien cu, bao gia, mau bien.
  - CTA goi/Zalo.
  - FAQ.
  - JSON-LD `LocalBusiness`, `Service`, `FAQPage`.
- Hub Ha Noi co them link ve:
  - `lam bien quang cao gan day`
  - `theo tuyen duong, phuong`

## Kiem tra

- `npm run build`: OK.
- `node scripts/check-seo.js`: `SEO OK: 69 pages checked, 0 warnings`.
- `node scripts/check-jsonld.js`: `JSON-LD OK: 70 blocks in 69 pages`.
- Live check OK:
  - `/lam-bien-quang-cao-o-cho-dua/`
  - `/lam-bien-quang-cao-xa-dan/`
  - `/lam-bien-quang-cao-theo-tuyen-duong-phuong-ha-noi/`
  - `/lam-bien-quang-cao-gan-day-ha-noi/`
- Sitemap live:
  - 69 URL.
  - Co street hub.
  - Co O Cho Dua.
  - Co Xa Dan.
- IndexNow:
  - Submitted 69 URLs.
  - HTTP 200.

## Ghi chu chien luoc

- Khong tao trang cho moi con ngo/duong nho ngay lap tuc de tranh noi dung mong.
- Uu tien cac tuyen gan dia chi that va co nhu cau mat tien thuong gap.
- Lan tiep theo co the mo rong theo Cầu Giấy/Ba Đình hoặc cac phuong/khu vuc co nhieu shop/cafe/spa.
