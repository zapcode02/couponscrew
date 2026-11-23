import type { Metadata } from 'next'
import { Suspense } from 'react'
import CleartripStore from './_components/CleartripStore'
import { CLEARTRIP_COUPONS } from './_components/cleartripCoupons'

const TITLE = 'Cleartrip Coupon Code: Up to 50% Off Flights & Hotels | Nov 2026'
const DESCRIPTION = 'Use a Cleartrip coupon code to save up to 50% on IndiGo add-ons and 40% on hotels. Find the latest discount code offers for Nov 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/cleartrip-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/cleartrip-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Cleartrip Coupon Code — CouponsCrew' }],
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

const cleartripOffers = CLEARTRIP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Cleartrip ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/cleartrip-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/cleartrip-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/cleartrip-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Cleartrip Coupon Code', item: 'https://www.couponscrew.com/stores/cleartrip-coupon-code' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/cleartrip-coupon-code#brand',
      name: 'Cleartrip',
      url: 'https://www.cleartrip.com',
      sameAs: ['https://www.instagram.com/cleartrip', 'https://twitter.com/cleartrip'],
    },
    {
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/cleartrip-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best Cleartrip coupon code for new users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CTFIRST gives 10% off a first domestic flight (capped at ₹1,000), 8% off a first international flight (capped at ₹1,500), and 25% off a first domestic hotel booking with a minimum of ₹3,999 (capped at ₹2,500). It's valid till December 31, 2026 and applies on the website, app, and mobile site.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use more than one Cleartrip discount code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, only one coupon code can be applied per booking. However, some bank card offers apply automatically in addition to a promo code — for example, using UPI with NOVUPI can apply on top of a base price that also reflects a sale fare. Check the discount breakdown at checkout to see what has applied before confirming.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a flight on Cleartrip with the best discount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For new users, start with CTFIRST. For returning users, check whether your payment method qualifies for a bank card code (NOVCC for SBI/ICICI credit, NOVUPI for UPI) — these typically offer higher percentage discounts on domestic flights. For specific airlines, CTINDIGO and CTAKASA can offer up to ₹5,000 off. CouponsCrew lists the latest verified codes before checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Cleartrip have codes for train bookings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cleartrip's promo codes primarily cover flights, hotels, and buses. Train bookings through Cleartrip don't typically have separate code-based discounts — savings there come from avoiding the IRCTC convenience fee on some plans.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Cleartrip FreedomFare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreedomFare is an optional add-on for international flights that allows full airfare refund if you cancel at least 24 hours before departure — including on non-refundable tickets. The refund goes back within 7 working days. The add-on premium and convenience fee are non-refundable.',
      },
    },
  ],
},,
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/cleartrip-coupon-code#offerlist',
      name: 'Cleartrip Coupon Codes & Offers',
      numberOfItems: cleartripOffers.length,
      itemListElement: cleartripOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...cleartripOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <CleartripStore />
      </Suspense>
    </>
  )
}
