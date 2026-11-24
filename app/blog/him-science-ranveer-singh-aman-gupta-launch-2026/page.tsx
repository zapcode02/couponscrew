import type { Metadata } from 'next';
import HimScienceBlog from './_components/HimScienceBlog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: "Ranveer Singh & Aman Gupta Launch H.I.M — Men's Skincare Brand for Indian Men | CouponsCrew",
  description:
    "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology. Here's everything you need to know.",

  keywords: [
    'HIM Science',
    'H.I.M skincare',
    'Ranveer Singh skincare brand',
    'Aman Gupta HIM',
    'Handsome Indian Man',
    "men's grooming India 2026",
    'HIM Science launch',
    "men's skincare India",
    'boAt Aman Gupta brand',
    'new grooming brand India 2026',
    'INXT technology',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
    languages: {
      'x-default': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
      'en-IN': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
    },
  },

  openGraph: {
    title: "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man",
    description:
      "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology. Here's everything you need to know.",
    url: 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794930338/him-science-ranveer-singh-aman-gupta-launch-2026_m0jzzi.webp',
        width: 1200,
        height: 630,
        alt: "Ranveer Singh and Aman Gupta H.I.M Skincare Brand Launch 2026",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man",
    description:
      "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1794930338/him-science-ranveer-singh-aman-gupta-launch-2026_m0jzzi.webp',
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
      '@id': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026#webpage',
      url: 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
      name: "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man",
      description:
        "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology.",
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
      },
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Ranveer Singh & Aman Gupta H.I.M Brand Launch',
            item: 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
          },
        ],
      },
    },

    // 2. BlogPosting Schema
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026#blogposting',
      headline: "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man",
      description:
        "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology. Here's everything you need to know.",
      image: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794930338/him-science-ranveer-singh-aman-gupta-launch-2026_m0jzzi.webp',
        width: 1200,
        height: 630,
      },
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      url: 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026',
      inLanguage: 'en-IN',
      about: {
        '@type': 'Thing',
        name: "Men's Grooming",
      },
      mentions: [
        {
          '@type': 'Person',
          name: 'Ranveer Singh',
          sameAs: 'https://en.wikipedia.org/wiki/Ranveer_Singh',
        },
        {
          '@type': 'Person',
          name: 'Aman Gupta',
          sameAs: 'https://en.wikipedia.org/wiki/Aman_Gupta_(entrepreneur)',
        },
        {
          '@type': 'Organization',
          name: 'Amazon India',
          sameAs: 'https://en.wikipedia.org/wiki/Amazon_India',
        },
        {
          '@type': 'Organization',
          name: 'Blinkit',
          sameAs: 'https://en.wikipedia.org/wiki/Blinkit',
        },
        {
          '@type': 'Organization',
          name: 'boAt',
          sameAs: 'https://en.wikipedia.org/wiki/BoAt_(company)',
        },
      ],
      author: {
        '@type': 'Organization',
        '@id': 'https://www.couponscrew.com/#organization',
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
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://www.couponscrew.com/blog#blog',
        name: 'CouponsCrew Blog',
        url: 'https://www.couponscrew.com/blog',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026#webpage',
      },
    },

    // 3. FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who founded H.I.M?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "H.I.M (Handsome Indian Man) was co-founded by actor Ranveer Singh and Aman Gupta, co-founder of boAt. The brand is backed by Aman Gupta's venture studio, OFF/BEAT Studios.",
          },
        },
        {
          '@type': 'Question',
          name: 'When did H.I.M launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H.I.M officially launched on November 17, 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does H.I.M stand for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H.I.M stands for Handsome Indian Man.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many products does H.I.M have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eight products across face, body, and hair care — face wash, sunscreen, face cream, shampoo, hair serum, body wash, soap, and body lotion.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is IN·XT™ technology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "IN·XT™ is H.I.M's proprietary molecule — described as a supramolecular delivery system designed to carry active ingredients past the skin's surface. The brand developed it exclusively for this product range.",
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I buy H.I.M products?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'H.I.M products are available on himscience.com, Amazon India, and Blinkit.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do H.I.M products cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Products are priced between ₹299 and ₹899. The face wash starts at ₹299 and the hair serum is the most expensive at ₹899.',
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
      <HimScienceBlog />
    </>
  );
}
