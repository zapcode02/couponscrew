'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Sparkles, RefreshCw, Lock, HelpCircle, Package,
  Monitor, Home, Activity, Trophy, Puzzle, Code, Gamepad2, PawPrint,
  Star, Truck, Zap,
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';

interface CategoryProduct {
  id: string;
  name: string;
  brand: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: string;
  hasFreeDelivery: boolean;
  href: string;
}

const categoryProducts: CategoryProduct[] = [
  {
    id: 'prod-42',
    name: 'Minimalist Anti-Pigmentation Kit, Face Wash, Serum & Sunscreen Combo',
    brand: 'Minimalist',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162150/51VX_QeZjRL._SY450__mhxhvl.jpg',
    originalPrice: 1299,
    dealPrice: 1147,
    discountPercent: 12,
    rating: 4.1,
    reviewCount: '306',
    hasFreeDelivery: true,
    href: '/products/minimalist-anti-pigmentation-kit',
  },
  {
    id: 'prod-43',
    name: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
    brand: 'DEELMO',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/71Qhqwnx4JL._SY741__ljgmwm.jpg',
    originalPrice: 2199,
    dealPrice: 479,
    discountPercent: 78,
    rating: 3.6,
    reviewCount: '2.3K',
    hasFreeDelivery: true,
    href: '/products/deelmo-mens-mandarin-collar-kurta',
  },
];

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

export default function BeautyProductCategory() {
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
              <span className="text-[#5B4FBE] font-semibold">Beauty and Personal Care</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Beauty and Personal Care</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on beauty and personal care products? Browse verified deal pricing on skincare, haircare, makeup, and fragrances — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Sparkles size={18} /></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530525/Beauty_and_Personal_Care_hger7p.webp"
                alt="Beauty and Personal Care"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Beauty and Personal Care Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No beauty and personal care products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New beauty and personal care deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryProducts.map(product => {
                  const savings = product.originalPrice - product.dealPrice;
                  return (
                    <Link
                      key={product.id}
                      href={product.href}
                      className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div className="relative bg-[#F8F8FF] aspect-square overflow-hidden select-none">
                        {product.discountPercent >= 10 && (
                          <div className="absolute top-3 left-3 bg-[#FF5722] border border-orange-600/10 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-xs z-10 uppercase tracking-wide">
                            {product.discountPercent}% OFF
                          </div>
                        )}
                        <NextImage
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          sizes="(max-width: 768px) 45vw, 200px"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1 justify-between text-left">
                        <div className="space-y-1.5">
                          <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                            {product.brand}
                          </span>
                          <h3 className="text-sm font-bold text-[#1A1A2E] leading-snug line-clamp-2 group-hover:text-[#5B4FBE] transition-colors" title={product.name}>
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1 select-none">
                            <Star size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                            <span className="text-xs font-bold text-[#1A1A2E]">{product.rating}</span>
                            <span className="text-gray-400 text-[11px] font-medium">({product.reviewCount})</span>
                          </div>
                        </div>
                        <div className="mt-3.5 space-y-2">
                          <div>
                            <div className="flex items-baseline flex-wrap">
                              <span className="font-black text-lg text-[#1A1A2E]">
                                ₹{product.dealPrice.toLocaleString('en-IN')}
                              </span>
                              <span className="line-through text-xs text-gray-400 ml-2 font-medium">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <div className="text-xs font-black text-[#22C55E] tracking-tight mt-0.5 uppercase leading-none select-none">
                              Save ₹{savings.toLocaleString('en-IN')}
                            </div>
                          </div>
                          {product.hasFreeDelivery && (
                            <div className="bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black uppercase tracking-wide px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 select-none">
                              <Truck size={11} className="stroke-[2.5]" />
                              <span>FREE Delivery</span>
                            </div>
                          )}
                          <div className="mt-2 w-full bg-[#FF5722] group-hover:bg-orange-600 text-white py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 select-none">
                            <Zap size={14} className="fill-white font-medium shrink-0" />
                            <span>Get Deal</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
                  const isActive = cat.name === 'Beauty & Personal Care';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Beauty Deals', desc: 'Get the biggest discounts' },
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
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Beauty & Personal Care Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Beauty & Personal Care Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Beauty and personal care is one of the most deal-active shopping categories online. Whether you&apos;re restocking a daily moisturiser, trying a new shampoo, or picking up a fragrances as a gift, prices in this category vary significantly between retailers — and coupon codes, cashback offers, and seasonal promotions can bring the cost down further still.
          </p>
          <p>
            CouponsCrew tracks verified deals across skincare, haircare, makeup, fragrances, grooming, and personal care tools — so you&apos;re not digging through expired codes or paying more than you need to for products you buy regularly.
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
          Find the Best Beauty & Personal Care Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Beauty and personal care covers a broad range of products. Here is how the main sub-categories break down:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Skincare
            </h3>
            <p>
              Cleansers, moisturisers, serums, sunscreens, toners, eye creams, and face masks. Skincare is one of the most researched sub-categories in beauty — buyers tend to read ingredient lists and reviews carefully before committing. Deals here appear across both mass-market and prestige brands, and the price gap between the two tiers is wide enough that coupon savings are meaningful at either end.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Haircare
            </h3>
            <p>
              Shampoos, conditioners, hair masks, styling products, dry shampoos, and scalp treatments. This is a high-frequency purchase category — most households restock haircare products every few weeks. Subscribe-style discounts and coupon codes both apply regularly across the major brands.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Hair Tools & Styling Appliances
            </h3>
            <p>
              Hair dryers, straighteners, curling irons, and electric brushes. These are higher-value purchases that see the strongest deals during major sale events. Premium tools from brands like Dyson and GHD drop less frequently but more noticeably when deals do appear.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Makeup & Cosmetics
            </h3>
            <p>
              Foundation, concealer, mascara, eyeliner, lipstick, eyeshadow palettes, and setting sprays. Both drugstore and high-end brands are well-represented in online beauty retail. Deals on makeup appear consistently, and gift sets during the holiday season often represent better value than buying individual products.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Fragrances
            </h3>
            <p>
              Perfumes and colognes from designer and mass-market brands. Fragrance is one of the stronger gift categories in beauty, and deals tend to concentrate around gifting seasons — Mother&apos;s Day, Father&apos;s Day, and the holiday window.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Nail Care
            </h3>
            <p>
              Nail polishes, gel kits, nail care tools, and treatments. This sub-category has seen consistent growth in at-home nail products, with gel lamp kits and professional-grade polishes now widely available online at accessible prices.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Men&apos;s Grooming
            </h3>
            <p>
              Razors, shaving cream, aftershave, beard oils, and grooming kits. Men&apos;s grooming has its own clear product set and its own deal rhythm — subscription shaving products in particular are a common format in this segment.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
              Personal Care Tools
            </h3>
            <p>
              Electric toothbrushes, water flossers, facial cleansing devices, and epilators. These are mid-to-high value purchases with lower reorder frequency — deals on tools tend to appear during major sale events and around new product launches.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND BEAUTY & PERSONAL CARE DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Beauty & Personal Care Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Valentine&apos;s Day (January–February)</p>
        <p className="text-sm text-[#4A4A6A]">Valentine&apos;s Day (January–February) brings promotions on fragrances, gift sets, and premium skincare — one of the stronger windows for these specific product types outside the holidays.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Mother&apos;s Day (April–May)</p>
        <p className="text-sm text-[#4A4A6A]">Mother&apos;s Day (April–May) is one of the biggest gifting events in the beauty calendar. Skincare sets, perfumes, and makeup gift collections see active promotions in the weeks leading up to it.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Summer (June–August)</p>
        <p className="text-sm text-[#4A4A6A]">Summer (June–August) drives deals on sun care, self-tanners, and lighter skincare formulations. It also tends to bring mid-year clearance on makeup and haircare as brands update their ranges.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Black Friday & Cyber Monday</p>
        <p className="text-sm text-[#4A4A6A]">Black Friday and Cyber Monday are the strongest discount window in beauty across the year. Prestige skincare brands that rarely discount during the rest of the year often participate during this period. Gift sets and value bundles appear that are not available at other times.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Holiday Season (November–December)</p>
        <p className="text-sm text-[#4A4A6A]">Holiday season (November–December) extends the Black Friday momentum with gift-focused promotions on fragrance, makeup palettes, and skincare sets. Limited-edition holiday packaging tends to appear at full retail — deals are stronger on core product lines during this period.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Year-Round Savings</p>
        <p className="text-sm text-[#4A4A6A]">Unlike electronics, beauty deals don&apos;t concentrate entirely in a few windows. Coupon codes and cashback offers on haircare, skincare, and personal care basics appear consistently through the year, particularly on frequently purchased products.</p>
      </div>
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP BEAUTY & PERSONAL CARE PRODUCTS ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Beauty & Personal Care Products Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Wider brand range than most physical stores.", desc: "Online beauty retail carries a broader selection of brands — including independent and international labels — than most drug stores or department store counters." },
        { title: "Ingredient and review information is easier to access.", desc: "Checking what's in a product before buying is straightforward online. Verified buyer reviews on skincare and haircare products tend to be more useful than in-store advice for understanding real-world performance." },
        { title: "Samples and trial sizes are more common online.", desc: "Many beauty brands sell travel or trial sizes online that aren't stocked in physical retail — a lower-cost way to test a product before committing to a full size." },
        { title: "Subscription options on restockable products.", desc: "Shampoo, conditioner, body wash, and shaving products are natural fits for recurring delivery. Most major online retailers offer a discount for setting up automatic delivery on these items." },
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

{/* ARTICLE BLOCK: WHY USE COUPONSCREW FOR BEAUTY & PERSONAL CARE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Beauty & Personal Care Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Verified codes only.", desc: "Beauty deal codes expire frequently, especially around major sale events when retailers update promotions quickly. CouponsCrew tests codes before listing and marks expiry dates where available." },
        { title: "Coverage across price tiers.", desc: "Beauty deals on CouponsCrew span drugstore brands, mid-range, and prestige — not just one segment of the market." },
        { title: "Cashback and discount codes together.", desc: "Some savings come from a code at checkout. Others from cashback on qualifying purchases. Finding both without switching between platforms saves time on purchases you're already going to make." },
        { title: "Updated around key beauty sale events.", desc: "The category is refreshed more frequently around Valentine's Day, Mother's Day, Black Friday, and the holiday window — when beauty deals move fastest and codes have short active windows." },
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

{/* ARTICLE BLOCK: POPULAR BEAUTY & PERSONAL CARE BRANDS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Brand Directory</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Popular Beauty & Personal Care Brands You Can Save On
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      CouponsCrew carries deals from a wide range of beauty and personal care brands. Some of the most searched names on the platform include:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { name: "CeraVe", desc: "Cleansers, moisturisers, body wash" },
        { name: "Neutrogena", desc: "Skincare, sunscreen, makeup removers" },
        { name: "L&apos;Oréal", desc: "Skincare, haircare, makeup" },
        { name: "Maybelline", desc: "Foundation, mascara, lip products" },
        { name: "NYX Cosmetics", desc: "Makeup, setting sprays, lip products" },
        { name: "The Ordinary", desc: "Serums, acids, skincare treatments" },
        { name: "Olay", desc: "Moisturisers, serums, anti-ageing skincare" },
        { name: "Pantene", desc: "Shampoos, conditioners, hair treatments" },
        { name: "Dove", desc: "Body wash, deodorant, hair care" },
        { name: "Gillette / Venus", desc: "Razors, shaving products, refills" },
        { name: "Philips Sonicare / Oral-B", desc: "Electric toothbrushes, water flossers" },
        { name: "Dyson", desc: "Hair dryers, straighteners, styling tools" },
        { name: "OPI / Essie", desc: "Nail polishes, nail care products" },
        { name: "Bath & Body Works", desc: "Body lotions, shower gels, fragrances" },
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
              q: "What types of beauty and personal care deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, seasonal promotions, gift set deals, and Subscribe & Save-style discounts across skincare, haircare, makeup, fragrances, grooming, nail care, and personal care tools."
            },
            {
              q: "Which beauty sub-category has the most deals available?",
              a: "Haircare and skincare tend to have the most consistently active coupon codes through the year, given how frequently these products are purchased. Fragrances and premium skincare see fewer codes but stronger discounts during key gifting periods like Mother's Day and the holiday season."
            },
            {
              q: "Are prestige beauty brands ever discounted on CouponsCrew?",
              a: "Yes — premium skincare and fragrance brands that rarely discount outside of specific windows do participate during Black Friday, Cyber Monday, and holiday promotions. These windows tend to be short, so checking the category page around those dates is the most reliable approach."
            },
            {
              q: "Is it safe to buy beauty products online from third-party retailers?",
              a: "Buying from authorised retailers — rather than unofficial third-party sellers — is the practical way to ensure products are genuine and covered by the brand's return or replacement policy. CouponsCrew links to authorised retail channels."
            },
            {
              q: "Can I use a beauty coupon code on sale-priced products?",
              a: "Some retailers allow stacking — applying a coupon code on top of an existing promotional price. Others restrict codes to full-price items. The terms vary by retailer and promotion. Always check the conditions before checkout and apply the code to confirm the saving before completing the purchase."
            },
            {
              q: "When is the best time to buy premium skincare or fragrances?",
              a: "Black Friday and the holiday season are the strongest windows for prestige beauty purchases. Mother's Day and Valentine's Day bring focused promotions on fragrances and gift sets. Outside these periods, signing up for a brand's own newsletter often surfaces exclusive codes before they appear on third-party deal platforms."
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
          Start Saving on Beauty & Personal Care Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Beauty and personal care spending adds up quickly — particularly for products bought every few weeks. A working coupon on a skincare restock, a cashback offer on a hair tool, or a gift set deal during the holiday window all represent real savings on purchases you were going to make anyway.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps this category updated with tested codes and current offers across brands and price points. Before your next beauty or personal care purchase, check what is currently available on CouponsCrew first.
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
          Top Beauty Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "Skincare & Serums", tag: "Daily Routine" },
            { brand: "Haircare & Tools", tag: "Shampoos & Dryers" },
            { brand: "Makeup & Cosmetics", tag: "Palettes & Sets" },
            { brand: "Fragrances", tag: "Perfumes & Colognes" },
            { brand: "Men&apos;s Grooming", tag: "Razors & Kits" },
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
              Coupon codes, cashback offers, gift set deals, and seasonal promotions.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Tested deals across all beauty and personal care sub-categories year-round.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Smart Beauty Shopping</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Shop authorised retail channels and check return policies before purchasing luxury skincare or fragrances online.
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
