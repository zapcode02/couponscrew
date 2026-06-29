import type { Metadata } from 'next'
import { Suspense } from 'react'
import MinimalistKitPage from './_components/MinimalistKitPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 68 chars
  title: 'Minimalist Anti-Pigmentation Kit Coupon Code & Offers | CouponScrew',

  // Primary keyword once + secondary keywords once | 159 chars
  description:
    'Find manually verified Minimalist Anti-Pigmentation Kit coupon codes, promo codes & discount deals on CouponScrew. Save up to 50% off on this skincare combo today.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
  },

  openGraph: {
    title: 'Minimalist Anti-Pigmentation Kit Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Minimalist Anti-Pigmentation Kit coupon codes, promo codes & discount deals on CouponScrew. Save up to 50% off on this skincare combo today.',
    url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Minimalist Anti-Pigmentation Kit Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Minimalist Anti-Pigmentation Kit Coupon Code & Offers | CouponScrew',
    description:
      'Find manually verified Minimalist Anti-Pigmentation Kit coupon codes, promo codes & discount deals on CouponScrew. Save up to 50% off on this skincare combo today.',
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
      '@id': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit/#webpage',
      url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
      name: 'Minimalist Anti-Pigmentation Kit Coupon Code & Offers | CouponScrew',
      description: 'Find manually verified Minimalist Anti-Pigmentation Kit coupon codes, promo codes & discount deals on CouponScrew.',
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
            name: 'Minimalist Anti-Pigmentation Kit',
            item: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
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
        <MinimalistKitPage />
      </Suspense>
    </>
  )
}
