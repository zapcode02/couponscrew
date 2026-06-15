'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Store,
  Tag,
  ShieldCheck,
  IndianRupee,
  Star,
  LayoutGrid,
  ShoppingBag,
  Monitor,
  UtensilsCrossed,
  Plane,
  Heart,
  Home,
  Globe,
  Tv,
  Zap,
  Smartphone,
  Lock,
  Mail,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface Brand {
  id: string;
  name: string;
  logo: string; // letter/s used for avatar or wordmark representation
  logoColor: string; // hex color for logo background/text placement
  logoBg: string; // background shading hex
  category: string;
  offerCount: number;
  maxDiscount: string;
  discountLabel: string;
  isPopular: boolean;
  isFeatured: boolean;
  rank: number;
  description: string;
}

interface SidebarCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: string;
}

// ============================================================================
// HARDCODED CONSTANT DATA
// ============================================================================
const BRANDS_DATA: Brand[] = [
  {
    id: 'b-1',
    name: 'Amazon',
    logo: 'amazon',
    logoColor: '#FF9900',
    logoBg: '#FFF8E7',
    category: 'Electronics',
    offerCount: 1256,
    maxDiscount: 'Up to 70% OFF',
    discountLabel: 'Up to 70% OFF',
    isPopular: true,
    isFeatured: true,
    rank: 1,
    description: "India's largest online marketplace"
  },
  {
    id: 'b-2',
    name: 'Flipkart',
    logo: 'F',
    logoColor: '#2874F0',
    logoBg: '#EEF4FF',
    category: 'Fashion & Lifestyle',
    offerCount: 1102,
    maxDiscount: 'Up to 80% OFF',
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: true,
    rank: 3,
    description: "India's homegrown e-commerce giant"
  },
  {
    id: 'b-3',
    name: 'Myntra',
    logo: 'M',
    logoColor: '#FF3F6C',
    logoBg: '#FFF0F4',
    category: 'Fashion & Lifestyle',
    offerCount: 987,
    maxDiscount: 'Up to 80% OFF',
    discountLabel: 'Up to 80% OFF',
    isPopular: true,
    isFeatured: true,
    rank: 2,
    description: "India's top fashion destination"
  },
  {
    id: 'b-4',
    name: 'Ajio',
    logo: 'AJIO',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 845,
    maxDiscount: 'Up to 70% OFF',
    discountLabel: 'Up to 70% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 4,
    description: 'Premium fashion at best prices'
  },
  {
    id: 'b-5',
    name: 'Nykaa',
    logo: 'N',
    logoColor: '#FC2779',
    logoBg: '#FFF0F6',
    category: 'Health & Beauty',
    offerCount: 754,
    maxDiscount: 'Up to 60% OFF',
    discountLabel: 'Up to 60% OFF',
    isPopular: true,
    isFeatured: false,
    rank: 5,
    description: 'Beauty and wellness destination'
  },
  {
    id: 'b-6',
    name: 'Swiggy',
    logo: 'S',
    logoColor: '#FC8019',
    logoBg: '#FFF5EC',
    category: 'Food & Grocery',
    offerCount: 632,
    maxDiscount: 'Up to 60% OFF',
    discountLabel: 'Up to 60% OFF',
    isPopular: true,
    isFeatured: false,
    rank: 7,
    description: 'Food delivery at your doorstep'
  },
  {
    id: 'b-7',
    name: 'Zomato',
    logo: 'Z',
    logoColor: '#E23744',
    logoBg: '#FEF0F1',
    category: 'Food & Grocery',
    offerCount: 589,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: true,
    isFeatured: false,
    rank: 8,
    description: 'Discover restaurants near you'
  },
  {
    id: 'b-8',
    name: 'MakeMyTrip',
    logo: 'MMT',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 612,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: true,
    isFeatured: false,
    rank: 6,
    description: 'Flights, hotels and holiday packages'
  },
  {
    id: 'b-9',
    name: 'boAt',
    logo: 'boAt',
    logoColor: '#1A1A2E',
    logoBg: '#F5F5F5',
    category: 'Electronics',
    offerCount: 523,
    maxDiscount: 'Up to 60% OFF',
    discountLabel: 'Up to 60% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 9,
    description: 'Premium audio and wearables'
  },
  {
    id: 'b-10',
    name: 'Croma',
    logo: 'croma',
    logoColor: '#1D8348',
    logoBg: '#EAFAF1',
    category: 'Electronics',
    offerCount: 478,
    maxDiscount: 'Up to 55% OFF',
    discountLabel: 'Up to 55% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 10,
    description: 'One-stop electronics destination'
  },
  {
    id: 'b-11',
    name: 'Mamaearth',
    logo: 'mama',
    logoColor: '#6AB04C',
    logoBg: '#F0FAF0',
    category: 'Health & Beauty',
    offerCount: 456,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 11,
    description: 'Natural and toxin-free products'
  },
  {
    id: 'b-12',
    name: 'BigBasket',
    logo: 'BB',
    logoColor: '#84C225',
    logoBg: '#F4FBEA',
    category: 'Food & Grocery',
    offerCount: 412,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 12,
    description: 'Online grocery superstore'
  },
  {
    id: 'b-13',
    name: 'Goibibo',
    logo: 'go',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 398,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 13,
    description: 'Smart travel booking platform'
  },
  {
    id: 'b-14',
    name: 'Hostinger',
    logo: 'H',
    logoColor: '#FF6B35',
    logoBg: '#FFF3EE',
    category: 'Web Hosting',
    offerCount: 356,
    maxDiscount: 'Up to 85% OFF',
    discountLabel: 'Up to 85% OFF',
    isPopular: true,
    isFeatured: false,
    rank: 14,
    description: 'Affordable web hosting solutions'
  },
  {
    id: 'b-15',
    name: 'Netflix',
    logo: 'N',
    logoColor: '#E50914',
    logoBg: '#FEEEEF',
    category: 'Entertainment',
    offerCount: 312,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 15,
    description: 'Stream movies and TV shows'
  },
  {
    id: 'b-16',
    name: 'Samsung',
    logo: 'S',
    logoColor: '#1428A0',
    logoBg: '#EEF0FF',
    category: 'Electronics',
    offerCount: 298,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 16,
    description: "World's top electronics brand"
  },
  {
    id: 'b-17',
    name: 'Blinkit',
    logo: 'B',
    logoColor: '#F0C000',
    logoBg: '#FFFDE7',
    category: 'Food & Grocery',
    offerCount: 276,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 17,
    description: 'Instant grocery delivery'
  },
  {
    id: 'b-18',
    name: 'OYO',
    logo: 'OYO',
    logoColor: '#EE2E24',
    logoBg: '#FEECEB',
    category: 'Travel',
    offerCount: 265,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 18,
    description: 'Budget hotels and home stays'
  },
  {
    id: 'b-19',
    name: 'Coursera',
    logo: 'C',
    logoColor: '#0056D2',
    logoBg: '#EEF4FF',
    category: 'Education',
    offerCount: 254,
    maxDiscount: 'Up to 65% OFF',
    discountLabel: 'Up to 65% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 19,
    description: 'Learn from top universities'
  },
  {
    id: 'b-20',
    name: 'Udemy',
    logo: 'U',
    logoColor: '#A435F0',
    logoBg: '#F5E8FF',
    category: 'Education',
    offerCount: 243,
    maxDiscount: 'Up to 95% OFF',
    discountLabel: 'Up to 95% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 20,
    description: 'Online courses on any topic'
  },
  {
    id: 'b-21',
    name: 'Nike',
    logo: 'Nike',
    logoColor: '#000000',
    logoBg: '#F5F5F5',
    category: 'Fashion & Lifestyle',
    offerCount: 232,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 21,
    description: 'Sports shoes and activewear'
  },
  {
    id: 'b-22',
    name: 'Puma',
    logo: 'Puma',
    logoColor: '#CC0000',
    logoBg: '#FEEEEE',
    category: 'Fashion & Lifestyle',
    offerCount: 221,
    maxDiscount: 'Up to 45% OFF',
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 22,
    description: 'Sport lifestyle and fashion'
  },
  {
    id: 'b-23',
    name: 'GoDaddy',
    logo: 'GD',
    logoColor: '#1BDBDB',
    logoBg: '#E6FAFA',
    category: 'Web Hosting',
    offerCount: 210,
    maxDiscount: 'Up to 55% OFF',
    discountLabel: 'Up to 55% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 23,
    description: 'Domain and web hosting'
  },
  {
    id: 'b-24',
    name: 'Zepto',
    logo: 'zepto',
    logoColor: '#A020F0',
    logoBg: '#F5E6FF',
    category: 'Food & Grocery',
    offerCount: 198,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 24,
    description: '10-minute grocery delivery'
  },
  {
    id: 'b-25',
    name: 'Lenskart',
    logo: 'LK',
    logoColor: '#1BA8A0',
    logoBg: '#E6F9F8',
    category: 'Health & Beauty',
    offerCount: 187,
    maxDiscount: 'Up to 50% OFF',
    discountLabel: 'Up to 50% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 25,
    description: 'Eyewear at best prices'
  },
  {
    id: 'b-26',
    name: 'PhonePe',
    logo: 'PP',
    logoColor: '#5F259F',
    logoBg: '#F2EAFF',
    category: 'Finance',
    offerCount: 176,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 26,
    description: 'UPI payments and finance'
  },
  {
    id: 'b-27',
    name: 'Hotstar',
    logo: 'HS',
    logoColor: '#1F80E0',
    logoBg: '#E8F3FE',
    category: 'Entertainment',
    offerCount: 165,
    maxDiscount: 'Up to 35% OFF',
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 27,
    description: 'Sports, movies and web series'
  },
  {
    id: 'b-28',
    name: 'Cleartrip',
    logo: 'CT',
    logoColor: '#E8262A',
    logoBg: '#FEF0F0',
    category: 'Travel',
    offerCount: 154,
    maxDiscount: 'Up to 40% OFF',
    discountLabel: 'Up to 40% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 28,
    description: 'Simple and smart travel booking'
  },
  {
    id: 'b-29',
    name: '1mg',
    logo: '1mg',
    logoColor: '#E53935',
    logoBg: '#FEEEEE',
    category: 'Health & Beauty',
    offerCount: 143,
    maxDiscount: 'Up to 45% OFF',
    discountLabel: 'Up to 45% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 29,
    description: 'Medicines and healthcare'
  },
  {
    id: 'b-30',
    name: 'BookMyShow',
    logo: 'BMS',
    logoColor: '#E8272D',
    logoBg: '#FEE8E9',
    category: 'Entertainment',
    offerCount: 132,
    maxDiscount: 'Up to 35% OFF',
    discountLabel: 'Up to 35% OFF',
    isPopular: false,
    isFeatured: false,
    rank: 30,
    description: 'Movie and event tickets'
  }
];

const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  { id: 'all', name: 'All', icon: LayoutGrid, count: '500+' },
  { id: 'fashion', name: 'Fashion & Lifestyle', icon: ShoppingBag, count: '120+' },
  { id: 'electronics', name: 'Electronics', icon: Monitor, count: '110+' },
  { id: 'food', name: 'Food & Grocery', icon: UtensilsCrossed, count: '80+' },
  { id: 'travel', name: 'Travel', icon: Plane, count: '90+' },
  { id: 'beauty', name: 'Health & Beauty', icon: Heart, count: '70+' },
  { id: 'home', name: 'Home & Kitchen', icon: Home, count: '60+' },
  { id: 'hosting', name: 'Web Hosting', icon: Globe, count: '50+' },
  { id: 'entertainment', name: 'Entertainment', icon: Tv, count: '40+' }
];

const TOP_BRANDS_OF_MONTH = [
  { rank: 1, name: 'Amazon', offerCount: 1256 },
  { rank: 2, name: 'Myntra', offerCount: 987 },
  { rank: 3, name: 'Flipkart', offerCount: 1102 },
  { rank: 4, name: 'Ajio', offerCount: 845 },
  { rank: 5, name: 'Nykaa', offerCount: 754 }
];

// Helper to convert category key mapping to sidebar options
const getCategoryStringFilter = (sidebarName: string): string => {
  if (sidebarName === 'All') return '';
  return sidebarName;
};

// ============================================================================
// MAIN VIEW COMPONENT
// ============================================================================
export default function TopBrands() {
  // Sorting state - Defaults to Popularity
  const [sortBy, setSortBy] = useState<string>('Popularity');

  // Category filter state - Defaults to 'All'
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Show all toggle (15 brands initially, 30 if true)
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter and sort computation
  const processedBrands = useMemo(() => {
    let result = [...BRANDS_DATA];

    // 1. Filter by category
    const filterCat = getCategoryStringFilter(selectedCategory);
    if (filterCat) {
      result = result.filter(
        (b) => b.category.toLowerCase().includes(filterCat.toLowerCase().split(' ')[0])
      );
    }

    // 2. Apply Custom Sorting
    if (sortBy === 'Popularity') {
      result.sort((a, b) => {
        // featured & rank order
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.rank - b.rank;
      });
    } else if (sortBy === 'Most Offers') {
      result.sort((a, b) => b.offerCount - a.offerCount);
    } else if (sortBy === 'A to Z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Z to A') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'Highest Discount') {
      // Parse out numerical discount value from strings like "Up to 85% OFF"
      const getDiscNum = (desc: string) => {
        const matched = desc.match(/\d+/);
        return matched ? parseInt(matched[0], 10) : 0;
      };
      result.sort((a, b) => getDiscNum(b.maxDiscount) - getDiscNum(a.maxDiscount));
    }

    return result;
  }, [selectedCategory, sortBy]);

  // Handle CTA Alert view click
  const handleViewOffersMsg = (brandName: string) => {
    alert(`Coupon details for ${brandName} loaded! Code: SAVEMATE50 applied. Enjoy your discounts!`);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ============================================================================
          SECTION 1 â€” HERO BANNER (White / Light Background)
          ============================================================================ */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] overflow-hidden min-h-[280px] py-10 px-6">
        
        {/* Light purple decorative background shapes */}
        <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#F0EEFF]/40 border border-[#5B4FBE]/5 pointer-events-none select-none" />
        <div className="absolute top-(-40px) right-[8%] w-[180px] h-[180px] rounded-full bg-[#FFF2ED]/50 pointer-events-none select-none" />
        
        {/* Small â—† diamonds in purple and orange */}
        <span className="absolute top-12 left-[15%] text-[#5B4FBE]/30 text-xl pointer-events-none select-none">â—†</span>
        <span className="absolute bottom-14 left-[42%] text-[#FF5722]/25 text-md pointer-events-none select-none">â—†</span>
        <span className="absolute top-8 right-[35%] text-[#22C55E]/18 text-lg pointer-events-none select-none">â—†</span>
        <span className="absolute bottom-10 right-[15%] text-[#F59E0B]/20 text-2xl pointer-events-none select-none font-black">â—†</span>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT SIDE (55%) */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-bold">Top Brands</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A2E] tracking-tight mt-3 select-none">
              Top Brands
            </h1>

            {/* Paragraph */}
            <p className="text-[#4A4A6A] text-base md:text-lg mt-3 max-w-md leading-relaxed select-none">
              Explore top online stores in India and grab the best coupons, deals &amp; offers from your favorite brands.
            </p>

            {/* 4 Stat Mini Cards */}
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0EEFF] p-2 rounded-xl text-[#5B4FBE] shrink-0">
                  <Store size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Top Brands</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF2ED] p-2 rounded-xl text-[#FF5722] shrink-0">
                  <Tag size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">10,000+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Coupons &amp; Deals</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0FDF4] p-2 rounded-xl text-[#22C55E] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Verified Offers</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FEFBE8] p-2 rounded-xl text-[#F59E0B] shrink-0">
                  <IndianRupee size={16} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">â‚¹12 Cr+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Total Savings</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE (45%) (Pure CSS illustration) */}
          <div className="hidden md:col-span-5 md:flex items-center justify-center relative">
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Large light purple oval backdrop base layout */}
              <div className="absolute w-72 h-72 rounded-full bg-[#F0EEFF] animate-pulse duration-5000 pointer-events-none select-none" />

              {/* Shopping Bag Shapes using styling DIVS */}
              {/* Bag 1: Large Purple Bag */}
              <div className="absolute bottom-10 left-6 w-32 h-40 bg-[#5B4FBE] rounded-3xl shadow-2xl p-4 flex flex-col justify-between transform -rotate-6 transition-transform hover:rotate-0 duration-300 select-none z-10 border border-indigo-400/20">
                {/* Handle shape */}
                <div className="w-12 h-6 border-4 border-white/30 border-b-0 rounded-t-full mx-auto -mt-8 mb-2 shrink-0" />
                <div className="flex-1 flex flex-col justify-center items-center">
                  {/* % Card design on front */}
                  <div className="bg-white rounded-xl p-2.5 shadow-md flex items-center justify-center w-14 h-14">
                    <span className="text-2xl font-black text-[#5B4FBE] leading-none">%</span>
                  </div>
                </div>
                <div className="text-center font-black text-white/50 text-[10px] tracking-wide mt-1">SaveMate</div>
              </div>

              {/* Bag 2: Medium Orange Bag positioned slightly behind/right */}
              <div className="absolute bottom-14 right-10 w-24 h-32 bg-[#FF5722] rounded-3xl shadow-xl p-3 flex flex-col justify-between transform rotate-12 transition-transform hover:rotate-6 duration-300 select-none z-0 border border-orange-400/20">
                {/* Handle shape */}
                <div className="w-8 h-4 border-3 border-white/30 border-b-0 rounded-t-full mx-auto -mt-6 mb-1 shrink-0" />
                <div className="flex-1 flex items-center justify-center">
                  <div className="bg-white/10 rounded-lg p-1">
                    <Tag size={20} className="text-white" />
                  </div>
                </div>
                <div className="text-[10px] font-bold text-center text-white/80 leading-none">HOT DEAL</div>
              </div>

              {/* Gift 3: Small golden box shape */}
              <div className="absolute bottom-6 right-24 w-20 h-20 bg-[#FFD700] rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 hover:-translate-y-1 transition-all hover:rotate-0 duration-300 select-none z-20 border border-amber-300/20">
                <span className="text-3xl leading-none">ðŸŽ</span>
              </div>

              {/* Award badge layout on front */}
              <div className="absolute top-2 right-12 bg-white rounded-full p-4 shadow-2xl border border-[#E8E8F0] flex flex-col items-center justify-center z-30 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="bg-[#F0EEFF] p-2.5 rounded-full text-[#5B4FBE] shrink-0">
                  <Star size={32} className="fill-[#5B4FBE]" />
                </div>
                <span className="mt-1 text-[9px] font-black tracking-widest text-[#1A1A2E] uppercase">TOP BRANDS</span>
              </div>

              {/* Sparkle âœ¦ elements in gold color */}
              <span className="absolute top-8 left-[10%] text-[#FFD700] text-xl font-bold animate-pulse">âœ¦</span>
              <span className="absolute bottom-20 left-2 text-[#FFD700] text-sm font-bold animate-bounce">âœ¦</span>
              <span className="absolute top-1/2 right-[10%] text-[#FFD700] text-lg font-bold animate-ping duration-3000">âœ¦</span>

              {/* Soft leaf design outline on right edge */}
              <div className="absolute right-0 bottom-1/3 w-8 h-20 bg-[#22C55E]/15 rounded-l-full pointer-events-none select-none" />

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2 â€” MAIN CONTENT â€” 2 COLUMN LAYOUT
          ============================================================================ */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT CONTENT AREA: Brands Grid (flex-1) */}
          <div className="flex-1 w-full text-left">
            
            {/* Header row containing results count and sort panel */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-3 border-b border-[#E8E8F0]">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none select-none">
                  All Top Brands
                </h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">
                  Showing {Math.min(processedBrands.length, showAll ? 30 : 15)} of {processedBrands.length} stores {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
                </p>
              </div>

              {/* Sort selector dropdown */}
              <div className="flex items-center gap-2.5 shrink-0">
                <label htmlFor="sort-dropdown" className="text-sm font-semibold text-[#4A4A6A] whitespace-nowrap">
                  Sort By:
                </label>
                <select
                  id="sort-dropdown"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#E8E8F0] rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer transition-all hover:bg-gray-50 text-[#1A1A2E] font-medium"
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Most Offers">Most Offers</option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                  <option value="Highest Discount">Highest Discount</option>
                </select>
              </div>
            </div>

            {/* BRANDS GRID (5 columns on desktop) */}
            {processedBrands.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {processedBrands.slice(0, showAll ? 30 : 15).map((brand) => {
                  
                  // Detect featured brands for branding logo wordmark display representation
                  const isBrandedFeatured = ['Amazon', 'Flipkart', 'Myntra', 'Ajio', 'Nykaa'].includes(brand.name);
                  const isAmazon = brand.name === 'Amazon';

                  const CardContent = (
                    <>
                      {/* Logo container section */}
                      <div className="w-full h-16 flex items-center justify-center mb-3">
                        {isBrandedFeatured ? (
                          /* Highlighted larger font styled text logo for custom top brands */
                          <div 
                            className="text-lg font-black tracking-tight uppercase group-hover:scale-105 transition-transform duration-300"
                            style={{ color: brand.logoColor }}
                          >
                            <span>{brand.logo}</span>
                          </div>
                        ) : (
                          /* Colored letter avatar representing standard brand logos */
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-xs border border-white"
                            style={{ backgroundColor: brand.logoBg }}
                          >
                            <span 
                              className="font-black text-lg uppercase tracking-wide"
                              style={{ color: brand.logoColor }}
                            >
                              {brand.logo}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Brand Info Area */}
                      <div>
                        <h3 className="font-extrabold text-sm text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors leading-tight">
                          {brand.name}
                        </h3>
                        
                        <p className="text-xs text-[#4A4A6A] font-semibold mt-1">
                          {brand.offerCount.toLocaleString('en-IN')} Offers
                        </p>
                        
                        <div className="mt-2 text-center">
                          <span className="inline-block text-[11px] font-black text-[#FF5722] bg-[#FFF2ED] px-2.5 py-0.5 rounded-full">
                            {brand.discountLabel}
                          </span>
                        </div>
                      </div>

                      {/* Interactive View Button */}
                      <div className="mt-4">
                        <button
                          className="w-full border border-[#E8E8F0] text-[#1A1A2E] text-xs font-semibold py-2.5 rounded-xl group-hover:border-[#5B4FBE] group-hover:text-[#5B4FBE] group-hover:bg-[#F0EEFF] transition-all duration-200 cursor-pointer"
                          aria-label={`View Offers for ${brand.name}`}
                        >
                          View Offers
                        </button>
                      </div>
                    </>
                  );

                  if (isAmazon) {
                    return (
                      <Link
                        key={brand.id}
                        href="/brands/amazon"
                        className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center relative flex flex-col justify-between"
                      >
                        {CardContent}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={brand.id}
                      onClick={() => handleViewOffersMsg(brand.name)}
                      className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center relative flex flex-col justify-between"
                    >
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 border border-dashed border-[#E8E8F0] rounded-3xl max-w-sm mx-auto">
                <span className="text-4xl text-gray-300 font-bold block mb-2">ðŸ”</span>
                <h3 className="font-bold text-[#1A1A2E]">No brands found</h3>
                <p className="text-xs text-[#4A4A6A] mt-1 px-4 leading-relaxed">
                  We couldn't find any brands matching "{selectedCategory}" with current parameters. Select another category.
                </p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="mt-4 bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                >
                  Show All Brands
                </button>
              </div>
            )}

            {/* VIEW ALL BRANDS INTERACTIVE TRIGGER PANEL */}
            <div className="mt-10 text-center">
              <button
                onClick={() => {
                  if (!showAll) {
                    setShowAll(true);
                  }
                }}
                disabled={showAll || processedBrands.length <= 15}
                className={`px-10 py-3.5 rounded-full font-bold transition-all duration-300 inline-flex items-center gap-2 border-2 ${
                  showAll || processedBrands.length <= 15
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200 cursor-default'
                    : 'border-[#5B4FBE] text-[#5B4FBE] bg-white hover:bg-[#5B4FBE] hover:text-white cursor-pointer active:scale-95'
                }`}
              >
                {showAll || processedBrands.length <= 15 ? (
                  <>
                    <span>Showing All Brands âœ“</span>
                  </>
                ) : (
                  <>
                    <span>View All Brands (500+)</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

          </div>

          {/* RIGHT SIDEBAR PANEL (Sticky Layout w-72) */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left z-20">

            {/* SIDEBAR CARD 1 â€” Categories Filter Section */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-base leading-none select-none">
                Categories
              </h3>
              
              <div className="space-y-1 mt-4">
                {SIDEBAR_CATEGORIES.map((cat) => {
                  const CategoryIcon = cat.icon;
                  const isCurrent = selectedCategory === cat.name;

                  return (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        // Reset show all on category change to prevent overflowing empty grids
                        setShowAll(false);
                      }}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                        isCurrent
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CategoryIcon className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-semibold tracking-tight">{cat.name}</span>
                      </div>
                      
                      {isCurrent ? (
                        <span className="bg-white/20 text-white text-[10px] font-black px-2 py-0.5 rounded-full select-none">
                          {cat.count}
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-gray-400 select-none">
                          {cat.count}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* View all navigation wrapper link */}
              <div className="mt-4 pt-3 border-t border-[#E8E8F0] text-center">
                <Link href="/categories"
                  className="text-xs font-bold text-[#5B4FBE] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View All Categories</span>
                  <ChevronRight size={12} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* SIDEBAR CARD 2 â€” Top Brands Of The Month (Offer based ranked layout) */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Top Brands Of The Month
              </h3>

              <div className="space-y-3">
                {TOP_BRANDS_OF_MONTH.map((item) => {
                  // Rank styling indicators
                  let rankStyles = 'bg-[#F0EEFF] text-[#5B4FBE]';
                  if (item.rank === 1) rankStyles = 'bg-[#FFD700] text-[#1A1A2E]';
                  else if (item.rank === 2) rankStyles = 'bg-gray-200 text-[#1A1A2E]';
                  else if (item.rank === 3) rankStyles = 'bg-[#CD7F32] text-white';

                  return (
                    <div 
                      key={item.rank} 
                      onClick={() => handleViewOffersMsg(item.name)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${rankStyles}`}>
                        {item.rank}
                      </div>

                      <span className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors flex-1 truncate">
                        {item.name}
                      </span>

                      <span className="text-xs text-[#4A4A6A] font-bold shrink-0">
                        {item.offerCount.toLocaleString('en-IN')} Offers
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-[#E8E8F0]">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSortBy('Most Offers');
                    setShowAll(true);
                  }}
                  className="text-xs text-[#5B4FBE] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>View Full List</span>
                  <ChevronRight size={13} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* SIDEBAR CARD 3 â€” Exclusive Deals Call To Action */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 relative overflow-hidden text-white">
              
              {/* Abs decoration bubble */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10 pointer-events-none select-none" />

              <h3 className="font-bold text-white text-base leading-snug select-none">
                Exclusive Deals
              </h3>
              
              <p className="text-white/70 text-xs mt-2 leading-relaxed font-medium">
                Get amazing offers &amp; exclusive discounts from your favorite brands.
              </p>

              <span className="text-4xl mt-3 block select-none" role="img" aria-label="gift">ðŸŽ</span>

              <button
                onClick={() => {
                  alert('Navigating to exclusive private key user deals!');
                }}
                className="mt-4 w-full bg-[#FF5722] hover:bg-orange-500 active:scale-[0.98] text-white py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-black/10 cursor-pointer"
              >
                <Zap size={14} className="fill-white" />
                <span>Explore Deals</span>
              </button>
            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================================
          SECTION 3 â€” WHY SHOP + HOW IT WORKS (Side by side 50%/50%)
          ============================================================================ */}
      <section className="bg-white py-16 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          
          {/* LEFT COLUMN: "Why Shop With Top Brands?" */}
          <div>
            <h2 className="font-bold text-xl text-[#1A1A2E] mb-8 select-none">
              Why Shop With Top Brands?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-[#F0EEFF] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                <div className="text-[#5B4FBE] mb-3">
                  <Smartphone size={28} />
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-sm leading-tight">
                  Best Discounts
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed font-semibold">
                  Get the biggest discounts on top brands
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFF3F0] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                <div className="text-[#FF5722] mb-3">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-sm leading-tight">
                  100% Verified
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed font-semibold">
                  All offers are verified &amp; updated daily
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F0FDF4] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                <div className="text-[#22C55E] mb-3">
                  <LayoutGrid size={28} />
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-sm leading-tight">
                  Huge Variety
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed font-semibold">
                  Shop from 500+ trusted brands
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FFFBEB] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                <div className="text-[#F59E0B] mb-3">
                  <Lock size={28} />
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-sm leading-tight">
                  Safe &amp; Secure
                </h3>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed font-semibold">
                  Your data is safe with us. Happy shopping!
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: "How It Works?" */}
          <div>
            <h2 className="font-bold text-xl text-[#1A1A2E] mb-8 select-none">
              How It Works?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-between relative">
              
              {/* Step 1 */}
              <div className="bg-[#F8F8FF] rounded-2xl p-5 text-center flex-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center border border-[#E8E8F0]">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#5B4FBE] text-white font-black text-xl flex items-center justify-center mx-auto shadow-sm shadow-[#5B4FBE]/30 select-none">
                    1
                  </div>
                  <h3 className="font-bold text-sm text-[#1A1A2E] mt-3 leading-tight select-none">
                    Choose a Brand
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed font-semibold">
                    Pick your favorite brand from our list
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#F8F8FF] rounded-2xl p-5 text-center flex-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center border border-[#E8E8F0]">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#5B4FBE] text-white font-black text-xl flex items-center justify-center mx-auto shadow-sm shadow-[#5B4FBE]/30 select-none">
                    2
                  </div>
                  <h3 className="font-bold text-sm text-[#1A1A2E] mt-3 leading-tight select-none">
                    Get the Best Deal
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed font-semibold">
                    Copy coupon or click on offer
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#F8F8FF] rounded-2xl p-5 text-center flex-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center border border-[#E8E8F0]">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#5B4FBE] text-white font-black text-xl flex items-center justify-center mx-auto shadow-sm shadow-[#5B4FBE]/30 select-none">
                    3
                  </div>
                  <h3 className="font-bold text-sm text-[#1A1A2E] mt-3 leading-tight select-none">
                    Shop &amp; Save
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed font-semibold">
                    Apply the deal and save more money
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 4 â€” NEWSLETTER BANNER (Full width purple styling gradient)
          ============================================================================ */}
      <section className="relative w-full bg-linear-to-br from-[#5B4FBE] to-[#3730A3] py-16 overflow-hidden">
        
        {/* Absolute vector details matching the requested profile */}
        <div className="absolute w-72 h-72 rounded-full bg-white/5 -top-12 -left-12 pointer-events-none select-none" />
        <div className="absolute w-80 h-80 rounded-full bg-white/5 -bottom-24 -right-12 pointer-events-none select-none" />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20 text-white">
          
          {/* Left Decorative Image (Hidden mobile) */}
          <div className="hidden md:col-span-3 md:flex justify-start relative">
            <div className="relative transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300 select-none">
              <span className="text-8xl block filter drop-shadow-md">ðŸ“§</span>
              <span className="absolute top-0 right-0 text-2xl animate-pulse">âœ¦</span>
              <span className="absolute bottom-2 left-[-10px] text-xl animate-bounce">âœ¦</span>
            </div>
          </div>

          {/* Central News Content (Center) */}
          <div className="col-span-12 md:col-span-6 text-center flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-2xl mb-4 text-white shrink-0">
              <Mail size={36} />
            </div>

            <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-white select-none">
              Never Miss a Deal!
            </h2>
            
            <p className="text-white/70 text-sm md:text-base mt-2.5 max-w-md leading-relaxed font-semibold">
              Subscribe to get the latest coupons &amp; offers straight to your inbox.
            </p>

            {/* Input subscribe elements */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing! We will send coupons directly to your inbox shortly.');
              }}
              className="mt-6 w-full max-w-sm flex items-center bg-white p-1 rounded-full shadow-lg"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 bg-transparent border-0 px-4 py-2.5 text-xs focus:ring-0 focus:outline-none placeholder:text-gray-400 font-semibold text-[#1A1A2E]"
              />
              <button
                type="submit"
                className="bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-black px-6 py-3 rounded-full transition-all active:scale-[0.98] select-none cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Decorative Coins Emoji (Hidden mobile) */}
          <div className="hidden md:col-span-3 md:flex justify-end relative">
            <div className="relative transform rotate-[10deg] hover:rotate-0 transition-transform duration-300 select-none">
              <span className="text-8xl block filter drop-shadow-lg">ðŸ’°</span>
              <span className="absolute top-2 left-0 text-3xl animate-bounce">ðŸª™</span>
              <span className="absolute bottom-0 right-[-10px] text-2xl animate-pulse">âœ¨</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}


