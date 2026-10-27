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
import { Coupon, GNC_COUPONS } from './gncCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.gnc.in/';

export default function GncStore() {
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

  const coupons: Coupon[] = GNC_COUPONS;

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
      q: 'How do I use a GNC coupon code?',
      a: '[TODO: how-to answer specific to GNC checkout flow]'
    },
    {
      q: 'Can I use multiple coupon codes on GNC?',
      a: '[TODO: stacking rules specific to GNC]'
    },
    {
      q: 'Why is my GNC promo code not working?',
      a: '[TODO: common reasons a code might fail on GNC]'
    },
    {
      q: 'Where can I find the best GNC offers?',
      a: 'We keep this GNC store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does GNC offer free shipping?',
      a: '[TODO: GNC free shipping policy/threshold details]'
    },
    {
      q: 'How often are GNC coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">GNC Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/gnc-logo_zomdem.webp"
                      alt="GNC Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">GNC Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    [TODO: 1-2 sentence hero description — what GNC sells (whey protein, vitamins, health supplements) and the headline savings claim]
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
                  <span>Visit GNC</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792257427/gnc-logo_zomdem.webp"
                alt="GNC Offers"
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">GNC Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified GNC coupon codes & offers.</p>
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
                GNC First Order Coupon Code
              </h2>

              <p className="text-xs font-semibold text-[#4A4A6A] leading-relaxed mb-4">
                For a first order on gncindia.com, GNCFIRST gives ₹150 off a prepaid order — note that it applies to pre-paid payment only (UPI, card, net banking), not cash on delivery. The code is specifically for new accounts that have not placed an order on GNC India before.
              </p>

              <p className="text-xs font-bold text-[#2C2C40] mb-3">
                If GNCFIRST is expired or doesn't apply, the next best first-order route:
              </p>

              <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Use GET10 for a flat 10% off with no minimum — valid sitewide, no new-user restriction.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Download the GNC India app and apply APP300 on a cart above ₹1,899 — saves ₹300 vs the ₹150 from GNCFIRST.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Stack either with a MobiKwik cashback at checkout (₹750 cashback on orders above ₹3,999 with code MBK750).
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    For a first supplement purchase, the GET10 + MobiKwik cashback stack often saves more than GNCFIRST on its own — especially on bundles above ₹3,999.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
              <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                How to Apply a GNC Discount Code
              </h2>

              <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Go to gncindia.com and add products to your cart.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    On the cart or checkout page, look for the "Have a coupon code?" or "Apply promo code" field.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Type or paste your GNC coupon code exactly as listed — codes are case-sensitive.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    Click Apply and confirm the saving appears in your order total before proceeding to payment.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    If you have MobiKwik or CRED Pay linked, apply any cashback offer at the payment step — these are separate from the discount code and can sometimes add on top.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <span className="text-[#2C2C40]">
                    App orders: Codes APP300 and APP150 are only valid when ordering through the GNC India mobile app. The app price is the same as the website, but app-only codes give you an extra flat saving unavailable on desktop.
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
                GNC Coupon Code: Save on Protein, Creatine, and Supplements in India
              </p>

              <div className="text-gray-600 font-normal leading-relaxed space-y-6">
                <p>
                  A GNC coupon code is a discount code you apply at checkout on gncindia.com to reduce the price of protein powders, creatine, multivitamins, pre-workout, and other supplements. GNC India runs codes through affiliate partners and seasonal sale campaigns — current codes (October 2026) include a first-order flat saving, sitewide percentage codes, and app-exclusive offers that stack on top of ongoing category discounts that go as deep as 70–80%.
                </p>

                <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
                  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
                    <caption className="sr-only">GNC Offers and Discount List</caption>
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
                          offerType: 'SAVE 80%',
                          discount: '₹499 (80% OFF)',
                          highlights: 'Creatine Monohydrate (100g unflavoured) with Silver Shaker bottle.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 59%',
                          discount: '₹849 (59% OFF)',
                          highlights: '100% Whey Protein Vanilla Cream travel sachets with Black Shaker.',
                          eligibility: 'First-Time & Fitness Users'
                        },
                        {
                          offerType: 'SAVE 57%',
                          discount: '₹899 (57% OFF)',
                          highlights: 'Fruit Punch Pre-Workout for high-intensity training sessions during GOAT Sale.',
                          eligibility: 'GOAT Sale Offer'
                        },
                        {
                          offerType: 'SAVE 56%',
                          discount: '₹1,949 (56% OFF)',
                          highlights: '3KG Weight Gainer (Double Chocolate) with durable steel shaker bottle.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 53%',
                          discount: '₹699 (53% OFF)',
                          highlights: '1KG Pro Performance Weight Gainer (Double Chocolate flavor) under GOAT Sale.',
                          eligibility: 'Limited Time'
                        },
                        {
                          offerType: 'SAVE 50%',
                          discount: '₹1,599 (50% OFF)',
                          highlights: '2 lb Chocolate Fermented Yeast Protein Isolate for plant-based nutrition.',
                          eligibility: 'Vegetarians'
                        },
                        {
                          offerType: 'SAVE 44%',
                          discount: '₹6,499 (44% OFF)',
                          highlights: 'Large 4 lb Chocolate Supreme Pro Performance Whey Protein pack.',
                          eligibility: 'Frequent Gym-Goers'
                        },
                        {
                          offerType: 'BUY 3 FOR ₹1,499',
                          discount: '₹1,499 Flat',
                          highlights: 'Mix and match any 3 selected wellness products from 16 eligible items.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'SAVE 28%',
                          discount: '₹679 (28% OFF)',
                          highlights: '60-tablet Sport Multivitamin bottle for everyday nutritional support.',
                          eligibility: 'GOAT Sale Price'
                        },
                        {
                          offerType: 'SAVE 25%',
                          discount: '₹899 (25% OFF)',
                          highlights: 'Mega Men 50+ Multivitamin vegetarian formula for daily wellness.',
                          eligibility: 'Men Aged 50+'
                        },
                        {
                          offerType: 'PROTEIN OFFERS',
                          discount: 'Up to 30% OFF',
                          highlights: 'Save up to 30% across selected GNC protein supplements for different fitness goals.',
                          eligibility: 'Eligible Products'
                        },
                        {
                          offerType: 'COMBO DEALS',
                          discount: 'Up to 30% OFF',
                          highlights: 'Save up to 30% on selected health and fitness combo packs.',
                          eligibility: 'All Users'
                        },
                        {
                          offerType: 'WEIGHT GAINERS',
                          discount: 'Up to 30% OFF',
                          highlights: 'Save up to 30% on selected weight gain supplements across pack sizes.',
                          eligibility: 'Eligible Products'
                        },
                        {
                          offerType: 'WOMEN\'S WELLNESS',
                          discount: 'Up to 30% OFF',
                          highlights: 'Save up to 30% on Women\'s Wellness health and lifestyle supplements.',
                          eligibility: 'Promotional Sale'
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
                  GNC Coupon Codes — October 2026
                </p>

                {/* Data Table */}
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white">
                        <th className="p-4 font-bold">Code</th>
                        <th className="p-4 font-bold">Offer</th>
                        <th className="p-4 font-bold">Min. Cart</th>
                        <th className="p-4 font-bold">Where It Works</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                      <tr>
                        <td className="p-4 font-semibold">GNCFIRST</td>
                        <td className="p-4">₹150 off first prepaid order</td>
                        <td className="p-4">~₹2,399</td>
                        <td className="p-4">Website + App (new users)</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">GET10</td>
                        <td className="p-4">10% off</td>
                        <td className="p-4">No minimum</td>
                        <td className="p-4">Sitewide</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">GNC200</td>
                        <td className="p-4">Flat ₹200 off</td>
                        <td className="p-4">₹2,199</td>
                        <td className="p-4">Sitewide</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">SAVE200</td>
                        <td className="p-4">Flat ₹200 off</td>
                        <td className="p-4">₹2,100</td>
                        <td className="p-4">Sitewide</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">GRABON5</td>
                        <td className="p-4">Extra 5% off</td>
                        <td className="p-4">No minimum</td>
                        <td className="p-4">Sitewide</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">APP300</td>
                        <td className="p-4">Flat ₹300 off</td>
                        <td className="p-4">₹1,899</td>
                        <td className="p-4">App only</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">APP150</td>
                        <td className="p-4">Extra ₹150 off</td>
                        <td className="p-4">₹999</td>
                        <td className="p-4">App only</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-4 font-semibold">GNC33</td>
                        <td className="p-4">% off</td>
                        <td className="p-4">No minimum</td>
                        <td className="p-4">Fitness and wellness</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold">MERCH5</td>
                        <td className="p-4">5% off</td>
                        <td className="p-4">No minimum</td>
                        <td className="p-4">Apparel and accessories</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div className="space-y-4 text-slate-700">
                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      GNC Promo Code Not Working? What to Check First
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Prepaid requirement:</strong> GNCFIRST requires a prepaid payment method. If you selected COD, the code will fail. Switch to UPI or card.
                      </li>
                      <li>
                        <strong>App codes on desktop:</strong> APP300 and APP150 only work through the GNC India app. Using them at the desktop site returns an error.
                      </li>
                      <li>
                        <strong>Minimum cart not met:</strong> SAVE200 needs ₹2,100 and GNC200 needs ₹2,199 — amounts that look similar but are different codes. Double-check your cart total.
                      </li>
                      <li>
                        <strong>Already-discounted products:</strong> Products at 70%+ off sometimes exclude additional code stacking. The checkout page will show a "code not applicable" message.
                      </li>
                      <li>
                        <strong>Expired code:</strong> GNC India campaign codes typically run for 2–4 weeks. Codes from October campaigns expire by month-end — check CouponsCrew's GNC page for live replacements.
                      </li>
                    </ul>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      GNC Freebie Threshold Guide
                    </p>

                    <p>
                      GNC India runs a tiered freebie system where a higher cart total earns a free product — no code needed, added automatically at checkout. Here are the thresholds based on current offers:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Cart Value</th>
                            <th className="p-4 font-bold">What You Get</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">₹799+</td>
                            <td className="p-4">Free shipping (pan India)</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">₹2,999+</td>
                            <td className="p-4">Free product (Tier 1 — typically a sample or small unit)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">₹3,499+</td>
                            <td className="p-4">Free product (Tier 2)</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">₹4,999+</td>
                            <td className="p-4">Free product (Tier 3 — larger supplement or combo)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">₹6,499+</td>
                            <td className="p-4">Free product (Tier 4 — premium freebie bundle)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      If your cart is close to a threshold, adding a lower-priced item — a GNC creatine sachet (from ₹469), a protein bar, or a shaker — can push it over the line and get you a freebie that costs more than the add-on.
                    </p>

                    <p>
                      <em>Dev note:</em> Freebie tier thresholds sourced from Zoutons GNC page (October 2026). Verify against GNC India's live offers page before publishing; specific freebie products rotate with campaigns.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      GNC PRO Access: How GNC's Loyalty Programme Works
                    </p>

                    <p>
                      GNC PRO Access is GNC's membership programme, available in India through GNC India. Members get early access to deals, exclusive member prices, and additional savings that non-members don't see. The programme is sometimes listed as "myGNC Rewards" — these refer to the same loyalty structure.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      Key things to know:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Member-only prices are shown when you sign in before browsing — they appear as a separate, lower price alongside the standard listed price.
                      </li>
                      <li>
                        PRO Access savings stack differently from coupon codes — the member price is the baseline, and a coupon code is then applied on top of that (subject to the code's stacking rules).
                      </li>
                      <li>
                        Signing up for GNC India's newsletter or creating an account on gncindia.com is the starting point for loyalty savings — no annual fee model is listed for India at the time of writing.
                      </li>
                    </ul>

                    <p>
                      <em>Dev note (EEAT):</em> GNC PRO Access terms in India may differ from the US GNC PRO membership (which has a paid tier). Verify the India-specific programme details at gncindia.com/loyalty or equivalent before publishing.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Is GNC the Same as Guardian? The India Connection Explained
                    </p>

                    <p>
                      GNC (General Nutrition Centers) is an American sports nutrition and supplement brand founded in 1935 in Pittsburgh, Pennsylvania. It is one of the largest supplement retail brands globally.
                    </p>

                    <p>
                      Guardian Health &amp; Beauty is GNC's authorised operating partner for India. In India, GNC products are sold through the gncindia.com website, operated under the Guardian brand partnership. This is why some searches for "Guardian GNC coupon code" or "Guardian supplement code India" surface GNC India pages — they are the same store.
                    </p>

                    <p className="text-lg font-bold text-[#2C2C40] mt-6">
                      Key points:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        GNC India (gncindia.com) and GNC US (gnc.com) are different storefronts — codes from one will not work on the other.
                      </li>
                      <li>
                        Products on GNC India may have different SKUs, bundle sizes, and pricing from GNC US.
                      </li>
                      <li>
                        Shipping from GNC US to India is not offered — gncindia.com ships only within India.
                      </li>
                      <li>
                        If you found a GNC US code online (common on US affiliate sites), it will not apply at gncindia.com checkout.
                      </li>
                    </ul>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      GNC India vs MuscleBlaze vs HealthKart: Which Supplement Store to Buy From?
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Feature</th>
                            <th className="p-4 font-bold">GNC India</th>
                            <th className="p-4 font-bold">MuscleBlaze</th>
                            <th className="p-4 font-bold">HealthKart</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Brand type</td>
                            <td className="p-4">International brand (US, 1935), India-operated</td>
                            <td className="p-4">Indian D2C supplement brand</td>
                            <td className="p-4">Multi-brand supplement marketplace</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Products</td>
                            <td className="p-4">Own-brand GNC line: protein, creatine, vitamins, women's wellness, fat burners</td>
                            <td className="p-4">Own-brand: whey protein, mass gainers, creatine, BCAA</td>
                            <td className="p-4">Stocks 100+ brands including GNC, MuscleBlaze, MyProtein, Optimum Nutrition</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Price range</td>
                            <td className="p-4">Mid to premium</td>
                            <td className="p-4">Budget to mid-range</td>
                            <td className="p-4">Varies by brand; own HK brand is budget</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Coupon codes</td>
                            <td className="p-4">Yes — affiliate codes, app-only deals, bank offers</td>
                            <td className="p-4">Yes — frequent sale codes</td>
                            <td className="p-4">Yes — extensive bank offer tie-ups</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Bank/UPI offers</td>
                            <td className="p-4">MobiKwik, CRED Pay cashback</td>
                            <td className="p-4">HDFC, ICICI, SBI card offers</td>
                            <td className="p-4">Very wide bank offer ecosystem</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Freebies</td>
                            <td className="p-4">Tiered (₹2,999 / ₹3,499 / ₹4,999 / ₹6,499)</td>
                            <td className="p-4">Bundle freebies on high-value orders</td>
                            <td className="p-4">Depends on brand/seller</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Free shipping</td>
                            <td className="p-4">₹799+</td>
                            <td className="p-4">₹599+ (varies)</td>
                            <td className="p-4">₹499+ (varies by seller)</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">International brand access</td>
                            <td className="p-4">GNC's own products</td>
                            <td className="p-4">MuscleBlaze own range only</td>
                            <td className="p-4">Yes — stocks international brands</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Protein price entry</td>
                            <td className="p-4">From ₹469 (creatine); protein from higher</td>
                            <td className="p-4">Budget whey from ~₹600</td>
                            <td className="p-4">Varies; budget options available</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      GNC India is the right choice when you want specifically GNC-brand products — AMP Gold Series, GNC Pro Performance, or GNC Mega Men Multivitamins. HealthKart is better if you're comparing across brands (GNC vs Optimum Nutrition vs MuscleBlaze) in one order. MuscleBlaze competes directly with GNC on protein price and quality for Indian buyers who don't have a brand preference.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      Bank and Payment Offers on GNC India
                    </p>

                    <p>
                      Beyond coupon codes, GNC India runs cashback and instant discount offers through payment partners:
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Payment Method</th>
                            <th className="p-4 font-bold">Offer</th>
                            <th className="p-4 font-bold">Min. Cart</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">MobiKwik (code: MBK750)</td>
                            <td className="p-4">₹750 cashback</td>
                            <td className="p-4">₹3,999</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">MobiKwik (code: MBK1500)</td>
                            <td className="p-4">₹1,500 cashback</td>
                            <td className="p-4">₹3,999</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">CRED Pay</td>
                            <td className="p-4">₹500 cashback</td>
                            <td className="p-4">Check CRED app for terms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      MobiKwik cashback is credited to your MobiKwik wallet after the order is delivered — not an instant discount at checkout. The ₹1,500 option and ₹750 option both require ₹3,999 minimum; check which is live in your MobiKwik wallet offer section before applying.
                    </p>

                    <p>
                      <em>Dev note:</em> Bank/payment offers sourced from Zoutons GNC page (October 2026). These offers change monthly — verify before publishing.
                    </p>

                    <hr className="my-6 border-slate-200" />

                    <p className="text-xl font-black text-[#5B4FBE] mb-4">
                      What GNC India Sells: Products and Price Ranges
                    </p>

                    <div className="overflow-x-auto my-8">
                      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                        <thead>
                          <tr className="bg-[#5B4FBE] text-white">
                            <th className="p-4 font-bold">Category</th>
                            <th className="p-4 font-bold">Key Products</th>
                            <th className="p-4 font-bold">Price Range</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                          <tr>
                            <td className="p-4 font-semibold">Whey Protein</td>
                            <td className="p-4">AMP Gold Series, Pro Performance Whey, plant protein</td>
                            <td className="p-4">₹1,499–₹6,499</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Creatine</td>
                            <td className="p-4">GNC Pro Performance Creatine, monohydrate</td>
                            <td className="p-4">₹469–₹1,999</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Mass Gainers</td>
                            <td className="p-4">Weight gainer, serious mass style products</td>
                            <td className="p-4">₹1,679–₹5,499</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Multivitamins</td>
                            <td className="p-4">Mega Men, Women's Ultra Mega, fish oil, omega-3</td>
                            <td className="p-4">₹599–₹2,499</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Pre-Workout</td>
                            <td className="p-4">Pre-workout powders, intra-workout, HydraRush</td>
                            <td className="p-4">₹799–₹3,499</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Fat Burners</td>
                            <td className="p-4">Weight management, appetite control</td>
                            <td className="p-4">₹999–₹3,499</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-semibold">Women's Wellness</td>
                            <td className="p-4">Women's multivitamins, collagen, marine collagen</td>
                            <td className="p-4">₹599–₹3,499</td>
                          </tr>
                          <tr className="bg-gray-50/50">
                            <td className="p-4 font-semibold">Snacks and Shakers</td>
                            <td className="p-4">Protein bars, protein snacks, shaker bottles</td>
                            <td className="p-4">₹59–₹999</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      <em>Dev note:</em> Price ranges are approximate based on GrabOn category data (October 2026). Flag for auto-pull from gncindia.com product feed before publishing.
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
                      What is the GNC coupon code for first order in India?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GNCFIRST gives ₹150 off your first prepaid order on GNC India (gncindia.com). For a potentially larger saving, GET10 gives 10% off with no minimum and no new-user restriction — or download the GNC India app and use APP300 for ₹300 off on a cart above ₹1,899.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Is GNC India and Guardian the same?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — Guardian Health & Beauty is GNC's authorised operating partner in India. GNC India products are sold through gncindia.com under this partnership. The stores are the same for Indian shoppers. However, GNC US (gnc.com) is a separate storefront — US coupon codes do not work on gncindia.com.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does GNC India offer free shipping?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — GNC India offers free shipping on orders above ₹799 across India. Orders below ₹799 carry a standard delivery charge.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      What is the GNC PRO Access loyalty programme?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      GNC PRO Access (also called myGNC Rewards) is GNC's loyalty programme giving members exclusive prices, early access to sales, and additional savings. In India, signing up on gncindia.com gives you access to member-only prices shown when you browse while signed in. The exact current benefits are available on the GNC India loyalty page.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Can I use a US GNC coupon code on GNC India?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. GNC US (gnc.com) and GNC India (gncindia.com) are separate platforms with different checkout systems. A US coupon code will not apply at GNC India checkout, and GNC India codes will not work on gnc.com.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <p className="font-black text-black text-base">
                      Does GNC India sell creatine?
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Yes — GNC India's creatine range includes GNC Pro Performance Creatine Monohydrate, starting from around ₹469 for smaller units. Creatine is one of GNC India's highest-discounted categories, with deals going up to 70% off during sale periods.
                    </p>
                  </div>

                </div>

                <hr className="my-10 border-gray-200" />

                <p>
                  GNC India's best-value approach combines two moves: bring your cart above a freebie threshold (₹2,999 or ₹4,999 are the natural stopping points) and stack a sitewide code (GET10 or GRABON5) with a MobiKwik cashback offer if your cart crosses ₹3,999. That combination — freebie product + percentage discount + wallet cashback — gives a total effective saving well above any single coupon code on its own.
                </p>

              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
                  Popular GNC Searches
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["GNC Coupons", "Protein Powder Offers", "Creatine Deals", "Multivitamin Discounts", "App Exclusive Offers", "PRO Access Rewards", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at GNC checkout for instant discounts.
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
                <span>Continue to GNC</span>
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
