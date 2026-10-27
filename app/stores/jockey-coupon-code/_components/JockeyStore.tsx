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
import { Coupon, JOCKEY_COUPONS } from './jockeyCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.jockey.in/';

export default function JockeyStore() {
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

  const coupons: Coupon[] = JOCKEY_COUPONS;

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
      q: 'How do I use a Jockey coupon code?',
      a: '[TODO: how-to answer specific to Jockey checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on Jockey?',
      a: '[TODO: stacking rules specific to Jockey]'
    },
    {
      q: 'Why is my Jockey promo code not working?',
      a: '[TODO: common reasons a code might fail on Jockey]'
    },
    {
      q: 'Where can I find the best Jockey offers?',
      a: 'We keep this Jockey store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Jockey offer free shipping?',
      a: '[TODO: Jockey free shipping policy/threshold details]'
    },
    {
      q: 'How often are Jockey coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Jockey Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/jockey-logo_i0o9tj.webp"
                      alt="Jockey Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Jockey Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    [TODO: 1-2 sentence hero description — what Jockey sells (innerwear, loungewear, activewear for men, women & kids) and the headline savings claim]
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
                  <span>Visit Jockey</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/jockey-logo_i0o9tj.webp"
                alt="Jockey Offers"
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Jockey Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Jockey coupon codes & offers.</p>
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
                Jockey Promo Code Not Working? What to Check
              </h2>

              <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Code validity:</strong> FLATRS.23OFF expires 27 October 2026. Codes listed on third-party sites often expire before the page is updated.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>New-user restriction:</strong> The first-order 10% offer and Myntra's extra 30% apply only to accounts that have not placed an order before on that platform.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>COD + cashback:</strong> Bank cashback (HDFC NetBanking ₹400, SBI ₹300) typically applies only on prepaid transactions — cashback is not credited on COD orders.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Bank card minimum:</strong> The HDFC 20% and SBI 20% offers require a minimum cart of ₹3,999. Carts below that threshold will not trigger the bank offer.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    <strong>Amazon vs jockeyindia.com codes:</strong> Codes and offers are platform-specific — a Jockey India code won't apply on Amazon or Myntra, and vice versa.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
              <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                How to Apply a Jockey Discount Code
              </h2>

              <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Go to jockeyindia.com and add products to your cart.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    On the cart or checkout page, look for the "Have a promo code?" or "Apply coupon" field.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Type your Jockey coupon code exactly as listed — codes are case-sensitive.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Click Apply and confirm the saving reflects in your order total.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Choose your payment method. If a bank card offer applies to your card (see table below), pay with that card for the additional saving on top.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    For COD orders, a ₹69 convenience fee applies. Prepaid orders (card, UPI, net banking) avoid this charge — worth noting if your cart is below ₹400.
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
                Jockey Coupon Code: Save on Innerwear, Activewear, and Loungewear in India
              </h2>

              <div className="text-gray-600 font-normal leading-relaxed space-y-6">
                <p>
                  A Jockey coupon code is a promo code you apply at checkout on jockeyindia.com to reduce the price of innerwear, activewear, loungewear, or kids' wear. Jockey India runs fewer affiliate codes than most apparel brands — their biggest savings come from bank card offers, multi-pack deals, and sitewide sales rather than single-use promo codes. Current offers (October 2026) include up to 50% off sitewide, ₹500 off with ICICI cards, and 20% off for HDFC and SBI cardholders on orders above ₹3,999.
                </p>

                <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                    <caption className="sr-only">Jockey Offers and Discount List</caption>
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
                          offerType: 'ROUND NECK T-SHIRT',
                          discount: '₹999',
                          highlights: 'Super Combed Cotton Blend Half Sleeve Round Neck T-Shirt for daily wear.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'MICROFIBER SKORT',
                          discount: '₹1,249',
                          highlights: 'Lightweight skort with zippered side pockets for gym, trips, and errands.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'FULL SLEEVE T-SHIRT',
                          discount: '₹799',
                          highlights: 'Super Combed Cotton Rich Full Sleeve T-Shirt with solid color design.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'OVERSIZED GRAPHIC TEE',
                          discount: '₹899',
                          highlights: 'Loose, easygoing oversized cotton-rich graphic printed T-shirt.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'GRAPHIC COTTON T-SHIRT',
                          discount: '₹799',
                          highlights: 'Super Combed Cotton Rich Graphic Printed T-shirt for casual hangouts.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'PACK OF 2 COTTON BRAS',
                          discount: '₹1,358',
                          highlights: 'Pack of 2 Wirefree Cotton Stretch Non-Padded Bras for everyday basics.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'FULL COVERAGE BRA',
                          discount: '₹749',
                          highlights: 'Wirefree Full Coverage Cotton Stretch Bra designed for all-day comfort.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'MEDIUM COVERAGE BRA',
                          discount: '₹599',
                          highlights: 'Wirefree Medium Coverage Cotton Stretch Bra with light, natural cups.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'EVERYDAY BRA',
                          discount: '₹639',
                          highlights: 'Full Coverage Everyday Bra in breathable cotton stretch fabric.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'MARVEL BOXER SHORTS',
                          discount: '₹999',
                          highlights: 'Marvel Avengers Printed Boxer Shorts in super combed cotton for lounging.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'COTTON T-SHIRT',
                          discount: '₹599',
                          highlights: 'Super Combed Cotton Rich Half Sleeve T-Shirt essential basic.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'PACK OF 2 BOXERS',
                          discount: '₹899 (Save ₹39)',
                          highlights: 'Pack of 2 Printed Boxer Shorts with handy side pockets.',
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
                      Jockey Bank Card Offers
                    </p>

                    <p>
                      Beyond the sitewide sales, Jockey India runs card-specific savings through its banking partners. These apply at the payment step — no code needed separately.
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Bank / Card</th>
                            <th className="p-4 font-bold">Offer</th>
                            <th className="p-4 font-bold">Min. Cart</th>
                            <th className="p-4 font-bold">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">ICICI Bank</td>
                            <td className="p-4">₹500 off sitewide</td>
                            <td className="p-4">—</td>
                            <td className="p-4">Credit and debit cards</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">HDFC Bank</td>
                            <td className="p-4">Flat 20% off</td>
                            <td className="p-4">₹3,999</td>
                            <td className="p-4">Credit and debit</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">HDFC NetBanking</td>
                            <td className="p-4">₹400 cashback</td>
                            <td className="p-4">—</td>
                            <td className="p-4">Via HDFC NetBanking</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">HDFC (Kidswear)</td>
                            <td className="p-4">₹400 instant discount</td>
                            <td className="p-4">₹2,499</td>
                            <td className="p-4">On kids' range only</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">SBI Cards</td>
                            <td className="p-4">Flat 20% off + ₹300 cashback</td>
                            <td className="p-4">₹3,999</td>
                            <td className="p-4">Combined offer</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Bank of Baroda / IDFC / Yes Bank</td>
                            <td className="p-4">10% off, up to ₹1,000</td>
                            <td className="p-4">₹3,000</td>
                            <td className="p-4">On Jockey sitewide (via FLATRS.23OFF)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <em>Dev note:</em> Bank offers above sourced from Zoutons and CouponzGuru Jockey pages (October 2026). Bank card offers change by campaign cycle — verify active status and specific terms directly with each bank before publishing. HDFC and SBI minimum of ₹3,999 needs verification — sources listed it inconsistently (some entries said "no minimum"). Use ₹3,999 as the conservative figure and flag for affiliate dashboard confirmation.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Where to Buy Jockey in India for the Best Price
                    </p>

                    <p>
                      Jockey products are sold across multiple channels in India, and the best price depends on which bank card you hold and what sale is running.
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Platform</th>
                            <th className="p-4 font-bold">Bank Offer</th>
                            <th className="p-4 font-bold">Jockey Coupon Code</th>
                            <th className="p-4 font-bold">Other Savings</th>
                            <th className="p-4 font-bold">COD Available</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">jockeyindia.com (official)</td>
                            <td className="p-4">HDFC 20% off / ICICI ₹500 off / SBI 20% + ₹300</td>
                            <td className="p-4">FLATRS.23OFF (₹23)</td>
                            <td className="p-4">Multi-pack 15% off; newsletter 30% off</td>
                            <td className="p-4">Yes (₹69 fee)</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Amazon India</td>
                            <td className="p-4">ICICI / Axis 10% off, up to ₹1,250 (min ₹2,490)</td>
                            <td className="p-4">Amazon-specific codes</td>
                            <td className="p-4">Lightning deals, Subscribe & Save</td>
                            <td className="p-4">Yes</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Flipkart</td>
                            <td className="p-4">HDFC 10% off, above ₹4,990</td>
                            <td className="p-4">Flipkart coupons available</td>
                            <td className="p-4">Big Billion Days, sale events</td>
                            <td className="p-4">Yes</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Myntra</td>
                            <td className="p-4">HDFC 10% off above ₹3,500, capped ₹800</td>
                            <td className="p-4">Extra 30% off first order (new users)</td>
                            <td className="p-4">End-of-Season Sales, brand days</td>
                            <td className="p-4">Yes</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Physical stores</td>
                            <td className="p-4">Card machine offers vary by bank</td>
                            <td className="p-4">Not applicable</td>
                            <td className="p-4">1,395+ exclusive Jockey stores across India</td>
                            <td className="p-4">N/A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <strong>Key consideration:</strong> If you hold an HDFC card and your cart is above ₹3,999, jockeyindia.com with the 20% HDFC offer gives the biggest saving on the official site. For smaller orders, Myntra's new-user extra 30% off can save more on a first purchase. Amazon's Jockey stock tends to be widest for multi-pack varieties and size availability.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Is Jockey India the Same as Jockey USA? The Page Industries Connection
                    </p>

                    <p>
                      Jockey India and Jockey International (US) are different legal entities. Jockey International, based in Kenosha, Wisconsin, owns the global brand. In India, the brand is exclusively operated by Page Industries Limited, a Bengaluru-based company that holds the manufacturing and distribution licence for Jockey products across India, Sri Lanka, Bangladesh, Nepal, Oman, Qatar, Bahrain, UAE, and Saudi Arabia.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      What this means for shoppers:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        jockeyindia.com is the correct site for Indian buyers. jockey.com is the US store — it does not ship to India and its codes will not work at jockeyindia.com checkout.
                      </li>
                      <li>
                        Product lines, sizing, and collections on jockeyindia.com may differ from the US and European ranges.
                      </li>
                      <li>
                        Customer service, returns, and warranty for products bought in India are handled by Page Industries, not Jockey International.
                      </li>
                      <li>
                        Jockey USA coupon codes found on international affiliate sites will not apply at checkout on jockeyindia.com.
                      </li>
                      <li>
                        Page Industries reported FY2025 revenue of ₹4,934.9 crore, and Jockey accounts for about 99% of that revenue — making it one of India's largest innerwear businesses by sales.
                      </li>
                    </ul>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Jockey Product Line Guide: Which Collection Is for What?
                    </p>

                    <p>
                      Jockey India's range is broader than most buyers realise. Here's what each line covers:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Collection</th>
                            <th className="p-4 font-bold">What It Is</th>
                            <th className="p-4 font-bold">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Men's USA Originals</td>
                            <td className="p-4">Heritage brief and trunk styles with classic waistband</td>
                            <td className="p-4">Everyday comfort, value pick</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Men's NYC</td>
                            <td className="p-4">Slimmer fit, fashion-forward cuts</td>
                            <td className="p-4">Fashion-conscious buyers, younger urban users</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Men's POP</td>
                            <td className="p-4">Bold prints, colourful waistbands</td>
                            <td className="p-4">Buyers who want variety in style</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Men's MOVE</td>
                            <td className="p-4">Stretch fabric, athletic cut</td>
                            <td className="p-4">Gym, sport, active use</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Women's Innerwear</td>
                            <td className="p-4">Everyday bras (₹349+), panties, camisoles</td>
                            <td className="p-4">Daily wear basics</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Women's Sports Bras</td>
                            <td className="p-4">High and medium-impact support (₹579+)</td>
                            <td className="p-4">Running, HIIT, gym</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Jockey Shapewear</td>
                            <td className="p-4">Body-contour shapewear (₹999+)</td>
                            <td className="p-4">Under fitted clothing, formal wear</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Jockey Life</td>
                            <td className="p-4">Loungewear — pyjamas, track pants, shorts</td>
                            <td className="p-4">Home wear, casual daily use</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Jockey Juniors</td>
                            <td className="p-4">Kids' innerwear and outerwear (from ₹89)</td>
                            <td className="p-4">Children aged 2–14</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Athleisure</td>
                            <td className="p-4">Active tops, shorts, gym vests (from ₹129)</td>
                            <td className="p-4">Casual sport, gym wear on a budget</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Jockey vs Lux vs Dollar vs Calvin Klein: Where It Fits
                    </p>

                    <p>
                      Jockey is positioned in the mid-premium tier of Indian innerwear — above economy hosiery brands but below international premium labels.
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Feature</th>
                            <th className="p-4 font-bold">Jockey India</th>
                            <th className="p-4 font-bold">Lux / Dollar / Rupa</th>
                            <th className="p-4 font-bold">Calvin Klein / Tommy Hilfiger</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Segment</td>
                            <td className="p-4">Mid-premium</td>
                            <td className="p-4">Economy</td>
                            <td className="p-4">Premium</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Men's briefs entry price</td>
                            <td className="p-4">₹199+</td>
                            <td className="p-4">₹50–₹150</td>
                            <td className="p-4">₹800–₹2,500</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Women's bras entry price</td>
                            <td className="p-4">₹349+</td>
                            <td className="p-4">₹99–₹250</td>
                            <td className="p-4">₹1,200–₹3,500</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Material</td>
                            <td className="p-4">Cotton, modal, stretch blends</td>
                            <td className="p-4">Cotton (often basic)</td>
                            <td className="p-4">Premium cotton, modal, micro-fibre</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Brand origin</td>
                            <td className="p-4">US (Jockey Intl.) — India via Page Industries</td>
                            <td className="p-4">Indian hosiery brands</td>
                            <td className="p-4">US / European luxury brands</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Physical stores</td>
                            <td className="p-4">1,395 exclusive outlets; 1,04,000+ stockists</td>
                            <td className="p-4">Wide hosiery distribution</td>
                            <td className="p-4">Select standalone stores and department stores</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Coupon codes</td>
                            <td className="p-4">Rare; bank offers more common</td>
                            <td className="p-4">Sold mainly via Amazon/Flipkart</td>
                            <td className="p-4">Rare; mostly full-price</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Target buyer</td>
                            <td className="p-4">Urban working professional, quality-focused</td>
                            <td className="p-4">Price-sensitive buyer</td>
                            <td className="p-4">Fashion-first, premium buyer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      If you're comparing Jockey with domestic brands like Lux or Dollar, the fabric and finish quality difference is noticeable, especially in briefs and bras. If you're comparing Jockey with Calvin Klein or Tommy Hilfiger, Jockey gives a similar international heritage at roughly one-third the price. Jockey's value case is strongest for buyers who want consistent quality without paying premium-label pricing.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      The ₹599 Free Shipping Trick
                    </p>

                    <p>
                      Jockey India ships free on orders above ₹599. Below that, a flat ₹39 shipping charge applies.
                    </p>

                    <p>
                      If your cart sits between ₹550 and ₹598, adding a low-cost item — a pair of Jockey socks (from ₹129) or a camisole (from ₹219) — can push it above ₹599 and give you a genuinely useful product instead of paying ₹39 for the same total.
                    </p>

                    <p>
                      For orders well below ₹599 (a single brief at ₹199, for example), the ₹39 shipping is fixed regardless of cart size. Prepaid payment removes the ₹69 COD fee — on a ₹199 order, paying by UPI costs ₹39 total for shipping; paying COD costs ₹108 for the same order.
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
                      What is the best Jockey coupon code in India right now?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      As of October 2026, FLATRS.23OFF gives a flat ₹23 off on a minimum cart of ₹199 at jockeyindia.com — valid until 27 October 2026. For bigger savings, HDFC cardholders get 20% off on carts above ₹3,999, and ICICI cardholders get ₹500 off sitewide — neither requires a code. If you're a new user on Myntra, the extra 30% first-order discount may save more than any available code.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Is Jockey India different from Jockey USA?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes. Jockey India is operated by Page Industries Limited under an exclusive licence from Jockey International (US). The two are separate storefronts — jockeyindia.com and jockey.com. Codes from US sites won't work in India, and the product ranges differ.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does Jockey India offer free shipping?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — orders above ₹599 ship free across India. Below ₹599, a flat ₹39 shipping fee applies. COD orders carry an additional ₹69 fee on top of shipping.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Can I use a Jockey discount code on Amazon or Flipkart?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. Jockey coupon codes from jockeyindia.com are not valid on Amazon, Flipkart, or Myntra. Each platform runs its own Jockey deals independently. Amazon offers ICICI/Axis bank instant discounts; Flipkart runs HDFC offers; Myntra runs first-order and sale deals.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is the return policy on Jockey India?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jockey India accepts returns and exchanges on most products. Where Jockey's own reverse pickup service is unavailable at your location, the return is self-shipped, and Jockey credits a ₹100 gift card to your account to offset the courier cost.
                    </p>
                  </div>

                </div>

                <hr className="my-10 border-gray-200" />

                <p>
                  On jockeyindia.com, your biggest savings come from stacking what's already on the table: buy a multi-pack (15% off automatically), hit the ₹3,999 threshold if you hold an HDFC or SBI card (20% off), prepay to skip the ₹69 COD charge, and make sure your cart crosses ₹599 to avoid the shipping fee. That combination often saves ₹700–₹1,000 on a mid-size order — more than any single promo code currently available.
                </p>

              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                  Popular Jockey Searches
                </p>
                <div className="flex flex-wrap gap.2.5 flex-wrap gap-2.5">
                  {["Jockey Coupons", "Innerwear Offers", "Activewear Deals", "Loungewear Discounts", "Multi-Pack Savings", "Bank Offers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Jockey checkout for instant discounts.
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
                <span>Continue to Jockey</span>
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
