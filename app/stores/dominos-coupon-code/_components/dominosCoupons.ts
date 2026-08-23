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

export const DOMINOS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'PIZZA',
    title: 'Get 50% off on Medium & Large Pizzas',
    description: 'Order any medium or large pizza and enjoy up to 50% OFF on your total bill.',
    code: 'DOMINOS50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'COMBO',
    title: 'Flat 25% off on Combo Meals',
    description: 'Get a flat 25% discount on select pizza + sides + beverage combo meals.',
    code: 'COMBO25',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'NEW USER',
    title: 'Get up to 40% off on Your First Order',
    description: 'New to Dominos? Enjoy up to 40% OFF on your first online order.',
    code: 'WELCOME40',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'SIDES',
    title: 'Get a Free Side with Every Large Pizza',
    description: 'Order a large pizza and get a complimentary side dish added to your order.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'SUBSCRIPTION',
    title: 'Up to 30% off with Dominos Subscription Plan',
    description: 'Subscribe and save up to 30% on regular pizza orders throughout the month.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PIZZA',
    title: 'Flat ₹100 off on Orders Above ₹499',
    description: 'Get a flat ₹100 discount when your order value is ₹499 or more.',
    code: 'SAVE100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'BEVERAGES',
    title: 'Up to 20% off on Beverages with Any Pizza Order',
    description: 'Add a beverage to your pizza order and get up to 20% OFF on the beverage.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'BUY 1 GET 1',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'COMBO',
    title: 'Buy 1 Get 1 Free on Select Medium Pizzas',
    description: 'Order one medium pizza from the select range and get another one free.',
    code: 'BOGOPIZZA',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#006491]',
    color: '#006491',
    type: 'DESSERTS',
    title: 'Up to 15% off on Desserts',
    description: 'Round off your meal with up to 15% OFF on desserts when ordered with a pizza.',
    code: 'SWEET15',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'APP EXCLUSIVE',
    title: 'Flat 20% off on App Orders',
    description: 'Order through the Dominos app and get a flat 20% discount on your bill.',
    code: 'APP20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
