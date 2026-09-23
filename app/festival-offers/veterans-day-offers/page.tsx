import type { Metadata } from 'next'
import VeteransDayOffers from './_components/VeteransDayOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Veterans Day Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Veterans Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Veterans Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Veterans Day offers 2026',
    'Veterans Day discount coupons',
    'Veterans Day sale deals',
    'Amazon Veterans Day sale coupons',
    'Flipkart Veterans Day sale',
    'Veterans Day shopping coupons India',
    'CouponsCrew Veterans Day deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
    },
  },

  openGraph: {
    title: 'Veterans Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Veterans Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/veterans-day-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Veterans Day Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Veterans Day Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description: 'Save big this Veterans Day 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/veterans-day-offers.jpg'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
      'name': 'Veterans Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Veterans Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
      '@id': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/',
      'name': 'Veterans Day Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Veterans Day 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
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
        { '@type': 'ListItem', 'position': 3, 'name': 'Veterans Day Offers', 'item': 'https://www.couponscrew.com/festival-offers/veterans-day-offers/' }
      ]
    },

    // 4. FAQPage Schema (placeholder — to be updated manually)
    {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is Veterans Day 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veterans Day is always November 11. In 2026, that falls on a Wednesday."
      }
    },
    {
      "@type": "Question",
      "name": "Who qualifies for veterans day free meals and discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active-duty military, veterans, reservists, National Guard members, and in many cases military spouses. Each restaurant and retailer sets its own eligibility rules. Most accept a military ID, VA card, or DD-214 as proof."
      }
    },
    {
      "@type": "Question",
      "name": "What is ID.me and do I need it for veterans day discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ID.me is a digital identity verification service widely used by retailers and government agencies. Setting up an account before Veterans Day gives you access to internet military discount offers across hundreds of brands — Apple, Dell, T-Mobile, Verizon, and more — without showing physical documents at checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Kohl's military discount available online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The kohl's military discount works both in-store and online. Online, you verify your status through ID.me when you check out. The discount is typically 15–30% depending on the specific Veterans Day promotion."
      }
    },
    {
      "@type": "Question",
      "name": "Are veterans day free meals available to military spouses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some restaurants extend the offer to military spouses, some do not. Applebee's, Olive Garden, and Chili's are veterans and active military only. Starbucks explicitly includes military spouses. Check each restaurant's specific offer for 2026."
      }
    },
    {
      "@type": "Question",
      "name": "Do veterans day sales only run on November 11?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most restaurant veterans day free meals are specifically on November 11. Retail discounts often run for a few days on either side — November 9–13 is a common window. Check individual retailer pages for exact dates."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a Home Depot or Lowe's veterans day sale on appliances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both Home Depot and Lowe's offer their standard 10% military discount on most products including appliances. Veterans Day promotions sometimes add additional savings. Both stores run November appliance sale events that may overlap with Veterans Day."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best free stuff for veterans on Veterans Day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free meals from Applebee's, Olive Garden, and Texas Roadhouse. Free entry to national parks via NPS. Free Starbucks drink. Free museum admission at participating institutions. Some cities offer free public transit for veterans on November 11."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use veterans day discounts the day before or after November 11?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For restaurant veterans day free meals — usually no, most are specifically November 11. For retail veterans day sales — often yes, with a 3–5 day window. The kohl's military discount for instance often runs November 9–13."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the most up-to-date list of veterans day promo codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CouponsCrew maintains a verified, live-updated list of veterans day sales promo codes for Kohl's, Dick's Sporting Goods, Best Buy, and other participating retailers. All codes are tested before listing. Check this page and the individual store pages on CouponsCrew from November 9 onwards."
      }
    }
  ]
}
  ]
}

export default function VeteransDayOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VeteransDayOffers />
    </>
  )
}
