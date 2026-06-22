# SEO action 2026-06-16 image sitemap

## Muc tieu

Tang kha nang crawl va hieu ngu canh anh cong trinh thuc te tren website, vi linh vuc bien quang cao phu thuoc nhieu vao hinh anh.

## Da trien khai

- Them script `scripts/generate-image-sitemap.js`.
- Sinh file `image-sitemap.xml` tu cac the `<img>` trong 51 trang HTML.
- Moi anh trong sitemap gan voi URL trang dang hien thi anh do.
- Them `image:title` tu noi dung alt cua anh.
- Them `image-sitemap.xml` vao `robots.txt`.
- Cap nhat `scripts/build-dist.js` de copy `image-sitemap.xml` len ban deploy.
- Cap nhat `npm run build` de sinh image sitemap tu dong.
- Cap nhat `npm run check:seo` de kiem tra image sitemap co namespace, co image entry va file anh ton tai.

## Can kiem tra

- `npm run build`: OK, sinh image sitemap cho 52 trang co anh.
- `npm run check:jsonld`: OK, 52 JSON-LD blocks trong 51 trang.
- `npm run check:seo`: OK, 51 trang, 0 warnings.
- `image-sitemap.xml`: 52 URL entries, 135 image entries.
- Deploy Cloudflare Pages: OK.
- Kiem tra live `image-sitemap.xml`: OK.
- Kiem tra live `robots.txt` co khai bao `image-sitemap.xml`: OK.
- Submit IndexNow sau deploy: 51 URL, HTTP 200.

## Cap nhat 2026-06-18

- Phat hien script image sitemap quet nham thu muc `dist` neu thu muc build cu ton tai.
- Da them danh sach `ignoredDirs` trong `scripts/generate-image-sitemap.js`.
- Image sitemap sau fix: 51 URL entries, 127 image entries, khong con `/dist/`.
- Deploy lai Cloudflare Pages: OK.
- Submit IndexNow lai: 51 URL, HTTP 200.
