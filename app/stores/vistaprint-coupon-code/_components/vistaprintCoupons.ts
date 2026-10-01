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

export const VISTAPRINT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0468D7]',
    color: '#0468D7',
    type: 'BUSINESS CARDS',
    title: 'Get Up to 50% Off on Standard & Premium Business Cards',
    description: 'Shop custom business cards in standard and premium finishes at up to 50% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 300',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'NEW USER',
    title: 'Get Flat ₹300 Off on Your First Vistaprint Order',
    description: 'New users get a flat ₹300 discount on their first order above ₹999.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0468D7]',
    color: '#0468D7',
    type: 'MARKETING MATERIALS',
    title: 'Get Up to 40% Off on Flyers, Brochures & Banners',
    description: 'Shop custom flyers, brochures, and banners for your business at up to 40% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'SIGNAGE',
    title: 'Get Up to 35% Off on Yard Signs & Trade Show Displays',
    description: 'Shop custom yard signs, banners, and trade show displays at up to 35% OFF.',
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
    type: 'APPAREL',
    title: 'Get Up to 30% Off on Custom T-Shirts, Mugs & Tote Bags',
    description: 'Shop custom apparel and promotional products at up to 30% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0468D7]',
    color: '#0468D7',
    type: 'BULK ORDER',
    title: 'Get Up to 25% Off on Bulk Business Card & Flyer Orders',
    description: 'Order in bulk quantities of business cards or flyers and save up to 25% per unit.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FREE DESIGN',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'DESIGN TOOL',
    title: 'Free Access to VistaCreate Design Templates',
    description: 'Use VistaCreate design templates for free to customise your print products before ordering.',
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
    title: 'Get Up to 10% Instant Discount with HDFC & ICICI Cards',
    description: 'Get an additional 10% instant discount on Vistaprint.in when paying with eligible HDFC or ICICI cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0468D7]',
    color: '#0468D7',
    type: 'CUSTOM STATIONERY',
    title: 'Get Up to 45% Off on Invitations & Holiday Cards',
    description: 'Shop custom invitations and holiday greeting cards at up to 45% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'RUSH DELIVERY',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'FAST TURNAROUND',
    title: 'Get Discounted Rush Production on Select Print Products',
    description: 'Add rush production to select business card and flyer orders at a discounted add-on rate.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
