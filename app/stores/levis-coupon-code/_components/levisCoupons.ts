// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL' | 'SPECIAL' | 'NEW USER' | 'BOGO' | 'WALLET' | 'BANK OFFER';
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

export const LEVIS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FREE GLASSES',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'MEMBERSHIP',
    title: 'Lenskart Coupon Code – Free Hustlr Glasses with Membership',
    description: 'Become a Hustlr Club member from ₹249 and get one pair of Hustlr glasses free.',
    points: [
      'You can join the Hustlr Club for as low as ₹249.',
      'Get one pair of Hustlr glasses free with your membership.',
      'Members get special benefits on eligible plans.',
      'Sign up on Lenskart to get this offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'EXTRA 60% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'BUNDLE',
    title: 'Lenskart Coupon Code – Extra 60% OFF on Your 3rd Product',
    description: 'Get an extra 60% off when you add three eligible products to your cart.',
    points: [
      'Get an extra 60% OFF on the third product.',
      'Add three eligible items to your cart.',
      'Use the available coupon code at checkout to get the offer.',
      'A good way to save more when you buy many products together.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FREE FRAMES',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'CHALLENGE',
    title: 'Lenskart Promo Code – Free Frames Worth Up to ₹2,000',
    description: 'Finish the walking challenge and win free eyeglass frames.',
    points: [
      'Walk 20,000 steps to become eligible for the reward.',
      'Get eyeglass frames worth up to ₹2,000.',
      'This offer is only for eligible users.',
      'Complete the challenge to get your reward.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹500 OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'FIRST ORDER',
    title: 'Lenskart Promo Code – Flat ₹500 OFF on First Order',
    description: 'New customers can get ₹500 off on their first eyewear purchase.',
    points: [
      'Get a flat ₹500 discount on your first order.',
      'This offer is for customers shopping on Lenskart for the first time.',
      'You do not need any coupon code for this offer.',
      'The discount is added automatically on eligible orders.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'EYEGLASSES',
    title: 'Lenskart Discount Code – Up to 70% OFF Eyeglasses',
    description: 'Buy stylish eyeglasses and frames at up to 70% off.',
    points: [
      'Save up to 70% on selected eyeglasses and lenses.',
      'See trendy frames from top eyewear brands.',
      'Pick from premium as well as daily-wear styles.',
      'Add to your eyewear collection and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 15% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'MEMBERSHIP',
    title: 'Lenskart Discount Code – Gold Membership Flat 15% OFF',
    description: 'Join Lenskart Gold and get special savings as a member.',
    points: [
      'Get a flat 15% off on eligible orders.',
      'You do not need to buy a minimum amount to use this benefit.',
      'Get a free lens solution with your membership.',
      'Gold Membership gives you more shopping benefits.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FREE LENS',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'IN-STORE',
    title: 'Lenskart Voucher Code – Free Lens Replacement',
    description: 'Get a free lens replacement when you visit a store for the first time.',
    points: [
      'You must be visiting a Lenskart store for the first time.',
      'You will get a coupon code on WhatsApp after you book.',
      'The offer is valid on premium Anti-Glare glasses.',
      'Get extra value on your first purchase in the store.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FRAMES AT ₹1',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'FRAMES',
    title: 'Lenskart Voucher Code – Premium Frames for ₹1',
    description: 'Buy lenses and get premium eyeglass frames for only ₹1.',
    points: [
      'Buy eligible lenses to get this offer.',
      'Pay just ₹1 for selected premium frames.',
      'Pick from styles for men, women and kids.',
      'Get a fresh new look with premium eyewear at a very low price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: '2 FOR ₹5,000',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'MELLER',
    title: 'Lenskart Referral Code – Buy Any 2 Meller Glasses for ₹5,000',
    description: 'Buy two Meller eyewear styles together at one fixed price.',
    points: [
      'Buy any two Meller glasses for ₹5,000.',
      'See stylish designer frames in the collection.',
      'Pay one fixed price on eligible products.',
      'A good choice if you want to buy more than one pair.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'BUY 1 GET 1',
    badgeType: 'BOGO',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'SUNGLASSES',
    title: 'Lenskart Referral Code – Buy 1 Get 1 FREE Sunglasses',
    description: 'Buy two sunglasses and get the cheaper pair free.',
    points: [
      'Get a Buy 1 Get 1 FREE offer on eligible sunglasses.',
      'Pick from more than 1,500 stylish designs.',
      'Selected Vincent Chase and John Jacobs collections are included.',
      'Add two pairs to your cart to get the benefit.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'SUNGLASSES',
    title: 'Lenskart Cashback Offers – Vincent Chase Sunglasses Up to 40% OFF',
    description: 'Save up to 40% on Vincent Chase rectangle sunglasses.',
    points: [
      'Buy eligible Vincent Chase styles starting from ₹600.',
      'Save up to 40% on selected sunglasses.',
      'Gold Members can also get Buy 1 Get 1 FREE on eligible styles.',
      'Upgrade your eyewear at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'EXTRA ₹1,000 OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'EYEGLASSES',
    title: 'Lenskart Cashback Offers – Extra ₹1,000 OFF on Glasses',
    description: 'Get an extra ₹1,000 off when you buy one pair of glasses.',
    points: [
      'Get an extra ₹1,000 OFF on one pair of glasses.',
      'Use the available coupon code at checkout.',
      'This offer cannot be used with Buy 1 Get 1 deals.',
      'Check if you are eligible before you place your order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 21% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'KIDS EYEWEAR',
    title: 'Lenskart Wallet Offers – Flat 21% OFF Kids Eyeglasses',
    description: 'Save on kids’ eyewear, with prices starting from ₹450.',
    points: [
      'Get a flat 21% OFF on eligible kids’ eyeglasses.',
      'Prices start from only ₹450.',
      'Pick from stylish and comfortable designs for children.',
      'Get good quality eyewear for your family at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 60% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'JOHN JACOBS',
    title: 'Lenskart Wallet Offers – Flat 60% OFF John Jacobs',
    description: 'Buy premium John Jacobs eyewear and save even more.',
    points: [
      'Get a flat 60% off on selected John Jacobs products.',
      'Eligible styles also come with Buy 1 Get 1 FREE.',
      'Prices start from ₹1,600.',
      'Buy premium eyewear at discounted prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: '5% SUPERCASH',
    badgeType: 'WALLET',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'MOBIKWIK',
    title: 'Lenskart Bank Offers – 5% SuperCash with MobiKwik',
    description: 'Pay with MobiKwik and get SuperCash on eligible orders.',
    points: [
      'Get 5% SuperCash on eligible purchases.',
      'Use up to ₹1,000 SuperCash on each order.',
      'Make your payment through MobiKwik.',
      'Check if you are eligible for the offer before checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'BUY 1 GET 1',
    badgeType: 'BOGO',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'GOLD MAX',
    title: 'Lenskart Bank Offers – Buy 1 Get 1 FREE with Gold Max',
    description: 'Gold Max members can get Buy 1 Get 1 FREE on eyewear.',
    points: [
      'Get Buy 1 Get 1 FREE on eligible eyeglasses and sunglasses.',
      'This offer is for Gold Max members.',
      'Pick from a wide range of eligible products.',
      'Get extra value from your membership.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'FLAT 10% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'CONTACT LENSES',
    title: 'Lenskart Coupon Code – 10% OFF Aqualens Contact Lenses',
    description: 'Save 10% on Aqualens contact lenses, starting from ₹60.',
    points: [
      'Get a flat 10% OFF on Aqualens products.',
      'Prices start from only ₹60.',
      'Pick contact lenses for daily use.',
      'Shop online to get the savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: '10% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'ACCESSORIES',
    title: 'Lenskart Coupon Code – 10% OFF Contact Lens Accessories',
    description: 'Gold Members can save on lens solutions and accessories.',
    points: [
      'Get 10% OFF on eligible accessories and solutions.',
      'This benefit is available with Gold Membership.',
      'No minimum purchase amount is mentioned.',
      'Buy your eye care needs in bulk and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FROM ₹500',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'EYEWEAR',
    title: 'Lenskart Promo Code – Eyewear Starting from ₹500',
    description: 'Find stylish eyewear with prices starting from ₹500.',
    points: [
      'Buy frames, spectacles and sunglasses starting from ₹500.',
      'See premium as well as daily-wear collections.',
      'Find stylish choices for every budget.',
      'Refresh your eyewear with affordable designs.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: '10% + ₹500 CB',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'PAYMENT OFFER',
    title: 'Lenskart Promo Code – 10% OFF + ₹500 Paytm Cashback',
    description: 'Pay with American Express and get extra savings.',
    points: [
      'Get 10% OFF when you pay with an American Express card.',
      'Get ₹500 Paytm cashback on eligible transactions.',
      'Make your payment through the Paytm wallet.',
      'Read the offer terms before you pay.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'FREE SERVICE',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'EYEWEAR CARE',
    title: 'Lenskart Discount Code – Free Cleaning & Repair Services',
    description: 'Members can get free eyewear care services.',
    points: [
      'Get free cleaning service every quarter.',
      'Eligible members also get repair benefits.',
      'Available on selected Lenskart products.',
      'Keep your eyewear in good condition all year round.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-22',
    badge: 'UP TO 78% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000042]',
    color: '#000042',
    type: 'CONTACT LENSES',
    title: 'Lenskart Discount Code – Contact Lenses Up to 78% OFF',
    description: 'Save up to 78% on contact lenses and get free shipping.',
    points: [
      'Get up to 78% OFF on eligible contact lenses.',
      'Prices start from only ₹99.',
      'Get free shipping on contact lens orders.',
      'Buy popular brands at discounted prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
