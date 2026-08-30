import type { Metadata } from 'next';
import SoftwareCategory from './_components/SoftwareCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Software Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest software coupon codes, discount codes, and promo codes for August 2026. Save on AI tools, productivity software, design apps, antivirus, VPNs, developer tools, business software, cloud services, and premium software subscriptions.',

  keywords: [
    'software coupon codes',
    'software discount codes',
    'software promo codes',
    'antivirus coupon codes',
    'productivity software offers',
    'design software discounts',
    'business software coupons',
    'software license deals',
    'software sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/software',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Software Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest software coupon codes, discount codes, and promo codes for August 2026. Save on AI tools, productivity software, design apps, antivirus, VPNs, developer tools, business software, cloud services, and premium software subscriptions.',
    url: 'https://www.couponscrew.com/stores/categories/software',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/software-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Software Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Software Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest software coupon codes, discount codes, and promo codes for August 2026. Save on AI tools, productivity software, design apps, antivirus, VPNs, developer tools, business software, cloud services, and premium software subscriptions.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/software-coupons.jpg'],
  },

  // ── Robots ─────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/categories/software#webpage',
      url: 'https://www.couponscrew.com/stores/categories/software',
      name: 'Software Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest software coupon codes, discount codes, and promo codes for August 2026. Save on AI tools, productivity software, design apps, antivirus, VPNs, developer tools, business software, cloud services, and premium software subscriptions.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        url: 'https://www.couponscrew.com',
        name: 'CouponsCrew',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.couponscrew.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Software',
            item: 'https://www.couponscrew.com/stores/categories/software',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/software#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the software coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every software discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a software coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the software coupon code from CouponsCrew, select your plan or license on the provider’s website, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the provider. Most providers allow only one coupon code per order or subscription, though some may allow a discount code to be combined with a separate bank or wallet offer. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are software coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates software deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many software providers offer first-purchase discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do software coupon codes work on subscription renewals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by provider. Some software coupon codes apply only to the first billing cycle, while others reduce the price for as long as the subscription stays active. The terms shown with each code will indicate where it applies.',
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// Page Export
// ─────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareCategory />
    </>
  );
}
