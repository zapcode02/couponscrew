import type { Metadata } from 'next'
import { Suspense } from 'react'
import FlipkartStore from './_components/FlipkartStore'
import { FLIPKART_COUPONS } from './_components/flipkartCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Flipkart Coupon Code: Up to 88% Off Festival Deals',

  description:
    "Get the latest Flipkart coupon code and Flipkart discount code to save up to 88% OFF on luggage, smartphones, laptops, TVs, beauty products, and more.",

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
  },

  openGraph: {
    title: 'Flipkart Coupon Code: Up to 88% Off Festival Deals',
    description:
      "Get the latest Flipkart coupon code and Flipkart discount code to save up to 88% OFF on luggage, smartphones, laptops, TVs, beauty products, and more.",
    url: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flipkart Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Flipkart Coupon Code: Up to 88% Off Festival Deals',
    description:
      "Get the latest Flipkart coupon code and Flipkart discount code to save up to 88% OFF on luggage, smartphones, laptops, TVs, beauty products, and more.",
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

const flipkartOffers = FLIPKART_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Flipkart ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/flipkart-coupon-code#${coupon.id}`,
  price: '0',
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/flipkart-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
      name: 'Flipkart Coupon Code: Up to 88% Off Festival Deals',
      description: "Get the latest Flipkart coupon code and Flipkart discount code to save up to 88% OFF on luggage, smartphones, laptops, TVs, beauty products, and more.",
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
            name: 'Flipkart Coupon Code',
            item: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Flipkart)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/flipkart-coupon-code#brand',
      name: 'Flipkart',
      url: 'https://www.flipkart.com',
      sameAs: ['https://en.wikipedia.org/wiki/Flipkart'],
    },

    // FAQPage — matches the visible FAQ accordion in FlipkartStore.tsx verbatim.
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/flipkart-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use a Flipkart coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browse verified codes here on Couponscrew, copy your preferred code by clicking \"Copy Code\", and paste it into the promo code field during checkout on the Flipkart website or app. If it is a deal, simply click \"Visit Flipkart\" to get the discount auto-applied."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes on Flipkart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, Flipkart only allows one promotional code per order. You can often combine a coupon code with automatic sitewide promotions or select bank card offers — check the terms on each code before applying."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Flipkart coupon code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the terms listed with each code on Couponscrew before applying."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the best Flipkart offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes."
      }
    }
  ]
},
    // Offer Schema (one per placeholder deal card — replace FLIPKART_COUPONS
    // with real data before this page is linked/indexed)
    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/flipkart-coupon-code#offerlist',
      name: 'Flipkart Coupon Codes & Offers',
      numberOfItems: flipkartOffers.length,
      itemListElement: flipkartOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    ...flipkartOffers,
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
        <FlipkartStore />
      </Suspense>
    </>
  )
}