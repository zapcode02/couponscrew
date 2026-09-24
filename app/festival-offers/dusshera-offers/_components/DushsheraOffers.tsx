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
  ChevronRight,
  ChevronDown,
  ArrowRight, AlertCircle, ShieldCheck, CheckCircle2, HelpCircle, TrendingUp,
  Gift,
  Plus,
  Minus,
  ExternalLink,
  Flame,
  Calendar,
} from 'lucide-react';

// ============================================================================
// MAIN DUSSHERA OFFERS PAGE COMPONENT
// ============================================================================
export default function DushsheraOffers() {
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
      q: 'When do Dusshera offers start in 2026?',
      a: 'Dusshera offers typically start a week before the festival and run through the long weekend. Most brands kick off their sales around early October 2026.',
    },
    {
      q: 'Which brands give the best Dusshera discounts?',
      a: 'Amazon Great Indian Festival, Flipkart Big Billion Days, Myntra, and Nykaa all coincide with the Dusshera period, offering up to 80% off across categories.',
    },
    {
      q: 'Are there bank offers available during Dusshera?',
      a: 'Yes! HDFC, ICICI, SBI, and Axis Bank provide 10% instant discounts on credit/debit card transactions during major festive sale events around Dusshera.',
    },
    {
      q: 'How can I get the latest Dusshera coupon codes?',
      a: 'CouponsCrew updates all Dusshera coupon codes daily. Simply browse this page or subscribe to our newsletter for instant deal alerts.',
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
          <span className="text-gray-900 font-semibold">Dusshera Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Dusshera Offers 2026 — Best Deals on Fashion, Electronics, Home &amp; More
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      Dusshera marks the victory of good over evil — and this year, evil prices are getting defeated too. Shop the biggest festive sales from Amazon, Flipkart, Myntra and more with deep discounts, exclusive coupon codes, and bank cashback offers on everything from fashion to electronics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790037915/Dusshera_ffy0tw.webp"
                  alt="Dusshera offers"
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
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Dusshera Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Dusshera deals from top brands to help you save more this festive season.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                {/* OFFER 1: Amazon Great Indian Festival */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">80%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">GREAT INDIAN FESTIVAL</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">ELECTRONICS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Great Indian Festival – Up to 80% OFF this Dusshera
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biggest sale of the season — shop mobiles, laptops, TVs, fashion &amp; more with no coupon code needed.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('dsh-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="dsh-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Nykaa Dusshera Sale – Up to 50% OFF on Beauty & Skincare</h3>
                      <p className="text-xs text-gray-500 mt-1">Glow this festive season! Shop makeup, skincare, haircare & more at unbeatable prices.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('dsh-nyk-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="dsh-nyk-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected beauty brands and products.</span></div>
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
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Lenskart Dusshera Sale – Up to 50% OFF on Eyewear</h3>
                      <p className="text-xs text-gray-500 mt-1">Buy 1 Get 1 Free & flat discounts on prescription glasses, sunglasses & contact lenses.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('dsh-lk-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="dsh-lk-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected frames and lens collections.</span></div>
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

                {/* JioMart Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">60%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON GROCERIES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase">GROCERIES</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">JioMart Dusshera Sale – Up to 60% OFF on Groceries & More</h3>
                      <p className="text-xs text-gray-500 mt-1">Stock up on festive essentials — sweets, snacks, pooja items & daily groceries at great prices.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('dsh-jm-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="dsh-jm-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected grocery and festive categories.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787277415/joi-mart-logo_imkftb.webp" alt="JioMart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/jiomart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All JioMart Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.jiomart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/jiomart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>

                {/* Pepperfry Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON HOME DECOR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">HOME DECOR</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Pepperfry Dusshera Sale – Up to 70% OFF on Home Decor</h3>
                      <p className="text-xs text-gray-500 mt-1">Redecorate your home for the festive season! Shop furniture, lighting, decor & more.</p>
                      <div className="mt-3">
                        <button onClick={() => { document.getElementById('dsh-pf-1')?.classList.toggle('hidden'); }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                          <span>View Details</span><ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="dsh-pf-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected furniture and decor items.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg" alt="Pepperfry" className="h-9 w-auto object-contain" />
                      <Link href="/stores/pepperfry-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">View All Pepperfry Offers <ExternalLink className="w-3 h-3" /></Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.pepperfry.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">Get Deal <ArrowRight className="w-3.5 h-3.5" /></a>
                      <Link href="/stores/pepperfry-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all"><span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" /></Link>
                    </div>
                  </div>
                </div>

                {/* ADD MORE OFFER CARDS HERE */}

              </div>
            </section>

          </div>
        </div>

        {/* POPULAR BRANDS THIS DIWALI */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands This Dussehra
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Explore exclusive Dussehra offers from your favorite brands.
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

        {/* ==========================================
          SECTION 4 - SEO CONTENT (70/30 LAYOUT)
          ========================================== */}

        <section className="py-16 border-t border-[#E8E8F0] font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

            {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
            <div className="lg:col-span-7 space-y-10">

              {/* ARTICLE BLOCK 1: About Dussehra */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Dussehra & Vijayadashami 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  What Is Dussehra And Why Do We Celebrate It?
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Dussehra falls on the tenth day of Navratri, on the Shukla Paksha Dashami of the Ashwin month according to the Hindu calendar. In 2026, Dussehra (Vijayadashami) falls on October 2.
                  </p>
                  <p>
                    The festival has two major stories behind it, depending on which part of India you are in.
                  </p>
                  <p>
                    <strong>In North India and most of the country:</strong> Dussehra marks the day Lord Rama defeated the demon king Ravana, as told in the Ramayana. Across cities and towns, effigies of Ravana, Kumbhakarna, and Meghanad are burned in large public grounds — a tradition called Ravan Dahan. These events draw thousands of people every year. The burning of Ravana symbolises the victory of good over evil, of truth over deceit.
                  </p>
                  <p>
                    <strong>In Bengal, Odisha, and parts of South India:</strong> The dussehra festival overlaps with the end of Durga Puja. Vijayadashami here marks the day Goddess Durga defeated the demon Mahishasura. The day is observed with immersion of Durga idols (Sindoor Khela in Bengal) and public processions.
                  </p>
                  <p>
                    <strong>In Karnataka, Andhra Pradesh, and Tamil Nadu:</strong> About dasara in Mysuru (Mysore Dasara) — it is a ten-day state festival that is one of the largest in India. The Mysore Palace is lit up with nearly one lakh bulbs, there is a procession of decorated elephants, and it draws tourists from across the country and the world.
                  </p>
                  <p>
                    The word "Vijayadashami" itself means the tenth day of victory (Vijaya = victory, Dashami = tenth day). It is considered one of the most auspicious days of the year — many people start new ventures, purchase vehicles, or begin learning something new on this day.
                  </p>
                  <p>
                    Dasara Pooja is observed in many households and businesses. Tools, vehicles, books, and instruments are cleaned and worshipped. In South India particularly, dasara pooja has deep cultural roots — workshops and garages will close for a day to offer prayers to their equipment. Artists perform Ayudha Puja (worship of tools and weapons). Farmers worship their cattle and ploughs.
                  </p>
                  <p>
                    This is why the festive shopping season in India is not just retail — it is tied to a genuine cultural moment where new purchases carry meaning.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Festival Guide</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] leading-tight">
                    Special Vijayadashami Offers
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    The dussehra festival falls at a sweet spot in the retail calendar. It is after the monsoon, people are in a celebratory mood, and there are two to three more weeks until Diwali. This makes Vijayadashami a popular day for:
                  </p>
                </div>

                {/* Categories Grid/List */}
                <div className="space-y-4">
                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E]">Vehicle purchases</h3>
                    <p className="mt-1 text-xs text-[#4A4A6A] leading-relaxed">
                      Buying a new car or two-wheeler on Vijayadashami is considered highly auspicious. Dealerships know this and run special dasara offers with waived registration charges, free accessories, or cashback. Maruti Suzuki, Hyundai, Tata Motors, and Hero MotoCorp traditionally push offers on this day.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E]">Electronics and appliances</h3>
                    <p className="mt-1 text-xs text-[#4A4A6A] leading-relaxed">
                      Brands like Samsung, LG, Sony, and Voltas time launches or extended sale windows to overlap with Dussehra. If you were planning to buy a TV, laptop, or air conditioner, checking around Vijayadashami week makes sense.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E]">Gold and jewellery</h3>
                    <p className="mt-1 text-xs text-[#4A4A6A] leading-relaxed">
                      Many families consider Dussehra auspicious for buying gold. Tanishq, Malabar Gold, and PC Jewellers often run dussehra offers with making-charge waivers or gift vouchers.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E]">Fashion and ethnic wear</h3>
                    <p className="mt-1 text-xs text-[#4A4A6A] leading-relaxed">
                      Sarees, sherwanis, and traditional clothing see peak demand during Navratri and Dussehra. Brands like FabIndia, Biba, Manyavar, and Meena Bazaar run festive discounts through this window.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E]">Home and kitchen appliances</h3>
                    <p className="mt-1 text-xs text-[#4A4A6A] leading-relaxed">
                      The logic is the same as Dhanteras for Diwali — new purchases on an auspicious day. Pressure cookers, mixer grinders, and cookware brands run bundled offers.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Online, the dasara offers you will find are usually part of the larger Amazon and Flipkart festive season sales rather than standalone Dussehra events — which is why the two sections below matter.
                </p>

                {/* Amazon Great Indian Festival Sale or Dussehra Sale */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon Great Indian Festival Sale or Dussehra Sale</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon India's Great Indian Festival is the platform's biggest annual sale, and it almost always runs during the Navratri–Dussehra–Diwali window. In 2026, with Dussehra on October 2, the Great Indian Festival is expected to start in late September or early October — which means Vijayadashami falls right in the middle of the sale.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    This timing is deliberate. Amazon knows the dussehra festival is when Indian buyers are ready to spend, and the platform stacks the most aggressive deals in this window.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What Amazon runs during this period:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Smartphones:</strong> iPhone, Samsung Galaxy, OnePlus, Realme, and Poco all feature with some of the lowest prices of the year. Bank instant discounts (HDFC, SBI, ICICI) add another 10% on top.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Large Appliances:</strong> Refrigerators, washing machines, and ACs from LG, Whirlpool, Samsung, and Haier. Exchange bonuses for old appliances are at their highest.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>TVs:</strong> OLED, QLED, and smart TVs from Sony, LG, Samsung, and Xiaomi. Prices on 55"+ screens in particular drop significantly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon Devices:</strong> Echo, Kindle, Fire TV Stick, and Ring products see major price cuts — sometimes 40–50% off.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Fashion:</strong> Amazon Fashion runs parallel deals with ethnic wear, footwear, and accessories for the festive season.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Grocery:</strong> Amazon Fresh runs offers on dry fruits, sweets, and packaged festive items in the dasara offers window.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Prime members get early access, usually 24–48 hours before the sale opens to everyone. If you plan to buy something specific during the dasara offers on Amazon, having Prime active before the sale starts is the smart move.
                  </p>
                </div>

                {/* Flipkart Big Billion Day Sale or Dussehra Sale 2026 */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Flipkart Big Billion Day Sale or Dussehra Sale 2026</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart's Big Billion Days is the company's flagship annual sale — and just like Amazon's GIF, it is timed to land in the Navratri–Dussehra window every year. In 2026, the Big Billion Days sale is expected to run for five to ten days starting in late September, making it a direct Dussehra sale in practice.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart has historically been aggressive on smartphones and fashion, and the Big Billion Days is where you will find the steepest phone deals of the year.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What to expect from Flipkart's Dussehra sale:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Mobiles and Electronics:</strong> This is Flipkart's strongest category. Realme, Motorola, Samsung Galaxy, and iQOO all participate with exclusive deals and launch prices. Budget phones in the ₹8,000–₹15,000 segment get some of the steepest cuts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Fashion (via Myntra):</strong> Flipkart owns Myntra, and the festive fashion sale runs simultaneously. Ethnic wear, sarees, and kurtas — relevant for the dussehra festival — are heavily discounted. Brands like W, Biba, and Global Desi have historically had 50–60% off during this period.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Laptops and Computers:</strong> HP, Dell, Lenovo, and Asus all participate. Flipkart tends to match or beat Amazon on laptop pricing during the Big Billion Days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Home and Furniture:</strong> Flipkart's home segment includes brands like Godrej and HomeTown. Sofa sets, beds, and dining tables have seen 20–30% off during the Big Billion Days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Extra 10% on Axis Bank Cards:</strong> Flipkart traditionally partners with Axis Bank for an instant discount during the Big Billion Days. HDFC Bank EMI options are also available across most categories.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    One thing to keep in mind — the best deals during both Amazon and Flipkart's dussehra sale editions go fast. Lightning deals especially can sell out in under ten minutes. Have your address and payment method saved and ready to go.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Durga Pooja & Shopping */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Durga Puja & Shopping</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Durga Pooja and Festive Shopping Trends
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Durga Puja is the other major cultural event that runs in parallel with the dussehra festival season. While Dussehra is celebrated across India, Durga Puja is the central festival of West Bengal, Odisha, Assam, and the Bengali diaspora across the country.
                  </p>
                  <p>
                    Durga Puja runs for five days — Shashthi through Vijayadashami. The last day, Vijayadashami, is the same as Dussehra. So in the national calendar, these two events converge on the same date even though their cultural practices are quite different.
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      category: "Sarees & Ethnic Wear",
                      desc: "The Bengal saree — particularly Dhaniakhali, Baluchari, and Tant varieties — sees massive demand. Online platforms like Amazon, Flipkart, and Meesho all carry these now."
                    },
                    {
                      category: "Pandal Decoration Items",
                      desc: "Idols, lights, fabric decorations, and sound equipment are in demand from artisans and community organizers. Kumartuli artisan district is the main supply point for Durga idols."
                    },
                    {
                      category: "Gold & Silver",
                      desc: "Just like Dussehra buying traditions in the rest of India, Durga Puja is also an auspicious time for jewellery purchases in Bengal."
                    },
                    {
                      category: "Electronics & Gifting",
                      desc: "Companies in Bengal use Durga Puja as a gifting window for employees. Branded hampers, dry fruit boxes, and electronics vouchers are standard corporate gifts."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                      <h3 className="text-sm font-bold text-[#1A1A2E] mb-1">{item.category}</h3>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2E7D32] leading-relaxed">
                    Whether you are celebrating in Mysuru, Varanasi, or Kolkata, the October festive season is when deals are at their best across major e-commerce platforms.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Bottom Line */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Festival Significance</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Dussehra Is More Than a Sale — But the Deals Are Real
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The dussehra festival is rooted in stories that are thousands of years old — victory over evil, the power of devotion, the protection of what is good. The shopping and celebration around it is a modern layer on top of that, and there is nothing wrong with that. India has always had a tradition of buying new things during auspicious occasions.
                  </p>
                  <p>
                    What makes 2026's Dussehra window particularly strong for buyers is that both Amazon and Flipkart have their biggest sales running in exactly this period. If you were waiting for the right time to buy a phone, laptop, appliance, or simply wanted to shop for ethnic wear for the festive season — this is the window. The dasara offers are genuine, the bank discounts are real, and the competition between platforms keeps prices honest.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Wishing everyone a joyful dussehra festival — may Vijayadashami bring in good energy, new beginnings, and great savings! 🪔
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Happy Vijayadashami from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Celebrate Victory, New Beginnings & Great Deals
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    Whether you are watching Ravan Dahan, attending a Durga Puja pandal, or witnessing the Mysore procession, we wish you a prosperous festive season.
                  </p>
                  <p>
                    Check back as we keep this page updated with verified dussehra offers and coupon codes across Amazon, Flipkart, and more.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Shop auspicious. Save smart with CouponsCrew.
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
                    <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
                    Festive Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine Dussehra price drops, bank offers, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Festive Sale Price", desc: "Navratri & Dussehra Markdown" },
                      { label: "2. Bank Instant Discount", desc: "HDFC, SBI, ICICI Card Offers" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#5B4FBE]" />
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
                    <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Dussehra FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Dussehra in 2026?",
                        a: "Dussehra (Vijayadashami) is on October 2, 2026. It falls on the tenth day of Navratri, on the Shukla Paksha Dashami of the Ashwin month."
                      },
                      {
                        q: "What are the best dussehra offers to look for in 2026?",
                        a: "Electronics (phones, TVs, laptops), vehicles (cars and two-wheelers with dealer offers), gold and jewellery, and ethnic fashion are the main categories with strong deals."
                      },
                      {
                        q: "Is it auspicious to buy a vehicle on Dussehra?",
                        a: "Yes — Vijayadashami is one of the most auspicious days in the Hindu calendar for new purchases, especially vehicles. Dealerships across India run special dasara offers."
                      },
                      {
                        q: "What is dasara pooja?",
                        a: "Dasara pooja (Ayudha Puja) is the ritual worship of tools, vehicles, books, and instruments on Vijayadashami, widely observed in homes, businesses, and workshops."
                      },
                      {
                        q: "Are Amazon and Flipkart sales called Dussehra sales?",
                        a: "Amazon calls it the Great Indian Festival and Flipkart calls it the Big Billion Days. Both are timed to the Navratri–Dussehra–Diwali window, functioning as primary offer platforms."
                      },
                      {
                        q: "How is Dussehra celebrated in different states?",
                        a: "North India focuses on Ravan Dahan. South India (Mysuru) observes Mysore Dasara with a royal procession. Bengal celebrates Durga Puja ending in idol immersion on Vijayadashami."
                      },
                      {
                        q: "Can I find ethnic wear deals during Dussehra?",
                        a: "Yes. Myntra, Amazon Fashion, FabIndia, Manyavar, and Biba all run festive fashion sales with heavy discounts on sarees, kurta sets, and sherwanis."
                      },
                      {
                        q: "Is gold cheaper during Dussehra?",
                        a: "Gold market rates remain standard, but jewellery brands run dasara offers waiving making charges or providing complimentary gifts and vouchers."
                      },
                      {
                        q: "What is the significance of Mysore Dasara?",
                        a: "Mysore Dasara is a ten-day state festival in Karnataka where the Mysore Palace is illuminated with nearly one lakh bulbs, featuring a grand elephant procession."
                      },
                      {
                        q: "How do I find the best dussehra offers online?",
                        a: "Check CouponsCrew's festive offers page for verified coupon codes and cashback deals across major stores, and compare prices on Amazon and Flipkart."
                      }
                    ].map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#5B4FBE] bg-[#F8F8FF]' : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4FBE] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#5B4FBE]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#5B4FBE] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Festival Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Dussehra Date", status: "October 2, 2026", active: true },
                    { name: "Major Regions", status: "Pan-India & Bengal", active: true },
                    { name: "Traditional Ritual", status: "Ayudha Puja / Ravan Dahan", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Festive Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Vijayadashami is considered one of the most auspicious days for new beginnings and vehicle or appliance purchases. Book early to secure festive dealer offers.
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
