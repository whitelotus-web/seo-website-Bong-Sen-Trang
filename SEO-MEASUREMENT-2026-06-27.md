# Đo lường SEO ngày 2026-06-27

Nguồn: ảnh chụp Google Search Console do chủ website gửi.

## Hiệu suất 3 tháng

- Tổng lượt nhấp: 0
- Tổng lượt hiển thị: 65
- CTR trung bình: 0%
- Vị trí trung bình: 4,3
- Lần cập nhật gần nhất trong GSC: khoảng 2,5 giờ trước thời điểm chụp

## Truy vấn đang có hiển thị

- `công ty truyền thông`: 3 hiển thị
- `truyền thông`: 2 hiển thị
- `bongsentrang`: 1 hiển thị
- `bong company`: 1 hiển thị
- `bong sen`: 1 hiển thị
- `công ty truyền thông hà nội`: 1 hiển thị

## Lập chỉ mục

- GSC hiển thị 1 trang được lập chỉ mục.
- GSC chưa phát hiện đủ các trang SEO mới trong sitemap.
- Các sitemap đã gửi cũ vẫn báo "Không thể tìm nạp" trong giao diện, nhưng live site cần tiếp tục kiểm tra trực tiếp bằng HTTP và URL Inspection.

## Nhận định

- Website đã bắt đầu có hiển thị nhưng truy vấn còn lệch: Google đang hiểu thương hiệu theo hướng "truyền thông", chưa hiểu đủ mạnh nhóm "làm biển quảng cáo Hà Nội".
- Vấn đề ưu tiên hiện tại không phải thêm thật nhiều URL, mà là tăng tín hiệu nội bộ cho nhóm từ khóa mua hàng: biển hiệu cửa hàng, bảng hiệu cửa hàng, biển mặt tiền, báo giá làm bảng hiệu, biển có đèn LED.

## Việc triển khai hôm nay

- Bổ sung cụm trang buyer-intent trực tiếp:
  - `/bien-hieu-cua-hang-ha-noi/`
  - `/lam-bien-mat-tien-cua-hang-ha-noi/`
  - `/bao-gia-lam-bang-hieu-cua-hang-ha-noi/`
  - `/lam-bien-quang-cao-co-den-led-ha-noi/`
  - `/lam-bien-quang-cao-theo-yeu-cau-ha-noi/`
- Build lại sitemap để các URL mới được đưa vào danh sách chính.
- Kiểm tra SEO, JSON-LD, deploy Cloudflare Pages và submit IndexNow.

## Theo dõi lần sau

- So sánh số trang được lập chỉ mục.
- Kiểm tra tab "Trang" trong báo cáo hiệu suất để xem URL nào bắt đầu có hiển thị.
- Nếu truy vấn vẫn lệch sang "truyền thông", tiếp tục tăng liên kết nội bộ từ trang chủ và các hub về cụm "làm biển quảng cáo Hà Nội".
