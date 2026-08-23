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

export const MUSCLEBLAZE_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 45% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F26522]',
      color: '#F26522',
      type: 'WHEY PROTEIN',
      title: 'Get up to 45% off on Whey Protein Supplements',
      description: 'Shop a wide range of whey protein powders and concentrates at up to 45% OFF.',
      code: 'MB45',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 30% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#1A1A1A]',
      color: '#1A1A1A',
      type: 'PRE-WORKOUT',
      title: 'Flat 30% off on Pre-Workout Supplements',
      description: 'Get a flat 30% discount on select pre-workout formulas to fuel your training sessions.',
      code: 'MBPRE30',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 40% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F26522]',
      color: '#F26522',
      type: 'VITAMINS',
      title: 'Get up to 40% off on Vitamins & Wellness Range',
      description: 'Shop multivitamins, omega-3, and daily wellness supplements at up to 40% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A1A]',
      color: '#1A1A1A',
      type: 'COMBO PACKS',
      title: 'Get up to 50% off on Combo Packs',
      description: 'Bundle whey protein, shakers, and snack bars together and save up to 50% on combo packs.',
      code: 'MBCOMBO50',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'FLAT 20% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#F26522]',
      color: '#F26522',
      type: 'GYM GEAR',
      title: 'Flat 20% off on Gym Accessories & Gear',
      description: 'Shop shakers, gym bags, gloves, and training accessories at a flat 20% discount.',
      code: 'MBGEAR20',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 35% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A1A]',
      color: '#1A1A1A',
      type: 'MASS GAINERS',
      title: 'Get up to 35% off on Mass Gainer Supplements',
      description: 'Shop mass and weight gainer supplements designed for calorie-dense nutrition at up to 35% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 25% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F26522]',
      color: '#F26522',
      type: 'PROTEIN BARS',
      title: 'Get up to 25% off on Protein Bars & Snacks',
      description: 'Grab protein bars and on-the-go snacks for your fitness routine at up to 25% OFF.',
      code: 'MBSNACK25',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'FLAT 15% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#1A1A1A]',
      color: '#1A1A1A',
      type: 'NEW USERS',
      title: 'Flat 15% off on Your First MuscleBlaze Order',
      description: 'New customers can get a flat 15% discount on their first order across the MuscleBlaze store.',
      code: 'MBFIRST15',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F26522]',
      color: '#F26522',
      type: 'VITAMINS',
      title: 'Get up to 30% off on Fish Oil & Omega Supplements',
      description: 'Shop fish oil and omega-3 capsules for daily wellness support at up to 30% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 60% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A1A]',
      color: '#1A1A1A',
      type: 'COMBO PACKS',
      title: 'Enjoy up to 60% off on Sitewide Combo Deals',
      description: 'Shop across supplements, gear, and wellness combo packs and enjoy up to 60% OFF sitewide.',
      code: 'MBSAVE60',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
