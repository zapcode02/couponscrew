'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,Clock,CheckCircle2, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, Sparkles, Package, RefreshCw, Lock, HelpCircle
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';
import { STORES_DATA } from '../../../../../src/data/stores';

const OTHER_CATEGORIES = [
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Exercise & Fitness', slug: 'exercise-and-fitness' },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen' },
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Food & Grocery', slug: 'food-and-grocery' },
  { name: 'Travel', slug: 'travel' },
  { name: 'Education', slug: 'education' },
  { name: 'Entertainment', slug: 'entertainment' },
  { name: 'Finance', slug: 'finance' },
  { name: 'Web Hosting', slug: 'web-hosting' },
  { name: 'Health', slug: 'health' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Software', slug: 'software' },
  { name: 'Jewellery', slug: 'jewellery' },
  { name: 'Eyewear', slug: 'eyewear' },
  { name: 'Furniture', slug: 'furniture' },
];

export default function GamingCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Gaming')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Check digital storefront sale events', desc: 'Digital storefronts run periodic sale events with steep price cuts on game titles. Pairing an active coupon code with one of these windows usually beats buying at full price on a random weekday.' },
    { title: 'Compare bundle pricing on accessories', desc: 'Controllers, headsets, and other accessories are often sold in bundles. Compare the bundle price against buying items separately with a coupon code applied — the cheaper route changes depending on the offer.' },
    { title: 'Look for regional pricing differences on digital codes carefully', desc: 'Digital gift cards and in-game currency codes can be priced differently depending on region and platform. Always confirm the code is valid for your account region before completing a purchase.' },
    { title: 'Check subscription renewal pricing before it auto-renews', desc: 'Gaming subscriptions often auto-renew at a different rate than the introductory offer. Check the renewal price and look for a fresh coupon code before the next billing cycle hits.' },
    { title: 'Time big purchases around console and PC sale windows', desc: 'Hardware and high-value accessory purchases tend to see the deepest discounts during major seasonal sale windows. Waiting for one of these periods, then applying a coupon code on top, typically saves more than buying on impulse.' },
  ];

  const faqs = [
    {
      q: 'Are the gaming coupon codes on CouponsCrew verified?',
      a: 'Yes. Every gaming coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a gaming coupon code?',
      a: 'Copy the code from CouponsCrew, add the game or accessory to your cart on the retailer’s site, app, or digital storefront, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple gaming coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are gaming coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there gaming coupon codes for new users?',
      a: 'Yes, many gaming platforms and storefronts offer first-order discounts. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do gaming coupon codes work on digital purchases like in-game currency?',
      a: 'It depends on the store. Some codes apply only to physical products or hardware, while others are valid on digital purchases like in-game currency or subscriptions. The terms shown with each code indicate where it applies.',
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
              <span className="text-[#22C55E] font-semibold">Gaming</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Gaming</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
             Browse gaming coupon codes, discount codes, and promo codes for popular games, gaming platforms, subscriptions, gift cards, in-game currency, consoles, accessories, and digital content. Discover verified discounts, exclusive gaming deals, and savings from top gaming brands and stores. 
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091237/gaming_bcbf8k.webp"
                alt="Gaming"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Gaming Stores ({categoryStores.length})</h2>
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Products', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Gaming Deals', desc: 'Get the biggest discounts' },
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
            Gaming &amp; Entertainment Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Gaming Coupon Codes – Save on Games, Consoles, and Subscriptions
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Gaming is one of the few entertainment categories where the cost of staying current adds up faster than most buyers plan for. New game releases, console accessories, subscription passes, in-game currency, and gaming peripheral upgrades all land with price tags that feel optional to discount — until you realise that working coupon codes, cashback offers, and platform sale events are a consistent part of how gaming platforms compete for every buyer.
          </p>
          <p>
            CouponsCrew tracks and verifies gaming coupon codes daily across game purchases, console hardware and accessories, gaming subscriptions, in-game currency, PC gaming platforms, mobile gaming, and gaming peripherals. Whether you are a console gamer, a PC enthusiast, or a mobile player, this page brings together the best gaming discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
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
      Why Use Gaming Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Gaming spending is easy to underestimate because it fragments across so many purchase types. A game here, a subscription there, an accessory upgrade once in a while, in-game currency top-ups that feel small individually. Across a year, gaming is one of the higher-spend entertainment categories for regular players — and each of those purchase types has its own code cycle.
      </p>
      <p>
        The challenge is that gaming codes are scattered across platform newsletters, social media drops, streamer-linked promotions, and time-limited flash events. The best codes in gaming are often live for hours rather than days — and missing a launch-window game code or a limited-time subscription offer means paying full price for something that was discounted for a short window you did not know about.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to fix that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Purchase type tagging</strong> — Every gaming coupon code is tagged by type: game purchases, subscriptions, in-game currency, hardware, or peripherals — so you find what applies to your situation without filtering through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Platform coverage</strong> — Gaming codes are tracked across console storefronts, PC gaming platforms, mobile gaming apps, and direct publisher stores</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Launch window tracking</strong> — New game release codes and console launch offers are flagged when active — these are the fastest-moving codes in the category</span>
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
      How to Use a Gaming Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process varies slightly across console storefronts, PC platforms, and mobile gaming apps — but the core steps are consistent:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the gaming coupon codes on this page. Check the platform and purchase type the code is for — console storefront codes, PC platform codes, and mobile gaming codes are applied differently.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the gaming platform or storefront the code is for. Find the game, subscription, or accessory you are buying and add it to your cart or reach the purchase screen.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find the promo code field</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">On console storefronts, the promo or voucher code field is typically in the account or wallet section rather than at standard checkout. On PC gaming platforms and mobile stores, it usually appears on the cart or payment page.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the gaming discount code and apply it. Your discounted price or wallet credit reflects before you complete the purchase.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm and complete</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Review the final price before confirming. Gaming purchases — particularly digital game licences and in-game currency — are non-refundable on most platforms once redeemed.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Console storefront codes and PC platform codes are not interchangeable — a code issued for one platform does not work on another. Always confirm the platform the code is for before copying. Applying a PlayStation code to an Xbox account, or a Steam code to an Epic Games cart, will fail at redemption.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Gaming Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Gaming platforms offer a wider range of deal structures than most retail categories because of the variety of what is being purchased. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Game purchase discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that reduce the price of a game at checkout on a specific storefront or publisher site. These are the most straightforward type in gaming — the saving applies directly to the game price. Launch-window codes appear briefly when a new title releases; back-catalogue codes on older titles are more consistently available.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Subscription plan codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes for gaming subscription services — monthly or annual pass codes that reduce the subscription fee for new subscribers. These are some of the highest-value codes in gaming given that a subscription unlocks access to a library of games rather than a single title.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">In-game currency codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that add bonus in-game currency on top of a currency pack purchase, or reduce the price of a currency pack directly. These are game-specific and only valid within the game they are issued for.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Console and hardware codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on console bundles, standalone hardware purchases, or limited-edition console releases. These are rarer than digital codes but appear during major console launch windows and festive sale events.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gaming peripheral codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on controllers, headsets, gaming keyboards, mice, monitors, and chairs. Peripheral codes are more consistently available than hardware codes and tend to be percentage-based on specific product ranges.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Pre-order discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that reduce the price of a game pre-order. Some publishers and storefronts offer pre-order codes as incentives for committing to a purchase before release — these come with the risk that the game may not meet expectations, so they are best used on titles from publishers with a strong track record.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Mobile gaming top-up codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that add bonus currency or gems on top of a mobile game top-up purchase. These are game-specific and some of the fastest-expiring codes in the category — mobile gaming promotions often run for hours or tied to specific in-game events.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bundle codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when purchasing a game bundle — multiple titles together at a lower combined price than individual purchases. Bundle codes appear during platform sale events and are one of the best ways to expand a game library at low cost per title.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Referral and invite codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Gaming platforms and some multiplayer titles offer referral codes where both the new user and the existing player receive a benefit — in-game currency, a free trial, or a discount on a first purchase.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Gaming by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Gaming covers very different purchase types across platforms. Here is how codes work across each major subcategory.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Console Gaming</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Console gaming codes span game purchases, subscription services, and hardware. Digital game codes on console storefronts are platform-locked — once redeemed on a platform account, they cannot be transferred. Subscription codes for console gaming passes unlock access to a rotating game library and are some of the best-value codes in this subcategory when applied to annual plans. Console hardware codes appear during launch windows and major sale events — rare but worth checking here before buying a console or bundle at full price.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">PC Gaming</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">PC gaming platforms are the most competitive digital storefront category for coupon codes. Multiple storefronts compete for the same game titles with different pricing, regional variations, and promotional code cycles. Publisher-direct codes occasionally deliver better prices than storefront codes on the same title — worth checking both before buying. Annual sale events on major PC gaming platforms are among the most significant discount windows in gaming each year, and checking this page in the lead-up to those events gives you early access to verified codes as they go live.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Mobile Gaming</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Mobile gaming codes cover in-game currency top-ups, starter pack codes, and first-purchase codes on gaming apps. These are the fastest-moving codes in the category — mobile gaming promotions are often tied to in-game events with tight expiry windows. Checking this page just before a planned top-up rather than in general is the right habit here. Starter pack codes for new players on popular mobile titles appear regularly and are worth using on your first purchase rather than buying at standard pricing.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gaming Subscriptions and Passes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Gaming subscription codes are where the category's highest-value savings are. A subscription pass that unlocks access to a library of games at a discounted annual rate — with a first-month or first-year code applied — delivers more per-rupee value than almost any single game purchase code. New subscriber codes on major gaming pass services are listed on this page when active and are worth checking before subscribing at full price.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gaming Peripherals and Accessories</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Peripheral codes — covering controllers, headsets, keyboards, mice, and gaming chairs — follow a retail discount calendar more than a gaming-specific one. Black Friday and major festive sale events are when the strongest peripheral codes are available. New product launch codes appear on previous-generation peripherals when updated models release, similar to the pattern in consumer electronics.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">PC Hardware and Components</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Graphics cards, processors, RAM, and gaming laptop codes are the highest-value codes in the gaming category in absolute terms, given the price of PC components. These follow a similar pattern to consumer electronics — launch windows push codes on previous-generation components, and Black Friday brings the deepest platform-wide discounts of the year. Checking this page before any PC component purchase is worth doing regardless of timing.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Gaming Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Gaming Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Gaming has its own distinct discount calendar — partly tied to the broader retail sale calendar and partly to the game release and platform event cycles that are specific to gaming.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New game launch windows",
              desc: "Game publishers push codes in the days around a major new title release — both on the new title itself and, more generously, on back-catalogue titles to capture attention during the launch window. Launch-week codes are among the fastest-expiring in gaming.",
            },
            {
              title: "Gaming platform annual sale events",
              desc: "Major PC gaming platforms run well-known annual sale events that have become reliable discount windows across their full game catalogues. These are among the most significant gaming discount periods of the year — checking this page before these events captures verified codes as they go live.",
            },
            {
              title: "Black Friday and Cyber Monday",
              desc: "Gaming peripherals, console hardware, physical game copies, and subscription passes all see their strongest codes of the year during Black Friday. This is the single most important annual window for gaming hardware and peripheral codes specifically.",
            },
            {
              title: "Console generation transitions",
              desc: "When a new console generation launches, codes on previous-generation hardware and games drop significantly. If you are not committed to the latest hardware, buying one generation behind during a transition window consistently delivers strong value.",
            },
            {
              title: "In-game event windows",
              desc: "Live service games and mobile titles run in-game events with time-limited currency top-up codes and purchase bonuses. These are game-specific and only available during the event period — checking this page when a major in-game event is announced captures these before they expire.",
            },
            {
              title: "Festive sale periods",
              desc: "Diwali and major festive windows bring gaming codes across console storefronts, PC platforms, and mobile gaming apps. Console game bundles and gaming subscription codes are particularly active during festive periods.",
            },
            {
              title: "Mid-year platform events",
              desc: "Gaming platform showcase events — held typically in summer — coincide with game announcement cycles and push promotional codes on newly announced and existing titles. Checking this page around major gaming showcase windows captures codes tied to these announcements.",
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
            Bookmark this page and check it before every gaming purchase — gaming codes move faster than almost any other category, and launch-window codes in particular expire within days of going live.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Gamer Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Gaming Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of keeping gaming costs manageable. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Buy subscriptions over individual games where your library allows",
              desc: "If a gaming subscription service includes titles you would otherwise buy individually, the maths on a discounted annual subscription almost always works in your favour. Calculating how many individual game purchases the subscription replaces before buying confirms the value before you commit.",
            },
            {
              title: "Wait for back-catalogue pricing on single-player games",
              desc: "Single-player games that are not online-dependent hold their full experience regardless of when you play them. Waiting six to twelve months after release — when launch premium drops and back-catalogue codes appear — is a consistent strategy for paying significantly less on titles that do not require day-one access.",
            },
            {
              title: "Use wishlists and price tracking on PC platforms",
              desc: "Major PC gaming storefronts have wishlist features that notify you when a wishlisted game goes on sale. Adding titles to your wishlist rather than buying immediately — and checking this page for a code when you get the sale notification — gives you the best combined outcome.",
            },
            {
              title: "Compare storefronts before buying digital games",
              desc: "The same game title can be priced differently across storefronts on the same day. Checking the price on multiple authorised platforms before applying a code from this page ensures you are discounting from the lower base price.",
            },
            {
              title: "Do not buy in-game currency during bonus events alone",
              desc: "In-game currency bonus events are designed to create urgency. Before topping up during a bonus event, check this page for a currency code that may deliver a better deal than the event bonus alone — or stack both if the platform allows it.",
            },
            {
              title: "Check regional pricing where available",
              desc: "Some PC gaming platforms allow purchases in different regional pricing tiers depending on your payment method and location. Where this is available and permitted by the platform's terms, regional pricing can significantly reduce the base cost before a coupon code is applied.",
            },
            {
              title: "Factor in resale value for physical games",
              desc: "Physical game copies can be sold or traded in after you finish them — digital licences generally cannot. For single-player titles you plan to play once, the effective cost of a physical copy minus its resale value is sometimes lower than a discounted digital code, particularly on console platforms.",
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
              q: "Do gaming coupon codes work across all platforms?",
              a: "No. Gaming codes are platform-specific — a code issued for one storefront or console does not work on another. The platform tag on each code listed here confirms which storefront or console it applies to. Always verify before copying.",
            },
            {
              q: "Can I use a gaming subscription code if I am already a subscriber?",
              a: "Most gaming subscription codes are for new subscribers only. Existing subscriber codes appear during platform promotional windows and are listed separately on this page when active. If you are approaching a renewal, checking this page before your subscription auto-renews is worth doing.",
            },
            {
              q: "How quickly do gaming coupon codes expire?",
              a: "Faster than almost any other category. Launch-window game codes and mobile gaming event codes can expire within hours. In-game event codes are particularly time-sensitive. Time-sensitive codes are flagged on this page — use them the day you find them.",
            },
            {
              q: "Are pre-order discount codes worth using?",
              a: "Pre-order codes deliver savings in exchange for committing to a purchase before a game releases. They are worth using on titles from publishers with a strong track record of delivering what they announce. For new studios or heavily marketed games with limited pre-release information, waiting for launch reviews before buying — even at a higher post-launch price — is the lower-risk approach.",
            },
            {
              q: "Do in-game currency codes work on all games?",
              a: "No. In-game currency codes are specific to the game they are issued for and cannot be transferred to another title. The game and platform are listed on each currency code on this page — check both before applying.",
            },
            {
              q: "Is it safe to buy gaming codes from CouponsCrew?",
              a: "Every code on this page is sourced from verified platform promotions, publisher offers, and authorised storefront sales. CouponsCrew does not list codes from unverified grey-market sources. Purchasing via a verified code from an authorised storefront gives you a legitimate licence with full platform support.",
            },
            {
              q: "What is the best time to buy gaming peripherals at the lowest price?",
              a: "Black Friday is the strongest annual window for gaming peripheral codes — controllers, headsets, keyboards, and mice all see their deepest discounts during this period. New product launch windows — when updated models release and previous-generation peripherals drop in price — are the second-best moment for peripheral codes.",
            },
            {
              q: "Do gaming bundle codes apply to all games in the bundle?",
              a: "Bundle codes typically apply to the full bundle as a single purchase. Individual game codes within a bundle are separate — check whether the bundle code or an individual title code delivers better savings on the specific games you want before deciding which to apply.",
            },
            {
              q: "Are there gaming coupon codes for mobile games specifically?",
              a: "Yes. Mobile gaming top-up codes, starter pack codes, and first-purchase codes are listed on this page when active and tagged as mobile-specific. These are the fastest-moving codes in the category — checking this page before a planned top-up rather than saving a code for later is the right approach.",
            },
            {
              q: "Do gaming subscription annual plan codes deliver better value than monthly codes?",
              a: "Almost always yes. Annual gaming subscription codes deliver a lower effective monthly rate than monthly plan codes, and the saving compounds over the full year. If you are planning to use a gaming subscription for more than a few months, the annual plan with a code applied is consistently the better financial decision.",
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
          Start Saving on Every Gaming Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every game you buy, every subscription you start, and every peripheral you upgrade is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified gaming coupon codes, gaming discount codes, and gaming promo codes across console games, PC gaming, mobile gaming, subscriptions, in-game currency, hardware, and peripherals.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every gaming purchase, bookmark this page, and make sure no deal on your next session passes you by.
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
          Top Gaming Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { category: "PC & Storefronts", tag: "Seasonal Sales" },
            { category: "Console Hardware", tag: "Bundle Offers" },
            { category: "Gaming Passes", tag: "Annual Discounts" },
            { category: "In-Game Currency", tag: "Event Top-Ups" },
            { category: "Peripherals & Gear", tag: "Hardware Promos" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
              <span className="text-xs text-[#1A1A2E] font-bold">{row.category}</span>
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
          Smart Gaming Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Prioritize Subscriptions
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine annual pass rates with working promo codes to access broad libraries for less.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Track Back-Catalogues
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Wait 6–12 months on single-player titles to stack publisher drops with coupon codes.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Instant Redemption</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Storefront Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified gaming promo code here and enter it directly on your console or platform checkout page.
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
