import type { Metadata } from 'next'
import DealOfTheMonth from './_components/DealOfTheMonth'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Deal of the Month — Top Discount Coupons | CouponsCrew',

  description:
    "Discover CouponsCrew's best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.",

  keywords: [
    'deal of the month',
    'best discount coupons',
    'top promo codes this month',
    'monthly coupon deals',
    'best coupon codes today',
    'discount codes India',
    'top deals this month',
    'CouponsCrew monthly deals',
    'best promo codes',
    'online shopping discounts',
  ],

  // ── Canonical + Hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/deals-of-the-month',
    languages: {
      'en-IN': 'https://www.couponscrew.com/deals-of-the-month',
      // 💡 Uncomment when expanding to other markets:
      // 'en-US': 'https://www.couponscrew.com/us/deals-of-the-month',
      // 'en-GB': 'https://www.couponscrew.com/gb/deals-of-the-month',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Deal of the Month — Top Discount Coupons | CouponsCrew',
    description:
      "Discover CouponsCrew's best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.",
    url: 'https://www.couponscrew.com/deals-of-the-month',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    // 💡 Uncomment to enable alternate locales for multi-region OG:
    // alternateLocale: ['en_US', 'en_GB'],
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deal of the Month — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Deal of the Month — Top Discount Coupons | CouponsCrew',
    description:
      "Discover CouponsCrew's best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  // ── Robots ─────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── Geo + Language Tags ────────────────────
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
    // 💡 Expand for other regions:
    // 'geo.region': 'US',
    // 'geo.country': 'US',
    // language: 'en-US',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schema — CollectionPage + FAQPage
// No ItemList (dynamic page — avoids stale schema mismatches)
// ─────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Organization (entity anchor) ──────────
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/#organization',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.couponscrew.com/logo.png',
        width: 200,
        height: 60,
      },
      sameAs: [
        'https://www.facebook.com/couponscrew',
        'https://www.instagram.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },

    // ── WebSite ───────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://www.couponscrew.com/#website',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
      },
      // 💡 Uncomment for Sitelinks Searchbox eligibility when ready:
      // potentialAction: {
      //   '@type': 'SearchAction',
      //   target: {
      //     '@type': 'EntryPoint',
      //     urlTemplate: 'https://www.couponscrew.com/search?q={search_term_string}',
      //   },
      //   'query-input': 'required name=search_term_string',
      // },
    },

    // ── CollectionPage ────────────────────────
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/deals-of-the-month#webpage',
      name: 'Deal of the Month — Top Discount Coupons | CouponsCrew',
      url: 'https://www.couponscrew.com/deals-of-the-month',
      description:
        "Monthly curated discount coupons and promo codes from top brands on CouponsCrew. Updated every month with the best verified deals.",
      inLanguage: 'en-IN',
      isPartOf: {
        '@id': 'https://www.couponscrew.com/#website',
      },
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
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
            name: 'Deal of the Month',
            item: 'https://www.couponscrew.com/deals-of-the-month',
          },
        ],
      },
    },

    // ── FAQPage (AEO + AI search) ─────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/deals-of-the-month#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Deal of the Month on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Deal of the Month on CouponsCrew is a hand-picked selection of the best discount coupons and promo codes available that month. Our team reviews hundreds of offers across 500+ brands to bring you the highest-value deals updated regularly.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often are the monthly deals updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The deals on this page are refreshed every month, and sometimes more frequently when major sale events or limited-time promo codes go live. Bookmark this page to stay updated.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the monthly coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All coupon codes and promo codes listed on CouponsCrew are manually verified before being added. However, deals can expire, so always check the validity date before applying a code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which brands are included in the Deal of the Month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Deal of the Month features top brands across categories like fashion, electronics, home, beauty, food, and travel. Popular brands include Myntra, Amazon, Flipkart, Nykaa, Ajio, Swiggy, and many more.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a coupon code from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Click on the deal you want, copy the coupon code, and paste it at checkout on the retailer's website. Some deals are auto-applied via a direct link — no code needed.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DealOfTheMonth />
    </>
  )
}