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
import { Coupon, SAMSUNG_COUPONS } from './samsungCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.samsung.com/in';

export default function SamsungStore() {
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

  const coupons: Coupon[] = SAMSUNG_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Samsung Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/samsung-logo_enoq9x.webp"
                      alt="Samsung Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.6 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Samsung Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Mobiles, TVs & Home Appliances
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Shop Galaxy smartphones, Neo QLED TVs, Bespoke appliances & more at India's leading electronics store. Get the best deals with Samsung coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 70+ Offers
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
                  <span>Visit Samsung</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#1428A0]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/samsung-logo_enoq9x.webp"
                alt="Samsung Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">70+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 40%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹15,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Samsung Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Samsung coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                                <span>Valid on select Samsung Galaxy, TV, and appliance categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected models and product collections.</span>
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
                <span>The Story Behind Samsung</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Samsung Electronics was founded in 1969 in Suwon, South Korea, as an electronics subsidiary of the wider Samsung Group — itself founded in 1938 by Lee Byung-chul as a trading company. What began with black-and-white televisions grew into one of the world's largest technology manufacturers, spanning smartphones, semiconductors, televisions, and home appliances across virtually every country.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                In India, Samsung operates through Samsung India Electronics, headquartered in Noida, home to one of the world's largest mobile phone manufacturing facilities. Twice-yearly Galaxy Unpacked launch events — the S-series in early spring and the Z Fold/Z Flip foldables in mid-year — anchor Samsung's product calendar and are consistently when the deepest coupon codes and exchange bonuses appear.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Samsung</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Samsung Galaxy Unpacked Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Galaxy Phones, TVs & Appliances
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
                Top Categories at Samsung
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Galaxy Smartphones</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Televisions</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Home Appliances</span>
                  <span className="text-[#FF5722] font-bold">No-Cost EMI</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Tablets</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Wearables & Audio</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Samsung */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Samsung Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Samsung coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable Samsung offer without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>We specifically track Indian bank promotions from HDFC and ICICI so you always know which card unlocks the maximum instant discount at checkout.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Exchange Bonus Alerts</span>
                    <span>Extra exchange bonuses on Galaxy Unpacked launch days are flagged on CouponScrew as soon as they go live.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>CouponScrew publishes Samsung sale codes ahead of major events like Galaxy Unpacked and the festive season.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using a Samsung coupon code on CouponScrew is completely free and requires no account or sign-up.</span>
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
                Samsung Coupon Code India (August 2026): Up to 40% Off + Exchange Bonus — Verified
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Samsung Mobiles, TVs, and Appliances Coupon Offers</caption>
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
                        offerType: 'UP TO 40% OFF',
                        category: 'Smartphones',
                        discount: 'Up to 40% OFF',
                        highlights: 'Galaxy S-series flagship phones with exchange bonus.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 15,000',
                        category: 'Exchange Offer',
                        discount: 'Extra ₹15,000',
                        highlights: 'Trade-in bonus on Galaxy Z Fold & Z Flip.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 35% OFF',
                        category: 'Televisions',
                        discount: 'Up to 35% OFF',
                        highlights: 'Neo QLED and Crystal UHD 4K TVs.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'NO COST EMI',
                        category: 'Home Appliances',
                        discount: 'No-Cost EMI',
                        highlights: 'Bespoke refrigerators and washing machines.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 30% OFF',
                        category: 'Wearables',
                        discount: 'Up to 30% OFF',
                        highlights: 'Galaxy Watch and Galaxy Buds.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 2,000',
                        category: 'New User',
                        discount: 'Flat ₹2,000',
                        highlights: 'First order discount on Samsung Shop.',
                        userType: 'New Users'
                      },
                      {
                        offerType: 'UP TO 25% OFF',
                        category: 'Tablets',
                        discount: 'Up to 25% OFF',
                        highlights: 'Galaxy Tab S series tablets with S Pen.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 10% OFF',
                        category: 'Bank Offer',
                        discount: 'Up to 10% OFF',
                        highlights: 'Instant discount with HDFC & ICICI cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 20% OFF',
                        category: 'Student Offer',
                        discount: 'Up to 20% OFF',
                        highlights: 'Galaxy Book laptops for verified students.',
                        userType: 'Students'
                      },
                      {
                        offerType: 'UP TO 50% OFF',
                        category: 'Clearance',
                        discount: 'Up to 50% OFF',
                        highlights: 'Previous-generation Galaxy devices.',
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
                  Looking for a verified Samsung coupon code before placing your next order? You have come to the right place. CouponScrew tracks and verifies every active Samsung discount code, promo code, and exchange bonus daily — so you always get a working offer, never an expired one. From Galaxy phones and TVs to Bespoke appliances, we cover every category. Copy your code above and start saving on your next Samsung order right now.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From Suwon Electronics Subsidiary to Global Technology Leader
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Samsung in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  Today, Samsung Electronics is one of the world's largest technology manufacturers by revenue, with a product line spanning smartphones, semiconductors, televisions, and home appliances sold across virtually every country. In India, Samsung's Noida facility is among the largest mobile phone manufacturing plants in the world, and the company holds a leading share of the Indian smartphone and television markets year after year.
                </p>

                <p>
                  Twice-yearly Galaxy Unpacked events — the S-series launch in early spring and the Z Fold/Z Flip foldables launch in mid-year — anchor the product calendar and consistently bring the deepest coupon codes, exchange bonuses, and pre-booking perks. Add to this the Samsung Shop app, the Samsung Members loyalty programme, and Samsung Care+ extended protection plans, and it becomes clear why using a Samsung coupon code from CouponScrew on top of this already competitive pricing is simply the smartest way to shop here.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Shop at Samsung
                  </h3>
                  <p>
                    Samsung covers every major electronics category under one roof. Here is a detailed look at what each section offers and what kind of Samsung discount codes apply to each.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Galaxy Smartphones — Up to 40% Off: </strong>
                    The Galaxy S-series flagship line and the Z Fold/Z Flip foldables are Samsung's flagship revenue category and the most popular among buyers. You will find the latest S-series with AI-powered camera features, foldable displays, and the more budget-friendly Galaxy A-series aimed at value shoppers. Prices range from ₹15,000 for entry A-series models to ₹1,80,000+ for top-spec foldables.
                    <br />
                    Samsung coupon codes for smartphones are among the most frequently searched, and for good reason — an exchange bonus combined with a bank card discount on a ₹80,000 flagship can save you well over ₹15,000 in one transaction. The best time to apply a Samsung promo code is right around a Galaxy Unpacked launch, when pre-booking perks and trade-in bonuses are at their highest.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Televisions — Up to 35% Off: </strong>
                    Samsung's TV lineup runs from accessible Crystal UHD 4K models to premium Neo QLED and The Frame lifestyle TVs. Sizes range from compact 43-inch models for bedrooms to 85-inch home theatre setups. Neo QLED panels use Mini LED backlighting for sharper contrast, while The Frame doubles as wall art when not in use.
                    <br />
                    A Samsung discount code applied on a large-format TV during a festive sale can bring a ₹1,20,000 Neo QLED down to under ₹85,000. Bundling a soundbar purchase in the same order often qualifies for additional bundle savings visible only at checkout.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Home Appliances — No-Cost EMI: </strong>
                    Samsung's Bespoke range of refrigerators, washing machines, and dishwashers lets buyers customise panel colours to match their kitchen, alongside AI-powered energy efficiency features. No-cost EMI is regularly available on orders through partner banks, making large-ticket appliance purchases considerably easier to plan around.
                    <br />
                    Storage capacity, inverter compressor technology, and smart connectivity via the SmartThings app are consistent selling points across the appliance range. A Samsung coupon code in this category is particularly useful for new homeowners furnishing a kitchen from scratch.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Tablets — Up to 25% Off: </strong>
                    The Galaxy Tab S series pairs a high-resolution AMOLED display with S Pen support, positioning it as a genuine productivity device rather than just a media consumption tablet. Prices start around ₹35,000 for base storage configurations and go up to ₹90,000+ for the top-spec Ultra models with keyboard covers included.
                    <br />
                    Samsung promo codes for tablets are commonly bundled with student discount eligibility, meaning verified students can stack two discount layers on the same Galaxy Book or Tab S purchase.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Wearables & Audio — Up to 30% Off: </strong>
                    Galaxy Watch smartwatches and Galaxy Buds earbuds round out the Samsung ecosystem, with health-tracking features that sync directly with Galaxy smartphones. This category sees strong gifting demand around festive seasons and anniversaries.
                    <br />
                    Samsung coupon codes apply to this category sitewide, meaning you can mix a Watch or Buds purchase with a phone order and apply a single promo code to the entire cart.
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Samsung Coupon Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using a Samsung discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Samsung offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Samsung page.",
                      "Browse and Add to Cart — Go to Samsung Shop and select your products. Check the offer description for any category exclusions before adding items to your cart.",
                      "Go to Checkout — Proceed to checkout. Find the \"Apply Coupon\" field just above the Order Summary section on the checkout page.",
                      "Paste Your Samsung Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your order summary immediately.",
                      "Check Your Exchange Value — If trading in an old device, complete the exchange evaluation before proceeding to payment; this locks in your trade-in bonus.",
                      "Stack Your Bank Card Offer — At the payment step, open the Offers tab. HDFC and ICICI card discounts are displayed here and stack on top of your coupon code. Apply both. This is the step most shoppers miss.",
                      "Complete Payment — Confirm your order. You will receive a delivery confirmation with tracking details via SMS and email."
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
                    Why Millions of Indian Shoppers Choose Samsung
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">India's Largest Mobile Manufacturing Base: </strong>
                    Samsung's Noida facility is among the largest mobile phone manufacturing plants in the world, giving the brand tight control over supply and consistent stock availability across India — a genuine differentiator compared to import-dependent competitors, especially around major launch windows.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Samsung Care+ — Extended Protection Beyond Warranty: </strong>
                    Most buyer regrets around premium electronics come from accidental damage not covered by standard warranty. Samsung Care+ exists specifically to solve this, offering screen and accidental damage protection purchasable at the time of order — often at the same discounted price you found on CouponScrew.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">No-Cost EMI on Bespoke Appliances: </strong>
                    Large appliance purchases do not have to strain your monthly budget. Samsung offers no-cost EMI through HDFC, ICICI, and SBI Card partners, with tenures ranging from 3 to 12 months. A ₹60,000 refrigerator on a 12-month no-cost EMI plan works out to ₹5,000 per month — a manageable amount for most households.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Samsung Members — Free Loyalty Rewards: </strong>
                    The Samsung Members app is free to join and offers loyalty points on every purchase, redeemable against future Samsung Shop orders, along with early access to select Unpacked pre-booking perks. For anyone who upgrades devices regularly, signing up before your next purchase is a straightforward way to unlock extra value.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Galaxy Ecosystem — Connected Devices Across Categories: </strong>
                    Samsung's phones, tablets, watches, and buds are designed to work together through the SmartThings and Samsung Health apps, creating a genuine incentive to stay within one ecosystem rather than mixing brands — which is exactly why bundling purchases across categories with a single coupon code delivers compounding value.
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Shop Smarter — Make Every Rupee Count at Samsung
                  </h3>

                  <p>
                    Every Samsung device you buy is a multi-year investment in your daily tech setup — and there is no reason to pay full price for any of it. CouponScrew keeps every active Samsung coupon code, promo code, and exchange bonus verified and ready for you, updated daily, completely free. Bookmark this page before your next Samsung order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                  Frequently Asked Questions About Samsung Coupon Codes
                </h2>
                {[
                  {
                    q: "What is the best Samsung coupon code available right now?",
                    a: "The best active Samsung coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. Galaxy S-series exchange bonuses and no-cost EMI on Bespoke appliances are typically the highest-value offers, while new users get a flat discount on their first Samsung Shop order. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
                  },
                  {
                    q: "Does Samsung offer no-cost EMI?",
                    a: "Yes. No-cost EMI is available on most Galaxy smartphones, tablets, and Bespoke home appliances through partner banks including HDFC, ICICI, and SBI Card, with tenures ranging from 3 to 12 months depending on the product and card. \"No-cost\" means Samsung absorbs the standard interest charge rather than passing it on, so the total across installments matches the listed price. Some banks charge a small processing fee separate from the interest waiver, so check the EMI breakdown at checkout before choosing this option."
                  },
                  {
                    q: "How does the Samsung exchange offer work?",
                    a: "Samsung's exchange programme lets you trade in an old smartphone, tablet, or select appliance for an instant valuation-based discount on a new purchase. The final exchange value depends on the device's brand, model, and condition, assessed at the time of order. During Galaxy Unpacked launch windows, Samsung frequently adds an extra flat exchange bonus of ₹2,000–₹15,000 on top of the standard trade-in value, which is where a CouponsCrew-listed offer adds the most value."
                  },
                  {
                    q: "Is there a student discount on Samsung products?",
                    a: "Yes. Samsung runs a dedicated Education Store offering verified students a discount — commonly up to 20% — primarily on Galaxy Book laptops and select tablets. Verification is typically done through a student ID or college email address at checkout. This discount can often be combined with an active exchange offer for additional savings."
                  },
                  {
                    q: "What is Samsung's return and replacement policy?",
                    a: "Samsung offers a standard 7 to 10 day replacement window on the official Samsung Shop for manufacturing defects or damage on arrival, subject to the product remaining in original condition with all accessories and packaging. Extended warranty and screen protection plans are available separately through Samsung Care+ at the time of purchase, which cover accidental damage beyond the standard warranty period."
                  },
                  {
                    q: "When does Samsung hold its biggest sales?",
                    a: "Samsung runs its biggest promotional windows around Galaxy Unpacked launch events (S-series in January/February, Z Fold and Z Flip in July/August), plus festive sale periods around Republic Day, Independence Day, and the October–November festive season. Clearance discounts on previous-generation devices are usually deepest right after a new Unpacked launch."
                  },
                  {
                    q: "Can I use a Samsung coupon code with a bank card offer?",
                    a: "Yes. Apply your CouponsCrew Samsung offer at checkout, then pay with an eligible HDFC or ICICI Bank card to unlock an additional instant discount — typically around 10%. This stacks on top of any exchange bonus or sitewide discount, giving you multiple layers of savings on the same order via Samsung's official Shop app or website."
                  },
                  {
                    q: "Are Samsung Shop app deals different from the website?",
                    a: "Occasionally, yes. The Samsung Shop mobile app sometimes carries app-exclusive flash deals or early access to new launches a few hours before the website. Samsung Members app users also get loyalty rewards points on purchases, redeemable against future orders — so it is worth checking both channels before completing a purchase."
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Samsung Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Samsung Coupons", "Galaxy S Series Offers", "Samsung TV Deals", "Galaxy Unpacked Sale", "Exchange Bonus Offers", "No-Cost EMI Samsung", "Samsung Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Samsung Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Galaxy S-Series — Up to 40% OFF", sub: "Flagship phones with exchange bonus — deepest discounts of the year" },
                    { heading: "Extra ₹15,000 Exchange Bonus", sub: "Galaxy Z Fold & Z Flip trade-in — limited launch window" },
                    { heading: "No-Cost EMI on Appliances", sub: "Bespoke refrigerators and washing machines — up to 12 months" },
                    { heading: "10% Bank Card Discount", sub: "HDFC, ICICI — instant discount on Samsung Shop" },
                    { heading: "New User First-Order Offer", sub: "Flat ₹2,000 off for first-time Samsung Shop customers" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">S</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Samsung deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Samsung checkout for instant discounts.
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
                <span>Continue to Samsung</span>
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
