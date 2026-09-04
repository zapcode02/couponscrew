'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
import { Coupon, FLIPKART_COUPONS } from './flipkartCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const STORE_URL = 'https://www.flipkart.com/';

export default function FlipkartStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const coupons: Coupon[] = FLIPKART_COUPONS;

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
      q: 'How do I use a Flipkart coupon code?',
      a: 'Browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Flipkart website or app. If it is a deal, simply click "Visit Flipkart" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Flipkart?',
      a: 'Generally, Flipkart only allows one promotional code per order. You can often combine a coupon code with automatic sitewide promotions or select bank card offers — check the terms on each code before applying.'
    },
    {
      q: 'Why is my Flipkart coupon code not working?',
      a: 'A coupon might not work due to category exclusions, minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only). Check the terms listed with each code on Couponscrew before applying.'
    },
    {
      q: 'Where can I find the best Flipkart offers?',
      a: 'We keep this Flipkart store page updated with the coupon codes and deals we have verified. [PLACEHOLDER: confirm real update cadence before publishing.]'
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
            <span className="text-[#5B4FBE] font-semibold">Flipkart Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp"
                      alt="Flipkart Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                 
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Flipkart</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Electronics, Fashion & More
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the latest verified Flipkart coupon codes, voucher codes, and exclusive offers for August 2026. Save up to 95% on electronics, fashion, home, and more, plus enjoy 10% off gift cards, Freedom Sale discounts, bank offers, cashback deals, and limited-time promotions across thousands of products.
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
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap gap-4">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Flipkart</span>
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

            {/* Promo Banner (Right 5 Columns) — desktop only, placeholder until a real banner image exists */}
            <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] border border-[#5B4FBE]/20 group">
  <Link
    href="https://www.flipkart.com"
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full h-full block min-h-[300px]"
  >
    <Image
      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787017235/flipkart-home_on7c5h.webp"
      alt="Flipkart Promo Banner"
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Flipkart Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Flipkart coupon codes & offers.</p>
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
                        className="w-24 sm:w-32 lg:w-40 bg-[#5B4FBE] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
                      >
                        <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
                        <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>

                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          {coupon.badgeType || 'UP TO'}
                        </span>
                        <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
                          {coupon.badge ? coupon.badge.replace('UP TO ', '').replace('FLAT ', '') : '50%'}
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
                            <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                            <div className="w-full bg-white border border-dashed border-[#FF5722]/40 rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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
                                : 'bg-[#FF5722] hover:bg-[#E64A19] text-white'
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
                <span>The Story Behind Flipkart</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Flipkart was founded in 2007 by Sachin Bansal and Binny Bansal as an online bookstore. Within a few years it pivoted to become a full-spectrum e-commerce marketplace, and today it is one of the largest online shopping platforms in India — carrying products across fashion, mobiles, electronics, appliances, furniture, grocery, toys, auto accessories, sports goods, books, and two-wheelers.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Flipkart shopping is popular for several reasons beyond just price. The platform's logistics network has made same-day and next-day delivery standard in major cities, its replacement and return policies are among the most straightforward in the market, and its brand partnerships — from Apple and Samsung to Nike and Levi's — give shoppers genuine access to premium products at discounted prices.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
                The Flipkart Big Billion Days sale, held annually in September–October, is widely regarded as the single biggest shopping event in Indian e-commerce — rival to Amazon's Great Indian Festival — and historically drives the deepest discounts of the year across every category on the platform.
              </p>
              <p className="text-[#1A1A2E] text-sm mb-3">
               In 2018, Walmart acquired a majority stake in Flipkart, which brought enhanced supply-chain capabilities and expanded the grocery and FMCG verticals significantly. The Flipkart grocery category today covers staples, fresh produce, personal care, and household essentials with competitive pricing and fast delivery windows.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Flipkart</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            

            {/* Sidebar Card 3: Top Categories */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Top Categories at Flipkart
              </h3>

              <div className="space-y-3.5 text-xs">
                {['Mobiles', 'Electronics', 'Fashion', 'Large Appliances', 'Home & Furniture'].map((cat) => (
                  <div key={cat} className="flex justify-between items-center font-semibold">
                    <span className="text-[#1A1A2E]">{cat}</span>
                    <span className="text-[#FF5722] font-bold">[PLACEHOLDER]</span>
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

            {/* Sidebar Card 4: Why Shop via Couponscrew */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Why Use CouponsCrew for Flipkart Deals?
  </h3>
  
  <p className="text-xs font-medium text-[#4A4A6A] mb-4">
    Hundreds of sites list Flipkart coupon codes. What sets CouponsCrew apart is the verification and transparency layer behind every deal we publish:
  </p>

  <ul className="space-y-4 text-xs font-semibold text-[#4A4A6A]">
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
        <span>Every Flipkart promo code and Flipkart voucher code on this page is checked by a member of our coupons team before it goes live. Dead codes are removed — not flagged "may not work" and left to waste your time.</span>
      </div>
    </li>
    
    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
        <span>Flipkart runs some of the most lucrative bank-card promotions in the market. The Flipkart Axis Bank credit card — co-branded with Axis Bank — offers the deepest ongoing discounts for eligible cardholders, including unlimited cashback on Flipkart purchases. We track this alongside HDFC, SBI, and other card-specific offers so you always know what is stackable.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Sale Event Previews</span>
        <span>Before each major Flipkart sale — Big Billion Days, Flipkart Republic Day Sale, Flipkart Diwali Sale, or the Flipkart Black Friday Sale — CouponsCrew publishes early deal previews and bank offer breakdowns so you can plan your cart in advance.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">Minimum Cart &amp; T&amp;C Transparency</span>
        <span>Every deal card on CouponsCrew shows the minimum order value, eligible categories, and key exclusions — visible before you click through. No small-print surprises at checkout.</span>
      </div>
    </li>

    <li className="flex items-start gap-2.5">
      <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-[#2C2C40] block mb-0.5">App Deal Coverage</span>
        <span>Flipkart's app frequently offers pricing 5–10% lower than the desktop site on the same products. We track app-exclusive deals and flag them clearly so you know when downloading the app to shop will save you more.</span>
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
          Flipkart Coupon Code & Discount Deals — Verified for August 2026
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
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 85% Off</td>
        <td className="p-3.5">Electronics, Fashion, Mobiles & Furniture</td>
        <td className="p-3.5">Existing Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Sitewide</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 85% Off</td>
        <td className="p-3.5">Freedom Sale live | Pre-applied discounts</td>
        <td className="p-3.5">Existing Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Sitewide</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 90% Off</td>
        <td className="p-3.5">Mega Sitewide Sale | Earn SuperCoins</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Deals of the Day</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 95% Off</td>
        <td className="p-3.5">Refreshes daily every 24 hours</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Fashion</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% - 90% Off</td>
        <td className="p-3.5">Men's, Women's & Kids' clothing & footwear</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Gifting</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Prices</td>
        <td className="p-3.5">Raksha Bandhan gifts starting from ₹159</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's Fashion</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 84% Off</td>
        <td className="p-3.5">Kurtas, Sarees, Dresses & Western wear</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Grocery</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 40% Off</td>
        <td className="p-3.5">Food Fest | Snacks starting from ₹210</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Bank Offer</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹3,000 Benefits</td>
        <td className="p-3.5">Flipkart Axis Card | Unlimited 5% cashback</td>
        <td className="p-3.5">New Card Applicants</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Footwear</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% Off</td>
        <td className="p-3.5">Nike, Puma, Adidas & Campus shoes</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Watches & Luggage</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% Off</td>
        <td className="p-3.5">Titan, Fossil & Samsonite products</td>
        <td className="p-3.5">All Users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Mobiles</td>
        <td className="p-3.5"><span className="text-gray-400 font-medium">No Code Required</span></td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 50% Off</td>
        <td className="p-3.5">Apple, Samsung, Realme | No-Cost EMI</td>
        <td className="p-3.5">All Users</td>
      </tr>
    </tbody>
  </table>
</div>



        <div className={cn('text-gray-500 font-bold leading-relaxed space-y-6 relative', !isReadMore && 'max-h-[500px] overflow-hidden')}>

          <p>
            Flipkart is one of the most recognised names in online shopping, serving millions of customers across electronics, fashion, groceries, appliances, furniture, and more. From flagship smartphone launches to deep-discount fashion clearances, the platform runs promotions year-round — making it one of the most rewarding places to shop if you know where to look for deals.
          </p>

          <p>
            At CouponsCrew, we track every active Flipkart coupon code, Flipkart discount code, and Flipkart promo code so you never waste time on codes that stopped working days ago. Every deal on this page is verified by our coupons team before it goes live — expiry dates, minimum cart values, eligible categories, and bank-offer conditions are all checked and clearly displayed on each deal card.
          </p>

          <p>
            Whether you are hunting for a new smartphone, refreshing your wardrobe with Flipkart women dress picks, stocking up on groceries, or planning a big purchase around the next Flipkart upcoming sale, this page has the working deals you need. We update it every day — bookmark it and check back before every purchase.
          </p>

          {/* Today's Best Flipkart Coupon Codes Table Section */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Today's Best Flipkart Coupon Codes (August 2026)
            </h3>
            <p className="italic text-sm text-gray-500 mb-4">
              💡 [Dev note: This section is dynamically populated by the deals grid component — the intro paragraph and table below are static editorial copy that sits above the card grid.]
            </p>
            <p>
              Here is a quick overview of the best active savings categories on Flipkart right now:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black">
                    <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  <tr>
                    <td className="p-3.5 font-bold text-black">Sitewide Sale</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                    <td className="p-3.5">No minimum order</td>
                    <td className="p-3.5">All users</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">App-Exclusive Deal</td>
                    <td className="p-3.5">Electronics + Fashion</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Extra 10% OFF</td>
                    <td className="p-3.5">Flipkart app only</td>
                    <td className="p-3.5">New + returning</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Axis Bank Credit Card Offer</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Extra 5–10% OFF</td>
                    <td className="p-3.5">Flipkart Axis Bank credit card</td>
                    <td className="p-3.5">Card-specific</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Flipkart Voucher Code</td>
                    <td className="p-3.5">Fashion & Footwear</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% OFF</td>
                    <td className="p-3.5">Min cart ₹999</td>
                    <td className="p-3.5">All users</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">First Purchase Offer</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Flat ₹150–300 OFF</td>
                    <td className="p-3.5">First order only</td>
                    <td className="p-3.5">New users</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Gift Card Offer</td>
                    <td className="p-3.5">Flipkart Gift Cards</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 5% bonus</td>
                    <td className="p-3.5">Gift card purchase</td>
                    <td className="p-3.5">All users</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Flipkart Plus / Black Offer</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Early access + extra %</td>
                    <td className="p-3.5">Plus / Black members</td>
                    <td className="p-3.5">Members only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Use the category filters above the deal cards to sort by electronics, fashion, grocery, mobiles, or gift cards and reach the right deal faster.
            </p>
          </div>


          {/* How to Use a Flipkart Coupon Code — Step by Step */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              How to Use a Flipkart Coupon Code — Step by Step
            </h3>
            <p>Applying a Flipkart discount code takes under a minute. Here is the exact process:</p>
            <ol className="list-decimal pl-5 space-y-3 font-medium">
              <li><strong>Find a verified code on this page.</strong> Click "Show Code" on any active deal card — the code copies to your clipboard and CouponsCrew's tracking link opens Flipkart in a new tab.</li>
              <li><strong>Add items to your cart.</strong> Browse the category you need — mobiles, fashion, appliances, grocery, or furniture. Add items until your cart meets the minimum order value noted on the deal card, if applicable.</li>
              <li><strong>Proceed to checkout.</strong> Click the cart icon at the top right and tap "Place Order."</li>
              <li><strong>Locate the coupon / promo code field.</strong> On the order summary page, look for the "Add Coupon Code" or "Have a Promo Code?" section — it appears in the pricing breakdown panel on the right.</li>
              <li><strong>Paste your code and apply.</strong> Paste the Flipkart coupon code from your clipboard and click "Apply." The discount reflects in the price breakdown immediately.</li>
              <li><strong>Select your payment method.</strong> If you have an eligible bank card — particularly the Axis Flipkart credit card or a Flipkart-partnered HDFC/SBI card — select it at this step to stack the instant bank discount on top of your coupon saving where the promotion allows.</li>
              <li><strong>Complete your order.</strong> Confirm your delivery address and payment. Your discount is secured.</li>
            </ol>
            <p className="bg-white p-4 rounded-xl border border-[#f0f0f0] text-sm italic">
              <strong>Tip:</strong> If a code shows as invalid, check that your cart value meets the minimum order requirement and that your selected items fall in an eligible category. Some codes are valid only on electronics or fashion — not both. Refresh this CouponsCrew page for the next working code.
            </p>
          </div>

          {/* Types of Flipkart Deals Available on CouponsCrew */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Types of Flipkart Deals Available on CouponsCrew
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-black text-black text-base">Flipkart Coupon Codes (Promo Codes)</h4>
                <p>Alphanumeric codes entered at checkout to unlock a percentage discount, flat amount off, or free delivery. These work across most categories and are the most straightforward way to save. Common formats: FKFASHION20, BIGBILLION10, SAVE500.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">App-Exclusive Deals</h4>
                <p>Flipkart shopping via the mobile app regularly unlocks an additional 5–15% discount not available on the website. The discount applies automatically when you are logged in on the app — no extra code needed. For high-value purchases like smartphones or appliances, the app-exclusive saving alone is worth a few hundred rupees.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">Flipkart Axis Bank Credit Card Offer</h4>
                <p>The co-branded Flipkart Axis Bank credit card is designed specifically for Flipkart shoppers and offers unlimited 5% cashback on all Flipkart purchases, along with 4% on partner brands and 1.5% elsewhere. This is separate from the time-limited bank offers Flipkart runs during sale events and applies on every transaction throughout the year. The axis bank Flipkart credit card also waives the joining fee if you meet a minimum spend within the first 30 days.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">Flash Sales & Lightning Deals</h4>
                <p>Flipkart regularly runs time-bound lightning deals during Flipkart shopping sale events — high-demand products (often smartphones and electronics) offered at steep discounts for a limited window, typically 5–20 minutes. These require you to be on the product page at the right time; Flipkart sends prior notifications through the app.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">Flipkart Gift Cards</h4>
                <p>Flipkart gift cards are available in a wide denomination range and can be used on any purchase across the platform — including electronics, fashion, grocery, and furniture. During promotional periods, bonus-credit deals on gift card purchases are occasionally available. CouponsCrew tracks all active Flipkart gift card free bonus offers and lists them on this page when live.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">Flipkart Plus & Flipkart Black Membership</h4>
                <p>Flipkart Plus is Flipkart's free loyalty tier, earned via SuperCoins accumulated on purchases. Flipkart Black is the paid premium tier (₹1,499/year) offering early access to Big Billion Days, free delivery on all orders, priority customer service, and exclusive member-only discounts. If you are a regular Flipkart shopper, Flipkart Black pays for itself within a few large purchases.</p>
              </div>
            </div>
          </div>

          {/* Most Popular Flipkart Shopping Categories */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Most Popular Flipkart Shopping Categories
            </h3>
            <p>Flipkart's catalogue covers virtually every product category. Here is what each major section offers and where coupon savings typically apply:</p>
            <div className="space-y-4">
              <div>
                 <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Fashion
            </h3>
            <div className="my-4">
          <a 
            href="https://www.flipkart.com/ss-26-base-inline-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013941/fashion_k7hetc.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Trendy Styles</td>
        <td className="p-3.5">Striped Polos</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 50% OFF</td>
        <td className="p-3.5">Classic & Casual Wear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Ethnic Collection</td>
        <td className="p-3.5">Kashmiri Work Sets</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹349</td>
        <td className="p-3.5">Traditional Embroidery</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Trendy Fashion</td>
        <td className="p-3.5">Scarf Detail Items</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% OFF</td>
        <td className="p-3.5">Statement Accessories & Apparel</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Denim Special</td>
        <td className="p-3.5">Faded Jeans</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 50% OFF</td>
        <td className="p-3.5">Washed & Vintage Denim</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Footwear Deal</td>
        <td className="p-3.5">Studded Heels</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% OFF</td>
        <td className="p-3.5">Party & Designer Heels</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Casual Footwear</td>
        <td className="p-3.5">Skater Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 70% OFF</td>
        <td className="p-3.5">Streetwear & Skate Shoes</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                
                <p>Fashion is one of Flipkart's fastest-growing verticals. The Flipkart women dress collection spans western casuals, ethnic wear, co-ord sets, and formals from brands including AND, W, Biba, H&M, and Levi's. Flipkart ladies dress options range from budget-friendly daily-wear picks to occasion and partywear. Men's fashion includes shirts, trousers, ethnic kurtas, activewear, and footwear from brands like US Polo Assn., Peter England, and Puma. Sale events like the Flipkart summer sale and the Flipkart Republic Day sale are the best times to shop fashion — discounts of 60–80% off MRP are common during these windows.</p>
              </div>
              <div>

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Mobile Phones
            </h3>

             <div className="my-4">
          <a 
            href="https://www.flipkart.com/mobile-phones-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013941/mobiles_uqv7yv.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Mobile Deal</td>
        <td className="p-3.5">Galaxy A36 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹26,999 <span className="line-through text-gray-400 text-xs">₹35,999</span></td>
        <td className="p-3.5">Pay Only ₹2,249/m</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Mobile Deal</td>
        <td className="p-3.5">moto edge 60 Fusion (256GB)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹27,999 <span className="line-through text-gray-400 text-xs">₹37,999</span></td>
        <td className="p-3.5">Pay Only ₹4,500/m | Moto AI</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Budget 5G Phone</td>
        <td className="p-3.5">Ai+ Nova 2 Neo 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹12,999* <span className="line-through text-gray-400 text-xs">₹13,999</span></td>
        <td className="p-3.5">Massive 6000mAh Battery</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Flagship Phone</td>
        <td className="p-3.5">realme 16 Pro 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹36,900* <span className="line-through text-gray-400 text-xs">₹44,999</span></td>
        <td className="p-3.5">200MP Luma Colour Cam | Quad-Curved Display</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Premium Camera Phone</td>
        <td className="p-3.5">realme 16 Pro+ 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹45,000* <span className="line-through text-gray-400 text-xs">₹53,999</span></td>
        <td className="p-3.5">3.5x Telephoto Lens</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Mobile Deal</td>
        <td className="p-3.5">edge 60 Pro 5G</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹28,999* <span className="line-through text-gray-400 text-xs">₹36,999</span></td>
        <td className="p-3.5">Don't Settle, Go Pro</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                
                <p>Flipkart mobile phones is one of the platform's flagship categories. It is the exclusive launch partner for several Motorola, Realme, and POCO models, meaning certain smartphones are only available on Flipkart at launch. The Flipkart mobile sale events — especially during Big Billion Days — bring some of the deepest one-day discounts on flagship and mid-range phones from Samsung, Apple, OnePlus, and Xiaomi. Bank-card offers during mobile sales frequently add an extra ₹3,000–7,000 off on high-value purchases.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Electronics
            </h3>
             <div className="my-4">
          <a 
            href="https://www.flipkart.com/new-elec-clp-march-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013941/electronics_ld8oad.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Festive Deal</td>
        <td className="p-3.5">Rakhi Gifts Collection</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹999</td>
        <td className="p-3.5">Gift extra love this Rakhi</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Wearables Offer</td>
        <td className="p-3.5">Smartwatches</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹599</td>
        <td className="p-3.5">Fitness & Smart Gadgets</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Audio Accessories</td>
        <td className="p-3.5">Earbuds</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹129</td>
        <td className="p-3.5">True Wireless Audio</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Mobile Accessories</td>
        <td className="p-3.5">Designer Covers</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹129</td>
        <td className="p-3.5">Stylish & Protective Cases</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Creator Special</td>
        <td className="p-3.5">Influencer Kits</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹5,999</td>
        <td className="p-3.5">Content Creation Gear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Camera Offer</td>
        <td className="p-3.5">Fujifilm Cameras</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Price</td>
        <td className="p-3.5">Instant & Digital Photography</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>


                <p>Beyond mobiles, Flipkart electronics covers laptops, tablets, earphones, smartwatches, cameras, and gaming consoles. The platform has strong brand tie-ups with HP, Dell, Sony, boAt, and JBL, and exclusive or early-access launches are common. Electronics is also one of the highest-value categories for stacking a Flipkart discount code with a bank-card offer.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Appliances & Home
            </h3>

             <div className="my-4">
          <a 
            href="https://www.flipkart.com/tv-and-appliances-inline-ab-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013942/appliances_enczxa.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Home Appliances</td>
        <td className="p-3.5">2-in-1 Washer Dryer</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹37,953</td>
        <td className="p-3.5">Smart Washer & Dryer Combo</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Television Deal</td>
        <td className="p-3.5">Samsung 55" 4K TV</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹45,999*</td>
        <td className="p-3.5">Ultra HD 4K Smart TV</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Washing Machine</td>
        <td className="p-3.5">LG 9/5 Kg Washer Dryer</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹25,990</td>
        <td className="p-3.5">Front Load / High Capacity</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Refrigerator Deal</td>
        <td className="p-3.5">Samsung 236L Refrigerator</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹35,990</td>
        <td className="p-3.5">Double Door Energy Efficient</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Air Conditioner</td>
        <td className="p-3.5">Godrej 1.5 Ton 5-Star AC</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Price</td>
        <td className="p-3.5">Inverter Split AC</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Kitchen Appliance</td>
        <td className="p-3.5">Mixer Grinder</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹3,199</td>
        <td className="p-3.5">High Performance Motor</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Kitchen Appliance</td>
        <td className="p-3.5">Wet Grinder 150W</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹3,899</td>
        <td className="p-3.5">Heavy Duty Grinding</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Home Comfort</td>
        <td className="p-3.5">25L Storage Water Heater</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Price</td>
        <td className="p-3.5">Energy Efficient Geyser</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Spotlight</td>
        <td className="p-3.5">TCL 55QBCS QD-Mini LED TV</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹38,490</td>
        <td className="p-3.5">New Launch | Stunning Visuals</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Spotlight</td>
        <td className="p-3.5">TCL 43" OLED / QLED TV</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹24,799*</td>
        <td className="p-3.5">New Arrival | Premium Display</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>


                <p>Large appliances (refrigerators, washing machines, ACs, televisions) are well-represented on Flipkart with installation and delivery services included for most purchases. The Home category covers furniture, décor, cookware, and bedding. Discounts of 30–50% on large appliances are routine during sale events, with no-cost EMI options widely available.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Grocery
            </h3>
             <div className="my-4">
          <a 
            href="https://www.flipkart.com/fnhc-2025-new-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013942/food_erg2q2.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Breakfast Deal</td>
        <td className="p-3.5">Kellogg's Granola & Cereals</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 40% OFF</td>
        <td className="p-3.5">Healthy Breakfast Essentials</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Nutrition Deal</td>
        <td className="p-3.5">Superyou Whey Protein</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Flat 35% OFF</td>
        <td className="p-3.5">High Quality Whey Protein</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Dry Fruits Offer</td>
        <td className="p-3.5">Raw California Almonds & Cashews</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 60% OFF</td>
        <td className="p-3.5">Premium Nuts & Superfoods</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Fitness Essentials</td>
        <td className="p-3.5">Creatine Supplements</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 40% OFF</td>
        <td className="p-3.5">Performance & Workout Boosters</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Beverages Deal</td>
        <td className="p-3.5">Coffee Powders (Levista, Continental)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 55% OFF</td>
        <td className="p-3.5">Instant & Speciale Coffee blends</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Specialty Protein</td>
        <td className="p-3.5">Nutrabay / Superyou Yeast Protein</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 35% OFF</td>
        <td className="p-3.5">Fermented Plant Protein</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Beverages Deal</td>
        <td className="p-3.5">Tea Powders</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 60% OFF</td>
        <td className="p-3.5">Everyday & Premium Tea Blends</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Health Supplements</td>
        <td className="p-3.5">Omega Fatty Acid Supplements</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 35% OFF</td>
        <td className="p-3.5">Heart & Brain Health Supplements</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Grocery Special</td>
        <td className="p-3.5">Food Spreads (Pintola, MyFitness Peanut Butter)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 60% OFF</td>
        <td className="p-3.5">High Protein Chocolate & Classic Spreads</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Healthy Snacks</td>
        <td className="p-3.5">Protein Bars & Snacks</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 30% OFF</td>
        <td className="p-3.5">Daily 10g Protein Snack Bars</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Breakfast & Cereals</td>
        <td className="p-3.5">Pro.Fitness Choco Oats & Corn Flakes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 45% OFF</td>
        <td className="p-3.5">High Protein Oats & Flakes</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Kids' Health</td>
        <td className="p-3.5">Supermilk Nutrimix / Kids' Nutrition</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 40% OFF</td>
        <td className="p-3.5">Essential Growth & Nutrition Mixes</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>Flipkart grocery covers staples, packaged food, beverages, personal care, and household essentials. The grocery vertical operates under the Flipkart Minutes and Supermart banners and offers same-day or next-day delivery in major cities. Grocery-specific coupon codes and category coupons are available and listed separately on this CouponsCrew page.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Toys, Baby & Kids
            </h3>
             <div className="my-4">
          <a 
            href="https://www.flipkart.com/toysbc-new26-inline-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013942/toys_ijabzn.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Smart TV Deal</td>
        <td className="p-3.5">LG 43" NanoCell 4K AI HD (2026 Model)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to ₹8,000* OFF</td>
        <td className="p-3.5">4K Smart TV with AI Processing</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Home Comfort</td>
        <td className="p-3.5">Water Geysers</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra ₹800 OFF</td>
        <td className="p-3.5">Instant & Storage Heating Options</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Kitchen Appliance</td>
        <td className="p-3.5">Mixer Grinder</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra ₹1,880 OFF</td>
        <td className="p-3.5">High Performance Kitchen Grinding</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Health & Hygiene</td>
        <td className="p-3.5">Water Purifiers</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Extra ₹3,500 OFF</td>
        <td className="p-3.5">Advanced RO + UV Purification</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Exchange Offer</td>
        <td className="p-3.5">Appliance Exchange Bonus</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to ₹7,200 OFF</td>
        <td className="p-3.5">Best Exchange Value on Old Appliances</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Latest Launch</td>
        <td className="p-3.5">TCL 55" QLED 4K TV</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹33,490*</td>
        <td className="p-3.5">HDR10+ | Dolby Vision & Atmos</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Water Heater</td>
        <td className="p-3.5">15L Storage Water Geyser</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹4,299</td>
        <td className="p-3.5">Multifunctional Safety Valve</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Instant Geyser</td>
        <td className="p-3.5">5L Instant Water Geyser</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Just ₹3,590</td>
        <td className="p-3.5">Reliable & Quick Performance</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>A broad selection of toys, baby care products, and children's clothing from brands like Fisher-Price, Hasbro, and Funskool. Sale events around Diwali and Children's Day bring consistent discounts on this category.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Auto Accessories
            </h3>
             <div className="my-4">
          <a 
            href="https://www.flipkart.com/aa-2025-new-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013941/Auto_ss11ug.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Festive Deal</td>
        <td className="p-3.5">Rakhi Gifts</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
        <td className="p-3.5">Special Raksha Bandhan Gifts</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Toys & Games</td>
        <td className="p-3.5">Indoor Toys</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
        <td className="p-3.5">Interactive & Educational Toys</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Bundle Offer</td>
        <td className="p-3.5">Baby Care Essentials</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Buy 2 Get 1 FREE</td>
        <td className="p-3.5">Special Savings on Multi-packs</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Baby Care</td>
        <td className="p-3.5">Baby Wipes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Under ₹399</td>
        <td className="p-3.5">Gentle & Soft Wipes</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Spotlight</td>
        <td className="p-3.5">Barbie Toys & Accessories</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 35% OFF</td>
        <td className="p-3.5">FOMO-Worthy Brand Special</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Spotlight</td>
        <td className="p-3.5">LEGO Building Sets</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 30% OFF</td>
        <td className="p-3.5">Creative Construction Sets</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Spotlight</td>
        <td className="p-3.5">Casio Instruments & Calculators</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹129</td>
        <td className="p-3.5">Top-Rated Educational Gear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Kids' Fashion</td>
        <td className="p-3.5">Starang Daisy Apparel</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 40% OFF</td>
        <td className="p-3.5">Trendy Kids' Clothing</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Personal Care</td>
        <td className="p-3.5">Himalaya Baby Care & Skincare</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹59</td>
        <td className="p-3.5">Herbal Care Essentials</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>Car accessories, bike parts, helmets, cleaning kits, and car-care products. A niche but well-stocked category popular during the Flipkart shopping sale windows when auto accessories see 40–60% markdowns.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Sports & Fitness
            </h3>
            <div className="my-4">
          <a 
            href="https://www.flipkart.com/sf-inline-2025-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013942/sports_iggh8p.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Sports Deal</td>
        <td className="p-3.5">Swimming Kits</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 50% OFF</td>
        <td className="p-3.5">Swimwear & Goggles Essentials</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Fitness Deal</td>
        <td className="p-3.5">Punching Kits (Victory)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 40% OFF</td>
        <td className="p-3.5">Boxing Gloves & Training Gear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Sports Deal</td>
        <td className="p-3.5">Badminton Kits (Hundred)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 40% OFF</td>
        <td className="p-3.5">Rackets, Shuttlecocks & Accessories</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Sports Deal</td>
        <td className="p-3.5">Football Kits</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 60% OFF</td>
        <td className="p-3.5">Footballs, Guards & Training Gear</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Outdoor Sports</td>
        <td className="p-3.5">Skating Kits</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 75% OFF</td>
        <td className="p-3.5">Skates, Helmets & Safety Pads</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Cycling Gear</td>
        <td className="p-3.5">Cycling Kits</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Min. 40% OFF</td>
        <td className="p-3.5">Cycling Accessories & Safety Wear</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
            
                <p>Sports equipment, fitness gear, gym accessories, and activewear from brands like Nivia, Cosco, and Adidas. Discounts in this category are strongest during the summer sale and post-New Year fitness-resolution windows.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Furniture
            </h3>
            <div className="my-4">
          <a 
            href="https://www.flipkart.com/india-ka-furniture-studio-inlines-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013942/furtinure_j002jv.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Furniture Deal</td>
        <td className="p-3.5">3 Seater Sofas</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹7,999</td>
        <td className="p-3.5">Living Room Seating Essentials</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Furniture Deal</td>
        <td className="p-3.5">Dual Tone Tables</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹4,590</td>
        <td className="p-3.5">Modern Aesthetic Tables</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Office & Study</td>
        <td className="p-3.5">High Back Chair</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹4,699</td>
        <td className="p-3.5">Ergonomic Support Chairs</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Mattress Offer</td>
        <td className="p-3.5">King & Queen Mattresses</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹10,999</td>
        <td className="p-3.5">Premium Comfort Beds</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">New Arrival (Restolex)</td>
        <td className="p-3.5">Memory Foam Mattress</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹4,499</td>
        <td className="p-3.5">Orthopedic Body Support</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">New Arrival (Restolex)</td>
        <td className="p-3.5">Foam Mattress</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹2,499</td>
        <td className="p-3.5">Comfort Foam Layering</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Special (Furny)</td>
        <td className="p-3.5">3 Seater Sofa Set</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹6,999</td>
        <td className="p-3.5">Contemporary Living Room Sets</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Brand Special (Artikel)</td>
        <td className="p-3.5">Adjustable Table</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">From ₹10,499</td>
        <td className="p-3.5">Height-Adjustable Desk</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Dining Furniture</td>
        <td className="p-3.5">Dining Sets & Furniture</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Price</td>
        <td className="p-3.5">Dining Room Collections</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>

                <p>Flipkart's furniture vertical carries sofas, beds, wardrobes, and storage solutions from brands including Nilkamal, Wakefit, and Urban Ladder. Large-furniture orders qualify for scheduled delivery and assembly in most major cities.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Books & Media
            </h3>

            <div className="my-4">
          <a 
            href="https://www.flipkart.com/booksmedia-2025-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787013943/books_jyrg16.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Kids' Books Offer</td>
        <td className="p-3.5">Sticker Books (ABC & Novelty)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 20% OFF</td>
        <td className="p-3.5">Fun & Interactive Sticker Activities</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Early Learning</td>
        <td className="p-3.5">Board Books</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 50% OFF</td>
        <td className="p-3.5">Durable Books for Toddlers (Ages 3+)</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Children's Special</td>
        <td className="p-3.5">Children Boxset (Harry Potter & Series)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 40% OFF</td>
        <td className="p-3.5">Complete Book Collections & Series</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Skill Building</td>
        <td className="p-3.5">Activity Books (Brain Booster & Puzzles)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 20% OFF</td>
        <td className="p-3.5">365 Activity & Brain Games</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Creative Arts</td>
        <td className="p-3.5">Colouring Books (Mega Colouring)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 50% OFF</td>
        <td className="p-3.5">Fun Colouring & Art Books</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Storybooks Offer</td>
        <td className="p-3.5">Story Books (Peppa's Diwali, 108 Panchatantra Stories)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Special Price</td>
        <td className="p-3.5">Moral & Festive Children Stories</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>A wide catalogue of books across genres at competitive prices, along with e-books, stationery, and educational materials. The Books category is one of the most consistent areas for free-delivery deals.</p>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Two-Wheelers
            </h3>
            <div className="my-4">
          <a 
            href="https://www.flipkart.com/twowheelers-at-store?pageUID=1787014736439" 
            target="_blank" 
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img 
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787014677/two-wheeler_egsg2m.webp" 
              alt="Flipkart Fashion Sale Banner" 
              className="w-auto h-auto max-w-full rounded-2xl shadow-md border border-gray-200"
            />
          </a>
        </div>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Offer Type</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Highlights</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Scooter Deal</td>
        <td className="p-3.5">Hero Pleasure+</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹67,240* <span className="line-through text-gray-400 text-xs">₹72,770</span></td>
        <td className="p-3.5">Rating: 4.5★</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Scooter Deal</td>
        <td className="p-3.5">TVS Zest</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹65,408* <span className="line-through text-gray-400 text-xs">₹70,850</span></td>
        <td className="p-3.5">Rating: 4.6★</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Moped Deal</td>
        <td className="p-3.5">TVS XL 100</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹45,363* <span className="line-through text-gray-400 text-xs">₹48,250</span></td>
        <td className="p-3.5">Rating: 4.5★ | Utility Moped</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Scooter Deal</td>
        <td className="p-3.5">Hero XOOM 125</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹76,694* <span className="line-through text-gray-400 text-xs">₹82,194</span></td>
        <td className="p-3.5">Rating: 4.5★ | 125cc Performance</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">100-110 cc Bike</td>
        <td className="p-3.5">Hero Splendor+</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹72,729 <span className="line-through text-gray-400 text-xs">₹77,557</span></td>
        <td className="p-3.5">Rating: 4.5★ | World's No.1 Motorcycle</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">100-110 cc Bike</td>
        <td className="p-3.5">Hero HF Deluxe</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹55,078 <span className="line-through text-gray-400 text-xs">₹59,477</span></td>
        <td className="p-3.5">9% More Mileage</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">100-110 cc Bike</td>
        <td className="p-3.5">TVS Sport</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹49,400 <span className="line-through text-gray-400 text-xs">₹55,500</span></td>
        <td className="p-3.5">90 km/h Top Speed</td>
        <td className="p-3.5">All users</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">100-110 cc Bike</td>
        <td className="p-3.5">Hero Passion+</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">₹74,887 <span className="line-through text-gray-400 text-xs">₹80,328</span></td>
        <td className="p-3.5">Digi-Analog Meter</td>
        <td className="p-3.5">All users</td>
      </tr>
    </tbody>
  </table>
</div>
                <p>Flipkart's two-wheeler section — one of the first in Indian e-commerce — allows you to browse and book scooters and motorcycles from brands like Hero, Bajaj, and TVS, with test rides and dealership coordination handled through the platform.</p>
              </div>
            </div>
          </div>

          {/* Flipkart Sale Calendar 2026 */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Flipkart Sale Calendar 2026 — Big Billion Days, Republic Day & More
            </h3>
            <p>
              Planning your Flipkart shopping around the platform's major sale events is the single most effective way to maximise savings. Flipkart hosts multiple large-scale promotions throughout the year, with discounts spanning 65–80% across all categories. Here is the full 2026 sale calendar:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black">
                    <th className="p-3.5 border-b border-[#5B4FBE]">Sale Event</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Expected Month</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Key Categories</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Discount Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  <tr>
                    <td className="p-3.5 font-bold text-black">Republic Day Sale</td>
                    <td className="p-3.5">January</td>
                    <td className="p-3.5">Electronics, Fashion & Home</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Valentine's Day Sale</td>
                    <td className="p-3.5">February</td>
                    <td className="p-3.5">Gifts, Jewellery & Electronics</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Holi Sale</td>
                    <td className="p-3.5">March</td>
                    <td className="p-3.5">Fashion, Home Décor & Beauty</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 75% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Summer Sale</td>
                    <td className="p-3.5">April – May</td>
                    <td className="p-3.5">Fashion, Appliances & Mobiles</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Monsoon Sale</td>
                    <td className="p-3.5">July – August</td>
                    <td className="p-3.5">Fashion, Footwear & Electronics</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 70% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Raksha Bandhan Sale</td>
                    <td className="p-3.5">August</td>
                    <td className="p-3.5">Gifts, Fashion & Electronics</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 65% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Big Billion Days</td>
                    <td className="p-3.5">September – October</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Diwali Sale</td>
                    <td className="p-3.5">October – November</td>
                    <td className="p-3.5">Electronics, Fashion & Home</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Black Friday Sale</td>
                    <td className="p-3.5">November</td>
                    <td className="p-3.5">Electronics & Fashion</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 75% OFF</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Year-End Sale</td>
                    <td className="p-3.5">December</td>
                    <td className="p-3.5">All Categories</td>
                    <td className="p-3.5 text-[#5B4FBE] font-black">Up to 80% OFF</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Flipkart Big Billion Days is the standout event of the year — a 5–6 day sale in September or October that consistently delivers the deepest discounts across every category on the platform. Early access opens for Flipkart Plus and Black members before the public sale begins. If you are planning a large purchase — a smartphone, television, refrigerator, or laptop — holding out for Big Billion Days is almost always worth it.
            </p>
            <p>
              The Flipkart Diwali Sale runs in the lead-up to Diwali and is the best window for home appliances, ethnic fashion, gifts, and electronics. The Flipkart Republic Day Sale (January) is strong for electronics and fashion, especially if you missed the year-end deals. The Flipkart Black Friday Sale (November) mirrors the global shopping event and focuses heavily on electronics and premium fashion.
            </p>
            <p>
              The Flipkart summer sale (April–May) is one of the most underrated events on the calendar — appliances (ACs, coolers, refrigerators) and fashion clearances during this window see genuine 70–80% discounts, not just token markdowns.
            </p>
            <p className="bg-white p-4 rounded-xl border border-[#f0f0f0] text-sm italic">
              💡 CouponsCrew publishes dedicated pages for each major Flipkart sale event — including bank offer previews and early-access deal breakdowns — 2–3 days before each sale goes live. Bookmark this page and check back before every sale date.
            </p>
          </div>

          {/* Flipkart vs Amazon vs Meesho */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Flipkart vs Amazon vs Meesho — Which Platform Saves You More?
            </h3>
            <p>
              Choosing between Flipkart, Amazon, and Meesho depends on what you are buying and how you are buying it. Here is an honest comparison:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
                <thead>
                  <tr className="bg-[#5B4FBE] text-white font-black">
                    <th className="p-3.5 border-b border-[#5B4FBE]">Feature</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Flipkart</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Amazon</th>
                    <th className="p-3.5 border-b border-[#5B4FBE]">Meesho</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f0]">
                  <tr>
                    <td className="p-3.5 font-bold text-black">Product Range</td>
                    <td className="p-3.5">Wide — Electronics, Fashion, Groceries</td>
                    <td className="p-3.5">Widest — Global & Local Brands</td>
                    <td className="p-3.5">Budget Fashion & Home Essentials</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Delivery Speed</td>
                    <td className="p-3.5">Standard & Next-Day in major cities</td>
                    <td className="p-3.5">Prime — 1 to 2 days</td>
                    <td className="p-3.5">5 to 7 days (slower)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Return Policy</td>
                    <td className="p-3.5">10–30 days (category-dependent)</td>
                    <td className="p-3.5">10–30 days (easy returns)</td>
                    <td className="p-3.5">7 days (limited categories)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Membership Programme</td>
                    <td className="p-3.5">Flipkart Plus (free), Black (₹1,499/year)</td>
                    <td className="p-3.5">Prime (₹1,499/year)</td>
                    <td className="p-3.5">None</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Bank Offers</td>
                    <td className="p-3.5">Frequent — SBI, HDFC, Axis</td>
                    <td className="p-3.5">Frequent — ICICI, HDFC, SBI</td>
                    <td className="p-3.5">Limited</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Major Sale Event</td>
                    <td className="p-3.5">Big Billion Days & Festive Sales</td>
                    <td className="p-3.5">Great Indian Festival</td>
                    <td className="p-3.5">Mega Blockbuster Sale</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-black">Best For</td>
                    <td className="p-3.5">Electronics, Fashion & Appliances</td>
                    <td className="p-3.5">Prime benefits & fast delivery</td>
                    <td className="p-3.5">Ultra-budget shopping</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Flipkart is the strongest choice for electronics — particularly smartphones, laptops, and large appliances — and for fashion shoppers who want a wide brand range with fast delivery. The Flipkart Axis Bank credit card makes it even more rewarding for regular shoppers by adding 5% cashback on every Flipkart purchase year-round.
            </p>
            <p>
              Amazon edges ahead on delivery reliability (Prime's 1–2 day standard is tough to beat), on niche international products, and on categories like books and premium beauty. If you split shopping between the two platforms, using CouponsCrew's bank-offer tracking helps you identify which platform offers the better net price on any given day.
            </p>
            <p>
              Meesho serves a different use case — ultra-affordable fashion, home décor, and daily essentials where brand names matter less than price. It is not a competitor on electronics or appliances.
            </p>
          </div>

          {/* Flipkart Saving Tips */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Flipkart Saving Tips — Get More Off Every Order
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-black text-black text-base">1. Use the Flipkart App for Lower Prices</h4>
                <p>Flipkart shopping via the app frequently yields prices 5–10% lower than the same product on the desktop site. For any purchase over ₹1,000, check the app price before completing the order on desktop.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">2. Get the Flipkart Axis Bank Credit Card</h4>
                <p>If you shop on Flipkart more than 3–4 times a month, the axis bank Flipkart credit card is one of the best cashback cards available — 5% unlimited cashback on Flipkart, no cap, applied as a statement credit. Over a year of regular shopping it can add up to significant savings without requiring any additional effort.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">3. Stack a Coupon with a Bank Offer</h4>
                <p>Flipkart allows stacking a Flipkart promo code on top of an eligible bank-card discount in many (not all) promotions. The combination of a sale price + a coupon + a bank card offer is where the deepest discounts happen — especially during Big Billion Days and the Diwali sale.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">4. Join Flipkart Plus or Upgrade to Black</h4>
                <p>Flipkart Plus (free tier, earned via SuperCoins) gives early access to sale events and member-only deals. Flipkart Black (₹1,499/year) adds free delivery on all orders, priority service, and exclusive discounts. If you are a frequent Flipkart shopper, Flipkart Black pays for itself within 2–3 large purchases annually.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">5. Track the Flipkart Upcoming Sale Calendar</h4>
                <p>Timing your purchases around Flipkart upcoming sale events is the single most reliable way to save on big-ticket items. Smartphones, televisions, and appliances all see their deepest annual discounts during Big Billion Days and the Diwali sale. Use the sale calendar on this page to plan purchases 2–3 weeks in advance.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">6. Check Flipkart Gift Card Bonus Promotions</h4>
                <p>During certain promotional windows, Flipkart runs bonus-credit offers on gift card purchases — e.g., buy ₹2,000 in gift cards and receive ₹100–200 in extra credits. If you are a regular shopper, purchasing gift cards during these windows is a low-effort way to bank free credits. CouponsCrew lists all active Flipkart gift card free bonus offers on this page.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">7. Enable Price Drop Alerts on Saved Items</h4>
                <p>Flipkart's wishlist feature sends price-drop notifications when a saved item goes on sale. For high-demand items during Flipkart big billion days or the Flipkart mobile sale, enabling this alert lets you act immediately when the discount hits — before stock sells out.</p>
              </div>
              <div>
                <h4 className="font-black text-black text-base">8. Watch for the Christmas Sale on Flipkart</h4>
                <p>The Christmas sale on Flipkart (late December) is often overlooked but delivers strong discounts, particularly on electronics and fashion — essentially a continuation of the year-end clearance window. Combined with a Flipkart voucher code, this is a reliable time to pick up high-value items at reduced prices.</p>
              </div>
            </div>
          </div>

          {/* Similar Stores You Might Like */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Similar Stores You Might Like
            </h3>
            <ul className="list-disc pl-5 space-y-2 font-medium">
              <li><strong>Amazon</strong> — Widest product range; strong for Prime delivery and global brands</li>
              <li><strong>Myntra</strong> — Best-in-class for fashion, ethnic wear, and the EORS twice yearly</li>
              <li><strong>Meesho</strong> — Ultra-budget fashion and home essentials</li>
              <li><strong>Ajio</strong> — Strong ethnic wear and western fashion catalogue</li>
              <li><strong>Croma</strong> — Specialist electronics retailer; strong for offline-to-online deals</li>
            </ul>
          </div>

          {/* Closing Section */}
          <div className="space-y-4 text-slate-700">
            <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
              Closing Section — Why CouponsCrew for Flipkart Deals
            </h3>
            <p>
              Finding a working Flipkart coupon code in 2026 should be a 30-second task, not a frustrating exercise in clicking through expired codes on a dozen different sites. CouponsCrew cuts that down to one page — every code verified, every deal card honest about its conditions, and the page updated every day.
            </p>
            <p>
              Flipkart runs more promotions than almost any other platform in the market — from the Flipkart big billion days in the autumn to the Flipkart Republic Day sale in January, the Flipkart Diwali sale during the festive season, and the Flipkart Black Friday sale in November. There is a saving opportunity available in virtually every month of the year. CouponsCrew tracks all of it so you do not have to.
            </p>
            <p>
              Bookmark this page and check back before every Flipkart purchase — whether you are shopping Flipkart mobile phones, browsing Flipkart women dress collections, restocking from Flipkart grocery, or gearing up for the next big sale event. A verified deal is always one click away.
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
          {isReadMore ? 'Read Less' : 'Read More'} <ChevronDown className={cn('w-4 h-4 transition-transform', isReadMore && 'rotate-180')} />
        </button>

        {/* FAQs Accordion */}
        <div className="mt-20 space-y-4">
          <h3 className="text-2xl font-black text-black mb-8">
            Frequently Asked Questions — Flipkart Coupon Codes
          </h3>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
              >
                <span className="text-black font-black text-base">{faq.q}</span>
                <div className={cn('bg-[#f0f0f0] p-2 rounded-xl transition-all', openFaq === i && 'bg-[#5B4FBE] rotate-180')}>
                  <ChevronDown className={cn('w-4 h-4 text-gray-500', openFaq === i && 'text-white')} />
                </div>
              </button>
              <div className={cn('overflow-hidden transition-all duration-300 px-8 bg-white', openFaq === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0 pb-0')}>
                <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Flipkart Searches</h3>
          <div className="flex flex-wrap gap-2.5">
            {['Flipkart Coupons', 'Big Billion Days', 'Mobile Offers', 'Electronics Sale', 'Appliance Deals', 'Couponscrew Home'].map(tag => (
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
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Flipkart Deals</h3>
          <div className="space-y-6">
            {coupons.slice(0, 5).map((coupon) => (
              <div key={coupon.id} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">F</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{coupon.badge}</p>
                  <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{coupon.title}</p>
                </div>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Flipkart deal: ${coupon.title}`} className="bg-[#f0eeff] text-[#5B4FBE] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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

            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Flipkart checkout for instant discounts.
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
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Flipkart</span>
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
