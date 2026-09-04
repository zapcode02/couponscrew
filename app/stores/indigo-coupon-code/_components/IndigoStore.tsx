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
import { Coupon, INDIGO_COUPONS } from './indigoCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.goindigo.in/';

export default function IndigoStore() {
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

  const coupons: Coupon[] = INDIGO_COUPONS;

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
      q: 'How do I use an IndiGo coupon code?',
      a: 'To use an IndiGo coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the IndiGo website or app. If it is a no-code deal, simply click "Visit IndiGo" to get the discount auto-applied.'
    },
    {
      q: 'Why is my IndiGo coupon code not working?',
      a: 'A coupon might not work due to route or fare-class exclusions, minimum booking value requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the offer details listed with each code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every code listed on this page is checked by our team before publishing, and we periodically re-verify listings so you don\'t waste time on codes that no longer work.'
    },
    {
      q: 'How often are IndiGo coupons updated?',
      a: 'We review and refresh this page regularly. Expired promotions are removed as soon as they are identified, so you generally only see currently applicable offers.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically only one promotional code can be applied per booking. If an offer allows stacking with a bank or payment partner discount, that will be mentioned in the offer details.'
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
            <span className="text-[#5B4FBE] font-semibold">IndiGo Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/indigo-logo_lagmg3.webp"
                      alt="IndiGo Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">IndiGo</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Flight Bookings & Air Travel
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                   Save on travel with verified IndiGo coupon codes, promo codes, and exclusive flight offers. Enjoy up to 50% OFF flights, ₹4,500 OFF bank deals, ₹2,500 weekend discounts, hotel savings, BluChips rewards, student offers, and Defence discounts on eligible bookings.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 10+ Offers
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
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit IndiGo</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] items-center justify-center text-center p-8"
            >
              <div className="text-white space-y-3 relative z-10">
                <span className="inline-block bg-[#FF5722] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">Fly More, Pay Less</h3>
                <p className="text-white/80 text-sm">Book domestic & international flights with verified IndiGo offers</p>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 25%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹2,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">IndiGo Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified IndiGo coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "20%"}
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
                    <span>Valid on select flight routes and fare classes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum booking value might apply as specified in offer description.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers select domestic and international routes.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#FF5722]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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
              <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Hostinger Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a Hostinger discount code at checkout takes under two minutes. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens Hostinger in a new tab.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your hosting plan.</span> Browse Hostinger's plans — shared hosting, WordPress hosting, cloud hosting, VPS, website builder, or domain registration. Choose your plan tier and billing cycle. Longer billing cycles (1-year or 2-year) give you the lowest monthly rate.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Add to cart.</span> Click "Add to Cart" or "Get Started" on your selected plan. You will be taken to the cart / checkout page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Create your account or sign in.</span> New users create a Hostinger account with an email address. Existing users sign in.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Locate the coupon / promo code field.</span> On the checkout page, look for "Have a coupon?" or "Promo Code" — it appears in the order summary section on the right side of the page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the Hostinger coupon code from your clipboard and click "Apply." The discount reflects in the total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, PayPal, or cryptocurrency (Hostinger accepts crypto on some plans). Select an eligible bank card if you have an active bank offer to stack.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Complete your purchase.</span> Confirm and pay. Your hosting account is activated immediately — access hPanel, install WordPress or your preferred CMS, and connect your domain.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a Hostinger promo code shows as invalid, check that the code applies to your selected plan type (some codes are shared-hosting-only or VPS-only) and that you are on a qualifying billing cycle (most codes require annual or 2-year billing). Refresh this CouponsCrew page for the next active code.
  </div>
</div>

            

             

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit IndiGo</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">IndiGo Seasonal Flight Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 25% OFF on Domestic & International Flights
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

          <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use an IndiGo Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying an IndiGo promo code at checkout on the goindigo.in website or the IndiGo app:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens IndiGo in a new tab.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Search for your flight.</span> Go to indigo site (goindigo.in) or the IndiGo app. Enter your origin, destination, travel date, and number of passengers. Click "Search."
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your flight.</span> Browse available flights by time, fare type (Super Saver, Flexi, IndiGo Stretch), and price. Click on your preferred option.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Add passengers and extras.</span> Enter passenger details, select seat preferences, and add any 6E Add-ons (meal, baggage, seat upgrade) that apply to your booking.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to payment.</span> On the fare summary page, look for "Apply Promo Code" or "Have a Coupon?" — it appears in the fare breakdown before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the IndiGo coupon code and click "Apply." The discount reflects in the total fare immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, or IndiGo wallet. If you have an eligible bank card or UPI cashback offer, select it now to stack the saving.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Confirm and book.</span> Complete payment. Your e-ticket is sent to your registered email and phone number.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a code shows as invalid, check that your base fare meets the minimum threshold, your route is eligible, and the travel dates fall within the booking window. Some IndiGo discount codes are route-specific or valid only for travel within a defined date range. Refresh this CouponsCrew page for the next active code.
  </div>
</div>

         

          </aside>

        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

      {/* Left: Main Content Block */}
      <div>
        <div className="prose max-w-none">
          <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
            IndiGo Coupon Code & Flight Deals — Verified for August 2026
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
          {INDIGO_COUPONS.map((coupon) => (
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

          <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative transition-all duration-300", !isReadMore && "max-h-[500px] overflow-hidden")}>
            
            <p>
              IndiGo is India's largest airline by market share — consistently carrying over 55% of domestic air passengers and operating one of the most punctual flight networks in the country. With a fleet of 350+ aircraft serving 100+ domestic and 30+ international destinations, it is the default choice for most Indian travellers looking for reliable, affordable air travel.
            </p>

            <p>
              At CouponsCrew, we track every active IndiGo coupon code, IndiGo discount code, and IndiGo promo code so you never miss a saving on your next flight booking. Every deal on this page is verified before going live — route eligibility, booking window conditions, user type, and expiry dates are all confirmed and clearly shown on each deal card.
            </p>

            <p>
              Whether you are booking through goindigo booking, comparing indigo ticket price across dates, looking for indigo flight offers on a specific route, or planning a trip around an upcoming sale — there is almost always a saving available. This page is updated daily. Bookmark it and check it before every IndiGo booking.
            </p>

  
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Exclusive Services at IndiGo
  </h3>
  <p className="mb-4">
    IndiGo's service offerings go beyond a standard seat on a plane. Here is what is available as part of the indigo airlines booking experience:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">6E Prime</p>
  <p className="mb-4">
    IndiGo's premium economy-style offering — available on select routes and aircraft. 6E Prime seats feature extra legroom (up to 38 inches seat pitch versus standard 28–30 inches), priority boarding, and a complimentary snack. The fare is higher than standard economy but significantly lower than full-service airline business class on the same route. Worth considering for flights above 2 hours where comfort matters.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">6E Add-ons</p>
  <p className="mb-2">
    IndiGo operates on an unbundled fare model — the base ticket covers the seat only, with optional extras priced separately. Key 6E Add-ons available at booking or after:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Meals</strong> — pre-ordered hot and cold meals from IndiGo's catering menu; typically cheaper when added at booking than purchased onboard</li>
    <li><strong>Extra baggage</strong> — pre-purchased baggage allowance beyond the standard 15kg checked baggage on domestic flights; significantly cheaper to add at booking than at the airport</li>
    <li><strong>Seat selection</strong> — window, aisle, or extra-legroom seats; standard middle seats are free to select but premium locations carry a fee</li>
    <li><strong>Travel insurance</strong> — IndiGo's in-built travel insurance option covering cancellation, medical emergencies, and baggage loss</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">6E Rewards (BluChip Programme)</p>
  <p className="mb-4">
    IndiGo's frequent flyer and loyalty programme — see the BluChip section below for full details.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">IndiGo Student Offers</p>
  <p className="mb-2">
    IndiGo runs a dedicated student discount programme for students with a valid student ID card or institution email address. Key benefits:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li>Up to 5% discount on base fares on eligible domestic routes</li>
    <li>Extra baggage allowance — additional checked baggage over the standard allowance, useful for students travelling between home and their college city at the start and end of semesters</li>
    <li>Flexible booking — some student fares include reduced cancellation penalties compared to standard Super Saver fares</li>
  </ul>
  <p className="mb-4">
    <strong>How to access IndiGo student offers:</strong><br />
    Student discounts are applied during indigo air ticket booking on goindigo.in or the IndiGo app — select "Student" as the passenger type during the booking flow and upload your valid student ID or college email verification. Discounts are verified at check-in; travelling without valid student ID forfeits the benefit.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">IndiGo Corporate Travel</p>
  <p className="mb-6">
    IndiGo's corporate travel programme offers negotiated fares, flexible booking and cancellation terms, and consolidated invoicing for businesses with regular travel needs. Relevant for frequent business travellers comparing indigo ticket price against other carriers on standard public fares — corporate rates are negotiated directly with IndiGo and are separate from public promotional codes.
  </p>

  {/* BluChip Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    BluChip — IndiGo's Frequent Flyer Programme
  </h3>
  <p className="mb-4">
    BluChip is IndiGo's loyalty and rewards programme — allowing frequent flyers to earn BluChips (reward points) on every booking and redeem them for flight discounts, lounge access, and other travel benefits.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">How BluChips Work</p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li>Earn 8 BluChips per ₹100 of base fare on every goindigo booking</li>
    <li>Additional BluChips earned on 6E Add-ons (meals, baggage, seat upgrades) — up to 12 per ₹100</li>
    <li>BluChips are valid for 24 months from the date of earning</li>
    <li>Redeem BluChips against future flight bookings directly on goindigo.in or the IndiGo app</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">BluChip Tier Benefits</p>
  <p className="mb-4">
    The programme has 3 tiers — Blu 3 (entry), Blu 2 (mid), and Blu 1 (top) — with increasing benefits at higher tiers:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Feature</th>
          <th className="p-4">Blu 3</th>
          <th className="p-4">Blu 2</th>
          <th className="p-4">Blu 1</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Base Fare BluChips</td>
          <td className="p-4">8 per ₹100</td>
          <td className="p-4">8 per ₹100</td>
          <td className="p-4">8 per ₹100</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Tier Bonus</td>
          <td className="p-4">—</td>
          <td className="p-4">Yes</td>
          <td className="p-4">Yes</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Max BluChips (with bonuses)</td>
          <td className="p-4">Up to 16 per ₹100</td>
          <td className="p-4">Up to 16 per ₹100</td>
          <td className="p-4">Up to 16 per ₹100</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">6E Add-on BluChips</td>
          <td className="p-4">Up to 12 per ₹100</td>
          <td className="p-4">Up to 12 per ₹100</td>
          <td className="p-4">Up to 12 per ₹100</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Complimentary Lounge Passes</td>
          <td className="p-4">—</td>
          <td className="p-4">20 passes (worth ₹20,000)</td>
          <td className="p-4">40 passes (worth ₹40,000)</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">BluChips Validity</td>
          <td className="p-4">24 months</td>
          <td className="p-4">24 months</td>
          <td className="p-4">24 months</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-6">
    <strong>Is BluChip worth enrolling in?</strong><br />
    For any traveller who flies IndiGo more than 3–4 times per year, enrolment is straightforward and free — BluChips accumulate passively on every booking. The lounge passes at Blu 2 and Blu 1 tiers (worth ₹20,000 and ₹40,000 respectively) represent the most significant tangible benefit for frequent flyers. Combining BluChip earnings with an active IndiGo promo code from CouponsCrew on each booking stacks two layers of saving on the same transaction.
  </p>

  {/* Comparison Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    IndiGo vs Air India vs Goibibo — How to Choose
  </h3>
  <p className="mb-4">
    When planning domestic or short-haul international travel from India, you typically have three main paths: booking directly with IndiGo, booking with Air India, or using a travel aggregator like Goibibo. Here is an honest comparison:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Feature</th>
          <th className="p-4">IndiGo (Direct)</th>
          <th className="p-4">Air India (Direct)</th>
          <th className="p-4">Goibibo (Aggregator)</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Fare Type</td>
          <td className="p-4">Budget / no-frills + 6E Prime</td>
          <td className="p-4">Full-service (meals, baggage included)</td>
          <td className="p-4">Aggregates IndiGo, Air India, Vistara &amp; more</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Base Fare</td>
          <td className="p-4">Generally lowest on domestic routes</td>
          <td className="p-4">Higher base fare; includes more inclusions</td>
          <td className="p-4">Varies — often competitive with airline direct</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Baggage Included</td>
          <td className="p-4">15kg checked (domestic); varies on international</td>
          <td className="p-4">25kg checked domestic; 30–35kg international</td>
          <td className="p-4">Depends on carrier booked through Goibibo</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Meals Included</td>
          <td className="p-4">Paid add-on only</td>
          <td className="p-4">Yes on most flights</td>
          <td className="p-4">Depends on carrier</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Loyalty Programme</td>
          <td className="p-4">BluChip (IndiGo points)</td>
          <td className="p-4">Flying Returns (Air India points)</td>
          <td className="p-4">Via Goibibo Go Cash rewards</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Cancellation</td>
          <td className="p-4">Depends on fare type; Super Saver is restrictive</td>
          <td className="p-4">More flexible on full-service fares</td>
          <td className="p-4">Platform-dependent; check fare rules</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Best For</td>
          <td className="p-4">Lowest domestic fares, high frequency</td>
          <td className="p-4">Full-service experience, wide int'l network</td>
          <td className="p-4">Comparing fares across multiple airlines</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Coupon Codes</td>
          <td className="p-4">IndiGo promo codes via CouponsCrew</td>
          <td className="p-4">Air India promo codes</td>
          <td className="p-4">Goibibo coupon codes</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    <strong>When to book IndiGo directly via goindigo.in:</strong><br />
    Booking directly on the IndiGo site or app ensures you have access to IndiGo-exclusive promotional fares, the ability to earn BluChips on every booking, and the cleanest path to managing changes, cancellations, and seat selection without a third-party intermediary.
  </p>
  <p className="mb-6">
    <strong>When to use Goibibo or another aggregator:</strong><br />
    If you are comparing fares across multiple airlines for a specific route and date — or if a Goibibo-specific coupon code offers better savings than what IndiGo's own promo codes deliver — an aggregator is worth checking. CouponsCrew tracks both IndiGo coupon codes and Goibibo codes on their respective store pages.
  </p>

  {/* Cancellation Policy Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    IndiGo Cancellation Policy
  </h3>
  <p className="mb-4">
    Understanding IndiGo's cancellation terms before applying an IndiGo discount code and completing a booking is important — particularly if your travel dates are uncertain:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Cancellation by Fare Type</p>
  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Fare Type</th>
          <th className="p-4">Cancellation Fee (Domestic)</th>
          <th className="p-4">Refund</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Super Saver</td>
          <td className="p-4">₹3,500 per passenger per sector</td>
          <td className="p-4">Remaining fare refunded to original payment</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Flexi</td>
          <td className="p-4">₹2,500 per passenger per sector</td>
          <td className="p-4">Remaining fare refunded</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">IndiGo Stretch (Business)</td>
          <td className="p-4">₹2,000 per passenger per sector</td>
          <td className="p-4">Remaining fare refunded</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-2"><strong>Key cancellation conditions:</strong></p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li>Cancellations must be made at least 2 hours before scheduled departure to be eligible for any refund; cancellations within 2 hours of departure are generally non-refundable</li>
    <li>Cancellations can be made via goindigo.in, the IndiGo app, the IndiGo call centre, or at the airport check-in counter</li>
    <li>Refunds to the original payment method are processed within 7–10 business days for card payments; UPI refunds are typically faster at 24–48 hours</li>
    <li>If IndiGo cancels a flight, passengers are entitled to a full refund or a free rebooking on the next available IndiGo flight</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Date Change Policy</p>
  <p className="mb-6">
    IndiGo allows date changes on most fare types — a date change fee applies (typically ₹2,500–₹3,500 depending on fare type and how close to departure the change is made) plus any fare difference between the original and new booking. Flexi fares carry lower change fees than Super Saver.
  </p>

  {/* Customer Support Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    IndiGo Customer Support
  </h3>
  <p className="mb-4">
    IndiGo provides multiple support channels for booking queries, cancellations, baggage issues, and flight-related concerns:
  </p>

  <div className="overflow-x-auto my-6">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Support Channel</th>
          <th className="p-4">Details</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Call Centre</td>
          <td className="p-4">0124-6173838 (charges apply; available 24/7)</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Website Chat</td>
          <td className="p-4">Available on goindigo.in under "Help"</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Airport Counter</td>
          <td className="p-4">IndiGo desks at all operated airports for in-person assistance</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Email</td>
          <td className="p-4">Via the contact form on goindigo.in</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Social Media</td>
          <td className="p-4">@IndiGo6E on Twitter/X for time-sensitive queries</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">IndiGo App</td>
          <td className="p-4">In-app support section for booking management, cancellations, and refund tracking</td>
        </tr>
      </tbody>
    </table>
  </div>

            {/* Section: IndiGo Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              IndiGo Saving Tips — Get More Off Every Booking
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Book 60+ Days in Advance for the Lowest Base Fares: </strong>
              IndiGo's dynamic pricing model means fares on popular routes increase as seats fill up. Booking 60–90 days in advance consistently gives the lowest base fare — an early bird fare combined with a verified IndiGo promo code from CouponsCrew delivers the most savings per booking.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Stack a Coupon Code with a Bank Card Offer: </strong>
              HDFC, ICICI, SBI, and Axis bank cards offer periodic instant discounts on IndiGo bookings at the payment step. Apply your IndiGo discount code in the promo field first, then select your bank card for the additional saving where it is stackable.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Add Baggage and Meals at Booking, Not at the Airport: </strong>
              IndiGo's 6E Add-on pricing is significantly lower at the time of booking than at airport check-in counters or the boarding gate. If you know you need extra baggage — common for students, families, and international travellers — add it during the booking flow after applying your coupon.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Travel Tuesday to Thursday for Lower Fares: </strong>
              IndiGo fares on popular domestic routes are highest on Friday evenings and Sunday evenings. Tuesday to Thursday departures consistently carry lower base fares on the same routes — making percentage-based IndiGo promo codes more effective when applied to a lower starting fare.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Use the IndiGo App for App-Exclusive Deals: </strong>
              IndiGo's app surfaces personalised promotional fares and app-exclusive discounts based on your booking history and logged-in account. Download the app and enable notifications — some of the best indigo flight offers are app-only and are not visible on the desktop site.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Enrol in BluChip Before Your Next Booking: </strong>
              BluChip enrolment is free and points start accumulating immediately. Even at the base Blu 3 tier, you earn 8 BluChips per ₹100 of base fare on every booking — those accumulate into meaningful flight discount redemptions over time for regular IndiGo flyers.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              IndiGo Customer Support
            </h3>
            <p>
              IndiGo provides multiple support channels for booking queries, cancellations, baggage issues, and flight-related concerns:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black text-sm">
                    <th className="p-4">Support Channel</th>
                    <th className="p-4">Details</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Call Centre</td>
                    <td className="p-4">0124-6173838 (charges apply; available 24/7)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Website Chat</td>
                    <td className="p-4">Available on goindigo.in under "Help"</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Airport Counter</td>
                    <td className="p-4">IndiGo desks at all operated airports for in-person assistance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email</td>
                    <td className="p-4">Via the contact form on goindigo.in</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Social Media</td>
                    <td className="p-4">@IndiGo6E on Twitter/X for time-sensitive queries</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">IndiGo App</td>
                    <td className="p-4">In-app support section for booking management, cancellations, and refund tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              <strong className="text-[#2C2C40]">For coupon code issues at checkout: </strong>
              If an IndiGo voucher code from CouponsCrew is not applying correctly at checkout, check the deal card conditions first — route eligibility, travel date range, and minimum fare are the most common reasons a valid code does not apply. If the issue persists, IndiGo's chat support on goindigo.in can confirm whether a specific code is active for your booking.
            </p>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Air India — </strong> Full-service carrier; better for long-haul international and business class travel
            </p>
            <p>
              <strong className="text-[#2C2C40]">SpiceJet — </strong> Budget domestic carrier; comparable fares to IndiGo on many routes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Akasa Air — </strong> Newer budget carrier with competitive domestic fares on key routes
            </p>
            <p>
              <strong className="text-[#2C2C40]">MakeMyTrip — </strong> Aggregator platform for comparing IndiGo and other airline fares simultaneously
            </p>
            <p>
              <strong className="text-[#2C2C40]">Goibibo — </strong> Alternative aggregator with its own coupon codes and Go Cash loyalty rewards
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for IndiGo Deals
            </h3>
            <p>
              Finding a working IndiGo coupon code should be a 30-second task. CouponsCrew verifies every deal on this page before it goes live — route eligibility, booking window conditions, and expiry dates are all confirmed and displayed clearly on every deal card.
            </p>
            <p>
              IndiGo's combination of the lowest domestic fares, highest flight frequency, and strong on-time performance makes it the default airline for most Indian travellers. A verified IndiGo promo code or IndiGo discount code from CouponsCrew — stacked with a bank card offer and timed around advance booking windows — consistently reduces the cost of air travel further than any single promotional channel alone.
            </p>
            <p>
              Bookmark this page and check back before every IndiGo booking — whether you are booking a quick domestic hop, a student semester-end trip home, or planning an international route via goindigo booking.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-10 flex items-center gap-2 text-[#5B4FBE] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
          </button>

          {/* FAQs Accordion */}
          <div className="mt-20 space-y-4">
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions — IndiGo Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working IndiGo coupon code today?",
                a: "Every IndiGo coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card. Expired codes are removed daily — if a code does not apply, check the deal card conditions and try the next active listing."
              },
              {
                q: "Q2. Can I use an IndiGo promo code on international flights?",
                a: "Yes — some IndiGo promo codes apply to international routes, though many are domestic-only. The deal card on each CouponsCrew listing clearly notes whether the code is valid for domestic, international, or both. International codes tend to be higher in value given the higher base fares."
              },
              {
                q: "Q3. What is the goindigo booking website?",
                a: "Goindigo booking refers to IndiGo's official flight booking platform at goindigo.in — the primary website for booking IndiGo flights, managing existing bookings, checking indigo ticket price, and accessing IndiGo's web check-in. The IndiGo app offers the same functionality with additional app-exclusive deals."
              },
              {
                q: "Q4. What is IndiGo iCrew?",
                a: "Indigo icrew is IndiGo's internal crew management and HR portal — used exclusively by IndiGo cabin crew, pilots, and staff for scheduling, communications, and payroll. It is not accessible to passengers and is not related to flight booking."
              },
              {
                q: "Q5. How does the BluChip programme work?",
                a: "BluChip is IndiGo's loyalty programme — earn 8 BluChips per ₹100 of base fare on every booking, up to 16 per ₹100 with tier bonuses. BluChips are valid for 24 months and redeemable against future IndiGo bookings. Higher tiers (Blu 2, Blu 1) unlock complimentary lounge passes worth up to ₹40,000."
              },
              {
                q: "Q6. Does IndiGo offer student discounts?",
                a: "Yes — IndiGo's student offer provides up to 5% off base fares on eligible domestic routes, plus extra baggage allowance for students with a valid student ID. Select \"Student\" as the passenger type during booking on goindigo.in or the app and verify your ID at check-in."
              },
              {
                q: "Q7. What is IndiGo's cancellation fee?",
                a: "Cancellation fees depend on fare type — ₹3,500 per passenger per sector on Super Saver fares, ₹2,500 on Flexi, and ₹2,000 on IndiGo Stretch. Cancellations within 2 hours of departure are generally non-refundable. Full refunds apply when IndiGo cancels a flight."
              },
              {
                q: "Q8. Can I stack an IndiGo coupon code with a bank card offer?",
                a: "In many cases, yes — an IndiGo discount code and a bank card instant discount can both apply to the same booking. Apply the code in the promo field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes for confirmation."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors cursor-pointer"
                >
                  <span className="text-black font-black text-base">{faq.q}</span>
                  <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE]")}>
                    <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", openFaq === i && "text-white rotate-180")} />
                  </div>
                </button>
                <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular IndiGo Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["IndiGo Coupons", "Flight Booking Offers", "Student Flight Discount", "IndiGo Bank Offers", "Domestic Flight Sale", "IndiGo BluChip", "International Flight Deals", "CouponsCrew Flight"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top IndiGo Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 15% OFF Domestic Flights", sub: "Verified coupon code on base fare bookings" },
              { heading: "Student Special Offer", sub: "Up to 5% off + extra baggage allowance" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, ICICI & Axis cards" },
              { heading: "App-Exclusive Deals", sub: "Personalised fare discounts on IndiGo app" },
              { heading: "BluChip Rewards Program", sub: "Earn 8 BluChips per ₹100 spent on fares" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">6E</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get IndiGo deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at IndiGo checkout for instant discounts.
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
                <span>Continue to IndiGo</span>
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
