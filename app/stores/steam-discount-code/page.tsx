import type { Metadata } from 'next'
import { Suspense } from 'react'
import SteamStore from './_components/SteamStore'
import { STEAM_COUPONS } from './_components/steamCoupons'

const TITLE = 'Steam Discount Code – Up to 90% OFF Seasonal Sales | Oct 2026'
const DESCRIPTION = 'Verified Steam discounts: up to 90% OFF seasonal sales, up to 75% OFF publisher sales, free wishlist price alerts, and India-specific INR pricing this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/steam-discount-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/steam-discount-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Steam Discount Code — CouponsCrew' }],
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

const steamOffers = STEAM_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Steam ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/steam-discount-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code/#webpage',
      url: 'https://www.couponscrew.com/stores/steam-discount-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Steam Discount Code', item: 'https://www.couponscrew.com/stores/steam-discount-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Steam)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code#brand',
      name: 'Steam',
      url: 'https://store.steampowered.com',
      sameAs: ['https://en.wikipedia.org/wiki/Steam_(service)'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Steam discount code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most Steam discounts are shown directly on the store page during sale events — no code needs to be entered at checkout. Gift cards and wallet codes are redeemed separately under Account > Add Funds.' },
        },
        {
          '@type': 'Question',
          name: 'Can I stack multiple Steam discounts?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sale discounts, regional pricing, and wallet credit (from selling trading cards) can all combine on a single purchase, but Steam does not support separate stackable promo codes beyond the sale price shown.' },
        },
        {
          '@type': 'Question',
          name: 'Why can\'t I get a Steam refund?',
          acceptedAnswer: { '@type': 'Answer', text: 'Refunds are only available within 14 days of purchase and under 2 hours of playtime. Games played beyond this window, or purchased outside the eligibility period, are generally not eligible for a standard refund.' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best Steam deals?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this Steam store page updated 24/7 with the best discounts, sale events, and upcoming promotional periods.' },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to buy Steam keys from third-party resellers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Only buy from Steam directly or well-known, reputable resellers. Unofficial key resellers carry a risk of invalid, region-locked, or fraudulently obtained keys — if in doubt, buy directly on store.steampowered.com.' },
        },
        {
          '@type': 'Question',
          name: 'How often are Steam offers updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates offers every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working offers.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code#offerlist',
      name: 'Steam Discount Codes & Offers',
      numberOfItems: steamOffers.length,
      itemListElement: steamOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...steamOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <SteamStore />
      </Suspense>
    </>
  )
}
