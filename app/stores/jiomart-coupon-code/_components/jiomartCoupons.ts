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

export const JIOMART_COUPONS: Coupon[] = [
  {
    id: 'coupon-2',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Save Flat 10% on Fresh Vegetables — Up to ₹50 OFF per Order',
    description: 'Shop fresh vegetables on JioMart and save flat 10% on your order — discount capped at ₹50 and applicable on the fresh vegetables category.',
    code: 'FRESH10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT ₹75 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'Flat ₹75 OFF on JioMart Orders Above ₹599 — Free Shipping Included',
    description: 'Shop for ₹599 or more on JioMart and save flat ₹75 instantly — free shipping included on all eligible orders with no extra charge.',
    code: 'JM75',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Water Purifiers at JioMart',
    description: 'Save flat 5% on water purifier purchases on JioMart — apply the coupon code at checkout to activate the discount on eligible products.',
    code: 'WATER5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT ₹30 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'Flat ₹30 OFF on JioMart Orders Above ₹149',
    description: 'A simple discount for everyday grocery and essentials shopping — spend ₹149 or more on JioMart and save flat ₹30 with the coupon code.',
    code: 'JM30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Save Flat ₹50 on JioMart Orders Above ₹449',
    description: 'Get an instant ₹50 off on eligible JioMart orders — shop for ₹449 or more and apply the coupon code at checkout to redeem.',
    code: 'JM50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Vacuum Cleaners at JioMart',
    description: 'Shop vacuum cleaners on JioMart and save flat 5% — apply the coupon code at checkout to activate the discount on eligible products.',
    code: 'VACUUM5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME & KITCHEN',
    title: 'Monsoon Ready for Less — Flat 5% OFF on Monsoon Essentials',
    description: 'Stock up on monsoon must-haves at JioMart and save flat 5% — apply the coupon code at checkout on eligible monsoon essentials products.',
    code: 'RAIN5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT ₹400 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'Save Flat ₹400 on Tech Essentials at JioMart',
    description: 'Shop tech essentials on JioMart and save flat ₹400 — apply the coupon code at checkout to instantly reduce your order total.',
    code: 'TECH400',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Microwaves at JioMart',
    description: 'Shop microwaves on JioMart and save flat 5% — apply the coupon code at checkout on eligible microwave models from top brands.',
    code: 'MWO5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'Shop Dyson on JioMart — Get Flat 5% OFF on All Dyson Products',
    description: 'Save flat 5% on Dyson products available on JioMart — apply the coupon code at checkout to activate the discount on eligible Dyson items.',
    code: 'DYSON5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT ₹1000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'ELECTRONICS',
    title: 'Save Flat ₹1,000 on Mac & iPad Purchases at JioMart',
    description: 'Shop Mac computers or iPad on JioMart and save flat ₹1,000 — apply the coupon code at checkout on eligible Apple products.',
    code: 'APPLE1000',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'JioMart Mobiles & Electronics Sale — Up to 80% OFF + Extra 10% via Card',
    description: 'Shop mobiles, tablets, and electronics on JioMart with discounts up to 80% — pay via eligible card to stack an additional 10% off on your order.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FROM ₹15',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'STATIONERY',
    title: 'Back to School Deals on JioMart — Stationery Starting from Just ₹15',
    description: "Get ready for the new school term with JioMart's back-to-school sale — pens, pencils, and accessories starting from as low as ₹15.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'JioMart Grocery Sale — Flat 40% OFF Across 8+ Categories from ₹20',
    description: 'Shop everyday groceries on JioMart and save flat 40% — covers biscuits, fruits, dairy, personal care, beauty, and more, starting from just ₹20.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Kitchen & Home Appliances on JioMart — Up to 80% OFF',
    description: 'Save up to 80% on a wide range of kitchen and home appliances on JioMart — covering everything from mobiles and TVs to kitchen tools and home essentials.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'FASHION',
    title: "Women's Fashion Accessories on JioMart — Up to 80% OFF",
    description: "Shop women's fashion accessories on JioMart and save up to 80% — jewellery, handbags, sunglasses, and more at heavily discounted prices.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 87% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Shop Dry Fruits on JioMart — Up to 87% OFF Starting from ₹19',
    description: 'Get massive discounts on dry fruits at JioMart with prices starting from just ₹19 — no coupon code needed, discount is pre-applied at checkout.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'FASHION',
    title: "Women's Western Wear on JioMart — Up to 80% OFF from ₹89",
    description: "Refresh your wardrobe with JioMart's western wear collection at up to 80% off — handbags, sunglasses, wallets, and more starting from just ₹89.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];
