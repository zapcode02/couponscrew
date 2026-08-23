import type { Metadata } from 'next'
import { Suspense } from 'react'
import RedBusStore from './_components/RedBusStore'
import { REDBUS_COUPONS } from './_components/redBusCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'RedBus Coupon Codes: Up to ₹500 OFF + 12% Cashback | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save with verified redBus coupon codes and promo codes. Get up to ₹500 OFF, 12% OFF bus tickets, 12% cashback, new user discounts, and exclusive bus booking offers. Updated August 2026.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/red-bus-coupon-code',
  },

  openGraph: {
    title: 'RedBus Coupon Codes: Up to ₹500 OFF + 12% Cashback | Aug 2026',
    description:
      'Save with verified redBus coupon codes and promo codes. Get up to ₹500 OFF, 12% OFF bus tickets, 12% cashback, new user discounts, and exclusive bus booking offers. Updated August 2026.',
    url: 'https://www.couponscrew.com/stores/red-bus-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'redBus Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RedBus Coupon Codes: Up to ₹500 OFF + 12% Cashback | Aug 2026',
    description:
      'Save with verified redBus coupon codes and promo codes. Get up to ₹500 OFF, 12% OFF bus tickets, 12% cashback, new user discounts, and exclusive bus booking offers. Updated August 2026.',
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

const redBusOffers = REDBUS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `redBus ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/red-bus-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/red-bus-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/red-bus-coupon-code',
      name: 'RedBus Coupon Codes: Up to ₹500 OFF + 12% Cashback | Aug 2026',
      description: 'Save with verified redBus coupon codes and promo codes. Get up to ₹500 OFF, 12% OFF bus tickets, 12% cashback, new user discounts, and exclusive bus booking offers. Updated August 2026.',
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
            name: 'redBus Coupon Code',
            item: 'https://www.couponscrew.com/stores/red-bus-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/red-bus-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working red bus coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every red bus coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard and you are redirected to redBus. Codes are checked daily; expired ones are removed promptly. If a code does not apply, check the deal card conditions and try the next listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a redbus promo code on train ticket bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most red bus promo codes on this page apply to bus ticket bookings. Train ticket fares on redBus are IRCTC-regulated and cannot be discounted at the base fare level. Some promotional codes may discount the redBus convenience fee on train bookings during specific campaigns — check the individual deal card for train-ticket eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "Is redBus safe for online bus ticket booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — redBus is a well-established platform operating since 2006, now part of the MakeMyTrip group. All bookings generate a confirmed M-ticket delivered to your registered phone and email. Payments are processed through standard encrypted gateways. The redBus app and website both carry verified operator listings and real passenger ratings."
      }
    },
    {
      "@type": "Question",
      "name": "What is the redBus cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancellation terms vary by operator and are displayed on the bus detail page before you confirm your booking. Most tickets allow cancellation with a partial refund up to 2–4 hours before departure. Refunds for cancelled bookings are typically processed to the original payment method within 5–7 business days, or immediately to the redBus wallet."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a red bus discount code for last-minute bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — most red bus discount codes on CouponsCrew apply to any eligible booking regardless of travel date, as long as the code has not expired and the minimum booking value is met. Last-minute bookings on high-demand routes may carry higher base fares, which actually makes percentage-based codes more valuable."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum booking value for redBus coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum values vary by code — typically between ₹300 and ₹600 for most active redbus offer codes. The exact threshold is shown on each deal card on this CouponsCrew page. There is no universal minimum across all redBus codes."
      }
    },
    {
      "@type": "Question",
      "name": "Are there redBus offers for government buses like KSRTC or MSRTC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some red bus promotion codes are valid on government-operated buses listed on redBus, but many codes are restricted to private operators or specific bus types. Check the deal card conditions for operator eligibility before applying a code on a government bus booking."
      }
    },
    {
      "@type": "Question",
      "name": "How does redBus Prime work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "redBus Prime is the platform's membership tier offering exclusive discounts on bookings, priority customer support, and other travel benefits. Prime member-only codes are separate from standard public redbus voucher codes and are listed on this CouponsCrew page under the Prime filter when available."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple redBus offer codes on one booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — redBus allows only one promotional code per booking. Choose the code that offers the highest saving for your specific fare before applying. Bank card offers and UPI cashback can typically be stacked on top of a single promo code."
      }
    },
    {
      "@type": "Question",
      "name": "How do I contact redBus customer support if there is a booking issue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "redBus customer support is available via the app's Help section (chat support), the redBus website contact form, and the helpline number listed on your booking confirmation. For payment issues, your bank's customer care is also a parallel option if the payment was debited but the booking failed."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...redBusOffers,
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
        <RedBusStore />
      </Suspense>
    </>
  )
}
