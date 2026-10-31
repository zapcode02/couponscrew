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
import { Coupon, LENOVO_COUPONS } from './lenovoCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.lenovo.com/in/en/';

export default function LenovoStore() {
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

  const coupons: Coupon[] = LENOVO_COUPONS;

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
      q: 'How do I use a Lenovo coupon code?',
      a: '[TODO: how-to answer specific to Lenovo checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Lenovo?',
      a: '[TODO: stacking rules specific to Lenovo]'
    },
    {
      q: 'Why is my Lenovo promo code not working?',
      a: '[TODO: common reasons a code might fail on Lenovo]'
    },
    {
      q: 'Where can I find the best Lenovo offers?',
      a: 'We keep this Lenovo store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Lenovo offer a student discount?',
      a: '[TODO: Lenovo student discount program details]'
    },
    {
      q: 'How often are Lenovo coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Lenovo Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/lenovo-logo_bndxr8.webp"
                      alt="Lenovo Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Lenovo Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    [TODO: 1-2 sentence hero description — what Lenovo sells (laptops, desktops, tablets, Legion gaming) and the headline savings claim]
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
                  <span>Visit Lenovo</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/lenovo-logo_bndxr8.webp"
                alt="Lenovo Offers"
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Lenovo Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Lenovo coupon codes & offers.</p>
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
                How to Apply a Lenovo Discount Code
              </h2>

              <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Go to lenovo.com/in and add your product to the cart.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    On the cart or checkout page, find the "Add Promo Code" or "Coupon Code" field.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Enter your Lenovo coupon code in uppercase exactly as listed — codes are case-sensitive.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Click Apply and confirm the discounted price appears before choosing a payment method.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    If you have a credit card cashback offer active (see below), pay with that card at checkout — the cashback is applied separately from the code and can stack.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Lenovo's Spin & Win coupons (earned from the site's spin wheel) work the same way but expire at 23:59 on the day they're won. Use these immediately.
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
              <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Lenovo Discount Code Not Working? Check These First
              </h2>

              <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>VISALAPTOP2000 requires a Visa card.</strong> Using it at checkout with a Mastercard, RuPay, or UPI returns an error.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Cashback and EMI don't combine.</strong> Cashback offers — whether from a code or the sitewide structure — are excluded on no-cost EMI transactions. If you want the cashback, pay in full.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Spin &amp; Win coupons expire same day.</strong> These are earned from Lenovo's spin wheel and are only valid until 23:59 on the day they were won.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Refurbished outlet exclusions.</strong> Codes and cashback offers that apply to lenovo.com/in regular products typically exclude the refurbished outlet, Pro Store, and Employee Purchase Programme.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Student codes are capped.</strong> UNiDAYS and Sheer ID discounts are both 10% individually, but the combined maximum on any order is 5%.
                  </span>
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
                Lenovo Coupon Code: Save on Laptops, ThinkPads, Legion, and Accessories in India
              </p>

              <div className="text-gray-600 font-normal leading-relaxed space-y-6">
                <p>
                  A Lenovo coupon code is a promo code you apply at lenovo.com/in checkout to reduce the price of a laptop, desktop, tablet, monitor, or accessory. Lenovo India runs codes through affiliate partners and its own seasonal campaigns — current codes (October 2026) cover custom PCs, ThinkBook, LOQ gaming laptops, and tablet bundles. But Lenovo's bigger savings often come from the credit card cashback and UPI cashback the site runs in parallel — those can save more than a code alone.
                </p>

                <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                    <caption className="sr-only">Lenovo Offers and Discount List</caption>
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
                          offerType: 'SAVE 55%',
                          discount: '₹82,991 (55% OFF)',
                          highlights: 'Lenovo IdeaPad Slim 3 with Intel Core i7, 16GB RAM, and 512GB SSD.',
                          eligibility: '5% Cashback & 12M 0% EMI'
                        },
                        {
                          offerType: 'SAVE 50%',
                          discount: '₹1,66,990 (50% OFF)',
                          highlights: 'Lenovo LOQ gaming laptop with Intel Core i7, RTX 5050 8GB, and 1TB SSD.',
                          eligibility: 'Extra 10% for Students'
                        },
                        {
                          offerType: 'SAVE 50%',
                          discount: '₹3,000 (50% OFF)',
                          highlights: 'Lenovo Legion M410 Wireless RGB Gaming Mouse with customizable lighting.',
                          eligibility: 'Student Pricing Available'
                        },
                        {
                          offerType: 'SAVE 47%',
                          discount: '₹88,991 (47% OFF)',
                          highlights: 'Lenovo ThinkPad E14 business laptop with AMD Ryzen 5, 16GB RAM & 512GB SSD.',
                          eligibility: '5% Cashback & 12M 0% EMI'
                        },
                        {
                          offerType: 'SAVE 44%',
                          discount: '₹1,70,990 (44% OFF)',
                          highlights: 'Lenovo LOQ Tower desktop with Intel Core Ultra 7 and RTX 5050 graphics.',
                          eligibility: 'Verified Student Savings'
                        },
                        {
                          offerType: 'SAVE 43%',
                          discount: '₹1,40,991 (43% OFF)',
                          highlights: 'Lenovo LOQ with Intel Core i5, RTX 4050 6GB graphics, and 1TB SSD.',
                          eligibility: 'Gamers & Creators'
                        },
                        {
                          offerType: 'SAVE 42%',
                          discount: '₹6,25,990 (42% OFF)',
                          highlights: 'Lenovo Legion Pro 7 flagship with Intel Core Ultra 9, 64GB RAM & RTX 5090.',
                          eligibility: 'AI & Creative Work'
                        },
                        {
                          offerType: 'SAVE 39%',
                          discount: '₹4,05,991 (39% OFF)',
                          highlights: 'Lenovo Legion Pro 7 with Intel Core Ultra 9, 32GB RAM & RTX 5070 Ti.',
                          eligibility: 'Gamers & Creators'
                        },
                        {
                          offerType: 'SAVE 30%',
                          discount: '₹29,999 (30% OFF)',
                          highlights: 'Lenovo Idea Tab 11 5G with Pen, 8GB RAM, and 256GB storage.',
                          eligibility: '₹750 Cashback & 6M 0% EMI'
                        },
                        {
                          offerType: 'SAVE 21%',
                          discount: '₹1,13,221 (21% OFF)',
                          highlights: 'Lenovo Yoga 7 2-in-1 Copilot+ PC in Luna Grey and Seashell colors.',
                          eligibility: 'Professionals & Students'
                        },
                        {
                          offerType: 'SAVE 15%',
                          discount: '₹2,43,622 (15% OFF)',
                          highlights: 'Lenovo Legion Pro 5 powered by Intel Core Ultra for demanding titles.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 7%',
                          discount: '₹1,74,240 (7% OFF)',
                          highlights: 'Lenovo LOQ Gen 10 AMD laptop built with modern hardware.',
                          eligibility: 'Power Users'
                        },
                        {
                          offerType: 'SAVE 6%',
                          discount: '₹1,67,879 (6% OFF)',
                          highlights: 'Lenovo LOQ Gen 10 AMD laptop delivering dependable daily performance.',
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


                <div>
                  <div className="space-y-4 text-slate-700">
                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo Cashback Offers: Often More Than the Code
                    </p>

                    <p>
                      On lenovo.com/in, the official credit card and UPI cashback structure can save significantly more than most coupon codes. Cashback is paid to your bank account within 30 days of delivery.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      Credit Card Cashback (Any Bank)
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Product</th>
                            <th className="p-4 font-bold">Cashback</th>
                            <th className="p-4 font-bold">Per-Order Cap</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Legion (all models)</td>
                            <td className="p-4">10%</td>
                            <td className="p-4">₹10,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Yoga (all laptops)</td>
                            <td className="p-4">10%</td>
                            <td className="p-4">₹10,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">IdeaPad 5 (Slim, 2-in-1, Pro)</td>
                            <td className="p-4">10%</td>
                            <td className="p-4">₹7,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">LOQ (RTX 4050 / 5050 / 5060)</td>
                            <td className="p-4">10%</td>
                            <td className="p-4">₹7,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Gaming Desktops</td>
                            <td className="p-4">10%</td>
                            <td className="p-4">₹10,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">ThinkPad T Series</td>
                            <td className="p-4">7%</td>
                            <td className="p-4">₹10,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">ThinkBook 14x</td>
                            <td className="p-4">₹10,000 flat</td>
                            <td className="p-4">₹10,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">ThinkStation / ThinkPad P & X</td>
                            <td className="p-4">₹20,000 flat</td>
                            <td className="p-4">₹20,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">ThinkPad E & L</td>
                            <td className="p-4">5%</td>
                            <td className="p-4">₹7,500</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Monitors</td>
                            <td className="p-4">₹1,000 flat</td>
                            <td className="p-4">₹1,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Accessories</td>
                            <td className="p-4">5%</td>
                            <td className="p-4">₹1,500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <strong>Conditions:</strong> Maximum 3 units per card; 1 transaction per card. Cashback does not apply on EMI transactions. Choose either card cashback or UPI cashback — you cannot claim both on the same order.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      UPI Cashback (Alternative)
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Product</th>
                            <th className="p-4 font-bold">UPI Cashback</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">IdeaPad Slim 3 (Intel Core i5)</td>
                            <td className="p-4">₹5,000 flat</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">ThinkPad E & L, LOQ RTX 3050, most IdeaPad Slim 3</td>
                            <td className="p-4">3%</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Monitors</td>
                            <td className="p-4">3%</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Tablets</td>
                            <td className="p-4">₹750–₹2,000 flat</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      UPI cashback applies via any UPI app, with no per-card restriction, on carts up to ₹1,00,000.
                    </p>

                    <p>
                      On a Legion laptop at ₹80,000, for example, credit card cashback at 10% (capped at ₹10,000) saves more than a flat ₹1,500 or ₹2,000 coupon code. Check the cashback amount on your specific product before deciding whether to use a code or rely on cashback.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo Promo Code for Students
                    </p>

                    <p>
                      Lenovo India offers student-specific savings through two programmes:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>UNiDAYS:</strong> Up to 10% extra off for verified students.
                      </li>
                      <li>
                        <strong>Sheer ID:</strong> Up to 10% off after student ID verification.
                      </li>
                    </ul>

                    <p className="mt-4">
                      <strong>Important:</strong> The combined student discount is capped at 5% per purchase, and student discounts cannot be combined with most other active offers. However, ThinkPad E Series comes with ₹5,000 off specifically for students — worth checking against the general 5% cap to see which gives more.
                    </p>

                    <p>
                      For student buyers, the ThinkBook and ThinkPad E ranges are the practical choices — they sit at ₹55,000–₹90,000, qualify for student pricing, and are covered by Lenovo's business-grade warranty.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Bank Offers on Lenovo India
                    </p>

                    <p>
                      Beyond the sitewide cashback, a few banks have run card-specific Lenovo offers:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Bank / Card</th>
                            <th className="p-4 font-bold">Offer</th>
                            <th className="p-4 font-bold">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Axis Bank</td>
                            <td className="p-4">₹3,500 off</td>
                            <td className="p-4">On Lenovo PCs and laptops with Axis Bank card</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">HDFC Bank</td>
                            <td className="p-4">10% cashback, up to ₹5,000</td>
                            <td className="p-4">On HDFC credit cards (not valid on EMI)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">SBI / Yes Bank</td>
                            <td className="p-4">10% cashback, up to ₹5,000</td>
                            <td className="p-4">On credit card transactions</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Bank of Baroda</td>
                            <td className="p-4">Offer available</td>
                            <td className="p-4">Check bankofbaroda.in for current terms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <em>Dev note:</em> Axis Bank offer (₹3,500 off) confirmed via axis.bank.in/offers/lenovo-offers page. HDFC, SBI, and Yes Bank offers sourced from Zoutons. Verify active status and current terms directly with each bank before publishing — bank offers have fixed windows and change by campaign.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo Exchange Offer: How the Cashify Bonus Works
                    </p>

                    <p>
                      Lenovo India's exchange offer is handled through Cashify and gives a bonus above your old device's base trade-in value. The bonus is paid within 30 days of Cashify picking up the device.
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">New Product Price</th>
                            <th className="p-4 font-bold">Exchange Bonus</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">₹60,000–₹79,999</td>
                            <td className="p-4">+₹2,500</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">₹80,000–₹1,19,999</td>
                            <td className="p-4">+₹5,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">₹1,20,000–₹1,49,999</td>
                            <td className="p-4">+₹10,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Above ₹1,50,000</td>
                            <td className="p-4">+₹15,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Any Monitor</td>
                            <td className="p-4">+₹1,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      The base trade-in value for your old device is assessed separately by Cashify and varies by condition, model, and age. The bonus above is on top of that value — not the full exchange amount. The bonus and the base value together are credited within 30 days of pickup; they are not deducted at checkout.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo Product Line Guide: What to Buy
                    </p>

                    <p>
                      Lenovo's lineup is wide enough to be confusing. Here's what each line is actually for:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Series</th>
                            <th className="p-4 font-bold">Who It's For</th>
                            <th className="p-4 font-bold">Price Range (India)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">IdeaPad Slim / IdeaPad 3</td>
                            <td className="p-4">Students, general use, everyday computing</td>
                            <td className="p-4">₹35,000–₹65,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Yoga (Slim, 2-in-1, Pro)</td>
                            <td className="p-4">Creative work, portability, touchscreen + pen users</td>
                            <td className="p-4">₹70,000–₹1,50,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">ThinkBook</td>
                            <td className="p-4">Small business, professionals who want ThinkPad-quality at lower cost</td>
                            <td className="p-4">₹55,000–₹1,20,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">ThinkPad E / L</td>
                            <td className="p-4">Entry business laptops with ThinkPad durability</td>
                            <td className="p-4">₹55,000–₹90,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">ThinkPad T / X1 Carbon</td>
                            <td className="p-4">Senior professionals, executives — premium business</td>
                            <td className="p-4">₹1,10,000–₹2,50,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">LOQ</td>
                            <td className="p-4">Entry to mid-range gaming on a budget</td>
                            <td className="p-4">₹65,000–₹1,10,000</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Legion</td>
                            <td className="p-4">Mid to high-end gaming, content creation with GPU need</td>
                            <td className="p-4">₹80,000–₹2,00,000+</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">IdeaCentre / ThinkCentre</td>
                            <td className="p-4">Home and office desktops</td>
                            <td className="p-4">₹40,000–₹1,20,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <strong>ThinkBook vs ThinkPad:</strong> ThinkPad has a longer military-durability certification history and the iconic TrackPoint; ThinkBook looks more mainstream and costs less for similar specs. For a ₹70,000–₹80,000 budget where both options exist, ThinkBook gives more RAM and storage; ThinkPad gives better build certification and keyboard.
                    </p>

                    <p>
                      <strong>LOQ vs Legion:</strong> LOQ is Lenovo's budget gaming line — same GPU options as Legion but with plastic build, lower display quality, and fewer thermal modes. For casual to moderate gaming, LOQ is the better-value pick. For heavy gaming, content creation, or if you keep laptops 4+ years, Legion's build holds up better.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo vs Dell vs HP: Which Brand for Indian Buyers?
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Feature</th>
                            <th className="p-4 font-bold">Lenovo</th>
                            <th className="p-4 font-bold">Dell</th>
                            <th className="p-4 font-bold">HP</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Price range (India)</td>
                            <td className="p-4">₹35,000–₹2,50,000</td>
                            <td className="p-4">₹45,000–₹2,50,000</td>
                            <td className="p-4">₹30,000–₹2,00,000</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Global PC market share</td>
                            <td className="p-4">~27.2% (largest)</td>
                            <td className="p-4">~14.8%</td>
                            <td className="p-4">~21.3%</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Keyboard quality</td>
                            <td className="p-4">Best in class (ThinkPad)</td>
                            <td className="p-4">Average (XPS layout controversial)</td>
                            <td className="p-4">Decent</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Gaming line</td>
                            <td className="p-4">Legion + LOQ</td>
                            <td className="p-4">Alienware</td>
                            <td className="p-4">Omen</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Business line</td>
                            <td className="p-4">ThinkPad / ThinkBook</td>
                            <td className="p-4">Latitude</td>
                            <td className="p-4">EliteBook</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Entry budget</td>
                            <td className="p-4">₹35,000 (IdeaPad)</td>
                            <td className="p-4">₹45,000+</td>
                            <td className="p-4">₹30,000 (HP 14)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Student deals</td>
                            <td className="p-4">UNiDAYS + Sheer ID</td>
                            <td className="p-4">Dell Student Store</td>
                            <td className="p-4">HP Education Store</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Coupon codes</td>
                            <td className="p-4">Yes — affiliate + campaign</td>
                            <td className="p-4">Yes — limited</td>
                            <td className="p-4">Yes — frequent</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">No-cost EMI</td>
                            <td className="p-4">Yes, 3–12 months</td>
                            <td className="p-4">Yes</td>
                            <td className="p-4">Yes</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Cashback structure</td>
                            <td className="p-4">5–10% via any bank card</td>
                            <td className="p-4">Card-specific</td>
                            <td className="p-4">Card-specific</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Refurbished outlet</td>
                            <td className="p-4">Yes (up to 68% off)</td>
                            <td className="p-4">Dell Outlet</td>
                            <td className="p-4">HP Renew</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      Lenovo wins on breadth — no other brand covers budget student laptops, mainstream work laptops, ThinkPad-grade business machines, and gaming all in one store with unified cashback offers. Dell's sweet spot is premium build quality above ₹80,000. HP has the widest entry-level range below ₹40,000.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Lenovo Certified Refurbished: Save Up to 68% Off
                    </p>

                    <p>
                      Lenovo India runs a Certified Refurbished Outlet (accessible via lenovo.com/in under Deals) that lists returned, open-box, and factory-refurbished units at up to 68% below MRP. Products come with a standard warranty and go through Lenovo's own quality check.
                    </p>

                    <p>
                      This is worth checking before buying a new unit — a refurbished ThinkPad E or IdeaPad from the Lenovo outlet often costs ₹10,000–₹20,000 less than the same model new, with the same 1-year warranty.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      My Lenovo Rewards: The Points That Add Up
                    </p>

                    <p>
                      My Lenovo Rewards is Lenovo India's free loyalty programme — sign up on lenovo.com/in and earn at least 5% reward points on every purchase. Points can be redeemed on future orders and member-only prices sometimes appear in the account dashboard.
                    </p>

                    <p>
                      If you're buying more than one Lenovo product over time (a laptop now, a monitor later, accessories in between), the rewards points from earlier purchases reduce the effective cost on later ones. No annual fee, no tier requirement.
                    </p>
                  </div>
                </div>

                <hr className="my-10 border-gray-200" />

                {/* FAQs Section Header - Replaced H1/H2 with Styled Paragraph */}
                <p className="text-2xl font-black text-black mt-16 mb-8">
                  Frequently Asked Questions
                </p>

                {/* FAQ List */}
                <div className="space-y-4">

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is the best Lenovo coupon code for laptops in India right now?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      As of October 2026, CUSTOMOFF (₹7,500 off custom PCs, valid till December 31) is the highest-value code currently active. For gaming laptops, EXTRASAVINGS gives ₹1,500 off LOQ models. For tablet buyers, PAMU20 gives up to 70% off. Beyond codes, check the sitewide credit card cashback — at 10% on Legion and Yoga, it often saves more than a flat code.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does Lenovo India have a student discount code?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — Lenovo India offers student discounts through UNiDAYS and Sheer ID (up to 10% each), though the combined cap per order is 5%. ThinkPad E Series also comes with a specific ₹5,000 student saving. Access these through the Lenovo India Education Store on lenovo.com/in.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is Lenovo's exchange offer and how much will I get?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lenovo India's exchange offer (via Cashify) gives a bonus of ₹2,500–₹15,000 on top of your old device's base trade-in value, depending on the price of the new product you're buying. The bonus is paid within 30 days of pickup, not as an upfront discount.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Can I use a Lenovo promo code with no-cost EMI?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. Lenovo India's cashback offers — including those tied to codes — are excluded from no-cost EMI transactions. You get one or the other: either pay in full and claim cashback, or pay in installments at 0% interest.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is the difference between Lenovo IdeaPad and ThinkPad?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      IdeaPad is Lenovo's consumer laptop range — lighter, thinner, and focused on everyday tasks and student use (₹35,000–₹65,000). ThinkPad is Lenovo's business laptop range, built to military durability standards, with a better keyboard, longer support lifecycle, and higher starting price (₹55,000 for ThinkPad E; ₹1,10,000+ for ThinkPad T and X1). ThinkBook sits between the two — business build, consumer pricing.
                    </p>
                  </div>

                </div>

                <hr className="my-10 border-gray-200" />

                <p>
                  Lenovo India's savings stack best when you combine a campaign coupon code with the sitewide credit card cashback — most eligible products let you use both. For a gaming laptop like LOQ or Legion, 10% cashback (up to ₹7,000–₹10,000) plus a ₹1,500 code adds up faster than either alone. And if you're buying a custom PC, CUSTOMOFF's ₹7,500 off is the highest flat saving currently available with no cart minimum.
                </p>

              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                  Popular Lenovo Searches
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["Lenovo Coupons", "ThinkPad Deals", "Legion Gaming Laptops", "IdeaPad Offers", "Custom PC Discount", "Student Discount", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Lenovo checkout for instant discounts.
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
                <span>Continue to Lenovo</span>
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
