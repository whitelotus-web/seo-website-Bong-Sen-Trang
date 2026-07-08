# SEO measurement 2026-06-18

## Tom tat

- Website live: `https://lambienquangcaohanoi.io.vn/`
- Google da thay ro trang chu qua truy van `site:lam-bien-quang-cao-bong-sen-trang.netlify.app`.
- Google cung thay Fanpage Facebook co gan website moi.
- Voi nhom tu khoa chung nhu `lam bien quang cao tai Ha Noi`, ket qua cong khai mau van chu yeu la cac doi thu/website lau nam. Chua thay website Bông Sen Trắng xuat hien on dinh trong nhom ket qua dau.
- Cac trang con chua co bang chung index rong qua truy van cong khai. Day la binh thuong voi site moi, nhung can tiep tuc theo doi trong Google Search Console.

## Do luong ky thuat live

- Live sitemap text: 51 URL.
- 51/51 URL trong sitemap tra HTTP 200.
- Mau toc do fetch live:
  - Trang chu: HTTP 200, khoang 432 ms, 30305 bytes.
  - Trang danh muc dich vu: HTTP 200, khoang 382 ms, 37154 bytes.
  - Trang lam bien nhanh Ha Noi: HTTP 200, khoang 266 ms, 15551 bytes.
  - Trang thi cong bien quang cao Ha Noi: HTTP 200, khoang 71 ms, 14855 bytes.
- `npm run check:jsonld`: OK, 52 JSON-LD blocks trong 51 trang.
- `npm run check:seo`: OK, 51 trang, 0 warnings.

## Loi phat hien va xu ly

- Phat hien `image-sitemap.xml` co lan them URL `/dist/` do script quet thu muc build cu.
- Da sua `scripts/generate-image-sitemap.js` de bo qua `dist` va cac thu muc khong phai trang SEO.
- Da build/deploy lai sau fix.
- Image sitemap sau fix: 51 URL entries, 127 image entries, khong con `/dist/`.
- Live `image-sitemap.xml`: OK.
- Live `robots.txt`: OK, co khai bao `image-sitemap.xml`.
- Submit IndexNow sau fix: 51 URL, HTTP 200.

## Moi truong

- Phat hien o C het dung luong khi chay npm (`ENOSPC`).
- Da don npm cache va Temp, giai phong dung luong o C len khoang 10.91 GB sau deploy.

## Nhan dinh

- Nen tiep tuc uu tien Google Search Console: request index thu cong cho trang chu, trang danh muc dich vu, va 2 trang dich vu chinh neu con quota.
- Khong nen tao website ve tinh luc nay. Can de site chinh on dinh crawl/index truoc.
- Neu co anh cong trinh that moi, them vao site va Google Business co tac dung hon tao them trang rong.
