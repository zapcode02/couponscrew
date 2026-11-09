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

export const SUPER_SATURDAY_OFFERS_DATA: Offer[] = [
  // --- AMAZON OFFERS ---
  {
    id: 'amazon-coupon-5',
    brandName: 'Amazon',
    brandLogo: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqjlffxja%2Fimage%2Fupload%2Fv1786210525%2Famazon-logo_snb5za.jpg&w=256&q=75',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'amazon-coupon-code',
    category: 'BACKPACKS',
    badgeType: 'FLAT',
    discountValue: '84% OFF',
    scopeText: 'BACKPACKS',
    title: 'Amazon Discount Code – 84% Off on Safari Omega Laptop Backpack',
    description: 'Carry your things in comfort with this roomy backpack for laptops.',
    points: [
      'The Safari Omega 30L Laptop Backpack is available for ₹549, which is 84% less.',
      'A rain cover and many storage sections are included.',
      'Its listed price is ₹3,396.',
      'Handy for college, work and trips.'
    ],
    isVerified: true,
    usedCount: '3.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-6',
    brandName: 'Amazon',
    brandLogo: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqjlffxja%2Fimage%2Fupload%2Fv1786210525%2Famazon-logo_snb5za.jpg&w=256&q=75',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'amazon-coupon-code',
    category: 'FOOTWEAR',
    badgeType: 'FLAT',
    discountValue: '84% OFF',
    scopeText: 'FOOTWEAR',
    title: 'Amazon Discount Code – 84% Off on BRUTON EVA Lite Running Shoes',
    description: 'Get a new pair of running shoes at a big discount.',
    points: [
      'The BRUTON EVA Lite Running Shoes cost only ₹398, an 84% reduction.',
      'The light build keeps them comfortable for daily use.',
      'Their listed price is ₹2,499.',
      'Eligible sizes can also get a further coupon saving.'
    ],
    isVerified: true,
    usedCount: '2.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- FLIPKART OFFERS ---
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
    usedCount: '3.2k',
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
    usedCount: '2.9k',
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
    usedCount: '2.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- MYNTRA OFFERS ---
  {
    id: 'myntra-marks-harbour-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    storeSlug: 'myntra-coupon-code',
    category: 'CASUAL WEAR',
    badgeType: 'UP TO',
    discountValue: '70% OFF',
    scopeText: 'CASUAL WEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on Marks & Harbour',
    description: 'Update your casual wardrobe with trendy everyday pieces.',
    points: [
      'Get 40%–70% off on selected clothing.',
      'Pick from shirts, T-shirts, jeans and daily wear.',
      'Use the coupon code to get an extra 10% off where it applies.',
      'Great for relaxed, everyday looks.'
    ],
    isVerified: true,
    usedCount: '2.4k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntra-carlton-london-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    storeSlug: 'myntra-coupon-code',
    category: 'FOOTWEAR & ACCESSORIES',
    badgeType: 'UP TO',
    discountValue: '70% OFF',
    scopeText: 'FOOTWEAR & ACCESSORIES',
    title: 'Myntra Discount Code – Get Up to 70% Off on Carlton London',
    description: 'Pick up premium shoes and fashion accessories at a lower price.',
    points: [
      'Get 30%–70% off on Carlton London products.',
      'Look through shoes, handbags, wallets and accessories.',
      'Use the coupon code to save extra on eligible purchases.',
      'These fashion offers are available for a limited time.'
    ],
    isVerified: true,
    usedCount: '2.0k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntra-jack-jones-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    storeSlug: 'myntra-coupon-code',
    category: 'MENSWEAR',
    badgeType: 'UP TO',
    discountValue: '60% OFF',
    scopeText: 'MENSWEAR',
    title: 'Myntra Discount Code – Get Up to 60% Off on Jack & Jones',
    description: 'Add premium menswear to your everyday wardrobe.',
    points: [
      'Get 40%–60% off on Jack & Jones collections.',
      'Choose from jeans, shirts, jackets and T-shirts.',
      'Use the coupon code to get an extra 10% off where it applies.',
      'Works well for smart casual outfits.'
    ],
    isVerified: true,
    usedCount: '2.7k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- PUMA OFFERS ---
  {
    id: 'ss-puma-1',
    brandName: 'Puma',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'puma-coupon-code',
    category: 'SPORTSWEAR',
    badgeType: 'UP TO',
    discountValue: '60% OFF',
    scopeText: 'ON SITEWIDE',
    title: 'Puma Sitewide Sale — Up to 60% OFF + Extra 10% for First-Time Shoppers',
    description: 'Shop footwear, clothing, and accessories on Puma and save up to 60% — sign up and apply the coupon code to get an extra 10% off your first order with free shipping.',
    points: [
      'Valid on select footwear & apparel categories.',
      'Minimum cart value might apply as specified on descriptions.',
      'Covers selected styles and product collections.'
    ],
    isVerified: true,
    usedCount: '3.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'First Time Users'
  },
  {
    id: 'ss-puma-2',
    brandName: 'Puma',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'puma-coupon-code',
    category: 'SPORTSWEAR',
    badgeType: 'EXTRA',
    discountValue: '5% OFF',
    scopeText: 'ON SELECTED PRODUCTS',
    title: 'Get Extra 5% OFF on Selected Puma Products',
    description: 'Shop selected Puma products and save an extra 5% — apply the coupon code at checkout on all eligible items.',
    points: [
      'Valid on select footwear & apparel categories.',
      'Minimum cart value might apply as specified on descriptions.',
      'Covers selected styles and product collections.'
    ],
    isVerified: true,
    usedCount: '2.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'ss-puma-3',
    brandName: 'Puma',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'puma-coupon-code',
    category: 'FOOTWEAR',
    badgeType: 'UP TO',
    discountValue: '57% OFF',
    scopeText: 'ON MENS SNEAKERS',
    title: "Men's Sneakers at Puma — Up to 57% OFF on Top Styles",
    description: "Shop Puma's men's sneaker range at up to 57% off — covers popular styles including RS-X, Oslo-City, Anzarun, Wired, and more.",
    points: [
      'Valid on select footwear & apparel categories.',
      'Minimum cart value might apply as specified on descriptions.',
      'Covers selected styles and product collections.'
    ],
    isVerified: true,
    usedCount: '2.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'ss-puma-4',
    brandName: 'Puma',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp',
    dealUrl: 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl',
    storeSlug: 'puma-coupon-code',
    category: 'WOMENS FASHION',
    badgeType: 'UP TO',
    discountValue: '57% OFF',
    scopeText: 'ON WOMENS ACTIVEWEAR',
    title: "Women's Sportswear & Activewear at Puma — Up to 57% OFF",
    description: "Shop Puma's women's sportswear and activewear range at up to 57% off — includes yoga accessories, badminton shoes, ballerinas, slip-ons, and exclusive collections.",
    points: [
      'Valid on select footwear & apparel categories.',
      'Minimum cart value might apply as specified on descriptions.',
      'Covers selected styles and product collections.'
    ],
    isVerified: true,
    usedCount: '2.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- AJIO OFFERS ---
  {
    id: 'ss-ajio-1',
    brandName: 'AJIO',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/ajio-logo_bmpwf6.webp',
    dealUrl: 'https://ajiio.in/Q6clHNy',
    storeSlug: 'ajio-coupon-code',
    category: 'FASHION',
    badgeType: 'FLAT',
    discountValue: '30% OFF',
    scopeText: 'ON FIRST PURCHASE',
    title: 'AJIO Coupon Code – Get Flat 30% Off on Your First Purchase',
    description: 'Enjoy special savings when you shop on AJIO for the first time.',
    points: [
      'Get a flat 30% discount on your first AJIO order.',
      'Shop fashion, footwear, accessories and beauty products.',
      'Valid for new users on eligible purchases.',
      'Enter the AJIO coupon code at checkout to unlock extra savings where it applies.'
    ],
    isVerified: true,
    usedCount: '4.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'New Users'
  },
  {
    id: 'ss-ajio-2',
    brandName: 'AJIO',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/ajio-logo_bmpwf6.webp',
    dealUrl: 'https://ajiio.in/Q6clHNy',
    storeSlug: 'ajio-coupon-code',
    category: 'CASUAL WEAR',
    badgeType: 'UP TO',
    discountValue: '60% OFF',
    scopeText: 'ON LEE COOPER',
    title: 'AJIO Coupon Code – Get Up to 60% Off on Lee Cooper',
    description: 'Update your wardrobe with premium Lee Cooper styles at lower prices.',
    points: [
      'Get up to 60% off on Lee Cooper clothing and footwear.',
      'Find casual wear, jeans and everyday basics.',
      'This Brand Day offer is available for a limited time.',
      'Use the AJIO coupon code to get extra discounts on eligible orders.'
    ],
    isVerified: true,
    usedCount: '2.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'ss-ajio-3',
    brandName: 'AJIO',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/ajio-logo_bmpwf6.webp',
    dealUrl: 'https://ajiio.in/Q6clHNy',
    storeSlug: 'ajio-coupon-code',
    category: 'HANDBAGS',
    badgeType: 'FLAT',
    discountValue: '50% OFF',
    scopeText: 'ON MIRAGGIO BAGS',
    title: 'AJIO Coupon Code – Get 50% Off on MIRAGGIO Bags',
    description: 'Upgrade your accessories collection at a lower cost.',
    points: [
      'Get at least 50% off on selected MIRAGGIO handbags.',
      'Shop totes, sling bags, shoulder bags and more.',
      'Great for work, travel and daily use.',
      'Enter the AJIO coupon code at checkout to save even more.'
    ],
    isVerified: true,
    usedCount: '2.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'ss-ajio-4',
    brandName: 'AJIO',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/ajio-logo_bmpwf6.webp',
    dealUrl: 'https://ajiio.in/Q6clHNy',
    storeSlug: 'ajio-coupon-code',
    category: 'MENSWEAR',
    badgeType: 'FLAT',
    discountValue: '50% OFF',
    scopeText: 'ON RARE RABBIT',
    title: 'AJIO Discount Code – Get 50% Off on Rare Rabbit Collection',
    description: 'Find premium menswear at attractive prices.',
    points: [
      'Get at least 50% off on Rare Rabbit clothing.',
      'Shop shirts, polos, trousers and casual wear.',
      'This fashion event runs for a limited period.',
      'Use the AJIO discount code to get extra savings on eligible products.'
    ],
    isVerified: true,
    usedCount: '3.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  }
];