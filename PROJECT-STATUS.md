# Project Status - SEO Website Bong Sen Trang

## Muc tieu

Xay dung va SEO website cho Cong ty TNHH Truyen thong Bong Sen Trang, dich vu san xuat va thi cong bien quang cao tai Ha Noi.

## Thong tin chinh

- Website live: https://lam-bien-quang-cao-bong-sen-trang.netlify.app/
- Cong ty: Cong ty TNHH Truyen thong Bong Sen Trang
- Dia chi: So 92E O Cho Dua, Dong Da, Ha Noi
- Dien thoai/Zalo: 0989 521 881
- Fanpage: https://www.facebook.com/whitelotus.vn/
- Thu muc lam viec chinh: `F:\Du An\SEO Website Bong Sen Trang`

## Lenh thuong dung

```powershell
npm run build
node scripts/check-seo.js
node scripts/check-jsonld.js
npm run deploy:cloudflare
npm run submit:indexnow
```

## Quy trinh lam viec tren nhieu may

Truoc khi lam:

```powershell
git pull --rebase
```

Sau khi lam xong va kiem tra:

```powershell
git status
git add .
git commit -m "Mo ta viec da lam"
git push
```

Neu lam bang Codex, hay yeu cau Codex pull truoc khi sua va push sau khi xong.

## Da trien khai

- Site tinh tren Cloudflare Pages.
- Cac trang dich vu chinh: thi cong, bao gia, sua chua, alu chu noi, hop den LED, Hiflex, chu noi mica/inox, bien vay.
- SEO local Ha Noi: hub Ha Noi, cac quan, trang gan day, cac tuyen duong/phuong quanh Dong Da.
- SEO nganh hang: shop quan ao, cafe, quan an, tra sua, nail/spa, salon, nha thuoc, gara, trung tam day hoc, van phong, phong kham nha khoa, sieu thi mini/me va be.
- SEO khu vuc nho: Linh Dam, Hoang Mai.
- Sitemap, sitemap Google, sitemap text, image sitemap.
- IndexNow key file va script submit.
- Lich/caption fanpage va cac file ghi chu SEO theo ngay.

## Luu y bao mat

Khong commit:

- Token Cloudflare/GitHub/Gmail.
- `.env`
- `.wrangler/`
- `node_modules/`
- `dist/`
- File cache, log, cookie, session.

Moi may can dang nhap Cloudflare rieng neu muon deploy bang Wrangler.

## Viec nen lam tiep

- Theo doi Google Search Console: impressions, queries, pages.
- Khi co anh cong trinh that moi, toi uu ten file + alt + dua vao dung trang nganh/khu vuc.
- Khi mua ten mien rieng, cau hinh redirect 301 tu Pages domain sang domain moi de giu SEO.
- Duy tri dang fanpage, Google Business Profile va bo sung anh that theo tung nhom dich vu.
