'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronDown,Sparkles,
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
import { Coupon, ADIDAS_COUPONS } from './adidasCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.adidas.co.in';

export default function AdidasStore() {
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

  const coupons: Coupon[] = ADIDAS_COUPONS;

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
      q: 'How do I use an Adidas coupon code?',
      a: 'To use an Adidas coupon code, browse verified codes here on CouponScrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Adidas website or app. If it is a deal, simply click "Visit Adidas" to get the discount auto-applied.'
    },
    {
      q: 'What is adiClub?',
      a: 'adiClub is Adidas\'s free loyalty membership program. Members can get early access to select product launches, member-only offers, and rewards for engaging with the brand. Signing up is free and can be done on the Adidas website or app before you shop.'
    },
    {
      q: "What is Adidas's return policy?",
      a: 'Adidas generally allows returns of unworn, unused items in their original packaging within a set return window from the date of delivery. Exact timelines and conditions can vary by product and by region, so it is best to check the specific return policy shown on your order confirmation or the Adidas website before initiating a return.'
    },
    {
      q: 'Why is my Adidas coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes may not apply to new arrivals or collaboration collections), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users or adiClub members only). Double-check the terms listed with the offer before applying.'
    },
    {
      q: 'Does Adidas offer a student discount?',
      a: 'Adidas has offered student discount programs in some regions through verification partners, typically requiring proof of student status. Availability and terms can change, so check the Adidas website for any current student offer before assuming eligibility.'
    },
    {
      q: 'How often are Adidas coupons updated?',
      a: 'Our deals team verifies and updates Adidas coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes and current deals.'
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
            <span className="text-[#5B4FBE] font-semibold">Adidas Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/adidas-logo_ake9w8.webp"
                      alt="Adidas Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Adidas Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Footwear, Apparel & Sportswear
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Adidas coupon codes and promo codes to save up to 60% OFF on shoes, sportswear, accessories, and kids' collections. Enjoy flat 50% OFF special offers, an extra 15% OFF on ₹4,999+ orders, plus 10% OFF your first purchase.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 40+ Offers
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
                  <span>Visit Adidas</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only, gradient panel reusing logo since no banner asset exists */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center gap-6 p-8"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-white/5 rounded-full pointer-events-none" />

              <div className="relative z-10 w-28 h-28 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/adidas-logo_ake9w8.webp"
                  alt="Adidas Offers"
                  width={112}
                  height={112}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>

              <div className="relative z-10 text-center text-white space-y-2">
                <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <h3 className="font-extrabold text-xl tracking-tight">Adidas Sportswear Sale</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Up to 60% OFF on Sneakers, Apparel & Training Gear
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">40+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹5,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Adidas Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Adidas coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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
                                <span>Valid on select footwear, apparel & training gear categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected collections and product lines.</span>
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

            {/* Sidebar Card: Avail Amazing Adidas India Coupons Using CouponsCrew */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Avail Amazing Adidas India Coupons Using CouponsCrew
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    CouponsCrew verifies every Adidas deal before publishing it on this page. The active deals typically include:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Site-wide discount codes</span>
        <span>apply across shoes, apparel, bags, and accessories in most categories</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Category-specific codes</span>
        <span>adidas running shoes only, men's only, or kids' category</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New user offers</span>
        <span>first-purchase discounts for accounts new to Adidas India</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Sale period codes</span>
        <span>extra percentage off layered on top of an already-running sale</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Adidas Outlet deals</span>
        <span>clearance pricing, sometimes stackable with a code</span>
      </div>
    </li>
  </ul>

  <p className="text-xs font-semibold text-[#4A4A6A] mt-4 pt-3 border-t border-[#E8E8F0]">
    Every code on this page is checked before it goes live. If something stops working between checks, the page reflects that — expired deals are marked and updated. If you find a code that isn't applying, the deal note on this page will tell you the category restriction or end date.
  </p>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Adidas Sportswear Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Sneakers, Apparel & Training Gear
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

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Adidas
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Men's Footwear</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Women's Footwear</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Apparel & Sportswear</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kids' Collection</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Training Gear</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            
            {/* Sidebar Card: Tips to Save More on Adidas India */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Tips to Save More on Adidas India
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Getting the most out of an adidas coupon code is straightforward once you know where the savings stack:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Check the deal terms before shopping</span>
        <span>Some adidas discount codes are category-specific — running shoes only, or new arrivals excluded, or Outlet items only. Read the terms on each deal on this page before adding to cart.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Stack a sale price with a code</span>
        <span>During EOSS or festive sale events, Adidas India marks products down before a site-wide code even applies. Using an adidas promo code on an already-reduced price is the highest-savings scenario.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Use New User Offers First</span>
        <span>If you haven't shopped from Adidas India before, a first-purchase deal typically gives a higher discount than a standard returning-user code. Use this on your largest intended purchase.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Check the Outlet tab regularly</span>
        <span>The Outlet section doesn't require a coupon code for its base discount, and some site-wide codes work there too. Checking it during EOSS can surface genuinely good deals on Adidas Ultraboost, Adidas Samba, and apparel.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bookmark this CouponsCrew page</span>
        <span>CouponsCrew updates Adidas deals as new codes go live and removes expired ones. Bookmarking this page means you don't have to search for a working adidas coupon code each time you shop.</span>
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
          Adidas Coupon Code: Save on Shoes, Apparel & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            The best way to shop Adidas in India without paying full price is to apply a verified adidas coupon code at checkout. CouponsCrew lists active codes for shoes, apparel, and accessories across all categories — Shoes, Men, Women, Kids, Sports & Lifestyle, and Outlet — so you can stack savings on whatever you came for.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Buy Adidas Products Online with Exclusive Coupons
    </h3>
    <p>
      Adidas is a global name in sportswear, founded on August 18, 1949 by Adolf Dassler in Herzogenaurach, Germany. Over seven decades, the brand has built a catalogue that spans performance athletics, street fashion, outdoor gear, and kids' sport — all under the same three stripes. In India, Adidas retails through its own website, brand stores across major cities, and select multi-brand partner outlets. The widest selection is consistently online.
    </p>
    <p>
      The product range is broad enough that knowing which category to start from saves you time. Here's what you can shop with an adidas coupon code on CouponsCrew:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>T-Shirts — performance tees, training tops, graphic tees, and polo shirts</li>
      <li>Track Pants — slim-fit and relaxed adidas trackpants for training and casual wear</li>
      <li>Backpacks — school and sport packs from the core Adidas range</li>
      <li>Beanie Caps — seasonal and lifestyle headwear</li>
      <li>Adidas Jacket — windbreakers, track tops, insulated jackets, and training shells</li>
      <li>Shoes — the widest category by far, broken down in full below</li>
    </ul>
    <p>
      The Adidas India website updates its deals and new arrivals frequently. Using a working adidas coupon code from CouponsCrew on top of any ongoing sale price is where the real savings compound.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Adidas Shoes: Every Silhouette Worth Knowing
    </h3>
    <p>
      Adidas shoes cover more ground than most brands — from marathon-tested performance footwear to heritage sneakers that have been in rotation since before most shoppers were born. Here's a breakdown of the key silhouettes available on the Adidas India website.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Samba: </strong>
      The Adidas Samba started as an indoor football trainer in the 1950s. It has since become one of the most culturally persistent sneakers ever made — low profile, leather upper, gum sole, and that unmistakable T-toe detail. The Adidas Samba Womens version carries the same construction with colourways that lean into everyday wear. If one shoe has to summarise what Adidas does best across sport and street, it's the Samba.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Gazelle: </strong>
      Suede upper, slim profile, and a heritage going back to the 1960s. The Gazelle is one of the most versatile shoes in the Adidas catalogue — it works with a tracksuit, with jeans, and with most things in between. It's had strong moments in British and European street culture and has never really gone away.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Superstar: </strong>
      The shell toe is the tell. Adidas Superstar launched in 1969 as a basketball shoe and became one of the best-selling sneakers of all time once hip-hop culture adopted it in the 1980s. Available in dozens of colourways and limited collaborations. If there's one Adidas shoe that most people can name on sight without knowing its name, it's this.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Campus: </strong>
      A suede body, a clean profile, and a lower ride height than the Superstar. The Campus is a quieter shoe — it doesn't demand attention, but it holds up every time. One of the more wearable all-day options in the Adidas lifestyle range.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Ultraboost: </strong>
      The Ultraboost is the Adidas running shoe with the widest crossover appeal — worn for training runs and for all-day street wear in equal measure. The full-length Boost midsole is genuinely cushioned and responsive. Available as Adidas running shoes in neutral and stability versions, and in men's and women's fits. If you want one shoe that handles long days on your feet and the occasional run, this is it.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Adizero: </strong>
      The Adizero family is Adidas's competition running range. These are proper performance shoes — lightweight, with carbon-fibre or nylon plate options at the top end — designed for race day. If you're training for a half marathon or full marathon, this is where to start looking.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas NMD: </strong>
      The NMD (Nomad) draws on archive Adidas running shapes from the 1980s and brings them into a Boost midsole and knit upper. It's a lifestyle sneaker, not a running shoe, but it's comfortable enough for all-day wear. A solid pick if you want something that looks considered without trying too hard.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Ozweego: </strong>
      Chunky sole, layered mesh and textile upper, retro proportions. The Ozweego is the Adidas entry in the dad-shoe category — it's an acquired taste, but it has a loyal following and comes in enough colourways to find something that works for your wardrobe.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Predator: </strong>
      The Predator has been Adidas's flagship football boot since 1994. It's worn by professional players and available for amateur footballers in firm ground, artificial ground, turf, and indoor versions. If you're looking for adidas sneakers for the pitch rather than the street, the Predator range is the place to start.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Adidas Terrex: </strong>
      Adidas Terrex is the outdoor and trail sub-brand. Terrex shoes cover hiking, trail running, approach shoes, and winter footwear. The rubber outsoles and waterproof uppers on the Terrex range are built for actual outdoor use — not a fashion pick, but the right call if you're spending time off tarmac.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Yeezy Slides: </strong>
      The Yeezy Slides are foam slip-on sandals from the Yeezy x Adidas collaboration. Minimal, comfortable, and consistently in high demand — restocks sell out quickly. When they're available on the Adidas India site, standard site-wide adidas coupon codes usually apply.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Adidas for Men
    </h3>
    <p>
      The Men's section brings together sport, performance, and casual wear in one catalogue. Adidas shoes for men alone cover more ground than most brands manage across their whole range.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Top picks in Men's footwear:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Adidas Ultraboost — running and daily wear in one shoe</li>
      <li>Adidas Samba — heritage casual, leather build, holds up daily</li>
      <li>Adidas NMD — streetwear-first, Boost-cushioned underneath</li>
      <li>Adidas Adizero — performance running and race day</li>
      <li>Adidas Predator — football, turf, and indoor court</li>
      <li>Adidas Campus — clean suede everyday trainer</li>
    </ul>
    <p>
      Beyond shoes, Men's carries training tees, adidas trackpants in standard and tapered fits, adidas jacket options for weather and sport, running shorts, and a full accessories line including bags, caps, and socks.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Adidas for Women
    </h3>
    <p>
      The Women's section at Adidas India carries dedicated fits, cuts, and colourways across every product category — not just a resized version of the Men's range. Key picks:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Adidas Samba Womens — same leather build, often in seasonal or lighter colourways</li>
      <li>Adidas Gazelle — suede trainer with a consistent following in women's fashion</li>
      <li>Adidas Ultraboost — genuinely versatile for training and all-day wear</li>
      <li>Adidas NMD — comfortable lifestyle sneaker available in women's sizing</li>
    </ul>
    <p>
      The Women's apparel range includes training leggings, sports bras, zip jackets, athleisure tops, and seasonal outerwear. Adidas slippers and slides are also available in women's sizing and are worth checking during sale periods with an adidas discount code.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Adidas for Kids
    </h3>
    <p>
      Adidas kids' footwear is built for actual use — proper rubber outsoles, reinforced uppers, and easy-on closures on smaller sizes. The range covers:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>School-ready sneakers including Superstar and Samba kids versions</li>
      <li>Junior football boots including the Predator range</li>
      <li>Training shoes for sport, PE, and outdoor activity</li>
      <li>Slides and sandals for casual and summer wear</li>
    </ul>
    <p>
      Adidas kids' apparel includes tracksuits, training tees, and sport shorts — practical choices that hold up to regular wear.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Sports & Lifestyle
    </h3>
    <p>
      This is the section where Adidas sits between training and everyday fashion. Products here are designed for sport but worn well beyond it:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Adidas Terrex — hiking, trail running, and outdoor footwear</li>
      <li>Adidas Slippers and Slides — recovery sandals and everyday slip-ons; Yeezy Slides sit here when in stock</li>
      <li>Adidas Sneakers (lifestyle) — NMD, Ozweego, Campus, Gazelle, and seasonal drops</li>
      <li>Adidas Jacket — windbreakers, track tops, training jackets, and insulated outerwear</li>
      <li>Adidas Trackpants — both sport-performance and streetwear-ready fits</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Adidas Outlet
    </h3>
    <p>
      The Outlet section carries past-season stock at reduced prices. An adidas promo code isn't always required here — the prices are already reduced — but some site-wide codes apply to Outlet products too. Check the deal terms on this page before assuming.
    </p>
    <p>
      The Outlet is worth checking regularly. Adidas rotates stock frequently, and it's possible to find Adidas Ultraboost, Adidas NMD, and apparel at significantly reduced prices without timing a major sale.
    </p>
    <p>
      Looking for an adidas store near me? Use the Store Locator on the Adidas India website. Products available in-store vary from the online catalogue — online consistently stocks a wider range, especially for specific colourways and sizes.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      When to Shop Adidas for the Best Deals
    </h3>
    <p>
      Adidas India runs predictable sale events throughout the year. Pairing a working adidas coupon code with one of these windows gives you the best combined savings:
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Adidas Sale Calendar Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Sale Period</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">When It Usually Runs</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">What to Expect</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { period: 'End of Season Sale (EOSS)', runs: 'January and July', expect: 'Widest discounts on shoes and apparel, including running and lifestyle' },
            { period: 'Republic Day Sale', runs: 'Late January', expect: 'Site-wide codes often active' },
            { period: 'Holi Sale', runs: 'March', expect: 'Apparel-heavy deals, some footwear' },
            { period: 'Independence Day Sale', runs: 'August', expect: 'Strong discounts on adidas sneakers and sports gear' },
            { period: 'Navratri / Dussehra', runs: 'October', expect: 'Festive season codes; footwear and apparel' },
            { period: 'Diwali Sale', runs: 'October–November', expect: 'Biggest festive window; site-wide adidas discount codes common' },
            { period: 'Year-End Sale', runs: 'December', expect: 'Last clearance push before new-year stock arrives' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.period}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.runs}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.expect}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      Outlet section sees the deepest cuts during EOSS — worth checking that tab specifically during January and July.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an Adidas Discount Code on CouponsCrew</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying an adidas discount code takes under two minutes. Here's the exact process:</p>
            <div className="space-y-6">
              {[
                "Find a deal on this page and click Get Code.",
                "The code copies to your clipboard automatically. You'll be redirected to the Adidas India website.",
                "Browse the catalogue and add products to your cart — Adidas Samba, Adidas Gazelle, Adidas Ultraboost, apparel, or accessories.",
                "Click Proceed to Checkout from your cart page.",
                "Look for the \"Have a promo code?\" or \"Enter discount code\" field at the order summary.",
                "Paste the adidas promo code and click Apply.",
                "The discounted price updates before you enter payment details."
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
              Tip: If a code doesn't apply, read the deal terms on this page. Some adidas discount codes are category-specific — running shoes only, or apparel only — and won't apply to everything in your cart.
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Adidas India vs Other Sportswear Brands
            </h3>

            <p>
              If you're comparing before committing, here's how Adidas positions across the Indian market:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#5B4FBE]/25 text-[#5B4FBE]">
                    <th className="py-3 px-4 font-black">Brand</th>
                    <th className="py-3 px-4 font-black">Strength</th>
                    <th className="py-3 px-4 font-black">Entry Price (Shoes)</th>
                    <th className="py-3 px-4 font-black">Sale Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0] font-medium text-gray-600">
                  <tr>
                    <td className="py-3 px-4 font-bold text-black">Adidas</td>
                    <td className="py-3 px-4">Heritage silhouettes + performance running</td>
                    <td className="py-3 px-4">Mid to premium</td>
                    <td className="py-3 px-4">EOSS twice yearly + festive</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-black"><Link href="/stores/nike-coupon-code" className="text-[#5B4FBE] hover:underline">Nike</Link></td>
                    <td className="py-3 px-4">Performance and basketball-driven range</td>
                    <td className="py-3 px-4">Mid to premium</td>
                    <td className="py-3 px-4">Similar sale calendar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-black"><Link href="/stores/puma-coupon-code" className="text-[#5B4FBE] hover:underline">Puma</Link></td>
                    <td className="py-3 px-4">Value-friendly sportswear, strong India presence</td>
                    <td className="py-3 px-4">Budget to mid</td>
                    <td className="py-3 px-4">Frequent category sales</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-black">Reebok</td>
                    <td className="py-3 px-4">Training and fitness focus</td>
                    <td className="py-3 px-4">Budget to mid</td>
                    <td className="py-3 px-4">Regular clearance events</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-black">New Balance</td>
                    <td className="py-3 px-4">Running and lifestyle, growing India presence</td>
                    <td className="py-3 px-4">Mid to premium</td>
                    <td className="py-3 px-4">Less frequent sales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Adidas holds a specific advantage on iconic lifestyle silhouettes — the Samba, Gazelle, Superstar, and Campus have no direct equivalent in rival catalogues. On performance running, the Ultraboost and Adizero compete directly with Nike's Pegasus and Vaporfly lines.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save on Every Adidas Purchase
            </h3>

            <p>
              Shopping Adidas India is more straightforward when you know which category you're in and which coupon applies to it. Use this page to find the right adidas coupon code before checkout, match it to your category — shoes, apparel, Outlet, or a sale event — and apply it before payment. CouponsCrew keeps this page updated so the code you see here is the one that actually works.
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
          <h2 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "Does Adidas India accept more than one coupon code per order?",
              a: "No. Adidas India allows one promo code per order. If you have multiple codes, apply the one with the larger discount. Site-wide codes usually outperform category codes unless the category discount is significantly higher."
            },
            {
              q: "Can I use an adidas discount code on Outlet items?",
              a: "It depends on the specific code. Some adidas discount codes exclude Outlet and sale products. The deal terms listed on this page for each code will confirm whether Outlet products are included."
            },
            {
              q: "Where exactly do I enter the adidas promo code at checkout?",
              a: "After clicking Proceed to Checkout, look for the \"Have a promo code?\" or \"Apply discount code\" field on the right side of the order summary. Paste the code and click Apply — the updated price shows before you reach payment."
            },
            {
              q: "Do Adidas coupon codes have an expiry date?",
              a: "Yes. Every adidas coupon code has an end date. CouponsCrew removes expired codes from this page, but if a code stops working mid-session, check the deal terms here for the end date and look for an updated code on the same page."
            },
            {
              q: "Can I use an adidas coupon code with a sale price?",
              a: "In most cases, yes. During EOSS and festive sales, Adidas India typically allows an additional code on top of the already-reduced price — but this depends on each code's terms. Codes that say \"new arrivals only\" or \"full-price items only\" won't stack with sale pricing."
            },
            {
              q: "Are adidas sneakers from the Outlet section covered by the return policy?",
              a: "Adidas India's return policy on Outlet items can differ from its standard policy. Check the return window and conditions on the product page before purchasing — the standard return window may be shorter for Outlet stock."
            },
            {
              q: "Can I use an adidas coupon code on the Adidas app?",
              a: "Most adidas promo codes that work on the Adidas India website also apply on the Adidas app at checkout. Use the same field in the app's order summary to apply the code."
            },
            {
              q: "Which Adidas shoes are best for daily running?",
              a: "The Adidas Ultraboost is the most versatile option for daily running — it handles easy and moderate-pace runs comfortably and doubles as an all-day shoe. For faster training or race days, the Adidas Adizero range is built specifically for performance running."
            },
            {
              q: "Is there a student or first-time buyer discount on Adidas India?",
              a: "Adidas India periodically runs new user offers for first-time purchases. These are typically listed on this page as a separate deal. If you haven't shopped from Adidas India before, check the New User section in the deals above before using a standard site-wide code."
            },
            {
              q: "How often does CouponsCrew update Adidas coupon codes?",
              a: "CouponsCrew checks and updates Adidas deals regularly. Codes that expire are removed, and new codes are added as they go live. Bookmarking this page means you always have access to the current working codes without searching elsewhere."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Adidas Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Adidas Promo Codes", "Samba & Gazelle Deals", "Ultraboost Discounts", "Apparel & Tracksuits", "Outlet Sale Offers", "New User Voucher", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Adidas Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Percentage Off Footwear", sub: "Verified coupon codes across Adidas sneakers and running shoes" },
              { heading: "Apparel & Training Gear", sub: "Extra price drops on hoodies, tees, and sportswear collections" },
              { heading: "Samba & Gazelle Specials", sub: "Promotional rates on iconic lifestyle and classic silhouettes" },
              { heading: "Outlet Section Extra Savings", sub: "Additional price cuts on markdown and clearance inventory" },
              { heading: "First-Time Buyer Promo", sub: "Introductory discount codes for new accounts on Adidas India" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Adidas deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Adidas checkout for instant discounts.
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
                <span>Continue to Adidas</span>
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
