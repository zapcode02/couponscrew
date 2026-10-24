import type { Metadata } from 'next'
import { Suspense } from 'react'
import HotelcomStore from './_components/HotelcomStore'
import { HOTELCOM_COUPONS } from './_components/hotelcomCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: 'Hotels.com Coupon Code – ₹4,375 OFF Stays + Rewards | Oct 2026',
  description: 'Save more with the latest Hotels.com Coupon Code and Hotels.com Promo Code. Book hotels from ₹4,375 per night and earn 1 Reward Night on this October 2026.',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/hotelcom-coupon-code',
  },
  openGraph: {
    title: 'Hotels.com Coupon Code – ₹4,375 OFF Stays + Rewards | Oct 2026',
    description: 'Save more with the latest Hotels.com Coupon Code and Hotels.com Promo Code. Book hotels from ₹4,375 per night and earn 1 Reward Night on this October 2026.',
    url: 'https://www.couponscrew.com/stores/hotelcom-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Hotels.com Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels.com Coupon Code – ₹4,375 OFF Stays + Rewards | Oct 2026',
    description: 'Save more with the latest Hotels.com Coupon Code and Hotels.com Promo Code. Book hotels from ₹4,375 per night and earn 1 Reward Night on this October 2026.',
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

const hotelcomOffers = HOTELCOM_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Hotels.com ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/hotelcom-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/hotelcom-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/hotelcom-coupon-code',
      name: 'Hotels.com Coupon Code – ₹4,375 OFF Stays + Rewards | Oct 2026',
      description: 'Save more with the latest Hotels.com Coupon Code and Hotels.com Promo Code. Book hotels from ₹4,375 per night and earn 1 Reward Night on this October 2026.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Hotels.com Coupon Code', item: 'https://www.couponscrew.com/stores/hotelcom-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Hotels.com)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/hotelcom-coupon-code#brand',
      name: 'Hotels.com',
      url: 'https://www.hotels.com',
      sameAs: ['https://en.wikipedia.org/wiki/Hotels.com'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/hotelcom-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a Hotels.com promo code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Select your preferred hotel stay on Hotels.com, proceed to the checkout page, locate the "Apply a coupon code" field under the price summary, paste your code, and click apply before completing payment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on Hotels.com?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hotels.com allows only one promo code per booking transaction. However, you can combine promo codes with member prices or earn OneKeyCash rewards on eligible stays.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my Hotels.com promo code not working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Promo codes may fail if the selected property is excluded, the minimum spend requirement is not met, the code has expired, or if you selected "Pay at Hotel" instead of "Pay Now".',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best Hotels.com offers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We keep this Hotels.com store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Hotels.com offer free cancellation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, many hotels listed on Hotels.com offer fully refundable room options with free cancellation up to a specified date before check-in. Always check the room policy during booking.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are Hotels.com coupons updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.',
          },
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/hotelcom-coupon-code#offerlist',
      name: 'Hotels.com Coupon Codes & Offers',
      numberOfItems: hotelcomOffers.length,
      itemListElement: hotelcomOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...hotelcomOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <HotelcomStore />
      </Suspense>
    </>
  )
}