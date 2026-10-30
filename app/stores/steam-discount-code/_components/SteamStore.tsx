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
import { Coupon, STEAM_COUPONS } from './steamCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://store.steampowered.com/';

export default function SteamStore() {
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

  const coupons: Coupon[] = STEAM_COUPONS;

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
      q: 'How do I use a Steam discount code?',
      a: 'Most Steam discounts are shown directly on the store page during sale events — no code needs to be entered at checkout. Gift cards and wallet codes are redeemed separately under Account > Add Funds.'
    },
    {
      q: 'Can I stack multiple Steam discounts?',
      a: 'Sale discounts, regional pricing, and wallet credit (from selling trading cards) can all combine on a single purchase, but Steam does not support separate stackable promo codes beyond the sale price shown.'
    },
    {
      q: 'Why can\'t I get a Steam refund?',
      a: 'Refunds are only available within 14 days of purchase and under 2 hours of playtime. Games played beyond this window, or purchased outside the eligibility period, are generally not eligible for a standard refund.'
    },
    {
      q: 'Where can I find the best Steam deals?',
      a: 'We keep this Steam store page updated 24/7 with the best discounts, sale events, and upcoming promotional periods.'
    },
    {
      q: 'Is it safe to buy Steam keys from third-party resellers?',
      a: 'Only buy from Steam directly or well-known, reputable resellers. Unofficial key resellers carry a risk of invalid, region-locked, or fraudulently obtained keys — if in doubt, buy directly on store.steampowered.com.'
    },
    {
      q: 'How often are Steam offers updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Steam Discount Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861874/steam-logo_km29t1.webp"
                      alt="Steam Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.7 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Steam Discount Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the latest Steam coupon code and Steam discount code for October 2026 to save on top PC games. Grab 90% OFF The Walking Dead, 90% OFF Killing Floor 2, 75% OFF Red Dead Redemption 2, and 70% OFF Cyberpunk 2077. You'll also find great deals on Total War: WARHAMMER III, Grand Theft Auto V Enhanced, Palworld, and more. Apply eligible Steam coupon codes or discount codes where available and enjoy huge savings on popular action, RPG, strategy, and multiplayer games.
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
                  <span>Visit Steam</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861874/steam-logo_km29t1.webp"
                alt="Steam Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹2,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Steam Deals & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Steam sale events and offers.</p>
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
                          {coupon.badgeType || "OFFER"}
                        </span>
                        <span className="text-sm sm:text-lg lg:text-xl font-black leading-tight tracking-tight my-1.5 text-center">
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
    How to Apply a Steam Discount Code (And What to Use Instead)
  </div>

  <p className="text-xs font-semibold text-[#2C2C40] leading-relaxed mb-4">
    Steam does not have a promo code field at checkout the way Amazon or Myntra do. Discounts on Steam apply in one of three ways:
  </p>

  <div className="space-y-4">
    <div>
      <div className="text-xs font-bold text-[#1A1A2E] mb-2 select-none">
        For sale discounts (automatic):
      </div>
      <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Open store.steampowered.com and find the game you want.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            During an active sale, the discounted price shows directly on the product page with the original price crossed out.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Click Add to Cart, then Purchase for Myself or Purchase as a Gift.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Complete payment — the sale price is applied automatically, no code needed.
          </span>
        </li>
      </ol>
    </div>

    <div>
      <div className="text-xs font-bold text-[#1A1A2E] mb-2 select-none">
        For Steam Wallet gift card codes:
      </div>
      <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Buy a Steam Wallet gift card (denominations: ₹150, ₹250, ₹500, ₹975, ₹1,000, ₹1,680, ₹2,500, ₹5,000) from an authorised Indian retailer.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Log in to Steam, go to your account name in the top-right corner, and select Account Details.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Click Add Funds to Your Steam Wallet, then choose Redeem a Steam Gift Card or Wallet Code.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Enter the code from your gift card and click Continue — the balance is credited immediately.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Use the wallet balance as payment at checkout for any game or DLC.
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            No credit card or UPI is required once your Steam Wallet has funds. Wallet balance can only be spent on Steam content (games, DLC, in-game currency, software) — it cannot be used for hardware or physical items.
          </span>
        </li>
      </ol>
    </div>
  </div>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <div className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Steam Promo Code Not Working? What to Check
  </div>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Steam has no promo code system.</strong> There is no promotional code field on Steam's checkout page for standard game purchases. If you've seen a code listed on a third-party site, it's either a Steam Wallet gift card code (redeemed differently — see above) or a publisher-issued Steam key (redeemed under Games &gt; Activate a Product on Steam, not at checkout). These are different from "coupon codes."
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Publisher Steam keys:</strong> Some games are sold as Steam keys by third-party retailers (Amazon, Flipkart, Humble Bundle). These are full-game activation codes redeemed under your Library &gt; Activate a Product. They're not discounts — they're the game itself sold as a code.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Region-locked keys:</strong> Some Steam keys are region-specific. A key sold for another region may not activate on an India account. Buy keys only from retailers that confirm India compatibility.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Wallet code format:</strong> Steam Wallet codes are typically 15 characters in alphanumeric format. If a "coupon code" you found online is shorter, longer, or in a different format, it's likely not a valid Steam Wallet code.
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
          Steam Coupon Code: How to Save on Games in India (October 2026)
        </p>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Game Title</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Deal Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Original Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Key Highlights</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">The Walking Dead</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">90% Off</td>
        <td className="p-3.5 font-bold">₹200</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,000</td>
        <td className="p-3.5">Award-winning narrative zombie adventure in Robert Kirkman's universe</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Styx: Master of Shadows</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">90% Off</td>
        <td className="p-3.5 font-bold">₹119</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,199</td>
        <td className="p-3.5">Stealth-focused gameplay; Daily Deal available until 7 November</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Killing Floor 2</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">90% Off</td>
        <td className="p-3.5 font-bold">₹72</td>
        <td className="p-3.5 text-gray-500 line-through">₹729</td>
        <td className="p-3.5">Action-packed co-op wave survival; Daily Deal until 7 November</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Total War: WARHAMMER III</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">85% Off</td>
        <td className="p-3.5 font-bold">$8.99</td>
        <td className="p-3.5 text-gray-500 line-through">$59.99</td>
        <td className="p-3.5">Large-scale RTS strategy battles with multiple factions</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Airborne Kingdom</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">80% Off</td>
        <td className="p-3.5 font-bold">₹219</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,099</td>
        <td className="p-3.5">Build and manage a flying city; Daily Deal ends 7 November</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Red Dead Redemption 2</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">75% Off</td>
        <td className="p-3.5 font-bold">$14.99</td>
        <td className="p-3.5 text-gray-500 line-through">$59.99</td>
        <td className="p-3.5">Expansive open-world Wild West action & story-rich gameplay</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Cyberpunk 2077</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">70% Off</td>
        <td className="p-3.5 font-bold">₹899</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,999</td>
        <td className="p-3.5">Futuristic open-world action RPG set in Night City</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Dead by Daylight</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">60% Off</td>
        <td className="p-3.5 font-bold">$7.99</td>
        <td className="p-3.5 text-gray-500 line-through">$19.99</td>
        <td className="p-3.5">Asymmetrical multiplayer horror matches (Killer vs Survivors)</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Grand Theft Auto V Enhanced</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹1,249</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,499</td>
        <td className="p-3.5">Includes Legacy Edition & Criminal Enterprise Starter Pack (until 5 Nov)</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Palworld</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30% Off</td>
        <td className="p-3.5 font-bold">$20.99</td>
        <td className="p-3.5 text-gray-500 line-through">$29.99</td>
        <td className="p-3.5">Open-world survival, creature collecting, crafting & battling</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Over the Hill</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">20% Off</td>
        <td className="p-3.5 font-bold">₹919</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,149</td>
        <td className="p-3.5">Introductory launch offer (ended 28 October)</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Moon Sweepers</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">15% Off</td>
        <td className="p-3.5 font-bold">₹398</td>
        <td className="p-3.5 text-gray-500 line-through">₹469</td>
        <td className="p-3.5">Introductory launch offer (ends 30 October); bundles available</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Enshrouded</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">10% Off</td>
        <td className="p-3.5 font-bold">₹1,619</td>
        <td className="p-3.5 text-gray-500 line-through">₹1,799</td>
        <td className="p-3.5">Introductory launch discount (ended 29 October)</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Steam coupon code is a promo code applied at checkout on store.steampowered.com to reduce the price of a game, DLC, or software. Steam is different from most online stores: Valve does not release affiliate promo codes or partner discount codes. The way to save on Steam is through seasonal sales (discounts of 10–95% on individual games), Steam Wallet gift cards (prepaid credit sold at slight discounts from authorised Indian retailers), and India's INR regional pricing, which is 35–45% below the global price on most titles. Right now: Steam Scream V Fest — horror and Halloween game discounts — begins October 26, 2026.
          </p>

          <hr className="my-10 border-gray-200" />

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Coupon Codes — October 2026
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Code</th>
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">No affiliate codes available</td>
            <td className="p-4">—</td>
            <td className="p-4">Steam does not release promo codes through affiliate partners</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <em>Dev note (EEAT):</em> Steam (Valve) does not use an affiliate coupon programme. Codes listed on third-party coupon sites for Steam are typically recycled, unverifiable, or region-locked publisher keys — not official Steam store codes. Do not list unverified codes. The sale calendar and wallet card method below are the legitimate saving routes for Indian buyers.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Scream V Fest: October 26 – November 2, 2026
    </p>

    <p>
      Steam Scream V Fest is Steam's annual Halloween gaming event — horror, survival, and Halloween-themed game discounts up to 95% off, running for 8 days. It starts this Sunday, October 26, at 10:00 AM Pacific (10:30 PM IST), and ends November 2.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      What to expect:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Discounts of 10–95% on horror, survival horror, psychological thriller, and Halloween-themed titles.
      </li>
      <li>
        Developer-set discounts — each game's publisher sets the sale price, so discounts vary significantly by title.
      </li>
      <li>
        Horror games with "horror" tagged on their Steam store page are featured; some genres adjacent to horror (action RPG, walking simulators, dark atmosphere) may also be included at developer discretion.
      </li>
      <li>
        Festival page on Steam's front page surfaces curated picks and themed lists.
      </li>
    </ul>

    <p className="mt-4">
      <strong>Strategy for Scream Fest:</strong> Add horror games to your wishlist before October 26 (instructions in the Wishlist section below). When the fest starts, check which wishlisted games are on sale — you'll see the discounted price immediately on your wishlist page.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Sale Calendar: All 2026 and 2027 Sale Dates
    </p>

    <p>
      Steam runs major sitewide sales four times a year and smaller themed fests throughout. Here's the full confirmed schedule:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Event</th>
            <th className="p-4 font-bold">Start</th>
            <th className="p-4 font-bold">End</th>
            <th className="p-4 font-bold">What's Discounted</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Steam Autumn Sale 2026</td>
            <td className="p-4">Oct 1</td>
            <td className="p-4">Oct 8</td>
            <td className="p-4">Sitewide — all genres</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Steam Next Fest (Oct)</td>
            <td className="p-4">Oct 19</td>
            <td className="p-4">Oct 26</td>
            <td className="p-4">Free demos only — no purchases</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Steam Scream V Fest</td>
            <td className="p-4">Oct 26</td>
            <td className="p-4">Nov 2</td>
            <td className="p-4">Horror + Halloween games</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Steam Winter Sale 2026</td>
            <td className="p-4">Dec 17</td>
            <td className="p-4">Jan 4, 2027</td>
            <td className="p-4">Sitewide — biggest sale of the year</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Steam Spring Sale 2027</td>
            <td className="p-4">Mar 18</td>
            <td className="p-4">Mar 25</td>
            <td className="p-4">Sitewide</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Steam Summer Sale 2027</td>
            <td className="p-4">Jun 24</td>
            <td className="p-4">Jul 8</td>
            <td className="p-4">Sitewide — second-biggest sale</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Steam Autumn Sale 2027</td>
            <td className="p-4">Oct 1</td>
            <td className="p-4">Oct 8</td>
            <td className="p-4">Sitewide</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Steam Winter Sale 2027</td>
            <td className="p-4">Dec 16</td>
            <td className="p-4">Jan 3, 2028</td>
            <td className="p-4">Sitewide</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>The three sales worth waiting for:</strong> Winter Sale (December) consistently has the deepest discounts on popular titles. Summer Sale (June) is the other flagship event. Scream Fest (October) is the best time to buy horror and survival games.
    </p>

    <p>
      <em>Source:</em> Valve's published event calendar confirmed via Sports Digest (October 2026) and Dundle Steam sale guide. Dates are subject to change — verify on store.steampowered.com.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam India Pricing: Why INR Prices Are Cheaper
    </p>

    <p>
      Steam uses regional pricing — game prices in India (INR) are lower than what buyers in the US, UK, or EU pay for the same titles. This is not a discount or promo; it's how Valve has structured its pricing to make PC gaming accessible across different economies.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Typical INR vs global pricing gap:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Most games are priced at roughly 35–45% below the global (USD) equivalent when converted.
      </li>
      <li>
        On a game priced at $60 globally (~₹5,000), the India INR price is often ₹2,799–₹3,299.
      </li>
      <li>
        During a 50% sale, that becomes ₹1,399–₹1,649 — less than half what a US buyer would pay even on sale.
      </li>
      <li>
        This regional discount applies automatically when you use a Steam account registered in India with an Indian payment method (or Indian Steam Wallet balance). You don't need a code or any special action — just buy from your India account.
      </li>
    </ul>

    <p className="mt-4">
      <strong>Important 2026 update:</strong> In January 2026, Valve raised Indian Steam prices by approximately 15–20% across most titles, citing currency adjustments. India still has regional pricing, but the gap with global prices is slightly narrower than it was in 2024–2025. Games that cost ₹999 in 2024 may now be ₹1,149–₹1,199. This is worth knowing if you're comparing current prices with older screenshots or discussions.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Wallet Gift Cards in India: Where to Buy and What They Cost
    </p>

    <p>
      Steam Wallet gift cards work like prepaid credit. You buy a card, redeem the code, and the balance sits in your Steam account ready to spend on any game, DLC, or software. No credit card linking is required.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Card Value</th>
            <th className="p-4 font-bold">Typical Retail Price</th>
            <th className="p-4 font-bold">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">₹150</td>
            <td className="p-4">~₹145</td>
            <td className="p-4">Entry-level; covers cheapest indie titles</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">₹250</td>
            <td className="p-4">~₹242</td>
            <td className="p-4">Good for sale games priced ₹99–₹249</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">₹500</td>
            <td className="p-4">~₹484</td>
            <td className="p-4">Mid-range indie games</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">₹975</td>
            <td className="p-4">~₹945</td>
            <td className="p-4">Covers most AA titles on sale</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">₹1,000</td>
            <td className="p-4">~₹969</td>
            <td className="p-4">Slight discount from some sellers</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">₹1,680</td>
            <td className="p-4">~₹1,628</td>
            <td className="p-4">Targets games in the ₹1,499–₹1,680 range</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">₹2,500</td>
            <td className="p-4">~₹2,422</td>
            <td className="p-4">Good for multiple purchases or one premium game</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">₹5,000</td>
            <td className="p-4">~₹4,845</td>
            <td className="p-4">Highest denomination; for multiple titles or DLC</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Where to buy in India:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Amazon India:</strong> Digital codes delivered by email; some denominations available.</li>
      <li><strong>Flipkart:</strong> Occasional availability; check for bank card offers that stack.</li>
      <li><strong>Rooter Shop:</strong> Digital delivery, accepting UPI and cards.</li>
      <li><strong>Game retail stores:</strong> Some physical gaming and electronics stores stock physical Steam cards.</li>
      <li><strong>Bitrefill:</strong> International service accepting crypto; multiple INR denominations.</li>
    </ul>

    <p className="mt-4">
      The 3–3.3% discount from authorised sellers is modest, but it's more than zero — and it lets you buy Steam games without a credit card or without exposing your card to an international merchant.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The Wishlist Trick: Get Notified When Your Games Go on Sale
    </p>

    <p>
      Steam emails you when a game on your wishlist has its price reduced — including during seasonal sales and themed fests. This is the most reliable way to buy games at minimum price without having to check Steam manually.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How to use it:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>Go to any game's store page on Steam and click Add to Wishlist (the heart icon).</li>
      <li>Make sure your Steam account email is verified and receiving notifications — check under Account Details &gt; Notification Preferences.</li>
      <li>When that game goes on sale at any point, Steam emails you within a few hours of the discount going live.</li>
      <li>Click through to the sale page, add to cart, and buy.</li>
    </ol>

    <p className="mt-4">
      <strong>Build the wishlist over time:</strong> Add games when you first hear about them, then don't buy at full price. During the Winter Sale and Summer Sale, a significant portion of Steam's catalogue goes on discount — wishlist items that were full price for months suddenly become affordable.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Next Fest: Free Demos Without Buying Anything
    </p>

    <p>
      Steam Next Fest (running October 19–26, ending today) is not a sale — it's a period where developers release free, time-limited demos of upcoming or recently released games. There's no spending involved.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Why it's relevant to buyers:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>Try games before buying — especially for genre-uncertain purchases.</li>
      <li>Demos can reveal whether a game runs well on your PC before you spend money.</li>
      <li>Some demos persist after Next Fest ends; many are removed.</li>
      <li>Wishlisting a demo game gives you a sale notification when that title eventually launches or discounts.</li>
    </ul>

    <p className="mt-4">
      Next Fest is separate from the sale events in the calendar above. During Next Fest, full-game prices are not typically reduced — it's specifically about playable demos.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam Points Shop: What It Is and What It Isn't
    </p>

    <p>
      The Steam Points Shop is a separate section of Steam where you earn points by spending money on Steam (100 points per ₹1 spent approximately), and redeem them for cosmetic items — animated backgrounds, profile picture frames, mini-game profile items, and stickers.
    </p>

    <p>
      <strong>What Points can buy:</strong> Profile cosmetics, chat stickers, keyboard themes, animated game artwork for your profile.
    </p>

    <p>
      <strong>What Points cannot buy:</strong> Full games, DLC, in-game currency, or anything with gameplay value.
    </p>

    <p>
      Points do not function like a cashback or loyalty programme that reduces future purchase prices. They're purely cosmetic rewards. If you're looking for a way to reduce what you pay for games, the sale calendar and Wallet cards are the mechanisms — not Points.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Steam vs Epic Games Store vs GOG: Which Platform Is Right for You?
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">Steam</th>
            <th className="p-4 font-bold">Epic Games Store</th>
            <th className="p-4 font-bold">GOG</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Game library</td>
            <td className="p-4">Largest (~50,000+ titles)</td>
            <td className="p-4">Smaller but growing</td>
            <td className="p-4">Curated (~10,000 titles)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Free games</td>
            <td className="p-4">None (demos only via Next Fest)</td>
            <td className="p-4">Weekly free games (ongoing; 662M claimed in 2025)</td>
            <td className="p-4">Occasional giveaways</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">DRM</td>
            <td className="p-4">Mixed — most games need Steam client; publishers may add Denuvo</td>
            <td className="p-4">Launcher required for all titles</td>
            <td className="p-4">DRM-free by policy — install and play offline forever</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Refund window</td>
            <td className="p-4">14 days, under 2 hours played</td>
            <td className="p-4">14 days, under 2 hours played</td>
            <td className="p-4">Up to 30 days</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">India INR pricing</td>
            <td className="p-4">Yes — regional pricing active</td>
            <td className="p-4">Yes</td>
            <td className="p-4">Yes</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Sale frequency</td>
            <td className="p-4">4 major sales/year + themed fests</td>
            <td className="p-4">Occasional; less predictable</td>
            <td className="p-4">Occasional</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Offline play</td>
            <td className="p-4">Possible on many titles; not guaranteed</td>
            <td className="p-4">Generally requires launcher</td>
            <td className="p-4">Always offline — key differentiator</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">India UPI payment</td>
            <td className="p-4">Via wallet or debit card</td>
            <td className="p-4">Via debit card</td>
            <td className="p-4">Via debit/credit card</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Pick Steam if:</strong> You want the widest game selection, community features (reviews, workshop, trading cards), and regular predictable sales. Almost every major PC game releases on Steam.
    </p>

    <p>
      <strong>Pick Epic if:</strong> You want to play a specific Epic exclusive (Fortnite, some timed exclusives), or you want to collect free weekly games that can add up significantly over time.
    </p>

    <p>
      <strong>Pick GOG if:</strong> You want to own your games permanently with no DRM, play offline without a client running, or have a 30-day return window. GOG's library is smaller but its DRM-free model is unmatched.
    </p>

    <p className="mt-4">
      Many PC gamers use all three: Steam for the library, Epic for free weekly titles, GOG for classic games and DRM-free versions of titles available on both.
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
                Does Steam have coupon codes in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Steam does not release affiliate promo codes or coupon codes for games. The platform's discount system works entirely through seasonal sales (where individual game prices drop by up to 95%) and the Steam Wallet gift card programme. There is no code field at checkout for game purchases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                When is the next Steam sale in 2026?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The next major Steam event is Steam Scream V Fest (horror game sale), starting October 26, 2026 and running through November 2. The next sitewide sale after that is the Steam Winter Sale, from December 17, 2026 to January 4, 2027.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How much cheaper is Steam in India compared to USA?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                India's INR pricing is typically 35–45% below the global price on most titles. After Valve's January 2026 price revision, some games are 10–20% higher than they were in 2024, but India still has meaningful regional pricing benefits. The full discount is calculated at checkout automatically when you buy from an India-registered account.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use UPI to buy games on Steam in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Steam accepts UPI payments in India. You can add it as a payment method on your account, or use a Steam Wallet balance funded by a Wallet gift card if you prefer not to link a card or UPI directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the Steam Scream Fest and when does it start?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Steam Scream V Fest is Steam's annual horror gaming sale event. It starts October 26, 2026 at 10:00 AM Pacific (10:30 PM IST) and runs until November 2, 2026. Discounts on horror, survival, and Halloween-themed games can reach up to 95% off.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            For Indian Steam buyers, the combination of INR regional pricing and the seasonal sale calendar delivers the best savings — no code required. A game at ₹2,799 INR normal price may cost ₹699 or less during a 75% Winter Sale discount, which is a fraction of what a US buyer would pay even with a hypothetical coupon code. The real Steam discount strategy is patience: add games to your wishlist in October, wait for the Winter Sale in December, and let Steam email you when the price drops.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Steam Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Steam Sales", "Regional Pricing India", "Steam Wallet", "Winter Sale Deals", "Steam Scream Fest", "PC Gaming Offers", "CouponsCrew Home"].map(tag => (
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
              <h3 className="text-xl font-black text-[#1A1A2E]">Deal Unlocked!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Continue to Steam to grab <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code || activeModalCoupon.badge}</span> before the sale ends.
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
              <span>Remember the 14-day / 2-hour refund window if you're unsure.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Steam</span>
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
