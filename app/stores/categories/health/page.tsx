import type { Metadata } from 'next';
import HealthCategory from './_components/HealthCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Health Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest health coupon codes, discount codes, and promo codes for August 2026. Save on medicines, healthcare products, vitamins, supplements, fitness equipment, diagnostic tests, wellness essentials, and personal care from leading health brands.',

  keywords: [
    'health coupon codes',
    'health discount codes',
    'pharmacy coupon codes',
    'medicine discount codes',
    'health supplements offers',
    'fitness and wellness coupons',
    'diagnostic services offers',
    'health deals today',
    'health sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/health',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Health Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest health coupon codes, discount codes, and promo codes for August 2026. Save on medicines, healthcare products, vitamins, supplements, fitness equipment, diagnostic tests, wellness essentials, and personal care from leading health brands.',
    url: 'https://www.couponscrew.com/stores/categories/health',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/health-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Health Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Health Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest health coupon codes, discount codes, and promo codes for August 2026. Save on medicines, healthcare products, vitamins, supplements, fitness equipment, diagnostic tests, wellness essentials, and personal care from leading health brands.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/health-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/health#webpage',
      url: 'https://www.couponscrew.com/stores/categories/health',
      name: 'Health Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest health coupon codes, discount codes, and promo codes for August 2026. Save on medicines, healthcare products, vitamins, supplements, fitness equipment, diagnostic tests, wellness essentials, and personal care from leading health brands.',
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
            name: 'Health',
            item: 'https://www.couponscrew.com/stores/categories/health',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/health#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the health coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every health discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a health coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the health coupon code from CouponsCrew, visit the platform, add items or bookings to your cart, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the platform. Most platforms allow only one coupon code per order, though some may allow a discount code to be combined with a separate bank or wallet offer. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are health coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates health deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many health and wellness platforms offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes work on both app and website orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by platform. Some health coupon codes are app-exclusive, while others work on both the website and the app. The terms shown with each code will indicate where it applies.',
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
      <HealthCategory />
    </>
  );
}
