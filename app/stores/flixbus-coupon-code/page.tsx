import type { Metadata } from 'next'
import { Suspense } from 'react'
import FlixBusStore from './_components/FlixBusStore'
import { FLIXBUS_COUPONS } from './_components/flixbusCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'FlixBus Coupon Code: Save up to 50% OFF + ₹150 OFF Route | Sept 26',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest FlixBus coupon code & promo code. Save up to 50% OFF bus tickets, get ₹150 OFF first bookings, plus flat 20% OFF app-only deals.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/flixbus-coupon-code',
  },

  openGraph: {
    title: 'FlixBus Coupon Code: Save up to 50% OFF + ₹150 OFF Route | Sept 26',
    description:
      'Get the latest FlixBus coupon code & promo code. Save up to 50% OFF bus tickets, get ₹150 OFF first bookings, plus flat 20% OFF app-only deals.',
    url: 'https://www.couponscrew.com/stores/flixbus-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlixBus Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FlixBus Coupon Code: Save up to 50% OFF + ₹150 OFF Route | Sept 26',
    description:
      'Get the latest FlixBus coupon code & promo code. Save up to 50% OFF bus tickets, get ₹150 OFF first bookings, plus flat 20% OFF app-only deals.',
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

const flixbusOffers = FLIXBUS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `FlixBus ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/flixbus-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/flixbus-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/flixbus-coupon-code',
      name: 'FlixBus Coupon Code: Save up to 50% OFF + ₹150 OFF Route | Sept 26',
      description: 'Get the latest FlixBus coupon code & promo code. Save up to 50% OFF bus tickets, get ₹150 OFF first bookings, plus flat 20% OFF app-only deals.',
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
            name: 'FlixBus Coupon Code',
            item: 'https://www.couponscrew.com/stores/flixbus-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/flixbus-coupon-code#brand',
      name: 'FlixBus',
      url: 'https://www.flixbus.in',
      sameAs: ['https://en.wikipedia.org/wiki/FlixBus'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/flixbus-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I apply a FlixBus coupon code at checkout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After selecting your route, date, and seat on the FlixBus India website or app, you'll reach a checkout or payment page. Enter the FlixBus promo code in the voucher field and click Apply — the discounted fare updates before payment is requested."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a FlixBus discount code on any route in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most site-wide FlixBus discount codes apply across all available Indian routes. Some codes are route-specific or apply only to select travel dates — the deal terms on each code on this page confirm the scope."
      }
    },
    {
      "@type": "Question",
      "name": "Do FlixBus coupon codes expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every code has an end date. CouponsCrew removes expired codes from this page and adds new ones as they go live. If a code isn't working, check the page for an updated deal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my FlixBus ticket if my plans change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FlixBus India allows cancellations up to 15 minutes before scheduled departure via the website, app, or partner outlets. Cancellations after this window are not eligible for a refund under standard policy."
      }
    },
    {
      "@type": "Question",
      "name": "Does the FlixBus app have exclusive deals not on the website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. FlixBus app-exclusive promo codes appear periodically. CouponsCrew lists these when they're available — check this page alongside the app before booking."
      }
    },
    {
      "@type": "Question",
      "name": "What is the FlixBus luggage policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FlixBus India allows passengers a standard luggage allowance. Specific weight and size limits are listed at the booking stage and in the Help Centre on the FlixBus website. Oversized luggage may require advance arrangement."
      }
    },
    {
      "@type": "Question",
      "name": "Is FlixBus available for group bookings in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FlixBus India supports multiple-passenger bookings through its standard online flow — add the number of passengers at the search stage. For larger group bookings, check the FlixBus India website or contact support via WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if FlixBus cancels my bus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If FlixBus cancels your ride or causes a significant departure delay, you can use Manage My Booking to either reschedule to another FlixBus departure free of charge or request a refund, subject to market conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I arrive at the FlixBus stop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FlixBus recommends arriving at the designated stop at least 10 minutes before departure. Have your ticket QR code ready on your phone screen. FlixBus does not hold departures for late passengers."
      }
    },
    {
      "@type": "Question",
      "name": "Is the FlixBus app available in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The FlixBus app is available for free download on Android and iOS in India. It covers full booking, seat selection, ticket management, and schedule access for Indian routes."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...flixbusOffers,
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
        <FlixBusStore />
      </Suspense>
    </>
  )
}
