import type { Metadata } from 'next'
import { Suspense } from 'react'
import AcnosBangleWatchPage from './_components/AcnosBangleWatchPage'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Acnos Bangle Watch — Heart Shape, Pack of 2 | CouponsCrew',
  description:
    'Shop the Acnos bangle watch online – a heart shape watch for girls bangle watch fans. Comes as a bangle watch pack of 2. Best price & deals on CouponsCrew.',

  keywords: [
    'Acnos bangle watch',
    'heart shape watch for girls',
    'bangle watch pack of 2',
    'Acnos watch online',
    'girls bangle watch India',
    'analog bangle watch',
    'Acnos premium watch',
    'heart shape bangle watch',
    'bangle watch deal',
    'cheap bangle watch India',
    'Acnos watch discount',
    'buy bangle watch online',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
      // 'en-US': 'https://www.couponsbit.us/products/acnos-bangle-watch-pack-of-2',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Acnos Bangle Watch — Heart Shape, Pack of 2 | CouponsCrew',
    description:
      'Shop the Acnos bangle watch online – a heart shape watch for girls bangle watch fans. Comes as a bangle watch pack of 2. Best price & deals on CouponsCrew.',
    url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
    siteName: 'CouponsCrew',
    // 💡 Use 'product' type for individual product pages — better social sharing
    type: 'website',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/acnos-bangle-watch-pack-of-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Acnos Heart Shape Bangle Watch Pack of 2 — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Acnos Bangle Watch — Heart Shape, Pack of 2 | CouponsCrew',
    description:
      'Shop the Acnos bangle watch online – a heart shape watch for girls bangle watch fans. Comes as a bangle watch pack of 2. Best price & deals on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/acnos-bangle-watch-pack-of-2.jpg'],
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
      '@id': 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2#webpage',
      url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
      name: 'Acnos Bangle Watch — Heart Shape, Pack of 2 | CouponsCrew',
      description:
        'Shop the Acnos bangle watch online – a heart shape watch for girls bangle watch fans. Comes as a bangle watch pack of 2. Best price & deals on CouponsCrew.',
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
            name: "Acnos Premium Girl's Heart Shape Bangle Watch, Pack of 2",
            item: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
          },
        ],
      },
    },

    // 2. Product Schema (rich result eligible — price, rating, shipping)
    {
      '@type': 'Product',
      '@id': 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2#product',
      name: "Acnos Premium Girl's Heart Shape Bangle Analog Watch, Pack of 2",
      description:
        'A premium heart shape bangle analog watch for girls, available as a pack of 2. Stylish, lightweight design with a comfortable bangle-style strap. Available at the best price on CouponsCrew.',
      brand: {
        '@type': 'Brand',
        name: 'Acnos',
      },
      sku: 'acnos-bangle-watch-pack-of-2',
      category: 'Watches > Women\'s Watches > Bangle Watches',
      url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
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
        ratingValue: '4',
        reviewCount: '2300',
        bestRating: '5',
        worstRating: '1',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price of the Acnos bangle watch pack of 2?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Acnos Premium Girl\'s Heart Shape Bangle Watch Pack of 2 is available for ₹299 on CouponsCrew — down from the original price of ₹1,999, saving you ₹1,700 with free delivery included.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Acnos bangle watch suitable for girls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the Acnos bangle watch is designed specifically for girls with a heart shape dial and a stylish bangle-style strap. It is lightweight, comfortable, and comes as a pack of 2 making it great as a gift set.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Acnos bangle watch come with free delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the Acnos bangle watch pack of 2 listed on CouponsCrew includes free delivery across India.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the rating of the Acnos bangle watch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Acnos Premium Girl\'s Heart Shape Bangle Watch has a rating of 4 out of 5 based on over 2,300 customer reviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get the best deal on the Acnos bangle watch on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Click the "Get Deal" button on the Acnos bangle watch product page on CouponsCrew. You will be redirected to the seller\'s page with the discounted price of ₹299 automatically applied — no coupon code needed.',
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
        <AcnosBangleWatchPage />
      </Suspense>
    </>
  )
}