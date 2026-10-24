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

export const NAMECHEAP_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DOMAINS',
    title: '[TODO: coupon card title — domain registration offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹300 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'NEW USER',
    title: '[TODO: coupon card title — new user welcome offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEB HOSTING',
    title: '[TODO: coupon card title — web hosting plan offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE WHOISGUARD',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PRIVACY PROTECTION',
    title: '[TODO: coupon card title — free WhoisGuard domain privacy offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BANK OFFER',
    title: '[TODO: coupon card title — bank card instant discount]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SSL CERTIFICATES',
    title: '[TODO: coupon card title — SSL certificate offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT ₹150 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'EMAIL HOSTING',
    title: '[TODO: coupon card title — private email hosting offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'VPN',
    title: '[TODO: coupon card title — VPN subscription offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE DOMAIN',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BUNDLE',
    title: '[TODO: coupon card title — free domain with hosting bundle]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'RENEWAL',
    title: '[TODO: coupon card title — renewal discount offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026'
  }
];
