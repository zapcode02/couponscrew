import type { Metadata } from 'next'
import { Suspense } from 'react'
import DominosStore from './_components/DominosStore'
import { DOMINOS_COUPONS } from './_components/dominosCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Dominos Coupon Code - Up to 50% OFF on Pizza | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Dominos coupon code and discount codes with up to 50% OFF on pizzas, combos & sides. Discover verified deals and offers, updated regularly. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/dominos-coupon-code',
  },

  openGraph: {
    title: 'Dominos Coupon Code - Up to 50% OFF on Pizza | Aug 2026',
    description:
      'Get the latest Dominos coupon code and discount codes with up to 50% OFF on pizzas, combos & sides. Discover verified deals and offers, updated regularly. Aug 2026',
    url: 'https://www.couponscrew.com/stores/dominos-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dominos Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dominos Coupon Code - Up to 50% OFF on Pizza | Aug 2026',
    description:
      'Get the latest Dominos coupon code and discount codes with up to 50% OFF on pizzas, combos & sides. Discover verified deals and offers, updated regularly. Aug 2026',
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

const dominosOffers = DOMINOS_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Dominos ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/dominos-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/dominos-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/dominos-coupon-code',
      name: 'Dominos Coupon Code - Up to 50% OFF on Pizza | Aug 2026',
      description: 'Get the latest Dominos coupon code and discount codes with up to 50% OFF on pizzas, combos & sides. Discover verified deals and offers, updated regularly. Aug 2026',
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
            name: 'Dominos Coupon Code',
            item: 'https://www.couponscrew.com/stores/dominos-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/dominos-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      'name': "How do I find a working Domino's coupon code today?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Every Domino's coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code is copied to your clipboard and you are redirected to Domino's. Expired codes are removed daily. If a code does not work, check the conditions on the deal card and try the next active listing."
      }
    },
    {
      '@type': 'Question',
      'name': "Can I use a Domino's promo code on combo orders?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Most standard Domino's promo codes exclude combo and Everyday Value (EDV) items — these are noted on the individual deal cards. Some codes are specifically valid on combos (like the Super Saver Combo deal). Use the CouponsCrew category filter to find combo-specific deals."
      }
    },
    {
      '@type': 'Question',
      'name': "Are Domino's coupon codes valid for both delivery and takeaway?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Most codes are valid on delivery orders only. The deal card on each CouponsCrew listing clearly states whether takeaway orders are eligible. The majority of app-exclusive codes are delivery-only."
      }
    },
    {
      '@type': 'Question',
      'name': "What is the Domino's Cheesy Rewards programme?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Cheesy Rewards is Domino's free loyalty programme. Earn 100 points on every order of ₹350 or more (max 100 per day). Redeem 600 points for a free regular pizza. Points are valid for 365 days from enrolment. Enrol via the Domino's India app before your next qualifying order."
      }
    },
    {
      '@type': 'Question',
      'name': "How do I find Domino's pizza near me?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "The Domino's app and website (dominos.co.in) detect your location and show available stores in your area. Enter your delivery address at the start of the ordering flow — Domino's assigns the nearest store automatically and filters available deals to what that store supports."
      }
    },
    {
      '@type': 'Question',
      'name': "Can I stack a Domino's coupon code with a bank card offer?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "In many cases, yes — a Domino's discount code and a bank card instant discount can both apply to the same order. Apply the code in the coupon field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes and the Domino's checkout page for confirmation."
      }
    },
    {
      '@type': 'Question',
      'name': "What are the best Domino's pizza deals for a group order?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "For group orders above ₹1,500, the PARTY500 code (flat 30% off, up to ₹500) is typically the highest-value option. The BUY2GET1 deal (3 medium pizzas at ₹199 each) and the ₹750 off large order deal are also strong for group purchases. CouponsCrew's deal card filters let you sort by discount amount to find the best current option for your cart size."
      }
    },
    {
      '@type': 'Question',
      'name': "Are there Domino's coupon codes for first-time users?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Yes — the NEWBIE100 code gives new users ₹100 off plus ₹50 instant cashback on their first order. Check the \"New Users\" filter on this CouponsCrew page for all currently active first-order deals."
      }
    },
    {
      '@type': 'Question',
      'name': "What payment methods does Domino's accept?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "Domino's accepts all major credit and debit cards (Visa, Mastercard, AMEX, RuPay), UPI (Paytm, PhonePe, Google Pay, Amazon Pay), net banking, and cash on delivery at select stores. Bank card and UPI cashback offers apply at the payment step — no additional code required."
      }
    },
    {
      '@type': 'Question',
      'name': "How often does CouponsCrew update Domino's deals?",
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': "This page is updated daily. Expired codes are removed as soon as they are detected, and new Dominos online coupon codes and deals are added as Domino's launches new promotions. For time-sensitive deals like the BUY2GET1 or lightning deals, refresh the page before placing your order to ensure you have the most current version."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...dominosOffers,
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
        <DominosStore />
      </Suspense>
    </>
  )
}
