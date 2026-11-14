// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'SPECIAL' | 'DEAL' | 'NEW USER' | 'CASHBACK';
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

export const MAGICPIN_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'SAVE 100%',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'BRAND VOUCHERS',
    title: 'Magicpin Coupon Code – Save 100% on Brand Vouchers',
    description: 'Get 100% savings on selected brand vouchers on Magicpin.',
    points: [
      'Save 100% on eligible Bata, Mamaearth and Wrogn vouchers.',
      'You do not need any discount code for this offer.',
      'Use vouchers of your favourite brands without paying extra.',
      'Check if the vouchers are available before you buy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'BEAUTY & GROOMING',
    title: 'Magicpin Coupon Code – Beauty & Grooming Up to 80% OFF',
    description: 'Buy from top beauty brands with discounts of up to 80%.',
    points: [
      'Save up to 80% on beauty and grooming products.',
      'Shop from brands like Plum, Boddess, Buywow, Mamaearth and Nykaa.',
      'Find skincare, makeup and personal care basics.',
      'Get big savings on popular beauty collections.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'DINE-OUT',
    title: 'Magicpin Promo Code – Dine-Out Up to 70% OFF',
    description: 'Save more when you eat at your favourite restaurants.',
    points: [
      'Get up to 70% OFF on eligible dine-out offers.',
      'Available at McDonald’s, Oven Story, Lunch Box and other partner brands.',
      'See restaurant deals on the Magicpin app.',
      'Plan your next meal and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FASHION',
    title: 'Magicpin Promo Code – Fashion Brands Up to 65% OFF',
    description: 'Give your wardrobe a fresh look with discounts on top fashion brands.',
    points: [
      'Save up to 65% on selected fashion brands.',
      'Shop from Max, Puma, Peter England and many more.',
      'Find clothing and accessories at lower prices.',
      'Grab these limited-time fashion deals before they end.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'SITEWIDE',
    title: 'Magicpin Discount Code – Sitewide Up to 60% OFF',
    description: 'Save in many categories with the Magicpin sitewide sale.',
    points: [
      'Get up to 60% OFF on eligible products.',
      'Shop Grocery, Dine-Out, Beauty and more.',
      'See brands like Myntra, McDonald’s, Bata, Boat, Mamaearth and Aurelia.',
      'Get savings on thousands of products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 50% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FIRST ORDER',
    title: 'Magicpin Discount Code – First Order Up to 50% OFF + Cashback',
    description: 'New users can get a discount and cashback on their first purchase.',
    points: [
      'Save up to 50% on your first Magicpin order.',
      'Get extra cashback in your Magicpin wallet.',
      'This offer is only for first-time users.',
      'Complete your first purchase to get both benefits.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'GROCERY',
    title: 'Magicpin Voucher Code – Grocery Essentials Up to 50% OFF',
    description: 'Save on daily needs with special grocery offers.',
    points: [
      'Get up to 50% OFF on grocery essentials.',
      'Shop from Blinkit, Ratnadeep, ITC Store and other partner stores.',
      'Stock up on daily household items for less.',
      'See grocery deals near you on the Magicpin app.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FOSSIL VOUCHER',
    title: 'Magicpin Voucher Code – Fossil Voucher Flat 50% OFF',
    description: 'Get a Fossil voucher at 50% off and save a little more at checkout.',
    points: [
      'Get a flat 50% OFF on a Fossil voucher worth ₹1,000.',
      'Use the available coupon code at checkout to get an extra 5% OFF.',
      'Get more value on your Fossil shopping.',
      'Complete your purchase to get both savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'MCDONALD’S',
    title: 'Magicpin Referral Code – McDonald’s Voucher Flat 50% OFF',
    description: 'Get a McDonald’s voucher at half the price on Magicpin.',
    points: [
      'Save a flat 50% on a McDonald’s voucher available for ₹45.',
      'Use the voucher on a regular meal when you buy for ₹389.',
      'This offer is valid on online orders only.',
      'Enjoy your favourite McDonald’s meal and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'WEEKEND DINING',
    title: 'Magicpin Referral Code – Weekend Dining Up to 40% OFF',
    description: 'Save on your restaurant bill when you go out on weekends.',
    points: [
      'Get up to 40% OFF at selected partner restaurants.',
      'See dining offers near you on Magicpin.',
      'Pick from participating restaurants in your area.',
      'Make your weekend meals cheaper.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'SPA & SALON',
    title: 'Magicpin Cashback Offers – Spa Treatments Up to 35% OFF',
    description: 'Relax for less with premium salon and spa offers.',
    points: [
      'Save up to 35% on premium spa treatments.',
      'Book your appointment on the Magicpin platform.',
      'See wellness offers at participating spas.',
      'Get quality treatments at lower prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT 35% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'OVEN STORY',
    title: 'Magicpin Cashback Offers – Oven Story Pizza Flat 35% OFF',
    description: 'Order your favourite pizza and get instant savings.',
    points: [
      'Get a flat 35% OFF on Oven Story Pizza orders.',
      'Save on eligible food orders through Magicpin.',
      'Enjoy tasty pizza at a lower price.',
      'Check if the offer is available before you place your order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 32% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'CAFE COFFEE DAY',
    title: 'Magicpin Wallet Offers – Cafe Coffee Day Flat 32% OFF',
    description: 'Save on your next coffee break at Cafe Coffee Day.',
    points: [
      'Get a flat 32% OFF on Cafe Coffee Day orders.',
      'This offer works on orders starting from ₹750.',
      'Enjoy coffee and snacks for less.',
      'Order through eligible Magicpin offers to save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 30% CB',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'DINE-OUT',
    title: 'Magicpin Wallet Offers – Up to 30% Cashback on Dining Out',
    description: 'Get cashback when you eat at partner restaurants through Magicpin.',
    points: [
      'Get up to 30% cashback on eligible dining payments.',
      'Pay through the Magicpin app to get the benefit.',
      'Find partner restaurants near you with cashback offers.',
      'Cashback is available on eligible dine-out purchases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 30% CB',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FITNESS',
    title: 'Magicpin Bank Offers – Fitness Bookings Up to 30% Cashback',
    description: 'Save more on fitness activities with cashback rewards.',
    points: [
      'Get up to 30% cashback, up to ₹1,000, on eligible bookings.',
      'Valid for selected gyms, yoga studios and boxing centres.',
      'Extra vouchers are available with eligible bookings.',
      'Check the participating fitness partners before you book.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'GROCERY',
    title: 'Magicpin Bank Offers – Grocery Deals Up to 25% OFF',
    description: 'Buy daily needs from nearby stores and save more.',
    points: [
      'Get up to 25% OFF on groceries and household items.',
      'Shop from participating local grocery stores.',
      'Find deals near you directly on the Magicpin app.',
      'Save on your daily shopping expenses.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'PHARMACY',
    title: 'Magicpin Coupon Code – Pharmacy Products Up to 25% OFF',
    description: 'Save on health products from trusted pharmacy brands.',
    points: [
      'Get up to 25% OFF on eligible pharmacy products.',
      'See offers from Apollo Pharmacy, Himalaya and more.',
      'Buy health essentials at lower prices.',
      'See participating pharmacy deals on Magicpin.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-18',
    badge: 'FLAT 20% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'SALON & SPA',
    title: 'Magicpin Coupon Code – Flat 20% OFF Salon & Spa Bookings',
    description: 'Book your next beauty appointment and get instant savings.',
    points: [
      'Get a flat 20% OFF on salon and spa bookings.',
      'Pick from participating salons near you.',
      'Save on your total service bill.',
      'Book your appointment through Magicpin.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'GIFT CARDS',
    title: 'Magicpin Promo Code – Gift Cards Up to 20% OFF',
    description: 'Buy digital gift cards at special discounts.',
    points: [
      'Save up to 20% on eligible gift cards.',
      'Available for Nykaa, Amazon Pay, Myntra, BigBasket and more.',
      'Get instant discounts on digital vouchers and recharges.',
      'Pick from popular brands in many categories.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT 15% CB',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'NEARBY STORES',
    title: 'Magicpin Promo Code – Flat 15% Cashback at Nearby Stores',
    description: 'Get cashback when you shop at local partner stores.',
    points: [
      'Get a flat 15% cashback on eligible purchases.',
      'Cashback is added directly to your Magicpin wallet.',
      'See participating stores near your location.',
      'Shop locally and earn rewards.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-21',
    badge: '10% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FASHION & LIFESTYLE',
    title: 'Magicpin Discount Code – 10% Cashback on Fashion & Lifestyle',
    description: 'Get rewards when you shop for fashion and lifestyle products.',
    points: [
      'Get 10% cashback on eligible fashion and lifestyle purchases.',
      'Cashback is added to your Magicpin wallet.',
      'Shop from participating partner outlets.',
      'Save more while updating your wardrobe.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-22',
    badge: 'UP TO ₹2,000 OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'WATCHES',
    title: 'Magicpin Discount Code – Watches Up to ₹2,000 OFF',
    description: 'Buy stylish watches with great savings.',
    points: [
      'Save up to ₹2,000 on selected watches.',
      'See a wide range of watch collections.',
      'Get discounts on eligible brands.',
      'Upgrade your accessories and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-23',
    badge: '₹100 BONUS',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'MAGICPOINTS',
    title: 'Magicpin Voucher Code – ₹100 Magicpoints for New Users',
    description: 'Sign up and get bonus Magicpoints right away.',
    points: [
      'New users get Magicpoints worth ₹100.',
      'The bonus is given after successful registration.',
      'Use your Magicpoints on eligible purchases.',
      'This offer is valid for first-time users only.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-24',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'GROCERY DELIVERY',
    title: 'Magicpin Voucher Code – Free Grocery Delivery',
    description: 'Save on delivery charges for your next grocery order.',
    points: [
      'Get free delivery on eligible grocery orders.',
      'Order your daily needs through the Magicpin app.',
      'No extra delivery fee on eligible orders.',
      'Get easy delivery at your doorstep.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-25',
    badge: 'DEALS FROM ₹9',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1A1A1A]',
    color: '#1A1A1A',
    type: 'FOOD & BEVERAGES',
    title: 'Magicpin Referral Code – Food Deals Starting from ₹9',
    description: 'Get tasty food at budget-friendly prices.',
    points: [
      'Order Classic Pizza or Crispy Burger from just ₹9.',
      'Get affordable food deals through Magicpin.',
      'See eligible partner restaurants for this offer.',
      'Order your favourite snacks without going over your budget.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
