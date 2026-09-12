import type { Metadata } from 'next'
import { Suspense } from 'react'
import SonyLiveStore from './_components/SonyLiveStore'
import { SONYLIVE_COUPONS } from './_components/sonyliveCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'SonyLIV Coupon Code: Save Up to 50% OFF + Get 2 Months FREE | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest SonyLIV coupon code and SonyLIV promo code at Maxiku Offers. Save up to 50% OFF Premium plans, get 2 extra months FREE, and enjoy 25% OFF Mobile subscriptions.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/sonyliv-coupon-code',
  },

  openGraph: {
    title: 'SonyLIV Coupon Code: Save Up to 50% OFF + Get 2 Months FREE | Sept 2026',
    description:
      'Find the latest SonyLIV coupon code and SonyLIV promo code at Maxiku Offers. Save up to 50% OFF Premium plans, get 2 extra months FREE, and enjoy 25% OFF Mobile subscriptions.',
    url: 'https://www.couponscrew.com/stores/sonyliv-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sony Live Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SonyLIV Coupon Code: Save Up to 50% OFF + Get 2 Months FREE | Sept 2026',
    description:
      'Find the latest SonyLIV coupon code and SonyLIV promo code at Maxiku Offers. Save up to 50% OFF Premium plans, get 2 extra months FREE, and enjoy 25% OFF Mobile subscriptions.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')

const sonyliveOffers = SONYLIVE_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Sony Live ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/sonyliv-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/sonyliv-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/sonyliv-coupon-code',
      name: 'SonyLIV Coupon Code: Save Up to 50% OFF + Get 2 Months FREE | Sept 2026',
      description: 'Find the latest SonyLIV coupon code and SonyLIV promo code at Maxiku Offers. Save up to 50% OFF Premium plans, get 2 extra months FREE, and enjoy 25% OFF Mobile subscriptions.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.couponscrew.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Sony Live Coupon Code',
            item: 'https://www.couponscrew.com/stores/sonyliv-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/sonyliv-coupon-code#brand',
      name: 'SonyLIV',
      url: 'https://www.sonyliv.com',
      sameAs: ['https://en.wikipedia.org/wiki/SonyLIV'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/sonyliv-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a SonyLIV coupon code and how do I apply it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SonyLIV coupon code is a discount code that reduces the price of a SonyLIV subscription at checkout. Go to sonyliv.com, select your plan, and enter the code in the promo code field on the payment page before completing the transaction. Confirm the discounted price shows before paying. Codes are case-sensitive."
      }
    },
    {
      "@type": "Question",
      "name": "Which SonyLIV plan is best for cricket and IPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Annual Premium plan covers live cricket at 4K UHD on two simultaneous screens. For a single viewer on mobile, the Mobile Only plan also covers live cricket at HD quality. If you're subscribing primarily for live sports and plan to use the platform year-round, the Annual Premium gives the best per-month value, particularly with a SonyLIV discount code applied."
      }
    },
    {
      "@type": "Question",
      "name": "Can I watch SonyLIV on a TV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SonyLIV is available on Android TV, Apple TV, Amazon Fire Stick, and most smart TV browsers. The Mobile Only plan restricts viewing to mobile devices — it doesn't work on TVs. Premium plans support TV viewing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SonyLIV Mobile and Premium plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Mobile Only plan is restricted to one mobile device at HD quality. Premium plans support higher resolution, multiple screens, and viewing on TVs, laptops, and tablets. Both include offline download and no ads except on live sports and reality content."
      }
    },
    {
      "@type": "Question",
      "name": "Does SonyLIV have WWE content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SonyLIV holds the exclusive India streaming rights for WWE — Raw, SmackDown, NXT, and all pay-per-view events. For WWE fans in India, SonyLIV Premium is the only legal streaming option for live and on-demand WWE content."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial for SonyLIV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SonyLIV has offered free trial periods at various points, typically for new users. Trial availability changes — check the SonyLIV website or app at signup for current free access options. Some telecom bundles also include SonyLIV access that functions as a de facto trial period."
      }
    },
    {
      "@type": "Question",
      "name": "Can I watch live news channels on SonyLIV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SonyLIV's live TV section includes access to news channels including Aaj Tak, alongside entertainment and sports channels from the Sony network. Live channel access is available on Premium plans."
      }
    },
    {
      "@type": "Question",
      "name": "What sports does SonyLIV stream live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SonyLIV covers cricket (bilateral series, some ICC events), WWE, UEFA Champions League and Europa League football, and tennis. Sony sports live coverage is strongest during the cricket and UEFA seasons."
      }
    },
    {
      "@type": "Question",
      "name": "How do I cancel a SonyLIV subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to your SonyLIV account settings, tap Subscription, and select Cancel. For subscriptions purchased through Google Play or Apple's App Store, cancellation happens through the respective app store's subscription management, not the SonyLIV app directly. Cancelling before the next billing cycle stops renewal — you retain access until the current period ends."
      }
    },
    {
      "@type": "Question",
      "name": "Does a SonyLIV promo code work on renewals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most SonyLIV promo codes are targeted at new subscriptions or new users. Some renewal-specific codes do surface during festive periods and major sporting events — these are worth checking on this page or in your SonyLIV account notification panel around subscription renewal time."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...sonyliveOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={null}>
        <SonyLiveStore />
      </Suspense>
    </>
  )
}
