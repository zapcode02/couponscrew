import type { Metadata } from 'next'
import Privacy from './_components/Privacy'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 56 chars
  title: 'Privacy Policy — Safe Digital Coupons | CouponScrew',

  // Primary keyword once + both secondary keywords once | 158 chars
  description:
    'Read CouponScrew\'s privacy policy. We keep your data safe while you enjoy digital coupons across India\'s best discount web site and top discount code sites.',

  alternates: {
    canonical: 'https://www.couponscrew.com/privacy-policy',
  },

  openGraph: {
    title: 'Privacy Policy — Safe Digital Coupons | CouponScrew',
    description:
      'Read CouponScrew\'s privacy policy. We keep your data safe while you enjoy digital coupons across India\'s best discount web site and top discount code sites.',
    url: 'https://www.couponscrew.com/privacy-policy',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponScrew Privacy Policy',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Safe Digital Coupons | CouponScrew',
    description:
      'Read CouponScrew\'s privacy policy. We keep your data safe while you enjoy digital coupons across India\'s best discount web site and top discount code sites.',
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
      name: 'Privacy Policy — CouponScrew',
      url: 'https://www.couponscrew.com/privacy-policy',
      description:
        'Privacy policy of CouponScrew detailing how we collect, use and protect your data.',
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
            name: 'Privacy Policy',
            item: 'https://www.couponscrew.com/privacy-policy',
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
      <Privacy />
    </>
  )
}