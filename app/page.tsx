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
            text: 'CouponsCrew is an Indian coupon website where you can find the latest verified coupon codes and discount codes across 500+ brands including Amazon, Flipkart, Myntra, and Swiggy — all updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the coupon codes on CouponsCrew up to date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. CouponsCrew updates all coupon codes and discount codes daily. Every deal is manually verified before being listed so you always get the latest working offers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a coupon code from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find your coupon code on CouponsCrew, click to reveal or copy the code, then paste it at checkout on the brand\'s website to get your discount instantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which brands have the latest discount codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists the latest discount codes for 500+ brands including Amazon, Flipkart, Myntra, Swiggy, Zomato, Nykaa, Pepperfry, AJIO, Meesho, Decathlon and many more — updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew is completely free to use. We earn a small affiliate commission from brands when you make a purchase using our coupon codes, at no extra cost to you.',
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