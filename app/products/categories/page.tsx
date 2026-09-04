import type { Metadata } from 'next';
import ProductCategoriesGrid from './_components/ProductCategoriesGrid';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Product Categories – Discounted Products by Category | CouponsCrew',
  description:
    'Browse all product categories on CouponsCrew. Find discounted products with verified deal pricing across every category — updated regularly.',

  keywords: [
    'product categories',
    'discounted products by category',
    'product deals by category',
    'verified deal pricing',
    'CouponsCrew products',
    'shop by category',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/categories',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Product Categories – Discounted Products by Category | CouponsCrew',
    description:
      'Browse all product categories on CouponsCrew. Find discounted products with verified deal pricing across every category — updated regularly.',
    url: 'https://www.couponscrew.com/products/categories',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/product-categories.jpg',
        width: 1200,
        height: 630,
        alt: 'Product Categories – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Product Categories – Discounted Products by Category | CouponsCrew',
    description:
      'Browse all product categories on CouponsCrew. Find discounted products with verified deal pricing across every category — updated regularly.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/product-categories.jpg'],
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
};

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/products/categories#webpage',
      url: 'https://www.couponscrew.com/products/categories',
      name: 'Product Categories – Discounted Products by Category | CouponsCrew',
      description:
        'Browse all product categories on CouponsCrew. Find discounted products with verified deal pricing across every category — updated regularly.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        url: 'https://www.couponscrew.com',
        name: 'CouponsCrew',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Product Categories',
            item: 'https://www.couponscrew.com/products/categories',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/products/categories#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many product categories does Couponscrew currently have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Product categories are being added to Couponscrew as the platform grows. Every new one appears on this page first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will more product categories be added over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Couponscrew's product catalogue is expanding, and new categories are added regularly to keep everything organised and easy to browse.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are product category pages updated regularly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Product deals go live as they are added, and expire as they end, so category pages reflect what is currently available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I cannot find a product category I am looking for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search by name or keyword using the bar at the top. If it does not exist yet, use the Contact page to request it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which categories have the best deals on Amazon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electronics, Home and Kitchen, and Toys and Games tend to see the most aggressive discounting, particularly during Prime Day and the holiday season. Health and Household is consistently good for Subscribe & Save savings throughout the year.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do Amazon prices drop the most?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prime Day (typically July), Black Friday, and Cyber Monday are the peak discount windows across most categories. Lightning deals and daily deals run year-round but require checking in regularly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Amazon offer coupons on top of sale prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — many product pages carry a "clip coupon" option that applies an additional percentage or fixed discount at checkout, independent of any existing sale price. These are most common in Beauty and Personal Care, Health and Household, and Grocery.',
      },
    },
    {
      '@type': 'Question',
      name: "Are Amazon's private-label products worth buying?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For categories like household basics (Amazon Basics, Solimo), pet food (Wag), and some electronics accessories, the private-label options hold up well against name-brand alternatives at meaningfully lower prices. For categories where brand matters more — skincare, athletic footwear, premium electronics — sticking with established names is usually the better call.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find deals across multiple categories at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Today's Deals page on Amazon surfaces active promotions across all departments. This page also aggregates the strongest current offers by category, so bookmarking both is a practical approach.",
      },
    },
  ],
},
  ],
};

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
      <ProductCategoriesGrid />
    </>
  );
}
