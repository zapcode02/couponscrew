import type { Metadata } from 'next'
import { Suspense } from 'react'
import LenskartStore from './_components/LenskartStore'
import { LENSKART_COUPONS } from './_components/lenskartCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Lenskart Coupon Codes: Up to 78% OFF + ₹1,000 OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save with verified Lenskart coupon codes and promo codes. Get up to 78% OFF, ₹1,000 OFF, extra 60% OFF, Buy 1 Get 1 FREE, free shipping, and exclusive eyewear offers. Updated August 2026.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/lenskart-coupon-code',
  },

  openGraph: {
    title: 'Lenskart Coupon Codes: Up to 78% OFF + ₹1,000 OFF | Aug 2026',
    description:
      'Save with verified Lenskart coupon codes and promo codes. Get up to 78% OFF, ₹1,000 OFF, extra 60% OFF, Buy 1 Get 1 FREE, free shipping, and exclusive eyewear offers. Updated August 2026.',
    url: 'https://www.couponscrew.com/stores/lenskart-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lenskart Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lenskart Coupon Codes: Up to 78% OFF + ₹1,000 OFF | Aug 2026',
    description:
      'Save with verified Lenskart coupon codes and promo codes. Get up to 78% OFF, ₹1,000 OFF, extra 60% OFF, Buy 1 Get 1 FREE, free shipping, and exclusive eyewear offers. Updated August 2026.',
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

const lenskartOffers = LENSKART_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Lenskart ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/lenskart-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/lenskart-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/lenskart-coupon-code',
      name: 'Lenskart Coupon Codes: Up to 78% OFF + ₹1,000 OFF | Aug 2026',
      description: 'Save with verified Lenskart coupon codes and promo codes. Get up to 78% OFF, ₹1,000 OFF, extra 60% OFF, Buy 1 Get 1 FREE, free shipping, and exclusive eyewear offers. Updated August 2026.',
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
            name: 'Lenskart Coupon Code',
            item: 'https://www.couponscrew.com/stores/lenskart-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/lenskart-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working Lenskart coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Lenskart coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Lenskart promo code with Lenskart Gold membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lenskart Gold's Buy 1 Get 1 Free benefit and promo codes operate separately. In most cases, a Lenskart promo code can be applied on top of the Gold member price — but stacking may vary by promotion. Check the deal card conditions on this CouponsCrew page for stacking eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Lenskart discount code for first-time buyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First-time buyers should look for new-user codes in the \"New Users\" filter on this page — typically ₹150–₹200 off with a low minimum cart value. These are the highest-value codes available to new accounts and should be used before switching to standard codes."
      }
    },
    {
      "@type": "Question",
      "name": "Are Vincent Chase sunglasses worth buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — vincent chase sunglasses are Lenskart's own brand and are manufactured to the same quality standard as the frames sold under third-party brand names, but priced 30%–50% lower. UV400 protection and polarised lens options are available across most Vincent Chase sunglass styles. For lenskart price versus quality, Vincent Chase is consistently the strongest value option on the platform."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get prescription lenses in Lenskart sunglasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — most lenskart sunglasses frames can be fitted with prescription lenses, including single vision and progressive options. Select \"Add Prescription\" during the checkout flow and enter your power details. Polarised and Blu Cut coatings can also be added to prescription sunglass lenses."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Lenskart take to deliver prescription glasses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prescription glasses are typically dispatched within 3–5 working days after your order is placed and lens fitting is complete. Delivery to most major cities takes an additional 1–3 days. Non-prescription products (sunglasses, zero-power computer glasses) typically ship within 1–2 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is Lenskart's return and exchange policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lenskart offers a 14-day exchange on frames for unused products in original condition. Prescription lens errors are corrected via the power guarantee — incorrect lenses are remade at no additional cost. Contact lenses are non-returnable once opened. The exchange process is initiated via the app or by visiting a physical Lenskart store."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Lenskart Gold membership worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you buy two or more pairs of glasses per year, Lenskart Gold (₹600–₹800/year) is worth it — Buy 1 Get 1 Free on all eyeglasses means the second pair is free, recovering the membership cost immediately. Regular wearers who need both distance and computer glasses in the same year benefit the most."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Lenskart coupon code on contact lenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Lenskart discount codes apply to contact lenses — check the deal card on this CouponsCrew page for category eligibility. Many codes are frame-specific and exclude contact lenses, so confirming eligibility before building your cart saves time."
      }
    },
    {
      "@type": "Question",
      "name": "Does Lenskart have stores near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lenskart operates 2,000+ stores across India — including in most tier-1 and many tier-2 cities. Use the Store Locator on lenskart.com or the app to find your nearest outlet by entering your city or pin code. Online orders can also be exchanged or adjusted at physical stores."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...lenskartOffers,
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
        <LenskartStore />
      </Suspense>
    </>
  )
}
