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
  Minus,
  ExternalLink,
  Flame,
  Calendar,
} from 'lucide-react';

// ============================================================================
// MAIN BLACK FRIDAY OFFERS PAGE COMPONENT
// ============================================================================
export default function BlackFridayOffers() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      q: 'When is Black Friday 2026?',
      a: 'Black Friday 2026 falls on November 27th, the day after Thanksgiving. However, many brands start their Black Friday sales as early as the first week of November.',
    },
    {
      q: 'Which brands give the best Black Friday discounts?',
      a: 'Amazon, Flipkart, Myntra, Apple, Samsung, Nike, and hundreds of international brands offer their deepest discounts of the year on Black Friday — often up to 80% off.',
    },
    {
      q: 'Are there bank offers available on Black Friday?',
      a: 'Yes! Leading banks including HDFC, ICICI, SBI, and Axis Bank typically run special Black Friday cashback and instant discount offers on card payments.',
    },
    {
      q: 'How can I get the latest Black Friday coupon codes?',
      a: 'CouponsCrew updates all Black Friday coupon codes daily. Browse this page or subscribe to our newsletter so you never miss a deal.',
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
          <span className="text-gray-900 font-semibold">Black Friday Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Black Friday 2026 — Best Black Friday Sales, Deals & Offers in India and the USA
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      Black Friday is no longer just an American thing. It started in the United States, but over the last ten years it has become a genuine shopping event in India too — with Amazon India, Flipkart, Ajio, Zara, and dozens of other platforms running black friday deals in November every year. If you have never shopped a Black Friday sale before, this page covers everything: what it is, where it came from, which stores run it in 2026, and how to actually get the best deals rather than just the flashiest banners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790037932/Black-Friday-sale_zc3891.webp"
                  alt="Black Friday offers"
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
                <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Black Friday Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Black Friday deals from top brands — the deepest discounts of the year.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                {/* OFFER 1: Amazon Black Friday */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#1A1A2E] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">80%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">BLACK FRIDAY</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">ALL CATEGORIES</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Black Friday Sale – Up to 80% OFF Sitewide
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        The biggest Amazon sale event of the year — shop electronics, fashion, home, beauty &amp; more at once-a-year prices.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('bf-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on select categories as listed on the product page.</span></div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Minimum cart value might apply as specified on descriptions.</span></div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Covers selected brands and product collections.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Flipkart Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">80%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON SMARTPHONES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">MOBILES</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Big Billion Days – Up to 80% OFF on Smartphones
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Best deals on iPhones, Samsung, OnePlus, Poco & more during Flipkart's biggest sale.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('fk-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="fk-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid across top smartphone brands.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Myntra Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">90%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON FASHION</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded uppercase">FASHION</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra End of Reason Sale – Up to 90% OFF on Clothing
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Shop ethnic wear, western wear, footwear & accessories at unbeatable prices.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('myn-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="myn-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected collections only.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Nykaa Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON BEAUTY</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded uppercase">BEAUTY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Nykaa Black Friday � Up to 50% OFF on Beauty</h3>
                      <p className="text-xs text-gray-500 mt-1">The biggest beauty sale of the year � makeup, skincare, haircare at record-low prices.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('bf-nyk-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-nyk-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected beauty brands only.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp" alt="Nykaa" className="h-9 w-auto object-contain" />
                      <Link href="/stores/nykaa-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Nykaa Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.nykaa.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/nykaa-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>
                {/* Nike Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON FOOTWEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">SPORTS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Nike Black Friday Sale � Up to 50% OFF on Sneakers & Apparel</h3>
                      <p className="text-xs text-gray-500 mt-1">Best Black Friday deal for sports lovers! Shop Nike shoes, tees, jackets & more.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('bf-nike-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-nike-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected Nike products only.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/nike-logo_gbb4jw.webp" alt="Nike" className="h-9 w-auto object-contain" />
                      <Link href="/stores/nike-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Nike Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.nike.com/in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/nike-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>
                {/* Adidas Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON SPORTSWEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">SPORTS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Adidas Black Friday � Up to 50% OFF on Sportswear</h3>
                      <p className="text-xs text-gray-500 mt-1">Grab epic Black Friday deals on Adidas shoes, tracksuits, bags & accessories.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('bf-adidas-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-adidas-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected Adidas collections.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788919748/adidas-logo_ake9w8.webp" alt="Adidas" className="h-9 w-auto object-contain" />
                      <Link href="/stores/adidas-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Adidas Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.adidas.co.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/adidas-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>
                {/* Puma Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON SPORTSWEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded uppercase">SPORTS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Puma Black Friday � Up to 50% OFF on Shoes & Clothing</h3>
                      <p className="text-xs text-gray-500 mt-1">Score big this Black Friday with Puma's deepest discounts on footwear and activewear.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('bf-puma-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-puma-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected Puma products only.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/puma-logo_icfc8z.webp" alt="Puma" className="h-9 w-auto object-contain" />
                      <Link href="/stores/puma-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Puma Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://in.puma.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/puma-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>
                {/* Lenskart Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON EYEWEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">EYEWEAR</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Lenskart Black Friday � Up to 50% OFF on Eyewear</h3>
                      <p className="text-xs text-gray-500 mt-1">Black Friday eye-deals! Buy 1 Get 1 Free on premium glasses, sunglasses & lenses.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('bf-lk-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="bf-lk-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected frame and lens collections.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277414/lenskart-logo_oyfbdu.webp" alt="Lenskart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/lenskart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Lenskart Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.lenskart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/lenskart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>

                {/* ADD MORE OFFER CARDS HERE */}

              </div>
            </section>



          </div>
        </div>

        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands This Black Friday
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Explore Black Friday deals from your favorite brands.
            </p>
          </div>

          {/* Brands Grid matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Amazon',
                slug: 'amazon-coupon-code',
                logoBg: '#EAF2FB',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
                discountLabel: 'Up to 90% OFF',
                logo: 'amazon',
              },
              {
                name: 'Pepperfry',
                slug: 'pepperfry-coupon-code',
                logoBg: '#FDF1E7',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg',
                discountLabel: 'Up to 80% OFF',
                logo: 'pepperfry',
              },
              {
                name: 'Myntra',
                slug: 'myntra-coupon-code',
                logoBg: '#FFF0F4',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
                discountLabel: 'Up to 90% OFF',
                logo: 'myntra',
              },
              {
                name: 'Flipkart',
                slug: 'flipkart-coupon-code',
                logoBg: '#EBF2FE',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
                discountLabel: 'Up to 95% OFF',
                logo: 'flipkart',
              },
              {
                name: 'Zepto',
                slug: 'zepto-coupon-code',
                logoBg: '#F3E9FC',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp',
                discountLabel: 'Up to 95% OFF',
                logo: 'zepto',
              },
              {
                name: 'Blinkit',
                slug: 'blinkit-coupon-code',
                logoBg: '#FDF7E3',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp',
                discountLabel: 'Up to 80% OFF',
                logo: 'blinkit',
              },
              {
                name: 'Swiggy',
                slug: 'swiggy-coupon-code',
                logoBg: '#FEF0E3',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp',
                discountLabel: 'Up to 50% OFF',
                logo: 'swiggy',
              },
              {
                name: 'Nykaa',
                slug: 'nykaa-coupon-code',
                logoBg: '#FDE9F1',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp',
                discountLabel: 'Up to 60% OFF',
                logo: 'nykaa',
              },
            ].map((brand) => (
              <div
                key={brand.slug}
                className="bg-white border border-[#E8E8F0] rounded-2xl p-6 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center w-full">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 mb-3 shadow-xs"
                    style={{ backgroundColor: brand.logoBg }}
                  >
                    {brand.logoImage ? (
                      <img
                        src={brand.logoImage}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain rounded-xl"
                      />
                    ) : (
                      <span className="text-sm font-bold text-center">{brand.name}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-base mb-2 group-hover:text-[#5B4FBE] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="inline-block bg-[#FFF0EB] text-[#FF5722] font-bold text-xs px-3.5 py-1 rounded-full mb-5">
                    {brand.discountLabel}
                  </span>
                </div>
                <Link
                  href={`/stores/${brand.slug}`}
                  className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-all shadow-xs"
                >
                  <span>Get Deal</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* View More Stores Button matching Image 3 */}
          <div className="flex justify-center pt-4">
            <Link
              href="/stores"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-extrabold text-sm sm:text-base bg-white hover:bg-blue-50/60 transition-all shadow-xs"
            >
              <LayoutGrid className="w-5 h-5 text-[#5B4FBE]" />
              <span>View More Stores</span>
            </Link>
          </div>
        </section>
      </main>


      {/* ==========================================
          SECTION 4 - SEO CONTENT (70/30 LAYOUT)
          ========================================== */}

      <section className="py-16 border-t border-[#E8E8F0] font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

          {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
          <div className="lg:col-span-7 space-y-10">

            {/* ARTICLE BLOCK 1: What Is Black Friday */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#1A1A2E] rounded-full block"></span>
                <span className="text-xs font-black text-[#1A1A2E] uppercase tracking-widest">Black Friday 2026 Overview</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                What Is The Black Friday Sale About?
              </h2>
              <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  Black Friday is a shopping event that started in the United States and has since spread globally. The premise is simple: retailers offer significant discounts — often the deepest of the entire year — for one day or one weekend. Over time, the single-day event stretched into a week and then merged with Cyber Monday (the following Monday), creating what is now called Cyber Week or Black Friday Week.
                </p>
                <p>
                  In the USA, Black Friday is the day after Thanksgiving and historically marks the start of the Christmas shopping season. American retailers — both physical stores and online — have run black friday sales for decades. It is when people buy electronics, appliances, clothing, and gifts in bulk, often waiting in line from midnight or earlier (a tradition that has largely shifted online post-pandemic).
                </p>
                <p>
                  In India, Black Friday arrived via the tech and e-commerce wave. Amazon India was one of the first platforms to formally run an amazon in black friday sale, and since then Ajio, Myntra, Nykaa, Zara India, and others have followed. The discounts are real — especially on international fashion brands, electronics, and premium products that rarely go on sale otherwise.
                </p>
                <p>
                  <strong>Who benefits most from Black Friday in India?</strong>
                </p>
                <p>
                  <strong>International fashion lovers:</strong> Buyers looking for deals on brands like Zara, H&M, Mango, and Tommy Hilfiger that only discount during specific sale windows.
                </p>
                <p>
                  <strong>Tech enthusiasts:</strong> Anyone tracking an iPhone on black friday sale or a Mac Air black friday deals window — Apple products do not discount through the year, and Black Friday is when bank exchange offers make them significantly more accessible.
                </p>
                <p>
                  <strong>Post-festive shoppers:</strong> Shoppers who missed the October festive season sales on electronics and are looking for a second chance before Christmas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
              {/* Black Friday History and Name Origin */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">History & Guide</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                  Black Friday History and Why It's Called Black Friday
                </h2>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  The origin of the name "Black Friday" is something most people have wrong. The popular myth is that it refers to retailers going "from the red into the black" — i.e., from operating at a loss into profitability — because November was historically when holiday shopping tipped annual accounts into profit. That story is neat but not fully accurate.
                </p>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  The real origin is more mundane. The term "Black Friday" was first used in Philadelphia in the 1960s by police and bus drivers to describe the chaotic Friday after Thanksgiving — the day when enormous crowds flooded the city for the Army-Navy football game and holiday shopping. It was called "Black Friday" because it was a nightmare for anyone managing traffic and public order. Retailers later tried to rebrand it with the "black ink = profit" story, which stuck because it sounded better.
                </p>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  The event as we know it today — massive sales, midnight openings, doorbuster deals — took shape in the 1980s and 1990s in American retail. Walmart, Best Buy, and department stores like Macy's drove the format. Online, Amazon turned Black Friday into a multi-day or multi-week event in the 2000s, and that is the version that eventually spread to India and other countries.
                </p>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  <strong>Cyber Monday</strong> — the Monday following Black Friday — started in 2005 when online retailers noticed that shoppers who did not buy in stores on Friday came home and shopped online over the weekend. It is now as large or larger than Black Friday for online sales, and the two have effectively merged into one extended event.
                </p>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  The USA Black Friday sale remains the biggest shopping event in American retail, with total spending consistently above $9–10 billion in recent years. India's version is smaller but growing, especially as more international brands establish a direct presence here.
                </p>
              </div>

              {/* Main Section Header */}
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E]">The Black Friday Sale Is Here: Block The Dates On Your Calendar</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Black Friday 2026 is on November 27. But the sales start earlier — most platforms begin their black friday sales the week before, around November 20–21. Here is a platform-by-platform breakdown of what to expect:
                </p>
              </div>

              {/* Amazon Black Friday Deals */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Amazon Black Friday Deals (India and International)</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Amazon India runs one of the best black friday sales in the country. The amazon black friday deals window typically runs from around November 21–30, with the deepest offers concentrated on November 27–28.
                </p>
                <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What Amazon India covers during Black Friday:</h4>
                <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Apple Products:</strong> This is the one time of year where iphone on black friday sale pricing genuinely makes sense in India. Amazon stacks bank instant discounts (typically HDFC or SBI — 10% off), exchange bonuses, and no-cost EMI options. A new iPhone that costs ₹79,900 can effectively come down to ₹65,000–₹68,000 after exchange and bank offers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Mac and MacBook deals:</strong> Similarly, mac air black friday deals on Amazon India involve the same stacking approach. The MacBook Air M2 and M3 models see bank discounts and exchange offers during Black Friday that are not available at other times of the year.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Electronics clearance:</strong> Laptops, headphones, tablets, smartwatches, and cameras from November model cycles start clearing. Sony, Samsung, Bose, JBL, and OnePlus all participate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>International shopping via Amazon.com:</strong> If you have a US shipping address or use a package forwarding service, the usa black friday sale on Amazon.com has deals that still do not happen on the India site — especially on tech accessories, software, and niche products. Worth exploring if you have a way to access it.</span>
                  </li>
                </ul>
              </div>

              {/* Black Friday Sale on Flipkart */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Black Friday Sale on Flipkart</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Flipkart runs a dedicated Black Friday sale (black friday sale flipkart) in November. It is not as large as the Big Billion Days but has historically had strong deals on smartphones, laptops, and consumer electronics. The black friday sale on flipkart usually runs November 25–28.
                </p>
                <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">Key categories:</h4>
                <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Smartphones:</strong> Realme, Motorola, iQOO, and Samsung Galaxy deals. Good for mid-range buyers in the ₹15,000–₹30,000 range.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Laptops:</strong> HP, Dell, and Asus models from the mid-2026 release cycle tend to see their first serious discount during Black Friday on Flipkart.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Accessories:</strong> Power banks, earbuds, smartwatches, and phone cases at clearance prices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span><strong>Axis Bank card:</strong> Extra 10% off — Flipkart's standard bank partner for most sales, and Black Friday is no exception.</span>
                  </li>
                </ul>
              </div>

              {/* Ajio Black Friday Sale */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Ajio Black Friday Sale</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Ajio has become one of the stronger fashion platforms for Black Friday in India. The ajio black friday sale runs for a week around November 27 and covers:
                </p>
                <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span>Western wear, streetwear, and sports brands at 40–70% off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span>Nike, Adidas, Puma, Reebok, and Under Armour — brands that rarely discount outside of sale windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span>International fashion labels available exclusively through Ajio in India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                    <span>Footwear deals — running shoes and casual sneakers at Black Friday pricing</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                  If you missed Myntra's mid-year or December EORS, Ajio's Black Friday sale is a strong alternative for branded fashion deals.
                </p>
              </div>

              {/* Black Friday Sale on Zara India */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Black Friday Sale on Zara India</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  The black friday sale on zara is one of the more interesting ones in India. Zara does not run discount sales through the year — the brand is protective of its full-price positioning. Black Friday is one of the very few times Zara India discounts directly through its app and website.
                </p>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Zara India typically runs 20–40% off across its catalogue during Black Friday week. The deals are not as deep as a fast-fashion clearance, but for a brand that almost never discounts, this is significant. Popular categories include coats, formal wear, footwear, and accessories. Stock in popular sizes goes fast — add to wishlist and set a reminder for November 27.
                </p>
              </div>

              {/* Myntra Black Friday Sale */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Myntra Black Friday Sale</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Myntra runs a parallel Black Friday fashion sale that overlaps with Ajio. Brands like H&M, Mango, ONLY, Vero Moda, and Forever New participate. The advantage Myntra has over Ajio is selection depth — more Indian ethnic and fusion brands alongside the international ones. If you are looking for party wear for December events, Black Friday on Myntra is a good window.
                </p>
              </div>

              {/* Nykaa Black Friday Deals */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Nykaa Black Friday Deals</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Nykaa runs a beauty and skincare Black Friday sale with deals on premium international brands — The Ordinary, Charlotte Tilbury, Anastasia Beverly Hills, and more. Some of these brands do not discount in India outside of Black Friday and Nykaa's Pink Friday sale. If you use premium skincare or makeup, this is the window.
                </p>
              </div>

              {/* Croma Black Friday Sale */}
              <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <h3 className="text-base font-bold text-[#1A1A2E]">Croma Black Friday Sale</h3>
                <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                  Croma — Tata's electronics retail chain — runs Black Friday offers both online and in-store. Good for large appliances, TVs, and laptops where you want to see the product before buying. No-cost EMI and exchange offers are active. Worth visiting a Croma store if you are in a city with a physical location — in-store deals sometimes differ from online pricing.
                </p>
              </div>
            </div>

            {/* ARTICLE BLOCK 2: Bottom Line & Conclusion */}
            <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Global Shopping Event</span>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                Black Friday Is Real in India Now — Here Is How to Use It
              </h2>
              <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                <p>
                  Ten years ago, Black Friday barely registered in India. Today it is a legitimate shopping event with actual deals from brands like Zara, Apple (via bank stacking), Adidas, and Sony. The black friday sales window in November is one of the best chances before Christmas to buy something at a price that makes sense — especially if you are tracking a specific product and have been waiting for a discount.
                </p>
                <p>
                  The playbook is the same as any sale: know your price target, check history before buying, use a bank card that gets extra off, and stack a coupon code from CouponsCrew on top. Do that consistently and Black Friday pays off every year.
                </p>

                <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                    Check CouponsCrew on November 27 to stack verified coupon codes on top of Black Friday discounts. 🖤
                  </p>
                </div>
              </div>
            </div>

            {/* ARTICLE BLOCK 3: Platform Banner */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                <span className="text-xs font-black text-white/60 uppercase tracking-widest">CouponsCrew Black Friday 2026</span>
              </div>
              <h2 className="text-2xl font-black text-white leading-tight">
                Get Ready for November 27, 2026
              </h2>
              <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                <p>
                  As November approaches and Black Friday sale dates are confirmed by Amazon, Flipkart, Ajio, Zara India, Myntra, Nykaa, and Croma — this page will be updated with live deals and verified coupon codes.
                </p>
                <p>
                  Bookmark it now, come back in November, and we will have everything ready to help you save on top international brands and electronics.
                </p>
                <p className="text-white font-black tracking-wide pt-2">
                  Bookmark now. Save big this Black Friday with CouponsCrew.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT - SIDEBAR CARDS (30%) */}
          <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

            {/* SIDEBAR CARD 1 - Stack Visualizer */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#1A1A2E]" />
                  Black Friday Savings Stack
                </h3>
                <p className="text-xs text-[#4A4A6A] mb-4">Combine Friday price cuts, bank offers, and coupons.</p>

                <div className="space-y-2">
                  {[
                    { label: "1. Black Friday Markdown", desc: "Global Event Price Drops" },
                    { label: "2. Bank & Exchange Offer", desc: "HDFC, SBI Card Discounts" },
                    { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                  ].map((layer, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                      <div>
                        <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                        <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A2E]" />
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#E8E8F0]">
                    <span className="text-xs font-bold text-[#1A1A2E]">Combinable?</span>
                    <span className="text-xs font-black text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20 px-2 py-0.5 rounded-full">
                      Yes, select items
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar FAQ Accordion */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#1A1A2E]" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Black Friday FAQ 2026</h3>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      q: "When is Black Friday 2026?",
                      a: "Black Friday 2026 is on November 27, 2026 (the day after American Thanksgiving). Most Indian platforms start their sales from November 20–21."
                    },
                    {
                      q: "Does Amazon India run a proper Black Friday sale?",
                      a: "Yes, Amazon India runs a dedicated Black Friday sale from around November 21–30 covering electronics, fashion, and home goods with Prime early access."
                    },
                    {
                      q: "Is there a genuine iPhone on Black Friday sale in India?",
                      a: "While Apple MRP doesn't drop, Amazon and Flipkart stack bank discounts (10% instant off), exchange bonuses, and no-cost EMI for meaningful savings."
                    },
                    {
                      q: "Does Zara India participate in Black Friday?",
                      a: "Yes, Zara India's app and website run 20–40% off during Black Friday week, making it one of the rare times the brand discounts in India."
                    },
                    {
                      q: "What is the difference between Black Friday and Cyber Monday?",
                      a: "Black Friday is Friday (Nov 27) and Cyber Monday is the following Monday (Nov 30). In India, most platforms treat Nov 27–30 as one extended sale window."
                    },
                    {
                      q: "Are Mac Air Black Friday deals in India worth it?",
                      a: "Yes, combining bank card discounts, exchange bonuses, and no-cost EMI on Amazon and Flipkart can bring MacBook Air prices down by ₹8,000–₹15,000."
                    },
                    {
                      q: "Is Ajio's Black Friday sale good for sportswear?",
                      a: "Yes, Ajio offers 40–60% off on Nike, Adidas, and Puma footwear and sportswear, though popular sizes sell out on Day 1."
                    },
                    {
                      q: "Does Flipkart run a Black Friday sale every year?",
                      a: "Yes, Flipkart runs a consistent 5 to 7-day annual Black Friday event centered around November 27."
                    },
                    {
                      q: "How does USA Black Friday differ from India's?",
                      a: "USA Black Friday features deeper discounts on electronics and appliances through US retailers like Best Buy and Walmart compared to local equivalents."
                    },
                    {
                      q: "How do I find working Black Friday coupon codes?",
                      a: "Check CouponsCrew's store pages on November 27 for tested and verified coupon codes for Amazon, Flipkart, Ajio, Myntra, Nykaa, Croma, and Zara."
                    }
                  ].map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#1A1A2E] bg-[#F8F8FF]' : 'border-[#E8E8F0] bg-white hover:border-[#1A1A2E]/40'
                          }`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                          aria-controls={`sidebar-faq-${index}`}
                          className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A2E] rounded-xl"
                        >
                          <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'}`}>
                            {faq.q}
                          </span>
                          <div
                            className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#1A1A2E] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
                              }`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </div>
                        </button>

                        <div
                          id={`sidebar-faq-${index}`}
                          role="region"
                          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-3 pb-3">
                              <div className="h-px w-full bg-[#E8E8F0] mb-2" />
                              <p className="text-[11px] text-[#4A4A6A] leading-relaxed font-medium">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SIDEBAR CARD 2 - Supported Platforms */}
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                Black Friday Details
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Black Friday Date", status: "November 27, 2026", active: true },
                  { name: "Sale Window", status: "Nov 21 - Nov 30", active: true },
                  { name: "Top Categories", status: "Fashion & Electronics", active: true }
                ].map((platform, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#E8E8F0] last:border-0">
                    <span className="text-xs font-medium text-[#1A1A2E]">{platform.name}</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20">
                      {platform.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR CARD 3 - Shopping Warning */}
            <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-[#FF9900]" />
                <h3 className="font-extrabold text-[#1A1A2E] text-sm">Black Friday Tip</h3>
              </div>
              <p className="text-xs text-[#4A4A6A] leading-relaxed">
                International fashion brands like Zara and H&M see rapid size depletion on Day 1 of Black Friday. Shop early to secure your items.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
