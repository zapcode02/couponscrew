import type { Metadata } from 'next'
import { Suspense } from 'react'
import AirbnbStore from './_components/AirbnbStore'
import { AIRBNB_COUPONS } from './_components/airbnbCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Airbnb Coupon Code – Get 44% OFF & Save ₹625 on Stays | Oct 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Use the latest Airbnb Coupon Code and Airbnb Discount Code to get 44% OFF private rooms in Noida and save ₹625 on selected stays. Book verified Airbnb accommodations for less.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/airbnb-coupon-code',
  },

  openGraph: {
    title: 'Airbnb Coupon Code – Get 44% OFF & Save ₹625 on Stays | Oct 2026',
    description:
      'Use the latest Airbnb Coupon Code and Airbnb Discount Code to get 44% OFF private rooms in Noida and save ₹625 on selected stays. Book verified Airbnb accommodations for less.',
    url: 'https://www.couponscrew.com/stores/airbnb-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Airbnb Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Coupon Code – Get 44% OFF & Save ₹625 on Stays | Oct 2026',
    description:
      'Use the latest Airbnb Coupon Code and Airbnb Discount Code to get 44% OFF private rooms in Noida and save ₹625 on selected stays. Book verified Airbnb accommodations for less.',
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

const airbnbOffers = AIRBNB_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Airbnb ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/airbnb-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/airbnb-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/airbnb-coupon-code',
      name: 'Airbnb Coupon Code – Get 44% OFF & Save ₹625 on Stays | Oct 2026',
      description: 'Use the latest Airbnb Coupon Code and Airbnb Discount Code to get 44% OFF private rooms in Noida and save ₹625 on selected stays. Book verified Airbnb accommodations for less.',
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
            name: 'Airbnb Coupon Code',
            item: 'https://www.couponscrew.com/stores/airbnb-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Airbnb)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/airbnb-coupon-code#brand',
      name: 'Airbnb',
      url: 'https://www.airbnb.co.in',
      sameAs: ['https://en.wikipedia.org/wiki/Airbnb'],
    },

    // FAQPage Schema (AEO + AI Search — mirrors this page's own visible FAQ accordion, full parity)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/airbnb-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Airbnb coupon code available right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best active Airbnb coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat first-booking discount, while advance bookings on entire homes and long-term stays of 28+ nights carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
      }
    },
    {
      "@type": "Question",
      "name": "What is Airbnb's cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancellation policies are set individually by each host and fall into a few standard tiers — Flexible (full refund up to 24 hours before check-in), Moderate (full refund up to 5 days before check-in), and Firm or Strict (partial refund only, with stricter cutoff windows). The specific policy for a listing is always shown on the listing page and again during checkout before you confirm payment, so it is worth checking before booking non-refundable dates."
      }
    },
    {
      "@type": "Question",
      "name": "What does AirCover include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AirCover is Airbnb's built-in protection programme, included free with every booking. For guests, it covers a Booking Protection Guarantee (rebooking or refund if a host cancels last-minute or a listing is materially inaccurate), 24-hour safety support, and a check-in guarantee. For hosts, AirCover includes host damage protection and liability insurance. It does not replace personal travel insurance for trip cancellations or medical emergencies, so it is worth understanding the distinction before travel."
      }
    },
    {
      "@type": "Question",
      "name": "How do Airbnb service fees work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Airbnb charges guests a service fee, typically shown as a percentage added on top of the nightly rate and cleaning fee, displayed transparently before you confirm a booking. Hosts also pay a separate host service fee deducted from their payout. The total price shown at checkout already includes the guest service fee, so what you see at the final payment step is what you pay — no hidden charges appear afterward."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a discount for first-time Airbnb users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. New users booking their first stay typically qualify for a flat discount on bookings above a minimum value, listed at the top of this page when active. This is separate from any host-level discount for advance or long-term bookings, so both can sometimes be combined depending on the specific promotion terms shown at checkout."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I save by booking a long-term stay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hosts can set an optional weekly discount (for stays of 7+ nights) and monthly discount (for stays of 28+ nights) on their listings, commonly ranging from 10% to 25% off the standard nightly rate. These discounts are set per-listing, not platform-wide, so the exact percentage varies — check the price breakdown on the listing page before booking to see the applied discount."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Airbnb coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apply your CouponsCrew Airbnb offer during checkout, then pay with an eligible HDFC or Axis Bank card to unlock an additional instant discount. This stacks on top of any advance-booking or long-stay discount already applied by the host, giving you multiple layers of savings on the same reservation."
      }
    },
    {
      "@type": "Question",
      "name": "What are Airbnb Experiences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Airbnb Experiences are host-led activities bookable separately from a stay — cooking classes, city walking tours, local craft workshops, and outdoor activities hosted by local experts. They can be booked as a standalone activity in any city, even one you are not staying in via Airbnb, and often carry their own promotional discounts distinct from stay bookings."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/airbnb-coupon-code#offerlist',
      name: 'Airbnb Coupon Codes & Offers',
      numberOfItems: airbnbOffers.length,
      itemListElement: airbnbOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...airbnbOffers,
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
        <AirbnbStore />
      </Suspense>
    </>
  )
}
