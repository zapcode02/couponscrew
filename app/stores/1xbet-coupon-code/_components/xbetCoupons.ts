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

export const XBET_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 100% BONUS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WELCOME BONUS',
    title: '[TODO: coupon card title — new user sign-up bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹500 BONUS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FIRST DEPOSIT',
    title: '[TODO: coupon card title — first deposit bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% BONUS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'RELOAD BONUS',
    title: '[TODO: coupon card title — reload/redeposit bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE BET',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMOTIONS',
    title: '[TODO: coupon card title — free bet promotion offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '10% CASHBACK',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CASHBACK',
    title: '[TODO: coupon card title — weekly cashback offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 30% BONUS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ACCUMULATOR',
    title: '[TODO: coupon card title — accumulator/combo bet bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT ₹200 BONUS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'REFERRAL',
    title: '[TODO: coupon card title — referral bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 25% BONUS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ESPORTS',
    title: '[TODO: coupon card title — esports betting bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE SPINS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CASINO',
    title: '[TODO: coupon card title — casino free spins offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 100% BONUS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEEKEND SPECIAL',
    title: '[TODO: coupon card title — weekend special bonus offer]',
    description: '[TODO: one-sentence coupon description]',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
