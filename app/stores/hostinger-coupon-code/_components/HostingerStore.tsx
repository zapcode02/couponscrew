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
import { Coupon, HOSTINGER_COUPONS } from './hostingerCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.hostinger.com/';

export default function HostingerStore() {
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

  const coupons: Coupon[] = HOSTINGER_COUPONS;

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
      q: 'How do I use a Hostinger coupon code?',
      a: 'To use a Hostinger coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Hostinger website. If it is a no-code deal, simply click "Visit Hostinger" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Hostinger?',
      a: 'Generally, Hostinger only allows one promo code per order. If a code does not apply, try a different verified code from this page rather than combining multiple codes.'
    },
    {
      q: 'Why is my Hostinger coupon code not working?',
      a: 'A coupon might not work due to plan-specific restrictions, minimum billing cycle requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the offer details before applying.'
    },
    {
      q: 'Are the coupon codes verified?',
      a: 'Yes. Every Hostinger coupon code listed on this page is checked and updated regularly by our team so you only see offers that are currently active.'
    },
    {
      q: 'How often are Hostinger coupons updated?',
      a: 'We review and refresh Hostinger coupon codes and deals regularly. Expired promotions are removed so you only see offers that are currently working.'
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
            <Link href="/" className="hover:text-[#673DE6] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#673DE6] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#673DE6] font-semibold">Hostinger Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/hostinger-logo_ltxkex.webp"
                      alt="Hostinger Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Hostinger</h1>
                    <span className="bg-[#F0EEFF] text-[#673DE6] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Web Hosting, Domains & VPS
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                  Save more with verified Hostinger coupon codes, promo codes, and exclusive hosting offers. Enjoy up to 95% OFF, free domain registration, 3 free months, extra 17% OFF, free email hosting, ₹1 .in domains, and discounts on WordPress, VPS, and cloud hosting plans.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#673DE6] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
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
                  className="bg-[#673DE6] hover:bg-[#5730C4] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Hostinger</span>
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
              className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#673DE6] to-[#0F2137] items-center justify-center p-8 text-center"
            >
              <div className="relative z-10 text-white space-y-3">
                <span className="inline-block bg-white/15 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Limited Time
                </span>
                <h3 className="text-2xl font-black leading-tight">
                  Save Big on Hosting, Domains &amp; VPS
                </h3>
                <p className="text-white/80 text-sm">
                  Verified Hostinger coupon codes updated regularly
                </p>
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
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#673DE6] rounded-2xl flex items-center justify-center shrink-0">
              <Tag size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EDEBFF] text-[#0F2137] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 75%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">$</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">$100+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#673DE6] rounded-2xl flex items-center justify-center shrink-0">
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Hostinger Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Hostinger coupon codes & offers.</p>
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

          {/* LEFT DISCOUNT SECTION - Deep Theme Primary (#673DE6) */}
          <div
            className="w-24 sm:w-32 lg:w-40 bg-[#673DE6] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
          >
            {/* Ticket Cutout Circles */}
            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
            <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              {coupon.badgeType || "UP TO"}
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
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
                {/* Soft Tint Badge using Accent (#0F2137) */}
                <span className="bg-[#0F2137]/10 text-[#0F2137] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#673DE6] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Details List */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#673DE6]" />
                    <span>Valid on select hosting, domain & VPS plans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#673DE6]" />
                    <span>Minimum billing cycle might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#673DE6]" />
                    <span>Covers selected plans and hosting categories.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

            

              {/* Action Button - Vibrant CTA Accent (#0F2137) */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#0F2137] hover:bg-[#193052] text-white"
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
                <Info size={16} className="text-[#673DE6]" />
                <span>What is Hostinger and Why Is It Popular in India?</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Hostinger was founded in 2004 in Lithuania and has grown into one of the largest web hosting providers in the world — processing millions of websites across shared, cloud, VPS, and managed WordPress hosting environments. In India, hostinger india has become the go-to hosting provider for a large share of new website owners, largely because of three factors: price, performance, and ease of use.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                Price — Hostinger's introductory pricing on shared hosting is among the lowest available from a reputable provider. Plans start under ₹100/month on multi-year billing cycles, with a hostinger free domain included on Premium and Business plans — removing one of the most common additional costs for new site owners.
              </p>
              <p className="text-[#1A1A2E] text-sm">
                Performance — Hostinger runs its own custom-built control panel (hPanel), LiteSpeed web servers on most shared hosting plans, and NVMe SSD storage across its infrastructure. These are not standard features at Hostinger's price tier — LiteSpeed and NVMe both contribute to noticeably faster page load times compared to traditional Apache hosting at similar prices.
              </p>
              <p className="text-[#1A1A2E] text-sm">
                Ease of use — hPanel is widely considered more intuitive than the industry-standard cPanel for new users. The one-click installer supports WordPress, Joomla, PrestaShop, and 150+ other scripts. The hostinger website builder (built on Zyro technology) is included with all hosting plans and requires no coding knowledge to use.
              </p>
                <p className="text-[#1A1A2E] text-sm">
                A Hostinger coupon code from CouponsCrew applied on top of Hostinger's already-discounted multi-year plan pricing is one of the most cost-effective ways to launch a website in India today.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#673DE6] hover:text-[#673DE6] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Hostinger</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#673DE6] to-[#0F2137] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Hostinger Seasonal Hosting Sale</h3>
                <span className="inline-block bg-[#0F2137] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 75% OFF on Web Hosting, VPS & Domains
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#673DE6] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Shop Now
              </a>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use a Hostinger Coupon Code — Step by Step
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    Applying a Hostinger discount code at checkout takes under two minutes. Here is the exact process:
  </p>

  <ol className="space-y-4 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Find a verified code on this page.</span> Click "Show Code" on any active CouponsCrew deal card — the code copies to your clipboard and the tracking link opens Hostinger in a new tab.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your hosting plan.</span> Browse Hostinger's plans — shared hosting, WordPress hosting, cloud hosting, VPS, website builder, or domain registration. Choose your plan tier and billing cycle. Longer billing cycles (1-year or 2-year) give you the lowest monthly rate.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Add to cart.</span> Click "Add to Cart" or "Get Started" on your selected plan. You will be taken to the cart / checkout page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Create your account or sign in.</span> New users create a Hostinger account with an email address. Existing users sign in.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Locate the coupon / promo code field.</span> On the checkout page, look for "Have a coupon?" or "Promo Code" — it appears in the order summary section on the right side of the page.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Paste your code and apply.</span> Paste the Hostinger coupon code from your clipboard and click "Apply." The discount reflects in the total immediately.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Select your payment method.</span> Credit/debit card, UPI, net banking, PayPal, or cryptocurrency (Hostinger accepts crypto on some plans). Select an eligible bank card if you have an active bank offer to stack.
    </li>
    <li className="leading-relaxed">
      <span className="font-bold text-[#2C2C40]">Complete your purchase.</span> Confirm and pay. Your hosting account is activated immediately — access hPanel, install WordPress or your preferred CMS, and connect your domain.
    </li>
  </ol>

  <div className="mt-5 p-3.5 bg-[#F8F8FC] border border-[#E8E8F0] rounded-xl text-xs text-[#4A4A6A]">
    <span className="font-bold text-[#2C2C40]">Tip:</span> If a Hostinger promo code shows as invalid, check that the code applies to your selected plan type (some codes are shared-hosting-only or VPS-only) and that you are on a qualifying billing cycle (most codes require annual or 2-year billing). Refresh this CouponsCrew page for the next active code.
  </div>
</div>

          </aside>

        </div>
      </section>

     <section className="py-24 bg-[#f5f5f5]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
      
      {/* Main Content Area */}
      <div>
        <div className="prose max-w-none">
          <div
            className={cn(
              "text-gray-600 space-y-6 relative transition-all duration-300",
              !isReadMore && "max-h-[500px] overflow-hidden"
            )}
          >
            <h2 className="text-3xl font-black text-black mb-6 leading-tight">
              Hostinger Coupon Code & Web Hosting Deals — Verified for August 2026
            </h2>

            <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Hostinger Coupon Offers and Deals</caption>
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
          {HOSTINGER_COUPONS.map((coupon) => (
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

            <p>
              Hostinger is one of the most widely used web hosting providers in India and globally — known for delivering reliable shared hosting, VPS hosting, cloud hosting, and website builder plans at price points that are consistently lower than most competitors. With over 3 million customers across 178 countries and a strong presence in hostinger india, it is a particularly popular choice for first-time website owners, bloggers, small businesses, and developers looking for affordable hosting without compromising on performance.
            </p>

            <p>
              At CouponsCrew, we track every active Hostinger coupon code, Hostinger discount code, and Hostinger promo code so you never pay full price when a verified saving is available. Every deal on this page is checked before going live — plan eligibility, billing cycle conditions, and expiry dates are all confirmed and shown clearly on each deal card.
            </p>

            <p>
              Whether you are looking for free hosting web options to start your first site, a premium shared hosting plan for a growing blog, a dedicated server hosting solution for high-traffic applications, or the hostinger website builder to launch a business site without coding knowledge — this page has the verified deals to reduce what you pay. Updated daily. Bookmark it and check it before every Hostinger purchase.
            </p>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              What Services Can You Purchase at Hostinger?
            </h3>

            <p>
              Hostinger's product range covers every stage of building and scaling an online presence — from registering your first domain to managing high-traffic server infrastructure.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Shared Hosting Plans</h4>
            <p>
              Hostinger's shared hosting is the most popular entry point for new website owners. Three tiers are available:
            </p>

            {/* Table: Shared Hosting */}
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#673DE6] text-white font-bold">
                  <tr>
                    <th className="p-4">Plan</th>
                    <th className="p-4">Websites</th>
                    <th className="p-4">Storage</th>
                    <th className="p-4">Bandwidth</th>
                    <th className="p-4">Email Accounts</th>
                    <th className="p-4">Free Domain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-semibold">Single</td>
                    <td className="p-4">1</td>
                    <td className="p-4">50 GB NVMe SSD</td>
                    <td className="p-4">100 GB</td>
                    <td className="p-4">1</td>
                    <td className="p-4">No</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Premium</td>
                    <td className="p-4">100</td>
                    <td className="p-4">100 GB NVMe SSD</td>
                    <td className="p-4">Unlimited</td>
                    <td className="p-4">100</td>
                    <td className="p-4">Yes (1 year free)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Business</td>
                    <td className="p-4">100</td>
                    <td className="p-4">200 GB NVMe SSD</td>
                    <td className="p-4">Unlimited</td>
                    <td className="p-4">100</td>
                    <td className="p-4">Yes (1 year free)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              All three plans include a free SSL certificate, weekly backups, and a free CDN. The Premium and Business plans include a hostinger free domain for the first year — saving ₹800–₹1,200 on the domain registration cost that would otherwise be a separate expense.
            </p>

            <p className="font-bold text-black mt-4">Which plan is right for you?</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Single</strong> — one personal website or blog with modest traffic</li>
              <li><strong>Premium</strong> — multiple websites or a single business site with moderate traffic; the most popular tier for small business owners</li>
              <li><strong>Business</strong> — higher-traffic sites, e-commerce, or anyone needing daily backups and better performance headroom</li>
            </ul>

            <p>
              A Hostinger discount code from CouponsCrew brings the already-low shared hosting price down further — on a 2-year Premium plan, the effective monthly cost after a verified promo code is consistently among the lowest from any reputable provider.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Domain Registration and Checker</h4>
            <p>
              Hostinger's domain checker lets you search for any domain name across 400+ extensions — .com, .in, .net, .org, .co, country-specific extensions, and newer gTLDs like .store, .tech, and .online. If your preferred name is available, registration is completed in minutes.
            </p>
            <p>
              Hostinger free domain is included at no additional cost for the first year with Premium and Business shared hosting plans — the domain renews at standard rates after the first year. If you are registering a domain independently (without a hosting plan), Hostinger's domain pricing is competitive, particularly on .com registrations.
            </p>
            <p>
              Domain transfers from other registrars are also supported. Hostinger's domain transfer process is handled entirely through hPanel and typically completes within 5–7 days — transfer fees are among the lowest available from major registrars.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Web Hosting (WordPress & CMS-Optimised)</h4>
            <p>
              Hostinger's web hosting plans are optimised for WordPress, Joomla, and other major CMS platforms. The one-click installer available in hPanel supports 150+ scripts — WordPress installs in under two minutes on any shared hosting plan.
            </p>
            <p>
              For WordPress specifically, Hostinger offers a managed WordPress hosting tier with pre-installed WordPress, automatic updates, and enhanced caching — at prices similar to standard shared hosting from other providers. This is a strong option for bloggers and content-focused businesses who want WordPress-specific optimisation without paying managed hosting premiums.
            </p>
            <p>
              The best part — applying a verified Hostinger coupon code from CouponsCrew at checkout reduces the web hosting cost by up to 83% on eligible plans, bringing multi-year WordPress hosting costs to some of the lowest available anywhere.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Hostinger Website Builder</h4>
            <p>
              The hostinger website builder is a drag-and-drop site builder included with all Hostinger hosting plans. It is built on AI-assisted design technology and requires no coding knowledge — select a template, customise colours, fonts, and content, and publish directly to your domain.
            </p>
            <p className="font-bold text-black">Key features of the Hostinger website builder:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>100+ mobile-responsive templates across business, portfolio, blog, and e-commerce categories</li>
              <li>AI-generated website content based on your business type and description</li>
              <li>Built-in e-commerce functionality (product listings, payments, inventory) on higher-tier plans</li>
              <li>SEO tools — meta title/description editing, sitemap generation, and Google Analytics integration</li>
              <li>Free custom domain connection when hosted on a Hostinger plan</li>
            </ul>
            <p>
              For business owners who want to launch a professional website quickly without hiring a developer, the hostinger website builder combined with a Premium hosting plan is one of the most cost-effective setups available — particularly with a Hostinger promo code bringing the first-term cost down further.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Cloud Hosting</h4>
            <p>
              Hostinger's cloud hosting sits between shared hosting and VPS in terms of resources and pricing — offering dedicated resources on a cloud infrastructure rather than a shared server environment. Ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business websites with growing or unpredictable traffic</li>
              <li>Web applications that need guaranteed CPU and RAM allocation</li>
              <li>E-commerce sites where downtime has a direct revenue impact</li>
            </ul>
            <p>
              Cloud hosting plans include scalable resources (CPU and RAM can be adjusted without migrating), daily backups, and a dedicated IP address. Performance is significantly more consistent than shared hosting during traffic spikes.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">VPS Hosting — KVM Plans</h4>
            <p>
              Hostinger's VPS hosting is built on KVM virtualisation — giving users dedicated resources, full root access, and a choice of operating systems (Ubuntu, CentOS, Debian, and others). This is the right choice for developers, agencies, and resource-heavy applications that have outgrown shared hosting.
            </p>

            <p className="font-bold text-black mt-4">Current KVM VPS plan pricing (2-year billing cycle):</p>
            
            {/* Table: VPS Pricing */}
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#673DE6] text-white font-bold">
                  <tr>
                    <th className="p-4">Plan</th>
                    <th className="p-4">vCPU</th>
                    <th className="p-4">RAM</th>
                    <th className="p-4">NVMe Storage</th>
                    <th className="p-4">Introductory Price</th>
                    <th className="p-4">Renews At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-semibold">KVM 1</td>
                    <td className="p-4">1 vCPU</td>
                    <td className="p-4">4 GB</td>
                    <td className="p-4">50 GB</td>
                    <td className="p-4">₹599/mo</td>
                    <td className="p-4">₹999/mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">KVM 2</td>
                    <td className="p-4">2 vCPU</td>
                    <td className="p-4">8 GB</td>
                    <td className="p-4">100 GB</td>
                    <td className="p-4">₹799/mo</td>
                    <td className="p-4">₹1,199/mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">KVM 3</td>
                    <td className="p-4">4 vCPU</td>
                    <td className="p-4">16 GB</td>
                    <td className="p-4">200 GB</td>
                    <td className="p-4">₹1,099/mo</td>
                    <td className="p-4">₹2,399/mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">KVM 4</td>
                    <td className="p-4">8 vCPU</td>
                    <td className="p-4">32 GB</td>
                    <td className="p-4">400 GB</td>
                    <td className="p-4">₹2,199/mo</td>
                    <td className="p-4">₹4,399/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              All plans include NVMe SSD storage (significantly faster than standard SSD), weekly backups, and a dedicated IPv4 address. The KVM 1 plan is suitable for small applications, personal projects, or a staging server. KVM 3 and KVM 4 handle mid-to-high traffic production applications comfortably.
            </p>

            <p>
              <strong className="text-black block mb-1">Hostinger VPS Coupon Codes</strong>
              Specific VPS-only Hostinger discount codes are less common than sitewide deals — most VPS savings come from Hostinger's built-in introductory pricing on longer billing cycles. However, during major sale events (Black Friday, Diwali, Cyber Monday), additional percentage codes do appear that apply to VPS plans. CouponsCrew lists these under the VPS filter when active.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Dedicated Server Hosting</h4>
            <p>
              Dedicated server hosting from Hostinger is the highest-performance tier — a physical server exclusively allocated to one customer, with no resource sharing. Suitable for large e-commerce platforms, SaaS applications, and high-traffic websites that need maximum performance, security, and control.
            </p>
            <p>
              Hostinger's dedicated servers come with full root access, IPMI remote management, and a choice of Linux distributions. Pricing starts significantly higher than VPS — dedicated servers are a business-grade purchase where a Hostinger voucher code or promotional discount can represent a meaningful saving in absolute rupee terms.
            </p>

            <h4 className="text-xl font-bold text-black mt-6 mb-2">Domain Transfers</h4>
            <p>
              Transferring an existing domain from another registrar to Hostinger is managed entirely through hPanel and typically completes within 5–7 days. Key benefits of transferring to Hostinger:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Domain management consolidated with your hosting account in one panel</li>
              <li>Competitive transfer fees — among the lowest from major registrars</li>
              <li>WHOIS privacy protection available at no extra cost on most extensions</li>
              <li>No downtime during the transfer process for live websites</li>
            </ul>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Hostinger VPS Coupon Codes & Hosting Deals
            </h3>
            <p>
              Hostinger's VPS hosting on KVM plans is built for users who need dedicated resources, full root access, and more control than shared hosting provides — ideal for developers, growing businesses, and resource-heavy websites or web applications.
            </p>
            <p>
              VPS-specific Hostinger coupon codes are less frequent than general sitewide discounts. The primary saving mechanism on VPS is Hostinger's own steep introductory pricing on longer billing cycles — the 2-year KVM plan prices shown in the table above represent 60%–65% below the month-to-month rate. During major sale events like Black Friday and Cyber Monday, additional percentage-off codes appear that apply to VPS plans — CouponsCrew lists these when active.
            </p>
            <p className="font-bold text-black">Key things to know before buying a Hostinger VPS plan:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Introductory pricing applies to the first billing cycle only — renewal rates (shown in the table above) are higher</li>
              <li>Longer billing cycles (2-year) deliver the lowest monthly rate; month-to-month pricing is significantly higher</li>
              <li>All KVM plans include NVMe SSD storage — faster read/write speeds than standard SSD, relevant for database-heavy applications</li>
              <li>Full root access means you manage the server environment yourself — if you are not comfortable with Linux server administration, Hostinger's managed WordPress hosting or cloud hosting may be a better fit</li>
            </ul>

            {/* Table: Sale Calendar */}
            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Best Time to Get Hostinger Deals — Sale Calendar 2026
            </h3>
            <p>
              Hostinger runs some of the deepest hosting discounts in the industry during its major sale windows. Timing your plan purchase around these events — and applying a Hostinger promo code from CouponsCrew on top — delivers the lowest possible effective price:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#673DE6] text-white font-bold">
                  <tr>
                    <th className="p-4">Sale Event</th>
                    <th className="p-4">Expected Time</th>
                    <th className="p-4">Typical Discount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-4 font-semibold">New Year Sale</td><td className="p-4">January</td><td className="p-4">Up to 83% OFF + free domain on eligible plans</td></tr>
                  <tr><td className="p-4 font-semibold">Republic Day Sale</td><td className="p-4">January</td><td className="p-4">Up to 80% OFF + additional coupon discounts</td></tr>
                  <tr><td className="p-4 font-semibold">Independence Day Sale</td><td className="p-4">August</td><td className="p-4">Up to 80% OFF on web hosting, WordPress & website builder</td></tr>
                  <tr><td className="p-4 font-semibold">Diwali Sale</td><td className="p-4">October – November</td><td className="p-4">Up to 83% OFF + extra coupon savings + free domain</td></tr>
                  <tr><td className="p-4 font-semibold">Black Friday Sale</td><td className="p-4">November</td><td className="p-4">Up to 83% OFF + extra 10% via promo code + free months</td></tr>
                  <tr><td className="p-4 font-semibold">Cyber Monday Sale</td><td className="p-4">November – December</td><td className="p-4">Up to 83%–88% OFF on selected plans</td></tr>
                  <tr><td className="p-4 font-semibold">Year-End Sale</td><td className="p-4">December</td><td className="p-4">Up to 83% OFF on hosting, website builder & domain bundles</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              Black Friday and Cyber Monday are the peak discount windows at Hostinger — discounts up to 88% off on selected plans, combined with the ability to stack a Hostinger promo code for an extra 5%–10% off, make these the lowest-price entry points of the year. If you are planning to launch a website or upgrade your hosting tier, these two windows are worth timing your purchase around.
            </p>
            <p>
              The Diwali Sale (October–November) is the strongest Indian-market-specific sale event — up to 83% off with free domain inclusion on eligible plans. A practical time to buy if you are starting a new project ahead of the year-end business period.
            </p>
            <p>
              The Republic Day Sale and Independence Day Sale are both strong for web hosting and WordPress plans specifically — if you miss the Diwali or year-end windows, these two events are the next-best discount opportunities.
            </p>

            <div className="bg-[#f0ebfe] border-l-4 border-[#673DE6] p-4 my-6 rounded-r-xl">
              <p className="m-0 text-[#673DE6] font-semibold">
                💡 CouponsCrew publishes early deal previews for each major Hostinger sale event 2–3 days before they go live — including the best available promo codes and plan-specific deal breakdowns. Bookmark this page and check back before each sale date.
              </p>
            </div>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Free Hosting Web Options at Hostinger
            </h3>
            <p>
              Many first-time website owners search for free hosting web or free hosting web site options before committing to a paid plan. Here is an honest breakdown of what Hostinger offers in the free tier and where the limitations are:
            </p>
            <p className="font-bold text-black mb-2">Hostinger Free Plan</p>
            <p>
              Hostinger does not offer a permanently free hosting plan on its standard shared hosting. However:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free trial period</strong> — Hostinger offers a 30-day money-back guarantee on most plans, effectively giving you a risk-free trial period. If you are unsatisfied within 30 days, a full refund is issued — no questions asked.</li>
              <li><strong>Free website builder</strong> — the hostinger website builder is included at no additional cost with all paid hosting plans. You do not pay separately for the site builder.</li>
              <li><strong>Free SSL certificate</strong> — included with all shared hosting, WordPress hosting, and cloud hosting plans at no extra charge</li>
              <li><strong>Free domain</strong> — included for the first year with Premium and Business shared hosting plans</li>
              <li><strong>Free CDN</strong> — Cloudflare CDN integration is included with all plans to improve page load speed globally</li>
            </ul>
            <p>
              For genuinely free hosting, the honest answer is that free web hosting tiers from any provider come with significant limitations — storage caps, no custom domain, bandwidth throttling, and mandatory ads displayed on your site. For anyone serious about building a website — even a personal blog — a Hostinger Premium plan on a 1-year cycle (especially with a Hostinger discount code from CouponsCrew bringing the cost to under ₹100/month) is a substantially better starting point than a permanently free tier from any provider.
            </p>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Hostinger Saving Tips — Get More Off Every Plan
            </h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Always Use a Hostinger Coupon Code from CouponsCrew:</strong> Hostinger's advertised sale prices are already significantly below standard rates — but a verified Hostinger promo code from CouponsCrew stacks on top, typically adding an extra 5%–10% off. On a 2-year plan, even a 7% additional discount represents a meaningful saving in absolute terms.
              </li>
              <li>
                <strong>Choose the Longest Billing Cycle Available:</strong> Hostinger's pricing drops significantly as billing cycle length increases. A 2-year Premium plan can cost 60%–70% less per month than a month-to-month subscription for the same plan. The lowest per-month price is always on the longest available billing cycle — combine this with a Hostinger coupon code for the best effective rate.
              </li>
              <li>
                <strong>Time Your Purchase Around Black Friday or Cyber Monday:</strong> The deepest Hostinger discounts — up to 88% off — appear during Black Friday and Cyber Monday. If you can wait for these windows, the combination of Black Friday pricing plus a CouponsCrew Hostinger voucher code delivers the lowest entry price of the year.
              </li>
              <li>
                <strong>Get the Free Domain on Premium or Business Plans:</strong> The hostinger free domain included with Premium and Business plans saves ₹800–₹1,200 on a .com or .in registration in the first year. Factor this into your plan comparison — the free domain makes Premium meaningfully cheaper than Single hosting when you account for the total first-year cost.
              </li>
              <li>
                <strong>Use the 30-Day Money-Back Guarantee to Test the Platform:</strong> Hostinger's 30-day refund policy is unconditional on most plans. If you are unsure whether the platform suits your needs, you can start a 1-year plan with a Hostinger discount code, test the performance, hPanel usability, and support quality — and request a full refund within 30 days if it does not meet expectations.
              </li>
              <li>
                <strong>Consider VPS Over Shared Hosting for Growing Sites:</strong> If your site is receiving consistent traffic above 20,000 monthly visitors, shared hosting may be creating performance bottlenecks. Hostinger's KVM 1 VPS plan (₹599/month on a 2-year cycle) offers dedicated resources at a price point that is only marginally above Business shared hosting — and removes the resource-sharing constraints that affect high-traffic shared sites.
              </li>
              <li>
                <strong>Stack a Bank Card Offer Where Available:</strong> During major Hostinger sale events, bank card cashback offers occasionally apply at the payment step — HDFC and ICICI in particular. Apply your Hostinger promo code first, then select your bank card for any available cashback on top.
              </li>
            </ol>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Similar Stores You Might Like
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GoDaddy</strong> — Strong on domain registration; bundle packs of domain + hosting at competitive prices</li>
              <li><strong>BigRock</strong> — India-focused hosting provider with strong customer support; good for .in domains</li>
              <li><strong>Bluehost India</strong> — WordPress-focused hosting with official WordPress.org recommendation</li>
              <li><strong>SiteGround</strong> — Premium shared and cloud hosting; higher price point but strong performance reputation</li>
              <li><strong>DigitalOcean</strong> — Developer-focused VPS and cloud infrastructure; more technical than Hostinger VPS but highly scalable</li>
            </ul>

            <h3 className="text-2xl font-black text-[#673DE6] mt-10 mb-4">
              Closing — Why CouponsCrew for Hostinger Deals
            </h3>
            <p>
              Finding a working Hostinger coupon code should take seconds. CouponsCrew verifies every deal on this page before it goes live — plan eligibility, billing cycle requirements, and expiry dates are all confirmed and shown clearly on every deal card.
            </p>
            <p>
              Hostinger is already among the most competitively priced web hosting providers available to Indian users — hostinger india plans on shared hosting, WordPress hosting, and VPS consistently undercut comparable plans from GoDaddy, BigRock, and Bluehost at the same performance tier. A verified Hostinger discount code or Hostinger promo code from CouponsCrew on top of Hostinger's own sale pricing — timed around Black Friday, Diwali, or the Republic Day Sale — delivers some of the lowest effective web hosting costs available anywhere.
            </p>
            <p>
              Bookmark this page and check back before every Hostinger purchase — whether you are registering your first domain, launching a WordPress site with the hostinger website builder, scaling to a KVM VPS plan, or evaluating dedicated server hosting for a production application.
            </p>

            {!isReadMore && (
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
            )}
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="mt-8 flex items-center gap-2 text-[#673DE6] font-black text-xs uppercase tracking-widest hover:underline"
        >
          {isReadMore ? "Read Less" : "Read More"}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isReadMore && "rotate-180")} />
        </button>

        {/* FAQ Section */}
        <div className="mt-16 space-y-4">
          <h3 className="text-2xl font-black text-black mb-6">
            Frequently Asked Questions — Hostinger Coupon Codes
          </h3>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-black font-bold text-base">{faq.q}</span>
                <div className={cn("bg-gray-100 p-2 rounded-xl transition-all", openFaq === i && "bg-[#673DE6]")}>
                  <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white rotate-180")} />
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 px-6 bg-white",
                  openFaq === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 pb-0"
                )}
              >
                <p className="text-gray-600 text-sm leading-relaxed pt-3 border-t border-gray-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm">
          <h3 className="text-black font-black text-lg mb-6 uppercase tracking-widest">
            Popular Hostinger Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Hostinger Coupons",
              "WordPress Hosting",
              "Hostinger VPS Deals",
              "Free Domain Offer",
              "Website Builder",
              "Cloud Hosting Deals"
            ].map((tag) => (
              <a
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="bg-[#f3f0fe] px-4 py-2 rounded-full text-[12px] font-black text-[#673DE6] uppercase tracking-widest hover:bg-[#673DE6] hover:text-white transition-all border border-[#e1d7fd]"
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
                Use the code <span className="font-extrabold text-[#673DE6]">{activeModalCoupon.code}</span> at Hostinger checkout for instant discounts.
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
                className="w-full bg-[#673DE6] hover:bg-[#5730C4] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Hostinger</span>
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
