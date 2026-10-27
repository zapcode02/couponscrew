import type { Metadata } from 'next'
import { Suspense } from 'react'
import WishStore from './_components/WishStore'
import { WISH_COUPONS } from './_components/wishCoupons'

const TITLE = 'Wish Promo Code – Up to 90% OFF Daily Deals | Oct 2026'
const DESCRIPTION = 'Save big with verified Wish promo codes and discount codes. Get up to 90% OFF Daily Deals, up to 70% OFF electronics, and Clearance markdowns this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/wish-promo-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/wish-promo-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Wish Promo Code — CouponsCrew' }],
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

const wishOffers = WISH_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Wish ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/wish-promo-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code/#webpage',
      url: 'https://www.couponscrew.com/stores/wish-promo-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Wish Promo Code', item: 'https://www.couponscrew.com/stores/wish-promo-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Wish)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code#brand',
      name: 'Wish',
      url: 'https://www.wish.com',
      sameAs: ['https://en.wikipedia.org/wiki/Wish_(company)'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Wish promo code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most Wish discounts are shown directly on the product listing rather than entered as a code. If a code field is shown at checkout, enter it before placing your order to confirm the discount applies.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on Wish?',
          acceptedAnswer: { '@type': 'Answer', text: 'Wish generally does not support stacking multiple promo codes on one order. Daily Deal and Clearance prices are already discounted and apply automatically.' },
        },
        {
          '@type': 'Question',
          name: 'Why is my Wish promo code not working?',
          acceptedAnswer: { '@type': 'Answer', text: 'Common reasons: the offer was seller-specific and not sitewide, the promotional pricing window has ended, or the deal was only valid for first-time app users.' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best Wish offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this Wish store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.' },
        },
        {
          '@type': 'Question',
          name: 'How long does Wish shipping take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Delivery times on Wish vary significantly by seller and item, and can run several weeks since many listings ship from overseas sellers. Check the estimated delivery window shown on the product page before ordering.' },
        },
        {
          '@type': 'Question',
          name: 'How often are Wish coupons updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code#offerlist',
      name: 'Wish Promo Codes & Offers',
      numberOfItems: wishOffers.length,
      itemListElement: wishOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...wishOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <WishStore />
      </Suspense>
    </>
  )
}
