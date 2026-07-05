'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  Tag,
  Store,
  ShieldCheck,
  Percent,
  TrendingUp,
  Clock,
  Star,
  RefreshCw,
  Lock,
  Heart,
  Zap,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  Monitor,
  Plane,
  UtensilsCrossed,
  Home,
  HelpCircle, 
  CheckCircle, 
  Shirt, 
  Smartphone, 
  Utensils, 
  Sparkles, 
  Globe,
  Tv,
  ArrowRight,
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
// HARDCODED DEALS DATA — PEPPERFRY
// ============================================================================
const DEALS_DATA: Deal[] = [
  {
    id: 'deal-1',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 50% off on Bonton Computer Table in Wenge Finish with Keyboard Slider',
    description: 'Shop the Bonton Computer Table in Wenge finish with a sliding keyboard tray at up to 50% OFF.',
    couponCode: '',
    discountText: 'Up to 50% OFF',
    isVerified: true,
    usedCount: '1.2k used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-2',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get Ethnic Motif Multicolor (12 x 16) PVC Placemats, Set of 6 @ Rs.1',
    description: 'Add a set of 6 ethnic motif multicolor PVC placemats to your dining table for just ₹1.',
    couponCode: '',
    discountText: '@ ₹1',
    isVerified: true,
    usedCount: '876 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-3',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 35% off on Yuko TV Console for TVs up to 55" in Columbia',
    description: 'Shop the Yuko TV Console in Columbia finish, suitable for TVs up to 55 inches, at up to 35% OFF.',
    couponCode: '',
    discountText: 'Up to 35% OFF',
    isVerified: true,
    usedCount: '654 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-4',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Electronics',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 75% off on Portable Electronic Digital Weight Machine',
    description: 'Shop the portable electronic digital weight machine at up to 75% OFF.',
    couponCode: '',
    discountText: 'Up to 75% OFF',
    isVerified: true,
    usedCount: '987 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-5',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Enjoy up to 75% OFF + 20% Cashback on Furniture & Decor',
    description: 'Shop across furniture & home décor and enjoy up to 75% OFF plus an extra 20% cashback.',
    couponCode: '',
    discountText: 'Up to 75% OFF',
    isVerified: true,
    usedCount: '2.1k used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-6',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 75% off on Brayan 250ml White Set of 2 Ceramic Coffee Mugs',
    description: 'Shop the Brayan 250ml white ceramic coffee mug set of 2 at up to 75% OFF.',
    couponCode: '',
    discountText: 'Up to 75% OFF',
    isVerified: true,
    usedCount: '543 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-7',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 36% off on Suki Bedside Table in Wenge Finish',
    description: 'Shop the Suki Bedside Table in Wenge finish at up to 36% OFF.',
    couponCode: '',
    discountText: 'Up to 36% OFF',
    isVerified: true,
    usedCount: '432 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-8',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get Smart ABS Plastic Vegetable Peeler with Stainless Steel Blade @ Rs.1',
    description: 'Add a smart ABS plastic vegetable peeler with a stainless steel blade to your cart for just ₹1.',
    couponCode: '',
    discountText: '@ ₹1',
    isVerified: true,
    usedCount: '765 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-9',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get Grey Abstract Rubber 24x16 Inches AntiSkid Bath Mat @ Rs.1',
    description: 'Add a grey abstract rubber 24x16 inch anti-skid bath mat to your cart for just ₹1.',
    couponCode: '',
    discountText: '@ ₹1',
    isVerified: true,
    usedCount: '321 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  },
  {
    id: 'deal-10',
    brandName: 'Pepperfry',
    brandLogo: 'PP',
    brandColor: '#5B4FBE',
    brandBg: '#F0EEFF',
    category: 'Home & Kitchen',
    dealType: 'trending',
    badgeText: 'TRENDING',
    title: 'Get 46% off on Mana Coffee Table in Wenge Finish',
    description: 'Shop the Mana Coffee Table in Wenge finish at up to 46% OFF.',
    couponCode: '',
    discountText: 'Up to 46% OFF',
    isVerified: true,
    usedCount: '678 used today',
    validTill: '30 Jun 2026',
    isExpiringSoon: false
  }
];

// ============================================================================
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

// ============================================================================
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
export default function DealsOfTheDay() {
  const [activeCategory, setActiveCategory] = useState<string>('All Deals');
  const [activeDealType, setActiveDealType] = useState<string>('all');
  const sortBy = 'Recommended';
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [wishlistedDeals, setWishlistedDeals] = useState<Record<string, boolean>>({});

  const isFirstMount = useRef<boolean>(true);
  const listHeaderRef = useRef<HTMLDivElement>(null);

  const [countdownSeconds, setCountdownSeconds] = useState<number>(20601);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) return 86399;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedCountdown = useMemo(() => {
    const h = Math.floor(countdownSeconds / 3600);
    const m = Math.floor((countdownSeconds % 3600) / 60);
    const s = countdownSeconds % 60;
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  }, [countdownSeconds]);

  const processedDeals = useMemo(() => {
    let result = [...DEALS_DATA];

    if (activeCategory !== 'All Deals') {
      const query = activeCategory.toLowerCase();
      result = result.filter((deal) => {
        const cat = deal.category.toLowerCase();
        if (query === 'beauty' && cat === 'beauty') return true;
        if (query === 'food & grocery' && cat === 'food & grocery') return true;
        return cat === query;
      });
    }

    if (activeDealType !== 'all') {
      result = result.filter((deal) => deal.dealType === activeDealType);
    }

    if (sortBy === 'Recommended') {
      const priorities: Record<string, number> = { trending: 3, exclusive: 2, 'ending-soon': 1, regular: 0 };
      result.sort((a, b) => (priorities[b.dealType] || 0) - (priorities[a.dealType] || 0));
    } else if (sortBy === 'Newest First') {
      result.sort((a, b) => parseInt(b.id.replace('deal-', ''), 10) - parseInt(a.id.replace('deal-', ''), 10));
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

  const handleToggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setWishlistedDeals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleViewDeal = (brand: string, title: string) => {
    alert(`Deal claimed. Heading to ${brand} now.`);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* SECTION 1 - HERO BANNER */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] py-10 px-6 min-h-[280px] overflow-hidden flex items-center">
        <div className="absolute top-1/2 left-[-20px] -translate-y-1/2 w-72 h-72 rounded-full bg-[#F0EEFF]/55 pointer-events-none select-none" />
        <div className="absolute top-[-40px] right-[10%] w-56 h-56 rounded-full bg-[#FFF3F0]/60 pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 text-left">
          <div className="md:col-span-7 flex flex-col items-start pr-0 md:pr-4">
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold">Deals of the Day</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mt-3 select-none leading-none">
              Deals of the Day
            </h1>

            <p className="text-[#4A4A6A] text-base md:text-lg mt-3 max-w-md leading-relaxed select-none">
              The best verified deals running today. Every code tested. Updated daily.
            </p>

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
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">92.4%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Success Rate</div>
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

          <div className="hidden md:col-span-5 md:flex items-center justify-center relative select-none">
            <img
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783244518/deals-of-the-day_sj9x4u.png"
              alt="Deals of the Day"
              className="w-full max-w-xl h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>


      {/* SECTION 4 - MAIN 2-COLUMN LAYOUT */}
      <section className="bg-[#F8F8FF] py-10 flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-7 items-start relative">

          {/* LEFT - DEALS LIST */}
          <div className="flex-1 w-full text-left" ref={listHeaderRef}>
            <div className="mb-6">
              <h2 className="font-extrabold text-2xl text-[#1A1A2E] leading-none select-none">
                {activeDealType === 'all' && 'Latest Deals'}
                {activeDealType === 'trending' && 'Trending Deals'}
                {activeDealType === 'ending-soon' && 'Ending Soon'}
                {activeDealType === 'exclusive' && 'Exclusive Deals'}
              </h2>
              <p className="text-xs text-[#4A4A6A] font-semibold mt-1.5 uppercase tracking-wide">
                Found {processedDeals.length} deals{activeCategory !== 'All Deals' ? ` in "${activeCategory}"` : ''}
              </p>
            </div>

            {processedDeals.length > 0 ? (
              <div className="space-y-4">
                {processedDeals.slice(0, visibleCount).map((deal) => {
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
                      <div className="flex-shrink-0 text-center w-24 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-[#E8E8F0] bg-white shadow-xs group-hover:scale-105 transition-all duration-300 overflow-hidden pointer-events-none select-none">
                          <img
                            src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg"
                            alt={deal.brandName}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-xs font-extrabold text-[#1A1A2E] mt-2 block w-full text-center line-clamp-1">{deal.brandName}</span>
                        <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mt-1 scale-90 select-none">{deal.category}</span>
                      </div>

                      <div className="flex-1 text-left w-full">
                        <div className="flex items-center gap-2 mb-2 select-none">
                          <span className={`inline-block text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider ${dealBadgeStyle}`}>{deal.badgeText}</span>
                        </div>
                        <h3 className="font-extrabold text-[#1A1A2E] text-base md:text-lg leading-tight group-hover:text-[#5B4FBE] transition-colors line-clamp-1">{deal.title}</h3>
                        <p className="text-[#4A4A6A] text-sm mt-1.5 leading-relaxed font-semibold line-clamp-1">{deal.description}</p>
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

                      <div className="flex-shrink-0 flex flex-col items-center sm:items-end justify-between sm:justify-start gap-3 w-full sm:w-auto min-w-[160px] pt-4 sm:pt-0 border-t sm:border-t-0 border-[#E8E8F0]">
                        <div className="sm:text-right text-center select-none w-full">
                          <span className="block font-black text-xl text-[#FF5722]">{deal.discountText}</span>
                          <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1.5">Valid Till</span>
                          <span className={`block font-extrabold text-sm mt-0.5 ${deal.isExpiringSoon ? 'text-[#EF4444]' : 'text-[#4A4A6A]'}`}>{deal.validTill}</span>
                          {deal.isExpiringSoon && <span className="block text-[10px] text-[#EF4444] font-black tracking-wide uppercase mt-1 animate-pulse">Expiring Soon</span>}
                        </div>
                        <div className="mt-2 flex items-center gap-2 w-full justify-center sm:justify-end">
                          <button
                            onClick={(e) => handleToggleWishlist(deal.id, e)}
                            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isWishlisted ? 'bg-[#FEF2F2] text-[#EF4444] border-[#EF4444] scale-105' : 'bg-white border-[#E8E8F0] text-gray-400 hover:border-[#EF4444] hover:text-[#EF4444]'}`}
                          >
                            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleViewDeal(deal.brandName, deal.title); }}
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
              <div className="text-center py-16 bg-white border border-dashed border-[#E8E8F0] rounded-3xl max-w-sm mx-auto">
                <h3 className="font-extrabold text-[#1A1A2E]">No Deals Found</h3>
                <p className="text-xs text-[#4A4A6A] mt-1.5 px-4 leading-relaxed font-semibold">
                  No deals under &quot;{activeCategory}&quot; with these filters. Reset to see all.
                </p>
                <button onClick={() => { setActiveCategory('All Deals'); setActiveDealType('all'); }} className="mt-4 bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition cursor-pointer">
                  Show All Deals
                </button>
              </div>
            )}

            <div className="mt-8 text-center select-none">
              {processedDeals.length > visibleCount ? (
                <button onClick={() => setVisibleCount((prev) => prev + 6)} className="border border-[#5B4FBE] text-[#5B4FBE] px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#5B4FBE] hover:text-white transition w-fit mx-auto flex items-center gap-2 active:scale-95 cursor-pointer bg-white shadow-xs">
                  <ChevronDown size={16} className="stroke-[2.5]" />
                  <span>View More Deals</span>
                </button>
              ) : (
                <button disabled className="border border-gray-200 text-gray-400 bg-gray-50/80 px-10 py-3 rounded-full font-bold text-sm w-fit mx-auto flex items-center gap-2">
                  <span>All Deals Loaded</span>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT - STICKY SIDEBAR */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start text-left z-20">

            {/* SIDEBAR CARD 1 - Countdown */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl overflow-hidden shadow-lg border border-indigo-400/10">
              <div className="p-4 flex items-center justify-between border-b border-white/10 select-none">
                <span className="text-white font-extrabold text-sm tracking-wide">Deals of the Day</span>
                <div className="flex items-center">
                  <span className="text-white/70 text-[10px] mr-1.5 font-bold uppercase tracking-wider">Ends in</span>
                  <div className="bg-[#FF5722] text-white font-mono font-black text-xs px-2.5 py-1 rounded-md tracking-wider shadow-sm animate-pulse">{formattedCountdown}</div>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] flex items-center justify-center select-none shrink-0 border border-[#FF9900]/15">
                    <span className="text-[#FF9900] font-black text-base uppercase">a</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-sm text-[#1A1A2E] leading-none">Amazon</h4>
                    <span className="text-[#4A4A6A] text-[11px] font-semibold mt-1 block truncate">Up to 70% OFF on Electronics</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 w-full justify-between items-center select-none">
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">&#127911;</div>
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">&#128241;</div>
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] w-16 h-14 rounded-xl flex items-center justify-center text-2xl shadow-xs hover:scale-105 duration-200">&#8987;</div>
                </div>
                <button onClick={() => handleViewDeal('Amazon', 'Amazon Great Summer Sale - Up to 70% OFF on Electronics')} className="mt-4 w-full bg-[#FF5722] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 select-none">
                  <Zap size={16} className="stroke-[2.5]" />
                  <span>Grab This Deal</span>
                </button>
              </div>
            </div>

            {/* SIDEBAR CARD 2 - Top Deal Categories */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">Top Deal Categories</h3>
              <div className="space-y-1">
                {SIDEBAR_CATEGORIES.map((cat, idx) => {
                  const CatIcon = cat.icon;
                  return (
                    <div key={idx} onClick={() => setActiveCategory(cat.name === 'Fashion & Lifestyle' ? 'Fashion' : cat.name === 'Health & Beauty' ? 'Beauty' : cat.name)} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                      <CatIcon size={16} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                      <span className="text-sm text-[#4A4A6A] group-hover:text-[#5B4FBE] group-hover:font-semibold flex-1 truncate">{cat.name}</span>
                      <span className="text-xs text-gray-400 ml-auto select-none font-semibold">{cat.count}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E8E8F0] text-center select-none">
                <Link href="/categories" className="text-xs text-[#5B4FBE] font-semibold inline-flex items-center gap-1 hover:underline">
                  <span>View All Categories</span>
                  <ArrowRight size={13} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* SIDEBAR CARD 3 - Why Shop Our Deals */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none font-sans uppercase tracking-wider text-gray-400">Why Shop Our Deals?</h3>
              <div className="space-y-4 text-left">
                {[
                  { icon: ShieldCheck, bg: '#F0EEFF', color: '#5B4FBE', title: 'Handpicked & Verified Deals', sub: 'Tested before they go live. Dead codes pulled the moment they stop working.' },
                  { icon: TrendingUp, bg: '#FFF3F0', color: '#FF5722', title: 'Huge Savings', sub: '92.4% of our codes work at checkout. That&apos;s the whole job.' },
                  { icon: RefreshCw, bg: '#F0FDF4', color: '#22C55E', title: 'Updated Daily', sub: 'Fresh set every morning. Expired deals off the page before you arrive.' },
                  { icon: Lock, bg: '#FFFBEB', color: '#F59E0B', title: 'Safe & Secure', sub: '100% safe shopping experience' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs z-10 select-none" style={{ backgroundColor: item.bg }}>
                        <Icon size={18} className="stroke-[2.5]" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-xs text-[#1A1A2E] leading-tight">{item.title}</h4>
                        <p className="text-[10px] text-[#4A4A6A] mt-0.5 font-semibold">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* SECTION 6 - TRUST BADGES */}
      <section className="bg-white border-t border-[#E8E8F0] py-10 w-full select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {[
              { icon: ShieldCheck, bg: '#F0EEFF', color: '#5B4FBE', title: '100% Verified Deals', sub: 'Tested before they go live' },
              { icon: Tag, bg: '#FFF3F0', color: '#FF5722', title: 'Best Discounts', sub: '92.4% of our codes work at checkout' },
              { icon: Star, bg: '#FFFBEB', color: '#F59E0B', title: 'Exclusive Offers', sub: 'Only for our users' },
              { icon: Lock, bg: '#F0FDF4', color: '#22C55E', title: 'Safe & Secure', sub: 'Your data is protected' }
            ].map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs" style={{ backgroundColor: badge.bg }}>
                    <Icon size={26} className="stroke-[2]" style={{ color: badge.color }} />
                  </div>
                  <h4 className="font-extrabold text-sm text-[#1A1A2E] mt-4 tracking-tight">{badge.title}</h4>
                  <p className="text-xs text-[#4A4A6A] mt-1 font-semibold">{badge.sub}</p>
                </div>
              );
            })}
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Introduction</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              What Are Deals of the Day?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Every morning, the internet floods with hundreds of deals and discounts — some real, most not worth your time. Couponscrew&apos;s Deals of the Day page cuts through all of that noise and gives you only what actually works, right now, today.
              </p>
              <p>
                These are not leftover deals from last week. Every single offer on this page is hand-picked and live as of today. Our team goes through active promotions across the top shopping platforms every day and picks the ones that offer genuine value — whether that&apos;s a flat discount, a limited-time cashback, a buy-one-get-one, or a category-wide sale you&apos;d miss otherwise.
              </p>
              <p>
                Think of this page as your daily savings briefing. Open it in the morning, scan what&apos;s live, grab what you need, and go. No newsletter to subscribe to. No app to download. Just today&apos;s best deals, verified and ready to use.
              </p>
              <p>
                We update this page every 24 hours. So if you came here yesterday and saved on something, come back today — there&apos;s a fresh set waiting for you.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Verification Process</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How Couponscrew Verifies Every Deal
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Anyone can list a coupon code. Very few actually test whether it works.
              </p>
              <p>
                At Couponscrew, every deal that appears on this page goes through a verification check before it goes live. Our team manually tests codes, confirms discount values, checks expiry dates, and flags any deal that throws an error at checkout. If a code doesn&apos;t work, it doesn&apos;t make the list — simple as that.
              </p>
              <p>
                You&apos;ll notice a Verified badge on deals that have been tested within the last 24 hours. That badge is not decorative. It means someone on our team actually applied that code, saw the discount reflect, and confirmed it&apos;s working.
              </p>
              <p>
                We also track expiry times closely. Deals that are about to expire get marked as &quot;Ending Soon&quot; so you know to act fast. And when a deal expires, it comes off the page immediately — we don&apos;t let dead codes sit around and waste your time.
              </p>
              <p>
                This is the standard we hold ourselves to at Couponscrew, because we know how frustrating it is to copy a code, go through an entire checkout, and then see &quot;Invalid coupon code&quot; at the last step. That doesn&apos;t happen here.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Live Categories</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Categories You Can Save On Today
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Couponscrew&apos;s Deals of the Day covers every major shopping category. Here&apos;s what&apos;s live today:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  color: "#FF3F6C",
                  title: "Fashion & Clothing",
                  body: "From Myntra's daily style drops to AJIO's brand sales and Nykaa Fashion's exclusive offers — if you're shopping for clothes, footwear, or accessories today, there are active deals worth using. Fashion is one of our highest-updated categories, with new offers dropping multiple times a day."
                },
                {
                  icon: <Smartphone className="w-4 h-4 text-[#FF9900]" />,
                  color: "#FF9900",
                  title: "Electronics & Gadgets",
                  body: "Amazon, Flipkart, Croma, and Vijay Sales run some of the most aggressive daily deals in electronics. Whether you're after a new phone, earbuds, laptop, or home appliance — check this category before you pay full price. Flash sales here can last as little as a few hours."
                },
                {
                  icon: <Utensils className="w-4 h-4 text-[#FC8019]" />,
                  color: "#FC8019",
                  title: "Food & Grocery",
                  body: "Zomato, Swiggy, BigBasket, Blinkit, and Zepto all run daily promo codes that most people never find out about. We track them so you don't have to. Order your next meal or restock your kitchen — and pay less for it."
                },
                {
                  icon: <Plane className="w-4 h-4 text-[#2874F0]" />,
                  color: "#2874F0",
                  title: "Travel & Bookings",
                  body: "MakeMyTrip, Goibibo, EaseMyTrip, and IRCTC deals go fast. Whether it's a flight discount, hotel cashback, or a bus booking offer — travel deals on this page are time-sensitive. Check them early."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FC2779]" />,
                  color: "#FC2779",
                  title: "Beauty & Personal Care",
                  body: "Nykaa, Purplle, and Mamaearth run regular flat-off and combo deals. This category is especially active during weekends and around festive seasons."
                },
                {
                  icon: <Home className="w-4 h-4 text-[#8B5CF6]" />,
                  color: "#8B5CF6",
                  title: "Home & Kitchen",
                  body: "IKEA, Pepperfry, HomeTown, and Urban Ladder deals appear here regularly. Great for anyone furnishing a home or upgrading daily-use appliances."
                }
              ].map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-50 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">User Guide</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use a Deal on Couponscrew
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Using a deal from this page takes less than a minute. Here&apos;s exactly how it works:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your deal", desc: "Browse the deals grid above, filter by category if needed, and click on an offer that interests you." },
                  { step: "2", title: "Reveal the code", desc: "Click the \"Get Deal\" or \"Show Code\" button. The coupon code will appear on your screen and the brand's website will open in a new tab." },
                  { step: "3", title: "Shop and add to cart", desc: "Browse the brand's site, add the products you want to your cart, and head to checkout." },
                  { step: "4", title: "Apply the code", desc: "Paste the coupon code into the promo code or discount code box at checkout. The discount will reflect immediately." },
                  { step: "5", title: "Complete your order", desc: "Confirm the final price, apply any additional bank card offers if available, and place your order." }
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
              <p className="text-sm text-[#4A4A6A] pt-4">
                That&apos;s it. If a code doesn&apos;t apply, double-check that your cart meets the minimum order value or category requirement shown on the deal card. Still not working? The deal may have just expired — refresh the page and check for an updated code.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Strategy</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips to Maximise Your Savings Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Getting the discount is step one. Saving the most money takes a little more strategy. Here&apos;s what works:
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check &quot;Ending Soon&quot; deals first.</strong> These are offers expiring within hours. If something in there matches what you need, grab it before it&apos;s gone — you won&apos;t get that price back tomorrow.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack your savings.</strong> A coupon code from Couponscrew plus a bank card cashback offer (HDFC, ICICI, SBI, and Axis run these constantly) can double your savings on a single order. Always check if your card has an active offer with the retailer before checkout.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-only deals are real.</strong> Zomato, Swiggy, Myntra, and Amazon all have app-exclusive offers that don&apos;t show up on desktop. If a deal says &quot;app only,&quot; switch to the mobile app before applying the code.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Sale days are high-value days.</strong> Big Billion Days, End of Reason Sale, Great Indian Festival — during these windows, deals on this page can hit 50–80% off. These are the best offers online shopping has to offer. Bookmark Couponscrew and check back on sale days specifically.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Don&apos;t buy just because there&apos;s a discount.</strong> The best saving is the one on something you were already going to buy. Use this page to reduce the cost of planned purchases, not to create new ones.</p>
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
                { q: "How often are deals updated on this page?", a: "Every 24 hours. New deals go up in the morning and the full list is refreshed daily. Every discount offer in the food and electronics category gets updated more than once a day when new codes drop." },
                { q: "Are all the deals on this page verified?", a: "Every deal with a Verified badge has been manually tested before listing. We apply the code, confirm the discount, and check the expiry. If it doesn&apos;t work, it doesn&apos;t go live." },
                { q: "Why did my deal stop working mid-checkout?", a: "These deals are time-sensitive. A code can expire while you&apos;re mid-session if the brand exhausts its quota or the window closes. Refresh the page and check for an updated code on the same brand." },
                { q: "Can I use more than one deal at the same time?", a: "Most brands allow one coupon code per order. But you can usually stack that with a bank card cashback offer or a wallet discount. Check the deal terms before checkout." },
                { q: "Which categories have the most deals today?", a: "Fashion, Electronics, and Food &amp; Grocery consistently run the most active deals. Travel deals are fewer but tend to be higher in value." },
                { q: "Is Couponscrew free to use?", a: "Completely free. We earn a small affiliate commission from brands when you buy through our links — at zero extra cost to you. That&apos;s how we keep this running." },
                { q: "Do deals work on both app and website?", a: "Most do. Some are app-only. The deal card says so clearly — read the terms before heading to checkout." }
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
              Start Saving Smarter — Every Single Day
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                The best time to save money is before you spend it. Couponscrew&apos;s Deals of the Day page exists for exactly that reason — so you never have to pay full price for something when a verified discount is sitting right here.
              </p>
              <p>
                Bookmark this page. Make it the first tab you open before any online purchase. Whether you&apos;re ordering dinner, buying a new phone, booking a flight, or restocking your wardrobe — there&apos;s a good chance today&apos;s deals and discounts have something that puts money back in your pocket.
              </p>
              <p className="text-white font-semibold">
                Come back tomorrow. The deals will be new. The savings will be real.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Quick Summary Sticky */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              Pro Tip - Stack Daily Savings
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">Couponscrew code + bank card offer + app-only deal. Stack all three when the opportunity is there.</p>
            <div className="space-y-2">
              {[
                { layer: "Couponscrew Code", val: "Verified Live", color: "#5B4FBE" },
                { layer: "Bank Card Offer", val: "HDFC, ICICI, SBI", color: "#5B4FBE" },
                { layer: "Platform Rules", val: "Check App-Only", color: "#5B4FBE" },
                { layer: "Refresh Cadence", val: "Every 24 Hours", color: "#5B4FBE" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Hand-Picked Daily briefing</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Verification Quick Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#22C55E]" />
              Verification Signals
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Verified Badge
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Tested within the last 24 hours. Applied, checked, and confirmed working by our operational team.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF9900]" />
                  Ending Soon
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Expiring within hours. If you need it, grab it now — these don&apos;t come back.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Quick Navigation Guide */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Quick Routine</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Open, Scan, Grab & Go</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Open the page. Scan what&apos;s live. Grab what you need. That&apos;s the whole routine.
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
