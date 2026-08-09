'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Flame,
  Store,
  Zap,
  Package,
  Award,
  IndianRupee,
  Clock,
  Shield,
  CheckCircle,
  ShoppingBag,
  Check,
  Bell,
  Sparkles,
  Percent,
  TrendingUp,
  HelpCircle, 
  Smartphone, 
  Shirt, 
  Utensils, 
  Plane, 
  Home, 
  Activity, 
  BookOpen
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ==========================================
// TYPESCRIPT INTERFACES
// ==========================================
export interface BrandDeal {
  id: string;
  brandName: string;
  brandColor: string;
  brandBgColor: string;
  category: string;
  logoLetter: string;
  tagline: string;
  discountPercent: number;
  dealType: 'code' | 'deal';
  code?: string;
  originalPrice: number;
  dealPrice: number;
  totalSavings: number;
  claimedPercent: number;
  verifiedMinsAgo: number;
  isHot: boolean;
  isFeatured: boolean;
}

export interface ProductDeal {
  id: string;
  brandName: string;
  brandColor: string;
  category: string;
  productName: string;
  productImage: string;
  discountPercent: number;
  originalPrice: number;
  dealPrice: number;
  totalSavings: number;
  claimedPercent: number;
  verifiedMinsAgo: number;
  isHot: boolean;
  isFeatured: boolean;
  dealType: 'code' | 'deal';
  code?: string;
  expiresInHours: number;
}

export interface HeroSlide {
  id: string;
  src: string;
  alt: string;
}

export interface CountdownTimer {
  hours: number;
  minutes: number;
  seconds: number;
}

// ==========================================
// HARDCODED COMPREHENSIVE DATA
// ==========================================
const HERO_SLIDES: HeroSlide[] = [
  { id: 'slide-1', src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783245275/deals-4_dq4bh8.webp', alt: 'Deals Slide 1' },
  { id: 'slide-2', src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783245292/deals-3_rwc1gy.webp', alt: 'Deals Slide 2' },
  { id: 'slide-3', src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783245293/deals-2_cm1qre.webp', alt: 'Deals Slide 3' },
  { id: 'slide-4', src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783245262/deals-1_nyf0uw.png', alt: 'Deals Slide 4' },
];

const BRAND_DEALS_DATA: BrandDeal[] = [
  {
    id: 'brand-1',
    brandName: 'Pepperfry',
    category: 'Home & Kitchen',
    brandColor: '#5B4FBE',
    brandBgColor: '#F0EEFF',
    logoLetter: 'PP',
    tagline: 'Get 50% off on Bonton Computer Table in Wenge Finish',
    discountPercent: 50,
    dealType: 'deal',
    originalPrice: 12000,
    dealPrice: 6000,
    totalSavings: 6000,
    claimedPercent: 84,
    verifiedMinsAgo: 5,
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'brand-2',
    brandName: 'Pepperfry',
    category: 'Home & Kitchen',
    brandColor: '#5B4FBE',
    brandBgColor: '#F0EEFF',
    logoLetter: 'PP',
    tagline: 'Get Ethnic Motif Multicolor PVC Placemats Set of 6 @ ₹1',
    discountPercent: 99,
    dealType: 'deal',
    originalPrice: 499,
    dealPrice: 1,
    totalSavings: 498,
    claimedPercent: 91,
    verifiedMinsAgo: 8,
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'brand-3',
    brandName: 'Pepperfry',
    category: 'Home & Kitchen',
    brandColor: '#5B4FBE',
    brandBgColor: '#F0EEFF',
    logoLetter: 'PP',
    tagline: 'Get 35% off on Yuko TV Console for TVs up to 55"',
    discountPercent: 35,
    dealType: 'deal',
    originalPrice: 18000,
    dealPrice: 11700,
    totalSavings: 6300,
    claimedPercent: 72,
    verifiedMinsAgo: 12,
    isHot: false,
    isFeatured: true,
  },
  {
    id: 'brand-4',
    brandName: 'Pepperfry',
    category: 'Electronics',
    brandColor: '#5B4FBE',
    brandBgColor: '#F0EEFF',
    logoLetter: 'PP',
    tagline: 'Get 75% off on Portable Electronic Digital Weight Machine',
    discountPercent: 75,
    dealType: 'deal',
    originalPrice: 2000,
    dealPrice: 500,
    totalSavings: 1500,
    claimedPercent: 68,
    verifiedMinsAgo: 20,
    isHot: true,
    isFeatured: true,
  },
];

const PRODUCT_DEALS_DATA: ProductDeal[] = [
  {
    id: 'prod-1',
    brandName: 'Acnos',
    brandColor: '#5B4FBE',
    category: 'Watches & Accessories',
    productName: "Acnos Premium Girl's Heart Shape Bangle Analog Watch, Pack of 2",
    productImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162305/41oui_xq1PL_zndlwz.jpg',
    discountPercent: 85,
    originalPrice: 1999,
    dealPrice: 299,
    totalSavings: 1700,
    claimedPercent: 84,
    verifiedMinsAgo: 5,
    isHot: true,
    isFeatured: true,
    dealType: 'deal',
    expiresInHours: 12,
  },
  {
    id: 'prod-2',
    brandName: 'Minimalist',
    brandColor: '#5B4FBE',
    category: 'Beauty & Personal Care',
    productName: 'Minimalist Anti-Pigmentation Kit, Face Wash, Serum & Sunscreen Combo',
    productImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162150/51VX_QeZjRL._SY450__mhxhvl.jpg',
    discountPercent: 12,
    originalPrice: 1299,
    dealPrice: 1147,
    totalSavings: 152,
    claimedPercent: 91,
    verifiedMinsAgo: 8,
    isHot: true,
    isFeatured: true,
    dealType: 'deal',
    expiresInHours: 8,
  },
  {
    id: 'prod-3',
    brandName: 'DEELMO',
    brandColor: '#5B4FBE',
    category: 'Fashion & Clothing',
    productName: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
    productImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/71Qhqwnx4JL._SY741__ljgmwm.jpg',
    discountPercent: 78,
    originalPrice: 2199,
    dealPrice: 479,
    totalSavings: 1720,
    claimedPercent: 72,
    verifiedMinsAgo: 12,
    isHot: false,
    isFeatured: true,
    dealType: 'deal',
    expiresInHours: 24,
  },
  {
    id: 'prod-4',
    brandName: 'Desidiya',
    brandColor: '#5B4FBE',
    category: 'Home & Kitchen',
    productName: 'Desidiya Moon Crystal Ball Night Light with Wooden Base',
    productImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162551/61XWYda0HoL._SL1500__klyexw.jpg',
    discountPercent: 90,
    originalPrice: 1999,
    dealPrice: 197,
    totalSavings: 1802,
    claimedPercent: 68,
    verifiedMinsAgo: 20,
    isHot: true,
    isFeatured: true,
    dealType: 'deal',
    expiresInHours: 16,
  },
];

export default function Deals() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [currentSlide, setCurrentSlide] = useState(0);


  const [productTimers, setProductTimers] = useState<Record<string, number>>(() => {
    const initialTimers: Record<string, number> = {};
    PRODUCT_DEALS_DATA.forEach((prod) => {
      initialTimers[prod.id] = prod.expiresInHours * 3600;
    });
    return initialTimers;
  });

  const [spotlightTimer, setSpotlightTimer] = useState<number>(2 * 3600 + 34 * 60);

  // Brand Grid State
  const [brandCategory, setBrandCategory] = useState<string>('all');
  const [brandSort, setBrandSort] = useState<string>('default');

  // Product Grid State
  const [productCategory, setProductCategory] = useState<string>('all');
  const [productSort, setProductSort] = useState<string>('default');

  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [claimedDeals, setClaimedDeals] = useState<Record<string, boolean>>({});

  // ==========================================
  // TIMERS TICKING HOOK
  // ==========================================
  useEffect(() => {
    const timerInterval = setInterval(() => {
      // 1. Decrement product timers (Loop when hits 0)
      setProductTimers((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          if (next[key] <= 0) {
            const originalProd = PRODUCT_DEALS_DATA.find((p) => p.id === key);
            next[key] = originalProd ? originalProd.expiresInHours * 3600 - 1 : 24 * 3600 - 1;
          } else {
            next[key] -= 1;
          }
        });
        return next;
      });

      // 3. Decrement spotlight timer (Loop back when hits 0)
      setSpotlightTimer((prev) => (prev <= 0 ? 2 * 3600 + 34 * 60 : prev - 1));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // ==========================================
  // HERO SLIDER AUTOPLAY HOOK
  // ==========================================
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]); // Reset autoplay timer when manually navigated index changes

  // ==========================================
  // GRID RESOLUTION / FILTER & SORT LOGIC
  // ==========================================
  const sortedBrandDeals = useMemo(() => {
    let result = [...BRAND_DEALS_DATA];

    // Filter by Category
    if (brandCategory !== 'all') {
      result = result.filter(
        (deal) => deal.category.toLowerCase() === brandCategory.toLowerCase()
      );
    }

    // Sort by selection
    if (brandSort === 'discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (brandSort === 'newest') {
      result.sort((a, b) => a.verifiedMinsAgo - b.verifiedMinsAgo); 
    } else if (brandSort === 'popular') {
      result.sort((a, b) => b.claimedPercent - a.claimedPercent);
    }

    return result;
  }, [brandCategory, brandSort]);

  const sortedProductDeals = useMemo(() => {
    let result = [...PRODUCT_DEALS_DATA];

    // Filter by Category
    if (productCategory !== 'all') {
      result = result.filter(
        (prod) => prod.category.toLowerCase() === productCategory.toLowerCase()
      );
    }

    // Sort by selection
    if (productSort === 'discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (productSort === 'newest') {
      result.sort((a, b) => a.verifiedMinsAgo - b.verifiedMinsAgo);
    } else if (productSort === 'popular') {
      result.sort((a, b) => b.claimedPercent - a.claimedPercent);
    }

    return result;
  }, [productCategory, productSort]);

  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  const formatTime = (totalSeconds: number): string => {
    if (totalSeconds < 0) return '00:00:00';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds].map((v) => v.toString().padStart(2, '0')).join(':');
  };

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setCopiedStates((prev) => ({ ...prev, [id]: false })), 3000);
  };

  const handleClaimDeal = (id: string) => {
    setClaimedDeals((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setClaimedDeals((prev) => ({ ...prev, [id]: false })), 4000);
  };

  // Convert Spotlight seconds into distinct pieces
  const spotlightHoursString = Math.floor(spotlightTimer / 3600).toString().padStart(2, '0');
  const spotlightMinsString = Math.floor((spotlightTimer % 3600) / 60).toString().padStart(2, '0');
  const spotlightSecsString = (spotlightTimer % 60).toString().padStart(2, '0');

  // Categories list options
  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    { label: 'Fashion', value: 'Fashion' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Food & Grocery', value: 'Food & Grocery' },
    { label: 'Travel', value: 'Travel' },
    { label: 'Beauty', value: 'Beauty' },
    { label: 'Web Hosting', value: 'Web Hosting' },
    { label: 'Education', value: 'Education' }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* ========================================================
          SECTION 1  -  HERO SLIDER
          ======================================================== */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[16/6] md:aspect-[16/5]">
          {HERO_SLIDES.map((slide, slideIdx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                slideIdx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* LEFT / RIGHT NAV ARROWS */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5B4FBE] p-3 rounded-full shadow-xl hover:scale-110 active:scale-90 transition-all z-20 cursor-pointer flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5B4FBE] p-3 rounded-full shadow-xl hover:scale-110 active:scale-90 transition-all z-20 cursor-pointer flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* DOTS INDICATORS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#FF5722]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 2  -  LIVE STATS BAR
          ======================================================== */}
      <section className="relative z-20 px-6 max-w-7xl mx-auto w-full -mt-4">
        <div className="bg-white rounded-2xl border border-[#E8E8F0] shadow-lg py-6 px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5 group justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <Flame className="w-5.5 h-5.5 text-[#EF4444]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-[#1A1A2E]">247</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
              </div>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1">Deals Live Today</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5 group justify-center border-l lg:border-l border-gray-100 pl-0 md:pl-4">
            <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#FF5722]" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">Every Hour</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Last Updated</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5 group justify-center border-l border-gray-100 pl-4 col-span-2 md:col-span-1">
            <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-[#22C55E]" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-[#22C55E] block leading-none">92.4%</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Coupon Success Rate</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5 group justify-center border-l border-gray-100 pl-4">
            <div className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
              <Store className="w-5 h-5 text-[#5B4FBE]" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">85 Brands</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Active Partners</span>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="flex items-center gap-3.5 group justify-center border-l border-gray-100 pl-4 col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">10,000+</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Coupons Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 3  -  BRAND DEALS GRID
          ======================================================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* BRAND GRID HEADER ROW */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] flex items-center justify-center shrink-0">
                <Store className="w-6 h-6 text-[#5B4FBE]" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-[#1A1A2E] flex items-center gap-2">
                  🏪 Top Brand Deals Today
                </h3>
                <p className="text-[#4A4A6A] text-sm mt-1">
                  Exclusive offers from the brands people shop the most
                </p>
              </div>
            </div>

            {/* SEPARATE Filters for Brand Deals */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Dropdown */}
              <select
                value={brandCategory}
                onChange={(e) => setBrandCategory(e.target.value)}
                aria-label="Filter brand deals by category"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E] shadow-xs"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Sort Dropdown */}
              <select
                value={brandSort}
                onChange={(e) => setBrandSort(e.target.value)}
                aria-label="Sort brand deals"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E] shadow-xs"
              >
                <option value="default">Sort By</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* BRAND CARDS LISTING GRID */}
          {sortedBrandDeals.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <Store className="w-16 h-16 text-gray-300 mx-auto" />
              <h4 className="font-bold text-[#1A1A2E] text-lg">No brand deals found</h4>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                Try clearing your category dropdown filter or choosing another option to explore exciting brands.
              </p>
              <button
                onClick={() => {
                  setBrandCategory('all');
                  setBrandSort('default');
                }}
                className="bg-[#5B4FBE] text-white font-bold px-6 py-2.5 rounded-full text-xs"
              >
                Reset Brand Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
              {sortedBrandDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* TOP SECTION */}
                  <div className="p-5 flex-grow text-left">
                    <div className="flex items-center justify-between gap-2.5">
                      {/* Logo circle */}
                      <div className="w-10 h-10 rounded-full bg-white border border-[#E8E8F0] overflow-hidden shrink-0 shadow-xs flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg"
                          alt={deal.brandName}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Hot Flame Badge if isHot */}
                      {deal.isHot && (
                        <span className="bg-[#EF4444] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs uppercase tracking-wider animate-pulse">
                          <Flame className="w-3 h-3 text-[#FFD700]" />
                          <span>HOT</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-[#1A1A2E] text-base mt-4 block leading-tight truncate">
                      {deal.brandName}
                    </h4>
                    <p className="text-xs text-[#4A4A6A] mt-1 line-clamp-1">
                      {deal.tagline}
                    </p>

                    {/* Styled Discount Accent */}
                    <div
                      className="inline-block px-3 py-1.5 rounded-lg font-black text-xl mt-4 select-none"
                      style={{
                        backgroundColor: deal.brandBgColor,
                        color: deal.brandColor
                      }}
                    >
                      {deal.discountPercent}% OFF
                    </div>

                    {/* Savings line */}
                    <div className="flex items-center gap-1 text-[#22C55E] font-bold text-xs sm:text-sm mt-3.5">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span>Save ₹{deal.totalSavings.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* MIDDLE SECTION */}
                  <div className="px-5 pb-1 text-left">
                    {/* Progress Bar claimed */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-gray-400">
                          {deal.claimedPercent}% Claimed
                        </span>
                        {deal.claimedPercent > 70 && (
                          <span className="text-[#EF4444] flex items-center gap-0.5 animate-pulse">
                            🔥 Going Fast!
                          </span>
                        )}
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-[#5B4FBE] to-[#FF5722] rounded-full h-1.5 transition-all duration-500"
                          style={{ width: `${deal.claimedPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Code Box if dealType code exists */}
                    {deal.dealType === 'code' && (
                      <div className="mt-4 bg-[#F0EEFF] border border-dashed border-[#5B4FBE] text-[#5B4FBE] font-mono font-bold text-xs py-2 text-center rounded-xl relative group-hover:scale-102 transition-transform">
                        <span className="block text-[8px] uppercase tracking-widest text-[#5B4FBE]/60 font-black leading-none mb-0.5">
                          COUPON CODE
                        </span>
                        <span className="text-sm tracking-wide">{deal.code}</span>
                      </div>
                    )}
                  </div>

                  {/* BOTTOM SECTION */}
                  <div className="p-5 pt-4 text-left">
                    <button
                      onClick={() => handleCopyCode(deal.id, deal.code)}
                      className="w-full bg-[#FF5722] hover:bg-orange-600 active:scale-[0.98] text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
                    >
                      <Zap className="w-4 h-4" />
                      <span>{copiedStates[deal.id] ? 'Code Copied!' : deal.dealType === 'code' ? 'Get Code' : 'Get Deal'}</span>
                    </button>

                    <div className="border-t border-gray-100 mt-4 pt-3 flex items-center justify-between text-[10px] font-bold text-gray-400">
                      <span className="text-[#22C55E] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        Verified {deal.verifiedMinsAgo}m ago
                      </span>
                      <span className="bg-[#F0EEFF] text-[#5B4FBE] px-2 py-0.5 rounded-full shrink-0">
                        {deal.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View All Promo Link */}
          <div className="text-center mt-10">
            <Link href="/stores"
              className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-sm hover:underline cursor-pointer hover:gap-3 transition-all"
            >
              <span>View All Brand Deals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 4  -  PRODUCT DEALS GRID
          ======================================================== */}
      <section className="bg-[#F8F8FF] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* PRODUCT GRID HEADER ROW */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FFF3F0] flex items-center justify-center shrink-0">
                <Package className="w-6 h-6 text-[#FF5722]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1A1A2E] flex items-center gap-2">
                  📦 Today's Hot Products
                </h3>
                <p className="text-[#4A4A6A] text-sm mt-1">
                  Verified before listing. Dead deals pulled before they waste your time.
                </p>
              </div>
            </div>

            {/* PRODUCT DEALS SEPARATE FILTER STATE */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Dropdown */}
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                aria-label="Filter product deals by category"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E] shadow-xs"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Sort Dropdown */}
              <select
                value={productSort}
                onChange={(e) => setProductSort(e.target.value)}
                aria-label="Sort product deals"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E] shadow-xs"
              >
                <option value="default">Sort By</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* DYNAMIC PRODUCT DEALS CARDS */}
          {sortedProductDeals.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <Package className="w-16 h-16 text-gray-300 mx-auto" />
              <h4 className="font-bold text-[#1A1A2E] text-lg">No product deals found</h4>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                No hot products match your selected parameters. Try choosing another category filter.
              </p>
              <button
                onClick={() => {
                  setProductCategory('all');
                  setProductSort('default');
                }}
                className="bg-[#FF5722] text-white font-bold px-6 py-2.5 rounded-full text-xs"
              >
                Reset Product Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
              {sortedProductDeals.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* TOP IMAGE SECTION */}
                  <div className="relative overflow-hidden shrink-0 h-52">
                    <NextImage
                      src={prod.productImage}
                      alt={prod.productName}
                      fill
                      sizes="(max-width: 768px) 45vw, 280px"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* TOP BADGES */}
                    {prod.isHot && (
                      <span className="absolute top-3 left-3 bg-[#EF4444] text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-0.5 tracking-wider uppercase shadow-md animate-pulse">
                        <Flame className="w-3 h-3 text-[#FFD700]" />
                        <span>HOT</span>
                      </span>
                    )}

                    <span className="absolute top-3 right-3 bg-[#5B4FBE] text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                      {prod.discountPercent}% OFF
                    </span>

                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-extrabold px-3 py-1 rounded-full text-[#1A1A2E] shadow-sm tracking-wider uppercase">
                      {prod.brandName}
                    </span>
                  </div>

                  {/* MIDDLE INFO SECTION */}
                  <div className="p-4 flex-grow text-left flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-[#1A1A2E] text-sm leading-snug line-clamp-2 h-10">
                        {prod.productName}
                      </h4>

                      {/* Dot category and Brand detail */}
                      <div className="flex items-center gap-2 mt-2 font-medium text-[10px] text-[#4A4A6A]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prod.brandColor }} />
                        <span>{prod.brandName}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400 capitalize">{prod.category}</span>
                      </div>

                      {/* Pricing block */}
                      <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <span className="font-black text-xl text-[#1A1A2E]">
                          ₹{prod.dealPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="line-through text-xs text-gray-400 font-semibold">
                          ₹{prod.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="bg-[#F0FDF4] text-[#22C55E] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          Save ₹{(prod.originalPrice - prod.dealPrice).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      {/* Timer ticks render */}
                      <div className="flex items-center gap-1 text-[#FF5722] font-semibold text-xs bg-orange-50/70 p-2 rounded-lg border border-orange-100/50">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-gray-400 text-[10px]">Expires in:</span>
                        <span className="font-mono text-xs font-bold font-black flex-1 text-right">
                          {formatTime(productTimers[prod.id] || 0)}
                        </span>
                      </div>

                      {/* Progress bar claimed */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-gray-400">
                            {prod.claimedPercent}% Claimed
                          </span>
                          {prod.claimedPercent > 70 && (
                            <span className="text-[#EF4444] flex items-center gap-0.5 animate-pulse">
                              🔥 Going Fast!
                            </span>
                          )}
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-[#5B4FBE] to-[#FF5722] rounded-full h-1.5 transition-all duration-500"
                            style={{ width: `${prod.claimedPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM GRAB CTA SECTION */}
                  <div className="p-4 pt-0 text-left">
                    <button
                      onClick={() => handleClaimDeal(prod.id)}
                      className="w-full bg-[#FF5722] hover:bg-orange-600 active:scale-[0.98] text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-xs text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{claimedDeals[prod.id] ? 'Swiped & Reserved!' : 'Grab This Deal'}</span>
                    </button>

                    <div className="border-t border-gray-100 mt-4 pt-3 flex items-center justify-between text-[10px] font-bold text-gray-400">
                      <span className="text-[#22C55E] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        Verified {prod.verifiedMinsAgo}m ago
                      </span>
                      <span className="bg-[#F0EEFF] text-[#5B4FBE] px-2 py-0.5 rounded-full shrink-0">
                        {prod.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View All Products Link */}
          <div className="text-center mt-10">
            <Link href="/products"
              className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-sm hover:underline cursor-pointer hover:gap-3 transition-all"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5  -  DEAL OF THE HOUR SPOTLIGHT
          ======================================================== */}
    
    
      {/* ========================================================
          SECTION 6  -  BOTTOM CTA BANNER
          ======================================================== */}
      <section className="bg-gradient-to-r from-[#FF5722] to-[#FF8A50] py-16 text-white relative overflow-hidden">
        {/* Decorative corner visual circles */}
        <div className="absolute top-0 left-0 w-36 h-full bg-white/5 rounded-r-full filter blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-full bg-white/5 rounded-l-full filter blur-xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
          {/* Left info content */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-4">
            <h3 className="text-2.5xl sm:text-3xl font-black text-white leading-tight">
              Verified Deals. Every Hour. Always Free.
            </h3>
            <p className="text-white/85 text-sm sm:text-base font-semibold max-w-xl">
              We check and update deals around the clock. Set an alert — don&apos;t pay full price because you missed it.
            </p>

            {/* Smart Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Deals</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                <span>Updated Hourly</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>100% Free</span>
              </span>
            </div>
          </div>

          {/* Right actions CTA row */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <Link href="/stores"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4.5 rounded-full transition inline-flex items-center gap-2 justify-center w-full text-sm"
            >
              <span>Browse All Coupons</span>
              <ArrowRight className="w-4.5 h-4.5 shrink-0" />
            </Link>
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Welcome</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              All Deals, One Place  -  Welcome to Couponscrew Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                If you are the kind of person who refuses to pay full price for anything online, you are in the right place.
              </p>
              <p>
                Couponscrew&apos;s Deals page covers deals and discounts across 500+ top brands — from everyday essentials like groceries and food delivery to big-ticket purchases like electronics, travel bookings, and home appliances. Not a handful of offers from two or three brands. The full picture, updated constantly.
              </p>
              <p>
                Every deal you see here has been checked. Expired deals are removed. New ones are added as soon as they go live. The result is a single page that answers one question every online shopper has before checkout  -  is there a better price for this somewhere?
              </p>
              <p>
                More often than not, the answer is yes. And it is right here.
              </p>
              <p>
                Whether you are shopping on Amazon, Flipkart, Myntra, Zomato, MakeMyTrip, Nykaa, or any of hundreds of other platforms  -  Couponscrew&apos;s Deals page is where you find coupons for online shopping before you spend.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Reliability</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How Couponscrew Keeps This Page Fresh and Reliable
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                A deals page is only useful if the deals actually work. This is where most best deals sites fail  -  they list thousands of codes, never test them, and leave you to discover the hard way that half of them are dead.
              </p>
              <p>
                Couponscrew operates differently. Here is how we keep the Deals page genuinely useful:
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Daily audits.</strong> Our team reviews active deals every day. Any offer that has expired, hit its redemption cap, or started throwing errors at checkout is pulled from the page immediately  -  not left to rot and waste your time.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verification before listing.</strong> Before a new deal goes live on this page, it gets tested. We confirm the discount value, check the minimum order requirements, and verify the code works across the applicable categories. Only after that does it appear here with a Verified badge.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Real-time brand tracking.</strong> We track promotional activity across 500+ brands continuously. When a brand launches a flash sale, a bank partnership offer, or a new coupon code  -  we know about it fast and get it listed before it becomes common knowledge.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>User flagging.</strong> If a deal stops working and our team hasn&apos;t caught it yet, users can flag it directly from the deal card. Flagged deals get reviewed and removed or updated within hours.</p>
                </li>
              </ul>
              <p className="pt-1">
                The goal is simple  -  every deal on this page should work when you try it. That is the standard Couponscrew holds itself to.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Inventory</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              What Kind of Deals Will You Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              The Couponscrew Deals page covers every major shopping category. Here is a breakdown of what&apos;s available:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Smartphone className="w-4 h-4 text-[#FF9900]" />,
                  title: "Electronics & Mobile",
                  body: "Amazon, Flipkart, Croma, Vijay Sales, and Reliance Digital deals on smartphones, laptops, tablets, earphones, smartwatches, and large appliances. Electronics deals move fast  -  check this category before any gadget purchase."
                },
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Fashion & Apparel",
                  body: "Myntra, AJIO, Nykaa Fashion, Tata CLiQ, and Meesho run some of the most aggressive flat-off deals in fashion. Seasonal clearances, brand weeks, and app-exclusive style offers are all tracked and listed here."
                },
                {
                  icon: <Utensils className="w-4 h-4 text-[#FC8019]" />,
                  title: "Food & Grocery",
                  body: "Zomato, Swiggy, BigBasket, Blinkit, Zepto, and Dunzo promo codes updated through the day. Whether it is dinner tonight or a monthly grocery haul  -  there is almost always an active code worth using."
                },
                {
                  icon: <Plane className="w-4 h-4 text-[#2874F0]" />,
                  title: "Travel & Stays",
                  body: "MakeMyTrip, Goibibo, EaseMyTrip, OYO, and IRCTC deals on flights, hotels, buses, trains, and holiday packages. Travel deals are time-sensitive and high-value  -  always check here before booking anything."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FC2779]" />,
                  title: "Beauty & Personal Care",
                  body: "Nykaa, Purplle, Mamaearth, Plum, and The Man Company deals on skincare, haircare, and wellness products. This category runs near-constant promotions  -  there is rarely a reason to pay full price here."
                },
                {
                  icon: <Home className="w-4 h-4 text-[#8B5CF6]" />,
                  title: "Home & Kitchen",
                  body: "Pepperfry, IKEA, Urban Ladder, HomeTown, and Amazon Home deals on furniture, decor, cookware, and appliances. Monthly deals in this category tend to be high in savings value."
                },
                {
                  icon: <Activity className="w-4 h-4 text-[#EF4444]" />,
                  title: "Health & Fitness",
                  body: "Cult.fit, HealthKart, PharmEasy, 1mg, and Netmeds offers on gym memberships, supplements, and medicines. Healthcare deals are among the most searched on Couponscrew  -  and among the most genuinely useful."
                },
                {
                  icon: <BookOpen className="w-4 h-4 text-[#10B981]" />,
                  title: "EdTech & Subscriptions",
                  body: "Unacademy, Byju&apos;s, Udemy, and OTT platform deals on courses and subscriptions. Subscription deals here can save you significantly over a year — especially for annual plans."
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
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Tutorial</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use a Deal from This Page
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Redeeming a deal from Couponscrew&apos;s Deals page takes under a minute. Here is the exact process:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Browse or filter", desc: "Use the category filter at the top of the page to narrow down deals relevant to what you want to buy. You can also sort by newest, highest discount, or ending soon." },
                  { step: "2", title: "Pick your deal", desc: "Click on a deal card that interests you. Read the terms quickly  -  minimum order value, applicable categories, and expiry date." },
                  { step: "3", title: "Reveal the code", desc: "Click \"Get Deal\" or \"Show Code.\" The coupon code will appear and the brand's site will open in a new tab automatically." },
                  { step: "4", title: "Add to cart and checkout", desc: "Shop on the brand's platform, add your items, and proceed to checkout." },
                  { step: "5", title: "Apply the code", desc: "Paste the coupon code into the discount or promo code field. The savings will reflect before you confirm." },
                  { step: "6", title: "Pay and save", desc: "Confirm your order at the discounted price. Check if your bank card has an additional cashback offer running with the same brand for extra savings." }
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
              <p className="text-sm text-[#4A4A6A] pt-4">
                If a code does not apply, check the minimum cart value and whether the items in your cart fall under the deal&apos;s applicable categories. Still not working? The deal may have just expired  -  refresh the Couponscrew page for an updated code.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Pro Tips</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips to Save More on Every Online Purchase
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Getting a discount code is the starting point. Here is how experienced online shoppers squeeze even more value out of every order:
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Filter by &quot;Ending Soon&quot; first.</strong> These are deals in their final hours. If something in that list matches a purchase you were already planning, act now  -  those prices will not come back tomorrow.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack your discounts.</strong> A coupon code from Couponscrew plus a bank card cashback offer (HDFC, SBI, ICICI, and Axis all have regular brand tie-ups) can compound your savings significantly. Always check both before paying.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare across brands.</strong> If you are buying something available on multiple platforms — say, a phone available on both Amazon and Flipkart — check what deals are active for both. Two minutes of comparison can mean a meaningful price difference.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use app-exclusive deals.</strong> Many brands reserve their best deals for mobile app users. If a deal card says &quot;app only,&quot; switch to the brand&apos;s app before applying the code. The savings are often worth the extra step.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Shop around sale season windows.</strong> Flipkart Big Billion Days, Amazon Great Indian Festival, Myntra End of Reason Sale, Nykaa Pink Friday  -  during these events, the deals on this page go to levels you won&apos;t see at any other time of year. Plan big purchases around these windows.</p>
                </li>
              </ul>
              <p className="pt-2">
                <strong>Bookmark this page.</strong> Deals change daily. Making Couponscrew&apos;s Deals page part of your pre-purchase routine  -  even a 60-second check before checkout  -  will save you money consistently over time.
              </p>
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
                { q: "How many deals are active on Couponscrew right now?", a: "We maintain 2,500+ active deals across 500+ brands at any given time. The number shifts daily — expired offers come off, new ones go live. Check back often." },
                { q: "Are the deals on this page free to use?", a: "Completely free. We earn a small affiliate commission from brands when purchases go through our links — at zero extra cost to you." },
                { q: "How do I know if a deal is still valid?", a: "Every deal card shows an expiry date and a Verified badge with the last-checked timestamp. Deals marked \"Ending Soon\" are in their final hours. Expired deals are removed." },
                { q: "Can I request a deal for a specific brand?", a: "Yes. Search the brand name at the top of the page. If we don't have it, submit a request via the Contact page and we'll track it down." },
                { q: "Do deals work on both desktop and mobile?", a: "Most do. Some are app-only or desktop-only — the deal card says so. Read the terms before heading to checkout." },
                { q: "What should I do if a deal does not work?", a: "Check the minimum order value and category restrictions on the deal card. If everything looks right and the code still fails, the deal may have just expired. Refresh for the latest, or flag it from the card." },
                { q: "Does Couponscrew cover international brands?", a: "We cover brands across major shopping categories. Several platforms with a strong global presence — Amazon, Booking.com, Agoda — are on this page alongside regional favourites." }
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
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Philosophy</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              Every Deal Verified. Every Saving Real. Start Here.
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                The average online shopper leaves real money on the table every month — not because deals don&apos;t exist, but because they didn&apos;t check before checkout.
              </p>
              <p>
                Couponscrew&apos;s Deals page fixes that. One bookmark. Two minutes before any online purchase. That is where the right coupons for online shopping are always waiting. That simple habit, done consistently, adds up to real savings over a month, a quarter, and a year.
              </p>
              <p className="text-white/60 text-xs font-bold pt-2 uppercase tracking-wider">
                500+ brands. 2,500+ deals. All verified. All free.
              </p>
              <p className="text-white font-semibold text-base">
                Start here  -  before you spend anywhere else.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-24 self-start">

          {/* SIDEBAR CARD 1 - Catalog Summary Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              Platform Stats
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">The numbers behind every deal on this page.</p>
            <div className="space-y-2">
              {[
                { layer: "Active Deals", val: "2,500+ Offers" },
                { layer: "Brand Base", val: "500+ Retailers" },
                { layer: "Price Checks", val: "Continuous Audits" },
                { layer: "Access Mode", val: "Completely Free" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Your Routine Pre-Checkout</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Platform Verification Framework */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#22C55E]" />
              Freshness Check
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Verified Badge
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Checked against minimum order terms, discount value, and category scope before it goes live here.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF9900]" />
                  Ending Soon
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  These deals are in their final hours. Check terms and redeem — quota limits close them without warning.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Highlight Frame */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">User Flagging</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Something Wrong? Flag It.</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              If a deal isn&apos;t working, hit the flag button on the card. Our team reviews and pulls or updates it within hours.
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

