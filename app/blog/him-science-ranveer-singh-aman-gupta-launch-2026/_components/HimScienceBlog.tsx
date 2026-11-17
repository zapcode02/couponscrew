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
  ShoppingBag,
  Sparkles,
  Tag,
  CheckCircle2,
  Zap,
  Star,
  FlaskConical,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/him-science-ranveer-singh-aman-gupta-launch-2026';
const PAGE_TITLE = "Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men's Skincare Brand Built for the Indian Man";

const PRODUCTS = [
  { name: 'Face Wash', ingredient: 'Salicylic acid', size: '100 ml', price: '₹299' },
  { name: 'Sunscreen', ingredient: 'SPF 50 PA', size: '50 ml', price: '₹599' },
  { name: 'Face Cream', ingredient: 'Niacinamide', size: '50 ml', price: '₹499' },
  { name: 'Shampoo', ingredient: '2-in-1 for hard water', size: '200 ml', price: '₹499' },
  { name: 'Hair Serum', ingredient: 'Redensyl (hair growth)', size: '40 ml', price: '₹899' },
  { name: 'Body Wash', ingredient: 'Salicylic acid', size: '250 ml', price: '₹499' },
  { name: 'Soap', ingredient: 'Salicylic acid (pack of 3)', size: '3 × 100 g', price: '₹399' },
  { name: 'Body Lotion', ingredient: 'Hyaluronic acid', size: '250 ml', price: '₹499' },
];

const FAQS = [
  {
    q: 'Who founded H.I.M?',
    a: "H.I.M (Handsome Indian Man) was co-founded by actor Ranveer Singh and Aman Gupta, co-founder of boAt. The brand is backed by Aman Gupta's venture studio, OFF/BEAT Studios.",
  },
  {
    q: 'When did H.I.M launch?',
    a: 'H.I.M officially launched on November 17, 2026.',
  },
  {
    q: 'What does H.I.M stand for?',
    a: 'H.I.M stands for Handsome Indian Man.',
  },
  {
    q: 'How many products does H.I.M have?',
    a: 'Eight products across face, body, and hair care — face wash, sunscreen, face cream, shampoo, hair serum, body wash, soap, and body lotion.',
  },
  {
    q: 'What is IN·XT™ technology?',
    a: "IN·XT™ is H.I.M's proprietary molecule — described as a supramolecular delivery system designed to carry active ingredients past the skin's surface. The brand developed it exclusively for this product range.",
  },
  {
    q: 'Where can I buy H.I.M products?',
    a: 'H.I.M products are available on himscience.com, Amazon India, and Blinkit.',
  },
  {
    q: 'How much do H.I.M products cost?',
    a: 'Products are priced between ₹299 and ₹899. The face wash starts at ₹299 and the hair serum is the most expensive at ₹899.',
  },
];

const RELATED_POSTS = [
  {
    slug: 'bhai-dooj-2026-best-gift-ideas',
    title: "Bhai Dooj 2026: Best Gift Ideas for Brothers & Sisters — Watches, Perfumes & More",
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794196720/Bhai_Dooj_2026_Festive_Celebration_ss93tl.webp',
    date: 'Nov 9, 2026',
    readTime: '9 min read',
    excerpt: 'Bhai Dooj 2026 is on 11 November. Best gift ideas for brothers and sisters — watches, perfumes, skincare, gadgets and more. Every budget covered.',
  },
  {
    slug: 'myntra-grand-wedding-sale-2026',
    title: 'Myntra Grand Wedding Sale 2026: Shaadi Season Ke Liye Best Deals — Up to 80% OFF',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794759670/Myntra_Grand_Wedding_Sale_so8s5g.webp',
    date: 'Nov 15, 2026',
    readTime: '7 min read',
    excerpt: "Myntra Grand Wedding Sale is live with up to 80% OFF on lehengas, sherwanis, sarees, and wedding accessories. Plus, flat ₹300 OFF on your first app purchase.",
  },
  {
    slug: 'diwali-2026-last-minute-deals-gifts-offers',
    title: 'Diwali 2026: Last Minute Deals, Gift Ideas & Offers You Can Still Get Today',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794117712/Diwali_2026_Last-Minute_Deals_ebzpca.webp',
    date: 'Nov 8, 2026',
    readTime: '8 min read',
    excerpt: "Diwali is tomorrow — 8 November 2026. Best last-minute gifts, same-day deals, and offers you can still get tonight. Don't panic. We've got you covered.",
  },
];

export default function HimScienceBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">H.I.M Brand Launch 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* MAIN ARTICLE */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category + Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Brand Launch
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Ranveer Singh and Aman Gupta Just Launched H.I.M — A Men&apos;s Skincare Brand Built for the Indian Man
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 17, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>6 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-54 sm:h-110 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1794930338/him-science-ranveer-singh-aman-gupta-launch-2026_m0jzzi.webp"
                  alt="Ranveer Singh and Aman Gupta H.I.M Science Brand Launch 2026"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
              </div>

              {/* Intro */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-4 text-base sm:text-lg leading-relaxed text-[#2D2D4A]">
                <p>Indian men&apos;s grooming just got a major shake-up.</p>
                <p>
                  Today — November 17, 2026 — Bollywood actor Ranveer Singh and boAt co-founder Aman Gupta officially launched <strong>H.I.M</strong>, short for <strong>Handsome Indian Man</strong>, a men&apos;s personal care brand built from the ground up for Indian skin, Indian climate, and Indian biology.
                </p>
                <p>
                  This isn&apos;t a celebrity slapping their name on someone else&apos;s product. Ranveer and Aman have co-founded the brand, and both appear in the launch film together. The brand is backed by Aman Gupta&apos;s venture studio, OFF/BEAT Studios — the same outfit behind boAt&apos;s rise.
                </p>
                <p>Here&apos;s everything that just dropped.</p>
              </div>

              {/* What Is H.I.M? */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  What Is H.I.M?
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  H.I.M stands for <strong>Handsome Indian Man</strong>. The brand&apos;s premise is straightforward: existing grooming products were largely designed for Western skin types and climates. India has heat, humidity, hard water, heavy pollution, and intense UV — conditions that most international formulations weren&apos;t built for.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  H.I.M claims to have developed its products specifically around Indian male skin research, with Indian men as test subjects across varied Indian conditions.
                </p>

                <div className="bg-[#F4F3FF] border border-[#DDD9FF] rounded-2xl p-5 flex gap-4 items-start">
                  <FlaskConical size={22} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm mb-1">IN·XT™ Proprietary Technology</p>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      The brand&apos;s proprietary technology is called <strong>IN·XT™</strong> — described as a supramolecular delivery system designed to push active ingredients past the skin&apos;s surface, not just sit on top of it. It&apos;s featured across all eight products in the launch range.
                    </p>
                  </div>
                </div>
              </section>

              {/* Full Product Range */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  The Full 8-Product Launch Range
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  H.I.M launches with a complete head-to-toe lineup:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#E8E8F0] bg-[#F8F8FF] text-[#1A1A2E]">
                        <th className="py-3 px-4 font-bold">Product</th>
                        <th className="py-3 px-4 font-bold">Key Ingredient</th>
                        <th className="py-3 px-4 font-bold">Size</th>
                        <th className="py-3 px-4 font-bold">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0] text-[#4A4A6A]">
                      {PRODUCTS.map((p) => (
                        <tr key={p.name}>
                          <td className="py-3 px-4 font-semibold text-[#1A1A2E]">{p.name}</td>
                          <td className="py-3 px-4">{p.ingredient}</td>
                          <td className="py-3 px-4">{p.size}</td>
                          <td className="py-3 px-4 font-bold text-[#5B4FBE]">{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#FFF8F5] border border-[#FFE0D6] rounded-2xl p-4 text-sm text-[#2D2D4A]">
                  Price range: <strong className="text-[#FF5722]">₹299 to ₹899.</strong> All eight products are available right now.
                </div>
              </section>

              {/* Who's Behind It */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  Who&apos;s Behind It
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={16} className="text-[#FF5722]" />
                      <span className="font-black text-[#1A1A2E] text-sm">Ranveer Singh</span>
                    </div>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      Needs no introduction. What&apos;s different here is that he&apos;s not just the face of the brand — he&apos;s a co-founder. In the launch communication, Ranveer says he tested every formulation from the first samples through to the final versions.
                    </p>
                  </div>

                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={16} className="text-[#5B4FBE]" />
                      <span className="font-black text-[#1A1A2E] text-sm">Aman Gupta</span>
                    </div>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      Co-founder of boAt — the Indian audio and wearables brand that became one of the country&apos;s biggest D2C success stories. He runs OFF/BEAT Studios, which builds and backs new consumer brands. H.I.M is his bet on the men&apos;s grooming category.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  The combination is deliberate: Ranveer brings cultural credibility and mass reach, Aman brings the D2C playbook that scaled boAt to where it is.
                </p>
              </section>

              {/* Why This Launch Matters */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  Why This Launch Matters
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  India&apos;s men&apos;s grooming market has been growing fast — driven by younger consumers, rising urban skincare awareness, and a category that was historically underserved. The gap has been filled mostly by legacy brands (Himalaya, Garnier Men, Nivea Men) and a wave of new D2C players like The Man Company, Bombay Shaving Company, and mCaffeine.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  H.I.M enters with three things most of that field doesn&apos;t have together:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>A proprietary ingredient story</strong> (IN·XT™)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>India-specific formulation claims</strong> (hard water shampoo is a good example — a real problem in Delhi, Jaipur, Ahmedabad)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>Two co-founders with genuine pull</strong> — one mass-cultural, one D2C-operational
                    </span>
                  </li>
                </ul>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  Whether the product lives up to the claims is something the market will decide in the next few months. But as a launch, it&apos;s hard to ignore.
                </p>
              </section>

              {/* Where to Buy */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  Where to Buy H.I.M Right Now
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  H.I.M is available across three channels from day one:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <ShoppingBag size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>Official website:</strong>{' '}
                      <a href="https://himscience.com/" target="_blank" rel="noopener noreferrer" className="text-[#5B4FBE] hover:underline font-semibold">
                        himscience.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <ShoppingBag size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>Amazon India:</strong> Search &quot;HIM Science&quot; — use{' '}
                      <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                        Amazon coupon codes
                      </Link>{' '}
                      to check for any launch offers
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <ShoppingBag size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2D4A]">
                      <strong>Blinkit:</strong> Available for quick delivery in select cities — check{' '}
                      <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                        Blinkit coupon codes
                      </Link>{' '}
                      before checkout
                    </span>
                  </li>
                </ul>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  The multi-channel launch from day one — website + Amazon + Blinkit — signals they&apos;re not doing a soft launch. They want volume fast.
                </p>
              </section>

              {/* First Take */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  First Take: What Looks Interesting
                </h2>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F4F3FF] border border-[#DDD9FF]">
                    <p className="font-bold text-[#1A1A2E] text-sm mb-1">The hard water shampoo</p>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      The most practically interesting product in the range. Hard water is a real, specific problem for Indian men in most of the country&apos;s major cities, and it&apos;s rarely addressed directly in mainstream grooming. If the formulation works, that&apos;s a genuine product-market fit moment.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#FFE0D6]">
                    <p className="font-bold text-[#1A1A2E] text-sm mb-1">The salicylic acid face wash at ₹299</p>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Puts a clinically active ingredient at an accessible price point. Salicylic acid is proven for acne and oiliness — both common problems in India&apos;s humid climates — and ₹299 is competitive.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F0FFF4] border border-[#BCEFCA]">
                    <p className="font-bold text-[#1A1A2E] text-sm mb-1">The hair serum with Redensyl at ₹899</p>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      The most premium product in the range. Redensyl is a legitimate hair growth active (unlike many ingredients in this space), so if the concentration is meaningful, it&apos;s a reasonable price.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="text-[#5B4FBE]" size={24} />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-[#F8F8FF] transition-colors"
                      >
                        <span className="font-bold text-[#1A1A2E] text-sm sm:text-base">{faq.q}</span>
                        <ChevronRight
                          size={18}
                          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                            openFaqIndex === idx ? 'rotate-90 text-[#5B4FBE]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="p-4 sm:p-5 pt-0 text-sm leading-relaxed text-[#4A4A6A] border-t border-[#F0F0F8] bg-[#FAFAFE]">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Closing note */}
              <div className="bg-gradient-to-r from-[#5B4FBE]/10 via-[#FF5722]/10 to-transparent p-6 rounded-3xl border border-[#5B4FBE]/20 space-y-3">
                <p className="text-sm sm:text-base leading-relaxed text-[#1A1A2E] italic">
                  H.I.M just landed. Check{' '}
                  <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-bold underline">
                    Amazon coupon codes
                  </Link>{' '}
                  or{' '}
                  <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-bold underline">
                    Blinkit coupon codes
                  </Link>{' '}
                  for any live offers before you order.
                </p>
              </div>

              {/* Share & Tags */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1 mr-1">
                    <Tag size={13} /> Tags:
                  </span>
                  {['him science', 'ranveer singh', 'aman gupta', "men's skincare", "men's grooming india", 'new brand launch 2026'].map((tag) => (
                    <span key={tag} className="bg-[#F0EFFE] text-[#5B4FBE] text-xs font-medium px-2.5 py-1 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 mr-2 flex items-center gap-1">
                    <Share2 size={13} /> Share:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(PAGE_TITLE)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(PAGE_TITLE)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                  >
                    <Linkedin size={14} />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Link2 size={14} />}
                  </button>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-8">

              {/* Promo Banner */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <span className="bg-[#FF5722] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                  Live Offers
                </span>
                <h3 className="text-xl font-bold leading-snug mb-2">
                  Amazon &amp; Blinkit Launch Offers
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Check verified coupon codes before ordering H.I.M on Amazon or Blinkit — launch discounts update fast.
                </p>
                <Link
                  href="/stores/amazon-coupon-code"
                  className="w-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 mb-3"
                >
                  <span>View Amazon Coupons</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/stores/blinkit-coupon-code"
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>View Blinkit Coupons</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] space-y-4">
                <h3 className="font-bold text-[#1A1A2E] text-base flex items-center gap-2">
                  <Sparkles size={16} className="text-[#5B4FBE]" />
                  Related Articles
                </h3>
                <div className="divide-y divide-[#E8E8F0]">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block py-4 first:pt-2 last:pb-2 hover:opacity-85 transition-opacity"
                    >
                      <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-wider block mb-1">
                        {post.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors leading-snug mb-1">
                        {post.title}
                      </h4>
                      <p className="text-[11px] text-gray-400">{post.date} · {post.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Festival Sales */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] space-y-4">
                <h3 className="font-bold text-[#1A1A2E] text-base flex items-center gap-2">
                  <ShoppingBag size={16} className="text-[#FF5722]" />
                  Trending Festival Sales
                </h3>
                <ul className="space-y-2 text-xs">
                  {[
                    { label: 'Black Friday Offers', href: '/festival-offers/black-friday-offers' },
                    { label: 'Cyber Monday Offers', href: '/festival-offers/cyber-monday-offers' },
                    { label: 'Christmas Offers', href: '/festival-offers/christmas-offers' },
                    { label: 'New Year Offers', href: '/festival-offers/new-year-offers' },
                    { label: 'Diwali Offers', href: '/festival-offers/diwali-offers' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5 border-b border-[#F0F0F8] last:border-0"
                      >
                        <span>{item.label}</span>
                        <ChevronRight size={12} className="text-gray-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Read More Section */}
      <section className="py-12 sm:py-16 border-t border-[#E8E8F0] bg-[#F8F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest block mb-1">EXPLORE MORE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]">Read More Blogs</h2>
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
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A1A2E] leading-snug">{blog.title}</h3>
                    <p className="text-xs text-[#4A4A6A] line-clamp-3 leading-relaxed">{blog.excerpt}</p>
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
