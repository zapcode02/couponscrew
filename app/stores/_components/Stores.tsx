'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  Tag,
  ShieldCheck,
  ShoppingBag,
  LayoutGrid,
  List,
  Search,
  RefreshCw,
  Clock,
  Lock,
  TrendingUp,
  Image,
  Sparkles,
  Calendar,
  BadgeCheck,
  Monitor,
  UtensilsCrossed,
  Plane,
  Heart,
  Globe,
  GraduationCap,
  Tv,
  Wallet,
  MoreHorizontal,
  X,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ==========================================
// TYPESCRIPT INTERFACES
// ==========================================
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

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  count: string | number;
}

// ==========================================
// COMPREHENSIVE DATA (50 STORES)
// ==========================================
const STORES_DATA: Store[] = [
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
    name: 'Flipkart',
    logo: 'F',
    logoColor: '#2874F0',
    logoBg: '#EEF4FF',
    category: 'Fashion & Lifestyle',
    offerCount: 80,
    maxDiscount: 80,
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: true,
    description: "Homegrown e-commerce giant with 80% off deals"
  },
  {
    id: 'store-3',
    name: 'Myntra',
    logo: 'M',
    logoColor: '#FF3F6C',
    logoBg: '#FFF0F4',
    category: 'Fashion & Lifestyle',
    offerCount: 95,
    maxDiscount: 80,
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: false,
    description: "Top fashion destination for brands and styles"
  },
  {
    id: 'store-4',
    name: 'Ajio',
    logo: 'AJ',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 60,
    maxDiscount: 80,
    discountLabel: 'Up to 80% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Premium fashion at best prices'
  },
  {
    id: 'store-5',
    name: 'Nykaa',
    logo: 'N',
    logoColor: '#FC2779',
    logoBg: '#FFF0F6',
    category: 'Health & Beauty',
    offerCount: 75,
    maxDiscount: 60,
    discountLabel: 'Up to 60% OFF',
    isPopular: true,
    isFeatured: false,
    description: 'Beauty and wellness destination'
  },
  {
    id: 'store-6',
    name: 'Swiggy',
    logo: 'S',
    logoColor: '#FC8019',
    logoBg: '#FFF5EC',
    category: 'Food & Grocery',
    offerCount: 40,
    maxDiscount: 60,
    discountLabel: 'Up to 60% OFF',
    isPopular: true,
    isFeatured: false,
    description: 'Food delivery at your doorstep'
  },
  {
    id: 'store-7',
    name: 'Zomato',
    logo: 'Z',
    logoColor: '#E23744',
    logoBg: '#FEF0F1',
    category: 'Food & Grocery',
    offerCount: 35,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: true,
    isFeatured: false,
    description: 'Discover restaurants near you'
  },
  {
    id: 'store-8',
    name: 'MakeMyTrip',
    logo: 'MMT',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 55,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: true,
    isFeatured: false,
    description: 'Flights, hotels and holiday packages'
  },
  {
    id: 'store-9',
    name: 'Goibibo',
    logo: 'go',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 30,
    maxDiscount: 45,
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Smart travel booking platform'
  },
  {
    id: 'store-10',
    name: 'Hostinger',
    logo: 'H',
    logoColor: '#FF6B35',
    logoBg: '#FFF3EE',
    category: 'Web Hosting',
    offerCount: 25,
    maxDiscount: 75,
    discountLabel: 'Up to 75% OFF',
    isPopular: true,
    isFeatured: false,
    description: 'Affordable web hosting solutions'
  },
  {
    id: 'store-11',
    name: 'BigBasket',
    logo: 'BB',
    logoColor: '#84C225',
    logoBg: '#F4FBEA',
    category: 'Food & Grocery',
    offerCount: 30,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Online grocery superstore'
  },
  {
    id: 'store-12',
    name: 'Blinkit',
    logo: 'B',
    logoColor: '#F0C000',
    logoBg: '#FFFDE7',
    category: 'Food & Grocery',
    offerCount: 20,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Instant grocery delivery in minutes'
  },
  {
    id: 'store-13',
    name: 'Zepto',
    logo: 'zepto',
    logoColor: '#A020F0',
    logoBg: '#F5E6FF',
    category: 'Food & Grocery',
    offerCount: 20,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: '10-minute grocery delivery'
  },
  {
    id: 'store-14',
    name: 'Mamaearth',
    logo: 'mama',
    logoColor: '#6AB04C',
    logoBg: '#F0FAF0',
    category: 'Health & Beauty',
    offerCount: 25,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Natural and toxin-free products'
  },
  {
    id: 'store-15',
    name: 'boAt',
    logo: 'boAt',
    logoColor: '#1A1A2E',
    logoBg: '#F5F5F5',
    category: 'Electronics',
    offerCount: 25,
    maxDiscount: 60,
    discountLabel: 'Up to 60% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Premium audio and wearables'
  },
  {
    id: 'store-16',
    name: 'Croma',
    logo: 'croma',
    logoColor: '#1D8348',
    logoBg: '#EAFAF1',
    category: 'Electronics',
    offerCount: 40,
    maxDiscount: 60,
    discountLabel: 'Up to 60% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'One-stop electronics destination'
  },
  {
    id: 'store-17',
    name: 'OnePlus',
    logo: '1+',
    logoColor: '#EB0028',
    logoBg: '#FEE8EB',
    category: 'Electronics',
    offerCount: 20,
    maxDiscount: 45,
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Premium smartphones and accessories'
  },
  {
    id: 'store-18',
    name: 'Samsung',
    logo: 'S',
    logoColor: '#1428A0',
    logoBg: '#EEF0FF',
    category: 'Electronics',
    offerCount: 30,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: "Top electronics brand across every category"
  },
  {
    id: 'store-19',
    name: 'Adidas',
    logo: 'adi',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 25,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Sports and lifestyle fashion'
  },
  {
    id: 'store-20',
    name: 'The Souled Store',
    logo: 'TSS',
    logoColor: '#E63946',
    logoBg: '#FEE8E9',
    category: 'Fashion & Lifestyle',
    offerCount: 30,
    maxDiscount: 60,
    discountLabel: 'Up to 60% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Pop culture merchandise and fashion'
  },
  {
    id: 'store-21',
    name: 'Cleartrip',
    logo: 'CT',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 20,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Simple and smart travel booking'
  },
  {
    id: 'store-22',
    name: 'IRCTC',
    logo: 'IR',
    logoColor: '#00529B',
    logoBg: '#E8F0FB',
    category: 'Travel',
    offerCount: 10,
    maxDiscount: 25,
    discountLabel: 'Up to 25% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Official Indian Railways booking'
  },
  {
    id: 'store-23',
    name: 'OYO',
    logo: 'OYO',
    logoColor: '#EE2E24',
    logoBg: '#FEECEB',
    category: 'Travel',
    offerCount: 25,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Budget hotels and home stays'
  },
  {
    id: 'store-24',
    name: 'Uber',
    logo: 'Ub',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Travel',
    offerCount: 15,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Ride booking made simple'
  },
  {
    id: 'store-25',
    name: 'Netflix',
    logo: 'N',
    logoColor: '#E50914',
    logoBg: '#FEEEEF',
    category: 'Entertainment',
    offerCount: 15,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Stream movies and TV shows'
  },
  {
    id: 'store-26',
    name: 'Hotstar',
    logo: 'HS',
    logoColor: '#1F80E0',
    logoBg: '#E8F3FE',
    category: 'Entertainment',
    offerCount: 12,
    maxDiscount: 35,
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Sports, movies and web series'
  },
  {
    id: 'store-27',
    name: 'Sony LIV',
    logo: 'SL',
    logoColor: '#0061FF',
    logoBg: '#E8F0FF',
    category: 'Entertainment',
    offerCount: 10,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Premium OTT streaming platform'
  },
  {
    id: 'store-28',
    name: 'Coursera',
    logo: 'C',
    logoColor: '#0056D2',
    logoBg: '#EEF4FF',
    category: 'Education',
    offerCount: 18,
    maxDiscount: 65,
    discountLabel: 'Up to 65% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Learn from top universities online'
  },
  {
    id: 'store-29',
    name: 'Udemy',
    logo: 'U',
    logoColor: '#A435F0',
    logoBg: '#F5E8FF',
    category: 'Education',
    offerCount: 22,
    maxDiscount: 95,
    discountLabel: 'Up to 95% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Online courses on any topic'
  },
  {
    id: 'store-30',
    name: 'Skillshare',
    logo: 'Sk',
    logoColor: '#00C4CC',
    logoBg: '#E6FAFA',
    category: 'Education',
    offerCount: 8,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Creative skills and learning'
  },
  {
    id: 'store-31',
    name: 'PhonePe',
    logo: 'PP',
    logoColor: '#5F259F',
    logoBg: '#F2EAFF',
    category: 'Finance',
    offerCount: 15,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'UPI payments and financial services'
  },
  {
    id: 'store-32',
    name: 'Paytm',
    logo: 'Pt',
    logoColor: '#00BAF2',
    logoBg: '#E6F9FF',
    category: 'Finance',
    offerCount: 20,
    maxDiscount: 35,
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Digital payments and banking'
  },
  {
    id: 'store-33',
    name: 'PolicyBazaar',
    logo: 'PB',
    logoColor: '#EF6C00',
    logoBg: '#FFF3E0',
    category: 'Finance',
    offerCount: 10,
    maxDiscount: 25,
    discountLabel: 'Up to 25% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Compare and buy insurance'
  },
  {
    id: 'store-34',
    name: 'Lenskart',
    logo: 'LK',
    logoColor: '#1BA8A0',
    logoBg: '#E6F9F8',
    category: 'Health & Beauty',
    offerCount: 18,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Eyewear at best prices online'
  },
  {
    id: 'store-35',
    name: '1mg',
    logo: '1mg',
    logoColor: '#E53935',
    logoBg: '#FEEEEE',
    category: 'Health & Beauty',
    offerCount: 15,
    maxDiscount: 45,
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Medicines and healthcare products'
  },
  {
    id: 'store-36',
    name: 'Netmeds',
    logo: 'NM',
    logoColor: '#1A9A5C',
    logoBg: '#EDFBF4',
    category: 'Health & Beauty',
    offerCount: 20,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Online pharmacy and health store'
  },
  {
    id: 'store-37',
    name: 'GoDaddy',
    logo: 'GD',
    logoColor: '#1BDBDB',
    logoBg: '#E6FAFA',
    category: 'Web Hosting',
    offerCount: 12,
    maxDiscount: 55,
    discountLabel: 'Up to 55% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Domain and web hosting solutions'
  },
  {
    id: 'store-38',
    name: 'Bluehost',
    logo: 'BH',
    logoColor: '#1E6FD9',
    logoBg: '#E8F0FD',
    category: 'Web Hosting',
    offerCount: 10,
    maxDiscount: 65,
    discountLabel: 'Up to 65% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Reliable web hosting platform'
  },
  {
    id: 'store-39',
    name: 'Nike',
    logo: 'Nike',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 20,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Sports shoes and activewear'
  },
  {
    id: 'store-40',
    name: 'Puma',
    logo: 'Puma',
    logoColor: '#CC0000',
    logoBg: '#FEEEEE',
    category: 'Fashion & Lifestyle',
    offerCount: 18,
    maxDiscount: 45,
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Sport lifestyle and fashion'
  },
  {
    id: 'store-41',
    name: 'H&M',
    logo: 'H&M',
    logoColor: '#E50010',
    logoBg: '#FEEEEF',
    category: 'Fashion & Lifestyle',
    offerCount: 22,
    maxDiscount: 50,
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Affordable fashion for all'
  },
  {
    id: 'store-42',
    name: 'Zara',
    logo: 'ZARA',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 12,
    maxDiscount: 35,
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Premium fast fashion brand'
  },
  {
    id: 'store-43',
    name: 'Dunzo',
    logo: 'D',
    logoColor: '#00C2A8',
    logoBg: '#E6FAF8',
    category: 'Food & Grocery',
    offerCount: 15,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Hyperlocal delivery platform'
  },
  {
    id: 'store-44',
    name: 'Rapido',
    logo: 'R',
    logoColor: '#FFD60A',
    logoBg: '#FFFDE8',
    category: 'Travel',
    offerCount: 8,
    maxDiscount: 25,
    discountLabel: 'Up to 25% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Bike taxi and cab booking'
  },
  {
    id: 'store-45',
    name: 'Ola',
    logo: 'Ola',
    logoColor: '#3D8F41',
    logoBg: '#EDF7EE',
    category: 'Travel',
    offerCount: 12,
    maxDiscount: 35,
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Cab and auto booking app'
  },
  {
    id: 'store-46',
    name: 'Airtel',
    logo: 'At',
    logoColor: '#E40000',
    logoBg: '#FEEEEE',
    category: 'Others',
    offerCount: 10,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Telecom and broadband services'
  },
  {
    id: 'store-47',
    name: 'Vi (Vodafone Idea)',
    logo: 'Vi',
    logoColor: '#E60000',
    logoBg: '#FEEEEE',
    category: 'Others',
    offerCount: 8,
    maxDiscount: 25,
    discountLabel: 'Up to 25% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Mobile and internet services'
  },
  {
    id: 'store-48',
    name: 'Decathlon',
    logo: 'DC',
    logoColor: '#0082C3',
    logoBg: '#E8F4FC',
    category: 'Others',
    offerCount: 20,
    maxDiscount: 40,
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Sports equipment and gear'
  },
  {
    id: 'store-49',
    name: 'IKEA',
    logo: 'IKEA',
    logoColor: '#003399',
    logoBg: '#E8EEFF',
    category: 'Others',
    offerCount: 15,
    maxDiscount: 30,
    discountLabel: 'Up to 30% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Home furniture and accessories'
  },
  {
    id: 'store-50',
    name: 'BookMyShow',
    logo: 'BMS',
    logoColor: '#E8272D',
    logoBg: '#FEE8E9',
    category: 'Entertainment',
    offerCount: 18,
    maxDiscount: 35,
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    description: 'Movie and event ticket booking'
  }
];

export default function Stores() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Stores');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Sort: Popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Secondary sidebar newsletter state
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);

  // Active Interactive Promo Codes popup
  const [promoModalStore, setPromoModalStore] = useState<Store | null>(null);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  // Sidebar list categories structured configuration
  const CATEGORIES: Category[] = useMemo(() => [
    { id: 'cat-all', name: 'All Stores', icon: LayoutGrid, count: '500+' },
    { id: 'cat-fashion', name: 'Fashion & Lifestyle', icon: ShoppingBag, count: 65 },
    { id: 'cat-electronics', name: 'Electronics', icon: Monitor, count: 48 },
    { id: 'cat-food', name: 'Food & Grocery', icon: UtensilsCrossed, count: 42 },
    { id: 'cat-travel', name: 'Travel', icon: Plane, count: 38 },
    { id: 'cat-beauty', name: 'Health & Beauty', icon: Heart, count: 32 },
    { id: 'cat-hosting', name: 'Web Hosting', icon: Globe, count: 18 },
    { id: 'cat-edu', name: 'Education', icon: GraduationCap, count: 24 },
    { id: 'cat-ent', name: 'Entertainment', icon: Tv, count: 28 },
    { id: 'cat-finance', name: 'Finance', icon: Wallet, count: 15 },
    { id: 'cat-others', name: 'Others', icon: MoreHorizontal, count: 30 }
  ], []);

  // Filter & Sort Logic combined
  const filteredAndSorted = useMemo(() => {
    // 1. Category Filter
    let items = STORES_DATA;
    if (selectedCategory !== 'All Stores') {
      items = items.filter(
        (store) => store.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      items = items.filter((store) =>
        store.name.toLowerCase().includes(query)
      );
    }

    // 3. Sorting logic
    const sorted = [...items];
    if (sortBy === 'Sort: Popular') {
      // Featured first, then popular, then high count
      sorted.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return b.offerCount - a.offerCount;
      });
    } else if (sortBy === 'Most Offers') {
      sorted.sort((a, b) => b.offerCount - a.offerCount);
    } else if (sortBy === 'A to Z') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Z to A') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'Highest Discount') {
      sorted.sort((a, b) => b.maxDiscount - a.maxDiscount);
    }

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination bounds safety
  const itemsPerPage = 10;
  const totalPages = useMemo(() => {
    return Math.ceil(filteredAndSorted.length / itemsPerPage) || 1;
  }, [filteredAndSorted.length]);

  // Auto-reset page 1 on active toggles
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Current Paginated dataset
  const paginatedStores = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredAndSorted.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredAndSorted, currentPage]);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 4500);
    }
  };

  const handleCopyCouponCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(idx);
    setTimeout(() => setCopiedCodeIndex(null), 2500);
  };

  // Helper page indicator generator
  const paginationRange = useMemo(() => {
    const range: (number | string)[] = [];
    const maxNumbersToShow = 5;
    
    if (totalPages <= maxNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Always show first, last, current, and adjacent
      const siblingCount = 1;
      const leftBound = Math.max(currentPage - siblingCount, 1);
      const rightBound = Math.min(currentPage + siblingCount, totalPages);

      const showLeftDots = leftBound > 2;
      const showRightDots = rightBound < totalPages - 1;

      range.push(1);

      if (showLeftDots) {
        range.push('...');
      }

      for (let i = Math.max(2, leftBound); i <= Math.min(totalPages - 1, rightBound); i++) {
        range.push(i);
      }

      if (showRightDots) {
        range.push('...');
      }

      range.push(totalPages);
    }
    return range;
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ==========================================
          SECTION 1  -  HERO BANNER
          ========================================== */}
      <section className="relative w-full bg-[#F0EEFF] overflow-hidden py-10 md:py-16 px-6">
        {/* Subtle decorative vector circles */}
        <div className="absolute top-8 left-1/4 w-12 h-12 bg-[#5B4FBE]/5 rounded-full filter blur-xl pointer-events-none" />
        <div className="absolute bottom-6 right-1/3 w-36 h-36 bg-[#FF5722]/5 rounded-full filter blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column  -  Breadcrumbs & Headlines */}
          <div className="lg:col-span-7 text-left space-y-4">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#5B4FBE] font-semibold">All Stores</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A2E] tracking-tight mt-2 leading-tight">
              All Stores
            </h1>

            <p className="text-[#4A4A6A] text-sm md:text-base leading-relaxed max-w-xl">
              Browse all 500+ stores and brands. Find verified coupon codes, deals &amp; offers — updated daily.
            </p>

            {/* 2 stat mini cards */}
            <div className="pt-4 hidden sm:flex sm:flex-row gap-4 select-none">
              <div id="stat-trusted-stores" className="bg-white border border-[#E8E8F0] rounded-2xl px-6 py-4 flex items-center gap-3.5 shadow-xs w-full sm:w-64">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-lg leading-none">500+</div>
                  <div className="text-xs text-[#4A4A6A] mt-1 font-medium">Trusted Stores</div>
                </div>
              </div>

              <div id="stat-verified-coupons" className="bg-white border border-[#E8E8F0] rounded-2xl px-6 py-4 flex items-center gap-3.5 shadow-xs w-full sm:w-64">
                <div className="bg-[#EAFDF3] p-2.5 rounded-xl text-[#22C55E] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-lg leading-none">100%</div>
                  <div className="text-xs text-[#4A4A6A] mt-1 font-medium">Verified Coupons</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column  -  Pure CSS Illustration Area (Hidden on Mobile, Visible on md+) */}
          <div className="hidden lg:col-span-5 lg:flex justify-center items-center relative">
            
            {/* Scatters of ◆ Diamonds absolute positions */}
            <span className="absolute top-4 left-6 text-[#5B4FBE]/30 text-lg select-none">◆</span>
            <span className="absolute bottom-8 left-1/3 text-[#FF5722]/40 text-xl animate-pulse select-none">◆</span>
            <span className="absolute top-12 right-12 text-[#FF5722]/30 text-md select-none">◆</span>
            <span className="absolute bottom-16 right-4 text-[#5B4FBE]/40 text-lg select-none">◆</span>

            {/* Circle Composition */}
            <div id="illustration-outer" className="w-72 h-72 rounded-full bg-[#5B4FBE]/10 flex items-center justify-center relative animate-pulse" style={{ animationDuration: '6s' }}>
              
              {/* Inner Circle */}
              <div id="illustration-inner" className="w-52 h-52 rounded-full bg-[#5B4FBE]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                
                {/* Center Core */}
                <div id="illustration-core" className="bg-[#5B4FBE] w-24 h-24 rounded-full flex items-center justify-center shadow-xl z-10 hover:scale-105 transition-transform duration-300">
                  <ShoppingBag className="text-white w-12 h-12" />
                </div>
              </div>

              {/* Float Card 1: Top Right */}
              <div className="absolute top-4 -right-2 bg-white rounded-2xl p-3 shadow-md md:flex items-center gap-2 select-none border border-gray-100/50 hover:translate-y-[-2px] transition-transform duration-300 z-20">
                <span className="text-2xl" role="img" aria-label="store icon">🏪</span>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Total Brands</div>
                  <div className="text-xs font-black text-[#1A1A2E] mt-0.5">500+ Stores</div>
                </div>
              </div>

              {/* Float Card 2: Bottom Left */}
              <div className="absolute bottom-4 -left-6 bg-white rounded-2xl p-3 shadow-md md:flex items-center gap-2 select-none border border-gray-100/50 hover:translate-y-[-2px] transition-transform duration-300 z-20">
                <span className="text-2xl" role="img" aria-label="tick mark">✅</span>
                <div className="text-left">
                  <div className="text-[10px] text-[#22C55E] font-bold uppercase tracking-wider leading-none">Status</div>
                  <div className="text-xs font-black text-[#1A1A2E] mt-0.5">99% Verified</div>
                </div>
              </div>

              {/* Float Card 3: Top Left */}
              <div className="absolute top-8 -left-12 bg-[#FF5722] rounded-2xl p-3 shadow-lg select-none border border-[#FF5722] hover:translate-y-[-2px] transition-transform duration-300 z-20 text-center text-white min-w-[95px]">
                <div className="text-lg font-black leading-none">%</div>
                <div className="text-[9px] font-black tracking-widest mt-1 uppercase">GET DEAL</div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2  -  MAIN CONTENT AREA
          ========================================== */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* ==========================================
              LEFT SIDEBAR  -  CATEGORY LIST + INFO
              ========================================== */}
          <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 self-start space-y-6 order-2 lg:order-1">
            
            {/* Sidebar Card 1: Categories list filter */}
            <div id="sidebar-categories" className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center justify-between">
                <span>Categories</span>
                <span className="text-[10px] font-bold bg-[#F8F8FF] text-[#4A4A6A] px-2 py-0.5 rounded-full border border-[#E8E8F0]">Filter</span>
              </h3>
              
              <div className="space-y-1.5 max-h-[380px] lg:max-h-none overflow-y-auto pr-1">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  const IconComp = cat.icon;
                  
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group focus:outline-hidden ${
                        isSelected
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE]'
                      }`}
                    >
                      <IconComp size={16} className={isSelected ? 'text-white' : 'text-[#4A4A6A] group-hover:text-[#5B4FBE]'} />
                      <span className={`text-sm text-left truncate ${isSelected ? 'font-bold' : 'font-medium'}`}>
                        {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-auto font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] group-hover:bg-[#F0EEFF] group-hover:text-[#5B4FBE]'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Card 2: Interactive Newsletter Block */}
            <div id="sidebar-newsletter" className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-5 text-white shadow-sm relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-20 h-20 bg-white/5 rounded-full" />
              
              <h4 className="font-extrabold text-sm tracking-tight flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#FFD700] shrink-0" />
                <span>Never Miss a Deal!</span>
              </h4>
              <p className="text-white/75 text-xs mt-1.5 leading-relaxed">
                Get the latest coupons &amp; offers straight to your inbox. Trusted by 50,000+ shoppers.
              </p>

              {newsSubscribed ? (
                <div className="mt-4 bg-white/20 border border-white/30 rounded-xl p-3 text-center transition-all">
                  <span className="text-xs font-bold text-[#FFD700]">✓ Subscribed Successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="mt-4">
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/10 border border-white/20 placeholder:text-white/50 focus:border-white/60 focus:bg-white/15 rounded-xl px-4 py-2.5 text-white text-xs w-full focus:outline-hidden transition-colors"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full bg-[#FF5722] hover:bg-orange-500 text-white py-2.5 rounded-xl text-xs font-extrabold transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Card 3: Trust Badges */}
            <div id="sidebar-trust" className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h4 className="font-extrabold text-[#1A1A2E] text-sm mb-4 tracking-tight">
                Why Shop With Us?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-[#5B4FBE] w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#4A4A6A] leading-tight">Manually Verified Coupons</span>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="text-[#5B4FBE] w-4.5 h-4.5 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="text-xs font-medium text-[#4A4A6A] leading-tight">Daily Updates</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#5B4FBE] w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#4A4A6A] leading-tight">Expired Codes Removed</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="text-[#5B4FBE] w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#4A4A6A] leading-tight">100% Safe &amp; Secure</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-[#5B4FBE] w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#4A4A6A] leading-tight">Save More Every Day</span>
                </div>
              </div>
            </div>

          </aside>

          {/* ==========================================
              RIGHT SIDE  -  STORES GRID & CONTROL BAR
              ========================================== */}
          <main className="flex-1 order-1 lg:order-2">
            
            {/* Control Panel  -  Search + Sort + Toggle View Grid/List */}
            <div id="control-bar" className="mb-6">

              {/* Search bar — full width, simple single line */}
              <div className="relative w-full mb-3 md:mb-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a store..."
                  className="w-full pl-11 pr-10 py-3 bg-white border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-2xl text-sm focus:outline-none text-[#1A1A2E] font-medium placeholder:text-gray-400 transition-colors shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 p-1 rounded-full transition-colors"
                  >
                    <X size={10} />
                  </button>
                )}
              </div>

              {/* Sort + View toggle — hidden on mobile, visible on md+ */}
              <div className="hidden md:flex items-center gap-2 mt-3">
                <div className="relative shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none border border-[#E8E8F0] hover:border-gray-300 focus:border-[#5B4FBE] rounded-xl pl-4 pr-10 py-2.5 text-sm text-[#1A1A2E] font-bold bg-white cursor-pointer focus:outline-none transition-colors w-[180px]"
                  >
                    <option value="Sort: Popular">Sort: Popular</option>
                    <option value="Most Offers">Most Offers</option>
                    <option value="A to Z">A to Z</option>
                    <option value="Z to A">Z to A</option>
                    <option value="Highest Discount">Highest Discount</option>
                  </select>
                  <ChevronRight size={14} className="rotate-90 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="flex items-center gap-1.5 ml-auto">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                    className={`p-2.5 rounded-xl cursor-pointer transition-all ${viewMode === 'grid' ? 'bg-[#5B4FBE] text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE]'}`}
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="List View"
                    className={`p-2.5 rounded-xl cursor-pointer transition-all ${viewMode === 'list' ? 'bg-[#5B4FBE] text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE]'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

            </div>

            {/* Results count label details */}
            <div className="flex justify-between items-center mb-5 px-1 select-none">
              <span className="text-sm font-semibold text-[#4A4A6A]">
                Showing <span className="text-[#5B4FBE] font-black">{filteredAndSorted.length}</span> stores
              </span>
              {selectedCategory !== 'All Stores' && (
                <span className="text-xs bg-[#F0EEFF] text-[#5B4FBE] px-3 py-1 rounded-full font-bold">
                  Category: {selectedCategory}
                </span>
              )}
            </div>

            {/* Empty dynamic search/filter fallback screen */}
            {paginatedStores.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-[#E8E8F0] shadow-2xs max-w-2xl mx-auto px-6">
                <div className="w-16 h-16 bg-[#FEF0F0] text-[#E8262A] rounded-full flex items-center justify-center mx-auto">
                  <Search size={28} />
                </div>
                <h4 className="font-bold text-[#1A1A2E] text-lg">No stores match your filters</h4>
                <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                  We couldn't find any store matching "{searchQuery}" under "{selectedCategory}". Try adjusting your keywords or viewing "All Stores".
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Stores');
                    setSearchQuery('');
                  }}
                  className="bg-[#5B4FBE] hover:bg-opacity-95 text-white font-bold text-xs px-6 py-3 rounded-xl cursor-pointer shadow-md"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              
              /* ==========================================
                  GRID VIEW (5 Horizontal Columns)
                  ========================================== */
              <div id="stores-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {paginatedStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => setPromoModalStore(store)}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE] transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[234px]"
                  >
                    <div>
                      {/* Logo Frame */}
                      <div
                        className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-[1.04] overflow-hidden shadow-2xs"
                        style={{ backgroundColor: store.logoBg }}
                      >
                        <span
                          className={`font-black tracking-tighter ${
                            store.logo.length > 3 ? 'text-sm' : 'text-lg md:text-xl'
                          }`}
                          style={{ color: store.logoColor }}
                        >
                          {store.logo}
                        </span>
                      </div>

                      {/* Store Name & Offer numbers */}
                      <h4 className="font-extrabold text-sm text-[#1A1A2E] leading-tight truncate px-0.5 group-hover:text-[#5B4FBE] transition-colors">
                        {store.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-[#4A4A6A] mt-1 uppercase tracking-wider">
                        {store.offerCount}+ Offers
                      </p>
                    </div>

                    {/* Discount Label & Bottom CTA Row */}
                    <div>
                      <div className="text-xs font-black text-[#FF5722] bg-[#FFF2ED] rounded-lg py-1 px-2 inline-block max-w-full truncate">
                        {store.discountLabel}
                      </div>
                      
                      <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#E8E8F0] text-left">
                        <span className="text-[10px] text-[#FF5722] font-black tracking-widest uppercase">
                          GET DEAL
                        </span>
                        <ChevronRight size={14} className="text-[#5B4FBE] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              
              /* ==========================================
                  LIST VIEW (Single Block layout list)
                  ========================================== */
              <div id="stores-list" className="space-y-3">
                {paginatedStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => setPromoModalStore(store)}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-md hover:border-[#5B4FBE] transition-all duration-300 group cursor-pointer"
                  >
                    {/* Left: Sq Logo box */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: store.logoBg }}
                    >
                      <span
                        className={`font-extrabold tracking-tighter ${
                          store.logo.length > 3 ? 'text-xs' : 'text-base'
                        }`}
                        style={{ color: store.logoColor }}
                      >
                        {store.logo}
                      </span>
                    </div>

                    {/* Center details frame */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center flex-wrap gap-2">
                        <h4 className="font-extrabold text-[#1A1A2E] text-base group-hover:text-[#5B4FBE] transition-colors leading-none truncate">
                          {store.name}
                        </h4>
                        
                        {/* Popular badge */}
                        {store.isPopular && (
                          <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#4A4A6A] mt-1 select-text">
                        {store.description}
                      </p>

                      {/* Store Meta row tags */}
                      <div className="mt-2.5 flex items-center gap-3.5 flex-wrap">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Tag size={12} className="text-gray-400" />
                          <span>{store.offerCount}+ Offers</span>
                        </div>
                        <span className="w-1 h-1 bg-gray-200 rounded-full" />
                        <span className="bg-[#F8F8FF] border border-[#E8E8F0] text-[10px] text-gray-500 font-bold px-2.5 py-0.5 rounded-full select-none uppercase tracking-wider">
                          {store.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: CTA box & Discount value */}
                    <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-3 w-full sm:w-auto shrink-0 border-t sm:border-0 pt-3 sm:pt-0 mt-2 sm:mt-0">
                      <div className="text-right leading-none">
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Discount Max</div>
                        <div className="font-black text-[#FF5722] text-sm md:text-base mt-1.5">
                          {store.discountLabel}
                        </div>
                      </div>

                      <button className="bg-[#FF5722] text-white text-xs font-extrabold px-4.5 py-2.5 rounded-xl hover:bg-orange-600 active:scale-95 transition-all flex items-center gap-1">
                        <span>Get Deals</span>
                        <ChevronRight size={12} className="stroke-[3]" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredAndSorted.length > 0 && totalPages > 1 && (
              <div id="pagination-controls" className="flex items-center justify-center gap-2 mt-10 select-none">
                {/* Previous button */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((c) => Math.max(1, c - 1))}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    currentPage === 1
                      ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                      : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer'
                  }`}
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Page digits buttons list */}
                {paginationRange.map((p, idx) => {
                  if (p === '...') {
                    return (
                      <span key={`gap-${idx}`} className="w-8 text-center text-gray-400 text-sm font-semibold select-none">
                        ...
                      </span>
                    );
                  }
                  
                  const isCurrent = currentPage === p;
                  return (
                    <button
                      key={`page-${p}`}
                      onClick={() => setCurrentPage(p as number)}
                      className={`w-9 h-9 rounded-xl font-bold text-sm transition-all focus:outline-hidden ${
                        isCurrent
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}

                {/* Next button */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((c) => Math.min(totalPages, c + 1))}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    currentPage === totalPages
                      ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                      : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer'
                  }`}
                  aria-label="Next Page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

          </main>

        </div>
      </section>

      {/* ==========================================
          SECTION 3  -  STATS BAR ACCENT
          ========================================== */}
      <section id="stats-accent-strip" className="bg-white border-y border-[#E8E8F0] py-8 sm:py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-10 lg:gap-6">
          
          <div className="flex items-center gap-4 text-left p-2 md:border-r border-[#E8E8F0]/80 last:border-0">
            <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center shrink-0 select-none">
              <ShieldCheck className="text-[#5B4FBE] w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-none">10,000+</div>
              <div className="text-sm font-bold text-[#1A1A2E] mt-1">Coupons Verified</div>
              <div className="text-xs text-gray-400 mt-0.5">Manually Tested</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left p-2 lg:border-r border-[#E8E8F0]/80 last:border-0">
            <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center shrink-0 select-none">
              <Calendar className="text-[#5B4FBE] w-5.5 h-5.5" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-none">Daily</div>
              <div className="text-sm font-bold text-[#1A1A2E] mt-1">Updates</div>
              <div className="text-xs text-gray-400 mt-0.5">Fresh deals every day</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left p-2 md:border-r border-[#E8E8F0]/80 last:border-0">
            <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center shrink-0 select-none">
              <BadgeCheck className="text-[#5B4FBE] w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-none">100%</div>
              <div className="text-sm font-bold text-[#1A1A2E] mt-1">Working Coupons</div>
              <div className="text-xs text-gray-400 mt-0.5">Verified by experts</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-left p-2 last:border-0">
            <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center shrink-0 select-none">
              <TrendingUp className="text-[#5B4FBE] w-5 h-5" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-none">92.4%</div>
              <div className="text-sm font-bold text-[#1A1A2E] mt-1">Coupon Success Rate</div>
              <div className="text-xs text-gray-400 mt-0.5">Verified and working</div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4 - SEO CONTENT (70/30 LAYOUT)
          ========================================== */}
      <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

          {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
          <div className="lg:col-span-7 space-y-10">

            {/* ARTICLE BLOCK 1 */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">About This Page</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                500+ Stores. One Place to Find Every Deal Worth Finding.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  You&apos;ve been there. You find a coupon code on some random site - SAVE50. Error. Try FLAT50. Error. MYNTRA50. Error. Six codes, six failures. You either paid full price or gave up.
                </p>
                <p>
                  That happens because most coupon websites never clean their listings. They rank for the search, you land, you try dead codes, you leave frustrated. The site doesn&apos;t care - it already got the click.
                </p>
                <p>
                  Couponscrew was built to fix exactly that. Every code on this platform is manually verified before it goes live. Our success rate is 92.4%. That means when you grab a code from here, it almost certainly works. The ones that stop working get removed fast - not left to waste your time at checkout.
                </p>
                <p>
                  Right now, the platform tracks 10,000+ verified coupons across 500+ brands - from fashion and electronics to food delivery, travel, web hosting, and everything in between.
                </p>
              </div>
            </div>

            {/* ARTICLE BLOCK 2 */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Savings Strategy</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                How to Save More on Every Order - The Three-Layer Stack
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  Most shoppers use one savings layer. Smart shoppers use three. Here&apos;s how they stack.
                </p>
                <div className="space-y-3 mt-2">
                  {[
                    { step: "1", title: "Grab the verified code", desc: "Find the brand above, open the deal, copy the code. That's layer one. At 92.4% success rate, it almost certainly works." },
                    { step: "2", title: "Check for a bank card offer at checkout", desc: "HDFC, ICICI, and SBI card offers run constantly on Amazon, Flipkart, Swiggy, and Myntra. Typically 10% instant off. This is layer two - and most shoppers completely miss it." },
                    { step: "3", title: "Run a cashback app in the background", desc: "Browser extension cashback apps give you 1-5% back on top of everything else. It runs passively. You don't even have to think about it. Layer three." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                      <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
                        <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#4A4A6A] pt-2">
                  Someone who bought headphones during a recent sale used all three layers - a bank card offer, a Couponscrew code, and a cashback app running in the background. They ended up paying significantly less than half the original listed price. (Yes, you can legally stack all three. We&apos;ve done it. Your cart will look very confused.)
                </p>
              </div>
            </div>

            {/* ARTICLE BLOCK 3 */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">By Category</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                Which Categories Have the Best Coupon Codes Right Now?
              </h2>
              <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                Not all categories are equal when it comes to coupon depth. Here&apos;s where the real deals are - and what to watch out for.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    color: "#FF3F6C",
                    bg: "#FFF0F4",
                    label: "Fashion",
                    title: "Fashion &amp; Lifestyle",
                    body: "Myntra&apos;s End of Reason Sale regularly runs 50-80% off across 500+ brands. Big Billion Day fashion deals are real - but the best ones go in the first four hours. Set an alarm or miss it."
                  },
                  {
                    color: "#FF9900",
                    bg: "#FFF8E7",
                    label: "Electronics",
                    title: "Electronics",
                    body: "Amazon Great Indian Festival hits up to 70% off. One caution: always check the 90-day price history before assuming a sale price is actually low. MRP inflation is real - the &quot;original price&quot; isn&apos;t always what it sounds like."
                  },
                  {
                    color: "#FC8019",
                    bg: "#FFF5EC",
                    label: "Food",
                    title: "Food Delivery",
                    body: "Swiggy and Zomato first-order codes run 50-60% off. Key rule: use your first-order discount on your biggest order, not a small one. It&apos;s a one-time thing - make it count."
                  },
                  {
                    color: "#FF6B35",
                    bg: "#FFF3EE",
                    label: "Hosting",
                    title: "Web Hosting",
                    body: "Hostinger runs 72-85% off legitimately - deep discounts to acquire long-term customers. The discount fluctuates. Waiting a few days before buying can get you a meaningfully deeper deal."
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }}></span>
                      <span className="text-xs font-black uppercase tracking-wider" style={{ color: cat.color }}>{cat.label}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]" dangerouslySetInnerHTML={{ __html: cat.title }}></h3>
                    <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: cat.body }}></p>
                  </div>
                ))}
              </div>
            </div>

            {/* ARTICLE BLOCK 4 */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
                <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">The Honest Version</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                Why Most Coupon Sites Waste Your Time
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  Most coupon websites list 47 codes per brand. All expired. Some from 2019. They rank for the search, you land, you try codes, they all fail, you leave. The site got the traffic. You got nothing.
                </p>
                <p>
                  This isn&apos;t an accident - it&apos;s the business model. Listing dead codes costs nothing. Verifying them takes work. Most sites choose the easier path.
                </p>
                <p>
                  We made a different call. Every code on Couponscrew is manually tested before it goes live. Two verified codes beat 47 dead ones every time. That&apos;s not a pitch - it&apos;s just the math of what actually saves you money at checkout.
                </p>
                <p>
                  One more thing most coupon sites skip: browser extension cashback apps. They&apos;re the most underused savings layer out there. Stack one with a coupon code on a sale day and you&apos;re using every layer available - coupon discount, bank card offer, and passive cashback all at once. Even the best coupon sites rarely tell you this. Most shoppers don&apos;t even know the third layer exists.
                </p>
                <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-2">
                  <p className="text-xs font-bold text-[#5B4FBE]">
                    When we say &quot;exclusive coupon&quot; - we mean it. A code is exclusive when it genuinely cannot be found elsewhere. We&apos;ll say it only when it&apos;s true.
                  </p>
                </div>
              </div>
            </div>

            {/* ARTICLE BLOCK 5 */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                <span className="text-xs font-black text-white/60 uppercase tracking-widest">The Platform</span>
              </div>
              <h2 className="text-2xl font-black text-white leading-tight">
                50,000+ Shoppers. 500+ Brands. One Mission.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                <p>
                  50,000+ registered users. 500+ brand partners. 10,000+ verified coupons live on the platform right now. Every code manually tested. Expired codes removed fast.
                </p>
                <p>
                  50% of shoppers choose online shopping specifically because of cashback and deals, according to Mintel data. Our users are in that 50% - and they&apos;re not here for generic listicles. They&apos;re here for codes that actually work — the kind only the best online coupon sites bother to verify.
                </p>
                <p>
                  Quick commerce - Blinkit, Zepto, Instamart - is the fastest growing shopping category globally. The segment hit $7-8 billion in FY25 and is growing at 110-130% CAGR (Redseer). Couponscrew covers all of it. Fashion, electronics, food delivery, travel, hosting, education, health - every category, one platform.
                </p>
                <p className="text-white font-semibold">
                  Pick a store above. Copy the code. Check out for less.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { val: "10,000+", lbl: "Verified Coupons" },
                  { val: "500+", lbl: "Brand Partners" },
                  { val: "92.4%", lbl: "Success Rate" },
                  { val: "50,000+", lbl: "Registered Users" }
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-center min-w-[110px]">
                    <div className="text-lg font-black text-white leading-none">{s.val}</div>
                    <div className="text-[10px] text-white/60 mt-1 font-medium">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT - SIDEBAR CARDS (30%) */}
          <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-24 self-start">

            {/* SIDEBAR CARD 1 - Savings Stack */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
                Pro Tip - Stack Your Savings
              </h3>
              <p className="text-xs text-[#4A4A6A] mb-4">Every layer you add compounds the total saving.</p>
              <div className="space-y-2">
                {[
                  { layer: "Sale price discount", val: "20-70% off", color: "#5B4FBE" },
                  { layer: "Coupon code on top", val: "5-15% extra", color: "#5B4FBE" },
                  { layer: "Bank card offer", val: "5-10% instant", color: "#5B4FBE" },
                  { layer: "Cashback app", val: "1-5% back", color: "#5B4FBE" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                    <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                    <span className="text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5">
                  <span className="text-xs font-black text-white">Combined saving</span>
                  <span className="text-xs font-black text-[#FFD700]">35-80% OFF</span>
                </div>
              </div>
            </div>

            {/* SIDEBAR CARD 2 - Top Categories */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#5B4FBE]" />
                Top Categories Right Now
              </h3>
              <div className="space-y-2.5">
                {[
                  { name: "Fashion & Lifestyle", count: "65 stores", dot: "#FF3F6C" },
                  { name: "Electronics", count: "48 stores", dot: "#FF9900" },
                  { name: "Food & Grocery", count: "42 stores", dot: "#FC8019" },
                  { name: "Travel", count: "38 stores", dot: "#2874F0" },
                  { name: "Health & Beauty", count: "32 stores", dot: "#FC2779" }
                ].map((cat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.dot }}></span>
                      <span className="text-xs font-medium text-[#4A4A6A]">{cat.name}</span>
                    </div>
                    <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR CARD 3 - Quick Commerce */}
            <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-xs font-black uppercase tracking-wider">Fastest Growing</span>
              </div>
              <h3 className="text-sm font-extrabold text-white leading-snug">Quick Commerce is Exploding</h3>
              <p className="text-white/80 text-xs mt-2 leading-relaxed">
                Blinkit, Zepto, and Instamart hit $7-8B in FY25. Growing at 110-130% CAGR. Coupon content for quick commerce is massively undersupplied vs demand right now.
              </p>
              <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-white/80 shrink-0" />
                <span className="text-[11px] text-white/80 font-medium">All three platforms covered on Couponscrew</span>
              </div>
            </div>

            {/* SIDEBAR CARD 4 - Bank Card Cheatsheet */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B4FBE]" />
                Bank Card Offer Cheatsheet
              </h3>
              <p className="text-xs text-[#4A4A6A] mb-4">Layer these on top of any coupon code.</p>
              <div className="space-y-2.5">
                {[
                  { bank: "HDFC", platforms: "Amazon, Flipkart, Myntra", off: "10% instant" },
                  { bank: "ICICI", platforms: "Flipkart, Swiggy", off: "10% instant" },
                  { bank: "SBI", platforms: "Amazon GIF", off: "10% instant" }
                ].map((row, i) => (
                  <div key={i} className="rounded-xl bg-[#F8F8FF] border border-[#E8E8F0] p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black text-[#1A1A2E]">{row.bank}</span>
                      <span className="text-[10px] font-black text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20 px-2 py-0.5 rounded-full">{row.off}</span>
                    </div>
                    <p className="text-[10px] text-[#4A4A6A]">{row.platforms}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-3 leading-relaxed">
                Check the offer page for current cap limits before checkout.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          INTERACTIVE COUPONS MODAL OVERLAY
          ========================================== */}
      {promoModalStore && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full flex flex-col relative border border-[#E8E8F0] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header store identity bg */}
            <div className="p-6 text-left flex items-center gap-4 border-b border-gray-100 shrink-0">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-base shrink-0"
                style={{ backgroundColor: promoModalStore.logoBg }}
              >
                <span style={{ color: promoModalStore.logoColor }} className="uppercase">
                  {promoModalStore.logo}
                </span>
              </div>
              <div className="min-w-0">
                <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-2 py-0.5 rounded-full select-none uppercase tracking-wider">
                  {promoModalStore.category}
                </span>
                <h3 className="text-[#1A1A2E] text-xl font-bold truncate mt-1">
                  {promoModalStore.name} Offers
                </h3>
              </div>

              {/* Close Button at top-right */}
              <button
                onClick={() => {
                  setPromoModalStore(null);
                  setCopiedCodeIndex(null);
                }}
                className="ml-auto bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full p-2.5 transition active:scale-90 cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Coupons list details body */}
            <div className="p-6 overflow-y-auto space-y-4 max-h-[50vh] text-left select-text">
              <p className="text-[#4A4A6A] text-xs font-semibold leading-relaxed">
                Choose one of these verified active promo codes to save big today on <strong className="text-[#1A1A2E]">{promoModalStore.name}</strong>:
              </p>

              {/* Coupon Row 1 */}
              <div className="border border-dashed border-[#5B4FBE]/40 rounded-2xl p-4 bg-[#F8F8FF] flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="bg-[#FF5722] text-white text-[9px] font-black tracking-widest px-2 py-0.5 rounded-sm uppercase">
                      Exclusive Promo
                    </span>
                    <h5 className="font-extrabold text-sm text-[#1A1A2E] mt-1.5 leading-snug">
                      Save {promoModalStore.discountLabel} across store!
                    </h5>
                    <p className="text-[11px] text-gray-400 mt-1">No minimum order required. Tested and verified.</p>
                  </div>
                </div>

                {/* Code copy action box */}
                <div className="bg-white border border-[#E8E8F0] p-2 rounded-xl flex items-center justify-between mt-1">
                  <span className="font-mono text-sm uppercase tracking-wider font-bold text-[#5B4FBE] select-all pl-2">
                    CS{promoModalStore.logo.substring(0, 3).toUpperCase()}{promoModalStore.maxDiscount}
                  </span>
                  <button
                    onClick={() => handleCopyCouponCode(`CS${promoModalStore.logo.substring(0, 3).toUpperCase()}${promoModalStore.maxDiscount}`, 0)}
                    className={`text-xs font-extrabold px-4 py-2 rounded-lg transition active:scale-95 cursor-pointer ${
                      copiedCodeIndex === 0
                        ? 'bg-[#22C55E] text-white'
                        : 'bg-[#5B4FBE] hover:bg-opacity-90 text-white'
                    }`}
                  >
                    {copiedCodeIndex === 0 ? 'Copied' : 'Copy Code'}
                  </button>
                </div>
              </div>

              {/* Coupon Row 2 */}
              <div className="border border-[#E8E8F0] rounded-2xl p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="bg-[#22C55E]/15 text-[#22C55E] text-[9px] font-black tracking-widest px-2 py-0.5 rounded-sm uppercase">
                      Verified Coupon
                    </span>
                    <h5 className="font-extrabold text-sm text-[#1A1A2E] mt-1.5 leading-snug">
                      Flat 15% cashback on UPI payments
                    </h5>
                    <p className="text-[11px] text-gray-400 mt-1">Valid when paying via Google Pay or PhonePe wallets.</p>
                  </div>
                </div>

                <div className="bg-[#F8F8FF] border border-gray-100 p-2 rounded-xl flex items-center justify-between mt-1">
                  <span className="font-mono text-sm uppercase tracking-wider font-bold text-gray-600 select-all pl-2">
                    CSUPI15
                  </span>
                  <button
                    onClick={() => handleCopyCouponCode('CSUPI15', 1)}
                    className={`text-xs font-extrabold px-4 py-2 rounded-lg transition active:scale-95 cursor-pointer ${
                      copiedCodeIndex === 1
                        ? 'bg-[#22C55E] text-white'
                        : 'bg-gray-100 text-[#4A4A6A] hover:bg-gray-200'
                    }`}
                  >
                    {copiedCodeIndex === 1 ? 'Copied' : 'Copy Code'}
                  </button>
                </div>
              </div>

              {/* Offer description */}
              <div className="pt-2 bg-[#F8F8FF] p-3 rounded-xl border border-[#E8E8F0]/65 text-center text-[11px] text-[#4A4A6A]">
                🏪 <strong>About {promoModalStore.name}:</strong> {promoModalStore.description}. Copy the code above and paste it at checkout.
              </div>
            </div>

            {/* Footer actions */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-gray-400 font-medium">Auto-copied to clipboard</span>
              <button
                onClick={() => {
                  setPromoModalStore(null);
                  setCopiedCodeIndex(null);
                }}
                className="bg-[#5B4FBE] text-white text-xs font-bold px-5 py-2 rounded-xl active:scale-95 cursor-pointer hover:bg-opacity-95 shadow-2xs transition"
              >
                Close Offers
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}




