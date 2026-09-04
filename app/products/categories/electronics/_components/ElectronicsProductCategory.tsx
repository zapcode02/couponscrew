'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Monitor, RefreshCw, Lock, HelpCircle, Sparkles, Package,
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

export default function ElectronicsProductCategory() {
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
              <span className="text-[#5B4FBE] font-semibold">Electronics</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Electronics</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on electronics? Browse verified deal pricing on smartphones, laptops, audio devices, and other gadgets — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Monitor size={18} /></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530524/electronics_pwzxr4.webp"
                alt="Electronics"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Electronics Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No electronics products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New electronics deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
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
                <Link
                  href="/products/categories/electronics"
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group bg-[#5B4FBE] text-white shadow-xs"
                >
                  <Monitor size={16} className="text-white" />
                  <span className="text-sm text-left truncate font-bold">Electronics</span>
                  <span className="text-xs px-2 py-0.5 rounded-full ml-auto font-bold bg-white/20 text-white">
                    {categoryProducts.length}
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Products', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Electronics Deals', desc: 'Get the biggest discounts' },
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
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Electronics Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Electronics Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Electronics are one of the biggest spending categories for most households — and also one of the most deal-friendly. Prices shift with new model launches, seasonal sales, and retailer promotions. Whether you&apos;re replacing an old laptop, upgrading your home audio setup, or picking up a new smartphone, the right coupon or deal code can take a meaningful amount off the final price.
          </p>
          <p>
            CouponsCrew tracks verified electronics deals across a wide range of brands and product types, so you spend less time hunting and more time using what you bought.
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
          Find the Best Electronics Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Electronics cover a wide range of products, and deals work differently across sub-categories. Here&apos;s where savings tend to be most active:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Televisions
            </h3>
            <p>
              TV prices fluctuate more than most categories. The gap between a mid-range and a premium panel has narrowed considerably, and deals on last-season models regularly bring good screens within reach of a tighter budget.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Laptops & Computers
            </h3>
            <p>
              From Chromebooks to high-performance machines, laptop deals appear most often around back-to-school season and major sale events. Accessories and peripherals — keyboards, mice, monitors — see coupon activity more consistently through the year.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Smartphones & Tablets
            </h3>
            <p>
              Previous-generation flagships drop in price as new models launch. Mid-range phones have become genuinely capable alternatives to premium devices, and deals on both tiers appear regularly.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Audio — Headphones, Earbuds & Speakers
            </h3>
            <p>
              This is one of the most coupon-active segments in electronics. Noise-cancelling headphones, true wireless earbuds, and Bluetooth speakers from major brands see discount codes and cashback offers on a regular basis.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Cameras & Photography
            </h3>
            <p>
              Mirrorless cameras, action cameras, and photography accessories are deal-sensitive around major sale periods and when new models replace older ones.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Smart Home Devices
            </h3>
            <p>
              Voice assistants, smart displays, robot vacuums, and security cameras are frequently used as ecosystem entry points by brands — which means they&apos;re often sold at reduced prices or bundled with accessories.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#5B4FBE]" />
              Accessories
            </h3>
            <p>
              Cables, chargers, power banks, cases, and storage devices are where coupon codes apply most often. Small savings per item add up quickly when restocking multiple accessories at once.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND ELECTRONICS DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Electronics Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Electronics pricing follows patterns that experienced buyers learn to work with. Knowing when prices are likely to drop is as useful as having the coupon code itself.
    </p>

    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">January & February</p>
        <p className="text-sm text-[#4A4A6A]">January is strong for televisions, as retailers clear inventory after the holidays and ahead of new model announcements. February also brings TV deals tied to major sporting events.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">July – September (Back-to-School)</p>
        <p className="text-sm text-[#4A4A6A]">Back-to-school season (July–September) is the most reliable window for laptop and tablet deals, with student pricing and bundle offers appearing across most major retailers.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Mid-Year Promotions</p>
        <p className="text-sm text-[#4A4A6A]">Mid-year sale events — including Amazon Prime Day and equivalent promotions from other retailers — cover all electronics sub-categories and tend to bring some of the steepest single-item discounts of the year.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">November (Holiday Season)</p>
        <p className="text-sm text-[#4A4A6A]">November runs from Singles&apos; Day (November 11) through Black Friday and into Cyber Monday, which together form the longest sustained discount window in electronics retail. This is when TVs, laptops, audio gear, and smart home devices all see heavy discounting simultaneously.</p>
      </div>
    </div>

    <p>
      Outside these windows, new product launches reliably bring price drops on the previous generation — often on the same day a new model goes on sale.
    </p>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP ELECTRONICS ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Electronics Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      Online electronics shopping has a few practical advantages over in-store buying that go beyond convenience.
    </p>

    <div className="space-y-3">
      {[
        { title: "Price comparison is faster.", desc: "Checking multiple retailers for the same product takes minutes online. In-store, you're limited to one retailer's pricing at a time." },
        { title: "Refurbished and renewed options are more accessible.", desc: "Manufacturer-certified refurbished electronics — laptops, phones, cameras — are easier to find online and typically come with a limited warranty. The savings versus new can be 20–40% on the same model." },
        { title: "Deal stacking is possible online.", desc: "Some retailers allow a coupon code to apply on top of an existing sale price. This combination is specific to online checkout — it doesn't exist in the same way in physical stores." },
        { title: "Model number verification is easier.", desc: "Retailers sometimes sell slightly different configurations of the same product under the same name. Online listings make it easier to check the exact spec before buying." },
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

{/* ARTICLE BLOCK: WHY USE COUPONSCREW */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Electronics Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      There are many places to find electronics deals. Here&apos;s what makes CouponsCrew worth checking before any electronics purchase:
    </p>

    <div className="space-y-3">
      {[
        { title: "Deals are verified before they go live.", desc: "Expired or non-working codes waste time. CouponsCrew tests codes before listing them and marks deals with expiry dates where available." },
        { title: "Coverage spans brands and retailers.", desc: "Rather than focusing on a single store, CouponsCrew aggregates deals across multiple electronics brands and retail partners — so you're not limited to one retailer's offers." },
        { title: "The category is updated regularly.", desc: "Electronics pricing moves fast. Deals that were accurate last week may not be this week. CouponsCrew keeps the electronics category current, particularly around major sale periods." },
        { title: "Cashback and coupon codes sit in one place.", desc: "Some savings come from a code at checkout. Others come from cashback on qualifying purchases. Finding both on the same page saves the extra step of checking separate platforms." },
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

      {/* ARTICLE BLOCK 3: POPULAR BRANDS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Popular Brands</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Popular Electronics Brands You Can Save On
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          CouponsCrew carries deals from a wide range of electronics brands across all sub-categories. Some of the most searched names on the platform include:
        </p>

        <div className="mt-6 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <ul className="space-y-3 pl-1">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Apple</strong> — iPhone, MacBook, iPad, AirPods, Apple Watch</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Samsung</strong> — Galaxy phones, QLED TVs, tablets, earbuds</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Sony</strong> — Mirrorless cameras, noise-cancelling headphones, OLED TVs</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>LG</strong> — OLED and QNED televisions, monitors, home appliances</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Bose</strong> — Over-ear headphones, earbuds, portable speakers</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Dell</strong> — Laptops, monitors, desktops, business machines</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>HP</strong> — Consumer and business laptops, printers, accessories</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Lenovo</strong> — ThinkPad business laptops, Legion gaming machines, tablets</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>ASUS</strong> — ROG gaming laptops, ZenBook ultrabooks, monitors</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>JBL</strong> — Bluetooth speakers, headphones, earbuds</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>GoPro</strong> — Action cameras, accessories, subscriptions</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Amazon</strong> — Echo smart speakers, Fire tablets, Ring security cameras</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>Anker</strong> — Chargers, power banks, cables, audio accessories</p>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
              <p><strong>SteelSeries / Razer</strong> — Gaming peripherals, headsets, keyboards</p>
            </li>
          </ul>

          <div className="mt-5 p-4 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl">
            <p className="text-xs text-[#4A4A6A] leading-relaxed">
              New brand deals are added as they become available. If a brand you&apos;re looking for isn&apos;t listed above, use the search bar to check current availability.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK 4 - FAQ SECTION WITH ACCORDIONS */}
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
              q: "What types of electronics deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, limited-time discounts, bundle deals, and student or member pricing across electronics sub-categories including TVs, laptops, smartphones, audio, cameras, smart home devices, and accessories."
            },
            {
              q: "How often are electronics deals updated?",
              a: "The electronics category is reviewed and updated on a regular basis. Around major sale events — Prime Day, Black Friday, Cyber Monday — updates happen more frequently to keep pace with how quickly deals go live and expire."
            },
            {
              q: "Can I use a coupon code on top of a sale price?",
              a: "Some retailers allow stacking — applying a coupon code to an item already on sale. Others apply the coupon only against the original list price. The terms vary by retailer and by deal. Always check the conditions before checkout."
            },
            {
              q: "Is buying refurbished electronics a good idea?",
              a: "Manufacturer-certified refurbished products go through testing and quality checks before resale and usually come with a limited warranty. For high-value items like laptops, phones, and cameras, certified refurbished is a practical option. For cables and basic accessories, the price difference between new and refurbished is usually small enough that new makes more sense."
            },
            {
              q: "Which electronics sub-category has the most coupons available?",
              a: "Audio accessories, smart home devices, and general accessories tend to have the most active coupon codes at any given time. Laptops and smartphones have fewer codes but larger absolute savings when deals do appear."
            },
            {
              q: "How do I know if an electronics deal is genuinely good?",
              a: "Look at the price history of the product, not just the discount percentage. A deal that shows 40% off a price that was never the regular selling price is not a real saving. Checking how long the product has been available and what it typically sells for gives a clearer picture of whether a current deal is worth acting on."
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

      {/* ARTICLE BLOCK 5 - CTA / FOOTER */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
          <span className="text-xs font-black text-white/60 uppercase tracking-widest">Start Saving</span>
        </div>
        <h2 className="text-2xl font-black text-white leading-tight">
          Start Saving on Electronics Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Electronics purchases add up — and the difference between buying at full price and buying with a verified deal can be significant on larger items. A 15% discount on a $900 laptop is $135 back in your pocket. A cashback offer on a $400 camera is real money.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps the electronics category updated with working codes and current offers so you&apos;re not relying on expired deals or outdated listings. Before your next electronics purchase, check the brand&apos;s page on CouponsCrew alongside this category — store pages often carry codes that apply across a wider range of products than a single deal covers.
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
          Top Electronics Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "Televisions", tag: "Panels & Displays" },
            { brand: "Laptops", tag: "Computers & Gear" },
            { brand: "Smartphones", tag: "Phones & Tablets" },
            { brand: "Audio Gear", tag: "Headphones & Speakers" },
            { brand: "Smart Home", tag: "IoT & Assistants" },
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
              Coupon codes, cashback offers, limited-time discounts, and bundle pricing.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Updated frequently during major sale events like Prime Day and Black Friday.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Smart Shopping</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Check price history and verify coupon conditions before your next electronics purchase to ensure maximum savings.
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
