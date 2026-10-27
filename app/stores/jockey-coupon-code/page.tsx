import type { Metadata } from 'next'
import { Suspense } from 'react'
import JockeyStore from './_components/JockeyStore'
import { JOCKEY_COUPONS } from './_components/jockeyCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "Jockey Coupon Code - Up to X% OFF + <hook> | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/jockey-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/jockey-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Jockey Coupon Code — CouponsCrew' }],
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

const jockeyOffers = JOCKEY_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Jockey ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/jockey-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/jockey-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/jockey-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Jockey Coupon Code', item: 'https://www.couponscrew.com/stores/jockey-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Jockey)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/jockey-coupon-code#brand',
      name: 'Jockey',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/Jockey_International — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/jockey-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best Jockey coupon code in India right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of October 2026, FLATRS.23OFF gives a flat ₹23 off on a minimum cart of ₹199 at jockeyindia.com — valid until 27 October 2026. For bigger savings, HDFC cardholders get 20% off on carts above ₹3,999, and ICICI cardholders get ₹500 off sitewide — neither requires a code. If you're a new user on Myntra, the extra 30% first-order discount may save more than any available code."
          }
        },
        {
          "@type": "Question",
          "name": "Is Jockey India different from Jockey USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Jockey India is operated by Page Industries Limited under an exclusive licence from Jockey International (US). The two are separate storefronts — jockeyindia.com and jockey.com. Codes from US sites won't work in India, and the product ranges differ."
          }
        },
        {
          "@type": "Question",
          "name": "Does Jockey India offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — orders above ₹599 ship free across India. Below ₹599, a flat ₹39 shipping fee applies. COD orders carry an additional ₹69 fee on top of shipping."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a Jockey discount code on Amazon or Flipkart?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Jockey coupon codes from jockeyindia.com are not valid on Amazon, Flipkart, or Myntra. Each platform runs its own Jockey deals independently. Amazon offers ICICI/Axis bank instant discounts; Flipkart runs HDFC offers; Myntra runs first-order and sale deals."
          }
        },
        {
          "@type": "Question",
          "name": "What is the return policy on Jockey India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jockey India accepts returns and exchanges on most products. Where Jockey's own reverse pickup service is unavailable at your location, the return is self-shipped, and Jockey credits a ₹100 gift card to your account to offset the courier cost."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/jockey-coupon-code#offerlist',
      name: 'Jockey Coupon Codes & Offers',
      numberOfItems: jockeyOffers.length,
      itemListElement: jockeyOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...jockeyOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <JockeyStore />
      </Suspense>
    </>
  )
}
