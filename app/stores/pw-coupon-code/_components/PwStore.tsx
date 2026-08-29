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
import { Coupon, PW_COUPONS } from './pwCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.pw.live/';

export default function PwStore() {
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

  const coupons: Coupon[] = PW_COUPONS;

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
      q: 'How do I use a PW coupon code?',
      a: 'To use a PW coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the PW website or app. If it is a deal, simply click "Visit PW" to get the discount auto-applied.'
    },
    {
      q: 'Why is my PW coupon code not working?',
      a: 'A coupon might not work due to specific course exclusions, minimum purchase requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every PW coupon code listed on CouponsCrew is checked before being published, and codes are periodically re-verified so you can rely on what is shown here.'
    },
    {
      q: 'How often are PW coupons updated?',
      a: 'Our team reviews and updates PW coupons regularly. Expired promotions are removed as soon as they are identified, so you can focus on offers that are actually active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, PW allows only one promo code per order. Check the specific terms of each offer, as some deals may be combinable with ongoing sitewide promotions.'
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
            <Link href="/" className="hover:text-[#2563EB] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#2563EB] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#2563EB] font-semibold">PW Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/pw-logo_emptzf.webp"
                      alt="PW Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">PW</h1>
                    <span className="bg-[#EAF1FF] text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full border border-[#D6E4FF]">
                      Online Courses & Exam Prep
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  
                  Find Physics Wallah coupon codes, promo codes and course deals for Aug 2026. Save up to 80% on live courses, earn up to ₹1,000 cashback through referrals, and get discounts on programming, banking, finance, software development and job assistance programs.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#2563EB] bg-[#EAF1FF] px-2.5 py-1 rounded-full border border-[#D6E4FF]">
                      <Tag size={14} /> 9+ Offers
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
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit PW</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#2563EB] to-[#0F172A]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 select-none">
                <span className="text-xs font-black uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-4">Limited Time</span>
                <h3 className="text-2xl font-black leading-tight">Save on PW Courses & Batches</h3>
                <p className="text-white/80 text-sm mt-2">Verified coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#EAF1FF] text-[#2563EB] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EEF2FF] text-[#0F172A] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹2,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAF1FF] text-[#2563EB] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">PW Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified PW coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#2563EB) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#2563EB] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#0F172A) */}
                <span className="bg-[#0F172A]/10 text-[#0F172A] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2563EB] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>Valid on select courses, batches & test series.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>Minimum purchase value might apply as specified in the offer description.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>Covers select categories and course collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#0F172A]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#0F172A) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#0F172A] hover:bg-[#1E293B] text-white"
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
                <Info size={16} className="text-[#2563EB]" />
                <span>About Physics Wallah — Making Quality Education Affordable</span>
              </h3>

              <p className="text-[#1A1A2E] text-sm">
              Physics Wallah was founded by Alakh Pandey in 2014, initially as a YouTube channel delivering free Physics and Chemistry lectures for JEE and NEET aspirants. The channel grew rapidly — Alakh Pandey's approachable teaching style, detailed problem-solving approach, and genuinely helpful content attracted millions of subscribers who had previously relied on expensive offline coaching institutes.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              In 2020, Physics Wallah launched its dedicated app and web platform, expanding from free YouTube content to structured paid courses at price points far below market competitors. The brand's core promise — quality coaching at affordable fees — resonated deeply in a country where JEE and NEET coaching at established institutes costs ₹1–3 lakh per year.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              In 2022, Physics Wallah became India's 101st unicorn after raising $100 million in a funding round led by WestBridge Capital and GSV Ventures — a milestone that underscored how rapidly the platform had scaled. Today, PW serves millions of students across Class 6 to Class 12, JEE, NEET, UPSC, and several competitive exam categories through its app, website, and growing network of PW Vidyapeeth offline centres across India.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              PW's content library spans live classes, recorded lectures, PDF notes, practice tests, previous year papers, and doubt resolution — a complete preparation ecosystem available on mobile and desktop. A valid PW coupon code from CouponsCrew makes this ecosystem even more accessible for students and families on a budget.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#2563EB] hover:text-[#2563EB] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit PW</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">PW Seasonal Learning Offer</h3>
                <span className="inline-block bg-[#0F172A] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 70% OFF on Batches, Test Series & More
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#2563EB] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>


            {/* Sidebar Card 4: Why Shop at PW */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Use a PW Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Applying a PW discount code or PW promo code is straightforward. Here&apos;s how:
  </p>

  <div className="space-y-5">
    <ol className="space-y-2.5 text-xs font-semibold text-[#3A3A3A]">
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Visit Physics Wallah — </span>
          <span>Go to pw.live or open the PW app on iOS or Android.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Browse courses — </span>
          <span>Select your class or exam category and explore available batches and courses.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Choose your course — </span>
          <span>Pick the batch, subject pack, or study material you want to purchase.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Proceed to checkout — </span>
          <span>Click &quot;Buy Now&quot; or &quot;Enrol&quot; and review your order summary.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Apply your PW coupon code — </span>
          <span>Look for the &quot;Apply Coupon&quot; or &quot;Have a promo code?&quot; field. Enter your PW offer code from CouponsCrew and tap Apply.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Confirm the discount — </span>
          <span>The reduced price will update in your order total before payment.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Complete payment — </span>
          <span>Pay via UPI, credit/debit card, net banking, or EMI where available.</span>
        </div>
      </li>
    </ol>

    {/* Tip Box */}
    <div className="bg-[#FFF8F8] border border-[#FCDCDC] rounded-2xl p-3.5 flex items-start gap-2.5">
      <div className="text-xs text-[#3A3A3A]">
        <span className="font-bold text-[#2C2C40]">Tip: </span>
        <span>Some PW promo codes are app-exclusive. If a code isn&apos;t working on the website, try applying it through the PW app instead.</span>
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
          Save on Every PW Course with a Verified Physics Wallah Coupon Code
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
          {PW_COUPONS.map((coupon) => (
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
            Physics Wallah (PW) is one of India's most popular and affordable online education platforms — and with the right PW coupon code, every course, batch subscription, or study material purchase becomes even more accessible. Whether you're a student in Class 8 looking for a strong foundation in Science and Maths, a Class 11 student preparing for JEE, or a Class 12 aspirant in the final stretch of NEET preparation, PW covers every stage of the school-to-entrance exam journey.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates PW discount codes, PW promo codes, and PW offer codes daily so students don't have to search before every purchase. Every code on this page has been checked for validity before going live — no expired deals, no failed codes at checkout.
          </p>

          <p>
            From new user offers on first course enrolments to percentage discounts on annual batch subscriptions and study material bundles, this page covers the full range of savings available on Physics Wallah today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Top Services Offered by Physics Wallah Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Top Services Offered by Physics Wallah
    </h3>
    <p className="mb-4">
      PW has evolved from a single-subject YouTube channel into a full-stack education platform. Here are the core services available in 2026:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Live Online Classes
        </h4>
        <p>
          PW's live classes are the flagship product — structured daily sessions taught by experienced faculty for specific subjects, batches, and exam targets. Live classes are interactive, allowing students to ask questions in real time via chat. Sessions are also recorded and available for replay within the batch timeline, so students who miss a live session can catch up at their own pace.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Recorded Video Lectures
        </h4>
        <p>
          Every PW batch includes access to a library of pre-recorded video lectures covering the full syllabus. These are available on demand within the PW app and are downloadable for offline viewing — useful for students in areas with unreliable internet connectivity.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PDF Notes & Study Material
        </h4>
        <p>
          PW provides structured PDF notes for every chapter, topic, and subject covered in its courses. These notes are written by PW's faculty team and are aligned with NCERT, JEE, and NEET syllabi. The PW Store also sells printed study material, books, and curated notes bundles — a PW discount code on the store reduces the cost of physical material.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Practice Tests & Mock Tests
        </h4>
        <p>
          Every PW batch includes chapter-wise tests, subject-wise tests, and full-length mock tests. Performance analytics help students identify weak areas and track progress over time. Mock tests are designed to simulate the actual exam interface for JEE Main, JEE Advanced, NEET, and board exams.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Doubt Resolution
        </h4>
        <p>
          PW offers doubt resolution through multiple channels — in-app doubt posting, community forums, and dedicated doubt-clearing sessions built into many batch schedules. Students can post questions and receive answers from faculty or senior students within the platform.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PW Vidyapeeth — Offline Learning Centres
        </h4>
        <p>
          PW Vidyapeeth is Physics Wallah's network of offline coaching centres, combining the brand's affordable fee structure with a physical classroom environment. Vidyapeeth centres are expanding rapidly across Tier 2 and Tier 3 cities — bringing structured coaching to markets previously dominated by expensive local institutes or lacking quality options entirely.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PW Skills — Professional & Competitive Exam Courses
        </h4>
        <p>
          PW Skills is PW's upskilling arm, offering courses in Data Science, Web Development, Digital Marketing, and other professional domains targeted at graduates and working professionals. Like PW's school and entrance exam products, PW Skills courses are priced significantly below comparable offerings from other edtech platforms.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PW Store — Books, Notes & Stationery
        </h4>
        <p>
          The PW Store sells printed books, curated notes, previous year paper compilations, and stationery. Physical study material is popular among students who prefer offline reading alongside digital course access. A PW offer code applied to PW Store purchases reduces the cost of physical material.
        </p>
      </div>
    </div>
  </div>

  {/* PW Courses by Class Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      PW Courses by Class — What's Available for Every Student
    </h3>

    <div className="space-y-6">
      {/* Class 8 */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Physics Wallah Class 8 — Foundation Building
        </h4>
        <p className="mb-3">
          Physics Wallah Class 8 courses are designed to build a strong conceptual foundation in Science and Mathematics — covering the NCERT Class 8 syllabus with additional depth to prepare students for the academic jump to Class 9. For students who plan to eventually target JEE or NEET, the Class 8 foundation year is when core habits — structured study, concept clarity, and regular practice — are most effectively established.
        </p>

        <p className="font-semibold text-[#2C2C40] mb-2">
          PW Class 8 courses cover:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Mathematics:</strong> Rational Numbers, Algebra, Geometry, Data Handling, Squares & Square Roots</li>
          <li><strong>Science:</strong> Crop Production, Microorganisms, Synthetic Fibres & Plastics, Cell Structure, Force & Pressure, Light, Sound, Chemical Effects of Current</li>
          <li>English & Social Science support material also available</li>
        </ul>
        <p>
          A PW coupon code applied to a Class 8 foundation batch reduces the enrolment cost while giving access to the full PW learning ecosystem.
        </p>
      </div>

      {/* Class 9 */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Physics Wallah Class 9 — Strengthening Concepts
        </h4>
        <p className="mb-3">
          Physics Wallah Class 9 is one of the platform's highest-demand school-level offerings. Class 9 is a critical year — the first year of secondary school introduces significantly more abstract concepts in Physics, Chemistry, Mathematics, and Biology that become the foundation of Class 10 board performance and eventual entrance exam preparation.
        </p>

        <p className="font-semibold text-[#2C2C40] mb-2">
          PW Class 9 courses cover:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Mathematics:</strong> Number Systems, Polynomials, Coordinate Geometry, Linear Equations, Triangles, Circles, Heron's Formula, Statistics, Probability</li>
          <li><strong>Physics:</strong> Motion, Force & Laws of Motion, Gravitation, Work & Energy, Sound</li>
          <li><strong>Chemistry:</strong> Matter in Our Surroundings, Atoms & Molecules, Structure of Atom</li>
          <li><strong>Biology:</strong> Cell — The Fundamental Unit of Life, Tissues, Diversity in Living Organisms, Natural Resources</li>
        </ul>
        <p>
          PW's Class 9 batches are available in Hindi and English medium, making them accessible to students across India regardless of their school's medium of instruction.
        </p>
      </div>

      {/* Class 10 */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Physics Wallah Class 10 — Board Exam Preparation
        </h4>
        <p className="mb-3">
          Physics Wallah Class 10 courses are structured around CBSE board exam preparation alongside state board coverage for key states. Class 10 boards are the first major public examination for most Indian students — the result influences school choice for Class 11–12 and shapes the academic trajectory toward JEE or NEET.
        </p>

        <p className="font-semibold text-[#2C2C40] mb-2">
          PW Class 10 courses cover:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Mathematics:</strong> Real Numbers, Polynomials, Pair of Linear Equations, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Circles, Constructions, Trigonometry, Statistics, Probability</li>
          <li><strong>Physics:</strong> Light, Human Eye, Electricity, Magnetic Effects of Current, Sources of Energy</li>
          <li><strong>Chemistry:</strong> Chemical Reactions, Acids/Bases/Salts, Metals & Non-Metals, Carbon Compounds, Classification of Elements</li>
          <li><strong>Biology:</strong> Life Processes, Control & Coordination, Reproduction, Heredity, Environment</li>
        </ul>
        <p>
          PW's Class 10 board preparation is available as full-year batches and as targeted crash courses for students closer to their exam date.
        </p>
      </div>

      {/* Class 11 */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Physics Wallah Class 11 — JEE & NEET Foundation Year
        </h4>
        <p className="mb-3">
          Physics Wallah Class 11 is arguably the most critical product in PW's portfolio. Class 11 is the first year of JEE and NEET preparation — the concepts introduced in Class 11 Physics, Chemistry, Mathematics, and Biology form the majority of questions in both entrance exams. Students who build strong Class 11 foundations typically perform significantly better in their Class 12 year and entrance exams than those who treat Class 11 as a gap year.
        </p>

        <p className="font-semibold text-[#2C2C40] mb-2">
          PW Class 11 JEE courses cover:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Physics:</strong> Units & Measurements, Kinematics, Laws of Motion, Work & Energy, Rotational Motion, Gravitation, Properties of Matter, Thermodynamics, Oscillations & Waves</li>
          <li><strong>Chemistry:</strong> Basic Concepts, Atomic Structure, Classification of Elements, Chemical Bonding, States of Matter, Thermodynamics, Equilibrium, Redox Reactions, Hydrogen, s-Block Elements, Organic Chemistry basics</li>
          <li><strong>Mathematics:</strong> Sets, Relations & Functions, Trigonometry, Straight Lines, Conic Sections, Sequences & Series, Limits & Derivatives, Statistics, Probability</li>
        </ul>

        <p className="font-semibold text-[#2C2C40] mb-2">
          PW Class 11 NEET courses cover the same Physics and Chemistry content plus Biology:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Biology:</strong> Cell Biology, Biomolecules, Cell Division, Plant Kingdom, Animal Kingdom, Structural Organisation, Morphology of Plants & Animals</li>
        </ul>
        <p>
          A PW discount code applied to a Class 11 annual batch subscription delivers one of the highest-value educational savings available on the platform — the Class 11 year-long batch covers the most content volume of any PW offering.
        </p>
      </div>

      {/* Class 12 */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Physics Wallah Class 12 — Board + Entrance Exam Final Year
        </h4>
        <p className="mb-3">
          Physics Wallah Class 12 courses serve a dual purpose — preparing students for Class 12 CBSE or state board exams while simultaneously completing the JEE or NEET syllabus. The final year of school is the highest-pressure academic period for most Indian students, and PW's Class 12 batches are structured to balance board exam requirements with entrance exam preparation efficiently.
        </p>
        <p className="mb-3">
          PW Class 12 courses cover the remaining Class 12 syllabus topics across Physics, Chemistry, Mathematics (JEE track), and Biology (NEET track), alongside revision modules, previous year paper series, and full-length mock tests for JEE Main, JEE Advanced, and NEET UG.
        </p>
        <p>
          For students who studied Class 11 on PW, the Class 12 continuation batch provides seamless syllabus coverage. For students joining PW in Class 12, crash courses and targeted revision batches cover the most high-weightage topics across both Class 11 and 12.
        </p>
      </div>
    </div>
  </div>

  {/* Career Growth Opportunities for PW Students Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Career Growth Opportunities for PW Students
    </h3>
    <p className="mb-4">
      Physics Wallah's impact on student careers extends beyond course content delivery. Here's how PW actively supports student outcomes:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Structured Path to Top Colleges
        </h4>
        <p>
          PW's JEE and NEET preparation tracks have produced IIT, NIT, and medical college selections at scale. The platform publishes results data and student success stories — providing evidence-based reassurance to new students and parents evaluating the platform's effectiveness.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Scholarship & Fee Waiver Programmes
        </h4>
        <p>
          PW runs scholarship tests — PW Scholarships — that allow meritorious students to enrol in paid courses at reduced fees or zero cost. These scholarship exams are open to all students and test subject knowledge relevant to the course they're applying for. A PW promo code combined with a scholarship discount can bring course fees to near-zero for qualifying students.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PW Vidyapeeth for Structured Offline Support
        </h4>
        <p>
          For students who learn better in a physical classroom environment, PW Vidyapeeth centres offer the same curriculum at PW's affordable fee structure with the addition of face-to-face faculty interaction. This is particularly valuable for Class 11 and 12 students who benefit from direct doubt resolution and peer learning.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Mentorship & Community
        </h4>
        <p>
          PW's in-app community and doubt resolution forums create a peer learning environment — students from across India preparing for the same exams support each other's preparation. Senior students and PW faculty actively participate in these forums, providing subject-matter guidance beyond scheduled class hours.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          PW Skills for Post-Exam Career Transition
        </h4>
        <p>
          After JEE or NEET, students who pursue engineering, medicine, or other professional paths often need supplementary skill development. PW Skills offers post-graduation relevant courses in Data Science, Web Development, and Digital Marketing — creating a career pathway that extends PW's relevance beyond school-level preparation.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">PW vs Competitors — How Physics Wallah Compares</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Physics Wallah (PW)</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Unacademy</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">BYJU'S</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Vedantu</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Testbook</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Primary Focus", pw: "JEE, NEET, Class 6–12", unacademy: "Multi-exam including govt jobs", byjus: "Class 4–12, JEE, NEET", vedantu: "JEE, NEET, Class 6–12", testbook: "Govt exams, JEE, NEET" },
                    { feature: "Price Point", pw: "Lowest in category", unacademy: "Mid to high", byjus: "High", vedantu: "Mid", testbook: "Competitive" },
                    { feature: "Free Content", pw: "Extensive YouTube library", unacademy: "Limited free", byjus: "Very limited", vedantu: "Limited free", testbook: "Limited free" },
                    { feature: "Offline Centres", pw: "PW Vidyapeeth — expanding", unacademy: "Limited", byjus: "BYJU'S Tuition Centres", vedantu: "Limited", testbook: "No" },
                    { feature: "Language Support", pw: "Hindi, English & regional", unacademy: "Hindi & English", byjus: "Hindi & English", vedantu: "Hindi & English", testbook: "Hindi, English & regional" },
                    { feature: "Faculty Reputation", pw: "Alakh Pandey + specialist faculty", unacademy: "Strong faculty network", byjus: "Large faculty base", vedantu: "Subject specialist faculty", testbook: "Exam specialist faculty" },
                    { feature: "Govt Exam Prep", pw: "PW Skills (growing)", unacademy: "Strong", byjus: "Limited", vedantu: "Limited", testbook: "Very strong" },
                    { feature: "Best For", pw: "JEE/NEET at lowest cost", unacademy: "Multi-subject coverage", byjus: "Premium school prep", vedantu: "JEE/NEET live coaching", testbook: "Govt exam aspirants" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.pw}</td>
                      <td className="p-4 font-bold text-gray-700">{row.unacademy}</td>
                      <td className="p-4 font-bold text-gray-700">{row.byjus}</td>
                      <td className="p-4 font-bold text-gray-700">{row.vedantu}</td>
                      <td className="p-4 font-bold text-gray-700">{row.testbook}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Bottom line:</strong> For JEE and NEET preparation at the most affordable price point without compromising on content quality, Physics Wallah remains the strongest value proposition in India's edtech market. A PW coupon code from CouponsCrew makes an already-affordable platform even cheaper.
            </p>
          </div>

          {/* Best Alternatives */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Best Alternatives to Physics Wallah
            </h3>
            <p className="mb-4">
              While PW is India's leading affordable JEE and NEET platform, different students have different learning preferences. Here are the best alternatives depending on what you're looking for:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Unacademy — </strong>
              Unacademy covers a wider range of exam categories — JEE, NEET, UPSC, SSC, Banking, and more — under one platform. Unacademy Plus is the paid tier with live classes and structured batches. Pricing is higher than PW for equivalent JEE/NEET courses, but the breadth of exam coverage is stronger for students who want one platform for multiple preparation goals.
            </p>
            <p>
              <strong className="text-[#2C2C40]">BYJU'S — </strong>
              BYJU'S is India's most recognised edtech brand, known for its animated video-based learning approach for Class 4–12 and its JEE/NEET offerings. BYJU'S pricing is among the highest in the segment, making it better suited for families who prioritise brand recognition and can afford premium fees. Content quality is strong, though the sales process has been widely critiqued.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Vedantu — </strong>
              Vedantu is a live online tutoring platform offering personalised and group classes for Class 6–12, JEE, and NEET. Vedantu's strength lies in its interactive live class format and its strong faculty network for Mathematics and Science. Pricing sits between PW and BYJU'S — higher than PW but more accessible than BYJU'S for equivalent coverage.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Testbook — </strong>
              Testbook is the strongest alternative for students who also need to prepare for government competitive exams alongside or after their school/entrance exam journey. Testbook's mock test volume and government exam coverage is unmatched. For pure JEE/NEET preparation, PW is stronger — but for students transitioning from entrance exams to government job preparation, Testbook is the recommended next platform.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Allen Career Institute — </strong>
              Allen is one of India's most established offline JEE and NEET coaching institutes, with its main campus in Kota, Rajasthan. Allen also offers online courses through Allen Digital. For students who want the Kota coaching pedigree with an online delivery format, Allen Digital is the closest alternative to PW in terms of JEE/NEET focus — though pricing is higher.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Aakash Institute (BYJU'S Aakash) — </strong>
              Aakash is India's largest NEET-focused coaching institute (now owned by BYJU'S), with a strong offline and online presence. For NEET aspirants specifically, Aakash's track record of medical college selections and NEET-specific faculty expertise makes it a credible alternative to PW for premium-priced coaching.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">PW Sale Calendar — Best Times to Use Your PW Promo Code</h3>
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
                    { period: "New Year (Jan 1)", offer: "New-batch launch + PW coupon code campaigns" },
                    { period: "Republic Day (Jan 26)", offer: "Flat OFF on annual batch enrolments" },
                    { period: "JEE Main Session 1 (Jan–Feb)", offer: "Post-result crash course offers" },
                    { period: "Board Exam Season (Feb–Mar)", offer: "Class 10 & 12 crash course PW discount codes" },
                    { period: "JEE Advanced (May)", offer: "Post-result batch offers for droppers" },
                    { period: "NEET UG (May)", offer: "Post-exam repeat course offers" },
                    { period: "New Academic Year (Jun–Jul)", offer: "Highest new-batch enrolment period + PW promo codes" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide PW offer code campaigns" },
                    { period: "Diwali (Oct–Nov)", offer: "Festive discount on study material & courses" },
                    { period: "Year-End (Dec)", offer: "Renewal discounts + new batch early-bird offers" }
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
              <strong className="text-[#5B4FBE]">Tip:</strong> The best PW coupon codes launch at the start of the new academic year (June–July) when new Class 9, 10, 11, and 12 batches open enrolments. This is when PW runs its most competitive promotional pricing — check CouponsCrew as soon as batch announcements go live.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">PW Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Apply a PW coupon code before every enrolment. Even a 10%–20% PW discount code on an annual batch subscription saves ₹500–₹1,500. Always check CouponsCrew before completing any PW purchase.",
                "Enrol in annual batches, not monthly. Annual batch pricing on PW is significantly lower per month than month-to-month enrolments. The total cost with an annual PW promo code is the most economical way to access a full year of content.",
                "Use PW's free YouTube content alongside paid courses. PW's YouTube channel remains one of the best free Physics and Chemistry resources available. Use it for concept clarity and reserve paid courses for structured test series, live doubt resolution, and full syllabus coverage.",
                "Take the PW Scholarship test. Before paying full fees, check if a PW scholarship exam is open. Qualifying students can get significant fee reductions or full waivers — a PW offer code on top of a scholarship discount delivers the maximum savings combination.",
                "Start the foundation early — Class 8 or 9, not Class 11. Students who begin structured PW preparation in Class 8 or 9 have a measurably stronger foundation for Class 11 JEE/NEET content. Starting early also spreads the cost of preparation across more years — lower annual spend, better outcomes.",
                "Buy PW Store physical material during sale periods. PW Store books and printed notes are best purchased during Diwali or new academic year sales when a PW discount code on physical material is most readily available.",
                "Check CouponsCrew before every PW purchase. All PW coupon codes on this page are verified before going live. A 60-second check before any batch enrolment, course purchase, or PW Store order regularly saves ₹300–₹1,500."
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
              Similar Platforms to Explore Alongside Physics Wallah
            </h3>
            <p className="mb-4">
              If you're comparing edtech options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Unacademy — </strong>
              Broader exam coverage including government exams; Unacademy Plus for live coaching
            </p>
            <p>
              <strong className="text-[#2C2C40]">Vedantu — </strong>
              Live personalised and group classes for JEE, NEET & Class 6–12
            </p>
            <p>
              <strong className="text-[#2C2C40]">BYJU'S — </strong>
              Premium animated video-based learning for school and entrance exam prep
            </p>
            <p>
              <strong className="text-[#2C2C40]">Testbook — </strong>
              India's strongest platform for government competitive exam mock tests and coaching
            </p>
            <p>
              <strong className="text-[#2C2C40]">Allen Digital — </strong>
              Online version of Allen Career Institute's Kota-pedigree JEE & NEET coaching
            </p>
            <p>
              <strong className="text-[#2C2C40]">Aakash Digital (BYJU'S Aakash) — </strong>
              NEET-specialist coaching with strong offline and online presence
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major edtech platforms. Visit individual store pages for verified, up-to-date PW discount codes and competitor offers.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for PW Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every PW coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired PW offer codes and adding new ones so every listing is accurate.
            </p>
            <p>
              For students and families investing in competitive exam preparation, every rupee saved on course fees matters. A verified PW discount code from CouponsCrew can save ₹300–₹1,500 on a single batch enrolment — money that can go towards books, test series, or additional resources.
            </p>
            <p>
              Bookmark this page and check before every Physics Wallah purchase — Class 8, 9, 10, 11, or 12 courses, JEE and NEET batches, PW Skills, or PW Store orders. A 60-second check on CouponsCrew regularly delivers real savings.
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
            Frequently Asked Questions About PW Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a PW coupon code?",
              a: "Go to pw.live or open the PW app, select your course or batch, and proceed to checkout. Enter your PW coupon code in the \"Apply Coupon\" field and tap Apply. The discounted price will update in your order total before payment."
            },
            {
              q: "Q2. Why is my PW promo code not working?",
              a: "Common reasons include: the code has expired, the minimum purchase value hasn't been met, the code applies to a specific course category only (e.g. JEE batches only, not NEET), or the code is for new users only. Check the terms listed on CouponsCrew for the specific PW discount code you're using."
            },
            {
              q: "Q3. Is Physics Wallah free to use?",
              a: "PW's YouTube channel offers extensive free content — full lecture series for Physics, Chemistry, and other subjects. The PW app also offers some free content. Structured paid batches, live classes, mock test series, and premium study material require a paid enrolment — to which a PW coupon code can be applied."
            },
            {
              q: "Q4. What courses does Physics Wallah offer for Class 11?",
              a: "Physics Wallah Class 11 offers JEE and NEET preparation batches covering Physics, Chemistry, Mathematics (JEE), and Biology (NEET) aligned with the Class 11 NCERT syllabus. Batches are available in Hindi and English medium with live classes, recorded lectures, PDF notes, and tests."
            },
            {
              q: "Q5. Is Physics Wallah good for Class 9 students?",
              a: "Yes. Physics Wallah Class 9 courses cover the full CBSE Class 9 syllabus in Science and Mathematics — designed to build the conceptual foundation needed for Class 10 boards and eventual entrance exam preparation. PW's teaching approach makes complex concepts accessible for Class 9-level understanding."
            },
            {
              q: "Q6. Does PW offer courses for Class 8?",
              a: "Yes. Physics Wallah Class 8 foundation courses are available, covering NCERT Science and Mathematics with additional depth for students planning future JEE or NEET preparation. Starting structured learning in Class 8 gives students a longer runway before the high-stakes exam years."
            },
            {
              q: "Q7. What is PW Vidyapeeth?",
              a: "PW Vidyapeeth is Physics Wallah's network of offline coaching centres, combining PW's affordable fee structure with a physical classroom environment. Vidyapeeth centres are expanding across Tier 2 and Tier 3 cities — offering face-to-face classes, doubt resolution, and structured study environments for students who prefer offline learning."
            },
            {
              q: "Q8. Can I use a PW discount code on the PW Store?",
              a: "Some PW offer codes apply to the PW Store (books, printed notes, stationery) in addition to digital course enrolments. Check the terms of the specific code on CouponsCrew to confirm whether it covers PW Store purchases."
            },
            {
              q: "Q9. Are PW coupon codes available for existing students?",
              a: "Yes. PW regularly distributes discount codes for existing students through the app, email notifications, and during major sale periods. Renewal discounts and batch upgrade codes are also available for students continuing from Class 9 to 10 or Class 11 to 12."
            },
            {
              q: "Q10. How do I contact Physics Wallah support?",
              a: "Physics Wallah customer support is available through the Help section on pw.live and within the PW app. You can raise a query about enrolment, payment, batch access, or technical issues through the in-app support flow or the official website."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular PW Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["PW Coupon Code", "PW Batch Offers", "JEE Main Course", "NEET Batch Discount", "PW Vidyapeeth Fee", "PW vs Unacademy", "PW Store Coupon", "Class 11 Foundation"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top PW Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Annual Batch Offer", sub: "Flat discount on Class 11 & 12 JEE/NEET full-year courses" },
              { heading: "Droppers Batch Special", sub: "Save up to ₹1,500 on repeater & dropper batches" },
              { heading: "Foundation Course Deal", sub: "Special pricing for Class 8, 9 & 10 foundation batches" },
              { heading: "PW Store Books Discount", sub: "Extra percentage off on printed notes & question banks" },
              { heading: "Test Series Pass", sub: "Discounted access to full-length JEE & NEET mock test series" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get PW deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#2563EB]">{activeModalCoupon.code}</span> at PW checkout for instant discounts.
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
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to PW</span>
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
