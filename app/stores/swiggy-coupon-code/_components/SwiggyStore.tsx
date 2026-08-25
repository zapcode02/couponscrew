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
import { Coupon, SWIGGY_COUPONS } from './swiggyCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.swiggy.com/';

export default function SwiggyStore() {
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

  const coupons: Coupon[] = SWIGGY_COUPONS;

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
      q: 'How do I use a Swiggy coupon code?',
      a: 'To use a Swiggy coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Swiggy app or website. If it is a deal, simply click "Visit Swiggy" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Swiggy coupon code not working?',
      a: 'A coupon might not work due to specific restrictions such as minimum order value, item exclusions, expiry, or user eligibility (e.g. new users only). Double-check the offer terms listed with each code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Swiggy coupon code listed on this page is checked regularly, and codes that stop working are removed so you only see offers that are currently active.'
    },
    {
      q: 'How often are Swiggy coupons updated?',
      a: 'Our team reviews and updates Swiggy coupons regularly. Expired promotions are filtered out so you only spend time on working codes.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promo code can be applied per order. However, coupon codes can sometimes be combined with automatic sitewide offers or select bank card discounts.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2  text-xs md:text-sm text-[#4A4A6A] select-none mb-6">
            <Link href="/" className="hover:text-[#FC8019] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#FC8019] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#FC8019] font-semibold">Swiggy Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp"
                      alt="Swiggy Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.4 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Swiggy</h1>
                    <span className="bg-[#FFF1E5] text-[#FC8019] text-xs font-bold px-3 py-1 rounded-full border border-[#FFE0C2]">
                      Food Delivery & Instant Grocery
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Discover the latest Swiggy coupon codes and offers to save on food delivery and dining. Enjoy up to 50% OFF, Flat ₹200 OFF, ₹175 OFF, Dineout discounts with free drinks, meals from ₹99, free delivery, and exclusive restaurant deals across India.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#FC8019] bg-[#FFF1E5] px-2.5 py-1 rounded-full border border-[#FFE0C2]">
                      <Tag size={14} /> 50+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FC8019] hover:bg-[#E37116] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Swiggy</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D1D1E9] text-[#1A1A2E] hover:bg-gray-50'
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-[#FFF1E5]"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div>
                  <p className="text-[#FC8019] font-black text-2xl tracking-tight">Swiggy Offers</p>
                  <p className="text-[#282C3F] font-semibold text-sm mt-2">Food, Instamart & Dineout deals in one place</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP ACCENT BAR — desktop only
          ========================================== */}
      <section className="hidden lg:block bg-white border-b border-[#E8E8F0] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF1E5] text-[#FC8019] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EFEFF3] text-[#282C3F] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 60%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹2,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF1E5] text-[#FC8019] rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">100%</div>
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E8F0] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Swiggy Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Swiggy coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#FC8019) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#FC8019] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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
                {/* Soft Tint Badge using Accent (#282C3F) */}
                <span className="bg-[#282C3F]/10 text-[#282C3F] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FC8019] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC8019]" />
                    <span>Valid on select restaurants & Instamart categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC8019]" />
                    <span>Minimum order value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC8019]" />
                    <span>Covers selected outlets and delivery partners.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#FC8019]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
                  <span className="font-black text-sm sm:text-base tracking-[1px] text-[#0B1A30]">
                    {coupon.code}
                  </span>
                  <button
                    onClick={() => handleCopyCode(coupon)}
                    className="p-1 hover:bg-slate-50 rounded"
                  >
                    {isCopied ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} className="text-slate-400" />
                    )}
                  </button>
                </div>
              )}

              {/* Action Button - Vibrant CTA Accent (#FC8019) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#FC8019] hover:bg-[#E37116] text-white"
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

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    About Swiggy — India&apos;s All-in-One Consumer Platform
  </h3>

  <div className="space-y-4 text-xs font-semibold text-[#5A5A6E] leading-relaxed">
    <p>
      Swiggy was founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini in Bangalore. What began as a food delivery platform focused on restaurant delivery has expanded into one of India&apos;s most comprehensive consumer apps — covering food, groceries, events, gifting, and dining in a single interface.
    </p>

    <p>
      Over the past decade, Swiggy has grown from a Bangalore-only service to a platform operating across 700+ Indian cities. The company went public in November 2024, listing on Indian stock exchanges in one of the year&apos;s most anticipated tech IPOs.
    </p>

    <div>
      <p className="font-bold text-[#2C2C40] mb-3">
        Today, Swiggy operates across multiple business verticals:
      </p>

      <ul className="space-y-3 text-[#3A3A3A]">
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Food Delivery</span>
            <span> — the core restaurant ordering and swiggy delivery business</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Instamart</span>
            <span> — rapid grocery and essentials delivery, typically in 10–30 minutes</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Dineout</span>
            <span> — dining out deals, table reservations, and restaurant bill payments</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Scenes</span>
            <span> — event discovery and ticket booking for concerts, experiences, and live shows</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Genie</span>
            <span> — pickup and drop courier delivery for sending packages within a city</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
          <div>
            <span className="font-bold text-[#2C2C40]">Swiggy Giftables</span>
            <span> — personalised gift discovery and delivery</span>
          </div>
        </li>
      </ul>
    </div>

    <p>
      This breadth makes Swiggy unique among Indian consumer platforms. A single Swiggy coupon code or Swiggy discount code can deliver value across categories — not just food orders.
    </p>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#FC8019] to-[#282C3F] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Swiggy Seasonal Offers</h3>
                <span className="inline-block bg-[#282C3F] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Food, Instamart & Dineout
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#FC8019] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Order Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    Types of Swiggy Discount Codes &amp; Offers Available
  </h3>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New User Offers</span>
        <span>First-time Swiggy users get the highest available discounts — typically 40%–60% off or a flat rupee discount on the first food delivery order. These Swiggy promo codes are app-specific and expire after first use.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Flat Rupee Off Coupons</span>
        <span>Common Swiggy offer codes offering a fixed amount (e.g. ₹75, ₹100, ₹125) off orders above a minimum cart value. Available to both new and existing users across food and Instamart orders.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Percentage Discount Codes</span>
        <span>Swiggy coupon codes offering a percentage off the total order — typically 10%–30% — with a maximum discount cap and minimum order requirement.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Free Delivery Codes</span>
        <span>A Swiggy discount code that waives the delivery fee on eligible orders. Swiggy One members receive this benefit automatically; non-members can unlock it through specific codes.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bank &amp; Payment Partner Offers</span>
        <span>Partner bank credit and debit cards (HDFC, Axis, SBI, ICICI, Kotak) offer additional cashback or instant discount on Swiggy orders — typically 10%–20%. These apply automatically when the eligible card is selected at checkout.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Swiggy One Member Exclusive Codes</span>
        <span>Active Swiggy One subscribers receive member-only Swiggy promo codes not available to non-members. These often offer higher discount values or broader applicability than public codes.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Instamart-Specific Codes</span>
        <span>Swiggy offer codes specifically for Instamart grocery orders — separate from food delivery codes. These cover fresh produce, packaged goods, and household essentials.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Dineout &amp; Dining Codes</span>
        <span>Swiggy discount codes applicable on Dineout restaurant bookings or bill payments — typically a percentage off or a flat discount on dining bills at partner restaurants.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Festive &amp; Seasonal Campaigns</span>
        <span>During Holi, Diwali, New Year, and IPL season, Swiggy runs time-limited Swiggy coupon codes with higher discount values. CouponsCrew tracks and lists these as they go live.</span>
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
          Save on Every Swiggy Order with a Verified Swiggy Coupon Code
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Swiggy is one of India's most versatile consumer platforms — and with the right Swiggy coupon code, every food delivery order, Instamart grocery run, or dining-out booking becomes significantly more affordable. Whether you're ordering swiggy biryani on a weeknight, restocking essentials via Swiggy Instamart, or booking a table through Dineout, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates Swiggy discount codes, Swiggy promo codes, and Swiggy offer codes daily so you don't have to search before every order. Every code on this page has been checked for validity before going live — no expired deals, no broken codes at checkout.
          </p>

          <p>
            From new user offers on Swiggy food delivery to bank card cashback, Swiggy One membership discounts, and Instamart-specific codes, this page covers the full range of savings available on Swiggy today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Swiggy Food Delivery Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Swiggy Food Delivery — How It Works and Where to Save
    </h3>
    <p className="mb-3">
      Swiggy food delivery connects users with thousands of restaurant partners across 700+ Indian cities. The platform's restaurant network spans local independents, national chains, cloud kitchen brands, and everything in between.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Key features of Swiggy's food delivery service include:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Real-time order tracking from restaurant confirmation to doorstep delivery</li>
      <li>Scheduled delivery for advance orders — useful for office lunches, parties, or late dinners</li>
      <li>Live order support for modification requests shortly after placing an order</li>
      <li>Swiggy delivery partner network — a fleet of independent delivery executives who handle last-mile fulfilment across all city sizes</li>
    </ul>
    <p className="mb-3">
      The Swiggy delivery partner app allows individuals to register as delivery partners and earn by completing food and grocery orders. This crowd-sourced model keeps Swiggy's delivery network scalable and responsive during peak hours.
    </p>
    <p>
      For consumers, Swiggy food delivery savings come from three main sources: Swiggy coupon codes applied at checkout, bank card cashback offers applied automatically with eligible cards, and Swiggy One membership benefits that reduce delivery fees and provide discount credits on food orders.
    </p>
  </div>

  {/* Swiggy Instamart Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Swiggy Instamart — Groceries and Essentials in Minutes
    </h3>
    <p className="mb-3">
      Swiggy Instamart is Swiggy's rapid commerce service, delivering groceries, fresh produce, dairy, household essentials, personal care products, electronics accessories, and daily-use items in 10–30 minutes across covered areas.
    </p>
    <p className="mb-3">
      Instamart operates through a network of dark stores — small, strategically located fulfilment centres stocked with high-demand products — rather than partnering with existing retail stores. This gives Instamart control over stock availability and delivery speed.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      What you can order on Swiggy Instamart:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Fresh fruits, vegetables, and dairy products</li>
      <li>Packaged grocery staples (atta, rice, oil, pulses, sugar)</li>
      <li>Snacks, beverages, and packaged foods</li>
      <li>Personal care and hygiene products</li>
      <li>Baby care products</li>
      <li>Electronics accessories and mobile charging cables</li>
      <li>Over-the-counter medicines and health products (in select cities)</li>
      <li>Swiggy Mart branded products — Swiggy's own private label range</li>
    </ul>
    <p>
      A Swiggy discount code specific to Instamart can be applied at the Instamart checkout, separate from food delivery coupons. Swiggy One members also receive Instamart-specific benefits including reduced delivery fees and order discounts on the quick commerce platform.
    </p>
  </div>

  {/* Swiggy One Membership Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Swiggy One Membership: Plans and Benefits
    </h3>
    <p className="mb-4">
      Swiggy One is Swiggy's paid membership programme — designed for frequent users who want consistent savings across food delivery, Instamart, and dining rather than one-time coupon discounts.
    </p>

    <div className="space-y-4 mb-4">
      <h4 className="text-lg font-bold text-[#2C2C40]">
        What Swiggy One Includes
      </h4>

      <div>
        <p className="font-semibold text-[#2C2C40] mb-1">Food Delivery Benefits:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Free delivery on eligible restaurant orders above a minimum order value</li>
          <li>Exclusive member-only Swiggy promo codes not available to non-members</li>
          <li>Priority customer support for order issues</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-[#2C2C40] mb-1">Instamart Benefits:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Free delivery on Instamart orders above the minimum order value</li>
          <li>Member-exclusive deals on selected grocery products</li>
          <li>Extra savings on Swiggy Mart branded products</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-[#2C2C40] mb-1">Dineout Benefits:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Up to 30% OFF on restaurant bills at Dineout partner restaurants</li>
          <li>Complimentary dishes or drinks at selected dining partners</li>
          <li>Access to exclusive dining experiences and curated restaurant offers</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-[#2C2C40] mb-1">Partner Benefits:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Discounts with Swiggy's partner brands across travel, entertainment, and lifestyle categories</li>
          <li>These vary by membership tier and are updated regularly</li>
        </ul>
      </div>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
        Swiggy One vs Swiggy One Lite
      </h4>
      <p className="mb-2">
        Swiggy offers two membership tiers:
      </p>
      <p className="mb-2">
        <strong className="text-[#2C2C40]">Swiggy One — </strong>the full membership covering all benefits across food delivery, Instamart, Dineout, and partner offers. Priced at a monthly or annual subscription rate, with the annual plan delivering significantly better per-month value.
      </p>
      <p className="mb-3">
        <strong className="text-[#2C2C40]">Swiggy One Lite — </strong>a lower-cost tier covering core food delivery and Instamart benefits without the full Dineout and partner perks. Suitable for users who primarily want delivery fee savings without the broader membership ecosystem.
      </p>
      <p>
        For frequent Swiggy users — those placing 8 or more food or grocery orders per month — Swiggy One typically pays for itself within the first two to three weeks. A Swiggy coupon code applied to the Swiggy One subscription purchase reduces the membership cost further.
      </p>
    </div>
  </div>

  {/* Swiggy Food Categories Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Swiggy Food Categories — What to Order and Where to Save
    </h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Swiggy Biryani
        </h4>
        <p>
          Biryani is consistently the most ordered food category on Swiggy across Indian cities. Swiggy biryani orders span a vast range — from local biryani specialists and cloud kitchen brands like Behrouz Biryani and Biryani Blues to regional chains and home-style restaurants. Weekend biryani orders on Swiggy frequently attract platform-level Swiggy promo codes targeting this high-demand category. Ordering Swiggy biryani during lunch hours (12 PM–2 PM) often comes with restaurant-level offers that stack with a Swiggy coupon code for combined savings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Pizza & Fast Food
        </h4>
        <p>
          Swiggy partners with Domino's, Pizza Hut, KFC, McDonald's, Burger King, and hundreds of independent pizzerias. Bank card discounts frequently stack on restaurant-level offers for fast food orders — making pizza and burger orders one of the highest-opportunity categories for combined Swiggy discount code savings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Healthy & Diet Food
        </h4>
        <p>
          The healthy food segment on Swiggy has expanded significantly, with calorie-labelled menus, salad specialists, and nutrition-forward cloud kitchens now available in most metro cities. These restaurants tend to have lower base discounts, making a Swiggy coupon code at checkout more impactful on the final price.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          South Indian & Regional Cuisine
        </h4>
        <p>
          Swiggy's restaurant partner network includes extensive coverage of South Indian, Bengali, Punjabi, Rajasthani, and other regional cuisines. Regional food ordering has grown fastest in Tier 2 and Tier 3 cities as Swiggy's network has expanded — and Swiggy promo codes apply equally across all cuisine categories.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Desserts & Beverages
        </h4>
        <p>
          Cake shops, ice cream brands, chai cafes, and juice bars are popular for quick single-item Swiggy orders. These categories often have lower minimum order values — useful when a Swiggy coupon code requires a minimum cart value to activate.
        </p>
      </div>
    </div>
  </div>

  {/* Genie Swiggy Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Genie Swiggy — Send Anything Across the City
    </h3>
    <p className="mb-3">
      Genie is Swiggy's pickup and drop service — a category distinct from food or grocery delivery. Genie Swiggy allows users to send documents, packages, or forgotten items across the city using Swiggy's delivery partner network.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Use cases for Genie Swiggy include:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-3">
      <li>Sending documents to an office or government office</li>
      <li>Delivering a forgotten item (phone charger, medicine, keys) to family or colleagues</li>
      <li>Intra-city courier for small packages</li>
      <li>Picking up a parcel from a location and delivering it to another</li>
    </ul>
    <p>
      Genie operates in select cities and is billed based on distance. It's particularly useful in metro areas where same-day courier alternatives are expensive or unreliable. Swiggy offer codes occasionally apply to Genie deliveries during promotional periods — check CouponsCrew for active Genie-specific discount codes.
    </p>
  </div>

  {/* Swiggy Restaurant Partner Programme Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Swiggy Restaurant Partner Programme
    </h3>
    <p className="mb-3">
      Swiggy's restaurant partner network is the backbone of its food delivery business. Independent restaurant owners, chain operators, and cloud kitchen brands can list on Swiggy through the Swiggy restaurant partner programme.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      The programme gives restaurant partners access to:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-3">
      <li>Swiggy's user base across 700+ cities</li>
      <li>Order management tools and real-time delivery tracking</li>
      <li>Marketing and promotion tools within the Swiggy app</li>
      <li>Business analytics on order patterns, peak hours, and customer preferences</li>
      <li>Swiggy's delivery infrastructure through the swiggy delivery partner network</li>
    </ul>
    <p>
      For consumers, the breadth of the Swiggy restaurant partner programme means a consistently expanding range of dining options — from established chains to neighbourhood favourites that may not be available on competing platforms.
    </p>
  </div>

  {/* Swiggy or Zomato Comparison Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
      Swiggy or Zomato? Which is Better?
    </h3>
    <p className="mb-4">
      For most people, the better platform comes down to the deal available at that moment. One app might have a bigger restaurant discount, while the other offers lower delivery fees, a better grocery deal, or stronger dining benefits. That's why many users check both Swiggy and Zomato before placing an order or booking a table.
    </p>

    <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#5B4FBE] text-white font-bold">
          <tr>
            <th className="p-3">Feature</th>
            <th className="p-3">Swiggy</th>
            <th className="p-3">Zomato</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Founded</td>
            <td className="p-3">2014</td>
            <td className="p-3">2008</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Primary Focus</td>
            <td className="p-3">Food delivery, quick commerce, dining, events, gifting</td>
            <td className="p-3">Food delivery, dining discovery, quick commerce</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Food Delivery Coverage</td>
            <td className="p-3">700+ cities</td>
            <td className="p-3">800+ cities</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Quick Commerce</td>
            <td className="p-3">Instamart — groceries, essentials, electronics</td>
            <td className="p-3">Blinkit — groceries, essentials, electronics</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Restaurant Network</td>
            <td className="p-3">Large mix of local restaurants, chains & cloud kitchens</td>
            <td className="p-3">Extensive network with strong discovery features</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Dining-Out Benefits</td>
            <td className="p-3">Dineout — deals, bill payments & table reservations</td>
            <td className="p-3">Zomato Dining and Gold — discounts and rewards</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Events & Experiences</td>
            <td className="p-3">Scenes — concerts, live events & experiences</td>
            <td className="p-3">District — event ticketing, movies & dining</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Gifting Services</td>
            <td className="p-3">Giftables — personalised gift discovery & delivery</td>
            <td className="p-3">No dedicated gifting platform</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Membership Programme</td>
            <td className="p-3">Swiggy One — food, Instamart, Dineout & partner benefits</td>
            <td className="p-3">Zomato Gold — food delivery and dining perks</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Restaurant Reviews</td>
            <td className="p-3">Ratings and reviews available</td>
            <td className="p-3">Industry-leading reviews, ratings & discovery</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Best For</td>
            <td className="p-3">Users wanting food, groceries, dining, events & gifting in one app</td>
            <td className="p-3">Users prioritising restaurant discovery & food delivery</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Discount Opportunities</td>
            <td className="p-3">Swiggy coupon codes, bank offers, Swiggy One perks, Instamart discounts, Dineout deals</td>
            <td className="p-3">Zomato coupon codes, bank offers, Zomato Gold benefits</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mb-3">
      <strong className="text-[#2C2C40]">Bottom line: </strong>Both platforms are strong. Swiggy's advantage lies in its all-in-one ecosystem — if you want food delivery, grocery delivery, dining bookings, event tickets, and gifting in a single app, Swiggy is the more complete platform. Zomato's advantage is its depth of restaurant discovery and review data, and its wider city coverage for food delivery.
    </p>
    <p>
      CouponsCrew lists verified Swiggy coupon codes and Zomato coupon codes on separate pages — check both before placing any order to find the best available deal.
    </p>
  </div>
</div>

          {/* How to Use Section */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Swiggy Coupon Code — Step by Step</h3>
            <p className="text-gray-700 font-bold -mt-4">Applying a Swiggy promo code or Swiggy offer code is simple. Here's how:</p>
            <div className="space-y-6">
              {[
                "Open Swiggy — Launch the Swiggy app on iOS or Android, or visit swiggy.com on your browser.",
                "Choose your category — Food delivery, Instamart, or Dineout depending on what you need.",
                "Add items to your cart — Browse restaurants or products and build your order.",
                "Proceed to checkout — Review your cart and tap \"Proceed to Pay.\"",
                "Apply your Swiggy coupon code — Look for the \"Apply Coupon\" field. Enter your Swiggy discount code from CouponsCrew and tap Apply.",
                "Confirm the discount — The reduced price will update in your order summary. If the code doesn't apply, check the minimum order value and eligibility conditions.",
                "Choose your payment method — UPI, credit/debit card, net banking, or Swiggy credits. Bank card cashback applies automatically with eligible cards.",
                "Place your order — Confirm and track your Swiggy delivery or Instamart order in real time."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-6">
              <strong className="text-[#5B4FBE]">Tip:</strong> Most Swiggy promo codes are app-exclusive. If a Swiggy coupon code isn't working on the website, try placing the order through the Swiggy app instead.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Swiggy Sale Calendar — Best Times to Use Your Swiggy Promo Code</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Period</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Offer Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { period: "Republic Day (Jan 26)", offer: "Flat off + cashback via Swiggy discount code" },
                    { period: "Valentine's Day (Feb 14)", offer: "Dining deals + food delivery offers" },
                    { period: "Holi (March)", offer: "Festive Swiggy promo code campaigns" },
                    { period: "IPL Season (Mar–May)", offer: "Match-night food delivery deals" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide Swiggy coupon code campaigns" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Festive cuisine and dining deals" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-traffic sale period — food & Instamart" },
                    { period: "New Year's Eve (Dec 31)", offer: "Party meal bundles + Swiggy offer code" },
                    { period: "Weekends (Sat–Sun)", offer: "Regular app-exclusive weekend deals" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.period}</td>
                      <td className="p-4 font-bold text-gray-700">{row.offer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Tip:</strong> Download the Swiggy app and enable push notifications. Swiggy sends limited-time Swiggy promo codes directly to users during peak periods — these disappear fast.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Swiggy Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Check CouponsCrew before every order. All Swiggy coupon codes listed here are verified before going live. A 60-second check regularly saves ₹75–₹300 per order.",
                "Get Swiggy One if you order frequently. For users placing 8 or more orders per month across food and Instamart, Swiggy One pays for itself quickly through free deliveries and member discounts.",
                "Stack a bank card cashback with a Swiggy coupon code. When the terms allow it, combining a Swiggy discount code with bank card cashback on a single order delivers the highest combined saving — particularly on larger Instamart grocery orders.",
                "Use Instamart for top-up grocery runs. Rather than a full weekly grocery shop (where per-unit prices may be slightly higher than a supermarket), Instamart works best for urgent top-ups — milk, bread, eggs — where the convenience and speed justify the slight price premium. A Swiggy offer code reduces this further.",
                "Order Swiggy biryani during off-peak lunch hours. Restaurants often run their own midday deals between 12 PM–2 PM that stack with a Swiggy promo code, making lunchtime one of the highest-value windows for food delivery savings.",
                "Compare Swiggy and Zomato before ordering. Both platforms frequently have different Swiggy coupon codes and Zomato coupon codes active at the same time. For the same restaurant, the better deal may be on whichever platform has a stronger code that day.",
                "Use Genie Swiggy for same-day intra-city courier needs. If you need to send a document or package across the city, Genie is often faster and more reliable than standard courier options in metro areas — especially when a Swiggy offer code reduces the delivery fee."
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
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
              Similar Platforms to Explore Alongside Swiggy
            </h3>
            <p className="mb-4">
              If you're comparing food delivery and quick commerce options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zomato — </strong>
              Food delivery and restaurant discovery with Zomato Gold dining benefits; check CouponsCrew for active Zomato coupon codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Blinkit — </strong>
              Zomato's rapid grocery delivery service, competing directly with Swiggy Instamart
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zepto — </strong>
              Rapid commerce platform focused on 10-minute grocery delivery in major cities
            </p>
            <p>
              <strong className="text-[#2C2C40]">BigBasket — </strong>
              Scheduled grocery delivery with a wide product range; stronger for weekly grocery shops
            </p>
            <p>
              <strong className="text-[#2C2C40]">Dunzo — </strong>
              Hyperlocal delivery covering food, groceries, and daily essentials
            </p>
            <p>
              <strong className="text-[#2C2C40]">EatSure — </strong>
              Multi-brand food court delivery featuring Faasos, Behrouz Biryani, and more
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major food delivery and quick commerce platforms. Visit individual store pages for verified codes before placing your next order.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Swiggy Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every Swiggy coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired Swiggy offer codes and adding new ones so every listing is accurate.
            </p>
            <p>
              Unlike sites that copy and paste outdated Swiggy discount codes from other pages, CouponsCrew focuses on accuracy and freshness. If a Swiggy promo code is listed here, it has been tested. If it stops working, it comes down promptly.
            </p>
            <p>
              Bookmark this page and check it before every Swiggy order — food delivery, Instamart, or Dineout. A 60-second check on CouponsCrew regularly saves ₹75–₹300 per order.
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
            Frequently Asked Questions About Swiggy Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a Swiggy coupon code?",
              a: "Open the Swiggy app or visit swiggy.com, add items to your cart, and proceed to checkout. Look for the \"Apply Coupon\" field, enter your Swiggy coupon code, and tap Apply. The discount will reflect in your order summary before you confirm payment."
            },
            {
              q: "Q2. Why is my Swiggy discount code not working?",
              a: "Common reasons include: the minimum order value hasn't been met, the code has expired, the restaurant or product isn't eligible, or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific Swiggy promo code you're using."
            },
            {
              q: "Q3. Can I use a Swiggy coupon code on Instamart orders?",
              a: "Some Swiggy coupon codes apply to both food delivery and Instamart, while others are category-specific. Check the terms of each code on CouponsCrew to confirm whether it applies to Instamart, food delivery, or both."
            },
            {
              q: "Q4. What is Swiggy One and is it worth it?",
              a: "Swiggy One is Swiggy's paid membership offering free delivery, member discounts, Dineout benefits, and partner perks across food delivery, Instamart, and dining. For users placing 8 or more orders per month, it typically pays for itself quickly. Apply a Swiggy coupon code when purchasing the Swiggy One subscription to reduce the membership cost."
            },
            {
              q: "Q5. What is Swiggy Instamart?",
              a: "Swiggy Instamart is Swiggy's rapid grocery delivery service, delivering fruits, vegetables, dairy, packaged foods, household essentials, and more in 10–30 minutes. It operates through dark stores rather than retail partnerships and is available in major Indian cities."
            },
            {
              q: "Q6. Are Swiggy promo codes only for the app?",
              a: "Most Swiggy coupon codes are app-exclusive. If a Swiggy discount code isn't working on the website, try redeeming it through the Swiggy app instead."
            },
            {
              q: "Q7. What is Genie on Swiggy?",
              a: "Genie is Swiggy's intra-city pickup and drop courier service. It allows users to send documents, packages, and items across the city using Swiggy's delivery partner network. Genie is available in select metro cities and is billed based on delivery distance."
            },
            {
              q: "Q8. How does Swiggy compare to Zomato?",
              a: "Swiggy covers food delivery, Instamart quick commerce, Dineout, Scenes (events), and Giftables in one app. Zomato covers food delivery, Blinkit quick commerce, and dining discovery with stronger restaurant review features. Both cover 700–800+ cities. CouponsCrew maintains separate verified coupon code pages for both platforms."
            },
            {
              q: "Q9. Can I use a Swiggy coupon code for dining out via Dineout?",
              a: "Some Swiggy offer codes apply to Dineout restaurant bookings and bill payments. These are category-specific — check the terms on CouponsCrew to confirm whether a Swiggy discount code covers Dineout or food delivery only."
            },
            {
              q: "Q10. How do I become a Swiggy delivery partner?",
              a: "Individuals can register as Swiggy delivery partners through the Swiggy delivery partner app, available on Android. The app handles onboarding, zone selection, order acceptance, and earnings tracking. Swiggy delivery partners can work flexible hours and earn per delivery completed."
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
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Swiggy Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Swiggy Coupons", "Swiggy Instamart Offers", "Swiggy First Order Code", "Swiggy One Pass", "Swiggy Biryani Deals", "Bank Card Cashback", "Swiggy vs Zomato", "Dineout Discount"].map(tag => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm hover:bg-[#5B4FBE] hover:text-[#5B4FBE] transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Swiggy Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat 50% Off First Order", sub: "App-exclusive promo code for new Swiggy food users" },
              { heading: "Instamart Grocery Savings", sub: "Up to ₹100 off on daily essentials and instant top-ups" },
              { heading: "Bank Card Cashback Offers", sub: "Extra savings using ICICI, HDFC, Axis & SBI cards" },
              { heading: "Swiggy One Free Delivery", sub: "Unlimited zero delivery fee on food & Instamart" },
              { heading: "Dineout Dining Discounts", sub: "Save up to 40% on restaurant bill payments via app" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Swiggy deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#FC8019]">{activeModalCoupon.code}</span> at Swiggy checkout for instant discounts.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
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
                className="w-full bg-[#FC8019] hover:bg-[#E37116] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Swiggy</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A2E] py-2 transition-colors cursor-pointer"
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
