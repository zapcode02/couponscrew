import type { Metadata } from 'next'
import { Suspense } from 'react'
import BoatStore from './_components/BoatStore'
import { BOAT_COUPONS } from './_components/boatCoupons'

const TITLE = 'boAt Coupon Code: Up to 87% Off Audio & Smartwatches | Nov 2026'
const DESCRIPTION = 'Use a boAt coupon code to save up to 87% on earbuds, smartwatches, and speakers. Find the latest discount code deals with verified offers in Nov 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/boat-coupon-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/boat-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'boAt Coupon Code — CouponsCrew' }],
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

const boatOffers = BOAT_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `boAt ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/boat-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/boat-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/boat-coupon-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'boAt Coupon Code', item: 'https://www.couponscrew.com/stores/boat-coupon-code' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/boat-coupon-code#brand',
      name: 'boAt',
      url: 'https://www.boat-lifestyle.com',
      sameAs: ['https://www.instagram.com/boat.nirvana', 'https://twitter.com/boat_nirvana'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/boat-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best boAt coupon code right now?',
          acceptedAnswer: { '@type': 'Answer', text: 'BOATHEAD gives an extra 5% off on all prepaid orders on boat-lifestyle.com and is confirmed on boAt\'s official coupon page. For flat savings, BIG100 (₹100 off) has a consistently high success rate. For multi-product orders, BOAT6 (6% off on 2+ items) gives a percentage discount that scales with order size. Check CouponsCrew for the most current verified codes before checkout.' },
        },
        {
          '@type': 'Question',
          name: 'Can I use a boAt discount code on Amazon or Flipkart?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. boAt coupon codes apply only on boat-lifestyle.com. Amazon and Flipkart have their own discount structures — platform bank card offers and sale events — that work independently of boAt\'s own codes.' },
        },
        {
          '@type': 'Question',
          name: 'Does boAt offer a warranty on its products?',
          acceptedAnswer: { '@type': 'Answer', text: 'boAt products carry a manufacturer\'s warranty (typically 1 year for audio products). Claims are handled through boAt\'s customer support and service centres. The warranty doesn\'t cover physical damage or water damage beyond the product\'s rated resistance level.' },
        },
        {
          '@type': 'Question',
          name: 'Which boAt earphone is best under ₹1,500?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Airdopes 181 and Airdopes Alpha are in this range and have strong user reviews for call quality and battery life among budget TWS options. The Rockerz 255 neckband covers similar ground at similar pricing with longer battery life — better for active use. The right pick depends on whether you prefer truly wireless or don\'t mind the neckband form.' },
        },
        {
          '@type': 'Question',
          name: 'Is boat-lifestyle.com safe to buy from?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. boat-lifestyle.com is boAt\'s official direct-to-consumer website. It uses standard HTTPS payment processing and ships via standard courier services. Orders are refundable as per boAt\'s return policy, and the site shows order tracking post-dispatch.' },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/boat-coupon-code#offerlist',
      name: 'boAt Coupon Codes & Offers',
      numberOfItems: boatOffers.length,
      itemListElement: boatOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...boatOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <BoatStore />
      </Suspense>
    </>
  )
}
