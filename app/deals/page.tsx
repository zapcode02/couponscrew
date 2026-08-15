import type { Metadata } from 'next'
import Deals from './_components/Deals'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 55 chars
  title: 'Coupons for Online Shopping in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 154 chars
  description:
    'Find the best coupons for online shopping at CouponScrew. Browse top deals sites for deals and discounts across 500+ brands — updated daily.',

  alternates: {
    canonical: 'https://www.couponscrew.com/deals',
  },

  openGraph: {
    title: 'Coupons for Online Shopping in India | CouponScrew',
    description:
      'Find the best coupons for online shopping at CouponScrew. Browse top deals sites for deals and discounts across 500+ brands — updated daily.',
    url: 'https://www.couponscrew.com/deals',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deals — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Coupons for Online Shopping in India | CouponScrew',
    description:
      'Find the best coupons for online shopping at CouponScrew. Browse top deals sites for deals and discounts across 500+ brands — updated daily.',
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
      name: 'Deals — CouponScrew',
      url: 'https://www.couponscrew.com/deals',
      description:
        'Browse all deals and coupons for online shopping across 500+ brands on CouponScrew.',
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
            name: 'Deals',
            item: 'https://www.couponscrew.com/deals',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Best Deals & Coupons for Online Shopping',
      description: 'All verified deals and coupons for online shopping across top Indian brands.',
      url: 'https://www.couponscrew.com/deals',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Pepperfry Coupon Code',
          url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: "Acnos Premium Girl's Heart Shape Bangle Analog Watch, Pack of 2",
          url: 'https://www.couponscrew.com/products/acnos-bangle-watch-pack-of-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Minimalist Anti-Pigmentation Kit, Face Wash, Serum & Sunscreen Combo',
          url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
          url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Desidiya Moon Crystal Ball Night Light with Wooden Base',
          url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
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
      <Deals />
    </>
  )
}