import type { Metadata } from 'next'
import { Suspense } from 'react'
import LevisStore from './_components/LevisStore'
import { LEVIS_COUPONS } from './_components/levisCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: "Levi's Coupon Code: Up to 60% OFF + Extra 15% OFF | Aug 2026",

  // Primary + all secondary keywords + max offer
  description:
    "Find the latest Levi's coupon code and promo code for August 2026. Save up to 60% on jeans, jackets, T-shirts, cargo pants, footwear, and more. Enjoy extra savings on selected orders, new arrivals, and app-exclusive offers.",

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/levis-coupon-code',
  },

  openGraph: {
    title: "Levi's Coupon Code: Up to 60% OFF + Extra 15% OFF | Aug 2026",
    description:
      "Find the latest Levi's coupon code and promo code for August 2026. Save up to 60% on jeans, jackets, T-shirts, cargo pants, footwear, and more. Enjoy extra savings on selected orders, new arrivals, and app-exclusive offers.",
    url: 'https://www.couponscrew.com/stores/levis-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Levi's Coupon Code — CouponsCrew",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Levi's Coupon Code: Up to 60% OFF + Extra 15% OFF | Aug 2026",
    description:
      "Find the latest Levi's coupon code and promo code for August 2026. Save up to 60% on jeans, jackets, T-shirts, cargo pants, footwear, and more. Enjoy extra savings on selected orders, new arrivals, and app-exclusive offers.",
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

const levisOffers = LEVIS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Levi's ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/levis-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/levis-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/levis-coupon-code',
      name: "Levi's Coupon Code: Up to 60% OFF + Extra 15% OFF | Aug 2026",
      description: "Find the latest Levi's coupon code and promo code for August 2026. Save up to 60% on jeans, jackets, T-shirts, cargo pants, footwear, and more. Enjoy extra savings on selected orders, new arrivals, and app-exclusive offers.",
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
            name: "Levi's Coupon Code",
            item: 'https://www.couponscrew.com/stores/levis-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/levis-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use a Levi's coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To use a Levi's coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking \"Copy Code\", and paste it into the promo code field during checkout on the Levi's website or app. If it is a deal, simply click \"Visit Levi's\" to get the discount auto-applied."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Levi's coupon code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying."
      }
    },
    {
      "@type": "Question",
      "name": "Are the coupon codes verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every Levi's coupon code listed on this page is checked regularly by our team to confirm it is active before it is published, so you can shop with confidence."
      }
    },
    {
      "@type": "Question",
      "name": "How often are Levi's coupons updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our deals team reviews and updates Levi's coupons regularly. Expired promotions are removed as soon as they are identified, so you spend less time on codes that don't work."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, only one promotional code can be applied per order. Check the specific terms of each offer, as some codes may be combinable with ongoing sitewide promotions."
      }
    },
    {
      "@type": "Question",
      "name": "Why are there limited levi's coupon codes available publicly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Levi's India operates as a premium denim brand and manages discounting through structured sale events and its Red Tab loyalty programme rather than circulating high volumes of public promo codes. This is a deliberate brand positioning choice — it keeps the perceived value of the product stable rather than training buyers to wait for a coupon before purchasing. The most consistent savings route for regular buyers is the Red Tab programme."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a levi's coupon code, a levi's promo code, and a levi's discount code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three terms refer to the same type of promotional mechanism — a code entered at checkout that reduces the final price. On Levi's India, these are most often distributed during sale events, through the Red Tab membership, or via bank and payment method partnerships. The terms are interchangeable in how they are applied."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Levi's Red Tab membership save me money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Red Tab members get early access to levis sale events — often a day or two before the general public — plus member-exclusive pricing that can be lower than the standard sale price. Birthday rewards add an additional annual saving. Over the course of a year, the cumulative benefit of member pricing on two or three purchases adds up meaningfully."
      }
    },
    {
      "@type": "Question",
      "name": "Is levi's black friday available in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Levi's India runs a Black Friday promotion on its website and app. It is one of the deepest single discount events the brand runs annually in India. Red Tab members typically get early access before the sale opens to the general public. Check CouponsCrew closer to November for any active levi's black friday coupon codes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the levis 501 and why is it significant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The levis 501 is the original Levi's jean, first produced in the late nineteenth century. It is a straight-leg, mid-to-high rise jean available in button-fly and zip-fly variants. It is significant because it is the template from which most modern jeans — across all brands — are derived. On Levi's India, it is the most extensively stocked style and the one most consistently available across washes and sizes."
      }
    },
    {
      "@type": "Question",
      "name": "What is levi's vintage clothing and is it available in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Levi's Vintage Clothing (LVC) is a line that reproduces archived Levi's patterns using period-accurate construction techniques, selvedge Japanese denim, and original hardware. It is available through select levi's exclusive store locations and the Levi's India website. It is priced at a significant premium over mainline products and is aimed at denim collectors and enthusiasts rather than everyday buyers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Levi's India offer deals on women's levis specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Women's section on Levi's India runs its own sale events and features dedicated women's levis promotions — particularly around the Sculpt range, denim skirts, and the ribcage and high-rise straight fits. Red Tab membership applies equally to men's and women's purchases."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Commuter collection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Commuter collection is a functional denim range designed with cyclists and active urban commuters in mind. It incorporates stretch fabric, reinforced seams, and practical details like hidden pockets and reflective elements. It is part of the Featured Collections on the Levi's India site."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a levi's coupon code at a levi's exclusive store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some promotional codes are valid both online and at physical levi's exclusive store locations; others are online-only. Check the terms of any active code before visiting a store. The levi's exclusive store staff can verify whether a particular code is accepted in-store."
      }
    },
    {
      "@type": "Question",
      "name": "What jeans does Levi's make for women besides skinny fits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Women's levis now covers a wide range of silhouettes beyond skinny — including high-rise straight, ribcage straight, wide-leg, wedgie fit, loose, bootcut, and the Sculpt range. The levis denim skirt is also part of the women's permanent range. The India site stocks most of these styles in multiple washes year-round, with seasonal colourways added for new arrivals."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...levisOffers,
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
        <LevisStore />
      </Suspense>
    </>
  )
}
