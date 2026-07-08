# SEO action 2026-07-08 - Chuyen domain chinh

## Domain chinh moi

- Domain: https://lambienquangcaohanoi.io.vn/
- Muc tieu: dung domain ngan hon, ro y dinh tim kiem "lam bien quang cao Ha Noi", thay cho URL free hosting.

## Da thuc hien

- Doi canonical, Open Graph URL, sitemap, robots va image sitemap sang domain moi.
- Them cau hinh Cloudflare Pages `wrangler.toml`.
- Them `_redirects` de chuyen `pages.dev` ve domain moi sau khi custom domain hoat dong.
- Cap nhat GitHub Pages workflow fallback de build theo domain moi.
- Deploy ban moi len Cloudflare Pages project `lam-bien-quang-cao-bong-sen-trang`.

## Can thao tac tren Cloudflare/DNS

1. Them domain `lambienquangcaohanoi.io.vn` vao Cloudflare zone.
2. Tro nameserver domain ve Cloudflare neu dung apex domain.
3. Trong Workers & Pages > project `lam-bien-quang-cao-bong-sen-trang` > Custom domains, add `lambienquangcaohanoi.io.vn`.
4. Doi Google Search Console sang property domain moi va submit:
   - `/sitemap.xml`
   - `/image-sitemap.xml`
   - `/sitemap-priority.xml`

## Kiem tra

- `npm run build`: pass
- `npm run check:seo`: pass, 286 pages checked
- `npm run check:jsonld`: pass, 287 JSON-LD blocks
