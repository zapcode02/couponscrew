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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Samsung Coupon Code – Save Up to 41% on Samsung Deals
                    </h1>
                    
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Unlock the latest Samsung Coupon Code to save up to 41% on the Galaxy S23 5G and ₹30,000 on the Galaxy S25 Ultra. Use a Samsung Discount Code to enjoy verified savings on smartphones, TVs, home appliances, and accessories. Shop now and make the most of the Amazon Great Indian Festival Sale.
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
                <span>Samsung Tablets and the Galaxy Tab with S Pen</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               A Samsung tablet is a Galaxy Tab, and the range splits into premium Tab S models, value-focused Tab S FE models and entry-level Tab A models. Shoppers searching for a "Samsung pad" usually mean one of these.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               If you want a Samsung tablet with pen support, the Tab S series and Tab S FE models are the ones to look at, and Samsung has historically included the S Pen in the box with them. Tab A models generally do not support the S Pen, so check the spec sheet before assuming. Students and note-takers get the most out of a pen-ready tab; for pure video watching, a Tab A is enough.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
               Tablet deals often come bundled with a keyboard cover at a reduced price, which is worth more than a small cash discount if you plan to type on it.
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <div className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Samsung Promo Code Not Working? Common Fixes
  </div>

  <div className="text-xs text-[#4A4A6A] space-y-3">
    <div className="font-normal">
      If a Samsung promo code fails at checkout, the reason is usually one of these:
    </div>

    <ul className="space-y-2.5 list-disc pl-4 font-normal text-[#4A4A6A]">
      <li>
        <span className="font-bold text-[#2C2C40]">The code has expired.</span> Samsung codes are often tied to a short campaign window.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">The product is excluded.</span> Many codes apply to a category or specific models only.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">It does not combine with the bank offer you picked.</span> Remove the bank offer and try again, then compare totals.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">It is account-specific.</span> Some vouchers work only for the Samsung account they were issued to, or only on the Shop app.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">It is from another region.</span> A Samsung US code will not work on the India store.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">A minimum cart value applies.</span> Add the eligible item and retry.
      </li>
    </ul>

    <div className="font-normal pt-1">
      If none of these explain it, contact Samsung India support through Samsung.com with the code and a screenshot of the error.
    </div>
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Main Content Column */}
      <div className="prose max-w-none">
        
        {/* Main Title - Replaced H1 with Styled Paragraph */}
        <p className="text-3xl font-black text-black mb-10 leading-tight italic">
          Samsung Coupon Code: Bank Offers, Festive Deals and Refurbished Galaxy Savings
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Samsung coupon code is a promo code or voucher you enter at checkout on Samsung.com or the Samsung Shop app to cut the price of a Galaxy phone, tablet, TV, appliance or accessory. In India, most Samsung savings arrive as instant bank discounts, upgrade bonuses, programme vouchers and festive sale pricing rather than open public codes, so this page covers every route, not only codes.
          </p>

          <p className="italic text-sm text-gray-500">
            *Last checked: 30 September 2026, ahead of the October festive sales.*
          </p>

         <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Samsung Offers and Coupon List</caption>
    <thead>
      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Offer Type
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Discount / Price
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">
          Offer Highlights
        </th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          User Eligibility / Terms
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#E8E8F0]">
      {[
        {
          offerType: '41% OFF',
          discount: 'Up to 41% OFF',
          highlights: 'Get Samsung Galaxy S23 5G for ₹52,999 down from ₹89,999.',
          eligibility: 'Up to 5% Cashback'
        },
        {
          offerType: '23% OFF',
          discount: 'Up to 23% OFF',
          highlights: 'Galaxy S25 Ultra for ₹99,999 with ₹30,000 savings.',
          eligibility: 'No Cost EMI Available'
        },
        {
          offerType: '22% OFF',
          discount: 'Up to 22% OFF',
          highlights: 'Galaxy S24 Ultra at ₹1,04,999 with high-end camera & performance.',
          eligibility: 'Limited Time Offer'
        },
        {
          offerType: 'SAVE ₹1,29,910',
          discount: 'Save ₹1,29,910',
          highlights: '75-inch Micro RGB 4K Smart TV for ₹4,99,990.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹54,810',
          discount: 'Save ₹54,810',
          highlights: 'Refrigerator & Washing Machine appliance combo starting from ₹1,24,180.',
          eligibility: 'Limited-Time Bundle'
        },
        {
          offerType: 'SAVE ₹45,490',
          discount: 'Save ₹45,490',
          highlights: 'Front Load Washer Dryer Combo for ₹74,500.',
          eligibility: 'Instant Discount'
        },
        {
          offerType: 'SAVE ₹37,000',
          discount: 'Save ₹37,000',
          highlights: 'Samsung Galaxy S26 FE for ₹72,999.',
          eligibility: 'Easy EMI Available'
        },
        {
          offerType: 'SAVE ₹35,010',
          discount: 'Save ₹35,010',
          highlights: '653L Side-by-Side Refrigerator for ₹82,990 with spacious storage.',
          eligibility: 'Instant Discount'
        },
        {
          offerType: 'SAVE ₹33,701',
          discount: 'Save ₹33,701',
          highlights: 'Odyssey OLED G8 Gaming Monitor for ₹83,199.',
          eligibility: 'Limited Time Offer'
        },
        {
          offerType: 'SAVE ₹29,910',
          discount: 'Save ₹29,910',
          highlights: 'The Frame 65-inch Smart TV for ₹1,29,990.',
          eligibility: 'Instant Discount'
        },
        {
          offerType: 'SAVE ₹20,000',
          discount: 'Up to ₹20,000 OFF',
          highlights: 'Samsung Galaxy Z Flip8 starting from ₹1,14,999.',
          eligibility: 'No Cost EMI & Bank Offers'
        },
        {
          offerType: 'SAVE ₹19,009',
          discount: 'Up to ₹19,009 OFF',
          highlights: '236L Double Door Refrigerator for ₹30,990.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹15,000',
          discount: 'Save ₹15,000',
          highlights: 'Galaxy A57 5G (8GB RAM) for ₹62,999.',
          eligibility: 'Instant Discount'
        },
        {
          offerType: 'SAVE ₹13,910',
          discount: 'Save ₹13,910',
          highlights: 'Samsung Q-Series Soundbar for ₹1,10,990.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹10,000',
          discount: 'Save ₹10,000',
          highlights: 'Galaxy S25 Ultra available at ₹1,74,999 on official store.',
          eligibility: 'Earn Reward Points'
        },
        {
          offerType: 'SAVE ₹8,000',
          discount: 'Save ₹8,000',
          highlights: '7kg Top Load Washing Machine for ₹18,990.',
          eligibility: 'Limited Time Offer'
        },
        {
          offerType: 'SAVE ₹7,000',
          discount: 'Save ₹7,000',
          highlights: 'Galaxy Buds4 Pro wireless earbuds for ₹22,999.',
          eligibility: 'Select Colours'
        },
        {
          offerType: 'SAVE ₹6,000',
          discount: 'Save ₹6,000',
          highlights: 'Galaxy A56 5G (8GB RAM) for ₹48,999.',
          eligibility: 'Instant Discount'
        },
        {
          offerType: 'STARTING ₹19,999',
          discount: 'From ₹19,999',
          highlights: 'Galaxy M17 5G at special introductory price.',
          eligibility: 'Introductory Offer'
        }
      ].map((row, i) => (
        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
          <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
            {row.offerType}
          </td>
          <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
            {row.discount}
          </td>
          <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
            {row.highlights}
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
              {row.eligibility}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Samsung Offers at a Glance
          </p>

          <p>
            Samsung discounts in India come in six forms. Knowing which one applies to your cart matters more than hunting for a code, because several of them cannot be combined.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Offer type</th>
                  <th className="p-4 font-bold">Where it works</th>
                  <th className="p-4 font-bold">What it usually looks like</th>
                  <th className="p-4 font-bold">Who qualifies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Voucher / coupon code</td>
                  <td className="p-4">Samsung.com, Samsung Shop app</td>
                  <td className="p-4">Flat amount off at cart</td>
                  <td className="p-4">Code-specific (app users, programme members, campaign traffic)</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Instant bank discount / cashback</td>
                  <td className="p-4">Samsung.com, app, Exclusive Stores, Flipkart, Amazon</td>
                  <td className="p-4">Fixed rupee amount or % off on partner cards</td>
                  <td className="p-4">Holders of the named bank's card</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Upgrade bonus (trade-in)</td>
                  <td className="p-4">Samsung.com, app, Exclusive Stores</td>
                  <td className="p-4">Extra value on top of your old phone's exchange price</td>
                  <td className="p-4">Anyone exchanging an eligible device</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">No-cost EMI</td>
                  <td className="p-4">All major channels</td>
                  <td className="p-4">Interest absorbed by the seller</td>
                  <td className="p-4">Eligible card or finance partner</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Festive sale pricing</td>
                  <td className="p-4">Samsung.com, Flipkart, Amazon</td>
                  <td className="p-4">Lower listed price for the sale window</td>
                  <td className="p-4">Everyone</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Certified Re-Newed</td>
                  <td className="p-4">Samsung.com, Samsung Shop app</td>
                  <td className="p-4">Lower price on inspected, refurbished Galaxy phones</td>
                  <td className="p-4">Everyone</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How Samsung Pricing Really Works (Read This Before You Buy)
    </p>

    <p>
      Samsung stacks its offers differently from most online stores, and this is where shoppers lose money. When the Galaxy S26 FE went on sale in September 2026, Samsung listed a bank cashback, an upgrade bonus and long no-cost EMI, then stated plainly that these offers were mutually exclusive. The buyer picks one.
    </p>

    <p>
      That changes the maths. A shopper with no old phone to trade should take the bank cashback. A shopper with a working older Galaxy should compare the upgrade bonus plus the exchange value against the cashback, because the trade-in route often wins on premium models. A shopper who needs to spread payments may be better off with no-cost EMI even if the headline saving looks smaller.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-4">
      Three habits help:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Read the offer terms on the product page, not the banner.</strong> Banners show the biggest number; the terms tell you which card, which variant and whether it combines.
      </li>
      <li>
        <strong>Check the final payable amount, not the "you save" line.</strong> Some savings are cashback credited later, not an upfront cut.
      </li>
      <li>
        <strong>Compare the same variant across channels.</strong> Samsung.com, Flipkart and Amazon rarely price every storage option identically during a sale.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Great Deals on Products Across Samsung's Categories
    </p>

    <p>
      Samsung sells far more than phones in India, and its biggest percentage cuts during festive sales tend to land on laptops, appliances and TVs rather than the newest flagship. Here is where to look in each category and what to watch for.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Category</th>
        <th className="p-4 font-bold">Popular picks</th>
        <th className="p-4 font-bold">Where deals usually show up</th>
        <th className="p-4 font-bold">What to check before buying</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Smartphones</td>
        <td className="p-4">Galaxy S, Z, A, M and F series</td>
        <td className="p-4">Bank cashback + upgrade bonus on Samsung.com; sale pricing on Flipkart/Amazon</td>
        <td className="p-4">Whether the offer applies to your exact storage variant</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Tablets</td>
        <td className="p-4">Galaxy Tab S series, Tab S FE, Tab A series</td>
        <td className="p-4">Bundled keyboard covers, bank offers</td>
        <td className="p-4">Whether the S Pen is included in the box</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Laptops</td>
        <td className="p-4">Galaxy Book series</td>
        <td className="p-4">Among the deepest festive discounts on Samsung.com</td>
        <td className="p-4">Processor generation, not just the model name</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Wearables &amp; audio</td>
        <td className="p-4">Galaxy Watch, Galaxy Buds</td>
        <td className="p-4">Combo pricing with a new phone</td>
        <td className="p-4">Model generation and ANC support</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Monitors</td>
        <td className="p-4">Smart Monitor, Odyssey gaming, ViewFinity</td>
        <td className="p-4">Festive price cuts, GST-related price changes</td>
        <td className="p-4">Refresh rate, panel type and stand adjustability</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">TVs</td>
        <td className="p-4">Crystal UHD, QLED, Neo QLED, OLED</td>
        <td className="p-4">Bundles with soundbars during sales</td>
        <td className="p-4">Screen size vs. room distance, panel type</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Washing machines</td>
        <td className="p-4">Front-load and top-load, AI Ecobubble range</td>
        <td className="p-4">Festive price drops, extended warranty offers</td>
        <td className="p-4">Capacity for your household, installation terms</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Refrigerators &amp; ACs</td>
        <td className="p-4">Bespoke, convertible, WindFree ACs</td>
        <td className="p-4">Extended warranty and free installation offers</td>
        <td className="p-4">Energy rating and warranty on the compressor</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung Washing Machine Offers
    </p>

    <p>
      A Samsung washing machine is one of the better-value purchases in a festive window because appliance discounts on Samsung.com have historically been steep, and the store often adds an extended motor warranty. Check three things before paying: whether installation is included, whether the warranty extension covers the motor or the whole unit, and whether the bank offer applies to appliances or only to phones. Appliance and phone bank offers often run on different cards.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung Monitors
    </p>

    <p>
      Samsung monitors fall into three families. Smart Monitors run apps and streaming without a PC, Odyssey models target gaming with high refresh rates, and ViewFinity models suit design and office work. Prices on monitors shift with GST changes as well as sales, so compare the listed price from a week before the sale with the sale price, not the MRP.
    </p>

    <p>
      For more electronics offers across brands, see our <a href="https://www.couponscrew.com/stores/categories/electronics" className="text-[#5B4FBE] underline">electronics store category</a> and <a href="https://www.couponscrew.com/stores/categories/home-and-kitchen" className="text-[#5B4FBE] underline">home and kitchen offers</a>.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Get Great Savings On Mobile Phones!
    </p>

    <p>
      The best savings on Samsung phones come from pairing the right offer with the right model. Flagships get bank cashback and upgrade bonuses; mid-range A and M series phones get straight price cuts during Flipkart and Amazon sales. Here is the current Galaxy line-up with official Indian launch prices, so you can judge whether a sale price is really a deal.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Current Samsung Phones: Launch Prices in India
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Model</th>
        <th className="p-4 font-bold">Variant</th>
        <th className="p-4 font-bold">Launch price (India)</th>
        <th className="p-4 font-bold">Launched / on sale</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹87,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26</td>
        <td className="p-4">12GB + 512GB</td>
        <td className="p-4 font-medium">₹1,07,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26+</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹1,19,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26+</td>
        <td className="p-4">12GB + 512GB</td>
        <td className="p-4 font-medium">₹1,39,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26 Ultra</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹1,39,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26 Ultra</td>
        <td className="p-4">12GB + 512GB</td>
        <td className="p-4 font-medium">₹1,59,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26 Ultra</td>
        <td className="p-4">16GB + 1TB</td>
        <td className="p-4 font-medium">₹1,89,999</td>
        <td className="p-4">Feb 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Flip 8</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹1,24,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Flip 8</td>
        <td className="p-4">12GB + 512GB</td>
        <td className="p-4 font-medium">₹1,44,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Fold 8</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹1,79,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Fold 8</td>
        <td className="p-4">12GB + 512GB</td>
        <td className="p-4 font-medium">₹1,99,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Fold 8 Ultra</td>
        <td className="p-4">12GB + 256GB</td>
        <td className="p-4 font-medium">₹1,99,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy Z Fold 8 Ultra</td>
        <td className="p-4">16GB + 1TB</td>
        <td className="p-4 font-medium">₹2,59,999</td>
        <td className="p-4">Aug 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Galaxy S26 FE</td>
        <td className="p-4">8GB + 256GB</td>
        <td className="p-4 font-medium">₹79,999</td>
        <td className="p-4">Sep 2026</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-xs italic text-slate-500 mb-4">
      *Launch prices as reported at announcement. Live prices on Samsung.com, Flipkart and Amazon may be lower.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Is It Worth Buying an Older Galaxy Flagship?
    </p>

    <p>
      Last year's flagship is usually the smartest Samsung buy during a festive sale. When a new S series launches, earlier models such as the Samsung S24 and Samsung S23 Ultra tend to drop sharply on Flipkart and Amazon while stock lasts. The S23 Ultra in particular still appeals to buyers who want the built-in S Pen and a zoom camera without paying current-Ultra money.
    </p>

    <p>
      The trade-off is software support. Samsung promises a fixed number of years of Android and security updates per model, counted from launch, so an older phone has fewer years left. Before buying, look the model up on Samsung's security updates page and check how much support remains.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung S21, Note 20 Ultra, A13 and Z Fold 4: What Buyers Should Know
    </p>

    <p>
      People still search for the Samsung S21, the Samsung Note 20 Ultra, the Samsung A13 and the Samsung Galaxy Z Fold 4, but these are older models and new stock on Samsung.com is unlikely. The Note series itself was discontinued; its S Pen moved into the Galaxy S Ultra phones, so the modern replacement for a Note 20 Ultra is an S Ultra model.
    </p>

    <p>
      If you want one of these specific phones, your realistic options are:
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li>A Samsung Certified Re-Newed unit, if the model is listed (see the refurbished section below).</li>
      <li>Marketplace refurbished or renewed listings on Flipkart or Amazon, where warranty terms depend on the seller.</li>
      <li>The resale market, with no manufacturer warranty.</li>
    </ul>

    <p>
      For an older foldable like the Z Fold 4, check the hinge and inner screen condition carefully and ask what warranty covers the folding display. Foldable screen repairs are expensive, and that cost can wipe out whatever you saved.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Samsung Galaxy Accessories Offers
    </p>

    <p>
      Galaxy accessories get their best prices in two situations: as a combo with a new phone on Samsung.com, and as standalone deals during Flipkart and Amazon sales. Buying accessories on their own right after a phone launch rarely gives you the best price.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung Buds, Headphones and Earphones
    </p>

    <p>
      Galaxy Buds are Samsung's wireless earbuds, and they pair most smoothly with Galaxy phones through quick pairing and automatic device switching. If you are shopping for Samsung headphones or Samsung earphones on a budget, Samsung also sells wired earphones and audio products under its own name, while higher-end headphones fall under brands in the Samsung group. Check whether the Buds model you are buying has active noise cancellation, since older and entry models may not.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung Charger Offers
    </p>

    <p>
      Recent Galaxy phones ship without a charger in the box, which makes the Samsung charger one of the most commonly bought accessories. Buy one that matches your phone's supported fast-charging wattage; a higher-wattage adapter will not charge a phone faster than the phone allows. Cheap unbranded chargers can lack the fast-charging protocol Galaxy phones use, so an official or certified charger is worth the small premium.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Accessory Buying Tips
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li>Look for "Buy More Save More" style offers on Samsung.com, where adding a second eligible item lowers the total.</li>
      <li>Check compatibility by exact phone model. Cases and screen protectors for the S26 do not fit the S26+.</li>
      <li>Keep the invoice. Accessory warranties need it, just as phone warranties do.</li>
    </ul>

    <p className="text-xl font-black text-[#5B4FBE] mt-8 mb-4">
      What Is Samsung Fest?
    </p>

    <p>
      Samsung Fest is the common name for Samsung India's own festive sale, run across Samsung.com, the Samsung Shop app and Samsung Exclusive Stores ahead of Diwali. In recent years Samsung has run it under the official name Fab Grab Fest, with sale pricing, bank cashback and extended warranties across phones, laptops, TVs and appliances.
    </p>

    <p>
      Samsung's own sale is separate from Flipkart and Amazon events. The two often overlap in timing, but the offers differ: Samsung's sale leans on bank cashback, upgrade bonuses, bundles and extended warranties, while marketplace sales lean on straight price cuts and their own bank partners.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung's Festive Sales in Recent Years
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Year</th>
        <th className="p-4 font-bold">Sale name</th>
        <th className="p-4 font-bold">Started</th>
        <th className="p-4 font-bold">Channels</th>
        <th className="p-4 font-bold">Headline offers</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">2022</td>
        <td className="p-4 font-medium">NO MO' FOMO Festival Sale</td>
        <td className="p-4">19 Sep 2022</td>
        <td className="p-4">Samsung.com, Shop app, Exclusive Stores</td>
        <td className="p-4">Bank cashback via HDFC and ICICI; extra discount for first Shop app purchase</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">2025</td>
        <td className="p-4 font-medium">Samsung's 2025 festive fest</td>
        <td className="p-4">22 Sep 2025</td>
        <td className="p-4">Samsung.com, Shop app, Exclusive Stores</td>
        <td className="p-4">Bank cashback up to 27.5% (capped at ₹55,000) via HDFC, SBI and partners; extended warranties; free installation on select ACs</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">2026</td>
        <td className="p-4 font-medium">Not yet announced</td>
        <td className="p-4">—</td>
        <td className="p-4">—</td>
        <td className="p-4">Check back; this table will be updated when Samsung confirms</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How to Get the Most from Samsung's Festive Sale
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li>Sign in to the Samsung Shop app before the sale; app-only vouchers have appeared in past sales.</li>
      <li>Decide your trade-in device in advance and check its exchange value, so you can compare the upgrade route against bank cashback quickly.</li>
      <li>For appliances, read the extended warranty terms. They vary by product and are part of the real value.</li>
      <li>Watch for bundle offers on TVs, where a soundbar or second TV has been added at a reduced price in past sales.</li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Samsung Offers on Flipkart Big Billion Days and Amazon Great Indian Festival 2026
    </p>

    <p>
      Both of India's big October sales start this month, and Samsung phones are among the most-searched items on each. Flipkart Big Billion Days 2026 opens to the public on 9 October, and Amazon Great Indian Festival 2026 begins on 8 October. Neither platform had published final Samsung prices at the time of writing, so the table below covers what is confirmed.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold"></th>
        <th className="p-4 font-bold">Flipkart Big Billion Days 2026</th>
        <th className="p-4 font-bold">Amazon Great Indian Festival 2026</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Public sale starts</td>
        <td className="p-4">9 October 2026</td>
        <td className="p-4">8 October 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Early access</td>
        <td className="p-4">8 October for Flipkart VIP, Flipkart Black and Flipkart credit card members</td>
        <td className="p-4">Prime early access expected, not confirmed at time of writing</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Bank offers announced</td>
        <td className="p-4">Axis Bank and ICICI Bank cards, up to 10% off</td>
        <td className="p-4">SBI credit and debit cards, 10% instant discount (EMI included)</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Member extras</td>
        <td className="p-4">Early access window</td>
        <td className="p-4">Prime members, up to 10% extra on select offers</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Samsung models to watch</td>
        <td className="p-4">Galaxy S25 and S26 series (price drops expected by reporters)</td>
        <td className="p-4">Galaxy S25 Ultra (big past price cuts reported)</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">End date</td>
        <td className="p-4">Not announced</td>
        <td className="p-4">Not announced</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Samsung.com vs Flipkart vs Amazon: Where to Buy
    </p>

    <p>
      There is no single winner. The right store depends on what you value, and the answer can change from one day of the sale to the next.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Factor</th>
        <th className="p-4 font-bold">Samsung.com / Shop app</th>
        <th className="p-4 font-bold">Flipkart</th>
        <th className="p-4 font-bold">Amazon</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Seller</td>
        <td className="p-4">Samsung directly</td>
        <td className="p-4">Marketplace sellers</td>
        <td className="p-4">Marketplace sellers</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Upgrade bonus on trade-in</td>
        <td className="p-4">Yes, on eligible models</td>
        <td className="p-4">Platform exchange offers</td>
        <td className="p-4">Platform exchange offers</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Bank partners (2026 festive)</td>
        <td className="p-4">Samsung's own list, varies by product</td>
        <td className="p-4">Axis Bank, ICICI Bank</td>
        <td className="p-4">SBI</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Certified Re-Newed Galaxy phones</td>
        <td className="p-4">Yes</td>
        <td className="p-4">No (marketplace refurbished instead)</td>
        <td className="p-4">No (marketplace renewed instead)</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Samsung Care+ at checkout</td>
        <td className="p-4">Yes</td>
        <td className="p-4">Varies</td>
        <td className="p-4">Varies</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Best for</td>
        <td className="p-4">Trade-ins, flagships, appliances with warranty add-ons</td>
        <td className="p-4">Mid-range A/M/F phones, sale-day price cuts</td>
        <td className="p-4">Mid-range phones, accessories, SBI cardholders</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      A practical approach: shortlist your exact model and variant, note its price on Samsung.com today, then compare against both marketplaces once sale prices go live. Factor in which bank card you actually hold, because a 10% offer on a card you do not have is worth nothing to you.
    </p>

    <p>
      Related reading: our full <a href="https://www.couponscrew.com/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] underline">Big Billion Days vs Amazon Great Indian Festival comparison</a>, the <a href="https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers" className="text-[#5B4FBE] underline">Flipkart Big Billion Days offers page</a> and the <a href="https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] underline">Amazon Great Indian Festival offers page</a>. You can also check the latest <a href="https://www.couponscrew.com/stores/flipkart-coupon-code" className="text-[#5B4FBE] underline">Flipkart coupon codes</a> and <a href="https://www.couponscrew.com/stores/amazon-coupon-code" className="text-[#5B4FBE] underline">Amazon coupon codes</a>.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Samsung Refurbished/Certified Renewed
    </p>

    <p>
      Samsung Certified Re-Newed is Samsung's official refurbished phone programme in India, announced in May 2026 and sold through Samsung.com and the Samsung Shop app. Each device is refurbished in-house by Samsung, not by a third-party seller, which is the main difference from marketplace refurbished listings.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">What you get</th>
        <th className="p-4 font-bold">Samsung Certified Re-Newed</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Who refurbishes it</td>
        <td className="p-4">Samsung, in-house</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Checks</td>
        <td className="p-4">Detailed inspection, functional testing and software validation</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Parts</td>
        <td className="p-4">Genuine Samsung parts</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Data</td>
        <td className="p-4">Full data reset</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Software</td>
        <td className="p-4">Latest available software update installed</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Packaging</td>
        <td className="p-4">New box</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Warranty</td>
        <td className="p-4">One year, manufacturer warranty</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Models</td>
        <td className="p-4">Flagship and mid-range Galaxy phones (stock varies)</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Where to buy</td>
        <td className="p-4">Samsung.com and Samsung Shop app</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Certified Re-Newed vs Marketplace Refurbished
    </p>

    <p>
      A marketplace refurbished phone can be a good deal, but the warranty, the grading and the parts all depend on the individual seller. Samsung's programme removes that guesswork at the cost of a narrower choice of models. If the Galaxy you want is listed as Certified Re-Newed, it is usually the safer buy. If it is not, a marketplace listing with a clear warranty and a return window is the fallback.
    </p>

    <p>
      Before buying any refurbished Galaxy, check how many years of software updates the model has left. A cheap refurbished phone near the end of its update window is a weaker deal than it looks.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Samsung US vs Samsung India: Why Codes Do Not Cross Borders
    </p>

    <p>
      A lot of Samsung promo codes you find online are for the Samsung US store, and they will not work on Samsung.com/in. Samsung runs separate regional stores with their own pricing, programmes and checkout systems, so a code built for the US site is rejected in India.
    </p>

    <p>
      Warranty is regional too. A phone bought from the US store and brought to India may not get the same in-warranty service here, and some models differ in bands and features by region. For buyers in India, the Samsung India store, Samsung Exclusive Stores and Indian marketplace sellers are the channels that give you local warranty and service.
    </p>
  </div>
</div>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            How to Apply a Samsung Coupon Code on Samsung.com
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Open Samsung.com/in or the Samsung Shop app and sign in with your Samsung account.</li>
            <li>Add the product to your cart and pick the colour, storage and any add-ons such as Samsung Care+.</li>
            <li>On the cart page, find the field for a coupon or voucher code.</li>
            <li>Enter the code exactly as shown, with no extra spaces, and tap Apply.</li>
            <li>Check that the discount appears in the order summary before you move to payment.</li>
            <li>At payment, compare the bank offer against the code. If the page says offers are mutually exclusive, keep whichever saves more.</li>
            <li>Complete the order and save the invoice, since it carries the warranty date.</li>
          </ol>

          <p>
            If the discount disappears at the payment step, the code and the bank offer are probably not stackable. The troubleshooting section further down covers this.
          </p>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            Other Ways to Save on Samsung
          </p>

          <p>
            A Samsung discount code is only one route to a lower price. These often save more:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Upgrade bonus with exchange.</strong> Trading in an eligible phone can add a bonus on top of its exchange value.
            </li>
            <li>
              <strong>Student and corporate programmes.</strong> Samsung India has run student and corporate employee programmes with separate pricing on its store. Check Samsung.com/in for whether one is active and whether you qualify.
            </li>
            <li>
              <strong>Samsung Care+.</strong> Not a discount, but accidental and liquid damage cover bought at checkout can save far more than a coupon if something goes wrong.
            </li>
            <li>
              <strong>Price tracking.</strong> Note the price of your model a week before a sale. A "sale price" is only a deal if it is below that.
            </li>
            <li>
              <strong>Diwali offers.</strong> Some of the best appliance deals arrive closer to Diwali; see our <a href="https://www.couponscrew.com/festival-offers/diwali-offers" className="text-[#5B4FBE] font-bold underline">Diwali offers page</a>.
            </li>
          </ul>

          <p>
            For broader tips, read our guide on <a href="https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india" className="text-[#5B4FBE] font-bold underline">how to save money shopping online in India</a>.
          </p>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Samsung Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a working Samsung coupon code today?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Samsung India rarely publishes open coupon codes that work for everyone. Most savings come from bank discounts, upgrade bonuses, app-specific vouchers and sale pricing. Any code issued to you will show in your Samsung account, the Shop app or a Samsung email.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter a Samsung promo code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enter it in the coupon or voucher field on the cart page of Samsung.com/in or the Samsung Shop app, before payment. Confirm the discount shows in the order summary before paying.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I combine a Samsung coupon with a bank offer?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sometimes, but often not. Samsung has stated for some launches that its bank cashback, upgrade bonus and EMI offers are mutually exclusive. Check the offer terms on the product page and compare the final payable amount.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is Samsung Fest?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Samsung Fest is the popular name for Samsung India's own festive sale on Samsung.com, the Shop app and Samsung Exclusive Stores. It usually starts in late September, ahead of Diwali, with bank cashback, extended warranties and bundle offers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                When do the Flipkart and Amazon festive sales start in 2026?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Amazon Great Indian Festival 2026 starts on 8 October. Flipkart Big Billion Days 2026 opens to the public on 9 October, with early access for Flipkart VIP, Black and credit card members on 8 October.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Samsung Certified Re-Newed safe to buy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Certified Re-Newed phones are refurbished in-house by Samsung with genuine parts, a full data reset, the latest software and a one-year manufacturer warranty, and are sold through Samsung.com and the Shop app.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I still buy a Samsung Note 20 Ultra or Galaxy S21?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not new from Samsung.com. Both are older models; the Note line was discontinued and its S Pen moved to the Galaxy S Ultra phones. Look for a Certified Re-Newed or warranty-backed refurbished unit and check how much software support is left.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Which Samsung tablet comes with a pen?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Galaxy Tab S series and Tab S FE models support the S Pen, and Samsung has historically included it in the box. Tab A models generally do not support the S Pen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does a Samsung US promo code work in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Samsung's US and India stores are separate, with their own codes, pricing and warranty terms. Only codes issued for Samsung.com/in work on the India store.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Samsung.com cheaper than Flipkart or Amazon?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It depends on the model and the day. Samsung.com is often stronger for trade-ins, flagships and appliances with warranty add-ons, while Flipkart and Amazon can be cheaper on mid-range phones during sales. Compare the same variant across all three.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            The best Samsung deal is rarely the one with the loudest banner. Pick your exact model first, check whether a Samsung coupon code, a bank offer or a trade-in gives you the lowest final price, and compare that number across Samsung.com, Flipkart and Amazon once the October sales open.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Samsung Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Samsung Coupons", "Galaxy Mobile Offers", "Samsung TV Sale", "Appliance Discounts", "Student Offer", "Samsung Bank Offers", "Corporate Discount", "CouponsCrew Home"].map(tag => (
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
