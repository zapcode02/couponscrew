import type { Metadata } from 'next'
import { Suspense } from 'react'
import JioMartStore from './_components/JioMartStore'
import { JIOMART_COUPONS } from './_components/jiomartCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first
  title: 'JioMart Coupon Code - Up to 30% OFF on Grocery & More | Aug 2026',

  // Primary + secondary keywords + max offer
  description:
    'Get the latest JioMart coupon code and discount codes with up to 30% OFF on grocery, electronics & fashion. Discover verified deals and offers, updated daily. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/jiomart-coupon-code',
  },

  openGraph: {
    title: 'JioMart Coupon Code - Up to 30% OFF on Grocery & More | Aug 2026',
    description:
      'Get the latest JioMart coupon code and discount codes with up to 30% OFF on grocery, electronics & fashion. Discover verified deals and offers, updated daily. Aug 2026',
    url: 'https://www.couponscrew.com/stores/jiomart-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JioMart Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JioMart Coupon Code - Up to 30% OFF on Grocery & More | Aug 2026',
    description:
      'Get the latest JioMart coupon code and discount codes with up to 30% OFF on grocery, electronics & fashion. Discover verified deals and offers, updated daily. Aug 2026',
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

const jiomartOffers = JIOMART_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `JioMart ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/jiomart-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/jiomart-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/jiomart-coupon-code',
      name: 'JioMart Coupon Code - Up to 30% OFF on Grocery & More | Aug 2026',
      description: 'Get the latest JioMart coupon code and discount codes with up to 30% OFF on grocery, electronics & fashion. Discover verified deals and offers, updated daily. Aug 2026',
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
            name: 'JioMart Coupon Code',
            item: 'https://www.couponscrew.com/stores/jiomart-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/jiomart-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working JioMart coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every JioMart coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the conditions on the deal card and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the jiomart 100 off coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The jiomart 100 off coupon code is a first-order discount code giving new JioMart users ₹100 off on their first purchase above a minimum cart value (typically ₹500). It is one of the most searched JioMart deals — CouponsCrew lists the currently active version in the \"New Users\" filter on this page."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a JioMart promo code on grocery orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — most JioMart promo codes on this page are valid on grocery orders, though some codes exclude fresh produce (fruits and vegetables). Check the individual deal card for category eligibility before adding products to your cart."
      }
    },
    {
      "@type": "Question",
      "name": "Is JioMart good for online grocery shopping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — jiomart grocery pricing is consistently competitive on branded staples like atta, rice, cooking oil, and pulses. The platform's pricing on FMCG products (detergents, personal care, packaged food) is often at or below what you would pay in a physical supermarket, and applying a verified JioMart coupon code from CouponsCrew reduces that further."
      }
    },
    {
      "@type": "Question",
      "name": "Does JioMart offer free delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — free delivery is available on most grocery orders in covered areas with no minimum order value in many cities. Fashion and electronics orders may carry a delivery fee depending on cart value and location. Confirm delivery terms for your pin code at checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack a JioMart coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes — a JioMart discount code and a bank card instant discount can both apply to the same order. Apply the promo code first in the coupon field, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes for confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order value for JioMart coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum cart values vary by code — typically ₹300–₹600 for most active JioMart coupon codes. The exact threshold is shown on each deal card on this CouponsCrew page. Some new-user codes have a lower minimum; some category-specific codes have a higher threshold."
      }
    },
    {
      "@type": "Question",
      "name": "How does JioMart delivery work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jio mart delivery is pin-code dependent. Grocery orders qualify for same-day or next-day delivery in most tier-1 cities. Fresh produce is available with same-day delivery in select pin codes. Fashion and electronics have a 3–7 day standard delivery timeline. Enter your pin code at the start of the JioMart session to see available delivery slots and timelines for your area."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return a product if I used a JioMart discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the discount code does not affect return eligibility. If a return is approved, the refund is processed for the amount actually paid (post-discount) to your original payment method within 5–7 business days. UPI refunds are typically processed faster."
      }
    },
    {
      "@type": "Question",
      "name": "Is JioMart the same as Reliance Mart online shopping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JioMart is the online shopping platform operated by Reliance Retail — the same company that operates Reliance Smart, Reliance Smart Point, and other physical retail formats. Reliance mart online shopping via JioMart gives you access to the same product range and Reliance in-house brands (Good Life, Smart Choice) available in physical stores, often at the same or lower pricing."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...jiomartOffers,
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
        <JioMartStore />
      </Suspense>
    </>
  )
}
