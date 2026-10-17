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
import { Coupon, KLOOK_COUPONS } from './klookCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.klook.com/en-IN/';

export default function KlookStore() {
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

  const coupons: Coupon[] = KLOOK_COUPONS;

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
      q: 'How do I use a Klook promo code?',
      a: '[TODO: how-to answer specific to Klook checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Klook?',
      a: '[TODO: stacking rules specific to Klook]'
    },
    {
      q: 'Why is my Klook promo code not working?',
      a: '[TODO: common reasons a code might fail on Klook]'
    },
    {
      q: 'Where can I find the best Klook offers?',
      a: 'We keep this Klook store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Klook offer free cancellation?',
      a: '[TODO: Klook free cancellation policy details]'
    },
    {
      q: 'How often are Klook coupons updated?',
      a: 'Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.'
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
            <span className="text-[#5B4FBE] font-semibold">Klook Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222459/klook-logo_bkupro.webp"
                      alt="Klook Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Klook Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Klook Coupon Code and Klook Promo Code on your next trip. Enjoy up to ₹8,000 OFF eligible travel experiences and 21% OFF Universal Studios Singapore tickets. Book tours, attractions, cruises, ferry tickets, theme parks, and activities worldwide while paying less with verified Klook offers.
                  </p>
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
                  <span>Visit Klook</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#FF5B00]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222459/klook-logo_bkupro.webp"
                alt="Klook Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">13+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Klook Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Klook coupon codes & offers.</p>
              </div>
            </div>

            {/* Coupons Card List */}
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

          {/* LEFT DISCOUNT SECTION */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#FF5B00] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
            </span>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              OFF
            </span>
          </div>

          {/* RIGHT WRAPPER */}
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
              {coupon.points && coupon.points.length > 0 && (
                <button
                  onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                  className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
                >
                  View Details
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}

              {/* Dynamic Details List */}
              {isExpanded && coupon.points && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  {coupon.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                      <span>{point}</span>
                    </li>
                  ))}
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

           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Klook India: Set Language and Currency First
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>If you land on Klook in another language or currency, switch it at the top of the page. The header has a language and currency selector; for Klook English with prices in rupees, choose EN and INR. Klook's India site is at klook.com/en-IN.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Seeing prices in rupees makes it easier to compare Klook with buying at the venue. At payment, check which currency you're actually being charged in. If it's a foreign currency, your bank may add a foreign exchange markup on top of the price, which can cancel out a small promo code.</span>
      </div>
    </li>
  </ul>
</div>
            

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Klook
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Attractions</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Singapore</span>
                  <span className="text-[#FF5722] font-bold">Up to 21% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Vietnam Experiences</span>
                  <span className="text-[#FF5722] font-bold">Up to 10% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Travel Experiences</span>
                  <span className="text-[#FF5722] font-bold">Up to 10% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Ferry Transfers</span>
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Klook Promo Code
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Sign in on the Klook app or klook.com.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>To save a code first, go to your account, open Promo codes, enter the code and redeem it.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Choose your activity, date, ticket type and quantity, then go to checkout.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>In the Discounts section, select your promo code, or enter it.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Check the subtotal drops before you pay.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Read the cancellation line on the booking page. Many attraction tickets can't be cancelled.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>If a Klook discount code fails, the usual reasons are: the activity isn't covered, the booking is below the minimum spend, the code is for new users only, or someone else has already used a shared code.</span>
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

      {/* Main Content Column */}
      <div className="prose max-w-none">
        
        {/* Main Title - Replaced H1 with Styled Paragraph */}
        <p className="text-3xl font-black text-black mb-10 leading-tight italic">
          Klook Coupon Code: How to Save on Attractions, Passes and Cruises from India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Klook coupon code is a promo code that takes money off a Klook booking, such as a theme park ticket, a city pass, airport transfer or cruise. Klook codes are usually tied to a destination, an activity or a minimum spend, so the right code depends on what you're booking. On many international attractions, choosing the correct ticket type saves more than the code.
          </p>

          <p className="italic text-sm text-gray-500">
            Last checked: 17 October 2026.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Klook Offers and Discount List</caption>
    <thead>
      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Offer Type
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Discount / Price
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">
          Offer Highlights
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          User Eligibility / Terms
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#E8E8F0]">
      {[
        {
          offerType: 'EXTRA 10% OFF',
          discount: 'Extra 10% OFF',
          highlights: 'Discover top attractions and activities across Vietnam with extra savings.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE UP TO ₹8,000',
          discount: 'Up to ₹8,000 OFF',
          highlights: 'Save on 7,399+ global experiences, tours, and combo attraction packages.',
          eligibility: 'Participating Destinations'
        },
        {
          offerType: 'SAVE AT LEAST 10%',
          discount: 'Min 10% OFF',
          highlights: 'Discounts on popular tours, activities, and sightseeing worldwide.',
          eligibility: 'Selected Experiences'
        },
        {
          offerType: 'SAVE 21%',
          discount: 'From ₹5,303 (21% OFF)',
          highlights: 'Universal Studios Singapore admission tickets with instant confirmation.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹408',
          discount: 'From ₹4,696 (Save ₹408)',
          highlights: 'Halloween Horror Nights at Universal Studios Singapore.',
          eligibility: 'Limited Time Deal'
        },
        {
          offerType: 'SAVE ₹142',
          discount: 'From ₹2,707 (Save ₹142)',
          highlights: 'Nha Trang Floating Bar Boat Party & island-hopping tour in Vietnam.',
          eligibility: 'Includes Hotel Pickup'
        },
        {
          offerType: 'SAVE 10%',
          discount: '10% OFF',
          highlights: 'Phuket to Phi Phi Island & Krabi ferry tickets with instant confirmation.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 8%',
          discount: 'From ₹903 (8% OFF)',
          highlights: 'Marina Bay Sands SkyPark tickets in Singapore with same-day booking.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 25%',
          discount: 'From ₹2,000 (25% OFF)',
          highlights: 'Buy 4 tickets for White Orchid River Cruise in Bangkok.',
          eligibility: 'Min. 4 Tickets'
        },
        {
          offerType: 'FROM ₹603',
          discount: 'From ₹603 (Save 7%)',
          highlights: 'Vietnam Railways train tickets between Hanoi and Ninh Binh.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹469',
          discount: 'From ₹469 (Save 6%)',
          highlights: 'VinWonders Phu Quoc family-friendly theme park tickets.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FLIGHT COMBOS',
          discount: 'Combo Savings',
          highlights: 'Reserve flights along with attractions & local experiences together.',
          eligibility: 'All Users'
        },
        {
          offerType: 'ATTRACTION DEALS',
          discount: 'Special Prices',
          highlights: 'Disneyland and Aquaria ticket deals with instant confirmation.',
          eligibility: 'All Users'
        }
      ].map((row, i) => (
        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
          <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
            {row.offerType}
          </td>
          <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
            {row.discount}
          </td>
          <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
            {row.highlights}
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
              {row.eligibility}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Where Real Klook Codes Come From
          </p>

          <p>
            Klook doesn't run one sitewide code. Most working codes are narrow: one destination, one attraction or one payment method, often with a minimum spend and a short expiry. Here's how Klook savings work.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Saving</th>
                  <th className="p-4 font-bold">How it works</th>
                  <th className="p-4 font-bold">Watch for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Promo codes</td>
                  <td className="p-4">Entered in your account or at checkout</td>
                  <td className="p-4">Minimum spend, destination limits, expiry</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Klook credits</td>
                  <td className="p-4">Earned after you complete an activity, plus for reviews; 100 credits = US$1</td>
                  <td className="p-4">Applied to a future booking</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Klook Rewards tiers</td>
                  <td className="p-4">Explorer, Gold and Platinum; higher tiers earn credits at a higher rate</td>
                  <td className="p-4">Tiers are based on what you spend in a year</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Klook Pass</td>
                  <td className="p-4">One pass covering several attractions in a city</td>
                  <td className="p-4">Not every attraction is included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">App deals</td>
                  <td className="p-4">Flash deals and seasonal sales in the app</td>
                  <td className="p-4">Limited quantities</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Card and payment offers</td>
                  <td className="p-4">Discounts for paying with a specific card or wallet</td>
                  <td className="p-4">Quotas and expiry dates</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            India-specific codes do appear. One Klook offer for Indian users gave 10% off up to ₹1,000 on bookings above ₹8,000; it expired in February 2026. That's the typical shape of a Klook offer code for India: a percentage, a cap and a minimum spend.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Resident vs Tourist Prices: The Ticket Trap
    </p>

    <p>
      Many attractions in Southeast Asia charge locals less than visitors. On Klook, both ticket types often sit on the same page, and the cheaper one is not for you. Buying the wrong one can cost you more at the gate than any coupon saves.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Attraction (Klook listing)</th>
            <th className="p-4 font-bold">Local ticket</th>
            <th className="p-4 font-bold">Tourist ticket</th>
            <th className="p-4 font-bold">Rule</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Genting SkyWorlds, Genting Highlands</td>
            <td className="p-4">RM 88 (Malaysian, MyKad required)</td>
            <td className="p-4">RM 168 (non-Malaysian)</td>
            <td className="p-4">Wrong ticket type: you pay the difference at the walk-in rate</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Aquaria KLCC, Kuala Lumpur</td>
            <td className="p-4">Malaysian admission</td>
            <td className="p-4">Non-Malaysian admission</td>
            <td className="p-4">Valid ID checked on arrival</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      As an Indian passport holder, pick the non-Malaysian (or "foreigner" / "tourist") ticket. Then apply your code to that.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Read the Cancellation Line Before You Pay
    </p>

    <p>
      Several popular Klook attraction tickets are non-refundable and fixed to one date. Using a promo code on a non-refundable ticket for a day you're unsure about is the fastest way to lose money on Klook.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Product</th>
            <th className="p-4 font-bold">Cancellation</th>
            <th className="p-4 font-bold">Date change</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Genting SkyWorlds ticket</td>
            <td className="p-4">Non-cancellable</td>
            <td className="p-4">Valid only on the selected date</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Aquaria KLCC ticket</td>
            <td className="p-4">No cancellation</td>
            <td className="p-4">Valid only on the selected date</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Klook Pass (Hong Kong, Genting)</td>
            <td className="p-4">Refundable before your first reservation</td>
            <td className="p-4">Reserved dates can't be changed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Book non-refundable tickets once your flights and hotel are confirmed. For anything weather-dependent, look for activities with free cancellation.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Klook Genting: What to Know
    </p>

    <p>
      Klook Genting bookings cover Genting SkyWorlds Outdoor Theme Park, Skytropolis Indoor Theme Park, transfers from Kuala Lumpur, and a Genting Highlands pass.
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        SkyWorlds is closed on Tuesdays, except on Malaysian public holidays and special open dates. Check before picking your date.
      </li>
      <li>
        Book at least one day ahead. Online tickets can't be bought for the same day.
      </li>
      <li>
        Children: 89 cm or under enter free; 111 cm and above pay the adult rate.
      </li>
      <li>
        Transfer packages from KL Sentral or TBS bundle the bus ride with entry, which can be simpler than arranging transport separately.
      </li>
      <li>
        At the gate: scan your voucher at the turnstile first, then link the ticket to the SkyWorlds app. Linking it earlier can make it expire.
      </li>
      <li>
        The Klook Pass Genting Highlands lets you pick from SkyWorlds, Skytropolis, Ripley's Adventureland and the Genting Premium Outlet cable car. Customer reviews on the pass describe the saving as small, so it suits people who'll visit several of these anyway.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Klook Disneyland and City Passes
    </p>

    <p>
      Klook Disneyland searches usually mean Hong Kong Disneyland. It isn't part of the standard Klook Pass Hong Kong. The pass covers 2 to 5 attractions such as the Peak Tram, Ngong Ping 360 and Madame Tussauds, with Hong Kong Disneyland available only as an optional premium add-on.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How Klook Passes work:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Make your first reservation within 30 days of buying the pass to activate it.
      </li>
      <li>
        After that, you have 30 days to reserve the remaining attractions.
      </li>
      <li>
        Each attraction can be visited once; reserved dates can't be changed.
      </li>
      <li>
        Buy one pass per person; passes aren't shared.
      </li>
      <li>
        You can cancel for a refund until your first reservation.
      </li>
    </ul>

    <p>
      Is a Klook Pass worth it? Add up the single ticket prices for the attractions you'd really visit. If the pass costs less, buy it. If you'd only use two attractions, single tickets plus a promo code may work out cheaper.
    </p>

    <p>
      Klook also sells a Klook Pass Singapore. For Klook Singapore trips, use the same maths before buying.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Klook Royal Caribbean Cruises
    </p>

    <p>
      Klook lists Royal Caribbean's Spectrum of the Seas cruises from Hong Kong's Kai Tak Cruise Terminal, with routes from 3 to 10 nights to places like Okinawa, Taipei and Vietnam.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Before booking a Klook Royal Caribbean cruise:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        The headline price isn't the total. Taxes, fees and port expenses are added for every guest.
      </li>
      <li>
        Bookings need 2 to 4 guests, with at least one guest aged 18 or older per stateroom.
      </li>
      <li>
        Passports must be valid for at least six months.
      </li>
      <li>
        Prices are dynamic, and some bookings aren't instantly confirmed, so the rate can change.
      </li>
      <li>
        Complete online check-in before sailing.
      </li>
    </ul>

    <p>
      On a cruise, a percentage promo code with a cap barely moves the total. Compare the full price, including taxes and port fees, for the same cabin and sailing date.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Klook Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a Klook coupon code for India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Klook codes for Indian users appear from time to time, usually as a percentage off with a cap and a minimum spend. Check your Klook account's promo code section and this page for current offers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter a Klook promo code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the Discounts section at checkout, or save it first under Promo codes in your Klook account.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What are Klook credits worth?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                100 Klook credits equal US$1. You earn them after completing a booked activity and for writing reviews, and use them on future bookings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Hong Kong Disneyland included in the Klook Pass?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Hong Kong Disneyland is an optional premium add-on to the Klook Pass Hong Kong, not part of the standard pass.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I cancel Klook attraction tickets?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It depends on the activity. Tickets such as Genting SkyWorlds and Aquaria KLCC are listed as non-cancellable. Check the cancellation policy on each booking page.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Which Genting SkyWorlds ticket should Indian tourists buy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The non-Malaysian ticket. Malaysian rates need a MyKad, and buying the wrong type means paying the difference at the walk-in rate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I change Klook to English and rupees?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use the language and currency selector at the top of the page and choose EN and INR.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A Klook coupon code is worth using once you've picked the right ticket type, checked the cancellation policy and confirmed the full price in rupees. For flights and stays on the same trip, see our <a href="https://www.couponscrew.com/stores/indigo-coupon-code" className="text-[#5B4FBE] font-bold underline">IndiGo coupon codes</a>, <a href="https://www.couponscrew.com/stores/booking-coupon-code" className="text-[#5B4FBE] font-bold underline">Booking.com coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/travel" className="text-[#5B4FBE] font-bold underline">travel category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Klook Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Klook Coupons", "Attraction Passes", "City Pass Deals", "Disney Tickets", "Travel Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Klook checkout for instant discounts.
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
                <span>Continue to Klook</span>
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
