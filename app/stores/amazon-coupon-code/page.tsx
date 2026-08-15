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

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/amazon-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use an Amazon coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the Amazon coupon code from CouponsCrew, go to amazon.in, and add the items you want to buy to your cart. At checkout, look for the "Gift cards & promotional codes" field and paste the code there — the discount is applied before you confirm payment, so you can see the updated total before completing the order. Some codes are restricted to specific categories or require a minimum order value, so it is worth checking the terms listed alongside each code on CouponsCrew before applying it. If a code does not apply, the most common reasons are that it has expired, the cart does not meet the minimum spend, or the items in the cart are not eligible for that particular offer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best Amazon coupon code today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists verified Amazon coupon codes updated daily, spanning categories like Electronics, Fashion, and Home & Kitchen, with some offers reaching up to 90% off. What counts as the "best" code depends on what you are buying — a flat-percentage sitewide code is usually strongest for smaller carts, while a category-specific code or a Lightning Deal tends to offer deeper savings on big-ticket items. The current top offers are listed at the top of this page along with their discount value, so you can compare them directly instead of guessing which one applies best to your order. New codes are added and expired ones removed as part of the same daily review process used across every store page on CouponsCrew, so what you see listed reflects what is actually live right now.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Amazon have a Big Billion Day sale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon India does not run a sale called "Big Billion Day" — that name belongs to a competing platform. Amazon\'s own major seasonal sales are the Great Indian Festival, typically held in September–October, and Prime Day in July, both offering some of the deepest discounts of the year across Electronics, Fashion, Grocery, and more. The Great Republic Day Sale in January and the Great Freedom Sale in August are also significant shopping windows, and tend to see especially strong deals in Electronics and Home & Kitchen. CouponsCrew tracks and lists active Amazon coupon codes during all of these events as they go live, so it is worth checking back on this page as a sale window opens rather than only browsing beforehand.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Amazon Prime members get extra discounts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Prime members get early access to Lightning Deals before they open to the general public, exclusive pricing on select products, and promo codes that are not available to non-Prime shoppers. During major sale events like Prime Day, member-only discounts can be substantially deeper than what regular visitors see. Prime also bundles in free one-day or same-day delivery on eligible orders, Prime Video, Prime Music, and Prime Reading, which is part of why many frequent Amazon shoppers treat the membership itself as a standing discount rather than just a delivery perk. Combining a Prime-exclusive deal with an active CouponsCrew coupon code, where the code\'s terms allow it, is generally the most effective way to stack savings on a single order.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are Amazon coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Amazon coupon codes on CouponsCrew go through a verification step before they are listed — the discount value and any eligibility conditions are checked so the code shown actually reflects what you will get at checkout. After that, the team reviews active Amazon codes daily rather than leaving them up indefinitely; any code that has expired, hit its redemption cap, or stopped working is removed from the page. This daily-review process is what keeps the codes on this page current instead of accumulating dead offers the way some coupon listings do. If a listed code does not work at checkout, it is worth double-checking the minimum order value and category restrictions noted alongside it before assuming it has expired.',
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