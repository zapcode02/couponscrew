import type { Metadata } from 'next'
import { Suspense } from 'react'
import Stores from './_components/Stores'

export const dynamic = 'force-dynamic'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'All Stores — Top Coupon Websites in India | CouponsCrew',
  description:
    "Browse all stores on CouponsCrew — one of India's top coupon websites. Find verified coupon codes & discount deals for every brand you love, updated daily.",

  keywords: [
    'all stores coupon codes',
    'best coupon websites India',
    'best online coupon sites',
    'verified coupon codes India',
    'coupon codes for all brands',
    'Amazon coupon code',
    'Flipkart coupon code',
    'Myntra discount code',
    'Swiggy promo code',
    'Zomato coupon code',
    'Nykaa discount code',
    'Pepperfry coupon code',
    'store wise coupon codes',
    'CouponsCrew all stores',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/stores',
      // 'en-US': 'https://www.couponsbit.us/stores',
      // 'en-GB': 'https://www.couponscrew.com/stores',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'All Stores — Top Coupon Websites in India | CouponsCrew',
    description:
      "Browse all stores on CouponsCrew — one of India's top coupon websites. Find verified coupon codes & discount deals for every brand you love, updated daily.",
    url: 'https://www.couponscrew.com/stores',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    // 💡 Uncomment to add alternate locales as you expand
    alternateLocale: [
      // 'en_US',
      // 'en_GB',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/all-stores.jpg',
        width: 1200,
        height: 630,
        alt: 'All Stores — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'All Stores — Top Coupon Websites in India | CouponsCrew',
    description:
      "Browse all stores on CouponsCrew — one of India's top coupon websites. Find verified coupon codes & discount deals for every brand you love, updated daily.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/all-stores.jpg'],
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
  // 💡 Update geo.region + language when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',     // uncomment to add country/city name
    language: 'en-IN',
    // 'content-language': 'en-US',  // uncomment for US targeting
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (CollectionPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. CollectionPage Schema (kept from original — correct type for a directory)
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/stores#collectionpage',
      name: 'All Stores — Top Coupon Websites in India | CouponsCrew',
      url: 'https://www.couponscrew.com/stores',
      description:
        'Browse all stores and brands available on CouponsCrew with verified coupon codes and deals updated daily.',
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
        ],
      },
    },

    // 2. ItemList Schema (Top Stores — fixed numberOfItems to match actual list)
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores#itemlist',
      name: 'All Stores on CouponsCrew',
      description:
        'Complete list of top stores and brands with verified coupon codes on CouponsCrew.',
      url: 'https://www.couponscrew.com/stores',
      numberOfItems: 2,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amazon Coupon Code',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pepperfry Coupon Code',
          url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which stores have coupon codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists verified coupon codes for hundreds of stores including Amazon, Flipkart, Myntra, Swiggy, Zomato, Nykaa, Pepperfry, AJIO, Meesho, Decathlon and many more. All deals are updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find a coupon code for a specific store on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Browse the All Stores page on CouponsCrew and select the store you need. Each store page lists all active verified coupon codes, discount deals, and promo offers for that brand, updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All coupon codes across every store on CouponsCrew are manually verified and updated daily to ensure only active, working promo codes are listed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew one of the best coupon websites in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew is one of the top coupon websites in India, offering verified discount codes and deals for hundreds of brands across Fashion, Beauty, Electronics, Food, Fitness, Home & Kitchen and more — all free to use with no signup required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, CouponsCrew is completely free to use. Simply browse any store, copy the coupon code you need, and apply it at checkout on the brand's website to save instantly — no account or signup needed.",
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
        <Stores />
      </Suspense> 
    </>
  )
}