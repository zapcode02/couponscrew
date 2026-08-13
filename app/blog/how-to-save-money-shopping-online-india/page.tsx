import type { Metadata } from 'next'
import ShoppingIndia from './_components/ShoppingIndia'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
  description:
    'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',

  keywords: [
    'how to save money shopping online India',
    'save money online shopping India',
    'coupon stacking India',
    'bank offers online shopping India',
    'cashback deals India',
    'best coupon codes India',
    'online shopping tips India',
    'verified coupon codes India',
    'CouponsCrew how it works',
    'discount codes India tips',
    'save money Flipkart Amazon India',
    'online shopping saving guide India',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
      // 'en-US': 'https://www.couponsbit.us/blog/how-to-save-money-shopping-online-india',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
    description:
      'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
    url: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
    siteName: 'CouponsCrew',
    // 💡 'article' type is correct for blog posts — better social sharing signals
    type: 'article',
    locale: 'en_IN',
    alternateLocale: [
      // 'en_US',
    ],
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/how-to-save-money-shopping-online-india_hdltd5.webp',
        width: 1200,
        height: 630,
        alt: 'How to Save Money Shopping Online in India — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
    description:
      'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/how-to-save-money-shopping-online-india_hdltd5.webp',
    ],
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
// JSON-LD Schemas (BlogPosting + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. BlogPosting Schema
    // 💡 For every new blog post — update: headline, description, image,
    //    datePublished, dateModified, url, breadcrumb position 3, and FAQs
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india#blogposting',
      headline: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
      description:
        'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/how-to-save-money-shopping-online-india_hdltd5.webp',
        width: 1200,
        height: 630,
      },
      // 💡 UPDATE dateModified every time you edit this post
      datePublished: '2026-06-22',
      dateModified: '2026-06-22',
      url: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
      inLanguage: 'en-IN',
      // 💡 author is required for Google News / Top Stories eligibility
      author: {
        '@type': 'Organization',
        '@id': 'https://www.couponscrew.com/#organization',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
      publisher: {
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
      },
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://www.couponscrew.com/blog#blog',
        name: 'CouponsCrew Blog',
        url: 'https://www.couponscrew.com/blog',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india#webpage',
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
            name: 'Blog',
            item: 'https://www.couponscrew.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'How to Save Money Shopping Online in India',
            item: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    // 💡 Update FAQs to match the actual questions answered in the blog post
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I save money shopping online in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can save money shopping online in India by using verified coupon codes, stacking coupons with bank card offers, using cashback apps, shopping during seasonal sales like Big Billion Day and Great Indian Festival, and using platforms like CouponsCrew that verify every code before listing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is coupon stacking and how does it work in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Coupon stacking means combining multiple discount methods on a single purchase — for example, using a store coupon code together with a bank card offer and a cashback deal. Many Indian platforms like Amazon and Flipkart allow this, letting you layer savings for maximum discounts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does CouponsCrew verify coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew manually verifies every coupon code before it goes live on the platform. Codes are tested at checkout, and expired or non-working codes are removed daily — so you only see deals that actually work.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are bank offers and how do they help save money online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bank offers are special discounts provided by banks and credit/debit card issuers for online purchases on platforms like Amazon, Flipkart, and Myntra. They typically give 5–10% additional instant discounts and can be stacked on top of existing coupon codes for bigger savings.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the best platforms for saving money online in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best platforms for saving money online in India include CouponsCrew for verified coupon codes, Amazon and Flipkart for seasonal sales and bank offers, and cashback apps for additional savings layers. CouponsCrew covers 500+ brands and updates deals daily.',
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
      <ShoppingIndia />
    </>
  )
}