import type { Metadata } from 'next'
import { Suspense } from 'react'
import LifestyleStore from './_components/LifestyleStore'
import { LIFESTYLE_COUPONS } from './_components/lifestyleCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Lifestyle Coupon Code: Save up to 70% OFF + Extra 10% OFF | Sep 26',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Lifestyle coupon code & promo code. Save up to 70% OFF, enjoy an extra 10% OFF with SELECT10, plus ₹500 OFF on ₹2,500+ orders.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/lifestyle-coupon-code',
  },

  openGraph: {
    title: 'Lifestyle Coupon Code: Save up to 70% OFF + Extra 10% OFF | Sep 26',
    description:
      'Get the latest Lifestyle coupon code & promo code. Save up to 70% OFF, enjoy an extra 10% OFF with SELECT10, plus ₹500 OFF on ₹2,500+ orders.',
    url: 'https://www.couponscrew.com/stores/lifestyle-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lifestyle Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lifestyle Coupon Code: Save up to 70% OFF + Extra 10% OFF | Sep 26',
    description:
      'Get the latest Lifestyle coupon code & promo code. Save up to 70% OFF, enjoy an extra 10% OFF with SELECT10, plus ₹500 OFF on ₹2,500+ orders.',
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

const lifestyleOffers = LIFESTYLE_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Lifestyle ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/lifestyle-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/lifestyle-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/lifestyle-coupon-code',
      name: 'Lifestyle Coupon Code: Save up to 70% OFF + Extra 10% OFF | Sep 26',
      description: 'Get the latest Lifestyle coupon code & promo code. Save up to 70% OFF, enjoy an extra 10% OFF with SELECT10, plus ₹500 OFF on ₹2,500+ orders.',
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
            name: 'Lifestyle Coupon Code',
            item: 'https://www.couponscrew.com/stores/lifestyle-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/lifestyle-coupon-code#brand',
      name: 'Lifestyle',
      url: 'https://www.lifestylestores.com',
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/lifestyle-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I apply a Lifestyle coupon code at checkout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After adding items to your basket, proceed to checkout and look for the \"Enter Promo Code\" or \"Offer Code\" field on the payment page. Paste your Lifestyle discount code and click Apply — the updated price shows before payment is confirmed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Lifestyle promo code on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some codes apply to sale-priced items and some don't. The deal terms on each code on this page will confirm whether already-discounted products are eligible."
      }
    },
    {
      "@type": "Question",
      "name": "Does Lifestyle accept more than one coupon code per order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lifestyle India typically accepts one promo code per order. If you have multiple codes, apply the one with the higher discount value."
      }
    },
    {
      "@type": "Question",
      "name": "Are LUXE products included in standard Lifestyle discount codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXE category products are commonly excluded from standard site-wide codes. Check the terms on each deal here — LUXE-specific codes appear periodically and are listed separately when available."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Lifestyle coupon code on the app and the website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most codes work on both, but some are app-only. The deal note on this page specifies if a code is restricted to the Lifestyle app."
      }
    },
    {
      "@type": "Question",
      "name": "What is Lifestyle's return policy for online orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Returns can be initiated through the Lifestyle app or website within the applicable return window. You can choose courier pickup or Return to Store. Items must be in original condition with tags and packaging intact."
      }
    },
    {
      "@type": "Question",
      "name": "Does Lifestyle offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lifestyle runs free shipping promotions regularly — these are listed on this page when active. The standard free shipping threshold applies otherwise; check the Lifestyle website or app for the current threshold on your order."
      }
    },
    {
      "@type": "Question",
      "name": "How often does CouponsCrew update Lifestyle coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew checks and updates Lifestyle deals regularly. Expired codes are removed and new ones are added as they go live. Bookmark this page for the most current working codes."
      }
    }
  ]
},
    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/lifestyle-coupon-code#offerlist',
      name: 'Lifestyle Coupon Codes & Offers',
      numberOfItems: lifestyleOffers.length,
      itemListElement: lifestyleOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...lifestyleOffers,
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
        <LifestyleStore />
      </Suspense>
    </>
  )
}
