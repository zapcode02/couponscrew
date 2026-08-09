import type { Metadata } from 'next'
import { Suspense } from 'react'
import AmazonStore from './_components/AmazonStore'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Amazon Coupon Code - Up to 90% OFF Today | CouponsCrew',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Use Amazon coupon code & Amazon discount code on CouponsCrew to save up to 90% off on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals updated daily!',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/amazon-coupon-code',
  },

  openGraph: {
    title: 'Amazon Coupon Code - Up to 90% OFF Today | CouponsCrew',
    description:
      'Use Amazon coupon code & Amazon discount code on CouponsCrew to save up to 90% off on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals updated daily!',
    url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupon Code - Up to 90% OFF Today | CouponsCrew',
    description:
      'Use Amazon coupon code & Amazon discount code on CouponsCrew to save up to 90% off on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals updated daily!',
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
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
      name: 'Amazon Coupon Code - Up to 90% OFF Today | CouponsCrew',
      description: 'Use Amazon coupon code & Amazon discount code on CouponsCrew to save up to 90% off on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals updated daily!',
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
            name: 'Amazon Coupon Code',
            item: 'https://www.couponscrew.com/stores/amazon-coupon-code',
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
