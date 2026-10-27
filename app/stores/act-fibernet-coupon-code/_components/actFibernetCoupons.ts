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

export const ACT_FIBERNET_COUPONS: Coupon[] = [
  {
    id: 'act-coupon-1',
    badge: '1000 MBPS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'HIGH SPEED BROADBAND',
    title: 'ACT Fibernet Coupon Code – Get 1000 Mbps Plan from ₹2,999/Month',
    description: "Experience ultra-fast internet with ACT's highest-speed broadband plan.",
    points: [
      'Get the 1000 Mbps ACT GIGA Promo plan from ₹2,999 per month.',
      'Enjoy unlimited data for uninterrupted browsing and streaming.',
      'Built for gaming, 4K streaming, and large file downloads.',
      'A perfect choice for heavy internet users and large households.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-2',
    badge: 'ENTERTAINMENT PACK',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'GIGA BONANZA',
    title: 'ACT Fibernet Coupon Code – Get 1000 Mbps Bonanza Plan at ₹3,199/Month',
    description: 'Upgrade to premium broadband with entertainment benefits included.',
    points: [
      'Subscribe to the 1000 Mbps ACT Giga Bonanza plan from ₹3,199 per month.',
      'Includes Amazon Prime, JioHotstar, ZEE5, Sun NXT, and YuppTV.',
      'Access over 450 live TV channels with the bundled entertainment pack.',
      'A strong fit for households that stream shows, play games, and work remotely.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-3',
    badge: 'MESH WI-FI',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: '400 MBPS MESH',
    title: 'ACT Fibernet Discount Code – Get 400 Mbps Bonanza Plan at ₹1,675/Month',
    description: 'Enjoy whole-home Wi-Fi coverage with a powerful mesh router setup.',
    points: [
      'Get the 400 Mbps Mesh Wi-Fi plan from ₹1,675 per month.',
      'Includes two Mesh Wi-Fi Pods for better coverage.',
      'Comes with Amazon Prime, JioHotstar, ZEE5, and YuppTV.',
      'Recommended for large homes with multiple connected devices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-4',
    badge: '400 MBPS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'STORM BONANZA',
    title: 'ACT Fibernet Discount Code – Get 400 Mbps Plan at ₹1,549/Month',
    description: 'Pick a fast broadband plan that bundles entertainment perks with installation support.',
    points: [
      'Subscribe to the 400 Mbps ACT Storm Bonanza plan from ₹1,549 per month.',
      'You get a router and setup at no extra charge.',
      'Enjoy Amazon Prime, JioHotstar, ZEE5, Sun NXT, YuppTV, and 450+ live TV channels.',
      'Great for streaming, gaming, and remote work.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-5',
    badge: '200 MBPS MESH',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'MESH WI-FI',
    title: 'ACT Fibernet Promo Code – Get 200 Mbps Mesh Wi-Fi Plan at ₹1,375/Month',
    description: 'Stay connected across every room with seamless mesh Wi-Fi coverage.',
    points: [
      'Get the 200 Mbps Mesh Wi-Fi plan from ₹1,375 per month.',
      'Includes two Mesh Wi-Fi Pods for full-home coverage.',
      'Comes with Amazon Prime, JioHotstar, ZEE5, and YuppTV.',
      'Ideal for larger homes with multiple users.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-6',
    badge: '200 MBPS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'SPRINT BONANZA',
    title: 'ACT Fibernet Promo Code – Get 200 Mbps Plan at ₹1,149/Month',
    description: 'Enjoy smooth streaming with a high-speed broadband connection.',
    points: [
      'Get the 200 Mbps ACT Sprint Standard Bonanza plan from ₹1,149 per month.',
      'Includes unlimited data and a free Wi-Fi router.',
      'Access Amazon Prime, JioHotstar, ZEE5, Sun NXT, YuppTV, and 450+ live TV channels.',
      'Recommended for HD streaming and everyday internet use.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-7',
    badge: '100 MBPS',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'PREMIUM BONANZA',
    title: 'ACT Fibernet Voucher Code – Get 100 Mbps Plan at ₹949/Month',
    description: 'Choose an affordable broadband plan with premium entertainment benefits.',
    points: [
      'Subscribe to the 100 Mbps ACT Premium Bonanza plan from ₹949 per month.',
      'Includes unlimited data and a free Wi-Fi router.',
      'The plan bundles Amazon Prime, JioHotstar, ZEE5, YuppTV, and over 450 live TV channels.',
      'A great option for everyday browsing and video streaming.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-8',
    badge: 'FROM ₹575',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'STARTER PLANS',
    title: 'ACT Fibernet Voucher Code – Get Plans Starting from ₹575/Month',
    description: 'Start with an affordable broadband plan for your daily internet needs.',
    points: [
      'ACT Fibernet plans start from just ₹575 per month.',
      'Select plans include unlimited data and Wi-Fi router benefits.',
      'Buy 6 months and get 1 month free on eligible plans.',
      'Suitable for students, professionals, and families.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-9',
    badge: '1 MONTH FREE',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'LONG TERM OFFER',
    title: 'ACT Fibernet Offers – Buy 6 Months & Get 1 Month Free',
    description: 'Save more when you choose a longer broadband subscription.',
    points: [
      'Buy an eligible 6-month ACT Fibernet plan and get 1 month free.',
      'Available on selected broadband plans.',
      'Enjoy uninterrupted high-speed internet for longer.',
      'A smart option for users looking to maximize savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-10',
    badge: 'OTT BUNDLE',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'ENTERTAINMENT',
    title: 'ACT Fibernet Offers – Enjoy Entertainment Bundled with Broadband Plans',
    description: 'Enjoy broadband and premium entertainment in one subscription.',
    points: [
      'Selected plans include Amazon Prime, JioHotstar, ZEE5, Sun NXT, and YuppTV.',
      'Access over 450 live TV channels on eligible plans.',
      'Entertainment benefits are included with selected broadband packages.',
      'Perfect for households that stream movies, sports, and TV every day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-11',
    badge: '₹449/YEAR',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#E31837]',
    color: '#E31837',
    type: 'YEARLY PLAN',
    title: 'Subscribe to ACT Fibernet for ₹449/Year',
    description: 'Sign up for a budget-friendly yearly plan with ACT Fibernet.',
    points: [
      'Subscribe for just ₹449 per year.',
      'Enjoy additional ACT services with your subscription.',
      'Available on eligible customers and plans.',
      'A budget-friendly option for ACT users.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'act-coupon-12',
    badge: '3 MONTHS FREE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#00A854]',
    color: '#00A854',
    type: 'SPOTIFY PREMIUM',
    title: 'ACT Fibernet Offers – Get 3 Months of Spotify Premium Free',
    description: 'Enjoy extra entertainment with eligible ACT Fibernet broadband plans.',
    points: [
      'Get 3 months of Spotify Premium free with selected ACT Fibernet plans.',
      'Eligible plans also include a free Wi-Fi router and OTT benefits.',
      'Enjoy access to Netflix, Prime Video, and other supported streaming apps on select plans.',
      'A great bonus for music lovers looking to get more value from their broadband plan.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  }
];