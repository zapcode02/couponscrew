// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'BANK OFFER' | 'CASHBACK' | 'FLASH SALE' | 'SPECIAL' | 'INSTANT';
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

export const ZOMATO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '₹200 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'COUPON CODE',
    title: 'Zomato Coupon Code – Flat ₹200 Off Food Orders',
    description: 'Save ₹200 instantly on eligible food orders from selected restaurant partners.',
    points: [
      'Get a flat ₹200 discount on selected food orders.',
      'Order from participating restaurant partners on Zomato.',
      'Get instant savings at checkout on eligible orders.',
      'The offer is available only for a limited time.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: '₹150 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'COUPON CODE',
    title: 'Zomato Coupon Code – Flat ₹150 Off Food Orders',
    description: 'Order your favourite meals and save ₹150 instantly.',
    points: [
      'Get a flat ₹150 discount on eligible food orders.',
      'Use the available code at checkout to get the offer.',
      'Pick from participating restaurants on Zomato.',
      'The offer is valid only on eligible orders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: '₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PROMO CODE',
    title: 'Zomato Promo Code – Flat ₹125 Off Food Orders',
    description: 'Get instant savings on tasty meals from selected restaurants.',
    points: [
      'Save ₹125 on eligible food delivery orders.',
      'The offer works at handpicked restaurant partners.',
      'Order your favourite dishes and spend less.',
      'Valid on eligible Zomato orders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: '₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PROMO CODE',
    title: 'Zomato Promo Code – Flat ₹100 Off with No Minimum Order',
    description: 'Get instant savings without needing to reach any minimum cart value.',
    points: [
      'Save ₹100 on eligible restaurant orders.',
      'No minimum order amount is needed.',
      'Get discounts on your favourite meals.',
      'Available on eligible food orders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'GOLD AT ₹1',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'DISCOUNT CODE',
    title: 'Zomato Discount Code – Zomato Gold for ₹1',
    description: 'Get three months of Zomato Gold at an amazing price.',
    points: [
      'Buy a 3-month Zomato Gold membership for just ₹1.',
      'The flash sale is available only for a limited period.',
      'The offer is open to eligible users.',
      'Enjoy Gold membership benefits after activation.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'DISCOUNT CODE',
    title: 'Zomato Discount Code – 10% Off with IDFC Bank Cards',
    description: 'Pay with an IDFC Bank card and save instantly.',
    points: [
      'Get a flat 10% off on orders above ₹299.',
      'Pay with an eligible IDFC Bank debit card.',
      'The discount is applied at checkout.',
      'The bank offer is available on eligible transactions.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: '10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'VOUCHER CODE',
    title: 'Zomato Voucher Code – 10% Off with DigiSmart Credit Card',
    description: 'Save on food orders with your Standard Chartered DigiSmart Card.',
    points: [
      'Get 10% off up to ₹150 on eligible orders.',
      'Pay with a Standard Chartered DigiSmart Credit Card.',
      'The discount applies on eligible transactions.',
      'The offer is subject to the bank’s terms.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'VOUCHER CODE',
    title: 'Zomato Voucher Code – Flat 10% Off Orders Above ₹199',
    description: 'Save more on your next food delivery order.',
    points: [
      'Get a flat 10% discount on orders above ₹199.',
      'The offer is available for all eligible users.',
      'Order from participating restaurants.',
      'The discount is added automatically on eligible purchases.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: '50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'REFERRAL CODE',
    title: 'Zomato Referral Code – Up to 50% Off Favourite Meals',
    description: 'Get bigger savings on meals from your favourite restaurants.',
    points: [
      'Save up to 50%, with a maximum discount of ₹100.',
      'The offer works at selected restaurant partners.',
      'Get discounts on eligible food orders.',
      'Valid only on eligible purchases.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: '₹100 CASHBACK',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'REFERRAL CODE',
    title: 'Zomato Referral Code – Up to ₹100 Cashback via Paytm UPI',
    description: 'Pay with Paytm UPI and get instant cashback.',
    points: [
      'Get up to ₹100 cashback on eligible orders.',
      'Complete your payment with Paytm UPI.',
      'Cashback is added to your Paytm wallet.',
      'The offer applies on eligible transactions.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: '30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'CASHBACK OFFERS',
    title: 'Zomato Cashback Offers – 30% Off Breakfast Orders',
    description: 'Start your day with discounted breakfast delivery.',
    points: [
      'Save 30% up to ₹75 on breakfast orders.',
      'The offer is available at selected restaurants.',
      'Enjoy your favourite morning meals for less.',
      'Valid during the offer period.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: '5% CASHBACK',
    badgeType: 'INSTANT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'CASHBACK OFFERS',
    title: 'Zomato Cashback Offers – 5% Cashback with BHIM App',
    description: 'Get cashback when you pay through the BHIM app.',
    points: [
      'Get 5% instant cashback on eligible orders.',
      'Pay with the BHIM app at checkout.',
      'Cashback applies on eligible transactions.',
      'The offer is available for eligible users.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FREE DELIVERY',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'WALLET OFFERS',
    title: 'Zomato Wallet Offers – Free Delivery on Orders Above ₹199',
    description: 'Skip the delivery charges on eligible Zomato orders.',
    points: [
      'Get free delivery on orders above ₹199.',
      'Save more on your favourite food deliveries.',
      'The offer works at eligible restaurants.',
      'Valid only on eligible purchases.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'WALLET OFFERS',
    title: 'Zomato Wallet Offers – Flat 10% Off Orders Above ₹798',
    description: 'Save more on bigger food delivery orders.',
    points: [
      'Get a flat 10% off on orders above ₹798.',
      'You do not need any coupon code to get the discount.',
      'The offer is available for all eligible users.',
      'Applies to eligible restaurant orders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: '₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'BANK OFFERS',
    title: 'Zomato Bank Offers – Flat ₹100 Off with American Express IndusInd Card',
    description: 'Pay with an eligible card and get instant savings.',
    points: [
      'Get ₹100 off on orders above ₹200.',
      'Pay with an American Express Card issued by IndusInd.',
      'The discount applies on eligible transactions.',
      'The offer is subject to the bank’s terms.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: '3% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'BANK OFFERS',
    title: 'Zomato Bank Offers – 3% Off with AU Small Finance Bank Credit Card',
    description: 'Use your AU Small Finance Bank Credit Card to save on food orders.',
    points: [
      'Get a flat 3% discount on eligible purchases.',
      'Pay with an AU Small Finance Bank Credit Card.',
      'The offer applies at checkout on eligible orders.',
      'The bank offer is available for eligible cardholders.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];