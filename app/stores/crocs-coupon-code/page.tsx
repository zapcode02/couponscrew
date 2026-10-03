import type { Metadata } from 'next'
import { Suspense } from 'react'
import CrocsStore from './_components/CrocsStore'
import { CROCS_COUPONS } from './_components/crocsCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Crocs Coupon Code – 60% OFF Jibbitz + Extra 10% OFF | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Use the latest Crocs Coupon Code and Crocs Discount Code to get 60% OFF Hashtag Jibbitz and an extra 10% OFF selected Crocs styles when using a discount code. Shop now.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/crocs-coupon-code',
  },

  openGraph: {
    title: 'Crocs Coupon Code – 60% OFF Jibbitz + Extra 10% OFF | Sept 2026',
    description:
      'Use the latest Crocs Coupon Code and Crocs Discount Code to get 60% OFF Hashtag Jibbitz and an extra 10% OFF selected Crocs styles when using a discount code. Shop now.',
    url: 'https://www.couponscrew.com/stores/crocs-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crocs Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Crocs Coupon Code – 60% OFF Jibbitz + Extra 10% OFF | Sept 2026',
    description:
      'Use the latest Crocs Coupon Code and Crocs Discount Code to get 60% OFF Hashtag Jibbitz and an extra 10% OFF selected Crocs styles when using a discount code. Shop now.',
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

const crocsOffers = CROCS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Crocs ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/crocs-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/crocs-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/crocs-coupon-code',
      name: 'Crocs Coupon Code – 60% OFF Jibbitz + Extra 10% OFF | Sept 2026',
      description: 'Use the latest Crocs Coupon Code and Crocs Discount Code to get 60% OFF Hashtag Jibbitz and an extra 10% OFF selected Crocs styles when using a discount code. Shop now.',
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
            name: 'Crocs Coupon Code',
            item: 'https://www.couponscrew.com/stores/crocs-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Crocs)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/crocs-coupon-code#brand',
      name: 'Crocs',
      url: 'https://www.crocs.in',
      sameAs: ['https://en.wikipedia.org/wiki/Crocs'],
    },

    // FAQPage Schema (AEO + AI Search — mirrors this page's own visible FAQ accordion, full parity)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/crocs-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Crocs coupon code available right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best active Crocs coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first order, while Classic Clogs and Jibbitz charm bundles regularly carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find my correct Crocs size?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crocs Classic Clogs run true to size for most wearers but have a slightly roomier fit than standard sneakers, so many buyers size down by half a size if they prefer a snugger fit. Crocs.in provides a size guide with foot-length measurements on every product page — measuring your foot length in centimetres and comparing it against the chart is the most reliable method, especially since sizing can vary slightly between the Classic Clog, sandals, and boots ranges."
      }
    },
    {
      "@type": "Question",
      "name": "Are Jibbitz charms compatible with all Crocs styles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jibbitz charms are designed for the perforated holes found on Classic Clogs and most clog-style Crocs, including kids' sizes. They generally do not fit sandals, flip-flops, or fully closed styles without the classic ventilation holes, so it is worth checking a specific style's compatibility before buying charms as a gift for a non-clog style."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Crocs Club loyalty programme work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crocs Club is a free loyalty programme that rewards members with points on every purchase, a birthday-month discount, and early access to new colourway drops and collaborations. Points can be redeemed against future orders, and members typically get notified first about limited-edition releases before they sell out — a genuine advantage during high-demand collab launches."
      }
    },
    {
      "@type": "Question",
      "name": "What is Crocs' return and exchange policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crocs.in typically offers a 30-day return and exchange window on unworn products in original packaging, provided the tags are intact. Sale and clearance items may carry a shorter or non-returnable policy, which is always stated clearly on the product page before checkout, so it is worth confirming return eligibility before buying clearance-priced clogs."
      }
    },
    {
      "@type": "Question",
      "name": "Can adults and kids wear the same size range?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — Crocs uses separate size charts for kids and adults, with kids sizing typically running up to around a US youth size 6 before transitioning into adult sizing. Some older kids and petite adults may find overlap in the largest kids sizes and smallest adult sizes, but it is best to check the specific size chart for the style you are buying rather than assuming a direct crossover."
      }
    },
    {
      "@type": "Question",
      "name": "When do the best Crocs collaboration drops happen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crocs regularly partners with celebrities, artists, and other brands on limited-edition colourways and designs, with major drops often timed around festive seasons and pop-culture moments. These collabs tend to sell out quickly, so Crocs Club members with early-access notifications generally have the best chance of securing a pair before general release."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Crocs coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apply your CouponsCrew Crocs offer at checkout, then pay with an eligible ICICI or SBI card to unlock an additional instant discount. This stacks on top of any sitewide sale or Crocs Club birthday discount, giving you multiple layers of savings on the same order."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/crocs-coupon-code#offerlist',
      name: 'Crocs Coupon Codes & Offers',
      numberOfItems: crocsOffers.length,
      itemListElement: crocsOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...crocsOffers,
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
        <CrocsStore />
      </Suspense>
    </>
  )
}
