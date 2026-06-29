import type { Metadata } from 'next'
import { Suspense } from 'react'
import MoonCrystalLightPage from './_components/MoonCrystalLightPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 66 chars
  title: 'Desidiya Moon Crystal Night Light Coupon Code & Offers | CouponScrew',

  // Primary keyword once + secondary keywords once | 158 chars
  description:
    'Find manually verified Desidiya Moon Crystal Night Light coupon codes, promo codes & discount deals on CouponScrew. Save up to 45% off on this LED lamp gift today.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
  },

  openGraph: {
    title: 'Desidiya Moon Crystal Night Light Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Desidiya Moon Crystal Night Light coupon codes, promo codes & discount deals on CouponScrew. Save up to 45% off on this LED lamp gift today.',
    url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desidiya Moon Crystal Night Light Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Desidiya Moon Crystal Night Light Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Desidiya Moon Crystal Night Light coupon codes, promo codes & discount deals on CouponScrew. Save up to 45% off on this LED lamp gift today.',
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
      '@id': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light/#webpage',
      url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
      name: 'Desidiya Moon Crystal Night Light Coupon Code & Offers | CouponScrew',
      description: 'Find manually verified Desidiya Moon Crystal Night Light coupon codes, promo codes & discount deals on CouponScrew.',
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
            name: 'Desidiya Moon Crystal Ball Night Light',
            item: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
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
        <MoonCrystalLightPage />
      </Suspense>
    </>
  )
}
