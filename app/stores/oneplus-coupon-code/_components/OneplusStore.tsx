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
import { Coupon, ONEPLUS_COUPONS } from './oneplusCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.oneplus.in/';

export default function OneplusStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Latest');

  const coupons: Coupon[] = ONEPLUS_COUPONS;

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

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'How do I use a OnePlus coupon code?',
      a: 'To use a OnePlus coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the OnePlus website or app. If it is a deal, simply click "Visit OnePlus" to get the discount auto-applied.'
    },
    {
      q: 'Why is my OnePlus coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every OnePlus coupon code listed here is checked before publishing, and codes are periodically re-verified so you spend less time on offers that no longer work.'
    },
    {
      q: 'How often are OnePlus coupons updated?',
      a: 'We refresh this OnePlus store page regularly with the latest discounts, verified coupon codes, and offers so you always see current deals.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one promotional code can be applied per order. However, a coupon code can sometimes be combined with an automatic sitewide offer or a select bank card discount.'
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
            <Link href="/" className="hover:text-[#EB0028] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#EB0028] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#EB0028] font-semibold">OnePlus Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/oneplus-logo_nuqzrx.webp"
                      alt="OnePlus Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">OnePlus</h1>
                    <span className="bg-[#FDE7EA] text-[#EB0028] text-xs font-bold px-3 py-1 rounded-full border border-[#FBD0D6]">
                      Smartphones, Earbuds & Accessories
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover the best OnePlus coupon codes and offers to save on smartphones, TVs, earbuds, and accessories. Enjoy up to 50% OFF, ₹4,000 bank discounts, exchange bonuses, free OnePlus Buds 3, welcome gift cards, no-cost EMI, and exclusive member benefits.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#EB0028] bg-[#FDE7EA] px-2.5 py-1 rounded-full border border-[#FBD0D6]">
                      <Tag size={14} /> 25+ Offers
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
                  className="bg-[#000000] hover:bg-[#1A1A1A] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit OnePlus</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D1D1E9] text-[#1A1A2E] hover:bg-gray-50'
                    }`}
                >
                  <Heart size={16} className={isFavorite ? 'fill-current text-red-500' : 'text-gray-400'} />
                  <span>{isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</span>
                </button>
              </div>
            </div>

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-[#000000]"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8 gap-3">
                <span className="text-xs font-bold uppercase tracking-[3px] text-[#EB0028]">OnePlus Offers</span>
                <span className="text-2xl font-black">Save on Smartphones & Accessories</span>
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
            <div className="w-11 h-11 bg-[#FDE7EA] text-[#EB0028] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">25+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0F0F0] text-[#000000] rounded-2xl flex items-center justify-center shrink-0">
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
            <div className="w-11 h-11 bg-[#FDE7EA] text-[#EB0028] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">OnePlus Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified OnePlus coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#EB0028) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#EB0028] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                {/* Soft Tint Badge using Accent (#000000) */}
                <span className="bg-[#000000]/10 text-[#000000] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#EB0028] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#EB0028]" />
                    <span>Valid on select smartphones, earbuds & accessories categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#EB0028]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#EB0028]" />
                    <span>Covers selected models and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#000000]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
                  <span className="font-black text-sm sm:text-base tracking-[1px] text-[#0B1A30]">
                    {coupon.code}
                  </span>
                  <button
                    onClick={() => handleCopyCode(coupon)}
                    className="p-1 hover:bg-slate-50 rounded"
                  >
                    {isCopied ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} className="text-slate-400" />
                    )}
                  </button>
                </div>
              )}

              {/* Action Button - Vibrant CTA Accent (#000000) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#000000] hover:bg-[#1A1A1A] text-white"
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
                <Info size={16} className="text-[#EB0028]" />
                <span>About OnePlus — The Brand That Started with "Never Settle"</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
OnePlus was founded in December 2013 by Pete Lau and Carl Pei with a simple but bold positioning — flagship-level hardware at a price point that didn't require a second mortgage. The brand's first device, the OnePlus One, launched in 2014 and was available exclusively through an invite system — a marketing move that created massive demand while reinforcing the brand's premium yet accessible identity.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
In India, OnePlus found fertile ground almost immediately. The brand launched on Flipkart in 2014 and built one of the most loyal smartphone communities in the country — the OnePlus community has driven product feedback, beta testing, and organic word-of-mouth that competitors with far larger marketing budgets have struggled to replicate.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
                OnePlus phones have consistently delivered features associated with flagship devices — high-refresh-rate displays, fast charging technology (Warp Charge and SUPERVOOC), powerful processors, and clean software — at prices positioned below Samsung and Apple flagship equivalents.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
Today, OnePlus operates across two clear product tiers in India. The numbered flagship series (OnePlus 11, OnePlus 12, OnePlus 13) competes directly with Samsung Galaxy S and iPhone equivalents. The OnePlus Nord series (OnePlus Nord, OnePlus Nord 2, OnePlus Nord CE, OnePlus Nord 5) targets the mid-range segment where the majority of Indian smartphone upgrades happen.
              </p>
                  <p className="text-[#1A1A2E] text-sm mb-3">
                OnePlus is a subsidiary of BBK Electronics, the Chinese parent group that also owns OPPO, Vivo, and Realme — though each brand operates with its own product positioning, supply chain, and market strategy.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#EB0028] hover:text-[#EB0028] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit OnePlus</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#EB0028] to-[#000000] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">OnePlus Seasonal Sale</h3>
                <span className="inline-block bg-[#000000] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Smartphones, Earbuds & more
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#EB0028] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    Exclusive Benefits with OnePlus Products
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Beyond the product itself, buying OnePlus comes with a range of exclusive benefits that add long-term value to the purchase.
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">OxygenOS — Clean, Fast Android</span>
        <span>OnePlus phones run OxygenOS, a near-stock Android experience with performance-focused customisations. OxygenOS is widely regarded as one of the best Android skins available — minimal bloatware, fast updates, and a UI that stays out of the way. OnePlus commits to 4 years of Android OS updates and 5 years of security patches on flagship models.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">SUPERVOOC &amp; Wireless Charging</span>
        <span>OnePlus&apos;s SUPERVOOC fast charging technology charges the OnePlus 13 from 0 to 100% in approximately 28 minutes via the included 100W charger. Wireless charging at 50W is also available. For users who have lived with slow overnight charging, this is a genuinely transformative feature.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Hasselblad Camera Partnership</span>
        <span>Since the OnePlus 9 Pro, OnePlus has co-developed its camera systems with Hasselblad — a Swedish camera manufacturer with a legacy in professional photography. The partnership covers colour science calibration, lens coatings, and camera app interface design. This collaboration extends through the OnePlus 12 and OnePlus 13.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">OnePlus Community &amp; Early Access</span>
        <span>OnePlus maintains one of India&apos;s most active smartphone communities — the OnePlus Community forum and app. Community members get early access to new products, Beta OxygenOS builds, and community-exclusive OnePlus offer codes before they go live to the public.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Exchange Programme</span>
        <span>OnePlus&apos;s exchange programme allows buyers to trade in their existing smartphone (any brand) and receive a guaranteed exchange value deducted from the new device price. Combined with an OnePlus discount code or bank card offer, the exchange programme is the most reliable way to maximise savings on a new OnePlus phone.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">OnePlus Service Centres</span>
        <span>OnePlus operates an authorised service centre network across major Indian cities, with doorstep pickup and repair services available in select locations. This is particularly relevant for flagship buyers — the OnePlus 13 and OnePlus 12 are premium devices that benefit from authorised servicing.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Extended Warranty &amp; Protection Plans</span>
        <span>OnePlus offers extended warranty and accidental damage protection plans at checkout. These can be purchased alongside the device and sometimes qualify for a OnePlus promo code discount when bundled with a phone purchase.</span>
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
          Save on Every OnePlus Purchase with a Verified OnePlus Coupon Code
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
          {ONEPLUS_COUPONS.map((coupon) => (
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

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            OnePlus is one of India's most popular smartphone brands — and with a working OnePlus coupon code, every phone, smartwatch, audio product, or accessory purchase becomes more affordable. Whether you're buying the flagship OnePlus 13, exploring the mid-range OnePlus Nord series, or upgrading your audio setup with OnePlus earbuds, there's almost always a discount available through CouponsCrew.
          </p>

          <p>
            CouponsCrew lists, verifies, and updates OnePlus discount codes, OnePlus promo codes, and OnePlus offer codes daily. Every code on this page has been checked before going live — no expired deals, no broken codes at checkout.
          </p>

          <p>
            From new user offers and bank card cashback to seasonal sale discounts and exchange bonuses, this page covers every active saving available on OnePlus online today.
          </p>

          <div className="space-y-6 text-slate-700">
  {/* Popular Products Offered By OnePlus Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Popular Products Offered By OnePlus
    </h3>
    <p className="mb-4">
      OnePlus's product catalogue in India spans smartphones, wearables, audio, and TV — here's a breakdown of the most popular products and where an OnePlus coupon code or OnePlus discount code delivers the most value.
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus 13 — The 2025 Flagship
        </h4>
        <p className="mb-2">
          The OnePlus 13 is the brand's current top-of-the-line flagship, featuring the Snapdragon 8 Elite chipset, a 6.82-inch 2K ProXDR display with 120Hz refresh rate, 50MP Hasselblad-tuned triple camera system, and 100W SUPERVOOC wired charging with 50W wireless charging support. The OnePlus 13 launched in India in early 2025 and sits at the top of the OnePlus lineup in terms of performance, camera capability, and build quality.
        </p>
        <p className="mb-2">
          The OnePlus 13 is available in Midnight Ocean and Arctic Dawn colour options and comes in 12GB + 256GB and 16GB + 512GB storage configurations. At its price point, it competes directly with the Samsung Galaxy S25 and provides a strong alternative for Android power users who prefer OxygenOS.
        </p>
        <p>
          A valid OnePlus coupon code or bank card cashback offer can bring the effective OnePlus 13 price down meaningfully — check CouponsCrew for the latest OnePlus 13 discount offers before purchasing.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          One Plus 12 — Premium Performance at a Reduced Price
        </h4>
        <p className="mb-2">
          With the OnePlus 13 now available, the OnePlus 12 has become one of the best value flagship smartphones in India. Powered by the Snapdragon 8 Gen 3 processor with a Hasselblad-calibrated camera system and 100W wired + 50W wireless charging, the OnePlus 12 delivers near-identical flagship performance to its successor at a lower price point.
        </p>
        <p>
          For buyers who don't need the latest processor generation, the OnePlus 12 combined with an OnePlus discount code or exchange bonus makes for one of the strongest value flagship purchases currently available in India.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus Nord 5 — The 2025 Mid-Range Leader
        </h4>
        <p className="mb-2">
          The OnePlus Nord 5 is the latest addition to OnePlus's mid-range Nord family, delivering a significant performance and camera upgrade over its predecessor. Featuring the Snapdragon 7s Gen 3 processor, a 6.77-inch AMOLED display with 120Hz refresh rate, and a 50MP primary camera with optical image stabilisation, the OnePlus Nord 5 is positioned as one of the best mid-range smartphones in the ₹25,000–₹35,000 segment.
        </p>
        <p>
          For shoppers in the mid-range segment, an OnePlus promo code or OnePlus offer code applied to a OnePlus Nord 5 purchase is one of the highest-value coupon applications available on the platform.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus Nord — The Series That Defined Affordable Flagships
        </h4>
        <p className="mb-2">
          The OnePlus Nord series launched in 2020 and immediately redefined what was possible in the mid-range segment. Starting from the original OnePlus Nord, through OnePlus Nord 2 (which introduced the Dimensity 1200 chip to the mainstream), to the current Nord 5, each generation has delivered a meaningful upgrade in the ₹20,000–₹35,000 range.
        </p>
        <p>
          Earlier Nord models — including the OnePlus Nord 2 and the widely popular OnePlus 7 Pro (which technically predates the Nord branding) — are now available at significantly reduced prices and remain strong performers for buyers on tighter budgets.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus 11R 5G — Performance at a Mid-Premium Price
        </h4>
        <p>
          The OnePlus 11R 5G bridges the gap between the Nord series and the flagship OnePlus 11. Featuring the Snapdragon 8+ Gen 1 chipset, a 6.7-inch 120Hz AMOLED display, and 100W SUPERVOOC charging, the OnePlus 11R 5G delivers near-flagship performance at a mid-premium price. It remains one of the most popular OnePlus phones for buyers who want the performance of a flagship without the flagship price tag.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus 9RT — The Performance Value Pick
        </h4>
        <p>
          The OnePlus 9RT was a performance-focused variant of the OnePlus 9 series, offering the Snapdragon 888 processor and a 50MP Sony IMX766 camera at a price point below the standard OnePlus 9 Pro. Now available at a substantially reduced price, the OnePlus 9RT is a strong option for budget-conscious buyers seeking raw processing performance. An OnePlus discount code or exchange offer applied to an OnePlus 9RT purchase can make it one of the most cost-effective performance smartphones available.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus 9 Pro — Still Capable, Now Affordable
        </h4>
        <p>
          The OnePlus 9 Pro was the brand's top flagship at launch, featuring co-development with Hasselblad for its camera system — a partnership that continues through the current OnePlus lineup. With the Snapdragon 888 processor and wireless charging support, the OnePlus 9 Pro remains capable for most users and is available at a fraction of its original price. Combined with an OnePlus offer code or exchange bonus, it represents excellent value in the refurbished or older-stock market.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus 10 Series
        </h4>
        <p>
          The OnePlus 10 series includes the OnePlus 10 Pro — a flagship device featuring the Snapdragon 8 Gen 1 and Hasselblad camera tuning. Like the OnePlus 9 Pro, the OnePlus 10 series has become more affordable with newer generations taking the flagship mantle. For buyers looking for a capable flagship at a lower price, the OnePlus 10 series combined with an OnePlus discount code is worth considering.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          OnePlus Wearables & Audio
        </h4>
        <p className="mb-2">
          Beyond smartphones, OnePlus offers a growing range of complementary products:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>OnePlus Watch 2 —</strong> A premium smartwatch with Wear OS, 100-hour battery life, and fitness tracking</li>
          <li><strong>OnePlus Buds Pro 2 —</strong> Active noise cancellation earbuds with spatial audio support</li>
          <li><strong>OnePlus Bullets Wireless Z2 —</strong> Affordable neckband earphones with strong battery life</li>
          <li><strong>OnePlus Nord Buds 2 —</strong> Budget-friendly true wireless earbuds targeting Nord phone buyers</li>
        </ul>
        <p>
          OnePlus promo codes and OnePlus offer codes frequently apply to audio and wearable purchases, making these accessories more accessible when bought alongside a OnePlus phone.
        </p>
      </div>
    </div>
  </div>

  {/* Discounts on Popular OnePlus Phones Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Discounts on Popular OnePlus Phones
    </h3>
    <p className="mb-4">
      Understanding where discounts are deepest helps you time your OnePlus purchase for maximum savings.
    </p>
    <div className="space-y-3">
      <p>
        <strong className="text-[#2C2C40]">OnePlus 13 Discounts: </strong>The OnePlus 13 is newest and carries full launch pricing. Bank card cashback offers and exchange bonuses are the primary routes to savings on the OnePlus 13. A OnePlus coupon code from CouponsCrew may unlock an additional flat discount during promotional periods.
      </p>
      <p>
        <strong className="text-[#2C2C40]">OnePlus 12 Discounts: </strong>With the OnePlus 13 now available, the OnePlus 12 sees regular discount events. During Amazon and Flipkart sale events (Great Indian Festival, Big Billion Days), OnePlus 12 discounts of ₹3,000–₹8,000 off the MRP are common. A OnePlus discount code stacked on a sale price can push the effective price even lower.
      </p>
      <p>
        <strong className="text-[#2C2C40]">OnePlus Nord 5 Discounts: </strong>As the latest Nord model, the Nord 5 offers moderate launch discounts. Exchange offers are particularly generous on Nord series phones — trading in an older OnePlus Nord, OnePlus Nord 2, or OnePlus 11R 5G can unlock a significant additional reduction.
      </p>
      <p>
        <strong className="text-[#2C2C40]">OnePlus 11R 5G Discounts: </strong>The OnePlus 11R 5G now sees regular price drops and is frequently featured in platform flash sales. A OnePlus promo code combined with an exchange bonus on the 11R 5G is one of the best value-for-money purchasing strategies available.
      </p>
      <p>
        <strong className="text-[#2C2C40]">Older Models (9RT, 9 Pro, 10 Series): </strong>OnePlus phones like the OnePlus 9RT, OnePlus 9 Pro, and OnePlus 10 are available at steep discounts from their original prices. An OnePlus offer code applied to already-reduced older stock pricing can yield exceptional value.
      </p>
    </div>
  </div>

  {/* Exclusive Benefits with OnePlus Products Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-3">
      Exclusive Benefits with OnePlus Products
    </h3>
    <p className="mb-4">
      Beyond the product itself, buying OnePlus comes with a range of exclusive benefits that add long-term value to the purchase.
    </p>

    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OxygenOS — Clean, Fast Android
        </h4>
        <p>
          OnePlus phones run OxygenOS, a near-stock Android experience with performance-focused customisations. OxygenOS is widely regarded as one of the best Android skins available — minimal bloatware, fast updates, and a UI that stays out of the way. OnePlus commits to 4 years of Android OS updates and 5 years of security patches on flagship models.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          SUPERVOOC & Wireless Charging
        </h4>
        <p>
          OnePlus's SUPERVOOC fast charging technology charges the OnePlus 13 from 0 to 100% in approximately 28 minutes via the included 100W charger. Wireless charging at 50W is also available. For users who have lived with slow overnight charging, this is a genuinely transformative feature.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Hasselblad Camera Partnership
        </h4>
        <p>
          Since the OnePlus 9 Pro, OnePlus has co-developed its camera systems with Hasselblad — a Swedish camera manufacturer with a legacy in professional photography. The partnership covers colour science calibration, lens coatings, and camera app interface design. This collaboration extends through the OnePlus 12 and OnePlus 13.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus Community & Early Access
        </h4>
        <p>
          OnePlus maintains one of India's most active smartphone communities — the OnePlus Community forum and app. Community members get early access to new products, Beta OxygenOS builds, and community-exclusive OnePlus offer codes before they go live to the public.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Exchange Programme
        </h4>
        <p>
          OnePlus's exchange programme allows buyers to trade in their existing smartphone (any brand) and receive a guaranteed exchange value deducted from the new device price. Combined with an OnePlus discount code or bank card offer, the exchange programme is the most reliable way to maximise savings on a new OnePlus phone.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          OnePlus Service Centres
        </h4>
        <p>
          OnePlus operates an authorised service centre network across major Indian cities, with doorstep pickup and repair services available in select locations. This is particularly relevant for flagship buyers — the OnePlus 13 and OnePlus 12 are premium devices that benefit from authorised servicing.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-1">
          Extended Warranty & Protection Plans
        </h4>
        <p>
          OnePlus offers extended warranty and accidental damage protection plans at checkout. These can be purchased alongside the device and sometimes qualify for a OnePlus promo code discount when bundled with a phone purchase.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* How to Use Section */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a OnePlus Coupon Code — Step by Step</h3>
            <p className="text-gray-700 font-bold -mt-4">Redeeming a OnePlus discount code or OnePlus promo code is straightforward on the OnePlus website and on partner platforms like Amazon and Flipkart.</p>

            <div className="space-y-6">
              <h4 className="text-base font-black text-black uppercase tracking-wider">On the OnePlus Website (oneplus.in):</h4>
              {[
                "Visit oneplus.in and browse by product category or search for the specific OnePlus phone you want.",
                "Select your configuration (colour, storage) and click \"Buy Now.\"",
                "Add the product to your cart and proceed to checkout.",
                "Look for the \"Apply Coupon Code\" or \"Have a promo code?\" field.",
                "Enter your OnePlus coupon code from CouponsCrew and click Apply.",
                "Confirm the discount is reflected in your order total.",
                "Select your payment method — UPI, credit/debit card, EMI, or net banking — and complete your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h4 className="text-base font-black text-black uppercase tracking-wider">On Amazon or Flipkart:</h4>
              {[
                "Search for the OnePlus phone or product on Amazon or Flipkart.",
                "Add to cart and proceed to checkout.",
                "Apply any available Amazon or Flipkart coupon code in the promo code field.",
                "Select an eligible bank card to activate any additional cashback offer.",
                "Complete your purchase."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-6">
              <strong className="text-[#5B4FBE]">Tip:</strong> OnePlus's best deals are often available during Amazon Great Indian Festival or Flipkart Big Billion Days. Combining a platform coupon code with a bank card offer during these events delivers the deepest discounts on OnePlus phones.
            </p>
          </div>

          {/* Competitor Comparison Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">OnePlus vs Competitors — How It Compares</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Feature</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">OnePlus 13</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Samsung Galaxy S25</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Apple iPhone 16</th>
                    <th className="p-4 text-xs font-black uppercase text-gray-700 tracking-wider">Google Pixel 9</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { feature: "Processor", op: "Snapdragon 8 Elite", sam: "Snapdragon 8 Elite", app: "Apple A18", goog: "Google Tensor G4" },
                    { feature: "Display", op: "6.82\" 2K 120Hz AMOLED", sam: "6.2\" Dynamic AMOLED", app: "6.1\" Super Retina XDR", goog: "6.3\" LTPO OLED" },
                    { feature: "Charging Speed", op: "100W wired / 50W wireless", sam: "25W wired / 15W wireless", app: "27W wired / 15W wireless", goog: "30W wired / 23W wireless" },
                    { feature: "Camera Partnership", op: "Hasselblad", sam: "—", app: "—", goog: "Google computational photography" },
                    { feature: "Software Updates", op: "4 years OS / 5 years security", sam: "7 years OS + security", app: "5–6 years iOS", goog: "7 years OS + security" },
                    { feature: "Starting Price (India)", op: "~₹69,999", sam: "~₹80,999", app: "~₹79,900", goog: "~₹75,999" },
                    { feature: "Best OnePlus coupon code savings", op: "Yes — via CouponsCrew", sam: "Platform-specific", app: "Limited", goog: "Platform-specific" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.feature}</td>
                      <td className="p-4 font-bold text-[#5B4FBE]">{row.op}</td>
                      <td className="p-4 font-bold text-gray-700">{row.sam}</td>
                      <td className="p-4 font-bold text-gray-700">{row.app}</td>
                      <td className="p-4 font-bold text-gray-700">{row.goog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              For buyers who prioritise charging speed, display quality, and clean Android software at a competitive flagship price, OnePlus 13 is consistently among the strongest value propositions. A OnePlus coupon code from CouponsCrew makes the price advantage even more pronounced.
            </p>
          </div>

          {/* Sale Calendar Table */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-black text-[#5B4FBE]">OnePlus Sale Calendar — Best Times to Use Your OnePlus Promo Code</h3>
            <div className="overflow-x-auto bg-white rounded-[32px] border border-[#f0f0f0] shadow-sm p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-4 text-xs font-black uppercase text-gray-400 tracking-wider">Period</th>
                    <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">Offer Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    { period: "Republic Day Sale (Jan 26)", offer: "Flat discount + bank offers on OnePlus phones" },
                    { period: "OnePlus Anniversary Sale (varies)", offer: "Brand-specific OnePlus coupon code campaigns" },
                    { period: "Holi Sale (March)", offer: "Festive OnePlus discount code" },
                    { period: "Amazon Prime Day (July)", offer: "Deep discounts on OnePlus Nord & older flagships" },
                    { period: "Independence Day Sale (Aug 15)", offer: "Sitewide OnePlus offer code campaigns" },
                    { period: "Flipkart Big Billion Days (Oct)", offer: "Largest OnePlus phone discount event of the year" },
                    { period: "Amazon Great Indian Festival (Oct)", offer: "Competing sale with comparable OnePlus discounts" },
                    { period: "Diwali Sale (Oct–Nov)", offer: "Festive exchange bonus + OnePlus promo code" },
                    { period: "Year-End Sale (Dec)", offer: "Stock clearance on older OnePlus models" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="p-4 font-black text-black">{row.period}</td>
                      <td className="p-4 font-bold text-gray-700">{row.offer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 font-bold text-sm bg-[#f0eeff] p-4 rounded-2xl border border-[#5B4FBE]/10 mt-4">
              <strong className="text-[#5B4FBE]">Tip:</strong> The deepest discounts on OnePlus phones happen during Flipkart Big Billion Days and Amazon Great Indian Festival. These October sale events consistently offer the highest combination of platform discount, bank card cashback, and exchange bonus. Mark your calendar and have your OnePlus coupon code ready from CouponsCrew before the sale goes live.
            </p>
          </div>

          {/* Saving Tips */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">OnePlus Saving Tips from CouponsCrew</h3>
            <div className="space-y-6">
              {[
                "Stack an exchange bonus with a OnePlus coupon code. The exchange programme accepts any smartphone brand. Trading in an old device — even an older OnePlus Nord or OnePlus 9RT — while applying a OnePlus discount code delivers the maximum combined saving.",
                "Buy flagship predecessors, not just the latest model. The OnePlus 12, OnePlus 11R 5G, and OnePlus 9 Pro offer near-flagship performance at significantly reduced prices now that newer models are available. An OnePlus offer code applied to last-gen stock is one of the best value strategies in the premium segment.",
                "Buy during the October sale window. Amazon Great Indian Festival and Flipkart Big Billion Days happen within weeks of each other in October — competition between the platforms drives OnePlus discounts to their annual peak.",
                "Use an eligible bank card at checkout. HDFC, Axis, SBI, ICICI, and Kotak credit cards frequently offer 5%–10% instant discount or cashback on electronics purchases. Combined with a OnePlus promo code, this is effectively free money.",
                "Check the OnePlus Community for exclusive codes. OnePlus Community members sometimes receive exclusive OnePlus offer codes not published publicly. If you're a regular OnePlus user, joining the community is worthwhile.",
                "Bundle accessories for combined discounts. Buying OnePlus Buds or a OnePlus Watch alongside a phone sometimes unlocks bundle pricing or allows a OnePlus coupon code to apply across the full order value.",
                "Verify the OnePlus coupon code on CouponsCrew before checkout. All OnePlus discount codes listed here are checked before going live. A 60-second visit to CouponsCrew before any OnePlus purchase can save ₹500–₹5,000 depending on the product."
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Brands */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Brands to Explore Alongside OnePlus
            </h3>
            <p className="mb-4">
              If you're comparing smartphone options, these brands are worth considering:
            </p>
            <p>
              <strong className="text-[#2C2C40]">Samsung — </strong>
              Galaxy S and Galaxy A series covering flagship to budget segments; strong after-sales network
            </p>
            <p>
              <strong className="text-[#2C2C40]">Apple — </strong>
              iPhone 16 series for buyers in the premium segment preferring iOS
            </p>
            <p>
              <strong className="text-[#2C2C40]">Google Pixel — </strong>
              Pixel 9 series offering the cleanest Android experience with Google's AI camera processing
            </p>
            <p>
              <strong className="text-[#2C2C40]">Realme — </strong>
              Budget to mid-range smartphones with aggressive pricing; shares BBK Group heritage with OnePlus
            </p>
            <p>
              <strong className="text-[#2C2C40]">iQOO — </strong>
              Performance-focused smartphones from Vivo's sub-brand targeting gamers and power users
            </p>
            <p>
              <strong className="text-[#2C2C40]">Motorola — </strong>
              Strong in the budget and mid-range segment with stock Android and long battery life
            </p>
            <p className="pt-2">
              CouponsCrew covers coupon codes for all major smartphone brands and electronics retailers. Visit individual store pages for verified, up-to-date OnePlus discount codes and competitor offers.
            </p>

            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Why Use CouponsCrew for OnePlus Promo Codes?
            </h3>
            <p>
              CouponsCrew verifies every OnePlus coupon code before it goes live on this page. Our deals team checks and updates codes daily — removing expired OnePlus offer codes and adding new ones so every listing is accurate and working.
            </p>
            <p>
              Smartphone purchases are high-value decisions. A verified OnePlus discount code from CouponsCrew can save ₹500–₹5,000 on a single purchase — making it one of the highest-return uses of our platform.
            </p>
            <p>
              Bookmark this page and check before every OnePlus purchase — whether you're buying the OnePlus 13, OnePlus Nord 5, OnePlus 11R 5G, or a pair of OnePlus Buds. A 60-second check on CouponsCrew regularly delivers meaningful savings.
            </p>
          </div>

          {!isReadMore && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
          )}
        </div>

        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions About OnePlus Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I apply a OnePlus coupon code?",
              a: "Visit oneplus.in, add your chosen product to the cart, and proceed to checkout. Enter your OnePlus coupon code in the \"Apply Coupon\" field and click Apply. The discounted price will update in your order summary before payment."
            },
            {
              q: "Q2. Why is my OnePlus discount code not working?",
              a: "Common reasons include: the code has expired, the product isn't eligible (some codes apply only to specific models), the minimum purchase value hasn't been met, or the code is for new users only. Check the terms on CouponsCrew for the specific OnePlus promo code you're using."
            },
            {
              q: "Q3. Can I use a OnePlus coupon code on Amazon or Flipkart?",
              a: "OnePlus-specific coupon codes typically apply only on oneplus.in. When buying through Amazon or Flipkart, use platform-specific coupon codes available on CouponsCrew instead — these apply to OnePlus purchases made through those platforms."
            },
            {
              q: "Q4. What is the current price of the OnePlus 13 in India?",
              a: "The OnePlus 13 starts at approximately ₹69,999 for the 12GB + 256GB variant and ₹74,999 for the 16GB + 512GB variant. Prices may vary with bank card offers, exchange bonuses, and during sale events. Apply a OnePlus coupon code from CouponsCrew for the best available price."
            },
            {
              q: "Q5. Which OnePlus Nord model should I buy in 2026?",
              a: "The OnePlus Nord 5 is the latest and most capable mid-range model. For budget buyers, the OnePlus Nord CE series and older Nord models like the OnePlus Nord 2 are available at lower prices with strong performance. Apply an OnePlus discount code or exchange bonus to get the best deal on your chosen Nord model."
            },
            {
              q: "Q6. Is OnePlus 11R 5G still worth buying in 2026?",
              a: "Yes, the OnePlus 11R 5G remains a strong performer in the mid-premium segment. With the Snapdragon 8+ Gen 1 and 100W charging, it handles demanding tasks well. At its current discounted price — further reduced with an OnePlus promo code — it's one of the best value-for-money Android smartphones available."
            },
            {
              q: "Q7. Does OnePlus offer an exchange programme?",
              a: "Yes. OnePlus accepts trade-ins of any smartphone brand through its exchange programme on oneplus.in. The exchange value is deducted from the new device price. Combining an exchange bonus with a OnePlus offer code maximises total savings."
            },
            {
              q: "Q8. What are the exclusive benefits of buying a OnePlus phone?",
              a: "Key benefits include OxygenOS (clean Android), SUPERVOOC fast charging, Hasselblad camera partnership on flagship models, 4 years of Android OS updates, OnePlus Community access, and an authorised service centre network across India."
            },
            {
              q: "Q9. Can I use a OnePlus coupon code for accessories?",
              a: "Many OnePlus promo codes apply to accessories including earbuds, smartwatches, and cases. Some codes are product-category specific — check the terms on CouponsCrew to confirm whether the code applies to accessories or phones only."
            },
            {
              q: "Q10. How do I contact OnePlus India customer support?",
              a: "OnePlus India customer support is available through the Help Centre at oneplus.in/support. You can also use the OnePlus Community app or visit an authorised OnePlus service centre for hardware support queries."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular OnePlus Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["OnePlus 13 Offers", "OnePlus Nord 5 Deals", "OnePlus Coupon Code", "Bank Card Cashback", "Exchange Bonus", "OnePlus Buds Deals", "OnePlus vs Samsung", "Amazon Great Indian Festival"].map(tag => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm hover:bg-[#5B4FBE] hover:text-[#5B4FBE] transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top OnePlus Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Instant Bank Discount", sub: "Save up to ₹5,000 using ICICI, HDFC & SBI cards" },
              { heading: "OnePlus Exchange Bonus", sub: "Get extra value when trading in your old smartphone" },
              { heading: "Nord Series Promo Codes", sub: "App-exclusive discounts on OnePlus Nord models" },
              { heading: "Audio & Wearables Sale", sub: "Up to 30% off on OnePlus Buds and Smartwatches" },
              { heading: "OnePlus Community Offers", sub: "Exclusive promo codes for verified community members" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">1+</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get OnePlus deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#EB0028]">{activeModalCoupon.code}</span> at OnePlus checkout for instant discounts.
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
                className="w-full bg-[#000000] hover:bg-[#1A1A1A] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to OnePlus</span>
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
