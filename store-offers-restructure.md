# Store Offers Restructure — Findings

## What I was asked to check

User pointed at `app/stores/act-fibernet-coupon-code` as the **correct**
reference pattern:

- `_components/actFibernetCoupons.ts` — each coupon object has a `points:
  string[]` array of 3-4 extra bullet lines (beyond the one-line
  `description`).
- `_components/ActFibernetStore.tsx` — a conditional "View Details" button
  per coupon card:
  ```tsx
  {coupon.points && coupon.points.length > 0 && (
    <button onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)} ...>
      View Details
      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
    </button>
  )}
  ```
  Expanding the button renders `coupon.points` as a bullet list.

User's assumption: some other stores are missing the `points` data, **and**
some stores' `Store.tsx` files are missing the View Details toggle UI
entirely. Asked me to audit all stores and report back before any code
changes.

## What I actually found (verified directly, not just agent-reported)

The real picture is different from — and more specific than — the original
assumption:

**Every one of the 63 store pages already has the View Details toggle UI.**
There is no store with a plain title+description and no expandable section.
The button, the `expandedCouponId` state, and the chevron icon are present
everywhere, including in stores that look "incomplete."

The actual split is a **data-layer** problem, not a missing-UI problem:

### Group 1 — 21 stores: toggle UI backed by real per-coupon data
These populate a details array on (almost) every coupon object and render
it dynamically when expanded. But the field name is **inconsistent across
three naming conventions** for the identical concept:

- **`points`** (13 stores): act-fibernet, ajio, amazon, godaddy, igp, ikea,
  klook, myprotein, skechers, steam, trip, underrated-club, wish
- **`bullets`** (2 stores): myntra, flipkart
- **`details`** (6 stores): gnc, hotelcom, jockey, lenovo, namecheap,
  polki-sarees

Confirmed directly: `gncCoupons.ts` uses `details: [...]`,
`myntraCoupons.ts`(or equivalent) uses `bullets: [...]` — same shape
(`string[]`, 3-4 lines), same rendering logic in their respective
`Store.tsx`, just a different property name. Functionally these 21 stores
are all "done" — nothing is broken or invisible to users.

### Group 2 — 42 stores: toggle UI present, but backed by hardcoded static text
Confirmed directly in `ZomatoStore.tsx` (and the pattern repeats
identically per the audit): the button always renders — it is NOT gated
behind `coupon.points && coupon.points.length > 0` like ACT Fibernet is.
There is no `points`/`bullets`/`details` field anywhere in these stores'
`Coupon` interface. When a user clicks "View Details," they see 3 generic,
hardcoded bullets that are **identical for every coupon card on that
store's page** — e.g. for Zomato:

```tsx
{isExpanded && (
  <ul ...>
    <li>Valid on select restaurants and participating outlets.</li>
    <li>Minimum order value might apply as specified in offer terms.</li>
    <li>Offer availability may vary by location.</li>
  </ul>
)}
```

Every coupon on the page shows this same boilerplate regardless of what the
coupon actually is — the expand button works, but it tells the user
nothing coupon-specific. This is the real gap: **not missing UI, but
missing per-coupon data wired into UI that already exists.**

Full list of the 42: 1xbet, adidas, airbnb, blinkit, booking, bookmyshow,
crocs, dominos, expedia, firstcry, flixbus, hm, hostinger, indigo, jiomart,
kfc, kreditbee, lenskart, levis, lifestyle, magicpin, muscleblaze, nike,
nykaa, ola, oneplus, pepperfry, pizzahut, puma, pw, rapido, red-bus,
samsung, sonyliv, swiggy, testbook, uber, unidays, vistaprint, zee5, zepto,
zomato.

### `page.tsx` schema check (per your request to also look at this)
Checked `act-fibernet-coupon-code/page.tsx`: the JSON-LD `Offer` objects
(and the `ItemList` that wraps them) only ever use `coupon.description` —
`points`/`bullets`/`details` are never read by the schema layer, only by
the UI component. So this restructuring is purely a UI/data-file concern;
no `page.tsx` files need to change as part of it, and there's no schema bug
tied to this issue specifically.

## No code has been changed

This file is investigation-only, as asked. Nothing in `app/stores/` or
elsewhere has been modified.

## Open questions before any fix is planned

1. **Field naming**: should the 21 "Group 1" stores be standardized onto a
   single field name (`points`, matching the ACT Fibernet reference), or
   left as-is since they already work correctly under their current names?
2. **Group 2 scope**: do you want real per-coupon `points` written for all
   42 stores (highest effort — needs genuine content per coupon, not
   boilerplate), or just removal of the misleading generic static text
   where no real data exists yet, or something else?
3. **Order of operations**: tackle a few stores first as a proof of
   pattern, or do you want a full plan covering all 63 stores at once?
