# SEO action 2026-06-19: nang cap trang mau bien / hinh anh thuc te

## Muc tieu

- Tang suc thuyet phuc cho khach dang tim mau bien quang cao tai Ha Noi.
- Bien trang hinh anh cu thanh hub theo nganh, co anh thuc te, link sang dich vu va bang gia.
- Giup Google hieu ro trang nay la trang tap hop mau bien quang cao thuc te.

## Da lam

- Them script `scripts/generate-gallery-hub.js`.
- Build pipeline sinh lai trang `hinh-anh-bien-quang-cao-thuc-te-ha-noi/`.
- Chia noi dung theo nhom:
  - Mau bien nha hang, quan an, cafe.
  - Mau bien shop, showroom, cua hang.
  - Mau bien spa, salon, clinic.
  - Mau chu noi, backdrop, logo van phong.
  - Mau bien hop den, LED, mat dung.
- Them CTA goi/Zalo va huong dan gui anh mat tien de bao gia.
- Them lien ket noi bo sang trang dich vu, trang bao gia va trang nang luc.
- Them link `Mau bien` vao menu chinh cua trang chu va cac nhom trang sinh tu dong.
- Them JSON-LD `CollectionPage`, `ItemList`, `FAQPage`, `LocalBusiness`.
- Them CSS rieng cho gallery hub.

## Kiem tra

- `npm run build`: OK.
- `node scripts/check-jsonld.js`: `JSON-LD OK: 57 blocks in 56 pages`.
- `node scripts/check-seo.js`: `SEO OK: 56 pages checked, 0 warnings`.
- Kiem tra live:
  - Trang chu co link `Mau bien`.
  - Trang live co tieu de `Mau bien quang cao dep tai Ha Noi`.
  - Trang live co nhom `Mau bien nha hang, quan an, cafe`.
  - Trang live co link `Bang gia bien quang cao 2026`.
  - Trang live co `CollectionPage`.
- Sitemap live: 56 URL.
- Image sitemap live: 148 image entries.
- IndexNow: submitted 56 URLs, HTTP 200.

## URL quan trong

- https://lambienquangcaohanoi.io.vn/hinh-anh-bien-quang-cao-thuc-te-ha-noi/
- https://lambienquangcaohanoi.io.vn/sitemap.xml
- https://lambienquangcaohanoi.io.vn/image-sitemap.xml
