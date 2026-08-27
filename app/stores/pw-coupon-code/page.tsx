import type { Metadata } from 'next'
import { Suspense } from 'react'
import PwStore from './_components/PwStore'
import { PW_COUPONS } from './_components/pwCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Physics Wallah Coupon Code – Up to 80% OFF + ₹1,000 Cashback | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Physics Wallah coupon code, promo code and course offers for Aug 2026. Save up to 80% on live courses, earn ₹1,000 cashback and get discounts on programming, banking and career programs.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/pw-coupon-code',
  },

  openGraph: {
    title: 'Physics Wallah Coupon Code – Up to 80% OFF + ₹1,000 Cashback | Aug 2026',
    description:
      'Find the latest Physics Wallah coupon code, promo code and course offers for Aug 2026. Save up to 80% on live courses, earn ₹1,000 cashback and get discounts on programming, banking and career programs.',
    url: 'https://www.couponscrew.com/stores/pw-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PW Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Physics Wallah Coupon Code – Up to 80% OFF + ₹1,000 Cashback | Aug 2026',
    description:
      'Find the latest Physics Wallah coupon code, promo code and course offers for Aug 2026. Save up to 80% on live courses, earn ₹1,000 cashback and get discounts on programming, banking and career programs.',
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

const pwOffers = PW_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `PW ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/pw-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/pw-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/pw-coupon-code',
      name: 'Physics Wallah Coupon Code – Up to 80% OFF + ₹1,000 Cashback | Aug 2026',
      description: 'Find the latest Physics Wallah coupon code, promo code and course offers for Aug 2026. Save up to 80% on live courses, earn ₹1,000 cashback and get discounts on programming, banking and career programs.',
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
            name: 'PW Coupon Code',
            item: 'https://www.couponscrew.com/stores/pw-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/pw-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a PW coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to pw.live or open the PW app, select your course or batch, and proceed to checkout. Enter your PW coupon code in the "Apply Coupon" field and tap Apply. The discounted price will update in your order total before payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my PW promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, the minimum purchase value hasn't been met, the code applies to a specific course category only (e.g. JEE batches only, not NEET), or the code is for new users only. Check the terms listed on CouponsCrew for the specific PW discount code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Is Physics Wallah free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PW\'s YouTube channel offers extensive free content — full lecture series for Physics, Chemistry, and other subjects. The PW app also offers some free content. Structured paid batches, live classes, mock test series, and premium study material require a paid enrolment — to which a PW coupon code can be applied.'
      }
    },
    {
      '@type': 'Question',
      name: 'What courses does Physics Wallah offer for Class 11?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physics Wallah Class 11 offers JEE and NEET preparation batches covering Physics, Chemistry, Mathematics (JEE), and Biology (NEET) aligned with the Class 11 NCERT syllabus. Batches are available in Hindi and English medium with live classes, recorded lectures, PDF notes, and tests.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Physics Wallah good for Class 9 students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Physics Wallah Class 9 courses cover the full CBSE Class 9 syllabus in Science and Mathematics — designed to build the conceptual foundation needed for Class 10 boards and eventual entrance exam preparation. PW\'s teaching approach makes complex concepts accessible for Class 9-level understanding.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does PW offer courses for Class 8?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Physics Wallah Class 8 foundation courses are available, covering NCERT Science and Mathematics with additional depth for students planning future JEE or NEET preparation. Starting structured learning in Class 8 gives students a longer runway before the high-stakes exam years.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is PW Vidyapeeth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "PW Vidyapeeth is Physics Wallah's network of offline coaching centres, combining PW's affordable fee structure with a physical classroom environment. Vidyapeeth centres are expanding across Tier 2 and Tier 3 cities — offering face-to-face classes, doubt resolution, and structured study environments for students who prefer offline learning."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a PW discount code on the PW Store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some PW offer codes apply to the PW Store (books, printed notes, stationery) in addition to digital course enrolments. Check the terms of the specific code on CouponsCrew to confirm whether it covers PW Store purchases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are PW coupon codes available for existing students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PW regularly distributes discount codes for existing students through the app, email notifications, and during major sale periods. Renewal discounts and batch upgrade codes are also available for students continuing from Class 9 to 10 or Class 11 to 12.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact Physics Wallah support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physics Wallah customer support is available through the Help section on pw.live and within the PW app. You can raise a query about enrolment, payment, batch access, or technical issues through the in-app support flow or the official website.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...pwOffers,
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
        <PwStore />
      </Suspense>
    </>
  )
}
