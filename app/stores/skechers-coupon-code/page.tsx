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
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/skechers-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Skechers coupon code in India right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of October 2026, Skechers India's biggest savings come through spend-tier discounts (no code needed): ₹750 off above ₹6,999, ₹2,000 off above ₹12,999, and ₹4,000 off above ₹19,999. For HDFC cardholders, the SmartBuy gift voucher method (up to 8% instant off via Tata Neu Infinity, or 5% cashback + 2.5% instant with other HDFC cards) adds savings on top. Single-use affiliate codes are infrequent on skechers.in — the spend-tier structure is how most of the saving happens."
      }
    },
    {
      "@type": "Question",
      "name": "Does Skechers India offer free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — skechers.in offers free shipping on all orders, with no minimum cart value required."
      }
    },
    {
      "@type": "Question",
      "name": "What is Skechers' return policy in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skechers India accepts returns within 10 days of delivery on eligible items."
      }
    },
    {
      "@type": "Question",
      "name": "What is Skechers Arch Fit and is it worth paying extra for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arch Fit is Skechers' proprietary insole designed with podiatric input — it features a contoured arch and deep heel cup. It's worth the extra cost if you have arch discomfort, flat feet, or spend several hours walking or standing. For buyers who have no foot issues and want a casual walking shoe, a standard GOwalk with Air-Cooled Memory Foam is sufficient."
      }
    },
    {
      "@type": "Question",
      "name": "Are Skechers Slip-ins different from regular slip-ons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Slip-ins use a hands-free entry system — a stretchy heel collar and Heel Pillow that allows you to step in without bending, touching the shoe, or loosening anything. Once in, the heel snaps back into shape and the fit is secure. Standard slip-ons are just shoes without laces; Slip-ins are a distinct construction with Skechers' own IP."
      }
    },
    {
      "@type": "Question",
      "name": "Where else can I buy Skechers in India besides skechers.in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skechers is also available on Amazon India, Flipkart, Myntra, and Ajio. Each platform runs its own discounts and bank offers — Amazon and Flipkart often list bank-card specific deals (ICICI, HDFC, Axis) that can stack with sale prices. Skechers also has standalone stores in major Indian cities."
      }
    }
  ]
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
