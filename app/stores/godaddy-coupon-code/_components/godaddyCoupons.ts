export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
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

export const GODADDY_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '50% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#00A4A6]',
    color: '#00A4A6',
    type: 'EMAIL & OFFICE',
    title: 'GoDaddy Coupon Code – Save 50% on Professional Email',
    description: 'Build trust with a professional business email and enjoy reliable communication with GoDaddy Email.',
    points: [
      'Get 50% OFF on GoDaddy Email plans starting from ₹39/user/month.',
      'Includes 10 GB email storage with spam protection.',
      'Access your inbox easily using Go Daddy Web Based Email.',
      'Perfect for businesses using a custom domain.'
    ],
    code: 'EMAIL50OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '80% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#00A4A6]',
    color: '#00A4A6',
    type: 'WORDPRESS HOSTING',
    title: 'GoDaddy Coupon Code – Save 80% on Managed WordPress Hosting',
    description: 'Launch a faster WordPress website with one of the most popular GoDaddy Hosting Plans.',
    points: [
      'Get 80% OFF with plans starting from ₹149/month.',
      'Includes 40 GB SSD storage and access to 59,000+ plugins.',
      'Comes with 3 free Microsoft email mailboxes.',
      'Great choice for blogs, business sites, and online stores.'
    ],
    code: 'WP80OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '70% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#00A4A6]',
    color: '#00A4A6',
    type: 'WEB HOSTING',
    title: 'GoDaddy Discount Code – Save 70% on Web Hosting',
    description: 'Create your GoDaddy Website with affordable hosting designed for speed and performance.',
    points: [
      'Save 70% with hosting plans from ₹89/month.',
      'Host one website with 10 GB NVMe storage.',
      'Includes cPanel and Node.js support.',
      'Covered by a 30-day money-back guarantee.'
    ],
    code: 'HOST70OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A4A6]',
    color: '#00A4A6',
    type: 'DOMAINS',
    title: 'GoDaddy Discount Code – Save Up to 60% on Domain Registration',
    description: 'Register, renew, or transfer your Go Daddy Domain while enjoying exclusive member savings.',
    points: [
      'Save up to 60% on eligible domain registrations and renewals.',
      'Great option for reducing your GoDaddy Domain Price.',
      'Available through the Discount Domain Club.',
      'Includes savings on popular domain extensions.'
    ],
    code: 'DOMAIN60OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹2,883.66',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MEMBERSHIP',
    title: 'GoDaddy Promo Code – Domain Pro Membership from ₹2,883.66/Month',
    description: "Manage domain portfolios more efficiently with GoDaddy's Domain Pro Membership.",
    points: [
      'Membership starts from ₹2,883.66/month.',
      'Save up to 60% on eligible TLD registrations and transfers.',
      'Includes monthly auction credits for domain investors.',
      'Ideal for professionals managing multiple Go Daddy Domains.'
    ],
    code: 'DOMAINPRO',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹89/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'STARTER HOSTING',
    title: 'GoDaddy Promo Code – Starter Hosting Plan from ₹89/Month',
    description: 'Launch your first GoDaddy Web Page with the affordable Starter hosting plan.',
    points: [
      'Plans start from ₹89/month.',
      'Host 1 website with 10 GB NVMe storage.',
      'Includes cPanel and Node.js support.',
      'Protected by a 30-day money-back guarantee.'
    ],
    code: 'STARTER89',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹219/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'ECONOMY HOSTING',
    title: 'GoDaddy Voucher – Economy Hosting Plan from ₹219/Month',
    description: 'Build a business website with one of the most popular GoDaddy Web Hosting Plans.',
    points: [
      'Hosting starts from ₹219/month.',
      'Includes 25 GB NVMe storage and a free domain.',
      'Get free business email and 1-year SSL Certificate.',
      'A smart pick for expanding sites and small-scale companies.'
    ],
    code: 'ECONOMY219',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹329/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'DELUXE HOSTING',
    title: 'GoDaddy Voucher – Deluxe Hosting Plan from ₹329/Month',
    description: 'Host multiple websites with additional storage using the GoDaddy Deluxe Hosting plan.',
    points: [
      'Plans start from ₹329/month.',
      'Host up to 10 websites with 50 GB NVMe storage.',
      'Includes free domain, free email, and unlimited SSL.',
      'Ideal for agencies, freelancers, and businesses.'
    ],
    code: 'DELUXE329',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹399/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'ULTIMATE HOSTING',
    title: 'GoDaddy Offers – Ultimate Hosting Plan from ₹399/Month',
    description: 'Scale your online presence with the Ultimate GoDaddy Hosting plan.',
    points: [
      'Plans start from ₹399/month.',
      'Host up to 25 websites with 75 GB NVMe storage.',
      'Includes free domain, business email, and unlimited SSL.',
      'Built to handle busy websites and e-commerce stores with heavy visitor load.'
    ],
    code: 'ULTIMATE399',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹649/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'VPS HOSTING',
    title: 'GoDaddy VPS Hosting – Plans from ₹649/Month',
    description: 'Power your applications with flexible VPS hosting built for developers and businesses.',
    points: [
      'VPS hosting starts from ₹649/month.',
      'Comes with a single virtual CPU, 2 GB memory, and 40 GB of fast NVMe storage.',
      'Supports Linux with optional cPanel or Plesk.',
      'Great for advanced websites and custom applications.'
    ],
    code: 'VPS649',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹3,299/MO',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'VPS SERVER',
    title: 'GoDaddy VPS Hosting – 4 vCPU Server from ₹3,299/Month',
    description: 'Run demanding workloads with a powerful VPS server backed by high-performance resources.',
    points: [
      'Plans start from ₹3,299/month.',
      'Includes 4 vCPU cores, 16 GB RAM, and 200 GB NVMe SSD.',
      'Compatible with Linux and Windows.',
      'Supports cPanel or Plesk hosting environments.'
    ],
    code: 'VPS3299',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'PROTECTED EMAIL',
    badgeType: 'FREE',
    badgeColor: 'bg-[#00A854]',
    color: '#00A854',
    type: 'EMAIL SECURITY',
    title: 'GoDaddy Offers – Get Protected Business Email You Can Use Right From Your Browser',
    description: 'Manage your business communication securely with GoDaddy\'s professional email services.',
    points: [
      'Sign in easily through Go Daddy Login.',
      'Access your inbox using Go Daddy Web Based Email.',
      'Create branded GoDaddy Email addresses with your domain.',
      'Includes spam filtering and business-grade security.'
    ],
    code: 'BIZEMAILSEC',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];