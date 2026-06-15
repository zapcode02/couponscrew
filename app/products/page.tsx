import type { Metadata } from 'next'
import Products from './_components/Products'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 51 chars
  title: 'Best Coupon Sites for Online Shopping | CouponScrew',

  // Primary keyword once + both secondary keywords once | 155 chars
  description:
    'CouponScrew is one of the best coupon sites for online shopping in India. Find verified deals on every discount code website & discount web site — updated daily.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products',
  },

  openGraph: {
    title: 'Best Coupon Sites for Online Shopping | CouponScrew',
    description:
      'CouponScrew is one of the best coupon sites for online shopping in India. Find verified deals on every discount code website & discount web site — updated daily.',
    url: 'https://www.couponscrew.com/products',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Products — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best Coupon Sites for Online Shopping | CouponScrew',
    description:
      'CouponScrew is one of the best coupon sites for online shopping in India. Find verified deals on every discount code website & discount web site — updated daily.',
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
      name: 'Products — CouponScrew',
      url: 'https://www.couponscrew.com/products',
      description:
        'Browse all products with verified coupon codes and deals across 500+ brands on CouponScrew.',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'All Products on CouponScrew',
      description: 'Complete list of products with verified coupon codes and deals on CouponScrew.',
      url: 'https://www.couponscrew.com/products',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Product 1 Name',
          url: 'https://www.couponscrew.com/products/product-1',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Product 2 Name',
          url: 'https://www.couponscrew.com/products/product-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Product 3 Name',
          url: 'https://www.couponscrew.com/products/product-3',
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
      <Products />
    </>
  )
}