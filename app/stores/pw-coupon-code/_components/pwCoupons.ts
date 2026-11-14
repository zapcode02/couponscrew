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
  points: string[];
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
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'LIVE COURSES',
    title: 'Physics Wallah Discount Code – Up to 80% Off Live Courses',
    description: 'Save up to 80% on live courses on the Physics Wallah learning platform.',
    points: [
      'Get up to 80% off on JEE, NEET, Programming, Data Science, Banking & Finance and more.',
      'See live courses made for students as well as working professionals.',
      'Pick from a wide range of career-focused programmes.',
      'Limited-time savings on eligible courses.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO ₹1,000 CASHBACK',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'REFERRAL',
    title: 'Physics Wallah Discount Code – Earn Up to ₹1,000 Cashback by Referring Friends',
    description: 'Refer your friends and get cashback rewards on eligible enrollments.',
    points: [
      'Earn ₹1,000 cashback on your first successful referral batch enrollment.',
      'Your friend gets ₹1,000 off on their first VP/PS offline batch.',
      'Keep referring to earn up to ₹10,000 in total rewards.',
      'Share your referral and start earning cashback.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'PROGRAMMING',
    title: 'Physics Wallah Voucher Code – Up to 50% Off Programming Courses',
    description: 'Learn in-demand coding skills and save up to 50%.',
    points: [
      'Save up to 50% on selected programming courses.',
      'Learn from expert mentors with a curriculum based on industry needs.',
      'Get hands-on practice through real projects.',
      'Soft skills training is part of eligible programmes.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'JOB ASSISTANCE',
    title: 'Physics Wallah Voucher Code – Up to 30% Off Job Assistance Programs',
    description: 'Get ready for your career with discounted job assistance courses.',
    points: [
      'Get up to 30% off on selected job assistance programmes.',
      'Courses cover AI & Machine Learning, DevOps, Cyber Security, Cloud Computing and Software Development.',
      'Learn with expert guidance, focused on your career.',
      'Good for learners who want to be more job-ready.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F172A]',
    color: '#0F172A',
    type: 'BANKING & FINANCE',
    title: 'Physics Wallah Referral Code – Up to 65% Off Banking & Finance Courses',
    description: 'Grow your finance career and save up to 65%.',
    points: [
      'Get up to 65% off on Banking & Finance courses.',
      'Learn financial literacy, soft skills and job-focused topics.',
      'Get expert-led teaching and career support.',
      'Available on selected Banking & Finance programmes.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹6,999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'BASIC PLAN',
    title: 'Physics Wallah Referral Code – Basic Plan Starting at ₹6,999',
    description: 'Start learning with the low-cost Basic Plan from Physics Wallah.',
    points: [
      'Join the Basic Plan from just ₹6,999.',
      'Available to all eligible users during the offer period.',
      'Get learning resources with the Basic Plan.',
      'A good choice for learners on a budget.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF5722]',
    color: '#2563EB',
    type: 'SOFTWARE DEV',
    title: 'Physics Wallah Cashback Offers – Up to 25% Off Software Development Courses',
    description: 'Save more while you learn software development skills.',
    points: [
      'Get up to 25% off on Software Development courses.',
      'See DevOps, live classes and trending programmes.',
      'Courses are open to college students and future developers.',
      'Learn practical skills through well-planned training.',
    ],
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
    title: 'Physics Wallah Cashback Offers – Book a Free Online Demo Class',
    description: 'See how Physics Wallah teaches with a free live demo class.',
    points: [
      'Register for a free online Power Batch demo class.',
      'Open to students preparing for JEE, NEET and school exams.',
      'You do not need to buy anything to join the session.',
      'Try the learning experience before you enrol.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
