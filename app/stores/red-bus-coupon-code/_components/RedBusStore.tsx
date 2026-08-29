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
import { Coupon, REDBUS_COUPONS } from './redBusCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.redbus.in';

export default function RedBusStore() {
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

  const coupons: Coupon[] = REDBUS_COUPONS;

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
      q: 'How do I use a redBus coupon code?',
      a: 'To use a redBus coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the redBus website or app. If it is a deal, simply click "Visit redBus" to get the discount auto-applied.'
    },
    {
      q: 'Why is my redBus coupon code not working?',
      a: 'A coupon might not work due to route restrictions, minimum booking value requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the terms listed with each code before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every redBus coupon code listed here is checked before publishing, and we periodically re-verify codes to remove any that have expired or stopped working.'
    },
    {
      q: 'How often are redBus coupons updated?',
      a: 'We update this redBus store page regularly with the latest coupon codes, deals, and offers as they become available.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Generally, only one coupon code can be applied per booking. Compare the available offers here and pick the one that gives you the best discount for your route and booking value.'
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
            <Link href="/" className="hover:text-[#D84E55] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#D84E55] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#D84E55] font-semibold">redBus Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/red-bus-logo_sddedw.webp"
                      alt="redBus Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">redBus</h1>
                    <span className="bg-[#FCEBEC] text-[#D84E55] text-xs font-bold px-3 py-1 rounded-full border border-[#F6D4D6]">
                      Bus Tickets, Travel & Online Booking
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Save more with verified redBus coupon codes, promo codes, and exclusive bus booking offers. Enjoy up to ₹500 OFF, 12% OFF bus tickets, 12% cashback, new user discounts, and great savings on bus travel across India with the latest verified deals.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#D84E55] bg-[#FCEBEC] px-2.5 py-1 rounded-full border border-[#F6D4D6]">
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
                  className="bg-[#D84E55] hover:bg-[#C13F46] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit redBus</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#D84E55] to-[#1A1A2E] items-center justify-center text-center p-8"
            >
              <div className="text-white space-y-3">
                <span className="inline-block bg-white/15 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Travel Season Offer
                </span>
                <h3 className="text-2xl font-black leading-tight">Save on Every Bus Booking</h3>
                <p className="text-white/80 text-sm">Verified redBus coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#FCEBEC] text-[#D84E55] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#1A1A2E]/5 text-[#1A1A2E] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FCEBEC] text-[#D84E55] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">redBus Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified redBus coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#D84E55) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#D84E55] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "25%"}
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
                {/* Soft Tint Badge using Accent (#1A1A2E) */}
                <span className="bg-[#1A1A2E]/10 text-[#1A1A2E] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#D84E55] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#D84E55]" />
                    <span>Valid on select bus routes and operators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#D84E55]" />
                    <span>Minimum booking value might apply as specified in offer terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#D84E55]" />
                    <span>Covers select bus types and travel dates.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Action Button - Vibrant CTA Accent (#D84E55) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#D84E55] hover:bg-[#C13F46] text-white"
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
           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    What is redBus and Why Is It the Go-To for Online Bus Booking?
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-3 leading-relaxed">
    redBus was founded in 2006 and pioneered redbus online bus booking in India at a time when most passengers had no reliable way to check seat availability or book intercity buses without visiting a travel agent. Today it lists over 6,000 bus operators across India, covering government-run services like KSRTC, MSRTC, TSRTC, and UPSRTC alongside private operators including VRL Travels, Orange Travels, SRS Travels, and hundreds of regional carriers.
  </p>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4 leading-relaxed">
    redbus ticket booking is available across multiple platforms — the redBus app (Android and iOS), the website (redbus.in), and select third-party travel portals. The app consistently offers the best prices, with app-exclusive red bus coupon codes and personalised promo codes not surfaced on the desktop website.
  </p>

  <p className="text-xs font-bold text-[#2C2C40] mb-3">
    Key features that have made red bus travel booking the default choice for most Indian travellers:
  </p>

  <ul className="space-y-2.5 text-xs font-semibold text-[#4A4A6A] list-disc pl-5">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Live seat map</span> — choose your exact seat before booking, including window, aisle, lower or upper berth on sleeper buses.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Real-time tracking</span> — track your bus live during the journey via the app.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">M-ticket</span> — digital ticket on your phone, no printout needed.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">24/7 cancellation</span> — most tickets can be cancelled with a partial refund up to a few hours before departure.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Primo Buses</span> — redBus's curated selection of top-rated private operators with enhanced comfort standards.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">redBus Prime</span> — membership tier offering exclusive discounts and priority support.
    </li>
  </ul>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#D84E55] to-[#1A1A2E] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">redBus Travel Season Offer</h3>
                <span className="inline-block bg-[#1A1A2E] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 25% OFF on AC, Sleeper & Volvo Bus Bookings
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#D84E55] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Book Now
              </a>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a redBus Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a redbus booking promo code takes under a minute. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens redBus in a new tab or the app.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Search for your route.</span> Enter your origin city, destination city, and travel date on the redBus homepage or app. Hit "Search Buses."
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your bus.</span> Browse available buses by departure time, operator, bus type (AC/non-AC, sleeper/seater), and fare. Click on your preferred option to view the seat map.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Choose your seat and proceed.</span> Select your preferred seat on the interactive seat map and click "Proceed to Book."
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Enter passenger details.</span> Fill in passenger name, age, gender, and contact details as required.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Locate the coupon / promo code field.</span> On the payment summary page, look for "Apply Coupon" or "Have a Promo Code?" — it appears in the fare summary section before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the red bus coupon code from your clipboard and click "Apply." The discount reflects in the fare breakdown immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Choose your preferred payment option — credit/debit card, UPI, net banking, or redBus wallet. If you have an eligible bank card or UPI cashback offer, select it now to stack savings where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Confirm and book.</span> Complete payment. Your M-ticket is delivered to your registered email and phone number instantly.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a code shows as invalid, check that your booking value meets the minimum fare threshold and that your selected route and operator are eligible. Some redbus offer codes are restricted to specific states, operators, or bus types. Refresh this CouponsCrew page and try the next active code.
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
            redBus Coupon Code & Travel Deals — Verified for August 2026
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
          {REDBUS_COUPONS.map((coupon) => (
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
              redBus is India's largest online bus ticketing platform, connecting passengers across thousands of routes covering intercity, interstate, and overnight travel. With over 6,000 bus operators listed, real-time seat availability, live bus tracking, and a straightforward cancellation policy, it has become the default booking platform for millions of travellers who previously relied on agents or counter queues.
            </p>

            <p>
              At CouponsCrew, we track every active red bus coupon code, red bus promo code, and redbus offer code so you never waste time entering a code that stopped working three days ago. Every deal on this page is verified by our team before it goes live — minimum booking values, eligible routes, user eligibility, and expiry dates are all checked and clearly shown on each deal card.
            </p>

            <p>
              Whether you are booking a last-minute overnight sleeper, planning a holiday trip weeks in advance, or making a regular intercity commute, there is almost always a working discount available on redBus. This page is updated daily — bookmark it and check it before every booking.
            </p>

            
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Types of redBus Deals Available on CouponsCrew
  </h3>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Flat Discount Codes (red bus coupon code)</p>
  <p className="mb-4">
    A fixed rupee amount off your booking total — ₹100, ₹150, ₹200, or ₹300 off depending on the active promotion. These work regardless of percentage — on a ₹400 ticket, a ₹150 flat code is effectively a 37.5% saving. Best value on shorter, lower-fare routes.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Percentage Discount Codes (red bus promo code)</p>
  <p className="mb-4">
    A percentage off the base fare — typically 10%–30% off, sometimes capped at a maximum saving. These offer more value on longer, higher-fare routes (overnight sleepers, interstate AC buses) where the percentage translates to a larger rupee saving.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">redBus Offer Code for New Users</p>
  <p className="mb-4">
    First-time redBus users get a dedicated set of deals — typically a flat discount or percentage off the first booking with no minimum fare. CouponsCrew lists all active new-user redbus offer codes in the "New Users" filter on this page.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">redBus Voucher Code (Seasonal &amp; Event-Based)</p>
  <p className="mb-4">
    redBus runs time-limited redbus voucher codes around national holidays, long weekends, and festive travel windows. These are among the highest-value codes available — sometimes combining a base discount with a cashback top-up. They expire faster than standard codes; CouponsCrew publishes these as they go live.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">red bus promotion code (App-Exclusive)</p>
  <p className="mb-4">
    A meaningful portion of redBus's best discounts are available only on the redBus app. App-exclusive red bus promotion codes are surfaced in the app's offers section and via push notifications — download the app and enable notifications to access these before they expire.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Bank Card Instant Discounts</p>
  <p className="mb-4">
    HDFC, ICICI, SBI, Axis, and Kotak card holders get periodic instant discount offers on redBus bookings — typically 10%–15% off or a fixed cashback at checkout. These apply at the payment step and are frequently stackable on top of a promo code where the promotion allows.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">UPI Cashback Offers</p>
  <p className="mb-4">
    Paytm, PhonePe, and Google Pay periodically run cashback promotions on redBus bookings — typically ₹50–₹100 cashback credited post-booking. No separate red bus discount code is needed; select the eligible UPI app at the payment step to activate.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">redBus Prime Member Deals</p>
  <p className="mb-6">
    redBus Prime is the platform's membership tier, offering exclusive discounts on bookings, priority customer support, and early access to seat availability on popular routes. Prime member-only codes are listed on this page under the Prime filter where available.
  </p>

  {/* redBus Train Ticket Bookings and Offers Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    redBus Train Ticket Bookings and Offers
  </h3>
  <p className="mb-4">
    redBus expanded beyond bus bookings to include redbus ticket booking for trains — giving travellers a single platform to compare and book both modes of intercity travel. Train booking on redBus covers:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
    <li><strong>All train classes</strong> — Sleeper (SL), Third AC (3A), Second AC (2A), First AC (1A), Chair Car (CC), and Executive Chair Car (EC)</li>
    <li><strong>Real-time PNR status</strong> — check your booking status and seat confirmation directly from the redBus app</li>
    <li><strong>Tatkal booking</strong> — book Tatkal quota tickets for last-minute travel at the premium Tatkal fare</li>
    <li><strong>Live train tracking</strong> — monitor your train's real-time position and platform information during travel</li>
    <li><strong>IRCTC integration</strong> — redBus train bookings are processed through the IRCTC system; your login credentials for IRCTC are required to complete a train booking via redBus</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Can I use a redBus coupon code on train tickets?</p>
  <p className="mb-4">
    Promotional codes on redBus are primarily designed for bus ticket bookings. Train ticket bookings on redBus are processed at IRCTC-regulated fares, which means the base ticket price cannot be discounted — only the convenience fee (charged by redBus on top of the IRCTC fare) may be eligible for a promotional discount during specific campaigns. Always check the individual deal card for train-ticket eligibility before applying a code.
  </p>
  <p className="mb-6">
    redBus offers for train travel are less frequent than bus deals but do appear during promotional windows — CouponsCrew lists these when active, clearly labelled for train-ticket eligibility.
  </p>

  {/* RedBus Bank and Other Offers Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    RedBus Bank and Other Offers You Can Use to Save More
  </h3>
  <p className="mb-4">
    Beyond promo codes, redBus runs several categories of bank and wallet offers that can reduce your fare significantly — especially when stacked with an active redbus booking promo code:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">HDFC Bank Offers</p>
  <p className="mb-4">
    HDFC credit and debit card holders regularly receive instant discount or cashback offers on redBus — typically 10%–15% off the base fare or a fixed amount back. These apply at the payment step with no additional code needed.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">ICICI Bank Offers</p>
  <p className="mb-4">
    ICICI credit card users get periodic promotional discounts on redBus bookings during campaign windows — particularly around festive travel periods and long weekends when demand is high.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">SBI Card Offers</p>
  <p className="mb-4">
    SBI SimplyCLICK and SBI card holders get cashback offers on redBus bookings tied to the bank's ongoing e-commerce cashback programme. Check your SBI card's offer page or the redBus payment screen for the current active offer.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Axis Bank Offers</p>
  <p className="mb-4">
    Axis Bank credit and debit card promotions on redBus appear during travel sale windows — commonly offering 10% off or a flat cashback amount. The Axis Ace and Flipkart Axis cards are the most frequently featured.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Paytm UPI &amp; Paytm Postpaid</p>
  <p className="mb-4">
    Paytm UPI users get periodic cashback (₹50–₹100) on redBus bookings. Paytm Postpaid (buy-now-pay-later) allows you to book tickets immediately and pay within the billing cycle — useful for last-minute travel when you need to book before salary credit.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">PhonePe &amp; Google Pay</p>
  <p className="mb-4">
    Both PhonePe and Google Pay run redBus-specific cashback campaigns periodically — credited as cashback to your UPI wallet post-booking. No separate red bus coupon code is needed; select the eligible UPI app at checkout.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Amazon Pay</p>
  <p className="mb-4">
    Amazon Pay balance holders occasionally get redBus-specific cashback offers during Amazon's travel promotion windows — check the Amazon Pay offers page and the redBus payment screen for current availability.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">redBus Wallet</p>
  <p className="mb-4">
    redBus has its own in-app wallet where refunds from cancelled bookings are credited. This wallet balance can be used directly against future bookings — effectively a discount on your next trip. No code needed; balance is applied automatically at checkout if available.
  </p>

  <p className="mb-6 font-semibold text-slate-700">
    💡 CouponsCrew tracks all active bank and wallet offers for redBus alongside standard promo codes. Use the "Bank Offers" filter on this page to see what is currently available for your card.
  </p>

  {/* What to Do If Your redBus Discount Code Is Not Working Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    What to Do If Your redBus Discount Code Is Not Working
  </h3>
  <p className="mb-4">
    If a red bus discount code is not applying at checkout, here are the most common reasons and how to fix each:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">1. The code has expired</p>
  <p className="mb-4">
    redBus promotional codes have fixed validity windows — often tied to specific travel dates or booking windows. The most reliable fix is to refresh this CouponsCrew page and use the next verified active code in the list. Expired codes are removed from this page as soon as detected.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">2. Minimum booking value not met</p>
  <p className="mb-4">
    Most redbus offer codes have a minimum fare threshold — typically ₹300–₹600. If your ticket fare is below this, the code will not apply. Try selecting a higher-class seat (AC over non-AC, sleeper over seater) or add a return journey to push the cart value above the threshold.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">3. Route or operator not eligible</p>
  <p className="mb-4">
    Some red bus promo codes are valid only on specific routes (e.g., only for travel within Karnataka or Maharashtra), specific operators (e.g., only on KSRTC services), or specific bus types (e.g., AC sleeper only). Check the deal card conditions on this CouponsCrew page before building your booking around a specific code.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">4. Code is valid for a different user type</p>
  <p className="mb-4">
    New-user codes will not work for existing redBus accounts. Existing-user codes may not apply to first-time bookings. If a code is showing as invalid, check whether it is marked "New Users" or "Existing Users" on the CouponsCrew deal card.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">5. Maximum usage limit reached</p>
  <p className="mb-4">
    Some redbus booking promo codes have a cap on total redemptions. Once that limit is hit, the code stops working even if it has not technically expired. If a freshly fetched code is already invalid, this is likely the reason — move to the next active code on this page.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">6. App-only code used on the website</p>
  <p className="mb-4">
    App-exclusive red bus promotion codes will not work when entered on the desktop website or the mobile site. If the deal card on CouponsCrew specifies "App Only," download the redBus app and apply the code there.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">7. Payment method mismatch</p>
  <p className="mb-4">
    Some redBus promo codes are tied to a specific payment method — for example, valid only on credit card payments or only on UPI. If a code is not applying despite meeting all other conditions, check whether your selected payment method is eligible.
  </p>

  <p className="mb-6">
    If none of the above resolve the issue, reach out to redBus customer support via the app's Help section or call the redBus helpline. CouponsCrew also welcomes feedback via the thumbs-down button on any deal card — it helps us flag and remove broken codes faster.
  </p>


            {/* Section: redBus Services */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              redBus Services — What You Can Book
            </h3>
            <p>
              Online Red Bus Booking covers far more than just intercity buses. Here is the full scope of what redBus supports:
            </p>

            <div className="space-y-2 my-4">
              <p><strong className="text-[#2C2C40]">Bus Types Available</strong></p>
              <p><strong className="text-[#2C2C40]">AC Seater — </strong> air-conditioned seater buses for shorter intercity routes</p>
              <p><strong className="text-[#2C2C40]">AC Sleeper — </strong> overnight routes with berth-style seating; lower and upper berth options</p>
              <p><strong className="text-[#2C2C40]">Non-AC Seater — </strong> budget option for shorter or daytime routes</p>
              <p><strong className="text-[#2C2C40]">Non-AC Sleeper — </strong> budget overnight travel</p>
              <p><strong className="text-[#2C2C40]">Semi-Sleeper — </strong> reclining seats, between seater and full sleeper</p>
              <p><strong className="text-[#2C2C40]">Volvo / Mercedes Multi-Axle — </strong> premium intercity buses; higher comfort, more legroom</p>
              <p><strong className="text-[#2C2C40]">Mini Bus — </strong> smaller operator buses on regional routes</p>
              <p><strong className="text-[#2C2C40]">Electric Bus — </strong> available on select urban and intercity routes as part of state government EV fleet expansion</p>
            </div>

            <p><strong className="text-[#2C2C40]">Government vs Private Operators</strong></p>
            <p>
              redBus lists both government-run state transport services and private operators on the same platform. Government buses (KSRTC, MSRTC, TSRTC, UPSRTC, HRTC, and others) are generally priced lower with fixed fares. Private operators offer more comfort tiers and flexible cancellation. redBus's "Primo" tag identifies top-rated private operators with above-average ratings and on-time performance.
            </p>

            <p><strong className="text-[#2C2C40]">redBus for Corporate Travel</strong></p>
            <p>
              redBus offers a corporate travel management product for companies with frequent intercity travel needs — including GST-compliant invoicing, centralised billing, and dedicated account management. CouponsCrew's redBus coupon codes apply to personal bookings; corporate accounts are managed separately through the redBus Business portal.
            </p>

            <p><strong className="text-[#2C2C40]">International Bus Booking</strong></p>
            <p>
              redBus also supports bus bookings in Singapore, Malaysia, Indonesia, Colombia, and Peru through its international operations. The CouponsCrew redBus page primarily tracks deals for India-based bookings — international promotional codes are less frequent and listed separately when available.
            </p>

            {/* Section: Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              redBus Saving Tips — Get More Off Every Booking
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Book Early for Better Fares and Code Eligibility: </strong>
              Bus fares on popular routes (especially overnight sleepers from major cities) increase as seats fill up. Booking 3–7 days in advance not only secures a better seat but also gives you more time to find and apply the right red bus coupon code before it expires.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Use the redBus App for Exclusive Deals: </strong>
              The redBus app has a dedicated "Offers" section that surfaces app-exclusive promo codes and personalised discounts based on your booking history. These codes are not listed on the desktop website or third-party aggregators — the app is worth downloading for regular travellers.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Check CouponsCrew Before Every Booking: </strong>
              Redbus online bus booking deals change frequently — a code that was not available yesterday may be live today. CouponsCrew updates this page daily, so checking it immediately before you book gives you the best chance of finding an active, high-value code.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Stack a Promo Code with a Bank Card Offer: </strong>
              Many active redbus booking promo codes are stackable with HDFC, ICICI, SBI, or Axis bank card discounts. Apply the promo code first in the coupon field, then select your bank card at the payment step. The bank saving layers on top where the promotion allows — on a ₹1,000 ticket, this combination can save ₹200–₹350 in one booking.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Travel Mid-Week for Lower Base Fares: </strong>
              Bus fares on redBus are dynamic — Friday–Sunday and holiday-adjacent travel dates consistently carry higher fares. If your travel date is flexible, choosing Tuesday–Thursday typically gives you a lower base fare, making percentage-based red bus promo codes even more effective.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Use the Filters Strategically: </strong>
              redBus's route search filters — bus type, operator, departure time, and fare range — let you zero in on buses where your active code is most likely to apply. If your code is valid only on AC sleeper buses, filter to AC sleeper first before searching for your seat.
            </p>

            <p>
              <strong className="text-[#2C2C40]">7. Check Cancellation Policy Before Booking: </strong>
              redBus cancellation policies vary by operator. Before applying any redbus offer code and completing a booking, review the cancellation terms on the bus detail page — particularly if your travel dates are uncertain. Fully non-refundable tickets at a discounted price are not always the best deal if plans might change.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              redBus Customer Support
            </h3>
            <p>
              redBus provides multi-channel customer assistance for active bookings, cancellations, refunds, and live bus tracking:
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
                    <td className="p-4 font-bold text-[#2C2C40]">Customer Helpline</td>
                    <td className="p-4">099456 00000 / Check ticket details for route helpline</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">In-App Support (24/7)</td>
                    <td className="p-4">Integrated Help & Chat System for fast resolution</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Assistance</td>
                    <td className="p-4">support@redbus.in</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Self-Service Portal</td>
                    <td className="p-4">redbus.in/info/redcare (Cancellation & Boarding Point Help)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">MakeMyTrip — </strong> Flights, hotels, and holiday packages with frequent coupon deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">Goibibo — </strong> Bus, flight, and hotel booking with wallet cashback offers
            </p>
            <p>
              <strong className="text-[#2C2C40]">Abhibus — </strong> Alternative bus booking platform; occasionally has route-specific deals
            </p>
            <p>
              <strong className="text-[#2C2C40]">IRCTC — </strong> Official train ticket booking; no third-party coupons applicable
            </p>
            <p>
              <strong className="text-[#2C2C40]">Rapido / Ola / Uber — </strong> For local city travel connecting to your bus or train departure point
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for redBus Deals
            </h3>
            <p>
              Finding a working red bus coupon code should take seconds, not a frustrating session of applying codes one by one until something sticks. CouponsCrew verifies every code on this page before it goes live — expiry dates, minimum booking values, operator restrictions, and user eligibility are all checked.
            </p>
            <p>
              Red bus travel booking has genuine, consistent savings available — percentage-off codes, flat discount codes, bank card instant discounts, UPI cashback, and the Cheesy Rewards-equivalent Cheesy... rather, redBus Prime membership layer. The challenge is knowing which codes are live right now and which ones suit your specific booking.
            </p>
            <p>
              Bookmark this page and check back before every redBus booking — whether you are booking a ₹200 daytime seater or a ₹1,200 overnight AC sleeper, a verified redbus booking promo code from CouponsCrew will almost always reduce what you pay.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline cursor-pointer"
          >
            {isReadMore ? "Read Less" : "Read More"}{" "}
            <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
          </button>

          {/* FAQs Accordion */}
          <div className="mt-20 space-y-4">
            <h3 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions — redBus Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working red bus coupon code today?",
                a: "Every red bus coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard and you are redirected to redBus. Codes are checked daily; expired ones are removed promptly. If a code does not apply, check the deal card conditions and try the next listing."
              },
              {
                q: "Q2. Can I use a redbus promo code on train ticket bookings?",
                a: "Most red bus promo codes on this page apply to bus ticket bookings. Train ticket fares on redBus are IRCTC-regulated and cannot be discounted at the base fare level. Some promotional codes may discount the redBus convenience fee on train bookings during specific campaigns — check the individual deal card for train-ticket eligibility."
              },
              {
                q: "Q3. Is redBus safe for online bus ticket booking?",
                a: "Yes — redBus is a well-established platform operating since 2006, now part of the MakeMyTrip group. All bookings generate a confirmed M-ticket delivered to your registered phone and email. Payments are processed through standard encrypted gateways. The redBus app and website both carry verified operator listings and real passenger ratings."
              },
              {
                q: "Q4. What is the redBus cancellation policy?",
                a: "Cancellation terms vary by operator and are displayed on the bus detail page before you confirm your booking. Most tickets allow cancellation with a partial refund up to 2–4 hours before departure. Refunds for cancelled bookings are typically processed to the original payment method within 5–7 business days, or immediately to the redBus wallet."
              },
              {
                q: "Q5. Can I use a red bus discount code for last-minute bookings?",
                a: "Yes — most red bus discount codes on CouponsCrew apply to any eligible booking regardless of travel date, as long as the code has not expired and the minimum booking value is met. Last-minute bookings on high-demand routes may carry higher base fares, which actually makes percentage-based codes more valuable."
              },
              {
                q: "Q6. What is the minimum booking value for redBus coupon codes?",
                a: "Minimum values vary by code — typically between ₹300 and ₹600 for most active redbus offer codes. The exact threshold is shown on each deal card on this CouponsCrew page. There is no universal minimum across all redBus codes."
              },
              {
                q: "Q7. Are there redBus offers for government buses like KSRTC or MSRTC?",
                a: "Some red bus promotion codes are valid on government-operated buses listed on redBus, but many codes are restricted to private operators or specific bus types. Check the deal card conditions for operator eligibility before applying a code on a government bus booking."
              },
              {
                q: "Q8. How does redBus Prime work?",
                a: "redBus Prime is the platform's membership tier offering exclusive discounts on bookings, priority customer support, and other travel benefits. Prime member-only codes are separate from standard public redbus voucher codes and are listed on this CouponsCrew page under the Prime filter when available."
              },
              {
                q: "Q9. Can I use multiple redBus offer codes on one booking?",
                a: "No — redBus allows only one promotional code per booking. Choose the code that offers the highest saving for your specific fare before applying. Bank card offers and UPI cashback can typically be stacked on top of a single promo code."
              },
              {
                q: "Q10. How do I contact redBus customer support if there is a booking issue?",
                a: "redBus customer support is available via the app's Help section (chat support), the redBus website contact form, and the helpline number listed on your booking confirmation. For payment issues, your bank's customer care is also a parallel option if the payment was debited but the booking failed."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular redBus Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["redBus Coupons", "Bus Booking Offers", "Primo Operators", "Intercity Bus Deals", "AC Sleeper Offers", "Bank Card Discount", "redBus Prime", "CouponsCrew redBus"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top redBus Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 20% OFF Bus Booking", sub: "Verified coupon code for first & repeat users" },
              { heading: "Primo Bus Discounts", sub: "Extra savings on top-rated private operators" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, SBI, ICICI & Axis cards" },
              { heading: "redBus Prime Member Deals", sub: "Exclusive pricing and priority customer care" },
              { heading: "UPI Cashback Offers", sub: "Instant cashback via Google Pay, PhonePe & Paytm" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">RB</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get redBus deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#D84E55]">{activeModalCoupon.code}</span> at redBus checkout for instant discounts.
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
                className="w-full bg-[#D84E55] hover:bg-[#C13F46] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to redBus</span>
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
