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

export const AMAZON_COUPONS: Coupon[] = [
  {
    id: 'amazon-coupon-1',
    badge: '92% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'MOBILE CASES',
    title: 'Amazon Coupon Code – 92% Off on Nillkin iPhone 15 Pro Max Magnetic Case',
    description: 'Give your iPhone strong cover at a small price this Great Indian Festival.',
    points: [
      'The Nillkin iPhone 15 Pro Max Magnetic Case is available for ₹679, which is 92% less.',
      'It is built from magnetic liquid silicone with a premium feel.',
      'Its listed price is ₹7,998.',
      'A neat finish that protects your phone every day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-2',
    badge: '91% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'WOMENS FASHION',
    title: "Amazon Coupon Code – 91% Off on Women's Cotton Blend Printed Short Kurti",
    description: 'Pick up a new festive outfit with this fashion deal.',
    points: [
      "The Women's Cotton Blend Printed Short Kurti costs just ₹179, a 91% reduction.",
      'It has a regular fit, round neck and half sleeves.',
      'Its listed price is ₹1,999.',
      'Easy to wear on normal days and on festive occasions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-3',
    badge: '90% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'MOBILE CASES',
    title: 'Amazon Coupon Code – 90% Off on Nillkin CamShield iPhone 13 Pro Case',
    description: 'Protect your phone with one of the biggest price drops on offer.',
    points: [
      'The Nillkin CamShield iPhone 13 Pro Case is priced at ₹509, which is 90% lower.',
      'A slide-over cover keeps the camera lens covered.',
      'Its listed price is ₹4,999.',
      'Helps your iPhone stay free of scratches.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-4',
    badge: '87% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'ETHNIC WEAR',
    title: "Amazon Discount Code – 87% Off on Women's Crepe Kurti",
    description: 'Check out stylish ethnic wear at a tiny price.',
    points: [
      "The Women's Crepe Kurti is yours for only ₹99, an 87% cut.",
      'It comes with a straight fit and 3/4 sleeves.',
      'Its listed price is ₹749.',
      'Looks good at work and in casual settings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-5',
    badge: '84% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'BACKPACKS',
    title: 'Amazon Discount Code – 84% Off on Safari Omega Laptop Backpack',
    description: 'Carry your things in comfort with this roomy backpack for laptops.',
    points: [
      'The Safari Omega 30L Laptop Backpack is available for ₹549, which is 84% less.',
      'A rain cover and many storage sections are included.',
      'Its listed price is ₹3,396.',
      'Handy for college, work and trips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-6',
    badge: '84% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'FOOTWEAR',
    title: 'Amazon Discount Code – 84% Off on BRUTON EVA Lite Running Shoes',
    description: 'Get a new pair of running shoes at a big discount.',
    points: [
      'The BRUTON EVA Lite Running Shoes cost only ₹398, an 84% reduction.',
      'The light build keeps them comfortable for daily use.',
      'Their listed price is ₹2,499.',
      'Eligible sizes can also get a further coupon saving.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-7',
    badge: '84% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'FOOTWEAR',
    title: 'Amazon Promo Code – 84% Off on BlueBlaze Running Shoes',
    description: 'Choose light sports shoes at a very low price.',
    points: [
      'The BlueBlaze EVA Lite Running Shoes are available for ₹483, which is 84% lower.',
      'The mesh upper lets your feet breathe through the day.',
      'Their listed price is ₹2,999.',
      'Selected sizes can get an additional coupon saving.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-8',
    badge: '83% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'WOMENS FOOTWEAR',
    title: 'Amazon Promo Code – 83% Off on BRUTON Wedge Sandals',
    description: 'Add a stylish new pair to your footwear at a low price.',
    points: [
      "The BRUTON Women's Wedge Sandals cost just ₹418, an 83% cut.",
      'A cushioned sole and an adjustable buckle strap are included.',
      'Their listed price is ₹2,499.',
      'Selected sizes can get extra coupon savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-9',
    badge: '66% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'HOME ORGANIZER',
    title: 'Amazon Promo Code – 66% Off on Amazon Basics Storage Rack',
    description: 'Keep your home tidy without spending a lot.',
    points: [
      'The Amazon Basics 3-Tier Storage Rack is available for ₹509, which is 66% less.',
      'Its slim shape fits into kitchens, bathrooms and utility spaces.',
      'Its listed price is ₹1,500.',
      'Helps you use your space better.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-10',
    badge: '65% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'KITCHENWARE',
    title: 'Amazon Voucher Code – 65% Off on Solimo Stainless Steel Bottle',
    description: 'Carry water all day in this insulated bottle at a low price.',
    points: [
      'The Solimo Stainless Steel Insulated Bottle costs ₹528, a 65% reduction.',
      'Drinks stay hot or cold for longer.',
      'Its listed price is ₹1,500.',
      'Useful at work, on trips and every day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-11',
    badge: '64% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'BACKPACKS',
    title: 'Amazon Voucher Code – 64% Off on American Tourister Backpack',
    description: 'Pack your daily items in style with this best-selling backpack.',
    points: [
      'The American Tourister 20L Backpack is available for ₹896, which is 64% lower.',
      'It has many compartments and a 1-year warranty.',
      'Its listed price is ₹2,470.',
      'Good for college, work and travel.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-12',
    badge: '60% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'EARBUDS',
    title: 'Amazon Voucher Code – 60% Off on JBL Vibe Beam 2 Earbuds',
    description: 'Listen to deep, clear sound with these premium JBL wireless earbuds.',
    points: [
      'The JBL Vibe Beam 2 ANC Earbuds cost ₹2,999, a 60% cut.',
      'They come with Active Noise Cancellation and JBL Pure Bass Sound.',
      'The battery lasts up to 48 hours.',
      'A smart pick for music and phone calls.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-13',
    badge: '53% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'POWER BANK',
    title: 'Amazon Offers – 53% Off on Xiaomi 20000mAh 165W Power Bank',
    description: 'Charge your gadgets quicker with this large-capacity Xiaomi power bank.',
    points: [
      'The Xiaomi 20000mAh 165W Power Bank is available for ₹5,199, which is 53% less.',
      'It works with laptops, smartphones, tablets and other devices.',
      'Its listed price is ₹10,999.',
      'A built-in USB-C cable and a digital display are included.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-14',
    badge: '50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'HEADPHONES',
    title: 'Amazon Offers – 50% Off on JBL Tune 770NC Headphones',
    description: 'Get premium wireless sound for half the cost.',
    points: [
      'The JBL Tune 770NC Wireless Headphones cost ₹4,999, a 50% reduction.',
      'They offer Adaptive Noise Cancellation and a 70-hour battery life.',
      'Their listed price is ₹9,999.',
      'They work with Google Fast Pair and Multipoint connectivity.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-15',
    badge: '47% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'TABLETS',
    title: 'Amazon Offers – 47% Off on Samsung Galaxy Tab S10 Lite',
    description: 'Improve your viewing and browsing with this premium Android tablet.',
    points: [
      'The Samsung Galaxy Tab S10 Lite is available for ₹30,999, which is 47% lower.',
      'It has a 10.9-inch display, 6GB RAM and 128GB storage.',
      'Its listed price is ₹57,999.',
      'Handy for work, streaming and online classes.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-16',
    badge: '47% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'SMARTPHONES',
    title: 'Amazon Offers – 47% Off on Redmi 15C 5G Prime Edition',
    description: 'Own a well-equipped 5G phone at a festival-special price.',
    points: [
      'The Redmi 15C 5G Prime Edition costs ₹15,999, a 47% cut.',
      'It has a 6000mAh battery and 128GB storage.',
      'Its listed price is ₹29,999.',
      'Suits daily tasks and entertainment.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-17',
    badge: '46% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'TABLETS',
    title: 'Amazon Offers – 46% Off on Lenovo Tab Plus Gen 2',
    description: 'Switch to a premium entertainment tablet at a lower price.',
    points: [
      'The Lenovo Tab Plus Gen 2 is available for ₹33,999, which is 46% less.',
      'It has a 12.1-inch display and a 9-speaker JBL sound setup.',
      'Its listed price is ₹63,000.',
      'A strong choice for movies, games and productivity.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-18',
    badge: '44% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'SMARTPHONES',
    title: 'Amazon Offers – 44% Off on realme P4 Lite 5G',
    description: 'Get steady 5G performance at a reduced price.',
    points: [
      'The realme P4 Lite 5G costs ₹16,249, a 44% reduction.',
      'It runs on a Dimensity processor and has a 144Hz display.',
      'Works well for games, streaming and daily use.',
      'A sensible option if you are watching your budget.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-19',
    badge: '38% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'APPLIANCES',
    title: 'Amazon Offers – 38% Off on Haier 6kg Fully Automatic Washing Machine',
    description: 'Do your laundry with less effort using this top-rated washing machine.',
    points: [
      'The Haier 6kg Fully Automatic Top Load Washing Machine is available for ₹13,890, which is 38% lower.',
      'It has a 5-Star energy rating and the Oceanus Wave Drum.',
      'Its listed price is ₹22,400.',
      'Right for small and mid-sized families.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-20',
    badge: '28% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'EARBUDS',
    title: 'Amazon Offers – 28% Off on realme Buds Air 8',
    description: 'Hear your music better with these premium wireless earbuds.',
    points: [
      'The realme Buds Air 8 cost ₹3,799, a 28% cut.',
      'They offer 55dB ANC, Hi-Res audio and up to 58 hours of playback.',
      'Six microphones help make your calls clear.',
      'Good for music, games and trips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-21',
    badge: '27% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'SMARTPHONES',
    title: 'Amazon Offers – 27% Off on Samsung Galaxy S25 Ultra 5G',
    description: "Pick up Samsung's best smartphone at a festival price for a short time.",
    points: [
      'The Samsung Galaxy S25 Ultra 5G is available for ₹94,999, which is 27% less.',
      'It has a 200MP camera and Galaxy AI features.',
      'Its listed price is ₹1,29,999.',
      'Made for photos, games and getting work done.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-22',
    badge: '14% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'SMARTPHONES',
    title: 'Amazon Offers – 14% Off on Apple iPhone 16',
    description: 'Get the latest iPhone in the Amazon Great Indian Festival sale.',
    points: [
      'The Apple iPhone 16 (128GB) costs ₹76,999, a 14% reduction.',
      'It runs on the Apple A18 chip and has better battery life.',
      'Its listed price is ₹89,900.',
      'A premium step up for Apple fans.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'amazon-coupon-23',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#232F3E]',
    color: '#232F3E',
    type: 'FESTIVAL SALE',
    title: 'Amazon Great Indian Festival – Up to 80% Off Across Top Categories',
    description: "Take part in one of Amazon's biggest sales, with thousands of deals for a short time.",
    points: [
      'Get up to 80% off on electronics, fashion, home and lifestyle items.',
      'Browse special festival offers from top brands.',
      'Eligible orders get quick delivery, cashback offers and Prime benefits.',
      'More deals are added from time to time during the festival.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  }
];