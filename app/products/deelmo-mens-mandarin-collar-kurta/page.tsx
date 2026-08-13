import type { Metadata } from 'next'
import { Suspense } from 'react'
import DeelmoKurtaPage from './_components/DeelmoKurtaPage'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew',
  description:
    'Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.',

  keywords: [
    'Deelmo mandarin collar kurta',
    'mens mandarin collar kurta',
    'cotton blend kurta for men',
    'short kurta for men',
    'Deelmo kurta online',
    'mandarin collar shirt India',
    'cotton kurta men India',
    'Deelmo clothing deals',
    'buy kurta online India',
    'men kurta discount',
    'Deelmo kurta best price',
    'casual kurta for men',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
      // 'en-US': 'https://www.couponsbit.us/products/deelmo-mens-mandarin-collar-kurta',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew',
    description:
      'Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.',
    url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/deelmo-mens-mandarin-collar-kurta.jpg',
        width: 1200,
        height: 630,
        alt: "DEELMO Men's Mandarin Collar Kurta — CouponsCrew",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew',
    description:
      'Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/deelmo-mens-mandarin-collar-kurta.jpg'],
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
      '@id': 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta#webpage',
      url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
      name: 'Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew',
      description:
        'Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.',
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
            name: "DEELMO Men's Mandarin Collar Kurta",
            item: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
          },
        ],
      },
    },

    // 2. Product Schema (rich result eligible — price, rating, shipping)
    {
      '@type': 'Product',
      '@id': 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta#product',
      name: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
      description:
        "A stylish cotton blend mandarin collar kurta for men with a short cut design. Lightweight, breathable fabric suitable for casual and festive wear. Available at the best price on CouponsCrew.",
      brand: {
        '@type': 'Brand',
        name: 'Deelmo',
      },
      sku: 'deelmo-mens-mandarin-collar-kurta',
      category: "Men's Clothing > Kurtas > Mandarin Collar Kurtas",
      url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
      offers: {
        '@type': 'Offer',
        price: '479',
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
        ratingValue: '3.6',
        reviewCount: '2300',
        bestRating: '5',
        worstRating: '1',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price of the Deelmo mandarin collar kurta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Deelmo Men's Cotton Blend Mandarin Collar Kurta is available for ₹479 on CouponsCrew — down from the original price of ₹2,199, saving you ₹1,720 with free delivery included.",
          },
        },
        {
          '@type': 'Question',
          name: 'What material is the Deelmo mandarin collar kurta made of?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Deelmo mandarin collar kurta is made of a cotton blend fabric, making it lightweight and breathable — suitable for casual daily wear as well as festive occasions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Deelmo kurta come with free delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, the Deelmo Men's Mandarin Collar Kurta listed on CouponsCrew includes free delivery across India.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the rating of the Deelmo mandarin collar kurta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Deelmo mandarin collar kurta has a rating of 3.6 out of 5 based on over 2,300 customer reviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get the best deal on the Deelmo kurta on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Click the \"Get Deal\" button on the Deelmo kurta product page on CouponsCrew. You will be redirected to the seller's page with the discounted price of ₹479 automatically applied — no coupon code needed.",
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
        <DeelmoKurtaPage />
      </Suspense>
    </>
  )
}