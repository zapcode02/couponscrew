'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import {
  LayoutGrid,
  Store,
  Sparkles,
  ShoppingBag, AlertCircle, ShieldCheck, CheckCircle2, HelpCircle, TrendingUp,
  BookOpen,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Gift,
  Plus,
  Minus,
  ExternalLink,
  Star,
  Calendar,
} from 'lucide-react';

// ============================================================================
// MAIN NEW YEAR OFFERS PAGE COMPONENT
// ============================================================================
export default function NewYearOffers() {
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
      q: 'When do New Year offers start in 2027?',
      a: 'New Year offers typically kick off from late December (Christmas week) and run through the first week of January. The biggest discounts happen on December 31st and January 1st.',
    },
    {
      q: 'Which brands give the best New Year discounts?',
      a: 'Amazon, Flipkart, Myntra, Nykaa, and travel platforms like MakeMyTrip and Goibibo offer massive New Year sales across electronics, fashion, beauty, and travel.',
    },
    {
      q: 'Are there bank offers available on New Year?',
      a: 'Yes! Banks like HDFC, ICICI, SBI, and Axis Bank typically offer 10% instant cashback or discount on credit/debit card purchases during the New Year sale period.',
    },
    {
      q: 'How can I get the latest New Year coupon codes?',
      a: 'CouponsCrew updates all New Year coupon codes daily. Browse this page or subscribe to our newsletter for instant deal alerts straight to your inbox.',
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
          <span className="text-gray-900 font-semibold">New Year Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      New Year Offers 2026 — Best New Year Sale Deals on Flipkart, Amazon, Myntra & More
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      New Year is one of those rare occasions where the shopping calendar, the festive mood, and genuine retail clearance all line up at the same time. By late December, brands have inventory they need to clear before the new financial quarter. Shoppers have year-end bonuses, gift cards from Christmas, and a fresh mindset about upgrading things. And every major platform is competing for that spending. The result is a genuinely good window for deals — if you know where to look and what to buy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790037904/New_Year_ftitgk.webp"
                  alt="New Year offers"
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
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-blue-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top New Year Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked New Year deals from top brands to help you save more this season.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                {/* OFFER 1: Amazon New Year Electronics */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON ELECTRONICS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">ELECTRONICS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon New Year Sale – Up to 70% OFF on Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Kick off 2027 with huge savings on mobiles, laptops, TVs &amp; accessories — no coupon code required.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('ny-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="ny-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
                        Flipkart New Year Sale – Up to 80% OFF on Smartphones
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Start the New Year with the best deals on iPhones, Samsung, OnePlus & more.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('ny-fk-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="ny-fk-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
                        Myntra New Year Sale – Up to 90% OFF on Fashion
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Refresh your wardrobe for the New Year with huge savings on clothing, footwear & accessories.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('ny-myn-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="ny-myn-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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

                {/* ADD MORE OFFER CARDS HERE */}

              </div>
            </section>
          </div>
        </div>

        {/* POPULAR BRANDS THIS DIWALI */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Best New Year Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover exciting New Year discounts and offers from leading brands.

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

              {/* ARTICLE BLOCK 1: New Year Offers Overview */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
                  <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">New Year Offers & Deals 2026/2027</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Verified New Year Offers 2026, Deals & Discounts Online Shopping
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The period from December 26 to January 5 is when most new year offers go live. A few things make this window different from other sales:
                  </p>
                  <p>
                    <strong>It is a clearance sale, not a hype sale.</strong> Unlike Diwali or Big Billion Days — where brands build up to a peak date — the New Year sale is about moving stock. That means the discounts on older model electronics, last season's fashion, and home goods are often steeper than during flagship sales.
                  </p>
                  <p>
                    <strong>Multiple platforms run simultaneously.</strong> Amazon Year End Sale, Flipkart New Year Sale, Myntra End of Reason Sale, and Nykaa's New Year beauty offers all run in overlapping windows. This competition keeps prices honest — if one platform overprices something, another will have it cheaper.
                  </p>
                  <p>
                    <strong>The practical categories to focus on:</strong>
                  </p>
                  <p>
                    <strong>Electronics:</strong> Year-end is when laptops, TVs, and smartphones from earlier in 2026 see their lowest prices. January launches (like CES product announcements) give brands added reason to clear 2025–2026 inventory.
                  </p>
                  <p>
                    <strong>Fashion:</strong> End-of-season winter clearance. Jackets, boots, woollens, and party wear from October–November collections all discount heavily.
                  </p>
                  <p>
                    <strong>Home and kitchen:</strong> People often resolve to upgrade their home setup for the new year. Brands run offers on air fryers, coffee machines, and home decor to meet this demand.
                  </p>
                  <p>
                    <strong>Fitness:</strong> Gym equipment, protein supplements, fitness trackers, and running shoes all see new year offers — brands know January is peak "new year, new resolution" territory.
                  </p>
                  <p>
                    <strong>Subscriptions and memberships:</strong> OTT platforms, fitness apps, and Amazon Prime often have year-end subscription deals. Worth checking if any of your subscriptions are due for renewal.
                  </p>
                  <p>
                    One thing worth saying plainly: not every "New Year offer" is an actual deal. Some products get a cosmetic price cut that still leaves them above where they were three months ago. Use a price history tool (Keepa for Amazon, or the Flipkart price history feature) to verify that a "sale price" is actually lower than the usual selling price. CouponsCrew only lists verified deals — but even then, double-checking on big purchases is a habit worth keeping.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Flipkart New Year Sale 2026 */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Flipkart New Year Sale 2026</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart runs its Year End Sale and New Year Sale in the December 26–January 3 window. This is one of the better secondary sales on Flipkart — not as big as the Big Billion Days, but more consistent in discount depth because it is driven by inventory clearance rather than manufactured hype.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What works well during the Flipkart New Year sale:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Smartphones and Electronics:</strong> Budget phones from Realme, Motorola, Poco, and Samsung Galaxy A-series see ₹1,000–₹3,500 off. Stock levels are lower than during Big Billion Days, so popular models in the ₹12,000–₹20,000 range can sell out quickly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Laptops:</strong> Especially older-generation Intel and AMD Ryzen models, clear fast in this window. If you are a student or working from home and need a reliable machine without paying flagship prices, the January sale is a great time to buy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Toys, Games, and Gifting:</strong> Post-Christmas stock on board games, toys, and gifting sets clears fast after December 25. LEGO, Funskool, and other toy brands participate with clearance pricing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Bank Card Offers:</strong> Axis Bank cards typically get an extra 10% instant discount during Flipkart's New Year sale. HDFC Bank EMI and Bajaj Finserv no-cost EMI are also available across most major categories.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart Plus coins can also be redeemed during this window for additional cart discounts — if you have accumulated coins from festive shopping, this is an ideal time to use them.
                  </p>
                </div>

                {/* Amazon New Year Sale 2026 */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon New Year Sale 2026</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon India's Year End Sale runs from December 26 through January 1 or 2. It serves as an extension of the Great Indian Festival energy, but focused heavily on clearance, gifting, and new-year fresh-start buying.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What Amazon does well in the New Year sale:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Electronics and Devices:</strong> Amazon Devices — Echo, Kindle, and Fire TV Stick — see their third major discount window of the year. Laptops and tablets from Dell, HP, Samsung, and Apple (older iPad models) also feature solid price cuts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Home, Kitchen, and New Year Upgrades:</strong> Air fryers, instant pots, robot vacuum cleaners, smart lighting, and home gym equipment see heavy promotions as people look toward January lifestyle habits. Brands like Philips, Dyson, Inalsa, and Prestige participate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Books and Kindle Content:</strong> Amazon runs special Kindle ebook deals during the New Year window with bestsellers marked down to ₹49–₹99, helping readers stock up for the year ahead.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon Fresh & Pantry:</strong> Imported chocolates, health foods, protein supplements, and dry fruits feature new year bundles and price cuts to support health-focused goals in January.</span>
                    </li>
                  </ul>
                </div>

                {/* Myntra New Year Sale 2026 */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Myntra New Year Sale 2026</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Myntra's End of Reason Sale (EORS) in December/January is consistently one of the two best fashion sales of the year in India (alongside the mid-year EORS in June).
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What makes Myntra's New Year EORS stand out:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Winter Wear Clearance:</strong> Puffer jackets, sweatshirts, thermals, and woollen sweaters clear at 40–70% off by late December, making it the best time to buy for cold weather.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>International Brands:</strong> H&M, Zara, Mango, Tommy Hilfiger, and Calvin Klein drop prices significantly since they rarely offer direct discounts outside of Myntra sales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Footwear & Fitness Gear:</strong> Nike, Adidas, Puma, Reebok, and Skechers participate heavily, catering to the January fitness surge.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Party Wear:</strong> Formal wear, cocktail dresses, and festive fusion from brands like AND, Forever New, and Vero Moda clear out following New Year's Eve parties.</span>
                    </li>
                  </ul>
                </div>

                {/* Specific Offer Types to Expect */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Offer Formats to Watch For</h3>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Lightning Deals:</strong> Short 2–4 hour windows featuring deep price cuts on limited units. Setting app notifications helps secure these before they sell out.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>No-Cost EMI Extensions:</strong> Expanded availability for no-cost EMI on purchases above ₹5,000 using major credit cards and finance partners like Bajaj Finserv.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Exchange Bonuses:</strong> Extra trade-in value (sometimes ₹2,000–₹5,000 over standard rates) for upgrading old smartphones or laptops.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Other Stores Worth Checking */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Store Directory</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Other Stores Worth Checking for New Year Offers
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Beyond the major marketplace sales, several specialized platforms feature strong year-end discounting:
                </p>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      store: "Nykaa New Year Sale",
                      desc: "Runs a year-end beauty sale with offers on skincare, makeup, and haircare. Brands like Lakme, Maybelline, The Ordinary, Minimalist, and Plum participate. Good for stocking up on skincare essentials and beauty gift sets."
                    },
                    {
                      store: "Ajio New Year Sale",
                      desc: "Runs parallel fashion sales to Myntra during this window — sometimes with better deals on specific brands. Ajio tends to have better variety in Western wear and streetwear brands."
                    },
                    {
                      store: "Croma Year End Sale",
                      desc: "Runs its own New Year electronics offers in-store and online with no-cost EMI, exchange offers, and cashback on large appliances. Worth visiting in-store for TVs and washing machines."
                    },
                    {
                      store: "Zomato & Swiggy New Year Eve Deals",
                      desc: "Both platforms run specific New Year Eve offers — flat discounts, cashback, and restaurants with special party menus. December 31 is one of the highest-order days of the year."
                    },
                    {
                      store: "boAt and Noise (Direct Brand Sites)",
                      desc: "Audio and wearable brands like boAt, Noise, and Fire-Boltt run their own New Year offers on their websites — sometimes better than what you will find on Flipkart or Amazon."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                      <h3 className="text-sm font-bold text-[#1A1A2E] mb-1">{item.store}</h3>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Bottom Line & Conclusion */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Smart Shopping Rules</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  New Year, Same Smart Shopping Rules
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The new year offers window is a genuinely good time to buy — but the same rules apply as any other sale. Know what you want before the sale opens. Check price history before assuming a deal is real. Use whatever card gives you an extra bank discount. And stack a verified coupon code from CouponsCrew on top of everything else.
                  </p>
                  <p>
                    The platforms have gotten better at running these sales cleanly — less fake pricing, better stock availability, and faster delivery even during peak days. But the shoppers who save the most are still the ones who prepared. Wishlist your products, set deal alerts, and come in ready.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew before checking out to stack verified coupon codes on top of New Year clearance deals. 🎉
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Happy New Year from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Here Is to Real Deals and Better Savings in 2027
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    We hope 2027 is a great year for you — however you are celebrating the countdown and whatever you are planning to do differently from January 1.
                  </p>
                  <p>
                    This page will be updated with live new year offers and working coupon codes as the sale dates go live in late December. Bookmark it and check back closer to the date.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Happy New Year from the entire CouponsCrew team!
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
                    <TrendingUp className="w-4 h-4 text-[#3B82F6]" />
                    New Year Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine clearance price cuts, bank offers, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Clearance Price Drop", desc: "Genuine Inventory Movement" },
                      { label: "2. Bank & Exchange Offer", desc: "HDFC, SBI, Card Discounts" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
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
                    <HelpCircle className="w-4 h-4 text-[#3B82F6]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">New Year FAQ 2026/2027</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When does the New Year sale start in India?",
                        a: "Most platforms start their New Year sales from December 26. Amazon and Flipkart run Year End Sales through January 1–3, and Myntra EORS starts around December 26–27."
                      },
                      {
                        q: "Is the New Year sale better than the Diwali sale?",
                        a: "Not in scale, but New Year sales offer more genuine clearance pricing on older electronics and winter fashion since brands need to clear stock."
                      },
                      {
                        q: "Which platform has the best new year offers on smartphones?",
                        a: "Flipkart tends to feature stronger smartphone discounts on budget/mid-range brands, while Amazon excels on Apple and Samsung flagships."
                      },
                      {
                        q: "Are there new year offers on gym memberships?",
                        a: "Yes. Cult.fit, Gold's Gym, and fitness equipment brands run January-start promotions and challenge membership deals starting late December."
                      },
                      {
                        q: "Can I use CouponsCrew codes during the New Year sale?",
                        a: "Yes, CouponsCrew maintains verified coupon codes for major platforms to stack on top of sale prices and bank discounts."
                      },
                      {
                        q: "What are the best things to buy during the New Year sale?",
                        a: "Laptops, older-generation smartphones, winter fashion clearance, kitchen appliances, fitness gear, and OTT subscriptions."
                      },
                      {
                        q: "Do Zomato and Swiggy have special New Year Eve offers?",
                        a: "Yes, both apps run flat-off discount codes and restaurant party menus on December 31. Ordering early is recommended to avoid peak delays."
                      },
                      {
                        q: "Are exchange offers available during New Year sales?",
                        a: "Yes, phone and laptop exchange programs remain active on Amazon and Flipkart with near-festive valuation levels."
                      },
                      {
                        q: "Is Myntra's New Year EORS worth waiting for?",
                        a: "Yes, it is ideal for winter jackets, woollens, and formal wear clearance before spring inventories arrive."
                      },
                      {
                        q: "How do I get early access to Myntra EORS?",
                        a: "Sign up for Myntra Insider for free to secure 24-hour early access before the sale opens publicly."
                      }
                    ].map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#3B82F6] bg-[#EFF6FF]' : 'border-[#E8E8F0] bg-white hover:border-[#3B82F6]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#3B82F6]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#3B82F6] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  New Year Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Sale Window", status: "Dec 26 - Jan 5", active: true },
                    { name: "Primary Focus", status: "Clearance & Resolution", active: true },
                    { name: "Food Delivery", status: "NYE Feasts & Offers", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">New Year Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Verify historical pricing using trackers like Keepa before purchasing during year-end clearance sales to ensure genuine savings.
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
