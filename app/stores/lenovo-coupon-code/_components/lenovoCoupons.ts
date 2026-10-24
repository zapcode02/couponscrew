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

export const LENOVO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LAPTOPS',
    title: '[TODO: coupon card title — laptop offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹3,000 OFF',
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
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING LAPTOPS',
    title: '[TODO: coupon card title — Legion gaming laptop offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE ACCESSORIES',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BUNDLE',
    title: '[TODO: coupon card title — free accessories with laptop bundle]',
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
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DESKTOPS & AIO',
    title: '[TODO: coupon card title — desktop and all-in-one PC offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT ₹1,500 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'TABLETS',
    title: '[TODO: coupon card title — tablet offer]',
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
    type: 'MONITORS',
    title: '[TODO: coupon card title — monitor and display offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE UPGRADE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'STUDENT OFFER',
    title: '[TODO: coupon card title — student discount with free RAM/storage upgrade]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 50% OFF',
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
