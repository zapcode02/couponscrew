// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'MEMBER' | 'DEAL' | 'APP' | 'PERK';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const EXPEDIA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOTELS',
    title: 'Sign Up & Get 10% OFF on Your First Booking',
    description: 'New to Expedia? Create a free account and save 10% on your first hotel or vacation package booking across popular destinations like Mumbai, Bengaluru, New Delhi, Dubai, and Pune.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'HOTELS',
    title: 'Book 60 Days Early & Get 20% OFF on Selected Hotels',
    description: 'Reservations start at Rs 1,506 per night. Includes three meals and free cancellation on participating properties when booked at least 60 days before check-in.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'VACATION PACKAGES',
    title: 'Up to 50% OFF on Holiday Deals + Trip Ideas',
    description: 'Covers a wide range of hotel listings with discounts up to 50%. Prices on participating properties start at Rs 682 for flexible travel dates.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '10% OFF',
    badgeType: 'MEMBER',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'HOTELS',
    title: 'Flat 10% OFF or More on 100,000+ Hotels Worldwide',
    description: 'Log in to your Expedia account before searching to access exclusive Member Prices across over 100,000 hotels worldwide.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'BEST PRICE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'HOTELS',
    title: 'Hotels Starting at Affordable Prices — All Users',
    description: 'Find properties in Goa, Tamil Nadu, Chennai, Kerala, Hyderabad, and more at budget-friendly prices with no promo code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 20% OFF',
    badgeType: 'APP',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'HOTELS',
    title: 'Save Up to 20% OFF on Hotel Bookings via the Expedia App',
    description: 'Download the Expedia app and book your hotel directly through it to get up to 20% off qualifying stays. Valid once per user.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOTELS',
    title: 'Up to 40% OFF on Aruba Hotel Offers',
    description: 'Heading to the Caribbean? Expedia hotel listings in Aruba are discounted up to 40% through this limited offer.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#4A3AFF',
    type: 'FLIGHTS',
    title: 'Up to 25% OFF on Flight Bookings',
    description: 'Applies to selected domestic and international air routes across a broad range of options on the Expedia website.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM Rs 1,805',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FLIGHTS',
    title: 'Domestic Flights at the Lowest Prices',
    description: 'One-way domestic flights start at Rs 1,805 and round trips from Rs 3,530 with real-time fare comparisons across carriers.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FROM Rs 543',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'VACATION PACKAGES',
    title: 'Manali Travel Tickets Starting at Rs 543',
    description: 'Sign up for a free account to access these Manali starting rates and bundle with a hotel or rental car to build a full trip package.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'MEALS INCLUDED',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'VACATION PACKAGES',
    title: 'Hotel + Meal Packages Starting at Best Prices',
    description: 'Includes breakfast, lunch, and dinner on participating properties across major Indian cities like Chennai, Delhi, and Mumbai.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'WEEKEND GETAWAY',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOTELS',
    title: 'Nandi Hills Hotels Starting at Rs 2,419',
    description: 'Hotel stays near Bengaluru starting at Rs 2,419 per night. Pair with a car rental for a complete weekend trip package.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'LAST MINUTE',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FLIGHTS',
    title: 'Last-Minute Flight Deals at Competitive Prices',
    description: 'Priced to move on routes where seats have opened up close to departure. Check the deals page for real-time fares.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FREE CANCELLATION',
    badgeType: 'PERK',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'HOTELS',
    title: 'Free Cancellation on Thousands of Hotel Bookings',
    description: 'Qualifying domestic and international hotels let you cancel before the property deadline (typically 24-48 hours before check-in) with no fees.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
