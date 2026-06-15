'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck,
  Store,
  ArrowRight,
  Users, 
  RefreshCw, 
  Activity,
  CheckCircle,
  Zap,
  Plus, 
  Minus, 
  HelpCircle, 
  ChevronDown, 
  MessageCircle,
  ArrowUpRight,
  Clock, 
  Lock, 
  CreditCard, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  Flame, 
  Shirt, 
  Sparkle, 
  Flag, 
  Gift, 
  Palette, 
  Bookmark, 
  Copy, 
  Check, 
  ExternalLink,
  Search,
  Sparkles,
  Ticket
} from 'lucide-react';
import NextImage from 'next/image';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

// Define Interface for Coupon Data
interface Coupon {
  brand: string;
  logo: string;
  color: string;
  borderColor?: string;
  discount: string;
  on: string;
  code: string;
  type: 'code' | 'deal';
  category: 'Fashion' | 'Electronics' | 'Food & Grocery' | 'Travel' | 'Beauty' | 'Web Hosting' | 'Education' | 'Entertainment';
  durationMins: number;
}

// 8 Top Coupons Daily (Hardcoded as specified)
const initialCoupons: Coupon[] = [
  { brand: "HOSTINGER", logo: "H", color: "#673AB7", discount: "Up To 75% OFF", on: "On Web Hosting", code: "HOST75", type: "code", category: "Web Hosting", durationMins: 10 },
  { brand: "Myntra", logo: "M", color: "#FF3F6C", discount: "Flat 30% OFF", on: "On Your First Order", code: "MYNTRA500", type: "code", category: "Fashion", durationMins: 20 },
  { brand: "amazon", logo: "A", color: "#FF9900", discount: "Up To 60% OFF", on: "On Electronics", code: "AMZ60", type: "deal", category: "Electronics", durationMins: 30 },
  { brand: "SWIGGY", logo: "S", color: "#FC8019", discount: "Flat 60% OFF + FREE Delivery", on: "On Food Delivery", code: "SWIGGY60", type: "code", category: "Food & Grocery", durationMins: 45 },
  { brand: "Flipkart", logo: "F", color: "#2874F0", discount: "Up To 80% OFF", on: "On Top Categories", code: "FLIP80", type: "deal", category: "Electronics", durationMins: 60 },
  { brand: "Zomato", logo: "Z", color: "#E23744", discount: "Flat 50% OFF", on: "On First Order", code: "ZOMATO50", type: "code", category: "Food & Grocery", durationMins: 15 },
  { brand: "Nykaa", logo: "N", color: "#FC2779", discount: "Up To 40% OFF", on: "On Beauty Products", code: "NYKAA40", type: "code", category: "Beauty", durationMins: 25 },
  { brand: "Ajio", logo: "AJ", color: "#000000", discount: "Flat 25% OFF", on: "On Fashion", code: "AJIO300", type: "deal", category: "Fashion", durationMins: 40 }
];

// Brand Partners list
const brandsList = [
  { name: 'Amazon', color: '#FF9900', bg: '#FFF7ED', borderColors: 'hover:border-[#FF9900]' },
  { name: 'Flipkart', color: '#2874F0', bg: '#EFF6FF', borderColors: 'hover:border-[#2874F0]' },
  { name: 'Myntra', color: '#FF3F6C', bg: '#FFF1F2', borderColors: 'hover:border-[#FF3F6C]' },
  { name: 'Ajio', color: '#111827', bg: '#F9FAFB', borderColors: 'hover:border-[#111827]' },
  { name: 'Nykaa', color: '#FC2779', bg: '#FFF1F2', borderColors: 'hover:border-[#FC2779]' },
  { name: 'Swiggy', color: '#FC8019', bg: '#FFF7ED', borderColors: 'hover:border-[#FC8019]' },
  { name: 'Zomato', color: '#E23744', bg: '#FEF2F2', borderColors: 'hover:border-[#E23744]' },
  { name: 'Hostinger', color: '#673AB7', bg: '#F5F3FF', borderColors: 'hover:border-[#673AB7]' }
];

  const saleEvents = [
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      title: "Flipkart Big Billion Days & Amazon Great Indian Festival",
      timeline: "October",
      description: "The two biggest platforms run their flagship sales at the same time every October. Set your alarm - the best electronics and smartphone deals sell out in the first few hours. Grab a discount code before your cart fills up. No exaggeration.",
      tag: "Deepest Discounts",
      bgColor: "bg-orange-50/60 border-orange-100"
    },
    {
      icon: <Shirt className="w-5 h-5 text-pink-500" />,
      title: "Myntra End of Reason Sale (EORS)",
      timeline: "June & December",
      description: "Twice a year, Myntra clears warehouse stock with genuine markdowns - not inflated MRP tricks. The app-exclusive coupons stack on top. June and December. Both are worth showing up for.",
      tag: "Bi-Annual Fashion",
      bgColor: "bg-pink-50/60 border-pink-100"
    },
    {
      icon: <Sparkle className="w-5 h-5 text-purple-500" />,
      title: "Nykaa Pink Friday Sale",
      timeline: "November",
      description: "Nykaa&apos;s biggest sale of the year, every November. Skincare, haircare, and makeup hit their lowest listed prices. One week. Stock moves fast.",
      tag: "Beauty & Wellness",
      bgColor: "bg-purple-50/60 border-purple-100"
    },
    {
      icon: <Flag className="w-5 h-5 text-blue-500" />,
      title: "Republic Day & Independence Day Sales",
      timeline: "January 26 & August 15",
      description: "Reliable sale windows every January and August. Amazon, Flipkart, Ajio, and Tata CliQ all run platform-wide promos. Good timing for appliances and electronics you&apos;ve been holding off on.",
      tag: "National Events",
      bgColor: "bg-blue-50/60 border-blue-100"
    },
    {
      icon: <Gift className="w-5 h-5 text-red-500" />,
      title: "Diwali & Peak Festive Season",
      timeline: "October – November",
      description: "The widest category coverage of the year. Home decor, ethnic wear, gifting, and more - every major platform runs concurrent promos across October and November. Stack codes early.",
      tag: "Mega Festival",
      bgColor: "bg-red-50/60 border-red-100"
    },
    {
      icon: <Palette className="w-5 h-5 text-emerald-500" />,
      title: "Holi Sales",
      timeline: "March",
      description: "A growing sale window in March - spring fashion and beauty get the most action. Most people miss it because it&apos;s not as loud as the October events. That&apos;s why the codes last longer.",
      tag: "Spring Window",
      bgColor: "bg-emerald-50/60 border-emerald-100"
    }
  ];

  

  const faqData = [
    {
      q: "How do I find coupons for a specific store on Couponscrew?",
      a: "Type the store name in the search bar at the top — Amazon, Zomato, Myntra, Flipkart, or any of the 500+ brands we track. You&apos;ll land directly on that store&apos;s page with every active code listed."
    },
    {
      q: "What is the difference between a coupon code and a deal on Couponscrew?",
      a: "A coupon code is a string like FLAT500 or SAVE20 that you type at checkout. A deal is a pre-applied discount - no code needed, just click through. Every card on Couponscrew tells you clearly which type it is before you use it."
    },
    {
      q: "Which brands have the best coupons on Couponscrew right now?",
      a: "Amazon, Flipkart, Myntra, Zomato, Swiggy, MakeMyTrip, Nykaa, Hostinger, and BigBasket consistently have the most active codes on Couponscrew. Check their store pages - new codes get added the moment we verify them."
    },
    {
      q: "Can I use Couponscrew coupons on mobile apps?",
      a: "Most codes work on both desktop and mobile. Some brands - Zomato, Myntra, and Amazon especially - reserve their best discounts for app users only. Every deal card on Couponscrew marks app-only codes clearly, so you know before you try."
    },
    {
      q: "Which category has the most deals on Couponscrew right now?",
      a: "Fashion and Electronics have the most deals at any given time, followed by Food &amp; Grocery and Travel. The category tiles on the homepage show you where the action is right now - just click to filter."
    },
    {
      q: "How do I stack a coupon code with a bank card offer?",
      a: "Apply the coupon code at checkout first, then select your bank card as the payment method. HDFC, ICICI, SBI, Axis, and Kotak all run brand-specific cashback offers on top of listed discounts. If both apply, both reflect in the total before you confirm."
    }
  ];



export default function Home() {
  // State for search and active filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Carousel slide state for Section 4 Top Coupons (Show 5, scroll offset)
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Modal State for Coupon Detail
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // References for horizontal scrolling of Brands row
  const brandsRowRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Handler for category section selection
  const handleCategorySelect = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
    const element = document.getElementById('top-coupons-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter coupons based on Search Query & Selected Category
  const filteredCoupons = initialCoupons.filter(coupon => {
    const matchesSearch = 
      coupon.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.on.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.discount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory 
      ? coupon.category === selectedCategory 
      : true;

    return matchesSearch && matchesCategory;
  });

  // Carousel slider Navigation
  const handleCarouselLeft = () => {
    setCarouselIndex(prev => Math.max(0, prev - 1));
  };

  const handleCarouselRight = () => {
    const maxIndex = Math.max(0, filteredCoupons.length - 5);
    setCarouselIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Clamp carouselIndex if coupons count changes (e.g., from search)
  useEffect(() => {
    const maxIndex = Math.max(0, filteredCoupons.length - 5);
    if (carouselIndex > maxIndex) {
      setCarouselIndex(maxIndex);
    }
  }, [filteredCoupons, carouselIndex]);

  // Handle Code Copy function
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Scroll Brand Row right programmatically
  const scrollBrands = (direction: 'left' | 'right') => {
    if (brandsRowRef.current) {
      const scrollAmount = 300;
      brandsRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans">
      
      {/* Navigation Header */}
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onCategorySelect={handleCategorySelect} 
      />

      {/* Hero Search Actions */}
      <main className="flex-1">

        {/* SECTION 1  -  HERO SECTION */}
        <section className="bg-[#F0EEFF] relative overflow-hidden py-10 md:py-16">
          {/* Subtle graphic background blobs */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#E4E0FF] opacity-50 blur-3xl"></div>
          <div className="absolute left-[-10%] bottom-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#E5E0FF] opacity-40 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 pb-8">
              <span className="inline-flex items-center gap-1.5 border border-[#5B4FBE] bg-white text-[#5B4FBE] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>THE MOST OBSESSED COUPON TEAM ON THE INTERNET</span>
              </span>

              <div className="space-y-1">
                <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#1A1A2E] leading-none tracking-tight">
                  Find Verified Deals.
                </h1>
                <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#FF5722] leading-none tracking-tight">
                  Save Smarter.
                </h1>
              </div>

              <p className="text-[#4A4A6A] text-base sm:text-lg max-w-xl leading-relaxed">
                We track and test coupons from 500+ brands before they go live. Most coupon sites never clean their listings. We do. That&apos;s the whole difference.
              </p>

              {/* In-page Hero Search Bar */}
              <div className="bg-white p-2 rounded-2xl md:rounded-full border border-gray-100 shadow-lg flex flex-col md:flex-row items-stretch gap-2 max-w-2xl">
                <div className="flex-1 flex items-center gap-2 px-4 py-2">
                  <Search className="text-gray-400 w-5 h-5 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for Amazon, Flipkart, Myntra & more..."
                    className="w-full text-sm text-[#1A1A2E] placeholder:text-gray-400 focus:outline-none"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-gray-400 hover:text-gray-600 px-1 py-1"
                    >
                      &#x2715;
                    </button>
                  )}
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('top-coupons-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#5B4FBE] hover:bg-indigo-600 text-white px-8 py-3 rounded-lg md:rounded-full font-bold text-sm transition-all duration-200 cursor-pointer shadow-md shadow-[#5B4FBE]/20 hover:shadow-lg hover:shadow-[#5B4FBE]/30 active:scale-98 flex items-center justify-center gap-1.5"
                >
                  <span>Search Deals</span>
                </button>
              </div>

              {/* Popular Searches Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-semibold text-[#4A4A6A]">Popular Searches:</span>
                {['Myntra', 'Amazon', 'Hostinger', 'Swiggy', 'Flipkart'].map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSearchQuery(brand);
                      const el = document.getElementById('top-coupons-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white border border-gray-200 text-xs font-semibold text-[#4A4A6A] px-3.5 py-1.5 rounded-full hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer transition-all duration-200"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 relative flex items-end justify-center">
              <div className="relative w-full translate-y-4">
                <NextImage
                  src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1781541026/Home-coupon-code_goxhrd.png"
                  alt="Find verified deals and save smarter"
                  width={1060}
                  height={1120}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2  -  STATS BAR SECTION */}
        <section className="bg-white border-y border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, number: "10,000+", label: "Coupons Verified", sub: "Tested before they go live", iconCol: "text-[#5B4FBE]" },
                { icon: Store, number: "500+", label: "Partner Brands", sub: "From Amazon to Zomato", iconCol: "text-amber-500" },
                { icon: Activity, number: "92.4%", label: "Coupon Success Rate", sub: "Codes that actually work", iconCol: "text-emerald-500" },
                { icon: Users, number: "50,000+", label: "Happy Users", sub: "Trust Our Platform", iconCol: "text-sky-500" }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`bg-[#F0EEFF] p-3.5 rounded-full text-[#5B4FBE] group-hover:scale-105 transition-all duration-200`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconCol}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1A1A2E] tracking-tight">{stat.number}</h3>
                    <p className="text-sm font-semibold text-[#1A1A2E]">{stat.label}</p>
                    <p className="text-xs text-gray-400 mt-[1px]">{stat.sub}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block h-10 w-[1px] bg-[#E8E8F0] ml-auto"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: DYNAMIC IMAGE COMPOSITION */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Wrapper */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-[#F8F8FF] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000" 
                alt="Smart Shopping with Verified Coupons"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[#1A1A2E] font-black text-sm uppercase tracking-tight">Verified Infrastructure</p>
                    <p className="text-[#4A4A6A] text-xs font-medium">Every code is tested manually before listing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F0EEFF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#F4FBF7] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
            
            {/* Floating Metric Badge */}
            <div className="absolute -right-4 top-20 z-20 bg-[#1A1A2E] text-white p-4 rounded-2xl shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-[#22C55E]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Live Pulse</span>
              </div>
              <p className="text-xl font-black">10,000+</p>
              <p className="text-[10px] font-bold text-white/50 uppercase">Active Vouchers</p>
            </div>
          </div>

          {/* RIGHT SIDE: EDITORIAL CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]">
                <Zap className="w-3.5 h-3.5 fill-current" /> Core Identity
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A2E] leading-[1.1]">
                Who is <span className="text-[#5B4FBE]">Couponscrew?</span>
              </h2>
              <p className="text-lg text-[#4A4A6A] leading-relaxed font-medium">
                Couponscrew is a verified coupon and deals platform - built for shoppers who are tired of copy-pasting dead codes at checkout.
              </p>
            </div>

            <div className="space-y-6 text-[#4A4A6A] text-base leading-relaxed">
              <p>
                Most coupon sites list every code they can find — expired, unverified, or just dead — because volume looks impressive. We don&apos;t do that. We track, test, and list active codes from <strong>500+ brands</strong> across every major shopping category. If it&apos;s on Couponscrew, it has been checked.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Ordering food on Zomato",
                  "Buying electronics on Amazon",
                  "Refreshing wardrobe on Myntra",
                  "Booking flights on MakeMyTrip"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#F8F8FF] p-3 rounded-xl border border-[#E8E8F0]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                    <span className="text-sm font-bold text-[#1A1A2E]">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Whether you&apos;re ordering food, buying electronics, or booking a trip - Couponscrew has a verified deal for it. Every promo code on this platform has been checked before it reaches you. Stack a coupon with a bank offer and you&apos;d be surprised how much drops off the total before you confirm payment.
              </p>

              <div className="bg-[#1A1A2E] rounded-3xl p-8 text-white relative overflow-hidden group">
                {/* Subtle Decorative Icon */}
                <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <ShieldCheck size={180} />
                </div>
                
                <h3 className="text-xl font-black mb-4 relative z-10">Zero Guesswork. Just Savings.</h3>
                <p className="text-sm text-white/70 relative z-10 leading-relaxed mb-6">
                  50,000 shoppers open Couponscrew before checkout. Not because we asked them to - because finding a dead code once is annoying. Finding one every time is the reason you stop trusting coupon sites. We&apos;ve made sure that doesn&apos;t happen here.
                </p>
                
                <div className="flex flex-wrap gap-6 relative z-10">
                  <div>
                    <p className="text-2xl font-black text-[#22C55E]">10,000+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Verified Coupons</p>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div>
                    <p className="text-2xl font-black text-[#5B4FBE]">500+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Trusted Brands</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-2 bg-[#5B4FBE] hover:bg-[#463AA3] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-[#5B4FBE]/25 group">
                  Start Saving Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-[#F8F8FF] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]">
              <Calendar className="w-3.5 h-3.5" /> Retail Intel
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight">
              Best Time to Use Coupons Online
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
              Discounts are not random. Platforms run the deepest codes at predictable windows every year. Using a coupon code at these moments is when the savings are highest. Know which ones are real and you&apos;ll never pay full price at the wrong time again.
            </p>
          </div>
          
          {/* SIDE STRATEGY BADGE */}
          <div className="bg-[#1A1A2E] text-white p-4 rounded-2xl shadow-md flex items-center gap-4 shrink-0 border border-white/10 md:max-w-xs">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-[#22C55E]">Pro Saver Strategy</p>
              <p className="text-[11px] text-white/70 mt-0.5 leading-normal">
                Bookmark this. The best codes disappear within hours of these windows opening.
              </p>
            </div>
          </div>
        </div>

        {/* CALENDAR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {saleEvents.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-[#5B4FBE] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`p-2.5 rounded-xl border ${event.bgColor} flex items-center justify-center shrink-0 shadow-xs`}>
                    {event.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 text-[#4A4A6A] px-2.5 py-1 rounded-md">
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#1A1A2E] leading-snug group-hover:text-[#5B4FBE] transition-colors mb-2">
                  {event.title}
                </h3>
                
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-0.5 rounded-md mb-4">
                  <Clock className="w-3 h-3" /> {event.timeline}
                </div>

                <p className="text-xs text-[#4A4A6A] leading-relaxed font-medium">
                  {event.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#E8E8F0] flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#1A1A2E]">
                <span>Track Active Status</span>
                <div className="w-7 h-7 bg-[#F8F8FF] group-hover:bg-[#5B4FBE] group-hover:text-white rounded-full flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM REAL-TIME BANNER */}
        <div className="bg-white border border-[#E8E8F0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF9900]" />
            <p className="text-xs font-bold text-[#4A4A6A]">
              We check these dates and start building code pools in advance. Bookmark this so you&apos;re not scrambling when they open.
            </p>
          </div>
          <button className="text-xs font-black text-[#5B4FBE] hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1">
            View Upcoming Sales <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>

        {/* SECTION 4  -  TOP COUPONS & DEALS */}
        <section id="top-coupons-section" className="bg-[#F8F8FF] py-14 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-xl sm:text-2xl text-[#1A1A2E]">
                    Top Coupons & Deals Today
                  </h2>
                  <span className="bg-[#FF5722] text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    HOT
                  </span>
                </div>
                {selectedCategory && (
                  <p className="text-xs text-[#5B4FBE] font-semibold mt-1">
                    Showing offers for: <span className="bg-[#F0EEFF] px-2 py-0.5 rounded-md">{selectedCategory}</span>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="ml-2 text-[#FF5722] hover:underline cursor-pointer"
                    >
                      Clear Filter
                    </button>
                  </p>
                )}
              </div>
              <button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="text-[#FF5722] text-sm font-semibold hover:text-orange-600 flex items-center gap-1 hover:underline transition cursor-pointer"
              >
                <span>View All Coupons</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Coupons Display */}
            {filteredCoupons.length === 0 ? (
              <div className="bg-white border border-[#E8E8F0] rounded-2xl p-12 text-center max-w-md mx-auto shadow-xs">
                <div className="bg-[#F0EEFF] text-[#5B4FBE] p-4 rounded-full w-14 h-14 mx-auto flex items-center justify-center mb-4">
                  <Ticket className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E]">No Coupons Found</h3>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-xs mx-auto">
                  We couldn't find any deals for <span className="font-semibold text-[#5B4FBE]">"{searchQuery}"</span>. Try searching for Amazon, Swiggy, Myntra, or clear filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-5 bg-[#5B4FBE] hover:bg-indigo-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="relative">
                
                {/* Scroll Indicators if Carousel items are hidden/filtered */}
                <div className="flex items-center gap-4 overflow-hidden py-4">
                  
                  {/* Navigation Arrows */}
                  {filteredCoupons.length > 5 && (
                    <button
                      onClick={handleCarouselLeft}
                      disabled={carouselIndex === 0}
                      className={`absolute left-[-20px] top-[45%] -translate-y-1/2 z-20 bg-white border border-[#E8E8F0] rounded-full p-2.5 shadow-lg flex items-center justify-center transition-all cursor-pointer ${
                        carouselIndex === 0 ? 'opacity-45 cursor-not-allowed text-gray-300' : 'text-[#5B4FBE] hover:scale-105 hover:bg-[#F0EEFF]'
                      }`}
                      aria-label="Previous coupons"
                    >
                      <ChevronLeft className="w-5 h-5 line-clamp-1" />
                    </button>
                  )}

                  {/* Coupon Card Items Grid */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-300">
                    {filteredCoupons
                      .slice(carouselIndex, carouselIndex + 5)
                      .map((coupon, index) => (
                        <div
                          key={coupon.brand + index}
                          className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-xs hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group relative"
                        >
                          {/* Super Premium Verifiably Badge background line */}
                          <div className="absolute top-0 left-12 right-12 h-1 bg-[#5B4FBE]/0 group-hover:bg-[#5B4FBE] transition-all rounded-full"></div>

                          {/* Top: Brand info and Category Badge */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              {/* Logo placeholder - colored square with letter */}
                              <div 
                                className="w-11 h-11 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-xs shrink-0"
                                style={{ backgroundColor: coupon.color }}
                              >
                                {coupon.logo}
                              </div>
                              <div className="min-w-0">
                                <h3 className="font-black text-sm text-[#1A1A2E] truncate uppercase tracking-wider">{coupon.brand}</h3>
                                <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded-md truncate uppercase max-w-[120px] inline-block">
                                  {coupon.category}
                                </span>
                              </div>
                            </div>

                            {/* Offer discounts */}
                            <div className="pt-2">
                              <h4 className="font-extrabold text-lg text-[#1A1A2E] tracking-tight leading-snug group-hover:text-[#5B4FBE] transition-colors">
                                {coupon.discount}
                              </h4>
                              <p className="text-xs text-[#4A4A6A] font-medium leading-relaxed truncate mt-0.5">
                                {coupon.on}
                              </p>
                            </div>
                          </div>

                          {/* Code, CTA and Verified timestamp */}
                          <div className="mt-5 space-y-4 pt-4 border-t border-[#F8F8FF]">
                            {/* Code placeholder box */}
                            <div className="dashed-border border border-dashed border-[#5B4FBE]/50 bg-[#F0EEFF]/60 text-[#5B4FBE] font-mono font-bold text-xs py-2 text-center rounded-lg select-all tracking-wider relative group-hover:bg-[#F0EEFF] transition-colors">
                              {coupon.type === 'code' ? coupon.code : "NO CODE REQUIRED"}
                            </div>

                            {/* Call to action */}
                            <button
                              onClick={() => {
                                handleCopyCode(coupon.code);
                                setActiveCoupon(coupon);
                              }}
                              className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all duration-200 cursor-pointer shadow-sm shadow-[#FF5722]/15 hover:shadow-md hover:shadow-[#FF5722]/30 active:scale-95 text-center flex items-center justify-center gap-1"
                            >
                              <span>{coupon.type === 'code' ? "Get Code" : "Get Deal"}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </button>

                            {/* Footer: timestamp */}
                            <p className="text-[10px] font-medium text-[#22C55E] text-center flex items-center justify-center gap-1 bg-emerald-50 py-1 rounded-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping"></span>
                              <span>Verified {coupon.durationMins} Mins Ago</span>
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>

                  {/* Navigation right */}
                  {filteredCoupons.length > 5 && (
                    <button
                      onClick={handleCarouselRight}
                      disabled={carouselIndex >= filteredCoupons.length - 5}
                      className={`absolute right-[-20px] top-[45%] -translate-y-1/2 z-20 bg-white border border-[#E8E8F0] rounded-full p-2.5 shadow-lg flex items-center justify-center transition-all cursor-pointer ${
                        carouselIndex >= filteredCoupons.length - 5 ? 'opacity-45 cursor-not-allowed text-gray-300' : 'text-[#5B4FBE] hover:scale-105 hover:bg-[#F0EEFF]'
                      }`}
                      aria-label="Next coupons"
                    >
                      <ChevronRight className="w-5 h-5 line-clamp-1" />
                    </button>
                  )}

                </div>

                {/* Progress bar pagination indicator */}
                {filteredCoupons.length > 5 && (
                  <div className="flex justify-center items-center gap-1.5 mt-6">
                    {Array.from({ length: filteredCoupons.length - 4 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          carouselIndex === index ? 'w-6 bg-[#5B4FBE]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </section>


        {/* SECTION 5  -  TRUSTED BRANDS SECTION */}
        <section id="trusted-brands-section" className="bg-white py-14 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Brands Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] leading-none">
                  Shop From 500+ Trusted Brands
                </h2>
                <p className="text-xs text-gray-400 mt-1.5">Official affiliate partnerships generating absolute savings</p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  const element = document.getElementById('top-coupons-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-[#FF5722] text-sm font-semibold hover:text-orange-600 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View All Brands</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scrolling Row with indicators */}
            <div className="relative group">
              {/* Left Scroll Trigger */}
              <button 
                onClick={() => scrollBrands('left')}
                className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#E8E8F0] shadow-md rounded-full p-2 hover:bg-[#F0EEFF] hover:scale-105 cursor-pointer text-[#5B4FBE] transition-all"
                aria-label="Scroll left brands"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Brands horizontal list */}
              <div 
                ref={brandsRowRef}
                className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1 snap-x"
              >
                {brandsList.map((brand, index) => {
                  const filterActive = searchQuery.toLowerCase() === brand.name.toLowerCase();
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setSearchQuery(brand.name);
                        const el = document.getElementById('top-coupons-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`snap-start shrink-0 min-w-[150px] sm:min-w-[170px] bg-white border ${
                        filterActive ? 'border-2 border-[#5B4FBE] ring-2 ring-[#5B4FBE]/10 shadow-md' : 'border-[#E8E8F0]'
                      } rounded-2xl px-6 py-5 flex flex-col items-center justify-center gap-2 text-center select-none cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-indigo-200 group/brand`}
                      style={{ backgroundColor: brand.bg }}
                    >
                      {/* Interactive visual square wrapper */}
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-black shadow-xs transform group-hover/brand:scale-110 transition-all duration-300"
                        style={{ backgroundColor: brand.color }}
                      >
                        {brand.name.substring(0, 2).toUpperCase()}
                      </div>
                      
                      <span 
                        className="text-sm font-extrabold tracking-wide transition-colors group-hover/brand:text-[#5B4FBE]"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right Scroll Trigger */}
              <button 
                onClick={() => scrollBrands('right')}
                className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 bg-white border border-[#E8E8F0] shadow-md rounded-full p-2 hover:bg-[#F0EEFF] hover:scale-105 cursor-pointer text-[#5B4FBE] transition-all"
                aria-label="Scroll right brands"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </section>


        {/* SECTION 6  -  TOP CATEGORIES */}
        <section className="bg-[#F8F8FF] py-14 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] leading-none">
                  Top Categories
                </h2>
                <p className="text-xs text-gray-400 mt-1.5">Pre-arranged groupings for convenient navigation</p>
              </div>
              <button 
                onClick={() => handleCategorySelect(null)}
                className="text-[#FF5722] text-sm font-semibold hover:text-orange-600 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View All Categories</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Grid display layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { emoji: "👗", name: "Fashion", discount: "Up To 80% OFF", color: "#FF6B9D" },
                { emoji: "📱", name: "Electronics", discount: "Up To 70% OFF", color: "#5B4FBE" },
                { emoji: "🛒", name: "Food & Grocery", discount: "Up To 60% OFF", color: "#22C55E" },
                { emoji: "✈️", name: "Travel", discount: "Up To 50% OFF", color: "#0EA5E9" },
                { emoji: "💄", name: "Beauty", discount: "Up To 60% OFF", color: "#EC4899" },
                { emoji: "🖥️", name: "Web Hosting", discount: "Up To 85% OFF", color: "#8B5CF6" },
                { emoji: "🎓", name: "Education", discount: "Up To 60% OFF", color: "#F59E0B" },
                { emoji: "🎬", name: "Entertainment", discount: "Up To 50% OFF", color: "#6366F1" }
              ].map((category, index) => {
                const isSelected = selectedCategory === category.name;
                return (
                  <div
                    key={index}
                    onClick={() => handleCategorySelect(category.name)}
                    className={`bg-white rounded-2xl p-4 text-center border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isSelected 
                        ? 'border-2 border-[#5B4FBE] ring-2 ring-[#5B4FBE]/10 shadow-md translate-y-[-2px]' 
                        : 'border-[#E8E8F0] hover:border-[#5B4FBE] hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Bubble wrapping emoji */}
                      <div 
                        className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-2xl shadow-xs"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        {category.emoji}
                      </div>
                      
                      <h3 className="text-sm font-bold text-[#1A1A2E] mt-3 tracking-tight truncate">
                        {category.name}
                      </h3>
                    </div>

                    <p className="text-[11px] text-[#FF5722] font-semibold mt-1.5 uppercase tracking-wide">
                      {category.discount}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* SECTION 7  -  SAVINGS + RECENT COUPONS + SUCCESS RATE */}
        <section className="bg-white py-14 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Total Savings Card */}
              <div className="bg-[#5B4FBE] rounded-3xl p-8 text-white text-center flex flex-col justify-between relative overflow-hidden shadow-xl shadow-indigo-100 min-h-[350px]">
                {/* Visual sparkles */}
                <div className="absolute top-4 left-6 text-yellow-300 text-lg opacity-40 select-none">&#10022;</div>
                <div className="absolute bottom-6 right-8 text-yellow-300 text-xl opacity-50 select-none">&#10022;</div>
                <div className="absolute top-1/2 right-4 text-yellow-200 text-xs opacity-30 select-none">&#10022;</div>

                <div className="space-y-2 mt-4">
                  <span className="bg-white/10 text-white border border-white/20 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest inline-block">
                    REAL NUMBER. REAL RESULT.
                  </span>
                  <p className="text-sm font-medium text-indigo-100 mt-2">
                    Coupon Success Rate
                  </p>
                  <h3 className="text-4xl xs:text-5xl font-black text-[#FFD700] tracking-tight py-2 bg-linear-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    92.4%
                  </h3>
                  <p className="text-sm font-bold tracking-widest text-[#FFD700] uppercase">
                    Of our codes work at checkout
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 space-y-1">
                  <p className="text-xs text-white font-medium">That number is the whole job.</p>
                  <p className="text-[10px] text-indigo-200">We pull expired codes the moment they stop working.</p>
                </div>
              </div>

              {/* Center Column: Recent Verified Coupons */}
              <div id="recent-coupons-section" className="bg-white rounded-3xl border border-[#E8E8F0] p-6.5 flex flex-col justify-between shadow-xs hover:shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] tracking-tight mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping"></span>
                    <span>Recent Verified Coupons</span>
                  </h3>
                  
                  {/* List of 3 */}
                  <div className="space-y-4">
                    {[
                      { brand: "Zepto", deal: "Flat 20% OFF", time: "8 Mins Ago", color: "#542185", letter: "Z" },
                      { brand: "BigBasket", deal: "Flat 15% OFF", time: "15 Mins Ago", color: "#689F38", letter: "B" },
                      { brand: "Mamaearth", deal: "25% OFF", time: "28 Mins Ago", color: "#1F1F1F", letter: "ME" }
                    ].map((coupon, idx) => (
                      <div 
                        key={idx}
                        onClick={() => {
                          setSearchQuery(coupon.brand);
                          const el = document.getElementById('top-coupons-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl border border-gray-50 hover:bg-[#F8F8FF] hover:border-[#5B4FBE]/20 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-black shadow-xs shrink-0"
                            style={{ backgroundColor: coupon.color }}
                          >
                            {coupon.letter}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors">{coupon.brand}</h4>
                            <p className="text-xs text-[#FF5722] font-semibold">{coupon.deal}</p>
                          </div>
                        </div>
                        <div className="text-right text-[10px] font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">
                          Verified {coupon.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-4">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                      const el = document.getElementById('top-coupons-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#FF5722] hover:text-orange-600 font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View All</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Success Rate with stats */}
              <div className="bg-[#FFF8F6] rounded-3xl border border-orange-100 p-8 flex flex-col justify-between shadow-xs">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-5xl font-black text-[#FF5722] tracking-tight leading-none">92.4%</h4>
                      <p className="text-sm font-semibold text-[#1A1A2E] mt-1.5">Coupon Success Rate</p>
                      <p className="text-[10px] text-gray-400 mt-[1px]">Updated daily. Expired codes pulled within minutes.</p>
                    </div>
                    <span className="bg-[#FFD700] text-[#1A1A2E] text-[9px] font-bold px-2 py-1 rounded-md tracking-wider uppercase">
                      RANK #1
                    </span>
                  </div>

                  {/* Progress bar fill portion */}
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between items-center text-xs text-[#4A4A6A] font-semibold">
                      <span>Working Rate</span>
                      <span>92.4%</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-3.5 overflow-hidden border border-gray-200">
                      <div 
                        className="bg-[#FF5722] h-full rounded-full transition-all duration-1000" 
                        style={{ width: '92.4%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-orange-100 text-center">
                  {[
                    { label: "Active Deals", val: "5,291+" },
                    { label: "Stores", val: "500+" },
                    { label: "User Streaks", val: "100%" },
                    { label: "Checkouts", val: "Instant" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-orange-50">
                      <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                      <p className="text-sm font-bold text-[#1a1a2e] mt-0.5">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 8  -  BOTTOM TRUST BADGES */}
        <section className="bg-white border-t border-[#E8E8F0] py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Verified Coupons", sub: "Tested By In-house Experts Daily" },
                { icon: X, title: "No Hidden Charges", sub: "What you see is what you get always" },
                { icon: Lock, title: "We Respect Your Privacy", sub: "Your personal data is 100% secure" },
                { icon: CreditCard, title: "Secure Checkout", sub: "Checkout with absolute trust" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50/50 transition-colors">
                  <div className="bg-gray-100 p-3 rounded-full text-gray-500 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1A1A2E]">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]">
            <HelpCircle className="w-3.5 h-3.5" /> Support Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4A4A6A] max-w-xl mx-auto leading-relaxed">
            The questions we get asked most. Answered directly - no filler.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`group border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                ? 'border-[#5B4FBE] bg-[#F8F8FF] shadow-sm' 
                : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className={`text-sm sm:text-base font-extrabold pr-4 transition-colors ${
                  openIndex === index ? 'text-[#5B4FBE]' : 'text-[#1A1A2E]'
                }`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-[#5B4FBE] text-white rotate-180' : 'bg-gray-100 text-[#4A4A6A]'
                }`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {/* ANSWER AREA */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                  <div className="h-px w-full bg-[#E8E8F0] mb-4"></div>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM HELP BANNER */}
        <div className="mt-12 bg-[#1A1A2E] rounded-[2rem] p-8 text-white relative overflow-hidden">
          {/* Decorative Gradient Overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5B4FBE]/20 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-[#22C55E] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#22C55E]/20">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight">Still have questions?</h3>
                <p className="text-xs text-white/60 font-medium">We reply within 2 hours. Real person, no ticket queue.</p>
              </div>
            </div>
            <button className="bg-white text-[#1A1A2E] hover:bg-[#F0EEFF] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 group">
              Contact Support <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>

      {/* SECTION 7  -  CTA BANNER */}
            <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-20 relative overflow-hidden">
              
              {/* Decorative design layouts */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white opacity-5 pointer-events-none"></div>
              
              {/* 3x5 Dots grid */}
              <div className="absolute top-8 left-12 grid grid-cols-5 gap-2.5 pointer-events-none">
                {Array.from({ length: 15 }).map((_, idx) => (
                  <div key={idx} className="w-1 h-1 rounded-full bg-white opacity-20"></div>
                ))}
              </div>
    
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
                <span className="text-5xl select-none animate-bounce-slow inline-block" role="img" aria-label="Target">🎯</span>
                
                <div className="space-y-1">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                    Your Smartest Shopping
                  </h2>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF5722] font-display">
                    Habit Starts Here
                  </p>
                </div>
    
                <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                  50,000 people already check Couponscrew before they pay. Not because it&apos;s habit - because a working code feels better than skipping it and wondering if you missed something.
                </p>

                <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                  Bookmark this page. Open it before you shop. There&apos;s almost always something here.
                </p>
    
              
    
                {/* In-banner action control triggers */}
                <div className="flex justify-center gap-4 flex-wrap pt-6">
                  <a 
                    href="/" 
                    className="bg-[#FF5722] hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/35 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Start saving Smarter </span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="/" 
                    className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>View All Brands</span>
                  </a>
                </div>
              </div>
            </section>


      {/* FOOTER COMPONENT */}
      <Footer />

      {/* --- FLOATING PREMIUM INTERACTIVE MODAL --- */}
      {activeCoupon && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#1A1A2E]/70 backdrop-blur-xs transition-opacity" 
            onClick={() => setActiveCoupon(null)}
          ></div>
          
          <div className="bg-white rounded-3xl max-w-md w-full relative overflow-hidden shadow-2xl border border-[#E8E8F0] transform scale-100 transition-all p-8 space-y-6 z-10">
            {/* Top Close Button */}
            <button 
              onClick={() => setActiveCoupon(null)}
              className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Brand details header */}
            <div className="text-center space-y-2 pt-2">
              <div 
                className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-black shadow-md shadow-indigo-100 animate-pulse"
                style={{ backgroundColor: activeCoupon.color }}
              >
                {activeCoupon.logo}
              </div>
              <h3 className="text-2xl font-black text-[#1A1A2E] uppercase tracking-wider">{activeCoupon.brand}</h3>
              <p className="text-xs text-[#5B4FBE] bg-[#F0EEFF] px-3 py-1 rounded-md inline-block font-bold">
                {activeCoupon.category} Group
              </p>
            </div>

            {/* Discount Title */}
            <div className="text-center bg-[#F8F8FF] p-4 rounded-2xl border border-[#E8E8F0]">
              <h4 className="text-xl font-bold text-[#FF5722]">{activeCoupon.discount}</h4>
              <p className="text-sm text-[#4A4A6A] font-medium mt-0.5">{activeCoupon.on}</p>
            </div>

            {/* Step instructions */}
            <div className="space-y-2.5 text-xs text-[#4A4A6A]">
              <h5 className="font-bold text-[#1A1A2E] text-sm mb-1">Easy Savings Instructions:</h5>
              <p className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#5B4FBE] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <span>Copy the exclusive discount code shown below.</span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#5B4FBE] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <span>Go to the official merchant online storefront store checkout page.</span>
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#5B4FBE] text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <span>Apply this code under the promo tab to see your checkout price drop down.</span>
              </p>
            </div>

            {/* Dynamic Code copy action box */}
            <div className="space-y-2">
              <p className="text-center text-[10px] font-bold text-indigo-400 tracking-wider font-mono uppercase">
                Copy Code Below:
              </p>
              <div className="flex rounded-2xl overflow-hidden border border-[#5B4FBE]/30 bg-[#F0EEFF]/50 p-1.5">
                <div className="flex-1 text-[#5B4FBE] font-mono font-extrabold text-center py-2 px-4 select-all text-sm tracking-widest flex items-center justify-center">
                  {activeCoupon.code}
                </div>
                <button
                  onClick={() => handleCopyCode(activeCoupon.code)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                    isCopied 
                      ? 'bg-[#22C55E] text-white' 
                      : 'bg-[#5B4FBE] text-white hover:bg-indigo-600'
                  }`}
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Bottom checkouts */}
            <div className="text-center pt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCoupon(null);
                }}
                className="text-xs text-gray-400 hover:text-[#5B4FBE] font-bold hover:underline"
              >
                Go to Merchant Site & Check Out
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

