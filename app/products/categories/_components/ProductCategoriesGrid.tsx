'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Search,
  Tag,
  LayoutGrid,
  Package,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  Layers,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

interface ProductCategoryEntry {
  slug: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  productCount: number;
  color: string;
  bg: string;
  image: string;
}

const PRODUCT_CATEGORIES: ProductCategoryEntry[] = [];

export default function ProductCategoriesGrid() {
  const [search, setSearch] = useState('');

  const filtered = PRODUCT_CATEGORIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = PRODUCT_CATEGORIES.reduce((s, c) => s + c.productCount, 0);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full bg-[#eee7fb] overflow-hidden border-b border-[#E8E8F0] py-8 md:py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

          {/* Left */}
          <div className="lg:col-span-6 space-y-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#4A4A6A]">
              <Link href="/" className="hover:text-[#5B4FBE] font-medium transition-colors">Home</Link>
              <ChevronRight size={13} className="text-gray-400" />
              <Link href="/products" className="hover:text-[#5B4FBE] font-medium transition-colors">Products</Link>
              <ChevronRight size={13} className="text-gray-400" />
              <span className="text-[#5B4FBE] font-semibold">Product Categories</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A2E] tracking-tight leading-tight">
              Product Categories
            </h1>

            <p className="text-[#4A4A6A] text-sm md:text-base leading-relaxed max-w-xl">
              Browse discounted products by category — verified deal pricing across every section, updated regularly.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a product category..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-2xl text-sm focus:outline-none text-[#1A1A2E] font-medium placeholder:text-gray-400 transition-colors shadow-xs"
              />
              <button aria-label="Search product categories" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5B4FBE] hover:bg-[#4a3fad] text-white p-1.5 rounded-xl transition-colors">
                <Search size={14} />
              </button>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#F0EEFF] p-2 rounded-xl text-[#5B4FBE] shrink-0">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">{PRODUCT_CATEGORIES.length}+</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Categories</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#FFF2ED] p-2 rounded-xl text-[#FF5722] shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">{totalProducts}+</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Products</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#EAFDF3] p-2 rounded-xl text-[#22C55E] shrink-0">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">100%</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Verified Deals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center">
            <div className="relative w-full aspect-[4/3]">
              <NextImage
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788506632/all-categories_gyvk7u_hho4iu.png"
                alt="Browse all product categories on CouponScrew"
                fill
                sizes="(max-width: 1024px) 0px, 640px"
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── CATEGORIES GRID ──────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#1A1A2E]">All Product Categories</h2>
            <p className="text-sm text-[#4A4A6A] mt-1">{filtered.length} {filtered.length === 1 ? 'category' : 'categories'} available</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#4A4A6A]">
              <Search size={36} className="mx-auto mb-3 text-gray-300" />
              <p className="font-bold text-[#1A1A2E]">
                {search ? <>No categories found for &quot;{search}&quot;</> : 'No product categories yet — check back soon.'}
              </p>
              {search && (
                <button onClick={() => setSearch('')} className="mt-4 text-xs text-[#5B4FBE] font-bold underline">Clear search</button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.slug}
                    href={`/products/categories/${cat.slug}`}
                    className="group bg-white rounded-3xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:border-[#5B4FBE] transition-all duration-300 flex flex-col"
                  >
                    {/* Blue image / placeholder banner */}
                    <div className="relative h-64 bg-[#1a56db] flex items-center justify-center overflow-hidden">
                      {cat.image ? (
                        <NextImage
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 640px) 90vw, 500px"
                          className="object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Icon size={64} className="text-white/30" />
                      )}

                      {/* Product count badge */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                        {cat.productCount} {cat.productCount === 1 ? 'PRODUCT' : 'PRODUCTS'}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div>
                        <h2 className="font-extrabold text-[#1A1A2E] text-lg group-hover:text-[#5B4FBE] transition-colors leading-tight">
                          {cat.name}
                        </h2>
                        <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">{cat.description}</p>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-extrabold text-[#5B4FBE] group-hover:gap-2 transition-all mt-auto pt-2 border-t border-[#E8E8F0]">
                        <span>View All Deals</span>
                        <ChevronRight size={15} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

          <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

        {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
        <div className="lg:col-span-7 space-y-10">

          {/* INTRO BLOCK */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Department Overview</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Browse What You Actually Need
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Not everyone shops the same way. Some people open Amazon knowing exactly what they want. Others browse until something clicks. This page exists for both types — a single place to jump straight into whichever department matters to you right now, with context on what each one covers and when deals tend to run.
              </p>
              <p>
                The ten categories below are the ones where Amazon&apos;s selection runs deepest and where shoppers consistently find room to save. Whether you&apos;re replacing a laptop, restocking your kitchen, or finally picking up that fitness gear you&apos;ve been putting off, there&apos;s a starting point here for you.
              </p>
            </div>
          </div>

          {/* CATEGORY BLOCK 1: ELECTRONICS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Electronics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Electronics
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Few categories move as fast as electronics. Prices shift by the day, new models replace old ones mid-season, and what looked like a good deal last week might look even better — or worse — today.
              </p>
              <p>
                Amazon&apos;s electronics section covers everything from budget earbuds under twenty dollars to professional-grade cameras and 4K televisions. Brands like Sony, Samsung, Apple, Bose, and Anker hold permanent spots in the listings, alongside a steady rotation of lesser-known manufacturers offering solid specs at lower prices.
              </p>
              <p>
                The best time to buy tends to be around major sale events — Prime Day in July, Black Friday, and Cyber Monday consistently bring the steepest discounts on big-ticket items. Outside those windows, refurbished and renewed listings often undercut new prices by a wide margin, with Amazon&apos;s own quality guarantee attached.
              </p>
              <div className="pt-3">
                <a 
                  href="#electronics" 
                  className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
                >
                  Browse Electronics Deals &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* COMPUTERS CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
    <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Computers
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Laptops, desktops, monitors, keyboards, mice, external drives, webcams — computers as a category covers the whole stack, not just the device itself.
    </p>
    <p>
      If you&apos;re shopping for a laptop, the range runs from basic Chromebooks suitable for light browsing and schoolwork up through high-performance machines built for video editing or gaming. The sweet spot for most buyers sits in the mid-range — enough power for everyday work without the premium attached to the top tier.
    </p>
    <p>
      Accessories are where the category gets interesting for repeat shoppers. A good mechanical keyboard or an ultrawide monitor can genuinely change how a workspace feels, and Amazon&apos;s selection here rivals any specialist retailer. Coupons and limited-time deals on peripherals tend to pop up more frequently than on laptops, so it&apos;s worth checking the category page even when you&apos;re not in the market for a full machine.
    </p>
    <div className="pt-3">
      <a 
        href="#computers" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Computer Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* HOME AND KITCHEN CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
    <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Home and Kitchen
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      This is one of those categories where you can always find something useful, regardless of budget. A silicone spatula for eight dollars or a stand mixer for two hundred — the range is genuinely that wide.
    </p>
    <p>
      Home and Kitchen on Amazon breaks down into cookware, small appliances, storage and organisation, bedding and bath, cleaning tools, and a handful of sub-niches that don&apos;t fit neatly anywhere else. Brands like Instant Pot, Cuisinart, OXO, and Lodge carry strong reputations here, though the private-label and white-label options have closed the quality gap on a lot of basic items.
    </p>
    <p>
      Deal activity in this category tends to spike around the holidays and again in the spring when people are thinking about refreshing their spaces. Outside those peaks, lightning deals on small appliances run fairly often — a good reason to check the category page on a regular basis rather than only when you have something specific in mind.
    </p>
    <div className="pt-3">
      <a 
        href="#home-and-kitchen" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Home and Kitchen Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* HEALTH AND HOUSEHOLD CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#10B981] rounded-full block"></span>
    <span className="text-xs font-black text-[#10B981] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Health and Household
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Health and household covers the everyday essentials that disappear faster than you expect — vitamins, supplements, over-the-counter medications, cleaning supplies, paper goods, and personal care staples that don&apos;t quite fit the beauty category.
    </p>
    <p>
      Subscribe &amp; Save makes this one of the more practical categories on Amazon. For products you buy on a fixed schedule — protein powder, laundry detergent, allergy medication — locking in a subscription typically knocks ten to fifteen percent off the listed price without any extra effort. Combine that with a coupon clipped directly on the product page and the savings add up faster than most people realise.
    </p>
    <p>
      Brands like Lysol, Purell, Nature Made, and Seventh Generation sit alongside Amazon&apos;s own Solimo line, which has quietly become a reliable option for household basics at notably lower prices.
    </p>
    <div className="pt-3">
      <a 
        href="#health-and-household" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Health and Household Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* BEAUTY AND PERSONAL CARE CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#EC4899] rounded-full block"></span>
    <span className="text-xs font-black text-[#EC4899] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Beauty and Personal Care
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Skincare, haircare, makeup, fragrances, grooming tools — Amazon&apos;s beauty section has grown into one of the more competitive destinations for these products, largely because pricing here tends to beat what you&apos;d find at a drug store or department counter.
    </p>
    <p>
      The category includes both mass-market staples and prestige brands. CeraVe, Neutrogena, and L&apos;Oréal sit alongside La Mer and Tatcha. Electric toothbrushes from Oral-B and Philips Sonicare run alongside manual options. Hair dryers range from basic to salon-grade Dyson.
    </p>
    <p>
      One thing worth knowing: coupon clipping is unusually common in this category. A lot of beauty products carry a small &quot;clip coupon&quot; button on their listing page — easy to overlook, but worth looking for before checkout. Five percent here and ten percent there adds up across a full cart.
    </p>
    <div className="pt-3">
      <a 
        href="#beauty-and-personal-care" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Beauty and Personal Care Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* SPORTS AND OUTDOORS CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#6366F1] rounded-full block"></span>
    <span className="text-xs font-black text-[#6366F1] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Sports and Outdoors
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Whether the goal is losing weight, building muscle, hiking more, or picking up a new sport, the Sports and Outdoors category on Amazon covers the gear side of it without requiring a trip to a specialist shop.
    </p>
    <p>
      Home fitness equipment has become a significant chunk of this category — dumbbells, resistance bands, yoga mats, pull-up bars, and compact cardio machines. Camping and hiking gear runs from basic tent stakes to full shelter systems. Cycling accessories, swimming gear, and sports-specific equipment round out a category that&apos;s genuinely broad.
    </p>
    <p>
      Pricing here varies a lot by brand and product type. For high-involvement purchases like a quality tent or a set of kettlebells, it&apos;s worth cross-referencing with the brand&apos;s own site before buying. For everyday fitness gear and accessories, Amazon&apos;s prices are usually hard to beat.
    </p>
    <div className="pt-3">
      <a 
        href="#sports-and-outdoors" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Sports and Outdoors Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* TOYS AND GAMES CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
    <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Toys and Games
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      This category earns its place in any list aimed at value-conscious shoppers. Toys and Games is one of the most deal-heavy departments on Amazon year-round, with deep discounts on popular items appearing well outside the holiday rush.
    </p>
    <p>
      LEGO sets, board games, outdoor toys, educational kits, action figures, puzzles, and art supplies — the breadth here means you can shop for a five-year-old and a fifteen-year-old in the same session. Amazon&apos;s own Basics line produces some surprisingly well-reviewed toys at low price points, which is useful when you&apos;re shopping for a birthday gift with a tight budget.
    </p>
    <p>
      Holiday shopping in this category has its own rhythm. The best prices on popular toys often land weeks before Christmas rather than on Black Friday itself, since supply tightens as the holiday gets closer. Keeping an eye on the category page through October and November tends to reward patience.
    </p>
    <div className="pt-3">
      <a 
        href="#toys-and-games" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Toys and Games Deals &rarr;
      </a>
    </div>
  </div>
</div>

{/* SOFTWARE CATEGORY BLOCK */}
<div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
  <div className="flex items-center gap-2 mb-4">
    <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
    <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">Category</span>
  </div>
  <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
    Software
  </h2>
  <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
    <p>
      Software is one of those categories that looks smaller than it is. Antivirus packages, productivity suites, design tools, accounting software, educational programs, and gaming titles all live here, sold as physical discs, digital download codes, or subscription activations.
    </p>
    <p>
      The pricing dynamics in this category are worth understanding. Software titles frequently drop in price with little notice, and Amazon&apos;s digital codes for PC games and productivity software often undercut both the publisher&apos;s own site and competing digital storefronts. If you&apos;re looking at a Windows or Office license, or a security suite subscription, it&apos;s worth checking the Amazon listing alongside other options.
    </p>
    <div className="pt-3">
      <a 
        href="#software" 
        className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
      >
        Browse Software Deals &rarr;
      </a>
    </div>
  </div>
</div>

          {/* CATEGORY BLOCK 2: VIDEO GAMES */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Video Games</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Video Games
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Console games, PC titles, controllers, headsets, gaming chairs, and accessories — Video Games as a category on Amazon stretches well beyond the games themselves.
              </p>
              <p>
                New releases hit full retail price at launch, but Amazon runs pre-order discounts and launch-day promotions on select titles, which can bring the initial cost down. Older titles drop steadily over their first year — games that launched at sixty dollars frequently sit at thirty or under within twelve months. Physical copies are often cheaper than their digital equivalents, particularly for PlayStation and Xbox titles.
              </p>
              <p>
                Hardware bundles — a console packaged with one or two games — tend to appear around the holidays and occasionally around major game launches. These represent some of the better value propositions in the category.
              </p>
              <div className="pt-3">
                <a 
                  href="#video-games" 
                  className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
                >
                  Browse Video Games Deals &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* CATEGORY BLOCK 3: PET SUPPLIES */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Pet Supplies</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Pet Supplies
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                The pet supplies category on Amazon has become one of the more well-stocked departments for a straightforward reason — pet owners buy on a schedule. Food, treats, litter, and flea prevention are monthly purchases for most households, and Amazon&apos;s Subscribe & Save option on these items is genuinely useful.
              </p>
              <p>
                Beyond consumables, the category covers beds, crates, carriers, grooming tools, toys, training equipment, and health products for dogs, cats, birds, fish, and small animals. Brands like Hill&apos;s Science Diet, Purina, Blue Buffalo, and Greenies hold strong positions, while Amazon&apos;s Wag brand provides a lower-cost alternative for food and treats.
              </p>
              <p>
                Autoship on pet food through Subscribe & Save typically saves between five and fifteen percent off listed prices, and combining that with periodic coupons on the product page brings the per-unit cost down further.
              </p>
              <div className="pt-3">
                <a 
                  href="#pet-supplies" 
                  className="inline-flex items-center gap-2 text-xs font-black text-[#5B4FBE] bg-[#F0EEFF] px-4 py-2.5 rounded-xl hover:bg-[#5B4FBE] hover:text-white transition-colors"
                >
                  Browse Pet Supplies Deals &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { 
                  q: "Which categories have the best deals on Amazon?", 
                  a: "Electronics, Home and Kitchen, and Toys and Games tend to see the most aggressive discounting, particularly during Prime Day and the holiday season. Health and Household is consistently good for Subscribe & Save savings throughout the year." 
                },
                { 
                  q: "When do Amazon prices drop the most?", 
                  a: "Prime Day (typically July), Black Friday, and Cyber Monday are the peak discount windows across most categories. Lightning deals and daily deals run year-round but require checking in regularly." 
                },
                { 
                  q: "Does Amazon offer coupons on top of sale prices?", 
                  a: "Yes — many product pages carry a \"clip coupon\" option that applies an additional percentage or fixed discount at checkout, independent of any existing sale price. These are most common in Beauty and Personal Care, Health and Household, and Grocery." 
                },
                { 
                  q: "Are Amazon's private-label products worth buying?", 
                  a: "For categories like household basics (Amazon Basics, Solimo), pet food (Wag), and some electronics accessories, the private-label options hold up well against name-brand alternatives at meaningfully lower prices. For categories where brand matters more — skincare, athletic footwear, premium electronics — sticking with established names is usually the better call." 
                },
                { 
                  q: "How do I find deals across multiple categories at once?", 
                  a: "The Today's Deals page on Amazon surfaces active promotions across all departments. This page also aggregates the strongest current offers by category, so bookmarking both is a practical approach." 
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-extrabold text-[#1A1A2E] mb-1.5">{faq.q}</h3>
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
  <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1">
    Shopping Categories
  </h3>
  <p className="text-xs text-[#4A4A6A] mb-4">All 10 deep-selection departments.</p>
  <div className="space-y-2">
    {[
      { dept: "Electronics", status: "Highest search volume" },
      { dept: "Computers", status: "High AOV" },
      { dept: "Home & Kitchen", status: "Evergreen range" },
      { dept: "Health & Household", status: "Repeat purchases" },
      { dept: "Beauty & Personal Care", status: "High frequency" },
      { dept: "Sports & Outdoors", status: "Growing segment" },
      { dept: "Toys & Games", status: "Festival goldmine" },
      { dept: "Software", status: "High commission" },
      { dept: "Video Games", status: "High engagement" },
      { dept: "Pet Supplies", status: "Fast-growing" }
    ].map((row, i) => (
      <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#E8E8F0] last:border-0">
        <span className="text-xs text-[#4A4A6A] font-medium">{row.dept}</span>
        <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.status}</span>
      </div>
    ))}
    <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
      <span className="text-xs font-black text-white tracking-wide uppercase">Save Across All Departments</span>
    </div>
  </div>
</div>

          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3">
              Smart Buying Tips
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  Timing Matters
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Major holidays and Prime Day yield the steepest cuts on high-ticket hardware.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  Clip Coupons
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Always check product pages for hidden clip coupons on groceries and pet items.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

      </main>

      <Footer />
    </div>
  );
}
