import type { Metadata } from 'next'
import { Suspense } from 'react'
import ActFibernetStore from './_components/ActFibernetStore'
import { ACT_FIBERNET_COUPONS } from './_components/actFibernetCoupons'

const TITLE = 'ACT Fibernet Coupon Code – Free Installation + 2 Months Free | Oct 2026'
const DESCRIPTION = 'Verified ACT Fibernet offers: free installation on new connections, up to 2 months free on annual plans, and unlimited data on 100 Mbps and above this October 2026.'

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
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/act-fibernet-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use an ACT Fibernet coupon code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most ACT Fibernet offers — free installation, annual plan discounts — are applied automatically when you sign up or renew through act.net.in or the ACT app, rather than through a manually entered code.' },
        },
        {
          '@type': 'Question',
          name: 'Can I combine multiple ACT Fibernet offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Some offers can combine, such as free installation with an annual plan discount, while others (like a referral reward) are separate and credited independently. Check the terms shown at sign-up for your specific plan.' },
        },
        {
          '@type': 'Question',
          name: 'Why is my ACT Fibernet offer not available?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most common reason is serviceability — ACT Fibernet is not available in every city or locality. Other reasons include a promotion having ended, or the offer being limited to new connections only.' },
        },
        {
          '@type': 'Question',
          name: 'Where can I find the best ACT Fibernet offers?',
          acceptedAnswer: { '@type': 'Answer', text: 'We keep this ACT Fibernet store page updated 24/7 with the best discounts, verified offers, and upcoming promotional plans.' },
        },
        {
          '@type': 'Question',
          name: 'Does ACT Fibernet charge for installation?',
          acceptedAnswer: { '@type': 'Answer', text: 'ACT Fibernet frequently runs free-installation promotions on new connections, though this can vary by city and current campaign. Confirm the applicable terms when you sign up.' },
        },
        {
          '@type': 'Question',
          name: 'How often are ACT Fibernet offers updated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our deals team verifies and updates offers every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working offers.' },
        },
      ],
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
