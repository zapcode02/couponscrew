import type { Metadata } from 'next'
import { Suspense } from 'react'
import Stores from './_components/Stores'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 52 chars
  title: 'All Stores — Top Coupon Websites in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 153 chars
  description:
    'Browse all stores on CouponScrew — one of India\'s top coupon websites. Find the best coupon sites & best online coupon sites for every brand you love.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores',
  },

  openGraph: {
    title: 'All Stores — Top Coupon Websites in India | CouponScrew',
    description:
      'Browse all stores on CouponScrew — one of India\'s top coupon websites. Find the best coupon sites & best online coupon sites for every brand you love.',
    url: 'https://www.couponscrew.com/stores',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'All Stores — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'All Stores — Top Coupon Websites in India | CouponScrew',
    description:
      'Browse all stores on CouponScrew — one of India\'s top coupon websites. Find the best coupon sites & best online coupon sites for every brand you love.',
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
      '@type': 'CollectionPage',
      name: 'All Stores — CouponScrew',
      url: 'https://www.couponscrew.com/stores',
      description:
        'Browse all stores and brands available on CouponScrew with verified coupon codes and deals.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
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
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'All Stores on CouponScrew',
      description: 'Complete list of stores and brands with verified coupon codes on CouponScrew.',
      url: 'https://www.couponscrew.com/stores',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amazon',
          url: 'https://www.couponscrew.com/stores/amazon',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Flipkart',
          url: 'https://www.couponscrew.com/stores/flipkart',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Myntra',
          url: 'https://www.couponscrew.com/stores/myntra',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Swiggy',
          url: 'https://www.couponscrew.com/stores/swiggy',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Zomato',
          url: 'https://www.couponscrew.com/stores/zomato',
        },
      ],
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
        <Stores />
      </Suspense>
    </>
  )
}