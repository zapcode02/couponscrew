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
    code: 'PIZZAPARTY',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'PARTY200',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'PARTY500',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'NEW90',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: 'GRAB0539',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'CART125',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'PIZZA250',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'NEWBIE100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: 'TREAT100',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'WELCOME90',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: 'GET30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: 'BUY2GET1',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
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
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];
