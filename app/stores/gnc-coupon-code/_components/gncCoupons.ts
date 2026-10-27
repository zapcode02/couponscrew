export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  details?: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const GNC_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '80% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CREATINE',
    title: 'GNC Coupon Code – Save 80% on Creatine Monohydrate with Shaker',
    description: "Get GNC's Creatine Monohydrate with a shaker at its biggest discount.",
    details: [
      'Get Creatine Monohydrate with Silver Shaker for only ₹499 and enjoy savings of up to 80%.',
      'Get 100g of unflavoured creatine that mixes easily with your daily drinks.',
      'Receive a shaker bottle in the combo for added convenience.',
      'A smart pick for gym-goers looking for an affordable creatine supplement.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '59% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WHEY PROTEIN',
    title: 'GNC Coupon Code – Save 59% on Whey Protein Sachets with Shaker',
    description: 'Enjoy premium whey protein and a free shaker at a fantastic price.',
    details: [
      'Save 59% on GNC 100% Whey Protein Sachets with a Black Shaker for ₹849.',
      'Get Vanilla Cream flavoured whey protein in travel-friendly sachets.',
      'The combo includes a reusable shaker for mixing your protein anywhere.',
      'Perfect for first-time buyers and fitness enthusiasts who need protein on the go.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '57% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PRE-WORKOUT',
    title: 'GNC Discount Code – Save 57% on Pre-Workout',
    description: 'Power up every workout while paying much less during the GOAT Sale.',
    details: [
      'Enjoy 57% off the Fruit Punch Pre-Workout, now priced at ₹899.',
      'Helps prepare you for high-intensity training sessions.',
      'Part of the limited-time GOAT Sale.',
      'Great for regular gym users looking to improve workout performance.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '56% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEIGHT GAINER',
    title: 'GNC Discount Code – Save 56% on Weight Gainer with Shaker',
    description: 'Grab a value-packed weight gainer combo with a free steel shaker.',
    details: [
      'Save 56% on the 3KG Weight Gainer with a Steel Shaker for ₹1,949.',
      'Choose the Double Chocolate flavour for a rich taste.',
      'The combo comes with a durable steel shaker bottle.',
      'Great for weight gain and muscle support.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '53% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEIGHT GAINER',
    title: 'GNC Promo Code – Save 53% on Pro Performance Weight Gainer',
    description: 'Build your nutrition routine with this budget-friendly weight gainer deal.',
    details: [
      'Save 53% on the 1KG Pro Performance Weight Gainer for ₹699.',
      'Enjoy the Double Chocolate flavour in every serving.',
      'Available for a limited time under the GOAT Sale.',
      'Best for beginners and regular gym members working on healthy weight gain.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '50% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PLANT PROTEIN',
    title: 'GNC Promo Code – Save 50% on Fermented Yeast Protein Isolate',
    description: 'Choose a plant-based protein at half the regular price.',
    details: [
      'Get 50% off the 2 lb Chocolate Protein Isolate for ₹1,599.',
      'Made with fermented yeast protein for plant-based nutrition.',
      'Includes a 2 lb pack for long-lasting use.',
      'A great choice for vegetarians looking to increase their protein intake.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '44% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WHEY PROTEIN',
    title: 'GNC Voucher Code – Save 44% on Whey Protein',
    description: 'Save more on a large whey protein pack for everyday fitness goals.',
    details: [
      'Save 44% on the 4 lb Chocolate Supreme Whey Protein for ₹6,499.',
      'Includes the original Pro Performance formulation.',
      'Large 4 lb pack provides plenty of servings.',
      'Ideal for frequent gym-goers who use protein every day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '3 FOR ₹1,499',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WELLNESS BUNDLE',
    title: 'GNC Voucher Code – Buy 3 Wellness Products for ₹1,499',
    description: 'Mix and match wellness essentials while spending less.',
    details: [
      'Get any 3 selected wellness products for ₹1,499.',
      'Choose from 16 eligible wellness products.',
      'Mix eligible products in one order.',
      'A great opportunity to stock up on daily wellness essentials.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '28% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MULTIVITAMIN',
    title: 'GNC Offers – Save 28% on Sport Multivitamin',
    description: 'Support your daily nutrition with extra savings on every bottle.',
    details: [
      'Save 28% on the 60-tablet Sport Multivitamin for ₹679.',
      'Includes 60 tablets for everyday use.',
      'Available at a discounted GOAT Sale price.',
      'Ideal for everyday nutrition.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: '25% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MEN NUTRITION',
    title: 'GNC Offers – Save 25% on Mega Men 50+ Multivitamin',
    description: 'Get daily nutritional support for less with this vegetarian formula.',
    details: [
      'Save 25% on Mega Men 50+ Multivitamin (Veg), now priced at ₹899.',
      'Formulated specifically for men aged 50 years and above.',
      'Vegetarian-friendly multivitamin for everyday wellness.',
      'A practical choice for maintaining daily nutritional support.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROTEIN SALE',
    title: 'Save Up to 30% on GNC Protein',
    description: 'Find bigger savings across selected GNC protein supplements.',
    details: [
      'Get up to 30% off selected protein supplements.',
      'Explore multiple protein options for different fitness goals.',
      'Discount applies to eligible products during the sale.',
      'Great for anyone looking to replenish their protein supply.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'COMBO OFFERS',
    title: 'Save Up to 30% on GNC Combos',
    description: 'Save more with GNC combo deals.',
    details: [
      'Save up to 30% on selected combo packs.',
      'Choose from various health and fitness combinations.',
      'Enjoy better value compared to buying products separately.',
      'Ideal for shoppers purchasing multiple supplements together.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WEIGHT GAINERS',
    title: 'Save Up to 30% on GNC Weight Gainers',
    description: 'Shop selected weight gain supplements at lower prices.',
    details: [
      'Get up to 30% off selected weight gain products.',
      'Explore different pack sizes and flavours.',
      'Offer is available on eligible products only.',
      'Suitable for people focused on increasing calorie intake.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: "WOMEN'S WELLNESS",
    title: "Save Up to 30% on GNC Women's Wellness",
    description: 'Discover everyday wellness products at discounted prices.',
    details: [
      "Save up to 30% on Women's Wellness products.",
      'Browse a variety of eligible health supplements.',
      'Discount applies during the ongoing promotional sale.',
      'A good opportunity to stock up on everyday wellness essentials.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];