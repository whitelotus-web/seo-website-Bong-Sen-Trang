# SEO action 2026-06-18 competitor pages

## Muc tieu

Phat trien website theo huong doi thu dang manh: cac trang bao gia rieng theo tung nhom vat lieu va y dinh tim kiem gia.

## Da trien khai

- Them script `scripts/generate-competitor-pages.js`.
- Them 4 trang moi:
  - `/bao-gia-bien-alu-chu-noi-ha-noi/`
  - `/bao-gia-bien-hop-den-led-ha-noi/`
  - `/bao-gia-bien-bat-hiflex-ha-noi/`
  - `/lam-bien-quang-cao-gia-re-ha-noi/`
- Moi trang co:
  - Title/description rieng.
  - Bang gia/phuong an tham khao.
  - Noi dung tu van theo vat lieu.
  - CTA goi/Zalo.
  - Link noi bo ve trang bao gia, thi cong, dich vu va danh muc.
  - JSON-LD LocalBusiness + Service.
- Cap nhat `scripts/generate-service-index.js` de ghi lai sitemap tu tat ca thu muc trang hien co, tranh bo sot cac trang sinh bo sung.
- Tao lich dang Fanpage 10 ngay tai `SOCIAL-FANPAGE-10-NGAY-2026-06-19.md`.
- Build thanh cong: 55 trang HTML.
- `node scripts/check-jsonld.js`: OK, 56 blocks trong 55 trang.
- `node scripts/check-seo.js`: OK, 55 trang, 0 warnings.
- Sitemap text: 55 URL.
- Image sitemap: 55 URL entries, 140 image entries, khong co `/dist/`.
- Deploy Cloudflare Pages: OK.
- Kiem tra live 4 trang moi: OK.
- Submit IndexNow: 55 URL, HTTP 200.

## Nguon tham khao cong khai

- lambienquangcaohn.net: khung gia Hiflex/hop den.
- quangcaoktd.com: bang gia hop den mica, 3M.
- hanoiadv.com: bang gia alu chu noi va hop den.
- quangcaonghiepphat.com: trang gia re va nhom vat lieu.
- bienquangcao.net.vn: tin hieu nang luc xưởng/may moc/thi cong nhanh.
