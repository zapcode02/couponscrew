import type { Metadata } from 'next'
import { Suspense } from 'react'
import ZomatoStore from './_components/ZomatoStore'
import { ZOMATO_COUPONS } from './_components/zomatoCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Zomato Coupon Codes & Offers: Up to 60% OFF + ₹200 OFF | Aug 2026',

  // Primary + all secondary keywords + max offer
  description:
    'Save more with the latest Zomato coupon codes and offers for August 2026. Get Flat ₹200 OFF, Free Delivery, Zomato Gold at ₹1, cashback deals, bank offers, and exclusive food delivery discounts.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/zomato-coupon-code',
  },

  openGraph: {
    title: 'Zomato Coupon Codes & Offers: Up to 60% OFF + ₹200 OFF | Aug 2026',
    description:
      'Save more with the latest Zomato coupon codes and offers for August 2026. Get Flat ₹200 OFF, Free Delivery, Zomato Gold at ₹1, cashback deals, bank offers, and exclusive food delivery discounts.',
    url: 'https://www.couponscrew.com/stores/zomato-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zomato Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Zomato Coupon Codes & Offers: Up to 60% OFF + ₹200 OFF | Aug 2026',
    description:
      'Save more with the latest Zomato coupon codes and offers for August 2026. Get Flat ₹200 OFF, Free Delivery, Zomato Gold at ₹1, cashback deals, bank offers, and exclusive food delivery discounts.',
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

const zomatoOffers = ZOMATO_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Zomato ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/zomato-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/zomato-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/zomato-coupon-code',
      name: 'Zomato Coupon Codes & Offers: Up to 60% OFF + ₹200 OFF | Aug 2026',
      description: 'Save more with the latest Zomato coupon codes and offers for August 2026. Get Flat ₹200 OFF, Free Delivery, Zomato Gold at ₹1, cashback deals, bank offers, and exclusive food delivery discounts.',
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
            name: 'Zomato Coupon Code',
            item: 'https://www.couponscrew.com/stores/zomato-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/zomato-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a Zomato coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the Zomato app or website, add items to your cart, and proceed to checkout. Look for the "Apply Coupon" field, enter your Zomato coupon code, and tap Apply. The discount appears in your order summary before you confirm payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my Zomato discount code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common reasons are: the minimum order value hasn't been met, the code has expired, the restaurant isn't eligible, or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Zomato promo code with a bank card offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes yes. Zomato allows certain coupon codes to stack with bank card offers, but not all. Check the offer terms — stackable offers will say so explicitly.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Zomato offer codes only for the app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most are. Zomato's best Zomato promo codes are typically app-exclusive. If a code isn't working on the desktop website, place your order through the Zomato app instead."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I get a Zomato coupon code for existing users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Existing users can find active Zomato discount codes on CouponsCrew, via the Zomato app notifications, through bank card partnership offers, and through Zomato Gold membership benefits.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Zomato Gold and does it replace coupon codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zomato Gold is a paid membership offering complimentary dishes and drinks at partner restaurants. It doesn't replace Zomato coupon codes — Gold members can still use delivery discount codes on top of their membership benefits for delivery orders."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Zomato coupon code on Blinkit orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Blinkit (Zomato's grocery delivery service) operates separately from Zomato food delivery. Zomato coupon codes are not valid on Blinkit orders. Blinkit has its own separate offer system."
      }
    },
    {
      '@type': 'Question',
      name: 'Does Zomato have a gift card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zomato gift cards are available for purchase on the Zomato app and website. They can be sent digitally and redeemed on any Zomato online order. Note that gift cards cannot be combined with a Zomato promo code in the same transaction.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I partner with Zomato as a restaurant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Restaurant owners can apply to partner with Zomato through the Zomato restaurant partner section on the Zomato website. The programme includes listing on the platform, access to the Zomato delivery network, and business analytics tools.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I sign up as a Zomato delivery partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individuals can register as delivery executives through the Zomato delivery partner app, available on Android. The app handles onboarding, zone selection, and earnings tracking for delivery partners.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...zomatoOffers,
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
        <ZomatoStore />
      </Suspense>
    </>
  )
}
