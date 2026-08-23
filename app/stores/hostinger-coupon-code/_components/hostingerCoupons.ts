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

export const HOSTINGER_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 93% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Save Up to 93% on Hostinger Web Hosting — Free Domain + 3 Extra Months',
    description: 'Get up to 83% off on Hostinger web hosting plans plus an extra 10% off with the coupon code — includes a free domain and 3 bonus months on eligible plans.',
    code: 'HOSTCC10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 87% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'DOMAINS',
    title: 'Register Your Domain at Up to 87% OFF + Extra 10% with Coupon',
    description: 'Search and buy your ideal domain name on Hostinger at up to 87% off — apply the coupon code at checkout for an additional 10% saving on top.',
    code: 'HOSTDOMAIN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 95% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'DOMAINS',
    title: 'Register a Domain at Up to 95% OFF — Free Privacy Protection Included',
    description: 'Choose from the most popular domain extensions and save up to 95% on your first-year registration — free WHOIS privacy protection included on every eligible domain.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Hostinger 48-Month Plan — Up to 83% OFF + Extra 15% with Coupon',
    description: "Lock in Hostinger's longest-term hosting plan and save up to 83% — use the coupon code at checkout to stack an extra 15% off on top.",
    code: 'HOSTSALE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SPECIAL DEAL',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'DOMAINS',
    title: 'Get a .in Domain for Just ₹1 in Your First Year + Extra 10% OFF',
    description: 'Register a .in domain with a 3-year plan and pay just ₹1 for the first year — apply the coupon code at checkout for an additional 10% off.',
    code: 'HOSTDOMAIN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FREE HOSTING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'DOMAINS',
    title: 'Buy a .tech/.org/.net/.io/.ai Domain for 2+ Years — Get 1 Month Hosting FREE + 10% OFF',
    description: 'Purchase a premium domain extension for 2 or more years on Hostinger and get one month of web hosting absolutely free — plus an extra 10% off with the coupon code.',
    code: 'HOSTFREEHOST',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: '83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Hosting — 83% OFF + Extra 10% + 3 Free Months on 4-Year Plans',
    description: 'Sign up for a 4-year Hostinger hosting plan and save 83% upfront — apply the coupon code for an extra 10% off with 3 additional months free on the 48-month plan.',
    code: 'HOSTCC10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Hostinger Hosting — Up to 83% OFF + Extra 12% with Coupon Code',
    description: 'Save up to 83% across all Hostinger hosting plans — web, VPS, cloud, and WordPress — and stack an extra 12% off by applying the coupon code at checkout.',
    code: 'VIRTUAL12',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Web Hosting from ₹69/Month — Up to 83% OFF on Long-Term Plans',
    description: 'Get Hostinger web hosting starting at just ₹69/month (regular price ₹399) on 24 or 48-month plans — with an extra 15% off on those longer-term subscriptions.',
    code: 'HASPECIAL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FREE EMAIL',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'EMAIL HOSTING',
    title: 'Buy a 2-Year Domain on Hostinger — Get 1 Year of Free Email + 10% OFF',
    description: 'Register a .ai, .io, .net or .org domain for 2 or more years on Hostinger and get a full year of free email hosting — apply the coupon code for an extra 10% off.',
    code: 'HOSTEMAIL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Student Discount — Up to 15% OFF on All Hostinger Hosting Plans',
    description: 'Students can save up to 15% on any Hostinger hosting plan — an exclusive discount with a 30-day money-back guarantee on all eligible plans.',
    code: 'STUDENT15',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 82% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Up to 65% OFF + Extra 17% with Coupon + 3 Free Months',
    description: "Scale your website with Hostinger's cloud hosting and save up to 65% — apply the coupon code for an extra 17% off, with 3 bonus months on eligible plans.",
    code: 'CLOUD17',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 93% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WORDPRESS HOSTING',
    title: 'Hostinger WordPress Hosting — Up to 83% OFF + Extra 10% + 3 Free Months',
    description: 'Launch or migrate your WordPress site on Hostinger and save up to 83% — apply the coupon code for an extra 10% off and get 3 bonus months on eligible plans.',
    code: 'HOSTWP',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 79% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'VPS',
    title: 'Hostinger VPS Hosting — Up to 69% OFF + Extra 10% on KVM Plans',
    description: 'Get full root access VPS hosting on Hostinger at up to 69% off — apply the coupon code for an extra 10% saving across KVM1 to KVM8 plans.',
    code: 'HOSTVPS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: 'EXTRA 12% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Extra 12% OFF + Free Domain, SSL & Email',
    description: "Save an extra 12% on Hostinger's cloud hosting plans — packed with features including free domain, unlimited SSL, CDN, and dedicated IP at no added cost.",
    code: 'CLOUD12',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Up to 65% OFF + Extra 10% + 3 Free Months',
    description: 'Power your website with Hostinger cloud hosting and save up to 65% — use the coupon code for an additional 10% off with 3 bonus months on 48-month plans.',
    code: 'HOSTCLOUD',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 53% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Horizons AI Website Builder — Up to 53% OFF on All Plans',
    description: "Build and launch a website using Hostinger's AI-powered Horizons builder — save up to 43% upfront and stack an extra 10% off with the coupon code.",
    code: 'HOSTHORIZONS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-18',
    badge: 'RENEWAL DEAL',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Renew Your Hostinger Web Hosting — Plans Starting from ₹289/Month',
    description: 'Existing Hostinger users can renew their web hosting plans starting from ₹289/month — no coupon code needed, discount pre-applied on renewal.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  }
];
