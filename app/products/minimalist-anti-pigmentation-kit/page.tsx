import type { Metadata } from 'next'
import { Suspense } from 'react'
import MinimalistKitPage from './_components/MinimalistKitPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 70 chars
  title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',

  // Primary keyword once + secondary keywords once | 162 chars
  description:
    'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',

  alternates: {
    canonical: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
  },

  openGraph: {
    title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
    description:
      'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
    url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Minimalist Anti-Pigmentation Kit Coupons — CouponScrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
    description:
      'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
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
      '@id': 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit/#webpage',
      url: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
      name: 'Minimalist Anti-Pigmentation Kit — Alpha Arbutin, SPF 50 | CouponsCrew',
      description: 'Shop the Minimalist anti-pigmentation kit online – an alpha arbutin serum kit for anti pigmentation kit for face. A pigmentation kit with sunscreen. CouponsCrew.',
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
            name: 'Minimalist Anti-Pigmentation Kit',
            item: 'https://www.couponscrew.com/products/minimalist-anti-pigmentation-kit',
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
        <MinimalistKitPage />
      </Suspense>
    </>
  )
}
