'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Sparkles, RefreshCw, Lock, HelpCircle,
  ShoppingBag, Heart, Dumbbell, Home, Shirt, Monitor, UtensilsCrossed, Plane,
  GraduationCap, Tv, Wallet, Globe, Activity, Trophy, Code, Gamepad2,
  Gem, Glasses, Armchair, Gift,
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';
import { STORES_DATA } from '../../../../../src/data/stores';

const ALL_CATEGORIES = [
  { name: 'Fashion', slug: 'fashion', icon: ShoppingBag },
  { name: 'Beauty', slug: 'beauty', icon: Heart },
  { name: 'Exercise & Fitness', slug: 'exercise-and-fitness', icon: Dumbbell },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen', icon: Home },
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories', icon: Shirt },
  { name: 'Electronics', slug: 'electronics', icon: Monitor },
  { name: 'Food & Grocery', slug: 'food-and-grocery', icon: UtensilsCrossed },
  { name: 'Travel', slug: 'travel', icon: Plane },
  { name: 'Education', slug: 'education', icon: GraduationCap },
  { name: 'Entertainment', slug: 'entertainment', icon: Tv },
  { name: 'Finance', slug: 'finance', icon: Wallet },
  { name: 'Web Hosting', slug: 'web-hosting', icon: Globe },
  { name: 'Health', slug: 'health', icon: Activity },
  { name: 'Sports', slug: 'sports', icon: Trophy },
  { name: 'Software', slug: 'software', icon: Code },
  { name: 'Gaming', slug: 'gaming', icon: Gamepad2 },
  { name: 'Jewellery', slug: 'jewellery', icon: Gem },
  { name: 'Eyewear', slug: 'eyewear', icon: Glasses },
  { name: 'Furniture', slug: 'furniture', icon: Armchair },
  { name: 'Gift', slug: 'gift', icon: Gift },
];

export default function GiftCategory() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Gift') || s.categories.includes('Gifting')),
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_CATEGORIES.forEach(cat => {
      if (cat.name === 'Gift') {
        counts[cat.name] = STORES_DATA.filter(s => s.categories.includes('Gift') || s.categories.includes('Gifting')).length;
      } else {
        counts[cat.name] = STORES_DATA.filter(s => s.categories.includes(cat.name)).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
        {/* HERO SECTION */}
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
                <Link href="/stores/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Store Categories</Link>
                <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
                <span className="text-[#5B4FBE] font-semibold">Gift</span>
              </div>
              <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Gift</h1>
              <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">Personalized gifts, flowers, cakes &amp; hampers from top gifting brands — verified coupon codes &amp; deals.</p>
              <div className="mt-6 flex flex-wrap gap-3 w-full">
                <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                  <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Sparkles size={18} /></div>
                  <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Store{categoryStores.length !== 1 ? 's' : ''}</div></div>
                </div>
                <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                  <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                  <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deals</div></div>
                </div>
                <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                  <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                  <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 40%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795438836/gift-category_vuaq5b.webp"
                  alt="Gift Category"
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

        {/* STORES + SIDEBAR */}
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-4 border-b border-[#E8E8F0]">
                <div>
                  <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Gift Stores ({categoryStores.length})</h2>
                  <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified gift &amp; celebration offers with direct store links.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryStores.map(store => (
                  <Link
                    key={store.id}
                    href={`/stores/${store.slug}`}
                    className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg hover:border-[#5B4FBE] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-[1.04] overflow-hidden shadow-2xs"
                        style={{ backgroundColor: store.logoBg }}
                      >
                        {store.logoImage ? (
                          <NextImage
                            src={store.logoImage}
                            alt={store.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span
                            className={`font-black tracking-tighter ${store.logo.length > 3 ? 'text-sm' : 'text-lg md:text-xl'}`}
                            style={{ color: store.logoColor }}
                          >
                            {store.logo}
                          </span>
                        )}
                      </div>
                      <h3 className="font-extrabold text-sm text-[#1A1A2E] leading-tight truncate px-0.5 group-hover:text-[#5B4FBE] transition-colors">
                        {store.name}
                      </h3>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="text-xs font-black text-[#FF5722] bg-[#FFF2ED] rounded-lg py-1 px-2 inline-block max-w-full truncate">
                        {store.discountLabel}
                      </div>
                      <div className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all mt-1">
                        <span>Get Deal</span>
                        <ChevronRight size={12} className="stroke-[3]" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* SIDEBAR CATEGORY FILTER */}
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
                  {ALL_CATEGORIES.map(c => {
                    const isActive = c.name === 'Gift';
                    const IconComp = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        href={`/stores/categories/${c.slug}`}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group ${isActive
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE]'
                          }`}
                      >
                        <IconComp size={16} className={isActive ? 'text-white' : 'text-[#4A4A6A] group-hover:text-[#5B4FBE]'} />
                        <span className={`text-sm text-left truncate ${isActive ? 'font-bold' : 'font-medium'}`}>
                          {c.name}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ml-auto font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] group-hover:bg-white group-hover:text-[#5B4FBE]'
                          }`}>
                          {categoryCounts[c.name] ?? 0}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="bg-white border-t border-[#E8E8F0] py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Gifts', desc: 'All coupon codes verified before listing' },
              { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Gift Deals', desc: 'Save on flowers, cakes, hampers & more' },
              { icon: RefreshCw, bg: 'bg-[#FFFBEB]', color: 'text-[#F59E0B]', title: 'Daily Updates', desc: 'Fresh discount codes added every day' },
              { icon: Lock, bg: 'bg-[#F0FDF4]', color: 'text-[#22C55E]', title: 'Safe & Secure', desc: 'Shop directly on official brand stores' },
            ].map(({ icon: Icon, bg, color, title, desc }) => (
              <div key={title} className="text-center p-2 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center`}><Icon size={26} /></div>
                <h4 className="text-sm font-bold text-[#1A1A2E] mt-4">{title}</h4>
                <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDITORIAL CONTENT */}
        <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

            {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
            <div className="lg:col-span-7 space-y-10">

              {/* ARTICLE BLOCK 1: HEADER & INTRO */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Gifting Hub</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Gift Coupon Codes: Save on Online Gifts, Flowers, Cakes and More in India (November 2026)
                </h2>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    Gift coupon codes are promo codes and discount offers that reduce the price of flowers, personalised gifts, cakes, hampers, jewellery, and experience vouchers on India&apos;s top gifting platforms. CouponsCrew lists verified gift discount codes across all major gifting occasions — birthdays, anniversaries, weddings, Diwali, Raksha Bandhan, and everyday surprises — so you get the best price on any gift without searching across multiple sites. The most consistent savings in this category come from category-specific codes on flower and cake platforms, bank card discounts on premium gifting stores, and sitewide sale events on marketplaces around major Indian festivals.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: WHAT THE GIFT CATEGORY COVERS */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Category Coverage</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  What the Gift Category Covers on CouponsCrew
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The gift category on CouponsCrew brings together verified coupon codes and offers across every major type of gifting store in India.
                  </p>
                  <ul className="space-y-3 pl-1 mt-2">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Flower and gift delivery platforms</strong> are the core of this category — online stores where you pick the product and schedule delivery to any address in India. These platforms cover roses, bouquets, plants, cakes, personalised gifts, dry fruit hampers, soft toys, and combo orders. They often run category-specific codes — different discounts for flowers, cakes, birthday gifts, and anniversary orders — rather than a single sitewide code, which is why checking CouponsCrew for the right code for your occasion matters.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Personalised gifting stores</strong> focus on custom-printed products: photo frames, mugs, cushions, name plaques, engraved jewellery, and printed apparel. These stores offer something standard gifting platforms don&apos;t — the item is unique to the recipient. The price point is usually mid-range, and discount codes of 10–20% are regularly available through CouponsCrew.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Luxury and premium gifting</strong> covers high-end chocolates, fine jewellery, premium watches, and curated experience vouchers (spa days, cooking classes, dining experiences). These categories have fewer blanket codes but regular bank card cashback offers, particularly from HDFC and ICICI, that apply at checkout.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Festival gifting</strong> runs differently from everyday gifting — during Diwali, Raksha Bandhan, Holi, Eid, and Christmas, gifting platforms run their deepest sale events of the year. These events combine automatic sitewide discounts with category-specific codes that change week to week. CouponsCrew updates festival gift codes throughout each major gifting season.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Corporate gifting</strong> is a separate segment within this category — bulk orders for teams, clients, and business events. Corporate gift codes are typically tiered by order value and require a minimum quantity. Where CouponsCrew has verified corporate gift codes, they&apos;re listed under the relevant store page.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: GIFTING OCCASIONS IN INDIA */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Seasonal Calendar</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Gifting Occasions in India: When to Buy and What Codes Apply
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    India&apos;s gifting calendar is busy throughout the year, and each occasion comes with its own buying behaviour — and its own set of relevant codes.
                  </p>
                  <ul className="space-y-3 pl-1 mt-2">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Birthdays</strong> are the most frequent gifting occasion and the category where code availability is most consistent. Flower and cake platforms run birthday-specific codes (typically 10–15% off) that apply to birthday cakes, birthday flower arrangements, and birthday gift combos. These codes are usually not tied to a specific date — they&apos;re available year-round and apply to any order tagged as a birthday occasion at checkout.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Anniversaries</strong> follow a similar structure. Anniversary-specific codes on gifting platforms apply to roses, anniversary gift sets, and combo orders tagged for anniversaries. The codes are distinct from birthday codes on most platforms, so using the right one matters.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Weddings and engagements</strong> are higher-value gifting occasions where the spend per gift is significantly higher. Personalised gifts (customised frames, engraved items, luxury hampers) are the dominant category. Gifting platforms often run wedding-season campaigns between November and February — this is when exchange rates on premium personalised items and hampers are at their most competitive.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Raksha Bandhan</strong> is one of the highest-volume gifting events on Indian delivery platforms, particularly for flower, chocolate, and hamper orders. Codes during Raksha Bandhan run for a compressed window (typically 7–10 days) and expire quickly. CouponsCrew updates these codes daily during the Raksha Bandhan window.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Diwali</strong> sees the widest range of gift categories active simultaneously — electronics, fashion, jewellery, home décor, sweets, dry fruit hampers, and experience vouchers all carry Diwali-specific promotions. This is also when the highest-value bank card codes appear, with some instant discounts going up to 25–30% across premium gifting categories.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Valentine&apos;s Day</strong> is flower and jewellery season. Delivery platforms start running codes from early February, and midnight/same-day delivery slots fill days in advance of February 14. Buying early gives you both more slot options and more code choices.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 4: HOW TO FIND THE BEST GIFT COUPON CODE */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Pro Tactics</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  How to Find the Best Gift Coupon Code on CouponsCrew
                </h3>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Finding the right code is faster when you know what you&apos;re looking for.
                </p>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <ul className="space-y-3 pl-1">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Start with the occasion.</strong> The occasion determines which store category you need — birthday cakes and flowers are covered by delivery platforms; personalised items come from print-on-demand gifting stores; premium experiences come from curated gifting portals. Knowing the occasion helps you land on the right store page on CouponsCrew rather than searching broadly.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Match the code to the product category.</strong> Most major gifting platforms in India use category-specific codes rather than one blanket sitewide discount. A code for flower bunches won&apos;t apply to a cake order, and a birthday gift code won&apos;t work on anniversary products. CouponsCrew lists the product category each code applies to alongside the code itself.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Check the minimum order.</strong> Gift codes almost always carry a minimum cart value. Codes that give the highest percentage off often have higher minimums — a 15% code may require a ₹999 order while a 10% code may work from ₹299. If your order is small, the lower-minimum code often saves more in practice than a higher-percentage code you can&apos;t reach.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Compare percentage vs. flat-off codes on higher-value orders.</strong> For orders above ₹2,500, a flat ₹500-off code can outperform a 15% code capped at ₹500 — the math tips in favour of the flat code at order values where the percentage saving would hit its cap. CouponsCrew lists both the saving amount and any cap on each code so you can compare quickly.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Check bank card codes separately.</strong> Many gifting platforms partner with banks (HDFC, ICICI, Kotak, HSBC) to offer card-specific discounts of 15–20% on top of a standard coupon code or sale price. If you hold any of these cards, the bank code is often the highest-value saving on a large gift order. CouponsCrew lists bank gift codes under each store&apos;s coupon page.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 5: GIFT DELIVERY */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Delivery Guide</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Gift Delivery: What to Know Before You Order
                </h3>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Understanding how gift delivery works in India saves you from the most common ordering mistake — realising too late that the slot you needed isn&apos;t available.
                </p>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <ul className="space-y-3 pl-1">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Same-day delivery</strong> is available from most major gifting platforms in metro cities — but it comes with a cut-off time, usually before noon, for afternoon or evening delivery. On peak gifting occasions, same-day slots fill from the day before. If you&apos;re ordering for a birthday that&apos;s today, check slot availability before you pick the product — the product choice is irrelevant if the slot doesn&apos;t exist.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Midnight delivery</strong> targets the midnight window for birthdays and surprises. It&apos;s the premium delivery tier and fills up faster than standard delivery. Midnight delivery in Tier 2 cities is not always available — check the pin code at checkout before assuming it&apos;s an option.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Perishable product cancellations.</strong> Flowers and cakes cannot typically be cancelled after the order enters processing — usually within a few hours of placing the order. If there&apos;s any chance the delivery details might change, place the order as late as practically possible while still securing the slot.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>International delivery.</strong> Several major Indian gifting platforms deliver internationally — to UAE, Singapore, UK, US, Canada, and Malaysia, among other countries. International delivery timelines vary significantly and standard discount codes typically exclude international orders. CouponsCrew notes where international delivery is available and whether codes apply.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 6: TYPES OF GIFTS THAT SAVE THE MOST */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Maximum Value</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Types of Gifts That Save the Most With Coupon Codes
                </h3>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Not every gift category has the same discount depth. Knowing where codes deliver the most value helps you plan.
                </p>
                <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
                  <ul className="space-y-3 pl-1">
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Flowers and cakes</strong> consistently have the most codes available, with the widest range of discount depths — from 10% off flower bunches at low minimums to ₹500 off on orders above ₹2,500. These platforms run the most code-friendly structures because product margins allow it and volume is high.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Personalised gifts</strong> have moderate code availability — 10–20% off is standard, with codes running more frequently around major gifting seasons. The saving on a ₹600 personalised mug at 15% off is modest, but on a ₹3,000 customised photo frame or engraved jewellery piece, it adds up.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Electronics as gifts</strong> (headphones, smartwatches, Bluetooth speakers) save the most during platform-level sale events (Amazon&apos;s Great Indian Festival, Flipkart&apos;s Big Billion Days) and through bank card codes — the same codes that apply on everyday electronics apply when you&apos;re buying as a gift.
                      </p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-[#5B4FBE] rounded-full mt-2 shrink-0"></span>
                      <p>
                        <strong>Gift cards and vouchers</strong> rarely carry coupon codes because the discount structure is baked into the face value. The exception is cashback apps and reward programmes that give a percentage back on gift card purchases — these are worth checking separately.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ARTICLE BLOCK 7 - FAQ SECTION WITH ACCORDIONS */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "What are the best gift coupon codes in India right now?",
                      a: "The best codes depend on what you're buying and from which platform. For flowers and cakes, category-specific codes from India's major delivery platforms give 10–20% off with low minimums. For personalised gifts, 10–15% codes are available year-round through CouponsCrew. For premium gifting, bank card codes from HDFC and ICICI give 15–20% off at checkout. Visit the individual store page on CouponsCrew for the latest verified codes for each gifting platform."
                    },
                    {
                      q: "Can I use a gift coupon code on same-day delivery orders?",
                      a: "Usually yes — coupon codes on gifting platforms apply regardless of the delivery type selected. The delivery type (same-day, midnight, standard) affects the delivery fee and slot availability, not code eligibility. Some bank card codes have minimum order thresholds that may push you above what a same-day delivery of a small gift costs — check the minimum before applying."
                    },
                    {
                      q: "Are gift discount codes available during Diwali and other festivals?",
                      a: "Yes, and festival season is when the deepest codes appear. Major gifting platforms run their most aggressive discounts during Diwali, Raksha Bandhan, Valentine's Day, and Mother's Day. CouponsCrew updates festival gift codes throughout each gifting season — check the category page as the occasion approaches for the most current codes."
                    },
                    {
                      q: "Do gift promo codes work on international delivery orders?",
                      a: "Most codes listed on gifting platforms are India-only. International delivery orders are typically priced separately and exclude standard coupon codes. If you're sending a gift internationally through an Indian platform, check the specific platform's international code availability — CouponsCrew notes this where relevant."
                    },
                    {
                      q: "Can I combine a gift coupon code with a bank card offer?",
                      a: "On most gifting platforms, a coupon code and a bank card cashback or discount cannot be applied simultaneously — you use one or the other. The exception is platforms where bank cashback is processed separately from the coupon code discount, in which case both apply. Check the terms at checkout before confirming the order to see which combination is available."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 bg-white flex items-center justify-between gap-4 hover:bg-[#F8F8FF] transition-colors"
                      >
                        <h4 className="text-sm font-extrabold text-[#1A1A2E]">{faq.q}</h4>
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

            </div>

            {/* RIGHT - SIDEBAR CARDS (30%) */}
            <div className="lg:col-span-3 space-y-5">

              {/* SIDEBAR CARD 1 - Quick Category Directory */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
                <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#5B4FBE]" />
                  Gift Categories
                </h3>
                <p className="text-xs text-[#4A4A6A] mb-4">Verified gift codes across India.</p>
                <div className="space-y-2">
                  {[
                    { brand: "Flowers & Bouquets", tag: "10–20% Off" },
                    { brand: "Cakes & Combos", tag: "Same-Day / Midnight" },
                    { brand: "Personalised Gifts", tag: "10–20% Off" },
                    { brand: "Luxury & Jewellery", tag: "Bank Cashback" },
                    { brand: "Festival Hampers", tag: "Up to 25–30% Off" },
                    { brand: "Corporate Gifting", tag: "Tiered Bulk Codes" },
                    { brand: "Electronics Gifts", tag: "Sale + Card Offers" },
                    { brand: "Experience Vouchers", tag: "HDFC / ICICI Deals" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                      <span className="text-xs text-[#1A1A2E] font-bold">{row.brand}</span>
                      <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.tag}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                    <span className="text-xs font-black text-white tracking-wide uppercase">100% Verified Codes</span>
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
                      Category Coupons
                    </div>
                    <p className="text-[11px] text-[#4A4A6A] leading-normal">
                      Occasion-specific discounts on flowers, cakes, birthdays, and anniversaries.
                    </p>
                  </div>
                  <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                      Bank Card Offers
                    </div>
                    <p className="text-[11px] text-[#4A4A6A] leading-normal">
                      Instant discounts and cashback on HDFC, ICICI, Kotak, and HSBC cards.
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
                <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Checkout</h3>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Copy your verified code here and apply directly on the merchant&apos;s official store or mobile app at checkout.
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
