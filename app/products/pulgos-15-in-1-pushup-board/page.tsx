import type { Metadata } from 'next'
import { Suspense } from 'react'
import PulgosPushupBoardPage from './_components/PulgosPushupBoardPage'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'PulGos Pushup Board — 15-in-1 Foldable Home Workout | CouponsCrew',
  description:
    'Shop the PulGos pushup board online – a 15 in 1 pushup board built for pushup board for home workout. Comes as a foldable pushup board. Best deals on CouponsCrew.',

  keywords: [
    'PulGos pushup board',
    '15 in 1 pushup board',
    'foldable pushup board',
    'pushup board for home workout',
    'PulGos fitness equipment',
    'home workout pushup board India',
    'push up board India',
    'foldable gym equipment India',
    'PulGos exercise board',
    'buy pushup board online India',
    'PulGos pushup board best price',
    'chest workout board India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
      // 'en-US': 'https://www.couponsbit.us/products/pulgos-15-in-1-pushup-board',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'PulGos Pushup Board — 15-in-1 Foldable Home Workout | CouponsCrew',
    description:
      'Shop the PulGos pushup board online – a 15 in 1 pushup board built for pushup board for home workout. Comes as a foldable pushup board. Best deals on CouponsCrew.',
    url: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/pulgos-15-in-1-pushup-board.jpg',
        width: 1200,
        height: 630,
        alt: 'PulGos 15-in-1 Foldable Pushup Board — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'PulGos Pushup Board — 15-in-1 Foldable Home Workout | CouponsCrew',
    description:
      'Shop the PulGos pushup board online – a 15 in 1 pushup board built for pushup board for home workout. Comes as a foldable pushup board. Best deals on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/pulgos-15-in-1-pushup-board.jpg'],
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
    // 'geo.placename': 'India',
    language: 'en-IN',
    // 'content-language': 'en-US',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + Product + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board#webpage',
      url: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
      name: 'PulGos Pushup Board — 15-in-1 Foldable Home Workout | CouponsCrew',
      description:
        'Shop the PulGos pushup board online – a 15 in 1 pushup board built for pushup board for home workout. Comes as a foldable pushup board. Best deals on CouponsCrew.',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PulGos 15-in-1 Pushup Board',
            item: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
          },
        ],
      },
    },

    // 2. Product Schema (rich result eligible — price, rating, shipping)
    {
      '@type': 'Product',
      '@id': 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board#product',
      name: 'PulGos 15-in-1 Foldable Pushup Board for Home Workout',
      description:
        'A versatile 15-in-1 foldable pushup board for home workouts. Targets chest, shoulders, back, triceps and biceps with colour-coded hand positions. Compact, portable, and easy to store.',
      brand: {
        '@type': 'Brand',
        name: 'PulGos',
      },
      sku: 'pulgos-15-in-1-pushup-board',
      category: 'Sports & Fitness > Exercise Equipment > Push Up Boards',
      url: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'INR',
        // 💡 Update priceValidUntil dynamically if possible
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: 'CouponsCrew',
          url: 'https://www.couponscrew.com',
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'IN',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'INR',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'IN',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 2,
              unitCode: 'DAY',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 7,
              unitCode: 'DAY',
            },
          },
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '3.8',
        reviewCount: '1000',
        bestRating: '5',
        worstRating: '1',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price of the PulGos 15-in-1 pushup board?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PulGos 15-in-1 Foldable Pushup Board is available for ₹299 on CouponsCrew — down from the original price of ₹499, saving you ₹200 with free delivery included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What muscles does the PulGos pushup board target?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PulGos 15-in-1 pushup board targets multiple muscle groups including chest, shoulders, back, triceps, and biceps. The colour-coded hand positions guide you to work different muscles with each variation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the PulGos pushup board suitable for home workouts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the PulGos pushup board is specifically designed for home workouts. It is foldable and compact, making it easy to store when not in use, and requires no additional gym equipment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the rating of the PulGos pushup board?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PulGos 15-in-1 Foldable Pushup Board has a rating of 3.8 out of 5 based on over 1,000 customer reviews on CouponsCrew.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get the best deal on the PulGos pushup board on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Click the \"Get Deal\" button on the PulGos pushup board product page on CouponsCrew. You will be redirected to the seller's page with the discounted price of ₹299 automatically applied — no coupon code needed.",
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
        <PulgosPushupBoardPage />
      </Suspense>
    </>
  )
}