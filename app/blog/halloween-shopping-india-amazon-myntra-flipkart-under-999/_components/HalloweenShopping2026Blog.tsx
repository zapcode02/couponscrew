'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Zap,
  Clock,
  CheckCircle2,
  Palette,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  List,
  Sparkles,
  Home,
  ShoppingBag,
  ChevronDown,
  Ghost,
  ShoppingCart,
  Pizza,
  Skull,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/halloween-shopping-india-amazon-myntra-flipkart-under-999';
const PAGE_TITLE = 'Halloween Shopping in India: Amazon, Myntra & Flipkart Best Picks Under ₹999';

const RELATED_POSTS = [
  {
    slug: 'karwa-chauth-2026-shopping-guide',
    title: 'Karwa Chauth 2026 Shopping Guide: Best Sarees, Makeup & Jewellery Deals',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1792836858/karwa-chauth-2026-shopping-guide_ajy07h.webp',
    date: 'Oct 24, 2026',
    readTime: '7 min read',
    excerpt: 'Karwa Chauth is on Thursday, 29 October. Get the best deals on sarees, makeup, and jewellery from Myntra, Nykaa, Polki Sarees, and more — with coupons.',
  },
  {
    slug: 'dussehra-shopping-guide-what-to-buy-where-to-save-2026',
    title: 'Dussehra Shopping Guide 2026: What to Buy & Where to Save',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1792237484/dussehra-shopping-guide-what-to-buy-where-to-save-2026_khbxak.webp',
    date: 'Oct 17, 2026',
    readTime: '8 min read',
    excerpt: 'Dussehra is on October 20 — and the sales are live. Get the full guide on ethnic wear, home decor, pooja essentials, and gifts, with the best deals across Amazon, Myntra, Ajio, and more.',
  },
  {
    slug: 'navratri-2026-colours-outfit-deals',
    title: 'Navratri 2026 Colours: Outfit Deals for All Nine Days',
    category: 'Fashion',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791728627/Navratri_2026_Colours_and_Outfit_Deals_k0hl00.webp',
    date: 'Oct 11, 2026',
    readTime: '8 min read',
    excerpt: 'Navratri 2026 colours for all nine days, 11 to 19 October, with outfit ideas, a 4-piece plan to wear all nine colours, and where to shop sale deals in time.',
  },
];

const FAQS = [
  {
    q: 'Can I get Halloween costumes delivered by October 31 in India?',
    a: 'Yes — Amazon Prime and Myntra offer same-day or next-day delivery in major cities. Order before noon on 30 October for the best chance of receiving it in time.',
  },
  {
    q: 'Is Halloween celebrated in India?',
    a: 'Increasingly yes — especially in metro cities among college students, young professionals, and schools. Restaurants, clubs, and parties in cities like Mumbai, Delhi, Bangalore, and Pune actively host Halloween events.',
  },
  {
    q: 'Where do I find the cheapest Halloween costumes online in India?',
    aNode: (
      <>
        Flipkart and Amazon tend to have the lowest price points. Searching for &quot;Halloween costume under 500&quot; or &quot;Halloween costume under 999&quot; on both platforms filters well.{' '}
        <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link>{' '}
        and{' '}
        <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart coupon codes</Link>{' '}
        can bring prices down further.
      </>
    ),
  },
  {
    q: "What are good last-minute Halloween ideas that don't need a costume?",
    a: 'DIY face paint (all-white base + dark eyes), a vampire collar with black clothes, or a witchy all-black outfit with dramatic jewellery. All achievable in under 30 minutes with stuff you may already own or can order on Zepto in minutes.',
  },
  {
    q: 'Does Nykaa have Halloween-specific makeup products?',
    aNode: (
      <>
        Nykaa carries face paint, liquid latex, dark eyeshadow palettes, and setting sprays that work well for Halloween looks — not always labelled &quot;Halloween&quot; but the products are the same. Check{' '}
        <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa coupon codes</Link>{' '}
        for any active discount.
      </>
    ),
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'not-just-western', label: "Why Halloween Isn't Just Western Anymore" },
  { id: 'where-to-shop', label: 'Where to Shop Halloween Stuff' },
  { id: 'nykaa-makeup', label: 'Nykaa — Face Paint & Makeup' },
  { id: 'ajio-looks', label: 'AJIO — Full Halloween Looks' },
  { id: 'party-food', label: "Don't Forget the Party Food" },
  { id: 'cheat-sheet', label: 'Quick Shopping Cheat Sheet' },
  { id: 'budget-rules', label: 'Three Budget Halloween Rules' },
  { id: 'faqs', label: 'Frequently Asked Questions' },
];

export default function HalloweenShopping2026Blog() {
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

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap select-none">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-semibold truncate">Halloween Shopping in India</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Ghost size={13} className="text-[#FF5722]" />
                    Festive Guide
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
                    <Sparkles size={12} className="text-amber-600" />
                    31 October 2026
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A2E] leading-tight tracking-tight">
                  Halloween Shopping in India: Amazon, Myntra &amp; Flipkart Best Picks Under ₹999
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1 border-b border-[#E8E8F0] pb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 30, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>7 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100 group">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1793376959/Halloween_Shopping_in_India_f1otc2.webp"
                  alt="Halloween Shopping in India: Amazon, Myntra & Flipkart Best Picks Under ₹999"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Intro Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFAFF] to-[#FFF2EA] rounded-3xl p-6 sm:p-8 border border-orange-100/80 shadow-md border-l-4 border-l-[#FF5722] space-y-5 group transition-all duration-300 hover:shadow-lg">
  {/* Ambient Background Glow Effects */}
  <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#5B4FBE]/10 rounded-full blur-2xl pointer-events-none" />

  {/* Catchy Sub-heading / Hook Header */}
  <div className="flex items-center gap-2 flex-wrap">
    <span className="inline-flex items-center gap-1.5 bg-[#FF5722]/10 border border-[#FF5722]/20 px-3.5 py-1 rounded-full text-lg sm:text-xl font-black text-[#1A1A2E] italic tracking-tight shadow-xs">
      <Sparkles size={16} className="text-[#FF5722]" />
      The Haunt is Beginning.
    </span>
  </div>

  {/* Subtitle Line */}
  <p className="text-base sm:text-lg text-[#1A1A2E] font-extrabold leading-snug tracking-tight border-b border-[#E8E8F0]/80 pb-3">
    The season to spend — but don&apos;t let your wallet haunt you.
  </p>

  {/* Paragraphs with Improved Paragraph Spacing & Highlights */}
  <div className="space-y-3.5 text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    <p>
      Halloween lands on <strong className="text-[#5B4FBE] font-bold underline decoration-[#5B4FBE]/30 underline-offset-4">31 October 2026</strong>. And if you&apos;re still scrolling for a costume at 9 PM tonight, congratulations, you are statistically the most Indian person in this story.
    </p>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-xs space-y-2">
      <p>
        But here&apos;s the good news: Amazon, Myntra, and Flipkart are stacked right now. Costumes, face paint, spooky decor, party lights — most of it under ₹999. You don&apos;t need a big budget to walk into a room and make everyone go <em className="text-[#FF5722] font-semibold not-italic">&quot;oh damn.&quot;</em>
      </p>
    </div>

    <p className="text-[#1A1A2E] font-semibold pt-1 flex items-center gap-2">
      <Ghost size={16} className="text-[#5B4FBE] shrink-0" />
      <span>This guide is for last-minute shoppers, budget-first buyers, and anyone who typed &quot;Halloween costume India&quot; into a search bar with mild panic.</span>
    </p>
  </div>
</div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#E8E8F0] shadow-xs">
                <div className="flex items-center gap-2 font-bold text-[#1A1A2E] text-sm mb-3">
                  <List size={16} className="text-[#5B4FBE]" />
                  <span>In This Halloween Shopping Guide</span>
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

              {/* SECTION 1: Why Halloween Is No Longer "Just a Western Thing" */}
              
<section id="not-just-western" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Heading */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-[#FFF0EA] text-[#FF5722] flex items-center justify-center font-black text-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      👻
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Why Halloween Is No Longer &quot;Just a Western Thing&quot;
    </h2>
  </div>

  {/* Highlight Quote Card */}
  <div className="relative pl-5 py-3.5 border-l-4 border-[#FF5722] bg-gradient-to-r from-[#FFF9F5] to-white rounded-r-2xl italic text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed shadow-xs space-y-1">
    <p>&ldquo;Are we really celebrating Halloween in India?&rdquo;</p>
    <p className="text-xs sm:text-sm text-gray-500 not-italic font-normal">
      — Someone, every year, while wearing a ghost filter on Instagram.
    </p>
  </div>

  {/* Main Paragraph Content */}
  <div className="space-y-4 text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    <p className="text-[#1A1A2E] font-bold text-base sm:text-lg">
      Yes, bhai. We are.
    </p>

    <p>
      Halloween in India has quietly gone from &quot;niche college party thing&quot; to mainstream retail event. Metros like Mumbai, Delhi, Bangalore, Hyderabad — bars, clubs, cafes, schools, and housing societies are all going all-in. Bigbasket reportedly clocked a massive spike in Halloween-related orders this year. Myntra added a dedicated Halloween edit. Amazon India&apos;s Halloween category has been live for weeks.
    </p>

    <div className="bg-[#FAF9FF] border border-[#5B4FBE]/15 rounded-2xl p-4 text-[#1A1A2E] font-bold text-sm sm:text-base shadow-xs">
      The culture landed. The products followed. Now the deals are here.
    </div>
  </div>
</section>
              {/* SECTION 2: Where to Shop Halloween Stuff */}
              <section id="where-to-shop" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Main Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      <ShoppingCart size={22} />
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Where to Shop Halloween Stuff in India Right Now
    </h2>
  </div>

  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    Let&apos;s break this down by platform — what each one does well, and what you should actually buy there.
  </p>

  {/* Platform Subsections Grid / Stack */}
  <div className="space-y-6">
    {/* Amazon Subsection */}
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#FF5722]/30 transition-colors">
      <div className="flex flex-col space-y-1">
        <h3 className="text-base sm:text-lg font-black text-[#1A1A2E] tracking-tight flex items-center gap-2">
          Amazon India — The Widest Selection, Fastest Delivery
        </h3>
        <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
          &quot;The place where you find everything weird at 2 AM.&quot;
        </p>
      </div>

      <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Amazon India carries the broadest range of Halloween products — full costumes, props, LED string lights, pumpkin cutouts, fake spiderwebs, glow-in-the-dark face paint, and more. The advantage here is Prime delivery — if you order in the next few hours, some pincode might still pull off a same-day or next-morning drop.
      </p>

      <div className="bg-white/80 rounded-xl p-4 border border-[#E8E8F0]/80 space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold text-[#1A1A2E] tracking-wide uppercase">Under ₹999 picks to look for:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A4A6A] font-medium">
          {[
            'Skeleton print full-suit jumpsuit (unisex)',
            'LED pumpkin string lights for room decor',
            'Witch hat + cape combo sets',
            'Fake blood + face paint kits',
            'Spooky garland and hanging props',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 bg-[#FAF9FF] p-2 rounded-lg border border-[#F0EEFF]">
              <span className="text-[#FF5722] font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3 text-xs sm:text-sm text-[#4A4A6A] font-medium">
        👉 Save more with <Link href="/stores/amazon-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Amazon coupon codes</Link> before checkout — bank offers on select cards can knock off another ₹50–₹100.
      </div>
    </div>

    {/* Myntra Subsection */}
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FAF9FF] via-white to-[#F9F8FF] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#5B4FBE]/30 transition-colors">
      <div className="flex flex-col space-y-1">
        <h3 className="text-base sm:text-lg font-black text-[#1A1A2E] tracking-tight">
          Myntra — Best for Wearable Costumes &amp; Accessories
        </h3>
        <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
          &quot;Because showing up in a ₹800 outfit and still looking fire is a skill.&quot;
        </p>
      </div>

      <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Myntra&apos;s Halloween edit this year has some genuinely solid picks — especially if you want something that looks like an actual costume and not a plastic bag with eyeholes. Think:
      </p>

      <ul className="space-y-2 text-xs sm:text-sm text-[#4A4A6A] font-medium">
        {[
          'Cape + mask combos',
          'Devil horns + tail accessories',
          'Black mesh party dresses (Halloween or regular, your call)',
          'Printed Halloween tees for casual observers who "don\'t really do costumes"',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E8E8F0]/80">
            <span className="text-[#FF5722] font-bold mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
        The advantage of Myntra is fit, finish, and return policy. If the costume looks terrible when it arrives (we&apos;ve all been there), you can return it without drama.
      </p>

      <div className="bg-[#F0EEFF]/60 border border-[#5B4FBE]/20 rounded-xl p-3 text-xs sm:text-sm text-[#4A4A6A] font-medium">
        👉 <Link href="/stores/myntra-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Myntra coupon codes</Link> are currently active — check before you add to cart.
      </div>
    </div>

    {/* Flipkart Subsection */}
    <div className="relative overflow-hidden bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs hover:border-[#FF5722]/30 transition-colors">
      <div className="flex flex-col space-y-1">
        <h3 className="text-base sm:text-lg font-black text-[#1A1A2E] tracking-tight">
          Flipkart — Budget-First Finds &amp; Home Decor
        </h3>
        <p className="italic font-bold text-[#FF5722] text-sm sm:text-base">
          &quot;For when you need the whole vibe, not just the outfit.&quot;
        </p>
      </div>

      <p className="text-sm text-[#4A4A6A] leading-relaxed font-medium">
        Flipkart tends to win on price for prop-heavy and decor-heavy Halloween shopping. If you&apos;re setting up a room for a party — lights, fake skulls, spooky tablecloths, pumpkin lanterns — Flipkart has the widest assortment at the lowest price points.
      </p>

      <div className="bg-white/80 rounded-xl p-4 border border-[#E8E8F0]/80 space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold text-[#1A1A2E] tracking-wide uppercase">Under ₹999 decor picks:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A4A6A] font-medium">
          {[
            '3D pumpkin paper lanterns',
            'Ghost and bat window stickers',
            'Halloween-themed fairy lights (purple + orange)',
            'Skeleton wall hangings',
            'Halloween balloon packs',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 bg-[#FAF9FF] p-2 rounded-lg border border-[#F0EEFF]">
              <span className="text-[#FF5722] font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3 text-xs sm:text-sm text-[#4A4A6A] font-medium">
        👉 Don&apos;t forget to check <Link href="/stores/flipkart-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Flipkart coupon codes</Link> — Big Billion Day residual deals are still floating around on some categories.
      </div>
    </div>
  </div>
</section>

              {/* SECTION 3: Nykaa */}
              <section id="nykaa-makeup" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      💄
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Nykaa — For the Face Paint &amp; Makeup Moment
    </h2>
  </div>

  {/* Main Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    The most underrated Halloween move: skip the full costume and just do the face.
  </p>

  {/* Featured Value Card */}
  <div className="relative overflow-hidden bg-gradient-to-r from-[#F0EEFF]/70 via-[#FAF9FF] to-[#FFF9F5] rounded-2xl p-4 sm:p-5 border border-[#5B4FBE]/20 space-y-2 shadow-xs">
    <div className="flex items-center gap-2 text-[#5B4FBE] font-bold text-xs uppercase tracking-wider">
      <Sparkles size={14} />
      <span>Budget Hack</span>
    </div>
    <p className="text-sm sm:text-base text-[#1A1A2E] font-medium leading-relaxed">
      A good Halloween face — white base, dark circles, cracked lips, some fake blood — costs maybe ₹500–₹700 in products and hits harder than a ₹2,000 costume. Nykaa carries:
    </p>
  </div>

  {/* Visual List Grid */}
  <div className="bg-[#FAF9FF] rounded-2xl p-4 border border-[#E8E8F0]/80 space-y-3">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Palette size={14} className="text-[#5B4FBE]" />
      <span>Top Nykaa Picks</span>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
      {[
        'White and black face paint sticks',
        'Liquid latex for wound effects',
        'Dark eyeshadow palettes in smoky, deep tones',
        'Setting spray (because you will sweat)',
      ].map((item) => (
        <li key={item} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E8F0] shadow-2xs hover:border-[#5B4FBE]/30 transition-colors">
          <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Coupon Callout */}
  <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
    👉 <Link href="/stores/nykaa-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Nykaa coupon codes</Link> — check for active bank offers before buying.
  </div>
</section>

              {/* SECTION 4: AJIO */}
             <section id="ajio-looks" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🧡
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      AJIO — Underrated for Full Halloween Looks
    </h2>
  </div>

  {/* Main Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    AJIO has quietly built a solid accessories and fusion fashion section that works surprisingly well for Halloween. If you want a coordinated look — not just a single piece — AJIO&apos;s brand mix (both Indian and international) gives you options that feel considered, not random.
  </p>

  {/* Visual Highlights Box */}
  <div className="bg-gradient-to-br from-[#FFF9F5] via-[#FAF9FF] to-white rounded-2xl p-5 border border-orange-100/80 space-y-3 shadow-xs">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#1A1A2E] tracking-wide uppercase">
      <Sparkles size={14} className="text-[#FF5722]" />
      <span>Styling Highlights</span>
    </div>
    <p className="text-sm sm:text-base text-[#1A1A2E] font-semibold leading-relaxed">
      Great for: capes, dark florals, mesh tops, statement jewellery that reads &quot;witch chic.&quot;
    </p>
  </div>

  {/* Coupon Callout */}
  <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-xl p-3.5 text-xs sm:text-sm text-[#4A4A6A] font-medium">
    👉 <Link href="/stores/ajio-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">AJIO coupon codes</Link> — active deals on fashion and accessories.
  </div>
</section>

              {/* SECTION 5: Party Food */}
              <section id="party-food" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      🍕
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Don&apos;t Forget the Party Food
    </h2>
  </div>

  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
    No Halloween party survives on costumes alone. If you&apos;re hosting:
  </p>

  {/* Quick Delivery Feature Box */}
  <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-[#FFF9F5] border border-[#E8E8F0] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
    <div className="flex items-center gap-2 text-xs font-extrabold text-[#5B4FBE] uppercase tracking-wider">
      <Zap size={14} className="text-[#FF5722]" />
      <span>Instant Delivery Essentials</span>
    </div>

    <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
      <strong className="text-[#1A1A2E] font-bold">Zepto &amp; Blinkit</strong> are your best bets for last-minute party supplies — chips, cold drinks, candy, Halloween-themed chocolates, and snack boxes delivered in minutes.
    </p>

    {/* Coupon Pills */}
    <div className="flex flex-wrap gap-3 text-sm pt-1">
      <Link href="/stores/zepto-coupon-code" className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4FBE] font-bold px-4 py-2 rounded-xl hover:bg-[#E3DFFF] transition-colors shadow-2xs">
        👉 Zepto coupon codes
      </Link>
      <Link href="/stores/blinkit-coupon-code" className="inline-flex items-center gap-1.5 bg-[#F0EEFF] text-[#5B4FBE] font-bold px-4 py-2 rounded-xl hover:bg-[#E3DFFF] transition-colors shadow-2xs">
        👉 Blinkit coupon codes
      </Link>
    </div>
  </div>

  {/* Domino's Late-Night Craving Callout */}
  <div className="bg-[#FFF5F2] border border-[#FF5722]/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
    <Pizza size={20} className="text-[#FF5722] shrink-0 mt-0.5" />
    <p className="text-sm sm:text-base text-[#4A4A6A] leading-relaxed font-medium">
      And if the party goes late and nobody wants to cook: <Link href="/stores/dominos-coupon-code" className="font-bold text-[#5B4FBE] hover:underline">Domino&apos;s coupon codes</Link> — because a Halloween pizza with extra jalapenos is a perfectly valid life choice.
    </p>
  </div>
</section>

              {/* SECTION 6: Cheat Sheet */}
              <section id="cheat-sheet" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl shrink-0">
                    🎃
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E]">
                    Quick Halloween Shopping Cheat Sheet
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0]">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">What You Need</th>
                        <th className="p-4 sm:px-6">Best Platform</th>
                        <th className="p-4 sm:px-6">Budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      {[
                        { need: 'Full costume', platform: 'Amazon / Myntra', budget: '₹399–₹899' },
                        { need: 'Face paint / makeup', platform: 'Nykaa', budget: '₹299–₹699' },
                        { need: 'Room decor + props', platform: 'Flipkart', budget: '₹199–₹799' },
                        { need: 'Fashion accessories', platform: 'AJIO', budget: '₹299–₹799' },
                        { need: 'Party food + candy', platform: 'Zepto / Blinkit', budget: '₹150–₹500' },
                        { need: 'Food delivery', platform: "Domino's", budget: 'Per your hunger' },
                      ].map((row, i) => (
                        <tr key={row.need} className={i % 2 === 0 ? 'bg-white hover:bg-[#FAF9FF] transition-colors' : 'bg-[#F8F8FF] hover:bg-[#FAF9FF] transition-colors'}>
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">{row.need}</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">{row.platform}</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">{row.budget}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 7: Budget Rules */}
              <section id="budget-rules" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm space-y-6 group transition-all duration-300 hover:shadow-md">
  {/* Section Header (h2) */}
  <div className="flex items-center gap-3 border-b border-[#E8E8F0]/80 pb-4">
    <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-black text-xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
      <Skull size={22} />
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-[#1A1A2E] tracking-tight">
      Three Budget Halloween Rules (That Actually Work)
    </h2>
  </div>

  {/* Rules Stack */}
  <div className="space-y-4">
    {/* Rule 1 */}
    <div className="relative overflow-hidden bg-gradient-to-r from-[#FFF5F2] via-[#FFF9F5] to-white border border-[#FF5722]/20 rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#FF5722]/40 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Palette size={16} className="text-[#FF5722]" />
          <p className="font-black text-[#1A1A2E] text-sm sm:text-base tracking-tight">
            Rule 1: Face paint &gt; full costume, always.
          </p>
        </div>
        <span className="text-xs font-black text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 rounded-full shrink-0">
          01
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium pl-6">
        A ₹500 face paint setup looks more intentional than a ₹1,500 pre-packaged costume that everyone else is also wearing.
      </p>
    </div>

    {/* Rule 2 */}
    <div className="relative overflow-hidden bg-gradient-to-r from-[#F0EEFF] via-[#FAF9FF] to-white border border-[#5B4FBE]/20 rounded-2xl p-5 space-y-2 shadow-2xs hover:border-[#5B4FBE]/40 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#5B4FBE]" />
          <p className="font-black text-[#1A1A2E] text-sm sm:text-base tracking-tight">
            Rule 2: Buy the accessory, wear your own clothes.
          </p>
        </div>
        <span className="text-xs font-black text-[#5B4FBE] bg-[#5B4FBE]/10 px-2.5 py-1 rounded-full shrink-0">
          02
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium pl-6">
        Devil horns on a black outfit. Witch hat on a dark dress. Vampire cape on a blazer. You look like <em>you tried</em>, without trying too hard.
      </p>
    </div>

    {/* Rule 3 */}
    <div className="relative overflow-hidden bg-gradient-to-r from-[#F8F9FA] via-[#FAF9FF] to-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-2xs hover:border-slate-300 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Home size={16} className="text-[#1A1A2E]" />
          <p className="font-black text-[#1A1A2E] text-sm sm:text-base tracking-tight">
            Rule 3: Decor is the actual vibe.
          </p>
        </div>
        <span className="text-xs font-black text-[#1A1A2E] bg-slate-200/80 px-2.5 py-1 rounded-full shrink-0">
          03
        </span>
      </div>
      <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed font-medium pl-6">
        If you&apos;re hosting: spend ₹300 on string lights and ₹200 on pumpkin props. Nobody remembers whose costume was best. Everyone remembers the house that looked actually spooky.
      </p>
    </div>
  </div>
</section>

              {/* Halloween Offers Hub Callout */}
              <div className="bg-gradient-to-r from-[#5B4FBE]/5 via-orange-500/5 to-transparent border border-[#5B4FBE]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#5B4FBE] uppercase tracking-wider block">👻 Also Check</span>
                  <h3 className="font-extrabold text-[#1A1A2E] text-base mt-0.5">
                    All Halloween deals in one place
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    We&apos;ve pulled together live Halloween offers across platforms — updated daily. If a deal drops, it lands there first.
                  </p>
                </div>
                <Link
                  href="/festival-offers/halloween-offers"
                  className="inline-flex items-center gap-2 bg-[#5B4FBE] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4d42a6] transition-colors shrink-0 shadow-sm"
                >
                  <span>Halloween Offers 2026</span>
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
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1A1A2E] hover:bg-[#FAF9FF] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#5B4FBE]' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#4A4A6A] leading-relaxed border-t border-[#F0EEFF] pt-3 bg-[#FAF9FF]">
                            {faq.aNode ?? faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Closing Callout */}
              <div className="bg-gradient-to-br from-orange-500 via-[#FF5722] to-[#5B4FBE] rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
                <h3 className="text-xl sm:text-2xl font-black leading-snug italic">
                  Halloween is one night.
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
                  The regret of not buying the costume lasts a full year until next October. Shop smart — spend under ₹999, look like a thousand bucks, and let the haunt begin.
                </p>
                <div className="pt-2">
                  <Link
                    href="/festival-offers/halloween-offers"
                    className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-extrabold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <span>Explore Halloween Offers</span>
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
                    <Pizza size={16} className="text-orange-500" />
                    <span>Verified Halloween Deals</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    All sale recommendations are manually checked against live store prices across Amazon, Myntra, Flipkart, Nykaa &amp; AJIO.
                  </p>
                </div>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E8E8F0]">
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Related Guides</h3>
                  <Link href="/blog" className="text-xs font-bold text-[#5B4FBE] hover:underline">
                    View All
                  </Link>
                </div>

                <div className="space-y-4">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-3 items-start p-2 rounded-2xl hover:bg-[#F8F8FF] transition-all"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E8E8F0]">
                        <NextImage
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#5B4FBE] uppercase">
                          {post.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
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
                  Stack Halloween prices with verified coupons on Amazon, Myntra, Flipkart, Nykaa &amp; AJIO.
                </p>
                <Link
                  href="/festival-offers/halloween-offers"
                  className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2"
                >
                  <span>View Halloween Deals</span>
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
            <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest block mb-1">
              EXPLORE MORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]">
              Read More Blogs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Discover more money-saving tips, shopping guides and exclusive deal updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white border border-[#E8E8F0] rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <NextImage
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A1A2E] leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#4A4A6A] line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8F0] flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-gray-400" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-gray-400" />
                        {blog.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-[#5B4FBE] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-bold hover:bg-[#5B4FBE] hover:text-white transition-colors"
            >
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
