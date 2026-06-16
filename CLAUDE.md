# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single long-form **direct-response sales page** (Next.js App Router) for a Nigerian diabetes info-product: the guide "Eat Your Swallow Again" plus two bonuses ("...Burning Feet..." and "Strong Again"). It is one route (`/`) optimized for mobile and for deployment to Vercel. Checkout is an external Selar link, not an in-app payment flow.

## Commands

```bash
npm run dev          # local dev server at http://localhost:3000
npm run build        # production build (also the type/lint gate)
npm run start        # serve the production build
npm test             # run Playwright suite (alias for: playwright test)

npx playwright test                              # run all e2e tests
npx playwright test -g "green background"        # run a single test by title
npx playwright install chromium                  # one-time: install the browser
```

**Critical gotcha:** never run `npm run build` while `next dev` is running. `next build` overwrites the `.next` cache and corrupts the live dev server (`__webpack_modules__ is not a function`, 404 chunks). If the dev site breaks, fix with: stop the server, `rm -rf .next`, restart `npm run dev`.

Note: `@playwright/cli` (in devDependencies) is a separate agent tool and is unrelated to the test runner, which is `@playwright/test`.

## Architecture

- **`lib/constants.ts` is the single source of truth** for everything the owner changes: `CHECKOUT_URL` (the Selar link), prices (`PRICE_TODAY`/`PRICE_ANCHOR`), CTA labels, `VALUE_STACK`, the `REVIEWS` array, and `FAQS`. Edit copy/offer/pricing here, not scattered through JSX.
- **`app/page.tsx`** assembles the whole page as a top-to-bottom sequence of `<section>` blocks (hero → pain → reviews → mechanism → solution reveal → benefits → reviews → screenshot → bonuses → offer/price → guarantee → reviews → FAQ → final CTA → footer). Section copy lives inline; the bullet arrays (`MAIN_BULLETS`, `BONUS1_BULLETS`, `BONUS2_BULLETS`) sit at the top of the file.
- **`components/`** holds the reusable pieces: `CTAButton` (the only buy button), `CountdownTimer` and `FAQ` (both `"use client"`), `Testimonials` (`TestimonialGroup` + card), `StickyHeader`. Everything else is server components.
- **Images** live in `public/images/` as lowercase names (the source assets in the repo root are the originals). The page uses plain `<img>` tags with explicit dimensions and `alt`.
- Fonts are loaded via `next/font/google` in `app/layout.tsx`: **Newsreader** (serif headlines, `--font-newsreader`) and **Public Sans** (body, `--font-public`), wired into Tailwind's `font-serif`/`font-sans`.

## Design system

Defined in `tailwind.config.ts` and `app/globals.css`:
- `who-blue` = **`#005EB8`** (NHS / Pantone 300 healthcare trust blue) is the dominant brand color: header, eyebrows, callouts, section bands, icons, final CTA.
- `cta-green` = **`#27AE60`** is reserved **exclusively for buy buttons**. Do not use green for non-CTA elements.
- Helper classes in `globals.css`: `.section`/`.section-wide` (width + padding), `.eyebrow` (blue pill label), `.marker`/`.marker-blue` (highlighter on key phrases), `.dot-grid` (texture on blue sections).

## Invariants enforced by tests (`tests/sales-page.spec.ts`)

Changes must keep these true or the suite fails:
1. **The hero (`section.hero`) contains no CTA/buy button** and no "Buy Now" text. The first real checkout CTA appears only after the price reveal. An earlier mid-page CTA is allowed but must be an anchor to `#order` (scrolls to the offer), never the Selar link.
2. **The primary CTA (`data-testid="cta-primary"`) must compute to `rgb(39, 174, 96)`** — keep `bg-cta-green` as a solid background. A gradient background breaks the color check.
3. **Every required image is present with a non-empty `alt`** (see the `IMAGES` list in the spec). New images go in `public/images/` with alt text.
4. **Buy CTAs link to `CHECKOUT_URL` with `target="_blank"`**; the two are tagged `data-testid="cta-primary"` and `cta-final`.
5. **The sticky header (`data-testid="site-header"`) stays visible at 375px.**

## Copy conventions (owner requirements)

- **No em-dashes or en-dashes anywhere** in user-facing copy.
- Avoid the word "real" (reads as AI-written).
- Refer to the products as a **blueprint / toolkit / guide**, never "ebook/book".
- **Do not alter the exact product titles** stored in `VALUE_STACK`.
- Keep paragraphs short (1–3 lines). Plain, human, Nigerian-context language.
- Testimonials: two-part names, each from a **different Nigerian state** (no state repeats across the page).
- The owner-facing "this is not a cure / keep your doctor in the loop" honesty lives in the FAQ, not a footer disclaimer.
