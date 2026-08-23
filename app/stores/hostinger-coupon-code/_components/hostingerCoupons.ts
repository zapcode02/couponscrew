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

export const HOSTINGER_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#673DE6]',
      color: '#673DE6',
      type: 'WEB HOSTING',
      title: 'Get up to 75% off on Premium Web Hosting plans',
      description: 'Shop Hostinger Premium Web Hosting plans at up to 75% OFF, including free domain and SSL on select plans.',
      code: 'HOST75',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'FLAT 20% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#0F2137]',
      color: '#0F2137',
      type: 'DOMAINS',
      title: 'Get flat 20% off on new domain registrations',
      description: 'Register a new domain name with Hostinger and save an extra 20% on the listed price.',
      code: 'DOMAIN20',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 60% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#673DE6]',
      color: '#673DE6',
      type: 'VPS',
      title: 'Get up to 60% off on VPS Hosting plans',
      description: 'Shop Hostinger VPS Hosting plans with NVMe storage and full root access at up to 60% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 70% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0F2137]',
      color: '#0F2137',
      type: 'WORDPRESS HOSTING',
      title: 'Get up to 70% off on Managed WordPress Hosting plans',
      description: 'Shop Hostinger Managed WordPress Hosting plans at up to 70% OFF, with free migration on select plans.',
      code: 'WPHOST70',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'FREE',
      badgeType: 'FREE',
      badgeColor: 'bg-[#673DE6]',
      color: '#673DE6',
      type: 'EMAIL HOSTING',
      title: 'Get a free domain with select Email Hosting plans',
      description: 'Sign up for an eligible Hostinger Email Hosting plan and get a free domain for the first year.',
      code: '',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 45% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0F2137]',
      color: '#0F2137',
      type: 'CLOUD HOSTING',
      title: 'Get up to 45% off on Cloud Hosting plans',
      description: 'Shop Hostinger Cloud Hosting plans built for high-traffic websites at up to 45% OFF.',
      code: 'CLOUD45',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'FLAT 10% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#673DE6]',
      color: '#673DE6',
      type: 'DOMAINS',
      title: 'Get flat 10% off on .com domain renewals',
      description: 'Renew your .com domain with Hostinger and save a flat 10% on the renewal price.',
      code: 'RENEW10',
      verified: 'Verified',
      userType: 'Existing Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0F2137]',
      color: '#0F2137',
      type: 'WEB HOSTING',
      title: 'Get up to 50% off on Business Web Hosting plans',
      description: 'Shop Hostinger Business Web Hosting plans with daily backups and priority support at up to 50% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 65% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#673DE6]',
      color: '#673DE6',
      type: 'VPS',
      title: 'Get up to 65% off on KVM VPS Hosting plans',
      description: 'Shop Hostinger KVM VPS Hosting plans with dedicated resources at up to 65% OFF.',
      code: 'VPS65',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 30% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#0F2137]',
      color: '#0F2137',
      type: 'WORDPRESS HOSTING',
      title: 'Get up to 30% off on WordPress Starter plans',
      description: 'Shop Hostinger WordPress Starter Hosting plans, ideal for blogs and small sites, at up to 30% OFF.',
      code: 'WPSTART30',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    }
  ];
