import type { Metadata } from 'next'
import { Suspense } from 'react'
import SkechersStore from './_components/SkechersStore'
import { SKECHERS_COUPONS } from './_components/skechersCoupons'

const TITLE = 'Skechers Coupon Code – Up to 50% OFF + Free Shipping | Oct 2026'
const DESCRIPTION = 'Save big with verified Skechers coupon codes and promo codes. Get up to 50% OFF the End of Season Sale plus free shipping on men\'s, women\'s and kids\' footwear this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/skechers-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/skechers-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Skechers Coupon Code — CouponsCrew' }],
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

const skechersOffers = SKECHERS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Skechers ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/skechers-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/skechers-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/skechers-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Skechers Coupon Code', item: 'https://www.couponscrew.com/stores/skechers-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Skechers)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/skechers-coupon-code#brand',
      name: 'Skechers',
      url: 'https://www.skechers.in',
      sameAs: ['https://en.wikipedia.org/wiki/Skechers'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/skechers-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Skechers coupon code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Add your chosen shoes to the cart on skechers.in, go to checkout, and enter the code in the "Apply Coupon" field before payment. The discount updates the total instantly.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on Skechers?',
          acceptedAnswer: { '@type': 'Answer', text: 'No — Skechers allows one promo code per order. Skechers Plus member pricing may apply automatically alongside a code, but two separate promo codes generally cannot be stacked.' },
        },
        {
          '@type': 'Question',
          name: 'Why is my Skechers promo code not working?',
          acceptedAnswer: { '@type': 'Answer', text: 'Common reasons: the code has expired, it excludes items already marked down in a sale, your cart is below the minimum order value, or the code was for a different Skechers country store.' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best Skechers offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this Skechers store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.' },
        },
        {
          '@type': 'Question',
          name: 'Does Skechers offer free shipping?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Skechers India offers free standard shipping on all online orders at skechers.in, with no minimum order value required.' },
        },
        {
          '@type': 'Question',
          name: 'How often are Skechers coupons updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/skechers-coupon-code#offerlist',
      name: 'Skechers Coupon Codes & Offers',
      numberOfItems: skechersOffers.length,
      itemListElement: skechersOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...skechersOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <SkechersStore />
      </Suspense>
    </>
  )
}
