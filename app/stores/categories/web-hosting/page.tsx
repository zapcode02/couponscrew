import type { Metadata } from 'next';
import WebHostingCategory from './_components/WebHostingCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Web Hosting Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest web hosting coupon codes, discount codes, and promo codes for August 2026. Save on shared hosting, VPS hosting, cloud hosting, WordPress hosting, dedicated servers, domains, SSL certificates, email hosting, and website builder plans.',

  keywords: [
    'web hosting coupon codes',
    'web hosting discount codes',
    'hosting promo codes',
    'shared hosting coupon codes',
    'VPS hosting discount codes',
    'cloud hosting offers',
    'domain registration coupons',
    'web hosting deals today',
    'web hosting sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/web-hosting',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Web Hosting Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest web hosting coupon codes, discount codes, and promo codes for August 2026. Save on shared hosting, VPS hosting, cloud hosting, WordPress hosting, dedicated servers, domains, SSL certificates, email hosting, and website builder plans.',
    url: 'https://www.couponscrew.com/stores/categories/web-hosting',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/web-hosting-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Hosting Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Web Hosting Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest web hosting coupon codes, discount codes, and promo codes for August 2026. Save on shared hosting, VPS hosting, cloud hosting, WordPress hosting, dedicated servers, domains, SSL certificates, email hosting, and website builder plans.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/web-hosting-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/web-hosting#webpage',
      url: 'https://www.couponscrew.com/stores/categories/web-hosting',
      name: 'Web Hosting Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest web hosting coupon codes, discount codes, and promo codes for August 2026. Save on shared hosting, VPS hosting, cloud hosting, WordPress hosting, dedicated servers, domains, SSL certificates, email hosting, and website builder plans.',
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
            name: 'Web Hosting',
            item: 'https://www.couponscrew.com/stores/categories/web-hosting',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/web-hosting#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the web hosting coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every web hosting discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a web hosting coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the web hosting coupon code from CouponsCrew, visit the provider, select your plan and billing cycle, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the provider. Most hosting providers allow only one coupon code per order. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are web hosting coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates web hosting deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many hosting providers offer first-term discount codes for new sign-ups. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes apply to renewals as well as new plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by provider. Some web hosting coupon codes are valid only on the first billing term, while others apply to renewals too. The terms shown with each code will indicate where it applies.',
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
      <WebHostingCategory />
    </>
  );
}
