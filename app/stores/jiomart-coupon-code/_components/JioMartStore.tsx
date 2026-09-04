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
import { Coupon, JIOMART_COUPONS } from './jiomartCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.jiomart.com';

export default function JioMartStore() {
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

  const coupons: Coupon[] = JIOMART_COUPONS;

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
      q: 'How do I use a JioMart coupon code?',
      a: 'To use a JioMart coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the JioMart website or app. If it is a deal, simply click "Visit JioMart" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on JioMart?',
      a: 'Generally, JioMart allows only one promotional code per order. You may still be able to combine a coupon code with other automatic sitewide offers, depending on what is running at the time.'
    },
    {
      q: 'Why is my JioMart coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Always check the terms listed with each code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every JioMart coupon code listed on this page is checked before publishing so you can shop with confidence.'
    },
    {
      q: 'How often are JioMart coupons updated?',
      a: 'We review and refresh JioMart coupons regularly. Expired promotions are removed as soon as they are identified, so you mostly see codes that are currently active.'
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
            <span className="text-[#5B4FBE] font-semibold">JioMart Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/joi-mart-logo_imkftb.webp"
                      alt="JioMart Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">JioMart</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Grocery, Electronics & Fashion
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Save more with verified JioMart coupon codes, promo codes, and exclusive offers. Enjoy up to 87% OFF, ₹1,000 OFF electronics, up to 80% OFF fashion and home appliances, flat 40% OFF groceries, and extra card discounts on selected products.
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
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit JioMart</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center p-8"
            >
              <div className="text-center text-white select-none">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Seasonal Offers</p>
                <p className="text-3xl font-black leading-tight">Save More on<br />Every Order</p>
                <span className="inline-block mt-4 bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Live Now
                </span>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 50%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">JioMart Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified JioMart coupon codes & offers.</p>
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
                    <span>Valid on select grocery, electronics & fashion categories.</span>
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
    <Info size={16} className="text-[#5B4FBE]" />
    <span>What is JioMart and Why Is It Worth Shopping Here?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-3">
    JioMart is the e-commerce arm of Reliance Retail, launched in 2020 and rapidly scaled using Reliance's physical store network — including over 18,000 Reliance Retail outlets across India — as fulfilment hubs. This infrastructure gives JioMart a delivery speed and fresh produce availability advantage over pure-play e-commerce platforms that rely entirely on centralised warehouses.
  </p>

  <p className="text-[#1A1A2E] text-sm mb-4">
    Jio online shopping covers a broader catalogue than most users realise. While jiomart grocery remains its strongest and most price-competitive category, the platform has expanded significantly into fashion, electronics, mobiles, beauty, home and kitchen, and even pharmaceuticals. The reliance mart online shopping experience is now integrated with JioMart, meaning products available in physical Reliance Smart and Smart Point stores are also listed online with the same pricing.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    Key reasons shoppers choose JioMart for jiomart online shopping:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">Grocery pricing</span> — consistently among the most competitive for branded staples like Fortune atta, Saffola oil, Tata salt, and Amul products.
    </li>
    <li>
      <span className="font-semibold">Same-day and express delivery</span> — available in most tier-1 and several tier-2 cities via Jio Mart's hyperlocal delivery model.
    </li>
    <li>
      <span className="font-semibold">Fresh produce</span> — fruits and vegetables available with location-specific pricing and same-day delivery in covered pin codes.
    </li>
    <li>
      <span className="font-semibold">No minimum order on groceries</span> — unlike some platforms, JioMart allows grocery orders without a delivery minimum in many areas.
    </li>
    <li>
      <span className="font-semibold">JioMart on WhatsApp</span> — orders can be placed directly via WhatsApp in supported areas, streamlining repeat grocery purchases.
    </li>
    <li>
      <span className="font-semibold">Reliance brands</span> — exclusive availability of Reliance's own brand products (Good Life, Smart Choice) at lower price points than national brands.
    </li>
  </ul>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit JioMart</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>
           

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">JioMart Seasonal Offers</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 30% OFF on Grocery, Electronics & Fashion
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

           

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a JioMart Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a JioMart promo code at checkout takes under a minute. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens JioMart in a new tab or the app.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Sign in or create your account.</span> Log in to JioMart with your Jio mobile number. New users can register directly — new accounts typically qualify for the first-order JioMart coupon code offers listed on this page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Browse and add products to your cart.</span> Shop by category — groceries, fresh produce, fashion, electronics, home, or beauty. Add items until your cart meets the minimum order value shown on the deal card, if applicable.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Click the cart icon and tap "Proceed to Checkout." Confirm your delivery address — JioMart uses your pin code to determine available delivery slots and eligible offers.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Locate the coupon / promo code field.</span> On the order summary page, look for "Apply Coupon" or "Have a Promo Code?" — it appears in the pricing section before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the JioMart coupon code from your clipboard and click "Apply." The discount reflects in the order total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Choose from credit/debit card, UPI, net banking, JioPay, or cash on delivery. If you have an eligible bank card — HDFC, SBI, ICICI, or Axis — select it now to stack the bank discount on top of your coupon saving where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and complete payment. You will receive an order confirmation on your registered number with a delivery time estimate.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a JioMart discount code shows as invalid, check that your cart value meets the minimum order threshold and that your selected products are in the eligible category. Some codes exclude fresh produce or electronics. Refresh this CouponsCrew page for the next working code.
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
            JioMart Coupon Code & Shopping Deals — Verified for August 2026
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
          {JIOMART_COUPONS.map((coupon) => (
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
              JioMart is Reliance Retail's online shopping platform, combining a wide grocery catalogue with fashion, electronics, beauty, home essentials, and more under one roof. Backed by Reliance's extensive supply chain and physical retail network, it has grown into one of the most competitive platforms for jiomart grocery shopping and jio online shopping in India — with same-day and next-day delivery available in most major cities and aggressive pricing across daily essentials.
            </p>

            <p>
              At CouponsCrew, we track every active JioMart coupon code, JioMart promo code, and JioMart discount code so you never apply a deal that stopped working last week. Every code on this page is verified by our team before going live — minimum cart values, eligible categories, user type, and expiry dates are all checked and displayed clearly on each deal card.
            </p>

            <p>
              Whether you are doing a weekly grocery run, stocking up on household essentials, shopping fashion end-of-season sales, or picking up electronics with a bank card offer stacked on top — there is almost always a saving available on JioMart. This page is updated daily. Bookmark it and check it before every purchase.
            </p>


  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Types of JioMart Deals Available on CouponsCrew
  </h3>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">JioMart Coupon Codes (Flat Discount)</p>
  <p className="mb-4">
    A fixed rupee amount off your order total — the most common structure on JioMart. The widely searched jiomart 100 off coupon code gives new users ₹100 off on their first order above a minimum cart value, and is one of the most redeemed codes on the platform. Flat codes are best used on orders close to the minimum threshold where the discount has the highest percentage impact.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">JioMart Promo Code (Percentage Discount)</p>
  <p className="mb-4">
    A percentage off the total cart — typically 10%–30% on fashion and lifestyle categories, and up to 50% on groceries during sale windows. Percentage-based JioMart promo codes offer more value on larger grocery orders or higher-value fashion and electronics purchases.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">New User Offers</p>
  <p className="mb-4">
    First-time JioMart shoppers get a dedicated set of deals — typically a flat ₹100–₹200 off the first order with a low minimum cart value. CouponsCrew lists all currently active new-user codes in the "New Users" filter on this page.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Bank Card Instant Discounts</p>
  <p className="mb-4">
    HDFC, SBI, ICICI, and Axis bank card holders get periodic instant discount offers on JioMart — typically an extra 5%–15% off at the payment step. These are separate from promo codes and are frequently stackable with an active JioMart discount code where the promotion allows.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Category-Specific Codes</p>
  <p className="mb-4">
    Some JioMart promo codes are valid only on specific categories — groceries only, fashion only, or electronics only. CouponsCrew deal cards clearly note category restrictions so you can find the right code before building your cart.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Seasonal and Sale Event Codes</p>
  <p className="mb-6">
    JioMart runs promotional campaigns around major occasions — Republic Day, Holi, Independence Day, festive season (Navratri, Diwali), and year-end sales. These window-based JioMart coupon codes are typically higher in value and shorter in validity. CouponsCrew publishes these as they go live.
  </p>

  {/* Explore Popular JioMart Categories */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Explore Popular JioMart Categories — Current Discounts by Category
  </h3>
  <p className="mb-4">
    JioMart's catalogue is broader than most shoppers realise. Here is a breakdown of what is available in each major category and what kind of savings to expect:
  </p>

  <p className="font-bold text-[#2C2C40] text-[#2C2C40] text-base mt-4 mb-2">Groceries &amp; Staples</p>
  <p className="mb-4">
    Jiomart grocery is the platform's most price-competitive category. Discounts of up to 50% off are common on branded staples — atta, rice, pulses, and cooking oil from brands like Fortune, Saffola, and Tata. JioMart frequently offers lower per-unit pricing on grocery bundles than offline stores, and daily deals on fast-moving essentials rotate every 24 hours. Apply a verified JioMart coupon code from CouponsCrew on top of these base deals for the highest saving on your weekly shop.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Fruits &amp; Vegetables</p>
  <p className="mb-4">
    Fresh produce pricing on JioMart is location-specific — availability, pricing, and same-day delivery eligibility depend on your pin code and the nearest fulfilment hub. Discounts of up to 50% off regular market prices are available in covered areas, particularly on pre-packaged produce bundles. Check the "Fresh" section after entering your pin code to see what is available in your area today.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Fashion &amp; Footwear</p>
  <p className="mb-4">
    JioMart's fashion catalogue covers men's, women's, and kids' clothing, footwear, and accessories with discounts between 60% and 80% off during end-of-season clearance windows. Brands from Reliance Retail's fashion network — including Trends — are well-represented alongside third-party labels. Fashion is one of the strongest categories for stacking a percentage-based JioMart promo code with end-of-season markdown pricing.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Beauty &amp; Personal Care</p>
  <p className="mb-4">
    Skincare, haircare, grooming, and personal care products from Nivea, Lakme, Garnier, Dove, and other established brands are available at up to 60% off. JioMart's beauty section benefits from Reliance Retail's direct brand partnerships — pricing on FMCG beauty products is frequently at or below the MRP you would find in offline stores. A JioMart discount code valid for beauty stacked on top of an already-discounted product price is one of the best per-unit values available on the platform.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Electronics &amp; Mobiles</p>
  <p className="mb-4">
    Electronics on JioMart covers laptops, tablets, smartphones, small home appliances, and accessories — with standard discounts up to 35% off on most products. The bigger savings in electronics come from bank card instant discounts: HDFC, SBI, and ICICI card offers stack on top of the listed price to deliver an effective 40%–50% saving on higher-value items. No-cost EMI is available on select purchases above ₹3,000.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Home &amp; Kitchen</p>
  <p className="mb-4">
    Cookware, storage containers, cleaning supplies, home décor, and kitchen accessories are available at up to 70% off during clearance events. JioMart's home category benefits from Reliance Smart's physical inventory — seasonal and end-of-year clearance pricing applies to a broad range of household items.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Laundry &amp; Household Essentials</p>
  <p className="mb-4">
    Detergents, dishwash products, floor cleaners, and household cleaning essentials start from ₹9 on JioMart — among the most competitive per-unit pricing for FMCG cleaning products available online. Bulk-buy options and combo packs drive even lower per-unit costs. No coupon code is required for the base pricing on most household essentials; a JioMart coupon code on top of these prices applies where the code's category eligibility covers household products.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Perfumes &amp; Deodorants</p>
  <p className="mb-4">
    Branded fragrances and deodorants from Fogg, Axe, Nivea, and Engage are available from ₹99 — well below MRP for most products in this category. Up to 50% off on standard deodorant and body spray products makes JioMart a reliable place to stock up on personal care products you use regularly.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Snacks &amp; Beverages</p>
  <p className="mb-4">
    Chips, biscuits, namkeen, tea, coffee, juices, and energy drinks — up to 40% off on combo packs and party-size quantities. Quick-delivery options are available in most cities. A practical category to stock during a JioMart grocery run — adding snacks and beverages to an existing grocery cart is a low-friction way to hit minimum order thresholds for coupon eligibility.
  </p>

  <p className="mb-6 font-semibold text-slate-700">
    💡 Exact figures, product eligibility, and coupon code validity change frequently. Check the deal cards on this CouponsCrew page for today's verified and active JioMart deals across all categories.
  </p>

  {/* JioMart vs Other Grocery Platforms Table */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    JioMart vs Other Grocery Platforms — How Does It Compare?
  </h3>
  <p className="mb-4">
    If you regularly use multiple platforms for jiomart online shopping and grocery delivery, here is how JioMart stacks up against the major alternatives:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Feature</th>
          <th className="p-4">JioMart</th>
          <th className="p-4">BigBasket</th>
          <th className="p-4">Blinkit</th>
          <th className="p-4">Zepto</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Grocery Range</td>
          <td className="p-4">Wide — branded + fresh produce</td>
          <td className="p-4">Widest online grocery range</td>
          <td className="p-4">Curated, fast-moving SKUs</td>
          <td className="p-4">Curated, fast-moving SKUs</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Delivery Speed</td>
          <td className="p-4">Same-day to next-day</td>
          <td className="p-4">Scheduled slots (2–4 hrs)</td>
          <td className="p-4">10–20 mins (dark store model)</td>
          <td className="p-4">10 mins (dark store model)</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Fresh Produce</td>
          <td className="p-4">Available in select pin codes</td>
          <td className="p-4">Strong</td>
          <td className="p-4">Limited selection</td>
          <td className="p-4">Limited selection</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Min Order Value</td>
          <td className="p-4">Often none for groceries</td>
          <td className="p-4">₹600–₹800 in most cities</td>
          <td className="p-4">None</td>
          <td className="p-4">None</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Electronics</td>
          <td className="p-4">Yes — laptops, mobiles, appliances</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Fashion</td>
          <td className="p-4">Yes</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Bank Offers</td>
          <td className="p-4">HDFC, SBI, ICICI, Axis</td>
          <td className="p-4">HDFC, SBI, Axis</td>
          <td className="p-4">HDFC, ICICI</td>
          <td className="p-4">Limited</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Coupon Codes</td>
          <td className="p-4">Yes — via CouponsCrew</td>
          <td className="p-4">Yes</td>
          <td className="p-4">Limited</td>
          <td className="p-4">Limited</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">WhatsApp Ordering</td>
          <td className="p-4">Yes</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
          <td className="p-4">No</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Best For</td>
          <td className="p-4">Groceries + broader catalogue shopping</td>
          <td className="p-4">Widest grocery range + scheduled delivery</td>
          <td className="p-4">Ultra-fast essentials</td>
          <td className="p-4">Ultra-fast essentials</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-6">
    JioMart's key advantage is the combination of a broad catalogue (groceries + fashion + electronics in one cart) with competitive grocery pricing and no minimum order in many areas. If you are doing a full weekly shop that includes both staples and household products, JioMart often offers a better effective price after applying a JioMart coupon code than splitting the order across two platforms.
  </p>

  {/* JioMart Delivery Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    JioMart Delivery — What to Expect
  </h3>
  <p className="mb-4">
    Jio mart delivery varies by your pin code, order type, and the time you place the order. Here is what to expect across different order categories:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Grocery &amp; Packaged Food</p>
  <p className="mb-4">
    Same-day delivery is available in most tier-1 cities when orders are placed before the cutoff time (typically mid-morning). Next-day delivery is the standard fallback. JioMart uses a scheduled slot system for most grocery deliveries — select your preferred time window at checkout.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Fresh Produce</p>
  <p className="mb-4">
    Same-day delivery for fruits and vegetables is available in covered pin codes. Availability is location-dependent — enter your pin code first to confirm fresh produce delivery eligibility before adding items to your cart.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Fashion &amp; Electronics</p>
  <p className="mb-4">
    Standard delivery timelines of 3–7 days apply for fashion and electronics items, depending on the item's fulfilment location. Express delivery is available for select fashion items in major cities.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Free Delivery</p>
  <p className="mb-4">
    JioMart offers free delivery on grocery orders in most covered areas with no minimum order value. Fashion and electronics orders may carry a delivery fee depending on order value and your location.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Order Tracking</p>
  <p className="mb-6">
    All JioMart orders can be tracked via the app or website using your order ID. You will receive SMS and WhatsApp notifications at key stages — confirmed, out for delivery, and delivered.
  </p>

  {/* JioMart Cancellation and Refund Policy */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    JioMart Cancellation and Refund Policy
  </h3>
  <p className="mb-4">
    Understanding JioMart's cancellation and refund terms before you apply a JioMart promo code and complete a purchase is worth a minute of your time:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Order Cancellation</p>
  <p className="mb-4">
    JioMart orders can be cancelled before they are dispatched from the fulfilment centre — typically within 1–2 hours of placing the order for grocery items. Once an order is out for delivery, cancellation may not be possible. Cancel via the app or website under "My Orders."
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Returns</p>
  <p className="mb-2">
    Return eligibility varies by category:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Groceries &amp; FMCG</strong> — returns accepted for damaged, defective, or wrong items delivered. Perishables (fresh produce) are generally non-returnable but replacement or refund is offered for quality issues if raised within the delivery window.</li>
    <li><strong>Fashion</strong> — 7–30 day return window depending on the product and seller. Items must be unworn, unwashed, and with original tags intact.</li>
    <li><strong>Electronics</strong> — 7–10 day return or replacement window for manufacturing defects. No return for buyer's remorse on most electronics after the return window closes.</li>
    <li><strong>Beauty &amp; Personal Care</strong> — returns accepted only for sealed/unopened products reported as damaged or incorrect.</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Refund Processing</p>
  <p className="mb-4">
    Approved refunds are processed within 5–7 business days to the original payment method. UPI and wallet refunds are typically faster — 24–48 hours in most cases. If you paid using a JioMart coupon code or promo discount, the refund reflects the amount actually paid (post-discount) rather than the original product price.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Defective or Wrong Item Delivered</p>
  <p className="mb-6">
    Raise a complaint via the JioMart app under "Help &amp; Support" within 24–48 hours of delivery. Attach a photo of the item for faster resolution. JioMart's resolution time for clear cases (wrong product, visibly damaged packaging) is typically 24–72 hours.
  </p>


            {/* Section: JioMart Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              JioMart Saving Tips — Get More Off Every Order
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Always Apply a CouponsCrew Code Before Checkout: </strong>
              JioMart's platform discounts are often already competitive — but a verified JioMart coupon code from CouponsCrew stacks on top of those base prices. Even a ₹100 flat code on a ₹500 grocery order is an effective 20% saving.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Use the jiomart 100 Off Coupon Code on Your First Order: </strong>
              New users should always start with the jiomart 100 off coupon code — it is one of the most straightforward first-order deals available and has a low minimum cart value. Check the "New Users" filter on this CouponsCrew page for the currently active version of this code.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Stack a Promo Code with a Bank Card Offer: </strong>
              HDFC, SBI, ICICI, and Axis card holders get periodic instant discounts on JioMart — apply your JioMart promo code first, then select your bank card at the payment step. The bank saving layers on top where the promotion allows.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Shop Grocery Bundles for Better Per-Unit Value: </strong>
              JioMart's bundle deals on staples (atta, rice, oil, pulses in larger pack sizes) consistently offer lower per-unit costs than single-pack purchases. Combining bundle pricing with a JioMart discount code gives you the maximum saving per rupee spent.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Check the Daily Deals Section First: </strong>
              JioMart rotates category-level daily deals — specific products at deep discounts that reset every 24 hours. Checking this section before building your cart helps you swap a few planned purchases for deal-priced equivalents, lowering your cart total before any code is applied.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Order Grocery and Household Together: </strong>
              Combining your grocery run with household essentials (detergents, cleaning products, personal care) in one cart maximises your minimum order value — qualifying for higher-value JioMart coupon codes and free delivery in one order rather than placing separate orders.
            </p>

            <p>
              <strong className="text-[#2C2C40]">7. Use JioMart on WhatsApp for Repeat Orders: </strong>
              If you have a standard weekly grocery list, JioMart's WhatsApp ordering channel lets you re-order quickly without browsing the full catalogue. Promo codes can still be applied via the checkout link sent on WhatsApp.
            </p>

            <p>
              <strong className="text-[#2C2C40]">8. Time Fashion Purchases Around End-of-Season Sales: </strong>
              JioMart's fashion discounts go up to 80% off during end-of-season clearance windows. These are the best times to use percentage-based JioMart promo codes — the percentage saving applies to already-reduced clearance prices, maximising the effective discount.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              JioMart Customer Support
            </h3>
            <p>
              JioMart provides multiple support options for order tracking, delivery assistance, returns, and general queries:
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
                    <td className="p-4 font-bold text-[#2C2C40]">Toll-Free Helpline</td>
                    <td className="p-4">1800 890 1222 (8:00 AM to 8:00 PM, 365 days)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">WhatsApp Customer Service</td>
                    <td className="p-4">+91 70003 70003 (Chat & Quick Ordering)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Support / Queries</td>
                    <td className="p-4">cs@jiomart.com / customerservice@ril.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Online Support & Self-Help</td>
                    <td className="p-4">Available on jiomart.com/contact-us</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">JioMart Mobile App Support</td>
                    <td className="p-4">In-app order tracking, instant refund initiation, and live chat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">BigBasket — </strong> Widest online grocery range with scheduled delivery slots
            </p>
            <p>
              <strong className="text-[#2C2C40]">Blinkit — </strong> 10–20 minute grocery delivery via dark store model
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zepto — </strong> Ultra-fast 10-minute delivery for fast-moving essentials
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon Fresh — </strong> Grocery delivery integrated with Amazon Prime
            </p>
            <p>
              <strong className="text-[#2C2C40]">Flipkart Grocery — </strong> Competitive on packaged food and household essentials with frequent bank card deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">Myntra — </strong> For fashion — broader brand range and EORS sale events twice yearly
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for JioMart Deals
            </h3>
            <p>
              Finding a working JioMart coupon code should be a 30-second task, not a frustrating exercise. CouponsCrew verifies every code on this page before it goes live — minimum cart values, eligible categories, user restrictions, and expiry dates are all checked and displayed clearly on every deal card.
            </p>
            <p>
              Jiomart online shopping is already competitively priced, particularly on groceries, household essentials, and FMCG products. Applying a verified JioMart promo code or JioMart discount code from CouponsCrew on top of those base prices — and stacking a bank card offer where available — consistently delivers better value than any single platform's headline discount alone.
            </p>
            <p>
              Bookmark this page and check back before every JioMart order — whether you are placing a quick grocery restock, a household supplies run, or a larger fashion or electronics purchase. A verified deal is always one click away.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-10 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
          </button>

          {/* FAQs Accordion */}
          <div className="mt-20 space-y-4">
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions — JioMart Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working JioMart coupon code today?",
                a: "Every JioMart coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the conditions on the deal card and try the next active listing."
              },
              {
                q: "Q2. What is the jiomart 100 off coupon code?",
                a: "The jiomart 100 off coupon code is a first-order discount code giving new JioMart users ₹100 off on their first purchase above a minimum cart value (typically ₹500). It is one of the most searched JioMart deals — CouponsCrew lists the currently active version in the \"New Users\" filter on this page."
              },
              {
                q: "Q3. Can I use a JioMart promo code on grocery orders?",
                a: "Yes — most JioMart promo codes on this page are valid on grocery orders, though some codes exclude fresh produce (fruits and vegetables). Check the individual deal card for category eligibility before adding products to your cart."
              },
              {
                q: "Q4. Is JioMart good for online grocery shopping?",
                a: "Yes — jiomart grocery pricing is consistently competitive on branded staples like atta, rice, cooking oil, and pulses. The platform's pricing on FMCG products (detergents, personal care, packaged food) is often at or below what you would pay in a physical supermarket, and applying a verified JioMart coupon code from CouponsCrew reduces that further."
              },
              {
                q: "Q5. Does JioMart offer free delivery?",
                a: "Yes — free delivery is available on most grocery orders in covered areas with no minimum order value in many cities. Fashion and electronics orders may carry a delivery fee depending on cart value and location. Confirm delivery terms for your pin code at checkout."
              },
              {
                q: "Q6. Can I stack a JioMart coupon code with a bank card offer?",
                a: "In many cases, yes — a JioMart discount code and a bank card instant discount can both apply to the same order. Apply the promo code first in the coupon field, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes for confirmation."
              },
              {
                q: "Q7. What is the minimum order value for JioMart coupon codes?",
                a: "Minimum cart values vary by code — typically ₹300–₹600 for most active JioMart coupon codes. The exact threshold is shown on each deal card on this CouponsCrew page. Some new-user codes have a lower minimum; some category-specific codes have a higher threshold."
              },
              {
                q: "Q8. How does JioMart delivery work?",
                a: "Jio mart delivery is pin-code dependent. Grocery orders qualify for same-day or next-day delivery in most tier-1 cities. Fresh produce is available with same-day delivery in select pin codes. Fashion and electronics have a 3–7 day standard delivery timeline. Enter your pin code at the start of the JioMart session to see available delivery slots and timelines for your area."
              },
              {
                q: "Q9. Can I return a product if I used a JioMart discount code?",
                a: "Yes — the discount code does not affect return eligibility. If a return is approved, the refund is processed for the amount actually paid (post-discount) to your original payment method within 5–7 business days. UPI refunds are typically processed faster."
              },
              {
                q: "Q10. Is JioMart the same as Reliance Mart online shopping?",
                a: "JioMart is the online shopping platform operated by Reliance Retail — the same company that operates Reliance Smart, Reliance Smart Point, and other physical retail formats. Reliance mart online shopping via JioMart gives you access to the same product range and Reliance in-house brands (Good Life, Smart Choice) available in physical stores, often at the same or lower pricing."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular JioMart Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["JioMart Coupons", "Grocery Savings", "Flat 100 OFF", "Household Essentials", "Reliance Smart Point", "Fashion Clearance", "Electronics Offers", "CouponsCrew JioMart"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top JioMart Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat ₹100 OFF First Order", sub: "Verified coupon code for new JioMart users" },
              { heading: "Up to 50% OFF Grocery Staples", sub: "Extra savings on Rice, Atta, Oil & Pulses" },
              { heading: "Up to 70% OFF Fashion Clearance", sub: "Discounts on Trends & Ajio brand collection" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, SBI, ICICI & Axis cards" },
              { heading: "Household & Cleaning Bundles", sub: "Up to 40% off on daily utility essentials" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">JM</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get JioMart deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at JioMart checkout for instant discounts.
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
                <span>Continue to JioMart</span>
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
