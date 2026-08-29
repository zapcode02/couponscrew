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
import { Coupon, MUSCLEBLAZE_COUPONS } from './muscleblazeCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.muscleblaze.com/';

export default function MuscleBlazeStore() {
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

  const coupons: Coupon[] = MUSCLEBLAZE_COUPONS;

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
      q: 'How do I use a MuscleBlaze coupon code?',
      a: 'To use a MuscleBlaze coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the MuscleBlaze website or app. If it is a deal, simply click "Visit MuscleBlaze" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on MuscleBlaze?',
      a: 'Generally, MuscleBlaze only allows one promotional code per order. Check the terms of each offer to see if it can be combined with any ongoing sitewide promotion.'
    },
    {
      q: 'Why is my MuscleBlaze coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the offer terms listed with each code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every MuscleBlaze coupon code listed on this page is checked before publishing, and we regularly review offers to remove any that have expired.'
    },
    {
      q: 'How often are MuscleBlaze coupons updated?',
      a: 'Our deals team reviews and updates this page regularly. Expired promotions are filtered out, so you can focus on the offers that are currently working.'
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
            <Link href="/" className="hover:text-[#F26522] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#F26522] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#F26522] font-semibold">MuscleBlaze Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/muscleblaze-logo_ulxvbq.webp"
                      alt="MuscleBlaze Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">MuscleBlaze</h1>
                    <span className="bg-[#FFF0E9] text-[#F26522] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD9C4]">
                      Sports Nutrition & Fitness Supplements
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Save more with verified MuscleBlaze coupon codes, promo codes, and exclusive supplement offers. Enjoy up to 50% OFF, flat ₹200 OFF, extra 15% OFF, free shaker deals, and discounts on whey protein, creatine, mass gainers, pre-workout, and fitness essentials.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#F26522] bg-[#FFF0E9] px-2.5 py-1 rounded-full border border-[#FFD9C4]">
                      <Tag size={14} /> 40+ Offers
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
                  className="bg-[#F26522] hover:bg-[#D9541A] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit MuscleBlaze</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#F26522] to-[#1A1A1A] items-center justify-center p-8 text-center"
            >
              <div className="text-white space-y-3">
                <span className="inline-block bg-white/15 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">
                  MuscleBlaze Supplement Offers
                </h3>
                <p className="text-white/80 text-sm">
                  Whey Protein, Pre-Workout & Vitamins
                </p>
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
            <div className="w-11 h-11 bg-[#FFF0E9] text-[#F26522] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">40+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EDEDED] text-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹5,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF0E9] text-[#F26522] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">MuscleBlaze Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified MuscleBlaze coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#F26522) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#F26522] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "45%"}
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
                {/* Soft Tint Badge using Accent (#1A1A1A) */}
                <span className="bg-[#1A1A1A]/10 text-[#1A1A1A] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#F26522] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26522]" />
                    <span>Valid on select supplement & fitness gear categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26522]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26522]" />
                    <span>Covers selected products and collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

             

              {/* Action Button - Vibrant CTA Accent (#1A1A1A) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#1A1A1A] hover:bg-[#333333] text-white"
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
    <Info size={16} className="text-[#F26522]" />
    <span>What is MuscleBlaze and Why Do Indian Fitness Enthusiasts Trust It?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-4">
    MuscleBlaze was founded in 2012 by Healthkart and has since become India's most-sold sports nutrition brand — holding the largest market share in the Indian whey protein segment for several consecutive years. Unlike international supplement brands that reformulate global products for Indian distribution, MuscleBlaze develops its products from the ground up for Indian consumers — accounting for typical Indian dietary protein intake, vegetarian-heavy diets, and the specific performance needs of Indian athletes and recreational gym-goers.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    Key reasons MuscleBlaze is the go-to for Indian fitness shoppers:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">Clinical validation</span> — MuscleBlaze's biozyme whey protein range is backed by published clinical trials conducted on Indian consumers, a rarity in the Indian supplement market.
    </li>
    <li>
      <span className="font-semibold">Authenticity</span> — MuscleBlaze products sold on the official website and app carry a scratch-and-verify authenticity code — important in a market where counterfeit supplements are a genuine concern.
    </li>
    <li>
      <span className="font-semibold">Price transparency</span> — MuscleBlaze publishes per-serving costs clearly across all products, making cost comparisons straightforward.
    </li>
    <li>
      <span className="font-semibold">India-specific formulations</span> — products like muscle blaze oats are formulated with oat varieties and flavours suited to Indian taste preferences, not repacked from Western markets.
    </li>
    <li>
      <span className="font-semibold">Wide product range</span> — proteins, gainers, pre-workouts, fat burners, vitamins, and everyday health foods all under one brand.
    </li>
  </ul>

  <p className="text-[#1A1A2E] text-sm mb-5">
    A verified MuscleBlaze coupon code from CouponsCrew on top of MuscleBlaze's already-competitive pricing is one of the most cost-effective ways to buy quality sports nutrition in India.
  </p>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#2B2B2B] hover:text-[#2B2B2B] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit MuscleBlaze</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#F26522] to-[#1A1A1A] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">MuscleBlaze Seasonal Sale</h3>
                <span className="inline-block bg-[#1A1A1A] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 45% OFF on Whey Protein, Pre-Workout & more
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#F26522] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

           

            {/* Sidebar Card 4: Why Shop at MuscleBlaze */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a MuscleBlaze Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a MuscleBlaze promo code takes under a minute. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Browse MuscleBlaze and add products to your cart.</span> Shop by category — protein, gainers, pre-workout, fat loss, or vitamins. Check your cart meets the minimum order value on the deal card.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Click the cart icon and tap "Proceed to Buy." Sign in or create a MuscleBlaze account.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find the coupon field.</span> On the payment summary page, look for "Apply Coupon Code" — it appears before the payment method step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the MuscleBlaze discount code and click "Apply." The discount reflects immediately in the order total.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Card, UPI, net banking, or COD. Select an eligible bank card to stack a bank discount on top where available.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and pay. Your order confirmation arrives via email and SMS.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a code shows as invalid, check the minimum cart value and whether your selected products are in an eligible category. Some codes exclude combo or bundle packs already priced at a promotional rate.
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Left: Main Content Block */}
      <div>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
            MuscleBlaze Coupon Code & Supplement Deals — Verified for August 2026
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
          {MUSCLEBLAZE_COUPONS.map((coupon) => (
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

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-300", !isReadMore && "max-h-[500px] overflow-hidden")}>
            
            <p>
              MuscleBlaze is India's most trusted sports nutrition brand — built specifically for the Indian market with products formulated to match Indian dietary patterns, training habits, and budget expectations. From muscle blaze whey protein for everyday gym-goers to clinically validated advanced supplements like muscleblaze biozyme, the brand covers every level of fitness nutrition from beginner basics to elite performance.
            </p>

            <p>
              At CouponsCrew, we track every active MuscleBlaze coupon code, MuscleBlaze discount code, and MuscleBlaze promo code so you never pay full price when a verified saving is available. Every deal on this page is checked before going live — minimum cart values, eligible products, and expiry dates are all confirmed and shown clearly on each deal card.
            </p>

            <p>
              Whether you are buying your first tub of muscleblaze protein powder, stacking a wrathx pre workout with your current programme, or restocking your mb multivitamin — there is almost always a saving available. This page is updated daily.
            </p>

            {/* Section: Top-Selling Categories */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Top-Selling Categories at MuscleBlaze
            </h3>

            <h4 className="text-lg font-black text-[#2C2C40] mt-4 mb-2">
              Proteins
            </h4>
            <p>
              Protein supplements are MuscleBlaze's flagship category — covering every type, format, and price point:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Whey Protein Concentrate: </strong>
              Muscle blaze whey protein concentrate is the most popular entry point — a high-quality protein source with a balanced amino acid profile, available in multiple flavours. Ideal for beginners and intermediate gym-goers focused on muscle building and recovery. The MuscleBlaze Whey Protein range starts from ₹999 for smaller packs and scales to economy sizes that bring the per-serving cost down significantly.
            </p>

            <p>
              <strong className="text-[#2C2C40]">MuscleBlaze Biozyme — The Clinically Tested Whey: </strong>
              Muscleblaze biozyme is the brand's most scientifically differentiated product. The Biozyme series uses a patented enzyme blend (ProHydrolase) that clinical trials have shown increases amino acid absorption by 50% compared to standard whey concentrate. The biozyme whey protein range includes:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-500 font-bold">
              <li>
                <strong className="text-[#2C2C40]">Biozyme Performance Whey — </strong> the flagship variant; higher protein per serving, superior amino acid delivery, ideal for trained athletes and serious gym-goers
              </li>
              <li>
                <strong className="text-[#2C2C40]">Biozyme Performance Whey Ultra — </strong> elevated formulation for advanced users
              </li>
              <li>
                <strong className="text-[#2C2C40]">Biozyme Isolate — </strong> faster absorption, lower fat and carb content per serving, suited to leaner cutting phases
              </li>
            </ul>

            <p>
              biozyme performance whey and the isolate variant are the most searched MuscleBlaze products on CouponsCrew — applying a MuscleBlaze discount code on these higher-priced premium products delivers the most meaningful saving in absolute rupee terms.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Whey Isolate: </strong>
              Muscleblaze isolate whey protein is a purer, faster-absorbing protein form — lower lactose, lower fat, higher protein percentage per serving than concentrate. Available in standard isolate and the Biozyme Isolate variant. Recommended for users who are lactose-sensitive or targeting a higher protein-to-calorie ratio during cutting phases.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Plant Protein: </strong>
              MuscleBlaze's plant-based protein range covers pea protein, brown rice protein, and blended plant protein — suitable for vegetarians and vegans who cannot use whey-based products.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Everyday Protein: </strong>
              MuscleBlaze's everyday protein products — protein bars, protein cookies, and high-protein oats — bridge the gap between supplements and food. Muscle blaze oats are a particular standout: high-protein rolled oats formulated with a better protein content per serving than standard supermarket oats, available in multiple flavours suited to Indian palates.
            </p>

  
  <p className="font-bold text-[#2C2C40] text-lg mb-2">Gainers</p>
  <p className="mb-4">
    MuscleBlaze's weight gainer and mass gainer range is designed for users who struggle to consume enough calories through food alone — particularly relevant for hard-gainers and underweight individuals looking to build lean mass:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>MB Mass Gainer XXL</strong> — high-calorie formula with a protein-carb-fat ratio optimised for mass building; popular for users doing heavy compound training</li>
    <li><strong>Real Mass Gainer</strong> — complex carbohydrate sources for sustained calorie delivery</li>
    <li><strong>High Protein Lean Mass Gainer</strong> — a leaner alternative to standard mass gainers, with a higher protein-to-carb ratio for users who want mass without excessive fat gain</li>
  </ul>
  <p className="mb-6">
    Gainers are one of the highest-value categories for applying a MuscleBlaze voucher code — the per-unit price is higher on large format gainers, meaning a percentage-based code delivers a larger absolute saving.
  </p>

  {/* Pre & Post Workout Section */}
  <p className="font-bold text-[#2C2C40] text-lg mb-2">Pre &amp; Post Workout</p>
  
  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">WrathX Pre Workout</p>
  <p className="mb-4">
    Wrathx pre workout is MuscleBlaze's high-stimulant pre-workout — formulated for experienced users who need a strong energy and focus boost before training. Contains caffeine, beta-alanine, citrulline malate, and other performance compounds. Not recommended for stimulant-sensitive users or beginners — the standard MB Pre Workout Boost is a better starting point for those new to pre-workouts.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">MB Pre Workout Boost</p>
  <p className="mb-4">
    A more accessible pre-workout for general users — moderate caffeine, performance-supporting compounds, and available in multiple flavours without the intensity of WrathX.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Post Workout / BCAA</p>
  <p className="mb-4">
    MuscleBlaze's BCAA and recovery products cover intra-workout hydration and post-workout muscle repair — BCAAs in 2:1:1 ratio, electrolyte blends, and glutamine supplements for recovery support.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Creatine</p>
  <p className="mb-6">
    Muscleblaze creatine is one of the brand's most consistently purchased products — creatine monohydrate in its pure, unflavoured form. Creatine is one of the most research-backed sports supplements available, with strong evidence for improving strength output and muscle power during high-intensity training. MuscleBlaze offers creatine in standard monohydrate and micronised variants for faster dissolving.
  </p>

  {/* Fat Loss Section */}
  <p className="font-bold text-[#2C2C40] text-lg mb-2">Fat Loss</p>
  <p className="mb-4">
    MuscleBlaze's fat loss range covers thermogenics, CLA, L-carnitine, and green tea extract supplements for users in a cutting phase or targeting body recomposition:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
    <li><strong>MB Burner</strong> — thermogenic fat burner with caffeine, green tea extract, and metabolism-supporting compounds</li>
    <li><strong>MB CLA</strong> — conjugated linoleic acid supplement supporting fat loss and lean mass preservation</li>
    <li><strong>L-Carnitine</strong> — amino acid supplement supporting fat oxidation during aerobic exercise</li>
    <li><strong>MB Fat Burner with Garcinia</strong> — herbal fat support formula for users who prefer stimulant-free fat loss support</li>
  </ul>

  {/* Vitamins & Everyday Health Section */}
  <p className="font-bold text-[#2C2C40] text-lg mb-2">Vitamins &amp; Everyday Health</p>
  
  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">MB Multivitamin</p>
  <p className="mb-4">
    MB multivitamin is one of MuscleBlaze's most-purchased everyday health products — a comprehensive daily multivitamin covering 25+ micronutrients with dosages calibrated for active individuals. Available in standard and advanced variants. A practical add-on to any supplement order, particularly for Indian gym-goers whose diet may be deficient in Vitamin D, B12, and zinc — common deficiencies in the Indian population.
  </p>

  <p className="mb-2">Other everyday health products include:</p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
    <li><strong>MB Omega-3</strong> — fish oil capsules for joint health, heart health, and anti-inflammatory support</li>
    <li><strong>MB Zinc</strong> — targeted mineral supplement for immunity and testosterone support</li>
    <li><strong>MB Vitamin D3 + K2</strong> — combined supplement addressing the widespread Vitamin D deficiency in India</li>
    <li><strong>MB Biotin</strong> — hair, skin, and nail supplement popular among both fitness users and general health shoppers</li>
  </ul>

  {/* MB Premium Membership Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    MB Premium Membership — Is It Worth It?
  </h3>
  <p className="mb-4">
    MB Premium is MuscleBlaze's paid loyalty membership — available through the MuscleBlaze website and app. Benefits include:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Benefit</th>
          <th className="p-4">Details</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Exclusive member pricing</td>
          <td className="p-4">Lower prices on select products vs non-member pricing</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Early access to sales</td>
          <td className="p-4">First access to new launches and sale events before general users</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Priority customer support</td>
          <td className="p-4">Faster resolution on order and product queries</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Member-only deals</td>
          <td className="p-4">Periodic discount codes and bundle offers exclusively for Premium members</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Free shipping benefits</td>
          <td className="p-4">Reduced or waived delivery fees on eligible orders</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    <strong>Is MB Premium worth it for regular MuscleBlaze shoppers?</strong><br />
    If you purchase MuscleBlaze products more than 3–4 times per year — which is common for regular gym-goers buying monthly protein, creatine, and vitamins — the cumulative member pricing advantage typically exceeds the membership cost within the first 2–3 orders. The early access to sales is particularly valuable during MuscleBlaze's major annual events where popular flavours and formats sell out quickly.
  </p>
  <p className="mb-6">
    CouponsCrew lists MB Premium member-exclusive codes under the "Members Only" filter on this page where available.
  </p>

  {/* Sale Calendar Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Best Time to Buy MuscleBlaze Products — Sale Calendar 2026
  </h3>
  <p className="mb-4">
    MuscleBlaze runs several structured sale events throughout the year — timing your protein and supplement purchases around these windows, and applying a verified MuscleBlaze promo code from CouponsCrew on top, delivers the best savings:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Sale Event</th>
          <th className="p-4">Tentative Month</th>
          <th className="p-4">Expected Discount</th>
          <th className="p-4">Best Categories</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">New Year Sale</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 40% OFF</td>
          <td className="p-4">Protein, Vitamins</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Republic Day Sale</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 45% OFF</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Holi Sale</td>
          <td className="p-4">March</td>
          <td className="p-4">Up to 35% OFF</td>
          <td className="p-4">Gainers, Pre-workout</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Summer Sale</td>
          <td className="p-4">April – May</td>
          <td className="p-4">Up to 40% OFF</td>
          <td className="p-4">Fat loss, Protein</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Independence Day Sale</td>
          <td className="p-4">August</td>
          <td className="p-4">Up to 45% OFF</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Navratri / Festive Sale</td>
          <td className="p-4">October</td>
          <td className="p-4">Up to 40% OFF</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Diwali Sale</td>
          <td className="p-4">October – November</td>
          <td className="p-4">Up to 45% OFF</td>
          <td className="p-4">Protein, Multivitamin</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Black Friday Sale</td>
          <td className="p-4">November</td>
          <td className="p-4">Up to 50% OFF</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Year-End Sale</td>
          <td className="p-4">December</td>
          <td className="p-4">Up to 45% OFF</td>
          <td className="p-4">Gainers, Creatine, Protein</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    The Black Friday Sale (November) is MuscleBlaze's deepest discount window of the year — up to 50% off across proteins, gainers, pre-workouts, and vitamins. This is the best time to buy in bulk — larger format products (4kg, 5kg whey tubs or multi-month vitamin packs) at Black Friday pricing with a MuscleBlaze coupon code applied brings the per-serving cost to the lowest level of the year.
  </p>
  <p className="mb-6">
    Republic Day and Independence Day Sales (January and August) are the two strongest mid-year events — up to 45% off across all categories with bank card offers frequently running alongside. These are solid opportunities to restock if you missed the year-end window.
  </p>

            {/* Section: MuscleBlaze Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              MuscleBlaze Saving Tips
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Buy Larger Formats for Lower Per-Serving Cost: </strong>
              MuscleBlaze's 4kg and 5kg whey protein formats have a significantly lower cost per serving than 1kg or 2kg packs. Applying a MuscleBlaze coupon code to a large format purchase during a sale event is the most effective way to reduce your monthly protein cost.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Stack a Promo Code with a Bank Card Offer: </strong>
              HDFC, ICICI, SBI, and Axis bank card holders get periodic instant discounts on MuscleBlaze purchases. Apply your MuscleBlaze promo code first, then select your bank card for the additional saving.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Bundle Protein with Vitamins in One Order: </strong>
              MuscleBlaze regularly offers bundle discounts — buying protein alongside mb multivitamin or creatine in a single cart unlocks combo pricing. Combining a bundle with a MuscleBlaze voucher code reduces the effective per-product cost further.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Use the MuscleBlaze App for Exclusive Offers: </strong>
              The MuscleBlaze app surfaces app-exclusive discount codes and personalised offers based on your purchase history — useful if you reorder the same products regularly.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Plan Bulk Buys Around Black Friday: </strong>
              Black Friday (November) is MuscleBlaze's best sale event. Buying a 3–6 month supply of your staple products (whey, creatine, multivitamin) during this window locks in the lowest per-serving cost of the year.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              MuscleBlaze Customer Support
            </h3>
            <p>
              MuscleBlaze provides multiple customer service channels for order tracking, product authentication queries, and return requests:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black text-sm">
                    <th className="p-4">Support Channel</th>
                    <th className="p-4">Details</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Customer Care Helpline</td>
                    <td className="p-4">+91 85277 32632 (Mon–Sat, 10 AM to 7 PM IST)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Support</td>
                    <td className="p-4">info@muscleblaze.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Website Chat & Portal</td>
                    <td className="p-4">Available on muscleblaze.com under "Help & Support"</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Product Authenticity Check</td>
                    <td className="p-4">Scratch-code verification portal on muscleblaze.com/authenticate</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Social Media</td>
                    <td className="p-4">@MuscleBlaze on Instagram and Twitter/X</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Mobile App Support</td>
                    <td className="p-4">In-app support section for real-time tracking and easy returns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">MyProtein India — </strong> International sports nutrition brand; strong on flavour variety and bulk pricing
            </p>
            <p>
              <strong className="text-[#2C2C40]">Optimum Nutrition (ON) — </strong> Premium international whey (Gold Standard); higher price point than MuscleBlaze
            </p>
            <p>
              <strong className="text-[#2C2C40]">Healthkart — </strong> MuscleBlaze's parent platform; stocks MuscleBlaze alongside other supplement brands
            </p>
            <p>
              <strong className="text-[#2C2C40]">GNC India — </strong> Sports nutrition retail with a mix of international brands
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon Health — </strong> Wide supplement range; compare prices before purchasing — MuscleBlaze official site pricing with a coupon code is often lower
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for MuscleBlaze Deals
            </h3>
            <p>
              Finding a working MuscleBlaze coupon code should take seconds. CouponsCrew verifies every deal on this page before it goes live — minimum order values, eligible categories, and expiry dates are all confirmed and shown clearly.
            </p>
            <p>
              MuscleBlaze is already competitively priced for the Indian market — particularly on muscleblaze biozyme, muscleblaze creatine, mb multivitamin, and muscleblaze protein powder at larger formats. A verified MuscleBlaze discount code or MuscleBlaze promo code from CouponsCrew stacked on top of sale pricing — and combined with a bank card offer where available — brings the per-serving cost of quality sports nutrition to some of the lowest levels available in India.
            </p>
            <p>
              Bookmark this page and check back before every MuscleBlaze purchase.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
          </button>

          {/* FAQs Accordion */}
          <div className="mt-20 space-y-4">
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions — MuscleBlaze Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working MuscleBlaze coupon code today?",
                a: "Every MuscleBlaze coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card. Expired codes are removed daily — if a code does not apply, check the deal card conditions and try the next listing."
              },
              {
                q: "Q2. What is MuscleBlaze Biozyme Whey Protein?",
                a: "Muscleblaze biozyme is MuscleBlaze's clinically validated premium whey — using a patented enzyme blend (ProHydrolase) that increases amino acid absorption by up to 50% versus standard whey concentrate, based on published clinical trial data. The biozyme performance whey variant is the best-selling product in the Biozyme range."
              },
              {
                q: "Q3. Is MuscleBlaze Creatine good?",
                a: "Muscleblaze creatine is pure creatine monohydrate — the most research-backed form of creatine, with strong evidence for improving strength, power output, and muscle endurance during high-intensity training. MuscleBlaze's creatine is third-party tested and carries the brand's authenticity verification. It is one of the best-value creatine products available in India."
              },
              {
                q: "Q4. What is WrathX Pre Workout?",
                a: "Wrathx pre workout is MuscleBlaze's high-stimulant pre-workout formula — designed for experienced gym-goers who want a strong energy and focus boost before training. It contains caffeine, beta-alanine, citrulline malate, and other performance compounds. Not recommended for stimulant beginners — the standard MB Pre Workout Boost is a better starting point."
              },
              {
                q: "Q5. Can I use a MuscleBlaze discount code on sale products?",
                a: "Many MuscleBlaze discount codes apply to already-discounted sale products — but some codes exclude products already in a combo or bundle pricing deal. Check the individual deal card on this CouponsCrew page for exclusion details before building your cart."
              },
              {
                q: "Q6. Is MuscleBlaze protein authentic?",
                a: "Yes — MuscleBlaze products sold through the official website, app, and authorised sellers carry a scratch-and-verify authenticity code that can be checked on the MuscleBlaze website. Products purchased through third-party marketplaces without this verification are at higher risk of being counterfeit — buying directly from muscleblaze.com or the app is the safest approach."
              },
              {
                q: "Q7. What is MB Premium membership?",
                a: "MB Premium is MuscleBlaze's paid loyalty membership offering exclusive member pricing, early access to sales, priority customer support, member-only discount codes, and shipping benefits. For regular MuscleBlaze shoppers purchasing 3–4 times per year, the membership typically pays for itself within the first 2–3 orders."
              },
              {
                q: "Q8. What is the best MuscleBlaze protein for beginners?",
                a: "For beginners, the standard muscle blaze whey protein concentrate is the recommended starting point — a balanced protein source at an accessible price. Once consistent training and diet habits are established, upgrading to biozyme whey protein or muscleblaze isolate whey protein is a natural progression for better amino acid absorption and purity."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
                >
                  <span className="text-black font-black text-base">{faq.q}</span>
                  <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE]")}>
                    <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
                  </div>
                </button>
                <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular MuscleBlaze Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["MuscleBlaze Coupons", "Whey Protein Deals", "Biozyme Performance Whey", "Creatine Discounts", "WrathX Pre Workout", "MB Multivitamin", "Protein Oats Offers", "CouponsCrew Supplement"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top MuscleBlaze Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 35% OFF Whey Protein", sub: "Verified coupon code on base fare & bulk formats" },
              { heading: "Extra 5% OFF Biozyme Series", sub: "Clinically tested premium whey protein range" },
              { heading: "Flat 32% OFF Creatine Monohydrate", sub: "Best price on CreAMP & pure monohydrate" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, ICICI & Axis cards" },
              { heading: "App-Exclusive Discounts", sub: "Personalised deals & cashback via MB App" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">MB</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get MuscleBlaze deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#F26522]">{activeModalCoupon.code}</span> at MuscleBlaze checkout for instant discounts.
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
                className="w-full bg-[#F26522] hover:bg-[#D9541A] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to MuscleBlaze</span>
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
