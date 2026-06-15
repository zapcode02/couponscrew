import type { Metadata } from 'next'
import Blog from './_components/Blog'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword once | 57 chars
  title: 'Blog — Best Websites for Couponing in India | CouponScrew',

  // Primary keyword once + both secondary keywords once | 158 chars
  description:
    'Read the CouponScrew blog — tips from the best websites for couponing. Guides on best coupon sites for online shopping & best coupon code websites to save more.',

  alternates: {
    canonical: 'https://www.couponscrew.com/blog',
  },

  openGraph: {
    title: 'Blog — Best Websites for Couponing in India | CouponScrew',
    description:
      'Read the CouponScrew blog — tips from the best websites for couponing. Guides on best coupon sites for online shopping & best coupon code websites to save more.',
    url: 'https://www.couponscrew.com/blog',
    siteName: 'CouponScrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CouponScrew Blog',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Best Websites for Couponing in India | CouponScrew',
    description:
      'Read the CouponScrew blog — tips from the best websites for couponing. Guides on best coupon sites for online shopping & best coupon code websites to save more.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
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
      '@type': 'Blog',
      name: 'CouponScrew Blog',
      url: 'https://www.couponscrew.com/blog',
      description:
        'Saving tips, couponing guides and deal roundups from the CouponScrew team.',
      inLanguage: 'en-IN',
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
      isPartOf: {
        '@type': 'WebSite',
        name: 'CouponScrew',
        url: 'https://www.couponscrew.com',
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
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Latest Posts — CouponScrew Blog',
      description: 'Latest articles and guides on couponing, deals and saving money in India.',
      url: 'https://www.couponscrew.com/blog',
      numberOfItems: 10,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog Post 1 Title',
          url: 'https://www.couponscrew.com/blog/blog-post-1',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog Post 2 Title',
          url: 'https://www.couponscrew.com/blog/blog-post-2',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Blog Post 3 Title',
          url: 'https://www.couponscrew.com/blog/blog-post-3',
        },
      ],
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
      <Blog />
    </>
  )
}