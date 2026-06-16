from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1080, 1350
INK = (12, 27, 41)
INK2 = (22, 44, 64)
GREEN = (39, 174, 96)
AMBER = (245, 191, 18)
WHITE = (255, 255, 255)
MUTE = (179, 198, 214)

F = "_adfonts/"
xb  = lambda s: ImageFont.truetype(F + "Poppins-ExtraBold.ttf", s)
sb  = lambda s: ImageFont.truetype(F + "Poppins-SemiBold.ttf", s)
med = lambda s: ImageFont.truetype(F + "Poppins-Medium.ttf", s)

img = Image.new("RGB", (W, H), INK)
d = ImageDraw.Draw(img)

# faint dot texture
for y in range(20, H, 28):
    for x in range(20, W, 28):
        d.ellipse([x, y, x + 2, y + 2], fill=(20, 40, 58))
# top + bottom green accent bars
d.rectangle([0, 0, W, 12], fill=GREEN)

def ctext(y, text, fnt, fill, tracking=0):
    if tracking:
        ws = [d.textlength(c, font=fnt) + tracking for c in text]
        x = (W - (sum(ws) - tracking)) / 2
        for c, w in zip(text, ws):
            d.text((x, y), c, font=fnt, fill=fill); x += w
    else:
        d.text(((W - d.textlength(text, font=fnt)) / 2, y), text, font=fnt, fill=fill)

# kicker pill (outlined)
kick, kf = "ATTENTION RICE & SWALLOW LOVERS", sb(23)
kw = sum(d.textlength(c, font=kf) + 3 for c in kick) - 3
pw = kw + 60
d.rounded_rectangle([(W - pw) / 2, 60, (W + pw) / 2, 116], radius=28, fill=INK2, outline=AMBER, width=2)
ctext(73, kick, kf, AMBER, tracking=3)

# headline (myth-buster / curiosity)
ctext(168, "Your Swallow Was", xb(80), WHITE)
ctext(266, "Never the Problem", xb(80), AMBER)

# sub
ctext(402, "Enjoy rice, eba and pounded yam", med(36), MUTE)
ctext(452, "with calm, steady blood sugar.", med(36), MUTE)

# ---------- hero book with soft glow ----------
cover = Image.open("main.png").convert("RGBA")
cover = cover.crop(cover.getchannel("A").getbbox())
bh = 580
bw = round(cover.width * bh / cover.height)
cover = cover.resize((bw, bh), Image.LANCZOS)
bx, by = (W - bw) // 2, 545
glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
glow.paste(Image.new("RGBA", cover.size, (0, 0, 0, 150)), (bx + 6, by + 30), cover.getchannel("A"))
glow = glow.filter(ImageFilter.GaussianBlur(34))
img.paste(glow, (0, 0), glow)
img.paste(cover, (bx, by), cover)

# ---------- bottom ----------
ctext(1150, "From a Nigerian doctor.  No special food.  No new drugs.", med(30), MUTE)

cta, cf = "Discover How", sb(40)
cw = d.textlength(cta, font=cf)
chip_w, chip_h = cw + 160, 92
cx0, cy0 = (W - chip_w) / 2, 1210
d.rounded_rectangle([cx0, cy0, cx0 + chip_w, cy0 + chip_h], radius=46, fill=GREEN)
d.text((cx0 + 58, cy0 + 22), cta, font=cf, fill=WHITE)
ax, ay = cx0 + chip_w - 72, cy0 + chip_h / 2
d.line([(ax, ay), (ax + 36, ay)], fill=WHITE, width=6)
d.line([(ax + 36, ay), (ax + 21, ay - 14)], fill=WHITE, width=6)
d.line([(ax + 36, ay), (ax + 21, ay + 14)], fill=WHITE, width=6)

img.save("fb-ad-2.png", quality=95)
print("saved fb-ad-2.png", img.size)
