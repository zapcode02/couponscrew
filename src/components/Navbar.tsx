'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onCategorySelect?: (category: string | null) => void;
}

export default function Navbar({ onCategorySelect, setSearchQuery }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
          <button className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              if (onCategorySelect) onCategorySelect(null);
              if (setSearchQuery) setSearchQuery('');
              const element = document.getElementById('top-coupons-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FF5722] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 whitespace-nowrap hover:bg-orange-600 hover:shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <span>🔥 Today&apos;s Best Deals</span>
          </button>
          <button className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side — mobile only: Bell + Hamburger */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
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
            <button
              onClick={() => {
                if (onCategorySelect) onCategorySelect(null);
                if (setSearchQuery) setSearchQuery('');
                const element = document.getElementById('top-coupons-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
              }}
              className="w-full bg-[#FF5722] text-white text-sm font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 transition-all cursor-pointer mt-1"
            >
              <span>🔥 Today&apos;s Best Deals</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
