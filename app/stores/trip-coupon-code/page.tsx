
import type { Metadata } from 'next'
import { Suspense } from 'react'
import TripStore from './_components/TripStore'
import { TRIP_COUPONS } from './_components/tripCoupons'

const TITLE = 'Trip.com Coupon Code – 50% OFF Hotels & 10% OFF | Oct 2026'
const DESCRIPTION = 'Save more with the latest Trip.com Coupon Code and Trip.com Promo Code. Enjoy up to 50% OFF hotels in China and 10% OFF hotels, tours, and airport transfers. Book flights, hotels, car rentals, and holiday packages at the best prices this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/trip-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/trip-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Trip.com Coupon Code — CouponsCrew' }],
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

const tripOffers = TRIP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Trip.com ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/trip-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/trip-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/trip-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Trip.com Coupon Code', item: 'https://www.couponscrew.com/stores/trip-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Trip.com)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/trip-coupon-code#brand',
      name: 'Trip.com',
      url: 'https://www.trip.com',
      sameAs: ['https://en.wikipedia.org/wiki/Trip.com_Group'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/trip-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a Trip.com coupon code for India right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check this page and the promotions section of Trip.com India. The strongest India codes usually appear during double-date sales; in June 2026, codes gave up to 50% off international flights (capped at ₹5,000) and 20% off hotels outside India (capped at ₹1,000)."
      }
    },
    {
      "@type": "Question",
      "name": "Do Trip.com promo codes work on domestic flights in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The June 2026 India codes excluded domestic flights and covered only selected flights to or from India. Read each code's terms."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Trip Coins and a promo code together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Trip.com allows Trip Coins alongside a promo code on the same booking, though only one promo code can be used."
      }
    },
    {
      "@type": "Question",
      "name": "How much are Trip Coins worth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About US$1 for every 100 Trip Coins. Coins earned from bookings expire after 18 months."
      }
    },
    {
      "@type": "Question",
      "name": "Do I get my promo code back if I cancel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. On recent Trip.com India campaigns, the promo value wasn't refunded on cancellation."
      }
    },
    {
      "@type": "Question",
      "name": "Does Trip.com match lower prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only for hotels, as a trial in selected regions, and the difference is paid in Trip Coins. Flights aren't covered."
      }
    },
    {
      "@type": "Question",
      "name": "Is Trip.com customer support available 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Trip.com India offers 24/7 support by phone and online chat, including emergency help while travelling."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/trip-coupon-code#offerlist',
      name: 'Trip.com Coupon Codes & Offers',
      numberOfItems: tripOffers.length,
      itemListElement: tripOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...tripOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <TripStore />
      </Suspense>
    </>
  )
}