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

export const OFFERS_DATA: Offer[] = [

  // --- AMAZON OFFERS ---
  {
    id: 'amazon-coupon-1',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Electronics',
    badgeType: 'FLAT',
    discountValue: '92%',
    scopeText: 'ON MOBILE CASES',
    title: 'Amazon Coupon Code – 92% Off on Nillkin iPhone 15 Pro Max Magnetic Case',
    description: 'Give your iPhone strong cover at a small price this Great Indian Festival.',
    points: [
      'The Nillkin iPhone 15 Pro Max Magnetic Case is available for ₹679, which is 92% less.',
      'It is built from magnetic liquid silicone with a premium feel.',
      'Its listed price is ₹7,998.',
      'A neat finish that protects your phone every day.'
    ],
    isVerified: true,
    usedCount: '2.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-2',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '91%',
    scopeText: "ON WOMEN'S FASHION",
    title: "Amazon Coupon Code – 91% Off on Women's Cotton Blend Printed Short Kurti",
    description: 'Pick up a new festive outfit with this fashion deal.',
    points: [
      "The Women's Cotton Blend Printed Short Kurti costs just ₹179, a 91% reduction.",
      'It has a regular fit, round neck and half sleeves.',
      'Its listed price is ₹1,999.',
      'Easy to wear on normal days and on festive occasions.'
    ],
    isVerified: true,
    usedCount: '1.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-3',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Electronics',
    badgeType: 'FLAT',
    discountValue: '90%',
    scopeText: 'ON MOBILE CASES',
    title: 'Amazon Coupon Code – 90% Off on Nillkin CamShield iPhone 13 Pro Case',
    description: 'Protect your phone with one of the biggest price drops on offer.',
    points: [
      'The Nillkin CamShield iPhone 13 Pro Case is priced at ₹509, which is 90% lower.',
      'A slide-over cover keeps the camera lens covered.',
      'Its listed price is ₹4,999.',
      'Helps your iPhone stay free of scratches.'
    ],
    isVerified: true,
    usedCount: '1.4k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-4',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '87%',
    scopeText: 'ON ETHNIC WEAR',
    title: "Amazon Discount Code – 87% Off on Women's Crepe Kurti",
    description: 'Check out stylish ethnic wear at a tiny price.',
    points: [
      "The Women's Crepe Kurti is yours for only ₹99, an 87% cut.",
      'It comes with a straight fit and 3/4 sleeves.',
      'Its listed price is ₹749.',
      'Looks good at work and in casual settings.'
    ],
    isVerified: true,
    usedCount: '2.5k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-5',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '84%',
    scopeText: 'ON BACKPACKS',
    title: 'Amazon Discount Code – 84% Off on Safari Omega Laptop Backpack',
    description: 'Carry your things in comfort with this roomy backpack for laptops.',
    points: [
      'The Safari Omega 30L Laptop Backpack is available for ₹549, which is 84% less.',
      'A rain cover and many storage sections are included.',
      'Its listed price is ₹3,396.',
      'Handy for college, work and trips.'
    ],
    isVerified: true,
    usedCount: '1.9k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-6',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '84%',
    scopeText: 'ON FOOTWEAR',
    title: 'Amazon Discount Code – 84% Off on BRUTON EVA Lite Running Shoes',
    description: 'Get a new pair of running shoes at a big discount.',
    points: [
      'The BRUTON EVA Lite Running Shoes cost only ₹398, an 84% reduction.',
      'The light build keeps them comfortable for daily use.',
      'Their listed price is ₹2,499.',
      'Eligible sizes can also get a further coupon saving.'
    ],
    isVerified: true,
    usedCount: '3.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-7',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '84%',
    scopeText: 'ON FOOTWEAR',
    title: 'Amazon Promo Code – 84% Off on BlueBlaze Running Shoes',
    description: 'Choose light sports shoes at a very low price.',
    points: [
      'The BlueBlaze EVA Lite Running Shoes are available for ₹483, which is 84% lower.',
      'The mesh upper lets your feet breathe through the day.',
      'Their listed price is ₹2,999.',
      'Selected sizes can get an additional coupon saving.'
    ],
    isVerified: true,
    usedCount: '1.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-8',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '83%',
    scopeText: "ON WOMEN'S FOOTWEAR",
    title: 'Amazon Promo Code – 83% Off on BRUTON Wedge Sandals',
    description: 'Add a stylish new pair to your footwear at a low price.',
    points: [
      "The BRUTON Women's Wedge Sandals cost just ₹418, an 83% cut.",
      'A cushioned sole and an adjustable buckle strap are included.',
      'Their listed price is ₹2,499.',
      'Selected sizes can get extra coupon savings.'
    ],
    isVerified: true,
    usedCount: '1.6k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-9',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Home & Kitchen',
    badgeType: 'FLAT',
    discountValue: '66%',
    scopeText: 'ON HOME ORGANIZER',
    title: 'Amazon Promo Code – 66% Off on Amazon Basics Storage Rack',
    description: 'Keep your home tidy without spending a lot.',
    points: [
      'The Amazon Basics 3-Tier Storage Rack is available for ₹509, which is 66% less.',
      'Its slim shape fits into kitchens, bathrooms and utility spaces.',
      'Its listed price is ₹1,500.',
      'Helps you use your space better.'
    ],
    isVerified: true,
    usedCount: '980',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-10',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Home & Kitchen',
    badgeType: 'FLAT',
    discountValue: '65%',
    scopeText: 'ON KITCHENWARE',
    title: 'Amazon Voucher Code – 65% Off on Solimo Stainless Steel Bottle',
    description: 'Carry water all day in this insulated bottle at a low price.',
    points: [
      'The Solimo Stainless Steel Insulated Bottle costs ₹528, a 65% reduction.',
      'Drinks stay hot or cold for longer.',
      'Its listed price is ₹1,500.',
      'Useful at work, on trips and every day.'
    ],
    isVerified: true,
    usedCount: '1.3k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'amazon-coupon-11',
    brandName: 'Amazon',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    dealUrl: 'https://www.amazon.in?&linkCode=ll2&tag=mg0001-21&linkId=d7b0bddc0c649d25e3854778190edce6&ref_=as_li_ss_tl',
    category: 'Fashion',
    badgeType: 'FLAT',
    discountValue: '64%',
    scopeText: 'ON BACKPACKS',
    title: 'Amazon Voucher Code – 64% Off on American Tourister Backpack',
    description: 'Pack your daily items in style with this best-selling backpack.',
    points: [
      'The American Tourister 20L Backpack is available for ₹896, which is 64% lower.',
      'It has many compartments and a 1-year warranty.',
      'Its listed price is ₹2,470.',
      'Good for college, work and travel.'
    ],
    isVerified: true,
    usedCount: '2.7k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- FLIPKART OFFERS ---
  {
    id: 'flipkart-coupon-1',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '20%',
    scopeText: 'ON APP-ONLY DEALS',
    title: 'App Exclusive — Flat 20% Off on Bus Bookings',
    description: 'Booking through the FlixBus app? Flat 20% off on your bus booking with a minimum booking value of ₹750.',
    points: [
      'Applicable on app bookings.',
      'Minimum cart value of ₹750 required.',
      'Valid across all routes in India.'
    ],
    isVerified: true,
    usedCount: '1.2k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-2',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '15%',
    scopeText: 'ON INTERCITY ROUTES',
    title: 'Flat 15% Off on Bus Bookings Across India',
    description: 'Flat 15% off on FlixBus bus tickets — valid for both new and existing users across all routes in India.',
    points: [
      'Valid for both new and existing users.',
      'No restricted routes.',
      'Instant discount at checkout.'
    ],
    isVerified: true,
    usedCount: '950',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'New & Existing Users'
  },
  {
    id: 'flipkart-coupon-3',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '20%',
    scopeText: 'ON STUDENT FARES',
    title: 'Flat 20% Off Student Fare Discount',
    description: 'Students can get a flat 20% discount on eligible intercity bus fares with a valid student ID.',
    points: [
      'Requires valid student ID verification.',
      'Valid on intercity bus fares.',
      'Cannot be combined with other promo codes.'
    ],
    isVerified: true,
    usedCount: '1.5k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'Students'
  },
  {
    id: 'flipkart-coupon-4',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '₹150',
    scopeText: 'FOR NEW USERS',
    title: 'Flat ₹150 Off on Bookings Above ₹750 — New Users',
    description: 'New to FlixBus? Get a flat ₹150 off on your first booking when your ticket value is ₹750 or more.',
    points: [
      'Valid exclusively for first-time bookings.',
      'Minimum booking value: ₹750.',
      'Instant price reduction.'
    ],
    isVerified: true,
    usedCount: '2.8k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'New Users'
  },
  {
    id: 'flipkart-coupon-5',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'UP TO',
    discountValue: '40%',
    scopeText: 'ON EARLY-BIRD BOOKING',
    title: 'Up to 40% Off on Early-Bird Bookings',
    description: 'Book your bus tickets in advance and unlock up to 40% off with early-bird booking discounts.',
    points: [
      'Discount increases with advance booking days.',
      'Valid for all users.',
      'Subject to seat availability.'
    ],
    isVerified: true,
    usedCount: '1.1k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-6',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'UP TO',
    discountValue: '50%',
    scopeText: 'ON INTERCITY ROUTES',
    title: 'Up to 50% Off on Intercity Bus Routes',
    description: 'Book intercity bus tickets across popular FlixBus routes and save up to 50% on your fare.',
    points: [
      'Valid on popular intercity routes across India.',
      'Applicable on both AC and Non-AC seat categories.',
      'Verified discount.'
    ],
    isVerified: true,
    usedCount: '3.4k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-7',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '₹100',
    scopeText: 'ON ALL ROUTES',
    title: 'Flat ₹100 Off on All Routes Across India',
    description: '₹100 off on FlixBus bookings across all routes in India with a minimum booking value of ₹500.',
    points: [
      'Minimum booking amount: ₹500.',
      'Valid on all operational routes in India.',
      'Available for all users.'
    ],
    isVerified: true,
    usedCount: '4.1k',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-8',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '₹100',
    scopeText: 'ON DELHI TO CHANDIGARH',
    title: 'Delhi to Chandigarh — Flat ₹100 Off',
    description: 'Book your Delhi to Chandigarh bus tickets and save ₹100 instantly on minimum cart values of ₹500.',
    points: [
      'Route specific: Delhi to Chandigarh.',
      'Minimum booking amount: ₹500.',
      'Instant flat discount.'
    ],
    isVerified: true,
    usedCount: '890',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-9',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '₹100',
    scopeText: 'ON BENGALURU TO HYDERABAD',
    title: 'Bengaluru to Hyderabad — Flat ₹100 Off',
    description: 'Make the Bengaluru to Hyderabad journey and save ₹100 instantly on your booking above ₹500.',
    points: [
      'Route specific: Bengaluru to Hyderabad.',
      'Minimum booking amount: ₹500.',
      'Instant reduction at cart.'
    ],
    isVerified: true,
    usedCount: '760',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'flipkart-coupon-10',
    brandName: 'Flipkart',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    dealUrl: 'https://fktr.in/t20Bt7C',
    category: 'Travel',
    badgeType: 'FLAT',
    discountValue: '₹100',
    scopeText: 'ON BENGALURU TO CHENNAI',
    title: 'Bengaluru to Chennai — Flat ₹100 Off',
    description: 'Travel from Bengaluru to Chennai and save ₹100 on your booking with fares starting at ₹499.',
    points: [
      'Route specific: Bengaluru to Chennai.',
      'Fares starting at ₹499.',
      'Valid for all users.'
    ],
    isVerified: true,
    usedCount: '920',
    validTill: '30 Nov 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },

  // --- MYNTRA OFFERS ---
  {
    id: 'myntra-puma-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '70%',
    scopeText: 'ON SPORTSWEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on Puma',
    description: 'Give your sportswear a fresh look with big savings on Puma clothing and shoes.',
    points: [
      'Get 30%–70% off on selected Puma products.',
      'Choose from sports shoes, T-shirts, jackets and activewear.',
      'Apply the coupon code to get an extra 10% off on eligible products.',
      'A good time to update your workout wardrobe.'
    ],
    isVerified: true,
    usedCount: '3.5k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntra-hrx-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '70%',
    scopeText: 'ON FITNESS WEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on HRX',
    description: 'Buy premium fitness clothing and footwear at special sale prices.',
    points: [
      'Get 40%–70% off on selected HRX collections.',
      'Browse gym wear, sneakers, joggers and training gear.',
      'Use the coupon code to get an extra 10% off on eligible orders.',
      'Made for people who love fitness.'
    ],
    isVerified: true,
    usedCount: '2.9k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntra-marks-harbour-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '70%',
    scopeText: 'ON CASUAL WEAR',
    title: 'Myntra Coupon Code – Get Up to 70% Off on Marks & Harbour',
    description: 'Update your casual wardrobe with trendy everyday pieces.',
    points: [
      'Get 40%–70% off on selected clothing.',
      'Pick from shirts, T-shirts, jeans and daily wear.',
      'Use the coupon code to get an extra 10% off where it applies.',
      'Great for relaxed, everyday looks.'
    ],
    isVerified: true,
    usedCount: '1.4k',
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
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '70%',
    scopeText: 'ON FOOTWEAR & ACCESSORIES',
    title: 'Myntra Discount Code – Get Up to 70% Off on Carlton London',
    description: 'Pick up premium shoes and fashion accessories at a lower price.',
    points: [
      'Get 30%–70% off on Carlton London products.',
      'Look through shoes, handbags, wallets and accessories.',
      'Use the coupon code to save extra on eligible purchases.',
      'These fashion offers are available for a limited time.'
    ],
    isVerified: true,
    usedCount: '1.7k',
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
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '60%',
    scopeText: 'ON MENSWEAR',
    title: 'Myntra Discount Code – Get Up to 60% Off on Jack & Jones',
    description: 'Add premium menswear to your everyday wardrobe.',
    points: [
      'Get 40%–60% off on Jack & Jones collections.',
      'Choose from jeans, shirts, jackets and T-shirts.',
      'Use the coupon code to get an extra 10% off where it applies.',
      'Works well for smart casual outfits.'
    ],
    isVerified: true,
    usedCount: '2.2k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntra-mango-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '60%',
    scopeText: 'ON WOMENSWEAR',
    title: 'Myntra Discount Code – Get Up to 60% Off on Mango',
    description: "Find stylish women's fashion at great prices.",
    points: [
      'Get 30%–60% off on Mango clothing.',
      'Browse dresses, tops, jeans and other fashion basics.',
      'Use the coupon code to get extra discounts on eligible styles.',
      'A good fit for daily wear and the office.'
    ],
    isVerified: true,
    usedCount: '1.9k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  },
  {
    id: 'myntr-wrogn-1',
    brandName: 'Myntra',
    brandLogo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    dealUrl: 'https://myntr.it/y6bko1t',
    category: 'Fashion',
    badgeType: 'UP TO',
    discountValue: '60%',
    scopeText: 'ON CASUAL WEAR',
    title: 'Myntra Promo Code – Get Up to 60% Off on Wrogn',
    description: 'Refresh your wardrobe with the fashion brand of Virat Kohli.',
    points: [
      'Get 30%–60% off on selected Wrogn clothing.',
      'Shop trendy shirts, T-shirts, jeans and jackets.',
      'Use the coupon code to get an extra 10% off on eligible items.',
      'A great pick for modern casual style.'
    ],
    isVerified: true,
    usedCount: '2.6k',
    validTill: '30 Jun 2026',
    isExpiringSoon: false,
    code: '',
    userType: 'All Users'
  }
];