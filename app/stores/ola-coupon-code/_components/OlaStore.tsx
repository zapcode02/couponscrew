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
import { Coupon, OLA_COUPONS } from './olaCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://book.olacabs.com/';

export default function OlaStore() {
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

  const coupons: Coupon[] = OLA_COUPONS;

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
      q: 'How do I use an Ola coupon code?',
      a: 'To use an Ola coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field on the Ola app before confirming your ride. If it is a no-code deal, simply click "Get Deal" to be taken to Ola.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promo code can be applied per ride. Compare the available codes on this page and pick the one that gives you the best discount for your ride type before booking.'
    },
    {
      q: 'Why is my Ola coupon code not working?',
      a: 'A coupon might not work due to ride-type restrictions (e.g. some codes apply only to cabs, autos, or rentals), minimum fare requirements, expiry, or user eligibility restrictions such as new-user-only offers.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Ola coupon code listed on this page is checked before publishing, and we mark each one as verified along with the date it was last confirmed to be working.'
    },
    {
      q: 'How often are Ola coupons updated?',
      a: 'We review and update Ola coupon codes regularly. Expired or non-working codes are removed so you mostly see offers that are currently active.'
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
            <Link href="/" className="hover:text-[#95C93D] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#95C93D] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#95C93D] font-semibold">Ola Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/ola-logo_ljve5l.webp"
                      alt="Ola Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.2 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Ola</h1>
                    <span className="bg-[#F0FBE4] text-[#5C8A22] text-xs font-bold px-3 py-1 rounded-full border border-[#DCF2C0]">
                      Cab, Auto &amp; Rental Rides
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Find Ola coupon codes, promo codes and cab ride offers for Aug 2026. Save ₹50 on Mini and Prime rides, get ₹300 cashback on eligible Outstation trips, enjoy 20% OFF on selected bookings and claim a FREE first ride with eligible new-user offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5C8A22] bg-[#F0FBE4] px-2.5 py-1 rounded-full border border-[#DCF2C0]">
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
                  className="bg-[#000000] hover:bg-[#1a1a1a] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Ola</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#95C93D] to-[#6FA023] items-center justify-center"
            >
              <div className="text-white text-center px-8 relative z-10">
                <p className="text-2xl font-black tracking-tight">Ride Smarter, Save More</p>
                <p className="text-white/80 text-sm mt-2">Verified Ola coupon codes &amp; offers</p>
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
            <div className="w-11 h-11 bg-[#F0FBE4] text-[#5C8A22] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-gray-100 text-black rounded-2xl flex items-center justify-center shrink-0">
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
            <div className="w-11 h-11 bg-[#F0FBE4] text-[#5C8A22] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Ola Coupons &amp; Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Ola coupon codes &amp; offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#95C93D) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#95C93D] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#95C93D] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#95C93D]" />
                    <span>Valid on select ride types as mentioned in the offer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#95C93D]" />
                    <span>Minimum fare value might apply as specified in the description.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#95C93D]" />
                    <span>Covers select cities and ride categories.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-black/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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
                    : "bg-black hover:bg-[#1a1a1a] text-white"
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
                <Info size={16} className="text-[#95C93D]" />
                <span>About Ola — India's Largest Ride-Hailing Platform</span>
              </h3>
          
              <p className="text-[#1A1A2E] text-sm">
              Ola was founded in December 2010 by Bhavish Aggarwal and Ankit Bhati in Mumbai, originally as a cab aggregator connecting passengers with local taxi operators. Within a few years, Ola had become the dominant ride-hailing platform in India — outpacing international competitors including Uber in market share across most Indian cities.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              Today, Ola operates across 250+ Indian cities, making it the most geographically extensive cab service platform in the country. The platform offers a full spectrum of ride categories — from the affordable Ola Micro for budget daily commuters to Ola Prime Sedan and Ola Lux for premium travel, Ola Auto for short auto-rickshaw trips, and Ola Outstation for intercity and weekend travel.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              Ola's parent company, ANI Technologies, has also diversified into electric vehicles through Ola Electric — a separate but related entity that produces electric scooters and is building towards electric cabs. On the mobility platform side, Ola continues to expand its cab booking network, driver-partner base, and technology infrastructure across India and select international markets.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              For Indian consumers, Ola's combination of wide city coverage, multiple vehicle categories, consistent app experience, and regular Ola promo code campaigns makes it the default ride-hailing choice for a large share of daily travel needs.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#95C93D] hover:text-[#5C8A22] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Ola</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#95C93D] to-[#6FA023] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Ola Ride Savings</h3>
                <span className="inline-block bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Save on cabs, autos &amp; rentals with verified codes
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5C8A22] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Ola
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Cab Rides</span>
                  <span className="text-black font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Ola Auto</span>
                  <span className="text-black font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Ola Rentals</span>
                  <span className="text-black font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Outstation Rides</span>
                  <span className="text-black font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Ola Money</span>
                  <span className="text-black font-bold">Up to 15% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#95C93D] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Ola */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Book Ola Cab Services — Bike, Car &amp; Auto
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Booking an Ola ride is straightforward across all three primary service modes. Here&apos;s how to get started on each and where your Ola coupon code applies.
  </p>

  <div className="space-y-5">
    <div>
      <h4 className="font-bold text-[#2C2C40] text-xs mb-3 flex items-center gap-2">
        <span>Booking an Ola Car (Micro, Mini, Prime, Lux)</span>
      </h4>
      <ol className="space-y-2.5 text-xs font-semibold text-[#3A3A3A]">
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Open the Ola app — </span>
            <span>Download the Ola app on iOS or Android and log in or create a new account.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Set your pickup location — </span>
            <span>Allow location access or manually enter your pickup point.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Enter your destination — </span>
            <span>Type your drop-off address to see available Ola cab categories and Ola fare estimates.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Choose your ride category — </span>
            <span>Select from Micro, Mini, Prime Sedan, Prime SUV, or Lux depending on your budget and preference.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Apply your Ola coupon code — </span>
            <span>Before confirming, tap &quot;Apply Coupon&quot; and enter your Ola discount code from CouponsCrew.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Confirm the discount — </span>
            <span>The reduced Ola fare will update on the booking screen.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Confirm your ride — </span>
            <span>Tap &quot;Book&quot; and your driver will be assigned within minutes.</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">8</span>
          <div>
            <span className="font-bold text-[#2C2C40]">Pay on arrival — </span>
            <span>Via UPI, Ola Money wallet, credit/debit card, or cash.</span>
          </div>
        </li>
      </ol>
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
          Save on Every Ola Ride with a Verified Ola Coupon Code
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
          {OLA_COUPONS.map((coupon) => (
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
            Ola is one of India's most widely used ride-hailing platforms — and with the right Ola coupon code, every cab booking, auto ride, or outstation trip becomes noticeably more affordable. Whether you're booking a quick Ola micro for a daily commute, an Ola Prime Sedan for an airport transfer, or an Ola outstation trip for a weekend getaway, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates Ola discount codes, Ola promo codes, and Ola offer codes daily so you don't have to search before every ride. Every code on this page has been checked before going live — no expired deals, no failed codes at the booking screen.
          </p>

          <p>
            From new user Ola taxi booking offers to bank card cashback, wallet discounts, and category-specific Ola promo codes for outstation and auto rides, this page covers the full range of savings available on Ola today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Booking an Ola Auto & Bike Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Booking an Ola Auto (Rickshaw) & Ola Bike
    </h3>
    <div className="space-y-4 mb-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Booking an Ola Auto (Rickshaw)
        </h4>
        <p>
          Ola rickshaw bookings follow the same flow as car bookings — select "Auto" from the available ride categories after entering your destination. Ola auto (Ola rickshaw) is available in most major Indian cities and offers metered or app-based fare pricing. Ola fare for auto rides is typically lower than equivalent car categories, making Ola rickshaw one of the best value-for-distance options on the platform. Apply an Ola offer code in the coupon field before confirming to reduce the auto fare further.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Booking an Ola Bike
        </h4>
        <p>
          Ola Bike (where available) follows the same booking flow — select "Bike" from the category options. Ola Bike is the lowest-cost category on the platform, ideal for solo commuters on short-to-medium distances in traffic-heavy city zones. An Ola promo code applied to a bike booking delivers the highest percentage saving relative to the base fare.
        </p>
      </div>
    </div>

    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <p className="font-semibold text-[#2C2C40] mb-2">
        Tips for all Ola bookings:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Always check the Ola fare estimate before confirming — it accounts for current demand and distance.</li>
        <li>Apply your Ola coupon code before tapping "Book" — codes cannot be applied retroactively after the ride is confirmed.</li>
        <li>Some Ola discount codes are category-specific (auto only, Prime only) — check the terms on CouponsCrew before applying.</li>
      </ul>
    </div>
  </div>

  {/* Ola Outstation, Prime Sedan, Micro or Mini Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Ola Outstation, Prime Sedan, Micro or Mini — Cars for Every Need
    </h3>
    <p className="mb-4">
      Ola's vehicle category range covers the full spectrum of passenger needs — from the most budget-conscious commuter to the corporate traveller requiring a premium cab experience. Here's a breakdown of every major Ola cab category and who it's best suited for.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Micro — Lowest Fare for Daily Commutes
        </h4>
        <p>
          Ola Micro is the most affordable four-wheeler cab category on Ola. Vehicles in this category are typically hatchbacks (Maruti Alto, Tata Nano, similar) with a capacity of up to 4 passengers. Ola Micro fares are the lowest among car categories, making it the go-to choice for budget-conscious daily commuters on short-to-medium city routes. An Ola coupon code applied to a Micro booking is particularly effective — even small flat discounts represent a significant percentage off the low base fare.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Mini — Compact Comfort at a Moderate Price
        </h4>
        <p>
          Ola Mini sits one tier above Micro, featuring slightly larger and more comfortable vehicles (Maruti Swift, Hyundai i10 class) at a moderate fare increase over Micro. Mini is the most popular Ola cab category by ride volume in most Indian cities — balancing comfort and price for a wide range of trips.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Prime Sedan — Premium Cab for Comfort Travel
        </h4>
        <p>
          Ola Prime Sedan features sedans (Honda City, Maruti Ciaz, Toyota Etios) with professional drivers, air conditioning, and a higher interior comfort standard than Micro or Mini. Prime Sedan is the preferred Ola taxi booking category for airport trips, client meetings, or occasions requiring a more polished cab experience. Ola fare for Prime Sedan is higher than Micro and Mini, but an Ola discount code on Prime Sedan bookings delivers the highest absolute rupee saving given the larger base fare.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Prime SUV — Space for Groups and Luggage
        </h4>
        <p>
          Ola Prime SUV offers larger vehicles (Toyota Innova, Mahindra Xylo class) for groups of up to 6 passengers or travellers with significant luggage. Suitable for family outings, airport transfers with multiple bags, or small group travel within the city.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Lux — Top-Tier Premium Experience
        </h4>
        <p>
          Ola Lux is the highest-end cab category on Ola, featuring luxury sedans and SUVs (Toyota Camry, Mercedes-Benz E-Class, BMW 5 Series) with professional chauffeurs. Ola Lux is positioned for corporate accounts, premium airport transfers, and high-profile occasions where the vehicle itself is part of the experience.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Auto (Rickshaw) — Affordable Point-to-Point
        </h4>
        <p>
          Ola rickshaw connects users with auto-rickshaw drivers at app-based pricing — transparent, upfront, and without manual fare negotiation. Available across most major Indian cities, Ola auto is ideal for short-to-medium distance trips where a full cab is unnecessary. The combination of low Ola fare and a Ola offer code makes Ola auto one of the most cost-efficient urban transport options on the platform.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Outstation — Intercity Travel Made Simple
        </h4>
        <p className="mb-3">
          Ola Outstation is one of the platform's strongest differentiators from shorter-range competitors. The service covers intercity trips — one-way and round-trip — across India's major city pairs and hundreds of routes.
        </p>
        
        <p className="font-semibold text-[#2C2C40] mb-2">
          Key features of Ola Outstation:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>One-way trips to hundreds of intercity destinations</li>
          <li>Round-trip bookings with a single driver for the duration of the trip</li>
          <li>Multiple vehicle options — Sedan, SUV, and Prime categories available for outstation</li>
          <li>Transparent per-km pricing with toll, parking, and driver allowance clearly stated upfront</li>
          <li>Advance booking — schedule Ola outstation trips days in advance for better availability</li>
        </ul>
        <p>
          Popular Ola Outstation routes include Delhi to Agra, Mumbai to Pune, Bangalore to Mysore, Chennai to Pondicherry, Hyderabad to Tirupati, and hundreds more. An Ola coupon code or Ola discount code applied to an outstation booking delivers the highest absolute rupee saving on the platform — outstation fares are significantly larger than city rides, making the percentage discount more impactful.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Rentals — Hire by the Hour
        </h4>
        <p>
          Ola Rentals allows users to book a cab for a fixed number of hours and kilometres within the city — useful for a full day of errands, office travel across multiple meetings, or event-day transport where a single driver is needed throughout. Rental bookings are available in 1-hour to 8-hour packages.
        </p>
      </div>
    </div>
  </div>

  {/* Latest Ola Wallet and Card Offers Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Latest Ola Wallet and Card Offers — Paytm, FreeCharge, VISA & More
    </h3>
    <p className="mb-4">
      Payment method offers are one of the most consistent and reliable routes to saving on Ola cab bookings. Unlike Ola coupon codes that may be category-specific or limited in usage, payment partner offers apply broadly across most Ola rides with minimal conditions.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Paytm Wallet Offers
        </h4>
        <p>
          Paytm is one of Ola's longest-standing payment partners. Ola regularly runs Paytm cashback offers — a percentage of the ride fare credited back to the user's Paytm wallet after the trip. These offers are particularly active during festival periods and Paytm promotional campaigns. The cashback typically posts within 24–48 hours of the completed ride.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          FreeCharge
        </h4>
        <p>
          FreeCharge users booking Ola rides and paying through the FreeCharge wallet have historically received cashback offers on ride payments. Check the active FreeCharge app for current Ola-linked cashback offers before booking.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Ola Money Wallet
        </h4>
        <p>
          Ola Money is Ola's own in-app wallet — a prepaid balance that can be loaded and used for frictionless ride payment without entering card details at the end of each trip. Ola periodically runs Ola Money top-up bonuses where loading a certain amount into the wallet grants additional credit — effectively a discount on future rides.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          VISA Card Offers
        </h4>
        <p>
          VISA credit and debit card users regularly receive Ola-linked cashback or discount offers through their issuing bank. These VISA offers on Ola bookings are applied automatically at checkout when a qualifying VISA card is used for payment. Discount values typically range from 10%–20% of the ride fare with a per-transaction cap.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          HDFC Bank Offers
        </h4>
        <p>
          HDFC credit and debit cardholders are among the most frequently targeted for Ola discount code campaigns. HDFC Bank's SmartBuy and offer programmes periodically include Ola taxi booking discounts — check the HDFC NetBanking offer section or HDFC Bank app for current Ola offers.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Axis Bank, ICICI & Kotak Offers
        </h4>
        <p>
          Axis Bank, ICICI Bank, and Kotak Mahindra Bank credit cards also participate in Ola discount programmes. These bank offers apply as instant discounts or cashback at the payment step — no separate Ola coupon code required when the qualifying card is selected.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          SBI Card Offers
        </h4>
        <p>
          SBI Card users booking Ola rides during promotional periods receive cashback credited to the SBI Card statement. SBI Card Ola offers tend to be more prominent during festival seasons (Diwali, New Year) and during SBI Card campaign windows.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          UPI Cashback Offers
        </h4>
        <p>
          Google Pay, PhonePe, and BHIM UPI occasionally run cashback offers on Ola ride payments made through their respective UPI handles. These are applied as cashback to the UPI-linked bank account rather than the Ola wallet, and activate automatically when the qualifying UPI handle is used at checkout.
        </p>
      </div>
    </div>

    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
      <p>
        <strong className="text-[#2C2C40]">Pro tip: </strong>Stack an Ola coupon code with an eligible bank card or wallet offer where terms permit. When stacking is allowed, the combined saving on a Prime Sedan or Outstation booking can be substantial.
      </p>
    </div>
  </div>

  {/* Types of Ola Discount Codes & Offers Available Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Types of Ola Discount Codes & Offers Available
    </h3>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          New User Ola Promo Code
        </h4>
        <p>
          First-time Ola users can access the highest available discounts — typically flat ₹100–₹200 off the first ride or a percentage discount with a fare cap. New user Ola promo codes are one-time use only and apply to the first completed booking. Always apply your new user code before confirming your very first Ola taxi booking.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Flat Rupee Off Codes
        </h4>
        <p>
          Common Ola offer codes providing a fixed rupee discount (e.g. ₹50, ₹75, ₹100) on eligible ride bookings above a minimum fare. Available to both new and existing users depending on the code.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Percentage Discount Codes
        </h4>
        <p>
          Ola discount codes offering a percentage off the total Ola fare — typically 10%–20% — with a maximum discount cap and minimum fare requirement. Useful on longer rides where the percentage saving is higher in absolute value.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Category-Specific Codes
        </h4>
        <p>
          Certain Ola coupon codes apply only to specific categories — Ola Auto only, Ola Prime only, or Ola Outstation only. Check the code terms on CouponsCrew before applying to confirm it covers your chosen ride type.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Outstation-Specific Discount Codes
        </h4>
        <p>
          Ola outstation rides are higher-value bookings where a flat Ola discount code delivers the most rupee saving. Outstation-specific codes are among the most valuable on the platform — an ₹300–₹500 discount on a ₹2,000–₹5,000 outstation fare is a meaningful reduction.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Referral Codes
        </h4>
        <p>
          Ola's referral programme gives both the referring user and the new user ride credits when a new account is created via referral. Credits apply automatically on the next eligible booking.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Ola vs Uber vs Rapido — How They Compare</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Ola</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Uber</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Rapido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "City Coverage", ola: "250+ cities", uber: "100+ cities", rapido: "100+ cities" },
                    { feature: "Micro / Budget Cab", ola: "Yes", uber: "Yes", rapido: "No" },
                    { feature: "Prime / Premium Cab", ola: "Yes", uber: "Yes (Uber Premier)", rapido: "No" },
                    { feature: "Auto Booking", ola: "Yes — Ola rickshaw", uber: "Yes (select cities)", rapido: "Yes" },
                    { feature: "Bike Taxi", ola: "Limited", uber: "No", rapido: "Yes — core service" },
                    { feature: "Outstation", ola: "Yes", uber: "Yes", rapido: "Limited" },
                    { feature: "Rentals (Hourly)", ola: "Yes", uber: "Yes", rapido: "No" },
                    { feature: "Surge Pricing", ola: "Yes", uber: "Yes", rapido: "Minimal on bikes" },
                    { feature: "Loyalty / Wallet", ola: "Ola Money", uber: "Uber Cash", rapido: "No" },
                    { feature: "New User Offer", ola: "Ola promo code", uber: "Uber promo code", rapido: "Rapido first ride coupon" },
                    { feature: "Best For", ola: "All-round city + outstation", uber: "Premium & airport rides", rapido: "Bike commutes & Tier 2 cities" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.ola}</td>
                      <td className="p-4 font-bold text-gray-700">{row.uber}</td>
                      <td className="p-4 font-bold text-gray-700">{row.rapido}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Bottom line:</strong> For breadth of city coverage and ride category variety — including outstation — Ola is India's most comprehensive ride-hailing platform. For premium airport transfers, Uber competes closely. For short-distance bike commutes at the lowest fares, Rapido is the stronger choice. Many users keep all three apps installed and check for the best available Ola coupon code, Uber promo code, or Rapido discount code before each booking.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Ola Sale Calendar — Best Times to Use Your Ola Promo Code</h3>
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
                    { period: "New Year (Jan 1)", offer: "New-year Ola promo code campaigns" },
                    { period: "Republic Day (Jan 26)", offer: "Flat OFF on cab & auto rides" },
                    { period: "Holi (March)", offer: "Festive Ola discount code" },
                    { period: "IPL Season (Mar–May)", offer: "Match-day ride offers in home cities" },
                    { period: "Monsoon Season (Jun–Sep)", offer: "Surge management + Ola offer codes" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide Ola coupon code campaign" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Festive ride & outstation offers" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-value Ola discount code period" },
                    { period: "New Year's Eve (Dec 31)", offer: "Late-night ride & outstation codes" },
                    { period: "Weekends (Sat–Sun)", offer: "Regular app-exclusive weekend deals" }
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
              <strong className="text-[#5B4FBE]">Tip:</strong> Enable push notifications on the Ola app. Time-limited Ola promo codes and flash offers are frequently pushed via notification during peak periods — these disappear quickly.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Ola Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Apply an Ola coupon code before every ride — not after. Ola discount codes cannot be applied after a booking is confirmed. Always check CouponsCrew and enter your code in the coupon field before tapping \"Book.\"",
                "Use Ola outstation for the highest absolute savings. Outstation fares are the largest on the platform. A flat ₹300–₹500 Ola offer code on an outstation booking saves a meaningful percentage of the total fare.",
                "Match your ride category to your actual need. Don't default to Prime Sedan when Micro or Mini covers your trip adequately. The Ola fare difference between categories on a 10 km city ride is significant — save the premium category for trips where comfort genuinely matters.",
                "Load Ola Money during bonus campaigns. When Ola runs wallet top-up bonus offers, loading Ola Money gives you extra ride credit at no additional cost — effectively a pre-paid Ola coupon code for future rides.",
                "Book outstation trips in advance. Ola outstation availability and pricing are better when booked ahead rather than on the day. Advance booking also gives you more time to source a valid Ola discount code before departure.",
                "Use an eligible bank card for automatic cashback. HDFC, Axis, VISA, and SBI Card offers on Ola activate automatically with the right card — no separate Ola promo code needed. These stack with Ola coupon codes where permitted.",
                "Check CouponsCrew before every Ola taxi booking. All Ola discount codes here are verified before going live. A 30-second check regularly saves ₹50–₹500 per ride depending on the category."
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
              Similar Platforms to Explore Alongside Ola
            </h3>
            <p className="mb-4">
              If you're comparing ride-hailing and mobility options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Uber — </strong>
              Premium cab service with strong metro and airport coverage; check CouponsCrew for active Uber promo codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Rapido — </strong>
              India's largest bike taxi platform for short urban commutes at the lowest fares; active Rapido coupon codes on CouponsCrew
            </p>
            <p>
              <strong className="text-[#2C2C40]">Namma Yatri — </strong>
              Open-network auto and cab booking in Bengaluru and expanding cities with no platform commission model
            </p>
            <p>
              <strong className="text-[#2C2C40]">InDrive — </strong>
              Fare-negotiation cab platform available in select Indian cities
            </p>
            <p>
              <strong className="text-[#2C2C40]">BluSmart — </strong>
              All-electric cab service operating in Delhi NCR and Bengaluru
            </p>
            <p>
              <strong className="text-[#2C2C40]">Meru Cabs — </strong>
              Airport-focused cab service with fixed-fare outstation options
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major ride-hailing and mobility platforms. Visit individual store pages for verified, up-to-date discount codes before your next trip.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Ola Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every Ola coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired Ola offer codes and adding new ones so every listing is accurate and working.
            </p>
            <p>
              For daily commuters using Ola cab service multiple times a week, consistent use of a verified Ola discount code from CouponsCrew compounds into significant monthly savings — particularly on Prime Sedan and Outstation bookings where the base fare is highest.
            </p>
            <p>
              Bookmark this page and check it before every Ola taxi booking — Micro, Mini, Prime, Auto, or Outstation. A 30-second check on CouponsCrew regularly saves ₹50–₹500 per ride.
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
            Frequently Asked Questions About Ola Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply an Ola coupon code?",
              a: "Open the Ola app, enter your pickup and destination, choose your ride category, and look for the \"Apply Coupon\" field before confirming. Enter your Ola coupon code from CouponsCrew and tap Apply. The discounted Ola fare will update on your booking screen before you confirm."
            },
            {
              q: "Q2. Why is my Ola promo code not working?",
              a: "Common reasons include: the code has expired, the minimum fare requirement hasn't been met, the code is for a specific ride category (e.g. Outstation only), or the code is for new users only and your account is registered. Check the terms on CouponsCrew for the specific Ola discount code you're using."
            },
            {
              q: "Q3. Can I use an Ola coupon code for Ola Outstation bookings?",
              a: "Yes — outstation-specific Ola offer codes are available and typically deliver the highest rupee saving on the platform. Check CouponsCrew for active outstation Ola discount codes before booking any intercity trip."
            },
            {
              q: "Q4. What is Ola Rickshaw?",
              a: "Ola Rickshaw (also called Ola Auto) is Ola's auto-rickshaw service — app-based, transparent pricing, no fare negotiation required. Available across most major Indian cities, Ola rickshaw is one of the lowest-cost Ola cab service categories. Apply an Ola offer code before confirming to reduce the fare further."
            },
            {
              q: "Q5. How do I apply Paytm or wallet cashback on Ola?",
              a: "Select Paytm Wallet or your preferred wallet as the payment method at the Ola checkout. Any active Paytm–Ola cashback offer will be applied automatically. The cashback typically posts within 24–48 hours of the completed ride."
            },
            {
              q: "Q6. What is Ola Money and how does it work?",
              a: "Ola Money is Ola's in-app prepaid wallet. Load balance into Ola Money and use it to pay for rides without entering card details at trip end. Ola periodically runs top-up bonus campaigns where loading a certain amount adds extra credit — effectively a discount on future rides."
            },
            {
              q: "Q7. Is there an Ola coupon code for existing users?",
              a: "Yes. While the highest-value codes are typically for new users, Ola regularly distributes Ola promo codes for existing users through app notifications, bank card partnerships, wallet cashback programmes, and festive campaigns. CouponsCrew lists both new-user and all-user codes clearly."
            },
            {
              q: "Q8. How does Ola Outstation pricing work?",
              a: "Ola Outstation is priced on a per-kilometre basis with toll, parking, and driver allowance stated upfront at booking. One-way and round-trip options are available. The total Ola fare for outstation is shown before confirmation — no hidden charges added after the trip. An Ola discount code reduces this upfront quoted price."
            },
            {
              q: "Q9. Can I book Ola Rentals for a half-day?",
              a: "Yes. Ola Rentals are available in 1-hour, 2-hour, 4-hour, and 8-hour packages depending on your city. Each package includes a defined number of kilometres — additional kilometres are charged at a per-km rate. Check the Ola app for available rental packages in your city."
            },
            {
              q: "Q10. How do I contact Ola customer support?",
              a: "Ola customer support is available through the Help section in the Ola app. You can raise a trip issue, dispute a fare, or request a refund directly through the in-app support flow. Ola's support team can also be reached through the official Ola website help centre."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Ola Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Ola First Ride Code", "Ola Outstation Offers", "Ola Auto Coupon", "Ola Money Cashback", "Ola Rentals Discount", "Ola vs Uber", "Airport Cab Offers", "Daily Commute Deals"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Ola Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "First Ride Discount", sub: "Flat off for new users on Mini & Prime cab bookings" },
              { heading: "Outstation Special", sub: "Save up to ₹250 on intercity outstation cabs" },
              { heading: "Ola Auto Flat Off", sub: "Discounted auto-rickshaw rides in select cities" },
              { heading: "Ola Money Top-up Bonus", sub: "Extra cashback when loading your Ola Money wallet" },
              { heading: "Hourly Rental Savings", sub: "Up to ₹100 off on 2-hour+ rental packages" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">O</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Ola deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5C8A22]">{activeModalCoupon.code}</span> in the Ola app for instant discounts.
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
              <span>Make sure to apply the code before confirming your ride.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-black hover:bg-[#1a1a1a] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Ola</span>
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
