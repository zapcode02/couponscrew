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
import { Coupon, BLINKIT_COUPONS } from './blinkitCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://blinkit.com/';

export default function BlinkitStore() {
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

  const coupons: Coupon[] = BLINKIT_COUPONS;

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
      q: 'How do I use a Blinkit coupon code?',
      a: 'To use a Blinkit coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Blinkit app or website. If it is a deal, simply click "Visit Blinkit" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Blinkit coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Blinkit coupon code listed here is checked before publishing so you get a working offer rather than an expired one.'
    },
    {
      q: 'How often are Blinkit coupons updated?',
      a: 'Our team reviews and updates Blinkit coupons regularly. Expired promotions are filtered out so you only spend time on codes that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, Blinkit allows only one promotional code per order. You may still be able to combine a coupon code with an automatic sitewide offer, depending on what is active at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-sans antialiased text-[#4A4A46]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2  text-xs md:text-sm text-[#4A4A46] select-none mb-6">
            <Link href="/" className="hover:text-[#F8CB46] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#F8CB46] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#000000] font-semibold">Blinkit Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#EFEAD8] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#EFEAD8] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp"
                      alt="Blinkit Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#B8860B] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.4 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight">Blinkit</h1>
                    <span className="bg-[#FFF6DC] text-[#8A6D00] text-xs font-bold px-3 py-1 rounded-full border border-[#F8CB46]/40">
                      Instant Grocery Delivery
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A46]">
                    Discover verified Blinkit coupon codes and promo codes to save on groceries and daily essentials. Enjoy up to 80% OFF, up to ₹125 Paytm cashback, exclusive bank offers, free delivery, first-order discounts, and great savings on fresh produce, baby care, pet care, snacks, and more.  
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A46]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#8A6D00] bg-[#FFF6DC] px-2.5 py-1 rounded-full border border-[#F8CB46]/40">
                      <Tag size={14} /> 9+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#EFEAD8] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#F8CB46] hover:bg-[#E8B93A] text-black font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Blinkit</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D8D0AE] text-[#1A1A1A] hover:bg-gray-50'
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#F8CB46] to-[#F3B517] items-center justify-center"
            >
              <div className="text-center px-8">
                <p className="text-black font-black text-2xl tracking-tight">Groceries in Minutes</p>
                <p className="text-black/70 font-semibold text-sm mt-2">Use verified Blinkit coupon codes on every order</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP ACCENT BAR — desktop only
          ========================================== */}
      <section className="hidden lg:block bg-white border-b border-[#EFEAD8] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#EFEAD8]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF6DC] text-[#8A6D00] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#EFEAD8]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0F0F0] text-black rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Up to 50%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#EFEAD8]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">₹1,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF6DC] text-[#8A6D00] rounded-2xl flex items-center justify-center shrink-0">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EFEAD8] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight">Blinkit Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Blinkit coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#F8CB46) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#F8CB46] flex flex-col items-center justify-center py-6 px-2 text-black relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                {/* Soft Tint Badge using Accent (#000000) */}
                <span className="bg-black/10 text-black text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#8A6D00] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8CB46]" />
                    <span>Valid on select grocery & daily essentials categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8CB46]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#F8CB46]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-black/30 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#000000) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-black hover:bg-[#222222] text-white"
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
            <div className="bg-white border border-[#EFEAD8] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#EFEAD8] pb-3 select-none">
                <Info size={16} className="text-[#8A6D00]" />
                <span>What Is Blinkit? A Quick Background</span>
              </h3>
              <p className="text-[#1A1A1A] text-sm mb-3">
               Blinkit — previously known as Grofers — made its name as one of India's earliest online grocery delivery services. After rebranding, the platform shifted its entire focus toward speed, promising delivery in minutes rather than hours or days. That pivot changed how a large segment of Indian shoppers thinks about daily errands.
              </p>

              <p className="text-[#1A1A1A] text-sm mb-3">
               Today, Blinkit operates across major Indian cities, covering everything from fresh produce and packaged food to electronics accessories and baby care. The app is built around convenience, and the pricing on the platform is generally competitive with offline retail — especially once you factor in blinkit first order offers and the regular promotional codes that come with bank tie-ups and wallet integrations.
              </p>

              <p className="text-[#1A1A1A] text-sm mb-3">
               The platform is part of the Zomato group, which has given it the kind of operational scale and funding to expand aggressively. If you have not used it before, the blinkit first order coupon is usually where new users see the biggest savings.
              </p>

              
              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D8D0AE] hover:border-[#8A6D00] hover:text-[#8A6D00] text-[#1A1A1A] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Blinkit</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#F8CB46] to-[#F3B517] rounded-3xl p-6 text-black relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/10 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Blinkit Seasonal Savings</h3>
                <span className="inline-block bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-black/70 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Groceries, Essentials & More
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-black hover:bg-[#222222] text-white py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            {/* Sidebar Card 4: Why Shop at Blinkit */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    What You Can Buy on Blinkit
  </h3>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Groceries and Staples</span>
        <span>This is the core of what Blinkit does. Rice, lentils, flour, edible oil, spices, packaged snacks — if it belongs in a pantry, it is almost certainly available. The range covers branded products as well as budget-friendly alternatives, and the platform often runs blinkit grocery discount codes that bring down the per-unit cost significantly.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Munchies</span>
        <span>Blinkit stocks a wide selection of chips, popcorn, biscuits, and snack mixes. These are popular for quick restocking between grocery runs and often come with platform-level discounts rather than requiring a blinkit discount code.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Baby Care</span>
        <span>Parents will find a comprehensive range of baby care products — diapers, baby wipes, feeding bottles, gentle skincare, and more. Stock from brands like Pampers and Mamy Poko is consistently available, and dedicated category deals come around regularly.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Pet Care</span>
        <span>From dry kibble to wet food, grooming products, and accessories, Blinkit has built out a solid pet care section. It covers both dogs and cats at a minimum, with some products available for other pets as well.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Home and Kitchen</span>
        <span>Cleaning supplies, storage containers, cookware accessories, and small appliances fall under this umbrella. The home and kitchen category is where the AMAZONPAY15 code currently applies, making it a good time to stock up if you have been putting off a purchase.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Stationery</span>
        <span>Notebooks, pens, markers, and basic craft supplies are available — useful for students and home office setups. Not the largest section on the platform, but reliably stocked with common essentials.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Sweet Treats</span>
        <span>Ice creams, mithai, chocolates, and packaged desserts are easy to find, and restocking is quick given Blinkit&apos;s delivery speed. No particular minimum order is usually needed for these categories.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Healthy Drinks</span>
        <span>Green tea, herbal teas, health drinks, and nutritional milk blends are stocked across brands. This section caters to both fitness-conscious shoppers and those looking for everyday alternatives to sugary beverages.</span>
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
          Blinkit Coupon Code – Save More on Every Order
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Blinkit has become one of the most-used quick-commerce apps in India, and for good reason — the range of products available, from daily groceries to household supplies to personal care, is hard to beat. But what makes it even more worthwhile is how much you can save when you shop with the right blinkit coupon code at checkout.
          </p>

          <p>
            This page is updated regularly with working blinkit discount codes, blinkit promo codes, and blinkit offer codes — all verified and ready to use. Whether you are placing your first order or you shop on Blinkit every week, there is a deal here for you.
          </p>

          <div className="space-y-8 text-slate-700">
  {/* Today's Active Blinkit Deals Section */}
  <div>
    <h2 className="text-2xl font-black text-[#5B4FBE] mb-2">
      Today's Active Blinkit Deals
    </h2>
    <p className="text-sm text-slate-500 mb-6">
      Real-time verified promo codes and discount offers for immediate savings.
    </p>

    <div className="space-y-6">
      
      {/* Deal Card 1 */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#2C2C40]">
            Get up to 80% off + extra Rs 200 cashback on groceries
          </h3>
          <div className="bg-[#5B4FBE]/10 border border-[#5B4FBE]/30 text-[#5B4FBE] font-mono font-bold px-3 py-1 rounded text-sm tracking-wide">
            PAYTMUPI
          </div>
        </div>
        
        <p className="text-xs font-semibold text-emerald-600 mb-3 flex items-center gap-1">
          <span>✓</span> Verified 3 Minutes Ago
        </p>

        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Save up to 80% and an extra Rs 200 cashback on using the code</li>
          <li>Applicable on groceries, rice, edible oils, ghee, and dry fruits</li>
          <li>Minimum order value: Rs 199</li>
          <li>Valid till the end of August 2026</li>
        </ul>
      </div>

      {/* Deal Card 2 */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#2C2C40]">
            Save up to 80% + extra Rs 15 cashback on home & kitchen appliances
          </h3>
          <div className="bg-[#5B4FBE]/10 border border-[#5B4FBE]/30 text-[#5B4FBE] font-mono font-bold px-3 py-1 rounded text-sm tracking-wide">
            AMAZONPAY15
          </div>
        </div>

        <p className="text-xs font-semibold text-emerald-600 mb-3 flex items-center gap-1">
          <span>✓</span> Verified 8 Minutes Ago
        </p>

        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Get a maximum discount of up to 80% plus an additional Rs 15 cashback</li>
          <li>Applicable on storage & containers, dining & serving, cleaning equipment, and more</li>
          <li>Valid till the end of August 2026</li>
        </ul>
      </div>

      {/* Deal Card 3 */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#2C2C40]">
            Get a flat Rs 20 discount on UPI payments via MobiKwik Wallet
          </h3>
          <div className="bg-[#5B4FBE]/10 border border-[#5B4FBE]/30 text-[#5B4FBE] font-mono font-bold px-3 py-1 rounded text-sm tracking-wide">
            MBKUPI
          </div>
        </div>

        <p className="text-xs font-semibold text-emerald-600 mb-3 flex items-center gap-1">
          <span>✓</span> Verified 11 Minutes Ago
        </p>

        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Minimum cart requirement: Rs 249</li>
          <li>Valid for both new and old users, up to twice per session</li>
          <li>Valid till the end of August 2026</li>
        </ul>
      </div>

      {/* Deal Card 4 */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#2C2C40]">
            Enjoy up to 65% discount on baby care essentials
          </h3>
          <div className="bg-slate-100 text-slate-600 font-medium px-3 py-1 rounded text-sm">
            No coupon code required
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-3">
          <li>No minimum cart value needed</li>
          <li>Save up to 65% on baby care essentials from the Blinkit app</li>
          <li>Applicable on Pampers, Mamy Poko value packs, and similar products</li>
        </ul>
      </div>

    </div>
  </div>

  {/* Types of Blinkit Discount Codes Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Types of Blinkit Discount Codes
    </h3>
    <p className="mb-4">
      Blinkit runs a variety of promotions throughout the year. Here is a breakdown of what you will typically find:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Blinkit First Order Coupon Code
        </h4>
        <p>
          New users usually get a special introductory discount on their first delivery. This is where the savings tend to be the highest — sometimes a flat discount, sometimes a percentage off the total cart.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Bank and Wallet Offers
        </h4>
        <p>
          Blinkit regularly partners with payment providers — UPI apps, digital wallets, and certain bank cards — to offer extra cashback or instant discounts at checkout. These are some of the most consistent savings available and do not require any blinkit voucher code per se — just the right payment method.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Category-Specific Deals
        </h4>
        <p>
          Flash deals on groceries, personal care, baby products, pet supplies, and kitchen essentials appear frequently. These are usually time-limited and may not require a code at all.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          App-Exclusive Offers
        </h4>
        <p>
          Certain blinkit offer codes are only accessible through the mobile app. If you primarily shop through a browser, switching to the app can unlock additional savings that are not displayed on the web version.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* How to Use a Blinkit Coupon Code */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How to Use a Blinkit Coupon Code</h3>
            <p className="text-gray-600 font-medium text-sm -mt-2 mb-6">
              Using a blinkit voucher is straightforward whether you are on the app or the website.
            </p>
            <div className="space-y-6">
              {[
                "Add items to your cart — browse by category or search directly for what you need.",
                "Head to checkout — tap the cart icon and review your order.",
                "Find the promo code field — it appears just before the payment screen. Tap \"Apply Coupon\" or \"Enter Code.\"",
                "Type in the blinkit promo code — enter it exactly as shown, without any extra spaces.",
                "Confirm the discount — the deducted amount will show on screen before you pay.",
                "Complete your order — choose your payment method and place the order."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-6">
              <strong className="text-[#5B4FBE]">Tip:</strong> If a code does not work, check the minimum cart value and eligibility conditions. Some blinkit offer codes are tied to specific payment methods like UPI or particular bank cards.
            </p>
          </div>

          {/* Benefits of Using Blinkit */}
          <div className="space-y-4 text-slate-700 my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Benefits of Using Blinkit for Online Grocery Shopping
            </h3>
            
            <p>
              <strong className="text-[#2C2C40]">Speed as a genuine differentiator — </strong>
              Blinkit was built around fast delivery, and that remains its core advantage. For last-minute needs — something forgotten before cooking, a restock mid-week — the platform eliminates the need to go to a physical store.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Wide product coverage — </strong>
              Beyond basic groceries, the catalogue spans personal care, baby essentials, household supplies, and electronics accessories. This means fewer platforms to manage and a single cart for multiple categories.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Frequent promotional activity — </strong>
              The platform runs consistent deal cycles — blinkit offer codes, bank cashback deals, and category discounts — meaning there is almost always something active. Checking CouponsCrew before placing an order takes under a minute and can result in meaningful savings.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Easy-to-use app experience — </strong>
              Both the iOS and Android apps are well-optimised. Adding a blinkit promo code or blinkit voucher at checkout takes a few seconds, and the discount confirmation is shown clearly before you pay.
            </p>
            <p>
              <strong className="text-[#2C2C40]">Trusted payment integrations — </strong>
              UPI apps, popular digital wallets, and major bank debit and credit cards are all accepted. Many of these payment methods come with their own exclusive savings on top of any active blinkit coupon code.
            </p>
          </div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Blinkit vs Other Quick Commerce Platforms</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Blinkit</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Zepto</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Swiggy Instamart</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">BigBasket Now</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Delivery Speed", blinkit: "Fast", zepto: "Fast", instamart: "Fast", bbNow: "Moderate" },
                    { feature: "Product Range", blinkit: "Very Wide", zepto: "Wide", instamart: "Wide", bbNow: "Very Wide" },
                    { feature: "First Order Offer", blinkit: "Yes", zepto: "Yes", instamart: "Yes", bbNow: "Yes" },
                    { feature: "Bank/UPI Deals", blinkit: "Frequent", zepto: "Frequent", instamart: "Moderate", bbNow: "Moderate" },
                    { feature: "App Availability", blinkit: "iOS & Android", zepto: "iOS & Android", instamart: "iOS & Android", bbNow: "iOS & Android" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.blinkit}</td>
                      <td className="p-4 font-bold text-gray-700">{row.zepto}</td>
                      <td className="p-4 font-bold text-gray-700">{row.instamart}</td>
                      <td className="p-4 font-bold text-gray-700">{row.bbNow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              Blinkit and Zepto tend to be the closest competitors in urban markets, with both focused on speed. BigBasket Now has a larger overall catalogue, but Blinkit edges ahead on promotional frequency and payment-linked discounts.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Blinkit Sale Calendar – Key Shopping Periods</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Period</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { period: "Diwali Season", expect: "Sitewide discounts, gift hamper deals, bonus cashback" },
                    { period: "Independence Day", expect: "Short-duration flash sales across categories" },
                    { period: "Republic Day", expect: "New-year clearance deals on personal care and kitchen" },
                    { period: "Holi", expect: "Festival-specific product bundles and category offers" },
                    { period: "End of Month", expect: "Wallet and UPI cashback deals typically peak" },
                    { period: "New Year", expect: "First-of-month introductory codes for new users" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.period}</td>
                      <td className="p-4 font-bold text-gray-700">{row.expect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How to Save More on Blinkit – Practical Tips</h3>
            <div className="space-y-6">
              {[
                "Always check before placing an order. New blinkit offer codes and blinkit vouchers are added regularly on CouponsCrew. A thirty-second check before tapping \"Pay\" can save you meaningfully on an otherwise standard cart.",
                "Watch your cart value against the minimum threshold. Several blinkit discount codes have a minimum cart requirement. Adding one or two extra items to cross the threshold often makes sense when the discount on offer is worth it.",
                "Use the right payment method. If a code is tied to a specific bank card or UPI app, use that method. Trying to apply it with a different payment method will not work, and you will miss the saving.",
                "Separate your orders by category when deals apply. If a deal covers only one category — say, baby care or home appliances — it can be worth placing a focused order for that category to maximise the percentage savings before adding unrelated items.",
                "Try app-exclusive codes on the mobile app. If you have only been using the Blinkit website, download the app. Some blinkit first order coupon codes and cashback deals are unlocked only via the app.",
                "Combine bank offers with promo codes. In some cases, a blinkit promo code can be stacked with a bank-level cashback offer applied at the payment stage. Always check whether the two are combinable before finalising."
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
              Similar Platforms to Explore
            </h3>
            <p className="mb-4">
              If you shop on Blinkit, you might also find deals worth checking on these platforms:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zepto — </strong>
              fast delivery competitor with frequent first-order codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy Instamart — </strong>
              bundled with Swiggy food delivery, strong on beverages and snacks
            </p>
            <p>
              <strong className="text-[#2C2C40]">BigBasket — </strong>
              broader range with scheduled delivery options alongside quick-commerce slots
            </p>
            <p>
              <strong className="text-[#2C2C40]">JioMart — </strong>
              strong on FMCG staples and frequent wallet cashback deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon Fresh — </strong>
              solid for branded packaged goods with Prime-linked savings
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Save More Every Time You Order on Blinkit
            </h3>
            <p>
              Blinkit makes daily errands faster, but the savings are what keep regular shoppers coming back. With the right blinkit coupon code, blinkit promo code, or blinkit voucher applied at checkout, what you spend on everyday essentials goes down — without having to change your shopping habits.
            </p>
            <p>
              CouponsCrew keeps this page updated with the latest working blinkit discount codes. Before you place your next order, take a moment to check — there is almost always something active.
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
            Frequently Asked Questions About Blinkit Coupon Codes
          </h3>
          {[
            {
              q: "Q1. What is a blinkit coupon code and how does it work?",
              a: "A blinkit coupon code is an alphanumeric string you enter at the checkout stage of the app or website to unlock a discount. Once applied, the platform deducts the eligible amount automatically — either as a percentage off, a flat rupee discount, or cashback credited to your account. Not all codes work for every cart; eligibility depends on the minimum order value, the product categories in your cart, and sometimes your user status (new vs. returning)."
            },
            {
              q: "Q2. Is there a blinkit first order coupon code available for new users?",
              a: "Yes, Blinkit regularly offers introductory discounts for first-time users. These blinkit first order offers are among the largest discounts available on the platform and typically appear on the app's homepage or are shared through partner platforms like CouponsCrew. The exact discount changes over time, so it is worth checking the latest deal before placing your first order."
            },
            {
              q: "Q3. What is the difference between a blinkit discount code, a blinkit promo code, and a blinkit voucher?",
              a: "These terms are essentially interchangeable — they all refer to a code or mechanism you use at checkout to get a price reduction. \"Discount code\" usually implies a direct price cut, \"promo code\" is broader and can cover cashback or offer-specific deals, and \"voucher\" sometimes refers to pre-loaded credit. On Blinkit, all three follow the same redemption flow: enter at checkout and confirm before paying."
            },
            {
              q: "Q4. Why is my blinkit coupon code not working?",
              a: "The most common reasons are: the cart has not met the minimum order value, the code has expired, the code is for a specific payment method you are not using, or the code applies only to certain product categories not in your current cart. Read the terms attached to each code carefully before applying."
            },
            {
              q: "Q5. Can I use multiple blinkit offer codes on one order?",
              a: "Generally, only one promo code can be applied per order. However, in some cases a promo code can be combined with a bank-level cashback offer applied at the payment stage — the two operate at different layers of the checkout. This depends on the specific deal terms, so always verify."
            },
            {
              q: "Q6. Does the blinkit Grofers coupon code history still work?",
              a: "After the rebrand from Grofers to Blinkit, older Grofers codes were phased out. All active codes are now under the Blinkit name. If you have a blink it grofers coupon code from an older promotion, it is unlikely to still be valid — check the current list on CouponsCrew for working alternatives."
            },
            {
              q: "Q7. Are blinkit coupon codes available without a minimum order value?",
              a: "Some deals — particularly category-specific offers like the baby care discount — have no minimum cart requirement. These are typically percentage-based savings on specific products rather than blanket order discounts. Codes tied to cashback or bank offers, however, almost always carry a minimum threshold."
            },
            {
              q: "Q8. How often does Blinkit update its promotional codes?",
              a: "Blinkit runs a continuous cycle of promotions, with new bank and wallet deals typically updated monthly and flash category deals appearing more frequently. The blinkit offer codes on CouponsCrew are checked and updated regularly to ensure you always see working codes."
            },
            {
              q: "Q9. Is it safe to use coupon codes from third-party sites like CouponsCrew?",
              a: "Yes. CouponsCrew lists only publicly available promotional codes shared by brands or their official partners. Using a blinkit promo code from this page works the same way as entering it anywhere else — the platform validates it on its end, and no account information is shared with third parties."
            },
            {
              q: "Q10. Does Blinkit offer separate deals for specific cities?",
              a: "Yes. Some blinkit offer codes are geo-targeted and apply only in specific cities, particularly for hyperlocal delivery promotions. If a deal appears on the app or CouponsCrew but is not working at checkout, it may be city-restricted. Metro cities like Delhi, Mumbai, Bengaluru, Hyderabad, and Pune tend to have the widest range of available codes."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Blinkit Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Blinkit First Order Code", "Blinkit Promo Code", "10 Min Grocery Deals", "Blinkit vs Zepto", "Daily Essentials Discount", "Blinkit Bank Offers", "UPI Cashback Deals", "Blinkit Grocery Offers"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Blinkit Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "First Order Special", sub: "Flat discount for new user orders via app" },
              { heading: "Bank Card Cashback", sub: "Instant savings on major credit & debit cards" },
              { heading: "UPI & Wallet Deals", sub: "Extra cashback on Paytm & PhonePe payments" },
              { heading: "Grocery Staples Sale", sub: "Up to 40% off on daily essentials & kitchen" },
              { heading: "Personal Care Offers", sub: "Special promotional discounts on skincare & hygiene" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Blinkit deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
          <div className="bg-white rounded-3xl border border-[#EFEAD8] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A1A]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#8A6D00]">{activeModalCoupon.code}</span> at Blinkit checkout for instant discounts.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#FFFDF5] border border-[#EFEAD8] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
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
                className="w-full bg-black hover:bg-[#222222] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Blinkit</span>
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
