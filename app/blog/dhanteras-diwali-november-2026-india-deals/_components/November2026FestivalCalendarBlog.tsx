'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Gift,
  Lightbulb,
CheckCircle2,
  Clock,
  ArrowRight,
  Share2,
  HeartHandshake,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  List,
  Sparkles,
  ShoppingBag,
  ChevronDown,
  CalendarDays,
  PartyPopper,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/dhanteras-diwali-november-2026-india-deals';
const PAGE_TITLE = 'November 2026 Festival Calendar India: Dhanteras, Diwali, Bhai Dooj & More — Deals & Offers';

const RELATED_POSTS = [
  {
    slug: 'halloween-shopping-india-amazon-myntra-flipkart-under-999',
    title: 'Halloween Shopping in India: Amazon, Myntra & Flipkart Best Picks Under ₹999',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793376959/Halloween_Shopping_in_India_f1otc2.webp',
    date: 'Oct 30, 2026',
    readTime: '7 min read',
    excerpt: 'Halloween kal hai aur deals aaj hain. Shop the best costumes, decor, and party picks under ₹999 on Amazon, Myntra, and Flipkart — before the cart haunts you.',
  },
  {
    slug: 'karwa-chauth-2026-shopping-guide',
    title: 'Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1792836858/karwa-chauth-2026-shopping-guide_ajy07h.webp',
    date: 'Oct 24, 2026',
    readTime: '7 min read',
    excerpt: 'Karwa Chauth is on Thursday, 29 October. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',
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
];

const FAQS = [
  {
    q: 'When is Diwali 2026 in India?',
    a: 'Diwali 2026 is on Sunday, 8 November. The five-day celebration runs from Dhanteras on November 6 to Bhai Dooj on November 11.',
  },
  {
    q: 'When is Dhanteras 2026?',
    a: 'Dhanteras 2026 falls on Friday, 6 November. It is considered the most auspicious day to purchase gold, silver, and electronics.',
  },
  {
    q: 'What are the best things to buy in the Diwali sale 2026?',
    a: 'Electronics, fashion, home décor, beauty products, and gifting sets see the strongest discounts. Both Amazon and Flipkart run dedicated Diwali sales in early November. Check active coupon codes on CouponsCrew before checkout.',
  },
  {
    q: 'Is Black Friday celebrated in India in 2026?',
    a: "Yes — Black Friday on 27 November is now a major sale event in India across Amazon, Flipkart, international fashion brands, and web hosting platforms. Tech and international brands offer some of the year's best prices.",
  },
  {
    q: 'When is Cyber Monday 2026?',
    a: 'Cyber Monday 2026 is on Monday, 30 November. It is the best day to buy web hosting, software subscriptions, and digital tools — often cheaper than Black Friday for these categories.',
  },
  {
    q: 'What festivals fall in November 2026 in India?',
    a: 'November 2026 has Dhanteras (6 Nov), Choti Diwali (7 Nov), Diwali (8 Nov), Govardhan Puja (10 Nov), Bhai Dooj (11 Nov), Chhath Puja (13–16 Nov), Dev Uthani Ekadashi (20 Nov), Tulsi Vivah (21 Nov), Guru Nanak Jayanti (24 Nov), Black Friday (27 Nov), and Cyber Monday (30 Nov).',
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'calendar', label: 'Quick Festival Calendar' },
  { id: 'dhanteras', label: 'Dhanteras — 6 November' },
  { id: 'diwali', label: 'Diwali — 8 November' },
  { id: 'govardhan', label: 'Govardhan Puja — 10 November' },
  { id: 'bhai-dooj', label: 'Bhai Dooj — 11 November' },
  { id: 'chhath', label: 'Chhath Puja — 13–16 November' },
  { id: 'dev-uthani', label: 'Dev Uthani Ekadashi + Tulsi Vivah' },
  { id: 'guru-nanak', label: 'Guru Nanak Jayanti' },
  { id: 'black-friday', label: 'Black Friday — 27 November' },
  { id: 'cyber-monday', label: 'Cyber Monday — 30 November' },
  { id: 'survival-guide', label: 'November Shopping Survival Guide' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

const CALENDAR_ROWS = [
  { date: '6 Nov', festival: 'Dhanteras', categories: 'Gold, Silver, Electronics, Home Appliances' },
  { date: '7 Nov', festival: 'Choti Diwali', categories: 'Decor, Diyas, Firecrackers, Sweets' },
  { date: '8 Nov', festival: 'Diwali 🪔', categories: 'Gifting, Fashion, Electronics, Home' },
  { date: '10 Nov', festival: 'Govardhan Puja', categories: 'Grocery, Sweets, Kitchen' },
  { date: '11 Nov', festival: 'Bhai Dooj', categories: 'Watches, Perfumes, Fashion, Gifts' },
  { date: '13–16 Nov', festival: 'Chhath Puja', categories: 'Ethnic Wear, Grocery, Travel' },
  { date: '20 Nov', festival: 'Dev Uthani Ekadashi', categories: 'Wedding Shopping, Jewellery, Furniture' },
  { date: '21 Nov', festival: 'Tulsi Vivah', categories: 'Wedding Season Essentials' },
  { date: '24 Nov', festival: 'Guru Nanak Jayanti + Kartik Purnima', categories: 'Travel, Religious Gifting' },
  { date: '27 Nov', festival: 'Black Friday 🖤', categories: 'Tech, International Brands, Electronics' },
  { date: '30 Nov', festival: 'Cyber Monday 💻', categories: 'Hosting, Software, Electronics' },
];

const SURVIVAL_TIPS = [
  {
    lead: 'Order fashion by November 4.',
    body: "Delivery slots for Diwali get jammed after November 5. If it's not ordered by November 4, assume it won't arrive in time.",
  },
  {
    lead: 'Stack offers wherever possible.',
    body: 'A store-level coupon + a bank card offer + a cashback wallet is three layers of saving on the same order. Check CouponsCrew before any major purchase.',
    link: { href: '/stores', label: 'CouponsCrew' },
  },
  {
    lead: 'Separate urgent from plannable.',
    body: 'Grocery and sweets = Zepto or Blinkit (10-minute delivery). Electronics and fashion = order at least 3–5 days before the event.',
  },
  {
    lead: "Don't impulse-buy everything on Diwali day.",
    body: 'The best deals on electronics actually appear on Black Friday (November 27), not Diwali. If you can wait on a phone or laptop purchase, Black Friday is worth it.',
  },
  {
    lead: 'Use festival pages.',
    body: 'Our dedicated Diwali Offers, Black Friday Offers, and Cyber Monday Offers pages are updated as new deals go live — bookmark them.',
  },
];

export default function November2026FestivalCalendarBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">November 2026 Festival Calendar</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                    <PartyPopper size={13} className="text-[#FF5722]" />
                    Festive Guide
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                    <CalendarDays size={12} className="text-amber-600" />
                    10 Events, 30 Days
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] leading-tight tracking-tight">
                  November 2026 Festival Calendar India: Dhanteras, Diwali, Bhai Dooj &amp; More — Deals &amp; Offers
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1 border-b border-[#E8E8F0] pb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 31, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>11 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100 group">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1793435015/November_2026_Festival_Deals_Calendar_n87njb.webp"
                  alt="November 2026 Festival Calendar India: Dhanteras, Diwali, Bhai Dooj & More — Deals & Offers"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Intro Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFAFF] to-[#FFF2EA] rounded-3xl p-6 sm:p-8 border border-orange-100/80 shadow-md border-l-4 border-l-[#FF5722] space-y-5 group transition-all duration-300 hover:shadow-lg">
  {/* Ambient Background Glow Effects */}
  <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#5B4FBE]/10 rounded-full blur-2xl pointer-events-none" />

  {/* Catchy Sub-heading / Hook Badge */}
  <div className="flex items-center gap-2 flex-wrap">
    <span className="inline-flex items-center gap-1.5 bg-[#FF5722]/10 border border-[#FF5722]/20 px-3.5 py-1 rounded-full text-lg sm:text-xl font-black text-[#1A1A2E] italic tracking-tight shadow-xs">
      <Sparkles size={16} className="text-[#FF5722]" />
      November doesn&apos;t knock. It arrives.
    </span>
  </div>

  {/* Opening Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    One morning you wake up and your phone has seventeen <b>SALE STARTS NOW</b> notifications, your mom is asking what you want for Diwali, and the office WhatsApp group is already on the gift voucher debate. November in India doesn&apos;t ease you in — it lands.
  </p>

  {/* Punchy Line */}
  <p className="text-base sm:text-lg text-[#1A1A2E] font-black leading-snug tracking-tight border-b border-[#E8E8F0]/80 pb-3">
    And this year, it lands hard.
  </p>

  {/* Dates Timeline Card */}
 <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-orange-100 shadow-sm space-y-4">
  <div className="flex items-center gap-2 text-xs font-extrabold text-[#5B4FBE] uppercase tracking-wider border-b border-[#E8E8F0]/80 pb-3">
    <Calendar size={16} className="text-[#FF5722]" />
    <span>Key November Dates &amp; Festivals</span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      { festival: "Dhanteras", date: "November 6" },
      { festival: "Diwali", date: "November 8" },
      { festival: "Bhai Dooj", date: "November 11" },
      { festival: "Chhath Puja", date: "From November 13" },
      { festival: "Dev Uthani Ekadashi", date: "November 20" },
      { festival: "Guru Nanak Jayanti", date: "November 24" },
      { festival: "Black Friday", date: "November 27" },
      { festival: "Cyber Monday", date: "November 30" }
    ].map((item, idx) => (
      <div key={idx} className="flex items-center justify-between gap-2 bg-[#FAF9FF] hover:bg-[#FFF5F2] p-3 rounded-xl border border-[#E8E8F0] transition-colors shadow-2xs group">
        <span className="text-xs sm:text-sm font-bold text-[#1A1A2E] group-hover:text-[#FF5722] transition-colors">
          {item.festival}
        </span>
        <span className="inline-flex items-center gap-1 bg-white text-[#5B4FBE] border border-[#5B4FBE]/20 px-2.5 py-1 rounded-lg text-xs font-extrabold shadow-2xs shrink-0">
          {item.date}
        </span>
      </div>
    ))}
  </div>
</div>

  {/* Concluding Intro Paragraphs */}
  <div className="space-y-3 text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    <p>
      That is ten major events across thirty days. Which means ten windows to shop smarter, save more, and not feel that specific kind of regret that comes from buying something at full price three days before a sale.
    </p>

    <div className="bg-[#FAF9FF] border border-[#5B4FBE]/15 rounded-2xl p-4 text-[#1A1A2E] font-bold text-sm sm:text-base shadow-xs">
      This is your complete guide. Every festival, what to buy, and where to find the best deals — all in one place.
    </div>
  </div>
</div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#E8E8F0] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-[#1A1A2E] text-sm mb-3">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>In This Festival Calendar</span>
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

              {/* SECTION: Quick Festival Calendar */}
              <section id="calendar" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🗓️
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Quick Festival Calendar — November 2026
    </h2>
  </div>

  {/* Calendar Grid Cards Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {CALENDAR_ROWS.map((row, i) => (
      <div 
        key={row.date + row.festival} 
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] hover:border-[#5B4FBE]/40 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs transition-all duration-300 hover:shadow-md"
      >
        <div className="flex items-center justify-between gap-2 border-b border-[#E8E8F0]/60 pb-2.5">
          <span className="inline-flex items-center gap-1.5 bg-[#5B4FBE]/10 text-[#5B4FBE] border border-[#5B4FBE]/20 px-3 py-1 rounded-lg text-xs font-black tracking-wide shrink-0 shadow-2xs">
            📅 {row.date}
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Nov 2026
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-base sm:text-lg font-black text-[#1A1A2E] tracking-tight">
            {row.festival}
          </p>
          <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
            <strong className="text-[#FF5722] font-extrabold">Best for:</strong> {row.categories}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

              {/* SECTION: Dhanteras */}
              <section id="dhanteras" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🪔
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Dhanteras — 6 November 2026
    </h2>
  </div>

  {/* Subtitle / Catchphrase Quote */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;Buy something metal today. Your future self will thank you.&quot;
    </p>
  </div>

  {/* Main Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Dhanteras is the one day of the year when buying is not just encouraged — it is considered auspicious. Goddess Lakshmi is said to enter the home through the purchase made on this day. Electronics, gold, silver, kitchen appliances, vehicles — everything counts.
  </p>

  {/* Buying Categories Card */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <p className="text-xs sm:text-sm font-extrabold text-[#1A1A2E] tracking-wide uppercase flex items-center gap-2">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>What people buy on Dhanteras:</span>
    </p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      {[
        ['Gold & Silver', 'coins, jewellery, utensils'],
        ['Electronics', 'laptops, phones, air fryers, smart TVs'],
        ['Home Appliances', 'mixer grinders, water purifiers, washing machines'],
        ['Cookware', 'stainless steel, copper vessels'],
      ].map(([bold, rest]) => (
        <li key={bold} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
          <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
          <span><strong className="text-[#1A1A2E] font-bold">{bold}</strong> — {rest}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Deals Callout Paragraphs */}
  <div className="space-y-3">
    <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-[#4A4A6A] font-medium leading-relaxed">
      <strong className="text-[#1A1A2E] font-bold">Deals to watch:</strong> Both <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> and <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart coupon codes</Link> are expected to run Dhanteras-specific offers on electronics and home appliances. Bank cashback offers on HDFC, SBI, and ICICI cards tend to stack well on these days — check both platforms before buying.
    </div>

    <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium pl-1">
      For home décor and appliances: <Link href="/stores/pepperfry-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Pepperfry coupon codes</Link> often run festival deals that bring furniture and home goods into a friendlier price bracket.
    </p>
  </div>

  {/* Pro Tip Box */}
  <div className="relative pl-5 py-3.5 border-l-4 border-amber-500 bg-amber-50/80 rounded-r-2xl text-xs sm:text-sm text-[#1A1A2E] font-medium leading-relaxed space-y-1 shadow-2xs">
    <div className="flex items-center gap-1.5 font-bold text-amber-800">
      <Lightbulb size={16} className="text-amber-600 shrink-0" />
      <span>Pro tip:</span>
    </div>
    <p className="text-[#4A4A6A]">
      The 48 hours before Dhanteras see significant price movement. Add items to cart a week early to track price drops.
    </p>
  </div>
</section>

              {/* SECTION: Diwali */}
              <section id="diwali" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🎆
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Diwali — 8 November 2026
    </h2>
  </div>

  {/* Subtitle Quote */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;The festival of lights. Also, the festival of &apos;bhai yaar ye sale kab tak hai?&apos;&quot;
    </p>
  </div>

  {/* Main Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Diwali is the main event. Five days of celebrations that blur into one long blur of diyas, mithai, firecrackers, and the very specific stress of gifting. The shopping happens across multiple categories simultaneously — which is both the joy and the chaos of it.
  </p>

  {/* Subheading Title */}
  <div className="flex items-center gap-2 pt-2">
    <Sparkles size={16} className="text-[#FF5722]" />
    <p className="text-xs sm:text-sm font-extrabold text-[#1A1A2E] tracking-wide uppercase">What to shop this Diwali:</p>
  </div>

  {/* Category Subsection Cards */}
  <div className="space-y-4">
    {/* Fashion */}
    <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#F9F8FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
      <h3 className="text-sm sm:text-base font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
        Fashion &amp; Ethnic Wear
      </h3>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Kurtas, sarees, sherwanis, lehengas — this is the peak season. <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> and <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">AJIO coupon codes</Link> both typically run dedicated Diwali fashion edits. If you&apos;re buying ethnic wear, do it before November 6 — delivery slots fill up fast.
      </p>
    </div>

    {/* Beauty */}
    <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF5F2] border border-[#E8E8F0] rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#FF5722]/30 transition-colors">
      <h3 className="text-sm sm:text-base font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
        Beauty &amp; Skincare
      </h3>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Diwali gifting sets, festive makeup looks, skincare hampers — <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa coupon codes</Link> are worth checking here. Nykaa runs one of its biggest sales of the year around Diwali.
      </p>
    </div>

    {/* Electronics */}
    <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#F9F8FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
      <h3 className="text-sm sm:text-base font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
        Electronics &amp; Gadgets
      </h3>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Phones, earbuds, smartwatches, laptops — <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> and <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart coupon codes</Link> are the default stops. Compare across both before purchasing.
      </p>
    </div>

    {/* Home Decor */}
    <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#FF5722]/30 transition-colors">
      <h3 className="text-sm sm:text-base font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
        Home Decor
      </h3>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Lights, lanterns, cushion covers, rugs, diyas — <Link href="/stores/pepperfry-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Pepperfry coupon codes</Link> for larger home pieces; Amazon for decorative items.
      </p>
    </div>

    {/* Groceries */}
    <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#F9F8FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
      <h3 className="text-sm sm:text-base font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
        Last-Minute Groceries &amp; Sweets
      </h3>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Running out of something at 9 PM on Diwali night? <Link href="/stores/zepto-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Zepto coupon codes</Link> and <Link href="/stores/blinkit-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Blinkit coupon codes</Link> are your fastest options — delivery in under 15 minutes in most metro areas.
      </p>
    </div>
  </div>

  {/* Diwali Gifting Tip */}
  <div className="relative pl-5 py-3.5 border-l-4 border-[#5B4FBE] bg-[#F7F6FF] rounded-r-2xl text-xs sm:text-sm text-[#1A1A2E] font-medium leading-relaxed space-y-1 shadow-2xs">
    <p>
      <strong>Diwali Gifting Tip:</strong> Instead of a single expensive gift, a curated bundle — skincare set + dry fruits + a small gadget — works better and costs less. <Link href="/stores/jiomart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">JioMart coupon codes</Link> for grocery hampers and <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> for the rest.
    </p>
  </div>

  {/* Hub Callout Banner */}
  <div className="bg-gradient-to-r from-[#5B4FBE]/5 via-orange-500/5 to-transparent border border-[#5B4FBE]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
    <p className="text-xs sm:text-sm text-[#1A1A2E] font-bold">👉 See all Diwali Offers 2026 in one place — updated as new deals go live.</p>
    <Link
      href="/festival-offers/diwali-offers"
      className="inline-flex items-center gap-2 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4d42a6] transition-colors shrink-0 shadow-sm"
    >
      <span>Diwali Offers 2026</span>
      <ArrowRight size={14} />
    </Link>
  </div>
</section>

              {/* SECTION: Govardhan Puja */}
              <section id="govardhan" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🍛
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Govardhan Puja — 10 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;The day after Diwali. The fridge is empty. The kitchen needs restocking.&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Govardhan Puja is a day of family, food, and community. The shopping angle is simple — grocery, sweets, and kitchen.
  </p>

  {/* Visual List Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>Shopping Essentials</span>
    </div>
    <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Grocery:</strong> <Link href="/stores/jiomart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">JioMart coupon codes</Link> for pantry restocking post-Diwali</span>
      </li>
      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Quick delivery:</strong> <Link href="/stores/zepto-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Zepto coupon codes</Link> and <Link href="/stores/blinkit-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Blinkit coupon codes</Link> for same-day essentials</span>
      </li>
      <li className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Kitchen appliances:</strong> If you didn&apos;t buy on Dhanteras, Govardhan Puja is still an auspicious window</span>
      </li>
    </ul>
  </div>
</section>

              {/* SECTION: Bhai Dooj */}
              <section id="bhai-dooj" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      👫
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Bhai Dooj — 11 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;Bhai, yeh gift kab aayega?&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Bhai Dooj is the festival where sisters pray for their brothers and brothers panic-order gifts. The categories are consistent every year — watches, perfumes, fashion accessories, chocolates, and the occasional last-minute wallet or belt combo.
  </p>

  {/* Best Picks Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>Best picks under ₹999:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Watches:</strong> <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> has the widest range across budget brackets</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Perfumes:</strong> <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa coupon codes</Link> or <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> — check both for gift sets</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Fashion:</strong> <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> for trending options; filter by &quot;gifting&quot; to find curated sets</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Eyewear:</strong> A pair of sunglasses or blue-light glasses makes a practical, well-received gift — <Link href="/stores/lenskart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Lenskart coupon codes</Link> often run Bhai Dooj specials</span>
      </li>
    </ul>
  </div>

  {/* Pro Tip Box */}
  <div className="relative pl-5 py-3.5 border-l-4 border-pink-400 bg-pink-50/80 rounded-r-2xl text-xs sm:text-sm text-[#1A1A2E] font-medium leading-relaxed space-y-1 shadow-2xs">
    <div className="flex items-center gap-1.5 font-bold text-pink-800">
      <Gift size={16} className="text-pink-600 shrink-0" />
      <span>The real Bhai Dooj move:</span>
    </div>
    <p className="text-[#4A4A6A]">
      Order three days before. Guaranteed delivery, zero last-minute drama.
    </p>
  </div>
</section>

              {/* SECTION: Chhath Puja */}
             <section id="chhath" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🌅
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Chhath Puja — 13–16 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;Four days. Sun worship. Family gatherings. And a massive push for ethnic wear and travel.&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Chhath Puja is one of the most significant festivals in Bihar, Jharkhand, UP, and Nepal — and its reach has grown across metro cities through migration. Four days of fasting, offering, and community.
  </p>

  {/* Shopping Angle Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>Shopping angle for Chhath:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Ethnic Wear:</strong> Traditional sarees, dhotis, kurtas — <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> and <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">AJIO coupon codes</Link></span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Travel:</strong> Millions travel home for Chhath. <Link href="/stores/red-bus-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">redBus coupon codes</Link> for bus bookings and <Link href="/stores/indigo-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">IndiGo coupon codes</Link> for flights — book well in advance, fares spike after November 10</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors sm:col-span-2">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Grocery &amp; Thali Essentials:</strong> <Link href="/stores/jiomart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">JioMart coupon codes</Link> and <Link href="/stores/zepto-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Zepto coupon codes</Link> for puja samagri and kitchen essentials</span>
      </li>
    </ul>
  </div>
</section>

              {/* SECTION: Dev Uthani Ekadashi + Tulsi Vivah */}
              <section id="dev-uthani" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      💍
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Dev Uthani Ekadashi + Tulsi Vivah — 20–21 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;Wedding season is officially open.&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Dev Uthani Ekadashi marks the end of the Chaturmas period and the official start of the Hindu wedding season. From this date, wedding dates start getting fixed, and with that comes a wave of wedding-related shopping.
  </p>

  {/* Categories Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>Categories that spike from November 20:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Jewellery</strong> — <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> for fashion jewellery; branded jewellery on <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link></span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Furniture &amp; Home Setup</strong> — Couples setting up new homes turn to <Link href="/stores/pepperfry-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Pepperfry coupon codes</Link> first</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Wedding Fashion</strong> — <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">AJIO coupon codes</Link> and <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> for bridal and groom wear</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-rose-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Ethnic Wear for Guests</strong> — <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> across all budgets</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors sm:col-span-2">
        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Footwear &amp; Accessories</strong> — <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link></span>
      </li>
    </ul>
  </div>

  {/* Pro Tip Box */}
  <div className="relative pl-5 py-3.5 border-l-4 border-rose-400 bg-rose-50/80 rounded-r-2xl text-xs sm:text-sm text-[#1A1A2E] font-medium leading-relaxed space-y-1 shadow-2xs">
    <div className="flex items-center gap-1.5 font-bold text-rose-800">
      <HeartHandshake size={16} className="text-rose-600 shrink-0" />
      <span>If you&apos;re planning a November or December wedding:</span>
    </div>
    <p className="text-[#4A4A6A]">
      Start furniture and home décor shopping by November 18. Delivery timelines for large items from <Link href="/stores/pepperfry-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Pepperfry coupon codes</Link> can be 7–14 days.
    </p>
  </div>
</section>

              {/* SECTION: Guru Nanak Jayanti */}
              <section id="guru-nanak" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      ☀️
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Guru Nanak Jayanti + Kartik Purnima — 24 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;A national holiday, a full moon night, and a travel moment.&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Guru Nanak Jayanti is a gazetted national holiday — which means a long weekend for many. Kartik Purnima on the same date makes it an important pilgrimage day for Hindus as well. The shopping angle here is travel and religious gifting.
  </p>

  {/* Shopping Angle Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>Key Focus Areas:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Flights &amp; Trains:</strong> Book early. <Link href="/stores/indigo-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">IndiGo coupon codes</Link> and <Link href="/stores/red-bus-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">redBus coupon codes</Link></span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Religious Gifting:</strong> Dry fruits, prayer books, incense sets — <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> and <Link href="/stores/jiomart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">JioMart coupon codes</Link></span>
      </li>
    </ul>
  </div>
</section>

              {/* SECTION: Black Friday */}
              <section id="black-friday" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🖤
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Black Friday — 27 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;The day international brands remember India exists.&quot;
    </p>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Black Friday started in the US. India adopted it, upgraded it, and now runs it as a full sale week. Tech, international fashion, electronics, streaming subscriptions, web hosting — this is the day for them.
  </p>

  {/* Categories Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>What to buy on Black Friday India:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#1A1A2E] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Electronics &amp; Tech</strong> — Laptops, phones, earbuds, smartwatches: <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> and <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart coupon codes</Link></span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#1A1A2E] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">International Fashion</strong> — Adidas, Nike, Puma: <Link href="/stores/adidas-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Adidas coupon codes</Link>, <Link href="/stores/nike-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nike coupon codes</Link>, <Link href="/stores/puma-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Puma coupon codes</Link></span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#1A1A2E] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Denim &amp; Western Wear</strong> — <Link href="/stores/levis-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Levi&apos;s coupon codes</Link> consistently run Black Friday offers</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-[#1A1A2E] shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Entertainment Subscriptions</strong> — Streaming apps, music platforms</span>
      </li>
    </ul>
  </div>

  {/* Offers Hub Callout */}
  <div className="bg-gradient-to-r from-slate-900/5 via-[#5B4FBE]/5 to-transparent border border-slate-300/50 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
    <p className="text-xs sm:text-sm text-[#1A1A2E] font-bold">👉 All Black Friday deals tracked here.</p>
    <Link
      href="/festival-offers/black-friday-offers"
      className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors shrink-0 shadow-sm"
    >
      <span>Black Friday Offers 2026</span>
      <ArrowRight size={14} />
    </Link>
  </div>

  {/* Black Friday Strategy Box */}
  <div className="relative pl-5 py-3.5 border-l-4 border-slate-400 bg-slate-50/80 rounded-r-2xl text-xs sm:text-sm text-[#1A1A2E] font-medium leading-relaxed space-y-1 shadow-2xs">
    <div className="flex items-center gap-1.5 font-bold text-slate-800">
      <Sparkles size={16} className="text-slate-600 shrink-0" />
      <span>Black Friday strategy:</span>
    </div>
    <p className="text-[#4A4A6A]">
      Shortlist items from November 20. Compare prices daily from November 24. Buy on November 27 — not after, because stock on popular SKUs goes fast.
    </p>
  </div>
</section>

              {/* SECTION: Cyber Monday */}
              <section id="cyber-monday" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      💻
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Cyber Monday — 30 November 2026
    </h2>
  </div>

  {/* Subtitle Quote Box */}
  <div className="relative pl-4 py-2 border-l-4 border-[#FF5722] bg-[#FFF5F2] rounded-r-xl">
    <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
      &quot;Black Friday&apos;s quieter sibling. But quieter doesn&apos;t mean cheaper.&quot;
    </p>
  </div>

  {/* Main Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Cyber Monday is historically the best day to buy software, web hosting, SaaS tools, and online services. The discounts on digital products on this day regularly hit levels that don&apos;t appear at any other point in the year.
  </p>

  {/* Categories Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 sm:p-5 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#5B4FBE]" />
      <span>What to buy on Cyber Monday:</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Web Hosting</strong> — <Link href="/stores/hostinger-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Hostinger coupon codes</Link> is the standout pick. Hostinger&apos;s Cyber Monday deals have historically been some of the deepest discounts they run all year</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Electronics</strong> — Anything that didn&apos;t sell out on Black Friday sees a second round of deals</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Software &amp; Subscriptions</strong> — Design tools, productivity apps, cloud storage</span>
      </li>
      <li className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
        <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <span><strong className="text-[#1A1A2E] font-bold">Online Learning</strong> — Education platforms push major discounts on Cyber Monday</span>
      </li>
    </ul>
  </div>

  {/* Hub Callout Banner */}
  <div className="bg-gradient-to-r from-indigo-500/5 via-[#5B4FBE]/5 to-transparent border border-indigo-200/60 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
    <p className="text-xs sm:text-sm text-[#1A1A2E] font-bold">👉 All live Cyber Monday deals here.</p>
    <Link
      href="/festival-offers/cyber-monday-offers"
      className="inline-flex items-center gap-2 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4d42a6] transition-colors shrink-0 shadow-sm"
    >
      <span>Cyber Monday Offers 2026</span>
      <ArrowRight size={14} />
    </Link>
  </div>
</section>

              {/* SECTION: Survival Guide */}
              <section id="survival-guide" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center font-black text-xl shrink-0">
                    💡
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    November Shopping Survival Guide
                  </h2>
                </div>

                <div className="space-y-4">
                  {SURVIVAL_TIPS.map((tip) => (
                    <div key={tip.lead} className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5">
                      <p className="font-black text-[#1A1A2E] text-sm sm:text-base mb-1.5">{tip.lead}</p>
                      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
                        {tip.body}
                        {tip.link && (
                          <>
                            {' '}
                            <Link href={tip.link.href} className="font-bold text-[#5B4FBE] hover:underline">{tip.link.label}</Link>
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-[#4A4A6A] leading-relaxed">
                  Use festival pages. Our dedicated <Link href="/festival-offers/diwali-offers" className="font-bold text-[#5B4FBE] hover:underline">Diwali Offers</Link>, <Link href="/festival-offers/black-friday-offers" className="font-bold text-[#5B4FBE] hover:underline">Black Friday Offers</Link>, and <Link href="/festival-offers/cyber-monday-offers" className="font-bold text-[#5B4FBE] hover:underline">Cyber Monday Offers</Link> pages are updated as new deals go live — bookmark them.
                </p>
              </section>

              {/* SECTION: FAQs */}
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
                <h3 className="text-xl sm:text-2xl font-black leading-snug italic">
                  November is India&apos;s loudest shopping month.
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                  But loud doesn&apos;t have to mean expensive. With the right coupon codes, the right timing, and this calendar in hand — every festival this month is a chance to celebrate more and spend less.
                </p>
                <div className="pt-2">
                  <Link
                    href="/festival-offers/diwali-offers"
                    className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-extrabold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <span>Explore Diwali Offers</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
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
                <nav className="mt-4 space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
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
                    <Sparkles size={16} className="text-amber-500" />
                    <span>Verified Festival Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    All sale recommendations are manually checked against live store prices across Amazon, Myntra, Flipkart, Nykaa &amp; more.
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
                  Stack every November festival price with verified coupons on Amazon, Myntra, Flipkart, Nykaa &amp; more.
                </p>
                <Link
                  href="/festival-offers/diwali-offers"
                  className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2"
                >
                  <span>View Diwali Deals</span>
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
