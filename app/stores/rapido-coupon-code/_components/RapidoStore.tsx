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
import { Coupon, RAPIDO_COUPONS } from './rapidoCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.rapido.bike/Home';

export default function RapidoStore() {
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

  const coupons: Coupon[] = RAPIDO_COUPONS;

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
      q: 'How do I use a Rapido coupon code?',
      a: 'To use a Rapido coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field before you book your ride on the Rapido app. If it is a no-code deal, simply click "Visit Rapido" to open the app and check the offer.'
    },
    {
      q: 'Why is my Rapido coupon code not working?',
      a: 'A coupon might not work due to expiry, ride-type restrictions (e.g. some codes apply only to bike rides or auto rides), minimum fare requirements, or user eligibility restrictions (e.g. new users only).'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Rapido coupon code listed on this page is checked before publishing, and we mark each one as verified along with the date it was last reviewed.'
    },
    {
      q: 'How often are Rapido coupons updated?',
      a: 'Our team reviews and updates Rapido coupons regularly. Expired or non-working codes are removed so you mostly see offers that are currently active.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, ride-hailing apps like Rapido allow only one promo code per booking. Check the terms shown with each offer for specific restrictions.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-sans antialiased text-[#2A2A2A]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2  text-xs md:text-sm text-[#2A2A2A] select-none mb-6">
            <Link href="/" className="hover:text-[#000000] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#000000] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#000000] font-semibold">Rapido Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#EFEFE0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#EFEFE0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/rapido-logo_fklfkd.webp"
                      alt="Rapido Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#B8860B] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.3 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight">Rapido</h1>
                    <span className="bg-[#FFF6C9] text-[#8A7000] text-xs font-bold px-3 py-1 rounded-full border border-[#FFE98A]">
                      Bike Taxi, Auto & Cab Rides
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#2A2A2A]">
                    Find Rapido coupon codes and deals for Aug 2026. Enjoy a free first cab ride, up to 55% OFF on flights, hotels and buses, 20% OFF metro rides, and ₹100 OFF your first Rapido Parcel booking. Check eligible offers before booking.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2A2A2A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#8A7000] bg-[#FFF6C9] px-2.5 py-1 rounded-full border border-[#FFE98A]">
                      <Tag size={14} /> 9+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#EFEFE0] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#000000] hover:bg-[#222222] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Rapido</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#E0E0D0] text-[#1A1A1A] hover:bg-gray-50'
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-[#FFD100] items-center justify-center"
            >
              <div className="text-center px-8">
                <p className="text-3xl font-black text-[#1A1A1A] leading-tight">Ride More.<br />Pay Less.</p>
                <p className="text-sm font-bold text-[#1A1A1A]/70 mt-3">Seasonal offers on bike, auto &amp; cab rides</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP ACCENT BAR — desktop only
          ========================================== */}
      <section className="hidden lg:block bg-white border-b border-[#EFEFE0] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#EFEFE0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF6C9] text-[#8A7000] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">9+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#EFEFE0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-gray-100 text-[#000000] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Up to ₹50</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#EFEFE0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A1A] leading-none">Every Ride</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF6C9] text-[#8A7000] rounded-2xl flex items-center justify-center shrink-0">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EFEFE0] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight">Rapido Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Rapido coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#FFD100) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#FFD100] flex flex-col items-center justify-center py-6 px-2 text-[#1A1A1A] relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#000000) */}
                <span className="bg-black/10 text-[#1A1A1A] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#8A7000] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD100]" />
                    <span>Valid on select ride types as specified in the offer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD100]" />
                    <span>Minimum fare value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD100]" />
                    <span>Covers select cities and service areas.</span>
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
                    : "bg-[#000000] hover:bg-[#222222] text-white"
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
            <div className="bg-white border border-[#EFEFE0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#EFEFE0] pb-3 select-none">
                <Info size={16} className="text-[#8A7000]" />
                <span>About Rapido — India's Largest Bike Taxi Platform</span>
              </h3>
              <p className="text-[#1A1A1A] text-sm mb-3">
               Rapido was founded in 2015 by Aravind Sanka, Pavan Guntupalli, and SR Rishikesh in Bangalore. The founders identified a clear gap in India's urban mobility market — millions of daily commuters needed a faster, cheaper alternative to traditional autos and cabs for short-to-medium distance travel. Bike taxis filled that gap perfectly, and Rapido became the first platform in India to build a dedicated, scalable bike taxi network at the national level.
              </p>

              <p className="text-[#1A1A1A] text-sm mb-3">
               Rapido's model is built on three pillars: affordability (bike rides cost significantly less than autos or cabs for similar distances), speed (two-wheelers navigate traffic faster in congested Indian cities), and accessibility (the platform is available across 100+ cities, including many Tier 2 and Tier 3 markets where Ola and Uber have limited or no presence).
              </p>

              <p className="text-[#1A1A1A] text-sm mb-3">
               Over the years, Rapido has expanded beyond bike taxis to include auto-rickshaw booking, cab services, and metro feeder connectivity — positioning itself as a comprehensive last-mile and mid-mile urban mobility platform rather than a single-mode ride service.
              </p>

              <p className="text-[#1A1A1A] text-sm mb-3">
               Today, Rapido operates in 100+ Indian cities with a network of over 1.5 million Captains (the term Rapido uses for its driver-partners). The platform has completed over 1 billion rides since inception, making it one of the most-used mobility apps in India by ride volume.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#E0E0D0] hover:border-[#000000] hover:text-[#000000] text-[#1A1A1A] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Rapido</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#FFD100] to-[#FFE45C] rounded-3xl p-6 text-[#1A1A1A] relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/10 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Rapido Seasonal Ride Offers</h3>
                <span className="inline-block bg-[#000000] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-[#1A1A1A]/80 text-xs mt-2 leading-relaxed">
                  Save on bike, auto & cab rides with seasonal offers
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-[#1A1A1A] hover:bg-[#000000] text-white py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            {/* Sidebar Card 4: Why Shop at Rapido */}
            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    How to Use a Rapido Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Applying a Rapido discount code or Rapido offer code takes under a minute. Here&apos;s how:
  </p>

  <div className="space-y-5">
    <ol className="space-y-2.5 text-xs font-semibold text-[#3A3A3A]">
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">1</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Open the Rapido app — </span>
          <span>Download and launch the Rapido app on iOS or Android. Log in or create a new account.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">2</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Enter your destination — </span>
          <span>Type your pickup and drop location to see available ride options (bike, auto, cab).</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">3</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Choose your ride mode — </span>
          <span>Select Rapido Bike, Rapido Auto, or Rapido Cab based on your need.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">4</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Look for the coupon field — </span>
          <span>Before confirming the ride, tap &quot;Apply Coupon&quot; or &quot;Have a promo code?&quot;</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">5</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Enter your Rapido coupon code — </span>
          <span>Type or paste the code from CouponsCrew and tap Apply.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">6</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Confirm the discount — </span>
          <span>The reduced fare will update on your ride confirmation screen.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">7</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Confirm your booking — </span>
          <span>Tap &quot;Book Ride&quot; to confirm. Your Captain will be assigned within minutes.</span>
        </div>
      </li>
      <li className="flex items-start gap-2.5">
        <span className="flex items-center justify-center bg-[#F0EEFF] text-[#5B4FBE] rounded-full w-4 h-4 text-[10px] font-bold shrink-0 mt-0.5">8</span>
        <div>
          <span className="font-bold text-[#5B4FBE]">Pay on arrival — </span>
          <span>Pay via UPI, wallet, or cash depending on the available payment options for your ride.</span>
        </div>
      </li>
    </ol>

    {/* Tip Box */}
    <div className="bg-[#F0EEFF] border border-[#5B4FBE] rounded-2xl p-3.5 flex items-start gap-2.5">
      <div className="text-xs text-[#3A3A3A]">
        <span className="font-bold text-[#5B4FBE]">Tip: </span>
        <span>Rapido first ride coupons for new users are the highest-value codes available. If you&apos;re signing up for the first time, apply your Rapido first ride coupon before confirming your first booking to get the maximum discount.</span>
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
          Save on Every Rapido Ride with a Verified Rapido Coupon Code
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Rapido is India's largest bike taxi platform — and with the right Rapido coupon code, every ride becomes noticeably cheaper. Whether you're booking a Rapido bike ride for a quick commute, an auto for a mid-distance trip, or a cab for longer routes, there's almost always a discount available if you know where to look.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates Rapido discount codes, Rapido promo codes, and Rapido offer codes daily so you don't have to search before every ride. Every code on this page has been checked before going live — no expired deals, no failed codes at checkout.
          </p>

          <p>
            From Rapido first ride coupons for new users to Rapido auto coupon codes, Rapido bike coupon codes, and Rapido metro coupons, this page covers the full range of savings available on Rapido today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Why Use Rapido? Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Why Use Rapido?
    </h3>
    <p className="mb-4">
      Rapido offers a set of advantages that make it a compelling choice for daily commuters and occasional riders alike. Here's why millions of Indians choose Rapido over traditional transport alternatives:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Lowest Fares in Urban Mobility
        </h4>
        <p>
          Rapido bike taxi fares are consistently among the lowest available for point-to-point urban travel in India. On a typical 5 km city ride, a Rapido bike costs 40%–60% less than an equivalent auto or cab booking. For daily commuters making the same trip twice a day, this difference compounds into significant monthly savings — especially when a Rapido coupon code further reduces the fare.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Fastest for Short & Medium Distances
        </h4>
        <p>
          Two-wheelers cut through congested city traffic significantly faster than four-wheelers. In cities like Bengaluru, Hyderabad, and Delhi where peak-hour traffic is severe, a Rapido bike ride can complete a 5–8 km trip in half the time of an auto or cab covering the same route.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Multiple Ride Modes in One App
        </h4>
        <p>
          Rapido offers bike taxis, auto-rickshaws, and cabs within a single app — allowing users to choose the right mode based on distance, budget, and occasion. A solo commuter might choose a Rapido bike for a quick office trip and a Rapido auto for an airport drop at night.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          No Surge Pricing on Bikes
        </h4>
        <p>
          Unlike cab platforms that apply significant surge pricing during rain or peak hours, Rapido's bike taxi fares remain relatively stable. This predictability makes Rapido a reliable option during high-demand periods when cab fares spike.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Metro Feeder Connectivity
        </h4>
        <p>
          Rapido's metro feeder service connects users from metro stations to their final destination — solving the classic last-mile problem that prevents more Indians from using public transit. A Rapido metro coupon makes this feeder ride even more affordable, effectively subsidising the transition to public transport for the main commute leg.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Wide City Coverage
        </h4>
        <p>
          Rapido's 100+ city network makes it available in markets where Ola and Uber offer limited services. In Tier 2 cities like Indore, Surat, Trichy, Vijayawada, and Ranchi, Rapido is often the primary app-based mobility option available.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Simple Booking Interface
        </h4>
        <p>
          The Rapido app is designed for fast, frictionless booking. Enter your destination, confirm your ride mode, apply your Rapido promo code, and your Captain is on the way — typically within 3–5 minutes in covered areas.
        </p>
      </div>
    </div>
  </div>
</div>

          <div className="space-y-6 text-slate-700">
  {/* Types of Rapido Discount Codes & Offers Available Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Types of Rapido Discount Codes & Offers Available
    </h3>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido First Ride Coupon — New Users
        </h4>
        <p>
          The Rapido first ride coupon is designed for users booking their first Rapido ride. These are the highest-value Rapido offer codes available — frequently offering 50%–100% off the first ride (up to a maximum fare cap). Rapido first ride coupons are one-time use and expire after the first booking. If you're a new user, always apply a Rapido first ride coupon before confirming your first ride.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Bike Coupon Code
        </h4>
        <p>
          Rapido bike coupon codes offer flat rupee discounts on bike taxi bookings — typically ₹30–₹50 off per ride. These are among the most frequently available Rapido promo codes and apply to the standard Rapido Bike service. Minimum fare conditions usually apply.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Auto Coupon Code
        </h4>
        <p>
          Rapido auto coupon codes provide discounts on auto-rickshaw bookings through the Rapido app. Typical discounts range from ₹40–₹75 off per auto ride, with minimum fare requirements. These are particularly useful for slightly longer trips where the auto mode is more appropriate than a bike.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Metro Coupon
        </h4>
        <p>
          Rapido metro coupons apply to the metro feeder service — the short rides connecting metro stations to final destinations. As these rides are inherently short and low-fare, even a small Rapido metro coupon discount (₹20–₹40) can represent a significant percentage saving on the total fare.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Cab Discount Code
        </h4>
        <p>
          Rapido cab discount codes apply to four-wheeler cab bookings on the platform. Cab fares are higher than bike or auto, making these Rapido discount codes more valuable in absolute rupee terms — typically 10%–20% off the cab fare with a maximum discount cap.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Referral Codes
        </h4>
        <p>
          Rapido's referral programme gives both the referring user and the new user free ride credits when a new account is created using a referral link or code. These credits apply automatically on the next eligible booking.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Bank & Payment Wallet Offers
        </h4>
        <p>
          Rapido periodically partners with UPI apps, digital wallets, and bank card programmes to offer cashback on ride payments. These are applied automatically when the eligible payment method is used — no separate Rapido coupon code required.
        </p>
      </div>
    </div>
  </div>

  {/* In Which Cities of India is Rapido Currently Operational Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      In Which Cities of India is Rapido Currently Operational?
    </h3>
    <p className="mb-4">
      Rapido is currently operational in 100+ cities across India — covering major metros, state capitals, and a growing number of Tier 2 and Tier 3 cities. Here are some of the key cities where Rapido services are active:
    </p>

    {/* Formatted Operational Cities Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Bengaluru</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Chandigarh</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Chennai</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Delhi</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Guwahati</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Hyderabad</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Indore</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Jaipur</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Kolkata</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Lucknow</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">NCR</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Patna</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Ranchi</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Surat</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Tiruchirappalli (Trichy)</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Vijayawada</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Visakhapatnam</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Pune</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Ahmedabad</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Bhopal</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Coimbatore</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Kochi</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Nagpur</div>
      <div className="bg-white p-2 rounded border border-slate-200 text-center font-medium text-[#2C2C40]">Bhubaneswar</div>
    </div>

    <p className="mb-3">
      Beyond these listed cities, Rapido continues to expand its network into smaller markets where affordable bike taxi and auto services address an acute gap in daily urban mobility. Check the Rapido app for the most current city list and service availability in your area.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Note: </strong>Service availability within a city may vary by zone. Rapido bike taxis, auto services, and cab options may not all be available in every part of every city — the app will show which modes are available for your specific pickup location.
    </p>
  </div>

  {/* Rapido Ride Modes — Bike, Auto & Cab Explained Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Rapido Ride Modes — Bike, Auto & Cab Explained
    </h3>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Bike
        </h4>
        <p>
          The original and most popular Rapido service. Rapido bike rides are ideal for solo commuters covering 2–15 km distances where speed and cost are the primary priorities. Bike rides are the fastest mode in heavy traffic and the lowest-cost option on the platform. A Rapido bike coupon code reduces the per-ride cost further, making daily bike commuting via Rapido genuinely economical.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Auto
        </h4>
        <p>
          Rapido auto connects users with auto-rickshaw drivers on the platform. Auto rides are suitable for slightly longer distances, carrying luggage, or situations where two people need to travel together. Rapido auto fares are lower than comparable cab fares for the same distance. Apply a Rapido auto coupon code at checkout to save on auto bookings.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Cab
        </h4>
        <p>
          Rapido's cab service offers four-wheeler rides for longer distances, airport trips, late-night journeys, or situations requiring greater comfort. Rapido cab fares are competitive with Ola and Uber pricing. A Rapido discount code or Rapido promo code on a cab booking delivers the highest absolute rupee saving given the larger base fare.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Rapido Metro Feeder
        </h4>
        <p>
          The Rapido metro feeder service solves last-mile connectivity — the 1–5 km gap between a metro station and the user's final destination that prevents many commuters from using public transit as their primary mode. By offering short, affordable bike rides from metro stations, Rapido metro effectively subsidises public transport adoption. Use a Rapido metro coupon to make these short feeder rides even cheaper.
        </p>
      </div>
    </div>
  </div>

  {/* Benefits for Captains — Rapido's Driver-Partner Programme Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Benefits for Captains — Rapido's Driver-Partner Programme
    </h3>
    <p className="mb-4">
      Rapido Captains are the driver-partners who power the platform's ride network. The term "Captain" reflects Rapido's positioning of its driver-partners as independent professionals rather than employees. Here's what the Captain programme offers:
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Flexible Earning Opportunities
        </h4>
        <p>
          Rapido Captains can choose their own working hours — logging on and off the app based on their availability. This flexibility makes Rapido an attractive earning platform for individuals who want supplementary income alongside a primary job, or full-time riders who want control over their schedule.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Low Entry Barrier
        </h4>
        <p>
          Becoming a Rapido Captain requires a valid driving licence, a two-wheeler (for bike captains) or auto licence (for auto captains), and completion of the registration process through the Rapido Captain app. No upfront franchise fee or vehicle deposit is required.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Consistent Ride Demand
        </h4>
        <p>
          With 100+ city coverage and millions of daily rides, Rapido Captains in active zones have access to consistent ride demand throughout the day. Peak hours, metro station zones, and office belt locations typically offer the highest ride frequency.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          In-App Earnings Tracking
        </h4>
        <p>
          The Rapido Captain app provides real-time earnings visibility, ride history, and performance metrics. Captains can track daily, weekly, and monthly earnings directly through the app — no manual reconciliation required.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Incentive Programmes
        </h4>
        <p>
          Rapido runs Captain-specific incentive programmes — bonus earnings for completing a target number of rides in a defined period, referral bonuses for bringing new Captains onto the platform, and performance rewards for high-rated Captains.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Insurance Coverage
        </h4>
        <p>
          Rapido provides accident insurance coverage for Captains while they are on active rides — a meaningful safety net for a profession that involves daily exposure to road risks.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Support Network
        </h4>
        <p>
          Captains have access to in-app support for ride disputes, payment queries, and account issues. Rapido also operates Captain service centres in select cities for in-person assistance.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Rapido vs Ola vs Uber — How They Compare</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Rapido</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Ola</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Uber</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Bike Taxi", rapido: "Yes — core service", ola: "Limited cities", uber: "Limited cities" },
                    { feature: "Auto Booking", rapido: "Yes", ola: "Yes", uber: "Yes (select cities)" },
                    { feature: "Cab Service", rapido: "Yes", ola: "Yes", uber: "Yes" },
                    { feature: "City Coverage", rapido: "100+ cities", ola: "250+ cities", uber: "100+ cities" },
                    { feature: "Fare (Bike)", rapido: "Lowest", ola: "Not primary", uber: "Not primary" },
                    { feature: "Surge Pricing", rapido: "Minimal on bikes", ola: "Yes", uber: "Yes" },
                    { feature: "Metro Feeder", rapido: "Yes", ola: "No", uber: "No" },
                    { feature: "New User Offer", rapido: "Rapido first ride coupon", ola: "Yes", uber: "Yes" },
                    { feature: "Best For", rapido: "Bike & auto commutes, Tier 2 cities", ola: "All-round cab service", uber: "Premium cab & outstation" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.rapido}</td>
                      <td className="p-4 font-bold text-gray-700">{row.ola}</td>
                      <td className="p-4 font-bold text-gray-700">{row.uber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Bottom line:</strong> For short-distance daily commuting in Indian cities, Rapido's bike taxi and auto service consistently offers the lowest fares and fastest travel times. For longer routes, outstation travel, or airport trips, Ola or Uber may be more suitable. Many users keep all three apps installed — checking for the best active Rapido coupon code, Ola coupon, or Uber promo code before each booking.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">Rapido Sale Calendar — Best Times to Use Your Rapido Promo Code</h3>
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
                    { period: "New Year (Jan 1)", offer: "New-year Rapido first ride coupon campaigns" },
                    { period: "Republic Day (Jan 26)", offer: "Flat off on bike & auto rides" },
                    { period: "Holi (March)", offer: "Festive Rapido promo code" },
                    { period: "IPL Season (Mar–May)", offer: "Match-day ride offers" },
                    { period: "Independence Day (Aug 15)", offer: "Sitewide Rapido discount code" },
                    { period: "Navratri & Dussehra (Oct)", offer: "Festive ride offers" },
                    { period: "Diwali (Oct–Nov)", offer: "Highest-value Rapido coupon code period" },
                    { period: "New Year's Eve (Dec 31)", offer: "Late-night ride discount codes" },
                    { period: "Weekends (Sat–Sun)", offer: "Regular app-exclusive weekend offers" }
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
              <strong className="text-[#5B4FBE]">Tip:</strong> Rapido frequently pushes limited-time Rapido offer codes via app notifications during festivals and long weekends. Enable push notifications on the Rapido app so you don't miss time-sensitive deals.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Rapido Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Always apply a Rapido first ride coupon if you're new. New user Rapido first ride coupons are the highest-value codes on the platform — often covering the full fare of the first ride. Don't skip this step when signing up.",
                "Use a Rapido bike coupon code for daily commutes. The savings on individual bike rides seem small, but if you're commuting twice daily five days a week, a Rapido bike coupon code used consistently delivers meaningful monthly savings.",
                "Switch to Rapido auto for slightly longer trips. When a bike ride feels too exposed (rain, carrying bags, evening travel), switching to Rapido auto with a Rapido auto coupon code keeps fares low while adding comfort.",
                "Use Rapido metro coupon for the last mile. Combining a metro commute with a Rapido metro feeder ride is one of the most cost-efficient urban commute strategies available in Indian cities. A Rapido metro coupon makes the feeder leg almost free.",
                "Check CouponsCrew before every ride booking. All Rapido coupon codes listed here are verified before going live. A 30-second check can save ₹30–₹100 per ride — which adds up fast for daily commuters.",
                "Refer friends for ride credits. Rapido's referral programme gives both parties free credits. If you're recommending Rapido to someone, use your referral link so both accounts benefit.",
                "Pay via UPI for cashback offers. Rapido periodically runs cashback offers on UPI payments through BHIM, Google Pay, or PhonePe. These apply on top of a Rapido discount code when the terms permit stacking."
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
              Similar Platforms to Explore Alongside Rapido
            </h3>
            <p className="mb-4">
              If you're comparing urban mobility and commuting options, these platforms are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Ola — </strong>
              India's largest cab platform covering bike, auto, and cab services across 250+ cities
            </p>
            <p>
              <strong className="text-[#2C2C40]">Uber — </strong>
              Premium cab service with strong presence in metros and airport transfers
            </p>
            <p>
              <strong className="text-[#2C2C40]">Namma Yatri — </strong>
              Open-network auto and cab booking app operating in Bengaluru and select cities
            </p>
            <p>
              <strong className="text-[#2C2C40]">InDrive — </strong>
              Fare-negotiation ride platform available in select Indian cities
            </p>
            <p>
              <strong className="text-[#2C2C40]">BMTC / DTC / Metro Apps — </strong>
              City-specific public transport apps that pair well with Rapido metro feeder rides
            </p>
            <p>
              <strong className="text-[#2C2C40]">Yulu — </strong>
              Dockless electric bike and scooter rental for short urban distances
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major mobility and transport platforms. Visit individual store pages for verified, up-to-date discount codes before your next ride.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for Rapido Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every Rapido coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired Rapido offer codes and adding new ones so every listing is accurate and working.
            </p>
            <p>
              For daily commuters, consistent use of a verified Rapido discount code from CouponsCrew can deliver meaningful savings across the month — particularly on bike and auto rides taken multiple times a day.
            </p>
            <p>
              Bookmark this page and check it before every Rapido booking — bike, auto, cab, or metro feeder. A 30-second check on CouponsCrew regularly saves ₹30–₹100 per ride.
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
            Frequently Asked Questions About Rapido Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a Rapido coupon code?",
              a: "Open the Rapido app, enter your pickup and destination, select your ride mode, and look for the \"Apply Coupon\" field before confirming. Enter your Rapido coupon code from CouponsCrew and tap Apply. The discounted fare will update on your confirmation screen."
            },
            {
              q: "Q2. Why is my Rapido promo code not working?",
              a: "Common reasons include: the code has expired, your minimum fare hasn't been reached, the code is for first-time users only and your account is registered, or the code doesn't apply to your selected ride mode (bike vs auto vs cab). Check the terms on CouponsCrew for the specific Rapido discount code you're using."
            },
            {
              q: "Q3. What is a Rapido first ride coupon?",
              a: "A Rapido first ride coupon is a new-user discount code offering 50%–100% off the first Rapido ride (up to a fare cap). It's the highest-value Rapido offer code available and is one-time use only. Always apply it before confirming your very first Rapido booking."
            },
            {
              q: "Q4. Can I use a Rapido auto coupon code and a Rapido bike coupon code separately?",
              a: "Yes — Rapido auto coupon codes and Rapido bike coupon codes are separate and apply to their respective ride modes. Apply the appropriate code based on which ride mode you're booking."
            },
            {
              q: "Q5. What is a Rapido metro coupon?",
              a: "A Rapido metro coupon is a discount code applying to Rapido's metro feeder rides — short trips connecting metro stations to your final destination. These codes offer flat rupee discounts on feeder ride fares, making the last-mile leg of a metro commute even cheaper."
            },
            {
              q: "Q6. In which cities does Rapido operate?",
              a: "Rapido operates in 100+ cities across India, including Bengaluru, Delhi, Hyderabad, Chennai, Kolkata, Pune, Jaipur, Lucknow, Indore, Surat, Chandigarh, Guwahati, Patna, Ranchi, Trichy, Vijayawada, and Visakhapatnam, among many others. Check the Rapido app for the latest city list."
            },
            {
              q: "Q7. Is Rapido available for outstation trips?",
              a: "Rapido's core service covers intra-city bike, auto, and cab rides. For outstation trips, cab platforms like Ola or Uber may be more suitable. Check the Rapido app for current outstation availability in your city."
            },
            {
              q: "Q8. How do I become a Rapido Captain?",
              a: "Download the Rapido Captain app, complete the registration with your driving licence and vehicle details, and go through the onboarding process. No upfront fee is required. Rapido Captains can start accepting rides once onboarding is verified."
            },
            {
              q: "Q9. Are Rapido coupon codes available for existing users?",
              a: "Yes. While the highest-value Rapido first ride coupons are for new users, Rapido regularly offers Rapido discount codes for existing users through app notifications, festive campaigns, referral programmes, and bank/UPI payment partnerships. CouponsCrew lists both new-user and all-user Rapido promo codes."
            },
            {
              q: "Q10. Does Rapido charge surge pricing?",
              a: "Rapido's bike taxi service is known for minimal surge pricing compared to cab platforms. Fares on bike rides remain relatively stable even during peak hours and rain. Rapido auto and cab fares may see moderate increases during high-demand periods."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Rapido Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Rapido First Ride", "Rapido Auto Coupons", "Rapido Bike Promo", "Rapido Metro Feeder", "UPI Cashback Ride", "Rapido vs Ola", "Rapido App Offers", "Daily Commute Savings"].map(tag => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm hover:bg-[#5B4FBE] hover:text-[#5B4FBE] transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Rapido Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "First Ride 50% Off", sub: "App-exclusive Rapido first ride coupon for new users" },
              { heading: "Rapido Auto Flat Off", sub: "Save up to ₹40 on auto bookings during peak hours" },
              { heading: "Metro Feeder Discount", sub: "Flat ₹15 off last-mile metro station feeder rides" },
              { heading: "UPI Cashback Special", sub: "Extra savings when paying via GPay, PhonePe, or BHIM" },
              { heading: "Weekend Ride Pass", sub: "Discounted multi-ride bundles for regular commuters" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">R</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Rapido deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
          <div className="bg-white rounded-3xl border border-[#EFEFE0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A1A]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#8A7000]">{activeModalCoupon.code}</span> at Rapido checkout for instant discounts.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#FFFDF5] border border-[#EFEFE0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
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
                className="w-full bg-[#000000] hover:bg-[#222222] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Rapido</span>
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
