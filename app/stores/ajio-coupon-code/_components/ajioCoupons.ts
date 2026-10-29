// Coupon type interface
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  points?: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const AJIO_COUPONS: Coupon[] = [
  {
    id: 'ajio-coupon-1',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'NEW USER',
    title: 'AJIO Coupon Code – Get Flat 30% Off on Your First Purchase',
    description: 'Enjoy special savings when you shop on AJIO for the first time.',
    points: [
      'Get a flat 30% discount on your first AJIO order.',
      'Shop fashion, footwear, accessories and beauty products.',
      'Valid for new users on eligible purchases.',
      'Enter the AJIO coupon code at checkout to unlock extra savings where it applies.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New User',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LEE COOPER',
    title: 'AJIO Coupon Code – Get Up to 60% Off on Lee Cooper',
    description: 'Update your wardrobe with premium Lee Cooper styles at lower prices.',
    points: [
      'Get up to 60% off on Lee Cooper clothing and footwear.',
      'Find casual wear, jeans and everyday basics.',
      'This Brand Day offer is available for a limited time.',
      'Use the AJIO coupon code to get extra discounts on eligible orders.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-3',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MIRAGGIO',
    title: 'AJIO Coupon Code – Get 50% Off on MIRAGGIO Bags',
    description: 'Upgrade your accessories collection at a lower cost.',
    points: [
      'Get at least 50% off on selected MIRAGGIO handbags.',
      'Shop totes, sling bags, shoulder bags and more.',
      'Great for work, travel and daily use.',
      'Enter the AJIO coupon code at checkout to save even more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-4',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'RARE RABBIT',
    title: 'AJIO Discount Code – Get 50% Off on Rare Rabbit Collection',
    description: 'Find premium menswear at attractive prices.',
    points: [
      'Get at least 50% off on Rare Rabbit clothing.',
      'Shop shirts, polos, trousers and casual wear.',
      'This fashion event runs for a limited period.',
      'Use the AJIO discount code to get extra savings on eligible products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-5',
    badge: '40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'US POLO ASSN',
    title: 'AJIO Discount Code – Get 40% Off on U.S. Polo Assn.',
    description: 'Add timeless fashion to your everyday wardrobe.',
    points: [
      'Get at least 40% off on U.S. Polo Assn. styles.',
      'Shop polos, shirts, denim and accessories.',
      'Available on selected collections.',
      'Apply the AJIO discount code before you pay to unlock extra discounts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-6',
    badge: '40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'UNDER ARMOUR',
    title: 'AJIO Discount Code – Get 40% Off on Under Armour',
    description: 'Shop premium activewear at special prices.',
    points: [
      'Get at least 40% off on Under Armour products.',
      'Choose from sportswear, shoes and accessories.',
      'Great for the gym and outdoor activities.',
      'Use the AJIO discount code on eligible orders to save extra.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-7',
    badge: '40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DA MILANO',
    title: 'AJIO Promo Code – Get 40% Off on DA MILANO',
    description: 'Buy premium leather accessories for less.',
    points: [
      'Get at least 40% off on DA MILANO collections.',
      'Shop wallets, handbags, belts and travel accessories.',
      'Made with premium materials.',
      'Apply the AJIO promo code to get extra savings where available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-8',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'KIDS WEAR',
    title: 'AJIO Promo Code – Get 70% Off on Trampoline Kids Wear',
    description: "Shop trendy kids' fashion without spending too much.",
    points: [
      'Get up to 70% off on Trampoline kidswear.',
      'Pick from stylish outfits for boys and girls.',
      'Good value on everyday basics.',
      'Use the AJIO promo code to unlock extra discounts on qualifying purchases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-9',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ARROW',
    title: 'AJIO Promo Code – Get 50% Off on Arrow Collection',
    description: 'Add premium styles to your formal wardrobe.',
    points: [
      'Get at least 50% off on Arrow clothing.',
      'Shop shirts, trousers, polos and more.',
      'Suits the office and formal occasions.',
      'Redeem the AJIO promo code to increase your total savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-10',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WROGN',
    title: 'AJIO Voucher Code – Get 50% Off on WROGN Fashion',
    description: 'Pick up stylish streetwear at great prices.',
    points: [
      'Get at least 50% off on WROGN collections.',
      'Shop T-shirts, shirts, jeans and sweatshirts.',
      'Explore the latest casual fashion.',
      'Use the AJIO voucher code to get extra discounts on eligible products.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-11',
    badge: '50% + 20% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PREMIUM EDIT',
    title: 'AJIO Voucher Code – Get 50% Off Plus Extra 20% Off on Premium Edit',
    description: 'Move up to premium brands with bigger savings.',
    points: [
      'Get at least 50% off, plus an extra 20% off.',
      'Includes Allen Solly, Van Heusen and more.',
      'The Premium Edit collection is available for a limited time.',
      'Apply the AJIO voucher code to get extra savings at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-12',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BROOKS BROTHERS',
    title: 'AJIO Voucher Code – Get 50% Off on Brooks Brothers Collection',
    description: 'Shop premium international fashion at lower prices.',
    points: [
      'Get at least 50% off on Brooks Brothers and more.',
      'Explore premium shirts, polos and trousers.',
      'Great value on luxury fashion.',
      'Redeem the AJIO voucher code on eligible purchases to get extra discounts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-13',
    badge: 'UNDER ₹299',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'TOPS & TEES',
    title: 'AJIO Offers – Tops & Tees Starting Under ₹299',
    description: 'Refresh your wardrobe with affordable everyday basics.',
    points: [
      'Shop tops and tees starting under ₹299.',
      'Includes DNMX, Teamspirit and more.',
      'Comes in many colours and styles.',
      'Use an AJIO coupon code on eligible products to save extra.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-14',
    badge: 'UNDER ₹999',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ETHNIC WEAR',
    title: 'AJIO Offers – Ethnic Wear Starting Under ₹999',
    description: 'Dress up in style for every occasion.',
    points: [
      'Shop ethnic wear starting under ₹999.',
      'Includes Jompers, See Designs and more.',
      'A great range of kurtas and festive wear.',
      'Apply an AJIO discount code to save more on qualifying orders.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-15',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WOMENS FASHION',
    title: 'AJIO Offers – Get Up to 65% Off on SHOWOFF & KOTTY',
    description: 'Update your fashion collection at unbeatable prices.',
    points: [
      'Get up to 65% off on selected collections.',
      'Shop dresses, tops, jeans and more.',
      'New styles are added regularly.',
      'Use the AJIO promo code to get extra discounts at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-16',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FOOTWEAR',
    title: 'Get 50% Off on Clarks & Steve Madden Footwear',
    description: 'Step into premium footwear at a lower price.',
    points: [
      'Get at least 50% off on selected footwear.',
      'Shop heels, loafers, sandals and sneakers.',
      'Includes premium international brands.',
      'This AJIO sale runs for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-17',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LANEY FASHION',
    title: 'Get 60% Off on Laney Fashion Collection',
    description: "Refresh your wardrobe with trendy women's fashion.",
    points: [
      'Get up to 60% off on Laney Fashion.',
      'Browse dresses, tops and everyday basics.',
      'Stylish designs at affordable prices.',
      'This offer is available for a limited period.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-18',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LUXURY BRAND',
    title: 'Get 50% Off on GAS, GANT & More',
    description: 'Shop premium international fashion brands.',
    points: [
      'Get at least 50% off on selected collections.',
      'Includes GAS, GANT and more.',
      'Good deals on casual and smart-casual wear.',
      'Available while stocks last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-19',
    badge: '45% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FASHION BRANDS',
    title: 'Get 45% Off on U.S. Polo Assn. & Rare Rabbit',
    description: 'Shop premium fashion from leading brands.',
    points: [
      'Get at least 45% off on selected collections.',
      'Choose from shirts, polos, jeans and more.',
      'Good value for everyday fashion.',
      'This offer is available for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-20',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FORMAL WEAR',
    title: 'Get 50% Off on Allen Solly & Van Heusen',
    description: 'Add premium brands to your formal wardrobe.',
    points: [
      'Get at least 50% off on selected styles.',
      'Includes office wear and smart casual outfits.',
      'An extra 20% off is available on selected products.',
      'This offer is valid for a limited period.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-21',
    badge: 'UNDER ₹299',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BUDGET STORE',
    title: 'Shop Fashion Under ₹299 on AJIO',
    description: 'Get budget-friendly fashion without giving up style.',
    points: [
      'Find stylish tops and tees under ₹299.',
      'Explore popular brands across many categories.',
      'Good value for everyday shopping.',
      'This online deal is available for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  },
  {
    id: 'ajio-coupon-22',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BRAND DAY',
    title: 'Get Up to 50% Off on AJIO Brand Day Collections',
    description: "Don't miss the special savings on Brand Day.",
    points: [
      'Get up to 50% off on leading fashion brands.',
      'Shop clothing, footwear, accessories and more.',
      'New deals are added throughout the sale.',
      'This AJIO shopping event runs for a limited period.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Oct 2026'
  }
];