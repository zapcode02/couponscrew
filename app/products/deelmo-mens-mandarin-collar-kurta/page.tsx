import type { Metadata } from 'next'
import { Suspense } from 'react'
import DeelmoKurtaPage from './_components/DeelmoKurtaPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 57 chars
  title: "Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew",

  // Primary keyword once + secondary keywords once | 162 chars
  description:
    "Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.",

  alternates: {
    canonical: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
  },

  openGraph: {
    title: "Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew",
    description:
      "Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.",
    url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "DEELMO Men's Mandarin Collar Kurta Coupons — CouponScrew",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew",
    description:
      "Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.",
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
      '@id': 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta/#webpage',
      url: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
      name: "Deelmo Mandarin Collar Kurta — Cotton Blend, Short Cut | CouponsCrew",
      description: "Shop the Deelmo mandarin collar kurta online – a cotton blend kurta for mens mandarin collar kurta fans. Comes as a short kurta for men. Best deals on CouponsCrew.",
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: "DEELMO Men's Mandarin Collar Kurta",
            item: 'https://www.couponscrew.com/products/deelmo-mens-mandarin-collar-kurta',
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
        <DeelmoKurtaPage />
      </Suspense>
    </>
  )
}
