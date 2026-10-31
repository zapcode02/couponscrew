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
import { Coupon, HOTELCOM_COUPONS } from './hotelcomCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.hotels.com/partnernetwork/p/zz/camref:1101l6vp4p';

export default function HotelcomStore() {
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

  const coupons: Coupon[] = HOTELCOM_COUPONS;

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
      q: 'How do I use a Hotels.com promo code?',
      a: 'Select your preferred hotel stay on Hotels.com, proceed to the checkout page, locate the "Apply a coupon code" field under the price summary, paste your code, and click apply before completing payment.'
    },
    {
      q: 'Can I use multiple coupon codes on Hotels.com?',
      a: 'Hotels.com allows only one promo code per booking transaction. However, you can combine promo codes with member prices or earn OneKeyCash rewards on eligible stays.'
    },
    {
      q: 'Why is my Hotels.com promo code not working?',
      a: 'Promo codes may fail if the selected property is excluded, the minimum spend requirement is not met, the code has expired, or if you selected "Pay at Hotel" instead of "Pay Now".'
    },
    {
      q: 'Where can I find the best Hotels.com offers?',
      a: 'We keep this Hotels.com store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates.'
    },
    {
      q: 'Does Hotels.com offer free cancellation?',
      a: 'Yes, many hotels listed on Hotels.com offer fully refundable room options with free cancellation up to a specified date before check-in. Always check the room policy during booking.'
    },
    {
      q: 'How often are Hotels.com coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Hotels.com Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792834602/hotels-logo_ymdio2.webp"
                      alt="Hotels.com Logo"
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
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Hotels.com Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more with the latest Hotels.com Coupon Code and Hotels.com Promo Code. Book hotels from ₹4,375 per night and earn 1 reward night after 10 eligible stays. Discover hotel deals in Delhi, Mumbai, Phuket, Candolim, Udaipur, and other top destinations with verified Hotels.com offers this October 2026.
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
                  <span>Visit Hotels.com</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792841091/Mumbai_Hotels_Coupon_Code_Getaway_p7ddmb.webp"
                alt="Hotels.com Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">8+</div>
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹6,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Hotels.com Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Hotels.com coupon codes & offers.</p>
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
            <span className="text-sm sm:text-xl lg:text-[22px] font-black leading-tight tracking-tight my-1.5 text-center">
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
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    When to Book on Hotels.com for the Best Price
  </h2>

  <p className="text-xs font-semibold text-[#4A4A6A] leading-relaxed mb-4">
    Hotels.com prices shift based on demand, season, and how far ahead you book. A few patterns that consistently hold:
  </p>

  <ul className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Book 3–4 weeks out for international destinations</strong> — last-minute prices for popular international hotels (Dubai, Singapore, Bali) spike sharply inside 7 days. The sweet spot for availability plus price is typically 3–4 weeks ahead.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        <strong>Book same-day for domestic India budget hotels</strong> — for last-minute weekend trips to Goa, Lonavala, or Coorg, same-day prices on Hotels.com sometimes drop as properties fill unsold rooms. The Hotels.com app's "Tonight's Deals" section surfaces these.
      </span>
    </li>
  </ul>
</div>

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  {/* Dev note: Hotels.com India's own coupon page confirms the "Apply a coupon" step appears only for "Pay Now" properties. Flag for editorial review if this step changes. */}
  <h2 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Apply a Hotels.com Promo Code
  </h2>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Search for your destination, check-in date, and check-out date on Hotels.com or the Hotels.com app.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Select a property that shows "Pay Now" at checkout — coupon codes only work on pre-paid bookings, not "pay at property" rates.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        On the review page before payment, look for "Add a coupon" or "Have a promo code?" and click it.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Type or paste your Hotels.com discount code exactly as given — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the discount shows up in the price breakdown before entering card details.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        If you also have One Key Cash in your account, you can apply it on the same screen — the coupon and your One Key balance can often stack.
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
          Hotels.com Coupon Code: Honest Guide to Saving on Every Booking
        </p>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Hotels.com coupon code is a discount code you apply at checkout on Hotels.com to reduce the price of a hotel booking — either as a fixed percentage off the room rate or as a bank-specific offer. Most publicly shared codes are tied to card partnerships or limited-window campaigns; the bigger, more reliable savings on Hotels.com come from One Key Cash rewards, app-only pricing, and Member Prices, which are available without any code at all.
          </p>

          <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Hotels.com Offers and Discount List</caption>
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
          offerType: 'HOTEL STAR CITY',
          discount: 'From ₹4,799 / night',
          highlights: 'Stay at Hotel Star City in New Delhi (was ₹7,999/night). Includes taxes and fees.',
          eligibility: 'Limited Time Offer'
        },
        {
          offerType: 'THE LEELA PALACE',
          discount: 'From ₹54,450 / night',
          highlights: 'Luxury stay at The Leela Palace New Delhi (was ₹60,500). Includes taxes & fees.',
          eligibility: 'Business & Leisure'
        },
        {
          offerType: 'SHRI SAI GUEST HOUSE',
          discount: 'From ₹4,375 / night',
          highlights: 'Affordable accommodations in New Delhi opposite Azadpur Main Mandi.',
          eligibility: 'Member Pricing Available'
        },
        {
          offerType: 'HOTELS.COM REWARDS',
          discount: '10% Back',
          highlights: 'Stay 10 nights & earn 1 reward night with 10% back in Hotels.com Cash.',
          eligibility: 'All Users'
        },
        {
          offerType: 'CANDOLIM HOTELS',
          discount: 'From ₹9,622 / night',
          highlights: 'Beachfront hotels and family/luxury accommodations close to Candolim Beach.',
          eligibility: 'Subject to Availability'
        },
        {
          offerType: 'PHUKET HOTELS',
          discount: 'From ₹7,077 / night',
          highlights: 'Hotel deals near beaches, shopping, and local attractions in Phuket.',
          eligibility: 'All Users'
        },
        {
          offerType: 'UDAIPUR HOTELS',
          discount: 'From ₹5,832 / night',
          highlights: 'Budget and luxury hotels near lakes and popular tourist attractions.',
          eligibility: 'All Users'
        },
        {
          offerType: 'MUMBAI HOTELS',
          discount: 'From ₹9,320 / night',
          highlights: 'Stay close to business districts and city attractions with wide budget choices.',
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

          <hr className="my-8 border-gray-200" />

          {/* Section Header - Replaced H2 with Styled Paragraph */}
          <p className="text-xl font-black text-[#5B4FBE] mb-4">
            Types of Hotels.com Discounts (Beyond the Promo Code)
          </p>

          <p>
            Most people search for a Hotels.com coupon code and miss the other discount types that frequently save more:
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#5B4FBE] text-white">
                  <th className="p-4 font-bold">Discount Type</th>
                  <th className="p-4 font-bold">How to Access</th>
                  <th className="p-4 font-bold">Typical Saving</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="p-4 font-semibold">Hotels.com coupon code</td>
                  <td className="p-4">Apply at checkout</td>
                  <td className="p-4">Varies by campaign</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">One Key Cash</td>
                  <td className="p-4">Auto-applied from your account balance</td>
                  <td className="p-4">2% back on stays</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Member Prices</td>
                  <td className="p-4">Sign in before searching</td>
                  <td className="p-4">Up to 10% off listed rate</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">App-only deals</td>
                  <td className="p-4">Book on Hotels.com mobile app</td>
                  <td className="p-4">Extra 5–15% on select properties</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Bank card offers</td>
                  <td className="p-4">Specific card used at checkout</td>
                  <td className="p-4">8–20% (card-dependent)</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-semibold">Free Cancellation + Price Match</td>
                  <td className="p-4">On eligible properties</td>
                  <td className="p-4">Price-drop protection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Member Prices are the simplest win: signing in before you search shows a lower rate on many properties, no code needed.
          </p>

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      One Key Cash: What Hotels.com Actually Gives You Back
    </p>

    <p>
      Hotels.com moved from its old rewards programme to One Key Cash in mid-2023, and the change is worth understanding before you book.
    </p>

    <p>
      Under the old programme, you earned a free night after every 10 nights stayed — roughly 10% back. One Key Cash gives you 2% back on eligible hotel stays, redeemable as ₹1 per ₹1 of One Key Cash toward future bookings. You can redeem any amount without waiting for a threshold.
    </p>

    <p>
      <strong>What One Key Cash does well:</strong> it works across Hotels.com, Expedia, and VRBO, so cash earned on a Hotels.com stay can go toward an Expedia flight package. And redemption has no 10-night lock — you can use ₹50 of One Key Cash on your next booking.
    </p>

    <p>
      <strong>What it does less well:</strong> the earn rate is lower than it looks next to the old programme, and you need a "Pay Now" booking to earn it — "pay at property" rates don't qualify.
    </p>

    <p>
      One Key tiers (Blue → Silver → Gold → Platinum) come with progressively better earn rates and perks. Blue is the default for new sign-ups.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Hotels.com vs MakeMyTrip vs Booking.com: Which Saves More for Indian Travellers?
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">Hotels.com</th>
            <th className="p-4 font-bold">MakeMyTrip</th>
            <th className="p-4 font-bold">Booking.com</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Rewards programme</td>
            <td className="p-4">One Key Cash (2% back)</td>
            <td className="p-4">MyRewards (points + cashback)</td>
            <td className="p-4">Genius loyalty discounts</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Coupon codes</td>
            <td className="p-4">Partner/bank codes; rare sitewide codes</td>
            <td className="p-4">Frequent promo codes</td>
            <td className="p-4">Limited; Genius discounts instead</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">India-specific bank offers</td>
            <td className="p-4">Yes (select cards)</td>
            <td className="p-4">Yes (multiple bank tie-ups)</td>
            <td className="p-4">Limited</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">International inventory</td>
            <td className="p-4">500,000+ properties worldwide</td>
            <td className="p-4">Strong India + some international</td>
            <td className="p-4">Very strong globally</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Free cancellation</td>
            <td className="p-4">Available on eligible properties</td>
            <td className="p-4">Available on many</td>
            <td className="p-4">Strong — shown as a filter</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">App discount</td>
            <td className="p-4">Extra discount on app bookings</td>
            <td className="p-4">App-exclusive prices common</td>
            <td className="p-4">App prices available</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Price match</td>
            <td className="p-4">Yes, on Hotels.com</td>
            <td className="p-4">No formal price match</td>
            <td className="p-4">Best Price Guarantee</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      For international bookings — Dubai, Bangkok, London, Bali — Hotels.com's global inventory and One Key Cash stack makes it competitive. For domestic India hotels (Goa, Shimla, Manali, Rajasthan), MakeMyTrip's bank offer partnerships and local inventory depth often pull ahead.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Bank Card Offers on Hotels.com India
    </p>

    <p>
      Hotels.com India has run card-linked offers that give a flat percentage off at checkout. These are applied by using the specific card at payment — no separate code entry needed for most card offers, though some require a promo code from your bank's offer page.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Bank / Card</th>
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Applicable On</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Bank of Baroda</td>
            <td className="p-4">8% off select hotel bookings</td>
            <td className="p-4">Hotels.com bookings with BoB card</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">OneCard</td>
            <td className="p-4">8% off select hotels (code: CARDHT8)</td>
            <td className="p-4">Pre-paid bookings on Hotels.com India</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <em>Dev note (EEAT):</em> The CARDHT8 / OneCard offer was listed as valid "till 31 July 2026" on Hotels.com India's official coupon page — verify and update with a live code before publishing. Bank of Baroda 8% offer confirmed via bankofbaroda.in. Add fresh card offers as they are verified; do not list unverified codes.
    </p>

    <p>
      For the current list of active bank offers, check your bank's offers page or Hotels.com India's official coupons page before booking.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Hotels.com App: Where the Cheaper Rates Actually Are
    </p>

    <p>
      The Hotels.com app (Android and iOS) consistently shows app-only prices on select properties — usually 5–15% below the same rate on the desktop site. This is not always advertised as a "coupon" but functions as one.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How to use it:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>
        Download the Hotels.com app and sign in to your One Key account.
      </li>
      <li>
        Search for the same property you found on desktop.
      </li>
      <li>
        Look for the "App only" badge — if it's there, the app price is lower.
      </li>
      <li>
        Book through the app to lock in that rate and earn One Key Cash on the booking.
      </li>
    </ol>

    <p>
      The app also sends push notifications for Flash Sale prices — short-window discounts (sometimes 24 hours or less) on specific properties that don't appear on the website.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Why Is My Hotels.com Discount Code Not Working?
    </p>

    <p>
      If a Hotels.com promo code fails at checkout, the reason is almost always one of these:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>You selected "Pay at property"</strong> — coupon codes only work on "Pay Now" bookings. Switch to a pre-paid rate and try again.
      </li>
      <li>
        <strong>The code has expired</strong> — Hotels.com campaign codes have fixed end dates. Check whether the code's validity window has passed.
      </li>
      <li>
        <strong>The property is excluded</strong> — many codes apply to select hotels or specific regions only. Read the code's terms for the eligible property list.
      </li>
      <li>
        <strong>It's a region-specific code</strong> — a Hotels.com US promo code will not work on Hotels.com India and vice versa. Make sure you're on in.hotels.com.
      </li>
      <li>
        <strong>The card offer requires a specific card at payment</strong> — some "codes" are actually card-linked offers; entering the code isn't enough if you pay with a different card.
      </li>
      <li>
        <strong>Minimum stay or spend applies</strong> — some codes require at least 2 nights or a minimum booking value.
      </li>
    </ul>

    <p>
      If the code still doesn't work after checking all of the above, contact Hotels.com India support through the Help Centre with a screenshot of the error — they can verify whether the code is valid for your booking.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      Track peak Indian travel seasons for international bookings:
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Season</th>
            <th className="p-4 font-bold">Demand Peak</th>
            <th className="p-4 font-bold">Booking Tip</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Diwali / October–November</td>
            <td className="p-4">High (outbound travel surge)</td>
            <td className="p-4">Book 4–6 weeks ahead</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Christmas / New Year</td>
            <td className="p-4">Very high globally</td>
            <td className="p-4">Book 6–8 weeks ahead</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Summer break (May–June)</td>
            <td className="p-4">High (family travel)</td>
            <td className="p-4">Book 4–6 weeks ahead</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Post-monsoon (Sep–Oct)</td>
            <td className="p-4">Moderate</td>
            <td className="p-4">Good window for last-minute deals</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

          {/* FAQs Section Header - Replaced H1/H2 with Styled Paragraph */}
          <p className="text-2xl font-black text-black mt-16 mb-8">
            Hotels.com Frequently Asked Questions
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Hotels.com have coupon codes for India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hotels.com India runs coupon codes through bank card partnerships rather than open sitewide codes. Card-linked offers from partners like Bank of Baroda and OneCard have given 8% off in recent campaigns. Check in.hotels.com/lp/b/coupons for whatever is live before booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is Hotels.com cheaper than Booking.com or MakeMyTrip for India hotels?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                For most domestic India properties, MakeMyTrip's deeper bank offer ecosystem and local inventory give it a price edge. Hotels.com tends to be more competitive on international properties and for travellers who already have One Key Cash to apply.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                How does One Key Cash work on Hotels.com?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You earn 2% back in One Key Cash on eligible "Pay Now" hotel bookings. Each unit of One Key Cash equals ₹1 off a future booking — there's no minimum balance to redeem, and it works across Hotels.com, Expedia, and VRBO.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I use a Hotels.com coupon code with a bank offer?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It depends on the offer terms. Some bank card offers are applied automatically when the card is used at checkout and can co-exist with a promo code; others explicitly exclude stacking. Read the bank offer terms and test both in the cart — the total with both applied is shown before you pay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                What is the Hotels.com cancellation policy?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cancellation terms are set by each property, not Hotels.com globally. Properties marked "Free Cancellation" let you cancel without penalty up to a stated deadline (shown on the property page). Non-refundable rates are cheaper but have no cancellation window. Always check the specific property's cancellation policy on the booking page before paying.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does Hotels.com work in India?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes — Hotels.com India (in.hotels.com) accepts Indian payment methods including debit cards, credit cards, and select UPI options. Prices are shown in INR and bookings are confirmed instantly. Customer support is available in English through the Help Centre.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            Hotels.com is worth using for international hotel bookings, especially if you book often enough to build a One Key Cash balance. For domestic India stays, run a quick comparison with MakeMyTrip — the bank offer ecosystem there is wider and can pull the final price lower. The Hotels.com app is the single most reliable place to find a "coupon-like" saving on Hotels.com without waiting for a campaign code.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Hotels.com Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["Hotels.com Coupons", "One Key Cash", "Member Prices", "International Hotel Deals", "Bank Card Offers", "App Only Deals", "CouponsCrew Home"].map(tag => (
              <span
                key={tag}
                className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm border border-white"
              >
                {tag}
              </span>
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Hotels.com checkout for instant discounts.
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
                <span>Continue to Hotels.com</span>
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
