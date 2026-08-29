// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'SPECIAL';
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

export const ZEE5_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 73% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'ANNUAL PLAN',
    title: 'Annual Plan | Up to 73% OFF (58% + Extra 15% OFF)',
    description: 'Save up to 58% on a ZEE5 Annual Subscription, plus an additional 15% off with code. Basic plan starts at Rs 349 for 2 devices.',
    code: 'EXCLUSIVE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'ANNUAL PLAN',
    title: 'Seasonal offer: up to 60% off on ZEE5 annual plans',
    description: 'Limited-time seasonal pricing gives you up to 60% off on select ZEE5 annual plans.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'SUBSCRIPTION PLANS',
    title: 'Get up to 50% off on ZEE5 annual subscription plans',
    description: 'Subscribe to ZEE5 Premium annual plans and save up to 50% on your membership.',
    code: 'ZEE5-50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'FIRST SUBSCRIPTION',
    title: 'First-time subscribers get up to 40% off on ZEE5 plans',
    description: 'New users can enjoy up to 40% off their first ZEE5 subscription plan purchase.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'PREMIUM CONTENT',
    title: 'Save up to 35% on ZEE5 premium content packs',
    description: 'Get access to premium regional and original content packs at up to 35% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'ANNUAL PLAN',
    title: 'Flat 30% off on ZEE5 annual premium membership',
    description: 'Get a flat 30% discount when you choose the ZEE5 annual premium plan.',
    code: 'ZEE5ANNUAL30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'EXTRA 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'BANK OFFER',
    title: 'VISA Debit Card | Extra 30% OFF on Subscription',
    description: 'Save an extra 30% on your ZEE5 subscription when paying with a Visa Debit Card from select banks.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'APP EXCLUSIVE',
    title: 'App-exclusive discount of up to 25% on ZEE5 mobile subscriptions',
    description: 'Download the ZEE5 app and get an exclusive discount of up to 25% on mobile plans.',
    code: 'ZEE5APP25',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'PREMIUM CONTENT',
    title: "'Veerabhadruni Rahasyam' Movie Exclusive | Up to 25% OFF",
    description: "Sign up and save up to 25% on access to the exclusive ZEE5 film 'Veerabhadruni Rahasyam'. Monthly plan starts from Rs 259.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT 20% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'SUBSCRIPTION PLANS',
    title: 'Get 20% off on ZEE5 quarterly subscription plans',
    description: 'Choose a ZEE5 quarterly plan and save 20% on your subscription cost.',
    code: 'ZEE5QTR20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'EXTRA 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'ANNUAL PLAN',
    title: 'All Plans | Extra 15% OFF on All Languages + Kidz Plan',
    description: 'Subscribe to ZEE5 Annual and save an extra 15% off with code. Access across 4 screens on website and mobile app.',
    code: 'EXCLUSIVE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'SUBSCRIPTION PLANS',
    title: 'Flat 15% OFF on Any Subscription Plan',
    description: 'Save a flat 15% on your chosen subscription plan. Pricing starts from Rs 125 per month.',
    code: 'EXCLUSIVE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-13',
    badge: 'EXTRA 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PREMIUM CONTENT',
    title: "'Lenin' Movie Exclusive | Extra 15% OFF",
    description: "Sign up and save an extra 15% on access to the exclusive ZEE5 film 'Lenin'. Monthly plan starts from Rs 99.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'EXTRA 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PREMIUM CONTENT',
    title: "'Transfer Trimurthulu' Movie | 15% OFF on Monthly Plan",
    description: "Stream 'Transfer Trimurthulu' exclusively on ZEE5 with premium access. Save an extra 15% on the monthly subscription plan starting from Rs 129.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-15',
    badge: 'FREE MONTH',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FIRST SUBSCRIPTION',
    title: 'Get one month free with select ZEE5 subscription bundles',
    description: 'Sign up for a qualifying ZEE5 subscription bundle and receive one month free.',
    code: 'ZEE5FREEMO',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FREE TRIAL',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PREMIUM CONTENT',
    title: 'Enjoy a free trial period on select ZEE5 premium content',
    description: 'Access select ZEE5 premium shows and movies with a limited free trial offer.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-17',
    badge: 'PREMIUM ACCESS',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'PREMIUM CONTENT',
    title: 'ZEE5 Premium | Access to 150+ Web Series & TV Shows',
    description: 'Unlock ZEE5 Premium and stream over 150 web series, TV shows, and latest movies with ad-free streaming.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-18',
    badge: 'NOW STREAMING',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#8B1874]',
    color: '#8B1874',
    type: 'PREMIUM CONTENT',
    title: "'Memu Copulam' Telugu Web Series | Now Streaming",
    description: "Watch the Telugu web series 'Memu Copulam' exclusively on ZEE5 Premium starring Gajapathi Raju, Nagendra Babu, and Getup Srinu.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
