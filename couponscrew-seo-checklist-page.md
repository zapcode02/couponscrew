# CouponScrew — On-Page SEO Checklist

Canonical on-page SEO reference for this project. Every blog post, deals page, store page, and static page must satisfy every applicable item below before it ships.

**Every page-generation skill must read this file first. No page ships until it passes every applicable item.**

---

## KEYWORD TARGETS (fill in before working on any page)

| Type | Keyword | Min Placements | Max Placements |
|------|---------|---------------|---------------|
| Primary Keyword | `[PRIMARY_KEYWORD]` | 2 | 3 |
| Secondary Keyword 1 | `[SECONDARY_KEYWORD_1]` | 1 | 2 |
| Secondary Keyword 2 | `[SECONDARY_KEYWORD_2]` | 1 | 2 |

**Keyword placement rules (non-negotiable):**
- Every keyword must read naturally in context — if it sounds forced, skip that placement
- Do NOT place the same keyword in back-to-back paragraphs
- Do NOT exceed the Max Placements limit under any circumstance — over-optimisation will trigger a penalty
- Google treats near-synonyms (coupon code / promo code / discount code) as the same signal — do not force all three into the same page
- Keyword density should stay under 2% for the primary keyword across the full page

---

## HEAD / METADATA
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **Title tag**: 50–60 chars, primary keyword near the start, ` | CouponScrew` suffix
- [ ] **Meta description**: 150–160 chars, primary keyword + benefit + soft CTA
- [ ] **Canonical URL** set to prevent duplicates (critical for coupon pages with URL params)
- [ ] **Open Graph tags**: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
- [ ] **Twitter Card tags**: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] **Language attribute** on `<html>`: `lang="en"`
- [ ] **Viewport meta tag**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] **Favicon** + `apple-touch-icon`
- [ ] **Charset meta**: `<meta charset="utf-8">`

---

## URL STRUCTURE
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **Short slug** (under 60 chars)
- [ ] **Primary keyword** in the slug
- [ ] **Hyphens only** — never underscores
- [ ] **Lowercase only**
- [ ] **No stop words** unless removing them breaks clarity
- [ ] **Logical hierarchy**: `/stores/[brand-name]`, `/blog/[post-slug]`, `/categories/[category-name]`

---

## HEADINGS
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **Exactly one H1** per page, contains primary keyword
- [ ] **Logical H2 → H3 hierarchy** — never skip levels
- [ ] **H2s** use supporting keywords + question-format variants
- [ ] **No keyword stuffing** in headings

---

## COPY / BODY — KEYWORD PLACEMENT
> **This is the only section Claude Code works on.**

- [ ] **Primary keyword** appears in the first 100 words naturally
- [ ] **Primary keyword** placed 2–4 times total across body copy
- [ ] **Secondary Keyword 1** placed 1–2 times naturally in body copy
- [ ] **Secondary Keyword 2** placed 1–2 times naturally in body copy
- [ ] No keyword placed in back-to-back paragraphs
- [ ] No sentence rewritten unless it is the only way to fit the keyword naturally
- [ ] Overall keyword density stays under 2% for primary keyword
- [ ] Voice and style of the original content writer preserved throughout
- [ ] **Approval table shown to the human before any edits are made** (see Claude Code Prompt)

---

## FAQ SECTION (blog posts only)
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **4–8 questions** sourced from SEMrush Questions tab + "People Also Ask"
- [ ] **Direct, clear answers** (2–4 sentences each)
- [ ] **FAQ schema** (JSON-LD) applied
- [ ] Primary or secondary keywords appear naturally in at least 2 FAQ answers

---

## IMAGES
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **Alt text** describes image + keyword where natural
- [ ] **Descriptive filenames** with hyphens (e.g. `flipkart-sale-coupons-india.webp`)
- [ ] **WebP format**, compressed under 200 KB
- [ ] **Width/height attributes** specified (prevents CLS)
- [ ] **Lazy loading** (`loading="lazy"`) for below-fold images
- [ ] **Responsive srcset** where needed
- [ ] **Featured/hero image** present for OG social preview

---

## INTERNAL LINKS
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **3–5 internal links** per post/page
- [ ] Link to related blog posts, relevant store pages, and category pages
- [ ] **Descriptive anchor text** — never "click here" or "read more"
- [ ] Contextually placed in body copy
- [ ] **Breadcrumb navigation** on every page

---

## EXTERNAL LINKS
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **2–3 external links** to authoritative sources
- [ ] Open in new tab with `rel="noopener"`
- [ ] `rel="nofollow"` on all affiliate links
- [ ] `rel="sponsored"` on paid affiliate links

---

## SCHEMA MARKUP
> **Handled manually by the team — Claude Code does not touch this section.**
> CouponScrew is an affiliate aggregator, NOT a local business. LocalBusiness schema does not apply.

- [ ] **Article** schema on blog posts (`datePublished` + `dateModified`)
- [ ] **Organization** schema site-wide (name, url, logo, sameAs)
- [ ] **ItemList** schema on store pages, category pages, and deals listing pages
- [ ] **FAQ** schema wherever a FAQ section exists
- [ ] **BreadcrumbList** schema on every page
- [ ] **Author/Person** schema for blog post bylines

**Do NOT apply:** LocalBusiness, Service (local), Product (unless a specific product deal page).

---

## E-E-A-T SIGNALS
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] **Author byline** with name on every blog post
- [ ] **Author bio** with relevant credentials
- [ ] Link to author's dedicated page from every post
- [ ] **Published date** displayed
- [ ] **"Last updated" date** shown when coupons are refreshed
- [ ] **Verified badge** on manually tested coupons
- [ ] **About page** with CouponScrew's story and how coupons are sourced/verified
- [ ] **Contact page** with real email or contact form

---

## ACCESSIBILITY
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] Semantic HTML5 tags throughout
- [ ] ARIA labels on interactive elements (copy-coupon buttons especially)
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators on all interactive elements
- [ ] Alt text on ALL images
- [ ] Skip-to-content link for keyboard users

---

## MOBILE / RESPONSIVE
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] Responsive layout (Tailwind)
- [ ] Touch targets minimum 48×48 px
- [ ] Body font minimum 16 px
- [ ] No horizontal scroll at any viewport
- [ ] No intrusive interstitials

---

## CONVERSION ELEMENTS (store pages and deals pages only)
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] Primary CTA above the fold ("Get Coupon", "Reveal Code", "Shop Now")
- [ ] Expiry date shown on every coupon
- [ ] Multiple CTA placements (top, mid, bottom)
- [ ] Trust signals: verified badge, success rate, last verified date
- [ ] Savings amount or % displayed prominently (e.g. "Save up to ₹500")
- [ ] Number of available codes displayed

---

## LONG-FORM CONTENT (1500+ words)
> **Handled manually by the team — Claude Code does not touch this section.**

- [ ] Table of contents with anchor links at top
- [ ] Jump links for each H2
- [ ] Back-to-top button

---

## How to use this file

1. Fill in the three keywords in the **KEYWORD TARGETS** table at the top before every session.
2. Claude Code reads this file and works ONLY on the **COPY / BODY — KEYWORD PLACEMENT** section.
3. Everything marked "Handled manually by the team" is out of scope for Claude Code.
4. Claude Code must show an approval table before making any changes (see the Claude Code prompt).
