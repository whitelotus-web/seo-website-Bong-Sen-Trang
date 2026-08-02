# SEO action - 2026-08-02 - Day 13

## Mục tiêu

Củng cố liên kết nội bộ tới các trang có ý định mua cao, sau khi GSC cho thấy website đã được lập chỉ mục nhưng nhiều URL vẫn chưa được chọn để phân phối.

## Audit

- Website có 296 trang HTML.
- 293 trang đã liên kết tới ít nhất một trang lõi.
- 3 trang hub còn thiếu liên kết trực tiếp tới nhóm dịch vụ, báo giá và liên hệ.

## Đã làm

- Thêm bước `scripts/add-core-navigation.js` vào pipeline build.
- Bổ sung trên 3 trang hub các liên kết tới dịch vụ chính, báo giá, mẫu biển thực tế và liên hệ.
- Không tạo URL mới, không đổi canonical, không đổi sitemap và không xóa dữ liệu cũ.

## Theo dõi

Sau khi bản build mới được deploy lên domain chính, theo dõi GSC các trang hub và nhóm truy vấn có hiển thị nhưng chưa có click. Không gửi yêu cầu lập chỉ mục hàng loạt.
