import type { Metadata } from 'next'
import { Suspense } from 'react'
import FnpStore from './_components/FnpStore'
import { FNP_COUPONS } from './_components/fnpCoupons'

const TITLE = 'FNP Coupon Code: Up to 70% Off Gifts & Hampers | Nov 2026'
const DESCRIPTION = 'Use an FNP coupon code to save up to 70% on festive hampers and 50% on plants. Find the latest discount code deals with verified offers in Nov 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/fnp-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/fnp-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'FNP Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'geo.region': 'IN', 'geo.country': 'IN', language: 'en-IN' },
}

const titleCase = (s: string) => s.toLowerCase().split(' ').map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1))).join(' ')

const fnpOffers = FNP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `FNP ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/fnp-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/fnp-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/fnp-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'FNP Coupon Code', item: 'https://www.couponscrew.com/stores/fnp-coupon-code' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/fnp-coupon-code#brand',
      name: 'FNP',
      url: 'https://www.fnp.com',
      sameAs: ['https://www.instagram.com/fnpindia', 'https://twitter.com/fnpindia'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/fnp-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wrong product category for the code.',
          acceptedAnswer: { '@type': 'Answer', text: 'FCD12RO applies only to roses. If your cart has tulips or lilies, the code won\'t activate. FCD10AG is anniversary gifts only — it won\'t apply to general flowers or birthday orders even if they\'re for an anniversary. Match the code exactly to the category listed.' },
        },
        {
          '@type': 'Question',
          name: 'Cart below the minimum.',
          acceptedAnswer: { '@type': 'Answer', text: 'FCD125BC requires a minimum of ₹849. If your birthday cake order comes in at ₹799, the code won\'t apply. Add a small add-on (a greeting card, a 100g chocolate piece) to push the cart over.' },
        },
        {
          '@type': 'Question',
          name: 'Combining two discount codes.',
          acceptedAnswer: { '@type': 'Answer', text: 'FNP allows only one coupon code per order. If you\'ve applied FCD10FB and then try to enter FCD15S, the second code will reject. Remove the first code before entering the second.' },
        },
        {
          '@type': 'Question',
          name: 'Bank card code with the wrong card.',
          acceptedAnswer: { '@type': 'Answer', text: 'HDFC20 requires HDFC payment. FNP15KTK requires a Kotak card or net banking. Using an HDFC code with a Kotak card won\'t work. Confirm the code matches your payment instrument before entering it.' },
        },
        {
          '@type': 'Question',
          name: 'Code only valid on fnp.com, not the app.',
          acceptedAnswer: { '@type': 'Answer', text: 'HDFC20 specifically applies on fnp.com only. If you\'re booking through the FNP app, switch to the website for that code.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/fnp-coupon-code#offerlist',
      name: 'FNP Coupon Codes & Offers',
      numberOfItems: fnpOffers.length,
      itemListElement: fnpOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...fnpOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <FnpStore />
      </Suspense>
    </>
  )
}
