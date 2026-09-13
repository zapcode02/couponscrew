import type { Metadata } from 'next'
import BiggBoss from './_components/BiggBoss'

// ─────────────────────────────────────────────
// SEO + Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals — CouponsCrew',
  description:
    "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals to make your BB nights cheaper.",

  keywords: [
    'Bigg Boss Season 20 where to watch',
    'Bigg Boss 20 JioHotstar price',
    'Bigg Boss 20 contestants list 2026',
    'Bigg Boss 20 OTT stream time',
    'Bigg Boss 20 Salman Khan host',
    'Bigg Boss deals CouponsCrew',
    'JioHotstar subscription offers',
    'save money Bigg Boss streaming',
    'Bigg Boss 20 voting JioHotstar',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals — CouponsCrew',
    description:
      "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals to make your BB nights cheaper.",
    url: 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp',
        width: 1200,
        height: 630,
        alt: 'Bigg Boss Season 20 (2026) — Where to Watch on JioHotstar, Price, Contestants & Best Deals | CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals — CouponsCrew',
    description:
      "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals to make your BB nights cheaper.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp'],
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
      '@id': 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals#blogposting',
      headline: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals — Everything in One Place',
      description:
        "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals to make your BB nights cheaper.",
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      url: 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals',
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
        '@id': 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals#webpage',
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
            name: 'Bigg Boss Season 20 Where to Watch',
            item: 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals',
          },
        ],
      },
    },

    // 2. FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/bigg-boss-season-20-where-to-watch-deals#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I watch Bigg Boss 20 online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bigg Boss 20 streams on JioHotstar. Daily episodes go live at 9 PM IST, ahead of the Colors TV telecast at 10:30 PM IST the same night.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Bigg Boss 20 free to watch on JioHotstar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Access depends on your Jio plan. Some mobile recharges include JioHotstar. A paid subscription is needed for the 24×7 live feed and before-TV episode drops. Check the app for what your current plan covers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is hosting Bigg Boss Season 20?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Salman Khan is hosting Bigg Boss 20, continuing for his 17th consecutive season.',
          },
        },
        {
          '@type': 'Question',
          name: 'When does Bigg Boss 20 air?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Monday through Friday episodes air daily. Weekend Ka Vaar with Salman Khan runs on Saturday and Sunday. All episodes stream on JioHotstar at 9 PM IST first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I vote for Bigg Boss 20 contestants for free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Voting is free through the JioHotstar app. There is no official standalone voting app, and no legitimate voting service charges money.',
          },
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function BiggBossBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BiggBoss />
    </>
  )
}
