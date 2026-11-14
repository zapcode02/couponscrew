// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'SPECIAL' | 'EXTRA';
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

export const UNIDAYS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'STUDENT VERIFICATION',
    badgeType: 'FREE',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'COUPON CODE',
    title: 'UNiDAYS Coupon Code – Free Student Verification',
    description: 'Verify your student status for free and get special discounts from hundreds of partner brands.',
    points: [
      'Complete the free student verification to get member-only offers.',
      'Get discounts on fashion, tech, travel, food and more.',
      'You need to be a verified student to claim partner brand deals.',
      'Keep enjoying savings from participating brands all year round.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: '60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'COUPON CODE',
    title: 'UNiDAYS Coupon Code – Up to 60% Off Fashion Brands',
    description: 'Verified students can save up to 60% on top fashion and clothing brands.',
    points: [
      'Get up to 60% off on selected fashion and lifestyle brands.',
      'Get special student prices after verification.',
      'Buy clothing, footwear and accessories from partner stores.',
      'Savings can be different for each participating brand.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: '40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'PROMO CODE',
    title: 'UNiDAYS Promo Code – Up to 40% Off Tech & Electronics',
    description: 'Verified students can get extra savings on laptops, gadgets and software.',
    points: [
      'Save up to 40% on eligible tech and electronics brands.',
      'Buy laptops, accessories, software and digital services.',
      'You must verify your student status before you can see the offers.',
      'Discounts are available through participating tech partners.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'PROMO CODE',
    title: 'UNiDAYS Promo Code – Up to 50% Off Food & Beauty',
    description: 'Get special student savings on food delivery and beauty brands.',
    points: [
      'Get up to 50% off on selected food delivery services.',
      'Save on beauty and personal care products from partner brands.',
      'Student-only offers open up after verification.',
      'Deals can be different for each participating merchant.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FREE ACCESSORY',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'DISCOUNT CODE',
    title: 'UNiDAYS Discount Code – Free Apple Accessory',
    description: 'Get a free eligible Apple accessory when you buy a qualifying Apple product.',
    points: [
      'Get free AirPods, an Apple Pencil or another eligible accessory.',
      'Buy a qualifying Apple device through UNiDAYS.',
      'You need student verification to get this offer.',
      'The accessory you get depends on the product you buy.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: '15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'DISCOUNT CODE',
    title: 'UNiDAYS Discount Code – Up to 15% Off MAC Cosmetics',
    description: 'Verified students can save up to 15% on MAC Cosmetics products.',
    points: [
      'Get up to 15% off on makeup, skincare and beauty basics.',
      'Student prices are available after your account is verified.',
      'Buy from a wide range of eligible MAC Cosmetics products.',
      'Discount availability can change by collection.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: '32% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'VOUCHER CODE',
    title: 'UNiDAYS Voucher Code – Up to 32% Off HP Laptops',
    description: 'Verified students can save up to 32% on eligible HP laptops.',
    points: [
      'Get student prices on selected HP laptop models.',
      'Save up to 32% when you shop through UNiDAYS.',
      'You must verify before you can claim the discount.',
      'The offer is valid only on eligible HP products.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '₹6,000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'VOUCHER CODE',
    title: 'UNiDAYS Voucher Code – ₹6,000 Off ASUS Laptops',
    description: 'Verified students can get an extra ₹6,000 off on eligible ASUS laptops.',
    points: [
      'Save ₹6,000 on selected Vivobook and Zenbook laptops.',
      'Get this special student offer through UNiDAYS.',
      'Student verification is needed before you buy.',
      'The offer is valid on eligible ASUS laptop models.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'REFERRAL CODE',
    title: 'UNiDAYS Referral Code – 10% Off H&M',
    description: 'Verified students can get special savings on H&M fashion.',
    points: [
      'Get 10% off on eligible clothing and accessories.',
      'Student verification unlocks this special discount.',
      'Buy fashion basics in participating categories.',
      'Savings are available through the UNiDAYS platform.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: '12% OFF',
    badgeType: 'EXTRA',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'REFERRAL CODE',
    title: 'UNiDAYS Referral Code – Extra 12% Off Puma',
    description: 'Verified students can get extra savings on Puma products.',
    points: [
      'Get an extra 12% off on footwear, clothing and accessories.',
      'The discount applies on the existing eligible prices.',
      'You need student verification to claim the offer.',
      'Shop selected Puma collections through UNiDAYS.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: '20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'CASHBACK OFFERS',
    title: 'UNiDAYS Cashback Offers – Flat 20% Off Ajio',
    description: 'Verified students can save 20% on eligible Ajio fashion purchases.',
    points: [
      'Get a flat 20% discount on eligible fashion products.',
      'Student-only prices are available through UNiDAYS.',
      'Browse clothing, footwear and accessories.',
      'The offer is valid only on eligible purchases.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: '53% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'CASHBACK OFFERS',
    title: 'UNiDAYS Cashback Offers – Up to 53% Off Palmonas',
    description: 'Verified students can save up to 53% on Palmonas jewellery.',
    points: [
      'Get up to 53% off on selected jewellery collections.',
      'Student verification is needed to get the offer.',
      'Buy at special UNiDAYS prices on eligible products.',
      'Discount availability can change by collection.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: '20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'WALLET OFFERS',
    title: 'UNiDAYS Wallet Offers – Up to 20% Off AbhiBus',
    description: 'Verified students can save on eligible bus ticket bookings.',
    points: [
      'Get up to 20% off on bus bookings through the AbhiBus app.',
      'You must verify your student status before claiming the offer.',
      'Book eligible routes at special student prices.',
      'The offer is available through UNiDAYS.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: '25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'WALLET OFFERS',
    title: 'UNiDAYS Wallet Offers – 25% Off GIVA Jewellery',
    description: 'Verified students can save 25% on GIVA’s silver jewellery collection.',
    points: [
      'Get 25% off on eligible silver jewellery purchases.',
      'Student verification unlocks the special price.',
      'See the full silver jewellery collection.',
      'The offer is available through UNiDAYS.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: '20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'BANK OFFERS',
    title: 'UNiDAYS Bank Offers – 20% Off Far From Travel Booking Fee',
    description: 'Verified students can save 20% on eligible travel booking fees.',
    points: [
      'Get 20% off on the booking fee for eligible travel reservations.',
      'You need student verification to claim the offer.',
      'Save on bookings made through Far From Travel.',
      'This special offer is available through UNiDAYS.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  }
];
