import type { Metadata } from 'next'
import FestivalOffers from './_components/FestivalOffers'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Festival Offers 2026 — Diwali, Big Billion Day, Black Friday & More | CouponsCrew',
  description:
    'Every major Indian and global festival sale in one place. Diwali, Flipkart Big Billion Day, Amazon Great Indian Sale, Black Friday, Holi, Onam and 20+ more. Verified deals, updated before every sale.',

  keywords: [
    'festival offers India',
    'Diwali coupon codes',
    'Dhanteras offers 2026',
    'Christmas discount offers',
    'New Year sale promo codes',
    'Holi festival deals',
    'Independence Day shopping offers',
    'Raksha Bandhan discount coupons',
    'Dussehra sales India',
    'festive bank offers HDFC ICICI SBI',
    'CouponsCrew festival offers',
    'latest festival shopping deals',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/festival-offers/',
    languages: {
      'en-IN': 'https://www.couponscrew.com/festival-offers/',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Festival Offers 2026 — Diwali, Big Billion Day, Black Friday & More | CouponsCrew',
    description:
      'Every major Indian and global festival sale in one place. Diwali, Flipkart Big Billion Day, Amazon Great Indian Sale, Black Friday, Holi, Onam and 20+ more. Verified deals, updated before every sale.',
    url: 'https://www.couponscrew.com/festival-offers/',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/festival-offers.jpg',
        width: 1200,
        height: 630,
        alt: 'Festival Offers & Festive Sales — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Festival Offers 2026 — Diwali, Big Billion Day, Black Friday & More | CouponsCrew',
    description:
      'Every major Indian and global festival sale in one place. Diwali, Flipkart Big Billion Day, Amazon Great Indian Sale, Black Friday, Holi, Onam and 20+ more. Verified deals, updated before every sale.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/festival-offers.jpg'],
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
      '@id': 'https://www.couponscrew.com/festival-offers/',
      'url': 'https://www.couponscrew.com/festival-offers/',
      'name': 'Festival Offers 2026 — Diwali, Big Billion Day, Black Friday & More | CouponsCrew',
      'description': 'Every major Indian and global festival sale in one place. Diwali, Flipkart Big Billion Day, Amazon Great Indian Sale, Black Friday, Holi, Onam and 20+ more. Verified deals, updated before every sale.',
      'inLanguage': 'en-IN',
      'dateModified': '2026-09-15',
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
        }
      ]
    },

    // 3. FAQPage Schema
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Which is the biggest sale of the year in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The Diwali sale window — which includes Flipkart Big Billion Day and Amazon Great Indian Sale — is consistently the largest shopping event in India by transaction volume. The window typically runs across two to three weeks in October and November.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do Black Friday deals apply in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Most major Indian e-commerce platforms — Amazon India, Myntra, Lenskart, and hundreds of D2C brands — run Black Friday offers. The discounts are often comparable to the Diwali sale window, with SaaS and tech products typically seeing the deepest cuts.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How early should I check before a festival sale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most sale dates are announced 10 to 14 days in advance. CouponsCrew updates each festival page 7 days before the sale opens so buyers can shortlist products and check bank offer eligibility before the rush.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are bank card offers available on all festivals?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'HDFC, SBI, ICICI, and Axis Bank run additional cashback or instant discount offers on most major sale events. The specific card and the eligible purchase amount vary by event — these details are listed on each festival\'s dedicated page on CouponsCrew.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between a festival sale and a flash sale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Festival sales are tied to a calendar event — Diwali, Black Friday, etc. — and run for multiple days with discounts across many categories. Flash sales are brand-initiated, last 4 to 24 hours, and can happen at any point in the year.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which Indian festivals have online shopping sales?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Diwali, Dussehra, Holi, Onam, Pongal, Raksha Bandhan, Ganesh Chaturthi, Eid/Ramzan, Independence Day, Republic Day, and Women\'s Day all have associated online shopping promotions from major Indian platforms.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Does CouponsCrew cover both Indian and global festivals?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. This page covers both — Indian festivals (Diwali, Onam, Holi, etc.) and global events that are now active in India (Black Friday, Cyber Monday, Valentine\'s Day, Christmas, and New Year).'
          }
        },
        {
          '@type': 'Question',
          'name': 'What should I buy during Cyber Monday in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cyber Monday is strongest for tech and software purchases — web hosting plans, SaaS subscriptions, antivirus software, and cloud storage deals often hit their lowest annual price on Cyber Monday. Electronics also see good discounts but fewer than Black Friday.'
          }
        }
      ]
    }
  ]
}

export default function FestivalOffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FestivalOffers />
    </>
  )
}