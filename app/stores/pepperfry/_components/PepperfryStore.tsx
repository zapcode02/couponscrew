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
            <span className="text-[#5B4FBE] font-semibold">Pepperfry</span>
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

          {/* LEFT DISCOUNT SECTION */}
          <div
            style={{ background: coupon.color || 'linear-gradient(180deg, #5B4FBE 0%, #4938c4 100%)' }}
            className="w-24 sm:w-32 lg:w-40 flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0"
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

            {/* CENTER CONTENT SECTION (Details are now placed strictly inside this) */}
            <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="bg-[#FFEBEB] text-[#FF4D4D] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
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
                className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0B1A30] hover:opacity-80 w-fit"
              >
                View Details
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* IMAGE ONE LOOK: Details list inside the center container */}
              {isExpanded && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                    <span>Valid on select furniture & home décor categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                    <span>Minimum cart value might apply as specified on descriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0066FF] mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF]" />
                    <span>Covers selected brands and product collections.</span>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT ACTION SECTION */}
            <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent">

              {/* Coupon Code Box */}
              {coupon.code && (
                <div className="w-full bg-white border border-dashed border-[#0066FF] rounded-xl flex items-center justify-between px-4 py-2.5 mb-3">
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

              {/* Action Button */}
              <button
                onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())}
                className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-[#0066FF] hover:bg-[#0052CC] text-white"
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

            {/* View More Buttons */}
            <div className="text-center pt-2">
              <button className="bg-white border border-[#E8E8F0] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer">
                <span>View More Coupons (85+)</span>
                <ChevronDown size={14} />
              </button>
            </div>


          </main>

          {/* RIGHT COLUMN: Sidebar (30% width) */}
          <aside className="w-full lg:w-80 flex-shrink-0 self-start space-y-6 order-2">

            {/* Sidebar Card 1: Store Information */}
            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-5 shadow-xs">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center gap-2 border-b border-[#E8E8F0] pb-3 select-none">
                <Info size={16} className="text-[#5B4FBE]" />
                <span>Pepperfry - Store Information</span>
              </h3>
              <p className="text-[#1A1A2E] text-sm">
                Pepperfry is one of India's leading online furniture and home décor stores, offering a wide range of sofas, beds, wardrobes, dining sets, and home furnishings delivered straight to your door.
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
                Why Shop at Pepperfry?
              </h3>

              <ul className="space-y-3 text-xs font-semibold text-[#4A4A6A]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Wide range of furniture & décor</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Best prices & deals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Fast & reliable delivery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Easy returns & refunds</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>100% secure payments</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* ==========================================
          YOU MAY ALSO LIKE THESE STORES
          ========================================== */}
      <section className="bg-[#F8F8FF] border-t border-[#E8E8F0] py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <div className="space-y-2 select-none">
            <h2 className="text-2xl font-black text-[#1A1A2E]">You May Also Like These Stores</h2>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">Explore other top stores for coupon codes & verified shopping deals.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Flipkart', discount: 'Up to 80% OFF', logo: 'F', logoBg: '#0F82FD', logoColor: '#FFFFFF' },
              { name: 'Myntra', discount: 'Up to 80% OFF', logo: 'M', logoBg: '#FF4D80', logoColor: '#FFFFFF' },
              { name: 'AJIO', discount: 'Up to 70% OFF', logo: 'AJ', logoBg: '#1A1A2E', logoColor: '#FFFFFF' },
              { name: 'Nykaa', discount: 'Up to 60% OFF', logo: 'N', logoBg: '#FC2884', logoColor: '#FFFFFF' },
              { name: 'Croma', discount: 'Up to 55% OFF', logo: 'CR', logoBg: '#00BEC4', logoColor: '#FFFFFF' },
              { name: 'Tata CLIQ', discount: 'Up to 60% OFF', logo: 'TC', logoBg: '#D51225', logoColor: '#FFFFFF' }
            ].map((store, idx) => (
              <Link
                key={idx}
                href="/stores"
                className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE] transition-all duration-300 group flex flex-col justify-between h-[180px]"
              >
                <div>
                  <div
                    className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-[1.05] shadow-2xs text-base font-black tracking-tighter"
                    style={{ backgroundColor: store.logoBg, color: store.logoColor }}
                  >
                    {store.logo}
                  </div>
                  <h3 className="font-extrabold text-xs text-[#1A1A2E] leading-tight truncate group-hover:text-[#5B4FBE] transition-colors">
                    {store.name}
                  </h3>
                </div>

                <div className="mt-3.5 space-y-2">
                  <div className="text-[10px] font-black text-[#FF5722] bg-[#FFF2ED] rounded-lg py-1 px-2 inline-block max-w-full truncate">
                    {store.discount}
                  </div>
                  <div className="text-[9px] font-black text-[#5B4FBE] tracking-wider uppercase flex items-center justify-center gap-0.5 select-none pt-1">
                    <span>View Offers</span>
                    <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

            {/* Left: Text Content */}
            <div className="prose max-w-none">
              <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                Pepperfry Coupon Codes, Promo Codes & Furniture Deals
              </h2>

              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Furnish Your Home for Less with Pepperfry Coupon Codes</h3>
                <p>
                  Furnishing a home is one of the biggest purchases most people make, and getting it wrong on price is easy if you are not comparing deals. Whether you are setting up a new living room, upgrading your bedroom, or simply refreshing your home décor, having the right discount can make a real difference. With the latest <strong>Pepperfry coupon codes</strong>, Couponscrew helps homeowners discover savings on sofas, beds, wardrobes, dining sets, and décor pieces.
                </p>
                <p>
                  From space-saving furniture to statement décor pieces, Pepperfry offers products designed for every room and budget. Before placing your next order, browse Couponscrew for the latest promo codes, discounts, and special offers.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Choose Pepperfry?</h3>
                  <p><strong>Built for Every Room:</strong> Pepperfry offers furniture and décor across living rooms, bedrooms, kitchens, and home offices.</p>
                  <p><strong>Quality-Driven Design:</strong> Each product is built with durability and finish quality in mind, sourced from trusted manufacturers and artisans.</p>
                  <p><strong>Wide Product Selection:</strong> Whether you are furnishing an entire home or replacing a single piece, Pepperfry offers options for different styles and budgets.</p>
                  <p><strong>Assembly & Installation Support:</strong> Many products come with assembly assistance, so setup at home is hassle-free.</p>
                  <p><strong>Online Shopping Convenience:</strong> Browse, compare, and order furniture from the comfort of your home, with delivery to your doorstep.</p>
                </div>

                {/* How to Use Steps */}
                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Pepperfry Coupon Code</h3>
                  <p className="text-gray-700 font-bold -mt-4">Saving on your next furniture purchase is quick and easy.</p>
                  <div className="space-y-6">
                    {[
                      "Step 1: Visit Couponscrew — Browse the latest Pepperfry coupon codes and promotional offers.",
                      "Step 2: Choose a Deal — Select the offer that best matches your purchase.",
                      "Step 3: Copy the Coupon Code — Copy the available promo code before visiting Pepperfry.",
                      "Step 4: Shop Your Favorite Furniture — Add your preferred furniture or décor pieces to your cart.",
                      "Step 5: Apply the Coupon — Paste the coupon code during checkout if applicable.",
                      "Step 6: Complete Your Order — Finish your purchase and get ready to furnish your space."
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

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Smart Ways to Save More on Furniture</h3>
                  <p className="text-gray-700 font-bold">Want to maximize your savings? Here are a few practical tips.</p>
                  <p><strong>Check Couponscrew Before Every Purchase:</strong> New Pepperfry promo codes and seasonal offers may become available throughout the year.</p>
                  <p><strong>Shop During Festive Home Sales:</strong> Major shopping events often feature additional discounts on furniture and décor.</p>
                  <p><strong>Plan Ahead for Big Purchases:</strong> Buying furniture before a move or renovation can help you avoid last-minute price hikes.</p>
                  <p><strong>Bundle Your Order:</strong> Purchasing multiple pieces for a room in one order may help you qualify for promotions or delivery benefits.</p>
                  <p><strong>Join Brand Updates:</strong> Subscribing to newsletters can help you stay informed about future product launches and exclusive offers.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Quality Furniture Matters</h3>
                  <p>Investing in dependable, well-made furniture can make every day at home more comfortable and enjoyable.</p>
                  <p className="text-gray-700 font-bold">Good furniture helps you:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                    <li>Make better use of available space</li>
                    <li>Improve comfort in everyday living</li>
                    <li>Create a cohesive look across rooms</li>
                    <li>Avoid frequent replacements over time</li>
                    <li>Furnish a home with greater confidence</li>
                  </ul>
                  <p>Whether you are furnishing your first home or upgrading an existing one, choosing quality furniture can enhance your overall experience.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Use Couponscrew for Pepperfry Deals?</h3>
                  <p className="text-gray-700 font-bold">Couponscrew helps shoppers discover valuable savings across furniture, home décor, fashion, technology, and lifestyle brands.</p>
                  <p><strong>Updated Discounts:</strong> We regularly update available Pepperfry promotions and coupon codes.</p>
                  <p><strong>Easy-to-Find Deals:</strong> Browse offers in one convenient location before making your purchase.</p>
                  <p><strong>Completely Free:</strong> Couponscrew is free to use whenever you're searching for ways to save.</p>
                  <p><strong>Trusted Brands:</strong> In addition to furniture, Couponscrew features savings from hundreds of popular brands across multiple shopping categories.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Start Furnishing Your Home Today</h3>
                  <p>Whether you are decorating a new home, upgrading a single room, or shopping for festive home décor, having the right furniture can make all the difference.</p>
                  <p>Browse the latest Pepperfry coupon codes, promo offers, and furniture deals on Couponscrew today and save on the pieces you need for your home.</p>
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
                <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                {[
                  { q: "What is Pepperfry?", a: "Pepperfry is an online furniture and home décor brand that offers sofas, beds, wardrobes, dining sets, and furnishings for every room in your home." },
                  { q: "What products does Pepperfry sell?", a: "Pepperfry offers furniture such as sofas, beds, wardrobes, dining sets, office furniture, and home décor accessories." },
                  { q: "Where can I find Pepperfry coupon codes?", a: "You can browse the latest Pepperfry coupon codes, promo offers, and furniture deals on Couponscrew." },
                  { q: "Is Pepperfry suitable for furnishing an entire home?", a: "Yes. Pepperfry offers furniture and décor across living rooms, bedrooms, kitchens, and home offices, suitable for furnishing an entire home." },
                  { q: "Does Pepperfry offer assembly support?", a: "Many products come with assembly assistance or installation support, depending on the item and your location." },
                  { q: "Is Couponscrew free to use?", a: "Absolutely. Couponscrew is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands." }
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
                    <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                      <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Pepperfry Searches</h3>
                <div className="flex flex-wrap gap-2.5">
                  {["Sofa Sets", "Pepperfry Promo Code", "Bedroom Furniture", "Dining Table Sets", "Home Décor Items", "Wardrobes & Storage", "Office Furniture", "Couponscrew Home"].map(tag => (
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
                    { heading: "Living Room Bundle Pack", sub: "Save up to 30% when bundling sofas, coffee tables and rugs" },
                    { heading: "First Order Promo Code", sub: "Special percentage metrics adjusted on introductory store registrations" },
                    { heading: "Complimentary Delivery", sub: "Standard logistics handling applied cleanly over minimum budget parameters" },
                    { heading: "Festive Home Sale", sub: "Limited-time price reductions on selected furniture and décor sets" },
                    { heading: "Couponscrew Active Coupon", sub: "Instant validation code application calculated cleanly during check out" }
                  ].map((deal, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">P</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                        <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                      </div>
                      <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Pepperfry deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
