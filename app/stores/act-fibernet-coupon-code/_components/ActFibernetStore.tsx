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
import { Coupon, ACT_FIBERNET_COUPONS } from './actFibernetCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.actcorp.in/';

export default function ActFibernetStore() {
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

  const coupons: Coupon[] = ACT_FIBERNET_COUPONS;

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
      q: 'How do I use an ACT Fibernet coupon code?',
      a: 'Most ACT Fibernet offers — free installation, annual plan discounts — are applied automatically when you sign up or renew through act.net.in or the ACT app, rather than through a manually entered code.'
    },
    {
      q: 'Can I combine multiple ACT Fibernet offers?',
      a: 'Some offers can combine, such as free installation with an annual plan discount, while others (like a referral reward) are separate and credited independently. Check the terms shown at sign-up for your specific plan.'
    },
    {
      q: 'Why is my ACT Fibernet offer not available?',
      a: 'The most common reason is serviceability — ACT Fibernet is not available in every city or locality. Other reasons include a promotion having ended, or the offer being limited to new connections only.'
    },
    {
      q: 'Where can I find the best ACT Fibernet offers?',
      a: 'We keep this ACT Fibernet store page updated 24/7 with the best discounts, verified offers, and upcoming promotional plans.'
    },
    {
      q: 'Does ACT Fibernet charge for installation?',
      a: 'ACT Fibernet frequently runs free-installation promotions on new connections, though this can vary by city and current campaign. Confirm the applicable terms when you sign up.'
    },
    {
      q: 'How often are ACT Fibernet offers updated?',
      a: 'Our deals team verifies and updates offers every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working offers.'
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
            <span className="text-[#5B4FBE] font-semibold">ACT Fibernet Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861848/act_fibernet_logo_mzvil2.webp"
                      alt="ACT Fibernet Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.2 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">ACT Fibernet Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest ACT Fibernet offers. Get free installation on new connections, up to 2 months free on annual plan payments, and unlimited data on 100 Mbps and above. Check serviceability and compare high-speed broadband plans with verified ACT Fibernet offers this October 2026.
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
                  <span>Visit ACT Fibernet</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861848/act_fibernet_logo_mzvil2.webp"
                alt="ACT Fibernet Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">2 Months Free</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹1,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">ACT Fibernet Offers & Plans</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified ACT Fibernet offers and broadband plans.</p>
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

                        <span className="text-[9px] sm:text-[15px] uppercase tracking-[1px] font-medium opacity-90 text-center">
                          {coupon.badgeType || "OFFER"}
                        </span>
                        <span className="text-sm sm:text-2xl lg:text-2xl font-black leading-tight tracking-tight my-1.5 text-center">
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
    How to Apply an ACT Fibernet Discount Code
  </div>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to actcorp.in and check availability at your address — ACT Fibernet operates in select cities; verify your pincode first.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Choose your plan (speed tier + pack type) and select the plan validity — 1, 3, 6, 12, or 24 months.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At the checkout or payment screen, look for a "Promo Code" or "Coupon Code" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter your ACT Fibernet coupon code exactly as listed and click Apply.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Confirm the saving reflects before completing payment. Most ACT discounts in October 2026 are applied automatically without a code — if no code field appears, the offer is already factored into the displayed price.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        New connections can also be initiated via the ACT Fibernet app. The app sometimes shows city-specific offers not listed on the website — check both before subscribing.
      </span>
    </li>
  </ol>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <div className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    ACT Fibernet Promo Code Not Working? What to Check
  </div>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>ACT rarely releases affiliate codes.</strong> Most third-party sites list codes that either never worked or expired months ago. If a code isn't applying, it's likely inactive — the tenure-based free-months offers in the section above are more reliable savings.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>City eligibility:</strong> Some ACT offers are city-specific. The Bengaluru, Chennai, and Hyderabad pages on actcorp.in may show different plans and offers than Delhi or Pune. Confirm you're checking the page for your city.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Plan tenure matters:</strong> The ₹500 off offer and free-month benefits apply to 6-month and 12-month plans. They do not apply to monthly or 3-month subscriptions.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>New vs. existing subscriber:</strong> Free routers, free installation, and some campaign offers are for new connections only. Existing subscribers are eligible for the referral cashback and renewal offers, which may differ.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>App vs. website offers:</strong> Log in to the ACT Fibernet app and check the offers section — city-specific deals sometimes appear there before or instead of the website.
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
          ACT Fibernet Coupon Code: Save on Broadband Plans Across India
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An ACT Fibernet coupon code is a promo code applied during signup or renewal at actcorp.in to reduce the price of a broadband plan. ACT Fibernet runs very few affiliate promo codes — its savings structure works differently from e-commerce sites. The main ways to pay less are tenure commitments (pay for 6 or 12 months and get free months or a free router), the referral programme (₹250 off your next bill per successful referral), and occasional campaign discounts. The current confirmed offer (October 2026) is ₹500 off on eligible 6-month and 12-month plans — no code required.
          </p>

          <hr className="my-10 border-gray-200" />

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      ACT Fibernet Coupon Codes — October 2026
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
            <td className="p-4 font-semibold">No code required</td>
            <td className="p-4">₹500 off</td>
            <td className="p-4">On eligible 6-month and 12-month plans</td>
            <td className="p-4">31 Oct 2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <em>Dev note (EEAT):</em> ACT Fibernet does not release standard affiliate promo codes through coupon platforms — its discounts are applied as automatic tenure benefits or through official campaign pages. The ₹500 off offer is sourced from GrabOn (verified October 24, 2026, valid till October 31, 2026). Verify current active offers on actcorp.in before publishing. If this expiry has passed, replace with the current campaign offer from actcorp.in or the affiliate dashboard.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      ACT Fibernet Offers That Don't Need a Code
    </p>

    <p>
      The majority of ACT Fibernet's savings are automatic when you choose a longer plan validity or a specific pack type at checkout.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">How to Get It</th>
            <th className="p-4 font-bold">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">1 month free</td>
            <td className="p-4">Choose 6-month plan validity</td>
            <td className="p-4">Available in Chennai, Hyderabad, Bengaluru, and other cities</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">2 months free</td>
            <td className="p-4">Choose 12-month plan validity</td>
            <td className="p-4">Available on select plans in multiple cities</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">6 months free</td>
            <td className="p-4">Choose 24-month plan validity</td>
            <td className="p-4">Select cities and plans; maximum saving for long-stay subscribers</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Free router</td>
            <td className="p-4">6-month or 12-month plan on eligible tiers</td>
            <td className="p-4">Saves ₹1,500–₹2,500 on hardware cost</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Free installation</td>
            <td className="p-4">6-month or longer plans</td>
            <td className="p-4">For shorter plans, installation may cost ₹1,000</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Free Netflix</td>
            <td className="p-4">Power Pack on 6-month+ validity</td>
            <td className="p-4">On eligible plans; Netflix subscription value ₹649/month</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Free OTT bundle</td>
            <td className="p-4">Starter, Value, or Power Pack</td>
            <td className="p-4">Includes ZEE5, Disney+ Hotstar, SunNXT, YuppTV, Prime Video depending on pack</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">₹250 off next bill</td>
            <td className="p-4">Refer a friend who subscribes</td>
            <td className="p-4">Via ACT Fibernet's Customer Referral Programme</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The free-months deal is often worth more than any promo code. On a plan at ₹1,000/month, a 12-month plan with 2 months free is effectively ₹200/month off across the tenure — equivalent to a 16% discount. Choosing a 1-month plan and trying to apply a code rarely saves more than just committing to 6 or 12 months.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      ACT Fibernet's 4-Pack System Explained
    </p>

    <p>
      ACT Fibernet offers the same speed tiers across four different pack types. The pack you choose at any given speed determines what's bundled — not just the speed. Most buyers don't realise this distinction exists and end up paying for OTT subscriptions they already have, or missing the internet-only option that's cheaper.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Pack Type</th>
            <th className="p-4 font-bold">What's Included</th>
            <th className="p-4 font-bold">Best For</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Performance Pack</td>
            <td className="p-4">Internet-only; no OTT bundle</td>
            <td className="p-4">Buyers who already subscribe to Netflix, JioHotstar, Prime separately — avoids paying for duplicates</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Starter Pack</td>
            <td className="p-4">Disney+ Hotstar, ZEE5, SunNXT, YuppTV + 300+ TV channels</td>
            <td className="p-4">Light streamers who want a basic content bundle</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Value Pack</td>
            <td className="p-4">Prime Video, Disney+ Hotstar, ZEE5, SunNXT, YuppTV + 300+ TV channels</td>
            <td className="p-4">Mid-range streaming users; no Netflix</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Power Pack</td>
            <td className="p-4">Netflix, Prime Video, Disney+ Hotstar, ZEE5, SunNXT, YuppTV + 300+ TV channels</td>
            <td className="p-4">Households that stream across multiple platforms</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Example (Pune, 200 Mbps tier):
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Pack</th>
            <th className="p-4 font-bold">Monthly Price</th>
            <th className="p-4 font-bold">Includes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Performance Pack</td>
            <td className="p-4">₹899</td>
            <td className="p-4">Internet only</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Starter Pack</td>
            <td className="p-4">₹899</td>
            <td className="p-4">Hotstar + ZEE5 + others</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Value Pack</td>
            <td className="p-4">₹949</td>
            <td className="p-4">Prime + Hotstar + ZEE5 + others</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Power Pack</td>
            <td className="p-4">₹1,049</td>
            <td className="p-4">Netflix + Prime + Hotstar + ZEE5 + others</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Prices vary by city. Check actcorp.in for your city's current rates. The pack system applies in most ACT cities but individual plan names and bundled apps may differ by location.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The ACT Fibernet Referral Programme
    </p>

    <p>
      ACT Fibernet's referral programme gives existing subscribers ₹250 off their next month's bill for every friend who successfully connects through their referral.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How it works:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>Log in to your ACT Fibernet account or the ACT app.</li>
      <li>Go to the "Refer a Friend" or "Customer Referral Programme" section.</li>
      <li>Share your referral link or enter your friend's details.</li>
      <li>When your friend subscribes and activates a connection, ₹250 is credited toward your next billing cycle.</li>
    </ol>

    <p className="mt-4">
      There is no stated cap on the number of referrals, so active users in buildings or housing societies where ACT is not yet present can reduce their own bills by helping neighbours connect. The ₹250 credit applies to the subscriber's bill — the referred friend gets a new connection, not a discount.
    </p>

    <p>
      <em>Dev note:</em> ₹250 confirmed from actcorp.in/crp-new (October 2026). GrabOn listed a higher ₹750 figure for the referral; Cashaly listed ₹250. Use ₹250 as the verified figure. Verify current referral value in the ACT app or affiliate dashboard before publishing, as this amount changes by campaign.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The "Unlimited" Plan and ACT Fibernet's FUP: What You Need to Know
    </p>

    <p>
      ACT Fibernet markets all its plans as unlimited data — and that's accurate in most usage scenarios. However, like most Indian ISPs, ACT applies a Fair Usage Policy (FUP) that may reduce speeds after a high-usage threshold is crossed within a billing month.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Key points:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Plans are listed as unlimited on actcorp.in, but the ACT app may show a data usage indicator with a high threshold (reports from users have mentioned 1,500 GB limits, though these figures have varied and reportedly changed over time).
      </li>
      <li>
        After the FUP threshold, speed may be throttled to a lower rate for the remainder of that billing month.
      </li>
      <li>
        Most households — even heavy streamers in 4K — are unlikely to hit 1,500 GB in a month (1,500 GB at 4K streaming is roughly 600+ hours of content).
      </li>
      <li>
        Power users running servers, continuous cloud backups, or seeding large files are more likely to be affected.
      </li>
    </ul>

    <p className="mt-4">
      <strong>Bottom line:</strong> For a household of 3–5 people streaming, gaming, and video calling, ACT Fibernet's plans work as effectively unlimited in practice. If you're a very high-volume user, confirm the current FUP terms with ACT support before subscribing.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      ACT Fibernet Upload Speed: What No One Talks About
    </p>

    <p>
      Unlike Jio Fiber, which offers symmetric speeds (equal upload and download), ACT Fibernet's upload speed is lower than its download speed on most plans. This matters for specific use cases.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">ACT Plan Speed (Download)</th>
            <th className="p-4 font-bold">Approximate Upload Speed</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">50 Mbps</td>
            <td className="p-4">~25 Mbps</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">150 Mbps</td>
            <td className="p-4">~100 Mbps</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">500 Mbps</td>
            <td className="p-4">~150 Mbps</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">1 Gbps</td>
            <td className="p-4">~200 Mbps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Who this affects:</strong> Content creators uploading to YouTube, video editors sending large files, remote workers on frequent video calls with screen sharing, and gamers hosting servers. If your primary use is downloading, streaming, and browsing, asymmetric upload is not a practical issue.
    </p>

    <p>
      Jio Fiber offers 1 Gbps upload on its 1 Gbps plan. If symmetric upload is a hard requirement, Jio Fiber is the better fit in cities where both are available.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      ACT Fibernet vs Jio Fiber vs Airtel Xstream: Which Broadband Is Right for You?
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">ACT Fibernet</th>
            <th className="p-4 font-bold">Jio Fiber</th>
            <th className="p-4 font-bold">Airtel Xstream Fiber</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Technology</td>
            <td className="p-4">FTTH (fibre to home)</td>
            <td className="p-4">FTTH (fibre to home)</td>
            <td className="p-4">FTTH (fibre to home)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Speed range</td>
            <td className="p-4">50 Mbps–1 Gbps</td>
            <td className="p-4">30 Mbps–1 Gbps</td>
            <td className="p-4">40 Mbps–1 Gbps</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Upload speed</td>
            <td className="p-4">Asymmetric (lower than download)</td>
            <td className="p-4">Symmetric (matches download)</td>
            <td className="p-4">Asymmetric</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">City coverage</td>
            <td className="p-4">~19 cities</td>
            <td className="p-4">1,600+ cities</td>
            <td className="p-4">Pan-India, major cities</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Entry monthly price</td>
            <td className="p-4">~₹525–₹575 (50 Mbps)</td>
            <td className="p-4">~₹399 (30 Mbps)</td>
            <td className="p-4">~₹499 (40 Mbps)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Latency (South India)</td>
            <td className="p-4">5–10 ms to local servers</td>
            <td className="p-4">5–15 ms</td>
            <td className="p-4">Varies</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">4G backup during outages</td>
            <td className="p-4">No</td>
            <td className="p-4">Yes</td>
            <td className="p-4">No</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">OTT bundle</td>
            <td className="p-4">Performance/Starter/Value/Power packs</td>
            <td className="p-4">Bundled (JioTV, JioHotstar, Netflix on higher plans)</td>
            <td className="p-4">Xstream Box + OTT apps on select plans</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Free installation</td>
            <td className="p-4">With 6-month+ plans</td>
            <td className="p-4">With most plans</td>
            <td className="p-4">With qualifying offers</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Referral programme</td>
            <td className="p-4">₹250 off next bill</td>
            <td className="p-4">Available</td>
            <td className="p-4">Available</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Pick ACT Fibernet if:</strong> You're in one of its ~19 cities, prioritise low gaming latency (particularly to South Indian servers), and want to separate your broadband from OTT subscriptions using the Performance Pack.
    </p>

    <p>
      <strong>Pick Jio Fiber if:</strong> You're outside ACT's coverage, need 4G backup during outages, require symmetric upload speeds for content creation or remote work, or want bundled TV and OTT in one plan.
    </p>

    <p>
      <strong>Pick Airtel Xstream if:</strong> You want broadband bundled with live TV via the Xstream Box, and you value Airtel's pan-India network and customer service infrastructure.
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
                Does ACT Fibernet have a coupon code for new connections in 2026?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of October 2026, ACT Fibernet does not release standard affiliate promo codes. The main new-connection offer is ₹500 off on 6-month and 12-month plans (valid till October 31, 2026, no code required). Free installation, free router, and 1–2 free months also apply automatically on eligible plan tenures — these are often worth more than a flat promo code.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is ACT Fibernet available in my city?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                ACT Fibernet operates in approximately 19 cities across 8 states including Karnataka, Tamil Nadu, Telangana, Andhra Pradesh, Delhi, Gujarat, Rajasthan, and Uttar Pradesh. Key cities include Bengaluru, Hyderabad, Chennai, Delhi, Madurai, Jaipur, Lucknow, and Ahmedabad. Even within a covered city, street-level availability depends on fibre infrastructure — check your exact address at actcorp.in before subscribing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the cheapest ACT Fibernet plan?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entry-level plans start at approximately ₹525–₹575/month for 50 Mbps, depending on the city. The Performance Pack (internet-only) at any speed tier is typically the lowest-priced option for that speed, since it excludes the OTT bundle cost.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How long does ACT Fibernet installation take?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                ACT Fibernet typically installs within 2–5 working days of subscribing, subject to local technician availability. Installation is free on 6-month and longer plans; shorter plans may carry a ₹1,000 installation charge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does ACT Fibernet truly offer unlimited data?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plans are marketed as unlimited, and for most household usage they work that way. A Fair Usage Policy applies — very high-volume usage in a single billing month may result in reduced speeds for the remainder of that month. Standard streaming, gaming, video calling, and remote work are well within normal usage for all plan tiers.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            For most buyers in ACT Fibernet's cities, the best saving isn't a promo code — it's choosing the right plan tenure and pack type from the start. A 12-month commitment on the Performance Pack at your required speed typically costs 14–16% less per month than the same plan on a monthly basis, while also qualifying for free installation and a free router. Stack that with the referral programme if you know someone else in your building who needs broadband, and the effective monthly cost drops further without needing any code.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular ACT Fibernet Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["ACT Fibernet Coupons", "Broadband Offers", "High-Speed Internet Deals", "Plan Tenure Discounts", "Referral Bonus", "Free Installation", "CouponsCrew Home"].map(tag => (
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
              <h3 className="text-xl font-black text-[#1A1A2E]">Offer Unlocked!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Continue to ACT Fibernet to apply <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code || activeModalCoupon.badge}</span> on your new connection.
              </p>
            </div>

            {/* Code Box */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">
                {activeModalCoupon.code || activeModalCoupon.badge}
              </span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">
                Copied
              </span>
            </div>

            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Confirm serviceability at your address before signing up.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to ACT Fibernet</span>
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
