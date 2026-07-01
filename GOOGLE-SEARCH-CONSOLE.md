# Google Search Console

Website đang chạy:

`https://lam-bien-quang-cao-bong-sen-trang.netlify.app/`

Sitemap:

`https://lam-bien-quang-cao-bong-sen-trang.netlify.app/sitemap.xml`

## Cách thêm website

1. Vào Google Search Console: `https://search.google.com/search-console`
2. Chọn `Add property`.
3. Chọn `URL prefix`, không chọn `Domain`.
4. Nhập đúng URL:

```text
https://lam-bien-quang-cao-bong-sen-trang.netlify.app/
```

5. Nếu Google đưa mã xác minh, ưu tiên chọn một trong hai cách:
   - `HTML tag`: gửi tôi đoạn meta tag để tôi gắn vào `index.html` rồi deploy lại.
   - `HTML file`: tải file xác minh rồi đưa tôi tên/nội dung file để tôi thêm vào website.

## Sau khi xác minh

1. Vào mục `Sitemaps`.
2. Gửi sitemap:

```text
sitemap.xml
```

3. Vào `URL inspection`.
4. Kiểm tra URL trang chủ:

```text
https://lam-bien-quang-cao-bong-sen-trang.netlify.app/
```

5. Bấm `Request indexing` nếu nút này khả dụng.

## URL ưu tiên request indexing

- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/hinh-anh-bien-quang-cao-thuc-te-ha-noi/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-quang-cao-nha-hang-ha-noi/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bao-gia-bien-quang-cao-ha-noi/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/thi-cong-bien-quang-cao-ha-noi/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/bien-alu-chu-noi-ha-noi/`
- `https://lam-bien-quang-cao-bong-sen-trang.netlify.app/lam-bien-quang-cao-dong-da/`

## Lưu ý

Google có thể mất vài ngày đến vài tuần để index và hiển thị dữ liệu. Search Console giúp theo dõi trạng thái index, truy vấn tìm kiếm, lỗi sitemap và các vấn đề kỹ thuật.

## File xác minh đã thêm

File đã deploy:

```text
https://lam-bien-quang-cao-bong-sen-trang.netlify.app/google8635286053880141.html
```

Nội dung:

```text
google-site-verification: google8635286053880141.html
```

Cloudflare Pages có thể tự chuyển URL `.html` sang URL bỏ đuôi `.html`; nếu Google Search Console không xác minh được bằng file, chọn lại phương án `HTML tag` rồi gửi tôi đoạn meta tag.
