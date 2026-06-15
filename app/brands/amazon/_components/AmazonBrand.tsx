'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Gift,
  CreditCard,
  RefreshCw,
  Truck,
  Headphones,
  Tag,
  ShieldCheck,
  Percent,
  IndianRupee,
  Heart,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Mail,
  CheckCircle,
  Smartphone,
  Home,
  BookOpen,
  Monitor,
  Send,
  ArrowRight,
  Lock,
  Copy,
  Users
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface BrandCoupon {
  id: string;
  discountDisplay: string; // e.g. "UPTO\n60%\nOFF"
  discountBg: string; // hex color
  badgeText: string;
  badgeColor: string; // hex color
  title: string;
  description: string;
  couponCode: string;
  isVerified: boolean;
  userType: string; // e.g. "All Users" or "New Users Only"
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StoreOverviewItem {
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  label: string;
  value: string;
}

// ============================================================================
// HARDCODED DEALS DATA (10 COUPONS)
// ============================================================================
const AMAZON_COUPONS: BrandCoupon[] = [
  {
    id: 'amz-1',
    discountDisplay: "UPTO\n60%\nOFF",
    discountBg: "#5B4FBE",
    badgeText: "BEST OFFER",
    badgeColor: "#22C55E",
    title: "Upto 60% OFF on Electronics",
    description: "Get up to 60% discount on top branded electronics and appliances.",
    couponCode: "AMZ60",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-2',
    discountDisplay: "FLAT\nâ‚¹500\nOFF",
    discountBg: "#FF5722",
    badgeText: "POPULAR",
    badgeColor: "#F59E0B",
    title: "Flat â‚¹500 OFF on Your First Order",
    description: "Get flat â‚¹500 OFF on minimum order of â‚¹1,999 for new users.",
    couponCode: "AMZNEW",
    isVerified: true,
    userType: "New Users Only"
  },
  {
    id: 'amz-3',
    discountDisplay: "UPTO\n40%\nOFF",
    discountBg: "#5B4FBE",
    badgeText: "GREAT DEAL",
    badgeColor: "#5B4FBE",
    title: "Upto 40% OFF on Fashion & Beauty",
    description: "Shop for fashion, beauty & personal care products at up to 40% OFF.",
    couponCode: "AMZFASH",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-4',
    discountDisplay: "10%\nOFF",
    discountBg: "#1A1A2E",
    badgeText: "SITEWIDE",
    badgeColor: "#4A4A6A",
    title: "Extra 10% OFF on ICICI Bank Cards",
    description: "Get extra 10% instant discount on ICICI Bank Credit & Debit Cards.",
    couponCode: "ICICIA10",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-5',
    discountDisplay: "FREE\nDELIVERY",
    discountBg: "#22C55E",
    badgeText: "SPECIAL",
    badgeColor: "#22C55E",
    title: "FREE Delivery on First Order",
    description: "Get FREE delivery on your first order. No minimum order value.",
    couponCode: "FREEDEL",
    isVerified: true,
    userType: "New Users Only"
  },
  {
    id: 'amz-6',
    discountDisplay: "UPTO\n70%\nOFF",
    discountBg: "#FF5722",
    badgeText: "FLASH SALE",
    badgeColor: "#EF4444",
    title: "Upto 70% OFF on Home & Kitchen",
    description: "Great deals on kitchen appliances, home decor, furniture and more during flash sale.",
    couponCode: "AMZKITCHEN",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-7',
    discountDisplay: "UPTO\n50%\nOFF",
    discountBg: "#5B4FBE",
    badgeText: "EXCLUSIVE",
    badgeColor: "#5B4FBE",
    title: "Upto 50% OFF on Books & Education",
    description: "Discounts on textbooks, novels, educational material and Kindle books.",
    couponCode: "AMZBOOKS",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-8',
    discountDisplay: "â‚¹200\nOFF",
    discountBg: "#FF9900",
    badgeText: "COUPON",
    badgeColor: "#FF9900",
    title: "â‚¹200 OFF on Grocery Orders",
    description: "Get â‚¹200 instant discount on grocery orders above â‚¹1,000 on Amazon Fresh.",
    couponCode: "AMZFRESH",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-9',
    discountDisplay: "UPTO\n80%\nOFF",
    discountBg: "#EF4444",
    badgeText: "MEGA SALE",
    badgeColor: "#EF4444",
    title: "Upto 80% OFF on Mobiles & Tablets",
    description: "Grab the best deals on smartphones, tablets and mobile accessories during mega sale.",
    couponCode: "AMZMOBILE",
    isVerified: true,
    userType: "All Users"
  },
  {
    id: 'amz-10',
    discountDisplay: "15%\nOFF",
    discountBg: "#8B5CF6",
    badgeText: "BANK OFFER",
    badgeColor: "#8B5CF6",
    title: "15% OFF with SBI Credit Cards",
    description: "Extra 15% discount on purchases made with SBI Credit and Debit Cards. Max discount â‚¹1,500.",
    couponCode: "SBIAMZ15",
    isVerified: true,
    userType: "All Users"
  }
];

// ============================================================================
// HARDCODED FAQ DATA (6 QUESTIONS)
// ============================================================================
const AMAZON_FAQS: FAQItem[] = [
  {
    question: "How do I use Amazon coupon codes?",
    answer: "Copy the coupon code from SaveMate, visit Amazon, add items to cart, go to checkout and paste the code in the 'Enter coupon code' field to get the discount."
  },
  {
    question: "Where can I find the best Amazon offers?",
    answer: "You can find all the latest and verified Amazon offers right here on SaveMate. We update deals daily and verify each coupon before listing."
  },
  {
    question: "Can I use multiple coupon codes on Amazon?",
    answer: "Amazon typically allows only one coupon code per order. However, you can combine a coupon with a bank offer or cashback offer at checkout."
  },
  {
    question: "Does Amazon offer free delivery?",
    answer: "Yes! Amazon Prime members get free delivery on eligible orders. Non-Prime members get free delivery on orders above â‚¹499 for most products."
  },
  {
    question: "Why is my Amazon coupon code not working?",
    answer: "The code may have expired, have minimum order requirements, or be limited to specific categories. Check the coupon terms or contact SaveMate support."
  },
  {
    question: "How often are Amazon coupons updated?",
    answer: "Our team updates Amazon coupons every day. We verify each code before publishing and remove expired codes within minutes of them expiring."
  }
];

// ============================================================================
// MAIN COMPONENT DEFINITION
// ============================================================================
export default function AmazonBrand() {
  // Page states
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [showAllCoupons, setShowAllCoupons] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("Latest");
  const [expandedCoupons, setExpandedCoupons] = useState<Record<string, boolean>>({});
  const [copiedCouponId, setCopiedCouponId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [shareTooltip, setShareTooltip] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');

  // Handle Copy Coupon Code
  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCouponId(id);
      setTimeout(() => setCopiedCouponId(null), 2000);
    });
  };

  // Handle Share copy link tooltip
  const handleShare = (platform: string) => {
    navigator.clipboard.writeText("https://savemate.com/brands/amazon").then(() => {
      setShareTooltip(platform);
      setTimeout(() => setShareTooltip(null), 2000);
    });
  };

  // Handle expand terms details
  const toggleCouponDetails = (id: string) => {
    setExpandedCoupons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper inside discount displaying
  const renderDiscountSegment = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="flex flex-col items-center justify-center text-center">
        {lines.map((line, index) => {
          const isBig = line.includes('%') || line.includes('â‚¹') || line.includes('FREE');
          if (isBig) {
            return (
              <span key={index} className="text-2xl sm:text-3xl font-black text-white block my-0.5">
                {line}
              </span>
            );
          }
          return (
            <span key={index} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/90 block">
              {line}
            </span>
          );
        })}
      </div>
    );
  };

  // FAQ interactive action
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  // Newsletter action
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`ðŸŽ‰ Wonderful! You have subscribed to Amazon coupon list with: ${newsletterEmail}. We'll keep you updated with the biggest price drops!`);
      setNewsletterEmail('');
    }
  };

  // Sort calculations logic based on Sort States
  const sortedCoupons = useMemo(() => {
    let result = [...AMAZON_COUPONS];
    if (sortBy === "Most Popular") {
      // Custom placement focusing on "POPULAR" and sitewide tags
      result.sort((a, b) => {
        const priorityA = a.badgeText === "POPULAR" ? 2 : a.badgeText === "BEST OFFER" ? 1 : 0;
        const priorityB = b.badgeText === "POPULAR" ? 2 : b.badgeText === "BEST OFFER" ? 1 : 0;
        return priorityB - priorityA;
      });
    } else if (sortBy === "Highest Discount") {
      // Parse out approximate weights
      const getDiscVal = (coupon: BrandCoupon) => {
        if (coupon.discountDisplay.includes('60%')) return 60;
        if (coupon.discountDisplay.includes('500')) return 50;
        if (coupon.discountDisplay.includes('40%')) return 40;
        if (coupon.discountDisplay.includes('10%')) return 10;
        if (coupon.discountDisplay.includes('70%')) return 70;
        if (coupon.discountDisplay.includes('50%')) return 50;
        if (coupon.discountDisplay.includes('200')) return 20;
        if (coupon.discountDisplay.includes('80%')) return 80;
        if (coupon.discountDisplay.includes('15%')) return 15;
        if (coupon.discountDisplay.includes('FREE')) return 5;
        return 0;
      };
      result.sort((a, b) => getDiscVal(b) - getDiscVal(a));
    }
    // "Latest" keeps the default hardcoded static sequence
    return result;
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ============================================================================
          SECTION 1 â€” BRAND HERO (White Background, min-h-[300px])
          ============================================================================ */}
      <section className="relative w-full bg-white border-b border-[#E8E8F0] min-h-[300px] py-10 px-6 overflow-hidden flex items-center">
        
        {/* Subtle decorative circles to capture look, matching visual specs */}
        <div className="absolute top-1/2 left-[-30px] -translate-y-1/2 w-80 h-80 rounded-full bg-[#F0EEFF]/50 pointer-events-none select-none" />
        <div className="absolute top-[-30px] right-[15%] w-60 h-60 rounded-full bg-[#FFF3F0]/50 pointer-events-none select-none" />

        {/* Small sparkling vector-like diamonds */}
        <span className="absolute top-10 left-[15%] text-[#5B4FBE]/20 text-xl font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-10 left-[38%] text-[#FF5722]/15 text-sm font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute top-6 right-[40%] text-[#22C55E]/15 text-lg font-bold select-none pointer-events-none">â—†</span>
        <span className="absolute bottom-16 right-[10%] text-[#FFD700]/30 text-2xl font-bold select-none pointer-events-none">â—†</span>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 text-left">
          
          {/* LEFT SIDE â€” Brand Details Area (60% weight) */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Breadcrumb Row */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A] select-none">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <Link href="/brands" className="hover:text-[#5B4FBE] transition-colors font-medium">Brands</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold font-mono">Amazon</span>
            </div>

            {/* Brand Info Card Group */}
            <div className="mt-5 flex flex-col sm:flex-row items-start gap-6 w-full">
              {/* Brand Logo Box */}
              <div className="flex-shrink-0 bg-white border-2 border-[#E8E8F0] rounded-2xl w-32 h-24 flex items-center justify-center shadow-xs">
                <span className="text-[#FF9900] font-black text-2xl tracking-tighter">amazon</span>
              </div>

              {/* Brand Details Text */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3">
                  <h1 className="font-bold text-3xl text-[#1A1A2E] leading-none mb-0 select-none">
                    Amazon
                  </h1>
                  <div className="bg-[#FF9900] text-white font-bold text-sm px-3 py-1 rounded-full flex items-center gap-1 shrink-0 select-none">
                    <Star size={14} className="fill-white stroke-none" />
                    <span>4.5</span>
                  </div>
                </div>

                <div className="mt-1 font-semibold text-lg text-[#4A4A6A] select-none">
                  Shop Everything. Save More.
                </div>

                <p className="mt-2 text-sm text-[#4A4A6A] leading-relaxed max-w-lg select-none">
                  Amazon India is your one-stop destination for online shopping. Get the best deals on electronics, fashion, home, kitchen &amp; more.
                </p>

                {/* 3 Quick Stats Under Logo Cards */}
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 select-none">
                  <div className="flex items-center gap-2">
                    <Tag className="text-[#5B4FBE]" size={16} />
                    <span className="text-sm font-semibold text-[#1A1A2E]">120+ Offers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Percent className="text-[#FF5722]" size={16} />
                    <span className="text-sm font-semibold text-[#1A1A2E]">Upto 60% OFF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-[#22C55E]" size={16} />
                    <span className="text-sm font-semibold text-[#1A1A2E]">Verified Today</span>
                  </div>
                </div>

                {/* Buttons Action Group Row */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FF5722] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition duration-250 shadow-md active:scale-95"
                  >
                    <ExternalLink size={16} />
                    <span>Visit Amazon</span>
                  </a>

                  <button
                    onClick={() => setIsFavorited(prev => !prev)}
                    className={`border-2 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition duration-250 active:scale-95 cursor-pointer ${
                      isFavorited
                        ? 'border-[#EF4444] text-[#EF4444] bg-[#FEF2F2]'
                        : 'border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] bg-white'
                    }`}
                  >
                    <Heart size={16} className={isFavorited ? 'fill-current text-[#EF4444]' : ''} />
                    <span>{isFavorited ? 'Added to Favorites' : 'Add to Favorites'}</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE â€” Pure CSS Shopping Cart themed illustration (40% weight) */}
          <div className="hidden md:col-span-5 md:flex items-center justify-center relative select-none">
            <div className="relative w-80 h-80 flex items-center justify-center overflow-visible">
              
              {/* Pulse ambient backplate circle in matching purple tone */}
              <div className="absolute w-64 h-64 rounded-full bg-[#F0EEFF]/60 animate-pulse pointer-events-none" />

              {/* Large shopping cart shape (CSS outline) */}
              <div className="border-4 border-[#5B4FBE] w-52 h-44 rounded-b-3xl rounded-t-none relative mx-auto mt-8 flex items-end justify-center z-10 bg-white/45">
                
                {/* Cart handle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-[#5B4FBE] w-28 h-8 rounded-t-3xl" />

                {/* Product Box 1 (Orange) */}
                <div className="bg-[#FF9900] w-14 h-12 rounded-lg absolute bottom-4 left-3 flex items-center justify-center shadow-md border border-amber-400/20">
                  <span className="text-xl">ðŸ“¦</span>
                </div>

                {/* Product Box 2 (Purple) */}
                <div className="bg-[#5B4FBE] w-12 h-10 rounded-lg absolute bottom-4 left-20 flex items-center justify-center shadow-md border border-indigo-400/20">
                  <span className="text-lg">ðŸŽ§</span>
                </div>

                {/* Product Box 3 (Orange Red) */}
                <div className="bg-[#FF5722] w-10 h-8 rounded-lg absolute bottom-4 right-4 flex items-center justify-center shadow-md border border-orange-400/20">
                  <span className="text-sm">ðŸ“±</span>
                </div>

                {/* Cart wheels */}
                <div className="w-8 h-8 rounded-full bg-[#1A1A2E] border-4 border-white absolute -bottom-4 left-6 shadow-md" />
                <div className="w-8 h-8 rounded-full bg-[#1A1A2E] border-4 border-white absolute -bottom-4 right-6 shadow-md" />

              </div>

              {/* % discount tag floating top-right */}
              <div className="bg-[#FF5722] rounded-full w-16 h-16 absolute -top-1 -right-1 flex items-center justify-center text-white font-black text-2xl shadow-xl border-2 border-white animate-bounce">
                %
              </div>

              {/* Small product floating emoji cards */}
              <div className="bg-white rounded-xl p-2.5 shadow-lg absolute -left-6 top-10 flex items-center justify-center border border-[#E8E8F0] transform rotate-[-6deg] hover:rotate-0 duration-300">
                <span className="text-2xl">ðŸ“·</span>
              </div>

              <div className="bg-white rounded-xl p-2.5 shadow-lg absolute -right-6 bottom-20 flex items-center justify-center border border-[#E8E8F0] transform rotate-[12deg] hover:rotate-0 duration-300">
                <span className="text-2xl">ðŸŽ§</span>
              </div>

              {/* Small abstract diamond stars â—† */}
              <span className="absolute top-4 left-[20%] text-[#5B4FBE] font-bold text-md select-none pointer-events-none animate-ping duration-3000">â—†</span>
              <span className="absolute bottom-2 left-[25%] text-[#FF9900] font-black text-lg select-none pointer-events-none">â—†</span>
              <span className="absolute top-1/2 right-4 text-[#FF5722] font-semibold text-sm select-none pointer-events-none">â—†</span>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2 â€” STATS BAR (White background, border-y, py-6)
          ============================================================================ */}
      <section className="bg-white border-b border-[#E8E8F0] py-6 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E8F0]">
            
            {/* Stat Item 1 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-8 py-4 lg:py-0 text-left">
              <div className="w-12 h-12 rounded-full bg-[#F0EEFF] flex items-center justify-center flex-shrink-0 text-[#5B4FBE]">
                <Tag size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="font-bold text-2xl text-[#1A1A2E] leading-none">120+</div>
                <div className="text-xs font-semibold text-[#4A4A6A] mt-1 select-none">Active Coupons</div>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-8 pt-6 sm:pt-4 lg:pt-0 text-left">
              <div className="w-12 h-12 rounded-full bg-[#FFF3F0] flex items-center justify-center flex-shrink-0 text-[#FF5722]">
                <Percent size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="font-bold text-2xl text-[#FF5722] leading-none">Upto 60% OFF</div>
                <div className="text-xs font-semibold text-[#4A4A6A] mt-1 select-none">Best Discount</div>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-8 pt-6 sm:pt-4 lg:pt-0 text-left">
              <div className="w-12 h-12 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 text-[#22C55E]">
                <IndianRupee size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="font-bold text-2xl text-[#22C55E] leading-none">â‚¹15,000+</div>
                <div className="text-xs font-semibold text-[#4A4A6A] mt-1 select-none">Savings This Month</div>
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-8 pt-6 sm:pt-4 lg:pt-0 text-left">
              <div className="w-12 h-12 rounded-full bg-[#FFFBEB] flex items-center justify-center flex-shrink-0 text-[#F59E0B]">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="font-bold text-2xl text-[#F59E0B] leading-none">100%</div>
                <div className="text-xs font-semibold text-[#4A4A6A] mt-1 select-none">Verified Coupons</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 3 â€” MAIN 2-COLUMN STRUCTURE (bg-[#F8F8FF], py-10)
          ============================================================================ */}
      <section className="bg-[#F8F8FF] py-10 flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-7 items-start relative">
          
          {/* LEFT COLUMN â€” COUPONS DIRECTORY LIST */}
          <div className="flex-1 w-full text-left">
            
            {/* Context header filter title line */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 border-b border-[#E8E8F0] pb-4">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none select-none">
                  Amazon Coupons &amp; Offers
                </h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium leading-none">
                  Save more with these verified Amazon coupon codes &amp; offers.
                </p>
              </div>

              {/* Sort selector dropdown */}
              <div className="flex items-center gap-2.5 shrink-0 select-none">
                <span className="text-sm font-semibold text-[#4A4A6A] whitespace-nowrap">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[#E8E8F0] rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer text-[#1A1A2E] font-semibold transition hover:bg-gray-50"
                >
                  <option value="Latest">Latest</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Highest Discount">Highest Discount</option>
                </select>
              </div>
            </div>

            {/* Coupons Card Container Area */}
            <div className="space-y-4">
              {sortedCoupons.slice(0, showAllCoupons ? 10 : 5).map((coupon) => {
                const isExpanded = !!expandedCoupons[coupon.id];
                const isCopied = copiedCouponId === coupon.id;

                // Color badges custom styling setup
                let lightBadgeBg = "bg-[#F0EEFF]";
                if (coupon.badgeColor === "#22C55E") lightBadgeBg = "bg-[#F0FDF4]";
                else if (coupon.badgeColor === "#F59E0B") lightBadgeBg = "bg-[#FFFBEB]";
                else if (coupon.badgeColor === "#EF4444") lightBadgeBg = "bg-[#FEF2F2]";

                return (
                  <div
                    key={coupon.id}
                    className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-lg hover:border-[#5B4FBE]/30 transition-all duration-300 group flex flex-col md:flex-row items-stretch"
                  >
                    {/* LEFT Discount Box Column (w-24 bg=discountBg) */}
                    <div
                      className="w-full md:w-24 flex-shrink-0 flex items-center justify-center p-5 md:p-4 text-center text-white"
                      style={{ backgroundColor: coupon.discountBg }}
                    >
                      {renderDiscountSegment(coupon.discountDisplay)}
                    </div>

                    {/* CENTER Content Details (flex-1) */}
                    <div className="flex-1 p-5 text-left flex flex-col justify-between">
                      <div>
                        {/* Custom Badge Indicator row */}
                        <div className="flex items-center mb-2 select-none">
                          <span
                            className="inline-flex items-center text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider"
                            style={{ backgroundColor: lightBadgeBg, color: coupon.badgeColor }}
                          >
                            {coupon.badgeText}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-bold text-[#1A1A2E] text-base md:text-lg leading-snug group-hover:text-[#5B4FBE] transition-colors">
                          {coupon.title}
                        </h3>

                        <p className="text-sm text-[#4A4A6A] mt-1 lg:mt-1.5 leading-relaxed font-semibold">
                          {coupon.description}
                        </p>

                        {/* Verification & Metadata information line */}
                        <div className="mt-3 flex items-center gap-4 text-xs select-none">
                          {coupon.isVerified && (
                            <div className="inline-flex items-center gap-1 text-[#22C55E]">
                              <ShieldCheck size={14} className="stroke-[2.5]" />
                              <span className="font-bold">Verified Today</span>
                            </div>
                          )}

                          <div className="inline-flex items-center gap-1.5 text-gray-400">
                            <Users size={13} className="stroke-[2]" />
                            <span className="font-bold">{coupon.userType}</span>
                          </div>
                        </div>

                      </div>

                      {/* Expandable info Details accordion widget */}
                      <div className="mt-3.5 border-t border-gray-100/70 pt-2 pb-1">
                        <button
                          onClick={() => toggleCouponDetails(coupon.id)}
                          className="text-xs text-[#5B4FBE] font-bold flex items-center gap-1 cursor-pointer select-none hover:underline"
                        >
                          <span>Details</span>
                          {isExpanded ? (
                            <ChevronUp size={13} className="stroke-[2.5]" />
                          ) : (
                            <ChevronDown size={13} className="stroke-[2.5]" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="text-xs text-[#4A4A6A] mt-2.5 leading-relaxed bg-[#F8F8FF] rounded-xl p-3 border border-dashed border-[#E8E8F0] select-none">
                            Terms &amp; conditions apply. Valid for limited period only. Cannot be combined with other offers.
                          </div>
                        )}
                      </div>

                    </div>

                    {/* RIGHT Coupon Box + Action Column (w-44 border-l border-dashed) */}
                    <div className="w-full md:w-44 flex-shrink-0 flex flex-col items-center justify-center gap-3 p-5 border-t md:border-t-0 border-l border-dashed border-[#E8E8F0] bg-[#FAFAFA]/75 md:bg-[#FAFAFA]">
                      
                      {/* Code Pill Display Container */}
                      <div className="border-2 border-dashed border-[#5B4FBE] bg-white rounded-xl px-4 py-2.5 text-center w-full select-all">
                        <span className="font-mono font-black text-[#5B4FBE] text-base tracking-widest block">
                          {coupon.couponCode}
                        </span>
                      </div>

                      {/* Claim and Copy Button */}
                      <button
                        onClick={() => handleCopyCode(coupon.id, coupon.couponCode)}
                        className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 ${
                          isCopied
                            ? 'bg-[#22C55E] text-white'
                            : 'bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <span>âœ“ Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} className="stroke-[2.5]" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* VIEW MORE COUPONS INTERACTIVE FOOTER ACTION */}
            <div className="mt-8 text-center select-none">
              <button
                onClick={() => setShowAllCoupons(prev => !prev)}
                className={`border-2 border-[#5B4FBE] px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 w-fit mx-auto flex items-center gap-2 active:scale-95 cursor-pointer bg-white ${
                  showAllCoupons
                    ? 'bg-[#F0EEFF] text-[#5B4FBE] hover:bg-white'
                    : 'text-[#5B4FBE] hover:bg-[#5B4FBE] hover:text-white'
                }`}
              >
                <ChevronDown size={16} className={`stroke-[2.5] transition-transform duration-300 ${showAllCoupons ? 'rotate-180' : ''}`} />
                <span>{showAllCoupons ? "âœ“ Showing All Coupons" : "View More Coupons (115+)"}</span>
              </button>
            </div>

          </div>

          {/* STICKY RIGHT SIDEBASE ASIDE (w-72 sticky) */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left z-20">
            
            {/* CARD 1 â€” Store Overview Info */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Amazon India â€“ Store Overview
              </h3>

              {/* Table details mapper */}
              <div className="space-y-3 divide-y divide-[#F8F8FF] select-none">
                
                {/* Row 1: Gift icon */}
                <div className="flex items-center gap-3 py-2 border-b border-[#F8F8FF]">
                  <Gift size={15} className="text-[#5B4FBE] shrink-0" />
                  <span className="text-xs text-[#4A4A6A] flex-1 font-semibold">Cashback / Rewards</span>
                  <span className="text-xs font-black text-[#1A1A2E] text-right">Yes</span>
                </div>

                {/* Row 2: Credit Card */}
                <div className="flex items-center gap-3 pt-2.5 pb-2 border-b border-[#F8F8FF]">
                  <CreditCard size={15} className="text-[#5B4FBE] shrink-0" />
                  <span className="text-xs text-[#4A4A6A] flex-1 font-semibold">Payment Options</span>
                  <span className="text-xs font-black text-[#1A1A2E] text-right line-clamp-1 truncate select-none" title="UPI, Cards, Wallets, EMI">
                    UPI, Cards, Wallets
                  </span>
                </div>

                {/* Row 3: Return Policy */}
                <div className="flex items-center gap-3 pt-2.5 pb-2 border-b border-[#F8F8FF]">
                  <RefreshCw size={15} className="text-[#5B4FBE] shrink-0" />
                  <span className="text-xs text-[#4A4A6A] flex-1 font-semibold">Return Policy</span>
                  <span className="text-xs font-black text-[#1A1A2E] text-right">10 Days Returnable</span>
                </div>

                {/* Row 4: Shipping */}
                <div className="flex items-center gap-3 pt-2.5 pb-2 border-b border-[#F8F8FF]">
                  <Truck size={15} className="text-[#5B4FBE] shrink-0" />
                  <span className="text-xs text-[#4A4A6A] flex-1 font-semibold">Shipping</span>
                  <span className="text-xs font-black text-[#1A1A2E] text-right">Fast Delivery</span>
                </div>

                {/* Row 5: Customer support */}
                <div className="flex items-center gap-3 pt-2.5 pb-1">
                  <Headphones size={15} className="text-[#5B4FBE] shrink-0" />
                  <span className="text-xs text-[#4A4A6A] flex-1 font-semibold">Customer Support</span>
                  <span className="text-xs font-black text-[#1A1A2E] text-right">24/7 Available</span>
                </div>

              </div>

              {/* Visit store button */}
              <a
                href="https://www.amazon.in"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#5B4FBE] text-[#5B4FBE] py-3 rounded-xl font-bold text-sm hover:bg-[#5B4FBE] hover:text-white transition duration-200 flex items-center justify-center gap-2 mt-5 w-full select-none"
              >
                <ExternalLink size={16} />
                <span>Visit Amazon</span>
              </a>

            </div>

            {/* CARD 2 â€” Top Categories at Amazon */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Top Categories at Amazon
              </h3>

              <div className="space-y-2 select-none">
                
                {/* Item 1: Electronics */}
                <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                  <Monitor size={14} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                  <span className="text-sm text-[#4A4A6A] flex-1 font-semibold group-hover:text-[#5B4FBE]">Electronics</span>
                  <span className="text-xs font-black text-[#FF5722]">Upto 60% OFF</span>
                </div>

                {/* Item 2: Mobiles */}
                <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                  <Smartphone size={14} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                  <span className="text-sm text-[#4A4A6A] flex-1 font-semibold group-hover:text-[#5B4FBE]">Mobiles &amp; Accessories</span>
                  <span className="text-xs font-black text-[#FF5722]">Upto 40% OFF</span>
                </div>

                {/* Item 3: Fashion */}
                <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                  <Heart size={14} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                  <span className="text-sm text-[#4A4A6A] flex-1 font-semibold group-hover:text-[#5B4FBE]">Fashion &amp; Beauty</span>
                  <span className="text-xs font-black text-[#FF5722]">Upto 60% OFF</span>
                </div>

                {/* Item 4: Home */}
                <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                  <Home size={14} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                  <span className="text-sm text-[#4A4A6A] flex-1 font-semibold group-hover:text-[#5B4FBE]">Home &amp; Kitchen</span>
                  <span className="text-xs font-black text-[#FF5722]">Upto 50% OFF</span>
                </div>

                {/* Item 5: Books */}
                <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                  <BookOpen size={14} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                  <span className="text-sm text-[#4A4A6A] flex-1 font-semibold group-hover:text-[#5B4FBE]">Books &amp; Education</span>
                  <span className="text-xs font-black text-[#FF5722]">Upto 30% OFF</span>
                </div>

              </div>

              {/* View all categories link */}
              <Link href="/categories"
                className="text-xs font-bold text-[#5B4FBE] hover:underline inline-flex items-center gap-1 mt-4 select-none ml-2"
              >
                <span>View All Categories</span>
                <ArrowRight size={13} className="stroke-[2.5]" />
              </Link>

            </div>

            {/* CARD 3 â€” Why Shop at Amazon */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 leading-none select-none">
                Why Shop at Amazon?
              </h3>

              <div className="space-y-3 select-none">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] shrink-0" size={16} />
                  <span className="text-sm font-semibold text-[#4A4A6A]">Wide range of products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] shrink-0" size={16} />
                  <span className="text-sm font-semibold text-[#4A4A6A]">Best prices &amp; great deals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] shrink-0" size={16} />
                  <span className="text-sm font-semibold text-[#4A4A6A]">Fast &amp; reliable delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] shrink-0" size={16} />
                  <span className="text-sm font-semibold text-[#4A4A6A]">Easy returns &amp; refunds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#22C55E] shrink-0" size={16} />
                  <span className="text-sm font-semibold text-[#4A4A6A]">100% secure payments</span>
                </div>
              </div>
            </div>

            {/* CARD 4 â€” Share & Save More */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs relative">
              <h3 className="font-bold text-[#1A1A2E] text-sm leading-none select-none">
                Share &amp; Save More
              </h3>
              <p className="text-xs text-[#4A4A6A] mt-2.5 leading-relaxed font-semibold select-none">
                Share these offers with your friends and help them save more!
              </p>

              {/* Social share row buttons */}
              <div className="mt-4 flex gap-3 relative select-none">
                
                {/* Whatsapp */}
                <button
                  onClick={() => handleShare('WhatsApp')}
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200 active:scale-95 font-black text-sm"
                  title="Share on WhatsApp"
                >
                  W
                </button>

                {/* Telegram */}
                <button
                  onClick={() => handleShare('Telegram')}
                  className="w-10 h-10 rounded-full bg-[#0088CC] flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200 active:scale-95 font-black text-xs"
                  title="Share on Telegram"
                >
                  T
                </button>

                {/* Facebook */}
                <button
                  onClick={() => handleShare('Facebook')}
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200 active:scale-95 font-black text-sm"
                  title="Share on Facebook"
                >
                  f
                </button>

                {/* Twitter/X */}
                <button
                  onClick={() => handleShare('Twitter')}
                  className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200 active:scale-95 font-black text-sm"
                  title="Share on Twitter / X"
                >
                  ð•
                </button>

                {/* Email */}
                <button
                  onClick={() => handleShare('Email')}
                  className="w-10 h-10 rounded-full bg-[#4A4A6A] flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center"
                  title="Share via Email"
                >
                  <Mail size={16} />
                </button>

              </div>

              {/* Copied Link Tooltip Banner above the social buttons */}
              {shareTooltip && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-1 bg-[#1A1A2E] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-lg select-none z-30 animate-fade-in whitespace-nowrap">
                  Link copied for {shareTooltip}!
                </div>
              )}

            </div>

          </aside>

        </div>
      </section>

      {/* ============================================================================
          SECTION 4 â€” ABOUT BRAND + MINI FEATURES (White bg, border-t, py-14)
          ============================================================================ */}
      <section className="bg-white py-14 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column â€” About Brand Text (60% equivalent span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-bold text-xl text-[#1A1A2E] mb-4 select-none">
              About Amazon India
            </h2>
            <p className="text-sm text-[#4A4A6A] leading-relaxed font-semibold">
              Amazon India is a leading e-commerce platform that offers millions of products across diverse categories including electronics, fashion, home &amp; kitchen, beauty, books and more. With great deals, fast delivery and excellent customer service, Amazon is India's most trusted online shopping destination.
            </p>
            <p className="text-sm text-[#4A4A6A] leading-relaxed font-semibold mt-3">
              Founded in 2013, Amazon India has grown to become the country's leading online marketplace with over 100 million products. Amazon Prime membership offers free delivery, exclusive deals and access to Prime Video streaming.
            </p>
          </div>

          {/* Right Column â€” 4 Mini Feature cards (40% equivalent span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-[#F0EEFF] rounded-2xl p-5 text-center flex flex-col justify-center shadow-xs">
              <div className="text-[#5B4FBE] inline-block mx-auto mb-3">
                <Percent size={28} className="stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#1A1A2E] leading-tight">Great Prices</h3>
              <p className="text-[11px] text-[#4A4A6A] mt-1 leading-none font-semibold uppercase tracking-wider">Every Day</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF3F0] rounded-2xl p-5 text-center flex flex-col justify-center shadow-xs">
              <div className="text-[#FF5722] inline-block mx-auto mb-3">
                <RefreshCw size={28} className="stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#1A1A2E] leading-tight">Easy Returns</h3>
              <p className="text-[11px] text-[#4A4A6A] mt-1 leading-none font-semibold uppercase tracking-wider">&amp; Refunds</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F0FDF4] rounded-2xl p-5 text-center flex flex-col justify-center shadow-xs">
              <div className="text-[#22C55E] inline-block mx-auto mb-3">
                <Lock size={28} className="stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#1A1A2E] leading-tight">100% Secure</h3>
              <p className="text-[11px] text-[#4A4A6A] mt-1 leading-none font-semibold uppercase tracking-wider">Payments</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFFBEB] rounded-2xl p-5 text-center flex flex-col justify-center shadow-xs">
              <div className="text-[#F59E0B] inline-block mx-auto mb-3">
                <Headphones size={28} className="stroke-[2.5]" />
              </div>
              <h3 className="font-bold text-sm text-[#1A1A2E] leading-tight">24/7 Customer</h3>
              <p className="text-[11px] text-[#4A4A6A] mt-1 leading-none font-semibold uppercase tracking-wider">Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 5 â€” FAQ ACCORDION SECTION (bg-[#F8F8FF], py-16)
          ============================================================================ */}
      <section className="bg-[#F8F8FF] py-16 w-full border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-6 text-left">
          
          <h2 className="font-bold text-xl text-[#1A1A2E] mb-8 select-none">
            Frequently Asked Questions
          </h2>

          {/* 2-Column Grid Accordion Block layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AMAZON_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-[#E8E8F0] rounded-2xl overflow-hidden hover:border-[#5B4FBE]/30 transition duration-250 self-start"
                >
                  <div
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#F8F8FF]/50 transition duration-200 select-none"
                  >
                    <span className="text-sm font-semibold text-[#1A1A2E] flex-1 pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-[#5B4FBE] shrink-0 stroke-[2.5]" />
                    ) : (
                      <ChevronDown size={16} className="text-[#5B4FBE] shrink-0 stroke-[2.5]" />
                    )}
                  </div>

                  {isOpen && (
                    <div className="border-t border-[#E8E8F0] px-4 pb-4 pt-3 text-sm text-[#4A4A6A] leading-relaxed bg-white font-medium">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 6 â€” NEWSLETTER BANNER (bg-gradient, rounded max-w-6xl, py-14)
          ============================================================================ */}
      <section className="py-12 bg-[#F8F8FF] w-full px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#5B4FBE] to-[#3730A3] py-14 px-6 rounded-3xl relative overflow-hidden shadow-xl text-center">
          
          {/* Floating Emoji characters left & right (hidden on mobile) */}
          <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 text-7xl select-none select-none-opacity-80 transform rotate-[-12deg] pointer-events-none">
            ðŸ“§
          </div>
          
          <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 text-7xl select-none select-none-opacity-85 transform rotate-[15deg] pointer-events-none">
            ðŸŽ<span className="absolute top-[-10px] right-[-5px] text-xs font-black text-amber-300 animate-pulse">âœ¦</span>
          </div>

          {/* Core Center form container */}
          <div className="relative z-10 max-w-md mx-auto">
            
            <div className="text-white inline-block mx-auto mb-3 animate-pulse bg-white/10 p-3 rounded-full">
              <Mail size={32} className="stroke-[2]" />
            </div>

            <h2 className="font-bold text-2xl text-white mt-2 tracking-tight select-none leading-none">
              Never Miss a Deal!
            </h2>

            <p className="text-white/75 text-sm mt-2 font-medium leading-relaxed max-w-xs mx-auto select-none">
              Subscribe to get the latest coupons &amp; offers straight to your inbox.
            </p>

            {/* Form row */}
            <form onSubmit={handleSubscribe} className="mt-6 flex bg-white rounded-full p-1 border border-white/20 shadow-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-0 text-[#1A1A2E] text-sm px-5 py-3 outline-none placeholder:text-gray-400 font-semibold rounded-l-full"
              />
              <button
                type="submit"
                className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 active:scale-95 hover:shadow-md cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}


