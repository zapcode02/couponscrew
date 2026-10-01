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
import { Coupon, CROCS_COUPONS } from './crocsCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.crocs.in';

export default function CrocsStore() {
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

  const coupons: Coupon[] = CROCS_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Crocs Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/crocs-logo_wu3hut.webp"
                      alt="Crocs Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Crocs Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Clogs, Sandals & Jibbitz Charms
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Shop Classic Clogs, sandals, kids' range & Jibbitz charms at India's favourite comfort footwear store. Get the best deals with Crocs coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 50+ Offers
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
                  <span>Visit Crocs</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#00A19A]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/crocs-logo_wu3hut.webp"
                alt="Crocs Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,500+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Crocs Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Crocs coupon codes & offers.</p>
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
                                <span>Valid on select clog, sandal, and accessory categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected styles and colourways.</span>
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
                <span>The Story Behind Crocs</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Crocs was founded in 2002 in Boulder, Colorado, by Lyndon "Duke" Hanson, George Boedecker Jr., and Scott Seamans. What started as a boating shoe made from a proprietary closed-cell resin foam called Croslite quickly became one of the most recognisable — and polarising — footwear silhouettes in the world, the Classic Clog.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                In 2006, Crocs acquired Jibbitz LLC, the company behind the small decorative charms that snap into the clog's ventilation holes, turning a simple comfort shoe into a genuinely customisable product. Today Crocs sells in more than 85 countries, with high-profile celebrity and brand collaborations regularly driving hype around limited-edition colourways.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Crocs</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Crocs Classic Clog Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Clogs, Sandals & Jibbitz Charms
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
                Top Categories at Crocs
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Classic Clogs</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kids Crocs</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sandals & Flip-Flops</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Jibbitz Charms</span>
                  <span className="text-[#FF5722] font-bold">Buy 2 Get 1</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Winter Boots</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Crocs */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Crocs Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
                    <span>Every Crocs coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
                    <span>We display live success percentages for every deal based on actual user attempts, so you can pick the most reliable Crocs offer without guessing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
                    <span>We specifically track Indian bank promotions from ICICI and SBI so you always know which card unlocks the maximum instant discount at checkout.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Collab Drop Alerts</span>
                    <span>Limited-edition Crocs collaborations and hype colourways are flagged on CouponScrew as soon as they go live, giving you the best chance to grab a pair before stock runs out.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
                    <span>CouponScrew publishes Crocs sale codes ahead of major seasonal events, so you do not need to wait for the sale to start.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
                    <span>Finding and using a Crocs coupon code on CouponScrew is completely free and requires no account or sign-up.</span>
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
                Crocs Coupon Code India (August 2026): Up to 40% Off + Free Shipping — Verified
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                  <caption className="sr-only">Crocs Footwear and Accessories Coupon Offers</caption>
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
                        category: 'Classic Clogs',
                        discount: 'Up to 40% OFF',
                        highlights: 'Classic Clog for men & women, multiple colours.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FLAT 500',
                        category: 'New User',
                        discount: 'Flat ₹500',
                        highlights: 'First order discount above ₹2,499.',
                        userType: 'New Users'
                      },
                      {
                        offerType: 'UP TO 30% OFF',
                        category: 'Kids Crocs',
                        discount: 'Up to 30% OFF',
                        highlights: 'Kids Classic Clogs and sandals.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'BUY 2 GET 1',
                        category: 'Jibbitz Charms',
                        discount: 'Buy 2 Get 1 Free',
                        highlights: '5-pack Jibbitz charm sets.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 35% OFF',
                        category: 'Sandals',
                        discount: 'Up to 35% OFF',
                        highlights: 'Crocs sandals and flip-flops.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 25% OFF',
                        category: 'Boots',
                        discount: 'Up to 25% OFF',
                        highlights: 'Fleece-lined winter boots and clog boots.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 10% OFF',
                        category: 'Bank Offer',
                        discount: 'Up to 10% OFF',
                        highlights: 'Instant discount with ICICI & SBI cards.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'FREE SHIPPING',
                        category: 'Delivery',
                        discount: 'Free Shipping',
                        highlights: 'On all orders above ₹1,499.',
                        userType: 'All Users'
                      },
                      {
                        offerType: 'UP TO 20% OFF',
                        category: 'Crocs Club',
                        discount: 'Up to 20% OFF',
                        highlights: 'Birthday-month member discount.',
                        userType: 'Crocs Club Members'
                      },
                      {
                        offerType: 'UP TO 50% OFF',
                        category: 'Clearance',
                        discount: 'Up to 50% OFF',
                        highlights: 'Past-season colourways and styles.',
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
                  Looking for a verified Crocs coupon code before placing your next order? You have come to the right place. CouponScrew tracks and verifies every active Crocs discount code, promo code, and deal daily — so you always get a working offer, never an expired one. From Classic Clogs and sandals to Jibbitz charms, we cover every category. Copy your code above and start saving on your next Crocs order right now.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From a Boulder Boating Shoe to a Global Footwear Icon
                </h3>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Crocs in Numbers — Scale That Speaks for Itself
                </h3>

                <p>
                  Today, Crocs sells in more than 85 countries, with the Classic Clog remaining the brand's signature product more than two decades after launch. The Croslite foam construction that made the original boating shoe comfortable is the same core technology used across the entire clog and sandal range today, contributing to the brand's reputation for all-day wearability.
                </p>

                <p>
                  Add to this the acquisition of Jibbitz in 2006, a steady stream of celebrity and designer collaborations that regularly sell out within hours, and a free Crocs Club loyalty programme for repeat shoppers, and it becomes clear why using a Crocs coupon code from CouponScrew on top of an already accessible price point is simply the smartest way to shop here.
                </p>

                <div className="space-y-4 text-slate-700">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Everything You Can Shop at Crocs
                  </h3>
                  <p>
                    Crocs covers footwear for every age group and occasion. Here is a detailed look at what each section offers and what kind of Crocs discount codes apply to each.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Classic Clogs — Up to 40% Off: </strong>
                    The Classic Clog is Crocs' single largest revenue category and the most recognisable silhouette in the brand's lineup. Available in dozens of colours and both closed-heel and slip-on variants, prices range from ₹2,499 for a standard adult pair to ₹4,000+ for licensed collaboration colourways.
                    <br />
                    Crocs coupon codes for Classic Clogs are among the most frequently searched, and for good reason — a 30% discount on a ₹3,500 pair saves you over ₹1,000 in one transaction. The best time to apply a Crocs promo code on clogs is during seasonal sales, when discounts reach up to 40% across the core colour range.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Kids Crocs — Up to 30% Off: </strong>
                    The kids range mirrors the adult Classic Clog in a smaller size chart, alongside kids-specific sandals and character-themed colourways featuring popular animated franchises. Parents consistently cite the easy-clean, water-friendly design as the main reason for repeat purchases across growing shoe sizes.
                    <br />
                    A Crocs discount code applied on kids' footwear during back-to-school season or festive gifting periods regularly brings the deepest savings, since this is when the brand runs its most aggressive kids-focused promotions.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Jibbitz Charms — Buy 2 Get 1 Free: </strong>
                    Jibbitz charms transform a basic clog into a personalised accessory, with themes spanning cartoon characters, sports teams, food, and seasonal designs. This category has become a genuine gifting favourite, since a 5-pack charm set is an affordable add-on to any clog purchase.
                    <br />
                    Crocs promo codes on Jibbitz charms are commonly bundle-based rather than percentage discounts, meaning buying multiple packs at once is where the real savings show up.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Sandals & Flip-Flops — Up to 35% Off: </strong>
                    Crocs' sandal range includes sport sandals, slide-style flip-flops, and platform variants, all built on the same Croslite comfort base as the clogs. This category sees the strongest demand during the summer months and pre-monsoon season.
                    <br />
                    Crocs coupon codes apply sitewide across most sandal styles, so any active code typically works here regardless of the specific silhouette you are buying.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Winter Boots & Clog Boots — Up to 25% Off: </strong>
                    Fleece-lined clog boots and winter boots extend the Crocs comfort profile into colder months, popular in northern Indian hill regions during winter travel season. Prices range from ₹3,000 for basic clog boots to ₹6,000+ for fully insulated winter styles.
                    <br />
                    A Crocs discount code in this category is particularly useful ahead of winter travel, since boots tend to be a higher-ticket purchase than standard clogs.
                  </p>
                </div>

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Crocs Coupon Code — Step by Step</h3>
                  <p className="text-gray-700 font-bold -mt-4">Using a Crocs discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
                  <div className="space-y-6">
                    {[
                      "Find Your Code on CouponScrew — Browse the verified Crocs offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Crocs page.",
                      "Browse and Add to Cart — Go to Crocs.in and select your products. Check the offer description for any category exclusions before adding items to your cart.",
                      "Check the Size Guide — Crocs sizing runs true-to-size with a roomier fit, so review the foot-length chart on the product page before confirming your size.",
                      "Go to Checkout — Proceed to checkout. Find the \"Apply Coupon\" field just above the Order Summary section on the checkout page.",
                      "Paste Your Crocs Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your order summary immediately.",
                      "Stack Your Bank Card Offer — At the payment step, check for eligible ICICI or SBI card discounts. Apply both. This is the step most shoppers miss — and it is where you unlock the second layer of savings.",
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
                    Why Millions of Shoppers Choose Crocs
                  </h3>

                  <p>
                    <strong className="text-[#2C2C40]">Croslite Comfort — A Genuine Material Difference: </strong>
                    No other mainstream footwear brand builds its entire lineup around a single proprietary foam material the way Crocs does. Croslite is lightweight, odor-resistant, and easy to clean with just soap and water — a genuine differentiator for buyers who want low-maintenance, all-day-wearable footwear.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Jibbitz Customisation — Make Every Pair Unique: </strong>
                    Most footwear regrets come from buying a plain, generic pair with no personal touch. Jibbitz charms exist specifically to solve this, letting buyers customise their clogs with themed charms for any interest, occasion, or team allegiance — often at the same discounted price you found on CouponScrew.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Crocs Club — Free Loyalty Rewards: </strong>
                    Crocs Club is free to join and offers points on every purchase, a birthday-month discount, and early access to new colourway drops — sometimes ahead of the general public. For anyone who buys Crocs more than once a year, signing up before your next order is a straightforward way to access extra value.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Size-Inclusive Range Across Ages: </strong>
                    Crocs' separate kids and adult size charts, spanning toddler through adult sizing, make it genuinely easy to find matching family sets — a popular gifting and travel-photo trend that has helped keep the brand relevant across generations.
                  </p>

                  <p>
                    <strong className="text-[#2C2C40]">Collaboration Drops — A Genuine Collector's Category: </strong>
                    Crocs regularly partners with celebrities, artists, and other brands on limited-edition designs that sell out within hours of release. Crocs Club members with early-access notifications generally have the best shot at securing a pair before general release.
                  </p>

                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Shop Smarter — Make Every Rupee Count at Crocs
                  </h3>

                  <p>
                    Every pair of Crocs you buy is meant to be worn for years, not just seasons — and there is no reason to pay full price for any of it. CouponScrew keeps every active Crocs coupon code, promo code, and discount code verified and ready for you, updated daily, completely free. Bookmark this page before your next Crocs order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price.
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
                  Frequently Asked Questions About Crocs Coupon Codes
                </h2>
                {[
                  {
                    q: "What is the best Crocs coupon code available right now?",
                    a: "The best active Crocs coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first order, while Classic Clogs and Jibbitz charm bundles regularly carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
                  },
                  {
                    q: "How do I find my correct Crocs size?",
                    a: "Crocs Classic Clogs run true to size for most wearers but have a slightly roomier fit than standard sneakers, so many buyers size down by half a size if they prefer a snugger fit. Crocs.in provides a size guide with foot-length measurements on every product page — measuring your foot length in centimetres and comparing it against the chart is the most reliable method, especially since sizing can vary slightly between the Classic Clog, sandals, and boots ranges."
                  },
                  {
                    q: "Are Jibbitz charms compatible with all Crocs styles?",
                    a: "Jibbitz charms are designed for the perforated holes found on Classic Clogs and most clog-style Crocs, including kids' sizes. They generally do not fit sandals, flip-flops, or fully closed styles without the classic ventilation holes, so it is worth checking a specific style's compatibility before buying charms as a gift for a non-clog style."
                  },
                  {
                    q: "How does the Crocs Club loyalty programme work?",
                    a: "Crocs Club is a free loyalty programme that rewards members with points on every purchase, a birthday-month discount, and early access to new colourway drops and collaborations. Points can be redeemed against future orders, and members typically get notified first about limited-edition releases before they sell out — a genuine advantage during high-demand collab launches."
                  },
                  {
                    q: "What is Crocs' return and exchange policy?",
                    a: "Crocs.in typically offers a 30-day return and exchange window on unworn products in original packaging, provided the tags are intact. Sale and clearance items may carry a shorter or non-returnable policy, which is always stated clearly on the product page before checkout, so it is worth confirming return eligibility before buying clearance-priced clogs."
                  },
                  {
                    q: "Can adults and kids wear the same size range?",
                    a: "No — Crocs uses separate size charts for kids and adults, with kids sizing typically running up to around a US youth size 6 before transitioning into adult sizing. Some older kids and petite adults may find overlap in the largest kids sizes and smallest adult sizes, but it is best to check the specific size chart for the style you are buying rather than assuming a direct crossover."
                  },
                  {
                    q: "When do the best Crocs collaboration drops happen?",
                    a: "Crocs regularly partners with celebrities, artists, and other brands on limited-edition colourways and designs, with major drops often timed around festive seasons and pop-culture moments. These collabs tend to sell out quickly, so Crocs Club members with early-access notifications generally have the best chance of securing a pair before general release."
                  },
                  {
                    q: "Can I use a Crocs coupon code with a bank card offer?",
                    a: "Yes. Apply your CouponsCrew Crocs offer at checkout, then pay with an eligible ICICI or SBI card to unlock an additional instant discount. This stacks on top of any sitewide sale or Crocs Club birthday discount, giving you multiple layers of savings on the same order."
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Crocs Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Crocs Coupons", "Classic Clog Offers", "Kids Crocs Deals", "Jibbitz Charm Sale", "Crocs Sandals Discount", "New User Crocs Offer", "Crocs Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Crocs Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Classic Clogs — Up to 40% OFF", sub: "Multiple colours, seasonal sale — deepest discounts of the year" },
                    { heading: "Buy 2 Get 1 Jibbitz Charms", sub: "5-pack charm sets — customise your clogs" },
                    { heading: "Free Shipping ₹1,499+", sub: "No code required — standard delivery included" },
                    { heading: "10% Bank Card Discount", sub: "ICICI, SBI — instant discount at checkout" },
                    { heading: "New User First-Order Offer", sub: "Flat ₹500 off for first-time Crocs customers" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">C</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Crocs deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Crocs checkout for instant discounts.
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
                <span>Continue to Crocs</span>
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
