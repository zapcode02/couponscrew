import type { Metadata } from 'next';
import BeautyCategory from './_components/BeautyCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Beauty Coupon Codes – Save on Skincare & Makeup',
  description:
    'Get the latest beauty coupon codes & beauty discount codes for Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist, Plum & Flipkart. Verified skincare promo codes daily.',

  keywords: [
    'beauty coupon codes',
    'beauty discount codes',
    'skincare promo codes',
    'Nykaa coupon codes',
    'Mamaearth discount codes',
    'Dot & Key promo codes',
    'The Body Shop coupons',
    'Minimalist skincare offers',
    'Plum coupon codes',
    'makeup discount codes',
    'skincare deals today',
    'beauty sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/beauty',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Beauty Coupon Codes – Save on Skincare & Makeup',
    description:
      'Get the latest beauty coupon codes & beauty discount codes for Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist, Plum & Flipkart. Verified skincare promo codes daily.',
    url: 'https://www.couponscrew.com/stores/categories/beauty',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/beauty-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Coupon Codes – Save on Skincare & Makeup',
    description:
      'Get the latest beauty coupon codes & beauty discount codes for Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist, Plum & Flipkart. Verified skincare promo codes daily.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/beauty-coupons.jpg'],
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
// JSON-LD Schemas (WebPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/categories/beauty#webpage',
      url: 'https://www.couponscrew.com/stores/categories/beauty',
      name: 'Beauty Coupon Codes – Save on Skincare & Makeup',
      description:
        'Get the latest beauty coupon codes & beauty discount codes for Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist, Plum & Flipkart. Verified skincare promo codes daily.',
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
            name: 'Beauty',
            item: 'https://www.couponscrew.com/stores/categories/beauty',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/beauty#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a beauty coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the beauty coupon code from CouponsCrew, visit the brand website (Nykaa, Mamaearth, Plum, etc.), add products to your cart, and paste the code at checkout in the promo or discount code field to get instant savings on skincare and makeup.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which beauty brands have the best coupon codes today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist, and Plum regularly offer the best beauty coupon codes and skincare discount deals. CouponsCrew verifies and updates these codes daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the beauty coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All beauty and skincare coupon codes on CouponsCrew are manually verified and updated daily to make sure they work at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use beauty coupon codes on skincare and makeup both?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most beauty coupon codes on CouponsCrew are valid across both skincare and makeup products. Some codes may be category-specific — always check the coupon terms before applying.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I save with beauty coupon codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Savings vary by brand and deal. Nykaa and Mamaearth frequently offer 20–50% off, while seasonal sales and special promo events can push discounts even higher. CouponsCrew lists all active offers in one place.',
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
      <BeautyCategory />
    </>
  );
}