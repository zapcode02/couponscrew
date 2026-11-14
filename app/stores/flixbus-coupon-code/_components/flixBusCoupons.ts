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

export const FLIXBUS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'APP-ONLY DEALS',
    title: 'App Exclusive — Flat 20% Off on Bus Bookings',
    description: 'Booking through the FlixBus app? Flat 20% off on your bus booking with a minimum booking value of ₹750.',
    points: [
      'App-exclusive — not available when booking via the website.',
      'Minimum booking value of ₹750 is required.',
      'Applies across all routes, not limited to specific city pairs.',
      'No code typically needed — discount reflects automatically in the app.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'INTERCITY ROUTES',
    title: 'Flat 15% Off on Bus Bookings Across India',
    description: 'Flat 15% off on FlixBus bus tickets — valid for both new and existing users across all routes in India.',
    points: [
      'Open to both new and existing users, no account restrictions.',
      'Applies across all FlixBus routes in India, not limited to specific cities.',
      'Flat 15% off applies at checkout, typically no code required.',
      'Check seat availability as popular routes can sell out closer to departure.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New & Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'STUDENT FARES',
    title: 'Flat 20% Off Student Fare Discount',
    description: 'Students can get a flat 20% discount on eligible intercity bus fares with a valid student ID.',
    points: [
      'Requires a valid student ID for verification.',
      'Limited to eligible intercity fares, not every route.',
      'Student verification may be a one-time setup for the discount account.',
      'Check whether the discount applies automatically or needs manual verification at booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹150 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'NEW USERS',
    title: 'Flat ₹150 Off on Bookings Above ₹750 — New Users',
    description: 'New to FlixBus? Get a flat ₹150 off on your first booking when your ticket value is ₹750 or more.',
    points: [
      'Only valid for first-time FlixBus users on a new account.',
      'Minimum ticket value of ₹750 is required.',
      'One-time use — won\'t apply to subsequent bookings.',
      'Check seat availability on your preferred route before relying on this for a specific date.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'EARLY-BIRD BOOKING',
    title: 'Up to 40% Off on Early-Bird Bookings',
    description: 'Book your bus tickets in advance and unlock up to 40% off with early-bird booking discounts.',
    points: [
      'Discount scales with how early you book — the ceiling is 40%, not guaranteed on every booking.',
      'No specific minimum advance window stated — check availability for your travel date.',
      'Prices typically rise closer to departure, so earlier bookings get the best rates.',
      'Discount applies automatically at checkout once eligible.'
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
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'INTERCITY ROUTES',
    title: 'Up to 50% Off on Intercity Bus Routes',
    description: 'Book intercity bus tickets across popular FlixBus routes and save up to 50% on your fare.',
    points: [
      'Limited to popular routes specifically — check if your route is included.',
      'Discount varies by route and booking timing, up to the 50% ceiling.',
      'Best fares are usually found by booking well ahead of travel.',
      'Compare fares across departure times as prices can vary within the same route.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'ALL ROUTES',
    title: 'Flat ₹100 Off on All Routes Across India',
    description: '₹100 off on FlixBus bookings across all routes in India with a minimum booking value of ₹500.',
    points: [
      'Minimum booking value of ₹500 is required.',
      'Applies broadly across all India routes, not limited to specific city pairs.',
      'Flat ₹100 off regardless of route distance, as long as the minimum is met.',
      'Good general-purpose code when no route-specific deal applies to your journey.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'ROUTE SPECIFIC',
    title: 'Delhi to Chandigarh — Flat ₹100 Off',
    description: 'Book your Delhi to Chandigarh bus tickets and save ₹100 instantly on minimum cart values of ₹500.',
    points: [
      'Route-specific — valid only for Delhi to Chandigarh bookings.',
      'Minimum cart value of ₹500 is required.',
      'Discount applies instantly at checkout, no separate code typically needed.',
      'Check timing options as multiple daily departures are usually available on this route.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'ROUTE SPECIFIC',
    title: 'Bengaluru to Hyderabad — Flat ₹100 Off',
    description: 'Make the Bengaluru to Hyderabad journey and save ₹100 instantly on your booking above ₹500.',
    points: [
      'Route-specific — valid only for Bengaluru to Hyderabad bookings.',
      'Minimum booking value of ₹500 is required.',
      'Discount applies instantly, typically without needing a separate code.',
      'Overnight travel options are usually available on this longer route.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'ROUTE SPECIFIC',
    title: 'Bengaluru to Chennai — Flat ₹100 Off',
    description: 'Travel from Bengaluru to Chennai and save ₹100 on your booking with fares starting at ₹499.',
    points: [
      'Route-specific — valid only for Bengaluru to Chennai bookings.',
      'Entry-level fares start from ₹499 before the discount.',
      'Discount applies instantly on eligible fares.',
      'Multiple daily departures are typically available on this popular route.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'ROUTE SPECIFIC',
    title: 'Hyderabad to Vijayawada — Flat ₹100 Off',
    description: 'Book your Hyderabad to Vijayawada bus and save ₹100 instantly on your ticket.',
    points: [
      'Route-specific — valid only for Hyderabad to Vijayawada bookings.',
      'No minimum booking value explicitly stated for this route.',
      'Discount applies instantly, typically no separate code needed.',
      'Check departure timing options as this is a shorter, frequently-serviced route.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'ROUTE SPECIFIC',
    title: 'Delhi to Dehradun — Flat ₹100 Off',
    description: 'Delhi to Dehradun bookings get an instant ₹100 off when your booking exceeds ₹500.',
    points: [
      'Route-specific — valid only for Delhi to Dehradun bookings.',
      'Minimum booking value must exceed ₹500.',
      'Discount applies instantly at checkout.',
      'Popular route for weekend hill-station trips — book ahead during peak season.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5AC8FA]',
    color: '#5AC8FA',
    type: 'ROUTE SPECIFIC',
    title: 'Delhi to Haldwani — Flat ₹100 Off',
    description: 'Book your Delhi to Haldwani bus ticket and save ₹100 on your order. Tickets start from ₹874.',
    points: [
      'Route-specific — valid only for Delhi to Haldwani bookings.',
      'Entry-level fares start from ₹874 before the discount.',
      'Discount applies instantly on eligible bookings.',
      'A longer route — check overnight travel options if preferred.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FROM ₹258',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'BUDGET FARES',
    title: 'FlixBus Tickets Online — Prices Starting from ₹258',
    description: 'Book FlixBus tickets online at some of the lowest available fares starting from ₹258 with AC and charging points.',
    points: [
      '₹258 is the lowest available starting fare, not guaranteed on every route or date.',
      'AC and charging points are included as standard on these buses.',
      'Prices vary by route, seat type, and how far ahead you book.',
      'Check seat selection options as pricing can differ by seat location.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FROM ₹522',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3B30]',
    color: '#FF3B30',
    type: 'ROUTE FARES',
    title: 'Bareilly to Delhi — Starting from ₹522',
    description: 'Bareilly to Delhi bus tickets starting at ₹522 for a comfortable and affordable journey option.',
    points: [
      'Route-specific — valid only for Bareilly to Delhi bookings.',
      '₹522 is the lowest starting fare, varying by exact departure time.',
      'Comfortable, standard FlixBus amenities included on this route.',
      'Book ahead for the best availability on popular departure slots.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FROM ₹713',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'ROUTE FARES',
    title: 'Delhi to Lucknow — Starting from ₹713',
    description: 'Travel from Delhi to Lucknow by bus with fares starting at ₹713 with multiple departure options.',
    points: [
      'Route-specific — valid only for Delhi to Lucknow bookings.',
      '₹713 is the lowest starting fare, varying by departure time and seat type.',
      'Multiple daily departures are available, giving flexibility on timing.',
      'Book ahead during festive season as this route sees high demand.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
