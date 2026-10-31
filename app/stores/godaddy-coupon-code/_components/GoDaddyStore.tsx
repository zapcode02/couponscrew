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
import { Coupon, GODADDY_COUPONS } from './godaddyCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://in.godaddy.com/';

export default function GoDaddyStore() {
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

  const coupons: Coupon[] = GODADDY_COUPONS;

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
      q: 'How do I use a GoDaddy promo code?',
      a: '[TODO: how-to answer specific to GoDaddy checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on GoDaddy?',
      a: '[TODO: stacking rules specific to GoDaddy]'
    },
    {
      q: 'Why is my GoDaddy promo code not working?',
      a: '[TODO: common reasons a code might fail on GoDaddy]'
    },
    {
      q: 'Where can I find the best GoDaddy offers?',
      a: 'We keep this GoDaddy store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does GoDaddy offer a free domain?',
      a: '[TODO: GoDaddy free domain policy/threshold details]'
    },
    {
      q: 'How often are GoDaddy coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">GoDaddy Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222459/godaddy-logo_jdpopf.webp"
                      alt="GoDaddy Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">GoDaddy Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest GoDaddy Coupon Code on web hosting, domains, business email, and VPS plans. Enjoy 80% OFF Managed WordPress Hosting or 50% OFF Professional Email with verified offers. You can also use a GoDaddy Promo Code to unlock extra savings on domain registration, shared hosting, VPS hosting, and business email solutions. Build your website with reliable hosting, secure domains, and professional tools while these limited-time GoDaddy deals are available.
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
                  <span>Visit GoDaddy</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792222459/godaddy-logo_jdpopf.webp"
                alt="GoDaddy Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">12+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">GoDaddy Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified GoDaddy coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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

              {/* Dynamic Details List from Data */}
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

            {/* Sidebar Card 1: Store Information */}
           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    GoDaddy Login and Web-Based Email
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Signing In Safely</span>
        <span>To sign in to your GoDaddy account, go to godaddy.com and select Sign In. People often search "go daddylogin" and click the first result. Type the address yourself or use a bookmark instead.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Accessing Webmail</span>
        <span>For GoDaddy web-based email, GoDaddy's help pages link to its webmail at email.godaddy.com. You can also sign in to your account and open your email from My Products.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Secure the Account</span>
        <span>Your GoDaddy account controls your domain, website and email, so losing it is costly. Turn on 2-step verification in your account settings, or sign in with a security key.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Watch Out for Fake Expiry Emails</span>
        <span>GoDaddy customers have been targeted by emails that look like GoDaddy domain or service expiry notices and lead to fake login pages. Don't click payment or login links in an email. Open godaddy.com yourself and check the renewal date in My Products.</span>
      </div>
    </li>
  </ul>
</div>

           

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at GoDaddy
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">WordPress Hosting</span>
                  <span className="text-[#FF5722] font-bold">Up to 80% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Web Hosting</span>
                  <span className="text-[#FF5722] font-bold">Up to 70% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Domains</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Email & Office</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">VPS Hosting</span>
                  <span className="text-[#FF5722] font-bold">From ₹649/mo</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at GoDaddy */}
           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Your GoDaddy Discount Code Isn't Working
  </h3>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Wrong product</span>
        <span>A hosting code won't apply to a domain, and the reverse.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Wrong term</span>
        <span>Many offers need a set term, such as 36 months or 3 years.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">New customers only</span>
        <span>Several domain offers are restricted to new customers.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">It's a renewal</span>
        <span>Most GoDaddy offers are for new purchases; renewals are charged at the then-current price unless the code's terms say otherwise.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">One offer per item</span>
        <span>A product already at a sale price may not take another GoDaddy discount code.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Wrong country site</span>
        <span>Codes made for another GoDaddy country store may not work on godaddy.com/en-in.</span>
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
          GoDaddy Coupon Code: Domain, Hosting and Email Offers in India (October 2026)
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A GoDaddy coupon code is a promo code that lowers the price of a domain, web hosting, email or website builder plan at checkout on godaddy.com. Most GoDaddy discounts in India apply to the first term only, and many need a multi-year purchase, so the real saving depends on the renewal price as much as the code.
          </p>

          <p className="italic text-sm text-gray-500">
            Prices on this page were checked on godaddy.com/en-in on 17 October 2026.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">GoDaddy Offers and Discount List</caption>
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
          offerType: 'SAVE 50%',
          discount: 'From ₹39 / user / mo',
          highlights: 'Professional Business Email with 10 GB storage and spam protection.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 80%',
          discount: 'From ₹149 / mo',
          highlights: 'Managed WordPress Hosting with 40 GB SSD & 3 free email mailboxes.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 70%',
          discount: 'From ₹89 / mo',
          highlights: 'Web Hosting for 1 website with 10 GB NVMe storage & cPanel support.',
          eligibility: '30-Day Money-Back Guarantee'
        },
        {
          offerType: 'SAVE UP TO 60%',
          discount: 'Up to 60% OFF',
          highlights: 'Domain registrations & renewals via Discount Domain Club.',
          eligibility: 'Member Savings'
        },
        {
          offerType: 'FROM ₹2,883.66',
          discount: 'From ₹2,883.66 / mo',
          highlights: 'Domain Pro Membership with up to 60% OFF on TLD transfers & auctions.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹89',
          discount: 'From ₹89 / mo',
          highlights: 'Starter Hosting Plan: 1 website with 10 GB NVMe & cPanel support.',
          eligibility: '30-Day Money-Back Guarantee'
        },
        {
          offerType: 'FROM ₹219',
          discount: 'From ₹219 / mo',
          highlights: 'Economy Hosting Plan: 25 GB NVMe, free domain & 1-year SSL.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹329',
          discount: 'From ₹329 / mo',
          highlights: 'Deluxe Hosting Plan: Up to 10 websites, 50 GB NVMe & unlimited SSL.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹399',
          discount: 'From ₹399 / mo',
          highlights: 'Ultimate Hosting Plan: Up to 25 websites, 75 GB NVMe & unlimited SSL.',
          eligibility: 'All Users'
        },
        {
          offerType: 'FROM ₹649',
          discount: 'From ₹649 / mo',
          highlights: 'VPS Hosting: 1 vCPU, 2 GB RAM & 40 GB NVMe SSD storage.',
          eligibility: 'Linux / cPanel / Plesk'
        },
        {
          offerType: 'FROM ₹3,299',
          discount: 'From ₹3,299 / mo',
          highlights: '4 vCPU VPS Server: 16 GB RAM & 200 GB NVMe SSD storage.',
          eligibility: 'Linux & Windows'
        },
        {
          offerType: 'BUSINESS EMAIL',
          discount: 'Protected Email',
          highlights: 'Secure branded business email with spam filtering & browser login.',
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
            The ₹1 Domain: What You Actually Pay
          </p>

          <p>
            GoDaddy's best-known offer is a domain for ₹1, and it's real, but read the conditions. On 17 October 2026, GoDaddy India listed a .in domain at ₹1.00 for the first year with a required 3-year purchase, and ₹899 for each additional year. The offer was marked for new customers only.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Cost</th>
                  <th className="p-4 font-bold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Year 1</td>
                  <td className="p-4">₹1</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Year 2</td>
                  <td className="p-4">₹899</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Year 3</td>
                  <td className="p-4">₹899</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Total paid at checkout for 3 years</td>
                  <td className="p-4">₹1,799 (before taxes and fees)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Year 4 onwards</td>
                  <td className="p-4">Renews at the then-current price</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            That's still a fair price for three years of a .in domain. But it's ₹1,799, not ₹1. The same page also showed a separate offer of ₹99 for a .in or .co.in domain on a 1-year term. If you only need the domain for a year or want to test an idea, the 1-year offer means less money upfront.
          </p>

          <p>
            The same pattern applies to GoDaddy hosting. Intro hosting prices were shown on a 36-month term, and the hosting page didn't state the renewal price. Before paying, look at the cart summary for the renewal amount, or check it in your account straight after purchase.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How to Apply a GoDaddy Promo Code
    </p>

    <p>
      Search for your domain or pick your hosting, email or website plan on godaddy.com/en-in and add it to the cart.
    </p>

    <p>
      Choose the term carefully. Many offers apply only to a specific term, such as 3 years.
    </p>

    <p>
      In the cart, find the promo code field and enter the code.
    </p>

    <p>
      Check the line items: the discount should appear against the product it covers.
    </p>

    <p>
      Untick add-ons you didn't ask for before paying.
    </p>

    <p>
      Pay, then open My Products and check the renewal date and auto-renew setting.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Which GoDaddy Product Do You Need?
    </p>

    <p>
      Many first-time buyers pay for products they don't need. Start from what you're trying to do.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">You want to...</th>
            <th className="p-4 font-bold">Buy this</th>
            <th className="p-4 font-bold">Skip for now</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Reserve a business name online</td>
            <td className="p-4">GoDaddy domain only</td>
            <td className="p-4">Hosting, builder</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Get a name@yourbusiness.in email address</td>
            <td className="p-4">Domain + GoDaddy Professional Email</td>
            <td className="p-4">Hosting</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Build a simple business site without coding</td>
            <td className="p-4">Domain + a website builder plan</td>
            <td className="p-4">Separate hosting (the builder includes it)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Run WordPress</td>
            <td className="p-4">Domain + WordPress hosting</td>
            <td className="p-4">Website builder</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Host a site you or a developer already built</td>
            <td className="p-4">Domain + GoDaddy hosting</td>
            <td className="p-4">Website builder</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      GoDaddy Domain Search Tips
    </p>

    <p>
      Use the GoDaddy domain search to check your name across extensions. If the .com is taken, a .in or .co.in is usually a better fit for an Indian business than an unusual extension. Watch the first-year vs regular price on extensions like .online or .xyz, where the gap between the sale price and the standard price is wide. A cheap first year can turn into a much higher renewal.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      GoDaddy Hosting Plans and Prices
    </p>

    <p>
      GoDaddy hosting in India starts at ₹89 a month for the Starter plan, on a 36-month term. Plans above Starter include a domain, and the email is part of a free trial.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Plan</th>
            <th className="p-4 font-bold">Price shown (₹/month)</th>
            <th className="p-4 font-bold">Term</th>
            <th className="p-4 font-bold">Free domain</th>
            <th className="p-4 font-bold">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Starter</td>
            <td className="p-4">89</td>
            <td className="p-4">36 months</td>
            <td className="p-4">No</td>
            <td className="p-4">No</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Economy</td>
            <td className="p-4">219</td>
            <td className="p-4">36 months</td>
            <td className="p-4">Yes</td>
            <td className="p-4">Free trial</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Deluxe</td>
            <td className="p-4">329</td>
            <td className="p-4">36 months</td>
            <td className="p-4">Yes</td>
            <td className="p-4">Free trial</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Ultimate</td>
            <td className="p-4">399</td>
            <td className="p-4">36 months</td>
            <td className="p-4">Yes</td>
            <td className="p-4">Free trial</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Two details people miss:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        The free email is a trial. GoDaddy says activating it leads to automatic renewal at the then-current price until you cancel.
      </li>
      <li>
        Free SSL on Economy is for the first year. After that it renews at the current price unless cancelled.
      </li>
    </ul>

    <p>
      All hosting plans come with a 30-day money-back guarantee, per the hosting page.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      GoDaddy Website Builder: Which One Is It?
    </p>

    <p>
      GoDaddy now has three different website builders, and the name "GoDaddy website builder" can mean any of them. This explains why online guides often contradict each other.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Builder</th>
            <th className="p-4 font-bold">What it is</th>
            <th className="p-4 font-bold">How you edit</th>
            <th className="p-4 font-bold">Comes with</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Websites + Marketing (classic)</td>
            <td className="p-4">GoDaddy's original GoDaddy site builder</td>
            <td className="p-4">Templates, manual editing, some AI help</td>
            <td className="p-4">Websites + Marketing plans</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Airo AI Builder</td>
            <td className="p-4">Standalone AI builder for websites, apps and online stores</td>
            <td className="p-4">Describe what you want in chat, then edit manually or in code</td>
            <td className="p-4">Its own free and paid plans</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Airo for WordPress</td>
            <td className="p-4">AI that builds a WordPress site</td>
            <td className="p-4">AI chat in the WordPress dashboard, or the normal WordPress editor</td>
            <td className="p-4">Managed Hosting for WordPress plans</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Airo AI Builder Prices
    </p>

    <p>
      The current GoDaddy website builder page sells Airo plans that run on monthly AI credits. GoDaddy Sites built here start free; you pay to publish.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Plan</th>
            <th className="p-4 font-bold">Monthly AI credits</th>
            <th className="p-4 font-bold">Billed annually (₹/month)</th>
            <th className="p-4 font-bold">Billed monthly (₹/month)</th>
            <th className="p-4 font-bold">Live sites or apps</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Free</td>
            <td className="p-4">50</td>
            <td className="p-4">Free</td>
            <td className="p-4">Free</td>
            <td className="p-4">Preview only</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Starter</td>
            <td className="p-4">150</td>
            <td className="p-4">699</td>
            <td className="p-4">1,399</td>
            <td className="p-4">1</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Professional</td>
            <td className="p-4">300</td>
            <td className="p-4">1,699</td>
            <td className="p-4">3,299</td>
            <td className="p-4">Up to 10</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Ultimate</td>
            <td className="p-4">750</td>
            <td className="p-4">6,499</td>
            <td className="p-4">13,999</td>
            <td className="p-4">Up to 50</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Annual billing roughly halves the monthly price. Unused credits expire at the end of each billing cycle, so a bigger plan only makes sense if you'll use the credits. A new annual plan includes a free domain for the first year (the ICANN fee still applies).
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      GoDaddy Email and Professional Email
    </p>

    <p>
      GoDaddy Professional Email is powered by Titan and starts at ₹39 per mailbox per month on a 12-month term.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Plan</th>
            <th className="p-4 font-bold">Price (₹/mailbox/month)</th>
            <th className="p-4 font-bold">Storage per user</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Pro Light</td>
            <td className="p-4">39</td>
            <td className="p-4">10 GB</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Pro Plus</td>
            <td className="p-4">89</td>
            <td className="p-4">30 GB</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Premium</td>
            <td className="p-4">149</td>
            <td className="p-4">50 GB</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Ultra</td>
            <td className="p-4">269</td>
            <td className="p-4">100 GB</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Price is per mailbox, so a five-person team pays five times the listed rate. Start with the plan your heaviest user needs, and don't buy mailboxes for people who'd be fine with an alias or a shared inbox.
    </p>

    <p>
      GoDaddy also sells Microsoft 365 email. Pick Microsoft 365 if your team already works in Outlook and other Microsoft apps. Pick Professional Email if you just need a branded inbox at a lower price.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How to Transfer a Domain to GoDaddy
    </p>

    <p>
      A GoDaddy transfer domain order moves your existing domain from another registrar. You keep the time left on it and GoDaddy adds an extra year.
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>
        At your current registrar, unlock the domain and get the authorization (EPP) code.
      </li>
      <li>
        Check that the contact email on the domain works. Transfer messages go there.
      </li>
      <li>
        Enter the domain in GoDaddy's transfer tool, then add the authorization code.
      </li>
      <li>
        Approve the transfer at your old registrar if it offers that. Otherwise it completes automatically.
      </li>
    </ol>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Rule</th>
            <th className="p-4 font-bold">Detail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">60-day lock</td>
            <td className="p-4">ICANN doesn't allow a transfer within 60 days of registering or last transferring a domain</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Extra year</td>
            <td className="p-4">Free additional year added; remaining time kept</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Time taken</td>
            <td className="p-4">Under 15 minutes if your old registrar releases it manually; otherwise usually 5 to 7 days</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Price shown</td>
            <td className="p-4">First year ₹1.00 with a required 3-year purchase (not for bulk transfers)</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Special cases</td>
            <td className="p-4">Some extensions, such as .uk and .au, have separate instructions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Don't change your na meservers or DNS during the transfer. Update them once the domain is in your GoDaddy account.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H1 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            GoDaddy Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is the GoDaddy ₹1 domain offer real?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, but it needs a 3-year purchase. On 17 October 2026, a .in domain was ₹1 for the first year and ₹899 for each additional year, so you pay ₹1,799 upfront for three years before taxes and fees. The offer was for new customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Do GoDaddy promo codes work on renewals?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Usually not. Most GoDaddy offers are for new purchases, and GoDaddy's offer terms say renewals are charged at the then-current price. Check your renewal price in My Products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How long does a GoDaddy domain transfer take?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Under 15 minutes if your current registrar releases the domain manually, otherwise usually 5 to 7 days. You get an extra year added.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What's the cheapest GoDaddy hosting plan?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Starter, at ₹89 a month on a 36-month term when we checked. It doesn't include a free domain or email.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I log in to GoDaddy webmail?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use email.godaddy.com, or sign in to your GoDaddy account and open your email from My Products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is GoDaddy Professional Email the same as Microsoft 365?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Professional Email is powered by Titan and is the lower-cost option; Microsoft 365 email is built around Outlook and Microsoft's apps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a free GoDaddy website builder?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Airo AI Builder has a free plan with 50 AI credits a month for building and previewing. You need a paid plan to publish a live site.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A GoDaddy coupon code saves the most when you buy only what you need, pick the term the offer actually covers, and check the renewal price before you pay. If you're comparing hosts, see our <a href="https://www.couponscrew.com/stores/hostinger-coupon-code" className="text-[#5B4FBE] font-bold underline">Hostinger coupon codes</a> and the <a href="https://www.couponscrew.com/stores/categories/web-hosting" className="text-[#5B4FBE] font-bold underline">web hosting category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular GoDaddy Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["GoDaddy Coupons", "Domain Offers", "Web Hosting Deals", "Professional Email", "Website Builder", "Domain Transfer", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at GoDaddy checkout for instant discounts.
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
                <span>Continue to GoDaddy</span>
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
