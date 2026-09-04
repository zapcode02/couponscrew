'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,Clock,AlertCircle,CheckCircle2, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
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

export default function HealthCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Health')),
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
    { title: 'Check for subscription and refill discounts', desc: 'Many health platforms offer a lower price when you set up a recurring refill or subscription. Check for a subscription-linked coupon code before placing a one-off order.' },
    { title: 'Compare before you assume the best price', desc: 'A listed discount is not always the lowest available price. Check the price history and compare across platforms before assuming a coupon code is the best deal you can get.' },
    { title: 'Look for combo offers on supplements', desc: 'Health supplement brands frequently bundle related products together at a combined discount. A coupon code applied on top of a combo offer can add up to noticeable savings.' },
    { title: 'Check diagnostic package bundles', desc: 'Booking a bundled diagnostic package is often more cost-effective than booking individual tests separately. Check for package-level promo codes before booking tests one at a time.' },
    { title: 'Watch for new user and app-only codes', desc: 'Many health and wellness platforms offer a first-order discount code for new accounts, and some codes are exclusive to their mobile app. Check both before checkout.' },
  ];

  const faqs = [
    {
      q: 'Are the health coupon codes on CouponsCrew verified?',
      a: 'Yes. Every health coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a health coupon code?',
      a: 'Copy the code from CouponsCrew, add the product or service to your cart on the platform’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple health coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can sometimes be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are health coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there health coupon codes for new users?',
      a: 'Yes, many health and wellness platforms offer first-order discounts. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do these coupon codes work on both app and website orders?',
      a: 'It varies by platform. Some health coupon codes are app-exclusive, while others work on both the website and the app. The terms shown with each code will indicate where it applies.',
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
              <span className="text-[#5B4FBE] font-semibold">Health</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Health</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse health coupon codes, discount codes, and promo codes for medicines, supplements, wellness products, fitness equipment, diagnostic services, personal care, and healthcare essentials. Discover verified discounts, cashback offers, and exclusive savings from trusted health and wellness brands.
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091237/furniture_hvjg57.webp"
                alt="Health"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Health Stores ({categoryStores.length})</h2>
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
                  const isActive = c.name === 'Health';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Health Deals', desc: 'Get the biggest discounts' },
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
            Health &amp; Wellness Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Health Coupon Codes – Save on Medicines, Supplements, Consultations, and More
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Health is one category where most people do not think to look for a coupon code before spending — yet it is also one where the savings from doing so are entirely practical and immediately usable. Online pharmacies, diagnostic labs, telemedicine platforms, supplement brands, ayurvedic products, and wellness apps all run verified discount codes, cashback offers, and first-order promotions regularly. A working health coupon code on a medicine order or a lab test booking is money saved on a purchase you were going to make regardless.
          </p>
          <p>
            CouponsCrew tracks and verifies health coupon codes daily across online pharmacies, health supplements, doctor consultations, diagnostic tests, mental wellness platforms, fitness apps, medical devices, and ayurvedic products. This page brings together the best health discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
          </p>
        </div>

        {/* MEDICAL DISCLAIMER NOTICE */}
        <div className="mt-6 p-4 bg-[#FFF9F2] border border-[#FF9900]/30 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
          <p className="text-xs text-[#8A5100] font-medium leading-relaxed">
            <strong className="font-extrabold text-[#1A1A2E]">Note:</strong> CouponsCrew lists verified savings offers on health products and services. The content on this page covers coupon codes and discounts only — it does not constitute medical advice. Always consult a qualified healthcare professional for medical decisions.
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
      Why Use Health Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Health spending is non-negotiable in a way that most other categories are not. You do not skip a medicine order or delay a lab test because you cannot find a discount — but you also should not be paying more than necessary for something you are already committed to buying. Health platforms compete for every customer, and the coupon codes and cashback offers they push to attract new users and retain existing ones are available more consistently than most people realise.
      </p>
      <p>
        The challenge with health codes is that they are scattered across platform apps, email newsletters, and time-limited offers tied to specific product categories or order values. Missing a code on a recurring medicine order or a planned diagnostic package adds up over time in a way that is easy to underestimate.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to address that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Subcategory tagging</strong> — Every health coupon code is tagged by type: pharmacy, supplements, diagnostics, consultation, or wellness — so you find what applies to your purchase quickly</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Recurring order tracking</strong> — Pharmacy and supplement codes for repeat orders and subscription deliveries are tracked separately from first-order codes</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Prescription and non-prescription clarity</strong> — Codes that apply to prescription medicine orders are flagged separately from over-the-counter product codes where relevant</span>
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
      How to Use a Health Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process is consistent across most health platforms with a few category-specific steps:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the health coupon codes on this page. Check the platform and health category the code is for — pharmacy codes, supplement codes, and diagnostic booking codes are applied at different points in the checkout flow.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the health platform the code is for. For pharmacy orders, upload your prescription if required before proceeding to checkout. For diagnostic bookings, select your test and time slot first.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the payment screen</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most health platforms this appears on the cart or booking confirmation page before payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the health discount code and apply it. Your discount reflects in the order total before you complete payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm and pay</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Review the final total and complete payment. If a bank cashback offer applies, pay with the eligible card to stack both savings on the same order.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Pharmacy codes often have category restrictions — a code valid for OTC products may not apply to prescription medicines, and a supplement code may exclude specific therapeutic categories. Check the terms before adding items to your cart, particularly on orders that mix product types.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Health Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Health platforms offer a range of deal structures across different purchase types. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First-order codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on health platforms are consistently strong — particularly on online pharmacy and diagnostic platforms where first-order discounts are used to build the habit of ordering from a specific platform. Worth saving for a larger medicine order or a comprehensive diagnostic package rather than a small single-product purchase.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your total order or on specific health product categories. Common across supplement platforms, ayurvedic product brands, and wellness app subscriptions.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum order value. More common on pharmacy platforms where a minimum order threshold applies — worth consolidating smaller purchases into a single larger order to meet the threshold and unlock the code.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Subscription and repeat delivery codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when you set up a recurring delivery for medicines, supplements, or health products. Subscription codes typically deliver a lower per-order cost than one-time order codes and are worth using if you buy the same health products regularly.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Diagnostic package codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on health check packages — full body checkups, preventive health panels, and condition-specific test packages. These tend to be percentage-based and apply to bundled test packages rather than individual tests.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Teleconsultation codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">First-consultation or session-specific codes on telemedicine platforms. These are most valuable for new users trying a platform for the first time before committing to a subscription or repeat consultations.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when paying with a specific credit or debit card. Health platforms increasingly run card-linked offers — worth stacking with a platform code on any significant health order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Wellness subscription codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on fitness app subscriptions, meditation platform plans, and digital wellness programme memberships. Annual plan codes deliver better per-month pricing than monthly codes here, consistent with the pattern across most subscription categories.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Ayurveda and herbal product codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on ayurvedic medicine brands, herbal supplement platforms, and natural wellness product retailers. These refresh consistently around festive periods and brand-specific sale events.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Health by Subcategory — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Health covers a wide range of products and services. Here is how codes work across each major subcategory.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Online Pharmacy and Medicines</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Online pharmacy is the largest and most frequently used subcategory in health. Platforms in this space compete hard for prescription and OTC medicine orders — first-order codes are strong, and repeat order codes are consistently available for customers who order regularly. Subscription delivery codes on recurring medicines are particularly valuable for chronic condition management where the same medicines are ordered every month. Checking this page before every pharmacy order — not just the first one — is the habit that delivers the most accumulated saving in this subcategory.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Health Supplements and Vitamins</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Supplements — protein, vitamins, minerals, omega-3, probiotics, and specialised health formulations — are a repeat-purchase category with an active coupon code cycle. Direct-to-consumer supplement brands run first-order codes, bundle codes on product stacks, and subscription codes for regular buyers. Multi-brand health retail platforms aggregate supplement codes across brands — checking this page before any supplement restock gives you the most current verified offer across platforms.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Doctor Consultations and Telemedicine</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Telemedicine platforms have grown significantly as a primary care access point and run consistent first-consultation codes for new users. Specialist consultation codes appear during platform promotional windows. Subscription codes on telemedicine platforms — covering a fixed number of consultations per month — are worth evaluating if you use online consultations regularly, as the per-consultation cost on a subscription is lower than individual session rates.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Diagnostic Tests and Health Checkups</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Diagnostic platform codes cover individual test bookings and comprehensive health check packages. Full body checkup packages attract the strongest codes — percentage discounts on bundled diagnostic panels are more consistent than codes on individual tests. Home sample collection services, available on most major diagnostic platforms, sometimes carry separate codes from in-lab bookings — check both options before deciding where to apply a code.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Mental Health and Wellness Platforms</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Mental wellness platforms — therapy, counselling, stress management, and sleep improvement services — run first-session codes and subscription plan discounts. Annual plan codes on mental wellness apps deliver better per-month pricing than monthly codes. This is a subcategory where free trial codes are particularly worth using before committing to a paid plan, given the personal fit required between a user and a platform's approach.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Fitness and Wellness Apps</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Digital fitness platforms — workout apps, yoga subscriptions, calorie tracking tools, and virtual personal training services — follow a similar code cycle to entertainment subscriptions. New year codes in January are the most consistently available window. Annual plan codes deliver the lowest per-month cost. Codes that unlock premium tiers on freemium fitness apps are listed here when verified offers are available.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Medical Devices and Equipment</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Blood pressure monitors, glucometers, pulse oximeters, weighing scales, and home healthcare equipment codes appear on both specialist health equipment platforms and general electronics retailers. These codes are less frequent than pharmacy or supplement codes but are worth checking on this page before any planned medical device purchase — particularly during festive sale events when health equipment codes are more active.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Ayurveda and Herbal Products</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Ayurvedic medicine brands and herbal wellness product platforms run codes consistently around festive periods, brand anniversary events, and seasonal wellness campaigns. First-order codes on direct-to-consumer ayurvedic brands tend to be strong. Subscription codes on herbal supplement platforms that offer monthly delivery programmes are worth checking if you buy ayurvedic products regularly.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Health Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Health Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Health purchases do not always follow a discretionary purchase calendar — medicines and diagnostics are need-driven. But planned health purchases and recurring order timing can be optimised around these windows.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New year wellness window",
              desc: "January is one of the most active months for health and wellness coupon codes — fitness app codes, supplement codes, and diagnostic health checkup codes all peak as platforms target new year health resolutions. If you are planning to start a supplement regimen, book a health checkup, or subscribe to a fitness platform, checking this page in January captures the strongest codes of the annual cycle in this subcategory.",
            },
            {
              title: "Pre-monsoon and monsoon season",
              desc: "The months before and during monsoon are when health supplement and immunity product codes are most active in India. Platforms push codes on vitamin C, zinc, and immunity-focused supplement ranges during this window as seasonal demand rises.",
            },
            {
              title: "Festive periods",
              desc: "Diwali and other major festive windows bring health platform codes alongside broader retail promotions — particularly on ayurvedic products, wellness gifts, and health check packages marketed as festive gifting options.",
            },
            {
              title: "World Health Day and awareness events",
              desc: "Platforms align promotional codes with global and national health awareness events — World Health Day, World Heart Day, Diabetes Awareness Month, and similar occasions trigger health check package discounts and telemedicine platform codes. Checking this page around these dates captures offers tied to awareness windows that are not always broadly publicised.",
            },
            {
              title: "Annual diagnostic checkup planning",
              desc: "Many people plan an annual full body checkup at the same time each year. Checking this page a few weeks before your planned booking — rather than on the day — gives you time to compare diagnostic packages across platforms and find the best active code before confirming your appointment.",
            },
            {
              title: "Supplement restock windows",
              desc: "Supplement containers have a predictable lifespan — if you track when you are running low and check this page a few days before reordering, you are more likely to find an active code than if you order reactively when you have completely run out.",
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
            Check this page before any planned health purchase or recurring medicine order — health codes cycle faster than most retail categories, and first-order codes in particular move quickly when new platforms launch or run acquisition campaigns.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Smart Health Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Health Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of managing health spending. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Consolidate pharmacy orders where possible",
              desc: "Flat discount codes on pharmacy platforms apply when your cart crosses a minimum order value. Consolidating a few days of smaller medicine needs into a single larger order — rather than placing multiple small orders — makes it easier to meet that threshold and apply the code.",
            },
            {
              title: "Use subscription delivery for recurring medicines",
              desc: "If you order the same medicines every month, setting up a subscription delivery on a pharmacy platform almost always delivers a lower per-order price than one-time orders. A subscription code applied at setup compounds the saving across every future delivery cycle.",
            },
            {
              title: "Book diagnostic packages over individual tests",
              desc: "Comprehensive health check packages on diagnostic platforms cost less per test than booking the same tests individually. A package code applied on top of already-bundled diagnostic pricing gives the best combined saving on a planned health checkup.",
            },
            {
              title: "Compare diagnostic platforms before booking",
              desc: "The same test panel can be priced differently across diagnostic platforms on the same day — and home collection availability and turnaround times also vary. Comparing both price and service terms before applying a code gives you the best overall outcome, not just the lowest price.",
            },
            {
              title: "Stack bank card offers with platform codes",
              desc: "Health platforms increasingly run card-linked cashback offers alongside standard promo codes. On a significant pharmacy order or a comprehensive diagnostic package, stacking both delivers a meaningful combined saving.",
            },
            {
              title: "Use free trials on wellness apps before subscribing annually",
              desc: "Wellness and fitness apps with free trial periods are worth fully evaluating before committing to an annual plan. A free trial tells you more about whether a platform fits your routine than any review — and if it does, applying an annual plan code at the end of the trial gives you the lowest entry price.",
            },
            {
              title: "Check whether your health insurance covers diagnostics",
              desc: "Many health insurance policies cover diagnostic tests either fully or partially. Before paying out of pocket for a lab test or health package — even with a discount code — confirm whether your policy covers the same tests. A code on a test your insurance already covers is not a saving.",
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
              q: "Do health coupon codes work on prescription medicines?",
              a: "Some do and some do not. Pharmacy platform codes vary in whether they apply to prescription-only medicines, OTC products, or both. The terms on each code listed here specify any such restrictions — check before adding prescription items to your cart.",
            },
            {
              q: "Can I use a health coupon code with a bank cashback offer?",
              a: "On most health platforms, yes. A platform promo code and a bank card cashback offer are processed independently and can both apply on the same order. This is worth pursuing on significant pharmacy orders or diagnostic package bookings.",
            },
            {
              q: "How often are health coupon codes updated on CouponsCrew?",
              a: "Daily. Pharmacy and supplement codes in particular can change on a weekly cycle tied to platform promotions and product-specific campaigns. Checking this page before each order rather than relying on a saved code is the right approach.",
            },
            {
              q: "Do diagnostic package codes apply to home sample collection?",
              a: "It depends on the platform. Some diagnostic codes apply equally to home collection and in-lab visits; others are specific to one option. The terms on each code here specify this where confirmed — check before booking.",
            },
            {
              q: "Are there health coupon codes for recurring medicine orders?",
              a: "Yes. Subscription and repeat delivery codes on pharmacy platforms are listed separately on this page from first-order codes. These apply to recurring deliveries and are worth checking at the point of setting up a subscription rather than applying a one-time code to each individual order.",
            },
            {
              q: "Do wellness app codes work on annual plans?",
              a: "Most wellness and fitness app codes on this page specify which plan tiers they apply to. Annual plan codes are listed separately from monthly codes — the per-month saving on an annual plan code is almost always better than a monthly plan code across the same period.",
            },
            {
              q: "Are ayurvedic and herbal product codes available year-round?",
              a: "They are available year-round but more active during festive periods and brand-specific sale events. Direct-to-consumer ayurvedic brands run first-order codes consistently — checking this page before your first order from a new brand is worth doing regardless of the time of year.",
            },
            {
              q: "Do telemedicine codes work for specialist consultations?",
              a: "Some do. General practitioner consultation codes are more broadly available than specialist codes. Specialist consultation codes appear during platform promotional windows and are tagged clearly on this page when available.",
            },
            {
              q: "What is the best time to book a diagnostic health checkup at the lowest price?",
              a: "The new year wellness window in January and platform-specific promotional events tied to health awareness occasions deliver the strongest diagnostic package codes. If your checkup timing is flexible, planning it around one of these windows and checking this page before booking consistently delivers a better price than booking without a code.",
            },
            {
              q: "Is it safe to order medicines online using a coupon code?",
              a: "Ordering from licensed online pharmacy platforms using a verified code from this page is the same as ordering without one — the platform's licence, dispensing standards, and delivery terms remain unchanged. Every code listed here is sourced from verified platform promotions. Always confirm a pharmacy platform is licensed before placing a medicine order, regardless of whether a code is involved.",
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
          Start Saving on Every Health Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every medicine order you place, every diagnostic test you book, and every supplement you restock is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified health coupon codes, health discount codes, and health promo codes across online pharmacy, supplements, telemedicine, diagnostics, wellness apps, medical devices, and ayurvedic products.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every health purchase, bookmark this page, and make sure no deal on your next order passes you by.
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
          Top Health Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { category: "Online Pharmacies", tag: "Flat Discounts" },
            { category: "Diagnostic Labs", tag: "Package Deals" },
            { category: "Supplements & Care", tag: "Restock Offers" },
            { category: "Telemedicine", tag: "Consult Promos" },
            { category: "Ayurveda & Wellness", tag: "First-Order Rates" },
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
          Smart Health Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Setup Refill Auto-Pay
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine subscription plan savings with promo codes for recurring medicine refills.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Bundle Diagnostic Panels
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Book comprehensive full body checkups rather than individual tests to maximize code impact.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Verified Checkout</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Licensed Pharmacy Partners</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified health promo code here and enter it directly on the licensed partner checkout page.
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
