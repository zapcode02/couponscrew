import type { Metadata } from 'next'
import { Suspense } from 'react'
import OlaStore from './_components/OlaStore'
import { OLA_COUPONS } from './_components/olaCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Ola Coupon Code – FREE First Ride + ₹50 OFF | Aug 2026  ',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Ola coupon code, promo code and cab offers for Aug 2026. Get ₹50 OFF on Mini and Prime rides, ₹300 cashback on Outstation trips and a FREE first ride for eligible new users.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/ola-coupon-code',
  },

  openGraph: {
    title: 'Ola Coupon Code – FREE First Ride + ₹50 OFF | Aug 2026  ',
    description:
      'Find the latest Ola coupon code, promo code and cab offers for Aug 2026. Get ₹50 OFF on Mini and Prime rides, ₹300 cashback on Outstation trips and a FREE first ride for eligible new users.',
    url: 'https://www.couponscrew.com/stores/ola-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ola Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ola Coupon Code – FREE First Ride + ₹50 OFF | Aug 2026  ',
    description:
      'Find the latest Ola coupon code, promo code and cab offers for Aug 2026. Get ₹50 OFF on Mini and Prime rides, ₹300 cashback on Outstation trips and a FREE first ride for eligible new users.',
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
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
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

const olaOffers = OLA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Ola ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/ola-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/ola-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/ola-coupon-code',
      name: 'Ola Coupon Code – FREE First Ride + ₹50 OFF | Aug 2026  ',
      description: 'Find the latest Ola coupon code, promo code and cab offers for Aug 2026. Get ₹50 OFF on Mini and Prime rides, ₹300 cashback on Outstation trips and a FREE first ride for eligible new users.',
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
            name: 'Ola Coupon Code',
            item: 'https://www.couponscrew.com/stores/ola-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/ola-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply an Ola coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the Ola app, enter your pickup and destination, choose your ride category, and look for the "Apply Coupon" field before confirming. Enter your Ola coupon code from CouponsCrew and tap Apply. The discounted Ola fare will update on your booking screen before you confirm.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my Ola promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, the minimum fare requirement hasn't been met, the code is for a specific ride category (e.g. Outstation only), or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific Ola discount code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use an Ola coupon code for Ola Outstation bookings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — outstation-specific Ola offer codes are available and typically deliver the highest rupee saving on the platform. Check CouponsCrew for active outstation Ola discount codes before booking any intercity trip.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Ola Rickshaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ola Rickshaw (also called Ola Auto) is Ola's auto-rickshaw service — app-based, transparent pricing, no fare negotiation required. Available across most major Indian cities, Ola rickshaw is one of the lowest-cost Ola cab service categories. Apply an Ola offer code before confirming to reduce the fare further."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I apply Paytm or wallet cashback on Ola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Select Paytm Wallet or your preferred wallet as the payment method at the Ola checkout. Any active Paytm–Ola cashback offer will be applied automatically. The cashback typically posts within 24–48 hours of the completed ride.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Ola Money and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ola Money is Ola's in-app prepaid wallet. Load balance into Ola Money and use it to pay for rides without entering card details at trip end. Ola periodically runs top-up bonus campaigns where loading a certain amount adds extra credit — effectively a discount on future rides."
      }
    },
    {
      '@type': 'Question',
      name: 'Is there an Ola coupon code for existing users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While the highest-value codes are typically for new users, Ola regularly distributes Ola promo codes for existing users through app notifications, bank card partnerships, wallet cashback programmes, and festive campaigns. CouponsCrew lists both new-user and all-user codes clearly.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Ola Outstation pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ola Outstation is priced on a per-kilometre basis with toll, parking, and driver allowance stated upfront at booking. One-way and round-trip options are available. The total Ola fare for outstation is shown before confirmation — no hidden charges added after the trip. An Ola discount code reduces this upfront quoted price.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I book Ola Rentals for a half-day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ola Rentals are available in 1-hour, 2-hour, 4-hour, and 8-hour packages depending on your city. Each package includes a defined number of kilometres — additional kilometres are charged at a per-km rate. Check the Ola app for available rental packages in your city.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact Ola customer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ola customer support is available through the Help section in the Ola app. You can raise a trip issue, dispute a fare, or request a refund directly through the in-app support flow. Ola's support team can also be reached through the official Ola website help centre."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...olaOffers,
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
        <OlaStore />
      </Suspense>
    </>
  )
}
