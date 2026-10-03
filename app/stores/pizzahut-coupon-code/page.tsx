import type { Metadata } from 'next'
import { Suspense } from 'react'
import PizzaHutStore from './_components/PizzaHutStore'
import { PIZZAHUT_COUPONS } from './_components/pizzahutCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Pizza Hut Coupon Code – ₹125 OFF & Buy 1 Get 3 Free | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Use the latest Pizza Hut Coupon Code and Pizza Hut Discount Code to get ₹125 OFF orders above ₹500 and Buy 1 Pizza, Get 3 Free. Enjoy verified Pizza Hut deals. Order now.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/pizzahut-coupon-code',
  },

  openGraph: {
    title: 'Pizza Hut Coupon Code – ₹125 OFF & Buy 1 Get 3 Free | Sept 2026',
    description:
      'Use the latest Pizza Hut Coupon Code and Pizza Hut Discount Code to get ₹125 OFF orders above ₹500 and Buy 1 Pizza, Get 3 Free. Enjoy verified Pizza Hut deals. Order now.',
    url: 'https://www.couponscrew.com/stores/pizzahut-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Hut Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Hut Coupon Code – ₹125 OFF & Buy 1 Get 3 Free | Sept 2026',
    description:
      'Use the latest Pizza Hut Coupon Code and Pizza Hut Discount Code to get ₹125 OFF orders above ₹500 and Buy 1 Pizza, Get 3 Free. Enjoy verified Pizza Hut deals. Order now.',
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

const pizzahutOffers = PIZZAHUT_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Pizza Hut ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/pizzahut-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/pizzahut-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/pizzahut-coupon-code',
      name: 'Pizza Hut Coupon Code – ₹125 OFF & Buy 1 Get 3 Free | Sept 2026',
      description: 'Use the latest Pizza Hut Coupon Code and Pizza Hut Discount Code to get ₹125 OFF orders above ₹500 and Buy 1 Pizza, Get 3 Free. Enjoy verified Pizza Hut deals. Order now.',
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
            name: 'Pizza Hut Coupon Code',
            item: 'https://www.couponscrew.com/stores/pizzahut-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Pizza Hut)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/pizzahut-coupon-code#brand',
      name: 'Pizza Hut',
      url: 'https://www.pizzahut.co.in',
      sameAs: ['https://en.wikipedia.org/wiki/Pizza_Hut'],
    },

    // FAQPage Schema (AEO + AI Search — mirrors this page's own visible FAQ accordion, full parity)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/pizzahut-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Pizza Hut coupon code available right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best active Pizza Hut coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first app order, while WOW Box combos and Buy 1 Get 1 pizza offers regularly carry the deepest value. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order value for free delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pizza Hut typically offers free delivery on app and website orders above a minimum cart value, commonly around ₹499, though this threshold can vary by city and active promotion. The exact minimum for your delivery address is always shown at checkout before you confirm payment, so it is worth checking there if you are close to the threshold."
      }
    },
    {
      "@type": "Question",
      "name": "Do combo and bundle deals have exclusions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WOW Box and other combo deals are typically built around specific pizza sizes, crusts, or side combinations, and substituting items outside the set combo can affect the final price or void the bundle discount. The exact inclusions for each combo are listed on the order page before you add it to your cart, so it is worth reviewing before assuming full customisation is included at the bundle price."
      }
    },
    {
      "@type": "Question",
      "name": "Are app-exclusive deals different from dine-in offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, generally. Delivery and app-ordering promotions — like new-user discounts and WOW Box pricing — are usually separate from dine-in bill discounts available at physical outlets. Some dine-in offers require showing the deal on the app at the table, so it is worth confirming with staff whether an online promo code applies to an in-restaurant order before assuming it carries over automatically."
      }
    },
    {
      "@type": "Question",
      "name": "What is Pizza Hut's cancellation and refund policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Orders can typically be cancelled within a short window immediately after placing them, before the kitchen begins preparation — usually just a few minutes. Once preparation has started, cancellation is generally not possible given the perishable nature of the order. If an order arrives incorrect or damaged, Pizza Hut customer support can be contacted through the app for a replacement or refund review."
      }
    },
    {
      "@type": "Question",
      "name": "How does Pizza Hut handle bulk or party orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pizza Hut accepts bulk orders for parties and corporate gatherings, often with a discount tier applied once the order crosses a certain value or pizza count. Advance notice is generally recommended for very large orders to ensure the outlet can prepare everything within your requested delivery or pickup window — checking with the specific outlet ahead of a large event is worth doing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Pizza Hut coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apply your CouponsCrew Pizza Hut offer at checkout, then pay with an eligible HDFC or Axis Bank card to unlock an additional instant discount. This stacks on top of any active combo pricing or sitewide promotion, giving you multiple layers of savings on the same order."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/pizzahut-coupon-code#offerlist',
      name: 'Pizza Hut Coupon Codes & Offers',
      numberOfItems: pizzahutOffers.length,
      itemListElement: pizzahutOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...pizzahutOffers,
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
        <PizzaHutStore />
      </Suspense>
    </>
  )
}
