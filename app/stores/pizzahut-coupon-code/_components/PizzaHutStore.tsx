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
import { Coupon, PIZZAHUT_COUPONS } from './pizzahutCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.pizzahut.co.in';

export default function PizzaHutStore() {
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

  const coupons: Coupon[] = PIZZAHUT_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Pizza Hut Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/pizzahut-logo_ktgfcg.webp"
                      alt="Pizza Hut Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.3 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Pizza Hut Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Pizza, Sides & Delivery Deals
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Order Pan Pizza, Cheese Burst, sides & WOW Box combos at India's favourite pizza chain. Get the best deals with Pizza Hut coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 55+ Offers
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
                  <span>Visit Pizza Hut</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#E4002B]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/pizzahut-logo_ktgfcg.webp"
                alt="Pizza Hut Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">55+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Pizza Hut Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Pizza Hut coupon codes & offers.</p>
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
                                <span>Valid on select pizza, sides, and combo categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum order value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected outlets and delivery zones.</span>
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
                <span>The Story Behind Pizza Hut</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Pizza Hut was founded in 1958 in Wichita, Kansas, by brothers Dan and Frank Carney, who borrowed $600 from their mother to open the first restaurant. The chain expanded rapidly through the following decades, growing into one of the world's largest pizza chains by number of locations. Since 1997, Pizza Hut has operated as part of Yum! Brands, alongside KFC and Taco Bell.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                In India, Pizza Hut runs through master franchisee partners across metro and Tier 2 cities, offering dine-in, delivery, and takeaway channels. The India menu blends global favourites like Pan Pizza and Stuffed Crust with locally adapted vegetarian options and value combos like the WOW Box, built specifically for the Indian market.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Pizza Hut</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Pizza Hut WOW Box Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Pizzas, Sides & Combos
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Order Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Pizza Hut
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Pan Pizza & Cheese Burst</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">WOW Box Combos</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sides & Desserts</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Stuffed Crust</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Party & Bulk Orders</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Pizza Hut */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Pizza Hut Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Pizza Hut coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable Pizza Hut offer without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>We specifically track Indian bank promotions from HDFC and Axis Bank so you always know which card unlocks the maximum instant discount at checkout.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Combo Deal Alerts</span>
                    <span>WOW Box and Buy 1 Get 1 pizza offers are flagged on CouponScrew as soon as they go live, giving you the best chance to grab them.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>CouponScrew publishes Pizza Hut sale codes ahead of major cricket-season and festive promotions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using a Pizza Hut coupon code on CouponScrew is completely free and requires no account or sign-up.</span>
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
                Pizza Hut Coupon Code India (August 2026): Up to 50% Off + Free Delivery — Verified
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Pizza Hut Pizza, Sides, and Combo Coupon Offers</caption>
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
                        category: 'Pizza',
                        discount: 'Up to 50% OFF',
                        highlights: 'Pan Pizza and Cheese Burst range combos.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 150',
                        category: 'New User',
                        discount: 'Flat ₹150',
                        highlights: 'First app order discount above ₹399.',
                        userType: 'New Users'
                      },
                      {
                        offerType: 'BUY 1 GET 1',
                        category: 'Medium Pizza',
                        discount: 'Buy 1 Get 1 Free',
                        highlights: 'Selected weekdays via the app.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 40% OFF',
                        category: 'WOW Box',
                        discount: 'Up to 40% OFF',
                        highlights: 'Value combo meals.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 30% OFF',
                        category: 'Sides',
                        discount: 'Up to 30% OFF',
                        highlights: 'Garlic breadsticks, wings, and pasta.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FREE DELIVERY',
                        category: 'Delivery',
                        discount: 'Free Delivery',
                        highlights: 'On orders above ₹499.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 20% OFF',
                        category: 'Dine-In',
                        discount: 'Up to 20% OFF',
                        highlights: 'Select outlet dine-in bills.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 15% OFF',
                        category: 'Bank Offer',
                        discount: 'Up to 15% OFF',
                        highlights: 'Instant discount with HDFC & Axis cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 35% OFF',
                        category: 'Stuffed Crust',
                        discount: 'Up to 35% OFF',
                        highlights: 'Stuffed Crust pizza range.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 25% OFF',
                        category: 'Party Orders',
                        discount: 'Up to 25% OFF',
                        highlights: 'Bulk orders for parties and gatherings.',
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
                  Looking for a verified Pizza Hut coupon code before placing your next order? You have come to the right place. CouponScrew tracks and verifies every active Pizza Hut discount code, promo code, and combo deal daily — so you always get a working offer, never an expired one. From Pan Pizza and Stuffed Crust to WOW Box combos and dine-in bills, we cover every category. Copy your code above and start saving on your next Pizza Hut order right now.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From a Wichita Storefront to a Global Pizza Icon
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Pizza Hut in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  Today, Pizza Hut operates across metro and Tier 2 cities in India through master franchisee partners, spanning dine-in restaurants, delivery-only kitchens, and takeaway counters. As part of Yum! Brands, Pizza Hut shares infrastructure and delivery-technology learnings with sister brands KFC and Taco Bell, contributing to consistently fast app-ordering experiences across all three chains in India.
                </p>

                <p>
                  Add to this India-specific value innovations like the WOW Box — built specifically to compete on price-per-order value — and a steady stream of app-exclusive weekday deals, and it becomes clear why using a Pizza Hut coupon code from CouponScrew on top of an already competitive combo price is simply the smartest way to order here.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Order at Pizza Hut
                  </h3>
                  <p>
                    Pizza Hut covers every craving from a quick snack to a full party order. Here is a detailed look at what each section offers and what kind of Pizza Hut discount codes apply to each.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Pan Pizza & Cheese Burst — Up to 50% Off: </strong>
                    The Pan Pizza and Cheese Burst ranges are Pizza Hut's signature revenue category and the most popular among Indian customers, with a thick, buttery crust and a wide selection of vegetarian and non-vegetarian toppings. Sizes range from personal to family portions, with combo pricing typically starting around ₹199 for a personal pizza and going up to ₹899+ for large family combos.
                    <br />
                    Pizza Hut coupon codes for pizza combos are among the most frequently searched, and for good reason — a 40% discount on a ₹700 family combo saves you close to ₹280 in one order. The best time to apply a Pizza Hut promo code is during weekday app-exclusive windows, when discounts on medium and large pizzas reach their deepest levels of the week.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">WOW Box Value Meals — Up to 40% Off: </strong>
                    The WOW Box is Pizza Hut India's dedicated value-combo line, bundling a pizza, side, and beverage at a fixed low price point aimed squarely at budget-conscious solo diners and students. This category has become one of the fastest-growing parts of the India menu specifically because of its predictable, low starting price.
                    <br />
                    A Pizza Hut discount code applied on a WOW Box order stacks well with the already-low combo price, making it one of the most cost-effective ways to order a full meal from the app.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Sides & Desserts — Up to 30% Off: </strong>
                    Garlic breadsticks, chicken wings, pasta, and choco lava cakes round out the Pizza Hut menu beyond pizza itself, frequently ordered as an add-on to boost order value past the free-delivery threshold. This category sees consistent demand year-round, with wings and breadsticks being the most reordered items.
                    <br />
                    Pizza Hut promo codes for sides are commonly bundled into combo deals rather than offered standalone, so checking the combo builder before ordering items individually is worth doing.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Stuffed Crust — Up to 35% Off: </strong>
                    The Stuffed Crust range wraps a ring of melted cheese into the pizza crust itself, positioned as a premium option above the standard Pan Pizza base. This category carries a higher price point but also sees some of the deepest percentage discounts during major festive and cricket-season promotions.
                    <br />
                    A Pizza Hut coupon code on Stuffed Crust during a promotional window can bring the premium price close to standard Pan Pizza pricing, making it a popular upgrade choice when an active offer is live.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Party & Bulk Orders — Up to 25% Off: </strong>
                    Pizza Hut accepts bulk orders for birthday parties, office gatherings, and family events, with discount tiers activating once the order crosses a set pizza count or total value. Advance notice to the specific outlet is generally recommended for very large orders to ensure timely preparation.
                    <br />
                    Pizza Hut coupon codes apply to bulk orders sitewide in most cases, meaning any active code typically works here alongside the bulk-order pricing tier.
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Pizza Hut Coupon Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using a Pizza Hut discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Pizza Hut offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Pizza Hut page.",
                      "Open the App or Website — Go to the Pizza Hut app or website and select your delivery address or nearest outlet.",
                      "Build Your Order — Add pizzas, sides, and combos to your cart. Check the offer description for any combo exclusions before finalising items.",
                      "Go to Checkout — Proceed to checkout. Find the \"Apply Coupon\" field just above the order total section.",
                      "Paste Your Pizza Hut Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your order total immediately.",
                      "Stack Your Bank Card Offer — At the payment step, check for eligible HDFC or Axis Bank card discounts. Apply both. This is the step most customers miss — and it is where you unlock the second layer of savings.",
                      "Complete Payment — Confirm your order. You will receive an order confirmation with estimated delivery time via the app or SMS."
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
                    Why Millions of Customers Choose Pizza Hut
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">Decades of Consistent Recipe Quality: </strong>
                    Few pizza chains can match Pizza Hut's global track record for recipe consistency across thousands of outlets. The Pan Pizza formula in particular has remained a defining differentiator against thinner-crust competitors for decades.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">WOW Box — Built Specifically for Value-Conscious India: </strong>
                    Most global pizza chains sell a scaled-down version of their international menu in India. The WOW Box is a genuine India-market innovation, designed from the ground up to hit an accessible price point without sacrificing the core Pizza Hut combo experience.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Multiple Ordering Channels — Delivery, Dine-In, Takeaway: </strong>
                    Unlike delivery-only competitors, Pizza Hut maintains a genuine dine-in restaurant network alongside its app-ordering business, giving customers the flexibility to choose based on occasion — a quick solo delivery order versus a full family dine-in experience.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Yum! Brands Backing — Shared Delivery Infrastructure: </strong>
                    As part of Yum! Brands alongside KFC and Taco Bell, Pizza Hut benefits from shared logistics learnings and technology investment across the group's India operations, contributing to consistently fast app-ordering and delivery tracking.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Frequent App-Exclusive Weekday Deals: </strong>
                    Pizza Hut regularly runs weekday-specific promotions — Buy 1 Get 1 medium pizzas on select days being a recurring favourite — that are only available through the app rather than dine-in ordering, rewarding customers who order digitally.
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Order Smarter — Make Every Rupee Count at Pizza Hut
                  </h3>

                  <p>
                    Every pizza night is worth getting right — and there is no reason to pay full price for any of it. CouponScrew keeps every active Pizza Hut coupon code, promo code, and combo deal verified and ready for you, updated daily, completely free. Bookmark this page before your next Pizza Hut order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                  Frequently Asked Questions About Pizza Hut Coupon Codes
                </h2>
                {[
                  {
                    q: "What is the best Pizza Hut coupon code available right now?",
                    a: "The best active Pizza Hut coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first app order, while WOW Box combos and Buy 1 Get 1 pizza offers regularly carry the deepest value. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
                  },
                  {
                    q: "What is the minimum order value for free delivery?",
                    a: "Pizza Hut typically offers free delivery on app and website orders above a minimum cart value, commonly around ₹499, though this threshold can vary by city and active promotion. The exact minimum for your delivery address is always shown at checkout before you confirm payment, so it is worth checking there if you are close to the threshold."
                  },
                  {
                    q: "Do combo and bundle deals have exclusions?",
                    a: "Yes. WOW Box and other combo deals are typically built around specific pizza sizes, crusts, or side combinations, and substituting items outside the set combo can affect the final price or void the bundle discount. The exact inclusions for each combo are listed on the order page before you add it to your cart, so it is worth reviewing before assuming full customisation is included at the bundle price."
                  },
                  {
                    q: "Are app-exclusive deals different from dine-in offers?",
                    a: "Yes, generally. Delivery and app-ordering promotions — like new-user discounts and WOW Box pricing — are usually separate from dine-in bill discounts available at physical outlets. Some dine-in offers require showing the deal on the app at the table, so it is worth confirming with staff whether an online promo code applies to an in-restaurant order before assuming it carries over automatically."
                  },
                  {
                    q: "What is Pizza Hut's cancellation and refund policy?",
                    a: "Orders can typically be cancelled within a short window immediately after placing them, before the kitchen begins preparation — usually just a few minutes. Once preparation has started, cancellation is generally not possible given the perishable nature of the order. If an order arrives incorrect or damaged, Pizza Hut customer support can be contacted through the app for a replacement or refund review."
                  },
                  {
                    q: "How does Pizza Hut handle bulk or party orders?",
                    a: "Pizza Hut accepts bulk orders for parties and corporate gatherings, often with a discount tier applied once the order crosses a certain value or pizza count. Advance notice is generally recommended for very large orders to ensure the outlet can prepare everything within your requested delivery or pickup window — checking with the specific outlet ahead of a large event is worth doing."
                  },
                  {
                    q: "Can I use a Pizza Hut coupon code with a bank card offer?",
                    a: "Yes. Apply your CouponsCrew Pizza Hut offer at checkout, then pay with an eligible HDFC or Axis Bank card to unlock an additional instant discount. This stacks on top of any active combo pricing or sitewide promotion, giving you multiple layers of savings on the same order."
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Pizza Hut Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Pizza Hut Coupons", "Pan Pizza Offers", "WOW Box Deals", "Buy 1 Get 1 Pizza Sale", "Stuffed Crust Discount", "New User Pizza Hut Offer", "Pizza Hut Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Pizza Hut Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Pan Pizza — Up to 50% OFF", sub: "Family combos, weekday app deals — deepest discounts of the week" },
                    { heading: "Buy 1 Get 1 Medium Pizza", sub: "Selected weekdays via the app — limited time" },
                    { heading: "Free Delivery ₹499+", sub: "No code required — standard delivery included" },
                    { heading: "15% Bank Card Discount", sub: "HDFC, Axis Bank — instant discount at checkout" },
                    { heading: "New User First-Order Offer", sub: "Flat ₹150 off for first-time app customers" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">P</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Pizza Hut deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Pizza Hut checkout for instant discounts.
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
                <span>Continue to Pizza Hut</span>
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
