import type { Metadata } from 'next'
import Home from './_components/Home'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Latest Coupon Codes & Discount Codes in India Today | CouponsCrew',
  description:
    'Get the latest coupon codes & discount codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Verified deals updated daily on CouponsCrew. Save more every time you shop.',

  keywords: [
    'latest coupon codes India',
    'discount codes India today',
    'best coupon codes 2025',
    'verified coupon codes',
    'Amazon coupon code',
    'Flipkart discount code',
    'Myntra promo code',
    'Swiggy coupon code',
    'online shopping deals India',
    'best deals today India',
    'coupon websites India',
    'promo codes India',
    'CouponsCrew deals',
    'latest discount codes today',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com',
      // 'en-US': 'https://www.couponsbit.us',
      // 'en-GB': 'https://www.couponscrew.com',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Latest Coupon Codes & Discount Codes in India Today | CouponsCrew',
    description:
      'Get the latest coupon codes & discount codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Verified deals updated daily on CouponsCrew. Save more every time you shop.',
    url: 'https://www.couponscrew.com',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    // 💡 Uncomment to add alternate locales as you expand
    alternateLocale: [
      // 'en_US',
      // 'en_GB',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/home.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponsCrew — Latest Coupon Codes & Discount Codes in India',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Coupon Codes & Discount Codes in India Today | CouponsCrew',
    description:
      'Get the latest coupon codes & discount codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Verified deals updated daily on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/home.jpg'],
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
  // 💡 Update geo.region + language when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',
    language: 'en-IN',
    // 'content-language': 'en-US',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (Organization + WebSite + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/#organization',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.couponscrew.com/logo.png',
        width: 200,
        height: 60,
      },
      description:
        'CouponsCrew is an Indian coupon website offering the latest verified coupon codes and discount codes across 500+ brands including Amazon, Flipkart, Myntra and Swiggy — updated daily.',
      foundingDate: '2025',
      areaServed: 'IN',
      knowsAbout: [
        'Coupon Codes',
        'Discount Codes',
        'Promo Codes',
        'Online Shopping Deals',
        'Affiliate Offers',
        'Cashback Deals',
      ],
      sameAs: [
        'https://www.instagram.com/couponscrew',
        'https://www.facebook.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },

    // 2. WebSite Schema (with SearchAction — uncomment when /search?q= is ready)
    {
      '@type': 'WebSite',
      '@id': 'https://www.couponscrew.com/#website',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      description:
        'Find the latest coupon codes and discount codes for 500+ brands in India — verified and updated daily.',
      inLanguage: 'en-IN',
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
      },
      // 💡 Uncomment when /search?q= route is live — enables Google Sitelinks Searchbox
      // potentialAction: {
      //   '@type': 'SearchAction',
      //   target: {
      //     '@type': 'EntryPoint',
      //     urlTemplate: 'https://www.couponscrew.com/search?q={search_term_string}',
      //   },
      //   'query-input': 'required name=search_term_string',
      // },
    },

    // 3. WebPage Schema (homepage)
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/#webpage',
      url: 'https://www.couponscrew.com',
      name: 'Latest Coupon Codes & Discount Codes in India Today | CouponsCrew',
      description:
        'Get the latest coupon codes & discount codes from 500+ brands — Amazon, Flipkart, Myntra, Swiggy & more. Verified deals updated daily on CouponsCrew.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@id': 'https://www.couponscrew.com/#website',
      },
      about: {
        '@id': 'https://www.couponscrew.com/#organization',
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
        ],
      },
    },

    // 4. FAQPage Schema (AEO + AI Search — updated brand name + latest angle)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew is an Indian coupon website where you can find verified coupon codes and discount codes across hundreds of brands, updated daily. Instead of leaving you to hunt through forums or expired code lists, CouponsCrew organizes active offers by store and category so you can find a working code for the brand you are already shopping with in a few seconds. Every code listed goes through a verification step before it appears on the site, and offers that stop working or expire are removed rather than left up indefinitely. The goal is a single place to check before checkout — one that stays current instead of accumulating dead codes over time the way many coupon directories do.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the coupon codes on CouponsCrew up to date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. CouponsCrew reviews active deals daily rather than publishing a code once and leaving it up indefinitely. Before a new code goes live, it is tested at checkout to confirm the discount value and any minimum-order requirements actually apply, and only then does it get listed. After that, the team continues checking listed offers — any code that has expired, hit its redemption cap, or started failing at checkout is pulled from the site rather than left to waste a shopper\'s time. This daily-review process is what keeps the "verified" label meaningful instead of just being a badge attached once and forgotten.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a coupon code from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find the brand or store you are shopping with on CouponsCrew, then open its page to see the active codes and deals listed for it. Click a code to reveal or copy it, then head to the brand\'s website, add your items to the cart, and paste the code into the promo or discount field at checkout. The discount should apply immediately before you complete payment — if a minimum order value or specific category applies to that code, it is noted alongside the offer so there are no surprises at checkout. No account or signup is required on CouponsCrew itself to copy and use a code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which brands have the latest discount codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew currently lists verified coupon codes and deals for Amazon and Pepperfry, spanning categories like electronics, fashion, beauty, and home & kitchen, with more brand pages being added over time. Each store has its own dedicated page listing every active code and deal for that brand, rather than mixing everything into one long undifferentiated list. New codes are checked in and expired ones are removed as part of the same daily review process used across the site, so the codes shown on a given brand\'s page reflect what is actually active rather than a static archive of offers that may no longer work.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew is completely free to use, with no account, signup, or subscription required to browse or copy a coupon code. The site is supported by affiliate commissions — when you click through to a brand\'s website and complete a purchase using a code found on CouponsCrew, the brand may pay a small referral commission. This does not change the price you pay at checkout; the discount you see applied is the same whether or not that commission exists, and it is the same commission-based model used by most coupon and deals sites. CouponsCrew does not charge shoppers directly for access to codes, and does not sell user data to advertisers or third parties to generate revenue instead.',
          },
        },
      ],
    },
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
      <Home />
    </>
  )
}