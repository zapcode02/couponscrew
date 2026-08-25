import type { Metadata } from 'next'
import { Suspense } from 'react'
import SwiggyStore from './_components/SwiggyStore'
import { SWIGGY_COUPONS } from './_components/swiggyCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Swiggy Coupon Codes: Up to 50% OFF + Flat ₹200 OFF | August 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save more with the latest Swiggy coupon codes and offers for August 2026. Get up to 50% OFF on food orders, Flat ₹200 OFF, ₹175 OFF, Dineout deals with free drinks, meals from ₹99, free delivery, and exclusive restaurant discounts.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/swiggy-coupon-code',
  },

  openGraph: {
    title: 'Swiggy Coupon Codes: Up to 50% OFF + Flat ₹200 OFF | August 2026',
    description:
      'Save more with the latest Swiggy coupon codes and offers for August 2026. Get up to 50% OFF on food orders, Flat ₹200 OFF, ₹175 OFF, Dineout deals with free drinks, meals from ₹99, free delivery, and exclusive restaurant discounts.',
    url: 'https://www.couponscrew.com/stores/swiggy-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Swiggy Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Swiggy Coupon Codes: Up to 50% OFF + Flat ₹200 OFF | August 2026',
    description:
      'Save more with the latest Swiggy coupon codes and offers for August 2026. Get up to 50% OFF on food orders, Flat ₹200 OFF, ₹175 OFF, Dineout deals with free drinks, meals from ₹99, free delivery, and exclusive restaurant discounts.',
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

const swiggyOffers = SWIGGY_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Swiggy ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/swiggy-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/swiggy-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/swiggy-coupon-code',
      name: 'Swiggy Coupon Codes: Up to 50% OFF + Flat ₹200 OFF | August 2026',
      description: 'Save more with the latest Swiggy coupon codes and offers for August 2026. Get up to 50% OFF on food orders, Flat ₹200 OFF, ₹175 OFF, Dineout deals with free drinks, meals from ₹99, free delivery, and exclusive restaurant discounts.',
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
            name: 'Swiggy Coupon Code',
            item: 'https://www.couponscrew.com/stores/swiggy-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/swiggy-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a Swiggy coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the Swiggy app or visit swiggy.com, add items to your cart, and proceed to checkout. Look for the "Apply Coupon" field, enter your Swiggy coupon code, and tap Apply. The discount will reflect in your order summary before you confirm payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my Swiggy discount code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the minimum order value hasn't been met, the code has expired, the restaurant or product isn't eligible, or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific Swiggy promo code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Swiggy coupon code on Instamart orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some Swiggy coupon codes apply to both food delivery and Instamart, while others are category-specific. Check the terms of each code on CouponsCrew to confirm whether it applies to Instamart, food delivery, or both.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Swiggy One and is it worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swiggy One is Swiggy\'s paid membership offering free delivery, member discounts, Dineout benefits, and partner perks across food delivery, Instamart, and dining. For users placing 8 or more orders per month, it typically pays for itself quickly. Apply a Swiggy coupon code when purchasing the Swiggy One subscription to reduce the membership cost.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Swiggy Instamart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swiggy Instamart is Swiggy\'s rapid grocery delivery service, delivering fruits, vegetables, dairy, packaged foods, household essentials, and more in 10–30 minutes. It operates through dark stores rather than retail partnerships and is available in major Indian cities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Swiggy promo codes only for the app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most Swiggy coupon codes are app-exclusive. If a Swiggy discount code isn't working on the website, try redeeming it through the Swiggy app instead."
      }
    },
    {
      '@type': 'Question',
      name: 'What is Genie on Swiggy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Genie is Swiggy's intra-city pickup and drop courier service. It allows users to send documents, packages, and items across the city using Swiggy's delivery partner network. Genie is available in select metro cities and is billed based on delivery distance."
      }
    },
    {
      '@type': 'Question',
      name: 'How does Swiggy compare to Zomato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swiggy covers food delivery, Instamart quick commerce, Dineout, Scenes (events), and Giftables in one app. Zomato covers food delivery, Blinkit quick commerce, and dining discovery with stronger restaurant review features. Both cover 700–800+ cities. CouponsCrew maintains separate verified coupon code pages for both platforms.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a Swiggy coupon code for dining out via Dineout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some Swiggy offer codes apply to Dineout restaurant bookings and bill payments. These are category-specific — check the terms on CouponsCrew to confirm whether a Swiggy discount code covers Dineout or food delivery only.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I become a Swiggy delivery partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individuals can register as Swiggy delivery partners through the Swiggy delivery partner app, available on Android. The app handles onboarding, zone selection, order acceptance, and earnings tracking. Swiggy delivery partners can work flexible hours and earn per delivery completed.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...swiggyOffers,
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
        <SwiggyStore />
      </Suspense>
    </>
  )
}
