import type { Metadata } from 'next'
import { Suspense } from 'react'
import PumaStore from './_components/PumaStore'
import { PUMA_COUPONS } from './_components/pumaCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Puma Coupon Codes: Up to 60% OFF + Extra 10% OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save with verified Puma coupon codes and promo codes. Get up to 60% OFF, extra 10% OFF, up to ₹400 OFF prepaid orders, free shipping, and exclusive deals on shoes, sneakers, clothing & sportswear.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/puma-coupon-code',
  },

  openGraph: {
    title: 'Puma Coupon Codes: Up to 60% OFF + Extra 10% OFF | Aug 2026',
    description:
      'Get the latest Puma coupon code and discount codes with up to 50% OFF on shoes, apparel & accessories. Discover verified deals and offers, updated regularly. Aug 2026',
    url: 'https://www.couponscrew.com/stores/puma-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Puma Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Puma Coupon Codes: Up to 60% OFF + Extra 10% OFF | Aug 2026',
    description:
      'Get the latest Puma coupon code and discount codes with up to 50% OFF on shoes, apparel & accessories. Discover verified deals and offers, updated regularly. Aug 2026',
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

const pumaOffers = PUMA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Puma ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/puma-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/puma-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/puma-coupon-code',
      name: 'Puma Coupon Codes: Up to 60% OFF + Extra 10% OFF | Aug 2026',
      description: 'Get the latest Puma coupon code and discount codes with up to 50% OFF on shoes, apparel & accessories. Discover verified deals and offers, updated regularly. Aug 2026',
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
            name: 'Puma Coupon Code',
            item: 'https://www.couponscrew.com/stores/puma-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
   {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/puma-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working Puma coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Puma coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Puma discount code on factory store products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Puma discount codes apply on factory store items and some exclude them. Check the individual deal card on this CouponsCrew page for factory store eligibility before building your cart around a specific code."
      }
    },
    {
      "@type": "Question",
      "name": "Are Puma coupon codes valid on Myntra and Flipkart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Puma promo codes are valid on Puma India's official website (in.puma.com) only, while others are platform-specific (valid only on Myntra or Flipkart). CouponsCrew deal cards specify where each code is redeemable — check before clicking through to shop."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Puma shoe for running in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Puma Velocity Nitro 2 is widely regarded as the best everyday running shoe in Puma's current India catalogue — NITRO foam midsole, solid durability, and a comfortable fit for distances between 5K and half-marathon. For serious racers, the Deviate Nitro 2 is Puma's top-tier performance option. A verified Puma coupon code from CouponsCrew can bring both models meaningfully below their retail price."
      }
    },
    {
      "@type": "Question",
      "name": "What are Puma Ferrari shoes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puma Ferrari shoes are a co-branded collaboration line between Puma and Scuderia Ferrari — producing motorsport-inspired casual sneakers, driving shoes, and lifestyle footwear in Ferrari's signature red, black, and yellow colourways. They are available on Puma India's website and at select Puma stores. Prices range from ₹4,500 to ₹10,000 depending on the style."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Puma factory store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Puma factory store refers to both Puma's physical outlet stores in major Indian cities and the outlet/sale section on in.puma.com. Both offer past-season and overstocked products at 40%–70% below original retail prices. Physical factory store locations can be found via the Store Locator on Puma India's website."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack a Puma coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes — a Puma voucher code applied at the coupon field and a bank card instant discount at the payment step can both apply to the same order. Some promotions restrict stacking; check the deal card notes on this CouponsCrew page for confirmation before checkout."
      }
    },
    {
      "@type": "Question",
      "name": "What is the return policy for Puma India online orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puma India offers a 30-day return policy for online orders — items must be unworn, unwashed, and in original packaging with tags intact. Returns are initiated via the Puma India website or app. Refunds are processed within 5–7 business days to the original payment method."
      }
    },
    {
      "@type": "Question",
      "name": "Are Puma sneakers for ladies available in wide sizes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puma India's women's footwear is available in standard sizing (UK 3–8 in most styles). Wide-fit options are not prominently featured as a separate filter on the Indian site — if fit is a concern, the Puma Softride and Cali styles tend to have a slightly roomier fit compared to more performance-focused silhouettes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Puma coupon code for first-time buyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First-time buyers should look for new-user codes in the \"New Users\" filter on this CouponsCrew page — typically ₹300–₹500 off with a minimum cart of ₹999. These are the highest-value codes available for new accounts and should be used before switching to standard sitewide codes."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...pumaOffers,
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
        <PumaStore />
      </Suspense>
    </>
  )
}
