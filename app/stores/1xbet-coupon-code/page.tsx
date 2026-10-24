import type { Metadata } from 'next'
import { Suspense } from 'react'
import XbetStore from './_components/XbetStore'
import { XBET_COUPONS } from './_components/xbetCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "1xBet Promo Code - Up to X% Bonus | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims, include 18+ notice]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/1xbet-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/1xbet-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: '1xBet Promo Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
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

const xbetOffers = XBET_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `1xBet ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/1xbet-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/1xbet-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/1xbet-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: '1xBet Promo Code', item: 'https://www.couponscrew.com/stores/1xbet-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for 1xBet)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/1xbet-coupon-code#brand',
      name: '1xBet',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/1xBet — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/1xbet-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a 1xBet promo code?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: how-to answer specific to 1xBet sign-up/deposit flow]' },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple promo codes on 1xBet?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: stacking rules specific to 1xBet]' },
        },
        {
          '@type': 'Question',
          name: 'Why is my 1xBet promo code not working?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: common reasons a code might fail on 1xBet]' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best 1xBet offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this 1xBet store page updated 24/7 with the best bonuses, verified promo codes, and upcoming promotions.' },
        },
        {
          '@type': 'Question',
          name: 'Is 1xBet legal to use in India?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: regional legality/eligibility disclaimer specific to 1xBet — must be factually accurate, not assumed]' },
        },
        {
          '@type': 'Question',
          name: 'How often are 1xBet promo codes updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates promo codes every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/1xbet-coupon-code#offerlist',
      name: '1xBet Promo Codes & Offers',
      numberOfItems: xbetOffers.length,
      itemListElement: xbetOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...xbetOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <XbetStore />
      </Suspense>
    </>
  )
}
