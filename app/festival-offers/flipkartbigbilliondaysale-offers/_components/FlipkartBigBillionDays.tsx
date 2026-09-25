'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { FLIPKART_COUPONS } from '../../../stores/flipkart-coupon-code/_components/flipkartCoupons';
import {
  LayoutGrid,
  Store, AlertCircle, ShieldCheck, Plus, HelpCircle, CheckCircle2, TrendingUp,
  Sparkles,
  ShoppingBag,
  BookOpen,
  ChevronRight, ExternalLink,
  ChevronDown,
  ArrowRight,
  Gift,
  Flame,
} from 'lucide-react';

// ============================================================================
// BRAND LOGO COMPONENT
// ============================================================================
const BrandLogo = ({ name }: { name: string }) => {
  return <div className="font-bold text-base text-gray-800">{name}</div>;
};

// ============================================================================
// MAIN FLIPKART BIG BILLION DAYS OFFERS PAGE COMPONENT
// ============================================================================
export default function FlipkartBigBillionDays() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
      q: 'When does Flipkart Big Billion Days 2026 start?',
      a: 'Flipkart Big Billion Days typically runs for 5–7 days during October, coinciding with the festive season. Exact dates are announced by Flipkart closer to the event.',
    },
    {
      q: 'What categories get the best discounts during Big Billion Days?',
      a: 'Mobiles, electronics, fashion, home appliances, and furniture are among the top categories with the biggest discounts during the Big Billion Days sale.',
    },
    {
      q: 'Are there any bank offers available?',
      a: 'Yes! Flipkart Big Billion Days typically includes 10% instant discount on HDFC, ICICI, and SBI Bank credit/debit cards and EMI transactions.',
    },
    {
      q: 'How can I get the best deals on Flipkart Big Billion Days?',
      a: 'Stay updated on CouponsCrew for verified coupon codes, bank offers, and exclusive deals. Subscribe to our newsletter for instant alerts.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A6A] font-sans antialiased">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs text-gray-500 gap-1.5 font-medium">
          <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/festival-offers" className="hover:text-[#5B4FBE] transition-colors">Festivals</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">Flipkart Big Billion Days Sale Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            {/* Main Hero Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Store Detail Card (Left 7 Columns) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                        Flipkart Big Billion Days Sale 2026: Best Deals on Mobiles, Fashion, Electronics & More
                      </h1>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      If you have been shopping on Flipkart for a while, you already know what Big Billion Days means — it's that one time of the year when prices on pretty much everything drop by amounts that feel almost too good to be true. Phones, laptops, shoes, furniture, kitchen appliances — the Flipkart Big Billion Days sale covers it all, and the discounts are real.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Panel (Right 5 Columns) */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Flipkart_Big_Billion_Days_Sale_q4yypd.webp"
                  alt="Flipkart Big Billion Days Sale Offers"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Sidebar + Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT SIDEBAR PANEL */}
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

            {/* Sidebar Newsletter Widget */}
            <div className="bg-[#F0EEFF] rounded-2xl p-4 border border-purple-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-200/70 text-[#5B4FBE] flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm leading-tight">Never Miss a Sale Deal!</h4>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                  Get the latest offers, deals and updates directly in your inbox.
                </p>
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
                <button
                  type="submit"
                  className="w-full py-2 bg-[#5B4FBE] hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 font-bold text-center">Subscribed successfully!</p>
              )}
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-8">

            {/* TOP OFFERS SECTION */}
            <section id="top-offers" className="space-y-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-blue-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Flipkart Big Billion Days Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Big Billion Days deals to help you save more.</p>
                </div>
              </div>
              {/* Single Column Offers List */}
              <div className="grid grid-cols-1 gap-4">

                {/* Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">

                  {/* Left Badge Section with Notch Effect */}
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON ELECTRONICS</span>

                    {/* Notch Cutout Indicator (Visual Ticket Edge Curve) */}
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  {/* Middle Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">ELECTRONICS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Diwali Special – Up to 70% OFF on Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Grab the best deals on mobiles, laptops, TVs & more this festive season — no coupon code required.
                      </p>

                      {/* View Details Toggle & Expandable List */}
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            const detailsEl = document.getElementById('offer-details-content');
                            detailsEl?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>

                        <div id="offer-details-content" className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Valid on select categories as listed on the product page.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Minimum cart value might apply as specified on descriptions.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Covers selected brands and product collections.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Action Section */}
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img
                        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp"
                        alt="Flipkart"
                        className="h-9 w-auto object-contain"
                      />
                    </div>

                    <div className="w-full space-y-2">
                      <a
                        href="https://www.flipkart.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/stores/flipkart-coupon-code"
                        className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center justify-center"
                      >
                        <span>Visit Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

                {FLIPKART_COUPONS.map((coupon, index) => (
                  <div key={coupon.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                    <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                      <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">{coupon.badgeType || 'UP TO'}</span>
                      <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">{coupon.badge ? coupon.badge.replace('UP TO ', '').replace('FLAT ', '').replace(' OFF', '') : ''}</span>
                      <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                      <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">{coupon.type}</span>
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">{coupon.type}</span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">{coupon.verified || 'VERIFIED'}</span>
                        </div>
                        <h3 className="font-extrabold text-lg text-gray-900 leading-snug">{coupon.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{coupon.description}</p>
                        {coupon.bullets && coupon.bullets.length > 0 && (
                          <div className="mt-3">
                            <button onClick={() => {
                              const detailsEl = document.getElementById(`offer-details-content-${coupon.id}`);
                              detailsEl?.classList.toggle('hidden');
                            }} className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none">
                              <span>View Details</span>
                              <ChevronDown className="w-4 h-4 text-indigo-600" />
                            </button>
                            <div id={`offer-details-content-${coupon.id}`} className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600 hidden">
                              {coupon.bullets.map((bullet, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-purple-600 shrink-0"></span>
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                      <div className="flex flex-col items-center gap-1">
                        <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      </div>
                      <div className="w-full space-y-2">
                        {coupon.code ? (
                          <div className="w-full bg-slate-50 border border-dashed border-slate-300 text-center py-2.5 rounded-xl font-bold text-slate-800 text-sm">
                            {coupon.code}
                          </div>
                        ) : null}
                        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                          Get Deal <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center justify-center">
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

        {/* POPULAR BRANDS THIS DIWALI */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands This Diwali
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Explore Diwali offers from your favorite brands.
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
                      <BrandLogo name={brand.logo} />
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

              {/* ARTICLE BLOCK 1: About BBD */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Flipkart Big Billion Days 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  About Flipkart Big Billion Day Sale
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Flipkart launched the Big Billion Days concept back in 2014, and it has grown into one of the biggest online shopping events India sees every year. It runs right around the festive season — usually September end or early October — and gives buyers a short window to pick up products at the lowest prices of the year.
                  </p>
                  <p>
                    The 2026 edition of the Flipkart Big Billion Days starts on 23rd September, with early access kicking in a day before — on 22nd September — exclusively for Flipkart Plus and Black members. If you are on either of those memberships, it makes sense to log in early and lock in the deals before regular access opens.
                  </p>
                  <p>
                    What makes the sale work is not just the headline discounts. Flipkart layers in bank card offers, exchange deals on old devices and appliances, no-cost EMI options, and early bird deals — so your actual savings can be significantly more than the listed discount alone. A 10% instant discount on top of a 50% off product price adds up quickly when you are buying something like a refrigerator or a smartphone.
                  </p>
                  <p>
                    For Flipkart Plus members, the perks go further — free delivery on all orders, priority access to deals before they open to everyone else, and extra discount coupons stacked on top of the sale prices. If you shop on Flipkart in app mode, you also get access to app-exclusive offers that are not visible on the desktop site.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Sale Guide</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] leading-tight">
                    When Does the Flipkart Big Billion Days 2026 Sale Start?
                  </h2>
                  <div className="mt-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-2 text-xs text-[#4A4A6A]">
                    <p><strong>General Access:</strong> 23rd September 2026</p>
                    <p><strong>Plus & Black Member Early Access:</strong> 22nd September 2026</p>
                    <p><strong>Expected End Date:</strong> Around 28th–30th September 2026</p>
                  </div>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Set your reminders early. Products in high-demand categories like mobiles and electronics sell out or lose their lowest prices fast.
                  </p>
                </div>

                {/* Section Intro */}
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A2E]">The Big Billion Day Sale Products</h3>
                  <p className="mt-1 text-xs text-[#4A4A6A]">Here's a look at what's on sale this year and where the biggest savings are sitting.</p>
                </div>

                {/* 1. Flipkart Mobile Offers */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">1. Flipkart Mobile Offers — iPhones, Android Flagships & Budget Phones</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Mobiles always get the loudest discounts during Big Billion Days, and this year is no different. The sale is expected to bring down prices on everything from budget Android phones under ₹10,000 to premium flagships like the Flipkart iPhone 16 Pro range.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">Some expected price drops on Flipkart mobile this year:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Google Pixel 9 — Down from ₹79,999 to around ₹34,999</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>iPhone 16 Pro — Expected to go under ₹1,00,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Samsung Galaxy S24 — Expected under ₹40,000, down from ₹74,999</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Motorola Edge 50 Pro 5G — Around ₹27,999</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Realme 12 Pro+ 5G — Around ₹24,999</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>CMF by Nothing Phone 1 — Flat 20% OFF</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded-xl border border-[#E8E8F0] space-y-2 text-xs text-[#4A4A6A]">
                    <p className="leading-relaxed">
                      <strong>Lock Deal Feature:</strong> One thing worth knowing — Flipkart has a Lock Deal feature this year. You pay ₹999 upfront to lock in the lowest BBD price on select phones. If the final price turns out to be higher, you pay nothing extra. If it's lower, you get that lower price. It's a decent option if you've already made up your mind on a device.
                    </p>
                    <p className="leading-relaxed">
                      For Flipkart online mobile shopping, the app tends to have better deals than the website — so download the app before the sale starts if you haven't already.
                    </p>
                  </div>
                </div>

                {/* 2. Top Smartphone Brands on Offer */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">2. Top Smartphone Brands on Offer</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    During the Flipkart Big Billion Days, nearly every major phone brand participates with dedicated brand pages and curated deals. The ones consistently showing up with the deepest discounts include:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Apple</strong> — iPhones and accessories under BBD-exclusive pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Samsung</strong> — Galaxy S, A, and M series with bank offers stacked on top</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Google</strong> — Pixel 9 getting one of its sharpest discounts of the year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>OnePlus</strong> — Flagships and mid-range both on offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Vivo</strong> — Up to 35% OFF on selected Vivo smartphones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Realme, POCO, Infinix</strong> — Budget and mid-range with significant markdowns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Nothing Phone</strong> — CMF series and Nothing Phone 3 both on offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Oppo, iQOO, Motorola</strong> — Present across multiple price bands</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Whether you're looking for a Flipkart mobile iPhone deal or a budget phone under ₹15,000, the BBD sale covers the full spectrum.
                  </p>
                </div>

                {/* 3. Electronics & Laptops */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">3. Electronics & Laptops</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    The Flipkart Big Billion Days electronics deals are spread across laptops, tablets, cameras, headphones, smartwatches, and more. If you've been waiting to upgrade your home office setup or pick up a new display, this is the right window.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">Estimated savings in this category:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Laptops — Up to 40–55% OFF on HP, Dell, Lenovo, Acer, Asus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Tablets — Discounts on Samsung, Xiaomi, and Apple iPad models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Cameras — Up to 45% OFF on Canon, Nikon, Sony DSLRs and mirrorless cameras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Headphones & Speakers — Up to 50% OFF on Sony, JBL, Bose, Boat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Smartwatches — Deals on Apple Watch, Samsung Galaxy Watch, Fire-Boltt</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart in app mode gives you access to flash deals that run for a few hours at a time — set up deal alerts for specific products if you don't want to miss them.
                  </p>
                </div>

                {/* 4. Flipkart Fashion Deals */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">4. Flipkart Fashion Deals — Women's Dresses, Shoes & More</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    BBD is a good time for fashion too — especially if you wait until the second or third day when additional markdown codes usually activate.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Flipkart Women Dress / Flipkart Ladies Dress</strong> — Up to 70–80% OFF on ethnic and western wear from brands like Biba, W, Libas, and SASSAFRAS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Men's Clothing</strong> — Van Heusen, Allen Solly, Levi's, and Jack & Jones all participating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Flipkart Shopping Shoes</strong> — Up to 60% OFF on Nike, Adidas, Puma, Reebok, Sparx</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Accessories</strong> — Up to 60% OFF on Fossil, Titan, Wildcraft, American Tourister</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    One thing to check before buying clothing or footwear — the "Existing User" tag on some deals means the offer applies only if you've shopped on Flipkart before. New users may see slightly different prices.
                  </p>
                </div>

                {/* 5. Furniture & Home Deals */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">5. Furniture & Home Deals — Up to 80% OFF</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Furniture is one of those categories people forget to check during Flipkart Big Billion Days, but the discounts are real and the selection is massive. Sofas, beds, mattresses, wardrobes, dining sets, shoe racks — it's all in the sale.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">Highlights:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Sofas and recliners — 60–70% OFF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Beds and mattresses — Up to 65% OFF (brands like Sleepyhead, SleepyCat)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Dining sets and study tables — 55–60% OFF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Wardrobes and storage — Up to 65% OFF</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Free delivery is available on most furniture orders, which saves a noticeable amount on heavy items. If you have old furniture to swap, Flipkart's exchange offer gives you additional savings on top of the BBD price.
                  </p>
                </div>

                {/* 6. Home Appliances & Kitchen */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">6. Home Appliances & Kitchen</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Refrigerators, washing machines, ACs, microwaves, mixer grinders — everything gets marked down significantly during the Flipkart Big Billion Days sale.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Refrigerators and washing machines</strong> — Up to 60% OFF (LG, Samsung, Whirlpool, Godrej)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>ACs</strong> — Up to 55% OFF on Voltas, Daikin, Blue Star, LG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Microwaves and ovens</strong> — Up to 55% OFF on IFB, Bajaj, Panasonic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Small kitchen appliances</strong> — Up to 60% OFF on Morphy Richards, Havells, Philips</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Exchange your old TV or appliance through Flipkart's exchange programme for an extra 5–10% on top.
                  </p>
                </div>

                {/* 7. Flipkart Grocery */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">7. Flipkart Grocery — Daily Essentials at Sale Prices</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    The sale also extends to Flipkart grocery. Staples, snacks, beverages, and household essentials often come with short-window offers during BBD. Quantities are limited and offers reset daily, so check the grocery section each morning of the sale.
                  </p>
                </div>

                {/* Bank, Wallet & Payment Offers */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Bank, Wallet & Payment Offers on Big Billion Days 2026</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    This is where the effective discount gets better than what's shown on the product page.
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#E8E8F0] text-[#1A1A2E]">
                          <th className="py-2 pr-4 font-bold">Bank / Payment Method</th>
                          <th className="py-2 pl-4 font-bold">Offer</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0] text-[#4A4A6A]">
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">Flipkart Axis Bank Credit Card</td>
                          <td className="py-2.5 pl-4">Up to 5% cashback + extra 10% instant discount</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">ICICI Bank Credit / Debit Card</td>
                          <td className="py-2.5 pl-4">10% instant discount (capped)</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">Axis Bank Cards</td>
                          <td className="py-2.5 pl-4">10% instant discount on select categories</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">Kotak Cards</td>
                          <td className="py-2.5 pl-4">Extra discount on select purchases</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">PhonePe / UPI</td>
                          <td className="py-2.5 pl-4">Cashback on select orders</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 font-medium text-[#1A1A2E]">Flipkart Pay Later</td>
                          <td className="py-2.5 pl-4">Extra 10% on select categories for BNPL users</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-xs text-[#4A4A6A] leading-relaxed">
                    The Flipkart credit card — specifically the Flipkart Axis Bank co-branded card — is the one that makes the most difference for repeat Flipkart shoppers. The 5% cashback on Flipkart applies across the year, not just during BBD.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    If you're using a Flipkart discount coupon from CouponsCrew, apply it at checkout along with any active bank offer. Both can sometimes stack, giving you additional savings on top of what's already on the product listing.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: How to Get Best Deals */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Shopping Strategy</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  How to Get the Best Deals on Flipkart Big Billion Days
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  A few things that consistently help during BBD:
                </p>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      layer: "Tip 1",
                      title: "Wishlist in Advance",
                      desc: "Add items to your wishlist now — prices on wishlisted items are tracked by Flipkart and you'll get notified when they drop during the sale."
                    },
                    {
                      layer: "Tip 2",
                      title: "Use App Mode",
                      desc: "Use the Flipkart in app mode — app-exclusive deals are real and they're usually the best prices available."
                    },
                    {
                      layer: "Tip 3",
                      title: "Early Access Check",
                      desc: "Check early on 22nd September if you're a Plus or Black member — the best prices on phones and electronics go fast."
                    },
                    {
                      layer: "Tip 4",
                      title: "Stack Your Savings",
                      desc: "Sale price + Flipkart Axis Bank card offer + a CouponsCrew coupon code where applicable."
                    },
                    {
                      layer: "Tip 5",
                      title: "Lock Deals",
                      desc: "Use the Lock Deal feature for high-demand phones if you've already made a decision."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                      <div className="w-16 shrink-0 flex flex-col items-center">
                        <span className="text-[10px] font-black uppercase text-[#5B4FBE] tracking-wider mb-1">
                          {step.layer}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1A1A2E]">{step.title}</h3>
                        <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2E7D32] leading-relaxed">
                    Always verify category terms and check individual product history to ensure maximum valid stackable discounts during BBD.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Save More with CouponsCrew */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">CouponsCrew Advantage</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Save More With CouponsCrew Before You Shop on Flipkart
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The Flipkart Big Billion Days sale runs for a short window, and the prices you see are already the result of Flipkart cutting margins significantly. But there's still room to save more.
                  </p>
                  <p>
                    CouponsCrew lists verified Flipkart coupons and discount codes that are active during the sale. A few of these work as additional stackable discounts on top of the BBD price — the savings may be a few hundred rupees or more depending on what you're buying, but on a ₹40,000 phone or a ₹25,000 refrigerator, that adds up. Check the available Flipkart coupon codes on this page before you proceed to checkout, and apply whichever one is valid for your cart.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Bottom Line */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
                  <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Final Verdict</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Bottom Line on Flipkart Big Billion Days
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    If you've been putting off a purchase — a new phone, a laptop for the house, a washing machine, running shoes, or literally anything else — the Flipkart Big Billion Days 2026 is the right time to buy. The combination of sale discounts, bank card offers, exchange deals, and available coupons means you' unlikely to find a better price during the rest of the year.
                  </p>
                  <p>
                    Mark 22nd September if you're on Flipkart Plus, or 23rd September for general access. Add the items you want to your wishlist now, download the Flipkart in app on your phone, and check CouponsCrew before you hit the checkout button.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Make sure to leverage verified codes from CouponsCrew to compound your savings on top of Flipkart's deepest price cuts.
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 5: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">BBD 2026 Ready</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Get Ready for the Biggest Sale of the Year
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    Flipkart Big Billion Days 2026 brings unmatched price drops across smartphones, electronics, fashion, and home appliances.
                  </p>
                  <p>
                    Combine early access, bank offers, app-exclusive deals, and verified CouponsCrew codes to extract maximum value from your festive cart.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Wishlist now. Access early on Sep 22. Save more with CouponsCrew.
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
                    BBD Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine BBD price cuts, bank offers, and extra coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. BBD Sale Price", desc: "Lowest Price of the Year" },
                      { label: "2. Flipkart Axis Bank Offer", desc: "5% Cashback + 10% Instant Off" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Coupon Savings" }
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
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Flipkart BBD FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When does the Flipkart Big Billion Days 2026 sale start?",
                        a: "The Flipkart Big Billion Days sale starts on 23rd September 2026 for general users. Flipkart Plus and Black members get early access from 22nd September."
                      },
                      {
                        q: "What is the Flipkart Big Billion Days sale?",
                        a: "It is Flipkart's flagship annual sale event held during the festive season, usually in September or October. The sale runs for about five to seven days and covers mobiles, electronics, fashion, furniture, home appliances, and grocery with discounts up to 80–90% on select products."
                      },
                      {
                        q: "Which is the best bank card to use on Flipkart Big Billion Days?",
                        a: "The Flipkart Axis Bank Credit Card gives the highest savings — 5% cashback on Flipkart purchases year-round plus extra instant discount during the sale. ICICI and Axis Bank cards also give a 10% instant discount on eligible orders."
                      },
                      {
                        q: "Is Flipkart Big Billion Days only on the app?",
                        a: "Some deals are exclusive to the Flipkart in app experience, though most of the sale is accessible on the desktop site as well. App-only deals are generally the lowest prices available, so it's worth using the app if you can."
                      },
                      {
                        q: "Can I use a Flipkart coupon during the Big Billion Days sale?",
                        a: "Yes. Flipkart discount coupons from CouponsCrew can be applied at checkout during the sale. Whether they stack with bank card offers depends on the specific offer terms — check the deal details before finalising your order."
                      },
                      {
                        q: "Does Flipkart Big Billion Days have iPhone deals?",
                        a: "Yes. Flipkart iPhone deals are one of the highlights of the BBD sale. The iPhone 16 Pro is expected to go under ₹1,00,000 and older models like the iPhone 15 and iPhone 14 series are likely to see deeper cuts."
                      },
                      {
                        q: "What is Flipkart Plus and does it help during Big Billion Days?",
                        a: "Flipkart Plus is Flipkart's loyalty programme. Members get early access to BBD deals from 22nd September, extra discounts on select products, free delivery on all orders, and reward coins that can be used on future purchases."
                      },
                      {
                        q: "Are the Flipkart Big Billion Days discounts genuine?",
                        a: "For products sold and fulfilled by Flipkart directly or by reputed sellers, the discounts are real and the prices are competitive. As with any sale, it's worth doing a quick check on the product's price history before buying to confirm the deal is an actual markdown."
                      },
                      {
                        q: "What categories see the biggest discounts on Flipkart Big Billion Days?",
                        a: "Mobiles and smartphones typically get the sharpest discounts. Electronics, laptops, large appliances, and fashion also see significant markdowns. Furniture and home goods can also offer strong value, especially with the free delivery and exchange offers."
                      },
                      {
                        q: "Is Flipkart grocery also part of the Big Billion Days sale?",
                        a: "Yes, Flipkart grocery participates in the BBD sale with daily offers on staples, packaged foods, beverages, and household essentials. Quantities are limited so checking every morning during the sale period is the best approach."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#5B4FBE] bg-[#F8F8FF]' : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
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
                  Sale Event Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "BBD Start Date", status: "Sep 23, 2026", active: true },
                    { name: "Plus Early Access", status: "Sep 22, 2026", active: true },
                    { name: "Bank Partner", status: "Flipkart Axis / ICICI", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">BBD Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Wishlist your items early and use the Flipkart app during early access on September 22 to lock in fast-moving electronics deals.
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
