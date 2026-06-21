'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Trophy,
  Calendar,
  Store,
  Zap,
  Package,
  IndianRupee,
  Clock,
  Shield,
  CheckCircle,
  ShoppingBag,
  Check,
  Bell,
  Sparkles,
  Award,
  TrendingUp, 
  HelpCircle,  
  Smartphone, 
  Plane, 
  Shirt,
  Utensils
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
  verifiedHoursAgo: number;
  isHot: boolean;
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
  verifiedHoursAgo: number;
  isHot: boolean;
  daysLeft: number;
}

export interface HeroSlide {
  id: string;
  brandName: string;
  headline: string;
  subHeadline: string;
  discountText: string;
  bgGradient: string;
  accentColor: string;
  dealCode: string;
  buttonText: string;
  badgeText: string;
  savingsText: string;
}

// ==========================================
// HARDCODED COMPREHENSIVE DATA
// ==========================================
const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'monthly-slide-1',
    brandName: 'Flipkart',
    bgGradient: 'from-[#2874F0] via-[#1a5cbf] to-[#1A1A2E]',
    headline: "Flipkart's Biggest",
    subHeadline: 'Month of Savings',
    discountText: 'Up To 85% OFF',
    badgeText: '🏆 DEAL OF THE MONTH',
    savingsText: 'Up to 85% off - verified and live',
    dealCode: 'FLIP85',
    buttonText: 'Shop This Month',
    accentColor: '#2874F0'
  },
  {
    id: 'monthly-slide-2',
    brandName: 'Amazon',
    bgGradient: 'from-[#FF9900] via-[#e07800] to-[#1A1A2E]',
    headline: 'Amazon Great',
    subHeadline: 'Indian Festival',
    discountText: 'Up To 75% OFF',
    badgeText: '🎉 MONTHLY SPECIAL',
    savingsText: "Their biggest sale of the season",
    dealCode: 'AMZ75',
    buttonText: 'Explore Festival Deals',
    accentColor: '#FF9900'
  },
  {
    id: 'monthly-slide-3',
    brandName: 'Nykaa',
    bgGradient: 'from-[#FC2779] via-[#c01560] to-[#1A1A2E]',
    headline: 'Nykaa Beauty',
    subHeadline: 'Month Extravaganza',
    discountText: 'Up To 55% OFF',
    badgeText: '💄 MONTHLY PICKS',
    savingsText: 'Up to 55% off - tested before it goes live',
    dealCode: 'NYKAA55',
    buttonText: 'Shop Beauty Deals',
    accentColor: '#FC2779'
  },
  {
    id: 'monthly-slide-4',
    brandName: 'MakeMyTrip',
    bgGradient: 'from-[#E8262A] via-[#b01c1f] to-[#1A1A2E]',
    headline: 'Holiday Season',
    subHeadline: 'Travel Bonanza',
    discountText: 'Up To 45% OFF',
    badgeText: '✈️ MONTHLY ESCAPE',
    savingsText: 'Up to 45% off flights and hotels',
    dealCode: 'MMT45',
    buttonText: 'Book Now',
    accentColor: '#E8262A'
  }
];

const BRAND_DEALS_DATA: BrandDeal[] = [
  {
    id: 'm-brand-1',
    brandName: 'Flipkart',
    category: 'Fashion',
    brandColor: '#2874F0',
    brandBgColor: '#EEF4FF',
    logoLetter: 'F',
    tagline: "Month's Biggest Fashion Clearance Sale",
    discountPercent: 85,
    dealType: 'code',
    code: 'FLIP85',
    originalPrice: 5999,
    dealPrice: 899,
    totalSavings: 5100,
    claimedPercent: 94,
    verifiedHoursAgo: 1,
    isHot: true
  },
  {
    id: 'm-brand-2',
    brandName: 'Amazon',
    category: 'Electronics',
    brandColor: '#FF9900',
    brandBgColor: '#FFF8E7',
    logoLetter: 'a',
    tagline: "Great Indian Festival - Month's Best",
    discountPercent: 75,
    dealType: 'code',
    code: 'AMZ75',
    originalPrice: 12999,
    dealPrice: 3249,
    totalSavings: 9750,
    claimedPercent: 88,
    verifiedHoursAgo: 2,
    isHot: true
  },
  {
    id: 'm-brand-3',
    brandName: 'Myntra',
    category: 'Fashion',
    brandColor: '#FF3F6C',
    brandBgColor: '#FFF0F4',
    logoLetter: 'M',
    tagline: "Month's End of Reason Sale - Top Picks",
    discountPercent: 70,
    dealType: 'code',
    code: 'MYNTRA70',
    originalPrice: 6999,
    dealPrice: 2099,
    totalSavings: 4900,
    claimedPercent: 72,
    verifiedHoursAgo: 3,
    isHot: true
  },
  {
    id: 'm-brand-4',
    brandName: 'MakeMyTrip',
    category: 'Travel',
    brandColor: '#E8262A',
    brandBgColor: '#FEF0F0',
    logoLetter: 'MMT',
    tagline: "This Month's Best Holiday Packages",
    discountPercent: 45,
    dealType: 'code',
    code: 'MMT45',
    originalPrice: 25000,
    dealPrice: 13750,
    totalSavings: 11250,
    claimedPercent: 61,
    verifiedHoursAgo: 5,
    isHot: true
  },
  {
    id: 'm-brand-5',
    brandName: 'Nykaa',
    category: 'Beauty',
    brandColor: '#FC2779',
    brandBgColor: '#FFF0F6',
    logoLetter: 'N',
    tagline: 'Monthly Beauty Extravaganza - Premium Brands',
    discountPercent: 55,
    dealType: 'code',
    code: 'NYKAA55',
    originalPrice: 4500,
    dealPrice: 2025,
    totalSavings: 2475,
    claimedPercent: 67,
    verifiedHoursAgo: 4,
    isHot: false
  },
  {
    id: 'm-brand-6',
    brandName: 'Hostinger',
    category: 'Web Hosting',
    brandColor: '#FF6B35',
    brandBgColor: '#FFF3EE',
    logoLetter: 'H',
    tagline: "Month's Best Web Hosting Deal - 80% Off",
    discountPercent: 80,
    dealType: 'code',
    code: 'HOST80',
    originalPrice: 999,
    dealPrice: 199,
    totalSavings: 800,
    claimedPercent: 79,
    verifiedHoursAgo: 6,
    isHot: true
  },
  {
    id: 'm-brand-7',
    brandName: 'Swiggy',
    category: 'Food & Grocery',
    brandColor: '#FC8019',
    brandBgColor: '#FFF5EC',
    logoLetter: 'S',
    tagline: "Month's Biggest Food & Grocery Savings",
    discountPercent: 60,
    dealType: 'code',
    code: 'SWIGGY60M',
    originalPrice: 1200,
    dealPrice: 480,
    totalSavings: 720,
    claimedPercent: 85,
    verifiedHoursAgo: 2,
    isHot: true
  },
  {
    id: 'm-brand-8',
    brandName: 'Coursera',
    category: 'Education',
    brandColor: '#0056D2',
    brandBgColor: '#EEF4FF',
    logoLetter: 'C',
    tagline: "Month's Best Online Learning Deals",
    discountPercent: 65,
    dealType: 'code',
    code: 'COURSE65',
    originalPrice: 7999,
    dealPrice: 2799,
    totalSavings: 5200,
    claimedPercent: 48,
    verifiedHoursAgo: 8,
    isHot: false
  },
  {
    id: 'm-brand-9',
    brandName: 'Ajio',
    category: 'Fashion',
    brandColor: '#000000',
    brandBgColor: '#F5F5F5',
    logoLetter: 'AJ',
    tagline: "Month's Premium Fashion at Best Prices",
    discountPercent: 60,
    dealType: 'code',
    code: 'AJIO60M',
    originalPrice: 4999,
    dealPrice: 1999,
    totalSavings: 3000,
    claimedPercent: 55,
    verifiedHoursAgo: 7,
    isHot: false
  },
  {
    id: 'm-brand-10',
    brandName: 'Zomato',
    category: 'Food & Grocery',
    brandColor: '#E23744',
    brandBgColor: '#FEF0F1',
    logoLetter: 'Z',
    tagline: "Month's Tastiest Deals on Every Order",
    discountPercent: 65,
    dealType: 'code',
    code: 'ZOMATO65M',
    originalPrice: 900,
    dealPrice: 315,
    totalSavings: 585,
    claimedPercent: 91,
    verifiedHoursAgo: 1,
    isHot: true
  },
  {
    id: 'm-brand-11',
    brandName: 'BigBasket',
    category: 'Food & Grocery',
    brandColor: '#84C225',
    brandBgColor: '#F4FBEA',
    logoLetter: 'BB',
    tagline: 'Monthly Grocery Haul at Best Prices',
    discountPercent: 30,
    dealType: 'code',
    code: 'BB500M',
    originalPrice: 2500,
    dealPrice: 1750,
    totalSavings: 750,
    claimedPercent: 63,
    verifiedHoursAgo: 5,
    isHot: false
  },
  {
    id: 'm-brand-12',
    brandName: 'Netmeds',
    category: 'Beauty',
    brandColor: '#1A9A5C',
    brandBgColor: '#EDFBF4',
    logoLetter: 'NM',
    tagline: "Month's Best Health & Wellness Deals",
    discountPercent: 35,
    dealType: 'code',
    code: 'NETS35M',
    originalPrice: 1200,
    dealPrice: 780,
    totalSavings: 420,
    claimedPercent: 44,
    verifiedHoursAgo: 9,
    isHot: false
  }
];

const PRODUCT_DEALS_DATA: ProductDeal[] = [
  {
    id: 'm-prod-1',
    brandName: 'Amazon',
    brandColor: '#FF9900',
    category: 'Electronics',
    productName: 'MacBook Air M2 (8GB/256GB)',
    productImage: 'https://images.unsplash.com/photo-1611186871525-d4cca3e88c47?w=400&q=80',
    discountPercent: 22,
    originalPrice: 114900,
    dealPrice: 89900,
    totalSavings: 25000,
    claimedPercent: 71,
    verifiedHoursAgo: 4,
    isHot: true,
    daysLeft: 18
  },
  {
    id: 'm-prod-2',
    brandName: 'Myntra',
    brandColor: '#FF3F6C',
    category: 'Fashion',
    productName: 'Saree by Fabindia',
    productImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80',
    discountPercent: 50,
    originalPrice: 8999,
    dealPrice: 4499,
    totalSavings: 4500,
    claimedPercent: 58,
    verifiedHoursAgo: 10,
    isHot: false,
    daysLeft: 22
  },
  {
    id: 'm-prod-3',
    brandName: 'Flipkart',
    brandColor: '#2874F0',
    category: 'Electronics',
    productName: 'Sony WH-1000XM5 Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    discountPercent: 33,
    originalPrice: 29990,
    dealPrice: 19990,
    totalSavings: 10000,
    claimedPercent: 84,
    verifiedHoursAgo: 2,
    isHot: true,
    daysLeft: 12
  },
  {
    id: 'm-prod-4',
    brandName: 'Nykaa',
    brandColor: '#FC2779',
    category: 'Beauty',
    productName: 'Forest Essentials Skincare Kit',
    productImage: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80',
    discountPercent: 45,
    originalPrice: 5500,
    dealPrice: 2999,
    totalSavings: 2501,
    claimedPercent: 62,
    verifiedHoursAgo: 8,
    isHot: false,
    daysLeft: 25
  },
  {
    id: 'm-prod-5',
    brandName: 'Ajio',
    brandColor: '#000000',
    category: 'Fashion',
    productName: 'Wildcraft Hiking Shoes',
    productImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    discountPercent: 50,
    originalPrice: 5995,
    dealPrice: 2997,
    totalSavings: 2998,
    claimedPercent: 39,
    verifiedHoursAgo: 12,
    isHot: false,
    daysLeft: 28
  },
  {
    id: 'm-prod-6',
    brandName: 'Amazon',
    brandColor: '#FF9900',
    category: 'Electronics',
    productName: 'Instant Pot Duo 7-in-1',
    productImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    discountPercent: 40,
    originalPrice: 9995,
    dealPrice: 5995,
    totalSavings: 4000,
    claimedPercent: 55,
    verifiedHoursAgo: 6,
    isHot: false,
    daysLeft: 20
  },
  {
    id: 'm-prod-7',
    brandName: 'Myntra',
    brandColor: '#FF3F6C',
    category: 'Fashion',
    productName: "Levi's Denim Jacket",
    productImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    discountPercent: 50,
    originalPrice: 7999,
    dealPrice: 3999,
    totalSavings: 4000,
    claimedPercent: 73,
    verifiedHoursAgo: 3,
    isHot: true,
    daysLeft: 15
  },
  {
    id: 'm-prod-8',
    brandName: 'Flipkart',
    brandColor: '#2874F0',
    category: 'Electronics',
    productName: 'LG 8kg Washing Machine',
    productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    discountPercent: 30,
    originalPrice: 45990,
    dealPrice: 31990,
    totalSavings: 14000,
    claimedPercent: 41,
    verifiedHoursAgo: 14,
    isHot: false,
    daysLeft: 24
  },
  {
    id: 'm-prod-9',
    brandName: 'Nykaa',
    brandColor: '#FC2779',
    category: 'Beauty',
    productName: 'Biotique Bio Dandruff Kit',
    productImage: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2176?w=400&q=80',
    discountPercent: 40,
    originalPrice: 1299,
    dealPrice: 779,
    totalSavings: 520,
    claimedPercent: 49,
    verifiedHoursAgo: 16,
    isHot: false,
    daysLeft: 27
  },
  {
    id: 'm-prod-10',
    brandName: 'Amazon',
    brandColor: '#FF9900',
    category: 'Electronics',
    productName: 'OnePlus 12 5G',
    productImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80',
    discountPercent: 15,
    originalPrice: 64999,
    dealPrice: 54999,
    totalSavings: 10000,
    claimedPercent: 88,
    verifiedHoursAgo: 1,
    isHot: true,
    daysLeft: 8
  },
  {
    id: 'm-prod-11',
    brandName: 'Ajio',
    brandColor: '#000000',
    category: 'Fashion',
    productName: 'Van Heusen Formal Suit',
    productImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
    discountPercent: 50,
    originalPrice: 12999,
    dealPrice: 6499,
    totalSavings: 6500,
    claimedPercent: 46,
    verifiedHoursAgo: 5,
    isHot: false,
    daysLeft: 19
  },
  {
    id: 'm-prod-12',
    brandName: 'Nykaa',
    brandColor: '#FC2779',
    category: 'Beauty',
    productName: 'Dyson Airwrap Complete',
    productImage: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400&q=80',
    discountPercent: 22,
    originalPrice: 45900,
    dealPrice: 35900,
    totalSavings: 10000,
    claimedPercent: 76,
    verifiedHoursAgo: 3,
    isHot: true,
    daysLeft: 11
  }
];

const CATEGORY_OPTIONS = [
  { label: 'All Categories', value: 'all' },
  { label: 'Fashion', value: 'Fashion' },
  { label: 'Electronics', value: 'Electronics' },
  { label: 'Food & Grocery', value: 'Food & Grocery' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Beauty', value: 'Beauty' },
  { label: 'Web Hosting', value: 'Web Hosting' },
  { label: 'Education', value: 'Education' }
];

export default function DealOfTheMonth() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic Month End Timer Remaining
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Filters
  const [brandCategory, setBrandCategory] = useState('all');
  const [brandSort, setBrandSort] = useState('default');

  const [productCategory, setProductCategory] = useState('all');
  const [productSort, setProductSort] = useState('default');

  // Success Feedbacks
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [claimedDeals, setClaimedDeals] = useState<Record<string, boolean>>({});

  // Trigger Dynamic Countdown on Mount
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
      const diff = lastDayOfMonth.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hero autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Copy helper
  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  // Claim helper
  const handleClaimDeal = (id: string) => {
    setClaimedDeals((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setClaimedDeals((prev) => ({ ...prev, [id]: false }));
    }, 4000);
  };

  // Brand Sorting & Filtering
  const sortedBrandDeals = useMemo(() => {
    let result = [...BRAND_DEALS_DATA];

    if (brandCategory !== 'all') {
      result = result.filter(
        (deal) => deal.category.toLowerCase() === brandCategory.toLowerCase()
      );
    }

    if (brandSort === 'discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (brandSort === 'newest') {
      result.sort((a, b) => a.verifiedHoursAgo - b.verifiedHoursAgo);
    } else if (brandSort === 'popular') {
      result.sort((a, b) => b.claimedPercent - a.claimedPercent);
    }

    return result;
  }, [brandCategory, brandSort]);

  // Product Sorting & Filtering
  const sortedProductDeals = useMemo(() => {
    let result = [...PRODUCT_DEALS_DATA];

    if (productCategory !== 'all') {
      result = result.filter(
        (prod) => prod.category.toLowerCase() === productCategory.toLowerCase()
      );
    }

    if (productSort === 'discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (productSort === 'newest') {
      result.sort((a, b) => a.verifiedHoursAgo - b.verifiedHoursAgo);
    } else if (productSort === 'popular') {
      result.sort((a, b) => b.claimedPercent - a.claimedPercent);
    }

    return result;
  }, [productCategory, productSort]);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* ==========================================
          SECTION 1  -  HERO SLIDER
          ========================================== */}
      <section className="relative w-full min-h-[580px] bg-[#1A1A2E] overflow-hidden flex items-center">
        {/* Grid Background accents */}
        <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20 z-0">
          {Array.from({ length: 25 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
        <div className="absolute right-12 bottom-12 grid grid-cols-6 gap-2.5 pointer-events-none opacity-10 z-0">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>

        {HERO_SLIDES.map((slide, slideIdx) => {
          const isActive = slideIdx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex items-center ${
                isActive ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-12 pointer-events-none'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-95 z-0`} />

              <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* LEFT CONTENT */}
                <div className="lg:col-span-7 text-left space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider select-none">
                    <span>{slide.badgeText}</span>
                  </div>

                  <h2 className="text-white font-black text-5xl md:text-7xl tracking-tight leading-none">
                    {slide.brandName}
                  </h2>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-2xl md:text-4xl">
                      {slide.headline}
                    </p>
                    <p className="text-white/80 font-medium text-lg md:text-xl">
                      {slide.subHeadline}
                    </p>
                  </div>

                  <p className="text-[#FFD700] font-black text-5xl md:text-6.5xl leading-none tracking-tight drop-shadow-md">
                    {slide.discountText}
                  </p>
                  <p className="text-white/70 text-base md:text-lg font-semibold">
                    🎁 {slide.savingsText}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
                    {slide.dealCode && (
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">USE CODE:</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-block bg-white/10 border border-dashed border-white/30 text-white font-mono font-black text-lg py-2.5 px-5 rounded-xl block select-all">
                            {slide.dealCode}
                          </span>
                          <button
                            onClick={() => handleCopyCode(slide.id, slide.dealCode)}
                            className="bg-white/10 hover:bg-white/20 text-white rounded-xl p-2.5 transition active:scale-95 cursor-pointer text-xs font-bold"
                          >
                            {copiedStates[slide.id] ? '✓ Copied' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => handleClaimDeal(slide.id)}
                      className="text-white font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 self-end shadow-lg shadow-black/20 cursor-pointer"
                      style={{ backgroundColor: slide.accentColor }}
                    >
                      {claimedDeals[slide.id] ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Offer Saved!</span>
                        </>
                      ) : (
                        <>
                          <span>{slide.buttonText}</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* RIGHT FLOATING DETAIL */}
                <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
                  <div
                    className="absolute w-80 h-80 rounded-full opacity-20 filter blur-3xl"
                    style={{ backgroundColor: slide.accentColor }}
                  />

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6 text-center w-full max-w-sm relative z-10 hover:-translate-y-2 transition-transform duration-500">
                    <span className="text-white/80 font-semibold text-xs tracking-wider uppercase block">
                      🎁 Featured Monthly Deal
                    </span>

                    <h4 className="text-white font-black text-7xl leading-none">
                      {slide.discountText.includes('%') ? slide.discountText.split(' ')[slide.discountText.split(' ').length - 2] || 'OFF' : 'OFF'}
                    </h4>

                    <p className="text-white/70 text-lg font-medium leading-tight">
                      Exclusive discount for <span className="text-[#FFD700] font-black">{slide.brandName}</span>
                    </p>

                    <div className="border-t border-white/15 pt-5 space-y-2">
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest block">
                        ⏱️ REMAINING
                      </span>
                      <span className="font-mono text-xl font-bold text-[#FFD700] tracking-wide block">
                        {timeLeft.days} Days {timeLeft.hours} Hrs {timeLeft.minutes} Mins
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* LEFT / RIGHT NAV ARROWS */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-[#5B4FBE] p-3 rounded-full shadow-xl hover:scale-110 hover:bg-gray-50 active:scale-90 transition-all z-20 cursor-pointer text-center flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-[#5B4FBE] p-3 rounded-full shadow-xl hover:scale-110 hover:bg-gray-50 active:scale-90 transition-all z-20 cursor-pointer text-center flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* DOTS INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#FF5722]' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 2  -  STATS BAR
          ========================================== */}
      <section className="relative z-20 px-6 max-w-7xl mx-auto w-full -mt-4">
        <div className="bg-white rounded-2xl border border-[#E8E8F0] shadow-lg py-6 px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5 justify-center lg:justify-start">
            <div className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
              <Trophy className="w-5.5 h-5.5 text-[#5B4FBE]" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-[#1A1A2E]">89</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
              </div>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1">Deals This Month</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5 justify-center border-l border-gray-100 pl-4">
            <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#FF5722]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">Every Month</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Curated</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5 justify-center border-l border-gray-100 pl-4 col-span-2 md:col-span-1">
            <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-[#22C55E]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-[#22C55E] block leading-none">92.4%</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Coupon Success Rate</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5 justify-center border-l border-gray-100 pl-4">
            <div className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
              <Store className="w-5 h-5 text-[#5B4FBE]" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">120 Brands</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Brands Featured</span>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="flex items-center gap-3.5 justify-center border-l border-gray-100 pl-4 col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-[#1A1A2E] block leading-none">10,000+</span>
              <span className="text-xs text-[#4A4A6A] font-semibold block uppercase tracking-wider leading-none mt-1.5">Coupons Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3  -  BRAND DEALS GRID
          ========================================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] flex items-center justify-center shrink-0">
                <Store className="w-6 h-6 text-[#5B4FBE]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1A1A2E] flex items-center gap-2">
                  🏪 Top Brand Deals This Month
                </h3>
                <p className="text-[#4A4A6A] text-sm mt-1">
                  One team. One job. Find the codes that actually work.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={brandCategory}
                onChange={(e) => setBrandCategory(e.target.value)}
                aria-label="Filter brand deals by category"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E]"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <select
                value={brandSort}
                onChange={(e) => setBrandSort(e.target.value)}
                aria-label="Sort brand deals"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E]"
              >
                <option value="default">Sort By</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

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
                className="bg-[#5B4FBE] text-white font-bold px-6 py-2.5 rounded-full text-xs cursor-pointer"
              >
                Reset Brand Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
              {sortedBrandDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-5 flex-grow text-left">
                    <div className="flex items-center justify-between gap-2.5">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0 shadow-inner select-none uppercase"
                        style={{ backgroundColor: deal.brandColor }}
                      >
                        {deal.logoLetter}
                      </div>

                      {deal.isHot && (
                        <span className="bg-[#EF4444] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-0.5 uppercase tracking-wider animate-pulse">
                          <CheckCircle className="w-3 h-3 text-[#FFD700]" />
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

                    <div
                      className="inline-block px-3 py-1.5 rounded-lg font-black text-xl mt-4 select-none"
                      style={{
                        backgroundColor: deal.brandBgColor,
                        color: deal.brandColor
                      }}
                    >
                      {deal.discountPercent}% OFF
                    </div>

                    <div className="flex items-center gap-1 text-[#22C55E] font-bold text-xs sm:text-sm mt-3.5">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span>Save ₹{deal.totalSavings.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="px-5 pb-1 text-left">
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

                    {deal.dealType === 'code' && (
                      <div className="mt-4 bg-[#F0EEFF] border border-dashed border-[#5B4FBE] text-[#5B4FBE] font-mono font-bold text-xs py-2 text-center rounded-xl">
                        <span className="block text-[8px] uppercase tracking-widest text-[#5B4FBE]/60 font-black leading-none mb-0.5">
                          COUPON CODE
                        </span>
                        <span className="text-sm tracking-wide">{deal.code}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 pt-4 text-left">
                    <button
                      onClick={() => handleCopyCode(deal.id, deal.code)}
                      className="w-full bg-[#FF5722] hover:bg-orange-600 active:scale-95 text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      <Zap className="w-4 h-4" />
                      <span>{copiedStates[deal.id] ? 'Code Copied!' : 'Get Code'}</span>
                    </button>

                    <div className="border-t border-gray-100 mt-4 pt-3 flex items-center justify-between text-[10px] font-bold text-gray-400">
                      <span className="text-[#22C55E] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        Verified {deal.verifiedHoursAgo} {deal.verifiedHoursAgo === 1 ? 'hour' : 'hours'} ago
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

          <div className="text-center mt-10">
            <Link href="/"
              className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-sm hover:underline cursor-pointer hover:gap-3 transition-all"
            >
              <span>View All Brand Deals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4  -  PRODUCT DEALS GRID
          ========================================== */}
      <section className="bg-[#F8F8FF] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FFF3F0] flex items-center justify-center shrink-0">
                <Package className="w-6 h-6 text-[#FF5722]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1A1A2E] flex items-center gap-2">
                  📦 This Month's Hottest Products
                </h3>
                <p className="text-[#4A4A6A] text-sm mt-1">
                  Verified before listing. Dead deals pulled before they waste your time.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                aria-label="Filter product deals by category"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E]"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <select
                value={productSort}
                onChange={(e) => setProductSort(e.target.value)}
                aria-label="Sort product deals"
                className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-[#5B4FBE] focus:outline-none bg-white cursor-pointer font-semibold text-[#1A1A2E]"
              >
                <option value="default">Sort By</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {sortedProductDeals.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <Package className="w-16 h-16 text-gray-300 mx-auto" />
              <h4 className="font-bold text-[#1A1A2E] text-lg">No product deals found</h4>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                No monthly products match your selected parameters. Try choosing another category filter.
              </p>
              <button
                onClick={() => {
                  setProductCategory('all');
                  setProductSort('default');
                }}
                className="bg-[#FF5722] text-white font-bold px-6 py-2.5 rounded-full text-xs cursor-pointer"
              >
                Reset Product Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
              {sortedProductDeals.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden shrink-0 h-52">
                    <NextImage
                      src={prod.productImage}
                      alt={prod.productName}
                      width={400}
                      height={208}
                      sizes="(max-width: 768px) 45vw, 280px"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />

                    {prod.isHot && (
                      <span className="absolute top-3 left-3 bg-[#EF4444] text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-0.5 tracking-wider uppercase shadow-md animate-pulse">
                        <CheckCircle className="w-3 h-3 text-[#FFD700]" />
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

                  <div className="p-4 flex-grow text-left flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-[#1A1A2E] text-sm leading-snug line-clamp-2 h-10">
                        {prod.productName}
                      </h4>

                      <div className="flex items-center gap-2 mt-2 font-medium text-[10px] text-[#4A4A6A]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prod.brandColor }} />
                        <span>{prod.brandName}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400 capitalize">{prod.category}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <span className="font-black text-xl text-[#1A1A2E]">
                          ₹{prod.dealPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="line-through text-xs text-gray-400 font-semibold">
                          ₹{prod.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="bg-[#F0FDF4] text-[#22C55E] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          Save ₹{prod.totalSavings.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      {/* Timer ticks render - monthly deals: "X days left" */}
                      <div className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-xs bg-orange-50/70 p-2 rounded-lg border border-orange-100/50">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-gray-400 text-[10px]">Expires in:</span>
                        <span className="font-bold text-xs flex-1 text-right text-orange-600">
                          {prod.daysLeft} days left
                        </span>
                      </div>

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

                  <div className="p-4 pt-0 text-left">
                    <button
                      onClick={() => handleClaimDeal(prod.id)}
                      className="w-full bg-[#FF5722] hover:bg-orange-600 active:scale-95 text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{claimedDeals[prod.id] ? 'Swiped & Reserved!' : 'Grab This Deal'}</span>
                    </button>

                    <div className="border-t border-gray-100 mt-4 pt-3 flex items-center justify-between text-[10px] font-bold text-gray-400">
                      <span className="text-[#22C55E] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                        Verified {prod.verifiedHoursAgo} {prod.verifiedHoursAgo === 1 ? 'hour' : 'hours'} ago
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

          <div className="text-center mt-10">
            <Link href="/"
              className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-sm hover:underline cursor-pointer hover:gap-3 transition-all"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5  -  DEAL OF THE MONTH SPOTLIGHT
          ========================================== */}
      <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-20 px-6 relative overflow-hidden text-white">
        <div className="absolute top-[-100px] left-[-150px] w-96 h-96 bg-purple-500 rounded-full opacity-10 filter blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-150px] w-96 h-96 bg-[#FF5722] rounded-full opacity-10 filter blur-3xl" />
        <div className="absolute top-10 left-12 grid grid-cols-5 gap-3 pointer-events-none opacity-15">
          {Array.from({ length: 25 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full text-left">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <span className="bg-[#FF5722] text-white text-xs font-black px-4.5 py-1.5 rounded-full inline-flex items-center gap-1.5 uppercase tracking-wider shadow-md animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>🏆 DEAL OF THE MONTH</span>
            </span>

            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
                Apple iPad Pro 12.9" M2
              </h2>
              <p className="text-white/70 text-lg sm:text-xl font-bold">
                Ultimate Flagship Tablet
              </p>
            </div>

            <ul className="space-y-3 font-medium text-white/80 text-sm sm:text-base">
              {[
                '12.9 inch Liquid Retina XDR Display',
                'Apple M2 Chip  -  Desktop-class Performance',
                'Apple Pencil & Magic Keyboard Compatible',
                '12MP Wide + 10MP Ultra Wide Cameras'
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
              <div className="flex flex-col text-left">
                <span className="text-white/40 text-xs font-bold line-through">
                  Full retail price
                </span>
                <span className="font-mono text-5xl sm:text-6xl font-black text-[#FFD700] tracking-tight leading-none">
                  See current deal price
                </span>
              </div>
              <span className="bg-[#22C55E] text-white font-extrabold px-5 py-2.5 rounded-full text-base sm:text-lg inline-block shadow-sm self-start sm:self-center mt-2 sm:mt-0">
                Verified &amp; Claimed by 50,000+ shoppers
              </span>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3 text-left">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest block">
                ⏰ Month Ends In:
              </span>
              <div className="flex items-center gap-3 text-center">
                
                {/* Days */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 min-w-[80px]">
                  <span className="font-mono text-3xl sm:text-4xl font-black block">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-white/50 tracking-wider font-bold block uppercase mt-1">
                    DAYS
                  </span>
                </div>

                <span className="text-white/45 font-black text-2xl">:</span>

                {/* Hours */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 min-w-[80px]">
                  <span className="font-mono text-3xl sm:text-4xl font-black block">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-white/50 tracking-wider font-bold block uppercase mt-1">
                    HOURS
                  </span>
                </div>

                <span className="text-white/45 font-black text-2xl">:</span>

                {/* Mins */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 min-w-[80px]">
                  <span className="font-mono text-3xl sm:text-4xl font-black block">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-white/50 tracking-wider font-bold block uppercase mt-1">
                    MINS
                  </span>
                </div>

                <span className="text-white/45 font-black text-2xl">:</span>

                {/* Secs */}
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 min-w-[80px]">
                  <span className="font-mono text-3xl sm:text-4xl font-black block">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-white/50 tracking-wider font-bold block uppercase mt-1">
                    SECS
                  </span>
                </div>

              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleClaimDeal('ipad-pro-m2')}
                className="bg-[#FF5722] hover:bg-orange-600 text-white px-8 py-4.5 rounded-full font-black text-base shadow-lg shadow-orange-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Zap className="w-5 h-5" />
                <span>{claimedDeals['ipad-pro-m2'] ? 'Slot Locked!' : "Claim This Month's Deal"}</span>
              </button>
              <Link href="/"
                className="border-2 border-white/30 text-white px-8 py-4.5 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center text-sm"
              >
                View All Deals
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <NextImage
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"
                alt="Apple iPad Pro Spotlight"
                width={600}
                height={430}
                priority
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-2xl w-full h-[430px] object-cover border border-white/10"
              />

              {/* FLOATING RATING CARD */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 border border-[#E8E8F0] text-[#1A1A2E]">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-[#FFD700]">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FFD700] font-bold">★</span>
                    <strong className="text-[#1A1A2E] text-sm font-black">4.9/5</strong>
                  </div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase mt-0.5">Based on 8,230 reviews</p>
                </div>
              </div>

              {/* FLOATING STOCK STATUS */}
              <div className="absolute -top-4 -right-4 bg-[#5B4FBE] text-white rounded-2xl p-4 shadow-2xl text-left border border-indigo-400/25">
                <strong className="text-sm font-black block flex items-center gap-1.5 uppercase">
                  <Award className="w-4 h-4 text-[#FFD700] shrink-0" />
                  🏆 Deal of the Month
                </strong>
                <p className="text-[10px] text-white/95 leading-tight mt-1 font-semibold">
                  Handpicked by the Couponscrew team
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6  -  BOTTOM CTA BANNER
          ========================================== */}
      <section className="bg-gradient-to-r from-[#FF5722] to-[#FF8A50] py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-36 h-full bg-white/5 rounded-r-full filter blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-full bg-white/5 rounded-l-full filter blur-xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
          <div className="lg:col-span-8 text-center lg:text-left space-y-4">
            <h3 className="text-2.5xl sm:text-3xl font-black text-white leading-tight">
              One Great Deal. Every Month. Verified.
            </h3>
            <p className="text-white/85 text-sm sm:text-base font-semibold max-w-xl">
              We pick one deal a month that&apos;s genuinely worth your time. This is it.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Deals</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>Updated Monthly</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>100% Free</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => handleClaimDeal('monthly-alerts')}
              className="bg-white hover:bg-gray-50 text-[#FF5722] font-extrabold px-8 py-4.5 rounded-full hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer w-full text-base"
            >
              <Bell className="w-5 h-5 shrink-0" />
              <span>{claimedDeals['monthly-alerts'] ? 'Alerts Activated!' : 'Get Deal Alerts'}</span>
            </button>
            <Link href="/"
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Introduction</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              What Is the Deal of the Month?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Not every deal deserves to be called the best. Most are decent. Some are good. But once in a while, a deal comes along that is genuinely hard to beat  -  and that is exactly what Couponscrew&apos;s Deal of the Month is about.
              </p>
              <p>
                Every month, our team goes through thousands of active offers — discount coupons, cashbacks, and limited-time sales — across top brands and handpicks the single best deal worth your attention. This is not a random pick. We evaluate the discount depth, the brand&apos;s reliability, the product or service category demand, and whether the savings are real or just marketing fluff dressed up as a discount.
              </p>
              <p>
                The Deal of the Month is for the smart shopper  -  the one who doesn&apos;t want to chase twenty different offers and instead wants one rock-solid recommendation they can act on with confidence. Think of it as Couponscrew&apos;s official stamp of approval for the month.
              </p>
              <p>
                We update this every month without fail. Bookmark this page and check back at the start of each new month to see what we&apos;ve picked. Historically, our monthly picks have included deals from Amazon, Flipkart, MakeMyTrip, Myntra, and Zomato  -  brands people shop from every day.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Our Standard</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How We Pick the Deal of the Month
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Picking one deal out of thousands is not easy. We hold our monthly pick to a much higher standard than a regular daily deal. Here is exactly what we look for before something earns the Deal of the Month title on Couponscrew.
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Savings depth.</strong> A 5% discount does not make the cut. The Deal of the Month must offer substantial savings  -  typically 30% or more off the regular price, or a cashback value that meaningfully reduces your actual spend.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Brand credibility.</strong> We only pick deals from brands with a reliable track record of honouring their offers. If a brand has a history of last-minute terms changes or coupon denials at checkout, it does not get featured here regardless of the headline discount.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Broad usefulness.</strong> The deal should be relevant to a wide range of shoppers  -  not just niche buyers. A deal on everyday essentials, popular electronics, widely used food apps, or travel bookings will always score higher than something hyper-specific.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified and tested.</strong> Before it goes live as our monthly pick, the deal is tested by our team across multiple devices and order scenarios. What you see is what you get  -  no hidden minimums buried in fine print without disclosure.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Categories</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Categories That Feature in Monthly Picks
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Couponscrew&apos;s Deal of the Month rotates across categories based on what&apos;s offering the most genuine value that month. Here&apos;s a look at the categories that regularly make the monthly cut:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Smartphone className="w-4 h-4 text-[#FF9900]" />,
                  title: "Electronics & Large Appliances",
                  body: "Big-ticket purchases are where monthly deals shine the most. Amazon and Flipkart both run deep monthly discounts on smartphones, laptops, TVs, and large appliances. A well-timed monthly deal here can save you significantly on a single big purchase."
                },
                {
                  icon: <Plane className="w-4 h-4 text-[#2874F0]" />,
                  title: "Travel & Holidays",
                  body: "MakeMyTrip, Goibibo, and EaseMyTrip tend to run their best offers around long weekends and holiday seasons. A monthly hotel cashback deal or a flight discount code can cut your travel budget significantly  -  especially when stacked with bank card offers."
                },
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Fashion & Lifestyle",
                  body: "Myntra's End of Reason Sale, AJIO's brand weeks, and Nykaa's monthly beauty hauls are recurring fixtures. Fashion monthly deals are particularly strong at season transitions  -  when brands clear inventory and discounts go deep."
                },
                {
                  icon: <ShoppingBag className="w-4 h-4 text-[#22C55E]" />,
                  title: "Groceries & Daily Essentials",
                  body: "BigBasket, Blinkit, and Zepto run monthly subscription and first-order deals that are genuinely useful for everyday households. These tend to have a high repeat-value  -  something our team weighs heavily when selecting the monthly pick."
                },
                {
                  icon: <Utensils className="w-4 h-4 text-[#FC8019]" />,
                  title: "Food Delivery",
                  body: "Zomato and Swiggy Gold or Pro memberships occasionally hit pricing lows that make them outstanding monthly value picks  -  especially if you order food regularly. We track these closely and feature them when the pricing justifies it."
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
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">How-to Guide</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use the Deal of the Month
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Using Couponscrew&apos;s monthly deal is straightforward. Here is the step-by-step process:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Read the deal details", desc: "Before clicking anything, read the full deal card. Check the minimum order value, applicable categories, and expiry date. The Deal of the Month has more conditions than a regular daily deal, and knowing them upfront saves frustration." },
                  { step: "2", title: "Click Get Deal", desc: "Hit the button on the deal card. The coupon code will be revealed and the brand's website or app will open automatically." },
                  { step: "3", title: "Add your items to cart", desc: "Shop on the brand's platform and add the qualifying products to your cart." },
                  { step: "4", title: "Apply the code at checkout", desc: "Paste the discount code into the promo code field. The discount should reflect before you confirm your order." },
                  { step: "5", title: "Check for stackable offers", desc: "Monthly deals often have higher savings potential when combined with a bank card EMI offer or a wallet cashback. Check your payment method before confirming." },
                  { step: "6", title: "Complete your purchase", desc: "Confirm the discounted total and place your order." }
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
                If the code does not apply, check whether your cart meets the minimum order value or whether the product category qualifies. Still stuck? Drop us a message through our Contact page and we&apos;ll help you out.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Tips & Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips to Get the Most Out of Monthly Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Monthly deals are structured differently from daily offers  -  and the strategy to maximise them is different too. Here is what works:
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Act early in the month.</strong> Most monthly deals have a quota  -  once a set number of redemptions are hit, the offer closes even if the calendar date hasn&apos;t passed. The earlier in the month you use it, the better your chances of the code working.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare with current daily deals first.</strong> Sometimes a deal running today beats the monthly pick for a specific category. Always cross-check the Deals of the Day page before assuming the monthly pick is automatically the best option for your purchase.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use high-value monthly deals for planned purchases.</strong> If you&apos;ve been waiting to buy a new phone, upgrade your kitchen appliance, or book a holiday  -  time that purchase to align with the monthly deal. That&apos;s when you get the most out of it.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Set a monthly reminder.</strong> Couponscrew refreshes the Deal of the Month at the start of every calendar month. Set a reminder on the 1st  -  spending two minutes checking this page can save you thousands over the course of a year.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Share it.</strong> If this month&apos;s deal is relevant to someone you know, share it. The deal doesn&apos;t get worse when more people use it  -  and your friend saves money too.</p>
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
                { q: "How often does the Deal of the Month change?", a: "Once a month, typically in the first few days. If something genuinely better comes along mid-month, we update early — but that&apos;s rare. Check back on the 1st." },
                { q: "Is the Deal of the Month always from a different brand?", a: "Not necessarily. If a brand offers outstanding value two months in a row, it gets featured again. Merit wins, not rotation." },
                { q: "Can the deal expire before the month ends?", a: "Yes. Brands cap redemptions. When the quota fills, the deal closes — even if there are days left on the calendar. Use the promo code today while the quota is still open." },
                { q: "Is the Deal of the Month free to access?", a: "Completely free. We earn a small affiliate commission when you buy through our links — at zero extra cost to you. That&apos;s how we keep this running." },
                { q: "Can I use the Deal of the Month more than once?", a: "Depends on the brand&apos;s terms. Some allow multiple uses, some don&apos;t. The deal card says so. Read it before your second attempt." },
                { q: "What if the Deal of the Month doesn't match what I need this month?", a: "Head to the Deals of the Day page. We track active deals across 500+ brands — there&apos;s almost always something relevant to what you&apos;re after." }
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
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Summary</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              The Smartest Deal You&apos;ll Use This Month
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                You don&apos;t need fifty deals to save money. You need one great one at the right time.
              </p>
              <p>
                That is the entire idea behind Couponscrew&apos;s Deal of the Month  -  a single, carefully chosen offer that represents the best savings opportunity available right now. No noise, no chasing, no expired codes. Just one verified deal — and not the kind of discount coupons that stop working mid-checkout — that our team stands behind.
              </p>
              <p className="text-white font-semibold">
                Come back at the start of every month. Spend two minutes here. Save more than you expected.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Dynamic Selection Matrix */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              Selection Standard
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">What a deal has to clear before it earns the monthly pick.</p>
            <div className="space-y-2">
              {[
                { layer: "Savings Depth", val: "30%+ Off or Deep Cashback" },
                { layer: "Brand Check", val: "Reliable Track Record" },
                { layer: "Usefulness", val: "Broad Scale Relevance" },
                { layer: "Testing", val: "Verified Across Devices" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full text-right max-w-[130px] truncate">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Updated Every Calendar Month</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Quick Safeguards */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#22C55E]" />
              Redemption Tips
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Act Early
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Most monthly deals have a quota. Once it fills, the deal closes — even if days are left. First week is safest.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF9900]" />
                  Stackable Check
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Pair the monthly code with a bank card offer. HDFC, ICICI, SBI all run these. Stack them.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Value Framework */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">No Fluff</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">One Pick. Properly Tested.</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Not a list. Not fifty options. One deal our team has verified and would use themselves.
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

