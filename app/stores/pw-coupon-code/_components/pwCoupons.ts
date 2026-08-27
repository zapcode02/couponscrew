// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK' | 'DEAL';
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

export const PW_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'COURSES',
    title: 'Sitewide: Up to 80% OFF on Live Courses',
    description: "Save up to 80% across Physics Wallah's full course catalogue — JEE, NEET, Data Science, Software Development, Banking & Finance, Programming, and more.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO ₹1,000 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'REFERRAL',
    title: 'Refer a Friend & Earn Up to ₹1,000 Cashback',
    description: 'Refer a friend to Physics Wallah and earn ₹1,000 cashback on your first batch enrolment — your friend also gets ₹1,000 off their first VP/PS offline batch. Refer more and earn up to ₹10,000 total.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'PROGRAMMING',
    title: 'Programming Courses: Up to 50% OFF',
    description: 'Enrol in premium Physics Wallah programming courses at up to 50% off — industry-oriented curriculum with top mentors, immersive projects, and soft skills training.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'JOB ASSISTANCE',
    title: 'Job Assistance Programs: Up to 30% OFF',
    description: 'Save up to 30% on career-focused job assistance programmes — covering AI & Machine Learning, DevOps, Cyber Security, Cloud Computing, and Software Development.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'BANKING & FINANCE',
    title: 'Banking & Finance Courses: Up to 65% OFF',
    description: 'Get up to 65% off on Banking & Finance courses — covering Soft Skill Development, Job Focused Courses, Career Support, Expert-Led Learning, and Financial Literacy.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹6,999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'BASIC PLAN',
    title: 'Basic Plan Starting at Just ₹6,999',
    description: "Get started with Physics Wallah's Basic Plan at just ₹6,999 — available for all users during the sale period.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'SOFTWARE DEV',
    title: 'Software Development Courses: Up to 25% OFF',
    description: 'Save up to 25% on Software Development courses — DevOps, live courses, trending programmes, and college student options available.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'FREE DEMO',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'DEMO CLASS',
    title: 'Book a Free Demo Class Online',
    description: 'Register for a free live online demo class of the Power Batch — no purchase required, open to all students across JEE, NEET, and school preparation batches.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
