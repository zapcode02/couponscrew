import type { Metadata } from 'next'
import { Suspense } from 'react'
import PolkiSareesStore from './_components/PolkiSareesStore'
import { POLKI_SAREES_COUPONS } from './_components/polkiSareesCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: 'Polki Sarees Discount Code – 39% OFF + 23% OFF | Oct 2026',
  description: 'Save more with the latest Polki Sarees Discount Code and Polki Sarees Promo Code. Get 39% OFF the Hariyali Green Ombre Saree and 23% OFF the Angoori + Mastani.',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/polki-sarees-coupon-code',
  },
  openGraph: {
    title: 'Polki Sarees Discount Code – 39% OFF + 23% OFF | Oct 2026',
    description: 'Save more with the latest Polki Sarees Discount Code and Polki Sarees Promo Code. Get 39% OFF the Hariyali Green Ombre Saree and 23% OFF the Angoori + Mastani.',
    url: 'https://www.couponscrew.com/stores/polki-sarees-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Polki Sarees Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polki Sarees Discount Code – 39% OFF + 23% OFF | Oct 2026',
    description: 'Save more with the latest Polki Sarees Discount Code and Polki Sarees Promo Code. Get 39% OFF the Hariyali Green Ombre Saree and 23% OFF the Angoori + Mastani.',
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

const polkiSareesOffers = POLKI_SAREES_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Polki Sarees ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/polki-sarees-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/polki-sarees-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/polki-sarees-coupon-code',
      name: 'Polki Sarees Discount Code – 39% OFF + 23% OFF | Oct 2026',
      description: 'Save more with the latest Polki Sarees Discount Code and Polki Sarees Promo Code. Get 39% OFF the Hariyali Green Ombre Saree and 23% OFF the Angoori + Mastani.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Polki Sarees Coupon Code', item: 'https://www.couponscrew.com/stores/polki-sarees-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Polki Sarees)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/polki-sarees-coupon-code#brand',
      name: 'Polki Sarees',
      url: 'https://polkisarees.com',
      sameAs: [
        'https://www.instagram.com/polki_sarees'
      ],
    },
    // FAQPage Schema
    {
      "@type": "FAQPage",
      "@id": "https://www.couponscrew.com/stores/polki-sarees-coupon-code#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I buy Polki Sarees online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Polki Sarees sells directly on polkisarees.com. The website ships pan India with free shipping on orders above ₹999, and COD is available. The brand's Instagram page also posts new arrivals and limited-batch drops before they appear on the site."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the founder of Polki Sarees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Polki Sarees was founded by Anshika Garg. The brand sources directly from 380 artisans across Gujarat, West Bengal, Odisha, Madhya Pradesh, and Rajasthan."
          }
        },
        {
          "@type": "Question",
          "name": "Is Polki Sarees the same as Polki by Bhagwati Sarees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — they are different brands. Polki Sarees (polkisarees.com) is a direct-to-consumer artisan label. Polki by Bhagwati refers to a Haryana-based wholesale saree supplier's Polki-embellished range. Different websites, different products, different business models."
          }
        },
        {
          "@type": "Question",
          "name": "Does Polki Sarees sell cotton sarees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cotton is one of the main fabrics at Polki Sarees, available in multiple craft traditions — hand block print, Kalamkaari, Ajrakh, Bandhani, and tie & dye. Many are priced under ₹2,000."
          }
        },
        {
          "@type": "Question",
          "name": "What is the return policy on Polki Sarees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Polki Sarees lists \"easy returns\" on their website. For the exact return window and conditions (eligible products, what counts as a valid return reason), check the return and refund policy linked at the bottom of polkisarees.com before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "What is Polki clothing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Polki Sarees' clothing offer is centred on sarees. The brand also lists blouses and some combos (saree + blouse). It is not a general clothing label — the core product is the saree, available in craft-forward fabrics across casual, workwear, festive, and wedding categories."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Kapila saree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kapila saree refers to sarees from Kapila, a different Indian saree brand. It is not connected to Polki Sarees. Both are independent online saree labels with their own artisan sourcing and product ranges."
          }
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/polki-sarees-coupon-code#offerlist',
      name: 'Polki Sarees Coupon Codes & Offers',
      numberOfItems: polkiSareesOffers.length,
      itemListElement: polkiSareesOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...polkiSareesOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <PolkiSareesStore />
      </Suspense>
    </>
  )
}