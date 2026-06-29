import type { Metadata } from 'next'
import { Suspense } from 'react'
import PulgosPushupBoardPage from './_components/PulgosPushupBoardPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 65 chars
  title: 'PulGos 15-in-1 Pushup Board Coupon Code & Offers | CouponScrew',

  // Primary keyword once + secondary keywords once | 156 chars
  description:
    'Find manually verified PulGos 15-in-1 Pushup Board coupon codes, promo codes & discount deals on CouponScrew. Save up to 40% off on this foldable gym equipment today.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
  },

  openGraph: {
    title: 'PulGos 15-in-1 Pushup Board Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified PulGos 15-in-1 Pushup Board coupon codes, promo codes & discount deals on CouponScrew. Save up to 40% off on this foldable gym equipment today.',
    url: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PulGos 15-in-1 Pushup Board Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PulGos 15-in-1 Pushup Board Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified PulGos 15-in-1 Pushup Board coupon codes, promo codes & discount deals on CouponScrew. Save up to 40% off on this foldable gym equipment today.',
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
      '@id': 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board/#webpage',
      url: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
      name: 'PulGos 15-in-1 Pushup Board Coupon Code & Offers | CouponScrew',
      description: 'Find manually verified PulGos 15-in-1 Pushup Board coupon codes, promo codes & discount deals on CouponScrew.',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PulGos 15-in-1 Pushup Board',
            item: 'https://www.couponscrew.com/products/pulgos-15-in-1-pushup-board',
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
        <PulgosPushupBoardPage />
      </Suspense>
    </>
  )
}
