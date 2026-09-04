'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,CheckCircle2,Clock, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
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

export default function WebHostingCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Web Hosting')),
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
    { title: 'Compare renewal pricing, not just the first term', desc: 'Hosting plans often carry a discounted introductory rate. Check the renewal price before committing, so the coupon savings do not disappear at your next billing cycle.' },
    { title: 'Check the refund and money-back window', desc: 'Most hosting providers offer a money-back guarantee window. Confirm how many days you have to test the service before the refund window closes, especially when trying a new plan.' },
    { title: 'Look at whether SSL is bundled', desc: 'Some hosting plans include a free SSL certificate, while others charge separately. Factor this into the total cost comparison before applying a coupon code.' },
    { title: 'Check for free domain offers', desc: 'Many hosting coupon codes are paired with a free domain registration for the first year. This can add meaningful value on top of the base discount.' },
    { title: 'Consider longer billing cycles for bigger discounts', desc: 'Annual or multi-year billing cycles typically unlock a larger discount than monthly billing. If you are confident in the provider, a longer term paired with a coupon code usually saves more overall.' },
  ];

  const faqs = [
    {
      q: 'Are the web hosting coupon codes on CouponsCrew verified?',
      a: 'Yes. Every web hosting coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a web hosting coupon code?',
      a: 'Copy the code from CouponsCrew, select your hosting plan and billing cycle on the provider’s site, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple web hosting coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order. Check the terms shown with each code before applying, since some providers restrict codes to specific plans or billing cycles.',
    },
    {
      q: 'How often are web hosting coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there web hosting coupon codes for new users?',
      a: 'Yes, many hosting providers offer first-term discounts for new sign-ups. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do these coupon codes apply to renewals as well as new plans?',
      a: 'This varies by provider. Some hosting coupon codes are valid only on the first billing term, while others apply to renewals too. Always check the terms shown with each code before relying on it for a renewal.',
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
              <span className="text-[#5B4FBE] font-semibold">Web Hosting</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Web Hosting</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
                Browse web hosting coupon codes, discount codes, and promo codes for shared hosting, VPS, cloud hosting, WordPress hosting, dedicated servers, domain registration, SSL certificates, email hosting, website builders, and hosting solutions. Find verified savings from leading web hosting providers.
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091237/web-hosting_ydzalx.webp"
                alt="Web Hosting"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Web Hosting Stores ({categoryStores.length})</h2>
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
                  const isActive = c.name === 'Web Hosting';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Web Hosting Deals', desc: 'Get the biggest discounts' },
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
            Hosting, Domains &amp; Web Tools Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Web Hosting Coupon Codes – Save on Hosting, Domains, and Website Tools
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Setting up a website, launching a business online, or migrating to a better hosting provider should not mean paying the full listed price. Web hosting is one of the few categories where coupon codes are available almost year-round — hosting providers compete aggressively for new customers, and introductory discount codes, renewal offers, and plan upgrade codes are a consistent part of how they do it.
          </p>
          <p>
            CouponsCrew tracks and verifies web hosting coupon codes daily across shared hosting, VPS, cloud hosting, dedicated servers, domain registrations, SSL certificates, and website builder plans. Whether you are a first-time website owner or an agency managing multiple client sites, this page keeps you covered with tested hosting discount codes and promo codes that work at checkout.
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
      Why Use Web Hosting Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Web hosting is a category where the gap between the advertised price and what you actually need to pay is wider than almost anywhere else online. Hosting providers routinely list renewal rates that are significantly higher than introductory rates — and most new customers do not realise this until their first renewal bill arrives.
      </p>
      <p>
        Coupon codes in this category serve a different purpose than in retail. In web hosting, a code at signup can lock in a lower introductory rate, reduce the cost of a longer billing cycle, or bring down the price of an add-on like a domain, SSL certificate, or website migration. Knowing when and how to use these codes makes a real difference to the total cost of running a website over time.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is how CouponsCrew makes that easier:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Plan and provider tags</strong> — Every web hosting coupon code is tagged by hosting type and provider so you find what applies to your setup without filtering through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Renewal and upgrade tracking</strong> — Hosting renewal codes and plan upgrade codes are tracked separately from introductory offers — both matter at different points in a hosting relationship</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Billing cycle guidance</strong> — Longer billing cycles almost always deliver better per-month pricing; codes that apply on annual or multi-year plans are flagged clearly</span>
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
      How to Use a Web Hosting Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The checkout process for hosting purchases is slightly more involved than a retail purchase — here is how it typically works:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the web hosting coupon codes on this page. Check that the code matches the provider and hosting plan type you are purchasing.</p>
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
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Go to the hosting provider</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the hosting provider's website and select your plan — shared, VPS, cloud, or dedicated. Configure your plan options before proceeding to checkout.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the checkout page</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Most hosting providers have a promo code or coupon field on the cart or checkout page, before the payment step.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the hosting discount code and apply it. Your discounted price will reflect in the order summary before you enter payment details.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Choose your billing cycle</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Select your billing cycle before completing payment — longer cycles with a code applied typically give the lowest effective monthly rate. Confirm the final total before paying.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Web hosting coupon codes often apply only to the first billing cycle — not to renewals. Before you complete signup, check the renewal rate and decide whether a longer initial billing cycle (annual or biennial) at the discounted rate makes more financial sense than a shorter cycle at the introductory price.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Web Hosting Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Web hosting platforms offer a wider variety of code types than most retail categories because the purchase structure is more complex. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Introductory discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">The most common type in web hosting — a heavily discounted rate for new customers on the first billing cycle. These codes deliver the deepest discounts but apply only to the signup period. Understanding what the renewal rate will be before you use an introductory code is important context.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on the plan price. These can apply to introductory rates or occasionally to renewal rates when providers run retention offers.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off your hosting order, often applicable when your cart crosses a minimum value. More common on VPS and dedicated server plans than on shared hosting.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Renewal discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply at renewal rather than signup. These are harder to find than introductory codes but valuable — if you are approaching a hosting renewal and find a working renewal code, it can significantly reduce what would otherwise be a much higher rate than your original signup price.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Domain registration codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Promo codes specifically for domain registrations or transfers. Many hosting providers bundle domain registration with hosting plans — a domain code applied alongside a hosting code can further reduce first-year costs.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Add-on codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes for SSL certificates, website migration services, email hosting, or website builder plans purchased alongside or separately from a hosting plan.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Plan upgrade codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when upgrading from a lower-tier plan to a higher one — shared to VPS, or VPS to cloud. These appear during promotional windows and are worth checking before paying full price for an upgrade.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Annual and multi-year plan codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply specifically to annual or longer billing cycle purchases. The per-month rate on a multi-year plan with a code applied is almost always the lowest effective price available on any hosting plan.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Web Hosting by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Web hosting covers a wide range of products and purchase types. Codes work differently depending on which type of hosting or related service you are buying.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Shared Hosting</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Shared hosting is where the most aggressive introductory codes exist. New customer discounts of well above the standard price are common — providers compete hard for first-time website owners, and the discount codes reflect that. The key thing to check alongside any shared hosting code is the renewal rate, which is often significantly higher than the introductory price.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">VPS Hosting</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">VPS codes are less aggressive than shared hosting codes but more consistent across billing cycles. Providers in the VPS space tend to run codes during platform anniversary events and specific seasonal windows rather than as permanent introductory offers. Flat discount codes are more common here than percentage codes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cloud Hosting</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Cloud hosting codes tend to appear around new product launches, major platform updates, or provider-specific promotional periods. Free trial credits — rather than discount codes — are also common in cloud hosting, where providers offer a period of free usage to let customers evaluate performance before paying.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Dedicated Servers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Dedicated server codes are the least frequent but can represent the largest absolute savings given the higher base price. These appear primarily during promotional events and are worth checking if you are planning a dedicated server purchase rather than assuming the listed price is fixed.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Domain Registration and Transfers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Domain codes are consistent year-round on most major registrars. First-year domain registration codes are common, as are transfer codes for moving an existing domain from one registrar to another. Multi-domain codes — for registering several domains in a single order — also appear during promotional windows.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">SSL Certificates</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">SSL codes apply to standalone certificate purchases or to renewals. Many hosting providers bundle a free SSL with hosting plans — if yours does not, checking for a standalone SSL code on this page before paying the full certificate price is worth doing.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Website Builders</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Website builder platform codes follow a similar pattern to shared hosting — strong introductory discounts for new users, higher renewal rates. Annual plan codes deliver better per-month pricing than monthly plan codes here, and codes tied to specific plan tiers apply only to those tiers.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Email Hosting</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Business email hosting codes appear alongside general hosting promotions and during provider-specific sale windows. If you are setting up professional email separately from your hosting plan, checking this page for a standalone email hosting code is worth the few minutes.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Hosting Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Web Hosting Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Unlike retail, web hosting does not follow a single seasonal sale calendar. Discount windows are more spread out but still predictable if you know where to look.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New website launch planning",
              desc: "The best time to use a hosting coupon code is when you are ready to commit to a plan and a billing cycle. Codes applied at signup to a longer billing cycle lock in the lowest effective monthly rate available. Waiting until you are ready to buy — rather than holding a code you found months earlier — ensures you are using a valid offer.",
            },
            {
              title: "Hosting renewal windows",
              desc: "As your current hosting plan approaches renewal, checking this page for a renewal code is one of the most straightforward savings opportunities in this category. Renewal rates are almost always higher than introductory rates — a renewal code closes some of that gap.",
            },
            {
              title: "Black Friday and Cyber Monday",
              desc: "This is the single most competitive discount window for web hosting each year. Hosting providers run some of their deepest annual codes during this period — often on multi-year plans. If you are planning a new site or a provider switch, this window is worth timing a purchase around.",
            },
            {
              title: "Provider anniversary events",
              desc: "Most major hosting providers run annual promotional events tied to their founding date or platform milestones. These are consistent yearly windows for hosting codes across plan types.",
            },
            {
              title: "New product or data centre launches",
              desc: "When a hosting provider launches a new plan tier, a new server location, or a new product line, introductory codes for that offering go live. These tend to be strong codes on a limited-time basis.",
            },
            {
              title: "End of year and January planning",
              desc: "Many website owners and businesses plan their online infrastructure for the coming year in December and January. Hosting providers respond with year-end and new-year codes targeting this planning window.",
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
            Check this page before any hosting purchase, renewal, or plan upgrade — web hosting is a category where a working code at the right moment can reduce your annual hosting cost significantly.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Hosting Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Web Hosting Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of keeping hosting costs manageable. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Choose a longer billing cycle at signup",
              desc: "The per-month price on a three-year or two-year hosting plan is almost always lower than on a monthly or annual plan. Applying a coupon code to a longer billing cycle at signup locks in the lowest effective monthly rate you will find — often lower than any code applied to a shorter cycle later.",
            },
            {
              title: "Understand the renewal rate before you sign up",
              desc: "Every hosting provider has a renewal rate that is higher than the introductory rate. Knowing what you will pay at renewal before you sign up prevents surprise bills and helps you decide whether a longer initial billing cycle makes more sense.",
            },
            {
              title: "Compare total cost over your intended hosting period",
              desc: "Provider A with a lower introductory rate might cost more over three years than Provider B with a higher introductory rate but a lower renewal rate. Calculate the total cost across your planned hosting period — not just the first bill — before choosing based on a code alone.",
            },
            {
              title: "Use free migration offers when switching providers",
              desc: "Many hosting providers offer free website migration as part of a signup promotion. If you are moving from an existing host, checking whether this is included before paying for a migration service separately avoids an unnecessary cost.",
            },
            {
              title: "Check whether your domain is included",
              desc: "Some hosting plans include a free domain for the first year. If yours does, that is a cost you do not need to separately cover — factor it into your total cost comparison.",
            },
            {
              title: "Separate your domain registrar from your hosting provider",
              desc: "Keeping your domain at an independent registrar rather than bundled with your hosting gives you more flexibility to switch hosting providers at renewal without domain transfer complications. Domain codes on standalone registrars are also often better than bundled domain pricing from hosting providers.",
            },
            {
              title: "Read the refund policy before purchasing",
              desc: "Most hosting providers have a money-back window — typically covering the first month of a plan. Know this window before you buy, especially if you are trying a new provider for the first time on a long billing cycle.",
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
              q: "Do web hosting coupon codes apply to renewals?",
              a: "Most hosting coupon codes are for new customers only and apply to the first billing cycle. Renewal codes exist but are less common — they tend to appear during Black Friday, provider anniversary events, or as retention offers. Renewal codes are listed separately on this page when verified offers are available.",
            },
            {
              q: "Can I use a hosting coupon code on any billing cycle?",
              a: "Some codes apply to any billing cycle; others are restricted to annual or multi-year plans. The terms on each code here specify which billing cycles are eligible. Annual and multi-year plan codes almost always deliver a better per-month effective price than monthly plan codes even before the coupon is applied.",
            },
            {
              q: "How quickly do web hosting coupon codes expire?",
              a: "It varies. Some hosting codes are evergreen and remain valid for months. Others are tied to specific promotional windows — Black Friday codes in particular expire within days. Time-sensitive codes are flagged on this page. Using a code the day you find it rather than saving it for later is always the safer approach.",
            },
            {
              q: "Why did my hosting coupon code not work at checkout?",
              a: "The most common reasons: the code has expired, it applies only to a specific plan tier you are not selecting, it is for new customers only and you already have an account, or the code is restricted to a billing cycle you did not choose. Check the terms listed on the code before retrying.",
            },
            {
              q: "Do hosting coupon codes work on domain registrations?",
              a: "Domain codes are listed separately from hosting codes on this page. Some hosting providers issue a single code that covers both the hosting plan and a bundled domain — these are flagged clearly. Standalone domain codes apply to domain registration or transfer purchases independently of any hosting plan.",
            },
            {
              q: "Are there web hosting coupon codes for VPS or cloud plans?",
              a: "Yes. VPS and cloud hosting codes are listed alongside shared hosting codes on this page and tagged by plan type. They appear less frequently than shared hosting codes but are worth checking before purchasing or upgrading to a VPS or cloud plan.",
            },
            {
              q: "What is the best billing cycle to choose when using a hosting coupon code?",
              a: "In most cases, the longest billing cycle available — typically two or three years — gives the lowest effective monthly rate when a code is applied. The code brings down the already-lower long-cycle price further. Short-cycle plans with a code applied tend to cost more per month over the same period.",
            },
            {
              q: "Do website builder coupon codes work the same way as hosting codes?",
              a: "Website builder codes follow a similar pattern — strong introductory discounts for new users, higher renewal rates, and annual plan codes delivering better per-month pricing than monthly codes. The same habit of checking renewal rates before committing to an introductory price applies here.",
            },
            {
              q: "Are SSL certificate codes worth using separately from hosting plan codes?",
              a: "If your hosting plan does not include a free SSL certificate, yes. Standalone SSL codes can reduce certificate costs significantly. If your hosting plan includes SSL, a separate certificate code is not needed — confirm what is bundled in your plan before purchasing anything separately.",
            },
            {
              q: "How do I find the best web hosting deal for a new website?",
              a: "Check this page for a code that applies to the provider and plan type you have identified. Apply it to the longest billing cycle you are comfortable committing to. Confirm the renewal rate before completing the purchase. If the renewal rate is significantly higher than the introductory rate, factor that into your total cost calculation before deciding.",
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
          Start Saving on Every Hosting Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every hosting plan you sign up for, every domain you register, and every renewal you process is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified web hosting coupon codes, hosting discount codes, and hosting promo codes across shared hosting, VPS, cloud, dedicated servers, domains, and SSL certificates.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every hosting purchase or renewal, bookmark this page, and make sure no deal on your next website project passes you by.
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
          Top Hosting Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Shared Hosting", tag: "Long Cycle Savings" },
            { brand: "VPS & Cloud", tag: "Developer Deals" },
            { brand: "Domain Names", tag: "Registration Offers" },
            { brand: "SSL Certificates", tag: "Security Discounts" },
            { brand: "Website Builders", tag: "Annual Discount" },
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
          Pro Buyer Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Lock Multi-Year Rates
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Apply intro promo codes to 2 or 3-year plans to secure maximum per-month discounts.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Check Renewal Terms
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Calculate full term costs including standard renewal rates before final checkout.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Hosting Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified promo code here and apply it directly on your hosting provider's official checkout page.
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
