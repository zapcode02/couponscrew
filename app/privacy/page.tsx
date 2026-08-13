import type { Metadata } from 'next'
import Privacy from './_components/Privacy'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Privacy Policy — Safe Digital Coupons | CouponsCrew',

  description:
    "Read CouponsCrew's privacy policy. We keep your data safe while you enjoy digital coupons across India's best discount web site and top discount code sites.",

  keywords: [
    'CouponsCrew privacy policy',
    'coupon site privacy',
    'data safety coupon website',
    'digital coupons privacy',
    'discount code site privacy policy',
    'how we use your data',
    'coupon website data protection',
    'online shopping privacy India',
    'promo code site privacy',
    'safe coupon platform India',
  ],

  // ── Canonical + Hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/privacy-policy',
    languages: {
      'en-IN': 'https://www.couponscrew.com/privacy-policy',
      // 💡 Uncomment when expanding to other markets:
      // 'en-US': 'https://www.couponscrew.com/us/privacy-policy',
      // 'en-GB': 'https://www.couponscrew.com/gb/privacy-policy',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Privacy Policy — Safe Digital Coupons | CouponsCrew',
    description:
      "Read CouponsCrew's privacy policy. We keep your data safe while you enjoy digital coupons across India's best discount web site and top discount code sites.",
    url: 'https://www.couponscrew.com/privacy-policy',
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
        alt: 'CouponsCrew Privacy Policy',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Safe Digital Coupons | CouponsCrew',
    description:
      "Read CouponsCrew's privacy policy. We keep your data safe while you enjoy digital coupons across India's best discount web site and top discount code sites.",
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
      '@id': 'https://www.couponscrew.com/privacy-policy#webpage',
      name: 'Privacy Policy — Safe Digital Coupons | CouponsCrew',
      url: 'https://www.couponscrew.com/privacy-policy',
      description:
        "Privacy policy of CouponsCrew detailing how we collect, use, and protect your data while you browse digital coupons and discount codes.",
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
            name: 'Privacy Policy',
            item: 'https://www.couponscrew.com/privacy-policy',
          },
        ],
      },
    },

    // ── FAQPage (AEO + AI search) ─────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/privacy-policy#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What data does CouponsCrew collect from users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew may collect basic usage data such as pages visited, device type, and browser information to improve the user experience. If you contact us or subscribe to alerts, we may collect your name and email address.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does CouponsCrew sell my personal data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. CouponsCrew does not sell, rent, or trade your personal data to third parties. Your information is used solely to improve our services and communicate relevant deals to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does CouponsCrew use cookies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew uses cookies to remember your preferences, track site performance, and serve relevant deals. You can manage or disable cookies through your browser settings at any time.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CouponsCrew protect my data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew uses standard security measures including encrypted connections (HTTPS) to protect your data. We regularly review our practices to ensure your information remains safe.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact CouponsCrew about privacy concerns?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For any privacy-related questions or concerns, you can reach CouponsCrew through the contact page at couponscrew.com/contact. We aim to respond to all queries promptly.',
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
      <Privacy />
    </>
  )
}