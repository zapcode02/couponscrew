// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL' | 'SELECT';
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

export const TESTBOOK_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT 61% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'PASS SUBSCRIPTION',
    title: 'Yearly Testbook Pass Plan: Flat 61% OFF',
    description: 'Save 61% on the Yearly Testbook Pass Plan — access 70,000+ mock tests starting at just ₹549.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 35% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0B1F4D]',
    color: '#0B1F4D',
    type: 'COURSES',
    title: 'Flat 35% OFF on ITI Electrician & Electronics Course',
    description: 'Get 35% off on the ITI Electrician & Electronics Course — a career-focused program starting at ₹1,259.',
    code: 'ITI30',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 8% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'PASS SUBSCRIPTION',
    title: 'Flat 8% OFF on All Pro Plans',
    description: 'Save 8% on any Testbook Pro plan — Monthly, Yearly, or Lifetime — with this code.',
    code: 'PRO8',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 44% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0B1F4D]',
    color: '#0B1F4D',
    type: 'PASS SUBSCRIPTION',
    title: 'Monthly Testbook Pass Plan: Flat 44% OFF',
    description: 'Save 44% on the Monthly Testbook Pass Plan — starting at ₹499 for 31 days of full access.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'AT ₹300/MO',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'COURSES',
    title: 'Course Pass at Just ₹300/Month',
    description: 'Unlock 60+ courses from top faculties at only ₹300/month — covering UP Lekhpal, UPSC CAPF AC, IBPS RRB, and more.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FREE TESTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0B1F4D]',
    color: '#0B1F4D',
    type: 'TEST SERIES',
    title: 'Free UPPSC Mock Tests — Prelims, AE Civil & More',
    description: 'Prepare for UPPSC recruitment with free mock tests and live tests — covering Prelims, AE Civil, AE Mechanical, and more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'FREE DEMO',
    badgeType: 'FREE',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'COURSES',
    title: 'RBI Grade B Live Coaching: Free Demo Class',
    description: 'Enrol for a free RBI Grade B demo class — get access to 320+ live classes, 50+ mock tests, 200+ PDFs, and 10,000+ practice questions.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FREE COURSES',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0B1F4D]',
    color: '#0B1F4D',
    type: 'COURSES',
    title: 'Railway Courses at Best Price — Free Courses Available',
    description: 'Access Railway exam courses, test series, and videos — including RRB NTPC, RRB Group D, Biology MCQs, Polity MCQs, and more.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'LIVE COACHING',
    badgeType: 'SELECT',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'COURSES',
    title: 'Testbook Select: Live Coaching from Home',
    description: 'Study from home with Testbook Select — personal coaching, live interactive classes, PDF study materials, and practice questions included.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: '4 FREE TESTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0B1F4D]',
    color: '#0B1F4D',
    type: 'TEST SERIES',
    title: 'GATE Test Series: Up to 4 Free Tests',
    description: 'Book your GATE course on Testbook and get up to 4 free tests — save 100% on your test subscription.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'FREE PRACTICE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'STUDY MATERIAL',
    title: 'Free Logical Reasoning Tests & Videos',
    description: 'Sharpen your reasoning skills with free tests, videos, and courses on Testbook — no payment required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
