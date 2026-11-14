// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL';
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

export const PIZZAHUT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT ₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'CASHBACK',
    title: 'Pizza Hut Cashback Offers – Flat ₹125 Off on Orders Above ₹500',
    description: 'Save ₹125 instantly on Pizza Hut orders of ₹500 or more with a valid coupon code.',
    points: [
      'Use coupon code HUT125 at checkout to get a flat ₹125 discount.',
      'The offer is valid on pizzas, sides, drinks and desserts.',
      'Available for both new and old Pizza Hut customers.',
      'Your order must be at least ₹500 to get this offer.',
    ],
    code: 'HUT125',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'CASHBACK',
    title: 'Pizza Hut Cashback Offers – Flat ₹100 Off on Orders Above ₹400',
    description: 'Get an instant ₹100 discount when your Pizza Hut order value reaches ₹400.',
    points: [
      'Use coupon code HUT100 to get a flat ₹100 discount.',
      'Valid on eligible Pizza Hut menu items.',
      'The offer works on online orders only.',
      'Add items worth at least ₹400 to your cart to get the savings.',
    ],
    code: 'HUT100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'BUY 1 GET 3 FREE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'WALLET OFFER',
    title: 'Pizza Hut Wallet Offers – Buy 1 Pizza & Get 3 Free Items',
    description: 'Order your favourite pizza and get three tasty extra items free.',
    points: [
      'Buy one Medium or Thin ‘N Crispy Pizza to get this offer.',
      'Get Classic Breadstix, Cheezy Sprinkled Fries and Pepsi free.',
      'Pick from eligible pizzas and enjoy a full meal.',
      'Available only for a limited period.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 36% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'COMBO MEAL',
    title: 'Pizza Hut Wallet Offers – Save Up to 36% on Double Treat Meal',
    description: 'Enjoy a full meal for two and save up to 36%.',
    points: [
      'Get the Double Treat Meal starting from ₹449.',
      'Save up to 36% compared to the regular menu price.',
      'The combo includes 2 Personal Pizzas and 1 Classic Breadstix.',
      'A good value meal to share with family or friends.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: '25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'BANK OFFER',
    title: 'Pizza Hut Bank Offers – Save 25% on Food Orders',
    description: 'Get up to 25% off on eligible Pizza Hut online food orders.',
    points: [
      'Save 25% on pizzas, sides, drinks and desserts.',
      'Your cart value must be at least ₹600.',
      'The maximum discount you can get is ₹300 per order.',
      'The offer is valid on eligible online orders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO ₹300 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BANK OFFER',
    title: 'Pizza Hut Bank Offers – Save Up to ₹300 on Online Orders',
    description: 'Order online and save up to ₹300 on eligible menu items.',
    points: [
      'Get 25% off, with a maximum discount of ₹300.',
      'Add items worth at least ₹600 to your cart.',
      'Valid on pizzas, drinks, sides and desserts.',
      'Combo meals and deal meals are not included in this offer.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹1,008',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'COMBO MEAL',
    title: 'Pizza Hut Coupon Code – Hut Treat Box from ₹1,008',
    description: 'Enjoy a full Pizza Hut feast starting from only ₹1,008.',
    points: [
      'Order the Hut Treat Box starting from ₹1,008.',
      'It includes 2 Medium Pizzas, 2 Breadstix, 2 Pepsi bottles and a Divine Chocolate Tub.',
      'Great to share with family or friends.',
      'Available only for a limited period.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'MOMO PIZZA OFFER',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'SPECIALTY PIZZA',
    title: 'Pizza Hut Coupon Code – Flat ₹125 Off on Momo Pizza Orders',
    description: 'Save ₹125 on eligible Momo Pizza orders above ₹500.',
    points: [
      'Get a flat ₹125 discount on Momo Pizza orders above ₹500.',
      'Use the eligible promo code at checkout to get the offer.',
      'Valid on pizzas, drinks, sides and desserts.',
      'Available for both first-time and old Pizza Hut customers.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
