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
  ExternalLink,
  Star,
} from 'lucide-react';
import { MOTHERS_DAY_OFFERS_DATA } from './mothersDayOffersData';

export default function MothersDayOffers() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [expandedOffers, setExpandedOffers] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedOffers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategoryBadgeClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('electronics')) return 'text-orange-700 bg-orange-100';
    if (cat.includes('fashion')) return 'text-pink-700 bg-pink-100';
    if (cat.includes('beauty')) return 'text-rose-700 bg-rose-100';
    if (cat.includes('sports')) return 'text-blue-700 bg-blue-100';
    if (cat.includes('eyewear')) return 'text-purple-700 bg-purple-100';
    if (cat.includes('mobile') || cat.includes('mobiles')) return 'text-indigo-700 bg-indigo-100';
    return 'text-gray-700 bg-gray-100';
  };

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
          <span className="text-gray-900 font-semibold">Mother's Day Offers</span>
        </nav>

        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Hero Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">
                      Mother's Day Deals 2027 – Sale Offers & Coupon Codes for May 9
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      Mother's Day 2027 falls on Sunday, May 9, 2027. It is observed on the second Sunday of May each year across the US, Canada, Australia, India, and most of the world. In the UK, the equivalent observance — Mothering Sunday — falls earlier, on March 7, 2027.

Mother's Day is one of the top gifting occasions of the year. Flowers, jewellery, beauty sets, dining experiences, fashion, and personalised gifts all see strong sale activity in the week leading up to the day.

This page covers verified Mother's Day 2027 deals and coupon codes from stores listed on CouponsCrew — updated as offers go live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px]">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789520458/mother_day_ahtz90.webp"
                  alt="Mother's Day sale offers"
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
                <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-pink-500" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Mother&apos;s Day Offers</h2>
                  <p className="text-xs text-gray-500">Handpicked Mother&apos;s Day deals from top brands to help you celebrate and save this May 10.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {MOTHERS_DAY_OFFERS_DATA.map((offer) => (
                  <div
                    key={offer.id}
                    id={offer.id}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative"
                  >
                    {/* Left: Purple Discount Block */}
                    <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                      <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">
                        {offer.badgeType || 'UP TO'}
                      </span>
                      <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">
                        {offer.discountValue
                          ? offer.discountValue
                            .replace('UP TO ', '')
                            .replace('FLAT ', '')
                            .replace(' OFF', '')
                          : ''}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                      <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">
                        {offer.scopeText || offer.category}
                      </span>
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                    </div>

                    {/* Middle: Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${getCategoryBadgeClass(offer.category)}`}>
                            {offer.category}
                          </span>
                          {offer.isVerified && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                              VERIFIED
                            </span>
                          )}
                        </div>

                        <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                          {offer.title}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {offer.description}
                        </p>

                        {offer.points && offer.points.length > 0 && (
                          <div className="mt-3">
                            <button
                              type="button"
                              onClick={() => toggleDetails(offer.id)}
                              className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none cursor-pointer"
                            >
                              <span>View Details</span>
                              <ChevronDown
                                className={`w-4 h-4 text-indigo-600 transition-transform duration-200 ${expandedOffers[offer.id] ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {expandedOffers[offer.id] && (
                              <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                                {offer.points.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Brand & CTA */}
                    <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src={offer.brandLogo}
                          alt={offer.brandName}
                          className="h-9 w-auto object-contain max-w-[130px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="w-full space-y-2">
                        {offer.code ? (
                          <div className="w-full bg-slate-50 border border-dashed border-slate-300 text-center py-2.5 rounded-xl font-bold text-slate-800 text-sm">
                            {offer.code}
                          </div>
                        ) : null}
                        <a
                          href={offer.dealUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        >
                          <span>Get Deal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href={`/stores/${offer.storeSlug ?? `${offer.brandName.toLowerCase().replace(/\s+/g, '-')}-coupon-code`}`}
                          className="w-full bg-white border border-gray-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                        >
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

        {/* POPULAR BRANDS */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands for Mother&apos;s Day Shopping
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Find the latest Mother&apos;s Day deals, discounts, and offers from top brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Amazon', slug: 'amazon-coupon-code', logoBg: '#EAF2FB', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg', discountLabel: 'Up to 90% OFF' },
              { name: 'Pepperfry', slug: 'pepperfry-coupon-code', logoBg: '#FDF1E7', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg', discountLabel: 'Up to 80% OFF' },
              { name: 'Myntra', slug: 'myntra-coupon-code', logoBg: '#FFF0F4', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp', discountLabel: 'Up to 90% OFF' },
              { name: 'Flipkart', slug: 'flipkart-coupon-code', logoBg: '#EBF2FE', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp', discountLabel: 'Up to 95% OFF' },
              { name: 'Zepto', slug: 'zepto-coupon-code', logoBg: '#F3E9FC', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp', discountLabel: 'Up to 95% OFF' },
              { name: 'Blinkit', slug: 'blinkit-coupon-code', logoBg: '#FDF7E3', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp', discountLabel: 'Up to 80% OFF' },
              { name: 'Swiggy', slug: 'swiggy-coupon-code', logoBg: '#FEF0E3', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp', discountLabel: 'Up to 50% OFF' },
              { name: 'Nykaa', slug: 'nykaa-coupon-code', logoBg: '#FDE9F1', logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp', discountLabel: 'Up to 60% OFF' },
            ].map((brand) => (
              <div key={brand.slug} className="bg-white border border-[#E8E8F0] rounded-2xl p-6 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 group">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 mb-3 shadow-xs" style={{ backgroundColor: brand.logoBg }}>
                    <img src={brand.logoImage} alt={brand.name} className="max-h-full max-w-full object-contain rounded-xl" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-base mb-2 group-hover:text-[#5B4FBE] transition-colors">{brand.name}</h3>
                  <span className="inline-block bg-[#FFF0EB] text-[#FF5722] font-bold text-xs px-3.5 py-1 rounded-full mb-5">{brand.discountLabel}</span>
                </div>
                <Link href={`/stores/${brand.slug}`} className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-all shadow-xs">
                  <span>Get Deal</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link href="/stores" className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-extrabold text-sm sm:text-base bg-white hover:bg-blue-50/60 transition-all shadow-xs">
              <LayoutGrid className="w-5 h-5 text-[#5B4FBE]" />
              <span>View More Stores</span>
            </Link>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <section className="py-16 border-t border-[#E8E8F0] font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

    {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
    <div className="lg:col-span-7 space-y-10">

      {/* ARTICLE BLOCK 1: Why Mother's Day Is a Major Shopping Event (ONLY H2 ON THE PAGE) */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Mother&apos;s Day Deals 2027</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Why Mother&apos;s Day Is a Major Shopping Event
        </h2>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Mother&apos;s Day consistently ranks among the highest-spend gifting events of the year. The National Retail Federation in the US has tracked Mother&apos;s Day as the third-largest retail holiday after the winter holiday season and back-to-school. Spending covers a wide range of categories — flowers, jewellery, dining, clothing, beauty, and experience-based gifts.
          </p>
          <p>
            Sales and discount offers typically open in the week before May 9, with the strongest deals running from the Thursday and Friday ahead of the weekend. Many stores extend offers through the weekend itself, with post-Mother&apos;s Day clearance following the week after.
          </p>
          <p>
            Key shopping categories for Mother&apos;s Day 2027:
          </p>
          <ul className="space-y-2.5 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Flowers &amp; gifting</strong> – bouquets, hampers, personalised gift sets</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Jewellery &amp; accessories</strong> – the consistently top-spend category for Mother&apos;s Day</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Beauty &amp; skincare</strong> – gift sets, serums, fragrance collections</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Fashion &amp; clothing</strong> – spring collections, scarves, handbags</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Dining &amp; experiences</strong> – restaurant vouchers, afternoon tea, spa packages</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
              <span><strong>Home &amp; lifestyle</strong> – candles, homewares, personalised keepsakes</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ARTICLE BLOCK 2: Mother's Day 2027 Offers by Category */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Category Guide</span>
        </div>
        <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Mother&apos;s Day 2027 Offers by Category
        </h3>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          {/* Flowers & Gifting */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Flowers &amp; Gifting
            </h3>
            <p>
              Flowers remain the most popular Mother&apos;s Day gift category year on year. Online florists, gifting platforms, and hamper services run Mother&apos;s Day promotions from early May onward. Delivery slots for May 9 fill up fast — most reliable florists close their last-minute delivery window by Thursday or Friday of that week.
            </p>
            <p>
              Gift hampers, chocolate boxes, personalised cards, and curated gift bundles are also active in this category. Check CouponsCrew store pages for verified promo codes from gifting platforms before checkout.
            </p>
          </div>

          {/* Jewellery & Accessories */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Jewellery &amp; Accessories
            </h3>
            <p>
              Jewellery is the highest average-spend category for Mother&apos;s Day shopping. Rings, necklaces, earrings, bracelets, and personalised pieces see strong promotional activity in the week before May 9. Many jewellery brands launch Mother&apos;s Day collections in late April and run discount codes through the weekend.
            </p>
            <p>
              Accessories including handbags, scarves, and sunglasses also carry promotional offers during this period.
            </p>
          </div>

          {/* Beauty & Skincare */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Beauty &amp; Skincare
            </h3>
            <p>
              Beauty gift sets are one of the most popular Mother&apos;s Day purchase categories. Brands across skincare, fragrance, and cosmetics put together curated sets at special prices for the gifting season. Many also run site-wide discount codes valid across the week before Mother&apos;s Day.
            </p>
          </div>

          {/* Fashion & Clothing */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Fashion &amp; Clothing
            </h3>
            <p>
              Spring is in season by May, and fashion brands use Mother&apos;s Day to push new arrivals alongside gifting-focused promotions. Occasionwear, casualwear, and spring outerwear all feature. Some brands offer gift-with-purchase deals tied to Mother&apos;s Day promotions.
            </p>
          </div>

          {/* Dining & Experiences */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Dining &amp; Experiences
            </h3>
            <p>
              Restaurant bookings for Mother&apos;s Day Sunday fill early. Many dining platforms and restaurant groups run Mother&apos;s Day menus and gift voucher discounts in the weeks leading up to May 9. Spa day packages, afternoon tea vouchers, and experience-based gifts are also active in this period.
            </p>
          </div>

          {/* Home & Lifestyle */}
          <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-3">
            <h3 className="text-base font-extrabold text-[#1A1A2E]">
              Home &amp; Lifestyle
            </h3>
            <p>
              Candles, home fragrance, personalised keepsakes, and premium kitchenware feature in many Mother&apos;s Day gift guides. Home and lifestyle brands often run discount codes valid across the full week before the occasion.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: Mother's Day 2027 Sale Dates (Table) */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Sale Calendar</span>
        </div>
        <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Mother&apos;s Day 2027 Sale Dates
        </h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#E8E8F0]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F8FF] border-b border-[#E8E8F0]">
                <th className="py-3.5 px-4 text-xs font-black text-[#1A1A2E] uppercase tracking-wider">Period</th>
                <th className="py-3.5 px-4 text-xs font-black text-[#1A1A2E] uppercase tracking-wider">What to Expect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8F0] text-sm text-[#4A4A6A]">
              <tr>
                <td className="py-3.5 px-4 font-bold text-[#1A1A2E] whitespace-nowrap">Monday–Wednesday, May 3–5, 2027</td>
                <td className="py-3.5 px-4">Early Mother&apos;s Day promotions — gift guides and pre-sale offers from select stores</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[#1A1A2E] whitespace-nowrap">Thursday–Friday, May 6–7, 2027</td>
                <td className="py-3.5 px-4">Main sale window opens — highest offer density across gifting, beauty, and jewellery</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[#1A1A2E] whitespace-nowrap">Saturday, May 8, 2027</td>
                <td className="py-3.5 px-4">Last-day delivery cut-offs for most standard shipping — peak deal activity continues</td>
              </tr>
              <tr className="bg-[#FFF5F5]/60">
                <td className="py-3.5 px-4 font-bold text-[#EF4444] whitespace-nowrap">Mother&apos;s Day Sunday, May 9, 2027</td>
                <td className="py-3.5 px-4 font-medium text-[#1A1A2E]">Last-minute digital gifts, e-vouchers, and dining offers active</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[#1A1A2E] whitespace-nowrap">Week of May 10–14, 2027</td>
                <td className="py-3.5 px-4">Post-Mother&apos;s Day clearance from select stores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ARTICLE BLOCK 4: How to Use Mother's Day Coupon Codes */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Step-by-Step</span>
        </div>
        <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          How to Use Mother&apos;s Day Coupon Codes
        </h3>
        <div className="mt-5 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <ol className="space-y-3">
            {[
              "Find a verified Mother's Day coupon code on this page or the relevant store page on CouponsCrew.",
              "Add items to your cart on the store's website or app.",
              "Enter the coupon code at checkout in the promo or discount code field.",
              "Confirm the discount applies before completing payment."
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                <span className="w-6 h-6 rounded-full bg-[#EF4444] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-medium text-[#1A1A2E]">{step}</span>
              </li>
            ))}
          </ol>
          <p className="pt-1">
            Some Mother&apos;s Day sale discounts apply automatically at checkout without a code. Check the store&apos;s offer page for details before looking for a code.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 5: Tips for Getting the Best Mother's Day Deals */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Smart Shopping</span>
        </div>
        <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Tips for Getting the Best Mother&apos;s Day Deals
        </h3>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            <strong>Order flowers and hampers early.</strong> Mother&apos;s Day delivery slots for florists and gifting services fill up by Thursday of that week for most reliable options. Order by May 6 to avoid missing standard delivery windows.
          </p>
          <p>
            <strong>Check jewellery brands in late April.</strong> Many jewellery retailers launch Mother&apos;s Day promotions from late April onward with the widest selection. Waiting until the week of May 9 means less choice and shorter delivery lead times.
          </p>
          <p>
            <strong>Book dining experiences ahead.</strong> Mother&apos;s Day is one of the busiest restaurant days of the year. Booking in April for a May 9 meal is not too early — popular venues fill their sittings weeks in advance.
          </p>
          <p>
            <strong>Look for gift-with-purchase deals.</strong> Many beauty and fashion brands attach a free gift or sample set to Mother&apos;s Day orders above a threshold. Check the offer terms before adding items to cart.
          </p>
          <p>
            <strong>Check e-voucher options for last-minute purchases.</strong> If ordering after Wednesday May 5, standard physical delivery may not arrive in time. E-vouchers and digital gift cards from dining, spa, and experience platforms remain valid options through Sunday itself.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 6: About This Page */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#EF4444] rounded-full block"></span>
          <span className="text-xs font-black text-[#EF4444] uppercase tracking-widest">Editorial Policy</span>
        </div>
        <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          About This Page
        </h3>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            CouponsCrew updates this Mother&apos;s Day deals page ahead of May each year. Coupon codes and offer details listed here are verified at the time of publication. Availability, discount amounts, and coupon validity are set by individual stores and can change without notice.
          </p>
          <p>
            For store-specific Mother&apos;s Day coupon codes, visit the relevant store page on CouponsCrew.
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT - STICKY SIDEBAR (30%) */}
    <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

      {/* SIDEBAR CARD 1 - Stack Visualizer */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
          <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#EF4444]" />
            Mother&apos;s Day Savings Stack
          </h3>
          <p className="text-xs text-[#4A4A6A] mb-4">Combine curated gift sets, free gifts, and coupons.</p>

          <div className="space-y-2">
            {[
              { label: "1. Gifting Bundle Markdown", desc: "Special Set & Sale Pricing" },
              { label: "2. Gift-With-Purchase", desc: "Free Samples & Bonus Gifts" },
              { label: "3. CouponsCrew Code", desc: "Verified Promo Savings" }
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
            <h3 className="font-extrabold text-[#1A1A2E] text-sm">
              Frequently Asked Questions – Mother&apos;s Day Offers 2027
            </h3>
          </div>

          <div className="space-y-2">
            {[
              {
                q: "When is Mother's Day 2027?",
                a: "Mother's Day 2027 is on Sunday, May 9, 2027. It falls on the second Sunday of May each year in the US, Canada, Australia, India, and most countries worldwide."
              },
              {
                q: "When is Mother's Day in the UK in 2027?",
                a: "In the UK, the equivalent observance is called Mothering Sunday. In 2027, Mothering Sunday falls on Sunday, March 7, 2027 — earlier than the global May date, as it follows the fourth Sunday of Lent rather than the calendar month."
              },
              {
                q: "When do Mother's Day 2027 sales start?",
                a: "Most Mother's Day sales open from the first week of May, with early-access deals from some stores appearing in late April. The heaviest promotions run from Thursday May 6 through Sunday May 9, 2027."
              },
              {
                q: "What are the most popular Mother's Day gift categories?",
                a: "Jewellery consistently sees the highest average spend. Flowers and gift hampers are the most commonly purchased items. Beauty gift sets, dining experiences, fashion, and home lifestyle gifts are also widely purchased in this period."
              },
              {
                q: "Are there delivery cut-off dates I should know about?",
                a: "Yes. Standard delivery for physical gifts typically closes by Thursday or Friday of Mother's Day week (May 6–7, 2027) for guaranteed May 9 arrival. Check the individual store's delivery terms before ordering. E-vouchers and digital gift cards have no delivery cut-off."
              },
              {
                q: "Is Mother's Day a public holiday?",
                a: "No. Mother's Day is not a public holiday in the US, UK, Canada, Australia, or India. It is a widely observed cultural occasion but does not carry an official day off."
              },
              {
                q: "How do I know if a Mother's Day coupon code on CouponsCrew is still valid?",
                a: "CouponsCrew verifies coupon codes before listing them. If a code on this page shows as active, it was working at the time of verification. Codes can expire mid-sale — apply them promptly once you find one that fits your order."
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

      {/* SIDEBAR CARD 2 - Mother's Day 2027 Details */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
          Mother&apos;s Day 2027 Details
        </h3>
        <div className="space-y-3">
          {[
            { name: "Main Sale Window", status: "May 6 – May 9, 2027", active: true },
            { name: "Mother's Day", status: "Sunday, May 9, 2027", active: true },
            { name: "Top Categories", status: "Jewellery, Flowers, Beauty", active: true }
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

      {/* SIDEBAR CARD 3 - Shopping Tip */}
      <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-4 h-4 text-[#FF9900]" />
          <h3 className="font-extrabold text-[#1A1A2E] text-sm">Mother&apos;s Day Shopping Tip</h3>
        </div>
        <p className="text-xs text-[#4A4A6A] leading-relaxed">
          Order flowers and hampers by May 6 for guaranteed standard delivery before Sunday, May 9 — or opt for instant e-vouchers for last-minute gifting.
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
