'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Tag,Sparkles,
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
import { Coupon, LIFESTYLE_COUPONS } from './lifestyleCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.lifestylestores.com';

export default function LifestyleStore() {
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

  const coupons: Coupon[] = LIFESTYLE_COUPONS;

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
      q: 'How do I use a Lifestyle coupon code?',
      a: 'To use a Lifestyle coupon code, browse verified codes here on CouponScrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Lifestyle website or app. If it is a deal, simply click "Visit Lifestyle" to get the discount auto-applied.'
    },
    {
      q: 'Does Lifestyle have a loyalty or rewards program?',
      a: 'Yes, Lifestyle runs a loyalty/rewards programme (commonly known as "The Inner Circle") for registered members that offers reward points on purchases and periodic member-only offers. Exact terms and point values can change, so it is best to check the current programme details on the Lifestyle website or app before shopping.'
    },
    {
      q: "What is Lifestyle's return and exchange policy?",
      a: 'Lifestyle generally allows returns and exchanges within a limited window from the date of purchase, provided the product is unused, with original tags and packaging intact. Policies can vary slightly by product category (such as innerwear or sale items) and by whether the purchase was made online or in-store, so it is worth checking the specific return terms shown on your invoice or order page.'
    },
    {
      q: 'Why is my Lifestyle coupon code not working?',
      a: 'A coupon might not work due to category exclusions (some codes only apply to fashion or only to home products), minimum spend requirements, an expired validity date, or user eligibility restrictions such as first-order-only codes.'
    },
    {
      q: 'Does Lifestyle have physical stores in India?',
      a: 'Yes. Lifestyle is a large-format department store chain with stores across many Indian cities, in addition to its online store and app. You can often browse online and choose to pick up or shop in person depending on availability at your nearest store.'
    },
    {
      q: 'Where can I find the best Lifestyle offers?',
      a: 'We keep this Lifestyle store page updated with the latest discounts, verified coupon codes, and seasonal sale information across fashion, footwear, and home categories, refreshed regularly by our deals team.'
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
            <span className="text-[#5B4FBE] font-semibold">Lifestyle Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/lifestyle-logo_l1gsbd.webp"
                      alt="Lifestyle Logo"
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
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Lifestyle Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Fashion, Footwear & Home
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Lifestyle coupon codes and promo codes to save up to 70% OFF on fashion, footwear, home décor, and kids' wear. Enjoy an extra 10% OFF with code SELECT10, ₹500 OFF on ₹2,500+ orders, plus BOGO offers and seasonal discounts.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 50+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
<div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
  <a
    href={AFFILIATE_URL}
    target="_blank"
    rel="noopener noreferrer nofollow sponsored"
    className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
  >
    <span>Visit Lifestyle</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only, gradient panel reusing logo since no banner asset exists */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center gap-6 p-8 text-center"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-40px] w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10 bg-white rounded-2xl p-5 shadow-lg w-28 h-28 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/lifestyle-logo_l1gsbd.webp"
                  alt="Lifestyle"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative z-10 text-white space-y-2">
                <h3 className="font-extrabold text-xl tracking-tight">Lifestyle Fashion Sale</h3>
                <p className="text-white/80 text-sm">Up to 60% OFF on Fashion, Footwear & Home</p>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 70%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹5,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Lifestyle Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Lifestyle coupon codes & offers.</p>
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
            <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
                        </span>
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

              <h3 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                {coupon.title}
                          </h3>

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
                    <span>Valid on select fashion, footwear & home categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">



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
                <span>New Trends, New Style, New Offers</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Lifestyle stores in India carry over 500 brands across fashion, footwear, beauty, and home — making it one of the broader multi-brand retail destinations in the country. The website and app mirror the in-store experience with regular new arrivals across all departments, seasonal collections, and ongoing offers that change week to week.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
               What keeps shoppers returning to Lifestyle beyond the range is the deal structure: free shipping thresholds, Click & Collect for in-store pickup, and regular promo windows that run alongside new collection launches. Using a lifestyle offer code from CouponsCrew on top of an ongoing sale or new-arrival discount is where the best combined savings happen.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Lifestyle also runs a LUXE category for premium and luxury-adjacent products — watches, designer bags, and elevated fashion — alongside its core mid-market range. The breadth from everyday basics to LUXE in one checkout experience is what sets Lifestyle apart from category-specific retailers.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Lifestyle</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Lifestyle Fashion Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Fashion, Footwear & Home
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
                Top Categories at Lifestyle
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Women's Fashion</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Men's Fashion</span>
                  <span className="text-[#FF5722] font-bold">Up to 55% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kids Wear</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Footwear</span>
                  <span className="text-[#FF5722] font-bold">Up to 65% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Home & Furnishings</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card: Save While Shopping at Lifestyle with CouponsCrew */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Save While Shopping at Lifestyle with CouponsCrew
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    CouponsCrew verifies every Lifestyle deal before it goes live on this page. The active deals typically include:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Site-wide lifestyle coupon codes</span>
        <span>apply across Women, Men, Kids, Footwear, Bags, and Beauty</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Category-specific codes</span>
        <span>footwear only, beauty only, or home & living promotions</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">App-exclusive promo codes</span>
        <span>valid only on the Lifestyle app at checkout</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New user offers</span>
        <span>first-purchase discounts for shoppers new to Lifestyle online</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Festive and seasonal codes</span>
        <span>Diwali, EOSS, Republic Day, and other event-specific deals</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Free shipping codes</span>
        <span>waive delivery charges on orders that don't meet the free shipping threshold</span>
      </div>
    </li>
  </ul>

  <p className="text-xs font-semibold text-[#4A4A6A] mt-4 pt-3 border-t border-[#E8E8F0]">
    Every code here is checked before going live. If something expires between updates, the deal note on the page reflects that — look for the next working code below it.
  </p>
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
          Lifestyle Coupon Code: Save on Fashion, Footwear, Beauty & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            A verified Lifestyle coupon code at checkout is the straightforward way to pay less on fashion, footwear, beauty, and home products in India. CouponsCrew lists active Lifestyle discount codes across all categories — Women, Men, Kids, Footwear, Bags, Beauty, Home & Living, Babyshop, Gen Z, Watches, and LUXE — so you get the right deal before completing your order.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Shop Lifestyle Categories with a Coupon Code
    </h3>
    <p>
      Lifestyle India organises its catalogue across eleven main categories. Here's what each one covers and what's worth shopping with a lifestyle promo code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Women: </strong>
      The Women's section is Lifestyle's broadest department — ethnic wear, western wear, activewear, innerwear, and accessories all sit here. Key sub-categories include:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Kurtas and Suits — everyday and festive ethnic wear from brands including W, Aurelia, and Biba</li>
      <li>Dresses and Tops — casual and semi-formal western wear</li>
      <li>Jeans and Trousers — regular, slim, and wide-leg fits from brands including Lee, Wrangler, and Pepe Jeans</li>
      <li>Activewear — sports bras, leggings, and training tops</li>
      <li>Sarees and Dupattas — occasion wear and daily drapes</li>
    </ul>
    <p>
      Women's fashion at Lifestyle covers a wider price range than most standalone fashion stores — from high-street accessible to premium branded wear in the same checkout.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Men: </strong>
      The Men's section covers casual, formal, and sport across clothing and accessories:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>T-Shirts and Shirts — casual tees, polo shirts, printed and plain formal shirts</li>
      <li>Jeans and Trousers — slim, straight, and cargo fits from Lee, Levi's, and Wrangler</li>
      <li>Activewear — training tees, joggers, and shorts for sport and gym</li>
      <li>Ethnic Wear — kurtas and kurta sets for festive and casual occasions</li>
      <li>Jackets and Sweatshirts — layering options across casual and semi-formal</li>
    </ul>
    <p>
      A lifestyle coupon code applied to the Men's section works well during End of Season Sale (EOSS) windows when brands like Lee, Levi's, and Allen Solly are discounted across the catalogue.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Kids: </strong>
      Lifestyle's Kids section covers clothing, footwear, and accessories for toddlers through to early teens:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Everyday tops, tees, and jeans</li>
      <li>School-ready clothing and footwear</li>
      <li>Ethnic wear for kids (festive and occasion)</li>
      <li>Activewear and sports shoes for older children</li>
      <li>Character merchandise and casual summer clothing</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Footwear: </strong>
      Footwear is one of Lifestyle's strongest departments — it stocks brands across sport, casual, and formal in one place:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Sports and Training — Nike, Adidas, Puma, Reebok, and Skechers</li>
      <li>Casual and Sneakers — Converse, Vans, Clarks, and branded lifestyle shoes</li>
      <li>Formal — leather and leatherette shoes for office and occasion</li>
      <li>Sandals and Flats — women's and men's everyday footwear</li>
      <li>Kids' Footwear — school shoes, sandals, and sports shoes for children</li>
    </ul>
    <p>
      A discount code for lifestyle on footwear is particularly useful during EOSS — branded sports shoes are often discounted further.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Bags: </strong>
      The Bags section covers handbags, backpacks, totes, clutches, and luggage:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Women's handbags and sling bags across casual and formal</li>
      <li>Backpacks for school, college, and travel</li>
      <li>Men's messenger bags and wallets</li>
      <li>Trolley bags and travel accessories</li>
      <li>Premium bags in the LUXE section for elevated options</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Beauty: </strong>
      Lifestyle's Beauty section stocks skincare, makeup, haircare, and fragrance from national and international brands:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Makeup — foundation, lipstick, eyeshadow, and setting products</li>
      <li>Skincare — moisturisers, serums, sunscreen, and cleansers</li>
      <li>Haircare — shampoo, conditioner, treatments, and styling products</li>
      <li>Fragrance — perfumes and deodorants for men and women</li>
      <li>Tools and Accessories — brushes, applicators, and beauty tools</li>
    </ul>
    <p>
      Beauty products at Lifestyle include mid-market brands alongside premium imported labels — worth checking before buying individually on a brand-specific site.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Home & Living: </strong>
      Lifestyle's Home & Living section covers décor, bedding, kitchen accessories, and storage:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Cushion covers, throws, and bedsheets</li>
      <li>Decorative items, candles, and tabletop accessories</li>
      <li>Kitchen and dining accessories</li>
      <li>Storage solutions and organisers</li>
      <li>Seasonal home décor (festive, monsoon, summer collections)</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Babyshop: </strong>
      Lifestyle's Babyshop section is dedicated to infants and young children:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Baby clothing (newborn to toddler)</li>
      <li>Feeding accessories and nursery essentials</li>
      <li>Baby skincare and hygiene products</li>
      <li>Soft toys, rattles, and early-development toys</li>
      <li>Baby bags and travel accessories for parents</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Gen Z: </strong>
      The Gen Z category at Lifestyle is a curated section for trend-led, youth-oriented fashion:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Oversized tees and co-ord sets</li>
      <li>Streetwear-influenced clothing and footwear</li>
      <li>Bold prints and seasonal trend drops</li>
      <li>Accessories including caps, sunglasses, and statement jewellery</li>
    </ul>
    <p>
      A lifestyle promo code applied to the Gen Z section works well for trend purchases where the base price is already mid-range and a code brings it into a better deal.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Watches: </strong>
      Lifestyle's Watches section covers everyday, sport, and formal watches across men's and women's:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Everyday quartz and analogue watches</li>
      <li>Sport and fitness tracking watches</li>
      <li>Formal dress watches for office and occasion</li>
      <li>Women's fashion watches and minimalist dials</li>
      <li>Kids' watches and character timepieces</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">LUXE: </strong>
      LUXE is Lifestyle's premium category — a curated edit of higher-end fashion, accessories, and watches that sit above the main catalogue's price points:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Designer and premium bags</li>
      <li>Luxury-adjacent watches and jewellery</li>
      <li>Premium footwear and leather goods</li>
      <li>Elevated fashion from international and domestic premium brands</li>
    </ul>
    <p>
      LUXE products are typically excluded from standard lifestyle coupon codes — check the deal terms on each code on this page for confirmation.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      What Are the Perks of Shopping on the Lifestyle App?
    </h3>
    <p>
      The Lifestyle app (available free on Android and iOS) offers a few advantages over the website:
    </p>
    <p>
      <strong className="text-[#2C2C40]">App-exclusive deals: </strong>
      some lifestyle offer codes and flash sale prices are only available on the app.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Click & Collect: </strong>
      reserve products online and pick them up at your nearest Lifestyle store without delivery wait time.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Wishlisting and Favourites: </strong>
      save products across sessions and get notified when prices drop or sizes come back in stock.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Easy returns initiation: </strong>
      returns can be requested directly through the app without contacting customer support.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Order tracking: </strong>
      real-time updates on your delivery status.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Personalised recommendations: </strong>
      the app surfaces new arrivals and deals based on what you've browsed or purchased.
    </p>
    <p>
      If you primarily shop on the website, it's worth downloading the app before the next sale window — some of the best lifestyle promo codes are app-only and won't appear at desktop checkout.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      How Can I Place Online Returns on Lifestyle?
    </h3>
    <p>
      Lifestyle India allows online returns for items purchased through the website or app. The process:
    </p>
    <ol className="list-decimal pl-5 space-y-2">
      <li>Open the Lifestyle app or go to your account on the Lifestyle website.</li>
      <li>Go to My Orders and select the order containing the item you want to return.</li>
      <li>Click Return next to the product and select your reason.</li>
      <li>Choose whether you want a pickup (courier collects from your address) or Return to Store (drop off at your nearest Lifestyle branch).</li>
      <li>Confirm the return request — you'll receive a confirmation by email or SMS.</li>
    </ol>
    <p>
      The refund is processed to your original payment method after the item is inspected.
    </p>
    <p>
      Return to Store is the faster option if you live near a Lifestyle branch — refunds through in-store returns typically process faster than courier pickup returns.
    </p>
    <p>
      Items must be returned in their original condition with tags attached and original packaging intact. Lifestyle's return window and specific conditions vary by category — check the policy on the product page or app at the time of purchase.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Lifestyle Discount Code on CouponsCrew</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying a Lifestyle promo code at checkout takes under two minutes:</p>
            <div className="space-y-6">
              {[
                "Pick an active deal on this page and click Get Code.",
                "The code copies to your clipboard and you land on the Lifestyle India website or app.",
                "Browse and add products to your basket — clothing, footwear, bags, beauty, or home items.",
                "Click Basket at the top right and then Proceed to Checkout.",
                "On the payment page, find the \"Enter Promo Code / Offer Code\" field.",
                "Paste the lifestyle discount code and click Apply.",
                "The discounted price updates before you confirm payment."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-[#f0f0f0]">
              Note: Some lifestyle coupon codes are category-specific or valid only on the app. Read the deal terms on each code here before adding to cart to confirm your order qualifies.
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              When to Shop Lifestyle for the Best Deals
            </h3>

            <p>
              Lifestyle runs predictable sale windows throughout the year. Pairing an active lifestyle discount code with one of these windows gives the best combined savings:
            </p>

            <p>
              <strong className="text-[#2C2C40]">End of Season Sale (EOSS) (January and July): </strong>
              Deepest discounts across fashion, footwear, and bags.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Republic Day Sale (Late January): </strong>
              Site-wide codes on clothing and accessories.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Holi Sale (March): </strong>
              Women's and kids' fashion; beauty deals.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Independence Day Sale (August): </strong>
              Footwear and clothing; app-exclusive codes.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Navratri / Dussehra (October): </strong>
              Ethnic wear and footwear; festive offers.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Diwali Sale (October–November): </strong>
              Broadest festive window; LUXE and watches deals too.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Year-End Sale (December): </strong>
              Clearance before new-season stock.
            </p>

            <p>
              The EOSS in January and July tends to be the most heavily discounted window — branded footwear and bags see some of their lowest prices of the year during these periods.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Tips to Save More on Lifestyle India
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Check Free Shipping Thresholds First: </strong>
              Lifestyle runs free shipping promotions regularly. If your cart is close to the free shipping threshold, adding one more item often costs less overall than paying a delivery fee separately.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Use App-Exclusive Codes: </strong>
              Download the Lifestyle app before your next purchase. App-only promo codes appear periodically and are often higher-value than standard website codes.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Shop EOSS for Branded Footwear: </strong>
              Branded sports shoes and fashion footwear (Nike, Adidas, Puma, Skechers) are at their lowest during the January and July EOSS windows. Applying a lifestyle store coupon during this period gives the best combined price.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Stack a Sale Price with a Code: </strong>
              During festive windows and EOSS, Lifestyle marks products down before a promo code even applies. A working lifestyle coupon code on an already-reduced product is the highest-savings scenario.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Use Click & Collect to Skip Delivery Costs: </strong>
              If you're near a Lifestyle store, Click & Collect is free — you order online, pick up in store, and avoid any delivery fee entirely.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Bookmark This Page: </strong>
              CouponsCrew updates Lifestyle deals as new codes go live and removes expired ones. Bookmarking this page means you always have a working promo code for lifestyle ready before you check out.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Start Saving on Every Lifestyle Purchase
            </h3>

            <p>
              Whether you're shopping for the latest women's ethnic wear, a pair of branded sneakers, a new handbag, or restocking your beauty shelf, a working lifestyle coupon code from CouponsCrew makes every order cheaper before you complete checkout. The range at Lifestyle India — over 500 brands across eleven categories — means there's almost always something relevant to your cart, and almost always an active deal on this page that applies to it.
            </p>
            <p>
              Bookmark this page before your next Lifestyle order, pick the code that matches your category, and apply it at checkout. CouponsCrew keeps every listed code current so the one you see here is the one that actually works — no trial and error, no hunting across multiple pages.
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

        {/* FAQs Accordion placed AFTER the Read More button */}
        <div className="mt-20 space-y-4">
          <h2 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "How do I apply a Lifestyle coupon code at checkout?",
              a: "After adding items to your basket, proceed to checkout and look for the \"Enter Promo Code\" or \"Offer Code\" field on the payment page. Paste your lifestyle discount code and click Apply — the updated price shows before payment is confirmed."
            },
            {
              q: "Can I use a Lifestyle promo code on sale items?",
              a: "Some codes apply to sale-priced items and some don't. The deal terms on each code on this page will confirm whether already-discounted products are eligible."
            },
            {
              q: "Does Lifestyle accept more than one coupon code per order?",
              a: "Lifestyle India typically accepts one promo code per order. If you have multiple codes, apply the one with the higher discount value."
            },
            {
              q: "Are LUXE products included in standard lifestyle discount codes?",
              a: "LUXE category products are commonly excluded from standard site-wide codes. Check the terms on each deal here — LUXE-specific codes appear periodically and are listed separately when available."
            },
            {
              q: "Can I use a lifestyle coupon code on the app and the website?",
              a: "Most codes work on both, but some are app-only. The deal note on this page specifies if a code is restricted to the Lifestyle app."
            },
            {
              q: "What is Lifestyle's return policy for online orders?",
              a: "Returns can be initiated through the Lifestyle app or website within the applicable return window. You can choose courier pickup or Return to Store. Items must be in original condition with tags and packaging intact."
            },
            {
              q: "Does Lifestyle offer free shipping?",
              a: "Lifestyle runs free shipping promotions regularly — these are listed on this page when active. The standard free shipping threshold applies otherwise; check the Lifestyle website or app for the current threshold on your order."
            },
            {
              q: "How often does CouponsCrew update Lifestyle coupon codes?",
              a: "CouponsCrew checks and updates Lifestyle deals regularly. Expired codes are removed and new ones are added as they go live. Bookmark this page for the most current working codes."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lifestyle Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Lifestyle Fashion Promo", "EOSS Footwear Deals", "Beauty & Makeup Offers", "App-Exclusive Codes", "LUXE Brand Discounts", "Home & Living Coupons", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lifestyle Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Percentage Off Fashion", sub: "Verified discount codes across men, women, and kids apparel" },
              { heading: "Footwear & Bags Special", sub: "Extra price drops on branded sneakers, sandals, and handbags" },
              { heading: "Beauty Shelf Restock Deals", sub: "Promotional codes on top skincare and cosmetics brands" },
              { heading: "Home & Living Offers", sub: "Savings on home decor, furnishings, and kitchenware" },
              { heading: "App-Exclusive Discounts", sub: "Special promo rates when checking out via the Lifestyle app" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">L</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Lifestyle deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Lifestyle checkout for instant discounts.
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
                <span>Continue to Lifestyle</span>
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
