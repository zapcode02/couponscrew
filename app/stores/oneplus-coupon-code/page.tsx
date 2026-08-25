import type { Metadata } from 'next'
import { Suspense } from 'react'
import OneplusStore from './_components/OneplusStore'
import { ONEPLUS_COUPONS } from './_components/oneplusCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'OnePlus Coupon Codes: Up to 50% OFF + ₹4,000 Exchange Bonus | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Explore the latest OnePlus coupon codes and offers for August 2026. Save up to 50% on smartphones, TVs, audio, and accessories. Enjoy up to ₹4,000 bank discounts, exchange bonuses, free OnePlus Buds 3, welcome gift cards, and exclusive launch offers.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/oneplus-coupon-code',
  },

  openGraph: {
    title: 'OnePlus Coupon Codes: Up to 50% OFF + ₹4,000 Exchange Bonus | Aug 2026',
    description:
      'Explore the latest OnePlus coupon codes and offers for August 2026. Save up to 50% on smartphones, TVs, audio, and accessories. Enjoy up to ₹4,000 bank discounts, exchange bonuses, free OnePlus Buds 3, welcome gift cards, and exclusive launch offers.',
    url: 'https://www.couponscrew.com/stores/oneplus-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OnePlus Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'OnePlus Coupon Codes: Up to 50% OFF + ₹4,000 Exchange Bonus | Aug 2026',
    description:
      'Explore the latest OnePlus coupon codes and offers for August 2026. Save up to 50% on smartphones, TVs, audio, and accessories. Enjoy up to ₹4,000 bank discounts, exchange bonuses, free OnePlus Buds 3, welcome gift cards, and exclusive launch offers.',
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

const oneplusOffers = ONEPLUS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `OnePlus ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/oneplus-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/oneplus-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/oneplus-coupon-code',
      name: 'OnePlus Coupon Codes: Up to 50% OFF + ₹4,000 Exchange Bonus | Aug 2026',
      description: 'Explore the latest OnePlus coupon codes and offers for August 2026. Save up to 50% on smartphones, TVs, audio, and accessories. Enjoy up to ₹4,000 bank discounts, exchange bonuses, free OnePlus Buds 3, welcome gift cards, and exclusive launch offers.',
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
            name: 'OnePlus Coupon Code',
            item: 'https://www.couponscrew.com/stores/oneplus-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/oneplus-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a OnePlus coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit oneplus.in, add your chosen product to the cart, and proceed to checkout. Enter your OnePlus coupon code in the "Apply Coupon" field and click Apply. The discounted price will update in your order summary before payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my OnePlus discount code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, the product isn't eligible (some codes apply only to specific models), the minimum purchase value hasn't been met, or the code is for new users only. Check the terms on CouponsCrew for the specific OnePlus promo code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a OnePlus coupon code on Amazon or Flipkart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OnePlus-specific coupon codes typically apply only on oneplus.in. When buying through Amazon or Flipkart, use platform-specific coupon codes available on CouponsCrew instead — these apply to OnePlus purchases made through those platforms.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the current price of the OnePlus 13 in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The OnePlus 13 starts at approximately ₹69,999 for the 12GB + 256GB variant and ₹74,999 for the 16GB + 512GB variant. Prices may vary with bank card offers, exchange bonuses, and during sale events. Apply a OnePlus coupon code from CouponsCrew for the best available price.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which OnePlus Nord model should I buy in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The OnePlus Nord 5 is the latest and most capable mid-range model. For budget buyers, the OnePlus Nord CE series and older Nord models like the OnePlus Nord 2 are available at lower prices with strong performance. Apply an OnePlus discount code or exchange bonus to get the best deal on your chosen Nord model.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is OnePlus 11R 5G still worth buying in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, the OnePlus 11R 5G remains a strong performer in the mid-premium segment. With the Snapdragon 8+ Gen 1 and 100W charging, it handles demanding tasks well. At its current discounted price — further reduced with an OnePlus promo code — it's one of the best value-for-money Android smartphones available."
      }
    },
    {
      '@type': 'Question',
      name: 'Does OnePlus offer an exchange programme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. OnePlus accepts trade-ins of any smartphone brand through its exchange programme on oneplus.in. The exchange value is deducted from the new device price. Combining an exchange bonus with a OnePlus offer code maximises total savings.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the exclusive benefits of buying a OnePlus phone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key benefits include OxygenOS (clean Android), SUPERVOOC fast charging, Hasselblad camera partnership on flagship models, 4 years of Android OS updates, OnePlus Community access, and an authorised service centre network across India.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a OnePlus coupon code for accessories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many OnePlus promo codes apply to accessories including earbuds, smartwatches, and cases. Some codes are product-category specific — check the terms on CouponsCrew to confirm whether the code applies to accessories or phones only.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact OnePlus India customer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OnePlus India customer support is available through the Help Centre at oneplus.in/support. You can also use the OnePlus Community app or visit an authorised OnePlus service centre for hardware support queries.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...oneplusOffers,
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
        <OneplusStore />
      </Suspense>
    </>
  )
}
