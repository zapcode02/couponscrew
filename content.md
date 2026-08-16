# Content Quality & E-E-A-T Audit — couponscrew.com

Audit date: 2026-08-14
Pages sampled (rendered via Playwright, `render_page.py --mode always`, trafilatura-extracted + full raw-HTML text pass):
Homepage (`/`), Store page — Amazon (`/stores/amazon-coupon-code`), Store page — Pepperfry (`/stores/pepperfry-coupon-code`), About Us (`/about-us`), Contact (`/contact`), Blog listing (`/blog`), Blog post (`/blog/how-to-save-money-shopping-online-india`), sitemap.xml.

Tools used: `content_quality.py` (QRG-aligned filler/AI-pattern/repetition scorer), `content_verify.py` (claim + citation-gap detector), manual line-diff duplication check between two store pages.

---

## Category Score: 57 / 100

| E-E-A-T Factor | Weight | Score /100 | Notes |
|---|---|---|---|
| Experience | 20% | 40 | No first-hand purchase narratives, no photos/screenshots of actual checkout/redemption, no user-generated reviews of the coupons themselves |
| Expertise | 25% | 45 | Editorial store-guide content is detailed and accurate-reading, but zero author attribution or subject-matter credentials anywhere |
| Authoritativeness | 25% | 45 | No external citations for factual claims, no press/media mentions, no verifiable "500+ brand partner" list, backlink profile not assessed here (see backlinks.md) |
| Trustworthiness | 30% | 75 | Real contact info (email, phone, physical address), FAQ, privacy/terms pages present, but undermined by phantom blog posts and inconsistent phone numbers |
| **Weighted E-E-A-T** | | **~54** | |

Overall Content Quality score (57/100) blends the weighted E-E-A-T average with content-depth, duplication, and AI-citation-readiness factors below.

---

## Findings

### 1. Homepage has thin body content well below the 500-word QRG floor (High)

**Description:** The homepage's true unique body copy (nav, footer, and the 42-language switcher list excluded) is approximately **250-300 words** of prose — a "Who is Couponscrew?" blurb, four stat callouts (10,000+ coupons, 500+ brands, 92.4% success rate, 50,000+ users), a seasonal-sale-calendar module, and a 6-question FAQ. Trafilatura's boilerplate-stripped extraction confirms this: `extracted_text` is only 503 characters (~80 words) because most of the page is card/grid UI (category tiles, product cards) rather than sentence-based content.

Confirmed by direct render (forced `--mode always`, Playwright-rendered, ruling out a JS-hydration artifact):
```
EXTRACTED TEXT LENGTH: 503
"...Couponscrew is a verified coupon and deals platform - built for shoppers who are tired
of copy-pasting dead codes at checkout. Most coupon sites list every code they can find —
expired, unverified, or just dead..."
```

Homepage QRG minimum is 500 words of substantive topical coverage. This page is well under that floor even after generously counting every card label and stat as "content."

**Recommendation:** Expand the homepage's editorial sections — "Who is Couponscrew," "Best Time to Use Coupons," FAQ — with more substantive prose (target 500-700 words), or accept that the homepage is intentionally a navigation hub and ensure its thin status doesn't extend to the pages it links to (it mostly doesn't — see Finding 3).

---

### 2. Fabricated/dead blog post cards on homepage and blog listing (Critical)

**Description:** The homepage's "Latest From Our Blog" module displays three post cards:
- "How to Save Money While Shopping Online in India" — June 20, 2024 — links to `/blog/how-to-save-money-shopping-online-india` (real, resolves 200)
- "Amazon Great Freedom Sale 2024: Best Deals You Should Not Miss!" — June 18, 2024 — **no `href` present in the rendered DOM at all**
- "Top 10 Cashback Apps to Save More Money" — June 15, 2024 — **no `href` present in the rendered DOM at all**

Verified by extracting every `/blog`-scoped `href` from the homepage's rendered HTML — only two URLs exist site-wide: `/blog` and `/blog/how-to-save-money-shopping-online-india`. The other two cards are non-interactive decorative elements displaying fabricated post titles, dates, and read-time estimates ("4 Min Read", "6 Min Read") for content that does not exist as a crawlable page. The `/blog` listing page itself confirms only **one published post** exists.

This is a direct integrity problem: a first-time visitor or an AI crawler summarizing the page would reasonably conclude the site publishes a regular blog with at least 3 recent posts, when in fact 2 of 3 are non-existent. This is the kind of fabricated-signal issue Sept 2025 QRG explicitly flags as a trust violation, distinct from ordinary thin content.

**Recommendation:** Remove the two non-linked blog cards immediately, or replace them with real published posts. If the blog is only maintained sporadically, do not hardcode placeholder/decorative cards with specific fake dates and read-times — this misrepresents publishing cadence to both users and AI systems performing freshness assessments.

---

### 3. Blog has a single post from 2024, no active editorial cadence despite "Updated Regularly" claim (High)

**Description:** The `/blog` listing page header states "Updated Regularly" and "Verified Coupon Guides," but contains exactly one post, dated June 22, 2026 per its detail-page metadata while the homepage card for the same post shows June 20, 2024 — a 2-year discrepancy between the two date stamps for the *same article* (`publication_date` returned `2026-06-22` from htmldate on the live post render vs. `June 20, 2024` visible in the homepage card text). Either the visible on-page date or the underlying metadata date is wrong.

Given today's date (2026-08-14), a single-post blog with no cadence directly contradicts "Updated Regularly," and — combined with Finding 2 — suggests the blog module was scaffolded with placeholder data that was never fully replaced with real content.

**Recommendation:** Either commit to a real publishing cadence (a coupon/deals site benefits enormously from genuine "first-hand experience" blog content — deal-hunting guides, sale-calendar breakdowns, bank-offer explainers) or remove the "Updated Regularly" claim and the phantom cards until cadence is real. Reconcile the date discrepancy between the homepage card and the live post's actual publish/modified date.

---

### 4. Zero author attribution or reviewer credentials anywhere on the site (High)

**Description:** Searched the homepage, About Us, Contact, the single blog post, and both sampled store pages (Amazon, Pepperfry) for author bylines, "written by," "reviewed by," editor names, or linked social/professional profiles (LinkedIn, etc.). None were found. The blog post — the one piece of content most suited to demonstrating first-hand expertise — has no visible author name, credentials, or bio. The extensive store-page editorial content (category write-ups, "Why Millions of Indian Shoppers Choose X," sale calendars) is similarly unattributed to any named person or team.

The About Us page uses collective "we/our team" language ("Our team tests every code before it goes live") but never names a single team member, founder, or verification specialist — despite the specificity of the "92.4% success rate" and "10,000+ coupons verified" claims implying a rigorous, attributable QA process.

**Recommendation:** Add named author/reviewer bylines to blog posts and, ideally, to store-guide pages ("Deal verified by [Name], Coupon Team"), with a linked author/team bio page showing relevant credentials (e.g., years doing deal curation, e-commerce background). This is one of the highest-leverage E-E-A-T fixes available — coupon/deals sites live or die on user trust that a real human checked the code, and right now that claim is unverifiable.

---

### 5. Core trust statistics (92.4% success rate, 10,000+ verified, 500+ brands) are unsourced and unverifiable (High)

**Description:** These four numbers appear repeated verbatim across the homepage, About Us, and Contact pages (at minimum 6 separate placements counted): "10,000+ Coupons Verified," "500+ Partner Brands," "92.4% Coupon Success Rate," "50,000+ Happy Users." No page links to a methodology, a real-time verification log, a public brand-partner directory, or any third-party audit substantiating these figures. `content_verify.py` run against the Amazon store page's editorial text separately confirmed **100% of extracted factual claims (6/6) are uncited** — figures like "300 million active customers," "2 million sellers," and Amazon's 1994/2013 founding dates carry no source link:

```json
{
  "claim_count": 6,
  "uncited_count": 6,
  "uncited_ratio": 1.0
}
```

For a site whose entire value proposition is verification rigor ("we verify before we publish"), the absence of any visible sourcing for its own headline trust metric is a direct E-E-A-T liability — precisely the kind of unverifiable authority claim the Sept 2025 QRG instructs raters to discount.

**Recommendation:** Either link the 92.4% figure to a live/updated methodology page (e.g., "based on N user-reported attempts in the last 30 days, updated hourly") or soften the framing to avoid implying a precise, audited statistic. Cite external sources (press releases, Amazon/brand newsroom pages) for third-party factual claims like founding dates and customer counts.

---

### 6. Duplicate content block rendered twice on the same page — Pepperfry store page (Medium)

**Description:** The `/stores/pepperfry-coupon-code` page renders the entire "Why Millions of Indian Shoppers Choose Pepperfry" section — five subsections ("India's Deepest Furniture Catalogue," "Studio Pepperfry," "45-Day Return Policy," "No-Cost EMI," "Pepperfry Privilege Membership," "Pepperfry for Business") — **twice, verbatim, back to back** in the page's DOM (confirmed at lines 250-262 and again at 279-291 of the extracted text dump, ~700 words repeated). The equivalent section on the Amazon store page ("Why Millions of Indian Shoppers Continue to Choose Amazon") appears only once, indicating this is a page-specific rendering bug rather than an intentional template pattern.

Duplicated blocks on the same page dilute keyword relevance signals, waste crawl budget/token budget for AI summarizers, and read as a CMS/template bug to any user who scrolls past the "Read More" link.

**Recommendation:** Audit the Pepperfry store page template (and spot-check other store pages) for the duplicate-block rendering bug — likely a component being mounted twice in the page layout — and deploy a fix. Re-crawl all `/stores/*` pages after the fix to confirm no other instances exist.

---

### 7. Store pages are template-driven with a highly repeatable structural skeleton — moderate duplicate-content risk at scale (Medium)

**Description:** Comparing the Amazon and Pepperfry store pages (6,474 and 4,759 words respectively, including chrome) shows near-identical section architecture reused with brand-name substitution:
- `"[Store] Coupons & Offers"` deal grid with identical "Verified Today" badge on every card
- `"The Story Behind [Store]"` origin narrative
- `"Why Use CouponScrew for [Store] Deals?"` — same 5-6 sub-headers ("Daily Code Verification," "Real-Time Success Rates," bank-offer tracking) reworded per brand
- `"[Store] Coupon Code India (Month Year): Up to X% Off"` comparison table
- `"How to Use a [Store] Coupon Code — Step by Step"` numbered list
- `"Why Millions of Indian Shoppers Choose [Store]"`
- Closing FAQ block with a near-identical question set ("Can I stack a coupon with a bank offer?", "Why is my promo code not working?", "Is there a student/military/app-exclusive discount?")

This is not inherently a violation — Google's guidance permits templated structure if the underlying content is genuinely differentiated (which it is here: Pepperfry's copy discusses furniture categories, EMI thresholds, and Studio Pepperfry; Amazon's discusses Prime, Subscribe & Save, and category breadth — real product-specific detail, not spun text). `content_quality.py` scored both pages 93-95/100 with zero AI-pattern-phrase or filler-phrase matches, which is a genuinely positive signal.

However, the **skeleton-level duplication across 500+ store pages** (per the site's own "500+ Partner Brands" claim, and confirmed via sitemap.xml listing many `/stores/*-coupon-code` URLs) is a scale risk: if lower-traffic/lower-priority stores receive thinner versions of this template (i.e., without the deep category write-ups seen on Amazon/Pepperfry), those pages would fall well under thin-content thresholds while sharing an identical boilerplate skeleton — a classic programmatic-duplication pattern. This determination requires sampling a larger set of lower-tier store pages than was in scope here.

**Recommendation:** Defer to `seo-programmatic` sub-skill for a full sample-based audit across all `/stores/*` pages to confirm what percentage receive the full editorial treatment (like Amazon/Pepperfry) vs. a thin templated shell. Prioritize adding unique editorial depth to any store pages currently shipping with only the deal-grid + generic "Why Use CouponScrew" boilerplate and no brand-specific narrative section.

---

### 8. "Verified Today" / "Last Updated: Today" freshness badges appear static and likely non-functional (Medium)

**Description:** Every single deal card sampled on both the Amazon and Pepperfry store pages (30+ and 10+ cards respectively) carries an identical "Verified Today" badge, and the page header shows "Last Updated: Today" — regardless of individual deal specifics. Combined with the site-wide `sitemap.xml` showing `<lastmod>` timestamps for essentially every URL set to the exact moment of the site's last deploy/build (not per-page content changes), this pattern is consistent with the freshness signal being a **template-rendered "today" string rather than a genuine per-deal verification timestamp**.

This matters directly for the site's core trust claim: "Every coupon is tested by a real person before it goes live... Expired codes get pulled within minutes." If "Verified Today" is simply today's date rendered on every card on every page load rather than a true last-checked timestamp, it actively misrepresents verification recency — a trust (E-E-A-T) issue, not just a UX one.

**Recommendation:** Confirm with engineering whether "Verified Today" reflects an actual per-coupon verification event or is a template default. If the latter, replace with a genuine last-checked timestamp (even if it's "Verified 3 days ago" for some codes) — mixed, honest freshness signals are more credible to both users and AI crawlers than a uniform "Today" applied to 500+ brands' worth of deals simultaneously.

---

### 9. Contact page shows two different phone numbers with no explanation (Low)

**Description:** The `/contact` page footer displays `+91 7838554882` (same number used site-wide in every page footer and in About Us), but the same page's "Quick Support → Phone Support" card displays a different number: `+91 98765 43210`. No labeling distinguishes which number is for which purpose (e.g., sales vs. support).

**Recommendation:** Reconcile to a single phone number, or clearly label the two numbers by function (e.g., "General Support" vs. "Brand Partnerships") to avoid appearing as an inconsistency/trust red flag to users or automated NAP-consistency checks.

---

### 10. AI citation readiness is comparatively strong on store pages, weak on the homepage (Info / Positive + Gap)

**Description:** Store pages (Amazon, Pepperfry) are well-structured for AI Overviews / LLM citation: clear H2/H3 hierarchy, a discount-comparison HTML table (`Offer Type | Category | Discount | Highlights | Eligibility`), a numbered step-by-step redemption guide, and FAQPage/Answer/Question schema matching the visible FAQ text verbatim (confirmed via structured-data block extraction: `FAQPage`, `Question`, `Answer` types present alongside `ItemList`, `BreadcrumbList`). This is a genuinely strong pattern for extractable, quotable answers.

The homepage, by contrast, has almost no quotable sentence-level content for an AI system to cite — it's overwhelmingly stat callouts and card grids, which extract poorly into prose answers (this is the same underlying issue as Finding 1).

**Recommendation:** No action needed on store-page structure — it's a model to replicate. On the homepage, add 2-3 short, self-contained, quotable paragraphs (e.g., a crisp definition of "What is Couponscrew and how does verification work?") that AI answer engines can lift directly, since the current prose is too fragmented across UI card labels to extract cleanly.

---

## Cross-References

- Expired `Offer.priceValidUntil` (2025-12-31, already 7.5 months stale) and missing required `Product.image` on product pages — see `schema.md` findings #1-2. These compound Finding 8 above: the site has multiple independent freshness-claim credibility issues (schema dates, on-page "Verified Today" badges, and blog post dates) pointing to a systemic gap between stated update cadence and actual update cadence.
- Full-scale duplicate-content risk across all `/stores/*` and `/products/*` pages should be assessed by the `seo-programmatic` sub-skill using a larger URL sample than the two pages reviewed here.
- Backlink/authority signals (external citations, press mentions) are covered separately in `backlinks.md`.
