'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp,Monitor, Armchair, Headphones, Crosshair, Tv, Laptop, ChevronDown, ShieldCheck, Tag, Percent,
  Gamepad2, RefreshCw, Lock, HelpCircle, Sparkles, Package,
  Home, Activity, Trophy, Puzzle, Code, PawPrint,
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';

interface CategoryProduct {
  id: string;
  name: string;
  logo: string;
  logoBg: string;
  logoColor: string;
  discountLabel: string;
  slug: string;
}

const categoryProducts: CategoryProduct[] = [];

const ALL_CATEGORIES = [
  { name: 'Electronics', slug: 'electronics', icon: Monitor },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen', icon: Home },
  { name: 'Health & Household', slug: 'health', icon: Activity },
  { name: 'Beauty & Personal Care', slug: 'beauty', icon: Sparkles },
  { name: 'Sports & Outdoors', slug: 'sports', icon: Trophy },
  { name: 'Toys & Games', slug: 'toys', icon: Puzzle },
  { name: 'Software', slug: 'software', icon: Code },
  { name: 'Video Games', slug: 'video-games', icon: Gamepad2 },
  { name: 'Pet Supplies', slug: 'pet-supplies', icon: PawPrint },
];

export default function VideoGamesProductCategory() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>

      <section className="relative w-full bg-white border-b border-[#E8E8F0] min-h-[320px] py-10 overflow-hidden">
        <span className="absolute top-10 left-[8%] text-[#5B4FBE]/20 text-lg font-black select-none pointer-events-none">◆</span>
        <span className="absolute bottom-10 left-[35%] text-[#FF5722]/15 text-sm font-black select-none pointer-events-none">◆</span>
        <span className="absolute top-5 right-[45%] text-[#22C55E]/15 text-md font-black select-none pointer-events-none">◆</span>
        <span className="absolute bottom-12 right-[8%] text-[#FFD700]/30 text-2xl font-black select-none pointer-events-none">◆</span>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-left">
          <div className="md:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-sm text-[#4A4A6A]">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <Link href="/products" className="hover:text-[#5B4FBE] transition-colors font-medium">Products</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <Link href="/products/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Product Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold">Video Games</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Video Games</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on video games? Browse verified deal pricing on console games, PC games, gaming accessories, and in-game currency — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Gamepad2 size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryProducts.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Products</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryProducts.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deals</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Verified</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFFBEB] p-2.5 rounded-xl text-[#F59E0B] shrink-0"><ShieldCheck size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">100%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Verified</div></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex items-center justify-center relative w-full">
            <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-2xl">
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530525/Video_Games_x2xy9s.webp"
                alt="Video Games"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
                className="object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-4 border-b border-[#E8E8F0]">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Video Games Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No video games products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New video games deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-[1.04] overflow-hidden shadow-2xs"
                        style={{ backgroundColor: product.logoBg }}
                      >
                        <span
                          className={`font-black tracking-tighter ${product.logo.length > 3 ? 'text-sm' : 'text-lg md:text-xl'}`}
                          style={{ color: product.logoColor }}
                        >
                          {product.logo}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight truncate px-0.5 group-hover:text-[#5B4FBE] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="text-xs font-black text-[#FF5722] bg-[#FFF2ED] rounded-lg py-1 px-2 inline-block max-w-full truncate">
                        {product.discountLabel}
                      </div>
                      <div className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all mt-1">
                        <span>View Deal</span>
                        <ChevronRight size={12} className="stroke-[3]" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left">
              <a
              href="https://www.google.com/preferences/source?q=couponscrew.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95"
            >
              <img
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp"
                alt="Google Preferred Source"
                className="h-[70px] w-auto object-contain"
              />
            </a>

            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-[0_2px_12px_rgba(232,232,240,0.3)]">
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center justify-between">
                <span>Categories</span>
                <span className="text-[10px] font-bold bg-[#F8F8FF] text-[#4A4A6A] px-2 py-0.5 rounded-full border border-[#E8E8F0]">Filter</span>
              </h3>
              <div className="space-y-1.5">
                {ALL_CATEGORIES.map(cat => {
                  const isActive = cat.name === 'Video Games';
                  const IconComp = cat.icon;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/products/categories/${cat.slug}`}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group ${
                        isActive
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE]'
                      }`}
                    >
                      <IconComp size={16} className={isActive ? 'text-white' : 'text-[#4A4A6A] group-hover:text-[#5B4FBE]'} />
                      <span className={`text-sm text-left truncate ${isActive ? 'font-bold' : 'font-medium'}`}>
                        {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-auto font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] group-hover:bg-white group-hover:text-[#5B4FBE]'
                      }`}>
                        {isActive ? categoryProducts.length : 0}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Products', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Video Games Deals', desc: 'Get the biggest discounts' },
            { icon: RefreshCw, bg: 'bg-[#FFFBEB]', color: 'text-[#F59E0B]', title: 'Daily Updates', desc: 'New offers added every day' },
            { icon: Lock, bg: 'bg-[#F0FDF4]', color: 'text-[#22C55E]', title: 'Safe & Secure', desc: 'Your data is always protected' },
          ].map(({ icon: Icon, bg, color, title, desc }) => (
            <div key={title} className="text-center p-2 flex flex-col items-center">
              <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center`}><Icon size={26} /></div>
              <h4 className="text-sm font-bold text-[#1A1A2E] mt-4">{title}</h4>
              <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

    {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
    <div className="lg:col-span-7 space-y-10">

      {/* ARTICLE BLOCK 1: HEADER & INTRO */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Video Games Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Video Games Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Video games is a category where knowing how pricing works saves more money than any single coupon code. New releases launch at full retail. Prices drop steadily over the following months. Digital storefronts run sales on back-catalogue titles several times a year. Gaming subscriptions give access to large libraries at a fixed monthly cost. Understanding which of these fits your situation is the first step — finding the right deal code is the second.
          </p>
          <p>
            CouponsCrew tracks verified deals across console games, PC games, gaming hardware, controllers, headsets, gaming chairs, and subscription services — so you are not overpaying for something that was cheaper last week or will be cheaper next month.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 2: SUB-CATEGORIES */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Product Types</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Find the Best Video Games Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Video games as a shopping category covers more ground than the games themselves. Here is how the main sub-categories break down:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-[#5B4FBE]" />
              Console Games
            </h3>
            <p>
              Physical and digital titles for PlayStation, Xbox, and Nintendo platforms. New releases from major publishers launch at full retail price — typically $60 to $70 — and drop steadily over the following six to twelve months. Physical copies are often cheaper than digital equivalents on the same platform, particularly for PlayStation and Xbox titles, since physical copies can be resold or shared.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#5B4FBE]" />
              PC Games & Digital Keys
            </h3>
            <p>
              Games bought through Steam, Epic Games Store, GOG, and other PC platforms, as well as third-party key retailers that sell activation codes. PC gaming has the most active discount ecosystem of any gaming format — Steam sales alone run several times a year and frequently bring titles to 50–75% off. Publisher bundles and charity bundles are also a consistent source of low-cost game collections.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Tv className="w-4 h-4 text-[#5B4FBE]" />
              Gaming Consoles & Hardware
            </h3>
            <p>
              PlayStation, Xbox, Nintendo Switch, and handheld devices. Consoles rarely receive direct discounts outside of major sale events and holiday bundles, but hardware bundles pairing a console with one or two games represent genuine value, particularly at launch or around the holidays.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-[#5B4FBE]" />
              Controllers & Accessories
            </h3>
            <p>
              First-party and third-party controllers, charging docks, controller grips, and arcade sticks. Third-party controllers from brands like PowerA and PDP offer solid build quality at lower price points than first-party options, and deals on these appear more consistently through the year.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#5B4FBE]" />
              Gaming Headsets
            </h3>
            <p>
              Wired and wireless headsets for console and PC gaming. This segment ranges from budget options under $30 to premium wireless headsets above $200. Deals concentrate around Black Friday and major gaming events, though mid-range options see coupon activity fairly regularly.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Armchair className="w-4 h-4 text-[#5B4FBE]" />
              Gaming Chairs & Desks
            </h3>
            <p>
              Ergonomic gaming chairs, racing-style chairs, and gaming desks. Higher-value items in this segment see the strongest discounts during Black Friday. Quality varies significantly at lower price points — reviews from long-term owners are more useful than launch-period impressions.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Gaming Monitors
            </h3>
            <p>
              High-refresh-rate monitors, ultrawide displays, and OLED gaming panels. Monitor pricing moves in a similar pattern to TVs — new panels launch high, then drop steadily. Deals during Black Friday and mid-year sale events are typically the strongest buying windows.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Gaming Subscriptions
            </h3>
            <p>
              PlayStation Plus, Xbox Game Pass, Nintendo Switch Online, and PC subscription services like EA Play and Ubisoft+. Annual subscription plans are consistently cheaper per month than monthly billing, and introductory offers for new subscribers appear regularly. These are among the most deal-friendly products in the entire gaming category.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND VIDEO GAMES DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Video Games Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">January Sales</p>
        <p className="text-sm text-[#4A4A6A]">January sales bring post-holiday discounts on physical game titles and gaming accessories. Retailers clear stock from the Christmas period, and games that were full-price gifts a few weeks earlier appear at reduced prices.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Spring & Summer PC Sales</p>
        <p className="text-sm text-[#4A4A6A]">Spring and summer digital sales are specific to PC gaming. Steam&apos;s Spring Sale and Summer Sale are the two most significant events in PC gaming retail and bring large portions of the catalogue to meaningful discounts. Epic Games Store also runs a consistent free games programme alongside paid sale events.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Back-to-School (July–September)</p>
        <p className="text-sm text-[#4A4A6A]">Back-to-school season (July–September) overlaps with gaming peripheral promotions. Headsets, controllers, and gaming accessories from major brands run deals during this window alongside laptop and electronics promotions.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Major Game Launches</p>
        <p className="text-sm text-[#4A4A6A]">Major game launches trigger deals on related hardware and accessories. A console exclusive launch often brings bundle offers on the console itself. A major franchise title tends to push deals on previous entries in the series.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Black Friday & Cyber Monday</p>
        <p className="text-sm text-[#4A4A6A]">Black Friday and Cyber Monday are the strongest window for video games across all sub-categories. Console bundles, gaming headsets, chairs, monitors, and subscription deals all appear during this period. Physical game deals are strongest here, and gaming subscription annual plans frequently hit their lowest prices of the year.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">End-of-Console-Generation</p>
        <p className="text-sm text-[#4A4A6A]">End-of-console-generation pricing is worth watching. When a new console generation launches, the previous generation&apos;s hardware and software prices drop significantly — a useful window for buyers who do not need the latest hardware.</p>
      </div>
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP VIDEO GAMES PRODUCTS ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Video Games Products Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Digital purchases deliver instantly.", desc: "Game keys and subscription codes bought online activate immediately — no shipping wait, no physical media to manage." },
        { title: "PC game pricing is more competitive online.", desc: "Physical retail has a limited role in PC gaming. Online storefronts and key retailers carry the full catalogue and run frequent sales that have no in-store equivalent." },
        { title: "Subscription services are managed entirely online.", desc: "PlayStation Plus, Xbox Game Pass, and similar services are set up, managed, and cancelled through account dashboards. Comparing what each tier includes and finding introductory pricing is straightforward online." },
        { title: "Trade-in and resale is easier to factor in.", desc: "For physical console games, the resale value of a game after finishing it partially offsets the initial cost. Online marketplaces make it easier to price this out before buying — a factor that tips some purchasing decisions toward physical over digital." },
      ].map((item, idx) => (
        <div key={idx} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
          <div className="w-2 h-2 rounded-full bg-[#8B5CF6] mt-2 shrink-0"></div>
          <div>
            <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
            <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY USE COUPONSCREW FOR VIDEO GAMES */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Video Games Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Verified codes before listing.", desc: "Gaming deals — particularly on subscription services and digital storefronts — expire quickly. CouponsCrew tests codes before listing and marks expiry dates where available." },
        { title: "Subscription renewal codes included.", desc: "New-subscriber pricing on gaming subscriptions is lower than the ongoing rate. CouponsCrew surfaces renewal codes where available — useful for existing subscribers who want to avoid paying the standard renewal price." },
        { title: "Coverage across platforms and product types.", desc: "Video games deals on CouponsCrew cover PlayStation, Xbox, Nintendo, and PC, as well as hardware, accessories, and subscription services — not limited to a single platform or retailer." },
        { title: "Cashback and discount codes together.", desc: "Some savings come from a code at checkout. Others from cashback on qualifying purchases. Finding both in one place reduces the steps before a purchase already decided on." },
      ].map((item, idx) => (
        <div key={idx} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
          <div className="w-2 h-2 rounded-full bg-[#5B4FBE] mt-2 shrink-0"></div>
          <div>
            <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
            <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: POPULAR VIDEO GAMES BRANDS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Brand Directory</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Popular Video Games Brands You Can Save On
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      CouponsCrew carries deals from a wide range of video games brands and retailers. Some of the most searched names on the platform include:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { name: "PlayStation / Sony", desc: "PS5, PS4, DualSense controllers, PlayStation Plus subscriptions" },
        { name: "Xbox / Microsoft", desc: "Xbox Series X/S, controllers, Xbox Game Pass, PC Game Pass" },
        { name: "Nintendo", desc: "Switch, Switch Lite, Switch OLED, Joy-Con, Nintendo Switch Online" },
        { name: "Steam / Valve", desc: "PC game sales, Steam Wallet, Steam Deck" },
        { name: "Epic Games Store", desc: "PC games, free weekly titles, seasonal sales" },
        { name: "EA / EA Play", desc: "EA Sports titles, EA Play subscription" },
        { name: "Ubisoft", desc: "Assassin&apos;s Creed, Far Cry, Rainbow Six, Ubisoft+ subscription" },
        { name: "Activision Blizzard", desc: "Call of Duty, World of Warcraft, Diablo, Overwatch" },
        { name: "2K Games", desc: "NBA 2K, Borderlands, BioShock, Civilization" },
        { name: "SteelSeries", desc: "Gaming headsets, keyboards, mice, mousepads" },
        { name: "Razer", desc: "Headsets, keyboards, mice, controllers, gaming chairs" },
        { name: "HyperX", desc: "Gaming headsets, keyboards, memory" },
        { name: "Secretlab", desc: "Gaming chairs" },
        { name: "ASUS ROG / Corsair", desc: "Gaming monitors, peripherals, PC components" },
      ].map((brand, idx) => (
        <div key={idx} className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
          <p className="text-sm font-bold text-[#1A1A2E]">{brand.name}</p>
          <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{brand.desc}</p>
        </div>
      ))}
    </div>

    <p className="mt-5 text-xs text-[#4A4A6A] italic">
      New brand deals are added as they become available. Use the search bar to check current availability for any brand not listed here.
    </p>
  </div>
</div>

      {/* ARTICLE BLOCK 3 - FAQ SECTION WITH ACCORDIONS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of video games deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, subscription introductory pricing, digital key deals, hardware bundle promotions, and seasonal sale discounts across console games, PC games, gaming hardware, controllers, headsets, chairs, monitors, and gaming subscriptions."
            },
            {
              q: "Is it cheaper to buy games physically or digitally?",
              a: "Physical copies of console games are often cheaper than their digital equivalents, particularly for PlayStation and Xbox titles, because physical copies can be resold, borrowed, or found second-hand. Digital copies are tied to an account, cannot be resold, but deliver instantly and do not require disc management. PC gaming is almost entirely digital, where prices on key retailers and storefronts are consistently lower than physical retail ever offered."
            },
            {
              q: "When do new game releases go on sale?",
              a: "Most major releases drop noticeably in price within three to six months of launch. Games tied to a franchise with a new entry in development tend to drop faster. Waiting for the first major sale event after a game launches is usually the most practical approach for non-time-sensitive titles."
            },
            {
              q: "Are gaming subscription services worth it?",
              a: "For players who go through several games a month, a subscription like Xbox Game Pass or PlayStation Plus gives access to a large rotating library at a fixed monthly cost — typically less than the price of a single new release. For players who buy one or two specific titles a year, a subscription may not justify the ongoing cost. Annual billing versus monthly billing on any subscription carries a built-in discount worth calculating before subscribing."
            },
            {
              q: "Is buying game keys from third-party retailers safe?",
              a: "Keys from authorised third-party retailers — those with a legitimate relationship with the publisher or platform — are generally safe. Keys from unofficial grey-market sellers carry risk: they can be invalid, region-locked, or sourced in ways that result in the key being deactivated. CouponsCrew links to authorised retail channels rather than unofficial key marketplaces."
            },
            {
              q: "Which video games sub-category has the most deals available?",
              a: "PC games through digital storefronts have the most active and frequent discount activity of any gaming sub-category. Gaming subscriptions carry consistent introductory and renewal deals. Console hardware bundles are most active around the holiday window and major exclusive launches."
            },
          ].map((faq, index) => (
            <div key={index} className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 bg-white flex items-center justify-between gap-4 hover:bg-[#F8F8FF] transition-colors"
              >
                <h3 className="text-sm font-extrabold text-[#1A1A2E]">{faq.q}</h3>
                {openFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-[#5B4FBE] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#4A4A6A] shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 pt-1 bg-[#F8F8FF] border-t border-[#E8E8F0]">
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE BLOCK 4 - CTA / FOOTER */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
          <span className="text-xs font-black text-white/60 uppercase tracking-widest">Start Saving</span>
        </div>
        <h2 className="text-2xl font-black text-white leading-tight">
          Start Saving on Video Games Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Video games spending covers a wide range — a $5 indie title, a $70 new release, a $500 console, or a $15 monthly subscription. The savings available through verified deals are meaningful across all of these, and the difference between buying at the right time and buying at the wrong time can be significant on higher-value purchases.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps this category updated with tested codes and current offers across platforms, hardware, and subscription services. Before your next game, console, or accessory purchase, check what is currently available on CouponsCrew first.
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT - SIDEBAR CARDS (30%) */}
    <div className="lg:col-span-3 space-y-5">

      {/* SIDEBAR CARD 1 - Quick Directory */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#5B4FBE]" />
          Top Gaming Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "PC Games & Keys", tag: "Steam & Digital" },
            { brand: "Console Games", tag: "PS5, Xbox, Switch" },
            { brand: "Gaming Subscriptions", tag: "Game Pass & PS Plus" },
            { brand: "Controllers & Gear", tag: "Accessories" },
            { brand: "Headsets & Audio", tag: "Console & PC" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
              <span className="text-xs text-[#1A1A2E] font-bold">{row.brand}</span>
              <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.tag}</span>
            </div>
          ))}
          <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
            <span className="text-xs font-black text-white tracking-wide uppercase">100% Verified Pricing</span>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 2 - Deal Types Summary */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
          <Percent className="w-4 h-4 text-[#22C55E]" />
          How You Save
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Active Codes & Offers
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Coupon codes, digital key deals, subscription offers, and hardware bundles.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Tested deals across all video games sub-categories year-round.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Zero Risk</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Smart Gaming Shopping</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Time major purchases around storefront sales and buy digital keys from authorized sellers to avoid deactivated licenses.
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
