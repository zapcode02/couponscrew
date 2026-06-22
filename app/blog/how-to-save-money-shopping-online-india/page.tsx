import type { Metadata } from 'next'
import ShoppingIndia from './_components/ShoppingIndia'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',

  description:
    'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
  },

  openGraph: {
    title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
    description:
      'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
    url: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
    siteName: 'CouponScrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782146686/how-to-save-money-shopping-online-india_sf1h2y.webp',
        width: 1200,
        height: 630,
        alt: 'How to Save Money Shopping Online in India — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
    description:
      'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1782146686/how-to-save-money-shopping-online-india_sf1h2y.webp'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
      description:
        'Practical, no-fluff ways to save money shopping online in India — coupon stacking, bank offers, cashback layers — plus how CouponsCrew verifies every code before it goes live.',
      image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782146686/how-to-save-money-shopping-online-india_sf1h2y.webp',
      datePublished: '2026-06-22',
      dateModified: '2026-06-22',
      url: 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'Blog',
        name: 'CouponScrew Blog',
        url: 'https://www.couponscrew.com/blog',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CouponScrew',
        url: 'https://www.couponscrew.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.couponscrew.com/logo.png',
          width: 200,
          height: 60,
        },
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
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ShoppingIndia />
    </>
  )
}
