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
  Star,
  Calendar,
} from 'lucide-react';

// ============================================================================
// MAIN CHRISTMAS OFFERS PAGE COMPONENT
// ============================================================================
export default function ChristmasOffers() {
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
      q: 'When do Christmas offers start in 2026?',
      a: 'Christmas offers usually begin from December 1st with early sale events, and peak around December 24th–26th (Christmas Eve, Christmas Day, and Boxing Day). Some sales continue into the New Year.',
    },
    {
      q: 'Which brands give the best Christmas discounts?',
      a: 'Amazon, Flipkart, Myntra, Nykaa, Apple, Samsung, and international brands like ASOS and Zara run significant Christmas sales. Travel platforms also offer festive deals.',
    },
    {
      q: 'Are there bank offers available during Christmas?',
      a: 'Yes! HDFC, ICICI, SBI, and Axis Bank frequently offer 10% cashback or instant discount on credit/debit card transactions during the Christmas sale season.',
    },
    {
      q: 'How can I get the latest Christmas coupon codes?',
      a: 'CouponsCrew updates all Christmas coupon codes daily. Browse this page or subscribe to our newsletter for instant deal alerts directly in your inbox.',
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
          <span className="text-gray-900 font-semibold">Christmas Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Christmas And New Year Sale Offers: Make the Best of Both
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      The window between December 20 and January 2 is one of the best times to shop in India. Here is why: Christmas and New Year fall just twelve days apart, and brands do not want to run two separate campaigns. So they stretch one big sale across both — which means the deals last longer and you have more time to decide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790037927/christmas_xu74vf.webp"
                  alt="Christmas offers"
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
                <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-red-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Christmas Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Christmas deals from top brands to help you save more this festive season.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">

                {/* OFFER 1: Amazon Christmas Sale */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">75%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">CHRISTMAS SALE</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded uppercase">GIFTS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Christmas Sale – Up to 75% OFF on Gifts &amp; Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Find the perfect Christmas gift — shop gadgets, toys, books, fashion &amp; more with no coupon code required.
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            document.getElementById('xmas-offer-details-1')?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>
                        <div id="xmas-offer-details-1" className="hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
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
              Popular Brands for Christmas Shopping
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Find the latest Christmas deals, discounts, and offers from top brands.
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

              {/* ARTICLE BLOCK 1: Combined Window & Clearance */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
                  <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Christmas & Year-End Deals 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Navigating the Christmas & Year-End Shopping Window
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    This combined window is when you will find:
                  </p>
                  <p>
                    <strong>Year-end electronics clearance:</strong> Brands need to clear old inventory before January launches. TVs, laptops, headphones, and smartphones from late-2025 and early-2026 model cycles see meaningful price cuts. This is not fake sale pricing — it is genuine inventory movement.
                  </p>
                  <p>
                    <strong>Fashion end-of-season sales:</strong> Winter collection clearance. Jackets, boots, woollens, and formal wear all discount heavily in the last two weeks of December.
                  </p>
                  <p>
                    <strong>Home decor deals:</strong> christmas decorations, christmas garland, christmas wreath, christmas candles — all of this peaks in demand and then clears in the last week of December. If you are buying for next year, post-Christmas is when prices drop the most on decor.
                  </p>
                  <p>
                    <strong>Food and dining:</strong> Zomato, Swiggy, and restaurant chains run Christmas and New Year offers simultaneously. A single promo code often works across both dates.
                  </p>
                  <p>
                    <strong>The practical advice:</strong> Make a list before December 20. Know what you are buying for christmas gifts, what you want to eat on Christmas Eve, and whether you need any new christmas decorations for your home. Going in with a plan means you spend on what you actually need rather than whatever is loudest in the sale banners.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Flipkart Christmas Sale */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Flipkart Christmas Sale</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart does not usually run a dedicated "Christmas Sale" by name, but the Year End Sale — which runs from roughly December 20 to January 1 — is effectively the Flipkart Christmas sale. It is one of the better sales of the year for certain categories.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What works well on Flipkart during Christmas:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Smartphones:</strong> Budget and mid-range phones from Realme, Motorola, Samsung Galaxy A-series, and Poco typically see ₹1,000–₹4,000 off during the Year End Sale. Not as aggressive as the Big Billion Days, but still meaningful.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Laptops:</strong> HP, Lenovo, and Asus laptops in the ₹35,000–₹65,000 range have historically had strong Year End deals. Students returning to college in January make this a high-demand category.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Christmas Gifts and Toys:</strong> Flipkart's toy and gifting section expands significantly in December. LEGO sets, board games, action figures, and kids' electronics are all available. If you are buying secret santa gifts for office exchanges, the ₹500–₹2,000 budget range on Flipkart is solid.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Fashion:</strong> Myntra (Flipkart-owned) runs a separate End of Reason Sale (EORS) in December — one of the best fashion sales in India. Brands like Adidas, Puma, H&M, Zara, and Indian ethnic labels participate. Discounts go up to 50–80% on certain items.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Books and Stationery:</strong> christmas candy, christmas gifts for readers — Flipkart has a books section with decent year-end deals. If someone on your gift list loves reading, this is a good place to look.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart Plus members get early access and extra coins on purchases, which can be redeemed for future discounts. Worth activating if you plan to shop across December.
                  </p>
                </div>

                {/* Amazon Christmas Sale */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Amazon Christmas Sale</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon India runs its Year End Sale in the same December window. For Christmas specifically, Amazon tends to be stronger than Flipkart on home decor, gifting, and international brand availability.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What Amazon does well during Christmas:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Christmas Decorations:</strong> Amazon has one of the largest catalogues of christmas decorations in India — christmas tree options from tabletop 2-foot trees to full 7-foot models, christmas garland in multiple lengths and materials, christmas wreath for doors, christmas candles in various styles, string lights, star toppers, and ornament sets. Price range is wide — ₹299 for basic sets to ₹5,000+ for premium decor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Secret Santa Gifts:</strong> Amazon's "Gift Ideas" section gets curated specifically around Christmas. You can filter by budget (under ₹500, ₹500–₹1,000, ₹1,000–₹2,000) and by recipient type. This makes last-minute secret santa gifts shopping genuinely easy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon Devices:</strong> Echo, Kindle, and Fire TV Stick see their second-best deals of the year during the Amazon Year End Sale (the best being the Great Indian Festival). If you missed the October sale, December is the next best window.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Premium International Brands:</strong> Amazon India stocks brands like Yankee Candle, Hallmark christmas decorations, Villeroy & Boch tableware, and international toy brands that are hard to find elsewhere in India. Christmas is when these sell.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon Fresh:</strong> christmas candy, chocolates, plum cakes, and imported confectionery are available through Amazon Fresh and Pantry. For last-minute Christmas food gifts, this is a convenient option with next-day delivery in most metros.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon Prime members get early access to Year End Sale deals and free fast delivery, which matters a lot when you are ordering gifts with a date in mind.
                  </p>
                </div>

                {/* Zomato Christmas Offers */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Zomato Christmas Offers</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Zomato runs some of its best food offers of the year around Christmas and New Year. The platform knows December 24–25 and December 31 are peak order days, and the deals reflect that.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What to expect from Zomato during Christmas:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Christmas Special Menus:</strong> Many restaurants list limited-time Christmas menus on Zomato — roast chicken, plum cake, yule log desserts, mulled wine (in licensed restaurants), and set meal options. These appear as special dishes on the restaurant page from around December 20.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Flat Discounts and Cashback:</strong> Zomato runs flat ₹100–₹150 off promo codes during the Christmas week. Gold and Pro members get additional discounts on top of the promotional codes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Christmas Hampers and Dessert Delivery:</strong> Bakeries and patisseries on Zomato offer christmas candy, plum cakes, and dessert boxes with scheduled delivery — you can order on December 24 for same-day delivery. Popular options include Social, The Leaping Windows, Theobroma, and local bakeries in your city.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>New Year Eve Deals:</strong> The same Zomato offers often extend to December 31. Pre-ordering food for a house party through Zomato on New Year's Eve has become common in metros — restaurants offer party platters and bulk meal options specifically for this.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Check the Zomato app's "Offers" tab in the week before Christmas. Promo codes for the Christmas window are usually listed there and on CouponsCrew's Zomato offers page.
                  </p>
                </div>

                {/* Swiggy Christmas Deals */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Swiggy Christmas Deals</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Swiggy competes directly with Zomato during the Christmas and New Year window, and the offers are comparable — sometimes better depending on your city and your preferred restaurants.
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Swiggy One Members:</strong> If you have Swiggy One membership (their subscription plan), December is when it delivers the most value — free delivery on orders, extra discounts on Instamart grocery orders, and exclusive restaurant offers during the Christmas period.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Swiggy Instamart:</strong> For Christmas essentials delivered quickly — christmas candles, decorative items, chocolates, soft drinks, and last-minute grocery needs — Instamart is the fastest option. Delivery in 10–20 minutes for in-stock items. During Christmas week, Instamart stocks christmas candy, imported chocolates, and basic christmas decorations in major cities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Restaurant Christmas Deals:</strong> Like Zomato, Swiggy restaurants offer festive menus in December. BBQ Nation, Barbeque Festival, and hotel restaurant chains list Christmas buffet and set-meal options on Swiggy. The convenience of comparing multiple restaurants in one app and ordering in advance is worth using here.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Swiggy Coupon Codes:</strong> CouponsCrew maintains an updated list of Swiggy coupon codes including those that work during the Christmas and New Year window. Check the Swiggy page on CouponsCrew before placing any order — stacking a promo code with a Swiggy One discount is easy and saves ₹100–₹200 per order.</span>
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
                  Other Stores Worth Checking for Christmas Offers
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Beyond the big platforms, a few other destinations have strong Christmas offers worth knowing about:
                </p>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      store: "Nykaa",
                      desc: "Beauty and skincare christmas gifts and hamper sets. Forest Essentials, Kama Ayurveda, The Body Shop, and MAC all have gift sets listed in December. Great for secret santa gifts."
                    },
                    {
                      store: "Myntra",
                      desc: "The End of Reason Sale (EORS) in December is one of the best fashion sales in India. christmas party outfits, winter wear, footwear — all heavily discounted from H&M, Zara, Mango, Levi's, and Nike."
                    },
                    {
                      store: "Croma",
                      desc: "For Christmas electronics gifting — wireless earbuds, smartwatches, portable speakers — Croma runs a Merry Christmas sale in December. Ideal if you want an in-store experience."
                    },
                    {
                      store: "Ajio",
                      desc: "Strong Christmas fashion offers, particularly for Western wear and branded sportswear, offering a great alternative selection for international brands."
                    },
                    {
                      store: "BookMyShow",
                      desc: "Christmas is peak season for live events, comedy shows, and concerts in Indian cities. Look out for ticket cashback offers during Christmas week."
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
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Festive Spirit</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Christmas in India Is Its Own Thing Now
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Merry christmas to everyone reading this — whether you celebrate with a church visit, a family dinner, a Christmas party at work, or just by ordering a plum cake from Zomato at midnight. India has made the christmas celebration its own over the years, and that is a good thing. The christmas tree in the mall lobby, the secret santa at the office, the christmas gifts for friends — it all belongs here now.
                  </p>
                  <p>
                    The deals are real this time of year. Year-end sales from Amazon and Flipkart are genuine clearance events, not manufactured discount theatre. Zomato and Swiggy offers make good food accessible without burning your December budget. And if you check CouponsCrew before every order, you will stack something extra on top of whatever deal you already found.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Check CouponsCrew before checking out to stack verified coupon codes on top of year-end clearance deals. 🎄
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Merry Christmas from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Have a Wonderful December & Happy New Year
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    We hope you have a wonderful December full of good food, quality time with people you care about, and a shopping cart that stays within budget.
                  </p>
                  <p>
                    This page will be updated with live christmas offers and verified coupon codes as December approaches. Bookmark it and check back closer to the date.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Merry Christmas and a very Happy New Year from all of us at CouponsCrew!
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
                    <TrendingUp className="w-4 h-4 text-[#EF4444]" />
                    Christmas Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine year-end clearance, store offers, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Year-End Markdown", desc: "Inventory Clearance Prices" },
                      { label: "2. Bank & Wallet Offers", desc: "Instant Festive Discounts" },
                      { label: "3. CouponsCrew Code", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#EF4444]" />
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
                    <HelpCircle className="w-4 h-4 text-[#EF4444]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Christmas FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When do Christmas offers start in India in 2026?",
                        a: "Most Christmas sale offers go live around December 20. Amazon and Flipkart Year End Sales typically run from December 20–23 through January 1. Food apps start on December 24."
                      },
                      {
                        q: "Where can I buy christmas tree and decorations online?",
                        a: "Amazon India has the widest selection of christmas trees, garlands, wreaths, and candles. Flipkart and local quick-commerce apps like Swiggy Instamart also stock them."
                      },
                      {
                        q: "What are good secret santa gifts under ₹500?",
                        a: "Scented candles, desk organizers, quirky mugs, phone accessories, small skincare sets from Nykaa, and chocolate hampers are top choices under ₹500."
                      },
                      {
                        q: "Are Zomato and Swiggy offers valid on Christmas Day?",
                        a: "Yes, but demand is extremely high on December 24–25. Check CouponsCrew's food delivery pages in the morning to note promo codes early."
                      },
                      {
                        q: "Is the Amazon Year End Sale different from Christmas Sale?",
                        a: "Amazon's Year End Sale is the official name, functioning as the primary Christmas and New Year shopping event for Indian shoppers."
                      },
                      {
                        q: "Which platform is best for Christmas gifts?",
                        a: "Amazon is ideal for home decor and hampers; Myntra and Nykaa are top picks for fashion and beauty gifts; Croma is great for electronics."
                      },
                      {
                        q: "Do Indian restaurants offer special Christmas menus?",
                        a: "Yes, many restaurants feature roast dishes, plum cakes, and festive desserts on Zomato and Swiggy from December 20 onwards."
                      },
                      {
                        q: "Can I get christmas decorations delivered instantly?",
                        a: "Yes, via Amazon Prime same-day delivery or Swiggy Instamart for basic decor and candles within an hour in major metro areas."
                      },
                      {
                        q: "Are there Christmas greeting card options available?",
                        a: "Digital gift cards are instantly available on Amazon, while physical greeting cards and gift sets can be found on Amazon, Archies, and Ferns N Petals."
                      },
                      {
                        q: "How do I find working Christmas coupon codes?",
                        a: "Check CouponsCrew's dedicated festive page for verified coupon codes and cashback deals for Amazon, Flipkart, Zomato, Nykaa, and Myntra before checkout."
                      }
                    ].map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#EF4444] bg-[#FFF5F5]' : 'border-[#E8E8F0] bg-white hover:border-[#EF4444]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#EF4444]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#EF4444] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
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
                  Christmas Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Sale Window", status: "Dec 20 - Jan 1", active: true },
                    { name: "Top Categories", status: "Decor, Beauty, Electronics", active: true },
                    { name: "Food Delivery", status: "Zomato & Swiggy Feasts", active: true }
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Holiday Shopping Tip</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Make your Christmas gift and decor list before December 20 to grab the best inventory before popular items sell out.
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
