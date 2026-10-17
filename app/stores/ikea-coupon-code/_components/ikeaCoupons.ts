export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
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

export const IKEA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '80% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'LIGHTING',
    title: 'IKEA Coupon Code – Save 80% on KNOPPSLINGA LED Light',
    description: 'Bring warm, everyday lighting to your home with the IKEA KNOPPSLINGA LED light, starting at only ₹99.',
    points: [
      'Save 80% and buy the KNOPPSLINGA LED light for only ₹99 instead of ₹499.',
      'Enjoy bright 3600 lm illumination with a 6500K daylight colour temperature.',
      'Ideal for kitchens, shelves, study areas, and workspaces.',
      'Offer valid until November 11 or while stocks last.'
    ],
    code: 'KNOPP80',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 66% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'LIGHTING',
    title: 'IKEA Coupon Code – Get Up to 66% Off KNOPPSLINGA LED Batten Lights',
    description: 'Bring bright and energy-efficient lighting to your home with the KNOPPSLINGA LED batten light from just ₹99.',
    points: [
      'Save up to 66% and get the LED batten light for ₹99 instead of ₹299.',
      'Enjoy warm 2700K lighting with 2160 lm brightness.',
      'Works well in bedrooms, kitchens, home offices, and study rooms.',
      'Available only while stocks remain during the promotional period.'
    ],
    code: 'BATTEN66',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'LIGHTING',
    title: 'IKEA Discount Code – Save 50% on KNOPPSLINGA LED Batten Light',
    description: 'Light up your home for less with the IKEA KNOPPSLINGA LED batten light starting at only ₹99.',
    points: [
      'Save 50% and pay just ₹99 instead of ₹199.',
      'Delivers 900-lumen warm white illumination for daily lighting needs.',
      'Great for kitchens, wardrobes, hallways, and storage areas.',
      'Available while promotional stocks last.'
    ],
    code: 'BATTEN50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FROM ₹2,490',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'BEDDING',
    title: 'IKEA Offers – Buy the LÅSBRÄKEN Comforter Starting at ₹2,490',
    description: "Enjoy a cozy night's sleep with the IKEA LÅSBRÄKEN comforter starting from ₹2,490.",
    points: [
      'Buy the LÅSBRÄKEN comforter from just ₹2,490.',
      'Soft and comfortable for everyday use.',
      'Pairs well with IKEA bed frames and a wide range of bedroom interiors.',
      'Available in a spacious 240 × 220 cm size.'
    ],
    code: 'LASBRAKEN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹1,490',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'WORKSPACE',
    title: 'IKEA Promo Code – LENNART Drawer Unit from ₹1,490',
    description: 'Keep your workspace tidy with the IKEA LENNART drawer unit starting from ₹1,490.',
    points: [
      'Buy the LENNART drawer unit from ₹1,490.',
      'Organize paperwork, stationery, and everyday essentials with ease.',
      'Fits neatly beside study tables and office desks.',
      'Finished in white to suit modern interiors.'
    ],
    code: 'LENNART1490',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹899',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'NURSERY',
    title: 'IKEA Promo Code – LEN Cot Fitted Sheets from ₹899',
    description: "Add extra comfort to your baby's cot with IKEA LEN fitted sheets from ₹899.",
    points: [
      'Buy a 2-pack of LEN cot fitted sheets from ₹899.',
      'Designed to fit 60 × 120 cm baby cots.',
      'Made from soft fabric for everyday comfort.',
      'An ideal option for keeping your nursery neat and well-organised.'
    ],
    code: 'LEN899',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹399',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'STORAGE',
    title: 'IKEA Voucher – GREJIG Shoe Rack from ₹399',
    description: 'Keep your footwear organized with the compact IKEA GREJIG shoe rack from just ₹399.',
    points: [
      'Buy the GREJIG shoe rack starting from ₹399.',
      'Fits neatly in compact rooms and apartments.',
      'Keeps everyday shoes neatly stored and within easy reach.',
      'Easy to assemble and move whenever needed.'
    ],
    code: 'GREJIG399',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹49',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'KITCHENWARE',
    title: 'IKEA Voucher – POKAL Espresso Glass from ₹49',
    description: 'Serve your daily espresso in the IKEA POKAL glass, priced from just ₹49.',
    points: [
      'POKAL espresso glasses are available at prices starting from ₹49 per piece.',
      'Minimum purchase quantity is four pieces.',
      'Crafted from sturdy transparent glass that\'s suitable for daily use.',
      'Perfect for serving espresso and other beverages.'
    ],
    code: 'POKAL49',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'BEST OFFERS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'FURNITURE',
    title: 'IKEA Offers – Save on Mattresses & Bedroom Must-Haves',
    description: "Explore IKEA's collection of furniture and home essentials designed for comfortable everyday living.",
    points: [
      'Shop sofas, beds, chairs, and other popular furniture.',
      'Browse dining tables, study tables, and home office essentials.',
      'Upgrade your bedroom, kitchen, and living spaces with IKEA products.',
      'Visit your nearest IKEA store or shop online for the latest collections.'
    ],
    code: 'IKEABEDROOM',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'EXCLUSIVE',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0058A3]',
    color: '#0058A3',
    type: 'BEDROOM',
    title: 'IKEA Offers – Explore Modern Bedroom Sets & Mattresses',
    description: 'Find comfortable IKEA mattresses and bedroom furniture designed to improve your everyday sleep experience.',
    points: [
      'Browse IKEA mattresses in multiple sizes and comfort options.',
      'Pair them with IKEA beds, wardrobes, and storage solutions.',
      'Complete your bedroom with furniture designed to match your interior style.',
      'Shop online or visit your nearest IKEA store for more choices.'
    ],
    code: 'IKEAMATTRESS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];