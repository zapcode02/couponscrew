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
import { Coupon, POLKI_SAREES_COUPONS } from './polkiSareesCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.polkisarees.com/';

export default function PolkiSareesStore() {
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

  const coupons: Coupon[] = POLKI_SAREES_COUPONS;

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
      q: 'How do I use a Polki Sarees coupon code?',
      a: 'Add your sarees to the cart on polkisarees.com — the tiered discount (10% for one, 15% for two or more) is applied automatically. If you have a separate coupon code, enter it in the discount field at checkout before completing payment.'
    },
    {
      q: 'Can I use multiple coupon codes on Polki Sarees?',
      a: 'No — Polki Sarees applies its tiered quantity discount automatically, and it generally cannot be stacked with an additional promo code. The prepaid payment discount, however, applies on top of the tier discount.'
    },
    {
      q: 'Why is my Polki Sarees promo code not working?',
      a: 'This is usually because the code has expired, the discount is already applied automatically via the tiered system, a minimum order value was not met, or the code was sourced from an unverified third-party listing.'
    },
    {
      q: 'Where can I find the best Polki Sarees offers?',
      a: 'We keep this Polki Sarees store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Polki Sarees offer free blouse stitching?',
      a: 'Polki Sarees sells some sarees as part of a coordinated saree-and-blouse combo, but standalone blouse stitching or customisation is not a published service — check the product page for each listing to confirm what is included.'
    },
    {
      q: 'How often are Polki Sarees coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Polki Sarees Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792834602/polki_saress_logo_fwkcng.webp"
                      alt="Polki Sarees Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Polki Sarees Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Polki Sarees Discount Code and Polki Sarees Promo Code. Enjoy 39% OFF the Hariyali Green Ombre Saree and 23% OFF the Angoori + Mastani Complete Look. Shop elegant festive, wedding, and party wear sarees with verified Polki Sarees offers this October 2026.
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
                  <span>Visit Polki Sarees</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792841179/Polki_Sarees_Hariyali_Green_Offer_clrs5i.webp"
                alt="Polki Sarees Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-contain w-full h-full"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">15+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 39%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,400+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Polki Sarees Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Polki Sarees coupon codes & offers.</p>
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
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "50%"}
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
              <button
                onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Dynamic Approved Bullet Points */}
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
                <span>Who Founded Polki Sarees?</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Polki Sarees was founded by Anshika Garg, who describes the brand as "born from nostalgia, nurtured by heritage." The brand works directly with artisans across five states — Gujarat, West Bengal, Odisha, Madhya Pradesh, and Rajasthan — cutting out middlemen to keep prices closer to what the craft actually costs and to send a larger share back to the makers.
              </p>

              <p className="text-[#1A1A2E] text-sm mb-3">
                The figure the brand puts on its production: 15 days | 5 hands | 1 saree — the time and number of artisans involved in each piece. Polki Sarees works with 380 artisans across these states.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                The small-batch model means collections like Mohar, ADIRA, and Ajrakh don't stay available indefinitely — when a batch sells out, it may not return.
              </p>

              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Polki Sarees</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          

           <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  {/* Dev note (EEAT): No independently verified third-party coupon codes for Polki Sarees were confirmed during research (October 2026). The tiered discount and prepaid saving are confirmed directly from polkisarees.com. Update this section if an affiliate code becomes available. */}
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Apply a Polki Sarees Discount at Checkout
  </h2>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Visit{" "}
        <a
          href="https://polkisarees.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline hover:text-emerald-700"
        >
          polkisarees.com
        </a>{" "}
        and browse by craft, fabric, occasion, or collection.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Add one or more sarees to your cart — the cart will show your discount tier automatically (10% for 1, 15% for 2+).
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At checkout, look for a <strong>coupon or discount code field</strong> and enter any code you have. If no code applies, the tiered discount is already in your cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Choose <strong>prepaid payment</strong> (UPI, card, or net banking) — Polki Sarees gives an additional discount on prepaid orders over COD.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Free shipping applies on orders above ₹999. If your order is above that threshold, no separate code is needed for shipping.
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
        <p className="text-3xl font-black text-black mb-10 leading-tight italic">
          Polki Sarees Coupon Code: How to Save on Every Artisan Saree Order
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Polki Sarees coupon code is a discount code you enter at checkout on polkisarees.com to reduce the price of your saree order. As of October 2026, Polki Sarees does not publish standalone promo codes in the traditional sense — instead, the brand runs a tiered discount system: 10% off when you buy one saree, 15% off when you buy two, and an additional prepaid discount on top of that. These apply automatically, without a code, on every eligible order.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Polki Sarees Offers and Discount List</caption>
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
          offerType: 'SAVE UP TO 23%',
          discount: 'From ₹3,686',
          highlights: 'Up to 23% OFF on Angoori + Mastani complete coordinated saree & blouse look for weddings.',
          eligibility: 'Limited-Time Deal'
        },
        {
          offerType: 'SAVE UP TO 16%',
          discount: 'From ₹4,212',
          highlights: 'Up to 16% OFF on Patrikaa + Laila complete ethnic look for festive wear.',
          eligibility: 'Selected Styles'
        },
        {
          offerType: 'SAVE UP TO 23%',
          discount: 'From ₹3,680',
          highlights: 'Up to 23% OFF on Mukta + Anar complete look combination for festive celebrations.',
          eligibility: 'While Stocks Last'
        },
        {
          offerType: 'SAVE UP TO 20%',
          discount: 'From ₹3,917',
          highlights: 'Up to 20% OFF on Varnika + Dhun complete look matching festive styling set.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 11%',
          discount: '₹2,925',
          highlights: 'Save 11% (₹374 OFF) on Shonita Saree. Customer favorite with 100+ positive reviews.',
          eligibility: 'All Users'
        },
        {
          offerType: 'SAVE 11%',
          discount: '₹2,749',
          highlights: 'Save 11% (₹351 OFF) on Angoori Saree for festive celebrations (was ₹3,100).',
          eligibility: 'Limited-Time Price'
        },
        {
          offerType: 'SAVE 11%',
          discount: '₹2,925',
          highlights: 'Save 11% (₹374 OFF) on Kashni Saree crafted for ethnic occasions.',
          eligibility: 'While Stocks Last'
        },
        {
          offerType: 'SAVE 26%',
          discount: '₹2,949',
          highlights: 'Save 26% (₹1,050 OFF) on Patjhad Saree for weddings (was ₹3,999).',
          eligibility: 'Limited-Time Offer'
        },
        {
          offerType: 'SAVE 15%',
          discount: '₹2,600',
          highlights: 'Save 15% (₹460 OFF) on Sea Glass Saree with lightweight design.',
          eligibility: 'Limited Period'
        },
        {
          offerType: 'SAVE 21%',
          discount: '₹2,849',
          highlights: 'Save 21% (₹741 OFF) on Bougainvillea Saree suitable for party wear.',
          eligibility: 'While Supplies Last'
        },
        {
          offerType: 'SAVE 31%',
          discount: '₹2,499',
          highlights: 'Save 31% (₹1,100 OFF) on Baghiya Saree for celebrations & special occasions.',
          eligibility: 'Promotional Price'
        },
        {
          offerType: 'SAVE 15%',
          discount: '₹2,600',
          highlights: 'Save 15% (₹460 OFF) on Daydream Flora Saree for everyday celebrations.',
          eligibility: 'While Stocks Last'
        },
        {
          offerType: 'SAVE 15%',
          discount: '₹2,600',
          highlights: 'Save 15% (₹460 OFF) on Amaltaas Saree with elegant festive design.',
          eligibility: 'Limited Time'
        },
        {
          offerType: 'SAVE 15%',
          discount: 'From ₹2,600',
          highlights: 'Save 15% (₹460 OFF) on Twilight Tropics Saree for day-to-evening wear.',
          eligibility: 'Selected Styles'
        },
        {
          offerType: 'SAVE 39%',
          discount: '₹2,199',
          highlights: 'Save 39% (₹1,400 OFF) on Hariyali Green Ombre Saree (was ₹3,599).',
          eligibility: 'Limited-Time Offer'
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
            Polki Sarees Discount Structure: What You Actually Get
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Order Type</th>
                  <th className="p-4 font-bold">Discount</th>
                  <th className="p-4 font-bold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">1 saree, any</td>
                  <td className="p-4">10% off</td>
                  <td className="p-4">Applied automatically at cart</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">2 sarees, any</td>
                  <td className="p-4">15% off</td>
                  <td className="p-4">Applied automatically at cart</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Prepaid payment</td>
                  <td className="p-4">Extra discount</td>
                  <td className="p-4">Added at checkout on top of tier discount</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Free shipping</td>
                  <td className="p-4">On orders ₹999+</td>
                  <td className="p-4">Pan India; COD also available</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">SALE collection</td>
                  <td className="p-4">Varies by product</td>
                  <td className="p-4">Sale prices shown struck-through vs original</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The buy-2 bundle is worth considering: at ₹1,499–₹2,999 per saree, buying two gets you 15% off the total rather than 10%, which often saves more than a standard coupon code would.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Polki Sarees vs Polki Jewellery: Two Different Things
    </p>

    <p>
      This is a common source of confusion. Polki jewellery (also spelled Polki) refers to uncut diamond jewellery set in gold — a Mughal-era jewellery style distinct from the saree brand. Brands like Tyaani and Kalyan Jewellers sell Polki jewellery.
    </p>

    <p>
      Polki Sarees (polkisarees.com) is a separate, unrelated brand that sells handcrafted sarees sourced from artisans across India. The name overlap causes a lot of search confusion, but the two categories have nothing to do with each other.
    </p>

    <p>
      If you landed here looking for Polki jewellery, the right search term is "Polki diamond jewellery" or "Polki necklace."
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Polki by Bhagwati Sarees: Is It the Same Brand?
    </p>

    <p>
      Polki by Bhagwati and Polki Sarees (polkisarees.com) are different brands. Bhagwati Sarees is a wholesale and retail saree supplier based in Haryana. "Polki by Bhagwati" appears to reference their Polki-embellished or Polki-styled saree range — sarees that incorporate Polki (uncut stone) embroidery work in the fabric itself.
    </p>

    <p>
      Polki Sarees (the brand at polkisarees.com, founded by Anshika Garg) is a direct-to-consumer artisan label focused on hand block printing, Kalamkaari, and similar craft traditions. The two brands have separate websites, products, and pricing.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Polki Sarees by Fabric and Craft: A Buyer's Guide
    </p>

    <p>
      Understanding which craft and fabric you're looking at helps you use any Polki Sarees discount code or sale more effectively — lighter fabrics are better for daily wear, heavier for occasions.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Craft / Fabric</th>
            <th className="p-4 font-bold">What It Looks Like</th>
            <th className="p-4 font-bold">Best For</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Hand block print</td>
            <td className="p-4">Repeat motifs stamped by hand, slight irregularities are intentional</td>
            <td className="p-4">Daily wear, gifting</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Kalamkaari</td>
            <td className="p-4">Hand-drawn or block-printed using natural dyes, earthy motifs</td>
            <td className="p-4">Casual to festive</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Ajrakh</td>
            <td className="p-4">Geometric resist-print from Kutch/Sindh tradition, indigo and madder tones</td>
            <td className="p-4">Everyday, ethnic</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Tie & dye / Bandhani</td>
            <td className="p-4">Knotted before dyeing, creates dot or pattern clusters</td>
            <td className="p-4">Festive, colourful occasions</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Pichwai print</td>
            <td className="p-4">Motifs from Rajasthani temple painting tradition</td>
            <td className="p-4">Festive, traditional events</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Ikkat</td>
            <td className="p-4">Yarn-dyed before weaving, creates blurred geometric patterns</td>
            <td className="p-4">Work-wear, semi-formal</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Cotton</td>
            <td className="p-4">Breathable base fabric used across most crafts</td>
            <td className="p-4">Summer, daily wear</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Chanderi</td>
            <td className="p-4">Lightweight silk-cotton blend, slight sheen</td>
            <td className="p-4">Weddings, festive</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Linen</td>
            <td className="p-4">Structured, matte finish</td>
            <td className="p-4">Work-wear, formal casual</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Polki Sarees Budget Guide: What You Can Buy at Each Price Point
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Under ₹2,000:</strong> Cotton and chiffon/georgette sarees with printed crafts — hand block print, tie & dye, and florals. Good for daily wear and workwear. Polki Sarees has a dedicated "Sarees under ₹2,000" collection.
      </li>
      <li>
        <strong>₹2,000–₹3,000:</strong> The main range — Kalamkaari, Ajrakh, Ikkat, Bandhani in cotton and Chanderi cotton. This is where most of their named collections (ADIRA, Check Mate, Floral Bytes) sit.
      </li>
      <li>
        <strong>₹3,000–₹4,100:</strong> Chanderi silk and silk sarees, heavier occasion wear, wedding and festive collections. The Mohar collection and wedding/functions range sit here.
      </li>
    </ul>

    <p>
      Buying two sarees in the ₹2,000–₹3,000 bracket with the 15% bundle discount brings the per-saree cost down by ₹300–₹450 per piece — more savings than most one-time coupon codes would offer.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Polki Sarees Promo Code Not Working?
    </p>

    <p>
      If a Polki Sarees promo code fails at checkout, these are the most common reasons:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>The code has expired</strong> — Polki Sarees occasionally runs time-limited campaign codes. Check whether the source where you found the code shows a validity date.
      </li>
      <li>
        <strong>The code is from a third-party site</strong> — many aggregator sites list unverified codes for Indian saree brands. If the code doesn't work, it may never have been valid.
      </li>
      <li>
        <strong>A minimum order value applies</strong> — some codes require a minimum cart value. Check the code terms.
      </li>
      <li>
        <strong>The discount is already applied</strong> — Polki Sarees' tiered discounts (10% / 15%) apply automatically. If the cart already shows a discount, a second code may not stack.
      </li>
      <li>
        <strong>The code is for a specific collection</strong> — sale codes sometimes apply only to products that are not already in the SALE section.
      </li>
    </ul>

    <p>
      If none of these explain the issue, Polki Sarees' customer support can confirm whether a code is valid for your specific order.
    </p>
  </div>
</div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header - Replaced H1 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Frequently Asked Questions
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Where can I buy Polki Sarees online?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Polki Sarees sells directly on polkisarees.com. The website ships pan India with free shipping on orders above ₹999, and COD is available. The brand's Instagram page also posts new arrivals and limited-batch drops before they appear on the site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Who is the founder of Polki Sarees?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Polki Sarees was founded by Anshika Garg. The brand sources directly from 380 artisans across Gujarat, West Bengal, Odisha, Madhya Pradesh, and Rajasthan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Polki Sarees the same as Polki by Bhagwati Sarees?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No — they are different brands. Polki Sarees (polkisarees.com) is a direct-to-consumer artisan label. Polki by Bhagwati refers to a Haryana-based wholesale saree supplier's Polki-embellished range. Different websites, different products, different business models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Polki Sarees sell cotton sarees?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Cotton is one of the main fabrics at Polki Sarees, available in multiple craft traditions — hand block print, Kalamkaari, Ajrakh, Bandhani, and tie & dye. Many are priced under ₹2,000.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the return policy on Polki Sarees?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Polki Sarees lists "easy returns" on their website. For the exact return window and conditions (eligible products, what counts as a valid return reason), check the return and refund policy linked at the bottom of polkisarees.com before purchasing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is Polki clothing?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Polki Sarees' clothing offer is centred on sarees. The brand also lists blouses and some combos (saree + blouse). It is not a general clothing label — the core product is the saree, available in craft-forward fabrics across casual, workwear, festive, and wedding categories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is a Kapila saree?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kapila saree refers to sarees from Kapila, a different Indian saree brand. It is not connected to Polki Sarees. Both are independent online saree labels with their own artisan sourcing and product ranges.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            Polki Sarees is best treated as a brand where the discount structure is built in — the buy-2 bundle and prepaid saving do the work that a coupon code would elsewhere. If you are buying one saree, the 10% automatic discount covers most of what a standard promo code would give. If you are buying two, the 15% tier is worth planning your order around rather than waiting for a sale event.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Polki Sarees Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Polki Sarees Coupons", "Artisan Sarees", "Cotton Sarees", "Buy 2 Offer", "Prepaid Discount", "Ethnic Wear", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Polki Sarees checkout for instant discounts.
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
                <span>Continue to Polki Sarees</span>
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
