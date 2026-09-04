'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Home, RefreshCw, Lock, HelpCircle, Sparkles, Package,
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

export default function HomeKitchenProductCategory() {
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
              <span className="text-[#5B4FBE] font-semibold">Home and Kitchen</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Home and Kitchen</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on home and kitchen products? Browse verified deal pricing on cookware, appliances, furniture, and home décor — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Home size={18} /></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530524/Home_and_Kitchen_n2tjr5.webp"
                alt="Home and Kitchen"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Home and Kitchen Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No home and kitchen products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New home and kitchen deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
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
                  href="/products/categories/home-and-kitchen"
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group bg-[#5B4FBE] text-white shadow-xs"
                >
                  <Home size={16} className="text-white" />
                  <span className="text-sm text-left truncate font-bold">Home and Kitchen</span>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Home and Kitchen Deals', desc: 'Get the biggest discounts' },
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
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Home & Kitchen Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Home & Kitchen Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Home and kitchen is one of the most consistently shopped categories across the year — not just during the holidays, but any time a pan wears out, an appliance stops working, or you finally decide the storage situation needs fixing. Purchases here range from a $10 dish rack to a $300 stand mixer, which means the savings from a working coupon code can vary just as widely.
          </p>
          <p>
            CouponsCrew tracks verified deals across cookware, small appliances, bedding, bath, storage, cleaning tools, and everything else that falls under the home and kitchen umbrella — so you&apos;re not spending twenty minutes searching for a code that actually works at checkout.
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
          Find the Best Home & Kitchen Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Home and kitchen splits into several distinct product types, each with its own deal pattern:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Cookware & Bakeware
            </h3>
            <p>
              Pots, pans, baking sheets, Dutch ovens, and knife sets. This is a category where brand reputation and material quality matter over time. Deals on cookware sets appear frequently around gifting seasons and major sale events.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Small Kitchen Appliances
            </h3>
            <p>
              Air fryers, coffee makers, blenders, toasters, electric kettles, and rice cookers. This segment sees some of the most active discount codes of any home category, and bundle deals pairing two appliances together are common.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Large Kitchen Appliances
            </h3>
            <p>
              Refrigerators, dishwashers, ovens, and range hoods. These carry higher price tags and lower coupon frequency, but cashback offers and seasonal promotions bring meaningful savings on big purchases.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Bedding & Bath
            </h3>
            <p>
              Sheets, duvets, pillows, towels, and shower accessories. Bedding deals are most common during white sale events and the holiday shopping window. Thread count and material claims vary — checking verified buyer reviews alongside a coupon is a practical approach.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Storage & Organisation
            </h3>
            <p>
              Shelving units, drawer organisers, food containers, and closet systems. This category is consistently price-competitive online, and codes apply frequently across both budget and mid-range options.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Cleaning Tools & Supplies
            </h3>
            <p>
              Vacuum cleaners, mops, microfibre cloths, and cleaning product bundles. Robot vacuums sit here too — a fast-growing segment with active deals across most sale periods.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Home Décor & Furniture
            </h3>
            <p>
              Rugs, lighting, wall décor, side tables, and accent furniture. Pricing in this segment is more variable than in appliances, and sale timing matters more for larger pieces.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND HOME & KITCHEN DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Home & Kitchen Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Home and kitchen has a more even deal distribution through the year than electronics, but certain windows are still stronger than others.
    </p>

    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">January (White Sales)</p>
        <p className="text-sm text-[#4A4A6A]">January runs what the retail industry calls white sales — historically the strongest period for bedding, towels, and bath goods. Prices on these items tend to be lower in January than at almost any other point in the year.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Spring (March–May)</p>
        <p className="text-sm text-[#4A4A6A]">Spring (March–May) brings a wave of home refresh and organisation deals, driven by seasonal demand for storage, cleaning tools, and kitchen upgrades. Retailers respond with promotions that run for several weeks.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">July–September (Back-to-School)</p>
        <p className="text-sm text-[#4A4A6A]">Back-to-school season (July–September) is relevant for home and kitchen beyond just students — this is when small appliance deals, particularly on coffee makers and kitchen basics, run alongside the laptop and tablet promotions.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Black Friday & Cyber Monday</p>
        <p className="text-sm text-[#4A4A6A]">Black Friday and Cyber Monday bring the widest discount window of the year. Large appliances, cookware sets, robot vacuums, and bedding all see price drops here. For big-ticket home purchases, this is the period worth waiting for.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">November–December (Holiday Gift Season)</p>
        <p className="text-sm text-[#4A4A6A]">Holiday gift season (November–December) pushes deals on kitchen appliances and home accessories further, with gift sets and bundles appearing that aren&apos;t available the rest of the year.</p>
      </div>
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP HOME & KITCHEN PRODUCTS ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Home & Kitchen Products Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      Online shopping for home and kitchen products has a few practical advantages over in-store.
    </p>

    <div className="space-y-3">
      {[
        { title: "Product specifications are easier to compare.", desc: "Dimensions, materials, wattage, and capacity are all listed clearly in online product pages — more reliable than reading a box in a store aisle under fluorescent lighting." },
        { title: "Return policies tend to be straightforward.", desc: "Most major online retailers have clear return windows for home and kitchen products, which reduces the risk on higher-value items like appliances." },
        { title: "Bulk and subscribe options save more over time.", desc: "For consumables — cleaning products, coffee pods, filters, storage bags — subscription-style ordering typically brings a lower per-unit price than single purchases, with an additional coupon often applicable on top." },
        { title: "Price tracking is more accessible.", desc: "Seeing what a product typically sells for before a sale helps confirm whether a deal is real. That kind of price history check is easier to do when shopping online." },
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

{/* ARTICLE BLOCK: WHY USE COUPONSCREW FOR HOME & KITCHEN */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Home & Kitchen Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Codes are tested before listing.", desc: "An expired code at checkout wastes time and sometimes loses a deal that was time-sensitive. CouponsCrew verifies codes before they go live." },
        { title: "Coverage across product types and retailers.", desc: "Home and kitchen deals come from multiple brands and retailers — not a single storefront. CouponsCrew aggregates across the category so you're not limited to one retailer's current promotions." },
        { title: "Cashback and discount codes in one place.", desc: "Some savings come from a percentage off at checkout. Others come from cashback on qualifying purchases. Finding both without switching between platforms saves a step." },
        { title: "Updates around key sale periods.", desc: "The home and kitchen category is refreshed more frequently around January white sales, spring home events, and the November–December holiday window — when deals move the fastest." },
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

{/* ARTICLE BLOCK: POPULAR HOME & KITCHEN BRANDS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Brand Directory</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Popular Home & Kitchen Brands You Can Save On
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      CouponsCrew carries deals from a wide range of home and kitchen brands. Some of the most frequently searched names on the platform include:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { name: "Instant Pot", desc: "Multi-cookers, air fryer lids, pressure cookers" },
        { name: "Cuisinart", desc: "Food processors, coffee makers, cookware sets" },
        { name: "KitchenAid", desc: "Stand mixers, blenders, attachments" },
        { name: "Dyson", desc: "Cordless vacuums, air purifiers, fans" },
        { name: "iRobot / Roomba", desc: "Robot vacuums, mops" },
        { name: "Philips", desc: "Air fryers, coffee machines, kitchen appliances" },
        { name: "OXO", desc: "Kitchen tools, storage containers, cleaning products" },
        { name: "Lodge", desc: "Cast iron cookware, skillets, Dutch ovens" },
        { name: "Ninja", desc: "Blenders, air fryers, multi-cookers, grills" },
        { name: "Nespresso / De'Longhi", desc: "Coffee and espresso machines" },
        { name: "Shark", desc: "Vacuums, steam mops, air purifiers" },
        { name: "Rubbermaid", desc: "Food storage, organisation systems" },
        { name: "Calphalon", desc: "Cookware, bakeware, kitchen knives" },
        { name: "Breville", desc: "Espresso machines, toasters, juicers" },
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
              q: "What types of home and kitchen deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, seasonal discounts, bundle deals, and clearance promotions across cookware, small appliances, large appliances, bedding, storage, cleaning tools, and home décor."
            },
            {
              q: "When is the best time to buy kitchen appliances?",
              a: "Small kitchen appliances see the most consistent deals during Black Friday, Cyber Monday, and back-to-school season. Large appliances tend to drop around major sale events and sometimes when new models replace older ones in a retailer's lineup."
            },
            {
              q: "Are home and kitchen coupon codes stackable with sale prices?",
              a: "Some retailers allow a coupon code to apply on top of an existing sale price. Others restrict codes to full-price items. The terms vary by retailer — always check the conditions before checkout and apply the code to confirm the discount before completing the purchase."
            },
            {
              q: "Is it worth buying home appliances online versus in-store?",
              a: "For most home appliances, online buying offers easier price comparison, access to a wider range of models, and clearer return policies. In-store is useful when you need to check physical dimensions in person or want same-day pickup. For large appliances, checking delivery and installation fees online before buying is worth the few extra minutes."
            },
            {
              q: "How do I find deals on a specific home and kitchen product on CouponsCrew?",
              a: "Use the search bar to look up a brand name or product type. The home and kitchen category page also surfaces the most current deals across sub-categories. Checking both the category page and the specific brand's store page covers the most ground before a purchase."
            },
            {
              q: "Does CouponsCrew have deals on cleaning appliances like robot vacuums?",
              a: "Yes — robot vacuums, cordless stick vacuums, and steam mops from brands like iRobot, Dyson, Shark, and Roborock appear regularly in the home and kitchen category, particularly around major sale periods."
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
          Start Saving on Home & Kitchen Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Home and kitchen purchases happen throughout the year, not just during the holiday rush. A working coupon code on a $200 air fryer or a cashback offer on a new bedding set are the kinds of savings that are easy to miss without a reliable place to check first.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps this category updated with tested deals so you&apos;re not relying on codes that stopped working last month. Before your next home or kitchen purchase — whether it&apos;s a replacement pan or a full appliance upgrade — check what&apos;s currently available on CouponsCrew first.
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
          Top Home Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "Cookware & Bakeware", tag: "Pots & Pans" },
            { brand: "Small Appliances", tag: "Air Fryers & Blenders" },
            { brand: "Bedding & Bath", tag: "Sheets & Towels" },
            { brand: "Storage & Org", tag: "Containers & Racks" },
            { brand: "Cleaning & Vacuums", tag: "Robot Vacuums" },
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
              Coupon codes, cashback offers, seasonal discounts, and bundle deals.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Tested deals across all home and kitchen sub-categories year-round.
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
          Check conditions and delivery terms before purchasing large appliances or home essentials online.
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
