import type { Metadata } from 'next'
import { Suspense } from 'react'
import ZeptoStore from './_components/ZeptoStore'
import { ZEPTO_COUPONS } from './_components/zeptoCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Zepto Coupon Code – Up to 80% OFF + ₹200 OFF  | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Explore Zepto coupon codes and deals for Aug 2026. Save up to 80% on selected electronics and appliances with a ₹549 minimum cart value, plus get ₹200 OFF on eligible ₹1,299+ orders.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/zepto-coupon-code',
  },

  openGraph: {
    title: 'Zepto Coupon Code – Up to 80% OFF + ₹200 OFF  | Aug 2026',
    description:
      'Explore Zepto coupon codes and deals for Aug 2026. Save up to 80% on selected electronics and appliances with a ₹549 minimum cart value, plus get ₹200 OFF on eligible ₹1,299+ orders.',
    url: 'https://www.couponscrew.com/stores/zepto-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zepto Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Zepto Coupon Code – Up to 80% OFF + ₹200 OFF  | Aug 2026',
    description:
      'Explore Zepto coupon codes and deals for Aug 2026. Save up to 80% on selected electronics and appliances with a ₹549 minimum cart value, plus get ₹200 OFF on eligible ₹1,299+ orders.',
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
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')

const zeptoOffers = ZEPTO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Zepto ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/zepto-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/zepto-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/zepto-coupon-code',
      name: 'Zepto Coupon Code – Up to 80% OFF + ₹200 OFF  | Aug 2026',
      description: 'Explore Zepto coupon codes and deals for Aug 2026. Save up to 80% on selected electronics and appliances with a ₹549 minimum cart value, plus get ₹200 OFF on eligible ₹1,299+ orders.',
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
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Zepto Coupon Code',
            item: 'https://www.couponscrew.com/stores/zepto-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/zepto-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Zepto coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To use a Zepto coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Zepto app. If it is a no-code deal, simply click "Get Deal" to open Zepto and the discount applies automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my Zepto coupon code not working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A coupon might not work due to specific category exclusions, minimum order value requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the offer details listed with each code before applying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every Zepto coupon code listed here is checked before publishing. Codes that stop working are flagged and removed so you only see offers that are currently active.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are Zepto coupons updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our deals team reviews and updates Zepto coupons regularly. Expired promotions are filtered out, so you only spend time on codes that are currently working.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, Zepto allows only one promo code per order. However, coupon codes can often be combined with automatic sitewide offers or select bank/card discounts shown at checkout.',
          },
        },
      ],
    },

    // Offer Schema (one per visible deal card)
    ...zeptoOffers,
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
        <ZeptoStore />
      </Suspense>
    </>
  )
}
