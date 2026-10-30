import type { Metadata } from 'next'
import { Suspense } from 'react'
import ActFibernetStore from './_components/ActFibernetStore'
import { ACT_FIBERNET_COUPONS } from './_components/actFibernetCoupons'

const TITLE = 'ACT Fibernet Coupon Code: 1000 Mbps & Plans from ₹575'
const DESCRIPTION = 'Get the latest ACT Fibernet coupon code and ACT Fibernet discount code for October 2026. Explore 1000 Mbps plans from ₹2,999/month and broadband plans starting at ₹575/month.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/act-fibernet-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/act-fibernet-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'ACT Fibernet Coupon Code — CouponsCrew' }],
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

const actFibernetOffers = ACT_FIBERNET_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `ACT Fibernet ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/act-fibernet-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/act-fibernet-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/act-fibernet-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'ACT Fibernet Coupon Code', item: 'https://www.couponscrew.com/stores/act-fibernet-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for ACT Fibernet)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/act-fibernet-coupon-code#brand',
      name: 'ACT Fibernet',
      url: 'https://www.actcorp.in',
      sameAs: ['https://en.wikipedia.org/wiki/Atria_Convergence_Technologies'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/act-fibernet-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does ACT Fibernet have a coupon code for new connections in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of October 2026, ACT Fibernet does not release standard affiliate promo codes. The main new-connection offer is ₹500 off on 6-month and 12-month plans (valid till October 31, 2026, no code required). Free installation, free router, and 1–2 free months also apply automatically on eligible plan tenures — these are often worth more than a flat promo code."
          }
        },
        {
          "@type": "Question",
          "name": "Is ACT Fibernet available in my city?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ACT Fibernet operates in approximately 19 cities across 8 states including Karnataka, Tamil Nadu, Telangana, Andhra Pradesh, Delhi, Gujarat, Rajasthan, and Uttar Pradesh. Key cities include Bengaluru, Hyderabad, Chennai, Delhi, Madurai, Jaipur, Lucknow, and Ahmedabad. Even within a covered city, street-level availability depends on fibre infrastructure — check your exact address at actcorp.in before subscribing."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cheapest ACT Fibernet plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entry-level plans start at approximately ₹525–₹575/month for 50 Mbps, depending on the city. The Performance Pack (internet-only) at any speed tier is typically the lowest-priced option for that speed, since it excludes the OTT bundle cost."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ACT Fibernet installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ACT Fibernet typically installs within 2–5 working days of subscribing, subject to local technician availability. Installation is free on 6-month and longer plans; shorter plans may carry a ₹1,000 installation charge."
          }
        },
        {
          "@type": "Question",
          "name": "Does ACT Fibernet truly offer unlimited data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plans are marketed as unlimited, and for most household usage they work that way. A Fair Usage Policy applies — very high-volume usage in a single billing month may result in reduced speeds for the remainder of that month. Standard streaming, gaming, video calling, and remote work are well within normal usage for all plan tiers."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/act-fibernet-coupon-code#offerlist',
      name: 'ACT Fibernet Coupon Codes & Offers',
      numberOfItems: actFibernetOffers.length,
      itemListElement: actFibernetOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...actFibernetOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <ActFibernetStore />
      </Suspense>
    </>
  )
}