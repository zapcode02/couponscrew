'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,Sparkles,
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
import { Coupon, UBER_COUPONS } from './uberCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.uber.com';

export default function UberStore() {
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

  const coupons: Coupon[] = UBER_COUPONS;

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
      q: 'How do I apply an Uber coupon code?',
      a: 'To use an Uber coupon code, browse the verified codes here on CouponsCrew, copy your preferred code by clicking "Copy Code", then open the Uber app, go to your account menu, tap "Wallet" or "Payment", select "Promotions" (or add it during ride/order checkout in the "Add Promo Code" field), and paste the code. If it is a deal, simply click "Visit Uber" to open the app or site with the offer.'
    },
    {
      q: 'Can I use multiple Uber promo codes at once?',
      a: 'No, Uber only allows one active promo code per ride or order. If you add a new code, it typically replaces the previous one. Some promo codes are also restricted to specific ride types (like UberGo or Auto) or to Uber Eats orders only.'
    },
    {
      q: 'Why is my Uber coupon code not working?',
      a: 'A code may fail to apply due to expiry, being restricted to new users only, a minimum fare requirement, city or service-type restrictions (e.g. valid only on Uber Eats, not rides), or because it has already been used once on your account.'
    },
    {
      q: 'Do Uber coupon codes work on Uber Eats too?',
      a: 'Some codes are valid across both rides and Uber Eats, but many promotions are service-specific. Always check the offer description on this page — codes marked "Uber Eats" apply only to food delivery orders, while ride-specific codes apply only to trip fares.'
    },
    {
      q: 'Is there a first-ride discount for new Uber users?',
      a: 'Yes, Uber frequently runs first-ride and first-order promotions for new app users offering a flat discount or percentage off. These are typically applied automatically or via a promo code shown when you sign up — check the current new-user offer on this page.'
    },
    {
      q: 'How often are Uber coupons updated on this page?',
      a: 'Our team checks and refreshes Uber offers regularly. Expired or non-working promotions are removed as soon as they are identified, so the codes shown here reflect what is currently available.'
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
            <span className="text-[#5B4FBE] font-semibold">Uber Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/uber-logo_z21dzq.webp"
                      alt="Uber Logo"
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
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Uber Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Ride-Hailing, Auto & Food Delivery
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Uber coupon codes and Uber promo codes at Maxiku Offers. Save up to 50% OFF rides, get ₹100 OFF your first trip, enjoy 50% OFF your first 3 rides, and save up to 40% OFF Uber Eats food orders across India.
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
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Uber</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only, logo reused since no banner image exists */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#1A1A2E] to-[#3A3A5E] flex-col items-center justify-center p-8 text-center">
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-20px] w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg relative z-10 mb-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/uber-logo_z21dzq.webp"
                  alt="Uber"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-white font-black text-xl relative z-10">Rides, Auto & Uber Eats</h3>
              <p className="text-white/70 text-sm mt-2 relative z-10 max-w-xs">
                One app for on-demand rides and food delivery — save more with verified Uber coupon codes.
              </p>
            </div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Uber Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Uber coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
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
                            {/* Soft Tint Badge using Accent (#FF5722) */}
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
                                <span>Valid on select ride types or Uber Eats orders as specified.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum fare or order value might apply as specified in offer terms.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers select cities and service categories.</span>
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
                <span>About Uber</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Uber launched in India in 2013 and now operates across more than 100 Indian cities. The platform covers everything from everyday city commutes to intercity travel, with service tiers ranging from the budget-friendly Uber Moto to the premium Uber Black. Beyond passenger rides, Uber also runs UberEats (food delivery) and Uber for Business in select markets.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               The app is the primary booking surface — walk-in or phone bookings are not supported. All fare estimates, uber offer code fields, and payment options sit inside the app. Drivers operate as independent contractors, so vehicle quality and ratings vary, but Uber's safety features — live trip sharing, emergency SOS, and in-app support — are consistent across service types.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Uber</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Uber Ride & Eats Savings</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Rides, Auto & Uber Eats Orders
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
                Top Services on Uber
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">UberGo Rides</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Uber Premier</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Uber Auto</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Uber Moto</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Uber Eats</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Uber */}
            {/* Sidebar Card: Ride with Coupons: Getting the Most Out of Uber Promo Codes */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Ride with Coupons: Getting the Most Out of Uber Promo Codes
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    A few things experienced users do consistently to keep their Uber spend down:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Check the Promotions tab first</span>
        <span>Before searching for external codes, open the Uber app → tap your profile → Promotions. Personalised uber offer codes (based on your ride history and inactivity period) often sit there and go unclaimed.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New-user codes stack differently</span>
        <span>If you're signing up fresh or adding a new phone number, the new-user uber promo code usually applies automatically at checkout — but entering an additional referral code can sometimes add a second discount. Test before confirming.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Time your bookings</span>
        <span>Surge pricing disappears at off-peak hours. If the fare looks high, waiting 5–10 minutes can drop it significantly. Applying a coupon on top of a non-surge fare gives you the best combined saving.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Use UberCash top-up offers</span>
        <span>Uber periodically runs cashback deals where topping up ₹500 or ₹1,000 of UberCash gives bonus credits. This isn't a traditional uber coupon code, but it functions as one across future rides.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Match the code to the service</span>
        <span>Codes scoped to UberGo won't apply on Uber Premier. Always check the terms on the deal card — service restrictions are the most common reason a valid code fails at checkout.</span>
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
          Uber Coupon Code: Save on Every Ride in 2025
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Uber runs millions of rides every day across Indian cities, and the right uber coupon code at checkout can take a meaningful chunk off your fare. Whether you're booking an UberGo for a daily commute, an Uber Auto for a short hop, or an Uber Premier for an airport run, active promo codes exist for most service types — you just need to know where to look and how to apply them before the driver arrives.
          </p>

          <p>
            This page tracks verified uber discount codes, current uber offer codes, and category-specific deals across UberGo, Uber Premier, Uber Auto, Uber Moto, UberXL, and Uber Hire. Scroll to the section that matches your trip type or city, or check the deals table below for a quick overview of what's live right now.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Uber Coupon Codes by Service Type
    </h3>
    <p>
      Different service tiers have different pricing floors and different promo structures. Here's what each tier starts from and what kinds of uber offer codes typically apply:
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Uber Service Tiers and Promo Structures</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Service Tier</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Base Fare</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Common Promo Type</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { service: 'UberGo', fare: 'Starts from ₹50', promo: 'First-ride codes, weekday deals' },
            { service: 'Uber Premier', fare: 'Starts from ₹100', promo: 'Airport codes, corporate offers' },
            { service: 'Uber Auto', fare: 'Starts from ₹40', promo: 'New-user codes, city-specific deals' },
            { service: 'Uber Moto', fare: 'Starts from ₹29', promo: 'Flash deals, short-distance offers' },
            { service: 'UberXL', fare: 'Starts from ₹150', promo: 'Group ride discounts' },
            { service: 'Uber Hire', fare: 'Starts from ₹200', promo: 'Hourly rental codes' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.service}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.fare}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.promo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      <strong className="text-[#2C2C40]">UberGo</strong> is the highest-volume service and gets the most active promo codes. If you commute daily, checking for a fresh uber discount code before your first ride of the week makes sense.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Uber Auto (uberauto)</strong> codes are common for new users in metro cities. Auto rides have no surge pricing in most cities, so discount codes give a bigger effective saving per rupee.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Uber Moto</strong> is the cheapest service for solo riders on short routes. Flash deal codes drop fares to ₹29–₹39 for trips under 5 km during off-peak hours.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Uber Hire</strong> is Uber's rental cab option — you book the car by the hour rather than by the trip. Codes for this service are less frequent but tend to offer higher flat discounts on multi-hour bookings.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Functioning of the Uber Mobile Application
    </h3>
    <p>
      The Uber app is where every part of the booking happens — there's no web booking for rides in India.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Booking a ride: </strong>
      Enter pickup and drop locations, pick a service tier, check the fare estimate, apply any uber coupon code, select payment, and confirm. The nearest available driver is assigned automatically.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Scheduled rides: </strong>
      You can book up to 30 days in advance using the Schedule option. Useful for early-morning airport trips where availability in-the-moment is unpredictable.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Live tracking: </strong>
      Once the driver accepts, you get real-time tracking on the map. You can share the trip link with someone else so they can track your ride independently.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Safety features: </strong>
      The app includes an emergency SOS button, trip-sharing, and the option to record audio during a ride (feature availability varies by city and OS version).
    </p>
    <p>
      <strong className="text-[#2C2C40]">Rating and feedback: </strong>
      After every trip, you rate the driver. Consistently low-rated drivers are removed from the platform. You can also report issues — fare discrepancies, route complaints, or lost items — directly from trip history.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Payments: </strong>
      Uber supports UPI, credit and debit cards, net banking, and UberCash. Cash is available in some cities but not all. If you have UberCash balance, it deducts first before other payment methods.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Uber Intercity
    </h3>
    <p>
      Uber Intercity covers point-to-point cab bookings between cities — not shared transport, just a private cab for your group. It's available for select city pairs across India and works as an alternative to buses or trains for shorter intercity distances where flight connectivity doesn't make sense.
    </p>
    <p>
      <strong className="text-[#2C2C40]">How it works: </strong>
      Search for your origin and destination city in the Uber app. If Intercity is available for that route, a service card appears alongside the usual city ride options. Fares are fixed, shown upfront, and include the driver's return toll. You pay at the end of the trip (or prepay by card/UPI depending on your account).
    </p>
    <p>
      <strong className="text-[#2C2C40]">When it makes sense: </strong>
      Routes like Delhi–Chandigarh, Mumbai–Pune, or Bangalore–Mysore are popular Intercity corridors. For distances under 300 km, cab travel is often faster door-to-door than trains once you factor in station transit time.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Uber promo codes for Intercity: </strong>
      Specific uber offer codes for Intercity bookings are less common than city-ride codes but do surface around festival periods and on the app's Promotions tab. Check before confirming — even a flat ₹100–200 off is worth applying on a ₹1,500–₹2,500 intercity fare.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      What is UberCash?
    </h3>
    <p>
      UberCash is Uber's in-app wallet. You load money into it and it deducts automatically before your other payment methods on every ride.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Why use it: </strong>
      It's faster at checkout than UPI or card, it works even when your UPI app is slow, and Uber occasionally runs UberCash-specific promos where topping up gives you bonus credit (effectively a discount on future rides).
    </p>
    <p>
      <strong className="text-[#2C2C40]">How to add UberCash: </strong>
      Go to your Uber app → Payment → Add UberCash. You can load it via UPI, debit card, credit card, or net banking in denominations of ₹100 upward.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UberCash vs promo codes: </strong>
      They're separate. A promo code deducts from the fare first; UberCash then covers whatever remains. You can have both active simultaneously — the code brings the fare down, UberCash pays the balance.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Expiry: </strong>
      UberCash doesn't expire as long as your account stays active. If your account is inactive for an extended period, check your balance before assuming credits are still there.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Cancelling an Uber Ride
    </h3>
    <p>
      Uber allows free cancellation within a short window after confirming a booking — typically two minutes. After that, a cancellation fee applies.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Cancellation fee structure: </strong>
      The fee varies by city and service type but is generally ₹30–₹60 for UberGo and Uber Auto, and higher for premium services. The fee is charged to your default payment method.
    </p>
    <p>
      <strong className="text-[#2C2C40]">When you won't be charged: </strong>
      If the driver hasn't accepted the ride yet, cancellation is usually free regardless of timing. If the driver is taking significantly longer than the estimated arrival and you cancel, Uber may waive the fee — this is assessed case by case.
    </p>
    <p>
      <strong className="text-[#2C2C40]">How to cancel: </strong>
      In the app, tap your current booking → Cancel Ride → select a reason. Reasons matter — reporting a driver who took a wrong route or demanded cash is how the platform identifies and removes bad actors.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Refunds on pre-paid rides: </strong>
      If you paid upfront (by card or UPI) and cancel within the free window, the refund goes back to your original payment method in three to five business days.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Uber Offers Across Indian Cities
    </h3>
    <p>
      Uber's city-level deals vary considerably. Tier-2 cities often get aggressive flat-fare promotions to drive adoption, while metro cities see percentage-off deals targeted at repeat users.
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Uber City-Specific Deals Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">City</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Current Uber Deal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { city: 'Hyderabad', deal: 'Up to 50% off on Uber cab bookings' },
            { city: 'Bengaluru', deal: 'Up to 50% off on Uber cab bookings' },
            { city: 'Mumbai', deal: 'Up to 50% off on Uber cab bookings' },
            { city: 'Amritsar, Kanpur, Chandigarh', deal: 'Uber cab fares starting from ₹49' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.city}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.deal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      City-level offer availability changes. Apply your uber discount code at checkout to confirm the discount is still live for your city.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Uber vs Other Cab Booking Platforms
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Cab Booking Platform Comparison Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Uber</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Rapido</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Ola</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { feature: 'Service Types', uber: 'UberGo, Auto, Moto, Premier, XL, Hire, Intercity', rapido: 'Bike, Auto, Cab', ola: 'Mini, Sedan, Prime, Auto, Bike' },
            { feature: 'Intercity Booking', uber: 'Yes', rapido: 'No', ola: 'Yes' },
            { feature: 'In-app Wallet', uber: 'UberCash', rapido: 'Rapido Wallet', ola: 'Ola Money' },
            { feature: 'Surge Pricing', uber: 'Yes', rapido: 'Limited', ola: 'Yes' },
            { feature: 'New-User Discounts', uber: 'Yes', rapido: 'Yes', ola: 'Yes' },
            { feature: 'Scheduled Rides', uber: 'Yes', rapido: 'No', ola: 'Yes' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.feature}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.uber}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.rapido}
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
                  {row.ola}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      Uber has a wider service range than most Indian cab apps, particularly for Intercity and hourly Hire bookings. For short solo trips, Uber Moto and Rapido Bike are roughly equivalent in price — the deciding factor is usually driver availability in your area.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an Uber Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Open the Uber app and enter your destination.",
                "Select your preferred service — UberGo, Uber Auto, Uber Premier, or whichever fits your trip.",
                "Before confirming the ride, tap Promos or Add Promo Code at the payment screen.",
                "Type or paste your uber promo code exactly as listed — codes are case-sensitive.",
                "Confirm the discount appears in your fare breakdown before tapping Confirm Ride.",
                "Pay using your linked method (UPI, card, or UberCash) — the discount deducts automatically.",
                "If a code doesn't apply, check the eligibility terms. Most uber discount codes are restricted by service type, city, or new-user status."
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
              Uber Sale Calendar: When to Look for the Best Promo Codes
            </h3>

            <p>
              Uber's biggest promotions cluster around predictable calendar moments:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Republic Day & Independence Day (January 26, August 15): </strong>
              Flat-fare and discount code campaigns across most cities.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Diwali and Navratri: </strong>
              Extended promo windows, sometimes two to three weeks before the main date.
            </p>

            <p>
              <strong className="text-[#2C2C40]">New Year's Eve: </strong>
              Surge pricing is likely on the night itself, but Uber often runs early morning and next-day recovery deals.
            </p>

            <p>
              <strong className="text-[#2C2C40]">IPL Season (March–May): </strong>
              City-specific deals in host cities around match nights.
            </p>

            <p>
              <strong className="text-[#2C2C40]">End of month: </strong>
              Uber frequently drops new uber promo codes in the last week of the month, particularly for users who haven't ridden recently.
            </p>

            <p>
              Outside peak dates, the Promotions tab in the app is the most reliable place to find a live uber offer code tailored to your account.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Saving Tips for Regular Uber Users
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Share your trip link instead of booking shared rides: </strong>
              UberShare isn't available in all cities. A cheaper workaround: book an UberGo, share your trip link with someone travelling the same route, and split the cost informally.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check both the app and this page before every ride: </strong>
              Uber's in-app promotions are personalised; external uber coupon codes here are publicly available. Between the two sources, you'll usually find something applicable.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Rate your driver promptly: </strong>
              It sounds unrelated, but accounts with complete trip feedback histories occasionally receive loyalty promo codes from Uber's retention team.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Use UPI for faster checkout: </strong>
              Card payments occasionally fail on surge-priced rides; UPI processes instantly and keeps the fare locked at the confirmed rate.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Book during low-demand windows: </strong>
              Early morning (6–8am) and late afternoon (2–4pm) consistently have lower surge multipliers than morning rush or evening peak.
            </p>
          </div>

         

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Platforms
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Rapido: </strong>
              Strong in bike taxis and auto rides, often cheaper than Uber Moto for short urban distances. No Intercity option.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Ola: </strong>
              Comparable service range to Uber with its own wallet (Ola Money) and loyalty features. Competitive on surge pricing in some corridors.
            </p>

            <p>
              <strong className="text-[#2C2C40]">InDrive: </strong>
              Fare negotiation model where you propose a price and drivers accept or counter. No coupon code system, but useful when surge pricing on Uber and Ola is high.
            </p>

            <p>
              <strong className="text-[#2C2C40]">BluSmart: </strong>
              All-electric fleet, fixed fares, no surge. Available in Delhi NCR and Bangalore. No traditional coupon codes but periodic app-based offers.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save on Every Uber Ride with CouponsCrew
            </h3>

            <p>
              Every uber coupon code on this page is checked before it goes live. The deals table at the top updates regularly — bookmark this page and check it before your next booking, whether it's a daily UberGo commute, a weekend Uber Premier run, or an Uber Intercity trip between cities.
            </p>
            <p>
              Got a code that worked for you? The comments section is open. Codes shared by real users help the whole community save.
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
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "What is an Uber coupon code and how do I apply it?",
                a: "An uber coupon code is an alphanumeric string that reduces your fare when entered in the Promotions field before confirming a booking. Open the Uber app, enter your destination, select a service, then tap Add Promo Code at the payment screen. Type the code exactly — codes are case-sensitive — and confirm the discount shows in your fare breakdown before tapping Confirm Ride."
              },
              {
                q: "Why is my Uber promo code not working?",
                a: "The most common reasons are: the code is restricted to a service type you haven't selected (e.g., an UberGo code won't apply on Uber Premier), the code is for new users only and your account has prior rides, the code has expired, or the code is city-restricted and you're booking in a different city. Check the deal card terms on this page before trying the code."
              },
              {
                q: "Can I use an Uber discount code on Intercity rides?",
                a: "Most standard uber discount codes are scoped to city rides. Intercity-specific codes do exist, typically around festive periods, but they're less frequent. Check the Promotions tab in your app — personalised Intercity codes sometimes appear there even when public codes are not available."
              },
              {
                q: "What is UberCash and is it better than a promo code?",
                a: "UberCash is a preloaded in-app wallet balance. It deducts automatically from every ride — no code required at checkout. Promo codes give one-time discounts; UberCash gives a consistent balance that works across all ride types. They're complementary: a promo code reduces the fare first, then UberCash covers whatever is left."
              },
              {
                q: "Does Uber charge a cancellation fee in India?",
                a: "Yes. If you cancel after the free window (typically two minutes post-booking), a cancellation fee of ₹30–₹60 applies depending on city and service type. If the driver hasn't accepted the ride yet, cancellation is usually free. If a driver is taking significantly longer than estimated, contact Uber support — fees are sometimes waived in these cases."
              },
              {
                q: "Which Uber service is cheapest in India?",
                a: "Uber Moto is the lowest base-fare service (starts from ₹29) for solo riders on short urban routes. Uber Auto (uberauto) starts from ₹40 and has no surge in most cities, making it predictably cheaper than UberGo during peak hours when surge applies."
              },
              {
                q: "How do I get an Uber discount code as a new user?",
                a: "New-user codes are usually applied automatically when you sign up with a fresh mobile number. You can also enter a referral code during signup for an additional discount on your first ride. Some first-ride uber promo codes are also listed on this page — check the deals table at the top."
              },
              {
                q: "What cities does Uber Intercity cover in India?",
                a: "Popular Intercity routes include Delhi–Chandigarh, Delhi–Agra, Mumbai–Pune, Bangalore–Mysore, and Hyderabad–Vijayawada. Route availability expands regularly. Check the Uber app for your specific origin-destination pair — Intercity appears as a service card in the booking flow if the route is covered."
              },
              {
                q: "Can I schedule an Uber ride in advance?",
                a: "Yes. Tap Schedule in the destination entry screen and set a date and time up to 30 days ahead. The app confirms driver assignment closer to the pickup time. Useful for early-morning airport rides where in-the-moment availability is uncertain."
              },
              {
                q: "Is Uber available in Tier-2 and Tier-3 cities in India?",
                a: "Uber operates in over 100 Indian cities including Tier-2 markets like Amritsar, Kanpur, Chandigarh, Coimbatore, and Bhubaneswar. Service type availability varies — smaller cities typically have UberGo and Uber Auto but not Premier or XL. Check the app with your city as the pickup location to see which services are available."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Uber Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Uber Coupons", "UberGo Promo Codes", "Uber Auto Discounts", "Airport Ride Offers", "Uber Intercity Deals", "New User Ride Code", "First Ride Offer", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Uber Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 50% Off First 3 Rides", sub: "New user welcome promo applicable on UberGo & Uber Auto" },
              { heading: "Flat ₹50 Off Airport Rides", sub: "Valid on Uber Premier and UberGo trips to/from major airports" },
              { heading: "20% Off Daily Commute", sub: "Applicable during off-peak hours on regular urban trips" },
              { heading: "Uber Auto & Moto Specials", sub: "Extra savings on short-distance urban hops and bike taxis" },
              { heading: "Bank & UPI Cashback Offers", sub: "Extra savings when paying via select UPI apps or credit cards" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">U</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Uber deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> in the Uber app for instant discounts.
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
              <span>Make sure to paste the code before confirming your ride or order.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Uber</span>
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
