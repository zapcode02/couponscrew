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
  points: string[];
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
    points: [
      'Only valid on your first booking after creating a new free Expedia account.',
      'Applies to hotel bookings and vacation packages, not flights alone.',
      'Covers destinations including Mumbai, Bengaluru, New Delhi, Dubai, and Pune.',
      'One-time use per new account — won\'t apply to subsequent bookings.'
    ],
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
    points: [
      'Requires booking at least 60 days before your check-in date.',
      'Free cancellation applies on participating properties — check the specific listing.',
      'Three meals are included on top of the discounted room rate.',
      'Limited to selected hotels only, not the entire Expedia hotel catalogue.'
    ],
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
    points: [
      'Discount percentage varies by property — up to 50% is the maximum available.',
      'Entry-level pricing starts from Rs 682 on flexible travel dates.',
      'Part of the broader vacation packages and holiday deals category.',
      'Flexible dates tend to unlock the lowest available prices.'
    ],
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
    points: [
      'Must log in before searching — Member Prices won\'t show for logged-out searches.',
      'Covers over 100,000 hotels globally, but not every single listing on the platform.',
      '10% is the minimum guaranteed discount; some properties may offer more.',
      'Free to access — no paid membership tier required.'
    ],
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
    points: [
      'No promo code required — pricing is already reflected in the listings.',
      'Covers destinations including Goa, Tamil Nadu, Chennai, Kerala, and Hyderabad.',
      'Open to all users, no account or membership required.',
      'Prices and availability can change based on demand and season.'
    ],
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
    points: [
      'App-exclusive — booking via the website won\'t trigger this discount.',
      'Limited to one redemption per user.',
      'Only qualifying stays are eligible — check the app for tagged deals.',
      'Discount percentage varies by property, up to the 20% ceiling.'
    ],
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
    points: [
      'Limited-time offer specific to Aruba listings — may not recur after this window.',
      'Discount varies by property, up to the 40% ceiling.',
      'Check visa and travel requirements for Aruba ahead of booking.',
      'Currency conversion and international card fees may apply.'
    ],
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
    points: [
      'Limited to selected routes — not guaranteed on every flight search.',
      'Covers both domestic and international air travel options.',
      'Discount percentage varies by route and airline, up to the 25% ceiling.',
      'Compare fares against the airline\'s own site before booking to confirm the best deal.'
    ],
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
    points: [
      'Real-time fare comparison means prices shown can change based on live availability.',
      'One-way fares start from Rs 1,805; round trips from Rs 3,530.',
      'Compares fares across multiple carriers, not just a single airline.',
      'Book early for the lowest fares as domestic routes can rise closer to departure.'
    ],
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
    points: [
      'Requires a free Expedia account sign-up to access these specific starting rates.',
      'Bundling with a hotel or rental car can unlock additional package savings.',
      'Rs 543 is the entry-level starting price, not a guaranteed fare on every date.',
      'Part of the broader vacation packages category, suited to full trip planning.'
    ],
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
    points: [
      'All three meals (breakfast, lunch, dinner) are bundled into the package price.',
      'Limited to participating properties — not every hotel offers this package.',
      'Covers major Indian cities including Chennai, Delhi, and Mumbai.',
      'Good value for travellers who prefer not to arrange meals separately.'
    ],
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
    points: [
      'Entry-level pricing starts from Rs 2,419 per night.',
      'Good for short weekend trips from Bengaluru given the proximity.',
      'Pairing with a car rental can help build a complete package deal.',
      'Check property reviews as Nandi Hills options range from budget to boutique stays.'
    ],
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
    points: [
      'Availability depends on last-minute seat openings, so selection changes frequently.',
      'Best suited for flexible travellers without strict route or date preferences.',
      'Check the dedicated deals page directly for the most current fares.',
      'Prices can change quickly as seats get booked by other users.'
    ],
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
    points: [
      'Cancellation deadline typically falls 24-48 hours before check-in, but varies by property.',
      'Only qualifying hotels offer this — check the listing for the free cancellation tag.',
      'Covers both domestic and international hotel bookings.',
      'Cancelling after the deadline may still incur a fee, so check the exact cutoff before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
