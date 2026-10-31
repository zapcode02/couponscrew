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
  RefreshCw,
  ArrowRight,
  TrendingUp,
  Info,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, AMAZON_COUPONS } from './amazonCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl';


export default function AmazonStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const coupons: Coupon[] = AMAZON_COUPONS;

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

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ==========================================
          BREADCRUMBS & HERO CONTAINER
          ========================================== */}
      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#4A4A6A] select-none mb-6">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#5B4FBE] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#5B4FBE] font-semibold">Amazon Coupon Code</span>
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
                    <NextImage
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg"
                      alt="Amazon Logo"
                      width={112}
                      height={112}
                      sizes="112px"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Amazon Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the latest Amazon coupon code and Amazon discount code to save big during the Amazon Great Indian Festival. Grab up to 92% OFF on Nillkin iPhone cases, 91% OFF on women's kurtis, 84% OFF on Safari backpacks and BRUTON running shoes, plus huge discounts on Samsung Galaxy phones, JBL earbuds, Apple iPhone 16, washing machines, and more. Apply a verified Amazon coupon code or discount code at checkout to unlock extra savings on eligible orders.
                  </p>
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
                  <span>Visit Amazon</span>
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

            {/* Promo Banner Panel (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563]"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786254328/amazon-coupon-code_jrseqd.webp"
                alt="Amazon Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full"
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
            <div className="w-11 h-11 bg-[#f0eeff] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">120+</div>
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
              <RefreshCw size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Daily</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Fresh Codes</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#f0eeff] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Amazon Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Amazon coupon codes & offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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
                          {/* Details List Dynamic Rendering */}
{isExpanded && (
  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
    {coupon.points && coupon.points.length > 0 ? (
      coupon.points.map((point, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
          <span>{point}</span>
        </li>
      ))
    ) : (
      <>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
          <span>Valid on select categories as listed on the product page.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
          <span>Minimum cart value might apply as specified on descriptions.</span>
        </li>
      </>
    )}
  </ul>
)}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

                          {/* Coupon Code Box */}
                          

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
                <span>From an Online Bookstore to India's Biggest Shopping Destination</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-4">
                Amazon was founded by Jeff Bezos in 1994 as a small online bookstore operating out of a garage in Seattle. Over the decades, it grew into one of the most influential companies in the world, serving over 300 million active customers across 200+ countries. In India, Amazon launched in 2013 and quickly became the country's most trusted online shopping platform.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                The journey in India has been shaped by a deep understanding of local shoppers. Amazon India introduced services like Amazon Pantry, Amazon Fresh, and regional language support to make shopping accessible for everyone — from metro cities to Tier-3 towns. Today, Amazon India hosts over 2 million sellers, offering everything from groceries and gadgets to furniture and fashion under one roof. Features like Alexa, Prime Video, and the Subscribe & Save program have made it far more than just a shopping site — it is now a complete lifestyle platform for millions of Indian households.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Amazon</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Amazon Big Deal Days</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 70% OFF on Electronics, Fashion & more
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
                Top Categories at Amazon
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Electronics</span>
                  <span className="text-[#FF5722] font-bold">Up to 70% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Fashion</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Home & Kitchen</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Beauty & Personal Care</span>
                  <span className="text-[#FF5722] font-bold">Up to 56% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Books</span>
                  <span className="text-[#FF5722] font-bold">Up to 80% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Smart Home</span>
                  <span className="text-[#FF5722] font-bold">Up to 58% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Toys & Games</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Grocery</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sports & Fitness</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Pet Supplies</span>
                  <span className="text-[#FF5722] font-bold">Deals from $20</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Gift Cards</span>
                  <span className="text-[#FF5722] font-bold">From $10</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Amazon */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew to Find Amazon Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
      <span>Every Amazon promo code listed on CouponScrew is manually tested and re-verified within 24 hours. If a code stops working, it is flagged or removed immediately so you never waste time on an expired offer.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
      <span>We display exact success percentages based on recent user attempts for every deal. This transparency helps you instantly identify which Amazon discount codes are performing best on any given day.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Expert Stacking Strategies</span>
      <span>We go beyond simply listing codes. CouponScrew guides you through Triple-Stack savings — combining Amazon sale prices, on-page clipped coupons, and bank cashback to reach the lowest possible checkout price.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Bumper Reward Alerts</span>
      <span>Our team identifies special promotional windows where Amazon offers rewards worth up to ₹10,000 across categories like travel, food, and electronics. These high-value alerts are posted as soon as they go live.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Hyper-Local Bank Offer Tracking</span>
      <span>We specifically track Indian bank promotions from HDFC, SBI, ICICI, Axis, and Kotak so you always know which card to use at checkout for maximum cashback on top of your Amazon coupon code.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Comprehensive Sale Tracking</span>
      <span>CouponScrew monitors upcoming Amazon India sale dates in advance, giving you early notice on the Great Indian Festival, Prime Day, and seasonal events so you can plan your purchases and secure the best deals from day one.</span>
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
                Amazon Coupon Code India (October 2026): Up to 90% Off — Verified Promo Codes & Deals
              </h2>

              <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Product Name</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Deal Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Original Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Key Highlights</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Nillkin iPhone 15 Pro Max Magnetic Case</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">92% Off</td>
        <td className="p-3.5 font-bold">₹679</td>
        <td className="p-3.5 text-gray-500 line-through">₹7,998</td>
        <td className="p-3.5">Magnetic liquid silicone with premium feel</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's Cotton Blend Printed Short Kurti</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">91% Off</td>
        <td className="p-3.5 font-bold">₹179</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,999</td>
        <td className="p-3.5">Regular fit, round neck & half sleeves</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Nillkin CamShield iPhone 13 Pro Case</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">90% Off</td>
        <td className="p-3.5 font-bold">₹509</td>
        <td className="p-3.5 text-gray-500 line-through">₹4,999</td>
        <td className="p-3.5">Slide-over camera lens cover for scratch protection</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's Crepe Kurti</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">87% Off</td>
        <td className="p-3.5 font-bold">₹99</td>
        <td className="p-3.5 text-gray-500 line-through">₹749</td>
        <td className="p-3.5">Straight fit with 3/4 sleeves</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Safari Omega 30L Laptop Backpack</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">84% Off</td>
        <td className="p-3.5 font-bold">₹549</td>
        <td className="p-3.5 text-gray-500 line-through">₹3,396</td>
        <td className="p-3.5">Includes rain cover & multiple storage sections</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">BRUTON EVA Lite Running Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">84% Off</td>
        <td className="p-3.5 font-bold">₹398</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,499</td>
        <td className="p-3.5">Lightweight build; extra coupon on select sizes</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">BlueBlaze EVA Lite Running Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">84% Off</td>
        <td className="p-3.5 font-bold">₹483</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,999</td>
        <td className="p-3.5">Breathable mesh upper; extra coupon on select sizes</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">BRUTON Women's Wedge Sandals</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">83% Off</td>
        <td className="p-3.5 font-bold">₹418</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,499</td>
        <td className="p-3.5">Cushioned sole & adjustable buckle strap</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Amazon Basics 3-Tier Storage Rack</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">66% Off</td>
        <td className="p-3.5 font-bold">₹509</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,500</td>
        <td className="p-3.5">Slim design for kitchens, bathrooms & utilities</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Solimo Stainless Steel Insulated Bottle</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">65% Off</td>
        <td className="p-3.5 font-bold">₹528</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,500</td>
        <td className="p-3.5">Insulated bottle keeps drinks hot or cold</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">American Tourister 20L Backpack</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">64% Off</td>
        <td className="p-3.5 font-bold">₹896</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,470</td>
        <td className="p-3.5">Multiple compartments & 1-year warranty</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">JBL Vibe Beam 2 ANC Earbuds</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">60% Off</td>
        <td className="p-3.5 font-bold">₹2,999</td>
        <td className="p-3.5 text-gray-500 line-through">N/A</td>
        <td className="p-3.5">Active Noise Cancellation, Pure Bass & 48h battery</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Xiaomi 20000mAh 165W Power Bank</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">53% Off</td>
        <td className="p-3.5 font-bold">₹5,199</td>
        <td className="p-3.5 text-gray-500 line-through">₹10,999</td>
        <td className="p-3.5">Built-in USB-C cable & digital display</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">JBL Tune 770NC Wireless Headphones</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹4,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹9,999</td>
        <td className="p-3.5">Adaptive ANC, 70h battery & Multipoint pairing</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Samsung Galaxy Tab S10 Lite</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">47% Off</td>
        <td className="p-3.5 font-bold">₹30,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹57,999</td>
        <td className="p-3.5">10.9" display, 6GB RAM & 128GB storage</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Redmi 15C 5G Prime Edition</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">47% Off</td>
        <td className="p-3.5 font-bold">₹15,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹29,999</td>
        <td className="p-3.5">6000mAh battery & 128GB storage</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Lenovo Tab Plus Gen 2</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">46% Off</td>
        <td className="p-3.5 font-bold">₹33,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹63,000</td>
        <td className="p-3.5">12.1" display & 9-speaker JBL sound setup</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">realme P4 Lite 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">44% Off</td>
        <td className="p-3.5 font-bold">₹16,249</td>
        <td className="p-3.5 text-gray-500 line-through">N/A</td>
        <td className="p-3.5">Dimensity processor & 144Hz display</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Haier 6kg Fully Automatic Washing Machine</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">38% Off</td>
        <td className="p-3.5 font-bold">₹13,890</td>
        <td className="p-3.5 text-gray-500 line-through">₹22,400</td>
        <td className="p-3.5">5-Star rating & Oceanus Wave Drum</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">realme Buds Air 8</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">28% Off</td>
        <td className="p-3.5 font-bold">₹3,799</td>
        <td className="p-3.5 text-gray-500 line-through">N/A</td>
        <td className="p-3.5">55dB ANC, Hi-Res audio & 58h playback</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Samsung Galaxy S25 Ultra 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">27% Off</td>
        <td className="p-3.5 font-bold">₹94,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,29,999</td>
        <td className="p-3.5">200MP camera & Galaxy AI features</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Apple iPhone 16 (128GB)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">14% Off</td>
        <td className="p-3.5 font-bold">₹76,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹89,900</td>
        <td className="p-3.5">Apple A18 chip & enhanced battery life</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Amazon Great Indian Festival (Top Categories)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% Off</td>
        <td className="p-3.5 font-bold">Varies</td>
        <td className="p-3.5 text-gray-500 line-through">Varies</td>
        <td className="p-3.5">Deals across electronics, fashion, home & lifestyle</td>
      </tr>
    </tbody>
  </table>
</div>



               <p className = "mb-4">
                 Welcome to CouponScrew's dedicated Amazon deals page — your one-stop destination for verified Amazon coupon codes, promo codes, and discount codes updated every single day. Whether you are shopping for the latest smartphone, refreshing your wardrobe, or stocking up on daily essentials, we track 43+ active Amazon offers daily so you never have to pay full price. Browse the list above, copy your code, and start saving instantly.
                </p>

              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

                {/* Section 1: About Amazon */}
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Discover Everything You Can Shop on Amazon India
                  </h3>
                <p>
                  Amazon India is home to one of the widest product selections available online. Whether you are looking for the latest tech, everyday groceries, or home décor, there is a category for every need. Here is a complete look at everything you can shop — along with typical Amazon discount codes and deals available in each section.
                </p>
              
               

<div className="space-y-8 text-slate-700">

  
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Deals</h3>
    
    <p className="mb-3">
      Amazon's dedicated Deals section is where the biggest savings live. Lightning Deals, Deal of the Day, and limited-time offers run around the clock, with discounts going up to 80% across all categories. This is the first place to check when you are looking for a quick Amazon promo code or a flash discount on popular products.
    </p>
    <p>
     It is worth visiting this section multiple times a day since Lightning Deals are time-sensitive and stock-limited. Pairing a deal here with a bank cashback offer is one of the easiest ways to get maximum savings without searching for a specific Amazon coupon code.
    </p>
  </section>

  {/* Digital Music */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Digital Music</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/digital-music_sfq4s2.webp"
        alt="Digital Music"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon Music offers a massive library of songs, albums, and playlists available for streaming or purchase. Prime members get access to Amazon Music at no extra cost, while Amazon Music Unlimited subscribers unlock an even larger catalogue at a discounted annual rate.
    </p>
    <p>
      Amazon discount codes for Digital Music are less common, but Prime membership itself acts as the best ongoing deal — giving you ad-free listening along with all other Prime benefits bundled together.
    </p>
  </section>

  {/* Electronics */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Electronics</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256137/electronics_jfn4db.webp"
        alt="Electronics"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Electronics is one of Amazon India's strongest categories, covering smartphones, laptops, tablets, smartwatches, earbuds, cameras, and home theatre systems. Top brands like Apple, Samsung, OnePlus, Sony, and boAt are regularly featured with significant price drops, especially during sale events.
    </p>
    <p>
      You can find Amazon coupon codes for electronics throughout the year, but the deepest discounts appear during Prime Day and the Great Indian Festival. Refurbished and Amazon Renewed options in this category offer an additional 20–50% off on certified pre-owned devices.
    </p>
  </section>

  {/* Girls' Fashion */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Girls' Fashion</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/girls-fashion_us71ay.webp"
        alt="Girls' Fashion"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon India's Girls' Fashion section covers everything from school uniforms and casual dresses to ethnic wear and party outfits for children. Top brands as well as affordable local labels give parents a wide range of options at competitive prices.
    </p>
    <p>
      Amazon promo codes for kids' clothing are frequently available, with seasonal sales offering up to 70% off. The section is well-organised by age group and occasion, making it easy to find the right outfit quickly without overspending.
    </p>
  </section>

  {/* Health & Household */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Health & Household</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256134/health-households_e716tz.webp"
        alt="Health & Household"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      From vitamins and protein supplements to cleaning supplies, sanitisers, and personal hygiene products, the Health & Household category covers all everyday essentials. Trusted brands like Dettol, Himalaya, Dabur, and Healthkart are regularly stocked with bundle deals.
    </p>
    <p>
      Using an Amazon discount code in this category, combined with the Subscribe & Save programme, can bring your monthly household spend down significantly. Super Value Days — held on the first and second of every month — offer additional discounts specifically on health and household products.
    </p>
  </section>

  {/* Home & Kitchen */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Home & Kitchen</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/home-kitchen_p8ntrt.webp"
        alt="Home & Kitchen"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      The Home & Kitchen category on Amazon India is one of the most popular sections on the platform. It covers kitchen appliances, cookware, air fryers, water purifiers, bedding, storage solutions, and smart home devices. Brands like Prestige, Philips, Pigeon, and Havells consistently appear with strong discounts.
    </p>
    <p>
      Amazon coupon codes for home and kitchen items are widely available, especially during festive sales. Whether you are buying a single electric kettle or furnishing an entire kitchen, this category regularly offers deals of up to 80% off on well-reviewed products.
    </p>
  </section>

  {/* Industrial & Scientific */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Industrial & Scientific</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/industries-scientific_ckravz.webp"
        alt="Industrial & Scientific"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon India's Industrial & Scientific section serves professionals, small business owners, and DIY enthusiasts. The category includes power tools, safety equipment, lab supplies, measurement instruments, and industrial hardware.
    </p>
    <p>
      While Amazon promo codes are less frequent here compared to consumer categories, bulk purchasing and business account discounts are available. This section is particularly useful for small manufacturers and workshop owners looking for reliable supplies at reasonable prices.
    </p>
  </section>

  {/* Kindle Store */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Kindle Store</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/kindle-store_alz8bq.webp"
        alt="Kindle Store"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      The Kindle Store gives readers access to millions of eBooks, audiobooks, and magazines available for instant download. Kindle Unlimited — Amazon's subscription reading service — allows unlimited access to over 3 million titles for a fixed monthly fee.
    </p>
    <p>
      Amazon regularly offers discount codes and limited-time deals on Kindle devices themselves, with prices dropping significantly during Prime Day and Diwali sales. First-time Kindle Unlimited subscribers also frequently receive a free trial, making it one of the best-value offers in the digital space.
    </p>
  </section>

  {/* Luggage */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Luggage</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/luggage_uxj786.webp"
        alt="Luggage"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon India's Luggage section features hard-shell and soft trolley bags, backpacks, travel accessories, and laptop bags from brands like Skybags, American Tourister, Safari, and Wildcraft. The category is especially popular ahead of holiday seasons and exam time.
    </p>
    <p>
      Amazon coupon codes for luggage see the biggest application during the Great Republic Day Sale and the end-of-season clearance periods. Buying a luggage set during these windows can save you up to 65% compared to retail store prices.
    </p>
  </section>

  {/* Men's Fashion */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Men's Fashion</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/mens-fashion_afvzqj.webp"
        alt="Men's Fashion"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Men's Fashion on Amazon India covers casual wear, formal shirts, ethnic kurtas, activewear, footwear, and accessories. Brands like Peter England, Arrow, Puma, and a large number of D2C labels offer competitive pricing across all budget ranges.
    </p>
    <p>
      Amazon discount codes in this category are available throughout the year, with the biggest drops during the End of Season Sale and the Great Indian Festival. The filters make it easy to sort by brand, size, price range, and customer rating, so you can find the right product and the best price together.
    </p>
  </section>

  {/* Movies & TV */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Movies & TV</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/movies-tv_bvqvhx.webp"
        alt="Movies & TV"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon's Movies & TV section includes digital rentals, purchases, and Prime Video content. Critically acclaimed Indian originals, Hollywood blockbusters, and regional films are all accessible through a single subscription.
    </p>
    <p>
      Prime membership is effectively the best Amazon promo code for this category — it bundles access to Prime Video along with free fast delivery, making the subscription cost extremely easy to justify for regular shoppers.
    </p>
  </section>

  {/* Music, CDs & Vinyl */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Music, CDs & Vinyl</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/music-cds-vinyl_ml12ca.webp"
        alt="Music, CDs & Vinyl"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      For collectors and audiophiles, Amazon India stocks a range of physical music formats including CDs, vinyl records, and audio equipment. This is a niche but well-stocked category covering both classic Indian film music and international artists.
    </p>
    <p>
      Amazon discount codes in this category are sporadic, but seasonal clearance deals and third-party seller promotions can bring prices down considerably. Checking the "Used — Like New" listings in this section is also a reliable way to find significant savings.
    </p>
  </section>

  {/* Pet Supplies */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Pet Supplies</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/pet-supplies_gjwhfl.webp"
        alt="Pet Supplies"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      The Pet Supplies section on Amazon India covers food, grooming products, toys, cages, and accessories for dogs, cats, birds, and aquarium fish. Premium brands like Royal Canin, Pedigree, and Whiskas are regularly available with bundle discounts.
    </p>
    <p>
      Using an Amazon coupon code combined with Subscribe & Save on recurring pet food orders is one of the most practical savings strategies for pet owners. The category also runs special promotions during World Pet Day and festive sale events.
    </p>
  </section>

  {/* Prime Video */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Prime Video</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/prime-video_rh68ok.webp"
        alt="Prime Video"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Prime Video is Amazon's streaming service offering a vast library of movies, web series, documentaries, and live sports. Amazon Originals like Mirzapur, Panchayat, and The Family Man have made it one of the most popular OTT platforms in India.
    </p>
    <p>
      A Prime membership gives you full access to Prime Video, making it one of the highest-value Amazon discount codes in practice — you are getting entertainment, fast delivery, and exclusive shopping deals all under a single annual subscription.
    </p>
  </section>

  {/* Software */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Software</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/software_z7qnmh.webp"
        alt="Software"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon India's Software section includes operating systems, antivirus programmes, productivity tools, and creative applications available for digital download or physical delivery. Microsoft Office, Norton, and Adobe products are frequently listed here.
    </p>
    <p>
      Amazon promo codes for software are less common, but the platform regularly offers cashback on digital software purchases and seasonal discounts on popular titles. Students and professionals looking for licensed software at fair prices will find this section particularly useful.
    </p>
  </section>

  {/* Sports & Outdoors */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Sports & Outdoors</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/sports-outdoors_glpxod.webp"
        alt="Sports & Outdoors"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      The Sports & Outdoors category covers fitness equipment, yoga mats, cycling gear, trekking accessories, cricket kits, and outdoor clothing. Brands like Cosco, Nivia, Decathlon, and Boldfit are well represented with consistent discounts.
    </p>
    <p>
      Amazon coupon codes in the Sports & Outdoors category are most active during the New Year period when fitness goals are top of mind. The section also runs targeted promotions around major sporting events and the start of cricket season in India.
    </p>
  </section>

  {/* Tools & Home Improvement */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Tools & Home Improvement</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256128/tools-home-improvements_pyjbga.webp"
        alt="Tools & Home Improvement"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      From power drills and paint supplies to plumbing kits and electrical fittings, Amazon India's Tools & Home Improvement section is a go-to resource for homeowners and contractors alike. Brands like Bosch, Black & Decker, and Stanley offer reliable quality at competitive online prices.
    </p>
    <p>
      Amazon discount codes are periodically available for this category, and the platform's price comparison feature makes it easy to verify you are getting the best deal available. Bulk buyers and contractors can also benefit from business account pricing on select products.
    </p>
  </section>

  {/* Toys & Games */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Toys & Games</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256128/toys-games_aatlz3.webp"
        alt="Toys & Games"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Amazon India's Toys & Games section features board games, educational kits, action figures, building blocks, and outdoor play equipment for all age groups. Brands like LEGO, Hasbro, Funskool, and Mattel are regularly featured with deals of up to 56% off.
    </p>
    <p>
      Amazon promo codes for toys and games are most active during the children's sale events around Diwali and the back-to-school season. The "Age Range" and "Educational" filters make it easy to find age-appropriate gifts without spending more than necessary.
    </p>
  </section>

  {/* Video Games */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Video Games</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256131/vidoeo-games_zynphm.webp"
        alt="Video Games"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      The Video Games section on Amazon India covers gaming consoles, physical game titles, controllers, and accessories for PlayStation, Xbox, and Nintendo platforms. PC gaming peripherals and gaming chairs are also part of this growing category.
    </p>
    <p>
      Amazon coupon codes for video games are most frequently available around new title launches and during the Great Indian Festival. Pre-ordering upcoming games on Amazon often comes with launch-day discounts and additional cashback when combined with eligible bank card offers.
    </p>
  </section>

  {/* Women's Fashion */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Women's Fashion</h3>
    <a href="https://www.amazon.in/events/greatindianfestival?&linkCode=ll2&tag=mg0001-21&linkId=5a5f03ecebab7f949fede3f000c62658&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full">
      <NextImage
        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/womens-fashion_bsvzwa.webp"
        alt="Women's Fashion"
        width={600}
        height={332}
        sizes="(max-width: 768px) 90vw, 600px"
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
    </a>
    <p className="mb-3">
      Women's Fashion is one of Amazon India's largest and most active categories, covering sarees, kurtas, western wear, activewear, footwear, handbags, and jewellery. The section features both established brands and independent Indian designers at a wide range of price points.
    </p>
    <p>
      Amazon discount codes in Women's Fashion see peak availability during the End of Season Sale and during festive occasions like Navratri and Diwali. The "Try Before You Buy" option available on select items also makes it easier to shop confidently without worrying about returns.
    </p>
  </section>
</div>

  

                {/* Section 2: Offers Summary Table */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Millions of Indian Shoppers Continue to Choose Amazon</h3>
                  
                 
                </div>

                {/* Section 3: Why Shop at Amazon via CouponsCrew */}
               <div className="space-y-8 text-slate-700">
  {/* Section 1 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      A Marketplace That Offers Almost Everything
    </h3>
    <p>
      From Kindle devices and Echo speakers to groceries, automotive tools, and pet food, Amazon's product range in India is virtually limitless. It functions as a true one-stop destination where global brands sit alongside local Indian sellers, giving shoppers access to products that would otherwise require visits to multiple stores.
    </p>
  </section>

  {/* Section 2 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Competitive Prices Across Thousands of Brands
    </h3>
    <p>
      Amazon is known for its aggressive pricing, particularly in electronics and the third-party marketplace. The built-in price comparison feature allows shoppers to evaluate multiple sellers for the same product and choose the lowest price with confidence — all on a single page.
    </p>
  </section>

  {/* Section 3 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Reviews That Help You Shop with Confidence
    </h3>
    <p>
      One of Amazon's greatest strengths is its customer review system. Verified purchase ratings, detailed written feedback, and user-uploaded photos allow shoppers to assess product quality before clicking Buy Now. This level of transparency reduces the risk of a bad purchase, especially on high-value items.
    </p>
  </section>

  {/* Section 4 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Fast and Flexible Delivery Options Across India
    </h3>
    <p>
      Prime members enjoy free one-day and same-day delivery with no minimum order value. Non-Prime users have access to flexible options like No-Rush Shipping, which offers reward credits in exchange for a slower delivery window — a practical trade-off for non-urgent purchases.
    </p>
  </section>

  {/* Section 5 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Shopping Designed Around Convenience
    </h3>
    <p>
      With one-click ordering, self-service Amazon Lockers, and staffed Amazon Counter pickup points, the entire shopping experience is designed around your schedule. The mobile app adds app-exclusive deals to the mix, giving regular shoppers additional reasons to check in before completing a purchase.
    </p>
  </section>

  {/* Section 6 */}
  <section>
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      A Trusted Destination for Global and Local Brands
    </h3>
    <p>
      Amazon's 30-day return policy and guaranteed delivery commitment make it a secure environment for high-value purchases. Whether you are buying a premium gadget or everyday household goods, the platform's consumer protection framework ensures your money is protected if something goes wrong.
    </p>
  </section>
</div>

                {/* Section 4: How to Use Coupon Codes */}
                {/* Section 4: How to Use Coupon Codes */}
<div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">
    How to Use an Amazon Coupon Code — Step by Step
  </h3>
  <p className="text-gray-700 font-bold -mt-4">
    Using an Amazon discount code from CouponScrew takes less than two minutes. Here is how to do it:
  </p>
  <div className="space-y-6">
    {[
      {
        title: "Find Your Code",
        description: "Browse the verified list on this page and click \"Show Code\" or \"Activate Deal\" on the offer you want to use."
      },
      {
        title: "Copy and Redirect",
        description: "If a promo code is provided, copy it. Clicking the button will automatically redirect you to the relevant Amazon page with the discount pre-applied where possible."
      },
      {
        title: "Add Items to Cart",
        description: "Select your product on Amazon and add it to your shopping cart. Check for the \"Apply Coupon\" checkbox or a green savings label on the product listing page — these are on-page coupons that stack on top of your promo code."
      },
      {
        title: "Apply Your Code at Checkout",
        description: "Paste the Amazon coupon code into the \"Gift cards & promotional codes\" field on the checkout page and click Apply."
      },
      {
        title: "Pay with an Eligible Bank Card",
        description: "To maximise savings, pay using an HDFC, SBI, ICICI, or Axis card that has an active cashback offer running on Amazon. This can add an extra 10% off on top of your already discounted price."
      }
    ].map((step, i) => (
      <div key={i} className="flex gap-6 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
          {i + 1}
        </div>
        <p className="text-gray-700 font-bold leading-relaxed mt-2">
          <span className="text-[#5B4FBE] font-black">{step.title} — </span>
          {step.description}
        </p>
      </div>
    ))}
  </div>
</div>

                {/* Section 5: Types of Offers */}
                <div className="space-y-4 text-slate-700">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Hidden Ways to Save Even More on Amazon India
  </h3>
  
  <p>
    <strong className="text-[#2C2C40]">Amazon Warehouse & Outlet Deals: </strong>
    Amazon Warehouse sells open-box, returned, and lightly used products at discounts of 20–70% off the original price. Every item is graded and described accurately, and the standard 30-day return policy still applies. This section is ideal for electronics, kitchen appliances, and fitness equipment where cosmetic condition matters less than performance.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Subscribe & Save — Unlock Up to 15% Extra: </strong>
    Subscribe & Save allows you to schedule recurring deliveries of household essentials like toiletries, groceries, and health products. You receive a 5% baseline discount on every order, which increases to 10% when you have 5 or more active subscriptions in a month. Select brands offer up to 15% off for loyal subscribers, making it one of the most consistent Amazon discount code alternatives available.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Stack Bank Cashback on Top of Promo Codes: </strong>
    Amazon India runs co-branded cashback offers with major Indian banks throughout the year. HDFC, SBI, ICICI, Axis, and Kotak cards regularly offer 10% instant discounts on eligible purchases. Applying a CouponScrew Amazon promo code first, then paying with an eligible bank card, is a straightforward way to achieve what we call a Triple-Stack saving — combining a sale price, a coupon, and a bank offer in one transaction.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Amazon Prime Exclusive Discounts: </strong>
    Prime members receive early access to Lightning Deals, exclusive pricing on select products, and special promo codes that are not available to regular shoppers. During major sale events like Prime Day, the member-only discounts can be substantially deeper than what general visitors see — making Prime membership one of the best long-term investments for frequent Amazon shoppers.
  </p>
</div>

                

              <div className="my-8">
  <h3 className="text-xl font-bold text-[#5B4FBE] mb-3">
    The Biggest Amazon Sale Events You Should Not Miss
  </h3>
  
  <div className="overflow-x-auto my-4 rounded-2xl border border-[#E8E8F0] shadow-sm">
    <table className="w-full text-xs border-collapse min-w-[600px]" itemScope itemType="https://schema.org/Table">
      <caption className="sr-only">The Biggest Amazon Sale Events You Should Not Miss</caption>
      <thead>
        <tr>
          <th scope="col" className="bg-[#f0eeff] text-[#5B4FBE] font-black px-4 py-3 text-left whitespace-nowrap">Sale Event</th>
          <th scope="col" className="bg-[#f0eeff] text-[#5B4FBE] font-black px-4 py-3 text-left whitespace-nowrap">Month</th>
          <th scope="col" className="bg-[#f0eeff] text-[#5B4FBE] font-black px-4 py-3 text-left whitespace-nowrap">Expected Discount</th>
          <th scope="col" className="bg-[#f0eeff] text-[#5B4FBE] font-black px-4 py-3 text-left">Best Categories</th>
        </tr>
      </thead>
      <tbody>
        {[
          { event: 'Great Republic Day Sale', month: 'January', discount: 'Up to 65% OFF', categories: 'Mobiles, Electronics, Fashion' },
          { event: 'Holi Sale', month: 'March', discount: 'Up to 60% OFF', categories: 'Fashion, Beauty, Home Décor' },
          { event: 'Summer Appliance Sale', month: 'June', discount: 'Up to 60% OFF', categories: 'ACs, Refrigerators, Coolers' },
          { event: 'Amazon Prime Day', month: 'July', discount: 'Up to 80% OFF', categories: 'All Categories (Prime Members)' },
          { event: 'Great Freedom Sale', month: 'August', discount: 'Up to 75% OFF', categories: 'Electronics, Fashion, Appliances' },
          { event: 'Great Indian Festival', month: 'September–October', discount: 'Up to 80% OFF', categories: 'Smartphones, TVs, Festive Décor' },
          { event: 'Diwali Sale', month: 'October–November', discount: 'Up to 75% OFF', categories: 'Home, Gifts, Clothing' },
          { event: 'Black Friday & Cyber Monday', month: 'November', discount: 'Up to 70% OFF', categories: 'Tech, Global Brands' },
          { event: 'Year End Sale', month: 'December', discount: 'Up to 80% OFF', categories: 'All Categories' },
        ].map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A] whitespace-nowrap" itemProp="name">
              {row.event}
            </td>
            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A] whitespace-nowrap">
              {row.month}
            </td>
            <td className="px-4 py-3 border-b border-[#E8E8F0] font-black text-[#FF5722] whitespace-nowrap">
              {row.discount}
            </td>
            <td className="px-4 py-3 border-b border-[#E8E8F0] text-[#666680] leading-normal" itemProp="description">
              {row.categories}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="text-xs text-[#666680] mt-3 italic">
    Bookmarking this page before each sale event ensures you have the latest verified Amazon coupon codes ready the moment the sale goes live.
  </p>
</div>

              

                {/* Section 9: Why Use CouponsCrew */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                    Shop Smarter — Make Every Rupee Count on Amazon India
                    </h3>
                  <p>
                    Every purchase you make on Amazon is an opportunity to save — and CouponScrew makes sure you never miss it. From daily Amazon coupon codes and bank cashback stacking guides to early alerts on the Great Indian Festival and Prime Day, everything you need to shop smarter is right here. Bookmark this page, check it before every Amazon order, and join thousands of Indian shoppers who consistently pay less than everyone else.
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
  <h2 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h2>
  {[
    { 
      q: "How do I get a 50% discount on Amazon India?", 
      a: "Discounts of 50% and above are regularly available in the Amazon Warehouse, Amazon Outlet, and during Lightning Deals on the main Deals page. Using a verified Amazon coupon code from CouponScrew on top of an existing sale price is the most reliable way to reach or exceed 50% off." 
    },
    { 
      q: "Can I stack an Amazon coupon code with a bank offer?", 
      a: "Yes. You can apply a CouponScrew promo code at checkout in the \"Gift cards & promotional codes\" field and then pay with an eligible bank card to claim an additional 10% cashback. Both discounts apply to the same order." 
    },
    { 
      q: "What are the biggest Amazon sale events in India?", 
      a: "The Great Indian Festival (September–October) and Amazon Prime Day (July) are the two largest annual events with discounts up to 80% across all categories. The Great Republic Day Sale in January and the Great Freedom Sale in August are also major shopping windows." 
    },
    { 
      q: "What are the benefits of Amazon Prime membership?", 
      a: "Prime offers free one-day and same-day delivery, early access to Lightning Deals, exclusive Amazon promo codes, Prime Video, Prime Music, and Prime Reading — all bundled into a single annual or monthly subscription." 
    },
    { 
      q: "How does Amazon Subscribe & Save work?", 
      a: "Subscribe & Save lets you schedule regular deliveries of household items at a 5% discount. This increases to 10% when you have 5 or more active subscriptions in a given month, with select brands offering up to 15% off for consistent subscribers." 
    },
    { 
      q: "Is there a student discount on Amazon India?", 
      a: "Amazon India offers a discounted Prime membership for users aged 18–24 through its Youth Offer, which provides up to 50% off the standard Prime price. This gives students access to all Prime benefits at a significantly reduced rate." 
    },
    { 
      q: "How do I find hidden deals on Amazon India?", 
      a: "Visit the Amazon Outlet section for clearance stock and Amazon Renewed for certified refurbished electronics at 20–50% off. The \"with coupon\" label on product listing pages also indicates an additional on-page discount that many shoppers overlook." 
    },
    { 
      q: "What is a Lightning Deal on Amazon?", 
      a: "A Lightning Deal is a time-sensitive, limited-stock offer that provides a deep discount for only a few hours. They appear on the Amazon Deals page and sell out quickly, so checking in during sale events and early morning hours gives you the best chance of catching them." 
    },
    { 
      q: "Why is my Amazon promo code not working?", 
      a: "A code may fail if it has expired, if the item in your cart is not eligible for the promotion, or if you have not met the minimum order value. Always check the terms listed alongside each code on CouponScrew before applying." 
    },
    { 
      q: "Are there app-exclusive Amazon deals?", 
      a: "Yes. Amazon India regularly offers additional discounts and cashback rewards that are only available through the mobile app. Downloading the app and enabling notifications ensures you do not miss these app-only Amazon discount codes." 
    },
    { 
      q: "How do I get free shipping on Amazon without Prime?", 
      a: "Non-Prime orders qualify for free standard shipping when the order value exceeds the minimum threshold displayed at checkout. The exact threshold varies by category and is shown during the payment step." 
    },
    { 
      q: "How often does CouponScrew update its Amazon coupon codes?", 
      a: "Our team reviews and updates Amazon promo codes daily. Every listing on this page carries a verification timestamp so you can see exactly when it was last checked and confirmed active." 
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
      <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
      </div>
    </div>
  ))}
</div>

            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Amazon Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Amazon Coupons", "Electronics Sale", "Fashion Offers", "Amazon Big Deal Days", "Home & Kitchen Deals", "No-Cost EMI Electronics", "Amazon Bank Offers", "CouponsCrew Home"].map(tag => (
                    <span
                      key={tag}
                      className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm border border-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Amazon Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Big Deal Days — Up to 70% OFF", sub: "Electronics, fashion & home — deepest discounts of the year" },
                    { heading: "Flash Deals", sub: "Limited-time deals on electronics & books — while stock lasts" },
                    { heading: "Bank Card Instant Discounts", sub: "Save extra with eligible bank cards at checkout" },
                    { heading: "No-Cost EMI on Eligible Orders", sub: "Zero-interest EMI available on select bank cards" },
                    { heading: "New User First-Order Offer", sub: "Special discount for first-time Amazon customers — check at checkout" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">A</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Amazon deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Amazon checkout for instant discounts.
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
                <span>Continue to Amazon</span>
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
