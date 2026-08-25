import type { Metadata } from 'next'
import RakshaBandhan from './_components/rakshabandhan'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Best Raksha Bandhan Gift Ideas 2026 — Save Big with Verified Deals | CouponsCrew',
  description:
    'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters. Learn how to stack coupons, bank offers, and cashback to save extra.',

  keywords: [
    'Raksha Bandhan gift ideas',
    'Rakhi gift ideas for brother',
    'Rakhi gift ideas for sister',
    'best Raksha Bandhan deals India',
    'Rakhi coupon codes',
    'Raksha Bandhan discounts Flipkart Amazon',
    'personalized Rakhi gifts',
    'save money Rakhi shopping India',
    'CouponsCrew Rakhi offer codes',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Best Raksha Bandhan Gift Ideas 2026 — Save Big with Verified Deals | CouponsCrew',
    description:
      'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters. Learn how to stack coupons, bank offers, and cashback to save extra.',
    url: 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/raksha-bandhan-gift-ideas.webp',
        width: 1200,
        height: 630,
        alt: 'Best Raksha Bandhan Gift Ideas — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Best Raksha Bandhan Gift Ideas 2026 — Save Big with Verified Deals | CouponsCrew',
    description:
      'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters. Learn how to stack coupons, bank offers, and cashback to save extra.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/raksha-bandhan-gift-ideas.webp',
    ],
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
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (BlogPosting + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. BlogPosting Schema
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas#blogposting',
      headline: 'Best Raksha Bandhan Gift Ideas 2026 — Save Big with Verified Deals',
      description:
        'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters. Learn how to stack coupons, bank offers, and cashback to save extra.',
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/raksha-bandhan-gift-ideas.webp',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      url: 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas',
      inLanguage: 'en-IN',
      author: {
        '@type': 'Organization',
        '@id': 'https://www.couponscrew.com/#organization',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
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
        '@type': 'Blog',
        '@id': 'https://www.couponscrew.com/blog#blog',
        name: 'CouponsCrew Blog',
        url: 'https://www.couponscrew.com/blog',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas#webpage',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Raksha Bandhan Gift Ideas',
            item: 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/raksha-bandhan-gift-ideas#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best Raksha Bandhan gift ideas for sisters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Popular Raksha Bandhan gift ideas for sisters include personalized jewelry, skincare hampers, smartwatch/gadgets, fashion apparel, and digital gift cards. Stacking promo codes from CouponsCrew with bank offers gives you maximum discount.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are unique Rakhi gifts for brothers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unique Rakhi gifts for brothers range from tech gadgets, wireless earbuds, premium grooming kits, and custom wallets to gaming accessories.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I get discounts on Raksha Bandhan online shopping?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can maximize savings by using verified coupon codes from CouponsCrew, applying bank instant discounts (HDFC, ICICI, SBI, etc.), and making purchases during festive sale events on Amazon, Flipkart, and Myntra.',
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
      <RakshaBandhan />
    </>
  )
}