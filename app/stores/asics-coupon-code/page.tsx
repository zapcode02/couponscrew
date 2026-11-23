import type { Metadata } from 'next'
import { Suspense } from 'react'
import AsicsStore from './_components/AsicsStore'
import { ASICS_COUPONS } from './_components/asicsCoupons'

const TITLE = 'ASICS Coupon Code: Up to 50% Off Running Shoes | Nov 2026'
const DESCRIPTION = 'Use an ASICS coupon code to save up to 50% on JOLT 4, TRABUCO 14, and more. Find the latest discount code offers on running and lifestyle shoes in Nov 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/asics-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/asics-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Asics Coupon Code — CouponsCrew' }],
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

const asicsOffers = ASICS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Asics ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/asics-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/asics-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/asics-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Asics Coupon Code', item: 'https://www.couponscrew.com/stores/asics-coupon-code' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/asics-coupon-code#brand',
      name: 'Asics',
      url: 'https://www.asics.com/in',
      sameAs: ['https://www.instagram.com/asicsindia', 'https://twitter.com/asics'],
    },
    {
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/asics-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best ASICS coupon code for India right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of November 2026, the most broadly useful code-based offer is flat 10% off for first-time buyers (valid till November 30, 2026). For larger first orders, flat 12% off applies on carts above ₹5,999. The sitewide sale (up to 60% off) and the bestseller extra 10% offer are automatic — no code needed. Check CouponsCrew for the latest active codes before checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ASICS footwear available on Flipkart or Myntra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ASICS shoes are listed on both Flipkart and Myntra. However, official discounts and codes from asics.com/in are platform-specific — a code that works on the ASICS website will not apply on a third-party marketplace. Each platform runs its own promotions independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does ASICS India delivery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard delivery on asics.com/in takes 4–5 working days. Free shipping applies on orders above ₹1,299.',
      },
    },
    {
      '@type': 'Question',
      name: "Can I return ASICS shoes if they don't fit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ASICS India accepts returns within 7 days of delivery, and return shipping is free. Cancellations are not accepted after an order is placed — returns must be initiated post-delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GEL-Kayano and GEL-Cumulus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GEL-Kayano is ASICS's stability shoe, designed for runners who overpronate. GEL-Cumulus is a neutral shoe for runners without significant pronation issues. Both use GEL cushioning and are built for high-mileage training, but the Kayano adds structured medial support (FluidSupport in the 33) that the Cumulus doesn't have. If you're unsure whether you overpronate, check your older running shoes — if the inner heel wears faster than the outer edge, overpronation is likely.",
      },
    },
  ],
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/asics-coupon-code#offerlist',
      name: 'Asics Coupon Codes & Offers',
      numberOfItems: asicsOffers.length,
      itemListElement: asicsOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...asicsOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <AsicsStore />
      </Suspense>
    </>
  )
}
