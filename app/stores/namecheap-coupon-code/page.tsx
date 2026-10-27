import type { Metadata } from 'next'
import { Suspense } from 'react'
import NamecheapStore from './_components/NamecheapStore'
import { NAMECHEAP_COUPONS } from './_components/namecheapCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: '[TODO: "Namecheap Coupon Code - Up to X% OFF + <hook> | <Month Year>", ~58 chars]',
  description: '[TODO: ~148 char description matching title claims]',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
  },
  openGraph: {
    title: '[TODO: same as title]',
    description: '[TODO: same as description]',
    url: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Namecheap Coupon Code — CouponsCrew' }],
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

const namecheapOffers = NAMECHEAP_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Namecheap ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/namecheap-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/namecheap-coupon-code',
      name: '[TODO: same as metadata title]',
      description: '[TODO: same as metadata description]',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Namecheap Coupon Code', item: 'https://www.couponscrew.com/stores/namecheap-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Namecheap)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code#brand',
      name: 'Namecheap',
      url: '[TODO: brand official homepage URL]',
      sameAs: ['[TODO: https://en.wikipedia.org/wiki/Namecheap — verify this page actually exists]'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/namecheap-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Namecheap available in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Namecheap accepts orders from India and ships domains and hosting globally. The key difference from Indian-based registrars is that Namecheap bills in USD, not INR, and does not accept UPI, net banking, or issue GST invoices. Payment is via international Visa, Mastercard, or PayPal."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best Namecheap coupon code for a domain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SPECIAL gives up to 97% off a first domain, and NEWCOM679 gives up to 55% off. For domain transfers specifically from GoDaddy, BYEBYEGD gives up to 20% off. Only one code can be applied per order — test both on your cart and pick the one that saves more."
          }
        },
        {
          "@type": "Question",
          "name": "Does Namecheap offer a student discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Namecheap has run student-specific promotions in the past — typically bundled deals including a free .me domain and discounted hosting for verified students. Availability varies by campaign. Check Namecheap's official promotions page or the affiliate pages for active student deals."
          }
        },
        {
          "@type": "Question",
          "name": "Does Namecheap accept UPI or Indian payment methods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Namecheap does not accept UPI, net banking, or Indian payment apps. It accepts international Visa, Mastercard, and PayPal. Indian buyers should use a card with zero forex markup (IndusInd Bank or IDFC FIRST Bank are commonly recommended) to avoid paying 1.5%–3.5% extra on the USD conversion."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a Namecheap renewal discount?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Namecheap rarely releases coupon codes for renewals — promo codes are almost always for new purchases or transfers. To save on renewal costs, buy longer terms upfront (2–3 years) at the intro rate, or compare the renewal price against a transfer-in offer from a competing registrar before your domain expires."
          }
        },
        {
          "@type": "Question",
          "name": "What is Namecheap's refund policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Namecheap offers a 30-day money-back guarantee on most hosting plans. Domain registrations are generally non-refundable (ICANN requires registrars to pay registry fees on registration). IP addresses purchased as add-ons are also non-refundable. Full refund conditions are listed on the Namecheap refund policy page."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/namecheap-coupon-code#offerlist',
      name: 'Namecheap Coupon Codes & Offers',
      numberOfItems: namecheapOffers.length,
      itemListElement: namecheapOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...namecheapOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <NamecheapStore />
      </Suspense>
    </>
  )
}
