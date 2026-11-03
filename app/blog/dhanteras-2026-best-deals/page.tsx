import type { Metadata } from 'next';
import Dhanteras2026Blog from './_components/Dhanteras2026Blog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
  description:
    "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",

  keywords: [
    'Dhanteras 2026',
    'Dhanteras 2026 date',
    'Dhanteras gold deals',
    'Dhanteras electronics deals',
    'Dhanteras appliance deals',
    'Dhanteras shopping guide',
    'best deals Dhanteras 2026',
    'Dhanteras puja muhurat',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
    },
  },

  openGraph: {
    title: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
    description:
      "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
    url: 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp',
        width: 1200,
        height: 630,
        alt: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
    description:
      "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp',
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

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals#webpage',
      url: 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
      name: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
      description:
        "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
      datePublished: '2026-11-03',
      dateModified: '2026-11-03',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Dhanteras 2026: Best Deals',
            item: 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
          },
        ],
      },
    },

    // 2. BlogPosting Schema
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals#blogposting',
      headline: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
      description:
        "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-11-03',
      dateModified: '2026-11-03',
      url: 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals',
      inLanguage: 'en-IN',
      about: {
        '@type': 'Thing',
        name: 'Dhanteras',
        sameAs: 'https://en.wikipedia.org/wiki/Dhanteras',
      },
      mentions: [
        {
          '@type': 'Organization',
          name: 'Amazon',
          sameAs: 'https://en.wikipedia.org/wiki/Amazon_India',
        },
        {
          '@type': 'Organization',
          name: 'Flipkart',
          sameAs: 'https://en.wikipedia.org/wiki/Flipkart',
        },
        {
          '@type': 'Organization',
          name: 'Pepperfry',
          sameAs: 'https://en.wikipedia.org/wiki/Pepperfry',
        },
        {
          '@type': 'Organization',
          name: 'Nykaa',
          sameAs: 'https://en.wikipedia.org/wiki/Nykaa',
        },
        {
          '@type': 'Organization',
          name: 'Myntra',
          sameAs: 'https://en.wikipedia.org/wiki/Myntra',
        },
      ],
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
        '@id': 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals#webpage',
      },
    },

    // 3. FAQPage Schema (AEO + AI Search — sourced verbatim from the approved markdown's FAQ section)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is Dhanteras 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dhanteras 2026 is on Friday, 6 November. It marks the first day of the five-day Diwali celebration and is considered the most auspicious day to make new purchases.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should you buy on Dhanteras 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gold, silver, metal utensils, electronics, home appliances, and cookware are all considered auspicious purchases on Dhanteras. The tradition emphasises bringing something new and valuable into the home — the item and the amount are secondary to the act of buying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it okay to buy electronics instead of gold on Dhanteras?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — electronics and home appliances are now fully accepted as Dhanteras purchases. The tradition focuses on bringing prosperity and something new into the home, not on the specific item. Around the majority of Indian households now include electronics as part of their Dhanteras shopping.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where are the best deals for Dhanteras 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon and Flipkart run dedicated Dhanteras and Diwali sales with bank cashback offers, EMI deals, and exchange bonuses. Check active coupon codes on CouponsCrew before checkout to ensure you are getting the best available deal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Dhanteras 2026 puja time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The pradosh period — after sunset on Friday, 6 November — is the most auspicious time for Dhanteras puja. The evening window, roughly from 5:30 PM to 7:30 PM, is traditionally considered the best time for Lakshmi and Kubera puja.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I buy clothes or jewellery on Dhanteras?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fashion jewellery, silver jewellery, and metal accessories are excellent Dhanteras purchases. Clothing on its own is less traditional on Dhanteras specifically — that is more of a Diwali and Bhai Dooj category. For jewellery and accessories, check Myntra coupon codes and Amazon coupon codes.',
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
      <Dhanteras2026Blog />
    </>
  );
}
