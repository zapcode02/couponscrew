import type { Metadata } from 'next'
import DealsOfTheDay from './_components/DealsOfTheDay'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 56 chars
  title: 'Deals of the Day — Best Deals & Discounts | CouponScrew',

  // Primary keyword once + both secondary keywords once | 155 chars
  description:
    'Grab today\'s best deals and discounts on CouponScrew. Shop top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.',

  alternates: {
    canonical: 'https://www.couponscrew.com/deals-of-the-day',
  },

  openGraph: {
    title: 'Deals of the Day — Best Deals & Discounts | CouponScrew',
    description:
      'Grab today\'s best deals and discounts on CouponScrew. Shop top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.',
    url: 'https://www.couponscrew.com/deals-of-the-day',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deals of the Day — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Deals of the Day — Best Deals & Discounts | CouponScrew',
    description:
      'Grab today\'s best deals and discounts on CouponScrew. Shop top discount offers across fashion, food & electronics — best offers for online shopping, updated daily.',
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
      name: 'Deals of the Day — CouponScrew',
      url: 'https://www.couponscrew.com/deals-of-the-day',
      description:
        'Daily updated deals and discounts from 500+ brands across fashion, food, electronics and more.',
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
            name: 'Deals of the Day',
            item: 'https://www.couponscrew.com/deals-of-the-day',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Today\'s Best Deals & Discounts',
      description: 'Hand-picked deals and discount offers updated every day on CouponScrew.',
      url: 'https://www.couponscrew.com/deals-of-the-day',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Deal 1 Name',
          url: 'https://www.couponscrew.com/deals-of-the-day/deal-1',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Deal 2 Name',
          url: 'https://www.couponscrew.com/deals-of-the-day/deal-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Deal 3 Name',
          url: 'https://www.couponscrew.com/deals-of-the-day/deal-3',
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
      <DealsOfTheDay />
    </>
  )
}