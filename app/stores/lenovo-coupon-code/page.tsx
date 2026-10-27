import type { Metadata } from 'next'
import { Suspense } from 'react'
import LenovoStore from './_components/LenovoStore'
import { LENOVO_COUPONS } from './_components/lenovoCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "Lenovo Coupon Code - Up to X% OFF + <hook> | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/lenovo-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/lenovo-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Lenovo Coupon Code — CouponsCrew' }],
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

const lenovoOffers = LENOVO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Lenovo ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/lenovo-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/lenovo-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/lenovo-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Lenovo Coupon Code', item: 'https://www.couponscrew.com/stores/lenovo-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Lenovo)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/lenovo-coupon-code#brand',
      name: 'Lenovo',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/Lenovo — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/lenovo-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best Lenovo coupon code for laptops in India right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of October 2026, CUSTOMOFF (₹7,500 off custom PCs, valid till December 31) is the highest-value code currently active. For gaming laptops, EXTRASAVINGS gives ₹1,500 off LOQ models. For tablet buyers, PAMU20 gives up to 70% off. Beyond codes, check the sitewide credit card cashback — at 10% on Legion and Yoga, it often saves more than a flat code."
          }
        },
        {
          "@type": "Question",
          "name": "Does Lenovo India have a student discount code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Lenovo India offers student discounts through UNiDAYS and Sheer ID (up to 10% each), though the combined cap per order is 5%. ThinkPad E Series also comes with a specific ₹5,000 student saving. Access these through the Lenovo India Education Store on lenovo.com/in."
          }
        },
        {
          "@type": "Question",
          "name": "What is Lenovo's exchange offer and how much will I get?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenovo India's exchange offer (via Cashify) gives a bonus of ₹2,500–₹15,000 on top of your old device's base trade-in value, depending on the price of the new product you're buying. The bonus is paid within 30 days of pickup, not as an upfront discount."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Lenovo promo code with no-cost EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lenovo India's cashback offers — including those tied to codes — are excluded from no-cost EMI transactions. You get one or the other: either pay in full and claim cashback, or pay in installments at 0% interest."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Lenovo IdeaPad and ThinkPad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IdeaPad is Lenovo's consumer laptop range — lighter, thinner, and focused on everyday tasks and student use (₹35,000–₹65,000). ThinkPad is Lenovo's business laptop range, built to military durability standards, with a better keyboard, longer support lifecycle, and higher starting price (₹55,000 for ThinkPad E; ₹1,10,000+ for ThinkPad T and X1). ThinkBook sits between the two — business build, consumer pricing."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/lenovo-coupon-code#offerlist',
      name: 'Lenovo Coupon Codes & Offers',
      numberOfItems: lenovoOffers.length,
      itemListElement: lenovoOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...lenovoOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <LenovoStore />
      </Suspense>
    </>
  )
}
