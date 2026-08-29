import type { Metadata } from 'next'
import { Suspense } from 'react'
import BlinkitStore from './_components/BlinkitStore'
import { BLINKIT_COUPONS } from './_components/blinkitCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Blinkit Coupon Code: Up to 80% OFF + ₹125 Cashback | Aug 2026 ',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest Blinkit coupon code and promo code for August 2026. Save up to 80% on groceries, fruits, vegetables, baby care, pet care, snacks, and personal care. Enjoy up to ₹125 Paytm cashback, bank offers, free delivery, and exclusive app discounts.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/blinkit-coupon-code',
  },

  openGraph: {
    title: 'Blinkit Coupon Code: Up to 80% OFF + ₹125 Cashback | Aug 2026 ',
    description:
      'Find the latest Blinkit coupon code and promo code for August 2026. Save up to 80% on groceries, fruits, vegetables, baby care, pet care, snacks, and personal care. Enjoy up to ₹125 Paytm cashback, bank offers, free delivery, and exclusive app discounts.',
    url: 'https://www.couponscrew.com/stores/blinkit-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blinkit Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blinkit Coupon Code: Up to 80% OFF + ₹125 Cashback | Aug 2026 ',
    description:
      'Find the latest Blinkit coupon code and promo code for August 2026. Save up to 80% on groceries, fruits, vegetables, baby care, pet care, snacks, and personal care. Enjoy up to ₹125 Paytm cashback, bank offers, free delivery, and exclusive app discounts.',
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

const blinkitOffers = BLINKIT_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Blinkit ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/blinkit-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/blinkit-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/blinkit-coupon-code',
      name: 'Blinkit Coupon Code: Up to 80% OFF + ₹125 Cashback | Aug 2026 ',
      description: 'Find the latest Blinkit coupon code and promo code for August 2026. Save up to 80% on groceries, fruits, vegetables, baby care, pet care, snacks, and personal care. Enjoy up to ₹125 Paytm cashback, bank offers, free delivery, and exclusive app discounts.',
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
            name: 'Blinkit Coupon Code',
            item: 'https://www.couponscrew.com/stores/blinkit-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/blinkit-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a blinkit coupon code and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A blinkit coupon code is an alphanumeric string you enter at the checkout stage of the app or website to unlock a discount. Once applied, the platform deducts the eligible amount automatically — either as a percentage off, a flat rupee discount, or cashback credited to your account. Not all codes work for every cart; eligibility depends on the minimum order value, the product categories in your cart, and sometimes your user status (new vs. returning).'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a blinkit first order coupon code available for new users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Blinkit regularly offers introductory discounts for first-time users. These blinkit first order offers are among the largest discounts available on the platform and typically appear on the app's homepage or are shared through partner platforms like CouponsCrew. The exact discount changes over time, so it is worth checking the latest deal before placing your first order."
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a blinkit discount code, a blinkit promo code, and a blinkit voucher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These terms are essentially interchangeable — they all refer to a code or mechanism you use at checkout to get a price reduction. "Discount code" usually implies a direct price cut, "promo code" is broader and can cover cashback or offer-specific deals, and "voucher" sometimes refers to pre-loaded credit. On Blinkit, all three follow the same redemption flow: enter at checkout and confirm before paying.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my blinkit coupon code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reasons are: the cart has not met the minimum order value, the code has expired, the code is for a specific payment method you are not using, or the code applies only to certain product categories not in your current cart. Read the terms attached to each code carefully before applying.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use multiple blinkit offer codes on one order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally, only one promo code can be applied per order. However, in some cases a promo code can be combined with a bank-level cashback offer applied at the payment stage — the two operate at different layers of the checkout. This depends on the specific deal terms, so always verify.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does the blinkit Grofers coupon code history still work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After the rebrand from Grofers to Blinkit, older Grofers codes were phased out. All active codes are now under the Blinkit name. If you have a blink it grofers coupon code from an older promotion, it is unlikely to still be valid — check the current list on CouponsCrew for working alternatives.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are blinkit coupon codes available without a minimum order value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some deals — particularly category-specific offers like the baby care discount — have no minimum cart requirement. These are typically percentage-based savings on specific products rather than blanket order discounts. Codes tied to cashback or bank offers, however, almost always carry a minimum threshold.'
      }
    },
    {
      '@type': 'Question',
      name: 'How often does Blinkit update its promotional codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blinkit runs a continuous cycle of promotions, with new bank and wallet deals typically updated monthly and flash category deals appearing more frequently. The blinkit offer codes on CouponsCrew are checked and updated regularly to ensure you always see working codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to use coupon codes from third-party sites like CouponsCrew?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CouponsCrew lists only publicly available promotional codes shared by brands or their official partners. Using a blinkit promo code from this page works the same way as entering it anywhere else — the platform validates it on its end, and no account information is shared with third parties.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Blinkit offer separate deals for specific cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Some blinkit offer codes are geo-targeted and apply only in specific cities, particularly for hyperlocal delivery promotions. If a deal appears on the app or CouponsCrew but is not working at checkout, it may be city-restricted. Metro cities like Delhi, Mumbai, Bengaluru, Hyderabad, and Pune tend to have the widest range of available codes.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...blinkitOffers,
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
        <BlinkitStore />
      </Suspense>
    </>
  )
}
