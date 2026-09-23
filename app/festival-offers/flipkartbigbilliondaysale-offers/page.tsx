import type { Metadata } from 'next'
import FlipkartBigBillionDays from './_components/FlipkartBigBillionDays'

// ─────────────────────────────────────────────
// SEO Metadata for Flipkart Big Billion Days Sale Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Flipkart Big Billion Days Sale Offers 2026 — Best Deals on Mobiles & Electronics | CouponsCrew',
  description:
    'Find the best Flipkart Big Billion Days Sale offers 2026. Get verified deals on mobiles, electronics, fashion & more with extra bank discounts on CouponsCrew.',

  keywords: [
    'Flipkart Big Billion Days 2026',
    'Big Billion Days sale offers',
    'Flipkart sale deals',
    'Flipkart mobile offers',
    'Big Billion Days electronics deals',
    'Flipkart coupon codes 2026',
    'CouponsCrew Flipkart deals',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
    },
  },

  openGraph: {
    title: 'Flipkart Big Billion Days Sale Offers 2026 | CouponsCrew',
    description:
      'Find the best Flipkart Big Billion Days Sale offers 2026. Get verified deals on mobiles, electronics, fashion & more on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Flipkart_Big_Billion_Days_Sale_q4yypd.webp',
        width: 1200,
        height: 630,
        alt: 'Flipkart Big Billion Days Sale Offers 2026 — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Flipkart Big Billion Days Sale Offers 2026 | CouponsCrew',
    description:
      'Find the best Flipkart Big Billion Days Sale offers 2026 on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Flipkart_Big_Billion_Days_Sale_q4yypd.webp'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/#webpage',
      'url': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
      'name': 'Flipkart Big Billion Days Sale Offers 2026 | CouponsCrew',
      'description': 'Find the best Flipkart Big Billion Days Sale offers 2026. Get verified deals on mobiles, electronics, fashion & more with extra bank discounts.',
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
      '@id': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/',
      'name': 'Flipkart Big Billion Days Sale Offers 2026 | CouponsCrew',
      'description': 'Find the best Flipkart Big Billion Days Sale offers 2026. Get verified deals on mobiles, electronics, fashion & more with extra bank discounts.',
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
        { '@type': 'ListItem', 'position': 3, 'name': 'Flipkart Big Billion Days Sale Offers', 'item': 'https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers/' },
      ],
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'When does Flipkart Big Billion Days 2026 start?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Flipkart Big Billion Days typically runs for 5–7 days during October. Exact dates are announced by Flipkart closer to the event.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What are the best deals during Flipkart Big Billion Days?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mobiles, electronics, fashion, home appliances, and furniture see the biggest discounts during the Big Billion Days sale.',
          },
        },
      ],
    },
  ],
}

export default function FlipkartBigBillionDaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FlipkartBigBillionDays />
    </>
  )
}
