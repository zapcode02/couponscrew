'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  Tag,
  Store,
  ShieldCheck,
  Percent,
  LayoutGrid,
  TrendingUp,
  Clock,
  Star,
  RefreshCw,
  Lock,
  Heart,
  Zap,
  Copy,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  Monitor,
  Plane,
  UtensilsCrossed,
  Home,
  Globe,
  Tv,
  ArrowRight,
  Mail,
  Users
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface Deal {
  id: string;
  brandName: string;
  brandLogo: string; // letters
  brandColor: string; // hex
  brandBg: string; // hex
  category: string;
  dealType: 'trending' | 'exclusive' | 'ending-soon' | 'regular';
  badgeText: string;
  title: string;
  description: string;
  couponCode: string;
  discountText: string;
  isVerified: boolean;
  usedCount: string;
  validTill: string;
  isExpiringSoon: boolean;
  isWishlisted?: boolean;
}

export interface CategoryTab {
  id: string;
  name: string;
  icon: string; // emoji char
  dealCount: string;
}

export interface DealOfDay {
  brandName: string;
  brandLogo: string;
  brandColor: string;
  brandBg: string;
  title: string;
  discountText: string;
  productImages: string[]; // emoji array
}

// ============================================================================
// HARDCODED DEALS DATA (18 DEALS)
// ============================================================================
const DEALS_DATA: Deal[] = [
  {
    id: 'deal-1',
    brandName: 'Myntra',
    brandLogo: 'M',
    brandColor: '#FF3F6C',
    brandBg: '#FFF0F4',
    category: 'Fashion',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'Myntra End of Season Sale',
    description: 'Get up to 80% OFF on 3,00,000+ styles.',
    couponCode: 'MYNTRA80',
    discountText: 'Up to 80% OFF',
    isVerified: true,
    usedCount: '1.8k used today',
    validTill: '31 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-2',
    brandName: 'Amazon',
    brandLogo: 'a',
    brandColor: '#FF9900',
    brandBg: '#FFF8E7',
    category: 'Electronics',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'Amazon Great Summer Sale',
    description: 'Up to 70% OFF on mobiles, electronics & more.',
    couponCode: 'SUMMER70',
    discountText: 'Up to 70% OFF',
    isVerified: true,
    usedCount: '2.6k used today',
    validTill: '25 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-3',
    brandName: 'Flipkart',
    brandLogo: 'F',
    brandColor: '#2874F0',
    brandBg: '#EEF4FF',
    category: 'Electronics',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'Flipkart Big Savings Days',
    description: 'Up to 80% OFF + Extra 10% OFF on ICICI Cards.',
    couponCode: 'FKBIG10',
    discountText: 'Up to 80% OFF',
    isVerified: true,
    usedCount: '3.2k used today',
    validTill: '24 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-4',
    brandName: 'MakeMyTrip',
    brandLogo: 'MMT',
    brandColor: '#E8262A',
    brandBg: '#FEF0F0',
    category: 'Travel',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'MakeMyTrip Travel Bonanza',
    description: 'Flat 25% OFF on Domestic Flights & Hotels.',
    couponCode: 'MMT25',
    discountText: 'Flat 25% OFF',
    isVerified: true,
    usedCount: '876 used today',
    validTill: '31 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-5',
    brandName: 'Swiggy',
    brandLogo: 'S',
    brandColor: '#FC8019',
    brandBg: '#FFF5EC',
    category: 'Food & Grocery',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'Swiggy Mega Food Fest',
    description: 'Up to 60% OFF + Free Delivery on orders above â‚¹199.',
    couponCode: 'SWIGGY60',
    discountText: 'Up to 60% OFF',
    isVerified: true,
    usedCount: '2.1k used today',
    validTill: '20 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-6',
    brandName: 'Hostinger',
    brandLogo: 'H',
    brandColor: '#FF6B35',
    brandBg: '#FFF3EE',
    category: 'Electronics',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'Hostinger Anniversary Sale',
    description: 'Up to 90% OFF on Web Hosting + Free Domain.',
    couponCode: 'HOST90',
    discountText: 'Up to 90% OFF',
    isVerified: true,
    usedCount: '654 used today',
    validTill: '30 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-7',
    brandName: 'Nykaa',
    brandLogo: 'N',
    brandColor: '#FC2779',
    brandBg: '#FFF0F6',
    category: 'Beauty',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'Nykaa Beauty Bonanza Sale',
    description: 'Up to 60% OFF on skincare, makeup & wellness brands.',
    couponCode: 'NYKAA60',
    discountText: 'Up to 60% OFF',
    isVerified: true,
    usedCount: '987 used today',
    validTill: '28 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-8',
    brandName: 'Zomato',
    brandLogo: 'Z',
    brandColor: '#E23744',
    brandBg: '#FEF0F1',
    category: 'Food & Grocery',
    dealType: 'ending-soon',
    badgeText: 'â° ENDING SOON',
    title: 'Zomato Flash Sale â€” 60% OFF',
    description: 'Flat 60% OFF on first 3 orders. Max â‚¹150 per order.',
    couponCode: 'ZOMATO60',
    discountText: 'Flat 60% OFF',
    isVerified: true,
    usedCount: '4.3k used today',
    validTill: '21 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-9',
    brandName: 'Ajio',
    brandLogo: 'AJ',
    brandColor: '#000000',
    brandBg: '#F5F5F5',
    category: 'Fashion',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'Ajio Big Bold Sale',
    description: 'Up to 70% OFF on 5,000+ premium fashion brands.',
    couponCode: 'AJIO70',
    discountText: 'Up to 70% OFF',
    isVerified: true,
    usedCount: '765 used today',
    validTill: '29 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-10',
    brandName: 'BigBasket',
    brandLogo: 'BB',
    brandColor: '#84C225',
    brandBg: '#F4FBEA',
    category: 'Food & Grocery',
    dealType: 'regular',
    badgeText: 'âœ… VERIFIED',
    title: 'BigBasket Superstore Sale',
    description: 'â‚¹300 OFF on grocery orders above â‚¹1200. Fresh produce.',
    couponCode: 'BB300',
    discountText: 'â‚¹300 OFF',
    isVerified: true,
    usedCount: '543 used today',
    validTill: '27 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-11',
    brandName: 'boAt',
    brandLogo: 'boAt',
    brandColor: '#1A1A2E',
    brandBg: '#F5F5F5',
    category: 'Electronics',
    dealType: 'ending-soon',
    badgeText: 'â° ENDING SOON',
    title: 'boAt Flash Sale â€” Audio at Rock Bottom',
    description: 'Up to 60% OFF on earphones, headphones & speakers.',
    couponCode: 'BOAT60',
    discountText: 'Up to 60% OFF',
    isVerified: true,
    usedCount: '1.2k used today',
    validTill: '22 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-12',
    brandName: 'OYO',
    brandLogo: 'OYO',
    brandColor: '#EE2E24',
    brandBg: '#FEECEB',
    category: 'Travel',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'OYO Rooms Mega Sale',
    description: 'Flat 45% OFF on hotel bookings across India.',
    couponCode: 'OYO45',
    discountText: 'Flat 45% OFF',
    isVerified: true,
    usedCount: '432 used today',
    validTill: '26 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-13',
    brandName: 'Myntra',
    brandLogo: 'M',
    brandColor: '#FF3F6C',
    brandBg: '#FFF0F4',
    category: 'Fashion',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'Myntra Fashion Friday Sale',
    description: 'Extra 10% OFF on already discounted items. Use code.',
    couponCode: 'MFRIDAY10',
    discountText: 'Extra 10% OFF',
    isVerified: true,
    usedCount: '2.1k used today',
    validTill: '31 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-14',
    brandName: 'Croma',
    brandLogo: 'croma',
    brandColor: '#1D8348',
    brandBg: '#EAFAF1',
    category: 'Electronics',
    dealType: 'regular',
    badgeText: 'âœ… VERIFIED',
    title: 'Croma Weekend Mega Sale',
    description: 'Up to 55% OFF on ACs, TVs, laptops & appliances.',
    couponCode: 'CROMA55',
    discountText: 'Up to 55% OFF',
    isVerified: true,
    usedCount: '678 used today',
    validTill: '30 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-15',
    brandName: 'Coursera',
    brandLogo: 'C',
    brandColor: '#0056D2',
    brandBg: '#EEF4FF',
    category: 'Electronics',
    dealType: 'exclusive',
    badgeText: 'â­ EXCLUSIVE',
    title: 'Coursera Learning Festival',
    description: 'Up to 65% OFF on professional certificates & degrees.',
    couponCode: 'COURSE65',
    discountText: 'Up to 65% OFF',
    isVerified: true,
    usedCount: '321 used today',
    validTill: '31 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-16',
    brandName: 'Samsung',
    brandLogo: 'S',
    brandColor: '#1428A0',
    brandBg: '#EEF0FF',
    category: 'Electronics',
    dealType: 'ending-soon',
    badgeText: 'â° ENDING SOON',
    title: 'Samsung Galaxy Days Sale',
    description: 'Up to 40% OFF on Galaxy phones, tablets & wearables.',
    couponCode: 'SAMSUNG40',
    discountText: 'Up to 40% OFF',
    isVerified: true,
    usedCount: '456 used today',
    validTill: '23 May 2024',
    isExpiringSoon: true
  },
  {
    id: 'deal-17',
    brandName: 'Goibibo',
    brandLogo: 'go',
    brandColor: '#E8262A',
    brandBg: '#FEF0F0',
    category: 'Travel',
    dealType: 'trending',
    badgeText: 'ðŸ”¥ TRENDING',
    title: 'Goibibo Go-On Sale',
    description: 'Flat 30% OFF on flights + Extra 15% on hotels.',
    couponCode: 'GOON30',
    discountText: 'Flat 30% OFF',
    isVerified: true,
    usedCount: '567 used today',
    validTill: '28 May 2024',
    isExpiringSoon: false
  },
  {
    id: 'deal-18',
    brandName: 'Mamaearth',
    brandLogo: 'mama',
    brandColor: '#6AB04C',
    brandBg: '#F0FAF0',
    category: 'Beauty',
    dealType: 'regular',
    badgeText: 'âœ… VERIFIED',
    title: 'Mamaearth Natural Glow Sale',
    description: 'Extra 35% OFF on entire skincare & haircare range.',
    couponCode: 'MAMA35',
    discountText: 'Extra 35% OFF',
    isVerified: true,
    usedCount: '234 used today',
    validTill: '31 May 2024',
    isExpiringSoon: false
  }
];

// ============================================================================
// CATEGORIES DATA
// ============================================================================
const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', name: 'All Deals', icon: 'ðŸ·ï¸', dealCount: '2,500+ Deals' },
  { id: 'fashion', name: 'Fashion', icon: 'ðŸ‘—', dealCount: '560+ Deals' },
  { id: 'electronics', name: 'Electronics', icon: 'ðŸ“±', dealCount: '480+ Deals' },
  { id: 'travel', name: 'Travel', icon: 'âœˆï¸', dealCount: '350+ Deals' },
  { id: 'food', name: 'Food & Grocery', icon: 'ðŸ›’', dealCount: '420+ Deals' },
  { id: 'home', name: 'Home & Kitchen', icon: 'ðŸ ', dealCount: '290+ Deals' },
  { id: 'beauty', name: 'Beauty', icon: 'ðŸ’„', dealCount: '210+ Deals' }
];

// ============================================================================
// SIDEBAR STATIC CONFIGURATIONS
// ============================================================================
const SIDEBAR_CATEGORIES = [
  { name: 'Fashion & Lifestyle', icon: ShoppingBag, count: 560 },
  { name: 'Electronics', icon: Monitor, count: 480 },
  { name: 'Travel', icon: Plane, count: 350 },
  { name: 'Food & Grocery', icon: UtensilsCrossed, count: 420 },
  { name: 'Home & Kitchen', icon: Home, count: 290 },
  { name: 'Health & Beauty', icon: Heart, count: 210 },
  { name: 'Web Hosting', icon: Globe, count: 150 },
  { name: 'Entertainment', icon: Tv, count: 120 }
];

// ================= ===========================================================
// HELPER PARSERS FOR SORTING
// ============================================================================
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

const parseDiscountPercent = (discountStr: string): number => {
  const matchPercent = discountStr.match(/(\d+)%/);
  if (matchPercent) return parseInt(matchPercent[1], 10);
  const matchRs = discountStr.match(/â‚¹(\d+)/);
  if (matchRs) return parseInt(matchRs[1], 10);
  const matchAny = discountStr.match(/\d+/);
  return matchAny ? parseInt(matchAny[0], 10) : 0;
};

const parseUsedCount = (countStr: string): number => {
  const match = countStr.match(/^([\d.]+)(k?)/);
  if (!match) return 0;
  const val = parseFloat(match[1]);
  const isK = match[2] === 'k';
  return isK ? val * 1000 : val;
};

// ============================================================================
// MAIN COMPONENT DEFINITION
// ============================================================================
export default function Deals() {
  // Filters & Page States
  const [activeCategory, setActiveCategory] = useState<string>('All Deals');
  const [activeDealType, setActiveDealType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('Recommended');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [wishlistedDeals, setWishlistedDeals] = useState<Record<string, boolean>>({});
  const [copiedCodeCode, setCopiedCodeCode] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');

  // Refs for navigation/reset triggers
  const isFirstMount = useRef<boolean>(true);
  const listHeaderRef = useRef<HTMLDivElement>(null);

  // Live countdown timer state (init from 5 hours 43 minutes 21 seconds)
  // 5h 43m 21s = 20601 seconds
  const [countdownSeconds, setCountdownSeconds] = useState<number>(20601);

  // Countdown timer effect
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          // Loop back to 23:59:59 (86399 seconds)
          return 86399;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Format countdown into HH : MM : SS
  const formattedCountdown = useMemo(() => {
    const h = Math.floor(countdownSeconds / 3600);
    const m = Math.floor((countdownSeconds % 3600) / 60);
    const s = countdownSeconds % 60;
    const hStr = h.toString().padStart(2, '0');
    const mStr = m.toString().padStart(2, '0');
    const sStr = s.toString().padStart(2, '0');
    return `${hStr} : ${mStr} : ${sStr}`;
  }, [countdownSeconds]);

  // Combined synchronous Filtering & Sorting Logic
  const processedDeals = useMemo(() => {
    let result = [...DEALS_DATA];

    // 1. Category Filter checks
    if (activeCategory !== 'All Deals') {
      const query = activeCategory.toLowerCase();
      result = result.filter((deal) => {
        // Handle "Food & Grocery" or "Beauty" matches safely
        const cat = deal.category.toLowerCase();
        if (query === 'beauty' && cat === 'beauty') return true;
        if (query === 'food & grocery' && cat === 'food & grocery') return true;
        return cat === query;
      });
    }

    // 2. Deal Type Filter
    if (activeDealType !== 'all') {
      result = result.filter((deal) => deal.dealType === activeDealType);
    }

    // 3. Sort logic
    if (sortBy === 'Recommended') {
      // Prioritizes trending and exclusive to top list
      const priorities: Record<string, number> = { trending: 3, exclusive: 2, 'ending-soon': 1, regular: 0 };
      result.sort((a, b) => (priorities[b.dealType] || 0) - (priorities[a.dealType] || 0));
    } else if (sortBy === 'Newest First') {
      result.sort((a, b) => {
        const idA = parseInt(a.id.replace('deal-', ''), 10);
        const idB = parseInt(b.id.replace('deal-', ''), 10);
        return idB - idA;
      });
    } else if (sortBy === 'Expiring Soon') {
      result.sort((a, b) => {
        if (a.isExpiringSoon && !b.isExpiringSoon) return -1;
        if (!a.isExpiringSoon && b.isExpiringSoon) return 1;
        return parseDate(a.validTill) - parseDate(b.validTill);
      });
    } else if (sortBy === 'Highest Discount') {
      result.sort((a, b) => parseDiscountPercent(b.discountText) - parseDiscountPercent(a.discountText));
    } else if (sortBy === 'Most Popular') {
      result.sort((a, b) => parseUsedCount(b.usedCount) - parseUsedCount(a.usedCount));
    }

    return result;
  }, [activeCategory, activeDealType, sortBy]);

  // Handle auto-resets when any of the filters change
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setVisibleCount(6);
    if (listHeaderRef.current) {
      listHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeCategory, activeDealType, sortBy]);

  // Wishlist heart handlers
  const handleToggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setWishlistedDeals((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Claim/View Deal and Coupon Copy Handlers
  const handleCopyCodeAction = (code: string, brand: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeCode(code);
      setTimeout(() => setCopiedCodeCode(null), 1800);
      alert(`ðŸŽ‰ Code Copied! Saving on ${brand}: "${title}" has been claimed. Complete details have been applied at checkout!`);
    });
  };

  const handleViewDeal = (brand: string, title: string) => {
    alert(`ðŸŽ‰ Code Copied! Saving on ${brand}: "${title}" has been claimed. Complete details have been applied at checkout!`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Awesome! You have successfully subscribed to the SaveMate deals list with: ${newsletterEmail}. The hottest discounts are headed your way!`);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ============================================================================
          SECTION 1 â€” HERO BANNER (White Background, min-h-[280px], overflow-hidden)
          ============================================================================ */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] py-10 px-6 min-h-[280px] overflow-hidden flex items-center">
        
        {/* Subtle high-contrast decorative backgrounds inside edges (purple-accented circles) */}
        <div className="absolute top-1/2 left-[-20px] -translate-y-1/2 w-72 h-72 rounded-full bg-[#F0EEFF]/55 pointer-events-none select-none" />
        <div className="absolute top-[-40px] right-[10%] w-56 h-56 rounded-full bg-[#FFF3F0]/60 pointer-events-none select-none" />

        {/* Small sparkling vector-like diamond characters in matching theme tones */}
        <span className="absolute top-12 left-[12%] text-[#5B4FBE]/20 text-xl font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-12 left-[40%] text-[#FF5722]/15 text-sm font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute top-6 right-[38%] text-[#22C55E]/15 text-lg font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-16 right-[8%] text-[#FFD700]/30 text-2xl font-bold select-none pointer-events-none">â—†</span>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 text-left">
          
          {/* LEFT SIDE â€” Content Layout Area (58% visual weight) */}
          <div className="md:col-span-7 flex flex-col items-start pr-0 md:pr-4">
            {/* Breadcrumb line navigation */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold">Deals</span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mt-3 select-none leading-none">
              All Deals
            </h1>

            {/* Paragraph Description */}
            <p className="text-[#4A4A6A] text-base md:text-lg mt-3 max-w-md leading-relaxed select-none">
              Explore the best deals and limited time offers from top brands and save more every day.
            </p>

            {/* 4 Stat Mini Cards (Responsive Layout Grid Grid) */}
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE]">
                  <Tag size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">2,500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deals</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722]">
                  <Store size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">500+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Top Brands</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Verified Deals</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="bg-[#FEFBE8] p-2.5 rounded-xl text-[#F59E0B]">
                  <Percent size={18} />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">Up to 90%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Biggest Savings</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE â€” Pure CSS themed layout composition (42% visual weight / hidden mobile) */}
          <div className="hidden md:col-span-5 md:flex items-center justify-center relative select-none">
            <div className="relative w-80 h-80 flex items-center justify-center overflow-visible">

              {/* Central Abstract Pulsing Ambient Backplate Ring */}
              <div className="absolute w-64 h-64 rounded-full bg-[#F0EEFF]/60 animate-pulse pointer-events-none" />

              {/* 1. Main Large Shopping Bag (Central visual heavy anchor) */}
              <div className="bg-[#5B4FBE] w-44 h-52 rounded-3xl mx-auto relative shadow-2xl border border-indigo-400/20 transform -rotate-2 hover:rotate-0 transition-transform duration-300 flex items-center justify-center z-10">
                
                {/* Horizontal & vertical custom texture line trims inside the bag */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#4a3fa8]/30 -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[#4a3fa8]/30 -translate-x-1/2" />

                {/* Handles on top of shopping bag */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-4 z-0">
                  <div className="w-12 h-14 rounded-full border-4 border-[#4a3fa8] bg-transparent" />
                  <div className="w-12 h-14 rounded-full border-4 border-[#4a3fa8] bg-transparent absolute -left-2" />
                </div>

                {/* "DEALS" text inside bag center */}
                <span className="absolute text-white font-black text-2xl tracking-widest z-15">
                  DEALS
                </span>
              </div>

              {/* 2. Gift Box positioned overlapping left bottom */}
              <div className="bg-[#7C3AED] w-28 h-28 rounded-2xl absolute -left-8 bottom-4 shadow-xl z-20 border border-violet-400/20 transform rotate-12 flex items-center justify-center overflow-hidden">
                {/* Lighter purple ribbons decoration */}
                <div className="absolute top-0 bottom-0 w-3.5 bg-violet-400/40 left-1/2 -translate-x-1/2" />
                <div className="absolute left-0 right-0 h-3.5 bg-violet-400/40 top-1/2 -translate-y-1/2" />
                {/* Sparkle badge */}
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white text-xs font-black z-10 select-none">
                  â˜…
                </div>
              </div>

              {/* 3. Shopping Cart Outline Vector Shape (Right bottom) */}
              <div className="border-4 border-[#FF5722] w-32 h-24 rounded-xl absolute -right-6 bottom-0 z-15 bg-white/80 backdrop-blur-xs shadow-lg transform -rotate-6 flex flex-col justify-end p-2 border-dashed">
                {/* Visual wheels */}
                <div className="flex justify-around items-center absolute -bottom-2.5 left-0 right-0 px-4">
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] border-2 border-white shadow-sm shrink-0" />
                  <div className="w-5 h-5 rounded-full bg-[#FF5722] border-2 border-white shadow-sm shrink-0" />
                </div>
                {/* Tiny items indicator */}
                <div className="text-center text-xs font-black text-[#FF5722] select-none leading-none mb-1">
                  CART
                </div>
              </div>

              {/* 4. Clock/Timer Shape positioned right top */}
              <div className="bg-white border-4 border-[#5B4FBE] w-20 h-20 rounded-full absolute -right-4 top-8 shadow-xl flex items-center justify-center z-25 hover:scale-105 duration-300">
                <Clock className="text-[#5B4FBE]" size={36} />
              </div>

              {/* 5. % Tag Badge top center */}
              <div className="bg-[#FF5722] rounded-full w-14 h-14 absolute top-0 right-16 flex items-center justify-center text-white font-black text-xl shadow-xl border-2 border-white animate-bounce pointer-events-none z-30">
                %
              </div>

              {/* 6. Gold coins scattered bottom container base */}
              <div className="absolute bottom-[-10px] left-[25%] bg-[#FFD700] border border-amber-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-amber-900 shadow-md transform rotate-12 z-20">
                â‚¹
              </div>
              <div className="absolute bottom-[-2px] left-[52%] bg-[#FFD700] border border-amber-400 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-900 shadow-xs z-20">
                â‚¹
              </div>
              <div className="absolute bottom-[-15px] right-[25%] bg-[#FFD700] border border-amber-400 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-amber-900 shadow-md z-20">
                â‚¹
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2 â€” CATEGORY TABS ROW (White BG, border-y border-[#E8E8F0])
          ============================================================================ */}
      <section className="bg-white border-y border-[#E8E8F0] py-4 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
            
            {/* Category tabs mapper */}
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.name;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.name)}
                  className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl cursor-pointer transition-all duration-200 min-w-[100px] flex-shrink-0 text-center ${
                    isActive
                      ? 'bg-[#5B4FBE]/10 border-b-2 border-[#5B4FBE]'
                      : 'hover:bg-[#F8F8FF]'
                  }`}
                >
                  {/* Emoji circle style */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-colors duration-200 ${
                      isActive ? 'bg-[#5B4FBE]' : 'bg-[#F8F8FF] border border-[#E8E8F0]'
                    }`}
                  >
                    <span>{tab.icon}</span>
                  </div>

                  {/* Tab Display Label */}
                  <span
                    className={`text-xs select-none ${
                      isActive ? 'font-bold text-[#5B4FBE]' : 'font-semibold text-[#1A1A2E]'
                    }`}
                  >
                    {tab.name}
                  </span>

                  {/* Total counts subcaption */}
                  <span
                    className={`text-[10px] select-none ${
                      isActive ? 'text-[#5B4FBE] font-bold' : 'text-[#4A4A6A]'
                    }`}
                  >
                    {tab.dealCount}
                  </span>
                </div>
              );
            })}

            {/* Special View all categories button */}
            <Link href="/categories"
              className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl cursor-pointer hover:bg-[#F8F8FF] transition-all duration-200 min-w-[100px] flex-shrink-0 text-center select-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] border border-[#E8E8F0] flex items-center justify-center text-[#5B4FBE]">
                <LayoutGrid size={20} className="stroke-[2.5]" />
              </div>

              <span className="text-xs font-semibold text-[#1A1A2E]">
                View All Categories
              </span>

              <span className="text-[10px] text-[#5B4FBE] font-bold">
                âŠž Explore All
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 3 â€” DEAL TYPE FILTER TABS + SORT ROW
          ============================================================================ */}
      <section className="bg-white border-b border-[#E8E8F0] py-4 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* LEFT: 4 deal type filter pills list */}
          <div className="flex items-center gap-2 flex-wrap text-left">
            
            {/* All deals */}
            <button
              onClick={() => setActiveDealType('all')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                activeDealType === 'all'
                  ? 'bg-[#5B4FBE] text-white shadow-xs'
                  : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
              }`}
            >
              All Deals
            </button>

            {/* Trending Deals with custom Lucide icon */}
            <button
              onClick={() => setActiveDealType('trending')}
              className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition cursor-pointer ${
                activeDealType === 'trending'
                  ? 'bg-[#5B4FBE] text-white shadow-xs'
                  : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
              }`}
            >
              <TrendingUp size={15} />
              <span>Trending Deals</span>
            </button>

            {/* Ending soon was labeled clock */}
            <button
              onClick={() => setActiveDealType('ending-soon')}
              className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition cursor-pointer ${
                activeDealType === 'ending-soon'
                  ? 'bg-[#5B4FBE] text-white shadow-xs'
                  : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
              }`}
            >
              <Clock size={15} />
              <span>Ending Soon</span>
            </button>

            {/* Exclusive Deals with Star icons */}
            <button
              onClick={() => setActiveDealType('exclusive')}
              className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition cursor-pointer ${
                activeDealType === 'exclusive'
                  ? 'bg-[#5B4FBE] text-white shadow-xs'
                  : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
              }`}
            >
              <Star size={15} />
              <span>Exclusive Deals</span>
            </button>

          </div>

          {/* RIGHT: Dropdown sort layout selector */}
          <div className="flex items-center gap-2.5 shrink-0 select-none w-full md:w-auto justify-end">
            <span className="text-sm font-semibold text-[#4A4A6A] whitespace-nowrap">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#E8E8F0] rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer text-[#1A1A2E] font-medium transition hover:bg-gray-50/80"
            >
              <option value="Recommended">Recommended</option>
              <option value="Newest First">Newest First</option>
              <option value="Expiring Soon">Expiring Soon</option>
              <option value="Highest Discount">Highest Discount</option>
              <option value="Most Popular">Most Popular</option>
            </select>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 4 â€” MAIN 2-COLUMN STRUCTURE (bg-[#F8F8FF], py-10)
          ============================================================================ */}
      <section className="bg-[#F8F8FF] py-10 flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-7 items-start relative">
          
          {/* LEFT CORE â€” DEALS DIRECTORY GRID column */}
          <div className="flex-1 w-full text-left" ref={listHeaderRef}>
            
            {/* Context Heading Header */}
            <div className="mb-6">
              <h2 className="font-extrabold text-2xl text-[#1A1A2E] leading-none select-none">
                {activeDealType === 'all' && 'Latest Deals'}
                {activeDealType === 'trending' && 'ðŸ”¥ Trending Deals'}
                {activeDealType === 'ending-soon' && 'â° Ending Soon'}
                {activeDealType === 'exclusive' && 'â­ Exclusive Deals'}
              </h2>
              <p className="text-xs text-[#4A4A6A] font-semibold mt-1.5 uppercase tracking-wide">
                Found {processedDeals.length} deals matching your filters {activeCategory !== 'All Deals' ? `in "${activeCategory}"` : ''}
              </p>
            </div>

            {/* List block container */}
            {processedDeals.length > 0 ? (
              <div className="space-y-4">
                {processedDeals.slice(0, visibleCount).map((deal) => {
                  
                  // Setup custom badges inside left side of cards
                  let dealBadgeStyle = 'bg-[#F0FDF4] text-[#22C55E]';
                  if (deal.dealType === 'trending') dealBadgeStyle = 'bg-[#FFF3F0] text-[#FF5722]';
                  else if (deal.dealType === 'exclusive') dealBadgeStyle = 'bg-[#F0EEFF] text-[#5B4FBE]';
                  else if (deal.dealType === 'ending-soon') dealBadgeStyle = 'bg-[#FEF2F2] text-[#EF4444]';

                  const isWishlisted = !!wishlistedDeals[deal.id];

                  return (
                    <div
                      key={deal.id}
                      onClick={() => handleViewDeal(deal.brandName, deal.title)}
                      className="bg-white rounded-2xl border border-[#E8E8F0] p-5 hover:shadow-lg hover:border-[#5B4FBE]/30 transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row items-center sm:items-start gap-5 relative"
                    >
                      
                      {/* Left: Brand logo column (flex-shrink-0 text-center w-24) */}
                      <div className="flex-shrink-0 text-center w-24 flex flex-col items-center">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white shadow-xs group-hover:scale-105 transition-all duration-300 pointer-events-none select-none"
                          style={{ backgroundColor: deal.brandBg }}
                        >
                          <span
                            className="font-black text-lg uppercase tracking-wide"
                            style={{ color: deal.brandColor }}
                          >
                            {deal.brandLogo}
                          </span>
                        </div>

                        <span className="text-xs font-extrabold text-[#1A1A2E] mt-2 block w-full text-center line-clamp-1">
                          {deal.brandName}
                        </span>

                        <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1 scale-90 select-none">
                          {deal.category}
                        </span>
                      </div>

                      {/* Center: Deal core details (flex-1) */}
                      <div className="flex-1 text-left w-full">
                        <div className="flex items-center gap-2 mb-2 select-none">
                          <span className={`inline-block text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider ${dealBadgeStyle}`}>
                            {deal.badgeText}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-[#1A1A2E] text-base md:text-lg leading-tight group-hover:text-[#5B4FBE] transition-colors line-clamp-1">
                          {deal.title}
                        </h3>

                        <p className="text-[#4A4A6A] text-sm mt-1.5 leading-relaxed font-semibold line-clamp-1">
                          {deal.description}
                        </p>

                        {/* Interactive Coupon Code Dash Pill widget */}
                        <div className="mt-3">
                          <div
                            onClick={(e) => handleCopyCodeAction(deal.couponCode, deal.brandName, deal.title, e)}
                            className="inline-flex items-center gap-2 border border-dashed border-[#5B4FBE] bg-[#F0EEFF] hover:bg-[#5B4FBE]/15 rounded-lg px-3 py-1.5 group/code transition-colors cursor-pointer select-none"
                            title="Click to copy coupon code"
                          >
                            <span className="text-xs text-[#4A4A6A] font-semibold">Code:</span>
                            <span className="text-xs font-black text-[#5B4FBE] font-mono tracking-wider">
                              {deal.couponCode}
                            </span>
                            <Copy
                              size={13}
                              className={`ml-1 transition-colors ${
                                copiedCodeCode === deal.couponCode
                                  ? 'text-[#22C55E]'
                                  : 'text-[#5B4FBE] group-hover/code:text-[#FF5722]'
                              }`}
                            />
                            {copiedCodeCode === deal.couponCode && (
                              <span className="text-[10px] font-bold text-[#22C55E]">Copied!</span>
                            )}
                          </div>
                        </div>

                        {/* Verification markers under layout */}
                        <div className="mt-4 flex items-center gap-4 text-xs select-none">
                          {deal.isVerified && (
                            <div className="inline-flex items-center gap-1 text-[#22C55E]">
                              <ShieldCheck size={14} className="stroke-[2.5]" />
                              <span className="font-bold">Verified</span>
                            </div>
                          )}

                          <div className="inline-flex items-center gap-1 text-gray-400">
                            <Users size={13} />
                            <span className="font-semibold">{deal.usedCount}</span>
                          </div>
                        </div>

                      </div>

                      {/* Right: Discount, Valid till, buttons (flex-shrink-0) */}
                      <div className="flex-shrink-0 flex flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-auto min-w-[160px] pt-4 sm:pt-0 border-t sm:border-t-0 border-[#E8E8F0]">
                        
                        <div className="sm:text-right text-center select-none w-full">
                          <span className="block font-black text-xl text-[#FF5722]">
                            {deal.discountText}
                          </span>
                          
                          <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1.5">
                            Valid Till
                          </span>

                          <span
                            className={`block font-extrabold text-sm mt-0.5 ${
                              deal.isExpiringSoon ? 'text-[#EF4444]' : 'text-[#4A4A6A]'
                            }`}
                          >
                            {deal.validTill}
                          </span>

                          {deal.isExpiringSoon && (
                            <span className="block text-[10px] text-[#EF4444] font-black tracking-wide uppercase mt-1 animate-pulse">
                              âš¡ Expiring Soon!
                            </span>
                          )}
                        </div>

                        {/* Interactive Buttons row on cards */}
                        <div className="mt-2 flex items-center gap-2 w-full justify-center sm:justify-end">
                          
                          {/* Heart wishlist */}
                          <button
                            onClick={(e) => handleToggleWishlist(deal.id, e)}
                            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                              isWishlisted
                                ? 'bg-[#FEF2F2] text-[#EF4444] border-[#EF4444] scale-105'
                                : 'bg-white border-[#E8E8F0] text-gray-400 hover:border-[#EF4444] hover:text-[#EF4444]'
                            }`}
                            title={isWishlisted ? 'Remove from favorites' : 'Add to favorites'}
                          >
                            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
                          </button>

                          {/* Trigger view deal action button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDeal(deal.brandName, deal.title);
                            }}
                            className="bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
                          >
                            <Zap size={13} className="stroke-[2.5]" />
                            <span>View Deal</span>
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              /* No matching deals empty screen state checks */
              <div className="text-center py-16 bg-white border border-dashed border-[#E8E8F0] rounded-3xl max-w-sm mx-auto">
                <span className="text-4xl text-gray-300 font-bold block mb-2">ðŸ”</span>
                <h3 className="font-extrabold text-[#1A1A2E]">No Deals Found</h3>
                <p className="text-xs text-[#4A4A6A] mt-1.5 px-4 leading-relaxed font-semibold">
                  We currently do not have any deals listed under "{activeCategory}" with these specifications. Click below to reset your dashboard filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All Deals');
                    setActiveDealType('all');
                  }}
                  className="mt-4 bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition cursor-pointer"
                >
                  Show All Deals
                </button>
              </div>
            )}

            {/* VIEW MORE PROGRESS BUTTON CONTAINER */}
            <div className="mt-8 text-center select-none">
              {processedDeals.length > visibleCount ? (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="border border-[#5B4FBE] text-[#5B4FBE] px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#5B4FBE] hover:text-white transition w-fit mx-auto flex items-center gap-2 active:scale-95 cursor-pointer bg-white shadow-xs"
                >
                  <ChevronDown size={16} className="stroke-[2.5]" />
                  <span>View More Deals</span>
                </button>
              ) : (
                <button
                  disabled
                  className="border border-gray-200 text-gray-400 bg-gray-50/80 px-10 py-3 rounded-full font-bold text-sm w-fit mx-auto flex items-center gap-2"
                >
                  <span>âœ“ All Deals Loaded</span>
                </button>
              )}
            </div>

          </div>

          {/* RIGHT SIDE â€” STICKY SIDEBAR COLUMN */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left z-20">
            
            {/* SIDEBAR CARD 1 â€” Deals of the Day COUNTDOWN */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl overflow-hidden shadow-lg border border-indigo-400/10">
              
              {/* Header block with title & timer countdown label */}
              <div className="p-4 flex items-center justify-between border-b border-white/10 select-none">
                <span className="text-white font-extrabold text-sm tracking-wide">
                  Deals of the Day
                </span>

                <div className="flex items-center">
                  <span className="text-white/70 text-[10px] mr-1.5 font-bold uppercase tracking-wider">
                    Ends in
                  </span>
                  <div className="bg-[#FF5722] text-white font-mono font-black text-xs px-2.5 py-1 rounded-md tracking-wider shadow-sm animate-pulse">
                    {formattedCountdown}
                  </div>
                </div>
              </div>

              {/* White dynamic container inside background card */}
              <div className="bg-white p-4">
                
                {/* Brand information row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] flex items-center justify-center select-none shrink-0 border border-[#FF9900]/15">
                    <span className="text-[#FF9900] font-black text-base uppercase">
                      a
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-sm text-[#1A1A2E] leading-none">
                      Amazon
                    </h4>
                    <span className="text-[#4A4A6A] text-[11px] font-semibold mt-1 block truncate">
                      Up to 70% OFF on Electronics
                    </span>
                  </div>
                </div>

                {/* 3 Emoji Electronic Product previews row */}
                <div className="mt-4 flex gap-2 w-full justify-between items-center select-none">
                  
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">
                    ðŸŽ§
                  </div>

                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">
                    ðŸ“±
                  </div>

                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">
                    âŒš
                  </div>

                </div>

                {/* Grab This Deal instant coupon trigger */}
                <button
                  onClick={() => handleViewDeal('Amazon', 'Amazon Great Summer Sale - Up to 70% OFF on Electronics')}
                  className="mt-4 w-full bg-[#FF5722] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 select-none"
                >
                  <Zap size={16} className="stroke-[2.5]" />
                  <span>Grab This Deal</span>
                </button>

              </div>

            </div>

            {/* SIDEBAR CARD 2 â€” Top Deal Categories */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Top Deal Categories
              </h3>

              <div className="space-y-1">
                {SIDEBAR_CATEGORIES.map((cat, idx) => {
                  const CatIcon = cat.icon;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCategory(cat.name === 'Fashion & Lifestyle' ? 'Fashion' : cat.name === 'Health & Beauty' ? 'Beauty' : cat.name)}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group"
                    >
                      <CatIcon size={16} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                      
                      <span className="text-sm text-[#4A4A6A] group-hover:text-[#5B4FBE] group-hover:font-semibold flex-1 truncate">
                        {cat.name}
                      </span>
                      
                      <span className="text-xs text-gray-400 ml-auto select-none font-semibold">
                        {cat.count}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* View all categories router link */}
              <div className="mt-4 pt-4 border-t border-[#E8E8F0] text-center select-none">
                <Link href="/categories"
                  className="text-xs text-[#5B4FBE] font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>View All Categories</span>
                  <ArrowRight size={13} className="stroke-[2.5]" />
                </Link>
              </div>

            </div>

            {/* SIDEBAR CARD 3 â€” Why Shop Our Deals */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none font-sans uppercase tracking-wider text-gray-400">
                Why Shop Our Deals?
              </h3>

              <div className="space-y-4 text-left">
                
                {/* Reason 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center shrink-0 shadow-xs z-10 select-none">
                    <ShieldCheck size={18} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-[#1A1A2E] leading-tight">
                      Handpicked & Verified Deals
                    </h5>
                    <p className="text-[10px] text-[#4A4A6A] mt-0.5 font-semibold">
                      Only the best & genuine offers
                    </p>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF3F0] text-[#FF5722] flex items-center justify-center shrink-0 shadow-xs z-10 select-none">
                    <TrendingUp size={18} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-[#1A1A2E] leading-tight">
                      Huge Savings
                    </h5>
                    <p className="text-[10px] text-[#4A4A6A] mt-0.5 font-semibold">
                      Save up to 90% on top brands
                    </p>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center shrink-0 shadow-xs z-10 select-none">
                    <RefreshCw size={17} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-[#1A1A2E] leading-tight">
                      Updated Daily
                    </h5>
                    <p className="text-[10px] text-[#4A4A6A] mt-0.5 font-semibold">
                      New deals added every day
                    </p>
                  </div>
                </div>

                {/* Reason 4 */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs z-10 select-none">
                    <Lock size={16} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-[#1A1A2E] leading-tight">
                      Safe & Secure
                    </h5>
                    <p className="text-[10px] text-[#4A4A6A] mt-0.5 font-semibold">
                      100% safe shopping experience
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================================
          SECTION 5 â€” NEWSLETTER BANNER (Full Width Purple Gradient, mt-10)
          ============================================================================ */}
      <section className="bg-gradient-to-br from-[#5B4FBE] to-[#3730A3] py-16 relative overflow-hidden select-none w-full">
        
        {/* Absolute decorative backplates */}
        <div className="absolute top-[-50px] left-[-50px] w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: Floating email mock (Hidden on Mobile) */}
          <div className="hidden md:col-span-3 md:flex items-center justify-center relative overflow-visible">
            <span className="text-8xl select-none animate-bounce delay-1000">ðŸ“§</span>
            {/* Sparkle effects around the envelope */}
            <span className="absolute top-2 left-[20%] text-[#FFD700] text-lg font-black animate-ping">âœ¦</span>
            <span className="absolute bottom-4 right-[25%] text-white text-md font-bold">âœ¦</span>
          </div>

          {/* MAIN CENTER COLUMN: Subscription form control (Content area) */}
          <div className="col-span-1 md:col-span-6 text-center max-w-lg mx-auto">
            <div className="bg-white/10 w-16 h-16 rounded-3xl mx-auto flex items-center justify-center mb-4 text-white">
              <Mail size={32} />
            </div>

            <h3 className="font-extrabold text-3xl text-white tracking-tight leading-none">
              Never Miss a Deal!
            </h3>

            <p className="text-white/70 text-sm mt-3 leading-relaxed font-semibold">
              Subscribe to get the hottest deals straight to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex w-full max-w-md mx-auto items-center">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white rounded-l-full px-6 py-4 text-sm text-[#1A1A2E] placeholder:text-gray-400 outline-none font-bold"
              />

              <button
                type="submit"
                className="bg-[#FF5722] hover:bg-orange-600 active:scale-95 text-white px-7 py-4 rounded-r-full font-extrabold text-sm transition-all shrink-0 cursor-pointer shadow-md"
              >
                Subscribe
              </button>
            </form>

            <span className="block text-[11px] text-white/40 mt-3.5 font-bold tracking-wide">
              No spam. Unsubscribe anytime.
            </span>
          </div>

          {/* RIGHT COLUMN: Floating gift card box (Hidden on Mobile) */}
          <div className="hidden md:col-span-3 md:flex items-center justify-center relative overflow-visible">
            <span className="text-8xl select-none animate-pulse">ðŸŽ</span>
            {/* Overlay items floating around gift */}
            <span className="absolute top-6 right-6 bg-[#FF5722] text-white font-extrabold text-xs w-8 h-8 rounded-full flex items-center justify-center shadow-md border border-white">%</span>
            <span className="absolute bottom-6 left-6 bg-[#FFD700] text-amber-900 border border-amber-300 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-xs">â‚¹</span>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 6 â€” TRUST BADGES STRIP (Grid layout, py-10)
          ============================================================================ */}
      <section className="bg-white border-t border-[#E8E8F0] py-10 w-full select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            
            {/* Badge 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center shadow-xs">
                <ShieldCheck size={26} className="stroke-[2]" />
              </div>
              <h4 className="font-extrabold text-sm text-[#1A1A2E] mt-4 tracking-tight">
                100% Verified Deals
              </h4>
              <p className="text-xs text-[#4A4A6A] mt-1 font-semibold">
                Manually checked &amp; updated
              </p>
            </div>

            {/* Badge 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] text-[#FF5722] flex items-center justify-center shadow-xs">
                <Tag size={26} className="stroke-[2]" />
              </div>
              <h4 className="font-extrabold text-sm text-[#1A1A2E] mt-4 tracking-tight">
                Best Discounts
              </h4>
              <p className="text-xs text-[#4A4A6A] mt-1 font-semibold">
                Get the biggest savings
              </p>
            </div>

            {/* Badge 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shadow-xs">
                <Star size={26} className="stroke-[2] fill-amber-400" />
              </div>
              <h4 className="font-extrabold text-sm text-[#1A1A2E] mt-4 tracking-tight">
                Exclusive Offers
              </h4>
              <p className="text-xs text-[#4A4A6A] mt-1 font-semibold">
                Only for our users
              </p>
            </div>

            {/* Badge 4 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center shadow-xs">
                <Lock size={26} className="stroke-[2]" />
              </div>
              <h4 className="font-extrabold text-sm text-[#1A1A2E] mt-4 tracking-tight">
                Safe &amp; Secure
              </h4>
              <p className="text-xs text-[#4A4A6A] mt-1 font-semibold">
                Your data is protected
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

