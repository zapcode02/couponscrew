import type { Metadata } from 'next'
import { Suspense } from 'react'
import NikeStore from './_components/NikeStore'
import { NIKE_COUPONS } from './_components/nikeCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Nike Coupon Code: Up to 50% Off Sneakers + Up to 35% Off on Sportswear | Sept 26',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    "Find the latest Nike coupon code and promo code to save up to 50% on sneakers and up to 35% on Nike kids' shoes & sportswear. Explore verified Nike deals today.",

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/nike-coupon-code',
  },

  openGraph: {
    title: 'Nike Coupon Code: Up to 50% Off Sneakers + Up to 35% Off on Sportswear | Sept 26',
    description:
      "Find the latest Nike coupon code and promo code to save up to 50% on sneakers and up to 35% on Nike kids' shoes & sportswear. Explore verified Nike deals today.",
    url: 'https://www.couponscrew.com/stores/nike-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nike Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nike Coupon Code: Up to 50% Off Sneakers + Up to 35% Off on Sportswear | Sept 26',
    description:
      "Find the latest Nike coupon code and promo code to save up to 50% on sneakers and up to 35% on Nike kids' shoes & sportswear. Explore verified Nike deals today.",
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

const nikeOffers = NIKE_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Nike ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/nike-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/nike-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/nike-coupon-code',
      name: 'Nike Coupon Code: Up to 50% Off Sneakers + Up to 35% Off on Sportswear | Sept 26',
      description: "Find the latest Nike coupon code and promo code to save up to 50% on sneakers and up to 35% on Nike kids' shoes & sportswear. Explore verified Nike deals today.",
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
            name: 'Nike Coupon Code',
            item: 'https://www.couponscrew.com/stores/nike-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/nike-coupon-code#brand',
      name: 'Nike',
      url: 'https://www.nike.com',
      sameAs: ['https://en.wikipedia.org/wiki/Nike,_Inc.'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/nike-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Nike India allow more than one promo code per order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nike India accepts one promo code per order. Use the code with the higher discount value if you have more than one."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Nike discount code on Jordan Brand products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific code. Some site-wide Nike discount codes exclude Jordan Brand. Check the terms on each deal on this page before adding Jordan products to your cart."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I enter the Nike promo code at checkout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After clicking Proceed to Checkout, look for the \"Enter Promo Code\" field in the order summary on the right side of the page. Paste the code and click Apply."
      }
    },
    {
      "@type": "Question",
      "name": "Do Nike coupon codes expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every code has an end date. CouponsCrew updates this page regularly — expired codes are removed and new ones are added as they go live."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack a Nike coupon code with a Nike Sale price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes — if the code terms don't say \"full-price items only.\" During major sale events, Nike India typically allows an additional code on top of already-reduced prices. Confirm by reading the deal terms here."
      }
    },
    {
      "@type": "Question",
      "name": "What is the return window on Nike India orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nike India offers a 30-day return window. Items must be in original packaging and resaleable condition. Nike+ members get free returns; standard orders may incur a return shipping fee."
      }
    },
    {
      "@type": "Question",
      "name": "Are Nike Dunk Low and Air Jordan 1 available with coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both the Dunk Low and Air Jordan 1 are regularly available on Nike India. Availability of coupon codes on these products depends on whether the specific code includes lifestyle and Jordan Brand footwear — check the deal terms here."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Nike Alphafly and Nike Pegasus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Pegasus is a daily training shoe — versatile, well-cushioned, built for regular mileage. The Alphafly is a race-day performance shoe with ZoomX foam and a carbon plate, designed for marathon pace. If you're training regularly, start with the Pegasus. If you're racing, look at the Alphafly."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Nike App free to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nike Membership and the Nike App are free. Members get early access to releases, birthday rewards, member-only codes, and free shipping on eligible orders."
      }
    },
    {
      "@type": "Question",
      "name": "How often does CouponsCrew update Nike coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew checks and updates Nike deals regularly. Expired codes are removed, and new codes are added as they go live on Nike India. Bookmark this page for the most current working codes."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/nike-coupon-code#offerlist',
      name: 'Nike Coupon Codes & Offers',
      numberOfItems: nikeOffers.length,
      itemListElement: nikeOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...nikeOffers,
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
        <NikeStore />
      </Suspense>
    </>
  )
}
