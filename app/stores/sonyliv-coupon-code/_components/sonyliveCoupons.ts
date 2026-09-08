// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'SPORTS' | 'STREAMING';
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

export const SONYLIVE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ANNUAL PLAN',
    title: 'Get Up to 50% Off on Sony Live Premium Annual Subscription',
    description: 'Unlock a full year of ad-light streaming, originals & live sports on the Premium plan at a discounted annual price.',
    code: '',
    verified: 'Verified',
    userType: 'New & Existing Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'MOBILE PLAN',
    title: 'Flat 25% Off on Sony Live Mobile-Only Subscription Plan',
    description: 'Stream on your smartphone at a lower price point with the Mobile plan — ideal for solo viewers who mainly watch on the go.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-3',
    badge: 'EXTRA 2 MONTHS FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'PREMIUM PLAN',
    title: 'Get 2 Extra Months Free on Sony Live Annual Premium Plan',
    description: 'Subscribe to the annual Premium plan and enjoy bonus streaming months added on top of your regular subscription period.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'SPORTS ADD-ON',
    title: 'Up to 30% Off on Sony Live Premium Plan with Sports Add-On',
    description: 'Get discounted pricing on the higher-tier plan bundled with live sports access, on top of entertainment and originals.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ANNUAL PREMIUM PLAN',
    title: 'Annual Premium Plan: Flat 10% Off on Subscription',
    description: 'Flat 10% off on the SonyLIV Annual Premium plan — access on up to 5 devices, 2 simultaneous screens, 4K UHD + Dolby Atmos, and ad-free viewing on originals and movies.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'MOBILE YEARLY PLAN',
    title: 'Mobile Yearly Plan: Flat 10% Off on Annual Subscription',
    description: 'Flat 10% off on the SonyLIV yearly mobile plan — stream movies, web series, and originals for the year at a reduced rate.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'MONTHLY PREMIUM PLAN',
    title: 'Monthly Premium Plan: Flat 10% Off',
    description: 'Flat 10% off on the SonyLIV monthly subscription plan — flexible viewing with no annual commitment.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'MONTHLY PLAN',
    title: 'Monthly Plan: Flat 5% Off + Access to Live Sony Channels',
    description: 'Flat 5% off on the SonyLIV monthly plan, with access to live Sony network channels including Sony Ten, Sony MAX, Sony SAB, and more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'YEARLY PREMIUM PLAN',
    title: 'Yearly Premium Plan: Flat 10% Off | From ₹1,499/Year',
    description: 'Flat 10% off on the SonyLIV yearly premium plan — one of the best-value annual OTT subscriptions currently available.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FREE CONTENT',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'FREE PICKS',
    title: 'Free Content on SonyLIV — No Subscription Needed',
    description: 'Watch a selection of content on SonyLIV for free — no subscription required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-11',
    badge: 'LIVE SPORTS',
    badgeType: 'SPORTS',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'LIVE SPORTS',
    title: 'Live Sports Streaming: Cricket, Football, Tennis, IPL & More',
    description: 'Stream live sports on SonyLIV — cricket, football, tennis, IPL, and more — with a Premium subscription.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹399',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5AC8FA]',
    color: '#5AC8FA',
    type: 'MOVIES',
    title: 'Stream the Latest Movies on SonyLIV | From ₹399/Month',
    description: 'Watch the latest movies on SonyLIV with a monthly subscription starting from ₹399/month.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹1,499',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'REGIONAL SERIALS',
    title: 'Hindi, Marathi & Regional Serials — Annual Plan From ₹1,499',
    description: 'Stream Hindi, Marathi, and regional language serials and shows on SonyLIV with an annual subscription.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  },
  {
    id: 'coupon-14',
    badge: 'HD STREAMING',
    badgeType: 'STREAMING',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MALAYALAM MOVIES',
    title: 'Watch Karakkam on SonyLIV — Malayalam Blockbuster',
    description: 'Stream the Malayalam film Karakkam on SonyLIV — a mix of horror, comedy, and music, available in HD with an active subscription.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Sep 2026'
  }
];
