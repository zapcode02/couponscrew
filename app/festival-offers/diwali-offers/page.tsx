import type { Metadata } from 'next'
import DiwaliOffers from './_components/DiwaliOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO Metadata for Diwali Offers
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
  description:
    'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',

  keywords: [
    'Diwali offers 2026',
    'Diwali discount coupons',
    'Diwali sale deals',
    'Amazon Diwali sale coupons',
    'Flipkart Big Billion Days Diwali',
    'Myntra Diwali fashion sale',
    'Nykaa Diwali beauty offers',
    'HDFC ICICI SBI bank Diwali offers',
    'festive shopping coupons India',
    'CouponsCrew Diwali deals',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
    description:
      'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
    url: 'https://www.couponscrew.com/festival-offers/diwali-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/diwali-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Diwali Offers & Festive Discounts 2026 — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Diwali Offers 2026 — Up to 80% OFF Coupons & Bank Deals | CouponsCrew',
    description:
      'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/diwali-offers.jpg'],
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
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (CollectionPage + BreadcrumbList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/diwali-offers/',
      'name': 'Diwali Offers 2026 — Up to 80% OFF Coupons, Bank Deals & Festive Discounts | CouponsCrew',
      'description': 'Save big this Diwali 2026 with verified coupon codes, bank discount offers, and festive sales from Amazon, Flipkart, Myntra, Nykaa, and 500+ top brands on CouponsCrew.',
      'inLanguage': 'en-IN',
      'dateModified': '2026-09-19',
      'publisher': {
        '@type': 'Organization',
        'name': 'CouponsCrew',
        'url': 'https://www.couponscrew.com'
      }
    },

    // 2. BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.couponscrew.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Festival Offers',
          'item': 'https://www.couponscrew.com/festival-offers/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Diwali Offers',
          'item': 'https://www.couponscrew.com/festival-offers/diwali-offers/'
        }
      ]
    },

    // 3. FAQPage Schema
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'When do Diwali offers start in 2026?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Diwali offers typically start 2-3 weeks before Diwali. For 2026, early bird sales begin in October with peak discounts during the festive week.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which brands give the best Diwali discounts?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Major platforms like Amazon, Flipkart, Myntra, Nykaa, and Tata CLiQ offer up to 80% off across electronics, fashion, beauty, and home appliances.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are there any bank offers available?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Leading banks including HDFC, ICICI, SBI, and Axis Bank provide 10% instant discounts on credit/debit card transactions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I get the latest Diwali coupon codes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'CouponsCrew updates all Diwali coupon codes daily. Simply browse this page or subscribe to our newsletter for instant deal alerts.'
          }
        }
      ]
    }
  ]
}

export default function DiwaliOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiwaliOffers />
    </>
  )
}
