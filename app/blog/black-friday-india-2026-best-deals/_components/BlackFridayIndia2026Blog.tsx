'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  List,
  Sparkles,
  ShoppingBag,
  ChevronDown,
  Zap,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/black-friday-india-2026-best-deals';
const PAGE_TITLE = 'Black Friday India 2026: Best Deals on Tech, Fashion & More';

const RELATED_POSTS = [
  {
    slug: 'him-science-ranveer-singh-aman-gupta-launch-2026',
    title: "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man",
    category: 'Brand Launch',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794930338/him-science-ranveer-singh-aman-gupta-launch-2026_m0jzzi.webp',
    date: 'Nov 17, 2026',
    readTime: '6 min read',
    excerpt: "Ranveer Singh and boAt co-founder Aman Gupta have launched H.I.M (Handsome Indian Man) — a men's grooming brand with 8 products built specifically for Indian skin, Indian climate, and Indian biology.",
  },
  {
    slug: 'myntra-grand-wedding-sale-2026',
    title: 'Myntra Grand Wedding Sale 2026: Shaadi Season Ke Liye Best Deals — Up to 80% OFF on Lehengas, Sherwanis & More',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794759670/Myntra_Grand_Wedding_Sale_so8s5g.webp',
    date: 'Nov 15, 2026',
    readTime: '7 min read',
    excerpt: "Myntra Grand Wedding Sale is live with up to 80% OFF on lehengas, sherwanis, sarees, and wedding accessories. Plus, flat ₹300 OFF on your first app purchase.",
  },
  {
    slug: 'bhai-dooj-2026-best-gift-ideas',
    title: 'Bhai Dooj 2026: Best Gift Ideas for Brothers & Sisters — Watches, Perfumes & More',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794196720/Bhai_Dooj_2026_Festive_Celebration_ss93tl.webp',
    date: 'Nov 9, 2026',
    readTime: '9 min read',
    excerpt: 'Bhai Dooj 2026 is on 11 November. Best gift ideas for brothers and sisters — watches, perfumes, skincare, gadgets and more.',
  },
];

const FAQS = [
  {
    q: 'When is Black Friday 2026 in India?',
    a: 'Black Friday 2026 falls on November 27. Most Indian platforms like Amazon and Flipkart start their Black Friday sales a few days before — usually from November 23–24.',
  },
  {
    q: 'Which apps give the best Black Friday deals in India?',
    a: "Amazon India and Flipkart lead Black Friday deals in India. For fashion, Myntra and AJIO run deep discounts. For web hosting, Hostinger's Black Friday sale is one of the best of the year. Sports brands like Puma, Adidas, and Nike also run sitewide sales.",
  },
  {
    q: 'Is Black Friday sale real in India or just marketing?',
    a: 'Black Friday deals in India are real for select categories — especially smartphones, laptops, web hosting, and international fashion brands. Some deals match or beat Diwali sale prices. Always compare using price-track tools before buying.',
  },
  {
    q: "Does Hostinger have a Black Friday sale in 2026?",
    a: "Yes. Hostinger's Black Friday sale is one of the year's biggest discounts on web hosting plans. Expect up to 85% off on shared hosting and premium plans. The sale typically starts a few days before November 27.",
  },
  {
    q: 'What is the difference between Black Friday and Cyber Monday?',
    a: 'Black Friday (November 27) focuses on tech, electronics, fashion, and consumer products. Cyber Monday (November 30) skews toward digital products — web hosting, software, SaaS tools, and online subscriptions. Both are worth watching in India now.',
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'quick-reference', label: 'Quick Reference: Sale Dates & Discounts' },
  { id: 'phones-laptops', label: 'Phones & Laptops' },
  { id: 'fashion-footwear', label: 'Fashion & Footwear' },
  { id: 'hostinger', label: 'Hostinger Black Friday 2026' },
  { id: 'beauty', label: 'Beauty & Skincare: Nykaa' },
  { id: 'eyewear', label: 'Eyewear: Lenskart' },
  { id: 'survival-guide', label: 'Shopping Survival Guide' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

const SALE_TABLE = [
  { platform: 'Amazon India', starts: '~Nov 23', category: 'Phones, Laptops, TVs', discount: 'Up to 70% off' },
  { platform: 'Flipkart', starts: '~Nov 23', category: 'Phones, Appliances', discount: 'Up to 80% off' },
  { platform: 'Myntra', starts: '~Nov 24', category: 'Fashion, Footwear', discount: 'Up to 70% off' },
  { platform: 'AJIO', starts: '~Nov 24', category: 'Western Wear, Brands', discount: 'Up to 80% off' },
  { platform: 'Hostinger', starts: '~Nov 20', category: 'Web Hosting Plans', discount: 'Up to 85% off' },
  { platform: 'Puma', starts: '~Nov 27', category: 'Shoes, Apparel', discount: 'Up to 50% off' },
  { platform: 'Adidas', starts: '~Nov 27', category: 'Shoes, Sportswear', discount: 'Up to 40% off' },
  { platform: 'Nike', starts: '~Nov 27', category: 'Running, Training', discount: 'Up to 40% off' },
  { platform: "Levi's", starts: '~Nov 27', category: 'Jeans, Jackets', discount: 'Up to 50% off' },
  { platform: 'Nykaa', starts: '~Nov 24', category: 'Beauty, Skincare', discount: 'Up to 50% off' },
];

export default function BlackFridayIndia2026Blog() {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAGE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap select-none">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-semibold truncate">Black Friday India 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* MAIN ARTICLE */}
            <article className="lg:col-span-8 space-y-8">

              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Tag size={13} className="text-[#FF5722]" />
                    Festival Deals
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                    <Sparkles size={12} className="text-amber-600" />
                    November 27, 2026
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] leading-tight tracking-tight">
                  Black Friday India 2026: Best Deals on Tech, Fashion &amp; More
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1 border-b border-[#E8E8F0] pb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 24, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>8 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100 group">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795539520/Black_Friday_India_2026_Deals_pnubzc.webp"
                  alt="Black Friday India 2026: Best Deals on Tech, Fashion & More"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Intro Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFAFF] to-[#FFF2EA] rounded-3xl p-6 sm:p-8 border border-orange-100/80 shadow-md border-l-4 border-l-[#FF5722] space-y-5">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#5B4FBE]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#FF5722]/10 border border-[#FF5722]/20 px-3.5 py-1 rounded-full text-lg sm:text-xl font-black text-[#1A1A2E] italic tracking-tight shadow-xs">
                    <Sparkles size={16} className="text-[#FF5722]" />
                    Black Friday is Thursday.
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#1A1A2E] font-extrabold leading-snug tracking-tight border-b border-[#E8E8F0]/80 pb-3">
                  The biggest sale of the year — and the deals are already dropping.
                </p>
                <div className="space-y-3.5 text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  <p>
                    <strong className="text-[#5B4FBE] font-bold">Black Friday 2026 is on November 27 — this Thursday.</strong> Amazon India and Flipkart both drop early deals from around November 23, so by the time the actual day hits, you&apos;re already 4 days into the sale. Upgrading a phone, buying that laptop you&apos;ve been holding off on, or finally signing up for a hosting plan — this is your week.
                  </p>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-xs">
                    <p>
                      This guide covers where the real deals are — tech, fashion, hosting, beauty, and eyewear — with direct links to verified coupon codes on each platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#E8E8F0] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-[#1A1A2E] text-sm mb-3">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>In This Black Friday Guide</span>
                </div>
                <ul className="space-y-2 text-xs">
                  {TABLE_OF_CONTENTS.map((item, idx) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex items-center gap-2 text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors py-1">
                        <span className="w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 1: Quick Reference Table */}
              <section id="quick-reference" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    📅
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Quick Reference: Black Friday 2026 Sale Dates &amp; Discounts
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0]">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Platform</th>
                        <th className="p-4 sm:px-6">Sale Starts</th>
                        <th className="p-4 sm:px-6">Best Category</th>
                        <th className="p-4 sm:px-6">Discount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      {SALE_TABLE.map((row, i) => (
                        <tr key={row.platform} className={i % 2 === 0 ? 'bg-white hover:bg-[#FAF9FF] transition-colors' : 'bg-[#F8F8FF] hover:bg-[#FAF9FF] transition-colors'}>
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">{row.platform}</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">{row.starts}</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">{row.category}</td>
                          <td className="p-4 sm:px-6 font-bold text-[#FF5722]">{row.discount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F0EEFF]/60 border border-[#5B4FBE]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
                  All live deals updated in real time:{' '}
                  <Link href="/festival-offers/black-friday-offers" className="font-bold text-[#5B4FBE] hover:underline">CouponsCrew Black Friday Offers →</Link>
                </div>
              </section>

              {/* SECTION 2: Phones & Laptops */}
              <section id="phones-laptops" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    📱
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Phones &amp; Laptops: Where Black Friday Actually Delivers
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  This is where Black Friday earns its reputation in India. Many buyers specifically plan their annual gadget upgrades around this five-day window, waiting for the lowest prices of the year.
                </p>

                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                    <h3 className="text-base sm:text-lg font-black text-[#1A1A2E]">Smartphones</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                      <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon India</Link> and{' '}
                      <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart</Link> are the two platforms to watch. Amazon India typically offers up to 70% off during Black Friday week. Realistically, the most reliable cuts are on mid-range phones — Samsung, OnePlus, Xiaomi in the ₹15,000–₹35,000 range see ₹2,000 to ₹5,000 off. Flagships see smaller percentage drops but meaningful absolute savings given the price point.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                    <h3 className="text-base sm:text-lg font-black text-[#1A1A2E]">Laptops &amp; TVs</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                      Laptops and large-screen TVs are Black Friday staples on both platforms. Gaming laptops — especially MSI, ASUS ROG, and Acer Nitro — tend to see the sharpest cuts on Flipkart. For Sony BRAVIA, Samsung QLED, and LG OLED TVs, Amazon India runs dedicated home entertainment deals through the sale window.
                    </p>
                  </div>

                  <div className="bg-[#FAF9FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
                      <CheckCircle2 size={14} className="text-[#5B4FBE]" />
                      <span>How to Get the Best Price</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4A4A6A] font-medium">
                      {[
                        'Track prices for 7–10 days before the sale (SmartPrix or 91Mobiles work well)',
                        'Stack bank card offers — HDFC, Axis, and Bank of Baroda cashbacks are typically active',
                        'Always check both Amazon and Flipkart before confirming — same SKU, often different prices',
                      ].map((tip) => (
                        <li key={tip} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E8E8F0]">
                          <span className="text-[#5B4FBE] font-bold mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <Link href="/stores/amazon-coupon-code" className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4FBE] font-bold px-4 py-2 rounded-xl hover:bg-[#E3DFFF] transition-colors shadow-2xs text-xs">
                    Amazon Coupons
                  </Link>
                  <Link href="/stores/flipkart-coupon-code" className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4FBE] font-bold px-4 py-2 rounded-xl hover:bg-[#E3DFFF] transition-colors shadow-2xs text-xs">
                    Flipkart Coupons
                  </Link>
                </div>
              </section>

              {/* SECTION 3: Fashion & Footwear */}
              <section id="fashion-footwear" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    👟
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Fashion &amp; Footwear: Puma, Adidas, Nike, Levi&apos;s, Myntra, AJIO
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  Black Friday is the one time international sports and fashion brands actually discount their India catalogues meaningfully — not 10% off one item, but 30–50% sitewide.
                </p>

                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                    <h3 className="text-base sm:text-lg font-black text-[#1A1A2E]">Sports Brands</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                      <Link href="/stores/puma-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Puma India</Link> and{' '}
                      <Link href="/stores/adidas-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Adidas India</Link> both run sitewide Black Friday sales, starting on or just before November 27. Running shoes, training gear, tracksuits — if you&apos;ve had something on your wishlist since the festive season, buy it now.{' '}
                      <Link href="/stores/nike-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nike India</Link> runs similar cuts through its own site and also on Myntra and AJIO.
                    </p>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                      <Link href="/stores/levis-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Levi&apos;s India</Link> goes up to 50% off on jeans, denim jackets, and shirts. One of their better discounts outside of their own season-end sales.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#F9F8FF] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                    <h3 className="text-base sm:text-lg font-black text-[#1A1A2E]">Myntra &amp; AJIO</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
                      <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra&apos;s Black Friday sale</Link> covers western wear, footwear, handbags, and accessories from hundreds of brands.{' '}
                      <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">AJIO</Link> tends to go harder on international brand labels and its own AJIO-label items — up to 80% in some categories.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/stores/puma-coupon-code', label: 'Puma Coupons' },
                    { href: '/stores/adidas-coupon-code', label: 'Adidas Coupons' },
                    { href: '/stores/nike-coupon-code', label: 'Nike Coupons' },
                    { href: '/stores/myntra-coupon-code', label: 'Myntra Coupons' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4FBE] font-bold px-4 py-2 rounded-xl hover:bg-[#E3DFFF] transition-colors shadow-2xs text-xs">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* SECTION 4: Hostinger */}
              <section id="hostinger" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    🌐
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Hostinger Black Friday 2026: Don&apos;t Miss This One
                  </h2>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-r from-[#F0EEFF]/70 via-[#FAF9FF] to-[#FFF9F5] rounded-2xl p-4 sm:p-5 border border-[#5B4FBE]/20 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#5B4FBE] font-bold text-xs uppercase tracking-wider">
                    <Zap size={14} className="text-[#FF5722]" />
                    <span>Best Hosting Deal of the Year</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1A1A2E] font-semibold leading-relaxed">
                    If you&apos;ve been sitting on the idea of starting a website, blog, or online store — this is the sale to act on.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  <Link href="/stores/hostinger-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Hostinger India</Link> typically offers up to 85% off on shared hosting plans during Black Friday week, bundled with a free domain and free SSL. The sale usually starts before November 27 and runs through Cyber Monday on November 30. Premium and business plans see big cuts too — if you&apos;ve been on a basic plan and thinking about upgrading, this is the window.
                </p>

                <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
                  👉 <Link href="/stores/hostinger-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Hostinger coupon codes</Link> — apply before checkout to stack on top of the Black Friday discount.
                </div>
              </section>

              {/* SECTION 5: Beauty */}
              <section id="beauty" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    💄
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Beauty &amp; Skincare: Nykaa Black Friday Sale
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa&apos;s Black Friday sale</Link> covers Indian and international beauty brands — skincare, haircare, makeup, and wellness supplements. Expect 30–50% off across categories, with additional bank card discounts layered on top. Korean skincare brands and premium serum ranges tend to see the sharpest price cuts during this window.
                </p>

                <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
                  👉 <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa coupon codes</Link> — check for active bank offers and promo codes.
                </div>
              </section>

              {/* SECTION 6: Eyewear */}
              <section id="eyewear" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    👓
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Eyewear: Lenskart Black Friday Offers
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
                  <Link href="/stores/lenskart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Lenskart</Link> runs flat discounts and Buy 1 Get 1 offers on frames and prescription glasses during Black Friday week. Worth checking if you&apos;ve been holding off on a new pair.
                </p>

                <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
                  👉 <Link href="/stores/lenskart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Lenskart coupon codes</Link> — stack with the BOGO offer for maximum savings.
                </div>
              </section>

              {/* SECTION 7: Survival Guide */}
              <section id="survival-guide" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    🛒
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
                    Black Friday Shopping Survival Guide
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      rule: 'Start before November 27.',
                      detail: 'Amazon and Flipkart drop early deals from around November 23. Limited-size footwear, specific phone variants, and hot-selling laptops go fast — often before the actual Friday arrives.',
                      num: '01',
                    },
                    {
                      rule: 'Always use bank card offers.',
                      detail: 'HDFC, Axis, and Bank of Baroda cashbacks are typically active during this period. On a ₹50,000 laptop, that extra 10% is ₹5,000 back.',
                      num: '02',
                    },
                    {
                      rule: 'Compare across platforms.',
                      detail: 'Amazon India and Flipkart compete directly during Black Friday. The same phone or laptop often has different prices on each platform on the same day — always check both.',
                      num: '03',
                    },
                    {
                      rule: "Know what's actually worth buying.",
                      detail: "Electronics, international fashion brands, sports footwear, web hosting, and beauty all see genuine cuts. Groceries, furniture, and Indian ethnic wear don't. Don't get swept up buying things just because they have a 'Black Friday' tag.",
                      num: '04',
                    },
                    {
                      rule: 'Cyber Monday follows on November 30.',
                      detail: 'If you miss a deal, Cyber Monday three days later tends to focus on software, SaaS tools, and digital subscriptions. Some hosting deals also carry over or improve by then.',
                      num: '05',
                      link: { href: '/festival-offers/cyber-monday-offers', label: 'Cyber Monday offers' },
                    },
                  ].map((item) => (
                    <div key={item.rule} className="relative overflow-hidden bg-gradient-to-r from-[#FFF5F2] via-[#FFF9F5] to-white border border-[#FF5722]/20 rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#FF5722]/40 transition-colors">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-black text-[#1A1A2E] text-sm sm:text-base tracking-tight">{item.rule}</p>
                        <span className="text-xs font-black text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 rounded-full shrink-0">{item.num}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium">
                        {item.detail}
                        {item.link && (
                          <>{' '}<Link href={item.link.href} className="font-bold text-[#5B4FBE] hover:underline">{item.link.label}</Link>.</>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Black Friday Offers Hub CTA */}
              <div className="bg-gradient-to-r from-[#5B4FBE]/5 via-orange-500/5 to-transparent border border-[#5B4FBE]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#5B4FBE] uppercase tracking-wider block">🏷️ All Deals in One Place</span>
                  <h3 className="font-extrabold text-[#1A1A2E] text-base mt-0.5">Live Black Friday 2026 Coupon Codes</h3>
                  <p className="text-xs text-gray-500 mt-1">Verified codes across Amazon, Flipkart, Myntra, Hostinger, Puma, Nykaa & more — updated as deals drop.</p>
                </div>
                <Link
                  href="/festival-offers/black-friday-offers"
                  className="inline-flex items-center gap-2 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4d42a6] transition-colors shrink-0 shadow-sm"
                >
                  <span>Black Friday Offers 2026</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* SECTION 8: FAQs */}
              <section id="faqs" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl shrink-0">
                    ❓
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Black Friday India 2026: FAQ
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1A1A2E] hover:bg-[#FAF9FF] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#5B4FBE]' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4A4A6A] leading-relaxed border-t border-[#F0EEFF] pt-3 bg-[#FAF9FF]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Closing Callout */}
              <div className="bg-gradient-to-br from-[#1A1A2E] via-[#5B4FBE] to-[#FF5722] rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
                <h3 className="text-xl sm:text-2xl font-black leading-snug italic">
                  Black Friday is one week. The deals are live.
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                  Deals go live fast and stock runs out faster. Bookmark CouponsCrew&apos;s Black Friday Offers page — we update it in real time as deals drop.
                </p>
                <div className="pt-2">
                  <Link
                    href="/festival-offers/black-friday-offers"
                    className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-extrabold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <span>Explore Black Friday Offers</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Share Bar */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E8F0] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A2E]">
                  <Share2 size={16} className="text-[#5B4FBE]" />
                  <span>Share this guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E8E8F0] text-xs font-semibold hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                  >
                    {copied ? <Check size={13} className="text-emerald-600" /> : <Link2 size={13} />}
                    <span>{copied ? 'Copied' : 'Copy Link'}</span>
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(PAGE_TITLE)}&url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on X"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-[#E8E8F0] hover:bg-gray-50 text-[#1A1A2E] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Table of Contents Desktop */}
              <div className="hidden lg:block bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm sticky top-24">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E8E8F0] font-extrabold text-[#1A1A2E] text-sm">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="mt-4 space-y-2.5">
                  {TABLE_OF_CONTENTS.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2.5 text-xs text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors py-1"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#F0EEFF] group-hover:bg-[#5B4FBE] group-hover:text-white text-[#5B4FBE] font-bold text-[10px] flex items-center justify-center shrink-0 transition-colors">
                        {idx + 1}
                      </span>
                      <span className="leading-snug pt-0.5">{item.label}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-[#E8E8F0] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A2E]">
                    <Tag size={16} className="text-orange-500" />
                    <span>Verified Black Friday Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    All sale recommendations are manually checked against live store prices across Amazon, Flipkart, Myntra, Hostinger &amp; more.
                  </p>
                </div>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E8E8F0]">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Related Guides</h3>
                  <Link href="/blog" className="text-xs font-bold text-[#5B4FBE] hover:underline">View All</Link>
                </div>

                <div className="space-y-4">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-3 items-start p-2 rounded-2xl hover:bg-[#F8F8FF] transition-all"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E8E8F0]">
                        <NextImage src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#5B4FBE] uppercase">{post.category}</span>
                        <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors line-clamp-2 leading-snug">{post.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CouponsCrew Banner Widget */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white shadow-md relative overflow-hidden space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-yellow-300" />
                </div>
                <h3 className="font-black text-lg text-white leading-snug">
                  Save Extra With Verified Coupon Codes
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Stack Black Friday prices with verified coupons on Amazon, Flipkart, Myntra, Hostinger, Puma &amp; Nykaa.
                </p>
                <Link
                  href="/festival-offers/black-friday-offers"
                  className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2"
                >
                  <span>View Black Friday Deals</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </main>

      {/* Read More Section */}
      <section className="py-12 sm:py-16 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest block mb-1">EXPLORE MORE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]">Read More Blogs</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Discover more money-saving tips, shopping guides and exclusive deal updates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((blog) => (
              <div key={blog.slug} className="bg-white border border-[#E8E8F0] rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <NextImage src={blog.image} alt={blog.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A1A2E] leading-snug">{blog.title}</h3>
                    <p className="text-xs text-[#4A4A6A] line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                  </div>
                  <div className="pt-4 border-t border-[#E8E8F0] flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={13} className="text-gray-400" />{blog.date}</span>
                      <span className="flex items-center gap-1"><Clock size={13} className="text-gray-400" />{blog.readTime}</span>
                    </div>
                    <Link href={`/blog/${blog.slug}`} className="text-[#5B4FBE] font-bold hover:underline flex items-center gap-1">
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-bold hover:bg-[#5B4FBE] hover:text-white transition-colors">
              <span>View All Blogs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
