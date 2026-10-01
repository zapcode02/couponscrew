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

export const CROCS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'CLASSIC CLOGS',
    title: 'Get Up to 40% Off on Classic Clogs for Men & Women',
    description: 'Shop the iconic Classic Clog in multiple colours at up to 40% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 500',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'NEW USER',
    title: 'Get Flat ₹500 Off on Your First Crocs Order',
    description: 'New users get a flat ₹500 discount on their first order above ₹2,499.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'KIDS CROCS',
    title: 'Get Up to 30% Off on Kids Classic Clogs & Sandals',
    description: 'Shop the kids range of Classic Clogs and sandals at up to 30% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'BUY 2 GET 1',
    badgeType: 'FREE',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'JIBBITZ CHARMS',
    title: 'Buy 2 Get 1 Free on Jibbitz Charms — 5-Pack Sets',
    description: 'Customise your clogs with Jibbitz charm 5-packs — buy 2 sets, get 1 free.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'SANDALS',
    title: 'Get Up to 35% Off on Crocs Sandals & Flip-Flops',
    description: 'Shop Crocs sandals and flip-flops for summer at up to 35% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'BOOTS',
    title: 'Get Up to 25% Off on Crocs Winter Boots & Clog Boots',
    description: 'Shop fleece-lined winter boots and clog boots at up to 25% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'BANK OFFER',
    title: 'Get Up to 10% Instant Discount with ICICI & SBI Cards',
    description: 'Get an additional 10% instant discount on Crocs.in when paying with eligible ICICI or SBI cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'DELIVERY',
    title: 'Free Shipping on All Orders Above ₹1,499',
    description: 'Get free standard shipping on Crocs.in orders above ₹1,499, no code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'CROCS CLUB',
    title: 'Get Up to 20% Off on Your Birthday Month as a Crocs Club Member',
    description: 'Join Crocs Club for free and unlock a birthday-month discount of up to 20% on your next order.',
    code: '',
    verified: 'Verified',
    userType: 'Crocs Club Members',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'CLEARANCE',
    title: 'Get Up to 50% Off on Past-Season Colourways & Styles',
    description: 'Shop past-season clog colours and discontinued styles at up to 50% OFF while stocks last.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
