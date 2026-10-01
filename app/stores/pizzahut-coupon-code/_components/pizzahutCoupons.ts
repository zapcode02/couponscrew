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

export const PIZZAHUT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'PIZZA',
    title: 'Get Up to 50% Off on Pan Pizza & Cheese Burst Range',
    description: 'Shop the Pan Pizza and Cheese Burst range at up to 50% OFF on select combos.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 150',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'NEW USER',
    title: 'Get Flat ₹150 Off on Your First Pizza Hut App Order',
    description: 'New users get a flat ₹150 discount on their first order above ₹399 via the Pizza Hut app.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'BUY 1 GET 1',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'MEDIUM PIZZA',
    title: 'Buy 1 Get 1 Free on Medium Pizzas — Selected Days Only',
    description: 'Order a medium pizza and get a second one free on select weekdays via the app.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'WOW BOX',
    title: 'Get Up to 40% Off on WOW Box Value Meals',
    description: 'Shop WOW Box combo meals starting at value pricing with up to 40% OFF on select boxes.',
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
    type: 'SIDES',
    title: 'Get Up to 30% Off on Garlic Breadsticks, Wings & Pasta',
    description: 'Shop sides including garlic breadsticks, chicken wings, and pasta at up to 30% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'DELIVERY',
    title: 'Free Delivery on Orders Above ₹499',
    description: 'Get free delivery on Pizza Hut app and website orders above ₹499, no code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'DINE-IN',
    title: 'Get Up to 20% Off on Dine-In Bills at Select Outlets',
    description: 'Shop the dine-in menu at select Pizza Hut outlets with up to 20% OFF on the total bill.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'BANK OFFER',
    title: 'Get Up to 15% Instant Discount with HDFC & Axis Bank Cards',
    description: 'Get an additional instant discount on Pizza Hut app orders when paying with eligible HDFC or Axis Bank cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'STUFFED CRUST',
    title: 'Get Up to 35% Off on Stuffed Crust Pizza Range',
    description: 'Shop the Stuffed Crust pizza range at up to 35% OFF on selected sizes.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'PARTY ORDERS',
    title: 'Get Up to 25% Off on Bulk & Party Orders',
    description: 'Order in bulk for parties and gatherings to unlock up to 25% off the total order value.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
