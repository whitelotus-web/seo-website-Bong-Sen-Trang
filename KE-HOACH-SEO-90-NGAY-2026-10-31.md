# Kế hoạch SEO 90 ngày — tăng traffic có khách hàng thật

**Website:** https://lambienquangcaohanoi.io.vn/
**Doanh nghiệp:** Công ty TNHH Truyền thông Bông Sen Trắng — 92E Ô Chợ Dừa, Đống Đa, Hà Nội · 0989 521 881
**Ngày lập:** 31/10/2026
**Nguồn số liệu:** Google Search Console (snapshot 07/10/2026, kỳ 07/09–04/10) + Google Business Profile (qua Windsor) + rà soát 300 file HTML trong `dist/`.
**Lưu ý về độ mới dữ liệu:** snapshot GSC mới nhất đã xác minh kết thúc ngày 11/10/2026 (819 hiển thị, 18 nhấp, CTR 2,20%, vị trí 9,19). Chưa có dữ liệu sau 11/10.

---

## 1. Kết luận trong một đoạn

Website **không thiếu trang** — đang có 298 trang index được, liên kết nội bộ tốt, JSON-LD hợp lệ. Vấn đề là **Google chỉ tin 15 trang trong số đó là đáng hiển thị**: 28 ngày qua chỉ 879 lượt hiển thị và 17 lượt nhấp, tức trung bình **3 lượt hiển thị/trang/tháng**. Từ khóa tiền ("làm biển quảng cáo Hà Nội") đang ở **vị trí 96** — ngoài tầm với của một tên miền chưa có backlink.

Vì vậy 90 ngày tới **không sản xuất thêm trang địa phương**, mà dồn vào 3 đòn bẩy: **(1) Google Maps + đánh giá khách hàng**, **(2) làm 15 trang ra tiền thành trang tốt nhất thị trường**, **(3) xây tín hiệu ngoài site (backlink/citation) + nội dung pháp lý – chi phí để hút link và khách mới mở shop**.

---

## 2. Số liệu hiện tại

### 2.1 Search Console — 28 ngày

| Chỉ số | 10/08–06/09 | 07/09–04/10 | Thay đổi |
| --- | ---: | ---: | ---: |
| Nhấp | 19 | 17 | −10,5% |
| Hiển thị | 701 | 879 | +25,4% |
| CTR | 2,71% | 1,93% | −0,78 điểm |
| Vị trí TB | 14,06 | 9,63 | Cải thiện 4,43 |

Vị trí đang tốt lên nhưng **CTR giảm** — dấu hiệu điển hình của việc được hiển thị nhưng không được chọn: thương hiệu chưa được biết, snippet thiếu bằng chứng (ảnh thật, giá, đánh giá), và với truy vấn "gần đây" thì **local pack chiếm hết click**.

### 2.2 Phân bố hiệu suất trên 298 trang

| Mức | Số trang |
| --- | ---: |
| Có ít nhất 1 hiển thị | 102 |
| ≥ 10 hiển thị | 15 |
| ≥ 20 hiển thị | 9 |
| **0 hiển thị trong 28 ngày** | **196** |

Đây là chẩn đoán quan trọng nhất: 2/3 website đang không xuất hiện lần nào. Không phải lỗi kỹ thuật (sitemap 298 URL, không có trang mồ côi, 570 khối JSON-LD hợp lệ) — mà là **thiếu tín hiệu để Google chọn trang đó thay vì đối thủ**.

### 2.3 Top truy vấn thực tế

| Truy vấn | Trang | Hiển thị | Nhấp | Vị trí |
| --- | --- | ---: | ---: | ---: |
| làm bảng hiệu gần đây | /lam-bien-quang-cao-gan-day-ha-noi/ | 75 | 1 | 5,17 |
| sửa chữa biển quảng cáo | /sua-chua-bien-quang-cao-ha-noi/ | 10 | 0 | 32,9 |
| sửa biển quảng cáo | /sua-chua-bien-quang-cao-ha-noi/ | 9 | 0 | 25,2 |
| công ty truyền thông | / | 6 | 0 | 3,3 |
| báo giá biển bạt khung sắt | /bao-gia-bien-bat-hiflex-ha-noi/ | 5 | 0 | 7,0 |
| làm biển quảng cáo tại cầu giấy | /bao-gia-bien-quang-cao-cau-giay/ | 4 | 0 | 81,8 |
| **làm biển quảng cáo hà nội** | /tat-ca-dich-vu-bien-quang-cao-ha-noi/ | 1 | 0 | **96** |

Chỉ một truy vấn thật sự có khối lượng ("gần đây", 75 hiển thị) — và CTR chỉ 1,3% dù vị trí 5.

### 2.4 Google Business Profile (28 ngày, 14/09–11/10)

| Chỉ số | Giá trị |
| --- | ---: |
| Hiển thị trên Search + Maps | 211 |
| Nhấp website | 1 |
| Nhấp gọi | 0 |
| Yêu cầu chỉ đường | 28 |

Hồ sơ đang để **danh mục chính "Công ty truyền thông"** — sai hoàn toàn so với truy vấn "làm biển quảng cáo gần đây". Với 28 lượt xin chỉ đường mà 0 cuộc gọi, đây là điểm rò rỉ lead lớn thứ hai sau website.

### 2.5 Nền kỹ thuật (đã kiểm tra hôm nay)

| Hạng mục | Trạng thái |
| --- | --- |
| Số trang HTML trong `dist/` | 300 (298 trang index + 404 + file xác minh) |
| Sitemap | 298 URL, 4 sitemap khai báo trong robots.txt |
| Liên kết nội bộ | Tốt: hub nhận 214–296 inlink, không có trang mồ côi |
| JSON-LD | LocalBusiness, Service, FAQPage, Offer, Breadcrumb — hợp lệ |
| Title/Description trang tiền | Đã có giá + khu vực + CTA, không trùng lặp |
| **Đo lường** | **Không có GA4 / GTM / bất kỳ analytics** |
| **Form thu lead** | **0 form** — chỉ có `tel:` và link Zalo |
| Đánh giá khách hàng | Không có review nào trên site hoặc schema |

Không có analytics nghĩa là **hiện không thể biết traffic nào ra khách**. Đây là việc phải làm trước mọi thứ khác.

---

## 3. Chẩn đoán: 5 nguyên nhân, xếp theo tác động

| # | Nguyên nhân | Bằng chứng | Tác động |
| --- | --- | --- | --- |
| 1 | **Thiếu uy tín tên miền** — gần như không có backlink, tên miền mới | Từ khóa đầu ngành ở vị trí 96; 196/298 trang 0 hiển thị | Cao nhất, chặn mọi nỗ lực on-page |
| 2 | **Maps/local pack chưa được khai thác** — sai danh mục, mới 3 đánh giá | Truy vấn "gần đây" 75 hiển thị, 1 click; GBP danh mục "Công ty truyền thông" | Cao — đây là nơi khách Hà Nội bấm gọi |
| 3 | **Thiếu bằng chứng tin cậy** (ảnh công trình thật, giá, review, bảo hành) trên trang tiền | CTR 1,93% trong khi vị trí 9,63 | Cao — ảnh hưởng trực tiếp click & lead |
| 4 | **Nội dung dàn mỏng theo mẫu** — 298 trang cùng cấu trúc, khác nhau chủ yếu tên quận/đường | 196 trang không có hiển thị | Trung bình — gây loãng tín hiệu |
| 5 | **Thiếu cụm nội dung phi-thương-mại** (quy định, chi phí, so sánh chất liệu) | Không có trang nào về thủ tục/quy định treo biển | Trung bình — mất traffic đầu phễu, mất link magnet, mất trích dẫn AI |

---

## 4. Thay đổi chiến lược

**Từ:** "thêm 50 trang quận × ngành nữa để có thêm cửa vào Google"
**Sang:** "làm 15 trang mạnh nhất thị trường + 8 trang hút link + 20 tín hiệu ngoài site + Maps"

Lý do bằng số: 298 trang hiện tại chỉ tạo 879 hiển thị. Trung bình mỗi trang thêm vào đang đóng góp **dưới 3 hiển thị/tháng** — tức là mỗi trang mới gần như bằng 0. Trong khi đó, sửa đúng 1 trang đang ở vị trí 4–8 (như trang Hiflex: 59 hiển thị, 0 click) có thể tăng click ngay trong 2–4 tuần.

---

## 5. Kế hoạch 90 ngày

### Giai đoạn 0 — Đo lường & sửa điểm rò rỉ (Tuần 1–2)

| Việc | Cụ thể | Công sức |
| --- | --- | --- |
| Gắn GA4 | 1 property, 4 event: `tel_click`, `zalo_click`, `form_submit`, `direction_click` | 🟢 1 ngày |
| Thêm form thu lead | Form 3 trường (tên, SĐT, ảnh mặt tiền) + Zalo OA; hiện 0 form | 🟢 1 ngày |
| Sửa GBP danh mục | Đổi danh mục chính sang nhóm "sản xuất/thị công biển hiệu" (kiểm tra tên danh mục có sẵn trong GBP: *Sign shop / Công ty quảng cáo / Dịch vụ in ấn*), thêm danh mục phụ + service items | 🟢 1 ngày |
| Xin 10 đánh giá | Danh sách 15 khách cũ, gửi link review qua Zalo, chụp ảnh công trình kèm review | 🟡 1 tuần |
| Đồng bộ NAP | Tên + địa chỉ 92E Ô Chợ Dừa + 0989 521 881 giống nhau trên web, GBP, fanpage, các danh bạ | 🟢 1 ngày |
| Đọc GSC Pages report | Xác định 196 trang 0 hiển thị đang ở trạng thái *Đã thu thập – chưa index* hay *Đã phát hiện* | 🟢 30 phút |

**Cửa kiểm soát ngày 14:** GA4 chạy, GBP đổi danh mục xong, có ≥5 đánh giá. Nếu chưa, dừng các việc khác.

### Giai đoạn 1 — 15 trang ra tiền (Tuần 2–6)

Danh sách chốt theo dữ liệu GSC 28 ngày (không theo cảm tính):

| # | Trang | Hiển thị | Vị trí | Nhấp | Việc cần làm |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | /bao-gia-bien-bat-hiflex-ha-noi/ | 59 | 4,58 | 0 | Thêm bảng giá in bạt theo kích thước (2×1, 3×2, 4×3…), ảnh thật, 3 review, FAQ; hiện chỉ 649 từ, không có FAQ |
| 2 | /bao-gia-bien-alu-chu-noi-ha-noi/ | 27 | 5,19 | 0 | Tách rõ giá nền alu / chữ nổi / LED / khung / lắp đặt; ảnh before-after |
| 3 | /lam-bien-quang-cao-gan-day-ha-noi/ | 93 | 8,75 | 1 | Nhúng bản đồ, liệt kê quận phục vụ trong 2h, số công trình đã làm gần đó; CTA Zalo nổi |
| 4 | /bao-gia-bien-quang-cao-ha-noi/ | 27 | 12,96 | 1 | Đã 2.115 từ + FAQ — chỉ cần thêm ảnh thật và review, không viết lại |
| 5 | /lam-bien-quang-cao-gia-lam/ | 58 | 8,22 | 0 | Làm rõ "giá làm" gồm gì, bảng 3 gói (tiết kiệm / tiêu chuẩn / cao cấp) |
| 6 | /sua-chua-bien-quang-cao-ha-noi/ | 42 | 22,6 | 1 | Sửa chữa là ngách ít cạnh tranh, biên cao: thêm bảng lỗi–nguyên nhân–giá, thời gian có mặt |
| 7 | /bien-khai-truong-ha-noi/ | 18 | 3,89 | 0 | Vị trí 3,89 mà 0 click — thêm "làm trong 24–48h", giá khởi điểm, ảnh khai trương thật |
| 8 | /lam-bien-quang-cao-hai-ba-trung/ | 24 | 7,42 | 0 | Thêm 2–3 công trình thật ở quận này, giờ có mặt |
| 9 | /lam-bien-quang-cao-trung-kinh/ | 20 | 7,85 | 1 | Giữ, thêm ảnh tuyến phố |
| 10 | /lam-bien-quang-cao-minh-khai/ | 13 | 3,54 | 2 | Đang tốt nhất site (CTR 15%) — nhân bản cấu trúc này cho các trang quận khác |
| 11 | /lam-bien-quang-cao-tay-ho/ | 16 | 8,69 | 0 | Ảnh công trình Tây Hồ + bảng giá theo mặt tiền |
| 12 | /lam-bien-quang-cao-dong-da/ | 16 | 10,44 | 1 | Quận nhà (92E Ô Chợ Dừa) — thêm "cách xưởng 2km", ảnh xưởng |
| 13 | /tat-ca-dich-vu-bien-quang-cao-ha-noi/ | 13 | 17,77 | 0 | Hub dịch vụ, đang xếp hạng cho từ khóa đầu ngành ở vị trí 96 — cần nội dung so sánh + link nội bộ từ trang chủ với anchor rõ |
| 14 | /dau-hieu-can-sua-chua-thay-moi-bien-quang-cao/ | 11 | 44,55 | 0 | Bài chẩn đoán — chèn CTA "gửi ảnh biển đang hỏng, báo giá trong 30 phút" |
| 15 | /thi-cong-bien-quang-cao-ha-noi/ | 8 | 38,88 | 0 | Thêm quy trình 5 bước + tiến độ + bảo hành |

**Nguyên tắc sửa từng trang (bắt buộc, không làm lan man):**
1. **Bảng giá thật** ở đầu trang (giá tham khảo theo m²/kích thước, ghi rõ gồm/không gồm gì). Đối thủ đầu ngành đều thắng bằng bảng giá — đây là mức sàn để cạnh tranh.
2. **≥5 ảnh công trình thật**, có tên công trình và địa điểm — không dùng ảnh stock.
3. **≥3 đánh giá khách hàng thật** (chỉ gắn schema sau khi có review thật).
4. **CTA Zalo/gọi trong 1 màn hình đầu**.
5. **Title/description**: thêm con số cụ thể (giá khởi điểm, số công trình, thời gian thi công) — đây là cách tăng CTR khi thương hiệu chưa được biết.

**Kỳ vọng:** 15 trang này hiện chiếm 437/879 hiển thị toàn site nhưng chỉ tạo 7 click (CTR 1,6%). Mục tiêu 6 tuần: CTR nhóm này lên 4–6%, tức khoảng 17–26 click/28 ngày thay vì 7.

### Giai đoạn 2 — Nội dung hút link & khách mới (Tuần 3–10)

Chỉ 8 trang, không phải 80. Mỗi trang phải trả lời được một câu hỏi mà chủ shop hỏi trước khi làm biển:

| # | Trang mới | Vì sao | Công sức |
| --- | --- | --- | --- |
| 1 | Quy định treo biển hiệu tại Hà Nội (kích thước, vị trí, nội dung) | Chủ shop sợ bị phạt; đối thủ gần như không có; dễ được trích dẫn bởi AI & báo | 🔴 3–5 ngày (phải đối chiếu văn bản pháp luật hiện hành) |
| 2 | Thủ tục/hồ sơ khi treo biển quảng cáo ngoài trời | Cùng cụm, tăng độ tin cậy | 🟡 2 ngày |
| 3 | Mức xử phạt khi treo biển sai quy định | Truy vấn sợ rủi ro, chuyển đổi cao | 🟡 2 ngày |
| 4 | So sánh chi phí alu chữ nổi vs hiflex vs hộp đèn LED (bảng theo m² + tuổi thọ + bảo trì) | Người mua đang cân nhắc; trang này nuôi 3 trang giá | 🟡 3 ngày |
| 5 | Checklist 10 bước làm biển hiệu cho quán mới mở | Đúng thời điểm mua; hút link từ blog F&B/retail | 🟡 3 ngày |
| 6 | Bảng giá in bạt theo kích thước (2×1 → 6×3) | Đối thủ đang thắng bằng trang dạng này | 🟢 1 ngày |
| 7 | Case study 3 dự án (vật liệu, kích thước, thời gian, ảnh trước/sau, giá nếu được phép) | Bằng chứng E-E-A-T; dùng lại cho fanpage | 🟡 3 ngày |
| 8 | Nâng cấp (không tạo mới) trang "biển ngoài trời bền bao lâu" | Đã có, thiếu dữ liệu thật về tuổi thọ vật liệu | 🟢 1 ngày |

**Quy tắc nội dung:** mọi con số về quy định pháp lý phải có nguồn văn bản (số hiệu, ngày ban hành) và ngày cập nhật; mọi mức giá phải có nhãn "giá tham khảo – cập nhật [tháng/năm]".

### Giai đoạn 3 — Tín hiệu ngoài site (Tuần 2–12, chạy song song)

Đây là việc đang thiếu hoàn toàn và là lý do từ khóa đầu ngành ở vị trí 96.

| Kênh | Cách làm | Mục tiêu 90 ngày |
| --- | --- | --- |
| Citation địa phương | Google Maps, Bing Places, Apple Business Connect, Facebook, Trang Vàng, Yellow Pages VN, danh bạ doanh nghiệp Hà Nội — NAP giống tuyệt đối | 10–15 hồ sơ |
| Nhà cung cấp vật liệu | Xin xuất hiện trong mục "đối tác thi công/nhà phân phối" của nhà cung cấp alu, mica, LED, bạt | 3–5 link |
| Khách hàng doanh nghiệp | Xin credit "thi công: Bông Sen Trắng" ở footer/trang công trình của khách (chuỗi cafe, spa, showroom) | 3–5 link |
| Công trình trường học/đơn vị | Học viện Khoa học Quân sự, ĐH Kinh tế… — xin credit trong trang tin/hình ảnh | 1–2 link |
| Báo/PR địa phương | 1–2 bài về dự án hoặc về "biển hiệu đúng quy định" (dùng trang pháp lý ở mục 2) | 1–2 link |
| Hội/nhóm ngành | Hội in quảng cáo, nhóm doanh nghiệp quận Đống Đa — hồ sơ thành viên có link | 2–3 link |

**Không mua link theo gói, không đăng 500 bài forum.** 15–20 tên miền liên quan thật có giá trị hơn 500 link rác và không mang rủi ro.

### Giai đoạn 4 — Dọn và gộp (Tuần 8–12, sau khi có dữ liệu)

196 trang 0 hiển thị không nên xóa hàng loạt. Quy trình:
1. Lọc theo 3 tiêu chí: có demand thật (hiển thị trong 6 tháng) / nội dung khác biệt thật / được link nội bộ.
2. Nhóm 3–5 trang gần trùng (cùng quận, cùng ngành, cùng ý định) → gộp thành 1 trang mạnh, 301 các trang còn lại.
3. Trang không có demand + không khác biệt → `noindex` (không xóa, để giữ liên kết cũ).
4. Mục tiêu: 298 → 180–220 trang, mỗi trang còn lại đều có lý do tồn tại.

Đo lại sau 60 ngày: nếu hiển thị toàn site tăng thì hướng đi đúng.

---

## 6. Mục tiêu 30 / 60 / 90 ngày

Đây là **mục tiêu giả định**, dựa trên giả định CTR 2,5–3,5% sau khi sửa snippet và có đánh giá. Không phải cam kết.

| Mốc | Hiển thị/28 ngày | Nhấp/28 ngày | Lead từ organic | Tín hiệu ngoài |
| --- | ---: | ---: | ---: | --- |
| Hiện tại | 879 | 17 | ~1–3 (không đo được) | ~0 |
| 30 ngày | 1.000–1.200 | 25–35 | 3–5 | 10 citation, 10 review |
| 60 ngày | 1.800–2.400 | 50–70 | 6–10 | 20–25 citation, 10–15 link |
| 90 ngày | 2.800–3.800 | 80–120 | 10–15 | 25–30 citation, 15–20 link |

**Kỳ vọng thực tế:** từ khóa đầu ngành "làm biển quảng cáo Hà Nội" cần 6–12 tháng với tên miền yếu. Trong 90 ngày, lead đến từ **Maps + truy vấn "gần đây" + truy vấn giá/sửa chữa**, không phải từ khóa đầu ngành.

---

## 7. Nhịp làm việc hàng tuần

| Ngày | Việc | Thời gian |
| --- | --- | --- |
| Thứ 2 | Đọc GSC: hiển thị/nhấp theo trang, 3 truy vấn mới | 20 phút |
| Thứ 3 | Sửa 2 trang trong danh sách 15 | 2 giờ |
| Thứ 4 | Viết/xuất bản 1 trang nội dung mới | 3 giờ |
| Thứ 5 | 1 việc backlink (liên hệ đối tác, gửi hồ sơ danh bạ) | 1 giờ |
| Thứ 6 | Đăng GBP (ảnh + bài), trả lời đánh giá, mời 1 review mới | 30 phút |

---

## 8. Việc không nên làm

- **Không tạo thêm trang quận/phường/đường** trong 90 ngày tới. 196 trang 0 hiển thị là bằng chứng mô hình này đã bão hòa ở quy mô hiện tại.
- **Không đổi title hàng loạt** khi chưa có dữ liệu — mỗi lần đổi làm mất 2–4 tuần để Google đánh giá lại.
- **Không mua backlink theo gói** (1000 link giá rẻ) — với tên miền mới, rủi ro cao hơn lợi ích.
- **Không bịa số** về quy định pháp lý, giá, số công trình. Với ngành này, một con số sai làm mất uy tín nhiều hơn lợi ích SEO.
- **Không gắn schema review** khi chưa có đánh giá thật (hiện site đang đúng khi không có `aggregateRating`).

---

## 9. Ba việc làm ngay trong 7 ngày tới

1. **Gắn GA4 + form 3 trường** — nếu không đo được lead thì mọi tối ưu sau này đều là phỏng đoán. (1 ngày)
2. **Đổi danh mục GBP + xin 5 đánh giá đầu tiên** — đây là kênh có khách sẵn, không phụ thuộc thứ hạng. (3 ngày)
3. **Sửa trang Hiflex** (59 hiển thị, vị trí 4,58, 0 click) — thêm bảng giá theo kích thước + 5 ảnh thật + 3 review + FAQ. Đây là trang gần tiền nhất trong toàn site. (1 ngày)

---

*Kế hoạch này thay thế cách tiếp cận "thêm trang địa phương" đã dùng từ tháng 6–8/2026. Các file SEO-ACTION cũ vẫn dùng được làm checklist kỹ thuật, nhưng thứ tự ưu tiên giờ khác: tín hiệu ngoài site và Maps trước, nội dung sau.*
