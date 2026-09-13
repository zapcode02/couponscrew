'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  Download,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Eye,
  Heart,
  CheckCircle2,
  XCircle,
  FileText,
  Mail,
  Layers,
  Type,
  Palette,
  BadgeCheck,
  Building2,
  Users,
  TrendingUp,
  Tag,
  ExternalLink
} from 'lucide-react';

// Brand Colors Definition
const BRAND_COLORS = [
  {
    hex: '#5C3BCC',
    name: 'CouponsCrew Violet — Primary',
    desc: 'Innovation & Trust',
    bgClass: 'bg-[#5C3BCC]',
    textDark: false,
  },
  {
    hex: '#FF5722',
    name: 'Savings Amber — Accent',
    desc: 'Energy & Action',
    bgClass: 'bg-[#FF5722]',
    textDark: true,
  },
  {
    hex: '#0F0F1A',
    name: 'Deep Ink — Dark',
    desc: 'Text & Headings',
    bgClass: 'bg-[#0F0F1A]',
    textDark: false,
  },
  {
    hex: '#F4F4F6',
    name: 'Soft Cloud — Background',
    desc: 'Surfaces & Cards',
    bgClass: 'bg-[#F4F4F6]',
    textDark: true,
  },
  {
    hex: '#2D2D45',
    name: 'Dusk Navy — Secondary Dark',
    desc: 'Card Backgrounds & Footer',
    bgClass: 'bg-[#2D2D45]',
    textDark: false,
  },
  {
    hex: '#3B82F6',
    name: 'Trust Blue — CTA & Links',
    desc: 'Action & Link Highlights',
    bgClass: 'bg-[#3B82F6]',
    textDark: false,
  },
];

// SVG Templates for Downloads
const LOGO_SVGS: Record<string, string> = {
  'horizontal-light': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
  <rect width="100%" height="100%" fill="#ffffff" rx="12"/>
  <path d="M45 25 C30 25 20 37 20 50 C20 63 30 75 45 75 C55 75 63 69 67 60 L54 55 C52 60 48 63 44 63 C36 63 32 56 32 50 C32 44 36 37 44 37 C48 37 52 40 54 45 L67 40 C63 31 55 25 45 25 Z" fill="#5C3BCC"/>
  <path d="M48 30 L60 18 C62 16 65 16 67 18 L70 21 L56 35 Z" fill="#FF5722"/>
  <circle cx="62" cy="24" r="3" fill="#5C3BCC"/>
  <text x="85" y="58" font-family="Inter, sans-serif" font-weight="800" font-size="34" fill="#0F0F1A">Coupons<tspan fill="#5C3BCC">Crew</tspan></text>
  <text x="86" y="78" font-family="Inter, sans-serif" font-weight="600" font-size="11" fill="#FF5722" letter-spacing="2">EVERY DEAL. VERIFIED.</text>
</svg>`,

  'horizontal-dark': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
  <rect width="100%" height="100%" fill="#0F0F1A" rx="12"/>
  <path d="M45 25 C30 25 20 37 20 50 C20 63 30 75 45 75 C55 75 63 69 67 60 L54 55 C52 60 48 63 44 63 C36 63 32 56 32 50 C32 44 36 37 44 37 C48 37 52 40 54 45 L67 40 C63 31 55 25 45 25 Z" fill="#9D7BFF"/>
  <path d="M48 30 L60 18 C62 16 65 16 67 18 L70 21 L56 35 Z" fill="#FF5722"/>
  <circle cx="62" cy="24" r="3" fill="#9D7BFF"/>
  <text x="85" y="58" font-family="Inter, sans-serif" font-weight="800" font-size="34" fill="#FFFFFF">Coupons<tspan fill="#FF5722">Crew</tspan></text>
  <text x="86" y="78" font-family="Inter, sans-serif" font-weight="600" font-size="11" fill="#9D7BFF" letter-spacing="2">EVERY DEAL. VERIFIED.</text>
</svg>`,

  'icon-only': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="100%" height="100%" fill="#5C3BCC" rx="28"/>
  <path d="M55 35 C40 35 30 47 30 60 C30 73 40 85 55 85 C65 85 73 79 77 70 L64 65 C62 70 58 73 54 73 C46 73 42 66 42 60 C42 54 46 47 54 47 C58 47 62 50 64 55 L77 50 C73 41 65 35 55 35 Z" fill="#FFFFFF"/>
  <path d="M58 40 L70 28 C72 26 75 26 77 28 L80 31 L66 45 Z" fill="#FF5722"/>
  <circle cx="72" cy="34" r="3.5" fill="#FFFFFF"/>
</svg>`,

  'wordmark-only': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <rect width="100%" height="100%" fill="#ffffff" rx="10"/>
  <text x="20" y="52" font-family="Inter, sans-serif" font-weight="800" font-size="40" fill="#0F0F1A">Coupons<tspan fill="#5C3BCC">Crew</tspan></text>
</svg>`,

  'favicon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="100%" height="100%" fill="#5C3BCC" rx="14"/>
  <path d="M30 18 C20 18 14 25 14 32 C14 39 20 46 30 46 C36 46 40 43 43 38 L36 35 C35 38 32 39 30 39 C25 39 22 35 22 32 C22 29 25 25 30 25 C32 25 35 26 36 29 L43 26 C40 21 36 18 30 18 Z" fill="#FFFFFF"/>
  <path d="M32 20 L39 13 C40 12 42 12 43 13 L45 15 L37 23 Z" fill="#FF5722"/>
</svg>`,
};

export default function Branding() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const downloadFile = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSVG = (key: string, name: string) => {
    const svgContent = LOGO_SVGS[key] || LOGO_SVGS['horizontal-light'];
    downloadFile(`${name.toLowerCase().replace(/\s+/g, '-')}.svg`, svgContent, 'image/svg+xml');
  };

  const handleDownloadPNG = (key: string, name: string) => {
    const svgContent = LOGO_SVGS[key] || LOGO_SVGS['horizontal-light'];
    const canvas = document.createElement('canvas');
    canvas.width = key === 'favicon' ? 64 : key === 'icon-only' ? 240 : 800;
    canvas.height = key === 'favicon' ? 64 : key === 'icon-only' ? 240 : 200;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `${name.toLowerCase().replace(/\s+/g, '-')}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleDownloadBrandKit = () => {
    const a = document.createElement('a');
    a.href = '/CouponsCrew Brand Kit.zip';
    a.download = 'CouponsCrew Brand Kit.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] flex flex-col font-sans selection:bg-[#5C3BCC] selection:text-white">
      {/* Shared Navbar */}
      <Navbar />

      <main className="flex-grow">

        {/* ───────────────────────────────────────────── */}
        {/* HERO SECTION */}
        {/* ───────────────────────────────────────────── */}
        <section className="relative pt-8 pb-16 lg:py-20 overflow-hidden">

          {/* Background Image Container (Fixed 1920x800 crisp rendering) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789311127/branding-hero_mogv7t.webp"
              alt="Branding Hero Background"
              className="w-full h-full object-cover object-center scale-105 filter blur-[0.5px]"
            />
            {/* Soft Ambient Light Tint for Text Clarity */}
            <div className="absolute inset-0 bg-[#0F0F1A]/35 backdrop-blur-[1px]"></div>
          </div>

          {/* Decorative Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5C3BCC]/20 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20 z-10"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none -ml-30 -mb-20 z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

            {/* Breadcrumb & Top Label */}
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-[#FF5722]">Branding</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[#FF5722] text-xs font-bold tracking-widest uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE BRANDING</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
                    Built to Save.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#FFAE33] to-[#FF5722]">
                      Designed to Last.
                    </span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl font-semibold text-white/95 leading-snug drop-shadow-xs">
                    The visual identity behind every deal, discount, and dollar saved on CouponsCrew.
                  </h2>
                </div>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                  CouponsCrew was built on a simple idea: finding a verified deal should take seconds, not tabs. Our design reflects that — clean, fast, and built for people who shop with intent. Every color, typeface, and logo file on this page exists to make that experience consistent across every platform we touch.
                </p>




              </div>


            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* OUR STORY SECTION - REDESIGNED LIGHT V3 */}
        {/* ───────────────────────────────────────────── */}
        <section id="our-story" className="py-24 sm:py-32 bg-white text-[#0F0F1A] border-b border-[#E8E8F0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Story Header & Narrative (Spans 5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] border border-[#5C3BCC]/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#5C3BCC] animate-pulse"></span>
                  OUR STORY
                </span>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F1A] tracking-tight leading-[1.15]">
                  From Discounts to a <span className="text-[#5C3BCC]">Better Tomorrow</span>
                </h2>

                <p className="text-base sm:text-lg text-[#4A4A6A] leading-relaxed font-normal">
                  CouponsCrew started with a simple idea — to make online shopping more affordable and accessible for everyone in India. Today, we're proud to help thousands of shoppers save every day with verified coupons, handpicked deals and real savings.
                </p>


              </div>

              {/* Right Column: Mission, Vision, Values Bento Cards (Spans 7 Cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Mission Card */}
                <div className="bg-[#F4F4F6] rounded-3xl p-8 border border-[#E8E8F0] hover:border-[#5C3BCC]/40 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5C3BCC]/10 text-[#5C3BCC] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold text-[#5C3BCC] tracking-widest uppercase">OUR MISSION</h3>
                    <p className="text-base sm:text-lg font-bold text-[#0F0F1A] leading-snug">
                      Help every shopper save more on every purchase.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="bg-[#F4F4F6] rounded-3xl p-8 border border-[#E8E8F0] hover:border-[#3B82F6]/40 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold text-[#3B82F6] tracking-widest uppercase">OUR VISION</h3>
                    <p className="text-base sm:text-lg font-bold text-[#0F0F1A] leading-snug">
                      Become India's most trusted coupon and deals platform.
                    </p>
                  </div>
                </div>

                {/* Values Card (Spans full width on mobile, spans 2 cols or fits neatly) */}
                <div className="sm:col-span-2 bg-[#F4F4F6] rounded-3xl p-8 border border-[#E8E8F0] hover:border-[#FF5722]/40 hover:shadow-xl transition-all duration-300 space-y-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-[#FF5722] tracking-widest uppercase">OUR VALUES</h3>
                      <p className="text-sm text-[#4A4A6A] font-medium">Core principles guiding our community</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                    {['Trust', 'Transparency', 'Customer First', 'Innovation', 'Community'].map((val, idx) => (
                      <div key={idx} className="bg-white px-3.5 py-2.5 rounded-2xl border border-[#E8E8F0] shadow-xs flex items-center gap-2 text-xs font-bold text-[#0F0F1A]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0" />
                        <span className="truncate">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* COUPONSCREW IN NUMBERS */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-14 bg-gradient-to-r from-[#5C3BCC] to-[#2D2D45] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">CouponsCrew in Numbers</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '10,000+', label: 'Coupons Verified', sub: 'Tested before they go live', icon: ShieldCheck },
                { number: '500+', label: 'Partner Brands', sub: 'From Amazon to Zomato', icon: Building2 },
                { number: '92.4%', label: 'Coupon Success Rate', sub: 'Codes that actually work', icon: TrendingUp },
                { number: '50,000+', label: 'Happy Users', sub: 'Trust Our Platform', icon: Users },
              ].map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FF5722] shrink-0">
                      <StatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">{stat.number}</p>
                      <p className="text-sm font-bold text-white/90 mt-0.5">{stat.label}</p>
                      <p className="text-xs text-white/60 mt-0.5">{stat.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* BRAND COLORS SECTION - CLEAN WHITE BENTO V3 */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-24 sm:py-32 bg-white text-[#0F0F1A] relative overflow-hidden border-b border-[#E8E8F0]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E8F0] pb-10">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] border border-[#5C3BCC]/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#5C3BCC] animate-pulse"></span>
                  DESIGN SYSTEM & PALETTE
                </span>
                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F0F1A]">
                  Brand Colors
                </h2>
                <p className="text-lg text-[#4A4A6A] leading-relaxed font-normal">
                  Colors that carry the weight of trust and action. Designed for maximum accessibility and modern aesthetic consistency.
                </p>
              </div>

            </div>

            {/* Creative Light Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* FEATURED HERO CARD (Primary Color - Spans 7 Cols) */}
              <div className="lg:col-span-7 bg-gradient-to-br from-[#5C3BCC] to-[#45299E] rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

                <div className="flex justify-between items-start relative z-10">
                  <span className="bg-black/15 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-white/15 shadow-sm">
                    Primary Identity
                  </span>
                  <button
                    onClick={() => handleCopyHex(BRAND_COLORS[0].hex)}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all active:scale-95 cursor-pointer border border-white/20 shadow-sm"
                  >
                    {copiedHex === BRAND_COLORS[0].hex ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Copied Hex!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy #{BRAND_COLORS[0].hex}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="my-16 relative z-10 space-y-2">
                  <span className="text-5xl sm:text-7xl font-black font-mono tracking-wider text-white drop-shadow-md">
                    {BRAND_COLORS[0].hex}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold text-white/95">{BRAND_COLORS[0].name}</p>
                  <p className="text-sm text-white/85 max-w-md font-medium leading-relaxed">{BRAND_COLORS[0].desc}</p>
                </div>

                <div className="text-xs font-mono text-white/75 relative z-10 uppercase tracking-widest">
                  Core Brand Anchor • High Contrast
                </div>
              </div>

              {/* SECONDARY SIDE COLUMN (Accents & Dark - Spans 5 Cols) */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                {BRAND_COLORS.slice(1, 3).map((color, idx) => (
                  <div
                    key={idx}
                    className={`rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden shadow-sm border border-[#E8E8F0] transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300 ${color.bgClass}`}
                  >
                    <div className="space-y-1 relative z-10 pr-4">
                      <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${color.textDark ? 'text-[#0F0F1A]' : 'text-white'}`}>
                        {color.hex}
                      </span>
                      <p className={`text-sm font-bold ${color.textDark ? 'text-[#0F0F1A]' : 'text-white'}`}>{color.name}</p>
                      <p className={`text-xs ${color.textDark ? 'text-[#4A4A6A]' : 'text-white/80'}`}>{color.desc}</p>
                    </div>

                    <button
                      onClick={() => handleCopyHex(color.hex)}
                      className={`p-3 rounded-2xl backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-xs flex-shrink-0 ${color.textDark ? 'bg-black/5 hover:bg-black/10 text-[#0F0F1A] border border-black/5' : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
                        }`}
                      title="Copy Hex"
                    >
                      {copiedHex === color.hex ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                ))}
              </div>

            </div>

            {/* BOTTOM ROW (Remaining 3 Colors as Sleek Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BRAND_COLORS.slice(3, 6).map((color, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm border border-[#E8E8F0] group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${color.bgClass}`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${color.textDark ? 'text-[#0F0F1A]' : 'text-white'}`}>
                      {color.hex}
                    </span>
                    <button
                      onClick={() => handleCopyHex(color.hex)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-xs ${color.textDark ? 'bg-black/5 hover:bg-black/10 text-[#0F0F1A] border border-black/5' : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
                        }`}
                    >
                      {copiedHex === color.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="space-y-1">
                    <p className={`text-base font-bold ${color.textDark ? 'text-[#0F0F1A]' : 'text-white'}`}>{color.name}</p>
                    <p className={`text-xs font-medium leading-relaxed ${color.textDark ? 'text-[#4A4A6A]' : 'text-white/80'}`}>{color.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Policy Copy Box (Clean Professional Light Card) */}
            <div className="bg-gradient-to-br from-[#F8F8FC] to-[#F0EEFF]/50 rounded-3xl p-8 sm:p-10 border border-[#E8E8F0] shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#5C3BCC]/5 rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-sm sm:text-base text-[#0F0F1A] leading-relaxed font-semibold relative z-10">
                CouponsCrew's color system is intentional. The primary violet signals clarity and confidence. Savings Amber draws the eye to actions that matter — deals, CTAs, and offer highlights. No person or partner may alter these combinations or substitute alternate colors when representing the CouponsCrew brand in any creative material.
              </p>
              <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed relative z-10 font-medium">
                Supporting design elements may use a wider palette, provided the overall visual output does not dilute or contradict the primary brand identity defined here.
              </p>
            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* BRAND TYPOGRAPHY SECTION */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-[#F4F4F6] border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block">
                TYPOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F1A] tracking-tight">
                Brand Typography
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A6A] leading-relaxed">
                The typeface behind every headline, label, and line of copy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Big Aa Preview */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E8F0] flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase">Primary Font</span>
                  <h3 className="text-4xl sm:text-5xl font-black text-[#0F0F1A] mt-1 font-sans">Inter</h3>
                  <p className="text-xs text-gray-500 mt-1">Our brand uses modern &amp; clean typography.</p>
                </div>

                <div className="text-[#5C3BCC] text-8xl sm:text-9xl font-black select-none tracking-tighter my-4">
                  Aa
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E8E8F0] text-xs font-mono text-[#0F0F1A]">
                  <div className="flex justify-between"><span>Inter Bold (700)</span><span className="font-bold">Headings</span></div>
                  <div className="flex justify-between"><span>Inter SemiBold (600)</span><span className="font-semibold">Subheadings</span></div>
                  <div className="flex justify-between"><span>Inter Regular (400)</span><span className="font-normal">Body &amp; Copy</span></div>
                </div>
              </div>

              {/* Right Column: Character Set & Policy */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E8F0] flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">Full Character Set Display</h4>
                  <div className="bg-[#F4F4F6] rounded-2xl p-6 border border-[#E8E8F0] font-mono text-sm sm:text-base text-[#0F0F1A] leading-relaxed tracking-wider break-all">
                    <p className="font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="mt-2 font-normal">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="mt-2 font-semibold text-[#5C3BCC]">0123456789</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h4 className="text-sm font-bold text-[#0F0F1A]">Font Policy Copy</h4>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed">
                    Inter is used across all CouponsCrew digital surfaces — headings, body copy, UI labels, and metadata. It is open-source and available via Google Fonts. For printed materials or external brand partnerships, Inter must remain the primary typeface. Decorative or alternate fonts are only permitted in contexts where the CouponsCrew wordmark is not present.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* LOGO & ASSET QUICK DOWNLOADS SECTION */}
        {/* ───────────────────────────────────────────── */}
        <section id="downloads" className="py-16 sm:py-20 bg-white border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block">
                DOWNLOADS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F1A] tracking-tight">
                CouponsCrew Logos &amp; Brand Assets — Quick Downloads
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A6A] leading-relaxed">
                Download the right file for every surface.
              </p>
            </div>

            {/* Logo Variants Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Primary Logo (Light)', image: '/Primary Logo (Light).png', bg: 'bg-white', border: 'border-[#E8E8F0]' },
                { name: 'Logo (Dark)', image: '/Logo (Dark).png', bg: 'bg-white', border: 'border-[#E8E8F0]' },
                { name: 'Icon Only', image: '/Icon Only.png', bg: 'bg-white', border: 'border-[#E8E8F0]' },
                { name: 'Wordmark Only', image: '/Wordmark Only.png', bg: 'bg-white', border: 'border-[#E8E8F0]' },
                { name: 'Favicon', image: '/Favicon.png', bg: 'bg-white', border: 'border-[#E8E8F0]' },
              ].map((variant) => (
                <div key={variant.name} className="bg-[#F4F4F6] rounded-2xl border border-[#E8E8F0] overflow-hidden flex flex-col justify-between p-5 space-y-4">

                  {/* Preview Container */}
                  <div className={`h-40 ${variant.bg} ${variant.border} rounded-xl border flex items-center justify-center p-6 transition-transform hover:scale-[1.02]`}>
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Title & Download Button */}
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-[#0F0F1A] text-center">{variant.name}</p>
                    <a
                      href={variant.image}
                      download={variant.name}
                      className="w-full bg-[#F0EEFF] hover:bg-[#5C3BCC] hover:text-white text-[#5C3BCC] text-xs font-bold py-2 rounded-xl border border-[#5C3BCC]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Single Centered Download Button */}
            <div className="flex justify-center pt-4 pb-2">
              <a
                href="/CouponsCrew Brand Kit.zip"
                download="CouponsCrew Brand Kit.zip"
                className="bg-[#FF5722] hover:bg-orange-600 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <Download className="w-5 h-5" />
                <span>Download CouponsCrew Brand Kit</span>
              </a>
            </div>

            {/* Legal Note */}
            <div className="text-xs text-gray-500 bg-[#F4F4F6] p-5 rounded-xl border border-[#E8E8F0] space-y-1">
              <p>
                By downloading or using any CouponsCrew brand asset, you agree to follow the usage guidelines on this page and our Terms of Use. CouponsCrew reserves the right to update or revoke usage permissions at any time. For press inquiries or partnership use, email: <a href="mailto:couponscrew@gmail.com" className="text-[#5C3BCC] font-bold underline">couponscrew@gmail.com</a>
              </p>
            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* USAGE GUIDELINES & DO'S AND DON'TS SECTION */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-[#F4F4F6] border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block">
                RULES &amp; STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F1A] tracking-tight">
                Usage Guidelines
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A6A] leading-relaxed">
                Consistency is how trust is built.
              </p>
            </div>

            {/* Usage Guidelines Text Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] space-y-4 shadow-xs">
              <p className="text-base text-[#0F0F1A] leading-relaxed">
                For placements smaller than 120px wide, use the CouponsCrew icon mark rather than the full wordmark. This preserves legibility and brand clarity at small sizes — a compressed wordmark loses definition and reflects poorly on both the brand and the publisher using it.
              </p>
              <p className="text-base text-[#0F0F1A] leading-relaxed">
                When placing the logo on photography or textured backgrounds, always use the white or dark logo variant, and ensure sufficient clear space around all sides equal to the height of the &quot;C&quot; in CouponsCrew.
              </p>
            </div>

            {/* Do's and Don'ts Header */}
            <div className="space-y-2 pt-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0F1A]">
                Do&apos;s and Don&apos;ts
              </h3>
              <p className="text-sm sm:text-base text-[#4A4A6A]">
                How you use our brand matters — to us and to every shopper who trusts it.
              </p>
            </div>

            {/* Do's & Don'ts Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Do's Card */}
              <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-extrabold text-emerald-900">Please Do</h4>
                </div>

                <ul className="space-y-3.5 text-sm font-medium text-emerald-950">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Use only the logo variants provided on this page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Use the CouponsCrew icon mark when space is tight or the wordmark cannot be reproduced clearly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span>Include the tagline <strong>&quot;Every Deal. Verified.&quot;</strong> wherever the logo is published, except:</span>
                      <ol className="list-decimal list-inside mt-2 space-y-1 text-xs text-emerald-900 font-normal pl-2">
                        <li>Print materials where the tagline reduces below readable size</li>
                        <li>Brand collaboration creatives where only the logo is required</li>
                        <li>Tab/favicon representations of the brand</li>
                      </ol>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Maintain the original aspect ratio of every logo file at all times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Use the approved color combinations defined in the Brand Colors section above</span>
                  </li>
                </ul>
              </div>

              {/* Don'ts Card */}
              <div className="bg-rose-50/60 rounded-3xl p-6 sm:p-8 border border-rose-200 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-extrabold text-rose-900">Please Don&apos;t</h4>
                </div>

                <ul className="space-y-3.5 text-sm font-medium text-rose-950">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Rotate, flip, or alter the direction of the logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Surround the logo with competing visual elements that reduce contrast or legibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Change any color in the logo outside the combinations defined on this page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Use outdated or unofficial versions of the CouponsCrew logo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Publish CouponsCrew brand assets on design portfolio platforms (Dribbble, Behance, etc.) without written permission from the CouponsCrew team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Apply filters, gradients, drop shadows, or watermarks over the logo — partially or fully</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Stretch, squash, or distort the logo in any dimension</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* BRAND ELEMENTS SHOWCASE (INSPIRED BY REFERENCE IMAGE) */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5C3BCC] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block">
                COMPONENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F1A] tracking-tight">
                Brand Elements
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A6A]">
                Key UI elements inspired by our brand design language.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">

              {/* Coupon Ticket */}
              <div className="bg-[#F4F4F6] rounded-2xl p-6 border border-[#E8E8F0] text-center space-y-3">
                <div className="bg-gradient-to-r from-[#5C3BCC] to-[#7C3AED] text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-md inline-block tracking-wider uppercase">
                  SAVE MORE
                </div>
                <p className="text-xs text-gray-500 font-medium">Coupon Ticket</p>
              </div>

              {/* Offer Badge */}
              <div className="bg-[#F4F4F6] rounded-2xl p-6 border border-[#E8E8F0] text-center space-y-3">
                <div className="bg-gradient-to-r from-[#FF5722] to-[#FF5722] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md inline-block">
                  UPTO 80% OFF
                </div>
                <p className="text-xs text-gray-500 font-medium">Offer Badge</p>
              </div>

              {/* Category Chip */}
              <div className="bg-[#F4F4F6] rounded-2xl p-6 border border-[#E8E8F0] text-center space-y-3">
                <div className="bg-[#F0EEFF] text-[#5C3BCC] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#5C3BCC]/20 inline-block">
                  Electronics
                </div>
                <p className="text-xs text-gray-500 font-medium">Category Chip</p>
              </div>

              {/* Deal Card / Verified Pill */}
              <div className="bg-[#F4F4F6] rounded-2xl p-6 border border-[#E8E8F0] text-center space-y-3">
                <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-300 inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Deal Badge</p>
              </div>

            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* CLOSING BRAND STATEMENT */}
        {/* ───────────────────────────────────────────── */}
        <section className="py-16 bg-[#F4F4F6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#5C3BCC] text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-900/30">
              <Sparkles className="w-6 h-6" />
            </div>

            <p className="text-lg sm:text-xl font-medium text-[#0F0F1A] leading-relaxed italic max-w-3xl mx-auto">
              &quot;Design at CouponsCrew is not a department — it is a discipline applied to everything we publish, every deal we verify, and every page a shopper lands on. What you see here is the foundation. It is not static.&quot;
            </p>

            <div className="pt-2 text-sm text-[#4A4A6A] space-y-1">
              <p>For questions about brand usage, partnerships, or media kit requests:</p>
              <p className="font-bold text-[#5C3BCC] flex items-center justify-center gap-2 text-base">
                <Mail className="w-4 h-4" />
                <a href="mailto:couponscrew@gmail.com" className="hover:underline">couponscrew@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────── */}
        {/* BOTTOM CTA BANNER (LIKE REFERENCE MOCKUP) */}
        {/* ───────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#0F0F1A] via-[#2D2D45] to-[#5C3BCC] text-white py-16 lg:py-20 relative overflow-hidden">

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Let&apos;s Build a Smarter <span className="text-[#FF5722]">Shopping Experience</span> Together
              </h2>
              <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Partner with CouponsCrew and reach millions of smart shoppers. Let&apos;s create more savings, more smiles.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/CouponsCrew Brand Kit.zip"
                download="CouponsCrew Brand Kit.zip"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer text-base"
              >
                <Download className="w-5 h-5" />
                <span>Download Media Kit</span>
              </a>
            </div>
          </div>

        </section>

      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
