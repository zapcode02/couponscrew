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

export const TRIP_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '3% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'FLIGHTS',
    title: 'Trip.com Coupon Code – Save 3% on Flight Bookings',
    description: 'Book eligible domestic and international flights through the Trip.com app and enjoy an instant 3% discount on your reservation.',
    points: [
      'Save 3% OFF on eligible flight bookings.',
      'Valid on chosen flights within the country and abroad.',
      'Book your tickets quickly through the Trip.com mobile app.',
      'This deal runs only for a short campaign window, so grab it soon.'
    ],
    code: 'TRIPFLIGHT3',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'HOTELS',
    title: 'Trip.com Coupon Code – Flat 10% Off on Hotel & Home Stays',
    description: 'Book eligible hotels and holiday homes and enjoy 10% OFF through Trip.com.',
    points: [
      'Save up to 10% on selected hotel and home bookings.',
      'Pick your stay from a huge range of trusted properties across the globe.',
      'A great fit for holidays, work travel, or trips with the whole family.',
      'Available for a limited promotional period.'
    ],
    code: 'TRIPHOTEL10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'TOURS & ACTIVITIES',
    title: 'Trip.com Discount Code – Book Day Trips & Experiences with 10% Off',
    description: 'Book popular attractions and guided tours through Trip.com and enjoy exclusive savings on your next adventure.',
    points: [
      'Get 10% OFF on eligible attractions and tour bookings.',
      'Discover sightseeing experiences in top destinations.',
      'Works well whether you travel alone, with a partner, or with kids.',
      'Offer valid on participating experiences.'
    ],
    code: 'TRIPTRIP10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'AIRPORT TRANSFERS',
    title: 'Trip.com Discount Code – Ride To or From the Airport and Pay 10% Less',
    description: 'Reserve airport transfers with Trip.com and save on reliable transportation to and from your destination.',
    points: [
      'Enjoy 10% OFF on selected airport transfer bookings.',
      'Pre-book convenient airport pickup and drop-off services.',
      'Available in participating cities worldwide.',
      'Subject to offer terms and booking availability.'
    ],
    code: 'AIRPORT10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA 8% OFF',
    badgeType: 'EXTRA',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'CAR RENTAL',
    title: 'Trip.com Promo Code – Hire a Self-Drive Car with an Extra 8% Discount',
    description: 'Reserve a car through Trip.com and pay less on qualifying rental bookings.',
    points: [
      'Save 8% OFF on qualifying car rental bookings.',
      'Choose from trusted global rental providers.',
      'Great for road trips, holidays, and business travel.',
      'Available on selected rental locations.'
    ],
    code: 'CAR8OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'CHINA HOTELS',
    title: 'Trip.com Promo Code – Stay in Chinese Cities for Up to Half the Usual Price',
    description: 'Get special discounts of up to half the price on handpicked hotels in China.',
    points: [
      'Save up to 50% OFF on participating hotels.',
      'Explore affordable stays in popular Chinese cities.',
      'Suitable for business and leisure travelers.',
      'Limited-time hotel promotion.'
    ],
    code: 'CHINAHOTEL50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹999',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'GUANGDONG STAYS',
    title: 'Trip.com Voucher – Book Hotels in Guangdong from ₹999',
    description: 'Stay at selected hotels in Guangdong with room rates starting from just ₹999 per night.',
    points: [
      'Hotel stays start from ₹999 at participating properties.',
      'Great value for business trips and holidays.',
      'Choose from a variety of accommodation options.',
      'Final rates can change based on the dates you choose to travel.'
    ],
    code: 'GUANGDONG999',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹4,005',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'CAR HIRE',
    title: 'Trip.com Voucher – Car Rentals from ₹4,005 Per Day',
    description: 'Rent a Toyota Camry or a similar midsize vehicle from just ₹4,005 per day with Trip.com.',
    points: [
      'Car rentals start from ₹4,005 per day.',
      'Drive a Toyota Camry or a similar vehicle.',
      'Suitable for up to five passengers.',
      'Available at participating rental locations.'
    ],
    code: 'RENTAL4005',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '8% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'NEW USER',
    title: 'Trip.com Offers – First-Timers Can Knock 8% Off Their Opening Booking',
    description: 'Claim this exclusive welcome offer and save 8% on your first eligible Trip.com booking.',
    points: [
      'Enjoy 8% OFF on your first qualifying reservation.',
      'Offer remains valid for 15 days after claiming.',
      'Available exclusively for new Trip.com users.',
      'Applicable on eligible bookings only.'
    ],
    code: 'WELCOME8OFF',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'SAVE ₹7,891',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2577E3]',
    color: '#2577E3',
    type: 'JAPAN TOURS',
    title: 'Trip.com Offers – Save ₹7,891 on Japan Group Tour Packages',
    description: 'Book a 7 Days / 6 Nights Japan group tour and save ₹7,891 on selected travel packages.',
    points: [
      'Tour packages start from ₹87,072.',
      'Save ₹7,891 on eligible Japan group tours.',
      'Visit Osaka, Tokyo, Mount Fuji, and Kyoto.',
      'Available on selected departure dates.'
    ],
    code: 'JAPANTOUR7891',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];