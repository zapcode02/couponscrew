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

export const KLOOK_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '10% OFF',
    badgeType: 'EXTRA',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'VIETNAM EXPERIENCES',
    title: 'Klook Offer Code – Get an Extra 10% Off Vietnam Experiences',
    description: 'Book your next Vietnam adventure with Klook and enjoy an extra 10% OFF using the exclusive KLOOKVINTO offer code.',
    points: [
      'Apply KLOOKVINTO to receive an extra 10% OFF.',
      'Discover top attractions and activities across Vietnam.',
      'Ideal for your next Klook booking.',
      'Limited-time promotional offer.'
    ],
    code: 'KLOOKVINTO',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO ₹8,000',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'GLOBAL TRAVEL',
    title: 'Klook Offer Code – Save Up to ₹8,000 on Global Travel Experiences',
    description: 'Explore top attractions, tours, and activities worldwide while enjoying exclusive savings through Klook.',
    points: [
      'Save up to ₹8,000 on eligible Klook booking offers.',
      'Unlock combo savings on selected travel experiences.',
      'Choose from over 7,399 global experiences.',
      'Available on participating destinations.'
    ],
    code: 'KLOOK8000',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'TRAVEL EXPERIENCES',
    title: 'Klook Travel Promo Code – Save at Least 10% on Travel Experiences',
    description: 'Book unforgettable tours and attractions with Klook and enjoy discounts on popular travel experiences.',
    points: [
      'Get at least 10% OFF on selected experiences.',
      'Book tours, activities, and sightseeing attractions.',
      'Available across multiple countries and destinations.',
      'Limited-time offer on eligible bookings.'
    ],
    code: 'KLOOK10OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '21% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'SINGAPORE',
    title: 'Klook Singapore Offer Code – Save 21% on Universal Studios Singapore Tickets',
    description: 'Plan your visit to KlookSingapore and save on Universal Studios Singapore admission tickets.',
    points: [
      'Enjoy 21% OFF on selected ticket options.',
      'Tickets start from ₹5,303.',
      'Includes instant booking confirmation.',
      'Great choice for your Klook Singapore itinerary.'
    ],
    code: 'USS21OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE ₹408',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'HALLOWEEN',
    title: 'Klook Singapore – Save ₹408 on Halloween Horror Nights Tickets',
    description: 'Experience Halloween Horror Nights at Universal Studios Singapore for less with this limited-time Klook deal.',
    points: [
      'Save ₹408 on eligible ticket options.',
      'Tickets available from ₹4,696.',
      'Instant confirmation after booking.',
      'Perfect for your Klook Singapore trip.'
    ],
    code: 'HALLOWEEN408',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'SAVE ₹142',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'VIETNAM TOUR',
    title: 'Klook Travel Promo Code – Save on Nha Trang Floating Bar Tour',
    description: 'Book the Nha Trang Floating Bar Boat Party and island-hopping experience with Klook at a discounted price.',
    points: [
      'Save ₹142 on selected tour bookings.',
      'Tours start from ₹2,707.',
      'Includes hotel pickup on eligible bookings.',
      'Great option for your Vietnam holiday.'
    ],
    code: 'NHATRANG142',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'FERRY TRANSFERS',
    title: 'Klook Booking – Save 10% on Phuket to Phi Phi Ferry Tickets',
    description: 'Book your ferry tickets with Klook and enjoy savings on island transfers in Thailand.',
    points: [
      'Get 10% OFF on selected ferry ticket options.',
      'Explore island routes connecting Phuket, Phi Phi Island, and Krabi.',
      'Instant booking confirmation available.',
      'Ideal for island-hopping adventures.'
    ],
    code: 'FERRY10OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '8% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'ATTRACTIONS',
    title: 'Klook Offer Code – Get 8% Off Marina Bay Sands SkyPark Tickets',
    description: "Visit one of Singapore's most iconic attractions and save with Klook.",
    points: [
      'Claim 8% OFF on eligible SkyPark tickets.',
      'Tickets start from ₹903.',
      'Book instantly for same-day visits.',
      'Popular attraction on KlookSingapore.'
    ],
    code: 'SKYNPARK8',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'BANGKOK CRUISE',
    title: 'Klook India – Save 25% When You Book 4 Cruise Tickets',
    description: 'Plan a group outing in Bangkok and enjoy exclusive savings on White Orchid Cruise tickets.',
    points: [
      'Buy 4 tickets and get 25% OFF on selected options.',
      'Cruises start from ₹2,000.',
      'Enjoy dining and scenic river views.',
      'Book easily through KlookIndia.'
    ],
    code: 'CRUISE25',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹603',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'TRAIN TICKETS',
    title: 'Klook Booking – Vietnam Train Tickets from ₹603',
    description: 'Travel comfortably between Hanoi and Ninh Binh with affordable train tickets on Klook.',
    points: [
      'Train tickets start from ₹603.',
      'Save 7% on selected departures.',
      'Travel with Vietnam Railways.',
      'Great option for your Vietnam itinerary.'
    ],
    code: 'TRAIN603',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹469',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'THEME PARK',
    title: 'Klook Travel Promo Code – VinWonders Phu Quoc Tickets from ₹469',
    description: 'Visit VinWonders Phu Quoc and enjoy family-friendly attractions at special prices.',
    points: [
      'Tickets start from just ₹469.',
      'Save 6% on selected ticket options.',
      'Book instantly for your preferred date.',
      'Ideal for families and adventure lovers.'
    ],
    code: 'VINWONDERS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLIGHT DEALS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'FLIGHTS & BUNDLES',
    title: 'Klook Flight Offers – Reserve Flights Along with Travel Experiences',
    description: 'Plan your entire journey with Klook by combining flights, attractions, and local experiences in one booking.',
    points: [
      'Book your Klook flight and activities together.',
      'Explore exclusive travel deals across popular destinations.',
      'Convenient online Klook booking experience.',
      'Save more with seasonal travel promotions.'
    ],
    code: 'KLOOKFLIGHTS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'SPECIAL OFFERS',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5B00]',
    color: '#FF5B00',
    type: 'ATTRACTIONS',
    title: 'Klook Offers – Save on Klook Disneyland & Klook Aquaria Tickets',
    description: 'Book popular attraction tickets through Klook and enjoy exclusive savings on unforgettable experiences.',
    points: [
      'Find deals on Klook Disneyland tickets and passes.',
      'Book Klook Aquaria tickets at discounted prices.',
      'Enjoy instant confirmation on eligible attractions.',
      'Explore more experiences with KlookIndia and KlookSingapore.'
    ],
    code: 'KLOOKPARKS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];