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
  points: string[];
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
    type: 'YEARLY PASS',
    title: 'Testbook Discount Code – Flat 61% Off Yearly Pass Plan',
    description: 'Get full access to Testbook’s study resources and save 61% on the yearly plan.',
    points: [
      'Save 61% on the Yearly Testbook Pass Plan.',
      'Get access to more than 70,000 mock tests with the subscription.',
      'Plans start from just ₹549.',
      'Good for exam preparation all year round.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 35% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'ITI COURSE',
    title: 'Testbook Discount Code – Flat 35% Off ITI Electrician Course',
    description: 'Save on a career-focused ITI Electrician & Electronics course.',
    points: [
      'Get a flat 35% discount on the ITI Electrician & Electronics Course.',
      'Course prices start from ₹1,259.',
      'Made for students who are preparing for ITI-related careers.',
      'Limited-time savings on eligible enrollments.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 8% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'PRO PLANS',
    title: 'Testbook Voucher Code – Flat 8% Off All Pro Plans',
    description: 'Pick any Pro Plan and get instant savings.',
    points: [
      'Save 8% on Monthly, Yearly and Lifetime Pro Plans.',
      'The offer is valid on eligible Testbook subscriptions.',
      'Choose the plan that suits your learning goals.',
      'The discount is available only for a limited period.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 44% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MONTHLY PASS',
    title: 'Testbook Voucher Code – Flat 44% Off Monthly Pass Plan',
    description: 'Get premium study resources at a lower monthly price.',
    points: [
      'Get 44% off on the Monthly Testbook Pass Plan.',
      'Plans start from ₹499 for 31 days.',
      'Get full access to eligible study materials and mock tests.',
      'Good for short-term exam preparation.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹300/MO',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'COURSE PASS',
    title: 'Testbook Referral Code – Course Pass from ₹300 per Month',
    description: 'Prepare for many competitive exams with one low-cost subscription.',
    points: [
      'The Course Pass starts at just ₹300 per month.',
      'Get access to more than 60 courses from experienced teachers.',
      'Covers UP Lekhpal, UPSC CAPF AC, IBPS RRB and more.',
      'Learn with one easy monthly plan.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FREE MOCK TESTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'UPPSC EXAMS',
    title: 'Testbook Referral Code – Free UPPSC Mock Tests',
    description: 'Practise for UPPSC exams with free mock tests and live tests.',
    points: [
      'Get free mock tests for UPPSC recruitment exams.',
      'Includes Prelims, AE Civil, AE Mechanical and other exams.',
      'Improve your preparation with live tests.',
      'Available without any subscription fee.',
    ],
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
    type: 'RBI GRADE B',
    title: 'Testbook Cashback Offers – Free RBI Grade B Demo Class',
    description: 'Try live coaching before you join the full course.',
    points: [
      'Join a free RBI Grade B demo class.',
      'Get access to more than 320 live classes and 50+ mock tests.',
      'Get 200+ PDFs and 10,000+ practice questions.',
      'See the course before you buy it.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FREE COURSES',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'RAILWAY EXAMS',
    title: 'Testbook Cashback Offers – Free Railway Courses',
    description: 'Prepare for Railway exams with free study material.',
    points: [
      'Get free Railway exam courses and test series.',
      'Covers RRB NTPC, RRB Group D, Biology MCQs, Polity MCQs and more.',
      'Learn through videos and practice material.',
      'Available for eligible learners at no cost.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'LIVE COACHING',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'TESTBOOK SELECT',
    title: 'Testbook Wallet Offers – Testbook Select Live Coaching',
    description: 'Study at home with interactive live coaching classes.',
    points: [
      'Attend live interactive classes taught by expert teachers.',
      'Get PDF study material and practice questions.',
      'Learn with personal coaching support.',
      'Useful for preparing for many competitive exams.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: '4 FREE TESTS',
    badgeType: 'FREE',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'GATE EXAMS',
    title: 'Testbook Wallet Offers – Up to 4 Free GATE Tests',
    description: 'Make your GATE preparation stronger with free test access.',
    points: [
      'Get up to 4 free tests with eligible GATE courses.',
      'Save 100% on the included test subscription.',
      'Practise with exam-style mock tests.',
      'Available on selected GATE course enrollments.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: 'FREE PRACTICE',
    badgeType: 'FREE',
    badgeColor: 'bg-[#4E7FFF]',
    color: '#4E7FFF',
    type: 'STUDY MATERIAL',
    title: 'Testbook Bank Offers – Free Logical Reasoning Tests & Videos',
    description: 'Improve your reasoning skills with free learning material.',
    points: [
      'Take logical reasoning tests at no cost.',
      'Watch free learning videos and practice sessions.',
      'See more reasoning courses for better preparation.',
      'No payment is needed to start learning.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
