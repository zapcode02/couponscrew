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
  List,
  ShoppingBag,
  Sparkles,
  Zap,
  Flame,
  Gift,
  Pizza,
  Lightbulb,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/diwali-2026-last-minute-deals-gifts-offers';
const PAGE_TITLE = 'Diwali 2026: Last Minute Deals, Gift Ideas & Offers You Can Still Get Today';

const RELATED_POSTS = [
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
  {
    slug: 'october-2026-sale-calendar-india',
    title: 'October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791033597/October_2026_Sale_Calendar_Festivities_i9ydzz.webp',
    date: 'Sep 30, 2026',
    readTime: '9 min read',
    excerpt: 'Every October 2026 sale date in one place — Amazon from 8 Oct, Flipkart from 9 Oct, Myntra from 8 Oct, plus Ajio, Nykaa and the festival dates to plan around.',
  },
];

const FAQS = [
  {
    q: 'Can I still get Diwali gifts delivered on 7–8 November 2026?',
    a: 'Yes — Zepto and Blinkit deliver in under fifteen minutes in most metro areas for essentials, decor, and sweets. Amazon Prime and Myntra Express offer same-day delivery in select pincodes. Check your pincode availability before ordering.',
  },
  {
    q: 'What is the fastest Diwali gift I can get right now?',
    a: 'A skincare set, perfume, or dry fruit hamper from Amazon or Nykaa — same-day delivery available in select cities. For something in under thirty minutes, Zepto and Blinkit carry gifting hampers and sweet boxes.',
  },
  {
    q: 'What should I order on Zepto or Blinkit for Diwali tonight?',
    a: 'Diyas, tealight candles, rangoli colours, agarbatti, puja thali, decorative string lights, mithai boxes, and dry fruit packs are all available on both platforms with ten to fifteen minute delivery.',
  },
  {
    q: 'When is Lakshmi Puja muhurat for Diwali 2026?',
    a: 'The pradosh period — after sunset on Sunday, 8 November 2026 — is the most auspicious window for Lakshmi Puja. The evening slot, roughly from 5:30 PM to 7:30 PM, is traditionally observed for the main puja.',
  },
  {
    q: 'Where can I find all Diwali offers and deals in one place?',
    a: 'All live Diwali deals, bank offers, and coupon codes are tracked on our Diwali Offers 2026 page — updated throughout the festival period.',
    link: '/festival-offers/diwali-offers',
    linkText: 'Diwali Offers 2026',
  },
  {
    q: "Is Domino's open on Diwali 2026?",
    a: "Yes — Domino's operates on Diwali. Check Domino's coupon codes for active Diwali offers before ordering.",
    link: '/stores/dominos-coupon-code',
    linkText: "Domino's coupon codes",
  },
];

export default function Diwali2026LastMinuteDealsBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Diwali 2026: Last-Minute Deals</span>
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
                  Diwali 2026: Last Minute Deals, Gift Ideas &amp; Offers You Can Still Get Today
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 8, 2026</span>
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

              {/* Banner Image */}
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1794117712/Diwali_2026_Last-Minute_Deals_ebzpca.webp"
                  alt="Diwali 2026: Last Minute Deals, Gift Ideas & Offers You Can Still Get Today"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Diwali is tomorrow. Take a breath. You still have time.
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The rangoli is half-done. The diyas are somewhere in a box. You have three people to gift and no plan. The sweets situation is unclear. And now you&apos;re on your phone at night reading a deals guide.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Welcome. You are in exactly the right place.
                </p>
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>Diwali 2026 is on Sunday, 8 November.</strong> That&apos;s tomorrow. And the good news — in 2026, same-day delivery exists, quick commerce runs at midnight, and you can fix most of this in the next two hours without leaving your house.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Here&apos;s everything you can still get. Sorted by urgency.
                </p>
              </div>

              {/* SECTION 1: Emergency Cheat Sheet */}
              <section id="emergency-cheat-sheet" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Zap className="w-6 h-6 shrink-0 text-amber-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    ⚡ The Diwali Emergency Delivery Cheat Sheet
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Before anything else — here&apos;s what can still reach you in time:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">What You Need</th>
                        <th className="p-4 sm:px-6">Platform</th>
                        <th className="p-4 sm:px-6">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Diyas, candles, puja essentials</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Zepto / Blinkit</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10–15 minutes</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Sweets &amp; mithai</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Zepto / Blinkit</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10–15 minutes</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Party snacks, cold drinks</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Zepto / Blinkit</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10–15 minutes</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Last-minute gift — beauty set</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Nykaa / Amazon</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Check same-day pin</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Perfume / accessories</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Check same-day pin</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Ethnic wear (metro cities)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Myntra Express</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Check same-day pin</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Diwali food delivery</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Domino&apos;s</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">30–45 minutes</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Dry fruits &amp; hampers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">JioMart / Amazon</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Check same-day pin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 2: Diyas, Decor & Puja Essentials */}
              <section id="diyas-decor" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Flame className="w-6 h-6 shrink-0 text-orange-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🕯️ Diyas, Decor &amp; Puja Essentials — Get It in 15 Minutes
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  &quot;The house is not ready. The puja room definitely isn&apos;t.&quot;
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  This is your most urgent category. Diyas, marigold torans, rangoli colours, agarbattis, puja thalis, candles, LED string lights — all of this you need <strong>tonight</strong> to set up before tomorrow morning.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The fastest solution in India right now: <strong>Zepto and Blinkit.</strong>
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Both platforms carry a full Diwali decor range — clay diyas, decorative candles, fairy lights, rangoli sets, puja samagri — delivered in under fifteen minutes in most metro areas.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  What to order right now:
                </h3>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li>Clay diyas — pack of 50 or 100</li>
                  <li>Tealight candles for the balcony and windowsills</li>
                  <li>Marigold toran for the main door</li>
                  <li>Rangoli colours — if you&apos;re still planning a design tonight</li>
                  <li>Agarbatti and camphor for tomorrow&apos;s puja</li>
                  <li>LED diya string lights — the lazy decorator&apos;s best friend</li>
                </ul>

                <p className="pt-2 text-sm text-[#1A1A2E] font-semibold">
                  👉 <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] hover:underline">Zepto coupon codes</Link> | <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] hover:underline">Blinkit coupon codes</Link>
                </p>

                <div className="flex items-start gap-3 bg-[#F0EEFF] border border-[#E0DAFF] rounded-2xl p-4 sm:p-5">
                  <p className="text-sm text-[#5B4FBE] font-medium leading-relaxed">
                    <strong>The move:</strong> Order diyas and puja essentials right now, before reading the rest of this. Seriously — order first, then continue.
                  </p>
                </div>
              </section>

              {/* SECTION 3: Last Minute Gifts */}
              <section id="last-minute-gifts" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                    <Gift className="w-6 h-6 shrink-0 text-pink-500" />
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                      🎁 Last Minute Gifts — That Don&apos;t Look Last Minute
                    </h2>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                    &quot;Wait, what do I get them?&quot;
                  </h3>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    The gift situation on the night before Diwali is a whole genre of human experience. You need something that:
                  </p>

                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1">
                    <li>Can actually arrive by tomorrow, OR</li>
                    <li>Can be ordered tonight and gifted as a confirmed incoming delivery</li>
                  </ul>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    Here are the categories that work, with what to look for on each platform.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub-category 1: Beauty & Skincare */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A2E]">
                    💄 Beauty &amp; Skincare Sets — The Foolproof Gift
                  </h3>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    A well-packaged skincare or beauty set looks expensive, feels personal, and is genuinely useful. It is the most reliable Diwali gift category for anyone between the ages of sixteen and sixty.
                  </p>

                  <h4 className="text-sm font-extrabold text-[#1A1A2E] pt-1">
                    What to look for:
                  </h4>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1 text-sm">
                    <li>Festive skincare hampers — face serum + moisturiser + face wash combos</li>
                    <li>Lip care gift sets</li>
                    <li>Body care kits — body lotion + scrub + body mist</li>
                    <li>Makeup gift sets for someone who enjoys that</li>
                  </ul>

                  <p className="text-[#4A4A6A] leading-relaxed pt-2">
                    <Link href="/stores/nykaa-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Nykaa coupon codes</Link> — Nykaa is running Diwali offers right now. Check the platform for active bank cashback deals before you add to cart.
                  </p>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — also carries beauty gift sets from multiple brands, with same-day delivery available in select pincodes.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub-category 2: Perfumes */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A2E]">
                    🌸 Perfumes &amp; Fragrances — Classic. Never Wrong.
                  </h3>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    A perfume says &quot;I thought about you&quot; whether you spent ten minutes choosing it or ten seconds. Festive gift sets — EDT + shower gel, or mini perfume samplers — tend to look more considered than a single bottle.
                  </p>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    <strong>Check:</strong> <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> for branded options with same-day delivery availability. Filter by &quot;Diwali gift&quot; on the platform to find sets under ₹999 and under ₹1,999.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub-category 3: Ethnic Wear */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A2E]">
                    👗 Ethnic Wear — If You Still Need an Outfit
                  </h3>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    You need a kurta. Or a saree. Or literally any outfit for tomorrow that isn&apos;t what you wore to Dhanteras.
                  </p>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> — Myntra&apos;s Express delivery is available in select cities and delivers same-day or by tomorrow morning in some metro areas. Check your pincode availability before ordering.
                  </p>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">AJIO coupon codes</Link> — AJIO has a solid ethnic edit running for the Diwali period.
                  </p>

                  <div className="flex items-start gap-3 bg-[#F0EEFF] border border-[#E0DAFF] rounded-2xl p-4 sm:p-5 mt-2">
                    <p className="text-sm text-[#5B4FBE] font-medium leading-relaxed">
                      <strong>If express delivery isn&apos;t available in your area:</strong> Order tonight anyway — the outfit arrives in two to three days and you&apos;ll have it for Govardhan Puja and Bhai Dooj. Still worth it.
                    </p>
                  </div>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub-category 4: Accessories */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A1A2E]">
                    👓 Accessories &amp; Gifting Extras
                  </h3>

                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li>
                      <strong>Sunglasses or eyewear</strong> — practical gift, well received: <Link href="/stores/lenskart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Lenskart coupon codes</Link>
                    </li>
                    <li>
                      <strong>Electronics accessories</strong> — earbuds, phone cases, chargers: <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> or <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link>
                    </li>
                    <li>
                      <strong>Small home decor</strong> — a decorative lamp, a photo frame, a vase: <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 4: Sweets, Dry Fruits & Festive Hampers */}
              <section id="sweets-hampers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Sparkles className="w-6 h-6 shrink-0 text-amber-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🍬 Sweets, Dry Fruits &amp; Festive Hampers
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  &quot;Unhone mithai di. Humne kya diya? Stress.&quot;
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Sweets are non-negotiable on Diwali. The mithai boxes, the dry fruit tins, the assorted chocolates — all of it. If yours hasn&apos;t arrived yet:
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Zepto and Blinkit</strong> both carry Diwali-special mithai packs, dry fruit boxes, and assorted sweet hampers. Order tonight — arrives in fifteen minutes.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>JioMart</strong> carries dry fruit assortments, namkeen sets, and festive grocery bundles — better range than quick commerce but slightly longer delivery. Check <Link href="/stores/jiomart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">JioMart coupon codes</Link> for active deals.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Amazon</strong> carries packaged dry fruit gift tins that look premium and are a solid backup gifting option: <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link>.
                </p>
              </section>

              {/* SECTION 5: Food & Dinner */}
              <section id="food-dinner" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Pizza className="w-6 h-6 shrink-0 text-red-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🍕 Diwali Food &amp; Dinner — Because Someone Has to Feed Everyone
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The great thing about Diwali 2026 falling on a Sunday: there is no &quot;but it&apos;s a Monday tomorrow&quot; energy. The party goes on.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  If you&apos;re hosting and the cooking situation is under control — great. If it isn&apos;t:
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Domino&apos;s</strong> is your answer. Pizza on Diwali night is more accepted than ever, and the delivery times are reliable. <Link href="/stores/dominos-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Domino&apos;s coupon codes</Link> for active deals and discount codes.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Zepto and Blinkit</strong> for party snacks — chips, nachos, cold drinks, chocolate boxes: <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Zepto coupon codes</Link> | <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Blinkit coupon codes</Link>
                </p>
              </section>

              {/* SECTION 6: The Diwali Night Plan */}
              <section id="night-plan" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Clock className="w-6 h-6 shrink-0 text-indigo-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    🧨 The Diwali Night Plan — Sorted
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Here&apos;s how the next eighteen hours look, with the shopping handled:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-2">
                    <strong className="text-[#1A1A2E] text-base block font-bold">Tonight (right now):</strong>
                    <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1 text-sm">
                      <li>Order diyas, puja essentials, decor on Zepto or Blinkit — done in fifteen minutes</li>
                      <li>Order sweets and dry fruit box — done in fifteen minutes</li>
                      <li>Check Amazon or Nykaa for same-day gift delivery in your pincode</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-2">
                    <strong className="text-[#1A1A2E] text-base block font-bold">Tomorrow morning:</strong>
                    <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1 text-sm">
                      <li>Set up the rangoli and toran (ordered tonight)</li>
                      <li>Light the diyas at the entrance before puja</li>
                      <li>Check if any same-day orders have arrived</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-2">
                    <strong className="text-[#1A1A2E] text-base block font-bold">Tomorrow evening:</strong>
                    <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1 text-sm">
                      <li>Lakshmi puja muhurat — evening, after sunset</li>
                      <li>Light every diya in the house</li>
                      <li>Distribute sweets and gifts</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-2">
                    <strong className="text-[#1A1A2E] text-base block font-bold">Tomorrow night:</strong>
                    <ul className="list-disc pl-5 text-[#4A4A6A] space-y-1 text-sm">
                      <li>Order food on Domino&apos;s or restock snacks on Zepto</li>
                      <li>Celebrate — you got everything sorted</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* SECTION 7: Last Minute Deal Tips */}
              <section id="deal-tips" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Lightbulb className="w-6 h-6 shrink-0 text-yellow-500" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    💡 Last Minute Deal Tips That Actually Help
                  </h2>
                </div>

                <div className="space-y-4 pt-1">
                  <div>
                    <h3 className="font-extrabold text-[#1A1A2E] text-base mb-1">
                      Use bank card offers wherever possible.
                    </h3>
                    <p className="text-[#4A4A6A] leading-relaxed">
                      Most platforms — Amazon, Flipkart, Nykaa, Myntra — have active bank cashback offers for HDFC, SBI, ICICI, Axis cards this Diwali. These stack on top of coupon codes. Check <Link href="/stores" className="text-[#5B4FBE] font-semibold hover:underline">CouponsCrew</Link> before checkout to find what&apos;s live.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#1A1A2E] text-base mb-1">
                      Quick commerce is your best friend tonight.
                    </h3>
                    <p className="text-[#4A4A6A] leading-relaxed">
                      Zepto and Blinkit have expanded their Diwali product range significantly this year — it is not just grocery. Diyas, candles, decor, sweets, dry fruits, puja kits — all available for fifteen-minute delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#1A1A2E] text-base mb-1">
                      Don&apos;t overthink the gift.
                    </h3>
                    <p className="text-[#4A4A6A] leading-relaxed">
                      A well-packaged dry fruit box from Amazon, a skincare set from Nykaa, or a perfume from anywhere — if it looks good and arrives on time, it is a good gift. The intent matters more than the item.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: FAQ */}
              <section id="faq" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HelpCircle className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    FAQ
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-all bg-[#F8F8FF]"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-[#1A1A2E] flex items-center justify-between gap-4 hover:bg-[#F0EEFF] transition-colors"
                      >
                        <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                            openFaqIndex === idx ? 'rotate-90 text-[#5B4FBE]' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#4A4A6A] leading-relaxed border-t border-[#E8E8F0] bg-white">
                          <p>
                            {faq.link ? (
                              <>
                                {faq.a.split(faq.linkText!)[0]}
                                <Link href={faq.link} className="text-[#5B4FBE] font-semibold hover:underline">
                                  {faq.linkText}
                                </Link>
                                {faq.a.split(faq.linkText!)[1]}
                              </>
                            ) : (
                              faq.a
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Closing Message */}
              <div className="bg-[#FFF0EA] border border-[#FFD9CC] rounded-3xl p-6 sm:p-8 space-y-3">
                <p className="text-base sm:text-lg text-[#1A1A2E] italic leading-relaxed text-center font-medium">
                  &quot;Diwali is not about perfect preparation. It is about light — however many diyas you managed to light, whatever sweets made it to the table, whoever you shared it with. Happy Diwali 2026. 🪔&quot;
                </p>
                <div className="pt-2 text-center">
                  <p className="text-sm sm:text-base font-extrabold text-[#1A1A2E]">
                    👉 <strong>All live deals in one place:</strong>{' '}
                    <Link href="/festival-offers/diwali-offers" className="text-[#FF5722] underline hover:text-[#E64A19]">
                      Diwali Offers 2026
                    </Link>
                  </p>
                </div>
              </div>

              {/* Author Note / E-E-A-T */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8E8F0] text-xs text-gray-500 leading-relaxed italic">
                <strong>Author note:</strong> This post is written and curated by the CouponsCrew Editorial Team. Delivery guarantees, store stock and bank discount terms are subject to local pincode availability and partner platform terms at checkout.
              </div>

              {/* Social Share Section */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0EEFF] flex items-center justify-center text-[#5B4FBE]">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-[#1A1A2E]">Spread the Light &amp; Savings</h4>
                    <p className="text-xs text-[#4A4A6A]">Share this Diwali emergency guide with friends &amp; family</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Twitter / X */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(PAGE_TITLE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={20} className="fill-current" />
                    </a>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">Twitter</span>
                  </div>

                  {/* Facebook */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={20} className="fill-current" />
                    </a>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">Facebook</span>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(PAGE_TITLE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={20} className="fill-current" />
                    </a>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">LinkedIn</span>
                  </div>

                  {/* Copy Link */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={handleCopyLink}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#5B4FBE] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Copy Link"
                    >
                      {copied ? <Check size={20} /> : <Link2 size={20} />}
                    </button>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">{copied ? 'Copied!' : 'Copy Link'}</span>
                  </div>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-8 hidden lg:block">
              {/* Sidebar Box 1: Key Diwali Details */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <Check className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Diwali Details</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Date</strong>
                    <span className="text-gray-600">Sunday, 8 November 2026</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Lakshmi Puja Muhurat</strong>
                    <span className="text-gray-600">Evening, pradosh period (~5:30 PM to 7:30 PM)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">10–15 Min Delivery</strong>
                    <span className="text-gray-600">Zepto &amp; Blinkit (diyas, sweets, decor)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Same-Day Gifting</strong>
                    <span className="text-gray-600">Amazon, Nykaa, Myntra Express</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <List className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Table of Contents</h3>
                </div>
                <nav className="space-y-2 text-xs font-semibold">
                  {[
                    { title: 'The Diwali Emergency Cheat Sheet', href: '#emergency-cheat-sheet' },
                    { title: 'Diyas, Decor & Puja Essentials', href: '#diyas-decor' },
                    { title: 'Last Minute Gifts', href: '#last-minute-gifts' },
                    { title: 'Sweets, Dry Fruits & Hampers', href: '#sweets-hampers' },
                    { title: 'Diwali Food & Dinner', href: '#food-dinner' },
                    { title: 'The Diwali Night Plan — Sorted', href: '#night-plan' },
                    { title: 'Last Minute Deal Tips', href: '#deal-tips' },
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
                  Stack Diwali deals with verified coupons on Zepto, Blinkit, Amazon, Nykaa &amp; more.
                </p>
                <Link href="/festival-offers/diwali-offers" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Diwali Offers</span>
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

