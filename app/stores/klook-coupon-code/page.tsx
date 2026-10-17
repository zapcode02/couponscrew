import type { Metadata } from 'next'
import { Suspense } from 'react'
import KlookStore from './_components/KlookStore'
import { KLOOK_COUPONS } from './_components/klookCoupons'

const TITLE = 'Klook Coupon Code – ₹8,000 OFF + 21% OFF Tickets | Oct 2026'
const DESCRIPTION = 'Save more with the latest Klook Coupon Code and Klook Promo Code. Get up to ₹8,000 OFF on travel experiences and 21% OFF Universal Studios Singapore tickets. Book tours, attractions, ferry tickets, cruises, and activities worldwide at the best prices this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/klook-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/klook-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Klook Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'geo.region': 'IN', 'geo.country': 'IN', language: 'en-IN' },
}

const titleCase = (s: string) => s.toLowerCase().split(' ').map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1))).join(' ')

const klookOffers = KLOOK_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Klook ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/klook-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/klook-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/klook-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Klook Coupon Code', item: 'https://www.couponscrew.com/stores/klook-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Klook)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/klook-coupon-code#brand',
      name: 'Klook',
      url: 'https://www.klook.com',
      sameAs: ['https://en.wikipedia.org/wiki/Klook'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
   {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/klook-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a Klook coupon code for India right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klook codes for Indian users appear from time to time, usually as a percentage off with a cap and a minimum spend. Check your Klook account's promo code section and this page for current offers."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I enter a Klook promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the Discounts section at checkout, or save it first under Promo codes in your Klook account."
      }
    },
    {
      "@type": "Question",
      "name": "What are Klook credits worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100 Klook credits equal US$1. You earn them after completing a booked activity and for writing reviews, and use them on future bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Is Hong Kong Disneyland included in the Klook Pass?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Hong Kong Disneyland is an optional premium add-on to the Klook Pass Hong Kong, not part of the standard pass."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel Klook attraction tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the activity. Tickets such as Genting SkyWorlds and Aquaria KLCC are listed as non-cancellable. Check the cancellation policy on each booking page."
      }
    },
    {
      "@type": "Question",
      "name": "Which Genting SkyWorlds ticket should Indian tourists buy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The non-Malaysian ticket. Malaysian rates need a MyKad, and buying the wrong type means paying the difference at the walk-in rate."
      }
    },
    {
      "@type": "Question",
      "name": "How do I change Klook to English and rupees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the language and currency selector at the top of the page and choose EN and INR."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/klook-coupon-code#offerlist',
      name: 'Klook Coupon Codes & Offers',
      numberOfItems: klookOffers.length,
      itemListElement: klookOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...klookOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <KlookStore />
      </Suspense>
    </>
  )
}