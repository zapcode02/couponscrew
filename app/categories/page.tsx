import type { Metadata } from 'next'
import Categories from './_components/Categories'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 53 chars
  title: 'Shop by Category — Discount Code Sites | CouponScrew',

  // Primary keyword once + both secondary keywords once | 156 chars
  description:
    'Explore all categories on CouponScrew — your go-to discount code sites for savings. Find the best coupon code sites & best coupon code websites across India.',

  alternates: {
    canonical: 'https://www.couponscrew.com/categories',
  },

  openGraph: {
    title: 'Shop by Category — Discount Code Sites | CouponScrew',
    description:
      'Explore all categories on CouponScrew — your go-to discount code sites for savings. Find the best coupon code sites & best coupon code websites across India.',
    url: 'https://www.couponscrew.com/categories',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Categories — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shop by Category — Discount Code Sites | CouponScrew',
    description:
      'Explore all categories on CouponScrew — your go-to discount code sites for savings. Find the best coupon code sites & best coupon code websites across India.',
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
      name: 'Categories — CouponScrew',
      url: 'https://www.couponscrew.com/categories',
      description:
        'Browse all deal and coupon categories on CouponScrew — fashion, food, electronics, travel and more.',
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
            name: 'Categories',
            item: 'https://www.couponscrew.com/categories',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'All Categories on CouponScrew',
      description: 'Complete list of coupon and deal categories available on CouponScrew.',
      url: 'https://www.couponscrew.com/categories',
      numberOfItems: 8,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Fashion',
          url: 'https://www.couponscrew.com/categories/fashion',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Food & Dining',
          url: 'https://www.couponscrew.com/categories/food-dining',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Electronics',
          url: 'https://www.couponscrew.com/categories/electronics',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Travel',
          url: 'https://www.couponscrew.com/categories/travel',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Beauty & Health',
          url: 'https://www.couponscrew.com/categories/beauty-health',
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
      <Categories />
    </>
  )
}