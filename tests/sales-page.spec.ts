import { test, expect } from "@playwright/test";

const CHECKOUT_URL = "https://selar.com/4cw17h8662";

const IMAGES = [
  "main.png",
  "dia.jpg",
  "dia1.jpg",
  "dia2.jpg",
  "dia3.jpg",
  "dia4.jpg",
  "screen.jpg",
  "docc.png",
  "bonus1.png",
  "bonus2.png",
  "bundle_final.png",
];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// 1. The hero must NOT contain any CTA / purchase button.
test("hero section has no CTA button and no 'Buy Now' text", async ({ page }) => {
  const hero = page.locator("section.hero");
  await expect(hero).toBeVisible();
  await expect(hero).not.toContainText("Buy Now");
  expect(await hero.locator("button").count()).toBe(0);
  // No checkout links of any kind in the hero either.
  expect(await hero.locator('a[data-testid^="cta"]').count()).toBe(0);
  expect(await hero.locator(`a[href="${CHECKOUT_URL}"]`).count()).toBe(0);
});

// 2. Primary CTA must be the secondary green (#27AE60 = rgb(39, 174, 96)).
test("primary CTA uses the #27AE60 green background", async ({ page }) => {
  const cta = page.getByTestId("cta-primary");
  await expect(cta).toBeAttached();
  const bg = await cta.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bg).toBe("rgb(39, 174, 96)");
});

// 3. Every required asset is in the DOM and has a non-empty alt tag.
test("all images are present with alt text", async ({ page }) => {
  for (const name of IMAGES) {
    const img = page.locator(`img[src="/images/${name}"]`).first();
    await expect(img, `expected ${name} in the DOM`).toHaveCount(1);
    const alt = await img.getAttribute("alt");
    expect(alt, `expected non-empty alt for ${name}`).toBeTruthy();
  }
});

// 4. Conversion path: the CTA points at the Selar checkout in a new tab.
test("CTA links to the Selar checkout in a new tab", async ({ page }) => {
  const cta = page.getByTestId("cta-primary");
  await expect(cta).toHaveAttribute("href", CHECKOUT_URL);
  await expect(cta).toHaveAttribute("target", "_blank");

  const final = page.getByTestId("cta-final");
  await expect(final).toHaveAttribute("href", CHECKOUT_URL);
});

// 5. The W.H.O-blue header stays visible on a 375px mobile viewport.
test("sticky header is visible on a 375px mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  const header = page.getByTestId("site-header");
  await expect(header).toBeVisible();
  // Still visible after scrolling down (it is sticky).
  await page.mouse.wheel(0, 2000);
  await expect(header).toBeInViewport();
});
