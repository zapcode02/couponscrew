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
import { Coupon, HANDM_COUPONS } from './handmCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www2.hm.com/en_in/index.html';

export default function HandMStore() {
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

  const coupons: Coupon[] = HANDM_COUPONS;

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
      q: 'How do I use an H&M coupon code?',
      a: 'To use an H&M coupon code, browse verified codes here on CouponScrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the H&M website or app. If it is a deal, simply click "Visit H&M" to shop the offer.'
    },
    {
      q: 'Can I use multiple coupon codes on H&M?',
      a: 'Generally, H&M only allows one promotional code per order. However, you can often combine a coupon code with automatic sitewide sale pricing or select bank offers where available.'
    },
    {
      q: 'Why is my H&M coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes exclude sale items or certain collaborations), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only).'
    },
    {
      q: 'Where can I find the best H&M offers?',
      a: 'We keep this H&M store page updated regularly with the best discounts, verified coupon codes, and upcoming seasonal sale dates so you always see current, working offers.'
    },
    {
      q: 'Does H&M offer free delivery?',
      a: 'H&M offers free delivery on eligible orders above a minimum cart value, and this threshold can vary by season and promotion — check the delivery details shown at checkout for your order.'
    },
    {
      q: 'How often are H&M coupons updated?',
      a: 'Our deals team checks and refreshes coupons regularly. Expired promotions are removed, so you only spend time on codes that are actually working.'
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
            <span className="text-[#5B4FBE] font-semibold">H&M Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/handm-logo_vtzhhn.webp"
                      alt="H&M Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.4 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">H&M Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Fashion, Kids Wear & Home
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified H&M coupon codes and H&M promo codes at Maxiku Offers. Save up to 75% OFF on fashion, enjoy an extra 10% OFF for new users, shop accessories at 50% OFF, and get discounts on women's, men's, kids' clothing, and home essentials.
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
                  <span>Visit H&M</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only, reuses logo since no banner image is available */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center p-10 text-center"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-20px] w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-5 shadow-lg relative z-10">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/handm-logo_vtzhhn.webp"
                  alt="H&M Offers"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="mt-6 text-white font-black text-xl tracking-tight relative z-10">Up to 60% OFF Fashion</h3>
              <p className="text-white/80 text-sm mt-2 relative z-10">Men's, Women's, Kids Wear & Home Textiles</p>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">H&M Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified H&M coupon codes & offers.</p>
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
                                <span>Valid on select fashion & home textile categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected collections and seasonal ranges.</span>
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
                <span>About H&M</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               H&M (Hennes & Mauritz) is a Swedish fashion retailer founded in 1947. It now operates in over 70 countries, with stores and an h&m online presence across India in major cities. The brand sits in the fast-fashion segment — new collections drop frequently, prices are accessible, and the range covers women, men, and kids across clothing, accessories, and homeware.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               H&M India operates both physical stores (in malls across metros and Tier-1 cities) and the h&m online store at hm.com. The online store ships across India and runs its own promotions separate from what's available in-store. An hm coupon code applied at the online checkout can reduce the cart total beyond whatever sale price is already showing.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               The brand also has a loyalty programme — H&M Member — that gives early access to sales, bonus points, and member-only discounts. This runs alongside, and sometimes stacks with, external hm offer codes.
              </p>

             

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit H&M</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">H&M Seasonal Fashion Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Men's, Women's & Kids Fashion
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
                Top Categories at H&M
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Women's Fashion</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Men's Fashion</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kids Wear</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Home & Textiles</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Conscious Collection</span>
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

            {/* Sidebar Card 4: Why Shop at H&M */}
            {/* Sidebar Card: What Are the Popular Brands Available at H&M? */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    What Are the Popular Brands Available at H&M?
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    H&M Group operates several brands beyond the main H&M line. Not all are available in every market, but these are the key ones:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">H&M</span>
        <span>The core line. Fast-fashion basics through trend-led pieces across women's, men's, kids', and home.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">H&M Move</span>
        <span>H&M's activewear and sportswear sub-line. Leggings, sports bras, training tops, and outerwear designed for movement. Available on the H&M site and in larger stores.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">H&M HOME</span>
        <span>Homeware, bedding, cushions, storage, and décor. Available h&m online and in select larger stores in India.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">& Other Stories</span>
        <span>H&M Group's higher-end fashion label. Not currently available in India through the H&M India site.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">COS</span>
        <span>Minimalist, design-led clothing at a higher price point than H&M. Select pieces are available h&m online in some markets; availability in India varies.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">ARKET</span>
        <span>Sustainable basics and timeless pieces. Not widely available in India through H&M's local channels.</span>
      </div>
    </li>
  </ul>

  <p className="text-xs font-semibold text-[#4A4A6A] mt-4 pt-3 border-t border-[#E8E8F0]">
    For most H&M India shoppers, the main H&M line and H&M Move are what's accessible online. An hm coupon code typically applies across the main H&M range — check individual offer terms for Move and HOME.
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
          H&M Coupon Code: Save on Clothing, Accessories & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            H&M India runs frequent markdowns, and a working hm coupon code at checkout can drop the price further — often on top of an existing sale. The brand covers everything from H&M women's tops and h&m dresses to h&m hoodie styles, h&m jackets, and h&m coats, so whether you're building out a wardrobe or picking up a single piece, there's usually a deal worth applying.
          </p>

          <p>
            This page tracks verified hm discount codes, active hm promo codes, and category-specific offers across women's, men's, and kids' fashion. Check the deals table below for what's live right now, or scroll to the section that matches what you're shopping for.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Explore Popular H&M Categories
    </h3>
    <p>
      <strong className="text-[#2C2C40]">Women's Fashion: </strong>
      H&M's women's range is the widest on the site. The core categories — h&m women's tops, h&m ladies tops, h&m dresses, hm dresses, h&m sweatshirts, h&m sweaters, and h&m coats — get the most frequent restocks and the most active promo code coverage.
    </p>
    <p>
      <strong className="text-[#2C2C40]">H&M Tops & Shirts: </strong>
      H&M women's tops and h and m womens tops span basics, printed tees, formal shirts, and oversized fits. H&M t shirt styles in this section run year-round and tend to be the most discounted during the HM sale periods.
    </p>
    <p>
      <strong className="text-[#2C2C40]">H&M Dresses: </strong>
      One of the most searched categories on h&m online India. Styles range from casual day dresses to occasion wear, with new prints and silhouettes added each season. HM dresses are frequently part of the end-of-season sale, which is when prices drop the most without needing a code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">H&M Outerwear: </strong>
      H&M jackets, h&m coats, and h&m hoodie styles are the strongest category for value — pieces that hold up across multiple seasons and tend to have higher original prices, making a discount code more impactful here.
    </p>
    <p>
      <strong className="text-[#2C2C40]">H&M Sweatshirts & Sweaters: </strong>
      H&M sweatshirt and sweater styles are popular in the mid-season and winter drops. These frequently appear in the HM sale before new stock arrives.
    </p>
    <p>
      <strong className="text-[#2C2C40]">H&M Sunglasses & Accessories: </strong>
      H&m sunglasses, bags, scarves, and jewellery round out the women's section. Accessories are often included in sitewide hm promo code offers.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Men's Fashion: </strong>
      H&M men's covers h&m shirts, h&m t shirt styles, h&m hoodie and sweatshirt options, h&m jackets, and casual trousers. The men's range is smaller than women's but updates at the same seasonal cadence. Basics — plain tees, Oxford shirts, chino trousers — are the most consistently available and the most discounted during sale windows. H&M's men's formal and smart-casual range has expanded in recent years, with structured h&m shirts and trousers sitting alongside the casualwear. Hm coupon codes for men's apparel typically apply sitewide, so you don't need a category-specific code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Kids' Fashion: </strong>
      H&M kids' covers newborn through teenage sizes — clothing, accessories, and some homeware. The range includes basics, printed sets, schoolwear, and seasonal outerwear. Kids' items are frequently part of multi-buy offers (buy two, save on the third) that run alongside or separately from hm discount codes.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      H&M Shipping Policy
    </h3>
    <p>
      H&M India offers home delivery across most serviceable pin codes. Key terms as of the last update:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Standard delivery: </strong>
      Orders above a threshold amount ship free; orders below it attract a flat delivery fee. Check the cart page for the current threshold — it changes periodically.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Delivery timeline: </strong>
      Standard orders typically reach metro cities in three to five business days, with Tier-2 and Tier-3 cities taking slightly longer.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Click & Collect: </strong>
      Available in select cities — order online and pick up from your nearest H&M store. No delivery fee for this option.
    </p>
    <p>
      <strong className="text-[#2C2C40]">In-store delivery tracking: </strong>
      Once an order ships, tracking details go to the registered email and phone number. H&M uses third-party logistics partners for home delivery.
    </p>
    <p>
      Shipping terms change. Verify the current policy and threshold at hm.com/in before checkout.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      H&M Return Policy
    </h3>
    <p>
      H&M India has a standard return window for online purchases:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Return window: </strong>
      Items can be returned within 30 days of delivery, provided they're unworn, unwashed, and have original tags attached.
    </p>
    <p>
      <strong className="text-[#2C2C40]">How to return: </strong>
      Log in to your H&M account, go to your order history, and initiate a return from the order details page. A pickup is scheduled from your delivery address.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Refund timeline: </strong>
      Refunds process back to the original payment method within seven to ten business days after the return is received.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Exceptions: </strong>
      Sale items, swimwear, and pierced jewellery may have different return conditions. Check the product page terms at the time of purchase.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Gift cards: </strong>
      H&M gift cards are non-returnable and non-refundable once purchased.
    </p>
    <p>
      <strong className="text-[#2C2C40]">In-store returns: </strong>
      Items bought online can be returned in-store in India with the order confirmation and original packaging.
    </p>
    <p>
      Return policy details are subject to change. Always verify at hm.com before making a purchase decision based on return flexibility.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      H&M vs Other Fashion Retailers in India
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">H&M Retailer Comparison Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">H&M</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Zara</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Myntra</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            {
              category: 'Price Range',
              discount: 'Budget to mid-range',
              highlights: 'Mid to premium',
              userType: 'Wide range across brands'
            },
            {
              category: 'Own Brand',
              discount: 'Yes (H&M label)',
              highlights: 'Yes (Zara label)',
              userType: 'Multi-brand marketplace'
            },
            {
              category: 'Sale Frequency',
              discount: 'Seasonal + flash sales',
              highlights: 'Seasonal (twice a year)',
              userType: 'Frequent across brands'
            },
            {
              category: 'Loyalty Programme',
              discount: 'H&M Member',
              highlights: 'No formal programme',
              userType: 'Myntra Insider'
            },
            {
              category: 'Coupon Codes',
              discount: 'Yes',
              highlights: 'Rare',
              userType: 'Yes (brand + platform codes)'
            },
            {
              category: 'Kids\' Range',
              discount: 'Yes',
              highlights: 'Yes',
              userType: 'Yes (multi-brand)'
            },
            {
              category: 'Returns Window',
              discount: '30 days',
              highlights: '30 days',
              userType: '30 days (varies by brand)'
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
    <p className="mt-4">
      H&M hits a price point that Zara doesn't match for basics and everyday clothing. Versus Myntra, H&M's own-label quality is more consistent than aggregated marketplace picks at similar prices.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      H&M Sale Calendar: When to Shop for the Best Prices
    </h3>
    <p>
      H&M India runs predictable sale windows. An hm coupon code used during these periods stacks with already-reduced prices (on full-price items):
    </p>
    <p>
      <strong className="text-[#2C2C40]">End of Season Sale (January–February): </strong>
      Post-winter clearance. H&M coats, jackets, sweaters, and sweatshirts drop significantly. One of the two biggest sale windows of the year.
    </p>
    <p>
      <strong className="text-[#2C2C40]">End of Season Sale (July–August): </strong>
      Post-summer clearance. Dresses, tops, and lighter fabrics see the deepest discounts.
    </p>
    <p>
      <strong className="text-[#2C2C40]">HM Sale (mid-season): </strong>
      Shorter, less predictable windows that surface through the app and email. Typically 20–30% off select categories.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Black Friday / Cyber Monday (November): </strong>
      H&M participates with sitewide deals. Active hm promo codes during this window are common and worth applying on top of any existing discounts.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Festive Season (October–November): </strong>
      Diwali-period promotions on h&m online India with flat discounts across categories.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an H&M Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Go to hm.com and add your items — h&m clothing, accessories, or homeware — to your bag.",
                "Proceed to checkout and sign in or continue as guest.",
                "Look for the Promo Code or Discount Code field on the order summary page.",
                "Enter your hm coupon code exactly as listed — codes are case-sensitive.",
                "Confirm the discount appears in your order total before completing payment.",
                "Pay via your preferred method — UPI, credit/debit card, net banking, or gift card.",
                "If the code doesn't apply, check whether your cart items are eligible. H&M sale items are frequently excluded from promo codes, and some hm discount codes are valid for full-price items only."
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
              Saving Tips for H&M India Shoppers
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Join H&M Member before you shop: </strong>
              The H&M Member programme is free to join. Members get birthday discounts, early sale access, and bonus points that convert to money-off vouchers. Set this up before your first purchase — points on that first order count.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Stack Member points with a coupon code: </strong>
              H&M Member rewards and an external hm coupon code can sometimes apply on the same order. The discount code reduces the cart total; the points accrue on what you actually pay.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check the app for member-only deals: </strong>
              The H&M app occasionally surfaces flash discounts and app-exclusive hm offer codes that don't appear on the desktop site.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Buy full-price items during the HM sale window: </strong>
              Hm coupon codes typically exclude sale items. The most effective use of a discount code is against full-price items during a period when the site has broad new-season stock — you get the code discount without the exclusion problem.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Use an h&m gift card for budget control: </strong>
              If you're buying for someone else or want to lock in a spend limit, an h&m gift card loaded at a discounted rate (watch for gift card promotions) lets you shop at face value while having paid less for the card.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check both the sale section and new arrivals: </strong>
              H&M frequently marks down items that have been on the site for a few weeks before formally announcing a sale. The sale section is worth filtering by category — h&m dresses and h&m tops in particular tend to appear there ahead of formal sale announcements.
            </p>
          </div>

          

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Platforms
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Zara India: </strong>
              Comparable fast-fashion positioning but at a higher price point. Fewer discount codes available publicly; most saving happens during Zara's twice-yearly sale.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Myntra: </strong>
              Multi-brand marketplace with frequent promotions across hundreds of brands including H&M itself. Worth comparing prices on Myntra vs hm.com for H&M items — Myntra occasionally runs deeper platform-level discounts.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Mango India: </strong>
              European fast-fashion at a mid-to-premium price point. Discount codes are less common than H&M; most value comes during end-of-season clearance.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Marks & Spencer India: </strong>
              Stronger on basics and workwear, less trend-driven. Comparable return policy; regular sale windows.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save More on H&M with CouponsCrew
            </h3>

            <p>
              Every hm coupon code on this page is verified before it goes live. The deals table at the top updates with new offers as they're confirmed — bookmark this page and check it before your next H&M order, whether it's for a full outfit or just restocking basics.
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
                q: "What is an H&M coupon code and how do I apply it?",
                a: "An hm coupon code is a discount code that reduces your cart total on h&m online India. Add items to your bag, proceed to checkout, and enter the code in the promo code field on the order summary page. Confirm the discount shows in the total before completing payment. Codes are case-sensitive."
              },
              {
                q: "Why is my H&M promo code not working?",
                a: "The most common reasons are: the code has expired, the items in your cart are sale items (most hm discount codes exclude already-reduced products), the code is single-use and has already been claimed, or the code is for a specific category and your cart has items outside that category. Check the deal card terms on this page before trying the code."
              },
              {
                q: "Does H&M India have free shipping?",
                a: "H&M India offers free standard delivery on orders above a certain threshold. The threshold varies and is shown at cart level. For orders below it, a flat delivery fee applies. Click & Collect from a store near you is always free."
              },
              {
                q: "What is H&M Member and is it free?",
                a: "H&M Member is H&M's loyalty programme. It's free to join. Members earn points on purchases that convert to money-off vouchers, get early sale access, and receive a birthday discount. Sign up through the H&M app or website — points start accruing from your first order after joining."
              },
              {
                q: "Can I return H&M online purchases to a physical store?",
                a: "Yes. Items bought through h&m online India can be returned to any H&M store within the 30-day return window, provided the item is unworn, unwashed, and has original tags. Bring your order confirmation. The store processes the return, and the refund goes back to your original payment method."
              },
              {
                q: "Does H&M India sell gift cards?",
                a: "Yes. H&M gift cards are available h&m online and in-store. They can be used for online and in-store purchases in India. Gift cards are non-returnable and non-refundable once purchased. Watch for gift card promotions — occasional bonus-credit deals make them worth buying ahead of a planned purchase."
              },
              {
                q: "Are H&M sale items eligible for coupon codes?",
                a: "In most cases, no. H&M coupon codes typically apply to full-price items only. Sale items already have a markdown applied, and the code won't stack on top. Check the specific terms on each deal card — occasional sitewide codes do cover sale items, but these are less common."
              },
              {
                q: "What is H&M Move?",
                a: "H&M Move is H&M's activewear sub-line — sportswear designed for training, yoga, running, and general movement. It's available on the H&M website alongside the main clothing range. Styles include leggings, sports bras, training tops, and outerwear. Hm coupon codes may or may not apply to Move — check the offer terms."
              },
              {
                q: "How long does H&M India delivery take?",
                a: "Standard delivery to metro cities typically takes three to five business days. Tier-2 and Tier-3 cities may take slightly longer depending on the logistics partner and pin code serviceability. Tracking details are sent to your registered email and phone after dispatch."
              },
              {
                q: "Can I use multiple coupon codes on one H&M order?",
                a: "No. H&M's checkout accepts one promo code per order. If you have both an H&M Member voucher and an external hm offer code, you'll need to choose one. The Member voucher is applied at account level before checkout; the external code goes in the promo field. Plan which gives the higher saving before committing."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular H&M Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["H&M Coupons", "H&M Sale India", "Women's Dresses", "H&M Hoodie", "Men's Jackets", "H&M Member Discounts", "H&M Voucher Codes", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top H&M Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Season Sale — Up to 50% OFF", sub: "Markdowns on dresses, hoodies, jackets & basics across categories" },
              { heading: "H&M Member Welcome Offer", sub: "Extra percentage off your first purchase when joining H&M Member" },
              { heading: "Free Standard Delivery", sub: "Available on online orders above the minimum threshold" },
              { heading: "H&M Move Activewear Deals", sub: "Special pricing on sportswear, leggings & training essentials" },
              { heading: "Student & Youth Discount", sub: "Verified student status unlocks special promotional rates" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">H</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get H&M deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at H&M checkout for instant discounts.
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
                <span>Continue to H&M</span>
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
