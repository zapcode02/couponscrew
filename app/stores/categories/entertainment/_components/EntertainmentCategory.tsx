'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp,Lightbulb, CheckCircle2, Clock, ChevronDown, ShieldCheck, Tag, Percent,
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

export default function EntertainmentCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Entertainment')),
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
              <span className="text-[#5B4FBE] font-semibold">Entertainment</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Entertainment</h1>
             <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse the best entertainment coupon codes, discount codes, and promo codes for streaming platforms, movie tickets, gaming, music subscriptions, live events, and digital entertainment. Discover verified savings and exclusive deals from leading entertainment brands and services.
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
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 50%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788085983/entertainment_ncu768.webp"
                alt="Entertainment"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Entertainment Stores ({categoryStores.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deals linked directly to the merchant.</p>
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
                  const isActive = c.name === 'Entertainment';
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Offers', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Entertainment Deals', desc: 'Get the biggest discounts' },
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
            Movies, OTT &amp; Events Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Entertainment Coupon Codes – Save on Movies, OTT, Events, and More
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Entertainment is one category where most people do not think to look for a coupon code — and that is exactly why they end up paying more than they need to. Whether you are booking movie tickets, subscribing to a streaming platform, buying tickets to a live event, or renewing a gaming subscription, discount codes and promo offers are available consistently across all of these. CouponsCrew tracks and verifies entertainment coupon codes daily so you are never paying full price for something you could have saved on.
          </p>
          <p>
            From cinema halls to OTT subscriptions, from live concerts to gaming passes, this page brings together the best entertainment discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
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
      Why Use Entertainment Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Entertainment spending is easy to underestimate because individual purchases feel small. A movie ticket here, a streaming subscription there, a live event ticket once in a while. But across a month — or a year — entertainment is a category where savings from consistent coupon code use add up faster than most people expect.
      </p>
      <p>
        The other thing that makes entertainment codes worth tracking is the variety. Bank offers on movie tickets, first-subscription codes on OTT platforms, early-bird codes on event tickets, and app-exclusive discounts on gaming platforms all behave differently and require different habits to capture reliably.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to make that easier:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Platform and category tags</strong> — Every entertainment coupon code is tagged by type: movies, OTT, events, gaming, or music streaming — so you find what applies without scrolling through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Bank offer coverage</strong> — Movie ticket and event booking platforms have some of the strongest card-linked offers in any category; these are tracked alongside platform codes</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Expiry flagging</strong> — Event-specific and show-specific codes have tight windows; time-sensitive codes are clearly marked</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and apply it directly at checkout or booking</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use an Entertainment Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process varies slightly between movie booking apps, OTT platforms, and event ticketing sites — but the core steps are consistent:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the entertainment coupon codes on this page. Check the platform and entertainment type the code is for before copying.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the movie booking app, streaming service, or event ticketing platform the code is for. Select your movie, subscription plan, or event ticket.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the payment screen</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on movie booking apps this usually appears after you select your seats, and on OTT platforms it appears during the subscription checkout flow.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the entertainment discount code and apply it. Your discounted price reflects before you confirm the booking or subscription.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Complete payment</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a bank cashback offer applies on movie or event tickets, pay with the eligible card to stack both savings.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Movie ticket codes and event codes are often show-specific, day-specific, or screen-type specific. A code valid for a Tuesday afternoon show may not apply to a Friday night premiere. Read the terms before you select your seats — not after.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Entertainment Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Entertainment platforms run a wider range of offer structures than most categories because the purchase types are so different. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Movie ticket booking is the single strongest category for bank card offers in entertainment. Specific credit and debit cards unlock flat discounts or cashback on every eligible booking — not just first bookings. If you book movies regularly, knowing which card gives the best offer on your preferred booking platform is worth the one-time check.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First subscription codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on OTT and music streaming platforms are among the highest-value codes in this category. These tend to apply only to the first billing cycle but can significantly reduce the cost of trying a platform you are not yet committed to.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on subscription fees, event ticket prices, or gaming passes. Common during platform anniversary events and festive periods.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off a booking or subscription when it crosses a minimum value. More common on event ticketing platforms and gaming subscription bundles than on individual movie bookings.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">App-exclusive codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discounts available only when booking through the platform's mobile app. Most major movie booking and event ticketing platforms have app-only pricing or additional codes that are not available on desktop.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Buy-one-get-one offers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">BOGO deals on movie tickets are one of the most popular offer types in entertainment — specific bank cards and platform codes unlock these on select days of the week or during promotional windows. Worth checking if you regularly watch films with a partner or friend.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Annual subscription codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when subscribing to an OTT or music streaming service on an annual plan rather than monthly. Annual plan codes typically deliver a lower per-month cost than any monthly discount code.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Event early-bird codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Advance booking codes on concerts, comedy shows, sporting events, and live performances. These are available before general sale opens and deliver the best prices on high-demand events.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0] md:col-span-2">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gaming and pass codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on gaming platform subscriptions, in-game currency packs, or gaming pass bundles. These refresh frequently, particularly around major game releases and gaming platform sale events.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Entertainment by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Entertainment is one of the broadest category umbrellas in online spending. Codes behave very differently depending on which type of entertainment you are buying.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Movie Ticket Bookings</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Movie ticket bookings are where bank card offers do the most work in entertainment. Platform codes exist but the most consistent savings come from knowing which card unlocks a flat discount or buy-one-get-one offer on your preferred booking app. These offers refresh by week and sometimes by show — checking this page before you book a specific film rather than in general gives you the most relevant code at the right moment.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">OTT and Video Streaming Subscriptions</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Streaming platforms compete aggressively for new subscribers, which means first-subscription codes are consistently available. Existing subscriber codes appear around renewal windows and festive periods. Annual plan codes are the most valuable type here — the per-month saving on an annual plan with a code applied almost always beats a discounted monthly plan. If you are subscribing to a new platform, check this page before you enter payment details.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Music Streaming</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Music streaming platforms run new user codes and annual plan discounts similar to OTT platforms. Student-specific codes also appear on several major music streaming services — worth checking if you are in college or university. Family plan codes are another strong offer type here, splitting the cost across multiple users while each gets individual access.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Live Events, Concerts, and Comedy Shows</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Event ticketing is where early-bird codes matter most. High-demand events sell out fast and prices rise as the date approaches — securing a code during the early-bird window is the only reliable way to get both a good seat and a good price. Flash sale codes on unsold event inventory also appear closer to event dates, but seat selection at that point is limited.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sports Events and Tournaments</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Sports event codes follow the fixture calendar. Major tournament matches and finals attract the strongest codes as platforms push for bookings. League games and group stage matches tend to have more consistent code availability than knockout rounds where demand spikes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gaming Subscriptions and Passes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Gaming platform subscription codes — for annual or multi-month passes — refresh around major game release windows and gaming-specific sale periods. In-game currency and DLC codes appear less predictably but are listed here when verified offers are available. Checking this page before renewing a gaming subscription is worth building into your renewal reminder.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Amusement Parks and Experiences</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Theme parks, escape rooms, and experience-based entertainment platforms run codes around school holidays, long weekends, and off-peak periods to drive bookings. Off-peak day codes on amusement parks in particular tend to be strong — the discount is larger precisely because the platform wants to distribute footfall away from peak weekend crowds.</p>
      </div>
    </div>
  </div>
</div>


      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Entertainment Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Entertainment Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Entertainment codes follow a mix of calendar events and platform-specific sale windows. Here is when the best codes are typically available:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New OTT content drops and platform launches",
              desc: "When a major streaming platform releases a high-profile series or launches a new service, subscription codes go live to convert curious viewers into paying subscribers. These windows are short — a few days around the release — but the codes are strong.",
            },
            {
              title: "Festive periods",
              desc: "Diwali, Eid, and Christmas bring OTT platform offers, movie ticket deals, and event-specific codes. Annual subscription codes on streaming platforms are particularly common during festive sale windows.",
            },
            {
              title: "Long weekends and public holidays",
              desc: "Movie halls and event venues fill up on long weekends — which means booking platforms push codes in the days before to drive advance bookings. Planning your long weekend entertainment a few days early and checking this page before you book captures these codes before they expire.",
            },
            {
              title: "Monday and Tuesday movie offers",
              desc: "Many movie booking platforms and bank card offers are specifically valid on weekdays — Monday and Tuesday in particular — to drive bookings on lower-demand days. These are consistent weekly offers, not one-time events. If your schedule allows weekday movie watching, these are reliable codes to use every week.",
            },
            {
              title: "Gaming sale events",
              desc: "Major gaming platforms run annual or bi-annual sale events with deep discounts on subscription passes and game bundles. These are the strongest windows for gaming codes of the year.",
            },
            {
              title: "Year-end and new year",
              desc: "The December–January window brings OTT platform year-end offers and new year subscription deals. Annual plan codes during this period are worth looking out for specifically — platforms push hard to capture subscribers before the new year.",
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
            Bookmark this page and check it before every movie booking, subscription renewal, or event ticket purchase — entertainment codes move fast and the right code at the right moment costs nothing to use.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Entertainment Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Entertainment Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code gets you part of the way. These habits do the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Know your bank card's movie offer",
              desc: "If you book movies more than once a month, knowing which of your cards gives the best deal on your preferred booking app is worth a one-time check. Bank card movie offers are not one-time — they apply on every eligible booking and can add up to a significant annual saving.",
            },
            {
              title: "Choose annual OTT plans over monthly",
              desc: "Monthly OTT plans are convenient but expensive per month relative to annual plans. An annual plan code applied at subscription time delivers the lowest per-month cost. If you have been on monthly for more than a few months, switching to annual with a code is worth calculating.",
            },
            {
              title: "Book events early",
              desc: "Early-bird codes on concerts and live events give you better seats and better prices simultaneously. Waiting for last-minute availability means paying more for worse seats — or missing the event entirely if it sells out.",
            },
            {
              title: "Use family and group plans where they exist",
              desc: "OTT and music streaming platforms with family or group plans split the cost across multiple users while each gets individual access. A family plan code costs less per person than individual subscriptions with codes — worth coordinating with household members.",
            },
            {
              title: "Check app-only prices before booking on desktop",
              desc: "Most movie and event booking platforms show lower prices or exclusive codes on their apps. Check the app price before assuming desktop checkout is your only option.",
            },
            {
              title: "Set renewal reminders for OTT subscriptions",
              desc: "Subscription renewals happen automatically on most platforms. Setting a reminder a few days before your renewal date gives you time to find a code — many OTT renewal codes are available but only useful if you find them before the charge goes through.",
            },
            {
              title: "Combine streaming subscriptions with telecom or bank bundles",
              desc: "Several telecom providers and credit card issuers bundle OTT subscriptions at no extra cost or at a discounted rate. Before paying for a streaming subscription directly, check whether your phone plan or card offers it as part of an existing benefit.",
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
              q: "Do movie ticket coupon codes work on all films and shows?",
              a: "Not always. Some entertainment discount codes are restricted to specific films, screen types, or show timings. Bank card offers in particular often have day-of-week restrictions. The terms on each code listed here specify these conditions — check before you select your seats.",
            },
            {
              q: "Can I use an entertainment coupon code with a bank card offer?",
              a: "On most movie and event booking platforms, yes. A platform promo code and a bank card offer are processed independently and can both apply on the same booking. This combination is where the strongest per-ticket savings come from.",
            },
            {
              q: "How often are entertainment coupon codes updated on CouponsCrew?",
              a: "Daily. OTT and movie codes in particular can change on a weekly cycle tied to new releases and platform promotions. Checking this page before each booking or subscription rather than relying on a saved code from an earlier visit is the right approach.",
            },
            {
              q: "Why did my OTT subscription code not work at checkout?",
              a: "The most common reasons: the code has expired, you are an existing subscriber rather than a new user, the code applies to a specific plan tier you are not selecting, or the code is for a different region. Check the terms listed on the code and confirm your account status before retrying.",
            },
            {
              q: "Are there entertainment coupon codes for existing subscribers?",
              a: "Yes. Existing subscriber codes on OTT platforms appear around renewal windows, festive periods, and annual plan upgrade offers. They are smaller than new user codes but worth checking at renewal time — applying a code at renewal is one of the most straightforward savings opportunities in this category.",
            },
            {
              q: "Do buy-one-get-one movie offers require a specific bank card?",
              a: "Most BOGO movie offers are tied to specific bank credit or debit cards rather than being open platform codes. The card requirement is listed clearly on each offer on this page. If you do not have the eligible card, check whether a standard platform code is available for the same booking instead.",
            },
            {
              q: "What is the best way to save on OTT subscriptions long-term?",
              a: "Subscribe on an annual plan with a code applied at signup. Check whether your telecom provider or bank card bundles the subscription at a lower rate. Set a renewal reminder and find a code before the next billing cycle rather than letting it auto-renew at full price.",
            },
            {
              q: "Do gaming subscription codes work on all platforms?",
              a: "Gaming codes listed on this page are platform-specific and tagged accordingly. A code for one gaming subscription service does not transfer to another. Check that the code matches your specific platform before applying.",
            },
            {
              q: "Are there student discounts available on entertainment platforms?",
              a: "Several OTT and music streaming platforms offer student-specific pricing or codes. These require verification of student status but can deliver strong ongoing discounts on annual plans. Student codes are listed on this page when verified offers are available.",
            },
            {
              q: "Do event ticket codes work on sold-out shows?",
              a: "No. Promo codes apply to available inventory — once a show or event is sold out, codes have no effect. For high-demand events, booking early with an early-bird code is the only reliable way to get both good seats and a good price.",
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
          Start Saving on Every Entertainment Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every movie you book, every subscription you start, and every event ticket you buy is an opportunity to pay less. CouponsCrew keeps this page updated with the latest verified entertainment coupon codes, entertainment discount codes, and entertainment promo codes across movies, OTT platforms, live events, gaming, and music streaming.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every booking, bookmark this page, and make every entertainment rupee go further.
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
          Top Entertainment Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Movie Tickets", tag: "BOGO & Bank Cards" },
            { brand: "OTT Subscriptions", tag: "Annual Discount" },
            { brand: "Concerts & Events", tag: "Early Bird Deals" },
            { brand: "Gaming Passes", tag: "Seasonal Sales" },
            { brand: "Music Streaming", tag: "Student & Family" },
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
          Pro Viewer Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Stack Bank + App Offers
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine promo codes with eligible debit/credit card BOGO deals on movie tickets.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Telecom OTT Bundles
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Check your mobile or broadband plans before paying for individual OTT subscriptions.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Booking Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified code here and apply directly on the ticketing platform or OTT provider's official portal at checkout.
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
