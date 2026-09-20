import type { Metadata } from 'next';
import UpiChangesBlog from './_components/UpiChangesBlog';

// ─────────────────────────────────────────────
// SEO + Metadata for UPI Changes Blog Page
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026 — CouponsCrew',
  description:
    "From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here's who pays, who doesn't, and what your business should do now.",

  keywords: [
    'UPI 2000 payment changes 2026',
    'UPI MDR rates 2026',
    'merchant discount rate UPI October 15',
    'UPI zero MDR 2026',
    'NPCI UPI changes October 2026',
    'RuPay credit card UPI MDR',
    'kirana store UPI charges 2026',
    'CouponsCrew payment guides',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026 — CouponsCrew',
    description:
      "From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here's who pays, who doesn't, and what your business should do now.",
    url: 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789908955/upi-changes-2000-payments-merchants-mdr-2026_cwjqa7.webp',
        width: 1200,
        height: 630,
        alt: 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026 — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026 — CouponsCrew',
    description:
      "From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here's who pays, who doesn't, and what your business should do now.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1789908955/upi-changes-2000-payments-merchants-mdr-2026_cwjqa7.webp'],
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
};

// ─────────────────────────────────────────────
// JSON-LD Schemas (BlogPosting + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026#webpage',
      url: 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026',
      name: 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026 — CouponsCrew',
      description:
        "From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here's who pays, who doesn't, and what your business should do now.",
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
    },

    // 2. BlogPosting Schema
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026#article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026',
      },
      headline: 'UPI Is Changing: ₹2,000+ Payments Raise New Concerns for Merchants',
      description:
        "From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here's who pays, who doesn't, and what your business should do now.",
      image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789908955/upi-changes-2000-payments-merchants-mdr-2026_cwjqa7.webp',
      datePublished: '2026-09-20T00:00:00+05:30',
      dateModified: '2026-09-20T00:00:00+05:30',
      author: {
        '@type': 'Organization',
        name: 'CouponsCrew Editorial Team',
        url: 'https://www.couponscrew.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.couponscrew.com/logo.png',
        },
      },
    },

    // 3. FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will I be charged for paying through UPI as a customer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Consumer-side UPI payments remain free for any amount. The MDR applies within the merchant payment ecosystem and is not passed on to the person making the payment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this affect UPI transfers I make to friends or family?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Person-to-Person (P2P) UPI transfers are completely outside this framework and stay free regardless of the amount transferred.',
          },
        },
        {
          '@type': 'Question',
          name: 'My kirana store does less than ₹1 lakh in UPI sales per month — do I need to do anything?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Likely not. Small merchants under the ₹1 lakh monthly UPI QR threshold are exempt. But confirm your classification with your payment service provider before October 15 to be sure.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if a merchant adds a digital payment charge on my bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'That is not permitted under the current framework. Merchants are prohibited from directly surcharging customers for MDR. If you encounter this, you can report it to your bank or the NPCI grievance portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this affect UPI AutoPay for subscriptions or SIPs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. UPI AutoPay for recurring payments remains free from MDR under the revised framework.',
          },
        },
      ],
    },
  ],
};

export default function UpiChangesBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UpiChangesBlog />
    </>
  );
}
