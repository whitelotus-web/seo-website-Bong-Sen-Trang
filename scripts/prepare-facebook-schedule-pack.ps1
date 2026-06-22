$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$out = Join-Path $root "facebook-schedule-pack"
$media = Join-Path $root "google-business-upload"
$video = Join-Path $root "video-assets"

if (Test-Path -LiteralPath $out) {
  Remove-Item -LiteralPath $out -Recurse -Force
}

New-Item -ItemType Directory -Path $out | Out-Null

$posts = @(
  @{
    Folder = "2026-06-12-bien-hop-den-led"
    Media = Join-Path $media "11-xe-dien-viet-thanh-bien-mat-tien-led.jpg"
    Caption = @"
Với cửa hàng hoạt động buổi tối, biển cần dễ đọc từ xa, ánh sáng đều và không bị chìm giữa các mặt tiền xung quanh.

Bông Sen Trắng nhận làm biển hộp đèn LED, chữ nổi phát sáng, biển vẫy hai mặt và bảng hiệu mặt tiền cho cửa hàng, showroom, quán ăn, spa tại Hà Nội.

Gửi ảnh mặt tiền qua Zalo 0989 521 881 để được tư vấn loại biển phù hợp.

Xem thêm: https://lam-bien-quang-cao-bong-sen-trang.pages.dev/bien-hop-den-led-ha-noi/
"@
  },
  @{
    Folder = "2026-06-14-short-bao-gia"
    Media = Join-Path $video "bong-sen-trang-short-bao-gia-bien-quang-cao-2026-06-09.mp4"
    Caption = @"
Muốn báo giá biển quảng cáo nhanh tại Hà Nội?

Anh/chị chỉ cần gửi 5 thông tin:
- Ảnh chụp thẳng mặt tiền
- Kích thước dự kiến
- Địa chỉ lắp đặt
- Logo hoặc nội dung biển
- Ngày cần hoàn thành

Bông Sen Trắng nhận sản xuất, thi công lắp đặt biển quảng cáo tại Hà Nội: biển alu chữ nổi, hộp đèn LED, biển bạt Hiflex, biển vẫy, chữ nổi mica/inox.

Zalo/Gọi: 0989 521 881
"@
  },
  @{
    Folder = "2026-06-16-bien-spa-salon-clinic"
    Media = Join-Path $media "09-may-skin-bien-chu-noi-sang.jpg"
    Caption = @"
Spa, salon, clinic và cửa hàng làm đẹp nên ưu tiên biển gọn, sáng, màu sắc sạch và chữ dễ đọc.

Bông Sen Trắng nhận làm biển chữ nổi, hộp đèn LED, logo mica/inox, backdrop lễ tân và biển mặt tiền cho spa, salon, phòng khám tại Hà Nội.

Gửi ảnh mặt tiền hoặc khu vực lễ tân qua Zalo 0989 521 881 để được tư vấn phương án phù hợp.

Xem thêm: https://lam-bien-quang-cao-bong-sen-trang.pages.dev/bien-quang-cao-spa-salon-ha-noi/
"@
  },
  @{
    Folder = "2026-06-18-sua-chua-thay-moi-bien-cu"
    Media = Join-Path $media "08-anh-thi-cong-thuc-te.jpg"
    Caption = @"
Biển cũ xuống màu, hỏng LED, bong mặt biển hoặc cần đổi nhận diện thương hiệu?

Bông Sen Trắng nhận kiểm tra, sửa chữa, thay mặt biển, thay LED, gia cố khung và làm mới biển quảng cáo tại Hà Nội.

Gửi ảnh hiện trạng qua Zalo 0989 521 881 để được tư vấn phương án xử lý phù hợp.

Xem thêm: https://lam-bien-quang-cao-bong-sen-trang.pages.dev/sua-chua-bien-quang-cao-ha-noi/
"@
  }
)

foreach ($post in $posts) {
  $dir = Join-Path $out $post.Folder
  New-Item -ItemType Directory -Path $dir | Out-Null
  Copy-Item -LiteralPath $post.Media -Destination (Join-Path $dir (Split-Path -Leaf $post.Media))
  Set-Content -LiteralPath (Join-Path $dir "caption.txt") -Value $post.Caption -Encoding UTF8
}

$readme = @"
# Gói lên lịch Facebook

Đề xuất lịch:

- 12/06/2026, 09:00: 2026-06-12-bien-hop-den-led
- 14/06/2026, 20:00: 2026-06-14-short-bao-gia
- 16/06/2026, 09:00: 2026-06-16-bien-spa-salon-clinic
- 18/06/2026, 09:00: 2026-06-18-sua-chua-thay-moi-bien-cu

Cách dùng:

1. Vào Meta Business Suite > Công cụ lập kế hoạch.
2. Chọn ngày cần đăng > Tạo > Tạo bài viết.
3. Mở đúng thư mục ngày trong gói này.
4. Upload ảnh/video trong thư mục.
5. Mở caption.txt, copy nội dung vào bài.
6. Chọn Lên lịch thay vì đăng ngay.

Không đăng dồn quá nhiều bài trong một ngày. Fanpage hiện đã có bài ngày 08/06 và 09/06, nên lịch trên giãn cách an toàn hơn.
"@
Set-Content -LiteralPath (Join-Path $out "README.md") -Value $readme -Encoding UTF8

Write-Output $out
