// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL' | 'CASHBACK' | 'REWARDS';
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

export const RAPIDO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FREE FIRST RIDE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'CAB RIDES',
    title: 'Rapido Wallet Offers – Free First Cab Ride for New Users',
    description: 'Get your first Rapido cab ride free with this welcome offer.',
    points: [
      'Use the eligible coupon code at checkout to get your free first ride.',
      'Available only for new Rapido cab users.',
      'The offer is valid on your first cab booking.',
      'Complete your booking during the offer period to get the benefit.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'TRAVEL',
    title: 'Rapido Wallet Offers – Up to 55% Off Travel Bookings',
    description: 'Save more on flights, hotels and bus tickets with Rapido.',
    points: [
      'Get up to 55% off on hotel bookings.',
      'Save up to ₹4,000 on eligible flight bookings.',
      'Get up to 25% off on bus tickets, with zero service fee on bookings.',
      'Book many types of travel on one platform.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'METRO RIDES',
    title: 'Rapido Bank Offers – Flat 20% Off Metro Station Rides',
    description: 'Save on every ride to and from the metro station.',
    points: [
      'Use the eligible coupon code at checkout to get 20% off.',
      'Valid on rides to and from metro stations.',
      'The discount is available on eligible Rapido bookings.',
      'A good choice for low-cost daily travel.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FREE FIRST RIDE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'CAB RIDES',
    title: 'Rapido Bank Offers – Free First Cab Ride for New Users',
    description: 'New users can book their first Rapido cab ride completely free.',
    points: [
      'Take your first cab ride without paying any fare.',
      'Available only for first-time Rapido users.',
      'No ride charges on your first eligible booking.',
      'Create a new account to get the welcome benefit.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'RAPIDO PARCEL',
    title: 'Rapido Coupon Code – Flat ₹100 Off Your First Parcel',
    description: 'Send your first parcel and save instantly.',
    points: [
      'Use the eligible coupon code to get ₹100 off on your first parcel booking.',
      'Valid on Rapido Parcel services.',
      'The discount is available on your first eligible parcel order.',
      'A good way to try Rapido’s doorstep delivery service.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'BIKE RIDES',
    title: 'Rapido Coupon Code – Flat 20% Off Bike Rides via MobiKwik',
    description: 'Pay with MobiKwik and get extra savings on bike rides.',
    points: [
      'Get a flat 20% discount on eligible bike rides.',
      'Save up to ₹10 extra on each ride.',
      'You can use this offer up to three times in a month.',
      'Pay through MobiKwik to get the benefit.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BUS BOOKINGS',
    title: 'Rapido Promo Code – Up to 25% Off Bus Bookings',
    description: 'Book bus tickets at lower prices with Rapido.',
    points: [
      'Save up to 25% on eligible bus ticket bookings.',
      'Available for all Rapido users.',
      'Pick from a wide range of bus routes.',
      'Book during the offer period to save the most.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹40',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'AUTO RIDES',
    title: 'Rapido Promo Code – Shared Auto Rides from ₹40',
    description: 'Travel at a low cost with shared auto rides starting at ₹40.',
    points: [
      'Book shared auto rides with fares starting from ₹40.',
      'Available from easy pickup locations.',
      'No waiting time for eligible rides.',
      'A budget-friendly choice for daily travel.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO ₹25 CASHBACK',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'WALLET OFFER',
    title: 'Rapido Discount Code – Up to ₹25 Cashback with Amazon Pay',
    description: 'Get cashback when you pay for your Rapido rides with Amazon Pay.',
    points: [
      'Get up to ₹25 cashback on eligible transactions.',
      'A minimum transaction value of ₹39 is needed.',
      'The offer can be used only once per user.',
      'Choose Amazon Pay as your payment method to be eligible.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'ZERO SURGE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'AUTO RIDES',
    title: 'Rapido Discount Code – Mumbai Auto Rides at Meter Fare',
    description: 'Book auto rides in Mumbai without surge pricing.',
    points: [
      'Pay the meter fare, with zero surge charges.',
      'Auto rides start from ₹150.',
      'You do not need any coupon code for this offer.',
      'Available on eligible auto bookings in Mumbai.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO ₹50 COINS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'REWARDS',
    title: 'Rapido Voucher Code – Earn Up to ₹50 in Rapido Coins',
    description: 'Collect rewards every time you book a ride.',
    points: [
      'Earn up to ₹50 in Rapido Coins on eligible bookings.',
      'Each Rapido Coin is worth ₹1.',
      'You do not need any coupon code to take part.',
      'Rewards are available for all eligible users.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'ZERO FEE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'TRAIN BOOKINGS',
    title: 'Rapido Voucher Code – Zero Service Fee on Train Bookings',
    description: 'Book train tickets without paying any service fee.',
    points: [
      'Pay zero service fee on eligible train ticket bookings.',
      'Save extra on every train booking.',
      'Book your tickets quickly on the Rapido app.',
      'No extra booking charges.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-13',
    badge: 'EARN ₹50',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'REFERRAL',
    title: 'Rapido Referral Code – Earn ₹50 for Every Referral',
    description: 'Invite your friends and earn rewards when they complete their first ride.',
    points: [
      'Earn ₹50 for every successful referral.',
      'Your friend gets ₹25 after completing their first ride within 7 days.',
      'Share your referral link to start earning.',
      'Referral rewards are available on eligible accounts.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'PREMIUM CABS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'CAB RIDES',
    title: 'Rapido Referral Code – Premium Cab Offers',
    description: 'Book premium cabs and enjoy a comfortable ride.',
    points: [
      'Get premium cab options for your daily travel.',
      'Enjoy on-time pickups and comfortable trips.',
      'See special offers on premium rides.',
      'Available on eligible Rapido cab bookings.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-15',
    badge: 'RAPIDO PARCEL',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'RAPIDO PARCEL',
    title: 'Rapido Cashback Offers – Fast Parcel Delivery Anytime',
    description: 'Send parcels quickly with Rapido’s doorstep delivery service.',
    points: [
      'Send parcels at any time with Rapido Parcel.',
      'Get easy pickup and delivery at your doorstep.',
      'Good for sending items within the city.',
      'Sign up and start using the parcel service today.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
