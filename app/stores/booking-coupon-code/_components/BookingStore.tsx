'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,Sparkles,
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
import { Coupon, BOOKING_COUPONS } from './bookingCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.booking.com';

export default function BookingStore() {
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

  const coupons: Coupon[] = BOOKING_COUPONS;

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
      q: 'How do I use a Booking.com coupon code?',
      a: 'To use a Booking.com coupon code, browse verified codes here on CouponScrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Booking.com website or app. If it is a deal, simply click "Visit Booking.com" to get the discount auto-applied or reflected in the listed price.'
    },
    {
      q: 'What is Booking.com Genius loyalty program?',
      a: 'Genius is Booking.com\'s free loyalty program that rewards frequent travelers with tiered discounts and perks. As you book more stays and complete them, you move up Genius levels, unlocking benefits like discounts on select properties, free breakfast, or room upgrades at participating hotels, depending on the tier and property.'
    },
    {
      q: 'What is Booking.com\'s cancellation policy?',
      a: 'Cancellation terms vary by property and rate plan. Many listings offer free cancellation up to a certain date before check-in, while others may be non-refundable or partially refundable. Always check the specific cancellation policy shown on the property page before confirming your booking.'
    },
    {
      q: 'Why is my Booking.com coupon code not working?',
      a: 'A coupon or discount may not apply due to property-specific exclusions, blackout dates, minimum stay requirements, expiry, or eligibility limited to certain user groups such as Genius members. Review the terms listed with each offer on CouponScrew before booking.'
    },
    {
      q: 'Do I pay at booking or at the property on Booking.com?',
      a: 'This depends on the property and rate you choose. Some bookings require prepayment at the time of booking, while many properties allow you to reserve now and pay later, directly at the property during check-in or check-out. The payment terms are clearly shown before you confirm your reservation.'
    },
    {
      q: 'Where can I find the best Booking.com offers?',
      a: 'We keep this Booking.com store page updated with the latest discounts, verified offers, and seasonal deals across hotels, apartments, homestays, and more, so you always have access to current savings before you book.'
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
            <span className="text-[#5B4FBE] font-semibold">Booking.com Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/booking-logo_zzhrkr.webp"
                      alt="Booking.com Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Booking.com Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Hotels, Stays & Travel Booking
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified Booking coupon codes and promo codes to save up to 60% OFF hotels worldwide. Enjoy extra 10% OFF with Genius, weekend stay deals, early-bird discounts, and exclusive savings on Dubai, USA, Delhi, Singapore, Mumbai, and more top destinations.
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
    <span>Visit Booking.com</span>
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

            {/* Promo Panel (Right 5 Columns) — desktop only, gradient panel reusing the logo since no banner image exists */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center p-10 text-center"
            >
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-20px] w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10 w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-5 shadow-lg mx-auto mb-6">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/booking-logo_zzhrkr.webp"
                  alt="Booking.com Offers"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="relative z-10 text-white text-2xl font-black tracking-tight mb-2">Book Stays Worldwide</h3>
              <p className="relative z-10 text-white/80 text-sm max-w-xs mx-auto">
                Hotels, apartments & homestays — save more with verified Booking.com offers.
              </p>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Millions</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Listings Worldwide</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Booking.com Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Booking.com coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
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
                {/* Soft Tint Badge using Accent (#FF5722) */}
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
                    <span>Valid on select properties and travel dates as shown on Booking.com.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum stay length or advance booking window might apply as specified.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers select hotels, apartments, and homestay partners.</span>
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
                <span>About Booking.com</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
               Booking.com was founded in Amsterdam in 1996 and is now one of the largest online travel platforms globally. It operates in over 220 countries and territories, listing hotels, apartments, villas, hostels, resorts, and other accommodation types alongside flights, car rentals, airport taxis, and local attractions.
              </p>

              <p className="text-[#1A1A2E] text-sm">
              For Indian travellers, Booking.com offers INR-priced bookings with local payment options, a wide selection of domestic and international properties, and a platform that covers end-to-end trip planning — from the first flight ticket to the last hotel night. A working booking coupon code from CouponsCrew applies directly at checkout on the Booking.com India website or app.
              </p>



              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Booking.com</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Booking.com Stay Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Hotels, Apartments & Homestays
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
                Top Categories at Booking.com
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Hotels</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Apartments & Homestays</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Genius Loyalty Discounts</span>
                  <span className="text-[#FF5722] font-bold">Up to 15% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Last-Minute Deals</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Flights & Car Rentals</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

           {/* Sidebar Card: Get Best Deals on Booking.com */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Get Best Deals on Booking.com
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Booking.com's pricing model is dynamic — the same room or flight can cost different amounts depending on how far in advance you book, the season, and the demand on that date. Getting the best deal involves three things: booking at the right time, using the right filters, and applying a working booking promo code before confirming.
    Here's where the best Booking.com deals consistently appear:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Early booking rates</span>
        <span>Properties list reduced rates for reservations made well in advance. The earlier you book, the lower the base rate, before any promo code applies.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Last-minute deals</span>
        <span>Some properties drop prices significantly in the 24–48 hours before check-in to fill unsold rooms. Flexible travellers can find strong deals here.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Non-refundable rates</span>
        <span>Booking a non-refundable room is typically cheaper than a free-cancellation rate on the same property. Worth it if your dates are fixed.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Genius Member deals</span>
        <span>Booking.com's free loyalty programme (Genius) unlocks discounted rates at participating properties after your first completed booking.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Seasonal sale windows</span>
        <span>Booking.com runs promotional periods around major holidays and travel seasons. Active booking discount codes from CouponsCrew apply during these windows.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bundle deals</span>
        <span>Flight + Hotel bookings on Booking.com can be cheaper than booking each separately. Check the Flight + Hotel tab before booking individually.</span>
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
          Booking Coupon Code: Save on Hotels, Flights & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            A verified booking coupon code at checkout is the direct way to pay less on hotels, flights, car rentals, and attractions booked through Booking.com. CouponsCrew lists active Booking.com discount codes and promo offers for Indian travellers — so you save before confirming your reservation, whether you're booking a weekend stay, a flight ticket, or a full trip.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Services at Booking.com
    </h3>
    <p>
      Booking.com covers five main travel categories, accessible from the main navigation. Here's what each one includes:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Stays: </strong>
      The Stays section is the core of Booking.com — it lists hotels, resorts, guesthouses, apartments, villas, hostels, and homestays across India and internationally. Key features:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Search by destination, check-in and check-out dates, and number of guests</li>
      <li>Filter by price range, property type, star rating, free cancellation, and breakfast included</li>
      <li>View real guest reviews for each property before booking</li>
      <li>Free cancellation options clearly labelled on eligible properties</li>
      <li>Instant confirmation on most bookings</li>
    </ul>
    <p>
      For hotel near me for stay searches, Booking.com's location-based search on mobile detects your current location and surfaces nearby available properties — useful for same-day bookings when you're already travelling.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Flights: </strong>
      Booking.com's Flights section covers domestic and international air travel:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Search flight ticket options by route, date, and number of passengers</li>
      <li>Compare airline tickets across carriers for the same route</li>
      <li>Cheap flight tickets are highlighted with a price calendar showing lower-fare dates</li>
      <li>Supports flight booking for one-way, round-trip, and multi-city itineraries</li>
      <li>Filter by airline, number of stops, departure time, and fare type</li>
      <li>IndiGo flight booking, SpiceJet, Air India, and other domestic carriers are searchable through the platform alongside international airlines</li>
    </ul>
    <p>
      For travellers who typically use Ixigo flight or standalone airline booking sites, Booking.com's flight search aggregates multiple carriers in one comparison view — worth checking before booking directly with an airline.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Flight + Hotel: </strong>
      The Flight + Hotel section combines air travel and accommodation into a single booking:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Search by destination and travel dates to see combined flight and hotel prices</li>
      <li>Prices shown are typically lower than booking each component separately</li>
      <li>One checkout for both — single payment and single confirmation</li>
      <li>Particularly useful for international trips where coordinating flights and hotels separately adds friction</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Car Rental: </strong>
      Booking.com's Car Rental section covers vehicle hire for domestic and international destinations:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Search by pickup location, pickup date, and return date</li>
      <li>Filter by car type (economy, compact, SUV, minivan), transmission, and rental company</li>
      <li>Prices shown include basic insurance on most listings</li>
      <li>Airport pickup options available at major Indian airports</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Attractions: </strong>
      The Attractions section covers tours, activities, and experiences bookable in advance:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>City tours and guided sightseeing</li>
      <li>Museum and monument entry tickets</li>
      <li>Adventure activities and day trips</li>
      <li>Experiences bookable by destination — useful for planning activities alongside a hotel stay</li>
    </ul>
    <p>
      <strong className="text-[#2C2C40]">Airport Taxis: </strong>
      Booking.com's Airport Taxis section lets you pre-book transfers between airports and destinations:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Fixed price quotes — no surge pricing or meter uncertainty</li>
      <li>Confirmation sent before travel with driver details</li>
      <li>Available at major airports in India and internationally</li>
      <li>Useful for international arrivals where local taxi booking apps may not be accessible</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Booking.com for Domestic Travel in India
    </h3>
    <p>
      Booking.com covers Indian domestic travel across stays, flights, and ground transport. For travellers who use multiple platforms for different parts of a trip, Booking.com brings several of these into one:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Flights within India: </strong>
      Booking.com's flight search includes domestic routes across Indian carriers. For travellers accustomed to IndiGo flight ticket booking or IndiGo manage booking on the IndiGo website directly, Booking.com provides a comparison view — you can check IndiGo fares alongside other carriers before deciding where to book. IndiGo ticket booking and IndiGo flight searches return results on the Booking.com flights tab.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Bus Bookings: </strong>
      Booking.com does not currently operate a direct bus ticket booking or bus booking service in India. For bus travel — including SETC bus booking, TNSTC bus booking, or inter-city coach services — dedicated platforms like redBus are the recommended route. CouponsCrew also lists redBus offer codes and redBus coupon codes on the redBus deals page if that's what you're looking for.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Taxi Booking: </strong>
      For taxi booking within Indian cities, Booking.com's Airport Taxis section covers pre-booked airport transfers. For city-to-city or in-city taxi rides, Ola and Uber remain the primary options in India.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Booking.com - Saving Tips and Tricks
    </h3>
    <p>
      Getting the lowest total price on Booking.com requires a bit of strategy beyond just applying a booking promo code:
    </p>
    <p>
      <strong className="text-[#2C2C40]">1. Use the Price Calendar on Flights: </strong>
      When searching for air ticket booking or plane ticket booking, switch to the calendar view in Booking.com's flight search. It shows the lowest fare for each date in the month — shifting your travel by one or two days often saves a significant amount before any coupon applies.
    </p>
    <p>
      <strong className="text-[#2C2C40]">2. Filter for Free Cancellation and Then Apply a Code: </strong>
      Free cancellation properties aren't always the cheapest option upfront, but they give you flexibility to rebook if a lower price appears later. Book the free cancellation rate, keep checking for price drops, and apply a booking discount code at the point of booking.
    </p>
    <p>
      <strong className="text-[#2C2C40]">3. Sign Up for Genius Before Booking: </strong>
      Booking.com's Genius loyalty programme is free and unlocks discounted rates at participating properties from your first completed stay. Genius discounts are applied automatically at checkout — stack them with a booking coupon code for the highest combined savings.
    </p>
    <p>
      <strong className="text-[#2C2C40]">4. Check Flight + Hotel vs Booking Separately: </strong>
      Before booking a flight and hotel individually, run the same trip through the Flight + Hotel tab. The combined price is often lower than the sum of both booked separately, especially for international destinations.
    </p>
    <p>
      <strong className="text-[#2C2C40]">5. Book Non-Refundable If Your Dates Are Fixed: </strong>
      Non-refundable rates on Booking.com are typically cheaper than free-cancellation rates for the same room. If you're certain your dates won't change, the non-refundable option gives a lower base price before a promo code even applies.
    </p>
    <p>
      <strong className="text-[#2C2C40]">6. Bookmark This CouponsCrew Page: </strong>
      CouponsCrew updates Booking.com deals as new codes go live and removes expired ones. Checking this page before every Booking.com reservation takes under a minute and ensures you're applying the most current working code.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Booking.com Cancellation Policy
    </h3>
    <p>
      Booking.com's cancellation policy varies depending on the property and rate you book. Each listing has its own cancellation terms, clearly displayed before you confirm. The main options you'll encounter:
    </p>
    <p>
      <strong className="text-[#2C2C40]">Free cancellation: </strong>
      cancel before a specified date and time with no charge. The deadline is shown clearly on the property listing and in your booking confirmation.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Partial refund: </strong>
      cancel after the free cancellation window but before check-in and receive a partial refund. The amount retained by the property varies and is listed at booking.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Non-refundable: </strong>
      the full booking amount is charged if you cancel regardless of when you cancel. These rates are typically the cheapest option.
    </p>
    <p>
      Always read the cancellation terms on your specific booking confirmation before finalising. For stays involving multiple rooms or long-duration bookings, cancellation terms may differ from the standard single-room policy.
    </p>
  </div>
</div>

          <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Booking Promo Code on CouponsCrew</h3>
            <p className="text-gray-500 font-bold text-sm mb-6">Applying a booking discount code takes under two minutes:</p>
            <div className="space-y-6">
              {[
                "Find an active deal on this page and click Get Code.",
                "The code copies to your clipboard and you land on the Booking.com website or app.",
                "Search for your stay, flight, car rental, attraction, or airport taxi.",
                "Select your preferred option and proceed to the booking summary.",
                "On the checkout page, find the \"Enter Promo Code\" or \"Coupon Code\" field.",
                "Paste the booking coupon code and click Apply.",
                "The discounted price updates before you confirm payment."
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic mt-6 pt-4 border-t border-[#f0f0f0]">
              Note: Some Booking.com promo codes apply to specific services (stays only, or flights only) or require a minimum booking value. Read the deal terms on each code on this page before searching to confirm your booking qualifies.
            </p>
          </div>

          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Available Payment Modes on Booking.com
            </h3>

            <p>
              Booking.com India supports multiple payment options at checkout:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Credit and Debit Cards: </strong>
              Visa, Mastercard, and RuPay cards accepted.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Net Banking: </strong>
              Select Indian banks supported for direct bank transfers.
            </p>

            <p>
              <strong className="text-[#2C2C40]">PayPal: </strong>
              Available for international bookings.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Pay at Property: </strong>
              Some properties allow you to pay directly at check-in rather than online.
            </p>

            <p>
              Booking.com uses standard encryption to protect payment data. The platform does not store card details beyond what's required for the transaction. For bookings with a booking coupon code applied, the discounted amount is confirmed before the final payment step.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Booking.com Customer Support
            </h3>

            <p>
              Booking.com offers customer support through multiple channels:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Help Centre: </strong>
              Available on the Booking.com website and app; covers common queries on reservations, cancellations, refunds, and account management.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Direct Messaging: </strong>
              Registered members can message the accommodation provider directly through the Booking.com platform for property-specific queries.
            </p>

            <p>
              <strong className="text-[#2C2C40]">FAQ Section: </strong>
              The official Booking.com FAQ covers booking changes, payment issues, and cancellation processes in detail.
            </p>

            <p>
              For urgent issues with an active booking — particularly while travelling — the in-app messaging feature is the fastest route to resolution. Booking.com also allows direct contact with the property for check-in details, late arrivals, and room-specific requests.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              When to Book for the Best Prices
            </h3>

            <p>
              Booking.com pricing follows travel demand. These windows consistently produce the best base prices before a booking promo code applies:
            </p>

            <p>
              <strong className="text-[#2C2C40]">Peak holiday season (Dec–Jan, May–Jun): </strong>
              Book at least 60–90 days early for best hotel rates.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Off-season domestic travel: </strong>
              Last-minute deals available; check 48 hours before travel.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Festive periods (Diwali, Holi): </strong>
              Book early; prices rise sharply as the date approaches.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Monsoon travel (Jul–Sep): </strong>
              Lower demand = lower hotel prices; good window for hill station stays.
            </p>

            <p>
              <strong className="text-[#2C2C40]">International trips: </strong>
              Book flights 3–6 months early; hotels 1–3 months early.
            </p>

            <p>
              Applying a working booking discount code from CouponsCrew on an early-booking or off-season base price gives the maximum combined saving on any Booking.com reservation.
            </p>
          </div>

         

          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Plan Every Trip Better with a Booking.com Coupon Code
            </h3>

            <p>
              Booking.com brings hotels, flights, car rentals, attractions, and airport transfers into one platform — which means every trip can be planned and paid for without switching between multiple apps or booking sites. For Indian travellers, the INR pricing, local payment options, and wide domestic property listing make it a practical first stop whether you're booking a weekend getaway, a business trip, or an international holiday.
            </p>
            <p>
              Using a working booking coupon code from CouponsCrew before every reservation is the simplest step you can take to reduce the cost of travel on an already comprehensive platform. Bookmark this page, apply the right code for your booking type at checkout, and save on every trip — whether it's a hotel near you tonight or a flight booked three months ahead.
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
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "How do I apply a Booking.com coupon code at checkout?",
                a: "After selecting your stay, flight, or service and reaching the checkout page, look for the \"Enter Promo Code\" field in the order summary. Paste the booking coupon code and click Apply — the discounted price updates before payment is requested."
              },
              {
                q: "Do Booking.com promo codes apply to all services?",
                a: "Not always. Some booking promo codes apply only to stays, and others cover flights or car rentals. The deal terms on each code on this page confirm which services are included."
              },
              {
                q: "Can I use a Booking.com coupon code with a Genius discount?",
                a: "In some cases, yes — Genius discounts apply automatically at participating properties and a promo code may be applied on top. Check whether your specific code has restrictions around Genius pricing."
              },
              {
                q: "What is the free cancellation policy on Booking.com?",
                a: "Free cancellation is available on properties that offer it — the deadline for free cancellation is shown on the listing and in your confirmation. Cancelling before this deadline results in a full refund to your original payment method."
              },
              {
                q: "Does Booking.com offer flight booking for Indian domestic routes?",
                a: "Yes. Booking.com's Flights section covers domestic Indian routes alongside international flights. You can search IndiGo, Air India, SpiceJet, and other carriers through the platform."
              },
              {
                q: "Is bus ticket booking available on Booking.com India?",
                a: "Booking.com does not currently offer domestic bus booking in India. For SETC, TNSTC, or intercity coach bookings, redBus is the recommended platform — CouponsCrew also lists active redBus coupon codes on a separate page."
              },
              {
                q: "How long does a Booking.com refund take after cancellation?",
                a: "Refund timelines depend on the property's cancellation policy and your payment method. Most refunds process within 7–14 business days to the original payment source. Check the cancellation confirmation email for the specific timeline on your booking."
              },
              {
                q: "What is Booking.com Genius and is it free?",
                a: "Genius is Booking.com's free loyalty programme. Signing up is free, and after your first completed booking you unlock Genius Level 1 discounts at participating properties automatically. No subscription fee is required."
              },
              {
                q: "Can I book an airport taxi through Booking.com India?",
                a: "Yes. Booking.com's Airport Taxis section covers pre-booked transfers at major Indian airports. Fixed prices are shown at booking — no surge pricing or meter charges."
              },
              {
                q: "How often does CouponsCrew update Booking.com codes?",
                a: "CouponsCrew checks and updates Booking.com deals regularly. Expired codes are removed and new ones are added as they go live. Bookmarking this page ensures you always have a current working booking coupon code before your next reservation."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Booking Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Booking.com Hotel Promo", "Flight Booking Discounts", "Airport Taxi Offers", "Genius Loyalty Deals", "Car Rental Codes", "Intercity Travel Deals", "CouponsCrew Home"].map(tag => (
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
              { heading: "Up to 50% Off Stays", sub: "Verified hotel discount codes across domestic & international properties" },
              { heading: "Flight Booking Savings", sub: "Promo codes on domestic and international air travel routes" },
              { heading: "Genius Level Discounts", sub: "Automatic loyalty tier price drops on participating properties" },
              { heading: "Airport Taxi Deals", sub: "Pre-booked airport transfer discounts at major Indian hubs" },
              { heading: "Car Rental Offers", sub: "Special promotional rates on self-drive and chauffeur rentals" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">B</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Booking deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Booking.com checkout for instant discounts.
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
                <span>Continue to Booking.com</span>
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
