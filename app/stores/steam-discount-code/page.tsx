import type { Metadata } from 'next'
import { Suspense } from 'react'
import SteamStore from './_components/SteamStore'
import { STEAM_COUPONS } from './_components/steamCoupons'

const TITLE = 'Steam Discount Code – Up to 90% OFF Seasonal Sales | Oct 2026'
const DESCRIPTION = 'Verified Steam discounts: up to 90% OFF seasonal sales, up to 75% OFF publisher sales, free wishlist price alerts, and India-specific INR pricing this October 2026.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/steam-discount-code',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.couponscrew.com/stores/steam-discount-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'Steam Discount Code — CouponsCrew' }],
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

const steamOffers = STEAM_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Steam ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/steam-discount-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code/#webpage',
      url: 'https://www.couponscrew.com/stores/steam-discount-code',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'Steam Discount Code', item: 'https://www.couponscrew.com/stores/steam-discount-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for Steam)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code#brand',
      name: 'Steam',
      url: 'https://store.steampowered.com',
      sameAs: ['https://en.wikipedia.org/wiki/Steam_(service)'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/steam-discount-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Steam have coupon codes in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Steam does not release affiliate promo codes or coupon codes for games. The platform's discount system works entirely through seasonal sales (where individual game prices drop by up to 95%) and the Steam Wallet gift card programme. There is no code field at checkout for game purchases."
      }
    },
    {
      "@type": "Question",
      "name": "When is the next Steam sale in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The next major Steam event is Steam Scream V Fest (horror game sale), starting October 26, 2026 and running through November 2. The next sitewide sale after that is the Steam Winter Sale, from December 17, 2026 to January 4, 2027."
      }
    },
    {
      "@type": "Question",
      "name": "How much cheaper is Steam in India compared to USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India's INR pricing is typically 35–45% below the global price on most titles. After Valve's January 2026 price revision, some games are 10–20% higher than they were in 2024, but India still has meaningful regional pricing benefits. The full discount is calculated at checkout automatically when you buy from an India-registered account."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use UPI to buy games on Steam in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steam accepts UPI payments in India. You can add it as a payment method on your account, or use a Steam Wallet balance funded by a Wallet gift card if you prefer not to link a card or UPI directly."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Steam Scream Fest and when does it start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steam Scream V Fest is Steam's annual horror gaming sale event. It starts October 26, 2026 at 10:00 AM Pacific (10:30 PM IST) and runs until November 2, 2026. Discounts on horror, survival, and Halloween-themed games can reach up to 95% off."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/steam-discount-code#offerlist',
      name: 'Steam Discount Codes & Offers',
      numberOfItems: steamOffers.length,
      itemListElement: steamOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...steamOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <SteamStore />
      </Suspense>
    </>
  )
}
