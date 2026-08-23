import type { Metadata } from 'next'
import { Suspense } from 'react'
import MuscleBlazeStore from './_components/MuscleBlazeStore'
import { MUSCLEBLAZE_COUPONS } from './_components/muscleblazeCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'MuscleBlaze Coupon Code - Up to 45% OFF on Supplements | Aug 2026',

  // Primary + all secondary keywords + max offer | ~150 chars
  description:
    'Get the latest MuscleBlaze coupon code and discount codes with up to 45% OFF whey protein, pre-workout & supplements. Discover verified deals, updated regularly. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/muscleblaze-coupon-code',
  },

  openGraph: {
    title: 'MuscleBlaze Coupon Code - Up to 45% OFF on Supplements | Aug 2026',
    description:
      'Get the latest MuscleBlaze coupon code and discount codes with up to 45% OFF whey protein, pre-workout & supplements. Discover verified deals, updated regularly. Aug 2026',
    url: 'https://www.couponscrew.com/stores/muscleblaze-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MuscleBlaze Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MuscleBlaze Coupon Code - Up to 45% OFF on Supplements | Aug 2026',
    description:
      'Get the latest MuscleBlaze coupon code and discount codes with up to 45% OFF whey protein, pre-workout & supplements. Discover verified deals, updated regularly. Aug 2026',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
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

const muscleblazeOffers = MUSCLEBLAZE_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `MuscleBlaze ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/muscleblaze-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/muscleblaze-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/muscleblaze-coupon-code',
      name: 'MuscleBlaze Coupon Code - Up to 45% OFF on Supplements | Aug 2026',
      description: 'Get the latest MuscleBlaze coupon code and discount codes with up to 45% OFF whey protein, pre-workout & supplements. Discover verified deals, updated regularly. Aug 2026',
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
            name: 'MuscleBlaze Coupon Code',
            item: 'https://www.couponscrew.com/stores/muscleblaze-coupon-code',
          },
        ],
      },
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/muscleblaze-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working MuscleBlaze coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every MuscleBlaze coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card. Expired codes are removed daily — if a code does not apply, check the deal card conditions and try the next listing."
      }
    },
    {
      "@type": "Question",
      "name": "What is MuscleBlaze Biozyme Whey Protein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muscleblaze biozyme is MuscleBlaze's clinically validated premium whey — using a patented enzyme blend (ProHydrolase) that increases amino acid absorption by up to 50% versus standard whey concentrate, based on published clinical trial data. The biozyme performance whey variant is the best-selling product in the Biozyme range."
      }
    },
    {
      "@type": "Question",
      "name": "Is MuscleBlaze Creatine good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muscleblaze creatine is pure creatine monohydrate — the most research-backed form of creatine, with strong evidence for improving strength, power output, and muscle endurance during high-intensity training. MuscleBlaze's creatine is third-party tested and carries the brand's authenticity verification. It is one of the best-value creatine products available in India."
      }
    },
    {
      "@type": "Question",
      "name": "What is WrathX Pre Workout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wrathx pre workout is MuscleBlaze's high-stimulant pre-workout formula — designed for experienced gym-goers who want a strong energy and focus boost before training. It contains caffeine, beta-alanine, citrulline malate, and other performance compounds. Not recommended for stimulant beginners — the standard MB Pre Workout Boost is a better starting point."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a MuscleBlaze discount code on sale products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many MuscleBlaze discount codes apply to already-discounted sale products — but some codes exclude products already in a combo or bundle pricing deal. Check the individual deal card on this CouponsCrew page for exclusion details before building your cart."
      }
    },
    {
      "@type": "Question",
      "name": "Is MuscleBlaze protein authentic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — MuscleBlaze products sold through the official website, app, and authorised sellers carry a scratch-and-verify authenticity code that can be checked on the MuscleBlaze website. Products purchased through third-party marketplaces without this verification are at higher risk of being counterfeit — buying directly from muscleblaze.com or the app is the safest approach."
      }
    },
    {
      "@type": "Question",
      "name": "What is MB Premium membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MB Premium is MuscleBlaze's paid loyalty membership offering exclusive member pricing, early access to sales, priority customer support, member-only discount codes, and shipping benefits. For regular MuscleBlaze shoppers purchasing 3–4 times per year, the membership typically pays for itself within the first 2–3 orders."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best MuscleBlaze protein for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For beginners, the standard muscle blaze whey protein concentrate is the recommended starting point — a balanced protein source at an accessible price. Once consistent training and diet habits are established, upgrading to biozyme whey protein or muscleblaze isolate whey protein is a natural progression for better amino acid absorption and purity."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...muscleblazeOffers,
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
        <MuscleBlazeStore />
      </Suspense>
    </>
  )
}
