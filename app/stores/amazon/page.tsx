import type { Metadata } from 'next'
import { Suspense } from 'react'
import AmazonStore from './_components/AmazonStore'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 61 chars
  title: 'Amazon Coupon Code, Promo Codes & Offers June 2026 | CouponScrew',

  // Primary keyword once + both secondary keywords once | 158 chars
  description:
    'Find manually verified Amazon coupon codes, promo codes & discount deals on CouponScrew. Save up to 80% on electronics, mobiles, pantry, fashion & more today.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/amazon',
  },

  openGraph: {
    title: 'Amazon Coupon Code, Promo Codes & Offers June 2026 | CouponScrew',
    description:
      'Find manually verified Amazon coupon codes, promo codes & discount deals on CouponScrew. Save up to 80% on electronics, mobiles, pantry, fashion & more today.',
    url: 'https://www.couponscrew.com/stores/amazon',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupon Code, Promo Codes & Offers June 2026 | CouponScrew',
    description:
      'Find manually verified Amazon coupon codes, promo codes & discount deals on CouponScrew. Save up to 80% on electronics, mobiles, pantry, fashion & more today.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/amazon/#webpage',
      url: 'https://www.couponscrew.com/stores/amazon',
      name: 'Amazon Coupon Code, Promo Codes & Offers June 2026 | CouponScrew',
      description: 'Find manually verified Amazon coupon codes, promo codes & discount deals on CouponScrew.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponScrew',
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
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Amazon',
            item: 'https://www.couponscrew.com/stores/amazon',
          },
        ],
      },
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
      <Suspense fallback={null}>
        <AmazonStore />
      </Suspense>
    </>
  )
}
