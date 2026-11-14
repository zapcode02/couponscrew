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
  points: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const KFC_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO ₹100 OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE',
    title: 'KFC Coupon Code – Up to ₹100 OFF on Orders Above ₹699',
    description: 'Get a discount of up to ₹100 when your KFC order value is ₹699 or more.',
    points: [
      'Get up to ₹100 off if your order total is ₹699 or above.',
      'You can use this offer on the KFC website as well as the mobile app.',
      'Order your favourite buckets, burgers and meals at a lower price.',
      'Your cart must reach the minimum order value to get the discount.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 54% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WEDNESDAY SPECIALS',
    title: 'KFC Coupon Code – Wednesday Specials Up to 54% OFF',
    description: 'Make your Wednesdays tastier with up to 54% off on selected KFC meals.',
    points: [
      'Get up to 54% off on eligible KFC orders every Wednesday.',
      'Selected menu items come with special midweek prices.',
      'Enjoy your favourite meals at a lower price for a limited period.',
      'Order on Wednesday to get the maximum savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FRIDAY SPECIALS',
    title: 'KFC Promo Code – Flat 50% OFF Every Friday',
    description: 'Get a flat 50% off on your KFC food orders every Friday.',
    points: [
      'Enjoy 50% off when your food order is above ₹250.',
      'This offer works only at selected KFC stores.',
      'Friday is a good day to enjoy your favourite food at half the price.',
      'Please check whether your nearest outlet is part of this offer before you order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FROM ₹299',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'LUNCH MEALS',
    title: 'KFC Promo Code – Lunch Meals Starting from ₹299',
    description: 'Have a tasty KFC lunch meal starting at only ₹299.',
    points: [
      'Lunch Specials start at just ₹299.',
      'Pick from many filling meal combos.',
      'Enjoy a full lunch without spending a lot.',
      'A good choice for your lunch break on working days.'
    ],
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
    type: 'ROLLS',
    title: 'KFC Discount Code – Rolls Starting from ₹99',
    description: 'Try tasty KFC chicken and veg rolls starting at only ₹99.',
    points: [
      'Rolls start at just ₹99.',
      'Pick from Thai Spicy, American Nashville and Indian Spicy Veg flavours.',
      'Get a quick meal full of strong, spicy flavours.',
      'Choose your favourite roll for a budget-friendly snack or lunch.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'AT ₹99',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CHICKEN',
    title: 'KFC Discount Code – 2 Hot & Crispy Chicken at ₹99',
    description: 'Get 2 pieces of KFC Hot & Crispy Chicken for only ₹99.',
    points: [
      'Buy 2 pieces of Hot & Crispy Chicken for ₹99 when your order is above ₹499.',
      'Simply add this deal to your order if it meets the minimum value.',
      'Enjoy one of KFC’s most popular chicken items at a lower price.',
      'Your order must reach the minimum value to unlock this offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'FREE BURGER',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'NEW USER',
    title: 'KFC Voucher Code – Free Classic Zinger Burger',
    description: 'Get a Classic Zinger Burger free with your first KFC order.',
    points: [
      'New customers get a Classic Zinger Burger free on their first order.',
      'Your order must be above ₹499 to be eligible.',
      'This offer works on both the KFC website and the app.',
      'Get an extra burger at no cost with your very first order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹189',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BOX MEALS',
    title: 'KFC Voucher Code – Box Meals Starting from ₹189',
    description: 'Enjoy a complete KFC Box Meal starting at only ₹189.',
    points: [
      'Box Meals start at just ₹189.',
      'Pick from Popcorn Biryani, Classic Zinger, Tandoori Zinger and more.',
      'Get a full meal at a pocket-friendly price.',
      'Choose your favourite combo for lunch or dinner.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹109',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNACKERS',
    title: 'KFC Referral Code – Snackers Starting from ₹109',
    description: 'Beat your hunger with KFC Snackers starting at only ₹109.',
    points: [
      'Snackers start at just ₹109.',
      'Pick from Regular Popcorn, Popcorn & Fries and more.',
      'A great choice for a quick bite at any time of the day.',
      'Enjoy tasty snacks without spending too much.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹57',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BEVERAGES',
    title: 'KFC Referral Code – Beverages Starting from ₹57',
    description: 'Cool down with KFC drinks starting at only ₹57.',
    points: [
      'Cold drinks start at just ₹57.',
      'Pick from Pepsi, 7Up, Mirinda and other drinks.',
      'Add your favourite drink to any KFC meal.',
      'Stay refreshed without adding much to your bill.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹139',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'RICE BOWLZ',
    title: 'KFC Cashback Offers – Rice Bowlz Starting at ₹139',
    description: 'Have a filling KFC Rice Bowlz meal starting at only ₹139.',
    points: [
      'Rice Bowlz start at just ₹139.',
      'Enjoy a satisfying meal full of tasty flavours.',
      'An easy option for lunch or dinner.',
      'Choose your favourite Rice Bowl without going over your budget.'
    ],
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
    title: 'KFC Cashback Offers – Treats Starting at ₹179',
    description: 'Explore tasty KFC Treats starting at only ₹179.',
    points: [
      'KFC Treats start at just ₹179.',
      'Pick from a range of snack and meal options.',
      'You do not need any coupon code for this deal.',
      'Enjoy a satisfying KFC treat at a reasonable price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
