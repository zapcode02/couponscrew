'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
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
    if (store.name.toLowerCase() === 'amazon') {
      router.push('/stores/amazon');
    } else if (store.name.toLowerCase() === 'pepperfry') {
      router.push('/stores/pepperfry');
    }
  };

  // Pre-fill search from ?q= URL param (e.g. from Navbar store search)
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Secondary sidebar newsletter state
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);

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
              <div id="stores-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {paginatedStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => handleStoreClick(store)}
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
                      <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight truncate px-0.5 group-hover:text-[#5B4FBE] transition-colors">
                        {store.name}
                      </h3>
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
                2 Hand-Picked Stores. Every Deal Worth Finding.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  You&apos;ve been there. You find a coupon code on some random site - SAVE50. Error. Try FLAT50. Error. Six codes, six failures. You either paid full price or gave up.
                </p>
                <p>
                  That happens because most coupon websites never clean their listings. They rank for the search, you land, you try dead codes, you leave frustrated. The site doesn&apos;t care - it already got the click.
                </p>
                <p>
                  Couponscrew was built to fix exactly that. Every code on this platform is manually verified before it goes live. Our success rate is 92.4%. That means when you grab a code from here, it almost certainly works. The ones that stop working get removed fast - not left to waste your time at checkout.
                </p>
                <p>
                  Right now, the platform covers Amazon and Pepperfry - two trusted brands, fully verified - and we&apos;re adding more only when we can vouch for the codes ourselves.
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
                    { step: "2", title: "Check for a bank card offer at checkout", desc: "HDFC, ICICI, and SBI card offers run constantly on Amazon and Pepperfry. Typically 10% instant off. This is layer two - and most shoppers completely miss it." },
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
                    color: "#FF9900",
                    bg: "#FFF8E7",
                    label: "Electronics",
                    title: "Electronics",
                    body: "Amazon Great Indian Festival hits up to 70% off. One caution: always check the 90-day price history before assuming a sale price is actually low. MRP inflation is real - the &quot;original price&quot; isn&apos;t always what it sounds like."
                  },
                  {
                    color: "#D2691E",
                    bg: "#FDF1E7",
                    label: "Home & Kitchen",
                    title: "Home &amp; Décor",
                    body: "Pepperfry runs furniture and décor sales up to 80% off, especially around festive seasons. Bulkier items take longer to ship, so factor delivery windows in before you commit to a sale price."
                  },
                  {
                    color: "#5B4FBE",
                    bg: "#F0EEFF",
                    label: "Strategy",
                    title: "Timing Your Purchase",
                    body: "Both Amazon and Pepperfry run their deepest discounts during festive sale windows. Watch a product for a few days before buying - prices often dip further as a sale event approaches its final hours."
                  },
                  {
                    color: "#22C55E",
                    bg: "#F0FDF4",
                    label: "Verification",
                    title: "Why Only Two Stores",
                    body: "We&apos;d rather verify two stores properly than list fifty we can&apos;t vouch for. Every code here is manually tested before it goes live - quality over quantity."
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
                2 Hand-Verified Brands. One Mission.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                <p>
                  Amazon and Pepperfry, fully verified. Every code manually tested before it goes live. Expired codes removed fast - no dead listings left behind to waste your time.
                </p>
                <p>
                  Most shoppers choose online shopping specifically because of cashback and deals. Our visitors aren&apos;t here for generic listicles. They&apos;re here for codes that actually work — the kind only the best online coupon sites bother to verify.
                </p>
                <p>
                  We&apos;d rather cover two stores properly than fifty we can&apos;t stand behind. As we add more brands, each one goes through the same manual verification before it earns a spot here.
                </p>
                <p className="text-white font-semibold">
                  Pick a store above. Copy the code. Check out for less.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { val: "2", lbl: "Hand-Picked Stores" },
                  { val: "100%", lbl: "Verified Codes" },
                  { val: "92.4%", lbl: "Success Rate" },
                  { val: "Daily", lbl: "Updates" }
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

            {/* SIDEBAR CARD 3 - Bank Card Cheatsheet */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B4FBE]" />
                Bank Card Offer Cheatsheet
              </h3>
              <p className="text-xs text-[#4A4A6A] mb-4">Layer these on top of any coupon code.</p>
              <div className="space-y-2.5">
                {[
                  { bank: "HDFC", platforms: "Amazon, Pepperfry", off: "10% instant" },
                  { bank: "ICICI", platforms: "Amazon", off: "10% instant" },
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

      <Footer />
    </div>
  );
}




