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
import { Coupon, TESTBOOK_COUPONS } from './testbookCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://testbook.com/';

export default function TestbookStore() {
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

  const coupons: Coupon[] = TESTBOOK_COUPONS;

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
      q: 'How do I use a Testbook coupon code?',
      a: 'To use a Testbook coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Testbook website or app. If it is a deal, simply click "Visit Testbook" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Testbook coupon code not working?',
      a: 'A coupon might not work due to expiry, minimum purchase requirements, or eligibility restrictions such as new users only. Double-check the terms listed with the code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every coupon code shown on this page is checked by our team so you can shop with confidence and avoid wasting time on expired offers.'
    },
    {
      q: 'How often are Testbook coupons updated?',
      a: 'Our deals team reviews and updates Testbook coupons regularly. Expired promotions are removed so you only see codes that are currently working.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically, only one promo code can be applied per order. Try the top-listed verified code first for the best chance of success.'
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
            <Link href="/" className="hover:text-[#4E7FFF] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#4E7FFF] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#4E7FFF] font-semibold">Testbook Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/Testbook-logo_bqxddu.webp"
                      alt="Testbook Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Testbook</h1>
                    <span className="bg-[#EAF0FF] text-[#4E7FFF] text-xs font-bold px-3 py-1 rounded-full border border-[#D6E2FF]">
                      Online Exam Prep & Test Series
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Find the best Testbook coupon codes and promo offers to save on Pass subscriptions, Pro plans, and competitive exam courses. Enjoy up to 61% OFF, 44% OFF monthly plans, 35% OFF courses, free mock tests, and affordable course subscriptions from ₹300/month.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#4E7FFF] bg-[#EAF0FF] px-2.5 py-1 rounded-full border border-[#D6E2FF]">
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
                  className="bg-[#0B1F4D] hover:bg-[#081736] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Testbook</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#4E7FFF] to-[#0B1F4D] items-center justify-center p-8"
            >
              <div className="text-center text-white space-y-3 relative z-10">
                <span className="inline-block bg-white/15 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">Testbook Pass<br />Up to 80% OFF</h3>
                <p className="text-white/80 text-sm">Test Series, Courses & Study Material</p>
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
            <div className="w-11 h-11 bg-[#EAF0FF] text-[#4E7FFF] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EEF1FA] text-[#0B1F4D] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 80%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Best Prices</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAF0FF] text-[#4E7FFF] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Testbook Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Testbook coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#4E7FFF) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#4E7FFF] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#0B1F4D) */}
                <span className="bg-[#0B1F4D]/10 text-[#0B1F4D] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#4E7FFF] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E7FFF]" />
                    <span>Valid on select test series, courses & study material.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E7FFF]" />
                    <span>Minimum purchase value might apply as specified in descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E7FFF]" />
                    <span>Covers selected exam categories and subscription plans.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#0B1F4D]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#0B1F4D) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#0B1F4D] hover:bg-[#081736] text-white"
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
                <Info size={16} className="text-[#4E7FFF]" />
                <span>About Testbook — India's Leading Competitive Exam Platform</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
              Testbook was founded in 2014 by Ashutosh Kumar, Praveen Agrawal, and Narendra Agrawal with a clear mission: make quality competitive exam preparation accessible and affordable for every aspirant in India. What began as a test book mock test platform has evolved into a full-stack learning ecosystem covering live coaching, AI-powered preparation tools, skill-based job courses, and a category-leading Testbook app.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              Today, Testbook serves over 26 million registered users and has established itself as the largest government job preparation platform in India by active user base. The platform covers more than 250 government exams across SSC, Railways, Banking, UPSC, Teaching, State PSC, Police, Defence, and more.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
              Testbook's approach combines high-quality content — created by subject matter experts with proven exam track records — with an accessible pricing model. Testbook mock tests are available at some of the lowest price points in the industry, and the Testbook Pass subscription gives unlimited access to tests and study material across multiple exams for a single annual fee.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
              The platform's technology stack includes an AI-based weak area analysis engine, a performance benchmarking tool that compares a student's score against thousands of real aspirants, and a multilingual content library covering Hindi, English, and regional languages. These features make Testbook a genuinely data-driven preparation platform — not just a repository of practice papers.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#4E7FFF] hover:text-[#4E7FFF] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Testbook</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#4E7FFF] to-[#0B1F4D] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Testbook Exam Prep Sale</h3>
                <span className="inline-block bg-[#0B1F4D] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 80% OFF on Pass, Test Series & Courses
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#4E7FFF] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Use a Testbook Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Redeeming a Testbook promo code or Testbook discount code is straightforward. Here&apos;s how:
  </p>

  <div className="space-y-5">
    <ol className="space-y-2.5 text-xs font-semibold text-[#3A3A3A]">
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Visit Testbook — </span>
          <span>Go to testbook.com or open the Testbook app on iOS or Android.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Choose your exam or course — </span>
          <span>Browse by exam category, select the mock test pack, coaching batch, or course you want.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Add to cart — </span>
          <span>Click on the plan and proceed to purchase.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Look for the coupon field — </span>
          <span>At the payment page, find the &quot;Apply Coupon Code&quot; or &quot;Have a promo code?&quot; field.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Enter your Testbook coupon code — </span>
          <span>Type or paste the code from CouponsCrew and click Apply.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Confirm the discount — </span>
          <span>The reduced price will update in your order summary.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Complete payment — </span>
          <span>Pay via UPI, credit/debit card, net banking, or EMI where available.</span>
        </div>
      </li>
    </ol>

    {/* Tip Box */}
    <div className="bg-[#F0EEFF] border border-[#F0EEFF] rounded-2xl p-3.5 flex items-start gap-2.5">
      <div className="text-xs text-[#3A3A3A]">
        <span className="font-bold text-[#2C2C40]">Tip: </span>
        <span>Some Testbook voucher codes are exclusive to the Testbook app. If a code isn&apos;t working on the website, try redeeming it through the Testbook app instead.</span>
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
          Save on Every Testbook Purchase with a Verified Testbook Coupon Code
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
          {TESTBOOK_COUPONS.map((coupon) => (
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
            Testbook is one of India's most widely used competitive exam preparation platforms — and with the right Testbook coupon code, every mock test pack, live class subscription, or skill course becomes significantly more affordable. Whether you're preparing for SSC, Railways, Banking, Teaching, or State Government exams, Testbook covers the full spectrum of competitive exam categories in India.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates Testbook promo codes, Testbook discount codes, and Testbook voucher codes daily. Every code on this page has been checked before going live — no expired offers, no frustration at checkout.
          </p>

          <p>
            From first-time user discounts on Testbook mock tests to percentage off on Testbook Select coaching and Skill Academy job-ready courses, this page covers every active saving available on Testbook today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Section Header */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Popular Courses and Exam Categories on Testbook
    </h3>
    <p>
      Testbook covers every major government job examination category in India. Here's a breakdown of what's available — and where a Testbook coupon code or Testbook discount code applies.
    </p>
  </div>

  {/* Categories List */}
  <div className="space-y-4">
    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        SSC Exams
      </h4>
      <p>
        SSC (Staff Selection Commission) exams are among the most competitive and most-searched exam categories in India. Testbook covers the full SSC family — SSC CGL, SSC CHSL, SSC MTS, SSC CPO, SSC GD Constable, and SSC Stenographer — with dedicated Testbook mock test packs, topic-wise practice sets, previous year papers, and live coaching batches. SSC preparation on Testbook includes subject-wise tests for Maths, English, Reasoning, and General Awareness.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Railway Exams — RRB & RRC
      </h4>
      <p>
        Railway Recruitment Board (RRB) exams attract millions of applicants every cycle, making them one of the highest-demand categories on Testbook. The platform covers RRB NTPC, RRB Group D, RRB ALP, RRB JE, and RRC exams with full-length Testbook mock test series, stage-wise preparation material, and live classes. Maths test book content for Railways is particularly strong — covering number systems, speed & distance, simplification, and data interpretation in depth.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Banking Exams — IBPS, SBI & RBI
      </h4>
      <p>
        Banking aspirants preparing for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, RBI Assistant, and NABARD exams can access full syllabus coverage, sectional Testbook mock tests, and banking-specific live coaching on Testbook. The platform's banking preparation content is available in both Hindi and English mediums.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Teaching Exams — CTET & State TETs
      </h4>
      <p>
        CTET (Central Teacher Eligibility Test) and state TET exams are covered extensively on Testbook, including subject-specific practice for Paper 1 and Paper 2. Content covers Child Development & Pedagogy, Language 1 & 2, Mathematics, Environmental Studies, Science, and Social Studies. Testbook's CTET mock test series is one of the most used in this category.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        UPSC & State PSC Exams
      </h4>
      <p>
        Testbook covers UPSC Prelims, UPSC Mains, and a wide range of State PSC exams including BPSC, MPPSC, UPPSC, RPSC, JPSC, and more. Preparation includes current affairs modules, static GK packs, and full-length mock tests for both preliminary and mains stages.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Police & Defence Exams
      </h4>
      <p>
        State Police constable and sub-inspector exams, along with defence exams including NDA, CDS, and Agniveer, are covered on Testbook with exam-specific mock test packs and live coaching. The platform's police exam content covers state-specific syllabi for UP Police, Rajasthan Police, MP Police, Delhi Police, and more.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        State Government Exams
      </h4>
      <p>
        Testbook has invested significantly in state-specific exam content — covering Gujarat, Maharashtra, Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Rajasthan, Uttar Pradesh, Madhya Pradesh, Bihar, and other states. State government exam prep is available in regional languages wherever relevant.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Maths Test Book — Dedicated Mathematics Preparation
      </h4>
      <p>
        Mathematics is the most challenging subject for a large share of competitive exam aspirants. Testbook's dedicated maths test book content covers Arithmetic, Algebra, Geometry, Trigonometry, and Data Interpretation from foundational level to advanced exam-standard questions. Chapter-wise tests, topic-wise weak area drills, and full-length maths sections in mock tests make Testbook one of the most comprehensive maths preparation resources available for government exam aspirants.
      </p>
    </div>
  </div>
</div>

          <div className="space-y-6 text-slate-700">
  {/* Testbook Select Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Get Complete Live Coaching with Testbook Select
    </h3>
    <p className="mb-3">
      Testbook Select is Testbook's premium live coaching product — designed for aspirants who want structured, instructor-led preparation rather than self-study.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Testbook Select batches offer:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Live daily classes by experienced faculty with subject expertise in the target exam</li>
      <li>Recorded class access so students can revisit sessions at any time</li>
      <li>Doubt resolution through live Q&A, chat support, and dedicated doubt-clearing sessions</li>
      <li>Full mock test series with performance analytics integrated into the coaching programme</li>
      <li>Current affairs & GK sessions updated regularly to match exam patterns</li>
      <li>Study material including PDFs, notes, and formula sheets provided by faculty</li>
    </ul>
    <p className="mb-3">
      Testbook Select is available for SSC CGL, SSC CHSL, RRB NTPC, RRB Group D, IBPS PO, IBPS Clerk, SBI PO, CTET, UP Police, and several other high-demand exam categories. Batch sizes are structured to allow meaningful interaction between students and instructors — unlike pre-recorded video courses where engagement is passive.
    </p>
    <p className="mb-3">
      For aspirants who have been preparing independently but struggling to maintain consistency or cover the full syllabus systematically, Testbook Select provides the structure and accountability of classroom coaching at a fraction of the cost of offline institutes.
    </p>
    <p>
      A valid Testbook coupon code or Testbook discount code can significantly reduce the cost of a Testbook Select subscription — always check CouponsCrew before enrolling in a coaching batch.
    </p>
  </div>

  {/* Skill Academy Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Learn Professional Skills & Get a Job with Testbook's Skill Academy
    </h3>
    <p className="mb-3">
      Beyond government exam preparation, Testbook operates Skill Academy — a dedicated job-ready skills training platform targeting working professionals and recent graduates looking to upskill or switch careers.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Skill Academy courses cover:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li><strong className="text-[#2C2C40]">Data Science & Analytics — </strong>Python, SQL, Machine Learning, Data Visualisation</li>
      <li><strong className="text-[#2C2C40]">Digital Marketing — </strong>SEO, Social Media Marketing, Google Ads, Content Strategy</li>
      <li><strong className="text-[#2C2C40]">Full Stack Web Development — </strong>HTML, CSS, JavaScript, React, Node.js</li>
      <li><strong className="text-[#2C2C40]">Finance & Accounting — </strong>Tally, GST, Financial Modelling, Accounting Fundamentals</li>
      <li><strong className="text-[#2C2C40]">Cyber Security — </strong>Ethical Hacking, Network Security, VAPT basics</li>
      <li><strong className="text-[#2C2C40]">HR & Soft Skills — </strong>Communication, Interview Preparation, Corporate Readiness</li>
    </ul>
    <p className="mb-3">
      All Skill Academy courses are designed with a placement-assistance focus — students receive resume building support, interview preparation modules, and access to Testbook's hiring partner network upon course completion.
    </p>
    <p>
      Skill Academy courses are priced separately from Testbook's exam preparation products. A Testbook promo code or Testbook voucher code applicable to Skill Academy can make these job-ready programmes significantly more accessible — check CouponsCrew for active Skill Academy discount codes before enrolling.
    </p>
  </div>

  {/* Testbook Pass Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Testbook Pass — Unlimited Preparation for One Annual Price
    </h3>
    <p className="mb-3">
      Testbook Pass is the platform's all-access subscription — a single annual plan that unlocks unlimited Testbook mock tests, study material, and preparation resources across all covered exams.
    </p>
    <p className="font-semibold text-[#2C2C40] mb-2">
      Key benefits of Testbook Pass:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Unlimited mock tests across 250+ government exams</li>
      <li>Previous year papers with detailed solutions</li>
      <li>Topic-wise practice sets for every major subject</li>
      <li>AI-powered performance analysis highlighting weak areas</li>
      <li>Multilingual content in Hindi, English, and regional languages</li>
      <li>Regular content updates as exam patterns change</li>
    </ul>
    <p>
      For aspirants appearing in multiple government exams in a single year — or planning to attempt the same exam in consecutive cycles — Testbook Pass delivers significantly better value than buying individual Testbook mock test packs per exam. A Testbook discount code applied to the annual Testbook Pass subscription compounds the value further.
    </p>
  </div>
</div>

          {/* Testbook App Section */}
          <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-6">Testbook App — Prepare Anytime, Anywhere</h3>
            <p className="text-gray-700 font-bold -mt-2">
              The Testbook app is one of the most downloaded competitive exam preparation apps in India, available on both Android and iOS. The app offers:
            </p>
            <div className="space-y-4">
              {[
                "Full access to Testbook mock test series, live classes, and study material",
                "Offline download of study material for preparation without internet access",
                "Push notifications for new mock tests, batch schedules, and active Testbook promo codes",
                "Real-time performance tracking and rank comparison with other aspirants",
                "The ability to attempt Testbook mock tests in exam simulation mode — timed, full-screen, with an identical interface to the actual online exam"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5B4FBE] shrink-0 mt-2.5 shadow-sm shadow-purple-200" />
                  <p className="text-gray-700 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-6">
              The Testbook app is the primary channel through which Testbook distributes app-exclusive Testbook coupon codes and flash offers. Keeping the app installed and notifications enabled ensures you don't miss limited-period Testbook discount codes.
            </p>
          </div>

          {/* Competitors Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Testbook vs Competitors — How It Compares</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Testbook</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Unacademy</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Adda247</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">PW (Physics Wallah)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Mock Test Volume", tb: "250+ exams", un: "Selected exams", ad: "Strong in banking", pw: "Strong in JEE/NEET" },
                    { feature: "Live Coaching", tb: "Testbook Select", un: "Unacademy Plus", ad: "Yes", pw: "PW Vidyapeeth" },
                    { feature: "Skill Courses", tb: "Skill Academy", un: "Limited", ad: "No", pw: "No" },
                    { feature: "Price Point", tb: "Competitive", un: "Mid-high", ad: "Competitive", pw: "Low to mid" },
                    { feature: "Language Support", tb: "Hindi, English, Regional", un: "Hindi & English", ad: "Hindi & English", pw: "Hindi & English" },
                    { feature: "AI Analytics", tb: "Yes", un: "Yes", ad: "Limited", pw: "Limited" },
                    { feature: "Best For", tb: "Govt exam aspirants", un: "Multiple exam types", ad: "Banking & SSC", pw: "JEE, NEET & Govt" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE] bg-[#f0eeff]/30">{row.tb}</td>
                      <td className="p-4 font-medium text-gray-600">{row.un}</td>
                      <td className="p-4 font-medium text-gray-600">{row.ad}</td>
                      <td className="p-4 font-medium text-gray-600">{row.pw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm">
              For government job aspirants specifically, Testbook's combination of mock test volume, live coaching through Testbook Select, and low per-test pricing makes it one of the strongest value propositions in the category — especially when a Testbook coupon code is applied.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Testbook Sale Calendar — Best Times to Use Your Testbook Promo Code</h3>
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
                    { period: "New Year (Jan 1)", offer: "Highest new-year discount on annual plans" },
                    { period: "Republic Day (Jan 26)", offer: "Flat % OFF on Testbook Pass" },
                    { period: "Budget Season (Feb)", offer: "Finance & banking exam offers" },
                    { period: "Holi (March)", offer: "Festive Testbook coupon code campaigns" },
                    { period: "Exam Notification Season (varies)", offer: "Mock test pack discounts when results/notifications drop" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide Testbook discount code" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Coaching batch launch offers" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-traffic annual sale" },
                    { period: "Year-End (Dec)", offer: "Renewal discounts on Testbook Pass" }
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
              <strong className="text-[#5B4FBE]">Tip:</strong> The best Testbook promo codes often launch alongside major exam notifications (SSC CGL, RRB NTPC, IBPS PO). When a notification drops, Testbook frequently runs limited-period discount campaigns. Check CouponsCrew as soon as a new exam notification is announced.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Testbook Saving Tips and Tricks</h3>
            <div className="space-y-6">
              {[
                "Buy Testbook Pass instead of individual packs. If you're preparing for more than one exam, the Testbook Pass annual subscription delivers far better value per mock test than buying individual packs. Apply a Testbook discount code on the Pass for maximum savings.",
                "Apply a Testbook coupon code before every purchase. Even small percentage discounts add up over a year of preparation. Always check CouponsCrew before paying — a 10%–20% Testbook promo code can save ₹200–₹500 on coaching subscriptions.",
                "Use the Testbook app for app-exclusive codes. Testbook distributes its best Testbook voucher codes through the app, not the website. Keep the app installed and notifications on.",
                "Enrol in Testbook Select early. Testbook Select coaching batches fill up and prices often increase closer to the exam date. Enrolling early — with a Testbook coupon code — locks in the best combination of price and access duration.",
                "Combine mock tests with maths test book content. Aspirants who attempt full-length Testbook mock tests and then revisit Testbook's maths test book material for weak topics show measurably better score improvement than those who do only one or the other. The platform's AI analytics make this workflow efficient.",
                "Refer friends for extra discounts. Testbook's referral programme gives both referrer and referred user a discount. Use your referral code alongside a Testbook promo code for stacked savings.",
                "Check for Skill Academy bundle deals. Testbook occasionally bundles government exam preparation with Skill Academy access at a combined price lower than buying separately. These deals move quickly — CouponsCrew lists them as they go live."
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
              Similar Platforms to Explore for Competitive Exam Preparation
            </h3>
            <p className="mb-4">
              If you're comparing competitive exam preparation platforms, these options are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Unacademy — </strong>
              Live and recorded classes for government, engineering, and professional exams
            </p>
            <p>
              <strong className="text-[#2C2C40]">Adda247 — </strong>
              Strong coverage of banking, SSC, and teaching exams with Hindi-medium content
            </p>
            <p>
              <strong className="text-[#2C2C40]">PW (Physics Wallah) — </strong>
              Popular for JEE, NEET, and expanding government exam preparation
            </p>
            <p>
              <strong className="text-[#2C2C40]">BYJU's Exam Prep — </strong>
              Comprehensive exam coverage with structured study plans
            </p>
            <p>
              <strong className="text-[#2C2C40]">Gradeup (now BYJU's Exam Prep) — </strong>
              Legacy community platform now integrated into BYJU's ecosystem
            </p>
            <p>
              <strong className="text-[#2C2C40]">KD Campus — </strong>
              Offline-first coaching institution with online resources for SSC and banking
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major edtech platforms. Visit individual store pages for verified, up-to-date Testbook discount codes and offers across competing platforms.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Testbook Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every Testbook coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired Testbook voucher codes and adding new ones so every listing is accurate.
            </p>
            <p>
              For aspirants on a preparation budget, every saving counts. A verified Testbook discount code from CouponsCrew can make the difference between an affordable mock test pack and an out-of-reach coaching subscription.
            </p>
            <p>
              Bookmark this page and check before every Testbook purchase — mock tests, Testbook Select coaching, or Skill Academy courses. A 60-second check on CouponsCrew regularly saves ₹200–₹600 per order.
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
            Frequently Asked Questions About Testbook Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a Testbook coupon code?",
              a: "Go to testbook.com or open the Testbook app, select the mock test pack, coaching batch, or course you want, and proceed to the payment page. Enter your Testbook coupon code in the \"Apply Coupon\" field and tap Apply. The discounted price will update before you complete payment."
            },
            {
              q: "Q2. Why is my Testbook promo code not working?",
              a: "Common reasons include: the code has expired, the minimum purchase amount hasn't been met, the code applies to a specific product category (e.g. mock tests only, not coaching), or the code is for new users only. Check the terms listed on CouponsCrew for the specific Testbook discount code you're using."
            },
            {
              q: "Q3. Are Testbook coupon codes available for existing users?",
              a: "Yes. Testbook regularly offers discount codes for existing users through the app, email campaigns, and during major sale periods. Bank card offers and referral codes are also available to existing users. CouponsCrew lists both new-user and all-user Testbook promo codes separately."
            },
            {
              q: "Q4. What is Testbook Pass and is it worth it?",
              a: "Testbook Pass is an annual all-access subscription covering unlimited Testbook mock tests and study material across 250+ government exams. For aspirants appearing in multiple exams or preparing over an extended period, it is almost always better value than buying individual packs. Apply a Testbook voucher code at checkout to reduce the Pass price further."
            },
            {
              q: "Q5. What exams does Testbook cover?",
              a: "Testbook covers 250+ government exams including SSC CGL, SSC CHSL, RRB NTPC, RRB Group D, IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, UPSC, State PSCs, CTET, State TETs, Police exams, Defence exams (NDA, CDS, Agniveer), and many state government exams across India."
            },
            {
              q: "Q6. What is Testbook Select?",
              a: "Testbook Select is Testbook's live coaching product — structured daily classes taught by experienced faculty for specific government exams. It includes recorded access, doubt resolution, current affairs sessions, and integrated mock tests. A Testbook coupon code can reduce the cost of a Testbook Select enrolment significantly."
            },
            {
              q: "Q7. What is Testbook Skill Academy?",
              a: "Skill Academy is Testbook's job-skills training platform offering courses in Data Science, Digital Marketing, Web Development, Finance, Cyber Security, and HR. Courses are designed for placement assistance and include resume building and interview preparation. Check CouponsCrew for active Testbook discount codes on Skill Academy programmes."
            },
            {
              q: "Q8. Is the Testbook app free to use?",
              a: "The Testbook app is free to download. Some mock tests and study material are available free of charge. Full access to the complete test series, live coaching, and Skill Academy courses requires a paid subscription or individual purchase — to which a Testbook promo code can be applied."
            },
            {
              q: "Q9. Can I use a Testbook voucher code on the Testbook app?",
              a: "Yes. Most Testbook coupon codes work on both the website and the app. Some Testbook voucher codes are app-exclusive — if a code isn't working on the website, try redeeming it through the Testbook app."
            },
            {
              q: "Q10. How do I contact Testbook support?",
              a: "Testbook customer support is available through the Help section on testbook.com and within the Testbook app. You can raise a support ticket or use the live chat feature for queries related to subscriptions, payments, or course access."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Testbook Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Testbook Coupon Code", "Testbook Pass Offers", "Testbook Select Discount", "Testbook Promo Code", "Skill Academy Offers", "Testbook App Exclusive", "SSC Mock Test Deals", "CouponsCrew EdTech"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Testbook Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat 10%-20% Off Testbook Pass", sub: "Unlimited access to mock tests across 250+ exams" },
              { heading: "Testbook Select Early Bird", sub: "Save up to ₹500 on live coaching subscriptions" },
              { heading: "App-Exclusive Promo Codes", sub: "Additional discount on Testbook mobile app checkout" },
              { heading: "Skill Academy Job-Ready Courses", sub: "Discounts on Data Science, Web Dev & Marketing" },
              { heading: "Referral Bonus Discounts", sub: "Extra savings when using friend referral codes" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">T</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Testbook deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#4E7FFF]">{activeModalCoupon.code}</span> at Testbook checkout for instant discounts.
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
                className="w-full bg-[#0B1F4D] hover:bg-[#081736] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Testbook</span>
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
