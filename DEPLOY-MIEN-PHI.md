# Deploy miễn phí

Tên site/slug đã chọn: `lam-bien-quang-cao-bong-sen-trang`

URL miễn phí đang chạy trên Cloudflare Pages:

`https://lambienquangcaohanoi.io.vn/`

## Cách deploy lại

Chạy trong thư mục website:

```powershell
npm run login:cloudflare
npm run deploy:cloudflare
```

Lệnh đăng nhập sẽ mở trình duyệt Cloudflare để xác thực tài khoản. Đây là bước cần chủ tài khoản tự đăng nhập.

Trong môi trường không tương tác, Cloudflare có thể yêu cầu biến `CLOUDFLARE_API_TOKEN`. Khi đó đăng nhập thủ công trên máy hoặc tạo token Cloudflare Pages rồi chạy:

```powershell
$env:CLOUDFLARE_API_TOKEN="token_cua_ban"
npm run deploy:cloudflare
```

Nếu Cloudflare báo tên project đã tồn tại, đổi `SITE_URL` trong `index.html`, `robots.txt`, `sitemap.xml` sang một slug khác, ví dụ:

- `bien-quang-cao-bong-sen-trang-ha-noi`
- `lam-bien-quang-cao-ha-noi-bong-sen-trang`
- `bien-quang-cao-dong-da-bong-sen-trang`

## Sau khi deploy

1. Mở URL public để kiểm tra giao diện: `https://lambienquangcaohanoi.io.vn/`.
2. Vào Google Search Console, thêm property URL prefix.
3. Gửi sitemap: `/sitemap.xml`.
4. Cập nhật website này trong Google Business Profile.

## Chạy public tạm thời không cần đăng nhập

Nếu chỉ cần có link public để xem thử ngay, chạy:

Terminal 1:

```powershell
npm run preview
```

Terminal 2:

```powershell
npm run tunnel:cloudflare
```

Lệnh tunnel sẽ tạo link dạng `https://...trycloudflare.com`. Link này miễn phí nhưng không ổn định, không nên dùng cho SEO lâu dài.
