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

export const PUMA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FOOTWEAR',
    title: 'Get up to 50% off on running shoes',
    description: 'Shop the latest running shoes collection and save up to 50% on select styles.',
    code: 'PUMA50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'APPAREL',
    title: 'Flat 40% off on men\'s t-shirts and shorts',
    description: 'Get a flat 40% discount on a wide range of men\'s apparel including t-shirts and shorts.',
    code: 'PUMA40',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNEAKERS',
    title: 'Up to 30% off on sneakers collection',
    description: 'Shop trending sneakers for men and women at up to 30% off the listed price.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'SPORTSWEAR',
    title: 'Up to 50% off on sportswear essentials',
    description: 'Grab training tees, joggers and performance wear at up to 50% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WOMEN\'S APPAREL',
    title: 'Extra 20% off on women\'s activewear',
    description: 'Use this code to get an additional 20% off on women\'s leggings, sports bras and tops.',
    code: 'PUMAW20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'NEW ARRIVALS',
    title: 'Up to 60% off on new arrivals',
    description: 'Check out the newest footwear and apparel drops with discounts of up to 60%.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ACCESSORIES',
    title: 'Flat 25% off on bags and accessories',
    description: 'Save 25% on backpacks, caps, socks and other accessories in a single order.',
    code: 'PUMABAG25',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'KIDS',
    title: 'Up to 45% off on kids footwear and apparel',
    description: 'Shop comfortable kids\' shoes and clothing at up to 45% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE',
    title: 'Free shipping on your order',
    description: 'Enjoy free standard shipping on eligible orders storewide, no minimum spend required.',
    code: 'PUMASHIP',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#DA020E]',
    color: '#DA020E',
    type: 'FOOTWEAR',
    title: 'Up to 55% off on training and gym shoes',
    description: 'Get discounts of up to 55% on training and gym shoe collections for men and women.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
