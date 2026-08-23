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
import { Coupon, AJIO_COUPONS } from './ajioCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.ajio.com/';

export default function AjioStore() {
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

  const coupons: Coupon[] = AJIO_COUPONS;

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
      q: 'How do I use an Ajio coupon code?',
      a: 'To use an Ajio coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Ajio website or app. If it is a deal, simply click "Visit Ajio" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Ajio coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Double-check the terms listed with the code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Ajio coupon code listed on this page is checked before publishing, and we regularly review active offers to help ensure you see working codes rather than expired ones.'
    },
    {
      q: 'How often are Ajio coupons updated?',
      a: 'Our deals team reviews and updates Ajio coupons regularly. Codes that appear to have stopped working are flagged for re-verification so you can spend less time testing offers.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, most online stores including Ajio allow only one promo code per order. You may sometimes be able to combine a coupon code with an automatic sitewide discount, but stacking multiple manual codes is usually not supported.'
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
            <Link href="/" className="hover:text-[#2B2B2B] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#2B2B2B] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#2B2B2B] font-semibold">Ajio Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/ajio-logo_bmpwf6.webp"
                      alt="Ajio Logo"
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
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Ajio</h1>
                    <span className="bg-[#F0EEFF] text-[#2B2B2B] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Fashion, Clothing & Accessories
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save big with verified AJIO coupon codes, promo codes, discount codes and exclusive offers. Enjoy up to 90% OFF, extra 25% OFF, ₹400 OFF, free delivery, bank discounts, and new user deals. Discover the latest working AJIO offers and shop top fashion brands for less.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#2B2B2B] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 60+ Offers
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
                  className="bg-[#D9534F] hover:bg-[#C9302C] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Ajio</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#2B2B2B] to-[#4A4A4A] items-center justify-center p-8"
            >
              <div className="text-center text-white space-y-3 relative z-10">
                <span className="inline-block bg-[#D9534F] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Season Sale
                </span>
                <h3 className="text-2xl font-black leading-tight">Fresh Styles.<br />Fresh Savings.</h3>
                <p className="text-white/70 text-sm">Verified Ajio coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#2B2B2B] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">60+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FDECEC] text-[#D9534F] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 70%</div>
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
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#2B2B2B] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Ajio Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Ajio coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#2B2B2B) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#2B2B2B] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#D9534F) */}
                <span className="bg-[#D9534F]/10 text-[#D9534F] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2B2B2B] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2B2B2B]" />
                    <span>Valid on select fashion & lifestyle categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2B2B2B]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2B2B2B]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

            

              {/* Action Button - Vibrant CTA Accent (#D9534F) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#D9534F] hover:bg-[#C9302C] text-white"
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
    <Info size={16} className="text-[#2B2B2B]" />
    <span>What is AJIO and Why Is It One of India's Most Popular Fashion Platforms?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-4">
    AJIO launched in 2016 as Reliance Retail's fashion e-commerce arm and has grown rapidly into one of the top three online fashion destinations in India. What distinguishes AJIO from the broader fashion market is its dual positioning — mainstream fashion for everyday shoppers through AJIO Trends and curated luxury fashion through AJIO Luxe, both on the same platform.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    Key reasons shoppers choose AJIO online store over alternatives:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">Catalogue breadth</span> — 5,000+ brands spanning fast fashion, ethnic wear, international casual labels, sportswear, and luxury designer fashion in one catalogue.
    </li>
    <li>
      <span className="font-semibold">AJIO Luxe</span> — a dedicated luxury and premium fashion section carrying international brands including Coach, Michael Kors, Tommy Hilfiger, Karl Lagerfeld, Ted Baker, and more — at prices that are often meaningfully lower than brand-owned stores or multi-brand luxury retailers.
    </li>
    <li>
      <span className="font-semibold">AJIO Trends</span> — the curated fashion-forward section covering the latest seasonal styles across western wear, streetwear, and ethnic fashion.
    </li>
    <li>
      <span className="font-semibold">Private labels</span> — AJIO's own brand labels (AJIO, DNMX, Lazrus) offer trend-forward basics at highly competitive prices, often priced 30%–50% below equivalent branded options.
    </li>
    <li>
      <span className="font-semibold">Return policy</span> — AJIO offers a 30-day return window on most products — one of the most generous in the Indian fashion e-commerce space.
    </li>
    <li>
      <span className="font-semibold">Reliance Retail integration</span> — AJIO's backend benefits from Reliance Retail's supply chain, allowing faster restocking and more consistent pricing.
    </li>
  </ul>

  <p className="text-[#1A1A2E] text-sm mb-5">
    A verified AJIO coupon code from CouponsCrew applied on top of AJIO's already-competitive fashion pricing — particularly during the Fashionation Sale — is one of the most effective ways to shop branded fashion in India at the lowest possible price.
  </p>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#2B2B2B] hover:text-[#2B2B2B] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit Ajio</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#2B2B2B] to-[#3F3F3F] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Ajio Seasonal Fashion Sale</h3>
                <span className="inline-block bg-[#D9534F] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Clothing, Footwear & Accessories
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#2B2B2B] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Ajio
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Men's Fashion</span>
                  <span className="text-[#D9534F] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Women's Fashion</span>
                  <span className="text-[#D9534F] font-bold">Up to 65% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Footwear</span>
                  <span className="text-[#D9534F] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Ethnic Wear</span>
                  <span className="text-[#D9534F] font-bold">Up to 70% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Accessories</span>
                  <span className="text-[#D9534F] font-bold">Up to 55% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#2B2B2B] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Ajio */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use an AJIO Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying an AJIO discount code at checkout takes under a minute:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens AJIO in a new tab or the app.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Browse and add products to your cart.</span> Search by category, brand, or style. Use AJIO's filters — price range, brand, size, colour — to narrow your selection. Check that your cart meets the minimum order value on the deal card.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Click the bag icon and tap "Proceed to Buy." Sign in or continue with your existing AJIO account.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Confirm your delivery address.</span> Select your saved address or enter a new delivery address.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find the coupon / promo code field.</span> On the order summary page, look for "Apply Coupon" or "Have a Promo Code?" — it appears in the pricing section before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the AJIO coupon code from your clipboard and click "Apply." The discount reflects in the order total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, or AJIO wallet. If you have an eligible bank card — HDFC, ICICI, AU SFB, IDFC, HSBC, IDBI, or Reliance SBI — select it now to stack the bank discount on top of your coupon saving where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and complete payment. Your order confirmation arrives via email and SMS with a tracking link.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If an AJIO promo code shows as invalid, check that your cart value meets the minimum order threshold and that your products are not in an excluded category — AJIO Luxe products are sometimes excluded from standard sitewide codes. Refresh this CouponsCrew page for the next active code.
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Left: Text Content */}
      <div className="prose max-w-none">
        
        {/* Intro / Store Overview */}
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          AJIO Coupon Code &amp; Fashion Deals — Verified for August 2026
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
          <p>
            AJIO is one of India's fastest-growing fashion e-commerce platforms — operated by Reliance Retail and carrying a catalogue of 5,000+ brands across men's, women's, and kids' fashion, footwear, accessories, home, and luxury. From affordable Indian ethnic wear to premium international designer labels via AJIO Luxe, the platform covers a wider price and style range than almost any other Indian fashion destination.
          </p>

          <p>
            At CouponsCrew, we track every active AJIO coupon code, AJIO discount code, and AJIO promo code so you are never applying an expired code at checkout. Every deal on this page is verified before going live — minimum cart values, eligible categories, user eligibility, and expiry dates are all confirmed and shown clearly on each deal card.
          </p>

          <p>
            Whether you are browsing everyday casuals on ajio online shopping, hunting for international luxury handbags on AJIO Luxe, checking ajio online shopping offers today, or planning a purchase around an upcoming sale event — there is almost always a saving available. This page is updated daily. Bookmark it and check it before every AJIO purchase.
          </p>

          {/* AJIO Fashionation Sale — Live Deals & Bank Offers */}
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
            AJIO Fashionation Sale — Live Deals &amp; Bank Offers
          </h3>

          <p>
            The AJIO Fashionation Sale is one of AJIO's flagship promotional events — bringing discounts of 50% to 90% off across fashion, footwear, and accessories for men and women. Beyond the base discounts, bank card holders get additional instant savings of up to 12% at checkout.
          </p>

          <strong className="block text-black font-extrabold text-base mt-6 mb-2">
            Bank Card Offers During Fashionation Sale
          </strong>

          <p>
            The following bank cards offer instant discounts during the Fashionation Sale — stackable with an AJIO promo code in many cases:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>HDFC Bank credit and debit cards</li>
            <li>ICICI Bank credit and debit cards</li>
            <li>AU Small Finance Bank cards</li>
            <li>IDFC First Bank cards</li>
            <li>HSBC Bank cards</li>
            <li>IDBI Bank cards</li>
            <li>Reliance Retail SBI Card</li>
          </ul>

          <p className="mt-4">
            Check your bank card's eligibility on the AJIO checkout page before completing a Fashionation Sale purchase — the instant discount applies automatically when you select the eligible card at the payment step.
          </p>

          <strong className="block text-black font-extrabold text-base mt-6 mb-4">
            Fashionation Sale Discounts by Category
          </strong>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Category</th>
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Discount Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8F0]">
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm">Western Wear</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm">Ethnic Wear</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm">Innerwear &amp; Loungewear</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm">Footwear &amp; Accessories</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Minimum 50% OFF</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="bg-white p-4 rounded-xl border border-[#e5e7eb] text-gray-700 font-bold">
            💡 CouponsCrew publishes a dedicated Fashionation Sale page with early-access coupon codes and bank offer previews before every Fashionation event. Bookmark this page and check back before the sale goes live.
          </p>

          {/* Products Available at AJIO — Full Category Overview */}
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
            Products Available at AJIO — Full Category Overview
          </h3>

          <p>
            AJIO online shopping covers a significantly broader range than its fashion-first reputation suggests. Here is the complete breakdown of what is available across every major category:
          </p>

          <strong className="block text-black font-extrabold text-base mt-6 mb-2">
            Men's Fashion
          </strong>

          <p>
            AJIO's men's catalogue is one of the most comprehensive in Indian fashion e-commerce — covering every style from casual streetwear to formal office wear:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Topwear</strong> — T-shirts, casual shirts, formal shirts, polos, sweatshirts, and hoodies from brands including H&amp;M, Wrangler, Lee, Roadster, US Polo Assn., and AJIO's own DNMX label</li>
            <li><strong>Bottomwear</strong> — Jeans, chinos, trousers, joggers, and shorts in a wide range of fits and washes; Levi's, Jack &amp; Jones, and Pepe Jeans are consistently top-sellers in this segment</li>
            <li><strong>Formal Wear</strong> — blazers, suits, formal trousers, and dress shirts from Van Heusen, Peter England, Arrow, and Raymond</li>
            <li><strong>Ethnic Wear</strong> — kurtas, kurta sets, sherwanis, and Indo-western pieces for festive and wedding occasions from Manyavar, Ethnix, and Fabindia</li>
            <li><strong>Activewear</strong> — gym wear, running gear, and sports clothing from Puma, Adidas, Nike, and HRX by Hrithik Roshan</li>
            <li><strong>Accessories</strong> — belts, wallets, caps, sunglasses, and watches rounding out the men's catalogue</li>
          </ul>

          <div>
  {/* Women's Fashion */}
  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Women's Fashion
  </strong>

  <p>
    Women's fashion is AJIO's largest category — covering the full spectrum from daily casuals to premium occasion wear:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Western Wear</strong> — tops, dresses, co-ord sets, jeans, skirts, jumpsuits, blazers, and casual shirts from H&amp;M, Zara, Mango, Forever 21, Only, Vero Moda, and dozens of Indian labels</li>
    <li><strong>Ethnic Wear</strong> — salwar suits, kurtas, kurtis, sarees, lehengas, dupattas, and ethnic dresses from Biba, W, Libas, Global Desi, Sangria, and ethnic wear specialists</li>
    <li><strong>Innerwear &amp; Lingerie</strong> — bras, briefs, shapewear, camisoles, and nightwear from Clovia, Zivame, Jockey, and Marks &amp; Spencer</li>
    <li><strong>Loungewear</strong> — pyjama sets, co-ord lounge sets, and comfortable home wear from multiple brands at accessible price points</li>
    <li><strong>Activewear</strong> — yoga wear, gym tights, sports bras, and running gear from Puma, Nike, Adidas, and HRX</li>
    <li><strong>Accessories</strong> — handbags, clutches, jewellery, scarves, sunglasses, and watches to complete every outfit</li>
  </ul>

  {/* Kids' Fashion */}
  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Kids' Fashion
  </strong>

  <p>
    AJIO's kids' catalogue covers clothing and footwear for toddlers through teenagers — with a focus on durable, comfortable, and trend-appropriate styles:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Toddlers (0–3 years)</strong> — bodysuits, rompers, onesies, and complete clothing sets in soft, skin-friendly fabrics</li>
    <li><strong>Girls (4–14 years)</strong> — dresses, tops, leggings, ethnic wear, and party outfits from brands including H&amp;M Kids, UCB Kids, and AJIO's own kids' labels</li>
    <li><strong>Boys (4–14 years)</strong> — T-shirts, jeans, shorts, ethnic kurtas, and activewear</li>
    <li><strong>Kids' Footwear</strong> — school shoes, casual sneakers, sandals, and sports shoes in age-appropriate sizing</li>
  </ul>

  {/* Home & Kitchen */}
  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Home &amp; Kitchen
  </strong>

  <p>
    AJIO's Home &amp; Kitchen section transforms the platform into more than just a fashion destination — covering everything needed to refresh a living space:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Bed Linen</strong> — bedsheets, duvet covers, pillow covers, and comforters from established home brands</li>
    <li><strong>Cushions &amp; Covers</strong> — decorative cushions, cushion covers, and throw pillows in seasonal prints and patterns</li>
    <li><strong>Curtains &amp; Carpets</strong> — room-ready curtain sets and rugs across a range of styles from traditional to contemporary</li>
    <li><strong>Aromas &amp; Candles</strong> — scented candles, reed diffusers, and aroma accessories for home fragrance</li>
    <li><strong>Wall Art</strong> — prints, frames, and decorative wall panels for home décor refresh</li>
    <li><strong>Dining &amp; Kitchen</strong> — dinnerware sets, serving bowls, storage containers, and kitchen accessories</li>
    <li><strong>Bathing Essentials</strong> — towels, bathrobes, bath accessories, and bathroom décor</li>
  </ul>

  {/* Footwear */}
  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Footwear
  </strong>

  <p>
    AJIO's footwear catalogue spans casual, formal, sports, and premium designer options:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Men's Footwear</strong> — sneakers, loafers, formal shoes, boots, and sandals from Puma, Adidas, Nike, Skechers, Clarks, and AJIO private labels</li>
    <li><strong>Women's Footwear</strong> — heels, flats, sneakers, sandals, mules, and ankle boots from Steve Madden, Aldo, Clarks, and fashion-forward Indian labels</li>
    <li><strong>Kids' Footwear</strong> — school shoes, sports shoes, casual sneakers, and sandals in all size ranges</li>
    <li><strong>Sports Footwear</strong> — running shoes, training shoes, and basketball shoes from Nike, Adidas, and Puma at competitive prices, particularly during Fashionation Sale windows</li>
  </ul>

  {/* Jewellery & Accessories */}
  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Jewellery &amp; Accessories
  </strong>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Jewellery</strong> — fashion jewellery, silver jewellery, and fine jewellery from brands like Accessorize, Aldo, Voylla, and independent Indian designers</li>
    <li><strong>Handbags &amp; Wallets</strong> — from everyday tote bags to premium structured handbags; AJIO Luxe covers the designer tier</li>
    <li><strong>Backpacks</strong> — casual, college, and travel backpacks from Skybags, Wildcraft, and fashion brands</li>
    <li><strong>Watches &amp; Sunglasses</strong> — fashion watches and UV-protective eyewear from Fastrack, Titan, and AJIO's curated lifestyle section</li>
  </ul>

  {/* AJIO Luxe — International Luxury Fashion in India */}
  <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
    AJIO Luxe — International Luxury Fashion in India
  </h3>

  <p>
    AJIO Luxe is the premium and luxury fashion vertical within AJIO — carrying authenticated international designer brands at prices that are typically lower than brand boutiques, multi-brand luxury retailers, or grey-market importers.
  </p>

  <p className="mt-4">
    Key brands on AJIO Luxe include:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li><strong>Bags &amp; Accessories</strong> — AJIO Luxe Coach bags, Michael Kors, Kate Spade, Furla, Tumi, and Longchamp</li>
    <li><strong>Clothing</strong> — Tommy Hilfiger, Calvin Klein, Karl Lagerfeld, Ted Baker, Armani Exchange, and Emporio Armani</li>
    <li><strong>Footwear</strong> — Steve Madden, Aldo, Skechers Performance, and other premium international footwear labels</li>
    <li><strong>Watches &amp; Accessories</strong> — Fossil, Michael Kors watches, and premium accessory brands</li>
  </ul>

  <p className="mt-4">
    AJIO Luxe Coach bags are among the most searched products on the Luxe vertical — Coach handbags and shoulder bags at AJIO Luxe pricing are typically 15%–25% below what the same bags sell for at Coach India boutiques. During sale events, an additional AJIO discount code from CouponsCrew can bring the effective price even lower.
  </p>

  <strong className="block text-black font-extrabold text-base mt-6 mb-2">
    Is AJIO Luxe authentic?
  </strong>

  <p>
    Yes — AJIO Luxe products are sourced directly from brand principals and authorised distributors. All Luxe products carry an authenticity certificate and are covered by AJIO's standard 30-day return policy. This is a meaningful differentiator versus unauthorised resellers or grey-market importers where authenticity cannot be verified.
  </p>
</div>


          

          {/* Exclusive International Brands on AJIO */}
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
            Exclusive International Brands on AJIO
          </h3>

          <p>
            Beyond AJIO Luxe, the main AJIO catalogue carries a wide range of international fashion brands that are available in India through AJIO either exclusively or as one of a small number of authorised sellers:
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Category</th>
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm">International Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8F0]">
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Casual Fashion</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">H&amp;M, Zara, Mango, Forever 21, Gap</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Premium Casual</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Tommy Hilfiger, Calvin Klein, Armani Exchange</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Denim</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Levi's, Pepe Jeans, Lee, Wrangler, Jack &amp; Jones</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Sportswear</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Nike, Adidas, Puma, Reebok, New Balance</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Footwear</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Clarks, Skechers, Steve Madden, Aldo, Crocs</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Luxury</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Coach, Michael Kors, Karl Lagerfeld, Ted Baker, Furla</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Accessories</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">Fossil, Ray-Ban, Polaroid, Accessorize</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The availability of brands like Zara, H&amp;M, and Gap alongside luxury labels like Coach and Michael Kors on the same platform — with the ability to apply a single AJIO promo code across the order — makes AJIO one of the most versatile fashion shopping destinations in the Indian market.
          </p>

          {/* Sales to Follow on AJIO — Full Sale Calendar 2026 */}
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
            Sales to Follow on AJIO — Full Sale Calendar 2026
          </h3>

          <p>
            Timing your AJIO online shopping around the platform's major sale events is the most reliable strategy for maximum savings. AJIO runs frequent, well-structured sale events throughout the year:
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Sale Event</th>
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Tentative Month</th>
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm whitespace-nowrap">Best Discount</th>
                  <th scope="col" className="px-5 py-4 text-[#2B2B2B] font-extrabold text-sm">Best Categories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8F0]">
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Republic Day Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">January</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Western wear, Footwear</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Valentine's Day Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">February</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Women's fashion, Accessories, Gifting</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">All Stars Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">March</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">All fashion categories</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Holi Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">March</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Colourful ethnic, Casual wear</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Summer Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">April – May</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Activewear, Footwear, Western wear</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Fashionation Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">Multiple windows</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">50%–90% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">All categories + bank card offers</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Independence Day Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">August</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Western wear, Ethnic wear</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Exciting Collection — Women</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">Seasonal</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Women's fashion, Ethnic wear</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Exciting Collection — Men</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">Seasonal</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Men's fashion, Formals</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Exciting Collection — Kids</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">Seasonal</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 60% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Kids' fashion</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Home &amp; Kitchen Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">Festive season</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 70% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Home décor, Kitchen</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Grand Festive Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">September – October</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 90% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">All categories</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Diwali Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">October – November</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">Ethnic wear, Home, Gifting</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">AJIO Black Friday Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">November</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 90% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">All categories, clearance</td>
                </tr>
                <tr className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                  <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm whitespace-nowrap">Year-End Sale</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm whitespace-nowrap">December</td>
                  <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">Up to 80% OFF</td>
                  <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm">All categories, clearance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The Fashionation Sale is AJIO's most frequent and recognisable major sale — running multiple times per year with 50%–90% off across the full catalogue plus bank card instant discounts. It is the first sale window to watch for on AJIO for high-discount shopping across fashion and footwear.
          </p>

          <p>
            The AJIO Black Friday Sale (November) is one of the deepest single-day discount events of the year — up to 90% off sitewide, combined with bank card offers and stackable AJIO promo codes that bring premium fashion prices to some of the lowest levels available. If you are planning a luxury fashion purchase via AJIO Luxe, the Black Friday window is worth timing your order around.
          </p>

          <p>
            The Grand Festive Sale (September–October) is AJIO's pre-Diwali mega event — up to 90% off across all categories including ethnic wear, western wear, footwear, home, and AJIO Luxe. Bank card offers are particularly generous during this window.
          </p>

          <p>
            The Republic Day Sale (January) and the All Stars Sale (March) are both strong mid-year events — good alternatives if you miss the festive or Black Friday windows. The Republic Day Sale is particularly strong for western wear and footwear.
          </p>

          <p className="bg-white p-4 rounded-xl border border-[#e5e7eb] text-gray-700 font-bold">
            💡 CouponsCrew publishes dedicated sale pages for every major AJIO event — with verified coupon codes, bank offer previews, and category-wise deal highlights — 2–3 days before each sale goes live. Bookmark this page and check back before each sale date.
          </p>

          {/* AJIO Saving Tips — Get More Off Every Purchase */}
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4 mt-8">
            AJIO Saving Tips — Get More Off Every Purchase
          </h3>

          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Use the AJIO App for Best Prices and App-Exclusive Deals</strong>
              <p className="mt-1">
                AJIO's app consistently surfaces app-exclusive deals and personalised promo codes based on your browsing and purchase history. For ajio online shopping, using the app rather than the desktop site frequently gives access to an additional 5%–10% discount not visible elsewhere.
              </p>
            </li>
            <li>
              <strong>Stack an AJIO Coupon Code with a Bank Card Offer</strong>
              <p className="mt-1">
                Multiple bank cards — HDFC, ICICI, AU SFB, IDFC First, HSBC, IDBI, and Reliance SBI — offer instant discounts of up to 12% on AJIO during the Fashionation Sale and other promotional windows. Apply your AJIO voucher code first, then select your bank card at checkout for the stacked saving.
              </p>
            </li>
            <li>
              <strong>Shop AJIO Luxe During Black Friday for the Lowest Luxury Prices</strong>
              <p className="mt-1">
                AJIO Luxe products — particularly AJIO Luxe Coach bags and Michael Kors accessories — see their deepest discounts during the AJIO Black Friday Sale (November). If you have been considering a premium handbag or designer accessory purchase, this is the annual window to act.
              </p>
            </li>
            <li>
              <strong>Look for the AJIO "Min 50% Off" Filter</strong>
              <p className="mt-1">
                AJIO maintains a permanent "Minimum 50% Off" filter across most categories — browsing within this filter ensures every product you see is already at least half price before any coupon is applied. Using this filter alongside an active AJIO promo code from CouponsCrew consistently delivers strong effective discounts.
              </p>
            </li>
            <li>
              <strong>Time Ethnic Wear Purchases Around Festive Sales</strong>
              <p className="mt-1">
                Ethnic wear — sarees, lehengas, kurta sets, and sherwanis — sees its deepest discounts on AJIO during the Grand Festive Sale (September–October) and Diwali Sale (October–November). If you are shopping for weddings, Diwali, or festive occasions, planning purchases 2–3 weeks ahead of these sale windows and applying a verified AJIO discount code on top is the most cost-effective approach.
              </p>
            </li>
            <li>
              <strong>Use AJIO Trends for Fashion-Forward Basics at Lower Prices</strong>
              <p className="mt-1">
                AJIO Trends curates the season's most relevant styles — often at prices 20%–30% below equivalent pieces from international brands on the same platform. For trend-led basics and casualwear, AJIO Trends is a strong starting point before browsing branded options.
              </p>
            </li>
            <li>
              <strong>Check CouponsCrew for Ajio Online Shopping Offers Today</strong>
              <p className="mt-1">
                AJIO online shopping offers today change frequently — flash deals, app-exclusive codes, and category-specific promotions go live throughout the day during sale events. CouponsCrew updates this page daily so checking it immediately before you shop gives you the most current active codes.
              </p>
            </li>
          </ol>

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

        {/* Frequently Asked Questions — AJIO Coupon Codes */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions — AJIO Coupon Codes
          </h3>
          {[
            {
              q: "Q1. How do I find a working AJIO coupon code today?",
              a: "Every AJIO coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
            },
            {
              q: "Q2. Can I use an AJIO discount code on AJIO Luxe products?",
              a: "Some AJIO discount codes apply sitewide including AJIO Luxe, while others exclude the Luxe category. Check the individual deal card on this CouponsCrew page for Luxe eligibility. During Black Friday and Grand Festive Sale, Luxe-eligible codes are more commonly available."
            },
            {
              q: "Q3. Is AJIO Luxe authentic?",
              a: "Yes — all AJIO Luxe products are sourced directly from brand principals and authorised distributors, and come with authenticity certificates. AJIO's standard 30-day return policy applies to Luxe purchases. This is a meaningful guarantee versus unauthorised resellers or grey-market products."
            },
            {
              q: "Q4. What is the AJIO Black Friday Sale?",
              a: "The AJIO Black Friday Sale is one of AJIO's highest-discount events of the year — typically held in November with discounts up to 90% sitewide, covering fashion, footwear, accessories, and AJIO Luxe. Bank card offers and stackable AJIO promo codes are available simultaneously. It is the best single window of the year for premium and luxury fashion purchases on AJIO."
            },
            {
              q: "Q5. Can I stack an AJIO coupon code with a bank card offer?",
              a: "In many cases, yes — an AJIO voucher code applied at the coupon field and a bank card instant discount at the payment step can both apply to the same order. This is particularly well-supported during the Fashionation Sale. Check the deal card notes on this CouponsCrew page for stacking eligibility on each specific code."
            },
            {
              q: "Q6. Are there AJIO stores near me?",
              a: "AJIO operates as a primarily online platform. For ajio store near me queries — if you are looking for a physical Reliance Retail outlet where AJIO products are available, use the Store Locator on the Reliance Retail website. AJIO's primary shopping experience is through ajio.com and the AJIO app."
            },
            {
              q: "Q7. What is the AJIO return policy?",
              a: "AJIO offers a 30-day return policy on most products — items must be unworn, unwashed, and in original packaging with tags intact. Returns are initiated via the AJIO app or website under \"My Orders.\" Refunds are processed within 5–7 business days to the original payment method or immediately to the AJIO wallet."
            },
            {
              q: "Q8. What is the difference between AJIO Trends and AJIO Luxe?",
              a: "AJIO Trends is the fashion-forward section covering seasonal styles across western wear, ethnic wear, and streetwear from Indian and international brands at mainstream price points. AJIO Luxe is the premium and luxury tier — carrying authenticated international designer brands like Coach, Michael Kors, Karl Lagerfeld, and Tommy Hilfiger at prices below brand boutiques."
            },
            {
              q: "Q9. Can I use an AJIO promo code on the first order?",
              a: "Yes — new users have access to dedicated first-order codes listed in the \"New Users\" filter on this CouponsCrew page. These are typically the highest-value codes available to new AJIO accounts and should be used before switching to standard sitewide codes."
            },
            {
              q: "Q10. How often does CouponsCrew update AJIO deals?",
              a: "This page is updated daily. Expired AJIO coupon codes are removed as soon as detected and new deals are added as AJIO launches new promotions. For time-sensitive events like the Fashionation Sale or AJIO Black Friday Sale, refresh this page immediately before shopping to ensure you have the most current active codes."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#2B2B2B] rotate-180")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Similar Stores You Might Like */}
        <div className="mt-16 bg-white p-8 rounded-[32px] border border-[#f0f0f0] shadow-sm">
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4">
            Similar Stores You Might Like
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 font-bold text-sm">
            <li><strong>Myntra</strong> — Strong competitor on fashion; EORS twice yearly delivers comparable discounts</li>
            <li><strong>Nykaa Fashion</strong> — Women's fashion focus; good for ethnic and western wear</li>
            <li><strong>Flipkart Fashion</strong> — Wide fashion catalogue with Big Billion Days discounts</li>
            <li><strong>H&amp;M India</strong> — Direct H&amp;M website; check whether AJIO's H&amp;M pricing is lower before purchasing</li>
            <li><strong>Tata CLiQ Luxury</strong> — Alternative luxury fashion platform with premium and designer brand curation</li>
          </ul>
        </div>

        {/* Closing — Why CouponsCrew for AJIO Deals */}
        <div className="mt-12 space-y-4 text-gray-500 font-bold leading-relaxed">
          <h3 className="text-xl font-black text-[#2B2B2B] mb-4">
            Closing — Why CouponsCrew for AJIO Deals
          </h3>
          <p>
            Finding a working AJIO coupon code should take seconds. CouponsCrew verifies every deal on this page before it goes live — minimum order values, eligible categories, user restrictions, and expiry dates are all confirmed and clearly shown on every deal card.
          </p>
          <p>
            AJIO's combination of mainstream fashion, AJIO Trends curated styles, and AJIO Luxe international designer brands makes it one of the most versatile fashion platforms in India. A verified AJIO discount code or AJIO promo code from CouponsCrew stacked on top of Fashionation Sale pricing — and combined with a bank card offer where available — consistently delivers some of the best effective prices on fashion, footwear, and premium accessories available in the Indian market.
          </p>
          <p>
            Bookmark this page and check back before every AJIO purchase — whether you are browsing ajio online shopping offers today, planning a luxury purchase via AJIO Luxe, waiting for the AJIO Black Friday Sale, or shopping the Fashionation Sale for the deepest fashion discounts of the season.
          </p>
        </div>

      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#2B2B2B]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Ajio Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Ajio Coupons", "Fashion Sale India", "Ethnic Wear Offers", "Ajio Seasonal Sale", "Footwear Deals", "Ajio New User Offer", "Ajio Bank Offers", "CouponsCrew Home"].map(tag => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#2B2B2B] uppercase tracking-widest shadow-sm hover:bg-[#2B2B2B] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Ajio Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Seasonal Sale — Up to 60% OFF", sub: "Clothing, footwear & accessories — biggest discounts of the season" },
              { heading: "Extra 15% OFF Footwear", sub: "Additional discount on a wide range of footwear styles" },
              { heading: "Flat 20% OFF First Order", sub: "New users get a flat discount on their first Ajio order" },
              { heading: "Ethnic Wear Offers", sub: "Kurtas, sarees & ethnic sets at up to 70% OFF" },
              { heading: "Accessories Sale", sub: "Bags, watches & jewellery at up to 55% OFF" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#2B2B2B] font-black text-xl italic shadow-inner">A</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#2B2B2B] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Ajio deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#2B2B2B] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#2B2B2B]">{activeModalCoupon.code}</span> at Ajio checkout for instant discounts.
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
                className="w-full bg-[#D9534F] hover:bg-[#C9302C] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Ajio</span>
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
