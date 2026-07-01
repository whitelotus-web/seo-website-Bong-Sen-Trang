# SEO action 2026-06-22 - Them ngach phong kham va ban le

Muc tieu: mo rong SEO theo cac ngach co y dinh mua cao hon:

- bien phong kham nha khoa Ha Noi
- bang hieu phong kham chuyen nghiep
- bien sieu thi mini Ha Noi
- bien cua hang me va be Ha Noi

Da trien khai:

- Tao script moi: `scripts/generate-extra-industry-pages.js`
- Them vao build pipeline sau `generate-industry-niche-pages.js`
- Tao 2 trang:
  - `/bien-phong-kham-nha-khoa-ha-noi/`
  - `/bien-sieu-thi-mini-me-va-be-ha-noi/`
- Toi uu va doi ten anh theo SEO:
  - `mau-bien-phong-kham-nha-khoa-linh-dam-ha-noi.jpg`
  - `mau-bien-cua-hang-me-va-be-ha-noi.jpg`
  - `mau-bien-sieu-thi-mini-ha-noi.jpg`
  - `mau-bien-shop-thoi-trang-mat-tien-ha-noi.jpg`
  - `mau-bien-alu-chu-noi-shop-ha-noi.jpg`
- Them link noi bo tu trang hub Ha Noi den 2 trang moi.
- Cap nhat sitemap va image sitemap.
- Deploy Cloudflare Pages.
- Submit IndexNow 83 URL.

Kiem tra:

- `npm run build`: OK, 83 pages with images.
- `node scripts/check-seo.js`: SEO OK, 83 pages checked, 0 warnings.
- `node scripts/check-jsonld.js`: JSON-LD OK, 84 blocks in 83 pages.
- Live 200:
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-phong-kham-nha-khoa-ha-noi/`
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-sieu-thi-mini-me-va-be-ha-noi/`

Ghi chu:

- Anh tai ve tu ngoai nen noi dung trang ghi theo huong mau tham khao, khong nhan la du an da thi cong.
- Theo doi Search Console query: `phong kham`, `nha khoa`, `sieu thi mini`, `me va be`, `bang hieu ban le`.
