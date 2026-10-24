

export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  details?: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const HOTELCOM_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FROM ₹4,799',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DOMESTIC HOTELS',
    title: 'Hotels.com Discount Code – Hotel Star City from ₹4,799 Per Night',
    description: 'Stay at Hotel Star City in New Delhi with rooms available from just ₹4,799 per night for a limited time.',
    details: [
      'Book rooms starting from ₹4,799 per night.',
      'Regular price is ₹7,999 per night.',
      'Includes taxes and fees in the total booking price.',
      'Ideal for guests exploring New Delhi.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FROM ₹54,450',
    badgeType: 'LUXURY',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LUXURY HOTELS',
    title: 'Hotels.com Discount Code – The Leela Palace New Delhi from ₹54,450',
    description: 'Reserve a luxury stay at The Leela Palace New Delhi with special nightly rates starting from ₹54,450.',
    details: [
      'Book your stay from ₹54,450 per night.',
      'Save compared to the regular rate of ₹60,500.',
      'Total booking price includes taxes and applicable fees.',
      'Perfect for premium business and leisure stays.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FROM ₹4,375',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Hotels.com Promo Code – Shri Sai Guest House from ₹4,375',
    description: 'Enjoy affordable accommodations in New Delhi with rooms starting from ₹4,375 at Shri Sai Guest House.',
    details: [
      'Stay from just ₹4,375 per night.',
      'Member pricing may be available on eligible bookings.',
      'Total charges include taxes and fees.',
      'Conveniently located opposite Azadpur Main Mandi.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'REWARD NIGHT',
    badgeType: 'REWARDS',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LOYALTY PROGRAM',
    title: 'Hotels.com Rewards – Stay 10 Nights & Get 1 Reward Night',
    description: 'Join Hotels.com Rewards and earn a reward night after completing 10 eligible hotel stays.',
    details: [
      'Collect one reward night after every 10 eligible nights.',
      'Receive 10% back in Hotels.com Cash.',
      'Rewards apply to qualifying reservations.',
      'A great way to save on future hotel bookings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹9,622',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BEACH HOTELS',
    title: 'Hotels.com coupon code – Candolim Hotels from ₹9,622 Per Night',
    description: 'Discover beachfront hotels in Candolim with average nightly rates starting from ₹9,622.',
    details: [
      'Average room rates start from ₹9,622 per night.',
      'Explore hotels close to Candolim Beach.',
      'Choose from family-friendly and luxury accommodations.',
      'Prices vary based on travel dates and availability.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹7,077',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'INTERNATIONAL',
    title: 'Hotels.com coupon code – Phuket Hotels from ₹7,077 Per Night',
    description: 'Find great hotel deals in Phuket with average nightly prices starting from ₹7,077.',
    details: [
      'Hotel rates average ₹7,077 per night.',
      'Stay near beaches, shopping, and local attractions.',
      'Browse resorts, hotels, and beachfront properties.',
      'Prices may change depending on your travel dates.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹5,832',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOTEL OFFERS',
    title: 'Hotels.com Offers – Udaipur Hotels from ₹5,832 Per Night',
    description: 'Plan your stay in Udaipur with hotel rates averaging ₹5,832 per night.',
    details: [
      'Average nightly price starts from ₹5,832.',
      'Discover hotels near lakes and popular attractions.',
      'Choose from budget and luxury accommodations.',
      'Rates are subject to availability.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹9,320',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOTEL OFFERS',
    title: 'Hotels.com Offers – Mumbai Hotels from ₹9,320 Per Night',
    description: 'Book hotels in Mumbai with average room rates starting from ₹9,320 per night.',
    details: [
      'Average hotel prices start from ₹9,320 per night.',
      'Stay close to business districts and city attractions.',
      'Browse a wide range of hotels for every budget.',
      'Prices may vary based on booking dates and availability.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];