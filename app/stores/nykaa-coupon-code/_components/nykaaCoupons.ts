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

export const NYKAA_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 40% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FC2779]',
      color: '#FC2779',
      type: 'SKINCARE',
      title: 'Get up to 40% off on skincare essentials',
      description: 'Shop cleansers, moisturizers, serums and sunscreens from top brands at up to 40% OFF.',
      code: 'NYKAA40',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 20% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#2D0A1F]',
      color: '#2D0A1F',
      type: 'MAKEUP',
      title: 'Flat 20% off on your first makeup order',
      description: 'New customers can enjoy a flat 20% discount on lipsticks, foundations and eye makeup.',
      code: 'NEWNYKAA20',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FC2779]',
      color: '#FC2779',
      type: 'HAIRCARE',
      title: 'Get up to 50% off on haircare products',
      description: 'Shop shampoos, conditioners, hair oils and styling tools at up to 50% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2D0A1F]',
      color: '#2D0A1F',
      type: 'FRAGRANCES',
      title: 'Get up to 30% off on perfumes and fragrances',
      description: 'Shop a wide range of perfumes and deodorants from popular brands at up to 30% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'FLAT ₹500 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#FC2779]',
      color: '#FC2779',
      type: 'NEW USER',
      title: 'Flat ₹500 off on orders above ₹1999 for new users',
      description: 'First-time shoppers can get a flat ₹500 discount on orders above ₹1999 sitewide.',
      code: 'WELCOME500',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 60% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2D0A1F]',
      color: '#2D0A1F',
      type: 'MAKEUP',
      title: 'Get up to 60% off on select makeup brands',
      description: 'Shop a curated range of makeup essentials from select brands at up to 60% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 25% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FC2779]',
      color: '#FC2779',
      type: 'SKINCARE',
      title: 'Get up to 25% off on sunscreen and body care',
      description: 'Shop sunscreens, body lotions and body wash at up to 25% OFF.',
      code: 'BODYCARE25',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'FREE GIFT',
      badgeType: 'FREE',
      badgeColor: 'bg-[#2D0A1F]',
      color: '#2D0A1F',
      type: 'MAKEUP',
      title: 'Get a free gift on orders above ₹1499',
      description: 'Add a free beauty gift to your cart when your order value crosses ₹1499.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 35% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FC2779]',
      color: '#FC2779',
      type: 'HAIRCARE',
      title: 'Get up to 35% off on hair styling tools',
      description: 'Shop hair straighteners, dryers and trimmers from top brands at up to 35% OFF.',
      code: 'HAIRTOOL35',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 45% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2D0A1F]',
      color: '#2D0A1F',
      type: 'FRAGRANCES',
      title: 'Get up to 45% off on gift sets and combos',
      description: 'Shop fragrance and beauty gift sets curated for every occasion at up to 45% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
