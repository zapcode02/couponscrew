// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'NEW USER' | 'LOYALTY' | 'DEAL' | 'BUNDLE' | 'PREPAID';
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

export const NYKAA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'SITEWIDE',
    title: 'Nykaa Coupon Code – Up to 60% Off Sitewide Sale',
    description: 'Save up to 60% sitewide and get an extra 20% off, with free shipping on eligible orders.',
    points: [
      'Save up to 60% on beauty, skincare, haircare, wellness and more.',
      'Use the coupon code to get an extra 20% off on eligible products.',
      'Get free shipping on orders of ₹299 or more.',
      'Shop on the Nykaa app to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: '50% + 15% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'FLASH DEALS',
    title: 'Nykaa Coupon Code – Up to 50% Off Flash Deals',
    description: 'First-time customers can save up to 50% and get an extra 15% off on prepaid orders.',
    points: [
      'Get discounts of up to 50% on selected beauty products.',
      'Use the coupon code to get an extra 15% off, up to ₹300.',
      'This offer is valid only on eligible prepaid orders.',
      'A good chance for new Nykaa customers to save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'BEST OF BEAUTY',
    title: 'Nykaa Promo Code – Up to 60% Off Best of Beauty Sale',
    description: 'Shop in Nykaa’s Best of Beauty Sale at up to 60% off, with extra bank savings and a free gift.',
    points: [
      'Save up to 60% on selected beauty products in the sale.',
      'Get an extra 10% off with eligible bank cards.',
      'Get a free gift on orders above ₹1,600.',
      'See top beauty brands while this limited-time offer is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'EXTRA 5% OFF',
    badgeType: 'LOYALTY',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'LOYALTY OFFER',
    title: 'Nykaa Promo Code – Extra 5% Off Loyalty Offer',
    description: 'Returning customers can get extra savings on their third Nykaa purchase.',
    points: [
      'Save up to 50% on selected beauty products.',
      'Use the coupon code to get an extra 5% off on your third order.',
      'You must buy for at least ₹1,200 to get this offer.',
      'Get extra savings as a loyal Nykaa customer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA 5% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'SECOND ORDER',
    title: 'Nykaa Discount Code – Extra 5% Off Second Order',
    description: 'Save more on your second Nykaa purchase with an extra discount and free shipping.',
    points: [
      'Get up to 50% off on selected beauty products.',
      'Use the coupon code to get an extra 5% off on your second order.',
      'The offer is valid on purchases of ₹800 or more.',
      'Get free shipping on orders above ₹299.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹400 OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'APP ORDER',
    title: 'Nykaa Discount Code – Flat ₹400 Off First App Order',
    description: 'New app users can get a flat ₹400 discount on their first eligible purchase.',
    points: [
      'Save a flat ₹400 on your first Nykaa app order above ₹1,500.',
      'Use the coupon code at checkout on selected brands.',
      'This offer is only for first-time app customers.',
      'Buy your favourite beauty products while the offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'CLEARANCE SALE',
    title: 'Nykaa Voucher Code – Up to 60% Off Beauty Clearance Sale',
    description: 'Save up to 60% in the Nykaa Beauty Clearance Sale, with extra bank discounts.',
    points: [
      'Get up to 60% off on makeup, skincare, haircare and more.',
      'Get an extra 10% off with eligible bank credit cards.',
      'Find clearance deals on top beauty brands.',
      'Pick your favourites before the stock finishes.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '55% + 20% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'SKINCARE',
    title: 'Nykaa Voucher Code – Up to 55% Off Skincare Sale',
    description: 'New app users can save up to 55% on skincare, with an extra 20% off.',
    points: [
      'Get discounts of up to 55% on selected skincare products.',
      'Use the coupon code to get an extra 20% off on orders above ₹500.',
      'This offer is only for new Nykaa app users.',
      'Stock up on skincare basics while the sale is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT ₹2,000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'DYSON',
    title: 'Nykaa Referral Code – Flat ₹2,000 Off Dyson Orders',
    description: 'Save a flat ₹2,000 on Dyson products and use it together with other eligible deals.',
    points: [
      'Get a flat ₹2,000 off on any Dyson product available on Nykaa.',
      'Use the coupon code at checkout to get the discount.',
      'This offer can be used together with other active offers on the same order.',
      'Buy premium Dyson beauty tools and save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: '60% + 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'MAKEUP',
    title: 'Nykaa Referral Code – Up to 60% Off Makeup Sale',
    description: 'Shop Nykaa’s makeup collection at up to 60% off, with an extra 20% discount.',
    points: [
      'Save up to 60% on lipsticks, foundations, concealers, eyeshadows and more.',
      'Use the coupon code to get an extra 20% off on eligible products.',
      'See top makeup brands at discounted prices.',
      'Give your beauty collection a fresh look while this limited-time sale is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'EXTRA 15% OFF',
    badgeType: 'BUNDLE',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'HAIR CARE',
    title: 'Nykaa Cashback Offers – Extra 15% Off Hair Care',
    description: 'Buy three hair care products and get extra savings on your order.',
    points: [
      'Add any three eligible hair care products to your cart.',
      'Use the coupon code to get an extra 15% discount.',
      'This offer can be used together with other active offers.',
      'Save more while buying your favourite hair care products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: '60% + 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'HAIR CARE',
    title: 'Nykaa Cashback Offers – Up to 60% Off Hair Care Sale',
    description: 'Get up to 60% off on hair care, with extra coupon and bank discounts.',
    points: [
      'Save up to 60% on Nykaa’s full hair care collection.',
      'Use the coupon code to get an extra 20% off on orders above ₹500.',
      'Get an extra 10% off with eligible bank credit cards.',
      'Buy shampoos, conditioners, oils, serums and styling products for less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 10% OFF',
    badgeType: 'PREPAID',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'BIRKENSTOCK',
    title: 'Nykaa Wallet Offers – Flat 10% Off Birkenstock Products',
    description: 'Save a flat 10% on Birkenstock products with eligible prepaid orders.',
    points: [
      'Get a flat 10% discount on selected Birkenstock products.',
      'Use the coupon code at checkout to get the offer.',
      'This offer is valid only on prepaid orders.',
      'Buy your favourite Birkenstock styles while the offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: '50% + 10% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'APP ORDER',
    title: 'Nykaa Wallet Offers – Up to 50% Off First App Order',
    description: 'New app users can save up to 50%, plus an extra 10%, on their first purchase.',
    points: [
      'Get discounts of up to 50% on selected brands.',
      'Use the coupon code to get an extra flat 10% off, up to ₹500.',
      'This offer is only for first-time Nykaa app users.',
      'Complete your first purchase and save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'SHIPPING',
    title: 'Nykaa Bank Offers – Free Shipping Above ₹299',
    description: 'Get free delivery on eligible Nykaa orders without any coupon code.',
    points: [
      'Get free shipping on all orders of ₹299 or more.',
      'The offer is available on major beauty and wellness brands.',
      'You do not need any coupon code to get free delivery.',
      'Shop sitewide and save on shipping costs.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'EXTRA 10% OFF',
    badgeType: 'PREPAID',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'CAMPUS',
    title: 'Nykaa Bank Offers – Extra 10% Off Campus Products',
    description: 'Save an extra 10% on Campus products with eligible prepaid orders.',
    points: [
      'Get an extra 10% discount on selected Campus products.',
      'Use the coupon code at checkout to get the offer.',
      'This offer is valid only on prepaid orders.',
      'Buy your favourite Campus styles while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: '20% + 5% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'THE ORDINARY',
    title: 'Nykaa Coupon Code – Up to 20% Off The Ordinary',
    description: 'Save up to 20% on The Ordinary skincare products, with an extra 5% discount.',
    points: [
      'Get up to 20% off on selected The Ordinary skincare products.',
      'Use the coupon code at checkout to get an extra 5% discount.',
      'Buy popular serums, treatments and skincare basics for less.',
      'Improve your skincare routine while this offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'FOXTALE',
    title: 'Nykaa Coupon Code – Up to 40% Off Foxtale Collection',
    description: 'Shop the Foxtale range at discounts of up to 40% in selected categories.',
    points: [
      'Save up to 40% on Foxtale skincare, bath & body, makeup, fragrance and more.',
      'Selected products start from only ₹174.',
      'Use the coupon code at checkout to get eligible savings.',
      'See the full Foxtale collection at discounted prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'BATH & BODY',
    title: 'Nykaa Promo Code – Up to 60% Off Bath & Body Sale',
    description: 'Save up to 60% on bath and body products, with extra bank card benefits.',
    points: [
      'Get up to 60% off on bath, body care, grooming and wellness products.',
      'Get an extra 10% discount with eligible HSBC credit cards.',
      'See premium bath and body brands at lower prices.',
      'Buy your daily needs before the offer ends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'HEALTH & WELLNESS',
    title: 'Nykaa Promo Code – Up to 50% Off Health & Wellness Sale',
    description: 'Find great savings on health and wellness products in many categories.',
    points: [
      'Save up to 50% on health supplements, sports nutrition and wellness products.',
      'Buy skincare, hair care, weight management and more in one sale.',
      'Use the coupon code at checkout to get eligible savings.',
      'Stock up on daily wellness needs for less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'FRAGRANCE',
    title: 'Nykaa Discount Code – Up to 60% Off Fragrance Sale',
    description: 'Get up to 60% off on women’s and men’s fragrances on Nykaa.',
    points: [
      'Save up to 60% on perfumes, fragrance kits and aromatherapy products.',
      'Buy selected fragrances starting from only ₹299.',
      'Find premium scents for every occasion at discounted prices.',
      'Give your fragrance collection a fresh look while this limited-time sale is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-22',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2D0A1F]',
    color: '#2D0A1F',
    type: 'BODY CARE',
    title: 'Nykaa Discount Code – Up to 70% Off Premium Body Care',
    description: 'Save up to 70% on Nykaa’s premium body care blockbuster deals.',
    points: [
      'Get discounts of up to 70% on selected premium body care products.',
      'The discount is already applied, so you do not need any coupon code.',
      'Buy blockbuster body care picks at great prices.',
      'Pick your favourite products before the best deals sell out.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];

