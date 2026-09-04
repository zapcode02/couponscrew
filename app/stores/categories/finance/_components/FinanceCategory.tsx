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

export default function FinanceCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Finance')),
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
    { title: 'Compare before you apply', desc: 'Terms and processing fees on financial products can vary between platforms. Check what is on offer before assuming a listed deal is the best available.' },
    { title: 'Check for fee waivers', desc: 'Many finance coupon codes unlock a waiver on processing fees or annual charges — always check the offers section before completing an application.' },
    { title: 'Read the terms on cashback timelines', desc: 'Cashback and reward offers linked to a coupon code often credit after a delay or a minimum spend condition. Reading the terms upfront avoids surprises later.' },
    { title: 'Time your application', desc: 'Some platforms run limited-time offers tied to specific windows. Waiting a few days for a known promotional period can sometimes bring a better overall offer than applying immediately.' },
    { title: 'Compare processing fees before applying', desc: 'A coupon code that reduces a processing fee can matter more than a headline discount, especially on products with recurring charges.' },
  ];

  const faqs = [
    {
      q: 'Are the finance coupon codes on CouponsCrew verified?',
      a: 'Yes. Every finance coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a finance coupon code?',
      a: 'Copy the code from CouponsCrew, start the application or purchase process on the provider’s site or app, and paste the code in the promo or discount code field where indicated.',
    },
    {
      q: 'Can I use multiple finance coupon codes on one application?',
      a: 'Usually only one promo code can be applied per application or order. Check the terms shown with each code before applying, as eligibility can vary by provider.',
    },
    {
      q: 'How often are finance coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during promotional windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there finance coupon codes for new users?',
      a: 'Yes, many platforms offer first-time user discounts or fee waivers on finance products. These are often the best available offer, so it is worth checking before signing up.',
    },
    {
      q: 'Do these coupon codes guarantee approval or a specific rate?',
      a: 'No. A coupon code may reduce a fee or unlock a limited-time offer, but approval, eligibility, and any rates or terms are always determined by the provider based on their own criteria.',
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
              <span className="text-[#5B4FBE] font-semibold">Finance</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Finance</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse finance coupon codes, discount codes, and promo codes for personal loans, credit cards, insurance, banking, investment platforms, UPI apps, wallets, tax services, and other financial products. Discover verified savings, exclusive rewards, cashback offers, and limited-time financial deals.
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091237/Finance_msks78.webp"
                alt="Finance"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Finance Stores ({categoryStores.length})</h2>
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
                  const isActive = c.name === 'Finance';
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Offers', desc: 'We verify all offers and providers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Finance Deals', desc: 'Get the biggest discounts' },
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
            Cards, Insurance &amp; Wealth Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Finance Coupon Codes – Save on Cards, Insurance, Investing, and More
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Managing money is something everyone does every day — but paying unnecessary fees, missing cashback offers, or skipping a promo code on a financial product is something most people do not think twice about. Finance is one of the broadest and fastest-growing categories for discount codes and cashback offers online. From credit card cashback deals and insurance premium discounts to investing platform offers and UPI reward programmes, there is more opportunity to save on financial products than most people realise.
          </p>
          <p>
            CouponsCrew tracks and verifies finance coupon codes and cashback offers across credit cards, insurance platforms, investing apps, digital wallets, buy now pay later services, neo banks, rewards platforms, tax tools, and forex services. This page keeps you covered with tested finance discount codes and promo codes — updated regularly so you always have a working offer before you sign up, subscribe, or transact.
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
      Why Use Finance Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Finance is different from other coupon code categories in one important way — the savings here are not just about getting a product cheaper. In financial services, a promo code or cashback offer can reduce a platform fee, waive a joining charge, unlock a rewards bonus, or bring down the effective cost of a premium you are already paying. These are not one-time savings — they can reduce what you pay repeatedly, every time you use a product.
      </p>
      <p>
        The challenge with finance offers is that they are scattered across platform emails, app notifications, card statement inserts, and affiliate pages. Missing a cashback offer on an insurance renewal or a fee waiver on a trading account opening is easy because most people are not looking for finance codes the way they look for retail or travel codes.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to change that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Subcategory tagging</strong> — Every finance coupon code is tagged by product type: credit cards, insurance, investing, wallets, BNPL, neo banks, or tax tools — so you find what applies without filtering through the full list</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Offer type clarity</strong> — Joining fee waivers, cashback codes, first-transaction offers, and annual fee reversal codes are each labelled clearly</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Compliance awareness</strong> — Finance is a regulated category; every offer listed here is sourced from verified platform promotions and checked against publicly available terms</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and apply it directly when signing up or transacting</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use a Finance Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The application process varies by product type but follows a consistent pattern:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the finance coupon codes on this page. Check the platform, product type, and whether the offer is for new users, existing users, or a specific transaction type.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the finance platform the code is for — whether that is an insurance aggregator, an investing app, a wallet platform, or a BNPL service.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find the promo code field</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Finance platforms typically have a promo or referral code field during account signup, at the point of purchasing a policy, or at checkout for a transaction.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the finance discount code and apply it. Your discount, fee waiver, or cashback offer will reflect before you confirm the transaction.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm and complete</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Review the final terms — especially for insurance and lending products — before completing the transaction. Confirm the offer has applied as expected.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#FEF2F2] border border-[#FECACA] rounded-2xl text-sm text-[#991B1B]">
      <strong className="font-bold">Important:</strong> Finance products are regulated services. Always read the full terms and conditions of any financial product before signing up — a promo code reduces the cost, but the product's terms, charges, and obligations remain as stated by the provider. CouponsCrew lists offers from verified platform sources; we do not provide financial advice.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Finance Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Finance platforms offer a wider variety of deal structures than retail categories. Here is a breakdown of what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Joining fee waiver codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that waive the one-time joining or setup fee on a credit card, neo bank account, or trading account. These are among the most straightforward finance codes to use — the saving is immediate and the terms are simple.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First transaction cashback codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that trigger a cashback reward on your first transaction on a platform — common on UPI apps, digital wallets, and BNPL services. Worth using on your first meaningful transaction rather than a small test payment to maximise the cashback value.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Annual fee reversal offers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Promotional codes or offers that reduce or reverse the annual fee on a credit card or financial platform subscription when a spending or usage threshold is met. These are not always promo codes — sometimes they are offer structures that CouponsCrew flags when active.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Insurance premium discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply a discount on motor, health, term life, or travel insurance premiums when purchased or renewed through an insurance aggregator or direct insurer platform.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Investing platform signup codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes for new account openings on stock broking, mutual fund, or investment platforms. These often take the form of brokerage fee waivers, AMC charge reductions, or trading credit bonuses for new users.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Referral and invite codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Many finance platforms — particularly neo banks, UPI apps, and investing platforms — have active referral programmes where both the referrer and the new user receive a benefit. Referral codes for verified platforms are listed here when the offer is active.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">BNPL and pay-later codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">First-use and transaction-specific codes on buy now pay later platforms. These apply at checkout when you select a BNPL payment option and can reduce or eliminate processing fees on the deferred payment.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Rewards and cashback platform codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on platforms that aggregate rewards, cashback, and card-linked offers across merchants. These platforms stack value on top of existing card or wallet benefits — codes that unlock premium tiers or waive subscription fees are listed when available.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Tax and accounting tool codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discount codes on tax filing, bookkeeping, and accounting software subscriptions — relevant for individuals filing returns and for small business owners managing compliance costs.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Forex and remittance codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that reduce transaction fees or improve exchange rates on international money transfer and forex card services. These are especially relevant for students studying abroad, frequent travellers, and professionals sending money internationally.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Finance by Subcategory — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Finance covers a wide range of products and platforms. Here is how codes work across each major subcategory.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Credit Cards</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Credit card codes in this category cover joining fee waivers and first-year fee reversal offers from major card issuers. Codes here do not change the card's interest rate or credit limit — they reduce the cost of acquiring and holding the card during the promotional period. Checking this page before applying for a new credit card is a straightforward way to reduce upfront costs.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Insurance</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Insurance codes cover motor, health, term life, and travel insurance purchased through aggregator platforms and direct insurer websites. Premium discount codes tend to apply at the point of purchase or renewal — not after. If your policy is coming up for renewal, checking this page before you renew on the insurer's platform directly is worth doing. Aggregator platforms often combine their own codes with insurer-side discounts for stronger combined savings.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Buy Now Pay Later</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">BNPL platforms run consistent first-use codes and transaction-specific offers. Codes here typically apply at checkout when you select a pay-later option on a partner merchant — the saving comes from a reduced or zero processing fee on the deferred payment. BNPL codes are most valuable when used on higher-value purchases where the processing fee would otherwise be a meaningful cost.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Loans and Lending Platforms</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Lending platforms occasionally run promotional codes on processing fees for personal loans, salary advances, and credit lines. These are listed on this page when sourced from verified platform promotions.</p>
        <p className="text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] p-3 rounded-xl mt-2 text-xs leading-relaxed">
          <strong>Note:</strong> Loan and lending products are regulated financial services. Any offer listed here covers platform fees or promotional benefits only — not the loan terms, interest rates, or repayment conditions, which are set by the lender and governed by applicable regulations. Always read the full loan agreement before proceeding.
        </p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Investing and Stock Broking</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Investing platform codes cover account opening fee waivers, brokerage charge reductions for new users, and trading credit offers on stock broking and mutual fund platforms. These codes are most valuable at the point of account opening — applying one when you first register is easier than trying to apply it retrospectively. Existing user codes on investing platforms appear around platform anniversary events and during market-linked promotional windows.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">UPI and Digital Wallets</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">UPI and wallet platforms run some of the most frequent cashback offers in the finance category. First-transaction codes, merchant-specific cashback offers, and payment method promotions refresh regularly — sometimes weekly. These are smaller in absolute value than insurance or investing codes but consistent and repeatable across regular transactions.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Neo Banks</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Neo bank account opening codes typically cover joining fee waivers or initial deposit bonuses. These platforms target digitally active users and run referral-heavy code structures where both parties receive a benefit. Checking this page before opening a neo bank account captures offers that are not always prominently advertised on the platform itself.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Rewards and Cashback Platforms</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Rewards aggregator platforms — those that consolidate card offers, merchant cashback, and loyalty points — run codes on premium membership tiers and subscription fee waivers. These platforms add value on top of existing card and wallet benefits, so a code that reduces the cost of using them is a straightforward saving with no downside.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Tax and Accounting Tools</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Tax filing and accounting software codes cover individual return filing discounts and small business subscription offers. These tend to cluster around the tax filing season but are available outside that window on annual subscription plans. Checking this page before subscribing to a tax tool or renewing an accounting software plan is worth the few minutes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Forex and International Remittance</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Forex card and international remittance platform codes reduce transaction fees, improve exchange rate margins, or waive activation charges on international money cards. These are most relevant for students studying abroad, frequent international travellers, and professionals with overseas financial obligations. Codes in this subcategory are listed when verified offers are available from platform sources.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Finance Offer Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Finance Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Finance codes do not follow a single retail sale calendar. The best windows depend on the product type.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Tax filing season",
              desc: "The window leading up to the income tax return filing deadline brings the strongest codes on tax filing platforms and accounting tools. These are consistent yearly offers — checking this page in the months before the ITR deadline captures the best available codes.",
            },
            {
              title: "Insurance renewal windows",
              desc: "Motor and health insurance renewals are predictable — you know when your policy expires. Checking this page in the weeks before renewal gives you time to find and apply a discount code before the renewal processes automatically.",
            },
            {
              title: "New financial year start",
              desc: "April marks the start of the new financial year in India — a natural moment for reviewing financial products, opening investing accounts, and switching platforms. Finance codes around this window tend to be strong, particularly for investing and tax tools.",
            },
            {
              title: "Festive periods",
              desc: "Diwali and major festive windows bring finance platform offers across credit cards, BNPL services, and wallet cashback promotions. These are consistent yearly offers that layer on top of the merchant-side festive sales.",
            },
            {
              title: "Platform anniversary and launch events",
              desc: "Neo banks, investing apps, and fintech platforms run strong codes during their anniversary promotional events. New platform or feature launches also attract introductory codes for early adopters.",
            },
            {
              title: "Year-end financial planning",
              desc: "December and January are active windows for annual subscription codes on accounting tools, trading platform fee waivers, and investing account offers tied to the closing financial year.",
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
            Check this page before any new financial product signup, insurance renewal, or investing account opening — finance codes at the right moment reduce costs that would otherwise recur every year.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Finance Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Finance Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A code covers one part of your financial product costs. These habits cover the rest.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Compare before you sign up",
              desc: "Finance products — insurance in particular — vary significantly in price and coverage across providers. Using an aggregator platform to compare before applying a code gives you the best combined outcome: the right product at a reduced price.",
            },
            {
              title: "Use joining fee waiver codes on annual-fee cards",
              desc: "Joining fee waiver codes on credit cards are most valuable on cards with strong ongoing rewards — the waiver reduces your upfront cost while the card's benefits compound over the membership period.",
            },
            {
              title: "Stack wallet cashback with merchant discounts",
              desc: "UPI and wallet cashback offers apply on top of merchant-side discounts in most cases. Using a wallet with an active cashback offer on a platform that also has its own discount delivers stacked savings on the same transaction.",
            },
            {
              title: "Set renewal reminders for financial subscriptions",
              desc: "Tax tools, accounting software, and trading platform subscriptions auto-renew on most platforms. A reminder set a few days before renewal gives you time to find a code before the charge goes through rather than after.",
            },
            {
              title: "Use BNPL codes on planned purchases, not impulse ones",
              desc: "BNPL codes are most valuable when the purchase is already planned and budgeted. Using a pay-later code to defer a purchase you were not planning to make creates a repayment obligation without a genuine saving.",
            },
            {
              title: "Check whether your existing card offers free insurance benefits",
              desc: "Many premium credit cards bundle travel insurance, purchase protection, or health cover as card benefits. Before buying a standalone insurance policy, confirm whether any existing card you hold already covers that risk.",
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
              q: "Do finance coupon codes work on all financial products?",
              a: "Finance codes on this page are tagged by product type — credit cards, insurance, investing, wallets, and so on. A code for one product type does not transfer to another. Check the tag and terms before applying.",
            },
            {
              q: "Are finance coupon codes safe to use?",
              a: "Every code listed on this page is sourced from verified platform promotions. CouponsCrew does not list codes from unverified sources. For financial products specifically, always confirm the full product terms directly with the provider — a promo code reduces cost but does not change the product's regulatory standing or obligations.",
            },
            {
              q: "Do insurance discount codes apply to renewals as well as new policies?",
              a: "Some do and some do not. New policy codes are more common than renewal codes on insurance platforms. Renewal codes tend to appear during platform promotional windows and are flagged separately on this page when available.",
            },
            {
              q: "How often are finance coupon codes updated on CouponsCrew?",
              a: "The page is reviewed and updated regularly. Finance codes — particularly UPI and wallet offers — can change on a weekly cycle. Checking this page before each relevant transaction rather than relying on a saved code from an earlier visit is the right approach.",
            },
            {
              q: "Do investing platform codes work for existing account holders?",
              a: "Most investing platform codes are for new account openings rather than existing users. Existing user codes appear during platform anniversary events and promotional windows — these are listed separately on this page when active.",
            },
            {
              q: "Can I use a BNPL code alongside a merchant discount?",
              a: "On most merchant platforms, yes. A BNPL processing fee code and a merchant-side discount apply independently — the BNPL code reduces your deferred payment cost while the merchant discount reduces the purchase price. Check the merchant's checkout terms to confirm.",
            },
            {
              q: "Are there finance coupon codes specifically for tax filing?",
              a: "Yes. Tax filing platform codes appear consistently around the ITR deadline window and on annual subscription plans for accounting tools. These are listed on this page when verified offers are available.",
            },
            {
              q: "Do forex and remittance codes improve the exchange rate or reduce fees?",
              a: "Both types of codes exist. Some reduce the transaction fee or markup on the exchange rate; others waive activation charges on forex cards. The specific benefit is listed on each code on this page — check before applying to confirm which cost it addresses.",
            },
            {
              q: "Are neo bank account opening codes one-time use?",
              a: "Most neo bank referral and opening codes are single-use per account. They apply at the point of account creation and cannot be applied retrospectively. Using a code when you first register rather than adding it later is important.",
            },
            {
              q: "What is the best way to save on annual credit card fees?",
              a: "Look for a joining fee waiver code at the point of card application. For ongoing annual fee reversal, most card issuers have a spending threshold that triggers automatic fee reversal — this is a card-level benefit rather than a promo code, but CouponsCrew flags these thresholds in the offer description where relevant.",
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
          Start Saving on Every Financial Product
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every financial product you sign up for, every insurance policy you renew, and every platform fee you pay is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified finance coupon codes, finance discount codes, and finance promo codes across credit cards, insurance, investing, wallets, BNPL, neo banks, rewards platforms, tax tools, and forex services.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before any financial product decision, bookmark this page, and make sure no offer passes you by.
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
          Top Finance Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Credit Cards", tag: "Fee Waivers & Rewards" },
            { brand: "Insurance", tag: "Premium Discounts" },
            { brand: "Investing & Stocks", tag: "Zero Brokerage Offers" },
            { brand: "Wallets & UPI", tag: "Instant Cashback" },
            { brand: "Tax & Forex Tools", tag: "Seasonal Savings" },
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
          Pro Investor Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Stack Cashback Offers
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine merchant promo codes with UPI or wallet cashback deals on single checkouts.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Waive Joining Fees
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Use joining fee waiver codes on annual-fee cards to maximize net reward gains.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Portal Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified offer code here and enter it directly on the financial institution or provider's official portal.
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
