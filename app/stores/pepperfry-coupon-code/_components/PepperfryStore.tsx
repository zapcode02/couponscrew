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

// Coupon type
interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

const AFFILIATE_URL = 'https://track.vcommission.com/click?campaign_id=10194&pub_id=130349';

export default function PepperfryStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Latest');

  const coupons: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#5B4FBE]',
      color: '#5B4FBE',
      type: 'FURNITURE',
      title: 'Get 50% off on Bonton Computer Table in Wenge Finish with Keyboard Slider',
      description: 'Shop the Bonton Computer Table in Wenge finish with a sliding keyboard tray at up to 50% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#FF5722]',
      color: '#FF5722',
      type: 'HOME DÉCOR',
      title: 'Get Ethnic Motif Multicolor (12 x 16) PVC Placemats, Set of 6 @ Rs.1',
      description: 'Add a set of 6 ethnic motif multicolor PVC placemats to your dining table for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 35% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#4A3AFF]',
      color: '#0D9488',
      type: 'FURNITURE',
      title: 'Get 35% off on Yuko TV Console for TVs up to 55" in Columbia',
      description: 'Shop the Yuko TV Console in Columbia finish, suitable for TVs up to 55 inches, at up to 35% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FF5722]',
      color: '#2563EB',
      type: 'ELECTRONICS',
      title: 'Get 75% off on Portable Electronic Digital Weight Machine',
      description: 'Shop the portable electronic digital weight machine at up to 75% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'FURNITURE & DECOR',
      title: 'Enjoy up to 75% OFF + 20% Cashback on Furniture & Decor',
      description: 'Shop across furniture & home décor and enjoy up to 75% OFF plus an extra 20% cashback.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 75% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#5B4FBE]',
      color: '#5B4FBE',
      type: 'KITCHENWARE',
      title: 'Get 75% off on Brayan 250ml White Set of 2 Ceramic Coffee Mugs',
      description: 'Shop the Brayan 250ml white ceramic coffee mug set of 2 at up to 75% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'UP TO 36% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#FF5722]',
      color: '#FF5722',
      type: 'FURNITURE',
      title: 'Get 36% off on Suki Bedside Table in Wenge Finish',
      description: 'Shop the Suki Bedside Table in Wenge finish at up to 36% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#4A3AFF]',
      color: '#0D9488',
      type: 'KITCHENWARE',
      title: 'Get Smart ABS Plastic Vegetable Peeler with Stainless Steel Blade @ Rs.1',
      description: 'Add a smart ABS plastic vegetable peeler with a stainless steel blade to your cart for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: '@ ₹1',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#FF5722]',
      color: '#2563EB',
      type: 'BATH',
      title: 'Get Grey Abstract Rubber 24x16 Inches AntiSkid Bath Mat @ Rs.1',
      description: 'Add a grey abstract rubber 24x16 inch anti-skid bath mat to your cart for just ₹1.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'UP TO 46% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#1A1A2E]',
      color: '#1A1A2E',
      type: 'FURNITURE',
      title: 'Get 46% off on Mana Coffee Table in Wenge Finish',
      description: 'Shop the Mana Coffee Table in Wenge finish at up to 46% OFF.',
      code: '',
      verified: 'Verified Today',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];

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

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'How do I use a Pepperfry coupon code?',
      a: 'To use a Pepperfry coupon code, browse verified codes here on Couponscrew, copy your preferred code by clicking "Copy Code", and paste it into the promo code field during checkout on the Pepperfry website or app. If it is a deal, simply click "Visit Pepperfry" to get the discount auto-applied.'
    },
    {
      q: 'Can I use multiple coupon codes on Pepperfry?',
      a: 'Generally, Pepperfry only allows one promotional code per order. However, you can often combine a coupon code with automatic sitewide promotions or select bank discount credit card offers.'
    },
    {
      q: 'Why is my Pepperfry coupon code not working?',
      a: 'A coupon might not work due to specific category exclusions (e.g. some codes apply only to furniture or décor), minimum spend requirements, expiry, or user eligibility restrictions (e.g. new users only).'
    },
    {
      q: 'Where can I find the best Pepperfry offers?',
      a: 'We keep this Pepperfry store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates (such as festive home sales).'
    },
    {
      q: 'Does Pepperfry offer free delivery?',
      a: 'Yes, Pepperfry offers FREE delivery on your first order for new customers on eligible furniture and décor items, depending on your delivery location.'
    },
    {
      q: 'How often are Pepperfry coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">Pepperfry Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg"
                      alt="Pepperfry Logo"
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
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Pepperfry</h1>
                    <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full border border-[#E4E0FF]">
                      Furniture, Home Décor & Furnishings
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Shop online for sofas, beds, wardrobes, home décor & furnishings at India's leading furniture store. Get the best deals with Pepperfry coupon codes & offers.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4A4A6A]">
                    <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <ShieldCheck size={14} /> Verified Store
                    </span>
                    <span className="flex items-center gap-1.5 text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full border border-[#E4E0FF]">
                      <Tag size={14} /> 90+ Offers
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      <Clock size={14} /> Last Updated: Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap gap-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Visit Pepperfry</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`font-bold text-sm px-6 py-3.5 rounded-xl transition-all border flex items-center gap-2 ${isFavorite
                    ? 'bg-red-50 text-red-500 border-red-200'
                    : 'bg-white border-[#D1D1E9] text-[#1A1A2E] hover:bg-gray-50'
                    }`}
                >
                  <Heart size={16} className={isFavorite ? 'fill-current text-red-500' : 'text-gray-400'} />
                  <span>{isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</span>
                </button>
              </div>
            </div>

            {/* Promo Banner Image (Right 5 Columns) — desktop only */}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]"
            >
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782752788/pepperfry-offers_qm0srt.webp"
                alt="Pepperfry Offers"
                fill
                sizes="(max-width: 1024px) 0px, 480px"
                referrerPolicy="no-referrer"
                className="object-cover"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">90+</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 80%</div>
              <div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 last:border-0 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-lg font-black">₹</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#1A1A2E] leading-none">₹20,000+</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Pepperfry Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Pepperfry coupon codes & offers.</p>
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
            <h2 className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">
              {coupon.badge ? coupon.badge.replace("UP TO ", "").replace("FLAT ", "") : "60%"}
            </h2>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">
              OFF
            </span>
          </div>

          {/* RIGHT WRAPPER: Center Content + Right Action */}
          <div className="flex-1 flex flex-col lg:flex-row items-stretch">

            {/* CENTER CONTENT SECTION */}
            <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                {/* Soft Tint Badge using Accent (#FF5722) */}
                <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {coupon.type || "Best Offer"}
                </span>
                <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {coupon.verified || "Verified Today"}
                </span>
              </div>

              <h2 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">
                {coupon.title}
              </h2>

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
                    <span>Valid on select furniture & home décor categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
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

              {/* Action Button - Vibrant CTA Accent (#FF5722) */}
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
                <span>The Story Behind Pepperfry</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm mb-3">
                Pepperfry was founded in 2012 in Mumbai by Ambareesh Murty — formerly the head of eBay India — and Ashish Shah. What started as an online furniture marketplace quickly grew into something far bigger. Within a few years, Pepperfry had become the go-to destination for Indian households looking to furnish their homes without visiting dozens of physical stores. The idea was simple but powerful: bring India's fragmented furniture market online, add great delivery logistics, and give buyers the confidence to purchase big-ticket items from their phone or laptop.
              </p>

              <p className="text-[#1A1A2E] text-sm">
                
                The growth story took a significant turn in 2022 when Pidilite Industries — the company behind Fevicol, India's most trusted adhesive brand — acquired a majority stake in Pepperfry. This was not a random acquisition. Pidilite has a long track record of building category-dominant brands that last decades. Their entry into Pepperfry signals a long-term commitment to the online furniture space in India, bringing deeper financial backing and brand credibility to the platform.
              </p>



              <div className="mt-5 select-none">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full border border-[#D1D1E9] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 bg-white cursor-pointer"
                >
                  <span>Visit Pepperfry</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Sidebar Card 2: Promo Sale Banner */}
            <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-2 relative z-10 text-left">
                <h3 className="font-extrabold text-lg tracking-tight">Pepperfry Home Furnishing Sale</h3>
                <span className="inline-block bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Live Now!
                </span>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Up to 60% OFF on Sofas, Beds, Wardrobes & more
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
                Top Categories at Pepperfry
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Living Room</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Bedroom Furniture</span>
                  <span className="text-[#FF5722] font-bold">Up to 50% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Decor & Furnishings</span>
                  <span className="text-[#FF5722] font-bold">Up to 60% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Kitchen & Dining</span>
                  <span className="text-[#FF5722] font-bold">Up to 55% OFF</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-[#1A1A2E]">Office Furniture</span>
                  <span className="text-[#FF5722] font-bold">Up to 45% OFF</span>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8E8F0] pt-4 text-center select-none">
                <Link href="/categories" className="text-xs font-black text-[#5B4FBE] hover:underline flex items-center justify-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidebar Card 4: Why Shop at Pepperfry */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs text-left">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
                Why Use CouponScrew for Pepperfry Deals?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Daily Code Verification</span>
      <span>Every Pepperfry coupon code on this page is manually tested before it goes live and re-verified every 24 hours. Expired codes are removed immediately. You will never spend time trying a dead promo code here.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Real-Time Success Rates</span>
      <span>We display live success percentages for every deal based on actual user attempts. This tells you at a glance which Pepperfry discount codes are working best today, so you can pick the most reliable option without guessing.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Bank Offer Tracking</span>
      <span>We specifically track Indian bank promotions from HDFC, SBI, ICICI, Axis, and Bajaj Finserv so you always know which card to use at checkout to unlock the maximum cashback on top of your Pepperfry promo code.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Flash Deal Alerts</span>
      <span>Pepperfry's ₹1 flash deals and limited-time Lightning Deals are flagged on CouponScrew as soon as they go live, giving you the best chance to grab them before stock runs out.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">Pre-Sale Code Publishing</span>
      <span>CouponScrew publishes Pepperfry sale codes ahead of major events like the Big Home Sale and the Apno Wali Diwali Sale. You do not need to wait for the sale to start to know what discounts are available.</span>
    </div>
  </li>
  <li className="flex items-start gap-2.5">
    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
    <div>
      <span className="font-bold text-[#2C2C40] block mb-0.5">No Registration Required</span>
      <span>Finding and using a Pepperfry coupon code on CouponScrew is completely free and requires no account, no sign-up, and no personal information. Copy the code, go to Pepperfry, and save.</span>
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
                Pepperfry Coupon Code India (August 2026): Up to 75% Off + Extra Cashback — Verified Today
              </h2>

              <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0] shadow-sm bg-white">
  <table className="w-full text-left border-collapse min-w-[750px]" itemScope itemType="https://schema.org/Table">
    <caption className="sr-only">Furniture, Home Décor, and Kitchen Coupon Offers</caption>
    <thead>
      <tr className="bg-[#F3F0FF] border-b border-[#E8E8F0]">
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Offer Type</th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Category</th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">Discount / Price</th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm">Offer Highlights</th>
        <th scope="col" className="px-5 py-4 text-[#5B4FBE] font-extrabold text-sm whitespace-nowrap">User Eligibility</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#E8E8F0]">
      {[
        {
          offerType: 'UP TO 50% OFF',
          category: 'Furniture',
          discount: 'Up to 50% OFF',
          highlights: 'Shop the Bonton Computer Table in Wenge finish with sliding keyboard tray.',
          userType: 'All Users'
        },
        {
          offerType: '@ ₹1',
          category: 'Home Décor',
          discount: '@ ₹1',
          highlights: 'Add a set of 6 ethnic motif multicolor PVC placemats for just ₹1.',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 35% OFF',
          category: 'Furniture',
          discount: 'Up to 35% OFF',
          highlights: 'Yuko TV Console for TVs up to 55" in Columbia finish.',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 75% OFF',
          category: 'Electronics',
          discount: 'Up to 75% OFF',
          highlights: 'Portable Electronic Digital Weight Scale at massive discount.',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 75% OFF',
          category: 'Furniture & Decor',
          discount: 'Up to 75% OFF',
          highlights: 'Shop across furniture & home décor plus get an extra 20% cashback.',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 75% OFF',
          category: 'Kitchenware',
          discount: 'Up to 75% OFF',
          highlights: 'Brayan 250ml White Ceramic Coffee Mugs (Set of 2).',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 36% OFF',
          category: 'Furniture',
          discount: 'Up to 36% OFF',
          highlights: 'Suki Bedside Table in sleek Wenge finish.',
          userType: 'All Users'
        },
        {
          offerType: '@ ₹1',
          category: 'Kitchenware',
          discount: '@ ₹1',
          highlights: 'Smart ABS Plastic Vegetable Peeler with stainless steel blade for ₹1.',
          userType: 'All Users'
        },
        {
          offerType: '@ ₹1',
          category: 'Bath',
          discount: '@ ₹1',
          highlights: 'Grey Abstract Rubber 24x16 Inch Anti-Skid Bath Mat for ₹1.',
          userType: 'All Users'
        },
        {
          offerType: 'UP TO 46% OFF',
          category: 'Furniture',
          discount: 'Up to 46% OFF',
          highlights: 'Mana Coffee Table in premium Wenge finish.',
          userType: 'All Users'
        }
      ].map((row, i) => (
        <tr key={i} className="border-b border-[#E8E8F0] last:border-none align-middle hover:bg-[#FAFAFC] transition-colors">
          <td className="px-5 py-4 font-bold text-[#4A5568] text-xs sm:text-sm whitespace-nowrap uppercase">
            {row.offerType}
          </td>
          <td className="px-5 py-4 font-bold text-[#2D3748] text-xs sm:text-sm" itemProp="name">
            {row.category}
          </td>
          <td className="px-5 py-4 font-extrabold text-[#FF9900] text-xs sm:text-sm whitespace-nowrap">
            {row.discount}
          </td>
          <td className="px-5 py-4 text-[#4A5568] text-xs sm:text-sm leading-relaxed" itemProp="description">
            {row.highlights}
          </td>
          <td className="px-5 py-4 whitespace-nowrap">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#137333]">
              {row.userType}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

                <p>
                  Looking for a verified Pepperfry coupon code before placing your furniture order? You have come to the right place. CouponScrew tracks and verifies every active Pepperfry discount code, promo code, and deal daily — so you always get a working offer, never an expired one. From sofas and beds to home décor and kitchen accessories, we cover every category. Copy your code above and start saving on your next Pepperfry order right now.
                </p>
                {/* Section 1: About Pepperfry */}
                
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  From a Mumbai Startup to India's Largest Furniture Marketplace
                  </h3>
                

                   <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                 Pepperfry in Numbers — Scale That Speaks for Itselfy
                  </h3>

                  <p>
                    Today, Pepperfry is India's largest online furniture and home décor marketplace by catalogue size. The numbers tell the story clearly: over 1,00,000 products listed across eight major categories, more than 10,000 registered sellers on the platform, 20+ lakh customers served across India, and deliveries reaching 10,000+ pin codes through Pepperfry's own dedicated logistics network. Unlike most e-commerce platforms that rely entirely on third-party couriers for furniture, Pepperfry manages its own last-mile delivery for large items — which is a key reason why damage rates and delivery failures are lower compared to alternatives.
                  </p>

                  <p>
                    Add to this 50+ Studio Pepperfry experience centres across 30+ cities, a dedicated business vertical for commercial interior projects, and a Privilege membership programme for loyal shoppers — and it becomes clear why Pepperfry continues to dominate the online furniture category in India. Using a Pepperfry coupon code from CouponScrew on top of this already competitive pricing is simply the smartest way to shop here.
                  </p>

               <div className="space-y-4 text-slate-700">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Everything You Can Shop at Pepperfry
  </h3>
  <p>
    Pepperfry covers every room in your home across eight major categories. Here is a detailed look at what each section offers and what kind of Pepperfry discount codes apply to each.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Sofas & Seating — Up to 60% Off: </strong>
    The sofa section is Pepperfry's single largest revenue category and also the most popular among buyers. You will find 3-seater fabric sofas, L-shaped sectionals, sofa-cum-beds for studio apartments, recliners, loveseats, and ottomans — all from brands like Wakefit, Godrej Interio, Nilkamal, and dozens of independent furniture manufacturers. Prices range from ₹8,000 for a compact 2-seater to ₹80,000+ for premium leather sectionals.
    <br />
    Pepperfry coupon codes for sofas are among the most frequently searched, and for good reason — a 20% discount on a ₹30,000 sofa saves you ₹6,000 in one transaction. The best time to apply a Pepperfry promo code on sofas is during the Big Home Sale in October–November, when discounts reach up to 75% on the entire sofa collection.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Beds & Bedroom Furniture — Up to 70% Off: </strong>
    Beds with hydraulic storage drawers are the consistent bestseller in this category — Indian apartments benefit enormously from the under-bed storage, and Pepperfry's engineered wood options deliver this at a fraction of what carpenter-made alternatives cost. Queen and king-size frames in walnut, white, and wenge finishes dominate the catalogue, with prices starting at ₹10,000 and going up to ₹60,000 for premium upholstered headboard options.
    <br />
    A Pepperfry discount code applied on bedroom furniture during sale events can bring a ₹25,000 bed down to under ₹18,000. Alongside beds, this section also covers bedside tables, dressers, mirrors, and full bedroom sets — making it possible to furnish an entire bedroom in one order and potentially qualify for bundle discounts at checkout.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Wardrobes & Storage — Up to 70% Off: </strong>
    Pepperfry's wardrobe section is one of the most comprehensive online, covering sliding-door wardrobes, 2-door and 3-door options, modular wardrobes, and open-shelf designs. Brands like Spacewood, Godrej Interio, Mintwud, and Woodsworth are regularly stocked with competitive pricing. Engineered wood in white and walnut finishes makes up the majority of the catalogue, with prices starting at ₹7,999.
    <br />
    Storage solutions beyond wardrobes — including shoe racks, bookshelves, display cabinets, and TV units — are also part of this section. A Pepperfry coupon code in the storage category is particularly useful for new homeowners who need to furnish multiple rooms in a single purchase, where the cumulative savings on a large order can be substantial.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Dining Tables & Sets — Up to 65% Off: </strong>
    Pepperfry offers 4-seater and 6-seater dining sets in both solid sheesham wood and engineered wood, catering to buyers at different budget levels. Sheesham wood sets have a natural grain and warm tone that suits traditional Indian home interiors, while engineered wood options in darker finishes suit contemporary apartments. Prices range from ₹6,000 for a basic 4-seater set to ₹40,000 for solid wood 6-seater options.
    <br />
    Pepperfry promo codes for dining furniture are commonly available sitewide, meaning any active coupon code will apply to this category. If you are furnishing a new home, combining a dining set purchase with sofas in a single order may also qualify you for free delivery and additional checkout discounts that are only visible when your cart crosses certain value thresholds.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Home Décor & Wall Art — Up to 77% Off: </strong>
    Home décor is Pepperfry's fastest-growing category and also its strongest gifting segment. The selection covers wall clocks, canvas prints, photo frames, decorative vases, showpieces, planters, and wall shelves — most items priced under ₹2,000, making this a low-risk category to explore even without a Pepperfry discount code. The sheer variety here is a genuine differentiator; you will find everything from minimalist Scandinavian-style prints to traditionally detailed Indian craft pieces.
    <br />
    The ₹1 flash deals that Pepperfry runs periodically appear most often in this category — placemats, bath mats, and small décor accessories at ₹1 to clear inventory. These deals go live unannounced and sell out within hours. CouponScrew flags them in real time so you can act before stock runs out.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Kitchen & Dining Accessories — Up to 55% Off: </strong>
    Beyond major appliances, Pepperfry's kitchen and dining section covers everything from cookware sets and cutlery to serving bowls, storage containers, and table linens. This category sees strong year-round demand, with sales spiking before weddings and housewarmings when shoppers are building out a complete kitchen from scratch.
    <br />
    Pepperfry coupon codes apply to this category sitewide, meaning you can mix kitchen accessories with furniture in the same order and apply a single promo code to the entire cart. Super Value Days — which run on specific dates each month — offer additional stacking discounts on kitchen and household essentials.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Lighting & Lamps — Up to 80% Off: </strong>
    Pepperfry's lighting section covers ceiling lights, chandeliers, floor lamps, bedside table lamps, wall sconces, pendant lights, and outdoor lighting. Brands like Philips, Tu Casa, CasaCraft, and Fos Lighting sit alongside private-label options at very competitive price points. The average order value in this category is under ₹3,000, making it one of the most accessible sections on the platform.
    <br />
    Pepperfry discount codes for lighting are particularly effective here because even small percentage discounts translate into meaningful savings on multi-item lighting orders. If you are setting up lighting for an entire flat — living room, bedroom, kitchen, and bathroom — the cumulative discount from a single coupon code applied to a ₹15,000+ lighting cart can save you ₹2,000–₹3,000 in one go.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Office & Study Furniture — Up to 80% Off: </strong>
    Work-from-home demand permanently elevated Pepperfry's office furniture category post-2020, and the selection has grown accordingly. Ergonomic chairs, height-adjustable desks, L-shaped study tables, monitor stands, and laptop stands are all available. Brands like Woodsworth, Mintwud, and Nilkamal dominate the price-conscious end, while premium ergonomic chairs from specialised brands occupy the upper range.
    <br />
    A Pepperfry promo code on office furniture is especially valuable because this is a category where buyers often purchase multiple items together — chair, desk, bookshelf, and cable management — in a single setup order. The combined cart value quickly crosses ₹15,000, which is typically the threshold for bank card instant discounts to activate on top of your coupon code.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Mattresses & Sleep Essentials — Up to 60% Off: </strong>
    Pepperfry stocks mattresses from major Indian sleep brands including Wakefit, Springtek, Sleepycat, Kurl-On, Durfi, and Centuary, with options across memory foam, orthopaedic, coir, and spring constructions. Prices start at ₹1,239 for basic coir options and go up to ₹40,000+ for premium dual-comfort memory foam mattresses.
    <br />
    The Big Snooz Sale — Pepperfry's dedicated sleep-focused sale event — is the best time to use a Pepperfry coupon code on mattresses, with discounts reaching up to 70%. Combining a mattress purchase with bedding, pillows, and protectors in the same order often qualifies for additional bundle savings visible at checkout.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Garden & Outdoor Furniture — Up to 75% Off: </strong>
    Pepperfry's garden and outdoor section covers balcony chairs, garden swings, outdoor dining sets, planters, and weather-resistant furniture for terraces and open spaces. As urban apartments increasingly feature balconies and terraces as usable living spaces, this category has seen consistent growth. Prices start at ₹1,500 for basic balcony chairs and go up to ₹35,000 for complete outdoor dining sets.
    <br />
    Pepperfry promo codes apply sitewide, so any active coupon code works here. The Independence Day Sale in August and the Big Home Sale in October–November are the two windows where outdoor furniture sees the deepest discounts of the year.
  </p>
</div>

<div className="space-y-4 text-slate-700">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Why Millions of Indian Shoppers Choose Pepperfry
  </h3>

  <p>
    <strong className="text-[#2C2C40]">India's Deepest Furniture Catalogue — 1,00,000+ Products: </strong>
    No other online furniture platform in India comes close to Pepperfry's catalogue depth. With over 1,00,000 products across eight categories and 10,000+ registered sellers, Pepperfry offers a range that runs from ₹1 kitchen accessories to ₹2,00,000+ luxury sofas — all on a single platform. Whether you are furnishing a studio apartment on a tight budget or designing a premium home with high-end pieces, Pepperfry has options at every price point without requiring you to visit multiple websites.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Studio Pepperfry — See Before You Buy at 50+ Offline Centres: </strong>
    Most online furniture regrets come from buying without seeing the product in person — the sofa colour looked different on screen, the cushion was softer than expected, the wood finish had a different tone in real life. Studio Pepperfry exists specifically to solve this problem. With 50+ experience centres across 30+ cities, you can walk in, sit on the sofa, check the material quality and wood finish in person, and then place your order online — often at the same discounted price you found on CouponScrew. Free interior design consultation is also included at Studio Pepperfry locations at no extra cost.
  </p>

  <p>
    <strong className="text-[#2C2C40]">45-Day Return Policy — One of the Best in Online Furniture: </strong>
    Pepperfry offers a 45-day return window on furniture — a standard that is genuinely difficult to match in the Indian online furniture market, where most competitors offer 7 to 10 days. This extended return policy significantly reduces the risk of buying large furniture online. Home décor and accessories have a 10-day return window. In serviceable cities, Pepperfry handles doorstep pickup on returns rather than requiring buyers to arrange their own logistics.
  </p>

  <p>
    <strong className="text-[#2C2C40]">No-Cost EMI on Orders Above ₹5,000: </strong>
    Large furniture purchases do not have to strain your monthly budget. Pepperfry offers no-cost EMI on orders above ₹5,000 through HDFC Bank, SBI, ICICI Bank, Axis Bank, and Bajaj Finserv, with tenures ranging from 3 to 24 months. A ₹30,000 sofa on a 24-month no-cost EMI plan works out to ₹1,250 per month — a manageable amount for most households. It is worth checking the full EMI breakdown at checkout, as some offers include a processing fee that is worth factoring into the total cost.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Pepperfry Privilege Membership — Free Early Sale Access: </strong>
    Pepperfry's Privilege membership is free to join and offers early sale access — sometimes 24 hours before the general public — along with member-exclusive coupon codes and priority customer support. For anyone who shops at Pepperfry more than once a year, signing up before the next Big Home Sale is a straightforward way to access the best deals before popular items sell out.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Pepperfry for Business — End-to-End Commercial Interiors: </strong>
    Launched in 2026, Pepperfry for Business is a dedicated vertical for organisations that need to furnish offices, hospitality properties, retail stores, or institutional spaces. The service covers the full project lifecycle — space planning, design, procurement, manufacturing from Pepperfry's own 1.25 lakh sq ft facility, and on-site installation. It draws on a network of over 1,100 manufacturers and delivers across 500+ cities nationally. For startups, co-working spaces, or any business needing a single point of accountability for a large interior project, this is a service worth exploring directly with Pepperfry.
  </p>
</div>

                

                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Pepperfry Coupon Code — Step by Step</h3>
  <p className="text-gray-700 font-bold -mt-4">Using a Pepperfry discount code from CouponScrew takes under two minutes. Here is the exact process:</p>
  <div className="space-y-6">
    {[
      "Find Your Code on CouponScrew — Browse the verified Pepperfry offers on this page and click \"Get Deal\" or \"Copy Code\" on the offer you want. For no-code deals, clicking \"Get Deal\" activates the discount and redirects you directly to the relevant Pepperfry page.",
      "Browse and Add to Cart — Go to Pepperfry and select your products. Check the offer description for any category exclusions before adding items to your cart.",
      "Go to Checkout — Proceed to checkout. Find the \"Apply Coupon\" field just above the Order Summary section on the checkout page.",
      "Paste Your Pepperfry Promo Code — Paste the code you copied from CouponScrew and click Apply. The discount updates in your order summary immediately.",
      "Pick Your Delivery Slot — Pepperfry offers time-slot delivery for furniture. Choose the date and time window that works for you before proceeding to payment.",
      "Stack Your Bank Card Offer — At the payment step, open the Offers tab. HDFC, SBI, ICICI, and Axis bank card discounts are displayed here and stack on top of your coupon code. Apply both. This is the step most shoppers miss — and it is where you unlock the second layer of savings.",
      "Complete Payment — Confirm your order. You will receive a delivery confirmation with tracking details via SMS and email."
    ].map((step, i) => (
      <div key={i} className="flex gap-6 items-start">
        <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
          {i + 1}
        </div>
        <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
      </div>
    ))}
  </div>
</div>

                <div className="space-y-4 text-slate-700">
  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Why Millions of Indian Shoppers Choose Pepperfry
  </h3>

  <p>
    <strong className="text-[#2C2C40]">India's Deepest Furniture Catalogue — 1,00,000+ Products: </strong>
    No other online furniture platform in India comes close to Pepperfry's catalogue depth. With over 1,00,000 products across eight categories and 10,000+ registered sellers, Pepperfry offers a range that runs from ₹1 kitchen accessories to ₹2,00,000+ luxury sofas — all on a single platform. Whether you are furnishing a studio apartment on a tight budget or designing a premium home with high-end pieces, Pepperfry has options at every price point without requiring you to visit multiple websites.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Studio Pepperfry — See Before You Buy at 50+ Offline Centres: </strong>
    Most online furniture regrets come from buying without seeing the product in person — the sofa colour looked different on screen, the cushion was softer than expected, the wood finish had a different tone in real life. Studio Pepperfry exists specifically to solve this problem. With 50+ experience centres across 30+ cities, you can walk in, sit on the sofa, check the material quality and wood finish in person, and then place your order online — often at the same discounted price you found on CouponScrew. Free interior design consultation is also included at Studio Pepperfry locations at no extra cost.
  </p>

  <p>
    <strong className="text-[#2C2C40]">45-Day Return Policy — One of the Best in Online Furniture: </strong>
    Pepperfry offers a 45-day return window on furniture — a standard that is genuinely difficult to match in the Indian online furniture market, where most competitors offer 7 to 10 days. This extended return policy significantly reduces the risk of buying large furniture online. Home décor and accessories have a 10-day return window. In serviceable cities, Pepperfry handles doorstep pickup on returns rather than requiring buyers to arrange their own logistics.
  </p>

  <p>
    <strong className="text-[#2C2C40]">No-Cost EMI on Orders Above ₹5,000: </strong>
    Large furniture purchases do not have to strain your monthly budget. Pepperfry offers no-cost EMI on orders above ₹5,000 through HDFC Bank, SBI, ICICI Bank, Axis Bank, and Bajaj Finserv, with tenures ranging from 3 to 24 months. A ₹30,000 sofa on a 24-month no-cost EMI plan works out to ₹1,250 per month — a manageable amount for most households. It is worth checking the full EMI breakdown at checkout, as some offers include a processing fee that is worth factoring into the total cost.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Pepperfry Privilege Membership — Free Early Sale Access: </strong>
    Pepperfry's Privilege membership is free to join and offers early sale access — sometimes 24 hours before the general public — along with member-exclusive coupon codes and priority customer support. For anyone who shops at Pepperfry more than once a year, signing up before the next Big Home Sale is a straightforward way to access the best deals before popular items sell out.
  </p>

  <p>
    <strong className="text-[#2C2C40]">Pepperfry for Business — End-to-End Commercial Interiors: </strong>
    Launched in 2026, Pepperfry for Business is a dedicated vertical for organisations that need to furnish offices, hospitality properties, retail stores, or institutional spaces. The service covers the full project lifecycle — space planning, design, procurement, manufacturing from Pepperfry's own 1.25 lakh sq ft facility, and on-site installation. It draws on a network of over 1,100 manufacturers and delivers across 500+ cities nationally. For startups, co-working spaces, or any business needing a single point of accountability for a large interior project, this is a service worth exploring directly with Pepperfry.
  </p>

  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
    Shop Smarter — Make Every Rupee Count at Pepperfry
  </h3>

  <p>
    Every piece of furniture you buy is a long-term investment in your home — and there is no reason to pay full price for any of it. CouponScrew keeps every active Pepperfry coupon code, promo code, and discount code verified and ready for you, updated daily, completely free. Bookmark this page before your next Pepperfry order, copy the best available code, stack it with your bank card offer, and walk away paying significantly less than the listed price. Your home deserves great furniture — and great furniture does not have to cost a fortune.
  </p>

</div>



                

                {!isReadMore && (
                  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                )}
              </div>

              <button
                onClick={() => setIsReadMore(!isReadMore)}
                className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
              >
                {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
              </button>

              {/* FAQs Accordion */}
             <div className="mt-20 space-y-4">
  <h3 className="text-2xl font-black text-black mb-8">
    Frequently Asked Questions About Pepperfry Coupon Codes
  </h3>
  {[
    {
      q: "What is the best Pepperfry coupon code available right now?",
      a: "The best active Pepperfry coupon code is listed at the top of this page with its current success rate and verified date. For new users, HELLO1500 gives a flat ₹1,500 off your first order. Sitewide codes offering up to 75% off plus 20% cashback are also regularly available for all users."
    },
    {
      q: "Can I stack a Pepperfry coupon code with a bank card offer?",
      a: "Yes. Apply your CouponScrew promo code at the \"Apply Coupon\" field at checkout, then pay with an eligible HDFC, SBI, ICICI, or Axis card. The bank's instant discount — typically 10–15% — applies on top of your coupon, giving you two discount layers on the same order."
    },
    {
      q: "Why is my Pepperfry promo code not working?",
      a: "A Pepperfry discount code may fail if it has expired, if the products in your cart are not eligible for that specific promotion, or if you have not met the minimum order value stated in the offer terms. Check the terms listed with each code on CouponScrew before applying."
    },
    {
      q: "Does Pepperfry offer no-cost EMI?",
      a: "Yes. No-cost EMI is available on orders above ₹5,000 through HDFC Bank, SBI, ICICI Bank, Axis Bank, and Bajaj Finserv for tenures of 3 to 24 months. Check the full EMI breakdown at checkout, as some offers include a processing fee."
    },
    {
      q: "What is Pepperfry's return policy?",
      a: "Pepperfry offers a 45-day return window on furniture and a 10-day window on home décor items. Products must be in original condition. In serviceable cities, Pepperfry arranges doorstep pickup for returns. A cancellation fee of up to 2.5% of the paid amount applies at the time of refund processing."
    },
    {
      q: "What is Studio Pepperfry?",
      a: "Studio Pepperfry is Pepperfry's network of 50+ offline experience centres across 30+ cities in India. You can visit a Studio to see furniture in person, check material quality and finish, and get a free interior design consultation — then place your order online at the same discounted price."
    },
    {
      q: "When does Pepperfry hold its biggest sales?",
      a: "Pepperfry's two largest annual events are the Big Home Sale (March–April and October–November) and the Apno Wali Diwali Sale (October–November), both offering up to 75% off sitewide. The Republic Day Sale in January and Independence Day Sale in August are also major savings windows."
    },
    {
      q: "Is there a new user offer on Pepperfry?",
      a: "Yes. New users can get a flat ₹1,500 off their first order using the code HELLO1500 at checkout. Pepperfry also credits new accounts with ₹10,000 in wallet credits, redeemable at up to ₹1,000 per order. Check the sign-up page for the current new user offer as the exact amount may change."
    },
    {
      q: "Does Pepperfry have a military or armed forces discount?",
      a: "Yes. Pepperfry's Honouring Uniformed Forces programme offers a dedicated 12% discount for serving and retired defence and paramilitary personnel and their families. It is available both online and in Studio Pepperfry locations. Contact Pepperfry at 022-6157-6157 for current terms."
    },
    {
      q: "How does Pepperfry cashback work?",
      a: "Cashback on Pepperfry is credited to your Pepperfry Wallet as credits, which auto-apply at checkout and can offset up to 15% of the cart value per order. Credits expire five days from the date of issue and cannot be transferred or converted to cash."
    },
    {
      q: "Are there any app-exclusive deals on Pepperfry?",
      a: "Yes. Pepperfry lists deals on the mobile app that are not always available on the desktop site. Downloading the app and enabling notifications ensures you do not miss app-only Pepperfry promo codes and flash offers."
    },
    {
      q: "What is the Pepperfry customer support number?",
      a: "You can reach Pepperfry customer support at 022-6157-6157 or by emailing cs@pepperfry.com for queries related to orders, returns, and delivery."
    }
  ].map((faq, i) => (
    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
      <button
        onClick={() => setOpenFaq(openFaq === i ? null : i)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
      >
        <span className="text-black font-black text-base">{faq.q}</span>
        <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE] rotate-180")}>
          <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
        </div>
      </button>
      <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
      </div>
    </div>
  ))}
</div>

            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Pepperfry Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Pepperfry Coupons", "Furniture Sale India", "Sofa Set Offers", "Pepperfry Big Home Sale", "Home Décor Deals", "No-Cost EMI Furniture", "Pepperfry Bank Offers", "CouponsCrew Home"].map(tag => (
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
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Pepperfry Deals</h3>
                <div className="space-y-6">
                  {[
                    { heading: "Big Home Sale — Up to 75% OFF", sub: "Sofas, beds, wardrobes & décor — deepest discounts of the year" },
                    { heading: "Flat ₹1 Flash Deals", sub: "Bath mats, placemats & kitchen tools at just ₹1 — limited stock" },
                    { heading: "20% Cashback on Furniture", sub: "Shop furniture & décor, get 20% cashback credited within 48 hours" },
                    { heading: "No-Cost EMI on ₹5,000+ Orders", sub: "HDFC, SBI, ICICI, Axis — 3 to 24 month tenure, zero processing fee" },
                    { heading: "New User First-Order Offer", sub: "Special discount for first-time Pepperfry customers — check at checkout" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">P</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Pepperfry deal: ${deal.heading}`} className="bg-[#f0eeff] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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

            {/* Success icon */}
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Pepperfry checkout for instant discounts.
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
                <span>Continue to Pepperfry</span>
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
