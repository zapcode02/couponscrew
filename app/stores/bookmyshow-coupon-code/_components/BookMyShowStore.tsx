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
import { Coupon, BOOKMYSHOW_COUPONS } from './bookmyshowCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://in.bookmyshow.com/';

export default function BookMyShowStore() {
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

  const coupons: Coupon[] = BOOKMYSHOW_COUPONS;

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
      q: 'How do I use a BookMyShow coupon code?',
      a: 'To use a BookMyShow coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the BookMyShow website or app. If it is a deal, simply click "Visit BookMyShow" to get the discount auto-applied.'
    },
    {
      q: 'Why is my BookMyShow coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes apply only to movies or events), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only).'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every BookMyShow coupon code listed on this page is checked before being published, and we periodically re-verify codes to keep the list current.'
    },
    {
      q: 'How often are BookMyShow coupons updated?',
      a: 'Our deals team reviews and updates BookMyShow coupons regularly. Expired promotions are removed so you only see offers that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, BookMyShow allows only one promo code per booking. Always check the terms listed with each code before applying it at checkout.'
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
            <Link href="/" className="hover:text-[#C4242B] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#C4242B] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#C4242B] font-semibold">BookMyShow Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/book-myshow_idezgt.webp"
                      alt="BookMyShow Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">BookMyShow</h1>
                    <span className="bg-[#FCEBEC] text-[#C4242B] text-xs font-bold px-3 py-1 rounded-full border border-[#F6D2D4]">
                      Movies, Events & Live Entertainment
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Find BookMyShow coupon codes, promo codes and movie ticket deals for Aug 2026. Get Buy 1 Get 1 Free on selected movie tickets, save up to ₹500 with BookMyShow Rewards, enjoy ₹75 OFF on eligible bookings and 50% OFF online movies.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#C4242B] bg-[#FCEBEC] px-2.5 py-1 rounded-full border border-[#F6D2D4]">
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
                  className="bg-[#1E1B2E] hover:bg-[#131120] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit BookMyShow</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#C4242B] to-[#1E1B2E] items-center justify-center p-8"
            >
              <div className="text-center text-white space-y-3 relative z-10">
                <h3 className="text-2xl font-black tracking-tight">BookMyShow Offers</h3>
                <p className="text-sm text-white/80 font-semibold">Movies • Events • Sports • Concerts</p>
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
            <div className="w-11 h-11 bg-[#FCEBEC] text-[#C4242B] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EFEEF7] text-[#1E1B2E] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 25%</div>
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
            <div className="w-11 h-11 bg-[#FCEBEC] text-[#C4242B] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">BookMyShow Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified BookMyShow coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#C4242B) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#C4242B] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "OFF"}
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
                {/* Soft Tint Badge using Accent (#1E1B2E) */}
                <span className="bg-[#1E1B2E]/10 text-[#1E1B2E] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#C4242B] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4242B]" />
                    <span>Valid on select movies, events & experiences.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4242B]" />
                    <span>Minimum booking value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4242B]" />
                    <span>Covers selected cities and venues.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#1E1B2E]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#1E1B2E) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#1E1B2E] hover:bg-[#131120] text-white"
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
                <Info size={16} className="text-[#C4242B]" />
                <span>About BookMyShow — India's Entertainment Destination</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
              BookMyShow was founded in 1999 by Ashish Hemrajani, Parikshit Dar, and Rajesh Balpande — originally as an offline ticketing service called Big Tree Entertainment. The company pivoted to online ticketing in 2007 and rebranded as BookMyShow, becoming the dominant player in India's entertainment ticketing market just as multiplex culture was taking hold across Indian cities.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
Today, BookMyShow is far more than a place to book my movie tickets. The platform is India's most comprehensive entertainment commerce destination — covering films, cricket, live music, theatre, comedy, sporting events, amusement parks, and experiences. With operations across India and international markets including UAE and Indonesia, BookMyShow processes millions of tickets annually.  
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              BookMyShow's technology infrastructure underpins ticketing for some of India's most high-stakes events — from IPL season to Coldplay concerts, from blockbuster Bollywood releases like Pathaan and Jawan to South Indian mega-releases. When Kantara hit theatres, BookMyShow was where millions of fans booked their seats. When Avatar: The Way of Water released in India, the platform handled the surge in IMAX and 3D bookings at scale.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              The platform's deep integration with India's multiplex chains — PVR INOX, Cinepolis, Miraj, Movietime — and its exclusive ticketing partnerships for premium events make BookMyShow the first destination for entertainment spending in India. A verified BookMyShow coupon code from CouponsCrew makes that spending go further every time.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#C4242B] hover:text-[#C4242B] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit BookMyShow</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#C4242B] to-[#1E1B2E] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">BookMyShow Seasonal Offers</h3>
                <span className="inline-block bg-[#1E1B2E] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Save on movies, events, plays & concerts this season
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#C4242B] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Use a BookMyShow Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Applying a BookMyShow discount code or BookMyShow promo code takes under a minute. Here&apos;s how:
  </p>

  <div className="space-y-5">
    <ol className="space-y-2.5 text-xs font-semibold text-[#3A3A3A]">
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Open BookMyShow — </span>
          <span>Visit bookmyshow.com or open the BookMyShow app on iOS or Android.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Select your event — </span>
          <span>Search for a movie, cricket match, concert, or experience you want to book.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Choose your seats or passes — </span>
          <span>Select your preferred seats (for movies) or ticket category (for events).</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Proceed to checkout — </span>
          <span>Review your booking summary and tap &quot;Proceed to Pay.&quot;</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Apply your BookMyShow coupon code — </span>
          <span>Look for the &quot;Apply Coupon&quot; or &quot;Have a promo code?&quot; field. Enter your BookMyShow promotion code from CouponsCrew and tap Apply.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Confirm the discount — </span>
          <span>The reduced price will update in your booking summary. Check that the discount has applied correctly before payment.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Choose your payment method — </span>
          <span>Credit/debit card, UPI, net banking, or BookMyShow wallet. Eligible bank cards may apply additional cashback automatically.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#FFF0F0] text-[#E4002B] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">8</span>
        <div>
          <span className="font-bold text-[#2C2C40]">Complete your booking — </span>
          <span>Confirm and receive your e-ticket via email and the BookMyShow app.</span>
        </div>
      </li>
    </ol>

    {/* Tip Box */}
    <div className="bg-[#FFF8F8] border border-[#FCDCDC] rounded-2xl p-3.5 flex items-start gap-2.5">
      <div className="text-xs text-[#3A3A3A]">
        <span className="font-bold text-[#2C2C40]">Tip: </span>
        <span>Some BookMyShow coupon codes are app-exclusive. If a code isn&apos;t working on the website, try completing your booking through the BookMyShow app instead.</span>
      </div>
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
          Save on Every BookMyShow Booking with a Verified Coupon Code
        </h2>

        <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">BookMyShow Coupon Offers and Deals</caption>
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
          {BOOKMYSHOW_COUPONS.map((coupon) => (
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
            BookMyShow is India's largest entertainment ticketing platform — and with the right BookMyShow coupon code, every movie ticket, IPL seat, concert booking, or event pass becomes significantly more affordable. Whether you're booking a BlockBuster weekend release, grabbing BookMyShow IPL tickets for the next home game, or booking a live comedy show, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates BookMyShow discount codes, BookMyShow promo codes, and BookMyShow offer codes daily so you don't have to search before every booking. Every code on this page has been checked before going live — no expired deals, no failed codes at checkout.
          </p>

          <p>
            From first-time user offers on movie BookMyShow bookings to bank card cashback, F&B combo deals, and BookMyShow promotion codes for live events, this page covers the full range of book my show offers available today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* BookMyShow Is More Than Just Movie Tickets Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      BookMyShow Is More Than Just Movie Tickets
    </h3>
    <p className="mb-4">
      Many users think of BookMyShow only as a place to book my movie tickets — but the platform has expanded far beyond cinema into a full entertainment commerce ecosystem. Here's what BookMyShow covers in 2026:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Movies
        </h4>
        <p>
          The original and most used BookMyShow category. Movie BookMyShow covers all major Hindi, Tamil, Telugu, Malayalam, Kannada, and English releases across thousands of screens in India. You can filter by cinema, format (2D, 3D, IMAX, 4DX, Dolby Atmos), showtime, and seating preference. A BookMyShow coupon code applied at checkout reduces the per-ticket price on most movie bookings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Cricket & BookMyShow IPL Tickets
        </h4>
        <p>
          BookMyShow is the official ticketing partner for Indian Premier League matches, international cricket fixtures, and domestic tournaments. BookMyShow IPL tickets are among the most sought-after bookings on the platform — demand during IPL season often outstrips supply for marquee matches in cities like Mumbai, Bengaluru, Chennai, and Kolkata. A BookMyShow discount code or bank card offer can reduce the effective price on sports event bookings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Live Music & Concerts
        </h4>
        <p>
          From Arijit Singh tours to international acts, BookMyShow handles concert and live music ticketing for India's biggest shows. The platform managed ticket sales for the Coldplay India tour, Ed Sheeran's India visit, and dozens of homegrown artist concerts and music festivals.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Comedy Shows
        </h4>
        <p>
          Stand-up comedy has grown into a major entertainment category in Indian cities. BookMyShow lists hundreds of comedy shows monthly — from intimate venue sets to large arena performances by comedians like Zakir Khan, Kapil Sharma, Kenny Sebastian, and many others.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Theatre & Performing Arts
        </h4>
        <p>
          BookMyShow covers theatre productions, classical performances, dance shows, and cultural events across major Indian cities. This includes productions at iconic venues like Prithvi Theatre (Mumbai), Kamani Auditorium (Delhi), and BookMyShow Nandan (Kolkata's cultural centre) — where the platform manages ticketing for a wide range of Bengali and English productions.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Sports Beyond Cricket
        </h4>
        <p>
          BookMyShow covers ticketing for Pro Kabaddi League, ISL (Indian Super League football), NBA India Games, tennis tournaments, and other major sporting events.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Experiences & Activities
        </h4>
        <p>
          Adventure experiences, escape rooms, stand-up paddleboarding, cooking classes, pottery workshops, and guided city tours are all bookable on BookMyShow Experiences — a category targeting the growing Indian consumer appetite for activity-based outings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Stream — Digital Entertainment
        </h4>
        <p>
          BookMyShow Stream is the platform's digital entertainment arm, offering movie rentals, early digital releases, and event live streams. A BookMyShow promo code can sometimes be applied to Stream purchases, making digital rentals even more affordable.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Amusement Parks & Attractions
        </h4>
        <p>
          BookMyShow handles entry ticketing for major amusement parks and tourist attractions across India — including Imagica, Wonderla, Snow World, and similar venues.
        </p>
      </div>
    </div>
  </div>

  {/* Ways You Can Avail Discounts on Movie Tickets Via BookMyShow Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Ways You Can Avail Discounts on Movie Tickets Via BookMyShow
    </h3>
    <p className="mb-4">
      There are multiple proven routes to saving money on movie BookMyShow bookings. Here's every method that works:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          1. BookMyShow Coupon Code at Checkout
        </h4>
        <p>
          The most direct route — apply a verified BookMyShow coupon code from CouponsCrew in the promo code field at checkout. These codes offer flat rupee discounts (e.g. ₹75, ₹100, ₹150 off) or percentage discounts on the ticket price. Always check CouponsCrew before confirming any booking.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          2. Bank Card & Credit Card Offers
        </h4>
        <p>
          This is consistently the most reliable discount route for regular BookMyShow users. Partner banks — including HDFC, Axis, SBI, ICICI, Kotak, and IndusInd — offer cashback or instant discount on BookMyShow bookings made with eligible cards. These discounts apply automatically when the qualifying card is selected at payment. Discounts typically range from 10%–25% on ticket value, with caps per transaction.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          3. BookMyShow SuperStar Membership
        </h4>
        <p>
          BookMyShow's loyalty membership programme rewards frequent users with cashback, early access to blockbuster bookings, and member-exclusive BookMyShow discount codes. SuperStar members accumulate points with every booking and redeem them on future transactions.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          4. Paytm & Wallet Cashback
        </h4>
        <p>
          Paying for BookMyShow bookings via Paytm wallet, PhonePe, or other partner digital wallets often unlocks additional cashback not available through card payments. These offers are time-specific and appear in the wallet app alongside the BookMyShow checkout.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          5. Early Bird Offers
        </h4>
        <p>
          For major releases — particularly South Indian blockbusters and big Bollywood releases — BookMyShow sometimes runs early bird pricing for tickets booked days before the release. For high-demand films like Kantara, Avatar, Jawan, and similar, booking at the earliest available window locks in better pricing and seat selection.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          6. Weekday Discounts
        </h4>
        <p>
          Tickets on Tuesday and Wednesday are often cheaper than weekend shows across multiplex chains. If your schedule allows it, midweek movie shows combined with a BookMyShow coupon code deliver the lowest possible per-ticket cost.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          7. BookMyShow Promotion Code via Partner Apps
        </h4>
        <p>
          Several partner apps — PhonePe, Google Pay, Amazon Pay, and others — distribute BookMyShow promotion codes as part of their own cashback campaigns. These codes appear in the partner app and can be applied at BookMyShow checkout for additional savings on top of ticket prices.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          8. Group Booking Discounts
        </h4>
        <p>
          For groups of 10 or more, BookMyShow offers group booking options where per-ticket pricing may be lower than individual bookings. Corporate and institutional group bookings also attract bulk pricing in select cases.
        </p>
      </div>
    </div>
  </div>

  {/* How to Get F&B Deals on BookMyShow Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      How to Get F&B Deals on BookMyShow
    </h3>
    <p className="mb-4">
      Food and beverage deals at the cinema are one of the most underused savings categories on BookMyShow. Here's how to access them:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Pre-Order F&B via the BookMyShow App
        </h4>
        <p>
          BookMyShow allows users to pre-order food and beverages from PVR INOX, Cinepolis, and other partner multiplex concession stands directly within the app before arriving at the cinema. Pre-ordering has two advantages — you skip the queue at the counter, and pre-order combos are frequently priced lower than walk-up counter pricing.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          F&B Combo Deals
        </h4>
        <p>
          BookMyShow regularly features bundled F&B combo deals — a popcorn + drink combination offered at a discounted price when added to a ticket booking. These combos appear during the checkout flow after selecting your seats. The discount on these combos is typically 15%–30% off the individual item prices at the cinema counter.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          BookMyShow Offer Code for F&B
        </h4>
        <p>
          Certain BookMyShow offer codes apply specifically to F&B add-ons rather than ticket prices. These codes appear in the F&B section of the checkout and are separate from ticket discount codes. CouponsCrew lists active F&B-specific BookMyShow discount codes alongside movie ticket codes.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Partner Restaurant Deals Near Cinemas
        </h4>
        <p>
          BookMyShow's app also surfaces dining deals at restaurants near booked cinemas — making it possible to plan a dinner-and-movie outing with combined savings on both. These dining offers are separate from the cinema F&B deals and vary by city and restaurant partner.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Loyalty Points on F&B
        </h4>
        <p>
          BookMyShow SuperStar members accumulate points on F&B purchases in addition to ticket bookings. Consistently pre-ordering through the app builds points that can be redeemed on future bookings — effectively giving a loyalty discount on every cinema snack order.
        </p>
      </div>
    </div>
  </div>

  {/* BookMyShow Offers in 2026 Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      BookMyShow Offers in 2026
    </h3>
    <p className="mb-4">
      The range of book my show offers available in 2026 reflects the platform's expanded scope beyond cinema. Here's what's live and worth watching for:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Movie Release Offers
        </h4>
        <p>
          Every major Bollywood, South Indian, and Hollywood release triggers a wave of BookMyShow promo codes from partner banks, brands, and BookMyShow itself. Blockbuster release weekends — like the kind seen for Pathaan, Jawan, RRR, Kantara, and Avatar — typically bring the highest concentration of BookMyShow discount codes. Check CouponsCrew the week before any major release to catch the best codes before they expire.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          IPL Season Offers
        </h4>
        <p>
          BookMyShow IPL ticket offers are some of the most competitive on the platform. During IPL season (March–May), expect BookMyShow coupon codes targeting cricket fans — typically flat discounts or cashback on sports event bookings. Bank card offers are particularly strong during IPL, with some cards offering ₹200–₹500 off on match tickets.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Concert & Event Presale Codes
        </h4>
        <p>
          For major concerts and live events, BookMyShow runs presale windows where early access and BookMyShow promotion codes are distributed to registered users or bank cardholders. Signing up for BookMyShow notifications ensures you receive presale codes before tickets sell out.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Festive Season Offers
        </h4>
        <p>
          Diwali, Eid, Christmas, and New Year are peak cinema-going periods in India. BookMyShow consistently runs festive BookMyShow offer codes during these windows — often combining ticket discounts with F&B deals for a complete cinema outing saving.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          New Multiplex Opening Offers
        </h4>
        <p>
          When new PVR INOX or Cinepolis screens open in a city, BookMyShow typically runs introductory BookMyShow discount codes for first bookings at the new venue. These early-access codes offer higher discounts than standard promotional codes.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OTT & Stream Offers
        </h4>
        <p>
          BookMyShow Stream periodically runs digital rental offers — discounted prices on new releases or exclusive early digital premieres. A BookMyShow promo code for Stream is worth having for users who prefer watching films at home on release weekend.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* BookMyShow at Iconic Venues & Multiplexes */}
          <div className="space-y-6 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-6">BookMyShow at Iconic Venues — A Quick Guide</h3>
            
            <div className="space-y-4">
              <h4 className="text-base font-black text-black uppercase tracking-wider">BookMyShow Nandan (Kolkata)</h4>
              <p className="text-gray-700 font-bold leading-relaxed">
                Nandan is one of Kolkata's most beloved cultural institutions — a government-run film centre known for Bengali cinema, international film festivals, and art house screenings. BookMyShow Nandan listings cover film screenings, cultural programmes, and events at this iconic venue. Tickets are typically lower-priced than commercial multiplexes, though a BookMyShow coupon code may not always apply to government-rate screenings.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h4 className="text-base font-black text-black uppercase tracking-wider">Major Multiplex Chains on BookMyShow</h4>
              <p className="text-gray-700 font-bold leading-relaxed">
                <strong className="text-[#2C2C40]">PVR INOX — </strong>
                India's largest multiplex chain after the PVR-INOX merger, with IMAX, 4DX, and Dolby Atmos screens across 100+ cities
              </p>
              <p className="text-gray-700 font-bold leading-relaxed">
                <strong className="text-[#2C2C40]">Cinepolis — </strong>
                Pan-India multiplex chain with VIP and D-BOX seating options
              </p>
              <p className="text-gray-700 font-bold leading-relaxed">
                <strong className="text-[#2C2C40]">Miraj Cinemas — </strong>
                Strong presence in Tier 2 and Tier 3 cities
              </p>
              <p className="text-gray-700 font-bold leading-relaxed">
                <strong className="text-[#2C2C40]">Movietime Cinemas — </strong>
                Maharashtra-focused multiplex chain
              </p>
              <p className="text-gray-700 font-bold leading-relaxed pt-2">
                BookMyShow covers all major chains under one platform — so a single BookMyShow discount code can apply regardless of which multiplex you're booking.
              </p>
            </div>
          </div>

          {/* Platform Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">BookMyShow vs Alternative Ticketing Platforms</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">BookMyShow</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Paytm Insider</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">District (Zomato)</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Direct Multiplex App</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Movie Ticket Coverage", bms: "Widest in India", paytm: "Limited", dist: "Limited", app: "Chain-specific only" },
                    { feature: "Events & Concerts", bms: "Comprehensive", paytm: "Strong in metros", dist: "Growing", app: "No" },
                    { feature: "IPL & Sports Tickets", bms: "Official partner", paytm: "Limited", dist: "Limited", app: "No" },
                    { feature: "F&B Pre-Order", bms: "Yes", paytm: "No", dist: "No", app: "Yes (PVR INOX app)" },
                    { feature: "Loyalty Programme", bms: "SuperStar", paytm: "No", dist: "No", app: "PVR INOX: Club Royale" },
                    { feature: "Coupon Code Support", bms: "BookMyShow coupon code", paytm: "Paytm codes", dist: "No", app: "Chain-specific offers" },
                    { feature: "Best For", bms: "All entertainment in one place", paytm: "Indie events & gigs", dist: "Dining-linked events", app: "Regular PVR/INOX visitors" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.bms}</td>
                      <td className="p-4 font-bold text-gray-700">{row.paytm}</td>
                      <td className="p-4 font-bold text-gray-700">{row.dist}</td>
                      <td className="p-4 font-bold text-gray-700">{row.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Bottom line:</strong> For breadth of coverage across movies, sports, concerts, and experiences, BookMyShow remains the clear category leader in India. A verified BookMyShow coupon code from CouponsCrew maximises the value of every booking on the platform.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">BookMyShow Sale Calendar — Best Times to Use Your Promo Code</h3>
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
                    { period: "Republic Day (Jan 26)", offer: "Flat OFF on movie & event tickets" },
                    { period: "Valentine's Day (Feb 14)", offer: "Couple package offers + BookMyShow discount code" },
                    { period: "IPL Season (Mar–May)", offer: "BookMyShow IPL ticket offers + bank card deals" },
                    { period: "Summer Holidays (May–Jun)", offer: "Family package deals & multiplex offers" },
                    { period: "Independence Day (Aug 15)", offer: "BookMyShow coupon code campaigns" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Festive event & movie offers" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-traffic period — blockbuster release codes" },
                    { period: "Christmas & New Year (Dec)", offer: "Holiday film releases + F&B combo deals" },
                    { period: "Major Film Releases (varies)", offer: "Release-week BookMyShow promo codes" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.period}</td>
                      <td className="p-4 font-bold text-gray-700">{row.offer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Saving Tips for BookMyShow from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Book midweek for the lowest ticket prices. Tuesday and Wednesday shows are consistently cheaper than Friday–Sunday. Combine a midweek show with a BookMyShow coupon code for the lowest possible ticket cost.",
                "Pre-order F&B — always. Cinema counter F&B pricing is some of the highest in consumer spending. Pre-ordering combos through the BookMyShow app before you arrive saves 15%–30% versus walk-up counter prices.",
                "Use an eligible bank card. Bank card cashback offers on BookMyShow are consistently available and often deliver a higher discount than a standard BookMyShow coupon code alone. Check your card's offer page before paying.",
                "Book IPL tickets early. BookMyShow IPL tickets for marquee matches sell out fast. Book as soon as the ticketing window opens — early booking also sometimes unlocks early-bird BookMyShow discount codes.",
                "Join the SuperStar programme. BookMyShow SuperStar loyalty points accumulate across every booking. Over a year of regular cinema visits, SuperStar rewards deliver meaningful free ticket value.",
                "Watch for major release week codes. The week of a blockbuster release — Kantara, Avatar, Jawan-style releases — is when BookMyShow promotion codes from bank partners are most active. Check CouponsCrew the Tuesday before a major release.",
                "Check CouponsCrew before every booking. All BookMyShow coupon codes on this page are verified before going live. A 60-second check before any movie, IPL, or event booking regularly saves ₹75–₹300."
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
              Similar Platforms to Explore Alongside BookMyShow
            </h3>
            <p className="mb-4">
              If you're comparing entertainment and event ticketing options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Paytm Insider — </strong>
              Strong for indie gigs, underground events, and metro-city experiences
            </p>
            <p>
              <strong className="text-[#2C2C40]">District (Zomato) — </strong>
              Event ticketing integrated with Zomato's dining discovery platform
            </p>
            <p>
              <strong className="text-[#2C2C40]">PVR INOX App — </strong>
              Direct multiplex booking for regular PVR INOX visitors with Club Royale loyalty benefits
            </p>
            <p>
              <strong className="text-[#2C2C40]">Cinepolis App — </strong>
              Direct booking for Cinepolis screens with VIP seat options
            </p>
            <p>
              <strong className="text-[#2C2C40]">Zomato — </strong>
              For dining deals near your cinema; use a Zomato coupon code for a pre-show dinner discount
            </p>
            <p>
              <strong className="text-[#2C2C40]">Swiggy Scenes — </strong>
              Live event discovery with Swiggy's event platform
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major ticketing and entertainment platforms. Visit individual store pages for verified, up-to-date discount codes before your next booking.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for BookMyShow Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every BookMyShow coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired BookMyShow offer codes and adding new ones so every listing is accurate.
            </p>
            <p>
              Entertainment is one of India's highest-frequency discretionary spending categories. A verified BookMyShow discount code from CouponsCrew can save ₹75–₹300 per booking — and for regular cinema-goers booking weekly, that compounds into significant annual savings.
            </p>
            <p>
              Bookmark this page and check it before every BookMyShow booking — movie tickets, IPL, concerts, F&B combos, or Stream rentals. A 60-second check on CouponsCrew regularly pays off.
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
            Frequently Asked Questions About BookMyShow Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a BookMyShow coupon code?",
              a: "Open the BookMyShow app or website, select your movie or event, choose your seats, and proceed to checkout. Enter your BookMyShow coupon code in the \"Apply Coupon\" field and tap Apply. The discounted price will update in your booking summary before payment."
            },
            {
              q: "Q2. Why is my BookMyShow promo code not working?",
              a: "Common reasons include: the code has expired, the minimum booking value hasn't been met, the code applies only to specific cinemas or event categories, or the code is for new users only. Check the terms on CouponsCrew for the specific BookMyShow discount code you're using."
            },
            {
              q: "Q3. Can I use a BookMyShow coupon code for IPL tickets?",
              a: "Some BookMyShow coupon codes apply to sports event bookings including IPL. However, high-demand IPL matches often have restricted offer applicability. Check the terms of the specific BookMyShow offer code before attempting to apply it on BookMyShow IPL tickets."
            },
            {
              q: "Q4. What is the BookMyShow promotion code field?",
              a: "The BookMyShow promotion code field (also labelled \"Apply Coupon\" or \"Have a promo code?\") appears at the payment step of the checkout flow. Enter your BookMyShow promotion code here and tap Apply to see the discount reflected in your total."
            },
            {
              q: "Q5. Are there BookMyShow coupon codes for F&B?",
              a: "Yes. Certain BookMyShow offer codes apply specifically to F&B add-ons rather than ticket prices. CouponsCrew lists F&B-specific BookMyShow discount codes alongside movie ticket codes — check the label on each code before applying."
            },
            {
              q: "Q6. Can I get discounts on BookMyShow Stream (digital rentals)?",
              a: "Yes. BookMyShow Stream periodically offers discount codes for digital movie rentals and event live streams. These BookMyShow promo codes are separate from cinema ticket codes. Check CouponsCrew for active Stream discount codes."
            },
            {
              q: "Q7. What is BookMyShow Nandan?",
              a: "BookMyShow Nandan refers to ticket bookings for Nandan Cinema and Cultural Complex in Kolkata — one of the city's most iconic film and cultural venues. BookMyShow lists screenings and events at Nandan alongside commercial multiplex listings."
            },
            {
              q: "Q8. How do I book BookMyShow IPL tickets?",
              a: "Search for your IPL team's home matches on BookMyShow during the ticket release window. Select your stand, ticket category, and number of seats. Apply a BookMyShow coupon code or bank card offer at checkout to reduce the total cost. IPL tickets sell out quickly for top matches — book as soon as the window opens."
            },
            {
              q: "Q9. Is there a loyalty programme on BookMyShow?",
              a: "Yes. BookMyShow SuperStar is the platform's loyalty programme. Members earn points on every ticket and F&B purchase, receive member-exclusive BookMyShow discount codes, and get early access to high-demand bookings. Points are redeemable on future transactions."
            },
            {
              q: "Q10. How do I contact BookMyShow customer support?",
              a: "BookMyShow customer support is available through the Help section on bookmyshow.com and within the BookMyShow app. You can raise a query about a booking, cancellation, or refund through the in-app support flow or via the official website contact page."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular BookMyShow Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["BookMyShow Coupon Code", "BOGO Movie Tickets", "BookMyShow IPL Tickets", "BookMyShow Nandan", "F&B Combo Offers", "Bank Card Cashback", "BookMyShow Stream", "Paytm Insider vs BMS"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top BookMyShow Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Buy 1 Get 1 Free Movies", sub: "Bank card offer on ICICI, Axis, SBI & IndusInd cards" },
              { heading: "Up to ₹500 OFF with Rewards", sub: "Redeem credit card rewards & wallet points at checkout" },
              { heading: "IPL Match Ticket Offers", sub: "Official ticketing partner for GT, KKR, LSG & MI" },
              { heading: "Flat 50% Off Stream Rentals", sub: "Discount code for online movie & event stream rentals" },
              { heading: "F&B Combo Pre-Order Savings", sub: "Save up to 30% when ordering popcorn & snacks online" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get BookMyShow deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#C4242B]">{activeModalCoupon.code}</span> at BookMyShow checkout for instant discounts.
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
                className="w-full bg-[#1E1B2E] hover:bg-[#131120] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to BookMyShow</span>
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
