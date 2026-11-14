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
  points: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const HANDM_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: "WOMEN'S TOPS",
    title: "Women's Tops: Up to 75% Off | From ₹499",
    description: "Up to 75% off on women's tops across the latest H&M collection. Prices start from ₹499.",
    points: [
      'Covers the latest women\'s tops collection, not older archived styles.',
      'Entry-level pricing starts from ₹499.',
      'Discount varies by style — up to 75% is the maximum available.',
      'Check size availability as popular styles sell out fastest.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'TROUSERS',
    title: 'Trousers: Up to 75% Off | From ₹299',
    description: 'Up to 75% off on H&M trousers. Prices start from ₹299 across the latest styles.',
    points: [
      'Covers the latest trouser styles across multiple fits.',
      'Entry-level pricing starts from ₹299.',
      'Discount varies by style — up to 75% is the maximum.',
      'Check fit guide before ordering since trouser sizing varies by cut.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE SALE',
    title: 'Sitewide Sale: Up to 70% Off + Extra 10% Off for New Users',
    description: "Up to 70% off on the latest H&M collections across women's, men's, and kids' — plus an extra 10% off for first-time shoppers.",
    points: [
      'Extra 10% off is limited to first-time shoppers on a new account.',
      'Covers women\'s, men\'s, and kids\' collections broadly.',
      'Discount varies by product — up to 70% is the maximum, not every item.',
      'Existing users still get the base sale discount, just not the extra 10%.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New & Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: "WOMEN'S FASHION",
    title: "Get Up to 60% Off on Women's Dresses, Tops & Ethnic Wear",
    description: "Shop the latest women's fashion collection — dresses, tops, denims & ethnic wear — at up to 60% OFF.",
    points: [
      'Covers dresses, tops, denims, and ethnic wear within the women\'s collection.',
      'Discount varies by category and style — up to 60% is the maximum.',
      'Ethnic wear selection may be more limited compared to Western wear.',
      'Check size charts carefully as H&M sizing can run differently across categories.'
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
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'KIDS WEAR',
    title: 'Up to 50% Off on Kids & Baby Clothing',
    description: 'Shop playful, comfortable clothing for babies, toddlers and kids at up to 50% OFF.',
    points: [
      'Covers babies, toddlers, and kids\' sizing ranges.',
      'Discount varies by product — up to 50% is the maximum available.',
      'Check age/size charts carefully as baby sizing varies by brand.',
      'Good for building a full seasonal wardrobe at reduced prices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'ACCESSORIES',
    title: 'Accessories: Flat 50% Off | From ₹99',
    description: 'Flat 50% off on selected H&M accessories. Prices start from ₹99.',
    points: [
      'Limited to selected accessories, not the entire accessories catalogue.',
      'Entry-level pricing starts from ₹99.',
      'Flat 50% off applies automatically, no code typically needed.',
      'Good for small gifting items or quick wardrobe add-ons.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: "MEN'S FASHION",
    title: "Flat 40% Off on Men's T-Shirts, Shirts & Denims",
    description: "Get a flat 40% discount across men's casual and formal wear including t-shirts, shirts, and jeans.",
    points: [
      'Covers both casual and formal wear — t-shirts, shirts, and jeans.',
      'Flat 40% off applies across the eligible men\'s range.',
      'Check fit type (slim, regular, relaxed) before ordering.',
      'No code typically needed — discount reflects at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'HOME & TEXTILES',
    title: 'Up to 30% Off on Home Décor & Bedding Essentials',
    description: 'Refresh your space with cushion covers, bedding sets, curtains and décor accents at up to 30% OFF.',
    points: [
      'Covers cushion covers, bedding sets, curtains, and décor accents.',
      'Discount varies by product — up to 30% is the maximum.',
      'Check fabric care instructions before purchasing bedding items.',
      'A separate category from H&M\'s fashion lines, worth checking if redecorating.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'MEMBERS EXCLUSIVE',
    title: 'Members Exclusive: Flat 25% Off on Selected Styles',
    description: 'Flat 25% off on selected H&M styles — exclusively for H&M members.',
    points: [
      'Requires active H&M membership — not available to non-members.',
      'Limited to selected styles, not the entire catalogue.',
      'Membership is free to join via the H&M app or website.',
      'Discount applies automatically once logged in as a member.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Members Only',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5AC8FA]',
    color: '#5AC8FA',
    type: 'KIDS WEAR',
    title: "Baby & Kids Wear: 15% Off (All Users) | 20% Off (Plus Members)",
    description: "15% off on baby and kids' clothing for all users — Plus members get 20% off. Prices from ₹399.",
    points: [
      'All users get 15% off; Plus members get an upgraded 20% off on the same range.',
      'Entry-level pricing starts from ₹399.',
      'Plus membership status is checked automatically at checkout.',
      'Covers both baby and kids\' clothing categories.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: "MEN'S FASHION",
    title: "Men's Fashion: Flat 15% Off | From ₹399",
    description: "Flat 15% off on a wide range of men's fashion at H&M. Prices start from ₹399.",
    points: [
      'Covers a wide range of men\'s fashion categories broadly.',
      'Entry-level pricing starts from ₹399.',
      'Flat 15% off applies automatically, no code typically needed.',
      'Check size and fit guide before ordering across different style categories.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'NEW MEMBERS',
    title: 'New H&M Members: Flat 10% Off on First Purchase (App Only)',
    description: 'Flat 10% off on your first purchase as a new H&M member — no promo code needed, discount applies automatically.',
    points: [
      'App-exclusive — not available when purchasing via the website.',
      'Limited to your very first purchase after becoming a new member.',
      'No promo code needed — discount reflects automatically at checkout.',
      'One-time use per new member account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹999',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'INDIA STYLES',
    title: 'Hand-Picked India Styles: From ₹999',
    description: 'Distinctive H&M styles selected for the Indian market — starting from ₹999 across a range of wardrobe staples.',
    points: [
      'Curated specifically for the Indian market, not a global catalogue carryover.',
      'Entry-level pricing starts from ₹999.',
      'Covers a range of wardrobe staples rather than one single category.',
      'Selection may be limited compared to H&M\'s full international range.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FROM ₹1,299',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: "WOMEN'S JEANS",
    title: "Women's Jeans: Starting From ₹1,299",
    description: "Women's jeans at H&M starting from ₹1,299 — available in a range of fits and styles.",
    points: [
      'Entry-level pricing starts from ₹1,299.',
      'Available across a range of fits — skinny, straight, wide-leg, and more.',
      'Women\'s sizing only — check the size chart before ordering.',
      'Denim weight and wash vary by style, worth checking product descriptions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FROM ₹699',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'LINGERIE',
    title: 'Lingerie & Underwear: Starting From ₹699',
    description: 'H&M lingerie and underwear range starting from ₹699 — bras, underwear, briefs, knickers, and shapewear.',
    points: [
      'Covers bras, underwear, briefs, knickers, and shapewear.',
      'Entry-level pricing starts from ₹699.',
      'Check size guide carefully as lingerie sizing varies significantly by brand.',
      'Exchanges on intimate wear may be restricted — check the return policy before ordering.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'SHIPPING',
    title: 'Free Shipping on All Orders — No Minimum',
    description: 'Free delivery on all H&M orders today — no minimum cart value, discount applied automatically at checkout.',
    points: [
      'No minimum cart value required — applies even on single-item orders.',
      'Applied automatically at checkout, no code needed.',
      'Standard delivery timelines still apply despite the free shipping.',
      'Worth checking if this is a limited-time promotion or a standing policy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'FROM ₹799',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'INDIA EXCLUSIVE',
    title: 'India Exclusive Collection: From ₹799',
    description: "Shop H&M's India-exclusive picks — tops, trousers, dresses, and more, starting from ₹799.",
    points: [
      'India-exclusive — these styles may not appear in H&M\'s global catalogue.',
      'Entry-level pricing starts from ₹799.',
      'Covers tops, trousers, dresses, and other wardrobe pieces.',
      'Limited collection, so sizes may sell out faster than mainline items.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: '100 BONUS PTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'MEMBERSHIP',
    title: 'Join H&M Membership: 100 Bonus Points + Free Delivery',
    description: 'Become a free H&M member and get 100 welcome bonus points, free standard delivery on orders above ₹1,999, and access to member-only perks.',
    points: [
      'H&M membership is completely free to join.',
      '100 welcome points are credited upon sign-up, usable toward future discounts.',
      'Free standard delivery requires orders above ₹1,999.',
      'Member-only perks include early sale access and bonus points on purchases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FROM ₹399',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'TOP SELLERS',
    title: "H&M Top Sellers: From ₹399 — Men, Women & Kids",
    description: "H&M's best-selling styles for men, women, and kids starting from ₹399.",
    points: [
      'Features best-selling styles, which may shift over time as trends change.',
      'Entry-level pricing starts from ₹399.',
      'Covers men\'s, women\'s, and kids\' categories together.',
      'Popular items here may sell out quickly given their best-seller status.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'UNDER ₹599',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'TRENDY LOOKS',
    title: 'Trendy Looks Under ₹599 | From ₹199',
    description: 'Latest H&M styles under ₹599 — prices starting from ₹199.',
    points: [
      'All items in this range are priced under ₹599.',
      'Entry-level pricing starts from as low as ₹199.',
      'Good budget-friendly option for building a seasonal wardrobe cheaply.',
      'Selection may be more limited compared to full-price latest collections.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'EXCLUSIVE DEALS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'SIGN UP',
    title: 'Sign Up & Get Exclusive New Member Discounts',
    description: 'Sign up for H&M and get exclusive deals on jeans, dresses, jackets, shoes, tops, hoodies, and more.',
    points: [
      'Only valid for new sign-ups, not existing members.',
      'Covers jeans, dresses, jackets, shoes, tops, hoodies, and more broadly.',
      'Exclusive deals are typically sent via email or shown in-app after sign-up.',
      'Discount specifics may vary by category — check the member deals page after joining.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-22',
    badge: 'FROM ₹399',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: "MEN'S GRAPHIC TEES",
    title: "Men's Graphic & Printed T-Shirts: From ₹399",
    description: "Men's graphic tees and printed t-shirts at H&M starting from ₹399 — band tees, monochrome prints, pop culture designs, and more.",
    points: [
      'Covers band tees, monochrome prints, and pop culture designs specifically.',
      'Entry-level pricing starts from ₹399.',
      'Limited edition prints or licensed collaborations may sell out faster.',
      'Men\'s sizing only — check the fit guide before ordering.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-23',
    badge: 'FROM ₹799',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'SWEATSHIRTS & HOODIES',
    title: 'Sweatshirts & Hoodies: From ₹799',
    description: 'H&M sweatshirts and hoodies starting from ₹799 — no promo code needed.',
    points: [
      'Entry-level pricing starts from ₹799.',
      'No promo code needed — pricing is already reflected in the listing.',
      'Covers both sweatshirts and hoodies across multiple styles.',
      'Check fabric weight if ordering for a specific season or climate.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-24',
    badge: 'FROM ₹1,499',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'JACKETS & COATS',
    title: 'Jackets & Coats: From ₹1,499',
    description: 'H&M jackets and coats starting from ₹1,499 — faux fur, shearling, metallic shackets, oversized jackets, and calf-length coats across all sizes.',
    points: [
      'Covers faux fur, shearling, metallic shackets, oversized jackets, and calf-length coats.',
      'Entry-level pricing starts from ₹1,499.',
      'Available across all sizes, per the listing.',
      'Check material care instructions, especially for faux fur and shearling pieces.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-25',
    badge: 'FROM ₹1,499',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'DENIM COLLECTION',
    title: 'Denim Collection: From ₹1,499',
    description: 'H&M jeans starting from ₹1,499 in cotton and denim across multiple fits.',
    points: [
      'Entry-level pricing starts from ₹1,499.',
      'Available in cotton and traditional denim fabrics.',
      'Multiple fits offered — skinny, straight, wide, and more.',
      'Check the fabric stretch percentage if a particular fit comfort matters to you.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-26',
    badge: 'FROM ₹149',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'NEWBORN ESSENTIALS',
    title: 'Newborn Essentials: From ₹149',
    description: 'H&M newborn clothing for boys and girls aged 0–9 months, starting from ₹149 — soft, practical, and designed for everyday comfort.',
    points: [
      'Sized specifically for newborns aged 0-9 months — check the exact age range on each item.',
      'Entry-level pricing starts from ₹149.',
      'Designed with soft, practical fabrics suited to newborn skin.',
      'Covers both boys\' and girls\' options within this age range.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
