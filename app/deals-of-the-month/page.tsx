import type { Metadata } from 'next'
import DealOfTheMonth from './_components/DealOfTheMonth'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Deal of the Month — Top Discount Coupons | CouponScrew',

  description:
    'Discover CouponScrew\'s best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.',

  alternates: {
    canonical: 'https://www.couponscrew.com/deals-of-the-month',
  },

  openGraph: {
    title: 'Deal of the Month — Top Discount Coupons | CouponScrew',
    description:
      'Discover CouponScrew\'s best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.',
    url: 'https://www.couponscrew.com/deals-of-the-month',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deal of the Month — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Deal of the Month — Top Discount Coupons | CouponScrew',
    description:
      'Discover CouponScrew\'s best discount coupons of the month. Grab the hottest promo code today and save big with top discount codes across 500+ brands.',
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
      name: 'Deal of the Month — CouponScrew',
      url: 'https://www.couponscrew.com/deals-of-the-month',
      description:
        'Monthly curated discount coupons and promo codes from top brands across India.',
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
            name: 'Deal of the Month',
            item: 'https://www.couponscrew.com/deals-of-the-month',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Best Discount Coupons of the Month',
      description: 'Top discount coupons and promo codes hand-picked every month on CouponScrew.',
      url: 'https://www.couponscrew.com/deals-of-the-month',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Deal 1 Name',
          url: 'https://www.couponscrew.com/deals-of-the-month/deal-1',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Deal 2 Name',
          url: 'https://www.couponscrew.com/deals-of-the-month/deal-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Deal 3 Name',
          url: 'https://www.couponscrew.com/deals-of-the-month/deal-3',
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
      <DealOfTheMonth />
    </>
  )
}
