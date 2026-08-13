import type { Metadata } from 'next'
import About from './_components/About'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: "About Us — India's Best Coupon Website | CouponsCrew",
  description:
    "CouponsCrew is India's best coupon website. Discover one of the top online coupon sites offering verified coupon codes & discount deals from 500+ brands — helping you save more every day.",

  keywords: [
    "India's best coupon website",
    'about CouponsCrew',
    'top online coupon sites India',
    'verified coupon codes India',
    'CouponsCrew story',
    'best coupon website India',
    'discount deals 500 brands India',
    'how CouponsCrew works',
    'coupon code platform India',
    'online shopping deals India',
    'CouponsCrew mission',
    'save money online India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/about',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/about',
      // 'en-US': 'https://www.couponsbit.us/about',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: "About Us — India's Best Coupon Website | CouponsCrew",
    description:
      "CouponsCrew is India's best coupon website. Discover one of the top online coupon sites offering verified coupon codes & discount deals from 500+ brands — helping you save more every day.",
    url: 'https://www.couponscrew.com/about',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/about.jpg',
        width: 1200,
        height: 630,
        alt: 'About CouponsCrew — Best Coupon Website India',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: "About Us — India's Best Coupon Website | CouponsCrew",
    description:
      "CouponsCrew is India's best coupon website. Discover one of the top online coupon sites offering verified coupon codes & discount deals from 500+ brands — helping you save more every day.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/about.jpg'],
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
// JSON-LD Schemas (AboutPage + Organization + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. AboutPage Schema
    {
      '@type': 'AboutPage',
      '@id': 'https://www.couponscrew.com/about#aboutpage',
      name: 'About CouponsCrew',
      url: 'https://www.couponscrew.com/about',
      description:
        'CouponsCrew is an Indian coupon website helping shoppers save money with verified coupon codes and discount deals from 500+ brands — updated daily.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
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
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: 'https://www.couponscrew.com/about',
          },
        ],
      },
    },

    // 2. Organization Schema
    // 💡 Linked to #organization — consistent with homepage + contact page schemas
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
        'CouponsCrew is an Indian coupon website offering the latest verified coupon codes and discount deals across 500+ brands — updated daily to help shoppers save more.',
      foundingDate: '2025',
      areaServed: 'IN',
      knowsAbout: [
        'Coupon Codes',
        'Discount Codes',
        'Promo Codes',
        'Discount Deals',
        'Online Shopping Offers',
        'Cashback Deals',
        'Affiliate Coupons',
      ],
      sameAs: [
        'https://www.instagram.com/couponscrew',
        'https://www.facebook.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/about#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "CouponsCrew is one of India's best coupon websites, offering verified coupon codes and discount deals across 500+ brands including Amazon, Flipkart, Myntra, Swiggy, Nykaa, Pepperfry and more — all updated daily.",
          },
        },
        {
          '@type': 'Question',
          name: 'When was CouponsCrew founded?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew was founded in 2025 with a mission to help Indian shoppers save money online by providing verified, up-to-date coupon codes and discount deals in one place.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CouponsCrew verify coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew manually verifies every coupon code before listing it on the platform. Codes are tested at checkout and expired or non-working codes are removed daily — ensuring only active deals are shown.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CouponsCrew make money?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew earns a small affiliate commission from brands when a shopper makes a purchase using a coupon code or deal from the platform. This is at no extra cost to the shopper.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which brands does CouponsCrew cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew covers 500+ brands across Fashion, Beauty, Electronics, Home & Kitchen, Fitness, Food, and more — including Amazon, Flipkart, Myntra, Swiggy, Zomato, Nykaa, Pepperfry, AJIO, Meesho and Decathlon.',
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
      <About />
    </>
  )
}