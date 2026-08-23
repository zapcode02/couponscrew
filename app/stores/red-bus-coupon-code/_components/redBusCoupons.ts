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
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const REDBUS_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 25% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D84E55]',
      color: '#D84E55',
      type: 'FIRST BOOKING',
      title: 'Get up to 25% off on your first bus ticket booking',
      description: 'New users can save up to 25% on their first bus ticket booked through redBus.',
      code: 'REDBUS150',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT ₹150 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'BUS TICKETS',
      title: 'Flat ₹150 off on bus ticket bookings above ₹499',
      description: 'Apply this code at checkout to get a flat ₹150 discount on bus ticket bookings above ₹499.',
      code: 'SAVE150',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 20% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D84E55]',
      color: '#D84E55',
      type: 'AC SLEEPER',
      title: 'Up to 20% off on AC Sleeper bus bookings',
      description: 'Book AC Sleeper buses across major routes and save up to 20% on your fare.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 15% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'ROUND TRIP',
      title: 'Up to 15% off when you book a round trip bus ticket',
      description: 'Book your return journey together with your onward trip and save up to 15% on the combined fare.',
      code: 'ROUND15',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'FLAT ₹100 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#D84E55]',
      color: '#D84E55',
      type: 'WALLET OFFER',
      title: 'Flat ₹100 cashback when you pay via select wallets',
      description: 'Pay using select mobile wallets at checkout and get flat ₹100 cashback credited on eligible bookings.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'APP EXCLUSIVE',
      title: 'Up to 30% off on bus bookings via the redBus app',
      description: 'Download the redBus app and get access to app-exclusive discounts of up to 30% on select routes.',
      code: 'APP30',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 10% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D84E55]',
      color: '#D84E55',
      type: 'LOCAL BUSES',
      title: 'Up to 10% off on local & state transport bus bookings',
      description: 'Save on local and state road transport corporation bus bookings across select states.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'FLAT ₹75 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'BUS TICKETS',
      title: 'Flat ₹75 off on your next bus ticket booking',
      description: 'Use this code to get a flat ₹75 discount on your next bus ticket booking on redBus.',
      code: 'FLAT75',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 20% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D84E55]',
      color: '#D84E55',
      type: 'VOLVO & MULTI-AXLE',
      title: 'Up to 20% off on Volvo & multi-axle bus bookings',
      description: 'Book premium Volvo and multi-axle buses on long-distance routes and save up to 20%.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 12% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'AIRPORT TRANSFER',
      title: 'Up to 12% off on airport transfer bus bookings',
      description: 'Save up to 12% when you book an airport transfer bus service through redBus.',
      code: 'AIRPORT12',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
