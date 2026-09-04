'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,Clock,CheckCircle2, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Sparkles, RefreshCw, Lock, HelpCircle,
  ShoppingBag, Heart, Dumbbell, Home, Shirt, Monitor, UtensilsCrossed, Plane,
  GraduationCap, Tv, Wallet, Globe, Activity, Trophy, Code, Gamepad2,
  Gem, Glasses, Armchair,
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
];

export default function EyewearCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Eyewear')),
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_CATEGORIES.forEach(cat => {
      counts[cat.name] = STORES_DATA.filter(s => s.categories.includes(cat.name)).length;
    });
    return counts;
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Check buy-one-get-one style frame offers', desc: 'Several eyewear stores run frame bundle promotions where a coupon code unlocks a second pair at a reduced price — useful if you want a backup pair or a sunglasses and eyeglasses combo.' },
    { title: 'Compare lens upgrade pricing before adding coatings', desc: 'Anti-glare, blue-light, and scratch-resistant coatings are often priced separately. Check whether a discount code applies to the lens upgrade as well as the frame before adding extras.' },
    { title: 'Look for combo deals on multiple pairs', desc: 'Ordering more than one pair in the same checkout often unlocks a steeper discount code than a single-pair order, especially on prescription eyewear.' },
    { title: 'Check home try-on options before committing online', desc: 'Some eyewear retailers let you try frames at home before paying. Pairing this with an active coupon code once you decide can save you a return-and-reorder cycle.' },
    { title: 'Watch for seasonal frame clearance codes', desc: 'Older frame collections are frequently discounted further with a promo code when a new season or collection is introduced, which is a good time to shop if you are flexible on style.' },
  ];

  const faqs = [
    {
      q: 'Are the eyewear coupon codes on CouponsCrew verified?',
      a: 'Yes. Every eyewear coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use an eyewear coupon code?',
      a: 'Copy the code from CouponsCrew, add the frames, sunglasses, or lenses to your cart on the retailer’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple eyewear coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are eyewear coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there eyewear coupon codes for new users?',
      a: 'Yes, many eyewear platforms offer first-order discounts. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do eyewear coupon codes work on both frames and lenses?',
      a: 'It depends on the store and the specific code. Some codes apply to the frame only, while others apply to the full order including lens upgrades. The terms shown with each code will indicate what it covers.',
    },
  ];

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
              <Link href="/stores/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Store Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#5B4FBE] font-semibold">Eyewear</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Eyewear</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse eyewear coupon codes, discount codes, and promo codes for top eyewear brands. Save on prescription glasses, sunglasses, contact lenses, blue light glasses, reading glasses, frames, lenses, and accessories with verified discounts and exclusive online savings.
              </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Sparkles size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Store</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deal</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 15%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091236/eyewear_ididva.webp"
                alt="Eyewear"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Eyewear Stores ({categoryStores.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deals linked directly to the store.</p>
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
                  const isActive = c.name === 'Eyewear';
                  const IconComp = c.icon;
                  return (
                    <Link
                      key={c.slug}
                      href={`/stores/categories/${c.slug}`}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 select-none group ${
                        isActive
                          ? 'bg-[#5B4FBE] text-white shadow-xs'
                          : 'hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE]'
                      }`}
                    >
                      <IconComp size={16} className={isActive ? 'text-white' : 'text-[#4A4A6A] group-hover:text-[#5B4FBE]'} />
                      <span className={`text-sm text-left truncate ${isActive ? 'font-bold' : 'font-medium'}`}>
                        {c.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ml-auto font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#F8F8FF] text-[#4A4A6A] group-hover:bg-white group-hover:text-[#5B4FBE]'
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

      <section className="bg-white border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Products', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Eyewear Deals', desc: 'Get the biggest discounts' },
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
          <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
          <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">
            Frames, Lenses &amp; Contacts Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Eyewear Coupon Codes – Save on Glasses, Sunglasses, and Contact Lenses
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Buying eyewear online has changed completely over the last few years. What used to mean a single visit to a local optician now covers prescription glasses, sunglasses, blue light lenses, contact lenses, and designer frames — all available across multiple platforms with home trial options, virtual try-on tools, and doorstep delivery. And because eyewear platforms compete hard for every order, coupon codes, first-order discounts, and cashback offers are a consistent part of how they attract buyers.
          </p>
          <p>
            CouponsCrew tracks and verifies eyewear coupon codes daily across prescription glasses, sunglasses, contact lenses, reading glasses, and eyewear accessories. Whether you are buying your first pair of prescription frames online or restocking contact lenses, this page brings together the best eyewear discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
          </p>
        </div>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
  {/* Why Choose Us Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-1 h-6 bg-[#22C55E] rounded-full block" aria-hidden="true" />
      <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Why Choose Us</span>
    </div>
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
      Why Use Eyewear Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Eyewear is a category where the price gap between what platforms charge and what you need to pay with a working code can be significant. Prescription glasses and designer sunglasses are high-value purchases, and first-order codes on eyewear platforms routinely deliver strong savings on exactly those items. At the same time, contact lenses are a repeat-purchase product — the savings from consistently applying a code before every restock order add up meaningfully over time.
      </p>
      <p>
        The challenge is that eyewear codes are not always easy to find when you need them. Platforms push their best codes during sale events and via email to existing customers — neither of which helps you at the moment you are about to place an order without a code in hand.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to fix that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Product type tagging</strong> — Every eyewear coupon code is tagged by type: prescription glasses, sunglasses, contact lenses, or reading glasses — so you find what applies to your purchase without sorting through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Prescription-specific tracking</strong> — Codes that apply on prescription lenses specifically — as opposed to frame-only purchases — are flagged separately since they behave differently at checkout</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Home trial offer tracking</strong> — Many eyewear platforms offer free home trials; codes connected to these programmes are listed when active</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and apply it directly at checkout</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use an Eyewear Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The checkout process on eyewear platforms is slightly different from standard retail because prescription details are part of the order. Here is how it typically works:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the eyewear coupon codes on this page. Check the platform and product type the code is for — prescription glasses codes work differently from sunglasses or contact lens codes.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 2</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Copy it</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Click the code and it copies to your clipboard automatically.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 3</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Go to the platform</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the eyewear platform the code is for. Select your frames or lenses and configure your order — frame style, lens type, coating options, and prescription details if applicable.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach checkout</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most eyewear platforms this appears on the cart or payment page after you have configured your full order.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the eyewear discount code and apply it. Your discount reflects in the order total before you complete payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Complete your order</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a bank cashback offer applies, pay with the eligible card to stack both savings on the same order.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Eyewear codes often apply to frames only and exclude premium lens upgrades — anti-glare coatings, blue light filters, photochromic lenses, and high-index options may be priced separately and excluded from a frame discount code. Check what the code covers before you configure your full lens specification.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Eyewear Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Eyewear platforms offer several distinct deal types that behave differently from standard retail codes. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First-order codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on eyewear platforms are among the highest-value in this category. Most major platforms offer strong first-order discounts on prescription glasses specifically — worth saving for a full prescription pair rather than a small accessories purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your total order or on frames specifically. Common across both multi-brand eyewear retailers and direct brand platforms, and especially strong during sale events and new collection launches.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum order value. More common on platforms where the average order value is higher — prescription glasses with lens upgrades, or multi-pair purchase bundles.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Buy-more-save-more codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Many eyewear platforms offer discounts that scale with the number of pairs purchased — a second or third pair at a reduced price. These codes are strong if you are replacing multiple pairs at once or buying prescription glasses and sunglasses together.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Contact lens subscription codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when you set up a recurring contact lens delivery rather than placing individual orders. Subscription codes tend to deliver a lower per-box price than one-time order codes and apply consistently across delivery cycles on most platforms.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when paying with a specific credit or debit card. These stack with platform codes on most eyewear sites and are worth checking before completing any prescription glasses or designer sunglasses purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Home trial codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes connected to home frame trial programmes — where platforms send a selection of frames for you to try before committing to a purchase. These are typically free programmes but codes occasionally unlock an extended selection or a discount on the subsequent purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Lens upgrade codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that specifically reduce the cost of premium lens options — anti-glare, blue light blocking, thin lenses, or photochromic — rather than the frame price. These are listed separately from frame codes on this page and are worth checking if you are planning a full prescription order with upgrades.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Eyewear by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Eyewear covers distinct product types with different purchase rhythms and different code behaviours.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Prescription Glasses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Prescription glasses are the highest-value purchase in this category and the one where first-order codes deliver the most impact in absolute terms. Online eyewear platforms can price prescription glasses significantly lower than physical opticians — and a first-order code on top of that base price extends the saving further. The key things to check before applying a prescription glasses code are whether it covers lens costs alongside frame costs, and whether premium lens coatings are included or priced separately.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sunglasses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Sunglasses codes span both prescription and non-prescription options. Non-prescription sunglasses are more straightforward — most platform codes apply without the lens configuration variables that complicate prescription orders. Designer sunglasses codes are available during end-of-season sales and platform-specific events; these tend to be percentage-based and apply on already-premium price points. Prescription sunglasses follow the same code behaviour as prescription glasses — check lens cost inclusion before applying.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Contact Lenses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Contact lenses are a repeat-purchase product and the category where subscription codes make the most financial sense. Most platforms offer better per-box pricing on subscription orders than one-time purchases, and a subscription code applied at setup locks in the lower rate across future delivery cycles. Daily, weekly, fortnightly, and monthly lens codes are listed separately where available — the code type matters because pack sizes and minimum order values differ across lens schedules.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Reading Glasses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Reading glasses codes are typically straightforward — most apply without the prescription configuration complexity of full corrective glasses. Platforms offer reading glasses across a wide range of magnification strengths, and bundle codes — buying multiple pairs for different locations — are common and well-priced. If you buy reading glasses regularly, multi-pair bundle codes on this page are worth checking first.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Blue Light and Computer Glasses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Blue light blocking glasses have grown rapidly as a product category among people who spend significant time in front of screens. Codes on blue light glasses follow similar patterns to prescription glasses codes — first-order codes are strong, and lens upgrade codes for higher-grade blue light filtering are listed separately. Many platforms now bundle blue light coating into standard lens options; check whether your chosen platform includes it before buying a standalone blue light glasses code.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Eyewear Accessories</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Lens cleaning kits, cases, frame adjustment tools, and replacement nose pads are where smaller-value but broadly applicable codes appear. These are not the primary purchase type in this category but sitewide codes on eyewear platforms often cover accessories alongside frames and lenses — worth using on a bundled order rather than a standalone accessories purchase.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Eyewear Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Eyewear Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Eyewear follows a mix of fashion season cycles, back-to-school periods, and platform-specific sale events.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New prescription season",
              desc: "The period after eye test season — typically post-school year start and post-festive period — is when most people update their prescriptions and buy new frames. Eyewear platforms anticipate this demand and push codes around these windows. If you have recently had an eye test and are ready to order new glasses, this is when the best codes are most consistently available.",
            },
            {
              title: "End-of-season frame clearance",
              desc: "Eyewear follows fashion season cycles. New frame collections launch twice a year, and outgoing season frames go on clearance with codes applied on top. If you are flexible on the latest collection, end-of-season clearance codes deliver the strongest combined savings.",
            },
            {
              title: "Back-to-school window",
              desc: "Students and parents buying prescription glasses before the academic year starts drive a consistent eyewear code cycle in July and August. Platforms push codes on children's frames, prescription glasses, and contact lenses during this window.",
            },
            {
              title: "Festive periods",
              desc: "Diwali and major festive sale events bring eyewear platform codes alongside broader retail promotions. Designer sunglasses and premium frames are frequently featured in festive sale events — worth checking this page before buying in the festive period.",
            },
            {
              title: "World Sight Day (October)",
              desc: "Several eyewear platforms run promotions around World Sight Day in October — an annual awareness event that platforms use to run prescription glasses codes and eye health offers. Worth checking this page in mid-October specifically.",
            },
            {
              title: "Valentine's Day and gifting windows",
              desc: "Sunglasses and eyewear accessories are popular gifting purchases. Valentine's Day and other gifting occasions bring codes on sunglasses and eyewear gift sets from platforms targeting the gifting occasion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-sm text-[#4A4A6A] leading-relaxed">
                <h3 className="font-extrabold text-[#1A1A2E] text-base mb-1">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 bg-[#EFF6FF] border border-[#3B82F6]/30 rounded-2xl">
          <p className="text-xs text-[#1D4ED8] font-semibold leading-relaxed">
            Bookmark this page and check it before every eyewear purchase — prescription glasses codes in particular move fast around demand windows, and first-order codes are worth capturing before you place your first order on any new platform.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Eyewear Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Eyewear Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of getting the best price on eyewear. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Keep your prescription current before you order",
              desc: "An outdated prescription is the most common reason online eyewear orders do not deliver the expected vision correction. Confirm your prescription is current — typically within two years for most adults — before ordering prescription glasses or contact lenses online.",
            },
            {
              title: "Use home trial programmes before committing",
              desc: "Most major online eyewear platforms offer free or low-cost home frame trials. Trying frames at home before buying eliminates the fit uncertainty that puts many buyers off online eyewear purchases. Codes that extend home trial selections or unlock a discount on the subsequent purchase are listed here when active.",
            },
            {
              title: "Buy contact lenses on subscription rather than one-off orders",
              desc: "The per-box price on a contact lens subscription is almost always lower than on individual orders. A subscription code on top of the already-lower subscription price gives the best combined saving — and the convenience of automatic delivery removes the risk of running out.",
            },
            {
              title: "Compare lens upgrade costs separately from frame costs",
              desc: "Frame prices are prominently advertised on eyewear platforms; lens upgrade costs are added during configuration. Comparing the total order cost — frame plus your specific lens requirements — across platforms before applying a code gives a more accurate picture than comparing headline frame prices alone.",
            },
            {
              title: "Check whether your health insurance covers eyewear",
              desc: "Several health insurance plans and corporate benefits programmes include an annual eyewear allowance. If yours does, confirm the reimbursement process before ordering — some insurers require specific documentation or restrict coverage to certain providers.",
            },
            {
              title: "Buy multiple pairs when platforms offer bundle pricing",
              desc: "Prescription glasses, a pair of sunglasses, and a spare pair bought together on a bundle code typically cost less per pair than buying each separately with individual codes. If you are due for an update across more than one pair, bundling the order is worth calculating.",
            },
            {
              title: "Check the return and exchange policy for prescription glasses",
              desc: "Online prescription glasses have more complex return conditions than non-prescription eyewear — some platforms offer full returns within a window, others offer exchanges or store credit only. Confirming this before you order — particularly if you are trying an online eyewear platform for the first time — avoids complications if the prescription fit is not right.",
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="text-sm text-[#4A4A6A] leading-relaxed">
                <h3 className="font-extrabold text-[#1A1A2E] text-base mb-1">
                  {tip.title}
                </h3>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE BLOCK 4: FAQ SECTION WITH ACCORDIONS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">
            FAQ
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Do eyewear coupon codes apply to prescription lens costs or only frames?",
              a: "It depends on the code and platform. Some eyewear discount codes apply to the full order including lens costs; others apply to frames only and exclude lens upgrades and coatings. The terms on each code listed here specify what is covered — check before you configure your lens options.",
            },
            {
              q: "Can I use an eyewear coupon code with a bank cashback offer?",
              a: "On most eyewear platforms, yes. A platform promo code and a bank card cashback offer are processed independently and can both apply on the same order. This is worth doing on any prescription glasses or designer sunglasses purchase.",
            },
            {
              q: "How often are eyewear coupon codes updated on CouponsCrew?",
              a: "Daily. Eyewear codes tied to new collection launches and seasonal events can go live and expire within days. Checking this page before each purchase rather than relying on a saved code from an earlier visit is the right approach.",
            },
            {
              q: "Do contact lens subscription codes apply on every delivery cycle?",
              a: "Most subscription codes apply to the first cycle or to the initial setup of the subscription. Ongoing delivery cycles are priced at the standard subscription rate unless the platform runs a separate ongoing discount. Check the subscription terms at setup to confirm how the code applies across future orders.",
            },
            {
              q: "Are there eyewear coupon codes for children's prescription glasses?",
              a: "Yes. Children's prescription glasses codes are listed alongside adult codes on this page and are typically active during back-to-school windows and around the start of new academic terms. Platforms that specialise in children's eyewear run more consistent codes on this subcategory than general eyewear retailers.",
            },
            {
              q: "Do home trial programmes require a coupon code?",
              a: "Most home trial programmes are free without a code — the trial itself is a platform feature rather than a promotional offer. Codes connected to home trials typically unlock an extended selection or a discount on the purchase that follows. These are listed on this page when active.",
            },
            {
              q: "What is the best way to save on designer sunglasses online?",
              a: "Combine end-of-season clearance timing with a percentage-off code and a bank card cashback offer. Designer sunglasses clearance codes appear when new season collections launch and platforms move outgoing stock — the base price is already reduced and a code on top of that gives the strongest combined saving.",
            },
            {
              q: "Do blue light glasses codes work for prescription blue light lenses?",
              a: "Some do. Blue light lens upgrade codes listed on this page specify whether they apply to prescription or non-prescription lenses — or both. Check the terms before configuring a prescription blue light order to confirm the code covers your specific lens type.",
            },
            {
              q: "Can I use my old prescription to order glasses online?",
              a: "Most platforms accept prescriptions within the last two years for adults. Some platforms have a shorter validity window or require a more recent prescription for higher-power corrections. Confirm the platform's prescription validity policy before ordering — using an outdated prescription risks receiving glasses that do not correct your vision accurately.",
            },
            {
              q: "Are reading glasses codes available for multiple magnification strengths?",
              a: "Yes. Reading glasses codes on this page apply broadly across magnification strengths unless the code is restricted to a specific product range. Multi-pair bundle codes — which cover multiple magnification strengths in a single order — are listed separately and flagged when active.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 bg-white flex items-center justify-between gap-4 hover:bg-[#F8F8FF] transition-colors"
              >
                <h3 className="text-sm font-extrabold text-[#1A1A2E]">
                  {faq.q}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-[#5B4FBE] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#4A4A6A] shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 pt-1 bg-[#F8F8FF] border-t border-[#E8E8F0]">
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE BLOCK 5: CTA / FOOTER */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
          <span className="text-xs font-black text-white/60 uppercase tracking-widest">
            Start Saving
          </span>
        </div>
        <h2 className="text-2xl font-black text-white leading-tight">
          Start Saving on Every Eyewear Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every pair of prescription glasses you order, every box of contact lenses you restock, and every pair of sunglasses you buy is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified eyewear coupon codes, eyewear discount codes, and eyewear promo codes across prescription glasses, sunglasses, contact lenses, reading glasses, and blue light eyewear.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every eyewear purchase, bookmark this page, and make sure no deal on your next pair passes you by.
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT - SIDEBAR CARDS (30%) */}
    <div className="lg:col-span-3 space-y-5">

      {/* SIDEBAR CARD 1 - Quick Category Directory */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#5B4FBE]" />
          Top Eyewear Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Prescription Glasses", tag: "Frame & Lens Bundles" },
            { brand: "Designer Sunglasses", tag: "Clearance Savings" },
            { brand: "Contact Lenses", tag: "Subscription Discounts" },
            { brand: "Blue Light Glasses", tag: "Work & Gaming Optics" },
            { brand: "Reading Glasses", tag: "Multi-Pair Offers" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
              <span className="text-xs text-[#1A1A2E] font-bold">{row.brand}</span>
              <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.tag}</span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-1.5 pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            <span className="text-xs font-black text-white tracking-wide uppercase">100% Verified Codes</span>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 2 - Deal Types Summary */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
          <Percent className="w-4 h-4 text-[#22C55E]" />
          Smart Buyer Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Bundle Multi-Pairs
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine prescription glasses and sunglasses orders using bundle promo codes.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Subscribe &amp; Save
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Apply initial discount codes to recurring contact lens auto-replenishments.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Instant Access</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Optician Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified eyewear code here and apply it directly at checkout on the brand's store.
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
