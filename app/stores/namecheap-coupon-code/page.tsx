import type { Metadata } from 'next'
import { Suspense } from 'react'
import NamecheapStore from './_components/NamecheapStore'
import { NAMECHEAP_COUPONS } from './_components/namecheapCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "Namecheap Coupon Code - Up to X% OFF + <hook> | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Namecheap Coupon Code — CouponsCrew' }],
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

const namecheapOffers = NAMECHEAP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Namecheap ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/namecheap-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Namecheap Coupon Code', item: 'https://www.couponscrew.com/stores/namecheap-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Namecheap)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code#brand',
      name: 'Namecheap',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/Namecheap — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Namecheap promo code?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: how-to answer specific to Namecheap checkout flow]' },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on Namecheap?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: stacking rules specific to Namecheap]' },
        },
        {
          '@type': 'Question',
          name: 'Why is my Namecheap promo code not working?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: common reasons a code might fail on Namecheap]' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best Namecheap offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this Namecheap store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.' },
        },
        {
          '@type': 'Question',
          name: 'Does Namecheap offer free domain privacy?',
          acceptedAnswer: { '@type': 'Answer', text: '[TODO: Namecheap WhoisGuard/domain privacy policy details]' },
        },
        {
          '@type': 'Question',
          name: 'How often are Namecheap coupons updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code#offerlist',
      name: 'Namecheap Coupon Codes & Offers',
      numberOfItems: namecheapOffers.length,
      itemListElement: namecheapOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...namecheapOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <NamecheapStore />
      </Suspense>
    </>
  )
}
