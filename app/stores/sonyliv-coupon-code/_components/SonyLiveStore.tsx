'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Sparkles,
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
import { Coupon, SONYLIVE_COUPONS } from './sonyliveCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.sonyliv.com';

export default function SonyLiveStore() {
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

  const coupons: Coupon[] = SONYLIVE_COUPONS;

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
      q: 'How do I redeem a SonyLiv coupon code or offer?',
      a: 'To use a SonyLiv coupon code or offer, browse the verified deals here on CouponsCrew and click "Get Deal" on the offer you want. For no-code deals, this takes you directly to SonyLiv where you can choose a subscription plan and the discounted pricing or bonus period is reflected at the payment step. If a specific code is listed, copy it and paste it into the promo code field during checkout on the SonyLiv website or app.'
    },
    {
      q: 'Is there a free plan on SonyLiv?',
      a: 'Yes. SonyLiv offers a free, ad-supported tier that gives access to a selection of shows and content without a paid subscription. Premium content such as certain originals, early episodes, ad-light viewing, and live sports access is generally reserved for paid subscription plans. Exact free-tier content availability can change over time, so it is worth checking the app for the current lineup.'
    },
    {
      q: 'Can I watch SonyLiv on my TV, mobile, and web browser?',
      a: 'Yes. SonyLiv is available across mobile apps (Android and iOS), a website you can stream from on desktop or laptop browsers, and on most Smart TVs and TV streaming devices through dedicated apps. Some subscription plans are priced specifically for mobile-only viewing, so check the plan details before subscribing if you plan to watch mainly on a phone.'
    },
    {
      q: 'Why is my SonyLiv coupon code or offer not applying?',
      a: 'An offer may not apply if it has expired, if it is restricted to new subscribers only, if it is valid for a specific plan (for example annual but not monthly), or if it was tied to a limited-time promotional window that has since ended. Always check the terms mentioned alongside each offer on this page before proceeding to payment.'
    },
    {
      q: 'Can I cancel my SonyLiv subscription anytime?',
      a: 'SonyLiv subscriptions are generally set up to auto-renew, and subscribers can typically manage or cancel auto-renewal from their account settings or from the app store/platform they subscribed through (for example Google Play or the App Store) before the next billing cycle. Refund and cancellation terms can vary by plan and by the platform used to subscribe, so it is best to check the current policy on SonyLiv directly.'
    },
    {
      q: 'Do SonyLiv offers work for both new and existing subscribers?',
      a: 'It depends on the specific offer. Some discounts on this page are aimed at new subscribers signing up for the first time, while others — such as seasonal pricing on annual plans — are open to existing subscribers renewing their plan as well. Each deal card on this page notes its user eligibility so you know before you click through.'
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
            <span className="text-[#5B4FBE] font-semibold">SonyLiv Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/sonylive-logo_xmvm0e.webp"
                      alt="SonyLiv Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">SonyLiv Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Video Streaming & Entertainment
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified SonyLIV coupon codes and SonyLIV promo codes at Maxiku Offers. Save up to 50% OFF Premium annual plans, get 2 extra months FREE, enjoy 25% OFF Mobile plans, and stream live sports, movies, web series, and Sony originals for less.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> Subscription Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Offers Reviewed Daily
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
                  <span>Visit SonyLiv</span>
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

            {/* Simple Styled Panel (Right 5 Columns) — desktop only, no promo banner image available */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center text-white p-8 text-center gap-5">
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-20px] w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg relative z-10">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/sonylive-logo_xmvm0e.webp"
                  alt="SonyLiv"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="font-extrabold text-xl tracking-tight">Stream More, Pay Less</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Save on SonyLiv subscription plans with verified offers updated regularly on CouponsCrew.
                </p>
              </div>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="relative z-10 bg-white hover:bg-gray-100 text-[#5B4FBE] px-6 py-3 rounded-xl text-xs font-black transition-all cursor-pointer"
              >
                Explore Plans
              </a>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Active</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Subscription Offers</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Multiple Plans</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Mobile to Premium</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">SonyLiv Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified SonyLiv subscription offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "").replace(" OFF", "").replace("EXTRA ", "") : "25%"}
                        </span>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          {coupon.badge && coupon.badge.includes('FREE') ? 'BONUS' : 'OFF'}
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
                                <span>Valid on select SonyLiv subscription plans as noted in the offer.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Pricing and discount may vary by plan duration (monthly vs annual).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Offer applied automatically at the payment step on SonyLiv.</span>
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
                <span>The Story Behind SonyLiv</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               SonyLIV is Sony Pictures Networks India's OTT platform, launched in 2013 — one of the earliest streaming services in India. It carries Sony's full broadcast network content (Sony Entertainment Television, Sony SAB, Sony Sports, LIV channels) alongside original web series, international shows, and live sports streaming including cricket, WWE, and UEFA club football.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               The platform is available on web, Android, iOS, smart TVs, Amazon Fire Stick, and Apple TV. Sonyliv live streaming covers both scheduled sports and news channels — including access to sony sports live for cricket and football — which distinguishes it from purely on-demand OTT competitors.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               A sonyliv coupon code applied at subscription checkout works on both new subscriptions and renewals in most cases, though new-user-specific codes are more common. The Annual Premium plan at ₹1,499/year is where a discount code gives the most absolute savings.
              </p>

              

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit SonyLiv</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">SonyLiv Subscription Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Premium & Mobile annual plans
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Subscribe Now
              </a>
            </div>

            {/* Sidebar Card 3: Plan Highlights */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                SonyLiv Plan Highlights
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Mobile Plan</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Premium Plan</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Premium + Sports</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Annual Plans</span>
                  <span className="text-[#FF5722] font-bold">Bonus Months</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Free Ad-Supported Tier</span>
                  <span className="text-[#FF5722] font-bold">₹0</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at SonyLiv */}
            {/* Sidebar Card: SonyLIV Plans, Packages and Offers */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    SonyLIV Plans, Packages and Offers
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Beyond the three core plans, SonyLIV runs additional offers through telecom and broadband partners:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Telecom Bundles</span>
        <span>Jio, Airtel, and Vi have periodically bundled SonyLIV access with postpaid and prepaid recharges. These aren't always listed on the sonyliv website — check your telecom provider's app for active OTT bundle offers. These are sometimes the cheapest route to SonyLIV Premium, particularly on annual bundles.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Broadband Bundles</span>
        <span>Some ISPs include SonyLIV in their broadband packages. ACT Fibernet and Hathway have run these in the past. Worth checking at the time of your broadband renewal or new connection.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Smart TV Offers</span>
        <span>First-time SonyLIV activation on certain Sony Bravia or partner smart TV models has come with free trial or discounted subscription periods. These are model and region-specific.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Credit Card and Wallet Offers</span>
        <span>Banks and payment wallets (HDFC, Axis, Amazon Pay) periodically run cashback on OTT subscription payments. This stacks on top of a sonyliv offer code — the code reduces the subscription price, the cashback applies on what you pay.</span>
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
          SonyLIV Coupon Code: Save on Mobile, Monthly & Annual Subscriptions
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            If you're paying full price for a SonyLIV subscription, you're likely paying more than you need to. A working sonyliv coupon code at checkout can cut the annual plan price down to a point where it competes comfortably with every other OTT platform on the market — and SonyLIV's sports and originals library makes that a reasonable trade.
          </p>

          <p>
            This page covers verified sonyliv discount codes, current plan pricing, how the subscription tiers compare, and what to watch once you're in. Check the deals table first if you just need a code, or scroll to the plan comparison section if you're still deciding which tier to go for.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      SonyLIV Subscription Plans Compared: Mobile and Premium
    </h3>
    <p>
      SonyLIV currently offers three plans. The right one depends on how many people are watching, on which devices, and how much sports and live content matters to you.
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">SonyLIV Plan Comparison Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Mobile Only</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">LIV Premium (Monthly)</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">LIV Premium (Annual)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            {
              category: 'Subscription Cost',
              discount: '₹699/year',
              highlights: '₹399/month',
              userType: '₹1,499/year'
            },
            {
              category: 'Validity',
              discount: '12 Months',
              highlights: '1 Month',
              userType: '12 Months'
            },
            {
              category: 'Video Quality',
              discount: 'HD (720p)',
              highlights: '4K UHD + Dolby Atmos',
              userType: '4K UHD + Dolby Atmos'
            },
            {
              category: 'Simultaneous Screens',
              discount: '1 (Mobile only)',
              highlights: '1',
              userType: '2'
            },
            {
              category: 'Devices (Login)',
              discount: '1',
              highlights: '5',
              userType: '5'
            },
            {
              category: 'Offline Download',
              discount: 'Yes',
              highlights: 'Yes',
              userType: 'Yes'
            },
            {
              category: 'Ads',
              discount: 'No ads (except live/reality)',
              highlights: 'No ads (except live/reality)',
              userType: 'No ads (except live/reality)'
            },
            {
              category: 'Best For',
              discount: 'Solo mobile viewers on a budget',
              highlights: 'Casual or short-term viewers',
              userType: 'Families and sports fans'
            }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.category}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.discount}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
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
    <p>
      <strong className="text-[#2C2C40]">Which plan makes sense:</strong>
    </p>
    <p>
      The Mobile Only plan at ₹699/year works out to under ₹60/month — the cheapest per-month rate on the platform. If you watch primarily on a phone and don't need 4K or a second screen, this is the most cost-efficient option. A sonyliv promo code here saves the most on a percentage basis since the base price is already low.
    </p>
    <p>
      The LIV Premium Monthly at ₹399/month makes sense if you're subscribing for a specific event — IPL season, a WWE pay-per-view window, or the UEFA Champions League knockout rounds — and don't plan to stay subscribed year-round. No long-term commitment, cancel anytime.
    </p>
    <p>
      The LIV Premium Annual at ₹1,499/year is the best value for anyone watching regularly. It works out to ₹125/month, compared to ₹399/month on the monthly plan. A sonyliv discount code applied here gives the highest absolute rupee saving — even a flat ₹200 off changes the effective monthly cost meaningfully.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      SonyLIV Premium: WWE, Anime, and Korean Drama
    </h3>
    <p>
      SonyLIV's content library beyond sports and Indian soaps is underrated. Three categories worth knowing about if you're deciding whether the Premium plan justifies itself:
    </p>
    <p>
      <strong className="text-[#2C2C40]">WWE: </strong>
      SonyLIV has the exclusive India streaming rights for WWE content — Raw, SmackDown, NXT, and all pay-per-view events including WrestleMania and Royal Rumble. For WWE fans in India, SonyLIV is the only legal streaming option. Sony sports live coverage here is near-real-time for PPV events.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Anime: </strong>
      SonyLIV has built out an anime catalogue that includes titles like Demon Slayer, Jujutsu Kaisen, One Piece, and Bleach. It's not the widest anime library on any Indian platform, but it's growing and the titles it has are major ones. Dubbed and subbed versions are available for most.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Korean Drama (K-Drama): </strong>
      SonyLIV has added a K-drama catalogue alongside its main content, covering popular titles with subtitles. The selection updates regularly.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Sony LIV Shows (Indian Originals): </strong>
      Sony liv shows from the originals slate include crime thrillers, political dramas, and anthology series. Scam 1992 remains the platform's most-watched original. Other originals in the crime and thriller genre have followed a similar format and audience response.
    </p>
    <p>
      <strong className="text-[#2C2C40]">LIV Aaj Tak: </strong>
      Liv Aaj Tak refers to the live streaming of Aaj Tak news channel available through SonyLIV's live TV section. Subscribers can access live news alongside entertainment and sports content in one app.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      SonyLIV IPL 2026: How to Watch Cricket Free + Premium Bundle
    </h3>
    <p>
      Cricket is SonyLIV's strongest content draw during IPL season. IPL 2026 streaming on SonyLIV follows the same structure as prior years — the platform holds co-streaming rights alongside JioHotstar for certain matches (rights arrangements may vary; verify the current season's broadcasting rights before subscribing specifically for IPL).
    </p>
    <p>
      <strong className="text-[#2C2C40]">Free vs Premium for cricket: </strong>
      Some cricket content on SonyLIV is accessible with ads on free accounts. Live IPL matches at full quality and without interruption require a Premium subscription. The Mobile plan covers live streaming but at HD (720p) quality on one device.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Best plan for cricket viewers: </strong>
      The Annual Premium at ₹1,499/year covers the full IPL season plus the rest of the year's cricket calendar (bilateral series, ICC events where rights apply) and WWE. If you're subscribing primarily for IPL and staying for the year, this is the right plan. Apply a sonyliv coupon code here for the best effective price.
    </p>
    <p>
      <strong className="text-[#2C2C40]">How to watch on TV: </strong>
      SonyLIV streams on Android TV, Apple TV, Amazon Fire Stick, and most smart TV browsers. For the clearest 4K live cricket experience, an HDMI-connected Fire Stick or Android TV box on a stable broadband connection is the most reliable setup.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      SonyLIV vs JioHotstar vs Zee5: OTT Comparison
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">OTT Platform Comparison Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">SonyLIV</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">JioHotstar</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Zee5</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            {
              category: 'Starting Price',
              discount: '₹699/year (Mobile)',
              highlights: '₹79/month (Mobile)',
              userType: '₹89/month (Kidz)'
            },
            {
              category: 'Premium Annual Plan',
              discount: '₹1,499/year',
              highlights: '₹2,199/year',
              userType: '₹1,499/year'
            },
            {
              category: 'Video Quality',
              discount: '4K UHD',
              highlights: '4K UHD',
              userType: 'HD/Full HD'
            },
            {
              category: 'Simultaneous Screens',
              discount: '1 to 2 (plan dependent)',
              highlights: '2 to 4 (plan dependent)',
              userType: '2'
            },
            {
              category: 'Sports Coverage',
              discount: 'WWE, UEFA, Cricket',
              highlights: 'IPL, ICC Cricket, Football',
              userType: 'Limited'
            },
            {
              category: 'Content Strength',
              discount: 'Indian Originals and Sports',
              highlights: 'Disney, Marvel, HBO, Cricket',
              userType: 'Regional Content (12+ languages)'
            },
            {
              category: 'Ads',
              discount: 'No ads (except live sports)',
              highlights: 'Ad-free on Premium',
              userType: 'Ads on lower tiers'
            },
            {
              category: 'Regional Content',
              discount: '11+ Indian languages',
              highlights: 'Strong Hindi/English focus',
              userType: 'Best regional library'
            },
            {
              category: 'International Shows',
              discount: 'Limited',
              highlights: 'Extensive (HBO, Marvel)',
              userType: 'Moderate'
            },
            {
              category: 'Best For',
              discount: 'Sports fans and thriller lovers',
              highlights: 'Cricket and Hollywood content',
              userType: 'Regional entertainment'
            }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.category}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.discount}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
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
    <p>
      <strong className="text-[#2C2C40]">How to choose:</strong>
    </p>
    <p>
      Go with SonyLIV if your priority is WWE, UEFA football, cricket alongside Sony's originals, or you want the lowest annual rate for a full-featured plan. The ₹1,499/year Premium Annual — especially with a sonyliv discount code — is the most competitively priced Premium OTT plan in this set.
    </p>
    <p>
      Go with JioHotstar if IPL and ICC cricket are the primary draw, or if Disney, Marvel, and HBO content matters to your household. The annual plan is the most expensive of the three, but the content depth justifies it for mixed households.
    </p>
    <p>
      Go with Zee5 if regional language content is the priority. Zee5's library across Bengali, Tamil, Telugu, Marathi, and other languages is the strongest of the three platforms.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      SonyLIV Sale Calendar: When to Look for the Best Promo Codes
    </h3>
    <p>
      OTT platforms don't follow the same retail sale calendar as shopping apps, but SonyLIV's promotions do cluster around predictable moments:
    </p>
    <p>
      <strong className="text-[#2C2C40]">IPL Season (March–May): </strong>
      The highest-demand subscription period for SonyLIV. New-user sonyliv promo codes are most aggressively pushed here to capture cricket viewers. Existing subscribers sometimes get renewal discounts to prevent churn during the season.
    </p>
    <p>
      <strong className="text-[#2C2C40]">WWE WrestleMania (March–April): </strong>
      WWE's flagship event is a secondary subscription trigger. SonyLIV occasionally runs short-window codes around the event date.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Republic Day and Independence Day (January 26, August 15): </strong>
      Short-duration flat-discount codes, usually valid for a few days. Worth checking the deals table around these dates.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Diwali / Festive Season (October–November): </strong>
      Festival promotions on annual plans. These tend to be the deepest discount windows outside of IPL for the Annual Premium plan.
    </p>
    <p>
      <strong className="text-[#2C2C40]">New Year (January 1): </strong>
      Platform-wide codes for the first week of January. Annual plan codes during this window have historically been among the most generous.
    </p>
    <p>
      <strong className="text-[#2C2C40]">End of cricket season (September–October): </strong>
      Some telecom bundles and cashback offers activate here as platforms try to retain subscribers outside the peak cricket window.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a SonyLIV Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Go to sonyliv.com or open the SonyLIV app and tap Subscribe.",
                "Select your plan — Mobile Only, LIV Premium Monthly, or LIV Premium Annual.",
                "On the payment page, look for the Have a Promo Code? or Apply Coupon field.",
                "Enter your sonyliv coupon code exactly as listed — codes are case-sensitive.",
                "Confirm the discounted price shows before completing payment.",
                "Pay via UPI, credit/debit card, net banking, or wallet.",
                "If the code isn't applying, the most common reasons are: the code is for new users only and your account has a prior subscription history, the code is plan-specific (an annual plan code won't apply on monthly), or the offer has expired. Check the deal card terms on this page before trying the code."
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
              Saving Tips for SonyLIV Subscribers
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Go annual over monthly if you watch regularly: </strong>
              The Monthly Premium at ₹399/month adds up to ₹4,788/year — more than three times the Annual Premium price of ₹1,499. Even without a sonyliv coupon code, switching to annual saves significantly. With a code, the gap widens further.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check your telecom provider before subscribing directly: </strong>
              Jio, Airtel, and Vi have bundled SonyLIV at points where the effective cost of the OTT subscription was near zero. If a bundle is available on your existing plan, use it rather than buying a standalone subscription.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Stack a bank cashback with a promo code: </strong>
              A sonyliv offer code reduces the subscription price; a credit card or wallet cashback offer then applies on what you pay. These run independently — the cashback triggers on the transaction, not the base plan price.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Use the monthly plan for event-only viewing: </strong>
              If you're subscribing specifically for WrestleMania, a specific cricket series, or a K-drama that just dropped, the Monthly Premium at ₹399 is cleaner than committing to annual. Cancel before the next billing cycle.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Share the Annual Premium across two screens: </strong>
              The Annual Premium plan supports two simultaneous screens on up to five logged-in devices. Splitting the ₹1,499 cost between two people who both use it brings the per-person annual cost well below any other plan on the market.
            </p>
          </div>

        

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar OTT Platforms Worth Considering
            </h3>

            <p>
              <strong className="text-[#2C2C40]">JioHotstar: </strong>
              Strongest for IPL and ICC cricket, Disney, Marvel, and HBO content. Premium annual plan is the most expensive of the mainstream Indian OTT platforms but has the widest international content library.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Zee5: </strong>
              Best regional language library across 12+ languages. Weaker on sports; stronger than SonyLIV for non-Hindi Indian language content. Annual plan is price-equivalent to SonyLIV Premium.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Amazon Prime Video: </strong>
              International series, Amazon Originals, and Indian content. Included with Amazon Prime membership, which also covers shipping and music. Less sports-focused than SonyLIV.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Netflix India: </strong>
              Strongest for international originals and films. No live sports. The most expensive standalone OTT plan in India but the most recognised international content library.
            </p>

            <p>
              <strong className="text-[#2C2C40]">MX Player: </strong>
              Free ad-supported streaming with a wide catalogue of older Hindi and regional content. No live sports at the level SonyLIV covers.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save on Every SonyLIV Plan with CouponsCrew
            </h3>

            <p>
              Every sonyliv coupon code on this page is verified before it goes live. The deals table at the top updates regularly — bookmark this page and check it before subscribing or renewing, whether you're picking up a monthly plan for IPL season or locking in an annual subscription for the full year.
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
                q: "What is a SonyLIV coupon code and how do I apply it?",
                a: "A sonyliv coupon code is a discount code that reduces the price of a SonyLIV subscription at checkout. Go to sonyliv.com, select your plan, and enter the code in the promo code field on the payment page before completing the transaction. Confirm the discounted price shows before paying. Codes are case-sensitive."
              },
              {
                q: "Which SonyLIV plan is best for cricket and IPL?",
                a: "The Annual Premium plan at ₹1,499/year covers live cricket at 4K UHD on two simultaneous screens. For a single viewer on mobile, the Mobile Only plan starting at ₹699/year also covers live cricket at HD quality. If you're subscribing primarily for IPL and plan to use the platform year-round, the Annual Premium gives the best per-month value, particularly with a sonyliv discount code applied."
              },
              {
                q: "Can I watch SonyLIV on a TV?",
                a: "Yes. SonyLIV is available on Android TV, Apple TV, Amazon Fire Stick, and most smart TV browsers. The Mobile Only plan restricts viewing to mobile devices — it doesn't work on TVs. Premium plans (monthly and annual) support TV viewing."
              },
              {
                q: "What is the difference between SonyLIV Mobile and Premium plans?",
                a: "The Mobile Only plan (starting at ₹699/year) is restricted to mobile devices at HD quality. Premium plans (₹399/month or ₹1,499/year) support 4K UHD + Dolby Atmos, multiple screens, and viewing on TVs, laptops, and tablets. Both include offline download and no ads except on live sports and reality content."
              },
              {
                q: "Does SonyLIV have WWE content?",
                a: "Yes. SonyLIV holds the exclusive India streaming rights for WWE — Raw, SmackDown, NXT, and all pay-per-view events. For WWE fans in India, SonyLIV Premium is the only legal streaming option for live and on-demand WWE content."
              },
              {
                q: "Is there a free trial for SonyLIV?",
                a: "SonyLIV has offered free trial periods at various points, typically for new users. Trial availability changes — check the sonyliv website or app at signup for current free access options. Some telecom bundles also include SonyLIV access that functions as a de facto trial period."
              },
              {
                q: "Can I watch live news channels on SonyLIV?",
                a: "Yes. SonyLIV's live TV section includes access to news channels including Aaj Tak (liv aaj tak), alongside entertainment and sports channels from the Sony network. Live channel access is available on Premium plans."
              },
              {
                q: "What sports does SonyLIV stream live?",
                a: "SonyLIV covers cricket (bilateral series, some ICC events), WWE, UEFA Champions League and Europa League football, and tennis (at various points). Sony sports live coverage is strongest during the cricket and UEFA seasons. IPL streaming rights are shared with JioHotstar — verify the current season's rights arrangement before subscribing specifically for IPL."
              },
              {
                q: "How do I cancel a SonyLIV subscription?",
                a: "Go to your SonyLIV account settings, tap Subscription, and select Cancel. For subscriptions purchased through Google Play or Apple's App Store, cancellation happens through the respective app store's subscription management, not the SonyLIV app directly. Cancelling before the next billing cycle stops renewal — you retain access until the current period ends."
              },
              {
                q: "Does a SonyLIV promo code work on renewals?",
                a: "Most sonyliv promo codes are targeted at new subscriptions or new users. Some renewal-specific codes do surface during festive periods and IPL season — these are worth checking on this page or in your SonyLIV account notification panel around subscription renewal time."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular SonyLIV Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["SonyLIV Coupons", "Annual Plan Offers", "Mobile Only Plan", "WWE Live Streaming", "Sports Pack Discount", "SonyLIV Renewal Promo", "OTT Bundle Deals", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top SonyLIV Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Annual Premium Plan — ₹1,499/yr", sub: "4K UHD, 2 simultaneous screens, live sports & originals" },
              { heading: "Mobile Only Plan — From ₹699/yr", sub: "HD streaming on mobile devices with full sports & entertainment" },
              { heading: "Monthly Premium Plan — ₹399", sub: "Flexible month-to-month access with full TV and multi-screen support" },
              { heading: "Bank & Wallet Offers", sub: "Extra cashback via select credit cards, UPI apps & digital wallets" },
              { heading: "New User Signup Discount", sub: "Special promotional rate for first-time SonyLIV subscribers" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">S</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get SonyLIV deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at SonyLiv checkout for instant discounts.
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
                <span>Continue to SonyLiv</span>
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
