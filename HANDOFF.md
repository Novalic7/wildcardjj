# WILDCARD — Design handoff notes

Hi-fi mockups for the Wildcard Jiu Jitsu storefront. Built dark/editorial on the supplied brand identity ("The Joker"). All prices, specs, policies and read-times are **placeholders** — see "Missing before launch".

## Screens (open the .dc.html files)
- `Wildcard Home.dc.html` — homepage + working cart drawer, email capture states, quick-add
- `Wildcard Shop.dc.html` — all-products collection: working type filter, in-stock toggle, sort, loading skeletons, empty state ("Spats — coming soon" demonstrates it)
- `Wildcard Product Rash Guard.dc.html` — PDP: gallery, colorway/size/qty, size guide, add-to-cart states, accordions, Complete the Kit
- `Wildcard Product Gi.dc.html` — PDP: 5-view gallery, A0–A5 sizing, per-colorway price, competition-legality accordion (intentionally unverified)
- `Wildcard Mobile.dc.html` — mobile home, menu drawer, cart drawer in device frames

## Design tokens
- Ink `#0A0A0A` · Surface `#121212` / `#161514` · Hairline `#1F1D1B` · Bone `#F1EDE4`
- Crimson `#8B1A1A` (from brand assets) · Hover crimson `#A32024` / link-accent `#C8452C` · Kicker red `#B71925` · Muted `#8D8D8D` · Dim `#6b6660`
- Type: **Oswald** 500/600 (display, uppercase, tight) + **Archivo** (UI/body). Google Fonts, free.
- Buttons square (no radius), 1px hairline borders, kickers 11–12px / 2.5–3.5px tracking.
- Suits ♠♥♣♦ used only as: kicker marks, section dividers, footer detail. Hearts/diamonds crimson, spades/clubs bone.

## Asset map (assets/ ← uploads/)
| Clean name | Source | Use |
|---|---|---|
| wordmark-white.png / wordmark-color.png | WJJ_Suits-Wordmark_White / -2026_Color | header/footer logo (dark / light bg) |
| logo-main-white.svg / -black.svg | Main Logo | alt lockup |
| lockup-jester-color.png, hat-red.png, hat-color.png | Jester Hat Lockup/Emblem | hero watermark, empty states |
| badge-circle-black.png / -color.png | Circle Badge | culture/social marks |
| monogram.png | Monogram | image placeholders, favicons |
| card-logo-color.png / card-logo-bw.png | Primary card logo | PDP "artwork" view, watermarks |
| patch-wordmark-red.png | Suits-Wordmark-Patch | garment patch reference |
| suits-cross-dark/light.png, jester-face-dark/light.png, suits-pattern.png, rose-black/white.png | garment art | section watermarks |
| gi-{white,black}-{jacket,pants}-{front,back}.png | 02 Classic Gi | Gi PDP gallery, category panels |
| rg-classic-front/back.png, shorts-classic-front/back.png | 03 Classic Rash Guard | RG PDP, cards |
| rg-suits-front/back.png, shorts-suits-front/back.png | 04 Suits Rash Guard | RG PDP colorway 2, cards |

Note: `._*` files in uploads are macOS junk — ignore. `shorts-classic-front` = WCJ_RG-Shorts_2_Front, `shorts-classic-back` = WCJ_RG-Shorts_1_Back.

## Product data (single source for implementation)
6 products: Classic Rash Guard $75, Suits Rash Guard $75, Classic Shorts $55, Suits Shorts $55, Classic Gi White $180, Classic Gi Black $185. Fields per product: id, handle, name, type, price, images[], colorways, sizes (S–XL / A0–A5), inStock, badges, meta. The Shop page's `CATALOG` array in its logic is the canonical mock — lift into `data/products.ts` behind a commerce adapter (Shopify Storefront API).

## Route map (Next.js)
`/` home · `/shop` + `/collections/[handle]` · `/products/[slug]` · `/culture(/[slug])` · `/about` · `/size-guide` · `/faq` · `/shipping-returns` · `/privacy` · `/terms` · `/contact` · `/account` · `/cart`

## Missing before launch (all flagged in-page as italic "TBC")
- Real prices, fabric specs/weights, size-chart measurements, shrinkage guidance
- Shipping/returns policy copy, email consent copy (legal review)
- IBJJF legality verification (accordion intentionally states "not verified")
- Lifestyle/training photography (culture cards + Instagram section are placeholder slots)
- Social URLs, contact email, payment methods
- Inventory flags: SOLD OUT / LOW STOCK badges shown are **UI-state demos**, not real stock claims

## Not yet mocked (next steps)
Predictive search overlay · culture landing + article · about · FAQ/customer care · account screens · full cart page (drawer exists) · sticky mobile add-to-cart
