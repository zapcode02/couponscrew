'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import {
  LayoutGrid,
  Store,
  Tag,
  Landmark,
  Sparkles,
  ShoppingBag, AlertCircle, TrendingUp,
  MapPin,
  BookOpen,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Crown,
  RefreshCw,
  Gift,
  Plus,
  Minus,
  CheckCircle2,
  Mail,
  Flame,
  Star,
  ExternalLink,
  HelpCircle,
  Calendar,
  Clock,
  Shirt,
  Laptop,
  Sparkle,
  Home as HomeIcon,
  Gem,
  Smartphone,
  Tv,
  Plane,
  Utensils,
  MoreHorizontal
} from 'lucide-react';

// ============================================================================
// BRAND LOGOS COMPONENT
// ============================================================================
const BrandLogo = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'amazon':
      return (
        <div className="font-black text-xl tracking-tighter text-black flex items-center">
          amazon<span className="text-[#FF9900] text-lg font-bold">.in</span>
        </div>
      );
    case 'flipkart':
      return (
        <div className="font-extrabold text-xl text-[#2874F0] italic tracking-tight flex items-center gap-1">
          Flipkart <span className="bg-[#FFE500] text-[#2874F0] font-black text-[10px] px-1 rounded not-italic">plus</span>
        </div>
      );
    case 'myntra':
      return (
        <div className="font-black text-xl tracking-tight text-[#E42529]">
          M<span className="text-[#F44336]">y</span>ntra
        </div>
      );
    case 'nykaa':
      return (
        <div className="font-black text-xl tracking-tight text-[#FC2779] italic">
          NYKAA
        </div>
      );
    case 'ajio':
      return (
        <div className="font-black text-xl tracking-widest text-[#111827]">
          AJIO
        </div>
      );
    case 'samsung':
      return (
        <div className="font-black text-xl tracking-wider text-[#1428A0]">
          SAMSUNG
        </div>
      );
    case 'boat':
      return (
        <div className="font-black text-lg tracking-tight text-[#E60023]">
          bo<span className="text-black">At</span>
        </div>
      );
    case 'lenovo':
      return (
        <div className="font-black text-lg tracking-wider text-white bg-[#E2231A] px-2 py-0.5 rounded">
          Lenovo
        </div>
      );
    case 'hp':
      return (
        <div className="font-black text-xl italic tracking-tighter text-[#0096D6] border-2 border-[#0096D6] rounded-full w-8 h-8 flex items-center justify-center">
          hp
        </div>
      );
    case 'hdfc':
      return (
        <div className="font-extrabold text-sm text-[#004C8F] flex items-center gap-1">
          <span className="bg-[#004C8F] text-white px-1 py-0.5 rounded text-[10px]">HDFC</span> BANK
        </div>
      );
    case 'icici':
      return (
        <div className="font-extrabold text-sm text-[#F37021]">
          ICICI Bank
        </div>
      );
    case 'sbi':
      return (
        <div className="font-extrabold text-sm text-[#280071] flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#00A5EC] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#00A5EC] rounded-full"></div>
          </div>
          SBI Card
        </div>
      );
    case 'axis':
      return (
        <div className="font-extrabold text-sm text-[#97144D]">
          AXIS BANK
        </div>
      );
    default:
      return <div className="font-bold text-base text-gray-800">{name}</div>;
  }
};

// ============================================================================
// DIWALI HERO BANNER GRAPHIC (3D Visual Graphic matching screenshot)
// ============================================================================
const DiwaliHeroBannerGraphic = () => (
  <div className="relative w-full h-full min-h-[260px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF5722] via-[#E64A19] to-[#4A148C] p-6 text-white flex flex-col justify-between shadow-xl border border-orange-300/30">
    {/* Decorative background glow & lanterns */}
    <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl" />
    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl" />

    {/* Top Hanging Lanterns (Kandils) */}
    <div className="absolute top-0 right-6 flex gap-4 opacity-90">
      <svg className="w-8 h-16 text-yellow-300 animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 40 80">
        <line x1="20" y1="0" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
        <polygon points="20,20 32,35 20,50 8,35" fill="#FFC107" />
        <polygon points="20,20 20,50 32,35" fill="#FFA000" />
        <line x1="12" y1="50" x2="8" y2="70" stroke="#FFE082" strokeWidth="2" />
        <line x1="20" y1="50" x2="20" y2="75" stroke="#FFCA28" strokeWidth="2" />
        <line x1="28" y1="50" x2="32" y2="70" stroke="#FFE082" strokeWidth="2" />
      </svg>
      <svg className="w-6 h-12 text-amber-200 opacity-80" viewBox="0 0 40 80">
        <line x1="20" y1="0" x2="20" y2="15" stroke="currentColor" strokeWidth="2" />
        <polygon points="20,15 30,28 20,40 10,28" fill="#FFE082" />
        <line x1="15" y1="40" x2="12" y2="60" stroke="#FFF" strokeWidth="1.5" />
        <line x1="25" y1="40" x2="28" y2="60" stroke="#FFF" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Sparkles / Diya Pattern overlay */}
    <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
      {/* Top Banner Tag */}
      <div>
        <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-gray-900 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
          <Sparkles className="w-3 h-3 text-red-600" />
          SHOP • SAVE • CELEBRATE
        </div>
      </div>

      {/* Main Title Banner */}
      <div className="space-y-1">
        <h2 className="text-3xl sm:text-4xl font-black text-amber-300 drop-shadow-md tracking-tight font-serif italic">
          Happy Diwali
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-orange-100 tracking-wide">
          Light up your home with huge discounts!
        </p>
      </div>

      {/* Bottom Highlights & Floating Gift Tag */}
      <div className="flex items-end justify-between pt-2 border-t border-orange-400/30">
        {/* Diyas Graphic Row */}
        <div className="flex items-center gap-2">
          {/* Diya SVG 1 */}
          <div className="relative">
            <div className="w-3 h-4 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-pulse mx-auto shadow-yellow-300/80 shadow-md" />
            <div className="w-8 h-4 bg-amber-600 rounded-b-full border-t border-amber-400" />
          </div>
          {/* Diya SVG 2 */}
          <div className="relative">
            <div className="w-4 h-5 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full animate-pulse mx-auto shadow-yellow-300/80 shadow-md" />
            <div className="w-10 h-5 bg-amber-700 rounded-b-full border-t border-amber-300" />
          </div>
        </div>

        {/* Gift tag badge */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-950 px-3 py-1.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform rotate-[-2deg]">
          <Gift className="w-3.5 h-3.5 text-red-700" />
          <span>BIG SAVINGS BIGGER CELEBRATIONS</span>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// MAIN DIWALI OFFERS PAGE COMPONENT
// ============================================================================
export default function DiwaliOffers() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A6A] font-sans antialiased">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs text-gray-500 gap-1.5 font-medium">
          <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/festival-offers" className="hover:text-[#5B4FBE] transition-colors">Festivals</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">Diwali Offers</span>
        </nav>

        <section className="w-fullpt-6 pb-12">
          <div className="max-w-8xl mx-auto">

            {/* Main Hero Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Store Detail Card (Left 7 Columns) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col md:flex-row gap-6 items-start">


                  {/* Details Section */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Diwali Offers 2026 — Best Deals on Gifts, Decor, Electronics & More</h1>

                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                      Diwali is that one time of year when everyone is buying something — lights for the home, gifts for family, new appliances, clothes, sweets, dry fruits — and every major online and offline brand is competing hard for your attention. That also means this is when you get the best prices of the year if you know where to look.
                    </p>


                  </div>
                </div>
              </div>

              {/* Simple Styled Panel (Right 5 Columns) — desktop only, no promo banner image available */}
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                {/* End-to-End Background Image */}
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789907984/diwali-offers_dztpet.webp"
                  alt="Diwali offers"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </div>
            </div>
          </div>
        </section>


        {/* 2-Column Sidebar + Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ================================================================== */}
          {/* LEFT SIDEBAR PANEL */}
          {/* ================================================================== */}
          <aside className="lg:col-span-3 space-y-4">
            {/* Sidebar Navigation Box */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col gap-1">
              <Link
                href="/stores/categories"
                className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group"
              >
                <LayoutGrid className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Categories</span>
              </Link>
              <Link
                href="/stores"
                className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group"
              >
                <Store className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Stores</span>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group"
              >
                <ShoppingBag className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Product Deals</span>
              </Link>
              <Link
                href="/festival-offers"
                className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group"
              >
                <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Festival Offers</span>
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium text-[#1A1A2E] hover:bg-purple-50 hover:text-[#5B4FBE] transition-all group"
              >
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                <span>Blog</span>
              </Link>
            </div>

            {/* Sidebar Newsletter Widget */}
            <div className="bg-[#F0EEFF] rounded-2xl p-4 border border-purple-100 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-200/70 text-[#5B4FBE] flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm leading-tight">
                  Never Miss a Festival Deal!
                </h4>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                  Get the latest offers, deals and updates directly in your inbox.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FBE]"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#5B4FBE] hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 font-bold text-center">
                  Subscribed successfully!
                </p>
              )}
            </div>
          </aside>

          {/* ================================================================== */}
          {/* MAIN CONTENT AREA */}
          {/* ================================================================== */}
          <div className="lg:col-span-9 space-y-8">



            {/* TOP DIWALI OFFERS SECTION */}

            {/* TOP DIWALI OFFERS SECTION */}
            <section id="top-offers" className="space-y-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Flame className="w-4 h-4 fill-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900 leading-tight">
                      Top Diwali Offers
                    </h2>
                    <p className="text-xs text-gray-500">
                      Handpicked Diwali deals from top brands to help you save more this festive season.
                    </p>
                  </div>
                </div>
              </div>

              {/* Single Column Offers List */}
              <div className="grid grid-cols-1 gap-4">

                {/* Offer Card */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">

                  {/* Left Badge Section with Notch Effect */}
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON ELECTRONICS</span>

                    {/* Notch Cutout Indicator (Visual Ticket Edge Curve) */}
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  {/* Middle Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">ELECTRONICS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Diwali Special – Up to 70% OFF on Electronics
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Grab the best deals on mobiles, laptops, TVs & more this festive season — no coupon code required.
                      </p>

                      {/* View Details Toggle & Expandable List */}
                      <div className="mt-3">
                        <button
                          onClick={() => {
                            const detailsEl = document.getElementById('offer-details-content');
                            detailsEl?.classList.toggle('hidden');
                          }}
                          className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-1 focus:outline-none"
                        >
                          <span>View Details</span>
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        </button>

                        <div id="offer-details-content" className="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Valid on select categories as listed on the product page.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Minimum cart value might apply as specified on descriptions.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>Covers selected brands and product collections.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Action Section */}
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img
                        src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg"
                        alt="Amazon"
                        className="h-9 w-auto object-contain"
                      />
                      <Link
                        href="/stores/amazon-coupon-code"
                        className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1"
                      >
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="w-full space-y-2">
                      <a
                        href="https://www.amazon.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/stores/amazon-coupon-code"
                        className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center justify-center"
                      >
                        <span>Visit Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

                {/* ── OFFER 2: Flipkart – Big Billion Days ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">80%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON MOBILES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">MOBILES</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Big Billion Days – Up to 80% OFF on Smartphones
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Best deals on iPhones, Samsung, OnePlus, Poco & more during Flipkart's biggest sale.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 3: Myntra – Fashion Sale ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">90%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON FASHION</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded uppercase">FASHION</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra End of Reason Sale – Up to 90% OFF on Clothing
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Shop ethnic wear, western wear, footwear & accessories at unbeatable Diwali prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 4: Amazon – Home Appliances ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">60%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">HOME APPLIANCES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded uppercase">HOME</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Diwali Sale – Up to 60% OFF on Home Appliances
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Refrigerators, washing machines, ACs, microwaves & kitchen appliances at festive prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 5: Flipkart – TVs & Large Appliances ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">55%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ON TELEVISIONS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">TVs</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Big Diwali Sale – Up to 55% OFF on Smart TVs
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Sony, Samsung, LG, OnePlus & Mi TVs with extra bank discounts available on Flipkart.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 6: Nykaa – Beauty & Skincare ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">60%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">BEAUTY & SKIN</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded uppercase">BEAUTY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Nykaa Diwali Dhamaka – Up to 60% OFF on Beauty Products
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Skincare, makeup, haircare & fragrance at the best festive prices with free gifts on select orders.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp" alt="Nykaa" className="h-9 w-auto object-contain" />
                      <Link href="/stores/nykaa-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Nykaa Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.nykaa.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/nykaa-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 7: Swiggy Instamart – Groceries & Sweets ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">GROCERIES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">GROCERY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Swiggy Diwali Deals – Up to 50% OFF on Sweets & Groceries
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Order Diwali sweets, dry fruits, diyas & puja items delivered in minutes.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp" alt="Swiggy" className="h-9 w-auto object-contain" />
                      <Link href="/stores/swiggy-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Swiggy Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/swiggy-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 8: Blinkit – Quick Commerce ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">40%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">INSTANT DELIVERY</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded uppercase">QUICK COMMERCE</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Blinkit Diwali Offers – Up to 40% OFF on Essentials
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Diwali puja items, candles, sweets & snacks delivered to your door in 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp" alt="Blinkit" className="h-9 w-auto object-contain" />
                      <Link href="/stores/blinkit-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Blinkit Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://blinkit.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/blinkit-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 9: Amazon – Laptops & PCs ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">45%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">LAPTOPS & PCs</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded uppercase">COMPUTERS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Great Indian Festival – Up to 45% OFF on Laptops
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Dell, HP, Lenovo, ASUS & Apple MacBook deals with no-cost EMI available this Diwali.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 10: Myntra – Footwear ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">75%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">FOOTWEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded uppercase">FOOTWEAR</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra Festive Sale – Up to 75% OFF on Footwear
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Nike, Puma, Adidas, Bata & more with festive discounts on ethnic & casual footwear.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 11: Pepperfry – Furniture & Decor ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">FURNITURE</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">HOME DECOR</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Pepperfry Diwali Sale – Up to 70% OFF on Furniture
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Sofas, beds, dining sets, lamps & home decor at unbeatable Diwali prices with free shipping.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg" alt="Pepperfry" className="h-9 w-auto object-contain" />
                      <Link href="/stores/pepperfry-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Pepperfry Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.pepperfry.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/pepperfry-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 12: Zepto – Diwali Essentials ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">35%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">FESTIVE ITEMS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded uppercase">QUICK DELIVERY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Zepto Diwali Fest – Up to 35% OFF on Festive Essentials
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Diyas, rangoli colors, dry fruits & Diwali gift combos delivered in 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp" alt="Zepto" className="h-9 w-auto object-contain" />
                      <Link href="/stores/zepto-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Zepto Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.zeptonow.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/zepto-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 13: Flipkart – Clothing & Ethnic Wear ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">85%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">ETHNIC WEAR</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">CLOTHING</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Festive Sale – Up to 85% OFF on Ethnic Wear
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Sarees, kurtas, lehengas, sherwanis & more for the festive season at incredible prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 14: Amazon – Watches & Jewellery ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">65%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">WATCHES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded uppercase">WATCHES & JEWELLERY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Diwali Gift Sale – Up to 65% OFF on Watches
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Titan, Fastrack, Fossil, Casio & luxury watches — perfect Diwali gift choices at great prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 15: Myntra – Accessories & Bags ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">80%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">BAGS & ACCESSORIES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-pink-700 bg-pink-100 px-2 py-0.5 rounded uppercase">ACCESSORIES</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra Diwali – Up to 80% OFF on Bags & Accessories
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Handbags, clutches, sunglasses, belts & jewellery sets — all at Diwali special prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 16: Flipkart – Furniture & Home ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">65%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">HOME & FURNITURE</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">HOME</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Big Diwali – Up to 65% OFF on Home & Furniture
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Diwali decoration lights, diyas, rangoli kits, festive bedsheets & home decor at great prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 17: Amazon – Books & Education ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">BOOKS & KIDS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase">BOOKS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Festive – Up to 50% OFF on Books & Toys
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Bestsellers, children's books, board games & Diwali gift sets for kids at festive prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 18: Myntra – Kids & Baby Wear ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">KIDS FASHION</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded uppercase">KIDS WEAR</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra Kids Diwali Sale – Up to 70% OFF on Kids Wear
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Ethnic kurtas, festive dresses, footwear & accessories for boys & girls this Diwali.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 19: Flipkart – Tablets & iPads ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">40%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">TABLETS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded uppercase">TABLETS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Big Billion Days – Up to 40% OFF on Tablets
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Samsung Tab, Apple iPad, Xiaomi Pad & Fire Tablets with festive bank cashback offers.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 20: Amazon – Sports & Fitness ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">55%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">SPORTS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded uppercase">SPORTS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Festive Sale – Up to 55% OFF on Sports & Fitness
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Fitness equipment, cricket gear, cycles, yoga mats & gym accessories at Diwali prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 21: Flipkart – Headphones & Audio ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">60%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">AUDIO DEVICES</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded uppercase">AUDIO</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Diwali Sale – Up to 60% OFF on Headphones & Speakers
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Sony, JBL, boAt, Bose & Apple AirPods at the best festive prices on Flipkart.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 22: Amazon – Cameras & Photography ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">40%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">CAMERAS</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded uppercase">CAMERAS</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Diwali – Up to 40% OFF on Cameras & Accessories
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Canon, Nikon, Sony & GoPro cameras with memory cards & lenses at festive discounts.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 23: Myntra – Beauty & Personal Care ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">65%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">BEAUTY</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded uppercase">BEAUTY</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Myntra Diwali – Up to 65% OFF on Beauty & Personal Care
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Premium makeup, skincare serums, perfumes & grooming kits for festive gifting.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp" alt="Myntra" className="h-9 w-auto object-contain" />
                      <Link href="/stores/myntra-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Myntra Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/myntra-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 24: Flipkart – Kitchen & Cookware ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">70%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">KITCHEN</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded uppercase">KITCHEN</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Flipkart Diwali Offer – Up to 70% OFF on Kitchen & Cookware
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Pressure cookers, non-stick pans, mixer grinders & Prestige cookware sets at festive prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp" alt="Flipkart" className="h-9 w-auto object-contain" />
                      <Link href="/stores/flipkart-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Flipkart Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/flipkart-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── OFFER 25: Amazon – Smart Home & IoT ── */}
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative">
                  <div className="w-full md:w-48 bg-[#5B4FBE] text-white flex flex-col items-center justify-center p-6 text-center shrink-0 relative">
                    <span className="text-[11px] uppercase font-bold tracking-wider opacity-90">UP TO</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight leading-none my-1">50%</span>
                    <span className="text-xs font-bold uppercase tracking-wider">OFF</span>
                    <span className="text-[10px] uppercase font-medium tracking-wider opacity-80 mt-3">SMART HOME</span>
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded uppercase">SMART HOME</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">VERIFIED</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                        Amazon Diwali – Up to 50% OFF on Smart Home Devices
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Echo devices, Alexa smart bulbs, Fire TV Stick & Ring doorbells at Diwali prices.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center gap-4 bg-white shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg" alt="Amazon" className="h-9 w-auto object-contain" />
                      <Link href="/stores/amazon-coupon-code" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-1">
                        View All Amazon Offers <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="w-full space-y-2">
                      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                        Get Deal <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link href="/stores/amazon-coupon-code" className="w-full bg-white border border-blue-200 text-[#5B4FBE] hover:bg-purple-50 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                        <span>Visit Store</span><ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </section>



          </div>
        </div>

        {/* POPULAR BRANDS THIS DIWALI */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Brands This Diwali
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Explore Diwali offers from your favorite brands.
            </p>
          </div>

          {/* Brands Grid matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Amazon',
                slug: 'amazon-coupon-code',
                logoBg: '#EAF2FB',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786210525/amazon-logo_snb5za.jpg',
                discountLabel: 'Up to 90% OFF',
                logo: 'amazon',
              },
              {
                name: 'Pepperfry',
                slug: 'pepperfry-coupon-code',
                logoBg: '#FDF1E7',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782749064/pepperfry-logo_fa8xlf.jpg',
                discountLabel: 'Up to 80% OFF',
                logo: 'pepperfry',
              },
              {
                name: 'Myntra',
                slug: 'myntra-coupon-code',
                logoBg: '#FFF0F4',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/myntra-logo_lbdivn.webp',
                discountLabel: 'Up to 90% OFF',
                logo: 'myntra',
              },
              {
                name: 'Flipkart',
                slug: 'flipkart-coupon-code',
                logoBg: '#EBF2FE',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786929943/flipkart-logo_dyngc1.webp',
                discountLabel: 'Up to 95% OFF',
                logo: 'flipkart',
              },
              {
                name: 'Zepto',
                slug: 'zepto-coupon-code',
                logoBg: '#F3E9FC',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787624557/zaptio-logo_zsybmq.webp',
                discountLabel: 'Up to 95% OFF',
                logo: 'zepto',
              },
              {
                name: 'Blinkit',
                slug: 'blinkit-coupon-code',
                logoBg: '#FDF7E3',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787796580/blinkit-logo_f9retd.webp',
                discountLabel: 'Up to 80% OFF',
                logo: 'blinkit',
              },
              {
                name: 'Swiggy',
                slug: 'swiggy-coupon-code',
                logoBg: '#FEF0E3',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787537869/swiggy-logo_n32rt9.webp',
                discountLabel: 'Up to 50% OFF',
                logo: 'swiggy',
              },
              {
                name: 'Nykaa',
                slug: 'nykaa-coupon-code',
                logoBg: '#FDE9F1',
                logoImage: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787405831/nykaa-logo_et8g79.webp',
                discountLabel: 'Up to 60% OFF',
                logo: 'nykaa',
              },
            ].map((brand) => (
              <div
                key={brand.slug}
                className="bg-white border border-[#E8E8F0] rounded-2xl p-6 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center w-full">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center p-3 mb-3 shadow-xs"
                    style={{ backgroundColor: brand.logoBg }}
                  >
                    {brand.logoImage ? (
                      <img
                        src={brand.logoImage}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain rounded-xl"
                      />
                    ) : (
                      <BrandLogo name={brand.logo} />
                    )}
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-base mb-2 group-hover:text-[#5B4FBE] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="inline-block bg-[#FFF0EB] text-[#FF5722] font-bold text-xs px-3.5 py-1 rounded-full mb-5">
                    {brand.discountLabel}
                  </span>
                </div>
                <Link
                  href={`/stores/${brand.slug}`}
                  className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-1 transition-all shadow-xs"
                >
                  <span>Get Deal</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* View More Stores Button matching Image 3 */}
          <div className="flex justify-center pt-4">
            <Link
              href="/stores"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-extrabold text-sm sm:text-base bg-white hover:bg-blue-50/60 transition-all shadow-xs"
            >
              <LayoutGrid className="w-5 h-5 text-[#5B4FBE]" />
              <span>View More Stores</span>
            </Link>
          </div>
        </section>

        {/* ==========================================
          SECTION 4 - SEO CONTENT (70/30 LAYOUT)
          ========================================== */}
        <section className="py-16 border-t border-[#E8E8F0] font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

            {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
            <div className="lg:col-span-7 space-y-10">

              {/* ARTICLE BLOCK 1: About */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
                  <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Diwali Offers 2026</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Light Up Your Diwali with Festive Deals
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    This page is your one-stop guide to the best diwali offers in 2026. We have covered the top stores, what categories to focus on, the best mobile phone deals, and why shopping through CouponsCrew during the diwali festival saves you extra on top of sale prices.
                  </p>
                  <p>
                    The diwali festival season in India is not just one day — it stretches across two to three weeks. Dhanteras, Navratri, Dussehra, and then Diwali itself. Brands know this and they start the deals early. If you are shopping for diwali decorations, diwali lights, or gifts, starting at least a week before the main day means you get better stock and better prices.
                  </p>
                  <p>
                    Here is what the diwali celebration season looks like from a shopping point of view:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Dhanteras (two days before Diwali):</strong> Traditionally the day for buying gold, silver, and new utensils. Online, this translates to strong deals on kitchen appliances, gold coins, silver items, and electronics — especially since buying electronics on Dhanteras is now a common practice.</li>
                    <li><strong>Diwali Eve and Diwali Day:</strong> This is when diwali decoration items, diwali diya sets, diwali lamps, fairy lights, and candles peak in demand. Order early if you want same-day or next-day delivery.</li>
                    <li><strong>Post-Diwali:</strong> Some of the best deals actually come a day or two after Diwali — clearance pricing on decor, unsold gift sets, and leftover electronics inventory. Worth checking if you missed the main sale.</li>
                  </ul>
                  <p>
                    The best approach for diwali shopping is to have a list ready before the sale week starts. Know what you need — whether it is diwali gifts for family, diwali gift hampers for office colleagues, home decor, or a new phone — and then compare prices across platforms before committing.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                    <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Festive Guide</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] leading-tight">
                    Best Diwali Offers & Deals from Popular Brands in 2026
                  </h2>
                  <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                    Multiple stores run massive diwali offers every year. Here are the ones worth paying attention to:
                  </p>
                </div>

                {/* Flipkart Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Flipkart — The Big Billion Days Meets Diwali</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart runs the Big Billion Days sale in October, which overlaps directly with the diwali celebration window. The diwali offer Flipkart runs are some of the steepest on electronics, fashion, and home goods.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">What to look for on Flipkart during Diwali:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Smartphones from Samsung, Motorola, Realme, and iQOO at lowest-of-year prices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Large appliances — refrigerators and washing machines — with exchange bonuses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Fashion deals from Myntra (Flipkart-owned) with up to 50–70% off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Axis Bank and HDFC Bank offer an extra 10% instant discount on select cards</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Flipkart also runs a separate Diwali Lights and Decor section during this period — diwali lamps, string lights, lanterns, and diwali diya sets at competitive prices.
                  </p>
                </div>

                {/* Amazon Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Amazon — Great Indian Festival (Diwali Edition)</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Amazon India runs the Great Indian Festival sale in the same October window. The diwali offer Amazon covers everything from electronics and fashion to Amazon Fresh grocery deals and home decor.
                  </p>
                  <h4 className="mt-4 text-xs font-black text-[#5B4FBE] uppercase tracking-wider">Amazon's edge during Diwali:</h4>
                  <ul className="mt-2 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Prime members get early access and exclusive lightning deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Amazon Pay cashback stacks with bank card offers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Amazon Grocery runs bundle deals on dry fruits, sweets, and festive hampers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span>Echo and Alexa devices see their lowest prices of the year during this window</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    Both Flipkart and Amazon typically announce their sale dates two to three weeks in advance. Watch their apps or bookmark their sale pages to get notified.
                  </p>
                </div>

                {/* Other Stores Worth Checking */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Other Stores Worth Checking</h3>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Myntra</strong> — Diwali fashion sale with brands like Fabindia, W, Biba, and international labels. Good for ethnic wear, kurtis, and lehengas for the festive occasion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Nykaa</strong> — Beauty and skincare diwali gift hampers are a Nykaa specialty. Sets from brands like Forest Essentials, Kama Ayurveda, and international beauty brands work well as gifts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Croma</strong> — Offline and online, Croma runs strong diwali offers on electronics with no-cost EMI and exchange offers. Worth visiting in-store if you want to see a TV or laptop before buying.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Pepperfry and IKEA</strong> — For diwali decorations, home decor, and furniture, these are the best online destinations. Pepperfry specifically runs "Diwali Home Makeover" sales with decor discounts.</span>
                    </li>
                  </ul>
                </div>

                {/* Diwali Gift Hampers Section */}
                <div className="p-6 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Diwali Gift Hampers — Where to Buy</h3>
                  <p className="mt-2 text-xs text-[#4A4A6A] leading-relaxed">
                    Diwali gift hampers are big business in India, and the options have expanded significantly. A few good sources:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#4A4A6A]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Amazon</strong> — has curated hampers from ₹499 to ₹5,000+ with dry fruits, sweets, chocolates, and wellness products bundled together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Nykaa</strong> — beauty and skincare hampers that work well for gifting to women</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>FabIndia</strong> — traditional gifting sets with organic products and Indian craft items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B4FBE] mt-1.5 shrink-0"></span>
                      <span><strong>Local sweet shops and dairy brands</strong> — Haldiram's, Bikaji, and regional brands offer corporate hamper programs for bulk orders</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-[#4A4A6A] leading-relaxed">
                    If you are buying diwali gifts for office colleagues in bulk (say, 20+ pieces), most brands offer corporate pricing and direct delivery. Worth exploring for bulk orders.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 2: Mobile Phones Deals */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
                  <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Mobile Phone Deals</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Best Mobile Phones Deals during Diwali Offers 2026
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Smartphones are the single biggest category during the diwali festival sale season. Here is a category-wise breakdown of what to expect:
                </p>

                <div className="space-y-6 mt-6">
                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">Under ₹15,000 — Best Budget Phones</h3>
                    <p className="text-xs text-[#4A4A6A] mb-3">This segment has the most competition. Realme, Poco, Narzo, and Samsung Galaxy A-series battle it out here. During diwali shopping season, expect:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-[#4A4A6A]">
                      <li>Realme Narzo and C-series dropping to ₹8,000–₹12,000</li>
                      <li>Samsung Galaxy A15 5G around ₹12,000–₹13,000 (down from ₹16,000 retail)</li>
                      <li>Poco M-series offering solid performance in this range</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">₹15,000–₹30,000 — Mid-Range Sweet Spot</h3>
                    <p className="text-xs text-[#4A4A6A] mb-3">This is where most Indian buyers land during diwali offers. The competition is intense and deals are genuinely good.</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-[#4A4A6A]">
                      <li>Nothing Phone 3a — strong camera, clean software, good track record</li>
                      <li>OnePlus Nord CE 4 — smooth performance, fast charging, reliable brand</li>
                      <li>Samsung Galaxy A35 5G — Samsung's ecosystem plus a solid camera</li>
                      <li>iQOO Z9s — benchmark-topping performance for the price</li>
                    </ul>
                    <p className="text-xs text-[#4A4A6A] mt-3">Expect prices in this segment to be ₹2,000–₹5,000 lower than usual, plus bank card discounts on top.</p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">₹30,000–₹60,000 — Upper Mid-Range and Near-Flagship</h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-[#4A4A6A]">
                      <li>OnePlus 13R / 13 — consistently good deals during Diwali, OnePlus participates heavily</li>
                      <li>Samsung Galaxy S23 FE — last-gen flagship experience at a strong discount</li>
                      <li>Google Pixel 8a — excellent camera, guaranteed software updates, Diwali is when it tends to drop in price</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-2">Above ₹60,000 — Flagship Territory</h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-[#4A4A6A]">
                      <li>iPhone 15 / iPhone 16 — Apple does not officially discount, but Flipkart and Amazon offer bank discounts and exchange bonuses that effectively reduce the price by ₹5,000–₹10,000</li>
                      <li>Samsung Galaxy S24 series — direct discounts plus trade-in offers</li>
                      <li>OnePlus 13 Pro — worth tracking if you want flagship Android at a non-flagship price</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2E7D32] leading-relaxed">
                    <strong>Pro tip:</strong> Use price history tools before buying. A phone listed at "₹5,000 off" may have been at that discounted price for three months already. CouponsCrew updates deal pages with verified lowest prices — check before you buy.
                  </p>
                </div>
              </div>

              {/* ARTICLE BLOCK 3: Benefits of Diwali with CouponsCrew */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
                  <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">CouponsCrew Benefits</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  Benefits of Celebrating Diwali With CouponsCrew
                </h2>
                <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
                  Shopping during diwali offers is already good. Shopping through CouponsCrew makes it better. Here is how:
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Verification",
                      color: "#22C55E",
                      title: "Verified Coupon Codes That Actually Work",
                      body: "Most coupon sites list codes that are expired or never worked to begin with. CouponsCrew only publishes codes that have been tested. Every diwali coupon and cashback offer on this site is verified before going live."
                    },
                    {
                      label: "Stores",
                      color: "#5B4FBE",
                      title: "Deals Across All Major Stores in One Place",
                      body: "You do not need to open five different tabs. CouponsCrew aggregates diwali offers from Flipkart, Amazon, Myntra, Nykaa, Croma, and more in one place. Filter by store, category, or discount percentage."
                    },
                    {
                      label: "Stacking",
                      color: "#FF9900",
                      title: "Cashback Offers That Stack",
                      body: "Some of the best savings during diwali shopping come from stacking — store sale price + bank card discount + cashback through CouponsCrew. All three together on a ₹50,000 laptop can mean saving ₹8,000–₹12,000 total."
                    },
                    {
                      label: "Guides",
                      color: "#D2691E",
                      title: "Diwali Greetings and Gift Guides",
                      body: "Beyond deals, CouponsCrew also covers gifting guides — practical lists of diwali gifts for different budgets, diwali gift hampers for different recipients, and ideas for diwali decoration items that will actually look good rather than just adding clutter."
                    },
                    {
                      label: "Alerts",
                      color: "#5B4FBE",
                      title: "Early Deal Alerts",
                      body: "Sign up for deal alerts and you will know about the best diwali offers before the general public. Flash deals on electronics go fast — sometimes in under ten minutes. Early notification is the difference between catching a deal and missing it."
                    }
                  ].map((cat, idx) => (
                    <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }}></span>
                        <span className="text-xs font-black uppercase tracking-wider" style={{ color: cat.color }}>
                          {cat.label}
                        </span>
                      </div>
                      <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
                      <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ARTICLE BLOCK 4: Shop Smart */}
              <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-[#F59E0B] rounded-full block"></span>
                  <span className="text-xs font-black text-[#F59E0B] uppercase tracking-widest">Smart Shopping</span>
                </div>
                <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
                  This Diwali, Shop Smart — Not Just More
                </h2>
                <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    The diwali celebration is about more than buying things. But when you do need to buy — whether it is diwali gifts, new lights for the home, or something you have been putting off all year — doing it right means real money saved.
                  </p>
                  <p>
                    The best diwali offers are not always the ones with the biggest banners. They are the ones where the price is genuinely low, the product is exactly what you need, and you have stacked every available discount — store sale, bank card offer, and a cashback code from CouponsCrew. That combination is how diwali shopping actually saves you money rather than just feels like it does.
                  </p>

                  <div className="bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#5B4FBE] leading-relaxed">
                      Happy Diwali wishes to everyone shopping the festive season — may your orders arrive on time and your discounts be real. 🪔
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE BLOCK 5: Platform Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
                  <span className="text-xs font-black text-white/60 uppercase tracking-widest">Happy Diwali from CouponsCrew</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight">
                  May the Diwali Festival Bring Joy and Great Deals
                </h2>
                <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
                  <p>
                    We wish you and your family a very happy diwali this year. May the diwali festival bring joy, warmth, and — yes — some genuinely great deals to your cart.
                  </p>
                  <p>
                    We will keep this page updated with the latest verified offers as the sale week approaches. Bookmark it, share it with family, and come back when the diwali offers go live.
                  </p>
                  <p className="text-white font-black tracking-wide pt-2">
                    Find the store above. Copy the code. Pay less.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT - SIDEBAR CARDS (30%) */}
            <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

              {/* SIDEBAR CARD 1 - Stack Visualizer */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
                    The Diwali Savings Stack
                  </h3>
                  <p className="text-xs text-[#4A4A6A] mb-4">Combine store sales, bank offers, and CouponsCrew cashback.</p>

                  <div className="space-y-2">
                    {[
                      { label: "1. Store Sale Price", desc: "Base Festive Discount" },
                      { label: "2. Bank Card Instant Off", desc: "HDFC, ICICI, SBI Offers" },
                      { label: "3. CouponsCrew Cashback", desc: "Extra Verified Savings" }
                    ].map((layer, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A2E]">{layer.label}</p>
                          <p className="text-[10px] text-[#4A4A6A]">{layer.desc}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-[#5B4FBE]" />
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#E8E8F0]">
                      <span className="text-xs font-bold text-[#1A1A2E]">Combinable?</span>
                      <span className="text-xs font-black text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20 px-2 py-0.5 rounded-full">
                        Yes, usually
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sidebar FAQ Accordion */}
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
                    <h3 className="font-extrabold text-[#1A1A2E] text-sm">Diwali Offers FAQ 2026</h3>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        q: "When do Diwali offers 2026 start?",
                        a: "Most major diwali offers start one to two weeks before Diwali day. In 2026, Diwali falls on October 20. Expect sale dates to begin around October 7–10 for early bird deals, with main festival sales from October 13–20."
                      },
                      {
                        q: "Which is better for diwali shopping — Flipkart or Amazon?",
                        a: "Both are strong. For electronics and mobile phones, compare prices on both — the same phone can differ by ₹500–₹2,000 depending on the day. For home decor and diwali decoration items, Amazon has a broader catalogue. For fashion, Flipkart (and Myntra) is stronger."
                      },
                      {
                        q: "Are there special offers for diwali gifts and gift hampers?",
                        a: "Yes. Both Flipkart and Amazon have dedicated gift and hamper sections during diwali. You can filter by budget (under ₹500, ₹500–₹2,000, ₹2,000+) and by recipient type. Corporate bulk orders come with additional pricing."
                      },
                      {
                        q: "What are the best diwali decoration items to buy online?",
                        a: "String lights (LED fairy lights), diwali diya sets, floor rangoli stencils, paper lanterns, and decorative torans are the most popular. Pepperfry, Amazon, and Flipkart all carry these. Order at least five to seven days before Diwali to avoid delivery delays."
                      },
                      {
                        q: "Are diwali diya and lamp deals available online?",
                        a: "Yes. Terracotta diyas, clay lamp sets, brass diwali lamps, and decorative diya sets are available from ₹99 to ₹2,000+ depending on the material and quantity. Flipkart and Amazon both carry these, and local artisan brands are also listed on these platforms now."
                      },
                      {
                        q: "How do I make sure my diwali order arrives before the festival?",
                        a: "Order at least a week in advance for most items. For diwali decoration items and diwali lights specifically, stock can run out close to the day. Prime members on Amazon get faster delivery guarantees. Flipkart Plus members also get priority shipping."
                      },
                      {
                        q: "Is it worth buying a phone during diwali offers?",
                        a: "Usually yes — diwali is one of the two best times to buy a phone in India (the other being during Republic Day sales in January). Prices are at their lowest, exchange bonuses are higher, and no-cost EMI options are available across more models."
                      },
                      {
                        q: "How do I share diwali wishes with discounts?",
                        a: "Several brand apps and greeting card services run discount offers tied to referral codes shared via diwali greetings. Sending a happy diwali wishes message with a discount code for a shared app — like Amazon Pay or Paytm — is one way to combine diwali celebration with practical gifting."
                      },
                      {
                        q: "Are there any risks to buying during diwali sale week?",
                        a: "Main risk is fake products from unverified sellers. Stick to sold-by Amazon or sold-by Flipkart listings for electronics. For branded goods, check seller ratings and look for \"Fulfilled by Flipkart\" or \"Fulfilled by Amazon\" tags."
                      },
                      {
                        q: "Do stores offer special no-cost EMI options during diwali?",
                        a: "Yes. No-cost EMI on 3, 6, 9, and 12 months is widely available during diwali offers. Bajaj Finserv, HDFC Credit Card, and store credit cards typically feature. This is especially useful for appliances and high-end phones above ₹30,000."
                      }
                    ].map((faq, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <div
                          key={index}
                          className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#5B4FBE] bg-[#F8F8FF]' : 'border-[#E8E8F0] bg-white hover:border-[#5B4FBE]/40'
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={isOpen}
                            aria-controls={`sidebar-faq-${index}`}
                            className="w-full flex items-center justify-between p-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4FBE] rounded-xl"
                          >
                            <span className={`text-xs font-bold pr-2 transition-colors ${isOpen ? 'text-[#5B4FBE]' : 'text-[#1A1A2E]'}`}>
                              {faq.q}
                            </span>
                            <div
                              className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#5B4FBE] text-white rotate-45' : 'bg-gray-100 text-[#4A4A6A] rotate-0'
                                }`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </div>
                          </button>

                          <div
                            id={`sidebar-faq-${index}`}
                            role="region"
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                              }`}
                          >
                            <div className="overflow-hidden">
                              <div className="px-3 pb-3">
                                <div className="h-px w-full bg-[#E8E8F0] mb-2" />
                                <p className="text-[11px] text-[#4A4A6A] leading-relaxed font-medium">
                                  {faq.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SIDEBAR CARD 2 - Supported Platforms */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
                <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  Festival Partners
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Amazon", status: "Diwali Deals Live", active: true },
                    { name: "Flipkart", status: "Big Billion Days", active: true },
                    { name: "Myntra & Nykaa", status: "Festive Offers", active: true }
                  ].map((platform, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#E8E8F0] last:border-0">
                      <span className="text-xs font-medium text-[#1A1A2E]">{platform.name}</span>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-full text-[#22C55E] bg-[#F0FDF4] border border-[#22C55E]/20">
                        {platform.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIDEBAR CARD 3 - Shopping Warning */}
              <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#FF9900]" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-sm">Festive Delivery Notice</h3>
                </div>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Order diwali decoration items and gifts at least 5-7 days before the festival to avoid peak delivery delays.
                </p>
              </div>

            </div>

          </div>
        </section>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
