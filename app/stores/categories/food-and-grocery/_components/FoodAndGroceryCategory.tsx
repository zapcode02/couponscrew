'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, CheckCircle2, Lightbulb, Clock,ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, Sparkles, Package, RefreshCw, Lock, HelpCircle
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';
import { STORES_DATA } from '../../../../../src/data/stores';

const OTHER_CATEGORIES = [
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Exercise & Fitness', slug: 'exercise-and-fitness' },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen' },
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Travel', slug: 'travel' },
  { name: 'Education', slug: 'education' },
  { name: 'Entertainment', slug: 'entertainment' },
];

export default function FoodAndGroceryCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Food & Grocery')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
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
              <Link href="/stores/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Store Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#22C55E] font-semibold">Food & Grocery</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Food & Grocery</h1>
             <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse food & grocery coupon codes, discount codes, and promo codes for leading food delivery apps, supermarkets, and grocery stores. Save on fresh produce, pantry essentials, beverages, dairy products, snacks, and everyday household items with verified discounts and deals.
              </p>
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Sparkles size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Store</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deal</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 20%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788085983/food-and-grocery_zqodvj.webp"
                alt="Food & Grocery"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Food & Grocery Stores ({categoryStores.length})</h2>
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
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 uppercase tracking-wide border-b border-[#F8F8FF] pb-2">Browse Other Categories</h3>
              <div className="space-y-1">
                {OTHER_CATEGORIES.map(c => (
                  <Link key={c.slug} href={`/stores/categories/${c.slug}`} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] transition-colors group">
                    <Package size={15} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                    <span className="text-sm text-[#4A4A6A] group-hover:text-[#5B4FBE] group-hover:font-semibold">{c.name}</span>
                    <ArrowRight size={13} className="ml-auto text-gray-300 group-hover:text-[#5B4FBE]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Offers', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Food & Grocery Deals', desc: 'Get the biggest discounts' },
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
          <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">
            Food &amp; Grocery Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Food &amp; Grocery Coupon Codes – Save on Every Order, Every Day
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Ordering food online or stocking up on groceries should not mean paying full price every single time. Food and grocery is one of the most frequently shopped categories online — and because of that, it is also one where coupon codes, cashback offers, and platform promos refresh faster than almost anywhere else. CouponsCrew tracks and verifies food and grocery coupon codes daily so you always have something working when you open your delivery app or fill your grocery cart.
          </p>
          <p>
            Whether you are ordering dinner tonight, scheduling a weekly grocery delivery, or stocking up on household essentials, this page brings together the best food discount codes and grocery promo codes from leading platforms — updated regularly, tested before they go live.
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
      Why Use Food &amp; Grocery Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Food and grocery is a repeat-purchase category. Unlike electronics or furniture where you buy once and wait years, you are ordering from these platforms multiple times a week. That means savings compound — a working coupon code used consistently across your regular orders adds up to a significant amount over time.
      </p>
      <p>
        The challenge is that food and grocery codes expire faster than any other category. Flash offers on food delivery apps can go live and die within a few hours. Grocery platform codes tied to specific time slots or payment windows close without warning. Finding a code that still works when you actually need it is harder than it sounds.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is how CouponsCrew handles that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">High-frequency updates</strong> — Food and grocery codes are refreshed more often than any other category on this page, including during peak meal-order hours</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Offer type clarity</strong> — Every code is labelled clearly: first order, existing user, bank offer, app-exclusive, or time-slot specific</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No ghost codes</strong> — Expired offers are removed promptly, not left sitting on the page to waste your time at checkout</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Bank offer tracking</strong> — Cashback codes from specific cards are listed alongside platform codes so you can stack both</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and use it directly on whichever platform you are ordering from</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use a Food &amp; Grocery Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The steps are straightforward across most food delivery and online grocery platforms:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the food and grocery coupon codes on this page. Check whether the code is for food delivery or grocery, and confirm it matches the platform you are ordering from.</p>
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
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Open your app or platform</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the food delivery or grocery platform the code is for. Add your items to cart as you normally would.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach checkout</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most food apps this appears on the payment screen before you confirm the order.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the food discount code and apply it. Your discount or cashback will reflect before you complete the order.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm and pay</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Complete your payment. If a bank cashback offer applies alongside the promo code, pay with the eligible card to stack both.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Food delivery codes often have a minimum order value and are restricted to specific restaurant types, cuisine categories, or new users only. Check the terms before you start ordering — changing your cart after a code fails mid-checkout wastes time.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Food &amp; Grocery Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Food and grocery platforms run a wider variety of offer types than most other categories. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First order codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes for your first order on a food delivery or grocery platform. These tend to be the highest-value codes available on any platform — worth saving for a larger order rather than a small impulse buy.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your total order value. Common across both food delivery and grocery platforms, and often the most straightforward type to use without reading heavy fine print.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum value. These work best when you are already planning a larger grocery shop or ordering for multiple people.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when you pay with a specific credit or debit card. Stacking a platform code with a bank offer is the most effective way to save on food and grocery orders — both apply independently on most platforms.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cashback offers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage of your order value returned as wallet money or store credit. Common across grocery platforms, and valuable if you order from the same platform regularly since the credit carries forward.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Free delivery codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Delivery charges on smaller orders can eat into savings quickly. Free delivery codes waive that charge entirely, which on a small grocery top-up order can represent a meaningful percentage of the total bill.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Subscription and membership codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Most major food delivery and grocery platforms have paid membership programmes that reduce or eliminate delivery fees and unlock member-exclusive prices. Promo codes for discounted or free trial membership are listed here when available.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Time-slot and schedule offers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Some grocery platforms offer lower prices or additional discounts on orders scheduled for off-peak delivery slots. These are platform-specific and not always labelled as coupon codes, but we flag them when they are active.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Food &amp; Grocery by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The food and grocery category covers a wide range of platforms and purchase types. Knowing which type of platform has the best codes for your need saves time.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Food Delivery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Food delivery is where the fastest-moving coupon codes live. Offers go live during lunch and dinner hours, attach to specific restaurant partners, and expire the same day. First-order codes on food delivery platforms tend to be the highest absolute-value codes in this category. Existing user codes are smaller but refresh frequently — checking this page before each order rather than once a week pays off here.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Online Grocery Delivery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Grocery delivery platforms operate on a different rhythm from food apps. Codes here are often tied to weekly or monthly promotions, specific product categories, or scheduled delivery slots. Free delivery codes are especially useful for smaller top-up grocery orders where the delivery charge would otherwise be a significant portion of the total bill.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Quick Commerce and Instant Delivery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Quick commerce platforms — those delivering groceries and essentials in under an hour — have grown rapidly and carry their own set of codes and cashback offers. These platforms run frequent first-order and referral-based discount codes alongside bank offer stacking opportunities.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Specialty and Organic Grocery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Platforms focused on organic produce, health foods, or specialty items tend to run fewer but more consistent discount codes tied to their subscription or membership programmes. If you shop these platforms regularly, membership codes are often the most valuable thing to look out for.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Meal Kits and Subscription Boxes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Meal kit platforms typically offer deep first-order or first-box discounts. These codes are high value on the first purchase but taper off for existing subscribers. Worth using when you are trying a new service.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
          <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">
            Timing Strategies
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Food &amp; Grocery Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Unlike electronics or fashion, food and grocery discounts do not follow a single annual sale calendar. Savings opportunities are more frequent but smaller and shorter-lived. Here is when to look:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Lunch and dinner windows",
              desc: "Food delivery platforms push their best same-day codes during peak meal-ordering hours. Checking this page just before you open your food app is a consistent habit worth building.",
            },
            {
              title: "Weekend grocery shops",
              desc: "Grocery platforms often run weekend-specific codes or flash deals that are not available on weekdays. Planning your weekly shop around Saturday or Sunday can unlock offers that are not live during the week.",
            },
            {
              title: "Festive and holiday periods",
              desc: "Diwali, Eid, Christmas, and other major festivals bring platform-wide food and grocery discount codes alongside category-specific promotions. Grocery platforms typically expand their festive range during these periods.",
            },
            {
              title: "Payday weeks",
              desc: "Many grocery platforms push stronger codes during the last week and first week of the month, timed around salary credit cycles. If you can plan your big monthly grocery order for this window, the codes tend to be better.",
            },
            {
              title: "New platform launches and expansions",
              desc: "When a food delivery or grocery platform enters a new city or launches a new service, first-order codes for that location are usually very generous. If a platform is new to your city, check here before your first order.",
            },
            {
              title: "Monsoon season",
              desc: "Grocery delivery demand spikes during monsoon months as fewer people want to go out. Platforms respond with delivery-fee waivers and platform codes to keep order volumes steady. This is a reliable window for free delivery codes specifically.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
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

        <div className="mt-5 p-4 bg-[#F0FDF4] border border-[#22C55E]/30 rounded-2xl">
          <p className="text-xs text-[#15803D] font-semibold leading-relaxed">
            Check this page before every food or grocery order — the refresh cycle here is faster than any other category on CouponsCrew.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Smart Saver Tactics
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Food &amp; Grocery Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Coupon codes are one part of the picture. Here are other ways to consistently pay less on food and grocery orders:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Build a platform membership into your budget",
              desc: "If you order food or groceries from the same platform more than a few times a month, their paid membership almost always pays for itself. Reduced delivery fees, member prices, and exclusive codes add up faster than you would expect. Look for discounted membership codes on this page before buying at full price.",
            },
            {
              title: "Order during off-peak hours",
              desc: "Delivery charges on food apps are sometimes higher during peak demand. Ordering slightly outside the main lunch and dinner rush can bring the base delivery fee down before a code is even applied.",
            },
            {
              title: "Use cashback wallet credit before it expires",
              desc: "Cashback from grocery platforms goes into a wallet and has an expiry window. Set a reminder to use it before it lapses — it is money you have already earned.",
            },
            {
              title: "Stack codes with bank cashback offers",
              desc: "On most food and grocery platforms, a promo code and a bank cashback offer are processed independently. Using an eligible card alongside a platform code is the single most effective way to maximise savings per order.",
            },
            {
              title: "Schedule grocery orders in advance",
              desc: "Quick commerce and grocery platforms often give better prices or waive delivery fees on orders scheduled hours or days in advance versus instant-delivery orders. If you are not in a rush, scheduling pays off.",
            },
            {
              title: "Check restaurant-specific deals on food apps",
              desc: "Beyond platform-wide codes, individual restaurants on food delivery apps run their own discounts — flat-fee deals, free item offers, combo pricing. These do not require a coupon code and are visible directly on the restaurant listing.",
            },
            {
              title: "Consolidate small orders into fewer larger ones",
              desc: "Delivery fees hit hardest on small orders. Combining a few days of grocery needs into one larger order avoids multiple delivery charges and makes flat-discount codes easier to hit the minimum order value on.",
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
              q: "Do food delivery coupon codes work for existing users?",
              a: "Some do and some do not. Many of the highest-value food delivery codes are first-order or new-user only. Existing user codes are smaller but they refresh frequently. The label on every code listed here specifies whether it is new user only or open to all — check before you apply.",
            },
            {
              q: "Can I stack a food coupon code with a bank cashback offer?",
              a: "On most food delivery and grocery platforms, yes. A platform promo code and a bank card cashback offer are processed separately, which means both can apply on the same order. This combination gives the best per-order saving.",
            },
            {
              q: "How often are food and grocery coupon codes updated on CouponsCrew?",
              a: "More often than any other category on this page. Food delivery codes in particular can change multiple times a day. Checking this page just before you order rather than saving a code from an earlier session is the right habit here.",
            },
            {
              q: "Why did my grocery coupon code not work?",
              a: "The most common reasons: the code has expired, you have already used it and it is single-use, your cart does not meet the minimum order value, or the code is restricted to a specific product category or delivery slot. The terms on each code here spell out these conditions — read them before you start adding to cart.",
            },
            {
              q: "Do food coupon codes work on all restaurants?",
              a: "Not always. Platform-wide food delivery codes apply broadly, but some codes are restricted to specific restaurant partners, cuisine types, or ordering channels. The restrictions are listed on each code — check before ordering from a restaurant you are not sure about.",
            },
            {
              q: "Are there grocery coupon codes for scheduled delivery slots?",
              a: "Some grocery platforms offer better prices or delivery-fee waivers on pre-scheduled orders versus instant delivery. These are platform-specific and we flag them when they are active alongside standard promo codes.",
            },
            {
              q: "Do food and grocery platforms have membership programmes worth using?",
              a: "Most major platforms have paid membership options that pay for themselves quickly if you order regularly. Discounted or free trial membership codes are listed on this page when available — using one of those to start the membership at a lower rate is worth checking before subscribing at full price.",
            },
            {
              q: "What is the best way to save on quick commerce grocery orders?",
              a: "Stack a platform discount code with a bank cashback offer, pay with the eligible card, and — if delivery is not urgent — schedule the order rather than selecting instant delivery. These three steps together give the strongest combined saving on a quick commerce order.",
            },
            {
              q: "Can I use grocery coupon codes on subscription boxes or meal kits?",
              a: "Meal kit platforms typically have their own first-box codes that are separate from grocery platform codes. These are listed separately on this page and apply only to the specific service they are issued by.",
            },
            {
              q: "Do food and grocery coupon codes expire quickly?",
              a: "Yes — faster than almost any other category. Food delivery codes in particular can go live and expire within hours during promotional windows. Using a code on the day you find it rather than saving it for later is always the safer approach.",
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
          Start Saving on Every Food and Grocery Order
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            You are placing food and grocery orders regularly — there is no reason to place a single one without checking for a working code first. CouponsCrew keeps this page updated with the latest verified food coupon codes, grocery discount codes, and food delivery promo codes across all major platforms.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every order, bookmark this page, and make every delivery count.
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
          Top Food &amp; Grocery Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Food Delivery", tag: "Meals & Dining" },
            { brand: "Quick Commerce", tag: "10-Min Delivery" },
            { brand: "Weekly Groceries", tag: "Pantry & Fresh" },
            { brand: "Meal Kits", tag: "Subscription Boxes" },
            { brand: "Memberships", tag: "Free Delivery Passes" },
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
          Pro Savings Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Stack &amp; Save
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine platform promo codes with bank card cashback and scheduled slot pricing.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Fast Expiry Alert
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Food codes refresh rapidly throughout the day — use active deals as soon as you find them.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Instant Savings</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official App Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified code here and apply directly on the merchant's official food or grocery app at checkout.
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
