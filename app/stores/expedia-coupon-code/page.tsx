import type { Metadata } from 'next'
import { Suspense } from 'react'
import ExpediaStore from './_components/ExpediaStore'
import { EXPEDIA_COUPONS } from './_components/expediaCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Expedia Coupon Code: 50% OFF Holidays + 25% OFF Flights | Sept 26',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Expedia coupon code and Expedia promo code to save up to 50% on holiday deals and 25% on flights. Explore verified Expedia offers in Sept 2026.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/expedia-coupon-code',
  },

  openGraph: {
    title: 'Expedia Coupon Code: 50% OFF Holidays + 25% OFF Flights | Sept 26',
    description:
      'Find the latest Expedia coupon code and Expedia promo code to save up to 50% on holiday deals and 25% on flights. Explore verified Expedia offers in Sept 2026.',
    url: 'https://www.couponscrew.com/stores/expedia-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Expedia Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Expedia Coupon Code: 50% OFF Holidays + 25% OFF Flights | Sept 26',
    description:
      'Find the latest Expedia coupon code and Expedia promo code to save up to 50% on holiday deals and 25% on flights. Explore verified Expedia offers in Sept 2026.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')

const expediaOffers = EXPEDIA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Expedia ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/expedia-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/expedia-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/expedia-coupon-code',
      name: 'Expedia Coupon Code: 50% OFF Holidays + 25% OFF Flights | Sept 26',
      description: 'Find the latest Expedia coupon code and Expedia promo code to save up to 50% on holiday deals and 25% on flights. Explore verified Expedia offers in Sept 2026.',
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
            name: 'Expedia Coupon Code',
            item: 'https://www.couponscrew.com/stores/expedia-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Expedia)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/expedia-coupon-code#brand',
      name: 'Expedia',
      url: 'https://www.expedia.co.in',
      sameAs: ['https://en.wikipedia.org/wiki/Expedia_Group'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/expedia-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use an Expedia coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browse the verified Expedia offers listed on this page and click \"Copy Code\" on the deal you want, or click \"Get Deal\" if it is a no-code offer. Then visit Expedia, search for your flight, hotel, or package, and paste the code into the promo code field shown at checkout before completing payment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book flights and hotels together on Expedia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Expedia offers bundled vacation packages that combine flights, hotels, and sometimes car rentals into a single booking, which often works out cheaper than booking each component separately, especially when a coupon code is applied on top."
      }
    },
    {
      "@type": "Question",
      "name": "What is Expedia's cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancellation policies on Expedia vary by hotel, airline, and rate type selected at booking — many listings offer a \"Free Cancellation\" option clearly marked during search, while discounted non-refundable rates may not be cancellable. Always check the specific cancellation terms shown before confirming payment."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Expedia promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A code may fail to apply if it has expired, if it is restricted to a specific booking type (e.g. hotels only, not flights), if a minimum booking value applies, or if it is a new-user-only offer. Check the terms listed alongside each code on this page before applying."
      }
    },
    {
      "@type": "Question",
      "name": "Does Expedia offer customer support for booking issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Expedia provides 24/7 customer support for booking changes, cancellations, and travel disruptions, accessible through the Expedia app, website, or by phone for existing bookings."
      }
    },
    {
      "@type": "Question",
      "name": "What is an Expedia coupon code and where do I find one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Expedia coupon code is a promotional code that reduces the price of an eligible booking at checkout. You can find current codes on this page, through Expedia's own email promotions, and via Expedia partner central affiliated coupon sites that publish verified codes with full terms."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Expedia promo code on vacation packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many Expedia promo code offers apply to Expedia vacation packages. Some codes are restricted to hotel-only or flight-only bookings — check the code's terms before selecting your booking type to confirm it qualifies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Expedia offer free cancellation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many Expedia hotel reservations and package hotel components include a free cancellation window, typically 24 to 48 hours before check-in. The exact policy depends on the property and rate type selected. The cancellation terms are displayed on the listing page before you commit to booking."
      }
    },
    {
      "@type": "Question",
      "name": "What is One Key and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One Key is Expedia Group's unified loyalty programme linking Expedia, Hotels.com, and Vrbo. Every qualifying booking earns OneKeyCash, which can be spent on future bookings across any of the three platforms. Enrollment is free, and higher-tier status increases the earn rate and unlocks additional perks."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an Expedia discount code with Member Prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. Member Prices apply automatically when you are logged in, and an Expedia discount code is entered separately at checkout as an additional reduction. The final checkout page shows each discount as a separate line item so you can confirm both have applied before paying."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/expedia-coupon-code#offerlist',
      name: 'Expedia Coupon Codes & Offers',
      numberOfItems: expediaOffers.length,
      itemListElement: expediaOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...expediaOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={null}>
        <ExpediaStore />
      </Suspense>
    </>
  )
}
