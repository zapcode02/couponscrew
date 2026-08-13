import type { Metadata } from 'next'
import Deals from './_components/Deals'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Deals Today — Best Discount Coupons & Promo Codes | CouponsCrew',

  description:
    'Browse all the latest deals, discount coupons, and promo codes on CouponsCrew. Verified offers across 500+ brands updated daily — fashion, electronics, food, travel & more.',

  keywords: [
    'deals today',
    'best discount coupons',
    'promo codes today',
    'latest deals India',
    'coupon codes online shopping',
    'verified discount codes',
    'best deals online India',
    'fashion deals today',
    'electronics coupons India',
    'food delivery promo codes',
    'travel deals India',
    'CouponsCrew deals',
  ],

  // ── Canonical + Hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/deals',
    languages: {
      'en-IN': 'https://www.couponscrew.com/deals',
      // 💡 Uncomment when expanding to other markets:
      // 'en-US': 'https://www.couponscrew.com/us/deals',
      // 'en-GB': 'https://www.couponscrew.com/gb/deals',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Deals Today — Best Discount Coupons & Promo Codes | CouponsCrew',
    description:
      'Browse all the latest deals, discount coupons, and promo codes on CouponsCrew. Verified offers across 500+ brands updated daily — fashion, electronics, food, travel & more.',
    url: 'https://www.couponscrew.com/deals',
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
        alt: 'Deals Today — Best Discount Coupons & Promo Codes | CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Deals Today — Best Discount Coupons & Promo Codes | CouponsCrew',
    description:
      'Browse all the latest deals, discount coupons, and promo codes on CouponsCrew. Verified offers across 500+ brands updated daily — fashion, electronics, food, travel & more.',
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
    },

    // ── CollectionPage ────────────────────────
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/deals#webpage',
      name: 'Deals Today — Best Discount Coupons & Promo Codes | CouponsCrew',
      url: 'https://www.couponscrew.com/deals',
      description:
        'Browse all the latest deals, discount coupons, and promo codes on CouponsCrew. Verified offers across 500+ brands updated daily — fashion, electronics, food, travel & more.',
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
            name: 'Deals',
            item: 'https://www.couponscrew.com/deals',
          },
        ],
      },
    },

    // ── FAQPage (AEO + AI search) ─────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/deals#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find the best deals today in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CouponsCrew's deals page lists the best discount coupons and promo codes available today across 500+ brands in India. Deals are verified and updated daily across categories like fashion, electronics, food delivery, beauty, and travel.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often are deals updated on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deals on CouponsCrew are updated daily. During major sale events like Big Billion Days, Great Indian Festival, or End of Season Sales, deals are refreshed multiple times a day to ensure you always have the latest offers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the deals on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All deals listed on CouponsCrew are manually verified before going live. Expired or inactive deals are removed promptly so you only see offers that are currently active.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which categories have the most deals on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew covers deals across fashion, beauty, electronics, home & kitchen, food delivery, travel, health & fitness, and more. Top brands include Myntra, Amazon, Flipkart, Nykaa, Swiggy, Zomato, and MakeMyTrip.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a deal from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Click on any deal on CouponsCrew. If it has a coupon code, copy it and paste it at checkout on the retailer\'s website. If it is a direct deal, clicking through will automatically apply the discount — no code needed.',
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
      <Deals />
    </>
  )
}