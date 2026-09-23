import type { Metadata } from 'next'
import ThanksgivingOffers from './_components/ThanksgivingOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Thanksgiving Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Thanksgiving Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Thanksgiving 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Thanksgiving offers 2026',
    'Thanksgiving discount coupons',
    'Thanksgiving sale deals',
    'Amazon Thanksgiving sale coupons',
    'Flipkart Thanksgiving sale',
    'Thanksgiving shopping coupons India',
    'CouponsCrew Thanksgiving deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
    },
  },

  openGraph: {
    title: 'Thanksgiving Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Thanksgiving 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/thanksgiving-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Thanksgiving Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Thanksgiving Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description: 'Save big this Thanksgiving 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/thanksgiving-offers.jpg'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
      'name': 'Thanksgiving Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Thanksgiving 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
      '@id': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/',
      'name': 'Thanksgiving Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Thanksgiving 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
        { '@type': 'ListItem', 'position': 3, 'name': 'Thanksgiving Offers', 'item': 'https://www.couponscrew.com/festival-offers/thanksgiving-offers/' }
      ]
    },

    // 4. FAQPage Schema (placeholder — to be updated manually)
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Thanksgiving 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thanksgiving 2026 falls on Thursday, November 26, 2026. It is always the fourth Thursday of November."
      }
    },
    {
      "@type": "Question",
      "name": "What is Thanksgiving — thanksgiving what is it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thanksgiving is a national holiday in the United States celebrated on the fourth Thursday of November. It originated as a harvest celebration and is now primarily a family gathering centred around a large thanksgiving dinner, particularly a turkey dinner with traditional sides and desserts."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best thanksgiving gifts to bring as a guest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wine, a dessert, a quality candle, or a food gift basket are the most appropriate thanksgiving gifts. Harry & David and Amazon both have curated gift options for Thanksgiving hosts."
      }
    },
    {
      "@type": "Question",
      "name": "What is traditional thanksgiving food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The classic thanksgiving food spread includes roast turkey, mashed potatoes and gravy, stuffing/dressing, green bean casserole, cranberry sauce, sweet potatoes, dinner rolls, and pumpkin pie for dessert."
      }
    },
    {
      "@type": "Question",
      "name": "Are Black Friday deals available on Thanksgiving Day itself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many retailers — Amazon, Walmart, and Target — now start best black friday shopping deals on Thanksgiving Thursday or even earlier in the week. The term \"Gray Thursday\" refers to Thanksgiving Day shopping."
      }
    },
    {
      "@type": "Question",
      "name": "What are some interesting thanksgiving facts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Americans eat approximately 46 million turkeys on Thanksgiving. The Macy's Thanksgiving Day Parade has run since 1924. The Presidential Turkey Pardon started formally in 1989. NFL games have been played on Thanksgiving since 1920. See History.com's Thanksgiving facts for more."
      }
    },
    {
      "@type": "Question",
      "name": "What is a prayer of thanks for Thanksgiving?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prayer of thanks is a short expression of gratitude said before the Thanksgiving meal. It can be religious or secular — the common thread is acknowledging family, health, food, and the year that passed. Many families have a tradition of going around the table and having everyone name one thing they are grateful for."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the best black friday buys starting on Thanksgiving?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amazon and Walmart start their best black friday buys in Thanksgiving week. Target Circle members get early access on Thanksgiving Day itself. CouponsCrew will have a live-updated list of the best deals starting November 23."
      }
    },
    {
      "@type": "Question",
      "name": "Is Thanksgiving celebrated outside the US?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada has its own Thanksgiving on the second Monday of October. The US version on the fourth Thursday of November is the internationally recognised one. Some other countries have harvest festival equivalents, but Thanksgiving as a specific holiday is primarily American and Canadian."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Thanksgiving promo codes that actually work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew maintains verified, tested Thanksgiving promo codes for Amazon, Walmart, Target, Williams-Sonoma, and Harry & David throughout November. Check the individual store pages here before checkout."
      }
    }
  ]
}
  ]
}

export default function ThanksgivingOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThanksgivingOffers />
    </>
  )
}
