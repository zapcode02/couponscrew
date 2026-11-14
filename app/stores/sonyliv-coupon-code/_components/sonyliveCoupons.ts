// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'SPORTS' | 'STREAMING' | 'DEAL';
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

export const SONYLIVE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'ANNUAL PLAN',
    title: 'SonyLIV Wallet Offers – Up to 50% Off Premium Annual Plan',
    description: 'Enjoy a full year of premium entertainment and save up to 50%.',
    points: [
      'Get up to 50% off on the SonyLIV Premium Annual Subscription.',
      'Watch originals, movies and live sports with fewer ads.',
      'Enjoy non-stop entertainment all year long.',
      'Available only for a limited period.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MOBILE PLAN',
    title: 'SonyLIV Wallet Offers – Flat 25% Off Mobile-Only Plan',
    description: 'Save on SonyLIV’s mobile plan made for streaming on your smartphone.',
    points: [
      'Get a flat 25% discount on the Mobile-Only Subscription.',
      'Watch your favourite content on your smartphone.',
      'Best for users who mostly watch on mobile.',
      'Enjoy premium entertainment at a lower subscription price.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: '2 MONTHS FREE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'ANNUAL PLAN',
    title: 'SonyLIV Bank Offers – Get 2 Extra Months Free on Premium Plan',
    description: 'Take the annual plan and get bonus streaming months at no extra cost.',
    points: [
      'Get 2 extra months free with the Annual Premium Plan.',
      'Your subscription gets longer than the normal validity period.',
      'Enjoy non-stop access to premium entertainment.',
      'A limited-time bonus for eligible annual subscribers.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'SPORTS ADD-ON',
    title: 'SonyLIV Bank Offers – Up to 30% Off Premium Plan with Sports Add-On',
    description: 'Watch live sports and entertainment and save on your subscription.',
    points: [
      'Save up to 30% on the Premium Plan with the Sports Add-On.',
      'Watch live sports along with movies, originals and shows.',
      'Get bundle savings on premium streaming.',
      'The offer is available on eligible subscriptions.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'ANNUAL PLAN',
    title: 'SonyLIV Coupon Code – Flat 10% Off Annual Premium Plan',
    description: 'Upgrade to SonyLIV Premium and get special annual savings.',
    points: [
      'Get a flat 10% off on the Annual Premium Plan.',
      'Stream on up to 5 devices, with 2 screens at the same time.',
      'Enjoy 4K UHD, Dolby Atmos and ad-free viewing on originals and movies.',
      'A good choice for families and entertainment lovers.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MOBILE YEARLY',
    title: 'SonyLIV Coupon Code – Flat 10% Off Mobile Yearly Plan',
    description: 'Stream on your smartphone all year and pay less.',
    points: [
      'Save 10% on the SonyLIV Mobile Yearly Plan.',
      'Watch movies, web series and SonyLIV Originals.',
      'The yearly plan gives better value than monthly plans.',
      'Available on eligible yearly mobile subscriptions.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MONTHLY PLAN',
    title: 'SonyLIV Promo Code – Flat 10% Off Monthly Premium Plan',
    description: 'Enjoy flexible monthly entertainment at a lower price.',
    points: [
      'Get a flat 10% discount on the Monthly Premium Plan.',
      'Stream without taking a yearly plan.',
      'Watch premium content as long as your plan is active.',
      'Good for users who prefer monthly payment.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'MONTHLY PLAN',
    title: 'SonyLIV Promo Code – Flat 5% Off Monthly Plan',
    description: 'Watch Sony channels and premium content and save more.',
    points: [
      'Save 5% on the SonyLIV Monthly Plan.',
      'Watch live Sony channels like Sony Ten, Sony MAX and Sony SAB.',
      'Get movies, shows and live TV in one subscription.',
      'Best for flexible monthly streaming.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹1,499/YR',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'YEARLY PREMIUM PLAN',
    title: 'SonyLIV Discount Code – Yearly Premium Plan from ₹1,499',
    description: 'Take the yearly plan and enjoy premium entertainment at better value.',
    points: [
      'The Annual Premium Plan starts from ₹1,499.',
      'Get a flat 10% discount on eligible subscriptions.',
      'Watch movies, originals and live sports all year.',
      'Great value for long-term subscribers.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'WATCH FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FREE CONTENT',
    title: 'SonyLIV Discount Code – Watch Free Content Without Subscription',
    description: 'Watch selected SonyLIV content without paying for a subscription.',
    points: [
      'Watch free movies, shows and selected content.',
      'No subscription is needed for eligible titles.',
      'Try SonyLIV before you upgrade to Premium.',
      'Available for all users.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'LIVE SPORTS',
    badgeType: 'STREAMING',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'SPORTS STREAMING',
    title: 'SonyLIV Voucher Code – Live Sports Streaming with Premium',
    description: 'Watch your favourite sports events live on SonyLIV.',
    points: [
      'Stream cricket, football, tennis, IPL and more.',
      'You need a Premium subscription to watch live sports.',
      'Enjoy high-quality streaming on supported devices.',
      'Watch all major sports events in one place.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹399/MO',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MOVIES PLAN',
    title: 'SonyLIV Voucher Code – Movies from ₹399 Per Month',
    description: 'Watch the latest movies with a low-cost monthly subscription.',
    points: [
      'Monthly movie plans start from ₹399.',
      'Stream the latest blockbuster films at any time.',
      'Enjoy a wide collection of movies in many genres.',
      'Available with an active SonyLIV subscription.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹1,499/YR',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'REGIONAL SHOWS',
    title: 'SonyLIV Referral Code – Regional Serials from ₹1,499 Per Year',
    description: 'Watch your favourite regional shows with a yearly plan.',
    points: [
      'Yearly subscriptions start from ₹1,499.',
      'Stream Hindi, Marathi and other regional serials.',
      'Get access to popular TV content for the whole year.',
      'Perfect for fans of regional entertainment.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'HD STREAMING',
    badgeType: 'STREAMING',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MALAYALAM MOVIES',
    title: 'SonyLIV Referral Code – Watch Karakkam in HD',
    description: 'Stream the Malayalam blockbuster Karakkam on SonyLIV.',
    points: [
      'Watch Karakkam with an active SonyLIV subscription.',
      'Enjoy the movie in HD quality.',
      'Experience a mix of horror, comedy and music.',
      'Available to stream on supported devices.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
