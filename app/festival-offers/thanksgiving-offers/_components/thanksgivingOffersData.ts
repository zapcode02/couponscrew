export interface Offer {
  id: string;
  brandName: string;
  brandLogo: string;
  dealUrl: string;
  storeSlug?: string;
  category: string;
  badgeType: string;
  discountValue: string;
  scopeText: string;
  title: string;
  description: string;
  points: string[];
  isVerified: boolean;
  usedCount: string;
  validTill: string;
  isExpiringSoon: boolean;
  code?: string;
  userType?: string;
}

export const THANKSGIVING_OFFERS_DATA: Offer[] = [
  // --- DOMINO'S OFFERS ---
  {
    id: 'tg-dominos-1',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'APP EXCLUSIVE',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹200 OFF',
    scopeText: 'APP EXCLUSIVE',
    title: "Save Up to ₹200 on Your Domino's Order + Free Delivery",
    description: "Order on the Domino's app today and save up to ₹200 instantly — free delivery included with no additional charges on eligible orders.",
    points: [
      "Valid exclusively on Domino's mobile app orders.",
      'Includes free delivery with no extra charges on eligible carts.',
      'Discount automatically calculated at checkout with promo code.'
    ],
    isVerified: true,
    usedCount: '4.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'PIZZAPARTY',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-2',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹200 OFF',
    scopeText: 'PIZZA',
    title: "Up to ₹200 Off on Your Favourite Domino's Pizza Order",
    description: "One of the most used Domino's pizza deals on CouponsCrew — apply this code at checkout and save up to ₹200 on selected orders today.",
    points: [
      'Applicable on medium and large pizza variants.',
      'Can be combined with ongoing store promotional pricing.',
      'Valid for delivery and takeaway orders.'
    ],
    isVerified: true,
    usedCount: '3.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'PARTY200',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-3',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'COMBO',
    badgeType: 'FLAT',
    discountValue: 'FLAT 30% OFF',
    scopeText: 'COMBO',
    title: 'Flat 30% Off — Up to ₹500 Off on Orders Above ₹1,500',
    description: "A reliable Domino's pizza deal for larger group orders — flat 30% off capped at ₹500 when your cart crosses ₹1,500.",
    points: [
      'Requires a minimum cart value of ₹1,500 to qualify.',
      'Maximum savings capped at ₹500 per transaction.',
      'Ideal for party combos and large family gatherings.'
    ],
    isVerified: true,
    usedCount: '2.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'PARTY500',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-4',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹90 OFF',
    scopeText: 'PIZZA',
    title: "Flat ₹90 Off Instantly + ₹25 Cashback on Your Next Domino's Order",
    description: "Get ₹90 off on your current order and ₹25 cashback credited to your Domino's wallet for the next — minimum cart ₹199, one of the better today's offer at Domino's for smaller orders.",
    points: [
      'Minimum order value required is ₹199.',
      'Instant ₹90 direct discount at checkout.',
      '₹25 wallet cashback credited post-successful order delivery.'
    ],
    isVerified: true,
    usedCount: '3.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'NEW90',
    userType: 'All Users'
  },
  {
    id: 'tg-dominos-5',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹200 OFF',
    scopeText: 'PIZZA',
    title: 'Up to ₹200 Off on Pizza + ₹30 Extra Cashback Instantly',
    description: "Save up to ₹200 on your Domino's pizza order and get an additional ₹30 instant cashback on top — apply the code at checkout to unlock both savings.",
    points: [
      'Double benefit of up to ₹200 discount + ₹30 cashback.',
      'Instant wallet credit upon promo verification.',
      'Valid across all core pizza menu categories.'
    ],
    isVerified: true,
    usedCount: '2.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'GRAB0539',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-6',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹125 OFF',
    scopeText: 'PIZZA',
    title: "Flat ₹125 Off Your Domino's Order — No Minimum Cart Required",
    description: "One of the few active Domino's pizza promo codes with no minimum order value — get ₹125 straight off your bill, whatever the order size.",
    points: [
      'No minimum order value constraint.',
      'Flat ₹125 discount applied directly to final bill.',
      'Valid for both single pizzas and side orders.'
    ],
    isVerified: true,
    usedCount: '4.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'CART125',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-7',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹250 OFF',
    scopeText: 'PIZZA',
    title: 'Up to ₹250 Off on Veg Pizza Orders | Min Cart ₹699',
    description: 'Save up to ₹250 on your veg pizza order when cart value is ₹699 or above — one of the better Domino\'s recent offers for vegetarian pizza lovers.',
    points: [
      'Requires a minimum order value of ₹699.',
      'Specifically tailored for vegetarian pizza options.',
      'Maximum savings of up to ₹250 at checkout.'
    ],
    isVerified: true,
    usedCount: '2.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'PIZZA250',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-8',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'FLAT',
    discountValue: '₹100 OFF',
    scopeText: 'PIZZA',
    title: "₹100 Off Your Domino's Order + ₹50 Extra Cashback Instantly",
    description: 'Get ₹100 off on your order and an additional ₹50 instant cashback when you apply this Domino\'s discount code at checkout — no minimum cart value stated.',
    points: [
      'Flat ₹100 instant bill reduction.',
      'Includes ₹50 instant cashback into Domino\'s account.',
      'No minimum cart value restriction.'
    ],
    isVerified: true,
    usedCount: '3.6k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'NEWBIE100',
    userType: 'All Users'
  },
  {
    id: 'tg-dominos-9',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'PIZZA',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹100 OFF',
    scopeText: 'PIZZA',
    title: 'Up to ₹100 Off on Orders Above ₹499 | Valid During Select Hours',
    description: 'Save up to ₹100 on delivery orders of ₹499 and above — valid between 10 AM–7 PM and 11 PM onwards through store operating hours.',
    points: [
      'Minimum cart value requirement of ₹499.',
      'Time-restricted offer (10 AM–7 PM and 11 PM onwards).',
      'Valid on home delivery orders.'
    ],
    isVerified: true,
    usedCount: '1.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'TREAT100',
    userType: 'Existing Users'
  },
  {
    id: 'tg-dominos-10',
    brandName: "Domino's",
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp',
    dealUrl: 'https://www.dominos.co.in/',
    storeSlug: 'dominos-coupon-code',
    category: 'APP EXCLUSIVE',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹90 OFF',
    scopeText: 'APP EXCLUSIVE',
    title: "Flat ₹90 Off + ₹25 Wallet Cashback on Your Domino's App Order",
    description: "Order on the Domino's app and get ₹90 off instantly, plus ₹25 cashback credited to your Domino's wallet — minimum cart ₹199.",
    points: [
      'App-exclusive discount for mobile users.',
      'Requires minimum cart value of ₹199.',
      '₹25 wallet cashback added upon successful completion.'
    ],
    isVerified: true,
    usedCount: '2.7k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'WELCOME90',
    userType: 'Existing Users'
  },

  // --- KFC OFFERS ---
  {
    id: 'tg-kfc-1',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'BUCKET DEALS',
    badgeType: 'UP TO',
    discountValue: 'UP TO ₹100 OFF',
    scopeText: 'BUCKET DEALS',
    title: 'Up to ₹100 OFF on Orders Above ₹699',
    description: 'Save up to ₹100 on your KFC order when you spend ₹699 or more — valid on web and app.',
    points: [
      'Valid on orders equal to or exceeding ₹699.',
      'Applicable on both official KFC website and mobile app.',
      'Covers chicken buckets, burgers, and side items.'
    ],
    isVerified: true,
    usedCount: '3.4k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-2',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'COMBO MEALS',
    badgeType: 'UP TO',
    discountValue: 'UP TO 54% OFF',
    scopeText: 'COMBO MEALS',
    title: 'KFC Wednesday Specials: Up to 54% OFF',
    description: 'Make the most of your midweek cravings — save up to 54% on KFC orders every Wednesday.',
    points: [
      'Special promotional pricing active every Wednesday.',
      'Up to 54% discount on selected bucket combos.',
      'Auto-applied at checkout without explicit coupon code.'
    ],
    isVerified: true,
    usedCount: '4.8k',
    validTill: 'Every Wednesday',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-3',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'APP EXCLUSIVE',
    badgeType: 'FLAT',
    discountValue: 'FLAT 50% OFF',
    scopeText: 'APP EXCLUSIVE',
    title: 'Flat 50% OFF on KFC Food Orders (Every Friday)',
    description: 'Every Friday just got tastier — get a flat 50% off on KFC food orders above ₹250 at selected stores.',
    points: [
      'Friday special discount on KFC app orders.',
      'Requires a minimum order value of ₹250.',
      'Available across participating KFC outlets.'
    ],
    isVerified: true,
    usedCount: '3.9k',
    validTill: 'Every Friday',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-4',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'COMBO MEALS',
    badgeType: 'LUNCH SPECIAL',
    discountValue: 'FROM ₹299',
    scopeText: 'COMBO MEALS',
    title: 'Lunch Special: Meals Starting at ₹299',
    description: 'Enjoy a satisfying KFC lunch without the splurge — complete meals starting at just ₹299.',
    points: [
      'Affordable lunch combo pricing starting from ₹299.',
      'Includes main item, side snack, and beverage options.',
      'Valid during afternoon lunch hours.'
    ],
    isVerified: true,
    usedCount: '2.5k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-5',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'SNACKS',
    badgeType: 'DEAL',
    discountValue: 'FROM ₹99',
    scopeText: 'SNACKS',
    title: 'KFC Rolls Starting from ₹99',
    description: 'Get your hands on KFC chicken and veg rolls starting at just ₹99 — Thai Spicy, American Nashville, and Indian Spicy Veg.',
    points: [
      'Rolls available in Thai Spicy, Nashville & Veg flavors.',
      'Starting price tag of just ₹99.',
      'Valid for dine-in, takeaway, and delivery.'
    ],
    isVerified: true,
    usedCount: '2.9k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-6',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'BUCKET DEALS',
    badgeType: 'DEAL',
    discountValue: '2 PCS AT ₹99',
    scopeText: 'BUCKET DEALS',
    title: '2 Pcs Hot & Crispy Chicken at Just ₹99',
    description: "Get 2 pieces of KFC's iconic Hot & Crispy Chicken for only ₹99 on orders above ₹499.",
    points: [
      'Add 2 pcs Hot & Crispy chicken for ₹99.',
      'Requires a minimum order value of ₹499.',
      'Valid on web and app checkouts.'
    ],
    isVerified: true,
    usedCount: '3.1k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-7',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'APP EXCLUSIVE',
    badgeType: 'FREE',
    discountValue: 'FREE ZINGER',
    scopeText: 'APP EXCLUSIVE',
    title: 'Free Classic Zinger Burger on Your First Order',
    description: 'First-time KFC order? Score a free Classic Zinger Burger on orders above ₹499 — web and app only.',
    points: [
      'Exclusive welcome deal for new user accounts.',
      'Free Classic Zinger Burger added on orders above ₹499.',
      'Valid once per user upon registration.'
    ],
    isVerified: true,
    usedCount: '4.2k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'New Users'
  },
  {
    id: 'tg-kfc-8',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'COMBO MEALS',
    badgeType: 'MEAL DEALS',
    discountValue: 'FROM ₹189',
    scopeText: 'COMBO MEALS',
    title: 'Box Meals Starting from ₹189',
    description: "Dig into KFC's value Box Meals starting at ₹189 — choose from Popcorn Biryani, Classic Zinger, Tandoori Zinger, and more.",
    points: [
      'Value meal options starting at ₹189.',
      'Choice between Popcorn Biryani, Classic & Tandoori Zinger.',
      'Complete meal box with fries and drinks.'
    ],
    isVerified: true,
    usedCount: '3.7k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-kfc-9',
    brandName: 'KFC',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp',
    dealUrl: 'https://online.kfc.co.in/',
    storeSlug: 'kfc-coupon-code',
    category: 'SNACKS',
    badgeType: 'DEAL',
    discountValue: 'FROM ₹109',
    scopeText: 'SNACKS',
    title: 'KFC Snackers Starting from ₹109',
    description: 'Satisfy your snack cravings with KFC Snackers — Regular Popcorn, Popcorn & Fries, and more starting at ₹109.',
    points: [
      'Light snacking range starting at ₹109.',
      'Includes Regular Popcorn and Popcorn & Fries combos.',
      'Great for quick side orders.'
    ],
    isVerified: true,
    usedCount: '2.1k',
    validTill: 'Limited Period',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- ZOMATO OFFERS ---
  {
    id: 'tg-zomato-1',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹200 OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Flat ₹200 OFF on Selected Food Orders',
    description: 'Get ₹200 instant savings on your next Zomato food order from selected restaurant partners.',
    points: [
      'Flat ₹200 discount applied at checkout.',
      'Valid on participating restaurant partner listings.',
      'Requires promo code application before payment.'
    ],
    isVerified: true,
    usedCount: '4.6k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'GET200',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-2',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹150 OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Flat ₹150 OFF on Food Orders',
    description: 'Order from your favourite restaurants and save ₹150 instantly — just apply the code at checkout.',
    points: [
      'Flat ₹150 instant savings on online orders.',
      'Valid across top local restaurant brands.',
      'Applicable on Zomato mobile app & web.'
    ],
    isVerified: true,
    usedCount: '3.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'GET150',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-3',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹125 OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Flat ₹125 OFF on Selected Food Orders',
    description: 'Save ₹125 flat on delicious meals from handpicked restaurant partners on Zomato.',
    points: [
      'Flat ₹125 discount on selected restaurant partners.',
      'Instant deduction on cart summary page.',
      'Can be used once per user account.'
    ],
    isVerified: true,
    usedCount: '3.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'GET125',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-4',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'FLAT',
    discountValue: 'FLAT ₹100 OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Flat ₹100 OFF — No Minimum Order Required',
    description: 'Get ₹100 instant discount on restaurant-style meals with no minimum cart value needed.',
    points: [
      'No minimum order value threshold required.',
      'Flat ₹100 direct reduction on bill amount.',
      'Valid across all food delivery items.'
    ],
    isVerified: true,
    usedCount: '5.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'GET100',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-5',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'GOLD MEMBERSHIP',
    badgeType: 'FLASH SALE',
    discountValue: 'GOLD AT ₹1',
    scopeText: 'GOLD MEMBERSHIP',
    title: 'Zomato Gold Flash Sale: 3 Months at Just ₹1',
    description: 'Get a 3-month Zomato Gold subscription for only ₹1 during this limited-time flash sale — open to all users.',
    points: [
      '3-month Zomato Gold membership for just ₹1.',
      'Unlocks free delivery on eligible orders.',
      'Limited-time promotional flash sale.'
    ],
    isVerified: true,
    usedCount: '6.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-6',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'BANK OFFER',
    badgeType: 'BANK OFFER',
    discountValue: 'FLAT 10% OFF',
    scopeText: 'BANK OFFER',
    title: 'Flat 10% OFF Using IDFC Bank Cards',
    description: 'Pay with your IDFC Bank debit card and get a flat 10% discount on food orders above ₹299.',
    points: [
      'Requires IDFC Bank debit card payment.',
      'Minimum transaction amount of ₹299.',
      'Flat 10% instant discount at checkout.'
    ],
    isVerified: true,
    usedCount: '1.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'IDFCSWYP',
    userType: 'Existing Users'
  },
  {
    id: 'tg-zomato-7',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'BANK OFFER',
    badgeType: 'BANK OFFER',
    discountValue: 'FLAT 10% OFF',
    scopeText: 'BANK OFFER',
    title: 'Flat 10% OFF Using Standard Chartered DigiSmart Credit Card',
    description: 'Save 10% up to ₹150 on Zomato orders when you pay via Standard Chartered DigiSmart credit card.',
    points: [
      'Exclusive for Standard Chartered DigiSmart cardholders.',
      '10% discount capped up to a maximum of ₹150.',
      'Applied upon entering card credentials and code.'
    ],
    isVerified: true,
    usedCount: '1.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'DIGISMART',
    userType: 'Existing Users'
  },
  {
    id: 'tg-zomato-8',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'FLAT',
    discountValue: 'FLAT 10% OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Flat 10% OFF on Orders Over ₹199',
    description: 'Save on tasty meals with a flat 10% discount on your Zomato order — valid for all users on orders above ₹199.',
    points: [
      'Requires a minimum order value of ₹199.',
      'Flat 10% percentage discount.',
      'Open to all registered Zomato users.'
    ],
    isVerified: true,
    usedCount: '2.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'TASTY',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-9',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'FOOD DELIVERY',
    badgeType: 'UP TO',
    discountValue: 'UP TO 50% OFF',
    scopeText: 'FOOD DELIVERY',
    title: 'Up to 50% OFF (Max ₹100) on Favourite Meals',
    description: 'Save up to 50% — capped at ₹100 — on meals from your favourite Zomato restaurant partners.',
    points: [
      '50% discount capped at a maximum of ₹100.',
      'Valid on selected partner restaurant menus.',
      'Instant deduction upon applying code MUNCHBLISS.'
    ],
    isVerified: true,
    usedCount: '3.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'MUNCHBLISS',
    userType: 'All Users'
  },
  {
    id: 'tg-zomato-10',
    brandName: 'Zomato',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp',
    dealUrl: 'https://www.zomato.com/',
    storeSlug: 'zomato-coupon-code',
    category: 'WALLET OFFER',
    badgeType: 'CASHBACK',
    discountValue: 'UP TO ₹100 CASHBACK',
    scopeText: 'WALLET OFFER',
    title: 'Up to ₹100 Cashback via Paytm UPI',
    description: 'Pay with Paytm UPI on Zomato and get up to ₹100 instant cashback directly to your Paytm wallet.',
    points: [
      'Valid on payments completed via Paytm UPI.',
      'Up to ₹100 instant wallet cashback credit.',
      'Applicable on eligible food delivery orders.'
    ],
    isVerified: true,
    usedCount: '2.7k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: 'PAYTMUPI',
    userType: 'Existing Users'
  }
];