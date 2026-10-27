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

export const NAMECHEAP_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '95% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DOMAINS',
    title: 'Namecheap Coupon Code – Save 95% on .health Domains',
    description: 'Secure a professional .health domain for less and build trust online.',
    details: [
      'Save 95% on .health domain registrations for just Rs377.88 per year.',
      'Create a memorable web address for healthcare and wellness businesses.',
      'Regularly priced at Rs7,878.54 per year.',
      'A great choice for clinics, fitness experts, and health professionals.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '91% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DOMAINS',
    title: 'Namecheap Coupon Code – Save 91% on .best Domains',
    description: 'Launch your brand with a premium .best domain at a huge discount.',
    details: [
      'Save 91% on .best domain registrations for only Rs216.47 per year.',
      'Build a memorable online identity with a modern domain extension.',
      'Regular price is Rs2,371.73 per year.',
      'Ideal for businesses that want a standout web address.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 88% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BLOG DOMAINS',
    title: 'Get Up to 88% Off .blog Domains with Namecheap',
    description: 'Start your blogging journey with a discounted .blog domain.',
    details: [
      'Save 88% on .blog domains for just Rs282.94 per year.',
      'Perfect for business blogs, personal websites, and creators.',
      'Regularly available at Rs2,276.78 per year.',
      'A smart option for anyone planning to publish content online.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '86% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DISCOUNT CODE',
    title: 'Namecheap Discount Code – Save 86% on .info Domains',
    description: 'Create an informative website with a trusted .info domain for less.',
    details: [
      'Save 86% on .info domain registrations for Rs377.88 per year.',
      'Build an information-focused website for a global audience.',
      'Regular price is Rs2,751.51 per year.',
      'Great for educational, business, and knowledge-based websites.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '86% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Namecheap Promo Code – Save 86% on .asia Domains',
    description: 'Grow your online presence across Asia with an affordable domain.',
    details: [
      'Save 86% on .asia domain registrations for only Rs187.99 per year.',
      'Reach audiences across one of the world\'s largest markets.',
      'Regular price is Rs1,374.80 per year.',
      'A suitable choice for regional businesses and startups.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '62% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SHARED HOSTING',
    title: 'Namecheap Promo Code – Save 62% on Stellar Plus Hosting',
    description: 'Get powerful shared hosting with a free 30-day trial.',
    details: [
      'Save 62% with Stellar Plus hosting from Rs282.94 per month after the trial.',
      'Host unlimited websites with unmetered SSD hosting.',
      'Includes unlimited email mailboxes and a 30-day free trial.',
      'Ideal for blogs, websites, and small businesses.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 61% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'STELLAR HOSTING',
    title: 'Enjoy Up to 61% Off Namecheap Stellar Hosting.',
    description: 'Launch your first website with affordable shared hosting.',
    details: [
      'Save 61% on Stellar hosting from Rs216.47 per month after the free trial.',
      'Host up to three websites with 20 GB SSD storage.',
      'Includes 30 email mailboxes and a 30-day free trial.',
      'Best for beginners creating their first website.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '46% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'EASYWP HOSTING',
    title: 'Namecheap Voucher Code – Save 46% on EasyWP Turbo Hosting',
    description: 'Upgrade your WordPress site with faster hosting performance.',
    details: [
      'Save 46% on EasyWP Turbo for Rs489.60 per month.',
      'Get 50 GB NVMe storage with extra CPU and RAM resources.',
      'Includes all EasyWP Starter features for improved performance.',
      'A solid option for websites expecting steady growth.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 44% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WORDPRESS HOSTING',
    title: 'Get Up to 44% Off the Namecheap EasyWP Starter Plan.',
    description: 'Start your WordPress website with reliable managed hosting.',
    details: [
      'Save 44% on EasyWP Starter for Rs307.62 per month.',
      'Includes 10 GB NVMe storage and unlimited bandwidth.',
      'Supports unlimited visitors with a 99.9% uptime guarantee.',
      'Great for personal websites, blogs, and small businesses.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: '23% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'VPS HOSTING',
    title: 'Namecheap Offers – Save 23% on Pulsar VPS Hosting',
    description: 'Power growing projects with scalable VPS hosting at a lower price.',
    details: [
      'Save 23% on Pulsar VPS hosting for Rs653.22 per month.',
      'Includes 2 CPU cores, 2 GB RAM, and 40 GB SSD storage.',
      'Receive 1,000 GB monthly bandwidth with your plan.',
      'Suitable for developers and growing online projects.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'VPS HOSTING',
    title: 'Save Up to 20% on Namecheap Spark VPS Hosting',
    description: 'Launch small projects with an affordable VPS solution.',
    details: [
      'Save 20% on Spark VPS hosting for Rs368.39 per month.',
      'Includes 1 CPU core, 1 GB RAM, and 20 GB SSD storage.',
      'Comes with 1,000 GB monthly bandwidth.',
      'A good choice for lightweight websites and development projects.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'RENEWAL OFFER',
    title: 'Save Up to 15% on Namecheap .com Domain Renewals',
    description: 'Renew your .com domain early and lock in lower pricing.',
    details: [
      'Save up to 15% on eligible multi-year .com domain renewals.',
      'Offer is valid before November 1.',
      'Renew your domain from Rs3,157.87 for two years.',
      'Perfect for businesses that want to avoid upcoming registry price increases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026'
  }
];