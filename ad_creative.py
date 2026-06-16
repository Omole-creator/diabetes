from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math

W, H = 1080, 1350
BLUE = (0, 94, 184)
GREEN = (39, 174, 96)
CREAM = (247, 250, 252)
INK = (14, 34, 51)
AMBER = (245, 191, 18)
WHITE = (255, 255, 255)

F = "_adfonts/"
xb  = lambda s: ImageFont.truetype(F + "Poppins-ExtraBold.ttf", s)
sb  = lambda s: ImageFont.truetype(F + "Poppins-SemiBold.ttf", s)
med = lambda s: ImageFont.truetype(F + "Poppins-Medium.ttf", s)
reg = lambda s: ImageFont.truetype(F + "Poppins-Regular.ttf", s)

img = Image.new("RGB", (W, H), CREAM)
d = ImageDraw.Draw(img)

BAND = 600
d.rectangle([0, 0, W, BAND], fill=BLUE)
for y in range(20, BAND, 26):
    for x in range(20, W, 26):
        d.ellipse([x, y, x + 2, y + 2], fill=(20, 110, 196))

def ctext(y, text, fnt, fill, tracking=0):
    if tracking:
        ws = [d.textlength(c, font=fnt) + tracking for c in text]
        x = (W - (sum(ws) - tracking)) / 2
        for c, w in zip(text, ws):
            d.text((x, y), c, font=fnt, fill=fill); x += w
    else:
        d.text(((W - d.textlength(text, font=fnt)) / 2, y), text, font=fnt, fill=fill)

# kicker pill
kick, kf = "FROM A NIGERIAN DOCTOR", sb(24)
kw = sum(d.textlength(c, font=kf) + 3 for c in kick) - 3
pw = kw + 64
d.rounded_rectangle([(W - pw) / 2, 58, (W + pw) / 2, 118], radius=30, fill=(34, 120, 202))
ctext(72, kick, kf, WHITE, tracking=3)

# headline (curiosity + emotion; cover carries the descriptive)
ctext(160, "Good News for Every", xb(82), WHITE)
ctext(262, "Rice & Eba Lover", xb(82), AMBER)
# benefit accent
ctext(398, "Calm blood sugar. Same food you love.", sb(42), (225, 238, 250))

# ---------- hero book ----------
cover = Image.open("main.png").convert("RGBA")
cover = cover.crop(cover.getchannel("A").getbbox())
bh = 580
bw = round(cover.width * bh / cover.height)
cover = cover.resize((bw, bh), Image.LANCZOS)
bx, by = (W - bw) // 2, 520
sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
sh.paste(Image.new("RGBA", cover.size, (0, 0, 0, 115)), (bx + 12, by + 30), cover.getchannel("A"))
sh = sh.filter(ImageFilter.GaussianBlur(30))
img.paste(sh, (0, 0), sh)
img.paste(cover, (bx, by), cover)

# ---------- bottom ----------
ctext(1150, "No special food. No new drugs. Just your own kitchen.", med(32), INK)

cta, cf = "Learn More", sb(40)
cw = d.textlength(cta, font=cf)
chip_w, chip_h = cw + 160, 92
cx0, cy0 = (W - chip_w) / 2, 1215
d.rounded_rectangle([cx0, cy0, cx0 + chip_w, cy0 + chip_h], radius=46, fill=GREEN)
d.text((cx0 + 58, cy0 + 22), cta, font=cf, fill=WHITE)
ax, ay = cx0 + chip_w - 72, cy0 + chip_h / 2
d.line([(ax, ay), (ax + 36, ay)], fill=WHITE, width=6)
d.line([(ax + 36, ay), (ax + 21, ay - 14)], fill=WHITE, width=6)
d.line([(ax + 36, ay), (ax + 21, ay + 14)], fill=WHITE, width=6)

img.save("fb-ad.png", quality=95)
print("saved fb-ad.png", img.size)
