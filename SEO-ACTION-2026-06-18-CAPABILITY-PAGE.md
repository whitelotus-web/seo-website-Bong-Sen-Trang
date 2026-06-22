# SEO action 2026-06-18 capability page

## Muc tieu

Tang tin hieu tin cay/E-E-A-T theo huong doi thu thuong co: nang luc thi cong, quy trinh, hinh anh cong trinh, cam ket bao hanh.

## Da trien khai

- Them script `scripts/generate-capability-page.js`.
- Them trang:
  - `/nang-luc-thi-cong-bien-quang-cao-ha-noi/`
- Trang co:
  - Quy trinh tiep nhan, tu van, bao gia, san xuat, lap dat.
  - 6 diem kiem soat khi thi cong.
  - Gallery anh cong trinh thuc te.
  - CTA Goi/Zalo.
  - JSON-LD LocalBusiness + WebPage + Service.
- Them link "Nang luc" vao header trang chu va cac nhom trang sinh tu script.
- Them section "Nang luc thi cong" tren trang chu.
- Them link nang luc vao footer.
- Cap nhat CSS `capability-grid`, `capability-section`.
- Build thanh cong: 56 trang.
- `node scripts/check-jsonld.js`: OK, 57 blocks trong 56 trang.
- `node scripts/check-seo.js`: OK, 56 trang, 0 warnings.
- Kiem tra trang chu co link nang luc: OK.
- Kiem tra trang tat ca dich vu co link nang luc: OK.
- Deploy Cloudflare Pages: OK.
- Kiem tra live trang nang luc: OK.
- Live sitemap: 56 URL.
- Live image sitemap: 147 image entries, khong co `/dist/`.
- Submit IndexNow: 56 URL, HTTP 200.

## Ly do SEO

- Trang chu va header co link truc tiep den trang nang luc, giup Google thay day la trang quan trong.
- Tang tin hieu tin cay cho khach hang truoc khi goi/Zalo.
- Bo sung noi dung ma nhieu doi thu top SEO dang co: nang luc/quy trinh/hinh anh/cam ket.
