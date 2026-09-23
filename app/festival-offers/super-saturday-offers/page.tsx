import type { Metadata } from 'next'
import SuperSaturdayOffers from './_components/SuperSaturdayOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Super Saturday Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Super Saturday Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Super Saturday 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Super Saturday offers 2026',
    'Super Saturday discount coupons',
    'Super Saturday sale deals',
    'Amazon Super Saturday sale coupons',
    'Flipkart Super Saturday sale',
    'Super Saturday shopping coupons India',
    'CouponsCrew Super Saturday deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
    },
  },

  openGraph: {
    title: 'Super Saturday Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Super Saturday 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/super-saturday-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Super Saturday Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Super Saturday Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description: 'Save big this Super Saturday 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/super-saturday-offers.jpg'],
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

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + CollectionPage + BreadcrumbList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
      'name': 'Super Saturday Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Super Saturday 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      },
      'datePublished': '2026-09-23',
      'dateModified': '2026-09-23'
    },

    // 2. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/',
      'name': 'Super Saturday Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Super Saturday 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'datePublished': '2026-09-23',
      'dateModified': '2026-09-23',
      'publisher': {
        '@type': 'Organization',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      }
    },

    // 3. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.couponscrew.com/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Festival Offers', 'item': 'https://www.couponscrew.com/festival-offers/' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Super Saturday Offers', 'item': 'https://www.couponscrew.com/festival-offers/super-saturday-offers/' }
      ]
    },

    // 4. FAQPage Schema (placeholder — to be updated manually)
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Super Saturday 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Super Saturday 2026 is December 19, 2026 — the last Saturday before Christmas on December 25."
      }
    },
    {
      "@type": "Question",
      "name": "Is Super Saturday better than Black Friday for Christmas shopping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends what you are buying. Black Friday has more dramatic headline discounts. Super Saturday has better stock availability, and retailers are genuinely motivated to clear inventory before year-end. For toys, fashion clearance, and last-minute electronics, Super Saturday is competitive."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still get gifts delivered before Christmas if I order on Super Saturday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With Amazon Prime same-day or next-day delivery in eligible cities — yes. Walmart+ next-day also works for December 19–21 orders. Standard shipping is a risk by this point. In-store pickup is the safest option if you need the item by December 25."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best things to buy on Super Saturday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toys, electronics, headphones, gift cards, clothing clearance, and food gift baskets are the strongest Super Saturday categories."
      }
    },
    {
      "@type": "Question",
      "name": "Does Amazon participate in Super Saturday deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amazon does not brand it \"Super Saturday,\" but its Last-Minute Gifts section and Christmas Deals page both run aggressively in the week of December 19. Amazon Warehouse deals also spike during this period."
      }
    },
    {
      "@type": "Question",
      "name": "Is Super Saturday good for buying electronics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Best Buy in particular runs strong Super Saturday electronics deals. TVs, laptops, headphones, and gaming accessories are all worth checking on December 19."
      }
    },
    {
      "@type": "Question",
      "name": "Are Macy's and Kohl's worth visiting on Super Saturday?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Macy's is good for fragrance sets, jewellery, and fashion gifts. Kohl's is strong for clothing, kitchen appliances, and toys — especially when stacking Kohl's Cash."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best way to avoid Super Saturday crowds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shop online with in-store pickup — you get the in-store pricing and availability without physically fighting through the queues. Target's Drive Up and Walmart's curbside pickup are both excellent for this."
      }
    },
    {
      "@type": "Question",
      "name": "Do gift cards have Super Saturday deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some retailers run \"buy $X, get $Y bonus\" gift card promotions on Super Saturday. Best Buy, Starbucks, and Bath & Body Works have run bonus gift card offers in past years. Check their websites from December 15 onwards."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get the latest Super Saturday coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew updates verified Super Saturday promo codes for Amazon, Walmart, Target, Kohl's, Macy's, Best Buy, and Bath & Body Works from December 16 onwards. All codes are tested before publishing."
      }
    }
  ]
}
  ]
}

export default function SuperSaturdayOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SuperSaturdayOffers />
    </>
  )
}
