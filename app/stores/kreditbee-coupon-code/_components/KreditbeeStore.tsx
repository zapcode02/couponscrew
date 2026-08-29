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
import { Coupon, KREDITBEE_COUPONS } from './kreditbeeCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.kreditbee.in/';

export default function KreditbeeStore() {
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

  const coupons: Coupon[] = KREDITBEE_COUPONS;

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
      q: 'How do I use a KreditBee coupon code?',
      a: 'To use a KreditBee coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and enter it in the KreditBee app where prompted during your loan application. If it is a no-code offer, simply click "Visit KreditBee" to check the current offer directly on the app or website.'
    },
    {
      q: 'Why is my KreditBee coupon code not working?',
      a: 'A coupon might not work if it has expired, if it is restricted to a specific user type (such as first-time applicants), or if the offer is no longer active. Always check the validity and terms listed alongside each code on this page.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes, every KreditBee coupon code listed on this page is checked periodically by our team so that you see current, working offers rather than outdated ones.'
    },
    {
      q: 'How often are KreditBee offers updated?',
      a: 'We review and refresh KreditBee offers regularly. Expired or inactive codes are removed so you only see offers that are currently available.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically, only one coupon code or offer can be applied per loan application. Please check the specific terms of each offer on the KreditBee app for confirmation.'
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
            <Link href="/" className="hover:text-[#1B6FE0] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#1B6FE0] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#1B6FE0] font-semibold">KreditBee Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/kreditbee-logo_q0cxfz.webp"
                      alt="KreditBee Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">KreditBee</h1>
                    <span className="bg-[#E8F1FD] text-[#1B6FE0] text-xs font-bold px-3 py-1 rounded-full border border-[#D3E4FA]">
                      Instant Personal Loans
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover the latest KreditBee coupon code and offers for instant personal loans. Apply online for loans up to ₹10 Lakhs, benefit from quick approvals, flexible EMI options, referral rewards, paperless documentation, and competitive interest rates for eligible borrowers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#1B6FE0] bg-[#E8F1FD] px-2.5 py-1 rounded-full border border-[#D3E4FA]">
                      <Tag size={14} /> Active Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Regularly
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
                  className="bg-[#0D2A4D] hover:bg-[#0A2038] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit KreditBee</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#1B6FE0] to-[#0D2A4D] items-center justify-center p-8 text-center"
            >
              <div className="text-white space-y-3 relative z-10">
                <h3 className="text-2xl font-black">Apply for a Personal Loan</h3>
                <p className="text-white/80 text-sm">Check current KreditBee offers before you apply</p>
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
            <div className="w-11 h-11 bg-[#E8F1FD] text-[#1B6FE0] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Active</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAF0FB] text-[#0D2A4D] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Digital</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Application</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Instant</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Personal Loans</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#E8F1FD] text-[#1B6FE0] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">KreditBee Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Check these verified KreditBee coupon codes & offers before applying.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#1B6FE0) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#1B6FE0] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-sm sm:text-lg lg:text-xl font-black leading-tight tracking-tight my-1.5 text-center px-1">
              {coupon.badge}
            </h2>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              OFFER
            </span>
          </div>

          {/* RIGHT WRAPPER: Center Content + Right Action */}
          <div className="flex-1 flex flex-col lg:flex-row items-stretch">

            {/* CENTER CONTENT SECTION */}
            <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                {/* Soft Tint Badge using Accent (#0D2A4D) */}
                <span className="bg-[#0D2A4D]/10 text-[#0D2A4D] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1B6FE0] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B6FE0]" />
                    <span>Offer terms are set by KreditBee and may change without notice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B6FE0]" />
                    <span>Eligibility may vary based on user type and application status.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B6FE0]" />
                    <span>Please confirm final offer details on the KreditBee app before applying.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#0D2A4D]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button - Vibrant CTA Accent (#0D2A4D) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#0D2A4D] hover:bg-[#0A2038] text-white"
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
                <Info size={16} className="text-[#1B6FE0]" />
                <span>KreditBee Coupon Code — What It Means on a Lending Platform</span>
              </h3>

              <p className="text-[#1A1A2E] text-sm mb-4">
               On most e-commerce or food delivery platforms, a coupon code reduces the price you pay at checkout. KreditBee works differently — it is a financial services product, not a shopping cart.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-4">
               The equivalent of a "discount" on KreditBee comes through its referral reward programme, where both the person sharing a code and the person receiving it earn encashable KreditBee Points. There are no traditional promo codes that reduce interest rates or waive processing fees in the way a standard kreditbee discount code might imply.
              </p>

              <p className="text-[#1A1A2E] text-sm">
               What you will find here is accurate information on how to earn and redeem KreditBee rewards — and how to use the referral system to its full potential. Pages claiming to offer kreditbee promo codes that reduce loan interest should be read carefully; any legitimate saving mechanism on KreditBee comes through its official in-app referral programme, not third-party discount codes.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#1B6FE0] hover:text-[#1B6FE0] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit KreditBee</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#1B6FE0] to-[#0D2A4D] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Apply for a KreditBee Personal Loan</h3>
                <span className="inline-block bg-[#0D2A4D] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Check Now
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Check current offers before completing your loan application.
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#1B6FE0] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-white border border-[#F0E0E0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A1A] text-base mb-4 tracking-tight border-b border-[#F0E0E0] pb-3 select-none">
    KreditBee Refund and Cancellation Policy
  </h3>

  <p className="text-xs font-semibold text-[#5A5A6E] mb-5">
    Once a KreditBee personal loan is disbursed to your bank account, the standard process for prepayment or foreclosure applies rather than a traditional refund.
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#3A3A3A]">
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Loan Cancellation Before Disbursal</span>
        <span>If your loan has been approved but the amount has not yet been credited to your account, you may be able to cancel the application by contacting KreditBee customer support immediately. The window for cancellation before disbursal is short and depends on the processing stage at which the request is made.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Prepayment After Disbursal</span>
        <span>KreditBee allows borrowers to prepay their outstanding loan balance before the end of the repayment tenure. Prepayment terms — including whether a prepayment fee applies and the minimum number of EMIs that must have been paid before foreclosure is permitted — are specified in the loan agreement at the time of disbursal.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Processing Fee Refund</span>
        <span>Processing fees, if charged at the time of loan disbursal, are generally non-refundable once the loan has been credited to your account. Confirm this with KreditBee&apos;s support team or read the loan agreement before signing to understand exactly which charges apply.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <span className="bg-[#FFF0F0] text-[#E4002B] rounded-full w-2 h-2 shrink-0 mt-1.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">EMI Bounced Payments</span>
        <span>If an EMI payment fails due to insufficient funds, KreditBee typically charges a bounce fee and the missed payment accumulates as overdue. Contacting customer support promptly in these cases is the recommended course of action to avoid additional penalties.</span>
      </div>
    </li>
  </ul>

  {/* Disclaimer / Note Box */}
  <div className="mt-5 bg-[#FFF8F8] border border-[#FCDCDC] rounded-2xl p-3.5 flex items-start gap-2.5">
    <div className="text-xs text-[#3A3A3A]">
      <span className="font-bold text-[#2C2C40]">Note: </span>
      <span>For the most current and binding information on cancellation and refund terms, refer to KreditBee&apos;s official website or the loan agreement document provided at the time of disbursal.</span>
    </div>
  </div>
</div>

          </aside>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
      
      {/* Main Content Area */}
      <div className="prose max-w-none">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight italic">
          KreditBee Coupon Code – Referral Rewards, Loan Offers & More
        </h2>

        {/* Dynamic Expandable Content Box */}
        {React.createElement(
          'div',
          {
            className: `text-slate-600 font-medium leading-relaxed space-y-6 relative transition-all duration-500 ${
              typeof isReadMore !== 'undefined' && !isReadMore ? 'max-h-[500px] overflow-hidden' : ''
            }`
          },
          [
            <p key="intro-1">
              KreditBee is one of the better-known personal loan apps in India, built specifically for salaried professionals and self-employed individuals who need quick access to credit. Unlike traditional bank loans that take days or weeks to process, a KreditBee personal loan is designed to move fast — from application to disbursal, often within the same session.
            </p>,
            <p key="intro-2">
              This page covers how to make the most of KreditBee's referral reward programme, what a KreditBee coupon code actually means in the context of a lending platform, how the loan product works, and how KreditBee compares to similar loan apps in the Indian market.
            </p>,

            <div className="space-y-8 text-slate-700">
  {/* What Does KreditBee Provide? Section */}
  <div>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      What Does KreditBee Provide?
    </h3>
    <p className="mb-3">
      KreditBee operates as an NBFC-backed direct lender, which means it underwrites and disburses loans through its own registered lending partners rather than routing applicants to third-party banks. This matters because it gives KreditBee tighter control over the approval and disbursal timeline.
    </p>
    <p className="mb-3">
      The platform primarily serves two borrower segments:
    </p>
    <ul className="space-y-3 pl-0 list-none mb-3">
      <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <strong className="text-[#2C2C40]">Salaried employees</strong> — working professionals with a regular monthly income who need a short-to-medium term personal loan for expenses ranging from medical bills and travel to home renovation and weddings.
      </li>
      <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <strong className="text-[#2C2C40]">Self-employed individuals</strong> — business owners, freelancers, and gig workers whose income may not follow a fixed payslip structure. KreditBee's eligibility criteria account for this, which is not always the case with traditional lenders.
      </li>
    </ul>
    <p className="mb-3">
      Beyond standard personal loans, KreditBee also offers business credit products, making it one of the few consumer loan apps in India that serves both individual and small business borrowing needs.
    </p>
    <p>
      The platform runs entirely through its app — available on both Android and iOS — and most of the application, document submission, and approval process is handled within the app itself. For users comfortable with digital-first workflows, this removes the friction that traditionally comes with credit applications.
    </p>
  </div>

  {/* KreditBee Refer and Earn Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      KreditBee Refer and Earn – How the Reward Programme Works
    </h3>
    <p className="mb-4">
      KreditBee's Refer and Earn programme is the primary way users earn rewards on the platform. It rewards both the person sharing the referral and the friend who signs up and takes their first loan.
    </p>

    <div className="space-y-6">
      {/* Table 1: What You Earn as the Referrer */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          What You Earn as the Referrer
        </h4>
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#5B4FBE] text-white">
                <th className="p-3 font-bold border-b border-slate-200">Milestone</th>
                <th className="p-3 font-bold border-b border-slate-200">Points Earned</th>
                <th className="p-3 font-bold border-b border-slate-200">Cash Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-[#2C2C40]">Friend's profile verified</td>
                <td className="p-3">500 points</td>
                <td className="p-3">₹50</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-[#2C2C40]">Friend takes their first loan</td>
                <td className="p-3">1,510 points</td>
                <td className="p-3">₹151</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-slate-50 font-bold">
                <td className="p-3 text-[#2C2C40]">Total per referral</td>
                <td className="p-3">2,010 points</td>
                <td className="p-3">₹201</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: What Your Friend Earns */}
      <div>
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          What Your Friend Earns (Referred User)
        </h4>
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#5B4FBE] text-white">
                <th className="p-3 font-bold border-b border-slate-200">Milestone</th>
                <th className="p-3 font-bold border-b border-slate-200">Points Earned</th>
                <th className="p-3 font-bold border-b border-slate-200">Cash Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-[#2C2C40]">Profile successfully verified</td>
                <td className="p-3">250 points</td>
                <td className="p-3">₹25</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-[#2C2C40]">First loan taken</td>
                <td className="p-3">500 points</td>
                <td className="p-3">₹50</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-slate-50 font-bold">
                <td className="p-3 text-[#2C2C40]">Total</td>
                <td className="p-3">750 points</td>
                <td className="p-3">₹75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <p className="my-4">
      There is no cap on the number of referrals you can make. The rewards scale directly with how many friends successfully complete both steps.
    </p>

    {/* Table 3: Referral Earnings at Scale */}
    <div className="mb-4">
      <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
        Referral Earnings at Scale
      </h4>
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-[#5B4FBE] text-white">
              <th className="p-3 font-bold border-b border-slate-200">Successful Referrals</th>
              <th className="p-3 font-bold border-b border-slate-200">Your Total Reward</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            <tr className="hover:bg-slate-50">
              <td className="p-3 font-semibold text-[#2C2C40]">Refer 1 friend</td>
              <td className="p-3">2,010 points (₹201)</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-3 font-semibold text-[#2C2C40]">Refer 5 friends</td>
              <td className="p-3">10,050 points (₹1,005)</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-3 font-semibold text-[#2C2C40]">Refer 10 friends</td>
              <td className="p-3">20,100 points (₹2,010)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p>
      Points are encashable — they convert to real rupee value and can be withdrawn or applied within the platform. This is what makes the referral programme the closest equivalent to a kreditbee coupon code for existing users.
    </p>
  </div>

  {/* KreditBee Loan Eligibility Criteria Section */}
  <div className="pt-2">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      KreditBee Loan Eligibility Criteria
    </h3>
    <p className="mb-4">
      KreditBee assesses applications based on a combination of income, employment type, credit history, and the information provided during the KYC process in the app.
    </p>

    <div className="space-y-4 mb-4">
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          For Salaried Applicants:
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Indian resident, typically between the ages of 21 and 45</li>
          <li>Regular monthly income with a valid salary slip or bank statement</li>
          <li>Active bank account with a net banking facility</li>
          <li>Valid PAN card and Aadhaar for KYC verification</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          For Self-Employed Applicants:
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Indian resident with a verifiable source of income</li>
          <li>Business vintage of a minimum period (as assessed by KreditBee)</li>
          <li>PAN, Aadhaar, and bank statements for the past few months</li>
          <li>Some cases may require additional documentation depending on loan amount</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="text-lg font-bold text-[#2C2C40] mb-2">
          General factors that influence approval:
        </h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Credit score</strong> — a higher score improves approval chances and may result in a lower interest rate</li>
          <li><strong>Existing debt obligations</strong> — high existing EMIs can reduce the loan amount offered</li>
          <li><strong>Employment stability</strong> — longer continuous employment tends to be viewed positively</li>
          <li><strong>Accuracy of the application</strong> — discrepancies between submitted documents and application data delay or reject the process</li>
        </ul>
      </div>
    </div>

    <p>
      KreditBee loan details including the exact eligibility thresholds, income minimums, and credit score requirements are confirmed during the in-app application process and can vary based on current lending policies.
    </p>
  </div>
</div>,

            /* What Does KreditBee Provide */
            <div key="what-provides" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                What Does KreditBee Provide?
              </h3>
              <p>
                KreditBee operates as an NBFC-backed direct lender, which means it underwrites and disburses loans through its own registered lending partners rather than routing applicants to third-party banks. This matters because it gives KreditBee tighter control over the approval and disbursal timeline.
              </p>
              <p className="font-bold text-slate-900">The platform primarily serves two borrower segments:</p>
              <p>
                <strong className="text-slate-900">Salaried employees — </strong>
                working professionals with a regular monthly income who need a short-to-medium term personal loan for expenses ranging from medical bills and travel to home renovation and weddings.
              </p>
              <p>
                <strong className="text-slate-900">Self-employed individuals — </strong>
                business owners, freelancers, and gig workers whose income may not follow a fixed payslip structure. KreditBee's eligibility criteria account for this, which is not always the case with traditional lenders.
              </p>
              <p>
                Beyond standard personal loans, KreditBee also offers business credit products, making it one of the few consumer loan apps in India that serves both individual and small business borrowing needs.
              </p>
              <p>
                The platform runs entirely through its app — available on both Android and iOS — and most of the application, document submission, and approval process is handled within the app itself. For users comfortable with digital-first workflows, this removes the friction that traditionally comes with credit applications.
              </p>
            </div>,

            /* Loan Details Key Info */
            <div key="loan-details" className="space-y-6 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-2">
                KreditBee Loan Details – Key Product Information
              </h3>
              <p className="text-slate-500 font-medium text-sm -mt-2 mb-4">
                KreditBee personal loan products are structured to cover a range of borrowing needs, from smaller short-term credit to larger amounts for significant expenses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Loan Amount Range", val: "₹6,000 to ₹10 Lakhs" },
                  { label: "Interest Rate", val: "12% to 28.5% p.a. (varies by profile)" },
                  { label: "Repayment Tenure", val: "6 to 60 months" },
                  { label: "Disbursal Time", val: "Within 10 minutes in eligible cases" },
                  { label: "Business Loans", val: "Available" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="text-slate-900 font-black text-base mt-1">{item.val}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 font-medium text-sm pt-2">
                The interest rate offered to any individual applicant depends on their credit profile, income level, and the specific loan product they apply for. Applicants with stronger credit histories and stable income tend to receive offers at the lower end of the rate range.
              </p>
            </div>,

            /* Comparison Table */
            <div key="comparison-table" className="my-10 space-y-6">
              <h3 className="text-xl font-black text-[#5B4FBE]">
                KreditBee vs Fibe (Formerly EarlySalary) vs PolicyBazaar
              </h3>
              <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-black uppercase text-slate-400 tracking-wider">Feature</th>
                      <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">KreditBee</th>
                      <th className="p-4 text-xs font-black uppercase text-slate-700 tracking-wider">Fibe</th>
                      <th className="p-4 text-xs font-black uppercase text-slate-700 tracking-wider">PolicyBazaar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {[
                      { f: "Type", kb: "Direct lender (NBFC)", fibe: "Direct lender (NBFC)", pb: "Aggregator platform" },
                      { f: "Loan Amount", kb: "₹6,000 to ₹10 Lakhs", fibe: "₹8,000 to ₹5 Lakhs", pb: "Up to ₹40 Lakhs (via partners)" },
                      { f: "Eligibility", kb: "Salaried & Self-employed", fibe: "Primarily salaried", pb: "Varies by lender" },
                      { f: "Disbursal Time", kb: "Within 10 minutes", fibe: "Within 10 minutes", pb: "Depends on lender chosen" },
                      { f: "Interest Rate", kb: "12% to 28.5% p.a.", fibe: "Starting at 12% p.a.", pb: "Starting at 8.75% p.a." },
                      { f: "Repayment Tenure", kb: "6 to 60 months", fibe: "90 days to 36 months", pb: "Varies by lender" },
                      { f: "Business Loans", kb: "Yes", fibe: "No", pb: "Yes (via partners)" },
                      { f: "App Available", kb: "Yes (Android & iOS)", fibe: "Yes (Android & iOS)", pb: "Yes (Android & iOS)" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-4 font-black text-slate-900">{row.f}</td>
                        <td className="p-4 font-bold text-[#5B4FBE]">{row.kb}</td>
                        <td className="p-4 font-medium text-slate-600">{row.fibe}</td>
                        <td className="p-4 font-medium text-slate-600">{row.pb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-3 text-slate-600 font-medium text-sm">
                <p>
                  <strong className="text-slate-900">Key differences worth noting:</strong>
                </p>
                <p>
                  KreditBee and Fibe serve similar borrower profiles and offer comparable disbursal speeds, but KreditBee covers self-employed applicants more broadly and has a wider loan amount ceiling. Fibe tends to skew toward salaried professionals in urban centres.
                </p>
                <p>
                  PolicyBazaar is fundamentally different — it is a comparison and aggregator platform, not a lender itself. If your priority is comparing rates across multiple lenders before committing, PolicyBazaar is the right starting point. If you want a direct lending decision quickly, KreditBee or Fibe are the more direct routes.
                </p>
              </div>
            </div>,

            /* Other Loan Apps */
            <div key="other-apps" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Loan Apps Like KreditBee – Other Options to Consider
              </h3>
              <p className="text-slate-600 mb-4">
                If you are researching loan apps like kreditbee before deciding where to apply, here is how the broader market looks:
              </p>
              {[
                { name: "MoneyTap", desc: "a revolving credit line rather than a fixed personal loan; useful if you want flexibility in how much you draw down." },
                { name: "PaySense", desc: "personal loans for salaried and self-employed, with a focus on first-time borrowers who may not have an extensive credit history." },
                { name: "CASHe", desc: "salary advance and personal loans targeted at young salaried professionals; uses alternative credit scoring." },
                { name: "Navi", desc: "offers home loans and personal loans through an app-first model; competitive on interest rates for strong credit profiles." },
                { name: "mPokket", desc: "focused on students and young earners with smaller loan amounts and shorter tenures." }
              ].map((item, idx) => (
                <p key={idx}>
                  <strong className="text-slate-900">{item.name} — </strong>
                  {item.desc}
                </p>
              ))}
              <p className="pt-2">
                Each of these loan apps has a different strength. KreditBee's combination of a wide loan amount range, self-employed eligibility, and fast disbursal puts it toward the top of the list for applicants who need a reliable, regulated lending option without the wait time of a traditional bank loan.
              </p>
            </div>,

            /* Savings Calendar Table */
            <div key="savings-calendar" className="my-10 space-y-6">
              <h3 className="text-xl font-black text-[#5B4FBE]">
                KreditBee Savings Calendar – When to Use the Referral Programme
              </h3>
              <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 text-xs font-black uppercase text-slate-400 tracking-wider">Period</th>
                      <th className="p-4 text-xs font-black uppercase text-[#5B4FBE] tracking-wider">What to Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {[
                      { period: "Festive Season (Oct–Nov)", expect: "Bonus referral point campaigns often run around Diwali" },
                      { period: "New Year (Jan)", expect: "Fresh promotional periods for new user sign-ups" },
                      { period: "Financial Year Start (Apr)", expect: "New earning cycles; good time to introduce new users" },
                      { period: "Salary Credit Periods", expect: "End and start of month see higher loan application activity" },
                      { period: "Platform Anniversaries", expect: "KreditBee occasionally runs bonus point events" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-4 font-black text-slate-900">{row.period}</td>
                        <td className="p-4 font-medium text-slate-600">{row.expect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 font-medium text-sm">
                Referral rewards are not seasonal in the same way discount codes are, but KreditBee has historically run bonus point campaigns during festive periods. Checking the in-app promotions section during these periods is worthwhile.
              </p>
            </div>,

            /* How to Maximise Rewards */
            <div key="maximise-rewards" className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                How to Maximise Rewards on KreditBee
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Share your referral code with people who genuinely need a loan",
                    desc: "The referral programme only pays out fully when your friend takes their first loan. Sharing your code broadly without context leads to sign-ups that never convert. Sharing it with people who are actively looking for a personal loan — and explaining how the platform works — results in completed referrals."
                  },
                  {
                    title: "Complete your own profile first",
                    desc: "A complete, verified profile on your own account is typically required before the referral programme is fully active. Make sure your identity and bank account details are submitted and verified before you start sharing your referral code."
                  },
                  {
                    title: "Track referrals inside the app",
                    desc: "KreditBee's in-app dashboard shows the status of each referral — at what stage your friend's profile is, whether they have completed verification, and when points are credited. Monitoring this helps you follow up if a friend has partially completed the process and stalled."
                  },
                  {
                    title: "Understand what the points are worth before you accumulate them",
                    desc: "KreditBee Points have a defined rupee conversion rate. Before you put significant effort into the referral programme, confirm the current redemption terms inside the app — the value per point and how and where points can be redeemed or withdrawn."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-xl flex items-center justify-center shadow-md shadow-purple-200 italic text-sm md:text-base">
                      {i + 1}
                    </div>
                    <div className="mt-0.5">
                      <p className="text-slate-900 font-black text-base">{item.title}</p>
                      <p className="text-slate-600 font-medium text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>,

            /* Earn Rewards & Borrow Smarter */
            <div key="borrow-smarter" className="space-y-4 text-slate-700 my-10">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Earn Rewards and Borrow Smarter with KreditBee
              </h3>
              <p>
                KreditBee sits at an intersection that not many Indian lending apps cover well — fast disbursal, a wide loan amount range, and eligibility that extends to self-employed borrowers, not just salaried professionals. The referral programme adds a layer of genuine reward for users who introduce the platform to people who actually need it.
              </p>
              <p>
                For anyone researching loan apps like kreditbee, it is worth applying through the app directly to see what loan amount and rate you qualify for — the in-app process is designed to give you an answer quickly without requiring a branch visit or lengthy paperwork.
              </p>
              <p>
                CouponsCrew keeps this page updated with the latest KreditBee referral programme terms and any promotional offers as they become available.
              </p>
            </div>,

            /* Bottom Gradient Fade overlay when collapsed */
            (typeof isReadMore === 'undefined' || !isReadMore) && (
              <div key="fade-overlay" className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )
          ]
        )}

        {/* Read More Toggle Button */}
        <button
          type="button"
          onClick={() => typeof setIsReadMore === 'function' && setIsReadMore(!isReadMore)}
          className="mt-6 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline focus:outline-none focus:ring-2 focus:ring-[#5B4FBE] rounded-md px-1 py-0.5"
        >
          {typeof isReadMore !== 'undefined' && isReadMore ? "Read Less" : "Read More"}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${typeof isReadMore !== 'undefined' && isReadMore ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Frequently Asked Questions Accordion */}
        <div className="mt-16 space-y-4">
          <h3 className="text-2xl font-black text-slate-900 mb-8">
            Frequently Asked Questions About KreditBee
          </h3>
          {[
            {
              q: "Is KreditBee a legitimate and regulated lender?",
              a: "Yes. KreditBee operates through NBFC (Non-Banking Financial Company) partners registered with the Reserve Bank of India. It is not a bank itself but lends through regulated financial entities. The loan agreement you sign at the time of disbursal will specify the name of the NBFC issuing the credit."
            },
            {
              q: "What does a KreditBee coupon code actually do?",
              a: "KreditBee is a lending platform, not an e-commerce store, so traditional coupon codes that reduce checkout prices do not apply. The platform's equivalent reward mechanism is its referral programme, through which both referrers and new users earn encashable KreditBee Points. There are no publicly available kreditbee promo codes that reduce interest rates or waive fees — any claims to that effect from third-party sites should be treated with caution."
            },
            {
              q: "How quickly is a KreditBee personal loan disbursed?",
              a: "In eligible cases where the application is approved and KYC documents are verified, disbursal can happen within minutes. The timeline depends on the accuracy and completeness of the information you provide, the verification process, and your bank's processing speed for inward credits."
            },
            {
              q: "What credit score do I need for a KreditBee loan?",
              a: "KreditBee does not publish a fixed minimum credit score requirement. Applicants with higher scores are more likely to receive approval at lower interest rates. Applicants with limited credit history — particularly first-time borrowers — may still qualify depending on their income level and the loan amount requested."
            },
            {
              q: "Can self-employed individuals apply for a KreditBee loan?",
              a: "Yes, unlike some loan apps that are restricted to salaried applicants, KreditBee explicitly supports self-employed borrowers. The documentation and eligibility criteria differ slightly — bank statements and business income proof take the place of salary slips — but the application process follows the same in-app flow."
            },
            {
              q: "What happens if I miss an EMI payment?",
              a: "A missed EMI typically results in a bounce fee and is recorded as an overdue payment. Continued non-payment affects your credit score and may result in legal recovery action as specified in the loan agreement. If you anticipate difficulty making a payment, contacting KreditBee's support team before the due date gives you the best chance of discussing a resolution."
            },
            {
              q: "How do I redeem KreditBee referral points?",
              a: "Referral points accumulate in your in-app wallet and can be converted to cash value or applied within the platform, depending on the current redemption options available. The exact redemption process is managed through the KreditBee app under the rewards or wallet section."
            },
            {
              q: "Is there a limit on how many people I can refer?",
              a: "No. The KreditBee Refer and Earn programme has no cap on the number of successful referrals. Each completed referral — where your friend verifies their profile and takes their first loan — earns you the full reward."
            },
            {
              q: "What is the maximum kreditbee personal loan amount I can apply for?",
              a: "KreditBee currently offers loans up to ₹10 Lakhs. The actual amount offered to any individual depends on their income, credit profile, existing liabilities, and the loan product they qualify for during the assessment process."
            },
            {
              q: "How does KreditBee differ from loan aggregators like PolicyBazaar?",
              a: "KreditBee is a direct lender — it makes the credit decision and disburses the loan through its own NBFC partners. PolicyBazaar is a comparison platform that shows offers from multiple third-party lenders and redirects you to apply with the one you choose. KreditBee is faster for a direct decision; PolicyBazaar is better if you want to compare rates across lenders before committing."
            }
          ].map((faq, i) => {
            const isOpen = typeof openFaq !== 'undefined' && openFaq === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => typeof setOpenFaq === 'function' && setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-slate-900 font-black text-sm md:text-base pr-4">
                    {`Q${i + 1}. ${faq.q}`}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all shrink-0 ${
                      isOpen ? "bg-[#5B4FBE] text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 px-6 bg-white ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-slate-600 font-medium text-sm leading-relaxed pt-3 border-t border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-8">
        {/* Popular Tags */}
        <div className="bg-[#f0eeff] rounded-3xl p-6 md:p-8 border border-[#5B4FBE]/10">
          <h3 className="text-slate-900 font-black text-xs mb-6 uppercase tracking-widest">
            Popular KreditBee Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "KreditBee Referral Code",
              "Instant Personal Loan",
              "Self-Employed Loan App",
              "KreditBee Interest Rates",
              "Quick Disbursal Loan",
              "KreditBee vs Fibe",
              "NBFC Loan Apps",
              "KreditBee Points Value"
            ].map((tag) => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-white px-3.5 py-2 rounded-full text-[11px] font-black text-[#5B4FBE] uppercase tracking-wider shadow-sm hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-95 border border-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Top Deals List */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
          <h3 className="text-slate-900 font-black text-xs mb-6 uppercase tracking-widest">
            Today's Top KreditBee Offers
          </h3>
          <div className="space-y-5">
            {[
              { heading: "Refer & Earn Bonus", sub: "Earn encashable points for every referral" },
              { heading: "Instant Disbursal", sub: "Fast credit transfer within 10 minutes" },
              { heading: "Flexi Personal Loan", sub: "Borrow up to ₹10 Lakhs with flexible EMI" },
              { heading: "Self-Employed Credit", sub: "Special loan eligibility for freelancers & business" },
              { heading: "Zero Branch Visit", sub: "100% digital paperless application process" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#5B4FBE] font-black text-lg italic shrink-0">
                  K
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-black text-[11px] uppercase tracking-wider truncate group-hover:text-[#5B4FBE] transition-colors">
                    {deal.heading}
                  </p>
                  <p className="text-slate-500 font-medium text-[12px] truncate leading-tight mt-0.5">
                    {deal.sub}
                  </p>
                </div>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  aria-label={`Get KreditBee offer: ${deal.heading}`}
                  className="bg-[#f0eeff] text-[#5B4FBE] px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider hover:bg-[#5B4FBE] hover:text-white transition-all shrink-0"
                >
                  Get Offer
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>

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
                Use the code <span className="font-extrabold text-[#1B6FE0]">{activeModalCoupon.code}</span> on the KreditBee app where applicable.
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
              <span>Make sure to enter the code before finishing your application.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#0D2A4D] hover:bg-[#0A2038] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to KreditBee</span>
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
