import type { Metadata } from 'next'
import SitemapPage from './_components/SitemapPage'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Sitemap — All Pages on CouponsCrew',

  description:
    'Browse every page on CouponsCrew — stores, store categories, products, product categories, blog posts, and company pages — all in one place.',

  alternates: {
    canonical: 'https://www.couponscrew.com/sitemap',
  },

  openGraph: {
    title: 'Sitemap — All Pages on CouponsCrew',
    description:
      'Browse every page on CouponsCrew — stores, store categories, products, product categories, blog posts, and company pages — all in one place.',
    url: 'https://www.couponscrew.com/sitemap',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sitemap — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap — All Pages on CouponsCrew',
    description:
      'Browse every page on CouponsCrew — stores, store categories, products, product categories, blog posts, and company pages — all in one place.',
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
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/#organization',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.couponscrew.com/logo.png',
        width: 200,
        height: 60,
      },
      sameAs: [
        'https://www.facebook.com/couponscrew',
        'https://www.instagram.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.couponscrew.com/#website',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/sitemap#webpage',
      name: 'Sitemap — All Pages on CouponsCrew',
      url: 'https://www.couponscrew.com/sitemap',
      description:
        'Browse every page on CouponsCrew — stores, store categories, products, product categories, blog posts, and company pages — all in one place.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@id': 'https://www.couponscrew.com/#website',
      },
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
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
            name: 'Sitemap',
            item: 'https://www.couponscrew.com/sitemap',
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
      <SitemapPage />
    </>
  )
}
