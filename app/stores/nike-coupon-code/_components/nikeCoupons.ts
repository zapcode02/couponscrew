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

export const NIKE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FOOTWEAR',
    title: 'Get Up to 50% Off on Nike Sneakers & Sportswear Shoes',
    description: 'Shop the latest Nike sneakers and everyday sportswear shoes for men and women at up to 50% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'RUNNING GEAR',
    title: 'Up to 45% Off on Nike Running Shoes & Running Gear',
    description: 'Shop Nike running shoes, tights, and performance running gear built for everyday training at up to 45% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'TOPS & TEES',
    title: 'Tops & T-Shirts — Up to 45% Off | From ₹847',
    description: 'Up to 45% off on graphic tees, jerseys, vests, tanks, and polos starting from ₹847.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'APPAREL',
    title: 'Flat 40% Off on Nike T-Shirts, Shorts & Sportswear Apparel',
    description: 'Get a flat 40% discount across Nike t-shirts, shorts, joggers, and everyday sportswear apparel.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'NEW ARRIVALS',
    title: 'Up to 40% Off — New Arrivals Across Categories',
    description: 'Shop from Nike new arrival collections and save up to 40% off across shoes, apparel, and accessories starting from ₹397.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'BASKETBALL',
    title: 'Basketball Footwear — Up to 40% Off',
    description: 'Up to 40% off on the latest Nike basketball footwear collection for court shoes at reduced prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'RUNNING',
    title: 'Running Essentials — Up to 40% Off',
    description: 'Up to 40% off on Nike running essentials including shoes, tops, jackets, trousers, tights, and shorts.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'BAGS & BACKPACKS',
    title: 'Bags & Backpacks — Up to 40% Off | From ₹895',
    description: 'Up to 40% off on school, college, laptop, duffle, and gym bags starting from ₹895.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: "KIDS' SPORTSWEAR",
    title: "Up to 35% Off on Nike Kids' Shoes & Sportswear",
    description: "Shop Nike kids' sneakers, apparel, and sportswear essentials for boys and girls at up to 35% OFF.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'JACKETS',
    title: 'Jackets & Gilets — Up to 30% Off | From ₹2,797',
    description: 'Up to 30% off on Nike jackets and gilets starting from ₹2,797 for all users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'BOTTOMS',
    title: 'Pants & Leggings — Up to 30% Off | From ₹1,795',
    description: 'Up to 30% off on joggers, sweatpants, tights, leggings, and trousers starting from ₹1,795.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'HOODIES',
    title: 'Hoodies & Sweatshirts — Up to 30% Off | From ₹2,595',
    description: 'Up to 30% off on Nike hoodies and sweatshirts featuring Dri-FIT and Therma-FIT tech starting from ₹2,595.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'JERSEYS',
    title: 'Jerseys & Kits — Up to 30% Off | From ₹3,197',
    description: 'Up to 30% off on team jerseys and kits including Liverpool, PSG, Barcelona, Brazil, and more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5AC8FA]',
    color: '#5AC8FA',
    type: 'SKATEBOARDING',
    title: 'Skateboarding Essentials — Up to 25% Off | From ₹1,277',
    description: 'Up to 25% off on Nike skateboarding apparel and footwear starting from ₹1,277.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'SPORTS BRAS',
    title: 'Sports Bras — Up to 20% Off | From ₹1,095',
    description: 'Up to 20% off on Nike sports bras starting from ₹1,095 for all users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'SNEAKERS',
    title: 'Air Force 1 — Up to 20% Off | From ₹2,995',
    description: 'Up to 20% off on the Nike Air Force 1 collection in a wide range of colors and designs starting from ₹2,995.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'SPORTS COLLECTION',
    title: 'Sports Collection — Up to 20% Off | From ₹847',
    description: "Up to 20% off on Nike's latest sports collection with items starting from ₹847.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-18',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'IMPORT TAX',
    title: 'Flat 10% Off — Import Tax Reduction Offer',
    description: "Get a 10% instant discount on your Nike order under the Indian government's 10% import-tax reduction.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'STUDENT DISCOUNT',
    title: 'Students Exclusive — Flat 10% Off on Nike India Orders',
    description: 'Verified students get a flat 10% off (up to ₹36,000 discount) on most Nike India items via SheerID verification.',
    code: '',
    verified: 'Verified',
    userType: 'Students Only',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 5% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'RUNNING',
    title: 'Running Shoes — Up to 5% Off',
    description: 'Up to 5% off on Nike running shoes across Zoom, React, Air, Joyride, Flyknit, and Free series.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  }
];
