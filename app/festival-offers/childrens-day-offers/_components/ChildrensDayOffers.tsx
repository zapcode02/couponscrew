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

export default function ChildrensDayOffers() {
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
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Children's Day Offers 2026 — Best Deals and Discounts for Kids in India</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Children's Day in India is on November 14 every year. The date marks the birthday of Pandit Jawaharlal Nehru, India's first Prime Minister, who was deeply fond of children. He believed children are the future of any nation, and his affection for them earned him the nickname Chacha Nehru — Uncle Nehru. After his death in 1964, the Indian Parliament chose his birthday as the permanent date for celebrating children across the country.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/children_day_offer_mcxjne.webp"
                  alt="Childrens Day Offers"
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
                  <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top Children's Day Offers</h2>
                  <p className="text-xs text-gray-500">
                    Handpicked Children's Day deals from top brands to help you save more while celebrating the little ones.
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
              Best Children's Day Deals by Top Brands
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Discover exciting Children's Day discounts and special offers from leading brands.

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

              {/* ARTICLE BLOCK 1: The Children's Day Story */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
                  <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">Children's Day 2026 Overview</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  The Children's Day Story — Where It Comes From
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The childrens day story in India is tied entirely to Nehru. He visited schools, played with children at public events, and was known to say that the future of India lived in its children. After Independence, this was not just sentiment — it was policy. Nehru pushed for universal primary education and midday meal schemes long before they became widespread.
                  </p>
                  <p>
                    The first Children's Day celebration in India was held on November 14, 1959. Schools across the country organised events, and the government officially recognised the day. Over the decades, November 14 has become a school holiday filled with cultural programmes, fancy dress competitions, story-reading sessions, and plenty of sweets.
                  </p>
                  <p>
                    Globally, the United Nations first recognised World Children's Day on November 20 — the date the UN Convention on the Rights of the Child was adopted in 1989. Several countries celebrate on that date. India, however, has always kept November 14, and Nehru's birthday remains the heart of the celebration here.
                  </p>
                  <p>
                    The childrens day story, in every version, is about one thing: that children deserve time, attention, and the space to be children. Gifts and deals are part of how families mark that day in the modern world.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Festive Guide</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-[#1A1A2E] leading-tight">
                    Children's Day Decoration — How Schools and Homes Get Ready
                  </h2>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Children's day decoration has its own culture in India. Schools go all out — colourful bunting, balloon arches, hand-drawn posters with Nehru's quotes, and themed backdrops for photos. Classrooms get decorated by students the day before, with many schools running a whole week of activities leading up to November 14.
                  </p>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    At home, families with young children often put up small balloon setups or hang paper decorations in the child's room. Birthday-style setups with the child's name spelled out in letters are common for families who want to make the day feel extra special.
                  </p>
                </div>

                {/* Where to Buy Supplies */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Where to Buy Children's Day Supplies</h3>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon India & Flipkart:</strong> Carry a full range of balloon kits, party banners, paper fans, streamers, and complete decoration packs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>FirstCry:</strong> Offers party kits specifically designed for children's celebrations alongside themed clothing for school events.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Meesho:</strong> Great for budget decoration bundles at prices lower than major e-commerce sites for non-urgent deliveries.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Blinkit & Swiggy Instamart:</strong> Perfect for last-minute home delivery of balloon packs and basic party supplies.</span>
                    </li>
                  </ul>
                </div>

                {/* Children's Day Poem Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">A Children's Day Poem — Written for November 14</h3>
                  <p className="mt-1 text-xs text-[#4A4A6A]">Here is an original children's day poem for teachers, parents, and schools to use freely in cards, programmes, or classroom displays:</p>

                  <div className="my-4 p-5 bg-white rounded-xl border border-[#E8E8F0] italic text-xs text-[#1A1A2E] leading-relaxed space-y-3">
                    <p className="font-bold not-italic text-sm text-[#5B4FBE]">Little Hands, Bright Eyes</p>
                    <p>
                      Little hands that reach for stars,<br />
                      Bright eyes that see no scars,<br />
                      A laugh that fills the longest room —<br />
                      This is the child who clears the gloom.
                    </p>
                    <p>
                      Chacha Nehru loved them so,<br />
                      He knew which seeds would grow and grow.<br />
                      November skies are pale and kind,<br />
                      On this day we free the mind.
                    </p>
                    <p>
                      No burden, no hurry, no test today,<br />
                      Let the child in all of us play.<br />
                      For joy is not something we earn or buy —<br />
                      It lives in every "how" and "why."
                    </p>
                  </div>
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">
                    Feel free to print this children's day poem in school magazines or use it in a card. It is written to be read aloud in classrooms and works well for morning assemblies.
                  </p>
                </div>

                {/* Make The Kids Feel Special Every Day */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-base font-bold text-[#1A1A2E]">Make The Kids Feel Special Every Day</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    One thing the day gets right is attention. Children do not always need expensive gifts. They need the kind of attention that says: we see you, we are here, this day is yours. Here are some ways to make the day memorable without spending a lot:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>A handwritten letter:</strong> Write a specific, personal note about something real they did this year that made you proud. Children carry those letters for years.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>A day-off from routine:</strong> Skip extra tuition, let them choose the movie, food, and schedule for a few hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>A book they actually want:</strong> Explore publishers like Pratham Books, Tulika, or series like Diary of a Wimpy Kid and Harry Potter on Amazon or Flipkart.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Cook their favourite meal:</strong> Order via Zomato or Swiggy if cooking isn't an option, keeping an eye out for Children's Day combo promotions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Small indoor activities:</strong> Slime kits, clay sets, and science experiment boxes (available on Amazon from ₹299) keep children engaged for hours.</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed font-semibold">
                    The point is this: children remember the day when someone made an effort. The effort matters more than the price tag.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Children's Day Special Offers */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Sale Directory</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Children's Day Special Offers
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Every year, retailers run childrens day offers across categories — toys, books, clothing, footwear, and activity kits. Here is where to find the best deals in 2026:
                </p>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      store: "Amazon India",
                      desc: "Toys (LEGO, Hasbro, Fisher-Price at 20–40% off), kids' books (flat 30–50% off from Penguin & Scholastic), activity kits, and Fire Kids tablets."
                    },
                    {
                      store: "Flipkart",
                      desc: "Kids' clothing (H&M, UCB, Mothercare at 30–50% off), kids' footwear, and toys/board games with no-cost EMI options."
                    },
                    {
                      store: "FirstCry",
                      desc: "India's largest children's retail platform featuring baby care products, apparel, school bags, and steep discounts on their in-house brand BabyHug."
                    },
                    {
                      store: "Myntra",
                      desc: "Kids' fashion and traditional ethnic wear with 30–60% off from premium brands like H&M, Gap Kids, and United Colors of Benetton."
                    },
                    {
                      store: "Nykaa Baby & Croma",
                      desc: "Nykaa offers 20–35% off on Cetaphil Baby and Mamaearth Kids. Croma stocks kid-safe headphones and drawing tablets starting around Rs 1,999."
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
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Smart Shopping Strategy</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Count on CouponsCrew For Best Offers
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The Children's Day sale window is short — most deals run for three to five days around November 14. If you are planning to buy a gift, the best approach is to shortlist what you want to buy by November 10, then check CouponsCrew for verified codes before you check out. Codes that are expired or unverified cost you the discount you were counting on. Every code on CouponsCrew is tested against the store before it is listed.
                  </p>
                  <p>
                    For childrens day offers specifically, the highest savings usually come from stacking a platform-level sale discount with a bank card offer and a coupon code. On Amazon India, HDFC Bank and Axis Bank card users often get an extra 5–10% instant discount on top of the sale price. On Flipkart, Bajaj Finserv and HDFC Bank no-cost EMI options mean you can buy a larger gift without paying extra in interest.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Bookmark the CouponsCrew Children's Day page now and come back when you are ready to buy. 🎈
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Happy Children's Day from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Celebrate November 14 with Smart Savings
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    Whether you are buying for a toddler or a teenager, a classroom of thirty children or just your own two — there is a deal available.
                  </p>
                  <p>
                    CouponsCrew has the codes, deal alerts, and price comparisons ready before November 14. Shop smart and save big this Children's Day!
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Happy Children's Day from the entire CouponsCrew team!
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
                    Children's Day Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine sale discounts, bank offers, and coupons.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Children's Day Sale Price", desc: "Toys & Books Special Markdowns" },
                      { label: "2. Bank Card Instant Off", desc: "HDFC, Axis, Bajaj Finserv" },
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
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Children's Day FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When is Children's Day in India in 2026?",
                        a: "Children's Day in India is on November 14, 2026 (a Saturday), marking the birth anniversary of Pandit Jawaharlal Nehru."
                      },
                      {
                        q: "Why is Children's Day celebrated on November 14?",
                        a: "It commemorates Pandit Nehru's birthday in honor of his immense affection for children and his dedication to their education and welfare."
                      },
                      {
                        q: "What are the best Children's Day offers in 2026?",
                        a: "Top deals are found on Amazon India, Flipkart, FirstCry, and Myntra across toys, books, kids' clothing, and learning devices."
                      },
                      {
                        q: "Which platform is best for kids' toys?",
                        a: "Amazon India offers the widest toy selection (LEGO, Hasbro, Hot Wheels), while FirstCry is top-rated for baby and toddler toys."
                      },
                      {
                        q: "Where can I find Children's Day decoration supplies?",
                        a: "Amazon India and Flipkart carry party kits, while quick-commerce apps like Blinkit and Swiggy Instamart offer instant 10-minute delivery."
                      },
                      {
                        q: "What gifts are best for a 5-year-old?",
                        a: "Activity kits (slime, clay, science experiments), picture books, and building block sets from brands like Einstein Box and Fisher-Price."
                      },
                      {
                        q: "Are there food deals on Children's Day?",
                        a: "Yes, Zomato and Swiggy run special offers, free desserts, and kids' meal combos from QSR partners like McDonald's and Domino's."
                      },
                      {
                        q: "What is a good book gift for a 10-year-old?",
                        a: "Diary of a Wimpy Kid, Harry Potter, and Amar Chitra Katha graphic novels are popular choices with 30–50% discounts."
                      },
                      {
                        q: "Does Nykaa have Children's Day offers?",
                        a: "Yes, Nykaa Baby offers 20–35% off on gentle skincare and grooming brands like Cetaphil Baby and Mamaearth Kids."
                      },
                      {
                        q: "Where can I find verified Children's Day coupon codes?",
                        a: "Check CouponsCrew's dedicated store pages before checkout on November 14 for tested, verified promo codes and cashback deals."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#3B82F6] bg-[#EFF6FF]' : 'border-[#E8E8F0] bg-white hover:border-[#3B82F6]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
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
                  Children's Day Details
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Children's Day Date", status: "November 14, 2026", active: true },
                    { name: "Top Categories", status: "Toys, Books, Clothing", active: true },
                    { name: "Food Delivery", status: "Zomato & Swiggy Treats", active: true }
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
                  Shortlist your gift selections by November 10 to catch early-bird lightning deals and ensure timely delivery before November 14.
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
