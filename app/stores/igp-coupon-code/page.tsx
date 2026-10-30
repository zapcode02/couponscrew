import type { Metadata } from 'next'
import { Suspense } from 'react'
import IgpStore from './_components/IgpStore'
import { IGP_COUPONS } from './_components/igpCoupons'

const TITLE = 'IGP Coupon Code: Get 50% + 10% Off Bhai Dooj Gifts | Oct 26'
const DESCRIPTION = 'Get the latest IGP coupon code and IGP discount code for October 2026. Enjoy up to 50% + 10% OFF Bhai Dooj gifts, free delivery, and 5% cashback on eligible orders.'

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
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/igp-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best IGP coupon code right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of October 2026, CK20 gives the highest percentage off at 20% on orders above ₹1,299 — valid until October 31. FLOWER12 gives 12% off with a lower minimum of ₹199. For HDFC cardholders, buying an IGP gift voucher through HDFC SmartBuy (flat 17.5% instant off on select cards) may save more than either code, particularly on larger orders. Stack CashKaro's 9–10% cashback on top for maximum saving."
          }
        },
        {
          "@type": "Question",
          "name": "Does IGP offer same-day delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — IGP offers same-day delivery in 400+ cities and 30-minute delivery in 25+ cities. Fresh flowers and cakes qualify for express slots. Personalised items require 2–3 additional production days and do not qualify for same-day or express delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel an IGP order after placing it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the product type. Standard courier items can be cancelled before dispatch — contact support immediately after ordering. Personalised gifts (photo products, engraved items, custom cakes) cannot be cancelled once confirmed. Perishables (fresh flowers and plain cakes) are not refunded, but IGP issues a replacement if you report a problem within 24 hours of delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Does IGP coupon code work with CashKaro cashback?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can use a valid coupon code at IGP checkout and earn CashKaro cashback on the same order, as long as you shop through the CashKaro portal link (not the app), and pay without IGP Wallet or gift vouchers."
          }
        },
        {
          "@type": "Question",
          "name": "Is IGP reliable for international delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IGP ships to 100+ countries for international orders and processes most international deliveries within 4–7 business days. For NRIs sending gifts to Indian addresses, the delivery is domestic (within India) — you just pay from abroad using an international card. This typically processes faster than true cross-border shipping."
          }
        }
      ]
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