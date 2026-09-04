'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight, ChevronUp,Lightbulb, CheckCircle2, Clock, ChevronDown, ShieldCheck, Tag, Percent,
  Sparkles, RefreshCw, Lock, HelpCircle,
  ShoppingBag, Heart, Dumbbell, Home, Shirt, Monitor, UtensilsCrossed, Plane,
  GraduationCap, Tv, Wallet, Globe, Activity, Trophy, Code, Gamepad2,
  Gem, Glasses, Armchair,
} from 'lucide-react';
import Navbar from '../../../../../src/components/Navbar';
import Footer from '../../../../../src/components/Footer';
import { STORES_DATA } from '../../../../../src/data/stores';

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

export default function EducationCategory() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsAlert, setNewsAlert] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categoryStores = useMemo(
    () => STORES_DATA.filter(s => s.categories.includes('Education')),
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
              <span className="text-[#5B4FBE] font-semibold">Education</span>
            </div>
            <h1 className="mt-4 font-bold text-5xl text-[#1A1A2E] leading-none tracking-tight">Education</h1>
             <p className="mt-3 max-w-md text-[#4A4A6A] text-base leading-relaxed">
              Browse the best education coupon codes and offers for August 2026. Save on online courses, certification programs, exam preparation, coding classes, language learning, skill development, and professional training with verified discounts, exclusive deals, cashback offers, and seasonal promotions.
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
                <div><div className="font-extrabold text-sm text-[#1A1A2E] leading-tight">Up to 30%</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Discount</div></div>
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
                src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788085983/education_emgxnm.webp"
                alt="Education"
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
                <h2 className="font-bold text-xl text-[#1A1A2E] leading-none">Education Stores ({categoryStores.length})</h2>
                <p className="text-xs text-[#4A4A6A] mt-1.5 font-medium">Verified deals linked directly to the platform.</p>
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
              <h3 className="font-extrabold text-[#1A1A2E] text-base mb-4 tracking-tight flex items-center justify-between">
                <span>Categories</span>
                <span className="text-[10px] font-bold bg-[#F8F8FF] text-[#4A4A6A] px-2 py-0.5 rounded-full border border-[#E8E8F0]">Filter</span>
              </h3>
              <div className="space-y-1.5">
                {ALL_CATEGORIES.map(c => {
                  const isActive = c.name === 'Education';
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
            { icon: ShieldCheck, bg: 'bg-[#F0EEFF]', color: 'text-[#5B4FBE]', title: '100% Verified Courses', desc: 'We verify all courses and offers' },
            { icon: Tag, bg: 'bg-[#FFF3F0]', color: 'text-[#FF5722]', title: 'Best Education Deals', desc: 'Get the biggest discounts' },
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
            Learning &amp; Upskilling Hub
          </span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Education Coupon Codes – Save on Courses, Coaching, and Online Learning
        </h1>
        <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Investing in education should not mean overpaying for it. Whether you are preparing for a competitive exam, upskilling for a career move, enrolling a child in a tutoring programme, or picking up a new skill through an online course, the platforms offering these services run discount codes, limited-time offers, and cashback promotions regularly — and most learners never think to look for them before paying.
          </p>
          <p>
            CouponsCrew tracks and verifies education coupon codes across online learning platforms, test prep services, coaching institutes, certification programmes, and skill-based courses daily. This page keeps you covered with tested education discount codes and promo codes that work at checkout — so you pay less for the same course or programme you were already planning to buy.
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
      Why Use Education Coupon Codes from CouponsCrew?
    </h2>
    <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
      <p>
        Education purchases are different from most other categories. You are not buying a product that can be returned or exchanged — once you enrol in a course or purchase a test series, that decision is made. That raises the stakes on getting the price right the first time.
      </p>
      <p>
        Education platforms also run some of the deepest discount codes in any online category. New user codes, launch offers on new courses, and seasonal enrolment drives can bring course prices down substantially. The problem is that these codes are scattered across platform emails, social media posts, and affiliate pages — and many of them expire before most learners even find them.
      </p>
      <p className="font-bold text-[#1A1A2E] pt-2">
        Here is what CouponsCrew does to solve that:
      </p>
      <ul className="space-y-3 pl-1 mt-2">
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Category-tagged codes</strong> — Every education coupon code is tagged by type: test prep, skill courses, school tutoring, certification, or language learning — so you find what applies to you quickly</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Verified before listing</strong> — Every code is tested before it goes live on this page</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Enrolment deadline tracking</strong> — Education codes often tie to course batch start dates or exam registration windows; time-sensitive codes are flagged clearly</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">Bank offer coverage</strong> — EMI offers and card-linked cashback codes on high-value course purchases are tracked alongside platform codes</span>
        </li>
        <li className="flex gap-2 items-start">
          <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0" aria-hidden="true" />
          <span><strong className="text-[#1A1A2E]">No account needed</strong> — Copy the code and apply it directly at enrolment</span>
        </li>
      </ul>
    </div>
  </div>

  {/* How to Use Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-4">
      How to Use an Education Coupon Code
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      The process is consistent across most online learning and coaching platforms:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 1</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Find your code</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Browse the education coupon codes on this page. Check whether the code is for the specific platform and course type you are enrolling in.</p>
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
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Head to the education platform the code is for. Find the course, test series, or programme you want to enrol in and proceed to checkout.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 4</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Reach the payment screen</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Look for the promo code or coupon field — on most education platforms this appears on the order summary or payment page before you confirm enrolment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 5</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Paste and apply</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Paste the education discount code and apply it. Your discounted price will reflect before you complete the payment.</p>
        </div>
      </div>
      <div className="border border-[#E8E8F0] bg-[#F8F8FC] p-4 rounded-2xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-wider">Step 6</span>
          <h3 className="font-bold text-[#1A1A2E] text-base mt-1 mb-2">Confirm enrolment</h3>
          <p className="text-sm text-[#4A4A6A] leading-relaxed">Choose your payment method. If a bank EMI or cashback offer applies, use the eligible card to stack that saving alongside the platform code.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl text-sm text-[#166534]">
      <strong className="font-bold">Pro tip:</strong> Education codes often tie to specific course batches, exam cycles, or enrolment windows. A code that works for one batch may not carry over to the next. Apply the code during the same session in which you found it — do not save it for a later date assuming it will still be valid.
    </div>
  </div>

  {/* Types of Deals Section */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Types of Education Deals You Will Find Here
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Education platforms run a wider range of offer structures than most categories. Here is what to expect:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">New user or first enrolment codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">The highest-value codes on most education platforms go to first-time learners. These are worth saving for your most expensive planned course rather than your first small purchase on a platform.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Percentage off codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A percentage discount on the course or programme fee. These are the most common type on online learning platforms and apply broadly across most course categories without heavy restrictions.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Flat discount codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">A fixed amount off when the enrolment fee crosses a minimum value. Common on test prep platforms and multi-subject packages where the base fee is higher.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Bank and card offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Cashback or instant discounts when paying with a specific credit or debit card. For high-value courses and coaching programmes, card-linked offers can add meaningful savings on top of a platform code.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">EMI offer codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that unlock zero-cost EMI or lower processing fees on education purchases above a threshold. Relevant for long-duration courses or certification programmes with fees that are more manageable spread over months.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Early bird codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Discounts for learners who enrol before a course batch opens or before an exam registration deadline. Early bird codes tend to deliver the deepest discounts on test prep and live coaching programmes.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Referral and bundle codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that apply when enrolling alongside a friend, or when purchasing a bundle of courses or subjects together. Bundle codes in particular are strong on test prep platforms where buying multiple subject modules together costs less than individual enrolment.</p>
      </div>
      <div className="p-4 rounded-2xl border border-[#E8E8F0]">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Free trial and demo codes</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Codes that unlock extended free access to a platform's content before you commit to a paid plan. Worth using before spending on a long-duration course you are not yet certain about.</p>
      </div>
    </div>
  </div>

  {/* Categories Breakdown */}
  <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
    <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
      Education by Category — Where to Find the Best Codes
    </h2>
    <p className="text-sm text-[#4A4A6A] mb-6">
      Education is a broad category covering very different types of learners and purchases. Codes work differently depending on what you are buying.
    </p>
    <div className="space-y-4">
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Competitive Exam Preparation</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Test prep is one of the most active segments for education coupon codes in India. Platforms covering government job exams, engineering and medical entrance tests, banking exams, and civil services all run aggressive discount cycles tied to exam notification dates and batch enrolment windows. Early bird codes appear consistently when new batches open, and bundle codes covering multiple subjects or mock test series are common. Checking this page when an exam notification drops — not weeks later — gives you access to the codes before they expire.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Online Skill Courses and Upskilling</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Platforms offering professional skill courses — coding, data analytics, digital marketing, design, finance, and others — run some of the most frequent discount cycles in the education category. New course launches almost always come with introductory codes. Platform-wide sale events tied to specific calendar dates bring codes across the full catalogue. If you have a course on your wish list, these windows are the right time to enrol.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">School and K-12 Tutoring</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Online tutoring platforms for school students run enrolment codes around the start of academic years, board exam preparation seasons, and summer learning programmes. Codes here are often tied to grade level or subject combinations rather than the platform as a whole — check that the code applies to your child's specific grade and subject before enrolment.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Language Learning</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">Language learning platforms run some of the most consistent long-term discount codes in education. Subscription-based language apps and live tutoring platforms both offer new user codes, and seasonal promotions appear regularly. If you are planning a long subscription, codes for annual plans tend to deliver better per-month savings than monthly plan codes.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Certification Programmes and Professional Courses</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">High-value certification programmes — technology certifications, project management, finance qualifications — attract EMI offer codes more than flat discounts given their fee structure. Bank card offers that unlock zero-cost EMI or lower processing fees are often the most impactful codes in this subcategory. Early bird codes also appear when new cohorts open.</p>
      </div>
      <div className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
        <h3 className="font-bold text-[#1A1A2E] text-base mb-1">Coding and Technology Learning for Kids</h3>
        <p className="text-sm text-[#4A4A6A] leading-relaxed">EdTech platforms focused on coding, robotics, and STEM learning for children run enrolment codes around school holidays and start-of-term periods. Summer holiday batch codes in particular tend to be strong — parents planning summer programmes are a key audience for these platforms and they price accordingly.</p>
      </div>
    </div>
  </div>
</div>

      {/* ARTICLE BLOCK 2: BEST TIMES TO USE */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#06B6D4] rounded-full block"></span>
          <span className="text-xs font-black text-[#06B6D4] uppercase tracking-widest">
            Enrolment Windows
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Best Times to Use Education Coupon Codes
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          Education does not follow a single retail-style sale calendar. Discount windows tie more to academic cycles and exam schedules than to festive seasons — though those matter too.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Exam notification windows",
              desc: "When a major competitive exam notification drops — for government jobs, engineering entrances, or civil services — test prep platforms immediately push enrolment codes to capture learners who are just starting their preparation. This is the highest-urgency window for test prep codes specifically.",
            },
            {
              title: "New batch launches",
              desc: "Coaching platforms open new live batches periodically, and early enrolment codes are the norm rather than the exception. Signing up in the first week of a batch opening almost always gives access to the best price.",
            },
            {
              title: "Academic year start (June–July)",
              desc: "The beginning of a new academic year drives enrolment across school tutoring platforms and skill course platforms targeting fresh graduates. This is one of the most active periods for education coupon codes across categories.",
            },
            {
              title: "Board exam preparation season",
              desc: "The months leading into board exams — roughly October through January — see a surge in test prep enrolment and a corresponding increase in discount codes from platforms competing for that cohort.",
            },
            {
              title: "End of financial year (February–March)",
              desc: "Many EdTech platforms push strong codes in February and March as they close out their financial year targets. This is a reliable window for codes on annual subscriptions and long-duration courses.",
            },
            {
              title: "Festive sales",
              desc: "Diwali and other major festive periods bring platform-wide education sale events similar to retail. These are not the primary discount window for education codes but they are consistent — worth checking if you have been waiting on a course purchase.",
            },
            {
              title: "Flash enrolment offers",
              desc: "Some platforms run time-limited offers tied to specific days or hours — similar to flash sales in retail. These are harder to plan around but can deliver the deepest discounts. Checking this page regularly during active sale periods catches these before they expire.",
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
            Check this page when exam notifications drop, when new batch dates are announced, and before committing to any course purchase — these are the three moments where education codes make the most difference.
          </p>
        </div>
      </div>

      {/* ARTICLE BLOCK 3: SAVING TIPS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">
            Smart Learner Tactics
          </span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Education Saving Tips
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          A coupon code covers one part of your total education spend. These habits make the full picture more cost-effective:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Enrol during batch opening week",
              desc: "Early bird codes on live coaching programmes are almost always available in the first week a new batch opens. Waiting until mid-batch is not just a scheduling disadvantage — it costs more.",
            },
            {
              title: "Buy annual plans over monthly where possible",
              desc: "On subscription-based learning platforms, annual plans with a code applied almost always work out cheaper per month than a discounted monthly plan. Calculate the per-month cost before choosing.",
            },
            {
              title: "Check bundle pricing before buying individual modules",
              desc: "Test prep and skill platforms frequently offer subject bundles at a lower combined price than individual module enrolments. A bundle code on top of already-bundled pricing is the strongest combination available on these platforms.",
            },
            {
              title: "Stack EMI offers on high-value courses",
              desc: "For certification programmes and long-duration courses with higher fees, an EMI offer code that removes processing fees alongside a platform discount code gives the best total cost outcome. Both apply independently on most platforms.",
            },
            {
              title: "Confirm what the course includes before applying a code",
              desc: "Education platforms vary in what is bundled with a course fee — live sessions, recorded content, doubt resolution, mock tests, and certificates may or may not be included at every price point. Confirm the full scope before applying a code and enrolling.",
            },
            {
              title: "Use free trials before committing to long subscriptions",
              desc: "Free trial or extended demo codes are worth using before enrolling in a long-duration programme you have not tried. A month of access tells you more about whether a platform works for you than any review.",
            },
            {
              title: "Check refund and cancellation policies before paying",
              desc: "Education purchases are not always refundable, particularly once course content has been accessed. Read the refund policy before completing enrolment — especially on high-value programmes.",
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
              q: "Do education coupon codes work on all courses on a platform?",
              a: "Not always. Some education discount codes are restricted to specific course categories, subjects, or batch types. Others apply platform-wide. The terms on each code listed here specify any restrictions — check before you enrol.",
            },
            {
              q: "Can I use an education coupon code with a bank EMI offer?",
              a: "On most education platforms, yes. A platform promo code and a bank EMI or cashback offer operate independently and can both apply on the same enrolment. This combination is worth pursuing on any high-value course or certification programme.",
            },
            {
              q: "How quickly do education coupon codes expire?",
              a: "It varies by platform and offer type. Early bird codes tied to batch opening windows can expire within days. Flash enrolment codes may last only hours. Standard platform codes tend to have longer validity. Time-sensitive codes are flagged clearly on this page — use them the day you find them.",
            },
            {
              q: "Why did my education coupon code not work at checkout?",
              a: "The most common reasons: the code has expired, the course or batch you are enrolling in is excluded, your order does not meet the minimum enrolment value, or the code is for new users only and you have enrolled on this platform before. Check the terms listed with the code before retrying.",
            },
            {
              q: "Are there education coupon codes for existing users?",
              a: "Yes. Existing user codes on education platforms appear around batch launches, festive periods, and annual renewal windows. They are smaller than new user codes but worth checking regularly — especially for annual plan renewals where a code applied at renewal time saves more in absolute terms than a smaller monthly discount.",
            },
            {
              q: "Do education coupon codes work on live coaching programmes?",
              a: "Yes, though live coaching codes are often early bird codes tied to batch opening windows rather than evergreen platform codes. They tend to have the highest absolute value of any education code type — enrolling early to access them is worth it.",
            },
            {
              q: "What is the best time to enrol in a test prep course for the lowest price?",
              a: "The first week of a new batch opening — when early bird codes are live — combined with an active platform code and a bank offer gives the lowest total enrolment cost. Exam notification windows are the second-best moment, as platforms push codes aggressively to capture newly registered candidates.",
            },
            {
              q: "Do coding or STEM platforms for kids offer coupon codes?",
              a: "Yes. These platforms run enrolment codes around school holidays — particularly summer breaks — and at the start of new academic terms. Summer holiday batch codes on children's coding platforms are among the most consistent in this subcategory.",
            },
            {
              q: "Are language learning subscription codes worth using on annual plans?",
              a: "Almost always yes. Annual plan codes on language learning platforms deliver a lower per-month cost than any monthly discount code. If you are serious about a language, committing to an annual plan with a code applied is the most cost-effective approach.",
            },
            {
              q: "Do education platforms offer refunds if I use a coupon code?",
              a: "Refund policies vary by platform and are independent of whether a coupon code was used. Most platforms have a refund window tied to course access — once content has been accessed, refunds may be partial or unavailable. Read the refund policy before enrolling, regardless of the price paid.",
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
          Start Saving on Every Course and Enrolment
        </h2>
        <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
          <p>
            Every course you enrol in, every test series you purchase, and every subscription you renew is an opportunity to pay less than the listed price. CouponsCrew keeps this page updated with the latest verified education coupon codes, education discount codes, and education promo codes across competitive exam prep, online courses, school tutoring, certification programmes, and skill-based learning.
          </p>
          <p className="text-white font-semibold text-base pt-2">
            Check back before every enrolment, bookmark this page, and make sure every learning investment goes further.
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
          Top Education Categories
        </h3>
        <p className="text-xs text-[#4A4A6A] mb-4">Active deals verified daily.</p>
        <div className="space-y-2">
          {[
            { brand: "Competitive Exam Prep", tag: "Test Series" },
            { brand: "Live Coaching", tag: "Early Bird Codes" },
            { brand: "Skill & Tech Courses", tag: "Certification Deals" },
            { brand: "School & K-12 Tutoring", tag: "Academic Year" },
            { brand: "Language Learning", tag: "Annual Discounts" },
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
          Pro Enrolment Strategy
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              Stack EMI Offers
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Combine promo codes with zero-cost bank EMI options on long-term certifications.
            </p>
          </div>
          <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              Batch Opening Week
            </div>
            <p className="text-[11px] text-[#4A4A6A] leading-normal">
              Enrol during week 1 of batch announcements to secure max early-bird discounts.
            </p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Buyer Protection */}
      <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-2xl p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-black uppercase tracking-wider">Direct Enrolment</span>
        </div>
        <h3 className="text-sm font-extrabold text-white leading-snug">Official Platform Checkout</h3>
        <p className="text-white/80 text-xs mt-2 leading-relaxed">
          Copy your verified code here and apply directly on the EdTech provider's official portal or mobile app at checkout.
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
