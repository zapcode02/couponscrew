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
  points: string[];
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
    points: [
      'Requires payment with an eligible bank card — ICICI, Axis, IndusInd, RBL, Citi, HSBC, SBI, Kotak, or YES Bank.',
      'Cheaper ticket between the two gets discounted free of cost, not a flat value deduction.',
      'Valid across participating cinema chains — not exclusive to a single multiplex brand.',
      'Terms may limit the offer to one use per card per week or month — check at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Applies only to eligible rent titles, not purchase/own transactions.',
      'Code STREAMSAVE must be applied manually at checkout.',
      'Covers BookMyShow Stream\'s online movie rental catalogue, not cinema tickets.',
      'Check title eligibility on the Stream page before assuming the discount applies.'
    ],
    code: 'STREAMSAVE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Movie-specific offer valid for Irumudi screenings only.',
      'Limited to select users/cities — check eligibility on the booking page.',
      'Cheaper of the two tickets is the one discounted free.',
      'Offer validity is tied to the film\'s theatrical run — check before assuming long-term availability.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Select Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Movie-specific offer valid for Vishwanath and Sons screenings only.',
      'Limited to select users/cities — check eligibility on the booking page.',
      'Cheaper of the two tickets is the one discounted free.',
      'Tied to the film\'s theatrical run — availability may end once the run concludes.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Select Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Valid only at the specific Mahalaxmi Complex, Kothapeta venue.',
      'Code MCKT75 must be applied manually at checkout.',
      'Applies to Blockbuster-tagged screenings specifically, not all shows at this venue.',
      'Flat ₹75 saving, not a percentage-based discount.'
    ],
    code: 'MCKT75',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires an existing BookMyShow Rewards balance to redeem.',
      'Minimum booking value of ₹599 is required.',
      'Limited to one redemption per user, on either the website or the app.',
      'Maximum discount caps at ₹500 even if your Rewards balance is higher.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires active BookMyShow Club membership.',
      'Applies to selected event tickets only, not the entire events catalogue.',
      'Discount percentage varies by event — up to 25% is the ceiling.',
      'Redeem the benefit directly at checkout once logged into your Club account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Club Members',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum order value of ₹399 is required for cashback eligibility.',
      'Cashback is assured but capped at ₹15 per individual transaction.',
      'Maximum total cashback across transactions is ₹100.',
      'Requires payment specifically via Amazon Pay balance, not linked cards.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires a RuPay Credit Card used specifically via Paytm UPI.',
      'Minimum spend of ₹300 is required to be eligible.',
      'Valid across all BookMyShow categories — Movies, Events, Plays, Sports, Activities, and Stream.',
      'Cashback caps at ₹200 even on larger transactions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Restricted to new card holders only — existing YES Bank credit card holders don\'t qualify.',
      '"Unlimited" refers to no cap per transaction, though standard terms may still apply.',
      'Applies broadly across all BookMyShow payment categories.',
      'Confirm card eligibility with your bank before relying on this offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Card Holders',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum booking value of ₹300 is required for eligibility.',
      'Assured minimum cashback is ₹10, with a ceiling of ₹100.',
      'Requires payment specifically via MobiKwik UPI.',
      'Eligibility criteria for the "assured" tier may vary — check the offer terms page.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires specifically a YES Bank POP Credit Card used via the POP UPI app.',
      'Flat 5% applies to every transaction, not just a one-time use.',
      'No minimum spend mentioned — check the latest terms before assuming unlimited use.',
      'Cashback crediting timeline depends on the YES Bank POP processing schedule.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum booking value of ₹299 is required.',
      'Valid across both movies and non-movie categories like events and plays.',
      'Cashback is instant — credited at the time of transaction, not delayed.',
      'Caps at ₹50 even if 10% of your total would be higher.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum booking value of ₹400 is required.',
      'Limited to one redemption per user, not repeatable.',
      'Cannot be combined with other active BookMyShow offers.',
      'Requires payment specifically via the Jupiter UPI app.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum booking value of ₹200 is required for eligibility.',
      'Requires a RuPay Credit Card used specifically via the BHIM app.',
      '20% cashback is calculated on the booking amount, capped at ₹100.',
      'Different from the separate BHIM Card cashback offer which uses a different cap and minimum.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Minimum transaction value of ₹399 is required.',
      'Limited to one redemption per user, per calendar month.',
      'Cashback caps at ₹300 on larger transactions.',
      'Requires payment specifically via the POP UPI app.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Valid only for your first-ever Simpl transaction on BookMyShow.',
      'Minimum booking value of ₹499 is required.',
      'No code needed — just select Simpl Pay at checkout.',
      'One-time offer, not repeatable on future bookings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
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
    points: [
      'New users get 10% cashback with a minimum spend of ₹349.',
      'Existing users can get up to 20% cashback but need a higher minimum spend of ₹500.',
      'Assured minimum cashback is ₹50 regardless of which tier applies.',
      'Valid via either MobiKwik Wallet or ZIP Pay Later — both routes qualify.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Limited to the first 1,000 qualifying transactions each month — can run out before month-end.',
      'Requires specifically an HSBC Premium Debit Card.',
      'Applies only to live events, not movies or other categories.',
      'Capped at once per card, per month.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires a minimum of 2 tickets booked in a single transaction.',
      'Only valid with ICICI Bank Select Credit Cards, not all ICICI cards.',
      'First-come, first-served — the offer can run out of allocated slots before month-end.',
      '25% discount applies to the total ticket cost, not per ticket separately.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
