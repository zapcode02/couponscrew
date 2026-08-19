import type { Metadata } from 'next'
import { Suspense } from 'react'
import MyntraStore from './_components/MyntraStore'
import { MYNTRA_COUPONS } from './_components/myntraCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Myntra Coupons code- Get Up to 90% OFF + Extra ₹300 OFF | Aug 2026  ',

  description:
    '**Save more with verified Myntra coupon codes, discount codes, and exclusive offers. Get up to 90% OFF sitewide, ₹300 OFF for new users, 25% OFF first orders, plus bank cashback and fashion deals on top brands.**',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/myntra-coupon-code',
  },

  openGraph: {
    title: 'Myntra Coupons code- Get Up to 90% OFF + Extra ₹300 OFF | Aug 2026  ',
    description:
      '**Save more with verified Myntra coupon codes, discount codes, and exclusive offers. Get up to 90% OFF sitewide, ₹300 OFF for new users, 25% OFF first orders, plus bank cashback and fashion deals on top brands.**',
    url: 'https://www.couponscrew.com/stores/myntra-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Myntra Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Myntra Coupons code- Get Up to 90% OFF + Extra ₹300 OFF | Aug 2026  ',
    description:
      '**Save more with verified Myntra coupon codes, discount codes, and exclusive offers. Get up to 90% OFF sitewide, ₹300 OFF for new users, 25% OFF first orders, plus bank cashback and fashion deals on top brands.**',
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

const myntraOffers = MYNTRA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Myntra ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/myntra-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/myntra-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/myntra-coupon-code',
      name: 'Myntra Coupons code- Get Up to 90% OFF + Extra ₹300 OFF | Aug 2026  ',
      description: '**Save more with verified Myntra coupon codes, discount codes, and exclusive offers. Get up to 90% OFF sitewide, ₹300 OFF for new users, 25% OFF first orders, plus bank cashback and fashion deals on top brands.**',
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
            name: 'Myntra Coupon Code',
            item: 'https://www.couponscrew.com/stores/myntra-coupon-code',
          },
        ],
      },
    },

    // FAQPage — only the 3 questions with real (non-placeholder) answers.
    // The 4th visible FAQ item ("Where can I find the best Myntra offers?")
    // has a [PLACEHOLDER] answer and is deliberately excluded from schema
    // until it has real content, so JSON-LD never claims more than the page
    // actually says.
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/myntra-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working Myntra coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew verifies every Myntra coupon code on this page before publishing. Click \"Show Code\" on any active deal card — the code is copied to your clipboard and you are redirected to Myntra. Codes are checked daily and expired ones are removed promptly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Myntra discount code on sale items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the specific promotion. Some Myntra discount codes apply to already-discounted sale items, while others exclude products already marked down by more than a certain percentage. The deal card on CouponsCrew notes this condition where applicable."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Myntra promo code showing as invalid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reasons are: (a) your cart value is below the minimum order threshold, (b) the items in your cart are in an excluded category, (c) the code has expired since you last visited this page. Refresh the CouponsCrew Myntra page and try the next active code."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a Myntra voucher code for first-time users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Myntra regularly runs first-order discount offers for new accounts. These are typically flat discounts (₹150–300 off) or percentage-based offers (10–20% off your first purchase). CouponsCrew lists all currently active new-user codes in the \"New Users\" filter on this page."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack a Myntra coupon with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes. Myntra's bank card offers (HDFC, ICICI, Axis, SBI, Kotak) are applied at the payment step and are frequently stackable on top of a promo code discount. Check the terms of the specific bank offer — some have their own minimum cart requirements separate from the coupon."
      }
    },
    {
      "@type": "Question",
      "name": "When is the next Myntra EORS (End of Reason Sale)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based on Myntra's historical sale calendar, the next EORS Winter Edition is expected in December 2026. CouponsCrew will publish a dedicated EORS page with early-access codes, bank offer previews, and category-wise deal breakdowns ahead of the event — subscribe to our deal alerts to get notified."
      }
    },
    {
      "@type": "Question",
      "name": "Does Myntra have deals on beauty products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Myntra beauty has grown into a significant category with regular app-exclusive discounts, bundle deals, and brand-specific sales on skincare, makeup, haircare, and fragrances. Deals on beauty products are tracked separately in the Beauty section of this page."
      }
    },
    {
      "@type": "Question",
      "name": "Are Myntra gift cards eligible for coupon discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gift card purchases are generally excluded from standard promo code discounts. However, Myntra periodically runs standalone gift card promotions — such as bonus credits on top-up — which CouponsCrew tracks and lists under the Gift Cards section of this page."
      }
    }
  ]
},

    // Offer Schema (one per placeholder deal card — replace MYNTRA_COUPONS
    // with real data before this page is linked/indexed)
    ...myntraOffers,
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
        <MyntraStore />
      </Suspense>
    </>
  )
}
