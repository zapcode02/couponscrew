import type { Metadata } from 'next'
import { Suspense } from 'react'
import GncStore from './_components/GncStore'
import { GNC_COUPONS } from './_components/gncCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "GNC Coupon Code - Up to X% OFF + <hook> | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/gnc-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/gnc-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'GNC Coupon Code — CouponsCrew' }],
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

const gncOffers = GNC_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `GNC ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/gnc-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/gnc-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/gnc-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'GNC Coupon Code', item: 'https://www.couponscrew.com/stores/gnc-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for GNC)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/gnc-coupon-code#brand',
      name: 'GNC',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/GNC_Holdings — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/gnc-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the GNC coupon code for first order in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GNCFIRST gives ₹150 off your first prepaid order on GNC India (gncindia.com). For a potentially larger saving, GET10 gives 10% off with no minimum and no new-user restriction — or download the GNC India app and use APP300 for ₹300 off on a cart above ₹1,899."
          }
        },
        {
          "@type": "Question",
          "name": "Is GNC India and Guardian the same?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Guardian Health & Beauty is GNC's authorised operating partner in India. GNC India products are sold through gncindia.com under this partnership. The stores are the same for Indian shoppers. However, GNC US (gnc.com) is a separate storefront — US coupon codes do not work on gncindia.com."
          }
        },
        {
          "@type": "Question",
          "name": "Does GNC India offer free shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — GNC India offers free shipping on orders above ₹799 across India. Orders below ₹799 carry a standard delivery charge."
          }
        },
        {
          "@type": "Question",
          "name": "What is the GNC PRO Access loyalty programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GNC PRO Access (also called myGNC Rewards) is GNC's loyalty programme giving members exclusive prices, early access to sales, and additional savings. In India, signing up on gncindia.com gives you access to member-only prices shown when you browse while signed in. The exact current benefits are available on the GNC India loyalty page."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a US GNC coupon code on GNC India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. GNC US (gnc.com) and GNC India (gncindia.com) are separate platforms with different checkout systems. A US coupon code will not apply at GNC India checkout, and GNC India codes will not work on gnc.com."
          }
        },
        {
          "@type": "Question",
          "name": "Does GNC India sell creatine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — GNC India's creatine range includes GNC Pro Performance Creatine Monohydrate, starting from around ₹469 for smaller units. Creatine is one of GNC India's highest-discounted categories, with deals going up to 70% off during sale periods."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/gnc-coupon-code#offerlist',
      name: 'GNC Coupon Codes & Offers',
      numberOfItems: gncOffers.length,
      itemListElement: gncOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...gncOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <GncStore />
      </Suspense>
    </>
  )
}
