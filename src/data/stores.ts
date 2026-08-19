export interface Store {
  id: string;
  name: string;
  slug: string; // route slug under /stores/[slug]
  logo: string; // letters/text for avatar fallback
  logoImage?: string; // optional real logo image URL
  logoColor: string; // brand hex color
  logoBg: string; // lighter bg hex
  category: string;
  categories: string[]; // all category pages this store should appear on (/stores/categories/*)
  offerCount: number;
  maxDiscount: number; // numeric value for sort logic
  discountLabel: string;
  isPopular: boolean;
  isFeatured: boolean;
  description: string;
}

export const STORES_DATA: Store[] = [
  {
    id: 'store-1',
    name: 'Amazon',
    slug: 'amazon-coupon-code',
    logo: 'amazon',
    logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
    logoColor: '#146EB4',
    logoBg: '#EAF2FB',
    category: 'Electronics',
    categories: ['Fashion', 'Beauty', 'Exercise & Fitness', 'Home & Kitchen', 'Clothing & Accessories'],
    offerCount: 120,
    maxDiscount: 90,
    discountLabel: 'Up to 90% OFF',
    isPopular: true,
    isFeatured: true,
    description: 'One of the world\'s largest online marketplaces for electronics, fashion & more'
  },
  {
    id: 'store-2',
    name: 'Pepperfry',
    slug: 'pepperfry-coupon-code',
    logo: 'pepperfry',
    logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg',
    logoColor: '#D2691E',
    logoBg: '#FDF1E7',
    category: 'Home & Kitchen',
    categories: ['Home & Kitchen'],
    offerCount: 90,
    maxDiscount: 80,
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: true,
    description: "India's leading online furniture and home décor store"
  },
  {
    id: 'store-3',
    name: 'Myntra',
    slug: 'myntra-coupon-code',
    logo: 'myntra',
    logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
    logoColor: '#FF3F6C',
    logoBg: '#FFF0F4',
    category: 'Fashion',
    categories: ['Fashion', 'Clothing & Accessories', 'Beauty'],
    offerCount: 54,
    maxDiscount: 90,
    discountLabel: 'Up to 90% OFF',
    isPopular: true,
    isFeatured: true,
    description: "India's leading fashion and lifestyle store for clothing, footwear & beauty"
  },
  {
    id: 'store-4',
    name: 'Flipkart',
    slug: 'flipkart-coupon-code',
    logo: 'flipkart',
    logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
    logoColor: '#2874F0',
    logoBg: '#EBF2FE',
    category: 'Electronics',
    categories: ['Fashion', 'Beauty', 'Exercise & Fitness', 'Home & Kitchen', 'Clothing & Accessories'],
    offerCount: 35,
    maxDiscount: 95,
    discountLabel: 'Up to 95% OFF',
    isPopular: true,
    isFeatured: true,
    description: 'One of India\'s largest online marketplaces for electronics, fashion, mobiles & more'
  }
];
