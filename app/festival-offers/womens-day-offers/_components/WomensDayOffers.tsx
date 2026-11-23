'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import {
  LayoutGrid,
  Store,
  Sparkles,
  ShoppingBag,
  BookOpen,
  ChevronRight, AlertCircle, ShieldCheck, CheckCircle2, HelpCircle, TrendingUp,
  ChevronDown,
  ArrowRight,
  Gift,
  Plus,
  ExternalLink,
  Star,
} from 'lucide-react';
import { WOMENS_DAY_OFFERS_DATA } from './womensDayOffersData';

export default function WomensDayOffers() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [expandedOffers, setExpandedOffers] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedOffers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategoryBadgeClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('electronics')) return 'text-orange-700 bg-orange-100';
    if (cat.includes('fashion')) return 'text-pink-700 bg-pink-100';
    if (cat.includes('beauty')) return 'text-rose-700 bg-rose-100';
    if (cat.includes('sports')) return 'text-blue-700 bg-blue-100';
    if (cat.includes('eyewear')) return 'text-purple-700 bg-purple-100';
    if (cat.includes('mobile') || cat.includes('mobiles')) return 'text-indigo-700 bg-indigo-100';
    return 'text-gray-700 bg-gray-100';
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const faqs = [
    {
      q: "When do Women's Day offers start in 2026?",
      a: "Women's Day offers typically start from March 1st, with the biggest deals peaking on March 7th and 8th. Beauty platforms like Nykaa and fashion apps like Myntra usually run extended sales through March 10th.",
    },
    {
      q: "Which brands give the best Women's Day discounts?",
      a: "Nykaa, Myntra, Amazon, Ajio, and Mamas & Papas run significant Women's Day sales. Wellness brands and beauty labels also offer gifting hampers and exclusive discount codes.",
    },
    {
      q: "Are there bank offers available on Women's Day?",
      a: "Yes! HDFC, ICICI, SBI, and Axis Bank often offer 10% cashback or instant discounts on credit and debit card transactions at beauty and fashion stores during Women's Day sale events.",
    },
    {
      q: "How can I get the latest Women's Day coupon codes?",
      a: "CouponsCrew updates all Women's Day coupon codes daily. Browse this page or subscribe to our newsletter for instant deal alerts straight to your inbox every March.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A6A] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* Breadcrumb */}
        <nav className="flex items-center text-xs text-gray-500 gap-1.5 font-medium">
          <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/festival-offers" className="hover:text-[#5B4FBE] transition-colors">Festivals</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">Women's Day Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Women's Day Offers 2027 – Deals & Discount Codes for International Women's Day
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      International Women's Day falls on 8 March every year, and 2027 is shaping up to be one of the busiest shopping days for Women's Day sales across Indian e-commerce. Fashion brands, beauty labels, wellness platforms, and lifestyle stores run dedicated Women's Day discount offers in the days leading up to and following March 8.
                      This page covers the Women's Day 2027 offers and coupon codes available across top Indian stores — updated as deals go live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789520142/Mother_s_Day_oeupem.webp"
                  alt="Women's Day offers"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-1">
              <Link href="/stores/categories" className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group">
                <LayoutGrid className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Categories</span>
              </Link>
              <Link href="/stores" className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group">
                <Store className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Stores</span>
              </Link>
              <Link href="/products" className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group">
                <ShoppingBag className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Product Deals</span>
              </Link>
              <Link href="/festival-offers" className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group">
                <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Festival Offers</span>
              </Link>
              <Link href="/blog" className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Blog</span>
              </Link>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-[#F0EEFF] rounded-2xl p-4 border border-purple-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-200/70 text-[#5B4FBE] flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm leading-tight">Never Miss a Festival Deal!</h4>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">Get the latest offers, deals and updates directly in your inbox.</p>
              </div>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FBE]"
                />
                <button type="submit" className="w-full py-2 bg-[#5B4FBE] hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm">
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && <p className="text-[11px] text-emerald-600 font-bold text-center">Subscribed successfully!</p>}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-8">

            {/* TOP OFFERS SECTION */}
            <section id="top-offers" className="space-y-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-pink-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Women's Day Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Women's Day deals from top brands to help you save more this March.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {WOMENS_DAY_OFFERS_DATA.map((offer) => (
                  <div
                    key={offer.id}
                    id={offer.id}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative"
                  >
                    {/* Left: Purple Discount Block with Cut-Out Notch */}
                    <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                      <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">
                        {offer.badgeType || 'UP TO'}
                      </span>
                      <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">
                        {offer.discountValue
                          ? offer.discountValue
                            .replace('UP TO ', '')
                            .replace('FLAT ', '')
                            .replace(' OFF', '')
                          : ''}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                      <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">
                        {offer.scopeText || offer.category}
                      </span>

                      {/* Notch Cutout Indicator */}
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                    </div>

                    {/* Middle: Details & Expandable Points */}
                    <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${typeof getCategoryBadgeClass === 'function' ? getCategoryBadgeClass(offer.category) : 'text-pink-700 bg-pink-100'}`}>
                            {offer.category}
                          </span>
                          {offer.isVerified && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                              VERIFIED
                            </span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                          {offer.title}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {offer.description}
                        </p>

                        {offer.points && offer.points.length > 0 && (
                          <div className="mt-3">
                            <button
                              type="button"
                              onClick={() => toggleDetails(offer.id)}
                              className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none cursor-pointer"
                            >
                              <span>View Details</span>
                              <ChevronDown
                                className={`w-4 h-4 text-indigo-600 transition-transform duration-200 ${expandedOffers[offer.id] ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {expandedOffers[offer.id] && (
                              <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                                {offer.points.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Brand Logo & Actions */}
                    <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src={offer.brandLogo}
                          alt={offer.brandName}
                          className="h-9 w-auto object-contain max-w-[130px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="w-full space-y-2">
                        {offer.code ? (
                          <div className="w-full bg-slate-50 border border-dashed border-slate-300 text-center py-2.5 rounded-xl font-bold text-slate-800 text-sm">
                            {offer.code}
                          </div>
                        ) : null}
                        <a
                          href={offer.dealUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        >
                          <span>Get Deal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href={`/stores/${offer.storeSlug ?? `${offer.brandName.toLowerCase().replace(/\s+/g, '-')}-coupon-code`}`}
                          className="w-full bg-white border border-gray-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                        >
                          <span>Visit Store</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* POPULAR BRANDS */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands for Women's Day Shopping
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Find the latest Women's Day deals, discounts, and offers from top brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Amazon', slug: 'amazon-coupon-code', logoBg: '#EAF2FB', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg', discountLabel: 'Up to 90% OFF', logo: 'amazon' },
              { name: 'Pepperfry', slug: 'pepperfry-coupon-code', logoBg: '#FDF1E7', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg', discountLabel: 'Up to 80% OFF', logo: 'pepperfry' },
              { name: 'Myntra', slug: 'myntra-coupon-code', logoBg: '#FFF0F4', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp', discountLabel: 'Up to 90% OFF', logo: 'myntra' },
              { name: 'Flipkart', slug: 'flipkart-coupon-code', logoBg: '#EBF2FE', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp', discountLabel: 'Up to 95% OFF', logo: 'flipkart' },
              { name: 'Zepto', slug: 'zepto-coupon-code', logoBg: '#F3E9FC', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp', discountLabel: 'Up to 95% OFF', logo: 'zepto' },
              { name: 'Blinkit', slug: 'blinkit-coupon-code', logoBg: '#FDF7E3', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp', discountLabel: 'Up to 80% OFF', logo: 'blinkit' },
              { name: 'Swiggy', slug: 'swiggy-coupon-code', logoBg: '#FEF0E3', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp', discountLabel: 'Up to 50% OFF', logo: 'swiggy' },
              { name: 'Nykaa', slug: 'nykaa-coupon-code', logoBg: '#FDE9F1', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp', discountLabel: 'Up to 60% OFF', logo: 'nykaa' },
            ].map((brand) => (
              <div key={brand.slug} className="bg-white border border-[#E8E8F0] rounded-2xl p-6 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 group">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 mb-3 shadow-xs" style={{ backgroundColor: brand.logoBg }}>
                    <img src={brand.logoImage} alt={brand.name} className="max-h-full max-w-full object-contain rounded-xl" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-base mb-2 group-hover:text-[#5B4FBE] transition-colors">{brand.name}</h3>
                  <span className="inline-block bg-[#FFF0EB] text-[#FF5722] font-bold text-xs px-3.5 py-1 rounded-full mb-5">{brand.discountLabel}</span>
                </div>
                <Link href={`/stores/${brand.slug}`} className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-all shadow-xs">
                  <span>Get Deal</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link href="/stores" className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-extrabold text-sm sm:text-base bg-white hover:bg-blue-50/60 transition-all shadow-xs">
              <LayoutGrid className="w-5 h-5 text-[#5B4FBE]" />
              <span>View More Stores</span>
            </Link>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <section className="py-16 border-t border-[#E8E8F0] font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

            {/* LEFT EDITORIAL CONTENT */}
            <div className="lg:col-span-7 space-y-10">

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#E91E8C] rounded-full block"></span>
                  <span className="text-xs font-black text-[#E91E8C] uppercase tracking-widest">Women's Day Sale 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  What to Expect from Women's Day Shopping in India
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>March 8 is now a genuine shopping event in India, not just a greeting card occasion. Here is what the Women's Day sale window typically looks like across categories:</p>
                  <p><strong>Beauty and skincare:</strong> Nykaa runs one of the most anticipated Women's Day sales. Expect discounts of 20–40% on skincare, haircare, and makeup from brands like Minimalist, Dot & Key, Plum, Sugar Cosmetics, and international labels like NYX and The Body Shop. Gift sets and hampers are specifically curated for this period.</p>
                  <p><strong>Fashion and clothing:</strong> Myntra's Women's Day sale covers Western wear, ethnic wear, activewear, and accessories. Brands like Levi's, H&M, Zara, Biba, and AND run deep discounts on Women's Day. The sale window typically runs from March 6 to March 10.</p>
                  <p><strong>Wellness and fitness:</strong> Cult.fit, HealthKart, and fitness accessories brands on Amazon run Women's Day promotions. Yoga mats, resistance bands, protein supplements for women, and wellness subscriptions all see March discounts.</p>
                  <p><strong>Gifting:</strong> FNP, IGP, and Amazon Gifting all curate Women's Day collections — flower bouquets, personalised gifts, chocolate hampers, and premium skincare gift sets. Same-day delivery is available in most metros from March 7–8.</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">

                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Nykaa Women's Day Sale</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Nykaa's Women's Day sale is the standout beauty event of early March. The platform typically runs it as a 5–7 day sale from around March 4–10, with the best deals live on March 7 and 8.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What works well on Nykaa during Women's Day:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Skincare sets:</strong> Minimalist, Dot & Key, and Plum bundle their bestsellers into Women's Day gift sets at 20–30% off. These are often better value than buying individual products.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Premium international brands:</strong> MAC, Bobbi Brown, Estée Lauder, and Charlotte Tilbury are rarely discounted — Women's Day is one of the few times Nykaa runs promotions on these labels.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Haircare deals:</strong> Matrix, Streax, Wella, and Schwarzkopf hair colour and treatment products are discounted. Good window to stock up on salon-quality products.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Nykaa Fashion:</strong> The fashion arm runs parallel Women's Day discounts on western wear, ethnic wear, and footwear — a good alternative to Myntra with curated selections.</span></li>
                  </ul>
                </div>

                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]"><Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] hover:underline">Myntra</Link> Women's Day Deals</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Myntra runs a dedicated Women's Day sale with hundreds of brands participating. Fashion is the core focus, but the platform also covers beauty and home categories.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Western wear:</strong> H&M, Zara, Mango, Gap, and AND all participate with 30–50% off on dresses, tops, trousers, and workwear — the sale is broader than the standard End of Reason Sale.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Ethnic wear:</strong> Biba, W for Woman, Global Desi, and Libas run their own Women's Day promotions on Myntra — good window for kurta sets, co-ords, and fusion wear.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Activewear:</strong> Nike Women, Puma Women, and Adidas Women collections are specifically highlighted during the Women's Day sale on Myntra with up to 40% off.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Footwear:</strong> Steve Madden, Aldo, Clarks, and Metro Shoes all have Women's Day deals on Myntra, covering heels, sneakers, flats, and sandals.</span></li>
                  </ul>
                </div>

                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]"><Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] hover:underline">Amazon</Link> Women's Day Offers</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon runs "Amazon Women's Day Sale" with deals spanning beauty, fashion, home, electronics, and books. The selection is broader than specialist platforms but depth per category varies.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Women's Day Gift Hampers:</strong> Amazon curates ready-to-gift sets combining skincare, chocolates, books, and accessories — available with same-day Prime delivery in metros on March 7–8.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Kindle and Fire devices:</strong> Amazon often discounts Kindle and Fire TV Stick during Women's Day — practical gifts for the reader or streamer in your life.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Books and stationery:</strong> Amazon's books section has curated Women's Day lists — fiction, nonfiction, self-help, and biographies — with bundle discounts. Good gifting option under ₹500.</span></li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span><span><strong>Smart home devices:</strong> Echo Dot, smart plugs, and Ring devices are discounted on Amazon during Women's Day — aimed at making everyday life easier.</span></li>
                  </ul>
                </div>

              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">More Stores</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Other Stores Worth Checking for Women's Day Offers
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    { store: "Ajio", desc: "Strong Women's Day fashion offers, particularly on western wear, fusion wear, and international brands. Ajio often has exclusive brand deals not found on Myntra." },
                    { store: "FNP (Ferns N Petals)", desc: "Women's Day flower and gift delivery. Rose bouquets, personalised gifts, chocolate hampers, and premium plant gifts with same-day delivery in metro cities." },
                    { store: "Plum Goodness", desc: "D2C skincare brand that runs its own Women's Day sale directly — 25–30% off on skincare bundles, face washes, serums, and SPF products. Good for stocking up." },
                    { store: "The Body Shop", desc: "Gift sets and body care hampers on Amazon and Nykaa. The Body Shop runs Women's Day promotions on shower gels, body butters, and gift boxes — popular gifting option." },
                    { store: "HealthKart", desc: "Women's nutrition and wellness: protein powders for women, iron and folate supplements, collagen tablets, and multivitamins all see March discounts. Stack with HealthKart coupon codes on CouponsCrew." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                      <h3 className="text-sm font-bold text-[#1A1A2E] mb-1">{item.store}</h3>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">From CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Happy Women's Day from CouponsCrew
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Women's Day is worth celebrating properly — which sometimes means buying yourself something you have been putting off, or finding a thoughtful gift for someone who deserves it. The deals this March are real, from brands that actually do well for women shoppers year-round.
                  </p>
                  <p>
                    CouponsCrew will update this page with verified Women's Day coupon codes as March approaches. Bookmark it and check back closer to March 8 for the best live codes on Nykaa, Myntra, Amazon, and more.
                  </p>
                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew before checkout this Women's Day to stack verified coupon codes on top of sale prices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Women's Day 2026</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Save More, Celebrate More This March 8
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>Whether you are shopping for yourself or for someone special, the Women's Day sale window is one of the best times of year to buy beauty, fashion, and wellness products.</p>
                  <p>This page will be updated with live Women's Day coupon codes and verified offers as March approaches. Bookmark it and check back for the best deals closer to the date.</p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Happy Women's Day from all of us at CouponsCrew!
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#E91E8C]" />
                    Women's Day Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine sale pricing, bank offers, and coupon codes.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Women's Day Markdown", desc: "Sale Prices from Top Brands" },
                      { label: "2. Bank & Wallet Offers", desc: "Instant Festive Discounts" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#E8E8F0]">
                      <span className="text-xs font-bold text-[#1A1A2E]">Combinable?</span>
                      <span className="text-xs font-black text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20 px-2 py-0.5 rounded-full">Yes, select items</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar FAQ */}
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#E91E8C]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Women's Day FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      { q: "When do Women's Day offers start in India in 2026?", a: "Women's Day sales typically go live from March 1, peaking on March 7 and 8. Nykaa, Myntra, and Amazon usually run extended sales through March 10." },
                      { q: "Which platform has the best Women's Day beauty deals?", a: "Nykaa leads for beauty — skincare sets, premium brands, and haircare see the deepest discounts. Amazon is also strong for gift hampers and international beauty brands." },
                      { q: "What are good Women's Day gift ideas under ₹500?", a: "Scented candles, small skincare sets from Plum or Dot & Key, a good book, a flower bouquet from FNP, or a Nykaa beauty kit are all great options under ₹500." },
                      { q: "Are there bank offers on Women's Day?", a: "Yes — HDFC, ICICI, SBI, and Kotak Bank often offer 10% cashback or instant discounts on purchases from Nykaa, Myntra, and Amazon during the Women's Day window." },
                      { q: "Does Myntra run a sale for Women's Day?", a: "Yes, Myntra runs a dedicated Women's Day sale with discounts on fashion, footwear, and accessories from brands like H&M, Zara, Biba, Nike Women, and AND." },
                      { q: "Can I get same-day delivery for Women's Day gifts?", a: "Yes — FNP and Amazon Prime offer same-day delivery on flowers, gift hampers, and select beauty products on March 7–8 in major metro cities." },
                      { q: "Is Nykaa's Women's Day sale genuine?", a: "Yes. Nykaa's Women's Day sale is one of the platform's real sale events — price drops on many premium products are verified. Check CouponsCrew for extra coupon codes on top." },
                      { q: "Which stores have the best Women's Day fashion deals?", a: "Myntra and Ajio are the top fashion platforms for Women's Day. H&M, Zara, Mango, Biba, and W for Woman all run discounts through these platforms in March." },
                      { q: "Are there Women's Day deals on wellness and fitness products?", a: "Yes — HealthKart, Amazon, and Cult.fit all run Women's Day promotions on protein supplements, yoga accessories, fitness wear, and wellness subscriptions." },
                      { q: "How do I find working Women's Day coupon codes?", a: "CouponsCrew updates Women's Day coupon codes for all major stores — Nykaa, Myntra, Amazon, FNP — as the sale window approaches. All codes are verified before going live." }
                    ].map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div key={index} className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#E91E8C] bg-[#FFF5F9]' : 'border-[#E8E8F0] bg-white hover:border-[#E91E8C]/40'}`}>
                          <button
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E8C] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#E91E8C]' : 'text-[#1A1A2E]'}`}>{faq.q}</span>
                            <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#E91E8C] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'}`}>
                              <Plus className="w-3.5 h-3.5" />
                            </div>
                          </button>
                          <div id={`sidebar-faq-${index}`} role="region" className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                              <div className="px-3 pb-3">
                                <div className="h-px w-full bg-[#E8E8F0] mb-2" />
                                <p className="text-[11px] text-[#4A4A6A] leading-relaxed font-medium">{faq.a}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  Women's Day Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Sale Window", status: "Mar 1 - Mar 10", active: true },
                    { name: "Top Categories", status: "Beauty, Fashion, Gifting", active: true },
                    { name: "Food & Delivery", status: "Zomato & Swiggy Offers", active: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#E8E8F0] last:border-0">
                      <span className="text-xs font-medium text-[#1A1A2E]">{item.name}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#FF9900]" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Women's Day Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Plan your Women's Day gifts and self-care purchases by March 5 to avoid sell-outs of popular beauty sets and flower arrangements closer to March 8.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
