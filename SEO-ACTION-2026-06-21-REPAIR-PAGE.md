# SEO action 2026-06-21: toi uu trang sua chua bien quang cao

## Muc tieu

- Tang kha nang co khach goi nhanh tu nhom nhu cau gap: bien hong LED, rach bat, hong nguon, bien cu xuong mau, can thay mat bien.
- Bien trang `sua-chua-bien-quang-cao-ha-noi/` tu noi dung mong thanh landing page co kha nang chuyen doi.

## Da lam

- Them script `scripts/generate-repair-page.js`.
- Them script nay vao pipeline build trong `package.json`.
- Viet lai trang `sua-chua-bien-quang-cao-ha-noi/` voi:
  - Tieu de va meta description moi.
  - CTA goi/Zalo ro rang.
  - Bang hang muc sua chua: thay mat bat, thay LED/nguon, sua hop den, gia co khung, thay chu noi, bao tri.
  - Danh sach dau hieu nen sua bien ngay.
  - Quy trinh xu ly nhanh qua anh Zalo.
  - Phan nen sua hay nen lam moi.
  - Anh tham khao bien LED, hop den, mat tien.
  - FAQ.
  - Lien ket noi bo sang bao gia, lam bien nhanh, hop den LED, mau bien thuc te.
- Them JSON-LD `LocalBusiness`, `Service`, `FAQPage`.
- Cap nhat `lastmod` sitemap va image sitemap sang `2026-06-21`.

## Kiem tra

- `npm run build`: OK.
- `node scripts/check-seo.js`: `SEO OK: 56 pages checked, 0 warnings`.
- `node scripts/check-jsonld.js`: `JSON-LD OK: 57 blocks in 56 pages`.
- Live page OK:
  - Co H1 `Sua chua bien quang cao tai Ha Noi`.
  - Co bang hang muc sua chua.
  - Co muc dau hieu nen sua bien.
  - Co CTA bao loi qua Zalo.
  - Co FAQPage schema.
- Live sitemap:
  - 56 URL.
  - Co `sua-chua-bien-quang-cao-ha-noi`.
  - Lastmod `2026-06-21`.
- Live image sitemap:
  - 153 image entries.
- IndexNow:
  - Submitted 56 URLs.
  - HTTP 200.

## URL

- https://lam-bien-quang-cao-bong-sen-trang.netlify.app/sua-chua-bien-quang-cao-ha-noi/
- https://lam-bien-quang-cao-bong-sen-trang.netlify.app/sitemap.xml
- https://lam-bien-quang-cao-bong-sen-trang.netlify.app/image-sitemap.xml
