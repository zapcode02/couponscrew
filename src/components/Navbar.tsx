'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Bell, ChevronDown, Menu, X, Store as StoreIcon, ArrowRight } from 'lucide-react';
import { STORES_DATA } from '../data/stores';
import { NAV_CATEGORIES } from '../data/categories';

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onCategorySelect?: (category: string | null) => void;
}

export default function Navbar({ onCategorySelect, setSearchQuery }: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const categoriesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
  };

  const openCategories = () => {
    if (categoriesCloseTimer.current) {
      clearTimeout(categoriesCloseTimer.current);
      categoriesCloseTimer.current = null;
    }
    setCategoriesOpen(true);
  };

  const scheduleCloseCategories = () => {
    categoriesCloseTimer.current = setTimeout(() => {
      setCategoriesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (categoriesCloseTimer.current) clearTimeout(categoriesCloseTimer.current);
    };
  }, []);

  const results = useMemo(() => {
    const query = searchInput.trim().toLowerCase();
    if (!query) return [];
    return STORES_DATA.filter((store) => store.name.toLowerCase().includes(query)).slice(0, 6);
  }, [searchInput]);

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchInput('');
  };

  const goToStore = (storeName: string) => {
    router.push(`/stores?q=${encodeURIComponent(storeName)}`);
    closeSearch();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      goToStore(searchInput.trim());
    }
  };

  // Click-outside-to-close
  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = desktopSearchRef.current?.contains(target) ?? false;
      const insideMobile = mobileSearchRef.current?.contains(target) ?? false;
      if (!insideDesktop && !insideMobile) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  const renderSearchPanel = (align: 'left' | 'right' | 'mobile') => (
    <div
      className={`bg-white rounded-2xl border border-[#E8E8F0] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
        align === 'mobile'
          ? 'fixed top-16 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm'
          : `absolute top-full mt-3 w-80 sm:w-96 ${align === 'right' ? 'right-0' : 'left-0'}`
      }`}
    >
      <form onSubmit={handleSearchSubmit} className="p-3 border-b border-[#E8E8F0]">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for a store..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8FF] border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-xl text-sm text-[#1A1A2E] font-medium placeholder:text-gray-400 focus:outline-none transition-colors"
          />
        </div>
      </form>

      <div className="max-h-80 overflow-y-auto py-2">
        {searchInput.trim() === '' ? (
          <p className="px-4 py-6 text-center text-xs text-gray-400 font-medium">
            Start typing a store name to search
          </p>
        ) : results.length === 0 ? (
          <p className="px-4 py-6 text-center text-xs text-gray-400 font-medium">
            No stores found for &quot;{searchInput}&quot;
          </p>
        ) : (
          results.map((store) => (
            <button
              key={store.id}
              onClick={() => goToStore(store.name)}
              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#F0EEFF] transition-colors cursor-pointer text-left"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                style={{ backgroundColor: store.logoBg }}
              >
                <span
                  className={`font-black tracking-tighter ${store.logo.length > 3 ? 'text-[10px]' : 'text-sm'}`}
                  style={{ color: store.logoColor }}
                >
                  {store.logo}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1A1A2E] truncate">{store.name}</p>
                <p className="text-xs text-gray-400 truncate">{store.category}</p>
              </div>
              <span className="text-[10px] font-bold text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full shrink-0">
                {store.discountLabel}
              </span>
            </button>
          ))
        )}
      </div>

      {results.length > 0 && (
        <Link
          href={`/stores?q=${encodeURIComponent(searchInput.trim())}`}
          onClick={closeSearch}
          className="flex items-center justify-center gap-1.5 py-3 border-t border-[#E8E8F0] text-xs font-bold text-[#5B4FBE] hover:bg-[#F0EEFF] transition-colors"
        >
          <StoreIcon className="w-3.5 h-3.5" />
          <span>View all matching stores</span>
        </Link>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E8E8F0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-3 lg:gap-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            if (onCategorySelect) onCategorySelect(null);
            if (setSearchQuery) setSearchQuery('');
            closeMobileMenu();
          }}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1781457175/couponscrew-logo_v2da9n.png"
            alt="Couponscrew"
            width={320}
            height={72}
            sizes="160px"
            className="h-10 lg:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav Links — desktop only */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 flex-1">
          <Link
            href="/stores"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Stores
          </Link>
          <div
            className="relative"
            ref={categoriesRef}
            onMouseEnter={openCategories}
            onMouseLeave={scheduleCloseCategories}
          >
            <button
              className={`text-sm font-semibold flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                categoriesOpen ? 'text-[#5B4FBE]' : 'text-[#1A1A2E] hover:text-[#5B4FBE]'
              }`}
            >
              Top Categories
              <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-3 w-[760px] bg-white rounded-2xl border border-[#E8E8F0] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between px-7 py-5 border-b border-[#E8E8F0]">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A2E]">Top Categories</p>
                    <p className="text-xs text-gray-400 mt-0.5">Browse deals by category</p>
                  </div>
                  <Link
                    href="/categories"
                    onClick={() => setCategoriesOpen(false)}
                    className="text-xs font-bold text-[#5B4FBE] hover:underline flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>View All Categories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-x-3 gap-y-1 px-4 py-4 max-h-[460px] overflow-y-auto">
                  {NAV_CATEGORIES.map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <Link
                        key={cat.name}
                        href="/categories"
                        onClick={() => setCategoriesOpen(false)}
                        className="flex items-center gap-3.5 px-3 py-3.5 rounded-xl hover:bg-[#F0EEFF] transition-colors"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#F0EEFF] flex items-center justify-center shrink-0">
                          <CatIcon className="w-5 h-5 text-[#5B4FBE]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#1A1A2E] leading-snug">{cat.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">
                            {cat.offerCount.toLocaleString()} Offers &bull; {cat.brandCount} Brands
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/stores"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Top Brands
          </Link>
          <Link
            href="/deals"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] transition-colors whitespace-nowrap cursor-pointer"
          >
            Deals
          </Link>
          <Link
            href="/offers"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] transition-colors whitespace-nowrap cursor-pointer"
          >
            Offers
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] transition-colors whitespace-nowrap"
          >
            Blog
          </Link>
        </nav>

        {/* Right Side — desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="relative" ref={desktopSearchRef}>
            <button
              aria-label="Search"
              onClick={() => (searchOpen ? closeSearch() : openSearch())}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                searchOpen ? 'text-[#5B4FBE] bg-[#F0EEFF]' : 'text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF]'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            {searchOpen && renderSearchPanel('right')}
          </div>
          <Link
            href="/deals-of-the-day"
            className="bg-[#FF5722] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 whitespace-nowrap hover:bg-orange-600 hover:shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <span>🔥 Today&apos;s Best Deals</span>
          </Link>
          <button aria-label="Notifications" className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side — mobile only: Search + Bell + Hamburger */}
        <div className="flex lg:hidden items-center gap-0.5 sm:gap-1.5 shrink-0">
          <div className="relative" ref={mobileSearchRef}>
            <button
              aria-label="Search"
              onClick={() => (searchOpen ? closeSearch() : openSearch())}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                searchOpen ? 'text-[#5B4FBE] bg-[#F0EEFF]' : 'text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF]'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            {searchOpen && renderSearchPanel('mobile')}
          </div>
          <button aria-label="Notifications" className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E8F0] shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
            <Link
              href="/stores"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Stores
            </Link>

            <button
              onClick={() => setMobileCategoriesOpen((v) => !v)}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors cursor-pointer"
            >
              <span>Top Categories</span>
              <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${mobileCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileCategoriesOpen && (
              <div className="flex flex-col gap-1 pl-2 pb-2">
                {NAV_CATEGORIES.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <Link
                      key={cat.name}
                      href="/categories"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F0EEFF] transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#F0EEFF] flex items-center justify-center shrink-0">
                        <CatIcon className="w-4 h-4 text-[#5B4FBE]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#1A1A2E] leading-snug">{cat.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {cat.offerCount.toLocaleString()} Offers &bull; {cat.brandCount} Brands
                        </p>
                      </div>
                    </Link>
                  );
                })}
                <Link
                  href="/categories"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-1.5 px-3 py-3 mt-1 rounded-xl text-xs font-bold text-[#5B4FBE] bg-[#F0EEFF] hover:bg-[#E4E0FF] transition-colors"
                >
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            <Link
              href="/stores"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Top Brands
            </Link>
            <Link
              href="/deals"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/offers"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Offers
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/deals-of-the-day"
              onClick={closeMobileMenu}
              className="w-full bg-[#FF5722] text-white text-sm font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 transition-all cursor-pointer mt-2"
            >
              <span>🔥 Today&apos;s Best Deals</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
