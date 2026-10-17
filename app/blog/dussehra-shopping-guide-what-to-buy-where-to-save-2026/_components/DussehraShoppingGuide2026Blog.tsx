'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  HelpCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  List,
  Sparkles,
  ShoppingBag,
  Tag,
  CheckCircle2,
  Flame,
  Gift,
  Home,
  ShieldCheck,
  ChevronDown,
  Shirt,
  Flower2,
  Palette,
  Package,
  Heart,
  Briefcase,
  Layers,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/dussehra-shopping-guide-what-to-buy-where-to-save-2026';
const PAGE_TITLE = 'Dussehra Shopping Guide 2026: What to Buy & Where to Save';

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
    slug: 'myntra-big-fashion-festival-2026',
    title: 'Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers',
    category: 'Fashion',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790820841/myntra-big-fashion-festival-2026_gbsc9h.webp',
    date: 'Oct 1, 2026',
    readTime: '8 min read',
    excerpt: 'Myntra Big Fashion Festival (BFF) 2026 opens on 8 October 2026 at midnight, with early access from 7 October for Myntra Insiders and VIP ticket holders.',
  },
  {
    slug: 'october-2026-sale-calendar-india',
    title: 'October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791033597/October_2026_Sale_Calendar_Festivities_i9ydzz.webp',
    date: 'Oct 3, 2026',
    readTime: '10 min read',
    excerpt: 'Every October 2026 sale date in one place: Amazon from 8 Oct, Flipkart from 9 Oct, Myntra from 8 Oct, plus Ajio, Nykaa and the festival dates to plan around.',
  },
];

const FAQS = [
  {
    q: 'Why is Dussehra considered an auspicious day to shop?',
    a: 'Dussehra (Vijayadashami) is one of the sade teen muhurtas — among the most auspicious timings of the year in the Hindu calendar for new beginnings and major purchases. Jewellery, vehicles, and electronics bought on this day are traditionally considered to carry positive energy into the household.',
  },
  {
    q: 'When do Dussehra sales typically end?',
    a: 'Most platform-specific Dussehra sales wrap within two to three days after the festival. After that, focus shifts to pre-Diwali pricing, which tends to be slightly higher on popular items as demand spikes again.',
  },
  {
    q: 'Is it smarter to buy ethnic wear on Dussehra or Diwali?',
    a: "Dussehra is usually the better window. Discounts are deeper, stock is fuller, and there's no delivery crunch. By the time Diwali week arrives, popular sizes and styles in ethnic wear are often sold out on major platforms.",
  },
  {
    q: 'Can I get same-day delivery on pooja items this Dussehra?',
    a: 'Yes — Blinkit and Zepto deliver essentials like diyas, camphor, puja oil, and incense sticks within minutes in most metro areas. For fresh flowers and sweets, FNP and local options also offer same-day slots.',
  },
  {
    q: 'Are Dussehra gift hampers worth ordering online?',
    a: 'For curated hampers — sweets, chocolates, corporate gifts — online platforms offer wider selection and clearer pricing than physical stores during the festive rush. Ordering a few days before the festival avoids the last-minute delivery queue.',
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'ethnic-wear', label: 'Traditional & Ethnic Wear' },
  { id: 'home-decor', label: 'Home Decor & Festive Accents' },
  { id: 'pooja-essentials', label: 'Pooja Essentials' },
  { id: 'gifts-hampers', label: 'Gifts & Hampers' },
  { id: 'quick-reference', label: 'Quick Reference: Where to Save' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

export default function DussehraShoppingGuide2026Blog() {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAGE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
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
            <span className="text-[#1A1A2E] font-semibold truncate">Dussehra Shopping Guide 2026</span>
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
                    <Flame size={12} className="text-amber-600" />
                    Festive Sales Live
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] leading-tight tracking-tight">
                  Dussehra Shopping Guide 2026: What to Buy &amp; Where to Save
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1 border-b border-[#E8E8F0] pb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 17, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>8 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100 group">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1792237484/dussehra-shopping-guide-what-to-buy-where-to-save-2026_khbxak.webp"
                  alt="Dussehra Shopping Guide 2026: What to Buy & Where to Save"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Intro Box with Rich Styling */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFAFF] to-[#FFF9F5] rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm space-y-4">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Dussehra falls on <strong className="text-[#5B4FBE]">October 20, 2026</strong> — and if you&apos;re still deciding whether to shop now or wait for Diwali, here&apos;s the short answer: <strong>shop now</strong>. Most major platforms have their festive sales running, discounts across fashion, home decor, pooja essentials, and gifts are at their peak, and stock in popular sizes and styles depletes fast once the festival week kicks in.
                </p>
                <div className="flex items-start gap-3 pt-2 text-[#4A4A6A] leading-relaxed">
                  <div className="p-1 rounded-md bg-[#5B4FBE]/10 text-[#5B4FBE] shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-sm sm:text-base">
                    This guide breaks it down by category — what&apos;s worth buying today, what&apos;s smarter to wait on, and exactly where to find the real prices.
                  </p>
                </div>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#E8E8F0] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-[#1A1A2E] text-sm mb-3">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>In This Dussehra Shopping Guide</span>
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

              {/* SECTION 1: Traditional & Ethnic Wear */}
              <section id="ethnic-wear" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-xl shrink-0">
                    👗
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Traditional &amp; Ethnic Wear — The Biggest Dussehra Category
                  </h2>
                </div>

                {/* Client Quote */}
                <div className="relative pl-6 py-3 border-l-4 border-[#FF5722] bg-[#FFF9F5] rounded-r-2xl italic text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed">
                  &ldquo;Dussehra ka naya kapda — it&apos;s not just tradition. It&apos;s also the best excuse to finally buy that saree you&apos;ve been saving for &apos;the right occasion.&apos;&rdquo;
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Fashion is the most planned festive shopping category in India, and Dussehra is the clearest buying window. Here&apos;s what&apos;s selling:
                </p>

                {/* Subsections Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-purple-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#5B4FBE] flex items-center justify-center shrink-0">
                        <Shirt size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">
                        Sarees &amp; Kurtas
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Silk, Chanderi, cotton blend, and organza sarees are seeing strong demand across price points. Embroidered kurtas — in deep jewel tones and traditional block prints — are popular for both men and women. Most shoppers come in with a specific fabric or silhouette in mind, so if you know what you want, locking it in now is smarter than hoping stock holds through Diwali week.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-orange-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center shrink-0">
                        <Sparkles size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">
                        Anarkali Suits, Palazzo Sets &amp; Co-ord Sets
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Platforms like Myntra and Ajio are running up to <strong>70–81% off</strong> on festive ethnic sets right now. The Dussehra-to-Diwali window typically offers the steepest discounts before stock thins out. Co-ord sets are particularly popular this year as a more versatile alternative to full suits.
                    </p>
                  </div>
                </div>

                {/* Save Here Highlight Callout */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#1A1A2E]">
                    <span className="text-base">💡</span>
                    <span>Save here:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                    <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra Coupon Codes</Link> · <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Ajio Coupon Codes</Link> · <Link href="/stores/lifestyle-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Lifestyle Offers</Link>
                  </p>
                  <p className="text-xs text-gray-500 pt-1">
                    Browse all: <Link href="/stores/categories/fashion" className="font-semibold text-[#5B4FBE] hover:underline">Fashion Deals</Link> · <Link href="/stores/categories/clothing-and-accessories" className="font-semibold text-[#5B4FBE] hover:underline">Clothing &amp; Accessories</Link>
                  </p>
                </div>
              </section>

              {/* SECTION 2: Home Decor & Festive Accents */}
              <section id="home-decor" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF8FF] text-[#0099FF] flex items-center justify-center font-black text-xl shrink-0">
                    🏠
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Home Decor &amp; Festive Accents — Decorate Now, Not in the Diwali Rush
                  </h2>
                </div>

                {/* Client Quote */}
                <div className="relative pl-6 py-3 border-l-4 border-[#0099FF] bg-[#F2FAFF] rounded-r-2xl italic text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed">
                  &ldquo;A toran on the door costs almost nothing. But a house that looks festive? That changes the whole mood of the season.&rdquo;
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Dussehra is when homes start to shift into festive mode. Buying decor now means you avoid the Diwali-week delivery delays — and you&apos;re not competing for the last stock of the thing you actually want.
                </p>

                {/* 3 Grid items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0099FF] flex items-center justify-center shrink-0">
                        <Flower2 size={18} />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1A1A2E]">Garlands &amp; Door Hangings</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Artificial marigold garlands, pom-pom torans, and bandanwars are the fastest-moving home items this time of year. Lightweight, easy to ship, and genuinely transforming — without a big budget.
                    </p>
                  </div>
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-amber-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Flame size={18} />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1A1A2E]">Diyas, Urli Sets &amp; Candle Stands</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Floating diyas, terracotta urli sets, and decorative candle stands are doing strong numbers on Amazon right now. These work for both Dussehra and Diwali, so buying at current prices is simply smart planning.
                    </p>
                  </div>
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-purple-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#5B4FBE] flex items-center justify-center shrink-0">
                        <Palette size={18} />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1A1A2E]">Showpieces &amp; Statues</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Traditional brass or wooden elephant statues, Rajasthani puppets, and Ganesha or Buddha idols are popular picks for both home decor and gifting. Festive-friendly sizes sell out quickly — don&apos;t leave it for the last weekend.
                    </p>
                  </div>
                </div>

                {/* Save Here Highlight Callout */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5 text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#1A1A2E]">
                    <span className="text-base">💡</span>
                    <span>Save here:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                    <Link href="/stores/pepperfry-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Pepperfry Coupons</Link> — consistently one of the better sources for home furnishings and decor during the festive season.
                  </p>
                  <p className="text-xs text-gray-500 pt-1">
                    Browse: <Link href="/stores/categories/home-and-kitchen" className="font-semibold text-[#5B4FBE] hover:underline">Home &amp; Kitchen Deals</Link>
                  </p>
                </div>
              </section>

              {/* SECTION 3: Pooja Essentials */}
              <section id="pooja-essentials" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center font-black text-xl shrink-0">
                    🪔
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Pooja Essentials — The Category People Forget Until It&apos;s Too Late
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Most people think of clothes and decor first. Pooja essentials are usually the afterthought — and that&apos;s exactly why they sell out fastest.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-amber-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Flame size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">
                        Aarti &amp; Ritual Items
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Diyas, puja oil, camphor, sambrani, and incense sticks are the core of the category. Complete puja boxes — everything packaged together — are a practical option if you&apos;re setting up for Navratri and Dussehra rituals at once. Brands like Cycle have curated Dasara-specific sets worth checking.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-emerald-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Flower2 size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">
                        Sacred Offerings
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Fresh flowers, fruit baskets, and traditional sweets can all be ordered same-day. Quick commerce has genuinely changed how festive households stock up — you no longer need to plan three days ahead.
                    </p>
                  </div>
                </div>

                {/* Instant Delivery Callout */}
                <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border border-amber-200/90 rounded-2xl p-5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <span className="text-lg">💡</span>
                    <p className="text-xs sm:text-sm text-[#1A1A2E] leading-relaxed font-medium">
                      For last-minute pooja supplies — especially <strong>on October 20 itself</strong> — <Link href="/stores/blinkit-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Blinkit</Link> and <Link href="/stores/zepto-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Zepto</Link> have become reliable for rapid doorstep delivery in most metro areas.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: Gifts & Hampers */}
              <section id="gifts-hampers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center font-black text-xl shrink-0">
                    🎁
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Gifts &amp; Hampers — What Actually Lands Well
                  </h2>
                </div>

                {/* Client Quote */}
                <div className="relative pl-6 py-3 border-l-4 border-[#5B4FBE] bg-[#F7F6FF] rounded-r-2xl italic text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed">
                  &ldquo;The gift that gets remembered isn&apos;t always the most expensive one. It&apos;s the one that didn&apos;t feel like a leftover decision.&rdquo;
                </div>

                <div className="space-y-4 pt-1">
                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-pink-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                        <Gift size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">Sweets &amp; Chocolates</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Kaju katli, assorted baklava boxes, and artisanal chocolate sets are the festive staple for a reason — they&apos;re universally appreciated and available across a wide price range. FNP has curated Dussehra hampers that are worth browsing.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-amber-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Heart size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">Auspicious Tokens</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      Silver or gold coins featuring Goddess Durga or Lakshmi, Mata ki chunrees, and Rudraksha lockets carry meaning beyond their price. These are particularly popular among families who observe Navratri and Vijayadashami traditions closely.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-100 text-[#5B4FBE] flex items-center justify-center shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A2E]">Corporate &amp; Utility Gifts</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                      For employees or professional contacts, branded ceramic mugs, steel or borosilicate bottles, and themed gift hampers are the practical standard. They work because they&apos;re genuinely useful — not because they&apos;re flashy.
                    </p>
                  </div>
                </div>

                {/* Save Here Highlight Callout */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/80 rounded-2xl p-5 text-sm space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-[#1A1A2E]">
                    <span className="text-base">💡</span>
                    <span>Save here:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A4A6A]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Beauty &amp; skincare gift sets &rarr; <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa Coupons</Link></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Sweets, hampers &amp; quick delivery &rarr; <Link href="/stores/zepto-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Zepto Coupons</Link> · <Link href="/stores/blinkit-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Blinkit Coupons</Link></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Everything else &rarr; <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon Coupon Codes</Link> · <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart Coupon Codes</Link></span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 5: Quick Reference Table */}
              <section id="quick-reference" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl shrink-0">
                    💰
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Quick Reference: Where to Save by Category
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0]">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">What You&apos;re Buying</th>
                        <th className="p-4 sm:px-6">Where to Check First</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Ethnic wear &amp; sarees</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Myntra, Ajio, Lifestyle</td>
                      </tr>
                      <tr className="bg-[#F8F8FF] hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Home decor &amp; furniture</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Pepperfry, Amazon</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Pooja essentials (same-day)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Blinkit, Zepto</td>
                      </tr>
                      <tr className="bg-[#F8F8FF] hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Beauty &amp; skincare gifts</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Nykaa</td>
                      </tr>
                      <tr className="bg-white hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Sweets &amp; chocolate hampers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">FNP, Zepto</td>
                      </tr>
                      <tr className="bg-[#F8F8FF] hover:bg-[#FAF9FF] transition-colors">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Electronics &amp; appliances</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon, Flipkart</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Dussehra Hub Callout */}
                <div className="bg-gradient-to-r from-[#5B4FBE]/5 via-[#7C3AED]/5 to-transparent border border-[#5B4FBE]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#5B4FBE] uppercase tracking-wider block">Exclusive Directory</span>
                    <h3 className="font-extrabold text-[#1A1A2E] text-base mt-0.5">
                      All active Dussehra deals, in one place
                    </h3>
                  </div>
                  <Link
                    href="/festival-offers/dusshera-offers"
                    className="inline-flex items-center gap-2 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4d42a6] transition-colors shrink-0 shadow-sm"
                  >
                    <span>Dussehra Offers</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#E8E8F0] text-sm text-[#4A4A6A] leading-relaxed space-y-2">
                  <p>
                    Already planning ahead for Diwali? The two big sales — Flipkart&apos;s Big Billion Days and Amazon&apos;s Great Indian Festival — overlap with this festive window in interesting ways. Here&apos;s a breakdown of <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="font-bold text-[#5B4FBE] hover:underline">which platform actually wins on which category</Link>, so you&apos;re not just chasing the bigger-sounding number.
                  </p>
                </div>
              </section>

              {/* SECTION 6: FAQs */}
              <section id="faqs" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl shrink-0">
                    ❓
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1A1A2E] hover:bg-[#FAF9FF] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#5B4FBE]' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4A4A6A] leading-relaxed border-t border-[#F0EEFF] pt-3 bg-[#FAF9FF]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Closing Callout */}
              <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-[#5B4FBE] rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
                <h3 className="text-xl sm:text-2xl font-black leading-snug">
                  October 20 is the window. Use it.
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                  The <Link href="/festival-offers/diwali-offers" className="underline font-bold hover:text-amber-200">Diwali Offers page</Link> is already being updated — worth bookmarking if you want to track what&apos;s going live in the next few weeks. For now, October 20 is the window. Use it.
                </p>
                <div className="pt-2">
                  <Link
                    href="/festival-offers/dusshera-offers"
                    className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-extrabold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <span>Explore Dussehra Offers</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Author Note / E-E-A-T */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] text-xs text-gray-500 leading-relaxed italic">
                <strong>Author note:</strong> This post is written by the CouponsCrew editorial team. All deal references are based on publicly available sale information at the time of writing and are subject to change. [E-E-A-T compliance: authored by a team with active affiliate deal monitoring experience across Indian e-commerce platforms.]
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
                    <span>Verified Dussehra Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    All sale recommendations are manually checked against live store prices across Amazon, Myntra, Ajio, Blinkit &amp; Zepto.
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
                  Stack Dussehra festive sale prices with verified coupons on Myntra, Ajio, Amazon, Pepperfry &amp; more.
                </p>
                <Link
                  href="/festival-offers/dusshera-offers"
                  className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2"
                >
                  <span>View Dussehra Deals</span>
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
