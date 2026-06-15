import type { Metadata } from 'next'
import Terms from './_components/Terms'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 58 chars
  title: 'Terms & Conditions — Best Websites for Couponing | CouponScrew',

  // Primary keyword once + both secondary keywords once | 156 chars
  description:
    'Review CouponScrew\'s terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.',

  alternates: {
    canonical: 'https://www.couponscrew.com/terms',
  },

  openGraph: {
    title: 'Terms & Conditions — Best Websites for Couponing | CouponScrew',
    description:
      'Review CouponScrew\'s terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.',
    url: 'https://www.couponscrew.com/terms',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponScrew Terms & Conditions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions — Best Websites for Couponing | CouponScrew',
    description:
      'Review CouponScrew\'s terms of use — one of the best websites for couponing in India. Rules for using our best coupon sites for online shopping & best coupon code websites.',
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
      name: 'Terms & Conditions — CouponScrew',
      url: 'https://www.couponscrew.com/terms',
      description:
        'Terms and conditions of CouponScrew detailing the rules and guidelines for using our coupon and deals platform.',
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
            name: 'Terms & Conditions',
            item: 'https://www.couponscrew.com/terms',
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
      <Terms />
    </>
  )
}