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
import { Coupon, PIZZAHUT_COUPONS } from './pizzahutCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.pizzahut.co.in';

export default function PizzaHutStore() {
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

  const coupons: Coupon[] = PIZZAHUT_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Pizza Hut Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/pizzahut-logo_ktgfcg.webp"
                      alt="Pizza Hut Logo"
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
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Pizza Hut Coupon Code – Save ₹125 & Enjoy Buy 1 Get 3 Free
                    </h1>
                   
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Pizza Hut Coupon Code on your favourite pizzas, sides, and desserts. Get ₹125 OFF on orders above ₹500 or enjoy the Buy 1 Pizza, Get 3 Free offer. Use a Pizza Hut Discount Code to unlock verified online deals and make every meal more affordable.
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
                  <span>Visit Pizza Hut</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#E4002B]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/pizzahut-logo_ktgfcg.webp"
                alt="Pizza Hut Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">55+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Pizza Hut Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Pizza Hut coupon codes & offers.</p>
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
                                <span>Valid on select pizza, sides, and combo categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum order value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected outlets and delivery zones.</span>
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

           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <div className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Your Pizza Hut Discount Code Isn't Working
  </div>

  <div className="text-xs text-[#4A4A6A] space-y-3">
    <div className="font-normal">
      If a Pizza Hut discount code fails, the reason is almost always one of these:
    </div>

    <ul className="space-y-2.5 list-disc pl-4 font-normal text-[#4A4A6A]">
      <li>
        <span className="font-bold text-[#2C2C40]">Cart below the minimum value.</span> Add a side or drink and try again.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Wrong items in the cart.</span> Some codes work only on specific pizzas, sizes or combos.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Store or city restriction.</span> Your nearest store may not take part in the offer.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Delivery-only or takeaway-only offer.</span> Switch the order type and check again.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Already used.</span> Many codes are one-time per account or phone number.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Expired or an old campaign.</span> Codes from old ads, like past ₹99 or ₹79 promotions, won't work now.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Doesn't combine with a deal.</span> Items already on a combo price usually can't take another code.
      </li>
    </ul>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Pizza Hut WOW Box Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Pizzas, Sides & Combos
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Order Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Pizza Hut
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Pan Pizza & Cheese Burst</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">WOW Box Combos</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sides & Desserts</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Stuffed Crust</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Party & Bulk Orders</span>
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
          Pizza Hut Coupon Code: Offers, Deals and How to Pay Less in India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Pizza Hut coupon code is a promo code you apply in the Pizza Hut app or on pizzahut.co.in to take money off a delivery or takeaway order. Most codes need a minimum order value and apply to specific pizzas or combos, so the best saving depends on what and how much you order, not only on the code.
          </p>

          <p className="italic text-sm text-gray-500">
            *Last checked: 30 September 2026.*
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[700px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Pizza Hut Coupon and Offer List</caption>
    <thead>
      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
        <th scope="col" className="px-6 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Offer Type
        </th>
        <th scope="col" className="px-6 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          Discount / Price
        </th>
        <th scope="col" className="px-6 py-4 text-[#5B4FBE] font-extrabold text-sm">
          Offer Highlights
        </th>
        <th scope="col" className="px-6 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
          User Eligibility / Terms
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#E8E8F0]">
      {[
        {
          offerType: 'FLAT ₹125 OFF',
          discount: 'Flat ₹125 OFF',
          highlights: 'Valid on pizzas, sides, beverages, and desserts.',
          eligibility: 'Min. order ₹500 (All Users)'
        },
        {
          offerType: 'FLAT ₹100 OFF',
          discount: 'Flat ₹100 OFF',
          highlights: 'Applicable on eligible online Pizza Hut menu items.',
          eligibility: 'Min. order ₹400'
        },
        {
          offerType: 'BUY 1 GET 3 FREE',
          discount: '3 Free Items',
          highlights: 'Get Classic Breadstix, Cheezy Sprinkled Fries, and Pepsi free on ordering 1 Medium or Thin Pizza.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 36%',
          discount: 'Up to 36% OFF',
          highlights: 'Double Treat Meal starting at ₹449. Includes 2 Personal Pizzas + 1 Classic Breadstix.',
          eligibility: 'Combo Deal'
        },
        {
          offerType: 'SAVE 25%',
          discount: '25% OFF',
          highlights: 'Save 25% on pizzas, sides, drinks, and desserts (Max discount up to ₹300).',
          eligibility: 'Min. order ₹600'
        },
        {
          offerType: 'SAVE UP TO ₹300',
          discount: 'Up to ₹300 OFF',
          highlights: 'Get 25% OFF on qualifying online orders. Excludes combos and deal meals.',
          eligibility: 'Min. order ₹600'
        },
        {
          offerType: 'FROM ₹1,008',
          discount: 'From ₹1,008',
          highlights: 'Hut Treat Box: Includes 2 Medium Pizzas, 2 Breadstix, 2 Pepsi & 1 Divine Chocolate Tub.',
          eligibility: 'All Users'
        },
        {
          offerType: 'MOMO PIZZA OFFER',
          discount: 'Flat ₹125 OFF',
          highlights: 'Flat discount on Momo Pizza orders above ₹500 across menu items.',
          eligibility: 'Min. order ₹500 (All Users)'
        }
      ].map((row, i) => (
        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
          <td className="px-6 py-4 font-bold text-[#2D3748] text-sm whitespace-nowrap uppercase">
            {row.offerType}
          </td>
          <td className="px-6 py-4 font-extrabold text-[#FF9900] text-sm whitespace-nowrap">
            {row.discount}
          </td>
          <td className="px-6 py-4 text-[#4A5568] text-sm leading-relaxed" itemProp="description">
            {row.highlights}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
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
            How to Apply a Pizza Hut Promo Code
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Open the Pizza Hut app or pizzahut.co.in and set your delivery address or choose takeaway from a nearby store.</li>
            <li>Add your pizzas, sides and drinks to the cart.</li>
            <li>On the cart page, open the offers or coupon section.</li>
            <li>Pick an offer from the list, or type in your code, and tap Apply.</li>
            <li>Check the discount in the bill summary. If it isn't showing, your cart may be below the minimum value or have an item the code excludes.</li>
            <li>Place the order.</li>
          </ol>

          <p>
            Offers and prices can differ by store and city, so a code a friend used in another city may not work at your address.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Pizza Hut's Value Offers Over the Years
    </p>

    <p>
      People still search for the Pizza Hut 99 offer and the Pizza Hut unlimited offer, and the reason is history. Pizza Hut India has run several low-price campaigns, and old ads keep circulating long after an offer ends. Here's what Pizza Hut has actually launched, with dates, so you can tell a current deal from an old one.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">When</th>
        <th className="p-4 font-bold">Offer</th>
        <th className="p-4 font-bold">What it was</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">April 2019</td>
        <td className="p-4 font-medium">Wow Everyday Value</td>
        <td className="p-4">Pan pizzas starting at ₹99, plus Masala Pepsi and Masala Mirinda</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">September 2022</td>
        <td className="p-4 font-medium">Flavour Fun pizzas</td>
        <td className="p-4">12 personal-size pizzas starting at ₹79, with five sauces (Tandoori, Schezwan, Italian, Cheezy, Classic)</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">September 2025</td>
        <td className="p-4 font-medium">Ultimate Cheese Crust</td>
        <td className="p-4">New crust with extra cheese on all pan pizzas, launched with a brand refresh</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">June 2026</td>
        <td className="p-4 font-medium">30 years in India</td>
        <td className="p-4">₹30 crore in rewards: a free item such as Classic Breadstix or Choco Volcano above a minimum order, until 30 June 2026</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      <strong>Is the ₹99 offer still running?</strong> We couldn't confirm a ₹99 pizza on Pizza Hut's current menu when we checked. The entry-level personal pizzas are the closest equivalent. Open the app with your address to see today's lowest prices.
    </p>

    <p>
      <strong>Is there a Pizza Hut unlimited offer?</strong> We found no unlimited pizza offer running now. If you see one advertised, check it's on Pizza Hut's own app or website and confirm it at your local store before you go.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Pizza Hut Pizza Menu: What to Order for Better Value
    </p>

    <p>
      The Pizza Hut pizza menu is built around its pan pizzas, now with the Ultimate Cheese Crust, alongside personal pizzas, sides, desserts and drinks. Value on a pizza order comes more from how you combine sizes than from the code.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">If you're ordering for...</th>
        <th className="p-4 font-bold">Better-value approach</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">One person</td>
        <td className="p-4">A personal pizza with a side, or a single-person combo</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Two people</td>
        <td className="p-4">One medium pizza plus a side often beats two personal pizzas</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Three to four people</td>
        <td className="p-4">Two medium pizzas, or a large plus sides; compare the per-person total</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">A group or party</td>
        <td className="p-4">Combos and meal deals first, then apply a coupon if it stacks</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      Pizza Hut garlic bread and breadsticks are the side people add most often. Before adding sides separately, check whether a combo already includes one. Sides and desserts are also what Pizza Hut has typically given away free in reward campaigns, such as the Classic Breadstix and Choco Volcano in the 30th-anniversary offer.
    </p>

    <p>
      <strong>Pizza Hut express deals for one:</strong> if you want something quick and cheap for yourself, the personal pizzas and single-person combos are the fastest route. They're what Pizza Hut's lowest-price campaigns have been built around.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Pizza Hut Delivery: App, Website or Food Delivery Apps?
    </p>

    <p>
      You can order Pizza Hut delivery through the Pizza Hut app, pizzahut.co.in, or food delivery apps like Swiggy and Zomato. Each channel can show different offers for the same pizza, so it's worth comparing before paying.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold"></th>
        <th className="p-4 font-bold">Pizza Hut app / website</th>
        <th className="p-4 font-bold">Food delivery apps</th>
        <th className="p-4 font-bold">Dine-in / takeaway</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Offers</td>
        <td className="p-4">Pizza Hut's own deals and codes</td>
        <td className="p-4">The app's own discounts and bank offers, plus restaurant offers</td>
        <td className="p-4">Store offers; takeaway avoids delivery charges</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Menu</td>
        <td className="p-4">Full Pizza Hut menu</td>
        <td className="p-4">Usually the full menu; check for combos</td>
        <td className="p-4">Full menu, including dine-in only items where offered</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Best for</td>
        <td className="p-4">Using a Pizza Hut coupon code</td>
        <td className="p-4">Stacking the app's discount or membership benefits</td>
        <td className="p-4">Larger groups, no delivery fee</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      <strong>Quick way to find the lowest price:</strong> build the same cart in the Pizza Hut app and one food delivery app, then compare the final amount to pay, including delivery fee, packaging charges and taxes. The cart with the bigger "discount" isn't always the cheaper one.
    </p>

    <p>
      Pizza Hut restaurants in India are run by franchise partners, including Devyani International and Sapphire Foods. That's one reason offers and menus can differ between cities and even between stores.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Pizza Hut Offers During Flipkart Big Billion Days and Amazon Great Indian Festival 2026
    </p>

    <p>
      Pizza Hut isn't part of Flipkart Big Billion Days or the Amazon Great Indian Festival, and the bank offers running on those sales apply to Flipkart and Amazon purchases, not to pizza orders. Pizza Hut deals still get busier in October, because the festive season brings cricket nights, Navratri and Dussehra get-togethers and Diwali parties.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold"></th>
            <th className="p-4 font-bold">Flipkart Big Billion Days 2026</th>
            <th className="p-4 font-bold">Amazon Great Indian Festival 2026</th>
            <th className="p-4 font-bold">Pizza Hut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Starts</td>
            <td className="border border-slate-200 p-2">9 Oct 2026 (early access 8 Oct)</td>
            <td className="border border-slate-200 p-2">8 Oct 2026</td>
            <td className="border border-slate-200 p-2">Offers change regularly in the app</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Bank offers announced</td>
            <td className="border border-slate-200 p-2">Axis Bank and ICICI Bank cards, up to 10%</td>
            <td className="border border-slate-200 p-2">SBI cards, 10% instant discount</td>
            <td className="border border-slate-200 p-2">Only offers shown in the Pizza Hut app or on the ordering app you use</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Useful for</td>
            <td className="border border-slate-200 p-2">Electronics, home, fashion</td>
            <td className="border border-slate-200 p-2">Electronics, home, fashion</td>
            <td className="border border-slate-200 p-2">Party orders, festive get-togethers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Festive ordering tips:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Order large party orders early in the evening.</strong> Peak festival nights mean longer waits, and ordering earlier or picking up takeaway can save time.
      </li>
      <li>
        <strong>Use combos for groups.</strong> For a party of six or more, a combo deal plus a coupon usually beats ordering pizzas one by one.
      </li>
      <li>
        <strong>Check the minimum order value.</strong> Many Pizza Hut deals apply only above a set amount; a side or drink can push your cart over the line for less than the discount you gain.
      </li>
    </ul>

    <p className="mt-4">
      More festive deals: <a href="https://www.couponscrew.com/festival-offers/dusshera-offers" className="text-[#5B4FBE] underline">Dussehra offers</a>, <a href="https://www.couponscrew.com/festival-offers/diwali-offers" className="text-[#5B4FBE] underline">Diwali offers</a>, <a href="https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers" className="text-[#5B4FBE] underline">Flipkart Big Billion Days offers</a> and <a href="https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] underline">Amazon Great Indian Festival offers</a>.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H1 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Pizza Hut Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a Pizza Hut coupon code that works today?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check the offers listed on this page and the offers section in the Pizza Hut app for your address. Pizza Hut codes usually need a minimum order and vary by store, so the app shows what works for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter a Pizza Hut promo code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                On the cart page of the Pizza Hut app or pizzahut.co.in, in the offers or coupon section, before you pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Pizza Hut still have ₹99 pizzas?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pizza Hut launched pan pizzas from ₹99 in April 2019 and personal pizzas from ₹79 in September 2022. We couldn't confirm either price on the current menu, so check the app for today's lowest-priced pizzas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a Pizza Hut unlimited offer?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We found no unlimited offer running now. Confirm any unlimited deal on Pizza Hut's official app or with your local store.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is it cheaper to order Pizza Hut on the app or on Swiggy or Zomato?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It depends on the day's offers. Build the same cart on both and compare the final total, including delivery and packaging charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Why are Pizza Hut offers different in my city?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pizza Hut stores in India are run by franchise partners, and offers and menus can vary by city and store.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the Ultimate Cheese Crust?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It's a crust with extra cheese that Pizza Hut India introduced on all its pan pizzas in September 2025.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            The cheapest Pizza Hut order comes from the right combo for your group size, a quick comparison between the Pizza Hut app and your food delivery app, and a Pizza Hut coupon code that fits your cart. For other food offers, see our <a href="https://www.couponscrew.com/stores/dominos-coupon-code" className="text-[#5B4FBE] font-bold underline">Domino's coupon codes</a>, <a href="https://www.couponscrew.com/stores/magicpin-coupon-code" className="text-[#5B4FBE] font-bold underline">magicpin coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/food-and-grocery" className="text-[#5B4FBE] font-bold underline">food and grocery category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Pizza Hut Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Pizza Hut Coupons", "Pan Pizza Deals", "Combo Offers", "Food Delivery Coupons", "App Exclusive Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Pizza Hut checkout for instant discounts.
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
                <span>Continue to Pizza Hut</span>
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
