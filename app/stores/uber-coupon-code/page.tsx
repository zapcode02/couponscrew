import type { Metadata } from 'next'
import { Suspense } from 'react'
import UberStore from './_components/UberStore'
import { UBER_COUPONS } from './_components/uberCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Uber Coupon Code: Save 50% OFF Rides + ₹100 OFF First Ride | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Uber coupon code and Uber promo code at Maxiku Offers. Save up to 50% OFF rides, get ₹100 OFF your first ride, and enjoy 40% OFF Uber Eats orders.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/uber-coupon-code',
  },

  openGraph: {
    title: 'Uber Coupon Code: Save 50% OFF Rides + ₹100 OFF First Ride | Sept 2026',
    description:
      'Find the latest Uber coupon code and Uber promo code at Maxiku Offers. Save up to 50% OFF rides, get ₹100 OFF your first ride, and enjoy 40% OFF Uber Eats orders.',
    url: 'https://www.couponscrew.com/stores/uber-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Uber Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Uber Coupon Code: Save 50% OFF Rides + ₹100 OFF First Ride | Sept 2026',
    description:
      'Find the latest Uber coupon code and Uber promo code at Maxiku Offers. Save up to 50% OFF rides, get ₹100 OFF your first ride, and enjoy 40% OFF Uber Eats orders.',
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

const uberOffers = UBER_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Uber ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/uber-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/uber-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/uber-coupon-code',
      name: 'Uber Coupon Code: Save 50% OFF Rides + ₹100 OFF First Ride | Sept 2026',
      description: 'Find the latest Uber coupon code and Uber promo code at Maxiku Offers. Save up to 50% OFF rides, get ₹100 OFF your first ride, and enjoy 40% OFF Uber Eats orders.',
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
            name: 'Uber Coupon Code',
            item: 'https://www.couponscrew.com/stores/uber-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/uber-coupon-code#brand',
      name: 'Uber',
      url: 'https://www.uber.com',
      sameAs: ['https://en.wikipedia.org/wiki/Uber'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/uber-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an Uber coupon code and how do I apply it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Uber coupon code is an alphanumeric string that reduces your fare when entered in the Promotions field before confirming a booking. Open the Uber app, enter your destination, select a service, then tap Add Promo Code at the payment screen. Type the code exactly — codes are case-sensitive — and confirm the discount shows in your fare breakdown before tapping Confirm Ride."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Uber promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reasons are: the code is restricted to a service type you haven't selected (e.g., an UberGo code won't apply on Uber Premier), the code is for new users only and your account has prior rides, the code has expired, or the code is city-restricted and you're booking in a different city. Check the deal card terms on this page before trying the code."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Uber discount code on Intercity rides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most standard Uber discount codes are scoped to city rides. Intercity-specific codes do exist, typically around festive periods, but they're less frequent. Check the Promotions tab in your app — personalised Intercity codes sometimes appear there even when public codes are not available."
      }
    },
    {
      "@type": "Question",
      "name": "What is UberCash and is it better than a promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UberCash is a preloaded in-app wallet balance. It deducts automatically from every ride — no code required at checkout. Promo codes give one-time discounts; UberCash gives a consistent balance that works across all ride types. They're complementary: a promo code reduces the fare first, then UberCash covers whatever is left."
      }
    },
    {
      "@type": "Question",
      "name": "Does Uber charge a cancellation fee in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you cancel after the free window (typically two minutes post-booking), a cancellation fee of ₹30–₹60 applies depending on city and service type. If the driver hasn't accepted the ride yet, cancellation is usually free. If a driver is taking significantly longer than estimated, contact Uber support — fees are sometimes waived in these cases."
      }
    },
    {
      "@type": "Question",
      "name": "Which Uber service is cheapest in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber Moto is the lowest base-fare service (starts from ₹29) for solo riders on short urban routes. Uber Auto starts from ₹40 and has no surge in most cities, making it predictably cheaper than UberGo during peak hours when surge applies."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get an Uber discount code as a new user?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New-user codes are usually applied automatically when you sign up with a fresh mobile number. You can also enter a referral code during signup for an additional discount on your first ride. Some first-ride Uber promo codes are also listed on this page — check the deals table at the top."
      }
    },
    {
      "@type": "Question",
      "name": "What cities does Uber Intercity cover in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular Intercity routes include Delhi–Chandigarh, Delhi–Agra, Mumbai–Pune, Bangalore–Mysore, and Hyderabad–Vijayawada. Route availability expands regularly. Check the Uber app for your specific origin-destination pair — Intercity appears as a service card in the booking flow if the route is covered."
      }
    },
    {
      "@type": "Question",
      "name": "Can I schedule an Uber ride in advance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tap Schedule in the destination entry screen and set a date and time up to 30 days ahead. The app confirms driver assignment closer to the pickup time. Useful for early-morning airport rides where in-the-moment availability is uncertain."
      }
    },
    {
      "@type": "Question",
      "name": "Is Uber available in Tier-2 and Tier-3 cities in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber operates in over 100 Indian cities including Tier-2 markets like Amritsar, Kanpur, Chandigarh, Coimbatore, and Bhubaneswar. Service type availability varies — smaller cities typically have UberGo and Uber Auto but not Premier or XL. Check the app with your city as the pickup location to see which services are available."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...uberOffers,
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
        <UberStore />
      </Suspense>
    </>
  )
}
