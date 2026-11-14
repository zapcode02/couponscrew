// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CODE' | 'DEAL';
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
export const LIFESTYLE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'FOOTWEAR & HOME',
    title: 'Lifestyle Coupon Code – Up to 70% OFF on Footwear & Home Furnishings',
    description: 'Save up to 70% on stylish footwear and home furnishing items.',
    points: [
      'Get discounts of up to 70% on selected footwear and home products.',
      'Buy from top brands in many categories.',
      'Give your home and wardrobe a fresh look and spend less.',
      'See limited-time savings on popular collections.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'MEN FASHION',
    title: 'Lifestyle Coupon Code – Up to 60% OFF Men’s Fashion',
    description: 'Update your wardrobe with men’s fashion at up to 60% OFF.',
    points: [
      'Save up to 60% on shirts, T-shirts, denims and casual wear.',
      'Find the latest styles for every occasion.',
      'Buy everyday fashion at lower prices.',
      'Pick your favourite looks before the stock finishes.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: '60% + 10% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SITEWIDE',
    title: 'Lifestyle Promo Code – Up to 60% OFF + Extra 10% OFF Sitewide',
    description: 'Save even more on Lifestyle with an extra discount at checkout.',
    points: [
      'Get up to 60% OFF on eligible products.',
      'Use code SELECT10 to get an extra 10% OFF.',
      'Prices start from only ₹29.',
      'Buy fashion, beauty and lifestyle basics in one place.'
    ],
    code: 'SELECT10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'MEN TOPWEAR',
    title: 'Lifestyle Promo Code – Men’s Polo & Topwear Up to 60% OFF',
    description: 'Buy premium men’s topwear at great prices.',
    points: [
      'Save up to 60% on men’s polo shirts and topwear.',
      'Prices start from only ₹359.',
      'Pick from casual and daily wear basics.',
      'Refresh your wardrobe and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'KIDS WEAR',
    title: 'Lifestyle Discount Code – Up to 50% OFF Kids Clothing & Accessories',
    description: 'Save on trendy fashion for kids.',
    points: [
      'Get up to 50% OFF on kids’ clothing, footwear and accessories.',
      'See stylish collections for every age group.',
      'Find daily wear basics at lower prices.',
      'Update your child’s wardrobe and save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 50% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'EOSS SALE',
    title: 'Lifestyle Discount Code – End of Season Sale Up to 50% OFF',
    description: 'Get extra savings in the Lifestyle End of Season Sale.',
    points: [
      'Get up to 50% OFF on selected products.',
      'Use code LS500 to save an extra ₹500 on orders above ₹2,500.',
      'Shop in many Lifestyle categories.',
      'Complete your purchase before the sale ends.'
    ],
    code: 'LS500',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'BUY 1 GET 1',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'BOGO',
    title: 'Lifestyle Voucher Code – Buy 1 Get 1 FREE + Extra 10% OFF',
    description: 'Double your savings with this special BOGO offer.',
    points: [
      'Buy one eligible item and get another one free.',
      'Use code SELECT10 to get an extra 10% OFF.',
      'Prices start from only ₹349.',
      'Buy eligible products to get both offers.'
    ],
    code: 'SELECT10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 50% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'WINTER WEAR',
    title: 'Lifestyle Voucher Code – Winter Wear Up to 50% OFF',
    description: 'Stay warm with discounts on men’s winter basics.',
    points: [
      'Save up to 50% on selected winter wear.',
      'Use code FR5 to get an extra 5% OFF on orders above ₹999.',
      'Buy jackets, sweatshirts and other seasonal basics.',
      'Get extra savings this winter season.'
    ],
    code: 'FR5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'BAGS & SHOES',
    title: 'Lifestyle Referral Code – Bags & Shoes Up to 50% OFF',
    description: 'Buy fashionable bags and footwear for less.',
    points: [
      'Save up to 50% on handbags, sandals, heels and shoes.',
      'Prices start from only ₹74.',
      'See styles for daily use and special occasions.',
      'Upgrade your accessories without spending too much.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT 50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'KIDS WEAR',
    title: 'Lifestyle Referral Code – Flat 50% OFF Kids’ Wear',
    description: 'Give your child’s wardrobe a fresh look at half the price.',
    points: [
      'Get a flat 50% OFF on kids’ clothing.',
      'Prices start from only ₹199.',
      'See a wide range of stylish outfits.',
      'Get great value on daily wear basics.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'PLUS SIZE',
    title: 'Lifestyle Cashback Offers – Flat 50% OFF Plus Size Fashion',
    description: 'Find stylish plus-size fashion at lower prices.',
    points: [
      'Save a flat 50% on Nexus plus-size tops and bottoms.',
      'You do not need any coupon code.',
      'See fashionable designs for every occasion.',
      'Get premium styles at discounted prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT 40% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'WOMEN FASHION',
    title: 'Lifestyle Cashback Offers – Flat 40% OFF Women’s Fashion',
    description: 'Buy ethnic and western wear with great discounts.',
    points: [
      'Get a flat 40% OFF on women’s fashion.',
      'Buy kurtas, dresses, tops and western wear.',
      'Update your wardrobe with stylish collections.',
      'Limited-time savings are available on selected products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 40% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'CELIO MEN',
    title: 'Lifestyle Wallet Offers – Flat 40% OFF Celio Men’s Fashion',
    description: 'Save on premium men’s clothing from Celio.',
    points: [
      'Get a flat 40% OFF on Celio clothing.',
      'Buy shirts, T-shirts, pants and jeans.',
      'Refresh your wardrobe with premium styles.',
      'This is a limited-time offer on selected products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'WESTERN WEAR',
    title: 'Lifestyle Wallet Offers – Women’s Western Wear Up to 30% OFF',
    description: 'See thousands of women’s western wear styles at lower prices.',
    points: [
      'Save up to 30% on selected western wear.',
      'Choose from more than 3,000 stylish designs.',
      'Find dresses, tops and more for every occasion.',
      'Get fashionable looks at affordable prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'MEN LINEN',
    title: 'Lifestyle Bank Offers – Men’s Linen Up to 25% OFF',
    description: 'Buy comfortable linen styles and save more.',
    points: [
      'Get up to 25% OFF on men’s linen clothing.',
      'Prices start from ₹849.',
      'Pick from linen tops and bottoms.',
      'Update your wardrobe with light, breathable fabrics.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: '20% + 5% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'WATCHES',
    title: 'Lifestyle Bank Offers – Watches Flat 20% OFF + Extra 5% OFF',
    description: 'Save more on branded watches.',
    points: [
      'Get a flat 20% OFF on selected watches.',
      'Use code LESS5 to get an extra 5% OFF on orders above ₹2,199.',
      'Buy stylish watches for every occasion.',
      'Use both offers together for extra savings.'
    ],
    code: 'LESS5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'EXTRA 20% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'LINGERIE',
    title: 'Lifestyle Coupon Code – Extra 20% OFF Lingerie & Sleepwear',
    description: 'Save more on lingerie and sleepwear collections.',
    points: [
      'Get an extra 20% OFF on orders above ₹999.',
      'Use code LG20 at checkout.',
      'Buy comfortable lingerie and sleepwear.',
      'Your order must meet the minimum value to get the discount.'
    ],
    code: 'LG20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'FLAT 10% OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'LINGERIE',
    title: 'Lifestyle Coupon Code – Flat 10% OFF Lingerie & Sleepwear',
    description: 'Get instant savings on lingerie basics.',
    points: [
      'Get a flat 10% OFF on eligible purchases.',
      'Use code LG10 at checkout.',
      'Buy sleepwear and lingerie collections.',
      'Save instantly on your favourite styles.'
    ],
    code: 'LG10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'EXTRA ₹200 OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'APP ORDER',
    title: 'Lifestyle Promo Code – Extra ₹200 OFF First App Order',
    description: 'Get extra savings on your first purchase on the app.',
    points: [
      'Save an extra ₹200 on orders above ₹999.',
      'Use code APP200 at checkout.',
      'This offer is valid on your first order on the Lifestyle app.',
      'Meet the minimum order value to get the discount.'
    ],
    code: 'APP200',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'CODE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'NEW USER',
    title: 'Lifestyle Promo Code – Flat ₹100 OFF for New Users',
    description: 'New customers can save on their first Lifestyle order.',
    points: [
      'Get a flat ₹100 OFF on orders above ₹999.',
      'Use code FLAT100 at checkout.',
      'This offer is only for new users.',
      'Complete your first purchase to get the discount.'
    ],
    code: 'FLAT100',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SHIPPING',
    title: 'Lifestyle Discount Code – Free Shipping Above ₹499',
    description: 'Get free delivery on eligible Lifestyle orders.',
    points: [
      'Get free shipping on orders above ₹499.',
      'You do not need any coupon code.',
      'Shop online without paying any delivery charges.',
      'Meet the minimum order value to get the benefit.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
