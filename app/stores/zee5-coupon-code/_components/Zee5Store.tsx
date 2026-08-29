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
import { Coupon, ZEE5_COUPONS } from './zee5Coupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.zee5.com/';

export default function Zee5Store() {
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

  const coupons: Coupon[] = ZEE5_COUPONS;

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
      q: 'How do I use a ZEE5 coupon code?',
      a: 'To use a ZEE5 coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the ZEE5 website or app. If it is a deal, simply click "Visit ZEE5" to get the discount auto-applied.'
    },
    {
      q: 'Why is my ZEE5 coupon code not working?',
      a: 'A coupon might not work due to plan-specific exclusions, expiry, or eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every ZEE5 coupon code listed on this page is checked before publishing, and we periodically re-verify codes to keep the list accurate and up to date.'
    },
    {
      q: 'How often are ZEE5 coupons updated?',
      a: 'Our team reviews and updates ZEE5 coupons regularly. Expired promotions are removed so you only see offers that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promo code can be applied per subscription purchase. Check the specific terms of each offer, as combining codes is usually not supported.'
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
            <Link href="/" className="hover:text-[#8B1874] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#8B1874] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#8B1874] font-semibold">ZEE5 Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/zee5-logo_twndvg.webp"
                      alt="ZEE5 Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight">ZEE5</h1>
                    <span className="bg-[#F7E9F3] text-[#8B1874] text-xs font-bold px-3 py-1 rounded-full border border-[#EFD3E7]">
                      Movies, Shows & Live TV Streaming
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Discover verified ZEE5 coupon codes and promo codes to save on Annual, Monthly, Kids, and regional language plans. Enjoy up to 73% OFF subscriptions, an extra 15% OFF with coupon code EXCLUSIVE, and exclusive Visa Debit Card offers on eligible plans.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#8B1874] bg-[#F7E9F3] px-2.5 py-1 rounded-full border border-[#EFD3E7]">
                      <Tag size={14} /> 20+ Offers
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
                  className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit ZEE5</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-[#1A1A1A]"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="space-y-3">
                  <span className="inline-block bg-[#8B1874] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                    Seasonal Offer
                  </span>
                  <h3 className="text-white text-2xl font-black leading-tight">
                    Save on ZEE5 Subscription Plans
                  </h3>
                  <p className="text-white/70 text-sm">
                    Stream movies, shows & live TV for less
                  </p>
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
            <div className="w-11 h-11 bg-[#F7E9F3] text-[#8B1874] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">20+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EFEFEF] text-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Up to 60%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Save More</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">On Subscriptions</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F7E9F3] text-[#8B1874] rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">100%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight">ZEE5 Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified ZEE5 coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#8B1874) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#8B1874] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#8B1874] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B1874]" />
                    <span>Valid on select ZEE5 subscription plans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B1874]" />
                    <span>Terms and minimum plan duration may apply as specified.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B1874]" />
                    <span>Covers select subscription tiers and content packs.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#1A1A1A]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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
              <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
                <Info size={16} className="text-[#8B1874]" />
                <span>About ZEE5</span>
              </h3>
              <p className="text-[#1A1A1A] text-sm mb-3">
               ZEE5 is the digital streaming arm of Zee Entertainment Enterprises Limited, one of India's largest broadcast media groups and the company behind india zee tv — the flagship Hindi general entertainment channel that has been running for decades. When zee entertainment moved into the OTT space, it brought the full depth of the Zee content archive with it, which gives zee 5 ott a content library that most newer platforms cannot match for breadth.
              </p>

               <p className="text-[#1A1A1A] text-sm mb-3">
               The platform streams content across categories including drama, movies, originals, live news, and live TV. zee5movies covers both Bollywood and regional cinema, and the platform has built a particularly strong following in the south Indian markets through zee5 tamil and zee5 telugu content — where it competes directly with Sun NXT and Aha for regional streaming dominance.
              </p>

               <p className="text-[#1A1A1A] text-sm mb-3">
               ZEE5 also carries a free content tier, which means users without a subscription can still access a portion of the library. The paid tiers unlock ad-free viewing, live TV access, and the full originals catalogue.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#8B1874] hover:text-[#8B1874] text-[#1A1A1A] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit ZEE5</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#8B1874] to-[#5C1050] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">ZEE5 Seasonal Subscription Offer</h3>
                <span className="inline-block bg-[#1A1A1A] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Save on annual & monthly subscription plans
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#8B1874] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    ZEE5 Charges Explained – What You Are Actually Paying For
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Understanding zee 5 charges and zee 5 price helps you choose the right plan without overpaying for features you do not need.
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Free Plan</span>
        <span>ZEE5 offers a free tier with access to a portion of its movie and show catalogue, news, and some older content. Ads are present on the free tier and the full library is not accessible.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Regional Language Packs</span>
        <span>These are the most affordable paid plans and cover the full content library for a specific language — including that language&apos;s originals, films, and the Zee network&apos;s broadcast archive in that language. Device support is capped at two simultaneous streams.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Kids Plan</span>
        <span>One of the most affordable plans on the platform, covering children&apos;s programming across all languages. Suited for households that primarily want ZEE5 for children&apos;s viewing.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">All Languages Plans</span>
        <span>Cover the complete ZEE5 library across all languages with higher device limits. The All Languages + Kidz plan bundles the Kidz content library into the standard multi-language subscription.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Live TV Add-on</span>
        <span>The Live TV plan gives access to the linear broadcast feed from channels across the Zee network. This is a meaningful feature for households that want live news and entertainment channels alongside on-demand content.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">All Access + Sports</span>
        <span>The top-tier plan that includes everything — all languages, live TV, and sports content coverage. Available on annual and quarterly billing.</span>
      </div>
    </li>
  </ul>

  {/* Tip Box */}
  <div className="mt-5 bg-[#FFF8F8] border border-[#FCDCDC] rounded-2xl p-3.5 flex items-start gap-2.5">
    <div className="text-xs text-[#3A3A3A]">
      <span className="font-bold text-[#2C2C40]">Tip: </span>
      <span>A zee5 subscription coupon code applied to an annual plan is the most effective way to reduce zee 5 charges over the long term, since the annual discount already represents meaningful savings compared to monthly billing, and a promo code on top of that reduces the effective cost further.</span>
    </div>
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight italic">
          ZEE5 Coupon Code – Save on OTT Subscriptions & Plans
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
          {ZEE5_COUPONS.map((coupon) => (
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

        {/* Dynamic Expandable Content Box */}
        {React.createElement(
          'div',
          {
            className: `text-slate-600 font-medium leading-relaxed space-y-6 relative transition-all duration-500 ${
              typeof isReadMore !== 'undefined' && !isReadMore ? 'max-h-[500px] overflow-hidden' : ''
            }`
          },
          [
            <p key="intro-1">
              ZEE5 is one of India's most established OTT platforms, carrying a content library that stretches across Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, and more. As zee 5 ott continues to expand its originals slate and live TV offering, the subscription has become a serious consideration for Indian households that want regional content, Bollywood films, and live television in a single platform.
            </p>,
            <p key="intro-2">
              A ZEE5 coupon code can reduce what you pay on any subscription tier — from a regional language pack to the all-access plan. This page covers every active ZEE5 discount code, the full subscription plan breakdown, how ZEE5 compares to competing platforms, and the content worth knowing about before you subscribe.
            </p>,

            <div className="space-y-8 text-slate-700">
  {/* ZEE5 Subscription Plans Compared Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      ZEE5 Subscription Plans Compared
    </h2>
    <p>
      ZEE5 offers multiple subscription plans tailored to different viewing preferences, from language-specific packs and kids content to live TV. Here is a complete breakdown of all current plans available in India:
    </p>

    <div className="overflow-x-auto border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
          <tr>
            <th className="p-3">Plan</th>
            <th className="p-3">Languages</th>
            <th className="p-3">1 Month</th>
            <th className="p-3">3 Months</th>
            <th className="p-3">1 Year</th>
            <th className="p-3">Devices</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          <tr>
            <td className="p-3 font-semibold">Kids</td>
            <td className="p-3">All Languages</td>
            <td className="p-3">Rs 59</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 349</td>
            <td className="p-3">3</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">All Languages + Kidz</td>
            <td className="p-3">All Languages</td>
            <td className="p-3">Rs 299</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">Rs 1,499</td>
            <td className="p-3">4</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Live TV Channels</td>
            <td className="p-3">All Languages</td>
            <td className="p-3">Rs 99</td>
            <td className="p-3">—</td>
            <td className="p-3">Rs 499</td>
            <td className="p-3">3</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">All Access + Sports</td>
            <td className="p-3">All Languages</td>
            <td className="p-3">—</td>
            <td className="p-3">Rs 799</td>
            <td className="p-3">Rs 1,699</td>
            <td className="p-3">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The annual plans offer a significantly lower effective monthly cost compared to paying month-to-month. If you are committing to ZEE5 for the long term, the yearly option is the better value — especially when combined with an active ZEE5 discount code that applies to the full annual amount.
    </p>
  </div>

  {/* ZEE5 Regional Language Packs Compared Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      ZEE5 Regional Language Packs Compared
    </h2>
    <p>
      ZEE5 offers dedicated regional language packs for viewers who primarily consume content in their native language. These plans are a cost-effective option compared to the all-languages plan, and each supports up to 2 devices simultaneously.
    </p>

    <div className="overflow-x-auto border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
          <tr>
            <th className="p-3">Plan</th>
            <th className="p-3">Languages Included</th>
            <th className="p-3">1 Month</th>
            <th className="p-3">3 Months</th>
            <th className="p-3">1 Year</th>
            <th className="p-3">Devices</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          <tr>
            <td className="p-3 font-semibold">Hindi</td>
            <td className="p-3">Hindi, Punjabi, Bhojpuri</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 399</td>
            <td className="p-3">Rs 999</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Kannada</td>
            <td className="p-3">Kannada</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Telugu</td>
            <td className="p-3">Telugu</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Marathi</td>
            <td className="p-3">Marathi</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Bangla</td>
            <td className="p-3">Bengali, Odia</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Tamil</td>
            <td className="p-3">Tamil</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Malayalam</td>
            <td className="p-3">Malayalam</td>
            <td className="p-3">Rs 129</td>
            <td className="p-3">Rs 199</td>
            <td className="p-3">Rs 599</td>
            <td className="p-3">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      For households that watch primarily in one language, a regional pack is meaningfully cheaper than the all-languages plan while covering the full content library for that language. The zee5 tamil and zee5 telugu packs in particular are strong options given the volume of original and exclusive regional content ZEE5 carries in those languages.
    </p>
  </div>

  {/* Popular Genres on ZEE5 Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      Popular Genres on ZEE5
    </h2>
    <p>
      ZEE5's content library is organised across a set of categories that cover the full range of what Indian streaming audiences watch.
    </p>

    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Drama and Daily Soaps</h3>
        <p>
          ZEE5 carries the complete streaming rights to Zee TV's daily soap library — including both currently airing shows and years of back catalogue. This is one of the strongest areas of the platform for viewers who follow hindi general entertainment content. The india zee tv connection means ZEE5 is the authorised home for popular Zee network serials.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Movies – Zee5movies</h3>
        <p>
          The zee5movies catalogue covers Bollywood, Hollywood (dubbed), and a deep regional film library across Tamil, Telugu, Kannada, Malayalam, Marathi, and Bengali. Films from the Zee Studios production slate typically arrive on ZEE5 after their theatrical run. Notable titles like karthikeya 2 ott release have appeared on ZEE5 as part of its Telugu acquisitions strategy.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">ZEE5 Originals</h3>
        <p>
          ZEE5 Originals are exclusive web series and films produced specifically for the platform. The originals slate covers crime, thriller, drama, and comedy across multiple languages, with separate original series tracks in Hindi, Tamil, Telugu, and other regional languages.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Live TV</h3>
        <p>
          The Live TV plan gives access to more than 90 channels from across the Zee network and partner broadcasters — covering news, entertainment, kids programming, and regional channels. This is a feature that most pure-play OTT platforms do not offer, and it makes ZEE5 a viable replacement for a standard cable or DTH subscription for households that primarily watch Zee-network content.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">News</h3>
        <p>
          ZEE5 streams live news channels including Zee News and regional Zee news channels. This is included in relevant subscription tiers and is available in a limited form even on the free plan.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Kids – Kidz</h3>
        <p>
          The dedicated Kidz plan and the Kidz section within the all-languages plan covers animated shows, educational content, and children's programming in multiple languages. ZEE5 carries a significant library of popular children's content from the Zee network archive.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">zee5 Tamil Content</h3>
        <p>
          The zee5 tamil section carries Tamil films, dubbed content, Tamil originals, and streaming rights to Zee Tamil's broadcast library. For Tamil-speaking viewers, this makes the Tamil language pack a standalone value proposition.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">zee5 telugu Content</h3>
        <p>
          zee5 telugu covers Telugu films including theatrical acquisitions, Zee Telugu broadcast content, and Telugu originals. The Telugu pack is one of the more content-rich regional options on the platform.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Sports</h3>
        <p>
          The All Access + Sports plan includes coverage of ILT20 and select cricket tournaments. Live sports on ZEE5 is a relatively newer addition to the platform and is expanding as part of the broader sports rights strategy.
        </p>
      </div>
    </div>
  </div>

  {/* What to Watch on the ZEE5 OTT Platform? Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      What to Watch on the ZEE5 OTT Platform?
    </h2>
    <p>
      ZEE5 is a particularly strong choice for viewers whose watchlist falls into any of these categories:
    </p>

    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Regional Language Cinema</h3>
        <p>
          If your primary watching language is Tamil, Telugu, Marathi, Kannada, Bengali, or Malayalam, ZEE5 carries one of the deeper regional film catalogues available on any Indian OTT platform. The zee5 tamil and zee5 telugu libraries in particular are extensive.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Zee Network Archive</h3>
        <p>
          Decades of Zee TV's broadcast content — daily soaps, reality shows, and fiction series — live on ZEE5. Viewers who grew up with Zee network content will find the archive especially valuable.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">ZEE5 Originals Across Languages</h3>
        <p>
          The originals slate spans crime thrillers, family dramas, and comedies across Hindi and regional languages. New originals are released regularly, and the platform has invested in high-production originals that compete with content from other major Indian streaming services.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Live TV Without a Separate DTH Subscription</h3>
        <p>
          For viewers who want both on-demand and live television in a single subscription, ZEE5's live TV plan is one of the few on the Indian OTT market that covers this combination meaningfully.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#2C2C40] mb-1">Kids Programming</h3>
        <p>
          The Kidz plan is one of the more affordable dedicated children's streaming options in India, and the content range covers animated and live-action children's programming in multiple languages.
        </p>
      </div>
    </div>
  </div>

  {/* What is the ZEEPLEX Subscription? Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      What is the ZEEPLEX Subscription?
    </h2>
    <p>
      ZEEPLEX is ZEE5's premium video-on-demand (PVOD) service — a separate offering from the standard ZEE5 subscription. On ZEEPLEX, certain new Bollywood releases are made available for a per-title rental or purchase fee shortly after their theatrical run, sometimes before they enter the standard ZEE5 subscription library.
    </p>
    <p>
      This means a viewer can pay a one-time fee to watch a new release on ZEEPLEX without waiting for it to become part of the regular subscription catalogue. ZEEPLEX titles are accessible through the ZEE5 app and website, and the rental/purchase transaction is handled within the same account.
    </p>
    <p>
      ZEEPLEX is particularly useful for viewers who want to watch a new Bollywood film at home close to its theatrical release date. It is separate from and does not require a standard ZEE5 subscription, though having a ZEE5 account is necessary to access it.
    </p>
  </div>

  {/* ZEE5 vs SonyLiv vs JioHotstar Section */}
  <div className="space-y-4">
    <h2 className="text-xl font-black text-[#5B4FBE]">
      ZEE5 vs SonyLiv vs JioHotstar
    </h2>
    <p>
      Choosing the right OTT platform depends on what you watch, how many devices you use, and how much you want to spend. Here is a head-to-head comparison of ZEE5, SonyLiv, and JioHotstar across pricing, content, and key features:
    </p>

    <div className="overflow-x-auto border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
          <tr>
            <th className="p-3">Feature</th>
            <th className="p-3">Zee5</th>
            <th className="p-3">SonyLiv</th>
            <th className="p-3">JioHotstar</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          <tr>
            <td className="p-3 font-semibold">Video Quality</td>
            <td className="p-3">Up to 4K UHD</td>
            <td className="p-3">Up to 4K UHD</td>
            <td className="p-3">Up to 4K + Dolby Vision</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Max Simultaneous Devices</td>
            <td className="p-3">4</td>
            <td className="p-3">2</td>
            <td className="p-3">4</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Ad-Free Experience</td>
            <td className="p-3">Yes (paid plans)</td>
            <td className="p-3">Yes (Premium)</td>
            <td className="p-3">Yes (Premium only)</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Regional Language Content</td>
            <td className="p-3">Excellent (12 languages)</td>
            <td className="p-3">Good</td>
            <td className="p-3">Good</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Originals</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Live Sports</td>
            <td className="p-3">ILT20, Cricket</td>
            <td className="p-3">EPL, Wimbledon, WWE, Pro Kabaddi</td>
            <td className="p-3">IPL, ICC tournaments</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Live TV Channels</td>
            <td className="p-3">90+ channels</td>
            <td className="p-3">Sony network channels</td>
            <td className="p-3">Star and Zee network channels</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Kids Content</td>
            <td className="p-3">Dedicated Kidz plan</td>
            <td className="p-3">Available</td>
            <td className="p-3">Available</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Free Content</td>
            <td className="p-3">Yes (without subscription)</td>
            <td className="p-3">Limited</td>
            <td className="p-3">Limited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      ZEE5 is the strongest option for regional language content and live TV coverage, and its free tier is more generous than most competitors. The Kidz plan is unique in the market.
    </p>
    <p>
      SonyLiv leads on international sports rights — EPL, Wimbledon, and WWE give it a clear edge for sports-first viewers. Its device limit of two simultaneous streams is the most restrictive of the three.
    </p>
    <p>
      JioHotstar dominates cricket — IPL and ICC tournament rights give it an audience that is hard to compete with during the cricket season. Dolby Vision support gives it an edge on video quality for compatible devices.
    </p>
    <p>
      If regional language content and live TV are your priorities, ZEE5 is the natural choice. If cricket is the priority, JioHotstar wins outright. If you are a Premier League or international sports viewer, SonyLiv is the platform to have.
    </p>
  </div>
</div>,

            /* How to Use Block */
            <div key="how-to-use" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
                How to Use a ZEE5 Coupon Code
              </h3>
              <p className="text-slate-500 font-medium text-sm -mt-2 mb-6">
                Applying a ZEE5 promo code or zee5 code during subscription checkout takes a few steps:
              </p>
              <div className="space-y-6">
                {[
                  "Go to the ZEE5 website or open the app — available on Android, iOS, Smart TVs, and web browsers.",
                  "Click on Subscribe — navigate to the plans page from the homepage or your account section.",
                  "Choose your plan — select from the full plans, regional language packs, or the live TV option.",
                  "Look for the promo code field — it appears on the payment or checkout screen before you confirm payment.",
                  "Enter the ZEE5 coupon code — type the zee5 discount code exactly as shown, including any capitalisation.",
                  "Confirm the discount — the reduced amount will reflect before you complete the transaction.",
                  "Pay and activate — complete payment and your subscription activates immediately."
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-xl flex items-center justify-center shadow-md shadow-purple-200 italic text-sm md:text-base">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 font-bold leading-relaxed mt-1 text-sm md:text-base">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 font-medium text-xs border-t border-slate-100 pt-4 mt-6">
                If a ZEE5 promo code does not apply, check whether it is restricted to a specific plan tier, device, or payment method. Some zee 5 subscription coupon codes are valid only for first-time subscribers or specific bank card payments.
              </p>
            </div>,

            /* ZEE5 Sale Calendar Table */
            <div key="sale-calendar" className="my-10 space-y-6">
              <h3 className="text-xl font-black text-[#5B4FBE]">
                ZEE5 Sale Calendar – Best Times to Subscribe
              </h3>
              <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-black uppercase text-slate-400 tracking-wider">Period</th>
                      <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">What to Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {[
                      { period: "Republic Day (Jan)", expect: "Short-duration subscription discounts" },
                      { period: "Holi Season (Mar)", expect: "Festive promotional codes" },
                      { period: "Independence Day (Aug)", expect: "Sitewide subscription offers" },
                      { period: "Diwali Season (Oct–Nov)", expect: "Highest volume of ZEE5 coupon codes" },
                      { period: "New Year (Dec–Jan)", expect: "Annual plan discounts and renewal offers" },
                      { period: "Cricket Season", expect: "Sports plan promotions aligned with tournament schedules" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-4 font-black text-slate-900">{row.period}</td>
                        <td className="p-4 font-medium text-slate-600">{row.expect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>,

            /* How to Save More */
            <div key="how-to-save" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                How to Save More on ZEE5
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Always apply a ZEE5 coupon code before paying",
                    desc: "CouponsCrew keeps this page updated with active ZEE5 discount codes. Checking here before subscribing or renewing takes under a minute and can reduce what you pay on any plan tier."
                  },
                  {
                    title: "Go annual rather than monthly",
                    desc: "The effective monthly cost of an annual ZEE5 plan is significantly lower than paying month-to-month. Combine an annual plan with an active ZEE5 promo code for the maximum saving."
                  },
                  {
                    title: "Use a regional language pack if you watch primarily in one language",
                    desc: "If your household watches predominantly in Tamil, Telugu, Marathi, or another regional language, a language-specific pack costs less than the all-languages plan while covering the full content library for your language."
                  },
                  {
                    title: "Check for credit card and bank payment offers",
                    desc: "Some ZEE5 subscription coupon codes are tied to specific bank credit or debit cards. An additional percentage off applies when you pay with the partner card. Even if you do not have a specific ZEE5 promo code, checking your bank's offer page for any active ZEE5 partnership deals is worth doing before checkout."
                  },
                  {
                    title: "Use the free tier to assess content before subscribing",
                    desc: "ZEE5's free plan is more generous than most competitors. Spending time on the free tier before committing to a paid plan helps you confirm the platform carries enough of what you want to justify the subscription."
                  },
                  {
                    title: "Share devices within the limit",
                    desc: "Most ZEE5 plans allow simultaneous streams across multiple devices. Sharing a subscription among family members who all watch ZEE5 reduces the effective cost per user significantly, as long as you stay within the plan's device limit."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-xl flex items-center justify-center shadow-md shadow-purple-200 italic text-sm md:text-base">
                      {i + 1}
                    </div>
                    <div className="mt-0.5">
                      <p className="text-slate-900 font-black text-base">{item.title}</p>
                      <p className="text-slate-600 font-medium text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>,

            /* Similar Platforms Section */
            <div key="similar-platforms" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Similar OTT Platforms to Explore
              </h3>
              {[
                { name: "JioStar / Disney+ Hotstar", desc: "dominant for cricket and major network content; high quality streaming support" },
                { name: "SonyLIV", desc: "strongest on international sports; UEFA, Wimbledon, WWE, along with original series" },
                { name: "Amazon Prime Video", desc: "wide Hollywood and Bollywood catalogue; fast original releases" },
                { name: "Netflix India", desc: "premium global originals and growing Indian content slate" },
                { name: "Sun NXT", desc: "strong regional OTT for Tamil, Telugu, Kannada, and Malayalam content" },
                { name: "Aha", desc: "dedicated Telugu and Tamil original content focus; competitive regional pricing" }
              ].map((item, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900">{item.name} — </strong>
                  {item.desc}
                </p>
              ))}
            </div>,

            /* Subscribe and Save Summary */
            <div key="subscribe-smarter" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Subscribe to ZEE5 and Save More Every Time
              </h3>
              <p>
                ZEE5's combination of regional depth, live TV access, a generous free tier, and a growing originals slate makes it one of the more versatile OTT subscriptions in the Indian market. The zee 5 price across plan tiers means there is an option for almost every household budget — from a single-language regional pack to the full all-access plan with live sports.
              </p>
              <p>
                CouponsCrew keeps this page updated with the latest ZEE5 coupon codes, ZEE5 promo codes, and subscription discounts. Before you subscribe or renew, check here — an active ZEE5 discount code on an annual plan is the single most effective way to reduce your zee 5 charges over time.
              </p>
            </div>,

            /* Bottom Gradient Fade overlay when collapsed */
            (typeof isReadMore === 'undefined' || !isReadMore) && (
              <div key="fade-overlay" className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )
          ]
        )}

        {/* Read More Toggle Button */}
        <button
          type="button"
          onClick={() => typeof setIsReadMore === 'function' && setIsReadMore(!isReadMore)}
          className="mt-6 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none focus:ring-2 focus:ring-[#5B4FBE] rounded-md px-1 py-0.5"
        >
          {typeof isReadMore !== 'undefined' && isReadMore ? "Read Less" : "Read More"}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${typeof isReadMore !== 'undefined' && isReadMore ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Frequently Asked Questions Accordion */}
        <div className="mt-16 space-y-4">
          <h3 className="text-2xl font-black text-slate-900 mb-8">
            Frequently Asked Questions About ZEE5 Coupon Codes
          </h3>
          {[
            {
              q: "What is a ZEE5 coupon code and how do I apply it?",
              a: "A ZEE5 coupon code is a promotional string that reduces the price of a ZEE5 subscription when entered at the checkout stage. After selecting your plan, look for the promo code field on the payment screen, enter the code exactly as shown, and the discount will apply before you confirm payment."
            },
            {
              q: "Is there a ZEE5 subscription coupon code for annual plans?",
              a: "Yes, ZEE5 subscription coupon codes for annual plans appear regularly, particularly around festive periods and major sale events. Annual plans already carry a discount over monthly billing — an additional zee 5 subscription coupon code on top of that gives you the lowest possible effective monthly cost. CouponsCrew keeps this page updated with any active codes."
            },
            {
              q: "What is the difference between a ZEE5 coupon code, a ZEE5 promo code, and a ZEE5 discount code?",
              a: "All three refer to the same mechanism — a code applied at checkout to reduce your subscription price. The terms are used interchangeably across different promotions. What matters is the specific offer attached to the code, which is listed alongside each deal on this page."
            },
            {
              q: "What is zee 5 price for regional packs?",
              a: "ZEE5's regional language packs are available on monthly, quarterly, and annual billing cycles. Each regional pack covers the full content library in that specific language and supports simultaneous viewing on two devices. Annual billing gives the lowest effective monthly rate. Full pricing for all packs is available on the subscription portal."
            },
            {
              q: "Is karthikeya 2 ott available on ZEE5?",
              a: "Karthikeya 2 was acquired by ZEE5 for its OTT release and is available on the platform as part of the Telugu content library. Viewers can access it through the zee5 telugu section under a qualifying subscription plan."
            },
            {
              q: "What is ZEEPLEX and is it included in my ZEE5 subscription?",
              a: "ZEEPLEX is ZEE5's premium video-on-demand service for new film releases — it is a separate, per-title purchase and is not included in any standard ZEE5 subscription plan. You access ZEEPLEX through your ZEE5 account, but the rental or purchase fee for each title is charged separately."
            },
            {
              q: "Does ZEE5 have a free plan?",
              a: "Yes. ZEE5 offers a free tier that provides access to a portion of its content library including some films, older shows, and live news — with ads. The full originals catalogue, live TV, and the complete movie library require a paid subscription."
            },
            {
              q: "How does ZEE5 compare to JioHotstar / JioStar for cricket?",
              a: "Major tournament broadcast rights like IPL and ICC events are held by the Reliance/Disney network (JioStar/Disney+ Hotstar). ZEE5's sports offering covers ILT20 and select international cricket events. For IPL specifically, JioStar is the primary option; for viewers whose cricket interest extends beyond IPL, both platforms offer distinct sports rights."
            },
            {
              q: "Can I use a ZEE5 discount code for the regional language packs?",
              a: "Yes, ZEE5 promo codes can apply to regional language packs where specified. Check the terms attached to any code on CouponsCrew to confirm which plans it is valid for — some codes apply only to all-languages plans, while others cover regional packs as well."
            },
            {
              q: "What zee 5 charges apply if I want live TV?",
              a: "The Live TV Channels plan is a separate subscription tier that gives access to the linear live feed from channels in the Zee network and partner broadcasters. It is available on monthly and annual billing, and is also bundled into higher-tier plans."
            }
          ].map((faq, i) => {
            const isOpen = typeof openFaq !== 'undefined' && openFaq === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => typeof setOpenFaq === 'function' && setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-slate-900 font-black text-sm md:text-base pr-4">
                    {`Q${i + 1}. ${faq.q}`}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all shrink-0 ${
                      isOpen ? "bg-[#5B4FBE] text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 px-6 bg-white ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-slate-600 font-medium text-sm leading-relaxed pt-3 border-t border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-8">
        {/* Popular Tags */}
        <div className="bg-[#f0eeff] rounded-3xl p-6 md:p-8 border border-[#5B4FBE]/10">
          <h3 className="text-slate-900 font-black text-xs mb-6 uppercase tracking-widest">
            Popular ZEE5 Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "ZEE5 Annual Plan Code",
              "ZEE5 Premium Offers",
              "ZEE5 Regional Packs",
              "Karthikeya 2 OTT",
              "ZEEPLEX Movies",
              "ZEE5 Live TV Channels",
              "ZEE5 Discount Codes",
              "ZEE5 Free vs Paid"
            ].map((tag) => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-3.5 py-2 rounded-full text-[11px] font-black text-[#5B4FBE] uppercase tracking-wider shadow-sm hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Top Deals List */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
          <h3 className="text-slate-900 font-black text-xs mb-6 uppercase tracking-widest">
            Today's Top ZEE5 Offers
          </h3>
          <div className="space-y-5">
            {[
              { heading: "Annual Premium Pack", sub: "Save up to 50% compared to monthly billing" },
              { heading: "Regional Language Pack", sub: "Discounts on single-language annual subs" },
              { heading: "Bank Partner Cashback", sub: "Extra savings when paying with partner cards" },
              { heading: "ZEE5 Free Tier", sub: "Access free shows, movies & live news" },
              { heading: "Live TV Add-on", sub: "Stream live Zee network channels instantly" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#5B4FBE] font-black text-lg italic shrink-0">
                  Z
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-black text-[11px] uppercase tracking-wider truncate group-hover:text-[#5B4FBE] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-slate-500 font-medium text-[12px] truncate leading-tight mt-0.5">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  aria-label={`Get ZEE5 offer: ${deal.heading}`}
                  className="bg-[#f0eeff] text-[#5B4FBE] px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider hover:bg-[#5B4FBE] hover:text-white transition-all shrink-0"
                >
                  Get Offer
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>

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
              <h3 className="text-xl font-black text-[#1A1A1A]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#8B1874]">{activeModalCoupon.code}</span> at ZEE5 checkout for instant discounts.
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
                className="w-full bg-[#1A1A1A] hover:bg-[#333333] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to ZEE5</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A1A] py-2 transition-colors cursor-pointer"
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
