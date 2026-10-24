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

export const GNC_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WHEY PROTEIN',
    title: '[TODO: coupon card title — whey protein offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 20% OFF',
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
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'VITAMINS & HEALTH',
    title: '[TODO: coupon card title — vitamins and health supplements offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE SHAKER',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BUNDLE',
    title: '[TODO: coupon card title — free shaker with bundle purchase]',
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
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEIGHT MANAGEMENT',
    title: '[TODO: coupon card title — weight management range offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HERBAL SUPPLEMENTS',
    title: '[TODO: coupon card title — herbal supplements offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SPORTS NUTRITION',
    title: '[TODO: coupon card title — sports nutrition range offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE SAMPLES',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FIRST ORDER',
    title: '[TODO: coupon card title — free samples on first order]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CLEARANCE',
    title: '[TODO: coupon card title — clearance sale offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
