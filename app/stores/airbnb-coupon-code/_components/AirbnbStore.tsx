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
import { Coupon, AIRBNB_COUPONS } from './airbnbCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.airbnb.co.in';

export default function AirbnbStore() {
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

  const coupons: Coupon[] = AIRBNB_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Airbnb Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/airbnb-logo_oxypoj.webp"
                      alt="Airbnb Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.7 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Airbnb Coupon Code – Save Up to 44% on Airbnb Stays</h1>
                    
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the best Airbnb Coupon Code to save on your next stay. Enjoy 44% OFF a private room in Noida or save ₹625 on selected stays. Use the latest Airbnb Discount Code to book verified Airbnb accommodations at lower prices and make every trip more affordable.
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
                  <span>Visit Airbnb</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#FF385C]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/airbnb-logo_oxypoj.webp"
                alt="Airbnb Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">60+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 30%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹8,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Airbnb Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Airbnb coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "25%"}
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
                                <span>Valid on select stays, experiences, and host listings.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum booking value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers select cities and listing categories.</span>
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
                <span>Booking Airbnb for Work</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Airbnb is used for business travel as well as holidays, and there is no separate Airbnb business app to download. Adding a work email to your Airbnb account lets you mark trips as business travel and keep receipts organised for expenses. For longer work assignments, a monthly stay with a host's length-of-stay discount is often cheaper than a hotel for the same period. Check with your company's travel policy before booking, since some employers only reimburse through specific channels.
              </p>


              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Airbnb</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

             <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
                <Info size={16} className="text-[#5B4FBE]" />
                <span>Thinking of Becoming an Airbnb Host?</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Guest coupon codes do not apply to hosting. If you are an Airbnb host, the savings levers work the other way: you set the discounts guests see. New hosts can use early-bird, last-minute and length-of-stay discounts to get first bookings and reviews, and choose a cancellation policy that fits how far ahead guests typically book in your area. Stricter policies protect income; more flexible ones tend to attract more bookings.
              </p>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Airbnb Advance Booking Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 25% OFF on Entire Homes, Villas & Long Stays
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
                Top Categories at Airbnb
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Entire Homes & Villas</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Unique Stays</span>
                  <span className="text-[#FF5722] font-bold">Flat ₹1,500 Off</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Long-Term Stays</span>
                  <span className="text-[#FF5722] font-bold">Up to 20% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Experiences</span>
                  <span className="text-[#FF5722] font-bold">Up to 15% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Weekend Getaways</span>
                  <span className="text-[#FF5722] font-bold">Up to 10% OFF</span>
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
    How to Spot a Fake Airbnb Offer
  </div>

  <div className="text-xs text-[#4A4A6A] space-y-3">
    <div className="font-normal">
      Fake discount offers are a common route to booking scams, particularly for popular destinations in peak season. Walk away if you see:
    </div>

    <ul className="space-y-2.5 list-disc pl-4 font-semibold text-[#2C2C40]">
      <li>
        <span className="font-normal text-[#4A4A6A]">
          A host or "agent" offering a discount if you pay by UPI, bank transfer or cash outside Airbnb.
        </span>
      </li>
      <li>
        <span className="font-normal text-[#4A4A6A]">
          A link to a lookalike Airbnb page for payment. The address should be airbnb.co.in or airbnb.com.
        </span>
      </li>
      <li>
        <span className="font-normal text-[#4A4A6A]">
          A code that asks you to share your login, OTP or card details to "activate" it.
        </span>
      </li>
      <li>
        <span className="font-normal text-[#4A4A6A]">
          A listing that moves the conversation to WhatsApp before booking.
        </span>
      </li>
    </ul>

    <div className="font-normal pt-1">
      Airbnb's refund protection only covers bookings paid through Airbnb. A deal that takes you off the platform removes that protection, whatever the discount.
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
          Airbnb Coupon Code: What Actually Works in India (September 2026)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An Airbnb coupon code is a promotional code issued by Airbnb that takes money off a stay, experience or service when you apply it at checkout. In India, working codes are rare: Airbnb closed its guest referral programme in 2020 and does not sell gift cards here, so most real savings now come from host discounts, bank card offers and booking choices you control.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Airbnb Offers and Discount List</caption>
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
          offerType: 'SAVE 44%',
          discount: '₹1,525 (44% OFF)',
          highlights: 'Private Room in Noida with 1 bedroom, bed & private washroom (was ₹2,025).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 43%',
          discount: '₹10,999 (43% OFF)',
          highlights: 'Rental Unit in Mussoorie for 5 guests with 2 bedrooms & 2 baths (was ₹19,423).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 36%',
          discount: '₹4,100 (36% OFF)',
          highlights: 'Entire Rental Unit in Noida for 3 guests with 1 bedroom & 1 bath (was ₹5,470).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 31%',
          discount: '₹3,650 for 2 Nights',
          highlights: 'Rental Unit in Greater Noida for 2 guests with 31% OFF (was ₹6,333).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 25%',
          discount: '₹1,900 (25% OFF)',
          highlights: 'Superhost Rental Unit in Mussoorie for 9 guests with 3 bedrooms & 3 baths (was ₹2,525).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 22%',
          discount: '₹2,398 (22% OFF)',
          highlights: 'Entire Rental Unit in Noida for 2 guests with 1 bedroom & 1 bath (was ₹3,074).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 15%',
          discount: '₹1,399 (15% OFF)',
          highlights: 'Rental Unit in Gurugram for couples or solo travelers (was ₹1,628).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 11%',
          discount: '₹1,040 (11% OFF)',
          highlights: 'Budget Room in Gurugram with private attached bathroom (was ₹1,152).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹625',
          discount: 'Flat ₹625 OFF',
          highlights: 'Private Room in Noida for ₹1,900 with attached washroom (was ₹2,525).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE ₹337',
          discount: 'Flat ₹337 OFF',
          highlights: 'Room in Greater Noida for ₹2,620 for 2 nights stay (was ₹2,957).',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹1,750',
          discount: 'From ₹1,750 / night',
          highlights: 'Rental Unit in Gurugram for 2 guests in a convenient location.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹2,428',
          discount: 'From ₹2,428 / night',
          highlights: 'Private Room in Guest House in Noida with private bathroom.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹6,860',
          discount: '₹6,860 for 2 Nights',
          highlights: 'Spacious Apartment in Noida for 4 guests with 2 bedrooms & 2 baths.',
          eligibility: 'All Users'
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

          <p className="italic text-sm text-gray-500">
            *Last checked: 30 September 2026.*
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Using Discount Code on Airbnb
    </p>

    <p>
      You can apply an Airbnb promo code in two ways: save it to your account first, or add it during checkout. Either way, it must be applied before you confirm the booking. Airbnb support cannot add a coupon to a reservation after it is booked.
    </p>

    <p>
      <strong className="text-[#2C2C40]">Save the code to your account (desktop):</strong>
    </p>
    <ol className="list-decimal pl-5 space-y-1">
      <li>Open the menu and go to <strong>Account settings &gt; Payments</strong>.</li>
      <li>Select <strong>Coupons</strong>, then <strong>Add coupon</strong>.</li>
      <li>Enter the code and select <strong>Redeem coupon</strong>.</li>
    </ol>

    <p>
      <strong className="text-[#2C2C40]">Apply it at checkout (website or Airbnb app):</strong>
    </p>
    <ol className="list-decimal pl-5 space-y-1">
      <li>Choose your stay, experience or service and go to the confirm-and-pay screen.</li>
      <li>Select <strong>Enter a coupon</strong>.</li>
      <li>Pick the coupon from your list and tap <strong>Apply</strong>.</li>
      <li>Check that the total has dropped before you pay.</li>
    </ol>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Rules That Catch People Out
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>One coupon per booking.</strong> You cannot stack two coupons on the same reservation.</li>
      <li><strong>Cancel, and the coupon is gone.</strong> If you cancel a booking that used a coupon, it cannot be used again or reissued. This matters when you pick a strict cancellation policy (see below).</li>
      <li><strong>Expiry is final.</strong> Airbnb will not extend an expired coupon or send a replacement.</li>
      <li><strong>No retroactive discounts.</strong> Book first and apply later does not work.</li>
    </ul>

    <p>
      Our practical advice: only use a coupon on a booking you are confident about. Spending it on a tentative trip with a flexible policy you might cancel wastes it.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Where Airbnb Savings Really Come From
    </p>

    <p>
      The biggest discounts on Airbnb are set by hosts, not by codes, and they are already built into the price you see if you search the right way. You don't need an Airbnb discount code to get them. This is the part most coupon pages skip.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-slate-200">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-200 p-2">Saving</th>
            <th className="border border-slate-200 p-2">Who sets it</th>
            <th className="border border-slate-200 p-2">How to trigger it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2">Length-of-stay discount</td>
            <td className="border border-slate-200 p-2">Host</td>
            <td className="border border-slate-200 p-2">Search with your full dates; weekly and monthly rates apply automatically</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Early-bird discount</td>
            <td className="border border-slate-200 p-2">Host</td>
            <td className="border border-slate-200 p-2">Book well ahead of check-in</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Last-minute discount</td>
            <td className="border border-slate-200 p-2">Host</td>
            <td className="border border-slate-200 p-2">Book close to check-in, when unsold nights get cheaper</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Custom promotion</td>
            <td className="border border-slate-200 p-2">Host</td>
            <td className="border border-slate-200 p-2">Shown on the listing for the promoted dates</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Non-refundable rate</td>
            <td className="border border-slate-200 p-2">Host offers it as an option</td>
            <td className="border border-slate-200 p-2">Pick it at checkout for a lower price, in exchange for no refund</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Bank card offer</td>
            <td className="border border-slate-200 p-2">Bank + Airbnb</td>
            <td className="border border-slate-200 p-2">Pay with the named card, usually first booking only</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Airbnb coupon</td>
            <td className="border border-slate-200 p-2">Airbnb</td>
            <td className="border border-slate-200 p-2">Apply at checkout, as above</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Three Checks Before You Book
    </p>

    <p>
      <strong>Try a slightly longer stay.</strong> Length-of-stay discounts kick in at the host's chosen thresholds. Extending a trip by a night sometimes crosses a threshold and costs surprisingly little extra. Change the dates on the listing and compare totals.
    </p>

    <p>
      <strong>Compare the total price, not the nightly rate.</strong> Cleaning fees, Airbnb's service fee and taxes can change the ranking of two listings completely. A cheaper nightly rate with a high cleaning fee often loses on a short stay.
    </p>

    <p>
      <strong>Ask the host.</strong> For longer or off-season stays, a polite message asking whether the host can offer a better rate costs nothing. Many hosts can send a custom offer through the platform. Keep the whole deal inside Airbnb; never agree to pay part of it outside the app.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Airbnb Bank &amp; Wallet Offers
    </p>

    <p>
      Airbnb bank offers in India appear in limited-time partnerships, typically giving first-time Airbnb bookers cashback or a flat discount when they pay with a partner bank's card. There is no permanent bank offer, so check the bank's official offer page before booking.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Recent and Past Airbnb Bank Offers in India
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-slate-200">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-200 p-2">Bank / card</th>
            <th className="border border-slate-200 p-2">Offer</th>
            <th className="border border-slate-200 p-2">Who qualified</th>
            <th className="border border-slate-200 p-2">Period</th>
            <th className="border border-slate-200 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2">HDFC Bank credit and debit cards</td>
            <td className="border border-slate-200 p-2">₹1,000 to ₹2,000 cashback, based on booking value</td>
            <td className="border border-slate-200 p-2">First-time Airbnb bookers</td>
            <td className="border border-slate-200 p-2">From 5 Feb 2025, limited period</td>
            <td className="border border-slate-200 p-2">Check HDFC SmartBuy for current status</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">ICICI Bank American Express credit card</td>
            <td className="border border-slate-200 p-2">₹2,500 off first booking (min. ₹10,000)</td>
            <td className="border border-slate-200 p-2">First-time bookers</td>
            <td className="border border-slate-200 p-2">Oct 2016 – Sep 2017</td>
            <td className="border border-slate-200 p-2">Expired</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">ICICI Bank credit and debit cards</td>
            <td className="border border-slate-200 p-2">15% off, capped at ₹5,000 (min. ₹10,000; stays outside India only)</td>
            <td className="border border-slate-200 p-2">First-time bookers</td>
            <td className="border border-slate-200 p-2">Nov – Dec 2017</td>
            <td className="border border-slate-200 p-2">Expired</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Older offers are listed because they show the pattern Airbnb bank deals follow: first booking only, a minimum spend that excludes cleaning and service fees, and no combining with other coupons. Expect any new offer to carry similar terms.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Payment Methods on Airbnb in India
    </p>

    <p>
      Airbnb accepts UPI, credit and debit cards and netbanking for guests paying in India. No wallet-specific cashback offer from Airbnb was active when we checked, so the practical wallet play is to use a card or UPI app whose own reward programme pays you back on travel spends.
    </p>

    <p>
      One firm rule: all payments must go through Airbnb. Offline or cash payments break Airbnb's terms, and you lose the platform's refund protection if something goes wrong.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Airbnb During Flipkart Big Billion Days and Amazon Great Indian Festival 2026
    </p>

    <p>
      Airbnb does not take part in Flipkart Big Billion Days or the Amazon Great Indian Festival. Bank offers running on Flipkart and Amazon apply only to purchases on those platforms, not to Airbnb bookings.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-slate-200">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-200 p-2"></th>
            <th className="border border-slate-200 p-2">Flipkart Big Billion Days 2026</th>
            <th className="border border-slate-200 p-2">Amazon Great Indian Festival 2026</th>
            <th className="border border-slate-200 p-2">Airbnb</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2">Starts</td>
            <td className="border border-slate-200 p-2">9 Oct 2026 (early access 8 Oct)</td>
            <td className="border border-slate-200 p-2">8 Oct 2026</td>
            <td className="border border-slate-200 p-2">No sale event</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Bank offers</td>
            <td className="border border-slate-200 p-2">Axis Bank, ICICI Bank cards</td>
            <td className="border border-slate-200 p-2">SBI cards</td>
            <td className="border border-slate-200 p-2">Only Airbnb's own bank partnerships</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Do they discount Airbnb stays?</td>
            <td className="border border-slate-200 p-2">No</td>
            <td className="border border-slate-200 p-2">No</td>
            <td className="border border-slate-200 p-2">Host discounts and Airbnb coupons only</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The festive window still matters for Airbnb, just in a different way. October and November are peak domestic travel months around Dussehra and Diwali, so popular homes fill early. If you are planning a festive trip, booking early lets you use a host's early-bird discount and pick from more listings. Shop the trip gear during the sales, book the stay early.
    </p>

    <p>
      For those sales themselves, see our <a href="https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers" className="text-[#5B4FBE] underline">Flipkart Big Billion Days offers</a>, <a href="https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] underline">Amazon Great Indian Festival offers</a> and our <a href="https://www.couponscrew.com/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] underline">comparison of the two sales</a>.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Airbnb's Cancellations &amp; Refund Policy
    </p>

    <p>
      Your refund on Airbnb depends on the cancellation policy the host chose for that listing, which is shown on the listing page before you book. Airbnb updated these policies on 1 October 2025, adding a new Limited option and retiring Strict for new selections on regular stays.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Cancellation Policies for Stays Under 28 Nights
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-slate-200">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-200 p-2">Policy</th>
            <th className="border border-slate-200 p-2">Full refund if you cancel...</th>
            <th className="border border-slate-200 p-2">If you cancel later</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2">Flexible</td>
            <td className="border border-slate-200 p-2">Until 24 hours before check-in</td>
            <td className="border border-slate-200 p-2">First night charged if you never check in; mid-stay, nights stayed plus one more</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Moderate</td>
            <td className="border border-slate-200 p-2">Until 5 days before check-in</td>
            <td className="border border-slate-200 p-2">Nights stayed, plus one night, plus 50% of remaining nights</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Limited</td>
            <td className="border border-slate-200 p-2">Until 14 days before check-in</td>
            <td className="border border-slate-200 p-2">50% of all nights if cancelled 7–14 days out; no refund within 7 days</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Firm</td>
            <td className="border border-slate-200 p-2">Until 30 days before check-in</td>
            <td className="border border-slate-200 p-2">50% of all nights if cancelled 7–30 days out; no refund within 7 days</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2">Non-refundable option</td>
            <td className="border border-slate-200 p-2">Never</td>
            <td className="border border-slate-200 p-2">Lower price in exchange for no refund</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      For stays of 28 nights or more, separate long-stay rules apply, and the listing shows which one.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      The 24-Hour Grace Period
    </p>

    <p>
      Every standard policy includes a 24-hour grace period for bookings made at least 7 days before check-in. Cancel within 24 hours of booking and you get your money back even under the Firm policy.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      When the Host Cancels, or the Stay Isn't as Described
    </p>

    <p>
      If a host cancels your reservation, you get a full refund automatically. For problems after arrival, such as being unable to get in, a dirty or unsafe home, or a listing that is materially different from its description, Airbnb's Rebooking and Refund Policy under AirCover for guests applies. You need to report the issue within 72 hours of discovering it, with photos or messages as evidence. Airbnb may help you rebook or give a full or partial refund depending on the problem.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How the Policy Affects Your Coupon
    </p>

    <p>
      This is where coupons and cancellations interact. Because a coupon cannot be reused after cancellation, pairing a coupon with a Flexible or Moderate booking you might change is risky. Save coupons for trips with fixed dates.
    </p>
  </div>
</div>

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Why Most Airbnb Codes Online Don't Work
          </p>

          <p>
            Before you spend time testing codes, it helps to know where legitimate Airbnb coupons come from. There are only a handful of sources, and most codes floating around the internet match none of them.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Source</th>
                  <th className="p-4 font-bold">Still active in India?</th>
                  <th className="p-4 font-bold">What to know</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Airbnb-issued coupons (emails, apologies after a support issue, campaigns)</td>
                  <td className="p-4">Yes, occasionally</td>
                  <td className="p-4">Tied to your account; appear under Payments &gt; Coupons</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Bank card partnership codes</td>
                  <td className="p-4">Periodically</td>
                  <td className="p-4">Usually first-time bookers only, with a minimum booking value</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Guest referral credit</td>
                  <td className="p-4">No</td>
                  <td className="p-4">Programme closed; no travel credit for referrals made after 1 October 2020</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Airbnb gift cards</td>
                  <td className="p-4">Not sold in India</td>
                  <td className="p-4">India is not on Airbnb's list of gift card purchase countries</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Random "Airbnb voucher code" lists on the web</td>
                  <td className="p-4">Rarely valid</td>
                  <td className="p-4">Often expired, region-locked or tied to someone else's account</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            So if a site shows a dozen "verified" Airbnb offer codes, treat that with suspicion. A genuine code either reached you directly from Airbnb or comes from a bank's official offer page with published terms.
          </p>

          {/* Section Header - Replaced H1 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            Homes, Experiences and Services: What You Can Book
          </p>

          <p>
            The Airbnb app now covers three things, which you can see across the top of the home page: Homes, Experiences and Services. Coupons and host discounts can apply across all three, depending on the offer's terms.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Homes</strong> are Airbnb rentals: apartments, villas, farmstays and rooms. This is where host discounts and cancellation policies matter most.
            </li>
            <li>
              <strong>Airbnb Experiences</strong> are activities led by local hosts, such as food walks, workshops and guided tours. Airbnb relaunched Experiences in May 2025 alongside Airbnb Originals, which are experiences hosted by well-known personalities.
            </li>
            <li>
              <strong>Services</strong>, launched in May 2025, let you book professionals such as chefs, photographers, massage therapists and personal trainers, delivered at your stay or, in some cities, at home. Availability varies by city, so check what is listed for your destination.
            </li>
          </ul>

          <p>
            If you have a coupon, read its terms: some apply to stays only, others to experiences or services too.
          </p>

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Airbnb Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there an Airbnb coupon code for first-time users in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not a public one. Airbnb's guest referral programme, which used to give new users travel credit, closed to new referrals after 1 October 2020. First-booking discounts now come mainly through limited-time bank offers, such as HDFC Bank's 2025 cashback for first-time bookers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter an Airbnb promo code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                On the confirm-and-pay screen, select Enter a coupon, choose the code and tap Apply. You can also save it first under Account settings &gt; Payments &gt; Coupons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use two Airbnb coupons on one booking?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Airbnb allows one coupon per reservation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What happens to my coupon if I cancel?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It is lost. Airbnb does not restore or reissue a coupon used on a cancelled booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I buy an Airbnb gift card in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. India is not among the countries where Airbnb sells gift cards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Airbnb have offers during the Big Billion Days or Great Indian Festival?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Airbnb does not participate in Flipkart or Amazon sale events, and their bank offers do not apply to Airbnb bookings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the most flexible Airbnb cancellation policy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flexible: you get a full refund if you cancel up to 24 hours before check-in. All standard policies also include a 24-hour grace period for bookings made at least 7 days ahead.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I get a cheaper Airbnb without a code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Search with your exact dates to see host discounts, compare total prices including fees, try a slightly longer stay to trigger a length-of-stay discount, book early for early-bird rates, or choose the non-refundable rate if your plans are fixed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is it safe to pay an Airbnb host directly for a discount?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Paying outside Airbnb breaks its terms and removes refund protection. Always pay through the Airbnb website or app.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A working Airbnb coupon code is a bonus, not the main way to save. The host's own discounts, the right cancellation policy and a careful look at the total price will usually save you more. For other travel bookings, compare our <a href="https://www.couponscrew.com/stores/booking-coupon-code" className="text-[#5B4FBE] font-bold underline">Booking.com coupon codes</a>, <a href="https://www.couponscrew.com/stores/expedia-coupon-code" className="text-[#5B4FBE] font-bold underline">Expedia coupon codes</a> and the full <a href="https://www.couponscrew.com/stores/categories/travel" className="text-[#5B4FBE] font-bold underline">travel offers category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Airbnb Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Airbnb Coupons", "Entire Home Offers", "Unique Stays Deals", "Airbnb Long Stay Sale", "Experiences Discount", "New User Airbnb Offer", "Airbnb Bank Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Airbnb checkout for instant discounts.
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
                <span>Continue to Airbnb</span>
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
