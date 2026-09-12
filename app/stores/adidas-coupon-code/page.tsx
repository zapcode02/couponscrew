import type { Metadata } from 'next'
import { Suspense } from 'react'
import AdidasStore from './_components/AdidasStore'
import { ADIDAS_COUPONS } from './_components/adidasCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Adidas Coupon Code: Save Up to 60% OFF + 10% OFF First Order | Sept 26',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Adidas coupon code & promo code. Save up to 60% OFF, enjoy an extra 15% OFF above ₹4,999, plus 10% OFF your first order.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/adidas-coupon-code',
  },

  openGraph: {
    title: 'Adidas Coupon Code: Save Up to 60% OFF + 10% OFF First Order | Sept 26',
    description:
      'Get the latest Adidas coupon code & promo code. Save up to 60% OFF, enjoy an extra 15% OFF above ₹4,999, plus 10% OFF your first order.',
    url: 'https://www.couponscrew.com/stores/adidas-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adidas Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Adidas Coupon Code: Save Up to 60% OFF + 10% OFF First Order | Sept 26',
    description:
      'Get the latest Adidas coupon code & promo code. Save up to 60% OFF, enjoy an extra 15% OFF above ₹4,999, plus 10% OFF your first order.',
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

const adidasOffers = ADIDAS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Adidas ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/adidas-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/adidas-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/adidas-coupon-code',
      name: 'Adidas Coupon Code: Save Up to 60% OFF + 10% OFF First Order | Sept 26',
      description: 'Get the latest Adidas coupon code & promo code. Save up to 60% OFF, enjoy an extra 15% OFF above ₹4,999, plus 10% OFF your first order.',
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
            name: 'Adidas Coupon Code',
            item: 'https://www.couponscrew.com/stores/adidas-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/adidas-coupon-code#brand',
      name: 'Adidas',
      url: 'https://www.adidas.com',
      sameAs: ['https://en.wikipedia.org/wiki/Adidas'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/adidas-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Adidas India accept more than one coupon code per order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Adidas India allows one promo code per order. If you have multiple codes, apply the one with the larger discount. Site-wide codes usually outperform category codes unless the category discount is significantly higher."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Adidas discount code on Outlet items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific code. Some Adidas discount codes exclude Outlet and sale products. The deal terms listed on this page for each code will confirm whether Outlet products are included."
      }
    },
    {
      "@type": "Question",
      "name": "Where exactly do I enter the Adidas promo code at checkout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After clicking Proceed to Checkout, look for the \"Have a promo code?\" or \"Apply discount code\" field on the right side of the order summary. Paste the code and click Apply — the updated price shows before you reach payment."
      }
    },
    {
      "@type": "Question",
      "name": "Do Adidas coupon codes have an expiry date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every Adidas coupon code has an end date. CouponsCrew removes expired codes from this page, but if a code stops working mid-session, check the deal terms here for the end date and look for an updated code on the same page."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Adidas coupon code with a sale price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. During EOSS and festive sales, Adidas India typically allows an additional code on top of the already-reduced price — but this depends on each code's terms. Codes that say \"new arrivals only\" or \"full-price items only\" won't stack with sale pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Are Adidas sneakers from the Outlet section covered by the return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adidas India's return policy on Outlet items can differ from its standard policy. Check the return window and conditions on the product page before purchasing — the standard return window may be shorter for Outlet stock."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use an Adidas coupon code on the Adidas app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Adidas promo codes that work on the Adidas India website also apply on the Adidas app at checkout. Use the same field in the app's order summary to apply the code."
      }
    },
    {
      "@type": "Question",
      "name": "Which Adidas shoes are best for daily running?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Adidas Ultraboost is the most versatile option for daily running — it handles easy and moderate-pace runs comfortably and doubles as an all-day shoe. For faster training or race days, the Adidas Adizero range is built specifically for performance running."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a student or first-time buyer discount on Adidas India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adidas India periodically runs new user offers for first-time purchases. These are typically listed on this page as a separate deal. If you haven't shopped from Adidas India before, check the New User section in the deals above before using a standard site-wide code."
      }
    },
    {
      "@type": "Question",
      "name": "How often does CouponsCrew update Adidas coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew checks and updates Adidas deals regularly. Codes that expire are removed, and new codes are added as they go live. Bookmarking this page means you always have access to the current working codes without searching elsewhere."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...adidasOffers,
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
        <AdidasStore />
      </Suspense>
    </>
  )
}
