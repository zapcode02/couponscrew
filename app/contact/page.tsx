import type { Metadata } from 'next'
import Contact from './_components/Contact'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Contact Us — Top Coupon Website in India | CouponsCrew',
  description:
    "Get in touch with CouponsCrew, one of India's top coupon websites. Contact us for queries about deals, coupon codes, discount code support, or brand partnerships.",

  keywords: [
    'contact CouponsCrew',
    'CouponsCrew support',
    'coupon website India contact',
    'CouponsCrew email',
    'coupon code support India',
    'CouponsCrew partnership',
    'best coupon site India contact',
    'deals support India',
    'discount code website support',
    'CouponsCrew help',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/contact',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/contact',
      // 'en-US': 'https://www.couponsbit.us/contact',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Contact Us — Top Coupon Website in India | CouponsCrew',
    description:
      "Get in touch with CouponsCrew, one of India's top coupon websites. Contact us for queries about deals, coupon codes, discount code support, or brand partnerships.",
    url: 'https://www.couponscrew.com/contact',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CouponsCrew — Coupon Website India',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Top Coupon Website in India | CouponsCrew',
    description:
      "Get in touch with CouponsCrew, one of India's top coupon websites. Contact us for queries about deals, coupon codes, discount code support, or brand partnerships.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/contact.jpg'],
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
// JSON-LD Schemas (ContactPage + Organization + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. ContactPage Schema
    {
      '@type': 'ContactPage',
      '@id': 'https://www.couponscrew.com/contact#contactpage',
      name: 'Contact CouponsCrew',
      url: 'https://www.couponscrew.com/contact',
      description:
        'Contact CouponsCrew for customer support, brand partnerships, or any queries about our deals, coupon codes, and discount offers.',
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
            name: 'Contact Us',
            item: 'https://www.couponscrew.com/contact',
          },
        ],
      },
    },

    // 2. Organization Schema (with ContactPoint)
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
      // 💡 Add more ContactPoints below if you have separate channels
      // e.g. sales, partnerships, press
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: 'English',
          areaServed: 'IN',
          email: 'couponscrew@gmail.com',
        },
        // 💡 Uncomment and fill in if you add a partnerships contact
        // {
        //   '@type': 'ContactPoint',
        //   contactType: 'sales',
        //   availableLanguage: 'English',
        //   areaServed: 'IN',
        //   email: 'partnerships@couponscrew.com',
        // },
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
      '@id': 'https://www.couponscrew.com/contact#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I contact CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact CouponsCrew by email at couponscrew@gmail.com. You can also reach us via our social media channels on Instagram, Facebook, and Twitter.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I contact CouponsCrew for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact CouponsCrew for customer support queries about deals and coupon codes, to report a broken or expired coupon code, for brand partnership and listing inquiries, or for any general feedback about the platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I report a broken coupon code on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If a coupon code is not working, you can report it to CouponsCrew by emailing couponscrew@gmail.com with the brand name and the coupon code. Our team will verify and update the listing as soon as possible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can brands or stores list their offers on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, brands and stores can partner with CouponsCrew to list their coupon codes and discount offers. Get in touch via couponscrew@gmail.com to discuss partnership and listing options.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly does CouponsCrew respond to contact requests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew aims to respond to all contact requests within 1–2 business days. For urgent coupon code issues, please include the brand name and code in your email for a faster resolution.',
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
      <Contact />
    </>
  )
}