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

export const ADIDAS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: "KIDS' SPORTSWEAR",
    title: "Up to 60% Off on Kids' Footwear & Sportswear",
    description: "Shop kids' sneakers, tracksuits, and everyday sportswear at up to 60% OFF.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OUTLET SALE',
    title: 'Outlet Sale — Up to 60% Off on Shoes, Clothing & Accessories',
    description: 'Up to 60% off during the adidas outlet sale. Valid across shoes, clothing, and accessories. Free shipping included on outlet orders.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'SPECIAL OFFERS',
    title: 'Flat 50% Off + Extra 10% Off on Adidas Special Offers',
    description: 'Flat 50% off across a wide range of adidas products — running shoes from ₹2,199, daily sneakers from ₹2,199, and T-shirts from ₹799. Plus an extra 10% off on your first order.',
    code: '',
    verified: 'Verified',
    userType: 'New & Existing Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FOOTWEAR',
    title: "Get Up to 50% Off on Men's & Women's Sneakers",
    description: 'Shop running shoes, lifestyle sneakers, and the iconic three-stripes collection at up to 50% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'TRAINING GEAR',
    title: 'Up to 45% Off on Training & Gym Essentials',
    description: 'Shop training shoes, gym bags, gloves, and performance accessories at up to 45% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'APPAREL',
    title: 'Flat 40% Off on Sportswear & Track Suits',
    description: 'Grab t-shirts, track jackets, and joggers from the latest sportswear collection at a flat 40% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'STUDENTS',
    title: 'Students — Flat 15% Off via UNiDAYS',
    description: 'Students get flat 15% off on adidas India orders through UNiDAYS. Valid for students only.',
    code: '',
    verified: 'Verified',
    userType: 'Students Only',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-8',
    badge: 'EXTRA 15% OFF',
    badgeType: 'FREE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'CART DISCOUNT',
    title: 'Extra 15% Off on Orders Above ₹4,999',
    description: 'Get an extra 15% off when your adidas cart value crosses ₹4,999.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'SIGN UP OFFER',
    title: 'Sign Up Offer — Flat 10% Off on Your First Order',
    description: 'New to adidas India? Sign up and get a flat 10% off on your first order with no minimum cart value required.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-10',
    badge: '500 BONUS PTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'ADICLUB',
    title: 'adiClub — Sign Up and Get 500 Welcome Points',
    description: 'Sign up for adiClub for free and receive 500 points as a welcome bonus to redeem for future rewards and discounts.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'SHIPPING',
    title: 'Free Delivery & Returns on Orders Above ₹1,000',
    description: 'Spend ₹1,000 or more on adidas India and get free delivery, free exchange, and free returns.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹2,000',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'BUDGET SHOES',
    title: 'Shoes Under ₹2,000',
    description: 'Looking to keep spend low? Explore adidas shoes available under ₹2,000 on the dedicated page.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹15,999',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'COLLECTIONS',
    title: 'Shop the Adidas Originals Hyperboost Collection',
    description: 'The latest adidas Originals Hyperboost collection is live starting at ₹15,999 for men and women.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  }
];
