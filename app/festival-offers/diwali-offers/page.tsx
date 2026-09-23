import type { Metadata } from 'next'
import DiwaliOffers from './_components/DiwaliOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Diwali Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Diwali offers 2026',
    'Diwali discount coupons',
    'Diwali sale deals',
    'Amazon Diwali sale coupons',
    'Flipkart Big Billion Days Diwali',
    'Myntra Diwali fashion sale',
    'Nykaa Diwali beauty offers',
    'HDFC ICICI SBI bank Diwali offers',
    'festive shopping coupons India',
    'CouponsCrew Diwali deals',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/diwali-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Diwali Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Diwali Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description:
      'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/diwali-offers.jpg'],
  },

  // ── Robots ─────────────────────────────────
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

  // ── Geo Tags ───────────────────────────────
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (CollectionPage + BreadcrumbList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/festival-offers/diwali-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
      'name': 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      },
      'datePublished': '2026-09-19',
      'dateModified': '2026-09-19'
    },

    // 2. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
      'name': 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'datePublished': '2026-09-19',
      'dateModified': '2026-09-19',
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
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.couponscrew.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Festival Offers',
          'item': 'https://www.couponscrew.com/festival-offers/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Diwali Offers',
          'item': 'https://www.couponscrew.com/festival-offers/diwali-offers/'
        }
      ]
    },

    // 4. FAQPage Schema
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When do Diwali offers 2026 start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most major diwali offers start one to two weeks before Diwali day. In 2026, Diwali falls on October 20. Expect sale dates to begin around October 7–10 for early bird deals, with main festival sales from October 13–20."
      }
    },
    {
      "@type": "Question",
      "name": "Which is better for diwali shopping — Flipkart or Amazon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are strong. For electronics and mobile phones, compare prices on both — the same phone can differ by ₹500–₹2,000 depending on the day. For home decor and diwali decoration items, Amazon has a broader catalogue. For fashion, Flipkart (and Myntra) is stronger."
      }
    },
    {
      "@type": "Question",
      "name": "Are there special offers for diwali gifts and gift hampers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both Flipkart and Amazon have dedicated gift and hamper sections during diwali. You can filter by budget (under ₹500, ₹500–₹2,000, ₹2,000+) and by recipient type. Corporate bulk orders come with additional pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best diwali decoration items to buy online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "String lights (LED fairy lights), diwali diya sets, floor rangoli stencils, paper lanterns, and decorative torans are the most popular. Pepperfry, Amazon, and Flipkart all carry these. Order at least five to seven days before Diwali to avoid delivery delays."
      }
    },
    {
      "@type": "Question",
      "name": "Are diwali diya and lamp deals available online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Terracotta diyas, clay lamp sets, brass diwali lamps, and decorative diya sets are available from ₹99 to ₹2,000+ depending on the material and quantity. Flipkart and Amazon both carry these, and local artisan brands are also listed on these platforms now."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make sure my diwali order arrives before the festival?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Order at least a week in advance for most items. For diwali decoration items and diwali lights specifically, stock can run out close to the day. Prime members on Amazon get faster delivery guarantees. Flipkart Plus members also get priority shipping."
      }
    },
    {
      "@type": "Question",
      "name": "Is it worth buying a phone during diwali offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually yes — diwali is one of the two best times to buy a phone in India (the other being during Republic Day sales in January). Prices are at their lowest, exchange bonuses are higher, and no-cost EMI options are available across more models."
      }
    },
    {
      "@type": "Question",
      "name": "How do I share diwali wishes with discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several brand apps and greeting card services run discount offers tied to referral codes shared via diwali greetings. Sending a happy diwali wishes message with a discount code for a shared app — like Amazon Pay or Paytm — is one way to combine diwali celebration with practical gifting."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any risks to buying during diwali sale week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Main risk is fake products from unverified sellers. Stick to sold-by Amazon or sold-by Flipkart listings for electronics. For branded goods, check seller ratings and look for \"Fulfilled by Flipkart\" or \"Fulfilled by Amazon\" tags."
      }
    },
    {
      "@type": "Question",
      "name": "Do stores offer special no-cost EMI options during diwali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No-cost EMI on 3, 6, 9, and 12 months is widely available during diwali offers. Bajaj Finserv, HDFC Credit Card, and store credit cards typically feature. This is especially useful for appliances and high-end phones above ₹30,000."
      }
    }
  ]
}
  ]
}

export default function DiwaliOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiwaliOffers />
    </>
  )
}
