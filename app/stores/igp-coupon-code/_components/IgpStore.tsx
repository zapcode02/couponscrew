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
import { Coupon, IGP_COUPONS } from './igpCoupons';

export type { Coupon };

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

// TODO: replace with real affiliate tracking link once available
const AFFILIATE_URL = 'https://www.igp.com/';

export default function IgpStore() {
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

  const coupons: Coupon[] = IGP_COUPONS;

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
      q: 'How do I use an IGP coupon code?',
      a: 'Add your gift items to the cart on igp.com, go to checkout, and enter the code in the "Apply Coupon" field before payment. The discount updates the order total instantly.'
    },
    {
      q: 'Can I use multiple coupon codes on IGP?',
      a: 'No — IGP allows one promo code per order. Occasion-specific sale pricing may already be reflected in the listed price alongside a code, but two separate codes cannot be combined.'
    },
    {
      q: 'Why is my IGP promo code not working?',
      a: 'Common reasons: the code has expired, your cart is below the minimum order value, the code excludes personalized or corporate gifting items, or it was limited to new users only.'
    },
    {
      q: 'Where can I find the best IGP offers?',
      a: 'We keep this IGP store page updated 24/7 with the best discounts, verified coupon codes, and upcoming occasion-based sale dates.'
    },
    {
      q: 'Does IGP offer same-day delivery?',
      a: 'Yes, IGP offers same-day delivery on cakes, flowers, and select gifts in major Indian cities, subject to ordering before the cut-off time shown on the product page.'
    },
    {
      q: 'How often are IGP coupons updated?',
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
            <span className="text-[#5B4FBE] font-semibold">IGP Coupon Code</span>
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
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861875/igp_logo_psekr7.webp"
                      alt="IGP Logo"
                      className="w-full h-auto object-contain"
                    />
                  </a>
                  {/* Rating indicator */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.4 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">IGP Coupon Codes</h1>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Find the latest IGP coupon code and IGP discount code for October 2026 to save on gifts, flowers, cakes, and personalized products. Enjoy up to 50% + 10% OFF during the IGP Bhai Dooj Sale, 49% OFF Personalized Bryan Candy Jars, free standard delivery, and 5% cashback on eligible orders. Shop personalized gifts, premium hampers, cakes, and festive surprises with same-day delivery in selected cities. Apply a verified IGP coupon code or discount code at checkout to maximize your savings.
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
                  <span>Visit IGP</span>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792861875/igp_logo_psekr7.webp"
                alt="IGP Offers"
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
              <div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 40%</div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">IGP Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified IGP coupon codes & offers.</p>
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
    How to Apply an IGP Discount Code
  </div>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to igp.com and add your chosen gift, flower, or cake to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At checkout, look for the "Apply Coupon" or "Use Coupon Code" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter your IGP coupon code exactly as shown — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the saving reflects in your order total before paying.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete payment. If you hold an HDFC card, see the SmartBuy section below — using an IGP gift voucher purchased on SmartBuy gives a separate 17.5% instant off that stacks with site-level offers.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Important for personalised orders: Once you place an order for a personalised item (custom engraving, photo print, name on cake), it cannot be cancelled regardless of when you contact support. Apply any code before confirming — a cancelled personalised order is not refundable or swappable.
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
          IGP Coupon Code: Save on Gifts, Flowers, and Cakes in India (October 2026)
        </p>

        <div className="overflow-x-auto my-6">
  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm text-sm border border-[#f0f0f0]">
    <thead>
      <tr className="bg-[#5B4FBE] text-white font-black">
        <th className="p-3.5 border-b border-[#5B4FBE]">Product / Offer Category</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Discount / Offer</th>
        <th className="p-3.5 border-b border-[#5B4FBE]">Key Highlights</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#f0f0f0]">
      <tr>
        <td className="p-3.5 font-bold text-black">Bhai Dooj Sale Event</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Up to 50% Off</td>
        <td className="p-3.5">Cakes, hampers, flowers & personalized festive gifts</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Personalized Bryan Candy Jar (Lavender Vanilla)</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">49% Off</td>
        <td className="p-3.5">Customizable jar; same-day delivery in select areas</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Decadent Delight Hamper</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">33% Off</td>
        <td className="p-3.5">Curated treat hamper; 90-minute delivery in select cities</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Personalized Spotify Couple Plaque</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">30% Off</td>
        <td className="p-3.5">Custom song & details keepsake; same-day delivery in select areas</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Personalized Daily Journal</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">26% Off</td>
        <td className="p-3.5">Custom name cover for daily notes, planning & journaling</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Personalized Make Your Own Gift</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">19% Off</td>
        <td className="p-3.5">Customizable keepsake; 90-minute delivery in select locations</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Shahi Rasmalai Cake</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">10% Off</td>
        <td className="p-3.5">Freshly prepared cake; 90-minute delivery in select cities</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Every Order Cashback</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Flat 5% Cashback</td>
        <td className="p-3.5">Earn cashback on every eligible purchase across categories</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Standard Delivery Offer</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">Free Delivery</td>
        <td className="p-3.5">Complimentary standard delivery on eligible products</td>
      </tr>
      <tr>
        <td className="p-3.5 font-bold text-black">Special Delivery Fees</td>
        <td className="p-3.5 text-[#5B4FBE] font-black">50% Off Fees</td>
        <td className="p-3.5">Discounted express & same-day delivery shipping charges</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An IGP coupon code is a promo code entered at checkout on igp.com to reduce the price of flowers, cakes, personalised gifts, hampers, or plants. Indian Gifts Portal (IGP) does release affiliate codes — unlike many gifting sites. Current working codes for October 2026 include CK20 (20% off above ₹1,299) and FLOWER12 (12% off above ₹199 on select products). Beyond codes, IGP's bigger savings come from HDFC SmartBuy gift vouchers (flat 17.5% instant discount), CashKaro cashback (9–10% on website orders), and bank card stacking.
          </p>

          <hr className="my-10 border-gray-200" />

          <div>
  <div className="space-y-4 text-slate-700">
    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP Coupon Codes — October 2026
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Code</th>
            <th className="p-4 font-bold">Offer</th>
            <th className="p-4 font-bold">Min. Cart</th>
            <th className="p-4 font-bold">Valid Until</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">CK20</td>
            <td className="p-4">20% off</td>
            <td className="p-4">₹1,299</td>
            <td className="p-4">31 Oct 2026</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">FLOWER12</td>
            <td className="p-4">12% off</td>
            <td className="p-4">₹199</td>
            <td className="p-4">~30 Oct 2026</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">CK10</td>
            <td className="p-4">10% off</td>
            <td className="p-4">No minimum confirmed</td>
            <td className="p-4">~31 Oct 2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP Offers That Don't Need a Code
    </p>

    <p>
      Most of IGP's best discounts apply automatically without any coupon code.
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
            <td className="p-4 font-semibold">Sitewide sale</td>
            <td className="p-4">Up to 60% off</td>
            <td className="p-4">On select gifts and seasonal collections</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Flowers</td>
            <td className="p-4">Up to 40% off</td>
            <td className="p-4">Fresh flowers and bouquets</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Cakes</td>
            <td className="p-4">Up to 30% off</td>
            <td className="p-4">Flavours, custom, and theme cakes</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Personalised gifts</td>
            <td className="p-4">Up to 30% off</td>
            <td className="p-4">Photo gifts, name products, engraving</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Hampers</td>
            <td className="p-4">Up to 25% off</td>
            <td className="p-4">Gift hampers and combo boxes</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">First-order discount</td>
            <td className="p-4">10–15% off</td>
            <td className="p-4">For new users on the IGP website</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">App-exclusive deals</td>
            <td className="p-4">Varies</td>
            <td className="p-4">Some discounts are app-only — check both channels</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The HDFC SmartBuy IGP Gift Voucher Method
    </p>

    <p>
      This is the saving angle most IGP coupon pages skip — and for HDFC cardholders, it often outperforms any available promo code.
    </p>

    <p>
      Instead of buying directly on igp.com, buy an IGP gift voucher through HDFC SmartBuy first. The voucher earns you an instant discount at purchase, and then you redeem its full face value on igp.com as normal — on top of whatever sale is running at the time.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Card</th>
            <th className="p-4 font-bold">Saving on Voucher Purchase</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">HDFC Infinia / Infinia Metal</td>
            <td className="p-4">Up to 16.5% value via 5X reward points</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">HDFC Diners Club Black / Biz Black / Black Metal</td>
            <td className="p-4">Up to 9.9% value via reward points</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">HDFC Regalia / Diners Privilege</td>
            <td className="p-4">Up to 6.6% via 5X reward points</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Other HDFC credit and debit cards</td>
            <td className="p-4">5% cashback</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Insta Deals option (select cards)</td>
            <td className="p-4">Flat 17.5% instant discount</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Example:</strong> Buy a ₹2,000 IGP gift voucher on HDFC SmartBuy using a standard HDFC credit card. Get 5% cashback (₹100 credited later). Redeem the full ₹2,000 on igp.com during a 30% flowers sale. Total saving: ₹600 from the sale + ₹100 cashback = ₹700 off a ₹2,000 cart.
    </p>

    <p className="mt-4">
      Vouchers are valid for 6 months from purchase. Source: GyFTR HDFC SmartBuy IGP voucher page (October 2026). Savings calculations are indicative — check HDFC SmartBuy for per-card maximums and caps before purchasing.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      CashKaro Cashback on IGP: The 9–10% You Might Be Missing
    </p>

    <p>
      CashKaro gives 9–10% cashback on IGP website orders when you shop through the CashKaro portal or app. Most buyers miss this because it's not a code — it's a cashback layer on top of whatever price and coupon is already applied.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How it works:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>Log in to CashKaro (cashkaro.com) and search for IGP.</li>
      <li>Click the "Get Cashback" or "Shop Now" button on the CashKaro IGP page.</li>
      <li>You'll be taken to igp.com — apply your coupon code (CK20, FLOWER12, etc.) at checkout as normal.</li>
      <li>Cashback is tracked within ~5 minutes and confirmed within ~45 days.</li>
    </ol>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      What CashKaro cashback excludes:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>IGP app orders — cashback only tracks on igp.com website orders</li>
      <li>Payments made using IGP Wallet, SuperCoins, or gift vouchers</li>
      <li>Platform and shipping fees</li>
    </ul>

    <p className="mt-4">
      <strong>If cashback doesn't track:</strong> Report a missing cashback claim within 30 days of the order date through your CashKaro account.
    </p>

    <p>
      Source: CashKaro Indian Gifts Portal page (October 2026).
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP's Delivery Tier System Explained
    </p>

    <p>
      IGP has four delivery speed tiers — and which one applies depends on your city, not just the product.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Delivery Type</th>
            <th className="p-4 font-bold">Speed</th>
            <th className="p-4 font-bold">Available In</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">30-minute delivery</td>
            <td className="p-4">Within 30 minutes</td>
            <td className="p-4">25+ cities (select express zones)</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Same-day delivery</td>
            <td className="p-4">Within a few hours</td>
            <td className="p-4">400+ cities</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Next-day / 1-2 day</td>
            <td className="p-4">By next evening</td>
            <td className="p-4">1,000+ cities</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">International delivery</td>
            <td className="p-4">4–7 business days</td>
            <td className="p-4">100+ countries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      What affects delivery speed more than your city:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Personalised items (photo prints, custom engraving, name cakes) need 2–3 additional production days before they can be dispatched — 30-minute or same-day delivery does not apply to these.
      </li>
      <li>
        Fresh flowers and cakes qualify for express slots in most cities where IGP has dark stores (50+ dark stores across India).
      </li>
      <li>
        Time-slot selection at checkout matters — IGP lets you choose delivery windows (morning, afternoon, evening) for same-day orders in major cities.
      </li>
    </ul>

    <p className="mt-4">
      For last-minute gifting — office anniversaries, forgotten birthdays, hospital visits — the 30-minute and same-day tiers are what make IGP genuinely different from courier-based gifting services.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      The Personalised Gift Cancellation Warning
    </p>

    <p>
      This is the most important thing to know before placing a personalised order on IGP — and most coupon pages don't mention it.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      Once you confirm a personalised gift order, it cannot be cancelled. This applies to:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>Photo gifts (frames, mugs, cushions with printed images)</li>
      <li>Engraved products (pens, keychains, jewellery)</li>
      <li>Custom cakes with names or messages</li>
      <li>Any product where you upload an image or enter a personalisation detail</li>
    </ul>

    <p className="mt-4">
      <strong>The reason is production:</strong> personalised items go into manufacture immediately after order confirmation. IGP cannot reverse that process.
    </p>

    <p>
      <strong>For all other products (standard courier items):</strong> You can cancel before dispatch — contact IGP customer support as quickly as possible after placing the order.
    </p>

    <p>
      <strong>For perishables (fresh flowers, fresh cakes without personalisation):</strong> IGP offers a replacement (not a refund) if you report an issue within 24 hours of delivery.
    </p>

    <p>
      Apply your discount code, confirm the product details, and verify the delivery address before clicking "Place Order" on any personalised item.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP Artisan Sourcing: Why Prices on Some Products Are Higher
    </p>

    <p>
      IGP operates a direct-from-artisan model for handcrafted products. Artisans receive 25% of the selling price of each product — a deliberate revenue share built into the platform's pricing structure.
    </p>

    <p>
      This is worth knowing if you're comparing IGP's prices on handcrafted gifts (pottery, textiles, handmade jewellery) with mass-produced alternatives on Amazon or Meesho. The price difference partly reflects artisan sourcing, not just brand margin. Products sourced this way are not available for the deepest coupon discounts — codes like CK20 apply to "selected products" and typically exclude premium artisan items.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP vs FNP vs FlowerAura: Which Platform for Which Occasion?
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-[#5B4FBE] text-white">
            <th className="p-4 font-bold">Feature</th>
            <th className="p-4 font-bold">IGP</th>
            <th className="p-4 font-bold">FNP (Ferns N Petals)</th>
            <th className="p-4 font-bold">FlowerAura</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          <tr>
            <td className="p-4 font-semibold">Founded</td>
            <td className="p-4">~1999</td>
            <td className="p-4">1994</td>
            <td className="p-4">2010</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">City coverage (same-day)</td>
            <td className="p-4">400+ cities</td>
            <td className="p-4">400+ cities</td>
            <td className="p-4">300+ cities</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Express delivery</td>
            <td className="p-4">30 min in 25+ cities</td>
            <td className="p-4">Not standard</td>
            <td className="p-4">3-hour delivery in select cities</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">International delivery</td>
            <td className="p-4">100+ countries</td>
            <td className="p-4">100+ countries</td>
            <td className="p-4">Limited international</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Personalised gifts</td>
            <td className="p-4">1,000+ options</td>
            <td className="p-4">Moderate range</td>
            <td className="p-4">Moderate range</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Fresh flowers entry price</td>
            <td className="p-4">From ₹499</td>
            <td className="p-4">From ₹399</td>
            <td className="p-4">From ₹349</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Cakes entry price</td>
            <td className="p-4">From ₹549</td>
            <td className="p-4">From ₹499</td>
            <td className="p-4">From ₹349</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Cancellation (personalised)</td>
            <td className="p-4">Cannot cancel once placed</td>
            <td className="p-4">Varies by product</td>
            <td className="p-4">Varies by product</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">Artisan products</td>
            <td className="p-4">Available (25% artisan revenue share)</td>
            <td className="p-4">Limited</td>
            <td className="p-4">Limited</td>
          </tr>
          <tr className="bg-gray-50/50">
            <td className="p-4 font-semibold">Affiliate cashback</td>
            <td className="p-4">CashKaro 9–10% (website only)</td>
            <td className="p-4">Varies</td>
            <td className="p-4">Varies</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">HDFC SmartBuy voucher</td>
            <td className="p-4">17.5% instant off available</td>
            <td className="p-4">Not listed</td>
            <td className="p-4">Not listed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Pick IGP if:</strong> You need 30-minute delivery in a metro, want more than 1,000 personalisation options, or plan to gift internationally. Also the strongest choice if you hold an HDFC card and want to use the SmartBuy voucher discount.
    </p>

    <p>
      <strong>Pick FNP if:</strong> You're ordering fresh flowers on a tighter budget (lower entry price), or you're more comfortable with a brand that has 30+ years of retail presence across India.
    </p>

    <p>
      <strong>Pick FlowerAura if:</strong> You want lower entry prices on flowers and cakes and don't need personalisation or international delivery.
    </p>

    <hr className="my-6 border-slate-200" />

    <p className="text-xl font-black text-[#5B4FBE] mb-4">
      IGP for NRI Gifting: Sending Gifts to India from Abroad
    </p>

    <p>
      IGP has a practical use case most Indian coupon pages ignore: NRIs sending gifts to family in India from overseas.
    </p>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      How it works:
    </p>

    <ol className="list-decimal pl-5 space-y-2">
      <li>Create an IGP account using your international email and phone number.</li>
      <li>Browse and select gifts — flowers, cakes, personalised items, hampers.</li>
      <li>Enter the recipient's address in India at checkout.</li>
      <li>Pay in INR using an international credit/debit card (Visa, Mastercard, Amex accepted).</li>
      <li>IGP delivers in India directly — you don't need a local forwarding address.</li>
    </ol>

    <p className="text-lg font-bold text-[#2C2C40] mt-6">
      What makes it practical for NRI use:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li>
        Same-day delivery is available even for orders placed from overseas time zones (as long as the checkout window for same-day is still open in Indian time).
      </li>
      <li>
        Real-time order tracking — you get SMS and email updates on delivery status without being in India.
      </li>
      <li>
        Customer support handles delivery disputes — if flowers arrive damaged, you raise it from wherever you are.
      </li>
    </ul>

    <p className="mt-4">
      IGP ships to 100+ countries for international delivery, but for NRI-to-India gifting, you're shipping within India — the NRI just pays from abroad. This is an important distinction: international delivery and NRI gifting use different logistics paths.
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
                What is the best IGP coupon code right now?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of October 2026, CK20 gives the highest percentage off at 20% on orders above ₹1,299 — valid until October 31. FLOWER12 gives 12% off with a lower minimum of ₹199. For HDFC cardholders, buying an IGP gift voucher through HDFC SmartBuy (flat 17.5% instant off on select cards) may save more than either code, particularly on larger orders. Stack CashKaro's 9–10% cashback on top for maximum saving.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does IGP offer same-day delivery?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes — IGP offers same-day delivery in 400+ cities and 30-minute delivery in 25+ cities. Fresh flowers and cakes qualify for express slots. Personalised items require 2–3 additional production days and do not qualify for same-day or express delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Can I cancel an IGP order after placing it?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                It depends on the product type. Standard courier items can be cancelled before dispatch — contact support immediately after ordering. Personalised gifts (photo products, engraved items, custom cakes) cannot be cancelled once confirmed. Perishables (fresh flowers and plain cakes) are not refunded, but IGP issues a replacement if you report a problem within 24 hours of delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Does IGP coupon code work with CashKaro cashback?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. You can use a valid coupon code at IGP checkout and earn CashKaro cashback on the same order, as long as you shop through the CashKaro portal link (not the app), and pay without IGP Wallet or gift vouchers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <p className="font-black text-black text-base">
                Is IGP reliable for international delivery?
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                IGP ships to 100+ countries for international orders and processes most international deliveries within 4–7 business days. For NRIs sending gifts to Indian addresses, the delivery is domestic (within India) — you just pay from abroad using an international card. This typically processes faster than true cross-border shipping.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            For most buyers in October 2026, the practical stack is: use CK20 on an order above ₹1,299 (20% off), activate it through CashKaro's portal (9–10% cashback), and if you hold an HDFC card, buy an IGP voucher on SmartBuy first (17.5% instant off the voucher purchase) and redeem it at checkout. The three mechanisms are independent — they don't cancel each other out. On a ₹2,000 order, that combination can bring the effective cost down by ₹500–₹700 depending on which HDFC card you hold.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <p className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular IGP Searches
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["IGP Coupons", "Flowers & Cakes", "Personalised Gifts", "Same Day Delivery", "Cashback Offers", "Festive Hampers", "CouponsCrew Home"].map(tag => (
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
                Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at IGP checkout for instant discounts.
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
                <span>Continue to IGP</span>
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
