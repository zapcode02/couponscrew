import type { Metadata } from 'next'
import { Suspense } from 'react'
import PepperfryStore from './_components/PepperfryStore'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
  },

  openGraph: {
    title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
    description:
      'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
    url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pepperfry Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
    description:
      'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
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
      '@id': 'https://www.couponscrew.com/stores/pepperfry-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
      name: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
      description: 'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
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
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Pepperfry Coupon Code',
            item: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
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
        <PepperfryStore />
      </Suspense>
    </>
  )
}
