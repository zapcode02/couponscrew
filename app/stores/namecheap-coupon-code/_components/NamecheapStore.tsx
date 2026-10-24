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
import { Coupon, NAMECHEAP_COUPONS } from './namecheapCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.namecheap.com/';

export default function NamecheapStore() {
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

  const coupons: Coupon[] = NAMECHEAP_COUPONS;

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
      q: 'How do I use a Namecheap promo code?',
      a: '[TODO: how-to answer specific to Namecheap checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Namecheap?',
      a: '[TODO: stacking rules specific to Namecheap]'
    },
    {
      q: 'Why is my Namecheap promo code not working?',
      a: '[TODO: common reasons a code might fail on Namecheap]'
    },
    {
      q: 'Where can I find the best Namecheap offers?',
      a: 'We keep this Namecheap store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Namecheap offer free domain privacy?',
      a: '[TODO: Namecheap WhoisGuard/domain privacy policy details]'
    },
    {
      q: 'How often are Namecheap coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Namecheap Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/namecheap-logo_xlr7iw.webp"
                      alt="Namecheap Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Namecheap Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    [TODO: 1-2 sentence hero description — what Namecheap sells (domains, hosting, SSL, VPN) and the headline savings claim]
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
                  <span>Visit Namecheap</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/namecheap-logo_xlr7iw.webp"
                alt="Namecheap Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">[TODO: N]+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to [TODO: N]%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">[TODO: ₹N]+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Namecheap Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Namecheap coupon codes & offers.</p>
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

                      {/* LEFT DISCOUNT SECTION */}
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
                                <span>Valid on select domain and hosting plans.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>First-year pricing; renewal rates may differ as specified in offer terms.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers select domain extensions and plans.</span>
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
                <span>The Story Behind Namecheap</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                [TODO: 2 paragraphs on Namecheap's founding/history — do not invent dates or founder names, ask the user or leave blank if unknown]
              </p>

              <p className="text-[#1A1A2E] text-sm">
                [TODO: second history paragraph]
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Namecheap</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">[TODO: sale name, e.g. "Namecheap Domain & Hosting Sale"]</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  [TODO: one-line offer text, e.g. "Up to 60% OFF on Domains, Hosting & SSL"]
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
                Top Categories at Namecheap
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">[TODO: Category 1, e.g. Domain Names]</span>
                  <span className="text-[#FF5722] font-bold">Up to [TODO: N]% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">[TODO: Category 2, e.g. Web Hosting]</span>
                  <span className="text-[#FF5722] font-bold">Up to [TODO: N]% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">[TODO: Category 3, e.g. SSL Certificates]</span>
                  <span className="text-[#FF5722] font-bold">Up to [TODO: N]% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">[TODO: Category 4, e.g. Private Email]</span>
                  <span className="text-[#FF5722] font-bold">Up to [TODO: N]% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">[TODO: Category 5, e.g. VPN]</span>
                  <span className="text-[#FF5722] font-bold">Up to [TODO: N]% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Namecheap */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Namecheap Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Namecheap coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable option without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>[TODO: which Indian bank promotions apply to Namecheap — do not invent specific bank names]</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Flash Sale Alerts</span>
                    <span>[TODO: Namecheap's flash-sale or limited-time offer naming, if any]</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>[TODO: named Namecheap sale events, if any]</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using a Namecheap coupon code on CouponScrew is completely free and requires no account, no sign-up, and no personal information.</span>
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
                [TODO: SEO H2, e.g. "Namecheap Coupon Code India (Month Year): Up to N% Off — Verified"]
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Namecheap Domain and Hosting Coupon Offers</caption>
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
                    {coupons.map((row, i) => (
                      <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                        <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
                          {row.badge}
                        </td>
                        <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                          {row.type}
                        </td>
                        <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
                          {row.badge}
                        </td>
                        <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
                          {row.description}
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
                  [TODO: intro paragraph — what Namecheap is, what CouponScrew tracks for it, 2-3 sentences]
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  [TODO: brand-story H3]
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Namecheap in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  [TODO: "in numbers" paragraph — do not invent specific stats; ask the user or omit numeric claims]
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Get at Namecheap
                  </h3>
                  <p>
                    [TODO: intro line for category breakdown]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]"><Link href="/stores/categories/web-hosting" className="text-[#5B4FBE] hover:underline">Domain Names</Link> — [TODO: discount range]: </strong>
                    [TODO: category description — do not invent specific numbers]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]"><Link href="/stores/categories/web-hosting" className="text-[#5B4FBE] hover:underline">Web Hosting</Link> — [TODO: discount range]: </strong>
                    [TODO: category description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">SSL Certificates — [TODO: discount range]: </strong>
                    [TODO: category description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Private Email Hosting — [TODO: discount range]: </strong>
                    [TODO: category description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">VPN — [TODO: discount range]: </strong>
                    [TODO: category description]
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Namecheap Promo Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using a Namecheap discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Namecheap offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Namecheap page.",
                      "Search Your Domain or Plan — Go to Namecheap and search for your domain name or select a hosting/SSL plan. Check the offer description for any exclusions before proceeding.",
                      "[TODO: step 3 — brand-specific checkout detail]",
                      "[TODO: step 4 — brand-specific checkout detail]",
                      "[TODO: step 5 — brand-specific checkout detail]",
                      "Stack Your Bank Card Offer — At the payment step, check for any bank card instant discounts available and apply if eligible. This is the step most shoppers miss — and it is where you unlock a second layer of savings.",
                      "Complete Payment — Confirm your order. You will receive a confirmation and setup details via email."
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
                    Why Developers and Businesses Choose Namecheap
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">[TODO: reason 1 heading]: </strong>
                    [TODO: reason 1 description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">[TODO: reason 2 heading]: </strong>
                    [TODO: reason 2 description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">[TODO: reason 3 heading]: </strong>
                    [TODO: reason 3 description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">[TODO: reason 4 heading]: </strong>
                    [TODO: reason 4 description]
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">[TODO: reason 5 heading]: </strong>
                    [TODO: reason 5 description]
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Shop Smarter — Make Every Rupee Count at Namecheap
                  </h3>

                  <p>
                    Every domain or hosting plan you buy is an investment in your online presence — and there is no reason to pay full price for any of it. CouponScrew keeps every active Namecheap coupon code, promo code, and discount code verified and ready for you, updated daily, completely free. Bookmark this page before your next Namecheap order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                  Frequently Asked Questions About Namecheap Coupon Codes
                </h2>
                {faqs.map((faq, i) => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Namecheap Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Namecheap Coupons", "Domain Name Offers", "Web Hosting Deals", "Namecheap SSL", "VPN Discount Codes", "Private Email Hosting", "Namecheap Bank Offers", "CouponsCrew Hosting"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Namecheap Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "[TODO: deal 1 heading]", sub: "[TODO: deal 1 subtext]" },
                    { heading: "[TODO: deal 2 heading]", sub: "[TODO: deal 2 subtext]" },
                    { heading: "[TODO: deal 3 heading]", sub: "[TODO: deal 3 subtext]" },
                    { heading: "[TODO: deal 4 heading]", sub: "[TODO: deal 4 subtext]" },
                    { heading: "[TODO: deal 5 heading]", sub: "[TODO: deal 5 subtext]" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">N</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Namecheap deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Namecheap checkout for instant discounts.
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
                <span>Continue to Namecheap</span>
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
