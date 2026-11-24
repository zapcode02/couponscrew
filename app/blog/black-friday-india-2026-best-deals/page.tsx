import type { Metadata } from 'next';
import BlackFridayIndia2026Blog from './_components/BlackFridayIndia2026Blog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Black Friday India 2026: Best Deals on Tech, Fashion & More | CouponsCrew',
  description:
    'Black Friday 2026 is on November 27. Best deals on Amazon, Flipkart, Myntra, Hostinger, Puma, Nike & more — phones, laptops, fashion, fitness & web hosting.',

  keywords: [
    'Black Friday India 2026',
    'Black Friday sale India',
    'Black Friday deals Amazon India',
    'Black Friday Flipkart sale 2026',
    'Hostinger Black Friday 2026',
    'Black Friday Myntra sale',
    'Black Friday Puma Nike Adidas India',
    'Black Friday November 27 India deals',
    'best Black Friday deals India 2026',
    'Black Friday shopping guide India',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals',
    },
  },

  openGraph: {
    title: 'Black Friday India 2026: Best Deals on Tech, Fashion & More | CouponsCrew',
    description:
      'Black Friday 2026 is on November 27. Best deals on Amazon, Flipkart, Myntra, Hostinger, Puma, Nike & more — phones, laptops, fashion, fitness & web hosting.',
    url: 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1795539520/Black_Friday_India_2026_Deals_pnubzc.webp',
        width: 1200,
        height: 630,
        alt: 'Black Friday India 2026: Best Deals on Tech, Fashion & More',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Black Friday India 2026: Best Deals on Tech, Fashion & More | CouponsCrew',
    description:
      'Black Friday 2026 is on November 27. Best deals on Amazon, Flipkart, Myntra, Hostinger, Puma, Nike & more — phones, laptops, fashion, fitness & web hosting.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1795539520/Black_Friday_India_2026_Deals_pnubzc.webp',
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
    'geo.region': 'US',
    'geo.country': 'US',
    language: 'en-IN',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals#article',
      headline: 'Black Friday India 2026: Best Deals on Tech, Fashion & More',
      description:
        'Black Friday 2026 is on November 27. Best deals on Amazon, Flipkart, Myntra, Hostinger, Puma, Nike & more — phones, laptops, fashion, fitness & web hosting.',
      datePublished: '2026-11-24',
      dateModified: '2026-11-24',
      url: 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals',
      image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1795539520/Black_Friday_India_2026_Deals_pnubzc.webp',
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
      '@id': 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Black Friday India 2026 Best Deals',
          item: 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is Black Friday 2026 in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Black Friday 2026 falls on November 27. Most Indian platforms like Amazon and Flipkart start their Black Friday sales a few days before — usually from November 23-24.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which apps give the best Black Friday deals in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon India and Flipkart lead Black Friday deals in India. For fashion, Myntra and AJIO run deep discounts. For web hosting, Hostinger\'s Black Friday sale is one of the best of the year. Sports brands like Puma, Adidas, and Nike also run sitewide sales.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Black Friday sale real in India or just marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Black Friday deals in India are real for select categories — especially smartphones, laptops, web hosting, and international fashion brands. Some deals match or beat Diwali sale prices. Always compare using price-track tools before buying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Hostinger have a Black Friday sale in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hostinger\'s Black Friday sale is one of the year\'s biggest discounts on web hosting plans. Expect up to 85% off on shared hosting and premium plans. The sale typically starts a few days before November 27.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Black Friday and Cyber Monday?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Black Friday (November 27) focuses on tech, electronics, fashion, and consumer products. Cyber Monday (November 30) skews toward digital products — web hosting, software, SaaS tools, and online subscriptions. Both are worth watching in India now.',
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
      <BlackFridayIndia2026Blog />
    </>
  );
}
