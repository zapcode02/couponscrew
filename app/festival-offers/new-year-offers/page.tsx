import type { Metadata } from 'next'
import NewYearOffers from './_components/NewYearOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for New Year Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'New Year Offers 2027 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this New Year 2027 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'New Year offers 2027',
    'New Year discount coupons',
    'New Year sale deals',
    'Amazon New Year sale coupons',
    'Flipkart New Year sale',
    'Myntra New Year fashion sale',
    'Nykaa New Year beauty offers',
    'HDFC ICICI SBI bank New Year offers',
    'New Year shopping coupons India',
    'CouponsCrew New Year deals',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/new-year-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/new-year-offers/',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'New Year Offers 2027 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this New Year 2027 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/new-year-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/new-year-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'New Year Offers & Festive Discounts 2027 — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'New Year Offers 2027 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description:
      'Save big this New Year 2027 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/new-year-offers.jpg'],
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
// JSON-LD Schemas
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/festival-offers/new-year-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/new-year-offers/',
      'name': 'New Year Offers 2027 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this New Year 2027 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      },
      'datePublished': '2026-09-22',
      'dateModified': '2026-09-22'
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/festival-offers/new-year-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/new-year-offers/',
      'name': 'New Year Offers 2027 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this New Year 2027 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'datePublished': '2026-09-22',
      'dateModified': '2026-09-22',
      'publisher': {
        '@type': 'Organization',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      }
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.couponscrew.com/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Festival Offers', 'item': 'https://www.couponscrew.com/festival-offers/' },
        { '@type': 'ListItem', 'position': 3, 'name': 'New Year Offers', 'item': 'https://www.couponscrew.com/festival-offers/new-year-offers/' }
      ]
    },
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When does the New Year sale 2026 start in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most platforms start their New Year sales from December 26. Amazon and Flipkart run Year End Sales from December 26 through January 1–3. Myntra's EORS typically starts December 26–27. Food delivery apps start New Year Eve offers from December 30."
      }
    },
    {
      "@type": "Question",
      "name": "Is the New Year sale better than the Diwali sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not in terms of scale — Diwali sales are bigger. But New Year sales have more genuine clearance pricing, especially on electronics and fashion. If you missed a deal during Diwali, the New Year sale is often the next best chance."
      }
    },
    {
      "@type": "Question",
      "name": "Which platform has the best new year offers on smartphones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipkart tends to have better smartphone deals during this period, particularly for Indian brands. Amazon is stronger on Apple products and Samsung flagships. Compare prices on both before buying."
      }
    },
    {
      "@type": "Question",
      "name": "Are there new year offers on gym memberships and fitness products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cult.fit, Gold's Gym, and fitness equipment brands all run January-start offers in late December. Online, Amazon and Flipkart have deals on home gym equipment, protein supplements, and fitness trackers. Cult.fit specifically runs \"New Year Challenge\" membership deals."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use CouponsCrew codes during the New Year sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — CouponsCrew maintains updated, verified coupon codes for all major platforms during the New Year sale window. Stacking a coupon code with a bank card offer and the sale price is how you get the best effective price."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best things to buy during the New Year sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electronics (especially laptops and older-generation phones), winter fashion clearance, fitness and health products, kitchen appliances, and OTT subscriptions are the best categories for genuine deals."
      }
    },
    {
      "@type": "Question",
      "name": "Do Zomato and Swiggy have special New Year Eve offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both platforms run flat-off promo codes and cashback offers on December 31. Restaurants offer special New Year Eve menus and party platters. Order early to avoid the peak-hour delays after 9 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Are exchange offers available during the New Year sale on Flipkart and Amazon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both platforms have phone and laptop exchange programs active during their Year End Sales. Exchange values during this window are close to festive-season levels — check the exact offer on the product page before ordering."
      }
    },
    {
      "@type": "Question",
      "name": "Is Myntra's New Year EORS worth waiting for if I missed the mid-year sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The December EORS is generally stronger on winter and formal wear because it is an end-of-season clearance. The mid-year EORS is better for summer fashion and beachwear. If you need jackets, woollens, or party wear, December EORS is the right one."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get early access to Myntra EORS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sign up for Myntra Insider — it is free to join. Insider members get 24-hour early access before the EORS opens to everyone. Given that popular sizes in certain brands sell out on Day 1, this head start matters."
      }
    }
  ]
}
  ]
}

export default function NewYearOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewYearOffers />
    </>
  )
}
