from __future__ import annotations

import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "google-business-upload"
OUT = ROOT / "video-assets"
SLIDES = OUT / "short-2026-06-09-slides"
OUT.mkdir(exist_ok=True)
SLIDES.mkdir(exist_ok=True)

W, H = 1080, 1920
FPS = 30
SLIDE_SECONDS = 2.8


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size=size)


FONT_HERO = font("arialbd.ttf", 82)
FONT_TITLE = font("arialbd.ttf", 68)
FONT_BODY = font("arial.ttf", 46)
FONT_BODY_BOLD = font("arialbd.ttf", 48)
FONT_SMALL = font("arial.ttf", 34)
FONT_CTA = font("arialbd.ttf", 62)


def cover_crop(path: Path, size: tuple[int, int]) -> Image.Image:
    img = Image.open(path).convert("RGB")
    target_w, target_h = size
    ratio = max(target_w / img.width, target_h / img.height)
    img = img.resize((int(img.width * ratio), int(img.height * ratio)), Image.Resampling.LANCZOS)
    left = (img.width - target_w) // 2
    top = (img.height - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


def wrap(draw: ImageDraw.ImageDraw, text: str, font_obj: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in text.split():
        test = word if not current else f"{current} {word}"
        if draw.textbbox((0, 0), test, font=font_obj)[2] <= max_w:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_shadow_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    font_obj: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    shadow: tuple[int, int, int] = (0, 0, 0),
    stroke: int = 2,
) -> None:
    x, y = xy
    draw.text((x + 3, y + 4), text, font=font_obj, fill=shadow, stroke_width=stroke, stroke_fill=shadow)
    draw.text((x, y), text, font=font_obj, fill=fill, stroke_width=stroke, stroke_fill=(8, 27, 49))


def make_gradient() -> Image.Image:
    img = Image.new("RGB", (W, H), "#0c2746")
    px = img.load()
    for y in range(H):
        for x in range(W):
            t = y / H
            px[x, y] = (8 + int(14 * t), 34 + int(30 * t), 64 + int(46 * t))
    return img.convert("RGBA")


def make_slide(index: int, photo: str, kicker: str, title: str, body: str, cta: str | None = None) -> Path:
    base = make_gradient()
    photo_img = cover_crop(SRC / photo, (W, 1120))
    photo_img = ImageEnhance.Contrast(photo_img).enhance(1.06)
    photo_img = ImageEnhance.Color(photo_img).enhance(1.04)
    base.alpha_composite(photo_img.convert("RGBA"), (0, 0))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, W, 1120), fill=(0, 0, 0, 58))
    od.rectangle((0, 940, W, H), fill=(9, 29, 55, 230))
    od.rectangle((0, 0, W, H), outline=(255, 211, 81, 160), width=12)
    od.polygon([(0, 900), (W, 760), (W, 1040), (0, 1160)], fill=(255, 211, 81, 224))
    base.alpha_composite(overlay)

    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle((64, 84, 520, 152), radius=16, fill=(255, 255, 255, 232))
    logo = Image.open(SRC / "01-logo-bong-sen-trang.png").convert("RGBA")
    logo = logo.resize((390, int(390 * logo.height / logo.width)), Image.Resampling.LANCZOS)
    base.alpha_composite(logo, (96, 101))

    draw_shadow_text(draw, (68, 178), kicker.upper(), FONT_SMALL, (255, 211, 81), stroke=1)

    y = 1010
    for line in wrap(draw, title, FONT_TITLE, 920):
        draw_shadow_text(draw, (68, y), line, FONT_TITLE, (255, 255, 255), stroke=2)
        y += 78

    y += 18
    for line in wrap(draw, body, FONT_BODY, 930):
        draw.text((72, y), line, font=FONT_BODY, fill=(224, 238, 248))
        y += 58

    if cta:
        draw.rounded_rectangle((72, 1662, 1008, 1770), radius=28, fill=(255, 211, 81))
        text_w = draw.textbbox((0, 0), cta, font=FONT_CTA)[2]
        draw.text(((W - text_w) // 2, 1682), cta, font=FONT_CTA, fill=(10, 34, 60))
        draw.text((92, 1808), "92E Ô Chợ Dừa, Đống Đa, Hà Nội", font=FONT_SMALL, fill=(218, 233, 244))
    else:
        draw.rounded_rectangle((72, 1704, 1008, 1792), radius=24, fill=(255, 211, 81))
        draw.text((118, 1724), "Zalo/Gọi 0989 521 881", font=FONT_BODY_BOLD, fill=(10, 34, 60))
        draw.text((118, 1816), "lam-bien-quang-cao-bong-sen-trang.netlify.app", font=FONT_SMALL, fill=(218, 233, 244))

    out = SLIDES / f"slide-{index:02d}.png"
    base.convert("RGB").save(out, quality=95)
    return out


def build_video(slides: list[Path]) -> Path:
    concat = OUT / "short-2026-06-09-concat.txt"
    lines: list[str] = []
    for slide in slides:
        safe = slide.as_posix().replace("'", "'\\''")
        lines.append(f"file '{safe}'")
        lines.append(f"duration {SLIDE_SECONDS}")
    lines.append(f"file '{slides[-1].as_posix()}'")
    concat.write_text("\n".join(lines), encoding="utf-8")

    mp4 = OUT / "bong-sen-trang-short-bao-gia-bien-quang-cao-2026-06-09.mp4"
    cmd = [
        "ffmpeg",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(concat),
        "-vf",
        f"fps={FPS},format=yuv420p",
        "-c:v",
        "libx264",
        "-profile:v",
        "high",
        "-crf",
        "20",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(mp4),
    ]
    subprocess.run(cmd, check=True)
    return mp4


def main() -> None:
    data = [
        (
            "10-gao-viet-bien-mat-tien-do.jpg",
            "Bông Sen Trắng",
            "Cần làm biển quảng cáo tại Hà Nội?",
            "Gửi ảnh mặt tiền để được tư vấn vật liệu, kích thước và chi phí phù hợp.",
            None,
        ),
        (
            "04-bien-chu-noi-mat-tien.jpg",
            "Biển alu chữ nổi",
            "Biển mặt tiền rõ thương hiệu",
            "Phù hợp cửa hàng, showroom, văn phòng và điểm bán cần nhận diện chắc chắn.",
            None,
        ),
        (
            "11-xe-dien-viet-thanh-bien-mat-tien-led.jpg",
            "Hộp đèn LED",
            "Nổi bật hơn vào buổi tối",
            "Tư vấn biển phát sáng, hộp đèn, chữ nổi LED theo mặt bằng thực tế.",
            None,
        ),
        (
            "09-may-skin-bien-chu-noi-sang.jpg",
            "Spa, salon, clinic",
            "Mặt tiền gọn, sáng, dễ đọc",
            "Thi công chữ nổi, logo, backdrop lễ tân và biển nhận diện trong nhà.",
            None,
        ),
        (
            "13-sb-invest-backdrop-le-tan.jpg",
            "Báo giá nhanh",
            "Cần gửi 5 thông tin",
            "Ảnh mặt tiền, kích thước, địa chỉ, logo/nội dung biển và ngày cần hoàn thành.",
            None,
        ),
        (
            "14-hisuhi-wet-brush-mat-dung-led.jpg",
            "Liên hệ",
            "Sản xuất • Thi công • Lắp đặt",
            "Làm nhanh, giá tốt, bảo hành theo hạng mục. Nhận tư vấn tại Hà Nội.",
            "Zalo/Gọi 0989 521 881",
        ),
    ]
    slides = [make_slide(i + 1, *row) for i, row in enumerate(data)]
    thumbnail = OUT / "bong-sen-trang-short-thumbnail-2026-06-09.jpg"
    Image.open(slides[0]).save(thumbnail, quality=92, optimize=True)
    mp4 = build_video(slides)
    print(mp4.name)
    print(thumbnail.name)


if __name__ == "__main__":
    main()
