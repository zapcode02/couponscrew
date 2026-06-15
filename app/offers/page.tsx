import type { Metadata } from 'next'
import Offers from './_components/Offers'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 52 chars
  title: 'Latest Voucher Codes & Offers in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 154 chars
  description:
    'Find the latest voucher codes on CouponScrew. Save big with exclusive discount offers & promo codes across 500+ top Indian brands — updated daily.',

  alternates: {
    canonical: 'https://www.couponscrew.com/offers',
  },

  openGraph: {
    title: 'Latest Voucher Codes & Offers in India | CouponScrew',
    description:
      'Find the latest voucher codes on CouponScrew. Save big with exclusive discount offers & promo codes across 500+ top Indian brands — updated daily.',
    url: 'https://www.couponscrew.com/offers',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Offers — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Latest Voucher Codes & Offers in India | CouponScrew',
    description:
      'Find the latest voucher codes on CouponScrew. Save big with exclusive discount offers & promo codes across 500+ top Indian brands — updated daily.',
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
      name: 'Offers — CouponScrew',
      url: 'https://www.couponscrew.com/offers',
      description:
        'Browse all latest voucher codes, discount offers and promo codes across 500+ brands on CouponScrew.',
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
            name: 'Offers',
            item: 'https://www.couponscrew.com/offers',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Latest Voucher Codes & Discount Offers',
      description: 'Verified voucher codes, discount offers and promo codes updated daily on CouponScrew.',
      url: 'https://www.couponscrew.com/offers',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Offer 1 Name',
          url: 'https://www.couponscrew.com/offers/offer-1',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Offer 2 Name',
          url: 'https://www.couponscrew.com/offers/offer-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Offer 3 Name',
          url: 'https://www.couponscrew.com/offers/offer-3',
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
      <Offers />
    </>
  )
}