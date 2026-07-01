# SEO action 2026-06-22 - Trang local Linh Dam, Hoang Mai

Muc tieu: mo rong SEO local theo khu vuc nho, bat truy van dai nhu:

- lam bien quang cao Linh Dam
- lam bien quang cao Hoang Mai Linh Dam
- bien quang cao nha thuoc Linh Dam
- bien quang cao quan cafe Linh Dam
- bien quang cao nha hang Linh Dam

Da trien khai:

- Tao trang moi: `/lam-bien-quang-cao-linh-dam-ha-noi/`
- Dung anh duoc toi uu ten file SEO:
  - `mau-bien-quan-cafe-linh-dam-ha-noi.jpg`
  - `mau-bien-nha-hang-linh-dam-ha-noi.jpg`
  - `mau-bien-quan-do-uong-linh-dam-ha-noi.jpg`
  - `mau-bien-nha-thuoc-linh-dam-ha-noi.jpg`
  - `mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg`
  - `mau-bien-shop-quan-ao-ha-noi.jpg`
- Them link noi bo tu trang Ha Noi hub den trang Linh Dam.
- Bo sung Linh Dam va Ban dao Linh Dam vao trang Hoang Mai.
- Cap nhat build pipeline bang `scripts/generate-neighborhood-pages.js`.
- Cap nhat sitemap va image sitemap.
- Deploy Cloudflare Pages.
- Submit IndexNow 81 URL.

Kiem tra:

- `npm run build`: OK, 81 pages with images.
- `node scripts/check-seo.js`: SEO OK, 81 pages checked, 0 warnings.
- `node scripts/check-jsonld.js`: JSON-LD OK, 82 blocks in 81 pages.
- Live 200: `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/lam-bien-quang-cao-linh-dam-ha-noi/`
- Sitemap live co 81 URL va co URL Linh Dam.

Ghi chu:

- Cac anh moi nen duoc xem la anh/mau tham khao neu chua xac nhan la cong trinh cua Bong Sen Trang.
- Theo doi Search Console query co cum `Linh Dam`, `Hoang Mai`, `nha thuoc`, `cafe`, `nha hang`.
