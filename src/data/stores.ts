export interface Store {
  id: string;
  name: string;
  logo: string; // letters/text for avatar
  logoColor: string; // brand hex color
  logoBg: string; // lighter bg hex
  category: string;
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
    logoColor: '#FF9900',
    logoBg: '#FFF8E7',
    category: 'Electronics',
    offerCount: 120,
    maxDiscount: 70,
    discountLabel: 'Up to 70% OFF',
    isPopular: true,
    isFeatured: true,
    description: "The largest online marketplace for everything"
  },
  {
    id: 'store-2',
    name: 'Pepperfry',
    logo: 'pepperfry',
    logoColor: '#D2691E',
    logoBg: '#FDF1E7',
    category: 'Home & Kitchen',
    offerCount: 90,
    maxDiscount: 80,
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: true,
    description: "India's leading online furniture and home décor store"
  }
];
