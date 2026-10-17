import type { Metadata } from 'next'
import { Suspense } from 'react'
import MyproteinStore from './_components/MyproteinStore'
import { MYPROTEIN_COUPONS } from './_components/myproteinCoupons'

const TITLE = 'Myprotein Coupon Code – Up to 50% OFF + Extra 10% | Oct 2026'
const DESCRIPTION = 'Save big with verified Myprotein coupon codes and promo codes. Get up to 50% OFF plus extra discounts on whey protein, vitamins, snacks, and gym wear this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/myprotein-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/myprotein-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Myprotein Coupon Code — CouponsCrew' }],
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

const myproteinOffers = MYPROTEIN_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Myprotein ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/myprotein-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/myprotein-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/myprotein-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Myprotein Coupon Code', item: 'https://www.couponscrew.com/stores/myprotein-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Myprotein)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/myprotein-coupon-code#brand',
      name: 'Myprotein',
      url: 'https://www.myprotein.co.in',
      sameAs: ['https://en.wikipedia.org/wiki/Myprotein'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/myprotein-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What MyProtein discount is available right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When we checked on 17 October 2026, MyProtein India was giving an extra 5% off orders above ₹5,000 and 10% off above ₹10,000, free crew socks above ₹7,000, and free delivery on the app."
      }
    },
    {
      "@type": "Question",
      "name": "Where do I enter a MyProtein discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the basket on myprotein.co.in or the MyProtein app, in the discount code field, before you pay."
      }
    },
    {
      "@type": "Question",
      "name": "Why doesn't my MyProtein referral code work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most referral codes found online are for the UK store. Codes only work on the MyProtein country site they were issued for."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Impact Whey and Impact Whey Isolate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Impact Whey Protein is listed at over 80% protein per serving. Impact Whey Isolate is made from 100% whey protein isolate and listed at over 90% protein with 1% fat. The isolate costs more."
      }
    },
    {
      "@type": "Question",
      "name": "How much is MyProtein Impact Whey in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 1kg pack of Impact Whey Protein was ₹4,599 (including taxes) on 17 October 2026, down from ₹4,999."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return MyProtein products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MyProtein India lists 30-day returns on all orders. Check the returns page for conditions, such as whether opened products qualify."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check if MyProtein whey is original?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scan the QR code on the pack to check the batch number, look for the FSSAI licence number, and buy from the official site, app or official marketplace listings."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/myprotein-coupon-code#offerlist',
      name: 'Myprotein Coupon Codes & Offers',
      numberOfItems: myproteinOffers.length,
      itemListElement: myproteinOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...myproteinOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <MyproteinStore />
      </Suspense>
    </>
  )
}