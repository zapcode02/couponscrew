# couponscrew.com — SEO Fix Implementation Brief (Technical / Sitemap / Schema / Performance / GEO)

Give this file to Claude Code **inside the couponscrew.com codebase repo** (not this
audit repo). It has no memory of the audit conversation that produced it — everything
it needs to act is below.

**Scope note:** this brief covers only Technical SEO, Sitemap, Schema/Structured Data,
Performance (Core Web Vitals), and GEO/AI-search-readiness fixes. Content quality
(E-E-A-T, author attribution, trust copy) and Backlinks are intentionally excluded —
being handled separately.

**Design constraint: do not change the visual design.** Every fix below must be
implementable as a data/markup/config/header change — JSON-LD content, sitemap
generation logic, response headers, CSS loading strategy/order, resource hints,
robots directives. None of it requires changing colors, layout, component visual
structure, or spacing. Where a fix could be read as a design change, that's called
out explicitly with a non-visual alternative.

Site: Next.js (App Router), hosted on Vercel. Canonical host:
`https://www.couponscrew.com`. Audit date the findings below are based on:
2026-08-14.

For each item: locate the relevant route/component in this codebase, make the
change, then run the verification command against a local/preview deploy before
shipping.

---

## Phase 1 — Critical (do first, in this order)

### 1.1 [Technical] `/stores` renders a 404 boundary in server HTML instead of the real page

**Where:** the `/stores` route (Next.js App Router — likely `app/stores/page.tsx` or
similar).

**What's happening:** `curl https://www.couponscrew.com/stores` returns HTTP 200, but
the raw HTML body contains Next.js's `not-found` Suspense boundary
(`<template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING">`, literal text `ERROR 404`,
`This code expired before you got here.`) instead of the store directory. The real
content — store list, `ItemList`/`FAQPage`/`CollectionPage` JSON-LD — only appears
after client-side JS hydration (confirmed via headless Chromium render). Every other
route sampled in the audit (`/categories`, `/products`, `/blog`, `/faqs`,
`/stores/[slug]` detail pages) server-renders correctly — this is isolated to the
`/stores` index route.

**Root cause to look for:** a server-side data fetch in this route that throws or
times out, or an explicit `notFound()` call being hit during the RSC render pass,
causing React to bail out to CSR to avoid a hydration mismatch. Check:
- The route's `loading.tsx` / `error.tsx` / data-fetching function for a thrown error
  or a `notFound()` call that fires even when data is actually available client-side.
- Whether the store list is fetched from an API/DB call that's slow or unauthenticated
  server-side but works client-side (e.g., missing server-side env var, different auth
  context, or a fetch timeout shorter than the actual response time).

**Fix:** make the route server-render its real content directly, matching the pattern
already working on sibling routes. Backend/data-fetching fix only — no visual change.

**Verify:**
```bash
curl -s https://www.couponscrew.com/stores | grep -c BAILOUT_TO_CLIENT_SIDE_RENDERING
# must return 0
curl -s https://www.couponscrew.com/stores | grep -o "ERROR 404"
# must return nothing
```

---

### 1.2 [Sitemap + Technical] Sitemap covers ~30 URLs; site claims 500+ brands; 15 internal links point to 404s

**Where:** the sitemap route handler (`app/sitemap.ts` / `app/sitemap.xml/route.ts`),
and the JSON-LD generators for `/stores`, `/categories`, `/deals`.

**What's happening:**
- `https://www.couponscrew.com/sitemap.xml` currently returns exactly 30 `<loc>`
  entries — the homepage, ~10 hub pages, 5 category pages, but only **2 individual
  store pages** (`amazon-coupon-code`, `pepperfry-coupon-code`) and **0 individual
  deal/coupon detail pages**, despite the homepage claiming "500+ Partner Brands."
- The `/stores` page's own `ItemList` JSON-LD declares 10 stores (Amazon, Ajio,
  Decathlon, Flipkart, Meesho, Myntra, Nykaa, Pepperfry, Swiggy, Zomato) — 8 of these
  10 URLs return **live HTTP 404** when visited directly:
  `/stores/ajio-coupon-code`, `/stores/flipkart-coupon-code`,
  `/stores/meesho-coupon-code`, `/stores/myntra-coupon-code`,
  `/stores/nykaa-coupon-code`, `/stores/swiggy-coupon-code`,
  `/stores/zomato-coupon-code`, `/stores/decathlon-coupon-code`.
- The `/categories` page's JSON-LD declares 5 categories; 4 return 404:
  `/categories/beauty-health`, `/categories/electronics`,
  `/categories/food-dining`, `/categories/travel`.
- Every `<lastmod>` in the sitemap is the identical fetch-time timestamp
  (`2026-08-14T00:43:55.294Z` at audit time) across all 30 URLs — not a real
  per-page last-modified date.

**Fix:**
1. Regenerate the sitemap route to pull from the actual live store/category/deal
   dataset (CMS or DB), not a static or partially-populated list — every published
   `/stores/[slug]`, `/categories/[slug]`, and deal/coupon detail page must be
   included.
2. Either publish the 12 missing pages referenced above, or remove them from the
   `ItemList` JSON-LD on `/stores` and `/categories` until they're real — do not ship
   dead links in structured data (see 1.3, same root cause on `/deals`).
3. Set `lastmod` per URL from the record's actual last-content-update timestamp, not
   `new Date()` at request time.
4. Once URL count grows into the hundreds/thousands, split into a sitemap index
   (`sitemap-stores.xml`, `sitemap-categories.xml`, `sitemap-deals.xml`) rather than
   one flat file — not urgent at 30 URLs, but plan for it now given the fix in step 1.

Data/backend fix only — no visual change.

**Verify:**
```bash
curl -s https://www.couponscrew.com/sitemap.xml | grep -c "<loc>"
# should be far above 30 once the real catalog is included
for slug in ajio flipkart meesho myntra nykaa swiggy zomato decathlon; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://www.couponscrew.com/stores/${slug}-coupon-code")
  echo "$slug: $code"
done
# all should be 200, not 404
```

---

### 1.3 [Schema] `/deals` ships placeholder JSON-LD in production, pointing to 404s

**Where:** the `/deals` route's structured-data generator (wherever the `ItemList`
JSON-LD for this page is built — likely a `generateMetadata` / JSON-LD component tied
to `app/deals/page.tsx`).

**What's happening:** the visible on-page content on `/deals` is real ("Get 50% off on
Bonton Computer Table in Wenge Finish", etc.), but the JSON-LD `<script
type="application/ld+json">` block ships literal stub data:

```json
{
  "@type": "ItemList",
  "numberOfItems": 10,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Deal 1 Name", "url": "https://www.couponscrew.com/deals/deal-1" },
    { "@type": "ListItem", "position": 2, "name": "Deal 2 Name", "url": "https://www.couponscrew.com/deals/deal-2" },
    { "@type": "ListItem", "position": 3, "name": "Deal 3 Name", "url": "https://www.couponscrew.com/deals/deal-3" }
  ]
}
```

`numberOfItems: 10` also doesn't match the 3 items actually listed, and
`/deals/deal-1`, `/deals/deal-2`, `/deals/deal-3` all return live 404. This is
scaffolding/example data that was never wired to the real deals feed.

**Fix:** wire this `ItemList.itemListElement` to the same data source already
powering the visible deal cards on the page (real names, real URLs), and set
`numberOfItems` to `itemListElement.length`. Use the working pattern on `/stores`
(where populated) as the reference implementation.

Also check `/deals-of-the-day` — it currently has **no** `ItemList`/`Product`/`Offer`
schema at all despite being the same kind of deal-listing template; add the same fix
there.

JSON-LD `<script>` block only — invisible to the page's rendered design.

**Verify:**
```bash
curl -s https://www.couponscrew.com/deals | grep -o '"name":"Deal [0-9] Name"'
# must return nothing
curl -s -o /dev/null -w "%{http_code}\n" https://www.couponscrew.com/deals/deal-1
# should now be a real deal URL returning 200, or the placeholder ListItem should be gone entirely
```

---

## Phase 2 — High-impact (after Phase 1 ships)

### 2.1 [Schema] Add `Offer` schema to store/deal-listing pages (currently zero)

**Where:** `/stores/[slug]` page template (e.g., `app/stores/[slug]/page.tsx`).

**What's happening:** `/stores/amazon-coupon-code` renders 48 "Get Deal" cards with
explicit discounts ("90% OFF", "Get Up To 65% OFF..."), but the page's JSON-LD graph
only contains `BreadcrumbList`, `FAQPage`, `ItemList`, `WebPage`, `WebSite` — **zero**
`Offer`/`AggregateOffer`/discount-typed nodes. The existing `ItemList` on this page
lists 7 generic category labels that all point back to the same page URL — it does
not itemize the 48 visible deal cards at all.

**Fix:** add one `Offer` node per visible deal card to the page's structured data,
each with `name`, `description`, `url` (deep link to the specific deal, not the
parent store page), and — since Schema.org doesn't have a native `Coupon` type —
encode the discount value in `description`/`name` as already shown in visible copy,
optionally via `additionalProperty` for a machine-readable percentage. Example shape:

```json
{
  "@type": "Offer",
  "name": "Amazon Electronics 90% Off",
  "description": "Save up to 90% off Electronics, Fashion, Beauty & More on Amazon",
  "url": "https://www.couponscrew.com/stores/amazon-coupon-code#deal-electronics-90",
  "priceCurrency": "INR",
  "availability": "https://schema.org/InStock"
}
```

Apply the same to `/stores/pepperfry-coupon-code` and the template used for all
`/stores/[slug]` pages once 1.1/1.2 are fixed and the full catalog is live.

JSON-LD generation only — do not change the visible deal-card markup/layout for this
item (that would be a design change; skip it here even though the original audit
suggested surfacing codes inline — that's a UX/design decision, not in scope).

**Verify:** validate the updated page with Google's Rich Results Test or
`schema_ecommerce_validate.py` if you have access to the claude-seo toolkit; confirm
`Offer` nodes parse without errors.

---

### 2.2 [Schema] Product schema: missing `image`, expired `priceValidUntil`, wrong `seller`

**Where:** `/products/[slug]` page template (e.g., `app/products/[slug]/page.tsx`),
confirmed on `/products/acnos-bangle-watch-pack-of-2` and
`/products/desidiya-moon-crystal-night-light`; likely affects all 5 product pages.

**Issue A — missing `image` (High):** every sampled `Product` node omits `image`
entirely, even though the product photo is already rendered on-page via Cloudinary
(`data-nimg`, WebP, responsive `srcset`). This blocks Google Product rich results.
Add it:

```json
{
  "@type": "Product",
  "name": "Acnos Premium Girl's Heart Shape Bangle Analog Watch, Pack of 2",
  "image": ["https://www.couponscrew.com/images/products/acnos-bangle-watch-pack-of-2.jpg"]
}
```
Use the same asset URL already used for the on-page `<img>`/`og:image` — no new asset
needed.

**Issue B — expired `priceValidUntil` (High):** all 5 sampled products hardcode
`"priceValidUntil": "2025-12-31"` — already ~7.5 months in the past as of the audit
date. A past date suppresses price display in Merchant/Product rich results. Fix:
generate this dynamically (e.g., 30-90 days from the last verification date), never
hardcode a static value in a template.

**Issue C — `seller`/`hasMerchantReturnPolicy` misattribution (High):** the `Offer`
node declares:
```json
"seller": {"@type": "Organization", "name": "CouponsCrew", "url": "https://www.couponscrew.com"},
"hasMerchantReturnPolicy": {"@type": "MerchantReturnPolicy", "applicableCountry": "IN", ...}
```
But the `/products` hub's own visible copy states: *"Every product links to the
official brand or retailer... Clicking through takes you to the retailer's site. Your
payment is handled entirely by them... Returns go through the retailer's own
policy."* The schema contradicts the disclosed affiliate-referral business model.
Fix: either point `seller` at the actual retailer (if consistently knowable), or drop
`seller`/`hasMerchantReturnPolicy` from the `Offer` entirely and keep only
`price`/`priceCurrency`/`availability`/`url` (the outbound affiliate link).

JSON-LD only — no visual change.

**Verify:** re-run `schema_ecommerce_validate.py` (bundled in the claude-seo toolkit)
against each `/products/*` page — target `"ok": true` with 0 High-severity findings.

---

### 2.3 [Performance] LCP is 4.07s (target ≤2.5s) — driven by a redirect hop and render-blocking CSS

**Where:** Vercel domain/redirect config, plus the homepage's CSS loading strategy
(Next.js `app/layout.tsx` / global stylesheet imports / `<head>` resource hints).

**What's happening (Lighthouse mobile lab data, 2026-08-14):**
- LCP = 4.07s (Poor). Breakdown: TTFB 19%, Resource Load Delay 15%, Resource Load Time
  36%, Element Render Delay 30%.
- The critical request chain is 4 deep: `couponscrew.com` (apex, HTTP) →
  `https://couponscrew.com` → `https://www.couponscrew.com` → render-blocking CSS →
  web font — before the LCP hero image can even be requested. The apex-to-www hop
  alone adds a full round trip ahead of any real page bytes.
- Two render-blocking stylesheets delay First Contentful Paint to the same 4.07s as
  LCP: `/_next/static/css/c9096320a10bf5cf.css` (17,966 bytes) and
  `/_next/static/css/b6dd328cedea802c.css` (1,397 bytes); one of them in turn blocks
  an 85,596-byte web font (`8e9860b6e62d6359-s.woff2`).
- CLS is already ~0 — no action needed there.

**Fix (all delivery/config changes — no visual/design change, same CSS ends up
applied, just loaded faster/in a different order):**
1. In Vercel project settings / `vercel.json` / DNS, ensure internal links, canonical
   tags, sitemap URLs, and any ad/referral links point directly at
   `https://www.couponscrew.com` — collapse the apex→HTTPS-apex→www chain to a single
   hop for any traffic that still needs a redirect (same underlying config as the
   redirect-chain item in Phase 4).
2. Inline critical above-the-fold CSS for the hero section (Next.js supports a
   critical-CSS extraction step, or hand-split the global stylesheet so
   below-the-fold styles don't block first paint). This changes *loading order*, not
   the resulting styles — visual output is identical once fully loaded.
3. Preload the primary body font directly (`<link rel="preload" as="font"
   crossorigin>`) so it doesn't wait on CSS parsing to be discovered.
4. Verify the Cloudinary hero image is served at the actual rendered size
   (~380×285 CSS px per the audit's measurement) with `f_auto,q_auto` transforms
   applied — this changes the file served, not how the image looks (same crop/content
   at correct resolution instead of an oversized source scaled down by CSS).

**Verify:** re-run Lighthouse mobile (`npx lighthouse <url> --preset=perf
--form-factor=mobile`) — target LCP ≤2.5s, FCP meaningfully improved from 4.07s.

---

### 2.4 [Performance] Long main-thread tasks + forced reflow put INP at risk

**Where:** homepage hydration/inline scripts (profile via Chrome DevTools Performance
panel to find the exact component).

**What's happening:** Lighthouse recorded 5 long tasks (>50ms), the two largest at
909ms and 375ms, both attributed to the document's own inline/hydration script
execution. Total Blocking Time is 359ms, Max Potential FID 375ms. Separately, an
`forced-reflow-insight` audit flags **856ms of forced synchronous layout** from
unattributed script — a layout-thrashing pattern (reading a layout property like
`offsetWidth` immediately after a DOM write, forcing synchronous recalculation
instead of batching).

**Fix:**
1. Profile the two large long tasks in Chrome DevTools; break large synchronous
   handlers into smaller chunks (`<50ms`) using `requestIdleCallback`/
   `scheduler.yield()` where the work isn't render-critical.
2. Find and fix the forced-reflow source: audit code paths that alternate DOM writes
   and layout reads (e.g., measuring an element's size/position right after changing
   its style/class); batch reads before writes.
3. INP could not be measured directly in lab conditions — validate against real CrUX
   field data once a Google API key is configured (`/seo google` in the claude-seo
   toolkit), or check Search Console's Core Web Vitals report.

Pure JS execution-timing fix — no visual change, same UI, just less main-thread
blocking.

**Verify:** re-run Lighthouse — TBT and Max Potential FID should drop; confirm no new
forced-reflow warnings.

---

### 2.5 [Performance] Legacy JS polyfills add unnecessary bytes

**Where:** build/transpilation config (`browserslist` in `package.json`, or Next.js
compiler target).

**What's happening:** `~11.6KB` wasted in
`/_next/static/chunks/117-c68f06edcab33124.js` from polyfills for baseline-supported
ES2019+ features: `Array.prototype.at/flat/flatMap`, `Object.fromEntries/hasOwn`,
`String.prototype.trimEnd/trimStart`.

**Fix:** update `browserslist`/Next.js transpilation target to drop transforms for
these universally-supported features. Build-config change only — no visual change,
modest (~12KB) but free and compounding savings.

**Verify:** re-run Lighthouse's `legacy-javascript-insight` audit — should no longer
flag these specific polyfills.

---

## Phase 3 — GEO / AI Search Readiness (parallel with Phase 2)

### 3.1 [GEO] FAQ answers too short for AI citation

**Where:** homepage `FAQPage` JSON-LD content (the 5 Q&A pairs — schema structure
itself is already correct, only the answer text needs to change).

**What's happening:** all 5 homepage FAQ answers are 26-31 words — well under the
134-167 word range associated with optimal AI-citation passage length:

| Question | Current word count |
|---|---|
| What is CouponsCrew? | 31 |
| Are the coupon codes on CouponsCrew up to date? | 26 |
| How do I use a coupon code from CouponsCrew? | 27 |
| Which brands have the latest discount codes on CouponsCrew? | 26 |
| Is CouponsCrew free to use? | 30 |

**Fix:** expand each answer to 100-160 words by adding one supporting sentence of
specificity (e.g., how verification works, how often codes are checked), keeping the
direct-answer-first structure. This is a content-copy edit inside the existing
`FAQPage` schema and its matching visible FAQ text — no new UI component, no layout
change, same FAQ accordion/section design, just longer answer strings.

**Verify:** word-count check on each answer — target 100-160 words.

---

### 3.2 [GEO / Technical] AI crawler access and llms.txt — verify no regressions

**Where:** `robots.txt`, `/llms.txt`.

**What's happening (already good — verify only, no fix needed unless regressed):**
`robots.txt` currently has explicit `Allow: /` for GPTBot, ChatGPT-User,
OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, Googlebot,
Bingbot, PerplexityBot, CCBot, and Applebot-Extended — this is best-practice and
should be preserved as-is through any other changes in this brief. `llms.txt` is
present and well-structured.

**One real fix — llms.txt positioning inconsistency:** `llms.txt` states "A globally
trusted coupon website" and lists an international brand partner, while the site's
own `Organization` schema (`areaServed: "IN"`), OG locale (`en_IN`), and on-page copy
consistently position CouponsCrew as India-focused. This could cause an LLM
cross-referencing both sources to produce conflicting brand descriptions.

**Fix:** edit `/llms.txt` text to align with the on-page/schema entity description
(India-focused coupon platform). Plain-text file edit, ~15 minutes, no code/design
change.

**Verify:**
```bash
curl -s https://couponscrew.com/robots.txt | grep -A1 "GPTBot\|ClaudeBot\|PerplexityBot"
# confirm Allow: / still present for each after any config changes in this brief
diff <(curl -s https://www.couponscrew.com/llms.txt) <(cat /path/to/updated/llms.txt)
```

---

### 3.3 [GEO] Sitemap `lastmod` doesn't reflect real freshness (cross-ref with 1.2)

**Where:** same sitemap route handler touched in 1.2.

**What's happening:** every sitemap URL shares the identical fetch-time `lastmod`
timestamp rather than a true last-content-modification date. GEO impact: the site's
"updated daily" claim (in both `llms.txt` and on-page copy) isn't backed by a
verifiable per-page freshness signal that AI crawlers/Perplexity (which weights
freshness heavily) can trust.

**Fix:** this is the same fix as 1.2 step 3 — populate `lastmod` from the actual
last-significant-update timestamp per page. No separate work needed if 1.2 is done
correctly; listed here so it isn't missed as a GEO-relevant signal, not just a
sitemap-hygiene one.

**Verify:** same as 1.2.

---

## Phase 4 — Lower priority / ongoing (Technical/Performance/GEO only)

- **[Technical] IndexNow:** generate an IndexNow key, host the verification file at
  `https://www.couponscrew.com/{key}.txt`, and submit URLs to
  `https://api.indexnow.org/indexnow` on every coupon publish/update/expire event
  (covers Bing, Yandex, Naver with one integration). Directly relevant given daily-
  changing coupon-validity content. Backend integration only, no visual change.
- **[Technical] Redirect chain cleanup:** `http://couponscrew.com/` currently takes 2
  hops (`http://couponscrew.com` → `https://couponscrew.com` →
  `https://www.couponscrew.com`) instead of 1. Collapse via a single Vercel redirect
  rule (same config touched in 2.3). Config-only change.
- **[Technical] Missing security headers:** only `Strict-Transport-Security` is
  present sitewide. No CSP, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, or `Permissions-Policy`. For a "click to copy code" interaction
  site, the missing `X-Frame-Options`/CSP is a real clickjacking exposure. Add via
  `next.config.js`:
  ```js
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' }
  ```
  Roll out `Content-Security-Policy-Report-Only` first (scoped to Next.js/Vercel +
  Cloudinary + analytics origins) before enforcing. Response-header change only, zero
  visual impact — verify nothing breaks (e.g., embedded widgets) after enabling CSP
  in report-only mode first.
  Verify: `curl -sI https://www.couponscrew.com/ | grep -iE "content-security-policy|x-frame-options|x-content-type-options|referrer-policy|permissions-policy"` — all five present.
- **[Performance] Oversized favicon:**
  `https://res.cloudinary.com/dgy1atvb8/image/upload/.../favicon_jxwnvu.png` is
  145,705 bytes — larger than the LCP hero image or any JS chunk. Serve a properly
  sized favicon (32-180px) via a Cloudinary transform (`w_32,h_32,f_auto,q_auto`);
  keep the full-res asset only for genuine OG/social-share use. The favicon itself is
  invisible at its rendered size either way — this is a pure byte-savings fix, not a
  design change.
- **[Technical] Speculation Rules API:** no `<script type="speculationrules">`
  present. Add `prefetch`/`prerender` rules for high-confidence next-navigation paths
  (homepage → top store pages, store → coupon detail) to improve perceived speed on
  the site's heavy internal click-through pattern. Invisible `<head>` addition.
- **[Technical] `Organization.foundingDate: "2025"`** — verify this is accurate; if
  the business predates 2025, this understates entity history to Google's Knowledge
  Graph. One-line JSON-LD value change if inaccurate.
- **[GEO] Authority/brand signals** (no Wikipedia entity, no verified YouTube/Reddit
  presence) are a longer-horizon, non-technical item outside this brief's scope
  (requires content/marketing investment, not a code fix) — noted here only for
  awareness, not actionable via this codebase.

---

## Explicitly out of scope for this brief (handled separately by the site owner)

- All **Content Quality / E-E-A-T** findings: fabricated blog cards, thin homepage
  copy, missing author/reviewer attribution, unsourced trust statistics, "Verified
  Today" badge accuracy, duplicate content block on the Pepperfry page, and the
  store-catalog thin-content sample audit.
- All **Backlinks** findings: Moz API key setup, backlink profile scoring.
- Anything that would require a **visual/design change** — if you find yourself
  wanting to move, resize, restyle, or reflow a visible UI element to satisfy an item
  in this brief, stop and flag it instead of implementing it. Two items originally
  identified in the full audit (adding a homepage `<h1>`, and inline-surfacing
  coupon codes/trust stats on deal cards) are **excluded from this brief** for that
  exact reason — they involve visible content/layout decisions, not pure
  data/schema/config fixes.

---

## After shipping Phase 1

Investigate **why the site has zero organic search visibility** — it did not rank for
any of 5 representative queries tested during the audit, including a direct
`site:couponscrew.com` search for its own brand. This is very plausibly a downstream
consequence of the broken `/stores` SSR (1.1) and thin sitemap (1.2) — Google can't
reliably index pages it can't discover or crawl cleanly — but confirm via Google
Search Console's Coverage and Performance reports once access is available. Re-check
search visibility for the same 5 queries (`amazon coupon code`, `flipkart coupon
code`, `myntra coupon code today`, `swiggy coupon code today`, `best coupon sites
India Amazon Flipkart Myntra`) 2-4 weeks after Phase 1 ships.
