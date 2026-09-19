import type { Metadata } from 'next'
import { Suspense } from 'react'
import UnidaysStore from './_components/UnidaysStore'
import { UNIDAYS_COUPONS } from './_components/unidaysCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'UNiDAYS Coupon Code: Save Up to 60% OFF + Free Student Verification | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest UNiDAYS coupon code and UNiDAYS promo code at Maxiku Offers. Save up to 60% OFF fashion, 40% OFF tech, plus free student verification and exclusive brand discounts.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/unidays-coupon-code',
  },

  openGraph: {
    title: 'UNiDAYS Coupon Code: Save Up to 60% OFF + Free Student Verification | Sept 2026',
    description:
      'Find the latest UNiDAYS coupon code and UNiDAYS promo code at Maxiku Offers. Save up to 60% OFF fashion, 40% OFF tech, plus free student verification and exclusive brand discounts.',
    url: 'https://www.couponscrew.com/stores/unidays-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNiDAYS Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'UNiDAYS Coupon Code: Save Up to 60% OFF + Free Student Verification | Sept 2026',
    description:
      'Find the latest UNiDAYS coupon code and UNiDAYS promo code at Maxiku Offers. Save up to 60% OFF fashion, 40% OFF tech, plus free student verification and exclusive brand discounts.',
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

const unidaysOffers = UNIDAYS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `UNiDAYS ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/unidays-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/unidays-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/unidays-coupon-code',
      name: 'UNiDAYS Coupon Code: Save Up to 60% OFF + Free Student Verification | Sept 2026',
      description: 'Find the latest UNiDAYS coupon code and UNiDAYS promo code at Maxiku Offers. Save up to 60% OFF fashion, 40% OFF tech, plus free student verification and exclusive brand discounts.',
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
            name: 'UNiDAYS Coupon Code',
            item: 'https://www.couponscrew.com/stores/unidays-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/unidays-coupon-code#brand',
      name: 'UNiDAYS',
      url: 'https://www.myunidays.com',
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/unidays-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I verify my student status on UNiDAYS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To verify your student status on UNiDAYS, sign up with your university or college email address, or use an alternative verification method such as uploading a valid student ID if you do not have an eligible student email. Verification is usually instant, though it can occasionally take up to 24 hours if manual review is needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is UNiDAYS free to join and use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, UNiDAYS is completely free to join and use. There is no subscription fee or hidden cost — you simply verify your student status once and get ongoing access to exclusive discounts from partner brands for as long as your student status remains valid.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do UNiDAYS student discounts work in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, UNiDAYS operates globally and supports students in India along with many other countries. The specific brand partners and offers available can vary by region, so it is worth checking which partner brands are currently offering discounts for your location.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens to my UNiDAYS account after I graduate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Once your student status expires after graduation, you generally lose access to student-exclusive UNiDAYS discounts, since verification is tied to active enrolment. Some UNiDAYS partner offers may still be available through separate graduate or alumni discount programs, but these are separate from the core student verification benefits.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why did my student verification fail on UNiDAYS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Verification can fail if your university email is not recognized in their database, if the details you entered do not match your institution's records, or if your uploaded student ID does not clearly show the required information. Trying the alternative verification method or double-checking your details usually resolves the issue.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I get a coupon code or an automatic discount with UNiDAYS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the partner brand. Some UNiDAYS partners provide a unique discount code to apply at checkout, while others redirect verified students directly to a special discounted page where the offer is automatically applied — no code needed.',
          },
        },
      ],
    },

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/unidays-coupon-code#offerlist',
      name: 'UNiDAYS Coupon Codes & Offers',
      numberOfItems: unidaysOffers.length,
      itemListElement: unidaysOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...unidaysOffers,
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
        <UnidaysStore />
      </Suspense>
    </>
  )
}
