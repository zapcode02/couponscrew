'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  List,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Moon,
  ShieldCheck,
  Gem,
  Palette,
  ListChecks,
  Shirt,
  Sparkle,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/karwa-chauth-2026-shopping-guide';
const PAGE_TITLE = 'Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals (29 October)';

const RELATED_POSTS = [
  {
    slug: 'navratri-2026-colours-outfit-deals',
    title: 'Navratri 2026 Colours: Outfit Deals for All Nine Days',
    category: 'Fashion',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791728627/Navratri_2026_Colours_and_Outfit_Deals_k0hl00.webp',
    date: 'Oct 11, 2026',
    readTime: '8 min read',
    excerpt: 'Navratri 2026 colours for all nine days, 11 to 19 October, with outfit ideas, a 4-piece plan to wear all nine colours, and where to shop sale deals in time.',
  },
  {
    slug: 'dussehra-shopping-guide-what-to-buy-where-to-save-2026',
    title: 'Dussehra Shopping Guide 2026: What to Buy & Where to Save',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1792237484/dussehra-shopping-guide-what-to-buy-where-to-save-2026_khbxak.webp',
    date: 'Oct 17, 2026',
    readTime: '8 min read',
    excerpt: 'Dussehra is on October 20 — and the sales are live. Get the full guide on ethnic wear, home decor, pooja essentials, and gifts, with the best deals across Amazon, Myntra, Ajio, and more.',
  },
  {
    slug: 'myntra-big-fashion-festival-2026',
    title: 'Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers',
    category: 'Fashion',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790820841/myntra-big-fashion-festival-2026_gbsc9h.webp',
    date: 'Oct 1, 2026',
    readTime: '8 min read',
    excerpt: 'Myntra Big Fashion Festival (BFF) 2026 opens on 8 October 2026 at midnight, with early access from 7 October for Myntra Insiders and VIP ticket holders.',
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'one-day-one-moon', label: 'One Day. One Moon. A Lot of Prep.' },
  { id: 'colour-question', label: 'The Colour Question — and the One Rule' },
  { id: 'what-to-buy', label: 'What You Actually Need to Buy' },
  { id: 'sarees', label: 'Sarees — Where to Shop' },
  { id: 'makeup', label: 'Makeup — The Evening Look' },
  { id: 'jewellery', label: 'Jewellery — Gold Tones' },
  { id: 'before-you-order', label: 'One Last Thing Before You Order' },
];

export default function KarwaChauth2026ShoppingGuideBlog() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAGE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap select-none">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-semibold truncate">Karwa Chauth 2026 Shopping Guide</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Sparkles size={13} className="text-[#FF5722]" />
                    Festive Guide
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                    <Moon size={12} className="text-amber-600" />
                    29 October 2026
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] leading-tight tracking-tight">
                  Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup &amp; Jewellery Deals (29 October)
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1 border-b border-[#E8E8F0] pb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 24, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>7 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100 group">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792836858/karwa-chauth-2026-shopping-guide_ajy07h.webp"
                  alt="Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Intro Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFAFF] to-[#FFF9F5] rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm space-y-4">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Karwa Chauth 2026 is on <strong className="text-[#5B4FBE]">Thursday, 29 October</strong>. If you haven&apos;t started shopping yet, you have five days — and if you&apos;re ordering a saree online with a custom blouse, that window is tighter than it looks.
                </p>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#E8E8F0] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-[#1A1A2E] text-sm mb-3">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>In This Karwa Chauth Shopping Guide</span>
                </div>
                <ul className="space-y-2 text-xs">
                  {TABLE_OF_CONTENTS.map((item, idx) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex items-center gap-2 text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors py-1">
                        <span className="w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 1: One Day. One Moon. A Lot of Prep. */}
              <section id="one-day-one-moon" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-xl shrink-0">
                    <Moon size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    One Day. One Moon. A Lot of Prep.
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  There&apos;s a reason Karwa Chauth prep starts a week in advance. The fast runs from before sunrise to the moment the moon rises on the evening of 29 October — and in between, there&apos;s mehendi to apply, jewellery to put on, a full bridal-style makeup look to do, and an entire puja setup to arrange. Most of the planning happens in the days before.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The tradition goes back centuries. According to folklore, the festival is named after the <em>karwa</em> — a small clay pot that holds water — and <em>chauth</em>, meaning the fourth day. It falls on the fourth day of Krishna Paksha in the month of Kartik. Women keep a <em>nirjal</em> fast (no food, no water) and break it only after sighting the moon through a sieve and performing the puja ritual.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  This year, moonrise across northern India is expected between 7:45 PM and 9:00 PM IST on 29 October. The exact time shifts city by city — check a Panchang app for your location.
                </p>
              </section>

              {/* SECTION 2: The Colour Question */}
              <section id="colour-question" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-xl shrink-0">
                    <Palette size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    The Colour Question — and the One Rule Everyone Follows
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Ask anyone what to wear on Karwa Chauth, and the answer comes without hesitation: <strong>red</strong>.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Red in Indian tradition is the colour of <em>suhag</em> — of a married woman&apos;s identity. It appears in sindoor, in the chura, in the saree. For Karwa Chauth specifically, red, deep maroon, bridal pink, and orange are the standard palette. Heavier fabrics — Banarasi silk, Kanjivaram, brocade-work lehengas — are worn by those going all out. Lighter georgette or chiffon drapes are a practical choice for women managing the full evening on their feet.
                </p>

                <div className="relative pl-6 py-3 border-l-4 border-[#FF5722] bg-[#FFF9F5] rounded-r-2xl italic text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed">
                  &ldquo;Karwa Chauth ka rang sirf laal nahi hota — woh har woh rang hai jo uss raat roshan lagta hai.&rdquo;
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  But there&apos;s one rule that holds across regions: <strong>avoid white and black</strong>. White carries associations with mourning in many Indian traditions and is considered inauspicious on this day. Black follows the same reasoning. Dull greys and beige tones are usually skipped too. The evening calls for warmth — reds, pinks, oranges, deep teals, or royal blue if you&apos;re stepping away from the traditional palette.
                </p>
              </section>

              {/* SECTION 3: What You Actually Need to Buy */}
              <section id="what-to-buy" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center font-black text-xl shrink-0">
                    <ListChecks size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    What You Actually Need to Buy — The Full List
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  A complete Karwa Chauth prep list is longer than most people expect the first time:
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-[#4A4A6A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Saree or lehenga</strong> — the centrepiece of the look, in a festive colour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Jewellery</strong> — necklace, maang tikka, jhumkas, bangles, and payals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Mehendi</strong> — most women get this applied the evening before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Glass bangles (chura)</strong> — red and gold are traditional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Sindoor and bindi set</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Makeup and skincare</strong> — a full festive-glam look is expected for the evening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Karwa (clay pot) and puja thali</strong> — the actual ritual items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B4FBE] font-bold mt-1">•</span>
                    <span><strong className="text-[#1A1A2E]">Sargi items</strong> — if your mother-in-law sends sargi, it typically includes dry fruits, sweets, a fruit, and a small gift</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 text-sm">
                  <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                    One thing that catches people off guard: the <em>sargi</em>, which is eaten before sunrise, needs to be ready the night before. It&apos;s not something you pick up on the day of.
                  </p>
                </div>
              </section>

              {/* SECTION 4: Sarees */}
              <section id="sarees" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-xl shrink-0">
                    <Shirt size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Sarees — Where to Shop and What to Look For
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Polki Sarees — Start Here</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      If you want a saree that reads festive without needing much else around it, <Link href="/stores/polki-sarees-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Polki Sarees</Link> is worth looking at first. The collection focuses on bridal and festive weaves — think heavily worked silks in deep reds, burgundies, and jewel tones. The kind of saree that carries the whole look on its own. Check the store page for active coupon codes before placing your order.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Myntra — Filters That Actually Work</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra</Link> has one of the largest online saree catalogues in India, and the filters make it usable — you can narrow by fabric (silk, georgette, chiffon), occasion (festive, wedding), colour, and price range. Delivery to most metros takes two to three days. Order by 25–26 October to be safe.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Ajio — Better Prices, Indie Labels</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Ajio</Link> carries a strong ethnic wear section with a mix of house brands and Indie labels. Prices tend to run slightly lower than Myntra for comparable fabric quality. The October festive sales often extend through Karwa Chauth week — worth checking if there&apos;s an active event.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Amazon and Flipkart — For Speed and Scale</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon</Link> works particularly well for silk sarees if you have Prime — same-day or next-day delivery takes the order-anxiety out of it. <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart</Link> is worth checking if the Big Billion Days sale window is still active; the October festive overlap usually brings strong ethnic wear deals.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Lifestyle — When You Want to Try Before You Buy</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/lifestyle-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Lifestyle</Link> is the reliable in-store option. The ethnic wear section carries a steady festive range, and buying in person removes the saree colour-and-fabric uncertainty that plagues online purchases.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 pt-1">
                  All fashion and ethnic wear coupon codes are listed in the <Link href="/stores/categories/fashion" className="font-semibold text-[#5B4FBE] hover:underline">fashion category</Link> and <Link href="/stores/categories/clothing-and-accessories" className="font-semibold text-[#5B4FBE] hover:underline">clothing and accessories</Link> pages.
                </p>
              </section>

              {/* SECTION 5: Makeup */}
              <section id="makeup" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-black text-xl shrink-0">
                    <Sparkle size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Makeup — The Karwa Chauth Evening Look
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Here&apos;s something interesting about the Karwa Chauth makeup tradition: the effort is intentional. The look is deliberately bridal — a full face, defined eyes, strong lips. The reasoning in many families is that the wife is dressing for her husband&apos;s long life, so the occasion calls for the same care as a wedding day.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  In practical terms: you&apos;ll be outdoors at moonrise, possibly for an extended wait, so <strong>long-wear products matter</strong>. Transfer-resistant foundation, waterproof kajal, and a setting spray are not optional if the evening goes long.
                </p>

                <div className="space-y-5">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Nykaa — The Go-To for Beauty in India</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa</Link> is still the widest platform for beauty products in India — drugstore brands, Indian labels, and premium imported lines, all in one place. For Karwa Chauth, focus on long-wear lipsticks in red or berry, high-coverage bases, kajal, and a good setting spray. Nykaa runs cashback and percentage-off events during the October festive period — check the store page for live codes.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#1A1A2E]">Amazon Beauty — For Last-Minute Orders</h3>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon</Link> carries most of the same brands at competitive prices. Curated festive beauty kits from Lakme, MyGlamm, and L&apos;Oréal give bundled value if you&apos;re building a kit from scratch. Prime delivery makes it the practical choice if you&apos;re ordering close to the date.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 pt-1">
                  The <Link href="/stores/categories/beauty" className="font-semibold text-[#5B4FBE] hover:underline">beauty category</Link> page has all active beauty and makeup coupons in one place.
                </p>
              </section>

              {/* SECTION 6: Jewellery */}
              <section id="jewellery" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl shrink-0">
                    <Gem size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Jewellery — Gold Tones and What Actually Works
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Karwa Chauth jewellery follows bridal logic: the more coverage, the better. A complete set covers the maang tikka (or a full passa for heavier looks), a necklace, jhumkas or drop earrings, bangles or a kada, and payals.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Kundan and polki work are the most popular styles for the occasion — they photograph well in evening light, which matters when the moon finally comes out and the phone cameras come out with it. Meenakari pieces in red and green are also a strong choice against a red saree.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Online platforms offer far more design variety than most local jewellery stores at comparable price points. The <Link href="/stores/categories/jewellery" className="font-semibold text-[#5B4FBE] hover:underline">jewellery category</Link> page on CouponsCrew lists active codes from jewellery and accessories sellers. For fashion and imitation jewellery, Amazon and Flipkart have large festive catalogues with delivery across most cities within the week.
                </p>
              </section>

              {/* SECTION 7: One Last Thing Before You Order */}
              <section id="before-you-order" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    One Last Thing Before You Order
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The one detail that catches people out every year: <strong>check delivery estimates against the moonrise date</strong>.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Most major platforms are reliable within their stated timelines, but seller-fulfilled listings on Amazon and Flipkart can run slower than Prime. If a saree listing shows 5–7 days, order today. If you&apos;re getting a blouse stitched separately, add another two to three days for the tailor.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Everything else — mehendi appointments, makeup, puja items — can be sorted closer to the date. The saree and the jewellery need the most lead time, and both are worth getting out of the way this weekend.
                </p>
              </section>

              {/* Closing Callout */}
              <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-[#5B4FBE] rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
                <h3 className="text-xl sm:text-2xl font-black leading-snug">
                  Five days to moonrise. Order the saree first.
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                  Lock in the saree and jewellery now — everything else on the list can be sorted closer to 29 October.
                </p>
                <div className="pt-2">
                  <Link
                    href="/stores/categories/fashion"
                    className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-extrabold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <span>Explore Fashion Deals</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Author Note / E-E-A-T */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] text-xs text-gray-500 leading-relaxed italic">
                <strong>Author note:</strong> This post is written by the CouponsCrew editorial team. All deal references are based on publicly available sale information at the time of writing and are subject to change.
              </div>

              {/* Share Bar */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E8F0] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A2E]">
                  <Share2 size={16} className="text-[#5B4FBE]" />
                  <span>Share this guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E8E8F0] text-xs font-semibold hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                  >
                    {copied ? <Check size={13} className="text-emerald-600" /> : <Link2 size={13} />}
                    <span>{copied ? 'Copied' : 'Copy Link'}</span>
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(PAGE_TITLE)}&url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on X"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Table of Contents Desktop */}
              <div className="hidden lg:block bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm sticky top-24">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E8E8F0] font-extrabold text-[#1A1A2E] text-sm">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="mt-4 space-y-2.5">
                  {TABLE_OF_CONTENTS.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2.5 text-xs text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors py-1"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#F0EEFF] group-hover:bg-[#5B4FBE] group-hover:text-white text-[#5B4FBE] font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
                        {idx + 1}
                      </span>
                      <span className="leading-snug pt-0.5">{item.label}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-[#E8E8F0] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A2E]">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>Verified Karwa Chauth Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    All sale recommendations are manually checked against live store prices across Myntra, Ajio, Nykaa &amp; Polki Sarees.
                  </p>
                </div>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E8E8F0]">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Related Guides</h3>
                  <Link href="/blog" className="text-xs font-bold text-[#5B4FBE] hover:underline">
                    View All
                  </Link>
                </div>

                <div className="space-y-4">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-3 items-start p-2 rounded-2xl hover:bg-[#F8F8FF] transition-all"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E8E8F0]">
                        <NextImage
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#5B4FBE] uppercase">
                          {post.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CouponsCrew Banner Widget */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white shadow-md relative overflow-hidden space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-yellow-300" />
                </div>
                <h3 className="font-black text-lg text-white leading-snug">
                  Save Extra With Verified Coupon Codes
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Stack Karwa Chauth festive prices with verified coupons on Myntra, Ajio, Nykaa, Polki Sarees &amp; more.
                </p>
                <Link
                  href="/stores/categories/fashion"
                  className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2"
                >
                  <span>View Fashion Deals</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </main>

      {/* Read More Section */}
      <section className="py-12 sm:py-16 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest block mb-1">
              EXPLORE MORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]">
              Read More Blogs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Discover more money-saving tips, shopping guides and exclusive deal updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white border border-[#E8E8F0] rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <NextImage
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A1A2E] leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#4A4A6A] line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8F0] flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-gray-400" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-gray-400" />
                        {blog.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-[#5B4FBE] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-bold hover:bg-[#5B4FBE] hover:text-white transition-colors"
            >
              <span>View All Blogs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
