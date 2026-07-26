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

      <section className="py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

            {/* Left: Text Content */}
            <div className="prose max-w-none">
              <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                Pepperfry Coupons, Coupon Codes & Furniture Deals — July 2026
              </h2>

              <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>

                {/* Section 1: About Pepperfry */}
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About Pepperfry — India's Largest Furniture & Home Décor Marketplace</h3>
                <p>
                  Pepperfry was founded in 2012 in Mumbai by Ambareesh Murty (former eBay India head) and Ashish Shah. It is India's largest online furniture and home décor marketplace by catalogue depth and customer reach — 1,00,000+ products, 10,000+ registered sellers, and 20+ lakh customers served. In 2022, Pidilite Industries (makers of Fevicol) acquired a majority stake in Pepperfry, backing the brand with one of India's strongest FMCG balance sheets.
                </p>
                <p>
                  Pepperfry sells across eight major categories: furniture (sofas, beds, wardrobes, dining sets, office furniture), home décor (wall art, vases, clocks, photo frames), lighting, kitchen & dining accessories, bath accessories, garden & outdoor, and furnishings (curtains, cushions, bed linen). Every product listed goes through Pepperfry's quality check process before being approved for sale. Orders are delivered via Pepperfry's own logistics network in 10,000+ pin codes across India.
                </p>

                {/* Section 2: Offers Summary Table */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Pepperfry Active Offers — Quick Reference</h3>
                  <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0]">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Offer Type</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Category</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Discount</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Valid Till</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Deal', category: 'Furniture (Sofas, Beds, Wardrobes)', discount: 'Up to 75% OFF', valid: '30 Jun 2026' },
                          { type: 'Deal', category: 'Home Décor', discount: 'Up to 60% OFF', valid: '30 Jun 2026' },
                          { type: 'Deal', category: 'Kitchenware', discount: 'Up to 75% OFF', valid: '30 Jun 2026' },
                          { type: 'Flash Deal', category: 'Electronics (Weight Machines)', discount: 'Up to 75% OFF', valid: '30 Jun 2026' },
                          { type: 'Cashback', category: 'Furniture & Décor', discount: '20% Cashback', valid: '30 Jun 2026' },
                          { type: 'Flat ₹1 Flash', category: 'Dining Accessories (Placemats)', discount: 'Flat ₹1', valid: 'Limited Stock' },
                          { type: 'Flat ₹1 Flash', category: 'Kitchen (Vegetable Peeler)', discount: 'Flat ₹1', valid: 'Limited Stock' },
                          { type: 'Flat ₹1 Flash', category: 'Bath (Anti-Skid Mat)', discount: 'Flat ₹1', valid: 'Limited Stock' },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A]">{row.type}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A]">{row.category}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-black text-[#FF5722]">{row.discount}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A]">{row.valid}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3: Why Shop at Pepperfry via CouponsCrew */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Shop at Pepperfry via CouponsCrew</h3>
                  <p><strong>1,00,000+ Products, 10,000+ Sellers:</strong> India's deepest online furniture catalogue — from ₹1 décor accessories to ₹2,00,000+ luxury sofas.</p>
                  <p><strong>Studio Pepperfry — 50+ Offline Experience Centres:</strong> Visit a Studio to see, touch, and feel furniture before ordering online. Free interior design consultation included. Present in Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, Kolkata, and 25+ more cities.</p>
                  <p><strong>45-Day Return on Furniture:</strong> One of India's most generous return windows for furniture. Pickup from your doorstep in serviceable cities. 10-day return on décor and accessories.</p>
                  <p><strong>No-Cost EMI Available:</strong> On orders above ₹5,000 via HDFC Bank, SBI, ICICI Bank, Axis Bank, Bajaj Finserv, and most major credit cards (3–24 month tenure).</p>
                  <p><strong>Pepperfry Privilege Membership:</strong> Free loyalty programme — early sale access, member-exclusive codes, and priority customer service.</p>
                  <p><strong>CouponsCrew Advantage:</strong> We surface live Pepperfry coupon codes, cashback offers, bank card deals, and flash ₹1 deals as they go live — verified every morning.</p>
                </div>

                {/* Section 4: How to Use Coupon Codes */}
                <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Pepperfry Coupon Code</h3>
                  <p className="text-gray-700 font-bold -mt-4">Applying a Pepperfry coupon or activating a deal takes under 60 seconds.</p>
                  <div className="space-y-6">
                    {[
                      "Click \"Get Deal\" or \"Copy Code\" on any offer above. For no-code deals, clicking \"Get Deal\" on CouponsCrew takes you directly to the discounted page on Pepperfry.",
                      "Browse Pepperfry and add your chosen item to the cart. Verify the item is eligible — most deals cover the full catalogue; specific exclusions are noted in each offer description.",
                      "Proceed to Checkout. On the cart page, find the \"Apply Coupon\" or \"Promo Code\" field — it appears just above the Order Summary section.",
                      "Paste your copied code and click \"Apply.\" The discount updates in your order summary instantly.",
                      "Select your delivery slot. Pepperfry offers time-slot based delivery for furniture — choose a date and window that suits you.",
                      "Choose your payment method. Check the \"Offers\" tab in the payment section — bank card cashback (HDFC, SBI, ICICI, Axis) can stack on top of your coupon code for a double saving.",
                      "Complete your payment and receive an order confirmation with tracking details via SMS and email."
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

                {/* Section 5: Types of Offers */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Types of Pepperfry Offers Available</h3>
                  <p><strong>Percentage Discounts (Up to 75% OFF):</strong> Category-wide or product-specific markdowns — the most common offer type. Discount is pre-applied; no code needed.</p>
                  <p><strong>Flat ₹1 Flash Deals:</strong> Inventory-clearance deals on specific SKUs (bath mats, placemats, kitchen tools). Limited stock; first-come basis. Extremely high demand — act fast when you see one.</p>
                  <p><strong>Cashback (Up to 20%):</strong> Applied as Pepperfry credits on select orders. Credited within 24–48 hours of delivery. Use credits on your next order.</p>
                  <p><strong>Bank Card Instant Discounts:</strong> HDFC, SBI, ICICI, and Axis Bank offer an additional 10–15% instant discount on furniture orders above ₹15,000. Applied automatically at the payment step when using an eligible card.</p>
                  <p><strong>No-Cost EMI:</strong> On orders above ₹5,000 — zero processing fee on select offers, 3–24 month tenure.</p>
                  <p><strong>Seasonal Sales:</strong> Big Home Sale (twice yearly), Diwali Home Sale, Republic Day Sale, and End-of-Season sales — typically the deepest discounts of the year.</p>
                  <p><strong>New User Offers:</strong> Special first-order discount for first-time Pepperfry accounts — check the checkout page for the current offer.</p>
                  <p><strong>Privilege Member Deals:</strong> Early sale access and exclusive codes for registered Pepperfry Privilege members (free to join).</p>
                </div>

                {/* Section 6: Popular Categories & Bestsellers */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Popular Categories & Bestsellers at Pepperfry</h3>
                  <p>Pepperfry's catalogue spans every room. Here are the top-performing categories and consistently bestselling product types:</p>
                  <p><strong>Sofas & Sectionals:</strong> Pepperfry's #1 revenue category. Bestsellers: 3-seater fabric sofas in grey/beige, L-shaped sectionals, sofa-cum-beds for studio apartments. Price range: ₹8,000–₹80,000+.</p>
                  <p><strong>Beds & Bed Frames:</strong> Queen and king-size engineered wood beds with hydraulic storage drawers are the top-selling SKU type. Price range: ₹10,000–₹60,000.</p>
                  <p><strong>Wardrobes:</strong> Sliding-door and 3-door wardrobes in walnut finish and white, in engineered wood. Price range: ₹8,000–₹40,000.</p>
                  <p><strong>Dining Tables & Sets:</strong> 4-seater and 6-seater sets in solid sheesham wood and engineered wood. Price range: ₹6,000–₹40,000.</p>
                  <p><strong>Home Décor & Wall Art:</strong> Fastest-growing category — wall clocks, photo frames, decorative vases, canvas prints. Most items under ₹2,000.</p>
                  <p><strong>Office Furniture:</strong> Ergonomic chairs and study desks — strong demand post-2020 due to work-from-home adoption. Price range: ₹3,000–₹25,000.</p>
                  <p><strong>Lighting:</strong> Ceiling lights, floor lamps, bedside table lamps. Average order value under ₹3,000.</p>
                  <p><strong>Kitchen & Dining Accessories:</strong> Cutlery sets, serving bowls, placemats, storage containers — strong gifting segment year-round.</p>
                </div>

                {/* Section 7: Tips to Maximize Savings */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Tips to Maximize Your Savings at Pepperfry</h3>
                  <p><strong>Stack bank offers on coupon codes:</strong> Pepperfry allows coupon codes and bank card discounts together. Apply coupon first → then pay via HDFC/SBI/ICICI/Axis for an extra 10–15% instant discount on the already-reduced amount.</p>
                  <p><strong>Target the Big Home Sale:</strong> Held twice yearly (March–April and October–November) — Pepperfry's deepest event. Up to 75% OFF across all categories. CouponsCrew publishes codes ahead of the sale start.</p>
                  <p><strong>Use no-cost EMI for large furniture buys:</strong> Orders above ₹5,000 qualify. Spread the cost over 3–24 months with zero interest and zero processing fee on select bank offers.</p>
                  <p><strong>Watch the Flat ₹1 Flash Deals:</strong> These go live unannounced and sell out fast. CouponsCrew flags new ₹1 deals as soon as they appear.</p>
                  <p><strong>Join Pepperfry Privilege (free):</strong> Members get early access to sales (sometimes 24 hours before general public), exclusive promo codes, and dedicated support.</p>
                  <p><strong>Buy room-complete sets:</strong> Bundling sofa + coffee table + rug in one order often qualifies for free delivery and may trigger a bundle discount visible at checkout.</p>
                </div>

                {/* Section 8: Seasonal Sale Calendar */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Pepperfry Seasonal & Festive Sale Calendar</h3>
                  <p>Pepperfry runs several major sales annually. Here's when to shop for the deepest discounts:</p>
                  <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E8F0]">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Sale Name</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Typical Period</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Best Category</th>
                          <th className="bg-[#F0EEFF] text-[#5B4FBE] font-black px-4 py-3 text-left">Avg. Discount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Big Home Sale', period: 'March–April & Oct–Nov', category: 'Sofas, Beds, All Furniture', discount: 'Up to 75% OFF' },
                          { name: 'Diwali Home Sale', period: 'October–November', category: 'Décor, Lighting, Furnishings', discount: 'Up to 70% OFF' },
                          { name: 'Republic Day Sale', period: 'January', category: 'All Categories', discount: 'Up to 60% OFF' },
                          { name: 'End-of-Season Sale', period: 'Jan–Feb & July–August', category: 'Furniture, Wardrobes', discount: 'Up to 65% OFF' },
                          { name: 'Independence Day Sale', period: 'August', category: 'All Categories', discount: 'Up to 50% OFF' },
                          { name: 'Holi Home Sale', period: 'March', category: 'Décor & Colourful Furnishings', discount: 'Up to 55% OFF' },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-black text-[#1A1A2E]">{row.name}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A]">{row.period}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-semibold text-[#4A4A6A]">{row.category}</td>
                            <td className="px-4 py-3 border-b border-[#E8E8F0] font-black text-[#FF5722]">{row.discount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>CouponsCrew updates this page ahead of every major Pepperfry sale event — bookmark it and check back for live codes before each sale starts.</p>
                </div>

                {/* Section 9: Why Use CouponsCrew */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Use CouponsCrew for Pepperfry Deals</h3>
                  <p>CouponsCrew verifies Pepperfry coupon codes, cashback offers, bank card deals, and flash ₹1 deals every morning. Our deals team removes expired codes automatically — you only see working offers. Every deal link goes directly to the verified Pepperfry listing. No registration required. Completely free.</p>
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
                  { q: "How do I use a Pepperfry coupon code?", a: "Copy the code from CouponsCrew by clicking \"Copy Code,\" add your item to the Pepperfry cart, then find the \"Apply Coupon\" field above the Order Summary at checkout. Paste the code and click \"Apply\" — the discount updates instantly. For no-code deals, clicking \"Get Deal\" on CouponsCrew takes you directly to the discounted page." },
                  { q: "Can I combine a Pepperfry coupon code with a bank card offer?", a: "Yes — apply your coupon code first in the \"Apply Coupon\" field, then select your eligible bank card (HDFC, SBI, ICICI, Axis) at the payment step. The bank's instant discount or cashback applies to the already-reduced amount, giving you a double saving." },
                  { q: "Why is my Pepperfry coupon code not working?", a: "Common reasons: the code has expired, the order doesn't meet the minimum cart value, the product category is excluded, or the code is for new users only. CouponsCrew verifies codes daily — if one doesn't work, try the next listed offer or use a no-code deal." },
                  { q: "Does Pepperfry offer no-cost EMI?", a: "Yes. No-cost EMI is available on orders above ₹5,000 via HDFC Bank, SBI, ICICI Bank, Axis Bank, and Bajaj Finserv. Tenure ranges from 3 to 24 months. Processing fee is waived on select offers — check the payment page at checkout for current options." },
                  { q: "What is Pepperfry's return policy?", a: "Pepperfry offers a 45-day return window on furniture — one of India's most generous — and a 10-day return on home décor and accessories. Items must be in original condition. Pickup from your doorstep is provided in serviceable cities." },
                  { q: "What is Studio Pepperfry?", a: "Studio Pepperfry is Pepperfry's offline experience network — 50+ physical studios across 30+ Indian cities where customers can view, touch, and feel furniture before ordering online. Studios also offer free interior design consultations." },
                  { q: "When does Pepperfry hold its biggest sales?", a: "The Big Home Sale (March–April and October–November) is Pepperfry's largest discount event — up to 75% OFF. The Diwali Home Sale (October–November) is the second-biggest. CouponsCrew updates this page with active codes during every major sale." },
                  { q: "Is CouponsCrew free to use?", a: "Yes, completely free. CouponsCrew verifies and updates Pepperfry coupon codes, cashback offers, and bank card deals daily. No registration required." }
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
