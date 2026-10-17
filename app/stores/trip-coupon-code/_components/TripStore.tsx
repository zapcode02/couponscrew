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
import { Coupon, TRIP_COUPONS } from './tripCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.trip.com/';

export default function TripStore() {
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

  const coupons: Coupon[] = TRIP_COUPONS;

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
      q: 'How do I use a Trip.com promo code?',
      a: '[TODO: how-to answer specific to Trip.com checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Trip.com?',
      a: '[TODO: stacking rules specific to Trip.com]'
    },
    {
      q: 'Why is my Trip.com promo code not working?',
      a: '[TODO: common reasons a code might fail on Trip.com]'
    },
    {
      q: 'Where can I find the best Trip.com offers?',
      a: 'We keep this Trip.com store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Trip.com offer free cancellation?',
      a: '[TODO: Trip.com free cancellation policy details]'
    },
    {
      q: 'How often are Trip.com coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Trip.com Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/trip-logo_hf83mp.webp"
                      alt="Trip.com Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Trip.com Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Trip.com Coupon Code and Trip.com Promo Code on your next trip. Enjoy up to 50% OFF hotels in China and 10% OFF hotel bookings, tours, and airport transfers. Book flights, hotels, car rentals, holiday packages, and travel experiences with verified Trip.com deals this October.
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
                  <span>Visit Trip.com</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#2577E3]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/trip-logo_hf83mp.webp"
                alt="Trip.com Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹7,891+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Trip.com Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Trip.com coupon codes & offers.</p>
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
            className="w-24 sm:w-32 lg:w-40 bg-[#2577E3] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "45%"}
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
              {coupon.points && coupon.points.length > 0 && (
                <button
                  onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                  className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2577E3] hover:opacity-80 w-fit transition-opacity"
                >
                  View Details
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}

              {/* Dynamic Details List */}
              {isExpanded && coupon.points && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  {coupon.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2577E3]" />
                      <span>{point}</span>
                    </li>
                  ))}
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

            
            
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Trip.com Promo Code
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>On the app: Go to Account, then Promo Code, and add the code. Saved codes apply automatically at checkout when eligible. Or, at checkout, after entering traveller details, scroll to Promo codes, tap Add, enter the code and confirm.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>On the website: click your account icon, open Promo Codes, and add the code before you book.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Before you pay, check the price summary shows the discount. You can only use one promo code per booking.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Set Your Account to India First: Trip.com codes are tied to a country site. Check that your account is set to English (India) with INR as the currency. A code issued for India won't apply if your account or the site is set to another country, and codes from Trip.com Singapore, the UK or the US won't work on the India site.</span>
      </div>
    </li>
  </ul>
</div>           

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Your Trip.com Promo Code Isn't Working
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>The code is for a different product (a hotel code on a flight, or the reverse).</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>The flight is domestic, but the code covers international routes only.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Your account or site is set to a country other than India, or you're paying in another currency.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>The booking is below the code's minimum spend.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>The code is new-user-only or app-only.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>You've already used it on another booking, or the campaign's codes have run out.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Another promo code is already applied. Only one code works per booking.</span>
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

      {/* Main Content Column */}
      <div className="prose max-w-none">
        
        {/* Main Title - Replaced H1 with Styled Paragraph */}
        <p className="text-3xl font-black text-black mb-10 leading-tight italic">
          Trip.com Coupon Code: How Trip.com Promo Codes Work in India (October 2026)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Trip.com coupon code is a promo code that reduces the price of a flight, hotel, train, attraction or airport transfer booked on Trip.com. In India, most Trip.com codes are built for international travel: recent codes covered flights to or from India (not domestic flights) and hotels outside India, each with a percentage off and a rupee cap.
          </p>

          <p className="italic text-sm text-gray-500">
            Last checked: 17 October 2026.
          </p>

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            What a Trip.com India Code Usually Looks Like
          </p>

          <p>
            The best guide to future codes is the last big one. In June 2026, Trip.com ran a 6.6 Summer Sale for Indian users. Its terms show how Trip.com India codes are typically built.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Code type</th>
                  <th className="p-4 font-bold">Discount</th>
                  <th className="p-4 font-bold">Cap</th>
                  <th className="p-4 font-bold">Main conditions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">International flights</td>
                  <td className="p-4">50% off</td>
                  <td className="p-4">Up to ₹5,000</td>
                  <td className="p-4">Selected flights to or from India; domestic flights excluded</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">International flights</td>
                  <td className="p-4">10% off</td>
                  <td className="p-4">Up to ₹1,500</td>
                  <td className="p-4">Same flight conditions</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Hotels</td>
                  <td className="p-4">20% off</td>
                  <td className="p-4">Up to ₹1,000</td>
                  <td className="p-4">Hotels outside India; at least 3 consecutive nights</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Flash hotel deal</td>
                  <td className="p-4">₹999 for one night</td>
                  <td className="p-4">Limited rooms</td>
                  <td className="p-4">Selected destination; first come, first served</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Rules that applied to every code in that sale, and that are worth expecting from any Trip.com promo code in India:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>One use per account, device or mobile number.</li>
            <li>Signed in, on the English (India) site, paying in INR. Codes didn't work on other country sites.</li>
            <li>Indian residents aged 18 and over.</li>
            <li>Cancel, and the code's value is gone. The promo amount isn't refunded, and the airline's or hotel's own cancellation rules still apply.</li>
            <li>Changing the booking can void the discount.</li>
          </ul>

          <p>
            The June sale has ended. It's a reliable picture of what to expect, though: Trip.com runs sales on "double dates" (6.6, 9.9, 11.11 and so on), and that's when the strongest codes tend to appear.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Trip Coins: The Discount You Earn Back
    </p>

    <p>
      Trip Coins are Trip.com's loyalty rewards. You earn them on completed bookings and spend them on future ones. 100 Trip Coins are worth about US$1, and Trip.com lets you use Trip Coins together with a promo code on the same booking.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Base earning rates (Silver members) per US$100 spent:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Booking type</th>
            <th className="p-4 font-bold">Trip Coins earned</th>
            <th className="p-4 font-bold">Roughly back</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Hotels</td>
            <td className="p-4">50</td>
            <td className="p-4">0.5%</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Flight + hotel</td>
            <td className="p-4">35</td>
            <td className="p-4">0.35%</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Flights</td>
            <td className="p-4">20</td>
            <td className="p-4">0.2%</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Airport transfers</td>
            <td className="p-4">20</td>
            <td className="p-4">0.2%</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Car rentals</td>
            <td className="p-4">15</td>
            <td className="p-4">0.15%</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Tours</td>
            <td className="p-4">15</td>
            <td className="p-4">0.15%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Higher membership tiers earn more. You start as Silver when you sign up and move to Gold after one eligible booking; Platinum and above need more bookings and spend each year.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Things to know:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Coins from bookings expire after 18 months, on the last day of the expiry month. Expiry can't be extended.
      </li>
      <li>
        Hotels earn more coins than flights, so booking your hotel and flights on Trip.com earns more than flights alone.
      </li>
      <li>
        Verify your email before trying to redeem; it's required.
      </li>
      <li>
        Coins work on prepaid bookings for hotels, flights, trains, car rentals, attractions, transfers and tours.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Trip.com's Guarantees: What Actually Protects You
    </p>

    <p>
      On travel bookings, what happens when something goes wrong matters as much as the price. Trip.com India lists these service guarantees:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Booking</th>
            <th className="p-4 font-bold">If it goes wrong because of Trip.com or its supplier</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Flights</td>
            <td className="p-4">Fare locked once you've paid; if you can't board because of a Trip.com fault, refund plus a replacement ticket</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Hotels</td>
            <td className="p-4">A same-or-better room or nearby hotel arranged; price difference covered up to the first night's rate</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Car rentals</td>
            <td className="p-4">Refund plus compensation up to the first day's rental if the car isn't available</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Airport transfers</td>
            <td className="p-4">Full refund plus at least 20% extra if the supplier cancels after confirmation</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Attractions</td>
            <td className="p-4">If a ticket problem isn't fixed within 15 minutes, a refund plus twice the price difference of buying at the gate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Support is available 24/7 by phone and chat, including emergency help during a trip. For cancellations due to serious medical reasons, Trip.com says it will try to negotiate with the airline or hotel; supporting documents must be sent within a week.
    </p>

    <p>
      About price matching: Trip.com runs a hotel Best Price Guarantee trial in selected regions. Where it applies, the difference is refunded only as Trip Coins, not cash. Flights aren't covered. Don't book on the assumption that a price match will be honoured.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Getting the Most from a Trip Discount Code
    </p>

    <p>
      A percentage code with a rupee cap rewards some bookings much more than others. A few ways to plan around that:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Match the booking to the cap.</strong> On a 10% code capped at ₹1,500, a ₹15,000 fare gets the full saving. Spending more doesn't raise it.
      </li>
      <li>
        <strong>Use flight codes on international routes.</strong> Recent Trip.com India codes excluded domestic flights.
      </li>
      <li>
        <strong>Hotel codes may need a minimum stay.</strong> The June hotel code required at least three nights in a row, outside India.
      </li>
      <li>
        <strong>Compare the total, not the headline fare.</strong> Check baggage, seat charges and hotel taxes on the final payment page.
      </li>
      <li>
        <strong>Don't spend a code on a booking you might cancel.</strong> The code's value isn't returned.
      </li>
      <li>
        <strong>Book in the app when a code is app-only.</strong> Some Trip.com codes work only in the app or only for new users.
      </li>
    </ul>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Trip.com Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a Trip.com coupon code for India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check this page and the promotions section of Trip.com India. The strongest India codes usually appear during double-date sales; in June 2026, codes gave up to 50% off international flights (capped at ₹5,000) and 20% off hotels outside India (capped at ₹1,000).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Do Trip.com promo codes work on domestic flights in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The June 2026 India codes excluded domestic flights and covered only selected flights to or from India. Read each code's terms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use Trip Coins and a promo code together?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Trip.com allows Trip Coins alongside a promo code on the same booking, though only one promo code can be used.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How much are Trip Coins worth?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                About US$1 for every 100 Trip Coins. Coins earned from bookings expire after 18 months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Do I get my promo code back if I cancel?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. On recent Trip.com India campaigns, the promo value wasn't refunded on cancellation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Trip.com match lower prices?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Only for hotels, as a trial in selected regions, and the difference is paid in Trip Coins. Flights aren't covered.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Trip.com customer support available 24/7?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Trip.com India offers 24/7 support by phone and online chat, including emergency help while travelling.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A Trip.com coupon code works best on an international booking you're sure about, made on the India site in rupees, during a double-date sale. Add Trip Coins on top and you get a little back for next time. For other travel bookings, compare our <a href="https://www.couponscrew.com/stores/booking-coupon-code" className="text-[#5B4FBE] font-bold underline">Booking.com coupon codes</a>, <a href="https://www.couponscrew.com/stores/expedia-coupon-code" className="text-[#5B4FBE] font-bold underline">Expedia coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/travel" className="text-[#5B4FBE] font-bold underline">travel category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Trip.com Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Trip.com Coupons", "Flight Offers", "International Hotel Deals", "Trip Coins", "Travel Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Trip.com checkout for instant discounts.
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
                <span>Continue to Trip.com</span>
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
