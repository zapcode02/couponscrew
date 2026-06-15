import type { Metadata } from 'next'
import Home from './_components/Home'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Save More with CouponScrew — Best Deals & Coupon Codes in India',
  description:
    'Discover verified deals and coupon codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Save on every purchase, updated daily.',

  alternates: {
    canonical: 'https://www.couponscrew.com',
  },

  openGraph: {
    title: 'Save More with CouponScrew — Best Deals & Coupon Codes in India',
    description:
      'Discover verified deals and coupon codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Save on every purchase, updated daily.',
    url: 'https://www.couponscrew.com',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponScrew — Deals & Coupon Codes in India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Save More with CouponScrew — Best Deals & Coupon Codes in India',
    description:
      'Discover verified deals and coupon codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Updated daily.',
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
        'Discount Codes',
        'Online Shopping Deals',
        'Affiliate Offers',
      ],
      sameAs: [
        'https://www.instagram.com/couponscrew',
        'https://www.facebook.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'CouponScrew',
      url: 'https://www.couponscrew.com',
      // SearchAction intentionally omitted — add when /search?q= route is ready
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CouponScrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponScrew is an Indian coupon website where you can find verified deals and coupon codes across 500+ brands including Amazon, Flipkart, Myntra and Swiggy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the coupons on CouponScrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All coupons and deals on CouponScrew are verified and updated daily to ensure they are active and working.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a coupon from CouponScrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find your coupon on CouponScrew, click to reveal the code, copy it, and paste it at checkout on the brand website to get your discount.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponScrew free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponScrew is completely free. We earn a small affiliate commission from brands when you make a purchase using our coupons, at no extra cost to you.',
          },
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
      <Home />
    </>
  )
}