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
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/october-2026-sale-calendar-india';
const PAGE_TITLE = 'October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After';

const RELATED_POSTS = [
  {
    slug: 'amazon-great-indian-festival-2026-upcoming-sales',
    title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
    date: 'Sep 27, 2026',
    readTime: '8 min read',
    excerpt: "Complete guide to Amazon Great Indian Festival 2026 — start date (8 October), Prime early access (7 October), SBI 10% offer, live Early Deal prices, deal timings, and Amazon's full sale calendar.",
  },
  {
    slug: 'big-billion-days-2026-flipkart-upcoming-sales',
    title: "Big Billion Days 2026: Sale Date, Early Access, Bank Offers and Flipkart's Upcoming Sales",
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790489840/big-billion-days-2026-flipkart-upcoming-sales_vdosgd.webp',
    date: 'Sep 27, 2026',
    readTime: '9 min read',
    excerpt: 'Flipkart Big Billion Days 2026 starts 9 October, with early access on 8 October. See bank offers, deal timings, the full upcoming sale calendar and how to save more.',
  },
  {
    slug: 'myntra-big-fashion-festival-2026',
    title: 'Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790820841/myntra-big-fashion-festival-2026_gbsc9h.webp',
    date: 'Oct 1, 2026',
    readTime: '7 min read',
    excerpt: 'Complete guide to Myntra Big Fashion Festival 2026 — start date (8 October), Insider early access (7 October), VIP ticket benefits, bank offer status, and how it compares to Big Billion Days and Amazon Great Indian Festival.',
  },
];

const FAQS = [
  {
    q: 'Which sale starts first in October 2026, Amazon or Flipkart?',
    a: 'Amazon starts first. Amazon Great Indian Festival opens on 8 October 2026, and Flipkart Big Billion Days opens to everyone on 9 October. Flipkart members with Plus, Black, VIP or a Flipkart credit card get early access on 8 October, so both are effectively open from the same day for those members.',
  },
  {
    q: 'When does Myntra Big Fashion Festival 2026 start?',
    a: 'Myntra Big Fashion Festival 2026 starts on 8 October 2026. Insiders and VIP ticket holders are reported to get early access from 7 October. Myntra has not announced the end date or a bank partner yet.',
  },
  {
    q: "When do Amazon and Flipkart's October 2026 sales end?",
    a: 'Neither Amazon nor Flipkart has announced an end date as of 3 October 2026. Past editions have run for about a week to ten days, followed by separate Diwali offers. We will update this page when the end dates are announced.',
  },
  {
    q: 'Is there another sale before Diwali 2026?',
    a: 'A second round of Diwali sales is likely, but none has been announced yet. Diwali falls on 8 November 2026, almost a month after the first sales open, and platforms usually run Diwali-specific offers in the final weeks before the festival.',
  },
  {
    q: 'Is it better to buy in October or wait for Black Friday?',
    a: 'For phones, laptops, TVs and large appliances, the October sales usually have the strongest offers. For beauty, international fashion brands and some gadgets, Black Friday on 27 November is worth waiting for if the purchase is not needed for Diwali.',
  },
];

export default function OctoberSaleCalendar2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">October 2026 Sale Calendar</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Festival Offers
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 3, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>10 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1791033597/October_2026_Sale_Calendar_Festivities_i9ydzz.webp"
                  alt="October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  October 2026&apos;s three biggest sales start within two days of each other. <strong>Amazon Great Indian Festival opens on 8 October</strong>, <strong>Myntra Big Fashion Festival also opens on 8 October</strong>, and <strong>Flipkart Big Billion Days opens to everyone on 9 October</strong>, with early access a day earlier for eligible members. None of the three has announced an end date yet.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed italic">
                  Last updated: 3 October 2026. This calendar is updated as platforms confirm new dates.
                </p>
              </div>

              {/* SECTION 1: At a glance */}
              <section id="at-a-glance" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  All October 2026 sale dates at a glance
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  This table lists each sale with what the platform has confirmed and what is still open. &quot;Reported&quot; means the date has appeared in sale listings or deal communities but the platform has not published it.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Sale</th>
                        <th className="p-4 sm:px-6">Starts</th>
                        <th className="p-4 sm:px-6">Early access</th>
                        <th className="p-4 sm:px-6">End date</th>
                        <th className="p-4 sm:px-6">Status on 3 Oct</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Amazon Great Indian Festival</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 Oct for Prime (reported)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Start date confirmed by Amazon; Early Deals live since 25 Sep</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Flipkart Big Billion Days</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">9 Oct, 12:00 AM</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct for Plus, Black, VIP and Flipkart credit card holders</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Confirmed by Flipkart</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Flipkart BBD Curtain Raiser</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Five days before the main sale</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not applicable</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not applicable</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flipkart says selected products open at BBD prices five days early, which points to 4 Oct</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Myntra Big Fashion Festival</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 Oct for Insiders and VIP ticket holders (reported)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Start date confirmed in Myntra&apos;s campaign</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Ajio festive sale</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Ajio usually runs festive offers in the same weeks as Myntra</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Nykaa Diwali sale</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late Oct (expected)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced yet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Full details on each of the big three are in our separate guides: <Link href="/blog/amazon-great-indian-festival-2026-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Festival 2026</Link>, <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart Big Billion Days 2026</Link> and <Link href="/blog/myntra-big-fashion-festival-2026" className="text-[#5B4FBE] font-semibold hover:underline">Myntra Big Fashion Festival 2026</Link>.
                </p>
              </section>

              {/* SECTION 2: Festival dates */}
              <section id="festival-dates" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Festival dates that change when you should buy
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Sale dates tell you when prices drop. Festival dates tell you when you actually need the item in hand. This year the two calendars sit close together, so delivery time matters more than usual.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Festival</th>
                        <th className="p-4 sm:px-6">Date</th>
                        <th className="p-4 sm:px-6">What people usually buy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Sharad Navratri</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">11 to 19 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Ethnic wear, puja items, fasting groceries</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Dussehra</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">20 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Vehicles, appliances, new clothes</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Karwa Chauth</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">28 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sarees, suits, jewellery, mehendi and makeup</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Dhanteras</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">6 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Gold, silver, utensils, appliances</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Diwali</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Gifts, decor, lights, sweets, clothes</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Bhai Dooj</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">11 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Gifts for siblings</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Chhath Puja</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">15 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Puja items, travel home</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Diwali falls on 8 November in 2026, nearly three weeks later than in 2025. Last year Big Billion Days started on 23 September; this year the later Diwali has pushed the big sales into October. It also leaves a gap of almost a month between the first sale week and Diwali, which most platforms are likely to fill with a second round of Diwali offers.
                </p>
              </section>

              {/* SECTION 3: Week-by-week */}
              <section id="week-by-week" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Week-by-week: what to buy and where
                  </h2>
                  <p className="text-[#4A4A6A] leading-relaxed mt-2">
                    The calendar below links each week&apos;s sales to the purchases that make sense in that window.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">3 to 7 October: build your cart and watch early deals</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    This is the week to prepare, not to spend. Two things are already live: Amazon&apos;s Early Deals, which started on 25 September, and Flipkart&apos;s Curtain Raiser, which opens selected products at BBD prices five days before the main sale.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">Use these days to:</p>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li>Add the items you want to your wishlist on each platform and <strong>write down today&apos;s price</strong>. You will need it on sale day to tell a real price drop from a sale banner on the same price.</li>
                    <li>Check which bank card gets the instant discount on each platform. Amazon has listed SBI cards; Flipkart has listed Axis Bank and ICICI Bank cards. Our <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] font-semibold hover:underline">comparison of Big Billion Days and Amazon Great Indian Festival</Link> puts the offers side by side.</li>
                    <li>Decide whether early access is worth it for you. If you are buying a phone or a popular size in a fashion brand, the first hours matter. For most other purchases, the main sale day is fine.</li>
                  </ul>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E] pt-4">7 to 10 October: the main sale window</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    The three biggest sales overlap almost completely in these four days. Prices on popular phones, laptops and TVs are usually lowest in the opening days, when stock is fullest and the launch-day deals run.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">If you are buying</th>
                          <th className="p-4 sm:px-6">Start with</th>
                          <th className="p-4 sm:px-6">Why</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Phones, laptops, TVs</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon and Flipkart</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Deepest launch-day deals and bank offers on high-value orders. Samsung Galaxy and Intel Core Ultra are BBD&apos;s title sponsors this year</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Large appliances</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon and Flipkart</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Exchange offers on old appliances and No Cost EMI</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Fashion and footwear</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Myntra, Ajio</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Wider brand range and size options than the marketplaces</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Beauty</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Nykaa, Myntra, Amazon</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Compare all three; Nykaa&apos;s own big sale is expected later</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Groceries and daily needs</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon, JioMart, quick-commerce apps</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Smaller savings, so only stock up on items you already use</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    Before paying on the marketplaces, check the <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon code page</Link> and the <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon code page</Link> for codes that stack with the sale price.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E] pt-4">11 to 20 October: Navratri and Dussehra</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Navratri begins on Sunday, 11 October. If you need an outfit for the first days, order it during the first sale window rather than waiting, because delivery slows down while the big sales are running.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Ethnic wear, footwear and puja items are the main buys in this stretch. For outfits, compare <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra</Link>, <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Ajio</Link> and <Link href="/stores/lifestyle-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Lifestyle</Link>. For fasting groceries and puja items needed the same day, quick-commerce apps such as <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Blinkit</Link> and <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Zepto</Link> are faster than waiting for a sale delivery.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Many households buy appliances and vehicles on Dussehra (20 October) because it is considered an auspicious day for new purchases. If that is your plan, buy during the main sale window so the item arrives in time. Current festival deals are on our <Link href="/festival-offers/dusshera-offers" className="text-[#5B4FBE] font-semibold hover:underline">Dussehra offers page</Link>.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E] pt-4">21 October to 5 November: Karwa Chauth and the Diwali run-up</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    This is the gap between the first sale wave and Diwali. Expect second-round Diwali sales from Amazon, Flipkart and Myntra, though none has announced dates yet.
                  </p>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li><strong>Karwa Chauth (28 October)</strong> drives demand for sarees, suits, jewellery and beauty. Nykaa&apos;s Diwali sale is expected to start around late October, which makes it a good time for makeup and skincare.</li>
                    <li><strong>Diwali gifting</strong> starts in earnest after Dussehra. If you are buying gifts in bulk for family or office, order before 1 November to stay clear of the last-week delivery rush.</li>
                    <li><strong>Home decor and lights</strong> go fast in the final fortnight. Buy them earlier than you think you need to.</li>
                  </ul>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E] pt-4">6 to 15 November: Dhanteras, Diwali and Bhai Dooj</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Dhanteras on 6 November is traditionally the day to buy gold, silver and new utensils. Jewellery brands and marketplaces usually run making-charge discounts or gold coin offers around this date. See current deals on our <Link href="/stores/categories/jewellery" className="text-[#5B4FBE] font-semibold hover:underline">jewellery offers page</Link>.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    For anything you need on Diwali day itself, rely on quick-commerce and local stores in the final two or three days. Regular e-commerce deliveries can take longer than usual in Diwali week. Last-minute gift and decor deals are tracked on our <Link href="/festival-offers/diwali-offers" className="text-[#5B4FBE] font-semibold hover:underline">Diwali offers page</Link>.
                  </p>
                </div>
              </section>

              {/* SECTION 4: What comes after */}
              <section id="what-comes-after" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  What comes after October: November and December sales
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The festive season does not end with Diwali. Several sales follow in November and December, and some of them beat October prices for specific categories.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Sale</th>
                        <th className="p-4 sm:px-6">Expected timing</th>
                        <th className="p-4 sm:px-6">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Children&apos;s Day offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">14 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Toys, kids&apos; clothing, books</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Nykaa Pink Friday</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late November (expected)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Beauty and luxury beauty, often Nykaa&apos;s deepest discounts of the year</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Black Friday</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">27 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">International brands, electronics, beauty</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Cyber Monday</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">30 Nov</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Software, gadgets, online subscriptions</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Christmas and year-end sales</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Mid to late December</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Winter wear, end-of-season fashion</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">New Year sales</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late December to early January</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Clearance on fashion and electronics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  If a purchase can wait, Black Friday is worth comparing for beauty, international fashion brands and gadgets. We will list deals on the <Link href="/festival-offers/black-friday-offers" className="text-[#5B4FBE] font-semibold hover:underline">Black Friday offers</Link>, <Link href="/festival-offers/cyber-monday-offers" className="text-[#5B4FBE] font-semibold hover:underline">Cyber Monday offers</Link>, <Link href="/festival-offers/christmas-offers" className="text-[#5B4FBE] font-semibold hover:underline">Christmas offers</Link> and <Link href="/festival-offers/new-year-offers" className="text-[#5B4FBE] font-semibold hover:underline">New Year offers</Link> pages as they go live.
                </p>
              </section>

              {/* SECTION 5: Real sale price check */}
              <section id="real-sale-price" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How to tell a real sale price from a sale banner
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A sale tag does not always mean a lower price. Some listings raise the price in the weeks before a sale and then show a large discount on the inflated figure.
                </p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Note the current price this week.</strong> A screenshot of your wishlist is enough.</li>
                  <li><strong>Compare the sale price with your note, not with the MRP.</strong> The MRP is rarely what anyone pays.</li>
                  <li><strong>Check the final price after the bank discount and coupon.</strong> Two listings with the same sale price can end up different once bank offers and caps apply.</li>
                  <li><strong>Check the seller and return policy.</strong> A lower price from a seller with no return option is not always the better deal.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon has said its AI shopping features this year include price history on product pages, which should make this check quicker. For more ways to cut the final bill, see our guide on <Link href="/blog/how-to-save-money-shopping-online-india" className="text-[#5B4FBE] font-semibold hover:underline">how to save money shopping online in India</Link>.
                </p>
              </section>

              {/* SECTION 6: FAQ */}
              <section id="faq" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HelpCircle className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#1A1A2E] text-sm sm:text-base hover:text-[#5B4FBE] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <span className={`text-xl transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                            ⌄
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-5 sm:px-5 text-sm text-[#4A4A6A] leading-relaxed border-t border-[#E8E8F0]/60 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Conclusion Block */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-6 sm:p-8 text-white space-y-4">
                <h3 className="text-xl font-extrabold text-white">Summary</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  The simplest way to use this calendar is to match each purchase to the date you need it, then buy in the sale window just before that. A phone or TV can comes from the 8 to 10 October sales. A Navratri outfit should be ordered in the same window. Diwali gifts can wait for the second round, and anything that is not tied to a festival can wait for November.
                </p>
              </div>

              {/* Share Footer Bar */}
              <div className="bg-[#F0EEFF] rounded-3xl p-6 sm:p-8 border border-[#E0DAFF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#5B4FBE] shadow-xs border border-[#E0DAFF] shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#1A1A2E]">Share this Blog</h3>
                    <p className="text-xs sm:text-sm text-[#6C6C8A] font-medium">Found this helpful? Share it with your friends and family!</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
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

                  {/* Twitter */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(PAGE_TITLE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#000000] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} className="fill-current" />
                    </a>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">Twitter</span>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col items-center">
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(PAGE_TITLE + ' ' + PAGE_URL)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.328-1.503C8.016 23.46 9.96 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.575-.494-5.074-1.353l-.363-.208-3.766.894.912-3.649-.232-.375A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                      </svg>
                    </a>
                    <span className="text-[11px] font-bold text-[#4A4A6A] mt-1.5">WhatsApp</span>
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
              {/* Sidebar Box 1: Key Sale Details */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <Check className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Sale Details</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Amazon Great Indian Festival</strong>
                    <span className="text-gray-600">8 Oct (Prime early access reported 7 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Flipkart Big Billion Days</strong>
                    <span className="text-gray-600">9 Oct (early access 8 Oct for Plus/Black/VIP)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Myntra Big Fashion Festival</strong>
                    <span className="text-gray-600">8 Oct (Insiders/VIP reported 7 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Diwali 2026</strong>
                    <span className="text-gray-600">8 November</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">End Dates</strong>
                    <span className="text-gray-600">Not announced yet for any of the three</span>
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
                    { title: 'All October 2026 Sale Dates', href: '#at-a-glance' },
                    { title: 'Festival Dates to Plan Around', href: '#festival-dates' },
                    { title: 'Week-by-Week: What to Buy', href: '#week-by-week' },
                    { title: 'What Comes After October', href: '#what-comes-after' },
                    { title: 'Spotting a Real Sale Price', href: '#real-sale-price' },
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
                  Stack sale prices with verified coupons on Amazon, Flipkart, Myntra, Nykaa &amp; more.
                </p>
                <Link href="/stores" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View All Coupons</span>
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
