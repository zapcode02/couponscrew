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

export const PEPPERFRY_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#5B4FBE]',
      color: '#5B4FBE',
      type: 'FURNITURE',
      title: 'Get 50% off on Bonton Computer Table in Wenge Finish with Keyboard Slider',
      description: 'Shop the Bonton Computer Table in Wenge finish with a sliding keyboard tray at up to 50% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#FF5722]',
      color: '#FF5722',
      type: 'HOME DÉCOR',
      title: 'Get Ethnic Motif Multicolor (12 x 16) PVC Placemats, Set of 6 @ Rs.1',
      description: 'Add a set of 6 ethnic motif multicolor PVC placemats to your dining table for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 35% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#4A3AFF]',
      color: '#0D9488',
      type: 'FURNITURE',
      title: 'Get 35% off on Yuko TV Console for TVs up to 55" in Columbia',
      description: 'Shop the Yuko TV Console in Columbia finish, suitable for TVs up to 55 inches, at up to 35% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FF5722]',
      color: '#2563EB',
      type: 'ELECTRONICS',
      title: 'Get 75% off on Portable Electronic Digital Weight Machine',
      description: 'Shop the portable electronic digital weight machine at up to 75% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'FURNITURE & DECOR',
      title: 'Enjoy up to 75% OFF + 20% Cashback on Furniture & Decor',
      description: 'Shop across furniture & home décor and enjoy up to 75% OFF plus an extra 20% cashback.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#5B4FBE]',
      color: '#5B4FBE',
      type: 'KITCHENWARE',
      title: 'Get 75% off on Brayan 250ml White Set of 2 Ceramic Coffee Mugs',
      description: 'Shop the Brayan 250ml white ceramic coffee mug set of 2 at up to 75% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 36% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FF5722]',
      color: '#FF5722',
      type: 'FURNITURE',
      title: 'Get 36% off on Suki Bedside Table in Wenge Finish',
      description: 'Shop the Suki Bedside Table in Wenge finish at up to 36% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#4A3AFF]',
      color: '#0D9488',
      type: 'KITCHENWARE',
      title: 'Get Smart ABS Plastic Vegetable Peeler with Stainless Steel Blade @ Rs.1',
      description: 'Add a smart ABS plastic vegetable peeler with a stainless steel blade to your cart for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#FF5722]',
      color: '#2563EB',
      type: 'BATH',
      title: 'Get Grey Abstract Rubber 24x16 Inches AntiSkid Bath Mat @ Rs.1',
      description: 'Add a grey abstract rubber 24x16 inch anti-skid bath mat to your cart for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 46% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'FURNITURE',
      title: 'Get 46% off on Mana Coffee Table in Wenge Finish',
      description: 'Shop the Mana Coffee Table in Wenge finish at up to 46% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
