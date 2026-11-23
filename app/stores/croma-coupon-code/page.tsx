import type { Metadata } from 'next'
import { Suspense } from 'react'
import CromaStore from './_components/CromaStore'
import { CROMA_COUPONS } from './_components/cromaCoupons'

const TITLE = 'Croma Coupon Code: Up to 73% Off Electronics | Nov 2026'
const DESCRIPTION = 'Use a Croma coupon code to save up to 73% on keyboards and mice, plus 60% off TVs and appliances. Find the latest discount code deals in Nov 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/croma-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/croma-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Croma Coupon Code — CouponsCrew' }],
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

const cromaOffers = CROMA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Croma ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/croma-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/croma-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/croma-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Croma Coupon Code', item: 'https://www.couponscrew.com/stores/croma-coupon-code' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/croma-coupon-code#brand',
      name: 'Croma',
      url: 'https://www.croma.com',
      sameAs: ['https://www.instagram.com/cromaretail', 'https://twitter.com/cromaretail'],
    },
   {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/croma-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best Croma coupon code right now?',
          acceptedAnswer: { '@type': 'Answer', text: 'Croma\'s saving structure runs through bank card offers and Tata Neu NeuCoins rather than traditional promo codes. The most broadly applicable saving is 2–5% in NeuCoins on all purchases using a Tata Neu HDFC Credit Card (valid till December 31, 2026), with up to 10% NeuCoins on Apple, Google Pixel, home and audio, and select Croma-brand products. For instant cash-off, HDFC Bank Easy EMI gives 7.5% off (capped at ₹3,000) on orders above ₹10,000, valid Friday to Sunday. Check CouponsCrew for the latest verified active offers and any exclusive codes before checkout.' },
        },
        {
          '@type': 'Question',
          name: 'Does Croma offer a discount for first-time buyers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Croma occasionally runs first-order offers through its app and website. The availability and terms change by season. Check the croma.com homepage or app for any active new-user savings before your first purchase.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use a Croma discount code on the Tata Neu app?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most Croma offers — including NeuCoins-earning offers and select bank card discounts — apply on the Tata Neu app as well as croma.com. Some specific bank card instant discounts may be limited to croma.com only; check the offer terms at checkout to confirm.' },
        },
        {
          '@type': 'Question',
          name: 'How does the Croma exchange offer work?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bring your old device to a Croma store or initiate the exchange online. Croma assesses the device\'s condition and quotes a base exchange value. For appliances, a 3X multiplier (capped at ₹5,000) applies on carts above ₹25,000. For laptops and smartphones, an additional exchange bonus of up to ₹21,000 may apply depending on the offer period. The final saving is applied against the new product\'s price.' },
        },
        {
          '@type': 'Question',
          name: 'Is ZipCare extended warranty worth buying at Croma?',
          acceptedAnswer: { '@type': 'Answer', text: 'ZipCare covers mechanical and electrical failure beyond the manufacturer warranty period. It\'s most worthwhile on high-ticket products you plan to use for three-plus years — premium laptops, ACs, televisions — where out-of-warranty repair costs are high. It doesn\'t cover accidental damage, which requires a separate ZipCare Protect plan.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/croma-coupon-code#offerlist',
      name: 'Croma Coupon Codes & Offers',
      numberOfItems: cromaOffers.length,
      itemListElement: cromaOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...cromaOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <CromaStore />
      </Suspense>
    </>
  )
}
