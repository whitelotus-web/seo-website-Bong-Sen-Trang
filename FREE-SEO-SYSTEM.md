# Hệ thống SEO miễn phí đã chuẩn bị

## Đã làm

- Website tĩnh không cần hosting trả phí.
- Đã deploy Cloudflare Pages miễn phí: `https://lambienquangcaohanoi.io.vn/`.
- Trang chủ SEO local cho từ khóa `làm biển quảng cáo tại Hà Nội`.
- 32 trang dịch vụ/khu vực/ngành:
  - `thi-cong-bien-quang-cao-ha-noi`
  - `bien-alu-chu-noi-ha-noi`
  - `bien-hop-den-led-ha-noi`
  - `lam-bang-hieu-cua-hang-ha-noi`
  - `lam-bien-quang-cao-dong-da`
  - `lam-bien-quang-cao-cau-giay`
  - `lam-bien-quang-cao-thanh-xuan`
  - `lam-bien-quang-cao-ba-dinh`
  - `lam-bien-quang-cao-hoan-kiem`
  - `lam-bien-quang-cao-hai-ba-trung`
  - `lam-bien-quang-cao-hoang-mai`
  - `bao-gia-bien-quang-cao-ha-noi`
  - `sua-chua-bien-quang-cao-ha-noi`
  - `chu-noi-mica-inox-ha-noi`
  - `bien-bat-hiflex-ha-noi`
  - `bien-quang-cao-nha-hang-ha-noi`
  - `bien-quang-cao-spa-salon-ha-noi`
  - `bien-quang-cao-showroom-van-phong-ha-noi`
  - `bien-cong-ty-ha-noi`
  - `bien-khai-truong-ha-noi`
  - `bien-vay-cua-hang-ha-noi`
  - `bien-quang-cao-quan-an-ha-noi`
  - `bien-quang-cao-cafe-tra-sua-ha-noi`
  - `bien-shop-thoi-trang-ha-noi`
  - `bien-phong-kham-nha-thuoc-ha-noi`
  - `neon-sign-led-decor-ha-noi`
  - `lam-bien-quang-cao-nam-tu-liem`
  - `lam-bien-quang-cao-bac-tu-liem`
  - `lam-bien-quang-cao-long-bien`
  - `lam-bien-quang-cao-tay-ho`
  - `lam-bien-quang-cao-ha-dong`
  - `lam-bien-quang-cao-gia-lam`
- 12 trang dự án/ảnh thi công:
  - `hinh-anh-bien-quang-cao-thuc-te-ha-noi`
  - `du-an-bien-bep-ba-son-hoi-an`
  - `du-an-bien-chu-noi-mo-nguyen`
  - `du-an-bien-the-fox-fitness`
  - `du-an-bien-kong-billiards`
  - `du-an-chu-noi-khoa-kinh-te`
  - `du-an-bien-tien-coffee`
  - `du-an-bien-gia-long`
  - `du-an-chu-noi-hoc-vien-khoa-hoc-quan-su`
  - `du-an-bien-oppo-samsung`
  - `du-an-bien-wonderfarm`
  - `du-an-bien-jotun`
- 4 trang tư vấn kéo khách đang tìm hiểu:
  - `can-chuan-bi-gi-de-bao-gia-bien-quang-cao`
  - `nen-chon-bien-alu-chu-noi-hay-bien-bat-hiflex`
  - `bien-hop-den-led-co-phu-hop-cua-hang-khong`
  - `dau-hieu-can-sua-chua-thay-moi-bien-quang-cao`
- Sitemap hiện có 49 URL tính cả trang chủ.
- Sitemap tự sinh bằng `npm run build`.
- Thư mục deploy sạch tự sinh tại `dist/`.
- Preview local bằng `npm run preview`.
- Checklist Google Business Profile.
- Checklist Google Search Console.
- Lịch nội dung SEO 30 ngày.
- Bộ bài đăng Google Business 4 tuần: `GOOGLE-BUSINESS-POSTS.md`.

## Việc cần tài khoản nhưng vẫn miễn phí

- Xác minh Google Search Console.
- Tạo/cập nhật Google Business Profile.
- Xin review thật từ khách cũ.

## Lệnh vận hành

```powershell
npm run build
npm run preview
npm run tunnel:cloudflare
npm run login:cloudflare
npm run deploy:cloudflare
```

## Chạy public tạm thời không cần tài khoản

Mở 2 terminal:

Terminal 1:

```powershell
npm run preview
```

Terminal 2:

```powershell
npm run tunnel:cloudflare
```

Cloudflare sẽ in ra một link dạng `https://...trycloudflare.com`. Link này miễn phí và public, nhưng chỉ nên dùng để kiểm tra/gửi khách xem thử. Không nên dùng làm URL SEO lâu dài vì link có thể đổi khi tắt tunnel.
