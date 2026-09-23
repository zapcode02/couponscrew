import type { Metadata } from 'next'
import HalloweenOffers from './_components/HalloweenOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Halloween Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Halloween Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Halloween 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Halloween offers 2026',
    'Halloween discount coupons',
    'Halloween sale deals',
    'Amazon Halloween sale coupons',
    'Flipkart Halloween sale',
    'Halloween costume deals India',
    'Halloween shopping coupons India',
    'CouponsCrew Halloween deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/halloween-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/halloween-offers/',
    },
  },

  openGraph: {
    title: 'Halloween Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Halloween 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/halloween-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/halloween-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Halloween Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Halloween Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description: 'Save big this Halloween 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/halloween-offers.jpg'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/halloween-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/halloween-offers/',
      'name': 'Halloween Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Halloween 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
      '@id': 'https://www.couponscrew.com/festival-offers/halloween-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/halloween-offers/',
      'name': 'Halloween Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Halloween 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
        { '@type': 'ListItem', 'position': 3, 'name': 'Halloween Offers', 'item': 'https://www.couponscrew.com/festival-offers/halloween-offers/' }
      ]
    },

    // 4. FAQPage Schema (placeholder — to be updated manually)
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Halloween 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Halloween is always October 31. In 2026, that falls on a Saturday — which means it is likely to be one of the bigger Halloween celebration years since weekends allow more parties, events, and trick-or-treating time."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the best place to buy halloween costumes online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amazon has the widest selection and fastest delivery for Prime members. Target has better quality mid-range costumes. Spirit Halloween is best for professional or licensed character costumes in-store."
      }
    },
    {
      "@type": "Question",
      "name": "What are some easy halloween costumes that do not require much buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ghost (white sheet), witch (black clothes + hat), skeleton (black clothes + face paint), vampire (black clothes + halloween makeup), and cat (all black + ears headband) are classic easy halloween costumes that need minimal shopping."
      }
    },
    {
      "@type": "Question",
      "name": "What are good pumpkin carving ideas for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Classic pumpkin faces — triangle eyes, jagged mouth — are the easiest start. Scary pumpkin carving ideas like hollow screaming faces or detailed haunted house silhouettes need stencils and a steady hand. Pumpkin painting ideas — skipping carving entirely and using acrylic paint — are easier for kids and last longer since the pumpkin does not rot as fast."
      }
    },
    {
      "@type": "Question",
      "name": "Are girls halloween costumes available in plus sizes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Amazon, Target, and Walmart all carry extended sizing in most costume lines. Spirit Halloween also has plus-size options in-store."
      }
    },
    {
      "@type": "Question",
      "name": "What halloween makeup brands are worth buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mehron and Snazaroo are the professional choices for face paint. NYX and e.l.f. do Halloween-specific kits (available at Target) that use regular cosmetics rather than costume-grade paint — better for sensitive skin and easier to remove."
      }
    },
    {
      "@type": "Question",
      "name": "When should I buy halloween decorations to get the best prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First two weeks of October for the best combination of selection and price. Or November 1 onwards for 50–75% clearance on everything unsold — great for stocking up for next year."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between pumpkin carving and pumpkin painting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pumpkin carving cuts through the skin to create light-through silhouettes — the classic halloween pumpkin look. Pumpkin painting ideas use acrylic or craft paint on the outside without cutting — better for young kids, lasts longer, and allows more colour variation."
      }
    },
    {
      "@type": "Question",
      "name": "What are funny halloween costumes that actually land well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Food costumes (hot dog, avocado, egg and bacon pair), meme costumes (current year internet jokes), and pop culture parodies (characters from a major 2026 release) are the ones that get the best reaction. Avoid costumes that rely entirely on people knowing the reference — go for something visually readable from across a room."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to spend a lot for a good halloween costume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A pirate costume for $15–$20 on Amazon or Walmart is fine for most parties. The difference between a $15 and $100 costume is usually detail and material — for one night, the cheap one works. Add halloween makeup and you can elevate almost any basic halloween outfits significantly."
      }
    }
  ]
}
  ]
}

export default function HalloweenOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HalloweenOffers />
    </>
  )
}
