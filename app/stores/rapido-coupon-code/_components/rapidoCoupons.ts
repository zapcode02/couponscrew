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
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const RAPIDO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FREE RIDE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'CAB RIDES',
    title: 'Free Ride on Your 1st Cab Booking',
    description: 'Get your first Rapido cab ride completely free — apply the code at checkout to unlock the welcome offer.',
    code: 'FREERIDE',
    verified: 'Verified',
    userType: 'Select Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'TRAVEL',
    title: 'Up to 55% OFF on Travel Bookings (Flights, Hotels, Buses)',
    description: 'Save big on travel — up to 55% off on hotel bookings, up to ₹4,000 off on flights, up to 25% off on buses, and zero service fee on ticket bookings.',
    code: 'RAPIDOTRAVEL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'METRO RIDES',
    title: 'Flat 20% OFF on Metro Station Rides',
    description: 'Save 20% on Rapido rides to and from metro stations — apply the code at checkout.',
    code: 'METRO20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE FIRST RIDE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FIRST RIDE',
    title: 'Free Cab Ride on Your First Booking (New Users)',
    description: 'New to Rapido? Enjoy your first cab ride completely free — no fare charged on your first booking.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'RAPIDO PARCEL',
    title: 'Flat ₹100 OFF on Your First Parcel',
    description: 'Send your first parcel with Rapido and save ₹100 — enter the code at checkout, valid for all users.',
    code: 'SAVE100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BIKE RIDES',
    title: 'Flat 20% OFF + Up to ₹10 on Bike Rides via MobiKwik',
    description: 'Pay with MobiKwik on Rapido and save a flat 20% plus up to ₹10 on every bike ride — usable three times per month per user.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'BUS BOOKINGS',
    title: 'Up to 25% OFF on Bus Bookings',
    description: 'Save up to 25% on bus ticket bookings on Rapido — valid for all users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹40',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'AUTO RIDES',
    title: 'Share Auto Rides Starting at ₹40',
    description: 'Book a shared auto on Rapido from any pickup point — fares start at just ₹40 with no waiting time required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO ₹25 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'WALLET',
    title: 'Up to ₹25 Cashback When You Pay with Amazon Pay',
    description: 'Pay with Amazon Pay on Rapido and earn up to ₹25 cashback — valid once per user on a minimum transaction of ₹39.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'ZERO SURGE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'AUTO RIDES',
    title: 'Mumbai Auto Rides at Meter Fare — Zero Surge',
    description: 'Book Rapido Auto in Mumbai starting at ₹150 — meter fare, zero surge pricing, no code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO ₹50 COINS',
    badgeType: 'REWARDS',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'REWARDS',
    title: 'Earn Up to ₹50 in Rapido Coins on Every Booking',
    description: 'Collect Rapido Coins on every ride — each coin equals ₹1, with up to ₹50 in coins earned per booking. Open to all users, no code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'ZERO SERVICE FEE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'TRAIN BOOKINGS',
    title: 'Book Train Tickets with Zero Service Fee',
    description: 'Book train tickets on Rapido and pay absolutely zero service fee — quick, hassle-free booking with extra savings on every journey.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-13',
    badge: 'EARN ₹50',
    badgeType: 'REWARDS',
    badgeColor: 'bg-[#FFD100]',
    color: '#FFD100',
    type: 'REFERRAL',
    title: 'Refer a Friend & Earn ₹50 Per Referral',
    description: 'Refer a friend to Rapido and earn ₹50 — your friend gets ₹25 when they complete their first ride within 7 days of signing up.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'PREMIUM OFFERS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CAB RIDES',
    title: 'Premium Cab Offers on Rapido',
    description: 'Book premium cabs on Rapido for a comfortable, hassle-free ride — great deals with reliable and quick pickups.',
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
    title: 'Rapido Parcel: Send Anything, Anywhere, Anytime',
    description: 'Sign up and start sending parcels with Rapido — fast, reliable doorstep delivery available anytime.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
