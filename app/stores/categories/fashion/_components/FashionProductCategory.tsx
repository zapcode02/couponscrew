'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, ShoppingBag, Package, RefreshCw, Lock, HelpCircle, Sparkles
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
  { name: 'Exercise & Fitness', slug: 'exercise-and-fitness' },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen' },
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories' },
  { name: 'Beauty', slug: 'beauty' },
];

export default function FashionProductCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Fashion')),
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
              <span className="text-[#FF3F6C] font-semibold">Fashion</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Fashion</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Looking for the best fashion coupon codes? You are in the right place. CouponsCrew brings you the latest verified fashion discount codes from top brands like Myntra, AJIO, Amazon, Meesho, Nykaa Fashion, H&M, and Zara — all in one place so you never miss a deal on clothing, footwear, accessories, and more.
              </p>
            
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF0F3] p-2.5 rounded-xl text-[#FF3F6C] shrink-0"><ShoppingBag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Stores</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deals</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 85%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/fashion_wlzeaq.webp"
                alt="Fashion"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Fashion Stores ({categoryStores.length})</h2>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Fashion Deals', desc: 'Get the biggest discounts' },
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Fashion Hub</span>
            </div>
            <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Fashion Coupon Codes – Save Big on Every Style
            </h1>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Looking for the best fashion coupon codes? You are in the right place. CouponsCrew brings you the latest verified fashion discount codes from top brands like Myntra, AJIO, Amazon, Meesho, Nykaa Fashion, H&M, and Zara — all in one place so you never miss a deal on clothing, footwear, accessories, and more.
              </p>
              <p>
                Whether you are shopping for everyday casuals, office wear, ethnic outfits, or luxury labels, our fashion promo codes help you save more on every purchase.
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
              Why Use Fashion Coupon Codes from CouponsCrew?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Shopping for fashion without a coupon code is like paying full price when you do not have to. Fashion is one of the most competitive categories online, which means brands regularly push out fashion discount codes to attract buyers. The problem is finding these codes quickly before they expire.
              </p>
              <p>
                CouponsCrew solves this by tracking and verifying fashion promo codes daily across all major fashion platforms. Every code listed here is tested so you are not wasting time at checkout with dead codes.
              </p>
              <p className="font-bold text-[#1A1A2E] pt-2">
                Here is what makes CouponsCrew your go-to fashion deals destination:
              </p>
              
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Always updated</strong> – Codes are refreshed daily, especially during sale seasons</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified offers</strong> – Every fashion coupon code is checked before it goes live</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All brands in one place</strong> – No jumping between 10 different websites</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>No signup needed</strong> – Copy the code and use it, that&apos;s it</p>
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
              Top Fashion Brands to Shop With Discount Codes
            </h2>
            
            <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
              {/* Myntra */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FF3F6C]" />
                  Myntra Coupon Codes
                </h3>
                <p className="mb-2">
                  Myntra is one of the largest online fashion destinations offering thousands of brands across clothing, footwear, and accessories. Myntra regularly runs End of Reason Sales (EORS), festive sales, and brand-specific events where fashion discount codes can stack with existing sale prices for maximum savings.
                </p>
                <p>
                  Look for Myntra fashion promo codes during their bi-annual EORS events — these are the best times to combine bank offers with coupon codes for the deepest discounts.
                </p>
              </div>

              {/* AJIO */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#2C4152]" />
                  AJIO Coupon Codes
                </h3>
                <p className="mb-2">
                  AJIO stands out for its strong mix of global brands, Indian designers, and private labels. Their AJIO Big Bold Sale and AJIO INDI Sale are popular events where fashion coupon codes bring prices down significantly on both premium and affordable styles.
                </p>
                <p>
                  AJIO frequently offers first-order discounts and app-exclusive fashion promo codes, making it worth checking here before placing any new order.
                </p>
              </div>

              {/* Amazon Fashion */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FF9900]" />
                  Amazon Fashion Coupon Codes
                </h3>
                <p className="mb-2">
                  Amazon Fashion covers a massive range — from budget basics to branded apparel. With Amazon&apos;s Great Indian Festival, Prime Day, and seasonal clearance events, finding a working fashion discount code here can save you on everything from formal shirts to sports shoes.
                </p>
                <p>
                  Amazon also runs Lightning Deals on fashion every day, which pair well with any active fashion coupon codes for extra savings.
                </p>
              </div>

              {/* Meesho */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#E91E63]" />
                  Meesho Coupon Codes
                </h3>
                <p className="mb-2">
                  Meesho has grown rapidly as a budget-friendly fashion platform with a strong focus on ethnic wear, kurtis, sarees, and everyday casuals. Meesho fashion promo codes often bring prices down to near-wholesale levels, making it a favourite for shoppers looking for value.
                </p>
                <p>
                  Check CouponsCrew regularly for Meesho fashion discount codes especially around festivals when their collections expand.
                </p>
              </div>

              {/* Nykaa Fashion */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FC2779]" />
                  Nykaa Fashion Coupon Codes
                </h3>
                <p className="mb-2">
                  Nykaa Fashion combines beauty and fashion in one ecosystem. Their platform is strong on western wear, co-ords, and fusion styles. Nykaa regularly offers fashion coupon codes tied to their beauty purchases, giving you cross-category savings on a single cart.
                </p>
                <p>
                  Their Nykaa Fashion Sale events often feature deep discounts on emerging Indian labels and international fast-fashion brands.
                </p>
              </div>

              {/* H&M */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#E50010]" />
                  H&amp;M Coupon Codes
                </h3>
                <p className="mb-2">
                  H&amp;M brings global fast fashion to shoppers worldwide with a well-organised online store. H&amp;M fashion discount codes are especially popular during their End of Season sales when already-reduced prices drop further with a promo code applied at checkout.
                </p>
                <p>
                  H&amp;M membership program members also receive exclusive fashion promo codes periodically — combine these with sale prices for the best results.
                </p>
              </div>

              {/* Zara */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#000000]" />
                  Zara Coupon Codes
                </h3>
                <p className="mb-2">
                  Zara is known for trend-forward fashion at a premium price point. While Zara runs fewer discount events than other brands, their seasonal sale combined with Zara fashion coupon codes can make premium fashion significantly more affordable.
                </p>
                <p>
                  Zara sale events typically run twice a year — keep an eye on CouponsCrew during January and July for active Zara fashion discount codes.
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
              How to Use a Fashion Coupon Code
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Using a fashion promo code is simple. Here is how it works across most fashion platforms:
              </p>
              
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your code", desc: "Browse CouponsCrew and click on the fashion coupon code you want to use" },
                  { step: "2", title: "Copy the code", desc: "The code is automatically copied to your clipboard" },
                  { step: "3", title: "Shop your brand", desc: "Head to Myntra, AJIO, Amazon, or whichever brand the code is for" },
                  { step: "4", title: "Add items to cart", desc: "Shop as you normally would" },
                  { step: "5", title: "Go to checkout", desc: "Look for the \"Apply Coupon\" or \"Enter Promo Code\" field" },
                  { step: "6", title: "Paste and apply", desc: "Paste your fashion discount code and hit apply" },
                  { step: "7", title: "See the savings", desc: "Your discount will reflect instantly in the order total" }
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
                  <strong>Pro tip:</strong> Always check the minimum order value and brand/category restrictions on any fashion coupon code before you start shopping. Some codes are valid only on specific categories like women&apos;s wear, footwear, or new arrivals.
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
              Types of Fashion Deals You Will Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Not all fashion discount codes work the same way. Here are the types of offers you will regularly find on CouponsCrew:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Percentage off codes</strong> – Get 10%, 20%, 30%, or more off your total cart value</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flat discount codes</strong> – Fixed savings like ₹200 off on orders above ₹999</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>First-order codes</strong> – Special fashion promo codes for new users on a platform</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bank offer codes</strong> – Extra savings when paying with select credit or debit cards</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-exclusive codes</strong> – Discounts available only when shopping via the brand&apos;s mobile app</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Cashback offers</strong> – Earn back a percentage of your spend as store credit or wallet money</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Free shipping codes</strong> – Waive delivery charges, especially useful on smaller orders</p>
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
              Best Times to Use Fashion Coupon Codes
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Timing your fashion shopping around sale events maximises what you save. These are the biggest fashion sale periods to watch:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>End of Season Sales</strong> – January and July are prime months for deep markdowns</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Festive Sales</strong> – Diwali, Eid, and Christmas bring massive fashion deals</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Myntra EORS</strong> – Bi-annual event with some of the steepest fashion discounts of the year</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Amazon Great Indian Festival</strong> – Fashion gets heavy discounts here every year</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>AJIO Big Bold Sale</strong> – Known for offers across premium and affordable fashion</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New Year Sales</strong> – January sees a wave of fashion promo codes to clear old stock</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Women&apos;s Day &amp; Valentine&apos;s Day</strong> – Great time for gifting fashion with extra coupon savings</p>
                </li>
              </ul>
              <p className="pt-2 italic text-[#1A1A2E] font-medium">
                Bookmark this page and check back before any major purchase — new fashion coupon codes are added regularly.
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
              Fashion Saving Tips
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              A coupon code alone is just the start. Here are a few ways to squeeze even more value from your fashion shopping:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack offers where possible</strong> – Combine a fashion discount code with a bank cashback offer for double savings</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check app-only prices</strong> – Many brands show lower prices on their apps than on desktop</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare across platforms</strong> – The same brand item may be cheaper on Amazon than Myntra on a given day</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use wish lists</strong> – Add items to your wish list and wait for sale events before buying</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Buy bundles</strong> – Many platforms offer buy-2-get-1 or set deals that beat single-item pricing</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check return policies</strong> – Know the return window before buying fashion online to shop confidently</p>
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
                  q: "Do fashion coupon codes actually work?", 
                  a: "Yes — all fashion coupon codes listed on CouponsCrew are verified before going live. If a code has expired, it is removed or marked accordingly so you are not wasting time at checkout." 
                },
                { 
                  q: "Can I use multiple fashion discount codes on one order?", 
                  a: "Most platforms allow only one coupon code per order. However, you can often combine a fashion promo code with a bank offer or cashback deal for additional savings." 
                },
                { 
                  q: "Are there fashion coupon codes for new users?", 
                  a: "Yes. Platforms like Meesho, Myntra, and Nykaa Fashion regularly offer first-order fashion discount codes for new accounts, often with significant percentage discounts." 
                },
                { 
                  q: "How often are fashion coupon codes updated on CouponsCrew?", 
                  a: "Our team updates fashion deals and promo codes daily. During major sale events, updates happen multiple times a day to keep listings accurate." 
                },
                { 
                  q: "Do fashion promo codes work on sale items?", 
                  a: "This depends on the brand. Some fashion coupon codes apply only to full-price items, while others work on already-discounted products. Always check the terms listed with each code." 
                },
                { 
                  q: "Which brand has the best fashion coupon codes right now?", 
                  a: "This changes daily. Myntra and AJIO tend to have the most active fashion discount codes at any given time, but all seven brands listed here regularly push new offers." 
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
              Start Saving on Fashion Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Fashion should not have to cost full price. With CouponsCrew, you always have access to the latest fashion coupon codes, fashion discount codes, and fashion promo codes from the brands you love — Myntra, AJIO, Amazon, Meesho, Nykaa Fashion, H&amp;M, and Zara.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Check back often, bookmark this page, and never pay full price for fashion again.
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
              Top Fashion Brands
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">Active fashion codes verified daily.</p>
            <div className="space-y-2">
              {[
                { brand: "Myntra", tag: "EORS & Bank Offers" },
                { brand: "AJIO", tag: "Big Bold Sale" },
                { brand: "Amazon Fashion", tag: "Lightning Deals" },
                { brand: "Meesho", tag: "Near-Wholesale" },
                { brand: "Nykaa Fashion", tag: "Beauty & Style" },
                { brand: "H&M", tag: "End of Season" },
                { brand: "Zara", tag: "Bi-Annual Clearance" }
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
                  Combine discount codes with ongoing sale prices, bank cashback offers, and free delivery flags.
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
