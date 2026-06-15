'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  Tag,
  Percent,
  SlidersHorizontal,
  ArrowRight,
  Shirt,
  Sparkles,
  Footprints,
  Watch,
  ShoppingBag,
  Gem,
  Star,
  RefreshCw,
  Lock,
  ExternalLink,
  ChevronDown,
  Gift
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface FashionStore {
  id: string;
  name: string;
  logo: string;
  logoColor: string;
  logoBg: string;
  offerCount: number;
  maxDiscount: string;
  discountLabel: string;
  isPopular: boolean;
  isFeatured: boolean;
  logoStyle: "text" | "avatar";
}

export interface Subcategory {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  storeCount: number;
}

export interface TopStore {
  rank: number;
  name: string;
  logo: string;
  logoColor: string;
  logoBg: string;
  maxDiscount: string;
}

// ============================================================================
// COMPONENT DATA
// ============================================================================
const FASHION_STORES: FashionStore[] = [
  {
    id: "myntra",
    name: "Myntra",
    logo: "M",
    logoColor: "#FF3F6C",
    logoBg: "#FFF0F4",
    offerCount: 987,
    maxDiscount: "80",
    discountLabel: "Up to 80% OFF",
    isPopular: true,
    isFeatured: true,
    logoStyle: "text"
  },
  {
    id: "ajio",
    name: "Ajio",
    logo: "AJIO",
    logoColor: "#000000",
    logoBg: "#F5F5F5",
    offerCount: 845,
    maxDiscount: "70",
    discountLabel: "Up to 70% OFF",
    isPopular: false,
    isFeatured: true,
    logoStyle: "text"
  },
  {
    id: "nykaa-fashion",
    name: "Nykaa Fashion",
    logo: "NYKAA",
    logoColor: "#FC2779",
    logoBg: "#FFF0F6",
    offerCount: 754,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "hm-india",
    name: "H&M India",
    logo: "H&M",
    logoColor: "#E50010",
    logoBg: "#FEEEEF",
    offerCount: 612,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "zara-india",
    name: "Zara India",
    logo: "ZARA",
    logoColor: "#000000",
    logoBg: "#F5F5F5",
    offerCount: 432,
    maxDiscount: "50",
    discountLabel: "Up to 50% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "meesho",
    name: "Meesho",
    logo: "meesho",
    logoColor: "#FF2D87",
    logoBg: "#FFF0F7",
    offerCount: 732,
    maxDiscount: "80",
    discountLabel: "Up to 80% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "bewakoof",
    name: "Bewakoof",
    logo: "BEWAKOOF",
    logoColor: "#000000",
    logoBg: "#F5F5F5",
    offerCount: 412,
    maxDiscount: "70",
    discountLabel: "Up to 70% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "souled-store",
    name: "The Souled Store",
    logo: "THE\nSOULED\nSTORE",
    logoColor: "#E63946",
    logoBg: "#FEE8E9",
    offerCount: 398,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "purplle",
    name: "Purplle",
    logo: "purplle",
    logoColor: "#7B2FBE",
    logoBg: "#F5E8FF",
    offerCount: 612,
    maxDiscount: "50",
    discountLabel: "Up to 50% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "urbanic",
    name: "Urbanic",
    logo: "URBANIC",
    logoColor: "#000000",
    logoBg: "#F5F5F5",
    offerCount: 298,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "shein-india",
    name: "Shein India",
    logo: "S",
    logoColor: "#FFFFFF",
    logoBg: "#000000",
    offerCount: 652,
    maxDiscount: "85",
    discountLabel: "Up to 85% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "avatar"
  },
  {
    id: "campus-sutra",
    name: "Campus Sutra",
    logo: "CAMPUS\nSUTRA",
    logoColor: "#000000",
    logoBg: "#F5F5F5",
    offerCount: 223,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    logo: "lifestyle",
    logoColor: "#C41E3A",
    logoBg: "#FEF0F2",
    offerCount: 521,
    maxDiscount: "50",
    discountLabel: "Up to 50% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "westside",
    name: "Westside",
    logo: "Westside",
    logoColor: "#FFFFFF",
    logoBg: "#000080",
    offerCount: 412,
    maxDiscount: "40",
    discountLabel: "Up to 40% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  },
  {
    id: "tata-cliq-luxury",
    name: "Tata CLiQ Luxury",
    logo: "TATA\nCLiQ\nLuxury",
    logoColor: "#1A1A2E",
    logoBg: "#F0EEFF",
    offerCount: 187,
    maxDiscount: "60",
    discountLabel: "Up to 60% OFF",
    isPopular: false,
    isFeatured: false,
    logoStyle: "text"
  }
];

const SUBCATEGORIES_DATA: Subcategory[] = [
  { name: "Men Fashion", icon: Shirt, storeCount: 85 },
  { name: "Women Fashion", icon: Sparkles, storeCount: 95 },
  { name: "Footwear", icon: Footprints, storeCount: 70 },
  { name: "Watches", icon: Watch, storeCount: 40 },
  { name: "Handbags", icon: ShoppingBag, storeCount: 35 },
  { name: "Jewellery", icon: Gem, storeCount: 25 },
  { name: "Accessories", icon: Star, storeCount: 60 }
];

const TOP_STORES_OF_MONTH: TopStore[] = [
  { rank: 1, name: "Myntra", logo: "M", logoColor: "#FF3F6C", logoBg: "#FFF0F4", maxDiscount: "Up to 80% OFF" },
  { rank: 2, name: "Ajio", logo: "AJ", logoColor: "#000000", logoBg: "#F5F5F5", maxDiscount: "Up to 70% OFF" },
  { rank: 3, name: "Nykaa Fashion", logo: "N", logoColor: "#FC2779", logoBg: "#FFF0F6", maxDiscount: "Up to 60% OFF" },
  { rank: 4, name: "H&M India", logo: "H", logoColor: "#E50010", logoBg: "#FEEEEF", maxDiscount: "Up to 60% OFF" },
  { rank: 5, name: "Meesho", logo: "M", logoColor: "#FF2D87", logoBg: "#FFF0F7", maxDiscount: "Up to 80% OFF" }
];

// ============================================================================
// MAIN COMPONENT DEFINITION
// ============================================================================
export default function FashionCategory() {
  const [sortBy, setSortBy] = useState<string>("Popular");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsAlert, setNewsAlert] = useState<boolean>(false);

  // Sorting and filtering logic combined
  const processedStores = useMemo(() => {
    let result = [...FASHION_STORES];

    // Filter by high offer count / featured if Filter is activated
    if (isFilterActive) {
      result = result.filter(store => store.isPopular || store.isFeatured || store.offerCount > 400);
    }

    // Sort operations
    if (sortBy === "Popular") {
      result.sort((a, b) => {
        // featured first, popular second
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return b.offerCount - a.offerCount;
      });
    } else if (sortBy === "Most Offers") {
      result.sort((a, b) => b.offerCount - a.offerCount);
    } else if (sortBy === "A to Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Highest Discount") {
      result.sort((a, b) => parseInt(b.maxDiscount, 10) - parseInt(a.maxDiscount, 10));
    }

    return result;
  }, [sortBy, isFilterActive]);

  // Handle click on View Offers
  const handleViewOffersMsg = (storeName: string) => {
    alert(`ðŸŽ‰ Claiming coupons and opening exclusive offers for ${storeName}! Copy discount code on checkout to save!`);
  };

  // Newsletter action handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsAlert(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsAlert(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ============================================================================
          SECTION 1 â€” HERO BANNER (White bg-white, min-h-[320px])
          ============================================================================ */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] min-h-[320px] py-10 overflow-hidden">
        
        {/* Sparkle diamond vectors */}
        <span className="absolute top-10 left-[8%] text-[#5B4FBE]/20 text-lg font-black select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-10 left-[35%] text-[#FF5722]/15 text-sm font-black select-none pointer-events-none">â—†</span>
        <span className="absolute top-5 right-[45%] text-[#22C55E]/15 text-md font-black select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-12 right-[8%] text-[#FFD700]/30 text-2xl font-black select-none pointer-events-none">â—†</span>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-left">
          
          {/* LEFT SIDE â€” Breadcrumbs and details Area (55% width equivalent) */}
          <div className="md:col-span-7 flex flex-col items-start pr-0 md:pr-4">
            
            {/* Breadcrumb row */}
            <div className="inline-flex items-center gap-2 text-sm text-[#4A4A6A]">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <Link href="/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold">Fashion &amp; Lifestyle</span>
            </div>

            {/* Main Header title */}
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">
              Fashion &amp; Lifestyle
            </h1>

            {/* Secondary Para */}
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Explore the best fashion &amp; lifestyle stores and get amazing deals, offers and discounts on top brands.
            </p>

            {/* 4 Stat Mini Cards (white card border style) */}
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              
              {/* Card 1 */}
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0">
                  <Shirt size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#1A1A2E] leading-tight select-none">120+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mt-1 select-none">Stores</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0">
                  <Tag size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#1A1A2E] leading-tight select-none">2,345+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mt-1 select-none">Active Offers</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0">
                  <Percent size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#1A1A2E] leading-tight select-none">Up to 80%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mt-1 select-none">Discounts</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFFBEB] p-2.5 rounded-xl text-[#F59E0B] shrink-0">
                  <ShieldCheck size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#1A1A2E] leading-tight select-none">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mt-1 select-none">Verified Offers</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE â€” Graphic overlay container (45% width equivalent) */}
          <div className="md:col-span-5 flex items-center justify-center relative w-full">
            <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Background cover image layer */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Fashion model showcasing style"
                className="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay panel */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/10 to-transparent rounded-3xl pointer-events-none" />

              {/* Floating White Card Overlaid */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-5 shadow-2xl min-w-[200px] border border-[#E8E8F0]/40 z-10 text-left">
                <div className="text-xs text-[#4A4A6A] font-extrabold uppercase tracking-widest">Big Savings on</div>
                <div className="text-xl font-black text-[#1A1A2E] tracking-tight mt-0.5">FASHION</div>
                <div className="text-xs text-[#4A4A6A] mt-1.5 font-semibold">Up to</div>
                <div className="text-3xl font-black text-[#FF3F6C] leading-none mt-0.5 tracking-tight">80% OFF</div>
                
                {/* Simulated Shop CTA Button */}
                <button
                  onClick={() => handleViewOffersMsg("Myntra")}
                  className="bg-[#FF5722] hover:bg-orange-600 active:scale-95 text-white px-5 py-2.5 rounded-full text-xs font-bold mt-4.5 block w-full text-center transition-all duration-200 shadow-md"
                >
                  Shop Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2 â€” MAIN 2-COLUMN LAYOUT (White background, py-10)
          ============================================================================ */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* LEFT CONTENT AREA (flex-1) */}
          <div className="flex-1 w-full text-left">
            
            {/* Header controls pane */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-4 border-b border-[#E8E8F0]">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">
                  All Fashion &amp; Lifestyle Stores (120+)
                </h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium leading-none">
                  Browse and discover the ultimate promotional codes across world-class hubs.
                </p>
              </div>

              {/* Interactive panel tools */}
              <div className="flex items-center gap-2.5 shrink-0 select-none">
                <span className="text-sm font-semibold text-[#4A4A6A] whitespace-nowrap">
                  Sort By:
                </span>
                
                {/* Sort state changer drop-down */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#E8E8F0] rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer text-[#1A1A2E] font-semibold transition hover:bg-gray-50"
                >
                  <option value="Popular">Popular</option>
                  <option value="Most Offers">Most Offers</option>
                  <option value="A to Z">A to Z</option>
                  <option value="Highest Discount">Highest Discount</option>
                </select>

                {/* Filter Selector Button Toggle */}
                <button
                  onClick={() => setIsFilterActive(prev => !prev)}
                  className={`border rounded-xl px-4 py-2 text-sm flex items-center gap-2 cursor-pointer transition ${
                    isFilterActive
                      ? 'border-[#5B4FBE] bg-[#F0EEFF] text-[#5B4FBE] font-bold'
                      : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE]'
                  }`}
                >
                  <SlidersHorizontal size={16} className={isFilterActive ? 'text-[#5B4FBE]' : 'text-[#4A4A6A]'} />
                  <span>{isFilterActive ? "Filter: Active" : "Filter"}</span>
                </button>
              </div>
            </div>

            {/* Stores grid containing cards (5 columns on desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {processedStores.slice(0, showAll ? 15 : 10).map((store) => {
                return (
                  <div
                    key={store.id}
                    onClick={() => handleViewOffersMsg(store.name)}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE]/40 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
                  >
                    
                    {/* Badge layout popular */}
                    {store.isPopular && (
                      <div className="absolute top-0 left-0 bg-[#FF5722] text-white text-[10px] font-bold px-3 py-1 rounded-br-xl select-none uppercase tracking-wide">
                        POPULAR
                      </div>
                    )}

                    {/* Logo workspace area */}
                    <div className="w-full h-20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                      {store.logoStyle === "text" ? (
                        <div
                          className="w-full h-full rounded-xl flex items-center justify-center p-2"
                          style={{ backgroundColor: store.logoBg }}
                        >
                          <span
                            className="font-black text-lg tracking-tighter uppercase whitespace-pre-wrap leading-none select-none text-center"
                            style={{ color: store.logoColor }}
                          >
                            {store.logo}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-xs border border-white"
                          style={{ backgroundColor: store.logoBg }}
                        >
                          <span
                            className="font-black text-xl leading-none select-none"
                            style={{ color: store.logoColor }}
                          >
                            {store.logo}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Stores Text description details */}
                    <div>
                      <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight select-none truncate">
                        {store.name}
                      </h3>
                      
                      <div className="text-xs text-[#4A4A6A] mt-0.5 font-medium select-none">
                        {store.offerCount} Offers
                      </div>

                      <div className="text-xs font-black text-[#FF5722] mt-1.5 select-none bg-orange-50/70 inline-block px-2 py-0.5 rounded-full">
                        {store.discountLabel}
                      </div>
                    </div>

                    {/* View offers direct button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewOffersMsg(store.name);
                      }}
                      className="mt-3.5 w-full border border-[#E8E8F0] text-[#1A1A2E] text-xs font-bold py-2 rounded-xl hover:border-[#5B4FBE] hover:text-[#5B4FBE] hover:bg-[#F0EEFF] transition-all duration-200 cursor-pointer"
                    >
                      View Offers
                    </button>

                  </div>
                );
              })}
            </div>

            {/* View All Stores interactive trigger at bottom */}
            <div className="mt-10 text-center select-none">
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="border-2 border-[#5B4FBE] text-[#5B4FBE] hover:bg-[#5B4FBE] hover:text-white transition duration-250 px-10 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                {showAll ? (
                  <>
                    <span>Showing All Stores âœ“</span>
                  </>
                ) : (
                  <>
                    <span>View All Stores (120+)</span>
                    <ArrowRight size={18} className="stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* STICKY RIGHT SIDEBAR ASIDE (w-72 sticky) */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left">
            
            {/* SIDEBAR CARD 1 â€” Shop By Subcategories */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-[0_2px_12px_rgba(232,232,240,0.3)]">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 select-none uppercase tracking-wide border-b border-[#F8F8FF] pb-2">
                Shop By Subcategories
              </h3>

              {/* Subcategories catalog listing list */}
              <div className="space-y-1 select-none">
                {SUBCATEGORIES_DATA.map((sub, idx) => {
                  const IconComp = sub.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => alert(`Showing active shops specialized under: ${sub.name}`)}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition-colors duration-200 group"
                    >
                      <IconComp size={15} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                      <span className="text-sm text-[#4A4A6A] flex-1 group-hover:text-[#5B4FBE] group-hover:font-semibold">
                        {sub.name}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {sub.storeCount}+ Stores
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* View all categories bottom router link */}
              <Link href="/categories"
                className="text-xs font-bold text-[#5B4FBE] hover:underline inline-flex items-center gap-1 mt-4 select-none ml-2 whitespace-nowrap"
              >
                <span>View All Subcategories</span>
                <ArrowRight size={13} className="stroke-[2.5]" />
              </Link>
            </div>

            {/* SIDEBAR CARD 2 â€” Top Stores Of The Month */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-[0_2px_12px_rgba(232,232,240,0.3)]">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 select-none uppercase tracking-wide border-b border-[#F8F8FF] pb-2">
                Top Stores Of The Month
              </h3>

              {/* 5 Ranked stores lists map */}
              <div className="space-y-3.5 select-none">
                {TOP_STORES_OF_MONTH.map((store) => {
                  
                  // Color codes for different levels of ranks
                  let rankBg = "bg-[#F0EEFF] text-[#5B4FBE]";
                  if (store.rank === 1) rankBg = "bg-[#FFD700] text-[#1A1A2E]";
                  else if (store.rank === 2) rankBg = "bg-gray-200 text-[#1A1A2E]";
                  else if (store.rank === 3) rankBg = "bg-[#CD7F32] text-white";

                  return (
                    <div
                      key={store.rank}
                      onClick={() => handleViewOffersMsg(store.name)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      {/* rank circle badge */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${rankBg}`}>
                        {store.rank}
                      </div>

                      {/* logo box mini representation */}
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 select-none uppercase"
                        style={{ backgroundColor: store.logoBg, color: store.logoColor }}
                      >
                        {store.logo}
                      </div>

                      {/* description detail text name */}
                      <span className="text-sm font-semibold text-[#1A1A2E] flex-1 line-clamp-1 group-hover:text-[#5B4FBE] transition-colors">
                        {store.name}
                      </span>

                      {/* premium tag value */}
                      <span className="text-xs font-extrabold text-[#FF5722] text-right shrink-0">
                        {store.maxDiscount.replace("Up to ", "")}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* View all stores redirect link */}
              <Link href="/stores"
                className="text-xs font-bold text-[#5B4FBE] hover:underline inline-flex items-center gap-1 mt-5 select-none ml-2 whitespace-nowrap"
              >
                <span>View All Stores</span>
                <ArrowRight size={13} className="stroke-[2.5]" />
              </Link>
            </div>

            {/* SIDEBAR CARD 3 â€” Love Fashion? Newsletter (from-[#FF6B9D] to-[#FF3F6C]) */}
            <div className="bg-gradient-to-br from-[#FF6B9D] to-[#FF3F6C] rounded-2xl p-6 relative overflow-hidden shadow-xl text-white">
              
              {/* Absolutes styling background layout circular items */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 select-none pointer-events-none" />
              
              {/* Floating shopping bag emoji */}
              <div className="absolute bottom-2 right-3 text-4xl select-none opacity-60 transform rotate-[12deg] pointer-events-none">
                ðŸ‘œ
              </div>

              {/* Inner card text details */}
              <div className="relative z-10 text-left">
                <h3 className="font-bold text-lg select-none">Love Fashion?</h3>
                <p className="text-white/80 text-xs mt-2 leading-relaxed font-semibold">
                  Get the best fashion deals straight to your inbox.
                </p>

                {/* Newsletter email dynamic inputs */}
                <form onSubmit={handleNewsletterSubmit} className="mt-4">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/20 border border-white/30 rounded-xl px-4 py-2.5 text-white text-sm w-full placeholder-white/60 placeholder focus:outline-none focus:bg-white/30 select-all"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full bg-white text-[#FF3F6C] py-2.5 rounded-xl text-sm font-black hover:bg-gray-50 transition duration-200 cursor-pointer shadow-md"
                  >
                    Subscribe
                  </button>
                </form>

                {/* Subscription success alert banner */}
                {newsAlert && (
                  <div className="mt-3 text-[11px] bg-white/15 border border-white/20 rounded-xl p-2.5 leading-tight font-bold select-none animate-fade-in">
                    âœ“ Hurrah! You're added to savemate fashion drops!
                  </div>
                )}
              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================================
          SECTION 3 â€” TRUST BADGES STRIP (White layout, border-t border-[#E8E8F0])
          ============================================================================ */}
      <section className="bg-white border-t border-[#E8E8F0] py-10 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Grid view of 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Badge 1 */}
            <div className="text-center p-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center shrink-0">
                <ShieldCheck size={26} className="stroke-[2.5]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A2E] mt-4 select-none">100% Verified Stores</h4>
              <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px] select-none">We verify all stores and offers</p>
            </div>

            {/* Badge 2 */}
            <div className="text-center p-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] text-[#FF5722] flex items-center justify-center shrink-0">
                <Tag size={26} className="stroke-[2.5]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A2E] mt-4 select-none">Best Fashion Deals</h4>
              <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px] select-none">Get the biggest discounts</p>
            </div>

            {/* Badge 3 */}
            <div className="text-center p-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shrink-0">
                <RefreshCw size={26} className="stroke-[2.5]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A2E] mt-4 select-none">Daily Updates</h4>
              <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px] select-none">New offers added every day</p>
            </div>

            {/* Badge 4 */}
            <div className="text-center p-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center shrink-0">
                <Lock size={26} className="stroke-[2.5]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A2E] mt-4 select-none">Safe &amp; Secure</h4>
              <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px] select-none">Your data is always protected</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}



