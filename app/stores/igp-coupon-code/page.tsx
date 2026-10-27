import type { Metadata } from 'next'
import { Suspense } from 'react'
import IgpStore from './_components/IgpStore'
import { IGP_COUPONS } from './_components/igpCoupons'

const TITLE = 'IGP Coupon Code – Up to 40% OFF + ₹200 Off First Order | Oct 2026'
const DESCRIPTION = 'Save big with verified IGP coupon codes and promo codes. Get up to 40% OFF sitewide, flat ₹200 off your first order, and up to 25% OFF personalized gifts this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/igp-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/igp-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'IGP Coupon Code — CouponsCrew' }],
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

const igpOffers = IGP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `IGP ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/igp-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/igp-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/igp-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'IGP Coupon Code', item: 'https://www.couponscrew.com/stores/igp-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for IGP)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/igp-coupon-code#brand',
      name: 'IGP',
      url: 'https://www.igp.com',
      sameAs: ['https://www.instagram.com/igp.com'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/igp-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use an IGP coupon code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Add your gift items to the cart on igp.com, go to checkout, and enter the code in the "Apply Coupon" field before payment. The discount updates the order total instantly.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on IGP?',
          acceptedAnswer: { '@type': 'Answer', text: 'No — IGP allows one promo code per order. Occasion-specific sale pricing may already be reflected in the listed price alongside a code, but two separate codes cannot be combined.' },
        },
        {
          '@type': 'Question',
          name: 'Why is my IGP promo code not working?',
          acceptedAnswer: { '@type': 'Answer', text: 'Common reasons: the code has expired, your cart is below the minimum order value, the code excludes personalized or corporate gifting items, or it was limited to new users only.' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best IGP offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this IGP store page updated 24/7 with the best discounts, verified coupon codes, and upcoming occasion-based sale dates.' },
        },
        {
          '@type': 'Question',
          name: 'Does IGP offer same-day delivery?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, IGP offers same-day delivery on cakes, flowers, and select gifts in major Indian cities, subject to ordering before the cut-off time shown on the product page.' },
        },
        {
          '@type': 'Question',
          name: 'How often are IGP coupons updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/igp-coupon-code#offerlist',
      name: 'IGP Coupon Codes & Offers',
      numberOfItems: igpOffers.length,
      itemListElement: igpOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...igpOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <IgpStore />
      </Suspense>
    </>
  )
}
