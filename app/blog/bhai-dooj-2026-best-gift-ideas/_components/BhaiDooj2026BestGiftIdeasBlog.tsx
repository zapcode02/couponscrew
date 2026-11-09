'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  HelpCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  Gift,
  Heart,
  Sparkles,
  ShoppingBag,
  Watch,
  Zap,
  Tag,
  CheckCircle2,
  List,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/bhai-dooj-2026-best-gift-ideas';
const PAGE_TITLE = 'Bhai Dooj 2026: Best Gift Ideas for Brothers & Sisters — Watches, Perfumes & More';

const RELATED_POSTS = [
  {
    slug: 'diwali-2026-last-minute-deals-gifts-offers',
    title: 'Diwali 2026: Last Minute Deals, Gift Ideas & Offers You Can Still Get Today',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794117712/Diwali_2026_Last-Minute_Deals_ebzpca.webp',
    date: 'Nov 8, 2026',
    readTime: '8 min read',
    excerpt: "Diwali is tomorrow — 8 November 2026. Best last-minute gifts, same-day deals, and offers you can still get tonight. Don't panic. We've got you covered.",
  },
  {
    slug: 'dhanteras-2026-best-deals',
    title: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp',
    date: 'Nov 3, 2026',
    readTime: '9 min read',
    excerpt: "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
  },
  {
    slug: 'dhanteras-diwali-november-2026-india-deals',
    title: 'November 2026 Festival Calendar India: Dhanteras, Diwali, Bhai Dooj & More — Deals & Offers',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793435015/November_2026_Festival_Deals_Calendar_n87njb.webp',
    date: 'Oct 31, 2026',
    readTime: '11 min read',
    excerpt: "Your complete November 2026 India festival guide — Dhanteras to Cyber Monday. Every festival, every deal, every offer in one place. Don't miss a single saving.",
  },
];

const FAQS = [
  {
    q: 'When is Bhai Dooj 2026?',
    a: 'Bhai Dooj 2026 falls on Wednesday, 11 November. The Aparahna Muhurat — the most auspicious window for the tilak ceremony — is from 1:31 PM to 3:45 PM.',
  },
  {
    q: 'What is the best gift for sisters on Bhai Dooj 2026?',
    a: 'Skincare sets, jewellery, perfumes, ethnic wear, and eyewear are the most popular and well-received gift categories. Nykaa coupon codes for skincare sets, Myntra coupon codes for fashion and jewellery.',
    link: '/stores/nykaa-coupon-code',
    linkText: 'Nykaa coupon codes',
  },
  {
    q: 'What is the best gift for brothers on Bhai Dooj 2026?',
    a: 'Watches are the most reliable Bhai Dooj gift for brothers — available across every budget. Perfume and grooming sets, tech accessories, and clothing are strong alternatives. Check Amazon coupon codes and Flipkart coupon codes for active deals.',
    link: '/stores/amazon-coupon-code',
    linkText: 'Amazon coupon codes',
  },
  {
    q: 'What is a good Bhai Dooj gift under ₹500?',
    a: 'A skincare mini set or sheet mask pack for sisters, and a phone accessory or grooming travel kit for brothers — both under ₹500 and available on Amazon with standard delivery.',
  },
  {
    q: 'Can I order Bhai Dooj gifts for same-day delivery?',
    a: 'Yes — Amazon Prime offers same-day delivery in select pincodes. Myntra Express delivers same-day in major metro areas. Check availability at your pincode before ordering.',
  },
  {
    q: 'What is the significance of Bhai Dooj?',
    a: "Bhai Dooj celebrates the bond between brothers and sisters. Sisters apply a tilak on their brother's forehead and pray for his long life and wellbeing. Brothers give gifts in return as a gesture of gratitude and protection. It is observed on the second day of Shukla Paksha in the Kartik month — two days after Diwali.",
  },
];

export default function BhaiDooj2026BestGiftIdeasBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Bhai Dooj 2026: Best Gift Ideas</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Festival Offers
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Bhai Dooj 2026: Best Gift Ideas for Brothers &amp; Sisters — Watches, Perfumes &amp; More
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 9, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>9 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-54 sm:h-110 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1794196720/Bhai_Dooj_2026_Festive_Celebration_ss93tl.webp"
                  alt="Bhai Dooj 2026: Best Gift Ideas for Brothers & Sisters — Watches, Perfumes & More"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="w-full"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  One relationship. One day. No excuses for a bad gift.
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Out of all the relationships in the world, the brother-sister dynamic is its own category.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  It is the relationship where you spent an entire childhood stealing each other&apos;s food, tattling to parents, and fighting over the TV remote. And yet — here you both are, every year, sitting across from each other on Bhai Dooj. Sister applying tilak. Brother handing over a gift. Both pretending the last argument never happened.
                </p>
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>Bhai Dooj 2026 falls on Wednesday, 11 November.</strong>
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  This is the guide for the brother who panics every year. And for the sister who already knows what she wants but won&apos;t say it out loud. Every budget, every category — sorted.
                </p>
              </div>

              {/* SECTION: Quick Facts */}
              <section id="quick-facts" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Calendar className="w-6 h-6 shrink-0 text-[#5B4FBE]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    📅 Bhai Dooj 2026 — Quick Facts
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Detail</th>
                        <th className="p-4 sm:px-6">Info</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Date</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Wednesday, 11 November 2026</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Aparahna Muhurat</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">1:31 PM to 3:45 PM</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Significance</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sisters pray for brothers&apos; long life; brothers give gifts</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Also Known As</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Bhau Beej (Maharashtra), Bhai Phonta (Bengal), Bhai Tika (Nepal)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Days After Diwali</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Third day — part of the five-day Diwali celebration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION: Gifts from Brother to Sister */}
              <section id="gifts-for-sister" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#FF5722]">
                  <Gift className="w-6 h-6 shrink-0 text-[#FF5722]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🎁 Gifts from Brother to Sister
                  </h2>
                </div>

                <div className="bg-[#FFF0EA] p-4 rounded-2xl border-l-4 border-[#FF5722] text-[#1A1A2E] text-sm italic font-medium">
                  &ldquo;She literally prays for your long life. The least you can do is not buy a last-minute box of dry fruits with zero thought.&rdquo;
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The gift from brother to sister on Bhai Dooj carries weight. It is not just a transaction — it is acknowledgment. That you see her, you appreciate her, and you put more than three minutes of thought into what she would actually like.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Here is what actually works, by category.
                </p>

                {/* Sub: Skincare & Beauty Sets */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    💄 Skincare &amp; Beauty Sets — The Always-Right Answer
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    A well-assembled skincare set looks expensive, feels personal, and is genuinely appreciated at every age. This is the category with the widest range — from under ₹500 to under ₹5,000 — and the highest chance of landing well.
                  </p>
                  <div>
                    <strong className="text-sm font-semibold text-[#1A1A2E]">What to look for:</strong>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Face serum + moisturiser + eye cream combos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Festive beauty gift sets — lip care kits, body care hampers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Makeup sets for sisters who enjoy that</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Sheet mask packs — twenty-piece sets that feel indulgent</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5 pt-2 text-sm">
                    <p>
                      👉 <Link href="/stores/nykaa-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Nykaa coupon codes</Link> — Nykaa has the best range for gifting sets, with active post-Diwali offers still running. Check before checkout.
                    </p>
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — wide range across brands, often with gift wrapping options.
                    </p>
                  </div>
                </div>

                {/* Sub: Jewellery & Accessories */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    💍 Jewellery &amp; Accessories — The Classic
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Jewellery has always been a Bhai Dooj gift that lands. The key is knowing whether she prefers minimal and everyday, or bold and statement.
                  </p>
                  <div>
                    <strong className="text-sm font-semibold text-[#1A1A2E]">Safe picks:</strong>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Dainty gold-toned chains and pendants — works for most</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Pearl or oxidised silver sets — ethnic and versatile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Bracelet stacks — currently trending across all age groups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Statement earrings for someone who likes colour</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5 pt-2 text-sm">
                    <p>
                      👉 <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — solid jewellery edit, especially for fashion and fusion pieces
                    </p>
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — wide price range, check under &ldquo;fashion jewellery gifting&rdquo;
                    </p>
                  </div>
                </div>

                {/* Sub: Fashion & Ethnic Wear */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    👗 Fashion &amp; Ethnic Wear — For Sisters Who Love to Dress
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    If she is someone who lives for new outfits — this is the gift. A kurta set, a printed co-ord, a saree for the next wedding season — all solid options.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p>
                      👉 <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">AJIO coupon codes</Link> — strong ethnic edit, trusted brands, good price range
                    </p>
                    <p>
                      👉 <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — widest fashion selection, return policy makes it low-risk
                    </p>
                  </div>
                  <div className="bg-[#F0EEFF] p-4 rounded-2xl text-xs sm:text-sm text-[#5B4FBE] leading-relaxed font-medium">
                    <strong>If you don&apos;t know her size:</strong> A gift card is not a lazy option. A Myntra or Amazon gift card lets her choose exactly what she wants. It is the most honest gift you can give.
                  </div>
                </div>

                {/* Sub: Eyewear */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    👓 Eyewear — The Surprisingly Good Gift
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    A pair of sunglasses is the most underrated Bhai Dooj gift. It looks considered, it is genuinely useful, and there is a range from affordable to premium that suits any budget.
                  </p>
                  <p className="text-sm">
                    👉 <Link href="/stores/lenskart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Lenskart coupon codes</Link> — both sunglasses and blue-light glasses for sisters who work on screens
                  </p>
                </div>

                {/* Sub: Perfumes */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    🌸 Perfumes — Intimate and Personal
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Gifting a perfume says you thought about how she wants to feel, not just what she can use. Festive gift sets — EDT with matching body lotion or shower gel — look premium even at accessible price points.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — wide fragrance range across brands, check &ldquo;perfume gift sets for women&rdquo;
                    </p>
                    <p>
                      👉 <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — international fragrance brands at festive pricing
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Gifts from Sister to Brother */}
              <section id="gifts-for-brother" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Gift className="w-6 h-6 shrink-0 text-[#5B4FBE]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🎁 Gifts from Sister to Brother
                  </h2>
                </div>

                <div className="bg-[#F0EEFF] p-4 rounded-2xl border-l-4 border-[#5B4FBE] text-[#1A1A2E] text-sm italic font-medium">
                  &ldquo;He will say &apos;kuch nahi chahiye.&apos; He absolutely wants something. He just won&apos;t tell you.&rdquo;
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Brothers are impossible to shop for. They either have everything already, or they want something too expensive to gift. The secret: lean into what he actually uses every day, or what he has been meaning to buy for himself.
                </p>

                {/* Sub: Watches */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    ⌚ Watches — The Forever Bhai Dooj Gift
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    A watch is the most reliable gift from sister to brother. Every year. Without fail. It works because it is functional, it is visible (he wears it daily), and it comes in every budget.
                  </p>
                  <div>
                    <strong className="text-sm font-semibold text-[#1A1A2E]">By budget:</strong>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹999:</strong> Casual everyday watches — digital, minimalist analog, sports straps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹2,000:</strong> Mid-range analog watches with leather or metal straps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹5,000:</strong> Premium fashion watches, smart watch bands</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5 pt-2 text-sm">
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — largest watch selection across price brackets
                    </p>
                    <p>
                      👉 <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> — good mid-range options with active bank offers
                    </p>
                  </div>
                </div>

                {/* Sub: Perfumes & Grooming Sets */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    🌊 Perfumes &amp; Grooming Sets — The Underutilised Gift
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Most brothers have a perfume they use until the bottle is bone dry and then never replace. A good fragrance — or a grooming kit — is something they want but won&apos;t buy themselves.
                  </p>
                  <div>
                    <strong className="text-sm font-semibold text-[#1A1A2E]">What works:</strong>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>EDT + deodorant gift sets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Grooming kits — beard oil, face wash, moisturiser</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span>Body wash + loofah combos — practical but nicely packaged</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5 pt-2 text-sm">
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — check &ldquo;men&apos;s grooming gift sets&rdquo; for well-packaged options
                    </p>
                    <p>
                      👉 <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — branded grooming range for the fashion-forward brother
                    </p>
                  </div>
                </div>

                {/* Sub: Tech & Gadgets */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    📱 Tech &amp; Gadgets — For the Tech Brother
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    If your brother has strong opinions about gadgets — this is the lane.
                  </p>
                  <div>
                    <strong className="text-sm font-semibold text-[#1A1A2E]">Safe tech gifts by budget:</strong>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#4A4A6A]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹999:</strong> Phone stands, cable organisers, pop sockets, gaming accessories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹1,999:</strong> Wireless earbuds, portable chargers, Bluetooth speakers (compact)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                        <span><strong>Under ₹3,000:</strong> Better earbuds, smart bands, gaming mice</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1.5 pt-2 text-sm">
                    <p>
                      👉 <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — best tech accessory range
                    </p>
                    <p>
                      👉 <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> — strong on electronics accessories with post-Diwali deals still active
                    </p>
                  </div>
                </div>

                {/* Sub: Fashion & Clothing */}
                <div className="pt-4 border-t border-[#E8E8F0] space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    👕 Fashion &amp; Clothing — The Safe Modern Gift
                  </h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    A good kurta for the wedding season ahead, an everyday printed tee, or a solid hoodie — clothing works when you know his style.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <p>
                      👉 <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — wide menswear range
                    </p>
                    <p>
                      👉 <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">AJIO coupon codes</Link> — good for ethnic options with the wedding season starting
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Quick Budget Gift Guide */}
              <section id="budget-gift-guide" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#22C55E]">
                  <Tag className="w-6 h-6 shrink-0 text-[#22C55E]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    💸 Quick Budget Gift Guide — Every Price Point Covered
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Budget</th>
                        <th className="p-4 sm:px-6">For Sister</th>
                        <th className="p-4 sm:px-6">For Brother</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Under ₹500</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sheet mask set, lip care kit</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Phone stand, grooming travel kit</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Under ₹999</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Perfume mini set, printed tote</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Casual watch, earbuds</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Under ₹1,999</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Skincare hamper, fashion jewellery</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Mid-range watch, Bluetooth speaker</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Under ₹3,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Ethnic outfit, sunglasses</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Smart band, grooming premium set</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Under ₹5,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Premium skincare set, branded bag</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Premium watch, noise-cancelling earbuds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION: Last Minute Delivery */}
              <section id="last-minute-delivery" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#FF5722]">
                  <ShoppingBag className="w-6 h-6 shrink-0 text-[#FF5722]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🛒 Last Minute? Here&apos;s What You Can Still Get in Time
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Bhai Dooj is <strong>Wednesday, 11 November</strong> — you still have a few days. But if you are cutting it close:
                </p>

                <div className="space-y-3 pt-2 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    <strong className="text-[#1A1A2E]">For same-day or next-day delivery (metro cities):</strong><br />
                    Check <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — Prime members get same-day and next-day options in most major cities. Filter by &ldquo;get it by tomorrow&rdquo; at checkout.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">For express fashion delivery:</strong><br />
                    <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — Myntra Express delivers same-day in select pincodes.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">For last-minute sweets and hampers:</strong><br />
                    <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Zepto coupon codes</Link> and <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Blinkit coupon codes</Link> — both carry dry fruit boxes, chocolate assortments, and sweet hampers for delivery in under fifteen minutes. If you forgot the mithai, this is your answer.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">For gift cards:</strong><br />
                    <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — digital gift cards are instant. No delivery required. And genuinely appreciated.
                  </p>
                </div>
              </section>

              {/* SECTION: Gifting Rules */}
              <section id="gifting-rules" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Sparkles className="w-6 h-6 shrink-0 text-[#5B4FBE]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    💡 Bhai Dooj Gifting Rules That Actually Help
                  </h2>
                </div>

                <div className="space-y-3 pt-2 text-sm text-[#4A4A6A] leading-relaxed">
                  <p>
                    <strong className="text-[#1A1A2E]">Don&apos;t ask &ldquo;kya chahiye?&rdquo;</strong> You will get &ldquo;kuch nahi.&rdquo; Decide on a category — skincare, watch, perfume — and choose within it. The thought matters more than the product.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">Budget is not an excuse.</strong> A ₹400 sheet mask set, presented nicely, beats a ₹2,000 random purchase that shows no thought. It is about intent.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">Use bank card offers.</strong> Most platforms have post-Diwali bank cashback offers still active through mid-November. Stack a CouponsCrew coupon code on top and you save on both ends. Check <Link href="/stores" className="text-[#5B4FBE] font-semibold hover:underline">all store deals</Link> before checkout.
                  </p>
                  <p>
                    <strong className="text-[#1A1A2E]">Order by November 9.</strong> Standard delivery takes two to three days. November 9 is your order deadline for guaranteed Bhai Dooj arrival. For same-day options, the morning of November 11 is still workable in metro cities.
                  </p>
                </div>
              </section>

              {/* FAQ Accordion Section */}
              <section id="faq" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HelpCircle className="w-6 h-6 shrink-0 text-[#5B4FBE]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="divide-y divide-[#E8E8F0]">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1A1A2E] hover:text-[#5B4FBE] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronRight
                          size={18}
                          className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-90 text-[#5B4FBE]' : ''
                            }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="mt-3 text-xs sm:text-sm text-[#4A4A6A] leading-relaxed space-y-2">
                          <p>{faq.a}</p>
                          {faq.link && (
                            <Link
                              href={faq.link}
                              className="inline-flex items-center gap-1 text-[#5B4FBE] font-bold hover:underline pt-1"
                            >
                              <span>{faq.linkText}</span>
                              <ArrowRight size={13} />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion & More Deals */}
              <div className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-3">
                <p className="text-base sm:text-lg font-medium italic">
                  The tilak will last a few minutes. The gift — if you chose well — will last much longer. Happy Bhai Dooj 2026. 👫🪔
                </p>
                <div className="pt-2">
                  <Link
                    href="/festival-offers/diwali-offers"
                    className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:bg-orange-50 hover:text-[#FF5722] transition-colors shadow-sm"
                  >
                    <span>More festive deals: Diwali Offers 2026</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Author Note / E-E-A-T */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] text-xs text-gray-500 leading-relaxed italic">
                <strong>Author note:</strong> This post is written and curated by the CouponsCrew Editorial Team. Delivery guarantees, store stock and bank discount terms are subject to local pincode availability and partner platform terms at checkout.
              </div>

              {/* Social Share Section */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center shrink-0">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] text-sm">Share this gift guide</h3>
                    <p className="text-xs text-gray-400">Help friends and siblings find the best gifts</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(PAGE_TITLE)}&url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE] flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE] flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE] flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Link2 size={14} />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Sidebar Box 1: Key Bhai Dooj Details */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <Check className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Bhai Dooj Details</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Date</strong>
                    <span className="text-gray-600">Wednesday, 11 November 2026</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Aparahna Muhurat</strong>
                    <span className="text-gray-600">1:31 PM to 3:45 PM (Tilak Ceremony)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Significance</strong>
                    <span className="text-gray-600">Sisters pray for brothers&apos; longevity; brothers gift</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Instant Mithai / Hampers</strong>
                    <span className="text-gray-600">Zepto &amp; Blinkit (10–15 min delivery)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Same-Day Gifting</strong>
                    <span className="text-gray-600">Amazon Prime, Nykaa, Myntra Express</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <List className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Table of Contents</h3>
                </div>
                <nav className="space-y-2 text-xs font-semibold">
                  {[
                    { title: 'Bhai Dooj 2026 — Quick Facts', href: '#quick-facts' },
                    { title: 'Gifts from Brother to Sister', href: '#gifts-for-sister' },
                    { title: 'Gifts from Sister to Brother', href: '#gifts-for-brother' },
                    { title: 'Quick Budget Gift Guide', href: '#budget-gift-guide' },
                    { title: 'Last Minute Delivery Options', href: '#last-minute-delivery' },
                    { title: 'Bhai Dooj Gifting Rules', href: '#gifting-rules' },
                    { title: 'Frequently Asked Questions', href: '#faq' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="p-3 bg-[#F8F8FF] hover:bg-[#F0EEFF] text-[#1A1A2E] hover:text-[#5B4FBE] rounded-xl border border-[#E8E8F0] transition-all flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Festive Hub Link Box */}
              <div className="bg-gradient-to-br from-[#FFF0EA] to-[#FFE2D6] rounded-3xl p-6 border border-[#FFD2C0] shadow-xs space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF5722] bg-white px-2.5 py-1 rounded-full inline-block shadow-2xs">
                  Active Sale Hub
                </span>
                <h2 className="text-lg font-black text-[#1A1A2E] leading-snug">
                  Diwali &amp; Festive Offers 2026
                </h2>
                <p className="text-xs text-[#4A4A6A] leading-relaxed">
                  Browse 100% verified festive deals across Amazon, Flipkart, Myntra, Nykaa, Blinkit and Zepto.
                </p>
                <Link
                  href="/festival-offers/diwali-offers"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5722] hover:text-orange-700 pt-1"
                >
                  <span>Explore Festive Offers</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-base font-extrabold text-[#1A1A2E] flex items-center gap-2">
                  <Sparkles size={16} className="text-[#5B4FBE]" />
                  <span>Related Festival Guides</span>
                </h2>

                <div className="space-y-4 pt-1">
                  {RELATED_POSTS.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-3.5 items-start"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-[#E8E8F0]">
                        <NextImage
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5722]">
                          {rel.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors line-clamp-2 leading-snug mt-0.5">
                          {rel.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {rel.date} • {rel.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Stores Quick Access */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-base font-extrabold text-[#1A1A2E]">
                  Shop Gifting Deals
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { name: 'Amazon', path: '/stores/amazon-coupon-code' },
                    { name: 'Nykaa', path: '/stores/nykaa-coupon-code' },
                    { name: 'Myntra', path: '/stores/myntra-coupon-code' },
                    { name: 'Flipkart', path: '/stores/flipkart-coupon-code' },
                    { name: 'AJIO', path: '/stores/ajio-coupon-code' },
                    { name: 'Lenskart', path: '/stores/lenskart-coupon-code' },
                    { name: 'Zepto', path: '/stores/zepto-coupon-code' },
                    { name: 'Blinkit', path: '/stores/blinkit-coupon-code' },
                  ].map((store, sIdx) => (
                    <Link
                      key={sIdx}
                      href={store.path}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#F8F8FF] hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE] transition-colors border border-[#E8E8F0]"
                    >
                      {store.name}
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>

      {/* Read More Section */}
      <section className="py-12 sm:py-16 border-t border-[#E8E8F0] bg-[#F8F8FF]">
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

