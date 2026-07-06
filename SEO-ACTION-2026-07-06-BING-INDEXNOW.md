# SEO action 2026-07-06: Bing IndexNow submission

Status update: this is an archived side note only. The active SEO plan for Bong Sen Trang is Google Search / Google Search Console, not Bing Webmaster Tools. The Bing check happened during a site-selection confusion and should not be used to evaluate progress for this project.

Mục tiêu: báo cho Bing/Yandex biết toàn bộ URL hiện tại của website đã được cập nhật trên domain Netlify chính.

Đã kiểm tra:

- `robots.txt` có khai báo sitemap chính, sitemap ưu tiên, sitemap Google và image sitemap.
- File key IndexNow tồn tại ở root site.
- Script `npm run submit:indexnow` lấy URL từ `sitemap.txt`.

Kết quả:

- Đã gửi 263 URL qua IndexNow.
- API trả `HTTP 200`, nghĩa là endpoint đã nhận danh sách URL.

Lưu ý đo lường:

- Bing Webmaster Tools chỉ có số liệu khi Bing có impression/click thực tế.
- Việc gửi IndexNow không bảo đảm URL lập tức có ranking hoặc có click.
- Với thị trường Hà Nội, Bing thường ít dữ liệu hơn Google; cần ưu tiên theo dõi Google Search Console nhưng vẫn duy trì IndexNow sau mỗi lần deploy lớn.
