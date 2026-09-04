'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, Dumbbell, Package, RefreshCw, Lock, HelpCircle, Sparkles
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

const OTHER_CATEGORIES = [
  { name: 'Home & Kitchen', slug: 'home-and-kitchen' },
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
];

export default function ExerciseFitnessCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Exercise & Fitness')),
    []
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>

      {/* SECTION 1 — HERO */}
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
              <span className="text-[#5B4FBE] font-semibold">Exercise & Fitness</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Exercise & Fitness</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Verified workout gear and fitness equipment deals — linked directly to Amazon with no middleman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Dumbbell size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Store</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deal</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 60%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783232570/exercise-fitness_whqz7u.webp"
                alt="Exercise & Fitness"
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

      {/* SECTION 2 — MAIN CONTENT */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-4 border-b border-[#E8E8F0]">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Exercise & Fitness Stores ({categoryStores.length})</h2>
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

          {/* SIDEBAR */}
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

      {/* SECTION 3 — TRUST BADGES */}
      <section className="bg-white border-t border-[#E8E8F0] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Products', desc: 'We verify all products and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Fitness Deals', desc: 'Get the biggest discounts' },
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Fitness Hub</span>
            </div>
            <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Fitness Coupon Codes – Save on Gym Gear, Supplements &amp; Sportswear
            </h1>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Looking for the best fitness coupon codes? CouponsCrew tracks and verifies the latest gym &amp; fitness discount codes and sports &amp; fitness promo codes from top brands like Decathlon, Healthkart, MuscleBlaze, Boldfit, Cult.fit, and Nike — plus major platforms like Amazon, Myntra, and Flipkart where fitness products are widely available. All deals are updated daily so you always save at checkout.
              </p>
              <p>
                Whether you are buying gym equipment, protein supplements, sportswear, or fitness accessories, our fitness coupon codes help you spend less on every order.
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
              Why Use Fitness Coupon Codes from CouponsCrew?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Fitness is an ongoing investment — supplements need restocking, gear wears out, and memberships renew every month. Those costs add up fast. Gym &amp; fitness discount codes make it easier to stay consistent with your fitness goals without stretching your budget.
              </p>
              <p>
                CouponsCrew monitors fitness brands and platforms daily, updating sports &amp; fitness promo codes as soon as new deals go live. Every code is verified before it appears here so you are not wasting time at checkout with dead links or expired offers.
              </p>
              <p className="font-bold text-[#1A1A2E] pt-2">
                Here is why fitness shoppers keep coming back to CouponsCrew:
              </p>
              
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Daily updates</strong> – Fresh fitness coupon codes added every day, more during sale events</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified codes only</strong> – Inactive or expired codes are removed quickly</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All fitness platforms in one place</strong> – From specialist stores to Amazon and Flipkart</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>No signup needed</strong> – Copy the code and use it instantly</p>
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
              Top Fitness Brands to Shop With Discount Codes
            </h2>
            
            <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
              {/* Decathlon */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#0082C3]" />
                  Decathlon Coupon Codes
                </h3>
                <p className="mb-2">
                  Decathlon is one of the most trusted sports and fitness retailers, offering equipment, apparel, and accessories for over 80 sports. From treadmills and dumbbells to cycling gear and yoga mats, Decathlon covers every fitness need at competitive price points.
                </p>
                <p>
                  Decathlon fitness coupon codes are popular among beginners setting up a home gym and seasoned athletes upgrading their gear. Their seasonal sales and end-of-range clearance events are the best times to find active gym &amp; fitness discount codes that bring already-affordable prices down even further.
                </p>
              </div>

              {/* Healthkart */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#00A896]" />
                  Healthkart Coupon Codes
                </h3>
                <p className="mb-2">
                  Healthkart is a leading destination for sports nutrition, health supplements, vitamins, and wellness products. They carry a wide range of brands alongside their own in-house labels, making it easy to compare and shop for everything from whey protein to multivitamins in one place.
                </p>
                <p>
                  Healthkart fitness coupon codes are especially valuable during their HKVitals sales and festive season promotions. First-time buyers usually get access to exclusive sports &amp; fitness promo codes that make the first order significantly cheaper — always worth checking CouponsCrew before placing a new order on Healthkart.
                </p>
              </div>

              {/* MuscleBlaze */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#E63946]" />
                  MuscleBlaze Coupon Codes
                </h3>
                <p className="mb-2">
                  MuscleBlaze is one of the most recognised homegrown sports nutrition brands, known for high-quality whey protein, mass gainers, pre-workouts, and fitness supplements. Their products are popular with gym-goers at all levels, from beginners to competitive athletes.
                </p>
                <p>
                  MuscleBlaze gym &amp; fitness discount codes are regularly available on their website and on platforms like Healthkart and Amazon. Their anniversary sales and protein-specific promotions are standout events where sports &amp; fitness promo codes deliver the best per-kg savings on supplements.
                </p>
              </div>

              {/* Boldfit */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#111827]" />
                  Boldfit Coupon Codes
                </h3>
                <p className="mb-2">
                  Boldfit has quickly established itself as a go-to brand for affordable, quality gym accessories and fitness equipment. Their range covers resistance bands, gym gloves, shakers, weight belts, skipping ropes, yoga mats, and much more — all designed for everyday fitness use.
                </p>
                <p>
                  Boldfit fitness coupon codes make an already budget-friendly brand even more accessible. They are available on Amazon, Flipkart, and Boldfit&apos;s own website. Look for Boldfit gym &amp; fitness discount codes during major platform sales for the steepest discounts on their bestselling accessories.
                </p>
              </div>

              {/* Cult.fit */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#FF3278]" />
                  Cult.fit Coupon Codes
                </h3>
                <p className="mb-2">
                  Cult.fit is a comprehensive fitness platform that combines gym memberships, live and on-demand workout classes, nutrition guidance, and mental wellness — all under one subscription. Their app-based ecosystem makes it easy to work out whether you are at a Cult.fit centre or at home.
                </p>
                <p>
                  Cult.fit sports &amp; fitness promo codes are most commonly available for new memberships and trial periods. If you are considering a fitness subscription, checking CouponsCrew first for an active Cult.fit fitness coupon code can save you significantly on your first month or annual plan.
                </p>
              </div>

              {/* Nike */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#000000]" />
                  Nike Coupon Codes
                </h3>
                <p className="mb-2">
                  Nike needs no introduction — their sportswear, running shoes, training gear, and fitness apparel are benchmarks in the industry. Nike products are premium-priced, which makes finding a working Nike gym &amp; fitness discount code all the more valuable.
                </p>
                <p>
                  Nike fitness coupon codes are available during their own sale events as well as through platforms like Myntra, Amazon, and Flipkart. End of season sales and Nike&apos;s own clearance events are the best windows for active sports &amp; fitness promo codes on footwear and apparel.
                </p>
              </div>

              {/* Amazon Fitness */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#FF9900]" />
                  Amazon Fitness Coupon Codes
                </h3>
                <p className="mb-2">
                  Amazon carries one of the largest selections of gym and fitness products online — from branded supplements and gym equipment to sportswear and fitness trackers. Amazon fitness coupon codes are widely available and often combinable with Prime member benefits for extra savings.
                </p>
                <p>
                  During Amazon&apos;s Great Indian Festival and Prime Day events, gym &amp; fitness discount codes can bring prices down significantly across equipment, supplements, and activewear categories all at once.
                </p>
              </div>

              {/* Myntra Fitness */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#FF3F6C]" />
                  Myntra Fitness Coupon Codes
                </h3>
                <p className="mb-2">
                  Myntra is a strong destination for sports and activewear, stocking brands like Nike, Adidas, Puma, Reebok, and more. If you are looking for gym outfits, running shoes, or sports accessories, Myntra sports &amp; fitness promo codes can help you upgrade your workout wardrobe for less.
                </p>
                <p>
                  Myntra&apos;s End of Reason Sale (EORS) is one of the best times to find deep fitness coupon codes on premium activewear brands.
                </p>
              </div>

              {/* Flipkart Fitness */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#2874F0]" />
                  Flipkart Fitness Coupon Codes
                </h3>
                <p className="mb-2">
                  Flipkart&apos;s sports and fitness category covers gym equipment, protein supplements, sportswear, and accessories at competitive prices. Flipkart gym &amp; fitness discount codes are frequently available during their Big Billion Days and Republic Day sales, making it a solid platform for stocking up on fitness essentials.
                </p>
                <p>
                  Flipkart also offers no-cost EMI on larger fitness equipment purchases, which pairs well with an active fitness coupon code for maximum affordability.
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
              How to Use a Fitness Coupon Code
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Using a gym &amp; fitness discount code is simple. Here is how it works across most fitness platforms:
              </p>
              
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your code", desc: "Browse CouponsCrew and click on the fitness coupon code for your brand" },
                  { step: "2", title: "Copy the code", desc: "It copies automatically to your clipboard" },
                  { step: "3", title: "Visit the store", desc: "Head to Decathlon, Healthkart, Amazon, or whichever platform you are shopping" },
                  { step: "4", title: "Add products to cart", desc: "Shop as usual and proceed to checkout" },
                  { step: "5", title: "Enter the promo code", desc: "Look for \"Apply Coupon\" or \"Enter Promo Code\" at checkout" },
                  { step: "6", title: "Apply and save", desc: "Paste your sports & fitness promo code and confirm the discount" },
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
                  <strong>Pro tip:</strong> Always check the minimum order value and whether the fitness coupon code applies to supplements, equipment, or apparel — some codes are category-specific.
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
              Types of Fitness Deals You Will Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Gym &amp; fitness discount codes come in several formats across brands and platforms:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Percentage off codes</strong> – Save 10%, 20%, or more on gym supplements or equipment</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flat discount codes</strong> – Fixed savings when your cart crosses a minimum order value</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>First-order codes</strong> – Exclusive sports &amp; fitness promo codes for new users</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Subscription discounts</strong> – Special codes on Cult.fit memberships and fitness plans</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bundle deals</strong> – Save more when buying supplement stacks or combo packs</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-exclusive codes</strong> – Extra savings available only through the brand&apos;s app</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bank cashback offers</strong> – Earn extra savings when paying with select credit or debit cards</p>
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
              Best Times to Use Fitness Coupon Codes
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Timing your fitness purchases around sale events maximises savings. These are the biggest windows to watch:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New Year (January)</strong> – Highest demand for fitness gear — brands push strong gym &amp; fitness discount codes</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Amazon Prime Day</strong> – Great for supplements, equipment, and sportswear deals</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flipkart Big Billion Days</strong> – Wide fitness category discounts across all product types</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Myntra EORS</strong> – Best time for activewear and sports fashion deals</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Healthkart Anniversary Sale</strong> – Deep discounts on supplements and nutrition</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>MuscleBlaze Birthday Sale</strong> – One of the best events for protein supplement savings</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Festive Season (Oct–Nov)</strong> – Brands across all categories push sports &amp; fitness promo codes</p>
                </li>
              </ul>
              <p className="pt-2 italic text-[#1A1A2E] font-medium">
                Bookmark this page and check back before every fitness purchase — new codes are added every day.
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
              Fitness Shopping Tips to Save More
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              A good fitness coupon code is just one part of the savings picture. These tips help stretch your fitness budget further:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Buy supplements in bulk</strong> – Larger pack sizes almost always offer better per-serving value, especially during sales</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare across platforms</strong> – The same MuscleBlaze or Boldfit product may be cheaper on Amazon than Healthkart on a given day</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack codes with cashback</strong> – Combine a fitness coupon code with a bank or wallet cashback deal where allowed</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Set price alerts</strong> – Many platforms let you track prices; pair this with an active gym &amp; fitness discount code for the best timing</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check app-only prices</strong> – Healthkart and Cult.fit often show better pricing on their apps</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Look for combo packs</strong> – Supplement brands frequently bundle products at lower combined prices than buying separately</p>
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
                  q: "Are the fitness coupon codes on CouponsCrew verified?", 
                  a: "Yes. Every gym & fitness discount code listed on CouponsCrew is checked before going live. Expired or inactive codes are removed promptly so you are never wasting time at checkout." 
                },
                { 
                  q: "Do fitness coupon codes work on supplements?", 
                  a: "Yes. Most sports & fitness promo codes from brands like Healthkart and MuscleBlaze apply directly to supplement orders. Check the terms of each code for any category exclusions." 
                },
                { 
                  q: "Can I use a fitness coupon code on Amazon or Flipkart?", 
                  a: "Yes. CouponsCrew lists platform-specific gym & fitness discount codes for Amazon and Flipkart in addition to brand-specific codes. These work across their full fitness and sports categories." 
                },
                { 
                  q: "Are there fitness coupon codes for gym memberships?", 
                  a: "Yes. Cult.fit regularly offers sports & fitness promo codes on new memberships and trial plans. Check CouponsCrew before signing up for any fitness subscription." 
                },
                { 
                  q: "How often are fitness coupon codes updated?", 
                  a: "Our team updates fitness deals every day. During major sale events like Amazon Prime Day or Flipkart Big Billion Days, updates happen multiple times a day." 
                },
                { 
                  q: "Which brand has the best fitness coupon codes right now?", 
                  a: "Healthkart and MuscleBlaze consistently have the most active gym & fitness discount codes for supplements, while Decathlon and Boldfit lead for equipment deals. Check CouponsCrew daily for the latest across all nine brands." 
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
              Start Saving on Fitness Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Your fitness journey should not be held back by high prices. With CouponsCrew, the latest fitness coupon codes, gym &amp; fitness discount codes, and sports &amp; fitness promo codes from Decathlon, Healthkart, MuscleBlaze, Boldfit, Cult.fit, Nike, Amazon, Myntra, and Flipkart are always within reach.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Bookmark this page, check back often, and make every fitness purchase count.
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
              Top Fitness Brands
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">Active fitness codes verified daily.</p>
            <div className="space-y-2">
              {[
                { brand: "Decathlon", tag: "80+ Sports Gear" },
                { brand: "Healthkart", tag: "HKVitals & Nutrition" },
                { brand: "MuscleBlaze", tag: "Protein & Mass" },
                { brand: "Boldfit", tag: "Gym Accessories" },
                { brand: "Cult.fit", tag: "Pass & Memberships" },
                { brand: "Nike", tag: "Pro Activewear" },
                { brand: "Amazon Fitness", tag: "Prime Day Deals" },
                { brand: "Myntra Fitness", tag: "EORS Sportswear" },
                { brand: "Flipkart Fitness", tag: "Big Billion Days" }
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
                  Percentage off, flat discounts, subscription plans, and app-exclusive promo codes.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  Stackable Savings
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Combine discount codes with bundle stacks, EMI plans, bank cashback offers, and free delivery.
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
