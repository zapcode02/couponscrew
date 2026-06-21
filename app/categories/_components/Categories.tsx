'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  Search,
  LayoutGrid,
  List,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Tag,
  Store,
  ShieldCheck,
  Layers,
  Percent,
  Star,
  Mail,
  RefreshCw,
  Lock,
  ArrowRight,
  HelpCircle, 
  Clock, 
  Smartphone, 
  Laptop, 
  ShoppingBag, 
  Shirt, 
  Home, 
  Utensils, 
  Plane, 
  Activity, 
  HeartPulse, 
  BookOpen, 
  Tv, 
  Baby, 
  Footprints,
  Flame
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface Category {
  id: string;
  name: string;
  icon: string; // emoji string
  offerCount: number;
  brandCount: number;
  maxDiscount: string;
  color: string;
  bgColor: string;
  trending: boolean;
  trendPercent: number;
  description: string;
}

export interface CategoryOfWeek {
  id: string;
  categoryName: string;
  tagline: string;
  description: string;
  features: string[];
  discountText: string;
  bgGradient: string;
  accentColor: string;
  illustration: string;
}

export interface BrandInfo {
  name: string;
  color: string;
  logoLetters: string;
}

export interface BrandsByCategory {
  categoryName: string;
  brands: BrandInfo[];
}

export interface LifestylePersona {
  id: string;
  name: string;
  description: string;
  emoji: string;
  categories: string[];
  color: string;
  bgColor: string;
}

// ============================================================================
// HARDCODED CONSTANT DATA
// ============================================================================
const CATEGORIES_DATA: Category[] = [
  {
    id: 'cat-1',
    name: 'Fashion & Lifestyle',
    icon: '👗',
    offerCount: 2345,
    brandCount: 120,
    maxDiscount: 'Up to 80% OFF',
    color: '#FF6B9D',
    bgColor: '#FFF0F6',
    trending: true,
    trendPercent: 28,
    description: 'Clothing, shoes, accessories and lifestyle brands'
  },
  {
    id: 'cat-2',
    name: 'Electronics',
    icon: '📱',
    offerCount: 1987,
    brandCount: 95,
    maxDiscount: 'Up to 70% OFF',
    color: '#5B4FBE',
    bgColor: '#F0EEFF',
    trending: true,
    trendPercent: 42,
    description: 'Mobiles, laptops, gadgets and electronic accessories'
  },
  {
    id: 'cat-3',
    name: 'Food & Grocery',
    icon: '🛒',
    offerCount: 1876,
    brandCount: 85,
    maxDiscount: 'Up to 60% OFF',
    color: '#22C55E',
    bgColor: '#F0FDF4',
    trending: false,
    trendPercent: 0,
    description: 'Groceries, food delivery and kitchen essentials'
  },
  {
    id: 'cat-4',
    name: 'Travel',
    icon: '✈️',
    offerCount: 1543,
    brandCount: 70,
    maxDiscount: 'Up to 60% OFF',
    color: '#0EA5E9',
    bgColor: '#F0F9FF',
    trending: true,
    trendPercent: 15,
    description: 'Flights, hotels, holiday packages and travel gear'
  },
  {
    id: 'cat-5',
    name: 'Health & Beauty',
    icon: '💄',
    offerCount: 987,
    brandCount: 60,
    maxDiscount: 'Up to 60% OFF',
    color: '#EC4899',
    bgColor: '#FDF2F8',
    trending: false,
    trendPercent: 0,
    description: 'Skincare, makeup, wellness and personal care'
  },
  {
    id: 'cat-6',
    name: 'Home & Kitchen',
    icon: '🏠',
    offerCount: 1234,
    brandCount: 75,
    maxDiscount: 'Up to 50% OFF',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    trending: false,
    trendPercent: 0,
    description: 'Furniture, appliances, decor and kitchen products'
  },
  {
    id: 'cat-7',
    name: 'Web Hosting',
    icon: '🖥️',
    offerCount: 678,
    brandCount: 35,
    maxDiscount: 'Up to 85% OFF',
    color: '#FF6B35',
    bgColor: '#FFF3EE',
    trending: true,
    trendPercent: 67,
    description: 'Domain registration, web hosting and cloud services'
  },
  {
    id: 'cat-8',
    name: 'Education',
    icon: '🎓',
    offerCount: 543,
    brandCount: 40,
    maxDiscount: 'Up to 70% OFF',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    trending: false,
    trendPercent: 0,
    description: 'Online courses, certifications and learning platforms'
  },
  {
    id: 'cat-9',
    name: 'Entertainment',
    icon: '🎬',
    offerCount: 1234,
    brandCount: 55,
    maxDiscount: 'Up to 50% OFF',
    color: '#EF4444',
    bgColor: '#FEF2F2',
    trending: false,
    trendPercent: 0,
    description: 'OTT streaming, movies, events and gaming'
  },
  {
    id: 'cat-10',
    name: 'Finance',
    icon: '💰',
    offerCount: 1102,
    brandCount: 65,
    maxDiscount: 'Up to 70% OFF',
    color: '#10B981',
    bgColor: '#ECFDF5',
    trending: false,
    trendPercent: 0,
    description: 'Insurance, investments, banking and fintech apps'
  },
  {
    id: 'cat-11',
    name: 'Sports & Fitness',
    icon: '🏋️',
    offerCount: 657,
    brandCount: 40,
    maxDiscount: 'Up to 60% OFF',
    color: '#F97316',
    bgColor: '#FFF7ED',
    trending: false,
    trendPercent: 0,
    description: 'Sports gear, fitness equipment and activewear'
  },
  {
    id: 'cat-12',
    name: 'Automotive',
    icon: '🚗',
    offerCount: 321,
    brandCount: 25,
    maxDiscount: 'Up to 50% OFF',
    color: '#6B7280',
    bgColor: '#F9FAFB',
    trending: false,
    trendPercent: 0,
    description: 'Car accessories, bike gear and auto maintenance'
  },
  {
    id: 'cat-13',
    name: 'Pet Supplies',
    icon: '🐾',
    offerCount: 234,
    brandCount: 20,
    maxDiscount: 'Up to 40% OFF',
    color: '#84CC16',
    bgColor: '#F7FEE7',
    trending: false,
    trendPercent: 0,
    description: 'Pet food, toys, grooming and healthcare products'
  },
  {
    id: 'cat-14',
    name: 'Books & Stationery',
    icon: '📚',
    offerCount: 432,
    brandCount: 30,
    maxDiscount: 'Up to 50% OFF',
    color: '#0891B2',
    bgColor: '#ECFEFF',
    trending: false,
    trendPercent: 0,
    description: 'Books, stationery, art supplies and office essentials'
  },
  {
    id: 'cat-15',
    name: 'Others',
    icon: '✨',
    offerCount: 668,
    brandCount: 50,
    maxDiscount: 'Up to 60% OFF',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    trending: false,
    trendPercent: 0,
    description: 'Telecom, home services and more miscellaneous deals'
  }
];

const CATEGORIES_OF_WEEK: CategoryOfWeek[] = [
  {
    id: 'cow-1',
    categoryName: 'Web Hosting',
    tagline: 'Build your online presence with the best hosting deals & discounts.',
    description: 'Get blazing fast load times and maximum uptime for less.',
    features: ['85% OFF On Top Brands', '120+ Active Deals', '35 Trusted Brands'],
    discountText: 'UP TO 85% OFF',
    bgGradient: 'from-[#5B4FBE] to-[#3730A3]',
    accentColor: '#FF5722',
    illustration: '🖥️'
  },
  {
    id: 'cow-2',
    categoryName: 'Fashion & Lifestyle',
    tagline: 'Trendy brands at unbeatable prices. Style more, spend less.',
    description: 'Upgrade your wardrobe with verified promo codes.',
    features: ['80% OFF On Top Brands', '250+ Active Deals', '120 Fashion Brands'],
    discountText: 'UP TO 80% OFF',
    bgGradient: 'from-[#EC4899] to-[#BE185D]',
    accentColor: '#FFD700',
    illustration: '👗'
  },
  {
    id: 'cow-3',
    categoryName: 'Electronics',
    tagline: "Latest gadgets and tech at the best prices from top electronics stores.",
    description: 'Save big on smartphones, audio, and personal accessories.',
    features: ['70% OFF On Gadgets', '200+ Active Deals', '95 Electronics Brands'],
    discountText: 'UP TO 70% OFF',
    bgGradient: 'from-[#1A1A2E] to-[#5B4FBE]',
    accentColor: '#22C55E',
    illustration: '📱'
  },
  {
    id: 'cow-4',
    categoryName: 'Travel',
    tagline: 'Fly more for less. Hotels, flights and holiday packages at amazing prices.',
    description: 'Book your dream destination with premium discounts.',
    features: ['60% OFF On Flights', '150+ Active Deals', '70 Travel Brands'],
    discountText: 'UP TO 60% OFF',
    bgGradient: 'from-[#0EA5E9] to-[#0369A1]',
    accentColor: '#FFD700',
    illustration: '✈️'
  }
];

const TOP_BRANDS_DATA: BrandsByCategory[] = [
  {
    categoryName: 'Fashion',
    brands: [
      { name: 'Myntra', color: '#FF3F6C', logoLetters: 'M' },
      { name: 'Ajio', color: '#000000', logoLetters: 'AJ' },
      { name: 'H&M', color: '#E50010', logoLetters: 'H&M' }
    ]
  },
  {
    categoryName: 'Electronics',
    brands: [
      { name: 'Amazon', color: '#FF9900', logoLetters: 'a' },
      { name: 'Samsung', color: '#1428A0', logoLetters: 'S' },
      { name: 'boAt', color: '#1A1A2E', logoLetters: 'B' }
    ]
  },
  {
    categoryName: 'Travel',
    brands: [
      { name: 'MakeMyTrip', color: '#E8262A', logoLetters: 'MMT' },
      { name: 'Goibibo', color: '#E8262A', logoLetters: 'go' },
      { name: 'Yatra', color: '#EF6C00', logoLetters: 'Y' }
    ]
  },
  {
    categoryName: 'Food',
    brands: [
      { name: 'Swiggy', color: '#FC8019', logoLetters: 'S' },
      { name: 'Zomato', color: '#E23744', logoLetters: 'Z' },
      { name: 'Blinkit', color: '#F0C000', logoLetters: 'B' }
    ]
  },
  {
    categoryName: 'Hosting',
    brands: [
      { name: 'Hostinger', color: '#FF6B35', logoLetters: 'H' },
      { name: 'GoDaddy', color: '#1BDBDB', logoLetters: 'GD' },
      { name: 'Bluehost', color: '#1E6FD9', logoLetters: 'BH' }
    ]
  }
];

const LIFESTYLE_PERSONAS: LifestylePersona[] = [
  {
    id: 'lp-1',
    name: 'Fashion Lover',
    emoji: '👩🛍️',
    description: 'Trendy looks, top brands & exclusive offers',
    categories: ['Fashion', 'Beauty', 'Accessories'],
    color: '#FF6B9D',
    bgColor: '#FFF0F6'
  },
  {
    id: 'lp-2',
    name: 'Tech Enthusiast',
    emoji: '👨‍💻',
    description: 'Latest gadgets & electronics deals',
    categories: ['Electronics', 'Web Hosting', 'Gadgets'],
    color: '#5B4FBE',
    bgColor: '#F0EEFF'
  },
  {
    id: 'lp-3',
    name: 'Traveler',
    emoji: '🧳',
    description: 'Best travel deals, flights & hotels',
    categories: ['Travel', 'Hotels', 'Activities'],
    color: '#0EA5E9',
    bgColor: '#F0F9FF'
  },
  {
    id: 'lp-4',
    name: 'Foodie',
    emoji: '🍕',
    description: 'Best food delivery deals & offers',
    categories: ['Food Delivery', 'Grocery', 'Restaurants'],
    color: '#FF6B35',
    bgColor: '#FFF3EE'
  },
  {
    id: 'lp-5',
    name: 'Gamer',
    emoji: '🎮',
    description: 'Gaming gear, accessories & top deals',
    categories: ['Gaming', 'Electronics', 'Entertainment'],
    color: '#8B5CF6',
    bgColor: '#F5F3FF'
  },
  {
    id: 'lp-6',
    name: 'Home Styler',
    emoji: '🛋️',
    description: 'Decor, furniture & home essentials',
    categories: ['Home', 'Kitchen', 'Appliances'],
    color: '#F59E0B',
    bgColor: '#FFFBEB'
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function Categories() {
  // Search input state (affects visual Grid in Section 4 in real-time)
  const [searchQuery, setSearchQuery] = useState('');
  
  // Grid/List View state
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Slider State (Category of the week)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CATEGORIES_OF_WEEK.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filter the grid in real-time based on searchQuery
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES_DATA;
    const q = searchQuery.toLowerCase();
    return CATEGORIES_DATA.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Lifestyle persona carousel reference
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLifestyleRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  const handleResetSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* ============================================================================
          SECTION 1  -  HERO BANNER
          ============================================================================ */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] overflow-hidden min-h-[320px] py-12 px-6">
        {/* Subtle decorative diamonds */}
        <span className="absolute top-12 left-[12%] text-[#5B4FBE]/25 text-xl select-none pointer-events-none">◆</span>
        <span className="absolute bottom-16 left-[40%] text-[#FF5722]/20 text-md select-none pointer-events-none">◆</span>
        <span className="absolute top-8 right-[32%] text-[#22C55E]/18 text-lg select-none pointer-events-none">◆</span>
        <span className="absolute bottom-10 right-[15%] text-[#5B4FBE]/30 text-2xl select-none pointer-events-none">◆</span>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column (55%) */}
          <div className="md:col-span-7 flex flex-col items-start">
            
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-400 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-bold">All Categories</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A2E] tracking-tight mt-3 select-none">
              All Categories
            </h1>

            {/* Description */}
            <p className="text-[#4A4A6A] text-base md:text-lg mt-3 max-w-md leading-relaxed select-none">
              Find verified deals across every category — fashion, electronics, food, travel, and everything in between.
            </p>

            {/* Interactive Search Bar wrapper */}
            <div className="w-full max-w-md mt-6">
              <div className="border border-[#E8E8F0] rounded-2xl p-1 bg-white shadow-xs flex items-center focus-within:border-[#5B4FBE] focus-within:ring-2 focus-within:ring-[#5B4FBE]/10 transition-all">
                <div className="pl-3.5 pr-2 shrink-0">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a category..."
                  className="flex-1 text-sm bg-transparent border-0 text-[#1A1A2E] p-2 focus:ring-0 focus:outline-none placeholder:text-gray-400 placeholder:font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={handleResetSearch}
                    className="text-xs text-gray-400 hover:text-gray-600 font-bold px-2 py-1 select-none pr-3"
                  >
                    ✕
                  </button>
                )}
                <button 
                  className="bg-[#5B4FBE] text-white p-3 rounded-xl hover:bg-[#4a3fa8] active:scale-[0.97] transition-all flex items-center justify-center shrink-0"
                  aria-label="Search Submit Button"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* 4 Stat Mini Cards Grid */}
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0EEFF] p-2 rounded-xl text-[#5B4FBE] shrink-0">
                  <Layers size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-tight">15+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Categories</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF2ED] p-2 rounded-xl text-[#FF5722] shrink-0">
                  <Store size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-tight">500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Top Brands</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0FDF4] p-2 rounded-xl text-[#22C55E] shrink-0">
                  <Tag size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-tight">10,000+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Coupons &amp; Deals</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FEFBE8] p-2 rounded-xl text-[#F59E0B] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-tight">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Verified &amp; Updated</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (45%) */}
          <div className="hidden md:col-span-5 md:flex items-center justify-center relative">
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Giant light purple circle bg */}
              <div className="absolute w-72 h-72 rounded-full bg-[#F0EEFF] animate-pulse duration-5000" />

              {/* Tablet/Phone Mockup shape centered */}
              <div className="relative w-44 h-76 bg-[#1A1A2E] rounded-[32px] p-2.5 shadow-2xl border-4 border-[#E8E8F0] flex flex-col z-10 transition-transform hover:scale-105 duration-300 select-none">
                {/* Speaker line */}
                <div className="w-12 h-1 bg-gray-700 rounded-full mx-auto mb-2" />
                
                {/* Inner Mockup Screen App Layout Mock */}
                <div className="flex-1 bg-white rounded-[22px] overflow-hidden p-3 flex flex-col gap-2.5 text-left">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-black text-[11px] text-[#5B4FBE]">Couponscrew</span>
                    <span className="bg-[#FF5722] text-white text-[7px] px-1 py-0.5 rounded-sm uppercase tracking-wide font-extrabold">DEAL</span>
                  </div>
                  
                  {/* Category Mock Section */}
                  <div className="bg-[#F8F8FF] rounded-xl p-2 flex items-center gap-1.5 border border-gray-100">
                    <span className="text-sm">🛍️</span>
                    <div>
                      <div className="font-bold text-[8px] text-[#1A1A2E] leading-tight">Fashion Shop</div>
                      <div className="text-[6px] text-gray-400">Up to 80% Off</div>
                    </div>
                  </div>

                  <div className="bg-[#F8F8FF] rounded-xl p-2 flex items-center gap-1.5 border border-gray-100">
                    <span className="text-sm">📱</span>
                    <div>
                      <div className="font-bold text-[8px] text-[#1A1A2E] leading-tight">Electronics Deal</div>
                      <div className="text-[6px] text-gray-400">70% Verified Off</div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">✈️</span>
                      <div>
                        <div className="font-bold text-[8px] text-indigo-900 leading-tight">Travel Off</div>
                        <div className="text-[6px] text-indigo-500">Premium active</div>
                      </div>
                    </div>
                    <span className="text-[8px] font-extrabold text-[#5B4FBE] shrink-0">→</span>
                  </div>

                  {/* Little mock coupon tag */}
                  <div className="border border-dashed border-orange-200 bg-orange-50 rounded-lg p-2 text-center">
                    <span className="text-[7px] text-[#FF5722] font-semibold leading-none uppercase">Code: CS50</span>
                  </div>
                </div>
              </div>

              {/* Floating Emojis in high-contrast miniature cards around */}
              {/* Card 1: Top-Left 🛍️ */}
              <div className="absolute top-4 left-[-10px] bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center border border-[#E8E8F0] z-20 hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-2xl" role="img" aria-label="shopping bag">🛍️</span>
              </div>

              {/* Card 2: Top-Right ✈️ */}
              <div className="absolute top-10 right-0 bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center border border-[#E8E8F0] z-20 hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-2xl" role="img" aria-label="airplane">✈️</span>
              </div>

              {/* Card 3: Mid-Left 📱 */}
              <div className="absolute bottom-28 left-[-20px] bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center border border-[#E8E8F0] z-20 hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-2xl" role="img" aria-label="mobile phone">📱</span>
              </div>

              {/* Card 4: Mid-Right 🏠 */}
              <div className="absolute bottom-24 right-[-10px] bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center border border-[#E8E8F0] z-20 hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-2xl" role="img" aria-label="house">🏠</span>
              </div>

              {/* Card 5: Bottom-Left 💄 */}
              <div className="absolute bottom-6 left-12 bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center border border-[#E8E8F0] z-20 hover:-translate-y-1 transition-transform cursor-pointer">
                <span className="text-2xl" role="img" aria-label="lipstick">💄</span>
              </div>

              {/* Isolated floating styling shapes */}
              <div className="absolute top-[-30px] left-[40%] bg-[#FF5722] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md z-20 rotate-[-12deg] select-none">
                85% Off
              </div>

              <div className="absolute bottom-0 right-[35%] bg-[#22C55E] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md z-20 rotate-[12deg] select-none">
                100% Verified
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2  -  TRENDING CATEGORIES STRIP
          ============================================================================ */}
      <section className="bg-white py-10 border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Flame size={20} className="text-[#FF5722] fill-[#FF5722]" />
                <h2 className="font-bold text-lg text-[#1A1A2E] leading-tight">
                  Trending Categories Right Now
                </h2>
              </div>
              <p className="text-xs text-[#4A4A6A] mt-0.5 font-medium">
                Most popular categories by users this week
              </p>
            </div>
            
            <a 
              href="#categories-grid-anchored"
              className="text-sm text-[#FF5722] font-semibold hover:underline flex items-center gap-1 group select-none cursor-pointer"
            >
              <span>View All Trends</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* 5 Trending Category Cards in Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            
            {/* Card 1: Fashion */}
            <div 
              onClick={() => {
                setSearchQuery('Fashion');
                const el = document.getElementById('categories-grid-anchored');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#E8E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 bg-[#FF6B9D]/15">
                👗
              </div>
              <h3 className="text-sm font-bold text-[#1A1A2E] mt-3">
                Fashion &amp; Lifestyle
              </h3>
              <div className="mt-2.5 inline-flex bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-1 rounded-full items-center gap-1 justify-center">
                <TrendingUp size={11} className="stroke-[3]" />
                <span>+28% this week</span>
              </div>
            </div>

            {/* Card 2: Travel */}
            <div 
              onClick={() => {
                setSearchQuery('Travel');
                const el = document.getElementById('categories-grid-anchored');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#E8E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 bg-[#0EA5E9]/15">
                ✈️
              </div>
              <h3 className="text-sm font-bold text-[#1A1A2E] mt-3">
                Travel
              </h3>
              <div className="mt-2.5 inline-flex bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-1 rounded-full items-center gap-1 justify-center">
                <TrendingUp size={11} className="stroke-[3]" />
                <span>+15% this week</span>
              </div>
            </div>

            {/* Card 3: Electronics */}
            <div 
              onClick={() => {
                setSearchQuery('Electronics');
                const el = document.getElementById('categories-grid-anchored');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#E8E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 bg-[#5B4FBE]/15">
                📱
              </div>
              <h3 className="text-sm font-bold text-[#1A1A2E] mt-3">
                Electronics
              </h3>
              <div className="mt-2.5 inline-flex bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-1 rounded-full items-center gap-1 justify-center">
                <TrendingUp size={11} className="stroke-[3]" />
                <span>+42% this week</span>
              </div>
            </div>

            {/* Card 4: Web Hosting */}
            <div 
              onClick={() => {
                setSearchQuery('Hosting');
                const el = document.getElementById('categories-grid-anchored');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#E8E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 bg-[#FF6B35]/15">
                🖥️
              </div>
              <h3 className="text-sm font-bold text-[#1A1A2E] mt-3">
                Web Hosting
              </h3>
              <div className="mt-2.5 inline-flex bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-1 rounded-full items-center gap-1 justify-center">
                <TrendingUp size={11} className="stroke-[3]" />
                <span>+67% this week</span>
              </div>
            </div>

            {/* Card 5: Food Delivery */}
            <div 
              onClick={() => {
                setSearchQuery('Food');
                const el = document.getElementById('categories-grid-anchored');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-[#E8E8F0] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 bg-[#22C55E]/15">
                ðŸ”
              </div>
              <h3 className="text-sm font-bold text-[#1A1A2E] mt-3">
                Food Delivery
              </h3>
              <div className="mt-2.5 inline-flex bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-1 rounded-full items-center gap-1 justify-center">
                <TrendingUp size={11} className="stroke-[3]" />
                <span>+22% this week</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 3  -  CATEGORY OF THE WEEK SLIDER
          ============================================================================ */}
      <section className="relative w-full overflow-hidden">
        {/* Slider Frame */}
        <div className="w-full relative min-h-[460px] flex items-center">
          
          {/* Loop Slides and Render Current Active Slide */}
          {CATEGORIES_OF_WEEK.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center bg-gradient-to-br ${slide.bgGradient} ${
                  isActive ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
                }`}
              >
                
                {/* Decorative embedded background bubbles */}
                <div className="absolute w-96 h-96 rounded-full bg-white/5 top-[-10%] left-[5%] select-none pointer-events-none" />
                <div className="absolute w-80 h-80 rounded-full bg-white/5 bottom-[-10%] right-[5%] select-none pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20">
                  
                  {/* Left Column (55%) */}
                  <div className="md:col-span-7 flex flex-col items-start text-white">
                    
                    {/* Orange Badge */}
                    <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md select-none">
                      Category of the Week
                    </span>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 leading-tight">
                      {slide.categoryName}
                    </h2>

                    {/* Tagline */}
                    <p className="text-white/90 text-lg md:text-xl font-medium mt-3 max-w-lg leading-relaxed">
                      {slide.tagline}
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="mt-6 space-y-2.5">
                      {slide.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-3 select-none">
                          <CheckCircle size={18} className="text-[#22C55E] fill-white shrink-0" />
                          <span className="text-sm font-semibold text-white">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price deal button and discount showcase row */}
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      <button
                        onClick={() => {
                          setSearchQuery(slide.categoryName);
                          const el = document.getElementById('categories-grid-anchored');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#FF5722] text-white hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] px-8 py-4 rounded-full font-bold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-black/10 cursor-pointer"
                      >
                        <span>Explore {slide.categoryName} Deals</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                  </div>

                  {/* Right Column (45%) */}
                  <div className="hidden md:col-span-5 md:flex justify-center items-center relative">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center relative overflow-hidden w-full max-w-xs shadow-2xl">
                      
                      {/* Gigantic bounce emoji */}
                      <div className="text-8xl select-none py-6 filter drop-shadow-md animate-bounce duration-3000">
                        {slide.illustration}
                      </div>

                      {/* Absolute Discount Badge */}
                      <div className="absolute top-4 right-4 bg-white rounded-2xl p-3.5 shadow-xl text-center select-none rotate-[6deg] border border-[#E8E8F0]">
                        <span className="block text-[9px] text-gray-400 font-extrabold uppercase tracking-wider leading-none">UP TO</span>
                        <span className="block font-black text-2xl text-[#FF5722] my-0.5 leading-none">
                          {slide.discountText.replace('UP TO ', '').replace(' OFF', '')}
                        </span>
                        <span className="block text-[9px] font-extrabold text-[#1A1A2E] leading-none uppercase">OFF</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Left / Right Arrow navigation toggles */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + CATEGORIES_OF_WEEK.length) % CATEGORIES_OF_WEEK.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/15 hover:bg-white/30 text-white rounded-full p-2.5 transition focus:outline-none cursor-pointer"
            aria-label="Previous Slide Button"
          >
            <ChevronLeft size={20} className="stroke-[3]" />
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % CATEGORIES_OF_WEEK.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/15 hover:bg-white/30 text-white rounded-full p-2.5 transition focus:outline-none cursor-pointer"
            aria-label="Next Slide Button"
          >
            <ChevronRight size={20} className="stroke-[3]" />
          </button>

          {/* Dot Indicator Row */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {CATEGORIES_OF_WEEK.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${
                  idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 4  -  ALL CATEGORIES GRID
          ============================================================================ */}
      <section id="categories-grid-anchored" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header row with Title and Toggle Mode Panel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-[#E8E8F0] gap-4">
            <div>
              <h2 className="font-bold text-2xl text-[#1A1A2E] leading-tight select-none">
                All Categories
              </h2>
              {searchQuery && (
                <p className="text-xs text-[#5B4FBE] font-bold mt-1">
                  Filtering by: "{searchQuery}"  -  Found {filteredCategories.length} categories
                </p>
              )}
            </div>

            {/* Grid vs List Layout Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-gray-400 font-extrabold uppercase tracking-wide">
                View as:
              </span>
              
              <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-xl p-1 flex items-center">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all focus:outline-none cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#5B4FBE] shadow-xs'
                      : 'text-gray-400 hover:text-[#1A1A2E]'
                  }`}
                  aria-label="Switch to Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all focus:outline-none cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-white text-[#5B4FBE] shadow-xs'
                      : 'text-gray-400 hover:text-[#1A1A2E]'
                  }`}
                  aria-label="Switch to List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* REALTIME CATEGORIES DATA BOX */}
          {filteredCategories.length > 0 ? (
            viewMode === 'grid' ? (
              
              /* GRID LAYOUT VIEWER (5 Cols) */
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {filteredCategories.map((cat) => {
                  const isFashion = cat.id === 'cat-1';
                  
                  const GridCardContent = (
                    <>
                      {/* Trending Badge Overlay */}
                      {cat.trending && (
                        <div className="absolute top-3 right-3 bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-0.5 select-none animate-pulse">
                          <TrendingUp size={10} className="stroke-[3.5]" />
                          <span>+{cat.trendPercent}%</span>
                        </div>
                      )}

                      {/* Emoji Circle */}
                      <div className="mt-2 text-center">
                        <div 
                          className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 shadow-xs border border-white"
                          style={{ backgroundColor: cat.bgColor }}
                        >
                          {cat.icon}
                        </div>

                        {/* Text block */}
                        <h3 className="font-extrabold text-sm text-[#1A1A2E] text-center mt-3.5 leading-tight tracking-tight group-hover:text-[#5B4FBE] transition-colors">
                          {cat.name}
                        </h3>

                        {/* Stat summary */}
                        <div className="mt-1 flex flex-col items-center">
                          <span className="text-xs text-[#4A4A6A] font-semibold">
                            {cat.offerCount.toLocaleString('en-IN')} Offers
                          </span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                            {cat.brandCount} Brands
                          </span>
                        </div>
                      </div>

                      {/* Orange discount banner and lower interactive link */}
                      <div className="mt-3 text-center">
                        <span className="inline-block text-xs font-black text-[#FF5722] bg-[#FFF2ED] px-3 py-1 rounded-full text-center">
                          {cat.maxDiscount}
                        </span>

                        <div className="mt-3 pt-3 border-t border-[#E8E8F0] flex items-center justify-center gap-1.5 select-none">
                          <span className="text-[11px] font-black text-[#5B4FBE] uppercase tracking-wider">Explore</span>
                          <ArrowRight size={13} className="text-[#5B4FBE] transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </>
                  );

                  if (isFashion) {
                    return (
                      <Link
                        key={cat.id}
                        href="/categories/fashion"
                        className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col justify-between text-center"
                      >
                        {GridCardContent}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        alert(`Exploring coupons for ${cat.name}! Check out the corresponding shops for active promo codes.`);
                      }}
                      className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col justify-between text-center"
                    >
                      {GridCardContent}
                    </div>
                  );
                })}
              </div>

            ) : (

              /* LIST LAYOUT VIEWER */
              <div className="space-y-3.5 max-w-4xl mx-auto">
                {filteredCategories.map((cat) => {
                  const isFashion = cat.id === 'cat-1';

                  const ListCardContent = (
                    <>
                      {/* Left Emoji */}
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shrink-0 border border-white shadow-xs"
                        style={{ backgroundColor: cat.bgColor }}
                      >
                        {cat.icon}
                      </div>

                      {/* Central Area holding textual details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-extrabold text-base text-[#1A1A2E] leading-tight pr-1">
                            {cat.name}
                          </h3>
                          {cat.trending && (
                            <span className="bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black px-2 py-0.5 rounded-full inline-flex items-center gap-0.5 select-none animate-pulse">
                              <TrendingUp size={10} strokeWidth={3.5} />
                              <span>Trending +{cat.trendPercent}%</span>
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#4A4A6A] font-medium mt-1 leading-relaxed text-left">
                          {cat.description}
                        </p>

                        <div className="mt-2.5 flex items-center gap-4 text-gray-400 text-xs">
                          <div className="flex items-center gap-1">
                            <Tag size={12} className="text-gray-400" />
                            <span className="font-semibold text-[#4A4A6A]">{cat.offerCount.toLocaleString('en-IN')} Offers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Store size={12} className="text-gray-400" />
                            <span className="font-semibold text-[#4A4A6A]">{cat.brandCount} Brands</span>
                          </div>
                        </div>
                      </div>

                      {/* Right discount display and Explore Link button */}
                      <div className="shrink-0 flex items-center justify-between sm:justify-end w-full sm:w-auto border-t sm:border-0 border-gray-100 pt-3 sm:pt-0 gap-4">
                        <span className="font-extrabold text-[#FF5722] text-sm bg-orange-50 px-3 py-1 rounded-lg">
                          {cat.maxDiscount}
                        </span>
                        
                        <button 
                          className="bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shrink-0 cursor-pointer"
                          aria-label={`Explore ${cat.name}`}
                        >
                          Explore
                        </button>
                      </div>
                    </>
                  );

                  if (isFashion) {
                    return (
                      <Link
                        key={cat.id}
                        href="/categories/fashion"
                        className="bg-white rounded-2xl border border-[#E8E8F0] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:shadow-md hover:border-[#5B4FBE] transition-all duration-300 group cursor-pointer"
                      >
                        {ListCardContent}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        alert(`Exploring coupons for ${cat.name}! Check out the corresponding shops for active promo codes.`);
                      }}
                      className="bg-white rounded-2xl border border-[#E8E8F0] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:shadow-md hover:border-[#5B4FBE] transition-all duration-300 group cursor-pointer"
                    >
                      {ListCardContent}
                    </div>
                  );
                })}
              </div>

            )
          ) : (
            <div className="py-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 my-4 max-w-md mx-auto">
              <span className="text-4xl">✸</span>
              <h3 className="font-bold text-[#1A1A2E] mt-3">No matching categories found</h3>
              <p className="text-xs text-[#4A4A6A] mt-1 max-w-xs mx-auto">
                No categories match your search. Make sure the keywords are correct or see all categories.
              </p>
              <button
                onClick={handleResetSearch}
                className="mt-4 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#4a3fa8] transition-colors"
              >
                Clear Search &amp; Show All
              </button>
            </div>
          )}

          {/* Centered Outline reset button underneath categories box container */}
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                handleResetSearch();
                alert('Reset categories filter! Scroll down to find more offers.');
              }}
              className="px-6 py-3 border border-[#5B4FBE] text-[#5B4FBE] font-bold text-sm rounded-full bg-white hover:bg-[#F0EEFF] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              View All Categories
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 5  -  TOP BRANDS BY CATEGORY
          ============================================================================ */}
      <section className="bg-white py-14 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-3 border-b border-gray-100 gap-3">
            <div>
              <h2 className="font-bold text-xl text-[#1A1A2E] leading-tight select-none">
                Top Brands By Category
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-0.5">
                The most popular retail chains, services, and online platforms
              </p>
            </div>
            
            <button 
              onClick={() => alert("Browse brands from all categories. Filter by store, category, or deal type.")}
              className="text-sm font-bold text-[#FF5722] hover:underline cursor-pointer"
            >
              View All Brands →
            </button>
          </div>

          {/* 5 columns grid representing brand categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {TOP_BRANDS_DATA.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Category name with small top line */}
                <div>
                  <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-3.5">
                    {group.categoryName}
                  </span>
                  
                  {/* Brand logs circle logos */}
                  <div className="flex flex-wrap items-center gap-2">
                    {group.brands.map((brand, bidx) => (
                      <div
                        key={bidx}
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-black cursor-pointer transition-transform duration-200 hover:scale-115"
                        style={{ backgroundColor: brand.color }}
                        title={brand.name}
                      >
                        {brand.logoLetters}
                      </div>
                    ))}

                    {/* Floating plus indicators */}
                    <div 
                      className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] items-center justify-center font-black rounded-xl px-2.5 py-2 select-none shrink-0"
                      title="See catalog"
                    >
                      +{group.categoryName === 'Fashion' ? '8' : group.categoryName === 'Electronics' ? '6' : group.categoryName === 'Travel' ? '5' : group.categoryName === 'Food' ? '6' : '4'} more
                    </div>
                  </div>
                </div>

                {/* Micro detail line below card */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider select-none">
                  <span>Coupons Verified</span>
                  <span className="text-[#22C55E]">● active</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 6  -  THIS MONTH SAVINGS INSIGHTS
          ============================================================================ */}
      <section className="bg-[#F8F8FF] py-14">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-bold text-2xl text-[#1A1A2E] leading-tight select-none">
                Couponscrew By the Numbers
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-0.5 font-medium">
                The platform stats behind every deal on this page.
              </p>
            </div>
            
            {/* Savings decorative icons */}
            <div className="hidden sm:inline-flex items-center gap-1.5 text-2xl bg-white border border-[#E8E8F0] p-2.5 rounded-2xl shadow-xs select-none">
              <span>💰</span>
              <span>🎯</span>
              <span className="text-xs font-extrabold uppercase text-gray-400 tracking-wider px-1">INSIGHTS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 4 stat cards (60%) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center">
                  <TrendingUp size={20} className="stroke-[3]" />
                </div>
                <div className="font-black text-3xl text-[#5B4FBE] mt-3.5 leading-none">92.4%</div>
                <p className="text-sm font-semibold text-[#4A4A6A] mt-1.5">Coupon Success Rate</p>
                <span className="text-[10px] text-gray-400 block mt-1">Verified and working</span>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FFF2ED] text-[#FF5722] flex items-center justify-center">
                  <Tag size={20} />
                </div>
                <div className="font-black text-3xl text-[#FF5722] mt-3.5 leading-none">10,000+</div>
                <p className="text-sm font-semibold text-[#4A4A6A] mt-1.5">Active Coupons</p>
                <span className="text-[10px] text-gray-400 block mt-1">Verified and live right now</span>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center">
                  <Percent size={20} className="stroke-[3]" />
                </div>
                <div className="font-black text-3xl text-[#22C55E] mt-3.5 leading-none">500+</div>
                <p className="text-sm font-semibold text-[#4A4A6A] mt-1.5">Brand Partners</p>
                <span className="text-[10px] text-gray-400 block mt-1">Across every major category</span>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FEFBE8] text-[#F59E0B] flex items-center justify-center">
                  <Star size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                </div>
                <div className="font-black text-3xl text-[#F59E0B] mt-3.5 leading-none">50,000+</div>
                <p className="text-sm font-semibold text-[#4A4A6A] mt-1.5">Registered Users</p>
                <span className="text-[10px] text-gray-400 block mt-1">And growing</span>
              </div>

            </div>

            {/* Right Decorative Graphic card (40%) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-8 text-center shadow-2xl overflow-hidden text-white flex flex-col items-center justify-center min-h-[300px]">
                
                {/* Internal CSS float objects */}
                <div className="absolute w-64 h-64 rounded-full bg-white/5 top-[-40px] left-[-40px] pointer-events-none select-none" />
                <div className="absolute w-48 h-48 rounded-full bg-white/5 bottom-[-20px] right-[-20px] pointer-events-none select-none" />

                {/* Big decorative stacked cash emoji */}
                <span className="text-7xl filter drop-shadow-lg select-none mb-4 animate-bounce duration-3000" role="img" aria-label="money stack">💰</span>
                
                <h3 className="font-black text-3xl">50,000+</h3>
                <p className="text-xs text-indigo-100 font-extrabold uppercase tracking-wider mt-1 select-none">
                  Shoppers Using Couponscrew
                </p>
                <p className="text-sm text-indigo-50/80 leading-relaxed max-w-xs mt-3">
                  Every deal on this page is verified before it goes live. We test the codes so you don&apos;t have to.
                </p>

                {/* Small floating info label boxes */}
                <div className="absolute top-8 left-4 bg-white/10 backdrop-blur-md rounded-xl p-2 text-left border border-white/10 text-[10px] font-black tracking-wide">
                  🔥 92.4% Success Rate
                </div>

                <div className="absolute bottom-8 right-4 bg-white/10 backdrop-blur-md rounded-xl p-2 text-left border border-white/10 text-[10px] font-black tracking-wide">
                  ⭐️ 10,000+ Coupons
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 7  -  SHOP BY LIFESTYLE
          ============================================================================ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Header titles */}
          <div>
            <h2 className="font-bold text-2xl text-[#1A1A2E] leading-tight select-none">
              Shop By Lifestyle
            </h2>
            <p className="text-sm text-[#4A4A6A] mt-1 font-medium">
              Find categories that match your lifestyle
            </p>
          </div>

          {/* Row container holding scroll list with offset */}
          <div className="mt-8 relative flex items-center">
            
            {/* Scrollable Container with horizontal flex row */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto no-scrollbar pb-4 w-full scroll-smooth select-none"
            >
              {LIFESTYLE_PERSONAS.map((persona) => (
                <div
                  key={persona.id}
                  onClick={() => {
                    setSearchQuery(persona.categories[0]);
                    const el = document.getElementById('categories-grid-anchored');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white rounded-3xl border border-[#E8E8F0] p-6 text-center w-[220px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex-shrink-0"
                >
                  
                  {/* Persona circular emoji box */}
                  <div 
                    className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-md border-4 border-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: persona.bgColor }}
                  >
                    {persona.emoji}
                  </div>

                  <h3 className="font-extrabold text-[#1A1A2E] text-base mt-4 leading-tight">
                    {persona.name}
                  </h3>

                  <p className="text-[11px] text-[#4A4A6A] mt-2 leading-relaxed min-h-[30px] line-clamp-2">
                    {persona.description}
                  </p>

                  {/* Included tags pill row */}
                  <div className="mt-3.5 flex flex-wrap justify-center gap-1">
                    {persona.categories.map((cat, cidx) => (
                      <span
                        key={cidx}
                        className="bg-[#F8F8FF] text-gray-400 font-semibold text-[9px] px-2 py-0.5 rounded-full border border-[#E8E8F0]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Tiny trigger action text */}
                  <div 
                    className="mt-4 inline-flex items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wider"
                    style={{ color: persona.color }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>

                </div>
              ))}
            </div>

            {/* Scroll right navigation button */}
            <button
              onClick={scrollLifestyleRight}
              className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white p-3 rounded-full shadow-lg transition-transform focus:outline-none cursor-pointer z-20 shrink-0 hover:scale-110 active:scale-95"
              aria-label="Scroll Lifestyle Right Button"
            >
              <ChevronRight size={18} className="stroke-[3.5]" />
            </button>

          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 8  -  NEWSLETTER BANNER
          ============================================================================ */}
      <section className="bg-linear-to-br from-[#5B4FBE] to-[#3730A3] py-16 relative overflow-hidden text-white">
        
        {/* Subtle decorative vector bubbles */}
        <div className="absolute w-64 h-64 rounded-full bg-white/5 top-[-10%] left-[-10%] select-none pointer-events-none" />
        <div className="absolute w-80 h-80 rounded-full bg-white/5 bottom-[-10%] right-[-10%] select-none pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column (Illustration element) */}
          <div className="hidden md:col-span-3 lg:flex justify-center items-center relative select-none">
            <div className="text-center relative">
              <span className="text-8xl filter drop-shadow-xl inline-block rotate-[-12deg]" role="img" aria-label="gift box">🎁</span>
              <span className="absolute top-1 right-2 text-2xl animate-ping text-yellow-300">✨</span>
              <span className="absolute bottom-1.5 left-2 text-base animate-bounce text-orange-400">🎁</span>
            </div>
          </div>

          {/* Center Column (Core info) */}
          <div className="col-span-1 md:col-span-12 lg:col-span-6 text-center flex flex-col justify-center items-center">
            
            {/* Small mail layout block icon */}
            <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md mb-4 flex items-center justify-center shrink-0">
              <Mail size={32} className="text-white" />
            </div>

            <h2 className="font-extrabold text-3xl text-white leading-tight">
              Never Miss a Deal!
            </h2>
            
            <p className="text-white/70 text-base mt-2 max-w-md mx-auto leading-relaxed">
              Get the latest coupons &amp; offers straight to your inbox. Trusted by 50,000+ shoppers.
            </p>

            {/* Email + Subscribe layout row form */}
            <div className="w-full max-w-md mt-6 flex overflow-hidden rounded-full border border-white/20 shadow-lg bg-white p-1 focus-within:ring-2 focus-within:ring-[#FF5722]/40 transition-all">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-0 text-[#1A1A2E] px-4.5 py-2.5 text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400 placeholder:font-medium"
              />
              <button
                onClick={() => alert("You're in. We'll send you the best deals as soon as they go live.")}
                className="bg-[#FF5722] hover:bg-orange-500 active:scale-[0.98] transition-all text-white px-7 py-3 rounded-full font-bold text-sm leading-none shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <p className="text-white/45 text-xs mt-3.5 select-none font-medium">
              No spam. Unsubscribe anytime.
            </p>

          </div>

          {/* Right Column (Illustration element) */}
          <div className="hidden md:col-span-3 lg:flex justify-center items-center relative select-none">
            <div className="text-center relative">
              <span className="text-8xl filter drop-shadow-xl inline-block rotate-[12deg]" role="img" aria-label="money bag">💰</span>
              <span className="absolute top-2 left-1 text-2xl animate-spin text-green-300">🪙</span>
              <span className="absolute bottom-2 right-1 text-xl animate-bounce text-yellow-300">🪙</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 9  -  TRUST BADGES STRIP
          ============================================================================ */}
      <section className="bg-[#F0EEFF] border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tightly coupled 4 badge items in Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="flex gap-3.5 items-start">
              <div className="bg-white p-2.5 rounded-xl text-[#5B4FBE] shrink-0 shadow-xs border border-indigo-100">
                <ShieldCheck size={20} className="stroke-[3.5]" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight">
                  100% Verified Deals
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-normal">
                  Manually checked &amp; updated every day
                </p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <div className="bg-white p-2.5 rounded-xl text-[#FF5722] shrink-0 shadow-xs border border-orange-100">
                <Tag size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight">
                  Best Prices
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-normal">
                  We compare, you save more on top brands
                </p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <div className="bg-white p-2.5 rounded-xl text-[#22C55E] shrink-0 shadow-xs border border-emerald-100">
                <RefreshCw size={20} className="stroke-[3.5]" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight">
                  Easy Returns
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-normal">
                  Hassle-free return policy across partners
                </p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <div className="bg-white p-2.5 rounded-xl text-[#F59E0B] shrink-0 shadow-xs border border-amber-100">
                <Lock size={20} className="stroke-[3.5]" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight">
                  Secure Payments
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-normal">
                  100% safe &amp; secure checkout guaranteed
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

        {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
        <div className="lg:col-span-7 space-y-10">

          {/* ARTICLE BLOCK 1 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Category Overview</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Shop by Category — Find Deals Across Every Section
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Not every shopper knows exactly which store they want. But almost every shopper knows what they want to buy.
              </p>
              <p>
                That is exactly what Couponscrew&apos;s Categories page is built for. Instead of searching by brand or store, you start with what you are shopping for — and Couponscrew shows you every active deal, coupon code, and discount available across that entire category, from every relevant brand, all in one place.
              </p>
              <p>
                Looking to upgrade your phone? Head to Mobiles & Tablets and see deals from Amazon, Flipkart, Samsung, OnePlus, and more — all on a single page. Want to refresh your wardrobe? Open Fashion & Clothing and browse active discounts from Myntra, AJIO, Meesho, and dozens of other fashion platforms simultaneously.
              </p>
              <p>
                Right now, Couponscrew covers deals across major categories that shoppers spend on every day. And that is just the beginning. We are continuously adding new categories as the platform grows — from niche interest segments to deal categories that no other coupon platform currently covers. Compared to other discount code sites, this breadth is one of the things that sets Couponscrew apart.
              </p>
              <p>
                Bookmark this page. Every time we add a new category, it appears here first.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Hub Mechanics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How Category Pages Work on Couponscrew
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Every category on this page is not just a label — it is a fully maintained deal hub. That is the standard the best coupon code sites are judged by. Here is what you get when you click into any category on Couponscrew.
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All active deals in one view.</strong> A category page pulls together every live coupon code, discount offer, cashback deal, and product deal available within that category — across all relevant stores and brands simultaneously. You do not need to visit ten different store pages to compare. One category page does that work for you.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Subcategory filtering.</strong> Major categories contain subcategories that let you drill down further. Electronics contains subcategories like Earbuds, Smartwatches, Laptops, and Cameras. Fashion contains Men, Women, Kids, Footwear, and Accessories. The deeper you go, the more specific and relevant the deals become.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Store tags on every deal.</strong> Every deal within a category shows which store it is from — so you can instantly compare what Amazon is offering versus what Flipkart is offering for the same type of product. Cross-store comparison within a single category is one of the most useful features Couponscrew offers.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Deals updated in real time.</strong> Categories are not static pages. As new deals go live within a category, they appear immediately. As deals expire, they are removed. The category page you are viewing right now reflects the current deal landscape — not what was available last week.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New subcategories added regularly.</strong> As Couponscrew expands, existing categories will grow deeper with new subcategories. A Beauty category that starts with Skincare and Haircare will eventually include Fragrance, Men&apos;s Grooming, Organic Beauty, and more. Every expansion gets added to the relevant category page automatically.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Directory Indices</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Current Categories on Couponscrew
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Here is a look at the major categories currently live on Couponscrew, along with what kinds of deals and brands you will find within each:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Smartphone className="w-4 h-4 text-[#FF9900]" />,
                  title: "Mobiles & Tablets",
                  body: "Deals on smartphones, basic phones, tablets, and accessories from Amazon, Flipkart, Samsung, Apple, OnePlus, Realme, Xiaomi, and Vivo. This is one of the highest-traffic categories on Couponscrew — and one where deals can save you significantly on a single purchase."
                },
                {
                  icon: <Laptop className="w-4 h-4 text-[#2874F0]" />,
                  title: "Laptops & Computers",
                  body: "Laptop deals from Dell, HP, Lenovo, Asus, Apple, and Acer. Desktop computers, monitors, keyboards, mice, and peripheral accessories. Deals here tend to run deep during back-to-school season, festive sales, and year-end clearances."
                },
                {
                  icon: <ShoppingBag className="w-4 h-4 text-[#10B981]" />,
                  title: "Electronics & Gadgets",
                  body: "Earbuds, headphones, smartwatches, speakers, cameras, smart TVs, streaming devices, gaming consoles, and home theatre systems. Brands like boAt, Sony, JBL, Samsung, LG, Bose, and Noise feature regularly with significant markdowns."
                },
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Fashion & Clothing",
                  body: "Men's and women's clothing, ethnic wear, activewear, footwear, bags, belts, sunglasses, and watches from Myntra, AJIO, Tata CLiQ, Meesho, H&M, Zara, Nike, Adidas, and Puma. Fashion is the largest category by deal volume on Couponscrew."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FC2779]" />,
                  title: "Beauty & Personal Care",
                  body: "Skincare, haircare, makeup, fragrances, grooming, and wellness products from Nykaa, Purplle, Mamaearth, Plum, Lakme, L'Oreal, The Man Company, and Beardo. Beauty deals frequently include combo offers, gift-with-purchase promotions, and app-exclusive discounts."
                },
                {
                  icon: <Home className="w-4 h-4 text-[#8B5CF6]" />,
                  title: "Home & Kitchen",
                  body: "Cookware, kitchen appliances, bedding, furniture, storage, home decor, and cleaning products from Prestige, Philips, Bajaj, Milton, Pepperfry, IKEA, Urban Ladder, and Wakefit. Home category deals are especially strong during festive seasons and new collection launches."
                },
                {
                  icon: <ShoppingBag className="w-4 h-4 text-[#FC8019]" />,
                  title: "Food & Grocery",
                  body: "Grocery delivery, fresh produce, packaged foods, health foods, and beverages from BigBasket, Blinkit, Zepto, Dunzo, and Amazon Fresh. Coupon codes in this category refresh multiple times a day — making it one of the most actively updated categories on the platform."
                },
                {
                  icon: <Utensils className="w-4 h-4 text-[#EF4444]" />,
                  title: "Food Delivery",
                  body: "Restaurant meal deals, free delivery offers, and app-exclusive codes from Zomato and Swiggy. One of the most searched categories on Couponscrew — because there is almost always a working promo code available for your next order."
                },
                {
                  icon: <Plane className="w-4 h-4 text-[#0084FF]" />,
                  title: "Travel & Stays",
                  body: "Flight discounts, hotel cashbacks, bus booking offers, train ticket deals, and holiday package promotions from MakeMyTrip, Goibibo, EaseMyTrip, OYO, Airbnb India, RedBus, Cleartrip, and IRCTC. Travel deals are time-sensitive and high in value — always check this category before booking anything."
                },
                {
                  icon: <Activity className="w-4 h-4 text-[#34D399]" />,
                  title: "Health & Fitness",
                  body: "Gym memberships, fitness equipment, sportswear, supplements, and health monitoring devices from Cult.fit, Decathlon, HealthKart, MuscleBlaze, Nivia, and Cosco. This category sees peak deal activity around January and pre-summer months."
                },
                {
                  icon: <HeartPulse className="w-4 h-4 text-[#EF4444]" />,
                  title: "Pharmacy & Medicines",
                  body: "Prescription medicines, OTC products, health supplements, and baby care from PharmEasy, 1mg, Netmeds, and Apollo Pharmacy. Deals here are among the most practically useful on the platform — reducing the cost of everyday healthcare purchases."
                },
                {
                  icon: <BookOpen className="w-4 h-4 text-[#6366F1]" />,
                  title: "EdTech & Online Courses",
                  body: "Course discounts and subscription deals from Udemy, Unacademy, Byju's, Coursera, and Skillshare. Annual subscription deals in this category can represent significant savings — making it worth checking before renewing any learning platform subscription."
                },
                {
                  icon: <Tv className="w-4 h-4 text-[#EC4899]" />,
                  title: "OTT & Entertainment",
                  body: "Subscription deals on Netflix, Amazon Prime, Disney+ Hotstar, SonyLIV, and Spotify India. Introductory offers, annual plan discounts, and bundle deals tracked and listed as they go live."
                },
                {
                  icon: <Baby className="w-4 h-4 text-[#F59E0B]" />,
                  title: "Baby & Kids",
                  body: "Baby clothing, toys, strollers, feeding products, and nursery furniture from Firstcry, Amazon Baby, Hopscotch, and Mothercare India. Deals in this category run frequently — especially during festive seasons and back-to-school periods."
                },
                {
                  icon: <Footprints className="w-4 h-4 text-[#14B8A6]" />,
                  title: "Pets",
                  body: "Pet food, accessories, grooming products, and health supplements from Heads Up For Tails, Supertails, Amazon Pets, and PetKart. The pet care market is growing rapidly and Couponscrew tracks deals in this space as it expands."
                }
              ].map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-50 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#4A4A6A] italic leading-normal">
              More categories are being added continuously. Check back regularly to see what is new.
            </p>
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Usage Blueprint</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use a Category Page on Couponscrew
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Getting to the right deal through a category page is fast. Here is how it works:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Pick your category", desc: "Click on any category tile on this page. You will be taken to that category's dedicated deal page on Couponscrew." },
                  { step: "2", title: "Browse or filter", desc: "On the category page, use subcategory filters to narrow down further. Sort deals by newest, highest discount, or ending soon depending on what matters most to you right now." },
                  { step: "3", title: "Compare across stores", desc: "Use the store tag on each deal card to compare what different retailers are offering within the same category. Pick the deal from the store that suits you best." },
                  { step: "4", title: "Reveal your deal", desc: "Click \"Get Deal\" or \"Show Code\" on the deal card. The coupon code will appear and the relevant store will open in a new tab." },
                  { step: "5", title: "Apply and save", desc: "Shop on the retailer's site, add your items to cart, and apply the code at checkout. Confirm your discounted total before placing the order." },
                  { step: "6", title: "Stack if possible", desc: "Check whether your bank card has an active cashback offer with the retailer. Combining a category deal from Couponscrew with a bank offer gives you the maximum possible saving on any purchase." }
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
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips for Getting Maximum Value From Category Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Start with the category, not the store.</strong> Most shoppers go directly to Amazon or Myntra out of habit. Going to the category page on Couponscrew first means you see deals from all relevant stores simultaneously — and often find a better deal on a store you would not have thought to check. That cross-store view is what the best coupon code websites offer.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use subcategory filters to reduce noise.</strong> A broad category like Electronics contains thousands of deals. Filtering to Earbuds or Smartwatches immediately narrows the list to what is actually relevant to you — saving time and making comparison faster.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check ending soon deals in your category first.</strong> Within any category, deals marked &quot;Ending Soon&quot; are expiring within hours. If something in that list matches what you need, prioritise it over longer-running deals — the savings window is closing.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Explore adjacent categories.</strong> If you are shopping for fitness gear, also check Health & Fitness alongside Sports — some brands cross-list deals across both. Couponscrew&apos;s category structure is built to help you discover deals you would not have found through a single-store search.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bookmark the categories you shop most.</strong> If you order food regularly, bookmark the Food Delivery category page. If you shop fashion frequently, bookmark Fashion & Clothing. Returning directly to your most-used category page is the fastest way to grab a deal before checkout every time.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 6 - FAQ SECTION */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "How many categories does Couponscrew currently have?", a: "All the major ones, and more being added. Fashion, electronics, food delivery, travel, beauty, home, health, entertainment, education — plus niche categories being added as the platform grows. Every new one appears on this page first." },
                { q: "Will more categories be added over time?", a: "Yes. Couponscrew's roadmap includes niche categories and subcategory expansions. If there is a category you want covered, hit the Contact page and suggest it." },
                { q: "Can I find deals from multiple stores within one category?", a: "That is the whole point. Every category page aggregates deals from all relevant stores — so you compare Amazon vs Flipkart vs Myntra without opening three tabs." },
                { q: "Are category pages updated in real time?", a: "Yes. Deals go live as they are added, and expire as they end. What you see is what is actually available right now." },
                { q: "What if I cannot find a category I am looking for?", a: "Search by name or keyword using the bar at the top. If it does not exist yet, use the Contact page to request it. We add new categories based on what users ask for." },
                { q: "Do category pages work on mobile?", a: "Yes — fully. Every filter, deal card, and coupon reveal works on smartphone. Most deal-finding happens on mobile and the pages are built for it." }
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-extrabold text-[#1A1A2E] mb-1.5">{faq.q}</h3>
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 7 - FOOTER/CALL TO ACTION */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Alignment</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              Every Category. Every Deal. One Platform.
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                The way people shop online has changed. Nobody stays loyal to one store — they shop across Amazon, Flipkart, Myntra, Zomato, MakeMyTrip, and dozens of other platforms depending on what they need that day.
              </p>
              <p>
                Couponscrew&apos;s Categories page is built for exactly that behaviour. Most discount code sites are built around stores, not shopping intent. It does not ask you to remember which store has the best deal today. It just asks what you want to buy — and then shows you the best deal for it, from wherever it happens to be available.
              </p>
              <p>
                Every category. Every deal. Verified and updated daily.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Pick a category. Find your deal. We already verified it.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Matrix Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              How This Page Works
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">What&apos;s powering the categories you see here.</p>
            <div className="space-y-2">
              {[
                { layer: "Active Hubs", val: "Multi-Store Views" },
                { layer: "Refining Tools", val: "Subcategory Sets" },
                { layer: "Traceability", val: "Retailer Tags" },
                { layer: "Audit Frequency", val: "Real-Time Sync" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Every Category. Every Store.</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Interface Controls */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#22C55E]" />
              Browse Smarter
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Context Layouts
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Every category has subcategories. Use them to filter down from Electronics to Earbuds, or Fashion to Women&apos;s Footwear — faster than browsing a full feed.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#FF9900]" />
                  Sync Filters
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Sort by newest, highest discount, or ending soon. Filter by store. The right deal surfaces in seconds.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Highlight Label */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Device Support</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Mobile Optimized</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Filters, deal cards, and coupon reveals all work on phone. Most shoppers find deals on mobile — the page is built for it.
            </p>
          </div>

        </div>

      </div>
    </section>
      </main>

      <Footer />
    </div>
  );
}

