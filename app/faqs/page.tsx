import type { Metadata } from 'next'
import FAQ from './_components/FAQ'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'FAQs — Coupon Codes, Promo Codes & Deals Help | CouponsCrew',

  description:
    'Got questions about coupon codes or promo codes? Find answers to the most frequently asked questions about using deals, offers, and discounts on CouponsCrew.',

  keywords: [
    'coupon codes FAQ',
    'promo codes help',
    'how to use coupon codes',
    'CouponsCrew FAQ',
    'discount codes questions',
    'how to apply promo code',
    'deals and offers help',
    'coupon code not working',
    'how to find best deals',
    'online shopping coupons India',
  ],

  // ── Canonical + Hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/faqs',
    languages: {
      'en-IN': 'https://www.couponscrew.com/faqs',
      // 💡 Uncomment when expanding to other markets:
      // 'en-US': 'https://www.couponscrew.com/us/faqs',
      // 'en-GB': 'https://www.couponscrew.com/gb/faqs',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'FAQs — Coupon Codes, Promo Codes & Deals Help | CouponsCrew',
    description:
      'Got questions about coupon codes or promo codes? Find answers to the most frequently asked questions about using deals, offers, and discounts on CouponsCrew.',
    url: 'https://www.couponscrew.com/faqs',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    // 💡 Uncomment to enable alternate locales for multi-region OG:
    // alternateLocale: ['en_US', 'en_GB'],
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQs — CouponsCrew Coupon Codes & Deals Help',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs — Coupon Codes, Promo Codes & Deals Help | CouponsCrew',
    description:
      'Got questions about coupon codes or promo codes? Find answers to the most frequently asked questions about using deals, offers, and discounts on CouponsCrew.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  // ── Robots ─────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── Geo + Language Tags ────────────────────
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
    // 💡 Expand for other regions:
    // 'geo.region': 'US',
    // 'geo.country': 'US',
    // language: 'en-US',
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schema — WebPage + Organization + FAQPage
// FAQs match actual page content
// ─────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Organization (entity anchor) ──────────
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
      sameAs: [
        'https://www.facebook.com/couponscrew',
        'https://www.instagram.com/couponscrew',
        'https://twitter.com/couponscrew',
      ],
    },

    // ── WebSite ───────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://www.couponscrew.com/#website',
      name: 'CouponsCrew',
      url: 'https://www.couponscrew.com',
      publisher: {
        '@id': 'https://www.couponscrew.com/#organization',
      },
    },

    // ── WebPage ───────────────────────────────
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/faqs#webpage',
      name: 'FAQs — Coupon Codes, Promo Codes & Deals Help | CouponsCrew',
      url: 'https://www.couponscrew.com/faqs',
      description:
        'Got questions about coupon codes or promo codes? Find answers to the most frequently asked questions about using deals, offers, and discounts on CouponsCrew.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@id': 'https://www.couponscrew.com/#website',
      },
      publisher: {
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
            name: 'FAQs',
            item: 'https://www.couponscrew.com/faqs',
          },
        ],
      },
    },

    // ── FAQPage — matches actual page content ──
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/faqs#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a coupon code from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Find the coupon you want, click "Get Code" to copy it, head to the brand\'s website, add your items to cart, and paste the code at checkout in the promo code field. The discount applies instantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my coupon code showing as invalid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The code may have a minimum order value, be restricted to specific categories, or be a new-user-only offer. Brands sometimes change terms without notice. If a code was verified recently and is still not working, report it and CouponsCrew will fix it within 2 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I stack a coupon code with a bank card offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Most brands allow one coupon code per order, but you can stack it with a bank card offer from HDFC, ICICI, or SBI on top. Adding a cashback app gives you three layers of savings at once — a ₹5,000 order can realistically come down to ₹3,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do coupon codes expire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, every code has an expiry date set by the brand. CouponsCrew displays the validity period on each coupon card and removes expired codes within minutes. The "Verified X mins ago" timestamp shows exactly how fresh each code is.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a coupon code and a deal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A coupon code is a text string you paste at checkout to unlock a discount. A deal is a pre-applied offer that activates automatically when you click through — no code needed. Deals are faster; coupons often give a bigger discount. CouponsCrew lists both.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if a coupon is verified and actually working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every coupon on CouponsCrew shows a "Verified X mins/hours ago" timestamp. Codes are tested before going live and removed as soon as they stop working. CouponsCrew maintains a 92.4% success rate — if you hit a rare miss, report it and it will be cleaned up fast.',
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FAQ />
    </>
  )
}