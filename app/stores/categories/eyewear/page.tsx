import type { Metadata } from 'next';
import EyewearCategory from './_components/EyewearCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Eyewear Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest eyewear coupon codes, discount codes, and promo codes for August 2026. Save on prescription glasses, sunglasses, contact lenses, blue light glasses, reading glasses, and eyewear accessories from leading brands and online stores.',

  keywords: [
    'eyewear coupon codes',
    'eyewear discount codes',
    'eyeglasses promo codes',
    'sunglasses coupon codes',
    'contact lenses discount codes',
    'kids eyewear offers',
    'eyewear accessories coupons',
    'eyewear deals today',
    'eyewear sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/eyewear',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Eyewear Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest eyewear coupon codes, discount codes, and promo codes for August 2026. Save on prescription glasses, sunglasses, contact lenses, blue light glasses, reading glasses, and eyewear accessories from leading brands and online stores.',
    url: 'https://www.couponscrew.com/stores/categories/eyewear',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/eyewear-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Eyewear Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Eyewear Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest eyewear coupon codes, discount codes, and promo codes for August 2026. Save on prescription glasses, sunglasses, contact lenses, blue light glasses, reading glasses, and eyewear accessories from leading brands and online stores.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/eyewear-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/eyewear#webpage',
      url: 'https://www.couponscrew.com/stores/categories/eyewear',
      name: 'Eyewear Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest eyewear coupon codes, discount codes, and promo codes for August 2026. Save on prescription glasses, sunglasses, contact lenses, blue light glasses, reading glasses, and eyewear accessories from leading brands and online stores.',
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
            name: 'Eyewear',
            item: 'https://www.couponscrew.com/stores/categories/eyewear',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/eyewear#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the eyewear coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every eyewear discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use an eyewear coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the eyewear coupon code from CouponsCrew, visit the store, add products to your cart, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the store. Most stores allow only one coupon code per order, though some may allow a discount code to be combined with a separate bank or wallet offer. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are eyewear coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates eyewear deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many eyewear stores offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do eyewear coupon codes work on both frames and lenses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the store and the specific code. Some codes apply to the frame only, while others apply to the full order including lens upgrades. The terms shown with each code will indicate what it covers.',
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
      <EyewearCategory />
    </>
  );
}
