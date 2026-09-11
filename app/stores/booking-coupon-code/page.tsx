import type { Metadata } from 'next'
import { Suspense } from 'react'
import BookingStore from './_components/BookingStore'
import { BOOKING_COUPONS } from './_components/bookingCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Booking Coupon Code: Save Up to 60% OFF + Extra 10% OFF | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Booking coupon code & promo code. Save up to 60% OFF hotels, enjoy an extra 10% OFF with Genius, plus weekend stay deals worldwide.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/booking-coupon-code',
  },

  openGraph: {
    title: 'Booking Coupon Code: Save Up to 60% OFF + Extra 10% OFF | Sept 2026',
    description:
      'Find the latest Booking coupon code & promo code. Save up to 60% OFF hotels, enjoy an extra 10% OFF with Genius, plus weekend stay deals worldwide.',
    url: 'https://www.couponscrew.com/stores/booking-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Booking.com Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Booking Coupon Code: Save Up to 60% OFF + Extra 10% OFF | Sept 2026',
    description:
      'Find the latest Booking coupon code & promo code. Save up to 60% OFF hotels, enjoy an extra 10% OFF with Genius, plus weekend stay deals worldwide.',
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

const bookingOffers = BOOKING_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Booking.com ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/booking-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/booking-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/booking-coupon-code',
      name: 'Booking Coupon Code: Save Up to 60% OFF + Extra 10% OFF | Sept 2026',
      description: 'Find the latest Booking coupon code & promo code. Save up to 60% OFF hotels, enjoy an extra 10% OFF with Genius, plus weekend stay deals worldwide.',
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
            name: 'Booking.com Coupon Code',
            item: 'https://www.couponscrew.com/stores/booking-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/booking-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I apply a Booking.com coupon code at checkout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After selecting your stay, flight, or service and reaching the checkout page, look for the \"Enter Promo Code\" field in the order summary. Paste the Booking coupon code and click Apply — the discounted price updates before payment is requested."
      }
    },
    {
      "@type": "Question",
      "name": "Do Booking.com promo codes apply to all services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Some Booking promo codes apply only to stays, and others cover flights or car rentals. The deal terms on each code on this page confirm which services are included."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Booking.com coupon code with a Genius discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In some cases, yes — Genius discounts apply automatically at participating properties and a promo code may be applied on top. Check whether your specific code has restrictions around Genius pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the free cancellation policy on Booking.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free cancellation is available on properties that offer it — the deadline for free cancellation is shown on the listing and in your confirmation. Cancelling before this deadline results in a full refund to your original payment method."
      }
    },
    {
      "@type": "Question",
      "name": "Does Booking.com offer flight booking for Indian domestic routes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking.com's Flights section covers domestic Indian routes alongside international flights. You can search IndiGo, Air India, SpiceJet, and other carriers through the platform."
      }
    },
    {
      "@type": "Question",
      "name": "Is bus ticket booking available on Booking.com India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking.com does not currently offer domestic bus booking in India. For intercity coach bookings, redBus is the recommended platform — CouponsCrew also lists active redBus coupon codes on a separate page."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Booking.com refund take after cancellation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refund timelines depend on the property's cancellation policy and your payment method. Most refunds process within 7–14 business days to the original payment source. Check the cancellation confirmation email for the specific timeline on your booking."
      }
    },
    {
      "@type": "Question",
      "name": "What is Booking.com Genius and is it free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Genius is Booking.com's free loyalty programme. Signing up is free, and after your first completed booking you unlock Genius Level 1 discounts at participating properties automatically. No subscription fee is required."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book an airport taxi through Booking.com India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking.com's Airport Taxis section covers pre-booked transfers at major Indian airports. Fixed prices are shown at booking — no surge pricing or meter charges."
      }
    },
    {
      "@type": "Question",
      "name": "How often does CouponsCrew update Booking.com codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew checks and updates Booking.com deals regularly. Expired codes are removed and new ones are added as they go live. Bookmarking this page ensures you always have a current working Booking coupon code before your next reservation."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...bookingOffers,
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
        <BookingStore />
      </Suspense>
    </>
  )
}
