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
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const PUMA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE',
    title: 'Puma Sitewide Sale — Up to 60% OFF + Extra 10% for First-Time Shoppers',
    description: 'Shop footwear, clothing, and accessories on Puma and save up to 60% — sign up and apply the coupon code to get an extra 10% off your first order with free shipping.',
    code: 'NORETURN',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'EXTRA 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'SELECT ITEMS',
    title: 'Get Extra 5% OFF on Selected Puma Products',
    description: 'Shop selected Puma products and save an extra 5% — apply the coupon code at checkout on all eligible items.',
    code: 'NORETURN',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 57% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNEAKERS',
    title: "Men's Sneakers at Puma — Up to 57% OFF on Top Styles",
    description: "Shop Puma's men's sneaker range at up to 57% off — covers popular styles including RS-X, Oslo-City, Anzarun, Wired, and more.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 57% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'SPORTSWEAR',
    title: "Women's Sportswear & Activewear at Puma — Up to 57% OFF",
    description: "Shop Puma's women's sportswear and activewear range at up to 57% off — includes yoga accessories, badminton shoes, ballerinas, slip-ons, and exclusive collections.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FIRST ORDER',
    title: 'New to Puma? Get Extra 10% OFF on Your First Order',
    description: 'First-time Puma shoppers get an extra 10% off automatically at checkout — log in to your Puma account to activate, valid on selected products only.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'EXTRA 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'PREPAID',
    title: 'Extra 5% OFF on All Puma Prepaid Orders — Up to ₹400 Discount',
    description: 'Choose a prepaid payment method on Puma and save an extra 5% automatically — maximum discount of ₹400, applied at checkout on all prepaid modes.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'EXTRA 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MULTI-BUY',
    title: 'Buy 2 or More Puma Products — Get Extra 10% OFF Automatically',
    description: 'Add 2 or more eligible Puma products to your cart and save an extra 10% — discount applied automatically at checkout, no coupon needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹749',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'LEGGINGS',
    title: 'Puma Pants & Leggings — Up to 57% OFF Starting from ₹749',
    description: "Shop Puma's range of pants, sweatpants, track pants, and leggings at up to 57% off — prices start from just ₹749.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'HOODIES',
    title: 'Puma T-Shirts & Hoodies — Up to 55% OFF Starting from ₹999',
    description: "Shop Puma's t-shirts and hoodies at up to 55% off — a wide range of styles for men and women starting from ₹999.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 53% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'KIDS',
    title: 'Puma Kids Collection — Up to 53% OFF on Shoes & Clothing',
    description: "Save up to 53% on Puma's kids' range — covers shoes, clothing, and accessories for children at discounted prices.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹1,119',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FERRARI',
    title: 'Puma Ferrari Collection — Up to 45% OFF Starting from ₹1,119',
    description: "Shop Puma's exclusive Ferrari collection at up to 45% off — race-inspired footwear and apparel starting from ₹1,119.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹1,080',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'BELTS',
    title: 'Puma Belts — Up to 55% OFF Starting from ₹1,080',
    description: "Shop Puma's belt collection at up to 55% off — quality sports and lifestyle belts starting from just ₹1,080.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹825',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WALLETS',
    title: 'Puma Wallets — Up to 53% OFF in a Wide Range of Colours from ₹825',
    description: "Shop Puma's wallet collection at up to 53% off — available in a wide range of colours and sizes starting from ₹825.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'FOOTWEAR',
    title: 'Puma Footwear Sale — Up to 60% OFF + Extra 5% on Prepaid Orders',
    description: "Shop Puma's full footwear range at up to 60% off — running shoes, sneakers, sandals, sports shoes, and more, with an extra 5% off on prepaid payments.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CLOTHING',
    title: 'Puma Clothing Sale — Up to 40% OFF for Men, Women & Kids',
    description: "Shop Puma's clothing range at up to 40% off — shirts, jerseys, polos, jackets, hoodies, tracksuits, and more for the whole family.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'JERSEYS',
    title: 'Puma Football Jerseys — Up to 55% OFF on Selected Team Kits',
    description: "Shop Puma's football jersey collection at up to 55% off — discount applied automatically at checkout on selected team jerseys for a limited time.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BAGS',
    title: 'Puma Bags — Up to 45% OFF on Backpacks, Gym Sacks, Duffel Bags & More',
    description: "Save up to 45% on Puma's full bag range — backpacks, gym sacks, duffel bags, shoulder bags, school bags, trolley bags, and more.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'BASKETBALL',
    title: 'Puma Basketball Shoes — Up to 55% OFF Across Performance & Lifestyle Styles',
    description: "Shop Puma's basketball shoe collection at up to 55% off — covers Performance, Lifestyle, and RS-Dreamer styles for all users.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CRICKET',
    title: 'Puma Cricket Shoes & Accessories — Up to 40% OFF',
    description: "Save up to 40% on Puma's cricket range — covers shoes, clothing, bats, gloves, pads, abdo guards, stumps, and more.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-20',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'SITEWIDE',
    title: 'Free Shipping & Free Returns on Puma Orders Above ₹999',
    description: 'Shop Puma and enjoy free shipping plus free returns on all orders above ₹999 — no coupon code needed, benefit applied automatically.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];