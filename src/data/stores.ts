export interface Store {
  id: string;
  name: string;
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
  }
];
