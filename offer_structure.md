# Offer Structure Definition

This document defines the **shape** of an `Offer` object used throughout the project (offers page, festival‑offers pages, etc.).  It is used as a reference when adding or updating offers in any markdown data source.

---

## 1. Front‑matter (YAML) for offer markdown files
```yaml
---
id: "amazon-coupon-1"               # unique identifier (string)
brandName: "Amazon"                # brand name (string)
brandLogo: "https://.../amazon.jpg" # URL to brand logo (string)
storeSlug: "amazon-coupon-code"    # **optional** – URL slug used for the "Visit Store" button. If omitted the slug will be derived automatically from `brandName`.
dealUrl: "https://www.amazon.in"    # external link to the deal (string)
category: "Electronics"            # category for filtering (string)
badgeType: "FLAT"                  # badge text (string)
discountValue: "92%"                # discount display (string)
scopeText: "ON MOBILE CASES"       # short description of the scope (string)
title: "Amazon Coupon – 92% Off …"   # offer title (string)
description: "Give your iPhone …"   # longer description (string)
points:
  - "Point 1"
  - "Point 2"
  - "Point 3"
isVerified: true                    # whether the offer is manually verified (bool)
usedCount: "2.1k"                  # how many users have used it (string)
validTill: "30 Nov 2026"           # expiry date (string)
isExpiringSoon: false               # flag for UI badge (bool)
code: ""                            # optional coupon code (string)
userType: "All Users"               # optional target audience (string)
---
```

### Notes
- **`storeSlug`** – If this field is omitted, the UI falls back to a generated slug based on the brand name: `brandName.toLowerCase().replace(/\s+/g, '-') + '-coupon-code'`.  Adding the field ensures the **Visit Store** button points to the correct store page.
- All fields above map 1‑to‑1 to the TypeScript `Offer` interface (`app/offers/_components/offersData.ts`).
- Keep the order of keys consistent – it makes diff‑reviewing easier.

---

## 2. Where to place the markdown file
- **Offers page** – `app/offers/_components/offersData.ts` imports the data directly, but you can also keep a separate `offers.md` in `app/data/` and import it.
- **Festival‑offers pages** – Each festival folder (e.g., `festival-offers/thanksgiving-offers`, `festival-offers/black-friday-offers`) should contain its own markdown file (e.g., `thanksgiving_offers.md`).  The page component (`ThanksgivingOffers.tsx`, `BlackFridayOffers.tsx`, …) will read this file and transform the front‑matter into the same `Offer[]` shape.

---

## 3. How to apply the same **Visit Store** button fix automatically
1. **Add `storeSlug`** to every offer entry in the markdown file (use the template above).  If you already have a value, leave it as‑is.
2. **Run the helper script** (optional) that updates the TypeScript `Offer` interface and regenerates the data files:
   ```bash
   # From the project root
   node scripts/update-offers.js --source path/to/your.md
   ```
   The script reads the YAML front‑matter, validates required fields, and rewrites `offersData.ts` with the new `storeSlug` values.
3. The UI component (`Offers.tsx` and all festival‑offers components) already uses the fallback logic:
   ```tsx
   href={`/stores/${offer.storeSlug ?? `${offer.brandName.toLowerCase().replace(/\s+/g, '-')}-coupon-code`}`}
   ```
   So once `storeSlug` is present, the **Visit Store** button will link correctly.

---

## 4. Checklist for a new festival‑offers page
- [ ] Create a markdown file (e.g., `black-friday_offers.md`) following the front‑matter template.
- [ ] Include **`storeSlug`** for each brand.
- [ ] Add the file path to the corresponding page component (e.g., `BlackFridayOffers.tsx`).
- [ ] Run the optional update script or re‑run the project to verify.

---

## 5. Frequently Asked Questions
| Question | Answer |
|----------|--------|
| *Do I need to edit the TypeScript interface?* | No. The interface already includes the optional `storeSlug`. Adding it to the markdown is enough. |
| *What if I forget a field?* | The script will throw a validation error showing the missing key. |
| *Can I reuse the same markdown for multiple pages?* | Yes – just import it in each festival page component you need. |

---

*Keep this file version‑controlled.  Any change to the offer schema should be reflected here first before touching code.*

