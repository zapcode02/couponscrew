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
import { Coupon, EXPEDIA_COUPONS } from './expediaCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.expedia.co.in';

export default function ExpediaStore() {
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

  const coupons: Coupon[] = EXPEDIA_COUPONS;

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
      q: 'How do I use an Expedia coupon code?',
      a: 'To use an Expedia coupon code, browse verified codes here on CouponsCrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Expedia website or app. If it is a deal, simply click "Visit Expedia" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Expedia?',
      a: 'Generally, Expedia only allows one promotional code per booking. However, you can often combine a coupon code with member pricing, automatic sitewide promotions, or select bank/card discount offers.'
    },
    {
      q: 'Why is my Expedia coupon code not working?',
      a: 'A coupon might not work due to restrictions on booking type (e.g. some codes apply only to hotels, not flights), minimum booking value requirements, expiry, or eligibility restrictions such as new-user-only offers.'
    },
    {
      q: 'Where can I find the best Expedia offers?',
      a: 'We keep this Expedia store page updated regularly with the best discounts, verified coupon codes, and seasonal sale offers on flights, hotels, vacation packages, and car rentals.'
    },
    {
      q: 'Does Expedia offer free cancellation?',
      a: 'Many hotel and flight listings on Expedia offer a "Free Cancellation" option, clearly marked during search. Availability depends on the specific rate and provider selected at booking.'
    },
    {
      q: 'How often are Expedia coupons updated?',
      a: 'Our deals team checks and updates Expedia coupons regularly. Expired promotions are filtered out, ensuring you only spend time on working codes.'
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
            <span className="text-[#5B4FBE] font-semibold">Expedia Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789605021/expedia-logo_oysjh1.webp"
                      alt="Expedia Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Expedia Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Flights, Hotels & Vacation Packages
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Expedia coupon codes and promo codes to save up to 50% on holiday deals, get up to 25% OFF flights, and enjoy 20% OFF selected hotels when booking 60 days early. Book hotels, flights, and vacation packages for less in Sept 2026.
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
    <span>Visit Expedia</span>
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

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563]"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789605021/expedia-logo_oysjh1.webp"
                alt="Expedia Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-contain w-full h-full bg-white p-10"
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Expedia Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Expedia coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
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
                    <span>Valid on select booking categories as shown on Expedia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum booking value might apply as specified in offer terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers select destinations, hotel partners, and airlines.</span>
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
                <span>The Story Behind Expedia</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Expedia is one of the world's largest online travel agencies, founded in 1996 and now operating across more than 60 countries. The platform brings together hotel stays, airline tickets, rental cars, and vacation packages under a single checkout — so you can plan and book an entire trip without switching between multiple sites.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                Expedia's inventory spans hundreds of thousands of properties worldwide, from budget guesthouses to five-star resorts, alongside flights on major international carriers, regional airlines, and low-cost operators. The platform also runs One Key, a unified loyalty programme linking Expedia, Hotels.com, and Vrbo, where every qualifying booking earns OneKeyCash redeemable across all three. For travelers who want everything in one place — booking, itinerary management, and customer support — Expedia covers the full journey from search to confirmation.
              </p>



              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Expedia</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Expedia Travel Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Hotels, Flights & Vacation Packages
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Expedia
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Hotels & Resorts</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Flights</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Vacation Packages</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Car Rentals</span>
                  <span className="text-[#FF5722] font-bold">Up to 15% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Cruises</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Expedia */}
            {/* Sidebar Card: Why Use CouponsCrew for Expedia Deals? */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Use CouponsCrew for Expedia Deals?
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A]">
    CouponsCrew verifies every Expedia coupon code before it goes live on this page, so you are not wasting time at checkout testing codes that expired weeks ago. Each listing shows the discount type, the eligible booking category — hotel, flight, or vacation package — and the validity window clearly, so you know exactly what applies to your trip before you even open expedia.com. The page updates regularly to reflect new Expedia promo codes and Expedia discount codes as Expedia releases them through seasonal campaigns and partner offers. No account required, no email signup wall — just pick a code, copy it, and apply it at checkout.
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
          Expedia Coupon Code: Save on Hotels, Flights & Vacation Packages
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            An Expedia coupon code is a short alphanumeric string you enter at checkout to reduce the total cost of a hotel stay, airline ticket, rental car, or bundled vacation package. Expedia releases promo codes through its website, email newsletters, seasonal campaigns, and affiliate partner sites — apply one before confirming your booking and the discount comes off your total immediately. Whether you are planning a weekend city break, a long-haul international trip, or a full family vacation, a working Expedia promo code or Expedia discount code is one of the simplest ways to bring the final price down without changing your travel plans.
          </p>
          <p>
            This page lists verified codes updated regularly for hotels, flights, packages, and car rentals on expedia.com.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Services Offered by Expedia
    </h3>
    <p>
      Expedia is a full-service online travel platform that covers every component of a trip — stays, flights, ground transport, and complete itineraries — from a single checkout. Here is a detailed breakdown of what each category includes and how to get the most out of it.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Hotels and Stay Reservations
    </h3>
    <p>
      Expedia hotel booking covers a wide range of property types: budget hotels, boutique stays, serviced apartments, resort properties, and international chain locations. When you search for a destination, results pull from a large inventory with filters for price range, star rating, guest review score, amenities (pool, free breakfast, free cancellation), and neighborhood.
    </p>
    <p>
      Expedia hotel reservations on many properties include a free cancellation window — typically 24 to 48 hours before check-in, though this varies by property and rate type. The cancellation policy is always shown on the listing page before checkout, so there are no surprises after booking.
    </p>
    <p>
      Member Prices — available to logged-in Expedia account holders — apply automatically on qualifying hotel listings and can reduce the displayed rate before any Expedia discount code is entered. These prices are not visible to guests browsing without an account, so signing in before searching is worth the extra step.
    </p>
    <p>
      For longer stays or apartment-style accommodation, Expedia also surfaces vacation rental options alongside traditional hotel inventory, giving travelers more flexibility depending on the trip type.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Flights and Airline Tickets
    </h3>
    <p>
      The flights tab on the expedia website lets you compare expedia airline tickets across major international carriers, regional operators, and low-cost airlines in a single results page. Search options include one-way, round-trip, and multi-city itineraries, with filters for nonstop preference, cabin class, airline, departure and arrival time windows, and maximum layover duration.
    </p>
    <p>
      Expedia air flights search covers both domestic routes and long-haul international connections. Results display the total price including taxes and fees upfront, so the number you see in the search results is what you pay — there are no add-ons that appear only at checkout unless you choose optional extras like seat selection or checked baggage upgrades.
    </p>
    <p>
      For expedia plane tickets on popular or flexible routes, the platform's calendar view shows fare differences day by day, helping you find the cheapest travel date within your window without running multiple searches manually.
    </p>
    <p>
      Price alerts — available through the platform — notify you when fares drop on saved routes. This is particularly useful when you have flexible travel dates and are monitoring expedia flight tickets on a high-demand route ahead of a trip that is weeks out.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Cars
    </h3>
    <p>
      Expedia's car rental search pulls inventory from major rental companies at airports and city-center locations worldwide. You can filter by car category (economy, standard, SUV, minivan), transmission type, rental company, and whether the rate includes unlimited mileage or additional driver options.
    </p>
    <p>
      Booking a rental car alongside a hotel or flight through Expedia qualifies for bundle pricing in most cases, reducing the per-day cost compared to booking the car directly through the rental company's own site. Pickup and drop-off locations, fuel policies, and included insurance coverage are all displayed on the listing before checkout.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Vacation Packages and Travel Packages
    </h3>
    <p>
      Expedia vacation packages are the platform's most direct way to reduce total trip cost without hunting for individual deals on each component. When you combine at least two bookings — most commonly expedia airline tickets and a hotel stay — into a single package booking, Expedia applies an automatic bundle discount that does not require a separate Expedia promo code to activate.
    </p>
    <p>
      Expedia travel packages and expedia trip packages are available for domestic and international destinations. You can build a package from the Packages tab by entering your origin, destination, and travel dates, then selecting your preferred flight and hotel from the filtered results. The price displayed at checkout reflects the bundled saving already applied.
    </p>
    <p>
      For travelers who also need ground transport, adding a car rental to an existing flight-and-hotel package extends the bundle discount further. Expedia packages deals appear in a dedicated section on the vacation packages page and rotate seasonally, with deeper discounts around major travel periods and advance-booking windows.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Sign-Up Bonus
    </h3>
    <p>
      New users who create a free Expedia account gain immediate access to Member Prices on qualifying hotel and package listings. These rates sit below the standard publicly displayed price and apply automatically when you are logged in — no Expedia coupon code required to activate them.
    </p>
    <p>
      Expedia's loyalty programme, One Key, extends this further. One Key is a unified rewards scheme that links Expedia, Hotels.com, and Vrbo under a single account. Every qualifying booking on any of the three platforms earns OneKeyCash, which is redeemable as a discount on future bookings across all three. There is no annual membership fee and no minimum spend threshold to start earning.
    </p>
    <p>
      <strong className="text-[#2C2C40]">How OneKeyCash works in practice:</strong>
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Book an expedia hotel booking or expedia vacation package → earn a percentage back as OneKeyCash.</li>
      <li>Cash earned on Expedia can be spent on a Hotels.com booking, and vice versa.</li>
      <li>OneKeyCash does not expire while your account remains active.</li>
      <li>Higher-tier One Key status (Silver, Gold) increases the earn rate and unlocks additional perks such as priority customer support and complimentary upgrades where available.</li>
    </ul>
    <p>
      For travelers who book through expedia regularly, the loyalty programme compounds savings over time in a way that a single Expedia discount code does not — especially across multiple trip categories or platforms within the Expedia Group ecosystem.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Travel Blog and Listopedia
    </h3>
    <p>
      Expedia maintains a travel content hub that covers destination guides, trip inspiration, seasonal travel ideas, and practical planning resources. The content is accessible from the expedia website and covers a wide range of traveler types and budgets.
    </p>
    <p>
      Destination guides break down major cities and travel regions by things to do, where to stay, best time to visit, and rough cost expectations. These are useful during the early research phase of a trip when you are still deciding between destinations rather than ready to start booking with expedia.
    </p>
    <p>
      Listopedia is Expedia's curated list format — ranked collections of beaches, cities, weekend destinations, family-friendly resorts, and travel experiences sorted by theme, season, or traveler preference. Lists cover content like "best beach destinations for families," "top city breaks for a long weekend," and "most-booked hotels by region," which can help narrow down options before you run a formal search.
    </p>
    <p>
      Travel blog content covers packing guides, itinerary suggestions, and travel tips for specific regions. While this content does not carry booking functionality directly, it links through to relevant expedia vacation deals and property listings, making it a useful starting point for travelers who prefer to research before searching.
    </p>
    <p>
      For travelers who use Expedia across multiple trip types — expedia flight tickets for business travel, expedia hotel reservations for leisure stays — the blog and Listopedia sections add trip planning value beyond the core booking engine.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      How to Save More on Your Expedia Bookings
    </h3>
    <p>
      Getting the lowest price on expedia.com comes from combining several savings levers rather than relying on a single discount. Here is how each one works and when to apply it.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Bundle Your Flight and Hotel: </strong>
      Expedia vacation packages that combine expedia airline tickets and a hotel stay into one booking almost always cost less than booking each separately. The bundle discount applies automatically and is displayed as a line item in the checkout summary. For expedia trip packages that also include a car rental, the saving increases further. This is the single most consistent way to reduce total trip cost without needing a separate code.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Log In Before You Search: </strong>
      Member Prices are only visible and applicable when you are signed into your Expedia account. These discounts apply to qualifying expedia hotel booking results and some package listings, and they stack with promo codes entered at checkout. Searching while logged out means you may be comparing against a higher base price than you would see if you signed in first.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Apply a Verified Expedia Discount Code: </strong>
      A working Expedia discount code applied at checkout reduces the total on top of any Member Prices or bundle discounts already in place. Codes are released for specific categories — hotel-only, flight-plus-hotel, or full expedia vacation packages — and have validity windows. Using a current, category-matched code is the most direct way to stack an additional saving on an already-discounted booking.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Watch the Expedia Vacation Deals Page: </strong>
      The expedia vacation deals section lists time-sensitive promotions on hotels, packages, and flight routes. Promotions rotate regularly and often reflect last-minute availability on high-demand properties or routes where inventory has freed up close to travel date. If your dates are flexible by a few days, checking this page before running a standard search can surface deals not visible through the main search results.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Use Price Alerts for Flights: </strong>
      For trips planned several weeks in advance, setting a price alert on expedia plane tickets for your route lets the platform notify you when fares drop. Combined with the calendar view that shows day-by-day fare differences, this approach works well for travelers whose travel dates are not fixed to a specific weekend or event.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Book Early for Hotels, Later for Flights: </strong>
      As a general pattern, expedia hotel booking tends to reward advance reservations — rates on many properties increase as check-in date approaches and inventory shrinks. Expedia flight tickets can move in either direction, but significant last-minute drops are less common on popular routes. A practical approach is to lock in the hotel early (especially if it includes free cancellation), then monitor flight prices through alerts until closer to travel.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Check Expedia Partner Central Affiliate Offers: </strong>
      Certain Expedia promo codes are distributed through expedia partner central affiliate channels and may offer deeper discounts than codes available through the platform's own promotions. Affiliate coupon sites that are part of the Expedia partner network regularly list codes for hotel-only, flight-only, and bundled bookings with terms clearly listed alongside.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an Expedia Coupon Code</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying a code takes under a minute if you know where to look. Follow these steps exactly to make sure the discount registers before you pay:</p>
            <div className="space-y-6">
              {[
                "Open expedia.com and select your travel category — Stays, Flights, Cars, or Packages — from the top navigation.",
                "Enter your destination, check-in and check-out dates, and the number of travelers, then run the search.",
                "Browse the results and click through to the listing or itinerary you want to book.",
                "On the checkout or review page, find the \"Add a coupon code\" or \"Enter promo code\" input field — it appears below the price summary on most booking flows.",
                "Paste your Expedia coupon code into the field and click Apply.",
                "Confirm the discount line appears in the updated price breakdown before entering your payment details.",
                "Complete the booking as normal."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-xs text-gray-500 italic mt-6 pt-4 border-t border-[#f0f0f0]">
              <p className="font-bold text-black uppercase tracking-wider mb-2">Things to check before applying:</p>
              <p>Each code has a minimum spend threshold, a validity window, and often a category restriction — hotel-only codes will not apply to expedia flight tickets, and package codes may exclude standalone bookings.</p>
              <p>Only one promo code can be applied per booking.</p>
              <p>If a code returns an error, check that your booking category, dates, and cart total match the offer terms.</p>
              <p>Logging in to your Expedia account before applying a code ensures Member Prices are already factored in, so you see the lowest possible total.</p>
            </div>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Expedia's Role in Modern Travel Booking
            </h3>

            <p>
              Expedia has operated as an online travel agency since 1996, which means nearly three decades of building supplier relationships, refining its search infrastructure, and expanding the range of deals and services available through a single platform. That track record translates into practical advantages for travelers booking today, particularly for multi-component trips where coordinating across separate suppliers adds friction and cost.
            </p>

            <p>
              The consolidation that the expedia website offers — bringing together expedia hotel reservations, expedia air flights, expedia airline tickets, rental cars, and expedia vacation packages under one checkout — reduces the number of confirmation emails, cancellation policies, and customer service contacts a traveler has to manage for a single trip. When something changes mid-trip, such as a cancelled flight or a hotel needing to be swapped, handling it through one platform is significantly faster than coordinating separately with an airline and a hotel chain.
            </p>

            <p>
              The depth of inventory matters too. Expedia hotel booking spans independent properties, serviced apartments, international chains, and resort complexes across most travel markets globally. Expedia airlines coverage includes major carriers, regional operators, and budget airlines, so the search results reflect a genuinely wide price range rather than a curated shortlist weighted toward higher-margin options. When you layer a verified Expedia coupon code or Expedia promo code on top of Member Prices and bundle discounts that already apply at checkout, the savings compound rather than replace each other — and that stacking is what makes booking with expedia one of the more cost-efficient ways to put together a complete trip itinerary.
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
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions
          </h3>
          {[
            {
              q: "What is an Expedia coupon code and where do I find one?",
              a: "An Expedia coupon code is a promotional code that reduces the price of an eligible booking at checkout. You can find current codes on this page, through Expedia's own email promotions, and via expedia partner central affiliated coupon sites that publish verified codes with full terms."
            },
            {
              q: "Can I use an Expedia promo code on vacation packages?",
              a: "Yes, many Expedia promo code offers apply to expedia vacation packages. Some codes are restricted to hotel-only or flight-only bookings — check the code's terms before selecting your booking type to confirm it qualifies."
            },
            {
              q: "Does Expedia offer free cancellation?",
              a: "Many expedia hotel reservations and package hotel components include a free cancellation window, typically 24 to 48 hours before check-in. The exact policy depends on the property and rate type selected. The cancellation terms are displayed on the listing page before you commit to booking."
            },
            {
              q: "How does booking with Expedia compare to booking directly?",
              a: "Booking with expedia consolidates multiple travel components — expedia airline tickets, hotel, and car — into one itinerary and one customer service contact. Bundled expedia vacation packages typically cost less than booking each component separately through individual supplier sites. Some airlines and hotels offer price-match guarantees on direct bookings, so comparing both is worth doing before confirming."
            },
            {
              q: "Is Expedia reliable for international travel?",
              a: "Yes. The expedia website supports hotel reservations, expedia air flights, and car rentals in most major international travel markets. International bookings go through the same checkout flow as domestic ones, with pricing displayed in your selected currency and full itinerary details provided in your confirmation."
            },
            {
              q: "What is One Key and how does it work?",
              a: "One Key is Expedia Group's unified loyalty programme linking Expedia, Hotels.com, and Vrbo. Every qualifying booking earns OneKeyCash, which can be spent on future bookings across any of the three platforms. Enrollment is free, and higher-tier status increases the earn rate and unlocks additional perks."
            },
            {
              q: "Can I combine an Expedia discount code with Member Prices?",
              a: "In most cases, yes. Member Prices apply automatically when you are logged in, and an Expedia discount code is entered separately at checkout as an additional reduction. The final checkout page shows each discount as a separate line item so you can confirm both have applied before paying."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Expedia Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Expedia Hotel Codes", "Flight Booking Discounts", "Vacation Package Deals", "Member Prices Savings", "One Key Loyalty Perks", "Free Cancellation Stays", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Travel Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Flat Percentage Off Hotels", sub: "Verified coupon codes across worldwide accommodation stays" },
              { heading: "Flight & Stay Bundles", sub: "Extra price cuts when booking vacation packages together" },
              { heading: "Member Exclusive Rates", sub: "Additional discounts unlocked by logging into your Expedia account" },
              { heading: "Car Rental Promo Codes", sub: "Special promotional rates on global vehicle rentals" },
              { heading: "One Key Cash Rewards", sub: "Earn loyalty credit on eligible bookings across platforms" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">E</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Expedia deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Expedia checkout for instant discounts.
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
                <span>Continue to Expedia</span>
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
