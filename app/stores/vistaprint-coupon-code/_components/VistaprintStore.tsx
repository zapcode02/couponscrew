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
import { Coupon, VISTAPRINT_COUPONS } from './vistaprintCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.vistaprint.in';

export default function VistaprintStore() {
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

  const coupons: Coupon[] = VISTAPRINT_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Vistaprint Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/vista-logo_wwjono.webp"
                      alt="Vistaprint Logo"
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
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Vistaprint Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Business Cards, Custom Printing & Signage
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Design and order business cards, signage, apparel & custom stationery online. Get the best deals with Vistaprint coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 40+ Offers
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
                  <span>Visit Vistaprint</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.google.com/preferences/source?q=couponscrew.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#0468D7]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/vista-logo_wwjono.webp"
                alt="Vistaprint Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-contain p-16 w-full h-full"
                priority
              />
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">40+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Vistaprint Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Vistaprint coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
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
                                <span>Valid on select print, signage, and design categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected products and quantity tiers.</span>
                              </li>
                            </ul>
                          )}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">
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
                <span>The Story Behind Vistaprint</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Vistaprint was founded in 1995 by Robert Keane, originally launched in France as a print-on-demand technology company aimed at making professional printing accessible and affordable for small businesses. Before Vistaprint, ordering custom-printed business cards or marketing materials typically required expensive minimum orders that priced out small businesses and freelancers.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                Vistaprint pioneered a model that pooled small orders from many customers onto shared print runs, dramatically lowering the cost per unit. Today the company is part of Cimpress N.V., a Nasdaq-listed parent company, and serves tens of millions of small business customers worldwide with an ever-expanding catalogue spanning print, signage, apparel, and digital design tools.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Vistaprint</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Vistaprint Business Print Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Business Cards, Signage & More
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
                Top Categories at Vistaprint
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Business Cards</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Marketing Materials</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Signage & Displays</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Apparel & Promo</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Custom Stationery</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Vistaprint */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Vistaprint Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Vistaprint coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable Vistaprint offer without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>We specifically track Indian bank promotions from HDFC and ICICI so you always know which card unlocks the maximum instant discount at checkout.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bulk Order Alerts</span>
                    <span>Bulk-pricing promotions on business cards and marketing materials are flagged on CouponScrew as soon as they go live.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>CouponScrew publishes Vistaprint sale codes ahead of major business seasons, so you do not need to wait for the sale to start.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using a Vistaprint coupon code on CouponScrew is completely free and requires no account or sign-up.</span>
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
                Vistaprint Coupon Code India (August 2026): Up to 50% Off Business Cards & Printing — Verified
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Vistaprint Business Printing and Design Coupon Offers</caption>
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
                    {[
                      {
                        offerType: 'UP TO 50% OFF',
                        category: 'Business Cards',
                        discount: 'Up to 50% OFF',
                        highlights: 'Standard and premium finish business cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 300',
                        category: 'New User',
                        discount: 'Flat ₹300',
                        highlights: 'First order discount above ₹999.',
                        userType: 'New Users'
                      },
                      {
                        offerType: 'UP TO 40% OFF',
                        category: 'Marketing Materials',
                        discount: 'Up to 40% OFF',
                        highlights: 'Flyers, brochures, and banners.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 35% OFF',
                        category: 'Signage',
                        discount: 'Up to 35% OFF',
                        highlights: 'Yard signs and trade show displays.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 30% OFF',
                        category: 'Apparel',
                        discount: 'Up to 30% OFF',
                        highlights: 'Custom t-shirts, mugs, and tote bags.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 25% OFF',
                        category: 'Bulk Order',
                        discount: 'Up to 25% OFF',
                        highlights: 'Bulk business cards and flyer orders.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FREE DESIGN',
                        category: 'Design Tool',
                        discount: 'Free Access',
                        highlights: 'VistaCreate design templates.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 10% OFF',
                        category: 'Bank Offer',
                        discount: 'Up to 10% OFF',
                        highlights: 'Instant discount with HDFC & ICICI cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 45% OFF',
                        category: 'Custom Stationery',
                        discount: 'Up to 45% OFF',
                        highlights: 'Invitations and holiday greeting cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'RUSH DELIVERY',
                        category: 'Fast Turnaround',
                        discount: 'Discounted Add-On',
                        highlights: 'Rush production on select print products.',
                        userType: 'All Users'
                      }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                        <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
                          {row.offerType}
                        </td>
                        <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                          {row.category}
                        </td>
                        <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
                          {row.discount}
                        </td>
                        <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
                          {row.highlights}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
                            {row.userType}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

                <p>
                  Looking for a verified Vistaprint coupon code before placing your next print order? You have come to the right place. CouponScrew tracks and verifies every active Vistaprint discount code, promo code, and bulk-pricing offer daily — so you always get a working offer, never an expired one. From business cards and signage to apparel and custom stationery, we cover every category. Copy your code above and start saving on your next Vistaprint order right now.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From a French Print-Tech Startup to a Global Small-Business Partner
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Vistaprint in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  Today, Vistaprint serves tens of millions of small business customers globally, with a catalogue that has expanded well beyond its original business card focus into signage, apparel, packaging, and full website and logo design services. As part of Cimpress N.V., Vistaprint benefits from shared manufacturing scale across the parent company's broader print network, which is part of why per-unit prices stay competitive even at small order quantities.
                </p>

                <p>
                  Add to this the free VistaCreate design tool, automatic bulk pricing tiers that reward larger orders, and a satisfaction guarantee covering print defects, and it becomes clear why using a Vistaprint coupon code from CouponScrew on top of already accessible small-business pricing is simply the smartest way to shop here.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Shop at Vistaprint
                  </h3>
                  <p>
                    Vistaprint covers every print and design need for small businesses and individuals. Here is a detailed look at what each section offers and what kind of Vistaprint discount codes apply to each.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Business Cards — Up to 50% Off: </strong>
                    Business cards remain Vistaprint's founding category and still the most frequently ordered product on the platform. Standard matte and glossy finishes sit alongside premium options like textured, foil-stamped, and rounded-corner cards, with pricing starting from a pack of 100 cards and scaling down per-unit as quantity increases.
                    <br />
                    Vistaprint coupon codes for business cards are among the most frequently searched, and for good reason — a 40% discount on a 500-card premium order can save several hundred rupees in one transaction. The best time to apply a Vistaprint promo code is when placing a first-time or bulk order, since both first-order and bulk discounts often apply on the same cart.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Marketing Materials — Up to 40% Off: </strong>
                    Flyers, brochures, and banners round out Vistaprint's core small-business marketing offering, with templates covering everything from restaurant menus to real estate listing flyers. Custom sizing and paper stock options let businesses match materials to specific use cases, from handout flyers to large event banners.
                    <br />
                    A Vistaprint discount code applied on a bulk flyer order for an event or campaign launch can meaningfully reduce total marketing spend, especially when combined with the automatic bulk-pricing tier.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Signage & Displays — Up to 35% Off: </strong>
                    Yard signs, retractable banners, and trade show displays serve businesses that need visible, durable signage for events, storefronts, or open houses. Weather-resistant materials are standard for outdoor signage, while trade show displays are built for repeated setup and breakdown.
                    <br />
                    Vistaprint promo codes for signage are especially valuable ahead of trade shows and seasonal sales events, when businesses often order multiple display pieces at once.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Apparel & Promotional Products — Up to 30% Off: </strong>
                    Custom t-shirts, mugs, and tote bags let businesses and individuals create branded merchandise or personalised gifts without needing a separate print shop relationship. This category sees consistent demand around corporate events, team merchandise, and personalised gifting occasions.
                    <br />
                    Vistaprint coupon codes apply to this category sitewide, meaning you can mix apparel with a business card or stationery order and apply a single promo code to the entire cart.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Custom Stationery — Up to 45% Off: </strong>
                    Invitations and holiday greeting cards make up Vistaprint's personal-use stationery range, distinct from the business-focused categories. Wedding invitations, birthday party invites, and festive season cards are all customisable through the same VistaCreate design tool used for business products.
                    <br />
                    The deepest Vistaprint discount codes for stationery typically appear ahead of major holiday and wedding seasons, when demand — and promotional activity — both peak.
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Vistaprint Coupon Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using a Vistaprint discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Vistaprint offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Vistaprint page.",
                      "Choose Your Product — Go to Vistaprint.in and select the product category — business cards, signage, apparel, or stationery.",
                      "Customise Your Design — Use a free VistaCreate template or upload your own design, then choose your paper stock, size, and quantity.",
                      "Go to Checkout — Proceed to checkout. Find the \"Enter promo code\" field in the order summary section.",
                      "Paste Your Vistaprint Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your order total immediately.",
                      "Stack Your Bank Card Offer — At the payment step, check for eligible HDFC or ICICI card discounts. Apply both. This is the step most shoppers miss — and it is where you unlock the second layer of savings.",
                      "Complete Payment — Confirm your order. You will receive an order confirmation with an estimated production and delivery timeline via email."
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Why Millions of Small Businesses Choose Vistaprint
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">VistaCreate — Free, Genuinely Usable Design Tool: </strong>
                    Most small businesses do not have a dedicated designer on staff. VistaCreate exists specifically to solve this, offering free browser-based templates for business cards, flyers, and social media graphics — no separate design software subscription required.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Automatic Bulk Pricing — Rewards for Larger Orders: </strong>
                    Unlike flat per-unit pricing across the board, Vistaprint's per-unit cost automatically drops as order quantity increases, making it genuinely economical for businesses that need hundreds or thousands of units rather than just a handful.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Satisfaction Guarantee on Print Defects: </strong>
                    Print quality issues do happen occasionally with any printer. Vistaprint's satisfaction guarantee covers reprints or refunds for genuine production defects, reported within the claim window shown on your order confirmation — a meaningful safety net for businesses ordering in bulk.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">One Platform for Every Print Need: </strong>
                    From a first batch of business cards to full event signage and branded apparel, Vistaprint lets businesses consolidate multiple print needs into a single order and a single coupon code, rather than juggling several vendor relationships.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Part of Cimpress — Backed by Shared Manufacturing Scale: </strong>
                    As part of the Nasdaq-listed Cimpress group, Vistaprint benefits from shared production infrastructure across the parent company's global print network, contributing to consistently competitive small-order pricing.
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Print Smarter — Make Every Rupee Count at Vistaprint
                  </h3>

                  <p>
                    Every business card, banner, or invitation you order is a reflection of your brand — and there is no reason to pay full price for any of it. CouponScrew keeps every active Vistaprint coupon code, promo code, and bulk-pricing offer verified and ready for you, updated daily, completely free. Bookmark this page before your next Vistaprint order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                <h2 className="text-2xl font-black text-black mb-8">
                  Frequently Asked Questions About Vistaprint Coupon Codes
                </h2>
                {[
                  {
                    q: "What is the best Vistaprint coupon code available right now?",
                    a: "The best active Vistaprint coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first order, while business cards and bulk print orders regularly carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
                  },
                  {
                    q: "Is there a minimum order quantity on Vistaprint?",
                    a: "Minimum order quantities vary by product — business cards are typically sold starting from packs of 100, while larger-format items like banners and signage can often be ordered as a single piece. Bulk pricing tiers automatically apply as quantity increases, so the per-unit cost drops the more you order, which is displayed on the product page before checkout."
                  },
                  {
                    q: "How does the VistaCreate design tool work?",
                    a: "VistaCreate is Vistaprint's free online design tool that lets you customise templates for business cards, flyers, social media graphics, and more, directly in your browser without needing separate design software. Free templates cover most common use cases, while some premium templates and stock assets may carry an additional cost — clearly marked before you add them to your design."
                  },
                  {
                    q: "How long does a rush order take to arrive?",
                    a: "Standard production and delivery timelines are shown on every product page before you order, typically ranging from a few business days to around two weeks depending on the product and customisation complexity. Rush production is available as a paid add-on on select products, reducing production time — though shipping time is separate and depends on your delivery location."
                  },
                  {
                    q: "Are there bulk discounts for business orders?",
                    a: "Yes. Vistaprint applies automatic bulk pricing tiers as your order quantity increases — the per-unit price for 500 business cards is lower than for 100, and larger quantities unlock progressively deeper per-unit rates. This is separate from promotional coupon codes, so a bulk order combined with an active CouponsCrew offer typically delivers the best overall value."
                  },
                  {
                    q: "What is Vistaprint's return and reprint policy?",
                    a: "Vistaprint offers a satisfaction guarantee on most products — if an order arrives with a print defect or production error, a free reprint or refund is typically available when reported within the stated claim window on the order confirmation. Custom-designed items are generally non-returnable for buyer's-remorse reasons once printed, since they are made to order, so it is worth reviewing your proof carefully before confirming."
                  },
                  {
                    q: "Can I use a Vistaprint coupon code with a bank card offer?",
                    a: "Yes. Apply your CouponsCrew Vistaprint offer at checkout, then pay with an eligible HDFC or ICICI card to unlock an additional instant discount. This stacks on top of any bulk-order pricing tier already applied to your cart, giving you multiple layers of savings on the same order."
                  },
                  {
                    q: "Does VistaCreate cost anything to use?",
                    a: "The core VistaCreate design tool and most templates are free to use for designing your print products. Certain premium stock photos, fonts, or advanced template packs may carry a small additional licensing cost, which is clearly shown before you add them to a design — the base design experience itself does not require a paid subscription."
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Vistaprint Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Vistaprint Coupons", "Business Card Offers", "Signage Discount Deals", "Vistaprint Bulk Order Sale", "VistaCreate Templates", "New User Vistaprint Offer", "Vistaprint Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Vistaprint Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Business Cards — Up to 50% OFF", sub: "Standard and premium finishes — deepest discounts of the year" },
                    { heading: "Bulk Order Discount — Up to 25% OFF", sub: "Larger quantities of cards and flyers, lower per-unit cost" },
                    { heading: "Free VistaCreate Templates", sub: "Design your print products online, no extra cost" },
                    { heading: "10% Bank Card Discount", sub: "HDFC, ICICI — instant discount at checkout" },
                    { heading: "New User First-Order Offer", sub: "Flat ₹300 off for first-time Vistaprint customers" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">V</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Vistaprint deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Vistaprint checkout for instant discounts.
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
                <span>Continue to Vistaprint</span>
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
