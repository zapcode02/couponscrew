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
import { Coupon, MYPROTEIN_COUPONS } from './myproteinCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.myprotein.in/';

export default function MyproteinStore() {
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

  const coupons: Coupon[] = MYPROTEIN_COUPONS;

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
      q: 'How do I use a Myprotein discount code?',
      a: '[TODO: how-to answer specific to Myprotein checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Myprotein?',
      a: '[TODO: stacking rules specific to Myprotein]'
    },
    {
      q: 'Why is my Myprotein discount code not working?',
      a: '[TODO: common reasons a code might fail on Myprotein]'
    },
    {
      q: 'Where can I find the best Myprotein offers?',
      a: 'We keep this Myprotein store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Myprotein offer free shipping?',
      a: '[TODO: Myprotein free shipping policy/threshold details]'
    },
    {
      q: 'How often are Myprotein coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Myprotein Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/myprotein-logo_beyed3.webp"
                      alt="Myprotein Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Myprotein Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest MyProtein Coupon Code and MyProtein Promo Code. Enjoy up to 50% OFF vitamins & recovery supplements and 25% OFF the HYROX range. Shop whey protein, creatine, mass gainers, wellness products, and sports nutrition with verified MyProtein offers this October 2026.
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
                  <span>Visit Myprotein</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222458/myprotein-logo_beyed3.webp"
                alt="Myprotein Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">9+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Myprotein Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Myprotein coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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

              {/* Dynamic Bullet Points List */}
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
    How to Use a MyProtein Promo Code
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Open myprotein.co.in or the MyProtein app and sign in.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Add your products to the basket. Pick size and flavour carefully; flavour availability varies by size.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Go to the basket and find the field for a discount or promo code.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Enter the code and apply it.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Check that the discount appears, and whether it replaced the automatic spend-more discount or stacked with it. Keep whichever gives the lower total.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Choose delivery and pay.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>If a MyProtein offer code doesn't work, the usual reasons are: it's from another country's MyProtein site (very common, see below), it has expired, it excludes items already on sale, or your basket is below the code's minimum.</span>
      </div>
    </li>
  </ul>
</div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Myprotein
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Vitamins & Recovery</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">HYROX Range</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Mass Gainer</span>
                  <span className="text-[#FF5722] font-bold">Up to 13% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Impact Whey</span>
                  <span className="text-[#FF5722] font-bold">Up to 8% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Creatine</span>
                  <span className="text-[#FF5722] font-bold">From ₹299</span>
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
    Beware of Fake and Foreign MyProtein Codes
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>Search results for MyProtein codes are full of referral codes posted on unrelated sites, podcast listings and help-desk pages. Many of these are for the UK store and promise a reward in pounds, which won't work on myprotein.co.in. Each MyProtein country store runs its own codes.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span>A genuine MyProtein coupon for India will show its value in rupees and be listed on myprotein.co.in, in the app, in a MyProtein email, or on a page like this one with its terms.</span>
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
          MyProtein Coupon Code: Offers on Impact Whey, Creatine and More (India)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A MyProtein coupon code is a discount code you apply at checkout on myprotein.co.in or the MyProtein app to reduce the price of whey protein, creatine, snacks and other nutrition products. In October 2026, MyProtein India also runs automatic cart discounts: an extra 5% off orders above ₹5,000 and 10% off above ₹10,000, so the size of your order affects the saving as much as any code.
          </p>

          <p className="italic text-sm text-gray-500">
            Prices on this page were checked on myprotein.co.in on 17 October 2026.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Myprotein Offers and Discount List</caption>
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
      {coupons.map((row, i) => (
        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
          <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
            {row.type}
          </td>
          <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
            {row.badge}
          </td>
          <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
            {row.description}
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
              {row.userType}
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
            Current MyProtein Offers at a Glance
          </p>

          <p>
            These offers were showing on MyProtein India product pages when we checked. They apply automatically or at checkout; the exact terms are on the site.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Offer</th>
                  <th className="p-4 font-bold">What you get</th>
                  <th className="p-4 font-bold">Condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Spend-more discount</td>
                  <td className="p-4">Extra 5% off</td>
                  <td className="p-4">Orders above ₹5,000</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Spend-more discount</td>
                  <td className="p-4">Extra 10% off</td>
                  <td className="p-4">Orders above ₹10,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Free gift</td>
                  <td className="p-4">Free crew socks</td>
                  <td className="p-4">Orders above ₹7,000</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">App offer</td>
                  <td className="p-4">Free delivery and app-only offers</td>
                  <td className="p-4">Order through the MyProtein app</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Returns</td>
                  <td className="p-4">30-day returns</td>
                  <td className="p-4">All orders</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            The ₹5,000 Line: Do the Maths First
          </p>

          <p>
            A 1kg pack of Impact Whey Protein was ₹4,599 when we checked, which is ₹401 below the ₹5,000 threshold for the extra 5% off. If you were going to buy something else soon, such as a shaker or creatine, adding it to the same order can cost very little extra once the 5% applies.
          </p>

          <p>
            Spend over ₹10,000 only if you'll actually use the products before they expire. Splitting a bulk order with a gym partner is a common way to reach the 10% tier without overbuying.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Impact Whey vs Impact Whey Isolate: Which Should You Buy?
    </p>

    <p>
      Impact Whey Protein is the standard MyProtein whey protein, listed at over 80% protein per serving. Impact Whey Isolate, the MyProtein whey isolate, is the more filtered version, listed at over 90% protein with 1% fat. The isolate costs more per kilo.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">Impact Whey Protein</th>
            <th className="p-4 font-bold">Impact Whey Isolate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Protein (as listed)</td>
            <td className="p-4">Over 80% per serving</td>
            <td className="p-4">Over 90% per serving, 1% fat</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Price checked</td>
            <td className="p-4">₹4,599 for 1kg</td>
            <td className="p-4">₹2,499 for 250g</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Sizes</td>
            <td className="p-4">1kg, 2.5kg, 5kg</td>
            <td className="p-4">250g, 1kg</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Flavours</td>
            <td className="p-4">17, including Kesar Badam, Kulfi and Keventers flavours</td>
            <td className="p-4">3 (Vanilla, Mango Matcha, Matcha Blueberry)</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Best for</td>
            <td className="p-4">Everyday protein at a lower price</td>
            <td className="p-4">Buyers who want more protein and less fat per scoop</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Cost per 100g of Protein
    </p>

    <p>
      Comparing price per pack is misleading when protein content differs. Here's the cost of protein itself, using the prices and minimum protein percentages above:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Product</th>
            <th className="p-4 font-bold">Price</th>
            <th className="p-4 font-bold">Protein in the pack (at least)</th>
            <th className="p-4 font-bold">Cost per 100g of protein (at most)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Impact Whey Protein, 1kg</td>
            <td className="p-4">₹4,599</td>
            <td className="p-4">800g</td>
            <td className="p-4">about ₹575</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Impact Whey Isolate, 250g</td>
            <td className="p-4">₹2,499</td>
            <td className="p-4">225g</td>
            <td className="p-4">about ₹1,111</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      On these numbers, my protein Impact Whey gives you protein at roughly half the cost of a small isolate pack. The isolate makes sense if you specifically want the extra filtering; for most people it's the larger standard pack that offers better value. Larger packs of the isolate will narrow the gap, so check the per-kg price shown under each size.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Flavours Made for India
    </p>

    <p>
      MyProtein has added Indian flavours to its range, including Kesar Badam, Kulfi, Date Delight (Khajoor Shake) and Nimbu Pani, plus flavours co-branded with Keventers. If you're unsure, a smaller pack in a new flavour is a cheaper experiment than 2.5kg of something you don't like.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      MyProtein Creatine
    </p>

    <p>
      MyProtein creatine monohydrate was ₹299 for a 100g pack when we checked (down from ₹699), and it also comes in 250g and 500g. Flavours are Unflavoured, Blue Raspberry and Nimbu Pani. MyProtein also sells a separate Creapure® creatine, made with a branded creatine source, at a different price.
    </p>

    <p>
      The 100g pack is a low-cost way to try it. If you already take creatine regularly, compare the per-kg price of the 250g and 500g packs before reordering.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      MyProtein Peanut Butter
    </p>

    <p>
      MyProtein sells peanut butter and whey-blended nut butters in several of its country stores, but we couldn't confirm a MyProtein peanut butter on the India store when we checked. Availability changes, so search on myprotein.co.in before buying elsewhere. Several Indian brands sell peanut butters with similar-sounding names, so check the brand name on the jar if you're specifically after MyProtein.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How to Make Sure Your MyProtein Is Genuine
    </p>

    <p>
      Counterfeit supplements are a concern for Indian buyers, which is why MyProtein India says each product carries a unique ID and QR code that you can use to check the batch number and verify it's genuine.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Before you open a tub:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Scan the QR code on the pack and match the batch details.
      </li>
      <li>
        Check for an FSSAI licence number on the label. MyProtein itself advises buyers to look for it.
      </li>
      <li>
        Buy from myprotein.co.in, the MyProtein app, or MyProtein's official listings on marketplaces. MyProtein sells some smaller packs through Amazon, Flipkart and HealthKart.
      </li>
      <li>
        Be wary of prices far below the official site from unknown sellers.
      </li>
      <li>
        Check the seal and print quality. Smudged labels, spelling errors or a broken seal are reasons to return it.
      </li>
    </ul>

    <p>
      MyProtein is a British brand, now operated in India through its own subsidiary, THG India, which also started manufacturing in the country.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Before You Buy: A Quick Health Note
    </p>

    <p>
      Protein powder and creatine are supplements, not medicine. This page explains prices and offers, and it isn't nutrition or medical advice. If you have a medical condition, take regular medication, are pregnant, or are buying for a teenager, speak to a doctor or registered dietitian before starting. Follow the serving instructions on the pack.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            MyProtein Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What MyProtein discount is available right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                When we checked on 17 October 2026, MyProtein India was giving an extra 5% off orders above ₹5,000 and 10% off above ₹10,000, free crew socks above ₹7,000, and free delivery on the app.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where do I enter a MyProtein discount code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the basket on myprotein.co.in or the MyProtein app, in the discount code field, before you pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Why doesn't my MyProtein referral code work?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most referral codes found online are for the UK store. Codes only work on the MyProtein country site they were issued for.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What's the difference between Impact Whey and Impact Whey Isolate?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Impact Whey Protein is listed at over 80% protein per serving. Impact Whey Isolate is made from 100% whey protein isolate and listed at over 90% protein with 1% fat. The isolate costs more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How much is MyProtein Impact Whey in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The 1kg pack of Impact Whey Protein was ₹4,599 (including taxes) on 17 October 2026, down from ₹4,999.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I return MyProtein products?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                MyProtein India lists 30-day returns on all orders. Check the returns page for conditions, such as whether opened products qualify.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I check if MyProtein whey is original?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scan the QR code on the pack to check the batch number, look for the FSSAI licence number, and buy from the official site, app or official marketplace listings.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A MyProtein coupon code helps, but the bigger savings come from building your basket around the ₹5,000 and ₹10,000 thresholds and comparing cost per gram of protein instead of pack price. For other sports nutrition offers, see our <a href="https://www.couponscrew.com/stores/muscleblaze-coupon-code" className="text-[#5B4FBE] font-bold underline">MuscleBlaze coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/exercise-and-fitness" className="text-[#5B4FBE] font-bold underline">exercise and fitness category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular MyProtein Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["MyProtein Coupons", "Impact Whey Offers", "Creatine Deals", "Fitness Nutrition", "App Exclusive Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Myprotein checkout for instant discounts.
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
                <span>Continue to Myprotein</span>
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
