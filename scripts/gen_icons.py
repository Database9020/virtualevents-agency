"""Generate apple-touch-icon.png and a default OG share image (og-image.jpg)
from scratch with Pillow, matching the site's dark + mint->yellow accent
palette. Run with: python3 scripts/gen_icons.py
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")

BG = (18, 20, 23, 255)
MINT = (0, 255, 163, 255)
YELLOW = (250, 255, 0, 255)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(4))


def gradient_stroke_color(t):
    return lerp(MINT, YELLOW, t)


def rounded_rect(draw, box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def make_touch_icon(size=180, path="apple-touch-icon.png"):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    rounded_rect(draw, (0, 0, size, size), radius=int(size * 0.22), fill=BG)

    # Simple monitor + play glyph using the accent gradient approximated by
    # a mid-tone of the gradient (a true per-pixel gradient stroke is
    # overkill for a 180px icon).
    mid = lerp(MINT, YELLOW, 0.5)
    margin = size * 0.22
    top = size * 0.30
    bottom = size * 0.72
    stroke_w = max(3, size // 24)
    draw.rounded_rectangle((margin, top, size - margin, bottom), radius=size * 0.07, outline=mid, width=stroke_w)
    # stand
    cx = size / 2
    draw.line((cx, bottom, cx, bottom + size * 0.06), fill=mid, width=stroke_w)
    draw.line((cx - size * 0.12, bottom + size * 0.06, cx + size * 0.12, bottom + size * 0.06), fill=mid, width=stroke_w)
    # play triangle
    r = size * 0.09
    cy = (top + bottom) / 2
    draw.polygon(
        [(cx - r * 0.6, cy - r), (cx - r * 0.6, cy + r), (cx + r * 0.9, cy)],
        fill=mid,
    )
    img.save(os.path.join(PUBLIC, path))
    print(f"wrote {path} ({size}x{size})")


def make_og_image(width=1200, height=630, path="og-image.jpg"):
    img = Image.new("RGB", (width, height), BG[:3])

    # Soft diagonal accent glow confined to the top-right corner, echoing
    # the site's 340deg mint->yellow gradient without harsh banding.
    diag = Image.linear_gradient("L").rotate(-25, expand=True).resize((width * 2, height * 2))
    diag = diag.crop((width * 2 - width, 0, width * 2, height))
    mint_layer = Image.new("RGB", (width, height), MINT[:3])
    yellow_layer = Image.new("RGB", (width, height), YELLOW[:3])
    gradient = Image.composite(yellow_layer, mint_layer, diag)

    # Fade the whole gradient layer down and mask it to the corner so it
    # reads as a glow, not a flat wash.
    fade_mask = Image.new("L", (width, height), 0)
    fdraw = ImageDraw.Draw(fade_mask)
    fdraw.ellipse((width * 0.55, -height * 0.7, width * 1.35, height * 0.75), fill=60)
    fade_mask = fade_mask.filter(ImageFilter.GaussianBlur(90))
    img = Image.composite(gradient, img, fade_mask)
    draw = ImageDraw.Draw(img)

    def load_font(size, bold=True):
        candidates = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        ]
        for c in candidates:
            if os.path.exists(c):
                return ImageFont.truetype(c, size)
        return ImageFont.load_default()

    title_font = load_font(64)
    sub_font = load_font(30, bold=False)

    margin = 90
    draw.text((margin, 210), "We Handle Your Virtual Events", font=title_font, fill=(245, 246, 247))
    draw.text((margin, 285), "End-to-End. You Just Show Up.", font=title_font, fill=lerp(MINT, YELLOW, 0.5)[:3])
    draw.text((margin, 385), "Webinar production, delivery & content repurposing", font=sub_font, fill=(154, 160, 166))
    draw.text((margin, 425), "— fully done for you.", font=sub_font, fill=(154, 160, 166))

    draw.text((margin, height - 90), "virtualevents.agency", font=sub_font, fill=(245, 246, 247))

    img.save(os.path.join(PUBLIC, path), quality=88)
    print(f"wrote {path} ({width}x{height})")


if __name__ == "__main__":
    os.makedirs(PUBLIC, exist_ok=True)
    make_touch_icon()
    make_og_image()
