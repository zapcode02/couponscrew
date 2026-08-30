import type { Metadata } from 'next';
import JewelleryCategory from './_components/JewelleryCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Jewellery Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest jewellery coupon codes, discount codes, and promo codes for August 2026. Save on gold, diamond, silver, platinum, gemstone jewellery, engagement rings, earrings, necklaces, bracelets, and more from leading jewellery brands.',

  keywords: [
    'jewellery coupon codes',
    'jewellery discount codes',
    'gold jewellery offers',
    'diamond jewellery coupons',
    'fashion jewellery discount codes',
    'watches coupon codes',
    'jewellery gifting offers',
    'jewellery deals today',
    'jewellery sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/jewellery',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Jewellery Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest jewellery coupon codes, discount codes, and promo codes for August 2026. Save on gold, diamond, silver, platinum, gemstone jewellery, engagement rings, earrings, necklaces, bracelets, and more from leading jewellery brands.',
    url: 'https://www.couponscrew.com/stores/categories/jewellery',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/jewellery-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Jewellery Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Jewellery Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest jewellery coupon codes, discount codes, and promo codes for August 2026. Save on gold, diamond, silver, platinum, gemstone jewellery, engagement rings, earrings, necklaces, bracelets, and more from leading jewellery brands.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/jewellery-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/jewellery#webpage',
      url: 'https://www.couponscrew.com/stores/categories/jewellery',
      name: 'Jewellery Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest jewellery coupon codes, discount codes, and promo codes for August 2026. Save on gold, diamond, silver, platinum, gemstone jewellery, engagement rings, earrings, necklaces, bracelets, and more from leading jewellery brands.',
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
            name: 'Jewellery',
            item: 'https://www.couponscrew.com/stores/categories/jewellery',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/jewellery#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the jewellery coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every jewellery discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a jewellery coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the jewellery coupon code from CouponsCrew, visit the store, add products to your cart, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the store. Most stores allow only one coupon code per order, though some may allow a discount code to be combined with a separate bank offer or making charge waiver. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are jewellery coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates jewellery deals regularly. During festive and wedding season sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many jewellery stores offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes work on both gold and fashion jewellery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by store. Some jewellery coupon codes apply broadly across gold, diamond, and fashion jewellery, while others are restricted to a specific subcategory. The terms shown with each code will indicate where it applies.',
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
      <JewelleryCategory />
    </>
  );
}
