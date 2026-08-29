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
import { Coupon, PUMA_COUPONS } from './pumaCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://in.puma.com';

export default function PumaStore() {
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

  const coupons: Coupon[] = PUMA_COUPONS;

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
      q: 'How do I use a Puma coupon code?',
      a: 'To use a Puma coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Puma website or app. If it is a deal, simply click "Visit Puma" to get the discount auto-applied.'
    },
    {
      q: 'Why is my Puma coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions, minimum spend requirements, expiry, or user eligibility restrictions. Double-check the terms listed with the code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Puma coupon code listed on this page is checked before publishing, and we work to keep the list updated so you mostly see codes that are currently working.'
    },
    {
      q: 'How often are Puma coupons updated?',
      a: 'Our deals team reviews and updates coupons regularly. Expired promotions are removed as we find them, so you can spend less time testing dead codes.'
    },
    {
      q: 'Can I use multiple coupon codes?',
      a: 'Typically, only one promo code can be applied per order. If a code does not work alongside another offer, try applying just one coupon code at checkout.'
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
            <Link href="/" className="hover:text-[#000000] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#000000] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#000000] font-semibold">Puma Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp"
                      alt="Puma Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Puma</h1>
                    <span className="bg-[#F0F0F0] text-[#000000] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E4E4]">
                      Footwear, Apparel & Sportswear
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with verified Puma coupon codes, promo codes, and exclusive fashion offers. Enjoy up to 60% OFF, extra 10% OFF, up to ₹400 prepaid discounts, free shipping, and huge savings on Puma shoes, sneakers, sportswear, clothing, accessories, and activewear.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#000000] bg-[#F0F0F0] px-2.5 py-1 rounded-full border border-[#E4E4E4]">
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
                  className="bg-[#DA020E] hover:bg-[#B80210] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Puma</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#000000] to-[#2b2b2b] items-center justify-center text-center p-8"
            >
              <div className="relative z-10 text-white space-y-3">
                <span className="inline-block bg-[#DA020E] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                  Season Sale
                </span>
                <h3 className="text-2xl font-black tracking-tight">Save on Shoes & Apparel</h3>
                <p className="text-white/70 text-sm">Verified Puma coupon codes updated regularly</p>
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
            <div className="w-11 h-11 bg-[#F0F0F0] text-[#000000] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">10+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FCE8E9] text-[#DA020E] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 60%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Best Prices</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0F0F0] text-[#000000] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Puma Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Puma coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#000000) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#000000] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                {/* Soft Tint Badge using Accent (#DA020E) */}
                <span className="bg-[#DA020E]/10 text-[#DA020E] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#000000] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#000000]" />
                    <span>Valid on select footwear & apparel categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#000000]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#000000]" />
                    <span>Covers selected styles and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

           

              {/* Action Button - Vibrant CTA Accent (#DA020E) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#DA020E] hover:bg-[#B80210] text-white"
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
    <Info size={16} className="text-[#2B2B2B]" />
    <span>What is Puma and Why Is It One of India's Most Popular Sportswear Brands?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-4">
    Puma was founded in 1948 in Germany by Rudolf Dassler and has grown into one of the top three global sportswear brands — competing directly with Nike and Adidas across performance sports, lifestyle footwear, and athletic apparel. In India, Puma has operated since 2006 and has expanded to become one of the most purchased sportswear labels in the country, available through its own website (in.puma.com), the Puma factory store network across Indian cities, and third-party platforms including Myntra, Flipkart, and Amazon.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    What makes Puma a strong choice for Indian shoppers specifically:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">Price-to-quality ratio</span> — Puma's mid-range shoes (₹2,500–₹5,000) consistently deliver performance and build quality that competes with higher-priced Nike and Adidas equivalents at the same tier.
    </li>
    <li>
      <span className="font-semibold">Wide India-specific catalogue</span> — Puma India's catalogue is tailored to Indian consumer preferences, with cricket-specific footwear, India national team kit editions, and colour-ways popular in the Indian market.
    </li>
    <li>
      <span className="font-semibold">Puma Factory Store</span> — both physical factory outlets and the online factory store section offer past-season and clearance stock at 40%–70% below original prices — one of the best value entry points for the brand.
    </li>
    <li>
      <span className="font-semibold">Collaborations and limited editions</span> — Puma's Puma x Ferrari range (puma ferrari shoes), Puma x one8 (Virat Kohli's line), and other collabs generate consistently strong interest in the Indian market.
    </li>
    <li>
      <span className="font-semibold">Diverse footwear range</span> — from puma suede shoes (a heritage silhouette) to performance puma running shoes, puma soccer boots, and everyday puma black sneakers, the range covers sport, lifestyle, and fashion needs under one brand.
    </li>
  </ul>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#2B2B2B] hover:text-[#2B2B2B] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit Puma</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#000000] to-[#2b2b2b] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Puma Seasonal Sale</h3>
                <span className="inline-block bg-[#DA020E] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 50% OFF on Shoes, Apparel & Accessories
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#000000] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>


            {/* Sidebar Card 4: Why Shop at Puma */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Puma Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a Puma promo code at checkout takes under a minute. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens Puma India in a new tab.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Browse and add products to your cart.</span> Search by category — shoes, clothing, accessories, or kids. Use the size, colour, and price filters to narrow your selection. Check that your cart value meets the minimum order threshold on the deal card.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Click the bag icon and tap "Proceed to Checkout." Sign in or continue as a guest.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Enter your delivery address.</span> Confirm your shipping address — Puma India delivers to most pin codes across the country.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find the coupon / promo code field.</span> On the order summary page, look for "Do you have a promo code?" or "Apply Coupon" — it appears in the pricing section before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the Puma coupon code from your clipboard and click "Apply." The discount reflects in the order total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, or EMI. If you have an eligible bank card — HDFC, ICICI, SBI, or Axis — select it now to stack the bank discount on top of your coupon saving where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and complete payment. You will receive an order confirmation via email and SMS with a tracking link.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a code shows as invalid, check that your cart value meets the minimum order threshold and that your selected products are not from an excluded category (factory store items are sometimes excluded from standard sitewide codes). Refresh this CouponsCrew page for the next active code.
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
            Puma Coupon Code & Sportswear Deals — Verified for August 2026
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
          {PUMA_COUPONS.map((coupon) => (
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
              Puma is one of the world's leading sportswear brands — and in India, it is one of the most shopped labels across performance footwear, casual sneakers, athletic clothing, and sports accessories. From puma running shoes designed for serious training to puma white sneakers built for everyday street style, the brand covers a wide range of needs at price points that span entry-level to premium.
            </p>

            <p>
              At CouponsCrew, we track every active Puma coupon code, Puma discount code, and Puma promo code so you never lose time applying codes that have already expired. Every deal on this page is verified before going live — minimum order values, eligible categories, user eligibility, and expiry dates are all confirmed and shown clearly on each deal card.
            </p>

            <p>
              Whether you are buying puma shoes for men for the gym, picking up puma sneakers for ladies for casual wear, or shopping the end-of-season clearance for deep discounts on premium styles — there is almost always a saving available. This page is updated daily. Bookmark it and check it before every Puma purchase.
            </p>

           
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Puma Shoes — Full Range Overview
  </h3>
  <p className="mb-4">
    Footwear is Puma's strongest and most diverse product category. Here is a breakdown of every major shoe type available on Puma India:
  </p>

  {/* Puma Shoes for Men */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Puma Shoes for Men</p>
  <p className="mb-4">
    Puma shoes for men span five distinct use-case categories:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Running Shoes</p>
  <p className="mb-2">
    Puma running shoes for men include the Velocity Nitro, Deviate Nitro, and Magnify Nitro series — Puma's performance running lines featuring nitrogen-infused foam midsoles (NITRO technology) for lightweight cushioning. The Velocity Nitro 2 is a strong mid-distance daily trainer; the Deviate Nitro 2 is the brand's flagship racing shoe. Prices range from ₹6,000–₹18,000 depending on the model and cushioning tier.
  </p>
  <p className="mb-4">
    For budget-conscious runners, the Puma Flyer and Puma Resolve series offer entry-level running functionality from ₹2,500–₹4,500 — a strong category to apply a Puma discount code for meaningful rupee savings.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Training &amp; Gym Shoes</p>
  <p className="mb-4">
    Puma's training footwear — including the Softride series and the Retaliate 2 — covers gym training, cross-training, and general fitness use. Flat soles and lateral stability are priorities in this category. Prices range from ₹3,000–₹7,000.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Casual &amp; Lifestyle Sneakers</p>
  <p className="mb-2">
    Puma sneakers for men in the lifestyle category include:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-2">
    <li><strong>Puma Suede</strong> — Puma's iconic heritage court shoe, available in dozens of colourways. The original silhouette has been in continuous production since 1968.</li>
    <li><strong>Puma RS-X</strong> — chunky retro runner with layered colourways, popular in street style</li>
    <li><strong>Puma Cali</strong> — low-profile court shoe, cleaner aesthetic than the RS-X</li>
    <li><strong>Puma Clyde</strong> — slim, classic basketball silhouette</li>
  </ul>
  <p className="mb-4">
    Puma white sneakers for men are consistently among the top-selling styles — the Puma Cali and Puma Suede both have popular white colourways that work across casual and smart-casual outfits.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Football / Soccer Boots</p>
  <p className="mb-2">
    Puma soccer boots cover firm ground (FG), soft ground (SG), and artificial ground (AG) options across Puma's three football boot lines:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-2">
    <li><strong>Future</strong> — asymmetric lacing, flex fit collar, for flair players</li>
    <li><strong>Ultra</strong> — sprint-focused, lightweight upper, for pace players</li>
    <li><strong>King</strong> — classic leather upper, precision touch, for technical players</li>
  </ul>
  <p className="mb-4">
    Puma also produces indoor (IC) and turf (TF) variants for five-a-side and astroturf play. Football boots start from ₹1,500 on entry-level models and go up to ₹15,000+ on top-tier FG boots.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Puma Ferrari Shoes</p>
  <p className="mb-4">
    The puma ferrari shoes collaboration line produces co-branded footwear in Ferrari's signature red, black, and yellow colourways — covering casual sneakers, driving shoes, and motorsport-inspired lifestyle footwear. This is one of Puma's most distinctive and popular collaboration ranges in India. Prices typically range from ₹4,500–₹10,000.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Puma Black Sneakers (Men)</p>
  <p className="mb-4">
    Puma black sneakers in the men's range span the full catalogue — from the Suede Classic in black to the RS-X in black colourways and training shoes in all-black configurations. A consistently searched style; filter by colour on Puma's website to find the full black sneaker selection.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Puma Suede Shoes</p>
  <p className="mb-6">
    Puma suede shoes — specifically the Puma Suede Classic and its variants — are one of the brand's heritage icons. The original suede leather upper, rubber cupsole, and clean silhouette have changed little since 1968. Available in men's, women's, and kids' sizes, in dozens of colourways from classic black-and-white to seasonal limited editions.
  </p>

  {/* Puma Shoes for Women */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Puma Shoes for Women</p>
  <p className="mb-4">
    Puma shoes for women cover running, training, and lifestyle categories with distinct women's-specific fits and colourways:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Puma Sneakers for Ladies</p>
  <p className="mb-2">
    The most popular puma sneakers for ladies in India include:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-2">
    <li><strong>Puma Cali</strong> — the clean, low-profile court shoe is one of Puma's top sellers in women's footwear</li>
    <li><strong>Puma Mayze</strong> — a platform-soled sneaker with a chunkier profile, popular in the lifestyle segment</li>
    <li><strong>Puma Suede</strong> — available in women's-specific colourways and sizing</li>
    <li><strong>Puma Softride</strong> — lightweight, cushioned walking and casual shoe with slip-on options</li>
  </ul>
  <p className="mb-4">
    Puma white sneakers for women — particularly the Cali and Mayze — are among the highest-demand styles. White leather or synthetic uppers with minimal branding are the consistent top-sellers in women's Puma footwear.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Women's Running Shoes</p>
  <p className="mb-6">
    Puma's women's running range includes the Velocity Nitro and Magnify Nitro in women's-specific fits. The Puma Flyer and Resolve series cover budget running for women from ₹2,500.
  </p>

  {/* Kids' Shoes */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Kids' Shoes</p>
  <p className="mb-6">
    Puma kids' footwear covers infants (size 17–21), toddlers (22–27), and older kids (28–38) across running, training, and casual styles. Key features in the kids' range include Velcro fastening for younger sizes, lightweight construction, and durable rubber outsoles. Prices start from ₹1,800 on entry-level kids' styles.
  </p>

  {/* Puma Clothing */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Puma Clothing
  </h3>
  <p className="mb-4">
    Puma's apparel range in India covers performance sportswear, casual athleisure, and branded lifestyle clothing:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Men's Clothing</p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Running</strong> — lightweight, moisture-wicking T-shirts, shorts, and tights for training. DryCell technology (Puma's moisture management fabric) is featured across most performance tops</li>
    <li><strong>Football</strong> — match kits, training jerseys, and fan merchandise including India national team editions and club replica jerseys</li>
    <li><strong>Cricket</strong> — Puma is an official kit sponsor for several IPL teams and produces cricket-specific playing shirts, trousers, and training gear</li>
    <li><strong>Gym &amp; Training</strong> — compression tights, training shorts, and gym T-shirts across the Puma Evostripe and Modern Basics ranges</li>
    <li><strong>Casual / Athleisure</strong> — hoodies, joggers, track jackets, and polo shirts in the Puma Essentials and Squad ranges — the mid-ground between pure sportswear and casual everyday clothing</li>
  </ul>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Women's Clothing</p>
  <p className="mb-4">
    Women's Puma clothing covers workout wear (sports bras, leggings, training tops), yoga and studio wear, and casual athleisure. The Puma Studio collection and Puma Fit range are the primary women's performance lines. Casual options include the Puma Classics and Modern Sportswear ranges in joggers, hoodies, and crop tops.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Kids' Clothing</p>
  <p className="mb-6">
    Kids' Puma clothing covers training sets, track suits, T-shirts, and shorts in smaller sizing from 104cm (approximately age 4) to 176cm (approximately age 16). School sports and casual everyday wear are both covered in the kids' range.
  </p>

  {/* Puma Accessories & Sports Equipment */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Puma Accessories &amp; Sports Equipment
  </h3>
  <p className="mb-4">
    Beyond footwear and clothing, Puma India stocks a range of sports accessories and equipment:
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Bags &amp; Backpacks</p>
  <p className="mb-4">
    Gym bags, backpacks, drawstring bags, and duffel bags across the Puma Phase, Puma Core, and Puma Pro Training ranges. Prices from ₹599 on drawstring bags to ₹3,500+ on premium duffel bags.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Caps &amp; Headwear</p>
  <p className="mb-4">
    Puma-branded caps, visors, and beanies — available across performance and lifestyle categories. Popular with the India cricket fan merchandise range.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Socks</p>
  <p className="mb-4">
    Performance and casual socks from ₹199 per pair. Often sold in multi-packs at reduced per-pair cost.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Sunglasses &amp; Eyewear</p>
  <p className="mb-4">
    Sport-specific sunglasses with impact-resistant lenses and wraparound frames for running, cycling, and outdoor sports.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Sports Equipment</p>
  <p className="mb-4">
    Cricket bats, gloves, and protective gear under the Puma Cricket range — one of the few international sportswear brands with a dedicated cricket equipment line for the Indian market.
  </p>

  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Watches</p>
  <p className="mb-6">
    Puma lifestyle watches in sports and casual configurations — available on Puma India and third-party platforms.
  </p>

  {/* Sale Calendar Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Best Time to Buy Puma Products — Sale Calendar 2026
  </h3>
  <p className="mb-4">
    Timing your purchase around Puma India's major sale events is one of the most reliable ways to buy at the lowest price — especially when a verified Puma coupon code from CouponsCrew is applied on top of already-reduced sale prices:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Sale Event</th>
          <th className="p-4">Tentative Month</th>
          <th className="p-4">Expected Discount</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Republic Day Sale</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 50% off</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">End of Season Sale (EOSS)</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 70% off</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Holi Sale</td>
          <td className="p-4">February – March</td>
          <td className="p-4">40% to 60% off</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Summer Sale</td>
          <td className="p-4">April</td>
          <td className="p-4">Up to 60% off</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Diwali Sale</td>
          <td className="p-4">October</td>
          <td className="p-4">50% to 70% sitewide + extra coupons</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Black Friday Sale</td>
          <td className="p-4">November</td>
          <td className="p-4">Extra 20% on sale items</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Year-End Clearance</td>
          <td className="p-4">December</td>
          <td className="p-4">Up to 80% final markdowns</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    The End of Season Sale (EOSS) in January is Puma India's most significant annual sale — discounts up to 70% off across footwear, clothing, and accessories mark the clearance of the previous year's stock. This is the best window to buy premium running shoes, puma ferrari shoes, and full-priced lifestyle sneakers at their lowest annual price.
  </p>
  <p className="mb-4">
    The Year-End Clearance (December) complements EOSS with final markdowns of up to 80% on the oldest remaining stock. If you are shopping for puma suede shoes, puma black sneakers, or classic styles rather than the latest releases, the year-end window consistently delivers the lowest per-pair price.
  </p>
  <p className="mb-4">
    The Black Friday Sale (November) adds an extra 20% on top of already-reduced sale items — making it an effective stacking window where a Puma promo code applied on top of Black Friday pricing creates some of the deepest discounts outside of EOSS.
  </p>
  <p className="mb-4">
    The Diwali Sale (October) is the strongest festive-window event — 50%–70% sitewide with additional app and bank card coupons running simultaneously. A reliable time to buy puma running shoes or puma shoes for women if you have been waiting for a significant markdown.
  </p>
  <p className="mb-6">
    💡 CouponsCrew publishes dedicated pages for each major Puma sale event with early-access code previews and bank offer breakdowns 2–3 days before each sale goes live. Bookmark this page and check back before each sale date.
  </p>

            {/* Section: Puma Factory Store */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Puma Factory Store — What It Is and How to Use It
            </h3>

            <p>
              The Puma factory store offers a dedicated outlet shopping experience — both through Puma's physical factory outlets in major Indian cities and through a separate "Sale" or "Outlet" section on the Puma India website.
            </p>

            <p className="font-bold text-[#2C2C40]">
              What you find in the Puma Factory Store:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-500 font-bold">
              <li>Past-season footwear and clothing at 40%–70% below original retail price</li>
              <li>Older colourways of current silhouettes (e.g., puma suede shoes in discontinued colours)</li>
              <li>Overstocked sizes in popular running and training shoes</li>
              <li>Outlet-exclusive bundle offers (e.g., 2 T-shirts for ₹999)</li>
            </ul>

            <p>
              <strong className="text-[#2C2C40]">Can I use a Puma coupon code in the factory store? </strong>
              Puma factory store products are already marked down significantly. Some Puma discount codes apply on top of factory store pricing — check the individual deal card on this CouponsCrew page for factory store / outlet eligibility before applying. Where stacking is permitted, the effective discount can reach 70%–80% below the original price.
            </p>

            <p>
              Physical Puma Factory Store locations are present in major Indian cities including Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, and Pune. For a complete list of Puma factory store addresses, use the Store Locator on in.puma.com.
            </p>

            {/* Section: Puma Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Puma Saving Tips — Get More Off Every Purchase
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Stack a Puma Coupon Code with a Bank Card Offer: </strong>
              HDFC, ICICI, SBI, and Axis card holders get periodic instant discount offers on Puma India — typically 10%–15% extra off at the payment step. Apply your Puma discount code in the coupon field first, then select your bank card at checkout. Where both are active, the stacking can bring effective discounts to 60%–70% off on mid-range footwear.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Shop the Puma Factory Store Section First: </strong>
              Before paying full price for any Puma shoe or clothing item, check the factory store / outlet section on in.puma.com. Past-season styles are listed at 40%–70% below original prices — for classic silhouettes like puma suede shoes or puma black sneakers, the current-season version and the previous-season version are often nearly identical.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Time Your Purchase Around EOSS or Year-End Clearance: </strong>
              The highest discounts on Puma India — up to 80% — occur during the January EOSS and December year-end clearance. If you are not buying for an urgent need, holding out for one of these windows and applying a Puma promo code on top is the most effective saving strategy.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Use the Puma App for App-Exclusive Deals: </strong>
              Puma India's app surfaces personalised discount codes, early access to sale events, and app-exclusive offers not available on the desktop website. Download the app and enable notifications to catch these before they expire.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Buy Puma Running Shoes During the Summer Sale: </strong>
              The Summer Sale (April) is a strong window specifically for puma running shoes — older performance models from the Velocity and Deviate Nitro lines are marked down significantly as the new season's models arrive. If you do not need the latest version of a running shoe, the previous model at 50%–60% off is a significant saving.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Check CouponsCrew for the Best Active Puma Voucher Code: </strong>
              Before every purchase — whether on Puma India's website, Myntra, or Flipkart — check this CouponsCrew page for the best currently active Puma voucher code. Platform-specific codes (valid only on Puma via Myntra, for example) are listed separately from codes valid directly on in.puma.com.
            </p>

            <p>
              <strong className="text-[#2C2C40]">7. Buy Multi-Packs in Accessories for Better Per-Unit Value: </strong>
              Puma socks, caps, and other accessories are frequently offered in multi-pack bundles at lower per-unit cost than single-item purchases. Combining a bundle purchase with a Puma discount code that covers accessories maximises the saving per rupee spent.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Puma Customer Support
            </h3>
            <p>
              Puma India provides multiple customer support channels for order updates, return/exchange assistance, and product warranty claims:
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
                    <td className="p-4 font-bold text-[#2C2C40]">Customer Care WhatsApp / Helpline</td>
                    <td className="p-4">+91 87929 68173 (Callback requests & WhatsApp assistance)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Support</td>
                    <td className="p-4">customercareindia@puma.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Online Support & Chat</td>
                    <td className="p-4">Available on in.puma.com/in/en/help</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Store Locator</td>
                    <td className="p-4">Find official Puma retail stores & factory outlets on in.puma.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Social Media</td>
                    <td className="p-4">@PUMA on Instagram and Twitter/X</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Puma Mobile App Support</td>
                    <td className="p-4">In-app order tracking, seamless return logging, and delivery status updates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Nike — </strong> Premium performance and lifestyle sportswear; strong running and basketball range
            </p>
            <p>
              <strong className="text-[#2C2C40]">Adidas — </strong> Direct Puma competitor; strong in running, football, and lifestyle with frequent sale events
            </p>
            <p>
              <strong className="text-[#2C2C40]">Reebok — </strong> Fitness and training-focused footwear and apparel at competitive prices
            </p>
            <p>
              <strong className="text-[#2C2C40]">Myntra — </strong> Stocks Puma alongside hundreds of other fashion and sportswear brands; frequent additional discounts via Myntra codes
            </p>
            <p>
              <strong className="text-[#2C2C40]">Flipkart — </strong> Puma products available with bank card offers and Big Billion Days discounts
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for Puma Deals
            </h3>
            <p>
              Finding a working Puma coupon code should be a 30-second task. CouponsCrew verifies every code on this page before it goes live — minimum order values, eligible categories, user restrictions, and expiry dates are all confirmed and clearly shown on every deal card.
            </p>
            <p>
              Puma India already offers competitive pricing on sportswear — particularly on puma shoes for men, puma sneakers for ladies, puma running shoes, and classic silhouettes like puma suede shoes and puma white sneakers. A verified Puma promo code or Puma discount code from CouponsCrew stacked on top of sale pricing — and combined with a bank card offer where available — consistently delivers some of the best effective prices on premium sportswear available in India.
            </p>
            <p>
              Bookmark this page and check back before every Puma purchase — whether you are shopping the latest puma ferrari shoes, picking up puma soccer boots for the season, or hunting the factory store for the best deal on a classic pair of puma black sneakers.
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
              Frequently Asked Questions — Puma Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working Puma coupon code today?",
                a: "Every Puma coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply, check the deal card conditions and try the next active listing."
              },
              {
                q: "Q2. Can I use a Puma discount code on factory store products?",
                a: "Some Puma discount codes apply on factory store items and some exclude them. Check the individual deal card on this CouponsCrew page for factory store eligibility before building your cart around a specific code."
              },
              {
                q: "Q3. Are Puma coupon codes valid on Myntra and Flipkart?",
                a: "Some Puma promo codes are valid on Puma India's official website (in.puma.com) only, while others are platform-specific (valid only on Myntra or Flipkart). CouponsCrew deal cards specify where each code is redeemable — check before clicking through to shop."
              },
              {
                q: "Q4. What is the best Puma shoe for running in India?",
                a: "The Puma Velocity Nitro 2 is widely regarded as the best everyday running shoe in Puma's current India catalogue — NITRO foam midsole, solid durability, and a comfortable fit for distances between 5K and half-marathon. For serious racers, the Deviate Nitro 2 is Puma's top-tier performance option. A verified Puma coupon code from CouponsCrew can bring both models meaningfully below their retail price."
              },
              {
                q: "Q5. What are Puma Ferrari shoes?",
                a: "Puma Ferrari shoes are a co-branded collaboration line between Puma and Scuderia Ferrari — producing motorsport-inspired casual sneakers, driving shoes, and lifestyle footwear in Ferrari's signature red, black, and yellow colourways. They are available on Puma India's website and at select Puma stores. Prices range from ₹4,500 to ₹10,000 depending on the style."
              },
              {
                q: "Q6. What is the Puma factory store?",
                a: "The Puma factory store refers to both Puma's physical outlet stores in major Indian cities and the outlet/sale section on in.puma.com. Both offer past-season and overstocked products at 40%–70% below original retail prices. Physical factory store locations can be found via the Store Locator on Puma India's website."
              },
              {
                q: "Q7. Can I stack a Puma coupon code with a bank card offer?",
                a: "In many cases, yes — a Puma voucher code applied at the coupon field and a bank card instant discount at the payment step can both apply to the same order. Some promotions restrict stacking; check the deal card notes on this CouponsCrew page for confirmation before checkout."
              },
              {
                q: "Q8. What is the return policy for Puma India online orders?",
                a: "Puma India offers a 30-day return policy for online orders — items must be unworn, unwashed, and in original packaging with tags intact. Returns are initiated via the Puma India website or app. Refunds are processed within 5–7 business days to the original payment method."
              },
              {
                q: "Q9. Are Puma sneakers for ladies available in wide sizes?",
                a: "Puma India's women's footwear is available in standard sizing (UK 3–8 in most styles). Wide-fit options are not prominently featured as a separate filter on the Indian site — if fit is a concern, the Puma Softride and Cali styles tend to have a slightly roomier fit compared to more performance-focused silhouettes."
              },
              {
                q: "Q10. What is the best Puma coupon code for first-time buyers?",
                a: "First-time buyers should look for new-user codes in the \"New Users\" filter on this CouponsCrew page — typically ₹300–₹500 off with a minimum cart of ₹999. These are the highest-value codes available for new accounts and should be used before switching to standard sitewide codes."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Puma Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Puma Coupons", "Factory Store Deals", "Running Shoes", "Puma Ferrari Series", "Casual Sneakers", "Women's Footwear", "EOSS Clearance", "CouponsCrew Sportswear"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Puma Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 60% OFF Outlet Styles", sub: "Verified coupon code on factory store products" },
              { heading: "Flat ₹500 OFF First Order", sub: "New user exclusive discount on app/web" },
              { heading: "Up to 50% OFF Running Shoes", sub: "Extra savings on Velocity & Nitro series" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, ICICI & Axis cards" },
              { heading: "Motorsport & Ferrari Offers", sub: "Up to 40% off on Ferrari & BMW collection" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">PU</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Puma deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#000000]">{activeModalCoupon.code}</span> at Puma checkout for instant discounts.
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
                className="w-full bg-[#DA020E] hover:bg-[#B80210] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Puma</span>
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
