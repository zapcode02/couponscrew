
import type { Metadata } from 'next'
import DealsOfTheDay from './_components/DealsOfTheDay'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Deals of the Day — Best Deals & Discounts Today | CouponsCrew',
  description:
    "Shop today's best deals and discounts on CouponsCrew. Top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.",

  keywords: [
    'deals of the day India',
    'best deals today India',
    'daily discount offers India',
    'top deals online shopping India',
    'best discounts today',
    'fashion deals of the day',
    'food deals today India',
    'electronics deals today India',
    'online shopping deals daily',
    'CouponsCrew deals of the day',
    'verified daily deals India',
    'discount offers today India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/deals-of-the-day',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/deals-of-the-day',
      // 'en-US': 'https://www.couponsbit.us/deals-of-the-day',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Deals of the Day — Best Deals & Discounts Today | CouponsCrew',
    description:
      "Shop today's best deals and discounts on CouponsCrew. Top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.",
    url: 'https://www.couponscrew.com/deals-of-the-day',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/deals-of-the-day.jpg',
        width: 1200,
        height: 630,
        alt: 'Deals of the Day — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Deals of the Day — Best Deals & Discounts Today | CouponsCrew',
    description:
      "Shop today's best deals and discounts on CouponsCrew. Top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/deals-of-the-day.jpg'],
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
  // 💡 Update geo.region + language when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',
    language: 'en-IN',
    // 'content-language': 'en-US',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (CollectionPage + ItemList + FAQPage)
// ItemList: every deal card on this page is currently Pepperfry (see
// DEALS_DATA in DealsOfTheDay.tsx), and none have a distinct per-deal URL —
// clicking through goes to the store page, same as the /stores/pepperfry-
// coupon-code Offer cards. So the honest destination is that one real page,
// listed once rather than repeated per deal card.
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/deals-of-the-day#collectionpage',
      name: 'Deals of the Day — Best Deals & Discounts Today | CouponsCrew',
      url: 'https://www.couponscrew.com/deals-of-the-day',
      description:
        'Daily updated deals and discount offers from 500+ brands across fashion, food, electronics and more on CouponsCrew — verified and refreshed every day.',
      inLanguage: 'en-IN',
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
            name: 'Deals of the Day',
            item: 'https://www.couponscrew.com/deals-of-the-day',
          },
        ],
      },
    },

    // 2. ItemList Schema
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/deals-of-the-day#itemlist',
      name: "Today's Deals on CouponsCrew",
      description: 'Verified deals of the day on CouponsCrew, refreshed daily.',
      url: 'https://www.couponscrew.com/deals-of-the-day',
      numberOfItems: 1,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Pepperfry Coupon Code',
          url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/deals-of-the-day#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the deals of the day on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CouponsCrew's deals of the day are hand-picked, verified discount offers updated daily across fashion, food, electronics, home & kitchen, beauty and more. New deals are added every day from 500+ brands.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often are deals of the day updated on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deals of the day on CouponsCrew are updated daily. Expired deals are removed and new verified offers are added every day so you always see the freshest discounts available.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get a deal of the day from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Browse the deals of the day page on CouponsCrew, find the offer you want, and click the Get Deal button. You'll be redirected to the brand's page with the discount automatically applied — no coupon code needed in most cases.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are deals of the day available across all categories on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, deals of the day on CouponsCrew cover multiple categories including Fashion, Food, Electronics, Beauty, Home & Kitchen, and Fitness — from brands like Amazon, Flipkart, Swiggy, Zomato, Myntra and more.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the deals of the day on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All deals of the day on CouponsCrew are manually verified before listing. Dead deals are pulled immediately so you only see active, working offers.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────
// Page Export
// ─────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DealsOfTheDay />
    </>
  )
}