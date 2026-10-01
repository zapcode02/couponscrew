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

export const SAMSUNG_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'SMARTPHONES',
    title: 'Get Up to 40% Off on Galaxy S-Series Smartphones',
    description: 'Shop the latest Galaxy S-series flagship phones at up to 40% OFF, plus exchange bonus on your old device.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 15,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'EXCHANGE OFFER',
    title: 'Get Up to ₹15,000 Extra Exchange Bonus on Galaxy Z Fold & Flip',
    description: 'Trade in your old smartphone and get an extra exchange bonus of up to ₹15,000 on Galaxy Z Fold and Z Flip models.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'TELEVISIONS',
    title: 'Get Up to 35% Off on Neo QLED & Crystal UHD 4K TVs',
    description: 'Upgrade your home entertainment with Neo QLED and Crystal UHD 4K TVs at up to 35% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'NO COST EMI',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'FINANCE',
    title: 'No-Cost EMI on Samsung Bespoke Refrigerators & Washing Machines',
    description: 'Shop Bespoke refrigerators and front-load washing machines with no-cost EMI up to 12 months.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'WEARABLES',
    title: 'Get Up to 30% Off on Galaxy Watch & Galaxy Buds',
    description: 'Shop Galaxy Watch smartwatches and Galaxy Buds earbuds at up to 30% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 2,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'NEW USER',
    title: 'Get Flat ₹2,000 Off on Your First Samsung Shop Order',
    description: 'New users get a flat ₹2,000 discount on their first purchase via the Samsung Shop app or website.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'TABLETS',
    title: 'Get Up to 25% Off on Galaxy Tab S Series Tablets',
    description: 'Shop Galaxy Tab S series tablets with S Pen at up to 25% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'BANK OFFER',
    title: 'Get Up to 10% Instant Discount with HDFC & ICICI Bank Cards',
    description: 'Get an additional 10% instant discount on Samsung Shop when paying with eligible HDFC or ICICI Bank cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'STUDENT OFFER',
    title: 'Get Up to 20% Student Discount on Galaxy Book Laptops',
    description: 'Verified students get up to 20% off on Galaxy Book laptops via Samsung Education Store.',
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'CLEARANCE',
    title: 'Get Up to 50% Off on Samsung Previous-Gen Devices',
    description: 'Shop previous-generation Galaxy phones, tablets, and audio devices at up to 50% OFF while stocks last.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
