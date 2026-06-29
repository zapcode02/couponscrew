'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  Tag,
  Store,
  ShieldCheck,
  Percent,
  LayoutGrid,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  Monitor,
  Plane,
  UtensilsCrossed,
  Heart,
  Home,
  Globe,
  Tv,
  Sparkles,
  ArrowRight,
  Users,
  Lock,
  Mail,
  Star,
  TrendingUp, 
  HelpCircle, 
  CheckCircle, 
  Clock, 
  Calendar,
  Gift,
  Smartphone,
  Zap,
  CreditCard,
  Crown,
  Layers
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface Offer {
  id: string;
  brandName: string;
  brandLogo: string; // letters
  brandColor: string; // hex
  brandBg: string; // hex
  category: string;
  badgeText: string; // e.g. "EXCLUSIVE"
  title: string;
  description: string;
  isVerified: boolean;
  usedCount: string; // e.g. "1.2k"
  validTill: string;
  offerCount: number;
  isExpiringSoon: boolean;
}

export interface CategoryTab {
  id: string;
  name: string;
  icon: string; // emoji character
  offerCount: number;
}

// ============================================================================
// HARDCODED OFFERS DATA
// ============================================================================
const OFFERS_DATA: Offer[] = [
  {
    id: 'o-1',
    brandName: 'Myntra',
    brandLogo: 'M',
    brandColor: '#FF3F6C',
    brandBg: '#FFF0F4',
    category: 'Fashion',
    badgeText: 'EXCLUSIVE',
    title: 'Up to 80% OFF on Fashion & Lifestyle',
    description: 'Get up to 80% OFF on top brands. Shop for clothing, footwear, accessories & more.',
    isVerified: true,
    usedCount: '1.2k used today',
    validTill: '31 May 2024',
    offerCount: 1248,
    isExpiringSoon: false
  },
  {
    id: 'o-2',
    brandName: 'Amazon',
    brandLogo: 'a',
    brandColor: '#FF9900',
    brandBg: '#FFF8E7',
    category: 'Electronics',
    badgeText: 'EXCLUSIVE',
    title: 'Up to 70% OFF on Electronics',
    description: 'Great offers on mobiles, laptops, smartwatches, headphones & more.',
    isVerified: true,
    usedCount: '2.4k used today',
    validTill: '25 May 2024',
    offerCount: 2156,
    isExpiringSoon: true
  },
  {
    id: 'o-3',
    brandName: 'Flipkart',
    brandLogo: 'F',
    brandColor: '#2874F0',
    brandBg: '#EEF4FF',
    category: 'Electronics',
    badgeText: 'EXCLUSIVE',
    title: 'Up to 80% OFF + Extra Bank Discount',
    description: 'Big Savings on Smartphones, TVs, Appliances & more. Extra 10% off on select bank cards.',
    isVerified: true,
    usedCount: '1.8k used today',
    validTill: '24 May 2024',
    offerCount: 1102,
    isExpiringSoon: true
  },
  {
    id: 'o-4',
    brandName: 'MakeMyTrip',
    brandLogo: 'MMT',
    brandColor: '#E8262A',
    brandBg: '#FEF0F0',
    category: 'Travel',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 25% OFF on Hotel Bookings',
    description: 'Book hotels and get flat 25% OFF. No minimum booking amount required.',
    isVerified: true,
    usedCount: '876 used today',
    validTill: '31 May 2024',
    offerCount: 987,
    isExpiringSoon: false
  },
  {
    id: 'o-5',
    brandName: 'Swiggy',
    brandLogo: 'S',
    brandColor: '#FC8019',
    brandBg: '#FFF5EC',
    category: 'Food & Grocery',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 50% OFF on Food Orders',
    description: 'Order your favourite food and get 50% OFF on every order. Works for new and existing users.',
    isVerified: true,
    usedCount: '3.2k used today',
    validTill: '20 May 2024',
    offerCount: 865,
    isExpiringSoon: true
  },
  {
    id: 'o-6',
    brandName: 'Hostinger',
    brandLogo: 'H',
    brandColor: '#FF6B35',
    brandBg: '#FFF3EE',
    category: 'Web Hosting',
    badgeText: 'EXCLUSIVE',
    title: 'Up to 85% OFF on Web Hosting',
    description: 'Get up to 85% OFF on Hosting + Free Domain & SSL Certificate.',
    isVerified: true,
    usedCount: '654 used today',
    validTill: '30 May 2024',
    offerCount: 356,
    isExpiringSoon: false
  },
  {
    id: 'o-7',
    brandName: 'Nykaa',
    brandLogo: 'N',
    brandColor: '#FC2779',
    brandBg: '#FFF0F6',
    category: 'Health & Beauty',
    badgeText: 'HOT DEAL',
    title: 'Up to 60% OFF on Beauty Products',
    description: 'Premium skincare, makeup and wellness products from top brands at amazing prices.',
    isVerified: true,
    usedCount: '987 used today',
    validTill: '28 May 2024',
    offerCount: 754,
    isExpiringSoon: false
  },
  {
    id: 'o-8',
    brandName: 'Zomato',
    brandLogo: 'Z',
    brandColor: '#E23744',
    brandBg: '#FEF0F1',
    category: 'Food & Grocery',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 60% OFF on First 5 Orders',
    description: 'New users get flat 60% off on first 5 orders. Per-order discount capped — check the app for current limit.',
    isVerified: true,
    usedCount: '4.1k used today',
    validTill: '25 May 2024',
    offerCount: 589,
    isExpiringSoon: true
  },
  {
    id: 'o-9',
    brandName: 'Ajio',
    brandLogo: 'AJ',
    brandColor: '#000000',
    brandBg: '#F5F5F5',
    category: 'Fashion',
    badgeText: 'SPECIAL',
    title: 'Flat 25% OFF on Fashion Orders',
    description: 'Shop from 500+ fashion brands and get flat 25% OFF. No minimum order value on selected styles.',
    isVerified: true,
    usedCount: '543 used today',
    validTill: '29 May 2024',
    offerCount: 845,
    isExpiringSoon: false
  },
  {
    id: 'o-10',
    brandName: 'BigBasket',
    brandLogo: 'BB',
    brandColor: '#84C225',
    brandBg: '#F4FBEA',
    category: 'Food & Grocery',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 20% OFF on Grocery Orders',
    description: 'Fresh fruits, vegetables, dairy and grocery essentials. Flat 20% off on your order instantly.',
    isVerified: true,
    usedCount: '765 used today',
    validTill: '27 May 2024',
    offerCount: 412,
    isExpiringSoon: true
  },
  {
    id: 'o-11',
    brandName: 'Coursera',
    brandLogo: 'C',
    brandColor: '#0056D2',
    brandBg: '#EEF4FF',
    category: 'Education',
    badgeText: 'LIMITED',
    title: 'Up to 65% OFF on Online Courses',
    description: 'Learn from top universities worldwide. Get certificates from Google, IBM, Meta and more.',
    isVerified: true,
    usedCount: '321 used today',
    validTill: '31 May 2024',
    offerCount: 254,
    isExpiringSoon: false
  },
  {
    id: 'o-12',
    brandName: 'OYO',
    brandLogo: 'OYO',
    brandColor: '#EE2E24',
    brandBg: '#FEECEB',
    category: 'Travel',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 40% OFF on Hotel Bookings',
    description: 'Book your stay at 40% off. Valid across OYO properties. No coupon code needed - discount applied at checkout.',
    isVerified: true,
    usedCount: '432 used today',
    validTill: '26 May 2024',
    offerCount: 265,
    isExpiringSoon: true
  },
  {
    id: 'o-13',
    brandName: 'boAt',
    brandLogo: 'boAt',
    brandColor: '#1A1A2E',
    brandBg: '#F5F5F5',
    category: 'Electronics',
    badgeText: 'FLASH SALE',
    title: 'Up to 60% OFF on boAt Audio Products',
    description: 'Earphones, headphones, speakers and smartwatches at up to 60% off during flash sale.',
    isVerified: true,
    usedCount: '1.1k used today',
    validTill: '22 May 2024',
    offerCount: 523,
    isExpiringSoon: true
  },
  {
    id: 'o-14',
    brandName: 'Lenskart',
    brandLogo: 'LK',
    brandColor: '#1BA8A0',
    brandBg: '#E6F9F8',
    category: 'Health & Beauty',
    badgeText: 'EXCLUSIVE',
    title: 'Buy 1 Get 1 Free on Eyewear',
    description: 'Buy any frame and get a second pair absolutely free. Valid on a wide range of frames - check the site for eligible styles.',
    isVerified: true,
    usedCount: '298 used today',
    validTill: '30 May 2024',
    offerCount: 187,
    isExpiringSoon: false
  },
  {
    id: 'o-15',
    brandName: 'Croma',
    brandLogo: 'croma',
    brandColor: '#1D8348',
    brandBg: '#EAFAF1',
    category: 'Electronics',
    badgeText: 'EXCLUSIVE',
    title: 'Up to 55% OFF on Home Appliances',
    description: 'ACs, refrigerators, washing machines and more at lowest prices with bank card offers.',
    isVerified: true,
    usedCount: '567 used today',
    validTill: '28 May 2024',
    offerCount: 478,
    isExpiringSoon: false
  },
  {
    id: 'o-16',
    brandName: 'Mamaearth',
    brandLogo: 'mama',
    brandColor: '#6AB04C',
    brandBg: '#F0FAF0',
    category: 'Health & Beauty',
    badgeText: 'NEW',
    title: 'Extra 30% OFF on Skincare Range',
    description: 'Vitamin C, onion hair oil, face wash and complete skincare range at extra 30% off.',
    isVerified: true,
    usedCount: '234 used today',
    validTill: '31 May 2024',
    offerCount: 456,
    isExpiringSoon: false
  },
  {
    id: 'o-17',
    brandName: 'Goibibo',
    brandLogo: 'go',
    brandColor: '#E8262A',
    brandBg: '#FEF0F0',
    category: 'Travel',
    badgeText: 'EXCLUSIVE',
    title: 'Flat 30% OFF on Flight Bookings',
    description: 'Book domestic flights and get flat 30% off. Valid on all routes - check the app for current eligible sectors.',
    isVerified: true,
    usedCount: '445 used today',
    validTill: '23 May 2024',
    offerCount: 398,
    isExpiringSoon: true
  },
  {
    id: 'o-18',
    brandName: 'Netflix',
    brandLogo: 'N',
    brandColor: '#E50914',
    brandBg: '#FEEEEF',
    category: 'Entertainment',
    badgeText: 'SPECIAL',
    title: '3 Months Subscription at 50% OFF',
    description: 'Get Netflix premium at half price for 3 months. New subscribers only. Limited period offer.',
    isVerified: true,
    usedCount: '876 used today',
    validTill: '31 May 2024',
    offerCount: 312,
    isExpiringSoon: false
  }
];

// ============================================================================
// CATEGORY TABS DATA
// ============================================================================
const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', name: 'All Offers', icon: '🏷️', offerCount: 10000 },
  { id: 'fashion', name: 'Fashion', icon: '👗', offerCount: 1234 },
  { id: 'electronics', name: 'Electronics', icon: '📱', offerCount: 1198 },
  { id: 'travel', name: 'Travel', icon: '✈️', offerCount: 1543 },
  { id: 'food', name: 'Food & Grocery', icon: '🛒', offerCount: 1876 },
  { id: 'beauty', name: 'Health & Beauty', icon: '💄', offerCount: 987 },
  { id: 'home', name: 'Home & Kitchen', icon: '🏠', offerCount: 1023 }
];

// ============================================================================
// SIDEBAR CATEGORIES DEFINITIONS
// ============================================================================
const SIDEBAR_CATEGORIES = [
  { name: 'Fashion & Lifestyle', icon: ShoppingBag, count: '1,234' },
  { name: 'Electronics', icon: Monitor, count: '1,198' },
  { name: 'Travel', icon: Plane, count: '1,543' },
  { name: 'Food & Grocery', icon: UtensilsCrossed, count: '1,876' },
  { name: 'Health & Beauty', icon: Heart, count: '987' },
  { name: 'Home & Kitchen', icon: Home, count: '1,023' },
  { name: 'Web Hosting', icon: Globe, count: '678' },
  { name: 'Entertainment', icon: Tv, count: '543' }
];

// ============================================================================
// SIDEBAR TOP BRANDS
// ============================================================================
const SIDEBAR_TOP_BRANDS = [
  { name: 'Amazon', logo: 'a', logoColor: '#FF9900', logoBg: '#FFF8E7', count: '2,156' },
  { name: 'Myntra', logo: 'M', logoColor: '#FF3F6C', logoBg: '#FFF0F4', count: '1,248' },
  { name: 'Flipkart', logo: 'F', logoColor: '#2874F0', logoBg: '#EEF4FF', count: '1,102' },
  { name: 'MakeMyTrip', logo: 'MMT', logoColor: '#E8262A', logoBg: '#FEF0F0', count: '987' },
  { name: 'Swiggy', logo: 'S', logoColor: '#FC8019', logoBg: '#FFF5EC', count: '865' }
];

// ============================================================================
// MAIN COMPONENT DEFINITION
// ============================================================================
export default function Offers() {
  const [activeCategory, setActiveCategory] = useState<string>('All Offers');
  const [sortBy, setSortBy] = useState<string>('Latest');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');

  // Newsletter Submit
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Awesome! You have successfully subscribed to the SaveMate newsletter with: ${newsletterEmail}. Get ready to discover exclusive savings directly in your inbox!`);
      setNewsletterEmail('');
    }
  };

  // Click View Offer Action
  const handleViewOffer = (brandName: string, title: string) => {
    alert(`Offer from ${brandName} noted: "${title}". Click through to the brand site and the discount will be applied at checkout.`);
  };

  // Helper parsers for sorting
  const parseUsedCount = (countStr: string): number => {
    const numStr = countStr.split(' ')[0];
    if (numStr.endsWith('k')) {
      return parseFloat(numStr) * 1000;
    }
    return parseFloat(numStr) || 0;
  };

  const parseDate = (dateStr: string): number => {
    const parts = dateStr.split(' ');
    if (parts.length !== 3) return 0;
    const day = parseInt(parts[0], 10);
    const months: Record<string, number> = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const month = months[parts[1]] ?? 0;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day).getTime();
  };

  const parseDiscountPercentage = (title: string): number => {
    const match = title.match(/(\d+)%/);
    if (match) return parseInt(match[1], 10);
    const numbers = title.match(/\d+/g);
    if (numbers) {
      return Math.max(...numbers.map((n) => parseInt(n, 10)));
    }
    return 0;
  };

  // Filter & Sort computation
  const processedOffers = useMemo(() => {
    // 1. FILTERING
    let result = [...OFFERS_DATA];
    if (activeCategory !== 'All Offers') {
      // Normalize category checking
      result = result.filter(
        (o) => o.category.toLowerCase().trim() === activeCategory.toLowerCase().trim()
      );
    }

    // 2. SORTING
    if (sortBy === 'Latest') {
      // Sorted by default ID ordering (which is equivalent to entry order)
      result.sort((a, b) => a.id.localeCompare(b.id)); // standard original order
    } else if (sortBy === 'Most Popular' || sortBy === 'Most Used') {
      result.sort((a, b) => parseUsedCount(b.usedCount) - parseUsedCount(a.usedCount));
    } else if (sortBy === 'Expiring Soon') {
      result.sort((a, b) => {
        if (a.isExpiringSoon && !b.isExpiringSoon) return -1;
        if (!a.isExpiringSoon && b.isExpiringSoon) return 1;
        return parseDate(a.validTill) - parseDate(b.validTill);
      });
    } else if (sortBy === 'Highest Discount') {
      result.sort((a, b) => parseDiscountPercentage(b.title) - parseDiscountPercentage(a.title));
    }

    return result;
  }, [activeCategory, sortBy]);

  // Tab change wrapper to automatically reset the visible page state
  const handleTabClick = (tabName: string) => {
    setActiveCategory(tabName);
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* ============================================================================
          SECTION 1  -  HERO BANNER (White / Light Background)
          ============================================================================ */}
      <section className="relative w-full bg-[#F0EEFF] border-b border-[#E8E8F0] overflow-hidden min-h-[280px] py-10 px-6">
        
        {/* Subtle decorative purple and orange background shapes in corners */}
        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#F0EEFF]/55 pointer-events-none select-none" />
        <div className="absolute top-[-30px] right-[5%] w-[200px] h-[200px] rounded-full bg-[#FFF3F0]/60 pointer-events-none select-none" />
        
        {/* Decorative ◆ diamonds */}
        <span className="absolute top-10 left-[14%] text-[#5B4FBE]/25 text-xl font-bold pointer-events-none select-none">◆</span>
        <span className="absolute bottom-12 left-[38%] text-[#FF5722]/20 text-sm font-bold pointer-events-none select-none">◆</span>
        <span className="absolute top-6 right-[42%] text-[#22C55E]/15 text-lg font-bold pointer-events-none select-none">◆</span>
        <span className="absolute bottom-16 right-[12%] text-[#F59E0B]/20 text-2xl font-bold pointer-events-none select-none">◆</span>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 text-left">
          
          {/* LEFT SIDE  -  Content Area (58% visual weight) */}
          <div className="md:col-span-6 flex flex-col items-start">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-bold">Offers</span>
            </div>

            {/* H1 Primary Header */}
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A2E] tracking-tight mt-3 select-none">
              All Offers
            </h1>

            {/* Paragraph Descriptive Description */}
            <p className="text-[#4A4A6A] text-base md:text-lg mt-3 max-w-md leading-relaxed select-none">
              Verified offers from 500+ brands. All tested. All updated. No expired listings.
            </p>

            {/* 4 Stat Mini Cards */}
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0">
                  <Tag size={18} />
                </div>
                <div>
                  <div className="font-black text-[#1A1A2E] text-sm leading-none">10,000+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Offers</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0">
                  <Store size={18} />
                </div>
                <div>
                  <div className="font-black text-[#1A1A2E] text-sm leading-none">500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Top Brands</div>
                </div>
              </div>

              
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FEFBE8] p-2.5 rounded-xl text-[#F59E0B] shrink-0">
                  <Percent size={18} />
                </div>
                <div>
                  <div className="font-black text-[#1A1A2E] text-sm leading-none">Up to 85%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Biggest Discounts</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE  -  Hero Image (hidden mobile) */}
          <div className="hidden md:col-span-6 md:flex items-center justify-center relative overflow-visible select-none">
            <div className="relative w-160 h-80">
              <NextImage
                src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1782636289/all-offers_hme2ug.webp"
                alt="Browse all offers on CouponScrew"
                fill
                sizes="(max-width: 768px) 0px, 320px"
                referrerPolicy="no-referrer"
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2  -  CATEGORY TABS ROW
          ============================================================================ */}
      <section className="bg-white border-y border-[#E8E8F0] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
            
            {/* Standard Category Tabs Rendering */}
            {CATEGORY_TABS.map((tab) => {
              const isCurrent = activeCategory === tab.name;

              return (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.name)}
                  className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl cursor-pointer transition-all duration-200 min-w-[100px] flex-shrink-0 text-center ${
                    isCurrent
                      ? 'bg-[#5B4FBE]/10 border-b-2 border-[#5B4FBE]'
                      : 'hover:bg-[#F8F8FF]'
                  }`}
                >
                  {/* Emoji circle status */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-colors duration-200 ${
                      isCurrent ? 'bg-[#5B4FBE]' : 'bg-[#F8F8FF] border border-[#E8E8F0]'
                    }`}
                  >
                    <span>{tab.icon}</span>
                  </div>

                  {/* Category Name */}
                  <span
                    className={`text-xs select-none ${
                      isCurrent ? 'font-bold text-[#5B4FBE]' : 'font-semibold text-[#1A1A2E]'
                    }`}
                  >
                    {tab.name}
                  </span>

                  {/* Offer count */}
                  <span
                    className={`text-[10px] select-none ${
                      isCurrent ? 'text-[#5B4FBE] font-bold' : 'text-[#4A4A6A]'
                    }`}
                  >
                    {tab.offerCount.toLocaleString('en-IN')}+ offers
                  </span>
                </div>
              );
            })}

            {/* Special "View All Categories" tab */}
            <Link href="/categories"
              className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl cursor-pointer hover:bg-[#F8F8FF] transition-all duration-200 min-w-[100px] flex-shrink-0 text-center select-none"
            >
              {/* Lucide LayoutGrid Icon representation */}
              <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] border border-[#E8E8F0] flex items-center justify-center text-[#5B4FBE]">
                <LayoutGrid size={20} className="stroke-[2.5]" />
              </div>

              <span className="text-xs font-semibold text-[#1A1A2E]">
                View All Categories
              </span>

              <span className="text-[10px] text-[#5B4FBE] font-bold">
                ⊞ Explore All
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 3  -  MAIN CONTENT  -  2 COLUMN LAYOUT WITH OFFERS LIST
          ============================================================================ */}
      <section className="bg-[#F8F8FF] py-10 flex-1">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-7 items-start">
          
          {/* ============================================================================
              LEFT CONTENT  -  OFFERS LIST VIEW
              ============================================================================ */}
          <div className="flex-1 w-full text-left">
            
            {/* Header Toolbar row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none select-none">
                  Latest Offers
                </h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">
                  Discovered {processedOffers.length} available offers for you {activeCategory !== 'All Offers' ? `in ${activeCategory}` : ''}
                </p>
              </div>

              {/* Sort selector dropdown */}
              <div className="flex items-center gap-2.5 shrink-0 select-none">
                <span className="text-sm font-semibold text-[#4A4A6A] whitespace-nowrap">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort offers"
                  className="border border-[#E8E8F0] rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer transition-all hover:bg-gray-50 text-[#1A1A2E] font-medium"
                >
                  <option value="Latest">Latest</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Expiring Soon">Expiring Soon</option>
                  <option value="Highest Discount">Highest Discount</option>
                  <option value="Most Used">Most Used</option>
                </select>
              </div>
            </div>

            {/* OFFERS LIST RENDER CONTAINER */}
            {processedOffers.length > 0 ? (
              <div className="space-y-4">
                {processedOffers.slice(0, visibleCount).map((offer) => {
                  
                  // Setup custom badge styling background classes
                  let badgeBgColorCls = 'bg-[#22C55E]';
                  if (offer.badgeText === 'HOT DEAL') badgeBgColorCls = 'bg-[#EF4444]';
                  else if (offer.badgeText === 'FLASH SALE') badgeBgColorCls = 'bg-[#FF5722]';
                  else if (offer.badgeText === 'LIMITED') badgeBgColorCls = 'bg-[#F59E0B]';
                  else if (offer.badgeText === 'SPECIAL') badgeBgColorCls = 'bg-[#5B4FBE]';
                  else if (offer.badgeText === 'NEW') badgeBgColorCls = 'bg-[#0EA5E9]';

                  return (
                    <div
                      key={offer.id}
                      onClick={() => handleViewOffer(offer.brandName, offer.title)}
                      className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-lg hover:border-[#5B4FBE]/30 transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row items-start gap-5"
                    >
                      
                      {/* Left: Brand logo column (flex-shrink-0) */}
                      <div className="flex-shrink-0 text-center w-20 flex sm:flex-col items-center justify-between sm:justify-start gap-3 sm:gap-0 mx-auto sm:mx-0 w-full sm:w-20">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs border border-white"
                          style={{ backgroundColor: offer.brandBg }}
                        >
                          <span
                            className="font-black text-lg uppercase tracking-wide"
                            style={{ color: offer.brandColor }}
                          >
                            {offer.brandLogo}
                          </span>
                        </div>
                        
                        <div className="sm:mt-2 text-left sm:text-center flex-1 sm:flex-initial">
                          <h3 className="font-extrabold text-xs text-[#1A1A2E] leading-tight max-w-[80px] break-words mx-auto">
                            {offer.brandName}
                          </h3>
                          
                          {/* Category pill indicator */}
                          <div className="mt-1 text-center">
                            <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {offer.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Center: Offer details & copy description (flex-1) */}
                      <div className="flex-1 text-left w-full">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`inline-block text-[10px] font-black text-white px-2.5 py-0.5 rounded-full ${badgeBgColorCls} leading-none tracking-wider`}>
                            {offer.badgeText}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-[#1A1A2E] text-base md:text-lg leading-tight group-hover:text-[#5B4FBE] transition-colors line-clamp-1">
                          {offer.title}
                        </h3>

                        <p className="text-[#4A4A6A] text-sm mt-1.5 leading-relaxed font-medium line-clamp-2">
                          {offer.description}
                        </p>

                        {/* Bottom verification parameters */}
                        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs select-none">
                          {offer.isVerified && (
                            <div className="inline-flex items-center gap-1 text-[#22C55E]">
                              <ShieldCheck size={14} className="stroke-[2.5]" />
                              <span className="font-bold">Verified</span>
                            </div>
                          )}

                          <div className="inline-flex items-center gap-1 text-gray-400">
                            <Users size={13} />
                            <span className="font-semibold">{offer.usedCount}</span>
                          </div>
                        </div>

                      </div>

                      {/* Right: Valid till expiry + direct copy action button */}
                      <div className="flex-shrink-0 flex flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-3 w-full sm:w-auto min-w-[140px] pt-4 sm:pt-0 border-t sm:border-t-0 border-[#E8E8F0]">
                        
                        <div className="sm:text-right text-center select-none">
                          <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                            Valid Till
                          </span>
                          <span
                            className={`block font-extrabold text-sm mt-0.5 ${
                              offer.isExpiringSoon ? 'text-[#EF4444]' : 'text-[#4A4A6A]'
                            }`}
                          >
                            {offer.validTill}
                          </span>
                          
                          {/* Expiring soon flashing warning text */}
                          {offer.isExpiringSoon && (
                            <span className="block text-[10px] text-[#EF4444] font-black tracking-wide uppercase mt-1 animate-pulse">
                              ⚡ Expiring Soon!
                            </span>
                          )}
                        </div>

                        {/* Interactive trigger copy button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // prevent nested card alerts triggers
                            handleViewOffer(offer.brandName, offer.title);
                          }}
                          className="w-full sm:w-auto bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ExternalLink size={14} className="stroke-[2.5]" />
                          <span>View Offer</span>
                        </button>

                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              /* Nested empty states filters configuration */
              <div className="text-center py-16 bg-white border border-dashed border-[#E8E8F0] rounded-3xl max-w-sm mx-auto">
                <span className="text-4xl text-gray-300 font-bold block mb-2">🔍</span>
                <h3 className="font-bold text-[#1A1A2E]">No matches found</h3>
                <p className="text-xs text-[#4A4A6A] mt-1 px-4 leading-relaxed font-semibold">
                  We currently do not have any offers listed in "{activeCategory}". Click below to explore all active offers.
                </p>
                <button
                  onClick={() => handleTabClick('All Offers')}
                  className="mt-4 bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Show All Offers
                </button>
              </div>
            )}

            {/* VIEW MORE / PROGRESSIVE OVERFLOW TRIGGER BUTTON */}
            <div className="mt-8 text-center select-none">
              {processedOffers.length > visibleCount ? (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="border border-[#5B4FBE] text-[#5B4FBE] px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#5B4FBE] hover:text-white transition w-fit mx-auto flex items-center gap-2 active:scale-95 cursor-pointer bg-white"
                >
                  <ChevronDown size={16} className="stroke-[2.5]" />
                  <span>View More Offers</span>
                </button>
              ) : (
                <button
                  disabled
                  className="border border-gray-200 text-gray-400 bg-gray-50/80 px-10 py-3 rounded-full font-bold text-sm w-fit mx-auto flex items-center gap-2"
                >
                  <span>✓ All Offers Loaded</span>
                </button>
              )}
            </div>

          </div>

          {/* ============================================================================
              RIGHT CONTENT  -  STICKY SIDEBAR AREA
              ============================================================================ */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start text-left z-20">

            {/* SIDEBAR CARD 1  -  Top Offer Categories */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Top Offer Categories
              </h3>

              <div className="space-y-1">
                {SIDEBAR_CATEGORIES.map((cat, idx) => {
                  const CatIcon = cat.icon;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleTabClick(cat.name === 'Fashion & Lifestyle' ? 'Fashion' : cat.name)}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group"
                    >
                      <CatIcon size={16} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                      
                      <span className="text-sm text-[#4A4A6A] group-hover:text-[#5B4FBE] group-hover:font-bold flex-1 truncate">
                        {cat.name}
                      </span>
                      
                      <span className="text-xs text-gray-400 ml-auto select-none font-semibold">
                        {cat.count}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Browse Categories link */}
              <div className="mt-4 pt-4 border-t border-[#E8E8F0] text-center select-none">
                <Link href="/categories"
                  className="text-xs text-[#5B4FBE] font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>View All Categories</span>
                  <ArrowRight size={13} className="stroke-[2.5]" />
                </Link>
              </div>

            </div>

            {/* SIDEBAR CARD 2  -  Top Brands With Offers */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Top Brands With Offers
              </h3>

              <div className="space-y-3">
                {SIDEBAR_TOP_BRANDS.map((brand, idx) => {
                  return (
                    <Link
                      key={idx}
                      href="/brands"
                      className="flex items-center gap-3 hover:translate-x-0.5 transition-transform duration-200"
                    >
                      {/* Avatar design */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black select-none shrink-0"
                        style={{ backgroundColor: brand.logoBg, color: brand.logoColor }}
                      >
                        {brand.logo}
                      </div>

                      <span className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex-1 truncate">
                        {brand.name}
                      </span>

                      <span className="text-xs text-[#4A4A6A] font-medium leading-none shrink-0">
                        {brand.count} Offers
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* View all brands navigation link */}
              <div className="mt-4 pt-4 border-t border-[#E8E8F0] text-center select-none">
                <Link href="/brands"
                  className="text-xs text-[#5B4FBE] font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>View All Brands</span>
                  <ArrowRight size={13} className="stroke-[2.5]" />
                </Link>
              </div>

            </div>

            {/* SIDEBAR CARD 3  -  Don't Miss Out Newsletter subscription card */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 relative overflow-hidden text-white shadow-md">
              
              {/* Abs circle overlay decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none select-none" />

              {/* Abs floating tag inside background */}
              <span className="absolute top-4 right-4 text-3xl opacity-20 pointer-events-none select-none">🏷️</span>

              <h3 className="font-bold text-white text-base leading-none select-none">
                Don't Miss Out!
              </h3>

              <p className="text-white/70 text-xs mt-2.5 leading-relaxed font-semibold select-none">
                Get verified offers from 500+ brands straight to your inbox. No spam.
              </p>

              {/* Subscription form */}
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white rounded-xl px-4 py-2.5 text-xs text-[#1A1A2E] w-full focus:outline-none placeholder:text-gray-400 font-semibold shadow-xs"
                />

                <button
                  type="submit"
                  className="w-full bg-[#FF5722] hover:bg-orange-600 active:scale-95 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer select-none"
                >
                  Subscribe
                </button>
              </form>

              {/* Envelope white shape background inside right edge */}
              <div className="absolute bottom-3 right-3 bg-white/10 p-2.5 rounded-full pointer-events-none">
                <span className="text-xl">📧</span>
              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================================
          SECTION 4  -  TRUST BADGES STRIP
          ============================================================================ */}
      <section className="bg-white border-t border-[#E8E8F0] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            
            {/* Badge 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-3xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center mb-3 shadow-xs">
                <ShieldCheck size={26} className="stroke-[2]" />
              </div>
              <h2 className="font-extrabold text-sm text-[#1A1A2E] tracking-tight">
                100% Verified Offers
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1 pr-1 font-semibold leading-relaxed">
                Manually checked &amp; updated
              </p>
            </div>

            {/* Badge 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-3xl bg-[#FFF3F0] text-[#FF5722] flex items-center justify-center mb-3 shadow-xs">
                <Tag size={26} className="stroke-[2]" />
              </div>
              <h2 className="font-extrabold text-sm text-[#1A1A2E] tracking-tight">
                Best Discounts
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1 pr-1 font-semibold leading-relaxed">
                Get the biggest savings
              </p>
            </div>

            {/* Badge 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-3xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center mb-3 shadow-xs">
                <Star size={26} className="stroke-[2] fill-amber-400" />
              </div>
              <h2 className="font-extrabold text-sm text-[#1A1A2E] tracking-tight">
                Exclusive Offers
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1 pr-1 font-semibold leading-relaxed">
                Only for our users
              </p>
            </div>

            {/* Badge 4 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-3xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center mb-3 shadow-xs">
                <Lock size={26} className="stroke-[2]" />
              </div>
              <h2 className="font-extrabold text-sm text-[#1A1A2E] tracking-tight">
                Safe &amp; Secure
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1 pr-1 font-semibold leading-relaxed">
                Your data is protected
              </p>
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Offers Overview</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              The Best Brand Offers — All in One Place
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                A coupon code gets you a discount. An offer gives you something bigger.
              </p>
              <p>
                Brand offers are the large-scale promotions that top platforms run to drive sales - seasonal sales, festive campaigns, app-exclusive events, new user bonuses, and limited-time campaigns that go well beyond a single discount code. These are the deals that deliver the deepest savings when you catch them at the right moment.
              </p>
              <p>
                This page tracks every active brand offer across the top shopping platforms - Myntra&apos;s End of Reason Sale, Amazon&apos;s Great Indian Festival preview offers, Zomato weekend specials, MakeMyTrip travel promotions, Nykaa beauty campaigns. If a major brand has an offer running right now, it&apos;s listed here.
              </p>
              <p>
                No more missing a sale because you didn&apos;t see the email. No more landing on a page that says "this offer has ended." Couponscrew tracks what&apos;s live, what&apos;s coming, and what&apos;s about to expire.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Strategic Distinctions</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              What Makes an Offer Different From a Regular Coupon
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Most shoppers use the words offer, deal, and coupon interchangeably. They&apos;re related - but they&apos;re not the same thing, and understanding the difference helps you save more.
              </p>
              <p>
                A coupon code — or voucher code, as some platforms call it — is a string like SAVE20 or FLAT500 that you enter at checkout. It works on individual transactions and usually has a minimum order value.
              </p>
              <p>
                A deal is a reduced price on a specific product - the saving is already built in and no code is needed. A phone marked down 30% from its original price is a deal.
              </p>
              <p>
                An offer is a broader brand-level promotion - a campaign, a sale event, or a programme that a brand runs for a defined period. A Flipkart Big Billion Days offer, for example, includes product discounts, coupon codes, bank card cashbacks, free delivery thresholds, and exchange bonuses all under one umbrella.
              </p>
              <p>
                This page focuses on brand-level promotions specifically - because they represent the highest-value savings windows of the year. Catching a major offer at launch and acting on it is what separates consistent savers from people who find out it ended yesterday.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Offer Classifications</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Types of Brand Offers You Will Find on This Page
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Couponscrew tracks every major category of brand offer running across the top platforms — from seasonal campaigns to targeted discount offers. Here is what you will regularly find listed here:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Calendar className="w-4 h-4 text-[#FF9900]" />,
                  title: "Seasonal Sale Offers",
                  body: "The biggest saving events of the year - Myntra End of Reason Sale, Flipkart Big Billion Days, Amazon Great Indian Festival, Nykaa Pink Friday, Ajio Wow Sale, and more. Time-bound campaigns where brands offer their deepest annual discounts across thousands of products. We track start dates, end dates, and the best offers within each event."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Festive Season Offers",
                  body: "Diwali, Holi, Eid, Christmas, and New Year all bring waves of brand promotions across every category. Electronics take big price cuts. Fashion brands run flat percentage offs across catalogues. Food platforms stack free delivery and cashback. We aggregate everything so you don&apos;t miss the window."
                },
                {
                  icon: <Gift className="w-4 h-4 text-[#10B981]" />,
                  title: "New User Offers",
                  body: "First-order bonuses from Zomato, Swiggy, BigBasket, Blinkit, MakeMyTrip, Nykaa, and more. These are among the highest-value single-use offers available - and they expire the moment you place your first order. We track which platforms currently have strong new-user deals so you know where to start."
                },
                {
                  icon: <Smartphone className="w-4 h-4 text-[#2874F0]" />,
                  title: "App-Only Offers",
                  body: "Many brands reserve their strongest promotions exclusively for mobile app users. Zomato, Myntra, Amazon, and Flipkart all run app-exclusive campaigns at various points through the year. These don&apos;t appear on desktop - and most shoppers miss them entirely. We flag app-only offers clearly so you know when switching to the app is worth it."
                },
                {
                  icon: <Zap className="w-4 h-4 text-[#F59E0B]" />,
                  title: "Weekend and Flash Offers",
                  body: "Short-window promotions that run for 24 to 72 hours - sometimes less. Swiggy weekend specials, Amazon Lightning Deal windows, Flipkart Supercoins events, and Myntra daily style offers fall here. Flash offers require fast action. We mark these with an \"Ending Soon\" flag so you catch them before they close."
                },
                {
                  icon: <CreditCard className="w-4 h-4 text-[#8B5CF6]" />,
                  title: "Bank and Wallet Offers",
                  body: "HDFC, ICICI, SBI, Axis, and Kotak regularly partner with top brands to offer card-linked cashbacks and EMI discounts during sale periods. Paytm, PhonePe, and Amazon Pay wallet offers also fall here. These are separate from the brand&apos;s own promotion - but we list them alongside so you can stack both."
                },
                {
                  icon: <Crown className="w-4 h-4 text-[#FC2779]" />,
                  title: "Membership and Loyalty Offers",
                  body: "Amazon Prime exclusive discounts, Zomato Gold member deals, Swiggy One benefits, Myntra Insider perks, and Nykaa loyalty program promotions. If you hold a membership with any major platform, this page helps you identify when that membership is delivering its highest value."
                }
              ].map((offer, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-50 flex items-center justify-center">
                      {offer.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{offer.title}</h3>
                  </div>
                  <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{offer.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Redemption Manual</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use an Offer From Couponscrew
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Redeeming a brand offer found on Couponscrew is slightly different from using a coupon code. Here is the step-by-step process:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your offer", desc: "Browse the offers listed on this page or use the search bar to find a specific brand. Each offer card shows the brand, offer type, saving value or percentage, and validity window." },
                  { step: "2", title: "Read the offer terms", desc: "Brand offers often have specific conditions - minimum cart value, eligible product categories, applicable payment methods. Read the terms on the offer card before clicking through." },
                  { step: "3", title: "Click Get Offer", desc: "You will be taken directly to the brand's active offer page or the relevant landing page for that promotion. The offer will already be active on arrival — no additional code needed in most cases. If one is, any required voucher code will be shown on the offer card before you click through." },
                  { step: "4", title: "Shop within the offer terms", desc: "Add products that qualify under the offer to your cart. Stick to the eligible categories and meet any minimum order value specified." },
                  { step: "5", title: "Select the qualifying payment method", desc: "For bank card or wallet offers, ensure you pay using the specified payment method to trigger the cashback or additional discount." },
                  { step: "6", title: "Confirm and save", desc: "Review the final price at checkout, confirm all applicable discounts have been applied, and place your order." }
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
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Optimization Strategy</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips to Get the Most From Brand Offers
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Track offer start dates, not just end dates.</strong> The best products and highest-value deals within a sale offer get claimed early. Knowing when a brand offer launches — not just when it ends — means you shop at the start of the window when selection and availability are highest.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Combine offer types wherever possible.</strong> A seasonal sale offer plus a bank card cashback plus a wallet bonus can stack on the same order with many brands. Couponscrew lists all active offer types for a brand simultaneously — always check if multiple offer types apply to your purchase before checkout.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Set a reminder for flash offers.</strong> Weekend specials and 24-hour flash promotions require fast action. When Couponscrew lists a flash offer, note the expiry time and set a phone reminder if you plan to use it later in the day. These offers do not wait.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New user offers are one-time — use them wisely.</strong> A new user offer on Zomato or BigBasket applies only to your first order. Don&apos;t waste it on a small purchase. Plan your first order to be one where the saving is maximised - a larger grocery haul or a delivery order where the percentage off actually adds up.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check membership offer value before renewing.</strong> If you&apos;re about to renew Amazon Prime, Zomato Gold, or Swiggy One - check this page first. Brands frequently run promotional renewal pricing that is significantly cheaper than the standard rate, especially around major sale events.</p>
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
                { q: "What is the difference between an offer and a coupon code on Couponscrew?", a: "A coupon code is a discount string you enter at checkout. An offer is a broader brand promotion - a sale event, a cashback campaign, a membership perk, or a platform-wide window. Offers here are brand-level promotions. Coupon codes are on the Deals and Stores pages." },
                { q: "How often are offers updated on this page?", a: "Daily. New promotions are added the moment they go live. Expired offers are pulled immediately. Flash and weekend offers are tracked in near real time given how short their windows are." },
                { q: "Do all offers require a coupon code?", a: "No. Many activate automatically when you click through from Couponscrew - the discount is applied without a code. Where a coupon or promo code is required, it&apos;s shown clearly on the offer card." },
                { q: "Can I use multiple offers at the same time?", a: "Depends on the brand&apos;s terms. Most brands allow stacking a sale offer with a bank card cashback - but won&apos;t let you combine two coupon-based offers on the same order. The offer card specifies what&apos;s stackable." },
                { q: "Are bank card and wallet offers listed here?", a: "Yes. Bank partner offers from HDFC, ICICI, SBI, Axis, and Kotak - plus wallet offers from Paytm, PhonePe, and Amazon Pay - are listed alongside the relevant brand offer so you can identify and stack both." },
                { q: "Is there a way to get notified when a new offer goes live?", a: "Bookmark this page and check back before any major purchase. Notification features are in the works - check back for updates." }
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
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Conclusion</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              Never Miss a Brand Offer Again
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                The difference between paying full price and paying significantly less is usually just timing - knowing when a brand offer is live and acting on it before it expires.
              </p>
              <p>
                This page removes the guesswork. Every major brand offer running right now is listed here - verified, categorised, and updated the moment anything changes. Seasonal sales, festive campaigns, flash events, bank partnerships, app-exclusive deals, membership perks - all in one place.
              </p>
              <p>
                Check this page before any significant online purchase. The offer you need is probably already live.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-24 self-start">

          {/* SIDEBAR CARD 1 - Matrix Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              Campaign Elements
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">The main offer types tracked on this page.</p>
            <div className="space-y-2">
              {[
                { type: "Seasonal Windows", val: "Large-Scale Sales" },
                { type: "First Orders", val: "New User Perks" },
                { type: "Platform Limits", val: "App-Only Filters" },
                { type: "Co-Branded Deals", val: "Bank & Wallet Stacks" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.type}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Real-Time Event Tracking</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Interface Controls */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#22C55E]" />
              Layout Parameters
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Flash Alerts
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Short-window offers get flagged with &quot;Ending Soon&quot; so you catch them before they close.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#FF9900]" />
                  Stack Conditions
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Bank and wallet offers are listed alongside brand offers so you can stack both on the same order.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Highlight Label */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Verification Scope</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Daily Refreshes</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Every offer is checked daily. Expired listings are pulled the moment they stop working.
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

