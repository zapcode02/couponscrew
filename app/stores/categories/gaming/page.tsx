import type { Metadata } from 'next';
import GamingCategory from './_components/GamingCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Gaming Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest gaming coupon codes, discount codes, and promo codes for August 2026. Save on PC games, console games, gaming subscriptions, in-game currency, gift cards, gaming accessories, and digital downloads from leading gaming brands.',

  keywords: [
    'gaming coupon codes',
    'gaming discount codes',
    'game promo codes',
    'console games coupons',
    'PC games discount codes',
    'gaming accessories offers',
    'in-game currency codes',
    'gaming subscription discounts',
    'gaming deals today',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/gaming',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Gaming Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest gaming coupon codes, discount codes, and promo codes for August 2026. Save on PC games, console games, gaming subscriptions, in-game currency, gift cards, gaming accessories, and digital downloads from leading gaming brands.',
    url: 'https://www.couponscrew.com/stores/categories/gaming',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/gaming-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Gaming Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Gaming Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest gaming coupon codes, discount codes, and promo codes for August 2026. Save on PC games, console games, gaming subscriptions, in-game currency, gift cards, gaming accessories, and digital downloads from leading gaming brands.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/gaming-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/gaming#webpage',
      url: 'https://www.couponscrew.com/stores/categories/gaming',
      name: 'Gaming Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest gaming coupon codes, discount codes, and promo codes for August 2026. Save on PC games, console games, gaming subscriptions, in-game currency, gift cards, gaming accessories, and digital downloads from leading gaming brands.',
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
            name: 'Gaming',
            item: 'https://www.couponscrew.com/stores/categories/gaming',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/gaming#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the gaming coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every gaming discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a gaming coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the gaming coupon code from CouponsCrew, visit the store or digital storefront, add products to your cart, and paste the code at checkout in the promo or discount code field.',
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
          name: 'How often are gaming coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates gaming deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many gaming platforms and storefronts offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do gaming coupon codes work on digital purchases like in-game currency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by store. Some gaming coupon codes apply only to physical products or hardware, while others are valid on digital purchases like in-game currency or subscriptions. The terms shown with each code will indicate where it applies.',
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
      <GamingCategory />
    </>
  );
}
