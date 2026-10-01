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

export const AIRBNB_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'ENTIRE HOMES',
    title: 'Get Up to 25% Off on Entire Home Stays Booked in Advance',
    description: 'Book entire homes and villas at least 28 days ahead to unlock up to 25% off your total stay.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 2,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'NEW USER',
    title: 'Get Flat ₹2,000 Off on Your First Airbnb Booking',
    description: 'First-time users get a flat ₹2,000 discount on their first stay booking above ₹8,000.',
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'LONG-TERM STAYS',
    title: 'Get Up to 20% Off on Stays of 28 Nights or More',
    description: 'Book a monthly stay of 28+ nights and save up to 20% versus nightly rates.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'EXPERIENCES',
    title: 'Get Up to 15% Off on Airbnb Experiences & Local Activities',
    description: 'Book host-led local activities, cooking classes, and city tours at up to 15% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'WEEKEND STAYS',
    title: 'Get Up to 10% Off on Weekly Stays of 7 Nights or More',
    description: 'Stay 7 nights or longer at a single listing to unlock a weekly stay discount of up to 10%.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 1,500',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'UNIQUE STAYS',
    title: 'Get Flat ₹1,500 Off on Unique Stays — Treehouses, Cabins & Villas',
    description: 'Book a unique stay listing — treehouses, cabins, or countryside villas — and save a flat ₹1,500.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 12% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'BANK OFFER',
    title: 'Get Up to 12% Instant Discount with HDFC & Axis Bank Cards',
    description: 'Get an additional instant discount on Airbnb bookings when paying with eligible HDFC or Axis Bank cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FREE CANCEL',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'FLEXIBLE BOOKING',
    title: 'Free Cancellation on Select Flexible-Rate Listings',
    description: 'Filter for Flexible cancellation listings to book with free cancellation up to 24 hours before check-in.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 18% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'SUPERHOST STAYS',
    title: 'Get Up to 18% Off on Select Superhost-Listed Properties',
    description: 'Book Superhost-badge listings during promotional windows at up to 18% OFF.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'OFF-SEASON DEALS',
    title: 'Get Up to 30% Off on Off-Season & Last-Minute Stays',
    description: 'Book off-season dates or last-minute stays (within 14 days of check-in) at discounts of up to 30%.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
