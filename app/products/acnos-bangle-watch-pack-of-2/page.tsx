import type { Metadata } from 'next'
import { Suspense } from 'react'
import AcnosBangleWatchPage from './_components/AcnosBangleWatchPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 69 chars
  title: 'Acnos Bangle Watch Pack of 2 Coupon Code & Offers | CouponScrew',

  // Primary keyword once + secondary keywords once | 156 chars
  description:
    'Find manually verified Acnos Bangle Watch Pack of 2 coupon codes, promo codes & discount deals on CouponScrew. Save up to 60% off on this analog watch combo today.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
  },

  openGraph: {
    title: 'Acnos Bangle Watch Pack of 2 Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Acnos Bangle Watch Pack of 2 coupon codes, promo codes & discount deals on CouponScrew. Save up to 60% off on this analog watch combo today.',
    url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Acnos Bangle Watch Pack of 2 Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Acnos Bangle Watch Pack of 2 Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Acnos Bangle Watch Pack of 2 coupon codes, promo codes & discount deals on CouponScrew. Save up to 60% off on this analog watch combo today.',
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
      '@id': 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2/#webpage',
      url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
      name: 'Acnos Bangle Watch Pack of 2 Coupon Code & Offers | CouponScrew',
      description: 'Find manually verified Acnos Bangle Watch Pack of 2 coupon codes, promo codes & discount deals on CouponScrew.',
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
            name: "Acnos Premium Girl's Heart Shape Bangle Watch, Pack of 2",
            item: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
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
        <AcnosBangleWatchPage />
      </Suspense>
    </>
  )
}
