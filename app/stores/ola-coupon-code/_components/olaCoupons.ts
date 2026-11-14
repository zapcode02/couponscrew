// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK' | 'BANK OFFER' | 'DEAL' | 'REWARDS' | 'NEW USER' | 'SPECIAL' | 'UPI OFFER' | 'WALLET';
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

export const OLA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MINI & PRIME',
    title: 'Ola Coupon Code – Flat ₹50 Off Mini & Prime Rides',
    description: 'Save ₹50 on Ola Mini and Prime rides for eligible users in Hyderabad.',
    points: [
      'Get a flat ₹50 discount on Ola Mini and Prime rides.',
      'This offer is for selected users in Hyderabad.',
      'Use the coupon code at checkout to get the discount.',
      'Book your ride before this limited-time offer ends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: '₹300 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OUTSTATION',
    title: 'Ola Coupon Code – ₹300 Cashback on Outstation Trips',
    description: 'Users in Pune can get ₹300 cashback on eligible Ola Outstation bookings.',
    points: [
      'Get ₹300 cashback on Ola Outstation rides in Pune.',
      'You do not need to book for any minimum amount to get the cashback.',
      'The offer is available for eligible users in Pune.',
      'Book your outstation trip and get extra savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MINI & PRIME',
    title: 'Ola Promo Code – Flat ₹50 Off Mini & Prime Rides',
    description: 'Get an instant ₹50 discount on eligible Ola Mini and Prime bookings.',
    points: [
      'Save a flat ₹50 on Ola Mini and Prime cab rides.',
      'No minimum booking amount is needed to use this offer.',
      'Use the coupon code at checkout to get the discount.',
      'This offer can be used only once per customer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MINI & MICRO',
    title: 'Ola Promo Code – Flat ₹50 Off Mini & Micro Rides',
    description: 'Get ₹50 off on your next Ola Mini or Micro ride in selected cities.',
    points: [
      'Get a flat ₹50 discount on eligible Mini and Micro rides.',
      'This offer is for selected users in selected cities.',
      'Use the coupon code before you confirm your booking.',
      'Book during the offer period to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OUTSTATION',
    title: 'Ola Discount Code – Flat 20% Off Outstation Bookings',
    description: 'Save 20% on your next Ola Outstation cab booking for eligible trips.',
    points: [
      'Get a flat 20% discount on Outstation cab bookings.',
      'Log in to the Ola app to get this limited-time offer.',
      'Your trip must be booked and started within one hour.',
      'Pay lower fares on your next outstation trip.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 20% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FIRST RIDE',
    title: 'Ola Discount Code – Up to 20% Off First Ride',
    description: 'New Ola users can save up to 20% on their first ride.',
    points: [
      'Sign up for a new Ola account to get this offer.',
      'Get up to 20% off on your first ride.',
      'Use the coupon code at checkout if needed.',
      'Start your first trip with extra savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: '10% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CAB RIDES',
    title: 'Ola Voucher Code – 10% Cashback on Cab Bookings',
    description: 'Get 10% cashback on your next Ola cab booking in eligible cities.',
    points: [
      'Get 10% cashback up to ₹100 on your next cab ride.',
      'This offer is valid for all users in selected cities.',
      'Use the coupon code if asked during booking.',
      'Save more on your daily travel with cashback rewards.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: '50% OFF',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ONDC FOOD',
    title: 'Ola Voucher Code – 50% Off ONDC Food Orders',
    description: 'Save up to ₹350 on Ola ONDC food delivery orders.',
    points: [
      'Get 50% off up to ₹350 on eligible ONDC food orders.',
      'Eligible users can use this offer any number of times.',
      'Order from participating restaurants in selected locations.',
      'Enjoy tasty meals and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'EXTRA 10% OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BANK OFFER',
    title: 'Ola Referral Code – Extra 10% Off with Standard Chartered Cards',
    description: 'Pay with your Standard Chartered card and save extra on Ola rides.',
    points: [
      'Get an extra 10% off on eligible Ola cab rides.',
      'Pay with a Standard Chartered Bank card to get the offer.',
      'The discount is not valid on Ola Share or Ola Auto rides.',
      'Save more on your daily cab bookings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: '₹40 CASHBACK',
    badgeType: 'WALLET',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'PHONEPE',
    title: 'Ola Referral Code – ₹40 Cashback with PhonePe',
    description: 'Get cashback on your first three Ola rides when you pay with PhonePe.',
    points: [
      'Get up to ₹40 cashback on each of your first three rides.',
      'Pay through PhonePe to be eligible for the cashback.',
      'This offer is available only on the Ola Android app.',
      'Get extra rewards while booking your daily rides.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT ₹100 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'PRIME RIDES',
    title: 'Ola Cashback Offers – Flat ₹100 Off Prime Rides',
    description: 'Save ₹100 instantly on eligible Ola Prime rides for a limited time.',
    points: [
      'Get a flat ₹100 discount on selected Ola Prime rides.',
      'The offer is for eligible users on qualifying bookings.',
      'Use the coupon code at checkout if needed.',
      'Enjoy a more comfortable ride and spend less.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO ₹100 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'AIRPORT RIDES',
    title: 'Ola Cashback Offers – Up to ₹100 Off Airport Rides',
    description: 'Save up to ₹100 on Ola airport rides in selected cab categories.',
    points: [
      'Get 15% off up to ₹100 on eligible airport bookings.',
      'The offer is valid on Mini, Prime Sedan, Prime SUV and Play rides.',
      'Book your airport transfer on the Ola app to get the discount.',
      'Travel to and from the airport at an affordable price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO ₹40,000 OFF',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA ELECTRIC',
    title: 'Ola Wallet Offers – Up to ₹40,000 Off Ola Electric Scooters',
    description: 'Save up to ₹40,000 on selected Ola Electric scooters with an exchange offer.',
    points: [
      'Get up to ₹40,000 off on Ola S1 Pro, S1 Air and S1 X models.',
      'The exchange benefit is available on eligible scooter purchases.',
      'You do not need any coupon code for this offer.',
      'Switch to an electric scooter and save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 30% OFF',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA RENTALS',
    title: 'Ola Wallet Offers – Flat 30% Off First Ola Rentals',
    description: 'New users can save up to ₹250 on their first Ola Rentals booking.',
    points: [
      'Get a flat 30% discount up to ₹250 on your first rental ride.',
      'This offer is for new users in selected cities.',
      'Book your first Ola Rental on the app to be eligible.',
      'Save more on longer trips with this welcome offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT 12% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA AUTO',
    title: 'Ola Bank Offers – 12% Off Ola Auto Rides',
    description: 'Users in Hyderabad can get extra savings on Ola Auto bookings.',
    points: [
      'Get a flat 12% discount on Ola Auto rides in Hyderabad.',
      'This offer is only for eligible customers in this city.',
      'Use the promo during booking if needed.',
      'Save on your daily travel for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 18% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA MINI',
    title: 'Ola Bank Offers – Flat 18% Off Ola Mini Rides',
    description: 'Save a flat 18% on eligible Ola Mini rides in selected cities.',
    points: [
      'Get an instant 18% discount on Ola Mini bookings.',
      'The offer is for all customers in participating cities.',
      'Book your ride on the Ola app to get the discount.',
      'Travel in comfort and pay a lower cab fare.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-17',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA RENTALS',
    title: 'Ola Coupon Code – Flat 30% Off First Ola Rentals',
    description: 'Get up to ₹30 off on your first Ola Rentals booking in selected cities.',
    points: [
      'Save 30% up to ₹30 on your first Mini or Prime rental ride.',
      'The offer is valid only in selected cities.',
      'Use the coupon code at checkout if needed.',
      'Try Ola Rentals at a lower price on your first booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 20% CB',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CAB RIDES',
    title: 'Ola Coupon Code – Up to 20% Cashback on Cab Rides',
    description: 'Get cashback on Ola Micro, Mini and Prime rides with no minimum booking amount.',
    points: [
      'Get up to 20% cashback, with a limit of ₹50, on eligible rides.',
      'The offer is valid on Ola Micro, Mini and Prime bookings.',
      'No minimum booking amount is needed to be eligible.',
      'Get extra savings on your daily travel.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT ₹20 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA AUTO',
    title: 'Ola Promo Code – Flat ₹20 Off Ola Auto Rides',
    description: 'Users in Delhi can save instantly on every Ola Auto ride booked on the app.',
    points: [
      'Get a flat ₹20 discount on Ola Auto rides in Delhi.',
      'The offer is valid on unlimited eligible bookings.',
      'Use the coupon code before you confirm your ride.',
      'Save on your daily travel with every Ola Auto trip.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT ₹40 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'MINI & PRIME',
    title: 'Ola Promo Code – Flat ₹40 Off Mini & Prime Rides',
    description: 'Riders in Delhi can save up to ₹40 on eligible Ola Mini and Prime bookings.',
    points: [
      'Get savings of up to 20%, with a limit of ₹40, on Mini and Prime rides.',
      'The offer is for eligible users in Delhi.',
      'Book on the Ola app to get the available discount.',
      'Bring down your travel cost on daily cab rides.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-21',
    badge: '7% CASHBACK',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SBI CREDIT CARD',
    title: 'Ola Discount Code – 7% Cashback with Ola Money SBI Credit Card',
    description: 'Get 7% cashback on eligible Ola rides when you pay with an Ola Money SBI Credit Card.',
    points: [
      'Get 7% cashback on eligible Ola ride payments.',
      'Save up to ₹6,000 with eligible transactions.',
      'You need a minimum transaction value of ₹500 to get the cashback.',
      'Pay with your Ola Money SBI Credit Card to get this offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-22',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA PARCEL',
    title: 'Ola Discount Code – Flat 10% Off Parcel Delivery',
    description: 'Save 10% on your next Ola Parcel delivery, with pickup and drop at your doorstep.',
    points: [
      'Get a flat 10% discount on eligible Ola Parcel deliveries.',
      'Enjoy easy pickup and delivery at your doorstep.',
      'The offer is for all users on eligible parcel bookings.',
      'Book your parcel delivery on the Ola app and save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-23',
    badge: '12% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'PRIME SEDAN',
    title: 'Ola Voucher Code – 12% Off Prime Sedan Rides',
    description: 'Get a 12% discount on Ola Prime Sedan rides in eligible locations.',
    points: [
      'Save 12% on selected Ola Prime Sedan bookings.',
      'You do not need any coupon code for this offer.',
      'Ride in comfort with unlimited use in participating locations.',
      'Book your next Prime Sedan ride while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-24',
    badge: '5% CASHBACK',
    badgeType: 'UPI OFFER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'CRED UPI',
    title: 'Ola Voucher Code – 5% Cashback via CRED UPI',
    description: 'Pay with CRED UPI and get cashback on eligible Ola bookings.',
    points: [
      'Get 5% cashback up to ₹35 on eligible payments.',
      'You need to pay at least ₹149 to get the offer.',
      'Pay with CRED UPI to get the cashback.',
      'Get extra savings on your daily Ola rides.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-25',
    badge: 'FROM ₹549/DAY',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SELF DRIVE',
    title: 'Ola Referral Code – Self Drive Cars from ₹549/Day',
    description: 'Rent an Ola self-drive car from only ₹549 per day in Bangalore.',
    points: [
      'Book self-drive cars starting at only ₹549 per day.',
      'The rental price includes fuel, for your convenience.',
      'Doorstep delivery is available for bookings over 12 hours within 5km of pickup stations.',
      'This offer is for customers booking in Bangalore.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-26',
    badge: '7% REWARDS',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA MONEY',
    title: 'Ola Referral Code – Earn 7% Reward Points on Every Ride',
    description: 'Collect reward points on every eligible Ola ride you complete.',
    points: [
      'Earn 7% reward points on every Ola trip.',
      'Reward points are added directly to your Ola Money wallet.',
      'Keep earning rewards every time you book eligible rides.',
      'Use your collected rewards on future Ola services.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-27',
    badge: 'FROM ₹26',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA BIKE',
    title: 'Ola Cashback Offers – Bike Rides Starting from ₹26',
    description: 'Travel around the city with low-cost Ola Bike rides starting at only ₹26.',
    points: [
      'Book Ola Bike rides from only ₹26.',
      'The offer is for all users, and no coupon code is needed.',
      'Pick a budget-friendly option for your daily travel.',
      'Travel quickly and easily at a lower fare.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-28',
    badge: '8% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'OLA AUTO',
    title: 'Ola Cashback Offers – 8% Off Ola Auto Bookings',
    description: 'Save 8% on your next Ola Auto booking for daily city travel.',
    points: [
      'Get an instant 8% discount on eligible Ola Auto rides.',
      'Book your ride on the Ola app to get the savings.',
      'Use this offer to bring down the cost of your daily travel.',
      'Travel easily with affordable Ola Auto fares.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];