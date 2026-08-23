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

export const INDIGO_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 20% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#00205B]',
      color: '#00205B',
      type: 'DOMESTIC FLIGHTS',
      title: 'Get up to 20% off on domestic flight bookings',
      description: 'Book domestic flights across India and save up to 20% on your base fare with this offer.',
      code: 'INDIGO20',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 15% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#F5A623]',
      color: '#F5A623',
      type: 'INTERNATIONAL FLIGHTS',
      title: 'Flat 15% off on select international flight routes',
      description: 'Enjoy a flat 15% discount when booking select international IndiGo flight routes online.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 10% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#00205B]',
      color: '#00205B',
      type: 'FIRST BOOKING',
      title: 'First-time users get up to 10% off their first flight booking',
      description: 'New users can save up to 10% on their very first flight booking made through the website or app.',
      code: 'FIRSTFLY10',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'FLAT ₹500 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#F5A623]',
      color: '#F5A623',
      type: 'FLIGHT BOOKING',
      title: 'Flat ₹500 off on flight bookings above ₹4,000',
      description: 'Apply this code at checkout to get flat ₹500 off on domestic flight bookings above ₹4,000.',
      code: 'FLY500',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'UP TO 12% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#00205B]',
      color: '#00205B',
      type: 'WEB CHECK-IN OFFERS',
      title: 'Save on add-ons when you complete web check-in early',
      description: 'Complete your web check-in early and unlock offers of up to 12% on seat selection and add-ons.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 25% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F5A623]',
      color: '#F5A623',
      type: 'DOMESTIC FLIGHTS',
      title: 'Up to 25% off on weekday domestic flight bookings',
      description: 'Plan your midweek travel and enjoy up to 25% off on select domestic weekday flights.',
      code: 'WEEKDAY25',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'FLAT 10% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#00205B]',
      color: '#00205B',
      type: 'INTERNATIONAL FLIGHTS',
      title: 'Flat 10% off on international flight bookings via app',
      description: 'Book your international flight through the mobile app and get a flat 10% discount on fares.',
      code: 'APPFLY10',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'UP TO 8% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F5A623]',
      color: '#F5A623',
      type: 'FLIGHT BOOKING',
      title: 'Extra savings on seat selection and baggage add-ons',
      description: 'Get up to 8% savings when you add seat selection or extra baggage during flight booking.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'FLAT ₹300 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#00205B]',
      color: '#00205B',
      type: 'FIRST BOOKING',
      title: 'Flat ₹300 off for new users on their first booking',
      description: 'New customers can apply this code to get a flat ₹300 discount on their first flight booking.',
      code: 'NEW300',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 18% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#F5A623]',
      color: '#F5A623',
      type: 'DOMESTIC FLIGHTS',
      title: 'Up to 18% off on domestic flight bookings during sale days',
      description: 'Check for periodic sale days offering up to 18% off across popular domestic flight routes.',
      code: 'SALEFLY18',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
