import type { Metadata } from 'next'
import { Suspense } from 'react'
import MoonCrystalLightPage from './_components/MoonCrystalLightPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 62 chars
  title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',

  // Primary keyword once + secondary keywords once | 161 chars
  description:
    'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
  },

  openGraph: {
    title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
    description:
      'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
    url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desidiya Moon Crystal Night Light Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
    description:
      'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
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
      '@id': 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light/#webpage',
      url: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
      name: 'Desidiya Moon Crystal Night Light — Bedroom Gift | CouponsCrew',
      description: 'Shop the Desidiya moon crystal night light – a crystal ball lamp for led night light for bedroom use. A great moon night light gift. Best deals on CouponsCrew.',
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
            name: 'Desidiya Moon Crystal Ball Night Light',
            item: 'https://www.couponscrew.com/products/desidiya-moon-crystal-night-light',
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
        <MoonCrystalLightPage />
      </Suspense>
    </>
  )
}
