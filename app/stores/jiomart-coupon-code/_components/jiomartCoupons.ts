// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL';
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

export const JIOMART_COUPONS: Coupon[] = [
  {
    id: 'coupon-2',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Save Flat 10% on Fresh Vegetables — Up to ₹50 OFF per Order',
    description: 'Shop fresh vegetables on JioMart and save flat 10% on your order — discount capped at ₹50 and applicable on the fresh vegetables category.',
    points: [
      'Discount is capped at ₹50 per order, regardless of how large the vegetable basket is.',
      'Limited to the fresh vegetables category specifically.',
      'Code FRESH10 must be applied at checkout.',
      'Best ordered close to delivery time for maximum produce freshness.'
    ],
    code: 'FRESH10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT ₹75 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'Flat ₹75 OFF on JioMart Orders Above ₹599 — Free Shipping Included',
    description: 'Shop for ₹599 or more on JioMart and save flat ₹75 instantly — free shipping included on all eligible orders with no extra charge.',
    points: [
      'Minimum order value of ₹599 is required.',
      'Free shipping is bundled in on top of the flat ₹75 discount.',
      'Code JM75 must be applied at checkout.',
      'No extra shipping charge even on orders just above the minimum threshold.'
    ],
    code: 'JM75',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Water Purifiers at JioMart',
    description: 'Save flat 5% on water purifier purchases on JioMart — apply the coupon code at checkout to activate the discount on eligible products.',
    points: [
      'Limited to water purifier products specifically tagged as eligible.',
      'Code WATER5 must be applied at checkout to activate the discount.',
      'Check installation and warranty terms separately from the discount offer.',
      'Compare models by purification technology before deciding.'
    ],
    code: 'WATER5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT ₹30 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'Flat ₹30 OFF on JioMart Orders Above ₹149',
    description: 'A simple discount for everyday grocery and essentials shopping — spend ₹149 or more on JioMart and save flat ₹30 with the coupon code.',
    points: [
      'Low minimum order value of ₹149 makes this easy to qualify for.',
      'Code JM30 must be applied manually at checkout.',
      'Good for everyday small grocery top-up orders.',
      'Check if this stacks with any ongoing category-specific discounts.'
    ],
    code: 'JM30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Save Flat ₹50 on JioMart Orders Above ₹449',
    description: 'Get an instant ₹50 off on eligible JioMart orders — shop for ₹449 or more and apply the coupon code at checkout to redeem.',
    points: [
      'Minimum order value of ₹449 is required.',
      'Code JM50 must be applied at checkout to redeem.',
      'Applies to eligible orders broadly, check for category exclusions at checkout.',
      'A mid-tier flat discount compared to the other JioMart cart-value offers.'
    ],
    code: 'JM50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Vacuum Cleaners at JioMart',
    description: 'Shop vacuum cleaners on JioMart and save flat 5% — apply the coupon code at checkout to activate the discount on eligible products.',
    points: [
      'Limited to vacuum cleaner products tagged as eligible.',
      'Code VACUUM5 must be applied at checkout.',
      'Compare suction power and bag/bagless type before choosing a model.',
      'Check warranty and after-sales service details for the specific brand.'
    ],
    code: 'VACUUM5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME & KITCHEN',
    title: 'Monsoon Ready for Less — Flat 5% OFF on Monsoon Essentials',
    description: 'Stock up on monsoon must-haves at JioMart and save flat 5% — apply the coupon code at checkout on eligible monsoon essentials products.',
    points: [
      'Limited to products tagged under the monsoon essentials category.',
      'Code RAIN5 must be applied at checkout.',
      'Seasonal offer — availability may end once monsoon season passes.',
      'Covers items like raincoats, umbrellas, and waterproof accessories.'
    ],
    code: 'RAIN5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT ₹400 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'Save Flat ₹400 on Tech Essentials at JioMart',
    description: 'Shop tech essentials on JioMart and save flat ₹400 — apply the coupon code at checkout to instantly reduce your order total.',
    points: [
      'Limited to tech essentials tagged as eligible, not all electronics.',
      'Code TECH400 must be applied at checkout.',
      'A minimum cart value may be required — check at checkout before assuming it applies to small orders.',
      'Good for accessories, chargers, or smaller electronics rather than big-ticket items.'
    ],
    code: 'TECH400',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Get Flat 5% OFF on Microwaves at JioMart',
    description: 'Shop microwaves on JioMart and save flat 5% — apply the coupon code at checkout on eligible microwave models from top brands.',
    points: [
      'Limited to eligible microwave models from top brands, not every listing.',
      'Code MWO5 must be applied at checkout.',
      'Check capacity (litres) and type (solo, grill, convection) before choosing.',
      'Compare warranty terms across brands before deciding.'
    ],
    code: 'MWO5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'Shop Dyson on JioMart — Get Flat 5% OFF on All Dyson Products',
    description: 'Save flat 5% on Dyson products available on JioMart — apply the coupon code at checkout to activate the discount on eligible Dyson items.',
    points: [
      'Limited to the Dyson brand specifically, not other electronics brands.',
      'Code DYSON5 must be applied at checkout.',
      'Dyson products are typically premium-priced, so even 5% can mean significant savings.',
      'Check warranty registration steps specific to Dyson after purchase.'
    ],
    code: 'DYSON5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT ₹1000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'ELECTRONICS',
    title: 'Save Flat ₹1,000 on Mac & iPad Purchases at JioMart',
    description: 'Shop Mac computers or iPad on JioMart and save flat ₹1,000 — apply the coupon code at checkout on eligible Apple products.',
    points: [
      'Limited to Mac computers and iPad specifically, not all Apple products.',
      'Code APPLE1000 must be applied at checkout.',
      'A flat ₹1,000 saving is more impactful on lower-cost iPad models than high-end Macs.',
      'Check regional warranty and service centre availability for Apple products.'
    ],
    code: 'APPLE1000',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'ELECTRONICS',
    title: 'JioMart Mobiles & Electronics Sale — Up to 80% OFF + Extra 10% via Card',
    description: 'Shop mobiles, tablets, and electronics on JioMart with discounts up to 80% — pay via eligible card to stack an additional 10% off on your order.',
    points: [
      'Extra 10% requires paying via an eligible bank card — check which cards qualify at checkout.',
      'Discount varies by product — up to 80% is the maximum, not every item.',
      'Covers mobiles, tablets, and broader electronics categories.',
      'Compare final price including the card discount before confirming the better deal.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FROM ₹15',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'STATIONERY',
    title: 'Back to School Deals on JioMart — Stationery Starting from Just ₹15',
    description: "Get ready for the new school term with JioMart's back-to-school sale — pens, pencils, and accessories starting from as low as ₹15.",
    points: [
      'Seasonal sale — likely tied to the back-to-school period and may rotate out afterward.',
      'Entry-level pricing starts from ₹15 on basic stationery items.',
      'Covers pens, pencils, and general school accessories.',
      'No code needed — pricing reflects directly in the listings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'GROCERY',
    title: 'JioMart Grocery Sale — Flat 40% OFF Across 8+ Categories from ₹20',
    description: 'Shop everyday groceries on JioMart and save flat 40% — covers biscuits, fruits, dairy, personal care, beauty, and more, starting from just ₹20.',
    points: [
      'Spans 8+ categories including biscuits, fruits, dairy, personal care, and beauty.',
      'Entry-level pricing starts from ₹20.',
      'No code needed — discount applied automatically on eligible items.',
      'Good opportunity to stock up across multiple everyday categories at once.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'HOME APPLIANCES',
    title: 'Kitchen & Home Appliances on JioMart — Up to 80% OFF',
    description: 'Save up to 80% on a wide range of kitchen and home appliances on JioMart — covering everything from mobiles and TVs to kitchen tools and home essentials.',
    points: [
      'Covers a wide range spanning kitchen tools, home essentials, mobiles, and TVs.',
      'Discount varies by product — up to 80% is the maximum, not every item.',
      'No code needed — discount reflected directly in product listings.',
      'Compare individual product discounts since the range of categories is broad.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'FASHION',
    title: "Women's Fashion Accessories on JioMart — Up to 80% OFF",
    description: "Shop women's fashion accessories on JioMart and save up to 80% — jewellery, handbags, sunglasses, and more at heavily discounted prices.",
    points: [
      'Covers jewellery, handbags, sunglasses, and similar fashion accessories.',
      'Discount varies by product — up to 80% is the maximum available.',
      'No code needed — discount reflected directly in the product listing.',
      'Check return policy on accessories as some categories may have limited return windows.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 87% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#E8632C]',
    color: '#E8632C',
    type: 'GROCERY',
    title: 'Shop Dry Fruits on JioMart — Up to 87% OFF Starting from ₹19',
    description: 'Get massive discounts on dry fruits at JioMart with prices starting from just ₹19 — no coupon code needed, discount is pre-applied at checkout.',
    points: [
      'Entry-level pricing starts from as low as ₹19 for smaller pack sizes.',
      'No coupon code needed — discount is pre-applied in the listing price.',
      'Discount varies by variety and pack size — up to 87% is the maximum.',
      'Check pack weight carefully as smaller packs may have a higher per-kg cost.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0078AD]',
    color: '#0078AD',
    type: 'FASHION',
    title: "Women's Western Wear on JioMart — Up to 80% OFF from ₹89",
    description: "Refresh your wardrobe with JioMart's western wear collection at up to 80% off — handbags, sunglasses, wallets, and more starting from just ₹89.",
    points: [
      'Entry-level pricing starts from ₹89 on select items.',
      'Covers handbags, sunglasses, wallets, and broader western wear accessories.',
      'Discount varies by product — up to 80% is the maximum available.',
      'No code needed — discount already reflected in the listed price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
