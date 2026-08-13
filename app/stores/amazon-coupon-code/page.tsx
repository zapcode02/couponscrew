import type { Metadata } from 'next'
import { Suspense } from 'react'
import AmazonStore from './_components/AmazonStore'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
  description:
    'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',

  keywords: [
    'Amazon coupon code',
    'Amazon discount code',
    'Amazon promo code',
    'Amazon sale today',
    'Amazon Big Billion Day deals',
    'Amazon Great Indian Festival coupons',
    'Amazon Prime deals',
    'Amazon electronics coupon',
    'Amazon fashion discount',
    'Amazon medicine discount',
    'Amazon offers today',
    'Amazon verified deals',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/amazon-coupon-code',
    // 💡 Add more locales below as you expand to new countries
    // e.g. 'en-US': 'https://www.couponsbit.us/stores/amazon-coupon-code',
    languages: {
      'en-IN': 'https://www.couponscrew.com/stores/amazon-coupon-code',
      // 'en-US': 'https://www.couponsbit.us/stores/amazon-coupon-code',
      // 'en-GB': 'https://www.couponscrew.com/stores/amazon-coupon-code',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
    description:
      'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
    url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    // 💡 Add alternate locales below as you expand
    alternateLocale: [
      // 'en_US',
      // 'en_GB',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/amazon-coupon-code.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Coupon Code – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
    description:
      'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/amazon-coupon-code.jpg'],
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

  // ── Geo Tags ───────────────────────────────
  // 💡 Update geo.region + geo.placename when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',   // optional — uncomment to add city/country name
    language: 'en-IN',
    // 'content-language': 'en-US', // uncomment for US targeting
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#webpage',
      url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
      name: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
      description:
        'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
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
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Amazon Coupon Code',
            item: 'https://www.couponscrew.com/stores/amazon-coupon-code',
          },
        ],
      },
    },

    // 2. ItemList Schema (Amazon Deal Categories)
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#itemlist',
      name: 'Amazon Coupon Codes & Deals by Category',
      description:
        'Verified Amazon coupon codes and discount deals across Electronics, Fashion, Grocery, Medicines, Home & Kitchen and seasonal sales like Big Billion Day and Great Indian Festival.',
      url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amazon Electronics Coupon Codes',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Amazon Fashion Discount Codes',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Amazon Prime Member Deals',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Amazon Medicine Discount – Up to 80% Off',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Amazon Great Indian Festival Coupons',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Amazon Big Billion Day Deals',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Amazon Home & Kitchen Offers',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use an Amazon coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the Amazon coupon code from CouponsCrew, go to amazon.in and add items to your cart. At checkout, paste the code in the promo or gift card field to get instant savings on your order.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best Amazon coupon code today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists 120+ verified Amazon coupon codes updated daily. The best deals today include up to 90% off on Electronics and Fashion, and up to 80% off on medicines for Prime Members.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Amazon have a Big Billion Day sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Amazon runs major seasonal sales in India including the Great Indian Festival and Prime Day. These sales offer some of the highest discounts of the year across Electronics, Fashion, Grocery, and more. CouponsCrew tracks and lists all active Amazon sale coupon codes during these events.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Amazon Prime members get extra discounts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Amazon Prime members get exclusive deals including up to 80% off on medicines via Amazon Pharmacy, early access to Lightning Deals, and additional discounts during Prime Day and seasonal sales.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are Amazon coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All Amazon coupon codes and discount deals listed on CouponsCrew are manually verified and updated daily to ensure they are active and working at checkout.',
          },
        },
      ],
    },
  ],
}

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
      <Suspense fallback={null}>
        <AmazonStore />
      </Suspense>
    </>
  )
}