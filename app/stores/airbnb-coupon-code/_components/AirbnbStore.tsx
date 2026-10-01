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
import { Coupon, AIRBNB_COUPONS } from './airbnbCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.airbnb.co.in';

export default function AirbnbStore() {
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

  const coupons: Coupon[] = AIRBNB_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Airbnb Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/airbnb-logo_oxypoj.webp"
                      alt="Airbnb Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.7 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Airbnb Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Stays, Experiences & Host Bookings
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Book unique homes, villas & experiences worldwide on Airbnb. Get the best deals with Airbnb coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 60+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Airbnb</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.google.com/preferences/source?q=couponscrew.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#FF385C]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/airbnb-logo_oxypoj.webp"
                alt="Airbnb Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-contain p-16 w-full h-full"
                priority
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">60+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹8,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Airbnb Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Airbnb coupon codes & offers.</p>
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
                        <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "25%"}
                        </span>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          OFF
                        </span>
                      </div>

                      {/* RIGHT WRAPPER: Center Content + Right Action */}
                      <div className="flex-1 flex flex-col lg:flex-row items-stretch">

                        {/* CENTER CONTENT SECTION */}
                        <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.type || "Best Offer"}
                            </span>
                            <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.verified || "Verified"}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                            {coupon.title}
                          </h3>

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
                                <span>Valid on select stays, experiences, and host listings.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum booking value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers select cities and listing categories.</span>
                              </li>
                            </ul>
                          )}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">
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
                <span>The Story Behind Airbnb</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Airbnb was founded in 2008 in San Francisco by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk. The idea began modestly — the founders rented out air mattresses in their apartment during a local design conference when hotels were sold out, calling it "Air Bed and Breakfast." That small experiment grew into a global platform connecting travellers with hosts offering everything from spare rooms to entire villas.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                Airbnb went public on the Nasdaq in December 2020, and today operates in over 220 countries and regions. In India, the platform has grown steadily across metro cities, hill stations, and coastal getaways, with a strong base of Superhost-badge properties known for consistently high guest ratings.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Airbnb</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Airbnb Advance Booking Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 25% OFF on Entire Homes, Villas & Long Stays
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Airbnb
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Entire Homes & Villas</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Unique Stays</span>
                  <span className="text-[#FF5722] font-bold">Flat ₹1,500 Off</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Long-Term Stays</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Experiences</span>
                  <span className="text-[#FF5722] font-bold">Up to 15% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Weekend Getaways</span>
                  <span className="text-[#FF5722] font-bold">Up to 10% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Airbnb */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Airbnb Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Airbnb coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable Airbnb offer without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>We specifically track Indian bank promotions from HDFC and Axis so you always know which card unlocks the maximum instant discount at checkout.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Off-Season Deal Alerts</span>
                    <span>Off-season and last-minute Airbnb discounts are flagged on CouponScrew as soon as they go live, giving you the best chance to grab a lower rate.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>CouponScrew publishes Airbnb sale codes ahead of major travel seasons so you do not have to wait for the sale to start.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using an Airbnb coupon code on CouponScrew is completely free and requires no account or sign-up.</span>
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
                Airbnb Coupon Code India (August 2026): Up to 25% Off + First Booking Discount — Verified
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Airbnb Stays and Experiences Coupon Offers</caption>
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
                    {[
                      {
                        offerType: 'UP TO 25% OFF',
                        category: 'Entire Homes',
                        discount: 'Up to 25% OFF',
                        highlights: 'Advance booking discount, 28+ days ahead.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 2,000',
                        category: 'New User',
                        discount: 'Flat ₹2,000',
                        highlights: 'First booking discount above ₹8,000.',
                        userType: 'New Users'
                      },
                      {
                        offerType: 'UP TO 20% OFF',
                        category: 'Long-Term Stays',
                        discount: 'Up to 20% OFF',
                        highlights: 'Monthly discount on stays of 28+ nights.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 15% OFF',
                        category: 'Experiences',
                        discount: 'Up to 15% OFF',
                        highlights: 'Local activities, cooking classes, city tours.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 10% OFF',
                        category: 'Weekly Stays',
                        discount: 'Up to 10% OFF',
                        highlights: 'Weekly discount on 7+ night bookings.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 1,500',
                        category: 'Unique Stays',
                        discount: 'Flat ₹1,500',
                        highlights: 'Treehouses, cabins, and countryside villas.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 12% OFF',
                        category: 'Bank Offer',
                        discount: 'Up to 12% OFF',
                        highlights: 'Instant discount with HDFC & Axis cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FREE CANCEL',
                        category: 'Flexible Booking',
                        discount: 'Free Cancellation',
                        highlights: 'Cancel up to 24 hours before check-in.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 18% OFF',
                        category: 'Superhost Stays',
                        discount: 'Up to 18% OFF',
                        highlights: 'Select Superhost-badge listings.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 30% OFF',
                        category: 'Off-Season Deals',
                        discount: 'Up to 30% OFF',
                        highlights: 'Off-season and last-minute bookings.',
                        userType: 'All Users'
                      }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                        <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
                          {row.offerType}
                        </td>
                        <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                          {row.category}
                        </td>
                        <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
                          {row.discount}
                        </td>
                        <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
                          {row.highlights}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
                            {row.userType}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

                <p>
                  Looking for a verified Airbnb coupon code before booking your next stay? You have come to the right place. CouponScrew tracks and verifies every active Airbnb discount code, promo code, and advance-booking offer daily — so you always get a working offer, never an expired one. From entire homes and unique stays to Experiences, we cover every category. Copy your code above and start saving on your next Airbnb booking right now.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From an Air Mattress Idea to a Global Travel Platform
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Airbnb in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  Today, Airbnb connects millions of listings across more than 220 countries and regions, spanning entire homes, private rooms, and truly unique stays like treehouses, houseboats, and countryside villas. The platform's Superhost programme recognises hosts who consistently deliver high ratings, fast response times, and low cancellation rates — a useful signal when comparing similarly priced listings.
                </p>

                <p>
                  Add to this the AirCover guest and host protection programme, a growing Experiences marketplace for host-led local activities, and a long-term stays category built for remote workers and extended relocations, and it becomes clear why using an Airbnb coupon code from CouponScrew on top of an already competitive nightly rate is simply the smartest way to book here.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Book on Airbnb
                  </h3>
                  <p>
                    Airbnb covers every kind of trip under one platform. Here is a detailed look at what each section offers and what kind of Airbnb discount codes apply to each.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Entire Homes & Villas — Up to 25% Off: </strong>
                    Entire home listings are Airbnb's single largest category, ranging from compact city apartments to sprawling countryside villas with private pools. Booking at least 28 days ahead consistently unlocks the deepest advance-booking discounts set by hosts, and prices range from ₹2,500 a night for budget city stays to ₹25,000+ a night for premium villas with staff and amenities included.
                    <br />
                    Airbnb coupon codes for entire homes are among the most frequently searched, and for good reason — a 20% advance-booking discount on a ₹15,000-a-night villa across a 4-night trip saves you ₹12,000 in one booking. The best time to apply an Airbnb promo code is well before your travel dates, when both the advance discount and any active platform-wide offer can be stacked.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Unique Stays — Flat ₹1,500 Off: </strong>
                    Treehouses, cabins, houseboats, and countryside farmstays fall under Airbnb's unique stays umbrella, and this category has grown into one of the platform's most searched filters. These listings tend to book out fast during long weekends and festive periods, so applying a coupon code and confirming early is worth doing rather than waiting.
                    <br />
                    An Airbnb discount code applied on a unique stay booking is particularly valuable for special-occasion trips — anniversaries, proposals, or milestone birthdays — where guests are typically willing to spend more but still appreciate the savings.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Long-Term Stays — Up to 20% Off: </strong>
                    Stays of 28 nights or more qualify for a monthly discount set individually by each host, commonly ranging from 10% to 20% off the standard nightly rate. This category has grown significantly with the rise of remote work, letting digital nomads and relocating professionals book a fully furnished home without a traditional rental lease.
                    <br />
                    Combining a long-term stay discount with a bank card offer at checkout can meaningfully reduce the total cost of a month-long booking, especially in higher-cost cities.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Experiences — Up to 15% Off: </strong>
                    Airbnb Experiences are host-led activities — cooking classes, city walking tours, craft workshops, and outdoor adventures — bookable independently of a stay, even in a city you are only visiting for the day. This category is a genuine differentiator versus traditional hotel booking platforms, since it connects travellers directly with local hosts rather than tour operators.
                    <br />
                    Airbnb promo codes for Experiences apply on top of the listed activity price, making it an easy way to add a memorable local activity to any trip without a large extra spend.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Weekend & Off-Season Getaways — Up to 30% Off: </strong>
                    Booking off-season dates or last-minute stays within 14 days of check-in frequently surfaces the deepest discounts on the platform, since hosts would rather fill a calendar gap at a lower rate than leave a listing empty. Weekend getaways to hill stations and coastal towns are a consistently popular use case for this category.
                    <br />
                    Airbnb coupon codes apply sitewide across most listing types, so any active code works here regardless of destination.
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an Airbnb Coupon Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using an Airbnb discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Airbnb offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Airbnb page.",
                      "Search Your Destination — Go to Airbnb and search your destination, dates, and guest count. Filter by advance-booking or unique-stay listings if that is what your offer applies to.",
                      "Select Your Listing — Choose your listing and review the host's cancellation policy and price breakdown before proceeding.",
                      "Go to Checkout — Proceed to the reservation page. Find the \"Add promo code\" field in the payment summary section.",
                      "Paste Your Airbnb Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your total immediately.",
                      "Stack Your Bank Card Offer — At the payment step, check for eligible HDFC or Axis card discounts. Apply both. This is the step most guests miss — and it is where you unlock the second layer of savings.",
                      "Confirm Your Booking — Complete payment. You will receive a booking confirmation with host contact details and check-in instructions via email."
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Why Millions of Travellers Choose Airbnb
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">Genuinely Local Stays — Beyond Standard Hotel Rooms: </strong>
                    No hotel chain can match Airbnb's variety of entire homes, unique stays, and neighbourhood-level access. Whether you are travelling with a large family that needs multiple bedrooms and a kitchen, or you want to experience a city like a local resident rather than a tourist, Airbnb has an option most other platforms simply do not offer.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">AirCover — Built-In Protection for Every Booking: </strong>
                    Most booking regrets come from last-minute host cancellations or listings that do not match their description. AirCover exists specifically to solve this, offering a rebooking guarantee, 24-hour safety support, and a check-in guarantee — included automatically with every reservation at no extra cost.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Superhost Programme — A Reliable Quality Signal: </strong>
                    Superhost status is earned through consistently high ratings, fast response times, and low cancellation rates, giving guests a quick way to identify reliable hosts before booking. Combining a Superhost-listing discount with a CouponScrew offer is one of the more dependable ways to get both quality and savings on the same trip.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Flexible Cancellation Options: </strong>
                    Unlike many hotel booking platforms with rigid non-refundable rates, Airbnb hosts can set Flexible, Moderate, or Firm cancellation policies, clearly displayed before you book. Filtering specifically for Flexible-rate listings gives genuinely risk-free planning for trips with uncertain dates.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Long-Term Stays for Remote Work: </strong>
                    The dedicated monthly-stay category, combined with automatic monthly discounts from hosts, has made Airbnb a practical option for remote workers and relocating professionals who need a fully furnished home without signing a traditional lease.
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Book Smarter — Make Every Rupee Count on Airbnb
                  </h3>

                  <p>
                    Every trip you book is an experience worth getting right — and there is no reason to pay the standard rate when a verified discount is available. CouponScrew keeps every active Airbnb coupon code, promo code, and advance-booking offer verified and ready for you, updated daily, completely free. Bookmark this page before your next trip, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                <h2 className="text-2xl font-black text-black mb-8">
                  Frequently Asked Questions About Airbnb Coupon Codes
                </h2>
                {[
                  {
                    q: "What is the best Airbnb coupon code available right now?",
                    a: "The best active Airbnb coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat first-booking discount, while advance bookings on entire homes and long-term stays of 28+ nights carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
                  },
                  {
                    q: "What is Airbnb's cancellation policy?",
                    a: "Cancellation policies are set individually by each host and fall into a few standard tiers — Flexible (full refund up to 24 hours before check-in), Moderate (full refund up to 5 days before check-in), and Firm or Strict (partial refund only, with stricter cutoff windows). The specific policy for a listing is always shown on the listing page and again during checkout before you confirm payment, so it is worth checking before booking non-refundable dates."
                  },
                  {
                    q: "What does AirCover include?",
                    a: "AirCover is Airbnb's built-in protection programme, included free with every booking. For guests, it covers a Booking Protection Guarantee (rebooking or refund if a host cancels last-minute or a listing is materially inaccurate), 24-hour safety support, and a check-in guarantee. For hosts, AirCover includes host damage protection and liability insurance. It does not replace personal travel insurance for trip cancellations or medical emergencies, so it is worth understanding the distinction before travel."
                  },
                  {
                    q: "How do Airbnb service fees work?",
                    a: "Airbnb charges guests a service fee, typically shown as a percentage added on top of the nightly rate and cleaning fee, displayed transparently before you confirm a booking. Hosts also pay a separate host service fee deducted from their payout. The total price shown at checkout already includes the guest service fee, so what you see at the final payment step is what you pay — no hidden charges appear afterward."
                  },
                  {
                    q: "Is there a discount for first-time Airbnb users?",
                    a: "Yes. New users booking their first stay typically qualify for a flat discount on bookings above a minimum value, listed at the top of this page when active. This is separate from any host-level discount for advance or long-term bookings, so both can sometimes be combined depending on the specific promotion terms shown at checkout."
                  },
                  {
                    q: "How much can I save by booking a long-term stay?",
                    a: "Hosts can set an optional weekly discount (for stays of 7+ nights) and monthly discount (for stays of 28+ nights) on their listings, commonly ranging from 10% to 25% off the standard nightly rate. These discounts are set per-listing, not platform-wide, so the exact percentage varies — check the price breakdown on the listing page before booking to see the applied discount."
                  },
                  {
                    q: "Can I use an Airbnb coupon code with a bank card offer?",
                    a: "Yes. Apply your CouponsCrew Airbnb offer during checkout, then pay with an eligible HDFC or Axis Bank card to unlock an additional instant discount. This stacks on top of any advance-booking or long-stay discount already applied by the host, giving you multiple layers of savings on the same reservation."
                  },
                  {
                    q: "What are Airbnb Experiences?",
                    a: "Airbnb Experiences are host-led activities bookable separately from a stay — cooking classes, city walking tours, local craft workshops, and outdoor activities hosted by local experts. They can be booked as a standalone activity in any city, even one you are not staying in via Airbnb, and often carry their own promotional discounts distinct from stay bookings."
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Airbnb Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Airbnb Coupons", "Entire Home Offers", "Unique Stays Deals", "Airbnb Long Stay Sale", "Experiences Discount", "New User Airbnb Offer", "Airbnb Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Airbnb Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Entire Homes — Up to 25% OFF", sub: "Advance booking discount, 28+ days ahead" },
                    { heading: "Flat ₹1,500 Off Unique Stays", sub: "Treehouses, cabins & countryside villas" },
                    { heading: "20% Off Long-Term Stays", sub: "Monthly discount on 28+ night bookings" },
                    { heading: "12% Bank Card Discount", sub: "HDFC, Axis — instant discount at checkout" },
                    { heading: "New User First-Booking Offer", sub: "Flat ₹2,000 off for first-time Airbnb guests" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">A</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Airbnb deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Airbnb checkout for instant discounts.
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
                <span>Continue to Airbnb</span>
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
