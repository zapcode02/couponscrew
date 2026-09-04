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

export default function TravelCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Travel')),
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
              <span className="text-[#5B4FBE] font-semibold">Travel</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Travel</h1>
             <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse travel coupon codes, discount codes, and promo codes for flights, hotels, holiday packages, buses, trains, car rentals, travel insurance, airport services, eSIMs, and more. Find verified savings and exclusive travel deals from leading travel brands and booking platforms.
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
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 25%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788085983/travel_pgz9yv.webp"
                alt="Travel"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Travel Stores ({categoryStores.length})</h2>
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
                  const isActive = c.name === 'Travel';
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Bookings', desc: 'We verify all offers before listing' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Travel Deals', desc: 'Get the biggest discounts' },
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
            Travel &amp; Getaways Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Travel Coupon Codes – Save on Flights, Hotels, and Every Trip
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Planning a trip and paying full price for it is a choice, not a necessity. Travel is one of the highest-value categories where a working coupon code can save you more in a single booking than most other categories combined across an entire month. Flight fares, hotel rates, and cab bookings all fluctuate constantly — and platforms compete hard for every booking, which means travel discount codes and promo codes are available more consistently than most travellers realise.
          </p>
          <p>
            CouponsCrew tracks and verifies travel coupon codes across flights, hotels, holiday packages, bus bookings, and cab services daily. Whether you are booking a last-minute weekend trip or planning a holiday months out, this page keeps you covered with tested codes that actually work at checkout.
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
      Why Use Travel Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Travel bookings are high-stakes purchases. A flight or hotel booking is not something you undo easily — and the window between finding a good fare and losing it to a price jump can be minutes. That is exactly why having a verified travel coupon code ready before you start the booking process matters more here than in almost any other category.
      </p>
      <p>
        The common frustration with travel codes is that many are outdated the moment they circulate. Airline and hotel promo codes have tight expiry windows, user restrictions, and route or city limitations that make them fail more often than codes in other categories. CouponsCrew addresses this directly:
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is how CouponsCrew handles that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Route and platform specificity</strong> — Travel codes are tagged by type: flights, hotels, cabs, buses, or holiday packages, so you know what you are applying before you reach payment</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every travel discount code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Bank offer tracking</strong> — Travel is one of the categories where credit card cashback codes stack best with platform codes; we track and list both</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Fast expiry alerts</strong> — Time-sensitive codes are flagged clearly so you know to use them the same day</span>
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
      How to Use a Travel Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The booking flow varies slightly across flight, hotel, and cab platforms, but the coupon code step is consistent:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the travel coupon codes on this page. Check whether the code is for flights, hotels, cabs, or buses — and confirm it matches the platform you are booking on.</p>
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
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Start your booking</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the travel platform the code is for. Search for your flight, hotel, or cab as you normally would.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the payment screen</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Most travel platforms have a promo code or coupon field on the review or payment page — just before you confirm the booking.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the travel discount code and apply it. Your discount should reflect in the total before you proceed to payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Complete the booking</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a bank cashback offer applies, pay with the eligible card to stack both savings simultaneously.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Travel codes often have per-user limits, minimum booking values, and specific route or city restrictions. Read the terms on the code before you start searching — finding out a code does not apply to your route after you have already found a good fare wastes time you may not have.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Travel Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Travel platforms run a variety of offer types across different booking categories. Here is what to expect on this page:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your total booking value. These work best on high-value bookings — international flights, multi-night hotel stays, or holiday packages where even a moderate percentage saves a meaningful amount.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your booking crosses a minimum value. Common on domestic flight and hotel bookings, and straightforward to use once you confirm your order meets the threshold.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Instant discounts or cashback when paying with a specific credit or debit card. Travel is one of the strongest categories for card-linked offers — many premium credit cards have dedicated travel benefits, and stacking a platform code with a card offer on a flight or hotel booking gives the best combined saving.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New user codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">First-booking discount codes for users signing up on a travel platform for the first time. These tend to be among the highest-value codes available and are worth saving for a planned booking rather than a small test purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">App-exclusive codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discounts available only when booking through the platform's mobile app. Most major travel platforms offer lower base prices on their apps compared to desktop, and app-only codes on top of that extend the saving further.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Hotel-specific codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply only to hotel bookings, sometimes restricted to specific hotel categories, star ratings, or partner properties. Worth checking separately from flight codes if you are booking accommodation independently.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bus and train codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Promo codes on bus ticketing platforms and train booking services. These are smaller in absolute value but consistent — bus booking codes in particular refresh frequently and are worth checking for regular intercity travellers.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Holiday package codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on bundled flight-plus-hotel or tour packages. These tend to have higher minimum booking values but the absolute saving on a full holiday package can be significant.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0] md:col-span-2">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cab and transfer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Airport transfer, outstation cab, and intercity cab booking codes. These platforms run new user codes frequently and have consistent cashback offers for regular travellers.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Travel by Booking Type — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Travel is a broad category. Codes work differently depending on what you are booking. Here is a breakdown by booking type:
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flight Bookings</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Flight codes move the fastest in this category. Airline-specific codes and platform codes both exist — airline codes apply only on direct bookings, while platform codes work across multiple carriers. Domestic flight codes tend to have lower minimum values and fewer restrictions than international ones. For international flights, bank card offers often deliver better savings than standard platform codes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Hotel Bookings</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Hotel codes are more flexible than flight codes — they are less tied to specific dates and more to booking windows or stay durations. Last-minute hotel codes appear frequently on platforms when inventory needs to clear. Early-bird codes reward advance planning with deeper discounts on the same property.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Holiday Packages</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Package codes have higher thresholds but the savings are proportionally strong. Festive season and summer holiday packages attract the deepest codes as platforms compete for family travel bookings. These codes also tend to have longer validity windows than flight or cab codes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bus Ticketing</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Bus booking codes are among the most consistent in the travel category. They refresh regularly, apply broadly across routes, and have lower minimum booking values. For frequent intercity bus travellers, checking this page before every booking rather than once a month pays off.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cab and Airport Transfers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on cab platforms can be very generous on first bookings. Existing user codes are smaller but appear regularly — especially cashback offers tied to specific payment methods. For airport transfers specifically, pre-booking with a promo code almost always beats booking on arrival.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Homestays and Alternate Accommodation</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Homestay and vacation rental platforms run codes around long weekends, festive holidays, and off-season periods. These tend to be percentage-based and apply on stays above a minimum night count rather than a minimum value.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Timing Strategies
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Travel Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Travel deals follow a mix of predictable sale windows and real-time pricing dynamics. Knowing both gives you an edge.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Advance booking windows",
              desc: "Airlines and hotels offer better base prices when booked well in advance. Combining early booking with a platform promo code is where the strongest total savings happen — the code applies to an already-lower fare.",
            },
            {
              title: "Last-minute deals",
              desc: "Platforms clear unsold inventory with last-minute codes in the hours or days before travel. These are harder to plan around but deliver strong absolute savings if your schedule is flexible.",
            },
            {
              title: "Long weekend and holiday periods",
              desc: "Travel demand peaks around long weekends — Republic Day, Independence Day, Diwali, Christmas, and school holidays all drive booking surges. Platforms push codes in the lead-up to these periods to capture early bookings before prices climb.",
            },
            {
              title: "Off-season travel windows",
              desc: "Travelling outside peak season almost always means lower base prices. Off-season promotional codes on hotels and packages in popular destinations make this the most cost-effective window for leisure travel.",
            },
            {
              title: "Platform anniversary and sale events",
              desc: "Major travel platforms run their own anniversary or themed sale events — similar to festive sales in retail — with some of their deepest codes of the year. These windows are worth planning a booking around if your travel dates are flexible.",
            },
            {
              title: "Flash sale windows",
              desc: "Airlines and travel platforms run time-limited flash sales where seats or rooms are available at sharply reduced prices, sometimes with additional promo codes. These are short windows — hours, not days — and the best codes in this category move very fast.",
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
            Bookmark this page and check it before every travel booking — travel codes move faster than almost any other category, and the right code at the right moment can save more than a month of smaller category discounts combined.
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
          Travel Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A travel coupon code is one part of what goes into a well-priced booking. These habits make the difference between a decent deal and a genuinely good one:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Book flights on weekdays",
              desc: "Flight prices on most platforms are lower when searched and booked mid-week compared to weekends. Combining a mid-week search with an active travel promo code gives the best base-fare-plus-discount outcome.",
            },
            {
              title: "Stack your savings layers",
              desc: "A platform discount code, a bank card cashback offer, and an airline or hotel loyalty programme can all apply on the same booking on most platforms. Identifying all three before you confirm a booking is worth the extra few minutes.",
            },
            {
              title: "Use incognito mode when searching",
              desc: "Some travel platforms adjust prices based on your search history and cookies. Searching in incognito mode gives you a clean price that has not been influenced by your previous searches.",
            },
            {
              title: "Be flexible on dates",
              desc: "Shifting your travel dates by even a day or two — particularly avoiding Fridays and Sundays for flights — can drop the base fare enough that even a small promo code delivers strong combined savings.",
            },
            {
              title: "Compare total prices, not headline prices",
              desc: "Add baggage fees, seat selection charges, and convenience fees to the base fare before comparing platforms. A lower headline price with high add-ons can end up more expensive than a higher headline price with fewer charges — and some codes only apply to the base fare.",
            },
            {
              title: "Check the cancellation policy before booking",
              desc: "A discounted booking you cannot cancel or change without penalties is a risk. Confirm the platform's cancellation terms before completing the booking, especially for dates that are not fully confirmed.",
            },
            {
              title: "Use loyalty programmes alongside codes",
              desc: "Most airlines and hotel chains have free loyalty programmes that earn points on every booking. Points earned on a discounted booking still accumulate — over time, this adds meaningful value on top of the upfront saving from a promo code.",
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
              q: "Do travel coupon codes work on all routes and destinations?",
              a: "Not always. Many travel discount codes have route-specific or destination-specific restrictions — some apply only to domestic bookings, others to specific cities or hotel categories. The terms on each code listed here specify any such restrictions. Always check before you start your search.",
            },
            {
              q: "Can I use a travel coupon code with a bank cashback offer?",
              a: "On most travel platforms, yes. A platform promo code and a bank card cashback offer are processed separately and can both apply on the same booking. This combination is worth pursuing on any high-value flight or hotel booking.",
            },
            {
              q: "How quickly do travel coupon codes expire?",
              a: "Faster than most other categories. Airline codes and flash sale codes can expire within hours of going live. Time-sensitive codes are flagged on this page — use them the day you find them rather than saving them for later.",
            },
            {
              q: "Why did my flight coupon code not work at checkout?",
              a: "The most common reasons: the code has expired, your booking does not meet the minimum value, the code is restricted to a route or destination you are not booking, or it is new-user only and you have booked on this platform before. Check the terms listed on the code before you retry.",
            },
            {
              q: "Are travel coupon codes safe to use?",
              a: "Every code on this page is sourced from verified platform promotions or airline sale events. We do not list codes from unverified sources. Always confirm the discount has applied in the booking summary before you complete payment.",
            },
            {
              q: "Do hotel coupon codes work on last-minute bookings?",
              a: "Some do. Hotel codes are generally more flexible than flight codes and are less tied to specific booking windows. Last-minute hotel codes also appear separately on this page when platforms are clearing inventory — these are worth checking specifically if you are booking within a day or two of your stay.",
            },
            {
              q: "Are there travel coupon codes for existing users?",
              a: "Yes, though they are smaller than new user codes. Existing user codes on travel platforms refresh regularly — especially cashback offers tied to specific payment methods. Checking this page before every booking rather than only for first-time use is the right habit.",
            },
            {
              q: "Do bus and cab booking codes refresh as often as flight codes?",
              a: "Bus booking codes refresh more consistently and with less volatility than flight codes. Cab codes — especially on platforms with quick commerce or intercity services — also refresh frequently, particularly around new city launches or payment method promotions.",
            },
            {
              q: "What is the best time to book flights for the lowest price?",
              a: "Advance booking combined with a mid-week search gives the lowest base fares on most routes. Adding an active travel promo code and a bank card offer on top of that delivers the strongest combined saving.",
            },
            {
              q: "Do travel coupon codes work on holiday packages?",
              a: "Yes. Holiday package codes are listed separately on this page and typically apply to bundled flight-plus-hotel or full tour packages above a minimum booking value. These codes tend to have better absolute savings than standalone flight or hotel codes because the base booking value is higher.",
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
          Start Saving on Every Trip
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every flight booked, every hotel confirmed, and every cab ordered is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified travel coupon codes, travel discount codes, and travel promo codes across flights, hotels, buses, cabs, and holiday packages.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every booking, bookmark this page, and make sure no deal on your next trip passes you by.
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
          Top Travel Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Domestic Flights", tag: "Airfare Deals" },
            { brand: "International Flights", tag: "Long-Haul Savings" },
            { brand: "Hotels & Stays", tag: "Resorts & Stays" },
            { brand: "Holiday Packages", tag: "Bundled Deals" },
            { brand: "Buses & Cabs", tag: "Intercity Transit" },
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
              Layer Your Savings
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine promo codes with bank card offers, mid-week fares, and loyalty rewards points.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Incognito Search
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Search fares in private tabs to avoid dynamic price surges before applying promo codes.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Instant Savings</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Travel Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified code here and apply directly on the merchant's official booking portal or mobile app at checkout.
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
