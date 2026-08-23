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

export const LENSKART_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 60% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E5B93E]',
      color: '#E5B93E',
      type: 'EYEGLASSES',
      title: 'Get up to 60% off on eyeglasses across top frame brands',
      description: 'Shop a wide range of eyeglasses in metal, acetate and TR90 frames at up to 60% OFF.',
      code: 'LENSKART60',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 40% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#14213D]',
      color: '#14213D',
      type: 'SUNGLASSES',
      title: 'Flat 40% off on sunglasses for men and women',
      description: 'Get flat 40% OFF on a wide selection of UV-protected sunglasses for men and women.',
      code: 'LENSKART40',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E5B93E]',
      color: '#E5B93E',
      type: 'CONTACT LENSES',
      title: 'Get up to 50% off on contact lenses and lens solutions',
      description: 'Shop daily, monthly, and coloured contact lenses along with lens care solutions at up to 50% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'EXTRA 15% OFF',
      badgeType: 'PERCENT',
      badgeColor: 'bg-[#14213D]',
      color: '#14213D',
      type: 'FIRST ORDER',
      title: 'Get an extra 15% off on your first Lenskart order',
      description: 'New customers can enjoy an extra 15% OFF on their first order across eyewear categories.',
      code: 'LKFIRST15',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'UP TO 45% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E5B93E]',
      color: '#E5B93E',
      type: 'KIDS EYEWEAR',
      title: 'Get up to 45% off on kids eyeglasses and sunglasses',
      description: 'Shop durable, lightweight frames designed for kids at up to 45% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'BUY 1 GET 1',
      badgeType: 'FREE',
      badgeColor: 'bg-[#14213D]',
      color: '#14213D',
      type: 'EYEGLASSES',
      title: 'Buy 1 Get 1 Free on select eyeglasses collections',
      description: 'Pick two frames from select eyeglasses collections and get the second pair absolutely free.',
      code: 'LKBOGO',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E5B93E]',
      color: '#E5B93E',
      type: 'COMPUTER GLASSES',
      title: 'Get up to 30% off on computer & blue-light glasses',
      description: 'Shop blue-light blocking computer glasses for everyday screen use at up to 30% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'FLAT ₹500 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#14213D]',
      color: '#14213D',
      type: 'SUNGLASSES',
      title: 'Flat ₹500 off on premium sunglasses on orders above ₹2,000',
      description: 'Get a flat ₹500 discount on premium sunglasses when your order value is above ₹2,000.',
      code: 'LK500OFF',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 55% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#E5B93E]',
      color: '#E5B93E',
      type: 'EYEGLASSES',
      title: 'Get up to 55% off on progressive and lightweight lenses',
      description: 'Upgrade to progressive, anti-glare, or lightweight lens options at up to 55% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 20% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#14213D]',
      color: '#14213D',
      type: 'CONTACT LENSES',
      title: 'Get up to 20% off on coloured contact lenses',
      description: 'Shop a range of coloured contact lenses for a natural or bold look at up to 20% OFF.',
      code: 'LKCOLOR20',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
