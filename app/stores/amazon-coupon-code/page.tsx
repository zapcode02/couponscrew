import type { Metadata } from 'next'
import { Suspense } from 'react'
import AmazonStore from './_components/AmazonStore'
import { AMAZON_COUPONS } from './_components/amazonCoupons'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
  description:
    'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',

  keywords: [
    'Amazon coupon code',
    'Amazon discount code',
    'Amazon promo code',
    'Amazon sale today',
    'Amazon Big Billion Day deals',
    'Amazon Great Indian Festival coupons',
    'Amazon Prime deals',
    'Amazon electronics coupon',
    'Amazon fashion discount',
    'Amazon medicine discount',
    'Amazon offers today',
    'Amazon verified deals',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/amazon-coupon-code',
    // 💡 Add more locales below as you expand to new countries
    // e.g. 'en-US': 'https://www.couponsbit.us/stores/amazon-coupon-code',
    languages: {
      'en-IN': 'https://www.couponscrew.com/stores/amazon-coupon-code',
      // 'en-US': 'https://www.couponsbit.us/stores/amazon-coupon-code',
      // 'en-GB': 'https://www.couponscrew.com/stores/amazon-coupon-code',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
    description:
      'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
    url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    // 💡 Add alternate locales below as you expand
    alternateLocale: [
      // 'en_US',
      // 'en_GB',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/amazon-coupon-code.jpg',
        width: 1200,
        height: 630,
        alt: 'Amazon Coupon Code – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
    description:
      'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/amazon-coupon-code.jpg'],
  },

  // ── Robots ─────────────────────────────────
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

  // ── Geo Tags ───────────────────────────────
  // 💡 Update geo.region + geo.placename when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',   // optional — uncomment to add city/country name
    language: 'en-IN',
    // 'content-language': 'en-US', // uncomment for US targeting
  },
}

// ─────────────────────────────────────────────
// Offer Schema — one node per visible deal card,
// generated from the same AMAZON_COUPONS data that
// powers the rendered cards in AmazonStore.tsx
// ─────────────────────────────────────────────

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')

const amazonOffers = AMAZON_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Amazon ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/amazon-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + ItemList + FAQPage + Offer)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#webpage',
      url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
      name: 'Amazon Coupon Code - Up to 90% OFF Today | Aug 2026',
      description:
        'Use Amazon coupon code & Amazon discount code to save up to 90% OFF on Electronics, Fashion & more. Prime Members save up to 80% on medicines. 120+ verified deals! Aug 2026',
      inLanguage: 'en-IN',
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
            name: 'Amazon Coupon Code',
            item: 'https://www.couponscrew.com/stores/amazon-coupon-code',
          },
        ],
      },
    },

    // 2. ItemList Schema (Amazon Deal Categories)
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#itemlist',
      name: 'Amazon Coupon Codes & Deals by Category',
      description:
        'Verified Amazon coupon codes and discount deals across Electronics, Fashion, Grocery, Medicines, Home & Kitchen and seasonal sales like Big Billion Day and Great Indian Festival.',
      url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amazon Electronics Coupon Codes',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Amazon Fashion Discount Codes',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Amazon Prime Member Deals',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Amazon Medicine Discount – Up to 80% Off',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Amazon Great Indian Festival Coupons',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Amazon Big Billion Day Deals',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Amazon Home & Kitchen Offers',
          url: 'https://www.couponscrew.com/stores/amazon-coupon-code',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search — mirrors the visible FAQ accordion
    // in AmazonStore.tsx verbatim, per Google's requirement that FAQPage
    // schema reflect visible page content)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I get a 50% discount on Amazon India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discounts of 50% and above are regularly available in the Amazon Warehouse, Amazon Outlet, and during Lightning Deals on the main Deals page. Using a verified Amazon coupon code from CouponScrew on top of an existing sale price is the most reliable way to reach or exceed 50% off.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I stack an Amazon coupon code with a bank offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can apply a CouponScrew promo code at checkout in the "Gift cards & promotional codes" field and then pay with an eligible bank card to claim an additional 10% cashback. Both discounts apply to the same order.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the biggest Amazon sale events in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Great Indian Festival (September–October) and Amazon Prime Day (July) are the two largest annual events with discounts up to 80% across all categories. The Great Republic Day Sale in January and the Great Freedom Sale in August are also major shopping windows.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of Amazon Prime membership?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prime offers free one-day and same-day delivery, early access to Lightning Deals, exclusive Amazon promo codes, Prime Video, Prime Music, and Prime Reading — all bundled into a single annual or monthly subscription.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Amazon Subscribe & Save work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Subscribe & Save lets you schedule regular deliveries of household items at a 5% discount. This increases to 10% when you have 5 or more active subscriptions in a given month, with select brands offering up to 15% off for consistent subscribers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a student discount on Amazon India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon India offers a discounted Prime membership for users aged 18–24 through its Youth Offer, which provides up to 50% off the standard Prime price. This gives students access to all Prime benefits at a significantly reduced rate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find hidden deals on Amazon India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit the Amazon Outlet section for clearance stock and Amazon Renewed for certified refurbished electronics at 20–50% off. The "with coupon" label on product listing pages also indicates an additional on-page discount that many shoppers overlook.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Lightning Deal on Amazon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Lightning Deal is a time-sensitive, limited-stock offer that provides a deep discount for only a few hours. They appear on the Amazon Deals page and sell out quickly, so checking in during sale events and early morning hours gives you the best chance of catching them.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my Amazon promo code not working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A code may fail if it has expired, if the item in your cart is not eligible for the promotion, or if you have not met the minimum order value. Always check the terms listed alongside each code on CouponScrew before applying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there app-exclusive Amazon deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Amazon India regularly offers additional discounts and cashback rewards that are only available through the mobile app. Downloading the app and enabling notifications ensures you do not miss these app-only Amazon discount codes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get free shipping on Amazon without Prime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non-Prime orders qualify for free standard shipping when the order value exceeds the minimum threshold displayed at checkout. The exact threshold varies by category and is shown during the payment step.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often does CouponScrew update its Amazon coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team reviews and updates Amazon promo codes daily. Every listing on this page carries a verification timestamp so you can see exactly when it was last checked and confirmed active.',
          },
        },
      ],
    },

    // 4. Offer Schema (one per visible deal card)
    ...amazonOffers,
  ],
}

// ─────────────────────────────────────────────
// Page Export
// ─────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <AmazonStore />
      </Suspense>
    </>
  )
}