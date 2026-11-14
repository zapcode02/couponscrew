// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL' | 'NEW USER';
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

export const MUSCLEBLAZE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'BIRTHDAY SALE',
    title: 'MuscleBlaze Coupon Code – Up to 50% Off Birthday Sale',
    description: 'Save up to 50% in the MuscleBlaze Birthday Sale and get an extra 10% off on selected products.',
    points: [
      'Save up to 50% on many MuscleBlaze products in the Birthday Sale.',
      'Use the coupon code at checkout to get an extra 10% off on eligible items.',
      'Pick from popular supplements, proteins and fitness basics in the sale.',
      'Shop before the offer ends to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'PROTEIN',
    title: 'MuscleBlaze Coupon Code – Up to 40% Off Protein Range',
    description: 'Get up to 40% off on the MuscleBlaze protein range, with an extra 10% off on selected proteins.',
    points: [
      'Save up to 40% on MuscleBlaze Whey, Plant Protein and other protein supplements.',
      'Use the coupon code at checkout to get an extra 10% off.',
      'Eligible products include Raw Whey Isolate, Raw Whey Protein and more.',
      'Stock up on your daily protein needs while this offer is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'SITEWIDE',
    title: 'MuscleBlaze Promo Code – Up to 50% Off Sitewide',
    description: 'Shop in all MuscleBlaze categories and save up to 50%, plus an extra 5% with a promo code.',
    points: [
      'Get up to 50% off on proteins, gainers, pre-workout supplements and more.',
      'Use the coupon code to get an extra 5% off at checkout.',
      'See deals across the full MuscleBlaze range.',
      'Save more when you buy many fitness products together.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹200 OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'FIRST ORDER',
    title: 'MuscleBlaze Promo Code – Flat ₹200 Off First Order',
    description: 'First-time customers can save up to 50% and get an extra ₹200 off on eligible orders.',
    points: [
      'Get up to 50% off on your first MuscleBlaze purchase.',
      'Use the coupon code to get an extra flat ₹200 off.',
      'The extra ₹200 off is valid on orders of ₹1,999 or more.',
      'A good chance for new customers to save on their first order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'GYM WEAR',
    title: 'MuscleBlaze Discount Code – Up to 50% Off Gym Wear',
    description: 'Give your workout wardrobe a fresh look with up to 50% off, plus an extra 10% off.',
    points: [
      'Save up to 50% on MuscleBlaze gym wear for men and women.',
      'Use the coupon code to get an extra 10% off on orders above ₹999.',
      'Buy workout t-shirts, joggers, shorts and other fitness clothing.',
      'Complete your fitness look and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹429',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'TOP SELLERS',
    title: 'MuscleBlaze Discount Code – Top Sellers from ₹429',
    description: 'Get MuscleBlaze best-selling supplements starting from only ₹429, with extra savings.',
    points: [
      'Buy top-selling MuscleBlaze products with discounts of up to 50%.',
      'Prices start from only ₹429 on selected supplements.',
      'Use the coupon code to get an extra 5% off.',
      'Save on customer favourites while stock lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'BIOZYME',
    title: 'MuscleBlaze Voucher Code – Up to 50% Off Biozyme Range',
    description: 'Save up to 50% on the MuscleBlaze Biozyme range, with extra savings from a coupon.',
    points: [
      'Get up to 50% off on selected Biozyme products.',
      'Use the coupon code to get an extra 5% off.',
      'The offer also covers selected Gainers, Creatines and Fit Foods.',
      'Buy premium nutrition products at lower prices before the deal ends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'CREATINE',
    title: 'MuscleBlaze Voucher Code – Up to 45% Off Creatine Monohydrate',
    description: 'Save up to 45% on MuscleBlaze Creatine Monohydrate and get an extra 5% off with a coupon.',
    points: [
      'Get up to 45% off on selected Creatine Monohydrate products.',
      'Use the coupon code at checkout to get an extra 5% off.',
      'This offer is good for building strength and improving workout performance.',
      'Shop now to get the regular discount and the extra savings together.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: '50% + ₹150 OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'SUPPLEMENTS',
    title: 'MuscleBlaze Referral Code – Up to 50% Off + Extra ₹150 Off',
    description: 'Save up to 50% and get an extra ₹150 off on eligible MuscleBlaze orders.',
    points: [
      'Get discounts of up to 50% on selected MuscleBlaze products.',
      'Use the coupon code to get an extra ₹150 off on orders above ₹1,999.',
      'The extra ₹150 discount can be used only once per user.',
      'Stock up on your favourite fitness supplements while this offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'BCAA & CARNITINE',
    title: 'MuscleBlaze Referral Code – Up to 40% Off Liquid Carnitine & BCAA',
    description: 'Get up to 40% off on Liquid Carnitine and BCAA, with an extra 5% off.',
    points: [
      'Save up to 40% on MuscleBlaze Liquid Carnitine and BCAA supplements.',
      'Use the coupon code to get an extra 5% off at checkout.',
      'Pick from selected products made to support your workout performance.',
      'Save more today when you buy eligible amino acid supplements.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: '50% + 10% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'FIRST ORDER',
    title: 'MuscleBlaze Cashback Offers – Up to 50% Off First Order',
    description: 'New users can get up to 50% off, plus an extra 10% off, on their first purchase.',
    points: [
      'Save up to 50% on big MuscleBlaze deals.',
      'Use the coupon code to get an extra 10% off on first orders above ₹999.',
      'This offer is only for first-time MuscleBlaze customers.',
      'Order your favourite supplements while the offer is on.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'EXTRA 5% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'BIOZYME',
    title: 'MuscleBlaze Cashback Offers – Extra 5% Off Biozyme Range',
    description: 'New users can save more on Biozyme and also get a free shaker.',
    points: [
      'Get an extra 5% off on eligible Biozyme products with a coupon.',
      'Get a free shaker when you buy Biozyme Whey packs of 1kg or more.',
      'This offer is only for new MuscleBlaze customers.',
      'The offer is not valid on Flash Sale or heavily discounted products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'EXTRA 15% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'CREATINE CREAMP',
    title: 'MuscleBlaze Wallet Offers – Extra 15% Off Creatine CreAMP',
    description: 'New customers can get an extra 15% off on the Creatine CreAMP range.',
    points: [
      'Save an extra 15% on eligible Creatine CreAMP products.',
      'Use the coupon code at checkout to get the discount.',
      'The offer is valid on Creatine CreAMP packs of 100g and above.',
      'Available only for first-time MuscleBlaze customers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: '50% + 5% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'SITEWIDE',
    title: 'MuscleBlaze Wallet Offers – Up to 50% Off Sitewide',
    description: 'Shop the full MuscleBlaze collection and save up to 50%, plus an extra 5%.',
    points: [
      'Get discounts of up to 50% in all MuscleBlaze categories.',
      'Use the coupon code to get an extra 5% off on eligible products.',
      'Buy proteins, gainers, pre-workout supplements and more in one sale.',
      'Save on all your fitness needs before the offer ends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'EXTRA 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'MASS GAINERS',
    title: 'MuscleBlaze Bank Offers – Extra 5% Off Mass Gainers',
    description: 'Save an extra 5% on eligible MuscleBlaze Mass Gainer supplements with a coupon.',
    points: [
      'Get an extra 5% off on selected MuscleBlaze Mass Gainer products.',
      'Use the coupon code at checkout to get the extra discount.',
      'The offer is valid only on eligible Mass Gainer supplements.',
      'Save more while stocking up on your muscle-building needs.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'EXTRA 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'SUPPLEMENTS',
    title: 'MuscleBlaze Bank Offers – Extra 5% Off Selected Supplements',
    description: 'Get extra savings on selected MuscleBlaze supplements for a limited time.',
    points: [
      'Save an extra 5% on selected MuscleBlaze products.',
      'Use the coupon code at checkout to get the extra discount.',
      'Pick from eligible supplements in the MuscleBlaze collection.',
      'Buy your fitness needs while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'WORKOUT ESSENTIALS',
    title: 'MuscleBlaze Coupon Code – Up to 40% Off Workout Essentials',
    description: 'Get up to 40% off on workout essentials, with an extra 10% off on selected products.',
    points: [
      'Save up to 40% on BCAA, Creatine, Pre-Workout, Post-Workout and more.',
      'Use the coupon code to get an extra 10% off at checkout.',
      'Buy a wide range of workout supplements at lower prices.',
      'Save more on your full training and recovery routine.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: '50% + ₹150 OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'BEST DEALS',
    title: 'MuscleBlaze Coupon Code – Up to 50% Off Best Deals',
    description: 'Save up to 50% and get an extra ₹150 off on eligible MuscleBlaze orders.',
    points: [
      'Get up to 50% off on Biozyme, Gainers, Creatines, Fit Foods and more.',
      'Use the coupon code to get an extra ₹150 off on orders above ₹1,999.',
      'See some of the best-selling MuscleBlaze products in one offer.',
      'Complete your purchase before the deal ends to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 10% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'FIRST ORDER',
    title: 'MuscleBlaze Promo Code – Flat 10% Off First Order',
    description: 'New customers can get a flat 10% off on their first eligible MuscleBlaze purchase.',
    points: [
      'Get a flat 10% off on your first order above ₹999.',
      'Use the coupon code at checkout to get the offer.',
      'This offer is only for first-time customers.',
      'Save on your first MuscleBlaze purchase with this welcome offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'EXTRA 10% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'PRE-WORKOUT',
    title: 'MuscleBlaze Promo Code – Extra 10% Off Pre-Workout Range',
    description: 'First-time customers can save an extra 10% on the MuscleBlaze Pre-Workout range.',
    points: [
      'Get an extra 10% off on eligible Pre-Workout products.',
      'Use the coupon code at checkout to get the discount.',
      'This offer is valid only for new MuscleBlaze users.',
      'Buy your favourite Pre-Workout supplements while the offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'EXTRA 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F26522]',
    color: '#F26522',
    type: 'CREATINE',
    title: 'MuscleBlaze Discount Code – Extra 10% Off Creatine Monohydrate',
    description: 'New users can get an extra 10% off on the MuscleBlaze Creatine Monohydrate range.',
    points: [
      'Save an extra 10% on eligible Creatine Monohydrate products.',
      'Use the coupon code at checkout to get the extra discount.',
      'This offer is available only for first-time MuscleBlaze customers.',
      'Stock up on your Creatine needs and save more for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  }
];