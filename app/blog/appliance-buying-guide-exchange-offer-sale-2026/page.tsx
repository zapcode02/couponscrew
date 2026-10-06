import type { Metadata } from 'next';
import ApplianceBuyingGuide2026Blog from './_components/ApplianceBuyingGuide2026Blog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'TV, Fridge & Washing Machine Sale Guide 2026: Exchange Offers | CouponsCrew',
  description:
    'Buying a TV, fridge or washing machine in the October 2026 sales? Check the new star labels, recent price rises and how exchange value is really decided.',

  keywords: [
    'appliance buying guide 2026',
    'TV fridge washing machine sale',
    'exchange offer sale 2026',
    'BEE star rating change 2026',
    'appliance price hike October 2026',
    'Big Billion Days appliance deals',
    'Amazon Great Indian Festival appliances',
    'exchange value inspection',
    'how exchange offers work',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026',
    },
  },

  openGraph: {
    title: 'TV, Fridge & Washing Machine Sale Guide 2026: Exchange Offers | CouponsCrew',
    description:
      'Buying a TV, fridge or washing machine in the October 2026 sales? Check the new star labels, recent price rises and how exchange value is really decided.',
    url: 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791303473/appliance-buying-guide-exchange-offer-sale-2026_c1xqzk.webp',
        width: 1200,
        height: 630,
        alt: 'TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TV, Fridge & Washing Machine Sale Guide 2026: Exchange Offers | CouponsCrew',
    description:
      'Buying a TV, fridge or washing machine in the October 2026 sales? Check the new star labels, recent price rises and how exchange value is really decided.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1791303473/appliance-buying-guide-exchange-offer-sale-2026_c1xqzk.webp',
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
      '@id': 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026#article',
      headline: 'TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work',
      description:
        'Buying a TV, fridge or washing machine in the October 2026 sales? Check the new star labels, recent price rises and how exchange value is really decided.',
      image:
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1791303473/appliance-buying-guide-exchange-offer-sale-2026_c1xqzk.webp',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
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
      '@id': 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Appliance Buying Guide and Exchange Offers',
          item: 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the October 2026 sale a good time to buy a TV, fridge or washing machine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, if you compare carefully. Appliance makers raised prices by around 5% to 8% from 1 October 2026, so some sale discounts only bring prices back to September levels. Compare the final price after bank offers with the price you noted before the sale.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is the exchange value of an old appliance decided?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The exchange value shown at checkout is an estimate. The final value is decided when the pickup agent inspects your old appliance, checking its brand, size or capacity, whether it works and whether basic accessories are present. If it does not match what you declared, the value can be reduced.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a 5-star fridge from 2025 still a 5-star fridge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. BEE tightened star ratings for refrigerators and ACs from 1 January 2026. A model rated 5-star under the 2025 rules is roughly equal to a 4-star under the 2026 rules. Check the year on the star label before comparing models.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I exchange a non-working TV or washing machine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often yes. Many exchange offers accept non-working appliances at a lower value. Declare the condition honestly at checkout, because the pickup agent will check whether it turns on and works.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it better to exchange my old appliance or sell it myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Selling it yourself often gets more money for a working appliance in good condition. Exchange is easier and makes sense for old, faulty or bulky appliances, or when the sale adds an exchange bonus. Get one local quote before deciding.',
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
      <ApplianceBuyingGuide2026Blog />
    </>
  );
}
