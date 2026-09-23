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

export default function HalloweenOffers() {
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
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Halloween 2026 — Best Halloween Deals on Costumes, Decorations & More</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Halloween is October 31 — and if you are shopping for it, the window between early October and October 30 is when you want to move. Prices on halloween costumes, halloween decorations, and party supplies are at their lowest in the first three weeks of October. By October 28, stock runs thin and whatever is left goes at full price or worse. This page covers everything: the holiday itself, why it is worth shopping during this window, which stores have the best deals, and where to eat cheap on Halloween night.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/halloween-offers_rol0om.webp"
                  alt="Halloween Offers"
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
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Halloween Offers</h2>
                  <p className="text-xs text-gray-500">
                    Handpicked Halloween deals from top brands to help you save more this spooky season.
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
              Best Halloween Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover spooky Halloween discounts and exclusive offers from leading brands.

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

              {/* ARTICLE BLOCK 1: About Halloween */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#EA580C] rounded-full block"></span>
                  <span className="text-xs font-black text-[#EA580C] uppercase tracking-widest">Halloween 2026 Overview</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  About Halloween
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Halloween has its roots in the ancient Celtic festival of Samhain (pronounced "SAH-win"), observed over 2,000 years ago in what is now Ireland, the UK, and northern France. On the night of October 31, Celts believed the boundary between the living and the dead blurred — spirits roamed the earth, and people lit bonfires and wore costumes to ward them off.
                  </p>
                  <p>
                    When the Roman Empire absorbed Celtic territories, Samhain blended with Roman festivals — Feralia (honouring the dead) and Pomona (the goddess of fruit and trees, hence the apple-bobbing tradition). The Christian church later layered All Saints' Day (November 1) on top, and the evening before became "All Hallows' Eve" — Halloween.
                  </p>
                  <p>
                    The version most people recognise today — trick-or-treating, jack-o'-lanterns, halloween costumes, and carved halloween pumpkin displays — is largely a 20th-century American development, shaped by Irish and Scottish immigrant traditions in the 1800s and then commercialised heavily after World War II. Today Halloween is a $13–14 billion industry in the United States, making it the second-largest commercial holiday after Christmas.
                  </p>
                  <p>
                    <strong>Halloween in India:</strong> It is not a traditional Indian festival, but Halloween has found an audience in Indian metros over the last fifteen years — largely through corporate parties, school events, and international brand marketing. Restaurants, clubs, and malls in Mumbai, Delhi, Bangalore, and Hyderabad run Halloween events every year. If you are here for Halloween shopping as an NRI, someone celebrating in India, or a content creator covering international deals for an Indian audience, this page has you covered.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Reasons to Shop During Halloween */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Seasonal Shopping Guide</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                    Reasons to Shop During Halloween
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Halloween is a major commercial window in the US retail calendar. Here is why it's worth tracking even when shopping from afar:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Genuine Seasonal Discounts:</strong> Heavy stocking in August/September leads to real clearance pricing on costumes, decor, and party supplies by late October.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Post-Halloween Clearance:</strong> November 1 brings 50–75% off remaining inventory, ideal for stocking up on decorations for the following year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Fall Shopping Overlap:</strong> October coincides with Back-to-School clearance, early Christmas stock arrivals, and fall apparel sales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Creative Budgeting:</strong> DIY supplies, face paints, and alternative crafts offer cheaper, highly personalized alternatives to pre-packaged sets.</span>
                    </li>
                  </ul>
                </div>

                {/* Amazon Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon — The Widest Halloween Selection Online</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon provides unmatched variety across costumes, makeup kits, carving tools, and decorations.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Costumes & Pirate Sets:</strong> Ranging from budget $10 options to full pirate sets ($20–$45) for kids and adults.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Special Effects Makeup:</strong> Professional SFX kits and face paints from Mehron, Snazaroo, and Graftobian ($15–$30).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Carving Kits & Decor:</strong> Multi-blade sets, stencil books, outdoor inflatables, and skeleton props.</span>
                    </li>
                  </ul>
                </div>

                {/* Walmart Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Walmart — Best for Budget Halloween Shopping</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Walmart features private-label holiday items 20–40% cheaper than brand-name equivalents, alongside bulk candy and real/craft pumpkins.
                  </p>
                </div>

                {/* Target Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Target — Best for Halloween Aesthetics and Quality</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Home to the Hyde & EEK! Boutique line, Target excels in design-forward indoor decor, licensed costumes (Disney, Marvel), quality makeup brands (NYX, e.l.f.), and in-store Dollar Spot finds ($1–$5).
                  </p>
                </div>

                {/* Specialty Stores: Spirit Halloween & Party City */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Specialty Retailers: Spirit Halloween & Party City</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="p-4 bg-white rounded-xl border border-[#E8E8F0]">
                      <h4 className="text-xs font-black text-[#1A1A2E] uppercase tracking-wider mb-1">Spirit Halloween (In-Store Only)</h4>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">
                        The largest seasonal Halloween pop-up store, offering professional-grade costumes, animatronics, fog machines, and exclusive movie-licensed characters.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-[#E8E8F0]">
                      <h4 className="text-xs font-black text-[#1A1A2E] uppercase tracking-wider mb-1">Party City</h4>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">
                        The prime destination for bulk party supplies (cups, plates, table covers, balloons) and matching group costume sets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Restaurant & Fast Food Deals */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Food & Dining Deals</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Halloween Discounts on Restaurants and Fast Food
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Halloween night is also a big night for food deals in the US. Several major chains run promotions specifically on October 31:
                  </p>
                  <p>
                    <strong>McDonald's:</strong> Historically runs Boo Buckets — the iconic Halloween-themed Happy Meal pails — from mid-October through Halloween.<br />
                    <strong>Krispy Kreme:</strong> Offers one free Halloween-themed doughnut to anyone who comes in wearing a halloween costume on October 31. No purchase necessary.<br />
                    <strong>Chipotle:</strong> The "Boorito" deal — deeply discounted burritos ($3–$4) for anyone in a halloween outfit in-store and on the app.<br />
                    <strong>Sonic:</strong> Half-price shakes on Halloween night from 8 PM onwards.<br />
                    <strong>Dairy Queen & Domino's:</strong> Boo Blizzard deals in October and 20–30% off online pizza orders on October 31.
                  </p>
                  <p>
                    For anyone hosting a Halloween party, combining Domino's online discount with a pickup order and Party City bulk supplies covers most of what you need at significantly lower cost than catered event food.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Bottom Line & Conclusion */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Shopping Strategy</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Halloween Shopping Is About Timing, Not Budget
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The best halloween costumes, halloween decorations, and supplies are not necessarily the most expensive ones — they are the ones you bought in the first two weeks of October. That is when the selection is full, prices are at their pre-clearance low, and delivery has enough buffer before October 31.
                  </p>
                  <p>
                    If you are looking for a pirate costume, girls halloween costumes for your kids, or just some halloween pumpkin lights for the front porch — shop by October 20. Do not leave it to the week of. CouponsCrew keeps an updated list of verified Halloween coupon codes for Amazon, Walmart, Target, and Party City — check the store pages here before checkout to stack an extra discount on top of whatever sale is running.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew in early October for verified promo codes on costumes, makeup, and party supplies. 🎃
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">CouponsCrew Halloween 2026</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Get Ready for Saturday, October 31, 2026
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    This page will be updated with live Halloween coupon codes, the best costume deals, and verified offers from Amazon, Walmart, Target, Spirit Halloween, Party City, and major fast-food chains as October approaches.
                  </p>
                  <p>
                    Bookmark this page and come back in early October — we will have everything ready when the deals go live.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Have a spooky and safe Halloween 2026 from the CouponsCrew team! 👻
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
                    <TrendingUp className="w-4 h-4 text-[#EA580C]" />
                    Halloween Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine early-October sales, store rewards, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Early October Sale", desc: "Full Selection & Pre-Clearance" },
                      { label: "2. Fast Food Specials", desc: "Boorito & Free Doughnut Perks" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
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
                    <HelpCircle className="w-4 h-4 text-[#EA580C]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Halloween FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Halloween 2026?",
                        a: "Halloween is on Saturday, October 31, 2026 — making it a prime weekend for parties and trick-or-treating."
                      },
                      {
                        q: "Where is the best place to buy costumes online?",
                        a: "Amazon offers the widest selection and fast Prime delivery, Target has great mid-range options, and Spirit Halloween is ideal for licensed costumes."
                      },
                      {
                        q: "What are some easy DIY costumes?",
                        a: "Ghosts (white sheets), witches (black clothes + hat), skeletons (face paint), vampires, and cats require minimal purchases."
                      },
                      {
                        q: "What are good pumpkin carving ideas for beginners?",
                        a: "Classic triangle eyes and jagged mouths are easiest. Pumpkin painting with acrylics is great for kids and lasts longer."
                      },
                      {
                        q: "Are plus-size costumes available?",
                        a: "Yes, Amazon, Target, Walmart, and Spirit Halloween all carry extended sizing across most popular costume lines."
                      },
                      {
                        q: "What makeup brands are best for Halloween?",
                        a: "Mehron and Snazaroo are professional face paints; e.l.f. and NYX offer skin-safe cosmetic kits available at Target."
                      },
                      {
                        q: "When should I buy decorations for the best price?",
                        a: "Shop the first two weeks of October for selection, or November 1 for 50–75% clearance discounts on leftover stock."
                      },
                      {
                        q: "What is the difference between carving and painting?",
                        a: "Carving cuts through the skin for illuminated jack-o'-lanterns, while painting preserves the pumpkin for a longer lifespan."
                      },
                      {
                        q: "What are funny costumes that land well?",
                        a: "Food pairings (avocado, bacon & eggs) and current-year pop culture meme costumes get the best reactions."
                      },
                      {
                        q: "Do I need to spend a lot for a good costume?",
                        a: "No, a $15–$20 budget costume elevated with good makeup or accessories works perfectly for any party."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#EA580C] bg-[#FFF7ED]' : 'border-[#E8E8F0] bg-white hover:border-[#EA580C]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#EA580C]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#EA580C] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Halloween Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Halloween Date", status: "October 31, 2026", active: true },
                    { name: "Best Shopping Window", status: "Early October", active: true },
                    { name: "Top Food Promos", status: "Chipotle, Krispy Kreme", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Complete your costume and decoration shopping by October 20 to avoid sizing shortages and shipping delays before October 31.
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
