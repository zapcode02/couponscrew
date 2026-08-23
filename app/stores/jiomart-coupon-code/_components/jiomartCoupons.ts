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

export const JIOMART_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0078AD]',
      color: '#0078AD',
      type: 'GROCERY',
      title: 'Get up to 30% off on grocery essentials & daily needs',
      description: 'Shop staples, packaged foods, and daily grocery essentials at up to 30% OFF.',
      code: 'JIOMART200',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 500',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#E8632C]',
      color: '#E8632C',
      type: 'FIRST ORDER',
      title: 'Flat ₹500 off on your first JioMart order',
      description: 'New users can get a flat ₹500 discount on their first order across eligible categories.',
      code: 'JMFIRST500',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 40% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0078AD]',
      color: '#0078AD',
      type: 'ELECTRONICS',
      title: 'Get up to 40% off on electronics & mobile accessories',
      description: 'Shop mobiles, gadgets, and electronics accessories at up to 40% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E8632C]',
      color: '#E8632C',
      type: 'FASHION',
      title: 'Get up to 50% off on fashion & apparel',
      description: 'Shop men’s, women’s, and kids’ fashion at up to 50% OFF across select brands.',
      code: 'JIOFASHION50',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'UP TO 35% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0078AD]',
      color: '#0078AD',
      type: 'HOME & KITCHEN',
      title: 'Get up to 35% off on home & kitchen essentials',
      description: 'Shop cookware, storage, and home essentials at up to 35% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'FLAT 15% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#E8632C]',
      color: '#E8632C',
      type: 'GROCERY',
      title: 'Flat 15% off on fruits & vegetables',
      description: 'Get fresh fruits and vegetables delivered with a flat 15% discount on your order.',
      code: 'JIOFRESH15',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 25% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0078AD]',
      color: '#0078AD',
      type: 'BEAUTY & PERSONAL CARE',
      title: 'Get up to 25% off on beauty & personal care products',
      description: 'Shop skincare, haircare, and personal care essentials at up to 25% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'UP TO 20% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E8632C]',
      color: '#E8632C',
      type: 'ELECTRONICS',
      title: 'Get up to 20% off on home appliances',
      description: 'Shop kitchen and home appliances online at up to 20% OFF.',
      code: 'JIOAPP20',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'FREE DELIVERY',
      badgeType: 'FREE',
      badgeColor: 'bg-[#0078AD]',
      color: '#0078AD',
      type: 'GROCERY',
      title: 'Free delivery on grocery orders above ₹499',
      description: 'Enjoy free delivery on eligible grocery orders above the minimum cart value.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 45% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E8632C]',
      color: '#E8632C',
      type: 'FASHION',
      title: 'Get up to 45% off on footwear & accessories',
      description: 'Shop footwear, bags, and accessories at up to 45% OFF across select styles.',
      code: 'JIOSTYLE45',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
