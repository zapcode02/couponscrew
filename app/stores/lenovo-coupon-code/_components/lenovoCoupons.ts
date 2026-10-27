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

export const LENOVO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '55% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'IDEAPAD LAPTOP',
    title: 'Lenovo Coupon Code – Save 55% on IdeaPad Slim 3 Laptop',
    description: "Upgrade to a powerful Intel Core i7 laptop while enjoying one of Lenovo's biggest discounts.",
    details: [
      'Save 55% on the Lenovo IdeaPad Slim 3 for just ₹82,991.',
      'Get an Intel Core i7 processor, 16GB RAM, and a 512GB SSD.',
      'Enjoy 5% cashback with up to 12 months of 0% EMI.',
      'A great choice for students, professionals, and everyday multitasking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '50% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING LAPTOP',
    title: 'Lenovo Coupon Code – Save 50% on LOQ Gaming Laptop',
    description: 'Take your gaming setup to the next level with a high-performance LOQ laptop.',
    details: [
      'Save 50% on the Lenovo LOQ with Intel Core i7, RTX 5050, and 1TB SSD for ₹1,66,990.',
      'Features 16GB RAM and an NVIDIA GeForce RTX 5050 8GB graphics card.',
      'Eligible students can save up to an extra 10% after verification.',
      'Perfect for gamers, creators, and demanding workloads.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '50% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING ACCESSORY',
    title: 'Lenovo Discount Code – Save 50% on Legion M410 Wireless Gaming Mouse',
    description: 'Grab a wireless RGB gaming mouse at half the regular price.',
    details: [
      'Save 50% on the Lenovo Legion M410 Wireless RGB Gaming Mouse for ₹3,000.',
      'Enjoy wireless connectivity with customizable RGB lighting.',
      'Includes student pricing for verified buyers.',
      'A great accessory for gaming and everyday productivity.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '47% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BUSINESS LAPTOP',
    title: 'Lenovo Discount Code – Save 47% on ThinkPad E14 Laptop',
    description: 'Own a reliable business laptop at a better price.',
    details: [
      'Save 47% on the Lenovo ThinkPad E14 for ₹88,991.',
      'Features AMD Ryzen 5, 16GB RAM, and a 512GB SSD.',
      'Includes 5% cashback and up to 12 months of 0% EMI.',
      'Great for work, business, and remote tasks.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '44% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING DESKTOP',
    title: 'Lenovo Promo Code – Save 44% on LOQ Tower Gaming Desktop',
    description: 'Experience desktop gaming performance at a significantly lower price.',
    details: [
      'Save 44% on the Lenovo LOQ Tower for ₹1,70,990.',
      'Includes an Intel Core Ultra 7 processor, 16GB RAM, and RTX 5050 graphics.',
      'Comes with a 512GB SSD and verified student savings.',
      'Built for gaming, streaming, and creative projects.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '43% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING LAPTOP',
    title: 'Lenovo Promo Code – Save 43% on LOQ Gaming Laptop',
    description: 'Enjoy smooth gaming and multitasking with powerful Lenovo hardware.',
    details: [
      'Save 43% on the Lenovo LOQ with Intel Core i5 and RTX 4050 for ₹1,40,991.',
      'Features 16GB RAM and a spacious 1TB SSD.',
      'Includes dedicated RTX 4050 6GB graphics.',
      'A smart option for gamers and content creators.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '42% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LEGION LAPTOP',
    title: 'Lenovo Voucher Code – Save 42% on Legion Pro 7 Laptop',
    description: 'Own a flagship gaming laptop with premium hardware at a reduced price.',
    details: [
      'Save 42% on the Lenovo Legion Pro 7 for ₹6,25,990.',
      'Powered by an Intel Core Ultra 9 processor with 64GB RAM.',
      'Features a 1TB SSD and RTX 5090 24GB graphics.',
      'Built for gaming, AI, and creative projects.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '39% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LEGION LAPTOP',
    title: 'Lenovo Voucher Code – Save 39% on Legion Pro 7 Gaming Laptop',
    description: 'Upgrade your gaming experience with premium Legion performance.',
    details: [
      'Save 39% on the Lenovo Legion Pro 7 for ₹4,05,991.',
      'Includes an Intel Core Ultra 9 processor, 32GB RAM, and a 1TB SSD.',
      'Equipped with NVIDIA RTX 5070 Ti 12GB graphics.',
      'Perfect for gamers and creators.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '30% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'TABLET',
    title: 'Lenovo Offers – Save 30% on Idea Tab 11 5G with Pen',
    description: 'Get a feature-packed Android tablet at an attractive price.',
    details: [
      'Save 30% on the Lenovo Idea Tab 11 5G with Pen for ₹29,999.',
      'Offers 8GB RAM with 256GB storage.',
      'Receive a flat ₹750 cashback with up to 6 months of 0% EMI.',
      'Great for learning, streaming, and everyday tasks.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: '21% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'YOGA LAPTOP',
    title: 'Lenovo Offers – Save 21% on Yoga 7 2-in-1 Copilot+ PC',
    description: 'Enjoy the flexibility of a premium 2-in-1 laptop with AI features.',
    details: [
      'Save 21% on the Lenovo Yoga 7 2-in-1 for ₹1,13,221.',
      'Features Intel Core Ultra performance with Copilot+ integration.',
      'Available in stylish Luna Grey and Seashell colours.',
      'Ideal for professionals, students, and creators.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LEGION LAPTOP',
    title: 'Save 15% on Lenovo Legion Pro 5 Laptop',
    description: "Upgrade your gaming setup with Lenovo's powerful Legion Pro series.",
    details: [
      'Save 15% on the Lenovo Legion Pro 5 for ₹2,43,622.',
      'Powered by Intel Core Ultra.',
      'Includes premium gaming performance for demanding titles.',
      'Suitable for gaming and creative work.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: '7% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING LAPTOP',
    title: 'Save 7% on Lenovo LOQ Gen 10 AMD Laptop',
    description: "Choose the latest LOQ gaming laptop with AMD performance.",
    details: [
      'Save 7% on the Lenovo LOQ Gen 10 AMD for ₹1,74,240.',
      'Built with modern hardware for gaming and multitasking.',
      'Includes Lenovo\'s latest LOQ Gen 10 platform.',
      'Suitable for gamers and power users.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: '6% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GAMING LAPTOP',
    title: 'Save 6% on Lenovo LOQ Gen 10 AMD Laptop',
    description: "Get reliable gaming performance with Lenovo's latest LOQ model.",
    details: [
      'Save 6% on the Lenovo LOQ Gen 10 AMD for ₹1,67,879.',
      'Delivers dependable performance for gaming and daily use.',
      'Features the latest LOQ Gen 10 design.',
      'A practical option for users upgrading to a gaming laptop.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];