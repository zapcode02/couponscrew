import type { Metadata } from 'next';
import EntertainmentCategory from './_components/EntertainmentCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Entertainment Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest entertainment coupon codes, discount codes, and promo codes for August 2026. Save on streaming services, movie tickets, gaming, music subscriptions, live events, digital entertainment, and more with verified deals from top brands.',

  keywords: [
    'entertainment coupon codes',
    'entertainment discount codes',
    'streaming subscription discounts',
    'movie ticket coupon codes',
    'movie ticket discount codes',
    'live event ticket offers',
    'concert ticket discount codes',
    'gaming discount codes',
    'streaming promo codes',
    'entertainment deals today',
    'entertainment sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/entertainment',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Entertainment Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest entertainment coupon codes, discount codes, and promo codes for August 2026. Save on streaming services, movie tickets, gaming, music subscriptions, live events, digital entertainment, and more with verified deals from top brands.',
    url: 'https://www.couponscrew.com/stores/categories/entertainment',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/entertainment-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Entertainment Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Entertainment Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest entertainment coupon codes, discount codes, and promo codes for August 2026. Save on streaming services, movie tickets, gaming, music subscriptions, live events, digital entertainment, and more with verified deals from top brands.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/entertainment-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/entertainment#webpage',
      url: 'https://www.couponscrew.com/stores/categories/entertainment',
      name: 'Entertainment Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest entertainment coupon codes, discount codes, and promo codes for August 2026. Save on streaming services, movie tickets, gaming, music subscriptions, live events, digital entertainment, and more with verified deals from top brands.',
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
            name: 'Entertainment',
            item: 'https://www.couponscrew.com/stores/categories/entertainment',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/entertainment#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the entertainment coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every entertainment discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use an entertainment coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the code from CouponsCrew, visit the streaming service, ticketing platform, or app you are using, select your plan or tickets, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most platforms allow only one coupon code per order or subscription. If a platform supports stacking codes with cashback offers, the terms will usually be shown at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are these codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team reviews entertainment deals regularly and updates codes as new ones become available or existing ones expire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Many entertainment platforms offer first-subscription or first-booking discount codes for new accounts. Check CouponsCrew before signing up to see what is currently available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do entertainment coupon codes work on all plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the platform. Some codes apply only to specific plans, ticket types, or new users, while others apply more broadly. Always check the terms shown with each code.',
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
      <EntertainmentCategory />
    </>
  );
}
