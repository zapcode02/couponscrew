import type { Metadata } from 'next';
import KarwaChauth2026ShoppingGuideBlog from './_components/KarwaChauth2026ShoppingGuideBlog';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Karwa Chauth 2026 Shopping Guide: Sarees, Makeup & Jewellery Deals | CouponsCrew',
  description:
    'Karwa Chauth is on Thursday, 29 October 2026. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',

  keywords: [
    'Karwa Chauth 2026 shopping guide',
    'Karwa Chauth sarees online',
    'Karwa Chauth makeup deals',
    'Karwa Chauth jewellery',
    'Karwa Chauth 2026 date',
    'Myntra Karwa Chauth sale',
    'Nykaa Karwa Chauth offers',
    'Polki Sarees coupon',
    'Karwa Chauth sargi',
    'Karwa Chauth puja thali',
  ],

  alternates: {
    canonical: 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
    languages: {
      'en-IN': 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
    },
  },

  openGraph: {
    title: 'Karwa Chauth 2026 Shopping Guide: Sarees, Makeup & Jewellery Deals | CouponsCrew',
    description:
      'Karwa Chauth is on Thursday, 29 October 2026. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',
    url: 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
    siteName: 'CouponsCrew',
    type: 'article',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1792836858/karwa-chauth-2026-shopping-guide_ajy07h.webp',
        width: 1200,
        height: 630,
        alt: 'Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Karwa Chauth 2026 Shopping Guide: Sarees, Makeup & Jewellery Deals | CouponsCrew',
    description:
      'Karwa Chauth is on Thursday, 29 October 2026. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: [
      'https://res.cloudinary.com/dqjlffxja/image/upload/v1792836858/karwa-chauth-2026-shopping-guide_ajy07h.webp',
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
      '@type': 'BlogPosting',
      '@id': 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide#article',
      headline: 'Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals (29 October)',
      description:
        'Karwa Chauth is on Thursday, 29 October 2026. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      url: 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
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
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.couponscrew.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Karwa Chauth 2026 Shopping Guide',
          item: 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide',
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
      <KarwaChauth2026ShoppingGuideBlog />
    </>
  );
}
