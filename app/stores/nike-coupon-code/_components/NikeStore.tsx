'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
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
import { Coupon, NIKE_COUPONS } from './nikeCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.nike.com/in';

export default function NikeStore() {
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

  const coupons: Coupon[] = NIKE_COUPONS;

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
      q: 'How do I use a Nike coupon code?',
      a: 'To use a Nike coupon code, browse verified codes here on CouponsCrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Nike website or app. If it is a deal, simply click "Visit Nike" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Nike?',
      a: 'Generally, Nike only allows one promotional code per order. However, you can often combine a coupon code with automatic sitewide promotions or select bank or card discount offers where available.'
    },
    {
      q: 'Why is my Nike coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes apply only to footwear or apparel), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new members only).'
    },
    {
      q: 'Where can I find the best Nike offers?',
      a: 'We keep this Nike store page updated 24/7 with the best discounts, verified coupon codes, and upcoming sale dates across footwear, apparel, and accessories.'
    },
    {
      q: 'What is Nike Membership?',
      a: 'Nike Membership is Nike\'s free loyalty program available through the Nike App and Nike website. Members typically get access to member-only product releases, early access to select launches, personalised recommendations, and occasional member-exclusive offers, in addition to whatever coupon codes are active on this page.'
    },
    {
      q: 'How often are Nike coupons updated?',
      a: 'Our deals team checks and updates Nike coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes.'
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
            <span className="text-[#5B4FBE] font-semibold">Nike Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/nike-logo_gbb4jw.webp"
                      alt="Nike Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Nike Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Footwear, Apparel & Sportswear
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Nike coupon codes and promo codes to save up to 50% on sneakers, up to 35% on Nike kids' shoes and sportswear, plus enjoy a flat 40% off on T-shirts, shorts, joggers, and everyday sportswear for men and women.
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
                  <span>Visit Nike</span>
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

            {/* Promo Banner Panel (Right 5 Columns) — desktop only. Gradient panel reusing the logo since no dedicated banner asset exists. */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center p-10"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-40px] w-52 h-52 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center p-6 shadow-lg">
                  <NextImage
                    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/nike-logo_gbb4jw.webp"
                    alt="Nike Offers"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                    Sale Live Now
                  </span>
                  <h3 className="text-white font-black text-2xl tracking-tight">Up to 50% Off</h3>
                  <p className="text-white/80 text-sm">Footwear, Apparel & Running Gear</p>
                </div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 50%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Nike Coupons &amp; Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Nike coupon codes &amp; offers.</p>
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
                                <span>Valid on select footwear, apparel & accessory categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected styles and product collections.</span>
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
                <span>About Nike</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Nike was founded in 1964 by Bill Bowerman and Phil Knight as Blue Ribbon Sports, before becoming Nike, Inc. in 1971. The brand takes its name from Nike, the Greek goddess of victory — and the Swoosh logo, one of the most recognised marks in the world, has been with the company since 1971.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                In India, Nike retails through its own website, the Nike App, brand stores in major cities, and multi-brand sport retailers. The online store carries the widest range — including international colourways and limited drops that aren't always available in physical stores. A working nike coupon code on CouponsCrew applies directly at Nike India checkout.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Nike</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Nike Footwear & Apparel Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Sneakers, Sportswear & Running Gear
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

            {/* Sidebar Card: Nike Membership Offers */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Nike Membership Offers
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Nike Members get access to benefits that aren't available to guest shoppers. Signing up for the Nike App is free and gives you:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">First access to new releases</span>
        <span>and limited drops before general public availability</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Birthday rewards</span>
        <span>and exclusive member discounts</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Free shipping</span>
        <span>on eligible orders (Nike+ members)</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Nike App discount codes</span>
        <span>and member-only deals</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">24/7 access</span>
        <span>to workout guides and Nike Training Club content</span>
      </div>
    </li>
  </ul>

  <p className="text-xs font-semibold text-[#4A4A6A] mt-4 pt-3 border-t border-[#E8E8F0]">
    Nike App discount codes work at checkout in the same way as standard promo codes — paste at the promo field during checkout. Members also get early access to Jordan Brand releases, which sell out fast on the main site.
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
          Nike Coupon Code: Save on Shoes, Apparel & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            A verified nike coupon code at checkout is the straightforward way to pay less on Nike shoes, clothing, and accessories in India. CouponsCrew lists active codes across all Nike categories — New & Featured, Men, Women, Kids, Jordan, and Sale — so you get the right discount before you complete your order.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Nike Top Selling Categories
    </h3>
    <p>
      Nike's catalogue in India breaks across six main tabs: New & Featured, Men, Women, Kids, Jordan, and Sale. Here's what each section covers and what's worth buying with a nike coupon code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">New & Featured: </strong>
      New & Featured carries the most recent drops — new colourways of core silhouettes, limited releases, and seasonal arrivals. This is where Nike highlights collaborations and freshly launched products. Standard nike discount codes may or may not apply to New & Featured items depending on the code terms.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Men: </strong>
      The Men's section is the broadest part of the Nike catalogue. It covers running shoes, training footwear, lifestyle sneakers, basketball shoes, football boots, and the full apparel range including hoodies, sweatpants, training tees, jackets, and socks.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Top footwear in Men's:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Nike Air Force 1 — the low-profile basketball-turned-lifestyle classic; one of Nike's all-time best sellers</li>
      <li>Nike Air Max / Nike Air Max 90 — visible Air unit, chunky midsole, available in hundreds of colourways</li>
      <li>Nike Dunk Low — originally a basketball shoe, now a streetwear staple; Dunks have been in constant rotation for years</li>
      <li>Nike Blazers — one of Nike's original basketball shoes from the 1970s; a cleaner, less bulky alternative to the Dunk</li>
      <li>Nike Pegasus — Nike's workhorse daily running shoe; reliable, well-cushioned, updated annually</li>
      <li>Nike Air Jordan / Nike Air Jordan 1 — the Jordan Brand flagship; basketball heritage, fashion-forward demand</li>
      <li>Mens Nike Sneakers (lifestyle range) — Court Vision Low, Nike Cortez, Nike Killshot 2, Nike SB</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Men's Apparel:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Nike Hoodie — pullover and zip-up, available in Dri-FIT and standard fleece</li>
      <li>Nike Sweatpants — training and Tech Fleece options; worn on and off the pitch</li>
      <li>Training tees, shorts, jackets, and compression layers</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Women: </strong>
      The Women's section carries dedicated fits, sizing, and colourways across footwear and apparel — not just resized versions of the Men's range.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Top footwear in Women's:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Nike Womens Shoes (running) — Nike Pegasus, Nike Alphafly, Nike ZoomX Invincible; serious options for training and racing</li>
      <li>Nike Running Shoes Women — the full road running range, from daily trainers to race-day options</li>
      <li>Air Force 1 (Women's) — same silhouette as Men's, with more colour and material variation in Women's sizing</li>
      <li>Nike Air Max — lifestyle and sport versions available</li>
      <li>Nike Court Vision Low — clean low-top court shoe; popular as an everyday casual option</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Women's Apparel:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Training leggings and tights, sports bras, running jackets, crop tops, and athleisure hoodies</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Kids: </strong>
      Nike Kids covers footwear and apparel for toddlers through to older children. Key categories:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Kids' versions of Air Force 1, Air Max, and Dunk Low</li>
      <li>Junior football boots (Mercurial range for young players)</li>
      <li>Training shoes and PE-ready footwear</li>
      <li>Kids' hoodies, tracksuits, and sport shorts</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Jordan: </strong>
      Jordan Brand is Nike's premium basketball and lifestyle sub-brand, built on Michael Jordan's legacy. The Jordan section carries:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Nike Air Jordan 1 — the original Jordan shoe; released in 1985, still in production, and one of the most collected sneakers globally</li>
      <li>Nike Jordan / Nike Jordan Shoes — Retro Jordan models from Air Jordan 3 through to Air Jordan 13 and beyond</li>
      <li>Jordan Brand apparel — hoodies, shorts, and tees with the Jumpman logo</li>
    </ul>
    <p>
      Jordan releases in India tend to move fast. Limited colourways and collaborations sell out quickly — worth checking this page for a working nike promo code before a drop.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Sale: </strong>
      The Sale tab carries discounted Nike products across all categories. A nike coupon code sometimes applies on top of Sale prices — check the deal terms on each code here to confirm. The Sale section is the most practical place to find Nike shoes at reduced prices outside of a major sale event.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Nike Shoes: Key Silhouettes Explained
    </h3>
    <p>
      <strong className="text-[#2C2C40]">Nike Air Force 1: </strong>
      Designed by Bruce Kilgore and released in 1982, the Air Force 1 was the first basketball shoe to use Nike Air cushioning. It's been in continuous production longer than almost any other sneaker. The low-top version (Air Force 1 Low) is the most popular. Clean white-on-white pairs sell year-round; seasonal and collab versions come and go.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Air Max & Nike Air Max 90: </strong>
      The Air Max line launched in 1987 with the original Air Max 1 — the first shoe with a visible Air unit in the midsole. The Air Max 90 (1990) became the definitive silhouette of the line: chunkier, more cushioned, and instantly recognisable. The Air Max range now spans running and lifestyle versions.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Dunk Low: </strong>
      Originally a college basketball shoe in 1985, the Dunk Low crossed into skateboarding (as Nike SB Dunk) and then into mainstream streetwear. Nike Dunk Low colourways drop regularly; some sell out within hours.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Air Jordan 1: </strong>
      The Air Jordan 1 launched in 1985 as Michael Jordan's first signature shoe. It was banned by the NBA for its colourway and fined Jordan for wearing it — which became one of the most effective marketing moments in sport history. The AJ1 High OG and Retro versions remain among the most traded sneakers globally.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Pegasus: </strong>
      Nike's Pegasus line has been Nike's go-to daily running shoe since 1983. The current generation uses a React foam midsole and is designed for easy-to-moderate training runs. If you want one pair of nike running shoes that handles most days on the road, the Pegasus is the consistent recommendation.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Alphafly & Nike Alphafly 2: </strong>
      The Alphafly is Nike's top-end marathon racing shoe — the line Eliud Kipchoge wore when he broke the two-hour marathon barrier in 2019. The Alphafly 2 is the updated version. These are performance racing shoes, not everyday trainers. The Nike ZoomX foam and carbon-fibre plate are built for race pace, not daily mileage.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike ZoomX: </strong>
      ZoomX is Nike's highest-energy-return foam, used in the Alphafly and Vaporfly racing lines. When you see ZoomX in the product name, you're looking at Nike's competition performance range.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Court Vision & Nike Court Vision Low: </strong>
      The Court Vision and Court Vision Low are clean, low-profile lifestyle sneakers inspired by basketball court shoes. They're affordable entry points into the Nike catalogue — straightforward designs that work well as everyday shoes.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Cortez: </strong>
      The Nike Cortez is one of Nike's oldest designs — it predates the Swoosh logo. Originally co-designed with Onitsuka Tiger, the Cortez has been a Nike staple since 1972. It's a flat, lightweight shoe with a vintage aesthetic.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Killshot 2: </strong>
      The Killshot 2 is a retro tennis-inspired sneaker — low profile, gum sole, clean upper. It's a quiet option compared to the Air Force 1 or Dunk, with a small but committed following.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike Mercurial: </strong>
      Nike's flagship football boot. The Mercurial line is built for speed — lightweight construction, firm-ground studs, and available in the full range from professional to recreational price points.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Nike SB: </strong>
      Nike SB (Skateboarding) is Nike's skateboarding sub-brand. SB Dunk releases are some of the most sought-after shoes Nike produces, with collaborations and limited colourways that regularly resell well above retail.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Nike Apparel: What's Worth Buying
    </h3>
    <p>
      Beyond shoes, Nike's India catalogue carries a full clothing line:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Nike Hoodie — available in standard fleece and Tech Fleece (a lighter, technical material). Tech Fleece hoodies are worth the price difference if you wear them regularly.</li>
      <li>Nike Sweatpants — training and Tech Fleece options. Nike Joggers and track pants in standard and tapered fits.</li>
      <li>Nike Backpacks — sport and lifestyle packs; the Brasilia range is the most practical all-around option.</li>
      <li>Nike Socks — performance and everyday socks; often heavily discounted during sale events.</li>
    </ul>
    <p>
      Training shorts, running tights, compression layers, and jackets round out the range.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      When to Buy Nike in India: Sale Calendar
    </h3>
    <p>
      Timing a Nike purchase around a sale window gives the best savings before any nike coupon code even applies:
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Nike Sale Calendar Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Sale Period</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Typical Window</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">What to Expect</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { period: 'End of Season Sale (EOSS)', window: 'January and July', expect: 'Widest discounts across shoes and apparel' },
            { period: 'Republic Day Sale', window: 'Late January', expect: 'Site-wide codes common; good for running shoes' },
            { period: 'Holi Sale', window: 'March', expect: 'Apparel-focused; some footwear' },
            { period: 'Independence Day Sale', window: 'August', expect: 'Nike Air Max, Pegasus, and apparel deals' },
            { period: 'Navratri / Dussehra', window: 'October', expect: 'Festive window; footwear and lifestyle' },
            { period: 'Diwali Sale', window: 'October–November', expect: 'Biggest festive sale; site-wide nike discount codes active' },
            { period: 'Year-End Sale', window: 'December', expect: 'Clearance push before new stock arrives' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.period}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.window}
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
      Stacking an active nike promo code on top of an EOSS or Diwali sale price gives the maximum combined savings.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Nike vs Puma vs Adidas
    </h3>
    <p>
      For shoppers comparing before committing, here's how Nike sits alongside its two closest competitors in the Indian market:
    </p>
    <p>
      For those seeking alternatives, Puma offers stylish and functional sportswear at a generally lower price point — from sneakers to apparel. Puma covers everyday sport and casual wear well, and Puma coupons make it a practical alternative when budget is a factor.
    </p>
    <p>
      Adidas brings a strong combination of performance footwear (Ultraboost, Adizero) and heritage lifestyle silhouettes (Samba, Gazelle, Superstar) — comparable to Nike's Jordan and Dunk lines in terms of streetwear demand. Adidas promo codes apply across a similarly broad catalogue.
    </p>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Nike vs Puma vs Adidas Comparison</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Nike</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Puma</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Adidas</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { feature: 'Core Strength', nike: 'Performance sportswear and innovation', puma: 'Sport-inspired lifestyle and value', adidas: 'Performance, lifestyle, and streetwear' },
            { feature: 'Popular Categories', nike: 'Running shoes, basketball shoes, apparel, Jordan', puma: 'Sneakers, training shoes, apparel', adidas: 'Running shoes, football gear, Originals' },
            { feature: 'Premium Product Line', nike: 'Jordan Brand', puma: 'Ferrari, BMW Motorsport collections', adidas: 'Adidas Originals, Y-3' },
            { feature: 'Price Range', nike: 'Mid to Premium', puma: 'Budget to Mid', adidas: 'Mid to Premium' },
            { feature: 'Best For', nike: 'Athletes, runners, sneaker enthusiasts', puma: 'Everyday sportswear and casual wear', adidas: 'Street style fans and performance runners' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.feature}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.nike}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.puma}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.adidas}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Nike Discount Code on CouponsCrew</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying a nike discount code at checkout takes under two minutes:</p>
            <div className="space-y-6">
              {[
                "Find a deal on this page and click Get Code.",
                "The code copies to your clipboard and you land on the Nike India website.",
                "Browse and add products to your cart — Nike Air Force 1, Nike Air Max, Nike Pegasus, apparel, or accessories.",
                "Click Bag at the top right and then Proceed to Checkout.",
                "On the order summary page, find the \"Enter Promo Code\" field.",
                "Paste the nike promo code and click Apply.",
                "The discount updates before you enter payment details."
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
              Note: If a code doesn't work, check the category restriction. Some nike discount codes exclude Sale items, Jordan Brand products, or new arrivals. The deal terms on each code on this page confirm what applies.
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              What to Do If Your Nike Coupon Code Isn't Working
            </h3>

            <p>
              If a nike coupon code from this page isn't applying at checkout, work through this in order:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check the category restriction: </strong>
              Some codes apply only to running shoes, Men's only, or full-price items. Outlet and Sale products are commonly excluded.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check the expiry date: </strong>
              Codes have end dates. If the deal page shows it as active but it's not working, the code may have expired between our last check and your visit. Look for a newer code on this page.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check the minimum order value: </strong>
              Some nike discount codes require a minimum cart total before they activate.
            </p>

            <p>
              <strong className="text-[#2C2C40]">One code per order: </strong>
              Nike India accepts one promo code per order. If you applied one already, remove it and try the new one.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Jordan Brand exclusion: </strong>
              Some site-wide codes specifically exclude Jordan Brand products. If your cart is Jordan-only, look for a Jordan-specific code instead.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Try a different code: </strong>
              CouponsCrew lists multiple active codes. If one doesn't work, try the next one on the page.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Nike Shipping & Return Policy
            </h3>

            <p>
              Nike India delivers orders placed on the official website within 6 to 9 business days, depending on your location. A delivery fee of ₹125 is charged on all orders. Nike Members with a Nike+ membership are eligible for free delivery on qualifying orders.
            </p>

            <p>
              Nike India offers a 30-day return window on purchases. You can wear and trial the product during this period — if it doesn't work for you, it's returnable. Conditions for return:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Original Packaging: </strong>
              Items must be in original packaging.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Unworn & Unwashed: </strong>
              Must be unworn and unwashed (trial use is acceptable).
            </p>

            <p>
              <strong className="text-[#2C2C40]">Tags Included: </strong>
              All accessories and tags must be included.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Resaleable Condition: </strong>
              Items must be in resaleable condition.
            </p>

            <p>
              After Nike inspects the returned product, the refund is processed via the original payment method. Nike+ members can avail of free returns in addition to free delivery.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Customer Support
            </h3>

            <p>
              Nike India customer support is available through the following channels:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Phone: </strong>
              000 800 919 0566
            </p>

            <p>
              <strong className="text-[#2C2C40]">Live Chat: </strong>
              Available 24/7 on the Nike India website and app for prompt assistance with orders, returns, and account queries.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Tips to Save More on Nike India
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Match the code to your category: </strong>
              Read the deal terms before shopping. A nike discount code for running shoes won't apply to Jordan Brand products, and vice versa. Checking terms before adding to cart saves time at checkout.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Stack a sale price with a code: </strong>
              During EOSS or Diwali sale windows, Nike marks products down before a promo code even applies. A working nike coupon code on an already-reduced price is the highest savings scenario on this page.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Sign up as a Nike Member first: </strong>
              The Nike App is free. Nike Member codes and birthday offers are often higher-value than standard site-wide codes. If you haven't signed up yet, do it before your first purchase.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Check the Nike Factory Store: </strong>
              Nike Factory Store outlets carry past-season stock at reduced prices. If you're near a Nike Factory Store location, it's worth checking alongside the online Sale tab before purchasing.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Watch for Nike SB and Jordan drops: </strong>
              Limited Nike SB and Jordan releases in India sell out fast. Bookmark this CouponsCrew page — when a working nike promo code goes live ahead of a drop, it's listed here first.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save on Every Nike Order with CouponsCrew
            </h3>

            <p>
              Nike covers enough ground — running, basketball, football, lifestyle, kids, and Jordan Brand — that there's almost always a relevant nike coupon code on this page for whatever you're shopping. Check the deal that matches your category, apply it before checkout, and save on the order. CouponsCrew keeps this page current so the code you see is the one that actually works.
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
              q: "Does Nike India allow more than one promo code per order?",
              a: "No. Nike India accepts one promo code per order. Use the code with the higher discount value if you have more than one."
            },
            {
              q: "Can I use a nike discount code on Jordan Brand products?",
              a: "It depends on the specific code. Some site-wide nike discount codes exclude Jordan Brand. Check the terms on each deal on this page before adding Jordan products to your cart."
            },
            {
              q: "Where do I enter the nike promo code at checkout?",
              a: "After clicking Proceed to Checkout, look for the \"Enter Promo Code\" field in the order summary on the right side of the page. Paste the code and click Apply."
            },
            {
              q: "Do Nike coupon codes expire?",
              a: "Yes. Every code has an end date. CouponsCrew updates this page regularly — expired codes are removed and new ones are added as they go live."
            },
            {
              q: "Can I stack a nike coupon code with a Nike Sale price?",
              a: "In most cases, yes — if the code terms don't say \"full-price items only.\" During major sale events, Nike India typically allows an additional code on top of already-reduced prices. Confirm by reading the deal terms here."
            },
            {
              q: "What is the return window on Nike India orders?",
              a: "Nike India offers a 30-day return window. Items must be in original packaging and resaleable condition. Nike+ members get free returns; standard orders may incur a return shipping fee."
            },
            {
              q: "Are Nike Dunk Low and Air Jordan 1 available with coupon codes?",
              a: "Both the Dunk Low and Air Jordan 1 are regularly available on Nike India. Availability of coupon codes on these products depends on whether the specific code includes lifestyle and Jordan Brand footwear — check the deal terms here."
            },
            {
              q: "What's the difference between Nike Alphafly and Nike Pegasus?",
              a: "The Pegasus is a daily training shoe — versatile, well-cushioned, built for regular mileage. The Alphafly (and Alphafly 2) is a race-day performance shoe with ZoomX foam and a carbon plate, designed for marathon pace. If you're training regularly, start with the Pegasus. If you're racing, look at the Alphafly."
            },
            {
              q: "Is the Nike App free to join?",
              a: "Yes. Nike Membership and the Nike App are free. Members get early access to releases, birthday rewards, member-only codes, and free shipping on eligible orders."
            },
            {
              q: "How often does CouponsCrew update Nike coupon codes?",
              a: "CouponsCrew checks and updates Nike deals regularly. Expired codes are removed, and new ones are added as they go live on Nike India. Bookmark this page for the most current working codes."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Nike Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Nike Promo Codes", "Air Force 1 Discounts", "Jordan Brand Deals", "Nike Running Shoes", "Nike Member Perks", "Free Shipping Offers", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Nike Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Percentage Off Footwear", sub: "Verified coupon codes across Nike running and lifestyle shoes" },
              { heading: "Apparel & Accessories Promo", sub: "Extra price drops on training gear, hoodies, and backpacks" },
              { heading: "Jordan Brand Special Offers", sub: "Exclusive discount rates on selected Air Jordan collections" },
              { heading: "Nike Member Exclusive Deals", sub: "Extra savings unlocked for logged-in Nike+ members" },
              { heading: "Sale Section Additional Off", sub: "Promotional codes stackable on selected markdown items" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">N</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Nike deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Nike checkout for instant discounts.
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
                <span>Continue to Nike</span>
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
