# SEO action 2026-06-16

## Muc tieu

Tang kha nang Google di tu trang chu sang cac trang con khi hien tai tim kiem cong khai moi thay trang chu duoc index ro rang.

## Da trien khai

- Them script `scripts/generate-service-index.js`.
- Tao trang HTML sitemap/danh muc dich vu:
  - `/tat-ca-dich-vu-bien-quang-cao-ha-noi/`
  - Gom dich vu chinh, khu vuc Ha Noi, bai tu van, hinh anh cong trinh.
  - Co JSON-LD `ItemList`.
- Chen link "Tat ca dich vu" vao footer trang chu va footer cac trang con trong luc build.
- Cap nhat `sitemap.xml`, `sitemap-google.xml`, `sitemap.txt` de them URL danh muc va cap nhat `lastmod` ngay 2026-06-16.

## Viec can kiem tra sau build

- `npm run check:jsonld`: OK, 52 JSON-LD blocks trong 51 trang.
- `npm run check:seo`: OK, 51 trang, 0 warnings.
- Deploy Cloudflare Pages: OK.
- Kiem tra live URL danh muc: OK.
- Kiem tra link footer tu trang chu: OK.
- Kiem tra sitemap live co URL moi va `lastmod` 2026-06-16: OK.
- Submit IndexNow lai sau khi deploy: 51 URL, HTTP 200.
