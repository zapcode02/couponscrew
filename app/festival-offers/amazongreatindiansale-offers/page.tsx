import type { Metadata } from 'next'
import AmazonGreatIndianFestival from './_components/AmazonGreatIndianFestival'

// ─────────────────────────────────────────────
// SEO Metadata for Amazon Great Indian Festival Sale Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Amazon Great Indian Festival Sale Offers 2026 — Best Deals on Electronics & Fashion | CouponsCrew',
  description:
    'Find the best Amazon Great Indian Festival Sale offers 2026. Get verified deals on electronics, mobiles, fashion & more with extra bank discounts on CouponsCrew.',

  keywords: [
    'Amazon Great Indian Festival 2026',
    'Amazon Great Indian Festival sale offers',
    'Amazon festive sale deals',
    'Amazon electronics offers',
    'Great Indian Festival coupon codes',
    'Amazon sale 2026',
    'CouponsCrew Amazon deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
    },
  },

  openGraph: {
    title: 'Amazon Great Indian Festival Sale Offers 2026 | CouponsCrew',
    description:
      'Find the best Amazon Great Indian Festival Sale offers 2026. Get verified deals on electronics, mobiles, fashion & more on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Amazon_Great_Indian_Festival_Sale_Offers_uzmpop.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Great Indian Festival Sale Offers 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Great Indian Festival Sale Offers 2026 | CouponsCrew',
    description:
      'Find the best Amazon Great Indian Festival Sale offers 2026 on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Amazon_Great_Indian_Festival_Sale_Offers_uzmpop.webp'],
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
// JSON-LD Schema
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
      'name': 'Amazon Great Indian Festival Sale Offers 2026 | CouponsCrew',
      'description': 'Find the best Amazon Great Indian Festival Sale offers 2026. Get verified deals on electronics, mobiles, fashion & more with extra bank discounts.',
      'inLanguage': 'en-IN',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com',
      },
      'datePublished': '2026-09-21',
      'dateModified': '2026-09-21',
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/',
      'name': 'Amazon Great Indian Festival Sale Offers 2026 | CouponsCrew',
      'description': 'Find the best Amazon Great Indian Festival Sale offers 2026. Get verified deals on electronics, mobiles, fashion & more with extra bank discounts.',
      'inLanguage': 'en-IN',
      'datePublished': '2026-09-21',
      'dateModified': '2026-09-21',
      'publisher': {
        '@type': 'Organization',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.couponscrew.com/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Festival Offers', 'item': 'https://www.couponscrew.com/festival-offers/' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Amazon Great Indian Festival Sale Offers', 'item': 'https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers/' },
      ],
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'When does Amazon Great Indian Festival Sale 2026 start?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Amazon Great Indian Festival typically runs during October. Exact dates are announced by Amazon closer to the event.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What are the best deals during Amazon Great Indian Festival?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Electronics, mobiles, home appliances, fashion, and Amazon devices see the biggest discounts during the Great Indian Festival sale.',
          },
        },
      ],
    },
  ],
}

export default function AmazonGreatIndianFestivalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmazonGreatIndianFestival />
    </>
  )
}
