import type { Metadata } from 'next'
import { Suspense } from 'react'
import TestbookStore from './_components/TestbookStore'
import { TESTBOOK_COUPONS } from './_components/testbookCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Testbook Coupon Codes & promo code: Flat 61% OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save with the latest Testbook coupon codes and offers for August 2026. Get up to 61% OFF on Testbook Pass, 35% OFF ITI courses, 44% OFF monthly plans, 8% OFF Pro plans, free mock tests, and course passes from just ₹300/month.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/testbook-coupon-code',
  },

  openGraph: {
    title: 'Testbook Coupon Codes & promo code: Flat 61% OFF | Aug 2026',
    description:
      'Save with the latest Testbook coupon codes and offers for August 2026. Get up to 61% OFF on Testbook Pass, 35% OFF ITI courses, 44% OFF monthly plans, 8% OFF Pro plans, free mock tests, and course passes from just ₹300/month.',
    url: 'https://www.couponscrew.com/stores/testbook-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Testbook Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Testbook Coupon Codes & promo code: Flat 61% OFF | Aug 2026',
    description:
      'Save with the latest Testbook coupon codes and offers for August 2026. Get up to 61% OFF on Testbook Pass, 35% OFF ITI courses, 44% OFF monthly plans, 8% OFF Pro plans, free mock tests, and course passes from just ₹300/month.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: false,
    follow: true,
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

const testbookOffers = TESTBOOK_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Testbook ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/testbook-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/testbook-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/testbook-coupon-code',
      name: 'Testbook Coupon Codes & promo code: Flat 61% OFF | Aug 2026',
      description: 'Save with the latest Testbook coupon codes and offers for August 2026. Get up to 61% OFF on Testbook Pass, 35% OFF ITI courses, 44% OFF monthly plans, 8% OFF Pro plans, free mock tests, and course passes from just ₹300/month.',
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
            name: 'Testbook Coupon Code',
            item: 'https://www.couponscrew.com/stores/testbook-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
   {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/testbook-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a Testbook coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Go to testbook.com or open the Testbook app, select the mock test pack, coaching batch, or course you want, and proceed to the payment page. Enter your Testbook coupon code in the "Apply Coupon" field and tap Apply. The discounted price will update before you complete payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my Testbook promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, the minimum purchase amount hasn't been met, the code applies to a specific product category (e.g. mock tests only, not coaching), or the code is for new users only. Check the terms listed on CouponsCrew for the specific Testbook discount code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Are Testbook coupon codes available for existing users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Testbook regularly offers discount codes for existing users through the app, email campaigns, and during major sale periods. Bank card offers and referral codes are also available to existing users. CouponsCrew lists both new-user and all-user Testbook promo codes separately.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Testbook Pass and is it worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testbook Pass is an annual all-access subscription covering unlimited Testbook mock tests and study material across 250+ government exams. For aspirants appearing in multiple exams or preparing over an extended period, it is almost always better value than buying individual packs. Apply a Testbook voucher code at checkout to reduce the Pass price further.'
      }
    },
    {
      '@type': 'Question',
      name: 'What exams does Testbook cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testbook covers 250+ government exams including SSC CGL, SSC CHSL, RRB NTPC, RRB Group D, IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, UPSC, State PSCs, CTET, State TETs, Police exams, Defence exams (NDA, CDS, Agniveer), and many state government exams across India.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Testbook Select?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Testbook Select is Testbook's live coaching product — structured daily classes taught by experienced faculty for specific government exams. It includes recorded access, doubt resolution, current affairs sessions, and integrated mock tests. A Testbook coupon code can reduce the cost of a Testbook Select enrolment significantly."
      }
    },
    {
      '@type': 'Question',
      name: 'What is Testbook Skill Academy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Skill Academy is Testbook's job-skills training platform offering courses in Data Science, Digital Marketing, Web Development, Finance, Cyber Security, and HR. Courses are designed for placement assistance and include resume building and interview preparation. Check CouponsCrew for active Testbook discount codes on Skill Academy programmes."
      }
    },
    {
      '@type': 'Question',
      name: 'Is the Testbook app free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Testbook app is free to download. Some mock tests and study material are available free of charge. Full access to the complete test series, live coaching, and Skill Academy courses requires a paid subscription or individual purchase — to which a Testbook promo code can be applied.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Testbook voucher code on the Testbook app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most Testbook coupon codes work on both the website and the app. Some Testbook voucher codes are app-exclusive — if a code isn't working on the website, try redeeming it through the Testbook app."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact Testbook support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testbook customer support is available through the Help section on testbook.com and within the Testbook app. You can raise a support ticket or use the live chat feature for queries related to subscriptions, payments, or course access.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...testbookOffers,
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
        <TestbookStore />
      </Suspense>
    </>
  )
}
