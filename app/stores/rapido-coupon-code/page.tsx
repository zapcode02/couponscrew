import type { Metadata } from 'next'
import { Suspense } from 'react'
import RapidoStore from './_components/RapidoStore'
import { RAPIDO_COUPONS } from './_components/rapidoCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Rapido Coupon Code – Free 1st Ride + Up to 55% OFF Travel | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Rapido coupon code , promo code and offers for Aug 2026. Get a free first cab ride, up to 55% OFF travel bookings, 20% OFF metro rides and ₹100 OFF parcels.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/rapido-coupon-code',
  },

  openGraph: {
    title: 'Rapido Coupon Code – Free 1st Ride + Up to 55% OFF Travel | Aug 2026',
    description:
      'Find the latest Rapido coupon code , promo code and offers for Aug 2026. Get a free first cab ride, up to 55% OFF travel bookings, 20% OFF metro rides and ₹100 OFF parcels.',
    url: 'https://www.couponscrew.com/stores/rapido-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rapido Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rapido Coupon Code – Free 1st Ride + Up to 55% OFF Travel | Aug 2026',
    description:
      'Find the latest Rapido coupon code , promo code and offers for Aug 2026. Get a free first cab ride, up to 55% OFF travel bookings, 20% OFF metro rides and ₹100 OFF parcels.',
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

const rapidoOffers = RAPIDO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Rapido ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/rapido-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/rapido-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/rapido-coupon-code',
      name: 'Rapido Coupon Code – Free 1st Ride + Up to 55% OFF Travel | Aug 2026',
      description: 'Find the latest Rapido coupon code , promo code and offers for Aug 2026. Get a free first cab ride, up to 55% OFF travel bookings, 20% OFF metro rides and ₹100 OFF parcels.',
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
            name: 'Rapido Coupon Code',
            item: 'https://www.couponscrew.com/stores/rapido-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/rapido-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a Rapido coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the Rapido app, enter your pickup and destination, select your ride mode, and look for the "Apply Coupon" field before confirming. Enter your Rapido coupon code from CouponsCrew and tap Apply. The discounted fare will update on your confirmation screen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my Rapido promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, your minimum fare hasn't been reached, the code is for first-time users only and your account is registered, or the code doesn't apply to your selected ride mode (bike vs auto vs cab). Check the terms on CouponsCrew for the specific Rapido discount code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'What is a Rapido first ride coupon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Rapido first ride coupon is a new-user discount code offering 50%–100% off the first Rapido ride (up to a fare cap). It's the highest-value Rapido offer code available and is one-time use only. Always apply it before confirming your very first Rapido booking."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Rapido auto coupon code and a Rapido bike coupon code separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Rapido auto coupon codes and Rapido bike coupon codes are separate and apply to their respective ride modes. Apply the appropriate code based on which ride mode you\'re booking.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is a Rapido metro coupon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Rapido metro coupon is a discount code applying to Rapido's metro feeder rides — short trips connecting metro stations to your final destination. These codes offer flat rupee discounts on feeder ride fares, making the last-mile leg of a metro commute even cheaper."
      }
    },
    {
      '@type': 'Question',
      name: 'In which cities does Rapido operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rapido operates in 100+ cities across India, including Bengaluru, Delhi, Hyderabad, Chennai, Kolkata, Pune, Jaipur, Lucknow, Indore, Surat, Chandigarh, Guwahati, Patna, Ranchi, Trichy, Vijayawada, and Visakhapatnam, among many others. Check the Rapido app for the latest city list.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Rapido available for outstation trips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rapido's core service covers intra-city bike, auto, and cab rides. For outstation trips, cab platforms like Ola or Uber may be more suitable. Check the Rapido app for current outstation availability in your city."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I become a Rapido Captain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download the Rapido Captain app, complete the registration with your driving licence and vehicle details, and go through the onboarding process. No upfront fee is required. Rapido Captains can start accepting rides once onboarding is verified.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Rapido coupon codes available for existing users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While the highest-value Rapido first ride coupons are for new users, Rapido regularly offers Rapido discount codes for existing users through app notifications, festive campaigns, referral programmes, and bank/UPI payment partnerships. CouponsCrew lists both new-user and all-user Rapido promo codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Rapido charge surge pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rapido's bike taxi service is known for minimal surge pricing compared to cab platforms. Fares on bike rides remain relatively stable even during peak hours and rain. Rapido auto and cab fares may see moderate increases during high-demand periods."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...rapidoOffers,
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
        <RapidoStore />
      </Suspense>
    </>
  )
}
