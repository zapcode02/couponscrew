import type { Metadata } from 'next'
import Contact from './_components/Contact'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 55 chars
  title: 'Contact Us — Top Coupon Website in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 155 chars
  description:
    'Get in touch with CouponScrew, one of India\'s top coupon websites. Find us for queries about best coupon sites, deals, or any discount code website support.',

  alternates: {
    canonical: 'https://www.couponscrew.com/contact',
  },

  openGraph: {
    title: 'Contact Us — Top Coupon Website in India | CouponScrew',
    description:
      'Get in touch with CouponScrew, one of India\'s top coupon websites. Find us for queries about best coupon sites, deals, or any discount code website support.',
    url: 'https://www.couponscrew.com/contact',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CouponScrew — Coupon Website India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Top Coupon Website in India | CouponScrew',
    description:
      'Get in touch with CouponScrew, one of India\'s top coupon websites. Find us for queries about best coupon sites, deals, or any discount code website support.',
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
      '@type': 'ContactPage',
      name: 'Contact CouponScrew',
      url: 'https://www.couponscrew.com/contact',
      description:
        'Contact CouponScrew for support, partnerships, or any queries about our deals and coupon codes.',
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
            name: 'Contact Us',
            item: 'https://www.couponscrew.com/contact',
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
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: 'English',
        areaServed: 'IN',
        email: 'support@couponscrew.com',
      },
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
      <Contact />
    </>
  )
}