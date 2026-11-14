// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK' | 'DIGITAL' | 'ELIGIBILITY' | 'EMI' | 'QUICK' | 'SPECIAL' | 'DEAL' | 'NEW USER' | 'APP ONLY' | 'REFERRAL' | 'EXISTING USER';
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

export const KREDITBEE_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO ₹10 LAKHS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Coupon Code – Personal Loan Up to ₹10 Lakhs',
    description: 'Apply for a KreditBee personal loan of up to ₹10 Lakhs with fast processing.',
    points: [
      'You can borrow up to ₹10,00,000, depending on your eligibility.',
      'Keep your PAN Card, Voter ID and a selfie ready for verification.',
      'The process is made for quick loan approvals.',
      'Please read the eligibility rules before you submit your application.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: '₹6K - ₹10L',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Coupon Code – Instant Personal Loan from ₹6,000 to ₹10 Lakhs',
    description: 'Get an instant personal loan anywhere from ₹6,000 to ₹10 Lakhs.',
    points: [
      'You can apply for a loan amount between ₹6,000 and ₹10,00,000.',
      'Use the money for travel, education, emergencies or any personal need.',
      'The amount you get depends on your eligibility.',
      'Fill in the online application for an easy, trouble-free process.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO ₹10 LAKHS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Promo Code – Instant Loan Up to ₹10 Lakhs',
    description: 'Get an instant personal loan with easy repayment options.',
    points: [
      'Borrow up to ₹10 Lakhs with very few documents.',
      'Choose a repayment plan that fits your monthly budget.',
      'Fast approval means you get your money sooner.',
      'Apply online on the KreditBee platform.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO ₹3 LAKHS',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'NEW USER',
    title: 'KreditBee Promo Code – New Users Personal Loan Up to ₹3 Lakhs',
    description: 'New users can apply for a loan from ₹1,000 to ₹3 Lakhs.',
    points: [
      'First-time applicants can borrow anywhere between ₹1,000 and ₹3 Lakhs.',
      'Pick a repayment period from 3 to 24 months.',
      'Submit your PAN Card, along with one valid ID proof and one address proof.',
      'The final loan amount depends on your eligibility.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO ₹3 LAKHS',
    badgeType: 'APP ONLY',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'FLEXI LOAN',
    title: 'KreditBee Discount Code – App-Only Flexi Loan Up to ₹3 Lakhs',
    description: 'Apply on the app for a personal loan with easy EMIs.',
    points: [
      'Borrow from ₹1,000 up to ₹3 Lakhs through the app.',
      'You do not need a credit card to apply.',
      'Eligible users have a good chance of approval.',
      'Finish the process with very few documents.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO ₹80,000',
    badgeType: 'APP ONLY',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'FLEXI LOAN',
    title: 'KreditBee Discount Code – Flexi Personal Loan Up to ₹80,000',
    description: 'Get an app-only flexi personal loan for your daily needs.',
    points: [
      'Borrow between ₹1,000 and ₹80,000, depending on your eligibility.',
      'Apply directly on the KreditBee mobile app.',
      'You can use the money for any personal need.',
      'The digital application process is simple and easy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO ₹750',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'REFERRAL',
    title: 'KreditBee Voucher Code – Earn Up to ₹750 Cashback',
    description: 'Refer your friends and earn cashback rewards with KreditBee.',
    points: [
      'Earn up to ₹750 cashback for every successful referral.',
      'Invite eligible friends through the referral programme.',
      'See the app or website for full referral details.',
      'Cashback is subject to the terms and conditions of the programme.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'CREDIT LINE',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'CREDIT LINE',
    title: 'KreditBee Voucher Code – Explore Credit Line Offers',
    description: 'See the Credit Line offers available for eligible KreditBee users.',
    points: [
      'Check the Credit Line offers on the KreditBee app.',
      'The benefits you get depend on your eligibility.',
      'Get access to money whenever you need it.',
      'Go through the latest offers before you apply.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLEXIBLE EMI',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'EMI PLAN',
    title: 'KreditBee Referral Code – Flexible EMI Plan Options',
    description: 'Pick an EMI plan that suits your monthly budget.',
    points: [
      'Flexible EMI options are available on eligible loans.',
      'Choose a repayment period that is comfortable for you.',
      'Plan your money well with easy monthly instalments.',
      'See the EMI options available before you confirm your loan.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'REWARDS',
    badgeType: 'REFERRAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'REFERRAL',
    title: 'KreditBee Referral Code – Refer Friends for Rewards',
    description: 'Invite your friends and see the referral rewards on offer.',
    points: [
      'Refer your friends through the KreditBee app.',
      'Check the latest referral rewards before you join.',
      'Rewards can change depending on the current programme.',
      'Follow the referral terms given in the app.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FIRST LOAN',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'NEW USER',
    title: 'KreditBee Cashback Offers – First Loan Special Benefits',
    description: 'New KreditBee users can look at special benefits on their first loan.',
    points: [
      'First-time applicants can check the welcome offers available to them.',
      'Benefits can change during promotional periods.',
      'Apply online to see which offers you are eligible for.',
      'Complete your first loan application digitally.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FEE WAIVER',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PROCESSING FEE',
    title: 'KreditBee Cashback Offers – Festive Processing Fee Waiver',
    description: 'Lower your loan cost with processing fee benefits this festive season.',
    points: [
      'Eligible applicants can get a processing fee waiver.',
      'The offer is valid only for a limited festive period.',
      'Save money on the upfront cost of your loan application.',
      'Check whether the offer is available before you apply.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'LOWER FEE',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'PROCESSING FEE',
    title: 'KreditBee Wallet Offers – Reduced Processing Fee',
    description: 'Apply online and pay a lower processing fee on eligible loans.',
    points: [
      'A reduced processing fee is available on selected applications.',
      'Submit your loan application through KreditBee.',
      'Lower upfront charges help bring down your borrowing cost.',
      'Eligibility conditions apply.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FEE OFFER',
    badgeType: 'EXISTING USER',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PROCESSING FEE',
    title: 'KreditBee Wallet Offers – Processing Fee Offer for Returning Users',
    description: 'Returning customers can check special processing fee offers.',
    points: [
      'Existing users may get a reduced processing fee.',
      'Look in the app to see your latest eligible offer.',
      'The offers available can be different for each customer.',
      'Apply through your registered KreditBee account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FROM 12% P.A.',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'INTEREST RATE',
    title: 'KreditBee Bank Offers – Interest Rates Starting from 12% p.a.',
    description: 'See personal loans for eligible users with interest rates starting from 12% per annum.',
    points: [
      'Interest rates start from 12% p.a. on eligible loans.',
      'Read the clear loan terms before you apply.',
      'No hidden charges are mentioned for eligible loans.',
      'Check your eligibility online in just a few minutes.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'APP EXCLUSIVE',
    badgeType: 'APP ONLY',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'APP OFFERS',
    title: 'KreditBee Bank Offers – App-Exclusive Loan Offers',
    description: 'Get special loan offers on the KreditBee mobile app.',
    points: [
      'Download the app to see exclusive promotions.',
      'App users can get extra loan offers.',
      'See the latest deals before you apply.',
      'Offers depend on your eligibility.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'FREE CHECK',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'ELIGIBILITY',
    title: 'KreditBee Coupon Code – Free Loan Eligibility Check',
    description: 'Find out your loan eligibility before you send your application.',
    points: [
      'Check your eligibility online without paying anything.',
      'Use the KreditBee app or website to do the check.',
      'Know where you stand before you apply.',
      'Save time with a quick digital process.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'FAST PROCESS',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Coupon Code – Faster Loan Processing',
    description: 'Apply for selected loans and get faster processing.',
    points: [
      'Eligible loan applications are processed faster.',
      'Send your application through the app.',
      'Fewer documents help you get approval sooner.',
      'Check your eligibility before you apply.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'REPEAT USERS',
    badgeType: 'EXISTING USER',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Promo Code – Exclusive Benefits for Repeat Users',
    description: 'Existing customers can enjoy an easier experience when taking another loan.',
    points: [
      'Repeat users may get quicker loan approvals.',
      'The application process is made simpler for you.',
      'Benefits for existing customers depend on eligibility.',
      'Apply using your registered account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: '100% ONLINE',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Promo Code – 100% Online Loan Application',
    description: 'Complete your whole personal loan application online.',
    points: [
      'Apply digitally, with no need to visit a branch.',
      'Do everything online, from application to disbursal.',
      'Enjoy a paperless loan application.',
      'Upload your documents safely on the platform.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-21',
    badge: 'FIRST LOAN',
    badgeType: 'NEW USER',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'NEW USER',
    title: 'KreditBee Discount Code – New User First Loan Benefits',
    description: 'New applicants can look at special offers on their first loan.',
    points: [
      'First-time users can check the welcome benefits available.',
      'Apply online with simple documents.',
      'Eligible applicants can get fast approvals.',
      'Finish the process without going to a branch.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-22',
    badge: 'INSTANT LOAN',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Discount Code – Loan in Minutes',
    description: 'Get quick approval and fast loan disbursal.',
    points: [
      'Eligible loans are processed in just a few minutes.',
      'The money is sent quickly to your bank account.',
      'Useful when you need money urgently.',
      'Complete your application online.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-23',
    badge: 'FLEXIBLE EMI',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'EMI PLAN',
    title: 'KreditBee Voucher Code – Flexible EMI Options',
    description: 'Pick a repayment plan that fits your budget.',
    points: [
      'Choose an EMI period that suits your loan.',
      'Manage your monthly payments with more ease.',
      'Look at the repayment options before you confirm.',
      'Plan your money well with easy instalments.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-24',
    badge: '24X7 APPLY',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Voucher Code – 24x7 Instant Loan Applications',
    description: 'Apply for a personal loan on KreditBee at any time you like.',
    points: [
      'Loan applications are open 24x7.',
      'Apply at a time that is comfortable for you.',
      'Get money for your urgent needs.',
      'Complete the whole process online.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-25',
    badge: 'EASY KYC',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'DOCUMENTATION',
    title: 'KreditBee Referral Code – Hassle-Free Documentation',
    description: 'Upload your documents online with a simple verification process.',
    points: [
      'Upload your basic KYC and income documents digitally.',
      'Enjoy a smooth and easy verification process.',
      'Finish the documentation without extra paperwork.',
      'Apply online from the comfort of your home.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-26',
    badge: 'SHOPPING LOAN',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#1B6FE0]',
    color: '#1B6FE0',
    type: 'SHOPPING',
    title: 'KreditBee Referral Code – Shopping Loans Made Easy',
    description: 'Pay for your shopping with a flexible personal loan.',
    points: [
      'Use your loan to buy electronics, appliances and more.',
      'Pay back in easy monthly EMIs.',
      'Borrow as per the amount you are approved for.',
      'Apply online for a quick process.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-27',
    badge: 'FOR ALL',
    badgeType: 'ELIGIBILITY',
    badgeColor: 'bg-[#0D2A4D]',
    color: '#0D2A4D',
    type: 'PERSONAL LOAN',
    title: 'KreditBee Cashback Offers – Loans for Salaried & Self-Employed',
    description: 'See loan options for both salaried and self-employed applicants.',
    points: [
      'Loans are available for salaried as well as self-employed people.',
      'Eligible borrowers can apply based on their financial profile.',
      'Borrow as per the amount you are approved for.',
      'Complete the application online with very few documents.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
