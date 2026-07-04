export interface Store {
  id: string;
  name: string;
  logo: string; // letters/text for avatar fallback
  logoImage?: string; // optional real logo image URL
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
    id: 'store-2',
    name: 'Pepperfry',
    logo: 'pepperfry',
    logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg',
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
