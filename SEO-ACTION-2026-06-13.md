# SEO action 2026-06-13

## Muc tieu

Tang tin hieu crawl mien phi ngoai Google Search Console, khong tao them website ve tinh va khong spam URL.

## Da trien khai

- Them IndexNow key file tai root website.
- Them script `npm run submit:indexnow` de gui toan bo URL trong `sitemap.txt` len IndexNow.
- Cap nhat build script de copy IndexNow key file vao `dist`.
- Deploy thanh cong len Cloudflare Pages.
- Kiem tra live key file: OK.
- Submit 50 URL len IndexNow: HTTP 202.
- Chuan bi quy trinh:
  1. Build.
  2. Kiem tra JSON-LD.
  3. Kiem tra SEO.
  4. Deploy Cloudflare Pages.
  5. Kiem tra key file live.
  6. Submit URL len IndexNow.

## Ghi chu

- IndexNow ho tro Bing va cac search engine tham gia IndexNow. Google Search hien tai van can sitemap, crawl tu nhien va Search Console.
- Viec nay khong dam bao index ngay, nhung giup search engine nhan tin hieu cap nhat nhanh hon voi chi phi 0.
