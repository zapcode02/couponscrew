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
  BookOpen, AlertCircle, ShieldCheck, CheckCircle2, HelpCircle, TrendingUp,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Gift,
  Plus,
  Minus,
  ExternalLink,
  Laptop,
  Calendar,
} from 'lucide-react';

// ============================================================================
// MAIN CYBER MONDAY OFFERS PAGE COMPONENT
// ============================================================================
export default function CyberMondayOffers() {
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
      q: 'When is Cyber Monday 2026?',
      a: 'Cyber Monday 2026 falls on November 30th — the Monday after Thanksgiving and Black Friday. It focuses heavily on online-only deals, particularly on tech, software, and electronics.',
    },
    {
      q: 'What is the difference between Black Friday and Cyber Monday?',
      a: 'While Black Friday covers all categories, Cyber Monday is specifically known for online-only deals with a focus on tech, electronics, software subscriptions, and digital products.',
    },
    {
      q: 'Which brands have the best Cyber Monday deals?',
      a: 'Amazon, Flipkart, Lenovo, Dell, Apple, Samsung, and software brands like Adobe and Microsoft typically offer their best Cyber Monday prices on laptops, gadgets, and subscriptions.',
    },
    {
      q: 'How can I get the latest Cyber Monday coupon codes?',
      a: 'CouponsCrew updates all Cyber Monday coupon codes daily. Browse this page or subscribe to our newsletter for instant deal alerts so you never miss a tech bargain.',
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
          <span className="text-gray-900 font-semibold">Cyber Monday Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Cyber Monday 2026 — Best Cyber Monday Deals in India and the USA
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">

                      Most people know Black Friday. Fewer people talk about Cyber Monday — and that is a mistake, because Cyber Monday is often the better shopping day. It is the Monday after Thanksgiving, three days after Black Friday, and it is specifically designed for online shoppers. No physical store crowds, no midnight queues, no "doorbuster" tricks that require you to be at a mall at 5 AM. Just online deals, from your phone or laptop, with a cup of chai in hand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790037893/cyber-monday_ykcqjd.webp"
                  alt="Cyber Monday offers"
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
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Cyber Monday Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Cyber Monday tech deals and online exclusives from top brands.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                {/* OFFER 1: Amazon Cyber Monday Tech */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">CYBER MONDAY</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">TECH</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Cyber Monday Sale – Up to 70% OFF on Laptops &amp; Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Online-exclusive deals on laptops, tablets, smart devices, software &amp; accessories — the biggest tech sale of the year.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('cm-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="cm-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
                {/* ADD MORE OFFER CARDS HERE */}

              </div>
            </section>



          </div>
        </div>

        {/* POPULAR BRANDS THIS DIWALI */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Best Cyber Monday Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover unbeatable Cyber Monday discounts from leading brands.
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

              {/* ARTICLE BLOCK 1: Cyber Monday Overview */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
                  <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">Cyber Monday 2026 Overview</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  About Cyber Monday
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Cyber Monday started in the United States in 2005. The National Retail Federation coined the term after noticing that the Monday following Black Friday consistently showed a massive spike in online sales. The theory was that people who browsed physical stores over the long weekend came home Sunday night and finished their shopping online. Add in the fact that many Americans returned to work Monday with faster office internet connections than they had at home (this was 2005 — home broadband was not what it is today), and the spike made sense.
                  </p>
                  <p>
                    The name stuck. Retailers started actively promoting deals specifically on Monday rather than letting it happen organically. By 2010, Cyber Monday had overtaken Black Friday in total online sales in the US. By 2020, it was consistently the single largest online shopping day in American history.
                  </p>
                  <p>
                    <strong>How is Cyber Monday different from Black Friday?</strong>
                  </p>
                  <p>
                    Black Friday started as a physical store event — long lines, limited stock, early-morning stampedes. Cyber Monday was always online-first. That distinction has blurred over the years (both are now mostly online), but Cyber Monday still tends to have:
                  </p>
                  <p>
                    <strong>Deeper deals</strong> on software, subscriptions, and digital products.<br />
                    <strong>More availability</strong> — online stock is easier to replenish than shelf inventory.<br />
                    <strong>Better deals</strong> on tech accessories, electronics, and apps.<br />
                    <strong>Slightly less chaotic buying conditions</strong> because demand is spread more evenly.
                  </p>
                  <p>
                    In India, Cyber Monday is not a headline event the way Black Friday has become, but platforms like Amazon India, Flipkart, and Ajio often extend their Black Friday sale windows through November 30 — making it a de facto Cyber Monday sale even if they do not always brand it that way.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Cyber Week & Cyber Monday Overview */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Global Shopping Guide</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                    What About "Cyber Week" and Cyber Monday?
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Cyber Week deals refer to the entire period from Black Friday (November 27) through Cyber Monday (November 30). Most major platforms run their sales continuously across these four days. If you see a store advertising "Cyber Week" or "Black Friday Week," they mean the same window.
                  </p>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    <strong>Cyber Monday 2026</strong> falls on <strong>November 30, 2026</strong>. It is always the Monday after American Thanksgiving. In India, the Cyber Monday sale window typically runs as an extension of the broader Black Friday sales.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">The 2026 Timeline:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>November 20–26:</strong> Early Black Friday deals begin on most Indian platforms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>November 27 (Black Friday):</strong> Peak Black Friday deals, biggest discounts go live.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>November 28–29 (Weekend):</strong> Deals continue with some new offers added.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>November 30 (Cyber Monday):</strong> Final push — digital product deals, software, and subscriptions tend to peak.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>December 1–2:</strong> Cyber Monday tail end and stock clearance on leftover items.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    <strong>Strategy Tip:</strong> If you missed a deal on Black Friday, don't assume it's gone. Check back on Cyber Monday, as unsold stock often returns at equal or better clearance prices.
                  </p>
                </div>

                {/* Amazon India & International */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon India: Cyber Monday Deals</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon India is a primary destination for cyber monday deals, continuing its festive playbook into late November.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon Devices:</strong> Echo Dot, Fire TV Stick, Kindle, and Ring products see deep price cuts as Amazon clears remaining inventory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Software & Subscriptions:</strong> Prime discounts, Kindle Unlimited offers, and Audible plans often drop to their lowest prices of the year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Apple Products:</strong> MacBook and iPhone listings continue to stack bank card discounts and exchange offers.</span>
                    </li>
                  </ul>
                </div>

                {/* International Retailers: Best Buy & Walmart */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">US Retailers: Best Buy & Walmart Cyber Monday</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    For shoppers with access to US shipping addresses or forwarding services, US-based platforms offer unmatched tech and gadget discounts:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="p-4 bg-white rounded-xl border border-[#E8E8F0]">
                      <h4 className="text-xs font-black text-[#1A1A2E] uppercase tracking-wider mb-2">Best Buy Cyber Monday</h4>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">
                        Renowned for record-low pricing on laptops (Dell XPS, MacBook), Samsung/LG OLED TVs, gaming bundles (PS5, Xbox), and premium headphones (Sony, Bose).
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-[#E8E8F0]">
                      <h4 className="text-xs font-black text-[#1A1A2E] uppercase tracking-wider mb-2">Walmart Cyber Monday</h4>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">
                        Strong on budget electronics, entry-level smartphones, home appliances, and massive December toy clearances.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flipkart, Ajio, Myntra, Nykaa Extensions */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Indian Fashion & E-Commerce Extensions</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Local platforms seamlessly extend their Black Friday momentum into Cyber Monday:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Flipkart:</strong> Extends Black Friday smartphone, laptop, and electronics deals through November 30 with fresh lightning deals on Monday.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Ajio & Myntra:</strong> Continue their cyber week fashion sales, featuring 40–70% off on brands like Nike, Adidas, H&M, and Mango. Weekend restocks often make missed sizes available again by Monday.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Nykaa:</strong> Wraps up its "Pink Friday" sale, clearing final beauty and skincare gift bundles from premium brands like The Ordinary and Charlotte Tilbury.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Bottom Line & Conclusion */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Smart Shopping Strategy</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Cyber Monday Is Underrated in India — That Is Exactly Why You Should Use It
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Most Indian shoppers focus entirely on Black Friday and ignore Cyber Monday. That means less competition, more availability, and sometimes better pricing on items that did not clear over the weekend. If you are tracking a specific laptop, a pair of shoes, or a subscription service — waiting until November 30 to check often pays off.
                  </p>
                  <p>
                    The cyber monday deals window in India is still relatively early in its adoption compared to the US. That gap is slowly closing as platforms like Amazon India and Ajio put more resources behind it. But right now, less hype means calmer buying conditions and more thought-out purchases — which is better for your wallet than a 3 AM panic buy during a Friday flash sale.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew on November 30 to stack verified coupon codes on top of extended Cyber Week deals. 💻
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">CouponsCrew Cyber Monday 2026</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Your Complete Cyber Monday Coverage
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    This page will be updated with live cyber monday deals, verified coupon codes, and a platform-by-platform breakdown of the best offers as November 30 approaches.
                  </p>
                  <p>
                    Bookmark it now and come back in late November. We will have all the verified codes and deal alerts ready — so you can shop the Cyber Monday window without having to check ten different sites yourself.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Bookmark now. Save smarter this Cyber Monday with CouponsCrew.
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
                    Cyber Monday Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine extended price cuts, bank offers, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Cyber Week Markdown", desc: "Online-First Price Drops" },
                      { label: "2. Bank & Card Offer", desc: "HDFC, Axis, SBI Discounts" },
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
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Cyber Monday FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Cyber Monday 2026?",
                        a: "Cyber Monday 2026 is on November 30, 2026 — always the Monday following Thanksgiving in the United States."
                      },
                      {
                        q: "Is Cyber Monday better than Black Friday for online deals?",
                        a: "For digital products, software, and subscriptions yes. For high-demand physical products like limited phones, Black Friday is safer due to stock limits."
                      },
                      {
                        q: "Does Amazon India run a Cyber Monday sale?",
                        a: "Amazon India typically extends its Black Friday sale window through November 30, keeping year-end tech and fashion deals active."
                      },
                      {
                        q: "What are the best buy cyber monday deals to watch in 2026?",
                        a: "Best Buy US highlights strong discounts on laptops, TVs, gaming consoles, and headphones as benchmark global tech deals."
                      },
                      {
                        q: "Does Walmart run Cyber Monday deals?",
                        a: "Yes, Walmart US runs strong promotions on budget electronics, home appliances, and toys through its online platform."
                      },
                      {
                        q: "What are 'cyber week deals'?",
                        a: "Cyber week deals refer to the full continuous sale window running from Black Friday (Nov 27) through Cyber Monday (Nov 30)."
                      },
                      {
                        q: "What is 'Black Monday sales' — is it different?",
                        a: "Black Monday is a term occasionally used in UK retail for the same November shopping window; Cyber Monday is the standard global term."
                      },
                      {
                        q: "Are there cyber monday deals on Indian fashion platforms?",
                        a: "Yes, Ajio and Myntra extend their Black Friday fashion sales through November 30 with deep discounts on sportswear and international brands."
                      },
                      {
                        q: "Do Indian banks offer extra discounts during Cyber Monday?",
                        a: "Yes, bank card offers from HDFC, Axis, and SBI active during Black Friday usually extend through November 30."
                      },
                      {
                        q: "Where can I find verified Cyber Monday coupon codes?",
                        a: "Check CouponsCrew's store pages on November 30 for tested and verified coupon codes for Amazon, Flipkart, Ajio, Myntra, and Nykaa."
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
                  Cyber Monday Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Cyber Monday Date", status: "November 30, 2026", active: true },
                    { name: "Event Window", status: "Nov 27 - Nov 30", active: true },
                    { name: "Primary Focus", status: "Tech & Digital Deals", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Cyber Monday Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Take advantage of extended Cyber Week windows on November 30 to secure remaining inventory with less rush and lower site congestion.
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
