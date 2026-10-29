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

export const MYNTRA_COUPONS: Coupon[] = [
  {
    id: 'myntra-puma-1',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'SPORTSWEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on Puma',
    description: 'Give your sportswear a fresh look with big savings on Puma clothing and shoes.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 30%–70% off on selected Puma products.',
      'Choose from sports shoes, T-shirts, jackets and activewear.',
      'Apply the CREW10 coupon code to get an extra 10% off on eligible products.',
      'A good time to update your workout wardrobe.'
    ]
  },
  {
    id: 'myntra-hrx-1',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'FITNESS WEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on HRX',
    description: 'Buy premium fitness clothing and footwear at special sale prices.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–70% off on selected HRX collections.',
      'Browse gym wear, sneakers, joggers and training gear.',
      'Use the CREW10 coupon code to get an extra 10% off on eligible orders.',
      'Made for people who love fitness.'
    ]
  },
  {
    id: 'myntra-marks-harbour-1',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on Marks & Harbour',
    description: 'Update your casual wardrobe with trendy everyday pieces.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–70% off on selected clothing.',
      'Pick from shirts, T-shirts, jeans and daily wear.',
      'Use the CREW10 coupon code to get an extra 10% off where it applies.',
      'Great for relaxed, everyday looks.'
    ]
  },
  {
    id: 'myntra-carlton-london-1',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'FOOTWEAR & ACCESSORIES',
    title: 'Myntra Discount Code – Get Up to 70% Off on Carlton London',
    description: 'Pick up premium shoes and fashion accessories at a lower price.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 30%–70% off on Carlton London products.',
      'Look through shoes, handbags, wallets and accessories.',
      'Use the CREW10 coupon code to save extra on eligible purchases.',
      'These fashion offers are available for a limited time.'
    ]
  },
  {
    id: 'myntra-jack-jones-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'MENSWEAR',
    title: 'Myntra Discount Code – Get Up to 60% Off on Jack & Jones',
    description: 'Add premium menswear to your everyday wardrobe.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–60% off on Jack & Jones collections.',
      'Choose from jeans, shirts, jackets and T-shirts.',
      'Use the CREW10 coupon code to get an extra 10% off where it applies.',
      'Works well for smart casual outfits.'
    ]
  },
  {
    id: 'myntra-mango-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'WOMENSWEAR',
    title: 'Myntra Discount Code – Get Up to 60% Off on Mango',
    description: "Find stylish women's fashion at great prices.",
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 30%–60% off on Mango clothing.',
      'Browse dresses, tops, jeans and other fashion basics.',
      'Use the CREW10 coupon code to get extra discounts on eligible styles.',
      'A good fit for daily wear and the office.'
    ]
  },
  {
    id: 'myntra-wrogn-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Myntra Promo Code – Get Up to 60% Off on Wrogn',
    description: 'Refresh your wardrobe with the fashion brand of Virat Kohli.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 30%–60% off on selected Wrogn clothing.',
      'Shop trendy shirts, T-shirts, jeans and jackets.',
      'Use the CREW10 coupon code to get an extra 10% off on eligible items.',
      'A great pick for modern casual style.'
    ]
  },
  {
    id: 'myntra-vishudh-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'ETHNIC WEAR',
    title: 'Myntra Promo Code – Get Up to 60% Off on Vishudh',
    description: 'Buy ethnic wear at special festival prices.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–60% off on selected Vishudh collections.',
      'Explore kurtas, tops, dresses and other ethnic wear.',
      'Use the CREW10 coupon code to save even more where it applies.',
      'Suits both festive days and regular days.'
    ]
  },
  {
    id: 'myntra-sassafras-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'WESTERN WEAR',
    title: 'Myntra Voucher Code – Get Up to 60% Off on Sassafras',
    description: 'Bring trendy western outfits into your wardrobe for less.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–60% off on Sassafras fashion.',
      'Shop dresses, tops, co-ords and casual wear.',
      'Use the CREW10 coupon code to get an extra discount on eligible products.',
      'Perfect for stylish looks every day.'
    ]
  },
  {
    id: 'myntra-roadster-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Myntra Voucher Code – Get Up to 60% Off on Roadster',
    description: 'Enjoy casual fashion at big discounts.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–60% off on Roadster collections.',
      'Pick from jeans, shirts, jackets and other casual basics.',
      'Use the CREW10 coupon code to get an extra 10% off where it applies.',
      'Good value for your daily outfits.'
    ]
  },
  {
    id: 'myntra-libas-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'ETHNIC WEAR',
    title: 'Myntra Offers – Get Up to 60% Off on Libas',
    description: 'Add elegant styles to your ethnic collection.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get 40%–60% off on Libas ethnic wear.',
      'Explore kurtas, suits, dresses and festive collections.',
      'Use the CREW10 coupon code to save extra on eligible orders.',
      'Ideal for festive celebrations.'
    ]
  },
  {
    id: 'myntra-ucb-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Myntra Offers – Get Up to 60% Off on United Colors of Benetton',
    description: 'Upgrade your premium casual wardrobe at a lower cost.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 60% off on selected Benetton collections.',
      'Shop polos, T-shirts, shirts and denim.',
      'Use the CREW10 coupon code to get an extra 10% off where available.',
      'Premium daily fashion at lower prices.'
    ]
  },
  {
    id: 'myntra-spaces-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'HOME ESSENTIALS',
    title: 'Myntra Offers – Get Up to 60% Off on Spaces',
    description: 'Give your bedroom a better look with premium home essentials.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 60% off on Spaces home collections.',
      'Shop bedsheets, comforters, blankets and other bedding.',
      'Use the CREW10 coupon code to save extra where it applies.',
      'A great way to freshen up your home.'
    ]
  },
  {
    id: 'myntra-uspa-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Get Up to 50% Off on U.S. Polo Assn.',
    description: 'Find timeless fashion for every occasion.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 50% off on selected U.S. Polo Assn. clothing.',
      'Choose from polos, shirts, jeans and casual wear.',
      'Use the CREW10 coupon code to get an extra 10% off on eligible orders.',
      'Great for premium everyday style.'
    ]
  },
  {
    id: 'myntra-sangria-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'ETHNIC WEAR',
    title: 'Get Up to 50% Off on Sangria',
    description: 'Dress up for every occasion in beautiful ethnic fashion.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 50% off on Sangria collections.',
      'Shop kurtas, suits, sarees and festive wear.',
      'Use the CREW10 coupon code to save extra where it applies.',
      'Perfect for festive and traditional looks.'
    ]
  },
  {
    id: 'myntra-w-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'ETHNIC WEAR',
    title: "Get Up to 50% Off on W",
    description: 'Refresh your ethnic wardrobe with elegant designs.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 50% off on W women\'s fashion.',
      'Explore kurtas, suits, dresses and fusion wear.',
      'Use the CREW10 coupon code to save extra on eligible products.',
      'Stylish choices for work and celebrations.'
    ]
  },
  {
    id: 'myntra-hidesign-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'LEATHER ACCESSORIES',
    title: 'Get Up to 50% Off on Hidesign',
    description: 'Buy premium leather accessories at great prices.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get up to 50% off on Hidesign products.',
      'Shop handbags, wallets, belts and other accessories.',
      'Use the CREW10 coupon code to save extra where available.',
      'Fine craftsmanship at limited-time prices.'
    ]
  },
  {
    id: 'myntra-loreal-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'BEAUTY & CARE',
    title: "Get Up to 40% Off on L'Oréal Paris",
    description: 'Improve your beauty routine with trusted skincare products.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      "Get up to 40% off on L'Oréal Paris essentials.",
      'Shop skincare, makeup, haircare and other beauty products.',
      'Use the CREW10 coupon code to get extra discounts on eligible items.',
      'A good time to stock up on beauty basics.'
    ]
  },
  {
    id: 'myntra-indian-terrain-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5F4FBE]',
    color: '#5F4FBE',
    type: 'CASUAL WEAR',
    title: 'Get Up to 40% Off on Indian Terrain',
    description: 'Shop premium casual wear that feels comfortable every day.',
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Get at least 40% off on Indian Terrain fashion.',
      'Explore shirts, polos, jeans and trousers.',
      'Use the CREW10 coupon code to save extra where it applies.',
      'Ideal for office days and weekends.'
    ]
  }
];