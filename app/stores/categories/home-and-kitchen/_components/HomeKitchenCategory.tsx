'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, Home, Package, RefreshCw, Lock, HelpCircle, Sparkles
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
  { name: 'Clothing & Accessories', slug: 'clothing-and-accessories' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
];

export default function HomeKitchenCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Home & Kitchen')),
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
              <span className="text-[#5B4FBE] font-semibold">Home & Kitchen</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Home & Kitchen</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">Décor, lighting, and home essentials at verified Amazon prices — no dead links, no expired deals.</p>
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0"><Home size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Store</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">{categoryStores.length}</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deal</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#F0FDF4] p-2.5 rounded-xl text-[#22C55E] shrink-0"><Percent size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 90%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/home-kitchen_wtn75z.webp"
                alt="Home & Kitchen"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Home & Kitchen Stores ({categoryStores.length})</h2>
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
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Home Deals', desc: 'Get the biggest discounts' },
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Home &amp; Kitchen Hub</span>
            </div>
            <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Home &amp; Kitchen Coupon Codes – Save on Furniture, Appliances &amp; More
            </h1>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Looking for the best home &amp; kitchen coupon codes? CouponsCrew tracks and verifies the latest home appliances discount codes and kitchen promo codes from top brands like Amazon, Pepperfry, Urban Ladder, IKEA, Philips, Prestige, Flipkart, and Croma — all updated daily so you always save at checkout.
              </p>
              <p>
                Whether you are furnishing a new home, upgrading your kitchen appliances, or picking up everyday essentials, our home &amp; kitchen coupon codes help you spend less on every purchase.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 1.5: TODAY'S BEST COUPOUN CODES TABLE */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Featured Deals</span>
            </div>
            <h2 className="text-xl font-black text-[#1A1A2E] leading-tight mb-4">
              Today&apos;s Best Home &amp; Kitchen Coupon Codes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8FF] border-b border-[#E8E8F0] text-[#1A1A2E]">
                    <th className="p-3 font-extrabold">Brand</th>
                    <th className="p-3 font-extrabold">Offer</th>
                    <th className="p-3 font-extrabold">Discount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8F0] text-[#4A4A6A]">
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Amazon</td>
                    <td className="p-3">Home &amp; Kitchen Store Deals</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 60% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Pepperfry</td>
                    <td className="p-3">Furniture &amp; Home Decor</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 70% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Urban Ladder</td>
                    <td className="p-3">Premium Furniture Sale</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 55% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">IKEA</td>
                    <td className="p-3">Selected Home Products</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 50% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Philips</td>
                    <td className="p-3">Home Appliances Deals</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 40% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Prestige</td>
                    <td className="p-3">Kitchen Appliances Offers</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 45% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Flipkart</td>
                    <td className="p-3">Home &amp; Kitchen Category</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 65% Off</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1A1A2E]">Croma</td>
                    <td className="p-3">Electronics &amp; Appliances</td>
                    <td className="p-3 font-bold text-[#5B4FBE]">Up to 50% Off</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ARTICLE BLOCK 2: WHY USE US */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Why Use Home &amp; Kitchen Coupon Codes from CouponsCrew?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Home and kitchen purchases are some of the biggest spending decisions you will make. A sofa, a refrigerator, a modular kitchen setup — these are not impulse buys, and every percentage saved adds up to real money. That is exactly where home &amp; kitchen coupon codes from CouponsCrew make a difference.
              </p>
              <p>
                We monitor home and kitchen brands every day, updating home appliances discount codes and kitchen promo codes as soon as new offers go live. Every deal is verified before it appears on CouponsCrew so you are not wasting time on dead codes when you are ready to check out.
              </p>
              <p className="font-bold text-[#1A1A2E] pt-2">
                Here is why home shoppers keep coming back to CouponsCrew:
              </p>
              
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Daily updates</strong> – Fresh home &amp; kitchen coupon codes added every day</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified codes only</strong> – Expired or inactive codes are removed promptly</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All top brands in one place</strong> – From furniture to appliances, all here</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>No signup needed</strong> – Copy the code and apply it instantly</p>
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
              Top Home &amp; Kitchen Brands to Shop With Discount Codes
            </h2>
            
            <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
              {/* Amazon */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#FF9900]" />
                  Amazon Home &amp; Kitchen Coupon Codes
                </h3>
                <p className="mb-2">
                  Amazon carries one of the widest selections of home and kitchen products available online — from small kitchen appliances and cookware to large furniture sets and home decor. Amazon home &amp; kitchen coupon codes are among the most versatile, often applying across multiple product types in a single order.
                </p>
                <p>
                  During Amazon&apos;s Great Indian Festival and Prime Day, home appliances discount codes on Amazon can bring prices down sharply on everything from air fryers and mixer grinders to beds and wardrobes. Amazon&apos;s Lightning Deals on home and kitchen products are also worth watching daily for short-window savings.
                </p>
              </div>

              {/* Pepperfry */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#F15A24]" />
                  Pepperfry Coupon Codes
                </h3>
                <p className="mb-2">
                  Pepperfry is one of the leading online furniture and home decor destinations, offering an extensive range of sofas, beds, wardrobes, dining sets, and decorative accessories. Their platform covers both premium and budget-friendly options, making it accessible for a wide range of home setups.
                </p>
                <p>
                  Pepperfry home &amp; kitchen coupon codes are particularly popular during their Big Pepperfry Sale and festive season events. Their Studio Pepperfry experience centres also offer in-person consultations, making them a trusted choice for larger furniture purchases. Check CouponsCrew for active Pepperfry home appliances discount codes before placing any furniture order.
                </p>
              </div>

              {/* Urban Ladder */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#111827]" />
                  Urban Ladder Coupon Codes
                </h3>
                <p className="mb-2">
                  Urban Ladder focuses on premium, design-forward furniture and home interiors. Their curated collections span living room, bedroom, dining, and home office furniture — all with a strong emphasis on quality materials and contemporary aesthetics.
                </p>
                <p>
                  Urban Ladder home &amp; kitchen coupon codes are most active during their anniversary sales and festive promotions. Given the premium price points, even a modest kitchen promo code or discount here translates to meaningful savings on high-value orders.
                </p>
              </div>

              {/* IKEA */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#0051BA]" />
                  IKEA Coupon Codes
                </h3>
                <p className="mb-2">
                  IKEA brings Scandinavian design principles and flat-pack furniture to homes worldwide. Their product range covers everything from storage solutions and kitchen fittings to sofas, beds, and home accessories — all at accessible price points that make good design available to everyone.
                </p>
                <p>
                  IKEA home &amp; kitchen coupon codes and seasonal offers are worth checking before any large purchase. Their Family member program offers periodic exclusive deals and home appliances discount codes across their full product range, making membership worthwhile for regular IKEA shoppers.
                </p>
              </div>

              {/* Philips */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#0B5ED7]" />
                  Philips Coupon Codes
                </h3>
                <p className="mb-2">
                  Philips is a globally trusted brand for home appliances, personal care, and kitchen electronics. Their home category covers air fryers, mixer grinders, juicers, vacuum cleaners, air purifiers, and more — all built to reliable quality standards.
                </p>
                <p>
                  Philips home &amp; kitchen coupon codes are available on their own website and across platforms like Amazon, Flipkart, and Croma. End of season sales and new product launches are the best times to find active Philips home appliances discount codes, especially on their kitchen electronics range.
                </p>
              </div>

              {/* Prestige */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#E63946]" />
                  Prestige Coupon Codes
                </h3>
                <p className="mb-2">
                  Prestige is a household name in kitchen appliances, known for pressure cookers, cookware, mixer grinders, induction cooktops, and a wide range of cooking essentials. Their products are a staple in kitchens across the world for their durability and practical value.
                </p>
                <p>
                  Prestige kitchen promo codes are available during festive seasons and their own brand sales. Combining a Prestige home &amp; kitchen coupon code with a cashback offer on select payment methods can deliver strong savings on both individual appliances and cookware sets.
                </p>
              </div>

              {/* Flipkart */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#2874F0]" />
                  Flipkart Home &amp; Kitchen Coupon Codes
                </h3>
                <p className="mb-2">
                  Flipkart&apos;s home and kitchen category is one of the most comprehensive on any platform, covering furniture, appliances, cookware, storage, and home decor at competitive prices. Flipkart home &amp; kitchen coupon codes are widely available and especially strong during their Big Billion Days event.
                </p>
                <p>
                  Flipkart also offers no-cost EMI on larger home appliance purchases, which pairs well with an active home appliances discount code to make big-ticket items significantly more affordable.
                </p>
              </div>

              {/* Croma */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#00B9F0]" />
                  Croma Coupon Codes
                </h3>
                <p className="mb-2">
                  Croma is a specialist electronics and home appliances retailer with a strong online presence. Their range covers large appliances like washing machines, refrigerators, and air conditioners alongside smaller kitchen and home electronics from top brands including Philips, Prestige, and many others.
                </p>
                <p>
                  Croma home &amp; kitchen coupon codes are most active during their Big Saving Days and festive promotions. As a dedicated appliances destination, Croma kitchen promo codes tend to be category-specific and deliver strong savings on high-value purchases.
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
              How to Use a Home &amp; Kitchen Coupon Code
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Applying a home appliances discount code at checkout is straightforward. Here is how it works:
              </p>
              
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your code", desc: "Browse CouponsCrew and click on the home & kitchen coupon code for your brand" },
                  { step: "2", title: "Copy the code", desc: "It copies automatically to your clipboard" },
                  { step: "3", title: "Visit the store", desc: "Head to Amazon, Pepperfry, Flipkart, or whichever platform you are shopping" },
                  { step: "4", title: "Add products to cart", desc: "Shop as usual and proceed to checkout" },
                  { step: "5", title: "Enter the promo code", desc: "Look for \"Apply Coupon\" or \"Enter Promo Code\" at checkout" },
                  { step: "6", title: "Apply and save", desc: "Paste your kitchen promo code and confirm the discount" },
                  { step: "7", title: "Complete your order", desc: "Pay and enjoy the savings" }
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
                  <strong>Pro tip:</strong> For large furniture or appliance orders, always check whether the home &amp; kitchen coupon code has a minimum order value and whether it applies to the specific product category you are buying.
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
              Types of Home &amp; Kitchen Deals You Will Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Home appliances discount codes and kitchen promo codes come in several formats:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Percentage off codes</strong> – Save 10%, 20%, or more on furniture, appliances, or decor</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flat discount codes</strong> – Fixed savings on orders above a minimum cart value</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>First-order codes</strong> – Exclusive home &amp; kitchen coupon codes for new platform users</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bank cashback offers</strong> – Extra savings when paying with select credit or debit cards</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>No-cost EMI deals</strong> – Split large appliance purchases into instalments at no extra cost</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bundle deals</strong> – Save more when buying sets like cookware combos or furniture packages</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-exclusive codes</strong> – Additional savings when ordering through the brand&apos;s mobile app</p>
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
              Best Times to Use Home &amp; Kitchen Coupon Codes
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Timing large home purchases around sale events can save you significantly. These are the biggest windows to watch:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Amazon Great Indian Festival</strong> – One of the best times for home appliances discount codes across all categories</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flipkart Big Billion Days</strong> – Deep discounts on furniture, appliances, and kitchen products</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Pepperfry Big Sale</strong> – Strongest furniture and home decor deals of the year</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Croma Big Saving Days</strong> – Best event for home appliance and electronics savings</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Festive Season (Oct–Nov)</strong> – Diwali and surrounding weeks push kitchen promo codes across all platforms</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New Home Season (Jan–Mar)</strong> – Many platforms offer strong home &amp; kitchen coupon codes targeting new homeowners</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>End of Season Clearance</strong> – January and July clearance events deliver solid savings on furniture and decor</p>
                </li>
              </ul>
              <p className="pt-2 italic text-[#1A1A2E] font-medium">
                Bookmark this page and check back before any major home purchase — new deals are added every day.
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
              Home &amp; Kitchen Shopping Tips to Save More
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              A good home &amp; kitchen coupon code is just the start. These tips help you get even more value from your home shopping budget:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Measure before you buy</strong> – Always confirm dimensions for furniture before ordering to avoid costly returns</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare delivery timelines</strong> – Pepperfry and Urban Ladder have different lead times; factor this into your decision</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack codes with bank offers</strong> – Combining a home appliances discount code with a credit card cashback offer on platforms like Amazon and Flipkart doubles your savings</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check assembly costs</strong> – Some furniture platforms charge separately for installation; factor this into the total cost</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Wait for festive sales for big items</strong> – Refrigerators, washing machines, and sofas see the deepest discounts during Diwali and year-end sales</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use wish lists</strong> – Add high-value items to your wish list and wait for an active kitchen promo code before purchasing</p>
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
                  q: "Are the home & kitchen coupon codes on CouponsCrew verified?", 
                  a: "Yes. Every home appliances discount code and kitchen promo code listed on CouponsCrew is checked before going live. Expired codes are removed promptly so you are not wasting time at checkout." 
                },
                { 
                  q: "Do home & kitchen coupon codes work on large appliances?", 
                  a: "Yes, many do. Platforms like Amazon, Flipkart, and Croma regularly offer home appliances discount codes that apply to refrigerators, washing machines, and air conditioners. Always check the specific terms of each code." 
                },
                { 
                  q: "Can I use a home & kitchen coupon code on furniture?", 
                  a: "Yes. Pepperfry and Urban Ladder regularly offer home & kitchen coupon codes on furniture orders. Some codes apply sitewide while others are specific to categories like living room or bedroom furniture." 
                },
                { 
                  q: "Are there kitchen promo codes for new users?", 
                  a: "Yes. Most platforms including Amazon, Pepperfry, and Flipkart offer first-order home & kitchen coupon codes for new accounts with generous discounts on initial purchases." 
                },
                { 
                  q: "How often are home & kitchen coupon codes updated?", 
                  a: "Our team updates home and kitchen deals every day. During major events like Flipkart Big Billion Days or Amazon Great Indian Festival, updates happen multiple times a day." 
                },
                { 
                  q: "Which brand has the best home & kitchen coupon codes right now?", 
                  a: "Amazon and Flipkart consistently have the most active home appliances discount codes across the widest product range. Pepperfry leads for furniture-specific deals. Check CouponsCrew daily for the latest across all eight brands." 
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
              Start Saving on Home &amp; Kitchen Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Your home deserves the best — without paying full price for it. With CouponsCrew, the latest home &amp; kitchen coupon codes, home appliances discount codes, and kitchen promo codes from Amazon, Pepperfry, Urban Ladder, IKEA, Philips, Prestige, Flipkart, and Croma are always within reach.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Bookmark this page, check back often, and make every home purchase count.
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
              Top Home Brands
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">Active home &amp; kitchen codes verified daily.</p>
            <div className="space-y-2">
              {[
                { brand: "Amazon", tag: "Store Deals & Lightning" },
                { brand: "Pepperfry", tag: "Furniture & Decor" },
                { brand: "Urban Ladder", tag: "Premium Living" },
                { brand: "IKEA", tag: "Flat-Pack & Fittings" },
                { brand: "Philips", tag: "Electronics & Air" },
                { brand: "Prestige", tag: "Cookware & Appliances" },
                { brand: "Flipkart", tag: "Big Billion Days" },
                { brand: "Croma", tag: "Electronics & EMI" }
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
                  Combine promo codes with No-Cost EMI, bank cashback offers, and seasonal sales.
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
