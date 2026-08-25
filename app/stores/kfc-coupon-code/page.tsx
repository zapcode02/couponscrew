import type { Metadata } from 'next'
import { Suspense } from 'react'
import KfcStore from './_components/KfcStore'
import { KFC_COUPONS } from './_components/kfcCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'KFC Coupon Codes & Offers: Up to 54% OFF + ₹100 OFF | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Save more with the latest KFC coupon codes and offers for August 2026. Enjoy up to 54% OFF on combo meals, ₹100 OFF on bucket deals, 50% OFF every Friday, lunch specials from ₹299, and rolls starting at just ₹99.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/kfc-coupon-code',
  },

  openGraph: {
    title: 'KFC Coupon Codes & Offers: Up to 54% OFF + ₹100 OFF | Aug 2026',
    description:
      'Save more with the latest KFC coupon codes and offers for August 2026. Enjoy up to 54% OFF on combo meals, ₹100 OFF on bucket deals, 50% OFF every Friday, lunch specials from ₹299, and rolls starting at just ₹99.',
    url: 'https://www.couponscrew.com/stores/kfc-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KFC Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KFC Coupon Codes & Offers: Up to 54% OFF + ₹100 OFF | Aug 2026',
    description:
      'Save more with the latest KFC coupon codes and offers for August 2026. Enjoy up to 54% OFF on combo meals, ₹100 OFF on bucket deals, 50% OFF every Friday, lunch specials from ₹299, and rolls starting at just ₹99.',
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

const kfcOffers = KFC_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `KFC ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/kfc-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/kfc-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/kfc-coupon-code',
      name: 'KFC Coupon Codes & Offers: Up to 54% OFF + ₹100 OFF | Aug 2026',
      description: 'Save more with the latest KFC coupon codes and offers for August 2026. Enjoy up to 54% OFF on combo meals, ₹100 OFF on bucket deals, 50% OFF every Friday, lunch specials from ₹299, and rolls starting at just ₹99.',
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
            name: 'KFC Coupon Code',
            item: 'https://www.couponscrew.com/stores/kfc-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
     {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/kfc-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a KFC coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the KFC app, add your items to the cart, and proceed to checkout. Look for the "Apply Promo Code" field, enter your KFC coupon code, and tap Apply. The discount will reflect in your order total before you pay.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my KFC promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the minimum order value hasn't been met, the code has expired, the outlet isn't eligible, or the code is for new users only. Check the terms listed on CouponsCrew for the specific KFC offer code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a KFC coupon code on Swiggy or Zomato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KFC-specific KFC promo codes typically only work on the KFC app. When ordering through Swiggy or Zomato, use a Swiggy coupon code or Zomato coupon code instead — these are platform-specific and apply to KFC orders placed through those apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the KFC bucket price in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The KFC bucket price in India starts at approximately ₹595 for a 4-piece chicken bucket. Larger buckets and fully loaded options (with sides and drinks) range from ₹899 to ₹1,499. Prices vary by city and outlet — check the KFC app for current pricing before applying a KFC discount code.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are KFC Wednesday offers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KFC Wednesday offers are weekly promotions running every Wednesday with special pricing on selected items — typically discounted buckets, combo meals, or snack items. These are often app-exclusive and change each week. CouponsCrew lists active Wednesday KFC offer codes as they go live.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a KFC promo code for existing users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. KFC regularly sends existing users push notification deals through the KFC app. Bank card offers, Wednesday specials, and seasonal campaigns are also available to all users — not just new ones. Check CouponsCrew for the latest active KFC discount codes for existing users.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does KFC popcorn chicken cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KFC popcorn chicken starts at approximately ₹155 for a regular serving. Prices may vary slightly by city. KFC popcorn chicken frequently features in combo deals and KFC promo codes — check CouponsCrew for active offers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are KFC chicken wings available everywhere in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KFC chicken wings availability varies by outlet and city. They are more consistently available in metro locations. Before ordering, check the KFC menu with prices on the KFC app or your delivery platform to confirm wings are available at your nearest KFC.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I combine a KFC coupon code with a bank card offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In some cases yes — certain KFC promotions allow a KFC promo code to stack with a bank card cashback. Check the terms of both offers before checkout. When stacking is permitted, the combined saving on a large bucket order can be significant.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact KFC India customer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can reach KFC India customer support through the following: Website: Visit KFC India's official Contact Us page at kfc.co.in | Phone: 08042754444. For order-related issues placed through Swiggy or Zomato, contact the respective platform's customer support directly."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...kfcOffers,
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
        <KfcStore />
      </Suspense>
    </>
  )
}
