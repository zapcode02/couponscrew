
import type { Metadata } from 'next'
import { Suspense } from 'react'
import MoonCrystalLightPage from './_components/MoonCrystalLightPage'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
  description:
    'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',

  keywords: [
    'Desidiya moon crystal night light',
    'crystal ball lamp India',
    'led night light for bedroom',
    'moon night light gift',
    'Desidiya night light online',
    'wooden base night light India',
    'moon lamp India',
    'bedroom night light gift India',
    'decorative night light India',
    'Desidiya home decor',
    'buy moon lamp online India',
    'crystal ball night light deal',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
      // 'en-US': 'https://www.couponsbit.us/products/desidiya-moon-crystal-night-light',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
    description:
      'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
    url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/desidiya-moon-crystal-night-light.jpg',
        width: 1200,
        height: 630,
        alt: 'Desidiya Moon Crystal Night Light — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
    description:
      'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/desidiya-moon-crystal-night-light.jpg'],
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

// priceValidUntil — computed at build time (this is a statically generated
// page) as today + 60 days, rather than a fixed hardcoded date that silently
// expires. There is no per-product "sale end date" tracked in the data model
// yet, so this is a rolling default refreshed on every deploy, not a claim
// about a specific real promotion end date.
const priceValidUntilDate = new Date()
priceValidUntilDate.setDate(priceValidUntilDate.getDate() + 60)
const priceValidUntil = priceValidUntilDate.toISOString().slice(0, 10)

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light#webpage',
      url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
      name: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
      description:
        'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
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
            name: 'Desidiya Moon Crystal Ball Night Light',
            item: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
          },
        ],
      },
    },

    // 2. Product Schema (rich result eligible — price, rating, shipping)
    {
      '@type': 'Product',
      '@id': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light#product',
      name: 'Desidiya Moon Crystal Ball Night Light with Wooden Base',
      image: [
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162551/61XWYda0HoL._SL1500__klyexw.jpg',
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162555/71og2p8A8zL._AC_UC154_154_CACC_154_154_QL85__allqrg.jpg',
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162560/71PKTOkjaqL._AC_UC154_154_CACC_154_154_QL85__ezyxe4.jpg',
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162565/61_L9a7xG8L._AC_UC154_154_CACC_154_154_QL85__x5efiq.jpg',
      ],
      description:
        'A decorative moon crystal ball LED night light with a premium wooden base, ideal for bedroom decor and as a gift. Warm ambient glow, compact design, suitable for all ages.',
      brand: {
        '@type': 'Brand',
        name: 'Desidiya',
      },
      sku: 'desidiya-moon-crystal-night-light',
      category: 'Home Decor > Lighting > Night Lights',
      url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
      offers: {
        '@type': 'Offer',
        price: '197',
        priceCurrency: 'INR',
        priceValidUntil,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4',
        reviewCount: '5500',
        bestRating: '5',
        worstRating: '1',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the price of the Desidiya moon crystal night light?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Desidiya Moon Crystal Ball Night Light with Wooden Base is available for ₹197 on CouponsCrew — down from the original price of ₹1,999, saving you ₹1,802 with free delivery included.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Desidiya moon crystal night light a good gift?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the Desidiya moon crystal ball night light is a popular gifting option. Its decorative moon crystal design with a wooden base makes it suitable as a birthday, anniversary, or housewarming gift for all ages.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the Desidiya night light be used in a bedroom?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the Desidiya moon crystal night light is designed for bedroom use. It emits a warm ambient LED glow that is soft on the eyes, making it ideal as a bedside lamp or decorative accent light.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the rating of the Desidiya moon crystal night light?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Desidiya Moon Crystal Ball Night Light has a rating of 4 out of 5 based on over 5,500 customer reviews, making it one of the most reviewed home decor products on CouponsCrew.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get the best deal on the Desidiya night light on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Click the \"Get Deal\" button on the Desidiya moon crystal night light product page on CouponsCrew. You will be redirected to the seller's page with the discounted price of ₹197 automatically applied — no coupon code needed.",
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
        <MoonCrystalLightPage />
      </Suspense>
    </>
  )
}