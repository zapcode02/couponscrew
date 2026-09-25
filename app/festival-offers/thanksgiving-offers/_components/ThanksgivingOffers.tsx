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

export default function ThanksgivingOffers() {
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
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Thanksgiving 2026 — Gifts, Deals, Food, and Everything You Need to Know</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Thanksgiving is more than a meal. It is the one time of year when most American families actually sit together, put the phones down (mostly), and eat too much food while pretending to watch football. It is also the starting gun for the biggest shopping window of the year — Black Friday starts the next morning, and the overlap between thanksgiving 2026 and best black friday buys is exactly the window where the best retail savings of the year happen.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/thanks_giving_offers_zjdfx8.webp"
                  alt="Thanksgiving Offers"
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
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Thanks Giving Offers</h2>
                  <p className="text-xs text-gray-500">
                    Handpicked Thanksgiving deals from top brands to help you save more this holiday season.
                  </p>
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
                        Flipkart Thanksgiving Sale – Up to 80% OFF on Smartphones
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Grab the best deals on iPhones, Samsung, OnePlus & more this Thanksgiving.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('tg-fk-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="tg-fk-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
                        Myntra Thanksgiving Sale – Up to 90% OFF on Clothing
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Shop ethnic wear, western wear, footwear & accessories at unbeatable prices.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => { document.getElementById('tg-myn-details-1')?.classList.toggle('hidden'); }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="tg-myn-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
              Best Thanksgiving Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover exclusive Thanksgiving discounts and special offers from leading brands.
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

              {/* ARTICLE BLOCK 1: Story Behind Thanksgiving */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#D97706] rounded-full block"></span>
                  <span className="text-xs font-black text-[#D97706] uppercase tracking-widest">Thanksgiving 2026 Overview</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Story Behind the Thanksgiving
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Most people know the surface version: Pilgrims, Plymouth Rock, 1621, Native Americans, a big meal. The real story is more complicated — and more interesting.
                  </p>
                  <p>
                    The Pilgrims who landed in Plymouth, Massachusetts in November 1620 were Separatists — a group of English Protestants who had broken from the Church of England. The first winter killed nearly half of them. The Wampanoag people, particularly a man named Squanto (Tisquantum), taught the survivors how to cultivate corn, fish local rivers, and survive the New England climate.
                  </p>
                  <p>
                    In the fall of 1621, the Pilgrims held a three-day feast to celebrate their first successful harvest. They invited the Wampanoag — about 90 men attended, outnumbering the 53 surviving Pilgrims. Records from the time suggest they ate wild fowl (not necessarily turkey), venison, fish, shellfish, corn, and vegetables. There was no pie, no stuffing, no cranberry sauce — those are much later additions.
                  </p>
                  <p>
                    Thanksgiving was not a fixed national holiday for most of American history. George Washington declared it a national day of thanks in 1789, but it was not an annual event. Abraham Lincoln officially proclaimed Thanksgiving a national holiday in 1863, in the middle of the Civil War — partly for unity, partly due to the persistent campaigning of writer Sarah Josepha Hale (the same woman who wrote "Mary Had a Little Lamb") who lobbied for a national Thanksgiving for 36 years.
                  </p>
                  <p>
                    <strong>Thanksgiving facts worth knowing:</strong>
                  </p>
                  <p>
                    <strong>Turkeys consumed:</strong> Americans consume roughly 46 million turkeys on Thanksgiving every year.<br />
                    <strong>Parade tradition:</strong> The Macy's Thanksgiving Day Parade has run since 1924 and is the second-largest parade in the world.<br />
                    <strong>NFL tradition:</strong> The NFL has played games on Thanksgiving Day since 1920 — it is now one of the most-watched sports days of the year.<br />
                    <strong>Travel surge:</strong> About 50 million Americans travel during the Thanksgiving week — it is consistently the busiest travel period of the year.<br />
                    <strong>Turkey pardon:</strong> The Presidential Turkey Pardon is a tradition that began formally under George H.W. Bush in 1989.
                  </p>
                  <p>
                    <strong>Prayer of thanks:</strong> Whatever your tradition or faith background, the spirit of Thanksgiving is straightforward — pausing to acknowledge what you have before rushing into what you want next. That is why Thanksgiving and Black Friday sitting back-to-back is such a peculiarly American combination: gratitude on Thursday, consumption on Friday.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: More Ways to Save */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Shopping Strategy</span>
                </div>

                <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                  {/* Thanksgiving Food Section */}
                  <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                      <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Thanksgiving Guide</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                      Thanksgiving Food — What Actually Goes on the Table
                    </h2>
                    <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                      Thanksgiving food has evolved significantly from that 1621 meal. The modern Thanksgiving table in the US almost always includes:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Turkey dinner:</strong> The centerpiece (12–20 lbs). Brined, dry-rubbed, or butter-basted, paired with the ongoing debate over stuffing cooked inside vs. baked separately.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Sides:</strong> Mashed potatoes & gravy, green bean casserole, sweet potato casserole (with or without marshmallows), cranberry sauce, and cornbread/dinner rolls.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Dessert:</strong> Pumpkin pie, pecan pie, apple pie, or sweet potato pie served with whipped cream or vanilla ice cream.</span>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                      <strong>For non-cooks:</strong> Boston Market, Cracker Barrel, and grocery delis sell fully prepared "heat and serve" turkey packages. Whole Foods and Amazon Fresh also offer pre-made meal kits.
                    </p>
                  </div>

                  {/* Thanksgiving Gifts Section */}
                  <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Thanksgiving Gifts — What to Bring to the Table</h3>
                    <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                      While there is no formal gift exchange tradition, showing up empty-handed as a dinner guest is discouraged. Here is what works best:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Wine and spirits:</strong> A quality bottle of wine or craft beer (promoted heavily by Total Wine and Drizly).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Host gifts:</strong> Candles, serving boards, olive oil sets, or seasonal decor from Williams-Sonoma or Amazon.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Food baskets & pies:</strong> Specialty gourmet hampers from Harry & David or local bakery pies to take items off the host's plate.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>For kids:</strong> Target's dollar spot activity kits or small books to keep children occupied during dinner prep.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Where to Find Thanksgiving Deals */}
                  <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Where to Find Thanksgiving & Early Black Friday Deals</h3>
                    <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                      The best Thanksgiving 2026 savings span groceries, hosting supplies, and early Black Friday releases:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong><Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] hover:underline">Amazon</Link>:</strong> Ideal for kitchen appliances (instant pots, air fryers), gifts, and early Prime Black Friday access.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Walmart:</strong> Lowest grocery prices on turkeys and baking staples, alongside early Walmart+ Black Friday rollbacks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Target:</strong> Great for table decor, candles, and Target Circle early Black Friday member deals.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Williams-Sonoma & Harry & David:</strong> Premium cookware, carving sets, gourmet food towers, and specialty gift baskets.</span>
                      </li>
                    </ul>
                  </div>

                  {/* How to Get Thanksgiving Promo Codes */}
                  <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-base font-bold text-[#1A1A2E]">How to Get Thanksgiving 2026 Promo Codes</h3>
                    <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Step 1 — Check CouponsCrew:</strong> Find tested, verified promo codes for Amazon, Walmart, Target, and Williams-Sonoma as Thanksgiving week deals go live.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Step 2 — Subscribe to Store Emails:</strong> Sign up by November 20 to receive private pre-public discount codes from retailers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Step 3 — Download Mobile Apps:</strong> Access app-exclusive Thanksgiving and early Black Friday promotions on Target, Walmart, and Amazon apps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Step 4 — Use Cashback Portals:</strong> Activate Rakuten or TopCashback for elevated Thanksgiving week cashback rates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                        <span><strong>Step 5 — Watch for Free Shipping:</strong> Take advantage of zero-minimum free shipping promos run by Williams-Sonoma and Harry & David.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  More Ways to Save on Thanksgiving (Hacks and Tricks)
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    <strong>Buy your turkey early — but not too early.</strong> Fresh turkeys are best ordered or reserved 5–7 days before Thanksgiving. Frozen turkeys can be bought weeks in advance and thawed slowly in the fridge (allow 24 hours per 5 lbs). Walmart and Kroger run turkey price-match guarantees in November — worth checking.
                  </p>
                  <p>
                    <strong>Use grocery store loyalty cards for Thanksgiving staples.</strong> Kroger, Safeway, and regional chains all give free turkey or significant discounts on turkey to loyalty cardholders who reach a spending threshold in October–November. Check your store's app.
                  </p>
                  <p>
                    <strong>Shop Thanksgiving sales for kitchen appliances — not Black Friday.</strong> Thanksgiving week deals on stand mixers, food processors, and dutch ovens at Amazon and Williams-Sonoma are often as good or better than Black Friday. Fewer people are looking, which means more stock.
                  </p>
                  <p>
                    <strong>Make it a potluck.</strong> The most underrated Thanksgiving hack — assign dishes to guests. The host handles the turkey, everyone brings one side or dessert. Reduces the host's cost by 40–60% and spreads the cooking across people who are genuinely better at certain dishes.
                  </p>
                  <p>
                    <strong>Pre-order Thanksgiving dinner from restaurant chains.</strong> Boston Market and Cracker Barrel pre-order Thanksgiving meal packages fill up by early November — particularly for the best time slots. If you want a heat-and-serve full turkey dinner, order by November 15.
                  </p>
                  <p>
                    <strong>Use Amazon's "Subscribe & Save" for pantry staples.</strong> If you buy canned goods, cooking oil, and spices regularly, switching to Amazon Subscribe & Save before Thanksgiving locks in an extra 5–15% discount on pantry items.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Bottom Line & Conclusion */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Holiday Window</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Thanksgiving and Black Friday Are One Window — Treat Them That Way
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The four days from Thanksgiving Thursday through Cyber Monday are the most deal-dense shopping window of the American calendar. The best black friday shopping deals on electronics, appliances, and fashion start before Friday now — some go live on Tuesday or Wednesday of Thanksgiving week. If you wait until Friday morning, you have already missed some of the best black friday buys.
                  </p>
                  <p>
                    Shop the thanksgiving 2026 week like a window, not a single day. Check Amazon, Walmart, and Target from November 23 onwards. Get your thanksgiving gifts and dinner supplies early. And keep CouponsCrew open on your phone for live-updated promo codes through the entire holiday window.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew on November 23 to stack verified promo codes on top of early Thanksgiving and Black Friday sales. 🦃
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Happy Thanksgiving from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Wishing You a Wonderful Thanksgiving 2026
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    Whether you are hosting a full turkey dinner for twenty people or keeping it simple with family, we hope it is a wonderful celebration.
                  </p>
                  <p>
                    This page will be updated throughout November with live thanksgiving gifts deals, grocery promo codes, and early best black friday shopping deals alerts.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Happy Thanksgiving 2026 from everyone at CouponsCrew!
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
                    <TrendingUp className="w-4 h-4 text-[#D97706]" />
                    Thanksgiving Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine grocery rewards, early appliance sales, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Early Turkey & Grocery Deals", desc: "Loyalty Cards & Price Matches" },
                      { label: "2. Thanksgiving Week Sales", desc: "Kitchen & Appliance Discounts" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
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
                    <HelpCircle className="w-4 h-4 text-[#D97706]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Thanksgiving FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Thanksgiving 2026?",
                        a: "Thanksgiving 2026 falls on Thursday, November 26, 2026 — always the fourth Thursday of November."
                      },
                      {
                        q: "What is Thanksgiving — thanksgiving what is it?",
                        a: "It is a national holiday in the United States celebrating gratitude, harvest, and family gatherings centred around a traditional turkey dinner."
                      },
                      {
                        q: "What are the best thanksgiving gifts to bring as a guest?",
                        a: "Wine, a dessert, a quality candle, or a curated food gift basket from Harry & David or Amazon are ideal choices."
                      },
                      {
                        q: "What is traditional thanksgiving food?",
                        a: "Roast turkey, mashed potatoes and gravy, stuffing/dressing, green bean casserole, cranberry sauce, sweet potatoes, dinner rolls, and pumpkin pie."
                      },
                      {
                        q: "Are Black Friday deals available on Thanksgiving Day itself?",
                        a: "Yes, many retailers like Amazon, Walmart, and Target start Black Friday sales on Thanksgiving Thursday ('Gray Thursday')."
                      },
                      {
                        q: "What are some interesting thanksgiving facts?",
                        a: "Americans eat ~46 million turkeys, the Macy's Parade has run since 1924, presidential turkey pardons started in 1989, and NFL games date back to 1920."
                      },
                      {
                        q: "What is a prayer of thanks for Thanksgiving?",
                        a: "A short expression of gratitude before the meal, reflecting on family, health, and the past year, often shared around the table."
                      },
                      {
                        q: "Where can I find the best black friday buys starting on Thanksgiving?",
                        a: "Amazon and Walmart start Black Friday deals during Thanksgiving week. Target Circle members get early access on Thanksgiving Day."
                      },
                      {
                        q: "Is Thanksgiving celebrated outside the US?",
                        a: "Canada celebrates Thanksgiving on the second Monday of October; other nations celebrate harvest festivals, but the formal November holiday is North American."
                      },
                      {
                        q: "Where can I find Thanksgiving promo codes that actually work?",
                        a: "Check CouponsCrew's individual store pages throughout November for tested Thanksgiving promo codes for Amazon, Walmart, Target, and Williams-Sonoma."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#D97706] bg-[#FFFBEB]' : 'border-[#E8E8F0] bg-white hover:border-[#D97706]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#D97706]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#D97706] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Thanksgiving Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Thanksgiving Date", status: "November 26, 2026", active: true },
                    { name: "Shopping Window", status: "Nov 23 - Nov 30", active: true },
                    { name: "Core Traditions", status: "Turkey Dinner & Parades", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Thanksgiving Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Reserve your turkey 5–7 days in advance and check kitchen appliance deals during Thanksgiving week before Black Friday inventory depletes.
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
