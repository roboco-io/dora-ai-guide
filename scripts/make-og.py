#!/usr/bin/env python3
"""Generate Open Graph thumbnails (1200x630) for the DORA AI Guide site.

Outputs:
  docs/public/og.png     (Korean)
  docs/public/og.ja.png  (Japanese)

Requires Pillow and macOS system fonts (Apple SD Gothic Neo / Hiragino Sans).
Run from the repository root:  python3 scripts/make-og.py
"""
from __future__ import annotations

import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "docs", "public")

NAVY_TOP = (7, 22, 54)
NAVY_BOTTOM = (13, 55, 138)
ACCENT = (124, 196, 255)
ACCENT_SOFT = (150, 190, 255)
WHITE = (255, 255, 255)
MUTED = (176, 196, 232)
DIVIDER = (60, 96, 168)

KO_FONT = "/System/Library/Fonts/AppleSDGothicNeo.ttc"
JA_W3 = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"
JA_W6 = "/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc"
LATIN = "/System/Library/Fonts/HelveticaNeue.ttc"

KO = dict(
    eyebrow="DORA AI GUIDE",
    title="AI는 증폭기다",
    subtitle="DORA AI 리서치, 한국어로 요약하다",
    bullets="리포트 4종 · 7대 역량 · 인사이트 12편",
    url="roboco.io/dora-ai-guide",
    note="비공식 한국어·일본어 요약 가이드",
    title_size=96,
    fonts=(KO_FONT, 6, KO_FONT, 2, KO_FONT, 0),  # title, subtitle, body
)
JA = dict(
    eyebrow="DORA AI GUIDE",
    title="AIは増幅器である",
    subtitle="DORAのAIリサーチを日本語で要約",
    bullets="レポート4本 · 7つのケイパビリティ · インサイト12本",
    url="roboco.io/dora-ai-guide/ja",
    note="非公式の日本語・韓国語要約ガイド",
    title_size=84,
    fonts=(JA_W6, 0, JA_W3, 0, JA_W3, 0),
)


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size, index=index)


def gradient(size, top, bottom) -> Image.Image:
    w, h = size
    base = Image.new("RGB", (1, h))
    for y in range(h):
        t = y / max(h - 1, 1)
        base.putpixel((0, y), tuple(round(top[i] + (bottom[i] - top[i]) * t) for i in range(3)))
    return base.resize((w, h))


def motif_layer() -> Image.Image:
    """Radiating amplification arcs + ascending gain bars on the right."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = 968, 248

    # Soft glow
    for r, a in [(340, 8), (260, 14), (180, 22), (110, 32)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(46, 104, 200, a))

    # Radiating arcs
    for r, alpha in [(300, 22), (230, 36), (160, 54), (96, 76)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(124, 196, 255, alpha), width=3)

    # Ascending gain bars
    heights = [46, 96, 146, 196]
    bw, gap = 34, 20
    total = len(heights) * bw + (len(heights) - 1) * gap
    x0 = cx - total // 2
    base_y = cy + 120
    colors = [(64, 122, 214), (78, 146, 232), (98, 170, 246), (124, 196, 255)]
    for i, bh in enumerate(heights):
        x = x0 + i * (bw + gap)
        d.rounded_rectangle([x, base_y - bh, x + bw, base_y], radius=bw // 2, fill=colors[i] + (238,))
    d.line([x0 - 20, base_y + 12, x0 + total + 20, base_y + 12], fill=(124, 196, 255, 95), width=2)
    return layer


def build(cfg: dict) -> Image.Image:
    im = gradient((W, H), NAVY_TOP, NAVY_BOTTOM).convert("RGBA")
    im = Image.alpha_composite(im, motif_layer())
    d = ImageDraw.Draw(im)

    pad = 78
    (title_path, title_ix, sub_path, sub_ix, body_path, body_ix) = cfg["fonts"]

    # Eyebrow pill
    ef = font(LATIN, 24, 1)
    eb = d.textbbox((0, 0), cfg["eyebrow"], font=ef)
    ew = eb[2] - eb[0]
    d.rounded_rectangle(
        [pad, 84, pad + ew + 44, 132], radius=24,
        fill=(20, 52, 110, 255), outline=(124, 196, 255, 150), width=2,
    )
    d.text((pad + 22, 108), cfg["eyebrow"], font=ef, fill=ACCENT, anchor="lm")

    # Title / subtitle / bullets
    d.text((pad, 172), cfg["title"], font=font(title_path, cfg["title_size"], title_ix), fill=WHITE, anchor="la")
    d.text((pad, 312), cfg["subtitle"], font=font(sub_path, 40, sub_ix), fill=(226, 236, 252), anchor="la")
    d.text((pad + 2, 386), cfg["bullets"], font=font(body_path, 27, body_ix), fill=ACCENT_SOFT, anchor="la")

    # Divider + footer
    d.line([pad, 470, W - pad, 470], fill=DIVIDER, width=2)
    d.text((pad, 514), cfg["url"], font=font(LATIN, 26, 1), fill=WHITE, anchor="la")
    d.text((W - pad, 516), "dora.dev/ai  ·  CC BY 4.0", font=font(LATIN, 22, 0), fill=MUTED, anchor="ra")
    d.text((pad, 556), cfg["note"], font=font(body_path, 19, body_ix), fill=(122, 150, 200), anchor="la")

    return im.convert("RGB")


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    build(KO).save(os.path.join(OUT, "og.png"))
    build(JA).save(os.path.join(OUT, "og.ja.png"))
    print("wrote og.png, og.ja.png ->", os.path.abspath(OUT))


if __name__ == "__main__":
    main()
