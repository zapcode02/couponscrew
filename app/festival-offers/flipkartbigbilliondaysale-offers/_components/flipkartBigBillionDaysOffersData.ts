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

export const FLIPKART_BIG_BILLION_DAYS_OFFERS_DATA: Offer[] = [
  {
    id: 'fk-luggage-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LUGGAGE',
    badgeType: 'FLAT',
    discountValue: '88% OFF',
    scopeText: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 88% Off on Kamiliant Hard Body Luggage Set',
    description: 'Travel at a lower cost with this big luggage deal in the Flipkart sale.',
    points: [
      'Buy the Kamiliant Hard Body Set of 2 Luggage for just ₹2,659, an 88% saving.',
      'Has a strong hard-shell build that keeps your belongings safe on the road.',
      'The original price is ₹22,260.',
      'A handy travel set for family holidays.'
    ],
    isVerified: true,
    usedCount: '4.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-luggage-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LUGGAGE',
    badgeType: 'FLAT',
    discountValue: '86% OFF',
    scopeText: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 86% Off on Kamiliant Cabin Suitcase',
    description: 'Upgrade your travel gear with this great suitcase offer.',
    points: [
      'Get the Kamiliant Small Cabin Suitcase for only ₹1,017, which is 86% off.',
      'Compact and light, so it is easy to carry on short trips.',
      'The original price is ₹7,700.',
      'Works well as cabin baggage and for weekend getaways.'
    ],
    isVerified: true,
    usedCount: '3.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-luggage-3',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LUGGAGE',
    badgeType: 'FLAT',
    discountValue: '81% OFF',
    scopeText: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 81% Off on Kamiliant Large Check-in Suitcase',
    description: "Pack more and pay less with one of Flipkart's best luggage deals.",
    points: [
      'Buy the Kamiliant Large Check-in Suitcase for ₹1,793, an 81% saving.',
      'Has plenty of space inside and wheels that roll smoothly.',
      'The original price is ₹9,690.',
      'A good choice for long holidays and international trips.'
    ],
    isVerified: true,
    usedCount: '2.7k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-perfume-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'FRAGRANCE',
    badgeType: 'FLAT',
    discountValue: '77% OFF',
    scopeText: 'FRAGRANCE',
    title: 'Flipkart Discount Code – Get 77% Off on Oscar Attar Gift Set',
    description: 'Pick up premium fragrances at a very low price.',
    points: [
      'Get the Oscar Attar Gift Set for just ₹338, which is 77% off.',
      'Includes long-lasting fragrances for both men and women.',
      'The original price is ₹1,500.',
      'A thoughtful gift for any occasion.'
    ],
    isVerified: true,
    usedCount: '4.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-footwear-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'FOOTWEAR',
    badgeType: 'FLAT',
    discountValue: '75% OFF',
    scopeText: 'FOOTWEAR',
    title: 'Flipkart Discount Code – Get 75% Off on PUMA Zod Runner V3 Sneakers',
    description: 'Give your shoe collection a fresh look with this sneaker deal.',
    points: [
      'Buy the PUMA Zod Runner V3 Sneakers for ₹995, a 75% saving.',
      'Light in weight, so they feel comfortable all day.',
      'The original price is ₹3,999.',
      'Suits walking, the gym and casual outfits.'
    ],
    isVerified: true,
    usedCount: '5.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-footwear-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'FOOTWEAR',
    badgeType: 'FLAT',
    discountValue: '74% OFF',
    scopeText: 'FOOTWEAR',
    title: 'Flipkart Discount Code – Get 74% Off on PUMA Rungryp Sneakers',
    description: 'Grab stylish PUMA sneakers at one of the lowest prices in the sale.',
    points: [
      'Get the PUMA Rungryp Sneakers for only ₹1,299, which is 74% off.',
      'Made to give comfort and style throughout the day.',
      'The original price is ₹4,999.',
      'A solid pick for everyday wear.'
    ],
    isVerified: true,
    usedCount: '3.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-laptop-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LAPTOPS',
    badgeType: 'FLAT',
    discountValue: '58% OFF',
    scopeText: 'LAPTOPS',
    title: 'Flipkart Promo Code – Get 58% Off on ASUS ExpertBook P5 Copilot+ PC',
    description: 'Boost your work speed with this powerful laptop deal.',
    points: [
      'Buy the ASUS ExpertBook P5 for ₹1,79,990, a 58% saving.',
      'Runs on Intel Core Ultra 7 with 32GB RAM and a 1TB SSD.',
      'Comes with Microsoft Office Home 2024 and Microsoft 365 Basic.',
      'Exchange and bank offers can also be applied.'
    ],
    isVerified: true,
    usedCount: '2.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-mobile-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'MOBILES',
    badgeType: 'FLAT',
    discountValue: '48% OFF',
    scopeText: 'MOBILES',
    title: 'Flipkart Promo Code – Get 48% Off on Samsung Galaxy S25 5G',
    description: "Get Samsung's top smartphone at a lower price in the Flipkart sale.",
    points: [
      'Get the Samsung Galaxy S25 5G for ₹54,999, which is 48% off.',
      'Has a Snapdragon processor, 12GB RAM and 128GB storage.',
      'The original price is ₹1,04,999.',
      'Comes with Protect Promise and bank offers.'
    ],
    isVerified: true,
    usedCount: '6.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-laptop-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LAPTOPS',
    badgeType: 'FLAT',
    discountValue: '47% OFF',
    scopeText: 'LAPTOPS',
    title: 'Flipkart Promo Code – Get 47% Off on ASUS ExpertBook P3 AI PC',
    description: 'Enjoy fast, AI-powered performance with this laptop deal.',
    points: [
      'Buy the ASUS ExpertBook P3 AI PC for ₹91,990, a 47% saving.',
      'Runs on Intel Core 5 with 16GB RAM and a 512GB SSD.',
      'Comes with Windows 11 Home and an onsite warranty.',
      'Bank offers can also be applied.'
    ],
    isVerified: true,
    usedCount: '1.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-tv-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'TV & APPLIANCES',
    badgeType: 'FLAT',
    discountValue: '45% OFF',
    scopeText: 'TV & APPLIANCES',
    title: 'Flipkart Voucher Code – Get 45% Off on TCL 55-inch QLED 4K Smart TV',
    description: 'Make your home entertainment better with this smart TV deal.',
    points: [
      'Get the TCL 55-inch QLED 4K Google TV for ₹41,999, which is 45% off.',
      'Supports Dolby Vision, HDR10+ and Google TV.',
      'The original price is ₹76,990.',
      'Exchange and bank offers are available.'
    ],
    isVerified: true,
    usedCount: '3.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-mobile-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'MOBILES',
    badgeType: 'FLAT',
    discountValue: '45% OFF',
    scopeText: 'MOBILES',
    title: 'Flipkart Voucher Code – Get 45% Off on realme P4 Lite 5G',
    description: 'Move to a feature-rich 5G smartphone at a lower price.',
    points: [
      'Save up to 45% on the realme P4 Lite 5G, with prices starting from ₹15,999.',
      'Has a smooth display and a battery that lasts long.',
      'Comes in several storage options.',
      'A great phone for the price.'
    ],
    isVerified: true,
    usedCount: '4.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-laptop-3',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'LAPTOPS',
    badgeType: 'FLAT',
    discountValue: '41% OFF',
    scopeText: 'LAPTOPS',
    title: 'Flipkart Voucher Code – Get 41% Off on ASUS ExpertBook P1 Laptop',
    description: 'Get dependable performance for work and study while saving more.',
    points: [
      'Buy the ASUS ExpertBook P1 for ₹63,990, a 41% saving.',
      'Has an Intel Core 3 processor, 16GB DDR5 RAM and a 512GB SSD.',
      'The original price is ₹1,09,990.',
      'Exchange offers of up to ₹48,400 are available.'
    ],
    isVerified: true,
    usedCount: '2.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-mobile-3',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'MOBILES',
    badgeType: 'FLAT',
    discountValue: '40% OFF',
    scopeText: 'MOBILES',
    title: 'Flipkart Offers – Get 40% Off on Nothing Phone (4b)',
    description: "Try Nothing's premium smartphone at a special sale price.",
    points: [
      'Get the Nothing Phone (4b) for ₹29,999, which is 40% off.',
      'Has 6GB RAM and 128GB storage.',
      'The original price is ₹49,999.',
      'Comes in several storage options.'
    ],
    isVerified: true,
    usedCount: '3.7k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-appliances-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'APPLIANCES',
    badgeType: 'FLAT',
    discountValue: '38% OFF',
    scopeText: 'APPLIANCES',
    title: 'Flipkart Offers – Get 38% Off on Voltas Beko 472L Side-by-Side Refrigerator',
    description: 'Upgrade your kitchen with a premium refrigerator at a lower price.',
    points: [
      'Buy the Voltas Beko 472L Refrigerator for ₹52,240, a 38% saving.',
      'Has a Pro Smart Inverter Compressor and a built-in stabilizer.',
      'The original price is ₹84,490.',
      'Exchange and bank offers are included.'
    ],
    isVerified: true,
    usedCount: '1.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-appliances-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'APPLIANCES',
    badgeType: 'FLAT',
    discountValue: '32% OFF',
    scopeText: 'APPLIANCES',
    title: 'Flipkart Offers – Get 32% Off on Samsung 653L Side-by-Side Refrigerator',
    description: 'Bring home a smart refrigerator with advanced cooling features.',
    points: [
      'Get the Samsung 653L Side-by-Side Refrigerator for ₹81,990, which is 32% off.',
      'Has AI, Wi-Fi connectivity and Convertible technology.',
      'The original price is ₹1,21,000.',
      'Comes with a warranty on the Digital Inverter Compressor.'
    ],
    isVerified: true,
    usedCount: '2.3k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-beauty-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'BEAUTY',
    badgeType: 'UP TO',
    discountValue: '80% OFF',
    scopeText: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 80% Off on Beauty Products',
    description: 'Refresh your beauty routine with these Flipkart sale offers.',
    points: [
      'Save up to 80% on skincare, makeup and other beauty essentials.',
      'Shop top brands while the limited-time sale lasts.',
      'Find discounts on Lakmé, CeraVe, Himalaya and more.',
      'A good time to stock up on your favourite products.'
    ],
    isVerified: true,
    usedCount: '5.6k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-beauty-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'BEAUTY',
    badgeType: 'UP TO',
    discountValue: '85% OFF',
    scopeText: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 85% Off on Lakmé & More',
    description: 'Enjoy big discounts on well-known beauty brands.',
    points: [
      'Save upto 85% on Lakmé and other leading beauty products.',
      'Browse makeup, skincare and personal care essentials.',
      'Special Flipkart sale prices are available for a limited time.',
      'Perfect for adding new items to your beauty collection.'
    ],
    isVerified: true,
    usedCount: '4.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-beauty-3',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'BEAUTY',
    badgeType: 'UP TO',
    discountValue: '80% OFF',
    scopeText: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 80% Off on CeraVe Skincare',
    description: 'Shop dermatologist-recommended skincare at lower prices.',
    points: [
      'Save up to 80% on selected CeraVe skincare products.',
      'Includes cleansers, moisturisers and other daily skincare basics.',
      'Available only for a limited time during the Flipkart sale.',
      'Ideal for keeping up a healthy skincare routine.'
    ],
    isVerified: true,
    usedCount: '3.3k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-grocery-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'GROCERY',
    badgeType: 'UP TO',
    discountValue: '60% OFF',
    scopeText: 'GROCERY',
    title: 'Flipkart Offers – Get Up to 60% Off on Breakfast Picks',
    description: 'Start your day for less with healthy grocery items.',
    points: [
      'Save up to 60% on peanut butter and other breakfast products.',
      'Explore discounts on leading grocery brands.',
      'Savings are available on selected products for a limited time.',
      'Perfect for filling up your kitchen.'
    ],
    isVerified: true,
    usedCount: '2.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'fk-essential-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    storeSlug: 'flipkart-coupon-code',
    category: 'ESSENTIALS',
    badgeType: 'UP TO',
    discountValue: '55% OFF',
    scopeText: 'ESSENTIALS',
    title: 'Flipkart Offers – Get Up to 55% Off on Household Essentials',
    description: 'Freshen up your home and save more during the Flipkart sale.',
    points: [
      'Save up to 55% on household and cleaning essentials.',
      'Shop products from trusted brands.',
      'Discounts are available for a limited time.',
      'Great for everyday home needs.'
    ],
    isVerified: true,
    usedCount: '3.6k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  }
];