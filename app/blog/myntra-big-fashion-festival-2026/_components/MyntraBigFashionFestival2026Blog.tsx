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
  Ticket,
  AlertTriangle,
  Sparkles,
  Landmark,
  Scale,
  CalendarClock,
  ListChecks,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/myntra-big-fashion-festival-2026';
const PAGE_TITLE = 'Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers';

const RELATED_POSTS = [
  {
    slug: 'big-billion-days-2026-flipkart-upcoming-sales',
    title: "Big Billion Days 2026: Sale Date, Early Access, Bank Offers and Flipkart's Upcoming Sales",
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790489840/big-billion-days-2026-flipkart-upcoming-sales_vdosgd.webp',
    date: 'Sep 27, 2026',
    readTime: '9 min read',
    excerpt: 'Flipkart Big Billion Days 2026 starts Oct 9 with early access on Oct 8. Axis Bank and ICICI Bank offers, deal timings and the full sale calendar.',
  },
  {
    slug: 'amazon-great-indian-festival-2026-upcoming-sales',
    title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
    date: 'Sep 27, 2026',
    readTime: '8 min read',
    excerpt: 'Amazon Great Indian Festival 2026 starts Oct 8, Prime early access on Oct 7. SBI bank offer, live Early Deal prices and the full sale calendar.',
  },
  {
    slug: 'big-billion-days-vs-amazon-great-indian-festival',
    title: 'Big Billion Days vs Amazon Great Indian Festival 2026: Dates, Bank Offers and Which Sale Is Better',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790298079/big-billion-days-vs-amazon-great-indian-festival_dmjxxj.webp',
    date: 'Sep 25, 2026',
    readTime: '8 min read',
    excerpt: 'Big Billion Days 2026 starts Oct 9, Amazon Great Indian Festival on Oct 8. Compare dates, bank offers, early access and phone deals to pick the right sale.',
  },
];

const FAQS = [
  {
    q: 'When does Myntra Big Fashion Festival 2026 start?',
    a: 'Myntra Big Fashion Festival 2026 starts on 8 October 2026 at 12:00 AM for all shoppers. Insiders and VIP ticket holders get early access from 12:00 AM on 7 October.',
  },
  {
    q: 'When does Myntra BFF 2026 end?',
    a: 'Myntra has not announced the end date yet. VIP ticket benefits are listed as valid until 25 October, but the sale itself may end earlier. We will update this page when Myntra confirms it.',
  },
  {
    q: 'How do I get early access to Myntra BFF 2026?',
    a: 'You get early access if you are a Myntra Insider or if you buy the VIP ticket in the Myntra app. Both let you shop from 12:00 AM on 7 October, a day before the main sale.',
  },
  {
    q: 'Which bank offer is available in Myntra BFF 2026?',
    a: 'Myntra had not announced a bank partner as of 1 October 2026. In past sales, Myntra has offered around 10% instant discount on selected cards, with a cap and a minimum order value.',
  },
  {
    q: 'Is Myntra BFF better than Flipkart Big Billion Days for clothes?',
    a: 'For clothes, shoes and beauty, Myntra BFF usually has the wider brand range. Flipkart Big Billion Days makes more sense when you are also buying phones, electronics or appliances and want one bank offer across the whole cart.',
  },
];

export default function MyntraBigFashionFestival2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Myntra Big Fashion Festival 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Fashion
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 1, 2026</span>
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
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790820841/myntra-big-fashion-festival-2026_gbsc9h.webp"
                  alt="Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Myntra Big Fashion Festival (BFF) 2026 opens on <strong>8 October 2026 at midnight</strong>, with early access from <strong>7 October</strong> for Myntra Insiders and VIP ticket holders. That puts it a day before Flipkart Big Billion Days and on the same day as Amazon&apos;s Great Indian Festival. Myntra has not announced the end date or the bank partner yet.
                </p>
                <p className="text-sm text-[#6C6C8A] italic border-t border-[#E8E8F0] pt-4">
                  Last updated: 1 October 2026. We will update this page when Myntra confirms the bank offer and end date.
                </p>
              </div>

              {/* SECTION: At a Glance */}
              <section id="at-a-glance" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <ListChecks className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Myntra BFF 2026 at a Glance
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Detail</th>
                        <th className="p-4 sm:px-6">What We Know on 1 October</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Main sale starts</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 October 2026, 12:00 AM</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Early access</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 October 2026, 12:00 AM, for Insiders and VIP ticket holders</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">End date</td>
                        <td className="p-4 sm:px-6 font-semibold text-orange-600">Not announced</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">VIP ticket</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹19 listed price, lower for some Insiders</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Bank offer</td>
                        <td className="p-4 sm:px-6 font-semibold text-orange-600">Not announced</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Overlaps with</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon Great Indian Festival (from 8 Oct), Flipkart Big Billion Days (from 9 Oct), Navratri (11 to 19 Oct)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION: When Does It Start */}
              <section id="when-does-it-start" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Calendar className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    When Does Myntra Big Fashion Festival 2026 Start?
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The sale opens to everyone on 8 October 2026 at 12:00 AM. Insiders and VIP ticket holders can shop from 12:00 AM on 7 October, a full day ahead.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The end date is still open. Reports so far point to a run of roughly ten days, and the VIP ticket benefits are listed as valid until 25 October. Treat any end date you see before Myntra confirms it as a guess. Myntra is part of the Flipkart group, and its festive sale usually opens a day or two before Big Billion Days, which matches this year&apos;s 8 October start.
                </p>
              </section>

              {/* SECTION: Insider Early Access */}
              <section id="insider-early-access" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Sparkles className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    How Does Myntra Insider Early Access Work?
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Insider early access lets members shop the BFF from 7 October, 24 hours before everyone else. The first hours matter most because popular sizes in discounted brands sell out early.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Myntra Insider is the free loyalty programme on Myntra. You earn Insider status and points by shopping on the platform; there is no separate fee to join.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  How to Check if You Are an Insider
                </h3>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li>Open the Myntra app and go to <strong>Profile</strong>.</li>
                  <li>Tap the <strong>Insider</strong> section. Your status and points show there.</li>
                  <li>If it says you have not qualified yet, early access is still open to you through the VIP ticket (next section).</li>
                </ol>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  What Early Access Does Not Include
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Early access gets you into the sale sooner. It does not guarantee stock, and the bank offer applies only if the bank partner has switched it on for early access. Check the offers strip on the product page before you pay.
                </p>
              </section>

              {/* SECTION: VIP Ticket */}
              <section id="vip-ticket" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Ticket className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Is the Myntra VIP Ticket Worth Buying?
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The VIP ticket is worth it if you plan to shop on 7 October and your cart is large enough for the extra day-one discounts to cover ₹19. If you are only buying one or two items after the sale opens, skip it.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  These are the benefits listed for the 2026 VIP ticket. Check the ticket page in the app for the final terms before you buy.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">VIP Ticket Benefit</th>
                        <th className="p-4 sm:px-6">Detail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Early access</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Shop from 12:00 AM on 7 October</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Extra bank discount on day one</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">An extra 5% on select cards during early access</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Extra brand discount on day one</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">An extra 10% on select top brands</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">VIP-only deal days</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10, 11, 17, 18, 24 and 25 October</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Flat-price deals</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹49 and ₹99 deals, for Insiders</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Price</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹19 listed; some Insiders see a lower price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-start gap-3 bg-[#FFF9F2] border border-[#FFD9A8] rounded-2xl p-4 sm:p-5 mt-4">
                  <AlertTriangle className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#8A5100] leading-relaxed">
                    One condition to watch: the special VIP prices on 7 October are reported to last only for the first two hours of early access. If you buy the ticket, have your cart ready before midnight.
                  </p>
                </div>
              </section>

              {/* SECTION: Bank Offers */}
              <section id="bank-offers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Landmark className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Which Bank Offers Apply in Myntra BFF 2026?
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Myntra had not named a bank partner for BFF 2026 as of 1 October. We will add the bank, discount and cap here as soon as Myntra announces them.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Here is what to expect, based on how Myntra has run past sale offers:
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>The usual format is an instant discount of around 10%</strong> on selected credit and debit cards.</li>
                  <li><strong>There is almost always a cap and a minimum order.</strong> For example, an ICICI Bank offer in an earlier Myntra fashion sale gave 10% off up to ₹1,000 on orders of at least ₹3,000.</li>
                  <li><strong>EMI, net banking and cash on delivery are often excluded</strong> from card offers. Read the terms on the offer strip.</li>
                  <li><strong>Corporate and commercial cards are usually excluded.</strong></li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Until the partner is announced, do not apply for a new card just for this sale. Wait for the actual terms.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  How Myntra Discounts Stack
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  At checkout, savings usually apply in this order:
                </p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li>The sale price shown on the product.</li>
                  <li>A Myntra coupon, if your cart qualifies.</li>
                  <li>The bank instant discount, applied on the amount after the coupon.</li>
                  <li>MynCash or Insider points, where allowed.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A coupon lowers your cart value, so it can push you below a bank offer&apos;s minimum order. If you are close to the minimum, check the final amount with and without the coupon. You can find current Myntra coupons on our{' '}
                  <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon code page</Link>.
                </p>
              </section>

              {/* SECTION: Comparison */}
              <section id="bff-vs-others" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Scale className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Myntra BFF vs Big Billion Days vs Amazon Great Indian Festival for Fashion
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  For clothes, shoes and beauty, Myntra BFF usually has the widest brand range of the three. Amazon and Flipkart are stronger when your fashion buy is part of a larger cart with electronics or home items.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6"></th>
                        <th className="p-4 sm:px-6">Myntra BFF</th>
                        <th className="p-4 sm:px-6">Flipkart Big Billion Days</th>
                        <th className="p-4 sm:px-6">Amazon Great Indian Festival</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Main sale</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">9 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Early access</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 Oct (Insider, VIP ticket)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct (Plus, Black, VIP, Flipkart credit card)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 Oct for Prime (reported, not confirmed by Amazon)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Known bank offer</td>
                        <td className="p-4 sm:px-6 font-semibold text-orange-600">Not announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Axis Bank and ICICI Bank</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">SBI cards</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Best for</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Brand-focused fashion and beauty</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Fashion alongside phones and appliances</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Fashion alongside a mixed cart</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Full details on the other two sales are in our{' '}
                  <Link href="/blog/amazon-great-indian-festival-2026-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Festival 2026 guide</Link> and our{' '}
                  <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days 2026 guide</Link>. If you are deciding between those two, see{' '}
                  <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days vs Amazon Great Indian Festival</Link>.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  It is also worth comparing the same item on other fashion stores before you pay.{' '}
                  <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">AJIO</Link> runs its own festive offers in the same weeks, and brands such as{' '}
                  <Link href="/stores/hm-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">H&amp;M</Link>,{' '}
                  <Link href="/stores/nike-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Nike</Link> and{' '}
                  <Link href="/stores/puma-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Puma</Link> sometimes match or beat marketplace prices on their own sites.
                </p>
              </section>

              {/* SECTION: Navratri and Dussehra */}
              <section id="navratri-dussehra" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <CalendarClock className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Shopping BFF for Navratri and Dussehra
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  BFF falls right on the festival calendar this year. Navratri runs from 11 to 19 October and Dussehra is on 20 October, so most festive outfit buying happens during the sale.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Delivery time is the thing to plan around. An order placed on 8 October usually arrives in a few days, but delivery slows down during big sales. If you need an outfit for the first days of Navratri, order during early access or on day one rather than waiting for a later deal day.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Ethnic wear, footwear and beauty sell fastest in the festive weeks. Our{' '}
                  <Link href="/stores/categories/fashion" className="text-[#5B4FBE] font-semibold hover:underline">fashion offers page</Link> and{' '}
                  <Link href="/stores/categories/beauty" className="text-[#5B4FBE] font-semibold hover:underline">beauty offers page</Link> list current deals across stores if you want to compare outside Myntra.
                </p>
              </section>

              {/* SECTION: How to Plan Your Cart */}
              <section id="plan-your-cart" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <ShoppingBag className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    How to Plan Your Myntra BFF Cart
                  </h2>
                </div>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Most of the work happens before the sale. A cart you build this week is ready to check out in the first minutes of early access.
                </p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-3">
                  <li><strong>Add items to your wishlist now.</strong> Note today&apos;s price for each one, so you can tell on 7 or 8 October whether the sale price is a real drop.</li>
                  <li><strong>Check your size in each brand.</strong> Sizing varies between brands. Look at the size chart and recent reviews that mention fit.</li>
                  <li><strong>Check the return policy on every item.</strong> Some items, such as innerwear and certain beauty products, are often not returnable. Others allow returns or exchanges only within a fixed window.</li>
                  <li><strong>Save your address and payment method</strong> so checkout is quick.</li>
                  <li><strong>Move items from wishlist to bag on the night of 6 or 7 October.</strong> Items in the bag can still sell out, so pay as soon as the price is right.</li>
                  <li><strong>Split large orders if it helps with a bank offer cap.</strong> If the bank discount is capped, two smaller orders can sometimes save more than one large one. Check the offer terms first; some offers count only one transaction per card.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  For more ways to cut the final bill, see our guide on{' '}
                  <Link href="/blog/how-to-save-money-shopping-online-india" className="text-[#5B4FBE] font-semibold hover:underline">how to save money shopping online in India</Link>.
                </p>
              </section>

              {/* SECTION: After BFF */}
              <section id="after-bff" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  What Comes After the Big Fashion Festival?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Myntra usually follows its festive sale with Dussehra and Diwali offers. Diwali falls on 8 November this year, so expect more fashion and gifting sales between Dussehra and Diwali. We track these on our{' '}
                  <Link href="/festival-offers/dusshera-offers" className="text-[#5B4FBE] font-semibold hover:underline">Dussehra offers</Link> and{' '}
                  <Link href="/festival-offers/diwali-offers" className="text-[#5B4FBE] font-semibold hover:underline">Diwali offers</Link> pages.
                </p>
              </section>

              {/* SECTION: FAQ */}
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
                  If you only take one step today, build your wishlist and write down the current prices. On 7 and 8 October, that list will tell you in a few seconds which deals are worth paying for and which are the same price with a sale banner on top.
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
                    <strong className="text-[#1A1A2E] block">Sale Start Date</strong>
                    <span className="text-gray-600">8 Oct 2026 (Early Access: 7 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Early Access For</strong>
                    <span className="text-gray-600">Myntra Insiders & VIP ticket holders</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">VIP Ticket Price</strong>
                    <span className="text-gray-600">₹19 listed, lower for some Insiders</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Bank Partner</strong>
                    <span className="text-gray-600">Not announced yet</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Sale End Date</strong>
                    <span className="text-gray-600">Not announced yet</span>
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
                    { title: 'Myntra BFF 2026 at a Glance', href: '#at-a-glance' },
                    { title: 'When Does It Start?', href: '#when-does-it-start' },
                    { title: 'Insider Early Access', href: '#insider-early-access' },
                    { title: 'Is the VIP Ticket Worth It?', href: '#vip-ticket' },
                    { title: 'Bank Offers', href: '#bank-offers' },
                    { title: 'BFF vs Big Billion Days vs Amazon', href: '#bff-vs-others' },
                    { title: 'Navratri and Dussehra', href: '#navratri-dussehra' },
                    { title: 'How to Plan Your Cart', href: '#plan-your-cart' },
                    { title: 'What Comes After BFF?', href: '#after-bff' },
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
                  Stack Myntra BFF sale prices with verified coupons on Myntra, AJIO, H&amp;M &amp; more.
                </p>
                <Link href="/stores/myntra-coupon-code" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Myntra Coupons</span>
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
