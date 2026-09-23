import type { Metadata } from 'next'
import ChildrensDayOffers from './_components/ChildrensDayOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Children's Day Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: "Children's Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew",
  description:
    "Save big this Children's Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, FirstCry, and 500+ top brands on CouponsCrew.",

  keywords: [
    "Children's Day offers 2026",
    "Children's Day discount coupons",
    "Children's Day sale deals",
    'Amazon Kids Day sale coupons',
    'Flipkart Kids Day sale',
    'FirstCry Childrens Day offers',
    'toys and kids products discount India',
    'CouponsCrew Childrens Day deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
    },
  },

  openGraph: {
    title: "Children's Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew",
    description:
      "Save big this Children's Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, FirstCry, and 500+ top brands on CouponsCrew.",
    url: 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/childrens-day-offers.jpg',
        width: 1200,
        height: 630,
        alt: "Children's Day Offers & Festive Discounts 2026 — CouponsCrew",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Children's Day Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew",
    description: "Save big this Children's Day 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/childrens-day-offers.jpg'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
      'name': "Children's Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew",
      'description': "Save big this Children's Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, FirstCry, and 500+ top brands on CouponsCrew.",
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
      '@id': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/',
      'name': "Children's Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew",
      'description': "Save big this Children's Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, FirstCry, and 500+ top brands on CouponsCrew.",
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
        { '@type': 'ListItem', 'position': 3, 'name': "Children's Day Offers", 'item': 'https://www.couponscrew.com/festival-offers/childrens-day-offers/' }
      ]
    },

    // 4. FAQPage Schema (placeholder — to be updated manually)
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Children's Day in India in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Children's Day in India is on November 14, 2026. It falls on a Saturday. The date marks the birthday of Pandit Jawaharlal Nehru, India's first Prime Minister."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Children's Day celebrated on November 14 in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India celebrates Children's Day on Nehru's birthday because of his well-known affection for children. He was called Chacha Nehru by children across the country. After his death in 1964, the government declared November 14 as Children's Day in his memory. Before that, India observed Children's Day on November 20, in line with the United Nations."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best childrens day offers in India in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best childrens day offers come from Amazon India, Flipkart, FirstCry, and Myntra. Categories with the strongest deals are toys, books, kids' clothing, and learning devices. Most platforms run sales in the week of November 14."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best platform for kids' toys during Children's Day sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amazon India has the widest toy selection in India with deals on LEGO, Hasbro, Hot Wheels, and Fisher-Price. FirstCry is the best for baby and toddler toys. Flipkart is strong on Funskool and Mattel. For budget options, Meesho has basic toy sets under Rs 299."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Children's Day decoration supplies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amazon India and Flipkart both carry balloon packs, banners, and party kits. For same-day delivery, Blinkit and Swiggy Instamart have basic balloon and streamer packs available for quick home delivery in most major cities."
      }
    },
    {
      "@type": "Question",
      "name": "What gifts are best for a 5-year-old on Children's Day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Activity kits (slime, clay, or science experiments), picture books, and building block sets work well for children aged 5. Amazon India carries options from Einstein Box, Toiing, and Fisher-Price starting from Rs 299. Avoid anything with small parts for children under 6."
      }
    },
    {
      "@type": "Question",
      "name": "Are there food deals on Children's Day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zomato and Swiggy typically run food deals on November 14. Past promotions included free desserts and kids' meal combos at McDonald's, Burger King, and Domino's. Check both apps on November 14 morning."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good book gift for a 10-year-old on Children's Day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Diary of a Wimpy Kid series, Harry Potter, and graphic novel series from Amar Chitra Katha are popular with children aged 8–12. Amazon India's books section and Flipkart both have these at 30–50% off during November sales."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nykaa have Children's Day offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nykaa carries baby and kids' skincare and grooming products under its Nykaa Baby section. Brands like Cetaphil Baby, Mamaearth Kids, and Johnson's usually see 20–35% discounts during the Children's Day window. It is a good option for gifting bath sets and grooming kits for children."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get the latest Children's Day coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew updates verified coupon codes for Amazon India, Flipkart, FirstCry, Myntra, Nykaa, and Meesho before and during the Children's Day sale window. All codes are tested before publishing — check the store page on CouponsCrew before any checkout on November 14."
      }
    }
  ]
}
  ]
}

export default function ChildrensDayOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChildrensDayOffers />
    </>
  )
}
