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
import { Coupon, CROCS_COUPONS } from './crocsCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.crocs.in';

export default function CrocsStore() {
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

  const coupons: Coupon[] = CROCS_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Crocs Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/crocs-logo_wu3hut.webp"
                      alt="Crocs Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Crocs Coupon Code – Save 60% on Jibbitz + Extra 10% OFF
                    </h1>
                   
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Crocs Coupon Code on your favourite footwear and accessories. Enjoy 60% OFF Hashtag Jibbitz and get an extra 10% OFF selected Crocs styles when using a discount code. Shop verified Crocs deals today and save more on every eligible purchase.
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
                  <span>Visit Crocs</span>
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
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#00A19A]/5"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790732080/crocs-logo_wu3hut.webp"
                alt="Crocs Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">50+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 40%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,500+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Crocs Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Crocs coupon codes & offers.</p>
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
                                <span>Valid on select clog, sandal, and accessory categories.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Minimum cart value might apply as specified on descriptions.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                <span>Covers selected styles and colourways.</span>
                              </li>
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
  <div className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Avoid Fake Crocs
  </div>

  <div className="text-xs text-[#4A4A6A] space-y-3">
    <div className="font-normal">
      Counterfeit Crocs are a real problem in India. In September 2026, police in Kukatpally, Hyderabad, booked two shops for allegedly selling counterfeit Crocs products. Online, fake "Crocs clearance sale" sites promise discounts as steep as 90% off.
    </div>

    <div className="font-normal">
      While researching this page, we also saw several lookalike web addresses that combine "crocs" with an unusual ending such as ".it.com" appearing in search results. These are not Crocs' official stores.
    </div>

    <div className="font-bold text-[#2C2C40] pt-1">
      Signs to walk away:
    </div>

    <ul className="space-y-2.5 list-disc pl-4 font-normal text-[#4A4A6A]">
      <li>
        <span className="font-bold text-[#2C2C40]">The web address isn't crocs.in</span> (or a known marketplace like Flipkart or Amazon).
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">The discount is far beyond anything on the official Sale page.</span> Genuine Crocs rarely go anywhere near 90% off.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">No contact details,</span> such as a working phone number, address or return policy.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Poor spelling and odd product names</span> on the site or the box.
      </li>
      <li>
        <span className="font-bold text-[#2C2C40]">Payment only by UPI transfer or bank transfer</span> with no card or COD option.
      </li>
    </ul>

    <div className="font-normal pt-1">
      Pay by credit card on unfamiliar sites where possible; it gives you a route to dispute the charge if the product never arrives or turns out to be fake.
    </div>
  </div>
</div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Crocs Classic Clog Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 40% OFF on Clogs, Sandals & Jibbitz Charms
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
                Top Categories at Crocs
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Classic Clogs</span>
                  <span className="text-[#FF5722] font-bold">Up to 40% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kids Crocs</span>
                  <span className="text-[#FF5722] font-bold">Up to 30% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Sandals & Flip-Flops</span>
                  <span className="text-[#FF5722] font-bold">Up to 35% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Jibbitz Charms</span>
                  <span className="text-[#FF5722] font-bold">Buy 2 Get 1</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Winter Boots</span>
                  <span className="text-[#FF5722] font-bold">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/stores/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
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
          Crocs Coupon Code: Offers, Sale Tips and How to Buy Genuine Crocs in India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Crocs coupon code is a promo code you enter at checkout on the official Crocs India website to reduce the price of clogs, sandals, slides or Jibbitz charms. Public Crocs codes in India are infrequent, so the most dependable savings come from the Sale section on crocs.in, festive marketplace sales on Flipkart and Amazon, and occasional bank card partnerships.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Crocs Offers and Discount List</caption>
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
          offerType: 'SAVE 60%',
          discount: '60% OFF',
          highlights: 'Hashtag Jibbitz for ₹160 (down from ₹399) or buy 5 for ₹599.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 50%',
          discount: 'Up to 50% OFF',
          highlights: 'Festive Collection clogs, sandals, flips & accessories.',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 45%',
          discount: '45% OFF',
          highlights: 'Toddler Crocband Cruiser Sandal for ₹1,922 (MRP ₹3,495).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 45%',
          discount: '45% OFF',
          highlights: "Kids' Crocband Cruiser Sandal for ₹2,197 (MRP ₹3,995).",
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 45%',
          discount: '45% OFF',
          highlights: 'Toddler Crocband Clog for ₹2,197 (MRP ₹3,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: 'InMotion Marbled Clog for ₹4,797 (MRP ₹7,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: "Women's InMotion Heel Block Pacer for ₹5,097 (MRP ₹8,495).",
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: 'Echo Clog for ₹4,197 (MRP ₹6,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: 'Brooklyn Buckle Low for ₹3,297 (MRP ₹5,495).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: 'Getaway Platform Flip for ₹2,997 (MRP ₹4,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: "Women's Getaway Chunky Glitter Platform Flip for ₹3,597 (MRP ₹5,995).",
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 40%',
          discount: '40% OFF',
          highlights: 'Number 8 Jibbitz for ₹239 (MRP ₹399).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: 'Doraemon 3-Jibbitz™ for ₹279 (MRP ₹399).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: 'Classic Camouflage Clog for ₹3,497 (MRP ₹4,995).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: 'InMotion Clog for ₹5,247 (MRP ₹7,495).',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: 'Echo Gum RO Clog for ₹5,597 (MRP ₹7,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: "Women's Brooklyn Flip for ₹3,847 (MRP ₹5,495).",
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: 'Miami Flip for ₹2,447 (MRP ₹3,495).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 30%',
          discount: '30% OFF',
          highlights: "Women's Miami Thong Flip for ₹2,797 (MRP ₹3,995).",
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'SAVE 20%',
          discount: '20% OFF',
          highlights: 'Echo Wave Clog for ₹6,396 (MRP ₹7,995).',
          eligibility: 'Extra 5% OFF on Prepaid'
        },
        {
          offerType: 'EXTRA 10% OFF',
          discount: 'Extra 10% OFF',
          highlights: "Valid on Classic Ballet, Women's Saturday Platform Sandal & select styles.",
          eligibility: 'Prepaid Orders Only'
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

          <p className="italic text-sm text-gray-500">
            *Last checked: 30 September 2026, a week before the October festive sales.*
          </p>

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Crocs Offers: What's Real and What's Expired
          </p>

          <p>
            Most Crocs codes shared online for India are old bank partnership codes that stopped working years ago. Here are the two that still circulate most, with their actual status, so you don't waste time at checkout.
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Offer</th>
                  <th className="p-4 font-bold">Discount</th>
                  <th className="p-4 font-bold">Conditions</th>
                  <th className="p-4 font-bold">Valid until</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">ICICI Bank cards, code ICICI30</td>
                  <td className="p-4">30% off full-price items</td>
                  <td className="p-4">Online only; not on discounted products</td>
                  <td className="p-4">31 Mar 2020</td>
                  <td className="p-4 font-bold text-red-500">Expired</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Bank of Baroda Mastercard, code MASTER25</td>
                  <td className="p-4">25% off new arrivals</td>
                  <td className="p-4">Full payment by the card; no COD; not on discounted items</td>
                  <td className="p-4">31 Mar 2022</td>
                  <td className="p-4 font-bold text-red-500">Expired</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Both offers share a pattern worth knowing: bank codes on Crocs have applied only to full-price items, never on top of Sale prices, and could not be combined with other offers. If a new bank offer appears, expect the same rules. A code that claims to stack with an existing sale price is very likely not genuine.
          </p>

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mt-10 mb-4">
            How to Use a Crocs Promo Code
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to crocs.in and add your pair to the bag. Check size and colour before moving on.</li>
            <li>Open the bag and find the field for a promo or coupon code.</li>
            <li>Enter the code exactly as issued and tap Apply.</li>
            <li>Confirm the discount shows in the order total. If it doesn't, check whether your item is already on sale; most codes exclude discounted products.</li>
            <li>Choose a payment method that matches the offer's terms. Bank codes usually require the full amount to be paid on that bank's card.</li>
          </ol>

          <p>
            If a Crocs discount code fails, the usual reasons are: the item is already reduced, the code has expired, the code is limited to a category such as new arrivals, or you're paying with a card the offer doesn't cover.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Crocs Store Collections
    </p>

    <p>
      The Crocs India store is organised into Women, Men, Kids, Jibbitz Charms, Bestsellers, New Arrivals and Sale. Most Crocs are unisex, so the same clog often appears in both the Women and Men sections under the same product.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Collection</th>
        <th className="p-4 font-bold">What you'll find</th>
        <th className="p-4 font-bold">Worth knowing</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Women</td>
        <td className="p-4">Clogs, crocs ladies sandals, wedges, slides, flip-flops</td>
        <td className="p-4">The Brooklyn range covers low wedges and dressier sandals</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Men</td>
        <td className="p-4">Classic and rugged clogs, slides, sandals</td>
        <td className="p-4">Many "mens crocs" are unisex styles sized in men's numbers</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Kids</td>
        <td className="p-4">Kids crocs for toddlers and older children</td>
        <td className="p-4">Kids' sizing runs separately; buy for the child's current length plus a little room</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Jibbitz Charms</td>
        <td className="p-4">Clip-in charms for clog holes</td>
        <td className="p-4">Fit the holes on Classic-style clogs and some LiteRide models</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Bestsellers</td>
        <td className="p-4">The most-bought styles, led by Classic clogs</td>
        <td className="p-4">Good starting point if you're buying your first pair</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">New Arrivals</td>
        <td className="p-4">Latest colours and styles</td>
        <td className="p-4">Past bank offers have targeted this section</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Sale</td>
        <td className="p-4">Reduced styles and colours</td>
        <td className="p-4">Codes usually won't apply here, since items are already discounted</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Popular Crocs Styles Explained
    </p>

    <p>
      <strong>Classic Clog.</strong> The original Crocs shape with a pivoting heel strap and holes for Jibbitz charms. White crocs and black are the most requested colours; white shows scuffs faster but cleans up with soap and water.
    </p>

    <p>
      <strong>Bayaband Clog.</strong> The Classic clog shape with a contrasting band around the sole, for a sportier look. Sold on Flipkart as a unisex clog.
    </p>

    <p>
      <strong>Crocs LiteRide and LiteRide 360.</strong> LiteRide foam is softer and lighter than the standard Crocs material. The LiteRide 360 Clog uses LiteRide foam all the way around the foot, has a perforated upper designed to flex like knit, and keeps four Jibbitz holes.
    </p>

    <p>
      <strong>Crocs Yukon Vista.</strong> The Yukon Vista II is a clog for men with a faux-leather-look upper, adjustable heel strap and a cushioned foam footbed. It's the pick if you want Crocs comfort with a less plasticky look.
    </p>

    <p>
      <strong>Crocs Brooklyn.</strong> A women's range built around wedge sandals and low wedges, for people who want some height with the Crocs level of cushioning.
    </p>

    <p>
      <strong>Crocs slippers, slides and sandals.</strong> Crocs slide sandals and flip-flops are the easiest option for home, pool and quick errands. Crocs sandals with back straps stay on better for walking.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Which Crocs Should You Buy?
    </p>

    <p>
      The right pair depends on where you'll wear it. This is the question our readers ask most, so here's a straight answer by use.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">If you need...</th>
        <th className="p-4 font-bold">Pick</th>
        <th className="p-4 font-bold">Why</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">All-day wear, first pair</td>
        <td className="p-4 font-medium">Classic Clog</td>
        <td className="p-4">Roomy fit, heel strap, easy to clean</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Maximum softness for long days on your feet</td>
        <td className="p-4 font-medium">LiteRide 360</td>
        <td className="p-4">Softer, lighter LiteRide foam throughout</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">A clog that looks more like a shoe</td>
        <td className="p-4 font-medium">Yukon Vista II</td>
        <td className="p-4">Leather-look upper, adjustable strap</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Clog crocs for men with a sporty look</td>
        <td className="p-4 font-medium">Bayaband Clog</td>
        <td className="p-4">Classic comfort, contrasting band</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Something dressier for women</td>
        <td className="p-4 font-medium">Brooklyn wedges</td>
        <td className="p-4">Added height with cushioning</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Home, bathroom, pool</td>
        <td className="p-4 font-medium">Slides or flip-flops</td>
        <td className="p-4">Quick to slip on, dry fast</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">School and play</td>
        <td className="p-4 font-medium">Kids Classic Clog</td>
        <td className="p-4">Heel strap keeps them on while running</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      Crocs shoes for men and crocs for women mostly differ in size range and colours rather than build, because so many styles are unisex. If you like a colour in the women's section and wear a larger size, check whether the same style is listed in men's sizing.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Getting Your Crocs Size Right
    </p>

    <p>
      Crocs sizing trips up a lot of online buyers, and getting it right first time saves you a return.
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Unisex sizes are listed as a pair</strong>, such as "M4 / W6". On unisex styles, the women's size is typically two numbers higher than the men's size.
      </li>
      <li>
        <strong>Classic clogs are designed with a roomy fit.</strong> Your heel should rest near the back with some space in front of your toes. If you're between sizes, compare your foot length against the size chart on the product page before deciding.
      </li>
      <li>
        <strong>LiteRide and sandals can fit differently from the Classic.</strong> Don't assume your Classic size carries over. Use the size guide for each style.
      </li>
      <li>
        <strong>For kids,</strong> measure the foot length and compare with the kids' chart rather than going by age.
      </li>
    </ul>

    <p>
      Buying in a store the first time and online afterwards is a sensible way to avoid sizing returns.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Where Can I Buy Crocs in India?
    </p>

    <p>
      You can buy Crocs in India from the official Crocs India website (crocs.in), exclusive Crocs stores, and major marketplaces including Flipkart and Amazon. Metro Brands, Crocs' long-term retail partner in India, runs more than 200 exclusive Crocs stores.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold">Channel</th>
        <th className="p-4 font-bold">Best for</th>
        <th className="p-4 font-bold">What to check</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">crocs.in (official)</td>
        <td className="p-4">Full range, new arrivals, Jibbitz, official Sale section</td>
        <td className="p-4">Return and exchange terms on the site before ordering</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Exclusive Crocs stores</td>
        <td className="p-4">Trying sizes, checking fit of new styles</td>
        <td className="p-4">Store-specific offers may differ from online</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Flipkart</td>
        <td className="p-4">Festive sale discounts, bank card offers</td>
        <td className="p-4">Seller name and ratings; stick to well-rated sellers</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Amazon</td>
        <td className="p-4">Festive deals, Prime delivery</td>
        <td className="p-4">Whether the listing is from the Crocs brand store or a reputable seller</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Fashion platforms and multi-brand stores</td>
        <td className="p-4">Comparing prices across brands</td>
        <td className="p-4">Authorised retailer status</td>
      </tr>
    </tbody>
  </table>
</div>

    <p>
      For coupons on those platforms, see our <a href="https://www.couponscrew.com/stores/flipkart-coupon-code" className="text-[#5B4FBE] underline">Flipkart coupon codes</a>, <a href="https://www.couponscrew.com/stores/amazon-coupon-code" className="text-[#5B4FBE] underline">Amazon coupon codes</a>, <a href="https://www.couponscrew.com/stores/myntra-coupon-code" className="text-[#5B4FBE] underline">Myntra coupon codes</a> and <a href="https://www.couponscrew.com/stores/ajio-coupon-code" className="text-[#5B4FBE] underline">AJIO coupon codes</a>.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Crocs Deals in Flipkart Big Billion Days and Amazon Great Indian Festival 2026
    </p>

    <p>
      Crocs are sold on both Flipkart and Amazon, so they fall within this October's festive sales. Discounts on individual styles depend on the seller, and neither platform had published Crocs-specific prices when we checked.
    </p>

    <div className="overflow-x-auto my-8">
  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
    <thead>
      <tr className="bg-[#5B4FBE] text-white">
        <th className="p-4 font-bold"></th>
        <th className="p-4 font-bold">Flipkart Big Billion Days 2026</th>
        <th className="p-4 font-bold">Amazon Great Indian Festival 2026</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-700">
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Starts</td>
        <td className="p-4">9 Oct 2026 (early access 8 Oct for VIP, Black and Flipkart credit card members)</td>
        <td className="p-4">8 Oct 2026</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Bank offers announced</td>
        <td className="p-4">Axis Bank and ICICI Bank cards, up to 10%</td>
        <td className="p-4">SBI cards, 10% instant discount</td>
      </tr>
      <tr className="hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Crocs styles listed</td>
        <td className="p-4">Classic, Bayaband, LiteRide, slides, flip-flops</td>
        <td className="p-4">Check the Crocs brand listings</td>
      </tr>
      <tr className="bg-gray-50/50 hover:bg-gray-50/80 transition-colors">
        <td className="p-4 font-semibold text-gray-900">Where to compare</td>
        <td className="p-4">crocs.in Sale section on the same day</td>
        <td className="p-4">crocs.in Sale section on the same day</td>
      </tr>
    </tbody>
  </table>
</div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How to get the best Crocs price this festive season:
    </p>

    <ol className="list-decimal pl-5 space-y-1">
      <li>Pick your exact style, colour and size now, and note the price on crocs.in.</li>
      <li>Check the same pair on Flipkart and Amazon when the sales open, including the bank offer for a card you actually hold.</li>
      <li>Compare the final price after bank discount, not the struck-through MRP.</li>
      <li>Buy only from sellers with strong ratings. Popular colours in common sizes sell out early.</li>
    </ol>

    <p className="mt-4">
      More festive coverage: <a href="https://www.couponscrew.com/festival-offers/flipkartbigbilliondaysale-offers" className="text-[#5B4FBE] underline">Flipkart Big Billion Days offers</a>, <a href="https://www.couponscrew.com/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] underline">Amazon Great Indian Festival offers</a> and our <a href="https://www.couponscrew.com/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] underline">BBD vs GIF comparison</a>.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Crocs Coupon Code FAQs
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is there a working Crocs coupon code in India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No public code was live when we checked on 30 September 2026. The widely shared ICICI30 and MASTER25 codes expired in 2020 and 2022. Your best savings right now are the crocs.in Sale section and the October festive sales on Flipkart and Amazon.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use a Crocs promo code on sale items?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Usually not. Past Crocs bank offers in India applied only to full-price items and couldn't be combined with other discounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Are Crocs on Flipkart and Amazon genuine?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crocs are sold on both platforms, but authenticity depends on the seller. Buy from the Crocs brand listings or sellers with strong ratings, and check reviews for mentions of fakes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Are Crocs sizes the same for men and women?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unisex styles are labelled with both, for example "M4 / W6". The women's size is typically two numbers higher than the men's size on unisex pairs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What's the difference between Crocs LiteRide and Classic clogs?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                LiteRide foam is softer and lighter than the material used in Classic clogs. The LiteRide 360 wraps that foam all the way round the foot and uses a more flexible, perforated upper.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where can I try Crocs before buying?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                At an exclusive Crocs store. Metro Brands runs more than 200 of them across India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Do Jibbitz charms fit all Crocs?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. They fit styles with holes in the upper, such as Classic clogs and some LiteRide models. Slides, flip-flops and most sandals don't take them.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            A Crocs coupon code is a bonus when one exists. For most buyers this October, the bigger win is knowing your exact size and style, comparing crocs.in's Sale price with Flipkart and Amazon during the festive sales, and buying only from the official site, exclusive stores or well-rated sellers. For more footwear and apparel offers, browse our <a href="https://www.couponscrew.com/stores/categories/fashion" className="text-[#5B4FBE] font-bold underline">fashion category</a>.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Crocs Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Crocs Coupons", "Classic Clogs Offer", "LiteRide Discounts", "Jibbitz Sale", "Crocs Bank Offers", "Footwear Deals", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Crocs checkout for instant discounts.
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
                <span>Continue to Crocs</span>
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
