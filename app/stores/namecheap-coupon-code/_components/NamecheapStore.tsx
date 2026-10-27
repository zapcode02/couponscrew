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
import { Coupon, NAMECHEAP_COUPONS } from './namecheapCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.namecheap.com/';

export default function NamecheapStore() {
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

  const coupons: Coupon[] = NAMECHEAP_COUPONS;

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
      q: 'How do I use a Namecheap promo code?',
      a: '[TODO: how-to answer specific to Namecheap checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Namecheap?',
      a: '[TODO: stacking rules specific to Namecheap]'
    },
    {
      q: 'Why is my Namecheap promo code not working?',
      a: '[TODO: common reasons a code might fail on Namecheap]'
    },
    {
      q: 'Where can I find the best Namecheap offers?',
      a: 'We keep this Namecheap store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Namecheap offer free domain privacy?',
      a: '[TODO: Namecheap WhoisGuard/domain privacy policy details]'
    },
    {
      q: 'How often are Namecheap coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Namecheap Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/namecheap-logo_xlr7iw.webp"
                      alt="Namecheap Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Namecheap Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    [TODO: 1-2 sentence hero description — what Namecheap sells (domains, hosting, SSL, VPN) and the headline savings claim]
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
                  <span>Visit Namecheap</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/namecheap-logo_xlr7iw.webp"
                alt="Namecheap Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">[TODO: N]+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to [TODO: N]%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">[TODO: ₹N]+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Namecheap Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Namecheap coupon codes & offers.</p>
              </div>
            </div>

            {/* Coupons Card List */}
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
                          {coupon.badgeType || "DEAL"}
                        </span>
                        <span className="text-sm sm:text-xl lg:text-[28px] font-black leading-tight tracking-tight my-1.5 text-center">
                          {coupon.badge}
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
                          <button
                            onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                            className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
                          >
                            View Details
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>

                          {/* Dynamic Client Approved Bullet Points */}
                          {isExpanded && coupon.details && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                              {coupon.details.map((point, index) => (
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
                            className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${isCopied
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
              <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Namecheap FastVPN: The Product Most Buyers Overlook
              </h2>

              <p className="text-xs font-semibold text-[#4A4A6A] leading-relaxed mb-4">
                Alongside domains and hosting, Namecheap sells FastVPN — a VPN service included in the Namecheap ecosystem.
              </p>

              <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside mb-4">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Yearly plan from ~₹82/month (up to 45% off vs monthly)
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Available as standalone or bundled with hosting
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Works on Windows, Mac, iOS, and Android
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Covers up to 3 devices simultaneously
                  </span>
                </li>
              </ul>

              <p className="text-xs font-semibold text-[#4A4A6A] leading-relaxed">
                FastVPN is not Namecheap's headline product, but it's worth knowing about if you're already a Namecheap customer — bundling it with an existing subscription can make the per-product price lower than buying a standalone VPN separately.
              </p>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
              <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                How to Apply a Namecheap Discount Code
              </h2>

              <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Go to namecheap.com and add your domain or hosting plan to the cart.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    On the cart page, find the "Promo Code" field — it appears below your order summary on the right side.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Type or paste your Namecheap coupon code exactly as listed. Codes are case-sensitive.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Click Apply and confirm the discounted price updates in the total before proceeding.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Choose your payment method. Namecheap bills in USD — see the payment section below before entering card details.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    If the code field isn't visible, scroll down on the cart page — it can sit below the product list rather than at the top.
                  </span>
                </li>
              </ol>
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
              <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                Namecheap Coupon Code: Save on Domains, Hosting, and SSL in India
              </h2>

              <div className="text-gray-600 font-normal leading-relaxed space-y-6">
                <p>
                  A Namecheap coupon code is a promo code you enter at checkout on namecheap.com to reduce the price of a domain, hosting plan, SSL certificate, professional email, or VPN subscription. Namecheap runs campaign codes through affiliate partners and seasonal sales — current active codes (October 2026) cover domains up to 97% off, shared hosting up to 56% off first year, and a dedicated GoDaddy-switcher code for anyone transferring a domain across.
                </p>

                <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                    <caption className="sr-only">Namecheap Offers and Discount List</caption>
                    <thead>
                      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                        <th scope="col" className="w-[18%] px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
                          Offer Type
                        </th>
                        <th scope="col" className="w-[18%] px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
                          Discount / Price
                        </th>
                        <th scope="col" className="w-[44%] px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">
                          Offer Highlights
                        </th>
                        <th scope="col" className="w-[20%] px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">
                          User Eligibility / Terms
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      {[
                        {
                          offerType: 'SAVE 95%',
                          discount: 'Rs377.88 / yr (95% OFF)',
                          highlights: '.health domain registrations for healthcare & wellness businesses (was Rs7,878.54).',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 91%',
                          discount: 'Rs216.47 / yr (91% OFF)',
                          highlights: '.best domain registrations for a standout online identity (was Rs2,371.73).',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 88%',
                          discount: 'Rs282.94 / yr (88% OFF)',
                          highlights: '.blog domains for business blogs, personal websites, and content creators.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 86%',
                          discount: 'Rs377.88 / yr (86% OFF)',
                          highlights: '.info domain registrations to build information-focused websites (was Rs2,751.51).',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 86%',
                          discount: 'Rs187.99 / yr (86% OFF)',
                          highlights: '.asia domain registrations to reach regional audiences (was Rs1,374.80).',
                          eligibility: 'Regional Startups'
                        },
                        {
                          offerType: 'SAVE 62%',
                          discount: 'From Rs282.94 / mo',
                          highlights: 'Stellar Plus Hosting with unmetered SSD storage and unlimited email mailboxes.',
                          eligibility: '30-Day Free Trial'
                        },
                        {
                          offerType: 'SAVE 61%',
                          discount: 'From Rs216.47 / mo',
                          highlights: 'Stellar Hosting to host up to three websites with 20 GB SSD storage.',
                          eligibility: '30-Day Free Trial'
                        },
                        {
                          offerType: 'SAVE 46%',
                          discount: 'Rs489.60 / mo (46% OFF)',
                          highlights: 'EasyWP Turbo Hosting with 50 GB NVMe storage and extra CPU/RAM resources.',
                          eligibility: 'Growing Sites'
                        },
                        {
                          offerType: 'SAVE 44%',
                          discount: 'Rs307.62 / mo (44% OFF)',
                          highlights: 'EasyWP Starter WordPress hosting with 10 GB NVMe and 99.9% uptime guarantee.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 23%',
                          discount: 'Rs653.22 / mo (23% OFF)',
                          highlights: 'Pulsar VPS Hosting with 2 CPU cores, 2 GB RAM, and 40 GB SSD storage.',
                          eligibility: 'Developers'
                        },
                        {
                          offerType: 'SAVE 20%',
                          discount: 'Rs368.39 / mo (20% OFF)',
                          highlights: 'Spark VPS Hosting with 1 CPU core, 1 GB RAM, and 20 GB SSD storage.',
                          eligibility: 'Lightweight Projects'
                        },
                        {
                          offerType: 'SAVE UP TO 15%',
                          discount: 'From Rs3,157.87 / 2 yrs',
                          highlights: 'Early .com domain renewals to lock in pricing before registry increases.',
                          eligibility: 'Valid Before Nov 1'
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

                <div>
                  <div className="space-y-4 text-slate-700">
                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Namecheap Promo Code for Domain Registration
                    </p>

                    <p>
                      For a first .com domain, the SPECIAL and NEWCOM679 codes give the biggest savings — SPECIAL can take a .com to as low as a few dollars for the first year, while NEWCOM679 gives a percentage off the standard listed rate. You can only use one code per order.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      Namecheap's current INR-equivalent prices for popular TLDs:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Domain</th>
                            <th className="p-4 font-bold">First Year Price</th>
                            <th className="p-4 font-bold">Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">.COM</td>
                            <td className="p-4">From ₹499/year</td>
                            <td className="p-4">Standard</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">.HOST</td>
                            <td className="p-4">From ₹82/year</td>
                            <td className="p-4">Promotional</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">.ONLINE</td>
                            <td className="p-4">From ₹81/year</td>
                            <td className="p-4">Promotional</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">.ORG</td>
                            <td className="p-4">From ₹624/year</td>
                            <td className="p-4">Standard</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">.NET</td>
                            <td className="p-4">~13% off standard rate</td>
                            <td className="p-4">Standard</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">.IN</td>
                            <td className="p-4">Limited availability</td>
                            <td className="p-4">ccTLD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <em>Note:</em> Prices shown are approximate INR equivalents at current exchange rates. Namecheap bills in USD — the exact INR amount you pay depends on your bank's conversion rate and any forex fees (see the payment section below).
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Namecheap Hosting Discounts: What's Available Right Now
                    </p>

                    <p>
                      Namecheap runs three hosting categories with active discounts:
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      Shared Hosting (Stellar range)
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Plan</th>
                            <th className="p-4 font-bold">Intro Price</th>
                            <th className="p-4 font-bold">Renewal Price</th>
                            <th className="p-4 font-bold">What's Included</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Stellar</td>
                            <td className="p-4">~₹180/month</td>
                            <td className="p-4">~₹534/month</td>
                            <td className="p-4">3 websites, 20GB SSD, free SSL</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Stellar Plus</td>
                            <td className="p-4">~₹218/month</td>
                            <td className="p-4">~₹754/month</td>
                            <td className="p-4">Unlimited websites, unmetered SSD</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Stellar Business</td>
                            <td className="p-4">~₹429/month</td>
                            <td className="p-4">~₹1,137/month</td>
                            <td className="p-4">Unlimited sites, CloudLinux, daily backup</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      The intro price applies to the first 1–2 year term. Renewal rates are roughly 3x the intro price — see the renewal section below.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      WordPress Hosting (EasyWP)
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>Up to 78% off during sales</li>
                      <li>Starter at ~₹342/month, Turbo at ~₹459/month, Supersonic at ~₹560/month</li>
                      <li>30-day free trial available on EasyWP — useful to test before committing</li>
                    </ul>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      VPS Hosting
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Plan</th>
                            <th className="p-4 font-bold">Specs</th>
                            <th className="p-4 font-bold">Price</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Spark</td>
                            <td className="p-4">1 core / 1GB RAM</td>
                            <td className="p-4">~₹371/month</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Pulsar</td>
                            <td className="p-4">2 cores / 2GB RAM</td>
                            <td className="p-4">~₹659/month</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Quasar</td>
                            <td className="p-4">4 cores / 6GB RAM</td>
                            <td className="p-4">~₹1,233/month</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Magnetar</td>
                            <td className="p-4">8 cores / 12GB RAM</td>
                            <td className="p-4">~₹2,383/month</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      VPS plans are self-managed by default. Windows licences and control panel (cPanel/Plesk) fees are extra.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      The Renewal Price Jump: What Indian Buyers Need to Know
                    </p>

                    <p>
                      Namecheap's introductory prices look very competitive — but renewal rates are typically 3x the first-year price. This applies across domains, shared hosting, and email plans.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      A few ways to manage it:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Lock in a longer term upfront.</strong> Buying 2–3 years at intro pricing keeps costs lower for longer than renewing annually.
                      </li>
                      <li>
                        <strong>Transfer out before renewal.</strong> Domain transfers to another registrar sometimes cost less than renewing at Namecheap's renewal rate. The SOLOTRANSFER24 code makes Namecheap competitive as a transfer-in option — other registrars run similar transfer promos.
                      </li>
                      <li>
                        <strong>Check Black Friday.</strong> Namecheap's biggest hosting discounts arrive in November — Black Friday and Cyber Monday are the best times to buy or renew hosting plans.
                      </li>
                      <li>
                        <strong>No renewal coupon codes.</strong> Unlike first-purchase codes, Namecheap generally doesn't release renewal promo codes. The savings are in buying longer terms upfront, not in codes at renewal time.
                      </li>
                    </ul>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Namecheap and Indian Payments: What You Should Know Before You Buy
                    </p>

                    <p>
                      Namecheap bills in USD, not INR. This has a few practical consequences for Indian buyers:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>UPI is not accepted.</strong> You cannot pay via Google Pay, PhonePe, Paytm, or net banking. Namecheap accepts international Visa, Mastercard, and PayPal.
                      </li>
                      <li>
                        <strong>Forex fees apply.</strong> Standard Indian cards charge 1.5%–3.5% as a foreign currency transaction fee on USD purchases.
                      </li>
                      <li>
                        <strong>No Indian GST invoice.</strong> Namecheap does not issue a GST invoice — if you need one for business expenses, GoDaddy India or Hostinger India are better options.
                      </li>
                      <li>
                        <strong>Cards that avoid forex fees:</strong> IndusInd Bank and IDFC FIRST Bank cards are known to have zero or low forex markup on international transactions — worth using for Namecheap orders.
                      </li>
                      <li>
                        <strong>PayPal workaround:</strong> Loading PayPal with your Indian card and paying from the PayPal balance sometimes reduces conversion costs, but PayPal's own exchange rate applies.
                      </li>
                    </ul>

                    <p>
                      This payment gap is the single biggest practical issue for Indian buyers using Namecheap — most competitors (GoDaddy India, Hostinger India, BigRock) accept UPI and bill directly in INR.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      BYEBYEGD: The GoDaddy Switcher Code Explained
                    </p>

                    <p>
                      If your domain is currently registered with GoDaddy and you're considering moving it, Namecheap runs a dedicated transfer code: BYEBYEGD gives up to 20% off on domains transferred in from GoDaddy.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      How a domain transfer works:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Get your EPP/authorisation code from GoDaddy (in your GoDaddy account under domain settings).</li>
                      <li>Go to namecheap.com/domains/transfer, enter the domain name, and apply BYEBYEGD at checkout.</li>
                      <li>Confirm the transfer in both GoDaddy and Namecheap — transfers typically complete in 5–7 days.</li>
                      <li>The transfer extends your domain registration by one year from the current expiry date.</li>
                    </ol>

                    <p className="mt-4">
                      <strong>Check before transferring:</strong> If your domain was registered or last transferred less than 60 days ago, ICANN rules prevent a transfer regardless of which registrar you use. Also compare Namecheap's renewal rate against GoDaddy's before switching — the intro saving should outweigh the first renewal jump.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Namecheap vs GoDaddy vs Hostinger: Which to Choose for India?
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Feature</th>
                            <th className="p-4 font-bold">Namecheap</th>
                            <th className="p-4 font-bold">GoDaddy</th>
                            <th className="p-4 font-bold">Hostinger</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Billing currency</td>
                            <td className="p-4">USD</td>
                            <td className="p-4">INR (India)</td>
                            <td className="p-4">INR (India)</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">UPI / Net Banking</td>
                            <td className="p-4">❌ No</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">GST invoice</td>
                            <td className="p-4">❌ No</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Shared hosting entry</td>
                            <td className="p-4">~₹180/month</td>
                            <td className="p-4">~₹89/month</td>
                            <td className="p-4">~₹149/month</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Renewal price jump</td>
                            <td className="p-4">~3x intro price</td>
                            <td className="p-4">~4x intro price</td>
                            <td className="p-4">~2x intro price</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Free domain (year 1)</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Free SSL</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">30-day money back</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                            <td className="p-4">✅ Yes</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Uptime guarantee</td>
                            <td className="p-4">100% (stated)</td>
                            <td className="p-4">99.9%</td>
                            <td className="p-4">99.9%</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Phone support</td>
                            <td className="p-4">❌ No</td>
                            <td className="p-4">✅ 24/7</td>
                            <td className="p-4">❌ No</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">WordPress hosting</td>
                            <td className="p-4">EasyWP (from ~₹342/mo)</td>
                            <td className="p-4">Managed WP from ~₹369/mo</td>
                            <td className="p-4">From ~₹149/mo</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">VPN</td>
                            <td className="p-4">FastVPN (from ~₹82/mo)</td>
                            <td className="p-4">Not included</td>
                            <td className="p-4">Not included</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Coupon codes</td>
                            <td className="p-4">Yes — affiliate + campaign</td>
                            <td className="p-4">Yes — frequent</td>
                            <td className="p-4">Yes — frequent</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <strong>When Namecheap makes sense for Indian buyers:</strong> You're comfortable paying in USD, your card avoids forex fees, and you're focused on the first-year pricing for domains or EasyWP WordPress hosting.
                    </p>

                    <p>
                      <strong>When GoDaddy or Hostinger make more sense:</strong> You need INR billing, UPI payment, or a GST invoice — or you want phone support. GoDaddy's India storefront and Hostinger India both handle these natively.
                    </p>
                  </div>
                </div>

                <hr className="my-8 border-gray-200" />

                {/* Section Header - Replaced H2 with Styled Paragraph */}
                <p className="text-xl font-black text-[#5B4FBE] mb-4">
                  When Does Namecheap Have the Best Sales?
                </p>

                <p>
                  Namecheap's discount calendar follows a predictable pattern:
                </p>

                {/* Data Table */}
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white">
                        <th className="p-4 font-bold">Period</th>
                        <th className="p-4 font-bold">Typical Deals</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                      <tr>
                        <td className="p-4 font-semibold">Black Friday / Cyber Monday (November)</td>
                        <td className="p-4">Deepest hosting discounts of the year — best time to buy</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">New Year (January)</td>
                        <td className="p-4">Domain and hosting promotions</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">Back to Business (August–September)</td>
                        <td className="p-4">Hosting and email deals targeting new website launches</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">Flash sales (year-round)</td>
                        <td className="p-4">Short-window domain and SSL deals; check the Namecheap Deals page</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  For domains, the entry price is competitive year-round with the right code. For hosting, Black Friday is the standout window — Namecheap's EasyWP and Stellar plans have historically dropped to their lowest prices in November.
                </p>

                <hr className="my-10 border-gray-200" />

                {/* FAQs Section Header - Replaced H1/H2 with Styled Paragraph */}
                <p className="text-2xl font-black text-black mt-16 mb-8">
                  Frequently Asked Questions
                </p>

                {/* FAQ List */}
                <div className="space-y-4">

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Is Namecheap available in India?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — Namecheap accepts orders from India and ships domains and hosting globally. The key difference from Indian-based registrars is that Namecheap bills in USD, not INR, and does not accept UPI, net banking, or issue GST invoices. Payment is via international Visa, Mastercard, or PayPal.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is the best Namecheap coupon code for a domain?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SPECIAL gives up to 97% off a first domain, and NEWCOM679 gives up to 55% off. For domain transfers specifically from GoDaddy, BYEBYEGD gives up to 20% off. Only one code can be applied per order — test both on your cart and pick the one that saves more.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does Namecheap offer a student discount?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Namecheap has run student-specific promotions in the past — typically bundled deals including a free .me domain and discounted hosting for verified students. Availability varies by campaign. Check Namecheap's official promotions page or the affiliate pages for active student deals.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does Namecheap accept UPI or Indian payment methods?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. Namecheap does not accept UPI, net banking, or Indian payment apps. It accepts international Visa, Mastercard, and PayPal. Indian buyers should use a card with zero forex markup (IndusInd Bank or IDFC FIRST Bank are commonly recommended) to avoid paying 1.5%–3.5% extra on the USD conversion.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Can I get a Namecheap renewal discount?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Namecheap rarely releases coupon codes for renewals — promo codes are almost always for new purchases or transfers. To save on renewal costs, buy longer terms upfront (2–3 years) at the intro rate, or compare the renewal price against a transfer-in offer from a competing registrar before your domain expires.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is Namecheap's refund policy?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Namecheap offers a 30-day money-back guarantee on most hosting plans. Domain registrations are generally non-refundable (ICANN requires registrars to pay registry fees on registration). IP addresses purchased as add-ons are also non-refundable. Full refund conditions are listed on the Namecheap refund policy page.
                    </p>
                  </div>

                </div>

                <hr className="my-10 border-gray-200" />

                <p>
                  Namecheap's best use case for Indian buyers is first-year domain pricing and EasyWP WordPress hosting — especially with a campaign code running. The USD billing and absence of UPI are genuine friction points, so it's worth comparing the final INR cost (after conversion and forex fees) against Hostinger India or BigRock on an Indian card before confirming. For anyone switching from GoDaddy, the BYEBYEGD transfer code and the SOLOTRANSFER24 offer make the move financially straightforward for year one.
                </p>

              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                  Popular Namecheap Searches
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["Namecheap Coupons", "Domain Registration Deals", "Shared Hosting Offers", "EasyWP WordPress", "SSL Certificate Sale", "Domain Transfer", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Namecheap checkout for instant discounts.
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
                <span>Continue to Namecheap</span>
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
