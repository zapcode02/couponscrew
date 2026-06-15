import type { Metadata } from 'next'
import About from './_components/About'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 52 chars
  title: 'About Us — India\'s Best Coupon Website | CouponScrew',

  // Primary keyword once + both secondary keywords once | 157 chars
  description:
    'CouponScrew is India\'s best coupon website. Explore one of the top online coupon sites offering verified deals from 500+ coupon websites & brands. We help you save more.',

  alternates: {
    canonical: 'https://www.couponscrew.com/about',
  },

  openGraph: {
    title: 'About Us — India\'s Best Coupon Website | CouponScrew',
    description:
      'CouponScrew is India\'s best coupon website. Explore one of the top online coupon sites offering verified deals from 500+ coupon websites & brands. We help you save more.',
    url: 'https://www.couponscrew.com/about',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About CouponScrew — Best Coupon Website India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us — India\'s Best Coupon Website | CouponScrew',
    description:
      'CouponScrew is India\'s best coupon website. Explore one of the top online coupon sites offering verified deals from 500+ coupon websites & brands. We help you save more.',
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
      '@type': 'AboutPage',
      name: 'About CouponScrew',
      url: 'https://www.couponscrew.com/about',
      description:
        'CouponScrew is an Indian coupon website helping shoppers save money with verified deals and offers from 500+ brands.',
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
            name: 'About Us',
            item: 'https://www.couponscrew.com/about',
          },
        ],
      },
    },
    {
      '@type': 'Organization',
      name: 'CouponScrew',
      url: 'https://www.couponscrew.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.couponscrew.com/logo.png',
        width: 200,
        height: 60,
      },
      description:
        'CouponScrew is an Indian coupon website offering verified deals and coupon codes across 500+ brands.',
      foundingDate: '2025',
      areaServed: 'IN',
      knowsAbout: [
        'Coupon Codes',
        'Promo Codes',
        'Discount Deals',
        'Online Shopping Offers',
        'Affiliate Coupons',
      ],
      sameAs: [
        'https://www.instagram.com/couponscrew',
        'https://www.facebook.com/couponscrew',
        'https://twitter.com/couponscrew',
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
      <About />
    </>
  )
}