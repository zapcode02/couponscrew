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
import { Coupon, DOMINOS_COUPONS } from './dominosCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.dominos.co.in';

export default function DominosStore() {
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

  const coupons: Coupon[] = DOMINOS_COUPONS;

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
    q: "How do I find a working Domino's coupon code today?",
    a: 'Every Domino\'s coupon code on this CouponsCrew page is verified before publishing. Click "Show Code" on any active deal card — the code is copied to your clipboard and you are redirected to Domino\'s. Expired codes are removed daily. If a code does not work, check the conditions on the deal card and try the next active listing.'
  },
  {
    q: "Can I use a Domino's promo code on combo orders?",
    a: "Most standard Domino's promo codes exclude combo and Everyday Value (EDV) items — these are noted on the individual deal cards. Some codes are specifically valid on combos (like the Super Saver Combo deal). Use the CouponsCrew category filter to find combo-specific deals."
  },
  {
    q: "Are Domino's coupon codes valid for both delivery and takeaway?",
    a: "Most codes are valid on delivery orders only. The deal card on each CouponsCrew listing clearly states whether takeaway orders are eligible. The majority of app-exclusive codes are delivery-only."
  },
  {
    q: "What is the Domino's Cheesy Rewards programme?",
    a: "Cheesy Rewards is Domino's free loyalty programme. Earn 100 points on every order of ₹350 or more (max 100 per day). Redeem 600 points for a free regular pizza. Points are valid for 365 days from enrolment. Enrol via the Domino's India app before your next qualifying order."
  },
  {
    q: "How do I find Domino's pizza near me?",
    a: "The Domino's app and website (dominos.co.in) detect your location and show available stores in your area. Enter your delivery address at the start of the ordering flow — Domino's assigns the nearest store automatically and filters available deals to what that store supports."
  },
  {
    q: "Can I stack a Domino's coupon code with a bank card offer?",
    a: "In many cases, yes — a Domino's discount code and a bank card instant discount can both apply to the same order. Apply the code in the coupon field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes and the Domino's checkout page for confirmation."
  },
  {
    q: "What are the best Domino's pizza deals for a group order?",
    a: "For group orders above ₹1,500, the PARTY500 code (flat 30% off, up to ₹500) is typically the highest-value option. The BUY2GET1 deal (3 medium pizzas at ₹199 each) and the ₹750 off large order deal are also strong for group purchases. CouponsCrew's deal card filters let you sort by discount amount to find the best current option for your cart size."
  },
  {
    q: "Are there Domino's coupon codes for first-time users?",
    a: "Yes — the NEWBIE100 code gives new users ₹100 off plus ₹50 instant cashback on their first order. Check the \"New Users\" filter on this CouponsCrew page for all currently active first-order deals."
  },
  {
    q: "What payment methods does Domino's accept?",
    a: "Domino's accepts all major credit and debit cards (Visa, Mastercard, AMEX, RuPay), UPI (Paytm, PhonePe, Google Pay, Amazon Pay), net banking, and cash on delivery at select stores. Bank card and UPI cashback offers apply at the payment step — no additional code required."
  },
  {
    q: "How often does CouponsCrew update Domino's deals?",
    a: "This page is updated daily. Expired codes are removed as soon as they are detected, and new Dominos online coupon codes and deals are added as Domino's launches new promotions. For time-sensitive deals like the BUY2GET1 or lightning deals, refresh the page before placing your order to ensure you have the most current version."
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
            <Link href="/" className="hover:text-[#006491] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#006491] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#006491] font-semibold">Dominos Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/dominos-logo_st1w9f.webp"
                      alt="Dominos Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Dominos</h1>
                    <span className="bg-[#E7F3F9] text-[#006491] text-xs font-bold px-3 py-1 rounded-full border border-[#D3E9F2]">
                      Pizza, Fast Food & Online Ordering
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Order pizza online and get the best Dominos coupon codes & offers on pizzas, combos, sides and more.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#006491] bg-[#E7F3F9] px-2.5 py-1 rounded-full border border-[#D3E9F2]">
                      <Tag size={14} /> 10+ Offers
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
                  className="bg-[#E31837] hover:bg-[#C31530] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Dominos</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#006491] to-[#004a6d] items-center justify-center text-center p-8"
            >
              <div className="text-white space-y-3 relative z-10">
                <span className="inline-block bg-[#E31837] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">Save on Every Pizza Order</h3>
                <p className="text-white/80 text-sm">Verified Dominos coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#E7F3F9] text-[#006491] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FCE8EC] text-[#E31837] rounded-2xl flex items-center justify-center shrink-0">
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
            <div className="w-11 h-11 bg-[#E7F3F9] text-[#006491] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Dominos Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Dominos coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#006491) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#006491] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#E31837) */}
                <span className="bg-[#E31837]/10 text-[#E31837] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#006491] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#006491]" />
                    <span>Valid on select pizzas, sides & combo categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#006491]" />
                    <span>Minimum order value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#006491]" />
                    <span>Covers select menu items and combo offers.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#E31837]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#E31837) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#E31837] hover:bg-[#C31530] text-white"
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
                <Info size={16} className="text-[#006491]" />
                <span>The Story Behind Dominos</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Domino's has built one of the most recognisable names in quick-service pizza — known for consistent quality, a wide menu, and one of the more aggressive deal structures in the food delivery space. With over 2,300 stores across 500+ cities, finding your nearest Domino's is rarely a problem, and neither is finding a discount on your next order.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              At CouponsCrew, we track every active Domino's coupon code, Domino's promo code, and Domino's discount code so you are never stuck applying an expired code at checkout. Our team verifies each deal before it goes live on this page — checking redemption status, minimum order conditions, and user eligibility so the codes you see here are codes that actually work.
              </p>
              <p className="text-[#1A1A2E] text-sm">
              Whether you are ordering a solo Pizza Mania deal from ₹89, a medium combo for two, or a large group order where a ₹500 discount makes a real difference — there is almost always a working deal available. This page is updated daily. Bookmark it and check back before every Domino's order.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#006491] hover:text-[#006491] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Dominos</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#006491] to-[#004a6d] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Dominos Seasonal Offers</h3>
                <span className="inline-block bg-[#E31837] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Pizzas, Combos & Sides
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#006491] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Order Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Dominos
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Pizzas</span>
                  <span className="text-[#E31837] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sides & Appetizers</span>
                  <span className="text-[#E31837] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Beverages</span>
                  <span className="text-[#E31837] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Combos & Meals</span>
                  <span className="text-[#E31837] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Desserts</span>
                  <span className="text-[#E31837] font-bold">Up to 15% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#006491] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Dominos */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Domino's Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a Domino's promo code takes under a minute. Here is the exact process for the app and website:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active deal card — the code copies to your clipboard and CouponsCrew's tracking link opens the Domino's ordering page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your delivery address.</span> Log in to the Domino's app or website and confirm your delivery location — this determines which store fulfils your order and which deals are available in your area.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Build your order.</span> Browse the full menu — pizzas, sides, desserts, beverages — and add items to your cart. Check that your cart value meets the minimum order threshold shown on the deal card, if applicable.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Tap the cart icon and select "Proceed to Pay."
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find the coupon field.</span> On the payment page, look for "Have a Coupon Code?" or "Apply Offer" — it appears in the order summary section before the payment method step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the Domino's coupon code from your clipboard and confirm. The discount reflects in the order total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> If you have an eligible bank card — HDFC, ICICI, SBI, or AMEX — or a UPI app with an active cashback offer (Paytm, PhonePe, Google Pay), select it now to stack the bank saving on top of your code discount where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and complete payment. Your saving is locked in.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a code shows "Invalid" at checkout, check that your cart value meets the minimum order requirement and that the items in your cart are not on the excluded list (Combos, EDVs, and Flat Price Menu items are commonly excluded from code-based deals). Refresh this CouponsCrew page and try the next active code.
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div>
        <div className="prose max-w-none">
          <div
            className={cn(
              "text-gray-600 space-y-6 relative transition-all duration-300",
              !isReadMore && "max-h-[500px] overflow-hidden"
            )}
          >
            <h2 className="text-3xl font-black text-black mb-6 leading-tight">
              Why Domino's Is One of the Most Deal-Friendly Pizza Platforms
            </h2>

            <p>
              Domino's runs more promotions than almost any other food delivery chain in India. Between app-exclusive codes, loyalty rewards, Everyday Value pricing, combo deals, and bank card cashback, there is usually more than one way to reduce what you pay — and stacking two or three of these savings mechanisms on the same order is possible more often than Domino's makes obvious upfront.
            </p>

            <p>
              The Domino's app is the single most important factor here. A significant portion of the best Domino's coupon codes are app-exclusive — meaning they are only redeemable when ordering through the Domino's India app, not through the website or third-party delivery platforms. If you order Domino's regularly, the app is worth having for the deals alone.
            </p>

            <p>
              Domino's Cheesy Rewards is the platform's loyalty programme — earn 100 points on every order of ₹350 or more and redeem 600 points for a free regular pizza. Points are valid for 365 days from enrolment. This runs quietly in the background regardless of what other deal you are using, making it one of the best long-term saving mechanisms for regular Domino's customers.
            </p>

            <p>
              CouponsCrew tracks dominos current offers in real time — including limited-window codes, new-user deals, and bank card cashback offers that most aggregator sites miss or leave listed after they expire.
            </p>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Types of Domino's Deals Available on CouponsCrew
            </h3>

            <p>
              <strong className="text-black block mb-1">Flat Amount Discount Codes</strong>
              The most straightforward type — a set rupee amount off your order total regardless of what you order. Examples: ₹90 off, ₹125 off, ₹200 off. The best of these have no minimum cart value, meaning they apply to even a small individual order.
            </p>

            <p>
              <strong className="text-black block mb-1">Percentage-Based Discount Codes</strong>
              A percentage off the total cart — typically 20%–30% off, capped at a maximum saving. These offer better value on larger orders where the percentage saving exceeds what a flat-amount code would give. The PARTY500 code (flat 30% off, up to ₹500) is a good example — more valuable at ₹1,500+ cart values.
            </p>

            <p>
              <strong className="text-black block mb-1">Cashback Codes</strong>
              Some Domino's discount codes combine an upfront discount with a cashback amount credited to your Domino's wallet for use on the next order. The NEW90 and WELCOME90 codes both follow this structure — ₹90 off now + ₹25 cashback for your next order within 7 days.
            </p>

            <p>
              <strong className="text-black block mb-1">No-Code Deals (Direct Discounts)</strong>
              A large portion of Domino's best pricing does not require a code at all — Everyday Value pricing, Pizza Mania rates, 1+1 deals, and combo packages are pre-applied on the menu. CouponsCrew lists these alongside code-based deals so you always have the full picture of what is available.
            </p>

            <p>
              <strong className="text-black block mb-1">Buy 2 Get 1 Free</strong>
              Domino's periodically runs BOGO-style promotions — the current BUY2GET1 deal gives you 3 medium pizzas for ₹199 each. These are among the highest-value dominos pizza deals available and sell out or expire faster than standard codes — check this page regularly if you are waiting for one.
            </p>

            <p>
              <strong className="text-black block mb-1">Bank Card & UPI Cashback Offers</strong>
              HDFC, ICICI, SBI, and AMEX credit and debit card holders get periodic instant discount or cashback offers on Domino's orders — usually 10%–15% off or a fixed cashback amount. UPI cashback through Paytm, PhonePe, and Google Pay runs alongside these. These are not codes — they are applied automatically at the payment step when you select the right card or UPI app.
            </p>

            <p>
              <strong className="text-black block mb-1">Cheesy Rewards (Loyalty Programme)</strong>
              Every order of ₹350 or more earns 100 Cheesy Rewards points (maximum 100 per day). Redeem 600 points for a free regular pizza. Points are valid for 365 days from your enrolment date. This programme runs passively — you earn points on every qualifying order regardless of which other deal you are using.
            </p>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Domino's Pizza Menu — What's Available
            </h3>

            <p>
              Domino's menu in India is broad enough to cover most cravings beyond just pizza — though pizza is naturally where the selection is deepest.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Classic Pizzas</h4>
            <p>
              The foundation of Domino's menu — the Margherita with tangy tomato sauce, mozzarella, and basil on a crispy crust is the starting point for most customers. The Spicy Jalapeño and Pepperoni options are popular for those who want more heat, while the Paneer Makhani and Veggie Supreme are consistent top-sellers in the vegetarian range. The Veggie Supreme comes loaded with bell peppers, tomatoes, and mushrooms under melted cheese — one of the most ordered vegetarian options across Indian cities.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Crust Options</h4>
            <p>Domino's crust variety is a differentiator worth knowing before you order:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hand-Tossed</strong> — the standard, with a satisfying chew and moderate thickness</li>
              <li><strong>Stuffed Crust</strong> — cheese-filled edge on every slice, popular for sharing orders</li>
              <li><strong>Crunchy Thin</strong> — lighter base, better for toppings-forward preferences</li>
              <li><strong>Cheese Burst</strong> — liquid cheese base layer baked into the crust, the most popular premium crust option</li>
            </ul>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Sides & Extras</h4>
            <p>
              Pair your pizza with Cheesy Bread, Tangy Buffalo Wings, pasta (Meatball Marinara or Chicken Alfredo), or keep it lighter with a salad. The Domino's pizza price on sides is competitive — garlic breads from ₹69, tacos and parcels from ₹75, making it easy to build a complete meal without a large jump in order value.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Desserts</h4>
            <p>
              Domino's dessert menu is short but reliable. The Choco Lava Cake — warm, with a molten chocolate centre — is the bestseller. Cinnamon Bread Twists (sweet, buttery, cinnamon-spiced) and Butterscotch Mousse Cake round out the options. Desserts start from ₹119 during current offers.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Beverages</h4>
            <p>
              Coca-Cola products (Coke, Sprite, Limca, Fanta) are available as add-ons from ₹28 — making it straightforward to hit minimum cart thresholds for code eligibility without significantly inflating your order value.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">New Launches</h4>
            <p>
              Domino's periodically adds limited-time menu items. The Four Cheese Sourdough Pizza (currently from ₹349, app-exclusive best price) and the 6-in-1 Pizza (24 slices across 6 flavours, ₹799) are the most prominent current additions. CouponsCrew lists any active new-launch deals on this page as they become available.
            </p>

            {/* Table: Pizza Prices */}
            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Domino's Pizza Prices — What to Expect
            </h3>
            <p>
              Understanding dominos pizza price ranges helps you plan your order and find the right code before you build your cart:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#0066A5] text-white font-bold">
                  <tr>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price Range</th>
                    <th className="p-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-4 font-semibold">Pizza Mania (Regular)</td><td className="p-4">From ₹89</td><td className="p-4">Everyday Value pricing, no code needed</td></tr>
                  <tr><td className="p-4 font-semibold">Regular Pizzas</td><td className="p-4">From ₹99 (deal pricing)</td><td className="p-4">Subject to active promotions</td></tr>
                  <tr><td className="p-4 font-semibold">Medium Pizzas</td><td className="p-4">From ₹199 (deal pricing)</td><td className="p-4">Everyday Value and combo-dependent</td></tr>
                  <tr><td className="p-4 font-semibold">Large Pizzas</td><td className="p-4">From ₹499</td><td className="p-4">Brand, crust, and topping dependent</td></tr>
                  <tr><td className="p-4 font-semibold">Cheese Burst Crust (add-on)</td><td className="p-4">From ₹50 extra</td><td className="p-4">Per pizza</td></tr>
                  <tr><td className="p-4 font-semibold">Sides (Garlic Bread, Parcels)</td><td className="p-4">From ₹69</td><td className="p-4">Current menu pricing</td></tr>
                  <tr><td className="p-4 font-semibold">Desserts</td><td className="p-4">From ₹119</td><td className="p-4">Current menu pricing</td></tr>
                  <tr><td className="p-4 font-semibold">Beverages</td><td className="p-4">From ₹28</td><td className="p-4">Coca-Cola products</td></tr>
                  <tr><td className="p-4 font-semibold">6-in-1 Pizza</td><td className="p-4">₹799</td><td className="p-4">24 slices, no code needed</td></tr>
                  <tr><td className="p-4 font-semibold">Cheeseburst 6-in-1</td><td className="p-4">From ₹999</td><td className="p-4">Up to 50% off during current sale</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic">
              All prices are subject to change based on city, store, active promotions, and Domino's periodic menu updates. CouponsCrew reflects current pricing where available — always confirm the final price in your cart before checkout.
            </p>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Domino's Current Offers — How to Find the Best Deal for Your Order Size
            </h3>
            <p>
              Dominos current offers vary significantly based on your cart value. Here is a practical guide to which deal type to look for based on order size:
            </p>

            <p>
              <strong className="text-black block mb-1">Small Individual Order (₹99–₹300)</strong>
              Look for no-minimum codes like CART125 (flat ₹125 off, no minimum) or Pizza Mania-level Everyday Value pricing. The GET30 code (₹30 off on orders above ₹200, app only) is also worth stacking when no bigger code applies.
            </p>

            <p>
              <strong className="text-black block mb-1">Medium Order for Two (₹300–₹700)</strong>
              The NEWBIE100 code (₹100 off + ₹50 cashback) or the PIZZA250 code (up to ₹250 off on veg pizza, min ₹699) are the most valuable in this range. Combine with a UPI cashback offer for maximum saving.
            </p>

            <p>
              <strong className="text-black block mb-1">Group Order (₹700–₹1,500)</strong>
              The PARTY200 code (up to ₹200 off) or the GRAB0539 code (₹200 off + ₹30 cashback) work well here. The BUY2GET1 deal (3 medium pizzas at ₹199 each) can be more valuable than a percentage code for this bracket.
            </p>

            <p>
              <strong className="text-black block mb-1">Large Group Order (₹1,500+)</strong>
              PARTY500 (flat 30% off, up to ₹500) is the strongest code at this cart level. Super Saver Combos (up to ₹300 off) and the ₹750 off large order deal are also worth considering — stack with an eligible bank card offer for the deepest discount.
            </p>

            {/* Table: Domino's vs Pizza Hut */}
            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Domino's vs Pizza Hut — Which Saves You More?
            </h3>
            <p>
              If you are choosing between Domino's and Pizza Hut for your next order, the decision usually comes down to your priorities — pricing, delivery speed, or menu style. Here is an honest comparison:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#0066A5] text-white font-bold">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4">Domino's</th>
                    <th className="p-4">Pizza Hut India</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-4 font-semibold">Entry Price</td><td className="p-4">From ₹59 (Pizza Mania); medium from ₹199</td><td className="p-4">Personal from ~₹99; medium from ~₹299</td></tr>
                  <tr><td className="p-4 font-semibold">COD Available</td><td className="p-4">Yes, at select stores</td><td className="p-4">Yes, at select stores</td></tr>
                  <tr><td className="p-4 font-semibold">Free Delivery Threshold</td><td className="p-4">Above ₹149 at select stores</td><td className="p-4">Min order ₹200 required for delivery</td></tr>
                  <tr><td className="p-4 font-semibold">Delivery Time</td><td className="p-4">20–45 mins (shown at checkout)</td><td className="p-4">~30 mins on eligible orders</td></tr>
                  <tr><td className="p-4 font-semibold">Loyalty Programme</td><td className="p-4">Cheesy Rewards — free pizza after 6 qualifying orders</td><td className="p-4">No dedicated programme currently confirmed</td></tr>
                  <tr><td className="p-4 font-semibold">Bank & UPI Offers</td><td className="p-4">HDFC, ICICI, SBI, AMEX, Paytm, PhonePe, Google Pay, Amazon Pay</td><td className="p-4">HDFC, ICICI, SBI, Paytm, PhonePe, Google Pay (campaign periods)</td></tr>
                  <tr><td className="p-4 font-semibold">App-Exclusive Deals</td><td className="p-4">Yes — new-user codes, late-night deals, personalised offers</td><td className="p-4">Yes — combo deals, app-only coupons, limited-time offers</td></tr>
                  <tr><td className="p-4 font-semibold">Store Coverage</td><td className="p-4">2,300+ stores across 500+ cities</td><td className="p-4">500+ stores, primarily metro & tier-1 cities</td></tr>
                  <tr><td className="p-4 font-semibold">Customer Support</td><td className="p-4">1800-208-1234 (toll-free)</td><td className="p-4">3988-3988</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              For most Indian cities, Domino's wins on store coverage, delivery speed, and the depth of ongoing dominos pizza deals — particularly through the Cheesy Rewards programme, app-exclusive codes, and Everyday Value pricing that has no equivalent at Pizza Hut. Pizza Hut pulls ahead on loaded crust variety and sit-down dining experience if that is the priority.
            </p>

            <p>
              If you are comparing dominos pizza promo codes vs Pizza Hut deals, the CouponsCrew Domino's page consistently has more active, verified codes at any given time — largely because Domino's runs significantly more concurrent promotions.
            </p>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Domino's Saving Tips — Get More Off Every Order
            </h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Always Check the App First:</strong> A significant portion of Domino's coupon codes are app-exclusive and are not surfaced on the website or third-party platforms. Before placing any order, open the Domino's India app to check for personalised codes in your account dashboard — these are often better than the public codes listed on aggregator sites.
              </li>
              <li>
                <strong>Enrol in Cheesy Rewards Before Your First Order:</strong> The Cheesy Rewards programme runs in the background on every qualifying order. If you have not enrolled yet, do it before placing your next order — you cannot retroactively earn points on past purchases. At 100 points per order (₹350+) and a 600-point redemption threshold, you are looking at a free pizza after 6 qualifying orders.
              </li>
              <li>
                <strong>Stack a Code with a Bank Card Offer:</strong> Many Domino's promo codes are stackable with HDFC, ICICI, SBI, or AMEX card instant discounts. Apply the code first, then select your bank card at the payment step — the bank discount layers on top where the promotion allows. UPI cashback (Paytm, PhonePe, Google Pay) often stacks the same way.
              </li>
              <li>
                <strong>Use Everyday Value Pricing as Your Baseline:</strong> Before applying any code, check the Everyday Value and Pizza Mania sections first. These have pre-discounted prices that are already lower than the standard menu — your code saving stacks on top of these already-reduced prices on eligible orders.
              </li>
              <li>
                <strong>Watch Dominos Recent Offers Around Peak Occasions:</strong> Domino's runs its most aggressive limited-time deals around occasions like game nights, IPL matches, Republic Day, and Diwali. Dominos recent offers during these windows often include BOGO deals, ₹99 pizza promotions, or bonus Cheesy Rewards points. CouponsCrew publishes these as they go live — check back ahead of major occasions.
              </li>
              <li>
                <strong>Keep Your Delivery Address Saved:</strong> Domino's deal availability varies by store. Having your delivery address saved in the app means deals are pre-filtered to what is actually available from your nearest store — avoiding the frustration of applying a code only to find it is not valid at your specific outlet.
              </li>
              <li>
                <strong>Order Delivery, Not Takeaway, for Code Eligibility:</strong> Most Domino's discount codes and app deals are valid on delivery orders only — takeaway orders are frequently excluded. If you are ordering pickup, check the code T&Cs on the CouponsCrew deal card before building your cart.
              </li>
            </ol>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Similar Stores You Might Like
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pizza Hut</strong> — Loaded crusts, combo meals, and sit-down dining style</li>
              <li><strong>KFC</strong> — Fried chicken, wraps, and combo meals with frequent app deals</li>
              <li><strong>McDonald's</strong> — Burgers, McSavers menu, and McDelivery app-exclusive offers</li>
              <li><strong>Burger King</strong> — Competitive burger deals with frequent BOGO promotions</li>
              <li><strong>Swiggy / Zomato</strong> — Aggregator platforms where Domino's and other chains often have platform-exclusive discount codes separate from the Domino's app</li>
            </ul>

            <h3 className="text-2xl font-black text-[#0066A5] mt-10 mb-4">
              Closing — Why CouponsCrew for Domino's Deals
            </h3>
            <p>
              Finding a working Domino's coupon code should not mean spending five minutes copy-pasting codes that expired a week ago. CouponsCrew closes that gap — every code on this page has been checked, every deal card is honest about minimum cart values and user eligibility, and the page is updated every day.
            </p>
            <p>
              Domino's runs one of the most active promotions calendars in the food delivery space — flat discount codes, percentage codes, BOGO deals, loyalty rewards, bank card cashback, and app-exclusive offers all run concurrently. There is almost always a saving available; the challenge is knowing which codes are actually live right now.
            </p>
            <p>
              Bookmark this CouponsCrew page and check back before every Domino's order — whether you are placing a quick ₹199 medium pizza deal for one or a ₹2,000 group order where a 30% discount makes a real difference.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-8 flex items-center gap-2 text-[#0066A5] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ Section */}
        <div className="mt-16 space-y-4">
          <h3 className="text-2xl font-black text-black mb-6">
            Frequently Asked Questions — Domino's Coupon Codes
          </h3>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-black font-bold text-base">{faq.q}</span>
                <div className={cn("bg-gray-100 p-2 rounded-xl transition-all", openFaq === i && "bg-[#0066A5]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-6 bg-white",
                  openFaq === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-600 text-sm leading-relaxed pt-3 border-t border-gray-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6 uppercase tracking-widest">
            Popular Domino's Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Domino's Coupons",
              "Pizza Mania Deals",
              "Cheesy Rewards",
              "BUY2GET1 Offer",
              "Everyday Value",
              "Dominos App Offers"
            ].map((tag) => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-[#f0f7fc] px-4 py-2 rounded-full text-[12px] font-black text-[#0066A5] uppercase tracking-widest hover:bg-[#0066A5] hover:text-white transition-all border border-[#d2e7f7]"
              >
                {tag}
              </a>
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
                Use the code <span className="font-extrabold text-[#006491]">{activeModalCoupon.code}</span> at Dominos checkout for instant discounts.
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
                className="w-full bg-[#E31837] hover:bg-[#C31530] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Dominos</span>
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
