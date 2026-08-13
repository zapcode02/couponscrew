import type { Metadata } from 'next'
import Blog from './_components/Blog'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Blog — Best Websites for Couponing in India | CouponsCrew',
  description:
    'Read the CouponsCrew blog for the latest couponing tips, saving guides and deal roundups. Discover the best coupon sites & coupon code websites for online shopping in India.',

  keywords: [
    'best websites for couponing India',
    'couponing tips India',
    'coupon code website blog',
    'best coupon sites online shopping',
    'saving money online India',
    'deal roundups India',
    'how to use coupon codes India',
    'online shopping saving tips',
    'CouponsCrew blog',
    'discount code guides India',
    'promo code tips India',
    'best deals blog India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/blog',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog',
      // 'en-US': 'https://www.couponsbit.us/blog',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Blog — Best Websites for Couponing in India | CouponsCrew',
    description:
      'Read the CouponsCrew blog for the latest couponing tips, saving guides and deal roundups. Discover the best coupon sites & coupon code websites for online shopping in India.',
    url: 'https://www.couponscrew.com/blog',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/blog.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponsCrew Blog — Couponing Tips & Deal Guides',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Best Websites for Couponing in India | CouponsCrew',
    description:
      'Read the CouponsCrew blog for the latest couponing tips, saving guides and deal roundups. Discover the best coupon sites & coupon code websites for online shopping in India.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/blog.jpg'],
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
// JSON-LD Schemas (Blog + FAQPage)
// Note: No ItemList — blog posts are dynamic.
// Hardcoding post titles would cause stale schema as new posts are added.
// Individual blog post pages should each have their own Article schema.
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. Blog Schema
    {
      '@type': 'Blog',
      '@id': 'https://www.couponscrew.com/blog#blog',
      name: 'CouponsCrew Blog',
      url: 'https://www.couponscrew.com/blog',
      description:
        'Saving tips, couponing guides and deal roundups from the CouponsCrew team — helping you get the most out of coupon codes and discount deals in India.',
      inLanguage: 'en-IN',
      publisher: {
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
      },
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
            name: 'Blog',
            item: 'https://www.couponscrew.com/blog',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What topics does the CouponsCrew blog cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CouponsCrew blog covers couponing tips, saving guides, deal roundups, how-to articles on using coupon codes, and recommendations for the best coupon sites for online shopping in India.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often is the CouponsCrew blog updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The CouponsCrew blog is updated regularly with new articles on couponing, saving tips, and deal guides to help you save more on every online purchase.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best website for couponing in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew is one of the best websites for couponing in India, offering verified coupon codes and discount deals across 500+ brands updated daily. The CouponsCrew blog also provides expert guides on how to save more using coupon codes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I learn how to use coupon codes from the CouponsCrew blog?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the CouponsCrew blog includes step-by-step guides on how to find and use coupon codes, the best coupon sites for online shopping in India, and tips to maximise savings on every purchase.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the CouponsCrew blog free to read?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the CouponsCrew blog is completely free to read. No signup or account is required to access any article or guide.',
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
      <Blog />
    </>
  )
}