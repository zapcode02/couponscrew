'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Store, ArrowRight, Users, Activity,
  CheckCircle, Zap, Plus, Minus, HelpCircle, MessageCircle,
  ArrowUpRight, Clock, ChevronLeft, ChevronRight,
  Calendar, Flame, Shirt, Flag, Gift, Palette, Bookmark,
  Sparkle,
} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroSlides = [
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783239479/Minimalist_qa77z6.webp', alt: 'Minimalist Deals', href: 'https://amzn.to/4oRAEV3' },
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783239172/perffy_kh9jh3.webp', alt: 'Pepperfry Deals', href: 'https://track.vcommission.com/click?campaign_id=10194&pub_id=130349' },
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783239589/desidiya-moon_n01ghx.webp', alt: 'Desidiya Moon Deals', href: 'https://amzn.to/4bdFyGa' },
];

const rightSlides = [
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783239996/delmo_wnabi8.webp', alt: 'DEELMO Deals', href: 'https://amzn.to/3R7tzTR' },
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783239996/acnos_ctezij.webp', alt: 'Acnos Deals', href: 'https://amzn.to/4gbffUx' },
  { src: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783240053/pulgo_q20hdz.webp', alt: 'PulGos Deals', href: 'https://amzn.to/4uUuG7b' },
];

const productCategoryCards = [
  { display: 'Exercise & Fitness',     img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232570/exercise-fitness_whqz7u.webp',   href: '/stores/categories/exercise-and-fitness' },
  { display: 'Home & Kitchen',         img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/home-kitchen_wtn75z.webp',        href: '/stores/categories/home-and-kitchen' },
  { display: 'Clothing & Accessories', img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/clothing-accessories_jassli.webp', href: '/stores/categories/clothing-and-accessories' },
  { display: 'Beauty',                 img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/beauty_akkpbg.webp',              href: '/stores/categories/beauty' },
];

const featuredProducts = [
  { id: 'pulgos', name: "PulGos 15-in-1 Pushup Board", img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162810/81RW0nGbEZL._SL1500__u4abvp.jpg', price: 399, mrp: 999, discount: 60, store: 'Amazon', url: 'https://amzn.to/4uUuG7b', slug: '/products/pulgos-15-in-1-pushup-board' },
  { id: 'desidiya', name: "Desidiya Moon Crystal Night Light", img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162551/61XWYda0HoL._SL1500__klyexw.jpg', price: 197, mrp: 1999, discount: 90, store: 'Amazon', url: 'https://amzn.to/4bdFyGa', slug: '/products/desidiya-moon-crystal-night-light' },
  { id: 'deelmo', name: "DEELMO Men's Mandarin Collar Kurta", img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/71Qhqwnx4JL._SY741__ljgmwm.jpg', price: 479, mrp: 2199, discount: 78, store: 'Amazon', url: 'https://amzn.to/3R7tzTR', slug: '/products/deelmo-mens-mandarin-collar-kurta' },
  { id: 'acnos', name: "Acnos Bangle Analog Watch Pack of 2", img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162305/41oui_xq1PL_zndlwz.jpg', price: 299, mrp: 1999, discount: 85, store: 'Amazon', url: 'https://amzn.to/4gbffUx', slug: '/products/acnos-bangle-watch-pack-of-2' },
  { id: 'minimalist', name: "Minimalist Anti-Pigmentation Kit", img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162150/51VX_QeZjRL._SY450__mhxhvl.jpg', price: 1147, mrp: 1299, discount: 12, store: 'Amazon', url: 'https://amzn.to/4oRAEV3', slug: '/products/minimalist-anti-pigmentation-kit' },
];

const blogPosts = [
  { title: 'How to Save Money While Shopping Online in India', date: 'June 20, 2024', read: '5 Min Read', img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/home-kitchen_wtn75z.webp', slug: '/blog/how-to-save-money-shopping-online-india' },
  { title: 'Amazon Great Freedom Sale 2024: Best Deals You Should Not Miss!', date: 'June 18, 2024', read: '4 Min Read', img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232570/exercise-fitness_whqz7u.webp', slug: '/blog' },
  { title: 'Top 10 Cashback Apps to Save More Money', date: 'June 15, 2024', read: '6 Min Read', img: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1783232571/fashion_wlzeaq.webp', slug: '/blog' },
];

const saleEvents = [
  { icon: <Flame className="w-5 h-5 text-orange-500" />, title: "Flipkart Big Billion Days & Amazon Great Indian Festival", timeline: "October", description: "The two biggest platforms run their flagship sales at the same time every October. Set your alarm - the best electronics and smartphone deals sell out in the first few hours. Grab a discount code before your cart fills up.", tag: "Deepest Discounts", bgColor: "bg-orange-50/60 border-orange-100" },
  { icon: <Shirt className="w-5 h-5 text-pink-500" />, title: "Myntra End of Reason Sale (EORS)", timeline: "June & December", description: "Twice a year, Myntra clears warehouse stock with genuine markdowns. The app-exclusive coupons stack on top. June and December. Both are worth showing up for.", tag: "Bi-Annual Fashion", bgColor: "bg-pink-50/60 border-pink-100" },
  { icon: <Sparkle className="w-5 h-5 text-purple-500" />, title: "Nykaa Pink Friday Sale", timeline: "November", description: "Nykaa&apos;s biggest sale of the year, every November. Skincare, haircare, and makeup hit their lowest listed prices. One week. Stock moves fast.", tag: "Beauty & Wellness", bgColor: "bg-purple-50/60 border-purple-100" },
  { icon: <Flag className="w-5 h-5 text-blue-500" />, title: "Republic Day & Independence Day Sales", timeline: "January 26 & August 15", description: "Reliable sale windows every January and August. Amazon, Flipkart, Ajio, and Tata CliQ all run platform-wide promos. Good timing for appliances and electronics.", tag: "National Events", bgColor: "bg-blue-50/60 border-blue-100" },
  { icon: <Gift className="w-5 h-5 text-red-500" />, title: "Diwali & Peak Festive Season", timeline: "October – November", description: "The widest category coverage of the year. Home decor, ethnic wear, gifting, and more — every major platform runs concurrent promos. Stack codes early.", tag: "Mega Festival", bgColor: "bg-red-50/60 border-red-100" },
  { icon: <Palette className="w-5 h-5 text-emerald-500" />, title: "Holi Sales", timeline: "March", description: "A growing sale window in March — spring fashion and beauty get the most action. Most people miss it because it&apos;s not as loud as the October events.", tag: "Spring Window", bgColor: "bg-emerald-50/60 border-emerald-100" },
];

const faqData = [
  { q: "How do I find coupons for a specific store on Couponscrew?", a: "Type the store name in the search bar at the top — Amazon, Zomato, Myntra, Flipkart, or any of the 500+ brands we track. You'll land directly on that store's page with every active code listed." },
  { q: "What is the difference between a coupon code and a deal on Couponscrew?", a: "A coupon code is a string like FLAT500 or SAVE20 that you type at checkout. A deal is a pre-applied discount — no code needed, just click through. Every card on Couponscrew tells you clearly which type it is before you use it." },
  { q: "Which brands have the best coupons on Couponscrew right now?", a: "Amazon, Flipkart, Myntra, Zomato, Swiggy, MakeMyTrip, Nykaa, Hostinger, and BigBasket consistently have the most active codes on Couponscrew." },
  { q: "Can I use Couponscrew coupons on mobile apps?", a: "Most codes work on both desktop and mobile. Some brands — Zomato, Myntra, and Amazon especially — reserve their best discounts for app users only. Every deal card on Couponscrew marks app-only codes clearly." },
  { q: "Which category has the most deals on Couponscrew right now?", a: "Fashion and Electronics have the most deals at any given time, followed by Food & Grocery and Travel." },
  { q: "How do I stack a coupon code with a bank card offer?", a: "Apply the coupon code at checkout first, then select your bank card as the payment method. HDFC, ICICI, SBI, Axis, and Kotak all run brand-specific cashback offers on top of listed discounts." },
];



// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Hero sliders
  const [heroSlide, setHeroSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(0);

  const toggleAccordion = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // Left slider auto-play (4s)
  useEffect(() => {
    const t = setInterval(() => setHeroSlide(p => (p + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Right slider auto-play (5s)
  useEffect(() => {
    const t = setInterval(() => setRightSlide(p => (p + 1) % rightSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prevSlide = () => setHeroSlide(p => (p - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setHeroSlide(p => (p + 1) % heroSlides.length);
  const prevRightSlide = () => setRightSlide(p => (p - 1 + rightSlides.length) % rightSlides.length);
  const nextRightSlide = () => setRightSlide(p => (p + 1) % rightSlides.length);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onCategorySelect={() => {}} />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4 items-stretch">

            {/* Left slider — 70% (desktop only) */}
            <div className="hidden lg:block relative lg:w-[70%] shrink-0 rounded-2xl overflow-hidden h-[420px] bg-gray-100">
              {heroSlides.map((slide, i) => (
                <a
                  key={i}
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className={`absolute inset-0 block transition-opacity duration-700 ${i === heroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <NextImage
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1024px) 0px, 70vw"
                    priority={i === 0}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}

              {/* Arrows */}
              <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#1A1A2E] p-2 rounded-full shadow-md transition">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#1A1A2E] p-2 rounded-full shadow-md transition">
                <ChevronRight size={20} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setHeroSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2 rounded-full transition-all ${i === heroSlide ? 'w-6 bg-[#FF5722]' : 'w-2 bg-white/60'}`} />
                ))}
              </div>

            </div>

            {/* Right slider — full-width on mobile, 30% on desktop */}
            <div className="block w-full lg:w-[30%] shrink-0 relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[420px]">
              {rightSlides.map((slide, i) => (
                <a
                  key={i}
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className={`absolute inset-0 block transition-opacity duration-700 ${i === rightSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <NextImage
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    priority={i === 0}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}
              <button onClick={prevRightSlide} aria-label="Previous slide" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#1A1A2E] p-2 rounded-full shadow-md transition">
                <ChevronLeft size={16} />
              </button>
              <button onClick={nextRightSlide} aria-label="Next slide" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#1A1A2E] p-2 rounded-full shadow-md transition">
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {rightSlides.map((_, i) => (
                  <button key={i} onClick={() => setRightSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === rightSlide ? 'w-5 bg-[#FF5722]' : 'w-1.5 bg-white/60'}`} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, number: '10,000+', label: 'Coupons Verified', sub: 'Tested before they go live', iconCol: 'text-[#5B4FBE]' },
                { icon: Store, number: '500+', label: 'Partner Brands', sub: 'From Amazon to Zomato', iconCol: 'text-amber-500' },
                { icon: Activity, number: '92.4%', label: 'Coupon Success Rate', sub: 'Codes that actually work', iconCol: 'text-emerald-500' },
                { icon: Users, number: '50,000+', label: 'Happy Users', sub: 'Trust Our Platform', iconCol: 'text-sky-500' },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="bg-[#F0EEFF] p-3.5 rounded-full group-hover:scale-105 transition-all">
                    <stat.icon className={`w-6 h-6 ${stat.iconCol}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A2E]">{stat.number}</h3>
                    <p className="text-sm font-semibold text-[#1A1A2E]">{stat.label}</p>
                    <p className="text-xs text-gray-400">{stat.sub}</p>
                  </div>
                  {idx < 3 && <div className="hidden lg:block h-10 w-px bg-[#E8E8F0] ml-auto" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10 border-b border-[#E8E8F0]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-black text-[#1A1A2E]">Amazon Deals by Category</h2>
        <p className="text-xs text-gray-500 font-medium mt-1">Explore top verified Amazon discounts across all departments</p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            const container = document.getElementById('amazon-categories-slider');
            if (container) container.scrollBy({ left: -380, behavior: 'smooth' });
          }}
          className="w-9 h-9 rounded-xl border border-[#E8E8F0] flex items-center justify-center text-gray-600 hover:bg-[#5B4FBE] hover:text-white hover:border-[#5B4FBE] transition-all shadow-sm"
          aria-label="Previous categories"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => {
            const container = document.getElementById('amazon-categories-slider');
            if (container) container.scrollBy({ left: 380, behavior: 'smooth' });
          }}
          className="w-9 h-9 rounded-xl border border-[#E8E8F0] flex items-center justify-center text-gray-600 hover:bg-[#5B4FBE] hover:text-white hover:border-[#5B4FBE] transition-all shadow-sm"
          aria-label="Next categories"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>

    {/* Horizontal Scroll Slider - 3 Cards View */}
    <div 
      id="amazon-categories-slider"
      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pt-1 -mx-2 px-2"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {[
        { name: "Digital Music", href: "https://www.amazon.com/s?k=Digital+Music&crid=2NIFBXLL5Z1A3&sprefix=%2Caps%2C255&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/digital-music_sfq4s2.webp" },
        { name: "Electronics", href: "https://www.amazon.com/s?k=Electronics&crid=21IFEFQYKAM59&sprefix=digital+music%2Caps%2C308&ref=nb_sb_noss_1", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256137/electronics_jfn4db.webp" },
        { name: "Girls' Fashion", href: "https://www.amazon.com/s?k=Girls%27+Fashion&crid=XX07RQNM2V6L&sprefix=%2Caps%2C299&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/girls-fashion_us71ay.webp" },
        { name: "Health & Household", href: "https://www.amazon.com/s?k=Home+%26+Kitchen&crid=1OA6Y08ZIYG6Z&sprefix=home+%26+kitche%2Caps%2C315&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256134/health-households_e716tz.webp" },
        { name: "Home & Kitchen", href: "https://www.amazon.com/s?k=Home+%26+Kitchen&crid=1OA6Y08ZIYG6Z&sprefix=home+%26+kitche%2Caps%2C315&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/home-kitchen_p8ntrt.webp" },
        { name: "Industrial & Scientific", href: "https://www.amazon.com/s?k=Industrial+%26+Scientific&crid=313VQV9YAJTJ5&sprefix=%2Caps%2C297&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/industries-scientific_ckravz.webp" },
        { name: "Kindle Store", href: "https://www.amazon.com/s?k=Kindle+Store&crid=TOGVXR58FT4D&sprefix=%2Caps%2C285&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/kindle-store_alz8bq.webp" },
        { name: "Luggage", href: "https://www.amazon.com/s?k=Luggage&crid=20S9KCDUJCXOW&sprefix=%2Caps%2C308&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256133/luggage_uxj786.webp" },
        { name: "Men's Fashion", href: "https://www.amazon.com/s?k=Men%27s+Fashion&crid=32HY571UHUFNA&sprefix=luggage%2Caps%2C332&ref=nb_sb_noss_1", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/mens-fashion_afvzqj.webp" },
        { name: "Movies & TV", href: "https://www.amazon.com/s?k=Movies+%26+TV&crid=10NKB4YZZDE9O&sprefix=%2Caps%2C293&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/movies-tv_bvqvhx.webp" },
        { name: "Music, CDs & Vinyl", href: "https://www.amazon.com/s?k=Music%2C+CDs+%26+Vinyl&crid=3PGC2A6OF48YT&sprefix=%2Caps%2C292&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/music-cds-vinyl_ml12ca.webp" },
        { name: "Pet Supplies", href: "https://www.amazon.com/s?k=Pet+Supplies&crid=2FDO7PR0RR4EE&sprefix=%2Caps%2C307&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/pet-supplies_gjwhfl.webp" },
        { name: "Prime Video", href: "https://www.primevideo.com/region/eu/", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/prime-video_rh68ok.webp" },
        { name: "Software", href: "https://www.amazon.com/s?k=Software&crid=2UANDI5I6UN7A&sprefix=%2Caps%2C314&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/software_z7qnmh.webp" },
        { name: "Sports & Outdoors", href: "https://www.amazon.com/s?k=Sports+%26+Outdoors&crid=31W9FSA2B00K0&sprefix=%2Caps%2C310&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256132/sports-outdoors_glpxod.webp" },
        { name: "Tools & Home Improvement", href: "https://www.amazon.com/s?k=Tools+%26+Home+Improvement&crid=3G0COOI6O799D&sprefix=%2Caps%2C291&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256128/tools-home-improvements_pyjbga.webp" },
        { name: "Toys & Games", href: "https://www.amazon.com/s?k=Toys+%26+Games&crid=3N8EHDC3584CS&sprefix=%2Caps%2C292&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256128/toys-games_aatlz3.webp" },
        { name: "Video Games", href: "https://www.amazon.com/s?k=Video+Games&crid=PAOA9FXMRRMR&sprefix=%2Caps%2C304&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256131/vidoeo-games_zynphm.webp" },
        { name: "Women's Fashion", href: "https://www.amazon.com/s?k=Women%27s+Fashion&crid=OA50VIVKRLY7&sprefix=%2Caps%2C322&ref=nb_sb_noss_2", img: "https://res.cloudinary.com/dqjlffxja/image/upload/v1786256127/womens-fashion_bsvzwa.webp" }
      ].map((card, i) => (
        <a 
          key={i} 
          href={card.href} 
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-[calc(33.333%-16px)] min-w-[340px] bg-white border border-[#E8E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#FF9900] transition-all group/card block flex flex-col"
        >
          <div className="w-full overflow-hidden bg-gray-50 relative">
            <NextImage
              src={card.img}
              alt={card.name}
              width={600}
              height={332}
              sizes="340px"
              loading="lazy"
              className="w-full h-auto object-cover group-hover/card:scale-105 transition-transform duration-500 block"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow justify-between bg-white border-t border-[#f0f0f0]">
            <div className="font-black text-base text-[#1A1A2E] line-clamp-1 group-hover/card:text-[#FF9900] transition-colors">
              {card.name}
            </div>
            <div className="mt-3 w-full bg-[#FF9900] hover:bg-[#E68A00] text-black font-extrabold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm group-hover/card:shadow-md">
              <span>View Deals</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </a>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-8 flex justify-center">
      <Link
        href="/stores/amazon-coupon-code"
        className="inline-flex items-center gap-2 bg-[#131921] hover:bg-[#232F3E] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg border border-[#FF9900]/30"
      >
        <span>Browse All Amazon Categories</span>
        <ArrowRight size={16} className="text-[#FF9900]" />
      </Link>
    </div>
  </div>
</section>

        {/* ── PRODUCT CATEGORIES ────────────────────────────────────────── */}
        <section className="bg-white py-10 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6">
              <h2 className="text-xl font-black text-[#1A1A2E]">Product Categories</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {productCategoryCards.map((card, i) => (
                <Link key={i} href={card.href} className="bg-white border border-[#E8E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#5B4FBE] transition-all group/card block">
                  <div className="aspect-square overflow-hidden relative">
                    <NextImage
                      src={card.img}
                      alt={card.display}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-black text-sm text-[#1A1A2E]">{card.display}</div>
                    <div className="mt-1.5 text-[#5B4FBE] text-xs font-bold flex items-center gap-1 group-hover/card:gap-2 transition-all">
                      Explore Category <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/stores/categories"
                className="inline-flex items-center gap-2 bg-[#5B4FBE] hover:bg-[#463AA3] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
              >
                Browse Product Categories <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
        <section className="bg-[#F8F8FF] py-10 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-2 sm:px-6">
            <div className="flex items-center justify-between mb-6 px-2 sm:px-0">
              <div>
                <h2 className="text-xl font-black text-[#1A1A2E]">Featured Products</h2>
                <p className="text-xs text-gray-400 mt-0.5">Hand-picked deals at the lowest prices</p>
              </div>
              <Link href="/products" className="text-[#FF5722] text-sm font-semibold hover:underline flex items-center gap-1">View All Products <ChevronRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4">
              {featuredProducts.map((p) => (
                <div key={p.id} className="w-full lg:w-52 bg-white border border-[#E8E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#5B4FBE] transition-all group/card flex flex-col">
                  <Link href={p.slug} className="relative block aspect-square overflow-hidden bg-[#F8F8FF]">
                    <div className="absolute top-2 left-2 z-10 bg-[#FF5722] text-white text-[10px] font-black px-2 py-0.5 rounded-md">{p.discount}% OFF</div>
                    <NextImage
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 208px"
                      loading="lazy"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="p-3 flex flex-col flex-1 gap-2">
                    <Link href={p.slug}><p className="text-xs font-bold text-[#1A1A2E] leading-snug line-clamp-2 hover:text-[#5B4FBE] transition-colors">{p.name}</p></Link>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-black text-[#1A1A2E] text-sm">₹{p.price}</span>
                      <span className="text-xs text-gray-400 line-through">₹{p.mrp}</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-bold text-[#4A4A6A] bg-gray-100 px-2 py-0.5 rounded-full">{p.store}</span>
                      <a href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg transition">Buy Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LATEST FROM OUR BLOG (hidden) ────────────────────────────── */}
        <section className="bg-white py-10 border-b border-[#E8E8F0] hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-[#1A1A2E]">Latest From Our Blog</h2>
              <Link href="/blog" className="text-[#FF5722] text-sm font-semibold hover:underline flex items-center gap-1">View All Posts <ChevronRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <Link key={i} href={post.slug} className="group bg-white border border-[#E8E8F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#5B4FBE] transition-all flex flex-col">
                  <div className="h-44 overflow-hidden relative">
                    <NextImage
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 gap-2">
                    <h3 className="font-bold text-sm text-[#1A1A2E] leading-snug group-hover:text-[#5B4FBE] transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-[11px] text-gray-400 mt-auto">{post.date} · {post.read}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            UNTOUCHED SECTIONS BELOW — DO NOT MODIFY
        ══════════════════════════════════════════════════════════════ */}

        {/* Who is Couponscrew? */}
        <section className="bg-white py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-[#F8F8FF] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
                  <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783266413/about-couponsccrew_z0mapx.png" alt="Smart Shopping with Verified Coupons" width={600} height={600} sizes="(max-width: 1024px) 90vw, 40vw" loading="lazy" className="w-full h-auto object-contain" />
                 
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F0EEFF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#F4FBF7] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700" />
               
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]"><Zap className="w-3.5 h-3.5 fill-current" /> Core Identity</div>
                  <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A2E] leading-[1.1]">Who is <span className="text-[#5B4FBE]">Couponscrew?</span></h2>
                  <p className="text-lg text-[#4A4A6A] leading-relaxed font-medium">Couponscrew is a verified coupon and deals platform - built for shoppers who are tired of copy-pasting dead codes at checkout.</p>
                </div>
                <div className="space-y-6 text-[#4A4A6A] text-base leading-relaxed">
                  <p>Most coupon sites list every code they can find — expired, unverified, or just dead — because volume looks impressive. We don&apos;t do that. We track, test, and list active codes from <strong>500+ brands</strong> across every major shopping category. If it&apos;s on Couponscrew, it has been checked.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Ordering food on Zomato","Buying electronics on Amazon","Refreshing wardrobe on Myntra","Booking flights on MakeMyTrip"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#F8F8FF] p-3 rounded-xl border border-[#E8E8F0]">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                        <span className="text-sm font-bold text-[#1A1A2E]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p>Whether you&apos;re ordering food, buying electronics, or booking a trip - Couponscrew has a verified deal for it. Every promo code on this platform has been checked before it reaches you.</p>
                  <div className="bg-[#1A1A2E] rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700"><ShieldCheck size={180} /></div>
                    <h3 className="text-xl font-black mb-4 relative z-10">Zero Guesswork. Just Savings.</h3>
                    <p className="text-sm text-white/70 relative z-10 leading-relaxed mb-6">50,000 shoppers open Couponscrew before checkout. Not because we asked them to - because finding a dead code once is annoying.</p>
                    <div className="flex flex-wrap gap-6 relative z-10">
                      <div><p className="text-2xl font-black text-[#22C55E]">10,000+</p><p className="text-[10px] font-black uppercase tracking-widest text-white/40">Verified Coupons</p></div>
                      <div className="w-px h-10 bg-white/10" />
                      <div><p className="text-2xl font-black text-[#5B4FBE]">500+</p><p className="text-[10px] font-black uppercase tracking-widest text-white/40">Trusted Brands</p></div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/stores" className="inline-flex items-center gap-2 bg-[#5B4FBE] hover:bg-[#463AA3] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-[#5B4FBE]/25 group">
                      Start Saving Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Use Coupons Online */}
        <section className="bg-[#F8F8FF] py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E8F0]">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]"><Calendar className="w-3.5 h-3.5" /> Retail Intel</div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight">Best Time to Use Coupons Online</h2>
                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">Discounts are not random. Platforms run the deepest codes at predictable windows every year.</p>
              </div>
              <div className="bg-[#1A1A2E] text-white p-4 rounded-2xl shadow-md flex items-center gap-4 shrink-0 border border-white/10 md:max-w-xs">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0"><Bookmark className="w-5 h-5 fill-current" /></div>
                <div><p className="text-xs font-black uppercase tracking-wide text-[#22C55E]">Pro Saver Strategy</p><p className="text-[11px] text-white/70 mt-0.5 leading-normal">Bookmark this. The best codes disappear within hours of these windows opening.</p></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleEvents.map((event, idx) => (
                <div key={idx} className={`bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs hover:shadow-md hover:border-[#5B4FBE] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`p-2.5 rounded-xl border ${event.bgColor} flex items-center justify-center shrink-0 shadow-xs`}>{event.icon}</div>
                      <span className="text-xs font-black uppercase tracking-widest bg-gray-100 text-[#4A4A6A] px-2.5 py-1 rounded-md">{event.tag}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1A1A2E] leading-snug group-hover:text-[#5B4FBE] transition-colors mb-2">{event.title}</h3>
                    <div className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-0.5 rounded-md mb-4"><Clock className="w-3.5 h-3.5" /> {event.timeline}</div>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">{event.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-dashed border-[#E8E8F0] flex items-center justify-between text-sm font-black uppercase tracking-wider text-[#1A1A2E]">
                    <span>Track Active Status</span>
                    <div className="w-7 h-7 bg-[#F8F8FF] group-hover:bg-[#5B4FBE] group-hover:text-white rounded-full flex items-center justify-center transition-all"><ArrowRight className="w-4 h-4" /></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#E8E8F0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2"><p className="text-xs font-bold text-[#4A4A6A]">We check these dates and start building code pools in advance. Bookmark this so you&apos;re not scrambling when they open.</p></div>
              <Link href="/stores" className="text-xs font-black text-[#5B4FBE] hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1">View Upcoming Sales <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </section>

      </main>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full border border-[#5B4FBE]/10 text-xs font-black uppercase tracking-widest text-[#5B4FBE]"><HelpCircle className="w-3.5 h-3.5" /> Support Center</div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A2E] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm text-[#4A4A6A] max-w-xl mx-auto leading-relaxed">The questions we get asked most. Answered directly - no filler.</p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className={`group border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-[#5B4FBE] bg-[#F8F8FF] shadow-sm' : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'}`}>
                <button onClick={() => toggleAccordion(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none">
                  <span className={`text-sm sm:text-base font-extrabold pr-4 transition-colors ${openIndex === index ? 'text-[#5B4FBE]' : 'text-[#1A1A2E]'}`}>{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#5B4FBE] text-white rotate-180' : 'bg-gray-100 text-[#4A4A6A]'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                    <div className="h-px w-full bg-[#E8E8F0] mb-4" />
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#1A1A2E] rounded-[2rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5B4FBE]/20 to-transparent pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-[#22C55E] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#22C55E]/20"><MessageCircle className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-lg font-black tracking-tight">Still have questions?</h3><p className="text-xs text-white/60 font-medium">We reply within 2 hours. Real person, no ticket queue.</p></div>
              </div>
              <Link href="/contact" className="bg-white text-[#1A1A2E] hover:bg-[#F0EEFF] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 group">
                Contact Support <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#FF5722] opacity-10 pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white opacity-5 pointer-events-none" />
        <div className="absolute top-8 left-12 grid grid-cols-5 gap-2.5 pointer-events-none">
          {Array.from({ length: 15 }).map((_, idx) => <div key={idx} className="w-1 h-1 rounded-full bg-white opacity-20" />)}
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-5xl select-none inline-block" role="img" aria-label="Target">🎯</span>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Your Smartest Shopping</h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF5722]">Habit Starts Here</p>
          </div>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">50,000 people already check Couponscrew before they pay. Bookmark this page. Open it before you shop.</p>
          <div className="flex justify-center gap-4 flex-wrap pt-6">
            <Link href="/products" className="bg-[#FF5722] hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/35 flex items-center gap-2">
              Start saving Smarter <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/stores" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">View All Brands</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
