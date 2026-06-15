'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface NavbarProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onCategorySelect?: (category: string | null) => void;
}

export default function Navbar({ onCategorySelect, setSearchQuery }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E8E8F0] shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            if (onCategorySelect) onCategorySelect(null);
            if (setSearchQuery) setSearchQuery('');
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

        {/* Nav Links */}
        <nav className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar scroll-smooth flex-1">
          <Link
            href="/categories"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Top Categories <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <Link
            href="/brands"
            className="text-sm font-semibold text-[#1A1A2E] hover:text-[#5B4FBE] flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Top Brands <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <div className="h-4 w-[1px] bg-gray-200 hidden sm:block shrink-0"></div>
          <button
            onClick={() => {
              if (onCategorySelect) onCategorySelect(null);
              const element = document.getElementById('top-coupons-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-medium text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors whitespace-nowrap cursor-pointer"
          >
            Coupons
          </button>
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
          <span className="text-sm font-medium text-[#4A4A6A]/40 select-none hidden md:inline shrink-0">|</span>
          <Link
            href="/blog"
            className="text-sm font-medium text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors whitespace-nowrap hidden md:inline"
          >
            Blog
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">
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
            <span>🔥 Today's Best Deals</span>
          </button>
          <button className="p-2 text-[#4A4A6A] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] rounded-full transition-all cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
}
