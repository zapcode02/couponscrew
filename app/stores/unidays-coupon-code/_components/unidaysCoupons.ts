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

export const UNIDAYS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'STUDENT VERIFICATION',
    title: 'Free Student Verification Unlocks Exclusive Partner Brand Discounts',
    description: 'Verify your student status for free with UNiDAYS and instantly unlock exclusive discounts across hundreds of partner brands.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'FASHION',
    title: 'Up to 60% Off Top Fashion Brands with Verified Student Status',
    description: 'Get exclusive student-only discounts of up to 60% off leading fashion and apparel brands once your student status is verified.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'TECH & ELECTRONICS',
    title: 'Extra Up to 40% Off Tech & Electronics for Verified Students',
    description: 'Unlock extra student discounts of up to 40% off laptops, gadgets, software subscriptions and more from partner tech brands.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FOOD & BEAUTY',
    title: 'Exclusive Student Codes for Food Delivery & Beauty Brands',
    description: 'Access exclusive student-only codes offering up to 50% off food delivery, beauty, and personal care partner brands.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FREE ACCESSORY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#A2AAAD]',
    color: '#A2AAAD',
    type: 'APPLE STORE',
    title: 'Apple Store: Get a Free AirPods, Apple Pencil or Eligible Accessory',
    description: 'Buy a qualifying Apple device through UNiDAYS and get a free accessory — AirPods, Apple Pencil, or another eligible item included with your purchase.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MAC COSMETICS',
    title: 'MAC Cosmetics: Up to 15% Off for Students',
    description: 'Verified students get up to 15% off across MAC Cosmetics — exclusive UNiDAYS student pricing on makeup, skincare, and more.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 32% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0096D6]',
    color: '#0096D6',
    type: 'HP',
    title: 'HP: Up to 32% Off on Laptops for Students',
    description: 'Up to 32% off on HP laptops for verified students — shop direct through UNiDAYS for the student price.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-8',
    badge: '₹6,000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0052CC]',
    color: '#0052CC',
    type: 'ASUS',
    title: 'ASUS: Extra ₹6,000 Off on Vivobooks & Zenbooks',
    description: 'Verified students get an extra ₹6,000 off on ASUS Vivobook and Zenbook laptops — exclusive UNiDAYS student deal.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-9',
    badge: '10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#CC0000]',
    color: '#CC0000',
    type: 'H&M',
    title: 'H&M: 10% Student Discount on Fashion',
    description: 'Verified students get 10% off at H&M through UNiDAYS — applicable on clothing, accessories, and more.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-10',
    badge: 'EXTRA 12% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'PUMA',
    title: 'Puma: Extra 12% Off for Students',
    description: 'Verified students get an extra 12% off at Puma through UNiDAYS — on top of existing prices across footwear, apparel, and accessories.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1E1E2F]',
    color: '#1E1E2F',
    type: 'AJIO',
    title: 'Ajio: Flat 20% Off for Students (UNiDAYS Exclusive)',
    description: 'Flat 20% off at Ajio for verified UNiDAYS students — exclusive deal on fashion across the Ajio catalogue.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-12',
    badge: '53% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#D4AF37]',
    color: '#D4AF37',
    type: 'PALMONAS',
    title: 'Palmonas: 53% Student Discount (UNiDAYS Exclusive)',
    description: 'Verified students get 53% off at Palmonas through UNiDAYS — one of the steeper student discounts currently on the platform.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#D8232A]',
    color: '#D8232A',
    type: 'ABHIBUS',
    title: 'AbhiBus: Up to 20% Off on Bus Bookings (UNiDAYS Exclusive)',
    description: 'Download the AbhiBus app and get up to 20% off on bus bookings as a verified UNiDAYS student.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-14',
    badge: '25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#708090]',
    color: '#708090',
    type: 'GIVA',
    title: 'GIVA: 25% Off on All Silver Jewellery for Students',
    description: "Verified UNiDAYS students get 25% off across GIVA's full silver jewellery range.",
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-15',
    badge: '20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#008080]',
    color: '#008080',
    type: 'FAR FROM TRAVEL',
    title: 'Far From Travel: 20% Off on Booking Fee (UNiDAYS Exclusive)',
    description: 'Verified students get 20% off on the booking fee at Far From Travel through UNiDAYS — useful for student travel planning.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Sep 2026'
  }
];
