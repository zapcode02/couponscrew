'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, Compass,ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Trophy, RefreshCw, Lock, HelpCircle, Sparkles, Package,
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

export default function SportsProductCategory() {
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
              <span className="text-[#5B4FBE] font-semibold">Sports and Outdoors</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Sports and Outdoors</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on sports and outdoors gear? Browse verified deal pricing on sportswear, fitness equipment, camping gear, and accessories — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Trophy size={18} /></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530525/Sports_and_Outdoors_nxcwqb.webp"
                alt="Sports and Outdoors"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Sports and Outdoors Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No sports and outdoors products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New sports and outdoors deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
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
                  href="/products/categories/sports"
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group bg-[#5B4FBE] text-white shadow-xs"
                >
                  <Trophy size={16} className="text-white" />
                  <span className="text-sm text-left truncate font-bold">Sports and Outdoors</span>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Sports & Outdoors Deals', desc: 'Get the biggest discounts' },
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
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Sports & Outdoors Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Sports & Outdoors Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Sports and outdoors covers a wide range of purchases — from a $15 resistance band to a $600 tent to a full home gym setup. What these products share is that buyers usually research them carefully before buying, and the price difference between retailers on the same item can be significant. A verified coupon or a cashback offer on a purchase you&apos;ve already decided to make is straightforward savings.
          </p>
          <p>
            CouponsCrew tracks verified deals across home fitness equipment, outdoor and camping gear, cycling, sportswear, team sports, water sports, and accessories — so the right deal is easier to find before you buy.
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
          Find the Best Sports & Outdoors Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          The sports and outdoors category is broad. Here is how the main sub-categories break down:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Home Fitness Equipment
            </h3>
            <p>
              Dumbbells, kettlebells, barbells, weight benches, resistance bands, pull-up bars, yoga mats, foam rollers, and compact cardio machines like rowing machines and stationary bikes. Home fitness has become one of the most consistently shopped segments in this category, and deals on equipment — particularly mid-range items — appear regularly through the year.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Cardio Machines
            </h3>
            <p>
              Treadmills, exercise bikes, ellipticals, and rowing machines. These are higher-value purchases where deals tend to concentrate around New Year, back-to-school season, and Black Friday. Refurbished options from major brands are worth checking at this price point.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Camping & Hiking
            </h3>
            <p>
              Tents, sleeping bags, backpacks, trekking poles, headlamps, camp stoves, and coolers. Camping gear sees its strongest deals in late winter and early spring, just before the season picks up. End-of-season clearance in September also brings meaningful discounts on unsold stock.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Cycling
            </h3>
            <p>
              Road bikes, mountain bikes, hybrid bikes, electric bikes, helmets, locks, lights, and maintenance tools. Bike deals are most active in spring when demand rises. Accessories and components see coupon activity more consistently through the year.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Running & Trail
            </h3>
            <p>
              Running shoes, trail shoes, GPS watches, hydration vests, and running apparel. Running shoes have a natural reorder cycle as they wear out, making this one of the more subscription-friendly sub-categories in sports. Deals on last-season colourways are common when new versions launch.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Sportswear & Footwear
            </h3>
            <p>
              Performance tops, shorts, leggings, sports bras, and training shoes from dedicated athletic brands. End-of-season clearance brings the strongest discounts, and sale sections on brand websites often carry coupon codes on top of already-reduced prices.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Team & Racquet Sports
            </h3>
            <p>
              Football, basketball, tennis, badminton, cricket, and volleyball equipment. Balls, racquets, nets, and protective gear fall here. Deals appear around major sporting seasons and events.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Water Sports
            </h3>
            <p>
              Swimwear, goggles, swim caps, snorkelling gear, paddleboards, and kayaking equipment. Water sports deals concentrate in spring and early summer as the season opens, with clearance pricing appearing in autumn.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#5B4FBE]" />
              Outdoor Accessories
            </h3>
            <p>
              Sunglasses, hats, gloves, hydration bottles, and multi-tools. These are the add-on purchases that accompany most outdoor activities. Coupon codes on accessories apply more frequently than on big-ticket gear.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND SPORTS & OUTDOORS DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Sports & Outdoors Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">New Year (January)</p>
        <p className="text-sm text-[#4A4A6A]">New Year (January) is the strongest window for home fitness equipment. Demand spikes sharply in the first weeks of the year, but so does retailer promotion activity — treadmills, exercise bikes, and home gym bundles see active deals during this period.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Late Winter & Early Spring (February–April)</p>
        <p className="text-sm text-[#4A4A6A]">Late Winter and Early Spring (February–April) is the right window for camping and hiking gear. Buying before peak season rather than during it means better availability and lower prices, particularly on tents and sleeping bags.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Spring (March–May)</p>
        <p className="text-sm text-[#4A4A6A]">Spring (March–May) brings cycling deals as demand picks up, along with promotions on outdoor clothing and footwear as brands clear winter stock.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Back-to-School (July–September)</p>
        <p className="text-sm text-[#4A4A6A]">Back-to-school season (July–September) overlaps with sports season starts for many team sports. This is a solid window for kit, footwear, and sports accessories.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Black Friday & Cyber Monday</p>
        <p className="text-sm text-[#4A4A6A]">Black Friday and Cyber Monday bring the widest discount window in sports and outdoors. Large fitness equipment, premium outdoor gear, and sportswear from major brands all see price drops. For high-value purchases — a treadmill, a quality tent, a GPS watch — this is often the best buying window of the year.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">End-of-Season Clearance</p>
        <p className="text-sm text-[#4A4A6A]">End-of-season clearance runs across spring and autumn as retailers clear seasonal inventory. Water sports gear in autumn and winter gear in spring both tend to surface at discounts not seen at other times.</p>
      </div>
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP SPORTS & OUTDOORS PRODUCTS ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Sports & Outdoors Products Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Wider selection than most specialist stores.", desc: "Online sports retail carries a broader range of sizes, colours, and models than most physical stores — particularly useful for running shoes and sportswear where fit and specific sizing matters." },
        { title: "Easier price comparison on gear.", desc: "A tent or a GPS watch from the same brand can vary by $50–$100 between retailers. Checking multiple sources before buying is faster online." },
        { title: "Refurbished and open-box options are more accessible.", desc: "For larger fitness equipment — treadmills, rowing machines, exercise bikes — certified refurbished units from major brands represent a practical saving and typically come with a limited warranty." },
        { title: "Customer reviews are more detailed.", desc: "For outdoor gear in particular, buyer reviews covering real-world use — weather performance, durability after extended use, fit on longer hikes — are more detailed online than anything available in-store." },
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

{/* ARTICLE BLOCK: WHY USE COUPONSCREW FOR SPORTS & OUTDOORS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Sports & Outdoors Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Verified codes before listing.", desc: "Sports and outdoors deals move quickly around seasonal windows. CouponsCrew tests codes before they go live and marks expiry dates where available, so you're not losing a purchase to an expired code at checkout." },
        { title: "Coverage across brands and retailers.", desc: "Sports deals on CouponsCrew come from multiple brands and retail partners — not a single storefront. That matters in a category where the same product is often available from several retailers at different prices." },
        { title: "Cashback and discount codes in one place.", desc: "Some savings come from a code at checkout. Others from cashback on qualifying purchases. Finding both together reduces the time spent before a purchase you've already decided on." },
        { title: "Seasonal updates.", desc: "The sports and outdoors category is refreshed more frequently around New Year fitness deals, spring outdoor season, and Black Friday — when deals in this category are most time-sensitive." },
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

{/* ARTICLE BLOCK: POPULAR SPORTS & OUTDOORS BRANDS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Brand Directory</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Popular Sports & Outdoors Brands You Can Save On
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      CouponsCrew carries deals from a wide range of sports and outdoors brands. Some of the most searched names on the platform include:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { name: "Nike", desc: "Running shoes, sportswear, training equipment" },
        { name: "Adidas", desc: "Trainers, sportswear, football boots, accessories" },
        { name: "Under Armour", desc: "Performance apparel, footwear, sports accessories" },
        { name: "The North Face", desc: "Hiking jackets, backpacks, camping gear, footwear" },
        { name: "Columbia", desc: "Outdoor clothing, hiking boots, camping accessories" },
        { name: "Garmin", desc: "GPS watches, fitness trackers, cycling computers" },
        { name: "Fitbit / Google", desc: "Fitness trackers, smartwatches" },
        { name: "Peloton", desc: "Exercise bikes, treadmills, fitness subscriptions" },
        { name: "NordicTrack", desc: "Treadmills, rowing machines, exercise bikes" },
        { name: "Bowflex", desc: "Home gym equipment, dumbbells, cardio machines" },
        { name: "Osprey", desc: "Hiking backpacks, daypacks, travel packs" },
        { name: "Coleman", desc: "Camping tents, coolers, camp stoves" },
        { name: "GoPro", desc: "Action cameras, mounts, accessories for outdoor use" },
        { name: "Yeti", desc: "Coolers, drinkware, outdoor accessories" },
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
              q: "What types of sports and outdoors deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, seasonal sales, end-of-season clearance deals, and bundle promotions across home fitness, camping, cycling, running, sportswear, team sports, water sports, and outdoor accessories."
            },
            {
              q: "When is the best time to buy home fitness equipment?",
              a: "January is the strongest window, with retailers running active promotions on treadmills, exercise bikes, and home gym equipment in response to New Year demand. Black Friday and Cyber Monday are the other major window, particularly for higher-value machines."
            },
            {
              q: "Are sports and outdoors coupon codes available on sale-priced items?",
              a: "Some retailers allow a coupon code on top of an existing sale price. Others restrict codes to full-price products. The terms vary by retailer and promotion — checking before checkout and applying the code to confirm the saving is the reliable approach."
            },
            {
              q: "Is buying refurbished fitness equipment a good idea?",
              a: "Manufacturer-certified refurbished treadmills, exercise bikes, and rowing machines go through testing before resale and usually carry a limited warranty. The saving versus new can be 20–35% on the same model. For smaller equipment — dumbbells, resistance bands, yoga mats — the price difference between new and refurbished is usually small enough that new makes more sense."
            },
            {
              q: "Which sports sub-category has the most deals available?",
              a: "Home fitness equipment and sportswear see the most consistent deal activity through the year. Camping and cycling gear have stronger but more seasonal deal windows. Running shoes and accessories carry coupon codes fairly regularly given the frequency with which they're purchased."
            },
            {
              q: "How do I find deals on a specific sports brand on CouponsCrew?",
              a: "Use the search bar to look up a brand name directly. The sports and outdoors category page also shows the most current deals across sub-categories. Checking both the category page and the brand's store page before a purchase covers the most ground."
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
          Start Saving on Sports & Outdoors Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Sports and outdoors purchases range from small add-ons to significant investments — and the savings available through verified deals can make a real difference on both ends of that range. A 20% discount on a GPS watch or a clearance deal on a quality tent is money back on a purchase you were already planning.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps this category updated with tested codes and current offers across brands, price points, and sub-categories. Before your next sports or outdoor gear purchase, check what is currently available on CouponsCrew first.
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
          Top Sports Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "Home Fitness & Gym", tag: "Weights & Benches" },
            { brand: "Cardio Machines", tag: "Treadmills & Bikes" },
            { brand: "Camping & Hiking", tag: "Tents & Sleeping Bags" },
            { brand: "Cycling & Gear", tag: "Bikes & Accessories" },
            { brand: "Sportswear & Shoes", tag: "Apparel & Trainers" },
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
              Coupon codes, cashback offers, seasonal sales, and end-of-season clearance.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Tested deals across all sports and outdoor sub-categories year-round.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Smart Gear Shopping</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Check warranty terms on certified refurbished equipment and verify return policies before buying big-ticket gear online.
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
