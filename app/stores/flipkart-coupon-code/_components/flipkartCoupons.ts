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
  bullets?: string[];
}
  
export const FLIPKART_COUPONS: Coupon[] = [
  {
    id: 'fk-luggage-1',
    badge: '88% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 88% Off on Kamiliant Hard Body Luggage Set',
    description: 'Travel at a lower cost with this big luggage deal in the Flipkart sale.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the Kamiliant Hard Body Set of 2 Luggage for just ₹2,659, an 88% saving.',
      'Has a strong hard-shell build that keeps your belongings safe on the road.',
      'The original price is ₹22,260.',
      'A handy travel set for family holidays.'
    ]
  },
  {
    id: 'fk-luggage-2',
    badge: '86% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 86% Off on Kamiliant Cabin Suitcase',
    description: 'Upgrade your travel gear with this great suitcase offer.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the Kamiliant Small Cabin Suitcase for only ₹1,017, which is 86% off.',
      'Compact and light, so it is easy to carry on short trips.',
      'The original price is ₹7,700.',
      'Works well as cabin baggage and for weekend getaways.'
    ]
  },
  {
    id: 'fk-luggage-3',
    badge: '81% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LUGGAGE',
    title: 'Flipkart Coupon Code – Get 81% Off on Kamiliant Large Check-in Suitcase',
    description: "Pack more and pay less with one of Flipkart's best luggage deals.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the Kamiliant Large Check-in Suitcase for ₹1,793, an 81% saving.',
      'Has plenty of space inside and wheels that roll smoothly.',
      'The original price is ₹9,690.',
      'A good choice for long holidays and international trips.'
    ]
  },
  {
    id: 'fk-perfume-1',
    badge: '77% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'FRAGRANCE',
    title: 'Flipkart Discount Code – Get 77% Off on Oscar Attar Gift Set',
    description: 'Pick up premium fragrances at a very low price.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the Oscar Attar Gift Set for just ₹338, which is 77% off.',
      'Includes long-lasting fragrances for both men and women.',
      'The original price is ₹1,500.',
      'A thoughtful gift for any occasion.'
    ]
  },
  {
    id: 'fk-footwear-1',
    badge: '75% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'FOOTWEAR',
    title: 'Flipkart Discount Code – Get 75% Off on PUMA Zod Runner V3 Sneakers',
    description: 'Give your shoe collection a fresh look with this sneaker deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the PUMA Zod Runner V3 Sneakers for ₹995, a 75% saving.',
      'Light in weight, so they feel comfortable all day.',
      'The original price is ₹3,999.',
      'Suits walking, the gym and casual outfits.'
    ]
  },
  {
    id: 'fk-footwear-2',
    badge: '74% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'FOOTWEAR',
    title: 'Flipkart Discount Code – Get 74% Off on PUMA Rungryp Sneakers',
    description: 'Grab stylish PUMA sneakers at one of the lowest prices in the sale.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the PUMA Rungryp Sneakers for only ₹1,299, which is 74% off.',
      'Made to give comfort and style throughout the day.',
      'The original price is ₹4,999.',
      'A solid pick for everyday wear.'
    ]
  },
  {
    id: 'fk-laptop-1',
    badge: '58% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LAPTOPS',
    title: 'Flipkart Promo Code – Get 58% Off on ASUS ExpertBook P5 Copilot+ PC',
    description: 'Boost your work speed with this powerful laptop deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the ASUS ExpertBook P5 for ₹1,79,990, a 58% saving.',
      'Runs on Intel Core Ultra 7 with 32GB RAM and a 1TB SSD.',
      'Comes with Microsoft Office Home 2024 and Microsoft 365 Basic.',
      'Exchange and bank offers can also be applied.'
    ]
  },
  {
    id: 'fk-mobile-1',
    badge: '48% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'MOBILES',
    title: 'Flipkart Promo Code – Get 48% Off on Samsung Galaxy S25 5G',
    description: "Get Samsung's top smartphone at a lower price in the Flipkart sale.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the Samsung Galaxy S25 5G for ₹54,999, which is 48% off.',
      'Has a Snapdragon processor, 12GB RAM and 128GB storage.',
      'The original price is ₹1,04,999.',
      'Comes with Protect Promise and bank offers.'
    ]
  },
  {
    id: 'fk-laptop-2',
    badge: '47% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LAPTOPS',
    title: 'Flipkart Promo Code – Get 47% Off on ASUS ExpertBook P3 AI PC',
    description: 'Enjoy fast, AI-powered performance with this laptop deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the ASUS ExpertBook P3 AI PC for ₹91,990, a 47% saving.',
      'Runs on Intel Core 5 with 16GB RAM and a 512GB SSD.',
      'Comes with Windows 11 Home and an onsite warranty.',
      'Bank offers can also be applied.'
    ]
  },
  {
    id: 'fk-tv-1',
    badge: '45% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'TV & APPLIANCES',
    title: 'Flipkart Voucher Code – Get 45% Off on TCL 55-inch QLED 4K Smart TV',
    description: 'Make your home entertainment better with this smart TV deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the TCL 55-inch QLED 4K Google TV for ₹41,999, which is 45% off.',
      'Supports Dolby Vision, HDR10+ and Google TV.',
      'The original price is ₹76,990.',
      'Exchange and bank offers are available.'
    ]
  },
  {
    id: 'fk-mobile-2',
    badge: '45% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'MOBILES',
    title: 'Flipkart Voucher Code – Get 45% Off on realme P4 Lite 5G',
    description: 'Move to a feature-rich 5G smartphone at a lower price.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save up to 45% on the realme P4 Lite 5G, with prices starting from ₹15,999.',
      'Has a smooth display and a battery that lasts long.',
      'Comes in several storage options.',
      'A great phone for the price.'
    ]
  },
  {
    id: 'fk-laptop-3',
    badge: '41% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LAPTOPS',
    title: 'Flipkart Voucher Code – Get 41% Off on ASUS ExpertBook P1 Laptop',
    description: 'Get dependable performance for work and study while saving more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the ASUS ExpertBook P1 for ₹63,990, a 41% saving.',
      'Has an Intel Core 3 processor, 16GB DDR5 RAM and a 512GB SSD.',
      'The original price is ₹1,09,990.',
      'Exchange offers of up to ₹48,400 are available.'
    ]
  },
  {
    id: 'fk-mobile-3',
    badge: '40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'MOBILES',
    title: 'Flipkart Offers – Get 40% Off on Nothing Phone (4b)',
    description: "Try Nothing's premium smartphone at a special sale price.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the Nothing Phone (4b) for ₹29,999, which is 40% off.',
      'Has 6GB RAM and 128GB storage.',
      'The original price is ₹49,999.',
      'Comes in several storage options.'
    ]
  },
  {
    id: 'fk-appliances-1',
    badge: '38% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'APPLIANCES',
    title: 'Flipkart Offers – Get 38% Off on Voltas Beko 472L Side-by-Side Refrigerator',
    description: 'Upgrade your kitchen with a premium refrigerator at a lower price.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Buy the Voltas Beko 472L Refrigerator for ₹52,240, a 38% saving.',
      'Has a Pro Smart Inverter Compressor and a built-in stabilizer.',
      'The original price is ₹84,490.',
      'Exchange and bank offers are included.'
    ]
  },
  {
    id: 'fk-appliances-2',
    badge: '32% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'APPLIANCES',
    title: 'Flipkart Offers – Get 32% Off on Samsung 653L Side-by-Side Refrigerator',
    description: 'Bring home a smart refrigerator with advanced cooling features.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Get the Samsung 653L Side-by-Side Refrigerator for ₹81,990, which is 32% off.',
      'Has AI, Wi-Fi connectivity and Convertible technology.',
      'The original price is ₹1,21,000.',
      'Comes with a warranty on the Digital Inverter Compressor.'
    ]
  },
  {
    id: 'fk-beauty-1',
    badge: '80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 80% Off on Beauty Products',
    description: 'Refresh your beauty routine with these Flipkart sale offers.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save up to 80% on skincare, makeup and other beauty essentials.',
      'Shop top brands while the limited-time sale lasts.',
      'Find discounts on Lakmé, CeraVe, Himalaya and more.',
      'A good time to stock up on your favourite products.'
    ]
  },
  {
    id: 'fk-beauty-2',
    badge: '85% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 85% Off on Lakmé & More',
    description: 'Enjoy big discounts on well-known beauty brands.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save upto 85% on Lakmé and other leading beauty products.',
      'Browse makeup, skincare and personal care essentials.',
      'Special Flipkart sale prices are available for a limited time.',
      'Perfect for adding new items to your beauty collection.'
    ]
  },
  {
    id: 'fk-beauty-3',
    badge: '80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'BEAUTY',
    title: 'Flipkart Offers – Get Up to 80% Off on CeraVe Skincare',
    description: 'Shop dermatologist-recommended skincare at lower prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save up to 80% on selected CeraVe skincare products.',
      'Includes cleansers, moisturisers and other daily skincare basics.',
      'Available only for a limited time during the Flipkart sale.',
      'Ideal for keeping up a healthy skincare routine.'
    ]
  },
  {
    id: 'fk-grocery-1',
    badge: '60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'GROCERY',
    title: 'Flipkart Offers – Get Up to 60% Off on Breakfast Picks',
    description: 'Start your day for less with healthy grocery items.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save up to 60% on peanut butter and other breakfast products.',
      'Explore discounts on leading grocery brands.',
      'Savings are available on selected products for a limited time.',
      'Perfect for filling up your kitchen.'
    ]
  },
  {
    id: 'fk-essential-1',
    badge: '55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'ESSENTIALS',
    title: 'Flipkart Offers – Get Up to 55% Off on Household Essentials',
    description: 'Freshen up your home and save more during the Flipkart sale.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026',
    bullets: [
      'Save up to 55% on household and cleaning essentials.',
      'Shop products from trusted brands.',
      'Discounts are available for a limited time.',
      'Great for everyday home needs.'
    ]
  }
];