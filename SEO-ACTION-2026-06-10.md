# SEO action 2026-06-10

## Da trien khai

- Them meta chia se day du cho trang chu va 49 trang SEO con:
  - `og:site_name`
  - `og:image:alt`
  - `twitter:card`
  - `twitter:title`
  - `twitter:description`
  - `twitter:image`
- Them preload/fetchpriority cho anh hero tren cac trang SEO con de cai thien toc do hien thi dau trang.
- Cap nhat `lastmod` sitemap sang `2026-06-10` cho dot thay doi hom nay.
- Them script `npm run check:seo` de kiem tra tu dong:
  - title
  - meta description
  - canonical
  - robots index/follow
  - so luong h1
  - JSON-LD
  - og:image ton tai trong thu muc anh
  - canonical co nam trong sitemap
- Build va deploy thanh cong len Cloudflare Pages.

## Ket qua kiem tra

- `npm run check:jsonld`: OK, 51 JSON-LD blocks trong 50 trang.
- `npm run check:seo`: OK, 50 trang, 0 warnings.
- Kiem tra live:
  - Trang chu co meta moi.
  - Trang `lam-bien-quang-cao-nhanh-ha-noi` co meta moi.
  - `sitemap.xml` live co `lastmod` ngay 2026-06-10.

## Viec nen lam tiep

- Cho Search Console het gioi han roi uu tien request index:
  - Trang chu.
  - `/lam-bien-quang-cao-nhanh-ha-noi/`.
  - `/thi-cong-bien-quang-cao-ha-noi/`.
- Neu co them anh cong trinh that dep, bo sung vao gallery va Google Business/Facebook.
- Tiep tuc dang Fanpage deu, khong can tao them website ve tinh trong giai doan site chua index on dinh.
