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
import { Coupon, NYKAA_COUPONS } from './nykaaCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.nykaa.com/';

export default function NykaaStore() {
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

  const coupons: Coupon[] = NYKAA_COUPONS;

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
      q: 'How do I use a Nykaa coupon code?',
      a: 'To use a Nykaa coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Nykaa website or app. If it is a deal, simply click "Visit Nykaa" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Nykaa?',
      a: 'Generally, Nykaa allows only one promotional code per order. You may still be able to combine a coupon code with automatic sitewide offers, depending on the terms of each promotion.'
    },
    {
      q: 'Why is my Nykaa coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Always check the terms listed with each code before applying it at checkout.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Nykaa coupon code listed on this page is checked before publishing, and we periodically re-verify offers to remove any that have expired.'
    },
    {
      q: 'How often are Nykaa coupons updated?',
      a: 'We update this page regularly with the latest Nykaa coupon codes and offers so you can find current, working deals rather than expired ones.'
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
            <Link href="/" className="hover:text-[#FC2779] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#FC2779] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#FC2779] font-semibold">Nykaa Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp"
                      alt="Nykaa Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Nykaa</h1>
                    <span className="bg-[#FDE6EF] text-[#FC2779] text-xs font-bold px-3 py-1 rounded-full border border-[#FBD0E2]">
                      Beauty, Makeup & Skincare
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with verified Nykaa coupon codes, promo codes, and exclusive beauty offers. Enjoy up to 60% OFF, extra 20% OFF, ₹400 OFF first orders, free shipping, free gifts, and discounts on makeup, skincare, haircare, fragrances, and wellness products.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#FC2779] bg-[#FDE6EF] px-2.5 py-1 rounded-full border border-[#FBD0E2]">
                      <Tag size={14} /> 50+ Offers
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
                  className="bg-[#2D0A1F] hover:bg-[#4A1633] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Nykaa</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#FC2779] to-[#2D0A1F] items-center justify-center text-center p-8"
            >
              <div className="text-white space-y-3">
                <span className="inline-block bg-white/15 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Seasonal Sale
                </span>
                <h3 className="text-2xl font-black leading-tight">Beauty & Makeup<br />Offers Live Now</h3>
                <p className="text-white/80 text-sm">Up to 40% OFF across top brands</p>
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
            <div className="w-11 h-11 bg-[#FDE6EF] text-[#FC2779] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F5E3EC] text-[#2D0A1F] rounded-2xl flex items-center justify-center shrink-0">
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹5,000+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FDE6EF] text-[#FC2779] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Nykaa Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Nykaa coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#FC2779) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#FC2779] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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
                {/* Soft Tint Badge using Accent (#2D0A1F) */}
                <span className="bg-[#2D0A1F]/10 text-[#2D0A1F] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FC2779] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC2779]" />
                    <span>Valid on select beauty & personal care categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC2779]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#FC2779]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">


              {/* Action Button - Vibrant CTA Accent (#2D0A1F) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#2D0A1F] hover:bg-[#4A1633] text-white"
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
    <Info size={16} className="text-[#2B2B2B]" />
    <span>What is Nykaa and Why Is It India's Go-To Beauty Platform?</span>
  </h3>
  
  <p className="text-[#1A1A2E] text-sm mb-4">
    Nykaa launched in 2012 as an online-first beauty retailer and has since grown into India's largest omnichannel beauty platform — operating both its e-commerce platform and 200+ physical stores across India under the Nykaa On Trend, Nykaa Luxe, and Nykaa Kiosk formats. In 2021, Nykaa went public on the Indian stock exchanges, becoming one of the most successful tech-led consumer brand listings in Indian market history.
  </p>

  <p className="text-[#1A1A2E] text-sm font-semibold mb-2">
    What makes Nykaa beauty the trusted choice for Indian shoppers:
  </p>

  <ul className="text-[#1A1A2E] text-sm space-y-2 mb-5 list-disc pl-5">
    <li>
      <span className="font-semibold">Authenticity guarantee</span> — Nykaa sources directly from brand principals and authorised distributors. Every product listed on the platform is genuine — a significant differentiator in the Indian beauty market where grey-market and counterfeit products are a real concern on general e-commerce platforms.
    </li>
    <li>
      <span className="font-semibold">Brand breadth</span> — 4,000+ brands from Indian drugstore staples to international prestige labels like Charlotte Tilbury, Huda Beauty, COSRX, and Sol de Janeiro — many of which are available in India exclusively or primarily through Nykaa.
    </li>
    <li>
      <span className="font-semibold">Expert content</span> — Nykaa's in-house editorial team produces tutorials, ingredient guides, skin-type advice, and shade-matching tools that make the shopping experience more informed than any other Indian beauty platform.
    </li>
    <li>
      <span className="font-semibold">Nykaa Prive</span> — the platform's loyalty programme rewards regular shoppers with discounts, birthday gifts, free shipping, and early access to launches.
    </li>
    <li>
      <span className="font-semibold">Nykaa Fashion</span> — the platform has extended into fashion and accessories under the Nykaa fashion vertical, covering western wear, ethnic wear, footwear, and jewellery from 1,500+ brands.
    </li>
    <li>
      <span className="font-semibold">Nykaa Man</span> — a dedicated section for men's grooming covering skincare, haircare, beard care, and personal care from brands like The Man Company, Ustraa, Beardo, and international grooming labels.
    </li>
  </ul>

  <p className="text-[#1A1A2E] text-sm mb-5">
    A verified Nykaa coupon code from CouponsCrew on top of Nykaa's already-competitive beauty pricing is one of the most effective ways to reduce your per-product cost on premium and everyday beauty products alike.
  </p>

  <div className="mt-5 select-none">
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="w-full border border-[#D1D1E9] hover:border-[#2B2B2B] hover:text-[#2B2B2B] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
    >
      <span>Visit Nykaa</span>
      <ArrowRight size={12} />
    </a>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#FC2779] to-[#2D0A1F] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Nykaa Beauty Sale</h3>
                <span className="inline-block bg-[#2D0A1F] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Makeup, Skincare & More
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#FC2779] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Nykaa Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a Nykaa promo code at checkout takes under a minute. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens Nykaa in a new tab or the app.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Browse and add products to your cart.</span> Shop by category — skincare, makeup, haircare, fragrance, wellness, fashion, or Nykaa Man. Add items until your cart meets the minimum order value shown on the deal card, if applicable.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Proceed to checkout.</span> Click the bag icon and tap "Proceed to Buy." Confirm your delivery address.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Locate the coupon / promo code field.</span> On the order summary page, look for "Apply Coupon" or "Have a Promo Code?" — it appears in the price breakdown section before the payment step.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the Nykaa coupon code from your clipboard and click "Apply." The discount reflects in the order total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, or Nykaa wallet. If you have an eligible bank card — HDFC, ICICI, SBI, or Axis — select it at this step to stack the bank discount on top of your coupon saving where the promotion allows.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Place your order.</span> Confirm and complete payment. Your order confirmation arrives via email and SMS with a tracking link.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a Nykaa discount code shows as invalid, check that your cart value meets the minimum order threshold and that your selected products are in the eligible category. Some codes exclude luxury or prestige brands. Refresh this CouponsCrew page for the next active code.
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
            Nykaa Coupon Code & Beauty Deals — Verified for August 2026
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
          {NYKAA_COUPONS.map((coupon) => (
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
              Nykaa is India's most trusted beauty and personal care platform — stocking over 4,000 brands and 2 lakh+ products across skincare, makeup, haircare, fragrances, wellness, and fashion. From everyday drugstore essentials to premium international beauty brands, Nykaa covers every price point and category for anyone who takes their beauty and personal care routine seriously.
            </p>

            <p>
              At CouponsCrew, we track every active Nykaa coupon code, Nykaa discount code, and Nykaa promo code so you never apply a deal that expired last week. Every code on this page is verified before it goes live — minimum cart values, eligible categories, user type, and validity dates are all confirmed and shown clearly on each deal card.
            </p>

            <p>
              Whether you are restocking your skincare shelf, building a makeup kit, shopping Nykaa fashion for the season, exploring Nykaa beauty products from international brands that are hard to find elsewhere in India, or looking for Nykaa man grooming essentials — there is almost always a saving available. This page is updated daily. Bookmark it and check it before every Nykaa purchase.
            </p>

           
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Top Categories on Nykaa
  </h3>
  <p className="mb-4">
    Nykaa's catalogue is one of the broadest in Indian beauty retail. Here is what each major category covers and where the best savings typically apply:
  </p>

  {/* Skincare */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Skincare</p>
  <p className="mb-4">
    Nykaa beauty skincare is the platform's largest and most diverse category — covering cleansers, toners, serums, moisturisers, sunscreens, face masks, eye creams, and treatments across every skin type and concern. Brands range from affordable Indian labels like Nykaa Naturals and Plum to mid-range options like Minimalist, Dot &amp; Key, and The Derma Co., all the way to international prestige brands like The Ordinary, COSRX, and Clinique.
  </p>
  <p className="mb-2">Key skincare sub-categories that consistently see strong discounts:</p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Sunscreen</strong> — a high-frequency purchase category; bundle deals and combo packs on Nykaa deliver strong per-unit savings</li>
    <li><strong>Serums &amp; treatments</strong> — vitamin C, niacinamide, hyaluronic acid, and retinol serums from brands like The Ordinary and Minimalist are among Nykaa's best-selling products</li>
    <li><strong>Face wash &amp; cleansers</strong> — everyday basics where multi-pack and combo deals are common</li>
    <li><strong>Nykaa SkinRX</strong> — Nykaa's own prescription-inspired skincare line with dermatologist-formulated products at accessible prices</li>
  </ul>
  <p className="mb-6">
    Applying a Nykaa promo code valid on skincare during a sale window — particularly the Grand Festive Sale or Pink Friday Sale — is the most effective strategy for stocking up on high-value serums and treatments at reduced prices.
  </p>

  {/* Haircare */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Haircare</p>
  <p className="mb-4">
    Nykaa's haircare catalogue covers shampoos, conditioners, hair oils, serums, masks, heat protection, and styling products. Indian heritage brands like Indulekha and Parachute sit alongside salon-grade international labels like L'Oréal Professionnel, Kérastase, and Wella.
  </p>
  <p className="mb-2">Popular haircare sub-categories on Nykaa:</p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
    <li><strong>Hair growth &amp; oil treatments</strong> — Indulekha Bringha Oil and Mamaearth Onion Oil are among the most purchased products on the platform</li>
    <li><strong>Anti-hairfall &amp; scalp care</strong> — strong demand in the Indian market; several Nykaa-exclusive brands have emerged in this segment</li>
    <li><strong>Colour-protection</strong> — premium shampoos and conditioners from Kérastase and L'Oréal Professionnel at Nykaa prices are meaningfully lower than salon retail</li>
    <li><strong>Heat styling protection</strong> — TRESemmé, Livon, and L'Oréal Elvive heat protection sprays and serums</li>
  </ul>

  {/* Makeup */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Makeup</p>
  <p className="mb-4">
    Nykaa cosmetics is where the platform's curation is most impressive — spanning budget-friendly Indian makeup brands all the way to international prestige counters. Sub-categories include:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Lips</strong> — lipsticks, lip glosses, lip liners, and lip care from Sugar, Kay Beauty, Maybelline, MAC, and Charlotte Tilbury</li>
    <li><strong>Face</strong> — foundations, concealers, blushes, bronzers, and setting powders across a wide shade range including deeper Indian skin tones</li>
    <li><strong>Eyes</strong> — kajal, eyeliners, mascaras, eyeshadow palettes, and false lashes</li>
    <li><strong>Nails</strong> — nail polishes, nail care, and nail art tools</li>
    <li><strong>Kay Beauty</strong> — Katrina Kaif's makeup brand, available exclusively on Nykaa — one of the platform's most-searched brands</li>
  </ul>
  <p className="mb-6">
    Nykaa cosmetics deals are strongest during the Pink Friday Sale (November) and the Grand Festive Sale (September–October) — these are the best windows to buy premium makeup from international brands at meaningful discounts.
  </p>

  {/* Mom and Baby */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Mom and Baby</p>
  <p className="mb-6">
    Nykaa's Mom and Baby section covers maternity skincare, baby care, and nursing essentials — brands include The Moms Co., Mamaearth, Sebamed, and Chicco. Products cover baby body wash, baby skincare, stretch mark creams, nursing pads, and postpartum care. This category prioritises dermatologically tested and hypoallergenic formulations — Nykaa's authenticity guarantee is particularly valuable here given the sensitivity of the buyer segment.
  </p>

  {/* Fragrances */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Fragrances</p>
  <p className="mb-6">
    Nykaa stocks perfumes, body mists, and fragrance gift sets from both Indian and international brands — Engage, Denver, Fogg in the accessible tier; and international prestige labels like Versace, Yves Saint Laurent, Dior, and Jo Malone in the luxury segment. Fragrance gift sets are a popular Diwali and festive gifting category on the platform.
  </p>

  {/* Wellness */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Wellness</p>
  <p className="mb-6">
    Nykaa's wellness section covers nutritional supplements, protein powders, herbal supplements, sexual wellness, feminine hygiene, and personal health devices. This is a newer and expanding vertical on the platform — growing alongside the broader Indian wellness market.
  </p>

  {/* Nykaa Man */}
  <p className="font-bold text-[#2C2C40] text-lg mt-4 mb-2">Nykaa Man</p>
  <p className="mb-2">
    Nykaa man is the platform's dedicated men's grooming destination — launched to address the fast-growing men's personal care market in India. The range covers:
  </p>
  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
    <li><strong>Face care</strong> — face washes, moisturisers, sunscreens, and serums formulated for men's skin from brands like Ustraa, The Man Company, Beardo, Bombay Shaving Company, and Gillette Skin</li>
    <li><strong>Hair care</strong> — shampoos, conditioners, hair serums, pomades, and styling clay</li>
    <li><strong>Beard care</strong> — beard oils, beard balms, beard washes, and beard grooming kits — one of the highest-growth sub-categories in Indian men's grooming</li>
    <li><strong>Body care</strong> — deodorants, body washes, and talc from both mass and premium brands</li>
    <li><strong>Shaving</strong> — razors, shaving gels, after-shave balms, and shaving kits</li>
  </ul>
  <p className="mb-6">
    A Nykaa coupon code valid on Nykaa Man products is listed separately in the men's filter on this CouponsCrew page where available.
  </p>

  {/* Brands Available on Nykaa */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Brands Available on Nykaa — Indian &amp; International
  </h3>
  <p className="mb-4">
    Nykaa's brand portfolio is one of the most comprehensive in Indian beauty retail — covering every price tier from ₹50 face washes to ₹15,000+ prestige serums:
  </p>

  {/* Indian Brands Table */}
  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">Indian Brands</p>
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Brand</th>
          <th className="p-4">Category Strength</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Sugar Cosmetics</td>
          <td className="p-4">Makeup — lipsticks, eyeliners, foundations</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">L'Oréal Paris</td>
          <td className="p-4">Haircare, skincare, makeup</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Kay Beauty</td>
          <td className="p-4">Makeup — Katrina Kaif's brand, Nykaa-exclusive</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Nykaa SkinRX</td>
          <td className="p-4">Prescription-inspired skincare</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Indulekha</td>
          <td className="p-4">Ayurvedic haircare — Bringha oil range</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Fiama</td>
          <td className="p-4">Body wash, skin care bars</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">The Moms Co.</td>
          <td className="p-4">Mom and baby skincare</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Nykaa Naturals</td>
          <td className="p-4">Affordable skincare and haircare basics</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Wonderlust</td>
          <td className="p-4">Fragrance and beauty accessories</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* International Brands Table */}
  <p className="font-bold text-[#2C2C40] text-base mt-4 mb-2">International Brands</p>
  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Brand</th>
          <th className="p-4">Category Strength</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">The Ordinary</td>
          <td className="p-4">Skincare — affordable active ingredients</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Huda Beauty</td>
          <td className="p-4">Makeup — eyeshadow palettes, lip products</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Charlotte Tilbury</td>
          <td className="p-4">Prestige makeup and skincare</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Clinique</td>
          <td className="p-4">Dermatologist-developed skincare and makeup</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Sol de Janeiro</td>
          <td className="p-4">Body care — Brazilian Bum Bum range</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">COSRX</td>
          <td className="p-4">Korean skincare — acne and barrier care</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">E.l.f. Cosmetics</td>
          <td className="p-4">Affordable US makeup brand</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Pixi</td>
          <td className="p-4">Skincare — Glow Tonic, vitamin C range</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">The Face Shop</td>
          <td className="p-4">Korean skincare and makeup</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-6">
    Many of these international brands are available in India primarily or exclusively through Nykaa — making the platform the default destination for shoppers specifically looking for COSRX, Sol de Janeiro, Charlotte Tilbury, or Huda Beauty products. A Nykaa discount code on international brand purchases where eligible can bring premium import-priced products to more accessible levels.
  </p>

  {/* Nykaa Prive Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Nykaa Prive Loyalty Programme — Is It Worth It?
  </h3>
  <p className="mb-4">
    Nykaa Prive is the platform's loyalty tier — accessible to customers who spend ₹7,500 or more in a calendar year on Nykaa. Benefits include:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Benefit</th>
          <th className="p-4">Details</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Welcome discount</td>
          <td className="p-4">5% discount coupon on joining</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Birthday gift</td>
          <td className="p-4">Complimentary gift on purchase made in your birthday month</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Free shipping</td>
          <td className="p-4">4 free shipping coupons credited on enrolment</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Early access</td>
          <td className="p-4">First to know about new brand launches and beauty trends</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Exclusive offers</td>
          <td className="p-4">Access to Prive-only sale events and member-exclusive deals</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    <strong>Is Nykaa Prive worth reaching?</strong><br />
    For regular Nykaa shoppers spending ₹7,500+ per year on beauty — which amounts to roughly ₹625/month, a reasonable figure for anyone buying skincare, haircare, and makeup across the year — Prive unlocks a compounding set of benefits. The birthday gift alone is typically valued at ₹500–₹1,500 depending on the products selected. Combined with the welcome coupon and free shipping credits, Prive consistently delivers more value than the ₹7,500 threshold requires.
  </p>
  <p className="mb-6">
    For shoppers on the threshold, timing a larger purchase (stocking up on serums, a prestige makeup palette, or a fragrance) to cross ₹7,500 in a calendar year is worth doing deliberately.
  </p>

  {/* Nykaa Sale Calendar Section */}
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Nykaa Sale Calendar 2026 — Best Times to Shop
  </h3>
  <p className="mb-4">
    Nykaa runs more distinct sale events than almost any other Indian beauty platform — from monthly Payday Sales to the flagship Pink Friday Sale in November. Here is the full 2026 sale calendar:
  </p>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0]">
      <thead>
        <tr className="bg-[#5B4FBE] text-white font-black text-sm">
          <th className="p-4">Sale Name</th>
          <th className="p-4">Tentative Month</th>
          <th className="p-4">Best Discount</th>
          <th className="p-4">Best Categories</th>
        </tr>
      </thead>
      <tbody className="text-sm font-medium text-slate-700 divide-y divide-gray-100">
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Republic Day Sale</td>
          <td className="p-4">January</td>
          <td className="p-4">Up to 50% + 30% on combos</td>
          <td className="p-4">Makeup under ₹299</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Holi Beauty Sale</td>
          <td className="p-4">March</td>
          <td className="p-4">Up to 40%</td>
          <td className="p-4">Skincare, Colorplay</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Hot Pink Sale</td>
          <td className="p-4">July – August</td>
          <td className="p-4">Up to 60%</td>
          <td className="p-4">Haircare, Wellness</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Freedom Sale</td>
          <td className="p-4">7th–17th August</td>
          <td className="p-4">Up to 50%</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Grand Festive Sale</td>
          <td className="p-4">September – October</td>
          <td className="p-4">Up to 75%</td>
          <td className="p-4">All beauty categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Navratri / Dussehra Sale</td>
          <td className="p-4">September – October</td>
          <td className="p-4">Up to 50%</td>
          <td className="p-4">Fragrance, Hair</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Pink Friday Sale</td>
          <td className="p-4">November</td>
          <td className="p-4">Up to 70%</td>
          <td className="p-4">Skincare, Makeup</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Payday Sale</td>
          <td className="p-4">1st–5th every month</td>
          <td className="p-4">Up to 50%</td>
          <td className="p-4">All categories</td>
        </tr>
        <tr>
          <td className="p-4 font-bold text-[#2C2C40]">Beauty Bonanza</td>
          <td className="p-4">Multiple times a year</td>
          <td className="p-4">Up to 40%</td>
          <td className="p-4">All categories</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mb-4">
    The Pink Friday Sale (November) is Nykaa's most significant annual sale event — the beauty equivalent of Black Friday. Discounts up to 70% across skincare, makeup, and haircare, with exclusive launches, gift sets, and brand-specific offers running simultaneously. A verified Nykaa coupon code from CouponsCrew applied on top of Pink Friday pricing is the deepest-discount window of the year for premium beauty purchases.
  </p>
  <p className="mb-4">
    The Grand Festive Sale (September–October) is the best pre-Diwali window — up to 75% off across all beauty categories. An ideal time to stock up on premium skincare, pick up makeup gifts, or buy international prestige brands that rarely see discounts outside of Nykaa's major sale events.
  </p>
  <p className="mb-4">
    The Payday Sale (1st–5th of every month) is Nykaa's most consistent recurring discount event — up to 50% off across all categories every single month. If you plan your beauty purchases to coincide with this window and apply a Nykaa promo code from CouponsCrew on top, you can maintain a regular saving rhythm without waiting for annual sale events.
  </p>
  <p className="mb-6">
    The Hot Pink Sale (July–August) is the mid-year highlight — strong for haircare and wellness products specifically, with up to 60% off during a window that most other platforms do not run comparable sales.
  </p>


            {/* Section: Nykaa Fashion */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Nykaa Fashion — Beyond Beauty
            </h3>

            <p>
              Nykaa fashion is the platform's fashion vertical — a full fashion e-commerce destination covering western wear, ethnic wear, activewear, footwear, jewellery, and accessories from 1,500+ brands. Key brands on Nykaa Fashion include AND, Global Desi, Libas, Fuschia, and a wide range of independent Indian designers.
            </p>

            <p>
              Nykaa Fashion sale events align with the main Nykaa calendar — the Grand Festive Sale and Pink Friday Sale both cover fashion alongside beauty, and Nykaa Fashion runs its own end-of-season clearance sales separately. Fashion discounts on the platform reach 60%–80% during clearance windows.
            </p>

            <p>
              A Nykaa voucher code valid on Nykaa Fashion is listed separately in the fashion filter on this CouponsCrew page where available — fashion and beauty codes are sometimes different on Nykaa, so checking category eligibility before applying is recommended.
            </p>

            {/* Section: Nykaa Saving Tips */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Nykaa Saving Tips — Get More Off Every Purchase
            </h3>

            <p>
              <strong className="text-[#2C2C40]">1. Always Apply a CouponsCrew Nykaa Code Before Checkout: </strong>
              A verified Nykaa offer code from CouponsCrew stacks on top of Nykaa's already-discounted sale prices. Even a 10–15% additional code on a ₹2,000 skincare order saves ₹200–₹300 — the equivalent of a free product.
            </p>

            <p>
              <strong className="text-[#2C2C40]">2. Shop the Payday Sale Every Month: </strong>
              The Payday Sale runs from the 1st to the 5th of every month — if you time your Nykaa purchases to this window and combine it with a Nykaa promo code, you build a consistent monthly saving habit without needing to wait for annual events.
            </p>

            <p>
              <strong className="text-[#2C2C40]">3. Use the Nykaa App for App-Exclusive Deals: </strong>
              Nykaa's app surfaces personalised discount codes and app-exclusive offers based on your browsing and purchase history. Download the app and enable notifications — app-exclusive deals are not surfaced on the desktop site.
            </p>

            <p>
              <strong className="text-[#2C2C40]">4. Stack a Nykaa Coupon with a Bank Card Offer: </strong>
              HDFC, ICICI, SBI, and Axis bank card holders get periodic instant discount offers on Nykaa — typically 5%–10% extra off at the payment step. Apply your Nykaa discount code first, then select your bank card for the additional saving where it is stackable.
            </p>

            <p>
              <strong className="text-[#2C2C40]">5. Reach Nykaa Prive Status Deliberately: </strong>
              If you are close to ₹7,500 in annual spending, top up with a planned purchase — haircare stock-up, a prestige skincare product, or a makeup palette you have been considering. The Prive benefits (birthday gift, free shipping, exclusive offers) are worth reaching the threshold for regular shoppers.
            </p>

            <p>
              <strong className="text-[#2C2C40]">6. Buy International Brands During Pink Friday: </strong>
              International prestige brands on Nykaa — Charlotte Tilbury, Huda Beauty, Sol de Janeiro, COSRX — rarely go below full price outside of Nykaa's major sale events. The Pink Friday Sale is the best opportunity of the year to buy these brands at a meaningful discount. Plan your prestige beauty restocking around November.
            </p>

            <p>
              <strong className="text-[#2C2C40]">7. Use Combo and Bundle Deals for Everyday Products: </strong>
              For high-frequency repurchase products — face wash, moisturiser, shampoo, conditioner — Nykaa's combo and bundle deals offer a lower per-unit cost than buying individual products. Apply a Nykaa voucher code on combo purchases for the maximum saving per rupee spent.
            </p>

            <p>
              <strong className="text-[#2C2C40]">8. Check the Nykaa "Under ₹299" and "Under ₹499" Sections: </strong>
              Nykaa maintains curated sections of beauty products under specific price thresholds — useful for discovering affordable alternatives to products you are spending more on, and for building a cart that meets minimum order thresholds for code eligibility without inflating the spend significantly.
            </p>

            {/* Section: Customer Support Table */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Nykaa Customer Support
            </h3>
            <p>
              Nykaa provides comprehensive customer care support across multiple channels for order tracking, returns, and general queries:
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
                    <td className="p-4 font-bold text-[#2C2C40]">Customer Care Helpline</td>
                    <td className="p-4">1800-267-4444 (Mon–Sat, 8 AM to 8 PM IST)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Email Support</td>
                    <td className="p-4">support@nykaa.com</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Help Centre & Chat</td>
                    <td className="p-4">Available on nykaa.com and the Nykaa app under "Help"</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Social Media</td>
                    <td className="p-4">@MyNykaa on Instagram and Twitter/X for time-sensitive support</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-[#2C2C40]">Nykaa App Support</td>
                    <td className="p-4">In-app order tracking, instant return requests, and live agent chat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section: Similar Stores */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Similar Stores You Might Like
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Myntra Beauty — </strong> Fashion-first platform with a growing beauty section; good for combo fashion + beauty orders
            </p>
            <p>
              <strong className="text-[#2C2C40]">Purplle — </strong> Indian beauty platform focused on affordable drugstore brands; strong on private labels
            </p>
            <p>
              <strong className="text-[#2C2C40]">Tira Beauty — </strong> Reliance's beauty retail platform; newer entrant with strong international brand tie-ups
            </p>
            <p>
              <strong className="text-[#2C2C40]">Sephora India — </strong> Premium beauty retail with a curated prestige brand range; higher price point than Nykaa
            </p>
            <p>
              <strong className="text-[#2C2C40]">Amazon Beauty — </strong> Wide range at competitive prices; fewer exclusive brands than Nykaa but strong on basics
            </p>

            {/* Section: Closing */}
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4 mt-8">
              Closing — Why CouponsCrew for Nykaa Deals
            </h3>
            <p>
              Finding a working Nykaa coupon code should be a 30-second task. CouponsCrew verifies every deal on this page before it goes live — minimum order values, eligible categories, user restrictions, and expiry dates are all confirmed and clearly shown on every deal card.
            </p>
            <p>
              Nykaa's beauty and personal care pricing is already competitive — particularly during the Payday Sale, Hot Pink Sale, and the flagship Pink Friday Sale. A verified Nykaa discount code or Nykaa promo code from CouponsCrew stacked on top of sale pricing — and combined with a bank card offer where available — consistently delivers some of the best effective prices on skincare, Nykaa cosmetics, haircare, and Nykaa beauty products available anywhere in India.
            </p>
            <p>
              Bookmark this page and check back before every Nykaa purchase — whether you are restocking your nykaa beauty skincare essentials, exploring Nykaa fashion for the season, shopping international prestige brands during Pink Friday, or building a Nykaa man grooming kit.
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
              Frequently Asked Questions — Nykaa Coupon Codes
            </h3>
            {[
              {
                q: "Q1. How do I find a working Nykaa coupon code today?",
                a: "Every Nykaa coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply at checkout, check the deal card conditions and try the next active listing."
              },
              {
                q: "Q2. Can I use a Nykaa discount code on international brand products?",
                a: "Some Nykaa discount codes apply to the full catalogue including international brands, while others exclude prestige or luxury labels. Check the individual deal card on this CouponsCrew page for brand-level exclusions before building your cart around a specific code."
              },
              {
                q: "Q3. What is the Nykaa Prive loyalty programme?",
                a: "Nykaa Prive is Nykaa's loyalty tier for customers who spend ₹7,500 or more in a calendar year. Benefits include a 5% welcome discount coupon, a birthday gift on purchases made during your birthday month, 4 free shipping coupons, early access to new brand launches, and exclusive member-only offers. There is no separate membership fee — Prive status is earned through cumulative spending."
              },
              {
                q: "Q4. Can I stack a Nykaa coupon code with a bank card offer?",
                a: "In many cases, yes — a Nykaa promo code and a bank card instant discount can both apply to the same order. Apply the code in the coupon field first, then select your bank card at the payment step. Some promotions restrict stacking; check the deal card notes on this CouponsCrew page for confirmation."
              },
              {
                q: "Q5. What is the Nykaa Pink Friday Sale?",
                a: "The Nykaa Pink Friday Sale is Nykaa's flagship annual sale event — held in November, it is the Indian beauty equivalent of Black Friday. Discounts reach up to 70% across skincare, makeup, and haircare, with exclusive product launches, gift sets, and brand-specific offers. It is the best window of the year to buy premium and international beauty products at the lowest prices. CouponsCrew publishes Pink Friday-specific coupon codes ahead of the event."
              },
              {
                q: "Q6. Is Nykaa good for buying authentic international beauty brands?",
                a: "Yes — Nykaa sources directly from brand principals and authorised distributors, guaranteeing product authenticity. International brands like COSRX, Charlotte Tilbury, Huda Beauty, The Ordinary, and Sol de Janeiro are available through Nykaa with the same authenticity assurance as buying from the brand's own website — at prices that are often lower during Nykaa sale events."
              },
              {
                q: "Q7. What is Nykaa Man?",
                a: "Nykaa man is the dedicated men's grooming section on Nykaa — covering face care, haircare, beard care, body care, and shaving products from brands like The Man Company, Ustraa, Beardo, Bombay Shaving Company, and international labels. A Nykaa coupon code valid on Nykaa Man products is listed in the men's filter on this CouponsCrew page where available."
              },
              {
                q: "Q8. Does Nykaa have a return policy?",
                a: "Nykaa accepts returns on most products within 14 days of delivery — items must be unused, unopened, and in original packaging. Some categories (intimates, customised products, opened cosmetics) have restricted return eligibility. Returns are initiated via the app or website and refunds are processed within 7–10 business days to the original payment method."
              },
              {
                q: "Q9. What is the minimum order value for Nykaa coupon codes?",
                a: "Minimum cart values vary by code — typically ₹399–₹999 for most active Nykaa offer codes. The exact threshold is shown on each deal card on this CouponsCrew page. Some new-user codes have a lower minimum; some category-specific codes have a higher threshold."
              },
              {
                q: "Q10. When is the best time to buy Nykaa beauty products at the lowest price?",
                a: "The two best windows are the Pink Friday Sale (November — up to 70% off) and the Grand Festive Sale (September–October — up to 75% off). For monthly savings, the Payday Sale (1st–5th of every month) offers up to 50% off consistently. Apply a verified Nykaa promo code from CouponsCrew during any of these windows for the deepest effective discount."
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Nykaa Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["Nykaa Coupons", "Beauty Offers", "Pink Friday Sale", "Nykaa Fashion Deals", "Skincare Discounts", "Nykaa Man", "Luxury Beauty Offers", "CouponsCrew Nykaa"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Nykaa Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Up to 50% OFF Beauty Staples", sub: "Verified coupon code on skincare & cosmetics" },
              { heading: "Flat 10% OFF First App Order", sub: "New user exclusive discount via Nykaa App" },
              { heading: "Up to 70% OFF Nykaa Fashion", sub: "Extra savings on clothing, footwear & accessories" },
              { heading: "Bank Card Instant Discount", sub: "Extra savings on HDFC, ICICI & Axis cards" },
              { heading: "Nykaa Man Grooming Offers", sub: "Up to 40% off on beard, skin & hair care" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">NY</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Nykaa deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#FC2779]">{activeModalCoupon.code}</span> at Nykaa checkout for instant discounts.
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
                className="w-full bg-[#2D0A1F] hover:bg-[#4A1633] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Nykaa</span>
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
