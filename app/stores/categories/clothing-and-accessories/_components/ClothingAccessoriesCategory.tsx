'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp, ChevronDown, ShieldCheck, Tag, Percent,
  ArrowRight, Shirt, ShoppingBag, Package, RefreshCw, Lock, HelpCircle, Sparkles
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
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Beauty', slug: 'beauty' },
];

export default function ClothingAccessoriesCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Clothing & Accessories')),
    []
  );

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
              <Link href="/stores/categories" className="hover:text-[#5B4FBE] transition-colors font-medium">Store Categories</Link>
              <ChevronRight size={14} className="text-gray-300 stroke-[2.5]" />
              <span className="text-[#D2691E] font-semibold">Clothing & Accessories</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Clothing & Accessories</h1>
            <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">Kurtas, watches, and everyday wearables — verified Amazon prices, real savings every time.</p>
            <div className="mt-6 flex flex-wrap gap-3 w-full">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(232,232,240,0.4)]">
                <div className="bg-[#FDF1E7] p-2.5 rounded-xl text-[#D2691E] shrink-0"><Shirt size={18} /></div>
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Clothing & Accessories Stores ({categoryStores.length})</h2>
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
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Fashion &amp; Apparel Hub</span>
            </div>
            <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Clothing Coupon Codes – Save on Branded Wear &amp; Accessories
            </h1>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Looking for the best clothing coupon codes? CouponsCrew tracks and verifies the latest clothing discount codes and accessories promo codes from top brands like Myntra, AJIO, Levi&apos;s, Allen Solly, Van Heusen, FabIndia, Amazon, and Flipkart — updated daily so you always save at checkout.
              </p>
              <p>
                Whether you are refreshing your work wardrobe, shopping for ethnic wear, picking up everyday basics, or keeping up with the latest Gen Z fashion trends, our clothing coupon codes help you spend less on every order.
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
              Why Use Clothing Coupon Codes from CouponsCrew?
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Building and maintaining a wardrobe is an ongoing expense. Work clothes, ethnic wear for occasions, casual everyday outfits, and accessories — it all adds up across the year. Clothing discount codes make it easier to keep your wardrobe fresh without overspending.
              </p>
              <p>
                CouponsCrew monitors clothing brands and platforms daily, updating accessories promo codes and clothing coupon codes as soon as new deals go live. Every offer is verified before it appears here so you are not wasting time on expired codes at checkout.
              </p>
              <p className="font-bold text-[#1A1A2E] pt-2">
                Here is why shoppers keep coming back to CouponsCrew for clothing deals:
              </p>
              
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Daily updates</strong> – Fresh clothing coupon codes added every day, more during sale seasons</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Verified codes only</strong> – Inactive or expired codes are removed quickly</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All top brands in one place</strong> – From premium workwear to ethnic and Gen Z styles</p>
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
              <span className="w-1 h-6 bg-[#EC4899] rounded-full block"></span>
              <span className="text-xs font-black text-[#EC4899] uppercase tracking-widest">Brand Partners</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Top Clothing &amp; Accessories Brands to Shop With Discount Codes
            </h2>
            
            <div className="mt-6 space-y-6 text-sm text-[#4A4A6A] leading-relaxed">
              {/* Myntra */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#E91E63]" />
                  Myntra Coupon Codes
                </h3>
                <p className="mb-2">
                  Myntra is one of the largest online clothing destinations, carrying thousands of brands across every clothing category — from office formals and ethnic wear to streetwear and accessories. Myntra clothing coupon codes are among the most popular in the category, especially during their End of Reason Sale (EORS).
                </p>
                <p>
                  Myntra has also become a go-to platform for Gen Z fashion, stocking trending styles from brands like H&amp;M, Roadster, and emerging homegrown labels. Their accessories promo codes cover everything from bags and belts to sunglasses and jewellery, making it easy to complete any outfit for less.
                </p>
              </div>

              {/* AJIO */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#2B2E4A]" />
                  AJIO Coupon Codes
                </h3>
                <p className="mb-2">
                  AJIO offers a well-curated mix of international brands, Indian designers, and their own private labels across clothing and accessories. Their platform is strong on both everyday casual wear and trend-forward Gen Z styles, with a dedicated section for global and indie brands that stand out from mainstream fashion.
                </p>
                <p>
                  AJIO clothing discount codes are frequently available for new customers and during their Big Bold Sale events. If you are looking for clothing that balances style, quality, and price, AJIO accessories promo codes regularly deliver solid value across their full range.
                </p>
              </div>

              {/* Levi's */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#C41230]" />
                  Levi&apos;s Coupon Codes
                </h3>
                <p className="mb-2">
                  Levi&apos;s is one of the most iconic clothing brands in the world, known for their denim jeans, jackets, and casualwear that have remained relevant across generations — and are a staple of Gen Z wardrobes today. Their products are premium-priced, which makes finding an active Levi&apos;s clothing coupon code especially worthwhile.
                </p>
                <p>
                  Levi&apos;s clothing discount codes are available on their own website and through platforms like Myntra, Amazon, and Flipkart. End of season sales and Levi&apos;s own promotional events are the best times to apply a clothing coupon code for meaningful savings on their bestselling denim styles.
                </p>
              </div>

              {/* Allen Solly */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#0F2C59]" />
                  Allen Solly Coupon Codes
                </h3>
                <p className="mb-2">
                  Allen Solly is a trusted name in smart casuals and office wear, offering a wide range of shirts, trousers, blazers, and accessories for both men and women. Their Friday Dressing philosophy has made them a workplace wardrobe favourite for professionals who want polished but comfortable work clothing.
                </p>
                <p>
                  Allen Solly clothing coupon codes are regularly available on Myntra, their own website, and during platform-wide sales. Given their broad appeal across age groups and office settings, their clothing discount codes are consistently in demand.
                </p>
              </div>

              {/* Van Heusen */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
                  Van Heusen Coupon Codes
                </h3>
                <p className="mb-2">
                  Van Heusen is one of the most recognised premium workwear brands, offering formal shirts, trousers, suits, and accessories built for professional settings. Their clothing is known for quality fabric, sharp fits, and long-lasting construction — making them a go-to for building a reliable office wardrobe.
                </p>
                <p>
                  Van Heusen accessories promo codes and clothing coupon codes are most active during festive seasons and major platform sales on Myntra and Amazon. Stocking up on Van Heusen workwear during an active sale with a clothing discount code on hand is one of the smartest ways to build a professional wardrobe affordably.
                </p>
              </div>

              {/* FabIndia */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#8B0000]" />
                  FabIndia Coupon Codes
                </h3>
                <p className="mb-2">
                  FabIndia is a beloved destination for ethnic clothing, handcrafted fabrics, and traditional Indian wear with a contemporary sensibility. Their range spans kurtas, sarees, salwar suits, ethnic accessories, and home textiles — all crafted with a focus on natural materials and artisan craftsmanship.
                </p>
                <p>
                  FabIndia clothing coupon codes are especially popular during festive seasons when demand for ethnic wear peaks. Their accessories promo codes also extend to jewellery, stoles, and handcrafted bags, making it easy to put together a complete ethnic look for less.
                </p>
              </div>

              {/* Amazon */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#FF9900]" />
                  Amazon Clothing &amp; Accessories Coupon Codes
                </h3>
                <p className="mb-2">
                  Amazon&apos;s clothing and accessories store carries an enormous range — from everyday basics and branded apparel to ethnic wear, Gen Z streetwear, and premium accessories. Amazon clothing coupon codes are among the most versatile, often applying across multiple clothing categories in a single order.
                </p>
                <p>
                  During Amazon&apos;s Great Indian Festival and Prime Day, clothing discount codes on Amazon bring prices down sharply across branded clothing, footwear, and accessories. Amazon also runs daily deals on clothing that pair well with any active accessories promo code for additional savings.
                </p>
              </div>

              {/* Flipkart */}
              <div className="p-5 rounded-2xl border border-[#E8E8F0] bg-[#F8F8FF]">
                <h3 className="text-base font-extrabold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#2874F0]" />
                  Flipkart Clothing &amp; Accessories Coupon Codes
                </h3>
                <p className="mb-2">
                  Flipkart&apos;s fashion and accessories category is extensive, covering everything from workwear and ethnic clothing to casualwear, Gen Z styles, and accessories like bags, wallets, and watches. Flipkart clothing coupon codes are widely available and deliver some of the best savings during their Big Billion Days sale.
                </p>
                <p>
                  Flipkart also carries a strong range of budget-friendly clothing options alongside premium brands, making their clothing discount codes useful for shoppers across all budget levels.
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
              How to Use a Clothing Coupon Code
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Applying a clothing discount code at checkout is quick and easy. Here is how it works:
              </p>
              
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find your code", desc: "Browse CouponsCrew and click the clothing coupon code for your brand" },
                  { step: "2", title: "Copy the code", desc: "It copies automatically to your clipboard" },
                  { step: "3", title: "Visit the store", desc: "Head to Myntra, AJIO, Levi's, or whichever platform you are shopping" },
                  { step: "4", title: "Add items to cart", desc: "Shop as usual and proceed to checkout" },
                  { step: "5", title: "Enter the promo code", desc: "Look for \"Apply Coupon\" or \"Enter Promo Code\" at checkout" },
                  { step: "6", title: "Apply and save", desc: "Paste your accessories promo code and confirm the discount" },
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
                  <strong>Pro tip:</strong> Always check whether the clothing coupon code applies to the specific category you are buying — some codes are valid only on formals, ethnic wear, or accessories and may exclude other clothing types.
                </p>
              </div>
            </div>
          </div>

          {/* ARTICLE BLOCK 5: TYPES OF DEALS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#3B82F6] rounded-full block"></span>
              <span className="text-xs font-black text-[#3B82F6] uppercase tracking-widest">Offer Types</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Types of Clothing &amp; Accessories Deals You Will Find Here
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Clothing discount codes and accessories promo codes come in several formats:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Percentage off codes</strong> – Save 10%, 20%, or more on clothing and accessories orders</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flat discount codes</strong> – Fixed savings when your cart crosses a minimum order value</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>First-order codes</strong> – Exclusive clothing coupon codes for new platform users</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>App-exclusive codes</strong> – Extra savings available only through the brand or platform app</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bank cashback offers</strong> – Earn additional savings when paying with select cards</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bundle deals</strong> – Save more when buying clothing sets or accessory combos</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Clearance codes</strong> – End of season clothing discount codes on outgoing styles</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 6: BEST TIMES TO USE */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#10B981] rounded-full block"></span>
              <span className="text-xs font-black text-[#10B981] uppercase tracking-widest">Sale Calendar</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Best Times to Use Clothing Coupon Codes
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Timing your clothing purchases around sale events maximises your savings. These are the key windows to watch:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Myntra EORS (End of Reason Sale)</strong> – Bi-annual event with the deepest clothing discount codes of the year</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Amazon Great Indian Festival</strong> – Strong clothing and accessories promo codes across all brands</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Flipkart Big Billion Days</strong> – Wide clothing deals across casual, formal, and ethnic categories</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Festive Season (Oct–Nov)</strong> – Diwali and surrounding weeks drive ethnic wear and accessories promo codes across all platforms</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Back to College Season (July–Aug)</strong> – Peak time for Gen Z fashion deals and streetwear discount codes</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>End of Season Sales (Jan &amp; July)</strong> – Best time for clearance clothing discount codes on previous season styles</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Valentine&apos;s Day</strong> – Strong gifting season for accessories promo codes on jewellery, bags, and watches</p>
                </li>
              </ul>
              <p className="pt-2 italic text-[#1A1A2E] font-medium">
                Bookmark this page and check back before every clothing purchase — new codes are added every day.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 7: SAVING TIPS */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
              <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Pro Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Clothing &amp; Accessories Shopping Tips to Save More
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              A good clothing coupon code is just one part of saving smart. These tips help you get even more value from your clothing budget:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Buy workwear in bulk during sales</strong> – Stock up on office staples like Allen Solly shirts or Van Heusen trousers during EORS or festive sales</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check size guides carefully</strong> – Returns on clothing can be hassle-prone; getting the right size the first time saves time and potential restocking fees</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Stack codes with cashback</strong> – Combine a clothing discount code with a bank or wallet cashback offer where platforms allow it</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Follow Gen Z trends smartly</strong> – Trend-driven pieces go on deep clearance quickly; wait for end-of-season sales for the best accessories promo codes on statement styles</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Compare across platforms</strong> – The same Levi&apos;s or FabIndia piece may be priced differently on Myntra versus Amazon on any given day</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use wish lists</strong> – Add high-value clothing items to your wish list and wait for an active clothing coupon code before buying</p>
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
                  q: "Are the clothing coupon codes on CouponsCrew verified?", 
                  a: "Yes. Every clothing discount code and accessories promo code listed on CouponsCrew is checked before going live. Expired codes are removed promptly so you are never wasting time at checkout." 
                },
                { 
                  q: "Can I use clothing coupon codes on ethnic wear like FabIndia?", 
                  a: "Yes. CouponsCrew lists clothing coupon codes specifically for ethnic wear brands like FabIndia. These are especially active during festive seasons when ethnic clothing demand is highest." 
                },
                { 
                  q: "Do accessories promo codes work on bags, wallets, and jewellery?", 
                  a: "Yes. Many clothing discount codes extend to accessories categories including bags, belts, wallets, sunglasses, and jewellery. Check the terms of each code for specific inclusions." 
                },
                { 
                  q: "Are there clothing coupon codes for Gen Z fashion brands?", 
                  a: "Yes. Platforms like Myntra, AJIO, and Flipkart carry strong Gen Z fashion selections and regularly offer clothing discount codes on trending styles, streetwear, and youth-focused brands." 
                },
                { 
                  q: "How often are clothing coupon codes updated?", 
                  a: "Our team updates clothing and accessories deals every day. During major events like Myntra EORS or Flipkart Big Billion Days, updates happen multiple times a day to keep codes current." 
                },
                { 
                  q: "Which brand has the best clothing coupon codes right now?", 
                  a: "Myntra and AJIO consistently have the most active clothing discount codes across the widest range of styles. Levi's and Van Heusen lead for branded workwear deals. Check CouponsCrew daily for the latest across all eight brands." 
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
              Start Saving on Clothing &amp; Accessories Today
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Your wardrobe should not cost a fortune. With CouponsCrew, the latest clothing coupon codes, clothing discount codes, and accessories promo codes from Myntra, AJIO, Levi&apos;s, Allen Solly, Van Heusen, FabIndia, Amazon, and Flipkart are always within reach.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Bookmark this page, check back often, and make every clothing purchase count.
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
            <p className="text-xs text-[#4A4A6A] mb-4">Active apparel &amp; accessory codes verified daily.</p>
            <div className="space-y-2">
              {[
                { brand: "Myntra", tag: "EORS & Gen Z Trends" },
                { brand: "AJIO", tag: "Big Bold Sale & Indie" },
                { brand: "Levi's", tag: "Denim & Casuals" },
                { brand: "Allen Solly", tag: "Workwear & Formals" },
                { brand: "Van Heusen", tag: "Premium Suits & Shirts" },
                { brand: "FabIndia", tag: "Ethnic Wear & Crafts" },
                { brand: "Amazon", tag: "Basics & Daily Deals" },
                { brand: "Flipkart", tag: "Big Billion Days" }
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
                  Percentage off, flat discounts, first-order offers, and app-exclusive promo codes.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  Stackable Savings
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Combine promo codes with bank cashback, wallet offers, and clearance discounts.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Buyer Protection */}
          <div className="bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Zero Risk</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Official Brand Checkout</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Copy your verified coupon here and apply directly on the merchant&apos;s official store or mobile app at checkout.
            </p>
          </div>

        </div>

      </div>
    </section>


      <Footer />
    </div>
  );
}
