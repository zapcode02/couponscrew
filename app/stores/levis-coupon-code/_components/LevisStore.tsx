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
import { Coupon, LEVIS_COUPONS } from './levisCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://levi.in/';

export default function LevisStore() {
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

  const coupons: Coupon[] = LEVIS_COUPONS;

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
      q: 'How do I use a Levi\'s coupon code?',
      a: 'To use a Levi\'s coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Levi\'s website or app. If it is a deal, simply click "Visit Levi\'s" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Levi\'s coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Levi\'s coupon code listed on this page is checked regularly by our team to confirm it is active before it is published, so you can shop with confidence.'
    },
    {
      q: 'How often are Levi\'s coupons updated?',
      a: 'Our deals team reviews and updates Levi\'s coupons regularly. Expired promotions are removed as soon as they are identified, so you spend less time on codes that don\'t work.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promotional code can be applied per order. Check the specific terms of each offer, as some codes may be combinable with ongoing sitewide promotions.'
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
            <Link href="/" className="hover:text-[#BB1E3C] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#BB1E3C] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#BB1E3C] font-semibold">Levi's Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/levis-logo_oubzvu.webp"
                      alt="Levi's Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Levi's</h1>
                    <span className="bg-[#FBEAEE] text-[#BB1E3C] text-xs font-bold px-3 py-1 rounded-full border border-[#F5D3DB]">
                      Denim, Jackets &amp; Apparel
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover the latest Levi's coupon code and promo code to save on premium denim and fashion. Enjoy up to 60% OFF on jeans, jackets, T-shirts, cargo pants, footwear, and more, with additional savings available on selected products and exclusive online offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#BB1E3C] bg-[#FBEAEE] px-2.5 py-1 rounded-full border border-[#F5D3DB]">
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
                  className="bg-[#2C3E5C] hover:bg-[#243349] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Levi's</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#2C3E5C] to-[#1A1A2E] items-center justify-center"
            >
              <div className="text-center text-white px-8 relative z-10">
                <p className="text-xs font-bold uppercase tracking-[3px] opacity-80 mb-2">Seasonal Sale</p>
                <p className="text-3xl font-black leading-tight">Up to 50% OFF<br />Jeans &amp; Jackets</p>
                <p className="text-xs font-semibold opacity-70 mt-3">Shop the latest denim collection</p>
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
            <div className="w-11 h-11 bg-[#FBEAEE] text-[#BB1E3C] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAF0F9] text-[#2C3E5C] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Big Savings</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">On Every Order</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FBEAEE] text-[#BB1E3C] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Levi's Coupons &amp; Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Levi's coupon codes &amp; offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#BB1E3C) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#BB1E3C] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#2C3E5C) */}
                <span className="bg-[#2C3E5C]/10 text-[#2C3E5C] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#BB1E3C] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#BB1E3C]" />
                    <span>Valid on select jeans, jackets &amp; apparel categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#BB1E3C]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#BB1E3C]" />
                    <span>Covers selected styles and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#2C3E5C]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#2C3E5C) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#2C3E5C] hover:bg-[#243349] text-white"
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
                <Info size={16} className="text-[#BB1E3C]" />
                <span>About Levi's India</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Levi Strauss & Co. is the original inventor of blue jeans, and the brand's India operations have grown into one of the most recognised denim retail presences in the country. You will find levi's exclusive store locations across major cities, as well as a fully transactional website and app that carries the complete India range.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               The Indian catalogue is not a stripped-down version of the global one. Levi's India stocks core lines like the levis 501, levis 511, levis 512, and levis 505 alongside India-specific sizing and fits, women's levis collections, and seasonal drops tied to global launches. The brand also maintains a levi's vintage clothing line for buyers who want heritage-cut denim with period-accurate detailing.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               Levi's positions itself as a premium denim brand rather than a fast fashion retailer, which affects how it approaches discounting. Levis sale events happen at predictable points in the retail calendar — end of season, levi's black friday, and Republic Day — rather than continuously. This makes timing your purchase or holding out for a sale event a more reliable savings strategy than searching for a levi's promo code year-round.
              </p>

             

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#BB1E3C] hover:text-[#BB1E3C] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Levi's</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Save More on Levi's India
  </h3>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Join the Red Tab programme before your next purchase</span>
        <span>Membership is free and unlocks member pricing, early sale access, and birthday rewards. For anyone buying Levi&apos;s regularly, it is the single most effective way to access consistent savings.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Use the Sale section directly</span>
        <span>The Sale tab on the Levi&apos;s India site is a curated feed of discounted stock. Browsing here first means you are always looking at the current discounted range rather than filtering full-price items manually.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Check CouponsCrew before placing any order</span>
        <span>Active levi&apos;s coupon codes, promo codes, and cashback offers are updated on this page as they become available. Codes that do appear tend to be tied to specific sale events or payment method promotions, so checking here before checkout takes seconds and costs nothing.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Consider core fits over seasonal items</span>
        <span>The levis 501, levis 511, levis 512, and levis 505 go on sale reliably at the end of each season. If you are flexible on wash and colourway, buying a core fit during a sale event rather than at launch saves meaningfully over time.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Buy multiple items to meet minimum cart thresholds</span>
        <span>When a levi&apos;s promo code is active, it frequently carries a minimum cart value. Adding a secondary item — a tee or a belt — to meet the threshold is often worth it when the percentage saving on the overall cart is significant.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Check stock at your nearest levi&apos;s exclusive store</span>
        <span>Some in-store promotions are not available online and vice versa. If you are near a levi&apos;s exclusive store, it is worth checking both channels before committing to a purchase — particularly during sale events where stock allocation differs between online and offline.</span>
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
          Levi's Coupon Code – Deals on Jeans, Jackets & More
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
              Levi's has been making denim for well over a century, and its India presence carries the same product depth the brand is known for globally. Whether you shop at a levi's exclusive store, browse the website, or use the app, the range covers everything from the iconic levis 501 to contemporary fits, women's levis, and seasonal collections.
            </p>,
            <p key="intro-2">
              A levi's coupon code is not always the primary way to save on Levi's India — the brand relies more on sale events, its Red Tab loyalty programme, and seasonal markdowns than on publicly circulated promo codes. This page covers all of it: when active levi's discount codes are available, how the Red Tab membership works, what the different jean cuts look like, and which collections are worth knowing about.
            </p>,

            <div className="space-y-8 text-slate-700">
  {/* Popular Levi's India Collections Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Popular Levi's India Collections
    </h3>
    <p className="mb-4">
      Levi's India organises its range across a set of named collections, each with a distinct identity and target audience.
    </p>

    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          RedLoop
        </h4>
        <p>
          Levi's sustainability-focused line, made using water-saving and recycled material processes. RedLoop pieces carry the same core Levi's aesthetic but are produced with a reduced environmental footprint. A growing segment of the India range falls under this initiative.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Icons
        </h4>
        <p>
          The Icons collection covers Levi's most enduring silhouettes — fits and washes that have remained in production for decades because they continue to sell. The levis 501 sits here alongside other timeless cuts.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Justin Timberlake
        </h4>
        <p>
          A limited collaboration collection that brought a more fashion-forward sensibility to Levi's basics. Typically includes modified trucker jackets, elevated tees, and reworked denim cuts.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Line 8
        </h4>
        <p>
          A wardrobe-essentials line designed for everyday wear — simple, clean cuts without heavy branding. Tends to be priced at the accessible end of the Levi's range.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Commuter
        </h4>
        <p>
          Designed in partnership with cycling communities, the Commuter line combines denim construction with functional details — stretch panels, hidden pockets, and reinforced seams — suited to an active daily routine.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Winterwear
        </h4>
        <p>
          Levi's India winterwear covers quilted and sherpa-lined jackets, fleece-lined denims, and layering pieces designed for the North Indian winter market specifically.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Sportswear
        </h4>
        <p>
          Performance-influenced clothing using stretch fabrics and active cuts. Not a replacement for technical sportswear but designed for casual athletic and athleisure styling.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          White Tab
        </h4>
        <p>
          A premium sub-line within Levi's India that uses higher-grade denim and more detailed finishing. White Tab pieces are priced above the standard range.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Sculpt Jeans
        </h4>
        <p>
          Levi's women's levis focused line featuring shaping technology built into the fabric construction. Covers multiple fits and rises within the Sculpt designation.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Streetwear
        </h4>
        <p>
          Graphic-heavy hoodies, oversized tees, and wide-leg denim targeted at a younger urban demographic. Frequently refreshed with new graphics and colourways.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Levi's 501
        </h4>
        <p>
          The original straight-leg jean, unchanged in silhouette since its introduction. Available in multiple washes from raw indigo to heavily distressed, the 501 is the benchmark against which most other straight-leg jeans are measured.
        </p>
      </div>
    </div>
  </div>

  {/* What Are the Different Types of Jeans Available on Levi's? Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      What Are the Different Types of Jeans Available on Levi's?
    </h3>
    <p className="mb-4">
      Levi's India carries a wide range of jean cuts across men's and women's sections. Understanding the differences helps you find the right fit before you buy — whether in a levi's exclusive store or online.
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Straight Fit – Levis 501
        </h4>
        <p>
          The original. Sits at the waist, straight through the thigh, and hits the ankle with a clean hem. The 501 is available in both button-fly and zip-fly variants and comes in the widest range of washes of any Levi's style.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Slim Fit – Levis 511
        </h4>
        <p>
          Sits below the waist and cuts close through the thigh and knee with a narrow leg opening. The levis 511 is the most versatile slim-fit in the range — dressy enough for most casual offices, relaxed enough for weekends.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Taper Fit – Levis 512
        </h4>
        <p>
          The levis 512 is a slim-taper — it fits like a slim through the seat and thigh but narrows more aggressively toward the ankle. Works particularly well for people who want volume at the top but a clean ankle stack.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Regular Fit – Levis 505
        </h4>
        <p>
          A classic regular fit — more room through the seat and thigh than a slim, but not as wide as a relaxed or loose cut. The levis 505 is a reliable middle ground for buyers who find slims too restrictive and baggy cuts too casual.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Bootcut – Levi's Bootcut
        </h4>
        <p>
          Fitted through the thigh with a flare from the knee down. The levi's bootcut is designed to sit over boots without bunching and has seen renewed interest as wider-leg silhouettes have come back into fashion.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Women's Levi's – Sculpt and Specific Fits
        </h4>
        <p>
          Women's levis cuts include the Sculpt line (body-contouring construction), high-rise straight, wedgie fit, ribcage straight, and wide-leg options. Women's sizing and inseam options are available in the full range on the India site.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Levi's Denim Skirt
        </h4>
        <p>
          The levis denim skirt range covers midi and mini lengths, typically in classic washes. The denim skirt is listed under the Women's section on the India site and is part of the seasonal new arrivals cycle.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Levi's Bootcut (Women's)
        </h4>
        <p>
          The women's bootcut follows the same proportions as the men's version — hip-hugging through the seat and thigh with a kick flare at the hem — adapted for women's fits and rises.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Levi's Vintage Clothing
        </h4>
        <p>
          Levi's Vintage Clothing (LVC) reproduces archived Levi's cuts using the original construction techniques, selvedge denim, and period-correct detailing. It is priced at a significant premium over the mainline and is aimed at collectors and denim enthusiasts.
        </p>
      </div>
    </div>
  </div>

  {/* Men's Category on Levi's India Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Men's Category on Levi's India
    </h3>
    <p className="mb-3">
      The Men's section on the Levi's India site covers:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Jeans</strong> — full fit range from the levis 501 to slim, taper, relaxed, and wide-leg cuts</li>
      <li><strong>Trousers and Chinos</strong> — non-denim trousers for a cleaner, more formal casual look</li>
      <li><strong>Shirts</strong> — western shirts, chambray, and denim shirts</li>
      <li><strong>T-Shirts and Polos</strong> — graphic tees, logo tees, and plain crew and V-neck options</li>
      <li><strong>Jackets</strong> — the Trucker jacket in multiple washes is the flagship; also covers bomber and sherpa styles</li>
      <li><strong>Sweatshirts and Hoodies</strong> — fleece and French terry in crew and zip-through styles</li>
      <li><strong>Shorts</strong> — denim cutoffs and chino shorts for summer</li>
    </ul>
  </div>

  {/* Women's Category on Levi's India Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Women's Category on Levi's India
    </h3>
    <p className="mb-3">
      The Women's section covers:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Jeans</strong> — Sculpt fits, high-rise straight, ribcage, wedgie, wide-leg, and skinny</li>
      <li><strong>women's levis Denim Skirt</strong> — midi and mini in seasonal washes</li>
      <li><strong>Tops and Tees</strong> — cropped, boxy, and standard-length graphic and logo tees</li>
      <li><strong>Shirts and Blouses</strong> — western shirts, denim shirts, and relaxed-fit button-downs</li>
      <li><strong>Jackets</strong> — cropped Trucker, oversized sherpa, and denim jacket styles</li>
      <li><strong>Dresses</strong> — denim mini and midi dresses, typically part of the Featured Collections rotation</li>
      <li><strong>Shorts</strong> — high-rise denim shorts and chino shorts</li>
    </ul>
  </div>

  {/* New Arrivals Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      New Arrivals
    </h3>
    <p>
      Levi's India refreshes its new arrivals section regularly, typically aligned with the two main fashion seasons (Spring-Summer and Autumn-Winter) plus capsule drops tied to collaborations or events. New Arrivals on the site are full-price and rarely carry a levi's coupon code at launch — discounts on new drops, when they occur, tend to come through the Red Tab membership programme first.
    </p>
  </div>

  {/* Featured Collections Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Featured Collections
    </h3>
    <p>
      The Featured Collections tab on Levi's India surfaces editorial capsule ranges — collaborations, seasonal themes, and limited runs. These are typically higher-priced and more fashion-forward than the core range. Levi's Vintage Clothing, Justin Timberlake collaborations, and White Tab sit here alongside seasonal drops.
    </p>
  </div>

  {/* Levi's Red Tab Member Programme Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Levi's Red Tab Member Programme
    </h3>
    <p className="mb-4">
      The Red Tab programme is Levi's India loyalty membership — and it is the most consistent way to access exclusive pricing, early sale access, and member-only levi's promo codes.
    </p>

    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          What Red Tab membership includes:
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Early access to levis sale events before the general public</li>
          <li>Member-exclusive discounts not available to non-members</li>
          <li>Birthday rewards during your birth month</li>
          <li>Exclusive access to new drops and featured collection previews</li>
          <li>Points accumulation on purchases that convert to future discounts</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          How to join:
        </h4>
        <p>
          Signing up is free. You create a Levi's India account and opt into the Red Tab programme during registration. Membership is digital — tracked through your account login rather than a physical card.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          Why it matters for savings:
        </h4>
        <p>
          Because Levi's India does not circulate a large volume of public levi's discount codes, the Red Tab programme is where the most reliable member-specific savings live. If you buy Levi's more than once a year, joining before your next purchase is worth doing — member-only pricing on sale items can be significantly lower than the standard sale price.
        </p>
      </div>
    </div>
  </div>
</div>,

            /* How to Use Block */
            <div key="how-to-use" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
                How to Use a Levi's Coupon Code
              </h3>
              <p className="text-slate-500 font-medium text-sm -mt-2 mb-6">
                When a levi's coupon code or levi's discount code is available — typically during sale events or through the Red Tab membership programme — applying it follows a straightforward process.
              </p>
              <div className="space-y-6">
                {[
                  "Browse the Levi's India website or app — navigate to the section you want: Sale, Men, Women, New Arrivals, or a Featured Collection.",
                  "Add items to your bag — select your size and preferred fit before adding.",
                  "Proceed to checkout — review the items in your bag and click through to the payment screen.",
                  "Find the promo code field — it appears at the checkout stage before payment is confirmed.",
                  "Enter the levi's coupon code — type it exactly as shown, without spaces unless specified.",
                  "Confirm the discount — the reduced total will display before you complete the purchase.",
                  "Pay and complete your order — choose your payment method and place the order."
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
                If a code does not apply, check whether it is restricted to a specific category, collection, or minimum cart value. Some levi's promo codes are valid only on full-price items and will not stack with existing sale discounts.
              </p>
            </div>,

            /* Levi's Sale Events Table */
            <div key="sale-events" className="my-10 space-y-6">
              <h3 className="text-xl font-black text-[#5B4FBE]">
                Levi's Sale Events – When to Buy
              </h3>
              <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-black uppercase text-slate-400 tracking-wider">Sale Period</th>
                      <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">What to Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {[
                      { period: "End of Season Sale (Jan–Feb)", expect: "Deep discounts on Autumn-Winter stock" },
                      { period: "Summer Sale (Jun–Jul)", expect: "Spring-Summer clearance across men's and women's" },
                      { period: "Levi's Black Friday (Nov)", expect: "Sitewide discount; one of the deepest annual sale events" },
                      { period: "Republic Day Sale (Jan)", expect: "Short-duration discounts, often app-exclusive" },
                      { period: "Diwali Season (Oct–Nov)", expect: "Festive promotions, especially on gifting-oriented products" },
                      { period: "New Year Sale (Jan)", expect: "Overlap with end-of-season, good timing for 501 and 511 restocks" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-4 font-black text-slate-900">{row.period}</td>
                        <td className="p-4 font-medium text-slate-600">{row.expect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 font-medium text-sm">
                Levi's black friday is historically the single biggest discount event for the brand. If you are planning a larger purchase — multiple pairs of jeans, a jacket, or a gifting order — timing it to coincide with Black Friday tends to produce the most significant saving.
              </p>
            </div>,

            /* How to Save More */
            <div key="how-to-save" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                How to Save More on Levi's India
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Join the Red Tab programme before your next purchase",
                    desc: "Membership is free and unlocks member pricing, early sale access, and birthday rewards. For anyone buying Levi's regularly, it is the single most effective way to access consistent savings."
                  },
                  {
                    title: "Use the Sale section directly",
                    desc: "The Sale tab on the Levi's India site is a curated feed of discounted stock. Browsing here first means you are always looking at the current discounted range rather than filtering full-price items manually."
                  },
                  {
                    title: "Check CouponsCrew before placing any order",
                    desc: "Active levi's coupon codes, promo codes, and cashback offers are updated on this page as they become available. Codes that do appear tend to be tied to specific sale events or payment method promotions, so checking here before checkout takes seconds and costs nothing."
                  },
                  {
                    title: "Consider core fits over seasonal items",
                    desc: "The levis 501, levis 511, levis 512, and levis 505 go on sale reliably at the end of each season. If you are flexible on wash and colourway, buying a core fit during a sale event rather than at launch saves meaningfully over time."
                  },
                  {
                    title: "Buy multiple items to meet minimum cart thresholds",
                    desc: "When a levi's promo code is active, it frequently carries a minimum cart value. Adding a secondary item — a tee or a belt — to meet the threshold is often worth it when the percentage saving on the overall cart is significant."
                  },
                  {
                    title: "Check stock at your nearest levi's exclusive store",
                    desc: "Some in-store promotions are not available online and vice versa. If you are near a levi's exclusive store, it is worth checking both channels before committing to a purchase — particularly during sale events where stock allocation differs between online and offline."
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

            /* Brand Comparison Table */
            <div key="brand-comparison" className="my-10 space-y-6">
              <h3 className="text-xl font-black text-[#5B4FBE]">
                Levi's India vs Other Denim Brands
              </h3>
              <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-black uppercase text-slate-400 tracking-wider">Feature</th>
                      <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Levi's India</th>
                      <th className="p-4 text-xs font-black uppercase text-slate-700 tracking-wider">Pepe Jeans</th>
                      <th className="p-4 text-xs font-black uppercase text-slate-700 tracking-wider">Wrangler</th>
                      <th className="p-4 text-xs font-black uppercase text-slate-700 tracking-wider">Diesel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {[
                      { f: "Core Fit Range", levis: "Extensive (501, 511, 512, 505+)", pepe: "Wide", wrangler: "Moderate", diesel: "Wide" },
                      { f: "Women's Range", levis: "Strong (Sculpt, Ribcage, Wide-leg)", pepe: "Strong", wrangler: "Moderate", diesel: "Strong" },
                      { f: "Vintage/Archive Line", levis: "Yes (LVC)", pepe: "No", wrangler: "Limited", diesel: "No" },
                      { f: "Loyalty Programme", levis: "Yes (Red Tab)", pepe: "No", wrangler: "No", diesel: "No" },
                      { f: "Price Point", levis: "Mid-to-premium", pepe: "Mid", wrangler: "Mid", diesel: "Premium" },
                      { f: "India Exclusive Stores", levis: "Yes", pepe: "Yes", wrangler: "Yes", diesel: "Limited" },
                      { f: "Sale Frequency", levis: "Seasonal + Black Friday", pepe: "Seasonal", wrangler: "Seasonal", diesel: "Occasional" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-4 font-black text-slate-900">{row.f}</td>
                        <td className="p-4 font-bold text-[#5B4FBE]">{row.levis}</td>
                        <td className="p-4 font-medium text-slate-600">{row.pepe}</td>
                        <td className="p-4 font-medium text-slate-600">{row.wrangler}</td>
                        <td className="p-4 font-medium text-slate-600">{row.diesel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>,

            /* Similar Brands Section */
            <div key="similar-brands" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Similar Brands to Explore
              </h3>
              {[
                { name: "Wrangler", desc: "another heritage American denim brand; strong on relaxed and western fits" },
                { name: "Pepe Jeans", desc: "wide range of cuts at a similar price point; strong in India retail" },
                { name: "Lee", desc: "sister brand to Wrangler; known for slim and straight fits" },
                { name: "Diesel", desc: "premium European denim with a more fashion-forward aesthetic" },
                { name: "Flying Machine", desc: "Indian denim brand at a lower price point; widely available" }
              ].map((item, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900">{item.name} — </strong>
                  {item.desc}
                </p>
              ))}
            </div>,

            /* Shop Smarter Summary */
            <div key="shop-smarter" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Shop Smarter at Levi's India
              </h3>
              <p>
                Levi's India is a brand where knowing the calendar matters as much as finding a code. The levis sale events, levi's black friday promotions, and Red Tab member savings are where the real discounts live — and CouponsCrew keeps this page updated with any active levi's coupon codes, levi's promo codes, and cashback offers as they become available.
              </p>
              <p>
                Whether you are looking for a classic levis 501, a slim levis 511, a pair of women's levis sculpt jeans, or a levi's vintage clothing piece, checking here before you buy means you are never leaving a saving on the table.
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
            Frequently Asked Questions About Levi's Coupon Codes
          </h3>
          {[
            {
              q: "Why are there limited levi's coupon codes available publicly?",
              a: "Levi's India operates as a premium denim brand and manages discounting through structured sale events and its Red Tab loyalty programme rather than circulating high volumes of public promo codes. This is a deliberate brand positioning choice — it keeps the perceived value of the product stable rather than training buyers to wait for a coupon before purchasing. The most consistent savings route for regular buyers is the Red Tab programme."
            },
            {
              q: "What is the difference between a levi's coupon code, a levi's promo code, and a levi's discount code?",
              a: "All three terms refer to the same type of promotional mechanism — a code entered at checkout that reduces the final price. On Levi's India, these are most often distributed during sale events, through the Red Tab membership, or via bank and payment method partnerships. The terms are interchangeable in how they are applied."
            },
            {
              q: "How does the Levi's Red Tab membership save me money?",
              a: "Red Tab members get early access to levis sale events — often a day or two before the general public — plus member-exclusive pricing that can be lower than the standard sale price. Birthday rewards add an additional annual saving. Over the course of a year, the cumulative benefit of member pricing on two or three purchases adds up meaningfully."
            },
            {
              q: "Is levi's black friday available in India?",
              a: "Yes. Levi's India runs a Black Friday promotion on its website and app. It is one of the deepest single discount events the brand runs annually in India. Red Tab members typically get early access before the sale opens to the general public. Check CouponsCrew closer to November for any active levi's black friday coupon codes."
            },
            {
              q: "What is the levis 501 and why is it significant?",
              a: "The levis 501 is the original Levi's jean, first produced in the late nineteenth century. It is a straight-leg, mid-to-high rise jean available in button-fly and zip-fly variants. It is significant because it is the template from which most modern jeans — across all brands — are derived. On Levi's India, it is the most extensively stocked style and the one most consistently available across washes and sizes."
            },
            {
              q: "What is levi's vintage clothing and is it available in India?",
              a: "Levi's Vintage Clothing (LVC) is a line that reproduces archived Levi's patterns using period-accurate construction techniques, selvedge Japanese denim, and original hardware. It is available through select levi's exclusive store locations and the Levi's India website. It is priced at a significant premium over mainline products and is aimed at denim collectors and enthusiasts rather than everyday buyers."
            },
            {
              q: "Does Levi's India offer deals on women's levis specifically?",
              a: "Yes. The Women's section on Levi's India runs its own sale events and features dedicated women's levis promotions — particularly around the Sculpt range, denim skirts, and the ribcage and high-rise straight fits. Red Tab membership applies equally to men's and women's purchases."
            },
            {
              q: "What is the Commuter collection?",
              a: "The Commuter collection is a functional denim range designed with cyclists and active urban commuters in mind. It incorporates stretch fabric, reinforced seams, and practical details like hidden pockets and reflective elements. It is part of the Featured Collections on the Levi's India site."
            },
            {
              q: "Can I use a levi's coupon code at a levi's exclusive store?",
              a: "Some promotional codes are valid both online and at physical levi's exclusive store locations; others are online-only. Check the terms of any active code before visiting a store. The levi's exclusive store staff can verify whether a particular code is accepted in-store."
            },
            {
              q: "What jeans does Levi's make for women besides skinny fits?",
              a: "Women's levis now covers a wide range of silhouettes beyond skinny — including high-rise straight, ribcage straight, wide-leg, wedgie fit, loose, bootcut, and the Sculpt range. The levis denim skirt is also part of the women's permanent range. The India site stocks most of these styles in multiple washes year-round, with seasonal colourways added for new arrivals."
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
            Popular Levi's Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Levis 501 Original",
              "Levis 511 Slim",
              "Levis Red Tab",
              "Black Friday Sale",
              "Women's Ribcage Denim",
              "Levis Trucker Jacket",
              "Levis Vintage Clothing",
              "End of Season Sale"
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
            Today's Top Levi's Deals
          </h3>
          <div className="space-y-5">
            {[
              { heading: "Red Tab Loyalty", sub: "Join free for early sale access & rewards" },
              { heading: "End of Season Sale", sub: "Save up to 50% on seasonal denim styles" },
              { heading: "Classic 501 Offers", sub: "Special pricing on core fit jeans" },
              { heading: "Women's Sculpt Fit", sub: "Discounts on high-rise & ribcage fits" },
              { heading: "App Exclusive Discount", sub: "Extra savings on first app purchases" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#5B4FBE] font-black text-lg italic shrink-0">
                  L
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
                  aria-label={`Get Levi's deal: ${deal.heading}`}
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
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#BB1E3C]">{activeModalCoupon.code}</span> at Levi's checkout for instant discounts.
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
                className="w-full bg-[#2C3E5C] hover:bg-[#243349] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Levi's</span>
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
