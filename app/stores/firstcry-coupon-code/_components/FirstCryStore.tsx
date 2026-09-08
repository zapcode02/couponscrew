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
  Lock,
  RefreshCw,
  Headset,Calendar,
  ArrowRight,
  TrendingUp,
  Info,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, FIRSTCRY_COUPONS } from './firstcryCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.firstcry.com';

export default function FirstCryStore() {
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

  const coupons: Coupon[] = FIRSTCRY_COUPONS;

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
      q: 'How do I use a FirstCry coupon code?',
      a: 'To use a FirstCry coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the FirstCry website or app. If it is a deal, simply click "Visit FirstCry" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on FirstCry?',
      a: 'Generally, FirstCry allows only one promotional code per order. However, you can often combine a coupon code with automatic sitewide promotions or select bank discount card offers shown at checkout.'
    },
    {
      q: 'Why is my FirstCry coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes apply only to clothing or toys), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only).'
    },
    {
      q: 'Where can I find the best FirstCry offers?',
      a: 'We keep this FirstCry store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates (such as festive baby & kids sales).'
    },
    {
      q: 'Does FirstCry offer free delivery?',
      a: 'FirstCry offers free or discounted delivery on eligible orders above a minimum cart value, with the exact threshold depending on your delivery location and any active promotions.'
    },
    {
      q: 'How often are FirstCry coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">FirstCry Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/furstcrty-logo_jqvzov.webp"
                      alt="FirstCry Logo"
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
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">FirstCry</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Baby, Kids & Maternity Store
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified FirstCry coupon codes and FirstCry promo codes at Maxiku Offers. Save up to 80% OFF with an extra 5% OFF for new users, get 70% OFF beauty products, 65% OFF fashion, and up to 60% OFF baby clothing and diapers.
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
                  <span>Visit FirstCry</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only. No brand banner image available, so we reuse the logo in a styled panel instead. */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center p-10">
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-40px] w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center gap-5">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/furstcrty-logo_jqvzov.webp"
                    alt="FirstCry Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-white font-black text-2xl tracking-tight">Up to 60% OFF</h3>
                  <p className="text-white/80 text-sm font-semibold max-w-xs">
                    On baby clothing, diapers, toys, maternity wear & baby gear
                  </p>
                </div>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-white hover:bg-gray-100 text-[#5B4FBE] px-6 py-3 rounded-xl text-xs font-black transition-all cursor-pointer"
                >
                  Shop Now
                </a>
              </div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">60+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">FirstCry Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified FirstCry coupon codes & offers.</p>
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
                                <span>Valid on select baby, kids & maternity categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected brands and product collections, including BabyHug.</span>
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
                <span>About FirstCry</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
              FirstCry launched in 2010 and has grown into India's largest specialty retailer for baby and kids' products. The firstcry website lists products across maternity care, newborn essentials, toddler clothing, toys, feeding, diapering, and school supplies — all under one platform. Beyond firstcry online shopping, the brand also runs physical stores across India.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              The platform stocks both domestic and international brands, alongside its own private label, BabyHug (firstcry babyhug), which covers a wide range of everyday baby essentials. FirstCry also operates a subscription model through its Smart Junior programme and runs a wallet system that ties into its promotional structure.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              A firstcry coupon code applied at checkout typically sits on top of any ongoing category sale — but eligibility rules vary by offer, and sale items are often excluded from code discounts. Reading the deal card terms before checkout saves the hassle of a failed code at payment.
              </p>

             
    
              

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit FirstCry</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">FirstCry Baby & Kids Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Clothing, Diapers, Toys & More
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
                Top Categories at FirstCry
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Baby Clothing</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Diapers & Feeding</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Toys & Games</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Maternity Wear</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Baby Gear & Furniture</span>
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

            {/* Sidebar Card 4: Why Shop at FirstCry */}
            {/* Sidebar Card: When Does FirstCry Have Its Biggest Sales */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    When Does FirstCry Have Its Biggest Sales?
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    FirstCry runs sales more frequently than most Indian e-commerce platforms, given the repeat-purchase nature of baby products. The biggest ones:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Baby Week / BabyFair</span>
        <span>FirstCry's flagship annual sale event. Runs typically for a week and covers deep discounts across all categories — diapers, clothing, toys, feeding, and nursery. FirstCry offer codes during Baby Week tend to stack better with sale prices than at other times of year.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">End of Season Sale (January–February and July–August)</span>
        <span>Clothing clearance with the steepest discounts on first cry dresses and kids' apparel. New season stock arrives after these windows.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Diwali and Festive Season (October–November)</span>
        <span>FirstCry runs festive promotions with flat discounts and gift sets. One of the better periods to buy premium items like strollers, car seats, and feeding sets.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Back to School (July–August)</span>
        <span>School bags, stationery, lunch boxes, and uniforms see the most activity here. FirstCry promo codes for this category appear reliably during this window.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Republic Day (January 26) and Independence Day (August 15)</span>
        <span>Short-window sale events with sitewide discounts. Less deep than Baby Week but worth checking if you have pending purchases.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Calendar size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New Year (January 1)</span>
        <span>Platform-wide promotions with first-week codes that carry into the first few days of January.</span>
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
          FirstCry Coupon Code: Save on Baby Products, Diapers, Clothing & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            FirstCry is India's largest dedicated baby and kids' shopping platform, and a valid firstcry coupon code at checkout can bring the bill down on everything from firstcry diapers and firstcry pampers to first cry dresses and firstcry babyhug essentials. The platform runs promotions frequently, but not all codes work on all products — this page tracks what's currently verified and explains how to apply it correctly.
          </p>

          <p>
            Check the deals table first if you already know what you need, or scroll to the category or section that matches your shopping intent.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FirstCry Best Selling Categories
    </h3>
    <p>
      <strong className="text-[#2C2C40]">Diapers and Wipes: </strong>
      FirstCry diapers are one of the highest-traffic categories on the platform. The site stocks firstcry pampers (Pampers brand), Huggies, MamyPoko, Himalaya, and the in-house BabyHug diaper range. Firstcry cloth diapers from brands like SuperBottoms and BabyHug are also listed for parents who prefer reusables. Diapers are sold in single packs and bulk combo packs. Combo packs typically offer a lower per-unit price but are sometimes excluded from firstcry coupon code offers — check before adding to cart if a code is your primary reason for buying in bulk.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Baby Clothing and Dresses: </strong>
      First cry dresses and baby apparel cover newborn through 12 years. The range includes everyday basics, ethnic wear, occasion sets, winterwear, and school uniforms. FirstCry stocks branded clothing from Mothercare, Chicco, and H&M Kids alongside its own BabyHug range. First cry dresses for girls and festive sets tend to peak in demand around Diwali and wedding season. These periods also see the deepest sale discounts on clothing, sometimes alongside an active firstcry offer code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Feeding and Nursing: </strong>
      Breast pumps, feeding bottles, sterilisers, formula, and nursing accessories. This category includes international brands like Philips Avent, Dr. Brown's, and Pigeon. Firstcry discount codes for feeding products appear less frequently than for clothing or diapers, but category-specific sales run here regularly.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Toys and Early Learning: </strong>
      Educational toys, rattles, activity gyms, puzzles, and age-specific play sets. Brands include Fisher-Price, Funskool, Hamleys, and Lego (for older kids). Toys are one of the more coupon-friendly categories — firstcry promo codes tend to work here more reliably than on branded diaper packs.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Maternity and Nursing: </strong>
      Maternity clothing, nursing bras, belly bands, and postpartum care products. FirstCry has expanded this section significantly and it now includes skincare and wellness products aimed at new and expecting mothers. YMYL note — product descriptions are informational; consult a healthcare provider for medical decisions.
    </p>
    <p>
      <strong className="text-[#2C2C40]">School and Activity Supplies: </strong>
      Bags, stationery, lunch boxes, water bottles, and craft kits. This category peaks during the July–August back-to-school season and around January when academic year prep starts in some states.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FirstCry Baby Products and Brands
    </h3>
    <p>
      FirstCry stocks a wide range of domestic and international baby brands. The most frequently searched:
    </p>
    <p>
      <strong className="text-[#2C2C40]">BabyHug (FirstCry's own label): </strong>
      firstcry babyhug covers diapers, clothing, feeding accessories, nursery products, and baby care. It's positioned as an affordable, quality alternative to premium imported brands. BabyHug products are consistently included in FirstCry's own promotional campaigns.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Pampers: </strong>
      firstcry pampers includes the full Pampers India range: Active Baby, Premium Care, and Pants variants. Pampers packs are sometimes excluded from sitewide firstcry coupon code offers — check terms before checkout.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Huggies: </strong>
      dry and wet wipes, diaper pants, and newborn wraps. Stock and pricing on Huggies at FirstCry are often competitive with pharmacy chains.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Chicco: </strong>
      Italian baby brand covering strollers, car seats, feeding gear, and clothing. Higher price point; firstcry discount codes apply on Chicco less frequently than on house-brand products.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Mothercare: </strong>
      clothing, nursery accessories, and feeding products. Mothercare's India operations have had availability changes in recent years — verify current stock on the firstcry website before planning around a specific Mothercare item.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Himalaya Baby: </strong>
      skincare, body wash, shampoo, and diaper rash cream. One of the most consistently available baby care brands on FirstCry. Often part of bundle offers.
    </p>
    <p>
      <strong className="text-[#2C2C40]">SuperBottoms: </strong>
      cloth diaper and reusable absorbent underwear brand popular with parents looking for firstcry cloth diapers. Sold on the platform with frequent bundled discounts.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Fisher-Price: </strong>
      activity gyms, rattles, bouncers, and learning toys. Strong brand presence on FirstCry with seasonal promotions.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FirstCry Wallet and First-Time User Offers
    </h3>
    <p>
      <strong className="text-[#2C2C40]">FirstCry Wallet: </strong>
      FirstCry has an in-app wallet — money added to it is usable across all purchases on the platform. Top-up promotions periodically add bonus credit when you load a set amount. For frequent FirstCry buyers, keeping a wallet balance removes the need to enter a firstcry promo code on every order — the wallet discount is automatic at checkout.
    </p>
    <p>
      <strong className="text-[#2C2C40]">First-Time User Offer: </strong>
      New firstcry accounts typically get a welcome discount on the first order. This applies once and is sometimes a flat discount, sometimes a percentage off up to a cap. The welcome offer usually activates automatically at checkout or through a firstcry coupon code displayed during signup — check the app notification or the email sent after account creation.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Smart Junior / Subscription Programme: </strong>
      FirstCry's subscription programme gives members access to deeper discounts, early sale access, and bundled offers. If you shop on FirstCry regularly — monthly diaper reorders, for instance — the subscription typically pays for itself quickly.
    </p>
    <p>
      <strong className="text-[#2C2C40]">FirstCry Voucher and Gift Certificate: </strong>
      A firstcry voucher or gift certificate firstcry can be bought online and used like store credit. Gift certificates are popular for baby showers and new parent gifts — the recipient shops as they need rather than receiving a specific product. Vouchers and gift certificates cannot be used to purchase more gift certificates.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FirstCry Refund Policy
    </h3>
    <p>
      FirstCry accepts returns on most products within a defined window. Key terms:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Return window: </strong>
      Most items can be returned within seven days of delivery. Some categories have a shorter window — check the product page before purchase.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Condition: </strong>
      Items must be unused, unwashed, and in original packaging with tags intact.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Non-returnable items: </strong>
      Diapers (opened packs), feeding bottles (used), personal care products once opened, and customised items are generally not returnable. Some categories like car seats and strollers have specific return conditions — verify at product level.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Refund method: </strong>
      Refunds go back to the original payment method or to the FirstCry Wallet (typically faster). Wallet refunds usually process within two to three business days; bank refunds take five to seven business days.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Damaged or wrong items: </strong>
      FirstCry processes replacement or full refund requests for items received damaged or incorrectly shipped. Raise the request through the app or firstcry website within 48 hours of delivery with a photo of the issue.
    </p>
    <p>
      <strong className="text-[#2C2C40]">FirstCry Voucher and gift certificate: </strong>
      Non-refundable once purchased.
    </p>
    <p>
      Return policy is subject to change. Verify current terms on the firstcry website before purchase, particularly for high-value items like strollers or car seats.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Customer Support
    </h3>
    <p>
      FirstCry offers support through multiple channels:
    </p>
    <p>
      <strong className="text-[#2C2C40]">In-app chat: </strong>
      Fastest for order-related queries. Available in the FirstCry app under Help & Support.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Website help centre: </strong>
      The firstcry website has a self-service help section covering order tracking, returns, refund status, and account issues at firstcry.com/help.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Email support: </strong>
      For documentation-heavy queries (damaged product claims, missing items), email support is available through the help centre form.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Phone support: </strong>
      FirstCry has a customer care number listed on the contact page of the firstcry website. Wait times vary; app chat tends to be faster for straightforward queries.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Store support: </strong>
      For purchases made in a FirstCry physical store, the store handles returns and exchanges directly — these follow a slightly different process from online orders.
    </p>
    <p>
      For coupon-related issues — a firstcry discount code not applying, a wallet credit not reflecting — the in-app chat resolves these fastest as the support agent can see your account and cart in real time.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      FirstCry vs Other Baby and Kids' Platforms in India
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-slate-300 text-left">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-300 p-2 font-bold text-[#2C2C40]">Feature</th>
            <th className="border border-slate-300 p-2 font-bold text-[#2C2C40]">FirstCry</th>
            <th className="border border-slate-300 p-2 font-bold text-[#2C2C40]">Amazon India</th>
            <th className="border border-slate-300 p-2 font-bold text-[#2C2C40]">Hopscotch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Category Focus</td>
            <td className="border border-slate-300 p-2">Baby + kids specialty</td>
            <td className="border border-slate-300 p-2">General marketplace</td>
            <td className="border border-slate-300 p-2">Kids' fashion focus</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Own Label</td>
            <td className="border border-slate-300 p-2">BabyHug</td>
            <td className="border border-slate-300 p-2">Amazon Basics (limited)</td>
            <td className="border border-slate-300 p-2">Own designs</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Diaper Range</td>
            <td className="border border-slate-300 p-2">Extensive (all major brands)</td>
            <td className="border border-slate-300 p-2">Good</td>
            <td className="border border-slate-300 p-2">Limited</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Clothing Range</td>
            <td className="border border-slate-300 p-2">Wide (newborn to 12 yrs)</td>
            <td className="border border-slate-300 p-2">Multi-brand</td>
            <td className="border border-slate-300 p-2">Strong (0–14 yrs)</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Wallet System</td>
            <td className="border border-slate-300 p-2">Yes (FirstCry Wallet)</td>
            <td className="border border-slate-300 p-2">No (but Amazon Pay)</td>
            <td className="border border-slate-300 p-2">No</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Physical Stores</td>
            <td className="border border-slate-300 p-2">Yes (pan-India)</td>
            <td className="border border-slate-300 p-2">No</td>
            <td className="border border-slate-300 p-2">No</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Coupon Code Support</td>
            <td className="border border-slate-300 p-2">Yes</td>
            <td className="border border-slate-300 p-2">Yes (limited on baby)</td>
            <td className="border border-slate-300 p-2">Yes</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2 font-semibold">Return Window</td>
            <td className="border border-slate-300 p-2">7 days</td>
            <td className="border border-slate-300 p-2">7–30 days (varies)</td>
            <td className="border border-slate-300 p-2">7 days</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-4">
      FirstCry's depth in baby-specific categories — particularly firstcry diapers, firstcry babyhug products, and first cry dresses — gives it an edge over general marketplaces for parents doing consolidated baby shopping. Amazon is competitive on pricing for repeat-purchase items like pampers, but lacks the specialty curation.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a FirstCry Coupon Code</h3>
            <div className="space-y-6">
              {[
                "Open the firstcry website or app and add your items to the cart.",
                "Proceed to checkout and sign in to your FirstCry account (codes are almost always account-bound).",
                "On the payment page, look for the Apply Coupon or Enter Promo Code field.",
                "Type or paste your firstcry coupon code exactly as shown — codes are case-sensitive.",
                "Confirm the discount reflects in your order total before proceeding to payment.",
                "Pay via UPI, card, net banking, FirstCry Wallet, or gift certificate.",
                "If the code isn't applying, check whether your cart items fall under an excluded category (sale products, combo packs, and some brand-specific items are commonly excluded). Also confirm the code hasn't already been used — many firstcry promo codes are single-use per account."
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
              Saving Tips for FirstCry Shoppers
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Buy diapers in bulk during Baby Week: </strong>
              FirstCry's flagship sale event gives the deepest discounts on high-volume consumables like diapers. Stocking up for two to three months during Baby Week typically saves more than using monthly firstcry promo codes on regular orders.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check wallet top-up promotions before recharging: </strong>
              FirstCry occasionally adds bonus credits when you top up the wallet above a certain amount. Loading the wallet during one of these windows is effectively a discount on all future purchases, not just one order.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Use the subscription if you reorder monthly: </strong>
              If diapers, wipes, or formula are monthly purchases, the Smart Junior subscription's bulk discount typically exceeds what an ad-hoc firstcry coupon code would save across the same period.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Compare combo packs vs single packs before adding to cart: </strong>
              Combo packs show a lower per-unit price but are sometimes excluded from firstcry discount codes. A single pack at coupon-discounted price can work out cheaper than a combo pack at full price. Do the per-unit calculation before committing.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Gift certificates for baby shower gifting: </strong>
              Rather than buying a specific product as a gift, a firstcry gift certificate lets the new parent buy what they actually need. FirstCry voucher amounts start low enough to work as a small add-on gift and go high enough to cover a stroller purchase.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check both the app and the website for codes: </strong>
              Some firstcry offer codes appear only in app notifications or push messages and don't get listed on public coupon sites. Enabling notifications on the FirstCry app means you catch these before they expire.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Baby Care Brands Worth Checking Out
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Hopscotch: </strong>
              Kids' fashion focused platform covering ages newborn to 14. Stronger on clothing and accessories than FirstCry; weaker on baby care consumables like diapers and feeding.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Mothercare India: </strong>
              Nursery furniture, clothing, and feeding accessories with a premium positioning. Mothercare's India retail presence has changed in recent years — verify current availability through their official channels before planning a purchase.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Mee Mee: </strong>
              Indian baby care brand with products across diapers, feeding, skincare, and nursery accessories. Available on FirstCry and standalone.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Chicco India: </strong>
              Italian baby brand covering strollers, car seats, and high chairs. Available on FirstCry and the Chicco India website directly.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Amazon India Baby Store: </strong>
              Good for repeat-purchase consumables (diapers, formula, wipes) with Subscribe & Save pricing. Less curated than FirstCry but competitive on branded items.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Nykaa Mom: </strong>
              Maternity and nursing-focused vertical with skincare, wellness, and postpartum care products for new and expecting mothers.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save More on Every FirstCry Order with CouponsScrew
            </h3>

            <p>
              Every firstcry coupon code on this page is verified before it goes live. The deals table at the top updates regularly — bookmark this page and check it before your next FirstCry order, whether it's a monthly diaper restock, first cry dresses for a festive occasion, or a bigger purchase like a stroller or feeding set.
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
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions
            </h3>
            {[
              {
                q: "What is a FirstCry coupon code and how do I use it?",
                a: "A firstcry coupon code is a discount code that reduces your cart total during checkout on the firstcry website or app. Add items to your cart, go to checkout, and enter the code in the Apply Coupon field on the payment page. Confirm the discount shows in your order total before completing payment. Codes are case-sensitive and most are single-use per account."
              },
              {
                q: "Why is my FirstCry promo code not working?",
                a: "Common reasons: the code has expired, the items in your cart are sale products (most codes exclude already-discounted items), the code is for new users only and your account has prior orders, or the specific brands in your cart (Pampers, Chicco) are excluded from that promotion. Check the deal card terms on this page before trying the code."
              },
              {
                q: "Does FirstCry offer free delivery?",
                a: "FirstCry offers free delivery above a minimum order value. The threshold varies and is displayed at cart level. For orders below the threshold, a flat delivery fee applies. Check the current threshold on the firstcry website — it changes periodically."
              },
              {
                q: "What is the FirstCry Wallet?",
                a: "The FirstCry Wallet is an in-app balance that deducts automatically from your orders. You load money into it via UPI, card, or net banking. Top-up promotions sometimes add bonus credits when you load above a set amount. Wallet refunds are also faster than bank refunds when returning an item."
              },
              {
                q: "What is firstcry babyhug?",
                a: "BabyHug is FirstCry's private label brand. It covers diapers, clothing, feeding accessories, nursery products, and baby care. It's positioned as an affordable alternative to premium imported brands. FirstCry babyhug products are consistently included in platform-wide promotions and are often more reliably discounted than branded products."
              },
              {
                q: "Are firstcry cloth diapers available on the platform?",
                a: "Yes. FirstCry stocks cloth diapers and reusable absorbent underwear from brands like SuperBottoms and BabyHug's own cloth diaper range. These are listed under the Diapers & Wipes category and can be filtered by type on the firstcry website."
              },
              {
                q: "What is a FirstCry voucher and how is it different from a coupon code?",
                a: "A firstcry voucher or gift certificate firstcry is store credit purchased and gifted to someone else — it works like a prepaid balance on their account. A firstcry coupon code is a promotional discount code that reduces the price at checkout without any prepayment. Vouchers are account-level credits; coupon codes are applied at the promo code field."
              },
              {
                q: "When is the best time to buy on FirstCry?",
                a: "The biggest discounts are during FirstCry's Baby Week sale (usually mid-year), end-of-season clothing sales in January–February and July–August, and the Diwali festive period for premium products. Diapers and wipes are most aggressively discounted during Baby Week."
              },
              {
                q: "What is FirstCry's return policy for diapers?",
                a: "Opened diaper packs are generally non-returnable. Unopened, unused packs in original packaging may be returnable within the standard seven-day window — verify on the product page before purchase. Damaged or incorrectly delivered diaper packs can be reported within 48 hours of delivery for a replacement or refund."
              },
              {
                q: "Does FirstCry have physical stores in India?",
                a: "Yes. FirstCry operates stores across India, concentrated in metros and Tier-1 cities. The first cry shop experience covers a curated range of products, though the full catalogue is available only through firstcry online shopping. In-store purchases follow a separate return process from online orders."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular FirstCry Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["FirstCry Coupons", "Baby Products Sale India", "Diaper Offers", "FirstCry Big Sale", "Kids Clothing Deals", "Maternity Wear Discounts", "FirstCry Bank Offers", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top FirstCry Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Baby & Kids Sale — Up to 60% OFF", sub: "Clothing, toys, diapers & gear — deepest discounts of the season" },
              { heading: "Flat 25% Off Diapers & Feeding", sub: "Top diaper brands, wipes & feeding accessories at a flat discount" },
              { heading: "Up to 50% Off on Toys & Games", sub: "Soft toys, educational games & outdoor play sets" },
              { heading: "Up to 40% Off Strollers & Car Seats", sub: "Baby gear and nursery furniture at their lowest prices" },
              { heading: "New User Welcome Offer", sub: "Special discount for first-time FirstCry customers — check at checkout" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">F</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get FirstCry deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at FirstCry checkout for instant discounts.
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
                <span>Continue to FirstCry</span>
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
