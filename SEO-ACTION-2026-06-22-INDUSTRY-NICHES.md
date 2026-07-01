# SEO action 2026-06-22 - Nhom nganh hang Ha Noi

Muc tieu: bat them truy van dai theo nganh hang tai Ha Noi, vi du "bien shop quan ao Ha Noi", "bien quan cafe Ha Noi", "bien quan an Ha Noi", "bien nail spa Ha Noi".

Da trien khai:

- Tao trang tong hop: `/bien-quang-cao-theo-nganh-ha-noi/`
- Tao 10 trang ngach:
  - `/bien-shop-quan-ao-ha-noi/`
  - `/bien-quan-cafe-ha-noi/`
  - `/bien-quan-an-uong-ha-noi/`
  - `/bien-tra-sua-ha-noi/`
  - `/bien-nail-mi-spa-ha-noi/`
  - `/bien-salon-toc-barber-ha-noi/`
  - `/bien-nha-thuoc-ha-noi/`
  - `/bien-gara-o-to-xe-may-ha-noi/`
  - `/bien-trung-tam-day-hoc-ha-noi/`
  - `/bien-van-phong-cong-ty-ha-noi/`
- Gan link noi bo tu hub Ha Noi va trang tat ca dich vu.
- Cap nhat sitemap, image sitemap va dist.
- Deploy Cloudflare Pages.
- Submit IndexNow 80 URL.

Kiem tra:

- `npm run build`: OK, 80 pages with images.
- `node scripts/check-seo.js`: SEO OK, 80 pages checked, 0 warnings.
- `node scripts/check-jsonld.js`: JSON-LD OK, 81 blocks in 80 pages.
- Live 200:
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-quang-cao-theo-nganh-ha-noi/`
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-shop-quan-ao-ha-noi/`
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-quan-cafe-ha-noi/`
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-quan-an-uong-ha-noi/`
  - `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-nail-mi-spa-ha-noi/`

Ghi chu theo doi:

- Search Console: theo doi impressions/clicks cho cac query co mau `bien + nganh + ha noi`.
- Neu co anh that dep theo tung nganh, uu tien thay anh cho cac trang ngach tuong ung.
- Khong nen nhan ban qua nhieu trang ngach neu khong co noi dung rieng; uu tien ngach co nhu cau that va co kha nang chot don.
