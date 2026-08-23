import type { Metadata } from 'next'
import { Suspense } from 'react'
import AjioStore from './_components/AjioStore'
import { AJIO_COUPONS } from './_components/ajioCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'AJIO Coupon Codes: Up to 90% OFF + Extra 25% OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save more with verified AJIO coupon codes, promo codes & offers. Get up to 90% OFF, extra 25% OFF, ₹400 OFF, free delivery, bank offers & new user discounts. Updated August 2026.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/ajio-coupon-code',
  },

  openGraph: {
    title: 'AJIO Coupon Codes: Up to 90% OFF + Extra 25% OFF | Aug 2026',
    description:
      'Save more with verified AJIO coupon codes, promo codes & offers. Get up to 90% OFF, extra 25% OFF, ₹400 OFF, free delivery, bank offers & new user discounts. Updated August 2026.',
    url: 'https://www.couponscrew.com/stores/ajio-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajio Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AJIO Coupon Codes: Up to 90% OFF + Extra 25% OFF | Aug 2026',
    description:
      'Save more with verified AJIO coupon codes, promo codes & offers. Get up to 90% OFF, extra 25% OFF, ₹400 OFF, free delivery, bank offers & new user discounts. Updated August 2026.',
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

const ajioOffers = AJIO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Ajio ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/ajio-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/ajio-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/ajio-coupon-code',
      name: 'AJIO Coupon Codes: Up to 90% OFF + Extra 25% OFF | Aug 2026',
      description: 'Save more with verified AJIO coupon codes, promo codes & offers. Get up to 90% OFF, extra 25% OFF, ₹400 OFF, free delivery, bank offers & new user discounts. Updated August 2026.',
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
            name: 'Ajio Coupon Code',
            item: 'https://www.couponscrew.com/stores/ajio-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/ajio-coupon-code#faqpage',
      mainEntity: [
  {
    "@type": "Question",
    "name": "How do I find a working AJIO coupon code today?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every AJIO coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
    }
  },
  {
    "@type": "Question",
    "name": "Can I use an AJIO discount code on AJIO Luxe products?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Some AJIO discount codes apply sitewide including AJIO Luxe, while others exclude the Luxe category. Check the individual deal card on this CouponsCrew page for Luxe eligibility. During Black Friday and Grand Festive Sale, Luxe-eligible codes are more commonly available."
    }
  },
  {
    "@type": "Question",
    "name": "Is AJIO Luxe authentic?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes — all AJIO Luxe products are sourced directly from brand principals and authorised distributors, and come with authenticity certificates. AJIO's standard 30-day return policy applies to Luxe purchases. This is a meaningful guarantee versus unauthorised resellers or grey-market products."
    }
  },
  {
    "@type": "Question",
    "name": "What is the AJIO Black Friday Sale?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The AJIO Black Friday Sale is one of AJIO's highest-discount events of the year — typically held in November with discounts up to 90% sitewide, covering fashion, footwear, accessories, and AJIO Luxe. Bank card offers and stackable AJIO promo codes are available simultaneously. It is the best single window of the year for premium and luxury fashion purchases on AJIO."
    }
  },
  {
    "@type": "Question",
    "name": "Can I stack an AJIO coupon code with a bank card offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In many cases, yes — an AJIO voucher code applied at the coupon field and a bank card instant discount at the payment step can both apply to the same order. This is particularly well-supported during the Fashionation Sale. Check the deal card notes on this CouponsCrew page for stacking eligibility on each specific code."
    }
  },
  {
    "@type": "Question",
    "name": "Are there AJIO stores near me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AJIO operates as a primarily online platform. For ajio store near me queries — if you are looking for a physical Reliance Retail outlet where AJIO products are available, use the Store Locator on the Reliance Retail website. AJIO's primary shopping experience is through ajio.com and the AJIO app."
    }
  },
  {
    "@type": "Question",
    "name": "What is the AJIO return policy?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AJIO offers a 30-day return policy on most products — items must be unworn, unwashed, and in original packaging with tags intact. Returns are initiated via the AJIO app or website under \"My Orders.\" Refunds are processed within 5–7 business days to the original payment method or immediately to the AJIO wallet."
    }
  },
  {
    "@type": "Question",
    "name": "What is the difference between AJIO Trends and AJIO Luxe?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AJIO Trends is the fashion-forward section covering seasonal styles across western wear, ethnic wear, and streetwear from Indian and international brands at mainstream price points. AJIO Luxe is the premium and luxury tier — carrying authenticated international designer brands like Coach, Michael Kors, Karl Lagerfeld, and Tommy Hilfiger at prices below brand boutiques."
    }
  },
  {
    "@type": "Question",
    "name": "Can I use an AJIO promo code on the first order?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes — new users have access to dedicated first-order codes listed in the \"New Users\" filter on this CouponsCrew page. These are typically the highest-value codes available to new AJIO accounts and should be used before switching to standard sitewide codes."
    }
  },
  {
    "@type": "Question",
    "name": "How often does CouponsCrew update AJIO deals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This page is updated daily. Expired AJIO coupon codes are removed as soon as detected and new deals are added as AJIO launches new promotions. For time-sensitive events like the Fashionation Sale or AJIO Black Friday Sale, refresh this page immediately before shopping to ensure you have the most current active codes."
    }
  },
      ],
    },

    // Offer Schema (one per visible deal card)
    ...ajioOffers,
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
        <AjioStore />
      </Suspense>
    </>
  )
}
