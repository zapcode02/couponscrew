'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Tag,Sparkles,
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
import { Coupon, UNIDAYS_COUPONS } from './unidaysCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://www.myunidays.com';

export default function UnidaysStore() {
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

  const coupons: Coupon[] = UNIDAYS_COUPONS;

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
      q: 'How do I verify my student status on UNiDAYS?',
      a: 'To verify your student status on UNiDAYS, sign up with your university or college email address, or use an alternative verification method such as uploading a valid student ID if you do not have an eligible student email. Verification is usually instant, though it can occasionally take up to 24 hours if manual review is needed.'
    },
    {
      q: 'Is UNiDAYS free to join and use?',
      a: 'Yes, UNiDAYS is completely free to join and use. There is no subscription fee or hidden cost — you simply verify your student status once and get ongoing access to exclusive discounts from partner brands for as long as your student status remains valid.'
    },
    {
      q: 'Do UNiDAYS student discounts work in India?',
      a: 'Yes, UNiDAYS operates globally and supports students in India along with many other countries. The specific brand partners and offers available can vary by region, so it is worth checking which partner brands are currently offering discounts for your location.'
    },
    {
      q: 'What happens to my UNiDAYS account after I graduate?',
      a: 'Once your student status expires after graduation, you generally lose access to student-exclusive UNiDAYS discounts, since verification is tied to active enrolment. Some UNiDAYS partner offers may still be available through separate graduate or alumni discount programs, but these are separate from the core student verification benefits.'
    },
    {
      q: 'Why did my student verification fail on UNiDAYS?',
      a: 'Verification can fail if your university email is not recognized in their database, if the details you entered do not match your institution\'s records, or if your uploaded student ID does not clearly show the required information. Trying the alternative verification method or double-checking your details usually resolves the issue.'
    },
    {
      q: 'Do I get a coupon code or an automatic discount with UNiDAYS?',
      a: 'It depends on the partner brand. Some UNiDAYS partners provide a unique discount code to apply at checkout, while others redirect verified students directly to a special discounted page where the offer is automatically applied — no code needed.'
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
            <span className="text-[#5B4FBE] font-semibold">UNiDAYS Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/unidays-logo_p79l20.webp"
                      alt="UNiDAYS Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">UNiDAYS Coupon Codes</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF] w-fit">
                      Student Verification & Discount Platform
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover verified UNiDAYS coupxon codes and UNiDAYS promo codes at Maxiku Offers. Save up to 60% OFF fashion, 40% OFF tech, 50% OFF food and beauty, plus enjoy free student verification and exclusive offers from Apple, HP, ASUS, MAC, and more.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> Hundreds of Brand Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
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
                  <span>Visit UNiDAYS</span>
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

            {/* Right Panel — simple styled panel reusing the logo (no promo banner image available) */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex-col items-center justify-center text-center p-10">
              <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute bottom-[-40px] left-[-20px] w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788611917/unidays-logo_p79l20.webp"
                    alt="UNiDAYS Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-white font-black text-xl tracking-tight">Free Student Verification</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Verify once, unlock exclusive discounts from hundreds of brands worldwide — free for students, forever.
                </p>
              </div>
            </div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">100s of Brands</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Partner Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 60%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹0</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">100% Free</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">To Join & Verify</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">UNiDAYS Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified UNiDAYS student discount offers.</p>
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
                          {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "40%"}
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
                          {isExpanded && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Requires free student status verification via UNiDAYS.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Discount terms vary by partner brand and region.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Some offers provide a code, others auto-apply at partner checkout.</span>
                              </li>
                            </ul>
                          )}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">



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
                <span>The Story Behind UNiDAYS</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
              UNiDAYS was founded in 2011 in Nottingham, UK, and runs as a student verification and discount network. Brands pay to be listed on the platform; in return, they offer students pricing or perks that don't show up on their regular storefronts. As of recent years, the platform covers students across dozens of countries and works with several hundred brand partners.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              The model is different from a traditional coupon site. UNiDAYS doesn't scrape codes or aggregate publicly available deals — it has direct partnerships with brands. That's why a unidays promo code tends to work more reliably than codes found elsewhere: the brand itself generated it through the UNiDAYS system.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
              Verification happens through your student email (.edu, .ac.uk, and institution-specific domains) or via document upload if your institution isn't auto-recognised. Once verified, your access lasts for a fixed period (usually 12 months) before you need to re-verify. The myuniday dashboard shows your verification status and expiry date.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit UNiDAYS</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">UNiDAYS Student Verification</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Free Forever
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Verify once, unlock discounts on Fashion, Tech, Food & Beauty brands
                </p>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-6 w-full bg-white hover:bg-gray-100 text-[#5B4FBE] py-3 rounded-xl text-xs font-black text-center transition-all cursor-pointer relative z-10 block"
              >
                Verify Now
              </a>
            </div>

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories on UNiDAYS
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Fashion & Apparel</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Tech & Electronics</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Food Delivery</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Beauty & Personal Care</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Travel & Lifestyle</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card: When a UNiDAYS Coupon Code Doesn't Work */}
<div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    When a UNiDAYS Coupon Code Doesn't Work
  </h3>

  <p className="text-xs font-semibold text-[#4A4A6A] mb-4">
    A unidays offer code failing at checkout almost always comes down to one of these:
  </p>

  <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Verification expired</span>
        <span>UNiDAYS access runs for 12 months. If your student status hasn't been re-verified, the codes you're seeing may still display but won't be valid at the brand's end. Log into myuniday and check your verification status first.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Wrong account logged in at the brand</span>
        <span>Click-through links (used by Apple and Spotify) are session-specific. If you click through from UNiDAYS but your browser opens the brand's site in a tab where you're already logged into a non-student account, the discount won't transfer. Log out of the brand's site first, then click through fresh from UNiDAYS.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Code already used</span>
        <span>Some unidays coupon codes are single-use per UNiDAYS account. If you've already claimed a Lenovo or Adidas code this verification period, the same code won't work again. Check the myuniday portal — a fresh code may be available if the offer has refreshed.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Excluded items in cart</span>
        <span>Most student discounts exclude sale items, gift cards, and some new releases. If your cart has a mix of full-price and sale items, remove the sale items and test the code on just the full-price products.</span>
      </div>
    </li>
    <li className="flex items-start gap-2.5">
      <Sparkles size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Region mismatch</span>
        <span>UNiDAYS codes are sometimes region-locked. A unidays discount code generated on the UK version of a brand's site won't apply on the US or India storefront. Make sure you're on the correct regional site for your account's registered country.</span>
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
          UNiDAYS Coupon Code: Student Discounts on Apple, Adidas, Spotify & More
        </h2>

        <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

          <p>
            Student discount platforms don't all work the same way, and UNiDAYS is one of the few that has actual brand partnerships — not scraped codes. A valid unidays coupon code unlocks pricing that isn't available to general shoppers, on brands like Apple, Adidas, Spotify, Lenovo, and Puma. The catch is you need a verified student email to access anything.
          </p>

          <p>
            This page covers how UNiDAYS works, which brands have the best active deals, how to stack a unidays discount code with other offers, and what to do when a code isn't applying. Check the deals table first if you're already verified and just need a code.
          </p>

          <div className="space-y-6 text-slate-700">
  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      How UNiDAYS Coupons Usually Work
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">How UNiDAYS Coupons Work Step-by-Step</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Step</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">What You Do</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">What You Get</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { step: '1', do: 'Sign up and verify your student status', get: 'Access to exclusive student discounts, valid for 12 months' },
            { step: '2', do: 'Select your brand on the UNiDAYS app or website', get: 'View current student-specific offers for that brand' },
            { step: '3', do: "Copy the unidays coupon code or click through the unique link", get: "Apply at checkout on the brand's site or app to unlock savings" },
            { step: '4', do: 'Add an extra coupon code from a deals site, or use a bank/wallet offer', get: 'Lower the final price further — stack where terms allow' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.step}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.do}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.get}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      A few things worth knowing about step 3: some brands (Apple, Spotify) don't give a code at all. Instead, UNiDAYS redirects you to a special URL that auto-applies the student price on the brand's site. Copying that URL and opening it in a different browser session without going through UNiDAYS will usually not work — the discount is session-linked.
    </p>
    <p>
      For brands that do give a unidays offer code (Adidas, Lenovo, Puma), the code goes into the standard promo code field at checkout. These codes are single-use per account in some cases, so don't share them publicly.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      UNiDAYS Brand Deals: What's Actually Worth Using
    </h3>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Apple & Apple Store: </strong>
      The unidays apple deal redirects students to Apple's Education Store — a separate storefront with fixed lower pricing on MacBooks, iPads, iMacs, and AirPods. This isn't a percentage-off coupon; it's a separate price tier. A unidays macbook purchase through this route typically saves more than a seasonal sale would on the standard Apple store. The unidays apple store route also stacks with Apple's back-to-school promotions when those run (usually mid-year), which can add a free accessory or gift card on top of the education price. Timing a MacBook purchase around that window is the highest-value move on the platform.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Adidas: </strong>
      One of the more consistently available unidays discount codes on the platform. Adidas offers students a percentage off across most of its range — footwear, apparel, and accessories. The discount applies online only, not in-store. Some sale items are excluded, so check the terms on the UNiDAYS portal before you go to checkout.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Spotify: </strong>
      The unidays spotify deal gives verified students access to Spotify's student Premium plan at a discounted monthly rate. This routes through UNiDAYS verification rather than Spotify's own student discount portal — the end result is the same plan, the same features, just with UNiDAYS handling the eligibility check. You re-verify annually to keep the discounted rate.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Lenovo: </strong>
      Lenovo's student deals via UNiDAYS cover laptops, tablets, monitors, and accessories. Discounts vary by product line — ThinkPad and IdeaPad series tend to get better deals than consumer lines. The unidays promo code for Lenovo applies at checkout on Lenovo's website after clicking through from UNiDAYS.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Puma: </strong>
      The unidays puma discount runs as a percentage off sitewide. Footwear and training gear are included. Puma's student discount through UNiDAYS runs most of the year with occasional blackout periods around major launches. Combining it with Puma's own sale events gives the best effective price.
    </p>
    <p>
      <strong className="text-[#2C2C40]">UNiDAYS Apple Music: </strong>
      The unidays apple music student plan is separate from the Apple Education Store deal. Students get Apple Music's individual plan at a reduced monthly rate. This runs through Apple's own student verification once you click through from UNiDAYS. The discount applies for up to four years of continuous student status verification.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      UNiDAYS vs Other Student Discount Platforms
    </h3>
    <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
      <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
        <caption className="sr-only">Student Discount Platforms Comparison Breakdown</caption>
        <thead>
          <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Feature</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">UNiDAYS</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Student Beans</th>
            <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Amazon Prime Student</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8E8F0]">
          {[
            { feature: 'Verification Method', unidays: 'Student email / document', beans: 'Student email.edu email or enrolment doc', amazon: 'Amazon ecosystem primarily' },
            { feature: 'Brand Partners', unidays: '800+ globally', beans: '200+', amazon: 'Amazon ecosystem primarily' },
            { feature: 'Code Type', unidays: 'Unique codes + click-through links', beans: 'Mostly codes', amazon: 'Auto-applied at account level' },
            { feature: 'Apple Education Access', unidays: 'Yes', beans: 'No', amazon: 'No' },
            { feature: 'Free to Join', unidays: 'Yes', beans: 'Yes', amazon: 'Free trial, then paid' },
            { feature: 'Re-verification', unidays: 'Annual', beans: 'Annual', amazon: '6 months or graduation' },
            { feature: 'Mobile App', unidays: 'Yes', beans: 'Yes', amazon: 'Yes' }
          ].map((row, i) => (
            <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
              <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                {row.feature}
              </td>
              <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap" itemProp="description">
                {row.unidays}
              </td>
              <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                {row.beans}
              </td>
              <td className="px-5 py-4 whitespace-nowrap">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
                  {row.amazon}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      UNiDAYS has the widest brand coverage of the three for tech and fashion categories. Student Beans has stronger coverage in food and entertainment in some regions. Amazon Prime Student is a separate product rather than a discount platform.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Stacking Discounts: Getting the Lowest Price with UNiDAYS
    </h3>
    <p>
      The UNiDAYS student price is the floor — but it's not always the absolute lowest you can pay.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Bank and card offers: </strong>
      Many banks run cashback or discount offers on specific brands independently of UNiDAYS. If your card has an Adidas or Lenovo offer active, the cashback triggers on the transaction even after the UNiDAYS student discount has reduced the price. You pay less, the cashback applies on what you paid.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Wallet cashback: </strong>
      Similar logic applies to payment wallets. Pay via a wallet that has a brand-specific or category-level cashback running, and the wallet cashback stacks on top of the student price.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Brand's own sale events: </strong>
      UNiDAYS student pricing and a brand's seasonal sale sometimes run simultaneously. Apple's back-to-school promotion is the clearest example — education pricing plus a bonus item or gift card. Always check what's live on the brand's site directly, not just through UNiDAYS, so you don't miss a stacking window.
    </p>
    <p>
      <strong className="text-[#2C2C40]">Coupon sites: </strong>
      Some brands honour publicly available codes even after a UNiDAYS discount has applied. This is brand-specific — check the T&Cs. Adidas, for instance, typically allows only one promo code per order, so a UNiDAYS code and a CouponsCrew code won't stack there. But for brands without that restriction, both can apply.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
      Sale Calendar: When UNiDAYS Deals Are at Their Best
    </h3>
    <p>
      Student discount platforms follow the academic calendar more than the retail calendar. The highest-value periods:
    </p>
    <p>
      <strong className="text-[#2C2C40]">July–September (Back to School / Back to College): </strong>
      Apple's education promotions run here, Lenovo pushes laptop deals, and Adidas often increases the discount tier for this window.
    </p>
    <p>
      <strong className="text-[#2C2C40]">November (Black Friday): </strong>
      Some brands temporarily increase student discount percentages or allow stacking with sale prices.
    </p>
    <p>
      <strong className="text-[#2C2C40]">January (New Year / New Semester): </strong>
      Re-verification month for many students; brands often run short-window unidays promo code campaigns to catch students who just re-verified.
    </p>
    <p>
      <strong className="text-[#2C2C40]">April–May (Exam and Graduation Season): </strong>
      Spotify and Apple Music tend to push student plan promotions ahead of graduation, targeting students who need to switch plans.
    </p>
    <p>
      Outside these peaks, the core unidays discount code offers from Adidas, Puma, and Lenovo run year-round with fairly stable discount levels.
    </p>
  </div>
</div>

          <div className="space-y-4 text-slate-700 my-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Tips for Getting the Most Out of UNiDAYS
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Re-verify before you need to shop: </strong>
              If your 12-month verification is close to expiry and you have a planned purchase coming, re-verify early. Some brands' deals require active UNiDAYS status at the time of code generation — a lapsed account gets you the regular price even if you copy a code from somewhere.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Use the app, not just the website: </strong>
              The UNiDAYS mobile app (myuniday) sometimes surfaces personalised deals and time-limited codes that aren't as prominently displayed on the desktop site. Worth checking both before a big purchase.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Check the unidays apple store route for MacBook timing: </strong>
              If you're buying a MacBook, the best window is when Apple's back-to-school offer overlaps with the education price — you get the reduced base price plus a bonus item. Track when this promotion typically starts each year and plan around it.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Don't share codes publicly: </strong>
              UNiDAYS discount codes are tied to your verified student account in the backend. Sharing a code that was generated for your account can result in your access being flagged or suspended.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Cross-check with CouponsCrew: </strong>
              UNiDAYS gives you the student price floor. CouponsCrew aggregates publicly available codes for the same brands. For brands where codes stack, running both gives you the lowest final price.
            </p>
          </div>

         
          <div className="space-y-4 text-slate-700 mt-16">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Platforms Similar to UNiDAYS
            </h3>

            <p>
              <strong className="text-[#2C2C40]">Student Beans: </strong>
              Another student verification and discount platform with overlapping brand coverage. Stronger in food and entertainment categories in some regions; weaker on tech deals than UNiDAYS.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Amazon Prime Student: </strong>
              A discounted version of Amazon Prime for students with a .edu or equivalent email. It's an Amazon product rather than a multi-brand discount network, but the Prime membership gives access to shipping benefits, Prime Video, and Prime Music alongside deals.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Chegg: </strong>
              Primarily a textbook and study tools platform, but it runs student-exclusive discounts on select software and services as part of its wider student membership.
            </p>

            <p>
              <strong className="text-[#2C2C40]">Apple Education Store (direct): </strong>
              Accessible without UNiDAYS if you have an eligible institutional email. UNiDAYS is one route in; your university's IT portal is often another. Worth checking both, since the pricing at the Education Store is fixed regardless of which route you take.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 mt-12">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Save More on Every Purchase with CouponsCrew + UNiDAYS
            </h3>

            <p>
              UNiDAYS handles the student-verified floor price. CouponsCrew covers publicly available codes for the same brands. Run both before you checkout — for brands where codes stack, that's a double saving on the same cart.
            </p>
            <p>
              Check the deals table at the top of this page before any big purchase. Codes and offers update regularly, and the best time to check is right before you buy, not days in advance.
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
            <h2 className="text-2xl font-black text-black mb-8">
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "What is a UNiDAYS coupon code and who can use it?",
                a: "A unidays coupon code is a discount code or click-through link generated specifically for verified students. Only users with an active, verified UNiDAYS account can access these codes — they're not publicly available and verification requires a student email address or document from an accredited institution."
              },
              {
                q: "How do I verify my student status on UNiDAYS?",
                a: "Sign up at myuniday.com or through the UNiDAYS app with your student email. If your institution is in UNiDAYS' system, verification is near-instant. If not, you can upload a document (enrolment letter, student ID photo) for manual review, which typically takes a day or two."
              },
              {
                q: "How long does UNiDAYS access last?",
                a: "Verification lasts for 12 months. After that, you need to re-verify. As long as you're still enrolled, re-verification is straightforward — same process as the initial sign-up."
              },
              {
                q: "Can I use a unidays promo code without going through the app?",
                a: "For brands that provide a code (Adidas, Lenovo, Puma), the code itself works at the brand's checkout without you needing to be in the UNiDAYS app at that moment. For brands that use click-through links (Apple, Spotify), the link must originate from an active UNiDAYS session — you can't bypass the platform."
              },
              {
                q: "Does UNiDAYS work in India?",
                a: "UNiDAYS is available to students in India through its global platform. Verification works with Indian university email addresses where institutions are registered with UNiDAYS. Brand availability varies — some offers on the platform are region-specific. Check your myuniday dashboard for deals visible in your region."
              },
              {
                q: "Can I stack a unidays discount code with a bank cashback offer?",
                a: "In most cases, yes. The UNiDAYS code reduces the price at the brand's checkout; the bank cashback triggers on the transaction amount you actually pay. These operate independently. The exception is if the brand's checkout specifically excludes already-discounted prices from cashback — check the bank offer T&Cs."
              },
              {
                q: "Why does the unidays apple deal not give a coupon code?",
                a: "Apple's education pricing runs through a separate Education Store, not a code system. UNiDAYS redirects verified students to this store, where the reduced price is already applied to the product listing. There's no code to enter — the discount is price-embedded on that storefront."
              },
              {
                q: "What is the unidays spotify student plan?",
                a: "It's Spotify Premium at a reduced monthly price, available only to verified students. UNiDAYS handles the eligibility verification; once confirmed, you're redirected to Spotify to complete the subscription. You pay Spotify directly at the student rate. Annual re-verification keeps the discounted rate active."
              },
              {
                q: "What happens to my UNiDAYS account after I graduate?",
                a: "Once you can no longer verify active student status, your account lapses. You keep your account but lose access to student-exclusive deals. Some brands offer a short grace period post-graduation — Spotify, for instance, lets you keep the student rate for one final billing cycle after verification can no longer be renewed."
              },
              {
                q: "Is myuniday the same as UNiDAYS?",
                a: "Yes. myuniday is the branded name for the UNiDAYS student dashboard — it's where you check your verification status, browse deals, and access your account details. The platform operates under both names."
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
                <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>


      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular UNiDAYS Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {["UNiDAYS Apple Discount", "Adidas Student Promo", "Spotify Student Plan", "Lenovo UNiDAYS Code", "Student Beans Deals", "myuniday Login", "Student Tech Offers", "CouponsCrew Home"].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Student Deals</h3>
          <div className="space-y-6">
            {[
              { heading: "Apple Education Pricing", sub: "Reduced pricing on MacBooks, iPads & accessories via UNiDAYS" },
              { heading: "Adidas Student Discount", sub: "Extra percentage off sneakers, sportswear & apparel" },
              { heading: "Spotify Premium Student", sub: "Special discounted monthly rate for verified university students" },
              { heading: "Lenovo Student Store", sub: "Discounts on laptops, tablets & tech gear for students" },
              { heading: "Puma Student Offer", sub: "Exclusive markdown on footwear and lifestyle clothing" }
            ].map((deal, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">U</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get UNiDAYS deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at UNiDAYS checkout for instant discounts.
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
                <span>Continue to UNiDAYS</span>
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
