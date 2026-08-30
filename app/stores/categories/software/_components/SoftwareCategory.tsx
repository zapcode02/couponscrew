'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, Clock, CheckCircle2, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
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
  { name: 'Gaming', slug: 'gaming' },
  { name: 'Jewellery', slug: 'jewellery' },
  { name: 'Eyewear', slug: 'eyewear' },
  { name: 'Furniture', slug: 'furniture' },
];

export default function SoftwareCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Software')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Compare annual vs monthly pricing', desc: 'Most software subscriptions offer a discount for paying annually instead of monthly. If you plan to use a tool long-term, the annual plan combined with a coupon code usually works out cheaper overall.' },
    { title: 'Check for student and education discounts', desc: 'Many software providers offer reduced pricing for students, teachers, and educational institutions. Verify your eligibility before paying full price — the discount can often be stacked with a promo code.' },
    { title: 'Look for bundle deals', desc: 'Some vendors sell suites or bundles that combine multiple tools at a lower combined price than buying each one separately. Check if a bundle covers what you need before purchasing individual licenses.' },
    { title: 'Check renewal pricing before the trial ends', desc: 'Introductory or trial pricing can be very different from the renewal price. Look at what you will be charged after the first billing cycle so a coupon code does not just delay a higher cost.' },
    { title: 'Watch for seasonal software sales', desc: 'Software publishers frequently run promotions around major sale periods. Waiting for one of these windows, and applying a verified coupon code on top, often brings the best available price.' },
  ];

  const faqs = [
    {
      q: 'Are the software coupon codes on CouponsCrew verified?',
      a: 'Yes. Every software coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a software coupon code?',
      a: 'Copy the code from CouponsCrew, select the plan or license you want on the provider’s website, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple software coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order or subscription. Check the terms shown with each code before applying, since some providers restrict codes to new customers only.',
    },
    {
      q: 'How often are software coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there software coupon codes for new users?',
      a: 'Yes, many software providers offer first-purchase or first-subscription discounts. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do software coupon codes work on subscription renewals?',
      a: 'It depends on the provider. Some coupon codes apply only to the first billing cycle, while others reduce the price for as long as the subscription stays active. Always check the terms shown with each code.',
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
              <span className="text-[#22C55E] font-semibold">Software</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Software</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse software coupon codes, discount codes, and promo codes for AI tools, productivity apps, design software, antivirus, VPNs, developer tools, cloud platforms, business software, and premium subscriptions. Discover verified discounts, exclusive deals, and savings on leading software solutions.
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091236/software_cgwsul.webp"
                alt="Software"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Software Stores ({categoryStores.length})</h2>
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Licenses', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Software Deals', desc: 'Get the biggest discounts' },
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
            Apps, Tools &amp; SaaS Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Software Coupon Codes – Save on Apps, Tools, and Subscriptions
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Buying software without checking for a coupon code first is one of the easiest ways to overpay for something you were going to buy anyway. Software is a category where discount codes, free trial extensions, and plan upgrade offers are available consistently — publishers push promotional codes during product launches, annual billing cycles, and competitive windows when they are actively trying to win customers from rival tools.
          </p>
          <p>
            CouponsCrew tracks and verifies software coupon codes daily across productivity tools, creative software, security and antivirus programmes, business applications, developer tools, design software, and operating system licences. Whether you are buying a single-user licence for personal use or a team plan for a growing business, this page brings together the best software discount codes and promo codes from leading publishers — tested before they go live, updated regularly.
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
          Why Use Software Coupon Codes from CouponsCrew?
        </h2>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Software pricing is less transparent than most other categories. The same tool can be available at different prices depending on whether you are buying a monthly or annual plan, a new licence or a renewal, a personal or business tier, or whether you arrived at the checkout page via a promotional link. That opacity works against buyers — and coupon codes are one of the most direct ways to cut through it.
          </p>
          <p>
            Beyond the headline price, software costs can compound through add-ons, seat expansions, and annual renewals. A code that reduces the first-year cost of a tool you use every day has a compounding effect if it also sets a lower baseline for negotiating renewal pricing.
          </p>
          <p className="font-bold text-[#1A1A2E] pt-2">
            Here is what CouponsCrew does to help:
          </p>
          <ul className="space-y-3 pl-1 mt-2">
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
              <span><strong className="text-[#1A1A2E]">Category and use case tagging</strong> — Every software coupon code is tagged by type: productivity, security, design, development, business, or creative — so you find what applies to your purchase without filtering through unrelated tools</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
              <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
              <span><strong className="text-[#1A1A2E]">Licence type clarity</strong> — Annual, monthly, perpetual, and team plan codes are labelled separately — they behave differently at checkout and have different renewal implications</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
              <span><strong className="text-[#1A1A2E]">Student and educator discount tracking</strong> — Software publishers run some of the deepest discounts for students and educators; these are flagged separately when available</span>
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
          How to Use a Software Coupon Code
        </h2>
        <p className="text-sm text-[#4A4A6A] mb-6">
          The checkout process for software purchases is mostly straightforward but has a few specifics worth knowing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
              <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the software coupon codes on this page. Check the publisher, product name, and licence type the code applies to before copying.</p>
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
              <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Go to the publisher or reseller</h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the software publisher's website or the authorised reseller the code is for. Select your plan — individual, team, or business — and your billing cycle before proceeding to checkout.</p>
            </div>
          </div>
          <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
              <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the checkout page</h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — most software publishers have this on the cart or payment page, before you enter payment details.</p>
            </div>
          </div>
          <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
              <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the software discount code and apply it. Your discounted price reflects in the order summary before you complete payment.</p>
            </div>
          </div>
          <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
              <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm your licence details</h3>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Before paying, confirm the licence type, number of seats, and billing cycle. Software purchases are generally non-refundable once a licence key is issued — confirming the details before payment avoids complications.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
          <strong className="font-bold">Pro tip:</strong> Software coupon codes are often plan-specific — a code for an individual annual plan may not apply to a monthly plan or a team plan on the same product. Check which plan tier the code is valid for before selecting your plan, not after you have already configured your order.
        </div>
      </div>

      {/* Types of Deals Section */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
          Types of Software Deals You Will Find Here
        </h2>
        <p className="text-sm text-[#4A4A6A] mb-6">
          Software publishers offer a wider range of deal structures than most retail categories because the purchase model is more varied. Here is what to expect:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on the software price or subscription fee. Common across most software categories and typically the most straightforward type to use — the saving applies directly to the plan price without complex conditions.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Annual plan codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply specifically to annual billing cycle purchases. Annual plan codes on software almost always deliver a lower effective monthly rate than monthly plan codes — and the publisher benefits from the longer commitment, which is why these codes tend to be more generous.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Free trial extension codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that extend a free trial beyond the standard period — giving you more time to evaluate a tool before committing. Worth using before purchasing a long-duration subscription on a tool you have not fully tested.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New user codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">First-purchase discount codes for users buying a licence on a platform for the first time. These are strong on most major software publishers and worth saving for the tool you are most committed to buying rather than a speculative first purchase.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Team and business plan codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply to multi-seat or team plan purchases. These tend to be available during B2B promotional windows and via reseller channels rather than as always-on consumer offers.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Student and educator codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Software publishers offer some of the steepest discounts for verified students and educators — often significantly deeper than standard promotional codes. These require verification of student or educator status but are consistently available on major creative, productivity, and development tools.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Upgrade codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that reduce the cost of upgrading from a lower-tier plan to a higher one, or from an older version of a software licence to a current one. Worth checking before paying the full upgrade price on any tool you already use.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bundle codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when purchasing a suite of tools together rather than individual products. Software publishers with multiple products in their catalogue frequently bundle them at a lower combined price than individual licences — bundle codes on top of already-bundled pricing extend the saving further.</p>
          </div>
          <div className="p-4 rounded-2xl border border-[#E8E8F0]">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Perpetual licence codes</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes on one-time perpetual licence purchases rather than subscriptions. These are less common as publishers move toward subscription models but still available on specific tools — particularly in the development and design categories.</p>
          </div>
        </div>
      </div>

      {/* Categories Breakdown */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
          Software by Category — Where to Find the Best Codes
        </h2>
        <p className="text-sm text-[#4A4A6A] mb-6">
          Software covers a wide range of tools and use cases. Here is how codes behave across each major subcategory.
        </p>
        <div className="space-y-4">
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Productivity and Office Tools</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Productivity software — word processors, spreadsheet tools, presentation apps, note-taking platforms, and project management tools — is one of the most competitive software segments for coupon codes. The shift to subscription models across most major productivity suites has made annual plan codes a consistent offer type in this category. Student and educator codes are particularly strong here — major productivity publishers have longstanding education pricing programmes with deep discounts.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Security and Antivirus Software</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Security software codes are available year-round but cluster around new version releases and annual renewal windows. Multi-device and family plan codes — covering several devices under a single licence — deliver the best per-device saving in this category. Renewal codes are worth checking specifically before your current security subscription auto-renews, as publishers sometimes offer retention codes that bring renewal pricing closer to new user rates.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Creative and Design Software</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Creative software — photo editing, video editing, graphic design, illustration, and font tools — has some of the most significant student discount programmes of any software category. Subscription-based creative suites run annual plan codes consistently, and new product launch codes appear when publishers release major version updates. Perpetual licence codes on creative tools still appear occasionally on tools that have not fully transitioned to subscription models.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Developer Tools and IDEs</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Developer tools — code editors, integrated development environments, version control platforms, API tools, and database management software — run codes primarily during developer conference seasons and product launch windows. Team plan codes are more common here than individual codes given the professional use case. Open-source alternatives exist for many developer tools, but for proprietary tools with active code cycles, checking this page before subscribing is worth doing.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Business and CRM Software</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Business software — customer relationship management tools, accounting platforms, HR systems, and communication tools — runs codes primarily via reseller channels and during B2B promotional periods. Annual plan codes are the most consistent offer type in this subcategory. Free trial extension codes are particularly valuable here — business software decisions involve multiple stakeholders and a longer trial period genuinely helps evaluation before a team commits to a paid plan.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cloud Storage and Backup</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">Cloud storage platform codes cover personal and business plan subscriptions. Annual plan codes deliver the best per-month pricing in this subcategory. Family and shared plan codes — covering multiple users under one subscription — are worth checking if several people in a household or small team need cloud storage from the same provider.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">VPN and Privacy Tools</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">VPN subscription codes are among the most competitive in the software category — providers discount aggressively to win subscribers from rivals. Multi-year plan codes deliver the lowest effective monthly rate on VPN subscriptions and are the most common offer type from major providers. Checking this page before subscribing to any VPN service — rather than buying directly from the provider — almost always surfaces a better rate than the homepage pricing.</p>
          </div>
          <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
            <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Operating System and Utility Software</h3>
            <p className="text-sm text-[#4A4A6A] leading-relaxed">OS licences, system optimisation tools, file management utilities, and driver update tools run codes during major OS version releases and periodic promotional windows. These codes are less frequent than subscription software codes but can deliver significant savings on one-time licence purchases.</p>
          </div>
        </div>
      </div>
    </div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Software Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Software Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Software does not follow a single retail sale calendar — discount windows tie more to product cycles and competitive dynamics than to festive seasons, though those matter too.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New version and product launches",
              desc: "When a software publisher releases a major new version, launch codes go live for both the new version and — often more generously — the outgoing version being cleared. If you do not urgently need the latest features, a launch-window code on the previous version is often the strongest savings opportunity in the annual cycle.",
            },
            {
              title: "Black Friday and Cyber Monday",
              desc: "This is the most competitive discount window for software of the year. Publishers across categories — productivity, security, creative, and developer tools — run some of their deepest annual codes during this window. Timing a planned software purchase around Black Friday is worth doing if your need is not urgent.",
            },
            {
              title: "Annual renewal windows",
              desc: "As your current software subscription approaches renewal, checking this page for a renewal code is a straightforward savings opportunity. Publishers sometimes offer retention codes not prominently advertised — these are tracked and listed here when available.",
            },
            {
              title: "Back-to-school season",
              desc: "The July–September back-to-school window is when student and educator codes on productivity and creative software are most consistently available. If you are a student or educator, this window gives access to the deepest verified discounts of the year on most major tools.",
            },
            {
              title: "Developer conference seasons",
              desc: "Major developer conferences — held typically in spring and autumn — coincide with developer tool and cloud service promotional codes. Publishers push codes timed to conference announcements to drive adoption of new or updated tools.",
            },
            {
              title: "Year-end planning window",
              desc: "December is when businesses review software subscriptions and plan tool investments for the coming year. Publishers respond with year-end codes on business and team plan software — worth checking if you are planning a software stack review or procurement for the next financial year.",
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
            Check this page before any software purchase or renewal — the right code at the right moment can reduce what is effectively a recurring annual cost, not just a one-time purchase price.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            SaaS Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Software Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of keeping software costs manageable over time. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Always buy annual over monthly where possible",
              desc: "Monthly software subscriptions are convenient but consistently more expensive per month than annual plans. A coupon code applied to an annual plan at signup locks in the lowest effective monthly rate available — often lower than any code applied to a monthly plan later.",
            },
            {
              title: "Audit your active subscriptions before buying new tools",
              desc: "Software subscriptions accumulate. Before adding a new tool, confirm you are not already paying for something that overlaps in functionality. A coupon code on a tool you do not need is not a saving — it is a lower entry price on an ongoing cost.",
            },
            {
              title: "Use free trials before committing to annual plans",
              desc: "Most software publishers offer free trials. Using a trial before committing to an annual plan — particularly on tools with steep learning curves or complex feature sets — prevents paying a year upfront for a tool that does not fit your workflow.",
            },
            {
              title: "Check student and educator pricing before paying standard rates",
              desc: "Student and educator discounts on major software tools are among the deepest available in any category. If you qualify, these should be your starting point — not an afterthought. Student pricing on creative suites in particular can be a fraction of the standard subscription price.",
            },
            {
              title: "Compare reseller pricing against publisher direct pricing",
              desc: "Authorised software resellers sometimes offer lower prices than the publisher's own website — particularly on perpetual licences and business plans. Checking both before applying a code ensures you are discounting from the lower starting point.",
            },
            {
              title: "Set renewal reminders before auto-renewals process",
              desc: "Software subscriptions auto-renew on most platforms. Setting a calendar reminder two weeks before renewal gives you time to find a renewal code, compare alternatives, or negotiate a better rate — rather than letting the full renewal price go through by default.",
            },
            {
              title: "Check whether your employer or institution provides software access",
              desc: "Many businesses, universities, and educational institutions provide staff and students with free or heavily subsidised access to major software tools. Confirming what is available through your institution before buying at consumer pricing avoids paying for something you already have access to.",
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
              q: "Do software coupon codes work on all plan tiers?",
              a: "Not always. Software discount codes are often plan-specific — valid for individual annual plans but not monthly plans, or for personal licences but not team plans. The terms on each code listed here specify which plan tiers are eligible — check before selecting your plan.",
            },
            {
              q: "Can I use a software coupon code on a renewal?",
              a: "Some codes are for new purchases only; renewal codes exist but are listed separately. Checking this page before your renewal date gives you access to any available renewal codes — these are tracked and listed separately from new user codes when available.",
            },
            {
              q: "How long do software coupon codes stay valid?",
              a: "It varies significantly. Some software codes are evergreen and remain valid for months; others are tied to launch windows or promotional periods and expire within days. Time-sensitive codes are flagged on this page — using a code the day you find it rather than saving it for later is always the safer approach.",
            },
            {
              q: "Why did my software coupon code not work at checkout?",
              a: "The most common reasons: the code has expired, it applies to a different plan tier than the one you selected, it is for new users only and you already have an account, or the code is region-restricted. Check the terms listed on the code and confirm your plan selection before retrying.",
            },
            {
              q: "Are student software discounts better than standard coupon codes?",
              a: "In most cases, yes. Student and educator discounts on major software tools are often deeper than the best available standard promotional codes. If you qualify for student or educator pricing, that should be your starting point — not an alternative to check after standard codes fail.",
            },
            {
              q: "Do software bundle codes work across all tools in a suite?",
              a: "Bundle codes typically apply to the full suite as a single purchase rather than to individual tools within the suite. If you are only buying one tool from a suite, a bundle code may not apply — check whether a single-product code is available separately.",
            },
            {
              q: "What is the best time of year to buy software at the lowest price?",
              a: "Black Friday is the most competitive annual window for software discounts across categories. New version launch windows are the second-best moment — particularly for codes on outgoing versions being cleared. Back-to-school season is the strongest window specifically for student and educator codes.",
            },
            {
              q: "Do VPN coupon codes work on all subscription lengths?",
              a: "VPN codes are typically strongest on multi-year plans. Monthly plan codes exist but deliver a smaller absolute saving. If you are committing to a VPN subscription, checking the multi-year plan code on this page before buying a monthly plan is worth doing.",
            },
            {
              q: "Are perpetual licence codes still available for software?",
              a: "Yes, though less commonly than subscription codes as publishers have largely moved to subscription models. Perpetual licence codes appear on specific tools — particularly in the development and utility software categories — and are listed on this page when verified offers are available.",
            },
            {
              q: "Is it safe to buy software licences using a coupon code from CouponsCrew?",
              a: "Every code on this page is sourced from verified publisher promotions or authorised reseller offers. Buying software using a verified code from an authorised source is the same as buying directly — the licence is genuine and the publisher's support and update terms apply as normal.",
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
          Start Saving on Every Software Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every software subscription you start, every licence you buy, and every renewal you process is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified software coupon codes, software discount codes, and software promo codes across productivity tools, security software, creative applications, developer tools, business software, VPNs, and cloud storage.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every software purchase or renewal, bookmark this page, and make sure no deal on your next tool passes you by.
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
          Top Software Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { category: "Productivity & SaaS", tag: "Annual Plan Discounts" },
            { category: "Security & VPNs", tag: "Multi-Year Deals" },
            { category: "Creative Suites", tag: "Student & Launch Rates" },
            { category: "Developer Tools", tag: "Conference Promos" },
            { category: "Business Apps", tag: "Team Seat Offers" },
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
          Smart SaaS Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Choose Annual Billing
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine annual plan base savings with working promo codes for maximum discount depth.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Check Edu/Student Rates
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Unlock academic pricing tiers before applying additional promotional codes.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Publisher Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified software promo code here and enter it directly on the developer's official site.
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
