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
import { Coupon, MAGICPIN_COUPONS } from './magicpinCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://magicpin.in/';

export default function MagicpinStore() {
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

  const coupons: Coupon[] = MAGICPIN_COUPONS;

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
      q: 'How do I use a Magicpin coupon code?',
      a: 'To use a Magicpin coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Magicpin app. If it is a no-code deal, simply click "Visit Magicpin" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Magicpin coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double check the terms listed with each offer before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes, every Magicpin coupon code listed here is checked regularly by our team so you can rely on the codes shown being active and working at the time of listing.'
    },
    {
      q: 'How often are Magicpin coupons updated?',
      a: 'Our deals team reviews and refreshes Magicpin coupons regularly. Expired promotions are filtered out so you mostly see codes that are currently valid.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically, only one promo code can be applied per order. Check the specific terms of each Magicpin offer to see if it can be combined with other ongoing promotions.'
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
            <Link href="/" className="hover:text-[#FF3278] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#FF3278] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#FF3278] font-semibold">Magicpin Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/magicpin-logo_sf53ve.webp"
                      alt="Magicpin Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight">Magicpin</h1>
                    <span className="bg-[#FFE9F1] text-[#FF3278] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD1E4]">
                      Dining, Cashback & Local Deals
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
Discover verified Magicpin coupon codes and promo codes to save on top brands across fashion, beauty, grocery, dining, and more. Enjoy up to 80% OFF, 100% voucher deals, up to 60% sitewide savings, exclusive restaurant discounts, and special offers from leading brands.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#FF3278] bg-[#FFE9F1] px-2.5 py-1 rounded-full border border-[#FFD1E4]">
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
                  className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Magicpin</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D1D1E9] text-[#1A1A1A] hover:bg-gray-50'
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#FF3278] to-[#1A1A1A] items-center justify-center"
            >
              <div className="text-center text-white px-8 space-y-3 relative z-10">
                <span className="inline-block bg-white/15 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">
                  Dining, Salon & Grocery Deals — Up to 50% OFF
                </h3>
                <p className="text-white/80 text-sm">Discover local offers near you with Magicpin</p>
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
            <div className="w-11 h-11 bg-[#FFE9F1] text-[#FF3278] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F2F2F2] text-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Up to 50%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Cashback</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">On Every Order</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFE9F1] text-[#FF3278] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight">Magicpin Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Magicpin coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#FF3278) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#FF3278] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "30%"}
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FF3278] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF3278]" />
                    <span>Valid on select dining, salon & grocery categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF3278]" />
                    <span>Minimum bill value might apply as specified in offer terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF3278]" />
                    <span>Covers select partner merchants and locations.</span>
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
                <Info size={16} className="text-[#FF3278]" />
                <span>The Story Behind Magicpin</span>
              </h3>
              <p className="text-[#1A1A1A] text-sm mb-3">
                Magicpin was founded with a straightforward idea: help people discover the best local businesses around them and reward them for actually visiting. The platform began in the restaurant and food discovery space but has since expanded into fashion retail, beauty and wellness, grocery, and entertainment.
              </p>

              <p className="text-[#1A1A1A] text-sm">
              What separates Magicpin from a standard cashback app is the magicpin partner model. When a business signs up as a magicpin partner, it gets listed on the platform and can run targeted offers for nearby users. Customers who visit and upload their bill or pay through the app earn Magicpin points — which can then be redeemed against future purchases at the same or other partner outlets.
              </p>

               <p className="text-[#1A1A1A] text-sm">
              This model benefits both sides. Businesses get visibility and repeat customers without needing a large marketing budget. Users get genuine savings on purchases they were likely to make anyway. The magic pin company has scaled this across multiple Indian cities and continues to expand its network of partner merchants.
              </p>

               <p className="text-[#1A1A1A] text-sm">
              For anyone who shops, eats, or spends regularly at local businesses — not just large chains — Magicpin tends to surface deals that other platforms simply do not cover.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#FF3278] hover:text-[#FF3278] text-[#1A1A1A] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Magicpin</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#FF3278] to-[#1A1A1A] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Magicpin Seasonal Offers</h3>
                <span className="inline-block bg-[#1A1A1A] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Dining, Salon & Grocery deals near you
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#FF3278] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            {/* Sidebar Card 4: Why Shop at Magicpin */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    Types of Deals on Magicpin
  </h3>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Magicpin Coupon Code for New Users</span>
        <span>First-time users on the platform often receive an introductory discount or bonus points on their first transaction. These are the highest-value single-use discounts available on Magicpin and are worth using on a larger purchase to get the most out of them.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Magicpin Referral Code</span>
        <span>The magicpin referral code system rewards both the person sharing the code and the new user who signs up using it. Once a referred user completes their first qualifying transaction, both accounts receive points. This is one of the few ways to earn rewards without making a direct purchase yourself.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Restaurant and Food Deals</span>
        <span>Magicpin&apos;s partner network includes a wide range of local restaurants, cafes, and fast food outlets — not just large national chains. Deals here typically appear as cashback in points, a flat discount, or a combo offer on specific menu items. In cities with a dense magicpin partner network, the food discovery section alone covers hundreds of local options.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Salon, Spa, and Wellness Offers</span>
        <span>Beauty and wellness businesses — including salons, spas, yoga studios, and gyms — list exclusive Magicpin deals that are not available directly at the counter. These tend to be percentage-based cashback or flat discounts on service bills above a certain threshold.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Grocery and Supermarket Savings</span>
        <span>Local grocery stores and supermarkets that are part of the magicpin partner ecosystem list time-limited cashback offers. These are particularly useful if you shop regularly at the same store — the cashback accumulates over multiple visits and reduces your effective spend over time.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Fashion and Retail</span>
        <span>Clothing stores, footwear shops, and accessories retailers in the partner network offer deals specifically for Magicpin users. Unlike platform-wide fashion sales, these are neighbourhood-retail focused and often include stores that do not have a significant online presence.</span>
      </div>
    </li>
  </ul>
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
          Magicpin Coupon Code – Save on Food, Shopping & More
        </h2>

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
              Magicpin has built a distinct space in India's hyperlocal commerce landscape. Unlike platforms that operate purely online, Magicpin connects users with nearby restaurants, salons, gyms, grocery stores, and retail outlets — and makes it possible to save on both in-store and online purchases. A working magicpin coupon code can unlock discounts that apply the moment you walk into a partner outlet or tap through to an online order.
            </p>,
            <p key="intro-2">
              This page covers everything you need to know about finding and using magicpin discount codes, magicpin promo codes, and referral rewards — plus how the platform works and where it stands in comparison to other cashback and rewards apps.
            </p>,

            <div className="space-y-8 text-slate-700">
  {/* How the Magicpin Partner System Works Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      How the Magicpin Partner System Works
    </h3>
    <p className="mb-3">
      The magicpin partner model is central to understanding why the deals on the platform exist at all. When a business registers as a magicpin partner, it gains access to a local user base that is actively looking for deals nearby. Partners can create time-limited offers, run loyalty programmes, and push notifications to users who have previously visited or saved their outlet.
    </p>
    <p className="mb-3">
      For users, this translates to an ongoing cycle of savings. Visit a partner restaurant, earn points. Use those points at a partner salon. Earn more points there. The system creates a habit loop that rewards consistent use of the platform rather than one-off purchases.
    </p>
    <p>
      This is also what makes the magicpin coupon code ecosystem slightly different from a standard promo code platform. Many of the best deals on Magicpin are not code-based at all — they are automatic discounts tied to your account activity, the payment method you use, or the verification of your visit through the app.
    </p>
  </div>

  {/* Magicpin vs Other Cashback and Rewards Platforms Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Magicpin vs Other Cashback and Rewards Platforms
    </h3>

    {/* Comparison Table */}
    <div className="overflow-x-auto mb-4 border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-3 font-bold border-b border-slate-200">Feature</th>
            <th className="p-3 font-bold border-b border-slate-200">Magicpin</th>
            <th className="p-3 font-bold border-b border-slate-200">Zomato Gold</th>
            <th className="p-3 font-bold border-b border-slate-200">Swiggy One</th>
            <th className="p-3 font-bold border-b border-slate-200">CashKaro</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Offline/In-Store Deals</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Limited</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Online Food Orders</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Via affiliate</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Salon & Wellness</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Grocery Partners</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
            <td className="p-3">Via affiliate</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Referral Programme</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
            <td className="p-3">Yes</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Points-Based System</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
            <td className="p-3">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4">
      Magicpin stands apart primarily because of its offline-first design. Most competing platforms focus on online ordering; Magicpin's real advantage is in bringing digital deals to physical retail, which covers spending that other apps simply do not touch.
    </p>
  </div>

  {/* Magicpin Savings Calendar – When Deals Are Strongest Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Magicpin Savings Calendar – When Deals Are Strongest
    </h3>

    {/* Savings Calendar Table */}
    <div className="overflow-x-auto mb-4 border border-slate-200 rounded-lg">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-3 font-bold border-b border-slate-200">Period</th>
            <th className="p-3 font-bold border-b border-slate-200">What to Expect</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Festive Season (Oct–Nov)</td>
            <td className="p-3">Highest volume of partner offers across all categories</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">New Year</td>
            <td className="p-3">Introductory codes and bonus referral rewards for new users</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Valentine's Week</td>
            <td className="p-3">Strong salon, dining, and gifting deals</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Summer (Apr–Jun)</td>
            <td className="p-3">Salon and wellness deals peak; beverage and dessert outlet offers</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Month-End</td>
            <td className="p-3">Restaurants often push deals to clear capacity</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-semibold text-[#2C2C40]">Weekdays</td>
            <td className="p-3">Gym and salon partner deals are typically stronger mid-week</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* How to Save More on Magicpin – Practical Tips Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      How to Save More on Magicpin – Practical Tips
    </h3>

    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Use the referral code when inviting friends
        </h4>
        <p>
          The magicpin referral code is one of the platform's most underused features. Every successful referral earns points for both parties — if you regularly introduce people to the app, the accumulated points can meaningfully offset future purchases.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Focus on high-ticket categories
        </h4>
        <p>
          Deals are available across a range of spend levels, but the cashback percentage tends to feel more significant on larger bills — salon services, gym memberships, or a dinner for a group. Using Magicpin for these purchases adds up faster than applying it to smaller, everyday transactions.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Check deals before heading out
        </h4>
        <p>
          The Magicpin app is most effective when you check nearby deals before deciding where to eat, shop, or go for a haircut — rather than trying to find a deal after you have already chosen a destination. The discovery mode is built around this pre-visit flow.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Combine partner deals with your regular payment method
        </h4>
        <p>
          Some magicpin partner outlets also accept deals through specific payment apps that carry their own cashback. In cases where both apply, you effectively stack two layers of savings on the same transaction.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Read the magicpin customer care section before redeeming
        </h4>
        <p>
          For unfamiliar offers — especially in-store bill-upload deals — it is worth reading the terms carefully or checking the magic pin customer care FAQ within the app. Some deals have specific validity windows or require bill upload within a set number of hours.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Keep the app updated
        </h4>
        <p>
          New partner listings and seasonal magicpin promo codes are pushed through the app. An outdated version may not display the latest offers correctly, and some codes have short validity windows.
        </p>
      </div>
    </div>
  </div>
</div>,
            /* How to Use Block */
            <div key="how-to-use" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
                How to Use a Magicpin Coupon Code
              </h3>
              <p className="text-slate-500 font-medium text-sm -mt-2 mb-6">
                Whether you are redeeming a magicpin promo code in-store or applying a magicpin discount code on an online order, the steps are similar.
              </p>
              <div className="space-y-6">
                {[
                  "Download the Magicpin app — available on iOS and Android. Most deals, especially in-store ones, require the app to be active.",
                  "Find the offer — browse by category (restaurants, salons, grocery) or search for a specific outlet near you.",
                  "Check the deal terms — confirm the minimum spend, applicable days, and whether the deal requires a code or is auto-applied on payment.",
                  "Apply the magicpin coupon code at checkout — for online orders, enter the code in the promo field before payment. For in-store deals, show the offer screen to the merchant or pay via the Magicpin payment option.",
                  "Upload your bill if required — for some in-store cashback deals, you will need to upload the physical receipt via the app to have points credited.",
                  "Redeem your points — accumulated Magicpin points appear in your wallet and can be used to pay for future orders or visits."
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
            </div>,

            /* Similar Platforms Section */
            <div key="similar-platforms" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Similar Platforms to Explore
              </h3>
              <p className="text-slate-600 mb-4">
                If Magicpin covers your local spending, these platforms are worth checking for additional online deals:
              </p>
              {[
                { name: "Zomato", desc: "restaurant delivery with Gold membership deals" },
                { name: "Swiggy", desc: "food and quick-commerce delivery with seasonal promo codes" },
                { name: "CashKaro", desc: "cashback platform for online retail and travel" },
                { name: "Nearbuy", desc: "experiences and wellness deals in major cities" },
                { name: "Little App", desc: "dining and entertainment deals for partner outlets" }
              ].map((item, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900">{item.name} — </strong>
                  {item.desc}
                </p>
              ))}
            </div>,

            /* Banner / Summary Text */
            <div key="summary-text" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Make Every Local Purchase Count with Magicpin
              </h3>
              <p>
                Magicpin works best as a habit rather than a one-time tool. The more consistently you check nearby deals before eating out, booking a salon, or picking up groceries at a partner store, the more the savings compound over time. A current magicpin coupon code can bring down the cost of your next transaction; the referral programme and points system do the rest over the long run.
              </p>
              <p>
                CouponsCrew keeps this page updated with active magicpin promo codes, magicpin discount codes, and referral offers. Check back before your next visit to a Magicpin partner outlet.
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
            Frequently Asked Questions About Magicpin Coupon Codes
          </h3>
          {[
            {
              q: "What is a Magicpin coupon code and where can I find one?",
              a: "A magicpin coupon code is a promotional string — either shared by Magicpin directly or listed on platforms like CouponsCrew — that unlocks a discount on eligible purchases through the Magicpin app. Codes are applied at checkout for online orders, while in-store deals are typically activated by scanning a QR code or uploading a bill. CouponsCrew keeps this page updated with verified, working codes as they become available."
            },
            {
              q: "How does the Magicpin referral code work?",
              a: "The magicpin referral code is a unique alphanumeric string tied to your account. When a new user signs up using your referral code and completes their first qualifying transaction, both you and the new user receive Magicpin points. The exact reward amount varies with ongoing promotions. You can find your personal referral code in the app under your profile or wallet section."
            },
            {
              q: "Is Magicpin available in all Indian cities?",
              a: "Magicpin operates across a growing number of Indian cities, with the strongest partner networks in Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, and Chennai. Coverage in smaller cities is expanding, but the range of active magicpin partner outlets will vary depending on your location."
            },
            {
              q: "What is the difference between a magicpin discount code and a magicpin promo code?",
              a: "Both terms refer to the same type of promotional discount mechanism. A magicpin discount code typically implies a direct price reduction at checkout, while a magicpin promo code can cover a broader range of promotions including cashback, bonus points, or category-specific deals. On the platform itself, both types are entered in the same promo field during checkout."
            },
            {
              q: "Can I use a magicpin coupon code on in-store purchases?",
              a: "Yes, Magicpin is specifically built for in-store use. For most physical merchant deals, you show the active offer on your app screen at the counter, pay through the app or upload your bill afterward. The cashback or discount is then applied to your Magicpin wallet rather than deducted at point of sale in every case — check the specific deal terms for how each partner offer works."
            },
            {
              q: "How do I contact Magicpin customer care if my code does not work?",
              a: "Magic pin customer care can be reached through the in-app help section, which covers common issues including failed code redemptions, missing cashback, and bill-upload errors. The app's help centre is the fastest route for most issues; alternatively, the support email and social media channels listed on Magicpin's official website handle queries that require follow-up."
            },
            {
              q: "What is the Magicpin points system and how do I redeem points?",
              a: "Magicpin points are earned on qualifying purchases at partner outlets — both online and in-store. Points accumulate in your wallet and can be redeemed as partial payment on future orders or visits at any magicpin partner business. The redemption rate and minimum threshold vary by outlet and offer."
            },
            {
              q: "Does Magicpin offer deals for groceries and supermarkets?",
              a: "Yes, local grocery stores and supermarkets that have registered as magicpin partner outlets list cashback deals on the platform. These tend to be most useful for repeat shoppers at the same neighbourhood store, where the points accumulate meaningfully over multiple visits."
            },
            {
              q: "Are magicpin promo codes only for new users?",
              a: "No. While new users typically receive the largest introductory discount, Magicpin runs ongoing promotions for existing users as well — including seasonal codes, category-specific deals, and referral rewards that are accessible to all account holders."
            },
            {
              q: "Is the Magicpin app free to use?",
              a: "Yes, downloading and using the Magicpin app is free. There is no subscription fee to access partner deals or to apply a magicpin coupon code. Some premium features or higher-tier loyalty benefits may require a certain transaction history or specific membership, but basic deal access is open to all users."
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
            Popular Magicpin Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Magicpin Referral Code",
              "Magicpin Promo Code",
              "In-Store Food Deals",
              "Magicpin Points Redeem",
              "Salon Discounts",
              "Grocery Cashback Deals",
              "Magicpin vs Nearbuy",
              "First Order Discount"
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
            Today's Top Magicpin Deals
          </h3>
          <div className="space-y-5">
            {[
              { heading: "Referral Bonus", sub: "Earn points when a friend joins via code" },
              { heading: "Dining Out Cashback", sub: "Save up to 50% on partner restaurant bills" },
              { heading: "Salon & Spa Voucher", sub: "Instant savings on local wellness & beauty" },
              { heading: "Supermarket Savings", sub: "Cashback points on weekly grocery receipts" },
              { heading: "First Time Offer", sub: "Extra points bonus for new registered users" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#5B4FBE] font-black text-lg italic shrink-0">
                  M
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
                  aria-label={`Get Magicpin deal: ${deal.heading}`}
                  className="bg-[#f0eeff] text-[#5B4FBE] px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider hover:bg-[#5B4FBE] hover:text-white transition-all shrink-0"
                >
                  Get Deal
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
                Use the code <span className="font-extrabold text-[#FF3278]">{activeModalCoupon.code}</span> at Magicpin checkout for instant discounts.
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
                <span>Continue to Magicpin</span>
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
