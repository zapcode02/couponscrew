'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Tag,
  ShieldCheck,
  Clock,
  Heart,
  ExternalLink,
  Copy,
  Check,
  Lock,
  RefreshCw,
  Headset,
  ArrowRight,
  TrendingUp,
  Info,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, ZOMATO_COUPONS } from './zomatoCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.zomato.com/';

export default function ZomatoStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Latest');

  const coupons: Coupon[] = ZOMATO_COUPONS;

  const handleCopyCode = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedCode(coupon.code);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  const handleGetDeal = () => {
    window.open(AFFILIATE_URL, '_blank', 'noopener,noreferrer');
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'How do I use a Zomato coupon code?',
      a: 'To use a Zomato coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Zomato website or app. If it is a deal, simply click "Visit Zomato" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Zomato coupon code not working?',
      a: 'A coupon might not work due to expiry, minimum order value requirements, restaurant-specific exclusions, or user eligibility restrictions (e.g. new users only). Double-check the offer terms listed with each code.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes, every Zomato coupon code listed on this page is checked before publishing so you can shop with confidence.'
    },
    {
      q: 'How often are Zomato coupons updated?',
      a: 'Our deals team reviews and updates coupons regularly. Expired promotions are removed so you only see codes that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promo code can be applied per order. Check the specific offer terms for any exceptions.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF7F7] flex flex-col font-sans antialiased text-[#4A4A4A]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2  text-xs md:text-sm text-[#4A4A4A] select-none mb-6">
            <Link href="/" className="hover:text-[#E23744] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#E23744] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#E23744] font-semibold">Zomato Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#EDE5E5] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#EDE5E5] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/zamato-logo_mlqure.webp"
                      alt="Zomato Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.5 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1C1C1C] tracking-tight">Zomato</h1>
                    <span className="bg-[#FDEBEC] text-[#E23744] text-xs font-bold px-3 py-1 rounded-full border border-[#F7D3D5]">
                      Food Delivery & Dining Out
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                    Browse the latest Zomato coupon codes and offers to save on every food order. Enjoy Flat ₹200 OFF, free delivery, cashback rewards, Zomato Gold membership at ₹1, bank discounts, and exclusive restaurant deals updated regularly for maximum savings.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A4A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#E23744] bg-[#FDEBEC] px-2.5 py-1 rounded-full border border-[#F7D3D5]">
                      <Tag size={14} /> 10+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#EDE5E5] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#1C1C1C] hover:bg-[#333333] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Zomato</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D9D0D0] text-[#1C1C1C] hover:bg-gray-50'
                    }`}
                >
                  <Heart size={16} className={isFavorite ? 'fill-current text-red-500' : 'text-gray-400'} />
                  <span>{isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</span>
                </button>
              </div>
            </div>

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] items-center justify-center bg-gradient-to-br from-[#E23744] to-[#1C1C1C]"
            >
              <div className="text-center px-8 select-none">
                <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">Seasonal Offer</p>
                <h3 className="text-white text-2xl font-black leading-tight">Great Food, Great Savings</h3>
                <p className="text-white/70 text-sm mt-3">Explore verified Zomato coupon codes updated regularly</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP ACCENT BAR — desktop only
          ========================================== */}
      <section className="hidden lg:block bg-white border-b border-[#EDE5E5] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#EDE5E5]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FDEBEC] text-[#E23744] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1C1C1C] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#EDE5E5]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F2F2F2] text-[#1C1C1C] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1C1C1C] leading-none">Up to 60%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#EDE5E5]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1C1C1C] leading-none">Real Savings</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Every Order</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FDEBEC] text-[#E23744] rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1C1C1C] leading-none">100%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Verified Offers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN LAYOUT CONTAINER
          ========================================== */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* LEFT COLUMN: Coupons, Editorial Content, FAQ (70% width) */}
          <main className="flex-1 space-y-10 order-1">

            {/* Header Control Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EDE5E5] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1C1C1C] tracking-tight">Zomato Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Zomato coupon codes & offers.</p>
              </div>


            </div>

            {/* Coupons Card List */}
<div className="space-y-6 max-w-5xl mx-auto p-4">
  {coupons.map((coupon) => {
    const isExpanded = expandedCouponId === coupon.id;
    const isCopied = copiedCode === coupon.code;

    return (
      <div
        key={coupon.id}
        className="bg-[#F8F9FA] rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
      >
        {/* Main Flex Container */}
        <div className="flex flex-row items-stretch">

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#E23744) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#E23744] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
            </h2>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              OFF
            </span>
          </div>

          {/* RIGHT WRAPPER: Center Content + Right Action */}
          <div className="flex-1 flex flex-col lg:flex-row items-stretch">

            {/* CENTER CONTENT SECTION */}
            <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                {/* Soft Tint Badge using Accent (#1C1C1C) */}
                <span className="bg-[#1C1C1C]/10 text-[#1C1C1C] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {coupon.type || "Best Offer"}
                </span>
                <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {coupon.verified || "Verified"}
                </span>
              </div>

              <h2 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                {coupon.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-2xl">
                {coupon.description}
              </p>

              {/* View Details Toggle */}
              <button
                onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#E23744] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E23744]" />
                    <span>Valid on select restaurants and participating outlets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E23744]" />
                    <span>Minimum order value might apply as specified in offer terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#E23744]" />
                    <span>Offer availability may vary by location.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

             

              {/* Action Button - Vibrant CTA Accent (#1C1C1C) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#1C1C1C] hover:bg-[#333333] text-white"
                }`}
              >
                {isCopied ? "Copied!" : "Get Deal"}
              </button>
            </div>

          </div>
        </div>

      </div>
    );
  })}
</div>





          </main>

          {/* RIGHT COLUMN: Sidebar (30% width) */}
          <aside className="w-full lg:w-80 flex-shrink-0 self-start space-y-6 order-2">

            {/* Sidebar Card 1: Store Information */}
            <div className="bg-white border border-[#EDE5E5] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1C1C1C] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#EDE5E5] pb-3 select-none">
                <Info size={16} className="text-[#E23744]" />
                <span>About Zomato — India's Largest Food Delivery Platform</span>
              </h3>
              <p className="text-[#1C1C1C] text-sm mb-3">
              Zomato was founded in 2008 by Deepinder Goyal and Pankaj Chaddah as a restaurant discovery platform. Over the next decade it evolved from a menu aggregator into one of India's most widely used food delivery services, operating across 800+ cities and partnering with hundreds of thousands of restaurants.
              </p>
              <p className="text-[#1C1C1C] text-sm mb-3">
              Today, Zomato operates across the full food ecosystem. The platform connects diners with restaurant partners for delivery and dining, runs a Zomato cloud kitchen network under its own brands, powers a Zomato restaurant partner programme for independent operators, and offers Zomato Gold — a paid membership that unlocks complimentary dishes and drinks at partner restaurants. Zomato also launched Blinkit, covering rapid grocery and essentials delivery, and operates a Zomato delivery partner app that allows individuals to sign up as delivery executives.
              </p>
              <p className="text-[#1C1C1C] text-sm mb-3">
              In 2021, Zomato listed on Indian stock exchanges, becoming one of the country's first major food-tech companies to go public. The listing underlined the scale of Zomato's network — tens of millions of active users, millions of restaurant partner listings, and a Zomato delivery fleet that operates in real time across India.
              </p>
              <p className="text-[#1C1C1C] text-sm mb-3">
              For consumers, the value of Zomato goes beyond convenience. The platform's rating and review system, live order tracking, scheduled delivery options, and Zomato online ordering interface make it one of the most complete food ordering experiences available in the country.
              </p>

              

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D9D0D0] hover:border-[#E23744] hover:text-[#E23744] text-[#1C1C1C] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Zomato</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#E23744] to-[#1C1C1C] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Zomato Seasonal Offers</h3>
                <span className="inline-block bg-[#1C1C1C] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Save on food delivery and dining out with verified offers
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#E23744] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Order Now
              </a>
            </div>

            

            {/* Sidebar Card 4: Why Shop at Zomato */}
           <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    Types of Zomato Discount Codes &amp; Offers Available
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Zomato runs a wide variety of deals across different categories. Here&apos;s what you&apos;ll typically find:
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">First-Order Discount (New User)</span>
        <span>New users placing their first Zomato order are eligible for the highest discounts — typically 40%–60% off or a flat rupee discount. These Zomato promo codes are app-specific and expire after first use.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Flat Rupee Off Coupons</span>
        <span>Common Zomato offer codes that take a fixed amount (e.g. ₹75, ₹100, ₹150) off orders above a minimum cart value. These are available to both new and existing users.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Percentage Discount Codes</span>
        <span>Zomato coupon codes offering a percentage off the total order value — typically 10%–30% — with a maximum discount cap. Minimum order conditions apply.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Free Delivery Codes</span>
        <span>A Zomato discount code that waives the delivery fee on eligible orders. Zomato Pro and Gold members often get this applied automatically; non-members can unlock it through specific codes.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bank &amp; Payment Partner Offers</span>
        <span>Partner bank credit cards (HDFC, ICICI, Axis, Kotak, SBI, etc.) often unlock an additional 10%–20% cashback or instant discount on Zomato orders. These Zomato discount codes are applied automatically when you choose the eligible card at checkout.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Zomato Gold Membership Discounts</span>
        <span>Gold members get complimentary dishes (Buy 1 Get 1 on select food items) and complimentary drinks at partner restaurants. These benefits don&apos;t require a Zomato coupon code — they&apos;re activated automatically through the membership.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Weekend &amp; Festival Offers</span>
        <span>Zomato runs regular weekend deals, festival-specific promotions (Holi, Diwali, New Year), and seasonal campaigns. These Zomato promo codes are time-limited — check CouponsCrew before placing your order on high-demand days.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#F0EEFF] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Corporate &amp; Bulk Order Discounts</span>
        <span>For business meals or large group orders, Zomato offers special pricing through its Zomato for Business programme. Contact Zomato directly or speak to a Zomato restaurant partner for bulk pricing.</span>
      </div>
    </li>
  </ul>
</div>


          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Left: Text Content */}
      <div className="prose max-w-none">
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Use Zomato Coupon Code and Discount Codes to Save More on Every Zomato Order | Aug 2026
        </h2>

        <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">IndiGo Coupon Offers and Deals</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Offer Type</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Category</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Discount / Price</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Offer Highlights</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">User Eligibility</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {ZOMATO_COUPONS.map((coupon) => (
            <tr key={coupon.id} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
                {coupon.badge}
              </td>
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {coupon.type}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
                {coupon.badge}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-snug font-medium" itemProp="description">
                {coupon.title}
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
                  {coupon.userType}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Food delivery in India runs on Zomato — and with the right Zomato coupon code, every order becomes a better deal. Whether you're ordering dinner from a local restaurant, scheduling a Zomato delivery for the week, or dining out with a Zomato Gold membership, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew collects, verifies, and updates Zomato discount codes, promo codes, and offer codes in one place so you don't have to hunt across the internet before every order. Every code listed here is checked for validity before going live — no expired deals, no guesswork.
          </p>

          <p>
            From flat-off coupons on your first Zomato order to cashback deals through partner banks, percentage discounts on select restaurants, and free delivery passes, this page covers the full range of savings available on Zomato online today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Header & Intro */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Best Features and Services of Zomato
    </h3>
    <p>
      Understanding what Zomato offers helps you get more from every order — and use your Zomato coupon code or Zomato discount code at the right moment.
    </p>
  </div>

  {/* Features List */}
  <div className="space-y-4">
    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Food Delivery at Scale
      </h4>
      <p>
        Zomato delivery covers 800+ cities in India, making it the most geographically extensive food delivery platform in the country. The Zomato near me feature surfaces local restaurants ranked by rating, delivery time, and cuisine — useful for discovering quality options beyond the usual go-to places.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Zomato Gold Membership
      </h4>
      <p>
        Zomato Gold is the platform's paid membership tier. Members get complimentary dishes and drinks at Gold-partner restaurants when dining in, plus additional savings on delivery orders. For frequent users who regularly dine out or order Zomato online several times a week, the membership pays for itself quickly.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Zomato Cloud Kitchen
      </h4>
      <p>
        Zomato operates a network of Zomato cloud kitchen brands — delivery-only kitchen concepts that run out of shared commercial kitchen infrastructure. These brands offer consistent food quality at lower price points than full-service restaurants, making them a value option for everyday Zomato orders.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Zomato Restaurant Partner Programme
      </h4>
      <p>
        Independent restaurant owners can partner with Zomato through the Zomato restaurant partner programme to list their menus, manage orders, and access delivery fulfilment. For consumers, this means a constantly expanding selection of local restaurants and cuisines on the platform.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Zomato Delivery Partner App
      </h4>
      <p>
        The Zomato delivery partner app allows individuals to register as delivery executives and earn by completing food and grocery deliveries. This crowd-sourced fulfilment model keeps Zomato's delivery network flexible and fast across diverse city sizes.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Zomato Gift Card
      </h4>
      <p>
        Zomato gift cards are a popular choice for gifting — available in custom denominations and redeemable across all Zomato online orders. They can be purchased on the Zomato app or website and sent digitally to recipients.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Scheduled Delivery & Real-Time Tracking
      </h4>
      <p>
        Users can schedule a Zomato order in advance — useful for office lunches, parties, or late-night cravings. Live order tracking keeps users informed from kitchen confirmation to doorstep delivery.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Ratings, Reviews & Menus
      </h4>
      <p>
        Zomato's core product from its early days remains one of its strongest assets. Restaurant menus, photos, dish-level ratings, and verified user reviews help diners make informed choices before placing a Zomato order.
      </p>
    </div>
  </div>
</div>

          {/* How to Use Section */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Zomato Coupon Code — Step by Step</h3>
            <p className="text-gray-700 font-bold -mt-4">Applying a Zomato discount code or Zomato promo code takes under a minute. Here's how:</p>
            <div className="space-y-6">
              {[
                "Open Zomato — Launch the Zomato app on iOS or Android, or visit zomato.com on your browser.",
                "Search for a restaurant — Use Zomato near me or browse by cuisine, rating, or delivery time to find what you want.",
                "Add items to your cart — Select your dishes and confirm your order from your chosen restaurant partner.",
                "Proceed to checkout — Review your cart and tap \"Proceed to Pay.\"",
                "Apply your Zomato coupon code — Look for the \"Apply Coupon\" or \"Have a promo code?\" field. Enter your Zomato offer code and tap Apply.",
                "Confirm the discount — The discount will show in your order summary. If the code doesn't apply, check the minimum order value or eligibility conditions.",
                "Choose your payment method — Pay via UPI, credit/debit card, net banking, or Zomato credits. Bank card offers may apply an additional Zomato discount code automatically.",
                "Place your order — Confirm and track your Zomato delivery in real time."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#F0EEFF] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-6">
              <strong className="text-[#5B4FBE]">Tip:</strong> Some Zomato promo codes are app-exclusive. If a code isn't working on the website, try placing the order on the Zomato app instead.
            </p>
          </div>

          <div className="space-y-6 text-slate-700">
  {/* Category Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Zomato by Food Category — What to Order & When to Save
    </h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Biryani & Rice Dishes
        </h4>
        <p>
          India's most-ordered food category on Zomato. Restaurants like Behrouz Biryani (a Zomato cloud kitchen brand), Paradise, and local biryani specialists frequently appear in Zomato deals. Use a Zomato offer code during non-peak hours for faster delivery and occasional extra discounts.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Pizza & Fast Food
        </h4>
        <p>
          Zomato partners with Domino's, Pizza Hut, KFC, McDonald's, and Burger King — as well as hundreds of independent pizza and fast food outlets. Bank card discounts often stack on top of restaurant-level offers.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Healthy & Diet Food
        </h4>
        <p>
          With growing demand for healthy eating, Zomato's health food segment has expanded significantly. Look for calorie-labelled menus and nutrition-forward cloud kitchen brands. These restaurants rarely run heavy discounts, so a Zomato discount code at checkout can make a real difference.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Desserts & Beverages
        </h4>
        <p>
          Cake shops, ice cream brands, and beverage chains are popular for quick single-item Zomato orders. Minimum order values for Zomato coupon codes may be harder to hit here — combine a dessert and beverage order to cross the threshold.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Breakfast & Snacks
        </h4>
        <p>
          Early morning orders on Zomato have grown substantially. Zomato now surfaces breakfast-specific menus in the morning window. First-time users can apply their new user Zomato promo code on a breakfast order to test the experience at a lower cost.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          North Indian & Chinese
        </h4>
        <p>
          The two most consistently ordered cuisines on Zomato across Indian cities. High competition among restaurants in these categories means frequent restaurant-level discounts that stack naturally with Zomato offer codes.
        </p>
      </div>
    </div>
  </div>

  {/* Comparison Table Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
      Zomato vs Swiggy — How They Compare
    </h3>
    <p className="mb-4">
      Both Zomato and Swiggy dominate India's food delivery market. Here's how they differ for the deal-conscious consumer:
    </p>

    <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#5B4FBE] text-white font-bold">
          <tr>
            <th className="p-3">Feature</th>
            <th className="p-3">Zomato</th>
            <th className="p-3">Swiggy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">City Coverage</td>
            <td className="p-3">800+ cities</td>
            <td className="p-3">500+ cities</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Membership</td>
            <td className="p-3">Zomato Gold</td>
            <td className="p-3">Swiggy One</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Cloud Kitchen Brands</td>
            <td className="p-3">Behrouz, Oven Story, Biryani Blues</td>
            <td className="p-3">The Bowl Company, Homely</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Bank Offers</td>
            <td className="p-3">HDFC, Axis, Kotak, SBI & more</td>
            <td className="p-3">HDFC, ICICI, SBI & more</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Gift Cards</td>
            <td className="p-3">Zomato gift card available</td>
            <td className="p-3">Swiggy gift vouchers available</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Grocery Delivery</td>
            <td className="p-3">Blinkit (Zomato)</td>
            <td className="p-3">Instamart (Swiggy)</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">New User Offer</td>
            <td className="p-3">Up to 60% OFF</td>
            <td className="p-3">Up to 60% OFF</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mb-4">
      For most Indian cities, Zomato offers a wider restaurant selection and more consistent delivery coverage. The Zomato Gold membership adds value for frequent diners. Use CouponsCrew to find the best active Zomato coupon code or Zomato discount code before placing each order.
    </p>
  </div>

  {/* Sale Calendar Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
      Zomato Sale Calendar — Best Times to Use Your Zomato Promo Code
    </h3>
    <p className="mb-4">
      Timing your Zomato orders around major sale periods and events unlocks the deepest discounts:
    </p>

    <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#5B4FBE] text-white font-bold">
          <tr>
            <th className="p-3">Period</th>
            <th className="p-3">Type of Offer</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Republic Day (Jan 26)</td>
            <td className="p-3">Flat off + cashback via Zomato offer code</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Holi (March)</td>
            <td className="p-3">Festival Zomato promo code</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">IPL Season (Mar–May)</td>
            <td className="p-3">Match-night restaurant deals</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Independence Day (Aug 15)</td>
            <td className="p-3">Zomato coupon code campaigns</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Navratri & Dussehra (Oct)</td>
            <td className="p-3">Festive cuisine offers</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Diwali (Oct–Nov)</td>
            <td className="p-3">Highest-traffic sale period</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">New Year's Eve (Dec 31)</td>
            <td className="p-3">Party meal bundles + Zomato discount code</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Weekend Specials (Sat–Sun)</td>
            <td className="p-3">Regular recurring deals</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
      <p>
        <strong className="text-[#2C2C40]">Tip: </strong>
        Download the Zomato app and turn on notifications. Zomato pushes limited-time Zomato offer codes directly to users during peak periods — these disappear quickly.
      </p>
    </div>
  </div>
</div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Zomato Saving Tips from CouponsCrew</h3>
            <p className="text-gray-700 font-bold -mt-4 mb-8">Getting the most from every Zomato order takes a little strategy. Here's what works:</p>
            <div className="space-y-6">
              {[
                "Stack offers where possible. A Zomato discount code for a flat rupee off can sometimes be combined with a bank card cashback offer. Check the terms — when it works, the combined saving is significant.",
                "Order during off-peak hours. Zomato delivery is faster and some restaurant partners offer exclusive off-peak deals between 3–5 PM that don't appear during dinner rush.",
                "Use the Zomato Gold dining option. If you're dining out rather than ordering in, Zomato Gold's complimentary dish and drink benefit often outperforms a standard Zomato coupon code on per-visit savings.",
                "Keep an eye on Zomato cloud kitchen brands. Cloud kitchen pricing is typically 15%–20% lower than equivalent full-service restaurant options for the same cuisine. A Zomato promo code on a cloud kitchen order stretches further.",
                "Meet the minimum order value smartly. Rather than adding filler items to hit a minimum order threshold, use the value to add a dessert, beverage, or side you'd actually want.",
                "Gift cards for gifting, not personal orders. Zomato gift cards don't combine with Zomato coupon codes. Use gift cards for gifting; use your own promo code for personal orders.",
                "Check CouponsCrew first. The most reliable habit is to visit CouponsCrew before placing any Zomato order. Verified Zomato offer codes are updated daily — spending 60 seconds here can save you ₹100–₹300 per order."
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Platforms */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Platforms to Explore Alongside Zomato
            </h3>
            <p className="mb-4">
              If you're comparing food delivery and dining options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy — </strong>
              Zomato's closest competitor, with strong coverage in metro cities and its own Swiggy One membership
            </p>
            <p>
              <strong className="text-[#2C2C40]">Blinkit — </strong>
              Zomato's own rapid grocery delivery service, covering essentials in 10–30 minutes
            </p>
            <p>
              <strong className="text-[#2C2C40]">EatSure (Rebel Foods) — </strong>
              Multi-brand food court delivery featuring Faasos, Behrouz Biryani, Oven Story, and more
            </p>
            <p>
              <strong className="text-[#2C2C40]">Dunzo — </strong>
              Hyperlocal delivery covering food, groceries, and everyday essentials
            </p>
            <p>
              <strong className="text-[#2C2C40]">ONDC (Open Network for Digital Commerce) — </strong>
              Government-backed open network for food and retail, increasingly featuring restaurant partners at lower platform fees
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes and offers for all major food delivery and dining platforms. Check individual store pages for verified codes before ordering.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Zomato Discount Codes?
            </h3>
            <p>
              CouponsCrew is built specifically for Indian shoppers looking for verified, working coupon codes. Every Zomato offer code listed on this page is tested before it goes live, and our deals team updates the page daily to remove expired codes and add new ones.
            </p>
            <p>
              Unlike generic coupon aggregators that list outdated codes, CouponsCrew focuses on accuracy and freshness. If a Zomato coupon code is listed here, it has been verified as active. If it stops working, it's removed — not left to frustrate users at checkout.
            </p>
            <p>
              Bookmark this page and check back before every Zomato order. A few seconds on CouponsCrew can save you ₹100–₹500 on every food delivery order.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Zomato Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a Zomato coupon code?",
              a: "Open the Zomato app or website, add items to your cart, and proceed to checkout. Look for the \"Apply Coupon\" field, enter your Zomato coupon code, and tap Apply. The discount appears in your order summary before you confirm payment."
            },
            {
              q: "Q2. Why is my Zomato discount code not working?",
              a: "The most common reasons are: the minimum order value hasn't been met, the code has expired, the restaurant isn't eligible, or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific code you're using."
            },
            {
              q: "Q3. Can I use a Zomato promo code with a bank card offer?",
              a: "Sometimes yes. Zomato allows certain coupon codes to stack with bank card offers, but not all. Check the offer terms — stackable offers will say so explicitly."
            },
            {
              q: "Q4. Are Zomato offer codes only for the app?",
              a: "Most are. Zomato's best Zomato promo codes are typically app-exclusive. If a code isn't working on the desktop website, place your order through the Zomato app instead."
            },
            {
              q: "Q5. How do I get a Zomato coupon code for existing users?",
              a: "Existing users can find active Zomato discount codes on CouponsCrew, via the Zomato app notifications, through bank card partnership offers, and through Zomato Gold membership benefits."
            },
            {
              q: "Q6. What is Zomato Gold and does it replace coupon codes?",
              a: "Zomato Gold is a paid membership offering complimentary dishes and drinks at partner restaurants. It doesn't replace Zomato coupon codes — Gold members can still use delivery discount codes on top of their membership benefits for delivery orders."
            },
            {
              q: "Q7. Can I use a Zomato coupon code on Blinkit orders?",
              a: "No. Blinkit (Zomato's grocery delivery service) operates separately from Zomato food delivery. Zomato coupon codes are not valid on Blinkit orders. Blinkit has its own separate offer system."
            },
            {
              q: "Q8. Does Zomato have a gift card?",
              a: "Yes. Zomato gift cards are available for purchase on the Zomato app and website. They can be sent digitally and redeemed on any Zomato online order. Note that gift cards cannot be combined with a Zomato promo code in the same transaction."
            },
            {
              q: "Q9. How do I partner with Zomato as a restaurant?",
              a: "Restaurant owners can apply to partner with Zomato through the Zomato restaurant partner section on the Zomato website. The programme includes listing on the platform, access to the Zomato delivery network, and business analytics tools."
            },
            {
              q: "Q10. How do I sign up as a Zomato delivery partner?",
              a: "Individuals can register as delivery executives through the Zomato delivery partner app, available on Android. The app handles onboarding, zone selection, and earnings tracking for delivery partners."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#F0EEFF] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Zomato Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Zomato Coupons", "Zomato Gold Offers", "Zomato First Order Code", "Zomato Promo Code", "Bank Card Cashback", "Swiggy vs Zomato", "Zomato Delivery Offers", "CouponsCrew Food"].map(tag => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Zomato Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat 50% Off First Order", sub: "App-exclusive discount for first-time Zomato users" },
              { heading: "Up to 60% Off Select Restaurants", sub: "Daily restaurant partner discounts on food delivery" },
              { heading: "Instant Bank Card Cashback", sub: "Get up to ₹150 off with HDFC, ICICI, SBI & Axis cards" },
              { heading: "Zomato Gold Special Benefits", sub: "Complimentary dishes & drinks at 10,000+ top restaurants" },
              { heading: "Free Delivery Passes", sub: "Save on delivery fees across top restaurant partners" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">Z</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Zomato deal: ${deal.heading}`} className="bg-[#F0EEFF] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ==========================================
          INTERACTIVE CODE COPYING MODAL / POPUP
          ========================================== */}
      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#EDE5E5] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1C1C1C]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#E23744]">{activeModalCoupon.code}</span> at Zomato checkout for instant discounts.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#FDF7F7] border border-[#EDE5E5] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">
                {activeModalCoupon.code}
              </span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">
                Copied
              </span>
            </div>

            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Make sure to paste code before finalizing payment.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#1C1C1C] hover:bg-[#333333] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Zomato</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-xs font-bold text-gray-400 hover:text-[#1C1C1C] py-2 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
