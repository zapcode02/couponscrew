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
import { Coupon, WISH_COUPONS } from './wishCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.wish.com/';

export default function WishStore() {
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

  const coupons: Coupon[] = WISH_COUPONS;

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
      q: 'How do I use a Wish promo code?',
      a: 'Most Wish discounts are shown directly on the product listing rather than entered as a code. If a code field is shown at checkout, enter it before placing your order to confirm the discount applies.'
    },
    {
      q: 'Can I use multiple coupon codes on Wish?',
      a: 'Wish generally does not support stacking multiple promo codes on one order. Daily Deal and Clearance prices are already discounted and apply automatically.'
    },
    {
      q: 'Why is my Wish promo code not working?',
      a: 'Common reasons: the offer was seller-specific and not sitewide, the promotional pricing window has ended, or the deal was only valid for first-time app users.'
    },
    {
      q: 'Where can I find the best Wish offers?',
      a: 'We keep this Wish store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'How long does Wish shipping take?',
      a: 'Delivery times on Wish vary significantly by seller and item, and can run several weeks since many listings ship from overseas sellers. Check the estimated delivery window shown on the product page before ordering.'
    },
    {
      q: 'How often are Wish coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Wish Promo Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861832/wish_logo_hmfgtd.webp"
                      alt="Wish Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.0 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Wish Promo Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Wish Promo Code and Wish Discount Code. Get up to 90% OFF in Daily Deals, up to 70% OFF electronics and gadgets, and extra markdowns in the Clearance section. Shop budget-friendly fashion, home, and tech with verified Wish offers this October 2026.
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
                  <span>Visit Wish</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861832/wish_logo_hmfgtd.webp"
                alt="Wish Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">6+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 90%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Wish Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Wish promo codes & offers.</p>
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
                          {coupon.points && coupon.points.length > 0 && (
                            <button
                              onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)}
                              className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity"
                            >
                              View Details
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          )}

                          {/* Dynamic Bullet Points List */}
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

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <div className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Apply a Wish Discount Code
  </div>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Open wish.com or the Wish app and add items to your cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At checkout, look for the "Enter promo code" or "Add coupon" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Type your Wish coupon code exactly as listed — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the saving updates in your order total before entering payment.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete payment using an international credit or debit card (Visa, Mastercard, or Amex). Wish prices in USD — your bank will convert at the prevailing rate.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Wish does not accept UPI, net banking, or RuPay directly. Payments go through international card processors. If your card isn't enabled for international transactions, enable it through your bank's app before checkout.
      </span>
    </li>
  </ol>
</div>


<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <div className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Wish Promo Code Not Working? What to Check
  </div>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Code frequency is low.</strong> Wish runs fewer affiliate codes than most sites — most discounts are automatic, not code-based. If a code isn't working, the offers table above may already have the best available discount without a code.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>New-user vs. existing-user codes:</strong> Some Wish codes are for new accounts only. If FIRST15 isn't applying to an existing account, it may be new-user restricted.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>USD pricing and code minimums:</strong> Some Wish codes have a minimum order in USD (e.g., $30). A cart that looks large in rupees might be below the minimum in dollars.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>App vs. website:</strong> A few Wish codes work only in the app. If a code fails on the website, try applying it through the Wish app.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Code expiry:</strong> FIRST15 is valid until October 31, 2026. Codes on third-party sites are often listed after they've expired — check the source's last-verified date.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Geographic restriction:</strong> Some Wish codes are issued for specific regions (US, EU). If you're browsing wish.com from India, a code marked for US users may not apply at checkout.
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
          Wish Coupon Code: Save on Fashion, Gadgets, and Home Goods in India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Wish coupon code is a promo code entered at checkout on wish.com or the Wish app to reduce the price of an order. Wish runs fewer active codes than most e-commerce sites — its bigger discounts come through sitewide sales, the daily login reward system, and new-user offers. Current verified offers (October 2026) include FIRST15 (15% off, valid till October 31) and REFRESH10 (extra 10% off, up to two uses). Wish is an international marketplace that ships to India from sellers mostly based in Asia, so several factors — currency, shipping time, customs — differ from Indian-first sites and are worth knowing before you order.
          </p>


          <hr className="my-10 border-gray-200" />

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Wish Coupon Codes — October 2026
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Code</th>
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Condition</th>
            <th className="p-4 font-bold">Valid Until</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">FIRST15</td>
            <td className="p-4">15% off sitewide</td>
            <td className="p-4">New and existing users</td>
            <td className="p-4">31 Oct 2026</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">REFRESH10</td>
            <td className="p-4">Extra 10% off</td>
            <td className="p-4">Up to $100 per order; can be redeemed twice</td>
            <td className="p-4">Not stated</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Wish Deals That Don't Need a Code
    </p>

    <p>
      Most of Wish's active discounts are automatic — no coupon required. These apply by category or product selection.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Discount</th>
            <th className="p-4 font-bold">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Weekly Deals</td>
            <td className="p-4">Up to 60% off</td>
            <td className="p-4">Fashion, gadgets, and home — rotates weekly</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Pet items</td>
            <td className="p-4">Up to 90% off</td>
            <td className="p-4">Cat toys, dog accessories, pet beds, GPS trackers</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Sunglasses and accessories</td>
            <td className="p-4">Up to 75% off</td>
            <td className="p-4">Fashion and lifestyle</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Sitewide sale</td>
            <td className="p-4">Up to 50% off</td>
            <td className="p-4">All orders, on select products</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Home decor and essentials</td>
            <td className="p-4">Up to 45% off</td>
            <td className="p-4">Lamps, vases, storage, kitchen</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Health and Beauty</td>
            <td className="p-4">Up to 40% off</td>
            <td className="p-4">Skincare, haircare, makeup, wellness</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Fashion and clothing</td>
            <td className="p-4">Up to 40% off</td>
            <td className="p-4">Clothing, shoes, accessories</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Prices on Wish are listed in USD. A product at $4.99 typically includes free shipping — which is one of the genuine differences between Wish and Indian-domestic marketplaces. The item is cheap because it ships directly from a manufacturer in China; the trade-off is delivery time (covered below).
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The Daily Login Stamp Trick: How to Get 50% Off
    </p>

    <p>
      Wish runs a daily login reward system. Log in to the app or website each day, earn one stamp per day, and collect 7 stamps to receive a 50% off coupon on a future order. The coupon is tied to your account — no separate code is needed.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How to use it:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>Open the Wish app or wish.com daily.</li>
      <li>Navigate to the "Rewards" or "Earn" section and claim your daily stamp.</li>
      <li>After 7 consecutive or accumulated stamps, a 50% coupon is credited to your account.</li>
      <li>Apply it during checkout — it typically shows as an available reward in your payment step.</li>
    </ol>

    <p className="mt-4">
      This is worth doing if you're planning a larger order. The 50% off cap applies to eligible items, not necessarily the full cart — check the coupon's terms in your account when it activates.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      How Wish Actually Works: What You're Buying
    </p>

    <p>
      Wish is a marketplace, not a retailer. When you buy on Wish, you're purchasing directly from an individual seller — most are based in China or Southeast Asia — rather than from Wish itself. This is why prices are low: there's no Indian distributor, no local importer markup, and no warehouse in India.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      What this means in practice:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Each seller is independent. Quality, packaging, and shipping speed vary by seller, not by category.
      </li>
      <li>
        Product photos may differ from what arrives. This is Wish's most common complaint — items photographed on models or in ideal conditions that look different in person.
      </li>
      <li>
        Reviews with photos are the most reliable signal. Before buying, filter for buyer-uploaded photos in the reviews section. If a product has hundreds of text reviews but few photo reviews, treat the listing cautiously.
      </li>
      <li>
        Wish does not manufacture or warehouse products. It is the platform; the individual seller is responsible for the item.
      </li>
      <li>
        Wish was acquired by Qoo10, an Asian e-commerce group, in 2024 for $173 million — a steep fall from its ~$17 billion valuation at its 2020 IPO. The platform is still active and accepting orders, but its buyer base has contracted significantly. For Indian buyers, this affects seller selection and the variety of available products.
      </li>
    </ul>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Wish for Indian Buyers: Currency, Shipping, and Customs
    </p>

    <p>
      Wish is set up for international buying, but several things work differently than on Indian-first sites.
    </p>

    <p>
      <strong>Currency:</strong> All prices are in USD. Your bank or card issuer converts the amount at the prevailing exchange rate plus any foreign transaction fee (typically 1.5–3.5% depending on your card). A $10 item costs roughly ₹835–860 at current rates before card fees.
    </p>

    <p>
      <strong>Payment:</strong> Visa, Mastercard, and Amex credit and debit cards work. Make sure your card is enabled for international transactions. Some Indian debit cards block international payments by default — enable it in your bank's app or by calling customer service.
    </p>

    <p>
      <strong>Shipping to India:</strong> Wish ships to India through its partner logistics network. Items ship from sellers in China or Southeast Asia. Not all sellers ship to India — check the delivery estimate on the product page before adding to cart. If no India delivery is shown, that seller doesn't ship here.
    </p>

    <p>
      <strong>Customs and import duty:</strong> India levies import duty on goods above the de minimis threshold. For personal imports via courier (which is how Wish ships), goods valued above approximately ₹10,000 ($120 at current rates) may attract customs duty at 20% or more depending on the product category. Wish's cart value in USD should be checked against this threshold before placing a large order. Multiple small shipments from different sellers typically clear individually.
    </p>

    <p>
      <strong>Returns:</strong> Wish's return policy allows refunds within a set window, but returning an item to China from India involves international shipping costs that often exceed the item's value. For low-value items (below $15), Wish sometimes issues a refund without requiring the item back — check support options before initiating a return.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Wish Shipping Time: What to Expect
    </p>

    <p>
      Wish does not have a warehouse in India. Every item ships from the seller's location, most of which are in China. Delivery times vary considerably.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Shipping Type</th>
            <th className="p-4 font-bold">Estimated Delivery to India</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Standard (most orders)</td>
            <td className="p-4">14–45 days</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Wish Express (select products)</td>
            <td className="p-4">5–10 days</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Slow-shipping sellers</td>
            <td className="p-4">Up to 60–90 days</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Wish Express items are marked with a badge on the listing. These ship from sellers with faster logistics partners and are the closest equivalent to standard Indian e-commerce delivery windows. For anything time-sensitive, only buy Wish Express items.
    </p>

    <p>
      For standard orders, the variance is real — some orders arrive in 2 weeks, others take 6. Tracking is provided but updates can be infrequent once the package enters India's postal system. Order only what you're comfortable waiting for.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Wish vs Temu vs AliExpress: Which Budget Import Site Suits Indian Buyers?
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">Wish</th>
            <th className="p-4 font-bold">Temu</th>
            <th className="p-4 font-bold">AliExpress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Platform type</td>
            <td className="p-4">Marketplace (independent sellers)</td>
            <td className="p-4">Marketplace (direct factory deals)</td>
            <td className="p-4">Marketplace (independent sellers)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Currency</td>
            <td className="p-4">USD</td>
            <td className="p-4">USD / INR (varies)</td>
            <td className="p-4">USD</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">UPI / Indian payment</td>
            <td className="p-4">No</td>
            <td className="p-4">No</td>
            <td className="p-4">No</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Standard shipping to India</td>
            <td className="p-4">14–45 days</td>
            <td className="p-4">7–20 days (select items)</td>
            <td className="p-4">15–60 days</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Express option</td>
            <td className="p-4">Wish Express (select)</td>
            <td className="p-4">Yes (faster sellers)</td>
            <td className="p-4">AliExpress Standard / Premium</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Minimum order</td>
            <td className="p-4">No minimum</td>
            <td className="p-4">No minimum</td>
            <td className="p-4">No minimum</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Product quality signal</td>
            <td className="p-4">Photo reviews from buyers</td>
            <td className="p-4">Early-stage reviews (newer platform)</td>
            <td className="p-4">Seller rating + years active</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Active promo codes</td>
            <td className="p-4">Rare — low frequency</td>
            <td className="p-4">Frequent</td>
            <td className="p-4">Moderate</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Returns to India</td>
            <td className="p-4">Refund without return (low value)</td>
            <td className="p-4">Generally refund-friendly</td>
            <td className="p-4">Seller-dependent</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Platform size (2024)</td>
            <td className="p-4">Declining — sold to Qoo10</td>
            <td className="p-4">Rapidly growing</td>
            <td className="p-4">Established</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      For Indian buyers choosing between the three: AliExpress has the longest track record and widest seller variety. Temu has been growing faster with aggressive pricing and newer buyer reviews. Wish's advantage used to be its gamified discount system and ultra-low price floor — that's still present but the platform is smaller than it was at its peak.
    </p>
  </div>
</div>

          {/* FAQs Section Header - Replaced H1/H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Frequently Asked Questions
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the best Wish coupon code in India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of October 2026, FIRST15 (15% off, valid till October 31) is the most recently confirmed code, sourced from GrabOn. REFRESH10 gives an additional 10% off and can be used twice. Both are worth trying at checkout — Wish code availability is low overall, and automatic deals (up to 60% off in weekly sales, up to 90% off pet items) often save more than a single code.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Wish ship to India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, Wish ships to India through international logistics partners. Delivery takes 14–45 days for standard shipping and 5–10 days for Wish Express items. Not every seller on Wish ships to India — check the delivery estimate on the product page before adding to cart.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Wish safe to buy from in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wish is a legitimate platform now owned by Qoo10. The main risks are product quality (items may differ from photos) and long shipping times, not payment fraud. For safer buying, filter for products with photo reviews, buy only Wish Express items when speed matters, and pay on an internationally-enabled credit card so you can raise a dispute if needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I pay with UPI or Indian debit cards on Wish?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                UPI is not accepted on Wish. International Visa, Mastercard, and Amex cards work. Many Indian debit cards block international transactions by default — enable yours through your bank's app before placing an order.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How do I get 50% off on Wish without a code?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Log in to the Wish app or website every day. After 7 logins, a 50% off coupon is credited to your account and shows as a reward at checkout — no separate code is needed. This is Wish's most reliable route to a significant discount.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            Wish's value case for Indian buyers is strongest on categories where product photos and reviews are enough to judge quality before buying: phone accessories, basic gadgets, pet supplies, small home decor items, and fashion accessories. For anything where fit, sizing, or build quality matters — clothing, shoes, electronics with safety implications — the photo-review filter and the Wish Express badge are the two most important checks before placing an order. Combined with the FIRST15 code and the daily login stamp system, the effective price on a carefully chosen order can be significantly below what Indian-domestic sites would charge for equivalent items.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Wish Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Wish Coupons", "Fashion Deals", "Gadget Offers", "Home Goods Discounts", "Wish Express", "Daily Login Rewards", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Wish checkout for instant discounts.
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
                <span>Continue to Wish</span>
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
