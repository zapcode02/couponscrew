'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { AMAZON_COUPONS } from '../../../stores/amazon-coupon-code/_components/amazonCoupons';
import {
  LayoutGrid,
  Store,
  Sparkles, ExternalLink,
  ShoppingBag,
  BookOpen,
  ChevronRight, AlertCircle, ShieldCheck, Plus, HelpCircle, CheckCircle2, TrendingUp,
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
// MAIN AMAZON GREAT INDIAN FESTIVAL SALE OFFERS PAGE COMPONENT
// ============================================================================
export default function AmazonGreatIndianFestival() {
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
      q: 'When does Amazon Great Indian Festival Sale 2026 start?',
      a: 'Amazon Great Indian Festival typically runs during October, overlapping with the festive season. Exact dates are announced by Amazon closer to the event.',
    },
    {
      q: 'What categories get the best deals during the Great Indian Festival?',
      a: 'Electronics, mobiles, home appliances, fashion, and Amazon devices see the biggest discounts during the Great Indian Festival sale.',
    },
    {
      q: 'Are there any bank offers available during Amazon Great Indian Festival?',
      a: 'Yes! Amazon Great Indian Festival typically includes 10% instant discount on SBI credit/debit cards and additional offers on HDFC and ICICI cards.',
    },
    {
      q: 'How can I find the best deals during Amazon Great Indian Festival?',
      a: 'Stay updated on CouponsCrew for all verified Amazon Great Indian Festival offers, coupon codes, and bank deals. Subscribe to our newsletter for instant alerts.',
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
          <span className="text-gray-900 font-semibold">Amazon Great Indian Festival Sale Offers 2026</span>
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
                        Amazon Great Indian Festival Sale Offers 2026 — Best Deals on Electronics, Fashion &amp; More
                      </h1>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      Amazon&apos;s Great Indian Festival is one of the biggest online sale events of the year, bringing massive discounts on electronics, mobiles, home appliances, fashion, and more. Find all the best verified deals and offers right here.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image Panel (Right 5 Columns) */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789955711/Amazon_Great_Indian_Festival_Sale_Offers_uzmpop.webp"
                  alt="Amazon Great Indian Festival Sale Offers 2026"
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
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Amazon Great Indian Festival Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Great Indian Festival deals to help you save more.</p>
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
                        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg"
                        alt="Amazon"
                        className="h-9 w-auto object-contain"
                      />
                      <Link
                        href="/stores/amazon-coupon-code"
                        className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1"
                      >
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="w-full space-y-2">
                      <a
                        href="https://www.amazon.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/stores/amazon-coupon-code"
                        className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center justify-center"
                      >
                        <span>Visit Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

                {AMAZON_COUPONS.map((coupon) => (
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
                        {coupon.code ? (
                          <div className="w-full bg-slate-50 border border-dashed border-slate-300 text-center py-2.5 rounded-xl font-bold text-slate-800 text-sm">
                            {coupon.code}
                          </div>
                        ) : null}
                        <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                          Get Deal <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center justify-center">
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

              {/* ARTICLE BLOCK 1: About Great Indian Festival */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Amazon Great Indian Festival 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Get Ready For The Biggest Online Shopping Festival Ever
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The Amazon Great Indian Festival has been running for over a decade now, and it has only gotten bigger with each passing year. In 2026, the sale is expected to run for at least ten to fourteen days, with early access for Amazon Prime members before the general sale opens.
                  </p>
                  <p>
                    If you do not already have an Amazon Prime membership, this is the one time of year it genuinely pays for itself. Prime members get access to lightning deals hours before non-members, and some of the best stock — especially on smartphones and large appliances — sells out in the first few hours. The annual prime membership fee right now is ₹1,499, and a single deal during the festival can cover that cost easily.
                  </p>
                  <p>
                    Amazon Prime also bundles in Amazon Music, which has over 100 million songs and is a solid Spotify alternative if you have not tried it. And if you are into audiobooks or reading, Amazon Kindle and Amazon Books both run their own offers during the festival — ebook deals, Kindle device discounts, and more.
                  </p>
                  <p>
                    The sale usually goes live at midnight on the first day. Keep your wishlist ready. Add things to cart beforehand. Know your budget.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Brand Guide</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] leading-tight">
                    Big Savings On Big Brands
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    The Great Indian Festival is not one of those sales where only obscure no-name products get discounted. The deals cover genuine brands across every major category.
                  </p>
                </div>

                {/* Smartphones Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Smartphones</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    This is consistently the biggest category. Brands like Samsung, Apple, OnePlus, Realme, Poco, and iQOO participate every year with deals that are often the lowest prices you will see all year.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Apple iPhones</strong> — older models (iPhone 14, iPhone 15 series) see serious markdowns, sometimes ₹5,000–₹15,000 off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Samsung Galaxy</strong> — flagship and mid-range both get included; Galaxy A-series phones in the ₹15,000–₹25,000 range have historically done very well</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>OnePlus</strong> — usually runs exclusive deals on OnePlus 13 and 13R during this window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Realme and Poco</strong> — best value-for-money deals in the sub-₹20,000 segment</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    If you are tracking a specific phone, check the price history on a tool like CamelCamelCamel or PriceSpy before the sale starts. Sometimes "deal" prices are not as low as they appear without context.
                  </p>
                </div>

                {/* Laptops and Electronics */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Laptops and Electronics</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Lenovo, HP, Dell, Asus, and Acer all feature in the laptop deals. Gaming laptops with RTX graphics cards have seen 10–18% off in past years. Ultrabooks and productivity laptops in the ₹50,000–₹80,000 range are worth tracking.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    For headphones, Sony WH-1000XM series, Bose QuietComfort, and boAt products have all had strong deals during past Amazon Great Indian Festival sales.
                  </p>
                </div>

                {/* Large Appliances and TVs */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Large Appliances and TVs</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    This is where the deals get really interesting. Washing machines, refrigerators, air conditioners (even though it is post-summer), and TVs from LG, Samsung, Sony, Whirlpool, and Haier all see meaningful price cuts. Often 15–25% off, plus exchange bonuses on top.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    OLED and QLED TVs in the 55"–65" range are worth checking — prices that are normally out of reach for many buyers come down significantly during this sale.
                  </p>
                </div>

                {/* Fashion and Home */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Fashion and Home</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon online shopping has built a strong fashion catalogue over the years. Brands like Adidas, Nike, Puma, Levi's, and Van Heusen all participate. You will also find strong deals on bedsheets, kitchen appliances, cookware, and furniture.
                  </p>
                </div>

                {/* Amazon Grocery */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon Grocery</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    The Amazon grocery section (now Amazon Fresh in most cities) also runs deals during the festival — staples, packaged foods, beverages, and health products. If you shop monthly for essentials, stocking up during this sale makes sense. Delivery timelines are fast for perishables since Fresh operates its own supply chain.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Brands like Aashirvaad, Tata Salt, Dabur, Patanjali, and Nescafé typically run bundle offers during the Great Indian Festival. You will also find deals on protein supplements, packaged snacks, and baby care products. Some sellers run "buy 2 get 1" style offers that do not show up in the main deal banner — check product pages individually if you are stocking up on specific items.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: What Else to Expect */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Sale Highlights</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  What Else Can You Expect in the Amazon Great Indian Festival Sale?
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Beyond the category deals, a few things make the Great Indian Festival different from a regular sale.
                </p>

                <div className="space-y-6 mt-6">
                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">Bank and Card Offers</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      Every year, Amazon ties up with two to four banks for additional instant discounts. Historically, HDFC Bank, SBI, ICICI Bank, and Axis Bank cards have gotten extra 10% off on top of the sale price. This is not small — on a ₹60,000 laptop, that is ₹6,000 extra off. Check the offer page carefully before checkout. Some offers apply only to credit cards, not debit cards. Some are capped at ₹1,500–₹2,000. Read the terms.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">No-Cost EMI</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      For big-ticket purchases, Amazon sale pages usually show no-cost EMI options from 3 months to 24 months. Bajaj Finserv, HDFC Credit Card, and Amazon Pay Later all feature. This makes appliances and electronics genuinely accessible without burning a hole in one month's budget.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">Amazon Pay Cashback & Coupons</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      Amazon Pay is worth loading up before the festival. Wallet cashback offers, tied to UPI or direct load-in, can add 2–5% back on purchases. Additionally, the Amazon Coupons section expands significantly during GIF — click "Clip Coupon" right on the product page before adding to cart for extra stackable savings.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">Amazon Alexa & Smart Devices</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      Amazon Alexa devices — Echo Dot, Echo Show, Echo Pop — see some of the steepest discounts during this sale. If you want a smart home assistant or are just curious about what Alexa can do, this is the best time to buy. Echo Dot (5th gen) has gone as low as ₹999 during past festivals. That is basically free.
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Prime Day vs Great Indian Festival */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Sale Comparison</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Amazon Prime Day vs. Great Indian Festival — Which Is Better?
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Amazon Prime Day happens in July. The Great Indian Festival happens in October. Both are big. But the GIF (Great Indian Festival) usually has better deals on Indian brands, larger bank offer participation, and more stock because it coincides with the festive season — Navratri, Dussehra, and Diwali are all in this window. Brands clear inventory before the new year, which means deeper cuts.
                  </p>
                  <p>
                    If you missed Prime Day, do not panic. GIF is the bigger deal for most Indian shoppers.
                  </p>
                </div>

                <div className="mt-6 p-5 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl">
                  <h3 className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider mb-2">Ecosystem Perks</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-[#2E7D32]">
                    <li><strong>Amazon Associates:</strong> High conversion rates for content creators and bloggers during sale window.</li>
                    <li><strong>AWS Credits:</strong> Startup founders and developers can check promotional credits and training offers around this time.</li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: One Last Thing */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
                  <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Smart Shopping</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  One Last Thing Before You Shop
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Set a budget before the sale opens. The Great Indian Festival is designed to make you spend more than planned — it is good at it. Decide what you actually need, add those products to your wishlist, set a price alert, and then wait for the sale to start. Buying things you were not planning to buy does not save money, it just feels like it does.
                  </p>
                  <p>
                    When the sale drops, we will update this page with live deals, verified coupon codes, and the best offers across categories. Bookmark it and check back.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Bookmark this page and come back when the sale drops for live updates and verified coupon stacks.
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 5: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">GIF 2026 Ready</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Light Up Your Savings This Festive Season
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    Amazon Great Indian Festival 2026 brings unmatched price drops across smartphones, electronics, fashion, and home appliances.
                  </p>
                  <p>
                    Combine Prime early access, bank instant discounts, Amazon Pay offers, and clipped coupons to extract maximum value from your festive cart.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Wishlist now. Prime early access. Save thousands on every cart.
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
                    <TrendingUp className="w-4 h-4 text-[#FF9900]" />
                    Amazon Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine sale cuts, bank offers, and clipped coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Festive Sale Price", desc: "Lowest Price of the Season" },
                      { label: "2. Bank Instant Discount", desc: "HDFC, SBI, ICICI, Axis Offers" },
                      { label: "3. Amazon Clip Coupons", desc: "Extra Product-Page Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
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
                    <HelpCircle className="w-4 h-4 text-[#FF9900]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Amazon GIF FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When does the Amazon Great Indian Festival Sale 2026 start?",
                        a: "The sale typically kicks off in late September or early October. Amazon Prime members usually get early access one to two days before the general sale opens. Watch the Amazon.in homepage for official announcements."
                      },
                      {
                        q: "Do I need Amazon Prime membership to shop during the sale?",
                        a: "No — the sale is open to all Amazon customers. But Prime members get early access, faster delivery, and access to exclusive lightning deals that non-members cannot see."
                      },
                      {
                        q: "How much is Amazon Prime membership in India?",
                        a: "As of 2026, Amazon Prime membership is ₹1,499 per year or ₹299 per month. Students can get a discounted plan, which includes Prime Video, Prime Music, and free fast delivery."
                      },
                      {
                        q: "Which bank cards give extra discount during the Amazon Great Indian Festival?",
                        a: "Historically HDFC Bank, SBI, ICICI, and Axis Bank cards have had instant discount offers. The offers go live on the deal page and show up at checkout automatically when you use the eligible card."
                      },
                      {
                        q: "Are the deals in the Amazon Great Indian Festival Sale genuinely good?",
                        a: "Most of them, yes — especially on electronics, smartphones, and appliances. Some deals on fashion and daily-use items can be average. Use a price tracker like Keepa to check history before buying."
                      },
                      {
                        q: "Can I return items bought during the sale?",
                        a: "Yes. Standard Amazon return policy applies — most items have a 10-day or 30-day return window. Electronics may have a 7-day replacement window. Check the product page for specific terms."
                      },
                      {
                        q: "What is Amazon Pay Later and how does it work during the sale?",
                        a: "Amazon Pay Later is a buy-now-pay-later option allowing you to split purchases up to ₹60,000 into monthly instalments, often featuring zero-cost EMI on eligible products during festivals."
                      },
                      {
                        q: "Is Amazon online shopping safe during high-traffic sale days?",
                        a: "Yes. Amazon's infrastructure handles the festive traffic seamlessly. Payments through UPI, cards, or Amazon Pay are fully secure."
                      },
                      {
                        q: "Can I use Amazon Coupons and bank offers together?",
                        a: "Sometimes, yes. Coupon discounts and bank card instant discounts often stack, meaning you get both applied at checkout depending on the specific offer terms."
                      },
                      {
                        q: "How do I track price drops on Amazon before the sale?",
                        a: "Use tools like Keepa browser extension to check historical pricing on any Amazon product to confirm if a 'sale price' is truly the lowest."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#FF9900] bg-[#FFFBF5]' : 'border-[#E8E8F0] bg-white hover:border-[#FF9900]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#FF9900]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#FF9900] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Festival Highlights
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Prime Access", status: "24-48 Hours Early", active: true },
                    { name: "Bank Partners", status: "HDFC / SBI / ICICI", active: true },
                    { name: "Wallet Offer", status: "Amazon Pay Cashback", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">GIF Budget Warning</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Set a strict budget before the sale opens and add items to your wishlist early to avoid impulse purchases during lightning deals.
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
