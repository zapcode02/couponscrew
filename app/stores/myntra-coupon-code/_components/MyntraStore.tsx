'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import Image from 'next/image'
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
  ArrowRight,
  Info,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, MYNTRA_COUPONS } from './myntraCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const STORE_URL = 'https://www.myntra.com/';

export default function MyntraStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const coupons: Coupon[] = MYNTRA_COUPONS;

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
    window.open(STORE_URL, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'How do I use a Myntra coupon code?',
      a: 'Browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Myntra website or app. If it is a deal, simply click "Visit Myntra" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Myntra?',
      a: 'Generally, Myntra only allows one promotional code per order. You can often combine a coupon code with automatic sitewide promotions or select bank card offers — check the terms on each code before applying.'
    },
    {
      q: 'Why is my Myntra coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the terms listed with each code on Couponscrew before applying.'
    },
    {
      q: 'Where can I find the best Myntra offers?',
      a: 'We keep this Myntra store page updated with the coupon codes and deals we have verified. [PLACEHOLDER: confirm real update cadence before publishing.]'
    },
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
            <span className="text-[#5B4FBE] font-semibold">Myntra Coupon Code</span>
          </div>

          {/* Main Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Detail Card (Left 7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center gap-3">
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0"
                  >
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp"
                      alt="Myntra Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>[PLACEHOLDER]</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Myntra</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Fashion & Lifestyle
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Discover the latest verified Myntra coupon codes, Discount codes, and exclusive offers for August 2026. Save up to 90% on fashion, footwear, beauty, and accessories, plus enjoy an extra ₹300 off for new users, 25% off first orders, bank cashback, and exciting discounts from leading brands.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> {coupons.length}+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Codes Reviewed Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
             
            </div>

            {/* Promo Banner (Right 5 Columns) — desktop only, placeholder until a real banner image exists */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] border border-[#2874F0]/20 group">
  <Link
    href="https://www.myntra.com"
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full h-full block min-h-[300px]"
  >
    <Image
      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787103397/myntra_hoi2n9.webp"
      alt="Myntra Promo Banner"
      fill
      sizes="(min-width: 1024px) 40vw, 100vw"
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      priority
    />
  </Link>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Myntra Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Myntra coupon codes & offers.</p>
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
                    <div className="flex flex-row items-stretch">
                      {/* LEFT DISCOUNT SECTION */}
                      <div
                        className="w-24 sm:w-32 lg:w-40 bg-[#FF3F6C] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
                      >
                        <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
                        <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          {coupon.badgeType || 'UP TO'}
                        </span>
                        <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
                          {coupon.badge ? coupon.badge.replace('UP TO ', '').replace('FLAT ', '') : '40%'}
                        </h2>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          OFF
                        </span>
                      </div>

                      {/* RIGHT WRAPPER */}
                      <div className="flex-1 flex flex-col lg:flex-row items-stretch">
                        {/* CENTER CONTENT */}
                        <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span className="bg-[#FF3F6C]/10 text-[#FF3F6C] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.type || 'Best Offer'}
                            </span>
                            <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                              {coupon.verified || 'Verified'}
                            </span>
                          </div>

                          <h2 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                            {coupon.title}
                          </h2>

                          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-2xl">
                            {coupon.description}
                          </p>

                          <button
                            onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                            className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
                          >
                            View Details
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>

                          {isExpanded && coupon.bullets && coupon.bullets.length > 0 && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                              {coupon.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* RIGHT ACTION SECTION */}
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">
                          {coupon.code && (
                            <div className="w-full bg-white border border-dashed border-[#FF3F6C]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
                              <span className="font-black text-sm sm:text-base tracking-[1px] text-[#0B1A30]">
                                {coupon.code}
                              </span>
                              <button
                                onClick={() => handleCopyCode(coupon)}
                                className="p-1 hover:bg-slate-50 rounded"
                              >
                                {isCopied ? (
                                  <Check size={16} className="text-green-600" />
                                ) : (
                                  <Copy size={16} className="text-slate-400" />
                                )}
                              </button>
                            </div>
                          )}

                          <button
                            onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                            className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                              isCopied
                                ? 'bg-green-600 text-white'
                                : 'bg-[#FF3F6C] hover:bg-[#e6355f] text-white'
                            }`}
                          >
                            {isCopied ? 'Copied!' : 'Get Deal'}
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
                <span>The Story Behind Myntra</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Myntra was founded in 2007, initially as a platform for personalised gift items. Over time it pivoted to become a pure-play fashion e-commerce platform and was acquired by Flipkart in 2014. Today it operates as India's leading online fashion destination, carrying 6,000+ brands and millions of products across men's, women's, and kids' fashion, beauty, and lifestyle.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
                The platform is known for hosting some of the largest fashion sale events in the market — particularly the End of Reason Sale (EORS), which twice a year drives record-breaking traffic and offers discounts of up to 90% across the catalogue. Myntra online shopping is popular not just for the breadth of brands but also for the size, fit, and returns experience — its 30-day return policy and detailed product descriptions have made it a go-to even for shoppers who are cautious about buying clothing without trying it first.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
                The Myntra app has become one of the most-downloaded fashion apps, offering an app-exclusive pricing tier, style recommendations based on purchase history, and early access to sale events before the website. If you shop regularly, downloading the app alone can unlock deals that are not surfaced to desktop users.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Myntra</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

        

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Myntra
              </h3>

              <div className="space-y-3.5 text-xs">
                {['Women\'s Clothing', 'Men\'s Clothing', 'Footwear', 'Beauty & Personal Care', 'Accessories'].map((cat) => (
                  <div key={cat} className="flex justify-between items-center font-semibold">
                    <span className="text-[#1A1A2E]">{cat}</span>
                    <span className="text-[#FF3F6C] font-bold">[PLACEHOLDER]</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Use CouponsCrew for Myntra Deals?
  </h3>
  
  <p className="text-xs font-medium text-[#4A4A6A] mb-4">
    There is no shortage of coupon sites listing Myntra codes. What makes CouponsCrew different is the verification layer behind every deal we publish:
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
        <span>Every Myntra promo code and Myntra voucher code on this page is checked by a member of our coupons team before it goes live. Codes that have expired or been deactivated mid-promotion are removed — not left on the page with a "may not work" disclaimer.</span>
      </div>
    </li>
    
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Deal Tracking</span>
        <span>Myntra frequently runs flash sales and limited-window bank offers. We monitor these in real time and update the deal cards on this page as new promotions go live — including app-exclusive deals that most coupon aggregators miss.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
        <span>Some of the best savings on Myntra come not from public promo codes but from bank-card-specific cashback and instant-discount offers. We track active HDFC, ICICI, Axis, and SBI card offers separately so you can stack a coupon on top of a bank discount where eligible.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Minimum Cart &amp; T&amp;C Transparency</span>
        <span>Every deal card on CouponsCrew shows the minimum order value, eligible categories, and any key conditions — not buried in fine print, but visible before you click through. No surprises at checkout.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Category-Level Filtering</span>
        <span>Use the category filter on this page to find deals specific to Myntra dresses, Myntra kurtis, Myntra shoes, beauty, or gift cards rather than scrolling through a generic list.</span>
      </div>
    </li>
  </ul>
</div>

          </aside>

        </div>
      </section>

      {/* SEO content  */}

      <section className="py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">
          
          {/* Left Column: Content Area */}
          <div className="prose max-w-none">
            
            {/* Main Section Header */}
            <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
              Myntra Coupon Code & Discount Deals — Verified for August 2026
            </h2>

            <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Coupon Code</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Sitewide</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">MYNTRA300</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 90% Off + Extra ₹300</td>
        <td className="p-3.5">Min. cart ₹1,999 | App only</td>
        <td className="p-3.5">New Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">First Order</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">MYNTRASAVE</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Flat 25% Off</td>
        <td className="p-3.5">Min. cart ₹300 | Max discount ₹200</td>
        <td className="p-3.5">New Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">All Users</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">STACKUP</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to ₹800 Off</td>
        <td className="p-3.5">₹400 off on ₹2,499+ | ₹800 off on ₹5,000+</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">FWD Fashion</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">FWDNEW200</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% Off + Extra ₹200</td>
        <td className="p-3.5">Min. cart ₹399 | Selected FWD casualwear</td>
        <td className="p-3.5">New Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Fashion Sale</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">FWDU15</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra 15% Off</td>
        <td className="p-3.5">Min. cart ₹300 | Max discount ₹150</td>
        <td className="p-3.5">Existing Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Beauty</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">EXTRA500</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra ₹500 Off</td>
        <td className="p-3.5">Min. cart ₹2,500 | Skincare, makeup & fragrances</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Non-Returnable</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">NORETURN1</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Flat 10% Off</td>
        <td className="p-3.5">Min. cart ₹199 | Non-returnable listings only</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Special Offer</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">EXTRA50</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra ₹50 Off</td>
        <td className="p-3.5">Min. cart ₹400 | Extra 10% via Kotak/BOBcard</td>
        <td className="p-3.5">Existing Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Sitewide</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">FWDWE10</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% Off + Extra 10%</td>
        <td className="p-3.5">Min. cart ₹300 | Valid across categories</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Footwear</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">FOOTWEAR10</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% Off + Extra 10%</td>
        <td className="p-3.5">Sports, casual, sandals & heels</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">First Order</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">MYNTRAEXCLUSIVE</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Flat 30% Off</td>
        <td className="p-3.5">Min. cart ₹300 | First purchase only</td>
        <td className="p-3.5">New Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Buy 2 Items</td>
        <td className="p-3.5"><code className="bg-gray-100 text-[#5B4FBE] font-mono px-2 py-1 rounded font-bold">NOREASON10</code></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra 10% Off</td>
        <td className="p-3.5">Min. 2 items in cart | No min cart value</td>
        <td className="p-3.5">Existing Users</td>
      </tr>
    </tbody>
  </table>
</div>

            {/* Read More / Collapsible Container */}
            <div
              className={cn(
                "text-gray-500 font-bold leading-relaxed space-y-6 relative",
                !isReadMore && "max-h-[500px] overflow-hidden"
              )}
            >
              <p>
                Myntra has grown into one of the most visited fashion destinations for shoppers looking to upgrade their wardrobe without overspending. From everyday basics to runway-inspired styles, it carries thousands of brands across clothing, footwear, beauty, and accessories — all in one place. What makes it even more appealing is the sheer volume of promotional events it runs through the year, creating regular opportunities to save big.
              </p>
              <p>
                At CouponsCrew, we track every active Myntra coupon code, Myntra discount code, and Myntra promo code so you never have to hunt across multiple tabs or settle for a code that stopped working three weeks ago. Every deal listed on this page has been verified before publishing. Our team checks redemption status, discount validity, and any minimum cart value conditions — so what you see is what you actually get at checkout.
              </p>
              <p>
                Whether you are shopping for Myntra dresses for women, running shoes, a fresh set of kurtas, or restocking your beauty shelf, there is almost always a working deal available. Bookmark this page — we update it every day.
              </p>

              {/* Sub-header: Today's Best Offers */}
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Today's Best Myntra Coupon Codes (August 2026)
              </h3>

              <p className="italic bg-[#f0eeff] text-[#5B4FBE] p-4 rounded-xl border border-[#5B4FBE]/10">
                💡 [Dev note: This section is dynamically populated by the deals grid component — the intro paragraph below is static editorial copy that sits above the card grid.]
              </p>

              <p>
                Before you browse the deal cards below, here is a quick snapshot of the best savings categories currently active on Myntra:
              </p>

              {/* Snapshot Offers Table */}
              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                <table
                  className="w-full text-left border-collapse min-w-[750px]"
                  itemScope
                  itemType="https://schema.org/Table"
                >
                  <caption className="sr-only">Myntra Best Savings Categories Snapshot</caption>
                  <thead>
                    <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                      <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Offer Type</th>
                      <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Category</th>
                      <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Discount</th>
                      <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Highlights</th>
                      <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E8F0]">
                    {[
                      { offerType: "Sitewide Sale", category: "All Categories", discount: "Up to 80% OFF", highlights: "No minimum order", userType: "All users" },
                      { offerType: "App-Exclusive Deal", category: "Fashion + Beauty", discount: "Extra 10% OFF", highlights: "Myntra app only", userType: "New + returning" },
                      { offerType: "Bank Offer", category: "Select Cards", discount: "Extra 5–15% OFF", highlights: "HDFC, ICICI, Axis", userType: "Card-specific" },
                      { offerType: "Myntra Voucher Code", category: "Clothing & Footwear", discount: "Up to 70% OFF", highlights: "Min cart ₹799", userType: "All users" },
                      { offerType: "First Purchase Offer", category: "All Categories", discount: "Flat ₹200 OFF", highlights: "First order only", userType: "New users" },
                      { offerType: "Gift Card Offer", category: "Myntra Gift Cards", discount: "Up to 5% bonus", highlights: "Gift card top-up", userType: "All users" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                        <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
                          {row.offerType}
                        </td>
                        <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
                          {row.category}
                        </td>
                        <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
                          {row.discount}
                        </td>
                        <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
                          {row.highlights}
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

              <p>
                Use the filters above the deal cards to sort by category — fashion, beauty, footwear, or gift cards — to get to the right offer faster.
              </p>

              

              {/* Types of Deals Section */}
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Types of Myntra Deals Available on CouponsCrew
                </h3>
                <p>Understanding the different deal types available helps you plan your purchase timing:</p>

                <p>
                  <strong className="text-[#2C2C40]">Myntra Coupon Codes (Promo Codes): </strong>
                  These are alphanumeric codes entered at checkout to unlock a flat discount, percentage off, or free shipping. They are the most straightforward deal type and work across most product categories. Common formats: MYNTRA20, FASHION500, STYLE15.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">App-Exclusive Deals: </strong>
                  Myntra regularly offers an additional 10–15% discount for purchases made through the Myntra app. These are not coupon codes — the discount is applied automatically when you shop via the app while logged in. Download the Myntra app and enable notifications to catch these before they expire.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Bank Card Offers (Instant Discount / Cashback): </strong>
                  HDFC, ICICI, Axis, SBI, and Kotak cards are frequently featured in Myntra's bank-offer promotions. These offer an instant 5–15% additional discount at the payment step — on top of the sale price and any coupon already applied.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Sale Events (Sitewide Discounts): </strong>
                  During mega-sale events like EORS or the Big Fashion Festival, discounts are applied directly to product prices — no coupon code needed. These are the best times to shop for high-value items like premium sneakers, designer ethnic wear, or luxury beauty products.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Myntra Gift Cards: </strong>
                  Myntra gift cards are available in denominations from ₹500 to ₹10,000 and can be used to pay for any order. During promotional windows, top-up bonuses (e.g., buy ₹2,000 gift card, get ₹100 extra credit) are sometimes available. Keep an eye on our Myntra gift cards free bonus deals section — we list these top-up offers whenever they go live.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Referral & Loyalty Credits: </strong>
                  Myntra's Insider loyalty programme awards points on every purchase which can be redeemed for discounts on future orders. Referral bonuses for inviting new users are periodically available in the app.
                </p>
              </div>

              {/* Shopping Categories Section */}
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Most Popular Myntra Shopping Categories
                </h3>
                <p>
                  Myntra's catalogue is one of the widest in the fashion e-commerce space. Here is a breakdown of what each major category offers — and where the best coupon savings typically apply:
                </p>
                 <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Men's Fashion
                </h3>
                <div className="my-8">
          <a 
            href="https://www.myntra.com/shop/men" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787016635/mens-fashion_opgug3.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Brand</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">U.S. POLO ASSN.</td>
        <td className="p-3.5">Fashion & Accessories</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Levi's</td>
        <td className="p-3.5">Denim & Casuals</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 40% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Tommy Hilfiger</td>
        <td className="p-3.5">Premium Apparel</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">United Colors of Benetton</td>
        <td className="p-3.5">Casual Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">40-70% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Nike</td>
        <td className="p-3.5">Sportswear & Footwear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">PUMA</td>
        <td className="p-3.5">Sportswear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-70% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Skechers</td>
        <td className="p-3.5">Footwear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 40% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Crocs</td>
        <td className="p-3.5">Footwear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>
                  
                  The men's section covers everything from casual Myntra t-shirts for men to formal shirts, trousers, ethnic kurtas, activewear, and outerwear. Popular brands include Roadster, H&M, HRX, Peter England, and Van Heusen. The casual-wear segment — especially graphic tees, joggers, and hoodies — sees the steepest discounts during sale events, often going up to 70–80% off on private labels like Roadster and HRX.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                 Women's Fashion
                </h3>
                
                <div className="my-8">
          <a 
            href="https://www.myntra.com/shop/women" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787016852/womens-fashion_ey5y9t.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Brand</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">BIBA</td>
        <td className="p-3.5">Ethnic Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">W</td>
        <td className="p-3.5">Ethnic Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Marks & Spencer</td>
        <td className="p-3.5">Apparel</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Vero Moda</td>
        <td className="p-3.5">Western Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">ONLY</td>
        <td className="p-3.5">Western Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Forever 21</td>
        <td className="p-3.5">Fashion & Bags</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Levi's</td>
        <td className="p-3.5">Denim & Casuals</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 30% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">GAP</td>
        <td className="p-3.5">Casual Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-60% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Nike</td>
        <td className="p-3.5">Sportswear & Activewear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up To 50% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">PUMA</td>
        <td className="p-3.5">Sportswear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30-70% Off</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>
                  
                  The women's section covers everything from casual Myntra t-shirts for women to formal shirts, trousers, ethnic kurtas, activewear, and outerwear. Popular brands include Roadster, H&M, HRX, Peter England, and Van Heusen. The casual-wear segment — especially graphic tees, joggers, and hoodies — sees the steepest discounts during sale events, often going up to 70–80% off on private labels like Roadster and HRX.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Kurtis & Ethnic Wear (Women): </strong>
                  Myntra kurtis is one of the most searched and purchased categories on the platform. The range includes printed cotton kurtis for daily wear, silk and embroidered kurtis for festive occasions, and designer kurta sets for special events. Brands like Libas, Biba, W, and Anouk dominate this segment. Discounts of 40–60% on kurtis are common even outside sale windows — and during EORS, prices drop significantly further.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Sarees: </strong>
                  Myntra saree collections cover silk, georgette, chiffon, cotton, and designer varieties from brands including Mitera, Vishudh, and Saree Mall. The category is particularly popular during the festive season (September–November), when curated collections go live ahead of Navratri, Diwali, and wedding season. Use a Myntra voucher code during these windows to maximise savings on high-value saree purchases.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">Footwear: </strong>
                  Myntra shoes span sports and running footwear, formal shoes, casual sneakers, sandals, and traditional footwear. Key brands include Nike, Adidas, Puma, Skechers, Campus, and Crocs. Footwear is one of the most discount-friendly categories — end-of-season clearances can bring branded sneakers down by 50–60% off the MRP.
                </p>

                 <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                 Kids' Fashion
                </h3>
                <div className="my-8">
          <a 
            href="https://www.myntra.com/shop/kids" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787017225/kid-fashion_oq7snr.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer / Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">T-Shirts</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹499</td>
        <td className="p-3.5">Budget Tees & Casuals</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Dresses</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹799</td>
        <td className="p-3.5">Trendy Styles & Prints</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Ethnic Wear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹999</td>
        <td className="p-3.5">Kurtas & Traditional Wear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Shorts</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹599</td>
        <td className="p-3.5">Summer Essentials</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Value Packs</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹799</td>
        <td className="p-3.5">Multi-pack Savings</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Footwear</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹699</td>
        <td className="p-3.5">Everyday Footwear</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>
                  
                  Kids' clothing and footwear on Myntra covers newborn to 14-year-old size ranges across brands like HRX Kids, United Colors of Benetton Kids, and Disney. The category includes everyday school-wear, ethnic festive outfits, and seasonal collections.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                 Beauty & Personal Care
                </h3>
                <div className="my-8">
          <a 
            href="https://www.myntra.com/personal-care" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787016786/beauty-personal_pna7wy.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Brand</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Product</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Price / Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Biodance</td>
        <td className="p-3.5">Bio Collagen Real Deep Mask</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹400</td>
        <td className="p-3.5">4.7 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Simple</td>
        <td className="p-3.5">Refreshing Facial Wash (150ml)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹279 <span className="line-through text-gray-400 text-xs">₹450</span> <span className="text-xs text-green-600 font-normal">(38% OFF)</span>
        </td>
        <td className="p-3.5">4.6 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">WishCare</td>
        <td className="p-3.5">Hair Growth Serum (30ml)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹699 <span className="line-through text-gray-400 text-xs">₹999</span> <span className="text-xs text-green-600 font-normal">(30% OFF)</span>
        </td>
        <td className="p-3.5">4.5 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Pilgrim</td>
        <td className="p-3.5">10% Vitamin C Face Serum</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹233 <span className="line-through text-gray-400 text-xs">₹275</span> <span className="text-xs text-green-600 font-normal">(15% OFF)</span>
        </td>
        <td className="p-3.5">4.4 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Gillette Venus</td>
        <td className="p-3.5">Venus Skin Love Razor</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹148 <span className="line-through text-gray-400 text-xs">₹175</span> <span className="text-xs text-green-600 font-normal">(15% OFF)</span>
        </td>
        <td className="p-3.5">4.5 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">DOT & KEY</td>
        <td className="p-3.5">Vitamin C+E Sunscreen</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹396 <span className="line-through text-gray-400 text-xs">₹445</span> <span className="text-xs text-green-600 font-normal">(11% OFF)</span>
        </td>
        <td className="p-3.5">4.6 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Whisper</td>
        <td className="p-3.5">Ultra Wings XL Sanitary Pads</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹217 <span className="line-through text-gray-400 text-xs">₹320</span> <span className="text-xs text-green-600 font-normal">(32% OFF)</span>
        </td>
        <td className="p-3.5">4.6 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">MINARA</td>
        <td className="p-3.5">Pigment Eyeshadow (60g)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹207 <span className="line-through text-gray-400 text-xs">₹1,299</span> <span className="text-xs text-green-600 font-normal">(84% OFF)</span>
        </td>
        <td className="p-3.5">4.5 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">FACES CANADA</td>
        <td className="p-3.5">SPF 20 Compact - Natural 02</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">
          ₹159 <span className="line-through text-gray-400 text-xs">₹199</span> <span className="text-xs text-green-600 font-normal">(20% OFF)</span>
        </td>
        <td className="p-3.5">4.5 ★ Rating</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>
                  
                  Myntra beauty has expanded significantly over the last two years and now includes skincare, haircare, makeup, fragrances, and grooming products. Brands available include Lakme, Maybelline, Forest Essentials, Minimalist, and MAC — often at prices lower than standalone beauty retailers. App-exclusive beauty deals and bundle offers are common; CouponsCrew tracks these separately in the beauty deal section.
                </p>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                 Gift Cards
                </h3>
                <div className="my-8">
          <a 
            href="https://www.myntra.com/giftcard" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787016635/myntra-gift-card_ppyusj.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>


                <p>
                  
                  Myntra gift cards are a versatile gifting option for fashion-forward recipients. They are digital, delivered instantly, and redeemable on the full Myntra catalogue with no category exclusions. Watch for bonus-credit top-up promotions on gift cards — these are among the least-publicised but most valuable Myntra promotions available.
                </p>
              </div>

              {/* Sale Calendar Section & Table */}
              <div className="space-y-4 text-slate-700 my-10">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Myntra Sale Calendar 2026 — EORS, Grand Summer Sale & More
                </h3>
                <p>
                  Planning your Myntra online shopping around the platform's major sale events is one of the most effective ways to maximise savings. Myntra hosts multiple mega sales throughout the year, with discounts ranging from 50% to 90% across clothing, footwear, accessories, and beauty. Here is the full 2026 sale calendar so you can plan your fashion haul in advance:
                </p>

                <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
                        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Sale Event</th>
                        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Tentative Month</th>
                        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Expected Discount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      {[
                        { event: "New Year Sale", month: "January", discount: "Up to 70% OFF" },
                        { event: "Republic Day Sale", month: "January", discount: "Up to 80% OFF" },
                        { event: "Birthday Blast Sale", month: "February – March", discount: "Up to 90% OFF" },
                        { event: "Holi Sale", month: "March (festival dates)", discount: "Up to 70% OFF" },
                        { event: "Summer Sale", month: "April – May", discount: "Up to 70% OFF" },
                        { event: "EORS — Summer Edition", month: "May – June", discount: "Up to 90% OFF" },
                        { event: "Right To Fashion Sale (Independence Day)", month: "August", discount: "Up to 80% OFF" },
                        { event: "Big Fashion Festival", month: "September – October", discount: "Up to 90% OFF" },
                        { event: "Diwali Sale", month: "October (festival dates)", discount: "Up to 80% OFF" },
                        { event: "Black Friday Sale", month: "November", discount: "Up to 80% OFF" },
                        { event: "EORS — Winter Edition", month: "December", discount: "Up to 90% OFF" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
                          <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm">{row.event}</td>
                          <td className="px-5 py-4 font-semibold text-[#4A5568] text-xs sm:text-sm">{row.month}</td>
                          <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm">{row.discount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p>
                  The End of Reason Sale (EORS) is Myntra's flagship annual event and consistently the biggest fashion sale in the Indian e-commerce calendar. Held twice yearly — once around May–June and again in December — EORS brings discounts of up to 90% across 6,000+ brands and millions of products. Early access is available for Myntra Insider members and app users before the sale opens to everyone.
                </p>
                <p>
                  The Big Fashion Festival (September–October) coincides with the festive season and is the best time to shop for ethnic wear, premium footwear, and beauty. If you are planning a Diwali wardrobe haul, this is typically the window to do it.
                </p>
                <p className="italic bg-[#f0eeff] text-[#5B4FBE] p-4 rounded-xl border border-[#5B4FBE]/10">
                  💡 CouponsCrew publishes a dedicated sale-specific coupon page ahead of each major event — bookmark this store page and check back 2–3 days before each sale date for early-access codes and bank offer previews.
                </p>
              </div>

              {/* How to Use Section Box */}
              <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-2">How to Use a Myntra Coupon Code — Step by Step</h3>
                <p className="text-gray-700 font-bold -mt-4">Redeeming a Myntra discount code takes under a minute once you know where the code box is. Here is the exact process:</p>
                
                <div className="space-y-6">
                  {[
                    "Find a verified code on this page. Click \"Show Code\" on the deal card — the code is copied to your clipboard automatically and the CouponsCrew tracking link opens Myntra in a new tab.",
                    "Shop and add items to your bag. Browse the categories you need — fashion, beauty, footwear, or accessories. Add items until your cart meets the minimum order value shown on the deal card (if any).",
                    "Proceed to checkout. Click the bag icon at the top right and then tap \"Proceed to Buy.\"",
                    "Locate the coupon / promo code field. On the payment summary page, look for the \"Have a Coupon Code?\" section — it appears above the payment method options.",
                    "Paste your code and apply. Paste the Myntra coupon code from your clipboard into the field and click \"Apply.\" The discount will reflect in the order summary immediately.",
                    "Select your payment method. If you have an eligible bank card, apply it at this step to stack the bank discount on top of your coupon saving (where the promotion allows stacking).",
                    "Place your order. Confirm delivery address and complete payment. Your discount is locked in."
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 font-bold bg-[#FAF9FF] p-4 rounded-xl border border-[#E8E8F0]">
                  <strong>Tip:</strong> If a code shows "Invalid" at checkout, check that your cart value meets the minimum order requirement and that your selected items are in an eligible category. Some codes exclude sale items or specific brand products.
                </p>
              </div>

              {/* Saving Tips Section */}
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Myntra Saving Tips — Get More Off Every Order
                </h3>
                <p>Beyond coupon codes, there are several strategies that consistently unlock better savings on Myntra:</p>

                <p>
                  <strong className="text-[#2C2C40]">1. Shop via the Myntra App First: </strong>
                  The Myntra app regularly offers an additional 10–15% discount that is not available on the desktop or mobile web version. Check the app before finalising your purchase — the price difference on a ₹2,000 order can be significant.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">2. Combine a Coupon with a Bank Offer: </strong>
                  Myntra allows stacking a promo code with an eligible bank card discount in many (not all) promotions. A 20% sitewide coupon stacked on top of a 10% HDFC discount means 30% off the sale price — and that is before the item's own markdown during a sale event.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">3. Join Myntra Insider: </strong>
                  Myntra's loyalty programme offers early sale access, member-only deals, and points redeemable for discounts. The free tier gives you early access to EORS; paid tiers unlock exclusive brand events. The early-access window alone is worth joining for — top items sell out within the first few hours of EORS.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">4. Use Wishlist Alerts: </strong>
                  Add items to your Myntra wishlist and enable price-drop alerts. During sale events, prices on wishlisted items drop automatically — you get notified the moment the discount hits, which is useful for high-demand products that sell out fast.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">5. Shop End-of-Season Clearances: </strong>
                  Between major sale events, Myntra runs quiet category-level clearances — especially for last-season kurtis, winter jackets, and swimwear. These are not widely advertised but appear regularly in the "Sale" section of each category. Combine clearance pricing with a Myntra discount code for the best deal.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">6. Check Gift Card Bonus Promotions: </strong>
                  Myntra occasionally runs gift card top-up promotions — e.g., buy ₹2,000 in gift cards and receive ₹100–200 in bonus credits. If you shop regularly, buying gift cards during a bonus promotion effectively gives you free credits on future orders. CouponsCrew lists all active gift card bonus offers on this page.
                </p>

                <p>
                  <strong className="text-[#2C2C40]">7. Enable Size & Category Filters Before Saving a Code: </strong>
                  Some Myntra coupon codes are category-restricted (e.g., valid only on footwear or only on beauty). Before saving a code from CouponsCrew, check the deal card description for category exclusions — this saves the frustration of building a cart only to find the code does not apply.
                </p>
              </div>

              {/* Similar Stores & Closing Section */}
              <div className="space-y-4 text-slate-700 my-10">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Similar Stores You Might Like
                </h3>
                <p>If you are comparing options or want to shop across platforms:</p>
                <ul className="list-disc pl-5 space-y-2 font-bold">
                  <li><strong>Flipkart —</strong> Wide fashion catalogue with regular Big Billion Days discounts</li>
                  <li><strong>Amazon Fashion —</strong> Competitive on footwear and basics; frequent bank offer stacking</li>
                  <li><strong>Ajio —</strong> Strong in ethnic wear and western casuals; competitor to Myntra on EORS-equivalent sale events</li>
                  <li><strong>Nykaa Fashion —</strong> Focused on women's fashion; strong beauty + fashion bundle deals</li>
                  <li><strong>Tata CLiQ —</strong> Premium and luxury fashion; less aggressive discounting but consistent bank offers</li>
                </ul>

                <h3 className="text-xl font-black text-[#5B4FBE] mt-8 mb-4">
                  Closing Section — Why CouponsCrew for Myntra Deals
                </h3>
                <p>
                  Finding a working Myntra coupon code should take seconds, not a frustrating session of copy-pasting dead codes. CouponsCrew exists to close that gap — every code you see on this page has been checked, every deal card is honest about its conditions, and the page is updated every day so you are always working with current information.
                </p>
                <p>
                  Myntra runs more promotional events than almost any other fashion platform — EORS twice a year, bank offers running monthly, app-exclusive deals every week, and flash sales on specific categories in between. There is almost always a saving opportunity available; the only challenge is knowing which codes are actually live. That is what this page is for.
                </p>
                <p>
                  Bookmark the CouponsCrew Myntra store page and check back before every purchase. Whether you are shopping Myntra dresses, picking up a pair of Myntra shoes, stocking up on Myntra kurtis, or exploring Myntra beauty — a verified deal is waiting.
                </p>
              </div>

              {/* Gradient overlay when collapsed */}
              {!isReadMore && (
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
              )}
            </div>

            {/* Read More / Read Less Toggle Button */}
            <button
              onClick={() => setIsReadMore(!isReadMore)}
              className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
            >
              {isReadMore ? "Read Less" : "Read More"}{" "}
              <ChevronDown
                className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")}
              />
            </button>

            {/* FAQs Accordion */}
            <div className="mt-20 space-y-4">
              <h3 className="text-2xl font-black text-black mb-8">
                Frequently Asked Questions — Myntra Coupon Codes
              </h3>
              {[
                {
                  q: "Q1. How do I find a working Myntra coupon code today?",
                  a: "CouponsCrew verifies every Myntra coupon code on this page before publishing. Click \"Show Code\" on any active deal card — the code is copied to your clipboard and you are redirected to Myntra. Codes are checked daily and expired ones are removed promptly."
                },
                {
                  q: "Q2. Can I use a Myntra discount code on sale items?",
                  a: "It depends on the specific promotion. Some Myntra discount codes apply to already-discounted sale items, while others exclude products already marked down by more than a certain percentage. The deal card on CouponsCrew notes this condition where applicable."
                },
                {
                  q: "Q3. Why is my Myntra promo code showing as invalid?",
                  a: "The most common reasons are: (a) your cart value is below the minimum order threshold, (b) the items in your cart are in an excluded category, (c) the code has expired since you last visited this page. Refresh the CouponsCrew Myntra page and try the next active code."
                },
                {
                  q: "Q4. Is there a Myntra voucher code for first-time users?",
                  a: "Yes — Myntra regularly runs first-order discount offers for new accounts. These are typically flat discounts (₹150–300 off) or percentage-based offers (10–20% off your first purchase). CouponsCrew lists all currently active new-user codes in the \"New Users\" filter on this page."
                },
                {
                  q: "Q5. Can I stack a Myntra coupon with a bank card offer?",
                  a: "In many cases, yes. Myntra's bank card offers (HDFC, ICICI, Axis, SBI, Kotak) are applied at the payment step and are frequently stackable on top of a promo code discount. Check the terms of the specific bank offer — some have their own minimum cart requirements separate from the coupon."
                },
                {
                  q: "Q6. When is the next Myntra EORS (End of Reason Sale)?",
                  a: "Based on Myntra's historical sale calendar, the next EORS Winter Edition is expected in December 2026. CouponsCrew will publish a dedicated EORS page with early-access codes, bank offer previews, and category-wise deal breakdowns ahead of the event — subscribe to our deal alerts to get notified."
                },
                {
                  q: "Q7. Does Myntra have deals on beauty products?",
                  a: "Yes — Myntra beauty has grown into a significant category with regular app-exclusive discounts, bundle deals, and brand-specific sales on skincare, makeup, haircare, and fragrances. Deals on beauty products are tracked separately in the Beauty section of this page."
                },
                {
                  q: "Q8. Are Myntra gift cards eligible for coupon discounts?",
                  a: "Gift card purchases are generally excluded from standard promo code discounts. However, Myntra periodically runs standalone gift card promotions — such as bonus credits on top-up — which CouponsCrew tracks and lists under the Gift Cards section of this page."
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
                  >
                    <span className="text-black font-black text-base">{faq.q}</span>
                    <div
                      className={cn(
                        "bg-[#f0f0f0] p-2 rounded-xl transition-all",
                        openFaq === i && "bg-[#5B4FBE] rotate-180"
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-gray-500",
                          openFaq === i && "text-white"
                        )}
                      />
                    </div>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 px-8 bg-white",
                      openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0"
                    )}
                  >
                    <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-10">
            <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
              <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                Popular Myntra Searches
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Myntra Coupons",
                  "EORS 2026 Sale",
                  "Myntra Dress Deals",
                  "Myntra Shoes Offers",
                  "Kurtis Discount Code",
                  "Myntra Bank Offers",
                  "Myntra Gift Cards",
                  "CouponsCrew Home"
                ].map((tag) => (
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

            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Myntra checkout for instant discounts.
              </p>
            </div>

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
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF3F6C] hover:bg-[#e6355f] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Myntra</span>
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
