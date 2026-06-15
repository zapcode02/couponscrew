import type { Metadata } from 'next'
import TopBrands from './_components/TopBrands'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 54 chars
  title: 'Top Brands — Best Promo Code Site in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 157 chars
  description:
    'Shop top brands on CouponScrew — the best promo code site in India. Discover best coupon promo code sites & save with verified coupon codes across 500+ brands.',

  alternates: {
    canonical: 'https://www.couponscrew.com/top-brands',
  },

  openGraph: {
    title: 'Top Brands — Best Promo Code Site in India | CouponScrew',
    description:
      'Shop top brands on CouponScrew — the best promo code site in India. Discover best coupon promo code sites & save with verified coupon codes across 500+ brands.',
    url: 'https://www.couponscrew.com/top-brands',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Brands — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Top Brands — Best Promo Code Site in India | CouponScrew',
    description:
      'Shop top brands on CouponScrew — the best promo code site in India. Discover best coupon promo code sites & save with verified coupon codes across 500+ brands.',
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
      name: 'Top Brands — CouponScrew',
      url: 'https://www.couponscrew.com/top-brands',
      description:
        'Browse top brands with verified coupon codes and promo codes on CouponScrew.',
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
            name: 'Top Brands',
            item: 'https://www.couponscrew.com/top-brands',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Top Brands on CouponScrew',
      description: 'Top Indian and international brands with verified coupon codes on CouponScrew.',
      url: 'https://www.couponscrew.com/top-brands',
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
      <TopBrands />
    </>
  )
}