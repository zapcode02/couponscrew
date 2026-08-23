import type { Metadata } from 'next'
import { Suspense } from 'react'
import IndigoStore from './_components/IndigoStore'
import { INDIGO_COUPONS } from './_components/indigoCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'IndiGo Coupon Code - Up to 20% OFF on Flight Bookings | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest IndiGo coupon code and discount codes with up to 20% OFF on domestic & international flight bookings. Verified deals, updated daily. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/indigo-coupon-code',
  },

  openGraph: {
    title: 'IndiGo Coupon Code - Up to 20% OFF on Flight Bookings | Aug 2026',
    description:
      'Get the latest IndiGo coupon code and discount codes with up to 20% OFF on domestic & international flight bookings. Verified deals, updated daily. Aug 2026',
    url: 'https://www.couponscrew.com/stores/indigo-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IndiGo Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'IndiGo Coupon Code - Up to 20% OFF on Flight Bookings | Aug 2026',
    description:
      'Get the latest IndiGo coupon code and discount codes with up to 20% OFF on domestic & international flight bookings. Verified deals, updated daily. Aug 2026',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
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

const indigoOffers = INDIGO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `IndiGo ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/indigo-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/indigo-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/indigo-coupon-code',
      name: 'IndiGo Coupon Code - Up to 20% OFF on Flight Bookings | Aug 2026',
      description: 'Get the latest IndiGo coupon code and discount codes with up to 20% OFF on domestic & international flight bookings. Verified deals, updated daily. Aug 2026',
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
            name: 'IndiGo Coupon Code',
            item: 'https://www.couponscrew.com/stores/indigo-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/indigo-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working IndiGo coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every IndiGo coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card. Expired codes are removed daily — if a code does not apply, check the deal card conditions and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an IndiGo promo code on international flights?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — some IndiGo promo codes apply to international routes, though many are domestic-only. The deal card on each CouponsCrew listing clearly notes whether the code is valid for domestic, international, or both. International codes tend to be higher in value given the higher base fares."
      }
    },
    {
      "@type": "Question",
      "name": "What is the goindigo booking website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Goindigo booking refers to IndiGo's official flight booking platform at goindigo.in — the primary website for booking IndiGo flights, managing existing bookings, checking indigo ticket price, and accessing IndiGo's web check-in. The IndiGo app offers the same functionality with additional app-exclusive deals."
      }
    },
    {
      "@type": "Question",
      "name": "What is IndiGo iCrew?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indigo icrew is IndiGo's internal crew management and HR portal — used exclusively by IndiGo cabin crew, pilots, and staff for scheduling, communications, and payroll. It is not accessible to passengers and is not related to flight booking."
      }
    },
    {
      "@type": "Question",
      "name": "How does the BluChip programme work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BluChip is IndiGo's loyalty programme — earn 8 BluChips per ₹100 of base fare on every booking, up to 16 per ₹100 with tier bonuses. BluChips are valid for 24 months and redeemable against future IndiGo bookings. Higher tiers (Blu 2, Blu 1) unlock complimentary lounge passes worth up to ₹40,000."
      }
    },
    {
      "@type": "Question",
      "name": "Does IndiGo offer student discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — IndiGo's student offer provides up to 5% off base fares on eligible domestic routes, plus extra baggage allowance for students with a valid student ID. Select \"Student\" as the passenger type during booking on goindigo.in or the app and verify your ID at check-in."
      }
    },
    {
      "@type": "Question",
      "name": "What is IndiGo's cancellation fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancellation fees depend on fare type — ₹3,500 per passenger per sector on Super Saver fares, ₹2,500 on Flexi, and ₹2,000 on IndiGo Stretch. Cancellations within 2 hours of departure are generally non-refundable. Full refunds apply when IndiGo cancels a flight."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack an IndiGo coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes — an IndiGo discount code and a bank card instant discount can both apply to the same booking. Apply the code in the promo field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes for confirmation."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...indigoOffers,
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
        <IndigoStore />
      </Suspense>
    </>
  )
}
