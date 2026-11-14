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

export const PEPPERFRY_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FURNITURE',
    title: 'Pepperfry Coupon Code – Get 50% Off Bonton Computer Table',
    description: 'Save up to 50% on the Bonton Computer Table in Wenge finish, with a built-in keyboard slider.',
    points: [
      'Get up to 50% off on the Bonton Computer Table.',
      'The table comes in a stylish Wenge finish with a sliding keyboard tray.',
      'A useful choice for a home office or study area.',
      'Buy this furniture deal while the discount is on.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: '@ ₹1',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'DINING',
    title: 'Pepperfry Coupon Code – Ethnic PVC Placemats for Just ₹1',
    description: 'Get a colourful set of six PVC placemats for only ₹1.',
    points: [
      'Buy the Ethnic Motif multicolour PVC placemat set for just ₹1.',
      'The set has six placemats, each measuring 12 x 16 inches.',
      'It gives your dining table a bright and lively look.',
      'A limited-time deal, valid while stock lasts.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FURNITURE',
    title: 'Pepperfry Promo Code – Save Up to 35% on Yuko TV Console',
    description: 'Give your living room a fresh look with up to 35% off on the Yuko TV Console.',
    points: [
      'Get up to 35% off on the Yuko TV Console.',
      'Made to hold TVs up to 55 inches.',
      'It comes in an elegant Columbia finish that suits modern homes.',
      'A good choice to keep your entertainment area neat and organised.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'APPLIANCES',
    title: 'Pepperfry Promo Code – Up to 75% Off Digital Weight Machine',
    description: 'Get a portable electronic digital weight machine at a big discount.',
    points: [
      'Save up to 75% on a portable digital weight machine.',
      'Good for checking your weight at home.',
      'Its small size makes it easy to store and use.',
      'Buy before this limited-time offer ends.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'HOME DECOR',
    title: 'Pepperfry Discount Code – Up to 75% Off + 20% Cashback',
    description: 'Save more on furniture and décor with extra cashback.',
    points: [
      'Get up to 75% off on selected furniture and décor.',
      'Get an extra 20% cashback on eligible purchases.',
      'See a wide range of home furnishing products.',
      'A good chance to give your home a fresh look for less.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'KITCHENWARE',
    title: 'Pepperfry Discount Code – Save Up to 75% on Ceramic Coffee Mugs',
    description: 'Buy the Brayan ceramic coffee mug set at up to 75% off.',
    points: [
      'Get up to 75% off on the Brayan 250ml mug set.',
      'The set comes with two white ceramic coffee mugs.',
      'Just right for your daily tea or coffee breaks.',
      'Limited-time savings on kitchenware.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 36% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FURNITURE',
    title: 'Pepperfry Voucher Code – Save Up to 36% on Suki Bedside Table',
    description: 'Give your bedroom a fresh look with up to 36% off on the Suki Bedside Table.',
    points: [
      'Save up to 36% on the Suki Bedside Table.',
      'It comes in a classic Wenge finish that never goes out of style.',
      'It gives you handy storage right next to your bed.',
      'Available while the offer price lasts.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '@ ₹1',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'KITCHENWARE',
    title: 'Pepperfry Voucher Code – Vegetable Peeler for Just ₹1',
    description: 'Get a smart vegetable peeler for only ₹1.',
    points: [
      'Buy the ABS plastic vegetable peeler for just ₹1.',
      'It has a strong stainless steel blade.',
      'Made for quick and easy food preparation.',
      'A low-cost addition to your kitchen basics.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: '@ ₹1',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'BATH',
    title: 'Pepperfry Referral Code – Anti-Skid Bath Mat for ₹1',
    description: 'Get a long-lasting anti-skid bath mat for just ₹1.',
    points: [
      'Buy the grey abstract bath mat for only ₹1.',
      'It measures 24 x 16 inches and is good for daily use.',
      'The rubber base gives a better grip.',
      'Great for making your bathroom safer.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 46% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FURNITURE',
    title: 'Pepperfry Referral Code – Save Up to 46% on Mana Coffee Table',
    description: 'Bring home the Mana Coffee Table and save up to 46%.',
    points: [
      'Get up to 46% off on the Mana Coffee Table.',
      'It has a stylish Wenge finish that goes well with modern décor.',
      'Fits well in living rooms and sitting areas.',
      'Shop now before this furniture offer ends.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
