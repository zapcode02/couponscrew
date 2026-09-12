'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,Sparkles,
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
import { Coupon, FLIXBUS_COUPONS } from './flixbusCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.flixbus.in';

export default function FlixBusStore() {
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

  const coupons: Coupon[] = FLIXBUS_COUPONS;

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
      q: 'How do I use a FlixBus coupon code?',
      a: 'To use a FlixBus coupon code, browse verified codes here on CouponScrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the FlixBus website or app. If it is a deal, simply click "Visit FlixBus" to get the discount auto-applied.'
    },
    {
      q: 'Does FlixBus offer student discounts?',
      a: 'FlixBus has, at various times, offered discounted student fares on eligible routes when booking with a valid student ID or student verification. Availability and the exact discount can vary by route and season, so it is worth checking the current student offer on the FlixBus site or app before booking.'
    },
    {
      q: 'Can I change or cancel a FlixBus booking?',
      a: 'FlixBus generally allows changes or cancellations to a booking, though the options, any applicable fee, and the refund method depend on the fare type you purchased and how close to departure you make the change. Check the manage-booking section of your FlixBus confirmation email or the app for the specific terms that apply to your ticket.'
    },
    {
      q: 'Why is my FlixBus coupon code not working?',
      a: 'A coupon might not work due to route or date exclusions, minimum fare requirements, expiry, or eligibility restrictions (such as new customers or student fares only). Double-check the terms listed with the offer, and make sure the code is entered exactly as shown before completing payment.'
    },
    {
      q: 'Is there a FlixBus loyalty or rewards program?',
      a: 'FlixBus has offered account-based perks and promotional credit at different times in different markets. Creating a free FlixBus account and checking the app is the best way to see any current loyalty perks or saved-fare benefits available in your region.'
    },
    {
      q: 'How often are FlixBus coupons updated?',
      a: 'Our deals team checks FlixBus offers regularly and updates this page as new discounts appear. Expired promotions are filtered out so you only spend time on offers that are actually live.'
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
            <span className="text-[#5B4FBE] font-semibold">FlixBus Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/flixbus-logo_njlixu.webp"
                      alt="FlixBus Logo"
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
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">FlixBus Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Intercity Bus & Coach Travel
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified FlixBus coupon codes and promo codes to save up to 50% OFF intercity bus tickets. Enjoy ₹150 OFF on your first booking, flat 20% OFF app-exclusive deals, ₹100 OFF select routes, plus early-bird discounts across India.
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
                  <span>Visit FlixBus</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only. No promo banner image asset exists for FlixBus, so we reuse the logo in a styled gradient panel instead of fabricating a Cloudinary URL. */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center gap-6 p-8 text-center"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-40px] w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg relative z-10">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/flixbus-logo_njlixu.webp"
                  alt="FlixBus Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative z-10 space-y-2">
                <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <h3 className="text-white font-extrabold text-xl tracking-tight">Intercity Bus Deals</h3>
                <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                  Save on routes across cities with verified FlixBus coupon codes & offers.
                </p>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹2,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">FlixBus Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified FlixBus coupon codes & offers.</p>
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
                                <span>Valid on select intercity bus routes as specified on the FlixBus site or app.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum fare or advance booking window might apply as noted in the offer terms.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers select routes and departure dates; terms may vary by city pair.</span>
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
                <span>About FlixBus India</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               FlixBus is a German mobility company founded in 2013 that operates intercity bus networks across Europe and internationally. The company entered India with a focus on long-distance bus travel — connecting major cities through a standardised fleet and an online-first booking experience.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
               FlixBus in India operates on a tech platform model: the brand handles ticketing, pricing, and customer experience, while partner operators run the buses on the ground. This model has allowed FlixBus to scale intercity routes across India while maintaining consistent booking standards through its website and app.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
               FlixBus India competes in the organised intercity bus segment alongside regional operators, bringing the same app-based booking, assigned seating, and transparent cancellation policies it uses in Europe to Indian routes. For passengers familiar with flix bus EU operations while travelling abroad, the India experience follows the same booking workflow.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit FlixBus</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">FlixBus Route Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Intercity Routes, Student & Early-Bird Fares
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
                Top Offer Categories at FlixBus
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Intercity Routes</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Student Fares</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Early-Bird Booking</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">App-Only Deals</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card: FlixBus App: Everything You Need in One Place */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    FlixBus App: Everything You Need in One Place
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    The FlixBus app is the most efficient way to manage your intercity travel:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Search routes</span>
        <span>and compare fares across dates</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Book and pay</span>
        <span>in one flow without switching to a browser</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Store your ticket digitally</span>
        <span>— no paper required at boarding</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Receive push notifications</span>
        <span>for schedule changes or departure reminders</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Access Manage My Booking</span>
        <span>directly from the app for cancellations or rebooking</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">App-exclusive deals</span>
        <span>are sometimes available — worth checking the app alongside this CouponsCrew page before booking</span>
      </div>
    </li>
  </ul>

  <p className="text-xs font-semibold text-[#4A4A6A] mt-4 pt-3 border-t border-[#E8E8F0]">
    The app is available for free download on Android and iOS. Login with your email or Google account to access booking history and stored tickets.
  </p>
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
          FlixBus Coupon Code: Save on Bus Tickets Across India
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            A verified FlixBus coupon code at checkout is the simplest way to pay less on intercity bus travel in India. CouponsCrew lists active FlixBus discount codes, promo offers, and seasonal deals so you can apply savings directly before confirming your booking — whether you're travelling for work, a weekend trip, or a longer journey.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Latest FlixBus Vouchers, Promo Codes & Coupons for September 2026
    </h3>
    <p>
      CouponsCrew updates this page regularly with working FlixBus deals. Active offers typically include:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Site-wide FlixBus discount codes — apply across all routes and booking dates</li>
      <li>First booking offers — discounts for passengers booking FlixBus for the first time</li>
      <li>Route-specific deals — reduced fares on select intercity routes</li>
      <li>Seasonal promo codes — holiday and festive window discounts</li>
      <li>FlixBus app deals — exclusive codes for bookings made through the FlixBus app</li>
    </ul>
    <p>
      Every code listed on this page is checked before going live. If a code stops working between updates, the deal note will reflect its status — try the next working code on the page.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FlixBus Booking: How It Works
    </h3>
    <p>
      FlixBus online booking is done through the FlixBus India website or the FlixBus app. Here's what the process looks like end to end:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Search and Select: </strong>
      Enter your origin city, destination, travel date, and number of passengers on the FlixBus booking page. The results show available departures, departure times, journey duration, and fare options.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Choose Your Seat: </strong>
      FlixBus operates assigned seating. After selecting a departure, you pick your seat from the available layout — window, aisle, upper deck (where available), or standard.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Apply Your FlixBus Coupon Code: </strong>
      At the checkout stage, enter any active flixbus promo code from this page. The fare updates to reflect the discount before payment is requested.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Receive Your Ticket: </strong>
      FlixBus sends your ticket by email and makes it available in the app. The ticket includes a QR code that the driver or conductor scans at boarding. Physical printing is not required.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Board the Bus: </strong>
      Arrive at the designated FlixBus stop at least 10 minutes before departure. Have your ticket QR code ready — either on your phone screen or printed. FlixBus buses are distinctively green and easy to identify at stops.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FlixBus Schedule and Timetable
    </h3>
    <p>
      The FlixBus schedule is accessible in real time on the FlixBus India website and app. Key things to know:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Search by route and date to see all departures for that day</li>
      <li>The FlixBus timetable shows departure times, journey duration, intermediate stops, and arrival times</li>
      <li>FlixBus operates multiple departures per day on high-demand routes</li>
      <li>Schedule updates and changes are reflected in the app and communicated by email if your booking is affected</li>
    </ul>
    <p>
      If you're planning a trip around a specific travel window, check the timetable a few days before and book early — fares on FlixBus are dynamic, meaning earlier bookings typically cost less than last-minute tickets on the same route.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Services Offered by FlixBus India
    </h3>
    <p>
      FlixBus India provides intercity bus travel as its core service, with a set of consistent standards across routes:
    </p>
    <p>
      <strong className="text-[#2C2C40]">On-Board Features:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Air-conditioned buses across the fleet</li>
      <li>Assigned seating with pre-selected seat options at booking</li>
      <li>Luggage allowance per passenger (check current policy on the FlixBus India website for specific weight and bag limits)</li>
      <li>USB charging points available on most buses</li>
      <li>Wi-Fi on select routes (check route-specific details at booking)</li>
      <li>Onboard restroom facilities on longer routes</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Digital-First Booking:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>FlixBus app for iOS and Android — full booking, seat selection, ticket management, and schedule access in one place</li>
      <li>FlixBus online booking on the website — same functionality as the app for desktop users</li>
      <li>Manage My Booking feature for cancellations, rebooking, and refund requests without calling support</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Partner Booking Channels: </strong>
      FlixBus India tickets are also available through partner agencies and ticket outlets in some cities — useful if you prefer in-person booking or don't have digital payment access.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Tips to Save More on FlixBus India
    </h3>
    <p>
      <strong className="text-[#2C2C40]">1. Book Early: </strong>
      FlixBus uses dynamic pricing — the same seat on the same route costs less when booked weeks in advance than the day before travel. If your dates are confirmed, book as soon as you know your route.
    </p>
    <p>
      <strong className="text-[#2C2C40]">2. Travel Mid-Week: </strong>
      Buses on Tuesdays, Wednesdays, and Thursdays are consistently cheaper than weekend departures on the same routes. If your travel dates are flexible, shifting to a mid-week trip can reduce the fare before any flixbus coupon code even applies.
    </p>
    <p>
      <strong className="text-[#2C2C40]">3. Use a First Booking Code: </strong>
      If you haven't used FlixBus India before, a first-booking discount is often the highest-value offer available. Use it on your longest or most expensive route for maximum savings.
    </p>
    <p>
      <strong className="text-[#2C2C40]">4. Stack a Promo Code on a Low Base Fare: </strong>
      Applying a flixbus discount code to an already-cheap mid-week or early-booking fare gives you the best combined price. Don't wait until a peak-travel date to use a code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">5. Check the FlixBus App for Exclusive Deals: </strong>
      Some FlixBus promo codes are only valid for app bookings. If you've downloaded the app, compare the in-app price with the website price before confirming — the app deal may be lower.
    </p>
    <p>
      <strong className="text-[#2C2C40]">6. Bookmark This CouponsCrew Page: </strong>
      CouponsCrew updates FlixBus codes as new ones go live and removes expired ones. Bookmarking this page means you always have the current working flixbus coupon code ready before you book.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FlixBus vs Other Intercity Bus Services in India
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">FlixBus vs Other Intercity Bus Services in India Comparison</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">FlixBus India</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Traditional Bus Operators</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Private Sleeper Coaches</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { feature: 'Booking Method', flix: 'App and website only', trad: 'Counter, agent, or app', sleeper: 'App, agent, or counter' },
            { feature: 'Assigned Seating', flix: 'Yes — selected at booking', trad: 'Varies by operator', sleeper: 'Yes on most' },
            { feature: 'Cancellation Policy', flix: 'Up to 15 min before departure online', trad: 'Varies widely', sleeper: 'Varies by operator' },
            { feature: 'Fleet Standardisation', flix: 'Consistent (green fleet, air-conditioned)', trad: 'Varies', sleeper: 'Varies' },
            { feature: 'Coupon Code Support', flix: 'Yes — apply at online checkout', trad: 'Rarely', sleeper: 'Occasionally' },
            { feature: 'Ticket Format', flix: 'Digital QR code (no print required)', trad: 'Paper or digital', sleeper: 'Usually paper or PDF' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.feature}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.flix}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.trad}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.sleeper}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      FlixBus India's main advantage over traditional bus booking is the consistency of the online experience — the same booking flow, cancellation policy, and ticket format on every route. For passengers used to flix bus EU travel in Europe, the India workflow is almost identical.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FlixBus Cancellation Policy
    </h3>
    <p>
      Customers can cancel their FlixBus bookings up to 15 minutes before the scheduled departure time via the FlixBus India website, the FlixBus app, partner agencies, or ticket outlets.
    </p>
    <p>
      Cancellations made within this window are processed through the Manage My Booking feature — no need to contact customer support for standard cancellations. The refund is processed according to the applicable refund policy for your booking type.
    </p>
    <p>
      Cancellations made after the 15-minute cutoff before departure are not eligible for a refund under standard policy.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FlixBus Rebooking Policy
    </h3>
    <p>
      To change your departure or arrival destination on an existing FlixBus booking, the process is:
    </p>
    <ol className="list-decimal pl-5 space-y-2">
      <li>Cancel your current booking through Manage My Booking.</li>
      <li>Book a new trip on the route you want.</li>
      <li>If the new trip costs more than your original booking, pay the fare difference. If the new trip is cheaper, a refund applies based on market conditions.</li>
    </ol>
    <p>
      Only one trip can be rescheduled at a time. FlixBus India does not support direct date or destination changes without cancelling the original booking first.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a FlixBus Coupon Code on CouponsCrew</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying a FlixBus promo code at checkout takes under two minutes:</p>
            <div className="space-y-6">
              {[
                "Find an active deal on this page and click Get Code.",
                "The code copies to your clipboard. You'll land on the FlixBus India website or the FlixBus app.",
                "Enter your departure city, destination, travel date, and number of passengers.",
                "Select your preferred bus and seat from the available schedule.",
                "On the checkout or payment page, find the \"Voucher / Promo Code\" field.",
                "Paste the flixbus discount code and click Apply.",
                "The reduced fare updates before you complete payment."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-[#f0f0f0]">
              Tip: Some FlixBus coupon codes apply only to specific routes or travel windows. Read the deal terms on each code here before booking to confirm your route qualifies.
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              FlixBus Refund Policy
            </h3>

            <p>
              If FlixBus cancels your ride or causes a significant delay from the scheduled departure, you may be eligible for further support. Options available through the Manage My Booking feature include:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Reschedule: </strong>
              Reschedule to another available FlixBus departure on the same route, free of charge.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Refund Request: </strong>
              Request a refund, subject to market conditions and the applicable policy for your route.
            </p>

            <p>
              For standard customer-initiated cancellations (not caused by FlixBus), refund eligibility depends on how far in advance the cancellation is made and the fare type booked. Check the terms at the time of booking for specific conditions.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              FlixBus Customer Support
            </h3>

            <p>
              For any inquiries, FlixBus India support is available through:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Email: </strong>
              india@flixbus.com
            </p>

            <p>
              <strong className="text-[#2C2C40]">WhatsApp: </strong>
              +91 11 7127 9879
            </p>

            <p>
              WhatsApp support is the faster channel for booking-related queries, schedule questions, or help with Manage My Booking. Email is suitable for written documentation needs, refund follow-ups, or complaints.
            </p>

            <p>
              The FlixBus app and website also have a Help Centre with answers to the most common booking, cancellation, and refund questions — worth checking before reaching out to support.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Book Smarter with FlixBus & CouponsCrew
            </h3>

            <p>
              FlixBus India is one of the more transparent intercity bus options available — fixed pricing, online booking, assigned seating, and a clear cancellation policy in one place. Use a working flixbus coupon code from CouponsCrew before your next booking to get the best available fare, and bookmark this page so the deal is ready the next time you travel.
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

        {/* FAQs Accordion placed AFTER the Read More button */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "How do I apply a FlixBus coupon code at checkout?",
              a: "After selecting your route, date, and seat on the FlixBus India website or app, you'll reach a checkout or payment page. Enter the flixbus promo code in the voucher field and click Apply — the discounted fare updates before payment is requested."
            },
            {
              q: "Can I use a FlixBus discount code on any route in India?",
              a: "Most site-wide flixbus discount codes apply across all available Indian routes. Some codes are route-specific or apply only to select travel dates — the deal terms on each code on this page confirm the scope."
            },
            {
              q: "Do FlixBus coupon codes expire?",
              a: "Yes. Every code has an end date. CouponsCrew removes expired codes from this page and adds new ones as they go live. If a code isn't working, check the page for an updated deal."
            },
            {
              q: "Can I cancel my FlixBus ticket if my plans change?",
              a: "Yes. FlixBus India allows cancellations up to 15 minutes before scheduled departure via the website, app, or partner outlets. Cancellations after this window are not eligible for a refund under standard policy."
            },
            {
              q: "Does the FlixBus app have exclusive deals not on the website?",
              a: "Sometimes. FlixBus app-exclusive promo codes appear periodically. CouponsCrew lists these when they're available — check this page alongside the app before booking."
            },
            {
              q: "What is the FlixBus luggage policy?",
              a: "FlixBus India allows passengers a standard luggage allowance. Specific weight and size limits are listed at the booking stage and in the Help Centre on the FlixBus website. Oversized luggage may require advance arrangement."
            },
            {
              q: "Is FlixBus available for group bookings in India?",
              a: "FlixBus India supports multiple-passenger bookings through its standard online flow — add the number of passengers at the search stage. For larger group bookings, check the FlixBus India website or contact support via WhatsApp."
            },
            {
              q: "What happens if FlixBus cancels my bus?",
              a: "If FlixBus cancels your ride or causes a significant departure delay, you can use Manage My Booking to either reschedule to another FlixBus departure free of charge or request a refund, subject to market conditions."
            },
            {
              q: "How early should I arrive at the FlixBus stop?",
              a: "FlixBus recommends arriving at the designated stop at least 10 minutes before departure. Have your ticket QR code ready on your phone screen. FlixBus does not hold departures for late passengers."
            },
            {
              q: "Is the FlixBus app available in India?",
              a: "Yes. The FlixBus app is available for free download on Android and iOS in India. It covers full booking, seat selection, ticket management, and schedule access for Indian routes."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular FlixBus Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["FlixBus India Promo", "Intercity Bus Discounts", "App-Exclusive Voucher", "Route-Specific Codes", "Manage My Booking Help", "WhatsApp Support", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Bus Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Percentage Off Bus Fares", sub: "Verified coupon codes across major intercity routes in India" },
              { heading: "App-Exclusive Booking Offers", sub: "Special promotional discounts when booking via the FlixBus app" },
              { heading: "Weekend Travel Promo", sub: "Extra savings on Friday and Sunday departure schedules" },
              { heading: "Round Trip Special Deals", sub: "Reduced fares when booking return journeys on selected routes" },
              { heading: "First-Time Rider Discount", sub: "Introductory promotional rates for new accounts on FlixBus India" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">F</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get FlixBus deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at FlixBus checkout for instant discounts.
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
                <span>Continue to FlixBus</span>
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
