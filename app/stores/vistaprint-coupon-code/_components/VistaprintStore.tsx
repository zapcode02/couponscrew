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
import { Coupon, VISTAPRINT_COUPONS } from './vistaprintCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.vistaprint.in';

export default function VistaprintStore() {
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

  const coupons: Coupon[] = VISTAPRINT_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Vistaprint Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/vista-logo_wwjono.webp"
                      alt="Vistaprint Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Vistaprint Coupon Code – Get 100 Premium Visiting Cards for ₹200
                      </h1>
                    
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Create professional business cards for less with the latest Vistaprint Coupon Code. Get 100 premium visiting cards for just ₹200 and customise them with your logo, contact details, and branding. Use a Vistaprint Discount Code to enjoy verified online savings and order high-quality prints at an affordable price.
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
                  <span>Visit Vistaprint</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#0468D7]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/vista-logo_wwjono.webp"
                alt="Vistaprint Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Vistaprint Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Vistaprint coupon codes & offers.</p>
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
                                <span>Valid on select print, signage, and design categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected products and quantity tiers.</span>
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
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <div className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Shop from CouponsCrew and Save on Vistaprint
  </div>

  <div className="text-xs text-[#4A4A6A] space-y-3">
    <div className="font-normal">
      CouponsCrew lists Vistaprint offers only when we can see them on vistaprint.in or on the offering bank's official page, with the terms and expiry date. If no public code is live, we say so, instead of filling this page with codes that fail at checkout.
    </div>

    <div className="font-bold text-[#2C2C40] pt-1">
      To save on your next Vistaprint order:
    </div>

    <ol className="space-y-2.5 list-decimal pl-4 font-normal text-[#4A4A6A]">
      <li>
        Check the offers listed on this page, then confirm them on vistaprint.in.
      </li>
      <li>
        Get your file print-ready using the checklist above, so you only pay once.
      </li>
      <li>
        Compare two or three quantities in the cart to find the best price per piece.
      </li>
      <li>
        Order early for festive prints and pick standard delivery.
      </li>
    </ol>

    <div className="font-normal pt-1">
      Setting up a new business online too? See our <a href="https://www.couponscrew.com/stores/hostinger-coupon-code" className="text-indigo-600 hover:underline font-semibold">Hostinger coupon codes</a> for website hosting.
    </div>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Vistaprint Business Print Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Business Cards, Signage & More
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
                Top Categories at Vistaprint
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Business Cards</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Marketing Materials</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Signage & Displays</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Apparel & Promo</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Custom Stationery</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
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
          Vistaprint Coupon Code: Save on Business Cards, Flyers and Custom Prints in India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Vistaprint coupon code is a promo code you enter at checkout on vistaprint.in to lower the price of business cards, flyers, posters, stickers, T-shirts and other custom prints. The code is only part of the saving. On print orders, the quantity you choose, the paper you pick and getting your file right the first time usually matter more.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Vistaprint Offers and Discount List</caption>
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
          offerType: '100 VISITING CARDS @ ₹200',
          discount: '₹200 for 100 Cards',
          highlights: '100 premium-quality visiting cards customizable with logo & contact details.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹850',
          discount: 'From ₹850',
          highlights: 'Custom hoodies, jackets, and team wear with your own logo or artwork.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹2,500',
          discount: 'From ₹2,500',
          highlights: 'Premium Layflat Photo Albums for weddings, trips, and family celebrations.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹1,005',
          discount: 'From ₹1,005',
          highlights: "Men's Half Sleeve Dress Shirts with custom company logo embroidery.",
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹980',
          discount: 'From ₹980',
          highlights: "Men's Dress Shirts with custom embroidery for a professional corporate look.",
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹980',
          discount: 'From ₹980',
          highlights: "Women's Embroidered Dress Shirts in multiple colors and sizes.",
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹890',
          discount: 'From ₹890',
          highlights: 'Custom Self-Inking Stamps (64mm × 44mm) for office and business needs.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹390',
          discount: 'From ₹390',
          highlights: 'Bamboo Fiber Eco Mugs printed with company logo or custom graphics.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹200',
          discount: 'From ₹200',
          highlights: 'Sticker Singles cut individually for custom product branding & labels.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹190',
          discount: 'From ₹190',
          highlights: 'Sheet Stickers in various shapes, designs, and finish options.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹170',
          discount: 'From ₹170',
          highlights: 'Custom Window Stickers for shop fronts, offices, and promo displays.',
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



          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Is This the Official Vistaprint India Site?
          </p>

          <p>
            The official Indian store is <strong>vistaprint.in</strong>. If you searched "vistaprintindia" or "vista printed" and landed somewhere else, check the address before uploading your logo or paying. Vistaprint has operated in India since June 2011, when it bought the Mumbai-based online printer PrintBell, which became Vistaprint India. Its parent company is Cimpress.
          </p>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            How to Use a Vistaprint Promo Code
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Design or upload your artwork on vistaprint.in and choose the quantity, paper and finish.</li>
            <li>Review the digital proof carefully. Check spelling, phone numbers and that nothing sits too close to the edge.</li>
            <li>Add the item to your cart.</li>
            <li>Find the promo code field in the cart and enter the code exactly as issued.</li>
            <li>Confirm the discount appears before you move to payment. Some codes apply only to certain products or above a minimum order value.</li>
            <li>Note the delivery date shown at checkout before you pay.</li>
          </ol>

          <p>
            If a Vistaprint discount code won't apply, check whether it's limited to one product type (a business card code won't work on T-shirts), whether your cart meets the minimum, and whether it has expired.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How Print Pricing Works (And Where the Real Savings Are)
    </p>

    <p>
      On custom printing, the price per piece falls as the quantity rises, because setup is a fixed cost spread over the whole run. That's why a small increase in quantity often adds very little to the total. It's also why ordering "just in case" extras can waste money if the details on the print change.
    </p>

      <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Your decision</th>
        <th className="p-4 font-bold">How it affects the price</th>
        <th className="p-4 font-bold">What to do</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Quantity</td>
        <td className="p-4">Per-piece cost falls as quantity rises</td>
        <td className="p-4">Order what you'll use before details change (phone, address, offer)</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Paper and finish</td>
        <td className="p-4">Thicker stock, special coatings and premium finishes cost more</td>
        <td className="p-4">Upgrade only for pieces people keep, like business cards</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Print sides</td>
        <td className="p-4">Printing both sides usually costs more</td>
        <td className="p-4">Use the back for something useful: a map, QR code or services</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Delivery speed</td>
        <td className="p-4">Faster delivery costs more</td>
        <td className="p-4">Order early and choose standard delivery</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Reprints due to errors</td>
        <td className="p-4">You pay twice</td>
        <td className="p-4">Check the proof slowly before ordering</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      The last row is the one most people underestimate. A misspelt email address on 500 flyers costs more than any coupon saves.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Everything to Market Your Business
    </p>

    <p>
      Vistaprint's range covers most printed and branded material a small business needs, from the first business card to event signage and staff T-shirts. Here's what to check for each product before ordering.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Product</th>
        <th className="p-4 font-bold">Best for</th>
        <th className="p-4 font-bold">Check before ordering</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint business cards</td>
        <td className="p-4">Networking, client meetings, shop counters</td>
        <td className="p-4">Paper thickness, both-side printing, QR code size</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint flyers</td>
        <td className="p-4">Local promotion, events, door-to-door</td>
        <td className="p-4">Size, paper weight, whether one or both sides</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint poster print</td>
        <td className="p-4">Shop windows, events, notice boards</td>
        <td className="p-4">Image resolution at the final poster size</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint stickers</td>
        <td className="p-4">Packaging, labels, giveaways</td>
        <td className="p-4">Shape, indoor or outdoor use, finish</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint T-shirts</td>
        <td className="p-4">Staff uniforms, events, team merchandise</td>
        <td className="p-4">Print area, size mix, fabric type</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint calendar</td>
        <td className="p-4">Year-end client gifts</td>
        <td className="p-4">Month layout, start month, photo quality</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Vistaprint booklet</td>
        <td className="p-4">Menus, catalogues, price lists</td>
        <td className="p-4">Page count, binding type, page order in the proof</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Envelope printing</td>
        <td className="p-4">Invoices, official letters, invitations</td>
        <td className="p-4">Envelope size matches your letterhead or card</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Invitations and cards</td>
        <td className="p-4">Weddings, launches, festive greetings</td>
        <td className="p-4">Names and dates, envelope pairing</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Vistaprint Business Cards
    </p>

    <p>
      Business cards are what most people come to Vistaprint for, and they're the product where paper choice shows most, because people hold them. A thicker card with a clean design does more than a thin card with every detail crammed in. Keep the front simple (name, role, business, phone, email) and use the back for a QR code linking to your website, WhatsApp Business or Google Business Profile.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Vistaprint Flyers and Posters
    </p>

    <p>
      For flyers, a lighter paper is fine if they're handed out and thrown away; a heavier paper helps if they're left on counters. For a Vistaprint poster, the image quality matters more than the paper: a photo that looks sharp on your phone can look blurry at A2 size. Use the highest-resolution image you have and zoom into the proof at full size.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Vistaprint Calendars and Invitations
    </p>

    <p>
      Calendars, festive invitations and Vistaprint cards for greetings are seasonal. If you're looking for a Vistaprint invitation coupon for Diwali, a wedding or a New Year event, remember that the calendar's start month and the event date on an invitation are the two things people most often get wrong. Double-check them in the proof.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      More Premium and Personalization
    </p>

    <p>
      Premium finishes and personalised products cost more, so spend on them where they're noticed. A client keeps a business card and a calendar; nobody keeps a flyer.
    </p>

   <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Where premium is worth it</th>
        <th className="p-4 font-bold">Where standard is fine</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Business cards for client-facing roles</td>
        <td className="p-4">Flyers for one-time events</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Year-end calendars and client gifts</td>
        <td className="p-4">Internal notices and posters</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Wedding and launch invitations</td>
        <td className="p-4">Price lists that change often</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Packaging stickers for a product brand</td>
        <td className="p-4">Short-run test prints</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Personalization tips:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Use one design, change the details.</strong> For team business cards, keep the layout identical and change only the name, role and number for each person. It looks consistent and is quicker to proof.
      </li>
      <li>
        <strong>Match your brand colours across products.</strong> Use the same logo file and colour codes on cards, flyers and T-shirts. Colours on screen and on paper can differ slightly, so compare with a previous print if you have one.
      </li>
      <li>
        <strong>Get design help if you don't have a designer.</strong> Vistaprint offers templates, and it also owns the design marketplace 99designs for businesses that want a custom logo or brand identity.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Before You Upload: Print-Ready File Checklist
    </p>

    <p>
      Most print complaints trace back to the file, not the printer. Run through this before ordering; it's the single cheapest way to save money on Vistaprint.
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Resolution:</strong> use images at 300 DPI at the final print size. Logos taken from a website are usually too low.
      </li>
      <li>
        <strong>Bleed:</strong> extend background colours and images slightly past the trim line so no white edge shows after cutting.
      </li>
      <li>
        <strong>Safe zone:</strong> keep text and logos away from the edges. Anything too close can get trimmed.
      </li>
      <li>
        <strong>Colour:</strong> printing uses CMYK, so bright on-screen colours can print slightly duller. Very dark blues and blacks can look similar on paper.
      </li>
      <li>
        <strong>Fonts:</strong> if you upload a PDF, embed or outline the fonts so they don't get substituted.
      </li>
      <li>
        <strong>Proof:</strong> read every line on the proof, including the small print, and check QR codes by scanning them from the proof on another screen.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Vistaprint and the Flipkart Big Billion Days and Amazon Great Indian Festival 2026
    </p>

    <p>
      Vistaprint orders are placed on vistaprint.in, so Flipkart and Amazon sale prices and their bank offers don't apply to them. The festive season still matters for Vistaprint buyers, though: October to December is when businesses order Diwali greeting cards, client gifts, invitations and next year's calendars, all at the same time.
    </p>

    <div className="overflow-x-auto my-4">
      <table className="w-full text-left border-collapse border border-slate-200 text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="border border-slate-200 p-2"></th>
            <th className="border border-slate-200 p-2">Flipkart Big Billion Days 2026</th>
            <th className="border border-slate-200 p-2">Amazon Great Indian Festival 2026</th>
            <th className="border border-slate-200 p-2">Vistaprint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Starts</td>
            <td className="border border-slate-200 p-2">9 Oct 2026 (early access 8 Oct)</td>
            <td className="border border-slate-200 p-2">8 Oct 2026</td>
            <td className="border border-slate-200 p-2">Orders anytime on vistaprint.in</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Bank offers announced</td>
            <td className="border border-slate-200 p-2">Axis Bank and ICICI Bank cards, up to 10%</td>
            <td className="border border-slate-200 p-2">SBI cards, 10% instant discount</td>
            <td className="border border-slate-200 p-2">Only offers shown on vistaprint.in apply</td>
          </tr>
          <tr>
            <td className="border border-slate-200 p-2 font-medium">Useful for</td>
            <td className="border border-slate-200 p-2">Office equipment, printers, gifting products</td>
            <td className="border border-slate-200 p-2">Office supplies, gifting products</td>
            <td className="border border-slate-200 p-2">Custom printed cards, calendars, invitations, merchandise</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Festive Print Planner
    </p>

    <p>
      Order festive prints early. Seasonal demand is high, and delivery delays are a common complaint in recent vistaprint.in reviews on Trustpilot (2.5 out of 5 from 271 reviews when we checked). Reviews also include praise for print quality and on-time delivery, but leaving a buffer is the safe choice.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">What you're printing</th>
        <th className="p-4 font-bold">Needed by</th>
        <th className="p-4 font-bold">Suggested order window</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Diwali greeting cards and invitations</td>
        <td className="p-4">Before Diwali</td>
        <td className="p-4">Early to mid October</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Client gift stickers and packaging labels</td>
        <td className="p-4">Before gifting starts</td>
        <td className="p-4">Early October</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">2027 calendars</td>
        <td className="p-4">Late December</td>
        <td className="p-4">November</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">New Year event invitations and posters</td>
        <td className="p-4">Late December</td>
        <td className="p-4">Early December</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      Check the delivery date at checkout for your pin code and choose a date comfortably before your deadline.
    </p>

    <p className="mt-4">
      Related: <a href="https://www.couponscrew.com/festival-offers/diwali-offers" className="text-[#5B4FBE] underline">Diwali offers</a>, <a href="https://www.couponscrew.com/festival-offers/dusshera-offers" className="text-[#5B4FBE] underline">Dussehra offers</a>, <a href="https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers" className="text-[#5B4FBE] underline">Flipkart Big Billion Days offers</a>, <a href="https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] underline">Amazon Great Indian Festival offers</a> and our <a href="https://www.couponscrew.com/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] underline">BBD vs GIF comparison</a>.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H1 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Vistaprint Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a working Vistaprint coupon code today?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check the offers listed on this page and confirm them on vistaprint.in. Vistaprint codes are often product-specific or need a minimum order, so read the terms before applying one.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter a Vistaprint promo code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the promo code field in your cart on vistaprint.in, before you pay. The discount should show in the order total.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is vistaprint.in the official Vistaprint site in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Vistaprint has run its Indian business since acquiring PrintBell in June 2011.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use Flipkart or Amazon bank offers on Vistaprint?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Those offers apply to purchases on Flipkart and Amazon. Only offers shown on vistaprint.in apply to Vistaprint orders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I avoid a bad print from Vistaprint?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Upload high-resolution artwork, keep text away from the edges, add bleed to backgrounds, and read the proof line by line before ordering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                When should I order Diwali cards and 2027 calendars?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Order Diwali cards and invitations in early to mid October, and 2027 calendars in November, to leave room for delivery delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can Vistaprint help with design?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. You can start from Vistaprint's templates, and Vistaprint also owns 99designs for custom logo and brand design.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            The best Vistaprint deal comes from a correct file, the right quantity and an early order. A Vistaprint coupon code on top of that is a bonus, so check this page for current offers before you check out.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Vistaprint Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Vistaprint Coupons", "Business Card Offers", "Custom Printing Deals", "Flyers & Posters", "Diwali Cards", "Corporate Gifts", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Vistaprint checkout for instant discounts.
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
                <span>Continue to Vistaprint</span>
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
