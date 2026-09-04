'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,CheckCircle2, Lightbulb, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
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
  { name: 'Food & Grocery', slug: 'food-and-grocery' },
  { name: 'Travel', slug: 'travel' },
  { name: 'Education', slug: 'education' },
  { name: 'Entertainment', slug: 'entertainment' },
];

export default function ElectronicsCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Electronics')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Compare before you buy', desc: 'Prices on electronics can shift during a sale window. Check the price history before assuming a listed discount is the best it will get.' },
    { title: 'Stack with a bank offer', desc: 'Many electronics coupon codes can be combined with an instant bank discount or cashback offer at checkout — always check the offers tab before paying.' },
    { title: 'Watch for exchange bonuses', desc: 'Trading in an old device alongside an active promo code often brings the effective price down further, especially on phones and TVs.' },
    { title: 'Time high-value purchases', desc: 'For big-ticket items like laptops and appliances, waiting for a known sale window usually saves more than a one-off coupon code alone.' },
    { title: 'Check for no-cost EMI', desc: 'On larger purchases, a no-cost EMI option combined with a coupon code can reduce the immediate cost without adding extra interest.' },
  ];

  const faqs = [
    {
      q: 'Are the electronics coupon codes on CouponsCrew verified?',
      a: 'Yes. Every electronics coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use an electronics coupon code?',
      a: 'Copy the code from CouponsCrew, add the product to your cart on the retailer’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple electronics coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are electronics coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there electronics coupon codes for new users?',
      a: 'Yes, many platforms offer first-order discounts on electronics. These are often the best available discount, so it is worth checking before creating a new account.',
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
              <span className="text-[#5B4FBE] font-semibold">Electronics</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Electronics</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse the best electronics coupons and offers for August 2026. Save on mobiles, laptops, televisions, headphones, gaming devices, cameras, wearables, home appliances, and other gadgets with verified deals, exclusive discounts, cashback offers, and seasonal promotions from top brands.
              
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788085983/electronics_xz4hcp.webp"
                alt="Electronics"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Electronics Stores ({categoryStores.length})</h2>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Electronics Deals', desc: 'Get the biggest discounts' },
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
          <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">
            Electronics Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Electronics Coupon Codes – Save on Every Device, Every Day
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Buying electronics online without a coupon code is the one mistake most shoppers only make once. Prices shift fast in this category, brands push out discount codes during every major sale window, and the difference between a good deal and a great one often comes down to a working promo code applied at the right moment. CouponsCrew tracks and verifies electronics coupon codes daily so you always have a tested code ready when it counts.
          </p>
          <p>
            Whether you are looking to save on smartphones, laptops, headphones, smart TVs, or home appliances, this page brings together the best electronics discount codes and promo codes from leading online stores — all in one place, refreshed regularly.
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
      Why Use Electronics Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Electronics is one of the highest-value categories you can shop online. A single coupon code on a laptop or smartphone can save you more than most grocery or fashion codes put together. That is why getting the code right matters more here than in almost any other category.
      </p>
      <p>
        The problem most shoppers run into is finding codes that actually work. Dead codes, expired offers, and category-restricted promos waste time — especially at checkout when a payment session is live and the clock is ticking.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does differently:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified daily</strong> — Every electronics coupon code on this page is tested before it goes live</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Category-specific</strong> — Codes are tagged by product type so you know what works for phones, laptops, or appliances before you copy anything</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No clutter</strong> — Expired codes are pulled immediately, not left sitting on the page to waste your time</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Bank offer tracking</strong> — Electronics is where bank cashback codes stack best with base discounts; we track those too</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and use it directly</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use an Electronics Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process is consistent across most major electronics platforms:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the electronics coupon codes on this page and click the one that matches your purchase.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 2</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Copy it</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">The code copies to your clipboard automatically when you click.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 3</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Go to the store</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the electronics platform the code is for and add your item to cart.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach checkout</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the coupon or promo code field — it is usually on the payment or order summary page.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the electronics discount code and hit apply. Your discount reflects in the order total immediately.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Complete payment</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a bank offer applies, use the eligible card to stack additional savings.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Always check the minimum cart value and product category before you start shopping. Some electronics promo codes are valid only on specific subcategories — phones but not accessories, or laptops but not monitors. Checking this upfront saves a trip back to this page mid-checkout.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Electronics Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Not every electronics discount code works the same way. Here is a breakdown of what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount off your cart total. These work best on high-value items where even a small percentage translates to significant savings in absolute terms.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum order value. Common during sale events and brand-specific promotions.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when you pay with a specific credit or debit card. Electronics is the category where these stack best — a base discount plus a bank offer can add up considerably on a high-ticket item.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New user codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">First-order discount codes for shoppers signing up on a platform for the first time. Worth saving for a planned big-ticket electronics purchase rather than a small accessory order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">App-exclusive codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discounts that only activate when shopping through the brand's mobile app. Most major electronics platforms have app-only pricing that beats desktop, and promo codes on top of that push savings further.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Exchange offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Some electronics retailers offer promo codes tied to device exchange programmes. If you are upgrading a phone or laptop, these can reduce the effective price significantly when combined with the base exchange value.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">EMI offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that unlock lower processing fees or zero-cost EMI on electronics purchases above a threshold. Useful when buying high-value items on credit and you want to spread the cost without paying extra for it.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Cashback offers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage of your spend returned as wallet money or store credit. Works differently from a direct discount — the savings come after purchase, but they add up well if you shop a platform regularly.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Electronics by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Electronics is a broad category. Knowing which product type tends to attract the strongest codes helps you plan better.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Smartphones and Mobile Phones</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Phones are where the most competitive electronics coupon codes appear. Launch windows for new models almost always come with introductory offers, and when a newer generation drops, codes on the previous model follow quickly. Bank offer codes stack particularly well on phones because of the high cart value.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Laptops and Computers</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Laptops attract strong flat-discount and cashback codes, especially during back-to-school seasons and the festive sale window. Gaming laptops and high-performance models often appear in exclusive app-only deals that are not listed anywhere else.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Audio and Headphones</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Wireless earbuds and over-ear headphones are some of the most frequently discounted electronics items. Codes in this subcategory tend to be percentage-based and apply broadly across brands, making them easier to use without checking fine print.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Smart TVs and Displays</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">TVs see the steepest absolute discounts during festive sales. Exchange offer codes work well here — trading in an older television alongside a promo code often delivers the best combined price.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Home Appliances</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Refrigerators, washing machines, and air conditioners follow a seasonal discount pattern. Summer months bring air conditioner deals; year-end festive sales cover the full range. EMI codes are worth checking for high-value appliance purchases.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Accessories and Peripherals</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Chargers, cases, cables, and peripherals are where new user codes are best spent. The base price is lower, but stacking a first-order code on a bundled accessory purchase is an easy way to extract value from a one-time offer.</p>
      </div>
    </div>
  </div>

  {/* Best Times to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Best Times to Use Electronics Coupon Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Electronics follows a predictable sale calendar. Timing your purchase around these windows — and combining the sale price with an active coupon code — is where the biggest savings happen.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Festive season sales</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">The October–November window is the most competitive period for electronics discounts. Every major platform runs deep offers on phones, laptops, TVs, and appliances. This is when the highest-value electronics coupon codes are typically available.</p>
      </div>
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Republic Day and Independence Day sales</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Both are well-established sale periods across Indian electronics platforms, with platform-wide discounts and brand-specific promo codes running across multiple days.</p>
      </div>
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New product launch windows</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">When a new phone or laptop model launches, retailers often push electronics discount codes on the previous generation to clear stock. If you are flexible on the latest model, this is a reliable window for genuine savings without the launch-day premium.</p>
      </div>
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">End of financial year (March)</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Retail platforms run clearance sales in March to close inventory cycles. Electronics — especially home appliances — see strong discounts here that do not always appear at other times of year.</p>
      </div>
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Mid-year sales (June–July)</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A second major sale window after the festive season. Useful for planned purchases that do not need to happen in Q4.</p>
      </div>
      <div className="bg-[#F8F8FC] p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Brand anniversary sales</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Platform anniversary events are among the most competitive times to find electronics promo codes. These windows attract aggressive brand-side promotions that often go deeper than standard festive offers.</p>
      </div>
    </div>
    <p className="text-sm font-semibold text-[#1A1A2E] bg-[#F8F8FC] p-4 rounded-xl text-center border border-[#E8E8F0]">
      Bookmark this page and check it before any major electronics purchase. New codes go live as sale events are announced, and high-value codes on flagship devices move fast.
    </p>
  </div>
</div>

      {/* ARTICLE BLOCK 2: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Smart Buyer Tactics
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Electronics Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one lever. Here are others worth using at the same time:
        </p>

        <div className="mt-6 space-y-4">
          {savingTips.map((tip, index) => (
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

      {/* ARTICLE BLOCK 3: FAQ SECTION WITH ACCORDIONS */}
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
          {faqs.map((faq, index) => (
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

      {/* ARTICLE BLOCK 4: CTA / FOOTER */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
          <span className="text-xs font-black text-white/60 uppercase tracking-widest">
            Start Saving
          </span>
        </div>
        <h2 className="text-2xl font-black text-white leading-tight">
          Start Saving on Electronics Today
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every electronics purchase is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified electronics coupon codes, electronics discount codes, and electronics promo codes so you always have a working code ready when you need one.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before your next purchase, bookmark this page, and make sure no deal passes you by.
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
          Top Electronics Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Smartphones", tag: "Devices & Accessories" },
            { brand: "Laptops", tag: "Computers & Peripherals" },
            { brand: "Audio & Wearables", tag: "Headphones & Watches" },
            { brand: "Home Appliances", tag: "Smart TVs & Home" },
            { brand: "Refurbished", tag: "Open-Box & Deals" },
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
              Stack & Layer
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine verified promo codes with bank cashback, wallet offers, and exchange bonuses.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              App First Strategy
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Check merchant app prices first before applying coupon codes for maximum savings.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Zero Risk</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Store Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified code here and apply directly on the merchant's official store or mobile app at checkout.
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
