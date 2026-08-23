import type { Metadata } from 'next'
import { Suspense } from 'react'
import NykaaStore from './_components/NykaaStore'
import { NYKAA_COUPONS } from './_components/nykaaCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Nykaa Coupon Codes: Up to 60% OFF + ₹400 OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save with verified Nykaa coupon codes and promo codes. Get up to 60% OFF, extra 20% OFF, ₹400 OFF first orders, free shipping, free gifts, and exclusive beauty offers. Updated August 2026.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/nykaa-coupon-code',
  },

  openGraph: {
    title: 'Nykaa Coupon Codes: Up to 60% OFF + ₹400 OFF | Aug 2026',
    description:
      'Save with verified Nykaa coupon codes and promo codes. Get up to 60% OFF, extra 20% OFF, ₹400 OFF first orders, free shipping, free gifts, and exclusive beauty offers. Updated August 2026.',
    url: 'https://www.couponscrew.com/stores/nykaa-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nykaa Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nykaa Coupon Codes: Up to 60% OFF + ₹400 OFF | Aug 2026',
    description:
      'Save with verified Nykaa coupon codes and promo codes. Get up to 60% OFF, extra 20% OFF, ₹400 OFF first orders, free shipping, free gifts, and exclusive beauty offers. Updated August 2026.',
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

const nykaaOffers = NYKAA_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Nykaa ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/nykaa-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/nykaa-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/nykaa-coupon-code',
      name: 'Nykaa Coupon Codes: Up to 60% OFF + ₹400 OFF | Aug 2026',
      description: 'Save with verified Nykaa coupon codes and promo codes. Get up to 60% OFF, extra 20% OFF, ₹400 OFF first orders, free shipping, free gifts, and exclusive beauty offers. Updated August 2026.',
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
            name: 'Nykaa Coupon Code',
            item: 'https://www.couponscrew.com/stores/nykaa-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/nykaa-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working Nykaa coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Nykaa coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply at checkout, check the deal card conditions and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Nykaa discount code on international brand products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Nykaa discount codes apply to the full catalogue including international brands, while others exclude prestige or luxury labels. Check the individual deal card on this CouponsCrew page for brand-level exclusions before building your cart around a specific code."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Nykaa Prive loyalty programme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nykaa Prive is Nykaa's loyalty tier for customers who spend ₹7,500 or more in a calendar year. Benefits include a 5% welcome discount coupon, a birthday gift on purchases made during your birthday month, 4 free shipping coupons, early access to new brand launches, and exclusive member-only offers. There is no separate membership fee — Prive status is earned through cumulative spending."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack a Nykaa coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes — a Nykaa promo code and a bank card instant discount can both apply to the same order. Apply the code in the coupon field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes on this CouponsCrew page for confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Nykaa Pink Friday Sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Nykaa Pink Friday Sale is Nykaa's flagship annual sale event — held in November, it is the Indian beauty equivalent of Black Friday. Discounts reach up to 70% across skincare, makeup, and haircare, with exclusive product launches, gift sets, and brand-specific offers. It is the best window of the year to buy premium and international beauty products at the lowest prices. CouponsCrew publishes Pink Friday-specific coupon codes ahead of the event."
      }
    },
    {
      "@type": "Question",
      "name": "Is Nykaa good for buying authentic international beauty brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Nykaa sources directly from brand principals and authorised distributors, guaranteeing product authenticity. International brands like COSRX, Charlotte Tilbury, Huda Beauty, The Ordinary, and Sol de Janeiro are available through Nykaa with the same authenticity assurance as buying from the brand's own website — at prices that are often lower during Nykaa sale events."
      }
    },
    {
      "@type": "Question",
      "name": "What is Nykaa Man?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nykaa man is the dedicated men's grooming section on Nykaa — covering face care, haircare, beard care, body care, and shaving products from brands like The Man Company, Ustraa, Beardo, Bombay Shaving Company, and international labels. A Nykaa coupon code valid on Nykaa Man products is listed in the men's filter on this CouponsCrew page where available."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nykaa have a return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nykaa accepts returns on most products within 14 days of delivery — items must be unused, unopened, and in original packaging. Some categories (intimates, customised products, opened cosmetics) have restricted return eligibility. Returns are initiated via the app or website and refunds are processed within 7–10 business days to the original payment method."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order value for Nykaa coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum cart values vary by code — typically ₹399–₹999 for most active Nykaa offer codes. The exact threshold is shown on each deal card on this CouponsCrew page. Some new-user codes have a lower minimum; some category-specific codes have a higher threshold."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to buy Nykaa beauty products at the lowest price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The two best windows are the Pink Friday Sale (November — up to 70% off) and the Grand Festive Sale (September–October — up to 75% off). For monthly savings, the Payday Sale (1st–5th of every month) offers up to 50% off consistently. Apply a verified Nykaa promo code from CouponsCrew during any of these windows for the deepest effective discount."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...nykaaOffers,
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
        <NykaaStore />
      </Suspense>
    </>
  )
}
