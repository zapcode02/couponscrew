import type { Metadata } from 'next'
import { Suspense } from 'react'
import Zee5Store from './_components/Zee5Store'
import { ZEE5_COUPONS } from './_components/zee5Coupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first
  title: 'ZEE5 Coupon Code: Up to 60% OFF + Extra 15% OFF | August 2026',

  // Primary + secondary keywords + offer
  description:
    'Use the latest ZEE5 coupon code and promo code to save up to 60% on Annual Plans, get an extra 15% OFF with coupon code EXCLUSIVE, enjoy 30% OFF with Visa Debit Cards, and unlock the best subscription',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/zee5-coupon-code',
  },

  openGraph: {
    title: 'ZEE5 Coupon Code: Up to 60% OFF + Extra 15% OFF | August 2026',
    description:
      'Use the latest ZEE5 coupon code and promo code to save up to 60% on Annual Plans, get an extra 15% OFF with coupon code EXCLUSIVE, enjoy 30% OFF with Visa Debit Cards, and unlock the best subscription',
    url: 'https://www.couponscrew.com/stores/zee5-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZEE5 Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZEE5 Coupon Code: Up to 60% OFF + Extra 15% OFF | August 2026',
    description:
      'Use the latest ZEE5 coupon code and promo code to save up to 60% on Annual Plans, get an extra 15% OFF with coupon code EXCLUSIVE, enjoy 30% OFF with Visa Debit Cards, and unlock the best subscription',
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
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
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

const zee5Offers = ZEE5_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `ZEE5 ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/zee5-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/zee5-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/zee5-coupon-code',
      name: 'ZEE5 Coupon Code: Up to 60% OFF + Extra 15% OFF | August 2026',
      description: 'Use the latest ZEE5 coupon code and promo code to save up to 60% on Annual Plans, get an extra 15% OFF with coupon code EXCLUSIVE, enjoy 30% OFF with Visa Debit Cards, and unlock the best subscription',
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
            name: 'ZEE5 Coupon Code',
            item: 'https://www.couponscrew.com/stores/zee5-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
     {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/zee5-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use a ZEE5 coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To use a ZEE5 coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking \"Copy Code\", and paste it into the promo code field during checkout on the ZEE5 website or app. If it is a deal, simply click \"Visit ZEE5\" to get the discount auto-applied."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my ZEE5 coupon code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A coupon might not work due to plan-specific exclusions, expiry, or eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it at checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Are the coupon codes verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every ZEE5 coupon code listed on this page is checked before publishing, and we periodically re-verify codes to keep the list accurate and up to date."
      }
    },
    {
      "@type": "Question",
      "name": "How often are ZEE5 coupons updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team reviews and updates ZEE5 coupons regularly. Expired promotions are removed so you only see offers that are currently active."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, only one promo code can be applied per subscription purchase. Check the specific terms of each offer, as combining codes is usually not supported."
      }
    },
    {
      "@type": "Question",
      "name": "What is a ZEE5 coupon code and how do I apply it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A ZEE5 coupon code is a promotional string that reduces the price of a ZEE5 subscription when entered at the checkout stage. After selecting your plan, look for the promo code field on the payment screen, enter the code exactly as shown, and the discount will apply before you confirm payment."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a ZEE5 subscription coupon code for annual plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ZEE5 subscription coupon codes for annual plans appear regularly, particularly around festive periods and major sale events. Annual plans already carry a discount over monthly billing — an additional zee 5 subscription coupon code on top of that gives you the lowest possible effective monthly cost. CouponsCrew keeps this page updated with any active codes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a ZEE5 coupon code, a ZEE5 promo code, and a ZEE5 discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three refer to the same mechanism — a code applied at checkout to reduce your subscription price. The terms are used interchangeably across different promotions. What matters is the specific offer attached to the code, which is listed alongside each deal on this page."
      }
    },
    {
      "@type": "Question",
      "name": "What is zee 5 price for regional packs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZEE5's regional language packs are available on monthly, quarterly, and annual billing cycles. Each regional pack covers the full content library in that specific language and supports simultaneous viewing on two devices. Annual billing gives the lowest effective monthly rate. Full pricing for all packs is in the subscription table above."
      }
    },
    {
      "@type": "Question",
      "name": "Is karthikeya 2 ott available on ZEE5?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Karthikeya 2 was acquired by ZEE5 for its OTT release and is available on the platform as part of the Telugu content library. Viewers can access it through the zee5 telugu section under a qualifying subscription plan."
      }
    },
    {
      "@type": "Question",
      "name": "What is ZEEPLEX and is it included in my ZEE5 subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZEEPLEX is ZEE5's premium video-on-demand service for new film releases — it is a separate, per-title purchase and is not included in any standard ZEE5 subscription plan. You access ZEEPLEX through your ZEE5 account, but the rental or purchase fee for each title is charged separately."
      }
    },
    {
      "@type": "Question",
      "name": "Does ZEE5 have a free plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ZEE5 offers a free tier that provides access to a portion of its content library including some films, older shows, and live news — with ads. The full originals catalogue, live TV, and the complete movie library require a paid subscription."
      }
    },
    {
      "@type": "Question",
      "name": "How does ZEE5 compare to JioHotstar for cricket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JioHotstar holds IPL and ICC tournament broadcast rights, which gives it a dominant position for cricket during major tournaments. ZEE5's sports offering covers ILT20 and select cricket events. For IPL specifically, JioHotstar is the only option; for viewers whose cricket interest extends beyond IPL, both platforms are worth checking depending on the specific tournament."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a ZEE5 discount code for the regional language packs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ZEE5 promo codes can apply to regional language packs where specified. Check the terms attached to any code on CouponsCrew to confirm which plans it is valid for — some codes apply only to all-languages plans, while others cover regional packs as well."
      }
    },
    {
      "@type": "Question",
      "name": "What zee 5 charges apply if I want live TV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Live TV Channels plan is a separate subscription tier that gives access to the linear live feed from channels in the Zee network and partner broadcasters. It is available on monthly and annual billing, and is also bundled into higher-tier plans. The full zee 5 price breakdown for live TV is in the subscription table above."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...zee5Offers,
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
        <Zee5Store />
      </Suspense>
    </>
  )
}
