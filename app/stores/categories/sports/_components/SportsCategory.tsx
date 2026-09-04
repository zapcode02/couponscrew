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

export default function SportsCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Sports')),
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
    { title: 'Check end-of-season clearance', desc: 'Sportswear and footwear are marked down heavily once a season winds down. Pairing a clearance sale with an active coupon code often gives the deepest discount of the year.' },
    { title: 'Compare bundle pricing', desc: 'Equipment sets — like a full racket kit or a home gym bundle — are often priced lower per item than buying pieces separately. Check bundle pricing before applying a code to individual items.' },
    { title: 'Look for loyalty and membership discounts', desc: 'Many sports retailers run membership or loyalty programmes with member-only pricing. Combining a membership discount with a promo code can stack extra savings at checkout.' },
    { title: 'Time big purchases around sale windows', desc: 'For higher-value items like fitness equipment or team gear, waiting for a known sale window usually saves more than applying a coupon code on a regular-priced order.' },
    { title: 'Watch for bank and card offers', desc: 'Instant bank discounts or cashback offers can often be combined with a sports coupon code at checkout — always check the offers tab before completing payment.' },
  ];

  const faqs = [
    {
      q: 'Are the sports coupon codes on CouponsCrew verified?',
      a: 'Yes. Every sports coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a sports coupon code?',
      a: 'Copy the code from CouponsCrew, add the product to your cart on the retailer’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple sports coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are sports coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there sports coupon codes for new users?',
      a: 'Yes, many platforms offer first-order discounts on sportswear and equipment. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do sports coupon codes work on both app and website orders?',
      a: 'It varies by store. Some sports coupon codes are app-exclusive, while others work on both the website and the app. The terms shown with each code will indicate where it applies.',
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
              <span className="text-[#5B4FBE] font-semibold">Sports</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Sports</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse sports coupon codes, discount codes, and promo codes for sportswear, footwear, fitness equipment, outdoor gear, gym accessories, cycling, running, cricket, football, and other sporting essentials. Discover verified discounts and exclusive savings from top sports brands and retailers.
              
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091237/Sports_y2gtef.webp"
                alt="Sports"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Sports Stores ({categoryStores.length})</h2>
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
                  const isActive = c.name === 'Sports';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Sports Deals', desc: 'Get the biggest discounts' },
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
            Gear, Apparel &amp; Nutrition Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Sports Coupon Codes – Save on Gear, Apparel, Nutrition, and Fitness
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Whether you train every day or shop for sports gear once a season, paying full price for sportswear, fitness equipment, or sports nutrition is never the only option. Sports is one of the most active discount categories online — brands compete hard for every purchase, and coupon codes, seasonal sale events, and cashback offers cycle through the category faster than most shoppers realise.
          </p>
          <p>
            CouponsCrew tracks and verifies sports coupon codes daily across sports apparel, footwear, fitness equipment, sports nutrition, outdoor gear, and sports ticketing. Whether you are kitting out for a sport you play seriously or looking to save on your next pair of running shoes, this page brings together the best sports discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
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
      Why Use Sports Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Sports and fitness is a category where purchases repeat regularly. Nutrition supplements run out, sports footwear wears down, apparel rotates seasonally, and equipment upgrades happen as you improve. That means the savings from consistently using a sports coupon code before every purchase compound over time in a way that one-off categories do not.
      </p>
      <p>
        The challenge is that sports discount codes are spread across brand emails, app notifications, and seasonal campaign pages — and the best codes often have short windows tied to product launches, season starts, or sale events. Tracking them manually is more effort than most buyers want to put in.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to make that easier:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Subcategory tagging</strong> — Every sports coupon code is tagged by type: apparel, footwear, equipment, nutrition, or outdoor gear — so you find what applies to your purchase without sorting through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Brand and platform coverage</strong> — Sports codes are tracked across both direct brand sites and multi-brand sports retail platforms so you always have options regardless of where you prefer to shop</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">New launch tracking</strong> — Sports brands push their best codes around new product launches and season drops; these are flagged when active</span>
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
      How to Use a Sports Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process is consistent across most sports retail platforms and brand websites:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the sports coupon codes on this page. Check the platform and product category the code is for before copying.</p>
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
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Go to the platform or brand site</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the sports retailer or brand website the code is for. Add your items — footwear, apparel, equipment, or nutrition — to your cart as you normally would.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach checkout</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most sports retail platforms this appears on the cart or payment page before you confirm the order.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the sports discount code and apply it. Your discount reflects in the order total before you complete payment.</p>
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
      <strong className="font-bold">Pro tip:</strong> Sports coupon codes are often category-specific — a footwear code may not apply to nutrition, and an apparel code may exclude sale items. Check the terms before you start adding to cart, especially during sale season when exclusions are more common.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Sports Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Sports platforms run a range of offer structures across different product types. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your cart total or on specific product categories. Common across both multi-brand sports retailers and direct brand sites — and especially strong during end-of-season clearance periods.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum order value. Worth planning a slightly larger purchase around if you are close to the threshold on a planned order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New user codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">First-order discount codes for shoppers signing up on a platform for the first time. Worth saving for a higher-value purchase — sports footwear or equipment — rather than a small accessories order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">App-exclusive codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discounts available only when shopping through the brand's or retailer's mobile app. Most major sports platforms have app-only pricing or exclusive codes that are not visible on desktop.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when paying with a specific credit or debit card. These stack with platform codes on most sports retail sites and are worth checking before completing any high-value sports purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Loyalty and membership codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Most major sports brands have free or paid loyalty programmes that unlock member pricing, early access to sales, and exclusive codes. Codes for discounted programme enrolment or membership-linked discounts are listed here when available.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bundle and kit codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when purchasing a bundle — a full kit, a training package, or a nutrition stack — rather than individual items. These deliver better per-item savings than individual product codes on planned multi-item purchases.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Clearance and end-of-season codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply on already-reduced clearance stock. Sports brands rotate inventory seasonally — clearance codes on outgoing season apparel and footwear can represent very strong value if you are flexible on colourways and sizing.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Sports by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Sports is a broad category covering very different purchase types. Here is how codes behave across each major subcategory.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sports Apparel and Jerseys</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Sports apparel codes are among the most frequently available in this category. Multi-brand retail platforms covering running, football, cricket, basketball, and gym wear run consistent promotional cycles tied to sport seasons and new collection drops. End-of-season clearance codes on sports apparel deliver the best absolute savings — outgoing season stock at already-reduced prices with a code applied on top.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sports Footwear</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Footwear is the highest-value subcategory in sports retail, and codes here can deliver significant savings in absolute terms. New model launches almost always push codes on previous generation footwear to clear stock — if you are not locked to the latest release, this is one of the most reliable savings windows in sports. Running shoes, football boots, court shoes, and training footwear all follow this launch-and-clearance cycle.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Fitness Equipment</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Home fitness equipment — resistance bands, weights, yoga mats, gym machines, and training accessories — runs consistent discount cycles tied to New Year fitness resolutions, pre-summer training windows, and festive gift purchases. Equipment codes tend to be flat-discount or percentage-based and apply broadly across product ranges rather than being model-specific.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sports Nutrition</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Nutrition is a repeat-purchase subcategory — protein supplements, pre-workouts, vitamins, and recovery products run out and need restocking regularly. Nutrition platforms run subscription and auto-replenishment codes alongside standard first-order codes. Bundle codes on nutrition stacks — protein plus creatine, for example — are consistently available and deliver better per-serving savings than buying individual products separately.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cricket and Football Gear</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">India-specific sport gear — cricket bats, pads, gloves, helmets, and football boots — follows the domestic cricket and football season calendar. IPL season and domestic cricket tournament windows bring strong codes on cricket gear specifically. Football gear codes are more consistent year-round given the sport's global calendar.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Outdoor and Adventure Gear</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Trekking equipment, cycling gear, swimming accessories, and outdoor sports products have a slightly different discount rhythm from mainstream sports retail. Pre-monsoon and pre-winter windows bring codes on seasonal outdoor equipment — waterproof gear and trekking essentials before the monsoon, thermal and layering gear before winter. Adventure sports platforms also run codes around major trekking season windows.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gym Memberships and Fitness Passes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Gym membership and fitness class platform codes cover both physical gym chains and digital fitness subscription platforms. New year codes on gym memberships are the most consistent in this subcategory — fitness platforms push hard in January to capture resolution-driven sign-ups. Digital fitness subscription codes — for workout apps, online class platforms, and virtual personal training — also appear regularly outside the January window.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Sports Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Sports Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Sports follows a mix of seasonal sport calendars and retail sale windows. Knowing both gives you more opportunities to find a working code.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New year fitness window",
              desc: "January is the single most active month for fitness equipment, gym membership, and sports apparel codes. Platforms compete hard for resolution-driven buyers — this is when the strongest codes across fitness equipment and gym subscriptions are typically available.",
            },
            {
              title: "IPL and cricket season",
              desc: "The IPL window drives one of the strongest cricket gear and sports apparel discount cycles of the year in India. Codes on cricket equipment, team jerseys, and sports footwear are consistently available during this period.",
            },
            {
              title: "Pre-summer training window",
              desc: "April and May bring a surge in fitness and outdoor sports purchasing ahead of summer. Running shoes, gym equipment, and outdoor gear codes are active during this window as platforms target early-summer fitness planning.",
            },
            {
              title: "End-of-season clearance",
              desc: "Sports apparel and footwear follow a seasonal inventory cycle. End-of-season clearance sales — typically in March and September — bring the deepest discounts on outgoing stock. Clearance codes applied on top of already-reduced prices represent the best value available at any point in the sports retail calendar.",
            },
            {
              title: "Festive sale windows",
              desc: "Diwali and major festive sale periods bring platform-wide sports codes alongside category-specific promotions. Sports footwear and fitness equipment are consistently featured in festive sale events across major retail platforms.",
            },
            {
              title: "New product launch windows",
              desc: "Sports brands launch new footwear models and apparel collections seasonally. When a new model drops, codes on the previous generation follow almost immediately. If you are flexible on the latest release, monitoring launch windows is one of the most reliable ways to find a strong sports coupon code.",
            },
            {
              title: "Marathon and sporting event seasons",
              desc: "Cities hosting major marathons or sporting events see a spike in running gear, sports apparel, and nutrition purchasing in the lead-up. Platforms targeting participants in these events run codes timed to registration and training build-up windows.",
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
            Bookmark this page and check it before any sports purchase — new codes go live around product launches, season starts, and sale events, and the best codes in this category move fast.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Sports Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Sports Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of getting the best price on sports purchases. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Buy last season's footwear",
              desc: "Sports footwear brands release new models seasonally, and the previous generation drops in price almost immediately. The performance difference between consecutive model generations is often minimal — the price difference is not. A clearance code on last season's shoe delivers very strong combined savings.",
            },
            {
              title: "Stack nutrition bundle codes",
              desc: "Buying sports nutrition as a bundle — multiple products in a single order — almost always costs less per unit than individual purchases. A bundle code on top of already-bundled pricing is the strongest combination available on nutrition platforms.",
            },
            {
              title: "Use loyalty programme pricing before adding a code",
              desc: "Most major sports brands have free loyalty programmes with member pricing that is lower than the public price. Applying a coupon code to an already-reduced member price rather than the public price gives a better combined outcome.",
            },
            {
              title: "Plan equipment purchases around New Year and festive windows",
              desc: "Fitness equipment is not a spontaneous purchase for most buyers. Planning it around the January fitness window or a major festive sale event — and checking this page for a code before buying — is the most cost-effective approach.",
            },
            {
              title: "Check multi-brand sports retailers before brand sites",
              desc: "The same product — same model, same size — can be priced differently on a multi-brand sports retailer versus the brand's own site on the same day. Checking both before applying a code ensures you are starting from the lower base price.",
            },
            {
              title: "Join brand loyalty programmes before they matter",
              desc: "Most sports brand loyalty programmes are free to join and give immediate access to member pricing and early sale access. Joining before you need to buy — rather than at the point of purchase — means you are already enrolled when codes and early access windows open.",
            },
            {
              title: "Check return policies before buying sports equipment online",
              desc: "Fitness equipment — particularly larger items — can have different return policies from apparel or footwear. Confirm the return window and condition requirements before completing a high-value equipment purchase, especially if you are buying a size or model you have not tried in person.",
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
              q: "Do sports coupon codes work on sale items?",
              a: "It depends on the platform and the specific code. Some sports discount codes apply only on full-price items and exclude sale or clearance stock. Others stack on top of existing sale prices. The terms on each code listed here specify this clearly — check before you add to cart.",
            },
            {
              q: "Can I use a sports coupon code with a bank cashback offer?",
              a: "On most sports retail platforms, yes. A platform promo code and a bank card cashback offer are processed independently and can both apply on the same order. This combination is worth pursuing on any high-value sports purchase — footwear or equipment in particular.",
            },
            {
              q: "How often are sports coupon codes updated on CouponsCrew?",
              a: "Daily. Sports codes tied to product launches and seasonal events can go live and expire within days. Checking this page before each purchase rather than relying on a saved code from an earlier visit is the right approach.",
            },
            {
              q: "Do sports nutrition coupon codes work on subscription orders?",
              a: "Some do. Nutrition platforms with subscription or auto-replenishment options sometimes accept promo codes on the first subscription order. Ongoing subscription cycles may not accept new codes after the first order — check the platform's subscription terms before assuming a code will apply each cycle.",
            },
            {
              q: "Are there sports coupon codes for gym memberships?",
              a: "Yes. Gym membership and digital fitness subscription codes are listed on this page when verified offers are available. January is the most active window for these codes — checking this page in the first weeks of the year gives you access to the strongest gym and fitness codes of the annual cycle.",
            },
            {
              q: "Do sports footwear codes work on all sizes and colourways?",
              a: "Most do, but limited-edition colourways and newly launched models are sometimes excluded from promo code terms. The terms on each code here note any such exclusions where confirmed.",
            },
            {
              q: "What is the best time of year to buy sports equipment at the lowest price?",
              a: "The January fitness window and major festive sale events are the two strongest annual windows for fitness equipment codes. End-of-season clearance periods — typically March and September for sports apparel and footwear — are the best windows for apparel and shoe codes specifically.",
            },
            {
              q: "Do cricket gear codes follow the IPL schedule?",
              a: "Yes. Cricket gear codes are most active during the IPL window and around major domestic tournament schedules. Checking this page when IPL season begins is the most reliable way to find active cricket gear codes.",
            },
            {
              q: "Are outdoor and trekking gear codes available year-round?",
              a: "They are available year-round but stronger in the pre-monsoon and pre-winter windows when seasonal demand drives platform promotions. Checking this page before a planned trek or outdoor trip — rather than at a fixed time of year — gives you the most relevant codes for your timing.",
            },
            {
              q: "Do sports brand loyalty programmes give better savings than coupon codes?",
              a: "They serve different purposes. Loyalty programme member pricing gives you a lower base price on every purchase. A coupon code applies an additional discount on top of that price. Using both — member pricing as the baseline and a code on top — gives the best combined outcome. Joining a brand's free loyalty programme before you need it costs nothing and unlocks better starting prices whenever a code is available.",
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
          Start Saving on Every Sports Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every pair of shoes you buy, every nutrition stack you order, and every piece of equipment you add to your training is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified sports coupon codes, sports discount codes, and sports promo codes across apparel, footwear, fitness equipment, nutrition, outdoor gear, and gym memberships.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every sports purchase, bookmark this page, and make sure no deal on your next training session passes you by.
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
          Top Sports Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Sportswear & Shoes", tag: "Clearance & New Releases" },
            { brand: "Fitness Equipment", tag: "Home Gym Deals" },
            { brand: "Sports Nutrition", tag: "Stack & Bundle Offers" },
            { brand: "Outdoor & Trekking", tag: "Seasonal Gear" },
            { brand: "Gym Memberships", tag: "Digital & Local Passes" },
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
          Pro Athlete Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Buy Previous Models
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine clearance discounts on last season's footwear with working promo codes.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Stack Loyalty Rewards
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Join brand programs to get member baseline rates before entering coupon codes.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified sports code here and apply it directly on the brand's official store checkout.
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
