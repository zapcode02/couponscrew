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
import { Coupon, SKECHERS_COUPONS } from './skechersCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.skechers.in/';

export default function SkechersStore() {
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

  const coupons: Coupon[] = SKECHERS_COUPONS;

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
      q: 'How do I use a Skechers coupon code?',
      a: 'Add your chosen shoes to the cart on skechers.in, go to checkout, and enter the code in the "Apply Coupon" field before payment. The discount updates the total instantly.'
    },
    {
      q: 'Can I use multiple coupon codes on Skechers?',
      a: 'No — Skechers allows one promo code per order. Skechers Plus member pricing may apply automatically alongside a code, but two separate promo codes generally cannot be stacked.'
    },
    {
      q: 'Why is my Skechers promo code not working?',
      a: 'Common reasons: the code has expired, it excludes items already marked down in a sale, your cart is below the minimum order value, or the code was for a different Skechers country store.'
    },
    {
      q: 'Where can I find the best Skechers offers?',
      a: 'We keep this Skechers store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Skechers offer free shipping?',
      a: 'Yes, Skechers India offers free standard shipping on all online orders at skechers.in, with no minimum order value required.'
    },
    {
      q: 'How often are Skechers coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Skechers Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861818/skechers_logo_iaqfyp.webp"
                      alt="Skechers Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Skechers Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the latest Skechers coupon code and Skechers discount code for October 2026 to save on premium footwear and apparel. Grab 50% OFF SKX Float Basketball Sneakers, 50% OFF Boss Treatment Shoes, 40% OFF GO Run Max Road 6, and 40% OFF GO Run Razor 5 running shoes. You'll also find discounts on kids' footwear, jackets, joggers, and activewear. Apply a verified Skechers coupon code or discount code at checkout to unlock extra savings on eligible Skechers purchases.
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
                  <span>Visit Skechers</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861818/skechers_logo_iaqfyp.webp"
                alt="Skechers Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">7+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 50%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Skechers Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Skechers coupon codes & offers.</p>
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
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Apply a Skechers Discount Code
  </h2>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to skechers.in and add your selected products to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Proceed to checkout and look for the "Apply Coupon" or "Promo Code" field on the cart or payment page.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter your Skechers coupon code exactly as listed — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the saving appears in your order total before completing payment.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Choose your payment method. If you hold an HDFC card, check the SmartBuy gift voucher offer below — it can stack additional savings on top of any active sitewide discount.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Free shipping applies to every order on skechers.in, regardless of cart value. No minimum spend required for delivery.
      </span>
    </li>
  </ol>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Skechers Promo Code Not Working? What to Check
  </h2>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>No active codes vs sale discounts:</strong> Skechers India's spend-tier and category discounts are automatic — they don't need a code. If a "coupon code" from a third-party site isn't applying, the actual discount is often already reflected in the cart without needing it.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Code expired:</strong> Third-party coupon sites often list codes that have expired. Check the expiry on the source before trying.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Platform-specific codes:</strong> Skechers India codes from skechers.in don't apply on Amazon, Flipkart, or Myntra. Each platform runs its own Skechers deals independently.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Gift voucher terms:</strong> HDFC SmartBuy gift vouchers can be used for full-price items but may have category restrictions. Check SmartBuy's Skechers voucher page for current exclusions.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Minimum cart requirement:</strong> The spend-tier discounts have fixed thresholds (₹6,999 / ₹12,999 / ₹19,999). Carts below the next threshold don't auto-apply the higher discount.
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
          Skechers Coupon Code: Save on Footwear, Apparel, and Accessories in India
        </p>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Product Name</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Deal Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Original Price</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Key Highlights</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">SKX Float Basketball Sneakers</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹9,499</td>
        <td className="p-3.5 text-gray-500 line-through">₹18,999</td>
        <td className="p-3.5">High-end basketball shoes with cushioning & quick response support</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Boss Treatment Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹7,499</td>
        <td className="p-3.5 text-gray-500 line-through">₹14,999</td>
        <td className="p-3.5">Comfortable build & stylish design for daily & weekend wear</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Boys Skechers Elite Sport Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹2,149</td>
        <td className="p-3.5 text-gray-500 line-through">₹4,299</td>
        <td className="p-3.5">Durable & comfortable sports shoes for active kids</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Girls Sport Court 92 Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹2,149</td>
        <td className="p-3.5 text-gray-500 line-through">₹4,299</td>
        <td className="p-3.5">Light, supportive fit for daily routines & outdoor activities</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's Pin Tuck Pants</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹1,749</td>
        <td className="p-3.5 text-gray-500 line-through">₹3,499</td>
        <td className="p-3.5">Easy-fitting pants with a polished look for busy days & brunches</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Men's Puffer Full-Zip Jacket</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹3,499</td>
        <td className="p-3.5 text-gray-500 line-through">₹6,999</td>
        <td className="p-3.5">Warm outer layer with a full-length zip design</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's GOwalk Pant Joy</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹1,499</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,999</td>
        <td className="p-3.5">Lightweight activewear suited for walks, gym & lounging</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Embroidered Boxy Fit T-Shirt</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off</td>
        <td className="p-3.5 font-bold">₹1,149</td>
        <td className="p-3.5 text-gray-500 line-through">₹2,299</td>
        <td className="p-3.5">Roomy, oversized cut with stitched embroidery accents</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">GO Run Max Road 6 Running Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">40% Off</td>
        <td className="p-3.5 font-bold">₹9,599</td>
        <td className="p-3.5 text-gray-500 line-through">₹15,999</td>
        <td className="p-3.5">Soft cushioning & responsive feel for long distance running</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">GO Run Razor 5 Running Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">40% Off</td>
        <td className="p-3.5 font-bold">₹8,999</td>
        <td className="p-3.5 text-gray-500 line-through">₹14,999</td>
        <td className="p-3.5">Featherweight performance shoes built for speed & training</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Skechers Elite Sport Shoes for Boys</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">40% Off</td>
        <td className="p-3.5 font-bold">Starting ₹2,399</td>
        <td className="p-3.5 text-gray-500 line-through">₹3,999</td>
        <td className="p-3.5">Lightweight build allowing free movement for class & sports</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Girls Skechers Elite Sport Shoes</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">40% Off</td>
        <td className="p-3.5 font-bold">₹2,279</td>
        <td className="p-3.5 text-gray-500 line-through">₹3,799</td>
        <td className="p-3.5">Lightweight sports footwear for all-day comfort</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Arch Fit Vista 2.0</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">20% Off</td>
        <td className="p-3.5 font-bold">₹5,599</td>
        <td className="p-3.5 text-gray-500 line-through">₹6,999</td>
        <td className="p-3.5">Arch Fit technology providing supportive cushioning for long walks</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Women's Color Blocked Jacket</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">20% Off</td>
        <td className="p-3.5 font-bold">₹3,599</td>
        <td className="p-3.5 text-gray-500 line-through">₹4,499</td>
        <td className="p-3.5">Trendy outerwear featuring a contemporary color-block pattern</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Skechers coupon code is a promo code applied at checkout on skechers.in to reduce the price of shoes, apparel, or accessories. Skechers India runs fewer single-use codes than most footwear brands — the main savings mechanism is a spend-tier discount structure (the more you spend, the larger the automatic discount) combined with category-specific sales. Current active offers (October 2026) include ₹4,000 off on orders above ₹19,999, up to 60% off in the sitewide sale, and a buy-1-get-1-50%-off offer on select styles.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Skechers Spend-Tier Discounts — No Code Needed
    </p>

    <p>
      Skechers India's most consistent saving structure is automatic — no promo code required. The discount activates based on your cart total.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Cart Value</th>
            <th className="p-4 font-bold">Automatic Discount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Above ₹6,999</td>
            <td className="p-4">₹750 off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Above ₹12,999</td>
            <td className="p-4">₹2,000 off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Above ₹19,999</td>
            <td className="p-4">₹4,000 off</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      This structure rewards buyers who combine multiple pairs — two pairs of GOwalk shoes at ₹5,999–₹6,999 each will push the cart into the ₹2,000 or ₹4,000 discount band. If you're buying footwear for a family, calculating the combined cart value before checkout often turns a routine purchase into a meaningful saving.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Skechers Sale Offers — October 2026
    </p>

    <p>
      Beyond the spend-tier structure, Skechers India runs category-specific sales. These are automatic at checkout — no code needed.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Category / Offer</th>
            <th className="p-4 font-bold">Discount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Sitewide sale</td>
            <td className="p-4">Up to 60% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Slippers and sandals</td>
            <td className="p-4">Up to 40% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Walking shoes (men's and women's)</td>
            <td className="p-4">Up to 35% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Men's Cozy Fit collection</td>
            <td className="p-4">Up to 30% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Women's footwear</td>
            <td className="p-4">Up to 30% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Backpacks and bags</td>
            <td className="p-4">Up to 20% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Buy 1 Get 1</td>
            <td className="p-4">50% off second pair</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Women's walking shoes</td>
            <td className="p-4">Up to 50% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Women's leggings</td>
            <td className="p-4">Up to 70% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Skechers Foamies slides</td>
            <td className="p-4">Flat 30% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Men's apparel — shorts</td>
            <td className="p-4">Flat 40% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Women's sports bra</td>
            <td className="p-4">Flat 50% off</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The HDFC SmartBuy Gift Voucher Trick
    </p>

    <p>
      This is the one Skechers savings angle that almost no coupon page covers — and it works independently of any active sale.
    </p>

    <p>
      <strong>How it works:</strong> Instead of buying directly on skechers.in, you first buy a Skechers gift voucher through HDFC SmartBuy. HDFC SmartBuy gives you an instant discount or cashback on the voucher purchase — and that discount comes on top of whatever sitewide sale is running when you redeem the voucher.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Card</th>
            <th className="p-4 font-bold">Offer on Skechers Gift Vouchers</th>
            <th className="p-4 font-bold">Valid Until</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">HDFC Tata Neu Infinity</td>
            <td className="p-4">8% instant discount</td>
            <td className="p-4">30 June 2027</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Other HDFC credit cards (excl. Infinia, Diners, Regalia, Tata Neu)</td>
            <td className="p-4">5% cashback + 2.5% instant discount</td>
            <td className="p-4">30 June 2027</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Example:</strong> Buy a ₹10,000 Skechers gift voucher with a standard HDFC credit card. You get 2.5% instant off (₹250 off the voucher price) and 5% cashback in your SmartBuy wallet (₹500 credited later). Redeem the full ₹10,000 voucher on skechers.in during a 30% sale and your effective saving is ₹3,250 on a ₹10,000 cart — more than any flat-code offer.
    </p>

    <p>
      The HDFC Tata Neu Infinity card's 8% instant off is the stronger version — ₹800 off a ₹10,000 voucher upfront, with no wait for cashback credit.
    </p>

    <p>
      Source: hdfc.bank.in SmartBuy portal (confirmed October 2026, valid June 30, 2027). Check the SmartBuy portal for current voucher availability before using this method.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Skechers Product Line Guide: Which Shoe Is for What?
    </p>

    <p>
      Skechers' range is wider than most buyers expect. Here's what each line is actually designed for:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Line</th>
            <th className="p-4 font-bold">What It Does</th>
            <th className="p-4 font-bold">Best For</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">GOwalk</td>
            <td className="p-4">Lightweight slip-on walking shoe; Air-Cooled Goga Mat insole, ULTRA GO midsole</td>
            <td className="p-4">Daily walking, travel, casual wear</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">GOrun</td>
            <td className="p-4">Running and training shoe; Hyper Burst midsole, Arch Fit support option</td>
            <td className="p-4">Running, gym, interval training</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Arch Fit</td>
            <td className="p-4">Podiatrist-certified insole with deep heel cup and anatomical arch</td>
            <td className="p-4">Buyers with arch or heel pain, long-hours standing</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Slip-ins</td>
            <td className="p-4">Hands-free entry — slip on and off without using hands (Heel Pillow + stretch collar)</td>
            <td className="p-4">Commuters, elderly buyers, anyone who dislikes bending to fasten</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">BOBS</td>
            <td className="p-4">Budget-friendly casual and slip-on styles; buy-one-give-one charity model</td>
            <td className="p-4">Everyday casual wear at a lower entry price</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Skechers Work</td>
            <td className="p-4">Composite or steel toe, slip-resistant outsole</td>
            <td className="p-4">Factory floors, healthcare, hospitality</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Go Golf</td>
            <td className="p-4">Golf-specific traction and waterproof options</td>
            <td className="p-4">Golf players</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Foamies</td>
            <td className="p-4">EVA foam clog/slide; lightweight, quick-dry</td>
            <td className="p-4">Beach, poolside, home</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Arch Fit vs GOwalk:</strong> GOwalk prioritises ease of wear and lightweight cushioning. Arch Fit adds a clinically researched insole with proper arch support — worth the small price premium if you spend more than 4 hours on your feet or have flat-foot or plantar discomfort. The two technologies can overlap (GOwalk Arch Fit models exist) for buyers who want both.
    </p>

    <p>
      <strong>Slip-ins explained for Indian buyers:</strong> Slip-ins isn't just a brand name — it's a specific construction where the entire heel collar stretches open and snaps back into shape after entry. No laces, no bending, and the fit is secure once in. This is a genuinely different product from a standard slip-on, and Skechers holds an IP on the Heel Pillow design.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Skechers Technology Guide: What's Inside the Shoe
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Technology</th>
            <th className="p-4 font-bold">What It Is</th>
            <th className="p-4 font-bold">Found In</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Memory Foam</td>
            <td className="p-4">Pressure-relief foam that moulds to the foot</td>
            <td className="p-4">Entry-level GOwalk, casual shoes</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Air-Cooled Memory Foam</td>
            <td className="p-4">Memory foam with perforations for airflow</td>
            <td className="p-4">Mid-range GOwalk, training shoes</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Air-Cooled Goga Mat</td>
            <td className="p-4">High-rebound, dual-density foam insole — more responsive than standard Memory Foam</td>
            <td className="p-4">GOwalk 6 and above, premium lines</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">ULTRA GO</td>
            <td className="p-4">Ultra-lightweight midsole compound</td>
            <td className="p-4">GOwalk 6, GOrun</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Arch Fit</td>
            <td className="p-4">Removable insole with contoured arch; based on 120+ studies (Skechers)</td>
            <td className="p-4">Arch Fit range, select GOwalk Arch Fit</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Hyper Burst</td>
            <td className="p-4">Expanded EVA midsole for running — lighter than standard EVA</td>
            <td className="p-4">GOrun</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Ortholite</td>
            <td className="p-4">Third-party open-cell foam insole layer; moisture-wicking</td>
            <td className="p-4">Several crossover models</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      For most casual buyers, Air-Cooled Goga Mat is the sweet spot — noticeably more cushioned than basic Memory Foam without the price of Hyper Burst running tech. If comfort on hard floors is the priority, the Arch Fit insole makes the biggest functional difference.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Skechers vs Nike vs Adidas vs Puma: Price and Positioning
    </p>

    <p>
      Skechers' value case in India is strongest against international athletic brands. Here's where each sits:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">Skechers</th>
            <th className="p-4 font-bold">Nike</th>
            <th className="p-4 font-bold">Adidas</th>
            <th className="p-4 font-bold">Puma</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Entry price (India)</td>
            <td className="p-4">₹2,999</td>
            <td className="p-4">₹4,999</td>
            <td className="p-4">₹3,999</td>
            <td className="p-4">₹2,499</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Mid-range walking shoe</td>
            <td className="p-4">₹4,999–₹6,999</td>
            <td className="p-4">₹7,999–₹12,000</td>
            <td className="p-4">₹6,999–₹10,000</td>
            <td className="p-4">₹3,999–₹5,999</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Comfort/walking focus</td>
            <td className="p-4">Core focus</td>
            <td className="p-4">Performance running</td>
            <td className="p-4">Performance/lifestyle</td>
            <td className="p-4">Lifestyle and running</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Hands-free entry tech</td>
            <td className="p-4">Slip-ins (proprietary)</td>
            <td className="p-4">None</td>
            <td className="p-4">None</td>
            <td className="p-4">None</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Podiatrist-certified insole</td>
            <td className="p-4">Arch Fit</td>
            <td className="p-4">Not standard</td>
            <td className="p-4">Not standard</td>
            <td className="p-4">Not standard</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">India website sale depth</td>
            <td className="p-4">Up to 60% off</td>
            <td className="p-4">Up to 40% off</td>
            <td className="p-4">Up to 50% off</td>
            <td className="p-4">Up to 60% off</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Free shipping</td>
            <td className="p-4">All orders</td>
            <td className="p-4">Orders above ₹3,000</td>
            <td className="p-4">Orders above ₹3,000</td>
            <td className="p-4">Orders above ₹999</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Skechers sits between Puma (cheaper, fewer comfort features) and Nike/Adidas (higher price, performance-sport positioning). For buyers prioritising comfort for daily walking over gym or sport use, Skechers typically offers more cushioning technology per rupee than Nike or Adidas at the same price point.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      When Are Skechers Sales Deepest?
    </p>

    <p>
      Based on how Skechers India has historically run sales:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Period</th>
            <th className="p-4 font-bold">Expected Discount Depth</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">End-of-Season (Jan–Feb, Jun–Jul)</td>
            <td className="p-4">40–60% off on carryover styles</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Festive period (Sep–Nov: Navratri, Diwali)</td>
            <td className="p-4">30–50% off sitewide + bank offers</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Republic Day / Independence Day</td>
            <td className="p-4">30–40% off</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Brand Birthday / Anniversary sale</td>
            <td className="p-4">Up to 50% off + gift vouchers</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Flash sales (monthly)</td>
            <td className="p-4">20–30% off, 24–48 hour windows</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The deepest discounts on skechers.in appear during End-of-Season and Diwali windows, when spend-tier discounts typically stack with the sitewide sale — the combination of ₹4,000 off (on ₹19,999+) plus 30–50% category discounts can bring effective per-pair prices down significantly on premium styles.
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
                What is the best Skechers coupon code in India right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of October 2026, Skechers India's biggest savings come through spend-tier discounts (no code needed): ₹750 off above ₹6,999, ₹2,000 off above ₹12,999, and ₹4,000 off above ₹19,999. For HDFC cardholders, the SmartBuy gift voucher method (up to 8% instant off via Tata Neu Infinity, or 5% cashback + 2.5% instant with other HDFC cards) adds savings on top. Single-use affiliate codes are infrequent on skechers.in — the spend-tier structure is how most of the saving happens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Skechers India offer free shipping?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes — skechers.in offers free shipping on all orders, with no minimum cart value required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is Skechers' return policy in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skechers India accepts returns within 10 days of delivery on eligible items.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is Skechers Arch Fit and is it worth paying extra for?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Arch Fit is Skechers' proprietary insole designed with podiatric input — it features a contoured arch and deep heel cup. It's worth the extra cost if you have arch discomfort, flat feet, or spend several hours walking or standing. For buyers who have no foot issues and want a casual walking shoe, a standard GOwalk with Air-Cooled Memory Foam is sufficient.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Are Skechers Slip-ins different from regular slip-ons?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. Slip-ins use a hands-free entry system — a stretchy heel collar and Heel Pillow that allows you to step in without bending, touching the shoe, or loosening anything. Once in, the heel snaps back into shape and the fit is secure. Standard slip-ons are just shoes without laces; Slip-ins are a distinct construction with Skechers' own IP.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            On skechers.in, the most reliable way to save is to plan your cart around the spend tiers — particularly the ₹4,000 off threshold at ₹19,999, which is the most efficient for family purchases or combining styles. HDFC SmartBuy users get the additional gift voucher angle, valid through June 2027. During End-of-Season and Diwali windows, the two savings stack and the effective discount on premium styles can run higher than most single promo codes would offer.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Skechers Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Skechers Coupons", "Footwear Offers", "Arch Fit Shoes", "Slip-Ins Deals", "Spend-Tier Discounts", "Walking Shoes", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Skechers checkout for instant discounts.
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
                <span>Continue to Skechers</span>
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
