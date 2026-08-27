// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'BOGO' | 'CASHBACK' | 'BANK OFFER';
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

export const BOOKMYSHOW_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'BUY 1 GET 1 FREE',
    badgeType: 'BOGO',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'MOVIE TICKETS',
    title: 'Buy 1 Get 1 Free on All Movie Tickets (Bank Offers)',
    description: 'Book 2 movie tickets on BookMyShow and get one free when you pay with a selected bank card — including ICICI, Axis, IndusInd, RBL, Citi, HSBC, SBI, Kotak, and YES Bank.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'STREAM',
    title: 'Flat 50% OFF on Movies Online (Stream Save Offer)',
    description: 'Save 50% on online movie streaming — apply the code at checkout to unlock the Stream Save offer on eligible rent titles.',
    code: 'STREAMSAVE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'BUY 1 GET 1 FREE',
    badgeType: 'BOGO',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'MOVIE TICKETS',
    title: 'Buy 1 Get 1 Free on Irumudi Movie Tickets',
    description: 'Book Irumudi tickets on BookMyShow and get one free — starring Ravi Teja, Priya Bhavani Shankar, Swasika Vijay, Saikumar Pudipeddi, and Ajay Ghosh.',
    code: '',
    verified: 'Verified',
    userType: 'Select Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'BUY 1 GET 1 FREE',
    badgeType: 'BOGO',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'MOVIE TICKETS',
    title: 'Buy 1 Get 1 Free on Vishwanath and Sons Movie Tickets',
    description: 'Get one free ticket when you book Vishwanath and Sons — featuring Suriya Sivakumar, Mamitha Baiju, Raveena Tandon, and Radhika Sarathkumar.',
    code: '',
    verified: 'Verified',
    userType: 'Select Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE ₹75',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'MOVIE TICKETS',
    title: 'Save ₹75 on Blockbuster at Mahalaxmi Complex, Kothapeta',
    description: 'Save ₹75 on Blockbuster screenings at Mahalaxmi Complex, Kothapeta — apply the code at checkout on eligible movie tickets.',
    code: 'MCKT75',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO ₹500 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'REWARDS',
    title: 'Up to ₹500 OFF When You Pay with Rewards (Min ₹599)',
    description: 'Pay with your BookMyShow Rewards balance and save up to ₹500 on bookings above ₹599 — valid once per user on the website or app.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'EVENTS',
    title: 'BookMyShow Club Members: Up to 25% OFF on Event Tickets',
    description: 'BookMyShow Club members get up to 25% off on selected event tickets — redeem at checkout.',
    code: '',
    verified: 'Verified',
    userType: 'Club Members',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO ₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'BANK OFFER',
    title: 'Pay via Amazon Pay: Assured Cashback Up to ₹100',
    description: 'Pay with Amazon Pay balance on BookMyShow and win assured cashback — up to ₹15 per transaction, maximum ₹100, on orders above ₹399.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO ₹200 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'BANK OFFER',
    title: 'RuPay Credit Card on Paytm UPI: Up to ₹200 Cashback',
    description: 'Book tickets with RuPay Credit Card via Paytm UPI and earn up to ₹200 cashback on a minimum spend of ₹300 — valid across Movies, Events, Plays, Sports, Activities, and Stream.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: '5% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'BANK OFFER',
    title: '5% Unlimited Cashback on All Merchant Payments',
    description: 'Earn 5% unlimited cashback on all BookMyShow payments — applicable for new card holders (existing YES BANK credit card holders are not eligible).',
    code: '',
    verified: 'Verified',
    userType: 'New Card Holders',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO ₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'BANK OFFER',
    title: 'MobiKwik UPI: Up to ₹100 Cashback on Bookings Above ₹300',
    description: 'Pay with MobiKwik UPI and earn up to ₹100 cashback on bookings above ₹300 — minimum assured cashback of ₹10 for eligible users.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FLAT 5% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'BANK OFFER',
    title: 'YES Bank POP Credit Card: Flat 5% Cashback via POP UPI',
    description: 'Pay via YES Bank POP Credit Card on POP UPI and earn a flat 5% cashback on every BookMyShow transaction.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: '10% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'BANK OFFER',
    title: 'Bajaj UPI: Flat 10% Instant Cashback Up to ₹50',
    description: 'Pay with Bajaj UPI and get 10% instant cashback up to ₹50 on BookMyShow — valid on movies and non-movie bookings above ₹299.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT ₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'BANK OFFER',
    title: 'Jupiter UPI: Flat ₹100 Cashback on Bookings Above ₹400',
    description: 'Pay with Jupiter UPI on BookMyShow and get a flat ₹100 cashback on bookings above ₹400 — valid once per user, cannot be combined with other offers.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: '20% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'BANK OFFER',
    title: 'RuPay Credit Card on BHIM UPI: 20% Cashback Up to ₹100',
    description: 'Pay with RuPay Credit Card via UPI on the BHIM app and earn 20% cashback up to ₹100 on bookings above ₹200.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO ₹300 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'BANK OFFER',
    title: 'POP UPI: Cashback Up to ₹300 on Bookings Above ₹399',
    description: 'Pay via POP UPI and earn up to ₹300 cashback on BookMyShow transactions above ₹399 — valid once per user per calendar month.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-17',
    badge: '₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'PAY LATER',
    title: 'Simpl Pay: ₹100 Cashback on Your First Transaction',
    description: 'First-time Simpl users on BookMyShow get ₹100 cashback on bookings above ₹499 — no code required, just pay via Simpl.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 20% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'WALLET',
    title: 'MobiKwik Wallet or ZIP: 10% Cashback (Up to 20% for Existing Users)',
    description: 'Pay via MobiKwik Wallet or ZIP Pay Later and get 10% cashback as a new user (min ₹349) or up to 20% as an existing user (min ₹500) — minimum assured cashback of ₹50.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-19',
    badge: '10% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#C4242B]',
    color: '#C4242B',
    type: 'EVENTS',
    title: 'HSBC Premium Debit Card: 10% OFF on All Live Events',
    description: 'HSBC Premium Debit Card holders save 10% on all live event bookings on BookMyShow — valid once per card per month, for the first 1,000 transactions monthly.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-20',
    badge: '25% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#1E1B2E]',
    color: '#1E1B2E',
    type: 'MOVIE TICKETS',
    title: 'ICICI Select Credit Cards: 25% OFF on Movie Tickets',
    description: 'Book a minimum of 2 movie tickets with your ICICI Bank Select Credit Card and save 25% on your total ticket cost — available on a first-come, first-served basis.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];
