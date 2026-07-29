# Đánh giá tool seo-by-Tung - 2026-07-29

## Thông tin cài đặt

- Nguồn: https://github.com/tunglb94/seo-by-Tung
- Commit đã kiểm tra: `5e58bdfa5979b5656b9b597e1e0b726034136da7`
- Thư mục cài riêng: `F:\Dự Án\SEO Tools\seo-by-Tung`
- Môi trường Python: `.venv` riêng trong thư mục tool
- Playwright và Chromium được lưu trên ổ F, không cài vào repo website.

## Kết quả kiểm tra

- Mã Python biên dịch được và các thư viện chính import thành công.
- Các lệnh ngoại tuyến `--plan`, `--keywords`, `--backlinks` chạy được.
- README của repo đang trống, không có hướng dẫn sử dụng.
- Repo không có giấy phép sử dụng.
- `requirements.txt` thiếu `requests`, `fake-useragent` và `customtkinter`; đồng thời liệt kê `asyncio` dù đây là thư viện chuẩn của Python.
- Nhiều nội dung tiếng Việt trong mã nguồn đã lỗi mã hóa.
- Phần kế hoạch nội dung, số liệu từ khóa và backlink đều là dữ liệu viết cứng cho ngành nối mi và các website `topdev.vn`/`nankybeauty.com`; tool không lấy dữ liệu từ Google Search Console, Keyword Planner hay website Bông Sen Trắng.
- `playwright-stealth` bản hiện tại không cung cấp hàm `stealth_async` theo cách code đang gọi, nên lớp stealth của thư viện bị bỏ qua.

## Chức năng thực tế

Tool có hai nhóm chức năng:

1. In ra lịch content, danh sách từ khóa và kế hoạch backlink mẫu đã viết sẵn.
2. Dùng Playwright, proxy, cookie, user-agent và hành vi giả lập để tự tìm kiếm Google, bấm kết quả, bấm đối thủ và tạo phiên truy cập vào website mục tiêu.

Đây không phải crawler/audit SEO. Tool không kiểm tra title, meta description, canonical, sitemap, robots, schema, liên kết nội bộ, Core Web Vitals, indexation hoặc thứ hạng thật.

## Quyết định sử dụng

- Không chạy các chế độ `--search`, `--auto`, `--direct`, AIO traffic hoặc giao diện tạo session trên domain `lambienquangcaohanoi.io.vn`.
- Không dùng proxy để tạo impression, click, dwell time hoặc brand search giả.
- Không dùng danh sách volume/difficulty trong tool để quyết định từ khóa vì đó là số viết cứng, không có nguồn.
- Có thể tham khảo duy nhất ý tưởng tổ chức content theo TOFU/MOFU/BOFU và cách chia lịch nội dung, nhưng dự án hiện tại đã có hệ thống nội dung cụ thể và đáng tin cậy hơn.

## Giá trị đối với Bông Sen Trắng

Giá trị trực tiếp rất thấp. Tool không giải quyết các việc đang cần nhất:

- Đo truy vấn và trang có impression thật trong GSC.
- Cải thiện CTR bằng title/description dựa trên dữ liệu thật.
- Tăng độ tin cậy local qua Google Business Profile, NAP, ảnh thi công và đánh giá thật.
- Kiểm soát chất lượng 296 trang, tránh nội dung mỏng và cannibalization.
- Xây dựng backlink địa phương có biên tập, liên quan tới ngành quảng cáo tại Hà Nội.

Tiếp tục ưu tiên SEO white-hat trên domain chính, dữ liệu GSC thật, nội dung có ảnh thi công thật và tín hiệu doanh nghiệp địa phương.
