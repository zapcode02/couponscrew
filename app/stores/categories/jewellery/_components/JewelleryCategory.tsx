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
  { name: 'Gaming', slug: 'gaming' },
  { name: 'Eyewear', slug: 'eyewear' },
  { name: 'Furniture', slug: 'furniture' },
];

export default function JewelleryCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Jewellery')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Check making charge waivers', desc: 'Some jewellery retailers waive or discount making charges during promotional periods. Checking for an active waiver before you buy can meaningfully lower the final price on gold and diamond pieces.' },
    { title: 'Compare certification details', desc: 'Before buying gold or diamond jewellery, compare the certification and hallmarking details across sellers. A verified coupon code is only worth using once you are confident about what you are actually buying.' },
    { title: 'Look for combo pricing on gift sets', desc: 'Jewellery gift sets and combo packs sometimes carry a better effective discount than buying pieces individually, especially when a promo code is applied on top of a bundled price.' },
    { title: 'Check the return and exchange policy', desc: 'Always check the return, exchange, and buyback policy before completing an online jewellery purchase — this matters as much as the discount itself for a considered purchase like this.' },
    { title: 'Time purchases around known sale windows', desc: 'Jewellery pricing and offers tend to improve around festive and wedding seasons. Waiting for one of these windows, rather than buying on impulse, generally gives you a better shot at a strong combined discount.' },
  ];

  const faqs = [
    {
      q: 'Are the jewellery coupon codes on CouponsCrew verified?',
      a: 'Yes. Every jewellery coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a jewellery coupon code?',
      a: 'Copy the code from CouponsCrew, add the piece to your cart on the retailer’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple jewellery coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer or a making charge waiver. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are jewellery coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during festive and wedding season sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there jewellery coupon codes for new users?',
      a: 'Yes, many platforms offer first-order discounts on jewellery. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do these coupon codes work on both gold and fashion jewellery?',
      a: 'It varies by store. Some jewellery coupon codes apply broadly across gold, diamond, and fashion jewellery, while others are restricted to a specific subcategory. The terms shown with each code will indicate where it applies.',
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
              <span className="text-[#22C55E] font-semibold">Jewellery</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Jewellery</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse jewellery coupon codes, discount codes, and promo codes for gold, diamond, silver, platinum, gemstone jewellery, engagement rings, earrings, necklaces, bracelets, watches, and accessories. Discover verified discounts, exclusive offers, and seasonal savings from trusted jewellery brands.
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091236/jewellery_ehbdae.webp"
                alt="Jewellery"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Jewellery Stores ({categoryStores.length})</h2>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Jewellery Deals', desc: 'Get the biggest discounts' },
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
          <span className="w-1 h-6 bg-[#D97706] rounded-full block"></span>
          <span className="text-xs font-black text-[#D97706] uppercase tracking-widest">
            Gold, Diamond &amp; Silver Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Jewellery Coupon Codes – Save on Gold, Diamond, and Fashion Jewellery
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Buying jewellery online has become one of the most considered purchases in the category — and for good reason. The range of platforms, the variety of materials, and the difference in pricing across gold, diamond, silver, and fashion jewellery means there is more to navigate than in most retail categories. What most buyers do not factor in is that jewellery platforms run coupon codes, making charges discounts, and cashback offers consistently — and a working code on a jewellery purchase can translate to a saving that is meaningfully larger than codes in most other categories given the ticket size.
          </p>
          <p>
            CouponsCrew tracks and verifies jewellery coupon codes daily across gold jewellery, diamond jewellery, silver jewellery, fashion jewellery, and branded accessories. Whether you are buying for a wedding, a gifting occasion, or adding to your everyday collection, this page brings together the best jewellery discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
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
      Why Use Jewellery Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Jewellery is a high-value, high-consideration purchase category. Even a modest percentage discount on a gold or diamond piece translates to a saving that dwarfs what a similar percentage code delivers in fashion or food. That asymmetry makes jewellery one of the categories where finding a working coupon code before you buy is most worth the few minutes it takes.
      </p>
      <p>
        At the same time, jewellery codes are not always prominently advertised. Platforms push their best offers during festive and wedding seasons, and the codes that exist outside those windows — making charges discounts, cashback on digital gold, and first-order codes on fashion jewellery platforms — are easy to miss if you are not actively looking.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to change that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Category and material tagging</strong> — Every jewellery coupon code is tagged by type: gold, diamond, silver, fashion jewellery, or digital gold — so you find what applies to your purchase quickly</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Making charges tracking</strong> — Making charges discounts on gold and diamond jewellery are tracked separately from price discounts — both behave differently and matter at different price points</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Occasion-based offer tracking</strong> — Wedding season, festive period, and gifting occasion codes are flagged when active</span>
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
      How to Use a Jewellery Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The checkout process on jewellery platforms has a few specifics worth knowing — particularly for gold and diamond purchases where the price is partly based on live metal rates.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the jewellery coupon codes on this page. Check the platform, material type, and whether the code applies to the specific jewellery category you are buying — gold codes and fashion jewellery codes behave differently.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the jewellery platform the code is for. Select your piece and confirm the product details — weight, material, and any customisation options.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach checkout</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most jewellery platforms this appears on the cart or payment page.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the jewellery discount code and apply it. Confirm which part of the order it reduces — the product price, the making charges, or the total — before proceeding.</p>
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
      <strong className="font-bold">Pro tip:</strong> On gold and diamond jewellery platforms, coupon codes often apply to making charges rather than the metal price — which is pegged to live market rates and cannot be discounted directly. A making charges waiver or reduction can be a significant saving on a gold piece, even when the headline discount looks modest. Check what the code applies to before you evaluate whether it is worth using.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Jewellery Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Jewellery platforms offer deal structures that are specific to this category and behave differently from standard retail codes.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Making charges discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Making charges — the craftsmanship cost added on top of the metal price — are one of the few components of a gold or diamond jewellery price that can be directly discounted. Codes that reduce or waive making charges are often more valuable than they appear from the headline percentage, particularly on intricately crafted pieces where making charges form a larger share of the total price.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First-order codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on jewellery platforms are strong, particularly on fashion jewellery and silver platforms where the base price is lower and a first-order code represents a meaningful percentage saving. On gold and diamond platforms, first-order codes tend to apply to making charges rather than the metal price.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on fashion jewellery, silver jewellery, or the non-metal components of a gold or diamond order. Common during sale events, new collection launches, and platform anniversary periods.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your order crosses a minimum value. More common on higher-value gold and diamond purchases than on fashion jewellery, where the order value threshold is more easily reached.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when paying with a specific credit or debit card. Jewellery is one of the categories where bank card offers deliver the highest absolute saving given the ticket size — stacking a platform code with a card offer on a gold or diamond purchase is always worth checking.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Digital gold and SIP codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply to digital gold purchases or systematic investment plan setups on platforms offering gold as an investment product. These are listed separately from physical jewellery codes and behave differently — the saving applies to the transaction fee or platform charges rather than the gold price itself.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gifting and packaging codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that waive or reduce gift packaging, engraving, or gifting add-on charges. Common around Diwali, Valentine's Day, wedding season, and other gifting occasions.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Exchange and buyback codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Some jewellery platforms offer codes that improve the exchange rate when you trade in old jewellery against a new purchase. These are occasion-specific and apply during platform-run exchange events rather than as evergreen offers.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Jewellery by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Jewellery covers several distinct product types with very different purchase rhythms, price points, and code behaviours.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Gold Jewellery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Gold jewellery pricing is partly governed by live market rates — the metal price moves daily and cannot be discounted directly. Where codes apply on gold jewellery is on making charges, platform fees, and delivery charges. Making charges vary significantly across jewellery types — lightweight everyday pieces have lower making charges than heavily crafted bridal or antique-style jewellery. A making charges discount code is therefore more valuable on a complex piece than on a simple chain or band. Checking this page before any gold jewellery purchase — particularly during wedding and festive seasons when platforms run their strongest making charges offers — is worth the time.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Diamond Jewellery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Diamond jewellery codes follow a similar structure to gold — the stone price and metal price form the base, and codes apply to making charges, platform markups, or total order discounts during promotional periods. Diamond jewellery platforms run their strongest codes during the festive season and Valentine's Day window. First-order codes on diamond platforms tend to be percentage-based and occasionally apply to the total order rather than just making charges — read the terms carefully since the saving on a total-order code at this price point can be very significant.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Silver Jewellery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Silver jewellery is priced lower than gold and diamond, making it the category where percentage-off codes deliver the clearest headline saving. Silver platforms run more consistent codes outside festive windows compared to gold and diamond platforms — new collection drops, anniversary events, and platform sales all trigger silver jewellery codes. Fashion-forward silver jewellery platforms targeting younger buyers run particularly frequent first-order and app-exclusive codes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Fashion Jewellery and Costume Jewellery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Fashion jewellery platforms operate at lower price points and run codes more frequently than precious metal platforms. First-order codes on fashion jewellery platforms tend to be high percentage offers. Buy-more-save-more structures are common here — platforms encourage multi-piece orders with tiered discounts. Fashion jewellery codes are also the most likely to be app-exclusive across this category.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Branded and Designer Jewellery</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Designer jewellery brands run fewer codes than multi-brand platforms but their seasonal sale events — typically post-festive and post-wedding season — bring marked-down prices on selected pieces. Bank card offer codes are more consistent than platform promo codes for branded jewellery — card-linked offers with specific issuers run more predictably across the year.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Digital Gold</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Digital gold purchase codes cover transaction fees and platform charges on gold investment platforms. These are not jewellery purchases in the conventional sense — the saving is on the platform's fee structure rather than on the gold price itself. SIP setup codes and first-purchase codes on digital gold platforms are listed here when active and tagged clearly to distinguish them from physical jewellery codes.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Jewellery Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Jewellery Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Jewellery follows one of the most predictable seasonal discount calendars of any retail category — driven almost entirely by wedding and festive occasions in India.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Wedding season",
              desc: "The wedding season windows — broadly October through December and April through June — are when jewellery platforms run their deepest making charges discounts and strongest bridal collection offers. Platforms compete hard for bridal and wedding gift purchases during these months. Checking this page at the start of your wedding jewellery shopping — not when you are ready to buy a specific piece — gives you time to compare codes across platforms before committing.",
            },
            {
              title: "Dhanteras and Diwali",
              desc: "Dhanteras is the single most important day in the Indian jewellery buying calendar. Gold jewellery purchases on Dhanteras are considered auspicious — and every major jewellery platform responds with making charges waivers and cashback offers in the days around Dhanteras and Diwali. These are typically the strongest gold jewellery codes of the year and are worth planning a purchase around if your timing is flexible.",
            },
            {
              title: "Akshaya Tritiya",
              desc: "Akshaya Tritiya is the second major gold purchasing occasion of the year. Jewellery platforms push making charges discounts and cashback offers in the days around this date — consistent with Dhanteras as a reliable annual window for gold jewellery codes.",
            },
            {
              title: "Valentine's Day",
              desc: "Valentine's Day is the primary gifting occasion for diamond jewellery codes and silver jewellery codes. Platforms push their strongest codes on lighter diamond pieces, silver sets, and fashion jewellery in the week before Valentine's Day.",
            },
            {
              title: "New collection launches",
              desc: "Jewellery platforms launch new collections seasonally — typically around major festivals and at the start of wedding seasons. New launch codes apply briefly when a collection goes live and tend to be percentage-based on the new range.",
            },
            {
              title: "End-of-season clearance",
              desc: "After the peak festive and wedding windows, platforms run clearance events on outgoing collection pieces. These are not as widely publicised as festive codes but deliver strong savings on full-price pieces that are being rotated out. Checking this page after the main festive window closes captures these offers before they expire.",
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

        <div className="mt-5 p-4 bg-[#FFFBEB] border border-[#D97706]/30 rounded-2xl">
          <p className="text-xs text-[#92400E] font-semibold leading-relaxed">
            Bookmark this page and check it before any jewellery purchase — making charges codes and cashback offers on gold and diamond purchases move fast around Dhanteras, Akshaya Tritiya, and wedding season.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Jewellery Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Jewellery Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of a well-priced jewellery purchase. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Understand making charges before you compare prices",
              desc: "Two pieces of identical gold weight can have very different total prices depending on the making charges applied. Before applying a code, understand the making charges component of your shortlisted pieces — a making charges waiver on a high-craftsmanship piece saves more than the same waiver on a simple piece.",
            },
            {
              title: "Compare across platforms before committing",
              desc: "The same design — or a very similar one — can be priced differently across jewellery platforms on the same day. A quick comparison before applying a code ensures you are starting from the best available base price rather than discounting a higher starting point.",
            },
            {
              title: "Stack bank card offers with platform codes",
              desc: "Bank card cashback offers on jewellery purchases are among the highest absolute-value card offers available in any category given the ticket size. Checking your card's offer terms before paying is worth doing on every jewellery order above a modest value.",
            },
            {
              title: "Buy certified diamonds",
              desc: "For diamond jewellery specifically, certification from a recognised gemological laboratory confirms the stone's grade and quality. Certified stones command a premium but hold their value better and are easier to verify for resale or exchange. A coupon code on a certified diamond piece is worth more in the long run than a deeper discount on an uncertified stone.",
            },
            {
              title: "Check hallmarking on gold jewellery",
              desc: "BIS hallmarking on gold jewellery confirms the metal purity as labelled. Before buying gold jewellery online, confirm the platform lists BIS hallmarked pieces — this is a basic quality standard, not a premium feature. A code applied to hallmarked jewellery is a straightforward saving; a code applied to unlabelled purity jewellery is a different risk category entirely.",
            },
            {
              title: "Use exchange programmes strategically",
              desc: "Most jewellery platforms accept old gold against new purchases at the current metal rate. Platforms that run exchange event codes — improving the exchange rate or waiving exchange processing fees — are worth timing a purchase around if you have old jewellery to trade in.",
            },
            {
              title: "Confirm delivery and insurance terms on high-value orders",
              desc: "High-value jewellery orders should come with tracked, insured delivery. Confirm the platform's delivery insurance terms before completing a gold or diamond order — some platforms include this automatically and some charge it as an add-on.",
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
              q: "Do jewellery coupon codes apply to the gold or diamond price, or to making charges?",
              a: "On precious metal jewellery platforms, codes typically apply to making charges rather than the metal price — which is pegged to live market rates. On fashion and silver jewellery platforms, codes more often apply to the total order price. The terms on each code listed here specify what it covers — check before applying.",
            },
            {
              q: "Can I use a jewellery coupon code with a bank cashback offer?",
              a: "On most jewellery platforms, yes. A platform promo code and a bank card cashback offer are processed independently. Given the ticket size of gold and diamond purchases, stacking both is always worth checking before you pay.",
            },
            {
              q: "How often are jewellery coupon codes updated on CouponsCrew?",
              a: "Daily. Festive and wedding season codes in particular go live and expire quickly. Checking this page before each purchase rather than relying on a saved code is the right approach — jewellery codes are more time-sensitive than most retail codes.",
            },
            {
              q: "Do making charges discount codes apply to all jewellery types?",
              a: "Not always. Making charges codes sometimes apply only to specific jewellery types — chains, rings, or bridal sets — and exclude others. The terms on each code specify any such restrictions.",
            },
            {
              q: "Are digital gold codes different from physical jewellery codes?",
              a: "Yes. Digital gold codes apply to platform transaction fees and charges — not to the gold price itself. These are listed and tagged separately on this page from physical jewellery codes. Check the tag before applying to confirm the code matches your purchase type.",
            },
            {
              q: "Do jewellery platforms accept old gold for exchange alongside a coupon code?",
              a: "Exchange programmes and coupon codes are typically separate mechanisms. Most platforms process the exchange value against your order first, then apply a coupon code to the remaining balance. Some platforms exclude exchange orders from coupon code terms entirely — confirm with the platform before combining both.",
            },
            {
              q: "What is the best time to buy gold jewellery online at the lowest price?",
              a: "Dhanteras and Akshaya Tritiya are the two most consistent annual windows for making charges discounts and cashback offers on gold jewellery. Wedding season windows bring additional offers on bridal collections. Combining these timing windows with an active code and a bank card offer gives the best combined saving.",
            },
            {
              q: "Do fashion jewellery codes work on all materials?",
              a: "Fashion jewellery codes on multi-material platforms typically apply broadly unless the code is restricted to a specific material or collection. Check the terms before applying if you are buying a mixed-material piece or a jewellery set that spans categories.",
            },
            {
              q: "Is it safe to buy gold jewellery online with a coupon code?",
              a: "Buying from established, BIS-hallmark-certified platforms is the standard to apply regardless of whether a code is involved. A coupon code from a verified platform is straightforward — it reduces the cost of a legitimate purchase. The platform's credibility and hallmarking standards are what determine purchase safety, not the presence or absence of a code.",
            },
            {
              q: "Are there jewellery coupon codes specifically for bridal sets?",
              a: "Yes. Bridal jewellery codes are listed separately on this page during wedding season windows and are tagged as bridal-specific where confirmed. These tend to be making charges discounts or cashback offers rather than percentage-off codes, given the high base value of bridal sets.",
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
          Start Saving on Every Jewellery Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every gold piece you buy, every diamond set you gift, and every fashion jewellery order you place is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified jewellery coupon codes, jewellery discount codes, and jewellery promo codes across gold, diamond, silver, fashion jewellery, and digital gold.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every jewellery purchase, bookmark this page, and make sure no deal on your next piece passes you by.
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
          Top Jewellery Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { category: "Gold Jewellery", tag: "Making Charge Discounts" },
            { category: "Diamond Jewellery", tag: "Certified Stones" },
            { category: "Silver Jewellery", tag: "Gifting & Sets" },
            { category: "Fashion Jewellery", tag: "Daily Wear Deals" },
            { category: "Digital Gold", tag: "Zero Fee Offers" },
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
          Smart Buyer Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Stack Card Cashback
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine platform promo codes with high-value bank card offers for maximum savings.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Time Making Charges
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Target Dhanteras, Akshaya Tritiya, or wedding windows for full making-charge waivers.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#D97706] to-[#92400E] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">BIS Certified</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified jewellery code here and apply it directly at checkout on the brand's store.
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
