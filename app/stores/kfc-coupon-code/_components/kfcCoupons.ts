// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'BEVERAGES' | 'DEAL' | 'LUNCH SPECIAL' | 'MEAL DEALS' | 'RICE BOWL';
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

export const KFC_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO ₹100 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'BUCKET DEALS',
    title: 'Up to ₹100 OFF on Orders Above ₹699',
    description: 'Save up to ₹100 on your KFC order when you spend ₹699 or more — valid on web and app.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 54% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'COMBO MEALS',
    title: 'KFC Wednesday Specials: Up to 54% OFF',
    description: 'Make the most of your midweek cravings — save up to 54% on KFC orders every Wednesday.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Every Wednesday'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'APP EXCLUSIVE',
    title: 'Flat 50% OFF on KFC Food Orders (Every Friday)',
    description: 'Every Friday just got tastier — get a flat 50% off on KFC food orders above ₹250 at selected stores.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Every Friday'
  },
  {
    id: 'coupon-4',
    badge: 'FROM ₹299',
    badgeType: 'LUNCH SPECIAL',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'COMBO MEALS',
    title: 'Lunch Special: Meals Starting at ₹299',
    description: 'Enjoy a satisfying KFC lunch without the splurge — complete meals starting at just ₹299.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹99',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNACKS',
    title: 'KFC Rolls Starting from ₹99',
    description: 'Get your hands on KFC chicken and veg rolls starting at just ₹99 — Thai Spicy, American Nashville, and Indian Spicy Veg.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: '2 PCS AT ₹99',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'BUCKET DEALS',
    title: '2 Pcs Hot & Crispy Chicken at Just ₹99',
    description: "Get 2 pieces of KFC's iconic Hot & Crispy Chicken for only ₹99 on orders above ₹499.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'FREE ZINGER',
    badgeType: 'FREE',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'APP EXCLUSIVE',
    title: 'Free Classic Zinger Burger on Your First Order',
    description: 'First-time KFC order? Score a free Classic Zinger Burger on orders above ₹499 — web and app only.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹189',
    badgeType: 'MEAL DEALS',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'COMBO MEALS',
    title: 'Box Meals Starting from ₹189',
    description: "Dig into KFC's value Box Meals starting at ₹189 — choose from Popcorn Biryani, Classic Zinger, Tandoori Zinger, and more.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹109',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'SNACKS',
    title: 'KFC Snackers Starting from ₹109',
    description: 'Satisfy your snack cravings with KFC Snackers — Regular Popcorn, Popcorn & Fries, and more starting at ₹109.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹57',
    badgeType: 'BEVERAGES',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNACKS',
    title: 'Beverages Starting from ₹57',
    description: "Stay refreshed with KFC's range of cold drinks — Pepsi, 7Up, Mirinda, and more starting at just ₹57.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹139',
    badgeType: 'RICE BOWL',
    badgeColor: 'bg-[#E4002B]',
    color: '#E4002B',
    type: 'COMBO MEALS',
    title: 'Rice Bowlz Starting at ₹139',
    description: 'Order KFC Rice Bowlz at the best price — filling, flavourful meals starting at just ₹139.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹179',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNACKS',
    title: 'KFC Treats Starting from ₹179',
    description: 'Pick any KFC Treat and enjoy a satisfying snack or meal starting at just ₹179 — no code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
