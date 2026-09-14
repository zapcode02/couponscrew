import type { Metadata } from 'next';
import FeedbackForm from './_components/FeedbackForm';

// ─────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Feedback — Share Your Thoughts | Couponscrew',
  description:
    "Got feedback for Couponscrew? We'd love to hear from you! Share your experience, suggestions, or report an issue. Your feedback helps us improve India's top coupon website.",

  keywords: [
    'Couponscrew feedback',
    'feedback coupon site India',
    'Couponscrew review',
    'share feedback couponscrew',
    'coupon website feedback',
    'Couponscrew suggestions',
    'report issue Couponscrew',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/feedback',
    languages: {
      'en-IN': 'https://www.couponscrew.com/feedback',
    },
  },

  openGraph: {
    title: 'Feedback — Share Your Thoughts | Couponscrew',
    description:
      "Got feedback for Couponscrew? Share your experience, suggestions, or report an issue. We read every single message!",
    url: 'https://www.couponscrew.com/feedback',
    siteName: 'Couponscrew',
    type: 'website',
    locale: 'en_IN',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Feedback — Share Your Thoughts | Couponscrew',
    description:
      "Got feedback for Couponscrew? Share your experience, suggestions, or report an issue. We read every single message!",
    site: '@couponscrew',
    creator: '@couponscrew',
  },

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

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
};

// ─────────────────────────────────────────────
// JSON-LD Schema
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/feedback#webpage',
      name: 'Feedback — Couponscrew',
      url: 'https://www.couponscrew.com/feedback',
      description:
        'Submit your feedback, suggestions, or report issues to the Couponscrew team. We read every message and use it to improve our platform.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'Couponscrew',
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
            name: 'Feedback',
            item: 'https://www.couponscrew.com/feedback',
          },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/#organization',
      name: 'Couponscrew',
      url: 'https://www.couponscrew.com',
      email: 'couponscrew@gmail.com',
    },
  ],
};

// ─────────────────────────────────────────────
// Page Export
// ─────────────────────────────────────────────

export default function FeedbackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeedbackForm />
    </>
  );
}
