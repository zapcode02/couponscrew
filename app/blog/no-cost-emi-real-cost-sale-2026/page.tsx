import type { Metadata } from 'next';
import NoCostEmiRealCost2026Blog from './_components/NoCostEmiRealCost2026Blog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'No Cost EMI in the Sale: What It Really Costs in 2026 | CouponsCrew',
  description:
    'No Cost EMI is not always free. See the GST, processing fee and lost discounts behind it, with a worked example, before you shop Amazon or Flipkart sales.',

  keywords: [
    'No Cost EMI explained',
    'No Cost EMI GST',
    'No Cost EMI processing fee',
    'is No Cost EMI free',
    'EMI vs full payment sale',
    'Big Billion Days EMI offers',
    'Amazon Great Indian Festival EMI',
    'EMI credit score impact',
    'No Cost EMI foreclosure',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026',
    },
  },

  openGraph: {
    title: 'No Cost EMI in the Sale: What It Really Costs in 2026 | CouponsCrew',
    description:
      'No Cost EMI is not always free. See the GST, processing fee and lost discounts behind it, with a worked example, before you shop Amazon or Flipkart sales.',
    url: 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791215474/No_Cost_EMI__What_You_Still_Pay_iuhik8.webp',
        width: 1200,
        height: 630,
        alt: 'No Cost EMI in the Sale: What It Actually Costs and How to Check',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'No Cost EMI in the Sale: What It Really Costs in 2026 | CouponsCrew',
    description:
      'No Cost EMI is not always free. See the GST, processing fee and lost discounts behind it, with a worked example, before you shop Amazon or Flipkart sales.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1791215474/No_Cost_EMI__What_You_Still_Pay_iuhik8.webp',
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
      '@id': 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026#article',
      headline: 'No Cost EMI in the Sale: What It Actually Costs and How to Check',
      description:
        'No Cost EMI is not always free. See the GST, processing fee and lost discounts behind it, with a worked example, before you shop Amazon or Flipkart sales.',
      image:
        'https://res.cloudinary.com/dqjlffxja/image/upload/v1791215474/No_Cost_EMI__What_You_Still_Pay_iuhik8.webp',
      datePublished: '2026-10-05',
      dateModified: '2026-10-05',
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
      '@id': 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'No Cost EMI in the Sale',
          item: 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is No Cost EMI really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No Cost EMI is not completely free. The seller covers the interest through an upfront discount, but you usually pay 18% GST on that interest and sometimes a processing fee. On a ₹60,000 purchase over six months, this can add up to around ₹700, depending on your bank.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do I pay GST on No Cost EMI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You pay GST because the bank still charges interest on the EMI loan, and GST at 18% applies to that interest. The seller's discount covers the interest itself, but not the GST on it.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does the bank instant discount apply on No Cost EMI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the offer. For Amazon Great Indian Festival 2026, Amazon has said the 10% SBI card discount applies to EMI transactions as well. Other offers may have a different cap or minimum order for EMI, so compare the full-payment and EMI totals on the payment page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does No Cost EMI affect my credit score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No Cost EMI can affect your credit score. The full purchase amount is blocked on your credit card, which raises your credit utilisation. Paying every instalment on time helps your score, and missing one can lower it.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I cancel or prepay a No Cost EMI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can usually prepay or cancel, but there may be a foreclosure fee and you may lose the No Cost benefit on the remaining instalments. If you return the product, contact your bank to close the EMI, because the processing fee is often not refunded.',
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
      <NoCostEmiRealCost2026Blog />
    </>
  );
}
