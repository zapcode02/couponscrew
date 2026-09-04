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
  { name: 'Jewellery', slug: 'jewellery' },
  { name: 'Eyewear', slug: 'eyewear' },
];

export default function FurnitureCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Furniture')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  const savingTips = [
    { title: 'Check assembly and delivery charges first', desc: 'Large furniture items often carry separate delivery and assembly fees. Confirm these before you finalize a purchase so the coupon savings are not offset by extra charges at the end.' },
    { title: 'Compare warranty terms across sellers', desc: 'Warranty length and coverage can vary a lot between furniture sellers, even for similar products. A slightly higher price with a longer warranty can be the better deal overall.' },
    { title: 'Look for festive season clearance on larger pieces', desc: 'Big-ticket items like sofas, beds, and wardrobes tend to see their deepest discounts during festive season clearance sales. Waiting for these windows can save more than a standalone coupon code.' },
    { title: 'Check the return policy for made-to-order items', desc: 'Custom or made-to-order furniture pieces often have limited or no return options. Read the return policy carefully before ordering, especially when a coupon code is tied to a non-returnable category.' },
    { title: 'Measure your space before you order', desc: 'Furniture coupon codes are only a good deal if the piece actually fits your space. Double-check dimensions against your room before applying a code, since returns on large items can be costly and slow.' },
  ];

  const faqs = [
    {
      q: 'Are the furniture coupon codes on CouponsCrew verified?',
      a: 'Yes. Every furniture coupon code listed here is checked for validity before it goes live, and codes that stop working are removed or flagged so you are not wasting time on dead codes at checkout.',
    },
    {
      q: 'How do I use a furniture coupon code?',
      a: 'Copy the code from CouponsCrew, add the product to your cart on the retailer’s site or app, and paste the code in the promo or discount code field at checkout to apply the savings.',
    },
    {
      q: 'Can I use multiple furniture coupon codes on one order?',
      a: 'Usually only one promo code can be applied per order, though it can often be combined with a separate bank card offer. Check the terms shown with each code before applying.',
    },
    {
      q: 'How often are furniture coupon codes updated?',
      a: 'This page is updated regularly, with more frequent updates during major sale windows so you always see current, working codes rather than expired ones.',
    },
    {
      q: 'Are there furniture coupon codes for new users?',
      a: 'Yes, many platforms offer first-order discounts on furniture. These are often the best available discount, so it is worth checking before creating a new account.',
    },
    {
      q: 'Do furniture coupon codes cover delivery and assembly charges?',
      a: 'It depends on the seller and the specific offer. Some codes apply only to the product price, while others include free or discounted delivery and assembly. Always check the terms shown with each code.',
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
              <span className="text-[#5B4FBE] font-semibold">Furniture</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Furniture</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse furniture coupon codes, discount codes, and promo codes for top furniture and home décor brands. Save on sofas, beds, mattresses, dining tables, office furniture, wardrobes, storage solutions, lighting, and home furnishings with verified discounts and exclusive online savings.

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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788091330/furniture_bvajgk.webp"
                alt="Furniture"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Furniture Stores ({categoryStores.length})</h2>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Furniture Deals', desc: 'Get the biggest discounts' },
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
            Furniture &amp; Home Living Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Furniture Coupon Codes – Save on Sofas, Beds, Tables, and Home Décor
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Buying furniture is one of the highest-consideration purchases most households make — and one where a working coupon code can deliver a saving that dwarfs what codes in most other categories offer. Furniture is expensive, delivery is a logistics challenge, and the decision timeline is long. Yet furniture platforms compete hard for every order, and discount codes, cashback offers, and seasonal sale events run consistently across the category. The buyers who check for a code before placing a furniture order save more per transaction than almost any other retail category.
          </p>
          <p>
            CouponsCrew tracks and verifies furniture coupon codes daily across sofas, beds and mattresses, dining sets, wardrobes, study furniture, home décor, and outdoor furniture. Whether you are furnishing a new home, upgrading a single room, or refreshing your décor, this page brings together the best furniture discount codes and promo codes from leading platforms — tested before they go live, updated regularly.
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
      Why Use Furniture Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Furniture is a high-ticket, low-frequency category. Most people buy furniture a handful of times across a decade — which means the opportunity to use a coupon code comes up rarely, and missing it when it does has a larger financial impact than missing a code on a routine purchase.
      </p>
      <p>
        Furniture platforms know their customers think carefully before buying. That is precisely why they invest in discount codes, no-cost EMI offers, and cashback promotions — to convert browsers into buyers. Those codes exist and are verified. The question is whether you find them before checkout or not.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to make sure you do:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Product type tagging</strong> — Every furniture coupon code is tagged by category: sofas, beds, mattresses, dining, storage, or décor — so you find what applies to your purchase without sorting through unrelated offers</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">EMI offer tracking</strong> — Furniture is one of the categories where no-cost EMI codes matter most given the ticket size; these are tracked alongside standard discount codes</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Assembly and delivery offer tracking</strong> — Free installation and delivery codes are listed separately where available — these are meaningful savings on large furniture orders</span>
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
      How to Use a Furniture Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Furniture checkout flows are slightly more involved than standard retail because of delivery scheduling and assembly options. Here is how it works:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the furniture coupon codes on this page. Check the platform and furniture category the code is for before copying — sofa codes and mattress codes often behave differently even on the same platform.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the furniture platform the code is for. Select your piece — confirm the dimensions, material, colour, and finish options before adding to cart.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Configure delivery and assembly</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Most furniture platforms ask for your delivery address and assembly preference before or during checkout. Confirm these before reaching the payment page — some codes apply only when assembly is included or excluded.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the payment screen</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most furniture platforms this appears on the cart or order summary page before payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the furniture discount code and apply it. Confirm which part of the order it reduces — the product price, delivery charges, or assembly fees — before completing payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between md:col-span-2 lg:col-span-3">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 7</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Complete your order</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a no-cost EMI or bank cashback offer applies, select the eligible option to stack that saving alongside the platform code.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Furniture coupon codes often exclude customised or made-to-order pieces — standard catalogue items are more likely to be covered. Check whether your chosen piece is eligible before configuring expensive customisation options, only to find the code does not apply at checkout.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Furniture Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Furniture platforms offer deal structures that are specific to this category and behave differently from standard retail codes.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on your furniture order total. These deliver the highest absolute savings in the furniture category given the ticket size — even a modest percentage on a sofa or bed order translates to a meaningful amount saved.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when your cart crosses a minimum order value. Common on platforms where the average furniture order is high — and worth consolidating smaller purchases into a single order to meet the threshold.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">First-order codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">New user codes on furniture platforms are strong, particularly on platforms that are building their customer base. Worth saving for your most significant planned purchase rather than a small décor accessory order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">No-cost EMI codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that unlock zero-cost or reduced-cost EMI options on furniture purchases above a threshold. Furniture is one of the categories where EMI codes make the most practical difference — spreading a large purchase across months without paying processing fees changes the effective monthly cost significantly.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Free delivery codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Furniture delivery charges can be a significant addition to the product price, particularly for large or heavy items requiring special logistics. Free delivery codes waive this charge entirely and are listed separately on this page when active.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Free assembly codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Assembly charges on furniture — beds, wardrobes, modular kitchens, and study furniture in particular — add to the total cost. Codes that waive assembly fees are worth checking alongside product discount codes before placing a large furniture order.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Extra cashback or instant discounts when paying with a specific credit or debit card. Furniture is one of the highest-ticket retail categories, making bank card offers proportionally more impactful here than in most other categories.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bundle and room set codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when purchasing a room set or bundle — a bedroom set, a dining set, or a living room combination — rather than individual pieces. Bundle codes on furniture deliver better per-piece savings than buying the same items separately with individual codes.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0] md:col-span-2">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Exchange and buyback codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Some furniture platforms offer codes connected to old furniture exchange programmes — trading in existing pieces against a new purchase. These are occasion-specific and appear during platform exchange events rather than as evergreen offers.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Furniture by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Furniture covers a wide range of product types with very different price points, delivery requirements, and code behaviours.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Sofas and Seating</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Sofas are the highest-value individual furniture purchase in most living rooms and the piece where a percentage discount code delivers the largest absolute saving. Fabric, leatherette, and sectional sofas all have different price bands — codes that apply broadly across material types are listed on this page when available. Customised sofas are frequently excluded from standard promo codes; catalogue sofas with standard dimensions and upholstery options are more reliably covered. Checking this page before selecting your sofa configuration — not after — saves the frustration of configuring a piece only to find the code does not apply.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Beds and Bedroom Furniture</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Beds — including bed frames, storage beds, and upholstered headboard designs — attract consistent discount codes around home furnishing sale events and new collection launches. Bedroom set codes, covering a bed frame and matching side tables or dresser, deliver better per-piece value than individual piece codes. Platform codes on bedroom furniture are strongest during the festive sale window and the new home furnishing season after Diwali.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Mattresses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Mattresses are a repeat-purchase category relative to other furniture — most households replace a mattress every several years, and when they do, it is a considered, high-research decision. Direct-to-consumer mattress brands run strong first-order codes and trial period codes — many offer a sleep trial window during which you can return the mattress if it does not suit you. Codes on sleep trial mattresses are worth checking before any mattress purchase, as the combination of a discount code and a trial period removes most of the risk from buying online.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Dining Furniture</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Dining tables and chair sets run codes during festive periods and home furnishing sale events. Bundle codes on full dining sets — table plus chairs in a matched finish — deliver better value than buying the table and chairs separately with individual codes. Extension table codes appear during space-saving furniture promotions that platforms run around urban living campaigns.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Wardrobes and Storage</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Wardrobes — particularly sliding door wardrobes and modular storage — are among the highest-installation-cost furniture categories. Assembly fee waiver codes are most valuable here since wardrobe installation is complex and the assembly charge on a large modular wardrobe is significant. Checking for a free assembly code alongside a product discount code before ordering a wardrobe is always worth doing.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Study and Work-from-Home Furniture</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Study desks, ergonomic chairs, bookshelves, and home office furniture have seen strong demand and consistent code availability since remote and hybrid work became mainstream. Ergonomic chair codes in particular are active year-round given the sustained demand. Bundle codes covering a desk and chair together are worth checking before buying each piece separately.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Home Décor and Accessories</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Décor — cushions, curtains, rugs, wall art, lamps, and planters — sits at a lower price point than structural furniture but runs codes more frequently. First-order codes on décor platforms tend to be percentage-based and apply broadly. Sitewide sale codes on home décor platforms during festive periods are some of the most generous in this subcategory — Diwali in particular drives deep décor codes as platforms compete for home refresh purchases.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Outdoor and Garden Furniture</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Garden furniture — patio sets, outdoor chairs, and balcony seating — follows a seasonal demand pattern. Pre-summer codes are the most active in this subcategory as platforms target buyers preparing outdoor spaces before the warmer months. Post-season clearance codes on outgoing outdoor furniture ranges are worth checking after peak season when platforms clear inventory.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Furniture Sale Calendar
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Furniture Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Furniture follows one of the most predictable seasonal discount calendars of any retail category — driven by home furnishing occasions and sale events that repeat reliably each year.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "New home and home shifting season",
              desc: "The months when most people shift homes or move into new properties — broadly April through June and October through December — are when furniture platforms push their strongest acquisition codes. If you are furnishing a new space, this is when first-order codes and room set bundle codes are most consistently available.",
            },
            {
              title: "Diwali and festive sale window",
              desc: "Diwali is the single most important furniture purchasing occasion in India. Home décor and furniture refresh purchases peak in the weeks before Diwali — and platforms respond with their deepest codes of the year on sofas, beds, dining sets, and décor. Checking this page in October is the most reliable annual window for strong furniture codes.",
            },
            {
              title: "Republic Day and Independence Day sales",
              desc: "Both are established home furnishing sale periods with platform-wide furniture codes and category-specific promotions. These are smaller windows than Diwali but consistent and worth checking before a planned furniture purchase in January or August.",
            },
            {
              title: "End-of-season clearance",
              desc: "Furniture platforms rotate collections seasonally. End-of-season clearance events bring codes on outgoing catalogue pieces at already-reduced prices. These are not as prominently advertised as festive codes but represent strong value on catalogue items being replaced by new designs.",
            },
            {
              title: "New collection launches",
              desc: "Furniture brands and platforms launch new collections periodically — when they do, clearance codes on the previous collection go live. If you are flexible on the latest design, checking this page around collection launch announcements gives access to codes on outgoing pieces before they sell out.",
            },
            {
              title: "Black Friday",
              desc: "Black Friday has become an active furniture discount window in India. Furniture platforms run codes on high-value pieces — sofas, beds, and mattresses in particular — during this period. Checking this page in the last week of November is worth building into your furniture purchase planning.",
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
            Bookmark this page and check it before any furniture purchase — furniture codes move fast during peak sale windows and the absolute saving from a working code on a high-ticket piece is among the highest of any retail category.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Furniture Saving Hacks
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Furniture Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code is one part of a well-priced furniture purchase. These habits cover the rest:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Measure before you order",
              desc: "Furniture returns are significantly more complex than returns in other categories — large pieces require reverse logistics and may not always be accepted in opened or assembled condition. Measuring your space carefully before ordering — and confirming the piece fits through doorways and stairwells — eliminates the most common reason for costly furniture returns.",
            },
            {
              title: "Check assembly inclusion in the base price",
              desc: "Some furniture platforms include assembly in the product price; others charge it separately. Comparing total cost — product plus delivery plus assembly — across platforms before applying a code gives an accurate price comparison, not just a headline product price comparison.",
            },
            {
              title: "Use no-cost EMI on high-ticket pieces",
              desc: "Spreading a sofa or bedroom set cost across several months at zero processing fee is a meaningful cash flow benefit alongside any upfront discount. An EMI code that eliminates the processing fee alongside a product discount code is worth identifying before checkout on any high-value furniture order.",
            },
            {
              title: "Buy room sets over individual pieces where possible",
              desc: "Room set bundle codes almost always deliver better per-piece savings than buying the same items individually, even with separate codes. If you are furnishing a room, pricing the bundle versus individual pieces before deciding how to apply available codes saves more than defaulting to the largest individual discount.",
            },
            {
              title: "Check the return and replacement policy before ordering",
              desc: "Furniture return policies vary significantly across platforms — some offer full returns within a window, others offer replacements or store credit only, and some have no returns on assembled pieces. Reading the policy before ordering is especially important on high-value purchases where a quality issue after delivery would otherwise leave you with limited options.",
            },
            {
              title: "Factor in delivery timelines",
              desc: "Furniture delivery is not immediate — lead times on made-to-order pieces can stretch significantly beyond standard retail delivery. Confirming the delivery timeline before ordering — particularly for gifting occasions or a move-in date — prevents the frustration of a delayed delivery regardless of how good the code was.",
            },
            {
              title: "Inspect on delivery before signing acceptance",
              desc: "Furniture damage in transit is more common than in other categories given the size and weight of pieces. Inspecting every item carefully before signing the delivery receipt — and photographing any damage immediately — gives you the strongest position for a replacement or refund claim.",
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
              q: "Do furniture coupon codes apply to customised or made-to-order pieces?",
              a: "Most furniture discount codes apply to standard catalogue items and exclude customised or made-to-order pieces. The terms on each code listed here specify any such exclusions — check before configuring a customised piece.",
            },
            {
              q: "Can I use a furniture coupon code with a no-cost EMI offer?",
              a: "On most furniture platforms, yes. A product discount code and a no-cost EMI offer are processed as separate mechanisms — the code reduces the product price and the EMI option spreads the reduced total across monthly instalments without a processing fee. Confirm this with the platform's checkout terms before completing your order.",
            },
            {
              q: "How often are furniture coupon codes updated on CouponsCrew?",
              a: "Daily. Furniture codes tied to sale events and new collection launches can go live and expire within days. Checking this page before each purchase rather than relying on a saved code from an earlier visit is the right approach.",
            },
            {
              q: "Do free delivery codes apply to all furniture products?",
              a: "Not always. Free delivery codes on furniture platforms sometimes apply only to products above a minimum weight or value, or only to specific delivery zones. The terms on each code here specify any such restrictions — check before assuming delivery will be free on your specific order.",
            },
            {
              q: "Are there furniture codes specifically for mattresses?",
              a: "Yes. Mattress codes are listed separately from general furniture codes on this page and tagged accordingly. Direct-to-consumer mattress brands in particular run strong first-order and trial period codes — these are tracked and listed here when active.",
            },
            {
              q: "Do furniture platforms accept old furniture in exchange with a code?",
              a: "Exchange codes and product discount codes are typically separate mechanisms on furniture platforms. The exchange value applies to your order first; a promo code may then apply to the remaining balance depending on the platform's terms. Confirm the combination is permitted before assuming both apply simultaneously.",
            },
            {
              q: "What is the best time to buy a sofa at the lowest price?",
              a: "The Diwali festive window is the most reliable annual moment for the deepest sofa codes. End-of-season clearance events — when platforms rotate to new catalogue designs — are the second-best window for percentage-off codes on catalogue sofas. Combining either window with a bank card cashback offer gives the strongest combined saving.",
            },
            {
              q: "Do furniture bundle codes apply to all pieces in the set?",
              a: "Bundle codes apply to the full set as a single purchase. Individual piece codes within a set are separate — check whether the bundle code or separate individual codes deliver better total savings on the specific pieces you want before deciding which to apply.",
            },
            {
              q: "Are outdoor furniture codes available year-round?",
              a: "They are available year-round but significantly stronger in the pre-summer window when platforms target buyers preparing outdoor spaces. Post-season clearance codes appear after peak outdoor furniture season and are worth checking for outgoing catalogue pieces at reduced prices.",
            },
            {
              q: "Is furniture bought online with a coupon code covered by the same warranty?",
              a: "Yes. Purchasing furniture online using a verified code from this page does not affect the manufacturer's or platform's warranty terms. The warranty applies to the product regardless of the price paid. Confirm the warranty terms — duration and what is covered — on the product listing before ordering.",
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
          Start Saving on Every Furniture Purchase
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every sofa you order, every bed you buy, and every room you furnish is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified furniture coupon codes, furniture discount codes, and furniture promo codes across sofas, beds, mattresses, dining furniture, wardrobes, study furniture, home décor, and outdoor furniture.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every furniture purchase, bookmark this page, and make sure no deal on your next home upgrade passes you by.
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
          Top Furniture Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { category: "Sofas & Seating", tag: "Festival Discounts" },
            { category: "Beds & Mattresses", tag: "First-Order Offers" },
            { category: "Dining Sets", tag: "Bundle Savings" },
            { category: "Wardrobes & Storage", tag: "Modular Promos" },
            { category: "Home Décor", tag: "Clearance Deals" },
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
          Smart Furniture Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Bundle Room Sets
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine room set discounts with promo codes for maximum per-piece savings on big orders.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Target Festival Windows
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Align high-ticket furniture purchases around Diwali and moving seasons for peak code depth.
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
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Store Partners</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified furniture promo code here and enter it directly at checkout on the brand's store.
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
