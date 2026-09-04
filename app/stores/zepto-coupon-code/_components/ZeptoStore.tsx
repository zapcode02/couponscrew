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
import { Coupon, ZEPTO_COUPONS } from './zeptoCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.zepto.com/';

export default function ZeptoStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [newsSubmitting, setNewsSubmitting] = useState<boolean>(false);
  const [newsError, setNewsError] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Latest');

  const coupons: Coupon[] = ZEPTO_COUPONS;

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

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim() || newsSubmitting) return;

    setNewsSubmitting(true);
    setNewsError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsEmail.trim() }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed');
      }

      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 5000);
    } catch {
      setNewsError('Something went wrong. Please try again.');
      setTimeout(() => setNewsError(''), 5000);
    } finally {
      setNewsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'How do I use a Zepto coupon code?',
      a: 'To use a Zepto coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Zepto app. If it is a no-code deal, simply click "Get Deal" to open Zepto and the discount applies automatically.'
    },
    {
      q: 'Why is my Zepto coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum order value requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the offer details listed with each code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Zepto coupon code listed here is checked before publishing. Codes that stop working are flagged and removed so you only see offers that are currently active.'
    },
    {
      q: 'How often are Zepto coupons updated?',
      a: 'Our deals team reviews and updates Zepto coupons regularly. Expired promotions are filtered out, so you only spend time on codes that are currently working.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, Zepto allows only one promo code per order. However, coupon codes can often be combined with automatic sitewide offers or select bank/card discounts shown at checkout.'
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
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#5B4FBE] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#5B4FBE] font-semibold">Zepto Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp"
                      alt="Zepto Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Zepto</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Instant Grocery Delivery
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Discover Zepto coupon codes and offers for Aug 2026. Save up to 80% on selected electronics and appliances with a minimum cart value of ₹549. Plus, use QUICKSAVE200 to get an extra ₹200 OFF on eligible orders above ₹1,299.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> Active Offers
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
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Zepto</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.google.com/preferences/source?q=couponscrew.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95"
                >
                  <img
                    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp"
                    alt="Google Preferred Source"
                    className="h-[56px] w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center text-center p-8"
            >
              <div className="relative z-10 text-white space-y-3">
                <span className="inline-block bg-white/15 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Seasonal Offer
                </span>
                <h3 className="text-2xl font-black tracking-tight">Save Big on Every Grocery Run</h3>
                <p className="text-white/80 text-sm">Verified Zepto coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Active</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Verified Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 50%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Instant</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Zepto Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Zepto coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#5B4FBE) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#5B4FBE] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                {/* Soft Tint Badge using Accent (#FF5722) */}
                <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Valid on select grocery & daily essentials categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers selected products and categories.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#FF5722]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#FF5722) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#FF5722] hover:bg-[#E64A19] text-white"
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
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
                <Info size={16} className="text-[#5B4FBE]" />
                <span>About Zepto — Redefining Grocery Delivery Speed in India</span>
              </h3>

              <p className="text-[#1A1A2E] text-sm">
              Zepto was founded in 2021 by Aadit Palicha and Kaivalya Vohra — two Stanford University dropouts who returned to India with a bold idea: deliver groceries in under 10 minutes. At the time, 10-minute delivery seemed logistically implausible to most observers. Within two years, Zepto had proven the model at scale across India's major cities.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              Zepto's infrastructure is built around a dark store network — small, strategically located fulfilment centres stocked with high-demand products, positioned within 1.5–2 km of residential clusters. This hyperlocal warehouse model allows Zepto to dispatch orders within seconds of confirmation and complete deliveries before a conventional delivery app would finish assigning a rider.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              The company has grown from a Bangalore pilot to a 68-city operation with over 1,000 dark stores across India. In 2024 and 2025, Zepto raised significant funding rounds that valued the company at over $5 billion — making it one of the most capitalised startups in India's quick commerce segment alongside Blinkit and Swiggy Instamart.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              Beyond groceries, Zepto has expanded into Zepto Cafe (hot food and beverages prepared in-store), private label products, and a broader Zepto online shopping catalogue covering electronics accessories, personal care, home essentials, and more.
              </p>
                 <p className="text-[#1A1A2E] text-sm">
                For consumers, Zepto's combination of delivery speed, product breadth, and competitive pricing — further enhanced by a verified Zepto coupon code from CouponsCrew — makes it one of the most compelling daily-use shopping platforms available in India's covered cities.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Zepto</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Zepto Grocery Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Groceries, Fruits, Vegetables & more
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Zepto
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Fruits & Vegetables</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Dairy & Breakfast</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Snacks & Beverages</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Personal Care</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Household Essentials</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Zepto Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-5">
    Applying a Zepto discount code or Zepto promo code takes under a minute. Here&apos;s how:
  </p>

  <div className="space-y-5">
    <ol className="space-y-2.5 text-xs font-semibold text-[#4A4A6A]">
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Open the Zepto app — </span>
          <span>Download the Zepto app on iOS or Android and log in or create a new account.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Set your delivery address — </span>
          <span>Allow location access or manually enter your delivery pin code.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Browse and add items — </span>
          <span>Shop across categories from fresh produce to Zepto Cafe items and household essentials.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Proceed to checkout — </span>
          <span>Review your cart and tap &quot;Proceed to Pay.&quot;</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Apply your Zepto coupon code — </span>
          <span>Look for the &quot;Apply Coupon&quot; or &quot;Have a promo code?&quot; field. Enter your Zepto offer code from CouponsCrew and tap Apply.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Confirm the discount — </span>
          <span>The reduced price will update in your order total before payment.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Choose your payment method — </span>
          <span>UPI, credit/debit card, net banking, cash on delivery, or wallet.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">8</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Place your order — </span>
          <span>Confirm and track your Zepto delivery in real time — typically under 10 minutes.</span>
        </div>
      </li>
    </ol>

    {/* Tip Box */}
    <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-3.5 flex items-start gap-2.5">
      <div className="text-xs text-[#2C2C40]">
        <span className="font-bold text-[#2C2C40]">Tip: </span>
        <span>The best Zepto promo codes are app-exclusive. If a code isn&apos;t working, ensure you&apos;re using the Zepto app rather than a browser. Some Zepto discount codes also apply only to specific product categories — check the terms on CouponsCrew before applying.</span>
      </div>
    </div>
  </div>
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
          Save on Every Zepto Order with a Verified Zepto Coupon Code
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
          {ZEPTO_COUPONS.map((coupon) => (
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
            Zepto is India's fastest-growing quick commerce platform — and with the right Zepto coupon code, every grocery run, household essential, or Zepto Cafe order becomes noticeably more affordable. Whether you're stocking up on weekly groceries via Zepto online grocery, ordering a last-minute ingredient from the Zepto grocery store, or grabbing a quick bite through Zepto Cafe, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates Zepto discount codes, Zepto promo codes, and Zepto offer codes daily so you don't have to search before every order. Every code on this page has been checked for validity before going live — no expired deals, no failed codes at checkout.
          </p>

          <p>
            From new user Zepto promo codes to Zepto referral codes, bank card cashback, and category-specific Zepto offer codes, this page covers the full range of savings available on Zepto today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Product Categories at Zepto Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Product Categories at Zepto
    </h3>
    <p className="mb-4">
      Zepto has evolved from a pure grocery delivery app into a broad quick commerce platform. Here's a breakdown of every major product category available on Zepto online shopping today:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Fresh Fruits & Vegetables
        </h4>
        <p>
          Zepto sources fresh produce daily and stocks it across its dark store network. Fruits, vegetables, and leafy greens are among the fastest-moving SKUs on the platform — and among the highest-demand categories for Zepto coupon codes, given the frequency of purchase and price sensitivity around fresh produce.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Dairy, Eggs & Bakery
        </h4>
        <p>
          Milk, curd, paneer, butter, cheese, eggs, bread, and bakery items are available for immediate delivery across all Zepto-covered cities. Dairy and eggs are typically same-session purchase decisions — Zepto's under-10-minute delivery is particularly well-suited to this category.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Staples & Packaged Groceries
        </h4>
        <p>
          Atta, rice, dal, cooking oils, sugar, salt, spices, and packaged food staples form the core of Zepto's grocery store offering. These are high-volume, recurring purchases where a Zepto discount code applied consistently across weekly orders delivers significant cumulative savings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Snacks, Beverages & Packaged Foods
        </h4>
        <p>
          Chips, biscuits, namkeen, chocolates, soft drinks, juices, energy drinks, instant noodles, and packaged ready-to-eat items are prominently featured on Zepto. This category is particularly popular for impulse Zepto online grocery orders.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Personal Care & Hygiene
        </h4>
        <p>
          Shampoo, conditioner, face wash, moisturiser, sunscreen, body wash, toothpaste, and deodorants are available across top brands. Personal care is one of Zepto's fastest-growing product categories as users shift from planned monthly purchases to on-demand replenishment.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Baby & Mother Care
        </h4>
        <p>
          Baby food, diapers, baby wipes, baby skincare, and maternity products are stocked across Zepto dark stores. For parents of young children, the ability to order diapers or baby formula for delivery in under 10 minutes at any hour is a genuinely high-value use case.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Household & Cleaning Essentials
        </h4>
        <p>
          Dishwashing liquid, floor cleaners, laundry detergent, toilet cleaners, garbage bags, and surface disinfectants are available on Zepto. A Zepto offer code on household essentials reduces the cost of routine home maintenance products.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Medicines & Healthcare (Select Cities)
        </h4>
        <p>
          Over-the-counter medicines, health supplements, first-aid products, and OTC pain relief are available in select Zepto cities. This category is expanding as Zepto moves toward a more comprehensive convenience store model.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Electronics Accessories & Mobile
        </h4>
        <p>
          Phone chargers, cables, power banks, earphones, screen protectors, and similar accessories are available on Zepto for immediate delivery. This category is particularly useful for urgent replacements of failed accessories.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Pet Supplies
        </h4>
        <p>
          Pet food, cat litter, pet grooming products, and accessories are stocked across Zepto's dark stores in major cities — a growing category as urban pet ownership increases.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Zepto Private Label
        </h4>
        <p>
          Zepto operates its own private label brand across selected grocery and household categories — offering quality products at lower price points than equivalent branded alternatives. Private label products are typically priced 15%–25% below branded equivalents and are not available on competing platforms.
        </p>
      </div>
    </div>
  </div>

  {/* What is Zepto Cafe? Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      What is Zepto Cafe?
    </h3>
    <p className="mb-3">
      Zepto Cafe is one of the most distinctive features of the Zepto platform — and one that sets it apart from pure-play grocery delivery competitors like Blinkit and BB Now.
    </p>
    <p className="mb-4">
      Zepto Cafe is an in-dark-store food and beverage preparation service. Rather than partnering with existing restaurants, Zepto prepares hot food, freshly brewed coffee, sandwiches, wraps, and ready-to-eat snacks directly within its dark stores — which are equipped with basic food preparation infrastructure for this purpose.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          What Zepto Cafe Offers
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Hot Beverages</strong> — Freshly brewed filter coffee, masala chai, cappuccino, and seasonal hot drinks</li>
          <li><strong>Cold Beverages</strong> — Cold brew, iced coffee, cold tea, and flavoured drinks</li>
          <li><strong>Breakfast Items</strong> — Idli, poha, upma, sandwiches, and toasts prepared in-store</li>
          <li><strong>Snacks & Light Meals</strong> — Samosas, rolls, wraps, maggi variants, and other quick-serve items</li>
          <li><strong>Desserts</strong> — Brownies, muffins, and seasonal sweet items</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Why Zepto Cafe Matters
        </h4>
        <p className="mb-3">
          Zepto Cafe turns Zepto from a grocery delivery app into a food delivery platform — without needing a restaurant partner network. The preparation happens in the dark store and the item reaches the customer in under 10 minutes, which is faster than most restaurant delivery options in the same geography.
        </p>
        <p className="font-semibold text-[#2C2C40] mb-2">
          For consumers, Zepto Cafe is particularly useful for:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Morning breakfast delivery without waiting for a restaurant to open or process an order</li>
          <li>Quick office snack delivery without the minimum order values and longer wait times of food delivery apps</li>
          <li>Evening chai or coffee on demand without stepping out</li>
        </ul>
        <p>
          A Zepto coupon code or Zepto discount code applicable to Zepto Cafe orders makes these quick food orders even more affordable — check CouponsCrew for active Cafe-specific codes before ordering.
        </p>
      </div>
    </div>
  </div>

  {/* Where Is Zepto Available in India? Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Where Is Zepto Available in India?
    </h3>
    <p className="mb-4">
      Zepto currently operates in 68+ cities across India, with a dark store network of over 1,000 fulfilment centres. Coverage is strongest in metro cities and major Tier 2 markets, with continued expansion into new geographies announced regularly.
    </p>

    <p className="font-semibold text-[#2C2C40] mb-3">
      Zepto is currently live in these cities (and more):
    </p>

    {/* Formatted Responsive City Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
      <div>Mumbai</div>
      <div>Delhi</div>
      <div>Bengaluru</div>
      <div>Hyderabad</div>
      <div>Chennai</div>
      <div>Kolkata</div>
      <div>Pune</div>
      <div>Ahmedabad</div>
      <div>Jaipur</div>
      <div>Lucknow</div>
      <div>Surat</div>
      <div>Chandigarh</div>
      <div>Indore</div>
      <div>Bhopal</div>
      <div>Nagpur</div>
      <div>Coimbatore</div>
      <div>Kochi</div>
      <div>Visakhapatnam</div>
      <div>Vadodara</div>
      <div>Patna</div>
      <div>Bhubaneswar</div>
      <div>Agra</div>
      <div>Mysuru</div>
      <div>Nashik</div>
      <div>Gurgaon</div>
      <div>Noida</div>
      <div>Faridabad</div>
      <div>Ghaziabad</div>
      <div>Thane</div>
      <div>Navi Mumbai</div>
      <div>Kalyan</div>
      <div>Pimpri-Chinchwad</div>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
        How to check if Zepto delivers to your pin code:
      </h4>
      <p className="mb-3">
        Open the Zepto app, allow location access or manually enter your pin code. The app will confirm delivery availability and show the estimated delivery time for your area. If your pin code is not currently covered, Zepto's expansion means coverage may be available soon — check back periodically.
      </p>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p>
          <strong className="text-[#2C2C40]">Note: </strong>Zepto Cafe availability within a city may be limited to specific dark stores that have food preparation infrastructure installed. The app will indicate whether Zepto Cafe is available for your specific delivery location.
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="space-y-6 text-slate-700">
  {/* Zepto Referral Code — Earn and Save Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Zepto Referral Code — Earn and Save
    </h3>
    <p className="mb-3">
      Zepto's referral programme is one of the most accessible ways to save on the platform without relying on a specific Zepto coupon code.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Here's how the Zepto referral code programme works:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Existing users share their unique Zepto referral code with friends or family</li>
      <li>New users who sign up using the referral code receive a discount or free delivery credit on their first order</li>
      <li>Referring users receive a reward — typically free delivery credits or cashback — when the referred user completes their first eligible order</li>
    </ul>

    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
      <p>
        <strong className="text-[#2C2C40]">To find your Zepto referral code: </strong>open the Zepto app → tap the Profile or Account section → look for "Refer & Earn" or "Invite Friends." Your unique Zepto referral code is displayed there and can be shared via WhatsApp, SMS, or any messaging platform.
      </p>
    </div>

    <p>
      For new Zepto users, using a Zepto referral code at signup stacks on top of any new-user Zepto promo code — delivering the maximum combined saving on the first order.
    </p>
  </div>

  {/* Types of Zepto Discount Codes & Offers Available Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Types of Zepto Discount Codes & Offers Available
    </h3>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          New User Zepto Promo Code
        </h4>
        <p>
          First-time Zepto users are eligible for the highest available discounts — typically 30%–50% off the first order or a flat rupee discount. New user Zepto promo codes are one-time use and expire after the first completed order.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Flat Rupee Off Codes
        </h4>
        <p>
          Common Zepto offer codes offering a fixed rupee discount (e.g. ₹50, ₹75, ₹100) on orders above a minimum cart value. Available to both new and existing users depending on the code.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Percentage Discount Codes
        </h4>
        <p>
          Zepto coupon codes offering a percentage off the total order — typically 10%–25% — with a maximum discount cap and minimum order requirement.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Free Delivery Codes
        </h4>
        <p>
          A Zepto discount code that waives the delivery fee on eligible orders. Particularly useful on smaller cart sizes where the delivery fee represents a significant percentage of the total order value.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Category-Specific Codes
        </h4>
        <p>
          Certain Zepto offer codes apply only to specific categories — fresh produce only, Zepto Cafe only, or personal care products only. Check the terms on CouponsCrew before applying to confirm the code covers your items.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Bank & Payment Partner Offers
        </h4>
        <p>
          Partner bank credit and debit cards (HDFC, Axis, SBI, ICICI) and UPI apps periodically offer cashback on Zepto orders. These apply automatically when the eligible payment method is selected at checkout.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Zepto Referral Code
        </h4>
        <p>
          As covered above — the Zepto referral code programme gives both referrer and new user rewards. It's a reliable ongoing savings mechanism that doesn't depend on time-limited promotional campaigns.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Seasonal & Festive Codes
        </h4>
        <p>
          During Diwali, Holi, New Year, and major sale periods, Zepto runs festive Zepto coupon codes with higher discount values or storewide applicability. CouponsCrew tracks and lists these as they go live.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Zepto vs Blinkit vs Swiggy Instamart vs BB Now</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Zepto</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Blinkit</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Swiggy Instamart</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">BB Now</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Delivery Speed", zepto: "Under 10 minutes", blinkit: "10 to 15 minutes", instamart: "15 to 45 minutes", bbNow: "10 to 30 minutes" },
                    { feature: "City Coverage", zepto: "68+ cities", blinkit: "30+ major cities", instamart: "580+ cities", bbNow: "Select metros & Tier 2 cities" },
                    { feature: "Dark Store Network", zepto: "1,000+ stores", blinkit: "1,000+ stores", instamart: "Integrated with Swiggy", bbNow: "BigBasket fulfilment centres" },
                    { feature: "Unique Strength", zepto: "Ultra-fast delivery", blinkit: "Widest SKU range", instamart: "Largest geographic reach", bbNow: "Trusted fresh produce supply chain" },
                    { feature: "Payment Options", zepto: "UPI, cards, COD, wallet", blinkit: "UPI, cards, COD, wallet", instamart: "UPI, cards, COD, wallet", bbNow: "UPI, cards, COD, wallet" },
                    { feature: "Cafe / Food Option", zepto: "Yes — Zepto Cafe", blinkit: "No", instamart: "Via Swiggy food integration", bbNow: "No" },
                    { feature: "Coupon Codes", zepto: "Zepto coupon code", blinkit: "Blinkit coupon code", instamart: "Swiggy Instamart promo code", bbNow: "BB Now coupon" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.zepto}</td>
                      <td className="p-4 font-bold text-gray-700">{row.blinkit}</td>
                      <td className="p-4 font-bold text-gray-700">{row.instamart}</td>
                      <td className="p-4 font-bold text-gray-700">{row.bbNow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Bottom line:</strong> For the fastest delivery in covered cities, Zepto is unmatched — under 10 minutes is a genuine differentiator. For widest city coverage, Swiggy Instamart reaches the most locations. For broadest product variety, Blinkit leads. For fresh produce quality and supply chain reliability, BB Now has an edge. CouponsCrew maintains verified coupon code pages for all four platforms — check before ordering on any of them.
            </p>
          </div>

          {/* Best Alternatives */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Best Alternatives to Zepto
            </h3>
            <p className="mb-4">
              If Zepto does not serve your pin code or you want to compare options before ordering, here are three strong alternatives in the quick commerce space:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Blinkit — </strong>
              Blinkit, backed by Zomato, is India's largest quick commerce platform by market share, holding around 46% of the segment. It operates across 30+ cities with 1,000+ dark stores and offers a wider SKU catalogue than most competitors, making it well-suited for shoppers who prioritise variety alongside speed. You can save additionally using Blinkit coupon codes available on CouponsCrew.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy Instamart — </strong>
              Swiggy Instamart is the quick commerce arm of Swiggy and covers the widest geography among all Q-commerce apps, operating across 580+ cities. It is the most accessible option for users in Tier 2 and Tier 3 towns where Zepto and Blinkit do not yet operate. Regular users of Swiggy's food delivery will find the unified app experience convenient. Check the latest Swiggy Instamart promo codes on CouponsCrew for extra value on grocery orders.
            </p>
            <p>
              <strong className="text-[#2C2C40]">BB Now — </strong>
              BB Now is the 10-to-30-minute delivery service from BigBasket, one of India's oldest online grocery platforms. It draws on BigBasket's established supply chain and focus on fresh produce, making it a reliable option for households that prioritise quality over delivery speed alone. Active BB Now coupons are available on CouponsCrew before placing your order.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Zepto Sale Calendar — Best Times to Use Your Zepto Promo Code</h3>
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
                    { period: "New Year (Jan 1)", offer: "New-year Zepto promo code campaigns" },
                    { period: "Republic Day (Jan 26)", offer: "Flat OFF on grocery orders" },
                    { period: "Holi (March)", offer: "Festive Zepto discount code" },
                    { period: "Summer Season (Apr–Jun)", offer: "Beverage & cooling product deals" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide Zepto coupon code" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Festive grocery & snack offers" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-value Zepto offer code period" },
                    { period: "New Year's Eve (Dec 31)", offer: "Party essential bundles + Zepto discount code" },
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
              <strong className="text-[#5B4FBE]">Tip:</strong> Zepto pushes limited-time Zepto promo codes via app notifications during flash sale windows. Enable push notifications on the Zepto app so you don't miss time-sensitive deals.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Zepto Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Apply a Zepto coupon code before every order. All Zepto discount codes on CouponsCrew are verified before going live. A 60-second check can save ₹50–₹200 per grocery order.",
                "Use a Zepto referral code when signing up. New users who register with a valid Zepto referral code receive a discount or free delivery credit on their first order — the easiest first saving available on the platform.",
                "Meet the minimum order threshold smartly. Rather than padding your cart with items you don't need to unlock a Zepto offer code, plan your order around products you'd genuinely buy — staples, dairy, or personal care items that would otherwise be purchased later in the week.",
                "Order Zepto Cafe during morning hours. Zepto Cafe items are freshest in the morning when in-store preparation is most active. Morning Zepto Cafe orders also frequently attract breakfast-specific Zepto promo codes during promotional periods.",
                "Stack a bank card cashback with a Zepto coupon code. Where terms permit, combining a Zepto discount code with a bank card cashback on a single order delivers the highest combined saving — particularly on larger grocery orders above ₹500.",
                "Buy private label products for regular staples. Zepto's private label range offers quality equivalents to branded staples at 15%–25% lower prices. Choosing private label products on recurring purchases reduces your basket cost independently of any Zepto offer code.",
                "Compare with Blinkit and Instamart before ordering. CouponsCrew maintains active coupon pages for Blinkit and Swiggy Instamart as well. On any given day, one platform may have a stronger active promo code than another — a quick comparison before placing your order can deliver better savings."
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
              Similar Platforms to Explore Alongside Zepto
            </h3>
            <p className="mb-4">
              If you're comparing quick commerce and online grocery options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Blinkit — </strong>
              Zomato-backed quick commerce leader with widest product variety; check CouponsCrew for Blinkit coupon codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy Instamart — </strong>
              Widest city coverage for quick commerce; active Swiggy promo codes on CouponsCrew
            </p>
            <p>
              <strong className="text-[#2C2C40]">BB Now (BigBasket) — </strong>
              10–30 minute delivery with trusted fresh produce supply chain; BB Now coupons on CouponsCrew
            </p>
            <p>
              <strong className="text-[#2C2C40]">JioMart — </strong>
              Online grocery from Reliance with strong staples catalogue and regular JioMart coupon codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon Fresh — </strong>
              Amazon's grocery delivery service with Prime member benefits; check CouponsCrew for Amazon coupon codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Dunzo — </strong>
              Hyperlocal delivery covering groceries, food, and daily essentials in select cities
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major quick commerce and online grocery platforms. Visit individual store pages for verified, up-to-date discount codes before placing your next order.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Zepto Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every Zepto coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired Zepto offer codes and adding new ones so every listing is accurate and working.
            </p>
            <p>
              Grocery delivery is a high-frequency purchase category — most households order multiple times per week. A verified Zepto discount code from CouponsCrew applied consistently across weekly orders delivers meaningful cumulative savings over a month.
            </p>
            <p>
              Bookmark this page and check it before every Zepto order — fresh produce, packaged groceries, personal care, or Zepto Cafe. A 60-second check on CouponsCrew regularly saves ₹50–₹200 per order.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About Zepto Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a Zepto coupon code?",
              a: "Open the Zepto app, add items to your cart, and proceed to checkout. Look for the \"Apply Coupon\" or \"Have a promo code?\" field, enter your Zepto coupon code from CouponsCrew, and tap Apply. The discounted price will update in your order total before payment."
            },
            {
              q: "Q2. Why is my Zepto promo code not working?",
              a: "Common reasons include: the code has expired, the minimum order value hasn't been met, the code applies to a specific product category only, or it's a new-user code and your account is already registered. Check the terms on CouponsCrew for the specific Zepto discount code you're using."
            },
            {
              q: "Q3. What is the Zepto referral code and how do I use it?",
              a: "The Zepto referral code is a unique code that existing users share with friends. New users who sign up with a referral code receive a discount or free delivery credit on their first order. Find your own referral code in the Zepto app under \"Refer & Earn\" and share it to earn rewards when friends complete their first order."
            },
            {
              q: "Q4. What is Zepto Cafe?",
              a: "Zepto Cafe is an in-dark-store food and beverage preparation service — hot coffee, chai, sandwiches, breakfast items, and snacks prepared within Zepto's dark stores and delivered in under 10 minutes. It's available in select cities and dark stores where food preparation infrastructure is installed. Check the Zepto app to see if Zepto Cafe is available at your delivery location."
            },
            {
              q: "Q5. In which cities is Zepto available?",
              a: "Zepto operates in 68+ Indian cities including Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, Surat, Chandigarh, Indore, Coimbatore, Kochi, and many more. Check the Zepto app with your pin code for the most current availability."
            },
            {
              q: "Q6. Can I use a Zepto coupon code on Zepto Cafe orders?",
              a: "Some Zepto offer codes apply to Zepto Cafe items in addition to grocery products, while others are category-specific. Check the terms of the specific Zepto discount code on CouponsCrew before applying to confirm Cafe items are eligible."
            },
            {
              q: "Q7. How does Zepto deliver in under 10 minutes?",
              a: "Zepto's delivery speed is enabled by its dark store network — small hyperlocal fulfilment centres positioned within 1.5–2 km of residential clusters. When you place an order, the nearest dark store that stocks your items processes and dispatches it within seconds. A Zepto delivery partner assigned to your order completes the last-mile delivery within the 10-minute window."
            },
            {
              q: "Q8. Does Zepto offer cash on delivery?",
              a: "Yes. Zepto accepts cash on delivery alongside UPI, credit/debit cards, net banking, and digital wallets. Note that Zepto coupon codes can generally be applied regardless of the payment method selected, though bank card cashback offers are payment-method specific."
            },
            {
              q: "Q9. Are there Zepto discount codes for existing users?",
              a: "Yes. Zepto regularly offers discount codes for existing users through app notifications, bank card partnerships, and seasonal campaigns. The Zepto referral code programme also provides ongoing rewards. CouponsCrew lists both new-user and all-user Zepto promo codes clearly — check the label on each code before applying."
            },
            {
              q: "Q10. How does Zepto compare to Blinkit and Swiggy Instamart?",
              a: "Zepto is fastest (under 10 minutes), Blinkit has the widest SKU range, and Swiggy Instamart covers the most cities (580+). For users in Zepto's covered cities who prioritise speed and also want Zepto Cafe, Zepto is the strongest daily-use quick commerce option. CouponsCrew maintains coupon code pages for all three platforms."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Zepto Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Zepto First Order Code", "Zepto Referral Code", "Zepto Cafe Offers", "10 Min Grocery Deals", "Zepto Super Saver", "Zepto vs Blinkit", "Daily Essentials Discount", "Zepto Bank Offers"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Zepto Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "First Order Discount", sub: "Flat off + free delivery on your first Zepto grocery order" },
              { heading: "Zepto Cafe Combo Deal", sub: "Up to 20% off on breakfast, coffee & snack combos" },
              { heading: "Fresh Produce Special", sub: "Discounted rates on daily fruits and vegetables" },
              { heading: "Super Saver Pack", sub: "Extra savings on monthly grocery & household bundles" },
              { heading: "Bank Card Cashback", sub: "Instant cashback with select credit/debit card payments" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">Z</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Zepto deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Zepto checkout for instant discounts.
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
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Zepto</span>
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
