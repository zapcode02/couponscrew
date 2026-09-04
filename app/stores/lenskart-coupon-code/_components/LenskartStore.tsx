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
import { Coupon, LENSKART_COUPONS } from './lenskartCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.lenskart.com';

export default function LenskartStore() {
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

  const coupons: Coupon[] = LENSKART_COUPONS;

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
      q: 'How do I use a Lenskart coupon code?',
      a: 'To use a Lenskart coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Lenskart website or app. If it is a deal, simply click "Visit Lenskart" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Lenskart coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum order value requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Lenskart coupon code listed on this page is checked before being published, and codes are periodically reviewed to help ensure they are still active.'
    },
    {
      q: 'How often are Lenskart coupons updated?',
      a: 'We aim to review and refresh the coupons on this page regularly so that expired offers are removed and new ones are added as they become available.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically, only one promo code can be applied per order at checkout. If you have more than one code, try each one to see which offers the better discount on your cart.'
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
            <span className="text-[#5B4FBE] font-semibold">Lenskart Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277414/lenskart-logo_oyfbdu.webp"
                      alt="Lenskart Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Lenskart</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Eyeglasses, Sunglasses & Contact Lenses
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Save more with verified Lenskart coupon codes, promo codes, and exclusive eyewear offers. Enjoy up to 78% OFF contact lenses, up to 70% OFF eyeglasses, ₹1,000 OFF glasses, extra 60% OFF, Buy 1 Get 1 FREE deals, and free shipping on selected products.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 10+ Offers
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
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Lenskart</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center p-8 text-center"
            >
              <div className="space-y-3 text-white select-none">
                <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black tracking-tight">Eyewear Season Offers</h3>
                <p className="text-white/80 text-sm max-w-xs mx-auto">
                  Save on eyeglasses, sunglasses & contact lenses with verified Lenskart coupon codes.
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Great Savings</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">On Every Order</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Lenskart Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Lenskart coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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
                    <span>Valid on select eyewear categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers selected frames and lens collections.</span>
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
    <span>What is Lenskart and Why Is It India's Most Trusted Eyewear Platform?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-4">
    Lenskart launched in 2010 as an online-first eyewear platform and has since grown into a full omnichannel retail operation — combining its e-commerce platform with 2,000+ physical stores across India. Its core proposition is simple: prescription eyewear at prices that are genuinely lower than what most optical shops charge, with the convenience of home try-on, a wide frame selection, and verified optometrists available both in-store and via app.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    What sets Lenskart apart from both offline optical shops and general e-commerce platforms:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">In-house lens manufacturing</span> — Lenskart's own lens production facility (in Bhiwadi, Rajasthan) allows it to control quality and lenskart price on lenses independently of third-party suppliers, keeping costs lower than competitors.
    </li>
    <li>
      <span className="font-semibold">3D Try-On</span> — the app's augmented reality feature lets you see how any frame looks on your face before purchasing, reducing the fit-and-return problem common to online eyewear shopping.
    </li>
    <li>
      <span className="font-semibold">Home Eye Test</span> — optometrists visit your home for a free eye test in covered cities, removing the need to visit a store before buying prescription glasses.
    </li>
    <li>
      <span className="font-semibold">Lenskart Gold membership</span> — the platform's paid membership tier (₹600–₹800/year) offers Buy 1 Get 1 Free on all eyeglasses throughout the membership period, making it one of the highest-ROI memberships in Indian e-commerce for regular eyewear buyers.
    </li>
    <li>
      <span className="font-semibold">Vincent Chase brand</span> — Lenskart's premium in-house brand, vincent chase sunglasses and eyeglasses are available exclusively on Lenskart and at physical Lenskart stores — typically priced 30%–50% lower than comparable third-party branded frames.
    </li>
    <li>
      <span className="font-semibold">Blu cut and computer lenses</span> — blue light blocking lenses built into standard frames, directly addressing the demand from office workers and students spending long hours on screens.
    </li>
  </ul>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit Lenskart</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Lenskart Seasonal Eyewear Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Eyeglasses, Sunglasses & Contact Lenses
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Lenskart's Customer Support
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Lenskart provides multiple customer support channels — useful to know before you apply a Lenskart discount code and place a prescription order where fit or prescription accuracy might need follow-up:
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#4A4A6A]">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">In-App and Website Support</span>
      <span>The Lenskart app and website both have a Help & Support section covering order tracking, prescription queries, exchange and return requests, and general account issues. Chat support is available within the app during business hours.</span>
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">Phone Support</span>
      <span>Lenskart's customer care helpline is available for prescription queries, delivery issues, and post-purchase concerns. The number is listed on your order confirmation email and the Contact Us page on lenskart.com.</span>
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">Email Support</span>
      <span>For non-urgent issues — prescription corrections, invoice requests, or feedback — email support is available via the contact form on the website. Response time is typically 24–48 business hours.</span>
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">Store Support</span>
      <span>With 2,000+ physical stores, visiting a nearby Lenskart outlet is often the fastest resolution path for prescription issues, frame adjustments (nose pads, temple tightening), or exchanges. Store staff can also retrieve your online order history and assist with post-purchase queries.</span>
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">Exchange and Remake Policy</span>
      <span>Lenskart offers a 14-day exchange policy on frames and a power guarantee on lenses — if the lens power is incorrect, Lenskart remakes the lenses at no additional cost. For non-prescription products (sunglasses, zero-power computer glasses), a 14-day return applies for unused items in original packaging.</span>
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40] block mb-0.5">Power Guarantee</span>
      <span>If your prescription changes within 6 months of purchase, Lenskart replaces the lenses at a subsidised rate. This applies to prescription eyeglasses purchased on the platform and is one of the stronger post-purchase commitments available in the eyewear retail space.</span>
    </li>
  </ul>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Left: Main Content Block */}
      <div>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
            Lenskart Coupon Code & Eyewear Deals — Verified for August 2026
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
          {LENSKART_COUPONS.map((coupon) => (
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

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-300", !isReadMore && "max-h-[500px] overflow-hidden")}>
            
            <p>
              Lenskart is India's largest eyewear retailer, operating both online and through a network of 2,000+ physical stores across the country. From prescription eyeglasses and computer glasses to lenskart sunglasses, contact lenses, and accessories, the platform covers every eyewear need under one roof — and does so at a significantly lower price point than most traditional optical shops.
            </p>

            <p>
              At CouponsCrew, we track every active Lenskart coupon code, Lenskart promo code, and Lenskart discount code so you never waste time entering an expired code at checkout. Every deal on this page is verified before going live — minimum order values, eligible products, user eligibility, and validity dates are all checked and shown clearly on each deal card.
            </p>

            <p>
              Whether you are buying your first pair of prescription glasses online, upgrading your lenskart frames, picking up a pair of vincent chase sunglasses, or adding computer glasses to protect your eyes during long work hours — there is almost always a saving available. This page is updated daily. Bookmark it and check it before every Lenskart purchase.
            </p>

  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Products at Lenskart
  </h3>
  <p className="mb-4">
    Lenskart's catalogue covers the full range of eyewear and vision correction needs. Here is what is available across each product category:
  </p>

  {/* Eyeglasses (Prescription) */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Eyeglasses (Prescription)</p>
  <p className="mb-2">
    Lenskart eyeglasses cover single vision, bifocal, and progressive (multifocal) lens options across hundreds of frame styles. Lenskart frames are available in:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-2">
    <li><strong>Material</strong> — acetate, TR90 (flexible plastic), titanium, stainless steel, and mixed material</li>
    <li><strong>Frame shape</strong> — rectangular, round, oval, cat-eye, wayfarers, and aviators</li>
    <li><strong>Style</strong> — full rim, half rim, and rimless</li>
  </ul>
  <p className="mb-4">
    Starting prices on prescription eyeglasses begin from ₹499 (frame + single vision lens) during sale periods, with mid-range options from ₹1,000–₹2,500 covering the majority of the catalogue. Premium frames from brands like Ray-Ban, Oakley, and Tommy Hilfiger are also listed, typically in the ₹3,000–₹8,000 range.
  </p>
  <p className="mb-6">
    Lenskart frames for men include a dedicated range of rectangular and geometric shapes in acetate and metal — the most popular categories being full-rim rectangular in matte black and gunmetal finishes. Women's frames lean toward cat-eye, round, and oval shapes with a wider colour palette.
  </p>

  {/* Sunglasses */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Sunglasses</p>
  <p className="mb-2">
    Lenskart sunglasses is one of the platform's fastest-growing categories, covering both prescription and non-prescription options:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-2">
    <li><strong>Vincent Chase sunglasses</strong> — Lenskart's in-house premium brand. Available in classic wayfarers, aviators, square, and shield styles across polarised and UV400 variants. Priced from ₹499 to ₹2,500 — significantly undercuts comparable imported brands at the same quality tier.</li>
    <li><strong>Lenskart shades</strong> — a broader lifestyle sunglasses range covering fashion-forward styles, sports eyewear, and wraparound frames for outdoor use</li>
    <li><strong>Third-party brands</strong> — Ray-Ban, Oakley, Fastrack, Titan, and Police are listed alongside the in-house brands</li>
  </ul>
  <p className="mb-6">
    Lenskart price on sunglasses is competitive particularly on the Vincent Chase and Lenskart-brand options — UV400 polarised sunglasses from ₹699 with no prescription are among the most accessible quality sunglasses available in the Indian market.
  </p>

  {/* Computer Glasses (Blu Cut Lenses) */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Computer Glasses (Blu Cut Lenses)</p>
  <p className="mb-6">
    Blue light blocking glasses — branded as "Blu Cut" on Lenskart — are prescription or zero-power lenses with a coating that reduces blue light transmission from digital screens. Available across most lenskart frames in the catalogue. Starting from ₹600 for a zero-power Blu Cut pair during sale periods. These are among Lenskart's most consistent sellers outside of standard prescription eyeglasses.
  </p>

  {/* Contact Lenses */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Contact Lenses</p>
  <p className="mb-6">
    Lenskart stocks daily, monthly, and yearly disposable contact lenses from brands including Bausch &amp; Lomb, Johnson &amp; Johnson (Acuvue), Alcon (Air Optix), and Lenskart's own contact lens brand. Colour contacts and toric lenses for astigmatism are also available. Contact lenses can be auto-shipped on a subscription basis — useful if you wear lenses daily and want to avoid restocking manually each month.
  </p>

  {/* Kids' Eyeglasses */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Kids' Eyeglasses</p>
  <p className="mb-6">
    A dedicated range of kids' prescription frames in flexible TR90 and rubberised materials — designed for durability for younger wearers. Frames are available from ₹599 in a wide range of sizes and colours. Lenskart also offers a kids' eye test via the home optometrist service.
  </p>

  {/* Lens Add-Ons and Upgrades */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Lens Add-Ons and Upgrades</p>
  <p className="mb-2">
    On any prescription order, Lenskart offers lens upgrades at checkout:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
    <li><strong>Anti-reflective coating</strong> — reduces glare from screens and headlights</li>
    <li><strong>Photochromic (Transitions)</strong> — lenses that darken automatically in sunlight</li>
    <li><strong>Polarised</strong> — for sunglasses orders</li>
    <li><strong>High index</strong> — thinner lenses for higher power prescriptions</li>
    <li><strong>Blu Cut</strong> — blue light blocking for computer use</li>
    <p className="mt-2 text-sm">Each add-on has a listed price that is added to the base frame + lens price at checkout — a Lenskart discount code or Lenskart promo code may or may not cover add-ons depending on the specific deal.</p>
  </ul>

  {/* Lenskart Saving Tips & Tricks */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Lenskart Saving Tips &amp; Tricks
  </h3>
  <p className="mb-4">
    Getting the best price on Lenskart is not just about finding a coupon code — the platform has several built-in saving mechanisms worth knowing:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">1. Get Lenskart Gold Membership for Buy 1 Get 1 Free</p>
  <p className="mb-4">
    Lenskart Gold (₹600–₹800/year) gives you Buy 1 Get 1 Free on all eyeglasses throughout the membership period. If you buy two or more pairs of glasses per year — which most prescription wearers do, given separate distance and computer glasses needs — the membership pays for itself on the first purchase. Apply a Lenskart coupon code on your Gold membership purchase itself for additional saving.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">2. Use a Lenskart Promo Code on Your First Order</p>
  <p className="mb-4">
    First-time Lenskart buyers have access to the highest-value introductory codes — often ₹150–₹200 off with a low minimum cart value. These are listed in the "New Users" filter on this CouponsCrew page. Always use these before switching to standard codes.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">3. Shop Vincent Chase for the Best Price-to-Quality Ratio</p>
  <p className="mb-4">
    Vincent chase sunglasses and eyeglasses are Lenskart's own brand and are priced 30%–50% below comparable third-party branded frames at the same optical quality. If lenskart price is a priority, starting your search with the Vincent Chase range consistently delivers the best value per rupee — before any coupon is applied.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">4. Stack a Lenskart Discount Code with a Bank Card Offer</p>
  <p className="mb-4">
    HDFC, ICICI, SBI, and Axis bank card holders get periodic instant discount offers on Lenskart — typically 10%–15% off at the payment step. Apply your Lenskart promo code in the coupon field first, then select your bank card for the bank discount to stack on top where the promotion allows.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">5. Buy During Sale Events for the Deepest Discounts</p>
  <p className="mb-4">
    Lenskart's biggest savings come during its major sale windows — the Big Vision Sale (up to 75% off), Payday Sale (up to 60% off), and Diwali Sale (up to 70% off) offer the platform's highest discount levels. A Lenskart coupon code stacked on top of already-reduced sale prices can bring effective discounts beyond 75% on mid-range frames.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">6. Use the 3D Try-On Before Buying</p>
  <p className="mb-4">
    Lenskart's AR try-on feature in the app lets you see how frames look on your actual face — reducing the likelihood of needing to return and reorder. A return costs nothing, but the time saved by choosing the right frame the first time is worth using the feature.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">7. Book a Free Home Eye Test</p>
  <p className="mb-4">
    If you are unsure of your current prescription, Lenskart's free home optometrist service (available in major cities) removes the cost and inconvenience of a separate optician visit before ordering glasses. This is a genuine saving — a standalone eye test at an optical shop typically costs ₹200–₹500.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">8. Check Lenskart Shades During End-of-Season Clearances</p>
  <p className="mb-6">
    Lenskart shades from the previous season's collection go on clearance at up to 70% off during end-of-season sales. If you are not particular about owning the latest sunglass styles, these clearance windows are the best time to buy quality frames at the lowest prices.
  </p>

  {/* What Are the Top Sales at Lenskart? */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    What Are the Top Sales at Lenskart?
  </h3>
  <p className="mb-4">
    Lenskart runs several structured sale events throughout the year — timing your purchase around these windows delivers the highest discounts, especially when a verified Lenskart coupon code from CouponsCrew is applied on top:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Sale Event</th>
          <th className="p-4">Tentative Month</th>
          <th className="p-4">Expected Discount</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Republic Day Sale</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 25% off + occasional combo deals</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Holi Sale</td>
          <td className="p-4">March</td>
          <td className="p-4">Around 20% cashback or flat discounts</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Payday Sale</td>
          <td className="p-4">Month-end (most months)</td>
          <td className="p-4">Up to 60% off on selected eyewear</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">End of Season Sale</td>
          <td className="p-4">Mid-year &amp; year-end</td>
          <td className="p-4">Up to 25% off on selected frames</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Big Vision Sale</td>
          <td className="p-4">Major promo periods</td>
          <td className="p-4">Up to 75% off on premium eyewear</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Festive / Diwali Sale</td>
          <td className="p-4">October – November</td>
          <td className="p-4">Up to 70% off across all categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Clearance Sale</td>
          <td className="p-4">Runs periodically</td>
          <td className="p-4">Up to 70% off on older styles</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    The Big Vision Sale is Lenskart's flagship discount event and consistently delivers the deepest discounts — up to 75% off on lenskart eyeglasses, lenskart sunglasses, and computer glasses. It is the best window to buy premium frames from Vincent Chase and third-party brands like Ray-Ban or Oakley at their lowest annual price.
  </p>
  <p className="mb-4">
    The Payday Sale runs around the last week of most months and is one of the more reliable recurring discount windows — up to 60% off on selected eyewear. If you are planning a glasses purchase and the timing is flexible, waiting for a Payday Sale window and applying a Lenskart promo code on top is a straightforward strategy.
  </p>
  <p className="mb-6">
    The Festive / Diwali Sale (October–November) is strong for gifting eyewear — sunglasses gift sets, premium frame upgrades, and contact lens subscription bundles all see meaningful discounts during this window.
  </p>


            {/* Section: How to Use a Lenskart Coupon Code */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              How to Use a Lenskart Coupon Code — Step by Step
            </h3>

            <p>
              Applying a Lenskart promo code at checkout is straightforward. Here is the exact process:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-gray-500 font-bold">
              <li>
                <strong className="text-[#2C2C40]">Find a verified code on this page. </strong>
                Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens Lenskart in a new tab or the app.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Browse and select your eyewear. </strong>
                Search by category — eyeglasses, sunglasses, computer glasses, or contact lenses. Use the frame shape, material, and price filters to narrow down your options.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Select your lens type (for prescription orders). </strong>
                Choose your lens power and type (single vision, bifocal, progressive) and any add-ons (Blu Cut, anti-reflective, photochromic). Your final price is shown before checkout.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Add to cart and proceed to checkout. </strong>
                Click "Proceed to Checkout." Confirm your delivery address.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Find the coupon / promo code field. </strong>
                On the payment summary page, look for "Apply Coupon" or "Have a Promo Code?" — it appears in the price summary section before the payment method step.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Paste your code and apply. </strong>
                Paste the Lenskart coupon code from your clipboard and click "Apply." The discount reflects immediately in the order total.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Select your payment method. </strong>
                Credit/debit card, UPI, net banking, or EMI. Select an eligible bank card now if you have an active bank card discount to stack.
              </li>
              <li>
                <strong className="text-[#2C2C40]">Confirm and place your order. </strong>
                Your order is confirmed via email and SMS. Prescription glasses are typically dispatched within 3–5 working days after lens fitting; sunglasses and non-prescription items ship sooner.
              </li>
            </ol>

            <p>
              <strong className="text-[#2C2C40]">Tip: </strong>
              If a code shows as invalid, check that your cart value meets the minimum order threshold and that your selected product is not excluded (some codes apply only to frames, not lenses or contact lenses). Refresh this CouponsCrew page for the next active code.
            </p>

            {/* Section: Lenskart vs Offline Optical Shops */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Lenskart vs Offline Optical Shops — Is Buying Online Better?
            </h3>

            <p>
              A common hesitation for first-time Lenskart buyers is whether buying prescription glasses online is safe and accurate. Here is an honest comparison:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black text-sm">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Lenskart Online</th>
                    <th className="p-4">Traditional Optical Shop</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Price Range</td>
                    <td className="p-4">₹499–₹8,000+ (frame + lens)</td>
                    <td className="p-4">₹800–₹15,000+ for comparable quality</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Frame Selection</td>
                    <td className="p-4">5,000+ styles</td>
                    <td className="p-4">50–300 styles per store</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Lens Options</td>
                    <td className="p-4">Full range including Blu Cut, Transitions</td>
                    <td className="p-4">Dependent on individual lab tie-up</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Try Before Buy</td>
                    <td className="p-4">AR 3D try-on (app)</td>
                    <td className="p-4">Physical try-on</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Eye Test</td>
                    <td className="p-4">Free home optometrist (major cities)</td>
                    <td className="p-4">In-store (₹200–₹500 at many shops)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Prescription Accuracy</td>
                    <td className="p-4">Power guarantee + free remake</td>
                    <td className="p-4">Varies by optician</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Delivery</td>
                    <td className="p-4">3–7 days for prescription</td>
                    <td className="p-4">3–7 days (outsourced to lens lab)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Return / Exchange</td>
                    <td className="p-4">14-day exchange + power guarantee</td>
                    <td className="p-4">Store-dependent, often limited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Coupon / Discount</td>
                    <td className="p-4">Active codes via CouponsCrew</td>
                    <td className="p-4">No comparable discount mechanism</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Gold Membership</td>
                    <td className="p-4">Buy 1 Get 1 Free (₹600–₹800/year)</td>
                    <td className="p-4">No equivalent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For most prescription eyewear purchases in the ₹800–₹3,000 range, Lenskart consistently offers a lower effective price than offline optical shops at the same lens quality — particularly when a Lenskart coupon code and a Gold membership are both applied.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Lenskart Customer Support
            </h3>
            <p>
              Lenskart provides multiple dedicated customer support options for prescription updates, frame exchanges, order status, and home eye tests:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black text-sm">
                    <th className="p-4">Support Channel</th>
                    <th className="p-4">Details</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Customer Care Helpline</td>
                    <td className="p-4">1800-202-4444 (Toll-free) / 99998-99998</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Support</td>
                    <td className="p-4">support@lenskart.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">WhatsApp Assistant</td>
                    <td className="p-4">+91 89298 53854 (Chat for quick support & updates)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Grievance Redressal Email</td>
                    <td className="p-4">customergrievances@lenskart.in (10 AM to 8 PM)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Prescription Updates</td>
                    <td className="p-4">power@lenskart.com (Send prescription photos directly)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Lenskart App Support</td>
                    <td className="p-4">Instant live chat, power updates, order tracking, and home test booking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Titan Eye Plus — </strong> Established optical retail brand with in-store and online presence
            </p>
            <p>
              <strong className="text-[#2C2C40]">Specsmakers — </strong> South India-focused eyewear chain with competitive pricing
            </p>
            <p>
              <strong className="text-[#2C2C40]">Fastrack — </strong> Fashion sunglasses and eyewear at accessible price points
            </p>
            <p>
              <strong className="text-[#2C2C40]">Coolwinks — </strong> Online eyewear platform with budget-friendly frame options
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon / Flipkart — </strong> Third-party eyewear listings, though prescription options are limited compared to Lenskart
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for Lenskart Deals
            </h3>
            <p>
              Finding a working Lenskart coupon code should be a 30-second task. CouponsCrew verifies every code on this page before it goes live — minimum order values, eligible categories, user restrictions, and expiry dates are all confirmed and displayed clearly on every deal card.
            </p>
            <p>
              Lenskart already offers significantly lower prices than most offline optical shops — particularly on lenskart eyeglasses, vincent chase sunglasses, and lenskart frames for men and women. A verified Lenskart promo code or Lenskart discount code from CouponsCrew on top of sale pricing, stacked with a bank card offer where available, consistently delivers some of the best effective prices on prescription and non-prescription eyewear available anywhere in India.
            </p>
            <p>
              Bookmark this page and check back before every Lenskart purchase — whether you are ordering prescription glasses, a pair of lenskart shades for the season, Blu Cut computer glasses, or contact lenses for the month.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-10 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
          </button>

          {/* FAQs Accordion */}
          <div className="mt-20 space-y-4">
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions — Lenskart Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working Lenskart coupon code today?",
                a: "Every Lenskart coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
              },
              {
                q: "Q2. Can I use a Lenskart promo code with Lenskart Gold membership?",
                a: "Lenskart Gold's Buy 1 Get 1 Free benefit and promo codes operate separately. In most cases, a Lenskart promo code can be applied on top of the Gold member price — but stacking may vary by promotion. Check the deal card conditions on this CouponsCrew page for stacking eligibility."
              },
              {
                q: "Q3. What is the best Lenskart discount code for first-time buyers?",
                a: "First-time buyers should look for new-user codes in the \"New Users\" filter on this page — typically ₹150–₹200 off with a low minimum cart value. These are the highest-value codes available to new accounts and should be used before switching to standard codes."
              },
              {
                q: "Q4. Are Vincent Chase sunglasses worth buying?",
                a: "Yes — vincent chase sunglasses are Lenskart's own brand and are manufactured to the same quality standard as the frames sold under third-party brand names, but priced 30%–50% lower. UV400 protection and polarised lens options are available across most Vincent Chase sunglass styles. For lenskart price versus quality, Vincent Chase is consistently the strongest value option on the platform."
              },
              {
                q: "Q5. Can I get prescription lenses in Lenskart sunglasses?",
                a: "Yes — most lenskart sunglasses frames can be fitted with prescription lenses, including single vision and progressive options. Select \"Add Prescription\" during the checkout flow and enter your power details. Polarised and Blu Cut coatings can also be added to prescription sunglass lenses."
              },
              {
                q: "Q6. How long does Lenskart take to deliver prescription glasses?",
                a: "Prescription glasses are typically dispatched within 3–5 working days after your order is placed and lens fitting is complete. Delivery to most major cities takes an additional 1–3 days. Non-prescription products (sunglasses, zero-power computer glasses) typically ship within 1–2 days."
              },
              {
                q: "Q7. What is Lenskart's return and exchange policy?",
                a: "Lenskart offers a 14-day exchange on frames for unused products in original condition. Prescription lens errors are corrected via the power guarantee — incorrect lenses are remade at no additional cost. Contact lenses are non-returnable once opened. The exchange process is initiated via the app or by visiting a physical Lenskart store."
              },
              {
                q: "Q8. Is the Lenskart Gold membership worth it?",
                a: "If you buy two or more pairs of glasses per year, Lenskart Gold (₹600–₹800/year) is worth it — Buy 1 Get 1 Free on all eyeglasses means the second pair is free, recovering the membership cost immediately. Regular wearers who need both distance and computer glasses in the same year benefit the most."
              },
              {
                q: "Q9. Can I use a Lenskart coupon code on contact lenses?",
                a: "Some Lenskart discount codes apply to contact lenses — check the deal card on this CouponsCrew page for category eligibility. Many codes are frame-specific and exclude contact lenses, so confirming eligibility before building your cart saves time."
              },
              {
                q: "Q10. Does Lenskart have stores near me?",
                a: "Lenskart operates 2,000+ stores across India — including in most tier-1 and many tier-2 cities. Use the Store Locator on lenskart.com or the app to find your nearest outlet by entering your city or pin code. Online orders can also be exchanged or adjusted at physical stores."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
                >
                  <span className="text-black font-black text-base">{faq.q}</span>
                  <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE]")}>
                    <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
                  </div>
                </button>
                <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Lenskart Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Lenskart Coupons", "Gold Membership", "Vincent Chase", "Computer Glasses", "Prescription Eyeglasses", "Sunglasses Offers", "Contact Lenses", "CouponsCrew Lenskart"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Lenskart Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Buy 1 Get 1 Free on Frames", sub: "Verified offer with Lenskart Gold Membership" },
              { heading: "Flat ₹200 OFF First Order", sub: "New user exclusive discount via App/Web" },
              { heading: "Up to 50% OFF Sunglasses", sub: "Extra savings on Vincent Chase & John Jacobs" },
              { heading: "Free Home Eye Test Booking", sub: "12-step eye check-up by certified optometrist" },
              { heading: "Blu Cut Computer Glasses Offers", sub: "Special deals on zero-power anti-glare lenses" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">LK</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Lenskart deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Lenskart checkout for instant discounts.
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
                <span>Continue to Lenskart</span>
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
