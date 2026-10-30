import type { Metadata } from 'next'
import { Suspense } from 'react'
import WishStore from './_components/WishStore'
import { WISH_COUPONS } from './_components/wishCoupons'

const TITLE = 'Wish Coupon Code: 60% Off Doorbuster Deals & LED Shower'
const DESCRIPTION = 'Get the latest Wish coupon code and Wish discount code for October 2026 to save up to 60% OFF Doorbuster Deals and 57% OFF LED Shower Heads.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/wish-promo-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/wish-promo-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Wish Promo Code — CouponsCrew' }],
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

const wishOffers = WISH_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Wish ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/wish-promo-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code/#webpage',
      url: 'https://www.couponscrew.com/stores/wish-promo-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Wish Promo Code', item: 'https://www.couponscrew.com/stores/wish-promo-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Wish)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code#brand',
      name: 'Wish',
      url: 'https://www.wish.com',
      sameAs: ['https://en.wikipedia.org/wiki/Wish_(company)'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/wish-promo-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best Wish coupon code in India right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of October 2026, FIRST15 (15% off, valid till October 31) is the most recently confirmed code, sourced from GrabOn. REFRESH10 gives an additional 10% off and can be used twice. Both are worth trying at checkout — Wish code availability is low overall, and automatic deals (up to 60% off in weekly sales, up to 90% off pet items) often save more than a single code."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wish ship to India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Wish ships to India through international logistics partners. Delivery takes 14–45 days for standard shipping and 5–10 days for Wish Express items. Not every seller on Wish ships to India — check the delivery estimate on the product page before adding to cart."
          }
        },
        {
          "@type": "Question",
          "name": "Is Wish safe to buy from in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wish is a legitimate platform now owned by Qoo10. The main risks are product quality (items may differ from photos) and long shipping times, not payment fraud. For safer buying, filter for products with photo reviews, buy only Wish Express items when speed matters, and pay on an internationally-enabled credit card so you can raise a dispute if needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay with UPI or Indian debit cards on Wish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UPI is not accepted on Wish. International Visa, Mastercard, and Amex cards work. Many Indian debit cards block international transactions by default — enable yours through your bank's app before placing an order."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get 50% off on Wish without a code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Log in to the Wish app or website every day. After 7 logins, a 50% off coupon is credited to your account and shows as a reward at checkout — no separate code is needed. This is Wish's most reliable route to a significant discount."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/wish-promo-code#offerlist',
      name: 'Wish Promo Codes & Offers',
      numberOfItems: wishOffers.length,
      itemListElement: wishOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...wishOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <WishStore />
      </Suspense>
    </>
  )
}