// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'BANK OFFER' | 'CASHBACK' | 'FLASH SALE';
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

export const ZOMATO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT ₹200 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat ₹200 OFF on Selected Food Orders',
    description: 'Get ₹200 instant savings on your next Zomato food order from selected restaurant partners.',
    code: 'GET200',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹150 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat ₹150 OFF on Food Orders',
    description: 'Order from your favourite restaurants and save ₹150 instantly — just apply the code at checkout.',
    code: 'GET150',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT ₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat ₹125 OFF on Selected Food Orders',
    description: 'Save ₹125 flat on delicious meals from handpicked restaurant partners on Zomato.',
    code: 'GET125',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat ₹100 OFF — No Minimum Order Required',
    description: 'Get ₹100 instant discount on restaurant-style meals with no minimum cart value needed.',
    code: 'GET100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'GOLD AT ₹1',
    badgeType: 'FLASH SALE',
    badgeColor: 'bg-[#E23744]',
    color: '#E23744',
    type: 'GOLD MEMBERSHIP',
    title: 'Zomato Gold Flash Sale: 3 Months at Just ₹1',
    description: 'Get a 3-month Zomato Gold subscription for only ₹1 during this limited-time flash sale — open to all users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 10% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'BANK OFFER',
    title: 'Flat 10% OFF Using IDFC Bank Cards',
    description: 'Pay with your IDFC Bank debit card and get a flat 10% discount on food orders above ₹299.',
    code: 'IDFCSWYP',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 10% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'BANK OFFER',
    title: 'Flat 10% OFF Using Standard Chartered DigiSmart Credit Card',
    description: 'Save 10% up to ₹150 on Zomato orders when you pay via Standard Chartered DigiSmart credit card.',
    code: 'DIGISMART',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat 10% OFF on Orders Over ₹199',
    description: 'Save on tasty meals with a flat 10% discount on your Zomato order — valid for all users on orders above ₹199.',
    code: 'TASTY',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E23744]',
    color: '#E23744',
    type: 'FOOD DELIVERY',
    title: 'Up to 50% OFF (Max ₹100) on Favourite Meals',
    description: 'Save up to 50% — capped at ₹100 — on meals from your favourite Zomato restaurant partners.',
    code: 'MUNCHBLISS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO ₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#E23744]',
    color: '#E23744',
    type: 'WALLET OFFER',
    title: 'Up to ₹100 Cashback via Paytm UPI',
    description: 'Pay with Paytm UPI on Zomato and get up to ₹100 instant cashback directly to your Paytm wallet.',
    code: 'PAYTMUPI',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: '30% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#E23744]',
    color: '#E23744',
    type: 'BREAKFAST',
    title: '30% OFF up to ₹75 on Breakfast Orders',
    description: 'Start your morning right — get 30% off up to ₹75 on breakfast orders from select Zomato restaurants.',
    code: 'BREKKIE75',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: '5% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#E23744]',
    color: '#E23744',
    type: 'UPI OFFER',
    title: '5% Cashback on BHIM App Orders',
    description: 'Pay via the BHIM app on Zomato and get 5% instant cashback on your food order.',
    code: 'BHIMAPP',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Free Delivery on Orders Over ₹199',
    description: 'Skip the delivery fee — enjoy free delivery on your Zomato order with a minimum purchase of ₹199.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Ongoing'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'FOOD DELIVERY',
    title: 'Flat 10% OFF on Orders Above ₹798',
    description: 'Get a flat 10% discount on Zomato orders above ₹798 — no coupon code needed, valid for all users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Ongoing'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'BANK OFFER',
    title: 'American Express IndusInd Card: Flat ₹100 OFF',
    description: 'Pay with your IndusInd-issued American Express card and get ₹100 off on orders above ₹200.',
    code: 'AMEXEPAY',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 3% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#1C1C1C]',
    color: '#1C1C1C',
    type: 'BANK OFFER',
    title: '3% OFF Using AU Small Finance Bank Credit Card',
    description: 'Save a flat 3% on your Zomato food order when you pay with an AU Small Finance Bank credit card.',
    code: 'AUCC3',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  }
];