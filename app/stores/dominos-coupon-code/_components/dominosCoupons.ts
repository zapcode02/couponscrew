// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  points: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const DOMINOS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO ₹200 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'APP EXCLUSIVE',
    title: "Save Up to ₹200 on Your Domino's Order + Free Delivery",
    description: "Order on the Domino's app today and save up to ₹200 instantly — free delivery included with no additional charges on eligible orders.",
    points: [
      'App-exclusive offer — not guaranteed to apply on the website.',
      'Free delivery is bundled in, no separate delivery fee on eligible orders.',
      'Apply code PIZZAPARTY at checkout to unlock the discount.',
      'Discount amount scales with cart value, up to the ₹200 cap.'
    ],
    code: 'PIZZAPARTY',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO ₹200 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: "Up to ₹200 Off on Your Favourite Domino's Pizza Order",
    description: "One of the most used Domino's pizza deals on CouponsCrew — apply this code at checkout and save up to ₹200 on selected orders today.",
    points: [
      'Code PARTY200 must be applied manually at checkout.',
      'Applies to selected orders — not guaranteed across the entire menu.',
      'Discount scales with cart size up to the ₹200 ceiling.',
      'Valid for existing users specifically, not first-time customers.'
    ],
    code: 'PARTY200',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'COMBO',
    title: 'Flat 30% Off — Up to ₹500 Off on Orders Above ₹1,500',
    description: "A reliable Domino's pizza deal for larger group orders — flat 30% off capped at ₹500 when your cart crosses ₹1,500.",
    points: [
      'Minimum cart value of ₹1,500 is required for the 30% discount to apply.',
      'Maximum discount caps at ₹500 even on larger carts.',
      'Best suited for group orders where the cart naturally crosses the threshold.',
      'Code PARTY500 must be applied at checkout.'
    ],
    code: 'PARTY500',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹90 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PIZZA',
    title: "Flat ₹90 Off Instantly + ₹25 Cashback on Your Next Domino's Order",
    description: "Get ₹90 off on your current order and ₹25 cashback credited to your Domino's wallet for the next — minimum cart ₹199, one of the better today's offer at Domino's for smaller orders.",
    points: [
      'Minimum cart value of ₹199 is required to unlock the ₹90 discount.',
      'The ₹25 cashback is credited to your Domino\'s wallet for use on a future order, not the current one.',
      'Good fit for smaller individual orders rather than large group carts.',
      'Code NEW90 must be applied at checkout to trigger both the discount and cashback.'
    ],
    code: 'NEW90',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO ₹200 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Up to ₹200 Off on Pizza + ₹30 Extra Cashback Instantly',
    description: "Save up to ₹200 on your Domino's pizza order and get an additional ₹30 instant cashback on top — apply the code at checkout to unlock both savings.",
    points: [
      'Code GRAB0539 must be entered at checkout to unlock both the discount and cashback together.',
      'The ₹30 cashback is instant, unlike some other Domino\'s offers that credit cashback for a future order.',
      'Discount scales with order size up to the ₹200 ceiling.',
      'Valid for existing users specifically.'
    ],
    code: 'GRAB0539',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PIZZA',
    title: "Flat ₹125 Off Your Domino's Order — No Minimum Cart Required",
    description: "One of the few active Domino's pizza promo codes with no minimum order value — get ₹125 straight off your bill, whatever the order size.",
    points: [
      'No minimum cart value required — a rare perk compared to most other Domino\'s codes.',
      'Code CART125 must be applied manually at checkout.',
      'Flat ₹125 off regardless of what you order or the final bill size.',
      'Valid for existing users specifically, not first-time customers.'
    ],
    code: 'CART125',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO ₹250 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Up to ₹250 Off on Veg Pizza Orders | Min Cart ₹699',
    description: 'Save up to ₹250 on your veg pizza order when cart value is ₹699 or above — one of the better Domino\'s recent offers for vegetarian pizza lovers.',
    points: [
      'Minimum cart value of ₹699 is required for eligibility.',
      'Restricted to vegetarian pizza orders — check item tags before assuming eligibility.',
      'Code PIZZA250 must be applied at checkout.',
      'Discount scales with order size up to the ₹250 ceiling.'
    ],
    code: 'PIZZA250',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PIZZA',
    title: "₹100 Off Your Domino's Order + ₹50 Extra Cashback Instantly",
    description: 'Get ₹100 off on your order and an additional ₹50 instant cashback when you apply this Domino\'s discount code at checkout — no minimum cart value stated.',
    points: [
      'No minimum cart value explicitly stated for this deal.',
      'The ₹50 cashback is instant, applied at the same time as the ₹100 discount.',
      'Code NEWBIE100 must be applied manually at checkout.',
      'Open to all users, not restricted to new customers only despite the code name.'
    ],
    code: 'NEWBIE100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO ₹100 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Up to ₹100 Off on Orders Above ₹499 | Valid During Select Hours',
    description: 'Save up to ₹100 on delivery orders of ₹499 and above — valid between 10 AM–7 PM and 11 PM onwards through store operating hours.',
    points: [
      'Only valid during specific windows: 10 AM–7 PM and 11 PM onwards through closing.',
      'Minimum cart value of ₹499 is required.',
      'Code TREAT100 must be applied at checkout within the valid time window.',
      'Discount won\'t apply if ordering outside the specified hours.'
    ],
    code: 'TREAT100',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT ₹90 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'APP EXCLUSIVE',
    title: "Flat ₹90 Off + ₹25 Wallet Cashback on Your Domino's App Order",
    description: "Order on the Domino's app and get ₹90 off instantly, plus ₹25 cashback credited to your Domino's wallet — minimum cart ₹199.",
    points: [
      'App-exclusive — may not apply when ordering via the website.',
      'Minimum cart value of ₹199 is required.',
      'The ₹25 cashback lands in your Domino\'s wallet for a future order, not this one.',
      'Code WELCOME90 must be applied manually at checkout.'
    ],
    code: 'WELCOME90',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT ₹30 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'APP EXCLUSIVE',
    title: "Flat ₹30 Off on Domino's App Orders | Min ₹200",
    description: "A simple, no-fuss Domino's offer today — ₹30 off on any app order above ₹200. Useful for smaller individual orders where bigger codes don't apply.",
    points: [
      'App-exclusive — not guaranteed on website orders.',
      'Minimum cart value of ₹200 is required.',
      'A good backup when a bigger-ticket deal\'s minimum order isn\'t met.',
      'Code GET30 must be entered manually at checkout.'
    ],
    code: 'GET30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'BUY 2 GET 1',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'COMBO',
    title: 'Buy 2 Pizzas, Get 1 Free — 3 Medium Pizzas at ₹199 Each',
    description: 'One of the most popular dominos pizza deals on CouponsCrew — get 3 medium pizzas for the price of 2, at just ₹199 each.',
    points: [
      'Applies specifically to medium-size pizzas — check pizza size before assuming eligibility.',
      'All 3 pizzas are priced at ₹199 each, so the free one isn\'t automatically the cheapest.',
      'Code BUY2GET1 must be applied at checkout to activate the deal.',
      'Good value for group orders or sharing across a household.'
    ],
    code: 'BUY2GET1',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'COMBO',
    title: 'Combo Bonanza — Up to 50% Off on Selected Combo Packs',
    description: "Save up to 50% on Domino's combo packs — a smart pick for group orders or sharing meals. Prices start from ₹1,009 with no coupon code needed.",
    points: [
      'No code needed — discount is already reflected in the combo pack listing price.',
      'Entry-level combo pricing starts from ₹1,009.',
      'Best suited for group orders or sharing meals rather than solo orders.',
      'Combo contents (pizzas, sides, drinks) vary by pack — check the listing before ordering.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'REWARDS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'SUBSCRIPTION',
    title: "Domino's Cheesy Rewards — Earn 100 Points Per Order, Redeem for Free Pizza",
    description: "Enroll in Domino's Cheesy Rewards and earn 100 points on every order of ₹350 or more — redeem 600 points for a free regular pizza.",
    points: [
      'Enrolment is required before your next order — points cannot be earned retroactively on past purchases.',
      'Each qualifying order (₹350+) earns 100 points, capped at 100 points per day.',
      '600 points redeem for one free regular pizza — roughly 6 qualifying orders.',
      'Points are valid for 365 days from your enrolment date.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'COMBO',
    title: 'Crazy Deals Combo — Up to 50% Off | Prices Start From ₹75',
    description: "Domino's Crazy Deals combos are among the best-value dominos pizza deals available — up to 50% off with prices starting from just ₹75.",
    points: [
      'No code needed — discount is reflected directly in the Crazy Deals menu pricing.',
      'Entry-level items start from as low as ₹75.',
      'One of the most budget-friendly combo categories on the Domino\'s menu.',
      'Selection may vary by city or outlet — check availability before ordering.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO ₹750 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: "Save Up to ₹750 on Large Domino's Orders",
    description: 'Planning a group order? This is one of the highest-value dominos recent offers for bigger carts — up to ₹750 off on eligible large orders, no coupon code needed.',
    points: [
      'No code needed — discount applies automatically on eligible large orders.',
      'Best suited for group or party-size orders given the higher discount ceiling.',
      'Eligibility is based on cart size crossing a certain threshold — check at checkout.',
      'One of the higher-value Domino\'s offers currently available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO ₹200 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Up to ₹200 Off on Cheese Lava Pizza | Prices From ₹399',
    description: "Order Domino's Cheese Lava Pizza and save up to ₹200 — prices start from ₹399 with no coupon code required on this deal.",
    points: [
      'No code needed — discount already reflected in the Cheese Lava Pizza listing.',
      'Entry-level pricing starts from ₹399.',
      'Limited to this specific pizza variant, not the wider menu.',
      'Check availability as specialty items can be limited by outlet.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'SPECIAL DEAL',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PIZZA',
    title: 'New 6-in-1 Pizza — 24 Slices for ₹799 | Free Delivery Included',
    description: "Domino's newly launched 6-in-1 Pizza gives you 24 slices across 6 flavours for just ₹799 — free delivery included, no coupon code needed.",
    points: [
      'A newly launched item — availability may vary by outlet in the initial rollout.',
      'Free delivery is bundled in, no separate charge.',
      'Covers 6 different flavours across 24 total slices, good for sharing.',
      'No code needed — pricing already reflects the deal.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: '6-in-1 Cheeseburst Veg Pizza — Up to 50% Off | From ₹999',
    description: 'The Big Big 6-in-1 Cheeseburst Veg is available at up to 50% off — one of Domino\'s most indulgent sharing options at its best price.',
    points: [
      'Vegetarian item specifically — check menu tags before ordering if dietary preference matters.',
      'Entry-level pricing from ₹999, positioned as a premium sharing option.',
      'No code typically needed — discount reflected in the listed price.',
      'Best suited for larger groups given the 6-in-1 format and cheeseburst crust.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Everyday Value Pizza Deals — Up to 40% Off | Order 2 & Save More',
    description: "Domino's Everyday Value Deals offer up to 40% off on selected pizzas — order 2 together to unlock extra savings on top of the standard deal price.",
    points: [
      'Extra savings require ordering 2 pizzas together, not a single pizza.',
      'Limited to pizzas tagged as part of the Everyday Value Deals range.',
      'No code typically needed — discount reflected directly in the deal pricing.',
      'A good recurring option since this runs as an everyday deal rather than a limited-time promo.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
