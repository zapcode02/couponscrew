import type { Metadata } from 'next'
import { Suspense } from 'react'
import MagicpinStore from './_components/MagicpinStore'
import { MAGICPIN_COUPONS } from './_components/magicpinCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Magicpin Coupon Code & Promo Code: Save Up to 80% on Top Brands | Aug 2026',

  // Primary + all secondary keywords + max offer | ~150 chars
  description:
    'Find the latest Magicpin coupon code and promo code for August 2026. Save up to 80% on beauty, fashion, dining, grocery, and pharmacy products, enjoy 100% voucher deals, get up to 60% sitewide savings, and unlock exclusive brand offers.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/magicpin-coupon-code',
  },

  openGraph: {
    title: 'Magicpin Coupon Code & Promo Code: Save Up to 80% on Top Brands | Aug 2026',
    description:
      'Find the latest Magicpin coupon code and promo code for August 2026. Save up to 80% on beauty, fashion, dining, grocery, and pharmacy products, enjoy 100% voucher deals, get up to 60% sitewide savings, and unlock exclusive brand offers.',
    url: 'https://www.couponscrew.com/stores/magicpin-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magicpin Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Magicpin Coupon Code & Promo Code: Save Up to 80% on Top Brands | Aug 2026',
    description:
      'Find the latest Magicpin coupon code and promo code for August 2026. Save up to 80% on beauty, fashion, dining, grocery, and pharmacy products, enjoy 100% voucher deals, get up to 60% sitewide savings, and unlock exclusive brand offers.',
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

const magicpinOffers = MAGICPIN_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Magicpin ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/magicpin-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/magicpin-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/magicpin-coupon-code',
      name: 'Magicpin Coupon Code & Promo Code: Save Up to 80% on Top Brands | Aug 2026',
      description: 'Find the latest Magicpin coupon code and promo code for August 2026. Save up to 80% on beauty, fashion, dining, grocery, and pharmacy products, enjoy 100% voucher deals, get up to 60% sitewide savings, and unlock exclusive brand offers.',
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
            name: 'Magicpin Coupon Code',
            item: 'https://www.couponscrew.com/stores/magicpin-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/magicpin-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Magicpin coupon code and where can I find one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A magicpin coupon code is a promotional string — either shared by Magicpin directly or listed on platforms like CouponsCrew — that unlocks a discount on eligible purchases through the Magicpin app. Codes are applied at checkout for online orders, while in-store deals are typically activated by scanning a QR code or uploading a bill. CouponsCrew keeps this page updated with verified, working codes as they become available.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the Magicpin referral code work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The magicpin referral code is a unique alphanumeric string tied to your account. When a new user signs up using your referral code and completes their first qualifying transaction, both you and the new user receive Magicpin points. The exact reward amount varies with ongoing promotions. You can find your personal referral code in the app under your profile or wallet section.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Magicpin available in all Indian cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magicpin operates across a growing number of Indian cities, with the strongest partner networks in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, and Chennai. Coverage in smaller cities is expanding, but the range of active magicpin partner outlets will vary depending on your location.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a magicpin discount code and a magicpin promo code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both terms refer to the same type of promotional discount mechanism. A magicpin discount code typically implies a direct price reduction at checkout, while a magicpin promo code can cover a broader range of promotions including cashback, bonus points, or category-specific deals. On the platform itself, both types are entered in the same promo field during checkout.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a magicpin coupon code on in-store purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Magicpin is specifically built for in-store use. For most physical merchant deals, you show the active offer on your app screen at the counter, pay through the app or upload your bill afterward. The cashback or discount is then applied to your Magicpin wallet rather than deducted at point of sale in every case — check the specific deal terms for how each partner offer works.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact Magicpin customer care if my code does not work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Magic pin customer care can be reached through the in-app help section, which covers common issues including failed code redemptions, missing cashback, and bill-upload errors. The app's help centre is the fastest route for most issues; alternatively, the support email and social media channels listed on Magicpin's official website handle queries that require follow-up."
      }
    },
    {
      '@type': 'Question',
      name: 'What is the Magicpin points system and how do I redeem points?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magicpin points are earned on qualifying purchases at partner outlets — both online and in-store. Points accumulate in your wallet and can be redeemed as partial payment on future orders or visits at any magicpin partner business. The redemption rate and minimum threshold vary by outlet and offer.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Magicpin offer deals for groceries and supermarkets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, local grocery stores and supermarkets that have registered as magicpin partner outlets list cashback deals on the platform. These tend to be most useful for repeat shoppers at the same neighbourhood store, where the points accumulate meaningfully over multiple visits.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are magicpin promo codes only for new users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While new users typically receive the largest introductory discount, Magicpin runs ongoing promotions for existing users as well — including seasonal codes, category-specific deals, and referral rewards that are accessible to all account holders.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is the Magicpin app free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, downloading and using the Magicpin app is free. There is no subscription fee to access partner deals or to apply a magicpin coupon code. Some premium features or higher-tier loyalty benefits may require a certain transaction history or specific membership, but basic deal access is open to all users.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...magicpinOffers,
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
        <MagicpinStore />
      </Suspense>
    </>
  )
}
