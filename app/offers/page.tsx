import type { Metadata } from 'next'
import Offers from './_components/Offers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Latest Voucher Codes & Offers in India Today | CouponsCrew',
  description:
    'Find the latest voucher codes & exclusive discount offers on CouponsCrew. Verified promo codes & coupon codes across 500+ top Indian brands — updated daily.',

  keywords: [
    'latest voucher codes India',
    'discount offers India today',
    'promo codes India',
    'exclusive coupon codes India',
    'voucher codes online shopping',
    'best offers today India',
    'verified promo codes India',
    'latest discount offers',
    'coupon codes 500 brands',
    'online shopping voucher codes',
    'CouponsCrew offers',
    'latest deals and offers India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/offers',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/offers',
      // 'en-US': 'https://www.couponsbit.us/offers',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Latest Voucher Codes & Offers in India Today | CouponsCrew',
    description:
      'Find the latest voucher codes & exclusive discount offers on CouponsCrew. Verified promo codes & coupon codes across 500+ top Indian brands — updated daily.',
    url: 'https://www.couponscrew.com/offers',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Latest Voucher Codes & Offers — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Voucher Codes & Offers in India Today | CouponsCrew',
    description:
      'Find the latest voucher codes & exclusive discount offers on CouponsCrew. Verified promo codes & coupon codes across 500+ top Indian brands — updated daily.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/offers.jpg'],
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
// JSON-LD Schemas (CollectionPage + FAQPage)
// Note: No ItemList — offers are dynamic and added per store.
// Hardcoding them would cause stale/inaccurate schema data.
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/offers#collectionpage',
      name: 'Latest Voucher Codes & Offers in India Today | CouponsCrew',
      url: 'https://www.couponscrew.com/offers',
      description:
        'Browse the latest verified voucher codes, exclusive discount offers and promo codes across 500+ brands on CouponsCrew — updated daily as new stores are added.',
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
            name: 'Offers',
            item: 'https://www.couponscrew.com/offers',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/offers#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What voucher codes and offers are available on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists the latest verified voucher codes, promo codes, and exclusive discount offers across 500+ brands in India. New offers are added daily as new stores are added to the platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a voucher code from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Browse the offers page on CouponsCrew, find the voucher code or discount offer you want, copy the code, and paste it at checkout on the brand's website to save instantly.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are the voucher codes and offers on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All voucher codes and discount offers on CouponsCrew are manually verified and updated daily. Expired offers are removed promptly so you only see active, working deals.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are new offers added on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New voucher codes and offers are added to CouponsCrew daily. As new stores and brands are added to the platform, their latest offers automatically appear on the offers page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it free to use voucher codes from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, CouponsCrew is completely free to use. Simply browse the offers, copy the voucher code or click Get Deal, and save at checkout — no account or signup required.",
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
      <Offers />
    </>
  )
}