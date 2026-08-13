import type { Metadata } from 'next'
import { Suspense } from 'react'
import MinimalistKitPage from './_components/MinimalistKitPage'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
  description:
    'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',

  keywords: [
    'Minimalist anti-pigmentation kit',
    'alpha arbutin serum kit',
    'anti pigmentation kit for face',
    'pigmentation kit with sunscreen',
    'Minimalist skincare kit India',
    'Minimalist face wash serum kit',
    'SPF 50 sunscreen kit India',
    'Minimalist alpha arbutin India',
    'buy anti pigmentation kit online',
    'Minimalist skincare deals',
    'best pigmentation kit India',
    'Minimalist kit best price',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
      // 'en-US': 'https://www.couponsbit.us/products/minimalist-anti-pigmentation-kit',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
    description:
      'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
    url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/minimalist-anti-pigmentation-kit.jpg',
        width: 1200,
        height: 630,
        alt: 'Minimalist Anti-Pigmentation Kit — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
    description:
      'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/minimalist-anti-pigmentation-kit.jpg'],
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
      '@id': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit#webpage',
      url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
      name: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
      description:
        'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
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
            name: 'Minimalist Anti-Pigmentation Kit',
            item: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
          },
        ],
      },
    },

    // 2. Product Schema (rich result eligible — price, rating, shipping)
    {
      '@type': 'Product',
      '@id': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit#product',
      name: 'Minimalist Anti-Pigmentation Kit — Face Wash, Alpha Arbutin Serum & SPF 50 Sunscreen',
      description:
        'A complete skincare kit for anti-pigmentation featuring a face wash, alpha arbutin + glycolic acid serum, and SPF 50 sunscreen. Dermatologist-tested, suitable for all skin types.',
      brand: {
        '@type': 'Brand',
        name: 'Minimalist',
      },
      sku: 'minimalist-anti-pigmentation-kit',
      category: 'Beauty & Skincare > Face Care > Skincare Kits',
      url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
      offers: {
        '@type': 'Offer',
        price: '1147',
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
        ratingValue: '4.1',
        reviewCount: '306',
        bestRating: '5',
        worstRating: '1',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price of the Minimalist anti-pigmentation kit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Minimalist Anti-Pigmentation Kit is available for ₹1,147 on CouponsCrew — down from the original price of ₹1,299, saving you ₹152 with free delivery included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the Minimalist anti-pigmentation kit include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Minimalist anti-pigmentation kit includes a face wash, an alpha arbutin and glycolic acid serum, and an SPF 50 sunscreen. Together these products target dark spots, uneven skin tone, and pigmentation while protecting from sun damage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Minimalist anti-pigmentation kit suitable for all skin types?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the Minimalist anti-pigmentation kit is formulated to be suitable for all skin types. The products are dermatologist-tested and free from unnecessary additives, making them safe for sensitive skin as well.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the rating of the Minimalist anti-pigmentation kit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Minimalist Anti-Pigmentation Kit has a rating of 4.1 out of 5 based on 306 customer reviews on CouponsCrew.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get the best deal on the Minimalist kit on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Click the \"Get Deal\" button on the Minimalist anti-pigmentation kit product page on CouponsCrew. You will be redirected to the seller's page with the discounted price of ₹1,147 automatically applied — no coupon code needed.",
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
        <MinimalistKitPage />
      </Suspense>
    </>
  )
}