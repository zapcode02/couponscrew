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

export default function VeteransDayOffers() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A6A] font-sans antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Veterans Day 2026 — Free Meals, Military Discounts, and the Best Veterans Day Sales</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Veterans Day is November 11 — and on this one day every year, hundreds of American businesses go out of their way to say thank you to military veterans and active-duty service members. That means free meals, deep discounts, and veterans day sales from retailers across the country. If you are a veteran or active-duty military, this page is your complete guide to making the most of November 11, 2026.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/veterans_day_offers_twrsmv.webp"
                  alt="Veterans Day Offers"
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
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Veterans Day Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Veterans Day deals from top brands to help you save more this holiday.</p>
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
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
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
                        Flipkart Sale – Up to 80% OFF on Smartphones & Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Best deals on iPhones, Samsung, OnePlus & more this Veterans Day.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('vd-fk-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="vd-fk-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid across top smartphone brands.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
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
                        Myntra Veterans Day Sale – Up to 90% OFF on Clothing
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Shop ethnic wear, western wear, footwear & accessories at unbeatable prices.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('vd-myn-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="vd-myn-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>Valid on selected collections only.</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
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
              Best Veterans Day Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover exclusive Veterans Day discounts and special offers from leading brands.
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

        <section className="py-16 border-t border-[#E8E8F0] font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

            {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
            <div className="lg:col-span-7 space-y-10">

              {/* ARTICLE BLOCK 1: About Veterans Day */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#1D4ED8] rounded-full block"></span>
                  <span className="text-xs font-black text-[#1D4ED8] uppercase tracking-widest">Veterans Day 2026 Overview</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  About Veterans Day
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Veterans Day is a federal holiday in the United States observed on November 11 every year. It honours military veterans — people who have served in the US Armed Forces — across all branches: Army, Navy, Marine Corps, Air Force, Space Force, and Coast Guard.
                  </p>
                  <p>
                    The date is not arbitrary. November 11 is the anniversary of the armistice that ended World War I. At the 11th hour of the 11th day of the 11th month of 1918, fighting stopped on the Western Front. The day was first called Armistice Day and became a federal holiday in 1938. In 1954, after World War II and the Korean War, Congress changed the name to Veterans Day to honour American veterans of all wars, not just WWI.
                  </p>
                  <p>
                    <strong>Veterans Day vs. Memorial Day:</strong> This is a common source of confusion. Memorial Day (last Monday in May) honours military personnel who died in service. Veterans Day (November 11) honours all veterans — living and deceased. Both are important, but Veterans Day is the one where businesses typically run discounts and offers for veterans.
                  </p>
                  <p>
                    <strong>Who qualifies for veterans day discounts?</strong>
                  </p>
                  <p>
                    In most cases, you need to be able to show one of the following:
                  </p>
                  <p>
                    • Military ID (CAC card / DD Form 1173)<br />
                    • Veteran ID Card (VIC) issued by the VA<br />
                    • DD-214 (Certificate of Release or Discharge from Active Duty)<br />
                    • State-issued veteran's driver's license or ID<br />
                    • Proof of service through apps like ID.me or Veterans Advantage
                  </p>
                  <p>
                    Some businesses verify through ID.me, which is a digital identity verification service widely accepted for military and veteran discounts. Setting up an ID.me account before November 11 saves time at checkout — both online and in-store.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Veterans Day Guide</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                    Veterans Day Free Meals 2026
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Free food on Veterans Day (November 11, 2026) is one of the most consistent and appreciated offers in American retail. Dozens of restaurant chains participate every year to honor veterans and active military personnel. Here are the ones with the most reliable track records:
                  </p>
                </div>

                {/* Restaurant Free Meals List */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Top Restaurant Offers on November 11</h3>
                  <ul className="mt-3 space-y-3 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Applebee's:</strong> A full free meal from a special menu for veterans and active military. Dine-in only, no purchase necessary (running consistently for over a decade).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Olive Garden:</strong> Free meal from a select menu for veterans and active military. Known for great food quality and selection. Dine-in only.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Red Lobster:</strong> Free appetizer or dessert for veterans as a complimentary add-on.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Texas Roadhouse:</strong> Free meal from a set menu on November 11. One of the most popular and consistent restaurant offers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Golden Corral:</strong> Famous Military Appreciation Night dinner buffet for active-duty and retired military. Usually runs on the Monday evening nearest to Veterans Day.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Denny's:</strong> Free Build Your Own Grand Slam breakfast, typically from 5 AM to noon (dine-in only).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Chili's:</strong> Free meal from a select menu for veterans, running reliably for over ten years.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>IHOP & Starbucks:</strong> IHOP offers free pancakes or breakfast items during limited morning hours, while Starbucks provides a free tall (12 oz) hot, iced, or blended beverage for veterans, military, and spouses.</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-xl border border-[#E8E8F0]">
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      <strong>Note on Verification:</strong> All listed free meals require proof of service at the restaurant. Bring a military ID, VA card, DD-214, or be ready with digital verification like ID.me on your phone.
                    </p>
                  </div>
                </div>

                {/* Veterans Day Retail Sales */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Veterans Day Sales — Best Retail Discounts</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Beyond dining, major retailers roll out special discounts and promotions during the November window:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Kohl's:</strong> Offers 15–30% off for active military, veterans, and families in-store and online, which stacks nicely with Kohl's Cash.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Home Depot & Lowe's:</strong> Both provide a 10% year-round military discount, heavily promoted around Veterans Day with special savings on tools, appliances, and home goods.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Best Buy & Dick's Sporting Goods:</strong> Feature consumer electronics and athletic gear markdowns in early November, bridging right into pre-Black Friday savings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Cabela's / Bass Pro Shops:</strong> Offer a 5% year-round discount alongside November outdoor and hunting gear promotions.</span>
                    </li>
                  </ul>
                </div>

                {/* How to Get Veterans Day Promo Codes */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">How to Get Veterans Day Promo Codes & Deals</h3>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Step 1 — Set up ID.me:</strong> Verify your military status (ID, DD-214, or VA card) via ID.me before November 11 to unlock instant digital discounts across hundreds of brands.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Step 2 — Check CouponsCrew:</strong> Find verified, tested promo codes for major retail brands as they go live in November.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Step 3 — Direct Store Pages & Emails:</strong> Visit retailer military discount hubs and subscribe to email lists by early November for early-access codes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Step 4 — Stack Wisely:</strong> Check whether retailers allow combining your military discount with store credit, loyalty cash, or active coupon codes before checkout.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Troubleshooting & Hacks */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Savings Strategy & Troubleshooting</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  What to Do If the Veterans Day Coupon Is Not Working?
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Coupon codes not working is frustrating — especially when you know you qualify. Here is how to troubleshoot:
                  </p>
                  <p>
                    <strong>Check the expiry date first.</strong> Veterans Day promo codes are often valid only on November 11 — or sometimes November 10–12 as a three-day window.<br />
                    <strong>Verify your login account.</strong> Make sure you are using the account linked to your ID.me verification.<br />
                    <strong>Check minimum cart value.</strong> Many sales promo codes require a minimum spend threshold.<br />
                    <strong>Clear cache or switch browser.</strong> Cookie conflicts on mobile browsers can cause checkout errors.<br />
                    <strong>Check automatic application.</strong> Retailers like Home Depot and Lowe's apply military discounts automatically once ID.me is linked.
                  </p>
                  <p>
                    <strong>More Ways to Save on Veterans Day:</strong> Use Veterans Advantage for year-round brand discounts, stack internet military discounts with cashback apps like Rakuten, and check free admission programs from the National Park Service.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Bottom Line & Conclusion */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Honor & Savings</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Veterans Day Is One Day — Make Every Offer Count
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The veterans day sales, free meals, and discounts are genuine — but they are time-sensitive. Most restaurant offers expire at midnight on November 11. Most retail promo codes have a 3–5 day window. If you are a veteran or active-duty military, the best use of this day is to plan ahead: know which free meal you want, have your ID.me verified, and know which stores you are buying from before the day starts.
                  </p>
                  <p>
                    The kohl's military discount, Home Depot and Lowe's deals, and the internet military discount network through ID.me are all stacked, real savings — not token gestures. A veteran who shops smart on November 11 can easily save $150–$300 across categories.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew on November 9 to access verified Veterans Day promo codes and dining offers. 🇺🇸
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Thank You For Your Service</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  CouponsCrew Has You Covered This Veterans Day
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    We will update this page with every verified Veterans Day promo code, confirmed free meals list, and retail sale detail as November 11 approaches.
                  </p>
                  <p>
                    Bookmark this page now, come back on November 9, and everything will be ready. To every veteran reading this: thank you for your service.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    November 11 belongs to you. Get every discount and benefit you've earned!
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
                    <TrendingUp className="w-4 h-4 text-[#1D4ED8]" />
                    Veterans Day Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine military discounts, cashback apps, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Military / Veteran Discount", desc: "ID.me Verified Savings (10-30%)" },
                      { label: "2. Cashback Portal", desc: "Rakuten & TopCashback Offers" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Promo Codes" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
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
                    <HelpCircle className="w-4 h-4 text-[#1D4ED8]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Veterans Day FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Veterans Day 2026?",
                        a: "Veterans Day is on Wednesday, November 11, 2026, honoring all US military veterans across all branches."
                      },
                      {
                        q: "Who qualifies for veterans day free meals and discounts?",
                        a: "Active-duty military, veterans, reservists, National Guard members, and often military spouses using valid military ID, VA card, or ID.me."
                      },
                      {
                        q: "What is ID.me and do I need it for discounts?",
                        a: "ID.me is a digital identity verification service used by major retailers and brands to grant online military discounts without showing physical IDs."
                      },
                      {
                        q: "Is the Kohl's military discount available online?",
                        a: "Yes, the Kohl's military discount works both in-store and online by verifying status via ID.me during checkout."
                      },
                      {
                        q: "Are veterans day free meals available to military spouses?",
                        a: "Some restaurants extend offers to spouses (like Starbucks), while others are veteran/active-duty only (like Applebee's and Chili's)."
                      },
                      {
                        q: "Do veterans day sales only run on November 11?",
                        a: "Restaurant free meals are typically on November 11 only, while retail sales often span a 3 to 5-day window around November 11."
                      },
                      {
                        q: "Is there a Home Depot or Lowe's veterans day sale?",
                        a: "Both home improvement giants offer their standard 10% military discount on most products, often paired with November appliance events."
                      },
                      {
                        q: "What is the best free stuff for veterans on Veterans Day?",
                        a: "Free meals from Applebee's and Olive Garden, free National Park entry, free Starbucks drinks, and museum admissions."
                      },
                      {
                        q: "Can I use discounts the day before or after November 11?",
                        a: "Dining offers are strictly on November 11, but retail sales frequently run across a November 9–13 promotional window."
                      },
                      {
                        q: "Where can I find verified Veterans Day promo codes?",
                        a: "Check CouponsCrew's dedicated store pages starting November 9 for tested, verified promo codes for Kohl's, Dick's Sporting Goods, and more."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#1D4ED8] bg-[#EFF6FF]' : 'border-[#E8E8F0] bg-white hover:border-[#1D4ED8]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#1D4ED8]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#1D4ED8] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Veterans Day Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Veterans Day Date", status: "November 11, 2026", active: true },
                    { name: "Verification", status: "ID.me & Military ID", active: true },
                    { name: "Top Offers", status: "Dining & Retail Discounts", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Verification Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Set up and verify your ID.me account ahead of November 11 to ensure seamless online military discount applications at checkout.
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
