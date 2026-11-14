// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK';
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

export const BOOKING_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'WEEKEND DEALS',
    title: 'Weekend Deals — Up to 60% Off on Stays',
    description: 'Up to 60% off on stays for weekend bookings with prices starting at ₹3,239.',
    points: [
      'Discount applies specifically to weekend-dated bookings — weekday rates may differ.',
      'Entry-level pricing starts from ₹3,239 per night.',
      'Free cancellation availability varies by property — check before confirming.',
      'Book early for popular weekend dates as availability can drop quickly.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'INTERNATIONAL HOTELS',
    title: 'Dubai Hotels — Up to 60% Off',
    description: 'Book hotels in Dubai at up to 60% off on total room charges with select properties offering free cancellation.',
    points: [
      'Free cancellation is only available on select properties — check the specific listing before booking.',
      'Discount applies to total room charges, not just the base rate.',
      'Covers a range of Dubai properties from budget to luxury.',
      'Currency conversion fees may apply depending on your payment method.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'INTERNATIONAL HOTELS',
    title: 'Sri Lanka Hotels — Up to 60% Off',
    description: 'Beachfront resorts, city hotels, and luxury stays in Sri Lanka at up to 60% off.',
    points: [
      'Covers beachfront resorts, city hotels, and luxury stays across Sri Lanka.',
      'Discount percentage varies by property — up to 60% is the ceiling, not a flat rate.',
      'Check visa requirements for Sri Lanka ahead of travel.',
      'Popular coastal properties book out quickly in peak season.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'HOTELS',
    title: 'Get Up to 50% Off on Hotel Bookings Worldwide',
    description: 'Book hotels, resorts, and stays across top destinations worldwide and save up to 50% off on your room rate.',
    points: [
      'Applies globally across Booking.com\'s top-destination listings, not limited to one country.',
      'Discount varies by property and location — up to 50% is the maximum available.',
      'Compare room rate vs total price including taxes before confirming.',
      'Free cancellation terms differ by property — check before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'DOMESTIC HOTELS',
    title: 'Up to 50% Off on Puducherry Hotel Bookings',
    description: 'Puducherry stays at up to 50% off with bookings starting from ₹1,500.',
    points: [
      'Entry-level bookings start from ₹1,500 per night.',
      'Good for weekend getaways given Puducherry\'s proximity to South Indian metros.',
      'Check location of the property relative to the French Quarter and beaches.',
      'Discount percentage varies by property.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'USA HOTELS',
    title: 'USA Hotels — Up to 50% Off',
    description: 'Top-rated stays across the USA at up to 50% off covering major cities like New York, LA, San Francisco, and Chicago.',
    points: [
      'Covers major cities including New York, LA, San Francisco, and Chicago.',
      'Discount varies by city and property — up to 50% is the maximum.',
      'Exchange rate and currency conversion fees may apply.',
      'Check visa and ESTA requirements for US travel ahead of booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'DELHI HOTELS',
    title: 'Delhi Hotels — Up to 50% Off',
    description: 'Find hotels across Delhi at up to 40-50% off covering luxury, business, and budget stays near iconic landmarks.',
    points: [
      'Covers luxury, business, and budget categories across Delhi.',
      'Discount range is 40-50% depending on property and dates.',
      'Properties near iconic landmarks may have slightly higher base rates despite the discount.',
      'Check proximity to metro stations for easier city travel.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'MUMBAI HOTELS',
    title: 'Mumbai Hotels — Up to 45% Off',
    description: 'Save up to 45% on hotel stays across Mumbai covering budget, business, and luxury options.',
    points: [
      'Spans budget, business, and luxury categories across Mumbai.',
      'Discount percentage varies by property and neighbourhood.',
      'Traffic can be significant — check distance to your planned destinations before booking.',
      'Free cancellation availability depends on the specific property\'s policy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'LAST-MINUTE DEALS',
    title: 'Last-Minute Stay Deals — Up to 40% Off',
    description: 'Grab last-minute deals on unsold rooms at up to 40% off the standard rate.',
    points: [
      'Availability depends on last-minute unsold inventory, so selection may be limited.',
      'Best suited for flexible travellers without strict property preferences.',
      'Cancellation terms may be stricter on last-minute deals — read before booking.',
      'Prices can change quickly as rooms get booked by other users.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'HOTELS SPECIAL',
    title: 'Hotels Special Offer — Up to 40% Off + Extra 10% Off with Genius',
    description: 'Top-rated hotels, resorts, and villas worldwide at up to 40% off with an extra 10% off for Genius members.',
    points: [
      'Extra 10% off requires active Genius loyalty programme membership.',
      'Covers hotels, resorts, and villas across worldwide destinations.',
      'Genius membership is free and based on your booking history with Booking.com.',
      'Combined discount of up to 40% + 10% applies on eligible properties only.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'VILLAS',
    title: 'Villa Stays — Up to 40% Off',
    description: 'Luxury, private, and family-friendly villas at up to 40% off across destinations.',
    points: [
      'Covers luxury, private, and family-friendly villa categories.',
      'Good fit for groups or families wanting more space and privacy than a hotel room.',
      'Villas often have higher minimum-night requirements — check before booking.',
      'Discount varies by destination and villa size.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5AC8FA]',
    color: '#5AC8FA',
    type: 'SINGAPORE HOTELS',
    title: 'Singapore Hotel Stays — Up to 40% Off',
    description: 'Premium, boutique, and budget-friendly hotels across Singapore locations at up to 40% off.',
    points: [
      'Covers premium, boutique, and budget-friendly categories across Singapore.',
      'Discount varies by property tier — up to 40% is the maximum.',
      'Check proximity to MRT stations for easier city access.',
      'Singapore properties can book out fast during regional holiday periods.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'BENGALURU HOTELS',
    title: 'Bengaluru Hotels — Up to 30% Off on Selected Stays',
    description: 'Discover hotels across Bengaluru at up to 30% off on selected bookings for business and leisure travellers.',
    points: [
      'Discount applies only to selected bookings, not every Bengaluru listing.',
      'Suits both business travellers and leisure visitors.',
      'Check proximity to tech parks if travelling for work meetings.',
      'Traffic patterns vary significantly by area — factor this into location choice.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'HYDERABAD HOTELS',
    title: 'Hyderabad Hotels — Up to 30% Off',
    description: 'Hotel stays across Hyderabad at up to 30% off with pricing starting from ₹1,123.',
    points: [
      'Entry-level pricing starts from ₹1,123 per night.',
      'Discount percentage varies by property and area within Hyderabad.',
      'Check proximity to HITEC City if travelling for business.',
      'Free cancellation terms differ by property — confirm before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BANGALORE HOTELS',
    title: 'Bangalore Hotels — Up to 30% Off',
    description: 'Save on hotel stays across Bangalore with up to 30% off close to popular attractions.',
    points: [
      'Properties listed here are close to popular attractions and tourist spots.',
      'Discount varies by property — up to 30% is the maximum available.',
      'Check real-time traffic estimates before choosing a location far from the airport.',
      'Free cancellation availability depends on the individual property\'s policy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'EARLY BIRD',
    title: 'Flat 20% Off with Early-Bird Stay Discounts',
    description: 'Plan ahead and book your stay in advance to unlock flat 20% off on eligible properties.',
    points: [
      'Only applies to properties explicitly tagged as early-bird eligible.',
      'Requires booking well in advance of the stay date — exact window varies by property.',
      'Cancellation policies on early-bird rates may be stricter than standard bookings.',
      'Check if the flat 20% applies to the full stay or only select nights.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'HOLIDAY EXCLUSIVE',
    title: 'Holiday Exclusive — Save 15% or More on Stays + Extra 10% Off with Genius',
    description: 'Knocks at least 15% off hotel bookings with an extra 10% off for Genius members.',
    points: [
      'Minimum guaranteed saving is 15% — some properties may offer more.',
      'Extra 10% off requires active Genius membership on your account.',
      'Valid during holiday-tagged travel periods specifically.',
      'Combined savings can exceed 20% on eligible Genius-tier properties.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Genius Members',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'GETAWAY DEALS',
    title: 'Getaway Deals — Up to 15% Off on Eligible Stays',
    description: 'Eligible stays discounted up to 15% with an additional 10% off for Genius members on select properties.',
    points: [
      'Only "eligible stays" tagged with the Getaway Deals badge qualify for this discount.',
      'The additional 10% Genius discount is limited to select properties, not all eligible stays.',
      'Check the property page for the Getaway Deals label before assuming eligibility.',
      'Discount is best suited for short getaway or leisure trips, as the name suggests.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Genius Members',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'GENIUS LOYALTY',
    title: 'Genius Loyalty Members Get Up to 15% Off Stays',
    description: 'Genius loyalty tier members unlock up to 15% off select properties with free breakfast or room upgrades.',
    points: [
      'Requires an active Genius loyalty tier on your Booking.com account.',
      'Free breakfast or room upgrades are property-specific perks, not guaranteed on every booking.',
      'Genius tier level (1, 2, or 3) can affect the exact benefits available.',
      'Only select properties participate in the Genius programme perks.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Genius Members',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'GENIUS MEMBERSHIP',
    title: 'Flat 10% Off with Genius Membership',
    description: 'Genius Level 1 membership gives you a flat 10% off on stays at over 3,90,000 participating properties worldwide.',
    points: [
      'Genius Level 1 is typically reached after a small number of completed bookings.',
      'Applies at over 3,90,000 participating properties globally, but not every single listing.',
      'Discount is automatically applied at checkout once you\'re logged in as a Genius member.',
      'Higher Genius tiers (2 and 3) may offer additional perks beyond the flat 10%.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Genius Members',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-21',
    badge: '10% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'VISA CARD OFFER',
    title: 'VISA Card Offer — Up to 10% Cashback',
    description: 'Pay with a VISA card and receive up to 10% cashback on your room charges with no minimum booking value.',
    points: [
      'No minimum booking value required to be eligible for this cashback.',
      'Cashback applies to room charges — additional fees like taxes may not be included.',
      'Must pay with a VISA card at checkout for the cashback to trigger.',
      'Cashback crediting timeline depends on your bank\'s processing time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
