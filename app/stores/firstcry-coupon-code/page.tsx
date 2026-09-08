import type { Metadata } from 'next'
import { Suspense } from 'react'
import FirstCryStore from './_components/FirstCryStore'
import { FIRSTCRY_COUPONS } from './_components/firstcryCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'FirstCry Coupon Code: Save Up to 80% OFF + Get extra 5% OFF | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Find the latest FirstCry coupon code and FirstCry promo code at Maxiku Offers. Save up to 80% OFF plus an extra 5% OFF, enjoy 70% OFF beauty products and 65% OFF fashion deals.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/firstcry-coupon-code',
  },

  openGraph: {
    title: 'FirstCry Coupon Code: Save Up to 80% OFF + Get extra 5% OFF | Sept 2026',
    description:
      'Find the latest FirstCry coupon code and FirstCry promo code at Maxiku Offers. Save up to 80% OFF plus an extra 5% OFF, enjoy 70% OFF beauty products and 65% OFF fashion deals.',
    url: 'https://www.couponscrew.com/stores/firstcry-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FirstCry Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FirstCry Coupon Code: Save Up to 80% OFF + Get extra 5% OFF | Sept 2026',
    description:
      'Find the latest FirstCry coupon code and FirstCry promo code at Maxiku Offers. Save up to 80% OFF plus an extra 5% OFF, enjoy 70% OFF beauty products and 65% OFF fashion deals.',
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

const firstcryOffers = FIRSTCRY_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `FirstCry ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/firstcry-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/firstcry-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/firstcry-coupon-code',
      name: 'FirstCry Coupon Code: Save Up to 80% OFF + Get extra 5% OFF | Sept 2026',
      description: 'Find the latest FirstCry coupon code and FirstCry promo code at Maxiku Offers. Save up to 80% OFF plus an extra 5% OFF, enjoy 70% OFF beauty products and 65% OFF fashion deals.',
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
            name: 'FirstCry Coupon Code',
            item: 'https://www.couponscrew.com/stores/firstcry-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/firstcry-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a FirstCry coupon code and how do I use it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A FirstCry coupon code is a discount code that reduces your cart total during checkout on the FirstCry website or app. Add items to your cart, go to checkout, and enter the code in the Apply Coupon field on the payment page. Confirm the discount shows in your order total before completing payment. Codes are case-sensitive and most are single-use per account."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my FirstCry promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common reasons: the code has expired, the items in your cart are sale products (most codes exclude already-discounted items), the code is for new users only and your account has prior orders, or the specific brands in your cart (Pampers, Chicco) are excluded from that promotion. Check the deal card terms on this page before trying the code."
      }
    },
    {
      "@type": "Question",
      "name": "Does FirstCry offer free delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FirstCry offers free delivery above a minimum order value. The threshold varies and is displayed at cart level. For orders below the threshold, a flat delivery fee applies. Check the current threshold on the FirstCry website — it changes periodically."
      }
    },
    {
      "@type": "Question",
      "name": "What is the FirstCry Wallet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The FirstCry Wallet is an in-app balance that deducts automatically from your orders. You load money into it via UPI, card, or net banking. Top-up promotions sometimes add bonus credits when you load above a set amount. Wallet refunds are also faster than bank refunds when returning an item."
      }
    },
    {
      "@type": "Question",
      "name": "What is FirstCry BabyHug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BabyHug is FirstCry's private label brand. It covers diapers, clothing, feeding accessories, nursery products, and baby care. It's positioned as an affordable alternative to premium imported brands. FirstCry BabyHug products are consistently included in platform-wide promotions and are often more reliably discounted than branded products."
      }
    },
    {
      "@type": "Question",
      "name": "Are FirstCry cloth diapers available on the platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FirstCry stocks cloth diapers and reusable absorbent underwear from brands like SuperBottoms and BabyHug's own cloth diaper range. These are listed under the Diapers & Wipes category and can be filtered by type on the FirstCry website."
      }
    },
    {
      "@type": "Question",
      "name": "What is a FirstCry voucher and how is it different from a coupon code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A FirstCry voucher or gift certificate is store credit purchased and gifted to someone else — it works like a prepaid balance on their account. A FirstCry coupon code is a promotional discount code that reduces the price at checkout without any prepayment. Vouchers are account-level credits; coupon codes are applied at the promo code field."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to buy on FirstCry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The biggest discounts are during FirstCry's Baby Week sale (usually mid-year), end-of-season clothing sales in January–February and July–August, and the Diwali festive period for premium products. Diapers and wipes are most aggressively discounted during Baby Week."
      }
    },
    {
      "@type": "Question",
      "name": "What is FirstCry's return policy for diapers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Opened diaper packs are generally non-returnable. Unopened, unused packs in original packaging may be returnable within the standard seven-day window — verify on the product page before purchase. Damaged or incorrectly delivered diaper packs can be reported within 48 hours of delivery for a replacement or refund."
      }
    },
    {
      "@type": "Question",
      "name": "Does FirstCry have physical stores in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FirstCry operates stores across India, concentrated in metros and Tier-1 cities. The FirstCry shop experience covers a curated range of products, though the full catalogue is available only through FirstCry online shopping. In-store purchases follow a separate return process from online orders."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...firstcryOffers,
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
        <FirstCryStore />
      </Suspense>
    </>
  )
}
