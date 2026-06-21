'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Bell, ChevronDown, Menu, X, Store as StoreIcon } from 'lucide-react';
import { STORES_DATA } from '../data/stores';

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
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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

  const renderSearchPanel = (align: 'left' | 'right') => (
    <div
      className={`absolute top-full mt-3 w-80 sm:w-96 bg-white rounded-2xl border border-[#E8E8F0] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
        align === 'right' ? 'right-0' : 'left-0'
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
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

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
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav Links — desktop only */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 overflow-x-auto no-scrollbar scroll-smooth flex-1">
          <Link
            href="/categories"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Top Categories <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <Link
            href="/stores"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Top Brands <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <div className="h-4 w-[1px] bg-gray-200 shrink-0"></div>
          <Link
            href="/deals"
            className="text-sm font-medium text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors whitespace-nowrap cursor-pointer"
          >
            Deals
          </Link>
          <Link
            href="/offers"
            className="text-sm font-medium text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors whitespace-nowrap cursor-pointer"
          >
            Offers
          </Link>
          <span className="text-sm font-medium text-[#4A4A6A]/40 select-none shrink-0">|</span>
          <Link
            href="/blog"
            className="text-sm font-medium text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors whitespace-nowrap"
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
        <div className="flex lg:hidden items-center gap-2 shrink-0">
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
            {searchOpen && renderSearchPanel('left')}
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
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <Link
              href="/categories"
              onClick={closeMobileMenu}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              <span>Top Categories</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              href="/stores"
              onClick={closeMobileMenu}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[#1A1A2E] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              <span>Top Brands</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Link>
            <div className="h-[1px] bg-[#E8E8F0] my-1"></div>
            <Link
              href="/deals"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-medium text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/offers"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-medium text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Offers
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-xl text-sm font-medium text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE] transition-colors"
            >
              Blog
            </Link>
            <div className="h-[1px] bg-[#E8E8F0] my-1"></div>
            <Link
              href="/deals-of-the-day"
              onClick={closeMobileMenu}
              className="w-full bg-[#FF5722] text-white text-sm font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 transition-all cursor-pointer mt-1"
            >
              <span>🔥 Today&apos;s Best Deals</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
