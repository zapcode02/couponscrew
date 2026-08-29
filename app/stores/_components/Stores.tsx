'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  ChevronRight,Plus, HelpCircle,
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
  GraduationCap,AlertCircle, CheckCircle2,
  Tv,
  Wallet,
  MoreHorizontal,
  X,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import { Store, STORES_DATA } from '../../../src/data/stores';

export type { Store };

// ==========================================
// TYPESCRIPT INTERFACES
// ==========================================
export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  count: string | number;
}

export default function Stores() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Stores');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Sort: Popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleStoreClick = (store: Store) => {
    router.push(`/stores/${store.slug}`);
  };

  // Pre-fill search from ?q= URL param (e.g. from Navbar store search)
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Secondary sidebar newsletter state
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);

  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Sidebar list categories structured configuration — counts derived from STORES_DATA
  const CATEGORIES: Category[] = useMemo(() => {
    const countFor = (categoryName: string) =>
      STORES_DATA.filter((store) => store.category.toLowerCase() === categoryName.toLowerCase()).length;

    const namedCategories = [
      { id: 'cat-fashion', name: 'Fashion & Lifestyle', icon: ShoppingBag },
      { id: 'cat-electronics', name: 'Electronics', icon: Monitor },
      { id: 'cat-food', name: 'Food & Grocery', icon: UtensilsCrossed },
      { id: 'cat-travel', name: 'Travel', icon: Plane },
      { id: 'cat-beauty', name: 'Health & Beauty', icon: Heart },
      { id: 'cat-hosting', name: 'Web Hosting', icon: Globe },
      { id: 'cat-edu', name: 'Education', icon: GraduationCap },
      { id: 'cat-ent', name: 'Entertainment', icon: Tv },
      { id: 'cat-finance', name: 'Finance', icon: Wallet }
    ];

    const namedCounts = namedCategories.map((cat) => countFor(cat.name));
    const othersCount = STORES_DATA.length - namedCounts.reduce((sum, c) => sum + c, 0);

    return [
      { id: 'cat-all', name: 'All Stores', icon: LayoutGrid, count: STORES_DATA.length },
      ...namedCategories.map((cat, i) => ({ ...cat, count: namedCounts[i] })),
      { id: 'cat-others', name: 'Others', icon: MoreHorizontal, count: othersCount }
    ];
  }, []);

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
  const itemsPerPage = 24;
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
      <section className="relative w-full bg-[#f0eeff] overflow-hidden py-2 md:py-2 px-2 border-b border-[#E8E8F0]">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column  -  Breadcrumbs & Headlines */}
          <div className="lg:col-span-6 text-left space-y-4">
            
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
              Browse our hand-picked stores. Find verified coupon codes, deals &amp; offers — updated daily.
            </p>

            {/* 2 stat mini cards */}
            <div className="pt-4 hidden sm:flex sm:flex-row gap-4 select-none">
              <div id="stat-trusted-stores" className="bg-white border border-[#E8E8F0] rounded-2xl px-6 py-4 flex items-center gap-3.5 shadow-xs w-full sm:w-64">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-lg leading-none">2</div>
                  <div className="text-xs text-[#4A4A6A] mt-1 font-medium">Hand-Picked Stores</div>
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

          {/* Right Column  -  Hero Image (Hidden on Mobile, Visible on lg+) */}
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center relative">
            <div className="relative w-full max-2w-md aspect-[4/3]">
              <NextImage
                src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1782632462/all-stores_zidl5x.webp"
                alt="Browse all stores on CouponScrew"
                fill
                sizes="(max-width: 1024px) 0px, 448px"
                referrerPolicy="no-referrer"
                className="object-contain"
                priority
              />
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
             <a
              href="https://www.google.com/preferences/source?q=couponscrew.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95"
            >
              <img
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp"
                alt="Google Preferred Source"
                className="h-[70px] w-auto object-contain"
              />
            </a>
            {/* Sidebar Card 1: Categories list filter */}
            <div id="sidebar-categories" className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h2 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center justify-between">
                <span>Categories</span>
                <span className="text-[10px] font-bold bg-[#F8F8FF] text-[#4A4A6A] px-2 py-0.5 rounded-full border border-[#E8E8F0]">Filter</span>
              </h2>
              
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
              
              <h3 className="font-extrabold text-sm tracking-tight flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#FFD700] shrink-0" />
                <span>Never Miss a Deal!</span>
              </h3>
              <p className="text-white/75 text-xs mt-1.5 leading-relaxed">
                Get the latest coupons &amp; offers straight to your inbox. Every store here is hand-verified.
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
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-4 tracking-tight">
                Why Shop With Us?
              </h3>
              
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
            

            </div>

            {/* Results count label details */}
            <div className="flex justify-between items-center mb-5 px-1 select-none">
             
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
                <h3 className="font-bold text-[#1A1A2E] text-lg">No stores match your filters</h3>
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
              <div id="stores-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => handleStoreClick(store)}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Logo Frame */}
                      <div
                        className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-[1.04] overflow-hidden shadow-2xs"
                        style={{ backgroundColor: store.logoBg }}
                      >
                        {store.logoImage ? (
                          <NextImage
                            src={store.logoImage}
                            alt={store.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span
                            className={`font-black tracking-tighter ${
                              store.logo.length > 3 ? 'text-sm' : 'text-lg md:text-xl'
                            }`}
                            style={{ color: store.logoColor }}
                          >
                            {store.logo}
                          </span>
                        )}
                      </div>

                      {/* Store Name */}
                      <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight truncate px-0.5 group-hover:text-[#5B4FBE] transition-colors">
                        {store.name}
                      </h3>
                    </div>

                    {/* Discount Label & Bottom CTA Row */}
                    <div className="space-y-2 mt-3">
                      <div className="text-xs font-black text-[#FF5722] bg-[#FFF2ED] rounded-lg py-1 px-2 inline-block max-w-full truncate">
                        {store.discountLabel}
                      </div>
                      <div className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all mt-1">
                        <span>Get Deal</span>
                        <ChevronRight size={12} className="stroke-[3]" />
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
                    onClick={() => handleStoreClick(store)}
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
                        <h3 className="font-extrabold text-[#1A1A2E] text-base group-hover:text-[#5B4FBE] transition-colors leading-none truncate">
                          {store.name}
                        </h3>
                        
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
              <div className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-none">100%</div>
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
      <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0] font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

    {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
    <div className="lg:col-span-7 space-y-10">

      {/* ARTICLE BLOCK 1: About */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">About CouponsCrew</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Hand-Picked Stores. Every Deal Worth Finding.
        </h2>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Most coupon websites never clean their listings. They rank for the search, you land, you try dead codes, you leave empty-handed. The site already got the click — your checkout outcome is not its problem.
          </p>
          <p>
            CouponsCrew was built differently. Every code on this platform is manually verified before it goes live. The ones that stop working get removed quickly — not left on the page to waste your time at the payment screen.
          </p>
          <p>
            Right now, the platform covers Amazon and Pepperfry — two trusted brands, fully verified — and we are adding more only when we can vouch for the codes ourselves.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 2: Three-Layer Stack */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Savings Strategy</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          How to Save More on Every Order — The Three-Layer Stack
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Most shoppers use one savings layer. The ones who consistently pay less use three. Here is how they stack.
        </p>
        
        <div className="space-y-4 mt-6">
          {[
            {
              layer: "Layer 1",
              title: "Get the verified code",
              desc: "Find the brand above, open the deal, copy the code. Every code here is manually tested before it goes live — so when you apply it at checkout, it works."
            },
            {
              layer: "Layer 2",
              title: "Check for a bank card offer at checkout",
              desc: "HDFC, ICICI, and SBI card offers run regularly on Amazon and Pepperfry. This is an instant discount applied at the payment stage — completely separate from the coupon code. Most shoppers miss it entirely because it does not appear until you select your payment method."
            },
            {
              layer: "Layer 3",
              title: "Run a cashback app in the background",
              desc: "Browser extension cashback apps return a percentage of your spend on top of everything else. They run passively — no extra steps at checkout. Stack one with a verified coupon code on a sale day and you are using every savings layer available at once."
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-4 p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
              <div className="w-16 shrink-0 flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-[#5B4FBE] tracking-wider mb-1">
                  {step.layer}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black">
                  {idx + 1}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1A1A2E]">{step.title}</h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
          <p className="text-xs text-[#2E7D32] leading-relaxed">
            All three layers are combinable in most cases. Check the terms of each offer to confirm before you pay.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: Categories & Strategy */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Market Breakdown</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Which Categories Have the Best Coupon Codes Right Now?
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Not all categories are equal when it comes to coupon depth. Here is where the real deals are — and what to watch for.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: "Electronics",
              color: "#FF9900",
              title: "Electronics",
              body: "Amazon's Great Indian Festival brings deep sitewide discounts across electronics. One thing worth doing before you buy: check the product's price history before assuming a sale price is actually low. MRP inflation is common — the crossed-out 'original price' is not always what the product was actually selling for before the sale began."
            },
            {
              label: "Home & Kitchen",
              color: "#D2691E",
              title: "Home & Kitchen",
              body: "Pepperfry runs furniture and décor sales, particularly around festive seasons. Bulkier items carry longer delivery windows, so factor that in before you commit to a sale price that is time-sensitive."
            },
            {
              label: "Strategy",
              color: "#5B4FBE",
              title: "Timing Your Purchase",
              body: "Both Amazon and Pepperfry run their deepest discounts during festive sale windows. If you are not in a rush, watching a product for a few days before buying often pays off — prices can drop further as a sale event moves toward its final hours."
            },
            {
              label: "Verification",
              color: "#22C55E",
              title: "Why Only Two Stores",
              body: "We would rather verify two stores properly than list fifty we cannot stand behind. Every code here is manually tested before it goes live. As we add more brands, each one goes through the same verification process before it earns a place on the platform — quality over quantity, every time."
            }
          ].map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }}></span>
                <span className="text-xs font-black uppercase tracking-wider" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
              <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE BLOCK 4: Industry Truths */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
          <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Industry Truths</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Why Most Coupon Sites Waste Your Time
        </h2>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Most coupon websites list a large number of codes per brand. The majority are expired. Some have not worked in years. They rank for the search, you land, you try the codes, they fail, you leave. The site got the traffic. You got nothing.
          </p>
          <p>
            This is not an oversight — it is the business model. Listing dead codes costs nothing. Verifying them takes real work. Most sites choose the easier path.
          </p>
          <p>
            CouponsCrew made a different call. Every code is manually tested before it goes live. A small number of verified codes beats a long list of dead ones at checkout — every time. That is not a positioning statement, it is just what saves money.
          </p>
          <p>
            One thing most coupon sites do not mention: browser extension cashback apps are the most underused savings layer available to online shoppers. Stack one with a verified coupon code on a sale day and you are using every available layer — coupon discount, bank card offer, and passive cashback running simultaneously. Even the best coupon sites rarely explain this. Most shoppers do not know the third layer exists.
          </p>
          
          <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
            <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
              When we describe a code as exclusive, we mean it cannot be found elsewhere. We use that word only when it is accurate.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK 5: Platform Banner */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
          <span className="text-xs font-black text-white/60 uppercase tracking-widest">Our Commitment</span>
        </div>
        <h2 className="text-2xl font-black text-white leading-tight">
          Hand-Verified Brands. One Standard.
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Amazon and Pepperfry — fully verified. Every code manually tested before it goes live. Expired codes removed promptly, not left as dead listings.
          </p>
          <p>
            Most shoppers choose online shopping specifically because of cashback and deals. The people who visit CouponsCrew are not looking for generic lists — they are looking for codes that work at checkout. That is the only kind we publish.
          </p>
          <p>
            As we add more brands, each one goes through the same manual verification before it earns a spot here.
          </p>
          <p className="text-white font-black tracking-wide pt-2">
            Find the store above. Copy the code. Pay less.
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT - SIDEBAR CARDS (30%) */}
    <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

      {/* SIDEBAR CARD 1 - Stack Visualizer */}
      <div className="space-y-6">
  {/* 3-Layer Stack Strategy Card */}
  <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
    <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
      <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
      The 3-Layer Stack Strategy
    </h3>
    <p className="text-xs text-[#4A4A6A] mb-4">Combine all three layers for maximum discount compounding.</p>
    
    <div className="space-y-2">
      {[
        { label: "1. Verified Coupon Code", desc: "Instant Cart Savings" },
        { label: "2. Bank Card Instant Off", desc: "Applied at Checkout" },
        { label: "3. Passive Cashback App", desc: "Runs in Background" }
      ].map((layer, idx) => (
        <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
          <div>
            <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
            <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
          </div>
          <CheckCircle2 className="w-4 h-4 text-[#5B4FBE]" />
        </div>
      ))}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#E8E8F0]">
        <span className="text-xs font-bold text-[#1A1A2E]">Combinable?</span>
        <span className="text-xs font-black text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20 px-2 py-0.5 rounded-full">
          Yes, usually
        </span>
      </div>
    </div>
  </div>

  {/* Sidebar FAQ Accordion */}
  <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
    <div className="mb-4 flex items-center gap-2">
      <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
      <h3 className="font-extrabold text-[#1A1A2E] text-sm">Frequently Asked Questions</h3>
    </div>

    <div className="space-y-2">
      {[
        {
          q: "What makes CouponsCrew different from other coupon websites?",
          a: "Most coupon websites list as many codes as possible regardless of whether they work. The result is pages with dozens of expired codes that fail at checkout — and no mechanism to remove them. CouponsCrew takes the opposite approach: every code goes through manual verification before it goes live, and codes that stop working are removed promptly rather than left up for traffic. The focus is on fewer codes that actually work rather than long lists that mostly do not."
        },
        {
          q: "Why does CouponsCrew only cover a small number of stores right now?",
          a: "The verification process is manual. Adding a store means testing its codes properly, not just listing them. Expanding to a large number of stores quickly would mean compromising on that process — which defeats the point. The stores currently covered are fully verified. New brands are added only when they can be held to the same standard. Two verified stores beat fifty unverified ones at checkout."
        },
        {
          q: "How often are the coupon codes on CouponsCrew updated?",
          a: "Codes are checked and updated daily. When a deal expires or a code stops working, it is removed rather than left on the page. The listings reflect what is actually redeemable at checkout, not an archive of every promotion a brand has ever run."
        },
        {
          q: "What does \"verified\" mean on a CouponsCrew coupon code?",
          a: "A verified code is one that has been manually tested and confirmed to work at checkout before it is published. It is not a label applied automatically or based on a brand's published promotion calendar. If a code cannot be confirmed to work, it does not go live on the platform."
        },
        {
          q: "Can I use a coupon code together with a bank card offer or cashback app?",
          a: "In most cases, yes — these operate at different layers of the checkout process. A coupon code reduces the cart price directly. A bank card offer — such as an instant discount from HDFC, ICICI, or SBI — applies at the payment stage. A cashback browser extension runs passively in the background and credits a percentage back after the transaction. All three can often be stacked on the same order, which is how the largest effective discounts are built. Check the specific terms of each offer to confirm they are combinable."
        },
        {
          q: "Which product categories tend to have the strongest coupon codes?",
          a: "Electronics and home furnishings consistently see deeper discounts than most other categories, particularly during festive sale windows. That said, the depth of a discount matters less than its legitimacy — a verified 20% off is worth more than a listed 50% that fails at checkout. CouponsCrew covers categories where codes can be meaningfully verified, not just where the headline discounts are largest."
        },
        {
          q: "Are the best coupon sites honest about when deals expire?",
          a: "The better ones are. A common practice on many coupon websites is to leave expired deals on the page because they still rank in search results and bring in traffic — even after the code has stopped working. CouponsCrew removes expired codes from the live listing rather than keeping them up. The dates shown on active deals reflect real validity windows, not legacy information left over from a promotion that ended months ago."
        },
        {
          q: "What should I do if a coupon code from CouponsCrew does not work at checkout?",
          a: "First, check the deal terms — some codes have minimum cart values, category restrictions, or payment method requirements that can prevent them from applying. If the code meets all the listed conditions and still does not work, it is worth trying an alternative deal from the same store page. Codes can occasionally stop working between verification and your checkout if a brand ends a promotion early. If that happens, the listing will be updated."
        },
        {
          q: "Is there a difference between the best online coupon sites and standard coupon sites?",
          a: "The main difference is verification. Standard coupon sites index promotions at volume without checking whether codes work. The best online coupon sites — the ones actually worth using — test codes before publishing and remove them when they expire. The practical difference shows up at checkout: one experience results in a discount, the other results in an error message and wasted time. The platform you choose to use before a purchase directly affects how often you save versus how often you leave empty-handed."
        },
        {
          q: "Do I need to create an account to use CouponsCrew?",
          a: "No account is needed to browse deals or copy codes from CouponsCrew. Find the store you want, open the deal, copy the code, and apply it at the retailer's checkout. The platform is built to get you to a working discount quickly — not to add friction before you can access a code."
        }
      ].map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-300 ${
              isOpen ? 'border-[#5B4FBE] bg-[#F8F8FF]' : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`sidebar-faq-${index}`}
              className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4FBE] rounded-xl"
            >
              <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#5B4FBE]' : 'text-[#1A1A2E]'}`}>
                {faq.q}
              </span>
              <div
                className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'bg-[#5B4FBE] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
              </div>
            </button>

            <div
              id={`sidebar-faq-${index}`}
              role="region"
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-3 pb-3">
                  <div className="h-px w-full bg-[#E8E8F0] mb-2" />
                  <p className="text-[11px] text-[#4A4A6A] leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

      {/* SIDEBAR CARD 2 - Verification Standard */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
          Supported Platforms
        </h3>
        <div className="space-y-3">
          {[
            { name: "Amazon", status: "100% Verified", active: true },
            { name: "Pepperfry", status: "100% Verified", active: true },
            { name: "More Brands", status: "Under Review", active: false }
          ].map((platform, idx) => (
            <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#E8E8F0] last:border-0">
              <span className="text-xs font-medium text-[#1A1A2E]">{platform.name}</span>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                platform.active 
                  ? "text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20" 
                  : "text-[#4A4A6A] bg-[#F8F8FF]"
              }`}>
                {platform.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Shopping Warning */}
      <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-4 h-4 text-[#FF9900]" />
          <h3 className="font-extrabold text-[#1A1A2E] text-sm">Smart Shopping Tip</h3>
        </div>
        <p className="text-xs text-[#4A4A6A] leading-relaxed">
          Always verify 90-day price trends prior to sale events. MRP inflation can make crossed-out prices appear lower than they actually were.
        </p>
      </div>



    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}




