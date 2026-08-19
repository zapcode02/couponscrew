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
  bullets?: string[];
}

export const FLIPKART_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 85% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'SITEWIDE',
    title: 'Flipkart Freedom Sale — Up to 85% Off Across All Categories',
    description: 'Shop electronics, fashion, mobiles, home, and furniture during the Flipkart Freedom Sale — discounts go up to 85% with bank offers and no-cost EMI available at checkout.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Electronics & appliances up to 85% off | Mobiles up to ₹10,000 off',
      'Fashion up to 90% off for men, women & kids',
      'Home & furniture up to 75% off',
      'Bank discounts, no-cost EMI & exchange offers available'
    ]
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 85% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'SITEWIDE',
    title: 'Freedom Sale is Live — Pre-Applied Discounts on Every Category',
    description: 'The Flipkart Freedom Sale is live with discounts pre-applied across mobiles, electronics, fashion, and appliances — no separate Flipkart coupon code needed for the base discount.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Electronics & appliances up to 85% off',
      'Fashion up to 90% off | Home & furniture up to 75% off',
      'Stack with eligible bank card instant discounts at checkout',
      'No-cost EMI available on select products'
    ]
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'SITEWIDE',
    title: 'Mega Sitewide Sale — Up to 90% Off on Everything',
    description: "Flipkart's sitewide sale covers mobiles, fashion, electronics, home, appliances, beauty, and toys — discounts up to 90% with bank card offers available at checkout.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers mobiles, electronics, fashion & appliances',
      'Flipkart Plus members earn up to 4 SuperCoins per ₹100 spent',
      'Bank card instant discounts on select credit & debit cards',
      'SuperCoins credited post-delivery and redeemable on future orders'
    ]
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 95% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'DEALS OF THE DAY',
    title: 'Deals of the Day — Up to 95% Off | Refreshes Daily',
    description: "Flipkart's daily deals rotate every 24 hours across fashion, mobiles, electronics, furniture, jewellery, cosmetics, and auto accessories — up to 95% off on select items.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Deals refresh daily — check back each day',
      'Covers fashion, mobiles, electronics, furniture & jewellery',
      'Stock is limited on high-demand deal items',
      'No Flipkart coupon code required for most deals'
    ]
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'FASHION',
    title: 'Flipkart Fashion Sale — 50% to 90% Off | Men, Women & Kids',
    description: "Men's, women's, and kids' clothing, footwear, and accessories are all on sale — up to 90% off on men's fashion and 50%–80% off on women's and kids' categories.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      "Men's fashion up to 90% off | Women's fashion 50%–80% off",
      "Kids' lifestyle & accessories up to 50% off",
      'Use a verified Flipkart discount code for extra saving where eligible',
      'Covers ethnic wear, western casuals, activewear & branded footwear'
    ]
  },
  {
    id: 'coupon-6',
    badge: 'SPECIAL PRICES',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'GIFTING',
    title: 'Raksha Bandhan Gifts — Special Prices Across All Categories',
    description: "Flipkart's Rakhi Specials brings together gifting options across jewellery, fashion, electronics, and lifestyle — starting from ₹159 with pre-applied discounts.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 28, 2026',
    bullets: [
      'All users | Prices start from ₹159',
      'Covers jewellery, fashion, electronics & lifestyle gifts',
      'Combine with bank card offer at checkout for extra saving',
      'Valid till Aug 28, 2026'
    ]
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 84% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: "WOMEN'S FASHION",
    title: "Women's Fashion Sale — Up to 84% Off on Ethnic & Western Wear",
    description: 'Shop Flipkart women dress collections — kurta sets, sarees, ethnic wear, western dresses, jeans, and night suits — at up to 84% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers ethnic wear, western wear & night suits',
      'Includes kurta sets, sarees, jeans & Flipkart ladies dress styles',
      'Discounts pre-applied on listed prices',
      'Discount varies by brand and product'
    ]
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'GROCERY',
    title: 'Flipkart Food Fest — Up to 40% Off on Premium Snacks',
    description: 'Stock up on premium and healthy snacks through Flipkart Grocery at up to 40% off — prices start from ₹210 with no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart coupon code required',
      'Prices start from ₹210',
      'Covers packaged snacks, dry fruits, nuts & health bars',
      'Discounts pre-applied at cart level'
    ]
  },
  {
    id: 'coupon-9',
    badge: '₹3,000 BENEFITS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'BANK OFFER',
    title: 'Flipkart Axis Bank Credit Card — ₹3,000 Welcome Benefits',
    description: 'Apply for the Flipkart Axis Bank credit card and unlock welcome benefits worth ₹3,000 — plus 5% unlimited cashback on every Flipkart purchase year-round.',
    code: '',
    verified: 'Verified',
    userType: 'New Card Applicants',
    validTill: 'Ongoing',
    bullets: [
      '5% unlimited cashback on all Flipkart purchases — no cap',
      '4% cashback on partner brands | 1.5% on all other spends',
      'Welcome benefits worth ₹3,000 on card activation',
      'Cashback credited as monthly statement credit'
    ]
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FOOTWEAR',
    title: 'Footwear Sale — Up to 80% Off on Nike, Puma, Adidas & More',
    description: 'Branded sports shoes, sneakers, and casual footwear from Nike, Puma, Adidas, and Campus are up to 80% off — a strong window to shop Flipkart shoes at well-below-MRP prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers sports, casual & lifestyle footwear',
      'Brands: Nike, Puma, Adidas & Campus',
      'Discounts pre-applied on listed prices',
      'Discount varies by brand and style'
    ]
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'WATCHES & LUGGAGE',
    title: 'Watches & Luggage — Up to 70% Off | Titan, Fossil & Samsonite',
    description: 'Save up to 70% on premium watches and travel luggage — Titan, Fossil, and Samsonite among the featured brands across analogue, digital, and travel bag styles.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers watches & hard/soft-shell luggage',
      'Brands: Titan, Fossil & Samsonite',
      'Discounts pre-applied on listed prices',
      'Discount varies by brand and style'
    ]
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'MOBILES',
    title: 'Smartphones — Up to 50% Off | No-Cost EMI Available',
    description: 'Flipkart mobile phones from Samsung, Apple, Vivo, Oppo, Realme, and POCO are up to 50% off — no-cost EMI available on select models to spread the cost.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers Samsung, Apple, Realme & POCO',
      'No-cost EMI available on select models',
      'Bank card holders get additional instant discount at checkout',
      'Discount varies by brand and model'
    ]
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'BEAUTY',
    title: "Beauty Sale — Up to 80% Off | L'Oréal, Maybelline, Lakme & More",
    description: "Skincare, makeup, haircare, and personal care products from L'Oréal Paris, Maybelline, Lakme, Nivea, and The Body Shop are up to 80% off.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers skincare, makeup, haircare & personal care',
      "Brands: L'Oréal Paris, Maybelline, Lakme & Nivea",
      'Discounts pre-applied on listed prices',
      'Discount varies by product and brand'
    ]
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MOBILES',
    title: 'Mobiles Store — Up to 70% Off on Smartphones & Accessories',
    description: "Flipkart's mobiles store is running up to 70% off across Samsung, iPhone, Realme, Oppo, POCO, and Vivo — mobile accessories discounted in the same window.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | Covers smartphones & mobile accessories',
      'Brands: Samsung, iPhone, Realme, Oppo, POCO & Vivo',
      'Filter by brand on the landing page',
      'Discount varies by model and brand'
    ]
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'HOME & FURNITURE',
    title: 'Home & Furniture Sale — Up to 70% Off | Free Delivery on Select Items',
    description: 'Sofas, beds, wardrobes, lighting, and kitchen essentials from Nilkamal, Wakefit, and Urban Ladder — up to 70% off with free delivery on select products.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers sofas, beds, wardrobes & kitchen essentials',
      'Brands: Nilkamal, Wakefit & Urban Ladder',
      'Free delivery on select products',
      'Discount varies by brand and product'
    ]
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'GROCERY',
    title: 'Flipkart Grocery Sale — Up to 80% Off on Daily Essentials',
    description: 'Stock up on pantry staples, household products, and personal care items via Flipkart Grocery and Supermart — up to 80% off with fast delivery to major cities.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | Covers pantry staples & household essentials',
      'Delivery available in most major cities',
      'No Flipkart promo code required for base discounts',
      'Discount varies by product and brand'
    ]
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'ELECTRONICS',
    title: 'Electronics Bonanza — Up to 90% Off on TVs, Laptops & Audio',
    description: "Flipkart's electronics sale covers TVs, laptops, cameras, tablets, headphones, speakers, and home theatre systems at up to 90% off — all bank cards and payment modes accepted.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | All banks & payment modes accepted',
      'Covers TVs, laptops, cameras, tablets & headphones',
      'No-cost EMI available on high-value electronics',
      'One of the deepest electronics discount windows outside Flipkart Big Billion Days'
    ]
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'AUDIO',
    title: 'Earbuds & Audio Sale — Up to 80% Off | boAt, JBL & Sony',
    description: 'TWS earbuds, Bluetooth neckbands, wired earphones, and headphones from boAt, JBL, Sony, and Realme are up to 80% off during this audio sale window.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Covers TWS earbuds, neckbands & headphones',
      'Brands: boAt, JBL, Sony & Realme',
      'Discounts pre-applied on listed prices',
      'Discount varies by brand and model'
    ]
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'BANK OFFER',
    title: 'Flat 10% Instant Discount — HDFC, ICICI & SBI Card Holders',
    description: 'Get 10% off instantly at checkout when paying with an eligible HDFC, ICICI, or SBI credit or debit card — stackable with select Flipkart promo codes where allowed.',
    code: '',
    verified: 'Verified',
    userType: 'Card-Specific',
    validTill: 'Aug 31, 2026',
    bullets: [
      'HDFC, ICICI & SBI credit/debit cards only',
      'Minimum cart value may apply — check product page',
      'May be stackable with an active Flipkart coupon code',
      'Valid till Aug 31, 2026'
    ]
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'BOOKS',
    title: 'Career Fest — Up to 40% Off on PhysicsWallah Books',
    description: "PhysicsWallah study books and exam prep material are up to 40% off during Flipkart's Career Fest — prices start from ₹302 with no coupon code required.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart discount code required',
      'Prices start from ₹302',
      'Covers PhysicsWallah books across subjects',
      'Discounts pre-applied on listed prices'
    ]
  },
  {
    id: 'coupon-21',
    badge: 'FROM ₹8,999',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'HOME & FURNITURE',
    title: 'Buy Beds Online — Prices Start at ₹8,999',
    description: "Flipkart's bed collection starts at ₹8,999 — single, double, and queen-size options across wood, engineered wood, and metal frame styles with scheduled delivery available.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Prices from ₹8,999',
      'Covers single, double & queen-size beds',
      'Bank card discounts available on select models',
      'Free delivery & installation in most major cities'
    ]
  },
  {
    id: 'coupon-22',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'LARGE APPLIANCES',
    title: 'TVs & Appliances — Up to 75% Off + Extra 10% on EMI Transactions',
    description: 'Refrigerators, washing machines, ACs, and TVs at up to 75% off — exchange your old appliance for an extra markdown, with no-cost EMI and bank card discounts at checkout.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Ongoing',
    bullets: [
      'All users | Covers TVs, refrigerators, ACs & washing machines',
      'Exchange old appliance for additional discount at checkout',
      'No-cost EMI available across large appliance categories',
      'Extra 10% off on select bank card EMI transactions'
    ]
  },
  {
    id: 'coupon-23',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'HOME APPLIANCES',
    title: 'Home Appliances Sale — Up to 90% Off | Prices From ₹127',
    description: "Flipkart's home appliances sale goes up to 90% off — prices start from ₹127 on smaller household items with free shipping on select products.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart voucher code required',
      'Prices start from ₹127',
      'Free shipping on select products',
      'Discount varies by product and category'
    ]
  },
  {
    id: 'coupon-24',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'MOBILES',
    title: 'Samsung Sale — Up to 75% Off + Extra 10% via Axis Bank Cards',
    description: 'Samsung mobile phones including Galaxy Z Fold, Galaxy S-series, and Galaxy A-series are up to 75% off — Axis Bank card holders get an additional 10% off at checkout.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Prices start from ₹1,299',
      'Extra 10% off with Axis Bank credit/debit cards',
      'Covers Galaxy Z Fold, S-series & A-series models',
      'Discount varies by model'
    ]
  },
  {
    id: 'coupon-25',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'EXCHANGE OFFER',
    title: 'Exchange Your Old Appliance & Save Up to 80%',
    description: 'Trade in your old TV or home appliance on Flipkart for an instant markdown on a new purchase — old appliance collected at delivery of the new one.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | Exchange value varies by appliance condition',
      'Old appliance collected when new one is delivered',
      'Covers TVs & home appliances',
      'Combine with bank card offer for maximum saving'
    ]
  },
  {
    id: 'coupon-26',
    badge: 'FLIPKART PLUS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MEMBERSHIP',
    title: 'Join Flipkart Plus — Early Sale Access & SuperCoins on Every Order',
    description: 'Shop 4 times on Flipkart to earn Flipkart Plus status — get early access to Big Billion Days, 2% SuperCoins back on every order, and up to 5% exclusive discounts.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Ongoing',
    bullets: [
      'Free to join | Requires 4 purchases in a rolling year',
      'Early access to Flipkart Big Billion Days & festive sales',
      '2% SuperCoins back on every order',
      'Up to 5% exclusive discounts using SuperCoins on eligible products'
    ]
  },
  {
    id: 'coupon-27',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: "KIDS' FASHION",
    title: "Kids' Sale — Up to 80% Off + 10% Bank Offer | Free Delivery",
    description: "Kids' clothing, footwear, and accessories are up to 80% off — Axis Bank card holders get 5% unlimited cashback, and BOB credit card EMI users get an extra 10% off.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | Free delivery & easy returns on eligible orders',
      '5% unlimited cashback on Flipkart Axis Bank credit cards',
      'Extra 10% off on BOB credit card EMI transactions',
      'No-cost EMI via Flipkart Pay Later up to ₹1 lakh'
    ]
  },
  {
    id: 'coupon-28',
    badge: 'FROM ₹5,990',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'LARGE APPLIANCES',
    title: 'Refrigerator Sale — Up to 60% Off | Prices From ₹5,990',
    description: 'Single-door, double-door, and side-by-side refrigerators from LG, Whirlpool, and Samsung at up to 60% off — no Flipkart coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart coupon code required',
      'Brands: LG, Whirlpool & Samsung',
      'Prices start from ₹5,990',
      'Exchange & bank card offers available at checkout'
    ]
  },
  {
    id: 'coupon-29',
    badge: 'FROM ₹20,490',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'LARGE APPLIANCES',
    title: 'AC Sale — Up to 67% Off | Prices From ₹20,490',
    description: 'Split and window ACs from leading brands at up to 67% off — prices start from ₹20,490 with installation services available in select cities.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart promo code required',
      'Prices start from ₹20,490 on 1-ton models',
      'Installation available in select cities',
      'Exchange & bank card EMI offers available at checkout'
    ]
  },
  {
    id: 'coupon-30',
    badge: 'UP TO ₹15,000 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'EXCHANGE OFFER',
    title: 'Laptop Exchange Offer — Up to ₹15,000 Off on a New Laptop',
    description: 'Exchange your old laptop on Flipkart and get up to ₹15,000 off on a new purchase — no-cost EMI available on most models from HP, Dell, Lenovo, ASUS, and Apple.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | Exchange value assessed at delivery',
      'Brands: HP, Dell, Lenovo, ASUS & Apple',
      'No-cost EMI available on eligible models',
      'Discount varies by exchange value & model selected'
    ]
  },
  {
    id: 'coupon-31',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'BABY CARE',
    title: 'Pampers Diapers — Up to 50% Off | No Code Required',
    description: 'Flipkart is offering up to 50% off on Pampers diapers across all sizes and variants — no Flipkart discount code needed, saving is applied directly on listed prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'All users | No Flipkart coupon code required',
      'Covers all Pampers sizes and variants',
      'Discount varies by pack size',
      'Stock up during this window for best per-unit price'
    ]
  },
  {
    id: 'coupon-32',
    badge: 'FROM ₹2,956',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'FOOTWEAR',
    title: 'Nike Shoes — Up to 50% Off on Latest Styles | From ₹2,956',
    description: 'Nike sports shoes, casual sneakers, slippers, and flip-flops for men are up to 50% off — covering current-season styles, not just clearance stock.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      "All users | Men's Nike footwear",
      'Prices start from ₹2,956',
      'Covers sports, casual, slippers & flip-flop styles',
      'Discount varies by model and style'
    ]
  },
  {
    id: 'coupon-33',
    badge: 'UP TO 85% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2874F0]',
    color: '#2874F0',
    type: 'BAGS',
    title: 'Laptop Bags — Up to 85% Off | Sizes 8 to 19 Inches',
    description: 'Laptop bags in sizes 8 to 19 inches across canvas, leather, faux leather, and denim styles from HP, Lenovo, and Dell — up to 85% off.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | Sizes 8 to 19 inches',
      'Brands: HP, Lenovo & Dell',
      'Covers backpacks, top-handle & shoulder carry styles',
      'Discount varies by brand and material'
    ]
  },
  {
    id: 'coupon-34',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MOBILE ACCESSORIES',
    title: 'iPhone Accessories — Up to 50% Off | Cables, Cases & More',
    description: 'Earphones, USB cables, connectors, back covers, and screen guards for iPhone are up to 50% off — no Flipkart coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Aug 31, 2026',
    bullets: [
      'Existing users | No Flipkart promo code required',
      'Covers earphones, cables, connectors, cases & screen guards',
      'Filter by iPhone model on the landing page',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-35',
    badge: 'UNDER ₹299',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FB641B]',
    color: '#FB641B',
    type: 'MOBILE ACCESSORIES',
    title: 'Mobile Cases Under ₹299 | Plain, Designer & Rugged Styles',
    description: "Flipkart's mobile case collection — plain covers, designer cases, clear back covers, and rugged protective cases — all under ₹299 with no offer code needed.",
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Ongoing',
    bullets: [
      'Existing users | No Flipkart voucher code required',
      'Covers plain, designer, clear & rugged case styles',
      'Filter by mobile brand for compatible options',
      'Prices under ₹299 year-round'
    ]
  }
];
