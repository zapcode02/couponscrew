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
    badge: 'FLAT ₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'PROMO OFFER',
    title: 'Pizza Hut Coupon Code – Get Flat ₹125 Off on Orders Above ₹500',
    description: 'Save ₹125 instantly on orders worth ₹500 or more.\nApply coupon code HUT125 at checkout.\nValid on pizzas, sides, beverages, and desserts.\nAvailable for both new and existing Pizza Hut customers.',
    code: 'HUT125',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'PROMO OFFER',
    title: 'Pizza Hut Coupon Code – Enjoy ₹100 Off on Orders Above ₹400',
    description: 'Get a flat ₹100 discount on a minimum purchase of ₹400.\nUse coupon code HUT100 to claim the offer.\nApplicable on eligible Pizza Hut menu items.\nValid for online orders for a limited time.',
    code: 'HUT100',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'BUY 1 GET 3 FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'MEAL DEAL',
    title: "Pizza Hut Discount Code – Order One Pizza, Enjoy 3 Extra Items at No Cost",
    description: "Order one Medium or Thin 'N Crispy Pizza to unlock the deal.\nReceive Classic Breadstix, Cheezy Sprinkled Fries, and Pepsi for free.\nChoose your favorite pizza and enjoy a complete meal.\nAvailable for a limited promotional period.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'SAVE 36%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'COMBO MEALS',
    title: 'Pizza Hut Discount Code – Save Up to 36% on Double Treat Meal',
    description: 'Enjoy the Double Treat Meal starting at ₹449.\nSave up to 36% compared to regular menu prices.\nIncludes 2 Personal Pizzas and 1 Classic Breadstix.\nPerfect meal combo for two people.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE 25%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'FOOD ORDER',
    title: 'Pizza Hut Promo Code – Get 25% Off Your Food Order',
    description: 'Save 25% on pizzas, sides, drinks, and desserts.\nValid on orders of ₹600 or more.\nMaximum discount of ₹300 per order.\nOffer available for eligible online orders.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'SAVE UP TO ₹300',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'ONLINE ORDERS',
    title: 'Pizza Hut Promo Code – Save Up to ₹300 on Online Orders',
    description: 'Get 25% OFF, up to ₹300, on qualifying orders.\nMinimum cart value required is ₹600.\nValid on pizzas, beverages, sides, and desserts.\nDiscount does not apply to combo or deal meals.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹1,008',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'HUT TREAT BOX',
    title: 'Pizza Hut Voucher – Hut Treat Box with Dessert from ₹1,008',
    description: 'Order the Hut Treat Box starting at ₹1,008.\nIncludes 2 Medium Pizzas, 2 Breadstix, 2 Pepsi bottles, and a Divine Chocolate Tub.\nGreat value meal for sharing with family or friends.\nAvailable while the promotional offer lasts.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'MOMO PIZZA OFFER',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'SPECIALTY PIZZA',
    title: 'Pizza Hut Voucher – Flat ₹125 Off on Momo Pizza Orders',
    description: 'Enjoy ₹125 OFF on Momo Pizza orders above ₹500.\nRedeem the offer using the eligible promo code.\nApplicable on pizzas, drinks, sides, and desserts.\nValid for first-time buyers as well as existing Pizza Hut users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
