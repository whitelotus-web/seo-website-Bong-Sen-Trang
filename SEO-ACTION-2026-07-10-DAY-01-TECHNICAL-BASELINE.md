# SEO action 2026-07-10: Day 1 technical baseline

## Muc tieu

Tao moc ky thuat cho domain chinh `https://lambienquangcaohanoi.io.vn/` truoc khi toi uu noi dung va cac trang kiem khach trong chu ky 10 ngay.

## Kiem tra da hoan thanh

- `npm run check:seo`: 296 trang, 0 warning.
- `npm run check:jsonld`: 297 khoi JSON-LD tren 296 trang.
- `robots.txt`, `sitemap.xml`, trang chu, trang bao gia va trang lien he tren domain moi deu tra HTTP 200.
- `sitemap.xml` co 296 URL; `sitemap-priority.xml` co 118 URL; `image-sitemap.xml` co 659 anh.
- 296 trang deu co canonical ve `https://lambienquangcaohanoi.io.vn/`, dung 1 H1, khong co `noindex`, co so dien thoai va lien ket Zalo.
- Khong co title hoac meta description trung lap trong 296 trang.

## Phat hien can xu ly

### P1 - Domain cu pages.dev chua chuyen huong 301

- `https://lam-bien-quang-cao-bong-sen-trang.pages.dev/` hien tra HTTP 200 thay vi chuyen sang domain moi.
- File `_redirects` truoc do dung redirect theo hostname. Cloudflare Pages khong ho tro redirect theo hostname trong `_redirects`; can dung Bulk Redirect cap tai khoan.
- Da thay file `_redirects` bang ghi chu dung de tranh hieu nham trong cac lan deploy sau.

## Cach khac phuc P1

Trong Cloudflare, tao Bulk Redirect voi cac tuy chon:

- Source: `lam-bien-quang-cao-bong-sen-trang.pages.dev`
- Target: `https://lambienquangcaohanoi.io.vn`
- Status: `301`
- Bat `Subpath matching`, `Preserve path suffix`, `Preserve query string`

Sau khi bat, kiem tra lai trang chu va mot trang con cua `pages.dev` phai chuyen ve URL tuong ung tren domain moi.

### P2 - Sitemap tung lam moi ngay cap nhat cho toan bo URL

- Mot so script sitemap dung ngay build lam `lastmod`, nen 296 URL co the bi ghi la vua cap nhat du noi dung khong doi.
- Da sua cac script sitemap de bo `lastmod` khi khong co nguon ngay cap nhat dang tin cay.
- Trang hub cap nhat dich vu dung ngay co dinh va chi doi khi noi dung cua chinh trang nay thay doi.

## Deploy va xac minh live

- Deploy Cloudflare Pages thanh cong ngay 2026-07-10.
- Kiem tra live: `sitemap.xml`, `image-sitemap.xml`, `sitemap-priority.xml`, `robots.txt` va trang bao gia deu tra HTTP 200 tren domain moi.
- Ba sitemap live deu dung domain moi va khong con `lastmod` hang loat.
- Domain cu `pages.dev` van tra HTTP 200 cho den khi Bulk Redirect duoc bat.

## Ghi chu do luong

- GSC cua domain moi da nhan sitemap thanh cong trong cac lan kiem tra truoc.
- So lieu hieu suat can xem theo bo loc Quoc gia = Viet Nam va so sanh 7 ngay lien tiep. Khong dung luot truy cap Cloudflare lam KPI SEO vi bot crawl co the lam so lieu cao gia tao.

## Viec tiep theo

Ngay 2: lap ban do 296 URL, chon 10-12 trang kiem khach, danh dau trang trung y dinh va chi de xuat gop/noindex khi co bang chung ro rang.
