'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  Sparkles, RefreshCw, Lock, HelpCircle,
  ShoppingBag, Heart, Dumbbell, Home, Shirt, Monitor, UtensilsCrossed, Plane,
  GraduationCap, Tv, Wallet, Globe, Activity, Trophy, Code, Gamepad2,
  Gem, Glasses, Armchair,
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';
import { STORES_DATA } from '../../../../../src/data/stores';

function getStoreHref(storeName: string): string {
  const key = storeName.toLowerCase();
  if (key === 'pepperfry') return '/stores/pepperfry-coupon-code';
  if (key === 'amazon') return '/stores/amazon-coupon-code';
  return '/stores';
}

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

export default function BeautyCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Beauty')),
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
              <span className="text-[#5B4FBE] font-semibold">Beauty</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Beauty</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">Skincare kits and beauty products from trusted brands — verified Amazon prices, no fake deals.</p>
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
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 12%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/beauty_akkpbg.webp"
                alt="Beauty"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Beauty Stores ({categoryStores.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deals linked directly to Amazon.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryStores.map(store => (
                <Link
                  key={store.id}
                  href={getStoreHref(store.name)}
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
                  const isActive = c.name === 'Beauty';
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Beauty Deals', desc: 'Get the biggest discounts' },
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Beauty Hub</span>
            </div>
            <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Beauty Coupon Codes – Save on Skincare, Makeup &amp; More
            </h1>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Searching for the best beauty coupon codes? CouponsCrew has you covered. We track and verify the latest beauty discount codes and skincare promo codes from top brands like Nykaa, Mamaearth, Dot &amp; Key, The Body Shop, Minimalist, Plum, and Flipkart — updated daily so you always get working deals at checkout.
              </p>
              <p>
                Whether you are building a skincare routine, stocking up on makeup, or exploring haircare, our beauty coupon codes help you save more on every order.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2: WHY USE US */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Why Use Beauty Coupon Codes from CouponsCrew?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Beauty products add up fast. A serum here, a moisturiser there, and suddenly your cart total is much higher than expected. That is exactly why beauty discount codes exist — and why CouponsCrew makes it easy to find one before every purchase.
              </p>
              <p>
                We monitor beauty brands daily and update our skincare promo codes and beauty coupon codes as soon as new deals go live. Every offer is verified so you are not copy-pasting expired codes at checkout.
              </p>
              <p className="font-bold text-[#1A1A2E] pt-2">
                Here is what sets CouponsCrew apart for beauty shoppers:
              </p>
              
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Daily updates</strong> – New beauty coupon codes added every day, more during sale events</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified codes only</strong> – Expired or inactive codes are removed promptly</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All brands in one place</strong> – Nykaa, Mamaearth, Minimalist, Flipkart and more, all here</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>No account needed</strong> – Just grab the code and go</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 3: TOP BRANDS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Brand Partners</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Top Beauty Brands to Shop With Discount Codes
            </h2>
            
            <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
              {/* Nykaa */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FC2779]" />
                  Nykaa Coupon Codes
                </h3>
                <p className="mb-2">
                  Nykaa is one of the largest dedicated beauty platforms available online, offering thousands of products across skincare, makeup, haircare, fragrances, and wellness. Nykaa beauty coupon codes are some of the most sought-after deals in the category, especially during their Pink Friday Sale and Nykaa Beauty Fest events.
                </p>
                <p>
                  Nykaa also stocks international brands that are harder to find elsewhere, making their beauty discount codes especially valuable for premium product shoppers. First-time users typically get access to exclusive skincare promo codes that bring down the initial order total significantly.
                </p>
              </div>

              {/* Mamaearth */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00AFEF]" />
                  Mamaearth Coupon Codes
                </h3>
                <p className="mb-2">
                  Mamaearth has built a strong reputation around natural, toxin-free formulations for skincare, haircare, and baby care. Their beauty coupon codes are popular among shoppers looking for clean ingredients at affordable prices.
                </p>
                <p>
                  Mamaearth regularly offers bundle deals and combo packs at reduced prices, and combining these with a beauty discount code from CouponsCrew stretches your savings even further. Look out for Mamaearth sale events around Earth Day and festive seasons for the deepest discounts.
                </p>
              </div>

              {/* Dot & Key */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#EC4899]" />
                  Dot &amp; Key Coupon Codes
                </h3>
                <p className="mb-2">
                  Dot &amp; Key is known for its fun, effective, and skin-focused formulas covering everything from sunscreens and brightening serums to overnight masks. Their products have developed a loyal following among skincare enthusiasts who prioritise results-driven routines.
                </p>
                <p>
                  Dot &amp; Key beauty coupon codes are frequently available for new customers and during platform-wide sales on Nykaa and their own website. Their skincare promo codes are worth stacking with any ongoing platform sale for maximum savings.
                </p>
              </div>

              {/* The Body Shop */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#004225]" />
                  The Body Shop Coupon Codes
                </h3>
                <p className="mb-2">
                  The Body Shop brings ethically sourced, cruelty-free beauty products to shoppers worldwide. Their range spans skincare, body care, makeup, and fragrances — all made with community trade ingredients and a strong sustainability focus.
                </p>
                <p>
                  The Body Shop beauty discount codes are most active during their seasonal promotions and membership events. Joining their Love Your Body Club can unlock member-exclusive skincare promo codes on top of regular sale pricing.
                </p>
              </div>

              {/* Minimalist */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#000000]" />
                  Minimalist Coupon Codes
                </h3>
                <p className="mb-2">
                  Minimalist has rapidly become a favourite for ingredient-conscious skincare shoppers. Their science-backed formulas feature active ingredients like niacinamide, retinol, AHAs, and vitamin C at some of the most competitive price points in the market.
                </p>
                <p>
                  Minimalist beauty coupon codes tend to appear during platform sales on Nykaa, Amazon, and their own website. Given their already-lean pricing, even a modest beauty discount code here delivers solid savings, especially if you are building a multi-step routine.
                </p>
              </div>

              {/* Plum */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5B4FBE]" />
                  Plum Coupon Codes
                </h3>
                <p className="mb-2">
                  Plum is a fully vegan and cruelty-free beauty brand with a wide range of skincare, hair care, and makeup products. Their commitment to clean formulations and accessible pricing makes them a go-to for shoppers who want effective beauty without harsh chemicals.
                </p>
                <p>
                  Plum skincare promo codes are regularly available on their website and on major platforms like Nykaa and Amazon. Plum also runs periodic goodness sales where beauty coupon codes can bring prices down across their bestselling ranges.
                </p>
              </div>

              {/* Flipkart */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2874F0]" />
                  Flipkart Coupon Codes
                </h3>
                <p className="mb-2">
                  Flipkart may be best known for electronics and fashion, but its beauty and grooming section has grown significantly and is now a strong destination for skincare, haircare, and personal care products. Flipkart beauty coupon codes are particularly valuable during their Big Billion Days and Beauty Bonanza events, where discounts on top brands run deep.
                </p>
                <p>
                  Flipkart also carries a wide range of everyday drugstore beauty staples alongside premium brands, making it a convenient one-stop shop. Their beauty discount codes frequently apply across categories, so you can save on skincare, haircare, and grooming all in a single order.
                </p>
              </div>
            </div>
          </div>

          {/* ARTICLE BLOCK 4: HOW TO USE */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Step-by-Step</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use a Beauty Coupon Code
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Applying a beauty discount code at checkout is quick and straightforward. Here is how it works:
              </p>
              
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your code", desc: "Browse CouponsCrew and click the beauty coupon code for your brand" },
                  { step: "2", title: "Copy the code", desc: "It copies automatically to your clipboard" },
                  { step: "3", title: "Visit the brand store", desc: "Head to Nykaa, Mamaearth, The Body Shop, or whichever site you are shopping" },
                  { step: "4", title: "Add products to cart", desc: "Shop as usual and head to checkout" },
                  { step: "5", title: "Enter the promo code", desc: "Look for \"Apply Coupon\" or \"Enter Code\" at checkout" },
                  { step: "6", title: "Apply and save", desc: "Paste your beauty discount code and watch the total drop" },
                  { step: "7", title: "Complete your order", desc: "Pay and you are done" }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
                      <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-[#FFF9F2] border border-[#FF9900]/30 rounded-2xl">
                <p className="text-xs text-[#8A5100] leading-relaxed">
                  <strong>Pro tip:</strong> Always check whether the skincare promo code is valid on the specific category or brand you are shopping. Some beauty coupon codes exclude luxury brands or apply only to full-priced items.
                </p>
              </div>
            </div>
          </div>

          {/* ARTICLE BLOCK 5: TYPES OF DEALS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#EC4899] rounded-full block"></span>
              <span className="text-xs font-black text-[#EC4899] uppercase tracking-widest">Offer Types</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Types of Beauty Deals You Will Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Beauty discount codes come in several formats. Here is what to expect on CouponsCrew:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Percentage off codes</strong> – Save 10%, 20%, or more on your total beauty order</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flat discount codes</strong> – Fixed amount off when your cart crosses a minimum value</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>First-order codes</strong> – New user skincare promo codes with generous discounts</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-exclusive codes</strong> – Extra savings available only via the brand or platform app</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bank cashback offers</strong> – Earn back a percentage when paying with select cards</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bundle deals</strong> – Buy sets or combos at lower per-unit prices</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Free gift with purchase</strong> – Some beauty coupon codes unlock a free sample or product</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 6: BEST TIMES TO USE */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
              <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">Sale Calendar</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Best Times to Use Beauty Coupon Codes
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Planning your beauty purchases around sale events helps you save the most. These are the biggest beauty sale windows to watch:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Nykaa Pink Friday Sale</strong> – One of the biggest beauty sale events of the year</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Nykaa Beauty Fest</strong> – Bi-annual event with wide beauty discount codes across brands</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Festive Season Sales</strong> – Diwali, Eid, and Christmas push brands to offer deep skincare promo codes</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>End of Season Sales</strong> – January and July bring clearance deals on beauty products</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Brand Anniversary Sales</strong> – Individual brands often run their own discount events</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>World Environment Day</strong> – Natural and clean beauty brands like Mamaearth and Plum run special promotions</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flipkart Big Billion Days</strong> – Massive beauty deals across skincare, haircare, and grooming</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Valentine&apos;s Day</strong> – Strong gifting season with beauty coupon codes on sets and combos</p>
                </li>
              </ul>
              <p className="pt-2 italic text-[#1A1A2E] font-medium">
                Bookmark this page and check back before restocking your routine — new beauty deals are added every day.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 7: SAVING TIPS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Pro Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Beauty Shopping Tips to Save More
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              A great skincare promo code is just one part of saving smart. These tips help you get even more value from your beauty budget:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Buy bestsellers on sale</strong> – Stock up on your go-to products during major sale events rather than buying them at full price</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Try travel sizes first</strong> – Many brands offer smaller sizes so you can test before committing to a full-sized product</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack codes with cashback</strong> – Combine a beauty coupon code with a bank or wallet cashback offer where platforms allow it</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check brand websites directly</strong> – Sometimes the brand&apos;s own site has better beauty discount codes than third-party platforms</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Watch expiry dates</strong> – Skincare products have shelf lives; only stock up on what you will realistically use</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use wish lists</strong> – Add products to your wish list and wait for a beauty coupon code to drop before buying</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 8 - FAQ SECTION WITH ACCORDIONS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { 
                  q: "Are the beauty coupon codes on CouponsCrew verified?", 
                  a: "Yes. Every beauty discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout." 
                },
                { 
                  q: "Can I use a beauty coupon code on sale items?", 
                  a: "This depends on the brand. Some skincare promo codes apply on top of existing sale discounts, while others are valid only on full-priced items. Always check the terms shown with each code." 
                },
                { 
                  q: "Do beauty coupon codes work for international brands like The Body Shop?", 
                  a: "Yes. CouponsCrew lists beauty discount codes for both homegrown and international brands. The Body Shop regularly runs promotions where coupon codes apply to their full range." 
                },
                { 
                  q: "How often are beauty coupon codes updated?", 
                  a: "Our team updates beauty deals every day. During major sale events like Nykaa Pink Friday or festive seasons, updates happen multiple times a day to keep codes current." 
                },
                { 
                  q: "Are there skincare promo codes for new users?", 
                  a: "Yes. Most platforms including Nykaa, Mamaearth, and Plum offer first-order beauty coupon codes for new accounts. These are often the best discounts available, so check CouponsCrew before creating a new account." 
                },
                { 
                  q: "Which brand offers the best beauty discount codes right now?", 
                  a: "Nykaa and Mamaearth consistently have the most active beauty coupon codes, but all seven brands listed here push regular deals. Check CouponsCrew daily for the latest." 
                }
              ].map((faq, index) => (
                <div key={index} className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 bg-white flex items-center justify-between gap-4 hover:bg-[#F8F8FF] transition-colors"
                  >
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{faq.q}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 text-[#5B4FBE] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4A4A6A] shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 pt-1 bg-[#F8F8FF] border-t border-[#E8E8F0]">
                      <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 9 - CTA / FOOTER */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Start Saving</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              Start Saving on Beauty Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Your skincare and beauty routine should not drain your wallet. With CouponsCrew, the latest beauty coupon codes, beauty discount codes, and skincare promo codes from Nykaa, Mamaearth, Dot &amp; Key, The Body Shop, Minimalist, Plum, and Flipkart are always within reach.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Check back often, bookmark this page, and make every beauty purchase count.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Quick Brand Directory */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#5B4FBE]" />
              Top Beauty Brands
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">Active beauty codes verified daily.</p>
            <div className="space-y-2">
              {[
                { brand: "Nykaa", tag: "Pink Friday & Fest" },
                { brand: "Mamaearth", tag: "Toxin-Free Combos" },
                { brand: "Dot & Key", tag: "Skin Formulas" },
                { brand: "The Body Shop", tag: "Ethical & Cruelty-Free" },
                { brand: "Minimalist", tag: "Science-Backed" },
                { brand: "Plum", tag: "100% Vegan Care" },
                { brand: "Flipkart", tag: "Beauty Bonanza" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#1A1A2E] font-bold">{row.brand}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.tag}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">100% Verified Codes</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Deal Types Summary */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <Percent className="w-4 h-4 text-[#22C55E]" />
              How You Save
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Direct Coupons
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Percentage off, flat discounts, first-order bonuses, and app-exclusive promo codes.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  Stackable Savings
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Combine discount codes with ongoing sale prices, bank cashback offers, and free gifts.
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
            <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Checkout</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Copy your verified code here and apply directly on the merchant&apos;s official store or mobile app at checkout.
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
