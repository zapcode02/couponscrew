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
import { Coupon, IKEA_COUPONS } from './ikeaCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.ikea.com/in/en/';

export default function IkeaStore() {
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

  const coupons: Coupon[] = IKEA_COUPONS;

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
      q: 'How do I use an IKEA coupon code?',
      a: '[TODO: how-to answer specific to IKEA India checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on IKEA?',
      a: '[TODO: stacking rules specific to IKEA]'
    },
    {
      q: 'Why is my IKEA promo code not working?',
      a: '[TODO: common reasons a code might fail on IKEA]'
    },
    {
      q: 'Where can I find the best IKEA offers?',
      a: 'We keep this IKEA store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does IKEA offer free delivery?',
      a: '[TODO: IKEA free delivery policy/threshold details]'
    },
    {
      q: 'How often are IKEA coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">IKEA Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/ikea-logo_utd2ka.webp"
                      alt="IKEA Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">IKEA Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest IKEA Coupon Code and IKEA Promo Code on furniture and home essentials. Enjoy 80% OFF KNOPPSLINGA LED Lights and 66% OFF LED Batten Lights. Shop affordable mattresses, storage units, lighting, bedroom furniture, kitchen essentials, and home décor with verified IKEA offers this October.
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
                  <span>Visit IKEA</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/ikea-logo_utd2ka.webp"
                alt="IKEA Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 80%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">IKEA Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified IKEA coupon codes & offers.</p>
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
                  className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
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
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
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
    How to Use an IKEA Promo Code
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Sign in to your IKEA Family account on ikea.com/in or the IKEA app.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Add products to your cart and enter your pin code to check delivery.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Look for the field to add a discount or offer code in the cart or at checkout.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Enter the code and apply it. Check that the discount appears against the right items.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Choose home delivery or Click & Collect and pay.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>If an IKEA discount code doesn't work, check whether it excludes items already at a member or sale price, needs a minimum order, applies only in store, or is for another country.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Codes from IKEA Canada, the US or other countries won't work in India. Each IKEA market runs its own site, prices and offers. Search results often mix in IKEA Canada deals; only offers shown on ikea.com/in apply here.</span>
      </div>
    </li>
  </ul>
</div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at IKEA
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Lighting</span>
                  <span className="text-[#FF5722] font-bold">Up to 80% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Bedding</span>
                  <span className="text-[#FF5722] font-bold">From ₹2,490</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Workspace</span>
                  <span className="text-[#FF5722] font-bold">From ₹1,490</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Storage</span>
                  <span className="text-[#FF5722] font-bold">From ₹399</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kitchenware</span>
                  <span className="text-[#FF5722] font-bold">From ₹49</span>
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
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Three Tips That Save Money on IKEA Furniture
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Measure the route, not just the room. Check the lift, stairs and doorways for large flat packs, especially for wardrobes and bed frames.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Anchor tall furniture to the wall. Bookcases, wardrobes, cabinets and shoe storage can tip over if not secured. Use the wall-anchoring fittings and follow the assembly instructions, especially in homes with children.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Use IKEA's kitchen planning help. An IKEA kitchen has the most measurements to get right, and custom worktops can't be returned. IKEA offers a kitchen planning service with specialists, which is worth using before ordering.</span>
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
          IKEA Coupon Code: How to Save at IKEA India (October 2026)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An IKEA coupon code is a discount code for IKEA's online store or app, but IKEA India rarely issues public codes. Most savings come from IKEA Family member prices, points you earn on every purchase, the IKEA Sale and a 365-day return policy that lets you change your mind. Knowing how these work saves more than searching for a code.
          </p>

          <p className="italic text-sm text-gray-500">
            Last checked: 17 October 2026.
          </p>

<div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">IKEA Coupon Offers and Discounts</caption>
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
          offerType: 'SAVE 80%',
          discount: '₹99 (80% OFF)',
          highlights: 'KNOPPSLINGA LED light with 3600 lm brightness and 6500K daylight color (was ₹499).',
          eligibility: 'Valid till Nov 11 / Limited Stock'
        },
        {
          offerType: 'UP TO 66% OFF',
          discount: 'From ₹99 (Up to 66% OFF)',
          highlights: 'KNOPPSLINGA LED Batten Light with 2160 lm warm 2700K lighting (was ₹299).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 50%',
          discount: '₹99 (50% OFF)',
          highlights: 'KNOPPSLINGA LED Batten Light delivering 900-lumen warm white illumination (was ₹199).',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹2,490',
          discount: 'From ₹2,490',
          highlights: 'Cozy LÅSBRÄKEN comforter available in 240 × 220 cm size.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹1,490',
          discount: 'From ₹1,490',
          highlights: 'LENNART drawer unit in white finish for workspace paper & stationery organization.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹899',
          discount: 'From ₹899',
          highlights: 'LEN cot fitted sheets (2-pack) designed for 60 × 120 cm baby cots.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹399',
          discount: 'From ₹399',
          highlights: 'Compact GREJIG shoe rack designed for small rooms and easy assembly.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹49',
          discount: 'From ₹49 / piece',
          highlights: 'Sturdy transparent POKAL espresso glass suitable for daily use.',
          eligibility: 'Min. Purchase 4 Pcs'
        },
        {
          offerType: 'BEDROOM & HOME',
          discount: 'Special Prices',
          highlights: 'Furniture essentials including sofas, beds, chairs, study tables, and dining sets.',
          eligibility: 'All Users'
        },
        {
          offerType: 'MATTRESSES & SETS',
          discount: 'Special Deals',
          highlights: 'Modern bedroom sets, wardrobes, storage solutions, and multi-size mattresses.',
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

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            How IKEA India Discounts Actually Work
          </p>

          <p>
            IKEA's model is different from most online stores. Instead of frequent coupons, it uses member pricing and loyalty points. Here's what's available.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Saving</th>
                  <th className="p-4 font-bold">How you get it</th>
                  <th className="p-4 font-bold">Worth knowing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">IKEA Family member prices</td>
                  <td className="p-4">Join IKEA Family (free)</td>
                  <td className="p-4">Selected products at lower prices, in store and online</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">IKEA Family points</td>
                  <td className="p-4">1 point for every ₹50 spent</td>
                  <td className="p-4">250 points = ₹250 off home furnishings</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">IKEA Sale early access</td>
                  <td className="p-4">IKEA Family members</td>
                  <td className="p-4">Members get in before everyone else</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Restaurant offers</td>
                  <td className="p-4">IKEA Family</td>
                  <td className="p-4">200 points = ₹200 off at the Swedish Restaurant</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Damage protection</td>
                  <td className="p-4">IKEA Family</td>
                  <td className="p-4">14 days of cover for damage while you transport or assemble items yourself</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">IKEA promo code</td>
                  <td className="p-4">Occasional campaigns</td>
                  <td className="p-4">Check the terms; exclusions are common</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            What IKEA Family Points Are Worth
          </p>

          <p>
            At 1 point per ₹50, you need to spend ₹12,500 to earn 250 points, which gives ₹250 off. That's roughly 2% back. It adds up on a big furnishing order, but member prices on selected products usually save more. For example, IKEA was listing a bathrobe at ₹1,990 for members against ₹2,990 regular in October 2026.
          </p>

          <p>
            Join IKEA Family before you buy: it's free, and member prices and points only apply once you're signed in.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The 365-Day Return Policy: Your Biggest Safety Net
    </p>

    <p>
      IKEA India gives you 365 days to return or exchange most purchases for a full refund, including items you've opened and assembled, as long as you have the receipt. Food, plants, custom-made worktops and gift cards are excluded.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      The detail most people miss is how you're refunded:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Item returned...</th>
            <th className="p-4 font-bold">Refund goes to</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">In original packaging</td>
            <td className="p-4">Your original payment method</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Not in original packaging</td>
            <td className="p-4">An IKEA refund card</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      So if you're unsure about a large piece, keep the box until you're sure. Otherwise your money comes back as IKEA store credit, not cash. Refunds are processed within 21 business days.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Other return rules:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Assembled furniture</strong> can be returned at any store. If IKEA collects it, you must disassemble and pack it, and a pickup charge applies.
      </li>
      <li>
        <strong>Online orders:</strong> contact customer support (9 am to 9 pm) or chat, send photos and your invoice, and IKEA arranges a doorstep pickup if approved.
      </li>
      <li>
        <strong>Smaller stores:</strong> purchases from the Worli (Mumbai), Pacific Mall (Delhi) and Essensai (Bengaluru) stores are returned through pickup. Pacific Mall and Saket don't take larger furniture back in store.
      </li>
      <li>
        <strong>Damaged delivery:</strong> raise a claim within 7 days of delivery.
      </li>
    </ul>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      IKEA Mattress Exchange
    </p>

    <p>
      IKEA's "Love it or exchange it" promise lets you swap an IKEA mattress once within 365 days. You must sleep on it for at least 30 days first, and it must be clean and unstained. The replacement must come from the full-price range; you pay or get back any difference on a refund card.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Where Can You Buy IKEA in India?
    </p>

    <p>
      You can buy IKEA online through ikea.com/in and the IKEA app, by phone, or in IKEA stores. IKEA runs large stores in Hyderabad, Navi Mumbai and Bengaluru, and smaller city stores in Mumbai (Worli) and Delhi (Pacific Mall and Saket, which opened in July 2026).
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Channel</th>
            <th className="p-4 font-bold">Coverage</th>
            <th className="p-4 font-bold">Good for</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Large stores</td>
            <td className="p-4">Hyderabad, Navi Mumbai, Bengaluru</td>
            <td className="p-4">Full range, seeing and testing furniture</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">City stores</td>
            <td className="p-4">Mumbai (Worli), Delhi (Pacific Mall, Saket)</td>
            <td className="p-4">Browsing, smaller items, ordering larger ones</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">IKEA online</td>
            <td className="p-4">Many districts in Karnataka, Maharashtra, Telangana, Andhra Pradesh; Tamil Nadu (Chennai, Coimbatore, Madurai, Salem)</td>
            <td className="p-4">Delivery to your door; enter your pin code to check</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Phone shopping</td>
            <td className="p-4">Shopping &amp; Design helpline 1800 419 4532</td>
            <td className="p-4">Help planning bigger purchases</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      IKEA online deliveries in Tamil Nadu began in January 2026, with more than 6,400 products and delivery in three to seven days. IKEA has also announced plans to grow from six stores to 30 in India.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Shopping IKEA Furniture by Room
    </p>

    <p>
      Price is only half of the decision with IKEA furniture. Flat-pack furniture saves money on shipping and storage, but you pay for it in measuring, assembly and space planning. Here's what to check in each room.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Room</th>
            <th className="p-4 font-bold">Popular buys</th>
            <th className="p-4 font-bold">Check before ordering</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">IKEA bedroom</td>
            <td className="p-4">IKEA bed frames, IKEA mattress, wardrobes</td>
            <td className="p-4">Mattress size matches the bed frame; room for doors and drawers to open</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Kids' room</td>
            <td className="p-4">IKEA bunk beds, study tables</td>
            <td className="p-4">Age guidance and ceiling height on the product page</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Study / work</td>
            <td className="p-4">IKEA desk, IKEA study table</td>
            <td className="p-4">Desk depth for your monitor; chair height</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Living room</td>
            <td className="p-4">IKEA coffee table, TV units, shelves</td>
            <td className="p-4">Space to walk around; cable access</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Dining</td>
            <td className="p-4">IKEA dining table, chairs</td>
            <td className="p-4">Leave space to pull chairs out behind each seat</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Kitchen</td>
            <td className="p-4">IKEA kitchen units, IKEA cabinets, worktops</td>
            <td className="p-4">Measure walls, plumbing and electrical points; custom worktops can't be returned</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Entrance</td>
            <td className="p-4">IKEA shoe storage</td>
            <td className="p-4">Depth fits your hallway; wall anchoring</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Windows</td>
            <td className="p-4">IKEA curtains, blinds</td>
            <td className="p-4">Width and drop measured from the rail, not the window</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            IKEA Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there an IKEA coupon code for India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                IKEA India rarely runs public coupon codes. The dependable savings are IKEA Family member prices, points (1 point per ₹50 spent) and the IKEA Sale. Check this page and ikea.com/in for any current codes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is IKEA Family free in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Joining is free, and you get member prices on selected products, points, early access to the IKEA Sale and 14-day damage protection on items you transport or assemble yourself.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is IKEA India's return policy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You have 365 days to return or exchange most items for a full refund, even if opened or assembled, with a receipt. Items in original packaging are refunded to your payment method; others to an IKEA refund card.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I return an IKEA mattress?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can exchange it once within 365 days, after using it for at least 30 days, if it's clean and unstained.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Do IKEA Canada promo codes work in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. IKEA India has its own website, prices and offers. Only codes valid on ikea.com/in work here.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does IKEA deliver to my city?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                IKEA delivers to many districts in Karnataka, Maharashtra, Telangana, Andhra Pradesh and Tamil Nadu, plus areas around its stores. Enter your pin code on ikea.com/in to check.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where are IKEA stores in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Large stores are in Hyderabad, Navi Mumbai and Bengaluru, with city stores in Mumbai (Worli) and Delhi (Pacific Mall and Saket).
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            An IKEA coupon code is a bonus. Joining IKEA Family before you buy, keeping the box until you're sure and planning around the 365-day return window will save you more. For more furniture offers, see our <a href="https://www.couponscrew.com/stores/pepperfry-coupon-code" className="text-[#5B4FBE] font-bold underline">Pepperfry coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/furniture" className="text-[#5B4FBE] font-bold underline">furniture category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular IKEA Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["IKEA Coupons", "IKEA Family Offers", "Furniture Deals", "Home Furnishings", "IKEA Sale", "CouponsCrew Home"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at IKEA checkout for instant discounts.
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
                <span>Continue to IKEA</span>
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
