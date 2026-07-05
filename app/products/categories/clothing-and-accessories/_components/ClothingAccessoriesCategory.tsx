'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ShieldCheck, Tag, Percent, SlidersHorizontal,
  ArrowRight, Shirt, Package, RefreshCw, Lock, ExternalLink
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';

const PRODUCTS = [
  {
    id: 'deelmo-kurta',
    name: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
    brand: 'DEELMO',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/71Qhqwnx4JL._SY741__ljgmwm.jpg',
    dealPrice: 479,
    originalPrice: 2199,
    discountPercent: 78,
    affiliateUrl: 'https://amzn.to/3R7tzTR',
    slug: '/products/deelmo-mens-mandarin-collar-kurta',
    isPopular: true,
  },
  {
    id: 'acnos-watch',
    name: "Acnos Premium Girl's Heart Shape Bangle Analog Watch (Pack of 2)",
    brand: 'ACNOS',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162305/41oui_xq1PL_zndlwz.jpg',
    dealPrice: 299,
    originalPrice: 1999,
    discountPercent: 85,
    affiliateUrl: 'https://amzn.to/4gbffUx',
    slug: '/products/acnos-bangle-watch-pack-of-2',
    isPopular: false,
  },
];

const OTHER_CATEGORIES = [
  { name: 'Exercise & Fitness', slug: 'exercise-and-fitness' },
  { name: 'Home & Kitchen', slug: 'home-and-kitchen' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
];

export default function ClothingAccessoriesCategory() {
  const [sortBy, setSortBy] = useState('Popular');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);

  const processed = useMemo(() => {
    let r = [...PRODUCTS];
    if (isFilterActive) r = r.filter(p => p.discountPercent >= 70);
    if (sortBy === 'Price: Low to High') r.sort((a, b) => a.dealPrice - b.dealPrice);
    else if (sortBy === 'Price: High to Low') r.sort((a, b) => b.dealPrice - a.dealPrice);
    else if (sortBy === 'Highest Discount') r.sort((a, b) => b.discountPercent - a.discountPercent);
    else r.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    return r;
  }, [sortBy, isFilterActive]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) { setNewsAlert(true); setNewsletterEmail(''); setTimeout(() => setNewsAlert(false), 5000); }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

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
              <Link href="/products/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Product Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#D2691E] font-semibold">Clothing & Accessories</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Clothing & Accessories</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">Kurtas, watches, and everyday wearables — verified Amazon prices, real savings every time.</p>
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FDF1E7] p-2.5 rounded-xl text-[#D2691E] shrink-0"><Shirt size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">2</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Products</div></div>
              </div>
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FFF3F0] p-2.5 rounded-xl text-[#FF5722] shrink-0"><Tag size={18} /></div>
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">2</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Active Deals</div></div>
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
              <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/clothing-accessories_jassli.webp" alt="Clothing & Accessories" className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 pb-4 border-b border-[#E8E8F0]">
              <div>
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Clothing & Accessories ({PRODUCTS.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deals linked directly to Amazon.</p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 select-none">
                <span className="text-sm font-semibold text-[#4A4A6A]">Sort By:</span>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-[#E8E8F0] rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:border-[#5B4FBE] cursor-pointer text-[#1A1A2E] font-semibold">
                  <option>Popular</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Highest Discount</option>
                </select>
                <button onClick={() => setIsFilterActive(p => !p)} className={`border rounded-xl px-4 py-2 text-sm flex items-center gap-2 cursor-pointer transition ${isFilterActive ? 'border-[#5B4FBE] bg-[#F0EEFF] text-[#5B4FBE] font-bold' : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE]'}`}>
                  <SlidersHorizontal size={16} /><span>{isFilterActive ? 'Filter: On' : 'Filter'}</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processed.map(p => (
                <div key={p.id} className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                  <Link href={p.slug} className="block relative aspect-square bg-[#F8F8FF] overflow-hidden">
                    {p.isPopular && <div className="absolute top-0 left-0 bg-[#FF5722] text-white text-[10px] font-bold px-3 py-1 rounded-br-xl z-10 uppercase">POPULAR</div>}
                    <div className="absolute top-3 right-3 bg-[#FF5722] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg z-10">{p.discountPercent}% OFF</div>
                    <NextImage src={p.image} alt={p.name} fill sizes="(max-width: 640px) 90vw, 300px" className="object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </Link>
                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full uppercase tracking-wider">{p.brand}</span>
                      <Link href={p.slug}><h3 className="font-bold text-sm text-[#1A1A2E] mt-2 leading-snug hover:text-[#5B4FBE] transition-colors line-clamp-2">{p.name}</h3></Link>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="font-black text-[#1A1A2E] text-base">₹{p.dealPrice}</span>
                        <span className="text-xs text-gray-400 line-through">₹{p.originalPrice}</span>
                        <span className="text-xs font-bold text-[#22C55E]">SAVE ₹{p.originalPrice - p.dealPrice}</span>
                      </div>
                    </div>
                    <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all">
                      <ExternalLink size={13} /><span>Get Deal on Amazon</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 lg:sticky lg:top-24 text-left">
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-[0_2px_12px_rgba(232,232,240,0.3)]">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 uppercase tracking-wide border-b border-[#F8F8FF] pb-2">Browse Other Categories</h3>
              <div className="space-y-1">
                {OTHER_CATEGORIES.map(c => (
                  <Link key={c.slug} href={`/products/categories/${c.slug}`} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#F0EEFF] transition-colors group">
                    <Package size={15} className="text-[#4A4A6A] group-hover:text-[#5B4FBE] shrink-0" />
                    <span className="text-sm text-[#4A4A6A] group-hover:text-[#5B4FBE] group-hover:font-semibold">{c.name}</span>
                    <ArrowRight size={13} className="ml-auto text-gray-300 group-hover:text-[#5B4FBE]" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-[0_2px_12px_rgba(232,232,240,0.3)]">
              <h3 className="font-bold text-[#1A1A2E] text-sm mb-4 uppercase tracking-wide border-b border-[#F8F8FF] pb-2">Top Deals This Month</h3>
              <div className="space-y-3.5">
                {PRODUCTS.map((p, i) => (
                  <div key={p.id} className="flex items-center gap-3 group">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${i === 0 ? 'bg-[#FFD700] text-[#1A1A2E]' : i === 1 ? 'bg-gray-200 text-[#1A1A2E]' : 'bg-[#F0EEFF] text-[#5B4FBE]'}`}>{i + 1}</div>
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#F8F8FF]">
                      <NextImage src={p.image} alt={p.name} fill sizes="40px" className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-xs font-semibold text-[#1A1A2E] flex-1 line-clamp-2 group-hover:text-[#5B4FBE] transition-colors">{p.name}</span>
                    <span className="text-xs font-extrabold text-[#FF5722] shrink-0">{p.discountPercent}% OFF</span>
                  </div>
                ))}
              </div>
              <Link href="/products" className="text-xs font-bold text-[#5B4FBE] hover:underline inline-flex items-center gap-1 mt-5 ml-2"><span>View All Products</span><ArrowRight size={13} /></Link>
            </div>
            <div className="bg-gradient-to-br from-[#FF6B9D] to-[#FF3F6C] rounded-2xl p-6 relative overflow-hidden shadow-xl text-white">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute bottom-2 right-3 text-4xl opacity-60 rotate-12 pointer-events-none select-none">👗</div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg">Love Fashion?</h3>
                <p className="text-white/80 text-xs mt-2 leading-relaxed font-semibold">Get the best clothing deals straight to your inbox.</p>
                <form onSubmit={handleNewsletterSubmit} className="mt-4">
                  <input type="email" required value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} placeholder="Enter your email" className="bg-white/20 border border-white/30 rounded-xl px-4 py-2.5 text-white text-sm w-full placeholder-white/60 focus:outline-none focus:bg-white/30" />
                  <button type="submit" className="mt-3 w-full bg-white text-[#FF3F6C] py-2.5 rounded-xl text-sm font-black hover:bg-gray-50 transition cursor-pointer shadow-md">Subscribe</button>
                </form>
                {newsAlert && <div className="mt-3 text-[11px] bg-white/15 border border-white/20 rounded-xl p-2.5 font-bold">✓ You're subscribed to clothing deals!</div>}
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
      <Footer />
    </div>
  );
}
