from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "assets" / "images"
OUT_DIR = ROOT / "social-assets"
OUT_DIR.mkdir(exist_ok=True)

W, H = 1640, 607


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size=size)


FONT_REG = font("arial.ttf", 30)
FONT_MED = font("arialbd.ttf", 32)
FONT_BOLD = font("arialbd.ttf", 54)
FONT_BIG = font("arialbd.ttf", 76)
FONT_SMALL = font("arial.ttf", 24)
FONT_BUTTON = font("arialbd.ttf", 38)


def cover_crop(path: Path, size: tuple[int, int]) -> Image.Image:
    img = Image.open(path).convert("RGB")
    target_w, target_h = size
    ratio = max(target_w / img.width, target_h / img.height)
    new_size = (int(img.width * ratio), int(img.height * ratio))
    img = img.resize(new_size, Image.Resampling.LANCZOS)
    left = (img.width - target_w) // 2
    top = (img.height - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


def rounded_paste(base: Image.Image, img: Image.Image, box: tuple[int, int], radius: int = 28) -> None:
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, img.width, img.height), radius=radius, fill=255)
    base.paste(img, box, mask)


def draw_fit_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    xy: tuple[int, int],
    max_width: int,
    font_obj: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    line_spacing: int = 8,
) -> int:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        test = word if not current else f"{current} {word}"
        if draw.textbbox((0, 0), test, font=font_obj)[2] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)

    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=font_obj, fill=fill)
        bbox = draw.textbbox((x, y), line, font=font_obj)
        y = bbox[3] + line_spacing
    return y


def make_gradient() -> Image.Image:
    img = Image.new("RGB", (W, H), "#10284a")
    px = img.load()
    for y in range(H):
        for x in range(W):
            t = x / W
            u = y / H
            r = int(11 + 9 * t + 10 * u)
            g = int(40 + 35 * t + 6 * u)
            b = int(75 + 55 * t + 18 * u)
            px[x, y] = (r, g, b)
    return img


def add_photo_panel(base: Image.Image) -> None:
    photos = [
        ("du-an-hisuhi-wet-brush-mat-dung-led.jpg", (980, 36), (606, 246)),
        ("du-an-xe-dien-viet-thanh-bien-mat-tien-led.jpg", (1018, 318), (270, 222)),
        ("du-an-gao-viet-bien-mat-tien-do.jpg", (1318, 318), (270, 222)),
    ]
    for filename, pos, size in photos:
        img = cover_crop(IMAGES / filename, size)
        img = ImageEnhance.Contrast(img).enhance(1.06)
        img = ImageEnhance.Color(img).enhance(1.05)
        rounded_paste(base, img, pos)

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.polygon([(900, 0), (1120, 0), (840, H), (660, H)], fill=(7, 25, 47, 120))
    od.rectangle((0, 0, W, H), outline=(255, 255, 255, 18), width=2)
    base.alpha_composite(overlay)


def add_text(base: Image.Image) -> None:
    draw = ImageDraw.Draw(base)

    # Soft text panel, still transparent enough to keep the cover from looking boxed in.
    panel = Image.new("RGBA", (820, 520), (7, 24, 45, 164))
    panel = panel.filter(ImageFilter.GaussianBlur(0.2))
    base.alpha_composite(panel, (82, 44))

    logo = Image.open(IMAGES / "logo-whitelotus.png").convert("RGBA")
    logo_ratio = 290 / logo.width
    logo = logo.resize((290, int(logo.height * logo_ratio)), Image.Resampling.LANCZOS)
    logo_bg = Image.new("RGBA", (340, 86), (255, 255, 255, 242))
    bg_draw = ImageDraw.Draw(logo_bg)
    bg_draw.rounded_rectangle((0, 0, 340, 86), radius=16, fill=(255, 255, 255, 242))
    base.alpha_composite(logo_bg, (108, 62))
    base.alpha_composite(logo, (133, 79))

    draw.text((488, 70), "CÔNG TY TNHH TRUYỀN THÔNG", font=FONT_SMALL, fill=(190, 214, 238))
    draw.text((488, 102), "BÔNG SEN TRẮNG", font=FONT_MED, fill=(255, 255, 255))

    draw.text((108, 170), "LÀM BIỂN", font=FONT_BIG, fill=(255, 255, 255))
    draw.text((108, 248), "QUẢNG CÁO HÀ NỘI", font=FONT_BIG, fill=(255, 211, 81))

    y = 342
    y = draw_fit_text(
        draw,
        "Sản xuất • Thi công • Lắp đặt • Bảo hành",
        (112, y),
        760,
        FONT_MED,
        (232, 242, 251),
        line_spacing=4,
    )
    y += 6
    y = draw_fit_text(
        draw,
        "Biển alu chữ nổi | Hộp đèn LED | Bảng hiệu cửa hàng",
        (112, y),
        760,
        FONT_REG,
        (207, 224, 237),
        line_spacing=4,
    )

    button_x, button_y = 300, 486
    draw.rounded_rectangle((button_x, button_y, button_x + 560, button_y + 78), radius=18, fill=(255, 211, 81))
    draw.text((button_x + 32, button_y + 17), "Zalo/Gọi 0989 521 881", font=FONT_BUTTON, fill=(13, 38, 64))

    draw.text((112, 574), "92E Ô Chợ Dừa, Đống Đa, Hà Nội", font=FONT_SMALL, fill=(222, 235, 244))

    draw.rounded_rectangle((1018, 552, 1578, 594), radius=12, fill=(9, 31, 58, 210))
    draw.text((1044, 558), "Làm nhanh • Giá tốt • Đúng thiết kế", font=FONT_REG, fill=(255, 255, 255))


def save_outputs(base: Image.Image) -> None:
    png = OUT_DIR / "facebook-cover-bong-sen-trang-1640x607.png"
    jpg = OUT_DIR / "facebook-cover-bong-sen-trang-1640x607.jpg"
    small_jpg = OUT_DIR / "facebook-cover-bong-sen-trang-851x315.jpg"

    rgb = base.convert("RGB")
    base.save(png, optimize=True)
    rgb.save(jpg, quality=92, optimize=True, progressive=True)

    small = rgb.resize((851, 315), Image.Resampling.LANCZOS)
    small.save(small_jpg, quality=88, optimize=True, progressive=True)


def main() -> None:
    base = make_gradient().convert("RGBA")
    add_photo_panel(base)
    add_text(base)
    save_outputs(base)


if __name__ == "__main__":
    main()
