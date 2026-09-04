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
import { Coupon, KFC_COUPONS } from './kfcCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://online.kfc.co.in/';

export default function KfcStore() {
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

  const coupons: Coupon[] = KFC_COUPONS;

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
      q: 'How do I use a KFC coupon code?',
      a: 'To use a KFC coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the KFC website or app. If it is a deal, simply click "Visit KFC" to get the discount auto-applied.'
    },
    {
      q: 'Why is my KFC coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every KFC coupon code listed on this page is checked before publishing, and we regularly review codes to remove any that have expired.'
    },
    {
      q: 'How often are KFC coupons updated?',
      a: 'Our deals team reviews and updates coupons regularly. Expired promotions are filtered out, ensuring you mostly see codes that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promotional code can be applied per order. Check the terms of each specific offer to see if it can be combined with other ongoing promotions.'
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
            <span className="text-[#5B4FBE] font-semibold">KFC Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/kfc-logo_g0vdph.webp"
                      alt="KFC Logo"
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
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">KFC</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Fast Food & Fried Chicken
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Discover the latest KFC coupon codes and offers to save on your favourite chicken meals. Get up to 54% OFF, ₹100 OFF on bucket deals, 50% OFF Friday specials, affordable lunch combos from ₹299, and delicious KFC rolls starting at just ₹99.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
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
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit KFC</span>
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
                <img
    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788518479/kfc-offers_xf5jhs.webp"
    alt="Zepto Offers"
    className="absolute inset-0 w-full h-full object-cover"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">20+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 30%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">KFC Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified KFC coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "20%"}
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
                    <span>Valid on select menu categories as listed in the offer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum order value might apply as specified in the description.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers select combo meals and menu items.</span>
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
                <span>About KFC India — The Story Behind the Bucket</span>
              </h3>
              
              <p className="text-[#1A1A2E] text-sm">
              KFC (Kentucky Fried Chicken) was founded in the United States in 1952 by Colonel Harland Sanders. The brand entered India in 1995, opening its first outlet in Bangalore, and has since grown to over 1,000 restaurants across 100+ Indian cities. In India, KFC operates under Devyani International and Sapphire Foods, both of which are licensed franchise operators under Yum! Brands.
              </p>

              <p className="text-[#1A1A2E] text-sm mt-4">
              KFC India has adapted its menu significantly for the local market — introducing rice bowls, wraps, and spicier variants of its core offerings to suit Indian palates while keeping its global signatures like the Original Recipe Chicken, KFC popcorn chicken, and KFC chicken wings at the core of the menu.
              </p>

              <p className="text-[#1A1A2E] text-sm mt-4">
              The brand is known for its consistent food quality, value combos, and regular promotional campaigns. KFC Wednesday offers, app-only deals, and festive promotions are among the most searched KFC offers in India, making KFC coupon codes one of the highest-demand coupon categories in the country.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit KFC</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">KFC Seasonal Meal Offers</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 30% OFF on Buckets, Burgers & Combo Meals
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

           

            {/* Sidebar Card 4: Why Shop at KFC */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for KFC Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Regular Code Verification</span>
      <span>Every KFC coupon code on this page is checked before it goes live and reviewed regularly. Expired codes are removed so you spend less time on codes that don't work.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Simple, Clear Listings</span>
      <span>We list KFC discount codes with clear descriptions, so you can quickly pick the offer that best fits your order.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Combo & Bucket Deal Tracking</span>
      <span>We track combo meal and bucket deal offers so you always have a good sense of what discounts are currently available.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">App-Exclusive Deal Alerts</span>
      <span>App-exclusive KFC offers are flagged here as soon as we spot them, so you don't miss out on order-only deals.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Updated Regularly</span>
      <span>CouponScrew reviews KFC offers on an ongoing basis so the codes shown here stay as current as possible.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
      <span>Finding and using a KFC coupon code on CouponScrew is completely free and requires no account, no sign-up, and no personal information. Copy the code, go to KFC, and save.</span>
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
          Save on Every KFC Order with a Verified KFC Coupon Code
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
          {KFC_COUPONS.map((coupon) => (
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
            KFC is one of India's most popular fast food chains — and with a working KFC coupon code, every bucket, combo, or snack order becomes a better deal. Whether you're ordering through the KFC app, placing a KFC online order via Swiggy or Zomato, or walking into a KFC outlet near you, there's almost always a discount available.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates KFC promo codes, KFC discount codes, and KFC offer codes daily so you don't have to search before every order. Every code on this page has been checked for validity — no expired deals, no broken codes at checkout.
          </p>

          <p>
            From new user offers to bucket deals, Wednesday specials, and bank card cashback, this page covers the full range of ways to save on KFC in India.
          </p>

          <div className="space-y-6 text-slate-700">
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Top Menu Categories at KFC India
    </h3>
    <p>
      KFC's menu in India covers a wide range of chicken-forward items, sides, and beverages. Here's a breakdown of what's available — and where your KFC coupon code or KFC discount code applies.
    </p>
  </div>

  <div className="space-y-4">
    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
        KFC Bucket — The Iconic Value Meal
      </h4>
      <p className="mb-2">
        The KFC bucket is the brand's most recognisable offering and best value format. Available in multiple sizes, the KFC bucket price varies based on piece count and whether it includes sides and beverages. The standard KFC Chicken Bucket starts at around ₹595 for a 4-piece serving and scales up to party-sized options. During promotions, a KFC promo code can take a significant amount off the KFC bucket price — making it the most cost-effective way to feed a group.
      </p>
      <p className="font-semibold text-[#2C2C40] mb-2">
        Popular bucket options include:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="text-[#2C2C40]">Chicken Only Bucket — </strong>4, 6, 8, and 10-piece options of Original Recipe or Hot & Crispy
        </li>
        <li>
          <strong className="text-[#2C2C40]">Streetwise Bucket — </strong>Smaller, value-focused buckets starting at lower price points
        </li>
        <li>
          <strong className="text-[#2C2C40]">Fully Loaded Bucket — </strong>Includes chicken, sides, and drinks for a complete meal deal
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        KFC Popcorn Chicken
      </h4>
      <p>
        KFC popcorn chicken is one of the most ordered snack items on the menu. These bite-sized pieces of seasoned, crispy chicken are available as a solo snack or as part of a combo. KFC popcorn chicken is particularly popular for quick delivery orders — the small size and consistent cook make them ideal for eating on the go. Prices typically start around ₹155 for a regular serving.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        KFC Chicken Wings
      </h4>
      <p>
        KFC chicken wings are a fan favourite, available in Hot & Crispy and Smoky BBQ variants. Wings are usually available in 5-piece and 9-piece portions and frequently feature in KFC promo codes and app-exclusive deals. KFC chicken wings combo pricing varies by outlet but typically sits between ₹299–₹499 depending on the size and included sides.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Burgers & Wraps
      </h4>
      <p>
        KFC's burger and wrap range includes the Zinger Burger, Crunchy Burger, and the Chicken Twister — all featuring KFC's signature crispy chicken patty or strips. These are among the most popular items for solo meal orders and frequently appear in KFC offer code promotions.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Rice Bowls
      </h4>
      <p>
        A distinctly India-specific addition to the KFC menu, rice bowls pair KFC's fried chicken with flavoured rice — available in Chicken Zinger Rice Bowl, Smoky BBQ Rice Bowl, and other variants. Starting from around ₹179, rice bowls are a budget-friendly KFC meal option.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Snackers & Streetwise Combos
      </h4>
      <p>
        Streetwise combos and Snacker items are KFC's value range — designed for customers who want a satisfying meal at a lower price point. Snackers typically start at ₹79–₹99 and can be combined with a beverage for an affordable combo. KFC discount codes frequently apply to these value-range items.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Sides — Coleslaw, Corn & Fries
      </h4>
      <p>
        KFC's sides menu includes Classic Coleslaw, Corn on the Cob, and Hot & Crispy Fries — all available as add-ons to any meal or as standalone items. Prices start from ₹49 for individual sides.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
        Desserts & Beverages
      </h4>
      <p>
        KFC offers Krusher beverages (cold coffee, chocolate, and seasonal flavours) alongside Choco Lava Cake and Soft Serve — popular choices for completing a meal. Beverage prices start around ₹99.
      </p>
    </div>
  </div>

  <div className="pt-4">
    <h4 className="text-lg font-bold text-[#2C2C40] mb-3">
      KFC Menu with Prices — Quick Reference Table
    </h4>
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#5B4FBE] text-white font-bold">
          <tr>
            <th className="p-3">Item</th>
            <th className="p-3">Starting Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">KFC Bucket (4-piece)</td>
            <td className="p-3">₹595</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">KFC Popcorn Chicken (Regular)</td>
            <td className="p-3">₹155</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">KFC Chicken Wings (5-piece)</td>
            <td className="p-3">₹299</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Zinger Burger</td>
            <td className="p-3">₹249</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Chicken Twister Wrap</td>
            <td className="p-3">₹249</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Rice Bowl</td>
            <td className="p-3">₹179</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Snacker</td>
            <td className="p-3">₹79</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Classic Coleslaw</td>
            <td className="p-3">₹59</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Krusher Beverage</td>
            <td className="p-3">₹99</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-3 font-medium">Choco Lava Cake</td>
            <td className="p-3">₹99</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-xs text-slate-500 mt-2">
      Prices are indicative and may vary by city and outlet. Check the KFC app or your delivery platform for current prices before applying a KFC coupon code.
    </p>
  </div>
</div>

          <div className="space-y-4 text-slate-700">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    What Are KFC Wednesday Offers?
  </h3>

  <p>
    KFC Wednesday offers are one of the most searched KFC promotions in India. Every Wednesday, KFC runs special deals on selected menu items — typically offering discounted prices on buckets, combos, or individual items that aren't available on other days of the week.
  </p>

  <p className="font-semibold text-[#2C2C40] pt-2">
    Wednesday offers vary by campaign period and may include:
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>Discounted KFC bucket price on specific piece counts</li>
    <li>Reduced pricing on KFC popcorn chicken or KFC chicken wings</li>
    <li>Combo deals pairing a main with a side and beverage at a bundled price</li>
    <li>App-exclusive Wednesday KFC promo codes with flat rupee discounts</li>
  </ul>

  <p className="pt-2">
    To make the most of Wednesday offers, place your KFC order through the official KFC app where Wednesday-specific deals are most prominently featured. CouponsCrew lists active KFC offer codes for Wednesday promotions as they go live — bookmark this page and check on Tuesday evenings to plan ahead.
  </p>
</div>

          {/* Types of KFC Discount Codes */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Types of KFC Discount Codes & Offers Available
            </h3>

            <p>
              <strong className="text-[#2C2C40]">New User Offers: </strong>
              First-time KFC app users are typically eligible for the highest discounts — often 30%–50% off or a flat rupee discount on the first order. These KFC promo codes are app-specific and expire after one use.
            </p>

            <p>
              <strong className="text-[#2C2C40]">App-Exclusive Deals: </strong>
              The KFC app offers deals not available on third-party platforms. Regular users receive push notifications with time-sensitive KFC coupon codes — these can include flat discounts, free sides, or reduced KFC bucket prices.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Bank & Card Offers: </strong>
              Partner bank credit and debit cards (HDFC, Axis, SBI, ICICI) offer additional cashback or instant discounts on KFC orders — typically 10%–20% off. These KFC discount codes are applied automatically when the eligible card is used at checkout.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Combo & Bundle Deals: </strong>
              KFC regularly runs limited-period combo deals — a burger or bucket paired with fries, coleslaw, and a Krusher at a combined price lower than ordering individually. A KFC offer code can sometimes stack on top of these bundle prices.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Festive & Seasonal Campaigns: </strong>
              During Diwali, New Year, IPL season, and other high-demand periods, KFC runs festive KFC promo codes with higher discount values. CouponsCrew tracks and lists these as they go live.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Delivery Platform Offers: </strong>
              When ordering via Swiggy or Zomato, platform-specific discount codes apply instead of KFC's own codes. Keep a Swiggy coupon code or Zomato coupon code handy if ordering through those apps — the discount may be higher than a direct KFC coupon code on certain days.
            </p>
          </div>

          {/* Coverage Across India */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              KFC Beyond the Metros — Coverage Across India
            </h3>
            <p>
              KFC's expansion beyond India's metro cities has accelerated significantly over the past five years. While the brand's core presence remains in Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and Pune, KFC now operates outlets in Tier 2 and Tier 3 cities including Lucknow, Jaipur, Indore, Chandigarh, Coimbatore, Kochi, Bhubaneswar, Nagpur, Vadodara, and dozens more.
            </p>
            <p>
              For customers in smaller cities, ordering KFC online via Swiggy or Zomato is often the most accessible option — both platforms have extended KFC's reach into markets where standalone KFC outlets may not yet be present. In these cases, Swiggy coupon codes and Zomato coupon codes may be more applicable than direct KFC app promo codes.
            </p>
            <p>
              As KFC continues its Tier 2 and Tier 3 expansion, the brand has also tailored certain menu items and value combos for price-sensitive markets — making the KFC menu with prices more accessible to a broader Indian audience.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="space-y-6 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              KFC App vs Swiggy vs Zomato — Which is Best for Ordering?
            </h3>
            <p>
              Choosing where to place your KFC order can affect both price and convenience. Here's how the three main options compare:
            </p>
            <p>
              Swiggy is a convenient alternative if you want more than just KFC. The platform lets you compare prices, delivery times, and offers across thousands of restaurants. Regular Swiggy coupon codes, bank discounts, and Swiggy One benefits can help reduce your food delivery costs.
            </p>
            <p>
              Zomato is another popular option for ordering KFC and exploring nearby restaurants. It offers restaurant reviews, dining recommendations, and exclusive member benefits through Zomato Gold. Before ordering, check for active Zomato coupon codes and promotional offers to maximise your savings.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-[#f0f0f0] shadow-sm bg-white">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#5B4FBE] text-white font-black text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Feature</th>
                    <th scope="col" className="px-6 py-4">KFC App</th>
                    <th scope="col" className="px-6 py-4">Swiggy</th>
                    <th scope="col" className="px-6 py-4">Zomato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-bold">
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Primary Use</td>
                    <td className="px-6 py-4">Order directly from KFC</td>
                    <td className="px-6 py-4">Food delivery marketplace</td>
                    <td className="px-6 py-4">Food delivery marketplace</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Menu Availability</td>
                    <td className="px-6 py-4">KFC menu only</td>
                    <td className="px-6 py-4">KFC and thousands of restaurants</td>
                    <td className="px-6 py-4">KFC and thousands of restaurants</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Exclusive KFC Deals</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Limited to platform offers</td>
                    <td className="px-6 py-4">Limited to platform offers</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Coupon Codes</td>
                    <td className="px-6 py-4">KFC promo codes & app-only deals</td>
                    <td className="px-6 py-4">Swiggy coupon codes & bank offers</td>
                    <td className="px-6 py-4">Zomato coupon codes & platform discounts</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Loyalty Benefits</td>
                    <td className="px-6 py-4">Brand-specific rewards & offers</td>
                    <td className="px-6 py-4">Swiggy One membership benefits</td>
                    <td className="px-6 py-4">Zomato Gold benefits</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Delivery Coverage</td>
                    <td className="px-6 py-4">Selected KFC service areas</td>
                    <td className="px-6 py-4">Wider city coverage</td>
                    <td className="px-6 py-4">Wider city coverage</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Best For</td>
                    <td className="px-6 py-4">KFC fans seeking brand-exclusive deals</td>
                    <td className="px-6 py-4">Comparing restaurants & delivery offers</td>
                    <td className="px-6 py-4">Restaurant discovery & membership savings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong className="text-black">Bottom line: </strong>
              For the best KFC-specific KFC coupon code and brand loyalty benefits, use the KFC app. For wider city coverage and the ability to compare restaurants, Swiggy and Zomato are better options — just use a verified Swiggy coupon code or Zomato coupon code from CouponsCrew before placing your order.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="space-y-6 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              KFC Sale Calendar — Best Times to Use Your KFC Promo Code
            </h3>
            
            <div className="overflow-x-auto my-6 rounded-2xl border border-[#f0f0f0] shadow-sm bg-white">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#5B4FBE] text-white font-black text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Period</th>
                    <th scope="col" className="px-6 py-4">Offer Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-bold">
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Every Wednesday</td>
                    <td className="px-6 py-4">KFC Wednesday offers — discounted combos & buckets</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Republic Day (Jan 26)</td>
                    <td className="px-6 py-4">Flat off + free side deals</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Valentine's Day (Feb 14)</td>
                    <td className="px-6 py-4">Couple meal combos</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Holi (March)</td>
                    <td className="px-6 py-4">Festive KFC coupon code campaigns</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">IPL Season (Mar–May)</td>
                    <td className="px-6 py-4">Match-night bucket deals</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Independence Day (Aug 15)</td>
                    <td className="px-6 py-4">Themed KFC offer code campaigns</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Dussehra & Diwali (Oct–Nov)</td>
                    <td className="px-6 py-4">Highest-value festive promotions</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">New Year's Eve (Dec 31)</td>
                    <td className="px-6 py-4">Party bucket bundles + KFC discount code</td>
                  </tr>
                  <tr className="hover:bg-[#fcfcfc]">
                    <td className="px-6 py-4 font-black text-black">Weekends (Sat–Sun)</td>
                    <td className="px-6 py-4">Regular app-exclusive weekend deals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">KFC Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Order on Wednesdays. KFC Wednesday offers are consistently among the best deals of the week. Mark it in your calendar — or check CouponsCrew every Tuesday evening for Wednesday KFC offer codes going live.",
                "Use the KFC app for exclusives. The KFC app carries brand-specific KFC promo codes that aren't available on Swiggy or Zomato. If you're a regular KFC customer, keeping the app installed pays off.",
                "Stack a bank card offer. When a bank card cashback applies on top of a KFC discount code, the combined saving on a bucket order can be substantial. Check your card's offer page before paying.",
                "Bucket deals beat individual orders. The KFC bucket price per piece is almost always lower than ordering individual pieces. If you're ordering for 2 or more people, go for a bucket and apply your KFC coupon code for maximum value.",
                "Compare platforms before ordering. On some days, a Swiggy coupon code or Zomato coupon code offers a deeper discount on KFC than the KFC app's own KFC promo code. Spend 60 seconds comparing before placing your order.",
                "Order KFC popcorn chicken as a starter. If you're ordering a bucket and a side, KFC popcorn chicken as a separate add-on is often cheaper than an equivalent-weight side. It also doubles as a snack for an extra person.",
                "Check CouponsCrew before every order. All KFC coupon codes, KFC discount codes, and KFC offer codes listed here are verified before going live. A 30-second check can save ₹75–₹300 per order."
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
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
              Similar Platforms & Restaurants to Explore
            </h3>
            <p>
              <strong className="text-[#2C2C40]">McDonald's — </strong>
              Burger-focused fast food with its own McSaver combos and app-exclusive deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">Domino's — </strong>
              Pizza delivery with the Domino's app offering some of India's most consistent fast food discounts
            </p>
            <p>
              <strong className="text-[#2C2C40]">Burger King — </strong>
              Value-focused burgers with regular Burger King app offers and combo deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">Pizza Hut — </strong>
              Dine-in and delivery with combo meals and regular promotional pricing
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy — </strong>
              Food delivery marketplace covering KFC and thousands of other restaurants; use a Swiggy coupon code for extra savings
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zomato — </strong>
              Restaurant discovery and food delivery with Zomato Gold dining benefits; use a Zomato coupon code before ordering
            </p>
            <p>
              CouponsCrew covers coupon codes for all major fast food chains and food delivery platforms. Visit individual store pages for verified, up-to-date discount codes.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for KFC Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every KFC coupon code before it goes live on this page. Our deals team checks codes daily — removing expired offers and adding new ones so you always see accurate, working deals.
            </p>
            <p>
              Unlike sites that list outdated KFC discount codes copied from other pages, CouponsCrew is built around accuracy. If a KFC offer code is listed here, it has been tested. If it stops working, it comes down.
            </p>
            <p>
              Bookmark this page and check it before every KFC order — on the app, Swiggy, or Zomato. A 30-second check on CouponsCrew regularly saves ₹75–₹300 per order.
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
            Frequently Asked Questions About KFC Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a KFC coupon code?",
              a: "Open the KFC app, add your items to the cart, and proceed to checkout. Look for the \"Apply Promo Code\" field, enter your KFC coupon code, and tap Apply. The discount will reflect in your order total before you pay."
            },
            {
              q: "Q2. Why is my KFC promo code not working?",
              a: "Common reasons include: the minimum order value hasn't been met, the code has expired, the outlet isn't eligible, or the code is for new users only. Check the terms listed on CouponsCrew for the specific KFC offer code you're using."
            },
            {
              q: "Q3. Can I use a KFC coupon code on Swiggy or Zomato?",
              a: "KFC-specific KFC promo codes typically only work on the KFC app. When ordering through Swiggy or Zomato, use a Swiggy coupon code or Zomato coupon code instead — these are platform-specific and apply to KFC orders placed through those apps."
            },
            {
              q: "Q4. What is the KFC bucket price in India?",
              a: "The KFC bucket price in India starts at approximately ₹595 for a 4-piece chicken bucket. Larger buckets and fully loaded options (with sides and drinks) range from ₹899 to ₹1,499. Prices vary by city and outlet — check the KFC app for current pricing before applying a KFC discount code."
            },
            {
              q: "Q5. What are KFC Wednesday offers?",
              a: "KFC Wednesday offers are weekly promotions running every Wednesday with special pricing on selected items — typically discounted buckets, combo meals, or snack items. These are often app-exclusive and change each week. CouponsCrew lists active Wednesday KFC offer codes as they go live."
            },
            {
              q: "Q6. Is there a KFC promo code for existing users?",
              a: "Yes. KFC regularly sends existing users push notification deals through the KFC app. Bank card offers, Wednesday specials, and seasonal campaigns are also available to all users — not just new ones. Check CouponsCrew for the latest active KFC discount codes for existing users."
            },
            {
              q: "Q7. How much does KFC popcorn chicken cost?",
              a: "KFC popcorn chicken starts at approximately ₹155 for a regular serving. Prices may vary slightly by city. KFC popcorn chicken frequently features in combo deals and KFC promo codes — check CouponsCrew for active offers."
            },
            {
              q: "Q8. Are KFC chicken wings available everywhere in India?",
              a: "KFC chicken wings availability varies by outlet and city. They are more consistently available in metro locations. Before ordering, check the KFC menu with prices on the KFC app or your delivery platform to confirm wings are available at your nearest KFC."
            },
            {
              q: "Q9. Can I combine a KFC coupon code with a bank card offer?",
              a: "In some cases yes — certain KFC promotions allow a KFC promo code to stack with a bank card cashback. Check the terms of both offers before checkout. When stacking is permitted, the combined saving on a large bucket order can be significant."
            },
            {
              q: "Q10. How do I contact KFC India customer support?",
              a: "You can reach KFC India customer support through the following:\n\nWebsite: Visit KFC India's official Contact Us page at kfc.co.in\nPhone: 08042754444\nFor order-related issues placed through Swiggy or Zomato, contact the respective platform's customer support directly."
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
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0] whitespace-pre-line">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular KFC Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["KFC Coupons", "KFC Wednesday Offer", "KFC Bucket Price", "KFC Promo Code", "KFC App Deals", "Swiggy KFC Offers", "Zomato KFC Coupon", "CouponsCrew Fast Food"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top KFC Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Wednesday Special — Up to 40% OFF", sub: "Discounted buckets & combo meals every Wednesday" },
              { heading: "Flat 50% Off First App Order", sub: "App-exclusive discount for new users on KFC app" },
              { heading: "Bank Card Instant Discount", sub: "Get up to 20% cashback on HDFC, ICICI & SBI cards" },
              { heading: "Party Bucket Combos", sub: "Save more on large bucket orders for 2+ people" },
              { heading: "Free Popcorn Chicken Add-on", sub: "Check active coupon code at checkout for free sides" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">K</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get KFC deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at KFC checkout for instant discounts.
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
                <span>Continue to KFC</span>
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
