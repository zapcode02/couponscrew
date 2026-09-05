'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,Fish, Truck, Activity, Smile, Home, Scissors, Box, Bone, Utensils, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  PawPrint, RefreshCw, Lock, HelpCircle, Sparkles, Package,
  Monitor, Trophy, Puzzle, Code, Gamepad2,
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

export default function PetSuppliesProductCategory() {
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
              <span className="text-[#5B4FBE] font-semibold">Pet Supplies</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Pet Supplies</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best deals on pet supplies? Browse verified deal pricing on pet food, grooming & health, toys & accessories, and bedding & housing — all in one place so you never overpay on your next purchase.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><PawPrint size={18} /></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788530524/Pet_Supplies_gd58w2.webp"
                alt="Pet Supplies"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Pet Supplies Products ({categoryProducts.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deal pricing, updated regularly.</p>
              </div>
            </div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16 text-[#4A4A6A] bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                <Package size={36} className="mx-auto mb-3 text-gray-300" />
                <p className="font-bold text-[#1A1A2E]">No pet supplies products yet — check back soon.</p>
                <p className="text-xs text-[#4A4A6A] mt-2 max-w-sm mx-auto">New pet supplies deals are added regularly. Bookmark this page to see them as soon as they go live.</p>
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
                  const isActive = cat.name === 'Pet Supplies';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Pet Supplies Deals', desc: 'Get the biggest discounts' },
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
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Pet Supplies Hub</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Looking for the Best Pet Supplies Deals Before Making Your Next Purchase? You&apos;ve Come to the Right Place.
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Pet ownership comes with a fixed monthly spending floor — food, treats, litter, flea prevention, and grooming basics run out on a schedule regardless of what else is happening. That predictability is actually an advantage when it comes to saving money. Products you buy every four weeks are exactly the kind of purchases where a subscription discount combined with a coupon code, applied consistently, adds up to real savings across a year.
          </p>
          <p>
            CouponsCrew tracks verified deals across pet food, treats, grooming supplies, bedding, toys, health products, and accessories for dogs, cats, birds, fish, and small animals — so you are not paying full price for things you buy every month anyway.
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
          Find the Best Pet Supplies Deals & Discounts on Products
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Pet supplies covers more product types than most pet owners initially account for. Here is how the main sub-categories break down:
        </p>

        <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#5B4FBE]" />
              Pet Food — Dry & Wet
            </h3>
            <p>
              Kibble, wet food pouches, raw food, and grain-free options for dogs and cats across all life stages. Food is the highest-frequency purchase in this category and the one where Subscribe & Save-style discounts make the most consistent difference. Brand loyalty among pet owners is high, which makes finding a reliable coupon on a regular brand more valuable than switching brands for a one-time deal.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Bone className="w-4 h-4 text-[#5B4FBE]" />
              Pet Treats & Chews
            </h3>
            <p>
              Training treats, dental chews, long-lasting chews, and functional treats targeting joint health, coat condition, or digestion. Treats see regular coupon activity and are a common inclusion in multi-buy promotions. Dental chews in particular combine routine spend with a practical health function, making them a consistent purchase for most dog owners.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Box className="w-4 h-4 text-[#5B4FBE]" />
              Cat Litter & Accessories
            </h3>
            <p>
              Clumping litter, silica gel litter, biodegradable options, litter trays, liners, and deodourisers. Litter is one of the most bulk-friendly purchases in pet supplies — larger bags carry a lower per-use cost, and bulk deals appear regularly. Subscription pricing on litter from major online retailers is one of the more straightforward savings available in this category.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-[#5B4FBE]" />
              Grooming Products
            </h3>
            <p>
              Shampoos, conditioners, brushes, combs, nail clippers, ear cleaners, and grooming kits. At-home grooming products have seen steady growth as an alternative to frequent professional grooming visits. Deals on grooming kits and individual tools appear regularly, and starter kits for new pet owners are often priced below the cost of buying individual items separately.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Home className="w-4 h-4 text-[#5B4FBE]" />
              Pet Bedding & Furniture
            </h3>
            <p>
              Dog beds, cat beds, crates, kennels, cat trees, scratching posts, and window perches. These are less frequent purchases than consumables but see active deals during major sale events. Quality and durability vary at lower price points — reviews from long-term owners are worth checking before buying.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Smile className="w-4 h-4 text-[#5B4FBE]" />
              Pet Toys
            </h3>
            <p>
              Chew toys, interactive toys, puzzle feeders, fetch toys, laser pointers, and catnip products. Toys carry consistent coupon activity year-round, and multi-pack deals offer lower per-item pricing. Interactive and puzzle feeders have grown as a sub-segment, driven by demand for products that provide mental stimulation alongside play.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#5B4FBE]" />
              Pet Health & Pharmacy
            </h3>
            <p>
              Flea and tick prevention, worming treatments, joint supplements, probiotics, and first aid products. This sub-category benefits from forward planning — flea and tick products bought ahead of the season rather than reactively are both cheaper and more effective. Subscription pricing on monthly preventative treatments is one of the more practical savings arrangements in pet supplies.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#5B4FBE]" />
              Pet Travel & Carriers
            </h3>
            <p>
              Carriers, travel crates, car seat covers, and collapsible travel bowls. These are lower-frequency purchases that see deals around major sale events. Quality matters more than price at this end of the category — a carrier or crate used for travel and vet visits is worth buying once at a reasonable quality level rather than replacing frequently.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
            <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
              <Fish className="w-4 h-4 text-[#5B4FBE]" />
              Aquarium & Small Animal Supplies
            </h3>
            <p>
              Fish tanks, filters, fish food, small animal bedding, cages, and habitat accessories for rabbits, hamsters, guinea pigs, and birds. This segment is smaller in volume than dog and cat supplies but carries its own deal activity, particularly on starter kits and habitat setups.
            </p>
          </div>
        </div>
      </div>

      {/* ARTICLE BLOCK: BEST TIMES TO FIND PET SUPPLIES DEALS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Timing & Trends</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Best Times to Find Pet Supplies Deals & Discounts
  </h2>
  <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="grid gap-3 my-4">
      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">New Year (January)</p>
        <p className="text-sm text-[#4A4A6A]">New Year (January) brings promotions on pet health products as owners review annual health routines. Flea prevention, supplements, and dental care products see active deals during this period.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Spring (March–May)</p>
        <p className="text-sm text-[#4A4A6A]">Spring (March–May) is the practical window for stocking up on flea and tick prevention before the season begins. Buying preventative treatments before peak flea season typically means better pricing and guaranteed availability.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">National Pet Days</p>
        <p className="text-sm text-[#4A4A6A]">National Pet Days and awareness events throughout the year drive targeted promotions from pet brands — often the strongest deals outside of the main retail sale windows.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Black Friday & Cyber Monday</p>
        <p className="text-sm text-[#4A4A6A]">Black Friday and Cyber Monday are the strongest discount window in pet supplies for bulk purchases. Large-format food bags, multi-pack treats, litter in bulk, and pet health product bundles all see meaningful price drops. For higher-value items — a quality dog bed, a large cat tree, an aquarium setup — this is the right buying window.</p>
      </div>

      <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
        <p className="text-xs font-black text-[#5B4FBE] uppercase tracking-wider mb-1">Year-Round Subscribe & Save</p>
        <p className="text-sm text-[#4A4A6A]">Year-round Subscribe & Save deals are the most reliable savings mechanism in this category. Pet food, treats, litter, and preventative health products bought on a subscription basis consistently save 10–15% off listed prices before any coupon is applied. Combining a subscription with a first-order coupon code is the most straightforward savings approach in pet supplies.</p>
      </div>
    </div>
  </div>
</div>

{/* ARTICLE BLOCK: WHY SHOP PET SUPPLIES ONLINE */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Online Advantages</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Shop Pet Supplies Online?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Subscription pricing is only available online.", desc: "The most consistent savings in pet supplies come from Subscribe & Save-style arrangements on food, litter, and health products. These are specific to online retail and have no in-store equivalent." },
        { title: "Bulk pack availability is wider.", desc: "Large-format pet food bags and multi-pack treats are more readily available online than in physical pet stores, and the per-unit cost on bulk packs is consistently lower." },
        { title: "Easier brand and ingredient comparison.", desc: "Comparing ingredient lists across pet food brands, checking nutritional content across life stages, and reading verified owner reviews is faster online than reading labels in a store aisle." },
        { title: "Auto-delivery removes the risk of running out.", desc: "Setting up automatic delivery on food and litter removes the risk of running short between shopping trips — a practical benefit for households with pets on a fixed feeding routine." },
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

{/* ARTICLE BLOCK: WHY USE COUPONSCREW FOR PET SUPPLIES */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Platform Benefits</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Why Use CouponsCrew for Pet Supplies Products?
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <div className="space-y-3">
      {[
        { title: "Verified codes before listing.", desc: "Pet supplies deal codes — particularly on subscription services and brand-specific promotions — expire regularly. CouponsCrew tests codes before listing and marks expiry dates where available." },
        { title: "First-order and ongoing subscription codes.", desc: "Many pet supply brands offer a higher discount on the first Subscribe & Save order. CouponsCrew surfaces both first-order codes and ongoing codes where available — useful across the full purchasing lifecycle." },
        { title: "Coverage across pet types and product categories.", desc: "Pet supplies deals on CouponsCrew cover dogs, cats, small animals, birds, and fish across food, health, grooming, bedding, and accessories — not limited to a single pet type or product segment." },
        { title: "Cashback and discount codes together.", desc: "Some savings come from a code at checkout. Others from cashback on qualifying purchases. Finding both without switching between platforms saves a step on purchases made every few weeks." },
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

{/* ARTICLE BLOCK: POPULAR PET SUPPLIES BRANDS */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm mt-6">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
    <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Brand Directory</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Popular Pet Supplies Brands You Can Save On
  </h2>
  <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
    <p className="mb-4">
      CouponsCrew carries deals from a wide range of pet supplies brands. Some of the most searched names on the platform include:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { name: "Royal Canin", desc: "Breed-specific and life-stage dry and wet food for dogs and cats" },
        { name: "Hill's Science Diet", desc: "Veterinary and everyday nutrition for dogs and cats" },
        { name: "Purina Pro Plan / Purina ONE", desc: "Dry food, wet food, treats across life stages" },
        { name: "Blue Buffalo", desc: "Grain-free and natural ingredient dog and cat food" },
        { name: "Orijen / Acana", desc: "High-protein, biologically appropriate pet food" },
        { name: "Greenies", desc: "Dental treats and chews for dogs and cats" },
        { name: "Frontline / Seresto", desc: "Flea and tick prevention treatments and collars" },
        { name: "NexGard / Bravecto", desc: "Monthly and long-acting flea and tick chewables" },
        { name: "Furbo / Petcube", desc: "Pet cameras and interactive home monitoring devices" },
        { name: "PetSafe", desc: "Training collars, containment systems, feeders, water fountains" },
        { name: "KONG", desc: "Chew toys, puzzle feeders, interactive play products" },
        { name: "Chewy", desc: "Online pet retail platform with subscription and auto-ship options" },
        { name: "Wahl", desc: "At-home pet grooming clippers and kits" },
        { name: "Aqueon / Fluval", desc: "Aquarium tanks, filters, and accessories" },
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
              q: "What types of pet supplies deals are available on CouponsCrew?",
              a: "CouponsCrew lists coupon codes, cashback offers, Subscribe & Save promotions, first-order discounts, bulk-buy deals, and seasonal promotions across pet food, treats, litter, grooming, bedding, toys, health products, travel accessories, and aquarium supplies."
            },
            {
              q: "When is the best time to buy pet food in bulk?",
              a: "Black Friday and Cyber Monday consistently bring the steepest discounts on large-format pet food bags and multi-pack treats. Outside these windows, setting up a Subscribe & Save arrangement on a regular brand and combining it with a first-order coupon is the most practical approach to consistent savings on food."
            },
            {
              q: "Can I use a coupon code on top of a Subscribe & Save discount?",
              a: "On some platforms, a coupon code applies on top of a subscription discount — bringing the total saving higher than either discount alone. This varies by retailer and promotion. Checking the terms before checkout and applying the code to confirm the saving is the reliable approach."
            },
            {
              q: "Is buying pet food online safe and reliable?",
              a: "Buying from authorised retailers — brand websites, established online pet retailers, and major marketplaces with verified seller programmes — ensures products are genuine, within their use-by date, and covered by the retailer's return policy. CouponsCrew links to authorised retail channels."
            },
            {
              q: "Which pet supplies sub-category has the most deals available?",
              a: "Pet food and treats carry the most consistent coupon and subscription deal activity given how frequently they are purchased. Flea and tick prevention products see strong seasonal deals in spring. Pet bedding and furniture see the most active promotions during Black Friday."
            },
            {
              q: "Does CouponsCrew have deals for cat supplies as well as dog supplies?",
              a: "Yes — deals on CouponsCrew cover cats as well as dogs, including cat food, litter, grooming products, cat trees, scratching posts, and toys. The platform also covers small animals, birds, and fish where brand deals are available."
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
          Start Saving on Pet Supplies Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Pet supplies spending is one of the most predictable budget lines for any household with animals — which makes it one of the most practical categories to save on consistently. A subscription discount on monthly food, a coupon on flea prevention ahead of the season, and a Black Friday deal on a quality bed or cat tree all represent real savings on purchases that were already planned.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            CouponsCrew keeps this category updated with tested codes and current offers across pet types, brands, and product categories. Before your next pet supplies restock — whether it is food, treats, grooming, or health products — check what is currently available on CouponsCrew first.
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
          Top Pet Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Verified deal pricing, updated regularly.</p>
        <div className="space-y-2">
          {[
            { brand: "Pet Food", tag: "Dry & Wet" },
            { brand: "Treats & Chews", tag: "Dental & Training" },
            { brand: "Cat Litter", tag: "Bulk & Subscriptions" },
            { brand: "Pet Health", tag: "Flea & Pharmacy" },
            { brand: "Beds & Furniture", tag: "Crates & Trees" },
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
              Coupon codes, Subscribe & Save discounts, bulk-buy deals, and first-order savings.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Regularly Updated
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Tested deals across all pet supplies sub-categories year-round.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Smart Pet Shopping</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Combine subscription discounts with promo codes and buy from authorized retailers for fresh, genuine pet supplies.
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
