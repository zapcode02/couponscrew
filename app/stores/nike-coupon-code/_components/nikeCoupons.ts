// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'STUDENT';
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

export const NIKE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'FOOTWEAR',
    title: 'Nike Coupon Code – Up to 50% Off Sneakers & Sportswear Shoes',
    description: 'Save up to 50% on Nike sneakers and sportswear shoes for men and women.',
    points: [
      'Get discounts of up to 50% on selected Nike sneakers and sportswear shoes.',
      'See daily-wear footwear for men and women at lower prices.',
      'Use the coupon code at checkout to get the available savings.',
      'Add to your footwear collection while this limited-time offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'RUNNING',
    title: 'Nike Coupon Code – Up to 45% Off Running Shoes & Gear',
    description: 'Save up to 45% on Nike running shoes and training gear.',
    points: [
      'Get up to 45% off on Nike running shoes and training gear.',
      'Buy running tights, clothing and accessories for daily workouts.',
      'Use the coupon code at checkout to save the most.',
      'Find good quality running items at lower prices for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'APPAREL',
    title: 'Nike Promo Code – Up to 45% Off Tops & T-Shirts',
    description: 'Buy Nike tops and tees at up to 45% off, starting from ₹847.',
    points: [
      'Save up to 45% on graphic tees, jerseys, tanks, vests and polos.',
      'Prices start from only ₹847 on selected styles.',
      'Use the coupon code at checkout to get eligible savings.',
      'Give your daily wardrobe a fresh look with premium Nike clothing.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SPORTSWEAR',
    title: 'Nike Promo Code – Flat 40% Off Sportswear Apparel',
    description: 'Get a flat 40% off on Nike sportswear clothing for daily comfort.',
    points: [
      'Get a flat 40% off on Nike t-shirts, shorts, joggers and sportswear.',
      'Buy comfortable clothing made for training and casual wear.',
      'Use the coupon code at checkout to get the available discount.',
      'Save a lot while adding to your activewear collection.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'NEW ARRIVALS',
    title: 'Nike Discount Code – Up to 40% Off New Arrivals',
    description: 'See the latest Nike collections with discounts of up to 40% in many categories.',
    points: [
      'Save up to 40% on new arrival shoes, clothing and accessories.',
      'Buy selected products starting from only ₹397.',
      'Use the coupon code at checkout for extra eligible savings.',
      'Find the newest Nike styles at lower prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'BASKETBALL',
    title: 'Nike Discount Code – Up to 40% Off Basketball Footwear',
    description: 'Save up to 40% on Nike basketball shoes made for playing on the court.',
    points: [
      'Get up to 40% off on selected Nike basketball footwear.',
      'Find court-ready shoes made for comfort and support.',
      'Use the coupon code at checkout to get the available savings.',
      'Improve your game with premium basketball shoes at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'RUNNING',
    title: 'Nike Voucher Code – Up to 40% Off Running Essentials',
    description: 'Buy Nike running items and save up to 40% on selected products.',
    points: [
      'Get up to 40% off on running shoes, tops, jackets, tights and shorts.',
      'See performance gear made for daily training.',
      'Use the coupon code at checkout to get eligible discounts.',
      'Complete your running kit while these limited-time savings are available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'BAGS & BACKPACKS',
    title: 'Nike Voucher Code – Up to 40% Off Bags & Backpacks',
    description: 'Save up to 40% on Nike bags and backpacks, with prices starting from only ₹895.',
    points: [
      'Get up to 40% off on school, college, laptop, duffle and gym bags.',
      'Selected Nike bags start from only ₹895.',
      'Use the coupon code at checkout to get eligible savings.',
      'Find the right backpack for travel, work or workouts at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'KIDS',
    title: 'Nike Referral Code – Up to 35% Off Kids’ Sportswear',
    description: 'Buy Nike kids’ shoes and sportswear and save up to 35%.',
    points: [
      'Save up to 35% on Nike sneakers, clothing and sportswear for kids.',
      'Pick from styles made for boys and girls.',
      'Use the coupon code at checkout to get the available discounts.',
      'Give your child’s wardrobe a fresh look with trusted Nike basics.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'JACKETS & GILETS',
    title: 'Nike Referral Code – Up to 30% Off Jackets & Gilets',
    description: 'Get up to 30% off on Nike jackets and gilets, starting from ₹2,797.',
    points: [
      'Save up to 30% on selected Nike jackets and gilets.',
      'Prices start from only ₹2,797 on eligible styles.',
      'Use the coupon code at checkout to get the available savings.',
      'Stay comfortable in outerwear made for training and daily wear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'PANTS & LEGGINGS',
    title: 'Nike Cashback Offers – Up to 30% Off Pants & Leggings',
    description: 'Save up to 30% on Nike bottoms, with styles starting from ₹1,795.',
    points: [
      'Get up to 30% off on joggers, sweatpants, tights, leggings and trousers.',
      'Buy selected Nike bottoms starting from only ₹1,795.',
      'Use the coupon code to get eligible discounts at checkout.',
      'Add to your activewear collection while the offer lasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'HOODIES',
    title: 'Nike Cashback Offers – Up to 30% Off Hoodies & Sweatshirts',
    description: 'Get up to 30% off on Nike hoodies and sweatshirts with premium performance technology.',
    points: [
      'Save up to 30% on selected hoodies and sweatshirts.',
      'Prices start from ₹2,595 on eligible products.',
      'See styles with Dri-FIT and Therma-FIT technology.',
      'Use the coupon code at checkout to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'JERSEYS & KITS',
    title: 'Nike Wallet Offers – Up to 30% Off Jerseys & Kits',
    description: 'Buy official Nike jerseys and kits at discounts of up to 30%.',
    points: [
      'Get up to 30% off on team jerseys and football kits.',
      'Pick from collections like Liverpool, PSG, Barcelona, Brazil and more.',
      'Prices start from ₹3,197 on selected jerseys.',
      'Use the coupon code at checkout to get the available savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SKATEBOARDING',
    title: 'Nike Wallet Offers – Up to 25% Off Skateboarding Essentials',
    description: 'Save up to 25% on Nike skateboarding footwear and clothing, starting from ₹1,277.',
    points: [
      'Get up to 25% off on selected skateboarding shoes and clothing.',
      'Buy skateboarding items with prices starting from ₹1,277.',
      'Use the coupon code at checkout to get eligible discounts.',
      'Get strong, long-lasting Nike skate styles at lower prices for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SPORTS BRAS',
    title: 'Nike Bank Offers – Up to 20% Off Sports Bras',
    description: 'Save up to 20% on Nike sports bras, with styles starting from ₹1,095.',
    points: [
      'Get up to 20% off on selected Nike sports bras.',
      'Buy supportive designs starting from only ₹1,095.',
      'Use the coupon code at checkout to get eligible savings.',
      'Find comfortable sports bras for training, workouts and daily fitness.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'AIR FORCE 1',
    title: 'Nike Bank Offers – Up to 20% Off Air Force 1 Collection',
    description: 'Save up to 20% on the famous Nike Air Force 1 collection, starting from ₹2,995.',
    points: [
      'Get up to 20% off on selected Nike Air Force 1 sneakers.',
      'See a wide range of colours and designs from ₹2,995.',
      'Use the coupon code at checkout to get the available savings.',
      'Add one of Nike’s most popular sneaker collections to your wardrobe for less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SPORTS COLLECTION',
    title: 'Nike Coupon Code – Up to 20% Off Sports Collection',
    description: 'Buy Nike’s latest sports collection and save up to 20% on selected products.',
    points: [
      'Get discounts of up to 20% on the latest sports collection.',
      'See shoes, clothing and accessories starting from ₹847.',
      'Use the coupon code at checkout to get eligible savings.',
      'Upgrade your sportswear with premium Nike products at lower prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SITEWIDE',
    title: 'Nike Coupon Code – Flat 10% Off Import Tax Reduction Offer',
    description: 'Get an instant 10% discount on eligible Nike orders with the import tax reduction offer.',
    points: [
      'Get a flat 10% instant discount on eligible Nike purchases.',
      'This offer follows the Indian government’s 10% import-tax reduction.',
      'Use the coupon code at checkout, if needed, to get the savings.',
      'Buy your favourite Nike products while this limited-time offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 10% OFF',
    badgeType: 'STUDENT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'STUDENT DISCOUNT',
    title: 'Nike Promo Code – Flat 10% Off Student Discount',
    description: 'Verified students can get a special 10% discount on eligible Nike India orders.',
    points: [
      'Get a flat 10% off on most Nike India products after SheerID verification.',
      'Eligible students can get discounts of up to ₹36,000.',
      'Complete the verification before you use the offer at checkout.',
      'Save more on shoes, clothing and accessories with your student discount.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 5% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'RUNNING',
    title: 'Nike Promo Code – Up to 5% Off Running Shoes',
    description: 'Save up to 5% on Nike running shoes in popular performance collections.',
    points: [
      'Get up to 5% off on selected Nike running shoes.',
      'Buy Zoom, React, Air, Joyride, Flyknit and Free series at discounted prices.',
      'Use the coupon code at checkout to get eligible savings.',
      'Pick the right running shoes for your training while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
