import type { Metadata } from 'next'
import { Suspense } from 'react'
import IkeaStore from './_components/IkeaStore'
import { IKEA_COUPONS } from './_components/ikeaCoupons'

const TITLE = 'IKEA Coupon Code – Get 80% OFF LED Lights | Oct 2026'
const DESCRIPTION = 'Save more with the latest IKEA Coupon Code and IKEA Promo Code. Enjoy 80% OFF KNOPPSLINGA LED Lights and 66% OFF LED Batten Lights. Shop furniture, mattresses, lighting, storage solutions, and home essentials at the best prices this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/ikea-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/ikea-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'IKEA Coupon Code — CouponsCrew' }],
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

const ikeaOffers = IKEA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `IKEA ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/ikea-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/ikea-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/ikea-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'IKEA Coupon Code', item: 'https://www.couponscrew.com/stores/ikea-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for IKEA)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/ikea-coupon-code#brand',
      name: 'IKEA',
      url: 'https://www.ikea.com/in/en/',
      sameAs: ['https://en.wikipedia.org/wiki/IKEA'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/ikea-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use an IKEA coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add your chosen home products or furniture to your IKEA bag and proceed to checkout. On the order review page, click on \"Have a voucher code?\", enter your promo code in the box, and click Apply to redeem your discount."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes on IKEA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, IKEA allows only one promo code or voucher code to be applied per transaction. Choose the code that gives you the maximum savings for your current order."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my IKEA promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your promo code might fail if it has expired, applies only to specific IKEA Family members or categories, requires a higher minimum purchase amount, or excludes delivery charges."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the best IKEA offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We keep this IKEA store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates."
      }
    },
    {
      "@type": "Question",
      "name": "Does IKEA offer free delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA occasionally runs free shipping or discounted parcel delivery promotions for IKEA Family members on select small items or orders meeting specific cart thresholds."
      }
    },
    {
      "@type": "Question",
      "name": "How often are IKEA coupons updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an IKEA coupon code for India right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA India rarely runs public coupon codes. The dependable savings are IKEA Family member prices, points (1 point per ₹50 spent) and the IKEA Sale. Check this page and ikea.com/in for any current codes."
      }
    },
    {
      "@type": "Question",
      "name": "Is IKEA Family free in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Joining is free, and you get member prices on selected products, points, early access to the IKEA Sale and 14-day damage protection on items you transport or assemble yourself."
      }
    },
    {
      "@type": "Question",
      "name": "What is IKEA India's return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have 365 days to return or exchange most items for a full refund, even if opened or assembled, with a receipt. Items in original packaging are refunded to your payment method; others to an IKEA refund card."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return an IKEA mattress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can exchange it once within 365 days, after using it for at least 30 days, if it's clean and unstained."
      }
    },
    {
      "@type": "Question",
      "name": "Do IKEA Canada promo codes work in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. IKEA India has its own website, prices and offers. Only codes valid on ikea.com/in work here."
      }
    },
    {
      "@type": "Question",
      "name": "Does IKEA deliver to my city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IKEA delivers to many districts in Karnataka, Maharashtra, Telangana, Andhra Pradesh and Tamil Nadu, plus areas around its stores. Enter your pin code on ikea.com/in to check."
      }
    },
    {
      "@type": "Question",
      "name": "Where are IKEA stores in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Large stores are in Hyderabad, Navi Mumbai and Bengaluru, with city stores in Mumbai (Worli) and Delhi (Pacific Mall and Saket)."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/ikea-coupon-code#offerlist',
      name: 'IKEA Coupon Codes & Offers',
      numberOfItems: ikeaOffers.length,
      itemListElement: ikeaOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...ikeaOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <IkeaStore />
      </Suspense>
    </>
  )
}