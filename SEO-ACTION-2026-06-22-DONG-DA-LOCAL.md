# SEO action 2026-06-22: tang manh trang local Dong Da

## Muc tieu

- Uu tien cum local gan doanh nghiep nhat: `lam bien quang cao Dong Da`.
- Tang kha nang khach tim kiem quanh O Cho Dua / Xa Dan / Thai Ha thay duoc website.
- Lam ro NAP va khu vuc phuc vu gan dia chi doanh nghiep.

## Da lam

- Them script `scripts/generate-dongda-page.js`.
- Them script nay vao pipeline build trong `package.json`.
- Viet lai trang:
  - `/lam-bien-quang-cao-dong-da/`
- Noi dung moi gom:
  - Title: `Lam bien quang cao Dong Da | 92E O Cho Dua, Ha Noi`.
  - H1: `Lam bien quang cao tai Dong Da`.
  - NAP ro: `So 92E O Cho Dua, Dong Da, Ha Noi`, `0989 521 881`.
  - Nhan manh khu vuc gan O Cho Dua.
  - Cac tuyen pho local: O Cho Dua, Xa Dan, Nguyen Luong Bang, Tay Son, Chua Boc, Thai Ha, Lang Ha, Ton Duc Thang, Kham Thien, Nguyen Chi Thanh, Pham Ngoc Thach, Giang Vo.
  - Dich vu phu hop: alu chu noi, hop den LED, Hiflex, sua bien cu, bao gia, mau bien thuc te.
  - Quy trinh bao gia theo anh mat tien/Zalo.
  - Anh tham khao cong trinh.
  - FAQ.
- Them JSON-LD:
  - `LocalBusiness`
  - `Service`
  - `FAQPage`

## Kiem tra

- `npm run build`: OK.
- `node scripts/check-seo.js`: `SEO OK: 57 pages checked, 0 warnings`.
- `node scripts/check-jsonld.js`: `JSON-LD OK: 58 blocks in 57 pages`.
- Live page OK:
  - Co `Lam bien quang cao tai Dong Da`.
  - Co `92E O Cho Dua`.
  - Co `Tuyen pho Dong Da`.
  - Co `O Cho Dua`, `Xa Dan`, `Thai Ha`.
  - Co `FAQPage`.
- Sitemap live:
  - Co `/lam-bien-quang-cao-dong-da/`.
  - 57 URL.
- IndexNow:
  - Submitted 57 URLs.
  - HTTP 200.

## URL

- https://lambienquangcaohanoi.io.vn/lam-bien-quang-cao-dong-da/
- https://lambienquangcaohanoi.io.vn/sitemap.xml
