import type { Metadata } from 'next'
import Terms from './_components/Terms'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Terms & Conditions — Best Websites for Couponing | CouponsCrew',

  description:
    "Review CouponsCrew's terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.",

  keywords: [
    'CouponsCrew terms and conditions',
    'coupon website terms of use',
    'best websites for couponing India',
    'coupon site rules',
    'best coupon sites for online shopping',
    'best coupon code websites India',
    'discount code site terms',
    'promo code platform terms',
    'online shopping coupon terms',
    'CouponsCrew usage policy',
  ],

  // ── Canonical + Hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/terms-conditions',
    languages: {
      'en-IN': 'https://www.couponscrew.com/terms-conditions',
      // 💡 Uncomment when expanding to other markets:
      // 'en-US': 'https://www.couponscrew.com/us/terms',
      // 'en-GB': 'https://www.couponscrew.com/gb/terms',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Terms & Conditions — Best Websites for Couponing | CouponsCrew',
    description:
      "Review CouponsCrew's terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.",
    url: 'https://www.couponscrew.com/terms-conditions',
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
        alt: 'CouponsCrew Terms & Conditions',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions — Best Websites for Couponing | CouponsCrew',
    description:
      "Review CouponsCrew's terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.",
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
// JSON-LD Schema — WebPage + Organization + FAQPage
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

    // ── WebPage ───────────────────────────────
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/terms-conditions#webpage',
      name: 'Terms & Conditions — Best Websites for Couponing | CouponsCrew',
      url: 'https://www.couponscrew.com/terms-conditions',
      description:
        'Terms and conditions of CouponsCrew detailing the rules and guidelines for using our coupon and deals platform.',
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
            name: 'Terms & Conditions',
            item: 'https://www.couponscrew.com/terms-conditions',
          },
        ],
      },
    },

    // ── FAQPage (AEO + AI search) ─────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/terms-conditions#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the terms of use for CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CouponsCrew's terms of use outline the rules for accessing and using the platform, including guidelines on coupon usage, intellectual property, user conduct, and limitations of liability. By using the site, you agree to these terms.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are coupon codes on CouponsCrew guaranteed to work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew strives to list only verified and active coupon codes, but cannot guarantee that every code will work at the time of use. Codes may expire, have usage limits, or be subject to retailer-specific restrictions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I reproduce or copy content from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All content on CouponsCrew including deal listings, descriptions, and site design is the intellectual property of CouponsCrew. Reproduction or redistribution without written permission is not permitted.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew responsible for third-party retailer websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. CouponsCrew provides links to third-party retailer websites for convenience. We are not responsible for the content, pricing, availability, or policies of those external sites.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact CouponsCrew regarding the terms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For any questions about the terms and conditions, you can reach CouponsCrew through the contact page at couponscrew.com/contact. Our team will respond to queries as soon as possible.',
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
      <Terms />
    </>
  )
}