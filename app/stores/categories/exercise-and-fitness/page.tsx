import type { Metadata } from 'next';
import ExerciseFitnessCategory from './_components/ExerciseFitnessCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Fitness Coupon Codes – Save on Gym Gear & Supplements',
  description:
    'Find verified fitness coupon codes & gym & fitness discount codes for Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike, Amazon & more. Sports & fitness promo codes daily.',

  keywords: [
    'fitness coupon codes',
    'gym discount codes',
    'fitness promo codes',
    'Decathlon coupon codes',
    'Healthkart discount codes',
    'MuscleBlaze promo codes',
    'Boldfit coupons',
    'Nike fitness offers',
    'Amazon gym gear deals',
    'supplement discount codes',
    'sports promo codes',
    'gym gear deals today',
    'fitness sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/exercise-and-fitness',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Fitness Coupon Codes – Save on Gym Gear & Supplements',
    description:
      'Find verified fitness coupon codes & gym & fitness discount codes for Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike, Amazon & more. Sports & fitness promo codes daily.',
    url: 'https://www.couponscrew.com/stores/categories/exercise-and-fitness',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/fitness-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitness Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Coupon Codes – Save on Gym Gear & Supplements',
    description:
      'Find verified fitness coupon codes & gym & fitness discount codes for Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike, Amazon & more. Sports & fitness promo codes daily.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/fitness-coupons.jpg'],
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
};

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/categories/exercise-and-fitness#webpage',
      url: 'https://www.couponscrew.com/stores/categories/exercise-and-fitness',
      name: 'Fitness Coupon Codes – Save on Gym Gear & Supplements',
      description:
        'Find verified fitness coupon codes & gym & fitness discount codes for Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike, Amazon & more. Sports & fitness promo codes daily.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        url: 'https://www.couponscrew.com',
        name: 'CouponsCrew',
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
            name: 'Exercise & Fitness',
            item: 'https://www.couponscrew.com/stores/categories/exercise-and-fitness',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/exercise-and-fitness#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a fitness coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the fitness coupon code from CouponsCrew, go to the brand website (Decathlon, Healthkart, MuscleBlaze, etc.), add your gym gear or supplements to the cart, and paste the code at checkout in the promo or discount code field to save instantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which fitness brands have the best coupon codes today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike, and Amazon regularly offer the best fitness and gym coupon codes. CouponsCrew verifies and updates all deals daily so you always get working promo codes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are fitness coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every fitness and gym coupon code listed on CouponsCrew is manually verified and updated daily to ensure it is active and working at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use fitness coupon codes on supplements and gym equipment both?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most fitness coupon codes on CouponsCrew work across both gym equipment and sports supplements. Some codes may be product-specific — always check the offer terms before applying at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I save with fitness coupon codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Savings depend on the brand and active deal. Healthkart and MuscleBlaze often offer 20–40% off supplements, while Decathlon and Amazon run seasonal sales with higher discounts on gym gear and sports equipment.',
          },
        },
      ],
    },
  ],
};

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
      <ExerciseFitnessCategory />
    </>
  );
}