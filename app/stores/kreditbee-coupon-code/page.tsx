import type { Metadata } from 'next'
import { Suspense } from 'react'
import KreditbeeStore from './_components/KreditbeeStore'
import { KREDITBEE_COUPONS } from './_components/kreditbeeCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'KreditBee Coupon Code: Personal Loans Up to ₹10 Lakhs | Aug 2026',

  // Primary + secondary keywords, generic/placeholder-appropriate
  description:
    'Explore the latest KreditBee coupon code and offers for August 2026. Apply for personal loans up to ₹10 Lakhs, enjoy fast approvals, flexible EMI options, referral cashback, paperless applications, and competitive interest rates starting from 12% p.a.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/kreditbee-coupon-code',
  },

  openGraph: {
    title: 'KreditBee Coupon Code: Personal Loans Up to ₹10 Lakhs | Aug 2026',
    description:
      'Explore the latest KreditBee coupon code and offers for August 2026. Apply for personal loans up to ₹10 Lakhs, enjoy fast approvals, flexible EMI options, referral cashback, paperless applications, and competitive interest rates starting from 12% p.a.',
    url: 'https://www.couponscrew.com/stores/kreditbee-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KreditBee Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KreditBee Coupon Code: Personal Loans Up to ₹10 Lakhs | Aug 2026',
    description:
      'Explore the latest KreditBee coupon code and offers for August 2026. Apply for personal loans up to ₹10 Lakhs, enjoy fast approvals, flexible EMI options, referral cashback, paperless applications, and competitive interest rates starting from 12% p.a.',
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

const kreditbeeOffers = KREDITBEE_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `KreditBee ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/kreditbee-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/kreditbee-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/kreditbee-coupon-code',
      name: 'KreditBee Coupon Code: Personal Loans Up to ₹10 Lakhs | Aug 2026',
      description: 'Explore the latest KreditBee coupon code and offers for August 2026. Apply for personal loans up to ₹10 Lakhs, enjoy fast approvals, flexible EMI options, referral cashback, paperless applications, and competitive interest rates starting from 12% p.a.',
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
            name: 'KreditBee Coupon Code',
            item: 'https://www.couponscrew.com/stores/kreditbee-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/kreditbee-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use a KreditBee coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To use a KreditBee coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking \"Copy Code\", and enter it in the KreditBee app where prompted during your loan application. If it is a no-code offer, simply click \"Visit KreditBee\" to check the current offer directly on the app or website."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my KreditBee coupon code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A coupon might not work if it has expired, if it is restricted to a specific user type (such as first-time applicants), or if the offer is no longer active. Always check the validity and terms listed alongside each code on this page."
      }
    },
    {
      "@type": "Question",
      "name": "Are the coupon codes verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every KreditBee coupon code listed on this page is checked periodically by our team so that you see current, working offers rather than outdated ones."
      }
    },
    {
      "@type": "Question",
      "name": "How often are KreditBee offers updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We review and refresh KreditBee offers regularly. Expired or inactive codes are removed so you only see offers that are currently available."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, only one coupon code or offer can be applied per loan application. Please check the specific terms of each offer on the KreditBee app for confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Is KreditBee a legitimate and regulated lender?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. KreditBee operates through NBFC (Non-Banking Financial Company) partners registered with the Reserve Bank of India. It is not a bank itself but lends through regulated financial entities. The loan agreement you sign at the time of disbursal will specify the name of the NBFC issuing the credit."
      }
    },
    {
      "@type": "Question",
      "name": "What does a KreditBee coupon code actually do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KreditBee is a lending platform, not an e-commerce store, so traditional coupon codes that reduce checkout prices do not apply. The platform's equivalent reward mechanism is its referral programme, through which both referrers and new users earn encashable KreditBee Points. There are no publicly available kreditbee promo codes that reduce interest rates or waive fees — any claims to that effect from third-party sites should be treated with caution."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly is a KreditBee personal loan disbursed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In eligible cases where the application is approved and KYC documents are verified, disbursal can happen within minutes. The timeline depends on the accuracy and completeness of the information you provide, the verification process, and your bank's processing speed for inward credits."
      }
    },
    {
      "@type": "Question",
      "name": "What credit score do I need for a KreditBee loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KreditBee does not publish a fixed minimum credit score requirement. Applicants with higher scores are more likely to receive approval at lower interest rates. Applicants with limited credit history — particularly first-time borrowers — may still qualify depending on their income level and the loan amount requested."
      }
    },
    {
      "@type": "Question",
      "name": "Can self-employed individuals apply for a KreditBee loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, unlike some loan apps that are restricted to salaried applicants, KreditBee explicitly supports self-employed borrowers. The documentation and eligibility criteria differ slightly — bank statements and business income proof take the place of salary slips — but the application process follows the same in-app flow."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I miss an EMI payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A missed EMI typically results in a bounce fee and is recorded as an overdue payment. Continued non-payment affects your credit score and may result in legal recovery action as specified in the loan agreement. If you anticipate difficulty making a payment, contacting KreditBee's support team before the due date gives you the best chance of discussing a resolution."
      }
    },
    {
      "@type": "Question",
      "name": "How do I redeem KreditBee referral points?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Referral points accumulate in your in-app wallet and can be converted to cash value or applied within the platform, depending on the current redemption options available. The exact redemption process is managed through the KreditBee app under the rewards or wallet section."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a limit on how many people I can refer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The KreditBee Refer and Earn programme has no cap on the number of successful referrals. Each completed referral — where your friend verifies their profile and takes their first loan — earns you the full reward."
      }
    },
    {
      "@type": "Question",
      "name": "What is the maximum kreditbee personal loan amount I can apply for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KreditBee currently offers loans up to ₹10 Lakhs. The actual amount offered to any individual depends on their income, credit profile, existing liabilities, and the loan product they qualify for during the assessment process."
      }
    },
    {
      "@type": "Question",
      "name": "How does KreditBee differ from loan aggregators like PolicyBazaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KreditBee is a direct lender — it makes the credit decision and disburses the loan through its own NBFC partners. PolicyBazaar is a comparison platform that shows offers from multiple third-party lenders and redirects you to apply with the one you choose. KreditBee is faster for a direct decision; PolicyBazaar is better if you want to compare rates across lenders before committing."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...kreditbeeOffers,
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
        <KreditbeeStore />
      </Suspense>
    </>
  )
}
