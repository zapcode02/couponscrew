import type { Metadata } from 'next';
import AmazonGreatIndianFestival2026Blog from './_components/AmazonGreatIndianFestival2026Blog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
  description:
    'Amazon Great Indian Festival 2026 starts 8 October. See the SBI 10% offer, Prime early access, live Early Deal prices, deal timings and Amazon\'s full sale calendar.',

  keywords: [
    'Amazon Great Indian Festival 2026',
    'Amazon sale date',
    'Great Indian Festival SBI offer',
    'Amazon Prime early access',
    'Amazon upcoming sales 2026',
    'GIF 2026',
    'Amazon festive sale',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales',
    },
  },

  openGraph: {
    title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
    description:
      'Amazon Great Indian Festival 2026 starts 8 October. See the SBI 10% offer, Prime early access, live Early Deal prices, deal timings and Amazon\'s full sale calendar.',
    url: 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
        width: 1200,
        height: 630,
        alt: 'Amazon Great Indian Festival 2026: Sale Date, Prime Early Access, SBI Offer and Live Deals',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
    description:
      'Amazon Great Indian Festival 2026 starts 8 October. See the SBI 10% offer, Prime early access, live Early Deal prices, deal timings and Amazon\'s full sale calendar.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
    ],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales#article',
      headline: 'Amazon Great Indian Festival 2026: Sale Date, Prime Early Access, SBI Offer and Live Deals',
      description:
        'Amazon Great Indian Festival 2026 starts 8 October. See the SBI 10% offer, Prime early access, live Early Deal prices, deal timings and Amazon\'s full sale calendar.',
      image:
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
      datePublished: '2026-09-27',
      dateModified: '2026-09-27',
      author: {
        '@type': 'Organization',
        name: 'CouponsCrew Editorial Team',
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
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://www.couponscrew.com/blog#blog',
        name: 'CouponsCrew Blog',
        url: 'https://www.couponscrew.com/blog',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Amazon Great Indian Festival 2026',
          item: 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When does Amazon Great Indian Festival 2026 start?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon Great Indian Festival 2026 starts on 8 October 2026, as announced by Amazon.in on 18 September 2026. Early Deals have been live since 25 September.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is Prime early access for Amazon GIF 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prime early access is widely expected on 7 October 2026, but Amazon has not confirmed it yet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which bank offer is available in Amazon GIF 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SBI credit cards, debit cards and EMI get a 10% instant discount, and Prime members get up to 10% extra.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmazonGreatIndianFestival2026Blog />
    </>
  );
}
